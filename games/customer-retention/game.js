/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var Md=0,Qc=1,Sd=2;var so=1,bd=2,Ks=3,Fi=0,Bt=1,In=2,ms=0,js=1,eh=2,th=3,nh=4,wd=5;var gs=100,Ed=101,Td=102,Ad=103,Rd=104,Cd=200,Pd=201,Id=202,Ld=203,ih=204,sh=205,Dd=206,Nd=207,Ud=208,Fd=209,Od=210,Bd=211,kd=212,zd=213,Hd=214,ha=0,ua=1,da=2,zs=3,fa=4,pa=5,ma=6,ga=7,rh=0,Vd=1,Gd=2,qn=0,oh=1,ah=2,lh=3,ch=4,hh=5,uh=6,dh=7;var fh=300,xs=301,Qs=302,qa=303,$a=304,xa=1e3,Wn=1001,_a=1002,Wt=1003,Wd=1004;var ro=1005;var cn=1006,Za=1007;var fi=1008;var bn=1009,ph=1010,mh=1011,er=1012,Ja=1013,zn=1014,Ln=1015,Hn=1016,Ka=1017,ja=1018,_s=1020,gh=35902,xh=35899,_h=1021,vh=1022,Vn=1023,ui=1026,pi=1027,Qa=1028,el=1029,Oi=1030,tl=1031;var nl=1033,oo=33776,ao=33777,lo=33778,co=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37488,ul=37489,ho=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,bl=37818,wl=37819,El=37820,Tl=37821,Al=36492,Rl=36494,Cl=36495,Pl=36283,Il=36284,uo=36285,Ll=36286;var Rr=2300,va=2301,la=2302,Wc=2303,Xc=2400,Yc=2401,qc=2402;var Xd=3200;var yh=0,Yd=1,mi="",$t="srgb",Cr="srgb-linear",Pr="linear",vt="srgb";var ca=7680;var qd=519,$d=512,Zd=513,Jd=514,Mh=515,Kd=516,jd=517,Sh=518,bh=519,Qd=35044,tr=35048;var wh="300 es",Rn=2e3,Ir=2001;function Zm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ef(){let n=Lr("canvas");return n.style.display="block",n}var Xu={},Hs=null;function Eh(...n){let e="THREE."+n.shift();Hs?Hs("log",e,...n):console.log(e,...n)}function tf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=tf(n);let e="THREE."+n.shift();if(Hs)Hs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function st(...n){n=tf(n);let e="THREE."+n.shift();if(Hs)Hs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function br(...n){let e=n.join(" ");e in Xu||(Xu[e]=!0,nt(...n))}function nf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var sf={[ha]:ha,[da]:ma,[fa]:fa,[zs]:pa,[ua]:ua,[ma]:da,[ga]:ga,[pa]:zs},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,wr=Math.PI/180,Vs=180/Math.PI;function vs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Th(n,e){return(n%e+e)%e}function Km(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function jm(n,e,t){return n!==e?(t-n)/(e-n):0}function Er(n,e,t){return(1-t)*n+t*e}function Qm(n,e,t,i){return Er(n,e,1-Math.exp(-t*i))}function e0(n,e=1){return e-Math.abs(Th(n,e*2)-e)}function t0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function n0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function i0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function s0(n,e){return n+Math.random()*(e-n)}function r0(n){return n*(.5-Math.random())}function o0(n){n!==void 0&&(Yu=n);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function a0(n){return n*wr}function l0(n){return n*Vs}function c0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function h0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ah(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),u=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*u,a*c);break;case"YXY":n.set(l*u,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*u,a*h,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rf(n,e){if(e.constructor===Float32Array)return n;let t=Rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function of(n,e){if(e.constructor===Float32Array)return n;let t=Rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Dl={DEG2RAD:wr,RAD2DEG:Vs,generateUUID:vs,clamp:lt,euclideanModulo:Th,mapLinear:Km,inverseLerp:jm,lerp:Er,damp:Qm,pingpong:e0,smoothstep:t0,smootherstep:n0,randInt:i0,randFloat:s0,randFloatSpread:r0,seededRandom:o0,degToRad:a0,radToDeg:l0,isPowerOfTwo:c0,ceilPowerOfTwo:h0,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:u0,normalize:of,denormalize:rf},Nh=class Nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;var Ue=Nh,hn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a}else{l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),d=l(i/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uh=class Uh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;var U=Uh,Sc=new U,qu=new hn,Fh=class Fh{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],b=s[4],M=s[7],S=s[2],w=s[5],_=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*m+a*b+l*w,r[6]=o*g+a*M+l*_,r[1]=c*x+h*y+f*S,r[4]=c*m+h*b+f*w,r[7]=c*g+h*M+f*_,r[2]=d*x+u*y+p*S,r[5]=d*m+u*b+p*w,r[8]=d*g+u*M+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bc.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;var rt=Fh,bc=new rt,$u=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){let n={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cr]:{primaries:e,whitePoint:i,transfer:Pr,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}var ft=d0();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=Lr("canvas")),Es.width=e.width,Es.height=e.height;let s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},f0=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wc(s[o].image)):r.push(wc(s[o]))}else r=wc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var p0=0,Ec=new U,un=class n extends Xn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wn,s=Wn,r=cn,o=fi,a=Vn,l=bn,c=n.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=vs(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=fh;un.DEFAULT_ANISOTROPY=1;var Oh=class Oh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(u+1)/2,S=(g+1)/2,w=(h+d)/4,_=(f+x)/4,v=(p+m)/4;return b>M&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=_/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=_/r,s=v/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;var Lt=Oh,Ma=class extends Xn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Ma{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Dr=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ya=class Ya{constructor(e,t,i,s,r,o,a,l,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,d,u,p,x,m)}set(e,t,i,s,r,o,a,l,c,h,f,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,t,i){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ti.crossVectors(i,vn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ti.crossVectors(i,vn)),Ti.normalize(),ko.crossVectors(vn,Ti),s[0]=Ti.x,s[4]=ko.x,s[8]=vn.x,s[1]=Ti.y,s[5]=ko.y,s[9]=vn.y,s[2]=Ti.z,s[6]=ko.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],b=i[7],M=i[11],S=i[15],w=s[0],_=s[4],v=s[8],T=s[12],A=s[1],C=s[5],L=s[9],V=s[13],I=s[2],H=s[6],Y=s[10],N=s[14],J=s[3],z=s[7],K=s[11],G=s[15];return r[0]=o*w+a*A+l*I+c*J,r[4]=o*_+a*C+l*H+c*z,r[8]=o*v+a*L+l*Y+c*K,r[12]=o*T+a*V+l*N+c*G,r[1]=h*w+f*A+d*I+u*J,r[5]=h*_+f*C+d*H+u*z,r[9]=h*v+f*L+d*Y+u*K,r[13]=h*T+f*V+d*N+u*G,r[2]=p*w+x*A+m*I+g*J,r[6]=p*_+x*C+m*H+g*z,r[10]=p*v+x*L+m*Y+g*K,r[14]=p*T+x*V+m*N+g*G,r[3]=y*w+b*A+M*I+S*J,r[7]=y*_+b*C+M*H+S*z,r[11]=y*v+b*L+M*Y+S*K,r[15]=y*T+b*V+M*N+S*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*u-c*d,b=a*u-c*f,M=a*d-l*f,S=o*u-c*h,w=o*d-l*h,_=o*f-a*h;return t*(x*y-m*b+g*M)-i*(p*y-m*S+g*w)+s*(p*b-x*S+g*_)-r*(p*M-x*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,b=t*l-s*o,M=t*c-r*o,S=i*l-s*a,w=i*c-r*a,_=s*c-r*l,v=h*x-f*p,T=h*m-d*p,A=h*g-u*p,C=f*m-d*x,L=f*g-u*x,V=d*g-u*m,I=y*V-b*L+M*C+S*A-w*T+_*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return e[0]=(a*V-l*L+c*C)*H,e[1]=(s*L-i*V-r*C)*H,e[2]=(x*_-m*w+g*S)*H,e[3]=(d*w-f*_-u*S)*H,e[4]=(l*A-o*V-c*T)*H,e[5]=(t*V-s*A+r*T)*H,e[6]=(m*M-p*_-g*b)*H,e[7]=(h*_-d*M+u*b)*H,e[8]=(o*L-a*A+c*v)*H,e[9]=(i*A-t*L-r*v)*H,e[10]=(p*w-x*M+g*y)*H,e[11]=(f*M-h*w-u*y)*H,e[12]=(a*T-o*C-l*v)*H,e[13]=(t*C-i*T+s*v)*H,e[14]=(x*b-p*S-m*y)*H,e[15]=(h*S-f*b+d*y)*H,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,x=o*h,m=o*f,g=a*f,y=l*c,b=l*h,M=l*f,S=i.x,w=i.y,_=i.z;return s[0]=(1-(x+g))*S,s[1]=(u+M)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(u-M)*w,s[5]=(1-(d+g))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(p+b)*_,s[9]=(m-y)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ts.set(s[0],s[1],s[2]).length(),a=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fn.copy(this);let c=1/o,h=1/a,f=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Rn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Rn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ir)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Rn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Rn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ir)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ya.prototype.isMatrix4=!0;var ht=Ya,Ts=new U,Fn=new ht,m0=new U(0,0,0),g0=new U(1,1,1),Ti=new U,ko=new U,vn=new U,Ju=new ht,Ku=new hn,fn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},x0=0,ju=new U,As=new hn,ri=new ht,zo=new U,gr=new U,_0=new U,v0=new hn,Qu=new U(1,0,0),ed=new U(0,1,0),td=new U(0,0,1),nd={type:"added"},y0={type:"removed"},Rs={type:"childadded",child:null},Tc={type:"childremoved",child:null},pn=class n extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new fn,i=new hn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new rt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(ed,e)}rotateZ(e){return this.rotateOnAxis(td,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(ed,e)}translateZ(e){return this.translateOnAxis(td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(gr,zo,this.up):ri.lookAt(zo,gr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ri),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nd),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nd),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new U(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},M0={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Th(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=af[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ft.workingToColorSpace(nn.copy(this),e),Math.round(lt(nn.r*255,0,255))*65536+Math.round(lt(nn.g*255,0,255))*256+Math.round(lt(nn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(nn.copy(this),t);let i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$t){ft.workingToColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,s=nn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Ho);let i=Er(Ai.h,Ho.h,t),s=Er(Ai.s,Ho.s,t),r=Er(Ai.l,Ho.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new tt;tt.NAMES=af;var ls=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},On=new U,oi=new U,Rc=new U,ai=new U,Cs=new U,Ps=new U,id=new U,Cc=new U,Pc=new U,Ic=new U,Lc=new Lt,Dc=new Lt,Nc=new Lt,Ii=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),oi.subVectors(i,t),Rc.subVectors(e,t);let o=On.dot(On),a=On.dot(oi),l=On.dot(Rc),c=oi.dot(oi),h=oi.dot(Rc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Lc.setScalar(0),Dc.setScalar(0),Nc.setScalar(0),Lc.fromBufferAttribute(e,t),Dc.fromBufferAttribute(e,i),Nc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Lc,r.x),o.addScaledVector(Dc,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),oi.subVectors(e,t),On.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),On.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Cs.subVectors(s,i),Ps.subVectors(r,i),Cc.subVectors(e,i);let l=Cs.dot(Cc),c=Ps.dot(Cc);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,s);let h=Cs.dot(Pc),f=Ps.dot(Pc);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Cs,o);Ic.subVectors(e,r);let u=Cs.dot(Ic),p=Ps.dot(Ic);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ps,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return id.subVectors(r,s),a=(f-h)/(f-h+(u-p)),t.copy(s).addScaledVector(id,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Go.subVectors(this.max,xr),Is.subVectors(e.a,xr),Ls.subVectors(e.b,xr),Ds.subVectors(e.c,xr),Ri.subVectors(Ls,Is),Ci.subVectors(Ds,Ls),is.subVectors(Is,Ds);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-is.z,is.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,is.z,0,-is.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-is.y,is.x,0];return!Uc(t,Is,Ls,Ds,Go)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Is,Ls,Ds,Go))?!1:(Wo.crossVectors(Ri,Ci),t=[Wo.x,Wo.y,Wo.z],Uc(t,Is,Ls,Ds,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,Vo=new Yn,Is=new U,Ls=new U,Ds=new U,Ri=new U,Ci=new U,is=new U,xr=new U,Go=new U,Wo=new U,ss=new U;function Uc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ft=new U,Xo=new Ue,S0=0,Et=class extends Xn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?Rh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):of(e,this.array)}};var Ur=class extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fr=class extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}},b0=new Yn,_r=new U,Fc=new U,Cn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):b0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Fc)),this.expandByPoint(_r.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},w0=0,An=new ht,Oc=new pn,Ns=new U,yn=new Yn,vr=new Yn,Gt=new U,At=class n extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?Fr:Ur)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(yn.min,vr.min),yn.expandByPoint(Gt),Gt.addVectors(yn.max,vr.max),yn.expandByPoint(Gt)):(yn.expandByPoint(vr.min),yn.expandByPoint(vr.max))}yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),Gt.add(Ns)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Et(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let T=0;T<i.count;T++)a[T]=new U,l[T]=new U;let h=new U,f=new U,d=new U,u=new Ue,p=new Ue,x=new Ue,m=new U,g=new U;function y(T,A,C){c[T]=c[A]=c[C]=1,h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,C),f.sub(h),d.sub(h),p.sub(u),x.sub(u);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(L),a[T].add(m),a[A].add(m),a[C].add(m),l[T].add(g),l[A].add(g),l[C].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,A=b.length;T<A;++T){let C=b[T],L=C.start,V=C.count;for(let I=L,H=L+V;I<H;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new U,S=new U,w=new U,_=new U;function v(T){w.fromBufferAttribute(s,T),_.copy(w);let A=a[T];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(_,A);let L=S.dot(l[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,L)}for(let T=0,A=i.count;T<A;++T)c[T]&&v(T);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new Et(d,h,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bc=new U,E0=new U,T0=new rt,kn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Bc.subVectors(i,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||T0.getNormalMatrix(e),s=this.coplanarPoint(Bc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},A0=0,cs=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=js,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new kn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new U,kc=new U,Yo=new U,qo=new U,ba=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kc.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),qo.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Yo),a=qo.dot(this.direction),l=-qo.dot(Yo),c=qo.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(kc).addScaledVector(Yo,d),u}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,b=i.z-o.z,M=Math.abs(l),S=Math.abs(c),w=Math.abs(h),_,v,T,A,C,L,V,I,H,Y,N,J;if(M>=S&&M>=w?(T=l,L=f,H=p,J=g,l>=0?(_=c,v=h,A=d,C=u,V=x,I=m,Y=y,N=b):(_=h,v=c,A=u,C=d,V=m,I=x,Y=b,N=y)):S>=w?(T=c,L=d,H=x,J=y,c>=0?(_=h,v=l,A=u,C=f,V=m,I=p,Y=b,N=g):(_=l,v=h,A=f,C=u,V=p,I=m,Y=g,N=b)):(T=h,L=u,H=m,J=b,h>=0?(_=l,v=c,A=f,C=d,V=p,I=x,Y=g,N=y):(_=c,v=l,A=d,C=f,V=x,I=p,Y=y,N=g)),T===0)return null;let z=_/T,K=v/T,G=1/T,ge=A-z*L,ve=C-K*L,Z=V-z*H,xe=I-K*H,Le=Y-z*J,he=N-K*J,j=Le*xe-he*Z,be=ge*he-ve*Le,Ze=Z*ve-xe*ge;if(s){if(j<0||be<0||Ze<0)return null}else if((j<0||be<0||Ze<0)&&(j>0||be>0||Ze>0))return null;let we=j+be+Ze;if(we===0)return null;let Ke=G*(j*L+be*H+Ze*J);return(we>0?Ke<0:Ke>0)?null:this.at(Ke/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hs=class extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sd=new ht,rs=new ba,$o=new Cn,rd=new U,Zo=new U,Jo=new U,Ko=new U,zc=new U,jo=new U,od=new U,Qo=new U,mt=class extends pn{constructor(e=new At,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(zc.fromBufferAttribute(f,e),o?jo.addScaledVector(zc,h):jo.addScaledVector(zc.sub(t),h))}t.add(jo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!($o.containsPoint(rs.origin)===!1&&(rs.intersectSphere($o,rd)===null||rs.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(sd.copy(r).invert(),rs.copy(e.ray).applyMatrix4(sd),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=y,S=b;M<S;M+=3){let w=a.getX(M),_=a.getX(M+1),v=a.getX(M+2);s=ea(this,g,e,i,c,h,f,w,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=ea(this,o,e,i,c,h,f,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=y,S=b;M<S;M+=3){let w=M,_=M+1,v=M+2;s=ea(this,g,e,i,c,h,f,w,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,b=m+1,M=m+2;s=ea(this,o,e,i,c,h,f,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function R0(n,e,t,i,s,r,o,a){let l;if(e.side===Bt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:n}}function ea(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Jo),n.getVertexPosition(c,Ko);let h=R0(n,e,t,i,Zo,Jo,Ko,od);if(h){let f=new U;Ii.getBarycoord(od,Zo,Jo,Ko,f),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,l,c,f,new Ue)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,f,new Ue)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Ii.getNormal(Zo,Jo,Ko,d.normal),h.face=d,h.barycoord=f}return h}var Or=class extends un{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Wt,h=Wt,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends Et{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new ht,ad=new ht,ta=[],ld=new Yn,C0=new ht,yr=new mt,Mr=new Cn,Br=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),ld.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Us),Mr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),ad.multiplyMatrices(i,Us),yr.matrixWorld=ad,yr.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){let l=ta[o];l.instanceId=r,l.object=this,t.push(l)}ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,Qa,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new Cn,P0=new Ue(.5,.5),na=new U,us=class{constructor(e=new kn,t=new kn,i=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],b=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,u-h,g-p,S-y).normalize(),s[1].setComponents(c+o,u+h,g+p,S+y).normalize(),s[2].setComponents(c+a,u+f,g+x,S+b).normalize(),s[3].setComponents(c-a,u-f,g-x,S-b).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,u-d,g-m,S-M).normalize();else if(s[4].setComponents(c-l,u-d,g-m,S-M).normalize(),t===Rn)s[5].setComponents(c+l,u+d,g+m,S+M).normalize();else if(t===Ir)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=P0.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cd=new ht,wa=class n{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];cd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new us),i[s].setFromProjectionMatrix(cd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new us),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var kr=class extends un{constructor(e=[],t=xs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zr=class extends un{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends un{constructor(e,t,i=zn,s,r,o,a=Wt,l=Wt,c,h=ui,f=1){if(h!==ui&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hr=class extends di{constructor(e,t=zn,i=xs,s,r,o=Wt,a=Wt,l,c=ui){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vr=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dt=class n extends At{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function p(x,m,g,y,b,M,S,w,_,v,T){let A=M/_,C=S/v,L=M/2,V=S/2,I=w/2,H=_+1,Y=v+1,N=0,J=0,z=new U;for(let K=0;K<Y;K++){let G=K*C-V;for(let ge=0;ge<H;ge++){let ve=ge*A-L;z[x]=ve*y,z[m]=G*b,z[g]=I,c.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[g]=w>0?1:-1,h.push(z.x,z.y,z.z),f.push(ge/_),f.push(1-K/v),N+=1}}for(let K=0;K<v;K++)for(let G=0;G<_;G++){let ge=d+G+H*K,ve=d+G+H*(K+1),Z=d+(G+1)+H*(K+1),xe=d+(G+1)+H*K;l.push(ge,ve,xe),l.push(ve,Z,xe),J+=6}a.addGroup(u,J,T),u+=J,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mn=class n extends At{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function y(){let M=new U,S=new U,w=0,_=(t-e)/i;for(let v=0;v<=r;v++){let T=[],A=v/r,C=A*(t-e)+e;for(let L=0;L<=s;L++){let V=L/s,I=V*l+a,H=Math.sin(I),Y=Math.cos(I);S.x=C*H,S.y=-A*i+m,S.z=C*Y,f.push(S.x,S.y,S.z),M.set(H,_,Y).normalize(),d.push(M.x,M.y,M.z),u.push(V,1-A),T.push(p++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let A=x[T][v],C=x[T+1][v],L=x[T+1][v+1],V=x[T][v+1];(e>0||T!==0)&&(h.push(A,C,V),w+=3),(t>0||T!==r-1)&&(h.push(C,L,V),w+=3)}c.addGroup(g,w,0),g+=w}function b(M){let S=p,w=new Ue,_=new U,v=0,T=M===!0?e:t,A=M===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,m*A,0),d.push(0,A,0),u.push(.5,.5),p++;let C=p;for(let L=0;L<=s;L++){let I=L/s*l+a,H=Math.cos(I),Y=Math.sin(I);_.x=T*Y,_.y=m*A,_.z=T*H,f.push(_.x,_.y,_.z),d.push(0,A,0),w.x=H*.5+.5,w.y=Y*.5*A+.5,u.push(w.x,w.y),p++}for(let L=0;L<s;L++){let V=S+L,I=C+L;M===!0?h.push(I,I+1,V):h.push(I+1,I,V),v+=3}c.addGroup(g,v,M===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gr=class n extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new U,M=new U,S=new U;for(let w=0;w<t.length;w+=3)u(t[w+0],b),u(t[w+1],M),u(t[w+2],S),l(b,M,S,y)}function l(y,b,M,S){let w=S+1,_=[];for(let v=0;v<=w;v++){_[v]=[];let T=y.clone().lerp(M,v/w),A=b.clone().lerp(M,v/w),C=w-v;for(let L=0;L<=C;L++)L===0&&v===w?_[v][L]=T:_[v][L]=T.clone().lerp(A,L/C)}for(let v=0;v<w;v++)for(let T=0;T<2*(w-v)-1;T++){let A=Math.floor(T/2);T%2===0?(d(_[v][A+1]),d(_[v+1][A]),d(_[v][A])):(d(_[v][A+1]),d(_[v+1][A+1]),d(_[v+1][A]))}}function c(y){let b=new U;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new U;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(M,1-S)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],S=o[y+4],w=Math.max(b,M,S),_=Math.min(b,M,S);w>.9&&_<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function p(){let y=new U,b=new U,M=new U,S=new U,w=new Ue,_=new Ue,v=new Ue;for(let T=0,A=0;T<r.length;T+=9,A+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),w.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),S.copy(y).add(b).add(M).divideScalar(3);let C=m(S);x(w,A+0,y,C),x(_,A+2,b,C),x(v,A+4,M,C)}}function x(y,b,M,S){S<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,s=[],r=[],o=[],a=new U,l=new ht;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(lt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(lt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ys=class extends dn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ea=class extends Ys{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var hd=new U,ud=new U,Hc=new Ch,Vc=new Ch,Gc=new Ch,Ta=class extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ud.subVectors(s[0],s[1]).add(s[0]),c=ud);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Hc.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,x,m),Vc.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,x,m),Gc.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Vc.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Gc.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(Hc.calc(l),Vc.calc(l),Gc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function I0(n,e){let t=1-n;return t*t*e}function L0(n,e){return 2*(1-n)*n*e}function D0(n,e){return n*n*e}function Tr(n,e,t,i){return I0(n,e)+L0(n,t)+D0(n,i)}function N0(n,e){let t=1-n;return t*t*t*e}function U0(n,e){let t=1-n;return 3*t*t*n*e}function F0(n,e){return 3*(1-n)*n*n*e}function O0(n,e){return n*n*n*e}function Ar(n,e,t,i,s){return N0(n,e)+U0(n,t)+F0(n,i)+O0(n,s)}var Wr=class extends dn{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ar(e,s.x,r.x,o.x,a.x),Ar(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends dn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ar(e,s.x,r.x,o.x,a.x),Ar(e,s.y,r.y,o.y,a.y),Ar(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends dn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends dn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends dn{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends dn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y),Tr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(dd(a,l.x,c.x,h.x,f.x),dd(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Ta,CubicBezierCurve:Wr,CubicBezierCurve3:Aa,EllipseCurve:Ys,LineCurve:Xr,LineCurve3:Ra,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:qr,SplineCurve:$r}),Pa=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ca[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ca[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ds=class extends Pa{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Xr(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Yr(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Wr(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $r(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ys(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qs=class extends ds{constructor(e){super(e),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ds().fromJSON(s))}return this}};function B0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=lf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=G0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let d=t;d<s;d+=t){let u=n[d],p=n[d+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Zr(r,o,t,a,l,c,0),o}function lf(n,e,t,i,s){let r;if(s===eg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=fd(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=fd(o/i|0,n[o],n[o+1],r);return r&&$s(r,r.next)&&(Kr(r),r=r.next),r}function fs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($s(t,t.next)||It(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Zr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&$0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?z0(n,i,s,r):k0(n)){e.push(l.i,n.i,c.i),Kr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=H0(fs(n),e),Zr(n,e,t,i,s,r,2)):o===2&&V0(n,e,t,i,s,r):Zr(fs(n),e,t,i,s,r,1);break}}}function k0(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=u&&Sr(s,a,r,l,o,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function z0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,l,c),p=Math.min(h,f,d),x=Math.max(a,l,c),m=Math.max(h,f,d),g=$c(u,p,e,t,i),y=$c(x,m,e,t,i),b=n.prevZ,M=n.nextZ;for(;b&&b.z>=g&&M&&M.z<=y;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Sr(a,h,l,f,c,d,b.x,b.y)&&It(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Sr(a,h,l,f,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Sr(a,h,l,f,c,d,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Sr(a,h,l,f,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function H0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!$s(i,s)&&hf(i,t,t.next,s)&&Jr(i,s)&&Jr(s,i)&&(e.push(i.i,t.i,s.i),Kr(t),Kr(t.next),t=n=s),t=t.next}while(t!==n);return fs(t)}function V0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K0(o,a)){let l=uf(o,a);o=fs(o,o.next),l=fs(l,l.next),Zr(o,e,t,i,s,r,0),Zr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function G0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=lf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(J0(c))}s.sort(W0);for(let r=0;r<s.length;r++)t=X0(s[r],t);return t}function W0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function X0(n,e){let t=Y0(n,e);if(!t)return e;let i=uf(t,n);return fs(i,i.next),fs(t,t.next)}function Y0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if($s(n,t))return t;do{if($s(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&cf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Jr(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&q0(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function q0(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function $0(n,e,t,i){let s=n;do s.z===0&&(s.z=$c(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Z0(s)}function Z0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function $c(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function J0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function cf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Sr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&cf(n,e,t,i,s,r,o,a)}function K0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!j0(n,e)&&(Jr(n,e)&&Jr(e,n)&&Q0(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||$s(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $s(n,e){return n.x===e.x&&n.y===e.y}function hf(n,e,t,i){let s=sa(It(n,e,t)),r=sa(It(n,e,i)),o=sa(It(t,i,n)),a=sa(It(t,i,e));return!!(s!==r&&o!==a||s===0&&ia(n,t,e)||r===0&&ia(n,i,e)||o===0&&ia(t,n,i)||a===0&&ia(t,e,i))}function ia(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sa(n){return n>0?1:n<0?-1:0}function j0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Jr(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function Q0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function uf(n,e){let t=Zc(n.i,n.x,n.y),i=Zc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function fd(n,e,t,i){let s=Zc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Jc=class{static triangulate(e,t,i=2){return B0(e,t,i)}},as=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];pd(e),md(i,e);let o=e.length;t.forEach(pd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,md(i,t[l]);let a=Jc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function pd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function md(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var jr=class n extends At{constructor(e=new qs([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:tg,b,M=!1,S,w,_,v;if(g){b=g.getSpacedPoints(h),M=!0,d=!1;let re=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,re),w=new U,_=new U,v=new U}d||(m=0,u=0,p=0,x=0);let T=a.extractPoints(c),A=T.shape,C=T.holes;if(!as.isClockWise(A)){A=A.reverse();for(let re=0,Se=C.length;re<Se;re++){let Re=C[re];as.isClockWise(Re)&&(C[re]=Re.reverse())}}function V(re){let Re=10000000000000001e-36,le=re[0];for(let oe=1;oe<=re.length;oe++){let Ee=oe%re.length,De=re[Ee],Ge=De.x-le.x,Je=De.y-le.y,Qe=Ge*Ge+Je*Je,O=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(le.x),Math.abs(le.y)),de=Re*O*O;if(Qe<=de){re.splice(Ee,1),oe--;continue}le=De}}V(A),C.forEach(V);let I=C.length,H=A;for(let re=0;re<I;re++){let Se=C[re];A=A.concat(Se)}function Y(re,Se,Re){return Se||st("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Se,Re)}let N=A.length;function J(re,Se,Re){let le,oe,Ee,De=re.x-Se.x,Ge=re.y-Se.y,Je=Re.x-re.x,Qe=Re.y-re.y,O=De*De+Ge*Ge,de=De*Qe-Ge*Je;if(Math.abs(de)>Number.EPSILON){let Me=Math.sqrt(O),We=Math.sqrt(Je*Je+Qe*Qe),ae=Se.x-Ge/Me,it=Se.y+De/Me,Oe=Re.x-Qe/We,ke=Re.y+Je/We,P=((Oe-ae)*Qe-(ke-it)*Je)/(De*Qe-Ge*Je);le=ae+De*P-re.x,oe=it+Ge*P-re.y;let E=le*le+oe*oe;if(E<=2)return new Ue(le,oe);Ee=Math.sqrt(E/2)}else{let Me=!1;De>Number.EPSILON?Je>Number.EPSILON&&(Me=!0):De<-Number.EPSILON?Je<-Number.EPSILON&&(Me=!0):Math.sign(Ge)===Math.sign(Qe)&&(Me=!0),Me?(le=-Ge,oe=De,Ee=Math.sqrt(O)):(le=De,oe=Ge,Ee=Math.sqrt(O/2))}return new Ue(le/Ee,oe/Ee)}let z=[];for(let re=0,Se=H.length,Re=Se-1,le=re+1;re<Se;re++,Re++,le++)Re===Se&&(Re=0),le===Se&&(le=0),z[re]=J(H[re],H[Re],H[le]);let K=[],G,ge=z.concat();for(let re=0,Se=I;re<Se;re++){let Re=C[re];G=[];for(let le=0,oe=Re.length,Ee=oe-1,De=le+1;le<oe;le++,Ee++,De++)Ee===oe&&(Ee=0),De===oe&&(De=0),G[le]=J(Re[le],Re[Ee],Re[De]);K.push(G),ge=ge.concat(G)}let ve;if(m===0)ve=as.triangulateShape(H,C);else{let re=[],Se=[];for(let Re=0;Re<m;Re++){let le=Re/m,oe=u*Math.cos(le*Math.PI/2),Ee=p*Math.sin(le*Math.PI/2)+x;for(let De=0,Ge=H.length;De<Ge;De++){let Je=Y(H[De],z[De],Ee);be(Je.x,Je.y,-oe),le===0&&re.push(Je)}for(let De=0,Ge=I;De<Ge;De++){let Je=C[De];G=K[De];let Qe=[];for(let O=0,de=Je.length;O<de;O++){let Me=Y(Je[O],G[O],Ee);be(Me.x,Me.y,-oe),le===0&&Qe.push(Me)}le===0&&Se.push(Qe)}}ve=as.triangulateShape(re,Se)}let Z=ve.length,xe=p+x;for(let re=0;re<N;re++){let Se=d?Y(A[re],ge[re],xe):A[re];M?(_.copy(S.normals[0]).multiplyScalar(Se.x),w.copy(S.binormals[0]).multiplyScalar(Se.y),v.copy(b[0]).add(_).add(w),be(v.x,v.y,v.z)):be(Se.x,Se.y,0)}for(let re=1;re<=h;re++)for(let Se=0;Se<N;Se++){let Re=d?Y(A[Se],ge[Se],xe):A[Se];M?(_.copy(S.normals[re]).multiplyScalar(Re.x),w.copy(S.binormals[re]).multiplyScalar(Re.y),v.copy(b[re]).add(_).add(w),be(v.x,v.y,v.z)):be(Re.x,Re.y,f/h*re)}for(let re=m-1;re>=0;re--){let Se=re/m,Re=u*Math.cos(Se*Math.PI/2),le=p*Math.sin(Se*Math.PI/2)+x;for(let oe=0,Ee=H.length;oe<Ee;oe++){let De=Y(H[oe],z[oe],le);be(De.x,De.y,f+Re)}for(let oe=0,Ee=C.length;oe<Ee;oe++){let De=C[oe];G=K[oe];for(let Ge=0,Je=De.length;Ge<Je;Ge++){let Qe=Y(De[Ge],G[Ge],le);M?be(Qe.x,Qe.y+b[h-1].y,b[h-1].x+Re):be(Qe.x,Qe.y,f+Re)}}}Le(),he();function Le(){let re=s.length/3;if(d){let Se=0,Re=N*Se;for(let le=0;le<Z;le++){let oe=ve[le];Ze(oe[2]+Re,oe[1]+Re,oe[0]+Re)}Se=h+m*2,Re=N*Se;for(let le=0;le<Z;le++){let oe=ve[le];Ze(oe[0]+Re,oe[1]+Re,oe[2]+Re)}}else{for(let Se=0;Se<Z;Se++){let Re=ve[Se];Ze(Re[2],Re[1],Re[0])}for(let Se=0;Se<Z;Se++){let Re=ve[Se];Ze(Re[0]+N*h,Re[1]+N*h,Re[2]+N*h)}}i.addGroup(re,s.length/3-re,0)}function he(){let re=s.length/3,Se=0;j(H,Se),Se+=H.length;for(let Re=0,le=C.length;Re<le;Re++){let oe=C[Re];j(oe,Se),Se+=oe.length}i.addGroup(re,s.length/3-re,1)}function j(re,Se){let Re=re.length;for(;--Re>=0;){let le=Re,oe=Re-1;oe<0&&(oe=re.length-1);for(let Ee=0,De=h+m*2;Ee<De;Ee++){let Ge=N*Ee,Je=N*(Ee+1),Qe=Se+le+Ge,O=Se+oe+Ge,de=Se+oe+Je,Me=Se+le+Je;we(Qe,O,de,Me)}}}function be(re,Se,Re){l.push(re),l.push(Se),l.push(Re)}function Ze(re,Se,Re){Ke(re),Ke(Se),Ke(Re);let le=s.length/3,oe=y.generateTopUV(i,s,le-3,le-2,le-1);Ye(oe[0]),Ye(oe[1]),Ye(oe[2])}function we(re,Se,Re,le){Ke(re),Ke(Se),Ke(le),Ke(Se),Ke(Re),Ke(le);let oe=s.length/3,Ee=y.generateSideWallUV(i,s,oe-6,oe-3,oe-2,oe-1);Ye(Ee[0]),Ye(Ee[1]),Ye(Ee[3]),Ye(Ee[1]),Ye(Ee[2]),Ye(Ee[3])}function Ke(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ye(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ng(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ca[s.type]().fromJSON(s)),new n(i,e.options)}},tg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ue(r,o),new Ue(a,l),new Ue(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[s*3],u=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-f),new Ue(d,1-p),new Ue(x,1-g)]:[new Ue(a,1-l),new Ue(h,1-f),new Ue(u,1-p),new Ue(m,1-g)]}};function ng(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qr=class n extends Gr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},eo=class n extends At{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new U,d=new Ue,u=new U,p=new U,x=new U,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let y=0;y<=t;y++){let b=i+y*h*s,M=Math.sin(b),S=Math.cos(b);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*M,f.y=e[w].y,f.z=e[w].x*S,o.push(f.x,f.y,f.z),d.x=y/t,d.y=w/(e.length-1),a.push(d.x,d.y);let _=l[3*w+0]*M,v=l[3*w+1],T=l[3*w+0]*S;c.push(_,v,T)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let M=b+y*e.length,S=M,w=M+e.length,_=M+e.length+1,v=M+1;r.push(S,w,v),r.push(_,v,w)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Zs=class n extends Gr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Li=class n extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let b=0;b<c;b++){let M=b*f-r;p.push(M,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,M=y+c*(g+1),S=y+1+c*(g+1),w=y+1+c*g;u.push(b,M,w),u.push(M,S,w)}this.setIndex(u),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Pn=class n extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,d=new U,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],b=g/i,M=o+b*a,S=e*Math.cos(M),w=Math.sqrt(e*e-S*S),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){let T=v/t,A=s+T*r;f.x=-w*Math.cos(A),f.y=S,f.z=w*Math.sin(A),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-b),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let b=h[g][y+1],M=h[g][y],S=h[g+1][y],w=h[g+1][y+1];(g!==0||o>0)&&u.push(b,M,w),(g!==i-1||l<Math.PI)&&u.push(M,S,w)}this.setIndex(u),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ps=class n extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],d=new U,u=new U,p=new U;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let y=g/s*r;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(g/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(g,y,M),l.push(y,b,M)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var to=class n extends At{constructor(e=new qr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new Ue,h=new U,f=[],d=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),y(),g()}function m(b){h=e.getPointAt(b/t,h);let M=o.normals[b],S=o.binormals[b];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,v=Math.sin(_),T=-Math.cos(_);l.x=T*M.x+v*S.x,l.y=T*M.y+v*S.y,l.z=T*M.z+v*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let M=1;M<=s;M++){let S=(s+1)*(b-1)+(M-1),w=(s+1)*b+(M-1),_=(s+1)*b+M,v=(s+1)*(b-1)+M;p.push(S,w,v),p.push(w,_,v)}}function y(){for(let b=0;b<=t;b++)for(let M=0;M<=s;M++)c.x=b/t,c.y=M/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(gd(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(gd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=ys(n[t]);for(let s in i)e[s]=i[s]}return e}function gd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ig(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ph(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var df={clone:ys,merge:rn},sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ia=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var La=class extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ra(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Di=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Di{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,a=2*t-i;break;case qc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:o=e,l=2*i-t;break;case qc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,b=(-1-u)*m+(1.5+u)*x+.5*p,M=u*m-u*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+b*o[l+S]+M*o[f+S];return r}},Ua=class extends Di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Fa=class extends Di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Oa=class extends Di{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=u*d+p*2,y=f[g],b=f[g+1],M=e*d+p*2,S=h[M],w=h[M+1],_=ag(i,t,y,S,s);r[p]=ff(_,x,b,w,m)}return r}};function ff(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function og(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function ag(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=ff(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=og(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ra(e.settings)&&(i.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case Wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ra(this.settings)&&(xd(this.settings.inTangents,e),xd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ra(this.settings)&&(_d(this.settings.inTangents,e),_d(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){st("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===la,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,d=f-i,u=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function _d(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=va;var Ni=class extends Sn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Rr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Ba.prototype.ValueTypeName="color";var ka=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};ka.prototype.ValueTypeName="number";var za=class extends Di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},no=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Sn{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Rr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Ha.prototype.ValueTypeName="vector";var Va=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pf=new Va,Ga=class{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=new U,aa=new hn,Gn=new U,io=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oa,aa,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oa,aa,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new U,vd=new Ue,yd=new Ue,Zt=class extends io{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,vd,yd),t.subVectors(yd,vd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wa=class extends io{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Os=-90,Bs=1,Js=class extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Os,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Os,Bs,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Os,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Os,Bs,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Os,Bs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Os,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Xa=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ih="\\[\\]\\.:\\/",lg=new RegExp("["+Ih+"]","g"),Lh="[^"+Ih+"]",cg="[^"+Ih.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Lh),ug=/(WCOD+)?/.source.replace("WCOD",cg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),pg=new RegExp("^"+hg+ug+dg+fg+"$"),mg=["material","materials","bones","map"],Kc=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){let t=pg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Kc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w1=new Float32Array(1);var Bh=class Bh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Bh.prototype.isMatrix2=!0;var jc=Bh;function Dh(n,e,t,i){let s=gg(i);switch(t){case _h:return n*e;case Qa:return n*e/s.components*s.byteLength;case el:return n*e/s.components*s.byteLength;case Oi:return n*e*2/s.components*s.byteLength;case tl:return n*e*2/s.components*s.byteLength;case vh:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case nl:return n*e*4/s.components*s.byteLength;case oo:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(n,16)*Math.max(e,8)/4;case il:case rl:return Math.max(n,8)*Math.max(e,8)/2;case al:case ll:case hl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:case ho:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uo:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gg(n){switch(n){case bn:case ph:return{byteLength:1,components:1};case er:case mh:case Hn:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case zn:case Ja:case Ln:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ff(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bg(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Og=`#ifdef USE_IRIDESCENCE
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
#endif`,Bg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qg=`#define PI 3.141592653589793
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
} // validated`,$g=`vec3 transformedNormal = objectNormal;
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
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Mx=`uniform sampler2D dfgLUT;
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
}`,Sx=`
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform float backgroundBlurriness;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,z_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,G_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,$_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,K_=`uniform float size;
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
}`,j_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ev=`uniform vec3 color;
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
}`,tv=`uniform float rotation;
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
}`,nv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:wg,alphahash_pars_fragment:Eg,alphamap_fragment:Tg,alphamap_pars_fragment:Ag,alphatest_fragment:Rg,alphatest_pars_fragment:Cg,aomap_fragment:Pg,aomap_pars_fragment:Ig,batching_pars_vertex:Lg,batching_vertex:Dg,begin_vertex:Ng,beginnormal_vertex:Ug,bsdfs:Fg,iridescence_fragment:Og,bumpmap_pars_fragment:Bg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Vg,color_fragment:Gg,color_pars_fragment:Wg,color_pars_vertex:Xg,color_vertex:Yg,common:qg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:Kg,emissivemap_pars_fragment:jg,colorspace_fragment:Qg,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:xx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Sx,lights_fragment_maps:bx,lights_fragment_end:wx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Ix,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:kx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:Kx,packing:jx,premultiplied_alpha_fragment:Qx,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:x_,transmission_pars_fragment:__,uv_pars_fragment:v_,uv_pars_vertex:y_,uv_vertex:M_,worldpos_vertex:S_,background_vert:b_,background_frag:w_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:P_,distance_vert:I_,distance_frag:L_,equirect_vert:D_,equirect_frag:N_,linedashed_vert:U_,linedashed_frag:F_,meshbasic_vert:O_,meshbasic_frag:B_,meshlambert_vert:k_,meshlambert_frag:z_,meshmatcap_vert:H_,meshmatcap_frag:V_,meshnormal_vert:G_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:Y_,meshphysical_vert:q_,meshphysical_frag:$_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:K_,points_frag:j_,shadow_vert:Q_,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},ze={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:rn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:rn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:rn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:rn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new tt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:rn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:rn([ze.points,ze.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:rn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:rn([ze.common,ze.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:rn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:rn([ze.sprite,ze.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:rn([ze.common,ze.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:rn([ze.lights,ze.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Nl={r:0,b:0,g:0},iv=new ht,Of=new rt;Of.set(-1,0,0,0,1,0,0,0,1);function sv(n,e,t,i,s,r){let o=new tt(0),a=s===!0?0:1,l,c,h=null,f=0,d=null;function u(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function p(y){let b=!1,M=u(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,b){let M=u(b);M&&M.isCubeTexture?(c===void 0&&(c=new mt(new Dt(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ys(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Of),c.material.toneMapped=ft.getTransfer(M.colorSpace)!==vt,(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mt(new Li(2,2),new sn({name:"BackgroundMaterial",uniforms:ys(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ft.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Nl,Ph(n)),t.buffers.color.setClear(Nl.r,Nl.g,Nl.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function rv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(C,L,V,I,H){let Y=!1,N=f(C,I,V,L);r!==N&&(r=N,c(r.object)),Y=u(C,I,V,H),Y&&p(C,I,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(C,L,V,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,L,V,I){let H=I.wireframe===!0,Y=i[L.id];Y===void 0&&(Y={},i[L.id]=Y);let N=C.isInstancedMesh===!0?C.id:0,J=Y[N];J===void 0&&(J={},Y[N]=J);let z=J[V.id];z===void 0&&(z={},J[V.id]=z);let K=z[H];return K===void 0&&(K=d(l()),z[H]=K),K}function d(C){let L=[],V=[],I=[];for(let H=0;H<t;H++)L[H]=0,V[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:I,object:C,attributes:{},index:null}}function u(C,L,V,I){let H=r.attributes,Y=L.attributes,N=0,J=V.getAttributes();for(let z in J)if(J[z].location>=0){let G=H[z],ge=Y[z];if(ge===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),G===void 0||G.attribute!==ge||ge&&G.data!==ge.data)return!0;N++}return r.attributesNum!==N||r.index!==I}function p(C,L,V,I){let H={},Y=L.attributes,N=0,J=V.getAttributes();for(let z in J)if(J[z].location>=0){let G=Y[z];G===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(G=C.instanceColor));let ge={};ge.attribute=G,G&&G.data&&(ge.data=G.data),H[z]=ge,N++}r.attributes=H,r.attributesNum=N,r.index=I}function x(){let C=r.newAttributes;for(let L=0,V=C.length;L<V;L++)C[L]=0}function m(C){g(C,0)}function g(C,L){let V=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;V[C]=1,I[C]===0&&(n.enableVertexAttribArray(C),I[C]=1),H[C]!==L&&(n.vertexAttribDivisor(C,L),H[C]=L)}function y(){let C=r.newAttributes,L=r.enabledAttributes;for(let V=0,I=L.length;V<I;V++)L[V]!==C[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function b(C,L,V,I,H,Y,N){N===!0?n.vertexAttribIPointer(C,L,V,H,Y):n.vertexAttribPointer(C,L,V,I,H,Y)}function M(C,L,V,I){x();let H=I.attributes,Y=V.getAttributes(),N=L.defaultAttributeValues;for(let J in Y){let z=Y[J];if(z.location>=0){let K=H[J];if(K===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){let G=K.normalized,ge=K.itemSize,ve=e.get(K);if(ve===void 0)continue;let Z=ve.buffer,xe=ve.type,Le=ve.bytesPerElement,he=xe===n.INT||xe===n.UNSIGNED_INT||K.gpuType===Ja;if(K.isInterleavedBufferAttribute){let j=K.data,be=j.isInterleavedBuffer===!0?j.stride:j.itemSize,Ze=K.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let we=0;we<z.locationSize;we++)g(z.location+we,j.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let we=0;we<z.locationSize;we++)m(z.location+we);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let we=0;we<z.locationSize;we++)b(z.location+we,ge/z.locationSize,xe,G,be*Le,(Ze+ge/z.locationSize*we)*Le,he)}else{if(K.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)g(z.location+j,K.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let j=0;j<z.locationSize;j++)b(z.location+j,ge/z.locationSize,xe,G,ge*Le,ge/z.locationSize*j*Le,he)}}else if(N!==void 0){let G=N[J];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(z.location,G);break;case 3:n.vertexAttrib3fv(z.location,G);break;case 4:n.vertexAttrib4fv(z.location,G);break;default:n.vertexAttrib1fv(z.location,G)}}}}y()}function S(){T();for(let C in i){let L=i[C];for(let V in L){let I=L[V];for(let H in I){let Y=I[H];for(let N in Y)h(Y[N].object),delete Y[N];delete I[H]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;let L=i[C.id];for(let V in L){let I=L[V];for(let H in I){let Y=I[H];for(let N in Y)h(Y[N].object),delete Y[N];delete I[H]}}delete i[C.id]}function _(C){for(let L in i){let V=i[L];for(let I in V){let H=V[I];if(H[C.id]===void 0)continue;let Y=H[C.id];for(let N in Y)h(Y[N].object),delete Y[N];delete H[C.id]}}}function v(C){for(let L in i){let V=i[L],I=C.isInstancedMesh===!0?C.id:0,H=V[I];if(H!==void 0){for(let Y in H){let N=H[Y];for(let J in N)h(N[J].object),delete N[J];delete H[Y]}delete V[I],Object.keys(V).length===0&&delete i[L]}}}function T(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function ov(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function av(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Vn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let v=_===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==bn&&_!==Ln&&!v&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:S,samples:w}}function lv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new kn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,b=y*4,M=g.clippingState||null;l.value=M,M=h(p,d,b,u);for(let S=0;S!==b;++S)M[S]=t[S];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,M=u;b!==x;++b,M+=4)o.copy(f[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var mo=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ms});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=cn),new Js(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},mf=256,cv=3,hv=20,Bf=256,kf=16,uv=3,dv=new U,fv=new tt,Fl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Js(1,10,null),this._boxMesh=new mt(new Dt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=dv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(fv));let m=new Js(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(mf,Ah(e))}_fromTexture(e,t){e.mapping===xs||e.mapping===Qs?this._setSize(e.image.length===0?mf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=gf(e,!1,!1),i=Math.log2(e)-cv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=gf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xs||e.mapping===Qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=pv(),this._integrationMaterial=mv());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/kf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-uv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Bf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function gf(n,e,t){return new mo(n,{minFilter:fi,generateMipmaps:e,type:Hn,colorSpace:Cr,depthBuffer:t})}function go(n,e,t){return new sn({name:n,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:Bt,blending:ms,depthTest:!1,depthWrite:!1})}function pv(){return go("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bf}u

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
	`)}function mv(){return go("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kf}},`

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
	`)}function gv(){return go("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hv}
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
	`)}function xf(){return go("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _f(){return go("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===qa||u===$a)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new mo(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===qa||u===$a,x=u===xs||u===Qs;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Fl(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Fl(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===qa?d.mapping=xs:u===$a&&(d.mapping=Qs),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function _v(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&br("WebGLRenderer: "+i+" extension not supported."),s}}}function vv(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function f(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?Fr:Ur,M=new b(Math.ceil(y/3)*6,1),S=M.array;if(x!==null){let _=x.array;g=x.version;for(let v=0,T=0;v<y;v+=3){let A=_[v+0],C=_[v+1],L=_[v+2];S[T++]=A,S[T++]=C,S[T++]=C,S[T++]=L,S[T++]=L,S[T++]=A}}else{g=m.version;for(let _=0,v=0;_<y;_+=3){let T=_+0,A=_+1,C=_+2;S[v++]=T,S[v++]=A,S[v++]=A,S[v++]=C,S[v++]=C,S[v++]=T}}M.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,M)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function yv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,f*o,u),t.update(d,i,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Mv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sv(n,e,t){let i=new WeakMap,s=new Lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let T=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*S*4*f),_=new Dr(w,M,S,f);_.type=Ln,_.needsUpdate=!0;let v=b*4;for(let A=0;A<f;A++){let C=m[A],L=g[A],V=y[A],I=M*S*4*A;for(let H=0;H<C.count;H++){let Y=H*v;u===!0&&(s.fromBufferAttribute(C,H),w[I+Y+0]=s.x,w[I+Y+1]=s.y,w[I+Y+2]=s.z,w[I+Y+3]=0),p===!0&&(s.fromBufferAttribute(L,H),w[I+Y+4]=s.x,w[I+Y+5]=s.y,w[I+Y+6]=s.z,w[I+Y+7]=0),x===!0&&(s.fromBufferAttribute(V,H),w[I+Y+8]=s.x,w[I+Y+9]=s.y,w[I+Y+10]=s.z,w[I+Y+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new Ue(M,S)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function bv(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var wv={[oh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function Ev(n,e,t,i,s,r){let o=new Mn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new At;h.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ct([0,2,0,0,2,0],2));let f=new Ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mt(h,f),u=new Wa(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,b=[],M=!1;this.setSize=function(S,w){o.setSize(S,w),a!==null&&a.setSize(S,w),l!==null&&l.setSize(S,w);for(let _=0;_<b.length;_++){let v=b[_];v.setSize&&v.setSize(S,w)}},this.setEffects=function(S){b=S,M=b.length>0&&b[0].isRenderPass===!0;let w=o.width,_=o.height;b.length>0&&a===null&&(a=new Mn(w,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(w,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&b.some(T=>T.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new di(w,_),r===!0&&(c.format=pi,c.type=_s)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let T=0;T<b.length;T++){let A=b[T];A.setSize&&A.setSize(w,_),v&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,w){if(m||S.toneMapping===qn&&b.length===0)return!1;if(y=w,w!==null){let _=w.width,v=w.height;(o.width!==_||o.height!==v)&&this.setSize(_,v)}return M===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=qn,!0},this.hasRenderPass=function(){return M},this.end=function(S,w){S.toneMapping=g,m=!0;let _=o,v=a;for(let T=0;T<b.length;T++){let A=b[T];A.enabled!==!1&&(A.render(S,v,_,w),A.needsSwap!==!1&&(_=v,v=v===a?l:a))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,f.defines={},ft.getTransfer(p)===vt&&(f.defines.SRGB_TRANSFER="");let T=wv[x];T&&(f.defines[T]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(y),S.render(d,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var zf=new un,Hf=new di(1,1),Vf=new Hr(1),Gf=new Dr,Wf=new Sa,Xf=new kr,vf=[],yf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),bf=new Float32Array(4);function ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=vf[s];if(r===void 0&&(r=new Float32Array(s),vf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bl(n,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;bf.set(i),n.uniformMatrix2fv(this.addr,!1,bf),zt(t,i)}}function Iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Sf.set(i),n.uniformMatrix3fv(this.addr,!1,Sf),zt(t,i)}}function Lv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Mf.set(i),n.uniformMatrix4fv(this.addr,!1,Mf),zt(t,i)}}function Dv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function Fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function Ov(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function kl(n){return n.version===0&&(n.compareFunction=bh,n.needsUpdate=!0),n}function Hv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=kl(Hf):r=zf,t.setTexture2D(e||r,s)}function Vv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wf,s)}function Gv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=kl(Vf):r=Xf,t.setTextureCube(e||r,s)}function Wv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gf,s)}function Xv(n){switch(n){case 5126:return Tv;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Iv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return Bv;case 36295:return kv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}function Yv(n,e){n.uniform1fv(this.addr,e)}function qv(n,e){let t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function $v(n,e){let t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function Zv(n,e){let t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function Jv(n,e){let t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kv(n,e){let t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jv(n,e){let t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qv(n,e){n.uniform1iv(this.addr,e)}function ey(n,e){n.uniform2iv(this.addr,e)}function ty(n,e){n.uniform3iv(this.addr,e)}function ny(n,e){n.uniform4iv(this.addr,e)}function iy(n,e){n.uniform1uiv(this.addr,e)}function sy(n,e){n.uniform2uiv(this.addr,e)}function ry(n,e){n.uniform3uiv(this.addr,e)}function oy(n,e){n.uniform4uiv(this.addr,e)}function ay(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=kl(Hf):o=zf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ly(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wf,r[o])}function cy(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=kl(Vf):o=Xf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function hy(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gf,r[o])}function uy(n){switch(n){case 5126:return Yv;case 35664:return qv;case 35665:return $v;case 35666:return Zv;case 35674:return Jv;case 35675:return Kv;case 35676:return jv;case 5124:case 35670:return Qv;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}var Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xv(t.type)}},Vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uy(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},kh=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function dy(n,e,t){let i=n.name,s=i.length;for(kh.lastIndex=0;;){let r=kh.exec(i),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wf(t,c===void 0?new Hh(a,n,e):new Vh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Gh(a),wf(t,f)),t=f}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);dy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ef(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var fy=37297,py=0;function my(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Tf=new rt;function gy(n){ft._getMatrix(Tf,ft.workingColorSpace,n);let e=`mat3( ${Tf.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Pr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Af(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+my(n.getShaderSource(e),a)}else return r}function xy(n,e){let t=gy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _y={[oh]:"Linear",[ah]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function vy(n,e){let t=_y[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ul=new U;function yy(){ft.getLuminanceCoefficients(Ul);let n=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function My(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function Sy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function by(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function po(n){return n!==""}function Rf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(n){return n.replace(wy,Ey)}function Ey(n,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wh(t)}var Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(n){return n.replace(Ty,Ay)}function Ay(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Ry={[so]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Cy(n){return Ry[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Py={[Qs]:"ENVMAP_MODE_REFRACTION"};function Iy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Py[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ly={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function Dy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ly[n.combine]||"ENVMAP_BLENDING_NONE"}function Ny(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Cy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Iy(t),f=Dy(t),d=My(t),u=Sy(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(po).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(po).join(`
`),m.length>0&&(m+=`
`)):(x=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),m=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?at.tonemapping_pars_fragment:"",t.toneMapping!==qn?vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=Wh(o),o=Rf(o,t),o=Cf(o,t),a=Wh(a),a=Rf(a,t),a=Cf(a,t),o=Pf(o),a=Pf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,b=g+m+a,M=Ef(s,s.VERTEX_SHADER,y),S=Ef(s,s.FRAGMENT_SHADER,b);s.attachShader(p,M),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(A){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(S)||"",I=C.trim(),H=L.trim(),Y=V.trim(),N=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,S);else{let z=Af(s,M,"vertex"),K=Af(s,S,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+z+`
`+K)}else I!==""?nt("WebGLProgram: Program Info Log:",I):(H===""||Y==="")&&(J=!1);J&&(A.diagnostics={runnable:N,programLog:I,vertexShader:{log:H,prefix:x},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(M),s.deleteShader(S),_=new nr(s,p),v=by(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,fy)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}var Uy=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yh(e),t.set(e,i)),i}},Yh=class{constructor(e){this.id=Uy++,this.code=e,this.usedTimes=0}};function Fy(n){return n===Oi||n===ho||n===uo}function Oy(n,e,t,i,s,r){let o=new Nr,a=new Xh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,T,A,C,L){let V=A.fog,I=C.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||H,Y),J=d[_.type],z=i.precision;_.precision!==null&&(z=i.getMaxPrecision(_.precision),z!==_.precision&&nt("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,G=K!==void 0?K.length:0,ge=0;I.morphAttributes.position!==void 0&&(ge=1),I.morphAttributes.normal!==void 0&&(ge=2),I.morphAttributes.color!==void 0&&(ge=3);let ve,Z,xe,Le;if(J){let _e=Zn[J];ve=_e.vertexShader,Z=_e.fragmentShader}else{ve=_.vertexShader,Z=_.fragmentShader;let _e=a.getVertexShaderStage(_),Ie=a.getFragmentShaderStage(_);a.update(_,_e,Ie),xe=_e.id,Le=Ie.id}let he=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),be=C.isInstancedMesh===!0,Ze=C.isBatchedMesh===!0,we=!!_.map,Ke=!!_.matcap,Ye=!!N,re=Ye&&N.isPMREMTexture===!0,Se=!!_.aoMap,Re=!!_.lightMap,le=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,Ee=!!_.displacementMap,De=!!_.emissiveMap,Ge=!!_.metalnessMap,Je=!!_.roughnessMap,Qe=_.anisotropy>0,O=_.clearcoat>0,de=_.diffuseRoughness>0,Me=_.dispersion>0,We=_.retroreflectivity>0,ae=_.iridescence>0,it=_.sheen>0,Oe=_.transmission>0,ke=Qe&&!!_.anisotropyMap,P=O&&!!_.clearcoatMap,E=O&&!!_.clearcoatNormalMap,X=O&&!!_.clearcoatRoughnessMap,me=de&&!!_.diffuseRoughnessMap,Q=ae&&!!_.iridescenceMap,ye=ae&&!!_.iridescenceThicknessMap,Te=it&&!!_.sheenColorMap,ne=it&&!!_.sheenRoughnessMap,ie=!!_.specularMap,Ce=!!_.specularColorMap,D=!!_.specularIntensityMap,se=Oe&&!!_.transmissionMap,ee=Oe&&!!_.thicknessMap,Pe=!!_.gradientMap,Ae=!!_.alphaMap,ue=_.alphaTest>0,fe=!!_.alphaHash,B=!!_.extensions,W=qn;_.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(W=n.toneMapping);let ce=re?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,Ne={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:Z,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:Le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:Ze,batchingColor:Ze&&C._colorsTexture!==null,instancing:be,instancingColor:be&&C.instanceColor!==null,instancingMorph:be&&C.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:we,matcap:Ke,envMap:Ye,envMapMode:Ye&&N.mapping,envMapPMREM:re,envMapMaxLod:re?ce.length-1:null,envMapSize:re?ce[0].width:null,aoMap:Se,lightMap:Re,bumpMap:le,normalMap:oe,displacementMap:Ee,emissiveMap:De,normalMapObjectSpace:oe&&_.normalMapType===Yd,normalMapTangentSpace:oe&&_.normalMapType===yh,packedNormalMap:oe&&_.normalMapType===yh&&Fy(_.normalMap.format),metalnessMap:Ge,roughnessMap:Je,anisotropy:Qe,anisotropyMap:ke,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:de,diffuseRoughnessMap:me,dispersion:Me,retroreflection:We,iridescence:ae,iridescenceMap:Q,iridescenceThicknessMap:ye,sheen:it,sheenColorMap:Te,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:Ce,specularIntensityMap:D,transmission:Oe,transmissionMap:se,thicknessMap:ee,gradientMap:Pe,opaque:_.transparent===!1&&_.blending===js&&_.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:fe,combine:_.combine,mapUv:we&&u(_.map.channel),aoMapUv:Se&&u(_.aoMap.channel),lightMapUv:Re&&u(_.lightMap.channel),bumpMapUv:le&&u(_.bumpMap.channel),normalMapUv:oe&&u(_.normalMap.channel),displacementMapUv:Ee&&u(_.displacementMap.channel),emissiveMapUv:De&&u(_.emissiveMap.channel),metalnessMapUv:Ge&&u(_.metalnessMap.channel),roughnessMapUv:Je&&u(_.roughnessMap.channel),anisotropyMapUv:ke&&u(_.anisotropyMap.channel),clearcoatMapUv:P&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&u(_.sheenRoughnessMap.channel),specularMapUv:ie&&u(_.specularMap.channel),specularColorMapUv:Ce&&u(_.specularColorMap.channel),specularIntensityMapUv:D&&u(_.specularIntensityMap.channel),transmissionMapUv:se&&u(_.transmissionMap.channel),thicknessMapUv:ee&&u(_.thicknessMap.channel),alphaMapUv:Ae&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(oe||Qe),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(we||Ae),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:j,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ge,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:L.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:W,decodeVideoTexture:we&&_.map.isVideoTexture===!0&&ft.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&ft.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:B&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&_.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function x(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)v.push(T),v.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(m(v,_),g(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function m(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function g(_,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let v=d[_.type],T;if(v){let A=Zn[v];T=df.clone(A.uniforms)}else T=_.uniforms;return T}function b(_,v){let T=h.get(v);return T!==void 0?++T.usedTimes:(T=new Ny(n,v,_,s),c.push(T),h.set(v,T)),T}function M(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:w}}function By(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ky(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Df(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,u,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let b=a(d,u,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,u){t.length>1&&t.sort(d||ky),i.length>1&&i.sort(u||Lf),s.length>1&&s.sort(u||Lf)}function f(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function zy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Df,n.set(i,[o])):s>=r.length?(o=new Df,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Vy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Gy=0;function Wy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xy(n){let e=new Hy,t=Vy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new ht,o=new ht;function a(c){let h=0,f=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,b=0,M=0,S=0,w=0,_=0,v=0,T=0,A=0;c.sort(Wy);for(let L=0,V=c.length;L<V;L++){let I=c[L],H=I.color,Y=I.intensity,N=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Oi?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*Y,f+=H.g*Y,d+=H.b*Y;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],Y);A++}else if(I.isSunLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,G=t.get(I);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=G,i.sunShadowMap[p]=J;let ge=K.getViewportCount();for(let ve=0;ve<ge;ve++)i.sunShadowMatrix[x+ve]=K.getMatrix(ve),i.sunShadowCascade[x+ve]=K._cascadeData[ve];x+=ge,p++}i.sun[u]=z,u++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,G=t.get(I);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=z,m++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(H).multiplyScalar(Y),z.distance=N,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[y]=z;let K=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,K.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[y]=K.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=J,_++}y++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(H).multiplyScalar(Y),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=z,b++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let K=I.shadow,G=t.get(I);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=z,g++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(Y),z.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[M]=z,M++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let C=i.hash;(C.sunLength!==u||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==b||C.hemiLength!==M||C.numSunShadows!==p||C.numDirectionalShadows!==S||C.numPointShadows!==w||C.numSpotShadows!==_||C.numSpotMaps!==v||C.numLightProbes!==A)&&(i.sun.length=u,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.sunLength=u,C.directionalLength=m,C.pointLength=g,C.spotLength=y,C.rectAreaLength=b,C.hemiLength=M,C.numSunShadows=p,C.numDirectionalShadows=S,C.numPointShadows=w,C.numSpotShadows=_,C.numSpotMaps=v,C.numLightProbes=A,i.version=Gy++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let M=c[y];if(M.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(M.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Nf(n){let e=new Xy(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Yy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nf(n),e.set(s,[a])):r>=o.length?(a=new Nf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
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
}`,Zy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Jy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Uf=new ht,fo=new U,zh=new U;function Ky(n,e,t){let i=new us,s=new Ue,r=new Ue,o=new Lt,a=new La,l=new Da,c={},h=t.maxTextureSize,f={[Fi]:Bt,[Bt]:Fi,[In]:In},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:qy,fragmentShader:$y}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new At;p.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let g=this.type;this.render=function(w,_,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===bd&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let T=n.getRenderTarget(),A=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ms),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=g!==this.type;V&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=w.length;I<H;I++){let Y=w[I],N=Y.shadow;if(N===void 0){nt("WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let J=N.getFrameExtents();s.multiply(J),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,N.mapSize.y=r.y));let z=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||V===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ks){if(Y.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Mn(s.x,s.y,{format:Oi,type:Hn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),N.map.texture.name=Y.name+".shadowMap",N.map.depthTexture=new di(s.x,s.y,Ln),N.map.depthTexture.name=Y.name+".shadowMapDepth",N.map.depthTexture.format=ui,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt}else Y.isPointLight?(N.map=new mo(s.x),N.map.depthTexture=new Hr(s.x,zn)):(N.map=new Mn(s.x,s.y),N.map.depthTexture=new di(s.x,s.y,zn)),N.map.depthTexture.name=Y.name+".shadowMap",N.map.depthTexture.format=ui,this.type===so?(N.map.depthTexture.compareFunction=z?Sh:Mh,N.map.depthTexture.minFilter=cn,N.map.depthTexture.magFilter=cn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let K=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();Y.isPointLight!==!0&&N.updateMatrices(Y,v);let G=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:v.layers;for(let ge=0;ge<K;ge++){let ve=N.getCamera(ge);if(Y.isPointLight){let Z=N.camera,xe=N.matrix,Le=Y.distance||Z.far;Le!==Z.far&&(Z.far=Le,Z.updateProjectionMatrix()),fo.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(fo),zh.copy(Z.position),zh.add(Zy[ge]),Z.up.copy(Jy[ge]),Z.lookAt(zh),Z.updateMatrixWorld(),xe.makeTranslation(-fo.x,-fo.y,-fo.z),Uf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Uf,Z.coordinateSystem,Z.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(N.map),n.clear());let Z=N.getViewport(ge);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),L.viewport(o)}i=N.getFrustum(ge),M(_,v,ve,Y,G,this.type)}N.isPointLightShadow!==!0&&this.type===Ks&&y(N,v),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,A,C)};function y(w,_){let v=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Mn(s.x,s.y,{format:Oi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,v,d,x,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,v,u,x,null)}function b(w,_,v,T){let A=null,C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)A=C;else if(A=v.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=A.uuid,V=_.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let H=I[V];H===void 0&&(H=A.clone(),I[V]=H,_.addEventListener("dispose",S)),A=H}if(A.visible=_.visible,A.wireframe=_.wireframe,T===Ks?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:f[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=n.properties.get(A);L.light=v}return A}function M(w,_,v,T,A,C){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Ks)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let I=e.update(w),H=w.material;if(Array.isArray(H)){let Y=I.groups;for(let N=0,J=Y.length;N<J;N++){let z=Y[N],K=H[z.materialIndex];if(K&&K.visible){let G=b(w,K,T,C);w.onBeforeShadow(n,w,_,v,I,G,z),n.renderBufferDirect(v,null,I,G,w,z),w.onAfterShadow(n,w,_,v,I,G,z)}}}else if(H.visible){let Y=b(w,H,T,C);w.onBeforeShadow(n,w,_,v,I,Y,null),n.renderBufferDirect(v,null,I,Y,w,null),w.onAfterShadow(n,w,_,v,I,Y,null)}}let V=w.children;for(let I=0,H=V.length;I<H;I++)M(V[I],_,v,T,A,C)}function S(w){w.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],A=w.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function jy(n,e){function t(){let D=!1,se=new Lt,ee=null,Pe=new Lt(0,0,0,0);return{setMask:function(Ae){ee!==Ae&&!D&&(n.colorMask(Ae,Ae,Ae,Ae),ee=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,ue,fe,B,W){W===!0&&(Ae*=B,ue*=B,fe*=B),se.set(Ae,ue,fe,B),Pe.equals(se)===!1&&(n.clearColor(Ae,ue,fe,B),Pe.copy(se))},reset:function(){D=!1,ee=null,Pe.set(-1,0,0,0)}}}function i(){let D=!1,se=!1,ee=null,Pe=null,Ae=null;return{setReversed:function(ue){if(se!==ue){let fe=e.get("EXT_clip_control");ue?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),se=ue;let B=Ae;Ae=null,this.setClear(B)}},getReversed:function(){return se},setTest:function(ue){ue?j(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ue){ee!==ue&&!D&&(n.depthMask(ue),ee=ue)},setFunc:function(ue){if(se&&(ue=sf[ue]),Pe!==ue){switch(ue){case ha:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case da:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case fa:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ue}},setLocked:function(ue){D=ue},setClear:function(ue){Ae!==ue&&(Ae=ue,se&&(ue=1-ue),n.clearDepth(ue))},reset:function(){D=!1,ee=null,Pe=null,Ae=null,se=!1}}}function s(){let D=!1,se=null,ee=null,Pe=null,Ae=null,ue=null,fe=null,B=null,W=null;return{setTest:function(ce){D||(ce?j(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ce){se!==ce&&!D&&(n.stencilMask(ce),se=ce)},setFunc:function(ce,Ne,_e){(ee!==ce||Pe!==Ne||Ae!==_e)&&(n.stencilFunc(ce,Ne,_e),ee=ce,Pe=Ne,Ae=_e)},setOp:function(ce,Ne,_e){(ue!==ce||fe!==Ne||B!==_e)&&(n.stencilOp(ce,Ne,_e),ue=ce,fe=Ne,B=_e)},setLocked:function(ce){D=ce},setClear:function(ce){W!==ce&&(n.clearStencil(ce),W=ce)},reset:function(){D=!1,se=null,ee=null,Pe=null,Ae=null,ue=null,fe=null,B=null,W=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,b=null,M=null,S=null,w=null,_=null,v=new tt(0,0,0),T=0,A=!1,C=null,L=null,V=null,I=null,H=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,J=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=J>=2);let K=null,G={},ge=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Z=new Lt().fromArray(ge),xe=new Lt().fromArray(ve);function Le(D,se,ee,Pe){let Ae=new Uint8Array(4),ue=n.createTexture();n.bindTexture(D,ue),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<ee;fe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(se+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ue}let he={};he[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(zs),le(!1),oe(Qc),j(n.CULL_FACE),Se(ms);function j(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function be(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ze(D,se){return d[D]!==se?(n.bindFramebuffer(D,se),d[D]=se,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function we(D,se){let ee=p,Pe=!1;if(D){ee=u.get(se),ee===void 0&&(ee=[],u.set(se,ee));let Ae=D.textures;if(ee.length!==Ae.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,fe=Ae.length;ue<fe;ue++)ee[ue]=n.COLOR_ATTACHMENT0+ue;ee.length=Ae.length,Pe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ee)}function Ke(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let Ye={[gs]:n.FUNC_ADD,[Ed]:n.FUNC_SUBTRACT,[Td]:n.FUNC_REVERSE_SUBTRACT};Ye[Ad]=n.MIN,Ye[Rd]=n.MAX;let re={[Cd]:n.ZERO,[Pd]:n.ONE,[Id]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[Od]:n.SRC_ALPHA_SATURATE,[Ud]:n.DST_COLOR,[Dd]:n.DST_ALPHA,[Ld]:n.ONE_MINUS_SRC_COLOR,[sh]:n.ONE_MINUS_SRC_ALPHA,[Fd]:n.ONE_MINUS_DST_COLOR,[Nd]:n.ONE_MINUS_DST_ALPHA,[Bd]:n.CONSTANT_COLOR,[kd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[Hd]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(D,se,ee,Pe,Ae,ue,fe,B,W,ce){if(D===ms){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),D!==wd){if(D!==g||ce!==A){if((y!==gs||S!==gs)&&(n.blendEquation(n.FUNC_ADD),y=gs,S=gs),ce)switch(D){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",D);break}else switch(D){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case th:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",D);break}b=null,M=null,w=null,_=null,v.set(0,0,0),T=0,g=D,A=ce}return}Ae=Ae||se,ue=ue||ee,fe=fe||Pe,(se!==y||Ae!==S)&&(n.blendEquationSeparate(Ye[se],Ye[Ae]),y=se,S=Ae),(ee!==b||Pe!==M||ue!==w||fe!==_)&&(n.blendFuncSeparate(re[ee],re[Pe],re[ue],re[fe]),b=ee,M=Pe,w=ue,_=fe),(B.equals(v)===!1||W!==T)&&(n.blendColor(B.r,B.g,B.b,W),v.copy(B),T=W),g=D,A=!1}function Re(D,se){D.side===In?be(n.CULL_FACE):j(n.CULL_FACE);let ee=D.side===Bt;se&&(ee=!ee),le(ee),D.blending===js&&D.transparent===!1?Se(ms):Se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Pe=D.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(D){C!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),C=D)}function oe(D){D!==Md?(j(n.CULL_FACE),D!==L&&(D===Qc?n.cullFace(n.BACK):D===Sd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),L=D}function Ee(D){D!==V&&(N&&n.lineWidth(D),V=D)}function De(D,se,ee){D?(j(n.POLYGON_OFFSET_FILL),(I!==se||H!==ee)&&(I=se,H=ee,o.getReversed()&&(se=-se,ee=-ee),n.polygonOffset(se,ee))):be(n.POLYGON_OFFSET_FILL)}function Ge(D){D?j(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Je(D){D===void 0&&(D=n.TEXTURE0+Y-1),K!==D&&(n.activeTexture(D),K=D)}function Qe(D,se,ee){ee===void 0&&(K===null?ee=n.TEXTURE0+Y-1:ee=K);let Pe=G[ee];Pe===void 0&&(Pe={type:void 0,texture:void 0},G[ee]=Pe),(Pe.type!==D||Pe.texture!==se)&&(K!==ee&&(n.activeTexture(ee),K=ee),n.bindTexture(D,se||he[D]),Pe.type=D,Pe.texture=se)}function O(){let D=G[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function Me(){try{n.compressedTexImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function We(){try{n.texSubImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function ae(){try{n.texSubImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function it(){try{n.compressedTexSubImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function ke(){try{n.texStorage2D(...arguments)}catch(D){st("WebGLState:",D)}}function P(){try{n.texStorage3D(...arguments)}catch(D){st("WebGLState:",D)}}function E(){try{n.texImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function X(){try{n.texImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function me(D){return f[D]!==void 0?f[D]:n.getParameter(D)}function Q(D,se){f[D]!==se&&(n.pixelStorei(D,se),f[D]=se)}function ye(D){Z.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function Te(D){xe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function ne(D,se){let ee=c.get(se);ee===void 0&&(ee=new WeakMap,c.set(se,ee));let Pe=ee.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(se,D.name),n.uniformBlockBinding(se,Pe,Pe),ee.set(D,Pe))}function ie(D,se,ee){let Ae=c.get(se).get(D);l[Ae]!==ee&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ae,ee),l[Ae]=ee)}function Ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,G={},d={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,b=null,M=null,S=null,w=null,_=null,v=new tt(0,0,0),T=0,A=!1,C=null,L=null,V=null,I=null,H=null,Z.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:be,bindFramebuffer:Ze,drawBuffers:we,useProgram:Ke,setBlending:Se,setMaterial:Re,setFlipSided:le,setCullFace:oe,setLineWidth:Ee,setPolygonOffset:De,setScissorTest:Ge,activeTexture:Je,bindTexture:Qe,unbindTexture:O,compressedTexImage2D:de,compressedTexImage3D:Me,texImage2D:E,texImage3D:X,pixelStorei:Q,getParameter:me,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:ke,texStorage3D:P,texSubImage2D:We,texSubImage3D:ae,compressedTexSubImage2D:it,compressedTexSubImage3D:Oe,scissor:ye,viewport:Te,reset:Ce}}function Qy(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):Lr("canvas")}function y(P,E,X){let me=1,Q=ke(P);if((Q.width>X||Q.height>X)&&(me=X/Math.max(Q.width,Q.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ye=Math.floor(me*Q.width),Te=Math.floor(me*Q.height);d===void 0&&(d=g(ye,Te));let ne=E?g(ye,Te):d;return ne.width=ye,ne.height=Te,ne.getContext("2d").drawImage(P,0,0,ye,Te),nt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ye+"x"+Te+")."),ne}else return"data"in P&&nt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function b(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,E,X,me,Q,ye=!1){if(P!==null){if(n[P]!==void 0)return n[P];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Te;me&&(Te=e.get("EXT_texture_norm16"),Te||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=E;if(E===n.RED&&(X===n.FLOAT&&(ne=n.R32F),X===n.HALF_FLOAT&&(ne=n.R16F),X===n.UNSIGNED_BYTE&&(ne=n.R8),X===n.UNSIGNED_SHORT&&Te&&(ne=Te.R16_EXT),X===n.SHORT&&Te&&(ne=Te.R16_SNORM_EXT)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.R8UI),X===n.UNSIGNED_SHORT&&(ne=n.R16UI),X===n.UNSIGNED_INT&&(ne=n.R32UI),X===n.BYTE&&(ne=n.R8I),X===n.SHORT&&(ne=n.R16I),X===n.INT&&(ne=n.R32I)),E===n.RG&&(X===n.FLOAT&&(ne=n.RG32F),X===n.HALF_FLOAT&&(ne=n.RG16F),X===n.UNSIGNED_BYTE&&(ne=n.RG8),X===n.UNSIGNED_SHORT&&Te&&(ne=Te.RG16_EXT),X===n.SHORT&&Te&&(ne=Te.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.RG8UI),X===n.UNSIGNED_SHORT&&(ne=n.RG16UI),X===n.UNSIGNED_INT&&(ne=n.RG32UI),X===n.BYTE&&(ne=n.RG8I),X===n.SHORT&&(ne=n.RG16I),X===n.INT&&(ne=n.RG32I)),E===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),X===n.UNSIGNED_INT&&(ne=n.RGB32UI),X===n.BYTE&&(ne=n.RGB8I),X===n.SHORT&&(ne=n.RGB16I),X===n.INT&&(ne=n.RGB32I)),E===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),X===n.UNSIGNED_INT&&(ne=n.RGBA32UI),X===n.BYTE&&(ne=n.RGBA8I),X===n.SHORT&&(ne=n.RGBA16I),X===n.INT&&(ne=n.RGBA32I)),E===n.RGB&&(X===n.UNSIGNED_SHORT&&Te&&(ne=Te.RGB16_EXT),X===n.SHORT&&Te&&(ne=Te.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),E===n.RGBA){let ie=ye?Pr:ft.getTransfer(Q);X===n.FLOAT&&(ne=n.RGBA32F),X===n.HALF_FLOAT&&(ne=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ne=ie===vt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&Te&&(ne=Te.RGBA16_EXT),X===n.SHORT&&Te&&(ne=Te.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(P,E){let X;return P?E===null||E===zn||E===_s?X=n.DEPTH24_STENCIL8:E===Ln?X=n.DEPTH32F_STENCIL8:E===er&&(X=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zn||E===_s?X=n.DEPTH_COMPONENT24:E===Ln?X=n.DEPTH_COMPONENT32F:E===er&&(X=n.DEPTH_COMPONENT16),X}function v(P,E){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){let E=new WeakRef(P);i.get(P).__ref=E,p.add(E),x.register(P,E,E)}function A(P){let E=i.get(P).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function C(P){V(P.target)}function L(P){I(P.target)}function V(P){P.removeEventListener("dispose",C),A(P),Y(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function I(P){P.removeEventListener("dispose",L),A(P),J(P)}function H(){for(let P of p){let E=P.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):V(E))}p.clear(),f.clear()}function Y(P){let E=i.get(P);if(E.__webglInit===void 0)return;let X=P.source,me=u.get(X);if(me){let Q=me[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(P),Object.keys(me).length===0&&u.delete(X)}i.remove(P)}function N(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let X=P.source,me=u.get(X);delete me[E.__cacheKey],o.memory.textures--}function J(P){let E=i.get(P);E.__depthDisposeCallback&&E.__depthDisposeCallback();let X=P.depthTexture;if(X&&X.renderTarget===P&&V(X),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ye=0;ye<E.__webglFramebuffer[Q].length;ye++)n.deleteFramebuffer(E.__webglFramebuffer[Q][ye]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let me=P.textures;for(let Q=0,ye=me.length;Q<ye;Q++){let Te=i.get(me[Q]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(me[Q])}i.remove(P)}let z=0;function K(){z=0}function G(){return z}function ge(P){z=P}function ve(){let P=z;return P>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function Z(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.mipmapsAutoUpdate),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function xe(P,E){let X=i.get(P);if(P.isVideoTexture&&it(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let me=P.image;if(me===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(X,P,E);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function Le(P,E){let X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Re(X,P,E);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function he(P,E){let X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Re(X,P,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function j(P,E){let X=i.get(P);if(P.version>0&&X.__version!==P.version){le(X,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}let be={[xa]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[_a]:n.MIRRORED_REPEAT},Ze={[Wt]:n.NEAREST,[Wd]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},we={[$d]:n.NEVER,[bh]:n.ALWAYS,[Zd]:n.LESS,[Mh]:n.LEQUAL,[Jd]:n.EQUAL,[Sh]:n.GEQUAL,[Kd]:n.GREATER,[jd]:n.NOTEQUAL};function Ke(P,E){if(E.type===Ln&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===Za||E.magFilter===ro||E.magFilter===fi||E.minFilter===cn||E.minFilter===Za||E.minFilter===ro||E.minFilter===fi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,be[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,be[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,be[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Ze[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Ze[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==ro&&E.minFilter!==fi||E.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C),T(E));let me=E.source,Q=u.get(me);Q===void 0&&(Q={},u.set(me,Q));let ye=Z(E);if(ye!==P.__cacheKey){Q[ye]===void 0&&(Q[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[ye].usedTimes++;let Te=Q[P.__cacheKey];Te!==void 0&&(Q[P.__cacheKey].usedTimes--,Te.usedTimes===0&&N(E)),P.__cacheKey=ye,P.__webglTexture=Q[ye].texture}return X}function re(P,E,X){return Math.floor(Math.floor(P/X)/E)}function Se(P,E,X,me){let ye=P.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,X,me,E.data);else{ye.sort((D,se)=>D.start-se.start);let Te=0;for(let D=1;D<ye.length;D++){let se=ye[Te],ee=ye[D],Pe=se.start+se.count,Ae=re(ee.start,E.width,4),ue=re(se.start,E.width,4);ee.start<=Pe+1&&Ae===ue&&re(ee.start+ee.count-1,E.width,4)===Ae?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++Te,ye[Te]=ee)}ye.length=Te+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),ie=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let D=0,se=ye.length;D<se;D++){let ee=ye[D],Pe=Math.floor(ee.start/4),Ae=Math.ceil(ee.count/4),ue=Pe%E.width,fe=Math.floor(Pe/E.width),B=Ae,W=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe),t.texSubImage2D(n.TEXTURE_2D,0,ue,fe,B,W,X,me,E.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Re(P,E,X){let me=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=n.TEXTURE_3D);let Q=Ye(P,E),ye=E.source;t.bindTexture(me,P.__webglTexture,n.TEXTURE0+X);let Te=i.get(ye);if(ye.version!==Te.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let W=ft.getPrimaries(ft.workingColorSpace),ce=E.colorSpace===mi?null:ft.getPrimaries(E.colorSpace),Ne=E.colorSpace===mi||W===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ie=y(E.image,!1,s.maxTextureSize);ie=Oe(E,ie);let Ce=r.convert(E.format,E.colorSpace),D=r.convert(E.type),se=w(E.internalFormat,Ce,D,E.normalized,E.colorSpace,E.isVideoTexture);Ke(me,E);let ee,Pe=E.mipmaps,Ae=E.isVideoTexture!==!0,ue=Te.__version===void 0||Q===!0,fe=ye.dataReady,B=v(E,ie);if(E.isDepthTexture)se=_(E.format===pi,E.type),ue&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,se,ie.width,ie.height,0,Ce,D,null));else if(E.isDataTexture)if(Pe.length>0){Ae&&ue&&t.texStorage2D(n.TEXTURE_2D,B,se,Pe[0].width,Pe[0].height);for(let W=0,ce=Pe.length;W<ce;W++)ee=Pe[W],Ae?fe&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ee.width,ee.height,Ce,D,ee.data):t.texImage2D(n.TEXTURE_2D,W,se,ee.width,ee.height,0,Ce,D,ee.data);E.generateMipmaps=!1}else Ae?(ue&&t.texStorage2D(n.TEXTURE_2D,B,se,ie.width,ie.height),fe&&Se(E,ie,Ce,D)):t.texImage2D(n.TEXTURE_2D,0,se,ie.width,ie.height,0,Ce,D,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ae&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,se,Pe[0].width,Pe[0].height,ie.depth);for(let W=0,ce=Pe.length;W<ce;W++)if(ee=Pe[W],E.format!==Vn)if(Ce!==null)if(Ae){if(fe)if(E.layerUpdates.size>0){let Ne=Dh(ee.width,ee.height,E.format,E.type);for(let _e of E.layerUpdates){let Ie=ee.data.subarray(_e*Ne/ee.data.BYTES_PER_ELEMENT,(_e+1)*Ne/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,_e,ee.width,ee.height,1,Ce,Ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ee.width,ee.height,ie.depth,Ce,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,se,ee.width,ee.height,ie.depth,0,ee.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ee.width,ee.height,ie.depth,Ce,D,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,se,ee.width,ee.height,ie.depth,0,Ce,D,ee.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ae&&ue&&t.texStorage2D(n.TEXTURE_2D,B,se,Pe[0].width,Pe[0].height);for(let W=0,ce=Pe.length;W<ce;W++)ee=Pe[W],E.format!==Vn?Ce!==null?Ae?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ee.width,ee.height,Ce,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,W,se,ee.width,ee.height,0,ee.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?fe&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ee.width,ee.height,Ce,D,ee.data):t.texImage2D(n.TEXTURE_2D,W,se,ee.width,ee.height,0,Ce,D,ee.data)}else if(E.isDataArrayTexture)if(Ae){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,se,ie.width,ie.height,ie.depth),fe)if(E.layerUpdates.size>0){let W=Dh(ie.width,ie.height,E.format,E.type);for(let ce of E.layerUpdates){let Ne=ie.data.subarray(ce*W/ie.data.BYTES_PER_ELEMENT,(ce+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ie.width,ie.height,1,Ce,D,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ce,D,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,Ce,D,ie.data);else if(E.isData3DTexture)Ae?(ue&&t.texStorage3D(n.TEXTURE_3D,B,se,ie.width,ie.height,ie.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ce,D,ie.data)):t.texImage3D(n.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,Ce,D,ie.data);else if(E.isFramebufferTexture){if(ue)if(Ae)t.texStorage2D(n.TEXTURE_2D,B,se,ie.width,ie.height);else{let W=ie.width,ce=ie.height;for(let Ne=0;Ne<B;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,se,W,ce,0,Ce,D,null),W>>=1,ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let W=n.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),ie.parentNode!==W){W.appendChild(ie),f.add(E),W.onpaint=ce=>{let Ne=ce.changedElements;for(let _e of f)Ne.includes(_e.image)&&(_e.needsUpdate=!0)},W.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ie);else{let Ne=n.RGBA,_e=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,_e,Ie,ie)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ae&&ue){let W=ke(Pe[0]);t.texStorage2D(n.TEXTURE_2D,B,se,W.width,W.height)}for(let W=0,ce=Pe.length;W<ce;W++)ee=Pe[W],Ae?fe&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ce,D,ee):t.texImage2D(n.TEXTURE_2D,W,se,Ce,D,ee);E.generateMipmaps=!1}else if(Ae){if(ue){let W=ke(ie);t.texStorage2D(n.TEXTURE_2D,B,se,W.width,W.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,D,ie)}else t.texImage2D(n.TEXTURE_2D,0,se,Ce,D,ie);b(E)&&E.mipmapsAutoUpdate===!0&&M(me),Te.__version=ye.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function le(P,E,X){if(E.image.length!==6)return;let me=Ye(P,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);let ye=i.get(Q);if(Q.version!==ye.__version||me===!0){t.activeTexture(n.TEXTURE0+X);let Te=ft.getPrimaries(ft.workingColorSpace),ne=E.colorSpace===mi?null:ft.getPrimaries(E.colorSpace),ie=E.colorSpace===mi||Te===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,se=[];for(let _e=0;_e<6;_e++)!Ce&&!D?se[_e]=y(E.image[_e],!0,s.maxCubemapSize):se[_e]=D?E.image[_e].image:E.image[_e],se[_e]=Oe(E,se[_e]);let ee=se[0],Pe=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),ue=w(E.internalFormat,Pe,Ae,E.normalized,E.colorSpace),fe=E.isVideoTexture!==!0,B=ye.__version===void 0||me===!0,W=Q.dataReady,ce=v(E,ee);Ke(n.TEXTURE_CUBE_MAP,E);let Ne;if(E.isDepthTexture){if(ue=_(E.format===pi,E.type),B)if(fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ue,ee.width,ee.height);else for(let _e=0;_e<6;_e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,ee.width,ee.height,0,Pe,Ae,null)}else if(Ce){fe&&B&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ue,ee.width,ee.height);for(let _e=0;_e<6;_e++){Ne=se[_e].mipmaps;for(let Ie=0;Ie<Ne.length;Ie++){let et=Ne[Ie];E.format!==Vn?Pe!==null?fe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,0,0,et.width,et.height,Pe,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,ue,et.width,et.height,0,et.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,0,0,et.width,et.height,Pe,Ae,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,ue,et.width,et.height,0,Pe,Ae,et.data)}}}else{if(Ne=E.mipmaps,fe&&B){Ne.length>0&&ce++;let _e=ke(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ue,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(D){fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,se[_e].width,se[_e].height,Pe,Ae,se[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,se[_e].width,se[_e].height,0,Pe,Ae,se[_e].data);for(let Ie=0;Ie<Ne.length;Ie++){let xt=Ne[Ie].image[_e].image;fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,0,0,xt.width,xt.height,Pe,Ae,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,ue,xt.width,xt.height,0,Pe,Ae,xt.data)}}else{fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe,Ae,se[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,Pe,Ae,se[_e]);for(let Ie=0;Ie<Ne.length;Ie++){let et=Ne[Ie];fe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,0,0,Pe,Ae,et.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,ue,Pe,Ae,et.image[_e])}}}b(E)&&E.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ye.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,X,me,Q,ye){let Te=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),ie=w(X.internalFormat,Te,ne,X.normalized,X.colorSpace),Ce=i.get(E),D=i.get(X);if(D.__renderTarget=E,!Ce.__hasExternalTextures){let se=Math.max(1,E.width>>ye),ee=Math.max(1,E.height>>ye);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ye,ie,se,ee,E.depth,0,Te,ne,null):t.texImage2D(Q,ye,ie,se,ee,0,Te,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,Q,D.__webglTexture,0,We(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,Q,D.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(P,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let me=E.depthTexture,Q=me&&me.isDepthTexture?me.type:null,ye=_(E.stencilBuffer,Q),Te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(E),ye,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(E),ye,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ye,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,P)}else{let me=E.textures;for(let Q=0;Q<me.length;Q++){let ye=me[Q],Te=r.convert(ye.format,ye.colorSpace),ne=r.convert(ye.type),ie=w(ye.internalFormat,Te,ne,ye.normalized,ye.colorSpace);ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(E),ie,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(E),ie,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ie,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(P,E,X){let me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(E.depthTexture);Q.__renderTarget=E;let ye=me?E.depthTexture.image[0]:E.depthTexture.image;(!Q.__webglTexture||ye.width!==E.width||ye.height!==E.height)&&(ye.width=E.width,ye.height=E.height,E.depthTexture.needsUpdate=!0),me?j(E.depthTexture,0):xe(E.depthTexture,0);let Te=Q.__webglTexture,ne=We(E),ie=me?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,Ce=E.depthTexture.format===pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===ui)ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,ie,Te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,ie,Te,0);else if(E.depthTexture.format===pi)ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,ie,Te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,ie,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(P){let E=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let me=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",Q)};me.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=me}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let me=0;me<6;me++)De(E.__webglFramebuffer[me],P,me);else P.texture.mipmaps.length>0?De(E.__webglFramebuffer[0],P,0):De(E.__webglFramebuffer,P,0);else if(X){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=n.createRenderbuffer(),Ee(E.__webglDepthbuffer[me],P,!1);else{let Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ye)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ee(E.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ye)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(P,E,X){let me=i.get(P);E!==void 0&&oe(me.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ge(P)}function Qe(P){let E=P.texture,X=i.get(P),me=i.get(E);P.addEventListener("dispose",L),T(P);let Q=P.textures,ye=P.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=E.version,o.memory.textures++),ye){X.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(E.mipmaps.length>0){X.__webglFramebuffer[ne]=[];for(let ie=0;ie<E.mipmaps.length;ie++)X.__webglFramebuffer[ne][ie]=n.createFramebuffer()}else X.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ne=0;ne<E.mipmaps.length;ne++)X.__webglFramebuffer[ne]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ne=0,ie=Q.length;ne<ie;ne++){let Ce=i.get(Q[ne]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ae(P)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){let ie=Q[ne];X.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ne]);let Ce=r.convert(ie.format,ie.colorSpace),D=r.convert(ie.type),se=w(ie.internalFormat,Ce,D,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),ee=We(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,se,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,X.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,E);for(let ne=0;ne<6;ne++)if(E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)oe(X.__webglFramebuffer[ne][ie],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else oe(X.__webglFramebuffer[ne],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);b(E)?M(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ne=0,ie=Q.length;ne<ie;ne++){let Ce=Q[ne],D=i.get(Ce),se=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,D.__webglTexture),Ke(se,Ce),oe(X.__webglFramebuffer,P,Ce,n.COLOR_ATTACHMENT0+ne,se,0),b(Ce)&&M(se)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,me.__webglTexture),Ke(ne,E),E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)oe(X.__webglFramebuffer[ie],P,E,n.COLOR_ATTACHMENT0,ne,ie);else oe(X.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ne,0);b(E)?M(ne):E.mipmaps.length>0&&n.texParameteri(ne,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Ge(P)}function O(P){let E=P.textures;for(let X=0,me=E.length;X<me;X++){let Q=E[X];if(b(Q)&&Q.mipmapsAutoUpdate===!0){let ye=S(P),Te=i.get(Q).__webglTexture;t.bindTexture(ye,Te),M(ye),t.unbindTexture()}}}let de=[];function Me(P){if(P.samples>0){if(ae(P)===!1){let E=P.textures,X=P.width,me=P.height,Q=n.COLOR_BUFFER_BIT,ye=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(P),ne=E.length>1;if(ne)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let D=i.get(E[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,X,me,0,0,X,me,Q,n.NEAREST),l===!0&&(de.length=0,de.push(n.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&de.push(ye),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let D=i.get(E[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function We(P){return Math.min(s.maxSamples,P.samples)}function ae(P){let E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Oe(P,E){let X=P.colorSpace,me=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Cr&&X!==mi&&(ft.getTransfer(X)===vt?(me!==Vn||Q!==bn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",X)),E}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ve,this.resetTextureUnits=K,this.getTextureUnits=G,this.setTextureUnits=ge,this.setTexture2D=xe,this.setTexture2DArray=Le,this.setTexture3D=he,this.setTextureCube=j,this.rebindTextures=Je,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ae,this.dispose=H}function eM(n,e){function t(i,s=mi){let r,o=ft.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===Ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===Ja)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===_h)return n.ALPHA;if(i===vh)return n.RGB;if(i===Vn)return n.RGBA;if(i===ui)return n.DEPTH_COMPONENT;if(i===pi)return n.DEPTH_STENCIL;if(i===Qa)return n.RED;if(i===el)return n.RED_INTEGER;if(i===Oi)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===nl)return n.RGBA_INTEGER;if(i===oo||i===ao||i===lo||i===co)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===sl||i===rl||i===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ll||i===cl||i===hl||i===ul||i===ho||i===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===al||i===ll)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return r.COMPRESSED_R11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ho)return r.COMPRESSED_RG11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===wl||i===El||i===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Rl||i===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Al)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===Il||i===uo||i===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:tM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends Xn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new qh,g={},y=t.getContextAttributes(),b=null,M=null,S=[],w=[],_=new Ue,v=null,T=null,A=new Zt;A.viewport=new Lt;let C=new Zt;C.viewport=new Lt;let L=[A,C],V=new Xa,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let xe=S[Z];return xe===void 0&&(xe=new Ws,S[Z]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Z){let xe=S[Z];return xe===void 0&&(xe=new Ws,S[Z]=xe),xe.getGripSpace()},this.getHand=function(Z){let xe=S[Z];return xe===void 0&&(xe=new Ws,S[Z]=xe),xe.getHandSpace()};function Y(Z){let xe=w.indexOf(Z.inputSource);if(xe===-1)return;let Le=S[xe];Le!==void 0&&(Le.update(Z.inputSource,Z.frame,c||o),Le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<S.length;Z++){let xe=w[Z];xe!==null&&(w[Z]=null,S[Z].disconnect(xe))}I=null,H=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(b),u=null,d=null,f=null,s=null,M=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(_.width,_.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",N),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,he=null,j=null;y.depth&&(j=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=y.stencil?pi:ui,he=y.stencil?_s:zn);let be={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Mn(d.textureWidth,d.textureHeight,{format:Vn,type:bn,depthTexture:new di(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Le={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Mn(u.framebufferWidth,u.framebufferHeight,{format:Vn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let xe=0;xe<Z.removed.length;xe++){let Le=Z.removed[xe],he=w.indexOf(Le);he>=0&&(w[he]=null,S[he].disconnect(Le))}for(let xe=0;xe<Z.added.length;xe++){let Le=Z.added[xe],he=w.indexOf(Le);if(he===-1){for(let be=0;be<S.length;be++)if(be>=w.length){w.push(Le),he=be;break}else if(w[be]===null){w[be]=Le,he=be;break}if(he===-1)break}let j=S[he];j&&j.connect(Le)}}function z(Z,xe){xe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(xe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let xe=Z.near,Le=Z.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),V.near=C.near=A.near=xe,V.far=C.far=A.far=Le,(I!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,H=V.far),V.layers.mask=Z.layers.mask|6,A.layers.mask=V.layers.mask&-5,C.layers.mask=V.layers.mask&-3;let he=Z.parent,j=V.cameras;z(V,he);for(let be=0;be<j.length;be++)z(j[be],he);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),K(Z,V,he)};function K(Z,xe,Le){Le===null?Z.matrix.copy(xe.matrixWorld):(Z.matrix.copy(Le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(xe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(xe.projectionMatrix),Z.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return g[Z]};let G=null;function ge(Z,xe){if(h=xe.getViewerPose(c||o),p=xe,h!==null){let Le=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let he=!1;Le.length!==V.cameras.length&&(V.cameras.length=0,he=!0);for(let we=0;we<Le.length;we++){let Ke=Le[we],Ye=null;if(u!==null)Ye=u.getViewport(Ke);else{let Se=f.getViewSubImage(d,Ke);Ye=Se.viewport,we===0&&(e.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(M))}let re=L[we];re===void 0&&(re=new Zt,re.layers.enable(we),re.viewport=new Lt,L[we]=re),re.matrix.fromArray(Ke.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ke.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),we===0&&(V.matrix.copy(re.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),he===!0&&V.cameras.push(re)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let we=f.getDepthInformation(Le[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(j&&j.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let we=0;we<Le.length;we++){let Ke=Le[we].camera;if(Ke){let Ye=g[Ke];Ye||(Ye=new Vr,g[Ke]=Ye);let re=f.getCameraImage(Ke);Ye.sourceTexture=re}}}}for(let Le=0;Le<S.length;Le++){let he=w[Le],j=S[Le];he!==null&&j!==void 0&&j.update(he,xe,c||o)}G&&G(Z,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),p=null}let ve=new Ff;ve.setAnimationLoop(ge),this.setAnimationLoop=function(Z){G=Z},this.dispose=function(){}}},iM=new ht,Yf=new rt;Yf.set(-1,0,0,0,1,0,0,0,1);function sM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Ph(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Bt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Bt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rM(n,e,t,i){let s={},r={};function o(y,b){let M=b.program;i.uniformBlockBinding(y,M,s[y.id])}function a(y,b){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let S=b.program;i.updateUBOMapping(y,S);let w=e.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let b=n.createBuffer(),M=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,M,S),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],M=y.uniforms,S=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,_=M.length;w<_;w++){let v=M[w];if(Array.isArray(v))for(let T=0,A=v.length;T<A;T++)h(v[T],w,T,S);else h(v,w,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,b,M,S){if(d(y,b,M,S)===!0){let w=y.__offset,_=y.value;if(Array.isArray(_)){let v=0;for(let T=0;T<_.length;T++){let A=_[T],C=x(A,!0);f(A,y.__data,v),v+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,y.__data)}}function f(y,b,M){typeof y=="number"||typeof y=="boolean"?b[M]=y:y.isMatrix3?(b[M]=y.elements[0],b[M+1]=y.elements[1],b[M+2]=y.elements[2],b[M+3]=0,b[M+4]=y.elements[3],b[M+5]=y.elements[4],b[M+6]=y.elements[5],b[M+7]=0,b[M+8]=y.elements[6],b[M+9]=y.elements[7],b[M+10]=y.elements[8],b[M+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-M),M):y.toArray(b,M)}function d(y,b,M,S){let w=y.value,_=b+"_"+M;if(Array.isArray(w)){S[_]===void 0&&(S[_]=[]);let v=S[_],T=!1;for(let A=0;A<w.length;A++)u(w[A],v,A)===!0&&(T=!0);return T}return u(w,S,_)}function u(y,b,M){if(b[M]===void 0)return typeof y=="number"||typeof y=="boolean"?b[M]=y:ArrayBuffer.isView(y)?b[M]=y.slice():b[M]=y.clone(),!0;{let S=b[M];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return b[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let b=y.uniforms,M=0,S=16;for(let _=0,v=b.length;_<v;_++){let T=Array.isArray(b[_])?b[_]:[b[_]];for(let A=0,C=T.length;A<C;A++){let L=T[A],V=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(b[_])||Array.isArray(L.value),H=M;for(let N=0,J=V.length;N<J;N++){let z=V[N],K=x(z,I),G=M%S,ge=G%K.boundary,ve=G+ge;M+=ge,ve!==0&&S-ve<K.storage&&(M+=S-ve),N===0&&(H=M),M+=K.storage}let Y=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new Y((M-H)/Float32Array.BYTES_PER_ELEMENT),L.__offset=H}}let w=M%S;return w>0&&(M+=S-w),y.__size=M,y.__cache={},this}function x(y,b){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let b=y.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var oM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function aM(){return $n===null&&($n=new Or(oM,16,16,Oi,Hn),$n.name="DFG_LUT",$n.minFilter=cn,$n.magFilter=cn,$n.wrapS=Wn,$n.wrapT=Wn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Ol=class{constructor(e={}){let{canvas:t=ef(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=bn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([nl,tl,el]),g=new Set([bn,zn,er,_s,Ka,ja]),y=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,w=null,_=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,L=null,V=null,I=null,H=null;this._outputColorSpace=$t;let Y=0,N=0,J=null,z=-1,K=null,G=new Lt,ge=new Lt,ve=null,Z=new tt(0),xe=0,Le=t.width,he=t.height,j=1,be=null,Ze=null,we=new Lt(0,0,Le,he),Ke=new Lt(0,0,Le,he),Ye=!1,re=new us,Se=new wa,Re=!1,le=!1,oe=new ht,Ee=new U,De=new Lt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function Qe(){return J===null?j:1}let O=i;function de(R,k){return t.getContext(R,k)}let Me,We,ae,it,Oe,ke,P,E,X,me,Q,ye,Te,ne,ie,Ce,D,se,ee,Pe,Ae,ue,fe;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){let k="webgl2";if(O=de(k,R),O===null)throw de(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}B()}catch(R){throw t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),st("WebGLRenderer: "+R.message),R}function B(){Me=new _v(O),Me.init(),Ae=new eM(O,Me),We=new av(O,Me,e,Ae),ae=new jy(O,Me),We.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),V=O.createFramebuffer(),I=O.createFramebuffer(),H=O.createFramebuffer(),it=new Mv(O),Oe=new By,ke=new Qy(O,Me,ae,Oe,We,Ae,it),P=new xv(A),E=new bg(O),ue=new rv(O,E),X=new vv(O,E,it,ue),me=new bv(O,X,E,ue,it),se=new Sv(O,We,ke),ie=new lv(Oe),Q=new Oy(A,P,Me,We,ue,ie),ye=new sM(A,Oe),Te=new zy,ne=new Yy(Me),D=new sv(A,P,ae,me,p,l),Ce=new Ky(A,me,We),fe=new rM(O,it,We,ae),ee=new ov(O,Me,it),Pe=new yv(O,Me,it),it.programs=Q.programs,A.capabilities=We,A.extensions=Me,A.properties=Oe,A.renderLists=Te,A.shadowMap=Ce,A.state=ae,A.info=it}x!==bn&&(T=new Ev(x,t.width,t.height,a,s,r));let W=new $h(A,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Le,he,!1))},this.getSize=function(R){return R.set(Le,he)},this.setSize=function(R,k,te=!0){if(W.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=R,he=k,t.width=Math.floor(R*j),t.height=Math.floor(k*j),te===!0&&(t.style.width=R+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Le*j,he*j).floor()},this.setDrawingBufferSize=function(R,k,te){Le=R,he=k,j=te,t.width=Math.floor(R*te),t.height=Math.floor(k*te),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(x===bn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(we)},this.setViewport=function(R,k,te,q){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,k,te,q),ae.viewport(G.copy(we).multiplyScalar(Qe()).round())},this.getScissor=function(R){return R.copy(Ke)},this.setScissor=function(R,k,te,q){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,k,te,q),ae.scissor(ge.copy(Ke).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(R){ae.setScissorTest(Ye=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,te=!0){let q=0;if(R){let $=!1;if(J!==null){let Be=J.texture.format;$=m.has(Be)}if($){let Be=J.texture.type,Xe=g.has(Be),Fe=D.getClearColor(),Ve=D.getClearAlpha(),je=Fe.r,ot=Fe.g,ut=Fe.b;Xe?(y[0]=je,y[1]=ot,y[2]=ut,y[3]=Ve,O.clearBufferuiv(O.COLOR,0,y)):(b[0]=je,b[1]=ot,b[2]=ut,b[3]=Ve,O.clearBufferiv(O.COLOR,0,b))}else q|=O.COLOR_BUFFER_BIT}k&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),D.dispose(),Te.dispose(),ne.dispose(),ke.dispose(),Oe.dispose(),P.dispose(),me.dispose(),X.dispose(),ue.dispose(),fe.dispose(),Q.dispose(),W.dispose(),W.removeEventListener("sessionstart",an),W.removeEventListener("sessionend",Rt),Tn.stop()};function ce(R){R.preventDefault(),Eh("WebGLRenderer: Context Lost."),C=!0}function Ne(){Eh("WebGLRenderer: Context Restored."),C=!1;let R=it.autoReset,k=Ce.enabled,te=Ce.autoUpdate,q=Ce.needsUpdate,$=Ce.type;B(),it.autoReset=R,Ce.enabled=k,Ce.autoUpdate=te,Ce.needsUpdate=q,Ce.type=$}function _e(R){st("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){let k=R.target;k.removeEventListener("dispose",Ie),et(k)}function et(R){xt(R),Oe.remove(R)}function xt(R){let k=Oe.get(R).programs;k!==void 0&&(k.forEach(function(te){Q.releaseProgram(te)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,te,q,$,Be){k===null&&(k=Ge);let Xe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Fe=Ym(R,k,te,q,$);ae.setMaterial(q,Xe);let Ve=te.index,je=1;if(q.wireframe===!0){if(Ve=X.getWireframeAttribute(te),Ve===void 0)return;je=2}let ot=te.drawRange,ut=te.attributes.position,qe=ot.start*je,dt=(ot.start+ot.count)*je;Be!==null&&(qe=Math.max(qe,Be.start*je),dt=Math.min(dt,(Be.start+Be.count)*je)),Ve!==null?(qe=Math.max(qe,0),dt=Math.min(dt,Ve.count)):ut!=null&&(qe=Math.max(qe,0),dt=Math.min(dt,ut.count));let Ut=dt-qe;if(Ut<0||Ut===1/0)return;ue.setup($,q,Fe,te,Ve);let wt,St=ee;if(Ve!==null&&(wt=E.get(Ve),St=Pe,St.setIndex(wt)),$.isMesh)q.wireframe===!0?(ae.setLineWidth(q.wireframeLinewidth*Qe()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if($.isLine){let Qt=q.linewidth;Qt===void 0&&(Qt=1),ae.setLineWidth(Qt*Qe()),$.isLineSegments?St.setMode(O.LINES):$.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else $.isPoints?St.setMode(O.POINTS):$.isSprite&&St.setMode(O.TRIANGLES);if($.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Qt=$._multiDrawStarts,$e=$._multiDrawCounts,ln=$._multiDrawCount,_t=Ve?E.get(Ve).bytesPerElement:1,ts=Oe.get(q).currentProgram.getUniforms();for(let en=0;en<ln;en++)ts.setValue(O,"_gl_DrawID",en),St.render(Qt[en]/_t,$e[en])}else if($.isInstancedMesh)St.renderInstances(qe,Ut,$.count);else if(te.isInstancedBufferGeometry){let Qt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$e=Math.min(te.instanceCount,Qt);St.renderInstances(qe,Ut,$e)}else St.render(qe,Ut)};function bt(R,k,te,q){L!==null&&R.isNodeMaterial&&L.setObject(q,R),Re===!0&&ie.setState(R,te,!1),R.transparent===!0&&R.side===In&&R.forceSinglePass===!1?(R.side=Bt,R.needsUpdate=!0,mr(R,k,q),R.side=Fi,R.needsUpdate=!0,mr(R,k,q),R.side=In):mr(R,k,q)}this.compile=function(R,k,te=null){te===null&&(te=R),L!==null&&L.renderStart(R,k,te),w=ne.get(te),w.init(k),v.push(w),te.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),R!==te&&R.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),le=this.localClippingEnabled,Re=ie.init(this.clippingPlanes,le),Re===!0&&ie.setGlobalState(this.clippingPlanes,k),L!==null&&Ce.render(w.state.shadowsArray,te,k);let q=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Be=$.material;if(Be)if(Array.isArray(Be))for(let Xe=0;Xe<Be.length;Xe++){let Fe=Be[Xe];bt(Fe,te,k,$),q.add(Fe)}else bt(Be,te,k,$),q.add(Be)}),w=v.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(R,k,te=null){let q=this.compile(R,k,te);return new Promise($=>{function Be(){if(q.forEach(function(Xe){let Ve=Oe.get(Xe).currentProgram;(Ve===void 0||Ve.isReady())&&q.delete(Xe)}),q.size===0){$(R);return}setTimeout(Be,10)}Me.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let pt=null;function Nn(R){pt&&pt(R)}function an(){Tn.stop()}function Rt(){Tn.start()}let Tn=new Ff;Tn.setAnimationLoop(Nn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(R){pt=R,W.setAnimationLoop(R),R===null?Tn.stop():Tn.start()},W.addEventListener("sessionstart",an),W.addEventListener("sessionend",Rt),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,k);let te=W.enabled===!0&&W.isPresenting===!0,q=T!==null&&(J===null||te)&&T.begin(A,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(k),k=W.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,k,J),w=ne.get(R,v.length),w.init(k),w.state.textureUnits=ke.getTextureUnits(),v.push(w),oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Se.setFromArrayCamera(k):re.setFromProjectionMatrix(oe,Rn,k.reversedDepth),le=this.localClippingEnabled,Re=ie.init(this.clippingPlanes,le),S=Te.get(R,_.length),S.init(),_.push(S),this.info.render.frame++,W.enabled===!0&&W.isPresenting===!0){let Xe=A.xr.getDepthSensingMesh();Xe!==null&&wi(Xe,k,-1/0,A.sortObjects)}wi(R,k,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(be,Ze),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&D.addToRenderList(S,R),this.info.autoReset===!0&&this.info.reset(),Re===!0&&ie.beginShadows();let $=w.state.shadowsArray;if(Ce.render($,R,k),Re===!0&&ie.endShadows(),(q&&T.hasRenderPass())===!1){let Xe=S.opaque,Fe=S.transmissive;if(w.setupLights(),k.isArrayCamera){let Ve=k.cameras;if(Fe.length>0)for(let je=0,ot=Ve.length;je<ot;je++){let ut=Ve[je];ji(Xe,Fe,R,ut)}Je&&D.render(R);for(let je=0,ot=Ve.length;je<ot;je++){let ut=Ve[je];ii(S,R,ut,ut.viewport)}}else Fe.length>0&&ji(Xe,Fe,R,k),Je&&D.render(R),ii(S,R,k)}J!==null&&N===0&&(ke.updateMultisampleRenderTarget(J),ke.updateRenderTargetMipmap(J)),q&&T.end(A),R.isScene===!0&&R.onAfterRender(A,R,k),ue.resetDefaultState(),z=-1,K=null,v.pop(),v.length>0?(w=v[v.length-1],ke.setTextureUnits(w.state.textureUnits),Re===!0&&ie.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,L!==null&&L.renderEnd()};function wi(R,k,te,q){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){let Xe=k.isArrayCamera?Se:re;if(!R.frustumCulled||R.intersectsFrustum(Xe)){q&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);let Fe=me.update(R),Ve=R.material;Ve.visible&&S.push(R,Fe,Ve,te,De.z,null,k)}}else if(R.isMesh||R.isLine||R.isPoints){let Xe=k.isArrayCamera?Se:re;if(!R.frustumCulled||R.intersectsFrustum(Xe)){let Fe=me.update(R),Ve=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),De.copy(Fe.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Ve)){let je=Fe.groups;for(let ot=0,ut=je.length;ot<ut;ot++){let qe=je[ot],dt=Ve[qe.materialIndex];dt&&dt.visible&&S.push(R,Fe,dt,te,De.z,qe,k)}}else Ve.visible&&S.push(R,Fe,Ve,te,De.z,null,k)}}}let Be=R.children;for(let Xe=0,Fe=Be.length;Xe<Fe;Xe++)wi(Be[Xe],k,te,q)}function ii(R,k,te,q){let{opaque:$,transmissive:Be,transparent:Xe}=R;w.setupLightsView(te),Re===!0&&ie.setGlobalState(A.clippingPlanes,te),q&&ae.viewport(G.copy(q)),$.length>0&&Qi($,k,te),Be.length>0&&Qi(Be,k,te),Xe.length>0&&Qi(Xe,k,te),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ji(R,k,te,q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let qe=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new Mn(1,1,{generateMipmaps:!0,type:qe?Hn:bn,minFilter:fi,samples:Math.max(4,We.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Be=w.state.transmissionRenderTarget[q.id],Xe=q.viewport||G;Be.setSize(Xe.z*A.transmissionResolutionScale,Xe.w*A.transmissionResolutionScale);let Fe=A.getRenderTarget(),Ve=A.getActiveCubeFace(),je=A.getActiveMipmapLevel();A.setRenderTarget(Be),A.getClearColor(Z),xe=A.getClearAlpha(),xe<1&&A.setClearColor(16777215,.5),A.clear(),Je&&D.render(te);let ot=A.toneMapping;A.toneMapping=qn;let ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),Re===!0&&ie.setGlobalState(A.clippingPlanes,q),Qi(R,te,q),ke.updateMultisampleRenderTarget(Be),ke.updateRenderTargetMipmap(Be),Me.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let dt=0,Ut=k.length;dt<Ut;dt++){let wt=k[dt],{object:St,geometry:Qt,material:$e,group:ln}=wt;if($e.side===In&&St.layers.test(q.layers)){let _t=$e.side;$e.side=Bt,$e.needsUpdate=!0,pr(St,te,q,Qt,$e,ln),$e.side=_t,$e.needsUpdate=!0,qe=!0}}qe===!0&&(ke.updateMultisampleRenderTarget(Be),ke.updateRenderTargetMipmap(Be))}A.setRenderTarget(Fe,Ve,je),A.setClearColor(Z,xe),ut!==void 0&&(q.viewport=ut),A.toneMapping=ot}function Qi(R,k,te){let q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Be=R.length;$<Be;$++){let Xe=R[$],{object:Fe,geometry:Ve,group:je}=Xe,ot=Xe.material;ot.allowOverride===!0&&q!==null&&(ot=q),Fe.layers.test(te.layers)&&pr(Fe,k,te,Ve,ot,je)}}function pr(R,k,te,q,$,Be){L!==null&&$.isNodeMaterial&&L.setObject(R,$),R.onBeforeRender(A,k,te,q,$,Be),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,k,te,q,R,Be),$.transparent===!0&&$.side===In&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,A.renderBufferDirect(te,k,q,$,R,Be),$.side=Fi,$.needsUpdate=!0,A.renderBufferDirect(te,k,q,$,R,Be),$.side=In):A.renderBufferDirect(te,k,q,$,R,Be),R.onAfterRender(A,k,te,q,$,Be)}function es(R){let k=0;for(let te of R)te.texture!==null&&k++;return k}function mr(R,k,te){k.isScene!==!0&&(k=Ge);let q=Oe.get(R),$=w.state.lights,Be=w.state.shadowsArray,Xe=$.state.version,Fe=Q.getParameters(R,$.state,Be,k,te,w.state.lightProbeGridArray),Ve=Q.getProgramCacheKey(Fe),je=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=P.get(R.envMap||q.environment,ot),q.envMapRotation=q.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",Ie),je=new Map,q.programs=je,q.programVariants=new Map);let ut=je.get(Ve);if(ut!==void 0){if(q.currentProgram===ut&&q.lightsStateVersion===Xe)return Vu(R,Fe),ut}else Fe.uniforms=Q.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,te,Fe),R.onBeforeCompile(Fe,A),ut=Q.acquireProgram(Fe,Ve),je.set(Ve,ut),q.uniforms=Fe.uniforms;let qe=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=ie.uniform),Vu(R,Fe),q.needsLights=$m(R),q.lightsStateVersion=Xe,q.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.sunLights.value=$.state.sun,qe.sunLightShadows.value=$.state.sunShadow,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.sunShadowMatrix.value=$.state.sunShadowMatrix,qe.sunShadowCascade.value=$.state.sunShadowCascade,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),q.numLightProbeGrids=es(w.state.lightProbeGridArray),q.currentProgram=ut,q.uniformsList=null,ut}function Xm(R,k,te,q,$){let Be=Oe.get(R),Xe=Be.currentProgram.id+","+q+","+$,Fe=Be.programVariants.get(Xe);return Fe===void 0?(Fe=mr(R,k,te),Be.programVariants.set(Xe,Fe)):(Be.currentProgram=Fe,Be.uniformsList=null,Be.outputColorSpace=q,Be.toneMapping=$),Fe}function Hu(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=nr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Vu(R,k){let te=Oe.get(R);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function Ym(R,k,te,q,$){k.isScene!==!0&&(k=Ge),ke.resetTextureUnits();let Be=k.fog,Xe=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Fe=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ft.workingColorSpace,Ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,je=P.get(q.envMap||Xe,Ve),ot=q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!te.morphAttributes.position,dt=!!te.morphAttributes.normal,Ut=!!te.morphAttributes.color,wt=qn;q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(wt=A.toneMapping);let St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Qt=St!==void 0?St.length:0,$e=Oe.get(q),ln=w.state.lights;if(Re===!0&&(le===!0||R!==K)){let Pt=R===K&&q.id===z;ie.setState(q,R,Pt)}let _t=!1,ts=!1;q.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==ln.state.version||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==je||q.fog===!0&&$e.fog!==Be||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ie.numPlanes||$e.numIntersection!==ie.numIntersection)||$e.vertexAlphas!==ot||$e.vertexTangents!==ut||$e.morphTargets!==qe||$e.morphNormals!==dt||$e.morphColors!==Ut||$e.morphTargetsCount!==Qt||$e.numLightProbeGrids!==es(w.state.lightProbeGridArray)?_t=!0:($e.outputColorSpace!==Fe||$e.toneMapping!==wt)&&(ts=!0):(_t=!0,$e.__version=q.version);let en=$e.currentProgram;(_t===!0||ts===!0)&&(en=ts===!0?Xm(q,k,$,Fe,wt):mr(q,k,$),L&&q.isNodeMaterial&&L.onUpdateProgram(q,en,$e));let Bo=!1,Ei=!1,ns=!1,gt=en.getUniforms(),qt=$e.uniforms;if(ae.useProgram(en.program)&&(Bo=!0,Ei=!0,ns=!0),q.id!==z&&(z=q.id,Ei=!0),Bo||K!==R){ae.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",R.projectionMatrix),gt.setValue(O,"viewMatrix",R.matrixWorldInverse);let Vt=gt.map.cameraPosition;Vt!==void 0&&Vt.setValue(O,Ee.setFromMatrixPosition(R.matrixWorld)),We.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Ei=!0,ns=!0)}if($e.needsLights&&(ln.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",ln.state.sunShadowMap,ke),ln.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,ke),ln.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",ln.state.spotShadowMap,ke),ln.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",ln.state.pointShadowMap,ke)),$.isSkinnedMesh){gt.setOptional(O,$,"bindMatrix"),gt.setOptional(O,$,"bindMatrixInverse");let Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),gt.setValue(O,"boneTexture",Pt.boneTexture,ke))}$.isBatchedMesh&&(gt.setOptional(O,$,"batchingTexture"),gt.setValue(O,"batchingTexture",$._matricesTexture,ke),gt.setOptional(O,$,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",$._indirectTexture,ke),gt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",$._colorsTexture,ke));let Un=te.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&se.update($,te,en),(Ei||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,gt.setValue(O,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(qt.envMapIntensity.value=k.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=aM()),Ei){if(gt.setValue(O,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&qm(qt,ns),Be&&q.fog===!0&&ye.refreshFogUniforms(qt,Be),ye.refreshMaterialUniforms(qt,q,j,he,w.state.transmissionRenderTarget[R.id]),$e.needsLights&&$e.numLightProbeGrids>0){let Pt=M,Vt=0;for(let si of w.state.lightProbeGridArray)si.texture!==null&&(Pt.textures[Vt]=si.texture,Pt.min[Vt]=si.boundingBox.min,Pt.max[Vt]=si.boundingBox.max,Pt.resolution[Vt]=si.resolution,Vt++);for(let si in Pt)Pt[si].length=Vt;qt.probesSH.value=Pt.textures,qt.probesMin.value=Pt.min,qt.probesMax.value=Pt.max,qt.probesResolution.value=Pt.resolution}nr.upload(O,Hu($e),qt,ke)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(nr.upload(O,Hu($e),qt,ke),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(O,"center",$.center),gt.setValue(O,"modelViewMatrix",$.modelViewMatrix),gt.setValue(O,"normalMatrix",$.normalMatrix),gt.setValue(O,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let Pt=q.uniformsGroups;for(let Vt=0,si=Pt.length;Vt<si;Vt++){let Wu=Pt[Vt];fe.update(Wu,en),fe.bind(Wu,en)}}return en}function qm(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function $m(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,k,te){let q=Oe.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Oe.get(R.texture).__webglTexture=k,Oe.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:te,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){let te=Oe.get(R);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,te=0){J=R,Y=k,N=te;let q=null,$=!1,Be=!1;if(R){let Fe=Oe.get(R);if(Fe.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(O.FRAMEBUFFER,Fe.__webglFramebuffer),G.copy(R.viewport),ge.copy(R.scissor),ve=R.scissorTest,ae.viewport(G),ae.scissor(ge),ae.setScissorTest(ve),z=-1;return}else if(Fe.__webglFramebuffer===void 0)ke.setupRenderTarget(R);else if(Fe.__hasExternalTextures)ke.rebindTextures(R,Oe.get(R.texture).__webglTexture,Oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ot=R.depthTexture;if(Fe.__boundDepthTexture!==ot){if(ot!==null&&Oe.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(R)}}let Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Be=!0);let je=Oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[k])?q=je[k][te]:q=je[k],$=!0):R.samples>0&&ke.useMultisampledRTT(R)===!1?q=Oe.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?q=je[te]:q=je,G.copy(R.viewport),ge.copy(R.scissor),ve=R.scissorTest}else G.copy(we).multiplyScalar(j).floor(),ge.copy(Ke).multiplyScalar(j).floor(),ve=Ye;if(te!==0&&(q=V),ae.bindFramebuffer(O.FRAMEBUFFER,q)&&ae.drawBuffers(R,q),ae.viewport(G),ae.scissor(ge),ae.setScissorTest(ve),$){let Fe=Oe.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,te)}else if(Be){let Fe=k;for(let Ve=0;Ve<R.textures.length;Ve++){let je=Oe.get(R.textures[Ve]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ve,je.__webglTexture,te,Fe)}}else if(R!==null&&te!==0){let Fe=Oe.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fe.__webglTexture,te)}z=-1};function Gu(R){let k=Oe.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=We.textureFormatReadable(R.format),k.__typeReadable=We.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,te,q,$,Be,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ve=Ve[Xe],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){ae.bindFramebuffer(O.FRAMEBUFFER,Ve);try{let je=R.textures[Fe],ot=je.format,ut=je.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Fe);let qe=Gu(je);if(qe.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-q&&te>=0&&te<=R.height-$&&O.readPixels(k,te,q,$,Ae.convert(ot),Ae.convert(ut),Be)}finally{let je=J!==null?Oe.get(J).__webglFramebuffer:null;ae.bindFramebuffer(O.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,k,te,q,$,Be,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ve=Ve[Xe],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if(k>=0&&k<=R.width-q&&te>=0&&te<=R.height-$){ae.bindFramebuffer(O.FRAMEBUFFER,Ve);let je=R.textures[Fe],ot=je.format,ut=je.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Fe);let qe=Gu(je);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.bufferData(O.PIXEL_PACK_BUFFER,Be.byteLength,O.STREAM_READ),O.readPixels(k,te,q,$,Ae.convert(ot),Ae.convert(ut),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ut=J!==null?Oe.get(J).__webglFramebuffer:null;ae.bindFramebuffer(O.FRAMEBUFFER,Ut);let wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await nf(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(dt),O.deleteSync(wt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,te=0){let q=Math.pow(2,-te),$=Math.floor(R.image.width*q),Be=Math.floor(R.image.height*q),Xe=k!==null?k.x:0,Fe=k!==null?k.y:0;ke.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,Xe,Fe,$,Be),ae.unbindTexture()},this.copyTextureToTexture=function(R,k,te=null,q=null,$=0,Be=0){let Xe,Fe,Ve,je,ot,ut,qe,dt,Ut,wt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(te!==null)Xe=te.max.x-te.min.x,Fe=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,je=te.min.x,ot=te.min.y,ut=te.isBox3?te.min.z:0;else{let gt=Math.pow(2,-$);Xe=Math.floor(wt.width*gt),Fe=Math.floor(wt.height*gt),R.isDataArrayTexture?Ve=wt.depth:R.isData3DTexture?Ve=Math.floor(wt.depth*gt):Ve=1,je=0,ot=0,ut=0}q!==null?(qe=q.x,dt=q.y,Ut=q.z):(qe=0,dt=0,Ut=0);let St=Ae.convert(k.format),Qt=Ae.convert(k.type),$e;k.isData3DTexture?(ke.setTexture3D(k,0),$e=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ke.setTexture2DArray(k,0),$e=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(k,0),$e=O.TEXTURE_2D),ae.activeTexture(O.TEXTURE0),ae.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),ae.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ae.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let ln=ae.getParameter(O.UNPACK_ROW_LENGTH),_t=ae.getParameter(O.UNPACK_IMAGE_HEIGHT),ts=ae.getParameter(O.UNPACK_SKIP_PIXELS),en=ae.getParameter(O.UNPACK_SKIP_ROWS),Bo=ae.getParameter(O.UNPACK_SKIP_IMAGES);ae.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),ae.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),ae.pixelStorei(O.UNPACK_SKIP_PIXELS,je),ae.pixelStorei(O.UNPACK_SKIP_ROWS,ot),ae.pixelStorei(O.UNPACK_SKIP_IMAGES,ut);let Ei=R.isDataArrayTexture||R.isData3DTexture,ns=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){let gt=Oe.get(R),qt=Oe.get(k),Un=Oe.get(gt.__renderTarget),Pt=Oe.get(qt.__renderTarget);ae.bindFramebuffer(O.READ_FRAMEBUFFER,Un.__webglFramebuffer),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Vt=0;Vt<Ve;Vt++)Ei&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(R).__webglTexture,$,ut+Vt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(k).__webglTexture,Be,Ut+Vt)),O.blitFramebuffer(je,ot,je+Xe,ot+Fe,qe,dt,qe+Xe,dt+Fe,O.DEPTH_BUFFER_BIT,O.NEAREST);ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Oe.has(R)){let gt=Oe.get(R),qt=Oe.get(k);ae.bindFramebuffer(O.READ_FRAMEBUFFER,I),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let Un=0;Un<Ve;Un++)Ei?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,$,ut+Un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,$),ns?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.__webglTexture,Be,Ut+Un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qt.__webglTexture,Be),$!==0?O.blitFramebuffer(je,ot,je+Xe,ot+Fe,qe,dt,qe+Xe,dt+Fe,O.COLOR_BUFFER_BIT,O.NEAREST):ns?O.copyTexSubImage3D($e,Be,qe,dt,Ut+Un,je,ot,Xe,Fe):O.copyTexSubImage2D($e,Be,qe,dt,je,ot,Xe,Fe);ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ns?R.isDataTexture||R.isData3DTexture?O.texSubImage3D($e,Be,qe,dt,Ut,Xe,Fe,Ve,St,Qt,wt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D($e,Be,qe,dt,Ut,Xe,Fe,Ve,St,wt.data):O.texSubImage3D($e,Be,qe,dt,Ut,Xe,Fe,Ve,St,Qt,wt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Be,qe,dt,Xe,Fe,St,Qt,wt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Be,qe,dt,wt.width,wt.height,St,wt.data):O.texSubImage2D(O.TEXTURE_2D,Be,qe,dt,Xe,Fe,St,Qt,wt);ae.pixelStorei(O.UNPACK_ROW_LENGTH,ln),ae.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),ae.pixelStorei(O.UNPACK_SKIP_PIXELS,ts),ae.pixelStorei(O.UNPACK_SKIP_ROWS,en),ae.pixelStorei(O.UNPACK_SKIP_IMAGES,Bo),Be===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&O.generateMipmap($e),ae.unbindTexture()},this.initRenderTarget=function(R){Oe.get(R).__webglFramebuffer===void 0&&ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ke.setTextureCube(R,0):R.isData3DTexture?ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ke.setTexture2DArray(R,0):ke.setTexture2D(R,0),ae.unbindTexture()},this.resetState=function(){Y=0,N=0,J=null,ae.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var He={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.18,halfLife:.07},recoil:{halfLife:.09,max:6},blendHalfLife:.07,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.12,stopTime:.08,turnRate:14,aimTurnRate:20,sprintTurnRate:3,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.12,slamSquashTime:.15,thudVolume:.5,autoSlam:1,autoAngle:25,autoDist:.15,autoMinTilt:.7,autoMinSpeed:3,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.6,spreadHip:2.5,spreadBlind:7,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.7,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.2,spreadBlind:5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:4,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,godMode:0},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.45,burstTime:1.6,rate:5,damage:7,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,reticleMinGap:6,shotVolume:.35,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:1.8,barkGap:4}};function zl({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(x){if(!(x>0)||!Number.isFinite(x))return;t&&t(x),o+=x;let m=0;for(;o>=r&&m<s;)n(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),x)}function f(x){if(c){try{l!==null&&h((x-l)/1e3)}catch(m){throw p(),m}l=x,c&&(a=requestAnimationFrame(f))}}function d(){document.visibilityState==="visible"&&(l=null)}function u(){c||(c=!0,l=null,document.addEventListener("visibilitychange",d),a=requestAnimationFrame(f))}function p(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",d)}return{advance:h,start:u,stop:p}}var Zh=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),lM={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},cM={0:"fire",2:"aim"},qf={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},$f={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},hM=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function Jh(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!hM.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function Zf(n){return lM[n]||null}function Jf(n){return cM[n]||null}function sr(){let n={};for(let e of Zh)n[e]=!1;return n}function Kf(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function uM(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=Kf(n.axes[0],n.axes[1]),[i,s]=Kf(n.axes[2],n.axes[3]),r=sr();for(let o in qf){let a=n.buttons[o];r[qf[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function dM(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of Zh)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function Hl(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:sr(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=sr();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){dM(e)}function f(S){if(Jh(S.target))return;let w=Zf(S.code);(w||S.code in $f)&&(c()&&(S.code==="Tab"||S.code==="Space")&&S.preventDefault(),r="kbm",!S.repeat&&!t.has(S.code)&&w&&s.add(w),t.add(S.code))}function d(S){t.delete(S.code)}function u(S){S.target===n&&n.focus();let w=Jf(S.button);w&&(r="kbm",i.has(S.button)||s.add(w),i.add(S.button))}function p(S){i.delete(S.button)}function x(S){l()&&(r="kbm",e.lookDX+=S.movementX||0,e.lookDY+=S.movementY||0)}function m(S){!c()||!S.deltaY||(r="kbm",s.add(S.deltaY>0?"weaponNext":"weaponPrev"),S.preventDefault())}function g(S){S.preventDefault()}function y(){l()||h()}window.addEventListener("keydown",f),window.addEventListener("keyup",d),window.addEventListener("mouseup",p),window.addEventListener("blur",h),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",y),n.addEventListener("mousedown",u),n.addEventListener("wheel",m,{passive:!1}),n.addEventListener("contextmenu",g);function b(){let S=[];try{S=navigator.getGamepads&&navigator.getGamepads()||[]}catch{S=[]}let w=null;for(let v of S)if(v&&v.connected){w=v;break}let _=uM(w);return o=_.ok?w.id:_.reason==="none"?"none":"unrecognised controller",_}function M(){let S={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:sr(),pressed:sr()};e.lookDX=0,e.lookDY=0;for(let v of t){let T=Zf(v);T&&(S.held[T]=!0);let A=$f[v];A&&(S.moveX+=A[0],S.moveY+=A[1])}for(let v of i){let T=Jf(v);T&&(S.held[T]=!0)}let w=Math.hypot(S.moveX,S.moveY);w>1&&(S.moveX/=w,S.moveY/=w);for(let v of s)S.pressed[v]=!0;s.clear();let _=b();if(_.ok){S.lookX=_.lookX,S.lookY=_.lookY;let v=_.moveX!==0||_.moveY!==0||_.lookX!==0||_.lookY!==0;for(let A of Zh)_.held[A]&&(v=!0,S.held[A]=!0,a[A]||(S.pressed[A]=!0));a=_.held,S.moveX+=_.moveX,S.moveY+=_.moveY;let T=Math.hypot(S.moveX,S.moveY);T>1&&(S.moveX/=T,S.moveY/=T),v&&(r="pad")}else a=sr();return S}return{poll:M,requestLock(){try{let S=n.requestPointerLock&&n.requestPointerLock();S&&typeof S.catch=="function"&&S.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Qf(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var fM=2e3,jf=1e4,pM=8e4;function ep({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,f){if(f-n<fM||(i+=Math.min(h,100),s++,s<60||i<1e3))return t;let d=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,d)));let u=Qf(t,d,Math.max(14,1.1*r));if(u>t){if(f<l)return t;o=f}else u<t&&(o!==null&&f-o<jf&&(a=a===0?jf:Math.min(a*2,pM),l=f+a),o=null);return t=u,t}return{sample:c,scale:()=>t}}var pe=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Kh={viewportHeight:{value:1080}};function gi(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=t.getX(l),h[1]+=t.getY(l),h[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Et(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],f=c[1],d=c[2],u=Math.hypot(h,f,d);u<1e-6&&(h=t.getX(l),f=t.getY(l),d=t.getZ(l),u=Math.hypot(h,f,d)||1),a.setXYZ(l,h/u,f/u,d/u)}return a.needsUpdate=!0,n}var mM=`
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
`,gM=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function xM({px:n=He.outlinePx,color:e=pe.ink,outlineNormal:t=!1}={}){return new sn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new tt(e)},viewportHeight:Kh.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:mM,fragmentShader:gM,side:Bt})}function _M(){}var tp=new Map;function vM(n,e,t){let i=n+"|"+new tt(e).getHexString()+"|"+t,s=tp.get(i);return s||(s=xM({px:n,color:e,outlineNormal:t}),tp.set(i,s)),s}function wn(n,{px:e=He.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=vM(e,pe.ink,t),s=new mt(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=_M,n.add(s),s}function jh(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function yM(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Vl(n,e){let t=new Ol({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=$t;let i=ep({startMs:performance.now()});function s(){let o=yM(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),Kh.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var xi={lightDir:{value:new U(...He.lightDir).normalize()},shadowTint:{value:new tt(pe.shadowTint)},bandEdge:{value:.15},shadowLift:{value:He.shadowLift}},MM=`
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
`,SM=`
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
`;function Xt({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new sn({name:"toon",uniforms:{baseColor:{value:new tt(n)},shadowMix:{value:t},rim:{value:i},lightDir:xi.lightDir,shadowTint:xi.shadowTint,bandEdge:xi.bandEdge,shadowLift:xi.shadowLift},vertexShader:MM,fragmentShader:SM,vertexColors:e})}var bM=400,wM=[-.45,.22,-1],EM=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,TM=`
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
`;function Gl({planetDir:n=wM}={}){let e=r=>new tt(r),t=new sn({name:"sky",uniforms:{deep:{value:e(pe.nebulaDeep)},hot:{value:e(pe.nebulaHot)},pink:{value:e(pe.hotPink)},lilac:{value:e(pe.lilac)},ink:{value:e(pe.ink)},planetColor:{value:e(pe.planet)},shadowTint:xi.shadowTint,shadowLift:xi.shadowLift,bandEdge:xi.bandEdge,lightDir:xi.lightDir,planetDir:{value:new U(...n).normalize()},time:{value:0}},vertexShader:EM,fragmentShader:TM,side:Bt,depthWrite:!1}),i=new mt(new Pn(bM,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function Jn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new At;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let f=n[h],d=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let d=0;d<n.length;++d){let u=n[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=np(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][d]);let p=np(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function np(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Et(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+f,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function sp(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],f=["getX","getY","getZ","getW"],d=e*.5,u=Math.log10(1/e),p=Math.pow(10,u),x=d*p;for(let g=0;g<r;g++){let y=i?i.getX(g):g,b="";for(let M=0,S=a.length;M<S;M++){let w=a[M],_=n.getAttribute(w),v=_.itemSize;for(let T=0;T<v;T++)b+=`${Math.trunc(_[f[T]](y)*p+x)},`}b in t?h.push(t[b]):(l.push(y),t[b]=o,h.push(o),o++)}let m=n.clone();for(let g in n.attributes)m.setAttribute(g,ip(n.attributes[g],l,c));for(let g in n.morphAttributes)m.morphAttributes[g]=n.morphAttributes[g].map(y=>ip(y,l,c));return m.setIndex(h),m}function ip(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function xo(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function rp(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new U),l=o.getCenter(new U),c=a.length(),h=xo(e*7919+13>>>0),f=[];for(let g=0;g<8;g++)f.push(h()*2-1);let d=Math.min(t*c,i)*.99/Math.sqrt(3),u=(g,y)=>y>1e-9?2*g/y:0,p=[a.x,a.y,a.z].map(g=>g>1e-9?2/g:0),x=new rt,m=new U;for(let g=0;g<s.count;g++){let y=u(s.getX(g)-l.x,a.x),b=u(s.getY(g)-l.y,a.y),M=u(s.getZ(g)-l.z,a.z),S=(b+1)/2,w=(f[0]*b+f[1]*y*b)/2,_=(f[2]*y+f[3]*M)/2*S,v=(f[4]*b+f[5]*M*b)/2;if(r){let T=[f[1]*b/2,(f[0]+f[1]*y)/2,0],A=[f[2]/2*S,(f[2]*y+f[3]*M)/2*.5,f[3]/2*S],C=[0,(f[4]+f[5]*M)/2,f[5]*b/2];x.set(1+d*T[0]*p[0],d*T[1]*p[1],d*T[2]*p[2],d*A[0]*p[0],1+d*A[1]*p[1],d*A[2]*p[2],d*C[0]*p[0],d*C[1]*p[1],1+d*C[2]*p[2]),x.invert().transpose(),m.set(r.getX(g),r.getY(g),r.getZ(g)).applyMatrix3(x).normalize(),r.setXYZ(g,m.x,m.y,m.z)}s.setXYZ(g,s.getX(g)+d*w,s.getY(g)+d*_,s.getZ(g)+d*v)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var Qh=null;function AM(){return Qh||(Qh=Xt({vertexColors:!0})),Qh}var tu=(n,e,t)=>new tt(n).lerp(new tt(e),t),nu=(n,e=.3)=>tu(n,"#ffffff",e),Wl=(n,e=.2)=>tu(n,pe.shadowTint,e),op=new ht,ap=new hn,lp=new fn,RM=new U,CM=new U;function Bi(n=1,e=.02,t="prop"){let i=[],s=0;function r(h,f,d={}){let u=h.index?h.toNonIndexed():h;u.deleteAttribute("uv");let p=d.wonk===void 0?e:d.wonk;p>0&&rp(u,n*131+s,p),s++;let x=u.getAttribute("normal"),m=new Float32Array(x.count*3);for(let g=0;g<x.count;g++){let y=typeof f=="function"?f(x.getX(g),x.getY(g),x.getZ(g)):f;m[g*3]=y.r,m[g*3+1]=y.g,m[g*3+2]=y.b}return u.setAttribute("color",new Et(m,3)),(d.sx||d.sy||d.sz)&&u.scale(d.sx||1,d.sy||1,d.sz||1),d.m&&u.applyMatrix4(d.m),lp.set(d.rx||0,d.ry||0,d.rz||0,"YXZ"),ap.setFromEuler(lp),op.compose(RM.set(d.x||0,d.y||0,d.z||0),ap,CM.set(1,1,1)),u.applyMatrix4(op),i.push(u),u}function o(h,f={}){let d=f.top||nu(h),u=f.side||Wl(h,.22),p=Wl(h,.4),x=new tt(h);return(m,g,y)=>g>.5?d:g<-.5?p:Math.abs(m)>.5?u:y>0?x:p}function a(h,f,d,u,p={}){return r(new Dt(h,f,d),o(u,p),p)}function l(h,f,d,u,p,x,m,g={}){return a(f-h,u-d,x-p,m,{...g,x:(h+f)/2,y:(d+u)/2,z:(p+x)/2})}function c(h=0){let f=Jn(i,!1);if(!f)throw new Error(`${t}: parts have different attributes and cannot be merged`);return h>0&&rp(f,n,h),gi(f)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function ki(n){let e=new yt,t=new mt(n,AM());return wn(t),e.add(t),e}var _i=n=>()=>new tt(n);function Xl({w:n,d:e,tile:t=1,colors:i=[pe.cream,pe.tealLight]}){let s=Bi(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,pe.lilac,{top:new tt(pe.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new Li(t,t);h.rotateX(-Math.PI/2),s.add(h,_i(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(c+.5)*t})}return ki(s.finish())}function iu({w:n,h:e,color:t=pe.cream,stripe:i=pe.hotPink,opening:s=null,seed:r=2}){let o=Bi(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,f=-.3,d=new qs;if(d.moveTo(c,f),d.lineTo(h,f),d.lineTo(h,e),d.lineTo(c,e),d.closePath(),s){let g=new ds,y=s.x-s.w/2,b=s.x+s.w/2;g.moveTo(y,s.y),g.lineTo(y,s.y+s.h),g.lineTo(b,s.y+s.h),g.lineTo(b,s.y),g.closePath(),d.holes.push(g)}let u=new jr(d,{depth:a,bevelEnabled:!1});u.translate(0,0,-l),o.add(u,o.facePaint(t),{wonk:0}),o.span(c,h,f,.28,-l,l+.04,pe.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,pe.teal);let p=.5,x=.8;return s&&s.y<x&&s.y+s.h>p?(o.span(c,s.x-s.w/2,p,x,l-.01,l+.03,i),o.span(s.x+s.w/2,h,p,x,l-.01,l+.03,i)):o.span(c,h,p,x,l-.01,l+.03,i),ki(o.finish(.006))}function PM(n,e,t,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),f=[[n]];for(let m=1;m<h.length;m++)f.push([h.slice(0,m).join(" "),h.slice(m).join(" ")]);let d=null;for(let m of f){let g=Math.max(...m.map(b=>l.measureText(b).width)),y=Math.min(r*.88*100/g,o*.8/(m.length*1.08));(!d||y>d.size)&&(d={lines:m,size:y})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${d.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let u=d.size*1.08,p=o/2-(d.lines.length-1)*u/2;d.lines.forEach((m,g)=>{let y=p+g*u;l.fillStyle=pe.ink,l.fillText(m,r/2+d.size*.05,y+d.size*.06),l.fillStyle=t,l.fillText(m,r/2,y)});let x=new zr(a);return x.colorSpace=$t,x.anisotropy=8,x}function su({text:n,w:e,h:t,bg:i=pe.hotPink,fg:s=pe.cream,tilt:r=.04,seed:o=3}){let c=Bi(o,0,"sign");c.box(e,t,.14,s,{wonk:0});let h=ki(c.finish()),f=e-.14*2,d=t-.14*2,u=new mt(new Li(f,d),new hs({map:PM(n,i,s,f/d),toneMapped:!1}));return u.name="signFace",u.position.z=.14/2+.008,h.add(u),h.rotation.z=r,h}function cp({w:n,h:e,seed:t=4}){let i=Bi(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,pe.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,pe.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,pe.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,pe.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,pe.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,pe.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,pe.cream),ki(i.finish(.006))}function _o(n,e,t,i,s,r){let o=new ps(.16,.05,8,20);n.add(o,_i(pe.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function hp({w:n,h:e,name:t,signColor:i=pe.hotPink,seed:s=5}){let r=Bi(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=tu(pe.glorpPurple,pe.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,pe.lilac);for(let g of[-1,1]){let y=g*(n/2-a/2);r.span(y-a/2,y+a/2,0,c,-o/2,o/2,pe.lilac),r.span(y-a/2-.04,y+a/2+.04,0,.3,-o/2,o/2+.04,pe.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,pe.teal);let f=n-a*2-.1;r.span(-f/2,f/2,0,.86,.02,o/2+.3,pe.hotPink),r.span(-f/2,f/2,0,.12,.02,o/2+.34,pe.lilac),r.span(-f/2-.06,f/2+.06,.86,.96,0,o/2+.42,pe.cream),_o(r,-.9,1.01,.4,.1,.4),_o(r,-.2,1.01,.5,-.1,-.3),_o(r,.6,1.01,.38,.12,.9),_o(r,1.2,1.01,.52,0,.1);let d=10,u=(n-.1)/d,p=.42;for(let g=0;g<d;g++){let y=g%2?pe.cream:i,b=-n/2+.05+(g+.5)*u;r.box(u,.08,.95,y,{x:b,y:c-.02,z:o/2+.35,rx:p,top:nu(y,.2)}),r.box(u,.22,.06,y,{x:b,y:c-.24,z:o/2+.8,rx:.1})}let x=ki(r.finish(.006)),m=su({text:t,w:n-.7,h:1.15,bg:i,fg:pe.cream,seed:s+1});return m.position.set(0,c+.7,o/2+.01),x.add(m),x}function up({w:n=2,d:e=1,h:t=.9,color:i=pe.teal,seed:s=7}={}){let r=Bi(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,pe.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,pe.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?pe.cream:pe.hotPink;r.box(a-.04,t-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,pe.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,pe.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),_o(r,.45,t+.06,.05,.1,.5);let l=ki(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function dp({w:n=1.8,seed:e=11}={}){let t=Bi(e,.02,"bench"),i=.5;t.box(n,.1,i,pe.lilac,{y:.46}),t.box(n,.42,.08,pe.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,pe.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,pe.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=ki(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function IM(n,e,t){let i=new Dt(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function fp({seed:n=21}={}){let e=Bi(n,.02,"planter"),t=xo(n);e.add(new mn(.42,.32,.55,16),_i(pe.teal),{y:.275}),e.add(new mn(.47,.44,.12,16),_i(pe.hotPink),{y:.6}),e.add(new mn(.4,.4,.04,16),_i(Wl(pe.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Wl(pe.planet,.15);for(let l=0;l<6;l++)e.add(new mn(.06-l*.004,.07-l*.004,.34,8),_i(l%2?nu(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+t()*.3,h=l%2?.95+t()*.25:1.45+t()*.25,f=new ht().makeTranslation(i,s,0).multiply(new ht().makeRotationY(c)).multiply(new ht().makeRotationZ(-h));e.add(IM(.95,.24,l%2?.22:.4),_i(l%2?pe.gel:pe.teal),{m:f,wonk:.03})}e.add(new Pn(.1,10,8),_i(pe.planet),{x:i,y:s-.05,z:.08}),e.add(new Pn(.1,10,8),_i(pe.planet),{x:i+.07,y:s-.1,z:-.07});let a=ki(e.finish());return a.userData.footprint={w:.95,d:.95},a}var eu=null;function Yl({rx:n,rz:e,opacity:t=.35}){let r=new tt(pe.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let f=1;f<=8;f++){let d=f/8,u=t*(1-d*d*(3-2*d));for(let p=0;p<28;p++){let x=p/28*Math.PI*2;o.push(Math.cos(x)*n*d,0,Math.sin(x)*e*d),a.push(r.r,r.g,r.b,u)}}let l=[];for(let f=0;f<28;f++)l.push(0,1+(f+1)%28,1+f);for(let f=1;f<8;f++){let d=1+(f-1)*28,u=1+f*28;for(let p=0;p<28;p++){let x=(p+1)%28;l.push(d+p,d+x,u+p,d+x,u+x,u+p)}}let c=new At;c.setAttribute("position",new ct(o,3)),c.setAttribute("color",new ct(a,4)),c.setIndex(l),eu||(eu=new hs({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new mt(c,eu);return h.name="blobShadow",h.position.y=.012,h}var vo=8,ql=vo/2,ru=.2;function pp(){let n=new yt;n.add(Xl({w:vo,d:vo}));let e=iu({w:vo+ru*2,h:4});e.position.set(0,0,-ql-ru/2),n.add(e);let t=1.3,i=hp({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:pe.hotPink});i.position.set(t,0,-ql+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=iu({w:vo,h:4,color:"#f1e6ff",opening:s});r.position.set(-ql-ru/2,0,0),r.rotation.y=Math.PI/2;let o=cp({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=up({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=dp({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=fp({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(f,d,u,p,x=0)=>{let m=Yl({rx:u,rz:p,opacity:.7});m.position.x=f,m.position.z=d,m.rotation.y=x,n.add(m)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(t,-ql+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function gn(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function ou(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],c=e[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let f=1.15*o,d=e[0],u=e[1],p=e[2];h>f&&(h=f,d=n[0]+a*h,u=n[1]+l*h,p=n[2]+c*h);let x=h>o?h/o:1;if(h>=o){let v=h*(o>0?t/o:.5);return mp(r,n[0]+a*v,n[1]+l*v,n[2]+c*v,d,u,p,x)}let m=Math.max(h,1e-6),g=Math.min(Math.max((m*m+t*t-i*i)/(2*m),-t),t),y=Math.sqrt(Math.max(t*t-g*g,0)),b=s[0],M=s[1],S=s[2],w=b*a+M*l+S*c;b-=a*w,M-=l*w,S-=c*w;let _=Math.hypot(b,M,S);return _<1e-6&&(Math.abs(a)<.9?(b=0,M=c,S=-l):(b=-c,M=0,S=a),_=Math.hypot(b,M,S)||1),b/=_,M/=_,S/=_,mp(r,n[0]+a*g+b*y,n[1]+l*g+M*y,n[2]+c*g+S*y,d,u,p,x)}function mp(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=e,l[1]=t,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var gp=[.65,1.2];function au({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=gp.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),c=[],h=(le,oe,Ee)=>{for(let De=0;De<t;De++){let Ge=(De+1)%t,Je=le+De,Qe=le+Ge,O=oe+De,de=oe+Ge;Ee?c.push(Je,O,Qe,Qe,O,de):c.push(Je,Qe,O,Qe,de,O)}};for(let le=0;le<e;le++)h(le*t,(le+1)*t,!1);for(let le=0;le<2;le++){let oe=le===0,Ee=le===0?0:e*t;for(let Ge=0;Ge<r;Ge++){let Je=a[le]+Ge*t;h(Ee,Je,oe),Ee=Je}let De=a[le]+r*t;for(let Ge=0;Ge<t;Ge++){let Je=Ee+Ge,Qe=Ee+(Ge+1)%t;oe?c.push(Je,De,Qe):c.push(Je,Qe,De)}}let f=new Float32Array(l*3),d=new Float32Array(l*3),u=new At,p=new Et(f,3),x=new Et(d,3);p.setUsage(tr),x.setUsage(tr),u.setAttribute("position",p),u.setAttribute("normal",x),u.setIndex(c);let m=new mt(u,Xt({color:i}));m.name="limb";let g=new Cn(new U,n*2);u.boundingSphere=g,wn(m);let y=new Float64Array(t),b=new Float64Array(t);for(let le=0;le<t;le++)y[le]=Math.cos(le/t*Math.PI*2),b[le]=Math.sin(le/t*Math.PI*2);let M=0,S=-1,w=0,_=1,v=0,T=0,A=0,C=0,L=1,V=0,I=0,H=0,Y=0,N=0,J=0,z=0,K=0,G=0,ge=0,ve=0,Z=0,xe=0,Le=0,he=0,j=0,be=0,Ze=0;function we(le,oe,Ee,De,Ge,Je,Qe,O,de,Me,We,ae,it,Oe,ke,P){for(let E=0;E<t;E++){let X=y[E]*Je+b[E]*de,me=y[E]*Qe+b[E]*Me,Q=y[E]*O+b[E]*We,ye=(le+E)*3;f[ye]=oe+X*Ge,f[ye+1]=Ee+me*Ge,f[ye+2]=De+Q*Ge,d[ye]=X*ke+ae*P,d[ye+1]=me*ke+it*P,d[ye+2]=Q*ke+Oe*P}}let Ke=!1,Ye=1,re=0,Se=0;function Re(le,oe,Ee,De=1){let Ge=n/Math.sqrt(De>1?De:1),Je=2*oe[0]-(le[0]+Ee[0])/2,Qe=2*oe[1]-(le[1]+Ee[1])/2,O=2*oe[2]-(le[2]+Ee[2])/2,de=le[0],Me=le[1],We=le[2],ae=Ee[0],it=Ee[1],Oe=Ee[2],ke=(oe[1]-Me)*(Oe-oe[2])-(oe[2]-We)*(it-oe[1]),P=(oe[2]-We)*(ae-oe[0])-(oe[0]-de)*(Oe-oe[2]),E=(oe[0]-de)*(it-oe[1])-(oe[1]-Me)*(ae-oe[0]),X=Math.hypot(ke,P,E),me=oe[0]-de,Q=oe[1]-Me,ye=oe[2]-We,Te=Math.hypot(me,Q,ye),ne=ae-oe[0],ie=it-oe[1],Ce=Oe-oe[2],D=!1;X>1e-4*Te*Math.hypot(ne,ie,Ce)&&X>1e-12?(ke/=X,P/=X,E/=X,Ke&&ke*Ye+P*re+E*Se<0&&(ke=-ke,P=-P,E=-E),D=!0):Te>1e-9&&me*ne+Q*ie+ye*Ce<0&&(Je=(de+ae)/2,Qe=(Me+it)/2,O=(We+Oe)/2);let se=(de+Je+ae)/3,ee=(Me+Qe+it)/3,Pe=(We+O+Oe)/3,Ae=Math.max(Math.hypot(de-se,Me-ee,We-Pe),Math.hypot(Je-se,Qe-ee,O-Pe),Math.hypot(ae-se,it-ee,Oe-Pe));g.center.set(se,ee,Pe),g.radius=Ae+n*1.5+.02;for(let ue=0;ue<s;ue++){let fe=ue/e,B=1-fe,W=B*B,ce=2*B*fe,Ne=fe*fe,_e=W*de+ce*Je+Ne*ae,Ie=W*Me+ce*Qe+Ne*it,et=W*We+ce*O+Ne*Oe,xt=2*B*(Je-de)+2*fe*(ae-Je),bt=2*B*(Qe-Me)+2*fe*(it-Qe),pt=2*B*(O-We)+2*fe*(Oe-O),Nn=Math.hypot(xt,bt,pt);if(Nn>1e-9?(M=xt/Nn,S=bt/Nn,w=pt/Nn):ue===0&&(M=0,S=-1,w=0),ue===0){D?(_=ke,v=P,T=E):Ke?(_=Ye,v=re,T=Se):(_=1,v=0,T=0);let an=_*M+v*S+T*w;_-=M*an,v-=S*an,T-=w*an;let Rt=Math.hypot(_,v,T);Rt<1e-6&&(Math.abs(M)<.9?(_=0,v=w,T=-S):(_=-w,v=0,T=M),Rt=Math.hypot(_,v,T)||1),_/=Rt,v/=Rt,T/=Rt,Ye=_,re=v,Se=T,Ke=!0}else{let an=_*M+v*S+T*w;_-=M*an,v-=S*an,T-=w*an;let Rt=Math.hypot(_,v,T);Rt<1e-6&&(Math.abs(M)<.9?(_=0,v=w,T=-S):(_=-w,v=0,T=M),Rt=Math.hypot(_,v,T)||1),_/=Rt,v/=Rt,T/=Rt}A=S*T-w*v,C=w*_-M*T,L=M*v-S*_,we(ue*t,_e,Ie,et,Ge,_,v,T,A,C,L,0,0,0,1,0),ue===0&&(V=M,I=S,H=w,Y=_,N=v,J=T,z=A,K=C,G=L),ue===s-1&&(ge=M,ve=S,Z=w,xe=_,Le=v,he=T,j=A,be=C,Ze=L)}for(let ue=0;ue<2;ue++){let fe=ue===0?-1:1,B=ue===0?de:ae,W=ue===0?Me:it,ce=ue===0?We:Oe,Ne=ue===0?V:ge,_e=ue===0?I:ve,Ie=ue===0?H:Z,et=ue===0?Y:xe,xt=ue===0?N:Le,bt=ue===0?J:he,pt=ue===0?z:j,Nn=ue===0?K:be,an=ue===0?G:Ze,Rt=Ne*fe,Tn=_e*fe,wi=Ie*fe;for(let ji=0;ji<r;ji++){let Qi=gp[ji],pr=Math.cos(Qi),es=Math.sin(Qi);we(a[ue]+ji*t,B+Rt*Ge*es,W+Tn*Ge*es,ce+wi*Ge*es,Ge*pr,et,xt,bt,pt,Nn,an,Rt,Tn,wi,pr,es)}let ii=(a[ue]+r*t)*3;f[ii]=B+Rt*Ge,f[ii+1]=W+Tn*Ge,f[ii+2]=ce+wi*Ge,d[ii]=Rt,d[ii+1]=Tn,d[ii+2]=wi}p.needsUpdate=!0,x.needsUpdate=!0}return{mesh:m,set:Re}}var Ms=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),LM=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),$l=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],lu=.04,DM=9;function Zl(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function NM(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+Zl(e,1))+.03*Math.sin(2.1*n+Zl(e,2)),t[1]=.04*Math.sin(1.7*n+Zl(e,3))+.02*Math.sin(2.6*n+Zl(e,4)),t}var UM=(n,e)=>Math.min(n*2,1)*Math.max(e,0),yo=16,xp=yo+1,Kn=11,zi=4,Jl=13,FM=.07,OM=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function _p({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=pe.ink,fixedSmile:h=0}={}){let f=n,d=e/2,u=[-d,d],p=.35,x=.035*f,m=f*.3,g=a==="uni",y=0,b=y+2*xp,M=b+16,S=M+2*Kn*zi,w=S+2*Kn*2,_=w+(g?6:8),v=_+Jl*2,T=[],A=de=>T.push(de,de+1,de+2,de,de+2,de+3),C=(de,Me)=>{for(let We=0;We<Me-1;We++){let ae=de+We*2;T.push(ae,ae+1,ae+2,ae+1,ae+3,ae+2)}};for(let de=0;de<2;de++){let Me=y+de*xp;for(let We=0;We<yo;We++)T.push(Me,Me+1+We,Me+1+(We+1)%yo)}for(let de=0;de<4;de++)A(b+de*4);for(let de=0;de<2;de++){let Me=M+de*Kn*zi;for(let We=0;We<Kn-1;We++)for(let ae=0;ae<zi-1;ae++){let it=Me+We*zi+ae,Oe=it+1,ke=it+zi,P=ke+1;T.push(it,Oe,ke,Oe,P,ke)}C(S+de*Kn*2,Kn)}g?T.push(w,w+1,w+2,w+1,w+3,w+2,w+2,w+3,w+4,w+3,w+5,w+4):(A(w),A(w+4)),C(_,Jl);let L=[];for(let de=0;de<2;de++){let Me=new Pn(f,18,12);Me.deleteAttribute("uv"),Me.applyMatrix4(new ht().makeScale(1,1,p).setPosition(u[de],t,i)),L.push(Me)}let V=new mt(Jn(L,!1),Xt({color:pe.eyeWhite,shadowMix:.35,rim:0}));V.name="eyes",wn(V,{px:2});let I=new Float32Array(v*3),H=new Float32Array(v*3),Y=new Float32Array(v*3),N=new tt(pe.ink),J=new tt(c);for(let de=0;de<v;de++){H[de*3+2]=1;let Me=de>=M&&de<S?J:N;Y[de*3]=Me.r,Y[de*3+1]=Me.g,Y[de*3+2]=Me.b}let z=new At,K=new Et(I,3);K.setUsage(tr),z.setAttribute("position",K),z.setAttribute("normal",new Et(H,3)),z.setAttribute("color",new Et(Y,3)),z.setIndex(T);let G=t+f*3.5,ge=s-r*1.5-f,ve=Math.max(d+2.5*f,r);z.boundingSphere=new Cn(new U(0,(G+ge)/2,i),Math.hypot(ve,(G-ge)/2,f*2));let Z=Xt({color:"#ffffff",vertexColors:!0,rim:0});Z.side=In;let xe=new mt(z,Z);xe.name="features";let Le=new yt;Le.name="face",Le.add(V,xe);let he=Ms.neutral,j=de=>{let Me=h>0?LM[de]:0;return Me>0?h*Me:-1/0},be=j("neutral"),Ze=de=>de==="mouthCurve"&&he.mouthCurve<be?be:he[de],we={};for(let de of $l)we[de]={x:Ze(de),v:0};let Ke={x:0,v:0},Ye={x:0,v:0},re=0,Se=!1,Re=0,le=[0,0],oe=0;function Ee(de,Me,We){let ae=oe*3;I[ae]=de,I[ae+1]=Me,I[ae+2]=We,oe++}function De(de,Me,We){let ae=1-(de*de+Me*Me)/(f*f);return i+f*p*Math.sqrt(ae>0?ae:0)+We}function Ge(de,Me,We,ae,it,Oe){let ke=-(ae-Me),P=We-de,E=Math.hypot(ke,P)||1;ke=ke/E*it/2,P=P/E*it/2,Ee(de+ke,Me+P,Oe),Ee(We+ke,ae+P,Oe),Ee(We-ke,ae-P,Oe),Ee(de-ke,Me-P,Oe)}let Je=f*1.03;function Qe(){let de=we,Me=de.pupilScale.x*(1-Ke.x),We=Ke.x,ae=Math.min(Math.max(de.lid.x,0),.95),it=de.browAngle.x,Oe=ae>.005,ke=Je-2*Je*ae,P=it*.6*Math.min(ae*4,1),E=f*FM*Math.min(ae*10,1);oe=y;for(let fe=0;fe<2;fe++){let B=fe===0?-1:1;NM(Re,l+fe*7.31,le);let W=f*.5*(Me>0?Me:0),ce=le[0]*f,Ne=le[1]*f;if(Oe){let Ie=ke+P*B*ce-Math.abs(P)*W-E-(Ne+W);if(Ie>0){let et=Math.min(Math.max((Ie-.1*f)/(.1*f),0),1);Ne+=Ie*(1-OM(et))}}Ee(u[fe]+ce,t+Ne,De(ce,Ne,x));for(let _e=0;_e<yo;_e++){let Ie=_e/yo*Math.PI*2,et=ce+Math.cos(Ie)*W,xt=Ne+Math.sin(Ie)*W;Ee(u[fe]+et,t+xt,De(et,xt,x))}}oe=b;for(let fe=0;fe<2;fe++){let B=f*.55*We,W=De(0,0,x),ce=f*.26*We;Ge(u[fe]-B,t-B,u[fe]+B,t+B,ce,W),Ge(u[fe]-B,t+B,u[fe]+B,t-B,ce,W)}for(let fe=0;fe<2;fe++){let B=fe===0?-1:1;for(let W=0;W<2;W++){oe=W===0?M+fe*Kn*zi:S+fe*Kn*2;for(let ce=0;ce<Kn;ce++){let Ne=(ce/(Kn-1)*2-1)*(Math.PI/2),_e=Je*Math.sin(Ne),Ie=Je*Math.cos(Ne),et=Oe?ke+P*_e:Ie;et>Ie&&(et=Ie),et<-Ie&&(et=-Ie);let xt=B*_e;if(W===0)for(let bt=0;bt<zi;bt++){let pt=Ie+(et-Ie)*(bt/(zi-1));Ee(u[fe]+xt,t+pt,De(xt,pt*.97,x*3))}else{let bt=et+(Oe?f*.02:0);bt>Ie&&(bt=Ie);let pt=et-E;pt<-Ie&&(pt=-Ie),Ee(u[fe]+xt,t+bt,De(xt,bt*.97,x*3.5)),Ee(u[fe]+xt,t+pt,De(xt,pt*.97,x*3.5))}}}}oe=w;let X=f*.9,me=t+f*(1.4+de.browY.x),Q=Math.cos(it),ye=Math.sin(it),Te=i+f*.15;if(g){let fe=d+X*Q,B=me+X*ye,W=me-ye/(Q>.3?Q:.3)*d,ce=-(W-B),Ne=fe,_e=Math.hypot(ce,Ne)||1;ce/=_e,Ne/=_e;let Ie=-(B-W),et=fe,xt=Math.hypot(Ie,et)||1;Ie/=xt,et/=xt;let bt=ce+Ie,pt=Ne+et,Nn=Math.hypot(bt,pt)||1;bt/=Nn,pt/=Nn;let an=bt*ce+pt*Ne,Rt=m/2/(an>.4?an:.4);Ee(-fe+ce*m/2,B+Ne*m/2,Te),Ee(-fe-ce*m/2,B-Ne*m/2,Te),Ee(bt*Rt,W+pt*Rt,Te),Ee(-bt*Rt,W-pt*Rt,Te),Ee(fe+Ie*m/2,B+et*m/2,Te),Ee(fe-Ie*m/2,B-et*m/2,Te)}else for(let fe=0;fe<2;fe++){let B=fe===0?-1:1;Ge(u[fe]-B*X*Q,me-X*ye,u[fe]+B*X*Q,me+X*ye,m,Te)}oe=_;let ne=de.mouthOpen.x+Ye.x*(.55+.45*Math.sin((Re+l*.37)*DM*Math.PI*2))*.8,ie=ne>0?ne<1.2?ne:1.2:0,Ce=-de.mouthCurve.x/.5,D=(Ce>1?1:Ce>0?Ce:0)*(ie<.4?ie/.4:1),se=r/2*(1-.35*(ie<1?ie:1)*(1-.7*D)),ee=UM(de.lid.x,de.mouthCurve.x),Pe=de.mouthCurve.x*se*.5*(1-.4*ee)*(1+.6*D),Ae=.55+.5*D,ue=ie*se*.9;for(let fe=0;fe<Jl;fe++){let B=fe/(Jl-1)*2-1,W=1-B*B,ce=B*se*(1-.25*ee)+ee*se*.2,Ne=s-Pe*W+ee*se*.45*B+Ke.x*m*.6*Math.sin(B*Math.PI*3);Ee(ce,Ne,o),Ee(ce,Ne-m-ue*Math.pow(W,Ae)+Pe*W*D,o)}K.needsUpdate=!0}function O(de){Re+=de;for(let Me=0;Me<$l.length;Me++)gn(we[$l[Me]],Ze($l[Me]),lu,de);gn(Ke,re,lu,de),gn(Ye,Se?1:0,lu,de),Qe()}return Qe(),{group:Le,setExpression(de){he=Object.prototype.hasOwnProperty.call(Ms,de)?Ms[de]:Ms.neutral,re=de==="dead"?1:0,be=j(Object.prototype.hasOwnProperty.call(Ms,de)?de:"neutral")},setTalking(de){Se=!!de},update:O}}var _n=Math.PI*2,Mo=["handL","handR","footL","footR"];function jn(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function vp(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[Mo[t]],s=e[Mo[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function bo(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),f=r*a-o*l,d=r*l+o*a;return i[0]=s*c+d*h,i[1]=f+e.hipsY,i[2]=-s*h+d*c,i}var BM=n=>n<0?0:n>1?1:n,rr=(n,e,t)=>{let i=BM((t-n)/(e-n));return i*i*(3-2*i)},So=(n,e,t,i,s)=>rr(e,t,n)*(1-rr(i,s,n));function Ct(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var Kl=[0,0,0];function Vi(n,e,t,i,s,r){return Kl[0]=t,Kl[1]=i,Kl[2]=s,bo(n,e,Kl,r)}var jl={sx:0,sy:0,fx:0};function En(n){return jl.sx=Math.abs(n.shoulderL[0]),jl.sy=n.shoulderL[1],jl.fx=Math.abs(n.hipL[0])+.035,jl}var or=(n,e)=>e>0?n.handL:n.handR;function cu(n,e,t,i,s){return Vi(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var hu=.55;function ic(n,e,t){let i=En(e),s=n/Mt.idle.duration,r=_n*s,o=e.hipHeight,a=So(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=hu,cu(e,t,i,t.handL,1),cu(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Ct(t.footL,i.fx,0,.015),Ct(t.footR,-i.fx,0,-.015),t}var vi=.34,uu=.25,Sp=-.33,kM=.4,zM=.37,HM=.035,nc=(uu-Sp)/vi;function yp(n,e){if(n<vi)return e[0]=0,e[1]=uu-nc*n,e;let t=(n-vi)/(1-vi),i=-nc*(1-vi),s=-.35*nc*(1-vi),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*Sp+(o-2*r+t)*i+(-2*o+3*r)*uu+(o-r)*s,e[0]=kM*Math.sin(Math.PI*Math.pow(t,.8)),e}var Yt=[0,0];function bp(n,e,t){let i=En(e),s=n/Mt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*_n*(r-(vi+.5)/2);t.hipsY=o-.06+HM*Math.cos(a),t.squash=1+.045*Math.cos(2*_n*(r-vi-.03)),t.lean=zM+.03*Math.cos(2*_n*(r-vi));let l=Math.cos(_n*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,yp(r,Yt),Ct(t.footL,i.fx*.75,Yt[0],Yt[1]),yp(r<.5?r+.5:r-.5,Yt),Ct(t.footR,-i.fx*.75,Yt[0],Yt[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;Vi(e,t,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,or(t,c))}return t}function wp(n,e,t){let i=En(e),s=_n*n/Mt.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Ct(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Ct(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Ct(t.footL,i.fx+.02,0,.15),Ct(t.footR,-i.fx-.03,0,-.13),t}var du=.35;function VM(n){return n<.06?rr(0,.06,n):Math.exp(-9*(n-.06))*(1-rr(.24,du,n))}function GM(n){if(n<.07)return rr(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(_n*e/.22)*(1-rr(.26,du,n))}function WM(n,e,t){let i=En(e),s=e.hipHeight,r=VM(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*GM(n),t.elbows=hu+(1-hu)*r;for(let o=-1;o<=1;o+=2){let a=or(t,o);cu(e,t,i,a,o);let l=a[0],c=a[1],h=a[2];Vi(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Ct(t.footL,i.fx,0,.015),Ct(t.footR,-i.fx,0,-.015),t}var Hi=[0,0,0];function XM(n,e,t){ic(n,e,t);let i=En(e),s=n/Mt.talk.duration,r=_n*s,o=So(s,.04,.17,.4,.55),a=So(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),Vi(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,Hi);for(let c=0;c<3;c++)t.handR[c]+=(Hi[c]-t.handR[c])*o;Vi(e,t,i.sx+.19,i.sy-.12-.03*l,.34,Hi);for(let c=0;c<3;c++)t.handL[c]+=(Hi[c]-t.handL[c])*a;return t}var xn=jn();function YM(n,e,t){let i=n/Mt.roll.duration,s=So(i,0,.15,.75,1),r=En(e);ic(0,e,xn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(xn.hipsY,.45),t.lean=o(xn.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(xn.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=or(t,a),c=or(xn,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?t.footL:t.footR,f=a>0?xn.footL:xn.footR;h[0]=o(f[0],a*r.fx),h[1]=o(f[1],.18),h[2]=o(f[2],-.05)}return t}function qM(n,e,t){return bp(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var $M=.25,ZM=.85,JM=.82;function Ep(n,e,t){let i=En(e),s=_n*n/Mt.coverLow.duration;return t.hipsY=$M+.006*Math.sin(s),t.lean=ZM+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=JM,t.elbows=1,Ct(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Ct(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Ct(t.footL,i.fx+.08,0,.12),Ct(t.footR,-i.fx-.08,0,.12),t}function Tp(n,e,t,i){let s=En(n),r=i/Mt[t].duration,o=Math.sin(_n*r);return e.hipsY+=.012*Math.cos(2*_n*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function KM(n,e,t){return Ep(0,e,t),Tp(e,t,"coverLowMove",n),t}function fu(n,e,t){let i=En(e),s=_n*n/Mt.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,Vi(e,t,i.sx+.14,i.sy+0,.31,t.handL),Vi(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Ct(t.footL,i.fx,0,.015),Ct(t.footR,-i.fx,0,-.015),t}function jM(n,e,t){return fu(0,e,t),Tp(e,t,"coverTallMove",n),t}function QM(n,e,t){return wp(n*(Mt.aim.duration/Mt.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function eS(n,e,t){let i=n/Mt.vault.duration,s=So(i,0,.3,.7,1),r=En(e);ic(0,e,xn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(xn.hipsY,e.hipHeight-.02),t.lean=o(xn.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(xn.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=or(t,a),c=or(xn,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?t.footL:t.footR,f=a>0?xn.footL:xn.footR;h[0]=o(f[0],a*(r.fx+.04)),h[1]=o(f[1],.55),h[2]=o(f[2],.3)}return t}var tS=.17,nS=.5,iS=-.9,sS=.82;function rS(n,e,t){let i=En(e),s=_n*n/Mt.coverBlindLow.duration;return t.hipsY=tS+.006*Math.sin(s),t.lean=nS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=iS+.03*Math.sin(2*s+1),t.squash=sS,t.elbows=1,bo(e,t,e.shoulderR,Hi),Ct(t.handR,Hi[0]-.02,Hi[1]+.44+.008*Math.sin(s+.4),Hi[2]+.12),Ct(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Ct(t.footL,i.fx+.08,0,.12),Ct(t.footR,-i.fx-.08,0,.12),t}function Mp(n,e,t,i){fu(n*(Mt.coverTall.duration/Mt.coverBlindTallL.duration),e,t);let s=En(e);return Vi(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var oS=.3,aS=1.2,Ql=[.4,.62],ec=[-.6,-.36];function tc(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function lS(n,e,t){let i=En(e),s=n/Mt.crawl.duration,r=_n*s;return t.hipsY=oS+.012*Math.cos(2*r),t.lean=aS+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,tc(s,Ql[1],Ql[0],.16,.04,Yt),Ct(t.handL,i.sx+.12,Yt[0],Yt[1]),tc(s+.5,Ql[1],Ql[0],.16,.04,Yt),Ct(t.handR,-i.sx-.12,Yt[0],Yt[1]),tc(s,ec[1],ec[0],.16,0,Yt),Ct(t.footR,-i.fx-.02,Yt[0],Yt[1]),tc(s+.5,ec[1],ec[0],.16,0,Yt),Ct(t.footL,i.fx+.02,Yt[0],Yt[1]),t}var cS=.05;function Jt(n,e,t,i=cS){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=jn())=>t(s,r,o)})}var Mt=Object.freeze({idle:Jt(2.4,!0,ic),run:Jt(.56,!0,bp,.008),aim:Jt(1.6,!0,wp),flinch:Jt(du,!1,WM),talk:Jt(2.4,!0,XM),roll:Jt(.55,!1,YM,.02),sprint:Jt(.56,!0,qM,.008),coverLow:Jt(2.4,!0,Ep),coverLowMove:Jt(.5,!0,KM),coverTall:Jt(2.4,!0,fu),coverTallMove:Jt(.5,!0,jM),coverPop:Jt(1.6,!0,QM),vault:Jt(.5,!1,eS,.02),coverBlindLow:Jt(1.6,!0,rS),coverBlindTallL:Jt(1.6,!0,(n,e,t)=>Mp(n,e,t,1)),coverBlindTallR:Jt(1.6,!0,(n,e,t)=>Mp(n,e,t,-1)),crawl:Jt(1,!0,lS)}),ar=nc/Mt.run.duration;function wo(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(Mt,n)?Mt[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||jn())}function sc(n,e,t,i=jn()){if(!(t>0))return vp(n,i);if(t>=1)return vp(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[Mo[r]],a=e[Mo[r]],l=i[Mo[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var hS=.05,yi=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Eo=["handL","handR","footL","footR"],pu=yi.length+Eo.length*3,lr=[.35,-.2,-.8],mu=[.75,-.85,-.15];function Nt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new tt(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Et(s,3)),n}var uS=new ht,Dn=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(uS.compose(new U(e,t,i),new hn().setFromEuler(new fn(s,r,o)),new U(a,l,c)));function Ss(n=20,e=14){let t=new Pn(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),sp(t)}function gu(n,e,t){let i=Ss(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function oc(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new mn(t,t,o,6,1),l=new hn().setFromUnitVectors(new U(0,1,0),new U(i/o,s/o,r/o));return a.applyMatrix4(new ht().compose(new U((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new U(1,1,1))),a}function ac(n,e){let t=Jn(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);gi(t),t.computeBoundingSphere();let i=new mt(t,Xt({color:"#ffffff",vertexColors:!0}));return i.name=e,wn(i),i}function xu(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function dS(n){let e=n.torso,t=n.colors,i=n.outfit,s=(h,f)=>{let d=new eo(h.map(([u,p])=>new Ue(u,p)),22);return d.scale(1,1,e.depth),Nt(d,f)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let f=e.shirt;for(let d=1;d<f.length;d++)if(h<=f[d][1]){let u=(h-f[d-1][1])/(f[d][1]-f[d-1][1]||1);return f[d-1][0]+(f[d][0]-f[d-1][0])*u}return 0},l=(h,f)=>{let d=a(f);return e.depth*d*Math.sqrt(Math.max(1-h*h/(d*d),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let f=Ss(14,10);Dn(f,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),f.computeVertexNormals(),r.push(Nt(f,t.shirt))}if(i.collar){let h=new ps(.1,.03,8,20);Dn(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Nt(h,t.collar))}if(i.logo){let d=new mn(.03,.03,.01,12);Dn(d,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Nt(d,t.logo))}if(i.lanyard){let f=l(0,.15)+.012;for(let p of[-1,1]){let x=[p*.075,o-.03,.085],m=[p*.05,.34,l(.05,.34)+.014],g=[p*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Nt(oc(x,m,.008),t.lanyard),Nt(oc(m,g,.008),t.lanyard))}let d=new Dt(.075,.1,.014);Dn(d,0,.15,f,-.05,0,.04);let u=new Dt(.077,.026,.016);Dn(u,0,.15+.028,f,-.05,0,.04),r.push(Nt(d,t.badge),Nt(u,t.badgeStripe))}return ac(r,"torso")}function fS(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=gu((a,l,c,h)=>xu(e,a,l,c,h),40,28);r.push(Nt(o,i.skin),Nt(pS(e,t),i.hair));for(let a of[-1,1]){let l=Ss(12,8);Dn(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(Nt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=Ss(12,8);Dn(c,0,l,mS(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(Nt(c,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new dn;l.getPoint=(x,m=new U)=>m.set(Math.cos(Math.PI*x)*(e.rx+t.thickness+.012),Math.sin(Math.PI*x)*a,0);let c=new to(l,24,.014,6,!1);Dn(c,0,0,-.03,-.12,0,0),r.push(Nt(c,i.headset));for(let x of[-1,1]){let m=new mn(.055,.06,.05,14);Dn(m,x*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Nt(m,i.headset))}let h=n.face,f=[e.rx+.035,-.04,0],d=[e.rx+.005,h.mouthY+.01,.13],u=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Nt(oc(f,d,.009),i.headset),Nt(oc(d,u,.009),i.headset));let p=Ss(10,8);Dn(p,u[0],u[1],u[2],0,0,0,.022,.02,.022),p.computeVertexNormals(),r.push(Nt(p,i.mic))}return ac(r,"headMesh")}var Gi=48,rc=12;function pS(n,e){let t=(d,u)=>.04+.17*u+.025*Math.max(u,0)*d,i=[0,0,0],s=Dl.smoothstep,r=[],o=(d,u,p)=>{let x=Math.sin(d)*Math.sin(u),m=Math.cos(d),g=Math.sin(d)*Math.cos(u);xu(n,x,m,g,i);let y=i[0]/(n.rx*n.rx),b=i[1]/(n.ry*n.ry),M=i[2]/(n.rz*n.rz),S=Math.hypot(y,b,M)||1;y/=S,b/=S,M/=S;let w=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(g+.3,0),_=e.quiff?e.lift*Math.max(g,0)*s(i[1],.12,.26)*(1-.5*x):0,v=e.back*Math.max(-g,0)*s(i[1],-.15,.1),T=p?-.01:e.thickness*(1-.55*Math.min(w,1))+_+v;r.push(i[0]+y*T,i[1]+b*T,i[2]+M*T)},a=d=>{let u=0,p=Math.PI;for(let x=0;x<40;x++){let m=(u+p)/2,g=Math.sin(m)*Math.sin(d),y=Math.sin(m)*Math.cos(d);xu(n,g,Math.cos(m),y,i),i[1]>t(g,y)?u=m:p=m}return u};o(0,0,!1);let l=[];for(let d=0;d<Gi;d++)l.push(a(d/Gi*Math.PI*2));for(let d=1;d<=rc+1;d++)for(let u=0;u<Gi;u++){let p=u/Gi*Math.PI*2,x=d>rc;o(x?l[u]+.03:l[u]*(d/rc),p,x)}let c=(d,u)=>1+(d-1)*Gi+u%Gi,h=[];for(let d=0;d<Gi;d++)h.push(0,c(1,d),c(1,d+1));for(let d=1;d<=rc;d++)for(let u=0;u<Gi;u++){let p=c(d,u),x=c(d,u+1),m=c(d+1,u),g=c(d+1,u+1);h.push(p,m,g,p,g,x)}let f=new At;return f.setAttribute("position",new ct(r,3)),f.setIndex(h),f.computeVertexNormals(),f}function mS(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function Ap(n,e){let t=n.hand.radius,i=n.colors,s=Ss(14,10);Dn(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=Ss(10,8);return Dn(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),ac([Nt(s,i.skin),Nt(r,i.skin)],e>0?"handL":"handR")}function Rp(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=gu((h,f,d,u)=>{u[0]=h*s*(d>0?1:.9),u[1]=Math.max(a*.8,t.height*.55+f*t.height*.6-Math.max(d,0)*t.height*.25),u[2]=o+d*r*.96},20,12),c=gu((h,f,d,u)=>{u[0]=h*(s+.008),u[1]=Math.min(Math.max(a*.5+f*a,0),a),u[2]=o+d*(r+.008)},20,6);return ac([Nt(l,i.shoe),Nt(c,i.sole)],e>0?"footL":"footR")}function cr(n){let e=new yt;e.name=n.name||"character";let t=new yt;t.name="body",e.add(t);let i=new yt;i.name="hips",i.rotation.order="YXZ";let s=dS(n);i.add(s);let r=new yt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=fS(n);o.position.y=n.head.centerY,r.add(o);let a=_p({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[Ap(n,1),Ap(n,-1)],c=[Rp(n,1),Rp(n,-1)],h=[0,1].map(()=>au({radius:n.armRadius,color:n.colors.skin})),f=[0,1].map(()=>au({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",f[0].mesh.name="legL",f[1].mesh.name="legR",t.add(...l,...c,h[0].mesh,h[1].mesh,f[0].mesh,f[1].mesh);let d=Yl({rx:.45,rz:.38,opacity:.55});e.add(d);let u=jn(),p=jn(),x=[];for(let G=0;G<pu;G++)x.push({x:0,v:0});let m=!1,g=hS,y=(G,ge)=>ge<yi.length?G[yi[ge]]:G[Eo[(ge-yi.length)/3|0]][(ge-yi.length)%3];function b(G,ge,ve){ge<yi.length?G[yi[ge]]=ve:G[Eo[(ge-yi.length)/3|0]][(ge-yi.length)%3]=ve}function M(G,ge){ge>=0&&(g=ge),u.hipsY=G.hipsY,u.lean=G.lean,u.twist=G.twist,u.headYaw=G.headYaw,u.headPitch=G.headPitch,u.squash=G.squash,u.elbows=G.elbows>=0?G.elbows:0;for(let ve=0;ve<4;ve++){let Z=G[Eo[ve]],xe=u[Eo[ve]];xe[0]=Z[0],xe[1]=Z[1],xe[2]=Z[2]}if(!m){m=!0;for(let ve=0;ve<pu;ve++)x[ve].x=y(u,ve),x[ve].v=0}}let S=[0,0,0],w=[0,0,0],_=[0,0,0],v=[0,0,0],T={mid:[0,0,0],end:[0,0,0],stretch:1},A=new U,C=new U,L=new U,V=new ht,I=n.armLength/2,H=n.legLength/2,Y=n.ankleHeight;function N(G,ge,ve){let Z=Math.cos(p.twist),xe=Math.sin(p.twist);v[0]=G*Z+ve*xe,v[1]=ge,v[2]=-G*xe+ve*Z}function J(){let G=p.squash>.2?p.squash:.2,ge=1/Math.sqrt(G);t.scale.set(ge,G,ge),i.position.set(0,p.hipsY,0),i.rotation.set(p.lean,p.twist,0),r.rotation.set(p.headPitch,p.headYaw,0);for(let ve=0;ve<2;ve++){let Z=ve===0?1:-1;bo(n,p,ve===0?n.shoulderL:n.shoulderR,S);let xe=p.elbows<0?0:p.elbows>1?1:p.elbows;N(Z*(lr[0]+(mu[0]-lr[0])*xe),lr[1]+(mu[1]-lr[1])*xe,lr[2]+(mu[2]-lr[2])*xe),ou(S,ve===0?p.handL:p.handR,I,I,v,T),h[ve].set(S,T.mid,T.end,T.stretch);let Le=l[ve];Le.position.set(T.end[0],T.end[1],T.end[2]),A.set(T.end[0]-T.mid[0],T.end[1]-T.mid[1],T.end[2]-T.mid[2]),A.lengthSq()<1e-10&&A.set(0,-1,0),A.normalize(),C.set(-Z*Math.cos(p.twist),0,Z*Math.sin(p.twist)),C.addScaledVector(A,-C.dot(A)),C.lengthSq()<1e-4&&C.set(0,0,1).addScaledVector(A,-A.z),C.normalize(),L.crossVectors(C,A),V.makeBasis(C,A,L),Le.quaternion.setFromRotationMatrix(V),bo(n,p,ve===0?n.hipL:n.hipR,w);let he=ve===0?p.footL:p.footR;_[0]=he[0],_[1]=he[1]+Y,_[2]=he[2],N(Z*.15,0,1),ou(w,_,H,H,v,T),f[ve].set(w,T.mid,T.end,T.stretch);let j=c[ve];j.position.set(T.end[0],T.end[1]-Y,T.end[2]),j.rotation.set(Math.min(Math.max(T.end[1]-Y,0),.3)*1.1,p.twist*.3,0)}}function z(G){if(m)for(let ge=0;ge<pu;ge++)gn(x[ge],y(u,ge),g,G),b(p,ge,x[ge].x);J(),a.update(G)}wo("idle",0,n,p),J();function K(){e.traverse(G=>{!G.isMesh||G.userData.isOutline||(G.geometry.dispose(),G!==d&&G.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:M,update:z,dispose:K,shadow:d}}var gS=.15,xS=.03,Cp=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function hr(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=Mt[t].ease,l=jn(),c=jn(),h=wo(t,0,e);sc(h,h,1,l);function f(p,{fade:x}={}){Object.prototype.hasOwnProperty.call(Mt,p)&&(p===t&&Mt[p].loop||(p==="flinch"&&t!=="flinch"&&(s=t),sc(h,h,1,l),a=d(),r=x===void 0?p==="flinch"?xS:gS:Math.max(x,0),o=0,t=p,i=0,n.face.setTalking(p==="talk")))}function d(){let p=r>0?Cp(o/r):1;return a+(Mt[t].ease-a)*p}function u(p){let x=Mt[t];if(i+=p,o+=p,x.loop)i>=x.duration&&(i-=x.duration*Math.floor(i/x.duration));else if(i>=x.duration)return f(s),u(0);wo(t,i,e,c),sc(l,c,r>0?Cp(o/r):1,h),n.setPose(h,d())}return{play:f,update:u,current:()=>t}}function lc(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function Pp(n){for(let e of Object.values(n))e&&typeof e=="object"&&Pp(e);return Object.freeze(n)}var _u=pe.glorpPurple,Kt=Pp({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:_u,collar:lc(_u,pe.ink,.25),logo:pe.gel,pants:lc(pe.planet,pe.ink,.3),skin:pe.daleSkin,hair:pe.daleHair,shoe:lc(pe.ink,_u,.3),sole:pe.cream,lanyard:pe.hotPink,badge:pe.cream,badgeStripe:pe.teal,headset:lc(pe.ink,pe.lilac,.25),mic:pe.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var _S=1.5,vS=8,yS=-.2,MS=1.3,Ip=.6,SS=Math.atan2(1.3,-4),bS=new U(-.45,.22,-1).applyEuler(new fn(-.2,.68,0)).toArray(),Lp=10,wS=.8,ES=.05,TS=["idle","run","aim","flinch","talk"],To=Object.keys(Ms),Dp=(n,e,t)=>Math.min(t,Math.max(e,n));function AS(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function RS(n,e,t=He.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Np({canvas:n,gl:e}){let t=Vl(n,e),i=t.renderer,s=Hl(n),r=document.getElementById("cr-readout"),o=new ls,a=new Zt(He.camera.fov,1,.1,100),l=Gl({planetDir:bS});o.add(l.mesh);let c=pp();o.add(c.group);let h=[];function f(j,be,Ze){let we=cr(Ze===void 0?Kt:{...Kt,face:{...Kt.face,seed:Ze}});we.root.position.set(j,0,be),we.root.rotation.y=Ip,o.add(we.root);let Ke=hr(we),Ye={rig:we,anim:Ke};return h.push(Ye),Ye}let d=f(c.spawn[0],c.spawn[2]),u=[],p=!1,x=0,m=!0,g=!1,y=.685,b=.1,M=4.6,S=!1,w=new U(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),_=[0,0,0];function v(j){if(!(!TS.includes(j)&&!Object.prototype.hasOwnProperty.call(Mt,j))){d.anim.play(j);for(let be of u)be.anim.play(p?"run":j)}}function T(j){let be=To.indexOf(j);if(!(be<0)){x=be;for(let Ze of h)Ze.rig.face.setExpression(j)}}function A(j){m=!!j,jh(o,m)}function C(j){g=!!j,d.rig.root.rotation.y=g?SS:Ip}function L(j){if(j=!!j,j!==p)if(p=j,j){let be=c.spawn[2]+2.4;for(let Ze=0;Ze<Lp;Ze++){let we=c.spawn[0]+(Ze-(Lp-1)/2)*wS,Ke=f(we,be,10+Ze);Ke.anim.play("run"),Ke.rig.face.setExpression(To[x]),u.push(Ke)}jh(o,m)}else{for(let be of u)be.rig.dispose(),h.splice(h.indexOf(be),1);u=[]}}function V(){let j=t.resize();a.aspect=j.aspect,a.updateProjectionMatrix()}V(),window.addEventListener("resize",V),n.addEventListener("mousedown",j=>{j.button===0&&(S=!0)}),window.addEventListener("mouseup",()=>{S=!1}),window.addEventListener("mousemove",j=>{S&&!s.isLocked()&&I(j.movementX||0,j.movementY||0,.006)}),n.addEventListener("wheel",j=>{M=Dp(M*Math.exp(j.deltaY*.001),_S,vS)},{passive:!0});function I(j,be,Ze){y-=j*Ze,b=Dp(b+be*Ze,yS,MS)}window.addEventListener("keydown",j=>{j.repeat||(j.code==="Digit4"?v("flinch"):j.code==="Digit5"?v("talk"):j.code==="KeyO"?A(!m):j.code==="KeyP"?L(!p):j.code==="KeyL"?s.requestLock():j.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let H=0,Y=0,N=0,J=0,z=0,K=0,G=null,ge=0;window.__cr.stats=()=>({fps:H,ms:Y,calls:z,tris:K,scale:t.scale(),characters:h.length}),window.__cr.anim=v,window.__cr.orbit=(j,be,Ze)=>{y=j,b=be,Ze&&(M=Ze)},window.__cr.expression=T,window.__cr.perf=L,window.__cr.gameCam=C,window.__cr.outlines=A;function ve(j){j.pressed.weapon1&&v("idle"),j.pressed.weapon2&&v("run"),j.pressed.weapon3&&v("aim"),j.pressed.interact&&T(To[(x+1)%To.length]),j.pressed.grenade&&C(!g)}function Z(){if(g){let j=RS([d.rig.root.position.x,d.rig.root.position.y,d.rig.root.position.z],d.rig.root.rotation.y);a.position.fromArray(j.pos),a.lookAt(j.look[0],j.look[1],j.look[2])}else AS(y,b,M,_),a.position.set(w.x+_[0],w.y+_[1],w.z+_[2]),a.lookAt(w)}let xe=j=>j.toFixed(2);function Le(){let j=G?Object.keys(G.held).filter(we=>G.held[we]).join(" "):"",be=s.padStatus(),Ze=G&&be!=="none"&&be!=="unrecognised controller"?`Gamepad: ${be}
  move ${xe(G.moveX)}, ${xe(G.moveY)}  look ${xe(G.lookX)}, ${xe(G.lookY)}
  held: ${j||"nothing"}`:`Gamepad: ${be}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${d.anim.current()} / ${To[x]}   camera: ${g?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(H)} fps   ${xe(Y)} ms   scale ${t.scale()}`,`${z} draw calls   ${K} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${G?Math.round(G.lookDX):0}, ${G?Math.round(G.lookDY):0}`,Ze].join(`
`)}let he=zl({step(){},render(j,be){let Ze=Math.min(be,ES);G=s.poll(),ve(G),s.isLocked()&&!g&&I(G.lookDX,G.lookDY,.003),g||I(G.lookX*600*Ze,G.lookY*600*Ze,.004),l.update(performance.now()/1e3),c.update(Ze);for(let we of h)we.anim.update(Ze),we.rig.update(Ze);Z(),i.render(o,a),z=i.info.render.calls,K=i.info.render.triangles,N++,J+=be,J>=1&&(H=N/J,Y=J/N*1e3,N=0,J=0),ge+=be,ge>=.1&&(ge=0,Le()),t.frameDone(be*1e3)}});Z(),i.render(o,a),z=i.info.render.calls,K=i.info.render.triangles,Le(),he.start()}function Up(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function Ot(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var vu=1e-9;function Fp(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(m=>m.max[1]>o&&m.min[1]<a),c=Math.hypot(t[0],t[2]),h=Math.max(1,Math.ceil(c/(i/2))),f=t[0]/h,d=t[2]/h,u=!1,p=0,x=0;for(let m=0;m<h;m++){let g=r[0],y=r[2];r[0]+=f,r[2]+=d;let b=!1;for(let M=0;M<5;M++){let S=null,w=vu;for(let _ of l){let v=Math.max(_.min[0],Math.min(r[0],_.max[0])),T=Math.max(_.min[2],Math.min(r[2],_.max[2])),A=r[0]-v,C=r[2]-T,L=Math.hypot(A,C),V,I,H;if(L>vu){if(L>=i)continue;V=i-L,I=A/L,H=C/L}else{let Y=[[r[0]-_.min[0],-1,0],[_.max[0]-r[0],1,0],[r[2]-_.min[2],0,-1],[_.max[2]-r[2],0,1]],N=Y[0];for(let J of Y)J[0]<N[0]&&(N=J);V=N[0]+i,I=N[1],H=N[2]}V>w&&(w=V,S=[I,H])}if(!S){b=!0;break}if(M===4)break;r[0]+=S[0]*w,r[2]+=S[1]*w,u=!0,p=S[0],x=S[1]}b||(r[0]=g,r[2]=y,u=!0)}return u||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:u,normal:[p,0,x]}}function Wi(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let f=o.min[h]-i,d=o.max[h]+i;if(Math.abs(r[h])<vu)(e[h]<f||e[h]>d)&&(c=!1);else{let u=(f-e[h])/r[h],p=(d-e[h])/r[h];if(u>p){let x=u;u=p,p=x}u>a&&(a=u),p<l&&(l=p),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function cc(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var yu=["fov","right","up","back"],Op=Math.PI*2,CS=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),zp=n=>n!=="normal"&&CS.includes(n);function Bp(n,e,t={}){let i=zp(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of yu)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function kp(n,e){let t=zp(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function Hp(n,e,t,i=0){return e?n>=t:n>=t+i}function Vp({tuning:n=He.camera,look:e=He.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={p:{x:0,v:0},y:{x:0,v:0}},o=[0,0,0],a={x:0,v:0},l=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],c={},h=[0,0,0],f=[0,0,0],d=[0,0,0],u=[0,0,0],p=[0,0,1],x={pos:u,dir:p,fov:70},m=1,g=0,y=!1;return{yaw:0,pitch:0,look(M,S,w,_,v,T,A=1){let C=T?e.aimScale:1,L=e.invertY?-1:1;this.yaw-=M*e.mouse*C,this.pitch-=S*e.mouse*C*L;let V=e.pad,I=C*A;w&&(this.yaw-=Math.sign(w)*Math.abs(w)**V.expo*V.yawRate*I*v),_&&(this.pitch-=Math.sign(_)*Math.abs(_)**V.expo*V.pitchRate*I*v*L),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(M=1){let S=n.bump;!S||!(S.amount>0)||!(M>0)||(s.x=Math.min(s.x+S.amount*M,2*S.amount))},kick(M,S=0){let w=n.recoil?n.recoil.max:0;if(!(w>0))return;let _=(v,T)=>Math.max(-w,Math.min(w,v+(Number.isFinite(T)?T:0)));r.p.x=Math.max(0,_(r.p.x,M)),r.y.x=_(r.y.x,S)},snap(M,S,w="normal",_=1){S!==void 0&&(this.yaw=S),Bp(n,w,c);for(let v of yu)t[v].x=c[v],t[v].v=0;i.x=_,i.v=0,a.x=kp(n,w),a.v=0;for(let v=0;v<3;v++)l[v].x=M[v],l[v].v=0;s.x=0,s.v=0,r.p.x=0,r.p.v=0,r.y.x=0,r.y.v=0,m=1,y=!0},update(M,{target:S,mode:w="normal",side:_=1},v){y||this.snap(S,this.yaw,w,_),M>0||(M=0),g+=M,Bp(n,w,c);for(let he of yu)gn(t[he],c[he],n.blendHalfLife,M);gn(a,kp(n,w),n.blendHalfLife,M),gn(i,_,n.sideHalfLife,M);for(let he=0;he<3;he++)gn(l[he],S[he],n.followHalfLife,M);gn(s,0,n.bump?n.bump.halfLife:0,M);let T=n.recoil?n.recoil.halfLife:0;gn(r.p,0,T,M),gn(r.y,0,T,M);let A=Math.PI/180,C=this.yaw+r.y.x*A,L=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+r.p.x*A)),V=Math.sin(C),I=Math.cos(C),H=Math.sin(L),Y=Math.cos(L),N=n.probeRadius,J=t.back.x;h[0]=l[0].x,h[1]=l[1].x+t.up.x,h[2]=l[2].x,o[0]=S[0],o[1]=S[1]+t.up.x,o[2]=S[2];let z=Wi(v,o,h,N);if(z<1)for(let he=0;he<3;he++)h[he]=o[he]+(h[he]-o[he])*z;let K=t.right.x*i.x;f[0]=h[0]-I*K,f[1]=h[1],f[2]=h[2]+V*K;let G=Wi(v,h,f,N);for(let he=0;he<3;he++)f[he]=h[he]+(f[he]-h[he])*G;p[0]=V*Y,p[1]=H,p[2]=I*Y;for(let he=0;he<3;he++)d[he]=f[he]-p[he]*J;let ge=Wi(v,f,d,N),ve=J>1e-6?Math.max(n.minBack/J,ge):1;ve>1&&(ve=1),ve<m?m=ve:m+=(ve-m)*(n.wallReturnHalfLife>0?1-Math.pow(2,-M/n.wallReturnHalfLife):1);let Z=J*m-s.x;for(let he=0;he<3;he++)u[he]=f[he]-p[he]*Z;let xe=Wi(v,h,u,N);if(xe<1)for(let he=0;he<3;he++)u[he]=h[he]+(u[he]-h[he])*xe;let Le=n.shake;if(Le&&Le.amp&&a.x>0){let he=Le.amp*(a.x>1?1:a.x),j=Math.sin(Op*Le.hz*g)*he,be=Math.sin(Op*Le.hz*1.3*g+1)*he,Ze=-I,we=V;u[0]+=Ze*j-we*p[1]*be,u[1]+=(we*p[0]-Ze*p[2])*be,u[2]+=we*j+Ze*p[1]*be}return x.fov=t.fov.x,x}}}var Wp=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Wp)),n),Xi=.3,PS=[Ot([-12,-1,-12],[12,0,12],"floor"),Ot([-12-Xi,0,-12-Xi],[12+Xi,4,-12]),Ot([-12-Xi,0,12],[12+Xi,4,12+Xi]),Ot([-12-Xi,0,-12],[-12,4,12]),Ot([12,0,-12],[12+Xi,4,12]),Ot([5,0,-9],[5.3,4,-3]),Ot([6.7,0,-9],[7,4,-3]),Ot([-11,0,-7.3],[-6,3,-7]),Ot([-6.3,0,-11],[-6,3,-7]),Ot([-4,0,-3],[-2,1,-2.4],"low"),Ot([3,0,3],[3.6,1,5],"low"),Ot([-5,0,3],[-3.8,2.2,3.6],"tall"),Ot([1,0,-6],[1.6,2.2,-4],"tall"),Ot([-9.4,0,.6],[-8.6,4,1.4],"pillar"),Ot([8.6,0,3.6],[9.4,4,4.4],"pillar"),Ot([-9,0,6.5],[-6,1,7.1],"low"),Ot([-4,0,6.5],[-1,1,7.1],"low"),Ot([6,0,6],[10,2.2,6.6],"tall"),Ot([-12,0,-1],[-10,1,-.4],"low")],Xp=[];for(let n=0;n<=12;n++)Xp.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var Zi=Wp({boxes:PS,marks:Xp,coverExclude:[],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]}),Gp={wall:pe.lilac,low:pe.teal,tall:pe.hotPink,pillar:pe.cream};function hc(n){let e=n.map(t=>{let i=new Dt(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return Jn(e,!1)}var Yi=.03,qi=.3,$i=.12,uc=2;function IS(n=Zi){let e=n.boxes.find(c=>c.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([t,0,i],[s,qi,i+Yi]),l([t,0,r-Yi],[s,qi,r]),l([t,0,i],[t+Yi,qi,r]),l([s-Yi,0,i],[s,qi,r]);for(let c=t+uc;c<s-.5;c+=uc)l([c-$i/2,qi,i],[c+$i/2,o,i+Yi]),l([c-$i/2,qi,r-Yi],[c+$i/2,o,r]);for(let c=i+uc;c<r-.5;c+=uc)l([t,qi,c-$i/2],[t+Yi,o,c+$i/2]),l([s-Yi,qi,c-$i/2],[s,o,c+$i/2]);return a}function Yp(n=Zi){let e=new yt,t=n.boxes.find(s=>s.kind==="floor");e.add(Xl({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));for(let s of Object.keys(Gp)){let r=n.boxes.filter(a=>a.kind===s);if(!r.length)continue;let o=new mt(gi(hc(r)),Xt({color:Gp[s]}));o.name=`grey-${s}`,wn(o),e.add(o)}let i=IS(n);if(i.length){let s=new mt(hc(i),Xt({color:pe.shadowTint}));s.name="grey-wall-trim",e.add(s)}if(n.marks.length){let s=new mt(hc(n.marks),Xt({color:pe.hotPink}));s.name="grey-marks",e.add(s)}if(n.ammoCrates&&n.ammoCrates.length){let s=[];for(let o of n.ammoCrates)s.push({min:[o.pos[0]-.35,0,o.pos[2]-.25],max:[o.pos[0]+.35,.4,o.pos[2]+.25]}),s.push({min:[o.pos[0]-.39,.4,o.pos[2]-.29],max:[o.pos[0]+.39,.5,o.pos[2]+.29]});let r=new mt(gi(hc(s)),Xt({color:pe.playerOrange}));r.name="grey-crate",wn(r),e.add(r)}if(n.landmark){let s=n.landmark,r=su({text:s.text,w:s.w,h:s.h});r.position.set(s.pos[0],s.pos[1],s.pos[2]),r.rotation.y=Math.PI,e.add(r)}return{group:e,boxes:n.boxes,update(s){}}}var Ji=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Mu=class extends Ji{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Su(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var LS={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Su,toHexString:Su},Ro={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},DS={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=Ro.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return Ro.toHexString(s)}},NS={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=Ro.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return Ro.toHexString(s)}},US=[LS,Ro,DS,NS];function FS(n){return US.find(e=>e.match(n))}var bu=class extends Ji{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=FS(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Su(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Ao=class extends Ji{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},wu=class extends Ji{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))},o=!1,a,l,c,h,f,d=5,u=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),f=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",x)},p=y=>{if(o){let b=y.clientX-a,M=y.clientY-l;Math.abs(M)>d?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>d&&x()}if(!o){let b=y.clientY-c;f-=b*this._step*this._arrowKeyMultiplier(y),h+f>this._max?f=this._max-h:h+f<this._min&&(f=this._min-h),this._snapClampSetValue(h+f)}c=y.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",x)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",u),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(g,y,b,M,S)=>(g-y)/(b-y)*(S-M)+M,t=g=>{let y=this.$slider.getBoundingClientRect(),b=e(g,y.left,y.right,this._min,this._max);this._snapClampSetValue(b)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",d))},f=g=>{if(o){let y=g.touches[0].clientX-a,b=g.touches[0].clientY-l;Math.abs(y)>Math.abs(b)?c(g):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d))}else g.preventDefault(),t(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d)},u=this._callOnFinishChange.bind(this),p=400,x,m=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();let b=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(u,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Eu=class extends Ji{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Tu=class extends Ji{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},OS=`.lil-gui {
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
}`;function BS(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var qp=!1,dc=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!qp&&a&&(BS(OS),qp=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new Eu(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new wu(this,e,t,i,s,r);case"boolean":return new Mu(this,e,t);case"string":return new Tu(this,e,t);case"function":return new Ao(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new bu(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ao||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ao)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var F=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function $p(n){let e=(t,i,s,r)=>F(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Co=Object.freeze([F("move.jog",1,10,.1),F("move.aimWalk",.5,6,.1),F("move.sprint",2,14,.1),F("move.accelTime",.01,.6,.01),F("move.stopTime",.01,.6,.01),F("move.turnRate",1,40,.5),F("move.aimTurnRate",1,40,.5),F("move.sprintTurnRate",.2,20,.1),F("move.rollDistance",1,12,.1),F("move.rollTime",.2,1.5,.01),F("move.rollEase",1,4,.05),F("move.rollBuffer",0,.5,.01),F("move.tapMax",.05,.5,.01),F("move.stickSprintMin",0,1,.05),F("move.faceMinSpeed",0,2,.05),F("move.sprintHeadingMinSpeed",0,3,.05),F("move.runClipMinSpeed",0,2,.05),F("move.runRateMin",.1,2,.05),F("move.runRateMax",.5,4,.05),F("move.sprintRateMin",.1,2,.05),F("move.sprintRateMax",.5,4,.05),F("move.crawlSpeed",.2,4,.05),F("move.crawlTurnRate",.5,20,.5),F("camera.fov",40,110,1),F("camera.right",-1.5,1.5,.01),F("camera.up",.5,3,.01),F("camera.back",.5,6,.05),F("camera.aim.fov",20,90,1),F("camera.aim.back",.3,5,.05),F("camera.sprint.fov",50,120,1),F("camera.sprint.up",.3,3,.01),F("camera.sprint.back",.5,6,.05),F("camera.sprint.shakeWeight",0,3,.05),F("camera.coverLow.fov",50,120,1),F("camera.coverLow.right",-1.5,1.5,.01),F("camera.coverLow.up",.3,3,.01),F("camera.coverLow.back",.5,6,.05),F("camera.coverTall.fov",50,120,1),F("camera.coverTall.right",-1.5,1.5,.01),F("camera.coverTall.up",.3,3,.01),F("camera.coverTall.back",.5,6,.05),F("camera.downed.fov",40,120,1),F("camera.downed.up",.2,3,.01),F("camera.downed.back",.5,6,.05),F("camera.bump.amount",0,.6,.01),F("camera.bump.halfLife",.01,.3,.005),F("camera.blendHalfLife",0,.5,.005),F("camera.followHalfLife",0,.5,.005),F("camera.sideHalfLife",0,.6,.005),F("camera.headHideDist",0,2,.05),F("camera.headHideMargin",0,1,.01),F("camera.shake.amp",0,.15,.001),F("camera.shake.hz",1,30,.5),F("camera.probeRadius",.05,.6,.01),F("camera.minBack",0,2,.01),F("camera.wallReturnHalfLife",0,1,.01),F("camera.pitchMin",-1.5,0,.01),F("camera.pitchMax",0,1.5,.01),F("look.mouse",5e-4,.008,1e-4),F("look.pad.yawRate",.5,10,.1),F("look.pad.pitchRate",.5,10,.1),F("look.pad.expo",1,3,.05),F("look.aimScale",.1,1.5,.01),{path:"look.invertY"},F("cover.grabRange",0,5,.05),F("cover.grabAngle",0,180,1),F("cover.grabViewAngle",0,180,1),F("cover.grabSlack",0,5,.05),F("cover.grabMinTilt",0,1,.05),F("cover.gap",0,5,.01),F("cover.endInset",0,5,.01),F("cover.minLength",0,5,.05),F("cover.slideSpeed",0,30,.5),F("cover.slideMinTime",0,2,.01),F("cover.slideMaxTime",0,2,.01),F("cover.slideTurnRate",1,60,.5),F("cover.moveSpeed",0,30,.1),F("cover.alongDeadzone",0,1,.05),F("cover.leaveTilt",0,1,.05),F("cover.leaveAngle",0,180,1),F("cover.endLeaveTime",0,2,.01),F("cover.cornerZone",0,5,.05),F("cover.popTime",0,2,.01),F("cover.blindTime",0,2,.01),F("cover.popShift",0,5,.05),F("cover.pushAngle",0,180,1),F("cover.lowDrawBack",0,1,.01),F("cover.blindDrawBack",0,1,.01),F("cover.vaultTime",0,2,.01),F("cover.vaultMaxDepth",0,5,.05),F("cover.vaultHop",0,5,.05),F("cover.vaultExitSpeed",0,30,.1),F("cover.swapRange",0,5,.05),F("cover.swapSpeed",0,30,.5),F("cover.swapAngle",0,180,1),F("cover.swapMaxOffset",0,5,.05),F("cover.slamSquash",0,1,.01),F("cover.slamSquashTime",0,2,.01),F("cover.thudVolume",0,1,.05),F("cover.autoSlam",0,1,1),F("cover.autoAngle",0,90,1),F("cover.autoDist",0,1,.01),F("cover.autoMinTilt",0,1,.05),F("cover.autoMinSpeed",0,12,.1),F("cover.autoTime",0,1,.01),...$p("regret"),...$p("pistol"),F("combat.fireBuffer",0,.5,.01),F("combat.autoReload",0,1,1),F("combat.minRate",.01,1,.01),F("combat.minReloadTime",.01,.5,.01),F("combat.muzzleUp",.5,2,.01),F("combat.muzzleRight",-1,1,.01),F("combat.muzzleForward",0,2,.01),F("combat.blindLift",0,1,.01),F("combat.blindReach",0,1,.01),F("combat.crateRadius",.3,3,.05),F("combat.crouchHead",0,3,.01),F("combat.crouchBodyTop",0,3,.01),F("combat.shoulderDrop",0,1,.01),F("combat.pickupRadius",.2,3,.05),F("health.max",1,500,1),F("health.regenDelay",0,15,.1),F("health.regenTime",0,15,.1),F("health.downedTime",0,60,.5),F("health.standInRevive",0,1,1),F("health.reviveTime",0,10,.1),F("health.reviveHealth",0,1,.05),F("health.godMode",0,1,1),F("associate.radius",0,3,.01),F("associate.height",0,3,.01),F("associate.pointSpacing",0,3,.01),F("associate.reserveRadius",0,3,.01),F("associate.popShift",0,3,.01),F("associate.linkMax",2,15,.5),F("associate.health",1,1e3,1),F("associate.runSpeed",0,12,.1),F("associate.turnRate",.5,40,.5),F("associate.arriveDist",.01,1,.01),F("associate.stuckTime",.1,5,.1),F("associate.popTime",0,1,.01),F("associate.telegraphTime",0,2,.01),F("associate.burstTime",0,5,.1),F("associate.rate",.5,20,.5),F("associate.damage",0,50,.5),F("associate.range",5,100,1),F("associate.spread",0,15,.1),F("associate.moveSpread",0,15,.1),F("associate.aimLag",0,1,.01),F("associate.suppressChance",0,1,.05),F("associate.suppressTime",0,5,.1),F("associate.suppressRate",.5,20,.5),F("associate.suppressMiss",0,5,.1),F("associate.suppressSpread",0,20,.5),F("associate.coverWaitMin",0,5,.1),F("associate.coverWaitMax",0,8,.1),F("associate.magBursts",1,10,1),F("associate.reloadTime",0,6,.1),F("associate.flinchTime",0,2,.01),F("associate.minRange",0,20,.5),F("associate.preferRange",0,40,.5),F("associate.maxRange",1,60,.5),F("associate.relocateCheck",.05,3,.05),F("associate.relocateAfter",1,60,.5),F("associate.ammoDrop",0,200,1),F("associate.muzzleUp",.5,2,.01),F("director.tokens",0,8,1),F("director.casualTokens",0,8,1),F("director.casual",0,1,1),F("director.tokenCooldown",0,5,.1),F("director.tokenMaxHold",.5,10,.1),F("director.requestWindow",0,2,.05),F("director.pushAfter",1,30,.5),F("director.flankAfter",1,60,.5),F("director.stayRadius",.5,10,.1),F("director.flankAngle",0,180,1),F("dummy.health",1,1e3,1),F("dummy.respawnTime",0,30,.5),F("dummy.railSpeed",0,10,.1),F("camera.recoil.halfLife",.01,.5,.01),F("camera.recoil.max",0,20,.5),F("look.pad.assist",.1,1,.05),F("feedback.flashTime",.01,.3,.01),F("feedback.flashSize",.05,1.5,.05),F("feedback.tracerTime",.01,.3,.01),F("feedback.tracerWidth",.005,.2,.005),F("feedback.sparkTime",.05,1,.01),F("feedback.sparkCount",0,12,1),F("feedback.gelTime",.1,2,.05),F("feedback.gelCount",0,24,1),F("feedback.gelSpeed",0,10,.1),F("feedback.killGelCount",0,48,1),F("feedback.receiptCount",0,24,1),F("feedback.receiptTime",.2,4,.05),F("feedback.gravity",0,30,.1),F("feedback.hitMarkerTime",.02,1,.01),F("feedback.killMarkerTime",.05,1,.01),F("feedback.reloadResultTime",.1,2,.05),F("feedback.reticleMinGap",0,30,1),F("feedback.shotVolume",0,1,.05),F("feedback.hitVolume",0,1,.05),F("feedback.killVolume",0,1,.05),F("feedback.reloadVolume",0,1,.05),F("feedback.gunSquash",0,.6,.01),F("feedback.gunSquashTime",.01,.5,.01),F("feedback.gunKick",0,.3,.01),F("feedback.bodyKick",0,.3,.01),F("feedback.dummyBurstTime",.01,1,.01),F("feedback.dummyRespawnPop",0,1,.01),F("feedback.faceMaxOpacity",0,1,.05),F("feedback.edgeMaxOpacity",0,1,.05),F("feedback.hitFlashTime",.05,2,.01),F("feedback.hitKick",0,3,.05),F("feedback.hurtVolume",0,1,.05),F("feedback.enemyFlashSize",.05,1.5,.05),F("feedback.enemyTracerTime",.01,.3,.01),F("feedback.enemyTracerWidth",.005,.2,.005),F("feedback.glintSize",.02,.4,.01),F("feedback.blasterVolume",0,1,.05),F("feedback.chargeVolume",0,1,.05),F("feedback.pickupVolume",0,1,.05),F("feedback.barkTime",.2,6,.1),F("feedback.barkGap",0,12,.5)]),kS=new Map(Co.map(n=>[n.path,n])),Po=structuredClone(He);function bs(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function Ru(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function Cu(n=He,e=Po){let t={};for(let i of Co){let s=bs(n,i.path);s!==bs(e,i.path)&&(t[i.path]=s)}return t}function Zp(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=kS.get(i);if(!s)continue;let r=e[i],o=bs(Po,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Ru(n,i,r)&&t++)}return t}function Au(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>Au(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${Au(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function Jp(n=He){return["associate","camera","combat","cover","director","dummy","feedback","health","look","move","weapons"].map(e=>`  ${e}: ${Au(n[e],1)},`).join(`
`)}var Pu="cr-tuning",zS={move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Clearance Pistol",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Pad",wall:"Wall"},HS=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Kp(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&HS.has(e[1])&&t.push("wall"),t}function VS(){try{return window.localStorage}catch{return null}}function jp({storage:n=VS()}={}){let e=()=>{try{return n?n.getItem(Pu):null}catch{return null}},t=x=>{try{n&&(x===null?n.removeItem(Pu):n.setItem(Pu,x))}catch{}};try{let x=e();x&&Zp(He,JSON.parse(x))}catch{}let i=new dc({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let x=document.activeElement;x&&x!==document.body&&s.contains(x)&&x.blur&&x.blur()}s.addEventListener("click",x=>{let m=x.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(x){let m=i,g="";for(let y of x){if(g+=`.${y}`,!o.has(g)){let b=m.addFolder(zS[y]||y);b.close(),o.set(g,b)}m=o.get(g)}return m}function l(){let x=Cu();t(Object.keys(x).length?JSON.stringify(x):null)}for(let x of Co){let m=x.path.split("."),g=m[m.length-1],y=bs(He,m.slice(0,-1).join(".")),b=typeof bs(Po,x.path)=="boolean"?a(Kp(x.path)).add(y,g):a(Kp(x.path)).add(y,g,x.min,x.max,x.step);b.onChange(l),b.onFinishChange(r)}let c=null;function h(x){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=m,s.appendChild(m),s.appendChild(c)}c.value=x,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function f(x){c&&(c.hidden=!0,c.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(x):null}catch{m=null}if(!m){h(x);return}m.catch(()=>h(x))}let d={copyChanges(){r(),f(JSON.stringify(Cu(),null,2))},copyForFile(){r(),f(Jp())},resetAll(){r();for(let x of Co)Ru(He,x.path,bs(Po,x.path));t(null),i.controllersRecursive().forEach(x=>x.updateDisplay())}};i.add(d,"copyChanges").name("Copy changes"),i.add(d,"copyForFile").name("Copy for tuning.js"),i.add(d,"resetAll").name("Reset all");let u=!1;function p(x){u=x,s.style.display=x?"":"none"}return p(!1),{toggle(){p(!u)},isOpen:()=>u}}var Qp=Math.PI*2,ur=n=>n-Qp*Math.round(n/Qp),dr=(n,e)=>Math.atan2(n,e);function Io(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function Qn(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Mi(n,e,t){let i=ur(e-n);return n+Math.max(-t,Math.min(t,i))}var ei=1e-9,Iu=Math.PI/180,tm=.05,GS=1.8,WS={low:"low",tall:"tall",pillar:"tall"};function nm(n=He.cover,e=He.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var XS=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],YS=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function im(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,c)=>{let h=WS[l.kind];if(!h)return;let f=n.filter((d,u)=>u!==c&&d.kind!=="floor"&&d.max[1]>tm&&d.min[1]<GS);for(let d of XS){let u=d.axis*2,p=2-u,x=(d.sign>0?l.max[u]:l.min[u])+d.sign*o,m=l.min[p],g=l.max[p],y=g-m,b=[];for(let v of f){if(!(x>v.min[u]-o+ei&&x<v.max[u]+o-ei))continue;let T=v.min[p]-o-m,A=v.max[p]+o-m;A>ei&&T<y-ei&&b.push([Math.max(T,0),Math.min(A,y)])}b.sort((v,T)=>v[0]-T[0]);let M=[];for(let v of b){let T=M[M.length-1];T&&v[0]<=T[1]+ei?T[1]=Math.max(T[1],v[1]):M.push([v[0],v[1]])}let S=[],w=0,_=!0;for(let[v,T]of M)v>w+ei&&S.push([w,v,_,!1]),w=T,_=!1;y>w+ei&&S.push([w,y,_,!0]),S.forEach(([v,T,A,C],L)=>{let V=`${c}${d.name}#${L}`;if(r.includes(V))return;let I=m+v+(A?i:0),H=m+T-(C?i:0),Y=H-I;if(Y<s-ei)return;let N=d.axis===0?[x,I]:[I,x],J=d.axis===0?[x,H]:[H,x];a.push(YS({id:V,kind:h,boxIndex:c,a:N,b:J,length:Y,tangent:[d.tangent[0],d.tangent[1]],normal:[d.normal[0],d.normal[1]],height:l.max[1],depth:l.max[u]-l.min[u],openA:A,openB:C}))})}}),a}function Si(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function Lo(n,e,t=He.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function Do(n,e){return e<0?n.openA:n.openB}var em=.9,sm=(n,e,t,i)=>Wi(n,[e[0],em,e[1]],[t[0],em,t[1]],.9*i)===1;function No(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*Iu),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*Iu,f=null;for(let d of n){let u=(t[0]-d.a[0])*d.normal[0]+(t[2]-d.a[1])*d.normal[1],p=-(i[0]*d.normal[0]+i[1]*d.normal[1]);if(u<-(r.gap+.02)||p<a||p<=ei)continue;let x=Math.max(u,0)/p,m=(t[0]+i[0]*x-d.a[0])*d.tangent[0]+(t[2]+i[1]*x-d.a[1])*d.tangent[1];if(m<-r.grabSlack||m>d.length+r.grabSlack)continue;let g=Math.max(0,Math.min(d.length,m)),y=Si(d,g),b=y[0]-t[0],M=y[1]-t[2],S=Math.hypot(b,M);if(!(S>r.grabRange||f&&S>=f.dist)){if(S>.3){let w=(b*l+M*c)/S;if(Math.acos(Math.max(-1,Math.min(1,w)))>h)continue}sm(e,[t[0],t[2]],y,o)&&(f={edge:d,t:g,point:y,dist:S})}}return f}function rm(n,e,t,i,s,r,o){if(Lo(t,i,r)!==s||!Do(t,s))return null;let a=Si(t,i),l=Math.cos(r.swapAngle*Iu),c=null;for(let h of n){if(h===t||h.normal[0]*t.normal[0]+h.normal[1]*t.normal[1]<l)continue;let f=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),d=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),u=f<=d?0:h.length,p=Si(h,u),x=p[0]-a[0],m=p[1]-a[1],g=Math.hypot(x,m);(x*t.tangent[0]+m*t.tangent[1])*s<=0||Math.abs(x*t.normal[0]+m*t.normal[1])>r.swapMaxOffset||g>r.swapRange||c&&g>=c.dist||sm(e,a,p,o)&&(c={edge:h,t:u,point:p,dist:g})}return c}function qS(n,e,t,i){let s=e[1]+tm,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-ei)return!1}return!0}function om(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=Si(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!qS(t,l,s,r))return null;let c=t.filter((h,f)=>f!==n.boxIndex);return Wi(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var $S=["coverSlide","cover","vault","coverSwap"],am=Math.PI/180,Ht=[0,0],pc=[0,0],Ki=[0,0,0],hm=.001,ZS=2,Lu=(n,e,t)=>Math.max(e,Math.min(t,n));function Du(n,e,t){if(Io(e)>=n.coverTuning.grabMinTilt){Qn(e,Ht);let i=Math.hypot(Ht[0],Ht[1]);t[0]=Ht[0]/i,t[1]=Ht[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var um={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=No(n.coverEdges,n.boxes,n.pos,Du(n,e,pc),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},fc={};function dm(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||Io(e)<t.autoMinTilt)return null;Object.assign(fc,t),fc.grabAngle=t.autoAngle,fc.grabRange=t.autoDist,Qn(e,Ht);let i=Math.hypot(Ht[0],Ht[1]);pc[0]=Ht[0]/i,pc[1]=Ht[1]/i;let s=No(n.coverEdges,n.boxes,n.pos,pc,e.camYaw,fc,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function JS(n,e,t){let i=Lo(n,e,t);return n.kind==="low"||i!==0&&Do(n,i)}function Uo(n){return n.cover?n.cover.edge:n.scratch.edge||null}function Nu(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=Uo(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function ws(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=Lo(t,e.t,n.coverTuning)),i===0)return 1;let s=dr(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return Do(t,i)?a:-a}function lm(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(hm,Lu(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function cm(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Ki[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Ki[1]=0,Ki[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Ki,e,!1),i!==null&&(n.facing=Mi(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var KS={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;lm(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return cm(n,t,n.coverTuning.slideTurnRate,dr(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,lm(n,e.swapSpeed,0,ZS);let t=n.scratch;n.heading=dr(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+ur(n.heading-n.facing)},update(n,e,t){return cm(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=dr(-i.normal[0],-i.normal[1]),n.facing=n.facing+ur(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,hm)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=Qn(e,Ht),l=Math.hypot(Ht[0],Ht[1]),c=l>0?Ht[0]/l:0,h=l>0?Ht[1]/l:0,f=r.normal[0],d=r.normal[1],u=a>=i.leaveTilt,p=(v,T)=>(n.vel[0]=v*o.jog,n.vel[1]=0,n.vel[2]=T*o.jog,"move");if(u&&c*f+h*d>=Math.cos(i.leaveAngle*am))return p(Ht[0],Ht[1]);if(e.tap&&u){let v=Math.cos(i.pushAngle*am);if(-(c*f+h*d)>=v){let A=om(r,s.t,n.boxes,i,o.radius,o.height);if(A)return n.coverTarget={landing:A,edge:r},"vault"}let T=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(T)>=v){let A=rm(n.coverEdges,n.boxes,r,s.t,T>0?1:-1,i,o.radius);if(A)return n.coverTarget=A,"coverSwap"}}let x=Lo(r,s.t,i),m=JS(r,s.t,i),g=e.aim&&m?1:0,y=e.fire&&!e.aim&&m?1:0,b=i.popTime>0?t/i.popTime:1;s.pop=s.pop<g?Math.min(g,s.pop+b):Math.max(g,s.pop-b);let M=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<y?Math.min(y,s.blind+M):Math.max(y,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?x:0,s.blindEnd=s.blind>0&&r.kind!=="low"?x:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let S=!1;if(s.pop===0&&s.blind===0){let v=Ht[0]*r.tangent[0]+Ht[1]*r.tangent[1];if(Math.abs(v)>=i.alongDeadzone){let T=s.t+v*i.moveSpeed*t;if(s.t=Lu(T,0,r.length),T!==s.t&&Do(r,v>0?1:-1)&&(S=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return p(r.tangent[0]*Math.sign(v),r.tangent[1]*Math.sign(v))}}else s.blindEnd!==0&&y===1&&(s.t=Lu(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));S||(s.endPush=0);let w=Si(r,s.t),_=s.popEnd*i.popShift*s.pop;return Ki[0]=w[0]+r.tangent[0]*_-n.pos[0],Ki[1]=0,Ki[2]=w[1]+r.tangent[1]*_-n.pos[2],n.moveBy(Ki,t,!1),s.pop>0?n.facing=Mi(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=Mi(n.facing,dr(-f,-d),o.turnRate*t),n.heading=n.facing,null}}},fm=Object.fromEntries($S.map(n=>[n,KS[n]]));var jS=(n,e,t)=>e*(1-(1-n)**t),jt=[0,0],mc=[0,0,0];function Uu(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=t-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=t):(o[0]+=l/h*a,o[2]+=c/h*a)}function Fu(n,e,t){return e.sprint&&!e.aim&&Io(e)>=t.stickSprintMin}var QS={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(Fu(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim?i.aimWalk:i.jog;return Qn(e,jt),Uu(n,jt[0]*s,jt[1]*s,s,t,i),e.aim||e.fire?n.facing=Mi(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=Mi(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):Qn(e,jt)>.01?n.heading=Math.atan2(jt[0],jt[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return Fu(n,e,i)?(Qn(e,jt),n.heading=Mi(n.heading,Math.atan2(jt[0],jt[1]),i.sprintTurnRate*t),Uu(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],Qn(e,jt)>.01){let i=Math.hypot(jt[0],jt[1]);t.dir[0]=jt[0]/i,t.dir[1]=jt[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+ur(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=jS(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,mc[0]=s.dir[0]*a,mc[1]=0,mc[2]=s.dir[1]*a,n.moveBy(mc,t,!1),r?s.queued?"roll":Fu(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,Qn(e,jt),Uu(n,jt[0]*i.crawlSpeed,jt[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=Mi(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...fm},e1=[um,{name:"roll",when:()=>!0,state:"roll"}];function pm({boxes:n,spawn:e,tuning:t=He.move,coverTuning:i=He.cover,coverEdges:s=[],states:r=QS,contextActions:o=e1,onState:a}){let l={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,cover:null,coverTarget:null,slams:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(l.vel[0],l.vel[2])},moveBy(c,h,f=!0){let d=l.pos,u=Fp(n,d,c,t.radius,t.height);if(l.hit=!!u.hit,!f)h>0&&(l.vel[0]=(u.pos[0]-d[0])/h,l.vel[2]=(u.pos[2]-d[2])/h);else if(u.hit)if(h>0)l.vel[0]=(u.pos[0]-d[0])/h,l.vel[2]=(u.pos[2]-d[2])/h;else{let p=u.normal,x=l.vel[0]*p[0]+l.vel[1]*p[1]+l.vel[2]*p[2];x<0&&(l.vel[0]-=p[0]*x,l.vel[1]-=p[1]*x,l.vel[2]-=p[2]*x)}d[0]=u.pos[0],d[1]=u.pos[1],d[2]=u.pos[2]},go(c,h){let f=l.state;r[f].exit?.(l),l.state=c,l.stateTime=0,l.entries++,l.scratch={},r[f].selfMoves&&(l.runVel[0]=l.runVel[1]=0,l.hitTime=0),l.autoTimer=0,r[c].enter(l,h),l.onState?.(c,f,h)},down(){l.go("downed",{})},revive(){l.state==="downed"&&l.go("move",{})},place(c,h){r[l.state].exit?.(l),l.state="move",l.stateTime=0,l.firing=!1,l.cover=null,l.coverTarget=null,l.scratch={},l.pos[0]=l.prevPos[0]=c[0],l.pos[1]=l.prevPos[1]=c[1],l.pos[2]=l.prevPos[2]=c[2],l.vel[0]=l.vel[1]=l.vel[2]=0,l.runVel[0]=l.runVel[1]=0,l.hitTime=l.autoTimer=0,h!==void 0?l.facing=l.prevFacing=l.heading=h:l.prevFacing=l.facing},update(c,h){if(l.prevPos[0]=l.pos[0],l.prevPos[1]=l.pos[1],l.prevPos[2]=l.pos[2],l.prevFacing=l.facing,l.firing=!1,c.tap&&r[l.state].acceptsTap){for(let u of o)if(u.when(l,c)){l.go(u.state,c);break}}l.stateTime+=h;let f=r[l.state].update(l,c,h),d=l.state;if(!r[d].selfMoves){let u=l.vel[0],p=l.vel[2],x=Math.hypot(u,p);l.moveBy([l.vel[0]*h,0,l.vel[2]*h],h,!0),l.hit?(l.hitTime+=h,(x>=Math.hypot(l.runVel[0],l.runVel[1])||l.hitTime>2*l.coverTuning.autoTime)&&(l.runVel[0]=u,l.runVel[1]=p)):(l.runVel[0]=u,l.runVel[1]=p,l.hitTime=0)}if(d==="move"||d==="sprint"){let u=dm(l,c);if(!u)l.autoTimer=0;else if((l.autoTimer+=h)>=l.coverTuning.autoTime){l.coverTarget=u,l.go("coverSlide",c);return}}f&&l.go(f,c)}};return r[l.state].enter(l,{moveX:0,moveY:0,camYaw:0}),l}function mm({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let u=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,u,e.sampleRate);let p=t.getChannelData(0);for(let x=0;x<u;x++)p[x]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(u){if(!(u>0||u<0)||!e.createStereoPanner)return e.destination;let p=e.createStereoPanner();return p.pan.value=Math.max(-1,Math.min(1,u)),p.connect(e.destination),p}let a=()=>{if(e.state==="suspended"){let u=e.resume();u&&u.catch&&u.catch(()=>{})}};function l(u,p,x){let m=e.createGain();return m.gain.setValueAtTime(x,u),m.gain.exponentialRampToValueAtTime(.001,u+p),m.connect(s),m}function c(u,p,x,m,g,y){let b=e.createOscillator();b.type=p,b.frequency.setValueAtTime(x,g),m!==x&&b.frequency.exponentialRampToValueAtTime&&b.frequency.exponentialRampToValueAtTime(m,g+y),b.connect(u),b.start(g),b.stop(g+y)}function h(u,p,x,m,g){let y=e.createBufferSource();y.buffer=t;let b=e.createBiquadFilter();b.type=p,b.frequency.setValueAtTime(x,m),y.connect(b),b.connect(u),y.start(m),y.stop(m+g)}let f=(u,p,x)=>{let m=l(u,.03,x);h(m,"bandpass",p,u,.03)},d={rifle:(u,p)=>{let x=l(u,.09,p);h(x,"bandpass",1800,u,.09),c(x,"sine",110,55,u,.09)},pistol:(u,p)=>{let x=l(u,.12,p);h(x,"lowpass",2500,u,.12),c(x,"sine",160,60,u,.12)},dry:(u,p)=>c(l(u,.02,p),"square",1200,1200,u,.02),hit:(u,p)=>c(l(u,.04,p),"sine",1600,1600,u,.04),head:(u,p)=>{let x=l(u,.06,p);c(x,"sine",2400,2400,u,.06),c(x,"sine",3200,3200,u,.06)},kill:(u,p)=>{let x=l(u,.12,p);c(x,"sine",300,900,u,.12);let m=l(u,.2,p*.8);h(m,"lowpass",1400,u,.2)},magOut:(u,p)=>{f(u,3e3,p),f(u+.08,2200,p)},magIn:(u,p)=>{f(u,2e3,p),f(u+.08,3400,p)},perfect:(u,p)=>{let x=l(u,.35,p);c(x,"sine",1320,1320,u,.35),c(x,"sine",1980,1980,u,.35)},good:(u,p)=>c(l(u,.15,p),"sine",990,990,u,.15),jam:(u,p)=>c(l(u,.15,p),"square",90,90,u,.15),blaster:(u,p)=>{let x=l(u,.1,p);c(x,"square",900,300,u,.1),h(x,"bandpass",1500,u,.1)},charge:(u,p)=>{let x=e.createGain();x.gain.setValueAtTime(.001,u),x.gain.exponentialRampToValueAtTime(p,u+.3),x.gain.exponentialRampToValueAtTime(.001,u+.35),x.connect(s),c(x,"sine",300,900,u,.35)},hurt:(u,p)=>{let x=l(u,.15,p);h(x,"lowpass",600,u,.15),c(x,"sine",80,80,u,.15)},downed:(u,p)=>c(l(u,.6,p),"sine",400,80,u,.6),clear:(u,p)=>{[523,659,784].forEach((x,m)=>c(l(u+m*.12,.15,p),"sine",x,x,u+m*.12,.15))},pickup:(u,p)=>{c(l(u,.06,p),"sine",880,880,u,.06),c(l(u+.07,.08,p),"sine",1320,1320,u+.07,.08)},thud:(u,p)=>{let x=l(u,.12,p);h(x,"lowpass",220,u,.12),c(x,"sine",70,70,u,.12)}};return{play(u,p,x=0){let m=d[u];if(!(!m||!(p>0)||!r()))try{a(),s=o(x),m(e.currentTime,p)}catch{}},unlock(){if(r())try{a()}catch{}}}}function gm(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var gc=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Clearance Pistol"})}),xm=Object.freeze(["regret",null,"pistol"]);function _m(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function Ou(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var t1={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function vm({weapons:n=He.weapons,combat:e=He.combat,loadout:t=xm}={}){let i={},s=()=>{for(let x of t)x&&Object.assign(i[x]||(i[x]={}),{mag:Math.floor(n[x].mag),reserve:Math.floor(n[x].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(x,m)=>x[t1[m]||"spreadHip"],c=x=>x!=null&&o.reload===null&&o.switching<=0;function h(){let x=a(),m=n[x],g=i[x];return o.reload===null&&o.switching<=0&&g.mag<m.mag&&(m.infiniteReserve>0||g.reserve>0)}function f(){let x=a(),m=n[x];o.reload={id:x,t:0,press:null,end:Ou(m,0,"normal",e)},i[x].boost=!1,r.push({type:"reloadStart",id:x})}function d(){let{id:x,press:m}=o.reload,g=n[x],y=i[x],b=Math.max(0,g.mag-y.mag);if(g.infiniteReserve>0)y.mag+=b;else{let M=Math.min(b,y.reserve);y.mag+=M,y.reserve-=M}y.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:x,result:m||"normal"})}function u(x){x===o.slot||!t[x]||(o.reload=null,o.slot=x,o.switching=n[t[x]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[x]}))}function p(x){let m=t.length;for(let g=1;g<m;g++){let y=(o.slot+x*g+m*m)%m;if(t[y])return u(y)}}return o.current=a,o.canFire=c,o.spreadOf=x=>l(n[a()],x)+i[a()].bloom,o.update=function(m,g,y){r.length=0,(!(y>0)||!Number.isFinite(y))&&(y=0);let b=m.weapon;b==="next"?p(1):b==="prev"?p(-1):(b===1||b===2||b===3)&&u(b-1),o.switching-=y;for(let A of t)A&&(i[A].bloom=Math.max(0,i[A].bloom-n[A].bloomRecover*y));let M=a(),S=n[M],w=i[M];if(m.reload){if(o.reload===null)h()&&f();else if(o.reload.press===null){let A=o.reload,C=Math.max(S.reloadTime,e.minReloadTime);A.press=_m(A.t/C,S),A.end=Ou(S,A.t,A.press,e),r.push({type:"reloadPress",id:M,result:A.press})}}o.reload!==null&&(o.reload.t+=y,o.reload.t>=o.reload.end&&d()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=y,m.fire||(o.dryLatched=!1),c(g)||(o.buffer=0);let _=S.auto>0,v=_?!!m.fire:o.buffer>0,T=1/Math.max(S.rate,e.minRate);for(o.cooldown-=y,v||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-T);v&&c(g)&&o.cooldown<=0;){if(w.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&f();break}if(w.mag--,r.push({type:"shot",id:M,mult:w.boost?S.perfectDamage:1,spread:o.spreadOf(g)}),w.bloom=Math.min(S.bloomMax,w.bloom+S.bloomPerShot),o.cooldown+=T,w.mag===0&&(w.boost=!1),!_){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.addReserve=(x,m)=>{let g=i[x];!g||n[x].infiniteReserve>0||!(m>0)||(g.reserve=Math.max(g.reserve,Math.min(Math.floor(n[x].reserveMax),g.reserve+Math.floor(m))))},o.refill=()=>{for(let x of t)x&&(i[x].reserve=Math.floor(n[x].reserveMax))},o.set=(x,{mag:m,reserve:g}={})=>{i[x]&&(m!==void 0&&(i[x].mag=m),g!==void 0&&(i[x].reserve=g))},o}function ym(n){if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var fr=[0,0];function Mm(n,e,t,i=He.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,c=l.edge,h=n.tuning.radius+n.coverTuning.gap,f=c.normal;if(c.kind==="low")Si(c,l.t,fr),s[0]=fr[0]-f[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=fr[1]-f[1]*(h+i.blindReach);else{let d=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;Si(c,d<0?0:c.length,fr);let u=n.coverTuning.endInset+i.blindReach;s[0]=fr[0]+c.tangent[0]*d*u-f[0]*h,s[1]=i.muzzleUp,s[2]=fr[1]+c.tangent[1]*d*u-f[1]*h}return s}let r=i.muzzleRight*ws(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!cc(n.boxes,s,0)));l-=.25);return s}function n1(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function Bu(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let f=-l-Math.sqrt(h);return f>=0&&f<=s?f:1/0}function i1(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],f=n[2]-t[2],d=o*o+a*a+l*l,u=o*c+a*h+l*f,p=d>1e-12?Math.max(0,Math.min(1,u/d)):0,x=c-o*p,m=h-a*p,g=f-l*p;if(x*x+m*m+g*g<=s*s)return 0;let y=Math.min(Bu(n,e,t,s,r),Bu(n,e,i,s,r));if(d>1e-12){let b=o*e[0]+a*e[1]+l*e[2],M=e[0]*c+e[1]*h+e[2]*f,S=c*c+h*h+f*f,w=d-b*b;if(w>1e-12*d){let _=d*M-u*b,v=d*S-u*u-s*s*d,T=_*_-w*v;if(T>=0){let A=(-_-Math.sqrt(T))/w,C=u+A*b;A>=0&&A<=r&&C>0&&C<d&&A<y&&(y=A)}}}return y}function xc(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,c=-1,h=!1;for(let f=0;f<i.length;f++){if(f===r)continue;let d=n1(n,e,i[f],o);d<=o&&d!==1/0&&(o=d,a="world",c=f,l=null,h=!0)}for(let f of s){if(!f.alive)continue;let{head:d,body:u}=f.shapes,p=Bu(n,e,d.c,d.r,o);p<=o&&p!==1/0&&(o=p,a="head",l=f,c=-1,h=!0);let x=i1(n,e,u.a,u.b,u.r,o);x<=o&&x!==1/0&&(o=x,a="body",l=f,c=-1,h=!0)}return h?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function s1(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,c=l===0?1:0,h=n[1]*0-n[2]*c,f=n[2]*l-n[0]*0,d=n[0]*c-n[1]*l,u=Math.hypot(h,f,d);h/=u,f/=u,d/=u;let p=n[1]*d-n[2]*f,x=n[2]*h-n[0]*d,m=n[0]*f-n[1]*h,g=Math.cos(a)*o,y=Math.sin(a)*o;return i[0]=n[0]*r+h*g+p*y,i[1]=n[1]*r+f*g+x*y,i[2]=n[2]*r+d*g+m*y,i}function Sm({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random}){let c=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),h=xc(n,e,s+c,r,o,{ignoreBox:a}),f=h.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:h.point,d=[f[0]-t[0],f[1]-t[1],f[2]-t[2]],u=Math.hypot(d[0],d[1],d[2]);u>1e-9?(d[0]/=u,d[1]/=u,d[2]/=u):(d[0]=e[0],d[1]=e[1],d[2]=e[2]);let p=s1(d,i,l);return{from:t,dir:p,hit:xc(t,p,s,r,o)}}var Fo=Object.freeze({head:Object.freeze({cy:Kt.neckY+Kt.head.centerY,r:Kt.head.rx}),body:Object.freeze({ay:Kt.ankleHeight,by:Kt.neckY,r:Math.max(...Kt.torso.shirt.map(n=>n[0]))})});function bm(n){let[e,t,i]=n.pos,s=n.shapes;s.head.c[0]=e,s.head.c[1]=t+Fo.head.cy,s.head.c[2]=i,s.body.a[0]=e,s.body.a[1]=t+Fo.body.ay,s.body.a[2]=i,s.body.b[0]=e,s.body.b[1]=t+Fo.body.by,s.body.b[2]=i}function wm({id:n,pos:e,yaw:t=0,rail:i=null},s=He.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:Fo.head.r},body:{a:[0,0,0],b:[0,0,0],r:Fo.body.r}}};return bm(r),r}function r1(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function Em(n,e,t=He.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=r1(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}bm(n)}function Tm(n,e,t=He.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function Am(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function Rm(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function Cm(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var o1=new U(0,0,1);function Pm(n,e=()=>He.feedback){let t=new pn,i=(v=1)=>(Math.random()*2-1)*v;function s(v,T,A){let C=new Br(v,Xt({color:T,rim:0}),A);C.frustumCulled=!1,C.count=A,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let L=0;L<A;L++)C.setMatrixAt(L,t.matrix);return n.add(C),{mesh:C,pool:Cm(A),pos:new Float32Array(A*3),vel:new Float32Array(A*3),aux:new Float32Array(A*4)}}let r=s(new Zs(.5,0),pe.playerOrange,8),o=s(new Dt(1,1,1),pe.playerOrange,24),a=s(new Zs(.5,0),pe.gel,8),l=s(new Dt(1,1,1),pe.gel,24),c=s(new Dt(.05,.05,.05),pe.cream,48),h=s(new Qr(.5,0),pe.gel,96),f=s(new Dt(.16,.2,.012),pe.cream,48),d=new U;function u(v,T){t.updateMatrix(),v.mesh.setMatrixAt(T,t.matrix),v.mesh.instanceMatrix.needsUpdate=!0}let p=(v,T)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),u(v,T)},x=(v,T,A,C,L)=>{v.pos[T*3]=A,v.pos[T*3+1]=C,v.pos[T*3+2]=L},m=(v,T,A,C,L)=>{v.vel[T*3]=A,v.vel[T*3+1]=C,v.vel[T*3+2]=L};function g(v,T,A,C,L){let V=A[0]+i(C),I=A[1]+i(C),H=A[2]+i(C),Y=Math.hypot(V,I,H)||1;m(v,T,V/Y*L*(.5+Math.random()*.5),I/Y*L*(.5+Math.random()*.5),H/Y*L*(.5+Math.random()*.5))}let y=[];function b(v,T,A,C){y.push({k:v,life:T,shown:new Uint8Array(v.pool.ages.length),step(L){let V=e().gravity,I=v;for(let H=0;H<I.pool.ages.length;H++)if(I.pool.alive(H)){I.vel[H*3+1]-=V*L;for(let Y=0;Y<3;Y++)I.pos[H*3+Y]+=I.vel[H*3+Y]*L}},draw(L){let V=1-v.pool.ages[L]/T();t.position.set(v.pos[L*3],v.pos[L*3+1],v.pos[L*3+2]),t.scale.setScalar(A(L)*Math.max(0,V)),C?t.rotation.set(v.aux[L*4]+v.pool.ages[L]*7,v.aux[L*4+1]+v.pool.ages[L]*5,v.aux[L*4+2]):t.quaternion.identity(),u(v,L)}})}b(c,()=>e().sparkTime,()=>1,!1),b(h,()=>e().gelTime,v=>.05+h.aux[v*4+3]*.07,!1),b(f,()=>e().receiptTime,()=>1,!0);function M(v,T){y.push({k:v,shown:new Uint8Array(v.pool.ages.length),life:()=>e().flashTime,step(){},draw(A){let C=1-v.pool.ages[A]/e().flashTime;t.position.set(v.pos[A*3],v.pos[A*3+1],v.pos[A*3+2]),t.scale.setScalar(e()[T]*(.5+.5*Math.max(0,C))),t.rotation.set(v.aux[A*4],v.aux[A*4+1],v.aux[A*4+2]),u(v,A)}})}function S(v,T,A){y.push({k:v,shown:new Uint8Array(v.pool.ages.length),life:()=>e()[T],step(){},draw(C){let L=Math.max(0,1-v.pool.ages[C]/e()[T]),V=e()[A]*L,I=v.aux[C*4];t.position.set(v.pos[C*3],v.pos[C*3+1],v.pos[C*3+2]),t.quaternion.setFromUnitVectors(o1,d.set(v.vel[C*3],v.vel[C*3+1],v.vel[C*3+2])),t.scale.set(V,V,I),u(v,C)}})}M(r,"flashSize"),M(a,"enemyFlashSize"),S(o,"tracerTime","tracerWidth"),S(l,"enemyTracerTime","enemyTracerWidth");let w=(v,T,A)=>{let C=v.pool.spawn();x(v,C,T[0]+A[0]*.1,T[1]+A[1]*.1,T[2]+A[2]*.1),v.aux[C*4]=i(3),v.aux[C*4+1]=i(3),v.aux[C*4+2]=i(3)},_=(v,T,A)=>{let C=A[0]-T[0],L=A[1]-T[1],V=A[2]-T[2],I=Math.hypot(C,L,V);if(!(I>1e-6))return;let H=v.pool.spawn();x(v,H,T[0]+C/2,T[1]+L/2,T[2]+V/2),m(v,H,C/I,L/I,V/I),v.aux[H*4]=I};return{flash(v,T){w(r,v,T)},tracer(v,T){_(o,v,T)},enemyFlash(v,T){w(a,v,T)},enemyTracer(v,T){_(l,v,T)},spark(v,T){for(let A=0;A<e().sparkCount;A++){let C=c.pool.spawn();x(c,C,v[0],v[1],v[2]),g(c,C,T,.9,3)}},gel(v,T,A=e().gelCount){for(let C=0;C<A;C++){let L=h.pool.spawn();x(h,L,v[0],v[1],v[2]),g(h,L,T,1.2,e().gelSpeed),h.aux[L*4+3]=Math.random()}},receipts(v,T=e().receiptCount){for(let A=0;A<T;A++){let C=f.pool.spawn();x(f,C,v[0],v[1],v[2]),g(f,C,[0,1,0],1.5,e().gelSpeed),f.aux[C*4]=i(3),f.aux[C*4+1]=i(3),f.aux[C*4+2]=i(3)}},update(v){if(v>0)for(let T of y){T.step(v);let{pool:A}=T.k;A.update(v,T.life);for(let C=0;C<A.ages.length;C++)A.alive(C)?(T.draw(C),T.shown[C]=1):T.shown[C]&&(p(T.k,C),T.shown[C]=0)}}}}function a1(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var l1=n=>n<0?0:n>1?1:n;function Im({arsenal:n,stance:e,firing:t,spreadDeg:i,fov:s,viewportH:r,marker:o=null,reloadFlash:a=null,face:l=null,objective:c="",bark:h=null,banner:f=null,weapons:d=He.weapons,combat:u=He.combat,feedback:p=He.feedback}){let x=n.current(),m=d[x],g=n.ammo[x],y=n.reload,b={show:!1,marker:0,good:[m.goodStart,m.goodEnd],perfect:[m.perfectStart,m.perfectEnd],flash:a};if(y){let M=Math.max(m.reloadTime,u.minReloadTime);b={...b,show:!0,marker:l1(y.t/M)}}return{weapon:gc[x].name,mag:g.mag,reserve:m.infiniteReserve>0?"\u221E":g.reserve,reticle:{show:e==="aim"||!!t,gap:p.reticleMinGap+a1(i,s,r)},reload:b,hit:{show:!!o,kind:o||null},face:l,objective:c,bark:h,banner:f}}function Lm(n=document.body){let e=(N,J,z,K)=>{let G=document.createElement(N);return J&&(G.className=J),K!==void 0&&(G.textContent=K),z&&z.appendChild(G),G},t=e("div","",n);t.id="cr-hud";let i={};for(let N of["top","right","bottom","left"])i[N]=e("div",`cr-edge cr-edge-${N}`,t);let s="http://www.w3.org/2000/svg",r=(N,J,z)=>{let K=document.createElementNS(s,N);for(let G of Object.keys(J))K.setAttribute(G,J[G]);return z&&z.appendChild(K),K},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),f=e("div","cr-banner",t),d=e("div","cr-banner-title",f),u=e("div","cr-banner-hint",f),p=e("div","cr-objective",t),x=e("div","cr-bark",t),m=e("span","cr-bark-who",x),g=e("span","cr-bark-text",x),y=e("div","cr-weapon",t),b=e("div","cr-weapon-name",y),M=e("div","cr-ammo",y),S=e("div","cr-reload",y),w=e("div","cr-zone cr-zone-good",S),_=e("div","cr-zone cr-zone-perfect",S),v=e("div","cr-marker",S),T=e("div","cr-result",y),A=e("div","cr-reticle",t),C=["up","down","left","right"].map(N=>e("div",`cr-arm cr-arm-${N}`,A)),L=e("div","cr-hit",t);e("i","cr-hit-a",L),e("i","cr-hit-b",L),e("i","cr-hit-ring",L);let V={},I=(N,J,z)=>{V[N]!==J&&(V[N]=J,z(J))},H=N=>`${(N*100).toFixed(1)}%`,Y=(N,[J,z])=>{N.style.left=H(J),N.style.width=H(Math.max(0,z-J))};return{render(N){I("weapon",N.weapon,z=>{b.textContent=z}),I("ammo",`${N.mag}|${N.reserve}`,()=>{M.textContent=`${N.mag} / ${N.reserve}`}),I("reload.show",N.reload.show,z=>{S.hidden=!z}),I("good",`${N.reload.good}`,()=>Y(w,N.reload.good)),I("perfect",`${N.reload.perfect}`,()=>Y(_,N.reload.perfect)),I("marker",Math.round(N.reload.marker*500),()=>{v.style.left=H(N.reload.marker)}),I("flash",N.reload.flash,z=>{T.textContent=z?z.toUpperCase().replace("JAM","JAMMED"):"",T.dataset.kind=z||""}),I("ret.show",N.reticle.show,z=>{A.hidden=!z}),I("ret.gap",Math.round(N.reticle.gap),z=>{C.forEach(K=>K.style.setProperty("--gap",`${z}px`))});let J=N.face;if(I("face.show",!!J,z=>{o.hidden=!z}),J){I("face.op",Math.round(J.face.opacity*100),()=>{o.style.opacity=J.face.opacity.toFixed(2)}),I("face.frown",Math.round(J.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*J.face.frown).toFixed(1)} 70 72`)}),I("face.fill",Math.round(J.face.fill*50),()=>{let z=92*J.face.fill;c.setAttribute("y",(96-z).toFixed(1)),c.setAttribute("height",z.toFixed(1))});for(let z of Object.keys(i))I(`edge.${z}`,Math.round(J.edges[z]*50),()=>{i[z].style.opacity=J.edges[z].toFixed(2)})}I("banner",N.banner?`${N.banner.title}|${N.banner.hint}`:"",z=>{f.hidden=!N.banner,N.banner&&(d.textContent=N.banner.title,u.textContent=N.banner.hint)}),I("objective",N.objective||"",z=>{p.textContent=z,p.hidden=!z}),I("bark",N.bark?`${N.bark.speaker}|${N.bark.text}`:"",()=>{x.hidden=!N.bark,N.bark&&(m.textContent=N.bark.speaker,g.textContent=N.bark.text)}),I("hit",N.hit.show?N.hit.kind:"",z=>{L.hidden=!z,L.dataset.kind=z})}}}function Dm(n){let e=cr(Kt),t=hr(e),i=new yt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",c=0;s&&t.play("run",{fade:0});function h(d){i.scale.setScalar(Math.max(d,1e-4))}function f(d){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let u=n.pos[0]-o,p=n.pos[2]-a;s&&u*u+p*p>1e-8&&(r=Math.atan2(u,p)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let x=He.feedback;if(l==="burst"){c+=d;let m=x.dummyBurstTime>0?Math.min(c/x.dummyBurstTime,1):1;h(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=d;let m=x.dummyRespawnPop>0?Math.min(c/x.dummyRespawnPop,1):1;h(m),m>=1&&(l="live")}l!=="gone"&&(t.update(s?d*Math.min(Math.max(He.dummy.railSpeed/ar,.3),3):d),e.update(d))}return{group:i,update:f,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var Nm="#f3efe6";function Um(n){for(let e of Object.values(n))e&&typeof e=="object"&&Um(e);return Object.freeze(n)}var Fm=Um({...structuredClone(Kt),name:"doc-placeholder",colors:{...Kt.colors,hair:pe.teal,shirt:Nm,collar:Nm},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Kt.face,brow:"uni",fixedSmile:0}});function vc(n){return Jn(n.map(([e,t,i,s,r,o])=>new Dt(e,t,i).translate(s,r,o)),!1)}function Oo(n,e,t){let i=new mt(gi(e),Xt({color:t}));return wn(i),n.add(i),i}function c1(){let n=new yt;return n.name="rifle",Oo(n,vc([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),pe.playerOrange),Oo(n,vc([[.05,.12,.06,0,-.07,0]]),pe.ink),Oo(n,new mn(.055,.055,.03,12).translate(0,-.035,.28),pe.cream),n}function h1(){let n=new yt;return n.name="pistol",Oo(n,vc([[.045,.06,.25,0,.04,.075]]),pe.playerOrange),Oo(n,vc([[.04,.1,.05,0,-.04,0]]),pe.ink),n}var u1={regret:[0,.06,.45],pistol:[0,.04,.2]},d1=new U(0,0,1),hR=new U,_c=new U;function Om(){let n=new yt;n.name="gun";let e={regret:c1(),pistol:h1()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new U,s=new U(0,0,1),r=1/0;function o(c){if(!(!e[c]||c===t)){t=c;for(let h of Object.keys(e))e[h].visible=h===c}}function a(c,h){i.set(c[0],c[1],c[2]),s.set(h[0],h[1],h[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(d1,s),l()}function l(){let c=He.feedback,h=Math.max(c.gunSquashTime,1e-6),f=r>=0&&r<h?Math.sin(Math.PI*r/h):0,d=c.gunSquash*f;n.scale.set(1+d/2,1+d/2,1-d),n.position.copy(i).addScaledVector(s,-c.gunKick*f)}return{group:n,setWeapon:o,place:a,shot(){r=0,l()},update(c){r+=c>0?c:0,l()},tip(c=[0,0,0]){let h=u1[t];return n.updateMatrix(),_c.set(h[0],h[1],h[2]).applyMatrix4(n.matrix),c[0]=_c.x,c[1]=_c.y,c[2]=_c.z,c}}}var Mc=Math.PI*2,ni=(n,e,t)=>n<e?e:n>t?t:n,f1=n=>n-Mc*Math.round(n/Mc),zm=.001,ku=.5;function p1(n,e=n.tuning||He.move){let t=n.state,i=n.speed();if(t==="downed")return{name:"crawl",rate:ni(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:Mt.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:ni(i/ar,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:ni(i/ar,e.runRateMin,e.runRateMax)};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:Uo(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:ni(i/ar,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||He.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":ws(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:ni(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:Mt.vault.duration/Math.max((n.coverTuning||He.cover).vaultTime,zm)}:{name:"idle",rate:1}}function m1(n){let e=n.state==="cover"||n.state==="coverSlide"?Uo(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?ni(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?ni(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var g1=(n,e)=>4*e*n*(1-n),x1=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function _1(n){if(n<=.08)return 0;if(n>=.9)return Mc;let e=(n-.08)/.82;return Mc*e*e*(3-2*e)}var Bm=.95,km=.6,bi=new U,ti=[0,0,1],yc=[0,0,0];function Hm(n,e=Fm){let t=cr(e),i=hr(t),s=new yt;s.name="player";let r=new yt;r.position.y=ku,t.root.position.y=-ku,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Om();s.add(l.group);let c=1/0,h=t.root.getObjectByName("head"),f=new U,d=!0;function u(T,A,C){h.getWorldPosition(f),f.y+=t.spec.head.centerY;let L=Math.hypot(T[0]-f.x,T[1]-f.y,T[2]-f.z);return d=Hp(L,d,A,C),h.visible=d,d}let p=0,x=0,m=0,g="",y=-1,b=n.slams||0,M=1/0;function S(T,A,C){let L=n.pos,V=n.prevPos,I=n.coverTuning||He.cover,H=m1(n);p=I.popTime>0?Math.max(H,p+ni(H-p,-A/I.popTime,A/I.popTime)):H;let Y=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?ni(n.cover.blind||0,0,1):0;if(H>0||Y>0){let Z=Uo(n);x=Z.normal[0],m=Z.normal[1]}let N=p*I.lowDrawBack+Y*I.blindDrawBack;s.position.set(V[0]+(L[0]-V[0])*T+x*N,V[1]+(L[1]-V[1])*T,V[2]+(L[2]-V[2])*T+m*N),s.rotation.y=n.prevFacing+f1(n.facing-n.prevFacing)*T;let J=p1(n);(J.name!==g||n.entries!==y)&&(i.play(J.name,J.name==="roll"?{fade:.05}:void 0),g=J.name,y=n.entries),i.update(A*J.rate),t.update(A);let z=He.feedback,K=Math.max(z.gunSquashTime,1e-6);c=C&&C.shot?A:c+A;let G=c<K?z.bodyKick*Math.sin(Math.PI*c/K):0;r.rotation.x=(n.state==="roll"?_1(n.stateTime/n.tuning.rollTime):0)-G,(n.slams||0)!==b?(b=n.slams||0,M=0):M+=A;let ge=n.state==="vault"?g1(ni(n.stateTime/Math.max(I.vaultTime,zm),0,1),I.vaultHop):0,ve=x1(M,I.slamSquash,I.slamSquashTime);r.scale.set(1+ve/2,1-ve,1+ve/2),r.position.y=ku*(1-ve)+ge,w(J.name,A,C)}function w(T,A,C){if(s.updateMatrixWorld(!0),(T==="coverBlindTallL"?a.L:a.R).getWorldPosition(bi),s.worldToLocal(bi),C&&C.stance&&T==="coverBlindLow")ti[0]=0,ti[1]=Math.sin(Bm),ti[2]=Math.cos(Bm);else if(C&&C.stance&&C.dir){let V=Math.cos(s.rotation.y),I=Math.sin(s.rotation.y);ti[0]=C.dir[0]*V-C.dir[2]*I,ti[1]=C.dir[1],ti[2]=C.dir[0]*I+C.dir[2]*V}else ti[0]=0,ti[1]=-Math.sin(km),ti[2]=Math.cos(km);C&&C.weapon&&l.setWeapon(C.weapon),l.place([bi.x,bi.y,bi.z],ti),C&&C.shot&&l.shot(),l.update(A),l.group.visible=n.state!=="roll"&&n.state!=="downed"}function _(T=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(yc),bi.set(yc[0],yc[1],yc[2]).applyMatrix4(s.matrixWorld),T[0]=bi.x,T[1]=bi.y,T[2]=bi.z,T}function v(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:S,dispose:v,rig:t,anim:i,fadeHeadFor:u,gun:l,gunTip:_}}var Vm=.05;function v1({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function Gm(n){return`${n.gap}|${n.endInset}|${n.minLength}`}var y1=2e3,M1=500;function Wm({canvas:n,gl:e,params:t}){let i=Vl(n,e),s=i.renderer,r=Hl(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=jp();l.panelOpen=c.isOpen;let h=new ls,f=new Zt(He.camera.fov,1,.05,100),d=Gl();h.add(d.mesh);let u=Yp();h.add(u.group);let p=u.boxes,x=Zi.spawn,m=()=>im(p,{...nm(),exclude:Zi.coverExclude}),g=Gm(He.cover),y=[],b=0,M=!1,S=pm({boxes:p,spawn:x.pos,coverEdges:m(),onState(B,W){y.push({state:B,from:W,t:b,tapped:M,auto:B==="coverSlide"&&!M&&(W==="move"||W==="sprint")}),y.length>y1&&y.shift()}});S.place(x.pos,x.yaw);let w=Hm(S);h.add(w.group);let _=Vp(),v=Up(),T=mm({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),A=gm(),C=vm(),L=Pm(h),V=Lm(document.body),I=xo(1),H=Zi.dummies.map(B=>{let W=wm(B),ce=Dm(W);return h.add(ce.group),{dummy:W,view:ce,wasAlive:!0}}),Y=H.map(B=>B.dummy),N=[],J="-",z="-",K=null,G=null,ge=0,ve=null,Z=0,xe=1,Le=[],he={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},j=[0,0,0],be=0,Ze=[0,0,0];_.snap(x.pos,x.yaw,"normal",1);let we=null,Ke=!1,Ye=null,re=!1,Se=!1,Re=!1,le={cover:!1,fire:!1,reload:!1,weapon:null},oe={reload:!1,weapon:null,fire:!1},Ee={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1},De={weapon:null,reload:!1,fire:!1,firePressed:!1},Ge=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Je(){let B=i.resize();f.aspect=B.aspect,f.updateProjectionMatrix()}Je(),window.addEventListener("resize",Je),n.addEventListener("click",()=>r.requestLock());let Qe=()=>{v.reset(),A.reset()};window.addEventListener("blur",Qe),document.addEventListener("pointerlockchange",()=>{r.isLocked()||Qe()});let O=()=>T.unlock();window.addEventListener("pointerdown",O),window.addEventListener("keydown",O),window.addEventListener("keydown",B=>{B.repeat||Jh(B.target)||(B.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):B.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function de(B,W){S.place(B,W),_.snap(B,W,Nu(S),ws(S)),be=S.slams}let Me={pos:[0,0,0],dir:[0,0,1],fov:70},We="normal",ae=1,it=0,Oe=0,ke=0,P=0,E=0,X=0,me=0,Q=window.__cr;Q.stats=()=>({fps:it,ms:Oe,calls:E,tris:X,scale:i.scale(),characters:1}),Q.player=()=>{let B=S.cover;return{pos:S.pos.slice(),state:S.state,speed:S.speed(),facing:S.facing,entries:S.entries,cover:B?{id:B.edge.id,kind:B.edge.kind,t:B.t,length:B.edge.length,pop:B.pop,exposed:B.exposed}:null,slams:S.slams,blind:B?B.blind:0,firing:!!S.firing}},Q.gun=()=>{let B=C.current(),W=C.ammo[B],ce=C.reload,Ne=He.weapons[B];return{id:B,slot:C.slot,mag:W.mag,reserve:W.reserve,boost:W.boost,reload:ce?{u:ce.t/Math.max(Ne.reloadTime,He.combat.minReloadTime),press:ce.press}:null,switching:C.switching>0,spread:C.spreadOf(K||"hip"),stance:K}},Q.dummies=()=>Y.map(B=>({id:B.id,health:B.health,alive:B.alive,pos:B.pos.slice()})),Q.shots=()=>N.map(B=>({...B})),Q.clearShots=()=>{N.length=0},Q.setGun=(B,W)=>C.set(B,W),Q.look=(B,W)=>{_.yaw=B,_.pitch=W},Q.camera=()=>{let B=Me;return{pos:B.pos.slice(),fov:B.fov,inside:cc(p,B.pos,.1),mode:We,side:ae}},Q.transitions=()=>y.map(B=>({...B})),Q.clearTransitions=()=>{y.length=0},Q.coverTarget=()=>{let B=Ye||{moveX:we?we.moveX:0,moveY:we?we.moveY:0},W=No(S.coverEdges,p,S.pos,Du(S,{moveX:B.moveX||0,moveY:B.moveY||0,camYaw:_.yaw},[0,0]),_.yaw,He.cover,He.move.radius);return W?{id:W.edge.id,kind:W.edge.kind,dist:W.dist}:null},Q.place=B=>{let W=B==="spawn"?x:Zi.features[B];W&&de(W.pos,W.yaw)},Q.drive=B=>{if(!B){re?Se=!0:Ye=null;return}B.fire&&!(Ye&&Ye.fire)&&(oe.fire=!0),Ye=B,Se=!1,B.tap&&(re=!0),B.reload&&(oe.reload=!0),B.weapon&&(oe.weapon=B.weapon)};function ye(B){if(Ye){Ee.moveX=Ye.moveX||0,Ee.moveY=Ye.moveY||0,Ee.sprint=!!Ye.sprint,Ee.aim=!!Ye.aim,Ee.tap=re;let W=A.update(!!Ye.fire,oe.fire,!0);oe.fire=!1,Ee.fire=W.fire,De.fire=W.fire,De.firePressed=W.firePressed,De.reload=oe.reload,De.weapon=oe.weapon,oe.reload=!1,oe.weapon=null,re&&(re=!1,Se&&(Ye=null,Se=!1))}else{let W=we.held;Ee.moveX=we.moveX,Ee.moveY=we.moveY,Ee.tap=v.update(W.cover,le.cover,B,He.move.tapMax),Ee.sprint=W.sprint||v.holding(),Ee.aim=W.aim;let ce=A.update(W.fire,le.fire,!0);Ee.fire=ce.fire,De.fire=ce.fire,De.firePressed=ce.firePressed,De.reload=le.reload,De.weapon=le.weapon}return le.cover=!1,le.fire=!1,le.reload=!1,le.weapon=null,Ee.camYaw=_.yaw,M=Ee.tap,Ee}let Te=B=>B.toFixed(1);function ne(){let B=S.cover;if(B)return`cover: ${B.edge.kind} ${B.edge.id}  t ${B.t.toFixed(2)}/${B.edge.length.toFixed(2)}  pop ${B.pop.toFixed(2)}`;let W=Q.coverTarget();return W?`tap grabs: ${W.kind} ${W.dist.toFixed(1)} m`:"tap grabs: nothing"}function ie(){let B=Q.gun(),W=B.id;return`gun: ${gc[W].name} ${B.mag}/${He.weapons[W].infiniteReserve>0?"\u221E":B.reserve}  ${B.stance||"-"}  spread ${B.spread.toFixed(1)}`}function Ce(){let B=r.padStatus();o.textContent=["GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aiming to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave","Sound starts after a click or key","",`${S.state}   ${S.speed().toFixed(2)} m/s`,ne(),ie(),`dummies: ${Y.filter(W=>W.alive).length}/${Y.length}  last: ${J} ${z}`,`${Math.round(it)} fps   ${Te(Oe)} ms   scale ${i.scale()}`,`${E} draw calls   ${X} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${B}`,"` tuning panel    ?look look test    H hide panel"].join(`
`)}let D=B=>He.feedback[B];function se(B){B.type==="shot"?Ae(B):B.type==="reloadStart"?T.play("magOut",D("reloadVolume")):B.type==="reloadPress"?(T.play(B.result,D("reloadVolume")),ve=B.result,Z=0):B.type==="reloadDone"?T.play("magIn",D("reloadVolume")):B.type==="dry"&&T.play("dry",D("reloadVolume"))}function ee(B,W){Em(B.dummy,W),B.dummy.alive&&!B.wasAlive&&B.view.respawn(),B.wasAlive=B.dummy.alive}let Pe=[0,0,0];function Ae(B){let W=He.weapons[B.id],ce=S.cover?S.cover.edge:null;Mm(S,K,_.yaw,He.combat,j);let Ne=Sm({lens:Me.pos,view:Me.dir,muzzle:j,spreadDeg:B.spread,range:W.range,boxes:p,targets:Y,ignoreBox:ce?ce.boxIndex:-1,rand:I}),_e=Ne.hit,Ie=_e.target,et=null;Ie&&(et=Tm(Ie,Am(W,_e.kind,B.mult))),J=_e.kind,z=Ie?Ie.id:"-",N.push({t:b,kind:_e.kind,target:Ie?Ie.id:null,point:_e.point.slice(),stance:K}),N.length>M1&&N.shift();let xt=[Ne.dir[0],Ne.dir[1],Ne.dir[2]];if(Le.push({id:B.id,from:j.slice(),dir:xt,hit:_e,target:Ie,result:et}),et==="kill"){let bt=H.find(pt=>pt.dummy===Ie);bt.wasAlive=!1}}function ue(B){let W=He.weapons[B.id],ce=He.feedback,Ne=w.gunTip(Pe);_.kick(W.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*W.kickYaw),L.flash(Ne,B.dir),L.tracer(Ne,B.hit.point),T.play(B.id==="regret"?"rifle":"pistol",ce.shotVolume);let _e=[-B.dir[0],-B.dir[1],-B.dir[2]];if(B.hit.kind==="world")L.spark(B.hit.point,_e);else if(B.target){let Ie=H.find(et=>et.dummy===B.target).view;B.result==="kill"?(Ie.burst(),L.gel(B.hit.point,_e,ce.killGelCount),L.receipts(B.target.pos.map((et,xt)=>xt===1?et+1.2:et),ce.receiptCount),G="kill",ge=ce.killMarkerTime,T.play("kill",ce.killVolume)):(Ie.hit(B.hit.kind),L.gel(B.hit.point,_e),G=B.hit.kind,ge=ce.hitMarkerTime,T.play(B.hit.kind==="head"?"head":"hit",ce.hitVolume))}}let fe=zl({before(B){if(we=r.poll(),Ke=!!Ye||re||v1({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=Ke,!Ke){v.reset(),A.reset(),le.cover=!1,le.fire=!1,le.reload=!1,le.weapon=null;return}let ce=Math.min(B,Vm);Re=we.held.aim||Ye&&Ye.aim,_.look(we.lookDX,we.lookDY,we.lookX,we.lookY,ce,Re,xe),we.pressed.cover&&(le.cover=!0),we.pressed.fire&&(le.fire=!0),we.pressed.reload&&(le.reload=!0);for(let[Ne,_e]of Ge)we.pressed[Ne]&&(le.weapon=_e)},step(B){if(!Ke)return;let W=Gm(He.cover);W!==g&&(g=W,S.coverEdges=m()),b+=B,S.update(ye(B),B),K=ym(S);let ce=C.update(De,K,B);for(let Ne of ce)se(Ne);for(let Ne of H)ee(Ne,B);Rm(S.pos,Zi.ammoCrates,He.combat.crateRadius)&&C.refill()},render(B,W){let ce=Ke?Math.min(W,Vm):0;he.shot=Le.length>0,he.dir=Me.dir,he.stance=K,he.weapon=C.current(),w.update(B,ce,he);for(let pt of H)pt.view.update(ce);let Ne=S.pos,_e=S.prevPos;for(let pt=0;pt<3;pt++)Ze[pt]=_e[pt]+(Ne[pt]-_e[pt])*B;S.slams>be&&(be=S.slams,_.bump(),T.play("thud",He.cover.thudVolume)),We=Nu(S),ae=ws(S);let Ie=_.update(ce,{target:Ze,mode:We,side:ae},p);Me.pos[0]=Ie.pos[0],Me.pos[1]=Ie.pos[1],Me.pos[2]=Ie.pos[2],Me.fov=Ie.fov,Me.dir[0]=Ie.dir[0],Me.dir[1]=Ie.dir[1],Me.dir[2]=Ie.dir[2],f.fov!==Ie.fov&&(f.fov=Ie.fov,f.updateProjectionMatrix()),w.fadeHeadFor(Ie.pos,He.camera.headHideDist,He.camera.headHideMargin),f.position.set(Ie.pos[0],Ie.pos[1],Ie.pos[2]),f.lookAt(Ie.pos[0]+Ie.dir[0],Ie.pos[1]+Ie.dir[1],Ie.pos[2]+Ie.dir[2]);for(let pt of Le)ue(pt);Le.length=0,L.update(ce),ge-=ce,ge<=0&&(G=null),ve&&(Z+=ce,Z>=He.feedback.reloadResultTime&&(ve=null));let et=S.cover?S.cover.edge:null,xt=xc(Me.pos,Me.dir,100,p,Y,{ignoreBox:et?et.boxIndex:-1});xe=r.device()==="pad"&&xt.target?He.look.pad.assist:1;let bt=K||(S.cover&&S.cover.pop>0?"aim":"hip");V.render(Im({arsenal:C,stance:K,firing:Ee.fire,spreadDeg:C.spreadOf(bt),fov:f.fov,viewportH:n.clientHeight||window.innerHeight,marker:G,reloadFlash:ve})),d.update(performance.now()/1e3),u.update(ce),s.render(h,f),E=s.info.render.calls,X=s.info.render.triangles,ke++,P+=W,P>=1&&(it=ke/P,Oe=P/ke*1e3,ke=0,P=0),me+=W,me>=.1&&(me=0,Ce()),i.frameDone(W*1e3)}});t&&t.has("tune")&&c.toggle(),we=r.poll(),_.update(0,{target:x.pos,mode:"normal",side:1},p),Ce(),fe.start()}var S1={webgl:"Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function zu(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(S1[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||zu("boot",n.message)});function b1(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){zu("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Np({canvas:n,gl:e}):Wm({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{b1()}catch(n){zu("boot",n&&n.message)}})();

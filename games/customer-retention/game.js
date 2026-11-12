/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var ig=0,Pf=1,sg=2;var pl=1,rg=2,Go=3,Js=0,dn=1,Tn=2,Or=0,Vo=1,If=2,Lf=3,Df=4,og=5;var Ur=100,ag=101,lg=102,cg=103,hg=104,ug=200,dg=201,fg=202,pg=203,Nf=204,kf=205,mg=206,gg=207,vg=208,xg=209,yg=210,bg=211,_g=212,Mg=213,wg=214,Wc=0,Xc=1,Yc=2,Ao=3,qc=4,$c=5,Zc=6,Kc=7,Of=0,Sg=1,Tg=2,Wi=0,Uf=1,Ff=2,Bf=3,zf=4,Hf=5,Gf=6,Vf=7;var Wf=300,Fr=301,Wo=302,Rh=303,Ch=304,Jc=1e3,Bi=1001,jc=1002,wn=1003,Eg=1004;var ml=1005;var Sn=1006,Ph=1007;var ws=1008;var ri=1009,Xf=1010,Yf=1011,Xo=1012,Ih=1013,Ri=1014,mi=1015,Ci=1016,Lh=1017,Dh=1018,Br=1020,qf=35902,$f=35899,Zf=1021,Kf=1022,oi=1023,_s=1026,Ss=1027,Nh=1028,kh=1029,js=1030,Oh=1031;var Uh=1033,gl=33776,vl=33777,xl=33778,yl=33779,Fh=35840,Bh=35841,zh=35842,Hh=35843,Gh=36196,Vh=37492,Wh=37496,Xh=37488,Yh=37489,bl=37490,qh=37491,$h=37808,Zh=37809,Kh=37810,Jh=37811,jh=37812,Qh=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,lu=36492,cu=36494,hu=36495,uu=36283,du=36284,_l=36285,fu=36286;var La=2300,Qc=2301,Gc=2302,bf=2303,_f=2400,Mf=2401,wf=2402;var Ag=3200;var Jf=0,Rg=1,Ts="",un="srgb",Da="srgb-linear",Na="linear",kt="srgb";var Vc=7680;var Cg=519,Pg=512,Ig=513,Lg=514,jf=515,Dg=516,Ng=517,Qf=518,ep=519,tp=35044,Yo=35048;var np="300 es",pi=2e3,ka=2001;function Kb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kg(){let t=Oa("canvas");return t.style.display="block",t}var bm={},Ro=null;function Ua(...t){let e="THREE."+t.shift();Ro?Ro("log",e,...t):console.log(e,...t)}function Og(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function at(...t){t=Og(t);let e="THREE."+t.shift();if(Ro)Ro("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function lt(...t){t=Og(t);let e="THREE."+t.shift();if(Ro)Ro("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Aa(...t){let e=t.join(" ");e in bm||(bm[e]=!0,at(...t))}function Ug(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Fg={[Wc]:Wc,[Yc]:Zc,[qc]:qc,[Ao]:$c,[Xc]:Xc,[Zc]:Yc,[Kc]:Kc,[$c]:Ao},zi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_m=1234567,Ra=Math.PI/180,Co=180/Math.PI;function Es(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[t&255]+Un[t>>8&255]+Un[t>>16&255]+Un[t>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function wt(t,e,n){return Math.max(e,Math.min(n,t))}function ip(t,e){return(t%e+e)%e}function jb(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Qb(t,e,n){return t!==e?(n-t)/(e-t):0}function Ca(t,e,n){return(1-n)*t+n*e}function e_(t,e,n,i){return Ca(t,e,1-Math.exp(-n*i))}function t_(t,e=1){return e-Math.abs(ip(t,e*2)-e)}function n_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function i_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function s_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function r_(t,e){return t+Math.random()*(e-t)}function o_(t){return t*(.5-Math.random())}function a_(t){t!==void 0&&(_m=t);let e=_m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l_(t){return t*Ra}function c_(t){return t*Co}function h_(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function u_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function d_(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*v,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*v,a*c);break;case"ZYZ":t.set(l*v,l*f,a*h,a*c);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pu(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rp(t,e){if(e.constructor===Float32Array)return t;let n=pu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function op(t,e){if(e.constructor===Float32Array)return t;let n=pu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var mu={DEG2RAD:Ra,RAD2DEG:Co,generateUUID:Es,clamp:wt,euclideanModulo:ip,mapLinear:jb,inverseLerp:Qb,lerp:Ca,damp:e_,pingpong:t_,smoothstep:n_,smootherstep:i_,randInt:s_,randFloat:r_,randFloatSpread:o_,seededRandom:a_,degToRad:l_,radToDeg:c_,isPowerOfTwo:h_,ceilPowerOfTwo:u_,floorPowerOfTwo:sp,setQuaternionFromProperEuler:d_,normalize:op,denormalize:rp},dp=class dp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dp.prototype.isVector2=!0;var Be=dp,Xn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],v=r[o+2],p=r[o+3];if(d!==p||l!==u||c!==f||h!==v){let m=l*u+c*f+h*v+d*p;m<0&&(u=-u,f=-f,v=-v,p=-p,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+u*a,c=c*g+f*a,h=h*g+v*a,d=d*g+p*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+v*a,d=d*g+p*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],v=r[o+3];return e[n]=a*v+h*d+l*f-c*u,e[n+1]=l*v+h*u+c*d-a*f,e[n+2]=c*v+h*f+a*u-l*d,e[n+3]=h*v-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d-u*f*v;break;case"YXZ":this._x=u*h*d+c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d+u*f*v;break;case"ZXY":this._x=u*h*d-c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d-u*f*v;break;case"ZYX":this._x=u*h*d-c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d+u*f*v;break;case"YZX":this._x=u*h*d+c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d-u*f*v;break;case"XZY":this._x=u*h*d-c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d+u*f*v;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fp=class fp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mm.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;var H=fp,Zd=new H,Mm=new Xn,pp=class pp{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],v=i[8],p=s[0],m=s[3],g=s[6],y=s[1],w=s[4],M=s[7],_=s[2],S=s[5],x=s[8];return r[0]=o*p+a*y+l*_,r[3]=o*m+a*w+l*S,r[6]=o*g+a*M+l*x,r[1]=c*p+h*y+d*_,r[4]=c*m+h*w+d*S,r[7]=c*g+h*M+d*x,r[2]=u*p+f*y+v*_,r[5]=u*m+f*w+v*S,r[8]=u*g+f*M+v*x,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,v=n*d+i*u+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/v;return e[0]=d*p,e[1]=(s*c-h*i)*p,e[2]=(a*i-s*o)*p,e[3]=u*p,e[4]=(h*n-s*l)*p,e[5]=(s*r-a*n)*p,e[6]=f*p,e[7]=(i*l-c*n)*p,e[8]=(o*n-i*r)*p,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kd.makeScale(e,n)),this}rotate(e){return Aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kd.makeRotation(-e)),this}translate(e,n){return Aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pp.prototype.isMatrix3=!0;var ft=pp,Kd=new ft,wm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f_(){let t={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===kt&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(s.r=Eo(s.r),s.g=Eo(s.g),s.b=Eo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Da]:{primaries:e,whitePoint:i,transfer:Na,toXYZ:wm,fromXYZ:Sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:wm,fromXYZ:Sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),t}var Pt=f_();function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ao,eh=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ao===void 0&&(ao=Oa("canvas")),ao.width=e.width,ao.height=e.height;let s=ao.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ao}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Oa("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},p_=0,Po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jd(s[o].image)):r.push(Jd(s[o]))}else r=Jd(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Jd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var m_=0,jd=new H,Yn=class t extends zi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Bi,s=Bi,r=Sn,o=ws,a=oi,l=ri,c=t.DEFAULT_ANISOTROPY,h=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Es(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Wf;Yn.DEFAULT_ANISOTROPY=1;var mp=class mp{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],v=l[9],p=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let w=(c+1)/2,M=(f+1)/2,_=(g+1)/2,S=(h+u)/4,x=(d+p)/4,b=(v+m)/4;return w>M&&w>_?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=x/i):M>_?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=b/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=x/r,s=b/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-v)*(m-v)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(d-p)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this.w=wt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this.w=wt(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mp.prototype.isVector4=!0;var Jt=mp,th=class extends zi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Yn({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Po(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends th{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Fa=class extends Yn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends Yn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ah=class Ah{constructor(e,n,i,s,r,o,a,l,c,h,d,u,f,v,p,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,f,v,p,m)}set(e,n,i,s,r,o,a,l,c,h,d,u,f,v,p,m){let g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=v,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ah().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/lo.setFromMatrixColumn(e,0).length(),r=1/lo.setFromMatrixColumn(e,1).length(),o=1/lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,v=a*h,p=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+v*c,n[5]=u-p*c,n[9]=-a*l,n[2]=p-u*c,n[6]=v+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,v=c*h,p=c*d;n[0]=u+p*a,n[4]=v*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-v,n[6]=p+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,v=c*h,p=c*d;n[0]=u-p*a,n[4]=-o*d,n[8]=v+f*a,n[1]=f+v*a,n[5]=o*h,n[9]=p-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,v=a*h,p=a*d;n[0]=l*h,n[4]=v*c-f,n[8]=u*c+p,n[1]=l*d,n[5]=p*c+u,n[9]=f*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,v=a*l,p=a*c;n[0]=l*h,n[4]=p-u*d,n[8]=v*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+v,n[10]=u-p*d}else if(e.order==="XZY"){let u=o*l,f=o*c,v=a*l,p=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+p,n[5]=o*h,n[9]=f*d-v,n[2]=v*d-f,n[6]=a*h,n[10]=p*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g_,e,v_)}lookAt(e,n,i){let s=this.elements;return ti.subVectors(e,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Hs.crossVectors(i,ti),Hs.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Hs.crossVectors(i,ti)),Hs.normalize(),dc.crossVectors(ti,Hs),s[0]=Hs.x,s[4]=dc.x,s[8]=ti.x,s[1]=Hs.y,s[5]=dc.y,s[9]=ti.y,s[2]=Hs.z,s[6]=dc.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],v=i[2],p=i[6],m=i[10],g=i[14],y=i[3],w=i[7],M=i[11],_=i[15],S=s[0],x=s[4],b=s[8],R=s[12],C=s[1],L=s[5],E=s[9],k=s[13],I=s[2],P=s[6],U=s[10],z=s[14],te=s[3],$=s[7],ne=s[11],q=s[15];return r[0]=o*S+a*C+l*I+c*te,r[4]=o*x+a*L+l*P+c*$,r[8]=o*b+a*E+l*U+c*ne,r[12]=o*R+a*k+l*z+c*q,r[1]=h*S+d*C+u*I+f*te,r[5]=h*x+d*L+u*P+f*$,r[9]=h*b+d*E+u*U+f*ne,r[13]=h*R+d*k+u*z+f*q,r[2]=v*S+p*C+m*I+g*te,r[6]=v*x+p*L+m*P+g*$,r[10]=v*b+p*E+m*U+g*ne,r[14]=v*R+p*k+m*z+g*q,r[3]=y*S+w*C+M*I+_*te,r[7]=y*x+w*L+M*P+_*$,r[11]=y*b+w*E+M*U+_*ne,r[15]=y*R+w*k+M*z+_*q,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],v=e[3],p=e[7],m=e[11],g=e[15],y=l*f-c*u,w=a*f-c*d,M=a*u-l*d,_=o*f-c*h,S=o*u-l*h,x=o*d-a*h;return n*(p*y-m*w+g*M)-i*(v*y-m*_+g*S)+s*(v*w-p*_+g*x)-r*(v*M-p*S+m*x)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],v=e[12],p=e[13],m=e[14],g=e[15],y=n*a-i*o,w=n*l-s*o,M=n*c-r*o,_=i*l-s*a,S=i*c-r*a,x=s*c-r*l,b=h*p-d*v,R=h*m-u*v,C=h*g-f*v,L=d*m-u*p,E=d*g-f*p,k=u*g-f*m,I=y*k-w*E+M*L+_*C-S*R+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/I;return e[0]=(a*k-l*E+c*L)*P,e[1]=(s*E-i*k-r*L)*P,e[2]=(p*x-m*S+g*_)*P,e[3]=(u*S-d*x-f*_)*P,e[4]=(l*C-o*k-c*R)*P,e[5]=(n*k-s*C+r*R)*P,e[6]=(m*M-v*x-g*w)*P,e[7]=(h*x-u*M+f*w)*P,e[8]=(o*E-a*C+c*b)*P,e[9]=(i*C-n*E-r*b)*P,e[10]=(v*S-p*M+g*y)*P,e[11]=(d*M-h*S-f*y)*P,e[12]=(a*R-o*L-l*b)*P,e[13]=(n*L-i*R+s*b)*P,e[14]=(p*w-v*_-m*y)*P,e[15]=(h*_-d*w+u*y)*P,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,v=r*d,p=o*h,m=o*d,g=a*d,y=l*c,w=l*h,M=l*d,_=i.x,S=i.y,x=i.z;return s[0]=(1-(p+g))*_,s[1]=(f+M)*_,s[2]=(v-w)*_,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+g))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(v+w)*x,s[9]=(m-y)*x,s[10]=(1-(u+p))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=lo.set(s[0],s[1],s[2]).length(),a=lo.set(s[4],s[5],s[6]).length(),l=lo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Si.copy(this);let c=1/o,h=1/a,d=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,n.setFromRotationMatrix(Si),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=pi,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),v,p;if(l)v=r/(o-r),p=o*r/(o-r);else if(a===pi)v=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ka)v=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=pi,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),v,p;if(l)v=1/(o-r),p=o/(o-r);else if(a===pi)v=-2/(o-r),p=-(o+r)/(o-r);else if(a===ka)v=-1/(o-r),p=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ah.prototype.isMatrix4=!0;var bt=Ah,lo=new H,Si=new bt,g_=new H(0,0,0),v_=new H(1,1,1),Hs=new H,dc=new H,ti=new H,Tm=new bt,Em=new Xn,Jn=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},x_=0,Am=new H,co=new Xn,ps=new bt,fc=new H,ga=new H,y_=new H,b_=new Xn,Rm=new H(1,0,0),Cm=new H(0,1,0),Pm=new H(0,0,1),Im={type:"added"},__={type:"removed"},ho={type:"childadded",child:null},Qd={type:"childremoved",child:null},ln=class t extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new H,n=new Jn,i=new Xn,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new ft}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return co.setFromAxisAngle(e,n),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,n){return co.setFromAxisAngle(e,n),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,n){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fc.copy(e):fc.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(ga,fc,this.up):ps.lookAt(fc,ga,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),co.setFromRotationMatrix(ps),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),ho.child=e,this.dispatchEvent(ho),ho.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(__),Qd.child=e,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new H(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},M_={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let m=n.getJointPose(p,i),g=this._getHandJoint(c,p);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&u>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},pc={h:0,s:0,l:0};function ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Pt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Pt.workingColorSpace){if(e=ip(e,1),n=wt(n,0,1),i=wt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ef(o,r,e+1/3),this.g=ef(o,r,e),this.b=ef(o,r,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,n=un){function i(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){let i=Bg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Pt.workingToColorSpace(Fn.copy(this),e),Math.round(wt(Fn.r*255,0,255))*65536+Math.round(wt(Fn.g*255,0,255))*256+Math.round(wt(Fn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Fn.copy(this),n);let i=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=un){Pt.workingToColorSpace(Fn.copy(this),e);let n=Fn.r,i=Fn.g,s=Fn.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+n,Gs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gs),e.getHSL(pc);let i=Ca(Gs.h,pc.h,n),s=Ca(Gs.s,pc.s,n),r=Ca(Gs.l,pc.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Ze;Ze.NAMES=Bg;var Cr=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ti=new H,ms=new H,tf=new H,gs=new H,uo=new H,fo=new H,Lm=new H,nf=new H,sf=new H,rf=new H,of=new Jt,af=new Jt,lf=new Jt,ys=class t{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Ti.subVectors(e,n),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Ti.subVectors(s,n),ms.subVectors(i,n),tf.subVectors(e,n);let o=Ti.dot(Ti),a=Ti.dot(ms),l=Ti.dot(tf),c=ms.dot(ms),h=ms.dot(tf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,v=(o*h-a*l)*u;return r.set(1-f-v,v,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return of.setScalar(0),af.setScalar(0),lf.setScalar(0),of.fromBufferAttribute(e,n),af.fromBufferAttribute(e,i),lf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(of,r.x),o.addScaledVector(af,r.y),o.addScaledVector(lf,r.z),o}static isFrontFacing(e,n,i,s){return Ti.subVectors(i,n),ms.subVectors(e,n),Ti.cross(ms).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ti.cross(ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;uo.subVectors(s,i),fo.subVectors(r,i),nf.subVectors(e,i);let l=uo.dot(nf),c=fo.dot(nf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(e,s);let h=uo.dot(sf),d=fo.dot(sf);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),n.copy(i).addScaledVector(uo,o);rf.subVectors(e,r);let f=uo.dot(rf),v=fo.dot(rf);if(v>=0&&f<=v)return n.copy(r);let p=f*c-l*v;if(p<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(fo,a);let m=h*v-f*d;if(m<=0&&d-h>=0&&f-v>=0)return Lm.subVectors(r,s),a=(d-h)/(d-h+(f-v)),n.copy(s).addScaledVector(Lm,a);let g=1/(m+p+u);return o=p*g,a=u*g,n.copy(i).addScaledVector(uo,o).addScaledVector(fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hi=class{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),gc.subVectors(this.max,va),po.subVectors(e.a,va),mo.subVectors(e.b,va),go.subVectors(e.c,va),Vs.subVectors(mo,po),Ws.subVectors(go,mo),Sr.subVectors(po,go);let n=[0,-Vs.z,Vs.y,0,-Ws.z,Ws.y,0,-Sr.z,Sr.y,Vs.z,0,-Vs.x,Ws.z,0,-Ws.x,Sr.z,0,-Sr.x,-Vs.y,Vs.x,0,-Ws.y,Ws.x,0,-Sr.y,Sr.x,0];return!cf(n,po,mo,go,gc)||(n=[1,0,0,0,1,0,0,0,1],!cf(n,po,mo,go,gc))?!1:(vc.crossVectors(Vs,Ws),n=[vc.x,vc.y,vc.z],cf(n,po,mo,go,gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vs=[new H,new H,new H,new H,new H,new H,new H,new H],Ei=new H,mc=new Hi,po=new H,mo=new H,go=new H,Vs=new H,Ws=new H,Sr=new H,va=new H,gc=new H,vc=new H,Tr=new H;function cf(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Tr.fromArray(t,r);let a=s.x*Math.abs(Tr.x)+s.y*Math.abs(Tr.y)+s.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cn=new H,xc=new Be,w_=0,xt=class extends zi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tp,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=e!==void 0?pu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xc.fromBufferAttribute(this,n),xc.applyMatrix3(e),this.setXY(n,xc.x,xc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):rp(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):op(e,this.array)}};var za=class extends xt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ha=class extends xt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var mt=class extends xt{constructor(e,n,i){super(new Float32Array(e),n,i)}},S_=new Hi,xa=new H,hf=new H,jn=class{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):S_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let n=xa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(xa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(hf)),this.expandByPoint(xa.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},T_=0,fi=new bt,uf=new ln,vo=new H,ni=new Hi,ya=new Hi,Mn=new H,Nt=class t extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kb(e)?Ha:za)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ft().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,n,i){return fi.makeTranslation(e,n,i),this.applyMatrix4(fi),this}scale(e,n,i){return fi.makeScale(e,n,i),this.applyMatrix4(fi),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(ni.min,ya.min),ni.expandByPoint(Mn),Mn.addVectors(ni.max,ya.max),ni.expandByPoint(Mn)):(ni.expandByPoint(ya.min),ni.expandByPoint(ya.max))}ni.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mn.fromBufferAttribute(a,c),l&&(vo.fromBufferAttribute(e,c),Mn.add(vo)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new H,l[R]=new H;let h=new H,d=new H,u=new H,f=new Be,v=new Be,p=new Be,m=new H,g=new H;function y(R,C,L){c[R]=c[C]=c[L]=1,h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),f.fromBufferAttribute(r,R),v.fromBufferAttribute(r,C),p.fromBufferAttribute(r,L),d.sub(h),u.sub(h),v.sub(f),p.sub(f);let E=1/(v.x*p.y-p.x*v.y);isFinite(E)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(u,-v.y).multiplyScalar(E),g.copy(u).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(E),a[R].add(m),a[C].add(m),a[L].add(m),l[R].add(g),l[C].add(g),l[L].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,C=w.length;R<C;++R){let L=w[R],E=L.start,k=L.count;for(let I=E,P=E+k;I<P;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new H,_=new H,S=new H,x=new H;function b(R){S.fromBufferAttribute(s,R),x.copy(S);let C=a[R];M.copy(C),M.sub(S.multiplyScalar(S.dot(C))).normalize(),_.crossVectors(x,C);let E=_.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,E)}for(let R=0,C=i.count;R<C;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new xt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let u=0,f=e.count;u<f;u+=3){let v=e.getX(u+0),p=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,p),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,v=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let g=0;g<h;g++)u[v++]=c[f++]}return new xt(u,h,d)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ga=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=tp,this.updateRanges=[],this.version=0,this.uuid=Es()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=Dm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=Dm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Dm(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Es()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var Wn=new H,Lo=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?pu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Wn.fromBufferAttribute(this,n),Wn.applyMatrix4(e),this.setXYZ(n,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wn.fromBufferAttribute(this,n),Wn.applyNormalMatrix(e),this.setXYZ(n,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wn.fromBufferAttribute(this,n),Wn.transformDirection(e),this.setXYZ(n,Wn.x,Wn.y,Wn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new xt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):rp(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):op(e,this.data.array)}},df=new H,E_=new H,A_=new ft,Ai=class{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=df.subVectors(i,n).cross(E_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(df),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||A_.getNormalMatrix(e),s=this.coplanarPoint(df).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},R_=0,Gi=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Vo,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=kf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Do=class extends Gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xo,ba=new H,yo=new H,bo=new H,_o=new Be,_a=new Be,zg=new bt,yc=new H,Ma=new H,bc=new H,Nm=new Be,ff=new Be,km=new Be,Va=class extends ln{constructor(e=new Do){if(super(),this.isSprite=!0,this.type="Sprite",xo===void 0){xo=new Nt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ga(n,5);xo.setIndex([0,1,2,0,2,3]),xo.setAttribute("position",new Lo(i,3,0,!1)),xo.setAttribute("uv",new Lo(i,2,3,!1))}this.geometry=xo,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),zg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-bo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;_c(yc.set(-.5,-.5,0),bo,o,yo,s,r),_c(Ma.set(.5,-.5,0),bo,o,yo,s,r),_c(bc.set(.5,.5,0),bo,o,yo,s,r),Nm.set(0,0),ff.set(1,0),km.set(1,1);let a=e.ray.intersectTriangle(yc,Ma,bc,!1,ba);if(a===null&&(_c(Ma.set(-.5,.5,0),bo,o,yo,s,r),ff.set(0,1),a=e.ray.intersectTriangle(yc,bc,Ma,!1,ba),a===null))return;let l=e.ray.origin.distanceTo(ba);l<e.near||l>e.far||n.push({distance:l,point:ba.clone(),uv:ys.getInterpolation(ba,yc,Ma,bc,Nm,ff,km,new Be),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let n=super.toJSON(e);return n.object.center=this.center.toArray(),n}};function _c(t,e,n,i,s,r){_o.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(_a.x=r*_o.x-s*_o.y,_a.y=s*_o.x+r*_o.y):_a.copy(_o),t.copy(e),t.x+=_a.x,t.y+=_a.y,t.applyMatrix4(zg)}var xs=new H,pf=new H,Mc=new H,wc=new H,No=class{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=xs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xs.copy(this.origin).addScaledVector(this.direction,n),xs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){pf.copy(e).add(n).multiplyScalar(.5),Mc.copy(n).sub(e).normalize(),wc.copy(this.origin).sub(pf);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Mc),a=wc.dot(this.direction),l=-wc.dot(Mc),c=wc.lengthSq(),h=Math.abs(1-o*o),d,u,f,v;if(h>0)if(d=o*l-a,u=o*a-l,v=r*h,d>=0)if(u>=-v)if(u<=v){let p=1/h;d*=p,u*=p,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pf).addScaledVector(Mc,u),f}intersectSphere(e,n){if(e.radius<0)return null;xs.subVectors(e.center,this.origin);let i=xs.dot(this.direction),s=xs.dot(xs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,xs)!==null}intersectTriangle(e,n,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,v=n.x-o.x,p=n.y-o.y,m=n.z-o.z,g=i.x-o.x,y=i.y-o.y,w=i.z-o.z,M=Math.abs(l),_=Math.abs(c),S=Math.abs(h),x,b,R,C,L,E,k,I,P,U,z,te;if(M>=_&&M>=S?(R=l,E=d,P=v,te=g,l>=0?(x=c,b=h,C=u,L=f,k=p,I=m,U=y,z=w):(x=h,b=c,C=f,L=u,k=m,I=p,U=w,z=y)):_>=S?(R=c,E=u,P=p,te=y,c>=0?(x=h,b=l,C=f,L=d,k=m,I=v,U=w,z=g):(x=l,b=h,C=d,L=f,k=v,I=m,U=g,z=w)):(R=h,E=f,P=m,te=w,h>=0?(x=l,b=c,C=d,L=u,k=v,I=p,U=g,z=y):(x=c,b=l,C=u,L=d,k=p,I=v,U=y,z=g)),R===0)return null;let $=x/R,ne=b/R,q=1/R,j=C-$*E,Me=L-ne*E,J=k-$*P,ye=I-ne*P,Ee=U-$*te,He=z-ne*te,oe=Ee*ye-He*J,Ce=j*He-Me*Ee,De=J*Me-ye*j;if(s){if(oe<0||Ce<0||De<0)return null}else if((oe<0||Ce<0||De<0)&&(oe>0||Ce>0||De>0))return null;let se=oe+Ce+De;if(se===0)return null;let Se=q*(oe*E+Ce*P+De*te);return(se>0?Se<0:Se>0)?null:this.at(Se/se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Om=new bt,Er=new No,Sc=new jn,Um=new H,Tc=new H,Ec=new H,Ac=new H,mf=new H,Rc=new H,Fm=new H,Cc=new H,rt=class extends ln{constructor(e=new Nt,n=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Rc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(mf.fromBufferAttribute(d,e),o?Rc.addScaledVector(mf,h):Rc.addScaledVector(mf.sub(n),h))}n.add(Rc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(r),Er.copy(e.ray).recast(e.near),!(Sc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Sc,Um)===null||Er.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Om.copy(r).invert(),Er.copy(e.ray).applyMatrix4(Om),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,p=u.length;v<p;v++){let m=u[v],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,_=w;M<_;M+=3){let S=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);s=Pc(this,g,e,i,c,h,d,S,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let m=v,g=p;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);s=Pc(this,o,e,i,c,h,d,y,w,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,p=u.length;v<p;v++){let m=u[v],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,_=w;M<_;M+=3){let S=M,x=M+1,b=M+2;s=Pc(this,g,e,i,c,h,d,S,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let m=v,g=p;m<g;m+=3){let y=m,w=m+1,M=m+2;s=Pc(this,o,e,i,c,h,d,y,w,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function C_(t,e,n,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Js,a),l===null)return null;Cc.copy(a),Cc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Cc);return c<n.near||c>n.far?null:{distance:c,point:Cc.clone(),object:t}}function Pc(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Tc),t.getVertexPosition(l,Ec),t.getVertexPosition(c,Ac);let h=C_(t,e,n,i,Tc,Ec,Ac,Fm);if(h){let d=new H;ys.getBarycoord(Fm,Tc,Ec,Ac,d),s&&(h.uv=ys.getInterpolatedAttribute(s,a,l,c,d,new Be)),r&&(h.uv1=ys.getInterpolatedAttribute(r,a,l,c,d,new Be)),o&&(h.normal=ys.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new H,materialIndex:0};ys.getNormal(Tc,Ec,Ac,u.normal),h.face=u,h.barycoord=d}return h}var Pr=class extends Yn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=wn,h=wn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ko=class extends xt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mo=new bt,Bm=new bt,Ic=[],zm=new Hi,P_=new bt,wa=new rt,Sa=new jn,Vi=class extends rt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,P_)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Mo),zm.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(zm)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Mo),Sa.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(Sa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mo),Bm.multiplyMatrices(i,Mo),wa.matrixWorld=Bm,wa.raycast(e,Ic);for(let o=0,a=Ic.length;o<a;o++){let l=Ic[o];l.instanceId=r,l.object=this,n.push(l)}Ic.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(s*this.count),s,this.count,Nh,mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ar=new jn,I_=new Be(.5,.5),Lc=new H,Ir=class{constructor(e=new Ai,n=new Ai,i=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],v=r[8],p=r[9],m=r[10],g=r[11],y=r[12],w=r[13],M=r[14],_=r[15];if(s[0].setComponents(c-o,f-h,g-v,_-y).normalize(),s[1].setComponents(c+o,f+h,g+v,_+y).normalize(),s[2].setComponents(c+a,f+d,g+p,_+w).normalize(),s[3].setComponents(c-a,f-d,g-p,_-w).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,g-m,_-M).normalize();else if(s[4].setComponents(c-l,f-u,g-m,_-M).normalize(),n===pi)s[5].setComponents(c+l,f+u,g+m,_+M).normalize();else if(n===ka)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);let n=I_.distanceTo(e.center);return Ar.radius=.7071067811865476+n,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Lc.x=s.normal.x>0?e.max.x:e.min.x,Lc.y=s.normal.y>0?e.max.y:e.min.y,Lc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hm=new bt,ih=class t{constructor(){this.coordinateSystem=pi,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];Hm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ir),i[s].setFromProjectionMatrix(Hm,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new Ir),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}};var Wa=class extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sh=new H,rh=new H,Gm=new bt,Ta=new No,Dc=new jn,gf=new H,Vm=new H,Xa=class extends ln{constructor(e=new Nt,n=new Wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)sh.fromBufferAttribute(n,s-1),rh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=sh.distanceTo(rh);e.setAttribute("lineDistance",new mt(i,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(s),Dc.radius+=r,e.ray.intersectsSphere(Dc)===!1)return;Gm.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(Gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let p=f,m=v-1;p<m;p+=c){let g=h.getX(p),y=h.getX(p+1),w=Nc(this,e,Ta,l,g,y,p);w&&n.push(w)}if(this.isLineLoop){let p=h.getX(v-1),m=h.getX(f),g=Nc(this,e,Ta,l,p,m,v-1);g&&n.push(g)}}else{let f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let p=f,m=v-1;p<m;p+=c){let g=Nc(this,e,Ta,l,p,p+1,p);g&&n.push(g)}if(this.isLineLoop){let p=Nc(this,e,Ta,l,v-1,f,v-1);p&&n.push(p)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nc(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(sh.fromBufferAttribute(a,s),rh.fromBufferAttribute(a,r),n.distanceSqToSegment(sh,rh,gf,Vm)>i)return;gf.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(gf);if(!(c<e.near||c>e.far))return{distance:c,point:Vm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Oo=class extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wm=new bt,Sf=new No,kc=new jn,Oc=new H,Ya=class extends ln{constructor(e=new Nt,n=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(s),kc.radius+=r,e.ray.intersectsSphere(kc)===!1)return;Wm.copy(s).invert(),Sf.copy(e.ray).applyMatrix4(Wm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=u,p=f;v<p;v++){let m=c.getX(v);Oc.fromBufferAttribute(d,m),Xm(Oc,m,l,s,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let v=u,p=f;v<p;v++)Oc.fromBufferAttribute(d,v),Xm(Oc,v,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xm(t,e,n,i,s,r,o){let a=Sf.distanceSqToPoint(t);if(a<n){let l=new H;Sf.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qa=class extends Yn{constructor(e=[],n=Fr,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends Yn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends Yn{constructor(e,n,i=Ri,s,r,o,a=wn,l=wn,c,h=_s,d=1){if(h!==_s&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},Za=class extends Ms{constructor(e,n=Ri,i=Fr,s,r,o=wn,a=wn,l,c=_s){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ct=class t extends Nt{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function v(p,m,g,y,w,M,_,S,x,b,R){let C=M/x,L=_/b,E=M/2,k=_/2,I=S/2,P=x+1,U=b+1,z=0,te=0,$=new H;for(let ne=0;ne<U;ne++){let q=ne*L-k;for(let j=0;j<P;j++){let Me=j*C-E;$[p]=Me*y,$[m]=q*w,$[g]=I,c.push($.x,$.y,$.z),$[p]=0,$[m]=0,$[g]=S>0?1:-1,h.push($.x,$.y,$.z),d.push(j/x),d.push(1-ne/b),z+=1}}for(let ne=0;ne<b;ne++)for(let q=0;q<x;q++){let j=u+q+P*ne,Me=u+q+P*(ne+1),J=u+(q+1)+P*(ne+1),ye=u+(q+1)+P*ne;l.push(j,Me,ye),l.push(Me,J,ye),te+=6}a.addGroup(f,te,R),f+=te,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ja=class t extends Nt{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new H,h=new Be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$t=class t extends Nt{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],v=0,p=[],m=i/2,g=0;y(),o===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function y(){let M=new H,_=new H,S=0,x=(n-e)/i;for(let b=0;b<=r;b++){let R=[],C=b/r,L=C*(n-e)+e;for(let E=0;E<=s;E++){let k=E/s,I=k*l+a,P=Math.sin(I),U=Math.cos(I);_.x=L*P,_.y=-C*i+m,_.z=L*U,d.push(_.x,_.y,_.z),M.set(P,x,U).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-C),R.push(v++)}p.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){let C=p[R][b],L=p[R+1][b],E=p[R+1][b+1],k=p[R][b+1];(e>0||R!==0)&&(h.push(C,L,k),S+=3),(n>0||R!==r-1)&&(h.push(L,E,k),S+=3)}c.addGroup(g,S,0),g+=S}function w(M){let _=v,S=new Be,x=new H,b=0,R=M===!0?e:n,C=M===!0?1:-1;for(let E=1;E<=s;E++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),v++;let L=v;for(let E=0;E<=s;E++){let I=E/s*l+a,P=Math.cos(I),U=Math.sin(I);x.x=R*U,x.y=m*C,x.z=R*P,d.push(x.x,x.y,x.z),u.push(0,C,0),S.x=P*.5+.5,S.y=U*.5*C+.5,f.push(S.x,S.y),v++}for(let E=0;E<s;E++){let k=_+E,I=L+E;M===!0?h.push(I,I+1,k):h.push(I+1,I,k),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class t extends $t{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qa=class t extends Nt{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new H,M=new H,_=new H;for(let S=0;S<n.length;S+=3)f(n[S+0],w),f(n[S+1],M),f(n[S+2],_),l(w,M,_,y)}function l(y,w,M,_){let S=_+1,x=[];for(let b=0;b<=S;b++){x[b]=[];let R=y.clone().lerp(M,b/S),C=w.clone().lerp(M,b/S),L=S-b;for(let E=0;E<=L;E++)E===0&&b===S?x[b][E]=R:x[b][E]=R.clone().lerp(C,E/L)}for(let b=0;b<S;b++)for(let R=0;R<2*(S-b)-1;R++){let C=Math.floor(R/2);R%2===0?(u(x[b][C+1]),u(x[b+1][C]),u(x[b][C])):(u(x[b][C+1]),u(x[b+1][C+1]),u(x[b+1][C]))}}function c(y){let w=new H;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(y),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){let y=new H;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let M=m(y)/2/Math.PI+.5,_=g(y)/Math.PI+.5;o.push(M,1-_)}v(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],M=o[y+2],_=o[y+4],S=Math.max(w,M,_),x=Math.min(w,M,_);S>.9&&x<.1&&(w<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),_<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function v(){let y=new H,w=new H,M=new H,_=new H,S=new Be,x=new Be,b=new Be;for(let R=0,C=0;R<r.length;R+=9,C+=6){y.set(r[R+0],r[R+1],r[R+2]),w.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),S.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),_.copy(y).add(w).add(M).divideScalar(3);let L=m(_);p(S,C+0,y,L),p(x,C+2,w,L),p(b,C+4,M,L)}}function p(y,w,M,_){_<0&&y.x===1&&(o[w]=y.x-1),M.x===0&&M.z===0&&(o[w]=_/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Be:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new H,s=[],r=[],o=[],a=new H,l=new bt;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Uo=class extends qn{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Be){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oh=class extends Uo{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ap(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var Ym=new H,qm=new H,vf=new ap,xf=new ap,yf=new ap,ah=class extends qn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new H){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qm.subVectors(s[0],s[1]).add(s[0]),c=qm);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ym.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ym),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);p<1e-4&&(p=1),v<1e-4&&(v=p),m<1e-4&&(m=p),vf.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,v,p,m),xf.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,v,p,m),yf.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,v,p,m)}else this.curveType==="catmullrom"&&(vf.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xf.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),yf.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(vf.calc(l),xf.calc(l),yf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $m(t,e,n,i,s){let r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function L_(t,e){let n=1-t;return n*n*e}function D_(t,e){return 2*(1-t)*t*e}function N_(t,e){return t*t*e}function Pa(t,e,n,i){return L_(t,e)+D_(t,n)+N_(t,i)}function k_(t,e){let n=1-t;return n*n*n*e}function O_(t,e){let n=1-t;return 3*n*n*t*e}function U_(t,e){return 3*(1-t)*t*t*e}function F_(t,e){return t*t*t*e}function Ia(t,e,n,i,s){return k_(t,e)+O_(t,n)+U_(t,i)+F_(t,s)}var el=class extends qn{constructor(e=new Be,n=new Be,i=new Be,s=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Be){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ia(e,s.x,r.x,o.x,a.x),Ia(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lh=class extends qn{constructor(e=new H,n=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new H){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ia(e,s.x,r.x,o.x,a.x),Ia(e,s.y,r.y,o.y,a.y),Ia(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends qn{constructor(e=new Be,n=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Be){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Be){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends qn{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends qn{constructor(e=new Be,n=new Be,i=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Be){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Pa(e,s.x,r.x,o.x),Pa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends qn{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Pa(e,s.x,r.x,o.x),Pa(e,s.y,r.y,o.y),Pa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Be){let i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set($m(a,l.x,c.x,h.x,d.x),$m(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new Be().fromArray(s))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:ah,CubicBezierCurve:el,CubicBezierCurve3:lh,EllipseCurve:Uo,LineCurve:tl,LineCurve3:ch,QuadraticBezierCurve:nl,QuadraticBezierCurve3:il,SplineCurve:sl}),uh=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new hh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Lr=class extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new tl(this.currentPoint.clone(),new Be(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new nl(this.currentPoint.clone(),new Be(e,n),new Be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){let a=new el(this.currentPoint.clone(),new Be(e,n),new Be(i,s),new Be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new sl(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){let c=new Uo(e,n,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fo=class extends Lr{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new Lr().fromJSON(s))}return this}};function B_(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Hg(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=W_(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let h=a,d=l;for(let u=n;u<s;u+=n){let f=t[u],v=t[u+1];f<a&&(a=f),v<l&&(l=v),f>h&&(h=f),v>d&&(d=v)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return rl(r,o,n,a,l,c,0),o}function Hg(t,e,n,i,s){let r;if(s===tM(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Zm(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Zm(o/i|0,t[o],t[o+1],r);return r&&Bo(r,r.next)&&(al(r),r=r.next),r}function Dr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Bo(n,n.next)||Kt(n.prev,n,n.next)===0)){if(al(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function rl(t,e,n,i,s,r,o){if(!t)return;!o&&r&&Z_(t,i,s,r);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?H_(t,i,s,r):z_(t)){e.push(l.i,t.i,c.i),al(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=G_(Dr(t),e),rl(t,e,n,i,s,r,2)):o===2&&V_(t,e,n,i,s,r):rl(Dr(t),e,n,i,s,r,1);break}}}function z_(t){let e=t.prev,n=t,i=t.next;if(Kt(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),v=i.next;for(;v!==e;){if(v.x>=h&&v.x<=u&&v.y>=d&&v.y<=f&&Ea(s,a,r,l,o,c,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function H_(t,e,n,i){let s=t.prev,r=t,o=t.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),v=Math.min(h,d,u),p=Math.max(a,l,c),m=Math.max(h,d,u),g=Tf(f,v,e,n,i),y=Tf(p,m,e,n,i),w=t.prevZ,M=t.nextZ;for(;w&&w.z>=g&&M&&M.z<=y;){if(w.x>=f&&w.x<=p&&w.y>=v&&w.y<=m&&w!==s&&w!==o&&Ea(a,h,l,d,c,u,w.x,w.y)&&Kt(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=f&&M.x<=p&&M.y>=v&&M.y<=m&&M!==s&&M!==o&&Ea(a,h,l,d,c,u,M.x,M.y)&&Kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=p&&w.y>=v&&w.y<=m&&w!==s&&w!==o&&Ea(a,h,l,d,c,u,w.x,w.y)&&Kt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=p&&M.y>=v&&M.y<=m&&M!==s&&M!==o&&Ea(a,h,l,d,c,u,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function G_(t,e){let n=t;do{let i=n.prev,s=n.next.next;!Bo(i,s)&&Vg(i,n,n.next,s)&&ol(i,s)&&ol(s,i)&&(e.push(i.i,n.i,s.i),al(n),al(n.next),n=t=s),n=n.next}while(n!==t);return Dr(n)}function V_(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j_(o,a)){let l=Wg(o,a);o=Dr(o,o.next),l=Dr(l,l.next),rl(o,e,n,i,s,r,0),rl(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function W_(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=Hg(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(J_(c))}s.sort(X_);for(let r=0;r<s.length;r++)n=Y_(s[r],n);return n}function X_(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function Y_(t,e){let n=q_(t,e);if(!n)return e;let i=Wg(n,t);return Dr(i,i.next),Dr(n,n.next)}function q_(t,e){let n=e,i=t.x,s=t.y,r=-1/0,o;if(Bo(t,n))return n;do{if(Bo(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r&&(r=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Gg(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);ol(n,t)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&$_(o,n)))&&(o=n,h=d)}n=n.next}while(n!==a);return o}function $_(t,e){return Kt(t.prev,t,e.prev)<0&&Kt(e.next,t,t.next)<0}function Z_(t,e,n,i){let s=t;do s.z===0&&(s.z=Tf(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,K_(s)}function K_(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function Tf(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function J_(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Gg(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Ea(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&Gg(t,e,n,i,s,r,o,a)}function j_(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Q_(t,e)&&(ol(t,e)&&ol(e,t)&&eM(t,e)&&(Kt(t.prev,t,e.prev)||Kt(t,e.prev,e))||Bo(t,e)&&Kt(t.prev,t,t.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Bo(t,e){return t.x===e.x&&t.y===e.y}function Vg(t,e,n,i){let s=Fc(Kt(t,e,n)),r=Fc(Kt(t,e,i)),o=Fc(Kt(n,i,t)),a=Fc(Kt(n,i,e));return!!(s!==r&&o!==a||s===0&&Uc(t,n,e)||r===0&&Uc(t,i,e)||o===0&&Uc(n,t,i)||a===0&&Uc(n,e,i))}function Uc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Fc(t){return t>0?1:t<0?-1:0}function Q_(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Vg(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ol(t,e){return Kt(t.prev,t,t.next)<0?Kt(t,e,t.next)>=0&&Kt(t,t.prev,e)>=0:Kt(t,e,t.prev)<0||Kt(t,t.next,e)<0}function eM(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Wg(t,e){let n=Ef(t.i,t.x,t.y),i=Ef(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Zm(t,e,n,i){let s=Ef(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function al(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ef(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tM(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}var Af=class{static triangulate(e,n,i=2){return B_(e,n,i)}},Rr=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];Km(e),Jm(i,e);let o=e.length;n.forEach(Km);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,Jm(i,n[l]);let a=Af.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Km(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Jm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var ll=class t extends Nt{constructor(e=new Fo([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:f-.1,p=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,g=n.extrudePath,y=n.UVGenerator!==void 0?n.UVGenerator:nM,w,M=!1,_,S,x,b;if(g){w=g.getSpacedPoints(h),M=!0,u=!1;let W=g.isCatmullRomCurve3?g.closed:!1;_=g.computeFrenetFrames(h,W),S=new H,x=new H,b=new H}u||(m=0,f=0,v=0,p=0);let R=a.extractPoints(c),C=R.shape,L=R.holes;if(!Rr.isClockWise(C)){C=C.reverse();for(let W=0,be=L.length;W<be;W++){let Ne=L[W];Rr.isClockWise(Ne)&&(L[W]=Ne.reverse())}}function k(W){let Ne=10000000000000001e-36,fe=W[0];for(let ge=1;ge<=W.length;ge++){let Re=ge%W.length,Ue=W[Re],ze=Ue.x-fe.x,Je=Ue.y-fe.y,st=ze*ze+Je*Je,Y=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(fe.x),Math.abs(fe.y)),pt=Ne*Y*Y;if(st<=pt){W.splice(Re,1),ge--;continue}fe=Ue}}k(C),L.forEach(k);let I=L.length,P=C;for(let W=0;W<I;W++){let be=L[W];C=C.concat(be)}function U(W,be,Ne){return be||lt("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(be,Ne)}let z=C.length;function te(W,be,Ne){let fe,ge,Re,Ue=W.x-be.x,ze=W.y-be.y,Je=Ne.x-W.x,st=Ne.y-W.y,Y=Ue*Ue+ze*ze,pt=Ue*st-ze*Je;if(Math.abs(pt)>Number.EPSILON){let it=Math.sqrt(Y),Ae=Math.sqrt(Je*Je+st*st),O=be.x-ze/it,Q=be.y+Ue/it,K=Ne.x-st/Ae,ve=Ne.y+Je/Ae,D=((K-O)*st-(ve-Q)*Je)/(Ue*st-ze*Je);fe=O+Ue*D-W.x,ge=Q+ze*D-W.y;let T=fe*fe+ge*ge;if(T<=2)return new Be(fe,ge);Re=Math.sqrt(T/2)}else{let it=!1;Ue>Number.EPSILON?Je>Number.EPSILON&&(it=!0):Ue<-Number.EPSILON?Je<-Number.EPSILON&&(it=!0):Math.sign(ze)===Math.sign(st)&&(it=!0),it?(fe=-ze,ge=Ue,Re=Math.sqrt(Y)):(fe=Ue,ge=ze,Re=Math.sqrt(Y/2))}return new Be(fe/Re,ge/Re)}let $=[];for(let W=0,be=P.length,Ne=be-1,fe=W+1;W<be;W++,Ne++,fe++)Ne===be&&(Ne=0),fe===be&&(fe=0),$[W]=te(P[W],P[Ne],P[fe]);let ne=[],q,j=$.concat();for(let W=0,be=I;W<be;W++){let Ne=L[W];q=[];for(let fe=0,ge=Ne.length,Re=ge-1,Ue=fe+1;fe<ge;fe++,Re++,Ue++)Re===ge&&(Re=0),Ue===ge&&(Ue=0),q[fe]=te(Ne[fe],Ne[Re],Ne[Ue]);ne.push(q),j=j.concat(q)}let Me;if(m===0)Me=Rr.triangulateShape(P,L);else{let W=[],be=[];for(let Ne=0;Ne<m;Ne++){let fe=Ne/m,ge=f*Math.cos(fe*Math.PI/2),Re=v*Math.sin(fe*Math.PI/2)+p;for(let Ue=0,ze=P.length;Ue<ze;Ue++){let Je=U(P[Ue],$[Ue],Re);Ce(Je.x,Je.y,-ge),fe===0&&W.push(Je)}for(let Ue=0,ze=I;Ue<ze;Ue++){let Je=L[Ue];q=ne[Ue];let st=[];for(let Y=0,pt=Je.length;Y<pt;Y++){let it=U(Je[Y],q[Y],Re);Ce(it.x,it.y,-ge),fe===0&&st.push(it)}fe===0&&be.push(st)}}Me=Rr.triangulateShape(W,be)}let J=Me.length,ye=v+p;for(let W=0;W<z;W++){let be=u?U(C[W],j[W],ye):C[W];M?(x.copy(_.normals[0]).multiplyScalar(be.x),S.copy(_.binormals[0]).multiplyScalar(be.y),b.copy(w[0]).add(x).add(S),Ce(b.x,b.y,b.z)):Ce(be.x,be.y,0)}for(let W=1;W<=h;W++)for(let be=0;be<z;be++){let Ne=u?U(C[be],j[be],ye):C[be];M?(x.copy(_.normals[W]).multiplyScalar(Ne.x),S.copy(_.binormals[W]).multiplyScalar(Ne.y),b.copy(w[W]).add(x).add(S),Ce(b.x,b.y,b.z)):Ce(Ne.x,Ne.y,d/h*W)}for(let W=m-1;W>=0;W--){let be=W/m,Ne=f*Math.cos(be*Math.PI/2),fe=v*Math.sin(be*Math.PI/2)+p;for(let ge=0,Re=P.length;ge<Re;ge++){let Ue=U(P[ge],$[ge],fe);Ce(Ue.x,Ue.y,d+Ne)}for(let ge=0,Re=L.length;ge<Re;ge++){let Ue=L[ge];q=ne[ge];for(let ze=0,Je=Ue.length;ze<Je;ze++){let st=U(Ue[ze],q[ze],fe);M?Ce(st.x,st.y+w[h-1].y,w[h-1].x+Ne):Ce(st.x,st.y,d+Ne)}}}Ee(),He();function Ee(){let W=s.length/3;if(u){let be=0,Ne=z*be;for(let fe=0;fe<J;fe++){let ge=Me[fe];De(ge[2]+Ne,ge[1]+Ne,ge[0]+Ne)}be=h+m*2,Ne=z*be;for(let fe=0;fe<J;fe++){let ge=Me[fe];De(ge[0]+Ne,ge[1]+Ne,ge[2]+Ne)}}else{for(let be=0;be<J;be++){let Ne=Me[be];De(Ne[2],Ne[1],Ne[0])}for(let be=0;be<J;be++){let Ne=Me[be];De(Ne[0]+z*h,Ne[1]+z*h,Ne[2]+z*h)}}i.addGroup(W,s.length/3-W,0)}function He(){let W=s.length/3,be=0;oe(P,be),be+=P.length;for(let Ne=0,fe=L.length;Ne<fe;Ne++){let ge=L[Ne];oe(ge,be),be+=ge.length}i.addGroup(W,s.length/3-W,1)}function oe(W,be){let Ne=W.length;for(;--Ne>=0;){let fe=Ne,ge=Ne-1;ge<0&&(ge=W.length-1);for(let Re=0,Ue=h+m*2;Re<Ue;Re++){let ze=z*Re,Je=z*(Re+1),st=be+fe+ze,Y=be+ge+ze,pt=be+ge+Je,it=be+fe+Je;se(st,Y,pt,it)}}}function Ce(W,be,Ne){l.push(W),l.push(be),l.push(Ne)}function De(W,be,Ne){Se(W),Se(be),Se(Ne);let fe=s.length/3,ge=y.generateTopUV(i,s,fe-3,fe-2,fe-1);_e(ge[0]),_e(ge[1]),_e(ge[2])}function se(W,be,Ne,fe){Se(W),Se(be),Se(fe),Se(be),Se(Ne),Se(fe);let ge=s.length/3,Re=y.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);_e(Re[0]),_e(Re[1]),_e(Re[3]),_e(Re[1]),_e(Re[2]),_e(Re[3])}function Se(W){s.push(l[W*3+0]),s.push(l[W*3+1]),s.push(l[W*3+2])}function _e(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return iM(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=n[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hh[s.type]().fromJSON(s)),new t(i,e.options)}},nM={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Be(r,o),new Be(a,l),new Be(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],v=e[s*3+2],p=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Be(o,1-l),new Be(c,1-d),new Be(u,1-v),new Be(p,1-g)]:[new Be(a,1-l),new Be(h,1-d),new Be(f,1-v),new Be(m,1-g)]}};function iM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Nr=class t extends Qa{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},cl=class t extends Nt{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=wt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/n,d=new H,u=new Be,f=new H,v=new H,p=new H,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:p.normalize(),l.push(p.x,p.y,p.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(v)}for(let y=0;y<=n;y++){let w=i+y*h*s,M=Math.sin(w),_=Math.cos(w);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*M,d.y=e[S].y,d.z=e[S].x*_,o.push(d.x,d.y,d.z),u.x=y/n,u.y=S/(e.length-1),a.push(u.x,u.y);let x=l[3*S+0]*M,b=l[3*S+1],R=l[3*S+0]*_;c.push(x,b,R)}}for(let y=0;y<n;y++)for(let w=0;w<e.length-1;w++){let M=w+y*e.length,_=M,S=M+e.length,x=M+e.length+1,b=M+1;r.push(_,S,b),r.push(x,b,S)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},zo=class t extends Qa{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Ys=class t extends Nt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,f=[],v=[],p=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let w=0;w<c;w++){let M=w*d-r;v.push(M,-y,0),p.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,M=y+c*(g+1),_=y+1+c*(g+1),S=y+1+c*g;f.push(w,M,S),f.push(M,_,S)}this.setIndex(f),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},qs=class t extends Nt{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/s,f=new H,v=new Be;for(let p=0;p<=s;p++){for(let m=0;m<=i;m++){let g=r+m/i*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/n+1)/2,v.y=(f.y/n+1)/2,h.push(v.x,v.y)}d+=u}for(let p=0;p<s;p++){let m=p*(i+1);for(let g=0;g<i;g++){let y=g+m,w=y,M=y+i+1,_=y+i+2,S=y+1;a.push(w,M,S),a.push(M,_,S)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var jt=class t extends Nt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new H,u=new H,f=[],v=[],p=[],m=[];for(let g=0;g<=i;g++){let y=[],w=g/i,M=o+w*a,_=e*Math.cos(M),S=Math.sqrt(e*e-_*_),x=0;g===0&&o===0?x=.5/n:g===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){let R=b/n,C=s+R*r;d.x=-S*Math.cos(C),d.y=_,d.z=S*Math.sin(C),v.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),m.push(R+x,1-w),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<n;y++){let w=h[g][y+1],M=h[g][y],_=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&f.push(w,M,S),(g!==i-1||l<Math.PI)&&f.push(M,_,S)}this.setIndex(f),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kr=class t extends Nt{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new H,f=new H,v=new H;for(let p=0;p<=i;p++){let m=o+p/i*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),v.subVectors(f,u).normalize(),h.push(v.x,v.y,v.z),d.push(g/s),d.push(p/i)}}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){let g=(s+1)*p+m-1,y=(s+1)*(p-1)+m-1,w=(s+1)*(p-1)+m,M=(s+1)*p+m;l.push(g,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var hl=class t extends Nt{constructor(e=new il(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new Be,h=new H,d=[],u=[],f=[],v=[];p(),this.setIndex(v),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function p(){for(let w=0;w<n;w++)m(w);m(r===!1?n:0),y(),g()}function m(w){h=e.getPointAt(w/n,h);let M=o.normals[w],_=o.binormals[w];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,b=Math.sin(x),R=-Math.cos(x);l.x=R*M.x+b*_.x,l.y=R*M.y+b*_.y,l.z=R*M.z+b*_.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=n;w++)for(let M=1;M<=s;M++){let _=(s+1)*(w-1)+(M-1),S=(s+1)*w+(M-1),x=(s+1)*w+M,b=(s+1)*(w-1)+M;v.push(_,S,b),v.push(S,x,b)}}function y(){for(let w=0;w<=n;w++)for(let M=0;M<=s;M++)c.x=w/n,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new hh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function zr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(jm(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(jm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function zn(t){let e={};for(let n=0;n<t.length;n++){let i=zr(t[n]);for(let s in i)e[s]=i[s]}return e}function jm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function sM(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lp(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}var Xg={clone:zr,merge:zn},rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=sM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dh=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fh=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ph=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var ul=class extends Wa{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function wo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Bc(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var $s=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mh=class extends $s{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_f,endingEnd:_f}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mf:r=e,a=2*n-i;break;case wf:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mf:o=e,l=2*i-n;break;case wf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,v=(i-n)/(s-n),p=v*v,m=p*v,g=-u*m+2*u*p-u*v,y=(1+u)*m+(-1.5-2*u)*p+(-.5+u)*v+1,w=(-1-f)*m+(1.5+f)*p+.5*v,M=f*m-f*p;for(let _=0;_!==a;++_)r[_]=g*o[h+_]+y*o[c+_]+w*o[l+_]+M*o[d+_];return r}},gh=class extends $s{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},vh=class extends $s{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xh=class extends $s{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let v=(i-n)/(s-n),p=1-v;for(let m=0;m!==a;++m)r[m]=o[c+m]*p+o[l+m]*v;return r}let u=a*2,f=e-1;for(let v=0;v!==a;++v){let p=o[c+v],m=o[l+v],g=f*u+v*2,y=d[g],w=d[g+1],M=e*u+v*2,_=h[M],S=h[M+1],x=lM(i,n,y,_,s);r[v]=Yg(x,p,w,S,m)}return r}};function Yg(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function aM(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function lM(t,e,n,i,s){let r=(t-e)/(s-e);for(let o=0;o<8;o++){let a=Yg(r,e,n,i,s)-t;if(Math.abs(a)<1e-10)break;let l=aM(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(n,this.TimeBufferType),this.values=wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Bc(e.settings)&&(i.settings={inTangents:wo(e.settings.inTangents,Array),outTangents:wo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new xh(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case La:n=this.InterpolantFactoryMethodDiscrete;break;case Qc:n=this.InterpolantFactoryMethodLinear;break;case Gc:n=this.InterpolantFactoryMethodSmooth;break;case bf:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return at("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Qc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return bf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;Bc(this.settings)&&(Qm(this.settings.inTangents,e),Qm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;Bc(this.settings)&&(eg(this.settings.inTangents,e),eg(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){lt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){lt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){lt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let v=0;v!==i;++v){let p=n[d+v];if(p!==n[u+v]||p!==n[f+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,Bc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qm(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function eg(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Qc;var Zs=class extends si{constructor(e,n,i){super(e,n,i)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=La;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends si{constructor(e,n,i,s){super(e,n,i,s)}};yh.prototype.ValueTypeName="color";var bh=class extends si{constructor(e,n,i,s){super(e,n,i,s)}};bh.prototype.ValueTypeName="number";var _h=class extends $s{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},dl=class extends si{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends si{constructor(e,n,i){super(e,n,i)}};Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=La;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Mh=class extends si{constructor(e,n,i,s){super(e,n,i,s)}};Mh.prototype.ValueTypeName="vector";var wh=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],v=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qg=new wh,Sh=class{constructor(e){this.manager=e!==void 0?e:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var zc=new H,Hc=new Xn,Fi=new H,fl=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Hc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(zc,Hc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xs=new H,tg=new Be,ng=new Be,In=class extends fl{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z),Xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z)}getViewSize(e,n){return this.getViewBounds(e,tg,ng),n.subVectors(ng,tg)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Th=class extends fl{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var So=-90,To=1,Ho=class extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(So,To,e,n);s.layers=this.layers,this.add(s);let r=new In(So,To,e,n);r.layers=this.layers,this.add(r);let o=new In(So,To,e,n);o.layers=this.layers,this.add(o);let a=new In(So,To,e,n);a.layers=this.layers,this.add(a);let l=new In(So,To,e,n);l.layers=this.layers,this.add(l);let c=new In(So,To,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let p=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=p,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Eh=class extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var cp="\\[\\]\\.:\\/",cM=new RegExp("["+cp+"]","g"),hp="[^"+cp+"]",hM="[^"+cp.replace("\\.","")+"]",uM=/((?:WC+[\/:])*)/.source.replace("WC",hp),dM=/(WCOD+)?/.source.replace("WCOD",hM),fM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hp),pM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hp),mM=new RegExp("^"+uM+dM+fM+pM+"$"),gM=["material","materials","bones","map"],Rf=class{constructor(e,n,i){let s=i||Xt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Xt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cM,"")}static parseTrackName(e){let n=mM.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Rf;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uP=new Float32Array(1);var gp=class gp{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};gp.prototype.isMatrix2=!0;var Cf=gp;function up(t,e,n,i){let s=vM(i);switch(n){case Zf:return t*e;case Nh:return t*e/s.components*s.byteLength;case kh:return t*e/s.components*s.byteLength;case js:return t*e*2/s.components*s.byteLength;case Oh:return t*e*2/s.components*s.byteLength;case Kf:return t*e*3/s.components*s.byteLength;case oi:return t*e*4/s.components*s.byteLength;case Uh:return t*e*4/s.components*s.byteLength;case gl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bh:case Hh:return Math.max(t,16)*Math.max(e,8)/4;case Fh:case zh:return Math.max(t,8)*Math.max(e,8)/2;case Gh:case Vh:case Xh:case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wh:case bl:case qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case hu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uu:case du:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _l:case fu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vM(t){switch(t){case ri:case Xf:return{byteLength:1,components:1};case Xo:case Yf:case Ci:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Ri:case Ih:case mi:return{byteLength:4,components:1};case qf:case $f:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mv(){let t=null,e=!1,n=null,i=null;function s(r,o){i=t.requestAnimationFrame(s),n(r,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function MM(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<d.length;f++){let v=d[u],p=d[f];p.start<=v.start+v.count+1?v.count=Math.max(v.count,p.start+p.count-v.start):(++u,d[u]=p)}d.length=u+1;for(let f=0,v=d.length;f<v;f++){let p=d[f];t.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
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
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
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
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OM=`#ifdef USE_IRIDESCENCE
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
#endif`,UM=`#ifdef USE_BUMPMAP
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,YM=`#define PI 3.141592653589793
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
} // validated`,qM=`vec3 transformedNormal = objectNormal;
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
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cw=`#ifdef USE_GRADIENTMAP
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
}`,hw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
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
#endif`,bw=`uniform sampler2D dfgLUT;
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
}`,_w=`
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
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
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
#endif`,ww=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lw=`#if defined( USE_POINTS_UV )
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
#endif`,Dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
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
#endif`,Uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
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
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
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
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aS=`float getShadowMask() {
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
}`,lS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
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
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,vS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wS=`uniform sampler2D t2D;
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform float backgroundBlurriness;
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
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`#include <common>
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
}`,CS=`#if DEPTH_PACKING == 3200
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
}`,PS=`#define DISTANCE
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
}`,IS=`#define DISTANCE
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`uniform float scale;
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
}`,kS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,US=`uniform vec3 diffuse;
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
}`,FS=`#define LAMBERT
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
}`,BS=`#define LAMBERT
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
}`,zS=`#define MATCAP
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
}`,HS=`#define MATCAP
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
}`,GS=`#define NORMAL
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
}`,VS=`#define NORMAL
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
}`,WS=`#define PHONG
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
}`,XS=`#define PHONG
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
}`,YS=`#define STANDARD
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
}`,qS=`#define STANDARD
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
}`,$S=`#define TOON
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
}`,ZS=`#define TOON
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
}`,KS=`uniform float size;
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
}`,JS=`uniform vec3 diffuse;
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
}`,jS=`#include <common>
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
}`,QS=`uniform vec3 color;
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
}`,eT=`uniform float rotation;
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
}`,tT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:wM,alphahash_pars_fragment:SM,alphamap_fragment:TM,alphamap_pars_fragment:EM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:PM,batching_pars_vertex:IM,batching_vertex:LM,begin_vertex:DM,beginnormal_vertex:NM,bsdfs:kM,iridescence_fragment:OM,bumpmap_pars_fragment:UM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:WM,color_vertex:XM,common:YM,defaultnormal_vertex:qM,displacementmap_pars_vertex:$M,displacementmap_vertex:ZM,emissivemap_fragment:KM,emissivemap_pars_fragment:JM,colorspace_fragment:jM,colorspace_pars_fragment:QM,envmap_fragment:ew,envmap_common_pars_fragment:tw,envmap_pars_fragment:nw,envmap_pars_vertex:iw,envmap_physical_pars_fragment:pw,envmap_vertex:sw,fog_vertex:rw,fog_pars_vertex:ow,fog_fragment:aw,fog_pars_fragment:lw,gradientmap_pars_fragment:cw,lightmap_pars_fragment:hw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:dw,lights_pars_begin:fw,lights_toon_fragment:mw,lights_toon_pars_fragment:gw,lights_phong_fragment:vw,lights_phong_pars_fragment:xw,lights_physical_fragment:yw,lights_physical_pars_fragment:bw,lights_fragment_begin:_w,lights_fragment_maps:Mw,lights_fragment_end:ww,lightprobes_pars_fragment:Sw,logdepthbuf_fragment:Tw,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:Aw,logdepthbuf_vertex:Rw,map_fragment:Cw,map_pars_fragment:Pw,map_particle_fragment:Iw,map_particle_pars_fragment:Lw,metalnessmap_fragment:Dw,metalnessmap_pars_fragment:Nw,morphinstance_vertex:kw,morphcolor_vertex:Ow,morphnormal_vertex:Uw,morphtarget_pars_vertex:Fw,morphtarget_vertex:Bw,normal_fragment_begin:zw,normal_fragment_maps:Hw,normal_pars_fragment:Gw,normal_pars_vertex:Vw,normal_vertex:Ww,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:$w,iridescence_pars_fragment:Zw,opaque_fragment:Kw,packing:Jw,premultiplied_alpha_fragment:jw,project_vertex:Qw,dithering_fragment:eS,dithering_pars_fragment:tS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:rS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:lS,skinning_pars_vertex:cS,skinning_vertex:hS,skinnormal_vertex:uS,specularmap_fragment:dS,specularmap_pars_fragment:fS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:vS,uv_pars_fragment:xS,uv_pars_vertex:yS,uv_vertex:bS,worldpos_vertex:_S,background_vert:MS,background_frag:wS,backgroundCube_vert:SS,backgroundCube_frag:TS,cube_vert:ES,cube_frag:AS,depth_vert:RS,depth_frag:CS,distance_vert:PS,distance_frag:IS,equirect_vert:LS,equirect_frag:DS,linedashed_vert:NS,linedashed_frag:kS,meshbasic_vert:OS,meshbasic_frag:US,meshlambert_vert:FS,meshlambert_frag:BS,meshmatcap_vert:zS,meshmatcap_frag:HS,meshnormal_vert:GS,meshnormal_frag:VS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:YS,meshphysical_frag:qS,meshtoon_vert:$S,meshtoon_frag:ZS,points_vert:KS,points_frag:JS,shadow_vert:jS,shadow_frag:QS,sprite_vert:eT,sprite_frag:tT},qe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Yi={basic:{uniforms:zn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:zn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:zn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:zn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:zn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:zn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:zn([qe.points,qe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:zn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:zn([qe.common,qe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:zn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:zn([qe.sprite,qe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:zn([qe.common,qe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:zn([qe.lights,qe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Yi.physical={uniforms:zn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var gu={r:0,b:0,g:0},nT=new bt,gv=new ft;gv.set(-1,0,0,0,1,0,0,0,1);function iT(t,e,n,i,s,r){let o=new Ze(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function v(y){let w=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),w=!0);let _=t.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(y,w){let M=f(w);M&&M.isCubeTexture?(c===void 0&&(c=new rt(new ct(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:zr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nT.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gv),c.material.toneMapped=Pt.getTransfer(M.colorSpace)!==kt,(h!==M||d!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new rt(new Ys(2,2),new Bn({name:"BackgroundMaterial",uniforms:zr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Pt.getTransfer(M.colorSpace)!==kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(gu,lp(t)),n.buffers.color.setClear(gu.r,gu.g,gu.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:v,addToRenderList:p,dispose:g}}function sT(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(L,E,k,I,P){let U=!1,z=d(L,I,k,E);r!==z&&(r=z,c(r.object)),U=f(L,I,k,P),U&&v(L,I,k,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,M(L,E,k,I),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function d(L,E,k,I){let P=I.wireframe===!0,U=i[E.id];U===void 0&&(U={},i[E.id]=U);let z=L.isInstancedMesh===!0?L.id:0,te=U[z];te===void 0&&(te={},U[z]=te);let $=te[k.id];$===void 0&&($={},te[k.id]=$);let ne=$[P];return ne===void 0&&(ne=u(l()),$[P]=ne),ne}function u(L){let E=[],k=[],I=[];for(let P=0;P<n;P++)E[P]=0,k[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,E,k,I){let P=r.attributes,U=E.attributes,z=0,te=k.getAttributes();for(let $ in te)if(te[$].location>=0){let q=P[$],j=U[$];if(j===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),q===void 0||q.attribute!==j||j&&q.data!==j.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function v(L,E,k,I){let P={},U=E.attributes,z=0,te=k.getAttributes();for(let $ in te)if(te[$].location>=0){let q=U[$];q===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let j={};j.attribute=q,q&&q.data&&(j.data=q.data),P[$]=j,z++}r.attributes=P,r.attributesNum=z,r.index=I}function p(){let L=r.newAttributes;for(let E=0,k=L.length;E<k;E++)L[E]=0}function m(L){g(L,0)}function g(L,E){let k=r.newAttributes,I=r.enabledAttributes,P=r.attributeDivisors;k[L]=1,I[L]===0&&(t.enableVertexAttribArray(L),I[L]=1),P[L]!==E&&(t.vertexAttribDivisor(L,E),P[L]=E)}function y(){let L=r.newAttributes,E=r.enabledAttributes;for(let k=0,I=E.length;k<I;k++)E[k]!==L[k]&&(t.disableVertexAttribArray(k),E[k]=0)}function w(L,E,k,I,P,U,z){z===!0?t.vertexAttribIPointer(L,E,k,P,U):t.vertexAttribPointer(L,E,k,I,P,U)}function M(L,E,k,I){p();let P=I.attributes,U=k.getAttributes(),z=E.defaultAttributeValues;for(let te in U){let $=U[te];if($.location>=0){let ne=P[te];if(ne===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){let q=ne.normalized,j=ne.itemSize,Me=e.get(ne);if(Me===void 0)continue;let J=Me.buffer,ye=Me.type,Ee=Me.bytesPerElement,He=ye===t.INT||ye===t.UNSIGNED_INT||ne.gpuType===Ih;if(ne.isInterleavedBufferAttribute){let oe=ne.data,Ce=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,De=ne.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let se=0;se<$.locationSize;se++)g($.location+se,oe.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<$.locationSize;se++)m($.location+se);t.bindBuffer(t.ARRAY_BUFFER,J);for(let se=0;se<$.locationSize;se++)w($.location+se,j/$.locationSize,ye,q,Ce*Ee,(De+j/$.locationSize*se)*Ee,He)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)g($.location+oe,ne.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<$.locationSize;oe++)m($.location+oe);t.bindBuffer(t.ARRAY_BUFFER,J);for(let oe=0;oe<$.locationSize;oe++)w($.location+oe,j/$.locationSize,ye,q,j*Ee,j/$.locationSize*oe*Ee,He)}}else if(z!==void 0){let q=z[te];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv($.location,q);break;case 3:t.vertexAttrib3fv($.location,q);break;case 4:t.vertexAttrib4fv($.location,q);break;default:t.vertexAttrib1fv($.location,q)}}}}y()}function _(){R();for(let L in i){let E=i[L];for(let k in E){let I=E[k];for(let P in I){let U=I[P];for(let z in U)h(U[z].object),delete U[z];delete I[P]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let E=i[L.id];for(let k in E){let I=E[k];for(let P in I){let U=I[P];for(let z in U)h(U[z].object),delete U[z];delete I[P]}}delete i[L.id]}function x(L){for(let E in i){let k=i[E];for(let I in k){let P=k[I];if(P[L.id]===void 0)continue;let U=P[L.id];for(let z in U)h(U[z].object),delete U[z];delete P[L.id]}}}function b(L){for(let E in i){let k=i[E],I=L.isInstancedMesh===!0?L.id:0,P=k[I];if(P!==void 0){for(let U in P){let z=P[U];for(let te in z)h(z[te].object),delete z[te];delete P[U]}delete k[I],Object.keys(k).length===0&&delete i[E]}}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:p,enableAttribute:m,disableUnusedAttributes:y}}function rT(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function oT(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==oi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ri&&x!==mi&&!b&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(at("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=t.getParameter(t.MAX_SAMPLES),S=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:p,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:_,samples:S}}function aT(t){let e=this,n=null,i=0,s=!1,r=!1,o=new Ai,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let v=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,g=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,w=y*4,M=g.clippingState||null;l.value=M,M=h(v,u,w,f);for(let _=0;_!==w;++_)M[_]=n[_];g.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,v){let p=d!==null?d.length:0,m=null;if(p!==0){if(m=l.value,v!==!0||m===null){let g=f+p*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,M=f;w!==p;++w,M+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}var Sl=class extends ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qa(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ct(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Or});r.uniforms.tEquirect.value=n;let o=new rt(s,r),a=n.minFilter;return n.minFilter===ws&&(n.minFilter=Sn),new Ho(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},$g=256,lT=3,cT=20,vv=256,xv=16,hT=3,uT=new H,dT=new Ze,xu=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ho(1,10,null),this._boxMesh=new rt(new ct(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=uT}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,v=l.autoClearStencil,p=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,p===null&&(e.background=l.getClearColor(dT));let m=new Ho(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=v,e.background=p,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max($g,sp(e))}_fromTexture(e,n){e.mapping===Fr||e.mapping===Wo?this._setSize(e.image.length===0?$g:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=Zg(e,!1,!1),i=Math.log2(e)-lT;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Zg(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let o=e.width>>n;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Fr||e.mapping===Wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jg()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kg()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=fT(),this._integrationMaterial=pT());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/xv);for(let o=0;o<=i;o++){let a=t.lodToRoughness(o,i);if(o>i-hT)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(n)+.5*Math.log2(6/(vv*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=mT());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Zg(t,e,n){return new Sl(t,{minFilter:ws,generateMipmaps:e,type:Ci,colorSpace:Da,depthBuffer:n})}function Tl(t,e,n){return new Bn({name:t,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:n,side:dn,blending:Or,depthTest:!1,depthWrite:!1})}function fT(){return Tl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vv}u

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
	`)}function pT(){return Tl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xv}},`

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
	`)}function mT(){return Tl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cT}
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
	`)}function Kg(){return Tl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jg(){return Tl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gT(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Rh||f===Ch)if(e.has(u)){let v=e.get(u).texture;return a(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let p=new Sl(v.height);return p.fromEquirectangularTexture(t,u),e.set(u,p),u.addEventListener("dispose",c),a(p.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,v=f===Rh||f===Ch,p=f===Fr||f===Wo;if(v||p){let m=n.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new xu(t)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return v&&y&&y.height>0||p&&y&&l(y)?(i===null&&(i=new xu(t)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Rh?u.mapping=Fr:f===Ch&&(u.mapping=Wo),u}function l(u){let f=0,v=6;for(let p=0;p<v;p++)u[p]!==void 0&&f++;return f===v}function c(u){let f=u.target;f.removeEventListener("dispose",c);let v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let v=n.get(f);v!==void 0&&(n.delete(f),v.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function vT(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Aa("WebGLRenderer: "+i+" extension not supported."),s}}}function xT(t,e,n,i){let s={},r=new WeakMap,o=new FinalizationRegistry(v=>delete s[v]);function a(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(let m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",a),delete s[v.id],o.unregister(v);let p=r.get(v);p&&(e.remove(p),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,p){return s[p.id]!==void 0||(p.addEventListener("dispose",a),s[p.id]=new WeakRef(p),o.register(p,p.id,p),n.memory.geometries++),p}function h(v){let p=v.attributes;for(let m in p)e.update(p[m],t.ARRAY_BUFFER)}function d(v){let p=v.index,m=v.attributes.position,g=0;if(m===void 0)return;let y=p!==null?p.array.length:m.array.length/3-1,w=m.count>=65535?Ha:za,M=new w(Math.ceil(y/3)*6,1),_=M.array;if(p!==null){let x=p.array;g=p.version;for(let b=0,R=0;b<y;b+=3){let C=x[b+0],L=x[b+1],E=x[b+2];_[R++]=C,_[R++]=L,_[R++]=L,_[R++]=E,_[R++]=E,_[R++]=C}}else{g=m.version;for(let x=0,b=0;x<y;x+=3){let R=x+0,C=x+1,L=x+2;_[b++]=R,_[b++]=C,_[b++]=C,_[b++]=L,_[b++]=L,_[b++]=R}}M.version=g;let S=r.get(v);S&&e.remove(S),r.set(v,M)}function u(v){let p=r.get(v);if(p){let m=v.index;m!==null&&p.version<m.version&&d(v)}else d(v);return r.get(v)}function f(){for(let v in s){let p=s[v].deref();p!==void 0&&l(p)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function yT(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];n.update(p,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function _T(t,e,n){let i=new WeakMap,s=new Jt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),v===!0&&(w=2),p===!0&&(w=3);let M=a.attributes.position.count*w,_=1;M>e.maxTextureSize&&(_=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*_*4*d),x=new Fa(S,M,_,d);x.type=mi,x.needsUpdate=!0;let b=w*4;for(let C=0;C<d;C++){let L=m[C],E=g[C],k=y[C],I=M*_*4*C;for(let P=0;P<L.count;P++){let U=P*b;f===!0&&(s.fromBufferAttribute(L,P),S[I+U+0]=s.x,S[I+U+1]=s.y,S[I+U+2]=s.z,S[I+U+3]=0),v===!0&&(s.fromBufferAttribute(E,P),S[I+U+4]=s.x,S[I+U+5]=s.y,S[I+U+6]=s.z,S[I+U+7]=0),p===!0&&(s.fromBufferAttribute(k,P),S[I+U+8]=s.x,S[I+U+9]=s.y,S[I+U+10]=s.z,S[I+U+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Be(M,_)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];let v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function MT(t,e,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var wT={[Uf]:"LINEAR_TONE_MAPPING",[Ff]:"REINHARD_TONE_MAPPING",[Bf]:"CINEON_TONE_MAPPING",[zf]:"ACES_FILMIC_TONE_MAPPING",[Gf]:"AGX_TONE_MAPPING",[Vf]:"NEUTRAL_TONE_MAPPING",[Hf]:"CUSTOM_TONE_MAPPING"};function ST(t,e,n,i,s,r){let o=new ii(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Nt;h.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mt([0,2,0,0,2,0],2));let d=new dh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new rt(h,d),f=new Th(-1,1,1,-1,0,1),v=null,p=null,m=!1,g,y=null,w=[],M=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),l!==null&&l.setSize(_,S);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(_,S)}},this.setEffects=function(_){w=_,M=w.length>0&&w[0].isRenderPass===!0;let S=o.width,x=o.height;w.length>0&&a===null&&(a=new ii(S,x,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new ii(S,x,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(R=>R.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ms(S,x),r===!0&&(c.format=Ss,c.type=Br)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let R=0;R<w.length;R++){let C=w[R];C.setSize&&C.setSize(S,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(_,S){if(m||_.toneMapping===Wi&&w.length===0)return!1;if(y=S,S!==null){let x=S.width,b=S.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return M===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Wi,!0},this.hasRenderPass=function(){return M},this.end=function(_,S){_.toneMapping=g,m=!0;let x=o,b=a;for(let R=0;R<w.length;R++){let C=w[R];C.enabled!==!1&&(C.render(_,b,x,S),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(v!==_.outputColorSpace||p!==_.toneMapping){v=_.outputColorSpace,p=_.toneMapping,d.defines={},Pt.getTransfer(v)===kt&&(d.defines.SRGB_TRANSFER="");let R=wT[p];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,_.setRenderTarget(y),_.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var yv=new Yn,bv=new Ms(1,1),_v=new Za(1),Mv=new Fa,wv=new nh,Sv=new qa,jg=[],Qg=[],ev=new Float32Array(16),tv=new Float32Array(9),nv=new Float32Array(4);function $o(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=jg[s];if(r===void 0&&(r=new Float32Array(s),jg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function fn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=Qg[e];n===void 0&&(n=new Int32Array(e),Qg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ET(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2fv(this.addr,e),pn(n,e)}}function AT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;t.uniform3fv(this.addr,e),pn(n,e)}}function RT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4fv(this.addr,e),pn(n,e)}}function CT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(fn(n,i))return;nv.set(i),t.uniformMatrix2fv(this.addr,!1,nv),pn(n,i)}}function PT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(fn(n,i))return;tv.set(i),t.uniformMatrix3fv(this.addr,!1,tv),pn(n,i)}}function IT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(fn(n,i))return;ev.set(i),t.uniformMatrix4fv(this.addr,!1,ev),pn(n,i)}}function LT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2iv(this.addr,e),pn(n,e)}}function NT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3iv(this.addr,e),pn(n,e)}}function kT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4iv(this.addr,e),pn(n,e)}}function OT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2uiv(this.addr,e),pn(n,e)}}function FT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3uiv(this.addr,e),pn(n,e)}}function BT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4uiv(this.addr,e),pn(n,e)}}function _u(t){return t.version===0&&(t.compareFunction=ep,t.needsUpdate=!0),t}function zT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=_u(bv):r=yv,n.setTexture2D(e||r,s)}function HT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||wv,s)}function GT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=_u(_v):r=Sv,n.setTextureCube(e||r,s)}function VT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Mv,s)}function WT(t){switch(t){case 5126:return TT;case 35664:return ET;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return PT;case 35676:return IT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return NT;case 35669:case 35673:return kT;case 5125:return OT;case 36294:return UT;case 36295:return FT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function XT(t,e){t.uniform1fv(this.addr,e)}function YT(t,e){let n=$o(e,this.size,2);t.uniform2fv(this.addr,n)}function qT(t,e){let n=$o(e,this.size,3);t.uniform3fv(this.addr,n)}function $T(t,e){let n=$o(e,this.size,4);t.uniform4fv(this.addr,n)}function ZT(t,e){let n=$o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KT(t,e){let n=$o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JT(t,e){let n=$o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jT(t,e){t.uniform1iv(this.addr,e)}function QT(t,e){t.uniform2iv(this.addr,e)}function eE(t,e){t.uniform3iv(this.addr,e)}function tE(t,e){t.uniform4iv(this.addr,e)}function nE(t,e){t.uniform1uiv(this.addr,e)}function iE(t,e){t.uniform2uiv(this.addr,e)}function sE(t,e){t.uniform3uiv(this.addr,e)}function rE(t,e){t.uniform4uiv(this.addr,e)}function oE(t,e,n){let i=this.cache,s=e.length,r=bu(n,s);fn(i,r)||(t.uniform1iv(this.addr,r),pn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=_u(bv):o=yv;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function aE(t,e,n){let i=this.cache,s=e.length,r=bu(n,s);fn(i,r)||(t.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||wv,r[o])}function lE(t,e,n){let i=this.cache,s=e.length,r=bu(n,s);fn(i,r)||(t.uniform1iv(this.addr,r),pn(i,r));let o;this.type===t.SAMPLER_CUBE_SHADOW?o=_u(_v):o=Sv;for(let a=0;a!==s;++a)n.setTextureCube(e[a]||o,r[a])}function cE(t,e,n){let i=this.cache,s=e.length,r=bu(n,s);fn(i,r)||(t.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Mv,r[o])}function hE(t){switch(t){case 5126:return XT;case 35664:return YT;case 35665:return qT;case 35666:return $T;case 35674:return ZT;case 35675:return KT;case 35676:return JT;case 5124:case 35670:return jT;case 35667:case 35671:return QT;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return sE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}var yp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=WT(n.type)}},bp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hE(n.type)}},_p=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},vp=/(\w+)(\])?(\[|\.)?/g;function iv(t,e){t.seq.push(e),t.map[e.id]=e}function uE(t,e,n){let i=t.name,s=i.length;for(vp.lastIndex=0;;){let r=vp.exec(i),o=vp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){iv(n,c===void 0?new yp(a,t,e):new bp(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new _p(a),iv(n,d)),n=d}}}var qo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);uE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function sv(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var dE=37297,fE=0;function pE(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var rv=new ft;function mE(t){Pt._getMatrix(rv,Pt.workingColorSpace,t);let e=`mat3( ${rv.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(t)){case Na:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ov(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+pE(t.getShaderSource(e),a)}else return r}function gE(t,e){let n=mE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vE={[Uf]:"Linear",[Ff]:"Reinhard",[Bf]:"Cineon",[zf]:"ACESFilmic",[Gf]:"AgX",[Vf]:"Neutral",[Hf]:"Custom"};function xE(t,e){let n=vE[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var vu=new H;function yE(){Pt.getLuminanceCoefficients(vu);let t=vu.x.toFixed(4),e=vu.y.toFixed(4),n=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function _E(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ME(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function wl(t){return t!==""}function av(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function lv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(t){return t.replace(wE,SE)}function SE(t,e){let n=_t[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Mp(n)}var TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(t){return t.replace(TE,EE)}function EE(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var AE={[pl]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function RE(t){return AE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var CE={[Wo]:"ENVMAP_MODE_REFRACTION"};function PE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":CE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IE={[Of]:"ENVMAP_BLENDING_MULTIPLY",[Sg]:"ENVMAP_BLENDING_MIX",[Tg]:"ENVMAP_BLENDING_ADD"};function LE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":IE[t.combine]||"ENVMAP_BLENDING_NONE"}function DE(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=RE(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=PE(n),d=LE(n),u=bE(n),f=_E(r),v=s.createProgram(),p,m,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(wl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(wl).join(`
`),m.length>0&&(m+=`
`)):(p=[hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),m=[hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?_t.tonemapping_pars_fragment:"",n.toneMapping!==Wi?xE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,gE("linearToOutputTexel",n.outputColorSpace),yE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),o=Mp(o),o=av(o,n),o=lv(o,n),a=Mp(a),a=av(a,n),a=lv(a,n),o=cv(o),a=cv(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+p+o,w=g+m+a,M=sv(s,s.VERTEX_SHADER,y),_=sv(s,s.FRAGMENT_SHADER,w);s.attachShader(v,M),s.attachShader(v,_),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(C){if(t.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",E=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(_)||"",I=L.trim(),P=E.trim(),U=k.trim(),z=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,M,_);else{let $=ov(s,M,"vertex"),ne=ov(s,_,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+$+`
`+ne)}else I!==""?at("WebGLProgram: Program Info Log:",I):(P===""||U==="")&&(te=!1);te&&(C.diagnostics={runnable:z,programLog:I,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(M),s.deleteShader(_),x=new qo(s,v),b=ME(s,v)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,dE)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=_,this}var NE=0,wp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Sp(e),n.set(e,i)),i}},Sp=class{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}};function kE(t){return t===js||t===bl||t===_l}function OE(t,e,n,i,s,r){let o=new Ba,a=new wp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,b,R,C,L,E){let k=C.fog,I=L.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||P,U),te=u[x.type],$=i.precision;x.precision!==null&&($=i.getMaxPrecision(x.precision),$!==x.precision&&at("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));let ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,q=ne!==void 0?ne.length:0,j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let Me,J,ye,Ee;if(te){let Le=Yi[te];Me=Le.vertexShader,J=Le.fragmentShader}else{Me=x.vertexShader,J=x.fragmentShader;let Le=a.getVertexShaderStage(x),Ke=a.getFragmentShaderStage(x);a.update(x,Le,Ke),ye=Le.id,Ee=Ke.id}let He=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,se=!!x.map,Se=!!x.matcap,_e=!!z,W=_e&&z.isPMREMTexture===!0,be=!!x.aoMap,Ne=!!x.lightMap,fe=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,Re=!!x.displacementMap,Ue=!!x.emissiveMap,ze=!!x.metalnessMap,Je=!!x.roughnessMap,st=x.anisotropy>0,Y=x.clearcoat>0,pt=x.diffuseRoughness>0,it=x.dispersion>0,Ae=x.retroreflectivity>0,O=x.iridescence>0,Q=x.sheen>0,K=x.transmission>0,ve=st&&!!x.anisotropyMap,D=Y&&!!x.clearcoatMap,T=Y&&!!x.clearcoatNormalMap,G=Y&&!!x.clearcoatRoughnessMap,re=pt&&!!x.diffuseRoughnessMap,ee=O&&!!x.iridescenceMap,pe=O&&!!x.iridescenceThicknessMap,Pe=Q&&!!x.sheenColorMap,he=Q&&!!x.sheenRoughnessMap,ue=!!x.specularMap,ke=!!x.specularColorMap,V=!!x.specularIntensityMap,de=K&&!!x.transmissionMap,ie=K&&!!x.thicknessMap,Ie=!!x.gradientMap,xe=!!x.alphaMap,we=x.alphaTest>0,Ve=!!x.alphaHash,nt=!!x.extensions,ae=Wi;x.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ae=t.toneMapping);let Oe=W?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,$e={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:J,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,outputColorSpace:He===null?t.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:Se,envMap:_e,envMapMode:_e&&z.mapping,envMapPMREM:W,envMapMaxLod:W?Oe.length-1:null,envMapSize:W?Oe[0].width:null,aoMap:be,lightMap:Ne,bumpMap:fe,normalMap:ge,displacementMap:Re,emissiveMap:Ue,normalMapObjectSpace:ge&&x.normalMapType===Rg,normalMapTangentSpace:ge&&x.normalMapType===Jf,packedNormalMap:ge&&x.normalMapType===Jf&&kE(x.normalMap.format),metalnessMap:ze,roughnessMap:Je,anisotropy:st,anisotropyMap:ve,clearcoat:Y,clearcoatMap:D,clearcoatNormalMap:T,clearcoatRoughnessMap:G,diffuseRoughness:pt,diffuseRoughnessMap:re,dispersion:it,retroreflection:Ae,iridescence:O,iridescenceMap:ee,iridescenceThicknessMap:pe,sheen:Q,sheenColorMap:Pe,sheenRoughnessMap:he,specularMap:ue,specularColorMap:ke,specularIntensityMap:V,transmission:K,transmissionMap:de,thicknessMap:ie,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===Vo&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:Ve,combine:x.combine,mapUv:se&&f(x.map.channel),aoMapUv:be&&f(x.aoMap.channel),lightMapUv:Ne&&f(x.lightMap.channel),bumpMapUv:fe&&f(x.bumpMap.channel),normalMapUv:ge&&f(x.normalMap.channel),displacementMapUv:Re&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:ze&&f(x.metalnessMap.channel),roughnessMapUv:Je&&f(x.roughnessMap.channel),anisotropyMapUv:ve&&f(x.anisotropyMap.channel),clearcoatMapUv:D&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&f(x.sheenRoughnessMap.channel),specularMapUv:ue&&f(x.specularMap.channel),specularColorMapUv:ke&&f(x.specularColorMap.channel),specularIntensityMapUv:V&&f(x.specularIntensityMap.channel),transmissionMapUv:de&&f(x.transmissionMap.channel),thicknessMapUv:ie&&f(x.thicknessMap.channel),alphaMapUv:xe&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ge||st),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(se||xe),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:j,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:E.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ae,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&Pt.getTransfer(x.map.colorSpace)===kt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(x.emissiveMap.colorSpace)===kt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let b=u[x.type],R;if(b){let C=Yi[b];R=Xg.clone(C.uniforms)}else R=x.uniforms;return R}function w(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new DE(t,b,x,s),c.push(R),h.set(b,R)),R}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function _(x){a.remove(x)}function S(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:_,programs:c,dispose:S}}function UE(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function FE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dv(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,v,p,m,g){let y=t[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:v,materialVariant:o(u),groupOrder:p,renderOrder:u.renderOrder,z:m,group:g},t[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=v,y.materialVariant=o(u),y.groupOrder=p,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,f,v,p,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(u,f,v,p,m,g);v.transmission>0?i.push(w):v.transparent===!0?s.push(w):n.push(w)}function c(u,f,v,p,m,g){let y=a(u,f,v,p,m,g);v.transmission>0?i.unshift(y):v.transparent===!0?s.unshift(y):n.unshift(y)}function h(u,f){n.length>1&&n.sort(u||FE),i.length>1&&i.sort(f||uv),s.length>1&&s.sort(f||uv)}function d(){for(let u=e,f=t.length;u<f;u++){let v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function BE(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new dv,t.set(i,[o])):s>=r.length?(o=new dv,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new Ze};break;case"SpotLight":n={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function HE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var GE=0;function VE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WE(t){let e=new zE,n=HE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new bt,o=new bt;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,v=0,p=0,m=0,g=0,y=0,w=0,M=0,_=0,S=0,x=0,b=0,R=0,C=0;c.sort(VE);for(let E=0,k=c.length;E<k;E++){let I=c[E],P=I.color,U=I.intensity,z=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===js?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*U,d+=P.g*U,u+=P.b*U;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],U);C++}else if(I.isSunLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,q=n.get(I);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[v]=q,i.sunShadowMap[v]=te;let j=ne.getViewportCount();for(let Me=0;Me<j;Me++)i.sunShadowMatrix[p+Me]=ne.getMatrix(Me),i.sunShadowCascade[p+Me]=ne._cascadeData[Me];p+=j,v++}i.sun[f]=$,f++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,q=n.get(I);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=$,m++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(P).multiplyScalar(U),$.distance=z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[y]=$;let ne=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,ne.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[y]=ne.matrix,I.castShadow){let q=n.get(I);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.spotShadow[y]=q,i.spotShadowMap[y]=te,x++}y++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(P).multiplyScalar(U),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=$,w++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let ne=I.shadow,q=n.get(I);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=$,g++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(U),$.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[M]=$,M++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==M||L.numSunShadows!==v||L.numDirectionalShadows!==_||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=g,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=p,i.sunShadowCascade.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=M,L.numSunShadows=v,L.numDirectionalShadows=_,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=C,i.version=GE++)}function l(c,h){let d=0,u=0,f=0,v=0,p=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let M=c[y];if(M.isSunLight){let _=i.sun[d];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),d++}else if(M.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(M.isSpotLight){let _=i.spot[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),v++}else if(M.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let _=i.hemi[m];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function fv(t){let e=new WE(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):n.push(d)}function a(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XE(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new fv(t),e.set(s,[a])):r>=o.length?(a=new fv(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
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
}`,$E=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],ZE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],pv=new bt,Ml=new H,xp=new H;function KE(t,e,n){let i=new Ir,s=new Be,r=new Be,o=new Jt,a=new fh,l=new ph,c={},h=n.maxTextureSize,d={[Js]:dn,[dn]:Js,[Tn]:Tn},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:YE,fragmentShader:qE}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let v=new Nt;v.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new rt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let g=this.type;this.render=function(S,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===rg&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pl);let R=t.getRenderTarget(),C=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),E=t.state;E.setBlending(Or),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let k=g!==this.type;k&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(P=>P.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,P=S.length;I<P;I++){let U=S[I],z=U.shadow;if(z===void 0){at("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let te=z.getFrameExtents();s.multiply(te),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,z.mapSize.y=r.y));let $=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Go){if(U.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ii(s.x,s.y,{format:js,type:Ci,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new Ms(s.x,s.y,mi),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=_s,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else U.isPointLight?(z.map=new Sl(s.x),z.map.depthTexture=new Za(s.x,Ri)):(z.map=new ii(s.x,s.y),z.map.depthTexture=new Ms(s.x,s.y,Ri)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=_s,this.type===pl?(z.map.depthTexture.compareFunction=$?Qf:jf,z.map.depthTexture.minFilter=Sn,z.map.depthTexture.magFilter=Sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let ne=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();U.isPointLight!==!0&&z.updateMatrices(U,b);let q=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let j=0;j<ne;j++){let Me=z.getCamera(j);if(U.isPointLight){let J=z.camera,ye=z.matrix,Ee=U.distance||J.far;Ee!==J.far&&(J.far=Ee,J.updateProjectionMatrix()),Ml.setFromMatrixPosition(U.matrixWorld),J.position.copy(Ml),xp.copy(J.position),xp.add($E[j]),J.up.copy(ZE[j]),J.lookAt(xp),J.updateMatrixWorld(),ye.makeTranslation(-Ml.x,-Ml.y,-Ml.z),pv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(pv,J.coordinateSystem,J.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,j),t.clear();else{j===0&&(t.setRenderTarget(z.map),t.clear());let J=z.getViewport(j);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),E.viewport(o)}i=z.getFrustum(j),M(x,b,Me,U,q,this.type)}z.isPointLightShadow!==!0&&this.type===Go&&y(z,b),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,t.setRenderTarget(R,C,L)};function y(S,x){let b=e.update(p);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new ii(s.x,s.y,{format:js,type:Ci}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(x,null,b,u,p,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(x,null,b,f,p,null)}function w(S,x,b,R){let C=null,L=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)C=L;else if(C=b.isPointLight===!0?l:a,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let E=C.uuid,k=x.uuid,I=c[E];I===void 0&&(I={},c[E]=I);let P=I[k];P===void 0&&(P=C.clone(),I[k]=P,x.addEventListener("dispose",_)),C=P}if(C.visible=x.visible,C.wireframe=x.wireframe,R===Go?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let E=t.properties.get(C);E.light=b}return C}function M(S,x,b,R,C,L){if(S.visible===!1)return;if(S.layers.test(C)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Go)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let I=e.update(S),P=S.material;if(Array.isArray(P)){let U=I.groups;for(let z=0,te=U.length;z<te;z++){let $=U[z],ne=P[$.materialIndex];if(ne&&ne.visible){let q=w(S,ne,R,L);S.onBeforeShadow(t,S,x,b,I,q,$),t.renderBufferDirect(b,null,I,q,S,$),S.onAfterShadow(t,S,x,b,I,q,$)}}}else if(P.visible){let U=w(S,P,R,L);S.onBeforeShadow(t,S,x,b,I,U,null),t.renderBufferDirect(b,null,I,U,S,null),S.onAfterShadow(t,S,x,b,I,U,null)}}let k=S.children;for(let I=0,P=k.length;I<P;I++)M(k[I],x,b,R,C,L)}function _(S){S.target.removeEventListener("dispose",_);for(let b in c){let R=c[b],C=S.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function JE(t,e){function n(){let V=!1,de=new Jt,ie=null,Ie=new Jt(0,0,0,0);return{setMask:function(xe){ie!==xe&&!V&&(t.colorMask(xe,xe,xe,xe),ie=xe)},setLocked:function(xe){V=xe},setClear:function(xe,we,Ve,nt,ae){ae===!0&&(xe*=nt,we*=nt,Ve*=nt),de.set(xe,we,Ve,nt),Ie.equals(de)===!1&&(t.clearColor(xe,we,Ve,nt),Ie.copy(de))},reset:function(){V=!1,ie=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,de=!1,ie=null,Ie=null,xe=null;return{setReversed:function(we){if(de!==we){let Ve=e.get("EXT_clip_control");we?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),de=we;let nt=xe;xe=null,this.setClear(nt)}},getReversed:function(){return de},setTest:function(we){we?oe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(we){ie!==we&&!V&&(t.depthMask(we),ie=we)},setFunc:function(we){if(de&&(we=Fg[we]),Ie!==we){switch(we){case Wc:t.depthFunc(t.NEVER);break;case Xc:t.depthFunc(t.ALWAYS);break;case Yc:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case qc:t.depthFunc(t.EQUAL);break;case $c:t.depthFunc(t.GEQUAL);break;case Zc:t.depthFunc(t.GREATER);break;case Kc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=we}},setLocked:function(we){V=we},setClear:function(we){xe!==we&&(xe=we,de&&(we=1-we),t.clearDepth(we))},reset:function(){V=!1,ie=null,Ie=null,xe=null,de=!1}}}function s(){let V=!1,de=null,ie=null,Ie=null,xe=null,we=null,Ve=null,nt=null,ae=null;return{setTest:function(Oe){V||(Oe?oe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(Oe){de!==Oe&&!V&&(t.stencilMask(Oe),de=Oe)},setFunc:function(Oe,$e,Le){(ie!==Oe||Ie!==$e||xe!==Le)&&(t.stencilFunc(Oe,$e,Le),ie=Oe,Ie=$e,xe=Le)},setOp:function(Oe,$e,Le){(we!==Oe||Ve!==$e||nt!==Le)&&(t.stencilOp(Oe,$e,Le),we=Oe,Ve=$e,nt=Le)},setLocked:function(Oe){V=Oe},setClear:function(Oe){ae!==Oe&&(t.clearStencil(Oe),ae=Oe)},reset:function(){V=!1,de=null,ie=null,Ie=null,xe=null,we=null,Ve=null,nt=null,ae=null}}}let r=new n,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,v=[],p=null,m=!1,g=null,y=null,w=null,M=null,_=null,S=null,x=null,b=new Ze(0,0,0),R=0,C=!1,L=null,E=null,k=null,I=null,P=null,U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,te=0,$=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec($)[1]),z=te>=1):$.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=te>=2);let ne=null,q={},j=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),J=new Jt().fromArray(j),ye=new Jt().fromArray(Me);function Ee(V,de,ie,Ie){let xe=new Uint8Array(4),we=t.createTexture();t.bindTexture(V,we),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<ie;Ve++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(de+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return we}let He={};He[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),He[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),He[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Ao),fe(!1),ge(Pf),oe(t.CULL_FACE),be(Or);function oe(V){h[V]!==!0&&(t.enable(V),h[V]=!0)}function Ce(V){h[V]!==!1&&(t.disable(V),h[V]=!1)}function De(V,de){return u[V]!==de?(t.bindFramebuffer(V,de),u[V]=de,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function se(V,de){let ie=v,Ie=!1;if(V){ie=f.get(de),ie===void 0&&(ie=[],f.set(de,ie));let xe=V.textures;if(ie.length!==xe.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ve=xe.length;we<Ve;we++)ie[we]=t.COLOR_ATTACHMENT0+we;ie.length=xe.length,Ie=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(ie)}function Se(V){return p!==V?(t.useProgram(V),p=V,!0):!1}let _e={[Ur]:t.FUNC_ADD,[ag]:t.FUNC_SUBTRACT,[lg]:t.FUNC_REVERSE_SUBTRACT};_e[cg]=t.MIN,_e[hg]=t.MAX;let W={[ug]:t.ZERO,[dg]:t.ONE,[fg]:t.SRC_COLOR,[Nf]:t.SRC_ALPHA,[yg]:t.SRC_ALPHA_SATURATE,[vg]:t.DST_COLOR,[mg]:t.DST_ALPHA,[pg]:t.ONE_MINUS_SRC_COLOR,[kf]:t.ONE_MINUS_SRC_ALPHA,[xg]:t.ONE_MINUS_DST_COLOR,[gg]:t.ONE_MINUS_DST_ALPHA,[bg]:t.CONSTANT_COLOR,[_g]:t.ONE_MINUS_CONSTANT_COLOR,[Mg]:t.CONSTANT_ALPHA,[wg]:t.ONE_MINUS_CONSTANT_ALPHA};function be(V,de,ie,Ie,xe,we,Ve,nt,ae,Oe){if(V===Or){m===!0&&(Ce(t.BLEND),m=!1);return}if(m===!1&&(oe(t.BLEND),m=!0),V!==og){if(V!==g||Oe!==C){if((y!==Ur||_!==Ur)&&(t.blendEquation(t.FUNC_ADD),y=Ur,_=Ur),Oe)switch(V){case Vo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case If:t.blendFunc(t.ONE,t.ONE);break;case Lf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Df:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",V);break}else switch(V){case Vo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case If:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Lf:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Df:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",V);break}w=null,M=null,S=null,x=null,b.set(0,0,0),R=0,g=V,C=Oe}return}xe=xe||de,we=we||ie,Ve=Ve||Ie,(de!==y||xe!==_)&&(t.blendEquationSeparate(_e[de],_e[xe]),y=de,_=xe),(ie!==w||Ie!==M||we!==S||Ve!==x)&&(t.blendFuncSeparate(W[ie],W[Ie],W[we],W[Ve]),w=ie,M=Ie,S=we,x=Ve),(nt.equals(b)===!1||ae!==R)&&(t.blendColor(nt.r,nt.g,nt.b,ae),b.copy(nt),R=ae),g=V,C=!1}function Ne(V,de){V.side===Tn?Ce(t.CULL_FACE):oe(t.CULL_FACE);let ie=V.side===dn;de&&(ie=!ie),fe(ie),V.blending===Vo&&V.transparent===!1?be(Or):be(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ie=V.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(V){L!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),L=V)}function ge(V){V!==ig?(oe(t.CULL_FACE),V!==E&&(V===Pf?t.cullFace(t.BACK):V===sg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),E=V}function Re(V){V!==k&&(z&&t.lineWidth(V),k=V)}function Ue(V,de,ie){V?(oe(t.POLYGON_OFFSET_FILL),(I!==de||P!==ie)&&(I=de,P=ie,o.getReversed()&&(de=-de,ie=-ie),t.polygonOffset(de,ie))):Ce(t.POLYGON_OFFSET_FILL)}function ze(V){V?oe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Je(V){V===void 0&&(V=t.TEXTURE0+U-1),ne!==V&&(t.activeTexture(V),ne=V)}function st(V,de,ie){ie===void 0&&(ne===null?ie=t.TEXTURE0+U-1:ie=ne);let Ie=q[ie];Ie===void 0&&(Ie={type:void 0,texture:void 0},q[ie]=Ie),(Ie.type!==V||Ie.texture!==de)&&(ne!==ie&&(t.activeTexture(ie),ne=ie),t.bindTexture(V,de||He[V]),Ie.type=V,Ie.texture=de)}function Y(){let V=q[ne];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pt(){try{t.compressedTexImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function it(){try{t.compressedTexImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function Ae(){try{t.texSubImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function O(){try{t.texSubImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function ve(){try{t.texStorage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function D(){try{t.texStorage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function T(){try{t.texImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function G(){try{t.texImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function re(V){return d[V]!==void 0?d[V]:t.getParameter(V)}function ee(V,de){d[V]!==de&&(t.pixelStorei(V,de),d[V]=de)}function pe(V){J.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),J.copy(V))}function Pe(V){ye.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),ye.copy(V))}function he(V,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let Ie=ie.get(V);Ie===void 0&&(Ie=t.getUniformBlockIndex(de,V.name),t.uniformBlockBinding(de,Ie,Ie),ie.set(V,Ie))}function ue(V,de,ie){let xe=c.get(de).get(V);l[xe]!==ie&&(t.bindBufferBase(t.UNIFORM_BUFFER,xe,ie),l[xe]=ie)}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,q={},u={},l={},f=new WeakMap,v=[],p=null,m=!1,g=null,y=null,w=null,M=null,_=null,S=null,x=null,b=new Ze(0,0,0),R=0,C=!1,L=null,E=null,k=null,I=null,P=null,J.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Ce,bindFramebuffer:De,drawBuffers:se,useProgram:Se,setBlending:be,setMaterial:Ne,setFlipSided:fe,setCullFace:ge,setLineWidth:Re,setPolygonOffset:Ue,setScissorTest:ze,activeTexture:Je,bindTexture:st,unbindTexture:Y,compressedTexImage2D:pt,compressedTexImage3D:it,texImage2D:T,texImage3D:G,pixelStorei:ee,getParameter:re,updateUBOMapping:he,uniformBlockBinding:ue,texStorage2D:ve,texStorage3D:D,texSubImage2D:Ae,texSubImage3D:O,compressedTexSubImage2D:Q,compressedTexSubImage3D:K,scissor:pe,viewport:Pe,reset:ke}}function jE(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set,u,f=new WeakMap,v=new Set,p=new FinalizationRegistry(D=>v.delete(D)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return m?new OffscreenCanvas(D,T):Oa("canvas")}function y(D,T,G){let re=1,ee=ve(D);if((ee.width>G||ee.height>G)&&(re=G/Math.max(ee.width,ee.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let pe=Math.floor(re*ee.width),Pe=Math.floor(re*ee.height);u===void 0&&(u=g(pe,Pe));let he=T?g(pe,Pe):u;return he.width=pe,he.height=Pe,he.getContext("2d").drawImage(D,0,0,pe,Pe),at("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+pe+"x"+Pe+")."),he}else return"data"in D&&at("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),D;return D}function w(D){return D.generateMipmaps}function M(D){t.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(D,T,G,re,ee,pe=!1){if(D!==null){if(t[D]!==void 0)return t[D];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Pe;re&&(Pe=e.get("EXT_texture_norm16"),Pe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=T;if(T===t.RED&&(G===t.FLOAT&&(he=t.R32F),G===t.HALF_FLOAT&&(he=t.R16F),G===t.UNSIGNED_BYTE&&(he=t.R8),G===t.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),G===t.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),T===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(he=t.R8UI),G===t.UNSIGNED_SHORT&&(he=t.R16UI),G===t.UNSIGNED_INT&&(he=t.R32UI),G===t.BYTE&&(he=t.R8I),G===t.SHORT&&(he=t.R16I),G===t.INT&&(he=t.R32I)),T===t.RG&&(G===t.FLOAT&&(he=t.RG32F),G===t.HALF_FLOAT&&(he=t.RG16F),G===t.UNSIGNED_BYTE&&(he=t.RG8),G===t.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),G===t.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),T===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(he=t.RG8UI),G===t.UNSIGNED_SHORT&&(he=t.RG16UI),G===t.UNSIGNED_INT&&(he=t.RG32UI),G===t.BYTE&&(he=t.RG8I),G===t.SHORT&&(he=t.RG16I),G===t.INT&&(he=t.RG32I)),T===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(he=t.RGB8UI),G===t.UNSIGNED_SHORT&&(he=t.RGB16UI),G===t.UNSIGNED_INT&&(he=t.RGB32UI),G===t.BYTE&&(he=t.RGB8I),G===t.SHORT&&(he=t.RGB16I),G===t.INT&&(he=t.RGB32I)),T===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(he=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(he=t.RGBA16UI),G===t.UNSIGNED_INT&&(he=t.RGBA32UI),G===t.BYTE&&(he=t.RGBA8I),G===t.SHORT&&(he=t.RGBA16I),G===t.INT&&(he=t.RGBA32I)),T===t.RGB&&(G===t.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),G===t.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(he=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(he=t.R11F_G11F_B10F)),T===t.RGBA){let ue=pe?Na:Pt.getTransfer(ee);G===t.FLOAT&&(he=t.RGBA32F),G===t.HALF_FLOAT&&(he=t.RGBA16F),G===t.UNSIGNED_BYTE&&(he=ue===kt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),G===t.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)}return(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function x(D,T){let G;return D?T===null||T===Ri||T===Br?G=t.DEPTH24_STENCIL8:T===mi?G=t.DEPTH32F_STENCIL8:T===Xo&&(G=t.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ri||T===Br?G=t.DEPTH_COMPONENT24:T===mi?G=t.DEPTH_COMPONENT32F:T===Xo&&(G=t.DEPTH_COMPONENT16),G}function b(D,T){return w(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Sn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function R(D){let T=new WeakRef(D);i.get(D).__ref=T,v.add(T),p.register(D,T,T)}function C(D){let T=i.get(D).__ref;T!==void 0&&(v.delete(T),p.unregister(T))}function L(D){k(D.target)}function E(D){I(D.target)}function k(D){D.removeEventListener("dispose",L),C(D),U(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&d.delete(D)}function I(D){D.removeEventListener("dispose",E),C(D),te(D)}function P(){for(let D of v){let T=D.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):k(T))}v.clear(),d.clear()}function U(D){let T=i.get(D);if(T.__webglInit===void 0)return;let G=D.source,re=f.get(G);if(re){let ee=re[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(D),Object.keys(re).length===0&&f.delete(G)}i.remove(D)}function z(D){let T=i.get(D);t.deleteTexture(T.__webglTexture);let G=D.source,re=f.get(G);delete re[T.__cacheKey],o.memory.textures--}function te(D){let T=i.get(D);T.__depthDisposeCallback&&T.__depthDisposeCallback();let G=D.depthTexture;if(G&&G.renderTarget===D&&k(G),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let pe=0;pe<T.__webglFramebuffer[ee].length;pe++)t.deleteFramebuffer(T.__webglFramebuffer[ee][pe]);else t.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)t.deleteFramebuffer(T.__webglFramebuffer[ee]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let re=D.textures;for(let ee=0,pe=re.length;ee<pe;ee++){let Pe=i.get(re[ee]);Pe.__webglTexture&&(t.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(re[ee])}i.remove(D)}let $=0;function ne(){$=0}function q(){return $}function j(D){$=D}function Me(){let D=$;return D>=s.maxTextures&&at("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,D}function J(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.mipmapsAutoUpdate),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ye(D,T){let G=i.get(D);if(D.isVideoTexture&&Q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){let re=D.image;if(re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(G,D,T);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+T)}function Ee(D,T){let G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Ne(G,D,T);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+T)}function He(D,T){let G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Ne(G,D,T);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+T)}function oe(D,T){let G=i.get(D);if(D.version>0&&G.__version!==D.version){fe(G,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+T)}let Ce={[Jc]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[jc]:t.MIRRORED_REPEAT},De={[wn]:t.NEAREST,[Eg]:t.NEAREST_MIPMAP_NEAREST,[ml]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[Ph]:t.LINEAR_MIPMAP_NEAREST,[ws]:t.LINEAR_MIPMAP_LINEAR},se={[Pg]:t.NEVER,[ep]:t.ALWAYS,[Ig]:t.LESS,[jf]:t.LEQUAL,[Lg]:t.EQUAL,[Qf]:t.GEQUAL,[Dg]:t.GREATER,[Ng]:t.NOTEQUAL};function Se(D,T){if(T.type===mi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Sn||T.magFilter===Ph||T.magFilter===ml||T.magFilter===ws||T.minFilter===Sn||T.minFilter===Ph||T.minFilter===ml||T.minFilter===ws)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,Ce[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,Ce[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,Ce[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,De[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,De[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==ml&&T.minFilter!==ws||T.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function _e(D,T){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L),R(T));let re=T.source,ee=f.get(re);ee===void 0&&(ee={},f.set(re,ee));let pe=J(T);if(pe!==D.__cacheKey){ee[pe]===void 0&&(ee[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[pe].usedTimes++;let Pe=ee[D.__cacheKey];Pe!==void 0&&(ee[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&z(T)),D.__cacheKey=pe,D.__webglTexture=ee[pe].texture}return G}function W(D,T,G){return Math.floor(Math.floor(D/G)/T)}function be(D,T,G,re){let pe=D.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,G,re,T.data);else{pe.sort((V,de)=>V.start-de.start);let Pe=0;for(let V=1;V<pe.length;V++){let de=pe[Pe],ie=pe[V],Ie=de.start+de.count,xe=W(ie.start,T.width,4),we=W(de.start,T.width,4);ie.start<=Ie+1&&xe===we&&W(ie.start+ie.count-1,T.width,4)===xe?de.count=Math.max(de.count,ie.start+ie.count-de.start):(++Pe,pe[Pe]=ie)}pe.length=Pe+1;let he=n.getParameter(t.UNPACK_ROW_LENGTH),ue=n.getParameter(t.UNPACK_SKIP_PIXELS),ke=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let V=0,de=pe.length;V<de;V++){let ie=pe[V],Ie=Math.floor(ie.start/4),xe=Math.ceil(ie.count/4),we=Ie%T.width,Ve=Math.floor(Ie/T.width),nt=xe,ae=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,we),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ve),n.texSubImage2D(t.TEXTURE_2D,0,we,Ve,nt,ae,G,re,T.data)}D.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,he),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function Ne(D,T,G){let re=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=t.TEXTURE_3D);let ee=_e(D,T),pe=T.source;n.bindTexture(re,D.__webglTexture,t.TEXTURE0+G);let Pe=i.get(pe);if(pe.version!==Pe.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ae=Pt.getPrimaries(Pt.workingColorSpace),Oe=T.colorSpace===Ts?null:Pt.getPrimaries(T.colorSpace),$e=T.colorSpace===Ts||ae===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment);let ue=y(T.image,!1,s.maxTextureSize);ue=K(T,ue);let ke=r.convert(T.format,T.colorSpace),V=r.convert(T.type),de=S(T.internalFormat,ke,V,T.normalized,T.colorSpace,T.isVideoTexture);Se(re,T);let ie,Ie=T.mipmaps,xe=T.isVideoTexture!==!0,we=Pe.__version===void 0||ee===!0,Ve=pe.dataReady,nt=b(T,ue);if(T.isDepthTexture)de=x(T.format===Ss,T.type),we&&(xe?n.texStorage2D(t.TEXTURE_2D,1,de,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,de,ue.width,ue.height,0,ke,V,null));else if(T.isDataTexture)if(Ie.length>0){xe&&we&&n.texStorage2D(t.TEXTURE_2D,nt,de,Ie[0].width,Ie[0].height);for(let ae=0,Oe=Ie.length;ae<Oe;ae++)ie=Ie[ae],xe?Ve&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ie.width,ie.height,ke,V,ie.data):n.texImage2D(t.TEXTURE_2D,ae,de,ie.width,ie.height,0,ke,V,ie.data);T.generateMipmaps=!1}else xe?(we&&n.texStorage2D(t.TEXTURE_2D,nt,de,ue.width,ue.height),Ve&&be(T,ue,ke,V)):n.texImage2D(t.TEXTURE_2D,0,de,ue.width,ue.height,0,ke,V,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,de,Ie[0].width,Ie[0].height,ue.depth);for(let ae=0,Oe=Ie.length;ae<Oe;ae++)if(ie=Ie[ae],T.format!==oi)if(ke!==null)if(xe){if(Ve)if(T.layerUpdates.size>0){let $e=up(ie.width,ie.height,T.format,T.type);for(let Le of T.layerUpdates){let Ke=ie.data.subarray(Le*$e/ie.data.BYTES_PER_ELEMENT,(Le+1)*$e/ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,Le,ie.width,ie.height,1,ke,Ke)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ie.width,ie.height,ue.depth,ke,ie.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,de,ie.width,ie.height,ue.depth,0,ie.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ie.width,ie.height,ue.depth,ke,V,ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,de,ie.width,ie.height,ue.depth,0,ke,V,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{xe&&we&&n.texStorage2D(t.TEXTURE_2D,nt,de,Ie[0].width,Ie[0].height);for(let ae=0,Oe=Ie.length;ae<Oe;ae++)ie=Ie[ae],T.format!==oi?ke!==null?xe?Ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,ie.width,ie.height,ke,ie.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,de,ie.width,ie.height,0,ie.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ve&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ie.width,ie.height,ke,V,ie.data):n.texImage2D(t.TEXTURE_2D,ae,de,ie.width,ie.height,0,ke,V,ie.data)}else if(T.isDataArrayTexture)if(xe){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,de,ue.width,ue.height,ue.depth),Ve)if(T.layerUpdates.size>0){let ae=up(ue.width,ue.height,T.format,T.type);for(let Oe of T.layerUpdates){let $e=ue.data.subarray(Oe*ae/ue.data.BYTES_PER_ELEMENT,(Oe+1)*ae/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Oe,ue.width,ue.height,1,ke,V,$e)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ke,V,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,ue.width,ue.height,ue.depth,0,ke,V,ue.data);else if(T.isData3DTexture)xe?(we&&n.texStorage3D(t.TEXTURE_3D,nt,de,ue.width,ue.height,ue.depth),Ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ke,V,ue.data)):n.texImage3D(t.TEXTURE_3D,0,de,ue.width,ue.height,ue.depth,0,ke,V,ue.data);else if(T.isFramebufferTexture){if(we)if(xe)n.texStorage2D(t.TEXTURE_2D,nt,de,ue.width,ue.height);else{let ae=ue.width,Oe=ue.height;for(let $e=0;$e<nt;$e++)n.texImage2D(t.TEXTURE_2D,$e,de,ae,Oe,0,ke,V,null),ae>>=1,Oe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in t){let ae=t.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ue.parentNode!==ae){ae.appendChild(ue),d.add(T),ae.onpaint=Oe=>{let $e=Oe.changedElements;for(let Le of d)$e.includes(Le.image)&&(Le.needsUpdate=!0)},ae.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ue);else{let $e=t.RGBA,Le=t.RGBA,Ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,$e,Le,Ke,ue)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(xe&&we){let ae=ve(Ie[0]);n.texStorage2D(t.TEXTURE_2D,nt,de,ae.width,ae.height)}for(let ae=0,Oe=Ie.length;ae<Oe;ae++)ie=Ie[ae],xe?Ve&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ke,V,ie):n.texImage2D(t.TEXTURE_2D,ae,de,ke,V,ie);T.generateMipmaps=!1}else if(xe){if(we){let ae=ve(ue);n.texStorage2D(t.TEXTURE_2D,nt,de,ae.width,ae.height)}Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,V,ue)}else n.texImage2D(t.TEXTURE_2D,0,de,ke,V,ue);w(T)&&T.mipmapsAutoUpdate===!0&&M(re),Pe.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,G){if(T.image.length!==6)return;let re=_e(D,T),ee=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+G);let pe=i.get(ee);if(ee.version!==pe.__version||re===!0){n.activeTexture(t.TEXTURE0+G);let Pe=Pt.getPrimaries(Pt.workingColorSpace),he=T.colorSpace===Ts?null:Pt.getPrimaries(T.colorSpace),ue=T.colorSpace===Ts||Pe===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ke=T.isCompressedTexture||T.image[0].isCompressedTexture,V=T.image[0]&&T.image[0].isDataTexture,de=[];for(let Le=0;Le<6;Le++)!ke&&!V?de[Le]=y(T.image[Le],!0,s.maxCubemapSize):de[Le]=V?T.image[Le].image:T.image[Le],de[Le]=K(T,de[Le]);let ie=de[0],Ie=r.convert(T.format,T.colorSpace),xe=r.convert(T.type),we=S(T.internalFormat,Ie,xe,T.normalized,T.colorSpace),Ve=T.isVideoTexture!==!0,nt=pe.__version===void 0||re===!0,ae=ee.dataReady,Oe=b(T,ie);Se(t.TEXTURE_CUBE_MAP,T);let $e;if(T.isDepthTexture){if(we=x(T.format===Ss,T.type),nt)if(Ve)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,we,ie.width,ie.height);else for(let Le=0;Le<6;Le++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,ie.width,ie.height,0,Ie,xe,null)}else if(ke){Ve&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,we,ie.width,ie.height);for(let Le=0;Le<6;Le++){$e=de[Le].mipmaps;for(let Ke=0;Ke<$e.length;Ke++){let ut=$e[Ke];T.format!==oi?Ie!==null?Ve?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke,0,0,ut.width,ut.height,Ie,ut.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke,we,ut.width,ut.height,0,ut.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke,0,0,ut.width,ut.height,Ie,xe,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke,we,ut.width,ut.height,0,Ie,xe,ut.data)}}}else{if($e=T.mipmaps,Ve&&nt){$e.length>0&&Oe++;let Le=ve(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,we,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(V){Ve?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,de[Le].width,de[Le].height,Ie,xe,de[Le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,de[Le].width,de[Le].height,0,Ie,xe,de[Le].data);for(let Ke=0;Ke<$e.length;Ke++){let yt=$e[Ke].image[Le].image;Ve?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke+1,0,0,yt.width,yt.height,Ie,xe,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke+1,we,yt.width,yt.height,0,Ie,xe,yt.data)}}else{Ve?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ie,xe,de[Le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,Ie,xe,de[Le]);for(let Ke=0;Ke<$e.length;Ke++){let ut=$e[Ke];Ve?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke+1,0,0,Ie,xe,ut.image[Le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke+1,we,Ie,xe,ut.image[Le])}}}w(T)&&T.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),pe.__version=ee.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ge(D,T,G,re,ee,pe){let Pe=r.convert(G.format,G.colorSpace),he=r.convert(G.type),ue=S(G.internalFormat,Pe,he,G.normalized,G.colorSpace),ke=i.get(T),V=i.get(G);if(V.__renderTarget=T,!ke.__hasExternalTextures){let de=Math.max(1,T.width>>pe),ie=Math.max(1,T.height>>pe);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,pe,ue,de,ie,T.depth,0,Pe,he,null):n.texImage2D(ee,pe,ue,de,ie,0,Pe,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),O(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,V.__webglTexture,0,Ae(T)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,V.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(D,T,G){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){let re=T.depthTexture,ee=re&&re.isDepthTexture?re.type:null,pe=x(T.stencilBuffer,ee),Pe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;O(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae(T),pe,T.width,T.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae(T),pe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,D)}else{let re=T.textures;for(let ee=0;ee<re.length;ee++){let pe=re[ee],Pe=r.convert(pe.format,pe.colorSpace),he=r.convert(pe.type),ue=S(pe.internalFormat,Pe,he,pe.normalized,pe.colorSpace);O(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae(T),ue,T.width,T.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae(T),ue,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ue,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(D,T,G){let re=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(T.depthTexture);ee.__renderTarget=T;let pe=re?T.depthTexture.image[0]:T.depthTexture.image;(!ee.__webglTexture||pe.width!==T.width||pe.height!==T.height)&&(pe.width=T.width,pe.height=T.height,T.depthTexture.needsUpdate=!0),re?oe(T.depthTexture,0):ye(T.depthTexture,0);let Pe=ee.__webglTexture,he=Ae(T),ue=re?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ke=T.depthTexture.format===Ss?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(T.depthTexture.format===_s)O(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ke,ue,Pe,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ke,ue,Pe,0);else if(T.depthTexture.format===Ss)O(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ke,ue,Pe,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ke,ue,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(D){let T=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let re=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){let ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",ee)};re.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=re}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let re=0;re<6;re++)Ue(T.__webglFramebuffer[re],D,re);else D.texture.mipmaps.length>0?Ue(T.__webglFramebuffer[0],D,0):Ue(T.__webglFramebuffer,D,0);else if(G){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=t.createRenderbuffer(),Re(T.__webglDepthbuffer[re],D,!1);else{let ee=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,pe)}}else if(D.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Re(T.__webglDepthbuffer,D,!1);else{let ee=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,pe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(D,T,G){let re=i.get(D);T!==void 0&&ge(re.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ze(D)}function st(D){let T=D.texture,G=i.get(D),re=i.get(T);D.addEventListener("dispose",E),R(D);let ee=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=T.version,o.memory.textures++),pe){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(T.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let ue=0;ue<T.mipmaps.length;ue++)G.__webglFramebuffer[he][ue]=t.createFramebuffer()}else G.__webglFramebuffer[he]=t.createFramebuffer()}else{if(T.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)G.__webglFramebuffer[he]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let he=0,ue=ee.length;he<ue;he++){let ke=i.get(ee[he]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&O(D)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){let ue=ee[he];G.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[he]);let ke=r.convert(ue.format,ue.colorSpace),V=r.convert(ue.type),de=S(ue.internalFormat,ke,V,ue.normalized,ue.colorSpace,D.isXRRenderTarget===!0),ie=Ae(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,de,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,G.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(G.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Se(t.TEXTURE_CUBE_MAP,T);for(let he=0;he<6;he++)if(T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)ge(G.__webglFramebuffer[he][ue],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ue);else ge(G.__webglFramebuffer[he],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);w(T)?M(t.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}else if(Pe){for(let he=0,ue=ee.length;he<ue;he++){let ke=ee[he],V=i.get(ke),de=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,V.__webglTexture),Se(de,ke),ge(G.__webglFramebuffer,D,ke,t.COLOR_ATTACHMENT0+he,de,0),w(ke)&&M(de)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,re.__webglTexture),Se(he,T),T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)ge(G.__webglFramebuffer[ue],D,T,t.COLOR_ATTACHMENT0,he,ue);else ge(G.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,he,0);w(T)?M(he):T.mipmaps.length>0&&t.texParameteri(he,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}D.depthBuffer&&ze(D)}function Y(D){let T=D.textures;for(let G=0,re=T.length;G<re;G++){let ee=T[G];if(w(ee)&&ee.mipmapsAutoUpdate===!0){let pe=_(D),Pe=i.get(ee).__webglTexture;n.bindTexture(pe,Pe),M(pe),n.unbindTexture()}}}let pt=[];function it(D){if(D.samples>0){if(O(D)===!1){let T=D.textures,G=D.width,re=D.height,ee=t.COLOR_BUFFER_BIT,pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(D),he=T.length>1;if(he)for(let ke=0;ke<T.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);let V=i.get(T[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,V,0)}t.blitFramebuffer(0,0,G,re,0,0,G,re,ee,t.NEAREST),l===!0&&(pt.length=0,pt.push(t.COLOR_ATTACHMENT0+ke),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&pt.push(pe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ke=0;ke<T.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);let V=i.get(T[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,V,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ae(D){return Math.min(s.maxSamples,D.samples)}function O(D){let T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Q(D){let T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function K(D,T){let G=D.colorSpace,re=D.format,ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Da&&G!==Ts&&(Pt.getTransfer(G)===kt?(re!==oi||ee!==ri)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",G)),T}function ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=ne,this.getTextureUnits=q,this.setTextureUnits=j,this.setTexture2D=ye,this.setTexture2DArray=Ee,this.setTexture3D=He,this.setTextureCube=oe,this.rebindTextures=Je,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=O,this.dispose=P}function QE(t,e){function n(i,s=Ts){let r,o=Pt.getTransfer(s);if(i===ri)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$f)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xf)return t.BYTE;if(i===Yf)return t.SHORT;if(i===Xo)return t.UNSIGNED_SHORT;if(i===Ih)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Ci)return t.HALF_FLOAT;if(i===Zf)return t.ALPHA;if(i===Kf)return t.RGB;if(i===oi)return t.RGBA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Ss)return t.DEPTH_STENCIL;if(i===Nh)return t.RED;if(i===kh)return t.RED_INTEGER;if(i===js)return t.RG;if(i===Oh)return t.RG_INTEGER;if(i===Uh)return t.RGBA_INTEGER;if(i===gl||i===vl||i===xl||i===yl)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===Bh||i===zh||i===Hh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gh||i===Vh||i===Wh||i===Xh||i===Yh||i===bl||i===qh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gh||i===Vh)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wh)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xh)return r.COMPRESSED_R11_EAC;if(i===Yh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bl)return r.COMPRESSED_RG11_EAC;if(i===qh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$h||i===Zh||i===Kh||i===Jh||i===jh||i===Qh||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$h)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zh)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kh)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jh)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jh)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qh)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===su)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ou)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===cu||i===hu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lu)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uu||i===du||i===_l||i===fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`,Tp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Ka(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Bn({vertexShader:e2,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new Ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ep=class extends zi{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,v=null,p=typeof XRWebGLBinding<"u",m=new Tp,g={},y=n.getContextAttributes(),w=null,M=null,_=[],S=[],x=new Be,b=null,R=null,C=new In;C.viewport=new Jt;let L=new In;L.viewport=new Jt;let E=[C,L],k=new Eh,I=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ye=_[J];return ye===void 0&&(ye=new Io,_[J]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(J){let ye=_[J];return ye===void 0&&(ye=new Io,_[J]=ye),ye.getGripSpace()},this.getHand=function(J){let ye=_[J];return ye===void 0&&(ye=new Io,_[J]=ye),ye.getHandSpace()};function U(J){let ye=S.indexOf(J.inputSource);if(ye===-1)return;let Ee=_[ye];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,c||o),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",te);for(let J=0;J<_.length;J++){let ye=S[J];ye!==null&&(S[J]=null,_[J].disconnect(ye))}I=null,P=null,m.reset();for(let J in g)delete g[J];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,M=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),R!==null){let J=R.camera;J.fov=R.fov,J.zoom=R.zoom,J.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&p&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,oe=null;y.depth&&(oe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=y.stencil?Ss:_s,He=y.stencil?Br:Ri);let Ce={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ii(u.textureWidth,u.textureHeight,{format:oi,type:ri,depthTexture:new Ms(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ii(f.framebufferWidth,f.framebufferHeight,{format:oi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(J){for(let ye=0;ye<J.removed.length;ye++){let Ee=J.removed[ye],He=S.indexOf(Ee);He>=0&&(S[He]=null,_[He].disconnect(Ee))}for(let ye=0;ye<J.added.length;ye++){let Ee=J.added[ye],He=S.indexOf(Ee);if(He===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=S.length){S.push(Ee),He=Ce;break}else if(S[Ce]===null){S[Ce]=Ee,He=Ce;break}if(He===-1)break}let oe=_[He];oe&&oe.connect(Ee)}}function $(J,ye){ye===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ye.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ye=J.near,Ee=J.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),k.near=L.near=C.near=ye,k.far=L.far=C.far=Ee,(I!==k.near||P!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,P=k.far),k.layers.mask=J.layers.mask|6,C.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let He=J.parent,oe=k.cameras;$(k,He);for(let Ce=0;Ce<oe.length;Ce++)$(oe[Ce],He);k.projectionMatrix.copy(C.projectionMatrix),k.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&J.isPerspectiveCamera&&(R={camera:J,fov:J.fov,zoom:J.zoom}),ne(J,k,He)};function ne(J,ye,Ee){Ee===null?J.matrix.copy(ye.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ye.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ye.projectionMatrix),J.projectionMatrixInverse.copy(ye.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Co*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return g[J]};let q=null;function j(J,ye){if(h=ye.getViewerPose(c||o),v=ye,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let He=!1;Ee.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let se=0;se<Ee.length;se++){let Se=Ee[se],_e=null;if(f!==null)_e=f.getViewport(Se);else{let be=d.getViewSubImage(u,Se);_e=be.viewport,se===0&&(e.setRenderTargetTextures(M,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(M))}let W=E[se];W===void 0&&(W=new In,W.layers.enable(se),W.viewport=new Jt,E[se]=W),W.matrix.fromArray(Se.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Se.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(_e.x,_e.y,_e.width,_e.height),se===0&&(k.matrix.copy(W.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(W)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){d=i.getBinding();let se=d.getDepthInformation(Ee[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(oe&&oe.includes("camera-access")&&p){e.state.unbindTexture(),d=i.getBinding();for(let se=0;se<Ee.length;se++){let Se=Ee[se].camera;if(Se){let _e=g[Se];_e||(_e=new Ka,g[Se]=_e);let W=d.getCameraImage(Se);_e.sourceTexture=W}}}}for(let Ee=0;Ee<_.length;Ee++){let He=S[Ee],oe=_[Ee];He!==null&&oe!==void 0&&oe.update(He,ye,c||o)}q&&q(J,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),v=null}let Me=new mv;Me.setAnimationLoop(j),this.setAnimationLoop=function(J){q=J},this.dispose=function(){}}},n2=new bt,Tv=new ft;Tv.set(-1,0,0,0,1,0,0,0,1);function i2(t,e){function n(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,lp(t)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),v(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),p(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,n(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,n(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,n(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,n(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,n(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tv),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,n(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,n(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,n(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,n(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function p(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function s2(t,e,n,i){let s={},r={};function o(y,w){let M=w.program;i.uniformBlockBinding(y,M,s[y.id])}function a(y,w){let M=s[y.id];M===void 0&&(v(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let _=w.program;i.updateUBOMapping(y,_);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let w=t.createBuffer(),M=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,M,_),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],M=y.uniforms,_=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let S=0,x=M.length;S<x;S++){let b=M[S];if(Array.isArray(b))for(let R=0,C=b.length;R<C;R++)h(b[R],S,R,_);else h(b,S,0,_)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,w,M,_){if(u(y,w,M,_)===!0){let S=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let R=0;R<x.length;R++){let C=x[R],L=p(C,!0);d(C,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,y.__data)}}function d(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function u(y,w,M,_){let S=y.value,x=w+"_"+M;if(Array.isArray(S)){_[x]===void 0&&(_[x]=[]);let b=_[x],R=!1;for(let C=0;C<S.length;C++)f(S[C],b,C)===!0&&(R=!0);return R}return f(S,_,x)}function f(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let _=w[M];if(typeof y=="number"||typeof y=="boolean"){if(_!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(_.equals(y)===!1)return _.copy(y),!0}}return!1}function v(y){let w=y.uniforms,M=0,_=16;for(let x=0,b=w.length;x<b;x++){let R=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,L=R.length;C<L;C++){let E=R[C],k=Array.isArray(E.value)?E.value:[E.value],I=Array.isArray(w[x])||Array.isArray(E.value),P=M;for(let z=0,te=k.length;z<te;z++){let $=k[z],ne=p($,I),q=M%_,j=q%ne.boundary,Me=q+j;M+=j,Me!==0&&_-Me<ne.storage&&(M+=_-Me),z===0&&(P=M),M+=ne.storage}let U=E.type==="int"?Int32Array:E.type==="uint"?Uint32Array:Float32Array;E.__data=new U((M-P)/Float32Array.BYTES_PER_ELEMENT),E.__offset=P}}let S=M%_;return S>0&&(M+=_-S),y.__size=M,y.__cache={},this}function p(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):at("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let w=y.target;w.removeEventListener("dispose",m),t.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)t.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var r2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function o2(){return Xi===null&&(Xi=new Pr(r2,16,16,js,Ci),Xi.name="DFG_LUT",Xi.minFilter=Sn,Xi.magFilter=Sn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var yu=class{constructor(e={}){let{canvas:n=kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ri}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;let p=f,m=new Set([Uh,Oh,kh]),g=new Set([ri,Ri,Xo,Br,Lh,Dh]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},_=null,S=null,x=[],b=[],R=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,E=null,k=null,I=null,P=null;this._outputColorSpace=un;let U=0,z=0,te=null,$=-1,ne=null,q=new Jt,j=new Jt,Me=null,J=new Ze(0),ye=0,Ee=n.width,He=n.height,oe=1,Ce=null,De=null,se=new Jt(0,0,Ee,He),Se=new Jt(0,0,Ee,He),_e=!1,W=new Ir,be=new ih,Ne=!1,fe=!1,ge=new bt,Re=new H,Ue=new Jt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function st(){return te===null?oe:1}let Y=i;function pt(N,Z){return n.getContext(N,Z)}let it,Ae,O,Q,K,ve,D,T,G,re,ee,pe,Pe,he,ue,ke,V,de,ie,Ie,xe,we,Ve;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",$e,!1),n.addEventListener("webglcontextcreationerror",Le,!1),Y===null){let Z="webgl2";if(Y=pt(Z,N),Y===null)throw pt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(N){throw n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),lt("WebGLRenderer: "+N.message),N}function nt(){it=new vT(Y),it.init(),xe=new QE(Y,it),Ae=new oT(Y,it,e,xe),O=new JE(Y,it),Ae.reversedDepthBuffer&&u&&O.buffers.depth.setReversed(!0),k=Y.createFramebuffer(),I=Y.createFramebuffer(),P=Y.createFramebuffer(),Q=new bT(Y),K=new UE,ve=new jE(Y,it,O,K,Ae,xe,Q),D=new gT(C),T=new MM(Y),we=new sT(Y,T),G=new xT(Y,T,Q,we),re=new MT(Y,G,T,we,Q),de=new _T(Y,Ae,ve),ue=new aT(K),ee=new OE(C,D,it,Ae,we,ue),pe=new i2(C,K),Pe=new BE,he=new XE(it),V=new iT(C,D,O,re,v,l),ke=new KE(C,re,Ae),Ve=new s2(Y,Q,Ae,O),ie=new rT(Y,it,Q),Ie=new yT(Y,it,Q),Q.programs=ee.programs,C.capabilities=Ae,C.extensions=it,C.properties=K,C.renderLists=Pe,C.shadowMap=ke,C.state=O,C.info=Q}p!==ri&&(R=new ST(p,n.width,n.height,a,s,r));let ae=new Ep(C,Y);this.xr=ae,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let N=it.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=it.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(N){N!==void 0&&(oe=N,this.setSize(Ee,He,!1))},this.getSize=function(N){return N.set(Ee,He)},this.setSize=function(N,Z,me=!0){if(ae.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=N,He=Z,n.width=Math.floor(N*oe),n.height=Math.floor(Z*oe),me===!0&&(n.style.width=N+"px",n.style.height=Z+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(Ee*oe,He*oe).floor()},this.setDrawingBufferSize=function(N,Z,me){Ee=N,He=Z,oe=me,n.width=Math.floor(N*me),n.height=Math.floor(Z*me),this.setViewport(0,0,N,Z)},this.setEffects=function(N){if(p===ri){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Z=0;Z<N.length;Z++)if(N[Z].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(q)},this.getViewport=function(N){return N.copy(se)},this.setViewport=function(N,Z,me,le){N.isVector4?se.set(N.x,N.y,N.z,N.w):se.set(N,Z,me,le),O.viewport(q.copy(se).multiplyScalar(st()).round())},this.getScissor=function(N){return N.copy(Se)},this.setScissor=function(N,Z,me,le){N.isVector4?Se.set(N.x,N.y,N.z,N.w):Se.set(N,Z,me,le),O.scissor(j.copy(Se).multiplyScalar(st()).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(N){O.setScissorTest(_e=N)},this.setOpaqueSort=function(N){Ce=N},this.setTransparentSort=function(N){De=N},this.getClearColor=function(N){return N.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(N=!0,Z=!0,me=!0){let le=0;if(N){let ce=!1;if(te!==null){let We=te.texture.format;ce=m.has(We)}if(ce){let We=te.texture.type,je=g.has(We),Ge=V.getClearColor(),Ye=V.getClearAlpha(),tt=Ge.r,Fe=Ge.g,St=Ge.b;je?(y[0]=tt,y[1]=Fe,y[2]=St,y[3]=Ye,Y.clearBufferuiv(Y.COLOR,0,y)):(w[0]=tt,w[1]=Fe,w[2]=St,w[3]=Ye,Y.clearBufferiv(Y.COLOR,0,w))}else le|=Y.COLOR_BUFFER_BIT}Z&&(le|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(le|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Y.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),E=N},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),V.dispose(),Pe.dispose(),he.dispose(),ve.dispose(),K.dispose(),D.dispose(),re.dispose(),G.dispose(),we.dispose(),Ve.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ut),ae.removeEventListener("sessionend",Wt),vn.stop()};function Oe(N){N.preventDefault(),Ua("WebGLRenderer: Context Lost."),L=!0}function $e(){Ua("WebGLRenderer: Context Restored."),L=!1;let N=Q.autoReset,Z=ke.enabled,me=ke.autoUpdate,le=ke.needsUpdate,ce=ke.type;nt(),Q.autoReset=N,ke.enabled=Z,ke.autoUpdate=me,ke.needsUpdate=le,ke.type=ce}function Le(N){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ke(N){let Z=N.target;Z.removeEventListener("dispose",Ke),ut(Z)}function ut(N){yt(N),K.remove(N)}function yt(N){let Z=K.get(N).programs;Z!==void 0&&(Z.forEach(function(me){ee.releaseProgram(me)}),N.isShaderMaterial&&ee.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,me,le,ce,We){Z===null&&(Z=ze);let je=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ge=Wd(N,Z,me,le,ce);O.setMaterial(le,je);let Ye=me.index,tt=1;if(le.wireframe===!0){if(Ye=G.getWireframeAttribute(me),Ye===void 0)return;tt=2}let Fe=me.drawRange,St=me.attributes.position,Qe=Fe.start*tt,Tt=(Fe.start+Fe.count)*tt;We!==null&&(Qe=Math.max(Qe,We.start*tt),Tt=Math.min(Tt,(We.start+We.count)*tt)),Ye!==null?(Qe=Math.max(Qe,0),Tt=Math.min(Tt,Ye.count)):St!=null&&(Qe=Math.max(Qe,0),Tt=Math.min(Tt,St.count));let nn=Tt-Qe;if(nn<0||nn===1/0)return;we.setup(ce,le,Ge,me,Ye);let Ft,Dt=ie;if(Ye!==null&&(Ft=T.get(Ye),Dt=Ie,Dt.setIndex(Ft)),ce.isMesh)le.wireframe===!0?(O.setLineWidth(le.wireframeLinewidth*st()),Dt.setMode(Y.LINES)):Dt.setMode(Y.TRIANGLES);else if(ce.isLine){let yn=le.linewidth;yn===void 0&&(yn=1),O.setLineWidth(yn*st()),ce.isLineSegments?Dt.setMode(Y.LINES):ce.isLineLoop?Dt.setMode(Y.LINE_LOOP):Dt.setMode(Y.LINE_STRIP)}else ce.isPoints?Dt.setMode(Y.POINTS):ce.isSprite&&Dt.setMode(Y.TRIANGLES);if(ce.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let yn=ce._multiDrawStarts,et=ce._multiDrawCounts,Pn=ce._multiDrawCount,Lt=Ye?T.get(Ye).bytesPerElement:1,us=K.get(le).currentProgram.getUniforms();for(let bn=0;bn<Pn;bn++)us.setValue(Y,"_gl_DrawID",bn),Dt.render(yn[bn]/Lt,et[bn])}else if(ce.isInstancedMesh)Dt.renderInstances(Qe,nn,ce.count);else if(me.isInstancedBufferGeometry){let yn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,et=Math.min(me.instanceCount,yn);Dt.renderInstances(Qe,nn,et)}else Dt.render(Qe,nn)};function Ot(N,Z,me,le){E!==null&&N.isNodeMaterial&&E.setObject(le,N),Ne===!0&&ue.setState(N,me,!1),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=dn,N.needsUpdate=!0,wr(N,Z,le),N.side=Js,N.needsUpdate=!0,wr(N,Z,le),N.side=Tn):wr(N,Z,le)}this.compile=function(N,Z,me=null){me===null&&(me=N),E!==null&&E.renderStart(N,Z,me),S=he.get(me),S.init(Z),b.push(S),me.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Z.layers)&&(S.pushLight(ce),ce.castShadow&&S.pushShadow(ce))}),N!==me&&N.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Z.layers)&&(S.pushLight(ce),ce.castShadow&&S.pushShadow(ce))}),S.setupLights(),E!==null&&E.updateLights(S.state.lightsArray),fe=this.localClippingEnabled,Ne=ue.init(this.clippingPlanes,fe),Ne===!0&&ue.setGlobalState(this.clippingPlanes,Z),E!==null&&ke.render(S.state.shadowsArray,me,Z);let le=new Set;return N.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let We=ce.material;if(We)if(Array.isArray(We))for(let je=0;je<We.length;je++){let Ge=We[je];Ot(Ge,me,Z,ce),le.add(Ge)}else Ot(We,me,Z,ce),le.add(We)}),S=b.pop(),E!==null&&E.renderEnd(),le},this.compileAsync=function(N,Z,me=null){let le=this.compile(N,Z,me);return new Promise(ce=>{function We(){if(le.forEach(function(je){let Ye=K.get(je).currentProgram;(Ye===void 0||Ye.isReady())&&le.delete(je)}),le.size===0){ce(N);return}setTimeout(We,10)}it.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let qt=null;function Vt(N){qt&&qt(N)}function Ut(){vn.stop()}function Wt(){vn.start()}let vn=new mv;vn.setAnimationLoop(Vt),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(N){qt=N,ae.setAnimationLoop(N),N===null?vn.stop():vn.start()},ae.addEventListener("sessionstart",Ut),ae.addEventListener("sessionend",Wt),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;E!==null&&E.renderStart(N,Z);let me=ae.enabled===!0&&ae.isPresenting===!0,le=R!==null&&(te===null||me)&&R.begin(C,te);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Z),Z=ae.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,Z,te),S=he.get(N,b.length),S.init(Z),S.state.textureUnits=ve.getTextureUnits(),b.push(S),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?be.setFromArrayCamera(Z):W.setFromProjectionMatrix(ge,pi,Z.reversedDepth),fe=this.localClippingEnabled,Ne=ue.init(this.clippingPlanes,fe),_=Pe.get(N,x.length),_.init(),x.push(_),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let je=C.xr.getDepthSensingMesh();je!==null&&Cn(je,Z,-1/0,C.sortObjects)}Cn(N,Z,0,C.sortObjects),_.finish(),E!==null&&E.updateLights(S.state.lightsArray),C.sortObjects===!0&&_.sort(Ce,De),Je=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Je&&V.addToRenderList(_,N),this.info.autoReset===!0&&this.info.reset(),Ne===!0&&ue.beginShadows();let ce=S.state.shadowsArray;if(ke.render(ce,N,Z),Ne===!0&&ue.endShadows(),(le&&R.hasRenderPass())===!1){let je=_.opaque,Ge=_.transmissive;if(S.setupLights(),Z.isArrayCamera){let Ye=Z.cameras;if(Ge.length>0)for(let tt=0,Fe=Ye.length;tt<Fe;tt++){let St=Ye[tt];On(je,Ge,N,St)}Je&&V.render(N);for(let tt=0,Fe=Ye.length;tt<Fe;tt++){let St=Ye[tt];xn(_,N,St,St.viewport)}}else Ge.length>0&&On(je,Ge,N,Z),Je&&V.render(N),xn(_,N,Z)}te!==null&&z===0&&(ve.updateMultisampleRenderTarget(te),ve.updateRenderTargetMipmap(te)),le&&R.end(C),N.isScene===!0&&N.onAfterRender(C,N,Z),we.resetDefaultState(),$=-1,ne=null,b.pop(),b.length>0?(S=b[b.length-1],ve.setTextureUnits(S.state.textureUnits),Ne===!0&&ue.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?_=x[x.length-1]:_=null,E!==null&&E.renderEnd()};function Cn(N,Z,me,le){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)me=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){let je=Z.isArrayCamera?be:W;if(!N.frustumCulled||N.intersectsFrustum(je)){le&&Ue.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);let Ge=re.update(N),Ye=N.material;Ye.visible&&_.push(N,Ge,Ye,me,Ue.z,null,Z)}}else if(N.isMesh||N.isLine||N.isPoints){let je=Z.isArrayCamera?be:W;if(!N.frustumCulled||N.intersectsFrustum(je)){let Ge=re.update(N),Ye=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ue.copy(N.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ue.copy(Ge.boundingSphere.center)),Ue.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray(Ye)){let tt=Ge.groups;for(let Fe=0,St=tt.length;Fe<St;Fe++){let Qe=tt[Fe],Tt=Ye[Qe.materialIndex];Tt&&Tt.visible&&_.push(N,Ge,Tt,me,Ue.z,Qe,Z)}}else Ye.visible&&_.push(N,Ge,Ye,me,Ue.z,null,Z)}}}let We=N.children;for(let je=0,Ge=We.length;je<Ge;je++)Cn(We[je],Z,me,le)}function xn(N,Z,me,le){let{opaque:ce,transmissive:We,transparent:je}=N;S.setupLightsView(me),Ne===!0&&ue.setGlobalState(C.clippingPlanes,me),le&&O.viewport(q.copy(le)),ce.length>0&&cs(ce,Z,me),We.length>0&&cs(We,Z,me),je.length>0&&cs(je,Z,me),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function On(N,Z,me,le){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[le.id]===void 0){let Qe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[le.id]=new ii(1,1,{generateMipmaps:!0,type:Qe?Ci:ri,minFilter:ws,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let We=S.state.transmissionRenderTarget[le.id],je=le.viewport||q;We.setSize(je.z*C.transmissionResolutionScale,je.w*C.transmissionResolutionScale);let Ge=C.getRenderTarget(),Ye=C.getActiveCubeFace(),tt=C.getActiveMipmapLevel();C.setRenderTarget(We),C.getClearColor(J),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),Je&&V.render(me);let Fe=C.toneMapping;C.toneMapping=Wi;let St=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),S.setupLightsView(le),Ne===!0&&ue.setGlobalState(C.clippingPlanes,le),cs(N,me,le),ve.updateMultisampleRenderTarget(We),ve.updateRenderTargetMipmap(We),it.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Tt=0,nn=Z.length;Tt<nn;Tt++){let Ft=Z[Tt],{object:Dt,geometry:yn,material:et,group:Pn}=Ft;if(et.side===Tn&&Dt.layers.test(le.layers)){let Lt=et.side;et.side=dn,et.needsUpdate=!0,Bs(Dt,me,le,yn,et,Pn),et.side=Lt,et.needsUpdate=!0,Qe=!0}}Qe===!0&&(ve.updateMultisampleRenderTarget(We),ve.updateRenderTargetMipmap(We))}C.setRenderTarget(Ge,Ye,tt),C.setClearColor(J,ye),St!==void 0&&(le.viewport=St),C.toneMapping=Fe}function cs(N,Z,me){let le=Z.isScene===!0?Z.overrideMaterial:null;for(let ce=0,We=N.length;ce<We;ce++){let je=N[ce],{object:Ge,geometry:Ye,group:tt}=je,Fe=je.material;Fe.allowOverride===!0&&le!==null&&(Fe=le),Ge.layers.test(me.layers)&&Bs(Ge,Z,me,Ye,Fe,tt)}}function Bs(N,Z,me,le,ce,We){E!==null&&ce.isNodeMaterial&&E.setObject(N,ce),N.onBeforeRender(C,Z,me,le,ce,We),N.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ce.onBeforeRender(C,Z,me,le,N,We),ce.transparent===!0&&ce.side===Tn&&ce.forceSinglePass===!1?(ce.side=dn,ce.needsUpdate=!0,C.renderBufferDirect(me,Z,le,ce,N,We),ce.side=Js,ce.needsUpdate=!0,C.renderBufferDirect(me,Z,le,ce,N,We),ce.side=Tn):C.renderBufferDirect(me,Z,le,ce,N,We),N.onAfterRender(C,Z,me,le,ce,We)}function hs(N){let Z=0;for(let me of N)me.texture!==null&&Z++;return Z}function wr(N,Z,me){Z.isScene!==!0&&(Z=ze);let le=K.get(N),ce=S.state.lights,We=S.state.shadowsArray,je=ce.state.version,Ge=ee.getParameters(N,ce.state,We,Z,me,S.state.lightProbeGridArray),Ye=ee.getProgramCacheKey(Ge),tt=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Z.environment:null,le.fog=Z.fog;let Fe=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=D.get(N.envMap||le.environment,Fe),le.envMapRotation=le.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",Ke),tt=new Map,le.programs=tt,le.programVariants=new Map);let St=tt.get(Ye);if(St!==void 0){if(le.currentProgram===St&&le.lightsStateVersion===je)return hc(N,Ge),St}else Ge.uniforms=ee.getUniforms(N),E!==null&&N.isNodeMaterial&&E.build(N,me,Ge),N.onBeforeCompile(Ge,C),St=ee.acquireProgram(Ge,Ye),tt.set(Ye,St),le.uniforms=Ge.uniforms;let Qe=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qe.clippingPlanes=ue.uniform),hc(N,Ge),le.needsLights=Yd(N),le.lightsStateVersion=je,le.needsLights&&(Qe.ambientLightColor.value=ce.state.ambient,Qe.lightProbe.value=ce.state.probe,Qe.sunLights.value=ce.state.sun,Qe.sunLightShadows.value=ce.state.sunShadow,Qe.directionalLights.value=ce.state.directional,Qe.directionalLightShadows.value=ce.state.directionalShadow,Qe.spotLights.value=ce.state.spot,Qe.spotLightShadows.value=ce.state.spotShadow,Qe.rectAreaLights.value=ce.state.rectArea,Qe.ltc_1.value=ce.state.rectAreaLTC1,Qe.ltc_2.value=ce.state.rectAreaLTC2,Qe.pointLights.value=ce.state.point,Qe.pointLightShadows.value=ce.state.pointShadow,Qe.hemisphereLights.value=ce.state.hemi,Qe.sunShadowMatrix.value=ce.state.sunShadowMatrix,Qe.sunShadowCascade.value=ce.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ce.state.spotLightMatrix,Qe.spotLightMap.value=ce.state.spotLightMap,Qe.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.numLightProbeGrids=hs(S.state.lightProbeGridArray),le.currentProgram=St,le.uniformsList=null,St}function lc(N,Z,me,le,ce){let We=K.get(N),je=We.currentProgram.id+","+le+","+ce,Ge=We.programVariants.get(je);return Ge===void 0?(Ge=wr(N,Z,me),We.programVariants.set(je,Ge)):(We.currentProgram=Ge,We.uniformsList=null,We.outputColorSpace=le,We.toneMapping=ce),Ge}function cc(N){if(N.uniformsList===null){let Z=N.currentProgram.getUniforms();N.uniformsList=qo.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function hc(N,Z){let me=K.get(N);me.outputColorSpace=Z.outputColorSpace,me.batching=Z.batching,me.batchingColor=Z.batchingColor,me.instancing=Z.instancing,me.instancingColor=Z.instancingColor,me.instancingMorph=Z.instancingMorph,me.skinning=Z.skinning,me.morphTargets=Z.morphTargets,me.morphNormals=Z.morphNormals,me.morphColors=Z.morphColors,me.morphTargetsCount=Z.morphTargetsCount,me.numClippingPlanes=Z.numClippingPlanes,me.numIntersection=Z.numClipIntersection,me.vertexAlphas=Z.vertexAlphas,me.vertexTangents=Z.vertexTangents,me.toneMapping=Z.toneMapping}function Wd(N,Z,me,le,ce){Z.isScene!==!0&&(Z=ze),ve.resetTextureUnits();let We=Z.fog,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Z.environment:null,Ge=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Pt.workingColorSpace,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,tt=D.get(le.envMap||je,Ye),Fe=le.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,St=!!me.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!me.morphAttributes.position,Tt=!!me.morphAttributes.normal,nn=!!me.morphAttributes.color,Ft=Wi;le.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ft=C.toneMapping);let Dt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,yn=Dt!==void 0?Dt.length:0,et=K.get(le),Pn=S.state.lights;if(Ne===!0&&(fe===!0||N!==ne)){let Gt=N===ne&&le.id===$;ue.setState(le,N,Gt)}let Lt=!1,us=!1;le.version===et.__version?et.needsLights&&et.lightsStateVersion!==Pn.state.version||ce.isBatchedMesh&&et.batching===!1||!ce.isBatchedMesh&&et.batching===!0||ce.isBatchedMesh&&et.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&et.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&et.instancing===!1||!ce.isInstancedMesh&&et.instancing===!0||ce.isSkinnedMesh&&et.skinning===!1||!ce.isSkinnedMesh&&et.skinning===!0||ce.isInstancedMesh&&et.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&et.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&et.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&et.instancingMorph===!1&&ce.morphTexture!==null||et.envMap!==tt||le.fog===!0&&et.fog!==We||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ue.numPlanes||et.numIntersection!==ue.numIntersection)||et.vertexAlphas!==Fe||et.vertexTangents!==St||et.morphTargets!==Qe||et.morphNormals!==Tt||et.morphColors!==nn||et.morphTargetsCount!==yn||et.numLightProbeGrids!==hs(S.state.lightProbeGridArray)?Lt=!0:(et.outputColorSpace!==Ge||et.toneMapping!==Ft)&&(us=!0):(Lt=!0,et.__version=le.version);let bn=et.currentProgram;(Lt===!0||us===!0)&&(bn=us===!0?lc(le,Z,ce,Ge,Ft):wr(le,Z,ce),E&&le.isNodeMaterial&&E.onUpdateProgram(le,bn,et));let zs=!1,wi=!1,ds=!1,At=bn.getUniforms(),Zt=et.uniforms;if(O.useProgram(bn.program)&&(zs=!0,wi=!0,ds=!0),le.id!==$&&($=le.id,wi=!0),zs||ne!==N){O.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),At.setValue(Y,"projectionMatrix",N.projectionMatrix),At.setValue(Y,"viewMatrix",N.matrixWorldInverse);let an=At.map.cameraPosition;an!==void 0&&an.setValue(Y,Re.setFromMatrixPosition(N.matrixWorld)),Ae.logarithmicDepthBuffer&&At.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&At.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),ne!==N&&(ne=N,wi=!0,ds=!0)}if(et.needsLights&&(Pn.state.sunShadowMap.length>0&&At.setValue(Y,"sunShadowMap",Pn.state.sunShadowMap,ve),Pn.state.directionalShadowMap.length>0&&At.setValue(Y,"directionalShadowMap",Pn.state.directionalShadowMap,ve),Pn.state.spotShadowMap.length>0&&At.setValue(Y,"spotShadowMap",Pn.state.spotShadowMap,ve),Pn.state.pointShadowMap.length>0&&At.setValue(Y,"pointShadowMap",Pn.state.pointShadowMap,ve)),ce.isSkinnedMesh){At.setOptional(Y,ce,"bindMatrix"),At.setOptional(Y,ce,"bindMatrixInverse");let Gt=ce.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),At.setValue(Y,"boneTexture",Gt.boneTexture,ve))}ce.isBatchedMesh&&(At.setOptional(Y,ce,"batchingTexture"),At.setValue(Y,"batchingTexture",ce._matricesTexture,ve),At.setOptional(Y,ce,"batchingIdTexture"),At.setValue(Y,"batchingIdTexture",ce._indirectTexture,ve),At.setOptional(Y,ce,"batchingColorTexture"),ce._colorsTexture!==null&&At.setValue(Y,"batchingColorTexture",ce._colorsTexture,ve));let on=me.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&de.update(ce,me,bn),(wi||et.receiveShadow!==ce.receiveShadow)&&(et.receiveShadow=ce.receiveShadow,At.setValue(Y,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Z.environment!==null&&(Zt.envMapIntensity.value=Z.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=o2()),wi){if(At.setValue(Y,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Xd(Zt,ds),We&&le.fog===!0&&pe.refreshFogUniforms(Zt,We),pe.refreshMaterialUniforms(Zt,le,oe,He,S.state.transmissionRenderTarget[N.id]),et.needsLights&&et.numLightProbeGrids>0){let Gt=M,an=0;for(let di of S.state.lightProbeGridArray)di.texture!==null&&(Gt.textures[an]=di.texture,Gt.min[an]=di.boundingBox.min,Gt.max[an]=di.boundingBox.max,Gt.resolution[an]=di.resolution,an++);for(let di in Gt)Gt[di].length=an;Zt.probesSH.value=Gt.textures,Zt.probesMin.value=Gt.min,Zt.probesMax.value=Gt.max,Zt.probesResolution.value=Gt.resolution}qo.upload(Y,cc(et),Zt,ve)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(qo.upload(Y,cc(et),Zt,ve),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&At.setValue(Y,"center",ce.center),At.setValue(Y,"modelViewMatrix",ce.modelViewMatrix),At.setValue(Y,"normalMatrix",ce.normalMatrix),At.setValue(Y,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){let Gt=le.uniformsGroups;for(let an=0,di=Gt.length;an<di;an++){let oo=Gt[an];Ve.update(oo,bn),Ve.bind(oo,bn)}}return bn}function Xd(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.sunLights.needsUpdate=Z,N.sunLightShadows.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function Yd(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(N,Z,me){let le=K.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),K.get(N.texture).__webglTexture=Z,K.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:me,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Z){let me=K.get(N);me.__webglFramebuffer=Z,me.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,me=0){te=N,U=Z,z=me;let le=null,ce=!1,We=!1;if(N){let Ge=K.get(N);if(Ge.__useDefaultFramebuffer!==void 0){O.bindFramebuffer(Y.FRAMEBUFFER,Ge.__webglFramebuffer),q.copy(N.viewport),j.copy(N.scissor),Me=N.scissorTest,O.viewport(q),O.scissor(j),O.setScissorTest(Me),$=-1;return}else if(Ge.__webglFramebuffer===void 0)ve.setupRenderTarget(N);else if(Ge.__hasExternalTextures)ve.rebindTextures(N,K.get(N.texture).__webglTexture,K.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Fe=N.depthTexture;if(Ge.__boundDepthTexture!==Fe){if(Fe!==null&&K.has(Fe)&&(N.width!==Fe.image.width||N.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(N)}}let Ye=N.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(We=!0);let tt=K.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(tt[Z])?le=tt[Z][me]:le=tt[Z],ce=!0):N.samples>0&&ve.useMultisampledRTT(N)===!1?le=K.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[me]:le=tt,q.copy(N.viewport),j.copy(N.scissor),Me=N.scissorTest}else q.copy(se).multiplyScalar(oe).floor(),j.copy(Se).multiplyScalar(oe).floor(),Me=_e;if(me!==0&&(le=k),O.bindFramebuffer(Y.FRAMEBUFFER,le)&&O.drawBuffers(N,le),O.viewport(q),O.scissor(j),O.setScissorTest(Me),ce){let Ge=K.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,me)}else if(We){let Ge=Z;for(let Ye=0;Ye<N.textures.length;Ye++){let tt=K.get(N.textures[Ye]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ye,tt.__webglTexture,me,Ge)}}else if(N!==null&&me!==0){let Ge=K.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ge.__webglTexture,me)}$=-1};function ro(N){let Z=K.get(N);return(Z.__readFormat!==N.format||Z.__readType!==N.type)&&(Z.__readFormat=N.format,Z.__readType=N.type,Z.__formatReadable=Ae.textureFormatReadable(N.format),Z.__typeReadable=Ae.textureTypeReadable(N.type)),Z}this.readRenderTargetPixels=function(N,Z,me,le,ce,We,je,Ge=0){if(!(N&&N.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=K.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Ye=Ye[je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){O.bindFramebuffer(Y.FRAMEBUFFER,Ye);try{let tt=N.textures[Ge],Fe=tt.format,St=tt.type;N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge);let Qe=ro(tt);if(Qe.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-le&&me>=0&&me<=N.height-ce&&Y.readPixels(Z,me,le,ce,xe.convert(Fe),xe.convert(St),We)}finally{let tt=te!==null?K.get(te).__webglFramebuffer:null;O.bindFramebuffer(Y.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,Z,me,le,ce,We,je,Ge=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=K.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Ye=Ye[je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if(Z>=0&&Z<=N.width-le&&me>=0&&me<=N.height-ce){O.bindFramebuffer(Y.FRAMEBUFFER,Ye);let tt=N.textures[Ge],Fe=tt.format,St=tt.type;N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge);let Qe=ro(tt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Tt),Y.bufferData(Y.PIXEL_PACK_BUFFER,We.byteLength,Y.STREAM_READ),Y.readPixels(Z,me,le,ce,xe.convert(Fe),xe.convert(St),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let nn=te!==null?K.get(te).__webglFramebuffer:null;O.bindFramebuffer(Y.FRAMEBUFFER,nn);let Ft=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Ug(Y,Ft,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Tt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,We),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Tt),Y.deleteSync(Ft),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Z=null,me=0){let le=Math.pow(2,-me),ce=Math.floor(N.image.width*le),We=Math.floor(N.image.height*le),je=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;ve.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,me,0,0,je,Ge,ce,We),O.unbindTexture()},this.copyTextureToTexture=function(N,Z,me=null,le=null,ce=0,We=0){let je,Ge,Ye,tt,Fe,St,Qe,Tt,nn,Ft=N.isCompressedTexture?N.mipmaps[We]:N.image;if(me!==null)je=me.max.x-me.min.x,Ge=me.max.y-me.min.y,Ye=me.isBox3?me.max.z-me.min.z:1,tt=me.min.x,Fe=me.min.y,St=me.isBox3?me.min.z:0;else{let At=Math.pow(2,-ce);je=Math.floor(Ft.width*At),Ge=Math.floor(Ft.height*At),N.isDataArrayTexture?Ye=Ft.depth:N.isData3DTexture?Ye=Math.floor(Ft.depth*At):Ye=1,tt=0,Fe=0,St=0}le!==null?(Qe=le.x,Tt=le.y,nn=le.z):(Qe=0,Tt=0,nn=0);let Dt=xe.convert(Z.format),yn=xe.convert(Z.type),et;Z.isData3DTexture?(ve.setTexture3D(Z,0),et=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ve.setTexture2DArray(Z,0),et=Y.TEXTURE_2D_ARRAY):(ve.setTexture2D(Z,0),et=Y.TEXTURE_2D),O.activeTexture(Y.TEXTURE0),O.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);let Pn=O.getParameter(Y.UNPACK_ROW_LENGTH),Lt=O.getParameter(Y.UNPACK_IMAGE_HEIGHT),us=O.getParameter(Y.UNPACK_SKIP_PIXELS),bn=O.getParameter(Y.UNPACK_SKIP_ROWS),zs=O.getParameter(Y.UNPACK_SKIP_IMAGES);O.pixelStorei(Y.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(Y.UNPACK_SKIP_PIXELS,tt),O.pixelStorei(Y.UNPACK_SKIP_ROWS,Fe),O.pixelStorei(Y.UNPACK_SKIP_IMAGES,St);let wi=N.isDataArrayTexture||N.isData3DTexture,ds=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isDepthTexture){let At=K.get(N),Zt=K.get(Z),on=K.get(At.__renderTarget),Gt=K.get(Zt.__renderTarget);O.bindFramebuffer(Y.READ_FRAMEBUFFER,on.__webglFramebuffer),O.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let an=0;an<Ye;an++)wi&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,K.get(N).__webglTexture,ce,St+an),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,K.get(Z).__webglTexture,We,nn+an)),Y.blitFramebuffer(tt,Fe,tt+je,Fe+Ge,Qe,Tt,Qe+je,Tt+Ge,Y.DEPTH_BUFFER_BIT,Y.NEAREST);O.bindFramebuffer(Y.READ_FRAMEBUFFER,null),O.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ce!==0||N.isRenderTargetTexture||K.has(N)){let At=K.get(N),Zt=K.get(Z);O.bindFramebuffer(Y.READ_FRAMEBUFFER,I),O.bindFramebuffer(Y.DRAW_FRAMEBUFFER,P);for(let on=0;on<Ye;on++)wi?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,At.__webglTexture,ce,St+on):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,At.__webglTexture,ce),ds?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Zt.__webglTexture,We,nn+on):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Zt.__webglTexture,We),ce!==0?Y.blitFramebuffer(tt,Fe,tt+je,Fe+Ge,Qe,Tt,Qe+je,Tt+Ge,Y.COLOR_BUFFER_BIT,Y.NEAREST):ds?Y.copyTexSubImage3D(et,We,Qe,Tt,nn+on,tt,Fe,je,Ge):Y.copyTexSubImage2D(et,We,Qe,Tt,tt,Fe,je,Ge);O.bindFramebuffer(Y.READ_FRAMEBUFFER,null),O.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ds?N.isDataTexture||N.isData3DTexture?Y.texSubImage3D(et,We,Qe,Tt,nn,je,Ge,Ye,Dt,yn,Ft.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(et,We,Qe,Tt,nn,je,Ge,Ye,Dt,Ft.data):Y.texSubImage3D(et,We,Qe,Tt,nn,je,Ge,Ye,Dt,yn,Ft):N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,We,Qe,Tt,je,Ge,Dt,yn,Ft.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,We,Qe,Tt,Ft.width,Ft.height,Dt,Ft.data):Y.texSubImage2D(Y.TEXTURE_2D,We,Qe,Tt,je,Ge,Dt,yn,Ft);O.pixelStorei(Y.UNPACK_ROW_LENGTH,Pn),O.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Lt),O.pixelStorei(Y.UNPACK_SKIP_PIXELS,us),O.pixelStorei(Y.UNPACK_SKIP_ROWS,bn),O.pixelStorei(Y.UNPACK_SKIP_IMAGES,zs),We===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&Y.generateMipmap(et),O.unbindTexture()},this.initRenderTarget=function(N){K.get(N).__webglFramebuffer===void 0&&ve.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ve.setTextureCube(N,0):N.isData3DTexture?ve.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ve.setTexture2DArray(N,0):ve.setTexture2D(N,0),O.unbindTexture()},this.resetState=function(){U=0,z=0,te=null,O.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}};var X={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfterKillsSmoothie:3,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8,trainerShare:0,trainerShareSmoothie:.5,trainerShareBoss:.4},trainer:{health:130,scaleW:1.2,scaleH:1.1,runSpeed:6.2,turnRate:12,maxAlive:3,swingRange:1.6,swingSlack:.4,swingArc:120,windup:.5,lockTime:.15,swingTime:.3,recover:.8,swingGap:.6,damage:30,tobbleDamage:30,knockback:1.6,knockTime:.35,staggerTime:.8,preferDoc:.6,retargetTime:.4,repathTime:.5,avoidRadius:1.8,avoidWeight:1.5,stuckTime:.6,diveChance:.4,barkChance:.5},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.1,arcDot:.06},run:{fadeOut:.6,blackHold:.25,fadeIn:.6,gateReach:1.6,hoursTime:6,gateOpenTime:.8,attractSpeed:.12,attractMargin:6,attractHeight:10},boss:{health:4500,scale:2,crouchY:.5,headMult:2,phase2At:.66,phase3At:.33,popTime:.5,telegraphTime:1,burstTime:2.4,rate:5,damage:6,spread:2.5,aimLag:.25,muzzleUp:1.35,coverWaitMin:1.2,coverWaitMax:2.2,shiftTime:.8,lobEvery:2,lobWindup:1.2,lobFlight:1.5,lobRecover:.7,lobRadius:2.5,lobDamage:32,lobTobbleDamage:32,lobFalloff:.5,retreatSpeed:4.5,returnSpeed:4.5,minHide:2,fastTelegraph:.8,fastBurstTime:2,fastRate:7,fastWaitMin:.5,fastWaitMax:1.1,offerGap:.4},ending:{deathDelay:2.2,deskReach:2.6,holdTime:1,card1Time:2.2,card2Time:6,card3Time:3.4,skipLock:.7,finalLock:1.2}};function Mu({step:t,render:e,before:n,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(p){if(!(p>0)||!Number.isFinite(p))return;n&&n(p),o+=p;let m=0;for(;o>=r&&m<s;)t(r),o-=r,m++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),p)}function d(p){if(c){try{l!==null&&h((p-l)/1e3)}catch(m){throw v(),m}l=p,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function v(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:v}}var Ap=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),a2={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},l2={0:"fire",2:"aim"},Ev={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},Av={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},c2=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function Rp(t){if(!t||typeof t.tagName!="string")return!1;let e=t.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!c2.has(String(t.type||"text").toLowerCase()):!!t.isContentEditable}function Rv(t){return a2[t]||null}function Cv(t){return l2[t]||null}function Zo(){let t={};for(let e of Ap)t[e]=!1;return t}function Pv(t,e,n=.15){let i=Math.hypot(t,e);if(i<n)return[0,0];let s=Math.min(1,(i-n)/(1-n))/i;return[t*s,e*s]}function h2(t){if(!t||!t.connected)return{ok:!1,reason:"none"};if(t.mapping!=="standard"||!t.buttons||t.buttons.length<16||!t.axes||t.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,n]=Pv(t.axes[0],t.axes[1]),[i,s]=Pv(t.axes[2],t.axes[3]),r=Zo();for(let o in Ev){let a=t.buttons[o];r[Ev[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:n,lookX:i,lookY:s,held:r}}function u2(t){t.downCodes&&t.downCodes.clear(),t.downButtons&&t.downButtons.clear(),t.latched&&t.latched.clear(),t.held=t.held||{};for(let e of Ap)t.held[e]=!1;for(let e in t.held)t.held[e]=!1;return t.lookDX=0,t.lookDY=0,t.lookX=0,t.lookY=0,t.moveX=0,t.moveY=0,t}function wu(t){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Zo(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:n,downButtons:i,latched:s}=e,r="kbm",o="none",a=Zo();t.tabIndex<0&&(t.tabIndex=0);let l=()=>document.pointerLockElement===t,c=()=>l()||document.activeElement===t;function h(){u2(e)}function d(_){if(Rp(_.target))return;let S=Rv(_.code);(S||_.code in Av)&&(c()&&(_.code==="Tab"||_.code==="Space")&&_.preventDefault(),r="kbm",!_.repeat&&!n.has(_.code)&&S&&s.add(S),n.add(_.code))}function u(_){n.delete(_.code)}function f(_){_.target===t&&t.focus();let S=Cv(_.button);S&&(r="kbm",i.has(_.button)||s.add(S),i.add(_.button))}function v(_){i.delete(_.button)}function p(_){l()&&(r="kbm",e.lookDX+=_.movementX||0,e.lookDY+=_.movementY||0)}function m(_){!c()||!_.deltaY||(r="kbm",s.add(_.deltaY>0?"weaponNext":"weaponPrev"),_.preventDefault())}function g(_){_.preventDefault()}function y(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",v),window.addEventListener("blur",h),document.addEventListener("mousemove",p),document.addEventListener("pointerlockchange",y),t.addEventListener("mousedown",f),t.addEventListener("wheel",m,{passive:!1}),t.addEventListener("contextmenu",g);function w(){let _=[];try{_=navigator.getGamepads&&navigator.getGamepads()||[]}catch{_=[]}let S=null;for(let b of _)if(b&&b.connected){S=b;break}let x=h2(S);return o=x.ok?S.id:x.reason==="none"?"none":"unrecognised controller",x}function M(){let _={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Zo(),pressed:Zo()};e.lookDX=0,e.lookDY=0;for(let b of n){let R=Rv(b);R&&(_.held[R]=!0);let C=Av[b];C&&(_.moveX+=C[0],_.moveY+=C[1])}for(let b of i){let R=Cv(b);R&&(_.held[R]=!0)}let S=Math.hypot(_.moveX,_.moveY);S>1&&(_.moveX/=S,_.moveY/=S);for(let b of s)_.pressed[b]=!0;s.clear();let x=w();if(x.ok){_.lookX=x.lookX,_.lookY=x.lookY;let b=x.moveX!==0||x.moveY!==0||x.lookX!==0||x.lookY!==0;for(let C of Ap)x.held[C]&&(b=!0,_.held[C]=!0,a[C]||(_.pressed[C]=!0));a=x.held,_.moveX+=x.moveX,_.moveY+=x.moveY;let R=Math.hypot(_.moveX,_.moveY);R>1&&(_.moveX/=R,_.moveY/=R),b&&(r="pad")}else a=Zo();return _}return{poll:M,requestLock(){try{let _=t.requestPointerLock&&t.requestPointerLock();_&&typeof _.catch=="function"&&_.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Lv(t,e,n=14){let i=t;return e>20?i-=.1:e<n&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var d2=2e3,Iv=1e4,f2=8e4;function Dv({startMs:t=0,scale:e=1}={}){let n=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-t<d2||(i+=Math.min(h,100),s++,s<60||i<1e3))return n;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=Lv(n,u,Math.max(14,1.1*r));if(f>n){if(d<l)return n;o=d}else f<n&&(o!==null&&d-o<Iv&&(a=a===0?Iv:Math.min(a*2,f2),l=d+a),o=null);return n=f,n}return{sample:c,scale:()=>n}}var B=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Cp={viewportHeight:{value:1080}};function ai(t){t.getAttribute("normal")||t.computeVertexNormals();let e=t.getAttribute("position"),n=t.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=n.getX(l),h[1]+=n.getY(l),h[2]+=n.getZ(l)}let a=t.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new xt(new Float32Array(i*3),3),t.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=n.getX(l),d=n.getY(l),u=n.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,t}var p2=`
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
`,m2=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function g2({px:t=X.outlinePx,color:e=B.ink,outlineNormal:n=!1}={}){return new Bn({name:"outline",uniforms:{px:{value:t},inkColor:{value:new Ze(e)},viewportHeight:Cp.viewportHeight},defines:n?{USE_OUTLINE_NORMAL:""}:{},vertexShader:p2,fragmentShader:m2,side:dn})}function v2(){}var Nv=new Map;function x2(t,e,n){let i=t+"|"+new Ze(e).getHexString()+"|"+n,s=Nv.get(i);return s||(s=g2({px:t,color:e,outlineNormal:n}),Nv.set(i,s)),s}function Ln(t,{px:e=X.outlinePx}={}){let n=!!t.geometry.getAttribute("outlineNormal"),i=x2(e,B.ink,n),s=new rt(t.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=v2,t.add(s),s}function Pp(t,e){t.traverse(n=>{n.userData.isOutline&&(n.visible=e)})}function y2(t,e,n,i){let s=Math.max(1,Math.floor(t)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(n>0?n:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Su(t,e){let n=new yu({canvas:t,context:e,antialias:!0,powerPreference:"high-performance"});n.outputColorSpace=un;let i=Dv({startMs:performance.now()});function s(){let o=y2(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return n.setPixelRatio(o.pixelRatio),n.setSize(o.width,o.height,!1),Cp.viewportHeight.value=t.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:n,resize:s,frameDone:r,scale:i.scale}}var As={lightDir:{value:new H(...X.lightDir).normalize()},shadowTint:{value:new Ze(B.shadowTint)},bandEdge:{value:.15},shadowLift:{value:X.shadowLift}},b2=`
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
`,_2=`
uniform vec3 baseColor;
uniform vec3 lightDir;
uniform vec3 shadowTint;
uniform float bandEdge;
uniform float shadowLift;
uniform float shadowMix;
uniform float rim;
uniform vec3 rimColor;

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
  col = mix(col, mix(col, rimColor, rim), rimAmount);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function Et({color:t="#ffffff",vertexColors:e=!1,shadowMix:n=.55,rim:i=.25,rimColor:s="#ffffff"}={}){return new Bn({name:"toon",uniforms:{baseColor:{value:new Ze(t)},shadowMix:{value:n},rim:{value:i},rimColor:{value:new Ze(s)},lightDir:As.lightDir,shadowTint:As.shadowTint,bandEdge:As.bandEdge,shadowLift:As.shadowLift},vertexShader:b2,fragmentShader:_2,vertexColors:e})}var M2=400,w2=[-.45,.22,-1],S2=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,T2=`
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
`;function Tu({planetDir:t=w2}={}){let e=r=>new Ze(r),n=new Bn({name:"sky",uniforms:{deep:{value:e(B.nebulaDeep)},hot:{value:e(B.nebulaHot)},pink:{value:e(B.hotPink)},lilac:{value:e(B.lilac)},ink:{value:e(B.ink)},planetColor:{value:e(B.planet)},shadowTint:As.shadowTint,shadowLift:As.shadowLift,bandEdge:As.bandEdge,lightDir:As.lightDir,planetDir:{value:new H(...t).normalize()},time:{value:0}},vertexShader:S2,fragmentShader:T2,side:dn,depthWrite:!1}),i=new rt(new jt(M2,48,24),n);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){n.uniforms.time.value=r}return{mesh:i,update:s}}function Bt(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},o={},a=t[0].morphTargetsRelative,l=new Nt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let v in d.attributes){if(!i.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(d.attributes[v]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let v in d.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[v].length!==t[0].morphAttributes[v].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+v+'" morph attribute.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(d.morphAttributes[v]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let v;if(n)v=d.index.count;else if(d.attributes.position!==void 0)v=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,v,h),c+=v}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let v=0;v<f.count;++v)d.push(f.getX(v)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=kv(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let p=0;p<o[h].length;++p)f.push(o[h][p][u]);let v=kv(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}}return l}function kv(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new e(r),a=new xt(o,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let v=0;v<n;v++){let p=h.getComponent(u,v);a.setComponent(u+d,v,p)}}else o.set(h.array,l);l+=h.count*n}return s!==void 0&&(a.gpuType=s),a}function Uv(t,e=1e-4){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),s=t.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(t.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),v=Math.pow(10,f),p=u*v;for(let g=0;g<r;g++){let y=i?i.getX(g):g,w="";for(let M=0,_=a.length;M<_;M++){let S=a[M],x=t.getAttribute(S),b=x.itemSize;for(let R=0;R<b;R++)w+=`${Math.trunc(x[d[R]](y)*v+p)},`}w in n?h.push(n[w]):(l.push(y),n[w]=o,h.push(o),o++)}let m=t.clone();for(let g in t.attributes)m.setAttribute(g,Ov(t.attributes[g],l,c));for(let g in t.morphAttributes)m.morphAttributes[g]=t.morphAttributes[g].map(y=>Ov(y,l,c));return m.setIndex(h),m}function Ov(t,e,n=new Map){let i=t.isInterleavedBufferAttribute,s=i?t.data:t,r=i?s.stride:t.itemSize,o=i?n.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new t.constructor(l,t.itemSize,t.normalized,t.meshPerAttribute),o.setUsage(s.usage),i&&n.set(s,o)}let a=i?new t.constructor(o,t.itemSize,t.offset,t.normalized):o;return a.name=t.name,i||(a.gpuType=t.gpuType),a}function Ko(t){let e=t>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Fv(t,e,n=.03,i=.04){let s=t.getAttribute("position"),r=t.getAttribute("normal");t.computeBoundingBox();let o=t.boundingBox,a=o.getSize(new H),l=o.getCenter(new H),c=a.length(),h=Ko(e*7919+13>>>0),d=[];for(let g=0;g<8;g++)d.push(h()*2-1);let u=Math.min(n*c,i)*.99/Math.sqrt(3),f=(g,y)=>y>1e-9?2*g/y:0,v=[a.x,a.y,a.z].map(g=>g>1e-9?2/g:0),p=new ft,m=new H;for(let g=0;g<s.count;g++){let y=f(s.getX(g)-l.x,a.x),w=f(s.getY(g)-l.y,a.y),M=f(s.getZ(g)-l.z,a.z),_=(w+1)/2,S=(d[0]*w+d[1]*y*w)/2,x=(d[2]*y+d[3]*M)/2*_,b=(d[4]*w+d[5]*M*w)/2;if(r){let R=[d[1]*w/2,(d[0]+d[1]*y)/2,0],C=[d[2]/2*_,(d[2]*y+d[3]*M)/2*.5,d[3]/2*_],L=[0,(d[4]+d[5]*M)/2,d[5]*w/2];p.set(1+u*R[0]*v[0],u*R[1]*v[1],u*R[2]*v[2],u*C[0]*v[0],1+u*C[1]*v[1],u*C[2]*v[2],u*L[0]*v[0],u*L[1]*v[1],1+u*L[2]*v[2]),p.invert().transpose(),m.set(r.getX(g),r.getY(g),r.getZ(g)).applyMatrix3(p).normalize(),r.setXYZ(g,m.x,m.y,m.z)}s.setXYZ(g,s.getX(g)+u*S,s.getY(g)+u*x,s.getZ(g)+u*b)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),t.computeBoundingBox(),t.computeBoundingSphere(),t}var Ip=null;function E2(){return Ip||(Ip=Et({vertexColors:!0})),Ip}var Dp=(t,e,n)=>new Ze(t).lerp(new Ze(e),n),Np=(t,e=.3)=>Dp(t,"#ffffff",e),Eu=(t,e=.2)=>Dp(t,B.shadowTint,e),Bv=new bt,zv=new Xn,Hv=new Jn,A2=new H,R2=new H;function Qs(t=1,e=.02,n="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let v=u.wonk===void 0?e:u.wonk;v>0&&Fv(f,t*131+s,v),s++;let p=f.getAttribute("normal"),m=new Float32Array(p.count*3);for(let g=0;g<p.count;g++){let y=typeof d=="function"?d(p.getX(g),p.getY(g),p.getZ(g)):d;m[g*3]=y.r,m[g*3+1]=y.g,m[g*3+2]=y.b}return f.setAttribute("color",new xt(m,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),Hv.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),zv.setFromEuler(Hv),Bv.compose(A2.set(u.x||0,u.y||0,u.z||0),zv,R2.set(1,1,1)),f.applyMatrix4(Bv),i.push(f),f}function o(h,d={}){let u=d.top||Np(h),f=d.side||Eu(h,.22),v=Eu(h,.4),p=new Ze(h);return(m,g,y)=>g>.5?u:g<-.5?v:Math.abs(m)>.5?f:y>0?p:v}function a(h,d,u,f,v={}){return r(new ct(h,d,u),o(f,v),v)}function l(h,d,u,f,v,p,m,g={}){return a(d-h,f-u,p-v,m,{...g,x:(h+d)/2,y:(u+f)/2,z:(v+p)/2})}function c(h=0){let d=Bt(i,!1);if(!d)throw new Error(`${n}: parts have different attributes and cannot be merged`);return h>0&&Fv(d,t,h),ai(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function er(t){let e=new dt,n=new rt(t,E2());return Ln(n),e.add(n),e}var Rs=t=>()=>new Ze(t);function Au({w:t,d:e,tile:n=1,colors:i=[B.cream,B.tealLight]}){let s=Qs(1,0,"floor");s.span(-t/2,t/2,-.15,-.002,-e/2,e/2,B.lilac,{top:new Ze(B.lilac)});let o=Math.round(t/n),a=Math.round(e/n);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new Ys(n,n);h.rotateX(-Math.PI/2),s.add(h,Rs(i[(l+c)%2]),{wonk:0,x:-t/2+(l+.5)*n,y:0,z:-e/2+(c+.5)*n})}return er(s.finish())}function kp({w:t,h:e,color:n=B.cream,stripe:i=B.hotPink,opening:s=null,seed:r=2}){let o=Qs(r,0,"wall"),a=.2,l=a/2,c=-t/2,h=t/2,d=-.3,u=new Fo;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let g=new Lr,y=s.x-s.w/2,w=s.x+s.w/2;g.moveTo(y,s.y),g.lineTo(y,s.y+s.h),g.lineTo(w,s.y+s.h),g.lineTo(w,s.y),g.closePath(),u.holes.push(g)}let f=new ll(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(n),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,B.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,B.teal);let v=.5,p=.8;return s&&s.y<p&&s.y+s.h>v?(o.span(c,s.x-s.w/2,v,p,l-.01,l+.03,i),o.span(s.x+s.w/2,h,v,p,l-.01,l+.03,i)):o.span(c,h,v,p,l-.01,l+.03,i),er(o.finish(.006))}function C2(t,e,n,i){let s=m=>Math.min(2048,Math.max(64,Math.round(m))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=t.split(" "),d=[[t]];for(let m=1;m<h.length;m++)d.push([h.slice(0,m).join(" "),h.slice(m).join(" ")]);let u=null;for(let m of d){let g=Math.max(...m.map(w=>l.measureText(w).width)),y=Math.min(r*.88*100/g,o*.8/(m.length*1.08));(!u||y>u.size)&&(u={lines:m,size:y})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=n,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,v=o/2-(u.lines.length-1)*f/2;u.lines.forEach((m,g)=>{let y=v+g*f;l.fillStyle=B.ink,l.fillText(m,r/2+u.size*.05,y+u.size*.06),l.fillStyle=n,l.fillText(m,r/2,y)});let p=new $a(a);return p.colorSpace=un,p.anisotropy=8,p}function Cs({text:t,w:e,h:n,bg:i=B.hotPink,fg:s=B.cream,tilt:r=.04,seed:o=3}){let c=Qs(o,0,"sign");c.box(e,n,.14,s,{wonk:0});let h=er(c.finish()),d=e-.14*2,u=n-.14*2,f=new rt(new Ys(d,u),new sn({map:C2(t,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function Gv({w:t,h:e,seed:n=4}){let i=Qs(n,.012,"window"),s=.15,r=.34;return i.span(-t/2,-t/2+s,0,e,-r/2,r/2,B.teal),i.span(t/2-s,t/2,0,e,-r/2,r/2,B.teal),i.span(-t/2+s,t/2-s,e-s,e,-r/2,r/2,B.teal),i.span(-t/2+s,t/2-s,0,s,-r/2,r/2,B.teal),i.span(-t/2-.2,t/2+.2,-.08,.06,-r/2,r/2+.28,B.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,B.cream),i.span(-t/2+s,t/2-s,e/2-.04,e/2+.04,-.04,.04,B.cream),er(i.finish(.006))}function El(t,e,n,i,s,r){let o=new kr(.16,.05,8,20);t.add(o,Rs(B.planet),{wonk:.04,x:e,y:n,z:i,rx:-Math.PI/2+s,ry:r})}function Vv({w:t,h:e,name:n,signColor:i=B.hotPink,seed:s=5}){let r=Qs(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=Dp(B.glorpPurple,B.ink,.7);r.span(-t/2+a,t/2-a,0,c,-o/2,-o/2+.1,h),r.span(-t/2+a,t/2-a,1.15,1.22,-o/2,-o/2+.4,B.lilac);for(let g of[-1,1]){let y=g*(t/2-a/2);r.span(y-a/2,y+a/2,0,c,-o/2,o/2,B.lilac),r.span(y-a/2-.04,y+a/2+.04,0,.3,-o/2,o/2+.04,B.teal)}r.span(-t/2,t/2,c,l,-o/2,o/2,B.teal);let d=t-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,B.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,B.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,B.cream),El(r,-.9,1.01,.4,.1,.4),El(r,-.2,1.01,.5,-.1,-.3),El(r,.6,1.01,.38,.12,.9),El(r,1.2,1.01,.52,0,.1);let u=10,f=(t-.1)/u,v=.42;for(let g=0;g<u;g++){let y=g%2?B.cream:i,w=-t/2+.05+(g+.5)*f;r.box(f,.08,.95,y,{x:w,y:c-.02,z:o/2+.35,rx:v,top:Np(y,.2)}),r.box(f,.22,.06,y,{x:w,y:c-.24,z:o/2+.8,rx:.1})}let p=er(r.finish(.006)),m=Cs({text:n,w:t-.7,h:1.15,bg:i,fg:B.cream,seed:s+1});return m.position.set(0,c+.7,o/2+.01),p.add(m),p}function Wv({w:t=2,d:e=1,h:n=.9,color:i=B.teal,seed:s=7}={}){let r=Qs(s,.018,"kiosk");r.span(-t/2+.03,t/2-.03,0,.16,-e/2+.03,e/2-.03,B.lilac),r.span(-t/2,t/2,.16,n-.08,-e/2,e/2,i),r.span(-t/2-.07,t/2+.07,n-.08,n,-e/2-.07,e/2+.07,B.cream);let o=4,a=(t-.3)/o;for(let c=0;c<o;c++){let h=c%2?B.cream:B.hotPink;r.box(a-.04,n-.45,.05,h,{x:-t/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,B.glorpPurple,{x:-.55,y:n+.14,z:-.1}),r.box(.3,.14,.04,B.gel,{x:-.55,y:n+.28,z:.07,rx:-.5,wonk:0}),El(r,.45,n+.06,.05,.1,.5);let l=er(r.finish(.006));return l.userData.footprint={w:t+.14,d:e+.14},l}function Xv({w:t=1.8,seed:e=11}={}){let n=Qs(e,.02,"bench"),i=.5;n.box(t,.1,i,B.lilac,{y:.46}),n.box(t,.42,.08,B.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])n.box(.1,.46,i-.06,B.teal,{x:r*(t/2-.2),y:.23}),n.box(.08,.5,.08,B.teal,{x:r*(t/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=er(n.finish(.006));return s.userData.footprint={w:t,d:i},s}function P2(t,e,n){let i=new ct(.035,t,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+t/2)/t;s.setXYZ(r,s.getX(r)+n*o*o,s.getY(r)+t/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function Yv({seed:t=21}={}){let e=Qs(t,.02,"planter"),n=Ko(t);e.add(new $t(.42,.32,.55,16),Rs(B.teal),{y:.275}),e.add(new $t(.47,.44,.12,16),Rs(B.hotPink),{y:.6}),e.add(new $t(.4,.4,.04,16),Rs(Eu(B.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Eu(B.planet,.15);for(let l=0;l<6;l++)e.add(new $t(.06-l*.004,.07-l*.004,.34,8),Rs(l%2?Np(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+n()*.3,h=l%2?.95+n()*.25:1.45+n()*.25,d=new bt().makeTranslation(i,s,0).multiply(new bt().makeRotationY(c)).multiply(new bt().makeRotationZ(-h));e.add(P2(.95,.24,l%2?.22:.4),Rs(l%2?B.gel:B.teal),{m:d,wonk:.03})}e.add(new jt(.1,10,8),Rs(B.planet),{x:i,y:s-.05,z:.08}),e.add(new jt(.1,10,8),Rs(B.planet),{x:i+.07,y:s-.1,z:-.07});let a=er(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Lp=null;function Ru({rx:t,rz:e,opacity:n=.35}){let r=new Ze(B.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,n];for(let d=1;d<=8;d++){let u=d/8,f=n*(1-u*u*(3-2*u));for(let v=0;v<28;v++){let p=v/28*Math.PI*2;o.push(Math.cos(p)*t*u,0,Math.sin(p)*e*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let v=0;v<28;v++){let p=(v+1)%28;l.push(u+v,u+p,f+v,u+p,f+p,f+v)}}let c=new Nt;c.setAttribute("position",new mt(o,3)),c.setAttribute("color",new mt(a,4)),c.setIndex(l),Lp||(Lp=new sn({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new rt(c,Lp);return h.name="blobShadow",h.position.y=.012,h}var Al=8,Cu=Al/2,Op=.2;function qv(){let t=new dt;t.add(Au({w:Al,d:Al}));let e=kp({w:Al+Op*2,h:4});e.position.set(0,0,-Cu-Op/2),t.add(e);let n=1.3,i=Vv({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:B.hotPink});i.position.set(n,0,-Cu+.25),t.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=kp({w:Al,h:4,color:"#f1e6ff",opening:s});r.position.set(-Cu-Op/2,0,0),r.rotation.y=Math.PI/2;let o=Gv({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),t.add(r);let a=Wv({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Xv({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=Yv({seed:21});c.position.set(-2.95,0,-2.9),t.add(a,l,c);let h=(d,u,f,v,p=0)=>{let m=Ru({rx:f,rz:v,opacity:.7});m.position.x=d,m.position.z=u,m.rotation.y=p,t.add(m)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(n,-Cu+.9,2.7,.8),{group:t,spawn:[0,0,0],update(){}}}function $n(t,e,n,i){if(!(n>0)||!(i>0))return n>0||(t.x=e,t.v=0),t;let s=4*Math.LN2/n/2,r=t.x-e,o=t.v+r*s,a=Math.exp(-s*i);return t.x=a*(r+o*i)+e,t.v=a*(t.v-o*s*i),t}function Up(t,e,n,i,s,r){let o=n+i,a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],f=e[1],v=e[2];h>d&&(h=d,u=t[0]+a*h,f=t[1]+l*h,v=t[2]+c*h);let p=h>o?h/o:1;if(h>=o){let b=h*(o>0?n/o:.5);return $v(r,t[0]+a*b,t[1]+l*b,t[2]+c*b,u,f,v,p)}let m=Math.max(h,1e-6),g=Math.min(Math.max((m*m+n*n-i*i)/(2*m),-n),n),y=Math.sqrt(Math.max(n*n-g*g,0)),w=s[0],M=s[1],_=s[2],S=w*a+M*l+_*c;w-=a*S,M-=l*S,_-=c*S;let x=Math.hypot(w,M,_);return x<1e-6&&(Math.abs(a)<.9?(w=0,M=c,_=-l):(w=-c,M=0,_=a),x=Math.hypot(w,M,_)||1),w/=x,M/=x,_/=x,$v(r,t[0]+a*g+w*y,t[1]+l*g+M*y,t[2]+c*g+_*y,u,f,v,p)}function $v(t,e,n,i,s,r,o,a){if(!t)return{mid:[e,n,i],end:[s,r,o],stretch:a};let l=t.mid,c=t.end;return l[0]=e,l[1]=n,l[2]=i,c[0]=s,c[1]=r,c[2]=o,t.stretch=a,t}var Zv=[.65,1.2];function Fp({radius:t=.06,rings:e=8,sides:n=8,color:i="#ffffff"}={}){let s=e+1,r=Zv.length,o=s*n,a=[o,o+r*n+1],l=o+2*(r*n+1),c=[],h=(fe,ge,Re)=>{for(let Ue=0;Ue<n;Ue++){let ze=(Ue+1)%n,Je=fe+Ue,st=fe+ze,Y=ge+Ue,pt=ge+ze;Re?c.push(Je,Y,st,st,Y,pt):c.push(Je,st,Y,st,pt,Y)}};for(let fe=0;fe<e;fe++)h(fe*n,(fe+1)*n,!1);for(let fe=0;fe<2;fe++){let ge=fe===0,Re=fe===0?0:e*n;for(let ze=0;ze<r;ze++){let Je=a[fe]+ze*n;h(Re,Je,ge),Re=Je}let Ue=a[fe]+r*n;for(let ze=0;ze<n;ze++){let Je=Re+ze,st=Re+(ze+1)%n;ge?c.push(Je,Ue,st):c.push(Je,st,Ue)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Nt,v=new xt(d,3),p=new xt(u,3);v.setUsage(Yo),p.setUsage(Yo),f.setAttribute("position",v),f.setAttribute("normal",p),f.setIndex(c);let m=new rt(f,Et({color:i}));m.name="limb";let g=new jn(new H,t*2);f.boundingSphere=g,Ln(m);let y=new Float64Array(n),w=new Float64Array(n);for(let fe=0;fe<n;fe++)y[fe]=Math.cos(fe/n*Math.PI*2),w[fe]=Math.sin(fe/n*Math.PI*2);let M=0,_=-1,S=0,x=1,b=0,R=0,C=0,L=0,E=1,k=0,I=0,P=0,U=0,z=0,te=0,$=0,ne=0,q=0,j=0,Me=0,J=0,ye=0,Ee=0,He=0,oe=0,Ce=0,De=0;function se(fe,ge,Re,Ue,ze,Je,st,Y,pt,it,Ae,O,Q,K,ve,D){for(let T=0;T<n;T++){let G=y[T]*Je+w[T]*pt,re=y[T]*st+w[T]*it,ee=y[T]*Y+w[T]*Ae,pe=(fe+T)*3;d[pe]=ge+G*ze,d[pe+1]=Re+re*ze,d[pe+2]=Ue+ee*ze,u[pe]=G*ve+O*D,u[pe+1]=re*ve+Q*D,u[pe+2]=ee*ve+K*D}}let Se=!1,_e=1,W=0,be=0;function Ne(fe,ge,Re,Ue=1){let ze=t/Math.sqrt(Ue>1?Ue:1),Je=2*ge[0]-(fe[0]+Re[0])/2,st=2*ge[1]-(fe[1]+Re[1])/2,Y=2*ge[2]-(fe[2]+Re[2])/2,pt=fe[0],it=fe[1],Ae=fe[2],O=Re[0],Q=Re[1],K=Re[2],ve=(ge[1]-it)*(K-ge[2])-(ge[2]-Ae)*(Q-ge[1]),D=(ge[2]-Ae)*(O-ge[0])-(ge[0]-pt)*(K-ge[2]),T=(ge[0]-pt)*(Q-ge[1])-(ge[1]-it)*(O-ge[0]),G=Math.hypot(ve,D,T),re=ge[0]-pt,ee=ge[1]-it,pe=ge[2]-Ae,Pe=Math.hypot(re,ee,pe),he=O-ge[0],ue=Q-ge[1],ke=K-ge[2],V=!1;G>1e-4*Pe*Math.hypot(he,ue,ke)&&G>1e-12?(ve/=G,D/=G,T/=G,Se&&ve*_e+D*W+T*be<0&&(ve=-ve,D=-D,T=-T),V=!0):Pe>1e-9&&re*he+ee*ue+pe*ke<0&&(Je=(pt+O)/2,st=(it+Q)/2,Y=(Ae+K)/2);let de=(pt+Je+O)/3,ie=(it+st+Q)/3,Ie=(Ae+Y+K)/3,xe=Math.max(Math.hypot(pt-de,it-ie,Ae-Ie),Math.hypot(Je-de,st-ie,Y-Ie),Math.hypot(O-de,Q-ie,K-Ie));g.center.set(de,ie,Ie),g.radius=xe+t*1.5+.02;for(let we=0;we<s;we++){let Ve=we/e,nt=1-Ve,ae=nt*nt,Oe=2*nt*Ve,$e=Ve*Ve,Le=ae*pt+Oe*Je+$e*O,Ke=ae*it+Oe*st+$e*Q,ut=ae*Ae+Oe*Y+$e*K,yt=2*nt*(Je-pt)+2*Ve*(O-Je),Ot=2*nt*(st-it)+2*Ve*(Q-st),qt=2*nt*(Y-Ae)+2*Ve*(K-Y),Vt=Math.hypot(yt,Ot,qt);if(Vt>1e-9?(M=yt/Vt,_=Ot/Vt,S=qt/Vt):we===0&&(M=0,_=-1,S=0),we===0){V?(x=ve,b=D,R=T):Se?(x=_e,b=W,R=be):(x=1,b=0,R=0);let Ut=x*M+b*_+R*S;x-=M*Ut,b-=_*Ut,R-=S*Ut;let Wt=Math.hypot(x,b,R);Wt<1e-6&&(Math.abs(M)<.9?(x=0,b=S,R=-_):(x=-S,b=0,R=M),Wt=Math.hypot(x,b,R)||1),x/=Wt,b/=Wt,R/=Wt,_e=x,W=b,be=R,Se=!0}else{let Ut=x*M+b*_+R*S;x-=M*Ut,b-=_*Ut,R-=S*Ut;let Wt=Math.hypot(x,b,R);Wt<1e-6&&(Math.abs(M)<.9?(x=0,b=S,R=-_):(x=-S,b=0,R=M),Wt=Math.hypot(x,b,R)||1),x/=Wt,b/=Wt,R/=Wt}C=_*R-S*b,L=S*x-M*R,E=M*b-_*x,se(we*n,Le,Ke,ut,ze,x,b,R,C,L,E,0,0,0,1,0),we===0&&(k=M,I=_,P=S,U=x,z=b,te=R,$=C,ne=L,q=E),we===s-1&&(j=M,Me=_,J=S,ye=x,Ee=b,He=R,oe=C,Ce=L,De=E)}for(let we=0;we<2;we++){let Ve=we===0?-1:1,nt=we===0?pt:O,ae=we===0?it:Q,Oe=we===0?Ae:K,$e=we===0?k:j,Le=we===0?I:Me,Ke=we===0?P:J,ut=we===0?U:ye,yt=we===0?z:Ee,Ot=we===0?te:He,qt=we===0?$:oe,Vt=we===0?ne:Ce,Ut=we===0?q:De,Wt=$e*Ve,vn=Le*Ve,Cn=Ke*Ve;for(let On=0;On<r;On++){let cs=Zv[On],Bs=Math.cos(cs),hs=Math.sin(cs);se(a[we]+On*n,nt+Wt*ze*hs,ae+vn*ze*hs,Oe+Cn*ze*hs,ze*Bs,ut,yt,Ot,qt,Vt,Ut,Wt,vn,Cn,Bs,hs)}let xn=(a[we]+r*n)*3;d[xn]=nt+Wt*ze,d[xn+1]=ae+vn*ze,d[xn+2]=Oe+Cn*ze,u[xn]=Wt,u[xn+1]=vn,u[xn+2]=Cn}v.needsUpdate=!0,p.needsUpdate=!0}return{mesh:m,set:Ne}}var Hr=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),I2=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Pu=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Bp=.04,L2=9;function Iu(t,e){let n=Math.sin(t*12.9898+e*78.233)*43758.5453;return(n-Math.floor(n))*Math.PI*2}function D2(t,e,n=[0,0]){return n[0]=.05*Math.sin(1.3*t+Iu(e,1))+.03*Math.sin(2.1*t+Iu(e,2)),n[1]=.04*Math.sin(1.7*t+Iu(e,3))+.02*Math.sin(2.6*t+Iu(e,4)),n}var N2=(t,e)=>Math.min(t*2,1)*Math.max(e,0),Rl=16,Kv=Rl+1,qi=11,tr=4,Lu=13,k2=.07,O2=t=>{let e=t<0?0:t>1?1:t;return e*e*(3-2*e)};function Jv({eyeRadius:t=.1,eyeSpacing:e=.26,eyeY:n=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=B.ink,fixedSmile:h=0,eyeColor:d=B.eyeWhite,eyeGlow:u=!1}={}){let f=t,v=e/2,p=[-v,v],m=.35,g=.035*f,y=f*.3,w=a==="uni",M=0,_=M+2*Kv,S=_+16,x=S+2*qi*tr,b=x+2*qi*2,R=b+(w?6:8),C=R+Lu*2,L=[],E=Ae=>L.push(Ae,Ae+1,Ae+2,Ae,Ae+2,Ae+3),k=(Ae,O)=>{for(let Q=0;Q<O-1;Q++){let K=Ae+Q*2;L.push(K,K+1,K+2,K+1,K+3,K+2)}};for(let Ae=0;Ae<2;Ae++){let O=M+Ae*Kv;for(let Q=0;Q<Rl;Q++)L.push(O,O+1+Q,O+1+(Q+1)%Rl)}for(let Ae=0;Ae<4;Ae++)E(_+Ae*4);for(let Ae=0;Ae<2;Ae++){let O=S+Ae*qi*tr;for(let Q=0;Q<qi-1;Q++)for(let K=0;K<tr-1;K++){let ve=O+Q*tr+K,D=ve+1,T=ve+tr,G=T+1;L.push(ve,D,T,D,G,T)}k(x+Ae*qi*2,qi)}w?L.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4,b+3,b+5,b+4):(E(b),E(b+4)),k(R,Lu);let I=[];for(let Ae=0;Ae<2;Ae++){let O=new jt(f,18,12);O.deleteAttribute("uv"),O.applyMatrix4(new bt().makeScale(1,1,m).setPosition(p[Ae],n,i)),I.push(O)}let P=new rt(Bt(I,!1),u?new sn({color:d,toneMapped:!1}):Et({color:d,shadowMix:.35,rim:0}));P.name="eyes",Ln(P,{px:2});let U=new Float32Array(C*3),z=new Float32Array(C*3),te=new Float32Array(C*3),$=new Ze(B.ink),ne=new Ze(c);for(let Ae=0;Ae<C;Ae++){z[Ae*3+2]=1;let O=Ae>=S&&Ae<x?ne:$;te[Ae*3]=O.r,te[Ae*3+1]=O.g,te[Ae*3+2]=O.b}let q=new Nt,j=new xt(U,3);j.setUsage(Yo),q.setAttribute("position",j),q.setAttribute("normal",new xt(z,3)),q.setAttribute("color",new xt(te,3)),q.setIndex(L);let Me=n+f*3.5,J=s-r*1.5-f,ye=Math.max(v+2.5*f,r);q.boundingSphere=new jn(new H(0,(Me+J)/2,i),Math.hypot(ye,(Me-J)/2,f*2));let Ee=Et({color:"#ffffff",vertexColors:!0,rim:0});Ee.side=Tn;let He=new rt(q,Ee);He.name="features";let oe=new dt;oe.name="face",oe.add(P,He);let Ce=Hr.neutral,De=Ae=>{let O=h>0?I2[Ae]:0;return O>0?h*O:-1/0},se=De("neutral"),Se=Ae=>Ae==="mouthCurve"&&Ce.mouthCurve<se?se:Ce[Ae],_e={};for(let Ae of Pu)_e[Ae]={x:Se(Ae),v:0};let W={x:0,v:0},be={x:0,v:0},Ne=0,fe=!1,ge=0,Re=[0,0],Ue=0;function ze(Ae,O,Q){let K=Ue*3;U[K]=Ae,U[K+1]=O,U[K+2]=Q,Ue++}function Je(Ae,O,Q){let K=1-(Ae*Ae+O*O)/(f*f);return i+f*m*Math.sqrt(K>0?K:0)+Q}function st(Ae,O,Q,K,ve,D){let T=-(K-O),G=Q-Ae,re=Math.hypot(T,G)||1;T=T/re*ve/2,G=G/re*ve/2,ze(Ae+T,O+G,D),ze(Q+T,K+G,D),ze(Q-T,K-G,D),ze(Ae-T,O-G,D)}let Y=f*1.03;function pt(){let Ae=_e,O=Ae.pupilScale.x*(1-W.x),Q=W.x,K=Math.min(Math.max(Ae.lid.x,0),.95),ve=Ae.browAngle.x,D=K>.005,T=Y-2*Y*K,G=ve*.6*Math.min(K*4,1),re=f*k2*Math.min(K*10,1);Ue=M;for(let ae=0;ae<2;ae++){let Oe=ae===0?-1:1;D2(ge,l+ae*7.31,Re);let $e=f*.5*(O>0?O:0),Le=Re[0]*f,Ke=Re[1]*f;if(D){let yt=T+G*Oe*Le-Math.abs(G)*$e-re-(Ke+$e);if(yt>0){let Ot=Math.min(Math.max((yt-.1*f)/(.1*f),0),1);Ke+=yt*(1-O2(Ot))}}ze(p[ae]+Le,n+Ke,Je(Le,Ke,g));for(let ut=0;ut<Rl;ut++){let yt=ut/Rl*Math.PI*2,Ot=Le+Math.cos(yt)*$e,qt=Ke+Math.sin(yt)*$e;ze(p[ae]+Ot,n+qt,Je(Ot,qt,g))}}Ue=_;for(let ae=0;ae<2;ae++){let Oe=f*.55*Q,$e=Je(0,0,g),Le=f*.26*Q;st(p[ae]-Oe,n-Oe,p[ae]+Oe,n+Oe,Le,$e),st(p[ae]-Oe,n+Oe,p[ae]+Oe,n-Oe,Le,$e)}for(let ae=0;ae<2;ae++){let Oe=ae===0?-1:1;for(let $e=0;$e<2;$e++){Ue=$e===0?S+ae*qi*tr:x+ae*qi*2;for(let Le=0;Le<qi;Le++){let Ke=(Le/(qi-1)*2-1)*(Math.PI/2),ut=Y*Math.sin(Ke),yt=Y*Math.cos(Ke),Ot=D?T+G*ut:yt;Ot>yt&&(Ot=yt),Ot<-yt&&(Ot=-yt);let qt=Oe*ut;if($e===0)for(let Vt=0;Vt<tr;Vt++){let Ut=yt+(Ot-yt)*(Vt/(tr-1));ze(p[ae]+qt,n+Ut,Je(qt,Ut*.97,g*3))}else{let Vt=Ot+(D?f*.02:0);Vt>yt&&(Vt=yt);let Ut=Ot-re;Ut<-yt&&(Ut=-yt),ze(p[ae]+qt,n+Vt,Je(qt,Vt*.97,g*3.5)),ze(p[ae]+qt,n+Ut,Je(qt,Ut*.97,g*3.5))}}}}Ue=b;let ee=f*.9,pe=n+f*(1.4+Ae.browY.x),Pe=Math.cos(ve),he=Math.sin(ve),ue=i+f*.15;if(w){let ae=v+ee*Pe,Oe=pe+ee*he,$e=pe-he/(Pe>.3?Pe:.3)*v,Le=-($e-Oe),Ke=ae,ut=Math.hypot(Le,Ke)||1;Le/=ut,Ke/=ut;let yt=-(Oe-$e),Ot=ae,qt=Math.hypot(yt,Ot)||1;yt/=qt,Ot/=qt;let Vt=Le+yt,Ut=Ke+Ot,Wt=Math.hypot(Vt,Ut)||1;Vt/=Wt,Ut/=Wt;let vn=Vt*Le+Ut*Ke,Cn=y/2/(vn>.4?vn:.4);ze(-ae+Le*y/2,Oe+Ke*y/2,ue),ze(-ae-Le*y/2,Oe-Ke*y/2,ue),ze(Vt*Cn,$e+Ut*Cn,ue),ze(-Vt*Cn,$e-Ut*Cn,ue),ze(ae+yt*y/2,Oe+Ot*y/2,ue),ze(ae-yt*y/2,Oe-Ot*y/2,ue)}else for(let ae=0;ae<2;ae++){let Oe=ae===0?-1:1;st(p[ae]-Oe*ee*Pe,pe-ee*he,p[ae]+Oe*ee*Pe,pe+ee*he,y,ue)}Ue=R;let ke=Ae.mouthOpen.x+be.x*(.55+.45*Math.sin((ge+l*.37)*L2*Math.PI*2))*.8,V=ke>0?ke<1.2?ke:1.2:0,de=-Ae.mouthCurve.x/.5,ie=(de>1?1:de>0?de:0)*(V<.4?V/.4:1),Ie=r/2*(1-.35*(V<1?V:1)*(1-.7*ie)),xe=N2(Ae.lid.x,Ae.mouthCurve.x),we=Ae.mouthCurve.x*Ie*.5*(1-.4*xe)*(1+.6*ie),Ve=.55+.5*ie,nt=V*Ie*.9;for(let ae=0;ae<Lu;ae++){let Oe=ae/(Lu-1)*2-1,$e=1-Oe*Oe,Le=Oe*Ie*(1-.25*xe)+xe*Ie*.2,Ke=s-we*$e+xe*Ie*.45*Oe+W.x*y*.6*Math.sin(Oe*Math.PI*3);ze(Le,Ke,o),ze(Le,Ke-y-nt*Math.pow($e,Ve)+we*$e*ie,o)}j.needsUpdate=!0}function it(Ae){ge+=Ae;for(let O=0;O<Pu.length;O++)$n(_e[Pu[O]],Se(Pu[O]),Bp,Ae);$n(W,Ne,Bp,Ae),$n(be,fe?1:0,Bp,Ae),pt()}return pt(),{group:oe,setExpression(Ae){Ce=Object.prototype.hasOwnProperty.call(Hr,Ae)?Hr[Ae]:Hr.neutral,Ne=Ae==="dead"?1:0,se=De(Object.prototype.hasOwnProperty.call(Hr,Ae)?Ae:"neutral")},setTalking(Ae){fe=!!Ae},update:it}}var Zn=Math.PI*2,Cl=["handL","handR","footL","footR"];function Zi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function jv(t,e){e.hipsY=t.hipsY,e.lean=t.lean,e.twist=t.twist,e.headYaw=t.headYaw,e.headPitch=t.headPitch,e.squash=t.squash,e.elbows=t.elbows;for(let n=0;n<4;n++){let i=t[Cl[n]],s=e[Cl[n]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function Pl(t,e,n,i=[0,0,0]){let s=n[0],r=n[1]-t.hipHeight,o=n[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var U2=t=>t<0?0:t>1?1:t,$i=(t,e,n)=>{let i=U2((n-t)/(e-t));return i*i*(3-2*i)},Gr=(t,e,n,i,s)=>$i(e,n,t)*(1-$i(i,s,t));function It(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}var Du=[0,0,0];function gi(t,e,n,i,s,r){return Du[0]=n,Du[1]=i,Du[2]=s,Pl(t,e,Du,r)}var Nu={sx:0,sy:0,fx:0};function Gn(t){return Nu.sx=Math.abs(t.shoulderL[0]),Nu.sy=t.shoulderL[1],Nu.fx=Math.abs(t.hipL[0])+.035,Nu}var jo=(t,e)=>e>0?t.handL:t.handR;function zp(t,e,n,i,s){return gi(t,e,s*(n.sx+.16),t.hipHeight+0,.1,i)}var Hp=.55;function Bu(t,e,n){let i=Gn(e),s=t/gt.idle.duration,r=Zn*s,o=e.hipHeight,a=Gr(s,.42,.52,.72,.86);return n.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),n.lean=.03+.015*Math.sin(r+.4),n.twist=.05*Math.sin(r+.6),n.headYaw=.03*Math.sin(r)+.3*a,n.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,n.squash=1+.008*Math.sin(r),n.elbows=Hp,zp(e,n,i,n.handL,1),zp(e,n,i,n.handR,-1),n.handL[1]+=.008*Math.sin(r-.5),n.handR[1]+=.008*Math.sin(r+.4),n.handL[2]+=.01*Math.sin(r+1.1),n.handR[2]+=.01*Math.sin(r-.7),It(n.footL,i.fx,0,.015),It(n.footR,-i.fx,0,-.015),n}var Ps=.34,Gp=.25,tx=-.33,F2=.4,B2=.37,z2=.035,Fu=(Gp-tx)/Ps;function Qv(t,e){if(t<Ps)return e[0]=0,e[1]=Gp-Fu*t,e;let n=(t-Ps)/(1-Ps),i=-Fu*(1-Ps),s=-.35*Fu*(1-Ps),r=n*n,o=r*n;return e[1]=(2*o-3*r+1)*tx+(o-2*r+n)*i+(-2*o+3*r)*Gp+(o-r)*s,e[0]=F2*Math.sin(Math.PI*Math.pow(n,.8)),e}var En=[0,0];function nx(t,e,n){let i=Gn(e),s=t/gt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*Zn*(r-(Ps+.5)/2);n.hipsY=o-.06+z2*Math.cos(a),n.squash=1+.045*Math.cos(2*Zn*(r-Ps-.03)),n.lean=B2+.03*Math.cos(2*Zn*(r-Ps));let l=Math.cos(Zn*(r+.03));n.twist=.2*l,n.headYaw=-.15*l,n.headPitch=-.28+.04*Math.cos(a),n.elbows=0,Qv(r,En),It(n.footL,i.fx*.75,En[0],En[1]),Qv(r<.5?r+.5:r-.5,En),It(n.footR,-i.fx*.75,En[0],En[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;gi(e,n,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,jo(n,c))}return n}function ix(t,e,n){let i=Gn(e),s=Zn*t/gt.aim.duration,r=e.hipHeight;n.hipsY=r-.05+.005*Math.sin(s),n.lean=.12+.01*Math.sin(s),n.twist=-.1,n.headYaw=.08,n.headPitch=.04+.012*Math.sin(2*s),n.squash=1,n.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return It(n.handL,i.sx*1.2+o,i.sy-.12+a,.56),It(n.handR,-i.sx*1.25+o,i.sy-.06+a,.52),It(n.footL,i.fx+.02,0,.15),It(n.footR,-i.fx-.03,0,-.13),n}var Vp=.35;function H2(t){return t<.06?$i(0,.06,t):Math.exp(-9*(t-.06))*(1-$i(.24,Vp,t))}function G2(t){if(t<.07)return $i(0,.07,t);let e=t-.07;return Math.exp(-11*e)*Math.cos(Zn*e/.22)*(1-$i(.26,Vp,t))}function V2(t,e,n){let i=Gn(e),s=e.hipHeight,r=H2(t);n.hipsY=s-.012-.05*r,n.lean=.03-.4*r,n.twist=.12*r,n.headYaw=-.12*r,n.headPitch=-.02-.32*r,n.squash=1-.15*G2(t),n.elbows=Hp+(1-Hp)*r;for(let o=-1;o<=1;o+=2){let a=jo(n,o);zp(e,n,i,a,o);let l=a[0],c=a[1],h=a[2];gi(e,n,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return It(n.footL,i.fx,0,.015),It(n.footR,-i.fx,0,-.015),n}var nr=[0,0,0];function W2(t,e,n){Bu(t,e,n);let i=Gn(e),s=t/gt.talk.duration,r=Zn*s,o=Gr(s,.04,.17,.4,.55),a=Gr(s,.5,.63,.8,.95),l=Math.sin(3*r);n.headPitch+=.05*Math.sin(4*r)-.04*(o+a),n.headYaw+=-.12*o+.12*a,n.elbows+=(.85-n.elbows)*Math.max(o,a),gi(e,n,-(i.sx+.19),i.sy-.1+.03*l,.36,nr);for(let c=0;c<3;c++)n.handR[c]+=(nr[c]-n.handR[c])*o;gi(e,n,i.sx+.19,i.sy-.12-.03*l,.34,nr);for(let c=0;c<3;c++)n.handL[c]+=(nr[c]-n.handL[c])*a;return n}var Qn=Zi();function X2(t,e,n){let i=t/gt.roll.duration,s=Gr(i,0,.15,.75,1),r=Gn(e);Bu(0,e,Qn);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(Qn.hipsY,.45),n.lean=o(Qn.lean,1.3),n.twist=0,n.headYaw=0,n.headPitch=o(Qn.headPitch,.35),n.squash=o(1,.9),n.elbows=1;for(let a=-1;a<=1;a+=2){let l=jo(n,a),c=jo(Qn,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?n.footL:n.footR,d=a>0?Qn.footL:Qn.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return n}function Y2(t,e,n){return nx(t,e,n),n.hipsY-=.12,n.lean+=.15,n}var q2=.25,$2=.85,Z2=.82;function sx(t,e,n){let i=Gn(e),s=Zn*t/gt.coverLow.duration;return n.hipsY=q2+.006*Math.sin(s),n.lean=$2+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=-.55+.03*Math.sin(2*s+1),n.squash=Z2,n.elbows=1,It(n.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),It(n.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),It(n.footL,i.fx+.08,0,.12),It(n.footR,-i.fx-.08,0,.12),n}function rx(t,e,n,i){let s=Gn(t),r=i/gt[n].duration,o=Math.sin(Zn*r);return e.hipsY+=.012*Math.cos(2*Zn*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function K2(t,e,n){return sx(0,e,n),rx(e,n,"coverLowMove",t),n}function Wp(t,e,n){let i=Gn(e),s=Zn*t/gt.coverTall.duration;return n.hipsY=e.hipHeight-.012+.006*Math.sin(s),n.lean=.07+.01*Math.sin(s+.4),n.twist=.02*Math.sin(s+.6),n.headYaw=.05*Math.sin(s),n.headPitch=0+.02*Math.sin(2*s+1),n.squash=1+.006*Math.sin(s),n.elbows=1,gi(e,n,i.sx+.14,i.sy+0,.31,n.handL),gi(e,n,-i.sx-.14,i.sy+0,.31,n.handR),It(n.footL,i.fx,0,.015),It(n.footR,-i.fx,0,-.015),n}function J2(t,e,n){return Wp(0,e,n),rx(e,n,"coverTallMove",t),n}function j2(t,e,n){return ix(t*(gt.aim.duration/gt.coverPop.duration),e,n),n.hipsY-=.07,n.lean+=.06,n.footL[2]+=.04,n.footR[2]-=.04,n.footL[0]+=.04,n.footR[0]-=.04,n}function Q2(t,e,n){let i=t/gt.vault.duration,s=Gr(i,0,.3,.7,1),r=Gn(e);Bu(0,e,Qn);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(Qn.hipsY,e.hipHeight-.02),n.lean=o(Qn.lean,.55),n.twist=0,n.headYaw=0,n.headPitch=o(Qn.headPitch,-.25),n.squash=1,n.elbows=1;for(let a=-1;a<=1;a+=2){let l=jo(n,a),c=jo(Qn,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?n.footL:n.footR,d=a>0?Qn.footL:Qn.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return n}var eA=.17,tA=.5,nA=-.9,iA=.82;function sA(t,e,n){let i=Gn(e),s=Zn*t/gt.coverBlindLow.duration;return n.hipsY=eA+.006*Math.sin(s),n.lean=tA+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=nA+.03*Math.sin(2*s+1),n.squash=iA,n.elbows=1,Pl(e,n,e.shoulderR,nr),It(n.handR,nr[0]-.02,nr[1]+.44+.008*Math.sin(s+.4),nr[2]+.12),It(n.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),It(n.footL,i.fx+.08,0,.12),It(n.footR,-i.fx-.08,0,.12),n}function ex(t,e,n,i){Wp(t*(gt.coverTall.duration/gt.coverBlindTallL.duration),e,n);let s=Gn(e);return gi(e,n,i*(s.sx+.4),s.sy,.2,i>0?n.handL:n.handR),n}var rA=.3,oA=1.2,ku=[.4,.62],Ou=[-.6,-.36];function Uu(t,e,n,i,s,r){if(t-=Math.floor(t),t<.5)return r[0]=s,r[1]=e+(n-e)*(t/.5),r;let o=(t-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=n+(e-n)*(o*o*(3-2*o)),r}function aA(t,e,n){let i=Gn(e),s=t/gt.crawl.duration,r=Zn*s;return n.hipsY=rA+.012*Math.cos(2*r),n.lean=oA+.03*Math.cos(2*r),n.twist=.1*Math.sin(r),n.headYaw=-.1*Math.sin(r),n.headPitch=-.75,n.squash=1,n.elbows=1,Uu(s,ku[1],ku[0],.16,.04,En),It(n.handL,i.sx+.12,En[0],En[1]),Uu(s+.5,ku[1],ku[0],.16,.04,En),It(n.handR,-i.sx-.12,En[0],En[1]),Uu(s,Ou[1],Ou[0],.16,0,En),It(n.footR,-i.fx-.02,En[0],En[1]),Uu(s+.5,Ou[1],Ou[0],.16,0,En),It(n.footL,i.fx+.02,En[0],En[1]),n}function Jo(t,e,n){let i=e.length;if(t<=e[0][0])return It(n,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(t<a[0]){let l=$i(o[0],a[0],t);return It(n,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return It(n,s[1],s[2],s[3])}var lA=.4,cA=.9;function hA(t,e,n){let i=Gn(e),s=t/gt.revive.duration,r=Zn*s;return n.hipsY=lA+.012*Math.sin(2*r),n.lean=cA+.05*Math.sin(2*r),n.twist=.04*Math.sin(r),n.headYaw=.04*Math.sin(r),n.headPitch=-.55,n.squash=1,n.elbows=1,It(n.handL,i.sx-.06,.37-.06*Math.sin(r),.64),It(n.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),It(n.footL,i.fx+.06,0,-.32),It(n.footR,-i.fx-.06,0,-.32),n}var uA=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],dA=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],fA=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],Hn=[0,0,0];function pA(t,e,n){let i=Gn(e),s=t/gt.bash.duration;return Jo(s,dA,Hn),n.lean=Hn[0],Jo(s,fA,Hn),n.twist=Hn[0],n.hipsY=e.hipHeight-.09-.03*Gr(s,.2,.33,.55,.9),n.headYaw=-.5*n.twist,n.headPitch=-.1,n.squash=1,n.elbows=1,Jo(s,uA,Hn),gi(e,n,Hn[0],Hn[1],Hn[2],n.handR),gi(e,n,i.sx+.14,i.sy-.1,.32,n.handL),It(n.footL,i.fx+.04,0,-.14),It(n.footR,-i.fx-.04,0,.2),n}var mA=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],gA=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],vA=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function xA(t,e,n){let i=Gn(e),s=t/gt.throw.duration;return Jo(s,gA,Hn),n.lean=Hn[0],Jo(s,vA,Hn),n.twist=Hn[0],n.hipsY=e.hipHeight-.07-.03*Gr(s,.4,.6,.9,1),n.headYaw=-.4*n.twist,n.headPitch=-.05,n.squash=1,n.elbows=1,Jo(s,mA,Hn),gi(e,n,Hn[0],Hn[1],Hn[2],n.handR),gi(e,n,i.sx+.2,i.sy-.12-.08*$i(.5,.9,s),.34-.12*$i(.5,.9,s),n.handL),It(n.footL,i.fx+.04,0,.1+.06*$i(.4,.7,s)),It(n.footR,-i.fx-.04,0,-.16),n}var yA=.05;function hn(t,e,n,i=yA){return Object.freeze({duration:t,loop:e,ease:i,sample:(s,r,o=Zi())=>n(s,r,o)})}var gt=Object.freeze({idle:hn(2.4,!0,Bu),run:hn(.56,!0,nx,.008),aim:hn(1.6,!0,ix),flinch:hn(Vp,!1,V2),talk:hn(2.4,!0,W2),roll:hn(.55,!1,X2,.02),sprint:hn(.56,!0,Y2,.008),coverLow:hn(2.4,!0,sx),coverLowMove:hn(.5,!0,K2),coverTall:hn(2.4,!0,Wp),coverTallMove:hn(.5,!0,J2),coverPop:hn(1.6,!0,j2),vault:hn(.5,!1,Q2,.02),coverBlindLow:hn(1.6,!0,sA),coverBlindTallL:hn(1.6,!0,(t,e,n)=>ex(t,e,n,1)),coverBlindTallR:hn(1.6,!0,(t,e,n)=>ex(t,e,n,-1)),crawl:hn(1,!0,aA),revive:hn(.5,!0,hA),bash:hn(.45,!1,pA,.02),throw:hn(.5,!1,xA,.02)}),Ki=Fu/gt.run.duration;function Il(t,e,n,i){let s=Object.prototype.hasOwnProperty.call(gt,t)?gt[t]:null;if(!s)throw new Error(`unknown clip: ${t}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,n,i||Zi())}function zu(t,e,n,i=Zi()){if(!(n>0))return jv(t,i);if(n>=1)return jv(e,i);let s=1-n;i.hipsY=t.hipsY*s+e.hipsY*n,i.lean=t.lean*s+e.lean*n,i.twist=t.twist*s+e.twist*n,i.headYaw=t.headYaw*s+e.headYaw*n,i.headPitch=t.headPitch*s+e.headPitch*n,i.squash=t.squash*s+e.squash*n,i.elbows=t.elbows*s+e.elbows*n;for(let r=0;r<4;r++){let o=t[Cl[r]],a=e[Cl[r]],l=i[Cl[r]];l[0]=o[0]*s+a[0]*n,l[1]=o[1]*s+a[1]*n,l[2]=o[2]*s+a[2]*n}return i}var bA=.05,Is=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Ll=["handL","handR","footL","footR"],Xp=Is.length+Ll.length*3,Qo=[.35,-.2,-.8],Yp=[.75,-.85,-.15];function en(t,e){if(t.deleteAttribute("uv"),!t.index){let r=t.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;t.setIndex(o)}let n=new Ze(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new xt(s,3)),t}var _A=new bt,ei=(t,e,n,i,s=0,r=0,o=0,a=1,l=1,c=1)=>t.applyMatrix4(_A.compose(new H(e,n,i),new Xn().setFromEuler(new Jn(s,r,o)),new H(a,l,c)));function Vr(t=20,e=14){let n=new jt(1,t,e);return n.deleteAttribute("uv"),n.deleteAttribute("normal"),Uv(n)}function qp(t,e,n){let i=Vr(e,n),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)t(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Gu(t,e,n){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,s,r),a=new $t(n,n,o,6,1),l=new Xn().setFromUnitVectors(new H(0,1,0),new H(i/o,s/o,r/o));return a.applyMatrix4(new bt().compose(new H((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),l,new H(1,1,1))),a}function Vu(t,e,n={}){let i=Bt(t,!1);if(!i)throw new Error(`rig: could not merge the ${e} parts`);ai(i),i.computeBoundingSphere();let s=new rt(i,Et({color:"#ffffff",vertexColors:!0,...n.rim!==void 0?{rim:n.rim}:{},...n.rimColor?{rimColor:n.rimColor}:{}}));return s.name=e,Ln(s),s}function $p(t,e,n,i,s){let r=2/t.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*t.rx,s[1]=o(n)*t.ry;let a=o(i)*t.rz;return a>t.flatZ&&(a=t.flatZ+(a-t.flatZ)*t.flatK),s[2]=a,s}function MA(t){let e=t.torso,n=t.colors,i=t.outfit,s=(h,d)=>{let u=new cl(h.map(([f,v])=>new Be(f,v)),22);return u.scale(1,1,e.depth),en(u,d)},r=[s(e.pants,n.pants),s(e.shirt,n.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=t.shoulderL[1]-t.hipHeight;for(let h of[-1,1]){let d=Vr(14,10);ei(d,h*Math.abs(t.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(en(d,n.shirt))}if(i.collar){let h=new kr(.1,.03,8,20);ei(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(en(h,n.collar))}if(i.logo){let u=new $t(.03,.03,.01,12);ei(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(en(u,n.logo))}if(i.badge&&!i.lanyard){let d=l(.09,.2)+.012,u=new ct(.075,.1,.014);ei(u,.09,.2,d,-.05,0,.04);let f=new ct(.077,.026,.016);ei(f,.09,.2+.028,d,-.05,0,.04),r.push(en(u,n.badge),en(f,n.badgeStripe))}if(i.lanyard){let d=l(0,.15)+.012;for(let v of[-1,1]){let p=[v*.075,o-.03,.085],m=[v*.05,.34,l(.05,.34)+.014],g=[v*.014,.15+.05,l(.014,.15+.05)+.01];r.push(en(Gu(p,m,.008),n.lanyard),en(Gu(m,g,.008),n.lanyard))}let u=new ct(.075,.1,.014);ei(u,0,.15,d,-.05,0,.04);let f=new ct(.077,.026,.016);ei(f,0,.15+.028,d,-.05,0,.04),r.push(en(u,n.badge),en(f,n.badgeStripe))}return Vu(r,"torso",n)}function wA(t){let e=t.head,n=t.hair,i=t.colors,s=t.outfit,r=[],o=qp((a,l,c,h)=>$p(e,a,l,c,h),40,28);r.push(en(o,i.skin),en(SA(e,n),i.hair));for(let a of[-1,1]){let l=Vr(12,8);ei(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(en(l,i.skin))}{let a=t.face,l=(a.eyeY+a.mouthY)/2-.005,c=Vr(12,8);ei(c,0,l,TA(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(en(c,i.skin))}if(s.headset){let a=e.ry+n.thickness+.03,l=new qn;l.getPoint=(p,m=new H)=>m.set(Math.cos(Math.PI*p)*(e.rx+n.thickness+.012),Math.sin(Math.PI*p)*a,0);let c=new hl(l,24,.014,6,!1);ei(c,0,0,-.03,-.12,0,0),r.push(en(c,i.headset));for(let p of[-1,1]){let m=new $t(.055,.06,.05,14);ei(m,p*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(en(m,i.headset))}let h=t.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(en(Gu(d,u,.009),i.headset),en(Gu(u,f,.009),i.headset));let v=Vr(10,8);ei(v,f[0],f[1],f[2],0,0,0,.022,.02,.022),v.computeVertexNormals(),r.push(en(v,i.mic))}return Vu(r,"headMesh",i)}var ir=48,Hu=12;function SA(t,e){let n=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=mu.smoothstep,r=[],o=(u,f,v)=>{let p=Math.sin(u)*Math.sin(f),m=Math.cos(u),g=Math.sin(u)*Math.cos(f);$p(t,p,m,g,i);let y=i[0]/(t.rx*t.rx),w=i[1]/(t.ry*t.ry),M=i[2]/(t.rz*t.rz),_=Math.hypot(y,w,M)||1;y/=_,w/=_,M/=_;let S=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(g+.3,0),x=e.quiff?e.lift*Math.max(g,0)*s(i[1],.12,.26)*(1-.5*p):0,b=e.back*Math.max(-g,0)*s(i[1],-.15,.1),R=v?-.01:e.thickness*(1-.55*Math.min(S,1))+x+b;r.push(i[0]+y*R,i[1]+w*R,i[2]+M*R)},a=u=>{let f=0,v=Math.PI;for(let p=0;p<40;p++){let m=(f+v)/2,g=Math.sin(m)*Math.sin(u),y=Math.sin(m)*Math.cos(u);$p(t,g,Math.cos(m),y,i),i[1]>n(g,y)?f=m:v=m}return f};o(0,0,!1);let l=[];for(let u=0;u<ir;u++)l.push(a(u/ir*Math.PI*2));for(let u=1;u<=Hu+1;u++)for(let f=0;f<ir;f++){let v=f/ir*Math.PI*2,p=u>Hu;o(p?l[f]+.03:l[f]*(u/Hu),v,p)}let c=(u,f)=>1+(u-1)*ir+f%ir,h=[];for(let u=0;u<ir;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Hu;u++)for(let f=0;f<ir;f++){let v=c(u,f),p=c(u,f+1),m=c(u+1,f),g=c(u+1,f+1);h.push(v,m,g,v,g,p)}let d=new Nt;return d.setAttribute("position",new mt(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function TA(t,e,n){let i=1-Math.pow(Math.abs(e/t.rx),t.power)-Math.pow(Math.abs(n/t.ry),t.power),s=i>0?t.rz*Math.pow(i,1/t.power):0;return s>t.flatZ?t.flatZ+(s-t.flatZ)*t.flatK:s}function ox(t,e){let n=t.hand.radius,i=t.colors,s=Vr(14,10);ei(s,0,n*.75,0,0,0,0,n*.78,n*1.1,n*.95),s.computeVertexNormals();let r=Vr(10,8);return ei(r,n*.3,n*.45,e*n*.75,e*-.6,0,.3,n*.34,n*.55,n*.34),r.computeVertexNormals(),Vu([en(s,i.skin),en(r,i.skin)],e>0?"handL":"handR",i)}function ax(t,e){let n=t.shoe,i=t.colors,s=n.width/2,r=n.length/2,o=n.length*.18,a=.03,l=qp((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,n.height*.55+d*n.height*.6-Math.max(u,0)*n.height*.25),f[2]=o+u*r*.96},20,12),c=qp((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return Vu([en(l,i.shoe),en(c,i.sole)],e>0?"footL":"footR",i)}function Ji(t){let e=new dt;e.name=t.name||"character";let n=new dt;n.name="body",e.add(n);let i=new dt;i.name="hips",i.rotation.order="YXZ";let s=MA(t);i.add(s);let r=new dt;r.name="head",r.rotation.order="YXZ",r.position.set(0,t.neckY-t.hipHeight,0),i.add(r);let o=wA(t);o.position.y=t.head.centerY,r.add(o);let a=Jv({...t.face,lidColor:t.colors.skin});a.group.position.y=t.head.centerY,r.add(a.group),n.add(i);let l=[ox(t,1),ox(t,-1)],c=[ax(t,1),ax(t,-1)],h=[0,1].map(()=>Fp({radius:t.armRadius,color:t.colors.skin})),d=[0,1].map(()=>Fp({radius:t.legRadius,color:t.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",n.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=Ru({rx:.45,rz:.38,opacity:.55});e.add(u);let f=Zi(),v=Zi(),p=[];for(let q=0;q<Xp;q++)p.push({x:0,v:0});let m=!1,g=bA,y=(q,j)=>j<Is.length?q[Is[j]]:q[Ll[(j-Is.length)/3|0]][(j-Is.length)%3];function w(q,j,Me){j<Is.length?q[Is[j]]=Me:q[Ll[(j-Is.length)/3|0]][(j-Is.length)%3]=Me}function M(q,j){j>=0&&(g=j),f.hipsY=q.hipsY,f.lean=q.lean,f.twist=q.twist,f.headYaw=q.headYaw,f.headPitch=q.headPitch,f.squash=q.squash,f.elbows=q.elbows>=0?q.elbows:0;for(let Me=0;Me<4;Me++){let J=q[Ll[Me]],ye=f[Ll[Me]];ye[0]=J[0],ye[1]=J[1],ye[2]=J[2]}if(!m){m=!0;for(let Me=0;Me<Xp;Me++)p[Me].x=y(f,Me),p[Me].v=0}}let _=[0,0,0],S=[0,0,0],x=[0,0,0],b=[0,0,0],R={mid:[0,0,0],end:[0,0,0],stretch:1},C=new H,L=new H,E=new H,k=new bt,I=t.armLength/2,P=t.legLength/2,U=t.ankleHeight;function z(q,j,Me){let J=Math.cos(v.twist),ye=Math.sin(v.twist);b[0]=q*J+Me*ye,b[1]=j,b[2]=-q*ye+Me*J}function te(){let q=v.squash>.2?v.squash:.2,j=1/Math.sqrt(q);n.scale.set(j,q,j),i.position.set(0,v.hipsY,0),i.rotation.set(v.lean,v.twist,0),r.rotation.set(v.headPitch,v.headYaw,0);for(let Me=0;Me<2;Me++){let J=Me===0?1:-1;Pl(t,v,Me===0?t.shoulderL:t.shoulderR,_);let ye=v.elbows<0?0:v.elbows>1?1:v.elbows;z(J*(Qo[0]+(Yp[0]-Qo[0])*ye),Qo[1]+(Yp[1]-Qo[1])*ye,Qo[2]+(Yp[2]-Qo[2])*ye),Up(_,Me===0?v.handL:v.handR,I,I,b,R),h[Me].set(_,R.mid,R.end,R.stretch);let Ee=l[Me];Ee.position.set(R.end[0],R.end[1],R.end[2]),C.set(R.end[0]-R.mid[0],R.end[1]-R.mid[1],R.end[2]-R.mid[2]),C.lengthSq()<1e-10&&C.set(0,-1,0),C.normalize(),L.set(-J*Math.cos(v.twist),0,J*Math.sin(v.twist)),L.addScaledVector(C,-L.dot(C)),L.lengthSq()<1e-4&&L.set(0,0,1).addScaledVector(C,-C.z),L.normalize(),E.crossVectors(L,C),k.makeBasis(L,C,E),Ee.quaternion.setFromRotationMatrix(k),Pl(t,v,Me===0?t.hipL:t.hipR,S);let He=Me===0?v.footL:v.footR;x[0]=He[0],x[1]=He[1]+U,x[2]=He[2],z(J*.15,0,1),Up(S,x,P,P,b,R),d[Me].set(S,R.mid,R.end,R.stretch);let oe=c[Me];oe.position.set(R.end[0],R.end[1]-U,R.end[2]),oe.rotation.set(Math.min(Math.max(R.end[1]-U,0),.3)*1.1,v.twist*.3,0)}}function $(q){if(m)for(let j=0;j<Xp;j++)$n(p[j],y(f,j),g,q),w(v,j,p[j].x);te(),a.update(q)}Il("idle",0,t,v),te();function ne(){e.traverse(q=>{!q.isMesh||q.userData.isOutline||(q.geometry.dispose(),q!==u&&q.material.dispose())}),e.removeFromParent()}return{root:e,spec:t,face:a,setPose:M,update:$,dispose:ne,shadow:u}}var EA=.15,AA=.03,lx=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function ji(t){let e=t.spec,n="idle",i=0,s="idle",r=0,o=0,a=gt[n].ease,l=Zi(),c=Zi(),h=Il(n,0,e);zu(h,h,1,l);function d(v,{fade:p,at:m}={}){Object.prototype.hasOwnProperty.call(gt,v)&&(v===n&&gt[v].loop||(v==="flinch"&&n!=="flinch"&&(s=n),zu(h,h,1,l),a=u(),r=p===void 0?v==="flinch"?AA:EA:Math.max(p,0),o=0,n=v,i=Number.isFinite(m)&&m>0?m:0,t.face.setTalking(v==="talk")))}function u(){let v=r>0?lx(o/r):1;return a+(gt[n].ease-a)*v}function f(v,p=v){let m=gt[n];if(i+=v,o+=p,m.loop)i>=m.duration&&(i-=m.duration*Math.floor(i/m.duration));else if(i>=m.duration)return d(s),f(0);Il(n,i,e,c),zu(l,c,r>0?lx(o/r):1,h),t.setPose(h,u())}return{play:d,update:f,current:()=>n}}function Ls(t,e,n){let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*n)<<o}return"#"+r.toString(16).padStart(6,"0")}function Dl(t){for(let e of Object.values(t))e&&typeof e=="object"&&Dl(e);return Object.freeze(t)}var ea=B.glorpPurple,Qi="#ffcf3a",Zp="#8fe04a",cx=Ls(Zp,B.ink,.6),hx={rim:.55,rimColor:"#e4ff8a"},RA=Object.freeze({eyeColor:"#e8ff3a",eyeGlow:!0}),Kp=Dl({associate:{shirt:ea,collar:Ls(ea,B.ink,.25),logo:B.gel,pants:Ls(B.planet,B.ink,.3),skin:Zp,hair:cx,...hx,shoe:Ls(B.ink,ea,.3),sole:B.cream,lanyard:B.hotPink,badge:B.cream,badgeStripe:B.teal,headset:Ls(B.ink,B.lilac,.25),mic:B.hotPink},trainer:{shirt:B.planet,collar:B.planet,logo:B.gel,pants:Ls(B.teal,B.ink,.45),skin:Zp,hair:cx,...hx,shoe:B.cream,sole:B.ink,lanyard:B.hotPink,badge:B.cream,badgeStripe:B.teal,headset:B.ink,mic:B.hotPink},boss:{shirt:Ls(ea,B.ink,.15),collar:Qi,logo:Qi,pants:Ls(ea,B.ink,.55),skin:Ls(B.lilac,ea,.4),hair:Qi,rim:.5,rimColor:"#ffe9a8",shoe:Qi,sole:B.ink,lanyard:Qi,badge:B.cream,badgeStripe:B.hotPink,headset:Qi,mic:B.hotPink}}),zt=Dl({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:Kp.associate,outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75,...RA}}),ux=Dl({...zt,name:"trainer",colors:Kp.trainer,torso:{...zt.torso,sleeve:.02},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1,badge:!0},face:{...zt.face,seed:11}}),Wu=Dl({...zt,name:"overlord",colors:Kp.boss,face:{...zt.face,seed:21,eyeColor:Qi}});var CA=1.5,PA=8,IA=-.2,LA=1.3,dx=.6,DA=Math.atan2(1.3,-4),NA=new H(-.45,.22,-1).applyEuler(new Jn(-.2,.68,0)).toArray(),fx=10,kA=.8,OA=.05,UA=["idle","run","aim","flinch","talk"],Nl=Object.keys(Hr),px=(t,e,n)=>Math.min(n,Math.max(e,t));function FA(t,e,n,i=[0,0,0]){return i[0]=Math.sin(t)*Math.cos(e)*n,i[1]=Math.sin(e)*n,i[2]=Math.cos(t)*Math.cos(e)*n,i}function BA(t,e,n=X.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[t[0]+r*n.right-i*n.back,t[1]+n.up,t[2]+o*n.right-s*n.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function mx({canvas:t,gl:e}){let n=Su(t,e),i=n.renderer,s=wu(t),r=document.getElementById("cr-readout"),o=new Cr,a=new In(X.camera.fov,1,.1,100),l=Tu({planetDir:NA});o.add(l.mesh);let c=qv();o.add(c.group);let h=[];function d(oe,Ce,De){let se=Ji(De===void 0?zt:{...zt,face:{...zt.face,seed:De}});se.root.position.set(oe,0,Ce),se.root.rotation.y=dx,o.add(se.root);let Se=ji(se),_e={rig:se,anim:Se};return h.push(_e),_e}let u=d(c.spawn[0],c.spawn[2]),f=[],v=!1,p=0,m=!0,g=!1,y=.685,w=.1,M=4.6,_=!1,S=new H(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),x=[0,0,0];function b(oe){if(!(!UA.includes(oe)&&!Object.prototype.hasOwnProperty.call(gt,oe))){u.anim.play(oe);for(let Ce of f)Ce.anim.play(v?"run":oe)}}function R(oe){let Ce=Nl.indexOf(oe);if(!(Ce<0)){p=Ce;for(let De of h)De.rig.face.setExpression(oe)}}function C(oe){m=!!oe,Pp(o,m)}function L(oe){g=!!oe,u.rig.root.rotation.y=g?DA:dx}function E(oe){if(oe=!!oe,oe!==v)if(v=oe,oe){let Ce=c.spawn[2]+2.4;for(let De=0;De<fx;De++){let se=c.spawn[0]+(De-(fx-1)/2)*kA,Se=d(se,Ce,10+De);Se.anim.play("run"),Se.rig.face.setExpression(Nl[p]),f.push(Se)}Pp(o,m)}else{for(let Ce of f)Ce.rig.dispose(),h.splice(h.indexOf(Ce),1);f=[]}}function k(){let oe=n.resize();a.aspect=oe.aspect,a.updateProjectionMatrix()}k(),window.addEventListener("resize",k),t.addEventListener("mousedown",oe=>{oe.button===0&&(_=!0)}),window.addEventListener("mouseup",()=>{_=!1}),window.addEventListener("mousemove",oe=>{_&&!s.isLocked()&&I(oe.movementX||0,oe.movementY||0,.006)}),t.addEventListener("wheel",oe=>{M=px(M*Math.exp(oe.deltaY*.001),CA,PA)},{passive:!0});function I(oe,Ce,De){y-=oe*De,w=px(w+Ce*De,IA,LA)}window.addEventListener("keydown",oe=>{oe.repeat||(oe.code==="Digit4"?b("flinch"):oe.code==="Digit5"?b("talk"):oe.code==="KeyO"?C(!m):oe.code==="KeyP"?E(!v):oe.code==="KeyL"?s.requestLock():oe.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let P=0,U=0,z=0,te=0,$=0,ne=0,q=null,j=0;window.__cr.stats=()=>({fps:P,ms:U,calls:$,tris:ne,scale:n.scale(),characters:h.length}),window.__cr.anim=b,window.__cr.orbit=(oe,Ce,De)=>{y=oe,w=Ce,De&&(M=De)},window.__cr.expression=R,window.__cr.perf=E,window.__cr.gameCam=L,window.__cr.outlines=C;function Me(oe){oe.pressed.weapon1&&b("idle"),oe.pressed.weapon2&&b("run"),oe.pressed.weapon3&&b("aim"),oe.pressed.interact&&R(Nl[(p+1)%Nl.length]),oe.pressed.grenade&&L(!g)}function J(){if(g){let oe=BA([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(oe.pos),a.lookAt(oe.look[0],oe.look[1],oe.look[2])}else FA(y,w,M,x),a.position.set(S.x+x[0],S.y+x[1],S.z+x[2]),a.lookAt(S)}let ye=oe=>oe.toFixed(2);function Ee(){let oe=q?Object.keys(q.held).filter(se=>q.held[se]).join(" "):"",Ce=s.padStatus(),De=q&&Ce!=="none"&&Ce!=="unrecognised controller"?`Gamepad: ${Ce}
  move ${ye(q.moveX)}, ${ye(q.moveY)}  look ${ye(q.lookX)}, ${ye(q.lookY)}
  held: ${oe||"nothing"}`:`Gamepad: ${Ce}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Nl[p]}   camera: ${g?"game":"orbit"}   outlines: ${m?"on":"off"}`,`${Math.round(P)} fps   ${ye(U)} ms   scale ${n.scale()}`,`${$} draw calls   ${ne} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${q?Math.round(q.lookDX):0}, ${q?Math.round(q.lookDY):0}`,De].join(`
`)}let He=Mu({step(){},render(oe,Ce){let De=Math.min(Ce,OA);q=s.poll(),Me(q),s.isLocked()&&!g&&I(q.lookDX,q.lookDY,.003),g||I(q.lookX*600*De,q.lookY*600*De,.004),l.update(performance.now()/1e3),c.update(De);for(let se of h)se.anim.update(De),se.rig.update(De);J(),i.render(o,a),$=i.info.render.calls,ne=i.info.render.triangles,z++,te+=Ce,te>=1&&(P=z/te,U=te/z*1e3,z=0,te=0),j+=Ce,j>=.1&&(j=0,Ee()),n.frameDone(Ce*1e3)}});J(),i.render(o,a),$=i.info.render.calls,ne=i.info.render.triangles,Ee(),He.start()}function Xu(){let t=!1,e=0,n=.18;return{update(i,s,r,o){return n=o,t?(e+=r,i?!1:(t=!1,e<=o)):s?i?(t=!0,e=r,!1):!0:!1},holding(){return t&&e>n},reset(){t=!1,e=0}}}function ot(t,e,n="wall",i=void 0){let s={min:Object.freeze([...t]),max:Object.freeze([...e]),kind:n};return i&&(s.prop=i),Object.freeze(s)}var Jp=1e-9;function Dn(t,e,n,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=t.filter(m=>m.max[1]>o&&m.min[1]<a),c=Math.hypot(n[0],n[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=n[0]/h,u=n[2]/h,f=!1,v=0,p=0;for(let m=0;m<h;m++){let g=r[0],y=r[2];r[0]+=d,r[2]+=u;let w=!1;for(let M=0;M<5;M++){let _=null,S=Jp;for(let x of l){let b=Math.max(x.min[0],Math.min(r[0],x.max[0])),R=Math.max(x.min[2],Math.min(r[2],x.max[2])),C=r[0]-b,L=r[2]-R,E=Math.hypot(C,L),k,I,P;if(E>Jp){if(E>=i)continue;k=i-E,I=C/E,P=L/E}else{let U=[[r[0]-x.min[0],-1,0],[x.max[0]-r[0],1,0],[r[2]-x.min[2],0,-1],[x.max[2]-r[2],0,1]],z=U[0];for(let te of U)te[0]<z[0]&&(z=te);k=z[0]+i,I=z[1],P=z[2]}k>S&&(S=k,_=[I,P])}if(!_){w=!0;break}if(M===4)break;r[0]+=_[0]*S,r[2]+=_[1]*S,f=!0,v=_[0],p=_[1]}w||(r[0]=g,r[2]=y,f=!0)}return f||(r[0]=e[0]+n[0],r[2]=e[2]+n[2]),{pos:r,hit:f,normal:[v,0,p]}}function vi(t,e,n,i){let s=1,r=[n[0]-e[0],n[1]-e[1],n[2]-e[2]];for(let o of t){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<Jp)(e[h]<d||e[h]>u)&&(c=!1);else{let f=(d-e[h])/r[h],v=(u-e[h])/r[h];if(f>v){let p=f;f=v,v=p}f>a&&(a=f),v<l&&(l=v),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function ta(t,e,n=0){for(let i of t)if(e[0]>=i.min[0]-n&&e[0]<=i.max[0]+n&&e[1]>=i.min[1]-n&&e[1]<=i.max[1]+n&&e[2]>=i.min[2]-n&&e[2]<=i.max[2]+n)return!0;return!1}var jp=["fov","right","up","back"],Yu=Math.PI*2,zA=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),xx=t=>t!=="normal"&&zA.includes(t);function gx(t,e,n={}){let i=xx(e)&&t[e]&&typeof t[e]=="object"?t[e]:null;for(let s of jp)n[s]=i&&i[s]!==void 0?i[s]:t[s];return n}function vx(t,e){let n=xx(e)?t[e]:null;return n&&typeof n=="object"&&n.shakeWeight>0?n.shakeWeight:0}function yx(t,e,n,i=0){return e?t>=n:t>=n+i}function bx({tuning:t=X.camera,look:e=X.look}={}){let n={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],d={},u=[0,0,0],f=[0,0,0],v=[0,0,0],p=[0,0,0],m=[0,0,1],g={pos:p,dir:m,fov:70},y={on:!1,t:0,p:[0,0,0]},w=1,M=0,_=!1;return{yaw:0,pitch:0,look(x,b,R,C,L,E,k=1){(x||b||R||C)&&(y.on=!1);let I=E?e.aimScale:1,P=e.invertY?-1:1;this.yaw-=x*e.mouse*I,this.pitch-=b*e.mouse*I*P;let U=e.pad,z=I*k;R&&(this.yaw-=Math.sign(R)*Math.abs(R)**U.expo*U.yawRate*z*L),C&&(this.pitch-=Math.sign(C)*Math.abs(C)**U.expo*U.pitchRate*z*L*P),this.pitch<t.pitchMin&&(this.pitch=t.pitchMin),this.pitch>t.pitchMax&&(this.pitch=t.pitchMax)},bump(x=1){let b=t.bump;if(!b||!(b.amount>0)||!(x>0))return;s.x=Math.min(s.x+b.amount*x,2*b.amount);let R=t.slamShake;R&&R.amount>0&&R.time>0&&(o.t=R.time,o.amp=R.amount*x)},dip(x){Number.isFinite(x)&&x>0&&(r.x=Math.min(r.x+x,.1))},kick(x,b=0){let R=t.recoil?t.recoil.max:0;if(!(R>0))return;let C=(L,E)=>Math.max(-R,Math.min(R,L+(Number.isFinite(E)?E:0)));a.p.x=Math.max(0,C(a.p.x,x)),a.y.x=C(a.y.x,b)},hold(x){if(!(t.holdTime>0)){y.on=!1;return}y.on=!0,y.t=t.holdTime,y.p[0]=x[0],y.p[1]=x[1],y.p[2]=x[2]},holding(){return y.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(x,b,R="normal",C=1){b!==void 0&&(this.yaw=b),gx(t,R,d);for(let L of jp)n[L].x=d[L],n[L].v=0;i.x=C,i.v=0,c.x=vx(t,R),c.v=0;for(let L=0;L<3;L++)h[L].x=x[L],h[L].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,w=1,_=!0,y.on=!1},update(x,{target:b,mode:R="normal",side:C=1},L){_||this.snap(b,this.yaw,R,C),x>0||(x=0),M+=x,gx(t,R,d);for(let q of jp)$n(n[q],d[q],t.blendHalfLife,x);$n(c,vx(t,R),t.blendHalfLife,x),$n(i,C,t.sideHalfLife,x);for(let q=0;q<3;q++)$n(h[q],b[q],t.followHalfLife,x);$n(s,0,t.bump?t.bump.halfLife:0,x),$n(r,0,t.bump?t.bump.halfLife:0,x);let E=t.recoil?t.recoil.halfLife:0;$n(a.p,0,E,x),$n(a.y,0,E,x);let k=Math.PI/180,I=t.probeRadius,P=n.back.x,U=1,z=0,te=q=>{let j=this.yaw+a.y.x*k,Me=Math.max(t.pitchMin,Math.min(t.pitchMax,this.pitch+a.p.x*k));z=Math.sin(j),U=Math.cos(j);let J=Math.sin(Me),ye=Math.cos(Me);u[0]=h[0].x,u[1]=h[1].x+n.up.x,u[2]=h[2].x,l[0]=b[0],l[1]=b[1]+n.up.x,l[2]=b[2];let Ee=vi(L,l,u,I);if(Ee<1)for(let _e=0;_e<3;_e++)u[_e]=l[_e]+(u[_e]-l[_e])*Ee;let He=n.right.x*i.x;f[0]=u[0]-U*He,f[1]=u[1],f[2]=u[2]+z*He;let oe=vi(L,u,f,I);for(let _e=0;_e<3;_e++)f[_e]=u[_e]+(f[_e]-u[_e])*oe;m[0]=z*ye,m[1]=J,m[2]=U*ye;for(let _e=0;_e<3;_e++)v[_e]=f[_e]-m[_e]*P;let Ce=vi(L,f,v,I),De=P>1e-6?Math.max(t.minBack/P,Ce):1;De>1&&(De=1),De<w?w=De:q&&(w+=(De-w)*(t.wallReturnHalfLife>0?1-Math.pow(2,-x/t.wallReturnHalfLife):1));let se=P*w-s.x;for(let _e=0;_e<3;_e++)p[_e]=f[_e]-m[_e]*se;let Se=vi(L,u,p,I);if(Se<1)for(let _e=0;_e<3;_e++)p[_e]=u[_e]+(p[_e]-u[_e])*Se};if(te(!0),y.on)if(y.t-=x,y.t<=0||R!=="aim")y.on=!1;else for(let q=0;q<3;q++){let j=y.p[0]-p[0],Me=y.p[1]-p[1],J=y.p[2]-p[2],ye=Math.hypot(j,Me,J);if(ye<.5)break;this.yaw=Math.atan2(j,J)-a.y.x*k,this.pitch=Math.max(t.pitchMin,Math.min(t.pitchMax,Math.asin(Me/ye)-a.p.x*k)),te(!1)}let $=t.shake;if($&&$.amp&&c.x>0){let q=$.amp*(c.x>1?1:c.x),j=Math.sin(Yu*$.hz*M)*q,Me=Math.sin(Yu*$.hz*1.3*M+1)*q,J=-U,ye=z;p[0]+=J*j-ye*m[1]*Me,p[1]+=(ye*m[0]-J*m[2])*Me,p[2]+=ye*j+J*m[1]*Me}p[1]-=r.x;let ne=t.slamShake;if(o.t>0&&ne&&ne.time>0){o.t=Math.max(0,o.t-x);let q=o.t/ne.time,j=o.amp*q*q,Me=Math.sin(Yu*ne.hz*o.t)*j,J=Math.sin(Yu*ne.hz*1.27*o.t+2)*j,ye=-U,Ee=z;p[0]+=ye*Me-Ee*m[1]*J,p[1]+=(Ee*m[0]-ye*m[2])*J,p[2]+=Ee*Me+ye*m[1]*J}return g.fov=n.fov.x,g}}}var An=[B.hotPink,B.playerOrange,B.glorpPurple,B.tealLight,B.lilac];function HA(t){if(t.prop)return t.prop;let e=t.max[0]-t.min[0],n=t.max[2]-t.min[2],i=t.max[1]-t.min[1],s=Math.max(e,n),r=Math.min(e,n);return t.kind==="pillar"?"pillar":t.kind==="low"?r<.7&&s>=1.8?"planter":"counter":t.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function GA(){let t=[],e=(n,i)=>{let s=new Ze(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new xt(o,3)),n};return{list:t,box(n,i,s){let r=new ct(i[0]-n[0],i[1]-n[1],i[2]-n[2]);r.translate((n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2),t.push(e(r,s))},cyl(n,i,s,r,o,a,l="y"){let c=new $t(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(n,i,s),t.push(e(c,a))},ball(n,i,s,r,o){let a=new jt(r,7,5);a.translate(n,i,s),t.push(e(a,o))}}}var Pi=(t,e,n=t.min[1],i=t.max[1])=>[[t.min[0]-e,n,t.min[2]-e],[t.max[0]+e,i,t.max[2]+e]];function VA(t,e,n,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(t.box([a+s,n,l+d],[c-s,i,l+u],r),t.box([a+s,n,h-u],[c-s,i,h-d],r)):(t.box([a+d,n,l+s],[a+u,i,h-s],r),t.box([c-u,n,l+s],[c-d,i,h-s],r))}function Ii(t,e){let n=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=n>=i,r=s?n:i,o=s?i:n,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,f,v,p){let m=a(c,d),g=a(h,u),y=l(c,d),w=l(h,u);t.box([Math.min(m,g),f,Math.min(y,w)],[Math.max(m,g),v,Math.max(y,w)],p)},cyl(c,h,d,u,f,v,p="y"){let m=p==="y"?"y":p==="u"?s?"x":"z":s?"z":"x";t.cyl(a(c,h),d,l(c,h),u,f,v,m)}}}function WA(t,e){let n=Ii(t,e),{len:i,dep:s}=n,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;n.slab(.03,i-.03,.04,s-.04,0,.5,B.shadowTint);for(let l=0;l<=o;l++){let c=l*a;n.slab(c,c+r,.06,s-.06,0,e.max[1],B.lilac),n.slab(c+.03,c+r-.03,0,.07,.8,.94,B.hotPink),n.slab(c+.03,c+r-.03,s-.07,s,.8,.94,B.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;n.slab(c,h,s/2-.03,s/2+.03,.5,.94,B.tealLight),n.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,B.cream)}}function XA(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,B.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,B.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,B.cream),i.slab(.15,s-.15,0,.06,.25,.6,B.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,B.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,An[(h+c*2+n)%An.length]),i.cyl(d,u,o-.01,.15,.02,B.cream)}}function YA(t,e,n){n%3===1?XA(t,e,n):WA(t,e)}function qA(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,B.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,B.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,B.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,B.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?B.ink:An[(l+n)%An.length])}function $A(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,B.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,B.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,B.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let f=(u+.5)/l*s,v=a===1?r/2:r*(.3+d*.4),p=An[(u+d+n)%An.length];i.cyl(f,v,h,.015,.14,B.cream,"u"),i.cyl(f-.07,v,h,c,.06,p,"u"),i.cyl(f+.07,v,h,c,.06,p,"u")}}function ZA(t,e){let n=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=n?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];t.box(...Pi({min:e.min,max:o},-.03,e.min[1],o[1]-.1),B.teal),t.box(...Pi({min:e.min,max:o},0,o[1]-.1,o[1]),B.cream),VA(t,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,B.hotPink,n);let a=(v,p,m,g,y)=>t.box(n?[e.min[0]+v,m,e.min[2]+.12]:[e.min[0]+.12,m,e.min[2]+v],n?[e.min[0]+p,g,e.max[2]-.12]:[e.max[0]-.12,g,e.min[2]+p],y);a(.3,.7,o[1],o[1]+.06,B.cream),a(.32,.68,o[1]+.06,o[1]+.12,B.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,B.cream);let l=n?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=v=>n?e.min[0]+v:e.min[2]+v;n?t.cyl(c(r-.5),o[1]+.14,l,.06,.28,B.gel):t.cyl(l,o[1]+.14,c(r-.5),.06,.28,B.gel);let h=.14,d=n?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[v,p]of d)n?t.box([v,e.min[1],e.min[2]],[p,i,e.max[2]],B.lilac):t.box([e.min[0],e.min[1],v],[e.max[0],i,p],B.lilac);let u=d[0][1],f=d[1][0];n?(t.box([u,i-.12,e.min[2]],[f,i,e.max[2]],B.lilac),t.box([u,o[1],e.min[2]+.2],[f,i-.12,e.max[2]-.2],B.tealLight)):(t.box([e.min[0],i-.12,u],[e.max[0],i,f],B.lilac),t.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,f],B.tealLight))}function KA(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,B.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,f]of[[0,a],[r-a,r]])i.slab(h,d,u,f,.12,o,B.lilac);i.slab(0,s,0,r,o-.1,o,B.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,B.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,B.cream),i.cyl(s/2,c,l,.025,s+.1,B.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?B.ink:An[n%An.length],"u")}function JA(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1],a=1.1;i.slab(.06,s-.06,.04,r-.04,0,.08,B.shadowTint),i.slab(.04,s-.04,.02,r-.02,.08,a-.06,B.hotPink),i.slab(.15,s-.15,0,.05,.3,.7,B.cream),i.slab(.15,s-.15,r-.05,r,.3,.7,B.cream),i.slab(-.04,s+.04,-.04,r+.04,a-.06,a,B.cream),i.slab(0,s,r/2-.04,r/2+.04,a,o,B.lilac),i.slab(0,s,r/2-.07,r/2+.07,o-.1,o,B.shadowTint);let l=Math.max(2,Math.floor(s/.9));for(let c=0;c<l;c++)for(let h of[r*.2,r*.8]){let d=(c+.5)/l*s,u=An[(c+n+(h>r/2?2:0))%An.length],f=Math.min(o-.14,a+.55);i.cyl(d,h,a+.04,.13,.08,B.ink),i.cyl(d,h,(a+.08+f)/2,.11,f-a-.08,u),i.cyl(d,h,f+.03,.12,.06,B.cream)}}function jA(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.06,s-.06,.05,r-.05,0,.1,B.shadowTint),i.slab(.03,s-.03,.03,r-.03,.1,o-.1,B.teal),i.slab(.2,s-.2,0,.06,.25,.65,B.hotPink),i.slab(.2,s-.2,r-.06,r,.25,.65,B.hotPink),i.slab(-.04,s+.04,-.04,r+.04,o-.1,o-.04,B.cream);let a=Math.max(2,Math.floor(s/.6));for(let l=0;l<a;l++){let c=(l+.5)/a*s;i.cyl(c,r/2,o-.035,.2,.07,B.ink),i.cyl(c,r/2,o-.02,.17,.04,An[(l+n)%An.length])}}function QA(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.05,s-.05,.05,r-.05,0,.1,B.shadowTint),i.slab(.08,s-.08,.08,r-.08,.1,o-.08,B.cream),i.slab(.08,s-.08,.04,.09,.4,.55,An[n%An.length]),i.slab(.08,s-.08,r-.09,r-.04,.4,.55,An[n%An.length]),i.slab(-.04,s+.04,-.04,r+.04,o-.08,o,B.lilac)}function eR(t,e,n){t.box(...Pi(e,0,e.min[1],e.max[1]),B.cream),t.box(...Pi(e,.05,e.min[1],e.min[1]+.25),B.shadowTint),t.box(...Pi(e,.04,e.min[1]+1.1,e.min[1]+2.9),B.ink),[1.4,1.75,2.1,2.45].forEach((i,s)=>t.box(...Pi(e,.055,e.min[1]+i,e.min[1]+i+.1),An[(s+n)%An.length])),t.box(...Pi(e,.05,e.max[1]-.25,e.max[1]),B.shadowTint)}function tR(t,e){let n=Ii(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.05,.2,.05,s-.05,0,r-.12,B.lilac),n.slab(i-.2,i-.05,.05,s-.05,0,r-.12,B.lilac),n.slab(0,i,0,s,r-.12,r,B.teal);for(let o=.3;o<i-.2;o+=.3)n.slab(o,o+.03,0,s,r-.125,r-.1,B.shadowTint)}function nR(t,e,n){let i=Ii(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.02,s-.02,.02,r-.02,0,o*.5,B.playerOrange),i.slab(0,s,0,r,o*.5-.06,o*.5,B.shadowTint);let a=Math.max(2,Math.floor(s/.5)),l=Math.min(r/2-.02,(o-o*.5)/2-.01);for(let c=0;c<a;c++)i.cyl((c+.5)/a*s,r/2,o*.5+l+.005,l,l*2,c%2?B.gel:B.teal)}function iR(t,e){let n=Ii(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.04,i-.04,.04,s-.04,0,.12,B.shadowTint),n.slab(.02,i-.02,.02,s-.02,.12,r-.1,B.hotPink),n.slab(.1,i-.1,0,.05,.3,.5,B.cream),n.slab(.1,i-.1,s-.05,s,.3,.5,B.cream),n.slab(0,i,0,s,r-.1,r,B.playerOrange)}function sR(t,e){t.box(...Pi(e,0,e.min[1],e.max[1]),B.cream),t.box(...Pi(e,.05,e.min[1],e.min[1]+.25),B.shadowTint),t.box(...Pi(e,.03,e.min[1]+1,e.min[1]+1.12),B.hotPink),t.box(...Pi(e,.05,e.max[1]-.25,e.max[1]),B.shadowTint)}function rR(t){if(!t)return[];let[e,,n]=t.min,[i,,s]=t.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,n],max:[h+c/2,l,n+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=n+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function _x(t,e=null){let n=GA();for(let s of rR(e))n.box(s.min,s.max,B.tealLight);let i=0;return t.forEach((s,r)=>{let o=HA(s);o==="counter"?YA(n,s,i++):o==="planter"?(r%2?$A:qA)(n,s,r):o==="desk"?ZA(n,s):o==="shelf"?KA(n,s,r):o==="pillar"?sR(n,s):o==="bar"?JA(n,s,r):o==="bowl"?jA(n,s,r):o==="booth"?QA(n,s,r):o==="menu"?eR(n,s,r):o==="seat"?tR(n,s):o==="plant"?nR(n,s,r):o==="velvet"?iR(n,s):n.box(s.min,s.max,B.lilac)}),Bt(n.list,!1)}var sr=2.7,qu=.22,$u=.16;function kl(t,e,n){let i=new ct(e[0]-t[0],e[1]-t[1],e[2]-t[2]);i.translate((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),i.deleteAttribute("uv");let s=new Ze(n),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return i.setAttribute("color",new xt(o,3)),i}function Mx(t){let e=t.w,n=e/2,i=new dt;i.name="exit-gate",i.position.set(t.pos[0],t.pos[1],t.pos[2]),i.rotation.y=t.yaw;let s=new rt(Bt([kl([-n-qu,0,0],[-n,sr+.25,$u],B.lilac),kl([n,0,0],[n+qu,sr+.25,$u],B.lilac),kl([-n-qu,sr,0],[n+qu,sr+.25,$u],B.hotPink),kl([-n,0,.005],[n,sr,.04],B.gel)].map(u=>u.toNonIndexed()),!1),Et({vertexColors:!0,rim:.1}));s.name="gate-frame",i.add(s);let r=u=>{let f=new rt(kl(u<0?[0,0,.04]:[-n,0,.04],u<0?[n,sr,.1]:[0,sr,.1],B.teal).toNonIndexed(),Et({vertexColors:!0,rim:.1}));return f.position.x=u*n,f.name=u<0?"gate-door-west":"gate-door-east",i.add(f),f},o=r(-1),a=r(1),l=Cs({text:"GO \u2192",w:2.2,h:.8,bg:B.glorpPurple,fg:B.gel,seed:5});l.position.set(0,sr+.85,$u+.1),i.add(l);let c=0,h=0,d=()=>{let u=Math.max(.06,1-c);o.scale.x=u,a.scale.x=u,l.visible=c>.5};return d(),{group:i,setOpen(u,f=!1){h=u?1:0,f&&(c=h,d())},update(u){if(c===h||!(u>0))return;let f=1/Math.max(X.run.gateOpenTime,.001);c=c<h?Math.min(h,c+u*f):Math.max(h,c-u*f),d()},openness:()=>c}}var wx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(wx)),t),rr=.3,oR=[ot([-12,-1,-12],[12,0,12],"floor"),ot([-12-rr,0,-12-rr],[12+rr,4,-12]),ot([-12-rr,0,12],[12+rr,4,12+rr]),ot([-12-rr,0,-12],[-12,4,12]),ot([12,0,-12],[12+rr,4,12]),ot([5,0,-9],[5.3,4,-3]),ot([6.7,0,-9],[7,4,-3]),ot([-11,0,-7.3],[-6,3,-7]),ot([-6.3,0,-11],[-6,3,-7]),ot([-4,0,-3],[-2,1,-2.4],"low"),ot([3,0,3],[3.6,1,5],"low"),ot([-5,0,3],[-3.8,2.2,3.6],"tall"),ot([1,0,-6],[1.6,2.2,-4],"tall"),ot([-9.4,0,.6],[-8.6,4,1.4],"pillar"),ot([8.6,0,3.6],[9.4,4,4.4],"pillar"),ot([-9,0,6.5],[-6,1,7.1],"low"),ot([-4,0,6.5],[-1,1,7.1],"low"),ot([6,0,6],[10,2.2,6.6],"tall"),ot([-12,0,-1],[-10,1,-.4],"low")],Sx=[];for(let t=0;t<=12;t++)Sx.push({min:[-10+t-.05,0,10],max:[-10+t+.05,.02,11]});var Ku=wx({boxes:oR,marks:Sx,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function Qp(t){let e=t.map(n=>{let i=new ct(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);return i.translate((n.min[0]+n.max[0])/2,(n.min[1]+n.max[1])/2,(n.min[2]+n.max[2])/2),i});return Bt(e,!1)}var or=.03,ar=.3,lr=.12,Zu=2;function aR(t=Ku){let e=t.boxes.find(c=>c.kind==="floor");if(!e)return[];let[n,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([n,0,i],[s,ar,i+or]),l([n,0,r-or],[s,ar,r]),l([n,0,i],[n+or,ar,r]),l([s-or,0,i],[s,ar,r]);for(let c=n+Zu;c<s-.5;c+=Zu)l([c-lr/2,ar,i],[c+lr/2,o,i+or]),l([c-lr/2,ar,r-or],[c+lr/2,o,r]);for(let c=i+Zu;c<r-.5;c+=Zu)l([n,ar,c-lr/2],[n+or,o,c+lr/2]),l([s-or,ar,c-lr/2],[s,o,c+lr/2]);return a}function Tx(t=Ku){let e=new dt,n=t.boxes.find(a=>a.kind==="floor");e.add(Au({w:n.max[0]-n.min[0],d:n.max[2]-n.min[2]}));let i=t.boxes.filter(a=>a.kind!=="floor");if(i.length){let a=new rt(ai(_x(i,n)),Et({vertexColors:!0}));a.name="grey-props",Ln(a),e.add(a)}let s=aR(t);if(s.length){let a=new rt(Qp(s),Et({color:B.shadowTint}));a.name="grey-wall-trim",e.add(a)}if(t.marks.length){let a=new rt(Qp(t.marks),Et({color:B.hotPink}));a.name="grey-marks",e.add(a)}if(t.ammoCrates&&t.ammoCrates.length){let a=[];for(let c of t.ammoCrates)a.push({min:[c.pos[0]-.35,0,c.pos[2]-.25],max:[c.pos[0]+.35,.4,c.pos[2]+.25]}),a.push({min:[c.pos[0]-.39,.4,c.pos[2]-.29],max:[c.pos[0]+.39,.5,c.pos[2]+.29]});let l=new rt(ai(Qp(a)),Et({color:B.playerOrange}));l.name="grey-crate",Ln(l),e.add(l)}if(t.landmark){let a=t.landmark,l=Cs({text:a.text,w:a.w,h:a.h});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=Math.PI,e.add(l)}for(let a of t.signs||[]){let l=Cs({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:4});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=a.yaw,e.add(l)}let r=null;if(t.cancelSign){let a=t.cancelSign;r=Cs({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:6}),r.name="cancel-sign",r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.rotation.y=a.yaw,r.visible=!1,e.add(r)}let o=t.exit?Mx(t.exit):null;return o&&e.add(o.group),{group:e,boxes:t.boxes,gate:o,setGateOpen(a,l=!1){o&&o.setOpen(a,l)},setCancelLit(a){r&&(r.visible=!!a)},update(a){o&&o.update(a)}}}var Ex=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Ex)),t),cr=.3,es=7,Li=15,lR=[ot([-es,-1,-Li],[es,0,Li],"floor"),ot([-es-cr,0,-Li-cr],[es+cr,4,-Li]),ot([-es-cr,0,Li],[es+cr,4,Li+cr]),ot([-es-cr,0,-Li],[-es,4,Li]),ot([es,0,-Li],[es+cr,4,Li]),ot([-5,0,-9.5],[-3,1,-8.5],"low"),ot([2,0,-9.5],[4,1,-8.5],"low"),ot([-.4,0,-7.4],[.4,4,-6.6],"pillar"),ot([-1,0,-3.5],[1,1,-2.5],"low"),ot([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),ot([3.5,0,-1.5],[5.5,1,-.5],"low"),ot([-4.5,0,3.5],[-2.5,1,4.5],"low"),ot([2.5,0,3.5],[4.5,1,4.5],"low"),ot([-.4,0,6.6],[.4,4,7.4],"pillar"),ot([-4.5,0,9],[-2.5,1,10],"low"),ot([2.5,0,9],[4.5,1,10],"low"),ot([-1.5,0,12],[1.5,2.2,12.6],"tall")],cR=[-12,-6,.5,7,11],hR=[-6,-2,2,6],Ju=[];for(let t of cR)for(let e of hR)Ju.push([e,t]);Ju.push([0,-5],[0,0],[0,9.5]);Ju.push([-3.5,13.5],[3.5,13.5]);var Ax=Ex({name:"kioskRow",boxes:lR,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:Ju,ammoCrates:[{pos:[5.5,0,-12.5]}],exit:{pos:[-4.5,0,Li],yaw:Math.PI,w:3},landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});function uR(t,e,n){let i=Math.max(t.min[0]-e,0,e-t.max[0]),s=Math.max(t.min[2]-n,0,n-t.max[2]);return Math.hypot(i,s)}function ju(t,{cols:e,rows:n,clearance:i=.8}){let s=t.filter(o=>o.kind!=="floor"),r=[];for(let o of n)for(let a of e)s.every(l=>uR(l,a,o)>=i)&&r.push([a,o]);return r}var Rx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Rx)),t),hr=.3,li=20,xi=18,tn=(t,e,n,i)=>ot(t,e,n,i),Cx=[ot([-li,-1,-xi],[li,0,xi],"floor"),ot([-li-hr,0,-xi-hr],[li+hr,4,-xi]),ot([-li-hr,0,xi],[li+hr,4,xi+hr]),ot([-li-hr,0,-xi],[-li,4,xi]),ot([li,0,-xi],[li+hr,4,xi]),tn([-7,0,-.35],[7,2.2,.35],"tall","bar"),tn([-3,0,14.2],[3,2.2,14.9],"tall","bar"),tn([-9,0,9.5],[-5,1,10.5],"low","bowl"),tn([5,0,9.5],[9,1,10.5],"low","bowl"),tn([-1,0,10.8],[1,1,11.8],"low","booth"),tn([-14.6,0,-5],[-13,1,-4],"low","booth"),tn([13,0,-5],[14.6,1,-4],"low","booth"),tn([-14.6,0,4],[-13,1,5],"low","booth"),tn([13,0,4],[14.6,1,5],"low","booth"),tn([-3.6,0,-6.5],[-2,1,-5.5],"low","booth"),tn([2,0,-6.5],[3.6,1,-5.5],"low","booth"),tn([-3.6,0,4.5],[-2,1,5.5],"low","booth"),tn([2,0,4.5],[3.6,1,5.5],"low","booth"),tn([-9,0,-13],[-6,1,-12.4],"low","plant"),tn([6,0,-13],[9,1,-12.4],"low","plant"),tn([-17,0,10],[-14,1,10.6],"low","plant"),tn([10.5,0,13.2],[13.5,1,13.8],"low","plant"),tn([-18.5,0,-10],[-16.5,1,-9.4],"low","seat"),tn([16.5,0,-10],[18.5,1,-9.4],"low","seat"),tn([-12.4,0,-9.4],[-11.6,4,-8.6],"pillar","menu"),tn([11.6,0,-9.4],[12.4,4,-8.6],"pillar","menu"),tn([-12.4,0,8.6],[-11.6,4,9.4],"pillar","menu"),tn([11.6,0,8.6],[12.4,4,9.4],"pillar","menu")],Px=ju(Cx,{cols:[-17.5,-12.5,-7.5,-2.5,2.5,7.5,12.5,17.5],rows:[-15.5,-10.5,-7.5,-2.5,2.5,7.5,12,16.5],clearance:.9});Px.push([0,-3.5],[0,3.5],[0,8],[-4,15.8],[0,15.8],[4,15.8],[14.5,12],[16,16.5],[-12,16],[-9.5,12],[9.5,12]);var Ix=Rx({name:"smoothieBar",boxes:Cx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-16.5],yaw:0},trigger:{z:-14},features:{start:{pos:[0,0,-16.5],yaw:0},startCover:{pos:[-7.5,0,-13.4],yaw:0},mid:{pos:[0,0,-3.5],yaw:0},open:{pos:[0,0,-9],yaw:0},flankWest:{pos:[-16,0,0],yaw:0},flankEast:{pos:[16,0,0],yaw:0}},associates:[{id:"a1",pos:[-8.3,0,10.88]},{id:"a2",pos:[-5.7,0,10.88]},{id:"b1",pos:[5.7,0,10.88]},{id:"b2",pos:[8.3,0,10.88]},{id:"c1",pos:[0,0,12.18]},{id:"t1",kind:"trainer",pos:[-12,0,6]}],pads:[{id:"sauna1",pos:[14.5,0,16.4],spawns:"associate",openKey:"openAfterKillsSmoothie",shareKey:"trainerShareSmoothie"}],tobble:{pos:[1.6,0,-16.5],yaw:0},waypoints:Px,ammoCrates:[{pos:[6.5,0,-16.8]},{pos:[-16.5,0,14.5]}],exit:{pos:[-12,0,xi],yaw:Math.PI,w:3.4},landmark:{pos:[9,3.2,xi-.3],text:"SMOOTHIE BAR",w:7,h:1.4},signs:[{pos:[0,2.9,14.95],yaw:Math.PI,text:"FREE TRIAL COUNTER \u2014 No commitment!*",w:6.2,h:1,bg:"#ff4f9a"},{pos:[-li+.14,2.2,-2],yaw:Math.PI/2,text:"BUILD-YOUR-BOWL",w:3.2,h:1.2,bg:"#2ec4b6"},{pos:[li-.14,2.2,2],yaw:-Math.PI/2,text:"BLEND NOW, QUIT LATER",w:3.6,h:1.2,bg:"#ff8a1f"},{pos:[li-.14,2.4,-12],yaw:-Math.PI/2,text:"SMOOTHIE BAR",w:3.6,h:1.2,bg:"#b9a7ff"}]});var Lx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Lx)),t),ur=.3,yi=12,Di=10,Dx=[ot([-yi,-1,-Di],[yi,0,Di],"floor"),ot([-yi-ur,0,-Di-ur],[yi+ur,4,-Di]),ot([-yi-ur,0,Di],[yi+ur,4,Di+ur]),ot([-yi-ur,0,-Di],[-yi,4,Di]),ot([yi,0,-Di],[yi+ur,4,Di]),ot([-4,0,7.2],[4,2.2,7.9],"tall","desk"),ot([-8,0,-3.2],[-5.5,1,-2.6],"low","velvet"),ot([5.5,0,-3.2],[8,1,-2.6],"low","velvet"),ot([-4.5,0,1.8],[-2,1,2.4],"low","velvet"),ot([2,0,1.8],[4.5,1,2.4],"low","velvet"),ot([-6.4,0,-.4],[-5.6,4,.4],"pillar"),ot([5.6,0,4.2],[6.4,4,5],"pillar")],Nx=ju(Dx,{cols:[-10,-6,-2,2,6,10],rows:[-8,-5,-1.5,3.5,6,8.8],clearance:.9});Nx.push([0,-3.5],[0,2],[-6,5.5],[6,5.5],[-5.5,9],[5.5,9],[0,9]);var kx=Lx({name:"cancellationDesk",boss:!0,boxes:Dx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-8.5],yaw:0},trigger:{z:-6.5},features:{start:{pos:[0,0,-8.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},desk:{pos:[0,0,5.8],yaw:0}},associates:[],overlord:{spots:[{hide:[-3.2,8.9],pop:[-5.4,8.5]},{hide:[3.2,8.9],pop:[5.4,8.5]}],deskHide:[0,8.9],desk:{x0:-4,x1:4,z:7.2}},cancelSign:{pos:[0,1.75,7.2-.12],yaw:Math.PI,text:"PRESS E / X TO CANCEL",w:3.8,h:.9,bg:"#2a9d2a"},pads:[{id:"sauna1",pos:[-9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"},{id:"sauna2",pos:[9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"}],tobble:{pos:[1.5,0,-8.7],yaw:0},waypoints:Nx,ammoCrates:[{pos:[-10.5,0,-8.8]}],landmark:{pos:[0,3.2,Di-.3],text:"CANCELLATION DESK",w:7,h:1.3},signs:[{pos:[-yi+.14,2.2,-1],yaw:Math.PI/2,text:"PLEASE TAKE A NUMBER \u2014 NOW SERVING: 3",w:4.2,h:1.3,bg:"#ff4f9a"},{pos:[yi-.14,2.2,-1],yaw:-Math.PI/2,text:"ALL SALES FINAL. ALL EXITS FINAL.",w:4.2,h:1.3,bg:"#7a3cff"}]});var Ox=Object.freeze({turnstiles:Ax,smoothie:Ix,desk:kx});var Rn=Object.freeze(["turnstiles","smoothie","desk"]),ed=Object.freeze({turnstiles:"Check-in Turnstiles",smoothie:"Smoothie Bar",desk:"The Cancellation Desk"}),Ux=Object.freeze(["Tues 2:00\u20132:10","Tues 2:00\u20132:05","By appointment"]),e0=t=>`Cancellation hours: ${Ux[Math.max(0,Math.min(Ux.length-1,t|0))]}`,Fx="gyms-of-war.checkpoint",Qu=t=>Number.isInteger(t)&&t>=0&&t<Rn.length?t:0,t0=t=>{let e=Rn.indexOf(t);return e<0?0:e};function td(t){try{let e=t&&t.getItem(Fx);return e==null?0:Qu(Number(e))}catch{return 0}}function dR(t,e){try{t&&t.setItem(Fx,String(Qu(e)))}catch{}}function Bx(t,e,n=X.run.gateReach){if(!t)return!1;let i=e[0]-t.pos[0],s=e[2]-t.pos[2],r=Math.sin(t.yaw),o=Math.cos(t.yaw),a=i*o-s*r,l=i*r+s*o;return Math.abs(a)<=t.w/2&&l>=-.25&&l<=n}function zx({storage:t=null,tuning:e=X}={}){let n=()=>e.run,i=0,s=0,r="play",o=0,a=!1,l=td(t),c=d=>{s=Qu(d),dR(t,s)},h={get index(){return i},get checkpoint(){return s},get arena(){return Rn[i]},get phase(){return r},get cleared(){return a},get fading(){return r!=="play"},get hasNext(){return i<Rn.length-1},saved:l,get fade(){return r==="fadeOut"?Math.min(1,o/Math.max(n().fadeOut,1e-6)):r==="black"?1:r==="fadeIn"?Math.max(0,1-o/Math.max(n().fadeIn,1e-6)):0},get gateOpen(){return a&&h.hasNext},markClear(){return r==="play"&&(a=!0),h.gateOpen},touchGate(){return r!=="play"||!h.gateOpen?!1:(r="fadeOut",o=0,!0)},restart(){return a=!1,r="play",o=0,Rn[i]},goTo(d){return i=Qu(d),c(i),a=!1,r="play",o=0,Rn[i]},newRun(){return h.goTo(0)},step(d){let u=[];if(!(d>0)||r==="play")return u;if(o+=d,r==="fadeOut"&&o>=n().fadeOut){let f=Rn[i];i=Math.min(Rn.length-1,i+1),c(i),a=!1,r="black",o=0,u.push({type:"swap",from:f,to:Rn[i]})}return r==="black"&&o>=n().blackHold&&(r="fadeIn",o=0),r==="fadeIn"&&o>=n().fadeIn&&(r="play",o=0,u.push({type:"faded"})),u}};return h}var Hx="gyms-of-war.settings",Ul=Object.freeze([Object.freeze({key:"volume",label:"Master volume",kind:"range",min:0,max:1,step:.1,def:1}),Object.freeze({key:"mouseSens",label:"Mouse sensitivity",kind:"range",min:.3,max:2.5,step:.1,def:1}),Object.freeze({key:"invertY",label:"Invert Y (look up/down)",kind:"toggle",def:!1}),Object.freeze({key:"padSens",label:"Pad look sensitivity",kind:"range",min:.3,max:2.5,step:.1,def:1})]),hk=Object.freeze(Object.fromEntries(Ul.map(t=>[t.key,t.def]))),fR=(t,e)=>Math.round(t/e)*e;function Ol(t){let e={},n=t&&typeof t=="object"?t:{};for(let i of Ul){let s=n[i.key];if(i.kind==="toggle")e[i.key]=typeof s=="boolean"?s:i.def;else{let r=typeof s=="number"&&Number.isFinite(s)?s:i.def;e[i.key]=Number(fR(Math.min(i.max,Math.max(i.min,r)),i.step).toFixed(3))}}return e}function Gx(t){try{let e=t&&t.getItem(Hx);return Ol(e?JSON.parse(e):null)}catch{return Ol(null)}}function n0(t,e){try{t&&t.setItem(Hx,JSON.stringify(Ol(e)))}catch{}}function Vx(t,e,n){let i=Ul.find(r=>r.key===e);if(!i)return Ol(t);let s={...t};return s[e]=i.kind==="toggle"?!t[e]:t[e]+(n<0?-i.step:i.step),Ol(s)}function Wx(t,e){return t.kind==="toggle"?e?"On":"Off":t.key==="volume"?`${Math.round(e*100)}%`:`${e.toFixed(1)}x`}var Xx="gyms-of-war.introSeen";function Yx(t){try{return!!(t&&t.getItem(Xx))}catch{return!1}}function qx(t){try{t&&t.setItem(Xx,"1")}catch{}}var nd=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"LB"})}),$x={throw:t=>`Release ${t.grenade}  throw`,reviveTobble:t=>`Hold ${t.interact}  revive Tobble`,finish:t=>`${t.interact}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:t=>`${t.melee}  bash`,rev:t=>`Hold ${t.melee}  rev Cheat Day`,giveUp:t=>`Hold ${t.interact}  renew your membership`,giveUpTobble:t=>`Tobble is coming! Hold ${t.interact} to renew your membership`,sauna:t=>`Close the Spawn Sauna (${t.grenade} kettlebell)`,cancel:t=>`Hold ${t.interact}  CANCEL`};function Wr(t,e="kbm"){let n=Object.hasOwn($x,t)?$x[t]:null;return n?n(nd[e]||nd.kbm):""}var Zx="GYMS OF WAR",Kx="NO PAIN, NO CANCEL";function Jx({saved:t=0,arenaTitle:e=""}={}){let n=[];return t>0&&n.push({id:"continue",label:e?`Continue \u2014 ${e}`:"Continue"}),n.push({id:"new",label:"New Run"},{id:"settings",label:"Settings"},{id:"controls",label:"Controls"},{id:"back",label:"Back to games"}),n}var jx=Object.freeze([Object.freeze({id:"resume",label:"Resume"}),Object.freeze({id:"settings",label:"Settings"}),Object.freeze({id:"controls",label:"Controls"}),Object.freeze({id:"restart",label:"Restart arena"}),Object.freeze({id:"quit",label:"Quit to title"})]);function Qx(t=nd){let e=t.kbm,n=t.pad;return[["Move","W A S D","Left stick"],["Look","Mouse","Right stick"],["Aim (pop out of cover)","Right mouse","LT"],["Fire (no aim in cover: blind fire)","Left mouse","RT"],["Reload (again on the bright zone)","R","RB"],["Take cover, vault, roll (tap) / sprint (hold)","Space","A"],["Bash (tap) / rev Cheat Day (hold)",e.melee,n.melee],["Kettlebell: hold to aim, release to throw",e.grenade,n.grenade],["Finish a Rep, revive Tobble, renew, cancel",e.interact,n.interact],["Switch weapon","1 2 3 or wheel","D-pad"],["Pause","Esc","Start"]]}var i0=Object.freeze(["Seven years ago, on January 2nd, Doc Vex signed up for GlorpFit Orbital.","He went twice.","He has been billed $49.99 every month since.","GlorpFit has been taken over by the Glorp, aliens that feed on unused memberships.","Cancellation must be made in person, at the Cancellation Desk, on the top floor.","It is Tuesday. It is 1:30."]);function Fl(t,e,n){return e>0?((t+(n<0?-1:1))%e+e)%e:0}var pR=new Set(["Backquote","KeyH"]),mR=.4,gR=.12;function Yt(t,e,n,i){let s=document.createElement(t);return e&&(s.className=e),i!==void 0&&(s.textContent=i),n&&n.appendChild(s),s}function ey(t){let e=Yt("div",null,document.body);e.id="cr-menu",e.hidden=!0;let n=null,i="title",s=0,r=[],o=t.settings,a=null,l={get open(){return n!==null},get screen(){return n},get settings(){return o},showTitle(){i="title",c("title")},showPause(){i="pause",c("pause")},showIntro(_){a=_,c("intro")},hide(){n=null,e.hidden=!0,document.body.classList.remove("cr-menu-open","cr-on-title"),e.replaceChildren()},pad(_){M(_)},choose(_){let S=r.findIndex(x=>x.id===_);return S>=0?(s=S,m(),!0):!1},items:()=>r.map(_=>_.id)};function c(_){n=_,s=0,e.hidden=!1,document.body.classList.add("cr-menu-open"),document.body.classList.toggle("cr-on-title",_==="title"||(_==="settings"||_==="controls")&&i==="title"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),d()}function h(){n==="title"?r=Jx({saved:t.saved?t.saved():0,arenaTitle:t.arenaTitle?t.arenaTitle(t.saved()):""}):n==="pause"?r=jx.map(_=>({..._})):n==="settings"?r=[...Ul.map(_=>({id:_.key,label:_.label,row:_})),{id:"close",label:"Back"}]:n==="controls"?r=[{id:"close",label:"Back"}]:r=[]}function d(){h(),e.replaceChildren(),e.onclick=null,e.dataset.screen=n;let _=Yt("div","cr-menu-box",e);if(n==="intro"){Yt("div","cr-menu-kicker",_,"GLORPFIT ORBITAL"),i0.forEach((x,b)=>Yt("div",b===i0.length-1?"cr-intro-line cr-intro-last":"cr-intro-line",_,x)),Yt("div","cr-menu-hint",_,"Press any key, click, or A"),e.onclick=v;return}if(n==="title"?(Yt("div","cr-menu-title",_,Zx),Yt("div","cr-menu-tag",_,Kx)):Yt("div","cr-menu-head",_,n==="pause"?"PAUSED":n==="settings"?"SETTINGS":"CONTROLS"),n==="controls"){let x=Yt("div","cr-controls",_),b=Yt("div","cr-ctl-row cr-ctl-head",x);Yt("span",null,b,""),Yt("span",null,b,"Keyboard + mouse"),Yt("span",null,b,"Gamepad");for(let[R,C,L]of Qx()){let E=Yt("div","cr-ctl-row",x);Yt("span","cr-ctl-what",E,R),Yt("span","cr-ctl-key",E,C),Yt("span","cr-ctl-pad",E,L)}}let S=Yt("div","cr-menu-list",_);r.forEach((x,b)=>{let R=Yt("div","cr-menu-item",S);if(R.setAttribute("role","menuitem"),R.dataset.id=x.id,b===s&&R.classList.add("sel"),R.addEventListener("mouseenter",()=>{s=b,u()}),x.row){R.classList.add("cr-setting"),Yt("span","cr-set-label",R,x.label);let C=Yt("span","cr-set-ctl",R);x.row.kind==="range"&&Yt("span","cr-set-step",C,"\u2212").addEventListener("click",E=>{E.stopPropagation(),s=b,f(-1)}),Yt("span","cr-set-val",C,Wx(x.row,o[x.id])),x.row.kind==="range"&&Yt("span","cr-set-step",C,"+").addEventListener("click",E=>{E.stopPropagation(),s=b,f(1)}),R.addEventListener("click",()=>{s=b,x.row.kind==="toggle"&&f(1)})}else R.textContent=x.label,R.addEventListener("click",()=>{s=b,m()})}),n==="title"&&Yt("div","cr-menu-hint",_,"Mouse, arrow keys + Enter, or a gamepad")}function u(){e.querySelectorAll(".cr-menu-item").forEach((_,S)=>_.classList.toggle("sel",S===s))}function f(_){let S=r[s];n!=="settings"||!S||!S.row||(o=Vx(o,S.id,_),t.onSettings&&t.onSettings(o),d())}function v(){if(n!=="intro")return;let _=a;a=null,n=null,l.hide(),_&&_()}function p(){n==="settings"||n==="controls"?c(i):n==="pause"?(l.hide(),t.actions.resume()):n==="intro"&&v()}function m(){let _=r[s];if(!_)return;let S=t.actions;switch(_.id){case"continue":l.hide(),S.continue();break;case"new":l.hide(),S.newRun();break;case"settings":c("settings");break;case"controls":c("controls");break;case"back":S.back();break;case"resume":l.hide(),S.resume();break;case"restart":l.hide(),S.restart();break;case"quit":l.hide(),S.quit();break;case"close":c(i);break;default:_.row&&f(1)}}window.addEventListener("keydown",_=>{if(!(n===null||pR.has(_.code))&&(_.preventDefault(),_.stopImmediatePropagation(),!(_.metaKey||_.ctrlKey||_.altKey||["ShiftLeft","ShiftRight","ControlLeft","ControlRight","AltLeft","AltRight","MetaLeft","MetaRight"].includes(_.code)))){if(n==="intro"){_.repeat||v();return}switch(_.code){case"ArrowUp":case"KeyW":s=Fl(s,r.length,-1),u();break;case"ArrowDown":case"KeyS":s=Fl(s,r.length,1),u();break;case"ArrowLeft":case"KeyA":f(-1);break;case"ArrowRight":case"KeyD":f(1);break;case"Enter":case"Space":_.repeat||m();break;case"Escape":_.repeat||p();break;default:break}}},!0),e.addEventListener("contextmenu",_=>_.preventDefault());let g={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,start:!1},y={up:0,down:0,left:0,right:0};function w(){let _=[];try{_=navigator.getGamepads&&navigator.getGamepads()||[]}catch{_=[]}for(let S of _){if(!S||!S.connected||!S.buttons||S.buttons.length<10)continue;let x=S.axes||[],b=R=>!!(S.buttons[R]&&S.buttons[R].pressed);return{up:b(12)||(x[1]||0)<-.6,down:b(13)||(x[1]||0)>.6,left:b(14)||(x[0]||0)<-.6,right:b(15)||(x[0]||0)>.6,a:b(0),b:b(1),start:b(9)}}return null}function M(_){let S=w();if(!S){g={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,start:!1};return}let x=g;if(g=S,n===null){y={up:0,down:0,left:0,right:0};return}let b=C=>S[C]?x[C]?(y[C]-=_,y[C]<=0?(y[C]=gR,!0):!1):(y[C]=mR,!0):(y[C]=0,!1),R=C=>S[C]&&!x[C];if(n==="intro"){(R("a")||R("b")||R("start"))&&v();return}b("up")&&(s=Fl(s,r.length,-1),u()),b("down")&&(s=Fl(s,r.length,1),u()),b("left")&&f(-1),b("right")&&f(1),R("a")?m():R("b")?p():R("start")&&(n==="pause"?p():n==="title"&&m())}return l}function s0(t){let e=new Set,n=new Set,i=new Set;t.traverse(s=>{s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];if(!(s.userData&&s.userData.isOutline))for(let o of r)n.add(o)});for(let s of n)for(let r of Object.keys(s)){let o=s[r];o&&o.isTexture&&i.add(o)}return e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),t.parent&&t.parent.remove(t),{geometries:e.size,materials:n.size,textures:i.size}}var dr=class t{constructor(e,n,i,s,r="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),t.nextNameID=t.nextNameID||0,this.$name.id=`lil-gui-name-${++t.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},r0=class extends dr{constructor(e,n,i){super(e,n,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function o0(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}var vR={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:o0,toHexString:o0},zl={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},xR={isPrimitive:!1,match:t=>Array.isArray(t)||ArrayBuffer.isView(t),fromHexString(t,e,n=1){let i=zl.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return zl.toHexString(s)}},yR={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){let i=zl.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return zl.toHexString(s)}},bR=[vR,zl,xR,yR];function _R(t){return bR.find(e=>e.match(t))}var a0=class extends dr{constructor(e,n,i,s){super(e,n,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=_R(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=o0(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Bl=class extends dr{constructor(e,n,i){super(e,n,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},l0=class extends dr{constructor(e,n,i,s,r,o){super(e,n,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let n=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))},o=!1,a,l,c,h,d,u=5,f=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",p)},v=y=>{if(o){let w=y.clientX-a,M=y.clientY-l;Math.abs(M)>u?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&p()}if(!o){let w=y.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(y),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=y.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",p)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(g,y,w,M,_)=>(g-y)/(w-y)*(_-M)+M,n=g=>{let y=this.$slider.getBoundingClientRect(),w=e(g,y.left,y.right,this._min,this._max);this._snapClampSetValue(w)},i=g=>{this._setDraggingStyle(!0),n(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{n(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=g=>{g.preventDefault(),this._setDraggingStyle(!0),n(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=g=>{if(o){let y=g.touches[0].clientX-a,w=g.touches[0].clientY-l;Math.abs(y)>Math.abs(w)?c(g):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else g.preventDefault(),n(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),v=400,p,m=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();let w=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,v)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),e-=n,e=Math.round(e/this._step)*this._step,e+=n,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},c0=class extends dr{constructor(e,n,i,s){super(e,n,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(n=>{let i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?e:this._names[n],this}},h0=class extends dr{constructor(e,n,i){super(e,n,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},MR=`.lil-gui {
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
}`;function wR(t){let e=document.createElement("style");e.innerHTML=t;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var ty=!1,id=class t{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!ty&&a&&(wR(MR),ty=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,n,i,s,r){if(Object(i)===i)return new c0(this,e,n,i);let o=e[n];switch(typeof o){case"number":return new l0(this,e,n,i,s,r);case"boolean":return new r0(this,e,n);case"string":return new h0(this,e,n);case"function":return new Bl(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new a0(this,e,n,i)}addFolder(e){let n=new t({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Bl||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Bl)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}};var A=(t,e,n,i)=>({path:t,min:e,max:n,step:i});function ny(t){let e=(n,i,s,r)=>A(`weapons.${t}.${n}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Hl=Object.freeze([A("move.jog",1,10,.1),A("move.aimWalk",.5,6,.1),A("move.sprint",2,14,.1),A("move.accelTime",.01,.6,.01),A("move.stopTime",.01,.6,.01),A("move.turnRate",1,40,.5),A("move.aimTurnRate",1,40,.5),A("move.sprintTurnRate",.2,20,.1),A("move.rollDistance",1,12,.1),A("move.rollTime",.2,1.5,.01),A("move.rollEase",1,4,.05),A("move.rollBuffer",0,.5,.01),A("move.tapMax",.05,.5,.01),A("move.stickSprintMin",0,1,.05),A("move.faceMinSpeed",0,2,.05),A("move.sprintHeadingMinSpeed",0,3,.05),A("move.runClipMinSpeed",0,2,.05),A("move.runRateMin",.1,2,.05),A("move.runRateMax",.5,4,.05),A("move.sprintRateMin",.1,2,.05),A("move.sprintRateMax",.5,4,.05),A("move.stepEvery",.4,4,.05),A("move.stepEverySprint",.4,6,.05),A("move.crawlSpeed",.2,4,.05),A("move.crawlTurnRate",.5,20,.5),A("camera.fov",40,110,1),A("camera.right",-1.5,1.5,.01),A("camera.up",.5,3,.01),A("camera.back",.5,6,.05),A("camera.aim.fov",20,90,1),A("camera.aim.back",.3,5,.05),A("camera.sprint.fov",50,120,1),A("camera.sprint.up",.3,3,.01),A("camera.sprint.back",.5,6,.05),A("camera.sprint.shakeWeight",0,3,.05),A("camera.coverLow.fov",50,120,1),A("camera.coverLow.right",-1.5,1.5,.01),A("camera.coverLow.up",.3,3,.01),A("camera.coverLow.back",.5,6,.05),A("camera.coverTall.fov",50,120,1),A("camera.coverTall.right",-1.5,1.5,.01),A("camera.coverTall.up",.3,3,.01),A("camera.coverTall.back",.5,6,.05),A("camera.downed.fov",40,120,1),A("camera.downed.up",.2,3,.01),A("camera.downed.back",.5,6,.05),A("camera.bump.amount",0,.6,.01),A("camera.bump.halfLife",.01,.3,.005),A("camera.slamShake.amount",0,.3,.005),A("camera.slamShake.time",.02,1,.01),A("camera.slamShake.hz",2,60,.5),A("camera.blendHalfLife",0,.5,.005),A("camera.holdTime",0,2,.05),A("camera.holdRange",10,300,5),A("camera.followHalfLife",0,.5,.005),A("camera.sideHalfLife",0,.6,.005),A("camera.headHideDist",0,2,.05),A("camera.headHideMargin",0,1,.01),A("camera.shake.amp",0,.15,.001),A("camera.shake.hz",1,30,.5),A("camera.probeRadius",.05,.6,.01),A("camera.minBack",0,2,.01),A("camera.wallReturnHalfLife",0,1,.01),A("camera.pitchMin",-1.5,0,.01),A("camera.pitchMax",0,1.5,.01),A("look.mouse",5e-4,.008,1e-4),A("look.pad.yawRate",.5,10,.1),A("look.pad.pitchRate",.5,10,.1),A("look.pad.expo",1,3,.05),A("look.aimScale",.1,1.5,.01),{path:"look.invertY"},A("cover.grabRange",0,5,.05),A("cover.grabAngle",0,180,1),A("cover.grabViewAngle",0,180,1),A("cover.grabSlack",0,5,.05),A("cover.grabMinTilt",0,1,.05),A("cover.gap",0,5,.01),A("cover.endInset",0,5,.01),A("cover.minLength",0,5,.05),A("cover.slideSpeed",0,30,.5),A("cover.slideMinTime",0,2,.01),A("cover.slideMaxTime",0,2,.01),A("cover.slideTurnRate",1,60,.5),A("cover.moveSpeed",0,30,.1),A("cover.alongDeadzone",0,1,.05),A("cover.leaveTilt",0,1,.05),A("cover.leaveAngle",0,180,1),A("cover.endLeaveTime",0,2,.01),A("cover.cornerZone",0,5,.05),A("cover.popTime",0,2,.01),A("cover.blindTime",0,2,.01),A("cover.popShift",0,5,.05),A("cover.pushAngle",0,180,1),A("cover.lowDrawBack",0,1,.01),A("cover.blindDrawBack",0,1,.01),A("cover.vaultTime",0,2,.01),A("cover.vaultMaxDepth",0,5,.05),A("cover.vaultHop",0,5,.05),A("cover.vaultExitSpeed",0,30,.1),A("cover.swapRange",0,5,.05),A("cover.swapSpeed",0,30,.5),A("cover.swapAngle",0,180,1),A("cover.swapMaxOffset",0,5,.05),A("cover.slamSquash",0,1,.01),A("cover.slamSquashTime",0,2,.01),A("cover.thudVolume",0,1,.05),A("cover.autoSlam",0,1,1),A("cover.autoAngle",0,90,1),A("cover.autoDist",0,1,.01),A("cover.autoMinTilt",0,1,.05),A("cover.autoMinSpeed",0,12,.1),A("cover.autoTime",0,1,.01),...ny("regret"),...ny("pistol"),A("combat.fireBuffer",0,.5,.01),A("combat.autoReload",0,1,1),A("combat.minRate",.01,1,.01),A("combat.minReloadTime",.01,.5,.01),A("combat.muzzleUp",.5,2,.01),A("combat.muzzleRight",-1,1,.01),A("combat.muzzleForward",0,2,.01),A("combat.blindLift",0,1,.01),A("combat.blindReach",0,1,.01),A("combat.crateRadius",.3,3,.05),A("combat.hitPad",0,.3,.005),A("combat.crouchHead",0,3,.01),A("combat.crouchBodyTop",0,3,.01),A("combat.shoulderDrop",0,1,.01),A("combat.pickupRadius",.2,3,.05),A("health.max",1,500,1),A("health.regenDelay",0,15,.1),A("health.regenTime",0,15,.1),A("health.downedTime",0,60,.5),A("health.standInRevive",0,1,1),A("health.reviveTime",0,10,.1),A("health.reviveHealth",0,1,.05),A("health.godMode",0,1,1),A("health.giveUpHold",.3,5,.01),A("associate.radius",0,3,.01),A("associate.height",0,3,.01),A("associate.pointSpacing",.2,3,.01),A("associate.reserveRadius",0,3,.01),A("associate.popShift",0,3,.01),A("associate.linkMax",2,15,.5),A("associate.health",1,1e3,1),A("associate.runSpeed",0,12,.1),A("associate.turnRate",.5,40,.5),A("associate.arriveDist",.01,1,.01),A("associate.stuckTime",.1,5,.1),A("associate.popTime",0,1,.01),A("associate.telegraphTime",0,2,.01),A("associate.burstTime",0,5,.1),A("associate.rate",.5,20,.5),A("associate.damage",0,50,.5),A("associate.range",5,100,1),A("associate.spread",0,15,.1),A("associate.moveSpread",0,15,.1),A("associate.aimLag",0,1,.01),A("associate.suppressChance",0,1,.05),A("associate.suppressTime",0,5,.1),A("associate.suppressRate",.5,20,.5),A("associate.suppressMiss",0,5,.1),A("associate.suppressSpread",0,20,.5),A("associate.coverWaitMin",0,5,.1),A("associate.coverWaitMax",0,8,.1),A("associate.magBursts",1,10,1),A("associate.reloadTime",0,6,.1),A("associate.flinchTime",0,2,.01),A("associate.minRange",0,20,.5),A("associate.preferRange",0,40,.5),A("associate.maxRange",1,60,.5),A("associate.relocateCheck",.05,3,.05),A("associate.relocateAfter",1,60,.5),A("associate.ammoDrop",0,200,1),A("associate.muzzleUp",.5,2,.01),A("director.tokens",0,8,1),A("director.casualTokens",0,8,1),A("director.casual",0,1,1),A("director.tokenCooldown",0,5,.1),A("director.tokenMaxHold",.5,10,.1),A("director.requestWindow",0,2,.05),A("director.pushAfter",1,30,.5),A("director.flankAfter",1,60,.5),A("director.stayRadius",.5,10,.1),A("director.flankAngle",0,180,1),A("director.flankMaxAngle",60,180,1),A("director.maxEnemies",4,8,1),A("associate.downChance",0,1,.05),A("associate.downedCrawl",0,3,.05),A("associate.bleedTime",1,60,.5),A("associate.reviveTime",0,10,.1),A("associate.reviveHealth",.05,1,.05),A("associate.reviveRange",0,40,.5),A("associate.staggerTime",0,3,.05),A("associate.diveWarn",0,1.6,.05),A("associate.diveRadius",0,12,.1),A("associate.diveChance",0,1,.05),A("associate.diveReaction",0,2,.05),A("associate.diveDistance",0,10,.1),A("associate.diveTime",.05,3,.05),A("pad.radius",.1,4,.05),A("pad.openAfterKills",0,8,1),A("pad.openAfterKillsSmoothie",0,8,1),A("pad.openAfter",0,120,1),A("pad.interval",.5,30,.5),A("pad.maxAlive",1,8,1),A("pad.total",1,30,1),A("pad.riseTime",0,3,.05),A("pad.trainerShare",0,1,.05),A("pad.trainerShareSmoothie",0,1,.05),A("pad.trainerShareBoss",0,1,.05),A("trainer.health",1,1e3,1),A("trainer.scaleW",.5,2,.05),A("trainer.scaleH",.5,2,.05),A("trainer.runSpeed",0,12,.1),A("trainer.turnRate",.5,40,.5),A("trainer.maxAlive",0,8,1),A("trainer.swingRange",.5,4,.05),A("trainer.swingSlack",0,2,.05),A("trainer.swingArc",10,360,5),A("trainer.windup",.05,2,.05),A("trainer.lockTime",0,1,.05),A("trainer.swingTime",.05,1.5,.05),A("trainer.recover",0,3,.05),A("trainer.swingGap",0,3,.05),A("trainer.damage",0,100,1),A("trainer.tobbleDamage",0,100,1),A("trainer.knockback",0,6,.1),A("trainer.knockTime",.05,1.5,.05),A("trainer.staggerTime",0,3,.05),A("trainer.preferDoc",.1,2,.05),A("trainer.retargetTime",.05,3,.05),A("trainer.repathTime",.1,3,.05),A("trainer.avoidRadius",0,5,.1),A("trainer.avoidWeight",0,5,.1),A("trainer.stuckTime",.1,3,.1),A("trainer.diveChance",0,1,.05),A("trainer.barkChance",0,1,.05),A("run.fadeOut",.05,3,.05),A("run.blackHold",0,2,.05),A("run.fadeIn",.05,3,.05),A("run.gateReach",.5,4,.1),A("run.hoursTime",1,20,.5),A("run.gateOpenTime",.1,3,.05),A("run.attractSpeed",0,1,.02),A("run.attractMargin",0,12,.5),A("run.attractHeight",4.5,14,.5),A("boss.health",100,2e4,50),A("boss.scale",1,3,.05),A("boss.crouchY",.3,1,.01),A("boss.headMult",1,4,.1),A("boss.phase2At",.1,.95,.01),A("boss.phase3At",.05,.9,.01),A("boss.popTime",.05,2,.05),A("boss.telegraphTime",.1,3,.05),A("boss.burstTime",.2,6,.1),A("boss.rate",.5,20,.5),A("boss.damage",0,40,1),A("boss.spread",0,15,.1),A("boss.aimLag",0,1,.01),A("boss.muzzleUp",.5,2,.01),A("boss.coverWaitMin",0,6,.1),A("boss.coverWaitMax",0,8,.1),A("boss.shiftTime",.1,3,.05),A("boss.lobEvery",1,8,1),A("boss.lobWindup",.2,4,.05),A("boss.lobFlight",.5,4,.05),A("boss.lobRecover",0,3,.05),A("boss.lobRadius",.5,6,.1),A("boss.lobDamage",0,150,1),A("boss.lobTobbleDamage",0,150,1),A("boss.lobFalloff",0,1,.05),A("boss.retreatSpeed",.5,12,.1),A("boss.returnSpeed",.5,12,.1),A("boss.minHide",0,20,.5),A("boss.fastTelegraph",.1,3,.05),A("boss.fastBurstTime",.2,6,.1),A("boss.fastRate",.5,20,.5),A("boss.fastWaitMin",0,6,.1),A("boss.fastWaitMax",0,8,.1),A("boss.offerGap",0,3,.05),A("ending.deathDelay",0,10,.1),A("ending.deskReach",.5,6,.1),A("ending.holdTime",.1,5,.1),A("ending.card1Time",.5,15,.1),A("ending.card2Time",.5,20,.1),A("ending.card3Time",.5,15,.1),A("ending.skipLock",0,5,.1),A("ending.finalLock",0,5,.1),A("tobble.enabled",0,1,1),A("tobble.scale",.3,1.2,.01),A("tobble.radius",.1,.6,.01),A("tobble.height",.5,2,.01),A("tobble.health",1,1e3,1),A("tobble.regenDelay",0,20,.5),A("tobble.regenTime",0,20,.5),A("tobble.runSpeed",0,12,.1),A("tobble.turnRate",1,30,.5),A("tobble.followMin",0,20,.5),A("tobble.followMax",1,30,.5),A("tobble.personalSpace",0,5,.05),A("tobble.lofClear",0,4,.05),A("tobble.lofRange",1,60,1),A("tobble.sidestepReact",0,3,.05),A("tobble.sidestepDist",0,5,.1),A("tobble.popTime",.01,1,.01),A("tobble.popLift",0,.6,.01),A("tobble.muzzleUp",.3,2,.01),A("tobble.coverWaitMin",0,5,.1),A("tobble.coverWaitMax",0,8,.1),A("tobble.burstTime",0,6,.1),A("tobble.rate",.5,20,.5),A("tobble.damage",0,100,1),A("tobble.spread",0,20,.5),A("tobble.range",1,100,1),A("tobble.reviveMaxThreats",0,8,1),A("tobble.reviveWaitMax",0,20,.5),A("tobble.reviveRange",.3,4,.05),A("tobble.reviveTime",0,15,.1),A("tobble.reviveHealth",.05,1,.05),A("tobble.playerReviveTime",0,10,.1),A("tobble.playerReviveRange",.3,5,.05),A("tobble.crawlSpeed",0,3,.05),A("tobble.complainEvery",1,30,.5),A("dummy.health",1,1e3,1),A("dummy.respawnTime",0,30,.5),A("dummy.railSpeed",0,10,.1),A("camera.recoil.halfLife",.01,.5,.01),A("camera.recoil.max",0,20,.5),A("look.pad.assist",.1,1,.05),A("feedback.flashTime",.01,.3,.01),A("feedback.flashSize",.05,1.5,.05),A("feedback.tracerTime",.01,.3,.01),A("feedback.tracerWidth",.005,.2,.005),A("feedback.sparkTime",.05,1,.01),A("feedback.sparkCount",0,12,1),A("feedback.gelTime",.1,2,.05),A("feedback.gelCount",0,24,1),A("feedback.gelSpeed",0,10,.1),A("feedback.killGelCount",0,48,1),A("feedback.receiptCount",0,24,1),A("feedback.receiptTime",.2,4,.05),A("feedback.gravity",0,30,.1),A("feedback.hitMarkerTime",.02,1,.01),A("feedback.killMarkerTime",.05,1,.01),A("feedback.reloadResultTime",.1,2,.05),A("feedback.reticleMinGap",0,30,1),A("feedback.lowAmmoFrac",0,1,.05),A("feedback.coverReticleOpacity",0,1,.05),A("feedback.stepDip",0,.1,.001),A("feedback.stepVolume",0,1,.05),A("feedback.shotVolume",0,1,.05),A("feedback.hitVolume",0,1,.05),A("feedback.killVolume",0,1,.05),A("feedback.reloadVolume",0,1,.05),A("feedback.gunSquash",0,.6,.01),A("feedback.gunSquashTime",.01,.5,.01),A("feedback.gunKick",0,.3,.01),A("feedback.bodyKick",0,.3,.01),A("feedback.dummyBurstTime",.01,1,.01),A("feedback.dummyRespawnPop",0,1,.01),A("feedback.faceMaxOpacity",0,1,.05),A("feedback.edgeMaxOpacity",0,1,.05),A("feedback.hitFlashTime",.05,2,.01),A("feedback.hitKick",0,3,.05),A("feedback.hurtVolume",0,1,.05),A("feedback.enemyFlashSize",.05,1.5,.05),A("feedback.enemyTracerTime",.01,.3,.01),A("feedback.enemyTracerWidth",.005,.2,.005),A("feedback.glintSize",.02,.4,.01),A("feedback.blasterVolume",0,1,.05),A("feedback.chargeVolume",0,1,.05),A("feedback.pickupVolume",0,1,.05),A("feedback.barkTime",.2,6,.1),A("feedback.barkGap",0,12,.5),A("feedback.barkMinShow",0,4,.1),A("feedback.bashVolume",0,1,.05),A("feedback.revVolume",0,1,.05),A("feedback.cutVolume",0,1,.05),A("feedback.throwVolume",0,1,.05),A("feedback.clankVolume",0,1,.05),A("feedback.boomVolume",0,1,.05),A("feedback.saunaVolume",0,1,.05),A("feedback.reviveVolume",0,1,.05),A("feedback.tobbleShotVolume",0,1,.05),A("feedback.blastSize",.2,8,.1),A("feedback.blastTime",.05,2,.01),A("feedback.executeShake",0,.3,.005),A("feedback.cutGelEvery",.02,1,.01),A("feedback.arcDot",.01,.5,.01),A("melee.holdTime",0,5,.01),A("melee.bashTime",0,5,.01),A("melee.bashHitAt",0,5,.01),A("melee.bashRange",0,10,.05),A("melee.bashAngle",0,180,1),A("melee.bashDamage",0,500,1),A("melee.bashLunge",0,10,.05),A("melee.bashCooldown",0,5,.01),A("melee.revSpeed",0,30,.1),A("melee.revPulse",.05,5,.01),A("melee.cutterReach",0,10,.05),A("melee.cutterAngle",0,180,1),A("melee.cutTime",0,5,.01),A("melee.finishTime",0,5,.01),A("melee.executeRange",0,10,.05),A("melee.executeAngle",0,180,1),A("melee.promptRange",0,10,.05),A("melee.cutterSpin",0,100,1),A("grenade.carry",0,10,1),A("grenade.start",0,10,1),A("grenade.throwSpeed",0,30,.1),A("grenade.throwLift",0,180,1),A("grenade.gravity",.5,30,.1),A("grenade.ballRadius",.02,1,.01),A("grenade.restitution",0,1,.01),A("grenade.friction",0,1,.01),A("grenade.fuse",0,5,.01),A("grenade.radius",0,10,.05),A("grenade.damage",0,500,1),A("grenade.killRadius",0,10,.05),A("grenade.killDamage",0,500,1),A("grenade.selfDamage",0,2,.05),A("grenade.padReach",0,10,.05),A("grenade.arcTime",0,5,.01),A("grenade.throwTime",0,5,.01)]),SR=new Map(Hl.map(t=>[t.path,t])),Gl=structuredClone(X);function Xr(t,e){let n=t;for(let i of e.split(".")){if(n===null||typeof n!="object")return;n=n[i]}return n}function d0(t,e,n){let i=e.split("."),s=t;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=n,!0}function f0(t=X,e=Gl){let n={};for(let i of Hl){let s=Xr(t,i.path);s!==Xr(e,i.path)&&(n[i.path]=s)}return n}function iy(t,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let n=0;for(let i of Object.keys(e)){let s=SR.get(i);if(!s)continue;let r=e[i],o=Xr(Gl,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||d0(t,i,r)&&n++)}return n}function u0(t,e){if(t===null||typeof t!="object")return JSON.stringify(t);if(Array.isArray(t))return`[${t.map(s=>u0(s,e)).join(", ")}]`;let n="  ".repeat(e+1);return`{
${Object.keys(t).map(s=>`${n}${s}: ${u0(t[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function sy(t=X){return["associate","boss","camera","combat","cover","director","dummy","ending","feedback","grenade","health","look","melee","move","pad","run","tobble","trainer","weapons"].map(e=>`  ${e}: ${u0(t[e],1)},`).join(`
`)}var p0="cr-tuning",TR={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},ER=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function ry(t){let e=t.split("."),n=e.slice(0,-1);return n.length===1&&n[0]==="camera"&&ER.has(e[1])&&n.push("wall"),n[0]==="look"&&n[1]==="pad"&&(n[1]="lookPad"),n}function AR(){try{return window.localStorage}catch{return null}}function oy({storage:t=AR()}={}){let e=()=>{try{return t?t.getItem(p0):null}catch{return null}},n=p=>{try{t&&(p===null?t.removeItem(p0):t.setItem(p0,p))}catch{}};try{let p=e();p&&iy(X,JSON.parse(p))}catch{}let i=new id({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let p=document.activeElement;p&&p!==document.body&&s.contains(p)&&p.blur&&p.blur()}s.addEventListener("click",p=>{let m=p.target;m&&m.closest&&m.closest(".lil-title")&&m.blur!==void 0&&r()});let o=new Map;function a(p){let m=i,g="";for(let y of p){if(g+=`.${y}`,!o.has(g)){let w=m.addFolder(TR[y]||y);w.close(),o.set(g,w)}m=o.get(g)}return m}function l(){let p=f0();n(Object.keys(p).length?JSON.stringify(p):null)}for(let p of Hl){let m=p.path.split("."),g=m[m.length-1],y=Xr(X,m.slice(0,-1).join(".")),w=typeof Xr(Gl,p.path)=="boolean"?a(ry(p.path)).add(y,g):a(ry(p.path)).add(y,g,p.min,p.max,p.step);w.onChange(l),w.onFinishChange(r)}let c=null;function h(p){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let m=document.createElement("div");m.textContent="Press Cmd+C to copy",m.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=m,s.appendChild(m),s.appendChild(c)}c.value=p,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(p){c&&(c.hidden=!0,c.note.hidden=!0);let m=null;try{m=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(p):null}catch{m=null}if(!m){h(p);return}m.catch(()=>h(p))}let u={copyChanges(){r(),d(JSON.stringify(f0(),null,2))},copyForFile(){r(),d(sy())},resetAll(){r();for(let p of Hl)d0(X,p.path,Xr(Gl,p.path));n(null),i.controllersRecursive().forEach(p=>p.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function v(p){f=p,s.style.display=p?"":"none"}return v(!1),{toggle(){v(!f)},isOpen:()=>f}}var ay=Math.PI*2,ci=t=>t-ay*Math.round(t/ay),Ni=(t,e)=>Math.atan2(t,e);function Vl(t){return Math.min(1,Math.hypot(t.moveX,t.moveY))}function bi(t,e){let n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),s=-t.moveY*n-t.moveX*i,r=-t.moveY*i+t.moveX*n,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Ht(t,e,n){let i=ci(e-t);return t+Math.max(-n,Math.min(n,i))}function na(t,e,n,i,s,r){let o=t.vel,a=(Math.hypot(e,n)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=n-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=n):(o[0]+=l/h*a,o[2]+=c/h*a)}var m0=[0,0],fr=[0,0,0],ia=1e-9,RR=1.5;var g0=(t=X)=>t.tobble?.playerReviveTime??RR;function ly(t,e,n){let i=e-t.pos[0],s=n-t.pos[2];Math.hypot(i,s)>1e-6&&(t.facing=t.facing+ci(Math.atan2(i,s)-t.facing)),t.heading=t.facing}function Wl(t){t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0}var sd={knocked:{acceptsTap:!1,selfMoves:!0,enter(t){Wl(t),t.cover=null,t.coverTarget=null,t.scratch.prevOff=0},update(t,e,n){let i=t.scratch;t.aiming=!1,t.firing=!1;let s=i.time>0?i.time:0,r=t.stateTime>=s-ia,o=r||!(s>0)?1:t.stateTime/s,a=i.dist*(1-(1-o)*(1-o)),l=a-i.prevOff;return i.prevOff=a,fr[0]=i.dir[0]*l,fr[1]=0,fr[2]=i.dir[1]*l,t.moveBy(fr,n,!1),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},bash:{acceptsTap:!1,selfMoves:!0,enter(t){t.aiming=!1,t.firing=!1,t.scratch.dir=[Math.sin(t.facing),Math.cos(t.facing)],t.scratch.prevOff=0,t.scratch.hit=!1,t.heading=t.facing},update(t,e,n){let i=X.melee,s=t.scratch;t.aiming=!1,t.firing=!1;let r=t.stateTime>=i.bashTime-ia,o=r||!(i.bashTime>0)?1:t.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,fr[0]=s.dir[0]*l,fr[1]=0,fr[2]=s.dir[1]*l,t.moveBy(fr,n,!1),!s.hit&&(r||t.stateTime>=i.bashHitAt-ia)&&(s.hit=!0,t.onAction?.({type:"bashHit"})),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(t){t.aiming=!1,t.firing=!1,t.heading=t.facing},update(t,e,n){let i=t.tuning,s=X.melee.revSpeed;t.aiming=!1,t.firing=!1,bi(e,m0),na(t,m0[0]*s,m0[1]*s,s,n,i);let r=t.speed();return r>s&&(t.vel[0]*=s/r,t.vel[2]*=s/r),r>i.faceMinSpeed?t.facing=Ht(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n):t.facing=Ht(t.facing,e.camYaw,i.aimTurnRate*n),t.heading=t.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(t){Wl(t)},update(t){return Wl(t),t.stateTime<t.scratch.time-ia?null:(t.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(t){Wl(t)},update(t,e){return Wl(t),e.interactHeld?t.stateTime<g0()-ia?null:(t.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},sa={bash(t,e){return t.state!=="move"&&t.state!=="sprint"||t.bashReadyAt>t.clock+ia?!1:(t.bashReadyAt=t.clock+X.melee.bashCooldown,Number.isFinite(e)&&(t.facing=t.facing+ci(e-t.facing)),t.go("bash",{}),!0)},rev(t,e){return e?t.state!=="move"&&t.state!=="sprint"?!1:(t.go("rev",{}),!0):t.state!=="rev"?!1:(t.go("move",{}),!0)},execute(t,e,n){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("execute",{}),t.scratch.time=Number.isFinite(n)&&n>0?n:0,ly(t,e[0],e[1]),!0)},knock(t,e,n,i,s){if(t.state==="roll"||t.state==="execute"||t.state==="reviveTobble"||t.state==="knocked"||t.state==="downed")return!1;let r=Math.hypot(e,n);return r>1e-9?(t.go("knocked",{}),t.scratch.dir=[e/r,n/r],t.scratch.dist=i>0?i:0,t.scratch.time=s,!0):!1},reviveTobble(t,e){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("reviveTobble",{}),ly(t,e[0],e.length>2?e[2]:e[1]),!0)}};var ts=1e-9,v0=Math.PI/180,hy=.05,CR=1.8,PR={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function uy(t=X.cover,e=X.move){return{radius:e.radius,gap:t.gap,endInset:t.endInset,minLength:t.minLength}}var IR=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],LR=t=>{for(let e of["a","b","tangent","normal"])Object.freeze(t[e]);return Object.freeze(t)};function dy(t,{radius:e,gap:n,endInset:i,minLength:s,exclude:r=[]}){let o=e+n,a=[];return t.forEach((l,c)=>{let h=PR[l.kind];if(!h)return;let d=t.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>hy&&u.min[1]<CR);for(let u of IR){let f=u.axis*2,v=2-f,p=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,m=l.min[v],g=l.max[v],y=g-m,w=[];for(let b of d){if(!(p>b.min[f]-o+ts&&p<b.max[f]+o-ts))continue;let R=b.min[v]-o-m,C=b.max[v]+o-m;C>ts&&R<y-ts&&w.push([Math.max(R,0),Math.min(C,y)])}w.sort((b,R)=>b[0]-R[0]);let M=[];for(let b of w){let R=M[M.length-1];R&&b[0]<=R[1]+ts?R[1]=Math.max(R[1],b[1]):M.push([b[0],b[1]])}let _=[],S=0,x=!0;for(let[b,R]of M)b>S+ts&&_.push([S,b,x,!1]),S=R,x=!1;y>S+ts&&_.push([S,y,x,!0]),_.forEach(([b,R,C,L],E)=>{let k=`${c}${u.name}#${E}`;if(r.includes(k))return;let I=m+b+(C?i:0),P=m+R-(L?i:0),U=P-I;if(U<s-ts)return;let z=u.axis===0?[p,I]:[I,p],te=u.axis===0?[p,P]:[P,p];a.push(LR({id:k,kind:h,boxIndex:c,a:z,b:te,length:U,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:C,openB:L}))})}}),a}function ki(t,e,n=[0,0]){return n[0]=t.a[0]+t.tangent[0]*e,n[1]=t.a[1]+t.tangent[1]*e,n}function pr(t,e,n=X.cover){let i=e<=n.cornerZone,s=t.length-e<=n.cornerZone;return i&&s?e<=t.length-e?-1:1:i?-1:s?1:0}function Xl(t,e){return e<0?t.openA:t.openB}var cy=.9,fy=(t,e,n,i)=>vi(t,[e[0],cy,e[1]],[n[0],cy,n[1]],.9*i)===1;function Yl(t,e,n,i,s,r,o){let a=Math.cos(r.grabAngle*v0),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*v0,d=null;for(let u of t){let f=(n[0]-u.a[0])*u.normal[0]+(n[2]-u.a[1])*u.normal[1],v=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||v<a||v<=ts)continue;let p=Math.max(f,0)/v,m=(n[0]+i[0]*p-u.a[0])*u.tangent[0]+(n[2]+i[1]*p-u.a[1])*u.tangent[1];if(m<-r.grabSlack||m>u.length+r.grabSlack)continue;let g=Math.max(0,Math.min(u.length,m)),y=ki(u,g),w=y[0]-n[0],M=y[1]-n[2],_=Math.hypot(w,M);if(!(_>r.grabRange||d&&_>=d.dist)){if(_>.3){let S=(w*l+M*c)/_;if(Math.acos(Math.max(-1,Math.min(1,S)))>h)continue}fy(e,[n[0],n[2]],y,o)&&(d={edge:u,t:g,point:y,dist:_})}}return d}function py(t,e,n,i,s,r,o){if(pr(n,i,r)!==s||!Xl(n,s))return null;let a=ki(n,i),l=Math.cos(r.swapAngle*v0),c=null;for(let h of t){if(h===n||h.normal[0]*n.normal[0]+h.normal[1]*n.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,v=ki(h,f),p=v[0]-a[0],m=v[1]-a[1],g=Math.hypot(p,m);(p*n.tangent[0]+m*n.tangent[1])*s<=0||Math.abs(p*n.normal[0]+m*n.normal[1])>r.swapMaxOffset||g>r.swapRange||c&&g>=c.dist||fy(e,a,v,o)&&(c={edge:h,t:f,point:v,dist:g})}return c}function DR(t,e,n,i){let s=e[1]+hy,r=e[1]+i;for(let o of t){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<n-ts)return!1}return!0}function my(t,e,n,i,s,r){if(t.kind!=="low"||t.depth>i.vaultMaxDepth)return null;let o=ki(t,e),a=t.depth+2*(s+i.gap),l=[o[0]-t.normal[0]*a,0,o[1]-t.normal[1]*a];if(!DR(n,l,s,r))return null;let c=n.filter((h,d)=>d!==t.boxIndex);return vi(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var NR=["coverSlide","cover","vault","coverSwap"],gy=Math.PI/180,mn=[0,0],od=[0,0],mr=[0,0,0],yy=.001,kR=2,x0=(t,e,n)=>Math.max(e,Math.min(n,t));function y0(t,e,n){if(Vl(e)>=t.coverTuning.grabMinTilt){bi(e,mn);let i=Math.hypot(mn[0],mn[1]);n[0]=mn[0]/i,n[1]=mn[1]/i}else n[0]=Math.sin(t.facing),n[1]=Math.cos(t.facing);return n}var by={name:"cover",state:"coverSlide",when(t,e){return t.coverTarget=Yl(t.coverEdges,t.boxes,t.pos,y0(t,e,od),e.camYaw,t.coverTuning,t.tuning.radius),t.coverTarget!==null}},rd={};function _y(t,e){let n=t.coverTuning;if(!n.autoSlam||e.aim||Vl(e)<n.autoMinTilt)return null;Object.assign(rd,n),rd.grabAngle=n.autoAngle,rd.grabRange=n.autoDist,bi(e,mn);let i=Math.hypot(mn[0],mn[1]);od[0]=mn[0]/i,od[1]=mn[1]/i;let s=Yl(t.coverEdges,t.boxes,t.pos,od,e.camYaw,rd,t.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(t.runVel[0]*r[0]+t.runVel[1]*r[1])>=n.autoMinSpeed?s:null}function OR(t,e,n){let i=pr(t,e,n);return t.kind==="low"||i!==0&&Xl(t,i)}function Ds(t){return t.cover?t.cover.edge:t.scratch.edge||null}function b0(t){if(t.state==="downed")return"downed";if(t.state==="sprint")return"sprint";if(t.cover&&t.cover.pop>=.5)return"aim";if(t.state==="cover"||t.state==="coverSlide"||t.state==="coverSwap"){let e=Ds(t);if(e)return e.kind==="low"?"coverLow":"coverTall"}return t.aiming?"aim":"normal"}function Yr(t){let e=t.cover;if(!e)return 1;let n=e.edge,i=e.popEnd;if(i===0&&(i=pr(n,e.t,t.coverTuning)),i===0)return 1;let s=Ni(-n.normal[0],-n.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=n.tangent[0]*i*r+n.tangent[1]*i*o<0?-1:1;return Xl(n,i)?a:-a}function vy(t,e,n,i){let s=t.coverTarget;t.coverTarget=null;let r=t.scratch;r.edge=s.edge,r.t=s.t,r.from=[t.pos[0],t.pos[1],t.pos[2]],r.to=[s.point[0],t.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(yy,x0(o/Math.max(e,1e-6),n,i)),t.aiming=!1}function xy(t,e,n,i){let s=t.scratch,r=Math.min(1,t.stateTime/s.dur+1e-9);return mr[0]=s.from[0]+(s.to[0]-s.from[0])*r-t.pos[0],mr[1]=0,mr[2]=s.from[2]+(s.to[2]-s.from[2])*r-t.pos[2],t.moveBy(mr,e,!1),i!==null&&(t.facing=Ht(t.facing,i,n*e)),t.heading=t.facing,r<1?null:Math.hypot(t.pos[0]-s.to[0],t.pos[2]-s.to[2])>.1?"move":(t.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},t.vel[0]=t.vel[1]=t.vel[2]=0,t.slams++,"cover")}var UR={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;vy(t,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(t,e,n){let i=t.scratch.edge;return xy(t,n,t.coverTuning.slideTurnRate,Ni(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;t.cover=null,vy(t,e.swapSpeed,0,kR);let n=t.scratch;t.heading=Ni(n.to[0]-n.from[0],n.to[2]-n.from[2]),t.facing=t.facing+ci(t.heading-t.facing)},update(t,e,n){return xy(t,n,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTarget;t.coverTarget=null;let n=t.scratch,i=e.edge;t.cover=null,t.aiming=!1,n.edge=i,n.landing=e.landing,n.from=[t.pos[0],t.pos[2]],t.heading=Ni(-i.normal[0],-i.normal[1]),t.facing=t.facing+ci(t.heading-t.facing)},update(t,e,n){let i=t.scratch,s=t.coverTuning,r=Math.min(1,t.stateTime/Math.max(s.vaultTime,yy)+1e-9);return t.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,t.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(t.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,t.vel[1]=0,t.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(t){t.cover=null,t.aiming=!1},update(t,e,n){let i=t.coverTuning,s=t.cover,r=s.edge,o=t.tuning,a=bi(e,mn),l=Math.hypot(mn[0],mn[1]),c=l>0?mn[0]/l:0,h=l>0?mn[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,v=(b,R)=>(t.vel[0]=b*o.jog,t.vel[1]=0,t.vel[2]=R*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*gy))return v(mn[0],mn[1]);if(e.tap&&f){let b=Math.cos(i.pushAngle*gy);if(-(c*d+h*u)>=b){let C=my(r,s.t,t.boxes,i,o.radius,o.height);if(C)return t.coverTarget={landing:C,edge:r},"vault"}let R=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(R)>=b){let C=py(t.coverEdges,t.boxes,r,s.t,R>0?1:-1,i,o.radius);if(C)return t.coverTarget=C,"coverSwap"}}let p=pr(r,s.t,i),m=OR(r,s.t,i),g=e.aim&&m?1:0,y=e.fire&&!e.aim&&m?1:0,w=i.popTime>0?n/i.popTime:1;s.pop=s.pop<g?Math.min(g,s.pop+w):Math.max(g,s.pop-w);let M=i.blindTime>0?n/i.blindTime:1;s.blind=s.blind<y?Math.min(y,s.blind+M):Math.max(y,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?p:0,s.blindEnd=s.blind>0&&r.kind!=="low"?p:0,s.exposed=s.pop>=.5,t.aiming=s.exposed;let _=!1;if(s.pop===0&&s.blind===0){let b=mn[0]*r.tangent[0]+mn[1]*r.tangent[1];if(Math.abs(b)>=i.alongDeadzone){let R=s.t+b*i.moveSpeed*n;if(s.t=x0(R,0,r.length),R!==s.t&&Xl(r,b>0?1:-1)&&(_=!0,s.endPush+=n,s.endPush>=i.endLeaveTime))return v(r.tangent[0]*Math.sign(b),r.tangent[1]*Math.sign(b))}}else s.blindEnd!==0&&y===1&&(s.t=x0(s.t+s.blindEnd*i.moveSpeed*n,0,r.length));_||(s.endPush=0);let S=ki(r,s.t),x=s.popEnd*i.popShift*s.pop;return mr[0]=S[0]+r.tangent[0]*x-t.pos[0],mr[1]=0,mr[2]=S[1]+r.tangent[1]*x-t.pos[2],t.moveBy(mr,n,!1),s.pop>0?t.facing=Ht(t.facing,e.camYaw,o.aimTurnRate*n):t.facing=Ht(t.facing,Ni(-d,-u),o.turnRate*n),t.heading=t.facing,null}}},My=Object.fromEntries(NR.map(t=>[t,UR[t]]));var ld=t=>[Math.sin(t),0,Math.cos(t)],cd=t=>[-Math.cos(t),0,Math.sin(t)],FR=(t,e,n)=>e*(1-(1-t)**n),Nn=[0,0],ad=[0,0,0];function _0(t,e,n){return e.sprint&&!e.aim&&!e.grenade&&Vl(e)>=n.stickSprintMin}var BR={move:{acceptsTap:!0,enter(){},update(t,e,n){let i=t.tuning;if(_0(t,e,i))return"sprint";t.aiming=e.aim,t.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return bi(e,Nn),na(t,Nn[0]*s,Nn[1]*s,s,n,i),e.aim||e.fire||e.grenade?t.facing=Ht(t.facing,e.camYaw,i.aimTurnRate*n):t.speed()>i.faceMinSpeed&&(t.facing=Ht(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n)),t.heading=t.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(t,e){t.aiming=!1,t.speed()>t.tuning.sprintHeadingMinSpeed?t.heading=Math.atan2(t.vel[0],t.vel[2]):bi(e,Nn)>.01?t.heading=Math.atan2(Nn[0],Nn[1]):t.heading=t.facing},update(t,e,n){let i=t.tuning;return _0(t,e,i)?(bi(e,Nn),t.heading=Ht(t.heading,Math.atan2(Nn[0],Nn[1]),i.sprintTurnRate*n),na(t,Math.sin(t.heading)*i.sprint,Math.cos(t.heading)*i.sprint,i.sprint,n,i),t.facing=t.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(t,e){t.aiming=!1;let n=t.scratch;if(n.dir=[Math.sin(t.facing),Math.cos(t.facing)],bi(e,Nn)>.01){let i=Math.hypot(Nn[0],Nn[1]);n.dir[0]=Nn[0]/i,n.dir[1]=Nn[1]/i}n.prevOff=0,n.queued=!1,t.heading=Math.atan2(n.dir[0],n.dir[1]),t.facing=t.facing+ci(t.heading-t.facing)},update(t,e,n){let i=t.tuning,s=t.scratch;e.tap&&t.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=t.stateTime>=i.rollTime-1e-9,o=FR(r?1:t.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,ad[0]=s.dir[0]*a,ad[1]=0,ad[2]=s.dir[1]*a,t.moveBy(ad,n,!1),r?s.queued?"roll":_0(t,e,i)?"sprint":(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(t){t.cover=null,t.coverTarget=null,t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0},update(t,e,n){let i=t.tuning;return t.aiming=!1,t.firing=!1,bi(e,Nn),na(t,Nn[0]*i.crawlSpeed,Nn[1]*i.crawlSpeed,i.crawlSpeed,n,i),t.speed()>i.faceMinSpeed&&(t.facing=Ht(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.crawlTurnRate*n)),t.heading=t.facing,null},exit(){}},...My,...sd},zR=[by,{name:"roll",when:()=>!0,state:"roll"}];function wy({boxes:t,spawn:e,tuning:n=X.move,coverTuning:i=X.cover,coverEdges:s=[],states:r=BR,contextActions:o=zR,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:n,boxes:t,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,f=!0){let v=h.pos,p=Dn(h.boxes,v,d,n.radius,n.height);if(h.hit=!!p.hit,!f)u>0&&(h.vel[0]=(p.pos[0]-v[0])/u,h.vel[2]=(p.pos[2]-v[2])/u);else if(p.hit)if(u>0)h.vel[0]=(p.pos[0]-v[0])/u,h.vel[2]=(p.pos[2]-v[2])/u;else{let m=p.normal,g=h.vel[0]*m[0]+h.vel[1]*m[1]+h.vel[2]*m[2];g<0&&(h.vel[0]-=m[0]*g,h.vel[1]-=m[1]*g,h.vel[2]-=m[2]*g)}v[0]=p.pos[0],v[1]=p.pos[1],v[2]=p.pos[2]},go(d,u){let f=h.state;r[f].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[f].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,f,u)},down(){h.go("downed",{})},bash(d){return sa.bash(h,d)},rev(d){return sa.rev(h,d)},execute(d,u){return sa.execute(h,d,u)},reviveTobble(d){return sa.reviveTobble(h,d)},knock(d,u,f,v){return sa.knock(h,d,u,f,v)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let p of o)if(p.when(h,d)){h.go(p.state,d);break}}h.stateTime+=u;let f=r[h.state].update(h,d,u),v=h.state;if(!r[v].selfMoves){let p=h.vel[0],m=h.vel[2],g=Math.hypot(p,m);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(g>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=p,h.runVel[1]=m)):(h.runVel[0]=p,h.runVel[1]=m,h.hitTime=0)}if(v==="move"||v==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let m=Math.max(.1,v==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=m&&(h.stepDist%=m,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:v==="sprint",speed:h.speed()}))}if(v==="move"||v==="sprint"){let p=_y(h,d);if(!p)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=p,h.go("coverSlide",d);return}}f&&h.go(f,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function Sy({AudioContextCtor:t=globalThis.AudioContext}={}){let e=null,n=null,i=!1,s=null,r=1;function o(){if(e||i||!t)return e;try{e=new t;let p=Math.max(1,Math.floor(e.sampleRate*.4));n=e.createBuffer(1,p,e.sampleRate);let m=n.getChannelData(0);for(let g=0;g<p;g++)m[g]=Math.random()*2-1}catch{e=null,i=!0}return e}function a(p){if(!(p>0||p<0)||!e.createStereoPanner)return e.destination;let m=e.createStereoPanner();return m.pan.value=Math.max(-1,Math.min(1,p)),m.connect(e.destination),m}let l=()=>{if(e.state==="suspended"){let p=e.resume();p&&p.catch&&p.catch(()=>{})}};function c(p,m,g){let y=e.createGain();return y.gain.setValueAtTime(g,p),y.gain.exponentialRampToValueAtTime(.001,p+m),y.connect(s),y}function h(p,m,g,y,w,M){let _=e.createOscillator();_.type=m,_.frequency.setValueAtTime(g,w),y!==g&&_.frequency.exponentialRampToValueAtTime&&_.frequency.exponentialRampToValueAtTime(y,w+M),_.connect(p),_.start(w),_.stop(w+M)}function d(p,m,g,y,w){let M=e.createBufferSource();M.buffer=n;let _=e.createBiquadFilter();_.type=m,_.frequency.setValueAtTime(g,y),M.connect(_),_.connect(p),M.start(y),M.stop(y+w)}function u(p,m,g,y,w,M){let _=e.createBufferSource();_.buffer=n;let S=e.createBiquadFilter();S.type=m,S.frequency.setValueAtTime(g,w),S.frequency.exponentialRampToValueAtTime&&S.frequency.exponentialRampToValueAtTime(y,w+M),_.connect(S),S.connect(p),_.start(w),_.stop(w+M)}let f=(p,m,g)=>{let y=c(p,.03,g);d(y,"bandpass",m,p,.03)},v={rifle:(p,m)=>{d(c(p,.05,m*.55),"bandpass",2200,p,.05),h(c(p,.16,m*.9),"sine",150,48,p,.16),h(c(p,.22,m*.8),"sine",62,34,p,.22),d(c(p,.26,m*.35),"lowpass",700,p,.26)},pistol:(p,m)=>{d(c(p,.06,m*.6),"bandpass",2e3,p,.06),h(c(p,.2,m*.9),"sine",130,42,p,.2),h(c(p,.26,m*.85),"sine",56,30,p,.26),d(c(p,.3,m*.4),"lowpass",600,p,.3)},dry:(p,m)=>h(c(p,.02,m),"square",1200,1200,p,.02),hit:(p,m)=>h(c(p,.04,m),"sine",1600,1600,p,.04),head:(p,m)=>{let g=c(p,.06,m);h(g,"sine",2400,2400,p,.06),h(g,"sine",3200,3200,p,.06)},kill:(p,m)=>{let g=c(p,.12,m);h(g,"sine",300,900,p,.12);let y=c(p,.2,m*.8);d(y,"lowpass",1400,p,.2)},magOut:(p,m)=>{f(p,3e3,m),f(p+.08,2200,m)},magIn:(p,m)=>{f(p,2e3,m),f(p+.08,3400,m)},perfect:(p,m)=>{let g=c(p,.35,m);h(g,"sine",1320,1320,p,.35),h(g,"sine",1980,1980,p,.35)},good:(p,m)=>h(c(p,.15,m),"sine",990,990,p,.15),jam:(p,m)=>h(c(p,.15,m),"square",90,90,p,.15),blaster:(p,m)=>{let g=c(p,.1,m);h(g,"square",900,300,p,.1),d(g,"bandpass",1500,p,.1)},charge:(p,m)=>{let g=e.createGain();g.gain.setValueAtTime(.001,p),g.gain.exponentialRampToValueAtTime(m,p+.3),g.gain.exponentialRampToValueAtTime(.001,p+.35),g.connect(s),h(g,"sine",300,900,p,.35)},hurt:(p,m)=>{let g=c(p,.15,m);d(g,"lowpass",600,p,.15),h(g,"sine",80,80,p,.15)},downed:(p,m)=>h(c(p,.6,m),"sine",400,80,p,.6),clear:(p,m)=>{[523,659,784].forEach((g,y)=>h(c(p+y*.12,.15,m),"sine",g,g,p+y*.12,.15))},pickup:(p,m)=>{h(c(p,.06,m),"sine",880,880,p,.06),h(c(p+.07,.08,m),"sine",1320,1320,p+.07,.08)},thud:(p,m)=>{h(c(p,.32,m),"sine",60,30,p,.32),d(c(p,.28,m*.6),"lowpass",260,p,.28),d(c(p,.07,m*.3),"bandpass",900,p,.07)},bash:(p,m)=>{h(c(p,.2,m),"sine",120,40,p,.2),d(c(p,.06,m*.6),"bandpass",1800,p,.06)},rev:(p,m)=>{h(c(p,.25,m*.5),"sawtooth",180,260,p,.25),d(c(p,.25,m*.25),"bandpass",2600,p,.25)},cut:(p,m)=>{h(c(p,.3,m*.5),"sawtooth",150,105,p,.3),d(c(p,.3,m*.5),"bandpass",900,p,.3),d(c(p,.2,m*.3),"lowpass",400,p,.2)},finish:(p,m)=>{h(c(p,.4,m),"sine",70,26,p,.4),d(c(p,.3,m*.5),"lowpass",220,p,.3)},throw:(p,m)=>{u(c(p,.3,m*.6),"bandpass",400,1600,p,.3),h(c(p,.18,m*.5),"sawtooth",140,85,p+.02,.18)},clank:(p,m)=>{let g=c(p,.14,m*.6);h(g,"square",1450,1450,p,.14),h(g,"square",2230,2230,p,.14),d(c(p,.04,m*.5),"bandpass",3500,p,.04)},boom:(p,m)=>{h(c(p,.5,m),"sine",50,50,p,.5),h(c(p,.3,m*.7),"sine",110,40,p,.3),d(c(p,.45,m*.6),"lowpass",500,p,.45)},saunaOpen:(p,m)=>{u(c(p,.5,m*.7),"bandpass",700,3200,p,.5)},saunaClose:(p,m)=>{u(c(p,.3,m*.6),"bandpass",2600,600,p,.3),h(c(p+.28,.2,m),"sine",95,45,p+.28,.2)},revive:(p,m)=>{h(c(p,.2,m*.8),"triangle",440,440,p,.2),h(c(p+.17,.3,m),"triangle",660,660,p+.17,.3)},tobbleShot:(p,m)=>{h(c(p,.07,m),"sine",700,280,p,.07),d(c(p,.04,m*.5),"bandpass",2800,p,.04)},step:(p,m)=>{h(c(p,.1,m),"sine",95,50,p,.1),d(c(p,.07,m*.5),"lowpass",280,p,.07)}};return{play(p,m,g=0){let y=v[p];if(!(!y||!(m*r>0)||!o()))try{l(),s=a(g),y(e.currentTime,m*r)}catch{}},setVolume(p){r=Number.isFinite(p)?Math.min(1,Math.max(0,p)):1},unlock(){if(o())try{l()}catch{}}}}function Ty(){let t=!1;return{update(e,n,i){return i?(n&&(t=!0),e||(t=!1),{fire:t&&!!e,firePressed:!!n}):(t=!1,{fire:!1,firePressed:!1})},reset(){t=!1}}}var hd=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),Ey=Object.freeze(["regret",null,"pistol"]);function Ay(t,e){return t>=e.perfectStart&&t<=e.perfectEnd?"perfect":t>=e.goodStart&&t<=e.goodEnd?"good":"jam"}function M0(t,e,n,i){let s=Math.max(t.reloadTime,i.minReloadTime);return n==="perfect"?Math.min(e+t.perfectFinish,s):n==="good"?Math.min(e+t.goodFinish,s):n==="jam"?s+t.jamPenalty:s}var HR={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function Ry({weapons:t=X.weapons,combat:e=X.combat,loadout:n=Ey}={}){let i={},s=()=>{for(let p of n)p&&Object.assign(i[p]||(i[p]={}),{mag:Math.floor(t[p].mag),reserve:Math.floor(t[p].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,n.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>n[o.slot],l=(p,m)=>p[HR[m]||"spreadHip"],c=p=>p!=null&&o.reload===null&&o.switching<=0;function h(){let p=a(),m=t[p],g=i[p];return o.reload===null&&o.switching<=0&&g.mag<m.mag&&(m.infiniteReserve>0||g.reserve>0)}function d(){let p=a(),m=t[p];o.reload={id:p,t:0,press:null,end:M0(m,0,"normal",e)},i[p].boost=!1,r.push({type:"reloadStart",id:p})}function u(){let{id:p,press:m}=o.reload,g=t[p],y=i[p],w=Math.max(0,g.mag-y.mag);if(g.infiniteReserve>0)y.mag+=w;else{let M=Math.min(w,y.reserve);y.mag+=M,y.reserve-=M}y.boost=m==="perfect",o.reload=null,r.push({type:"reloadDone",id:p,result:m||"normal"})}function f(p){p===o.slot||!n[p]||(o.reload=null,o.slot=p,o.switching=t[n[p]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:n[p]}))}function v(p){let m=n.length;for(let g=1;g<m;g++){let y=(o.slot+p*g+m*m)%m;if(n[y])return f(y)}}return o.current=a,o.canFire=c,o.spreadOf=p=>l(t[a()],p)+i[a()].bloom,o.update=function(m,g,y){r.length=0,(!(y>0)||!Number.isFinite(y))&&(y=0);let w=m.weapon;w==="next"?v(1):w==="prev"?v(-1):(w===1||w===2||w===3)&&f(w-1),o.switching-=y;for(let C of n)C&&(i[C].bloom=Math.max(0,i[C].bloom-t[C].bloomRecover*y));let M=a(),_=t[M],S=i[M];if(m.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let C=o.reload,L=Math.max(_.reloadTime,e.minReloadTime);C.press=Ay(C.t/L,_),C.end=M0(_,C.t,C.press,e),r.push({type:"reloadPress",id:M,result:C.press})}}o.reload!==null&&(o.reload.t+=y,o.reload.t>=o.reload.end&&u()),m.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=y,m.fire||(o.dryLatched=!1),c(g)||(o.buffer=0);let x=_.auto>0,b=x?!!m.fire:o.buffer>0,R=1/Math.max(_.rate,e.minRate);for(o.cooldown-=y,b||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-R);b&&c(g)&&o.cooldown<=0;){if(S.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(S.mag--,r.push({type:"shot",id:M,mult:S.boost?_.perfectDamage:1,spread:o.spreadOf(g)}),S.bloom=Math.min(_.bloomMax,S.bloom+_.bloomPerShot),o.cooldown+=R,S.mag===0&&(S.boost=!1),!x){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,n.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(p,m)=>{let g=i[p];!g||t[p].infiniteReserve>0||!(m>0)||(g.reserve=Math.max(g.reserve,Math.min(Math.floor(t[p].reserveMax),g.reserve+Math.floor(m))))},o.refill=()=>{for(let p of n)p&&(i[p].reserve=Math.floor(t[p].reserveMax))},o.set=(p,{mag:m,reserve:g}={})=>{i[p]&&(m!==void 0&&(i[p].mag=m),g!==void 0&&(i[p].reserve=g))},o}function Cy(t){if(t.grenadeAim||Object.hasOwn(sd,t.state))return null;if(t.state==="move")return t.aiming?"aim":t.firing?"hip":null;if(t.state==="cover"&&t.cover){if(t.cover.pop===1)return"aim";if(t.cover.blind===1)return"blind"}return null}var ra=[0,0];function ud(t,e,n,i=X.combat,s=[0,0,0]){if(e==="blind"&&t.cover){let l=t.cover,c=l.edge,h=t.tuning.radius+t.coverTuning.gap,d=c.normal;if(c.kind==="low")ki(c,l.t,ra),s[0]=ra[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=ra[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;ki(c,u<0?0:c.length,ra);let f=t.coverTuning.endInset+i.blindReach;s[0]=ra[0]+c.tangent[0]*u*f-d[0]*h,s[1]=i.muzzleUp,s[2]=ra[1]+c.tangent[1]*u*f-d[1]*h}return s}let r=i.muzzleRight*Yr(t),o=Math.sin(n),a=Math.cos(n);s[1]=t.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=t.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=t.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!ta(t.boxes,s,0)));l-=.25);return s}function GR(t,e,n,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(t[o]<n.min[o]||t[o]>n.max[o])return 1/0}else{let a=(n.min[o]-t[o])/e[o],l=(n.max[o]-t[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function w0(t,e,n,i,s=1/0){let r=t[0]-n[0],o=t[1]-n[1],a=t[2]-n[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function VR(t,e,n,i,s,r=1/0){let o=i[0]-n[0],a=i[1]-n[1],l=i[2]-n[2],c=t[0]-n[0],h=t[1]-n[1],d=t[2]-n[2],u=o*o+a*a+l*l,f=o*c+a*h+l*d,v=u>1e-12?Math.max(0,Math.min(1,f/u)):0,p=c-o*v,m=h-a*v,g=d-l*v;if(p*p+m*m+g*g<=s*s)return 0;let y=Math.min(w0(t,e,n,s,r),w0(t,e,i,s,r));if(u>1e-12){let w=o*e[0]+a*e[1]+l*e[2],M=e[0]*c+e[1]*h+e[2]*d,_=c*c+h*h+d*d,S=u-w*w;if(S>1e-12*u){let x=u*M-f*w,b=u*_-f*f-s*s*u,R=x*x-S*b;if(R>=0){let C=(-x-Math.sqrt(R))/S,L=f+C*w;C>=0&&C<=r&&L>0&&L<u&&C<y&&(y=C)}}}return y}function kn(t,e,n,i,s,{ignoreBox:r=-1}={}){let o=n,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=GR(t,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:f}=d.shapes,v=w0(t,e,u.c,u.r,o);v<=o&&v!==1/0&&(o=v,a="head",l=d,c=-1,h=!0);let p=VR(t,e,f.a,f.b,f.r,o);p<=o&&p!==1/0&&(o=p,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[t[0]+e[0]*o,t[1]+e[1]*o,t[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n],kind:"none",target:null,boxIndex:-1}}function oa(t,e,n,i=[0,0,0]){if(!(e>0))return i[0]=t[0],i[1]=t[1],i[2]=t[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*n(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*n(),l=Math.abs(t[1])<.9?0:1,c=l===0?1:0,h=t[1]*0-t[2]*c,d=t[2]*l-t[0]*0,u=t[0]*c-t[1]*l,f=Math.hypot(h,d,u);h/=f,d/=f,u/=f;let v=t[1]*u-t[2]*d,p=t[2]*h-t[0]*u,m=t[0]*d-t[1]*h,g=Math.cos(a)*o,y=Math.sin(a)*o;return i[0]=t[0]*r+h*g+v*y,i[1]=t[1]*r+d*g+p*y,i[2]=t[2]*r+u*g+m*y,i}function Py({lens:t,view:e,muzzle:n,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let m=oa(e,i,l),g=kn(t,m,s,r,o,{ignoreBox:a}),y=[g.point[0]-n[0],g.point[1]-n[1],g.point[2]-n[2]],w=Math.hypot(y[0],y[1],y[2]),M=w>1e-9?[y[0]/w,y[1]/w,y[2]/w]:[m[0],m[1],m[2]];return{from:n,dir:M,hit:g}}let h=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),d=kn(t,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s]:d.point,f=[u[0]-n[0],u[1]-n[1],u[2]-n[2]],v=Math.hypot(f[0],f[1],f[2]);v>1e-9?(f[0]/=v,f[1]/=v,f[2]/=v):(f[0]=e[0],f[1]=e[1],f[2]=e[2]);let p=oa(f,i,l);return{from:n,dir:p,hit:kn(n,p,s,r,o)}}var ht=Object.freeze({head:Object.freeze({cy:zt.neckY+zt.head.centerY,r:zt.head.rx}),body:Object.freeze({ay:zt.ankleHeight,by:zt.neckY,r:Math.max(...zt.torso.shirt.map(t=>t[0]))})});function Iy(t,e=X.combat.hitPad){let[n,i,s]=t.pos,r=t.shapes;r.head.c[0]=n,r.head.c[1]=i+ht.head.cy,r.head.c[2]=s,r.head.r=ht.head.r+e,r.body.r=ht.body.r+e,r.body.a[0]=n,r.body.a[1]=i+ht.body.ay,r.body.a[2]=s,r.body.b[0]=n,r.body.b[1]=i+ht.body.by,r.body.b[2]=s}function Ly({id:t,pos:e,yaw:n=0,rail:i=null},s=X.dummy){let r={id:t,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:n,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:ht.head.r},body:{a:[0,0,0],b:[0,0,0],r:ht.body.r}}};return Iy(r),r}function WR(t,e){let n=t%(4*e);return n<e?n:n<3*e?2*e-n:n-4*e}function Dy(t,e,n=X.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!t.alive)t.respawnT-=e,t.respawnT<=0&&(t.alive=!0,t.respawnT=0,t.health=n.health,t.railT=0,t.pos[0]=t.home[0],t.pos[1]=t.home[1],t.pos[2]=t.home[2]);else if(t.rail&&t.rail.half>0){t.railT+=e*Math.max(0,n.railSpeed);let i=WR(t.railT,t.rail.half),s=t.rail.axis==="x"?0:2;t.pos[0]=t.home[0],t.pos[2]=t.home[2],t.pos[s]=t.home[s]+i}Iy(t)}function Ny(t,e,n=X.dummy){return!t.alive||!(e>0)?null:(t.health-=e,t.health>0?"hit":(t.health=0,t.alive=!1,t.respawnT=n.respawnTime,"kill"))}function S0(t,e,n=1){return e!=="head"&&e!=="body"?0:t.damage*n*(e==="head"?t.headMult:1)}function ky(t,e,n){for(let i of e)if(Math.hypot(t[0]-i.pos[0],t[2]-i.pos[2])<=n)return!0;return!1}function Oy(t){let e=new Float32Array(t),n=new Uint8Array(t),i=0;return{ages:e,alive:s=>n[s]===1,spawn(){let s=-1;for(let r=0;r<t;r++){let o=(i+r)%t;if(!n[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<t;r++)e[r]>e[s]&&(s=r)}return n[s]=1,e[s]=0,i=(s+1)%t,s},clear(){n.fill(0)},update(s,r){for(let o=0;o<t;o++)n[o]&&(e[o]+=s,e[o]>r(o)&&(n[o]=0))}}}var XR=new H(0,0,1);function Uy(t,e=()=>X.feedback){let n=new ln,i=(E=1)=>(Math.random()*2-1)*E;function s(E,k,I){let P=new Vi(E,Et({color:k,rim:0}),I);P.frustumCulled=!1,P.count=I,n.position.set(0,-1e3,0),n.scale.setScalar(0),n.updateMatrix();for(let U=0;U<I;U++)P.setMatrixAt(U,n.matrix);return t.add(P),{mesh:P,pool:Oy(I),pos:new Float32Array(I*3),vel:new Float32Array(I*3),aux:new Float32Array(I*4)}}let r=s(new zo(.5,0),B.playerOrange,8),o=s(new ct(1,1,1),B.playerOrange,24),a=s(new zo(.5,0),B.gel,8),l=s(new ct(1,1,1),B.gel,24),c=s(new ct(.05,.05,.05),B.cream,48),h=s(new Nr(.5,0),B.gel,96),d=s(new ct(.16,.2,.012),B.cream,48),u=s(new Nr(.5,0),B.cream,40),f=s(new Nr(.5,1),B.planet,4),v=s(new ct(1,1,1),B.playerOrange,16),p=new H;function m(E,k){n.updateMatrix(),E.mesh.setMatrixAt(k,n.matrix),E.mesh.instanceMatrix.needsUpdate=!0}let g=(E,k)=>{n.position.set(0,-1e3,0),n.scale.setScalar(0),n.quaternion.identity(),m(E,k)},y=(E,k,I,P,U)=>{E.pos[k*3]=I,E.pos[k*3+1]=P,E.pos[k*3+2]=U},w=(E,k,I,P,U)=>{E.vel[k*3]=I,E.vel[k*3+1]=P,E.vel[k*3+2]=U};function M(E,k,I,P,U){let z=I[0]+i(P),te=I[1]+i(P),$=I[2]+i(P),ne=Math.hypot(z,te,$)||1;w(E,k,z/ne*U*(.5+Math.random()*.5),te/ne*U*(.5+Math.random()*.5),$/ne*U*(.5+Math.random()*.5))}let _=[];function S(E,k,I,P){_.push({k:E,life:k,shown:new Uint8Array(E.pool.ages.length),step(U){let z=e().gravity,te=E;for(let $=0;$<te.pool.ages.length;$++)if(te.pool.alive($)){te.vel[$*3+1]-=z*U;for(let ne=0;ne<3;ne++)te.pos[$*3+ne]+=te.vel[$*3+ne]*U}},draw(U){let z=1-E.pool.ages[U]/k();n.position.set(E.pos[U*3],E.pos[U*3+1],E.pos[U*3+2]),n.scale.setScalar(I(U)*Math.max(0,z)),P?n.rotation.set(E.aux[U*4]+E.pool.ages[U]*7,E.aux[U*4+1]+E.pool.ages[U]*5,E.aux[U*4+2]):n.quaternion.identity(),m(E,U)}})}S(c,()=>e().sparkTime,()=>1,!1),S(h,()=>e().gelTime,E=>.05+h.aux[E*4+3]*.07,!1),S(d,()=>e().receiptTime,()=>1,!0);function x(E,k){_.push({k:E,shown:new Uint8Array(E.pool.ages.length),life:()=>e().flashTime,step(){},draw(I){let P=1-E.pool.ages[I]/e().flashTime;n.position.set(E.pos[I*3],E.pos[I*3+1],E.pos[I*3+2]),n.scale.setScalar(e()[k]*(.5+.5*Math.max(0,P))),n.rotation.set(E.aux[I*4],E.aux[I*4+1],E.aux[I*4+2]),m(E,I)}})}function b(E,k,I,P=1){_.push({k:E,shown:new Uint8Array(E.pool.ages.length),life:()=>e()[k],step(){},draw(U){let z=Math.max(0,1-E.pool.ages[U]/e()[k]),te=e()[I]*P*z,$=E.aux[U*4];n.position.set(E.pos[U*3],E.pos[U*3+1],E.pos[U*3+2]),n.quaternion.setFromUnitVectors(XR,p.set(E.vel[U*3],E.vel[U*3+1],E.vel[U*3+2])),n.scale.set(te,te,$),m(E,U)}})}let R=.9;_.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>R,step(E){for(let k=0;k<u.pool.ages.length;k++)if(u.pool.alive(k))for(let I=0;I<3;I++)u.pos[k*3+I]+=u.vel[k*3+I]*E},draw(E){let k=u.pool.ages[E]/R;n.position.set(u.pos[E*3],u.pos[E*3+1],u.pos[E*3+2]),n.scale.setScalar(u.aux[E*4+3]*(.5+k)*(1-k*k*k)),n.quaternion.identity(),m(u,E)}}),_.push({k:f,shown:new Uint8Array(f.pool.ages.length),life:()=>e().blastTime,step(){},draw(E){let k=Math.min(f.pool.ages[E]/Math.max(e().blastTime,.001),1),I=1-(1-Math.min(k/.6,1))**2,P=k>.6?1-(k-.6)/.4:1;n.position.set(f.pos[E*3],f.pos[E*3+1],f.pos[E*3+2]),n.scale.setScalar(Math.max(e().blastSize*I*P,.001)),n.rotation.set(0,f.aux[E*4],0),m(f,E)}}),b(v,"tracerTime","tracerWidth",.6),x(r,"flashSize"),x(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(l,"enemyTracerTime","enemyTracerWidth");let C=(E,k,I)=>{let P=E.pool.spawn();y(E,P,k[0]+I[0]*.1,k[1]+I[1]*.1,k[2]+I[2]*.1),E.aux[P*4]=i(3),E.aux[P*4+1]=i(3),E.aux[P*4+2]=i(3)},L=(E,k,I)=>{let P=I[0]-k[0],U=I[1]-k[1],z=I[2]-k[2],te=Math.hypot(P,U,z);if(!(te>1e-6))return;let $=E.pool.spawn();y(E,$,k[0]+P/2,k[1]+U/2,k[2]+z/2),w(E,$,P/te,U/te,z/te),E.aux[$*4]=te};return{flash(E,k){C(r,E,k)},tracer(E,k){L(o,E,k)},friendlyTracer(E,k){L(v,E,k)},steam(E){let k=u.pool.spawn();y(u,k,E[0],E[1],E[2]),w(u,k,i(.15),.7+Math.random()*.4,i(.15)),u.aux[k*4+3]=.16+Math.random()*.1},blast(E){let k=f.pool.spawn();y(f,k,E[0],E[1]+.3,E[2]),f.aux[k*4]=Math.random()*6;for(let I=0;I<6;I++){let P=u.pool.spawn(),U=I/6*Math.PI*2+Math.random();y(u,P,E[0],E[1]+.2,E[2]),w(u,P,Math.cos(U)*2.2,.8+Math.random()*.6,Math.sin(U)*2.2),u.aux[P*4+3]=.35+Math.random()*.2}this.gel([E[0],E[1]+.3,E[2]],[0,1,0],12)},enemyFlash(E,k){C(a,E,k)},enemyTracer(E,k){L(l,E,k)},spark(E,k){for(let I=0;I<e().sparkCount;I++){let P=c.pool.spawn();y(c,P,E[0],E[1],E[2]),M(c,P,k,.9,3)}},gel(E,k,I=e().gelCount){for(let P=0;P<I;P++){let U=h.pool.spawn();y(h,U,E[0],E[1],E[2]),M(h,U,k,1.2,e().gelSpeed),h.aux[U*4+3]=Math.random()}},receipts(E,k=e().receiptCount){for(let I=0;I<k;I++){let P=d.pool.spawn();y(d,P,E[0],E[1],E[2]),M(d,P,[0,1,0],1.5,e().gelSpeed),d.aux[P*4]=i(3),d.aux[P*4+1]=i(3),d.aux[P*4+2]=i(3)}},clear(){for(let E of _){E.k.pool.clear();for(let k=0;k<E.shown.length;k++)E.shown[k]&&(g(E.k,k),E.shown[k]=0)}},update(E){if(E>0)for(let k of _){k.step(E);let{pool:I}=k.k;I.update(E,k.life);for(let P=0;P<I.ages.length;P++)I.alive(P)?(k.draw(P),k.shown[P]=1):k.shown[P]&&(g(k.k,P),k.shown[P]=0)}}}}function YR(t,e,n){let i=Math.PI/180;return n/2*Math.tan(t*i/2)/Math.tan(e*i/2)}var qR=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),dd=t=>t<0?0:t>1?1:t;function Fy({arsenal:t,stance:e,firing:n,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",hours:u="",bark:f=null,banner:v=null,grenades:p=null,action:m=null,boss:g=null,ending:y=null,pop:w=null,weapons:M=X.weapons,combat:_=X.combat,feedback:S=X.feedback}){let x=t.current(),b=M[x],R=t.ammo[x],C=t.reload,L=s==="pad"?"RB":"R",E={show:!1,marker:0,good:[b.goodStart,b.goodEnd],perfect:[b.perfectStart,b.perfectEnd],flash:c,prompt:""};if(C){let z=Math.max(b.reloadTime,_.minReloadTime);E={...E,show:!0,marker:dd(C.t/z),prompt:C.press===null?`${L} again on the bright zone`:""}}else R.mag<=0&&(E.prompt=`${L} to reload`);let k=R.mag<=Math.max(0,S.lowAmmoFrac)*b.mag,I=b.infiniteReserve<=0&&R.reserve<=0,P={show:!1,text:"",kind:""};!C&&k&&!v&&(P.show=!0,I&&R.mag<=0?(P.text="NO AMMO",P.kind="none"):I?(P.text="LOW AMMO",P.kind="low"):R.mag<=0?(P.text=`EMPTY \u2014 RELOAD  ${L}`,P.kind="empty"):(P.text=`RELOAD  ${L}`,P.kind="low"));let U=e==="aim";return{weapon:hd[x].name,mag:R.mag,reserve:b.infiniteReserve>0?"\u221E":R.reserve,reticle:{show:U||!!n||i,gap:S.reticleMinGap+YR(r,o,a),opacity:i&&!U?S.coverReticleOpacity:1},reload:E,alert:P,hit:{show:!!l,kind:l||null},faceShow:!!h&&!v&&!h.downed.show,face:h,objective:d,hours:u||"",bark:f,banner:v,grenades:Number.isFinite(p)?p:null,boss:g?{name:g.name,fraction:dd(g.fraction),phase:g.phase,invuln:!!g.invuln,hint:g.hint||""}:null,ending:y?{card:y.card,lines:y.lines,tone:y.tone||"big",final:!!y.final}:null,pop:w&&w.text?{text:w.text,kind:w.kind||""}:null,action:m&&m.text?{text:m.text,hold:Number.isFinite(m.hold)?dd(m.hold):null}:null}}function By(t=document.body){let e=(W,be,Ne,fe)=>{let ge=document.createElement(W);return be&&(ge.className=be),fe!==void 0&&(ge.textContent=fe),Ne&&Ne.appendChild(ge),ge},n=e("div","",t);n.id="cr-hud";let i={};for(let W of["top","right","bottom","left"])i[W]=e("div",`cr-edge cr-edge-${W}`,n);let s="http://www.w3.org/2000/svg",r=(W,be,Ne)=>{let fe=document.createElementNS(s,W);for(let ge of Object.keys(be))fe.setAttribute(ge,be[ge]);return Ne&&Ne.appendChild(fe),fe},o=e("div","cr-face",n),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",n),u=e("div","cr-banner-title",d),f=e("div","cr-banner-hint",d),v=e("i","cr-ring",d),p=e("div","cr-action",n),m=e("span","cr-action-text",p),g=e("i","cr-ring",p),y=e("div","cr-objective",n),w=e("div","cr-boss",n),M=e("div","cr-boss-name",w),_=e("div","cr-boss-bar",w),S=e("i","cr-boss-fill",_);e("i","cr-boss-tick cr-boss-tick-a",_),e("i","cr-boss-tick cr-boss-tick-b",_);let x=e("div","cr-boss-hint",w),b=e("div","cr-ending",n),R=e("div","cr-ending-text",b),C=e("div","cr-ending-hint",b),L=e("div","cr-pop",n),E=e("div","cr-hours",n),k=e("div","cr-bark",n),I=e("span","cr-bark-who",k),P=e("span","cr-bark-text",k),U=e("div","cr-weapon",n),z=e("div","cr-weapon-name",U),te=e("div","cr-ammo",U),$=e("div","cr-kb",U),ne=e("div","cr-prompt",U),q=e("div","cr-reload",U),j=e("div","cr-zone cr-zone-good",q),Me=e("div","cr-zone cr-zone-perfect",q),J=e("div","cr-marker",q),ye=e("div","cr-result",U),Ee=e("div","cr-alert",n),He=e("div","cr-reticle",n),oe=["up","down","left","right"].map(W=>e("div",`cr-arm cr-arm-${W}`,He)),Ce=e("div","cr-hit",n);e("i","cr-hit-a",Ce),e("i","cr-hit-b",Ce),e("i","cr-hit-ring",Ce);let De={},se=(W,be,Ne)=>{De[W]!==be&&(De[W]=be,Ne(be))},Se=W=>`${(W*100).toFixed(1)}%`,_e=(W,[be,Ne])=>{W.style.left=Se(be),W.style.width=Se(Math.max(0,Ne-be))};return{render(W){se("weapon",W.weapon,Re=>{z.textContent=Re}),se("ammo",`${W.mag}|${W.reserve}`,()=>{te.textContent=`${W.mag} / ${W.reserve}`}),se("prompt",W.reload.prompt,Re=>{ne.textContent=Re}),se("reload.show",W.reload.show,Re=>{q.hidden=!Re}),se("good",`${W.reload.good}`,()=>_e(j,W.reload.good)),se("perfect",`${W.reload.perfect}`,()=>_e(Me,W.reload.perfect)),se("marker",Math.round(W.reload.marker*500),()=>{J.style.left=Se(W.reload.marker)}),se("flash",W.reload.flash,Re=>{ye.textContent=Re&&qR[Re]||"",ye.dataset.kind=Re||""}),se("alert",W.alert.show?`${W.alert.kind}|${W.alert.text}`:"",()=>{Ee.hidden=!W.alert.show,Ee.textContent=W.alert.text,Ee.dataset.kind=W.alert.kind}),se("ret.show",W.reticle.show,Re=>{He.hidden=!Re}),se("ret.op",Math.round(W.reticle.opacity*100),()=>{He.style.opacity=W.reticle.opacity.toFixed(2)}),se("ret.gap",Math.round(W.reticle.gap),Re=>{oe.forEach(Ue=>Ue.style.setProperty("--gap",`${Re}px`))});let be=W.face;if(se("face.show",!!W.faceShow,Re=>{o.hidden=!Re}),be){se("face.op",Math.round(be.face.opacity*100),()=>{o.style.opacity=be.face.opacity.toFixed(2)}),se("face.frown",Math.round(be.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*be.face.frown).toFixed(1)} 70 72`)}),se("face.fill",Math.round(be.face.fill*50),()=>{let Re=92*be.face.fill;c.setAttribute("y",(96-Re).toFixed(1)),c.setAttribute("height",Re.toFixed(1))});for(let Re of Object.keys(i))se(`edge.${Re}`,Math.round(be.edges[Re]*50),()=>{i[Re].style.opacity=be.edges[Re].toFixed(2)})}se("kb",W.grenades===null?"":String(W.grenades),Re=>{$.hidden=Re==="",$.textContent=`KETTLEBELLS ${Re}`}),se("action",W.action?W.action.text:"",Re=>{p.hidden=!W.action,m.textContent=Re}),se("action.hold",W.action&&W.action.hold!==null?Math.round(W.action.hold*100):-1,Re=>{g.hidden=Re<0,g.style.setProperty("--hold",`${Math.max(Re,0)*3.6}deg`)});let Ne=W.banner&&W.banner.hold!==void 0&&W.banner.hold!==null?Math.round(dd(W.banner.hold)*100):-1;se("banner.hold",Ne,Re=>{v.hidden=Re<0,v.style.setProperty("--hold",`${Math.max(Re,0)*3.6}deg`)}),se("banner",W.banner?`${W.banner.title}|${W.banner.hint}`:"",Re=>{d.hidden=!W.banner,W.banner&&(u.textContent=W.banner.title,f.textContent=W.banner.hint)}),se("objective",W.objective||"",Re=>{y.textContent=Re,y.hidden=!Re});let fe=W.boss;se("boss",fe?`${fe.name}|${fe.phase}|${fe.invuln}|${fe.hint}`:"",()=>{w.hidden=!fe,fe&&(M.textContent=fe.name,w.dataset.invuln=fe.invuln?"1":"0",x.textContent=fe.hint)}),se("boss.fill",fe?Math.round(fe.fraction*500):-1,()=>{fe&&(S.style.width=Se(fe.fraction))});let ge=W.ending;se("ending",ge?`${ge.card}|${ge.final}`:"",()=>{b.hidden=!ge,ge&&(b.dataset.tone=ge.tone,R.replaceChildren(...ge.lines.map((Re,Ue)=>e("div",Ue===0?"cr-ending-line cr-ending-first":"cr-ending-line",null,Re))),C.textContent=ge.final?"Press any key":"")}),se("pop",W.pop?`${W.pop.kind}|${W.pop.text}`:"",()=>{L.hidden=!W.pop,W.pop&&(L.textContent=W.pop.text,L.dataset.kind=W.pop.kind)}),se("hours",W.hours||"",Re=>{E.textContent=Re,E.hidden=!Re}),se("bark",W.bark?`${W.bark.speaker}|${W.bark.text}`:"",()=>{k.hidden=!W.bark,W.bark&&(I.textContent=W.bark.speaker,I.style.color=W.bark.color||"",P.textContent=W.bark.text)}),se("hit",W.hit.show?W.hit.kind:"",Re=>{Ce.hidden=!Re,Ce.dataset.kind=Re})}}}function zy(t){let e=Ji(zt),n=ji(e),i=new dt;i.name=`dummy-${t.id}`,i.add(e.root),i.add(e.shadow);let s=!!(t.rail&&t.rail.half>0),r=t.yaw,o=t.pos[0],a=t.pos[2],l="live",c=0;s&&n.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(t.pos[0],t.pos[1],t.pos[2]);let f=t.pos[0]-o,v=t.pos[2]-a;s&&f*f+v*v>1e-8&&(r=Math.atan2(f,v)),o=t.pos[0],a=t.pos[2],i.rotation.y=r;let p=X.feedback;if(l==="burst"){c+=u;let m=p.dummyBurstTime>0?Math.min(c/p.dummyBurstTime,1):1;h(1+.2*m),m>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let m=p.dummyRespawnPop>0?Math.min(c/p.dummyRespawnPop,1):1;h(m),m>=1&&(l="live")}l!=="gone"&&(n.update(s?u*Math.min(Math.max(X.dummy.railSpeed/Ki,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&n.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var Hy="#f3efe6";function Gy(t){for(let e of Object.values(t))e&&typeof e=="object"&&Gy(e);return Object.freeze(t)}var Vy=Gy({...structuredClone(zt),name:"doc-placeholder",colors:{...zt.colors,hair:B.teal,shirt:Hy,collar:Hy},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...zt.face,brow:"uni",fixedSmile:0}});function pd(t){return Bt(t.map(([e,n,i,s,r,o])=>new ct(e,n,i).translate(s,r,o)),!1)}function qr(t,e,n){let i=new rt(ai(e),Et({color:n}));return Ln(i),t.add(i),i}var aa=.09;function $R(){let t=new dt;t.name="disc",t.position.set(0,-.05,.22),qr(t,new $t(aa,aa,.022,20),B.playerOrange),qr(t,new $t(aa-.018,aa-.018,.034,20),B.cream);let e=[];for(let n=0;n<6;n++){let i=n/6*Math.PI*2;e.push(new ct(.02,.026,.05).rotateY(i).translate(Math.sin(i)*(aa-.03),0,Math.cos(i)*(aa-.03)))}return qr(t,Bt(e,!1),B.ink),t}function ZR(){let t=new dt;return t.name="rifle",qr(t,pd([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),B.playerOrange),qr(t,pd([[.05,.12,.06,0,-.07,0]]),B.ink),t.add($R()),t}function KR(){let t=new dt;return t.name="pistol",qr(t,pd([[.045,.06,.25,0,.04,.075]]),B.playerOrange),qr(t,pd([[.04,.1,.05,0,-.04,0]]),B.ink),t}var JR={regret:[0,.06,.45],pistol:[0,.04,.2]},jR=new H(0,0,1),AO=new H,fd=new H;function Wy(){let t=new dt;t.name="gun";let e={regret:ZR(),pistol:KR()};t.add(e.regret,e.pistol);let n="regret";e.pistol.visible=!1;let i=new H,s=new H(0,0,1),r=e.regret.getObjectByName("disc"),o=1/0;function a(h){if(!(!e[h]||h===n)){n=h;for(let d of Object.keys(e))e[d].visible=d===h}}function l(h,d){i.set(h[0],h[1],h[2]),s.set(d[0],d[1],d[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),t.quaternion.setFromUnitVectors(jR,s),c()}function c(){let h=X.feedback,d=Math.max(h.gunSquashTime,1e-6),u=o>=0&&o<d?Math.sin(Math.PI*o/d):0,f=h.gunSquash*u;t.scale.set(1+f/2,1+f/2,1-f),t.position.copy(i).addScaledVector(s,-h.gunKick*u)}return{group:t,setWeapon:a,place:l,shot(){o=0,c()},update(h,d=0){o+=h>0?h:0,h>0&&d&&(r.rotation.y+=d*h),c()},disc:r,tip(h=[0,0,0]){let d=JR[n];return t.updateMatrix(),fd.set(d[0],d[1],d[2]).applyMatrix4(t.matrix),h[0]=fd.x,h[1]=fd.y,h[2]=fd.z,h}}}var Xy=8,Yy=64,la=.12,qy=4,$y=3;function ql(){let t=(s,r)=>{s.deleteAttribute("uv");let o=new Ze(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new xt(l,3)),s},e=t(new jt(la,14,10).toNonIndexed(),B.ink),n=[new ct(.03,.1,.03).translate(-.055,la+.04,0),new ct(.03,.1,.03).translate(.055,la+.04,0),new ct(.14,.03,.03).translate(0,la+.1,0)].map(s=>t(s.toNonIndexed(),B.playerOrange)),i=t(new ct(.07,.07,.012).translate(0,0,la-.002).toNonIndexed(),B.cream);return Bt([e,...n,i],!1)}function QR(){let t=(n,i)=>{n=n.toNonIndexed(),n.deleteAttribute("uv");let s=new Ze(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new xt(o,3)),n},e=[t(new ct(.5,.03,.65),"#9be15d")];for(let n=0;n<6;n++)e.push(t(new ct(.38,.034,.025).translate(0,0,-.24+n*.09),B.ink));return Bt(e,!1)}function Zy(t){let e=new Vi(ql(),Et({vertexColors:!0,rim:.15}),Xy);e.name="kettlebells",e.frustumCulled=!1,e.count=0,t.add(e);let n=new ln,i=0,s=new Vi(QR(),Et({vertexColors:!0,rim:.15}),qy);s.name="termsPages",s.frustumCulled=!1,s.count=0,t.add(s);let r=[];for(let u=0;u<$y;u++){let f=new rt(new qs(.9,1,48).rotateX(-Math.PI/2),new sn({color:B.gel,side:Tn,depthWrite:!1,toneMapped:!1})),v=new rt(new Ja(.9,36).rotateX(-Math.PI/2),new sn({color:"#ff3b1f",transparent:!0,opacity:.28,side:Tn,depthWrite:!1,toneMapped:!1}));f.name="lobMarkerRing",v.name="lobMarkerDisc",f.visible=v.visible=!1,t.add(f,v),r.push({ring:f,disc:v})}let o=new Float32Array(Yy*3),a=new Nt;a.setAttribute("position",new xt(o,3)),a.setDrawRange(0,0);let l=new ul({color:B.playerOrange,dashSize:X.feedback.arcDot,gapSize:X.feedback.arcDot}),c=new Xa(a,l);c.name="kettlebellArc",c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new Ya(a,new Oo({color:B.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));h.name="kettlebellArcDots",h.frustumCulled=!1,h.visible=!1,t.add(h);let d=new rt(new qs(.88,1,40).rotateX(-Math.PI/2),new sn({color:B.playerOrange,side:Tn,depthWrite:!1,toneMapped:!1}));return d.name="kettlebellRing",d.visible=!1,t.add(d),{mesh:e,line:c,ring:d,dots:h,pages:s,markers:r,update(u,f,v=0,p=null){i+=v>0?v:0;let m=X.grenade.ballRadius/la,g=0,y=0;for(let M=0;M<u.length;M++){let _=u[M];if(_.hostile){if(y>=qy)continue;n.position.set(_.prevPos[0]+(_.pos[0]-_.prevPos[0])*f,_.prevPos[1]+(_.pos[1]-_.prevPos[1])*f,_.prevPos[2]+(_.pos[2]-_.prevPos[2])*f),n.rotation.set(i*7+y,i*5,i*9),n.scale.setScalar(1),n.updateMatrix(),s.setMatrixAt(y++,n.matrix);continue}if(g>=Xy)continue;let S=_.prevPos[0]+(_.pos[0]-_.prevPos[0])*f,x=_.prevPos[1]+(_.pos[1]-_.prevPos[1])*f,b=_.prevPos[2]+(_.pos[2]-_.prevPos[2])*f,R=_.fuse<X.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;n.position.set(S,x,b),n.rotation.set(b*2.5,0,-S*2.5),n.scale.setScalar(m*R),n.updateMatrix(),e.setMatrixAt(g++,n.matrix)}e.count=g,e.instanceMatrix.needsUpdate=!0,s.count=y,s.instanceMatrix.needsUpdate=!0;let w=p||[];for(let M=0;M<$y;M++){let _=r[M],S=w[M];if(_.ring.visible=_.disc.visible=!!S,!S)continue;let x=.5+.5*Math.sin(i*(S.windup?14:22));_.ring.position.set(S.pos[0],.04,S.pos[2]),_.disc.position.set(S.pos[0],.035,S.pos[2]),_.ring.scale.setScalar(S.radius),_.disc.scale.setScalar(S.radius*(.55+.45*x))}},arc(u,f,v,p){if(!p||!(f>1)){c.visible=!1,h.visible=!1,d.visible=!1;return}let m=Math.min(f,Yy);for(let g=0;g<m;g++)o[g*3]=u[g][0],o[g*3+1]=u[g][1],o[g*3+2]=u[g][2];a.attributes.position.needsUpdate=!0,a.setDrawRange(0,m),l.dashSize=l.gapSize=Math.max(X.feedback.arcDot,.001),c.computeLineDistances(),c.visible=!0,h.visible=!0,v?(d.position.set(v[0],v[1]+.03,v[2]),d.scale.setScalar(X.grenade.killRadius),d.visible=!0):d.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,s.count=0,s.instanceMatrix.needsUpdate=!0,c.visible=!1,h.visible=!1,d.visible=!1;for(let u of r)u.ring.visible=u.disc.visible=!1}}}var gd=Math.PI*2,ns=(t,e,n)=>t<e?e:t>n?n:t,eC=t=>t-gd*Math.round(t/gd),jy=.001,T0=.5,E0=.3;function tC(t,e=t.tuning||X.move){let n=t.state,i=t.speed();if(n==="bash")return{name:"bash",rate:gt.bash.duration/Math.max(X.melee.bashTime,.001)};if(n==="rev")return{name:"aim",rate:1};if(n==="execute")return{name:"bash",rate:1,loop:!0};if(n==="reviveTobble")return{name:"revive",rate:1};if(n==="knocked")return{name:"flinch",rate:1};if(n==="downed")return{name:"crawl",rate:ns(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(n==="roll")return{name:"roll",rate:gt.roll.duration/e.rollTime};if(n==="sprint")return{name:"sprint",rate:ns(i/Ki,e.sprintRateMin,e.sprintRateMax)};if(n==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:ns(i/Ki,e.runRateMin,e.runRateMax)};if(t.grenadeAim)return{name:"throw",rate:0,at:E0*gt.throw.duration};if(t.aiming||t.firing)return{name:"aim",rate:1}}if(n==="coverSlide")return{name:Ds(t).kind==="low"?"coverLow":"coverTall",rate:1};if(n==="coverSwap")return{name:"sprint",rate:ns(i/Ki,e.sprintRateMin,e.sprintRateMax)};if(n==="cover"&&t.cover){let s=t.cover,r=t.coverTuning||X.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":Yr(t)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:ns(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return n==="vault"?{name:"vault",rate:gt.vault.duration/Math.max((t.coverTuning||X.cover).vaultTime,jy)}:{name:"idle",rate:1}}function nC(t){let e=t.state==="cover"||t.state==="coverSlide"?Ds(t):null;return!e||e.kind!=="low"?0:t.state==="coverSlide"?ns(t.stateTime/Math.max(t.scratch.dur,1e-6),0,1):t.cover?ns(1-Math.max(t.cover.pop,t.cover.blind||0),0,1):0}var iC=(t,e)=>4*e*t*(1-t),sC=(t,e,n)=>t>=0&&t<n?e*Math.sin(Math.PI*t/n):0;function A0(t){if(t<=.08)return 0;if(t>=.9)return gd;let e=(t-.08)/.82;return gd*e*e*(3-2*e)}var Ky=.95,Jy=.6,Ns=new H,hi=[0,0,1],md=[0,0,0];function Qy(t,e=Vy){let n=Ji(e),i=ji(n),s=new dt;s.name="player";let r=new dt;r.position.y=T0,n.root.position.y=-T0,r.add(n.root),s.add(r),s.add(n.shadow);let o=n.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Wy();s.add(l.group);let c=new rt(ql(),Et({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=n.root.getObjectByName("head"),f=new H,v=!0;function p(k,I,P){u.getWorldPosition(f),f.y+=n.spec.head.centerY;let U=Math.hypot(k[0]-f.x,k[1]-f.y,k[2]-f.z);return v=yx(U,v,I,P),u.visible=v,v}let m=0,g=0,y=0,w="",M=0,_=-1,S=t.slams||0,x=1/0;function b(k,I,P){let U=t.pos,z=t.prevPos,te=t.coverTuning||X.cover,$=nC(t);m=te.popTime>0?Math.max($,m+ns($-m,-I/te.popTime,I/te.popTime)):$;let ne=t.state==="cover"&&t.cover&&t.cover.edge.kind==="low"?ns(t.cover.blind||0,0,1):0;if($>0||ne>0){let De=Ds(t);g=De.normal[0],y=De.normal[1]}let q=m*te.lowDrawBack+ne*te.blindDrawBack;s.position.set(z[0]+(U[0]-z[0])*k+g*q,z[1]+(U[1]-z[1])*k,z[2]+(U[2]-z[2])*k+y*q),s.rotation.y=t.prevFacing+eC(t.facing-t.prevFacing)*k;let j=tC(t),Me=h>0;Me&&(j={name:"throw",rate:gt.throw.duration*(1-E0)/Math.max(X.grenade.throwTime,.001),at:E0*gt.throw.duration},h-=I);let J=Me?"throw!":j.name;J!==w||t.entries!==_?(i.play(j.name,j.name==="roll"?{fade:.05}:j.at!==void 0?{fade:.06,at:j.at}:void 0),w=J,_=t.entries,M=0):j.loop&&(M+=I*j.rate,M>=gt[j.name].duration&&(M-=gt[j.name].duration,i.play(j.name,{fade:0}))),i.update(I*j.rate,j.rate===0?I:void 0),n.update(I);let ye=X.feedback,Ee=Math.max(ye.gunSquashTime,1e-6);d=P&&P.shot?I:d+I;let He=d<Ee?ye.bodyKick*Math.sin(Math.PI*d/Ee):0;r.rotation.x=(t.state==="roll"?A0(t.stateTime/t.tuning.rollTime):0)-He,(t.slams||0)!==S?(S=t.slams||0,x=0):x+=I;let oe=t.state==="vault"?iC(ns(t.stateTime/Math.max(te.vaultTime,jy),0,1),te.vaultHop):0,Ce=sC(x,te.slamSquash,te.slamSquashTime);r.scale.set(1+Ce/2,1-Ce,1+Ce/2),r.position.y=T0*(1-Ce)+oe,c.visible=!!(P&&P.kettlebell)&&!Me,c.scale.setScalar(X.grenade.ballRadius/.12),R(j.name,I,P)}function R(k,I,P){if(s.updateMatrixWorld(!0),(k==="coverBlindTallL"?a.L:a.R).getWorldPosition(Ns),s.worldToLocal(Ns),P&&P.stance&&k==="coverBlindLow")hi[0]=0,hi[1]=Math.sin(Ky),hi[2]=Math.cos(Ky);else if(t.state==="bash"||t.state==="rev"||t.state==="execute")hi[0]=0,hi[1]=-.05,hi[2]=1;else if(P&&P.stance&&P.dir){let z=Math.cos(s.rotation.y),te=Math.sin(s.rotation.y);hi[0]=P.dir[0]*z-P.dir[2]*te,hi[1]=P.dir[1],hi[2]=P.dir[0]*te+P.dir[2]*z}else hi[0]=0,hi[1]=-Math.sin(Jy),hi[2]=Math.cos(Jy);P&&P.weapon&&l.setWeapon(P.weapon),l.place([Ns.x,Ns.y,Ns.z],hi),P&&P.shot&&l.shot(),l.update(I,t.state==="rev"||t.state==="execute"?X.melee.cutterSpin:0),l.group.visible=t.state!=="roll"&&t.state!=="downed"&&t.state!=="reviveTobble"&&!c.visible&&h<=0}function C(k=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(md),Ns.set(md[0],md[1],md[2]).applyMatrix4(s.matrixWorld),k[0]=Ns.x,k[1]=Ns.y,k[2]=Ns.z,k}function L(){n.dispose(),n.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:b,dispose:L,rig:n,anim:i,fadeHeadFor:p,gun:l,gunTip:C,throwNow:()=>{h=Math.max(X.grenade.throwTime,.001)},kettlebell:c}}var vd=new Set(["telegraph","burst"]),gr=(t,e,n)=>t<e?e:t>n?n:t,rC=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),e1=.5,oC=-.6,aC=t=>t.point&&t.point.kind==="tall"?"tall":"low";function lC(t){let e=aC(t)==="tall";switch(t.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let n=t.point,i=Ni(-n.normal[0],-n.normal[1]);return n.tangent[0]*n.end*Math.cos(i)-n.tangent[1]*n.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function cC(t){if(t.kind==="trainer"||t.kind==="boss")return t.yaw;if((t.state==="idle"||t.state==="cover"||t.state==="reload"||t.state==="flinch"||t.state==="suppress")&&t.point)return Ni(-t.point.normal[0],-t.point.normal[1]);if(vd.has(t.state))return Ni(t.aim[0]-t.pos[0],t.aim[2]-t.pos[2]);if(t.state==="run"&&t.path&&t.path[t.pathI]){let e=t.path[t.pathI];if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[2])>1e-6)return Ni(e[0]-t.pos[0],e[1]-t.pos[2])}return t.yaw}function hC(t){switch(t.state){case"run":return"run";case"windup":case"swing":return"throw";case"stagger":case"executed":return"flinch";case"dive":return"roll";default:return"idle"}}function uC(t){switch(t.state){case"retreat":case"return":return"run";case"telegraph":case"burst":return"aim";case"lobWindup":case"lobRecover":return"throw";default:return"idle"}}function dC(t){return t.state==="dead"||!t.alive?"dead":t.kind==="boss"?t.state==="telegraph"||t.state==="burst"||t.state==="lobWindup"||t.state==="lobRecover"?"angry":t.state==="retreat"||t.state==="hiding"?"scared":"smug":t.kind==="trainer"&&(t.state==="run"||t.state==="windup"||t.state==="swing")||vd.has(t.state)?"angry":t.state==="flinch"||t.state==="stagger"||t.state==="downed"||t.state==="executed"||t.state==="dive"?"scared":"smug"}var s1=.03,R0=[0,.06,.32];function fC(){let t=new dt;t.name="blaster";let n=Bt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new ct(r,o,a).translate(l,c,h)),!1),i=new rt(ai(n),Et({color:B.glorpPurple}));Ln(i),t.add(i);let s=new rt(new jt(s1,10,8),new sn({color:B.gel}));return s.name="emitter",s.position.set(R0[0],R0[1],R0[2]),t.add(s),{group:t,emitter:s}}var pC=new H(0,0,1),_i=new H,vr=new H,t1=.6,$r=.4,n1=.95,mC=1.3;function gC(){let t=ql();t.translate(0,-.22,0).rotateX(Math.PI);let e=new dt;e.name="trainerKettlebell",e.scale.setScalar(mC),e.add(new rt(t,Et({vertexColors:!0,rim:.15})));let n=new rt(new jt(.07,10,8),new sn({color:"#ff4a1c",toneMapped:!1}));return n.name="glint",n.position.set(0,.22,0),n.visible=!1,e.add(n),{group:e,glint:n}}function $l(t,e){t=t.toNonIndexed(),t.deleteAttribute("uv");let n=new Ze(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new xt(s,3)),t}function vC(){let t=[$l(new $t(.2,.22,.09,16,1,!0).translate(0,.045,0),Qi)];for(let n=0;n<5;n++){let i=n/5*Math.PI*2;t.push($l(new ja(.045,.14,4).translate(Math.sin(i)*.2,.16,Math.cos(i)*.2),n%2?Qi:B.hotPink))}let e=new rt(Bt(t,!1),Et({vertexColors:!0,rim:.1}));return e.name="crown",e}function xC(){let e=[B.hotPink,B.teal,B.cream,B.gel,B.lilac].map((i,s)=>$l(new ct(.075,.105,.012).translate(-.12+s*.06,.3-Math.abs(s-2)*.03-s%2*.03,.215),i)),n=new rt(Bt(e,!1),Et({vertexColors:!0,rim:.1}));return n.name="keycards",n}function yC(){let t=[$l(new ct(.3,.4,.014),"#9be15d")];for(let i=0;i<5;i++)t.push($l(new ct(.22,.014,.018).translate(0,.14-i*.07,0),B.ink));let e=new dt;e.name="termsPage",e.add(new rt(Bt(t,!1),Et({vertexColors:!0,rim:.1})));let n=new rt(new jt(.08,10,8),new sn({color:B.gel,toneMapped:!1}));return n.name="glint",n.position.set(0,.24,0),n.visible=!1,e.add(n),e.visible=!1,e.position.set(0,.1,.12),e.rotation.x=-.5,{group:e,glint:n}}function i1(t){let e=t==="trainer",n=t==="boss",i=Ji(e?ux:n?Wu:zt),s=ji(i),r=new dt;r.name=t;let o=new dt;o.position.y=e1,i.root.position.y=-e1,o.add(i.root),r.add(o),r.add(i.shadow);let a=i.root.getObjectByName("body").children[2],l=e?gC():fC(),c=null;if(e?a.add(l.group):r.add(l.group),n){let h=vC();h.position.set(0,Wu.head.centerY+Wu.head.ry-.04,0),i.root.getObjectByName("head").add(h),i.root.getObjectByName("hips").add(xC()),c=yC(),a.add(c.group)}return{kind:t,rig:i,anim:s,root:r,tumble:o,handR:a,weapon:l,terms:c}}function r1(t){let e=new dt;e.name=`associate-${t.id}`;let n={associate:i1("associate"),trainer:null,boss:null},i=n.associate;e.add(i.root);let s=i.weapon,r="",o=0,a="",l=0,c=t.yaw,h="live",d=0,u=!1,f=0,v=0,p=0,m=0;function g(x){if(i.kind===x)return;n[x]||(n[x]=i1(x),e.add(n[x].root),x==="boss"&&e.add(n.boss.weapon.group)),i.root.visible=!1,i=n[x],i.root.visible=!0;let b=X.trainer.scaleW,R=X.trainer.scaleH;r="",a=""}function y(){h="live",d=0,l=0,c=t.yaw,u=!1,f=0,e.visible=!0,e.scale.setScalar(1),i.tumble.rotation.x=0,r="",a="",o=0,s.emitter.scale.setScalar(1),n.trainer&&(n.trainer.weapon.glint.visible=!1),n.boss&&(n.boss.terms.glint.visible=!1,n.boss.terms.group.visible=!1)}function w(x,b){let R=X.feedback,C=X.cover,L=X.associate;if(t.state==="unused"){e.visible=!1;return}if(t.state==="spawn"&&(h==="burst"||h==="gone")&&y(),t.state!=="dead"&&t.alive&&g(t.kind||"associate"),!t.alive&&t.state==="dead"&&h==="live"&&(h="burst",d=0),h==="live"&&(e.visible=!0),h==="burst"){d+=b;let W=t.kind==="boss"?X.ending.deathDelay*.9:R.dummyBurstTime,be=W>0?Math.min(d/W,1):1;e.scale.setScalar(1+.2*be),be>=1&&(h="gone",e.visible=!1)}if(h==="gone")return;let E=h==="burst",{rig:k,anim:I,tumble:P,handR:U}=i,z=i.kind==="trainer",te=i.kind==="boss",$=X.trainer,ne=X.boss;if(te){let W=ne.scale*(ne.crouchY+(1-ne.crouchY)*gr(t.pop,0,1));i.root.scale.set(ne.scale,W,ne.scale)}else i.root.scale.set(z?$.scaleW:1,z?$.scaleH:1,z?$.scaleW:1);te&&E&&(i.root.scale.y*=1-.45*gr(d/Math.max(X.ending.deathDelay*.9,.001),0,1));let q=t.pos,j=t.prevPos,Me=!E&&t.point&&t.point.kind==="low"&&t.state!=="run"&&t.state!=="dead",J=Me?gr(1-Math.max(t.pop,t.blind),0,1):0;l=C.popTime>0?Math.max(J,l+gr(J-l,-b/C.popTime,b/C.popTime)):J;let ye=Me?gr(t.blind,0,1):0;Me&&(v=t.point.normal[0],p=t.point.normal[1]);let Ee=l*C.lowDrawBack+ye*C.blindDrawBack,He=t.state==="spawn"?oC*(1-gr(t.stateT/Math.max(X.pad.riseTime,.001),0,1)):0;e.position.set(j[0]+(q[0]-j[0])*x+v*Ee,j[1]+(q[1]-j[1])*x+He,j[2]+(q[2]-j[2])*x+p*Ee);let oe=z||te||t.state==="run"||vd.has(t.state)?t.prevYaw+rC(t.yaw-t.prevYaw)*x:cC(t);if(c=Ht(c,oe,(z?$.turnRate:L.turnRate)*1.5*b),e.rotation.y=c,E)return;let Ce=z?hC(t):te?uC(t):lC(t),De=z||te?Ce+":"+t.state:Ce,se=gt.throw.duration;if(De!==r){if((z||te)&&Ce==="throw"){let W=t.state==="swing"||t.state==="lobRecover",be=W?$r*se:0;I.play(Ce,{fade:W?.02:.08,at:be}),m=be}else I.play(Ce,Ce==="flinch"?void 0:{fade:.1});r=De,o=0}else t.state==="executed"&&(o+=b,o>=gt.flinch.duration&&(o=0,I.play("flinch")));let Se=Ce==="run"?gr((z?$.runSpeed:te?ne.retreatSpeed:L.runSpeed)/Ki,.5,3):1;Ce==="crawl"&&(Se=Math.hypot(q[0]-j[0],q[2]-j[2])>1e-5?1:0),Ce==="roll"&&(Se=gt.roll.duration/Math.max(L.diveReaction+L.diveTime,.001)),z&&t.state==="windup"&&(Se=m<$r*se-1e-6?$r*se/Math.max($.windup,.001):0),te&&t.state==="lobWindup"&&(Se=m<$r*se-1e-6?$r*se/Math.max(ne.popTime+ne.lobWindup,.001):0),te&&t.state==="lobRecover"&&(Se=(1-$r)*se/Math.max(ne.lobRecover,.001)),z&&t.state==="swing"&&(Se=(1-$r)*se/Math.max($.swingTime,.001)),m+=b*Se,P.rotation.x=Ce==="roll"?A0(gr(t.stateT/Math.max(L.diveReaction+L.diveTime,.001),0,1)):0,I.update(b*Se,Se===0?b:void 0),k.update(b);let _e=dC(t);_e!==a&&(k.face.setExpression(_e),a=_e),z?M(b):te?(i.weapon.group.scale.setScalar(ne.scale),_(b),S(Ce,b,U,i.weapon,t.state==="lobWindup"||t.state==="lobRecover")):S(Ce,b,U)}function M(x){let b=n.trainer.weapon.glint;b.visible=u&&t.state==="windup",b.visible&&(f+=x,b.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function _(x){let b=n.boss.terms;b.group.visible=t.state==="lobWindup",b.glint.visible=u&&t.state==="lobWindup",b.glint.visible&&(f+=x,b.glint.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function S(x,b,R,C=n.associate.weapon,L=!1){C.group.visible=t.state!=="downed"&&t.state!=="dive"&&!L,e.updateMatrixWorld(!0),R.getWorldPosition(_i);let E=_i.x,k=_i.y,I=_i.z;e.worldToLocal(_i);let P=_i.x,U=_i.y,z=_i.z;if(vd.has(t.state)){let te=Math.cos(e.rotation.y),$=Math.sin(e.rotation.y),ne=t.aim[0]-E,q=t.aim[2]-I;vr.set(ne*te-q*$,t.aim[1]-k,ne*$+q*te)}else x==="coverBlindLow"?vr.set(0,Math.sin(n1),Math.cos(n1)):t.state==="suppress"?vr.set(0,.05,1):vr.set(0,-Math.sin(t1),Math.cos(t1));if(vr.lengthSq()<1e-12&&vr.set(0,0,1),vr.normalize(),C.group.position.set(P,U,z),C.group.quaternion.setFromUnitVectors(pC,vr),u){f+=b;let te=.5+.5*Math.sin(f*2*Math.PI*8),$=X.feedback.glintSize/s1;C.emitter.scale.setScalar(1+($-1)*te)}else C.emitter.scale.setScalar(1)}return{group:e,update:w,reset:y,death(){h==="live"&&(h="burst",d=0)},glint(x){x&&!u&&(f=0),u=!!x},tip(x=[0,0,0]){return e.updateMatrixWorld(!0),(i.kind==="trainer"?i.weapon.glint:i.weapon.emitter).getWorldPosition(_i),x[0]=_i.x,x[1]=_i.y,x[2]=_i.z,x},get rig(){return i.rig},get anim(){return i.anim},blaster:s,get kind(){return i.kind}}}var Zl=new H;function Mi(t,e,n,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Zl.copy(e),Zl[i]=0,Zl.normalize();let c=.5*o/(o+a),h=1-Zl.angleTo(t)/l;return Math.sign(Zl[n])===1?h*c:a/(o+a)+c+c*(1-h)}var xd=class t extends ct{constructor(e=1,n=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,n/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,c=new H,h=new H(e,n,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,v=d.length/6,p=new H,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/v)){case 0:p.set(1,0,0),f[y+0]=Mi(p,c,"z","y",r,i),f[y+1]=1-Mi(p,c,"y","z",r,n);break;case 1:p.set(-1,0,0),f[y+0]=1-Mi(p,c,"z","y",r,i),f[y+1]=1-Mi(p,c,"y","z",r,n);break;case 2:p.set(0,1,0),f[y+0]=1-Mi(p,c,"x","z",r,e),f[y+1]=Mi(p,c,"z","x",r,i);break;case 3:p.set(0,-1,0),f[y+0]=1-Mi(p,c,"x","z",r,e),f[y+1]=1-Mi(p,c,"z","x",r,i);break;case 4:p.set(0,0,1),f[y+0]=1-Mi(p,c,"x","y",r,e),f[y+1]=1-Mi(p,c,"y","x",r,n);break;case 5:p.set(0,0,-1),f[y+0]=Mi(p,c,"x","y",r,e),f[y+1]=1-Mi(p,c,"y","x",r,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};function a1(t){for(let e of Object.values(t))e&&typeof e=="object"&&a1(e);return Object.freeze(t)}var o1=(t,e,n)=>{let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*n)<<o;return"#"+r.toString(16).padStart(6,"0")},Zr=a1({...zt,name:"tobble",hair:{...zt.hair,quiff:!1},colors:{...zt.colors,shirt:B.cream,collar:o1(B.cream,B.ink,.2),skin:B.tobbleMint,hair:o1(B.tobbleMint,B.ink,.45),backpack:"#ffd23f",lanyard:"#ffd23f",badgeStripe:"#ffd23f",rim:.25,rimColor:"#ffffff",mat:B.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...zt.face,brow:"pair",fixedSmile:.4,eyeColor:B.eyeWhite,eyeGlow:!1},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var P0=(t,e,n)=>t<e?e:t>n?n:t,u1=t=>P0(t,0,1),l1=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),bC=1/60,c1=t=>t.point&&t.point.kind==="tall"?"tall":"low";function _C(t,e=t.speed||0){let n=e>.3;switch(t.state){case"cover":return c1(t)==="tall"?"coverTall":"coverLow";case"shoot":return c1(t)==="tall"?"aim":"coverPop";case"revive":return t.kneeling?"revive":n?"run":"idle";case"downed":return"crawl";default:return n?"run":"idle"}}function MC(t){return t.downed||!t.point||t.point.kind!=="low"||t.state!=="cover"&&t.state!=="shoot"?0:u1(1-t.pop)}function wC(){let e=new Uint8Array(16384),n=new Ze(B.tobbleMint),i=new Ze(B.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?n:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new Pr(e,64,64,oi);return r.colorSpace=un,r.magFilter=Sn,r.minFilter=Sn,r.needsUpdate=!0,r}function I0(t,e){let n=new rt(ai(t),Et({color:e}));return Ln(n),n}var C0=[0,.04,.2];function SC(){let t=new dt;t.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return t.add(I0(Bt(e.map(([n,i,s,r,o,a])=>new ct(n,i,s).translate(r,o,a)),!1),B.tobbleMint)),t}var TC=new H(0,0,1),is=new H,ca=new H,h1=.6;function d1(t){let e=Ji(Zr),n=ji(e),i=new dt;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new dt;l.name="thirdEye";let c=Zr.thirdEye,h=new rt(new jt(c.r,12,10),new sn({color:B.eyeWhite})),d=new rt(new jt(c.r*.5,10,8),new sn({color:B.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,Zr.head.centerY+c.y,.27),a.add(l);let u=Zr.backpack,f=new dt;f.name="backpack",f.add(I0(new xd(u.w,u.h,u.d,3,.06),Zr.colors.backpack));let v=I0(new $t(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),Zr.colors.mat);v.position.y=u.h/2+.05,f.add(v),f.position.set(0,.2,-.32),o.add(f);let p=SC();i.add(p);let m=new Va(new Do({map:wC(),depthTest:!1,depthWrite:!1,toneMapped:!1}));m.name="tobblePlus",m.renderOrder=20,m.visible=!1,i.add(m);let g="",y=0,w=t.yaw,M=0,_=0,S="",x=0;function b(){g="",y=0,w=t.yaw,S="",x=0,i.position.set(t.start[0],t.start[1],t.start[2]),i.rotation.y=t.startYaw,m.visible=!1}function R(L,E){let k=X.tobble,I=X.cover,P=k.scale;x+=E>0?E:0,i.scale.setScalar(P);let U=t.pos,z=t.prevPos,te=Math.hypot(U[0]-z[0],U[2]-z[2])/bC,$=MC(t);y=I.popTime>0?Math.max($,y+P0($-y,-E/I.popTime,E/I.popTime)):$,$>0&&t.point&&(M=t.point.normal[0],_=t.point.normal[1]);let ne=y*I.lowDrawBack*P,q=t.point&&!t.downed?k.popLift*u1(t.pop):0;i.position.set(z[0]+(U[0]-z[0])*L+M*ne,z[1]+(U[1]-z[1])*L+q,z[2]+(U[2]-z[2])*L+_*ne);let j=t.prevYaw+l1(t.yaw-t.prevYaw)*L;w+=l1(j-w)*Math.min(1,E*25),i.rotation.y=w;let Me=_C(t,te);Me!==g&&(n.play(Me,{fade:.1}),g=Me);let J=1;Me==="run"?J=P0(te/(Ki*P),.5,3):Me==="crawl"&&(J=te>.001?1:0),n.update(E*J,J===0?E:void 0),e.update(E);let ye=t.downed?"scared":t.state==="shoot"?"angry":"smug";ye!==S&&(e.face.setExpression(ye),S=ye),m.visible=t.downed,t.downed&&(m.position.set(0,.95/P+.05*Math.sin(x*4),0),m.scale.setScalar(.5/P)),C()}function C(){p.visible=!t.downed&&t.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(is);let L=is.x,E=is.y,k=is.z;if(i.worldToLocal(is),p.position.copy(is),t.state==="shoot"&&t.target&&t.target.pos){let I=Math.cos(i.rotation.y),P=Math.sin(i.rotation.y),U=t.target.pos[0]-L,z=t.target.pos[2]-k;ca.set(U*I-z*P,t.target.pos[1]+1.2-E,U*P+z*I)}else ca.set(0,-Math.sin(h1),Math.cos(h1));ca.lengthSq()<1e-12&&ca.set(0,0,1),ca.normalize(),p.quaternion.setFromUnitVectors(TC,ca)}return b(),{group:i,update:R,reset:b,rig:e,anim:n,pistol:p,plus:m,eye:l,pack:f,tip(L=[0,0,0]){return i.updateMatrixWorld(!0),is.set(C0[0],C0[1],C0[2]).applyMatrix4(p.matrixWorld),L[0]=is.x,L[1]=is.y,L[2]=is.z,L}}}function EC(t){return t==="open"?{ring:B.gel,pulse:!0,steam:!0}:t==="closed"?{ring:B.ink,pulse:!1,steam:!1}:{ring:B.lilac,pulse:!1,steam:!1}}var AC="#e6c28c",RC="#b98a50",CC=.3;function PC(t){let e=(i,s)=>{i.deleteAttribute("uv");let r=new Ze(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new xt(a,3)),i},n=[e(new $t(t,t,.08,32).translate(0,.04,0).toNonIndexed(),AC)];for(let i=-3;i<=3;i++){let s=i*(t/3.6),r=2*Math.sqrt(Math.max(t*t-s*s,.01))-.04;n.push(e(new ct(r,.006,.035).translate(0,.081,s).toNonIndexed(),RC))}return Bt(n,!1)}function f1(t,e,n=null){let i=e.map(r=>{let o=X.pad.radius,a=new dt;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new rt(PC(o),Et({vertexColors:!0,rim:.1})));let l=new sn({color:B.lilac,side:Tn,toneMapped:!1}),c=new rt(new qs(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),t.add(a);let h=Cs({text:"SPAWN SAUNA",w:2.4,h:.7,bg:B.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,t.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=EC(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&n&&r>0){if(o.steamT+=r,o.steamT>=CC){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*X.pad.radius*.8;n.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var ha=Math.PI/180,p1=.3,L0=1e-6,IC=64,LC=4,DC=64,m1=(t,e,n)=>Math.max(e,Math.min(n,t));function N0(t,e,n=X.grenade,i=[0,0,0]){let s=m1(e+n.throwLift*ha,-30*ha,70*ha),r=Math.cos(s);return i[0]=n.throwSpeed*Math.sin(t)*r,i[1]=n.throwSpeed*Math.sin(s),i[2]=n.throwSpeed*Math.cos(t)*r,i}function yd(t,e,n=X.combat,i=[0,0,0]){if(t.cover)return ud(t,"blind",e,n,i);let s=cd(e),r=ld(e);i[1]=t.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=t.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=t.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!ta(t.boxes,i,0)));o-=.25);return i}var Kr=[0,0,0];function NC(t,e){let n=null,i=1/0;for(let a of t){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,n=a)}if(Kr[0]=Kr[1]=Kr[2]=0,!n)return Kr[1]=1,Kr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=n.min[a]-e[a],c=e[a]-n.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return Kr[s]=o,Kr}var D0={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},ss=[0,0,0];function g1(t,e,n,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=t.pos,l=t.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=m1(Math.ceil(c/r),1,IC),d=e/h;for(let u=0;u<h;u++){let f=d;for(let v=0;v<=LC&&f>0;v++){ss[0]=a[0]+l[0]*f,ss[1]=a[1]+l[1]*f-.5*o*f*f,ss[2]=a[2]+l[2]*f;let p=vi(n,a,ss,r);if(p>=1){a[0]=ss[0],a[1]=ss[1],a[2]=ss[2],l[1]-=o*f;break}a[0]+=(ss[0]-a[0])*p,a[1]+=(ss[1]-a[1])*p,a[2]+=(ss[2]-a[2])*p,l[1]-=o*f*p;let m=NC(n,a),g=l[0]*m[0]+l[1]*m[1]+l[2]*m[2];if(g<0){let y=l[0]-m[0]*g,w=l[1]-m[1]*g,M=l[2]-m[2]*g;l[0]=y*i.friction-m[0]*g*i.restitution,l[1]=w*i.friction-m[1]*g*i.restitution,l[2]=M*i.friction-m[2]*g*i.restitution,-g>=p1&&(s.clank=!0),m[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-m[0]*r,s.upPos[1]=a[1]-m[1]*r,s.upPos[2]=a[2]-m[2]*r)}if(a[0]+=m[0]*L0,a[1]+=m[1]*L0,a[2]+=m[2]*L0,m[1]>.7&&Math.hypot(l[0],l[1],l[2])<p1){l[0]=l[1]=l[2]=0,t.resting=!0,s.rested=!0;return}f*=1-p}}}function kC(t,e,n,i=X.grenade){return g1(t,e,n,i,D0),D0.clank?"clank":D0.rested?"rest":null}var OC={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},Kl={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function v1(t,e,n,i=X.grenade,s){let r=OC;for(let h=0;h<3;h++)r.pos[h]=t[h],r.vel[h]=e[h],r.prevPos[h]=t[h];r.resting=!1;let o=Math.min(s.length,DC),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)g1(r,1/60,n,i,Kl),!c&&Kl.up&&(c=[Kl.upPos[0],Kl.upPos[1],Kl.upPos[2]])}return{count:l,land:c}}function x1(t,e=X.grenade){return t>=0?t<=e.killRadius?e.killDamage:t>=e.radius?0:e.damage*(1-t/e.radius):0}function y1(t,e,n,i=X.grenade){let s=e[0]-t[0],r=e[2]-t[2],o=e[1]-t[1],a=s*Math.sin(n)+r*Math.cos(n),l=Math.abs(s*Math.cos(n)-r*Math.sin(n));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=g=>{let y=Math.cos(g);return a*Math.tan(g)-h*a*a/(2*c*c*y*y)},u=-30*ha,f=Math.min(70*ha,Math.atan(c*c/(h*a)));if(!(f>u)||d(u)>o||d(f)<o)return null;let v=u,p=f;for(let g=0;g<50;g++){let y=(v+p)/2;d(y)<o?v=y:p=y}let m=(v+p)/2;return Math.abs(d(m)-o)<=.3?m-i.throwLift*ha:null}function b1(t=X.grenade){let e=[];return{live:e,throw(n,i,s=t.fuse,r=null){let o={pos:[n[0],n[1],n[2]],vel:[i[0],i[1],i[2]],prevPos:[n[0],n[1],n[2]],resting:!1,fuse:s,hostile:r};return e.push(o),o},step(n,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=n;let a=kC(o,n,i,t);a==="clank"&&!o.hostile&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.hostile&&(a!==null||o.pos[1]<=t.ballRadius+.02)&&(o.fuse=0),o.fuse<=1e-9&&(s.push(o.hostile?{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]],hostile:o.hostile}:{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function _1(t=X.grenade){let e={count:Math.min(t.start,t.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=t.carry},reset(){e.count=Math.min(t.start,t.carry)}};return e}var M1=1.49,w1=.2;function S1(t,{spacing:e,cornerZone:n}){e=Math.max(w1,Number.isFinite(e)?e:w1);let i={cornerZone:n},s=[],r=(o,a,l)=>{let c=ki(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return t.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,pr(o,c,i))}r(o,o.length,pr(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function Jr(t,e,n=[0,0]){let i=t.kind==="low"?0:t.end*e;return n[0]=t.pos[0]+t.tangent[0]*i,n[1]=t.pos[1]+t.tangent[1]*i,n}function rn(t,e,n){let i=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:kn(e,[i/o,s/o,r/o],o,t,[]).t>=o-1e-6}function bd(t,e,n,i=X){let s=[t.pos[0],t.kind==="low"?i.combat.crouchHead:M1,t.pos[1]],r=Jr(t,i.associate.popShift),o=[r[0],M1,r[1]];return{protected:!rn(n,s,e),canShoot:rn(n,o,e)}}var UC=Math.PI/180,FC=1.5,_d=[0,0,0],Md=[0,0,0],BC={bash:t=>[t.melee.bashRange,t.melee.bashAngle],cutter:t=>[t.melee.cutterReach,t.melee.cutterAngle],finish:t=>[t.melee.executeRange,t.melee.executeAngle]};function Jl(t,e,n,i,s,r=X){let[o,a]=BC[t](r),l=a*UC/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(t==="finish"&&!u)continue;let f=d.pos[0]-e[0],v=d.pos[2]-e[2],p=Math.hypot(f,v);p>o||p>=h||p>1e-6&&Math.abs(ci(Math.atan2(f,v)-n))>l+1e-9||(_d[0]=e[0],_d[1]=e[1]+1,_d[2]=e[2],Md[0]=d.pos[0],Md[1]=d.pos[1]+(u?.3:1),Md[2]=d.pos[2],rn(s,_d,Md)&&(c=d,h=p))}return c}function T1({downed:t,clear:e,tobble:n,pos:i,yaw:s,enemies:r,boxes:o,t:a=X}){if(t)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(n&&n.downed){let c=a.tobble?.playerReviveRange??FC;if(Math.hypot(n.pos[0]-i[0],n.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:n}}let l=Jl("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}var U0=t=>t<0?0:t>1?1:t,k0=new Set(["move","sprint"]),O0=new Set(["move","sprint","cover"]);function zC({device:t="kbm",grenadeHeld:e=!1,interact:n=null,reviving:i=!1,revving:s=!1,bashTarget:r=!1,cutterNear:o=!1,regretInHand:a=!1,holdFrac:l=0}={}){let c=(h,d=null)=>({text:Wr(h,t),hold:d});return e?c("throw"):i||n&&n.kind==="reviveTobble"?c("reviveTobble",i?U0(l):0):n&&n.kind==="finish"?c("finish"):s?c("revving"):r?c("bash"):a&&o?c("rev"):null}function E1({mover:t,fight:e,arsenal:n,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let f=Xu(),v=Array.from({length:64},()=>[0,0,0]),p=[0,0,0],m=[0,0,0],g=[0,0,0],y=[0,1,0],w=0,M=0,_="kbm",S=!1,x=0,b=0,R=!1,C=0,L=!1,E=null,k={count:0,land:null,show:!1},I=null,P=0,U=()=>{u.restart&&u.restart()},z=De=>{u.marker&&u.marker(De)},te=(De,se=1)=>(g[0]=De.pos[0],g[1]=De.pos[1]+se,g[2]=De.pos[2],g),$=De=>{let se=De.pos[0]-t.pos[0],Se=De.pos[2]-t.pos[2],_e=Math.hypot(se,Se)||1;return y[0]=se/_e,y[1]=.5,y[2]=Se/_e,y};function ne(){E&&E.e.state==="executed"&&e.releaseExecution(E.e),E=null}function q(De,se,Se){return e.beginExecution(De)?t.execute([De.pos[0],De.pos[2]],se)?(E={e:De,kind:Se,gelT:0,sfxT:0},!0):(e.releaseExecution(De),!1):!1}function j(De){let se=X.feedback;if(De.type==="bashHit"){let Se=Jl("bash",t.pos,w,e.enemies,d);if(s.bump(),r.play("bash",se.bashVolume),!Se)return;let _e=e.bash(Se);o.gel(te(Se),$(Se),se.gelCount),_e==="hit"&&z("body")}else if(De.type==="executeDone"){let Se=E;if(E=null,!Se)return;s.bump(1.5),e.finishExecution(Se.e),Se.kind==="stomp"&&r.play("finish",se.bashVolume)}else De.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",se.reviveVolume)}function Me(){if(!(C>0)){if(!i.take()){r.play("dry",X.feedback.reloadVolume);return}yd(t,w,X.combat,p),N0(w,M,X.grenade,m),e.throwGrenade(p,m),c&&c.throwNow(),r.play("throw",X.feedback.throwVolume),s.kick(1.5,0),C=X.grenade.throwTime}}function J(){h&&h.arc(v,k.count,k.land,k.show)}function ye(){let De=X.melee.promptRange;for(let se of e.enemies){if(!se.alive||se.state==="unused"||se.state==="downed"||se.state==="executed")continue;let Se=se.pos[0]-t.pos[0],_e=se.pos[2]-t.pos[2],W=Math.hypot(Se,_e);if(!(W>De)&&(W<.5||Math.cos(Math.atan2(Se,_e)-w)>=.5))return!0}return!1}function Ee(){f.reset(),S=!1,x=0,b=0,R=!1,C=0,L=!1,E=null,k={count:0,land:null,show:!1},I=null,P=0,J()}function He(De,se){w=se.camYaw,M=se.camPitch||0,_=se.device||"kbm";let Se=t,_e=X.melee,W=X.grenade;if(C>0&&(C=Math.max(0,C-De)),k.show=!1,I=null,P=0,l.downed){E&&ne(),f.reset(),S=!1,L=!1,x=0,se.interactHeld||(R=!0),b=se.interactHeld&&R?b+De:0,P=U0(b/Math.max(X.health.giveUpHold,.001)),J(),b>=X.health.giveUpHold-1e-9&&(b=0,U());return}b=0,R=!1,E&&(Se.state!=="execute"||E.e.state!=="executed")&&ne();let be=f.update(se.meleeHeld,se.meleePressed,De,_e.holdTime),Ne=f.holding();se.meleeHeld||(S=!1);let fe=n.current()==="regret"&&n.reload===null&&!(n.switching>0);if(be&&Se.bash(w),Se.state==="rev"&&(!Ne||S||!fe||se.grenadeHeld)?Se.rev(!1):Ne&&!S&&fe&&!se.grenadeHeld&&C<=0&&k0.has(Se.state)&&Se.rev(!0),Se.state==="rev"){x-=De,x<=0&&(x=Math.max(_e.revPulse,.05),r.play("rev",X.feedback.revVolume));let Y=Jl("cutter",Se.pos,Se.facing,e.enemies,d);Y&&q(Y,_e.cutTime,"cut")&&r.play("cut",X.feedback.cutVolume)}else x=0;if(E&&Se.state==="execute"){let Y=X.feedback;if(E.gelT-=De,E.sfxT-=De,E.kind==="cut"){if(E.gelT<=0){E.gelT=Math.max(Y.cutGelEvery,.02),o.gel(te(E.e),$(E.e),5);let pt=X.camera.bump.amount;pt>0&&s.bump(Y.executeShake/pt)}E.sfxT<=0&&(E.sfxT=.3,r.play("cut",Y.cutVolume))}}let ge=e.tobble,Re=T1({downed:!1,clear:e.clear&&!e.boss,tobble:ge,pos:Se.pos,yaw:Se.facing,enemies:e.enemies,boxes:d});if(Re.kind==="again"&&se.interactPressed){U();return}Re.kind==="finish"&&se.interactPressed&&O0.has(Se.state)&&q(Re.target,_e.finishTime,"stomp")&&s.bump(.6),Re.kind==="reviveTobble"&&se.interactHeld&&O0.has(Se.state)&&Se.reviveTobble(ge.pos);let Ue=Se.state==="reviveTobble";Ue&&(P=U0(Se.stateTime/Math.max(g0(),.001)));let ze=L;if(L=!!se.grenadeHeld&&Se.grenadeAim,ze&&!se.grenadeHeld&&Me(),L&&i.count>0){yd(Se,w,X.combat,p),N0(w,M,W,m);let Y=v1(p,m,d,W,v);k={count:Y.count,land:Y.land,show:!0}}J();let Je=O0.has(Se.state),st=k0.has(Se.state)&&C<=0;I=zC({device:_,grenadeHeld:L&&i.count>0,interact:Je?Re:null,reviving:Ue,revving:Se.state==="rev",bashTarget:k0.has(Se.state)&&Se.bashReadyAt<=Se.clock&&!!Jl("bash",Se.pos,w,e.enemies,d),cutterNear:st&&ye(),regretInHand:fe,holdFrac:P})}function oe(){t.state==="rev"&&(t.rev(!1),S=!0)}function Ce(De,se){let Se=null;for(let _e=0;_e<3;_e++){yd(t,w,X.combat,p);let W=Math.atan2(De-p[0],se-p[2]);if(w=W,Se=y1(p,[De,X.grenade.ballRadius,se],W),Se===null)return!1}return s.yaw=w,s.pitch=Se,!0}return{step:He,reset:Ee,onAction:j,onPlayerHit:oe,aimThrow:Ce,prompt:()=>I,arc:()=>({count:k.count,land:k.land,show:k.show}),busy:()=>C>0,armed:()=>L&&i.count>0,giveUpFrac:()=>l.downed?P:null,execution:()=>E?{id:E.e.id,kind:E.kind}:null}}function A1(t=X.health){let e=-1,n=0,i=0,s=!1,r={hp:t.max,downed:!1,downT:0,sinceHit:0,fraction(){return t.max>0?Math.max(0,Math.min(1,r.hp/t.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,n=0,t.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=t.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,t.reviveHealth*t.max),r.sinceHit=0,e=-1,n=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&t.standInRevive>0&&(i+=o,i>=t.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<t.max&&r.sinceHit>=t.regenDelay&&(e<0&&(e=r.hp,n=0),n+=Math.min(o,r.sinceHit-t.regenDelay),r.hp=t.regenTime>0&&n<t.regenTime?e+(t.max-e)*n/t.regenTime:t.max),r.hp>=t.max&&(r.hp=t.max,e=-1),null)},reset(){r.hp=t.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,n=0,i=0,s=!1}};return r}var HC=new Set(["cover","coverSlide","coverSwap"]),GC=[],VC=B0(),WC=B0(),wd=[null];function B0(){return{alive:!0,shapes:{head:{c:[0,0,0],r:ht.head.r},body:{a:[0,0,0],b:[0,0,0],r:ht.body.r}}}}function R1(t){return HC.has(t.state)?Ds(t):null}function F0(t,e,n,i,s){let r=t.shapes;return r.head.r=ht.head.r,r.body.r=ht.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+n,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],t}function Sd(t,e=B0(),n=X.combat){let i=R1(t),s=!!i&&i.kind==="low"&&!(t.cover&&t.cover.pop>=.5);return e.alive=!0,s?F0(e,t.pos,n.crouchHead,.1,n.crouchBodyTop):F0(e,t.pos,ht.head.cy,ht.body.ay,ht.body.by)}function C1(t,e,n,i,s,r=X.combat){let o=R1(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return kn(t,e,n,i,GC);if(!a)return wd[0]=Sd(s,VC,r),kn(t,e,n,i,wd);let l=ht.body.by;return wd[0]=F0(WC,s.pos,ht.head.cy,l-r.shoulderDrop,l),kn(t,e,n,i,wd)}var P1=.9;function jr(t,e,n,i){return vi(t,[e[0],P1,e[1]],[n[0],P1,n[1]],i)===1}var jl=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function I1(t,e,{radius:n,linkMax:i}){let s=t.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)jl(s[o],s[a])<=i&&jr(e,s[o],s[a],n)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function XC(t,e,n,i,s){let{nodes:r,links:o}=t,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let m of n)h[m]=!0;let d=[];for(let m of e)a[m]=jl(i,r[m]),d.push(m);let u=m=>a[m]+jl(r[m],s),f=-1,v=1/0;for(;d.length;){let m=0;for(let y=1;y<d.length;y++){let w=d[y],M=d[m],_=u(w),S=u(M);(_<S-1e-12||Math.abs(_-S)<=1e-12&&w<M)&&(m=y)}let g=d.splice(m,1)[0];if(!c[g]){if(u(g)>=v)break;if(c[g]=!0,h[g]){let y=a[g]+jl(r[g],s);(y<v-1e-12||Math.abs(y-v)<=1e-12&&g<f)&&(f=g,v=y)}for(let y of o[g]){if(c[y])continue;let w=a[g]+jl(r[g],r[y]);w<a[y]-1e-12&&(a[y]=w,l[y]=g,d.push(y))}}}if(f<0)return null;let p=[];for(let m=f;m>=0;m=l[m])p.push(m);return p.reverse()}function Qr(t,e,n,i,s){if(jr(e,n,i,s))return[[i[0],i[1]]];let{nodes:r}=t,o=[],a=[];if(r.forEach((u,f)=>{jr(e,n,u,s)&&o.push(f),jr(e,u,i,s)&&a.push(f)}),!o.length||!a.length)return null;let l=XC(t,o,a,n,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=n;for(let u=0;u<c.length;u++){let f=c[u+1];f&&jr(e,d,f,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var H0=new Set(["executed","unused","dead"]),L1=1.3,xr=1e-9,D1=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]),Cd=(t=X)=>t.associate.radius*t.trainer.scaleW,N1=(t=X)=>t.associate.height*t.trainer.scaleH;function Oi(t,e){t.state=e,t.stateT=0}function G0(t,e=X){return t.kind="trainer",t.health=e.trainer.health,t.strikeAt=-1,t.windupLen=0,t.struckAt=-1/0,t.retargetT=0,t.repathT=0,t.forcePathT=0,t.stuckCount=0,t.target="player",t.path=[],t.pathI=0,t.point=null,t.pop=0,t.blind=0,t.role="hold",t}function k1(t,e=X.combat,n=X){let[i,s,r]=t.pos,o=t.shapes,a=n.trainer.scaleW,l=n.trainer.scaleH;return o.head.r=ht.head.r*a+e.hitPad,o.body.r=ht.body.r*a+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+ht.head.cy*l,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+ht.body.ay*l,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+ht.body.by*l,o.body.b[2]=r,o}var V0=t=>t.tobble&&!t.tobble.downed?t.tobble:null,O1=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,YC=(t,e)=>t.target==="tobble"?!V0(e):e.player.downed;function U1(t,e,n){let i=e.player,s=V0(e);return i.downed?s?"tobble":null:s&&D1(t.pos,s.pos)<D1(t.pos,i.pos)*n.preferDoc?"tobble":"player"}function F1(t,e,n){e.events.push({type:"bark",id:t.id,key:n})}function Ql(t,e,n,i){let s=U1(t,e,n);if(!s){Oi(t,"idle");return}t.target=s,t.retargetT=n.retargetTime,t.repathT=0,t.path=[],t.pathI=0,Oi(t,"run"),i&&e.rand()<n.barkChance&&F1(t,e,"trainerCharge")}function qC(t,e,n,i){i[0]=i[1]=0;let s=n.avoidRadius;if(!(s>0))return i;let r=(a,l,c)=>{let h=t.pos[0]-a,d=t.pos[2]-l,u=Math.hypot(h,d);if(u>=s||u<1e-6)return;let f=(s-u)/s*c/u;i[0]+=h*f,i[1]+=d*f};for(let a of e.others||[])a!==t&&a.alive&&a.state!=="unused"&&a.state!=="executed"&&a.state!=="dead"&&r(a.pos[0],a.pos[2],1);t.target!=="player"&&!e.player.downed&&r(e.player.pos[0],e.player.pos[2],1);let o=V0(e);return o&&t.target!=="tobble"&&r(o.pos[0],o.pos[2],1),i}var z0=[0,0],Td=[0,0],Ed=[0,0],Ad=[0,0,0],Rd=[0,0,0];function $C(t,e,n,i){return Math.hypot(i[0]-t.pos[0],i[2]-t.pos[2])>n.swingRange?!1:(Ad[0]=t.pos[0],Ad[1]=t.pos[1]+L1,Ad[2]=t.pos[2],Rd[0]=i[0],Rd[1]=t.pos[1]+L1,Rd[2]=i[2],rn(e.boxes,Ad,Rd))}function ZC(t,e,n){let i=e.now+n.windup,s=(e.others||[]).filter(r=>r!==t&&r.kind==="trainer"&&r.alive);for(let r=0;r<=s.length;r++){let o=!1;for(let a of s)for(let l of[a.struckAt,a.state==="windup"?a.strikeAt:-1/0])Number.isFinite(l)&&Math.abs(i-l)<n.swingGap-xr&&(i=l+n.swingGap,o=!0);if(!o)break}t.strikeAt=i,t.windupLen=Math.max(n.windup,i-e.now),Oi(t,"windup"),e.events.push({type:"telegraph",id:t.id,kind:"trainer",time:t.windupLen}),F1(t,e,"trainerWindup")}function KC(t,e,n,i,s){if(t.retargetT-=i,t.repathT-=i,t.forcePathT-=i,t.retargetT<=0||YC(t,e)){let m=U1(t,e,n);if(!m){Oi(t,"idle");return}t.target=m,t.retargetT=n.retargetTime}let r=O1(t,e);if($C(t,e,n,r)){ZC(t,e,n);return}let o=Cd(s),a=N1(s);Td[0]=t.pos[0],Td[1]=t.pos[2],Ed[0]=r[0],Ed[1]=r[2];let l=r[0],c=r[2];if(t.forcePathT>0||!jr(e.boxes,Td,Ed,o*.9)){for((t.repathT<=0||!t.path.length)&&(t.path=Qr(e.graph,e.boxes,Td,Ed,o)||[[r[0],r[2]]],t.pathI=0,t.repathT=n.repathTime);t.pathI<t.path.length-1&&Math.hypot(t.path[t.pathI][0]-t.pos[0],t.path[t.pathI][1]-t.pos[2])<.35;)t.pathI++;l=t.path[t.pathI][0],c=t.path[t.pathI][1]}else t.path.length=0;let h=l-t.pos[0],d=c-t.pos[2],u=Math.hypot(h,d)||1;h/=u,d/=u,qC(t,e,n,z0),h+=z0[0]*n.avoidWeight,d+=z0[1]*n.avoidWeight;let f=Math.hypot(h,d)||1;h/=f,d/=f,t.yaw=Ht(t.yaw,Math.atan2(h,d),n.turnRate*i);let v=n.runSpeed*i,p=Dn(e.boxes,t.pos,[h*v,0,d*v],o,a);t.pos[0]=p.pos[0],t.pos[2]=p.pos[2],t.stuckT+=i,t.stuckT>=n.stuckTime&&(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<n.runSpeed*n.stuckTime*.25&&(t.forcePathT=1,t.repathT=0,t.stuckCount++),t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2])}function JC(t,e,n,i){let s=O1(t,e);if(t.stateT<t.windupLen-n.lockTime){let r=s[0]-t.pos[0],o=s[2]-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),n.turnRate*i))}if(!(t.stateT<t.windupLen-xr)){for(let r of e.others||[])if(r!==t&&r.kind==="trainer"&&e.now-r.struckAt<n.swingGap-xr)return;t.struckAt=e.now,t.strikeAt=-1,Oi(t,"swing"),e.events.push({type:"trainerSwing",id:t.id,from:[t.pos[0],t.pos[1],t.pos[2]],yaw:t.yaw,reach:n.swingRange+n.swingSlack,arc:n.swingArc,target:t.target})}}function jC(t,e,n,i,s){let r=i.associate,o=Math.max(r.diveTime,.001),a=Math.max(t.stateT-s,r.diveReaction),l=Math.min(t.stateT,r.diveReaction+o);if(l>a){let c=r.diveDistance*(l-a)/o,h=Dn(e.boxes,t.pos,[t.diveDir[0]*c,0,t.diveDir[1]*c],Cd(i),N1(i));t.pos[0]=h.pos[0],t.pos[2]=h.pos[2]}t.stateT>=r.diveReaction+o-xr&&Ql(t,e,n,!1)}function B1(t,e,n){let i=e.tuning||X,s=i.trainer;switch(t.state){case"idle":e.started&&Ql(t,e,s,!0);break;case"spawn":t.stateT>=i.pad.riseTime-xr&&Ql(t,e,s,!0);break;case"run":KC(t,e,s,n,i);break;case"windup":JC(t,e,s,n);break;case"swing":t.stateT>=s.swingTime-xr&&Oi(t,"recover");break;case"recover":t.stateT>=s.recover-xr&&Ql(t,e,s,!1);break;case"stagger":t.stateT>=s.staggerTime-xr&&Ql(t,e,s,!1);break;case"dive":jC(t,e,s,i,n);break;default:break}}function z1(t){return!t.alive||H0.has(t.state)?!1:(t.strikeAt=-1,Oi(t,"stagger"),!0)}function H1(t,e){if(!t.alive||H0.has(t.state)||t.state==="dive")return!1;t.strikeAt=-1,t.path=[],t.pathI=0;let n=t.pos[0]-e[0],i=t.pos[2]-e[2],s=Math.hypot(n,i);return s<1e-6?(n=Math.sin(t.yaw),i=Math.cos(t.yaw)):(n/=s,i/=s),t.diveDir[0]=n,t.diveDir[1]=i,t.yaw=Math.atan2(n,i),Oi(t,"dive"),!0}function G1(t){return!t.alive||H0.has(t.state)||t.state==="dive"?!1:(t.strikeAt=-1,t.wasDowned=!1,Oi(t,"executed"),!0)}function V1(t){return!t.alive||t.state!=="executed"?!1:(Oi(t,"recover"),!0)}function W1(t,e,n){return t.alive=!1,t.strikeAt=-1,t.pop=0,t.blind=0,Oi(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),e.events.push({type:"bark",id:t.id,key:"trainerDeath"}),"kill"}function X1(t,e,n="execute"){return!t.alive||t.state!=="executed"?null:(t.health=0,W1(t,e,n))}function Y1(t,e,n,i="body"){return!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:(t.health-=e,t.health<=0?(t.health=0,W1(t,n,i)):"hit")}var to=1e-9,$1=8,QC=t=>Math.max(0,Math.min(1,t));var Z1=(t=X)=>t.associate.radius*t.boss.scale;function rs(t,e){t.state=e,t.stateT=0}var eo=(t,e,n,i=!0)=>e.events.push(i?{type:"bark",id:t.id,key:n,force:!0}:{type:"bark",id:t.id,key:n}),K1=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function J1(t,e=X){return t.kind="boss",t.health=e.boss.health,t.phase=1,t.invuln=!1,t.spot=0,t.nextSpot=0,t.shiftPending=!1,t.shiftT=1,t.shiftFrom=[t.start[0],t.start[2]],t.sinceLob=0,t.offers=0,t.saunasOpen=!1,t.lobTo=[0,0,0],t.lobSent=!1,t.wait=0,t.pop=0,t.blind=0,t.role="hold",t.point=null,t.path=[],t.pathI=0,t.target="player",t.shots=0,t.bursts=0,t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t}function j1(t,e=X.combat,n=X){let[i,s,r]=t.pos,o=t.shapes,a=n.boss,l=a.scale,c=a.scale*(a.crouchY+(1-a.crouchY)*QC(t.pop));return o.head.r=ht.head.r*l+e.hitPad,o.body.r=ht.body.r*l+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+ht.head.cy*c,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+ht.body.ay*c,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+ht.body.by*c,o.body.b[2]=r,o}function Q1(t,e,n){let i=e.bossLevel.spots[t.spot];t.pos[0]=i.hide[0]+(i.pop[0]-i.hide[0])*n,t.pos[2]=i.hide[1]+(i.pop[1]-i.hide[1])*n}function tc(t,e,n,i){let s=e-t.pos[0],r=n-t.pos[2];Math.hypot(s,r)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(s,r),$1*i))}var W0=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,eb=(t,e)=>t.target==="tobble"?!K1(e):e.player.downed,ec=[0,0,0];function e3(t,e,n){let i=K1(e),s=e.player,r=e.bossLevel.spots[t.shiftPending?t.nextSpot:t.spot];return ec[0]=r.pop[0],ec[1]=1.49*n.scale,ec[2]=r.pop[1],!s.downed&&rn(e.boxes,ec,s.chest)?"player":i&&rn(e.boxes,ec,i.chest)?"tobble":s.downed?null:"player"}function X0(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var ua=t=>t.phase===3,tb=(t,e)=>e.popTime+(ua(t)?e.fastTelegraph:e.telegraphTime),q1=(t,e)=>ua(t)?e.fastBurstTime:e.burstTime,t3=(t,e)=>ua(t)?e.fastRate:e.rate,n3=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function Y0(t,e,n){rs(t,"tucked");let i=ua(t)?n.fastWaitMin:n.coverWaitMin,s=ua(t)?n.fastWaitMax:n.coverWaitMax;t.wait=i+Math.max(0,s-i)*e.rand()}function i3(t,e,n,i){if(t.pop>0?(t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001)),Q1(t,e,t.pop)):t.shiftPending&&(t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.spot=t.nextSpot,t.shiftPending=!1,t.shiftT=0),t.pop<=0&&t.shiftT<1){t.shiftT=Math.min(1,t.shiftT+i/Math.max(n.shiftTime,.001));let r=e.bossLevel.spots[t.spot].hide;t.pos[0]=t.shiftFrom[0]+(r[0]-t.shiftFrom[0])*t.shiftT,t.pos[2]=t.shiftFrom[1]+(r[1]-t.shiftFrom[1])*t.shiftT}if(tc(t,e.player.pos[0],e.player.pos[2],i),t.stateT<t.wait||t.pop>0||t.shiftT<1)return;let s=e3(t,e,n);if(s)if(t.target=s,t.shots=0,t.phase===1&&t.sinceLob>=n.lobEvery){let r=W0(t,e);t.lobTo[0]=r[0],t.lobTo[1]=0,t.lobTo[2]=r[2],t.lobSent=!1,rs(t,"lobWindup"),e.events.push({type:"telegraph",id:t.id,kind:"lob",time:n.popTime+n.lobWindup})}else rs(t,"telegraph"),X0(t,e,n,i,!0),e.events.push({type:"telegraph",id:t.id,kind:"boss",time:tb(t,n)})}function Pd(t,e,n,i){i&&(t.bursts++,t.sinceLob++,s3(t,e,n)),t.nextSpot=1-t.spot,t.shiftPending=!0,Y0(t,e,n)}function s3(t,e,n){!ua(t)||t.offers>=3||(t.offers++,eo(t,e,"bossOffer"),t.offers===3&&(eo(t,e,"bossOfferTobble"),eo(t,e,"bossOfferDoc")))}function Id(t,e,n,i){t.pop=Math.min(1,t.pop+i/Math.max(n.popTime,.001)),Q1(t,e,t.pop)}function r3(t,e,n,i){Id(t,e,n,i);let s=W0(t,e);if(tc(t,s[0],s[2],i),X0(t,e,n,i,!1),eb(t,e)){Pd(t,e,n,!1);return}t.stateT>=tb(t,n)-to&&(rs(t,"burst"),t.shots=0)}function o3(t,e,n,i,s){Id(t,e,n,i);let r=W0(t,e);if(tc(t,r[0],r[2],i),X0(t,e,n,i,!1),eb(t,e)){Pd(t,e,n,!0);return}let o=t.muzzle,a=e.player;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp*n.scale,o[2]=t.pos[2];let l=n3(t.stateT,t3(t,n),q1(t,n)),c=t.target==="tobble"?0:Math.min(1,a.speed/s.move.sprint);for(;t.shots<l;){t.shots++;let h=t.aim[0]-o[0],d=t.aim[1]-o[1],u=t.aim[2]-o[2],f=Math.hypot(h,d,u)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[h/f,d/f,u/f],accurate:!0,target:t.target,spread:n.spread+s.associate.moveSpread*c,damage:n.damage})}t.stateT>=q1(t,n)-to&&Pd(t,e,n,!0)}function a3(t,e,n,i){if(Id(t,e,n,i),tc(t,t.lobTo[0],t.lobTo[2],i),t.stateT<n.popTime+n.lobWindup-to)return;let s=t.muzzle;s[0]=t.pos[0],s[1]=t.pos[1]+n.muzzleUp*n.scale,s[2]=t.pos[2],t.lobSent=!0,e.events.push({type:"bossLob",id:t.id,from:[s[0],s[1],s[2]],to:[t.lobTo[0],0,t.lobTo[2]],flight:n.lobFlight,target:t.target}),t.sinceLob=0,rs(t,"lobRecover")}function l3(t,e,n,i){Id(t,e,n,i),t.stateT>=n.lobRecover-to&&Pd(t,e,n,!1)}function nb(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2],a=Math.hypot(r,o),l=i*s;return a<=l+to?(t.pos[0]=e,t.pos[2]=n,!0):(t.pos[0]+=r/a*l,t.pos[2]+=o/a*l,t.yaw=Ht(t.yaw,Math.atan2(r,o),$1*s),!1)}function c3(t,e,n,i){t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001));let s=e.bossLevel.deskHide;nb(t,s[0],s[1],n.retreatSpeed,i)&&t.pop<=0&&(rs(t,"hiding"),t.saunasOpen=!0,e.events.push({type:"bossSaunas",id:t.id}))}function h3(t,e,n,i){tc(t,e.player.pos[0],e.player.pos[2],i),!(t.stateT<n.minHide-to||!(e.saunasDone&&e.saunasDone()))&&(t.phase=3,t.invuln=!1,t.spot=e.player.pos[0]<0?0:1,t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.shiftT=0,t.shiftPending=!1,rs(t,"return"),e.events.push({type:"bossPhase",id:t.id,phase:3}),eo(t,e,"bossReturn"))}function u3(t,e,n,i){let s=e.bossLevel.spots[t.spot].hide;nb(t,s[0],s[1],n.returnSpeed,i)&&(t.shiftT=1,Y0(t,e,n))}function ib(t,e,n){let i=e.tuning||X,s=i.boss;switch(t.state){case"idle":e.started&&(eo(t,e,"bossIntro"),Y0(t,e,s));break;case"tucked":i3(t,e,s,n);break;case"telegraph":r3(t,e,s,n);break;case"burst":o3(t,e,s,n,i);break;case"lobWindup":a3(t,e,s,n);break;case"lobRecover":l3(t,e,s,n);break;case"retreat":c3(t,e,s,n);break;case"hiding":h3(t,e,s,n);break;case"return":u3(t,e,s,n);break;default:break}}function d3(t,e,n){return t.alive=!1,t.pop=0,t.invuln=!1,rs(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n,boss:!0}),eo(t,e,"bossDeath"),"kill"}function sb(t,e,n,i="body"){if(!t.alive||!(e>0)||t.state==="unused")return null;if(t.invuln)return"immune";let s=n.tuning||X,r=s.boss;if(t.health-=i==="head"?e*r.headMult:e,t.phase===1){let o=r.phase2At*r.health;return t.health<=o+to&&(t.health=o,t.phase=2,t.invuln=!0,t.lobSent=!0,rs(t,"retreat"),n.events.push({type:"bossPhase",id:t.id,phase:2}),eo(t,n,"bossTeam")),"hit"}return t.health<=0?(t.health=0,d3(t,n,i)):"hit"}function q0(t){t.phase=3,t.invuln=!1,t.health=1,(t.state==="retreat"||t.state==="hiding")&&(rs(t,"tucked"),t.wait=0,t.pop=0)}var f3=.25,Dd=new Set(["executed","unused","dead"]),p3=new Set(["cover","suppress","reload"]),yr={r:.25,y:.25,back:.2,front:.6},m3=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),g3=new Set(["telegraph","burst","suppress"]),J0=t=>Math.max(0,Math.min(1,t)),os=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),rb=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function j0(t,e=X.associate,n=X){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=Math.PI,t.state="idle",t.stateT=0,t.health=e.health,t.alive=!0,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.aim[0]=t.aim[1]=t.aim[2]=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckRef[0]=t.start[0],t.stuckRef[1]=t.start[2],t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.diveDir[0]=t.diveDir[1]=0,t.divePoint=null,t.claimed=!1,t.diedAt=-1/0,t.wasDowned=!1,t.kind=t.startKind,t.kind==="trainer"?G0(t,n):t.kind==="boss"&&J1(t,n),da(t,n.combat,n),t}function Q0(t){return t.alive=!1,t.state="unused",t.stateT=0,t.health=0,t.pos[1]=t.prevPos[1]=-50,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.helping=null,t.claimed=!1,t.wasDowned=!1,t.kind="associate",da(t),t}function Nd(t,e,n,i="associate"){let s=n.tuning||X,r=s.associate;for(let a=0;a<3;a++)t.pos[a]=e[a],t.prevPos[a]=e[a];let o=n.player;return t.yaw=t.prevYaw=o?Math.atan2(o.pos[0]-e[0],o.pos[2]-e[2]):Math.PI,t.state="spawn",t.stateT=0,t.health=r.health,t.alive=!0,t.claimed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.wasDowned=!1,t.diedAt=-1/0,t.divePoint=null,t.kind=i,i==="trainer"&&G0(t,s),da(t,s.combat,s),t}function em({id:t,pos:e,kind:n="associate"},i=X.associate,s=X){let r={id:t,kind:n,startKind:n,strikeAt:-1,windupLen:0,struckAt:-1/0,retargetT:0,repathT:0,forcePathT:0,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:ht.head.r},body:{a:[0,0,0],b:[0,0,0],r:ht.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return j0(r,i,s)}function da(t,e=X.combat,n=X){if(t.kind==="trainer")return k1(t,e,n);if(t.kind==="boss")return j1(t,e,n);let[i,s,r]=t.pos,o=t.shapes;if(t.state==="downed"){let l=Math.sin(t.yaw),c=Math.cos(t.yaw);return o.body.r=yr.r,o.head.r=ht.head.r,o.body.a[0]=i-l*yr.back,o.body.a[1]=s+yr.y,o.body.a[2]=r-c*yr.back,o.body.b[0]=i+l*yr.front,o.body.b[1]=s+yr.y,o.body.b[2]=r+c*yr.front,o.head.c[0]=o.body.b[0],o.head.c[1]=s+yr.y,o.head.c[2]=o.body.b[2],o}let a=m3.has(t.state)&&t.point&&t.point.kind==="low"&&t.pop<.5;return o.head.r=ht.head.r+e.hitPad,o.body.r=ht.body.r+e.hitPad,o.head.c[0]=i,o.head.c[2]=r,o.body.a[0]=i,o.body.a[2]=r,o.body.b[0]=i,o.body.b[2]=r,a?(o.head.c[1]=s+e.crouchHead-e.hitPad,o.body.a[1]=s+.1,o.body.b[1]=s+e.crouchBodyTop):(o.head.c[1]=s+ht.head.cy,o.body.a[1]=s+ht.body.ay,o.body.b[1]=s+ht.body.by),o}function gn(t,e){t.state=e,t.stateT=0}function as(t,e,n){e=J0(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var br=(t,e)=>e>0?t/e:1;function nc(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),i.turnRate*s))}function ob(t,e,n){let i=t.point.normal;t.yaw=Ht(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function ls(t,e){e.tokens.holds(t.id)&&e.tokens.release(t.id,e.now,e.director)}function tm(t,e){let n=e.player.pos;return t.chest[0]=n[0],t.chest[1]=n[1]+1.2,t.chest[2]=n[2],t.chest}function kd(t,e){let n=e.tuning||X,i=n.associate,s=e.director||n.director,r=e.player,o=[r.pos[0],r.pos[2]],a=tm(t,e),l=t.point,c=os(l?l.pos:[t.pos[0],t.pos[2]],o),h=t.role,d=!!l&&(t.mustMove||h!=="hold"),u=[t.pos[0],t.pos[2]],f=Math.cos(s.flankAngle*Math.PI/180),v=Math.cos(s.flankMaxAngle*Math.PI/180),p=0,m=0;if(r.coverNormal)p=-r.coverNormal[0],m=-r.coverNormal[1];else{let _=0;for(let S of e.others||[])S.alive&&(p+=S.pos[0],m+=S.pos[2],_++);_?(p=p/_-o[0],m=m/_-o[1]):(p=t.pos[0]-o[0],m=t.pos[2]-o[1])}let g=Math.hypot(p,m)||1;p/=g,m/=g;let y=[];for(let[_,S]of e.reserved)S!==t.id&&y.push(e.points[_].pos);let w=null,M=-1/0;for(let _ of e.points){let S=e.reserved.get(_.index);if(S!==void 0&&S!==t.id||d&&_.index===l.index||t.mustMove&&l&&os(_.pos,l.pos)<2*i.reserveRadius)continue;let x=os(_.pos,o);if(x<i.reserveRadius||x<i.minRange||x>i.maxRange)continue;let b=!1;for(let k of y)if(os(k,_.pos)<i.reserveRadius){b=!0;break}if(b)continue;let R=((_.pos[0]-o[0])*p+(_.pos[1]-o[1])*m)/x;if(h==="flank"?R<v:R<0)continue;let C=0;if(h==="push"){let k=c-x;if(k<2)continue;C=2*k}else if(h==="flank"){if(!r.coverNormal||R>f)continue;C=10}let L=bd(_,a,e.boxes,n);if(!L.protected||!L.canShoot)continue;let E=-os(u,_.pos)-.5*Math.abs(x-i.preferRange)+C;E>M+1e-9&&(M=E,w=_)}return w?{point:w,score:M}:null}function v3(t,e){let n=kd(t,e);return n?n.point:null}function $0(t,e,n){let i=e.tuning||X,s=[t.pos[0],t.pos[2]],r=tm(t,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==t.id)continue;let h=os(s,l.pos);h>=a||n&&!bd(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function ks(t,e,n){gn(t,"cover"),t.blind=0,t.wantSuppress=null,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function ui(t,e,n){ls(t,e),as(t,0,n),t.blind=0;let i=t.stuckCount>=3?$0(t,e,!1):v3(t,e);if(!i){if(t.mustMove=!1,t.role!=="hold"&&(t.role="hold"),t.point&&os(t.point.pos,[t.pos[0],t.pos[2]])<=.5){ks(t,e,n);return}if(i=$0(t,e,!0)||$0(t,e,!1),!i){ks(t,e,n);return}}if(t.point&&t.point.index!==i.index&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),e.reserved.set(i.index,t.id),t.point=i,t.mustMove=!1,Math.hypot(i.pos[0]-t.pos[0],i.pos[1]-t.pos[2])<=n.arriveDist){ab(t,e,n);return}let s=t.stuckCount>=3?null:Qr(e.graph,e.boxes,[t.pos[0],t.pos[2]],i.pos,n.radius);t.path=s||[[i.pos[0],i.pos[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],gn(t,"run")}function ab(t,e,n){if(t.role==="revive"){gn(t,"kneel");return}let i=t.point;t.pos[0]=i.pos[0],t.pos[2]=i.pos[1],t.role="hold",t.stuckCount=0,t.pointT=0,t.relocT=0,t.mustMove=!1,e.events.push({type:"arrive",id:t.id,point:i}),ks(t,e,n)}function x3(t,e,n,i){if(t.role==="revive"){let r=db(t,e);if(!r){Os(t,e),ui(t,e,n);return}if(rb(t.pos,r.pos)<=ub){gn(t,"kneel");return}}let s=n.runSpeed*i;for(let r=0;r<t.path.length+2;r++){let o=t.path[t.pathI],a=t.pathI===t.path.length-1,l=o[0]-t.pos[0],c=o[1]-t.pos[2],h=Math.hypot(l,c);if(h<=n.arriveDist){if(a){ab(t,e,n);return}t.pathI++;continue}nc(t,o[0],o[1],n,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=Dn(e.boxes,t.pos,[l/h*d,0,c/h*d],n.radius,n.height),f=Math.hypot(u.pos[0]-t.pos[0],u.pos[2]-t.pos[2]);if(t.pos[0]=u.pos[0],t.pos[2]=u.pos[2],s-=f,f<d*.5)break;f>=h-1e-9}if(t.stuckT+=i,t.stuckT>=n.stuckTime){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05){t.role==="revive"&&Os(t,e),t.stuckCount++,ui(t,e,n);return}t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}}function nm(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var lb=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1),im=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function y3(t,e,n){if(t.point){let i=Jr(t.point,(e.tuning||X).associate.popShift);n[0]=i[0],n[2]=i[1]}else n[0]=t.pos[0],n[2]=t.pos[2];return n[1]=1.49,n}var Z0=[0,0,0];function b3(t,e){let n=im(e),i=e.player;return n?(y3(t,e,Z0),!i.downed&&rn(e.boxes,Z0,i.chest)?"player":rn(e.boxes,Z0,n.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var cb=(t,e)=>t.target==="tobble"?!im(e):e.player.downed,hb=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function _3(t,e,n,i,s){as(t,t.pop-br(s,n.popTime),n),ob(t,n,s);let r=e.player;if(r.downed&&!im(e))return;if(!r.downed){if(t.pointT+=s,t.role!=="hold"){ui(t,e,n);return}if(t.relocT+=s,t.relocT>=n.relocateCheck){t.relocT=0;let a=bd(t.point,tm(t,e),e.boxes,e.tuning||X);if(!a.protected||!a.canShoot||os(t.point.pos,[r.pos[0],r.pos[2]])<n.reserveRadius){t.mustMove=!0,ui(t,e,n);return}}if(t.pointT>=n.relocateAfter){t.mustMove=!0,t.pointT=0,ui(t,e,n);return}}if(t.stateT<t.wait)return;if(t.wantSuppress===null&&(t.wantSuppress=e.rand()<n.suppressChance),t.bursts>=n.magBursts){gn(t,"reload"),e.events.push({type:"bark",id:t.id,key:"reload"});return}let o=b3(t,e);if(o&&e.tokens.request(t.id,e.now,e.tokenCount,i)){t.target=o,gn(t,"telegraph"),t.shots=0,nm(t,e,n,s,!0),e.events.push({type:"telegraph",id:t.id});return}t.wantSuppress&&!r.downed&&(gn(t,"suppress"),t.shots=0)}function K0(t,e,n,i){ls(t,e),i&&t.bursts++,ks(t,e,n)}function M3(t,e,n,i){as(t,t.pop+br(i,n.popTime),n);let s=hb(t,e);if(nc(t,s[0],s[2],n,i),nm(t,e,n,i,!1),cb(t,e)||!e.tokens.holds(t.id)){K0(t,e,n,!1);return}t.stateT>=n.popTime+n.telegraphTime-1e-9&&(gn(t,"burst"),t.shots=0)}function w3(t,e,n,i){let s=e.player;as(t,t.pop+br(i,n.popTime),n);let r=hb(t,e);if(nc(t,r[0],r[2],n,i),nm(t,e,n,i,!1),cb(t,e)||!e.tokens.holds(t.id)){K0(t,e,n,!0);return}let o=t.muzzle;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp,o[2]=t.pos[2];let a=lb(t.stateT,n.rate,n.burstTime),l=t.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||X).move.sprint);for(;t.shots<a;){t.shots++;let c=t.aim[0]-o[0],h=t.aim[1]-o[1],d=t.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:t.target,spread:n.spread+n.moveSpread*l})}t.stateT>=n.burstTime-1e-9&&K0(t,e,n,!0)}function S3(t,e,n,i){let s=e.player;if(t.blind=J0(t.blind+br(i,n.popTime)),nc(t,s.pos[0],s.pos[2],n,i),s.downed){t.blind=0,ks(t,e,n);return}let r=t.stateT-n.popTime;if(r<0&&t.blind<1)return;let o=t.point,a=Math.max(0,r),l=t.muzzle;l[0]=t.pos[0],l[2]=t.pos[2],l[1]=t.pos[1]+(o.kind==="low"?o.height+(e.tuning||X).combat.blindLift:n.muzzleUp);let c=lb(a,n.suppressRate,n.suppressTime);for(;t.shots<c;){t.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let v=u,p=-h,m=Math.hypot(v,p);m<1e-6&&(v=1,p=0,m=1),v/=m,p/=m;let g=d*p,y=u*v-h*p,w=-d*v,M=2*Math.PI*e.rand(),_=n.suppressMiss*(1+.5*e.rand()),S=Math.cos(M)*_,x=Math.sin(M)*_,b=s.head[0]+v*S+g*x,R=s.head[1]+y*x,C=s.head[2]+p*S+w*x,L=b-l[0],E=R-l[1],k=C-l[2],I=Math.hypot(L,E,k)||1;e.events.push({type:"enemyShot",id:t.id,from:[l[0],l[1],l[2]],dir:[L/I,E/I,k/I],accurate:!1,spread:n.suppressSpread})}r>=n.suppressTime-1e-9&&(t.blind=0,ks(t,e,n))}var ub=.8;function db(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);return n&&n.alive&&n.state==="downed"&&n.helper===t.id?n:null}function Os(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);n&&n.helper===t.id&&(n.helper=null),t.helping=null,t.role="hold"}function fb(t,e,n){let i=(n.tuning||X).associate;ls(t,n),as(t,0,i),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.point=null,t.role="revive",t.helping=e.id,e.helper=t.id,t.mustMove=!1;let s=t.pos[0]-e.pos[0],r=t.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=ub){gn(t,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];t.path=Qr(n.graph,n.boxes,[t.pos[0],t.pos[2]],a,i.radius)||[a],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],gn(t,"run")}function T3(t,e,n,i){let s=db(t,e);if(!s){Os(t,e),ui(t,e,n);return}nc(t,s.pos[0],s.pos[2],n,i),!(t.stateT<n.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,n.reviveHealth*n.health),s.role="hold",s.mustMove=!1,s.bursts=0,gn(s,"seek"),e.events.push({type:"cloneRevive",id:t.id,target:s.id}),t.helping=null,t.role="hold",ui(t,e,n))}function E3(t,e,n,i){if(t.stateT>=n.bleedTime-1e-9){t.health=0,Ld(t,e,"bleed");return}if(t.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===t||!c.alive||!p3.has(c.state))continue;let h=rb(t.pos,c.pos);h<o&&(o=h,s=c.pos[0]-t.pos[0],r=c.pos[2]-t.pos[2])}if(o===1/0)s=t.pos[0]-e.player.pos[0],r=t.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),t.yaw=Ht(t.yaw,Math.atan2(s,r),n.turnRate*i);let a=n.downedCrawl*i,l=Dn(e.boxes,t.pos,[s/o*a,0,r/o*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}function A3(t,e,n){t.point&&e.reserved.get(t.point.index)===t.id&&t.pop<=1e-6&&os(t.point.pos,[t.pos[0],t.pos[2]])<=.3?ks(t,e,n):ui(t,e,n)}function pb(t,e){return t.kind==="trainer"?z1(t):t.kind==="boss"||!t.alive||Dd.has(t.state)||t.state==="downed"?!1:(t.role==="revive"&&Os(t,e),ls(t,e),t.blind=0,gn(t,"stagger"),!0)}function mb(t,e,n){if(t.kind==="trainer")return H1(t,e);if(t.kind==="boss"||!t.alive||Dd.has(t.state)||t.state==="downed"||t.state==="dive")return!1;t.role==="revive"&&Os(t,n),ls(t,n),as(t,0,(n.tuning||X).associate),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.divePoint=t.point,t.point=null,t.role="hold",t.path=[],t.pathI=0;let i=t.pos[0]-e[0],s=t.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(t.yaw),s=Math.cos(t.yaw)):(i/=r,s/=r),t.diveDir[0]=i,t.diveDir[1]=s,t.yaw=Math.atan2(i,s),gn(t,"dive"),!0}function R3(t,e,n,i){let s=Math.max(n.diveTime,.001),r=Math.max(t.stateT-i,n.diveReaction),o=Math.min(t.stateT,n.diveReaction+s);if(o>r){let a=n.diveDistance*(o-r)/s,l=Dn(e.boxes,t.pos,[t.diveDir[0]*a,0,t.diveDir[1]*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}t.stateT>=n.diveReaction+s-1e-9&&(t.point=t.divePoint,t.divePoint=null,t.mustMove=!0,ui(t,e,n))}function gb(t,e){return t.kind==="trainer"?G1(t):t.kind==="boss"||!t.alive||Dd.has(t.state)||t.state==="dive"?!1:(t.role==="revive"&&Os(t,e),ls(t,e),as(t,0,(e.tuning||X).associate),t.blind=0,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.wasDowned=t.state==="downed",t.point=null,t.role="hold",t.helper=null,t.mustMove=!1,gn(t,"executed"),!0)}function vb(t){return t.kind==="trainer"?V1(t):!t.alive||t.state!=="executed"?!1:(gn(t,t.wasDowned?"downed":"flinch"),t.wasDowned=!1,!0)}function xb(t,e,n="execute"){return t.kind==="trainer"?X1(t,e,n):t.kind==="boss"||!t.alive||t.state!=="executed"?null:(t.health=0,Ld(t,e,n))}function Ld(t,e,n){return t.alive=!1,ls(t,e),t.role==="revive"&&Os(t,e),t.helper=null,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.pop=0,t.blind=0,gn(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),"kill"}function sm(t,e){return t.kind==="trainer"||t.kind==="boss"||!t.alive||Dd.has(t.state)||t.state==="downed"?null:(ls(t,e),t.role==="revive"&&Os(t,e),t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.point=null,t.health=1,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.mustMove=!1,gn(t,"downed"),e.events.push({type:"down",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]]}),e.events.push({type:"bark",id:t.id,key:"cloneDown"}),"down")}function yb(t,e,n){if(!t.alive)return;(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,f3);let i=(e.tuning||X).associate,s=e.director||X.director;if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.kind==="trainer"){B1(t,e,n);return}if(t.kind==="boss"){ib(t,e,n);return}switch(t.state){case"idle":e.started&&ui(t,e,i);break;case"seek":ui(t,e,i);break;case"run":x3(t,e,i,n);break;case"cover":_3(t,e,i,s,n);break;case"telegraph":M3(t,e,i,n);break;case"burst":w3(t,e,i,n);break;case"suppress":S3(t,e,i,n);break;case"reload":as(t,t.pop-br(n,i.popTime),i),ob(t,i,n),t.stateT>=i.reloadTime&&(t.bursts=0,ks(t,e,i));break;case"flinch":as(t,t.pop-br(n,i.popTime),i),t.blind=J0(t.blind-br(n,i.popTime)),t.stateT>=i.flinchTime&&(t.point?ks(t,e,i):ui(t,e,i));break;case"stagger":as(t,t.pop-br(n,i.popTime),i),t.stateT>=i.staggerTime-1e-9&&A3(t,e,i);break;case"dive":R3(t,e,i,n);break;case"kneel":T3(t,e,i,n);break;case"downed":E3(t,e,i,n);break;case"spawn":t.stateT>=(e.tuning||X).pad.riseTime-1e-9&&ui(t,e,i);break;default:break}}function bb(t,e,n,i="body"){return t.kind==="trainer"?Y1(t,e,n,i):t.kind==="boss"?sb(t,e,n,i):!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:t.state==="downed"?(t.health=0,Ld(t,n,i)):(t.health-=e,t.health<=0?(i==="body"||i==="tobble")&&n.rand()<(n.tuning||X).associate.downChance?sm(t,n):(t.health=0,Ld(t,n,i)):t.role==="revive"?(Os(t,n),ls(t,n),gn(t,"flinch"),"hit"):(g3.has(t.state)&&(ls(t,n),gn(t,"flinch"),t.blind=Math.min(t.blind,1)),"hit"))}function _b(){let t=new Map,e=new Map,n=new Map,i={request(s,r,o,a=X.director){if(t.has(s))return!0;if(r<(n.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(t.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),t.set(s,r),!0)},release(s,r,o=X.director){e.delete(s),t.delete(s)&&n.set(s,r+o.tokenCooldown)},holds(s){return t.has(s)},held(){return[...t.keys()]},expire(s,r=X.director){let o=[];for(let[a,l]of t)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){t.clear(),e.clear(),n.clear()}};return i}function Mb(t,e=X){let n=(t.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,openKey:r.openKey,shareKey:r.shareKey,manual:!!r.manual,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(n.map(r=>[r.id,new Set]));return{list:n,step(r,o){let a=e.pad,l=[];for(let c of n){if(c.state==="dormant"){if(c.manual||!o.started||!(o.kills>=(c.openKey&&Number.isFinite(a[c.openKey])?a[c.openKey]:a.openAfterKills)||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of n)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of n)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return n.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of n)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var C3=.25,P3=1.49,I3=.5,io="tobble",L3=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn","windup","swing","recover"]),Od=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),Hd=t=>Math.max(0,Math.min(1,t)),wb=(t,e)=>e&&e.tuning?e.tuning.tobble:t.cfg,D3=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function am({pos:t,yaw:e=0},n=X.tobble){let i={id:io,cfg:n,start:[t[0],t[1],t[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:ht.head.r},body:{a:[0,0,0],b:[0,0,0],r:ht.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return lm(i)}function lm(t){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=t.startYaw,t.state="idle",t.stateT=0,t.hp=t.cfg.health,t.alive=!0,t.downed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.target=null,t.reviveT=0,t.threatT=0,t.lofT=0,t.wait=0,t.shots=0,t.sinceHit=0,t.relocT=0,t.complainT=0,t.stuckT=0,t.stuckCount=0,t.kneeling=!1,t.revGo=!1,t.sideLeft=0,t.speed=0,t.aim[0]=t.aim[1]=t.aim[2]=0,ic(t),t}function ic(t,e=X.combat){let n=t.cfg,i=n.scale,[s,r,o]=t.pos,a=t.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,t.downed){let c=Math.sin(t.yaw),h=Math.cos(t.yaw);a.body.r=.25*i,a.head.r=ht.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],t.chest[0]=s,t.chest[1]=r+.25*i,t.chest[2]=o}else if(t.point&&t.point.kind==="low"&&t.pop<.5)a.head.r=(ht.head.r+l)*i,a.body.r=(ht.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,t.chest[0]=s,t.chest[1]=r+e.crouchBodyTop*i*.9,t.chest[2]=o;else{let c=t.point?n.popLift*Hd(t.pop):0;a.head.r=(ht.head.r+l)*i,a.body.r=(ht.body.r+l)*i,a.head.c[1]=r+ht.head.cy*i+c,a.body.a[1]=r+ht.body.ay*i+c,a.body.b[1]=r+ht.body.by*i+c,t.chest[0]=s,t.chest[1]=r+n.height*(1.2/1.8)+c,t.chest[2]=o}return t.head[0]=a.head.c[0],t.head[1]=a.head.c[1],t.head[2]=a.head.c[2],a}function so(t,e){t.state=e,t.stateT=0}var Gd=(t,e,n=!1)=>t.events.push(n?{type:"bark",id:io,key:e,force:n}:{type:"bark",id:io,key:e});function sc(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),i.turnRate*s))}function N3(t,e,n){let i=t.point.normal;t.yaw=Ht(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function pa(t,e,n){e=Hd(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.tuning.associate.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var cm=(t,e)=>e>0?t/e:1;function rc(t,e){t.point&&e.reserved.get(t.point.index)===io&&e.reserved.delete(t.point.index),t.point=null}function Sb(t,e,n,i){let s=t.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=n-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function k3(t,e,n){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=t.pos[0]-i.lens[0],l=t.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;t.side[0]=-o*c,t.side[1]=r*c,t.sideLeft=n.sidestepDist,rc(t,e),pa(t,0,e),t.target=null,t.lofT=0,so(t,"sidestep")}var no=t=>t.alive&&L3.has(t.state)&&t.state!=="executed",fa=t=>t.state==="downed";function O3(t,e,n,i){return t.point?(Jr(t.point,e.tuning.associate.popShift,Us),i[0]=Us[0],i[2]=Us[1]):(i[0]=t.pos[0],i[2]=t.pos[2]),i[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0),i}function Bd(t,e){let n=t.shapes.body;return e[0]=(n.a[0]+n.b[0])/2,e[1]=(n.a[1]+n.b[1])/2,e[2]=(n.a[2]+n.b[2])/2,e}var Ui=[0,0,0],rm=[0,0,0],Us=[0,0];function hm(t,e,n){return t.point?(Jr(t.point,e.tuning.associate.popShift,Us),n[0]=Us[0],n[2]=Us[1]):(n[0]=t.pos[0],n[2]=t.pos[2]),n[1]=P3,n}function Tb(t,e,n){O3(t,e,n,rm);let i=null,s=1/0;for(let r of e.enemies){if(!no(r)||fa(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);o>=s||o>n.range||rn(e.boxes,rm,Bd(r,Ui))&&(s=o,i=r)}return i}function Eb(t,e,n){let i=null,s=1/0;for(let r of t.enemies){if(!no(r)||fa(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-n);o<s&&(s=o,i=r)}return i}var zd=[0,0,0],_r=[0,0,0],Ud=[0,0,0];function Ab(t,e,n){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[t.pos[0],t.pos[2]],l=Eb(e,t.pos[0],t.pos[2]),c=[];for(let[f,v]of e.reserved)v!==io&&c.push(e.points[f].pos);let h=(n.followMin+n.followMax)/2,d=null,u=-1/0;for(let f of e.points){let v=e.reserved.get(f.index);if(v!==void 0&&v!==io)continue;let p=Od(f.pos,o);if(p<n.followMin||p>n.followMax||p<=n.personalSpace||Sb(e,n,f.pos[0],f.pos[1])<n.lofClear)continue;let m=!1;for(let M of c)if(Od(M,f.pos)<s.reserveRadius){m=!0;break}if(m)continue;let g=!0;for(let M of e.enemies)if(no(M)&&Od([M.pos[0],M.pos[2]],f.pos)<s.radius+n.radius+.2){g=!1;break}if(!g)continue;let y=!1;if(l){if(hm(l,e,zd),_r[0]=f.pos[0],_r[1]=f.kind==="low"?i.combat.crouchHead*n.scale:n.height,_r[2]=f.pos[1],rn(e.boxes,_r,zd))continue;Jr(f,s.popShift,Us),Ud[0]=Us[0],Ud[1]=n.muzzleUp+n.popLift,Ud[2]=Us[1],y=rn(e.boxes,Ud,Bd(l,Ui))}let w=-Od(a,f.pos)-.5*Math.abs(p-h)+(y?8:0);w>u+1e-9&&(u=w,d=f)}return d}function U3(t,e,n){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=Dn(e.boxes,[s[0],t.pos[1],s[2]],[l,0,c],n.radius,n.height);return[h.pos[0],h.pos[2]]}function Rb(t,e,n,i){t.goal[0]=i[0],t.goal[1]=i[1],t.path=t.stuckCount>=3?[[i[0],i[1]]]:Qr(e.graph,e.boxes,[t.pos[0],t.pos[2]],i,n.radius)||[[i[0],i[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}function Cb(t,e,n,i,s){let r=s*i,o=.15;for(let a=0;a<t.path.length+2;a++){let l=t.path[t.pathI],c=t.pathI===t.path.length-1,h=l[0]-t.pos[0],d=l[1]-t.pos[2],u=Math.hypot(h,d);if(u<=o){if(c)return"arrived";t.pathI++;continue}sc(t,l[0],l[1],n,i);let f=Math.min(r,u);if(f<=1e-9)break;let v=Dn(e.boxes,t.pos,[h/u*f,0,d/u*f],n.radius,n.height),p=Math.hypot(v.pos[0]-t.pos[0],v.pos[2]-t.pos[2]);if(t.pos[0]=v.pos[0],t.pos[2]=v.pos[2],r-=p,p<f*.5)break}if(t.stuckT+=i,t.stuckT>=1){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05)return"stuck";t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}return"moving"}function Mr(t,e,n){let i=e.started?Ab(t,e,n):null;t.point&&(!i||i.index!==t.point.index)&&rc(t,e),pa(t,0,e);let s;if(i?(t.point=i,e.reserved.set(i.index,io),s=i.pos):s=U3(t,e,n),t.shots=0,t.target=null,Math.hypot(s[0]-t.pos[0],s[1]-t.pos[2])<=.15){Pb(t,e,n);return}Rb(t,e,n,s),so(t,"follow")}function Pb(t,e,n){if(t.stuckCount=0,t.point&&(t.pos[0]=t.point.pos[0],t.pos[2]=t.point.pos[1]),!e.started&&!t.point){so(t,"idle");return}om(t,e,n)}function om(t,e,n){so(t,"cover"),t.target=null,t.relocT=0,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function F3(t,e,n,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax){Mr(t,e,n);return}sc(t,s[0],s[2],n,i)}function B3(t,e,n,i){let s=Cb(t,e,n,i,n.runSpeed);s==="arrived"?Pb(t,e,n):s==="stuck"&&(t.stuckCount++,rc(t,e),Mr(t,e,n))}function z3(t,e,n,i){pa(t,t.pop-cm(i,n.popTime),e);let s=e.player.pos;if(t.point?N3(t,n,i):sc(t,s[0],s[2],n,i),t.relocT+=i,t.relocT>=I3){t.relocT=0;let o=Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax;if(t.point){let a=t.point.pos,l=Math.hypot(t.pos[0]-a[0],t.pos[2]-a[1])>.3,c=Eb(e,t.pos[0],t.pos[2]),h=!1;if(c){hm(c,e,zd);let d=t.point.kind==="low"?e.tuning.combat.crouchHead*n.scale:n.height;_r[0]=a[0],_r[1]=d,_r[2]=a[1],h=rn(e.boxes,_r,zd)}if(o||l||h){Mr(t,e,n);return}}else if(o||e.started&&Ab(t,e,n)){Mr(t,e,n);return}}if(!e.started||t.stateT<t.wait)return;let r=Tb(t,e,n);r&&(t.target=r,t.shots=0,so(t,"shoot"))}function H3(t,e,n,i){pa(t,t.pop+cm(i,n.popTime),e);let s=t.target;if((!s||!no(s)||fa(s)||!rn(e.boxes,G3(t,n),Bd(s,Ui)))&&(s=t.target=Tb(t,e,n)),!s){om(t,e,n);return}if(sc(t,s.pos[0],s.pos[2],n,i),t.stateT<n.popTime-1e-9)return;let r=t.muzzle;r[0]=t.pos[0],r[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0)*Hd(t.pop),r[2]=t.pos[2];let o=D3(t.stateT-n.popTime,n.rate,n.burstTime);for(;t.shots<o;){t.shots++,Bd(s,Ui);let a=Ui[0]-r[0],l=Ui[1]-r[1],c=Ui[2]-r[2],h=Math.hypot(a,l,c)||1,d=oa([a/h,l/h,c/h],n.spread,e.rand,t.scratch),u=kn(r,d,n.range,e.boxes,e.enemies),f=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:f?f.id:null}),f&&e.hurtRep&&e.hurtRep(f,n.damage),!no(s)||fa(s))break}(!no(s)||fa(s))&&(t.target=null),t.stateT>=n.popTime+n.burstTime-1e-9&&om(t,e,n)}var Fd=[0,0,0];function G3(t,e){return Fd[0]=t.pos[0],Fd[1]=t.pos[1]+e.muzzleUp+(t.point?e.popLift:0)*Hd(t.pop),Fd[2]=t.pos[2],Fd}function V3(t,e,n,i){let s=Math.min(n.runSpeed*i,t.sideLeft);if(s>0){let r=Dn(e.boxes,t.pos,[t.side[0]*s,0,t.side[1]*s],n.radius,n.height),o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);t.pos[0]=r.pos[0],t.pos[2]=r.pos[2],t.sideLeft-=o<s*.5?t.sideLeft:o}t.sideLeft<=1e-6&&Mr(t,e,n)}function W3(t){let e=t.player.pos,n=0;Ui[0]=e[0],Ui[1]=.4,Ui[2]=e[2];for(let i of t.enemies)!no(i)||fa(i)||i.state==="spawn"||rn(t.boxes,hm(i,t,rm),Ui)&&n++;return n}function X3(t,e){rc(t,e),pa(t,0,e),t.target=null,t.revGo=!1,t.threatT=0,t.kneeling=!1,t.reviveT=0,t.path=[],t.pathI=0,t.goal[0]=t.goal[1]=1/0,so(t,"revive")}function Y3(t,e,n,i){let s=e.player.pos;if(!t.revGo)if(t.threatT+=i,pa(t,t.pop-cm(i,n.popTime),e),W3(e)<=n.reviveMaxThreats||t.threatT>=n.reviveWaitMax-1e-9)t.revGo=!0;else return;if(Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])<=n.reviveRange){t.kneeling||(t.kneeling=!0,t.reviveT=0,e.events.push({type:"tobbleKneel"})),sc(t,s[0],s[2],n,i),t.reviveT+=i,t.reviveT>=n.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&Gd(e,"tobbleRevive",!0),Mr(t,e,n));return}if(t.kneeling=!1,t.reviveT=0,Math.hypot(s[0]-t.goal[0],s[2]-t.goal[1])>n.reviveRange+.4||!t.path.length){let a=t.pos[0]-s[0],l=t.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,n.reviveRange*.8);Rb(t,e,n,[s[0]+a*h,s[2]+l*h]),t.goal[0]=s[0],t.goal[1]=s[2]}let o=Cb(t,e,n,i,n.runSpeed);o==="stuck"?(t.stuckCount++,t.path=[]):o==="arrived"&&(t.path=[])}function q3(t,e,n,i){let s=e.player.pos,r=s[0]-t.pos[0],o=s[2]-t.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(t.yaw=Ht(t.yaw,Math.atan2(r,o),n.turnRate*i)),a>n.reviveRange&&n.crawlSpeed>0){let l=Math.min(n.crawlSpeed*i,a-n.reviveRange),c=Dn(e.boxes,t.pos,[r/a*l,0,o/a*l],n.radius,n.height);t.pos[0]=c.pos[0],t.pos[2]=c.pos[2]}t.complainT+=i,t.complainT>=n.complainEvery-1e-9&&(t.complainT=0,Gd(e,"tobbleComplain"))}function Ib(t,e,n){(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,C3);let i=wb(t,e);if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.sinceHit+=n,t.downed){q3(t,e,i,n);return}switch(t.hp<i.health&&t.sinceHit>=i.regenDelay&&(t.hp=Math.min(i.health,t.hp+(i.regenTime>0?i.health/i.regenTime*n:i.health))),e.playerDowned?t.state!=="revive"&&X3(t,e):t.state==="revive"&&Mr(t,e,i),t.state!=="sidestep"&&t.state!=="revive"&&e.aim&&e.aim.active&&Sb(e,i,t.pos[0],t.pos[2])<i.lofClear?(t.lofT+=n,t.lofT>=i.sidestepReact-1e-9&&k3(t,e,i)):t.state!=="sidestep"&&(t.lofT=0),t.state){case"idle":F3(t,e,i,n);break;case"follow":B3(t,e,i,n);break;case"cover":z3(t,e,i,n);break;case"shoot":H3(t,e,i,n);break;case"sidestep":V3(t,e,i,n);break;case"revive":Y3(t,e,i,n);break;default:break}}function oc(t,e,n){return t.downed||!(e>0)?null:(t.hp-=e,t.sinceHit=0,t.hp>0?"hit":(t.hp=0,t.downed=!0,t.kneeling=!1,t.reviveT=0,t.complainT=0,t.target=null,t.pop=0,rc(t,n),so(t,"downed"),n.events.push({type:"tobbleDown"}),Gd(n,"tobbleDown",!0),"downed"))}function um(t,e){if(!t.downed)return!1;let n=wb(t,e);return t.downed=!1,t.hp=Math.max(1,n.reviveHealth*n.health),t.sinceHit=0,t.lofT=0,t.complainT=0,e.events.push({type:"tobbleUp"}),Gd(e,"tobbleUp"),Mr(t,e,n),!0}var Lb=new Set(["cover","coverSlide","coverSwap"]),Db=new Set(["cover","suppress","reload","flinch"]),$3=new Set(["cover","suppress","reload"]),Nb=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),kb=8,Z3=1,K3=.1,Ob=1.3,dm=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function Ub({level:t,boxes:e,edges:n,rand:i,tuning:s=X}){let r=()=>s.associate,o=S1(n,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=I1(t.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=_b(),c=b1(s.grenade),h=Mb(t,s),d=new Map,u=()=>!!t.tobble&&s.tobble.enabled>0,f=[],v=[],p=t.overlord||null,m=p?[{id:"overlord",kind:"boss",pos:[p.spots[0].hide[0],0,p.spots[0].hide[1]]},...t.associates]:t.associates,g=m.length,y=m.map(O=>em(O,s.associate,s));for(let O=g;O<kb;O++)y.push(Q0(em({id:`r${O+1}`,pos:[0,0,0]},s.associate,s)));let w=()=>Math.max(g,Math.min(kb,Math.round(s.director.maxEnemies))),M=w(),_=Sd({state:"move",pos:[0,0,0],cover:null,scratch:{}}),S={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},x={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:S,now:0,rand:i,tokenCount:0,events:f,tuning:s,director:s.director,others:y,started:!1,aim:void 0,tobble:null,enemies:y,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null,bossLevel:p,saunasDone:()=>h.allDone()},b={enemies:y,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null,boss:y.find(O=>O.kind==="boss")||null,lobMarkers:[]},R=!1,C=0,L=[0,0],E=!1,k=!1;function I(){d.clear();for(let O of y.slice(0,g)){if(O.kind!=="associate")continue;let Q=null,K=1/0;for(let ve of o){let D=Math.hypot(ve.pos[0]-O.pos[0],ve.pos[1]-O.pos[2]);D<K&&(K=D,Q=ve)}O.point=Q,Q&&d.set(Q.index,O.id)}}I(),b.tobble=x.tobble=u()?am(t.tobble,s.tobble):null;let P=()=>b.tobble&&!b.tobble.downed,U=(O,Q,K=f,ve=!1)=>K.push(ve?{type:"bark",id:O,key:Q,force:ve}:{type:"bark",id:O,key:Q}),z=()=>y.find(O=>O.alive)||y[0];function te(){for(let O of l.held())l.release(O,b.now,s.director)}function $(O){b.started=!0,b.startT=b.now,U(z().id,"lockdown",O)}function ne(O){O.diedAt=b.now,b.kills++,h.noteDeath(O.id)}function q(O,Q,K,ve){!b.started&&O.alive&&O.state!=="unused"&&Q>0&&$(ve),x.events=ve;let D=bb(O,Q,x,K);return x.events=f,D==="kill"&&ne(O),D==="kill"&&K==="head"&&P()&&++C%3===0&&U("tobble","tobbleHeadshot",ve),D==="kill"&&O.kind==="boss"&&j(ve),D}function j(O){for(let Q of y)Q.alive&&Q.kind!=="boss"&&q(Q,1e6,"blast",O);for(let Q of h.list)(Q.state==="dormant"||Q.state==="open")&&(Q.state="closed")}x.hurtRep=(O,Q)=>q(O,Q,"tobble",f),x.reviveDoc=()=>!x.health||!x.health.downed?!1:(x.health.revive(),x.m.revive(),S.downed=!1,f.push({type:"revived"}),!0);function Me(O,Q){let K=S,ve=s.combat;K.pos[0]=O.pos[0],K.pos[1]=O.pos[1],K.pos[2]=O.pos[2];let D=Lb.has(O.state)?Ds(O):null;K.exposed=!!(O.cover&&O.cover.exposed);let T=!!D&&D.kind==="low"&&!K.exposed;K.chest[0]=O.pos[0],K.chest[1]=O.pos[1]+(T?.6:1.2),K.chest[2]=O.pos[2];let G=Sd(O,_,ve).shapes.head.c;K.head[0]=G[0],K.head[1]=G[1],K.head[2]=G[2],K.speed=O.speed(),K.coverNormal=D?D.normal:null,K.downed=!!Q.downed}function J(O,Q){let K=s.director;if(Lb.has(O.state)?S.exposed||(b.hideT+=Q):b.hideT=0,!k||Math.hypot(O.pos[0]-L[0],O.pos[2]-L[1])>K.stayRadius?(L[0]=O.pos[0],L[1]=O.pos[2],k=!0,b.stayT=0):b.stayT+=Q,b.hideT>=K.pushAfter&&!y.some(D=>D.alive&&D.role==="push")){let D=y.filter(G=>G.kind==="associate"&&G.alive&&G.role==="hold"&&Db.has(G.state)&&!l.holds(G.id)).sort((G,re)=>dm(G.pos,S.pos)-dm(re.pos,S.pos)),T=null;for(let G of D){if(G.role="push",kd(G,x)){T=G;break}G.role="hold"}T?(U(T.id,"push"),b.hideT=0):b.hideT=Math.max(0,K.pushAfter-1)}if(b.stayT>=K.flankAfter&&!y.some(D=>D.alive&&D.role==="flank")){let D=null,T=-1/0;for(let G of y){if(G.kind!=="associate"||!G.alive||G.role!=="hold"||!Db.has(G.state)||l.holds(G.id))continue;G.role="flank";let re=kd(G,x);G.role="hold",re&&re.score>T&&(T=re.score,D=G)}D&&(D.role="flank",P()&&U("tobble","tobbleFlank"),U(D.id,"flank")),b.stayT=0}}function ye(){let O=r().reviveRange;for(let Q of y){if(!Q.alive||Q.state!=="downed"||Q.helper)continue;let K=null,ve=1/0;for(let D of y){if(D.kind!=="associate"||!D.alive||!$3.has(D.state)||D.role!=="hold"||l.holds(D.id))continue;let T=dm(D.pos,Q.pos);T<=O&&T<ve&&(ve=T,K=D)}K&&(fb(K,Q,x),U(K.id,"cloneRevive"))}}function Ee(){for(let O=0;O<M;O++){let Q=y[O];if(!Q.claimed&&(Q.state==="unused"||Q.state==="dead"&&b.now-Q.diedAt>=Z3-1e-9))return Q.claimed=!0,Q}return null}function He(){let O=h.step(0,{started:b.started,sinceStart:b.now-b.startT,kills:b.kills,freeSlot:Ee,now:b.now});for(let Q of O){if(f.push(Q),Q.type==="padOpen"){U(Q.id,"padOpen",f,!0),P()&&U("tobble","tobblePad",f,!0);continue}if(Q.type!=="padSpawn")continue;let K=h.list.find(D=>D.id===Q.id),ve=y.find(D=>D.id===Q.enemyId);Nd(ve,K.pos,x,Ce(K))}}let oe=()=>y.reduce((O,Q)=>O+(Q.kind==="trainer"&&Q.alive?1:0),0);function Ce(O){let Q=s.pad,K=O.shareKey&&Number.isFinite(Q[O.shareKey])?Q[O.shareKey]:Q.trainerShare;return K>0&&oe()<s.trainer.maxAlive&&i()<K?"trainer":"associate"}let De=[0,0,0],se=[0,0,0];function Se(O,Q){let K=Q[0]-O.from[0],ve=Q[2]-O.from[2],D=Math.hypot(K,ve);return D>O.reach||D>1e-6&&Math.abs(ci(Math.atan2(K,ve)-O.yaw))>O.arc*Math.PI/360+1e-9?!1:(De[0]=O.from[0],De[1]=O.from[1]+Ob,De[2]=O.from[2],se[0]=Q[0],se[1]=O.from[1]+Ob,se[2]=Q[2],rn(e,De,se))}function _e(O,Q){let K=s.trainer;for(let ve=0;ve<f.length;ve++){let D=f[ve];if(D.type!=="trainerSwing")continue;if(!Q.downed&&Se(D,O.pos)){let G=Q.damage(K.damage);if(G!==null){if(f.push({type:"playerHit",id:D.id,from:D.from,amount:K.damage,result:G,melee:!0}),G==="downed")O.state!=="downed"&&O.down(),te();else if(O.knock){let re=O.pos[0]-D.from[0],ee=O.pos[2]-D.from[2],pe=Math.hypot(re,ee)||1;O.knock(re/pe,ee/pe,K.knockback,K.knockTime)}}}let T=b.tobble;if(T&&!T.downed&&Se(D,T.pos)){let G=oc(T,K.tobbleDamage,x);f.push({type:"tobbleHit",id:D.id,from:D.from,result:G})}}}let W=[0,0,0],be=[0,0,0];function Ne(O,Q,K){let ve=s.grenade,D=0;W[0]=O[0],W[1]=O[1]+.3,W[2]=O[2];let T=(re,ee)=>{let pe=Math.hypot(re[0]-O[0],re[1]-O[1],re[2]-O[2]),Pe=x1(pe,ve);return Pe>0&&rn(e,W,re)?ee(Pe):null};for(let re of y){if(!re.alive||re.state==="executed")continue;let ee=re.shapes.body;be[0]=re.pos[0],be[1]=(ee.a[1]+ee.b[1])/2,be[2]=re.pos[2],T(be,pe=>q(re,pe,"blast",f))==="kill"&&D++}be[0]=Q.pos[0],be[1]=Q.pos[1]+(S.chest[1]-Q.pos[1]<1?.45:.9),be[2]=Q.pos[2],T(be,re=>{let ee=re*ve.selfDamage,pe=K.damage(ee);return pe===null||(f.push({type:"playerHit",id:null,from:[O[0],O[1],O[2]],amount:ee,result:pe}),pe==="downed"&&(Q.state!=="downed"&&Q.down(),te())),null});let G=h.blast(O);for(let re of G)f.push({type:"padClosed",id:re}),U(re,"padClosed");f.push({type:"explode",pos:[O[0],O[1],O[2]],kills:D,closed:G})}function fe(O,Q,K){let ve=O.hostile,D=s.boss,T=O.pos,G=(Pe,he)=>{let ue=Math.hypot(Pe[0]-T[0],Pe[2]-T[2]);return ue<=ve.radius?he*(1-D.lobFalloff*ue/Math.max(ve.radius,1e-6)):0},re=G(Q.pos,ve.damage);if(!K.downed&&re>0){let Pe=K.damage(re);Pe!==null&&(f.push({type:"playerHit",id:ve.id,from:[T[0],T[1],T[2]],amount:re,result:Pe,lob:!0}),Pe==="downed"&&(Q.state!=="downed"&&Q.down(),te()))}let ee=b.tobble,pe=ee&&!ee.downed?G(ee.pos,D.lobTobbleDamage):0;pe>0&&f.push({type:"tobbleHit",id:ve.id,from:[T[0],T[1],T[2]],result:oc(ee,pe,x)}),f.push({type:"lobLand",id:ve.id,pos:[T[0],T[1],T[2]],radius:ve.radius})}function ge(O,Q,K){for(let ve of c.step(O,e))ve.type!=="explode"?f.push(ve):ve.hostile?fe(ve,Q,K):Ne(ve.pos,Q,K)}function Re(O){let Q=s.grenade.gravity,K=Math.max(O.flight,.2),ve=s.grenade.ballRadius,D=[(O.to[0]-O.from[0])/K,(ve-O.from[1]+.5*Q*K*K)/K,(O.to[2]-O.from[2])/K];c.throw(O.from,D,K+.3,{id:O.id,to:[O.to[0],0,O.to[2]],radius:s.boss.lobRadius,damage:s.boss.lobDamage})}function Ue(){for(let O of f)O.type==="bossLob"&&Re(O)}function ze(){let O=b.lobMarkers;O.length=0;let Q=b.boss;Q&&Q.alive&&Q.state==="lobWindup"&&O.push({pos:Q.lobTo,radius:s.boss.lobRadius,t:Q.stateT,windup:!0});for(let K of c.live)K.hostile&&O.push({pos:K.hostile.to,radius:K.hostile.radius,t:0,windup:!1})}function Je(){let O=r();for(let Q of c.live)if(!(Q.fuse>O.diveWarn||Q.hostile))for(let K of y)!K.alive||K.state==="downed"||K.state==="executed"||K.state==="dive"||Q.rolled&&Q.rolled.has(K.id)||Math.hypot(K.pos[0]-Q.pos[0],K.pos[2]-Q.pos[2])>O.diveRadius||((Q.rolled||(Q.rolled=new Set)).add(K.id),i()<(K.kind==="trainer"?s.trainer.diveChance:O.diveChance)&&mb(K,Q.pos,x)&&!Q.barked&&(Q.barked=!0,U(K.id,"dive")))}let st=O=>{let Q=O.point,K=r();return Q.kind==="tall"&&O.pop>0?[Q.pos[0]+Q.tangent[0]*Q.end*K.popShift*O.pop,Q.pos[1]+Q.tangent[1]*Q.end*K.popShift*O.pop]:Q.pos};function Y(O){let Q=s.associate.radius,K=s.associate.height,ve=ee=>ee.kind==="trainer"?Cd(s):ee.kind==="boss"?Z1(s):Q,D=ee=>ee.kind==="trainer"?K*s.trainer.scaleH:ee.kind==="boss"?K*s.boss.scale:K,T=(ee,pe,Pe)=>{if(ee.state==="executed"||ee.kind==="boss")return;let he=Dn(e,ee.pos,[pe,0,Pe],ve(ee),D(ee));ee.pos[0]=he.pos[0],ee.pos[2]=he.pos[2]},G=ee=>ee.state==="executed";for(let ee=0;ee<y.length;ee++){let pe=y[ee];if(!pe.alive)continue;for(let V=ee+1;V<y.length;V++){let de=y[V];if(!de.alive)continue;let ie=de.pos[0]-pe.pos[0],Ie=de.pos[2]-pe.pos[2],xe=Math.hypot(ie,Ie),we=ve(pe)+ve(de);if(xe>=we)continue;xe<1e-6&&(ie=1,Ie=0,xe=1);let Ve=(we-xe)/2,nt=G(de)?2:G(pe)?0:1,ae=G(pe)?2:G(de)?0:1;T(pe,-ie/xe*Ve*nt,-Ie/xe*Ve*nt),T(de,ie/xe*Ve*ae,Ie/xe*Ve*ae)}let Pe=pe.pos[0]-O.pos[0],he=pe.pos[2]-O.pos[2],ue=Math.hypot(Pe,he),ke=ve(pe)+s.move.radius;ue<ke&&(ue<1e-6&&(Pe=1,he=0,ue=1),T(pe,Pe/ue*(ke-ue),he/ue*(ke-ue)))}let re=b.tobble;if(re){let ee=s.tobble.radius,pe=s.tobble.height,Pe=(de,ie)=>{let Ie=Dn(e,re.pos,[de,0,ie],ee,pe);re.pos[0]=Ie.pos[0],re.pos[2]=Ie.pos[2]};for(let de of y){if(!de.alive)continue;let ie=de.pos[0]-re.pos[0],Ie=de.pos[2]-re.pos[2],xe=Math.hypot(ie,Ie),we=ee+ve(de);if(xe>=we)continue;xe<1e-6&&(ie=1,Ie=0,xe=1);let Ve=we-xe,nt=G(de)||de.point&&Nb.has(de.state)?1:.5;Pe(-ie/xe*Ve*nt,-Ie/xe*Ve*nt),T(de,ie/xe*Ve*(1-nt),Ie/xe*Ve*(1-nt))}let he=re.pos[0]-O.pos[0],ue=re.pos[2]-O.pos[2],ke=Math.hypot(he,ue),V=ee+s.move.radius;ke<V&&(ke<1e-6&&(he=1,ue=0,ke=1),Pe(he/ke*(V-ke),ue/ke*(V-ke)))}for(let ee of y){if(!ee.alive||!ee.point||!Nb.has(ee.state))continue;let pe=st(ee);if(Math.hypot(ee.pos[0]-pe[0],ee.pos[2]-pe[1])<=.3)continue;let Pe=Math.hypot(pe[0]-O.pos[0],pe[1]-O.pos[2])>=Q+s.move.radius-.001;b.tobble&&Math.hypot(pe[0]-b.tobble.pos[0],pe[1]-b.tobble.pos[2])<Q+s.tobble.radius-.001&&(Pe=!1);for(let he of y)he===ee||!he.alive||!Pe||Math.hypot(pe[0]-he.pos[0],pe[1]-he.pos[2])<2*Q-.001&&(Pe=!1);if(Pe){ee.pos[0]=pe[0],ee.pos[2]=pe[1];continue}l.holds(ee.id)&&l.release(ee.id,b.now,s.director),ee.mustMove=!0,ee.pop=0,ee.blind=0,ee.state="seek",ee.stateT=0}}let pt=[null];function it(O,Q){let K=r(),ve=[0,0,0];pt[0]=b.tobble;for(let D=0;D<f.length;D++){let T=f[D];if(T.type!=="enemyShot")continue;if(T.accurate&&Q.downed&&T.target!=="tobble"){f.splice(D--,1);continue}let G=oa(T.dir,T.spread,i,ve);if(T.target==="tobble"){let re=b.tobble,ee=kn(T.from,G,K.range,e,pt);if(re&&!re.downed&&(ee.kind==="head"||ee.kind==="body")){let pe=oc(re,T.damage!==void 0?T.damage:K.damage,x);f.push({type:"tobbleHit",id:T.id,from:T.from,result:pe})}f.push({type:"shotFx",from:T.from,to:ee.point,accurate:!0})}else if(T.accurate){let re=C1(T.from,G,K.range,e,O,s.combat),ee=re.point;if(re.kind==="head"||re.kind==="body"){let pe=T.damage!==void 0?T.damage:K.damage,Pe=Q.damage(pe);f.push({type:"playerHit",id:T.id,from:T.from,amount:pe,result:Pe}),Pe==="downed"&&(O.state!=="downed"&&O.down(),te())}f.push({type:"shotFx",from:T.from,to:ee.slice(),accurate:!0})}else{let re=kn(T.from,G,K.range,e,[]);f.push({type:"shotFx",from:T.from,to:re.point,accurate:!1})}}}b.targets=()=>y,b.freeSlot=Ee,b.step=(O,Q)=>{(!(O>0)||!Number.isFinite(O))&&(O=0),O=Math.min(O,K3),f.length=0;for(let G of v)f.push(G);v.length=0;let{m:K,health:ve}=Q;if(b.now+=O,x.now=b.now,x.aim=Q.aim,x.m=K,x.health=ve,!b.started&&K.pos[2]>t.trigger.z&&$(f),x.started=b.started,Me(K,ve),x.playerDowned=S.downed,S.downed){P()||te();for(let G of y)G.role!=="revive"&&(G.role="hold");!E&&b.started&&U(z().id,"downed")}else b.started&&!b.clear&&J(K,O);E=S.downed,b.started&&(ye(),He()),l.expire(b.now,s.director),x.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,ge(O,K,ve),Je(),b.tobble&&(Ib(b.tobble,x,O),ic(b.tobble,s.combat));let D=f.length;for(let G of y)yb(G,x,O);for(let G=D;G<f.length;G++){let re=f[G];if(re.type==="death")ne(y.find(ee=>ee.id===re.id));else if(re.type==="bossSaunas")for(let ee of h.list)Ae(ee.id,f)}Ue(),it(K,ve),_e(K,ve),Y(K);for(let G of y)da(G,s.combat,s);b.tobble&&ic(b.tobble,s.combat),ze();let T=!!b.tobble&&b.tobble.downed&&ve.downed;return T&&!R&&f.push({type:"checkpoint"}),R=T,b.started&&!b.clear&&y.every(G=>!G.alive)&&h.allDone()&&(b.clear=!0,f.push({type:"clear"}),p||U(y[0].id,"clear"),b.tobble&&(um(b.tobble,x),p||U("tobble","tobbleClear"))),f},b.hurt=(O,Q,K="body")=>q(O,Q,K,v),b.bash=O=>{if(!O.alive||O.state==="executed"||O.state==="unused")return null;let Q=q(O,s.melee.bashDamage,"bash",v);return Q==="hit"?(pb(O,x),"hit"):Q==="kill"?"kill":null},b.beginExecution=O=>gb(O,x),b.finishExecution=O=>{x.events=v;let Q=xb(O,x,"execute");return x.events=f,Q==="kill"&&ne(O),Q},b.releaseExecution=O=>vb(O);function Ae(O,Q){let K=h.list.find(ve=>ve.id===O);return!K||K.state!=="dormant"?!1:(K.state="open",K.nextT=b.now+s.pad.interval,Q.push({type:"padOpen",id:O}),U(O,"padOpen",Q,!0),P()&&U("tobble","tobblePad",Q,!0),!0)}return b.openPad=O=>Ae(O,v),b.forceClear=()=>{b.boss&&b.boss.alive&&(q0(b.boss),q(b.boss,1e6,"blast",v));for(let O of y)O.alive&&q(O,1e6,"blast",v);for(let O of h.list)(O.state==="dormant"||O.state==="open")&&(O.state="closed");return!0},b.spawnRep=()=>{let O=Ee();if(!O)return null;let Q=h.list[0];return Nd(O,Q?Q.pos:[0,0,0],x)},b.spawnTrainer=O=>{if(oe()>=s.trainer.maxAlive)return null;let Q=Ee();if(!Q)return null;let K=h.list[0];return Nd(Q,O||(K?K.pos:[0,0,0]),x,"trainer")},b.downRep=O=>{x.events=v;let Q=sm(O,x);return x.events=f,Q==="down"},b.hurtTobble=O=>{if(!b.tobble)return null;x.events=v;let Q=oc(b.tobble,O,x);return x.events=f,Q},b.closePads=()=>{for(let O of h.list)(O.state==="dormant"||O.state==="open")&&(O.state="closed");return!0},b.readyBoss=()=>{b.boss&&b.boss.alive&&q0(b.boss)},b.reserved=d,b.reviveTobble=()=>{if(!b.tobble)return!1;x.events=v;let O=um(b.tobble,x);return x.events=f,O&&ic(b.tobble,s.combat),O},b.throwGrenade=(O,Q)=>c.throw(O,Q),b.reset=()=>{l.reset(),c.reset(),h.reset(),M=w(),y.forEach((O,Q)=>{j0(O,s.associate,s),Q>=g&&Q0(O)}),I(),b.tobble=x.tobble=u()?b.tobble?lm(b.tobble):am(t.tobble,s.tobble):null,R=!1,C=0,x.playerDowned=!1,f.length=0,v.length=0,b.lobMarkers.length=0,b.started=b.clear=!1,b.now=0,b.startT=0,b.kills=0,b.hideT=b.stayT=0,x.now=0,x.started=!1,x.aim=void 0,E=!1,k=!1;for(let O of y)da(O,s.combat,s)},b}function Vd(t,e,n){let i=n[0]-e[0],s=n[2]-e[2],r=ld(t),o=cd(t),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var Fb=t=>Math.max(0,Math.min(1,t));function Bb({hp:t,max:e,downed:n,downT:i,hits:s=[],now:r,fb:o=X.feedback}){let a=n?1:e>0?Fb(1-t/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?Fb(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),f=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,f)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-f))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!n,seconds:n?Math.ceil(Math.max(0,i)):0}}}var J3=Object.freeze({Rep:B.glorpPurple,PA:B.cream,Tobble:B.tobbleMint,Trainer:B.planet,Overlord:"#ffcf3a",Doc:B.cream}),Fs=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Tobble",text:e}))),fm=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Trainer",text:e}))),ac=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Overlord",text:e}))),pm=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),paGate:Object.freeze([{speaker:"PA",text:"Members who attempt to leave will be enrolled in our Loyalty Program."}]),paSmoothie:Object.freeze([{speaker:"PA",text:"The pool is closed. The pool has always been closed."}]),paDesk:Object.freeze([{speaker:"PA",text:"Reminder: re-racking weights is mandatory. Re-racking members is also mandatory."}]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),trainerCharge:fm("ONE MORE REP!","You're not quitting, you're just TIRED!","PAIN IS WEAKNESS LEAVING YOUR WALLET!","NO EXCUSES!"),trainerWindup:fm("HUP!"),trainerDeath:fm("\u2026tell my\u2026 macros\u2026"),bossIntro:ac("Doc Vex! Do come in. Your commitment is so valuable to us."),bossTeam:ac("Have you met our team?"),bossReturn:ac("Let us talk about retention. Again."),bossOffer:ac("One month free.","THREE months!","SIX MONTHS AND A TOWEL!"),bossOfferTobble:Fs("Doc, that's actually a good\u2014"),bossOfferDoc:Object.freeze([Object.freeze({speaker:"Doc",text:"No."})]),bossDeath:ac("Cancellation\u2026 is\u2026 a process\u2026"),tobbleRevive:Fs("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:Fs("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:Fs("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:Fs("Two more reps! I'm good!"),tobbleFlank:Fs("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:Fs("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:Fs("Ooh, you closed your rings!"),tobbleHeadshot:Fs("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function zb(t=()=>X.feedback){let e=1/0,n=0,i=null,s={},r=[],o=l=>{let c=pm[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=pm[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],n=t().barkTime,e=0}return{say(l,c=!1){return!pm[l]||!c&&e<t().barkGap?!1:c&&i&&n>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,n-=l,r.length&&e>=t().barkMinShow&&a(r.shift()))},current:()=>n>0&&i?{speaker:i.speaker,text:i.text,color:J3[i.speaker]||null}:null,reset(){e=1/0,n=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var Hb=4,j3=1.2,Kn=[0,0,0];function Q3(){let t=(e,n,i,s,r)=>{let o=new ct(e,n,i).translate(0,s,0);o.deleteAttribute("uv");let a=new Ze(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new xt(c,3)),o};return Bt([t(.3,.16,.22,.08,B.cream),t(.34,.07,.26,.195,B.playerOrange)],!1)}function eP(t,e,n){return t.accurate&&e?(e(n),n):(n[0]=t.from[0],n[1]=t.from[1],n[2]=t.from[2],n)}function Gb({scene:t,effects:e,sfx:n,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((L,E)=>[L.id,s[E]])),l=new Map(i.enemies.map(L=>[L.id,L])),c=new Map,h=[],d=new Vi(Q3(),Et({vertexColors:!0,rim:0}),Hb);d.name="pickups",d.frustumCulled=!1,d.count=0,t.add(d);let u=new ln,f=0,v=zb(),p=[],m=(L,E)=>Math.sin(Vd(L.yaw,L.pos,E)),g=(L,E)=>Math.min(1,6/Math.max(Math.hypot(E[0]-L.pos[0],E[2]-L.pos[2]),.001)),y=[0,0,0],w=[0,1,0],M=(L,E=1)=>(y[0]=L[0],y[1]=L[1]+E,y[2]=L[2],y);function _(L,E){let k=X.feedback,I=L.kind;if(L.boss){p.push({t:X.ending.deathDelay*.9,pos:[L.pos[0],L.pos[1],L.pos[2]]}),e.gel(M(L.pos,1.5),w,k.gelCount),n.play("kill",k.killVolume,m(E,L.pos)),o.marker&&o.marker("kill");return}if(I==="body"||I==="head")return;let P=M(L.pos),U=I==="execute"?k.killGelCount*2:I==="bleed"?k.gelCount:k.killGelCount;if(e.gel(P,w,U),I!=="bleed"){if(e.receipts(M(L.pos,1.2),k.receiptCount),R(L.pos),I==="tobble"){n.play("kill",k.killVolume*.5,m(E,L.pos));return}o.marker&&o.marker("kill"),n.play(I==="execute"?"finish":"kill",I==="execute"?k.bashVolume:k.killVolume,m(E,L.pos))}}let S=L=>{let E=i.pads.find(k=>k.id===L);return E?E.pos:[0,0,0]};function x(L){let E=null,k=1/0;for(let I of i.enemies){let P=Math.hypot(I.pos[0]-L[0],I.pos[2]-L[2]);P<k&&(k=P,E=I)}return E}function b(L,E){let k=X.feedback,I=X.associate;for(let P of L)if(P.type==="bark")v.say(P.key,!!P.force);else if(P.type==="padOpen")n.play("saunaOpen",k.saunaVolume,m(E,S(P.id)));else if(P.type==="padClosed")n.play("saunaClose",k.saunaVolume,m(E,S(P.id)));else if(P.type==="padSpawn"){let U=S(P.id);for(let z=0;z<4;z++)e.steam([U[0]+(z-1.5)*.25,.1,U[2]])}else if(P.type==="explode"){e.blast(P.pos);let U=Math.hypot(P.pos[0]-E.pos[0],P.pos[2]-E.pos[2]),z=Math.min(1,8/Math.max(U,.001));n.play("boom",k.boomVolume*Math.max(.4,z),m(E,P.pos)),r&&(r.kick(4*z,(Math.random()*2-1)*2*z),r.bump(z))}else if(P.type==="clank")n.play("clank",k.clankVolume*g(E,P.pos),m(E,P.pos));else if(P.type==="tobbleShot"){let U=i.tobble,z=o.tobbleView;z&&U&&U.pop>=.5?z.tip(Kn):(Kn[0]=P.from[0],Kn[1]=P.from[1],Kn[2]=P.from[2]);let te=P.to[0]-Kn[0],$=P.to[1]-Kn[1],ne=P.to[2]-Kn[2],q=Math.hypot(te,$,ne)||1;e.flash(Kn,[te/q,$/q,ne/q]),e.friendlyTracer(Kn,P.to),n.play("tobbleShot",k.tobbleShotVolume*g(E,P.from),m(E,P.from))}else if(P.type==="tobbleHit"){let U=i.tobble;U&&e.gel(U.chest,[P.from[0]-U.chest[0],.3,P.from[2]-U.chest[2]],4)}else if(P.type==="revived")n.play("revive",k.reviveVolume);else if(P.type==="cloneRevive"){let U=l.get(P.id);U&&n.play("revive",k.reviveVolume*.6*g(E,U.pos),m(E,U.pos))}else if(P.type==="down")o.marker&&o.marker("kill"),e.gel(M(P.pos),w,6),n.play("hit",k.hitVolume,m(E,P.pos));else if(P.type==="death")_(P,E);else if(P.type==="bossLob"){let U=l.get(P.id);n.play("throw",k.throwVolume,U?m(E,U.pos):0)}else if(P.type==="lobLand"){e.blast(P.pos),e.receipts(M(P.pos,.6),k.receiptCount);let U=Math.hypot(P.pos[0]-E.pos[0],P.pos[2]-E.pos[2]),z=Math.min(1,8/Math.max(U,.001));n.play("boom",k.boomVolume*Math.max(.4,z),m(E,P.pos)),r&&(r.kick(3*z,(Math.random()*2-1)*2*z),r.bump(z))}else if(P.type==="bossPhase")n.play(P.phase===2?"saunaOpen":"charge",P.phase===2?k.saunaVolume:k.chargeVolume),r&&r.bump(1.5);else if(P.type==="checkpoint")o.restart&&o.restart();else if(P.type==="telegraph"){c.set(P.id,P.time!==void 0?P.time:I.popTime+I.telegraphTime);let U=a.get(P.id),z=l.get(P.id);U&&U.glint(!0),z&&n.play("charge",k.chargeVolume,m(E,z.pos))}else if(P.type==="trainerSwing")n.play("bash",k.bashVolume*g(E,P.from),m(E,P.from));else if(P.type==="shotFx"){let U=x(P.from),z=U&&a.get(U.id);eP(P,z?z.tip:null,Kn);let te=P.to[0]-Kn[0],$=P.to[1]-Kn[1],ne=P.to[2]-Kn[2],q=Math.hypot(te,$,ne)||1;e.enemyFlash(Kn,[te/q,$/q,ne/q]),e.enemyTracer(Kn,P.to);let j=Math.hypot(P.from[0]-E.pos[0],P.from[2]-E.pos[2]);n.play("blaster",k.blasterVolume*Math.min(1,8/Math.max(j,.001)),m(E,P.from))}}function R(L){h.length>=Hb&&h.shift(),h.push({pos:[L[0],L[1],L[2]]}),C()}function C(){d.count=h.length;for(let L=0;L<h.length;L++)u.position.set(h[L].pos[0],h[L].pos[1],h[L].pos[2]),u.rotation.set(0,f*j3+L,0),u.updateMatrix(),d.setMatrixAt(L,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:b,forceBark:L=>v.say(L,!0),bark:()=>v.current(),pan:m,near:g,tick:L=>v.tick(L),update(L){if(L>0){f+=L;for(let E=p.length-1;E>=0;E--){if(p[E].t-=L,p[E].t>0)continue;let k=p.splice(E,1)[0],I=X.feedback;e.gel(M(k.pos,1.5),w,I.killGelCount*3),e.receipts(M(k.pos,2),I.receiptCount*3),n.play("finish",I.bashVolume),r&&r.bump(2)}for(let[E,k]of c)if(k-L<=0){c.delete(E);let I=a.get(E);I&&I.glint(!1)}else c.set(E,k-L);h.length&&C()}},addPickup:R,collect(L,E){let k=0;for(let I=h.length-1;I>=0;I--)Math.hypot(L[0]-h[I].pos[0],L[2]-h[I].pos[2])<=E&&(h.splice(I,1),k++);return k&&C(),k},count:()=>h.length,pickups:()=>h.map(L=>L.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),v.reset(),p.length=0}}}var ma=Object.freeze([Object.freeze({id:"cancelled",tone:"big",lines:Object.freeze(["MEMBERSHIP CANCELLED."])}),Object.freeze({id:"email",tone:"mail",lines:Object.freeze(["We're sorry to see you go!","Your cancellation is confirmed.","A $49.99 cancellation fee has been applied.","Come back anytime \u2014 50% off your first month!"])}),Object.freeze({id:"tobble",tone:"talk",lines:Object.freeze(['Tobble: "Ooh, fifty percent."',"Doc reloads."])}),Object.freeze({id:"thanks",tone:"big",lines:Object.freeze(["GYMS OF WAR \u2014 thanks for playing","We miss you! \u2014 GlorpFit"])})]);function mm(t,e,n){if(!e)return!1;let i=Math.max(e.x0-t[0],0,t[0]-e.x1),s=Math.max(e.z-t[2],0);return Math.hypot(i,s)<=n}function Vb({tuning:t=X}={}){let e=()=>t.ending,n="off",i=0,s=0,r=0,o=l=>l===0?e().card1Time:l===1?e().card2Time:l===2?e().card3Time:1/0;return{get state(){return n},get card(){return r},get cardCount(){return ma.length},get hold(){return n==="desk"?Math.min(1,s/Math.max(e().holdTime,1e-6)):0},get locked(){return n==="cards"||n==="done"},get lit(){return n==="desk"||n==="cards"||n==="done"},start(){return n!=="off"?!1:(n="slump",i=0,s=0,r=0,!0)},reset(){n="off",i=0,s=0,r=0},step(l,c={}){let h=[];return!(l>0)||n==="off"||n==="done"||(i+=l,n==="slump"?i>=e().deathDelay&&(n="desk",i=0,s=0,h.push({type:"deskLit"})):n==="desk"?(s=c.atDesk&&c.hold?s+l:0,s>=e().holdTime-1e-9&&(n="cards",i=0,r=0,h.push({type:"cancelled"},{type:"card",index:0}))):n==="cards"&&(r===ma.length-1?c.press&&i>=e().finalLock&&(n="done",h.push({type:"toTitle"})):(i>=o(r)||c.press&&i>=e().skipLock)&&(r++,i=0,h.push({type:"card",index:r})))),h}}}var gm=.05;function tP({locked:t,device:e,panelOpen:n}){return!!(t||e==="pad"||n)}function Wb(t){return`${t.gap}|${t.endInset}|${t.minLength}`}function nP(t){if(t&&t.has("room"))return{name:"greyRoom",jumped:!1};let e=t&&t.get("arena");return e&&Rn.includes(e)?{name:e,jumped:!0}:{name:Rn[0],jumped:!1}}function iP(t,e,{downed:n=!1,busy:i=!1}={}){return n&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(n||i)&&(t.fire=!1),t}function sP(t){return!(t&&(t.has("room")||t.has("arena")||t.has("skipTitle")))}var rP=2e3,oP=500,aP=500,lP=new Set(["bossLob","lobLand","bossPhase","enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function Xb(){try{return window.localStorage||null}catch{return null}}function Yb({canvas:t,gl:e,params:n}){let i=Su(t,e),s=i.renderer,r=wu(t),o=document.getElementById("cr-readout");o.style.display="none";let a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=oy();l.panelOpen=c.isOpen;let h=new Cr,d=new In(X.camera.fov,1,.05,100),u=Tu();h.add(u.mesh);let f=nP(n),v=zx({storage:f.name==="greyRoom"?null:Xb()}),p=null,m="",g=null,y=null,w=[],M={pos:[0,0,0],yaw:0},_=[],S=[],x=null,b=[],R=new Map,C=null,L=null,E=null,k=null,I=null,P=null,U=[],z=()=>dy(w,{...uy(),exclude:g.coverExclude}),te=Wb(X.cover),$=[],ne=0,q=!1,j=wy({boxes:w,spawn:[0,0,0],coverEdges:[],onAction(F){P&&P.onAction(F)},onState(F,Te){$.push({state:F,from:Te,t:ne,tapped:q,auto:F==="coverSlide"&&!q&&(Te==="move"||Te==="sprint")}),$.length>rP&&$.shift()},onStep(F){J.dip(X.feedback.stepDip),Ee.play("step",X.feedback.stepVolume*(F.sprint?1.25:1))}}),Me=Qy(j);h.add(Me.group);let J=bx(),ye=Xu(),Ee=Sy({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),He=Xb(),oe=Gx(He);function Ce(){Ee.setVolume(oe.volume),X.look.invertY=oe.invertY}Ce();let De=Ty(),se=Vb(),Se=!1,_e=Ry(),W=Uy(h),be=By(document.body),Ne=Ko(1),fe=A1(),ge=_1(),Re=!1,Ue=null,ze=0,Je={restart:()=>{Re=!0},marker:F=>{Ue=F,ze=X.feedback.killMarkerTime},tobbleView:null};function st(){!x||I===x.tobble||(k&&(p.remove(k.group),s0(k.group)),k=x.tobble?d1(x.tobble):null,k&&p.add(k.group),I=x.tobble,Je.tobbleView=k)}function Y(){p&&(s0(p),p=null,k=null,I=null,Je.tobbleView=null)}function pt(F){Y(),m=F,g=F==="greyRoom"?Ku:Ox[F],p=new dt,p.name=`arena-${F}`,h.add(p),y=Tx(g),p.add(y.group),w=y.boxes,M=g.spawn,j.boxes=w,j.coverEdges=z(),_=(g.dummies||[]).map(Te=>{let Xe=Ly(Te),Ct=zy(Xe);return p.add(Ct.group),{dummy:Xe,view:Ct,wasAlive:!0}}),S=_.map(Te=>Te.dummy),x=F==="greyRoom"?null:Ub({level:g,boxes:w,edges:z(),rand:Ko(4242)}),b=x?x.enemies.map(Te=>{let Xe=r1(Te);return p.add(Xe.group),Xe}):[],R=new Map(x?x.enemies.map((Te,Xe)=>[Te,b[Xe]]):[]),C=x?Zy(p):null,L=x?f1(p,x.pads,W):null,E=x?Gb({scene:p,effects:W,sfx:Ee,fight:x,views:b,cam:J,hooks:Je}):null,st(),P=x?E1({mover:j,fight:x,arsenal:_e,bag:ge,cam:J,sfx:Ee,effects:W,views:b,health:fe,playerView:Me,grenadeView:C,boxes:w,hooks:Je}):null,U=x?x.targets():S,y.setGateOpen(!1,!0),it=!1,se.reset(),y.setCancelLit(!1)}let it=!1,Ae=[],O=null;function Q(F,Te="",Xe=1.4,Ct=0){O&&O.t>0&&O.prio>Ct||(O={text:F,kind:Te,t:Xe,prio:Ct})}let K=[],ve={pos:[0,0,0],yaw:0},D=[],T="-",G="-",re=null,ee=null,pe=0,Pe=1,he=[],ue={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},ke=[0,0,0],V=0,de=[0,0,0],ie=null,Ie=!1,xe=null,we=!1,Ve=!1,nt=!1,ae={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1},Oe={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1},$e={melee:!1,interact:!1},Le={melee:!1,grenade:!1,interact:!1},Ke={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},ut={weapon:null,reload:!1,fire:!1,firePressed:!1},yt=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Ot(){let F=i.resize();d.aspect=F.aspect,d.updateProjectionMatrix()}Ot(),window.addEventListener("resize",Ot),t.addEventListener("click",()=>r.requestLock());let qt=()=>{ye.reset(),De.reset()};window.addEventListener("blur",qt),document.addEventListener("pointerlockchange",()=>{r.isLocked()||qt()});let Vt=()=>Ee.unlock();window.addEventListener("pointerdown",Vt);let Ut=()=>{Se=!0};window.addEventListener("keydown",Ut),window.addEventListener("pointerdown",Ut),window.addEventListener("keydown",Vt),window.addEventListener("keydown",F=>{F.repeat||Rp(F.target)||(F.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):F.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function Wt(){fe.reset(),_e.reset(),ge.reset(),ro(M.pos,M.yaw),re=null,ye.reset(),De.reset(),J.recenter(),W.clear(),he.length=0,Ae.length=0,Ue=null,ee=null,ze=0,pe=0,Re=!1}function vn(){Cn(),Q("Your membership has been renewed.","over",3.2,3)}function Cn(){x&&x.reset(),Wt(),E&&E.reset();for(let F of b)F.reset();x&&(P.reset(),C.reset(),L.reset(),st(),k&&k.reset()),v.restart(),y.setGateOpen(!1,!0),it=!1,se.reset(),y.setCancelLit(!1)}function xn(F){pt(F),Wt(),J.snap(M.pos,M.yaw,"normal",1),On=F==="greyRoom"?0:X.run.hoursTime,O=null,E&&F==="smoothie"?E.forceBark("paSmoothie"):E&&F==="desk"&&E.forceBark("paDesk")}let On=0;function cs(){if(x.boss){se.start();return}v.markClear()&&!it&&(it=!0,y.setGateOpen(!0),Ee.play("saunaOpen",X.feedback.saunaVolume),E.forceBark("paGate"))}function Bs(){j.state!=="downed"&&j.down(),_e.cancelReload(),Ee.play("downed",X.feedback.hurtVolume),E&&E.forceBark("downed")}function hs(F){let Te=Se;if(Se=!1,se.state==="off")return;let Xe=g.overlord;for(let Ct of se.step(F,{atDesk:!fe.downed&&mm(j.pos,Xe&&Xe.desk,X.ending.deskReach),hold:Le.interact,press:Te}))lc(Ct),Ct.type==="deskLit"?(y.setCancelLit(!0),Ee.play("saunaOpen",X.feedback.saunaVolume)):Ct.type==="cancelled"?Ee.play("clear",X.feedback.killVolume):Ct.type==="toTitle"&&wr()}function wr(){if(typeof l.toTitle=="function"){l.toTitle();return}v.newRun(),xn(Rn[0])}function lc(F){K.push({t:ne,type:F.type,id:F.id||null,accurate:!!F.accurate,hit:F.type==="playerHit",key:F.key||null,kind:F.kind||null}),K.length>aP&&K.shift()}function cc(F){let Te=X.feedback;ve.pos[0]=j.pos[0],ve.pos[1]=j.pos[1],ve.pos[2]=j.pos[2],ve.yaw=J.yaw;let Xe=x.step(F,{m:j,health:fe,aim:{lens:N.pos,dir:N.dir,active:!!re&&re!=="blind"||j.grenadeAim}});E.handle(Xe,ve);for(let Rt of Xe)if(lP.has(Rt.type)&&lc(Rt),Rt.type==="playerHit"){let vt=Vd(J.yaw,j.pos,Rt.from);Ae.push({t:ne,angle:vt});let fs=Math.random()*2*Math.PI;J.kick(Te.hitKick*Math.cos(fs),Te.hitKick*Math.sin(fs)),Ee.play("hurt",Te.hurtVolume,Math.sin(vt)),P.onPlayerHit(),Rt.result==="downed"&&Bs()}else Rt.type==="clear"&&(Ee.play("clear",Te.killVolume),cs());for(;Ae.length&&ne-Ae[0].t>Te.hitFlashTime;)Ae.shift();let Ct=fe.update(F,{standIn:!x.tobble});if(Ct==="revived"&&j.revive(),Ct==="bleedOut"||Re){vn();return}let Mt=fe.downed?0:E.collect(j.pos,X.combat.pickupRadius);if(Mt){let Rt=_e.ammo.regret.reserve;_e.addReserve("regret",Mt*X.associate.ammoDrop);let vt=Math.round(_e.ammo.regret.reserve-Rt);vt>0&&Q(`+${vt} scoops`,"scoops",1.2,1),Ee.play("pickup",Te.pickupVolume)}}function hc(){let F=ed[v.arena];if(g.boss){let Te=x.boss;return se.state==="slump"?"The Membership Overlord has fallen":se.state==="desk"?"Cancel your membership at the desk":se.locked?"":!Te||!x.started?F:Te.invuln?`Invulnerable! ${Wr("sauna",r.device())}`:`${F}: shoot the Overlord. Head shots count double`}return x.clear?v.gateOpen?`${F}: clear \u2014 head for the GO gate`:`${F}: set complete`:x.pads.some(Te=>Te.state==="open")?Wr("sauna",r.device()):x.started?v.arena==="turnstiles"?"Get past the front desk":`${F}: clear the room`:"Walk in"}let Wd="THE MEMBERSHIP OVERLORD";function Xd(){let F=x&&x.boss;return!F||!x.started||!F.alive?null:{name:Wd,fraction:F.health/X.boss.health,phase:F.phase,invuln:F.invuln,hint:F.invuln?"INVULNERABLE \u2014 close the Spawn Saunas":""}}function Yd(){if(se.state!=="cards"&&se.state!=="done")return null;let F=ma[Math.min(se.card,ma.length-1)];return{card:se.card,lines:F.lines,tone:F.tone,final:se.card===ma.length-1}}function ro(F,Te){j.place(F,Te),J.snap(F,Te,b0(j),Yr(j)),V=j.slams}let N={pos:[0,0,0],dir:[0,0,1],fov:70},Z="normal",me=1,le=0,ce=0,We=0,je=0,Ge=0,Ye=0,tt=0,Fe=window.__cr;Fe.stats=()=>({fps:le,ms:ce,calls:Ge,tris:Ye,scale:i.scale(),characters:1+b.length+(k?1:0)}),Fe.player=()=>{let F=j.cover;return{pos:j.pos.slice(),state:j.state,speed:j.speed(),facing:j.facing,entries:j.entries,cover:F?{id:F.edge.id,kind:F.edge.kind,t:F.t,length:F.edge.length,pop:F.pop,exposed:F.exposed}:null,slams:j.slams,steps:j.steps,blind:F?F.blind:0,firing:!!j.firing}},Fe.gun=()=>{let F=_e.current(),Te=_e.ammo[F],Xe=_e.reload,Ct=X.weapons[F];return{id:F,slot:_e.slot,mag:Te.mag,reserve:Te.reserve,boost:Te.boost,reload:Xe?{u:Xe.t/Math.max(Ct.reloadTime,X.combat.minReloadTime),press:Xe.press}:null,switching:_e.switching>0,spread:_e.spreadOf(re||"hip"),stance:re}},Fe.dummies=()=>S.map(F=>({id:F.id,health:F.health,alive:F.alive,pos:F.pos.slice()})),Fe.level=()=>g.name||m,Fe.run=()=>({arena:v.arena,index:v.index,checkpoint:v.checkpoint,phase:v.phase,cleared:v.cleared,gateOpen:v.gateOpen,fade:v.fade,saved:v.saved,hours:On>0?e0(v.checkpoint):null}),Fe.gate=()=>g.exit?{pos:g.exit.pos.slice(),yaw:g.exit.yaw,w:g.exit.w,open:it,openness:y.gate?y.gate.openness():0}:null,Fe.go=F=>Rn.includes(F)?(v.goTo(t0(F)),xn(F),!0):!1,Fe.clearArena=()=>x?x.forceClear():!1,Fe.gpu=()=>{let F=s.info;return{geometries:F.memory.geometries,textures:F.memory.textures,programs:(F.programs||[]).length,calls:Ge,tris:Ye}},Fe.boss=()=>{let F=x&&x.boss;return F?{state:F.state,phase:F.phase,invuln:F.invuln,health:F.health,alive:F.alive,pos:F.pos.slice(),pop:F.pop,saunasOpen:F.saunasOpen,markers:x.lobMarkers.map(Te=>({pos:Te.pos.slice(),radius:Te.radius}))}:null},Fe.ending=()=>({state:se.state,card:se.card,hold:se.hold,lit:se.lit}),Fe.hurtBoss=(F,Te="body")=>{let Xe=x&&x.boss;return Xe?x.hurt(Xe,F,Te):null},Fe.closePads=()=>x?x.closePads():!1,Fe.bossReady=()=>x&&x.boss?(x.readyBoss(),!0):!1,Fe.fight=()=>x?{started:x.started,clear:x.clear,tokens:x.tokens.held(),pickups:E.count(),pickupPos:E.pickups(),enemies:x.enemies.filter(F=>F.state!=="unused").map(F=>({id:F.id,slot:x.enemies.indexOf(F),kind:F.kind||"associate",state:F.state,health:F.health,alive:F.alive,pos:F.pos.slice(),holds:x.tokens.holds(F.id),role:F.role,point:F.point?F.point.index:null,pop:F.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},Fe.tobble=()=>{let F=x&&x.tobble;return F?{state:F.state,hp:F.hp,downed:F.downed,pos:F.pos.slice(),point:F.point?F.point.index:null}:null},Fe.pads=()=>x?x.pads.map(F=>({id:F.id,state:F.state,spawned:F.spawned,alive:F.alive})):[],Fe.grenades=()=>({count:ge.count,live:x?x.grenades.live.map(F=>({pos:F.pos.slice(),fuse:F.fuse})):[]}),Fe.aimThrow=(F,Te)=>P?P.aimThrow(F,Te):!1,Fe.hurtTobble=F=>x?x.hurtTobble(F):null,Fe.spawnTrainer=F=>{let Te=x&&x.spawnTrainer(F);return Te?Te.id:null},Fe.downRep=F=>{let Te=x&&x.enemies.find(Xe=>Xe.id===F);return!!Te&&x.downRep(Te)},Fe.openPad=F=>x?x.openPad(F):!1,Fe.spawnRep=()=>{let F=x&&x.spawnRep();return F?F.id:null},Fe.health=()=>({hp:fe.hp,max:X.health.max,downed:fe.downed,downT:fe.downT}),Fe.hurt=F=>{fe.damage(F)==="downed"&&Bs()},Fe.god=F=>{X.health.godMode=F?1:0},Fe.fightLog=()=>K.map(F=>({...F})),Fe.clearFightLog=()=>{K.length=0},Fe.restart=()=>Cn(),Fe.shots=()=>D.map(F=>({...F})),Fe.clearShots=()=>{D.length=0},Fe.setGun=(F,Te)=>_e.set(F,Te),Fe.look=(F,Te)=>{J.yaw=F,J.pitch=Te},Fe.camera=()=>{let F=N;return{pos:F.pos.slice(),fov:F.fov,inside:ta(w,F.pos,.1),mode:Z,side:me,yaw:J.yaw,pitch:J.pitch}},Fe.transitions=()=>$.map(F=>({...F})),Fe.clearTransitions=()=>{$.length=0},Fe.coverTarget=()=>{let F=xe||{moveX:ie?ie.moveX:0,moveY:ie?ie.moveY:0},Te=Yl(j.coverEdges,w,j.pos,y0(j,{moveX:F.moveX||0,moveY:F.moveY||0,camYaw:J.yaw},[0,0]),J.yaw,X.cover,X.move.radius);return Te?{id:Te.edge.id,kind:Te.edge.kind,dist:Te.dist}:null},Fe.place=F=>{let Te=F==="spawn"?M:g.features[F];Te&&ro(Te.pos,Te.yaw)},Fe.at=(F,Te,Xe=0)=>ro([F,0,Te],Xe),Fe.drive=F=>{if(!F){we?Ve=!0:xe=null;return}F.fire&&!(xe&&xe.fire)&&(Oe.fire=!0),F.melee&&!(xe&&xe.melee)&&(Oe.melee=!0),xe=F,Ve=!1,F.tap&&(we=!0),F.reload&&(Oe.reload=!0),F.interact&&(Oe.interact=!0),F.weapon&&(Oe.weapon=F.weapon)};function St(F){if(xe){Ke.moveX=xe.moveX||0,Ke.moveY=xe.moveY||0,Ke.sprint=!!xe.sprint,Ke.aim=!!xe.aim,Ke.tap=we;let Te=De.update(!!xe.fire,Oe.fire,!0);Oe.fire=!1,Ke.fire=Te.fire,ut.fire=Te.fire,ut.firePressed=Te.firePressed,ut.reload=Oe.reload,ut.weapon=Oe.weapon,Oe.reload=!1,Oe.weapon=null,Le.melee=!!xe.melee,Le.grenade=!!xe.grenade,Le.interact=!!xe.interactHeld,we&&(we=!1,Ve&&(xe=null,Ve=!1))}else{let Te=ie.held;Ke.moveX=ie.moveX,Ke.moveY=ie.moveY,Ke.tap=ye.update(Te.cover,ae.cover,F,X.move.tapMax),Ke.sprint=Te.sprint||ye.holding(),Ke.aim=Te.aim;let Xe=De.update(Te.fire,ae.fire,!0);Ke.fire=Xe.fire,ut.fire=Xe.fire,ut.firePressed=Xe.firePressed,ut.reload=ae.reload,ut.weapon=ae.weapon,Le.melee=Te.melee,Le.grenade=Te.grenade,Le.interact=Te.interact}return $e.interact=ae.interact||Oe.interact,$e.melee=ae.melee||Oe.melee,Ke.grenade=Le.grenade,Ke.interactHeld=Le.interact,ae.cover=!1,ae.fire=!1,ae.reload=!1,ae.weapon=null,ae.interact=!1,ae.melee=!1,Oe.interact=!1,Oe.melee=!1,Ke.camYaw=J.yaw,q=Ke.tap,Ke}let Qe=F=>F.toFixed(1);function Tt(){let F=j.cover;if(F)return`cover: ${F.edge.kind} ${F.edge.id}  t ${F.t.toFixed(2)}/${F.edge.length.toFixed(2)}  pop ${F.pop.toFixed(2)}`;let Te=Fe.coverTarget();return Te?`tap grabs: ${Te.kind} ${Te.dist.toFixed(1)} m`:"tap grabs: nothing"}function nn(){let F=Fe.gun(),Te=F.id;return`gun: ${hd[Te].name} ${F.mag}/${X.weapons[Te].infiniteReserve>0?"\u221E":F.reserve}  ${F.stance||"-"}  spread ${F.spread.toFixed(1)}`}function Ft(){let F=r.padStatus(),Te=[x?`GYMS OF WAR \u2014 ${ed[v.arena].toUpperCase()}`:"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(x&&Te.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble"),Te.push("Sound starts after a click or key","",`${j.state}   ${j.speed().toFixed(2)} m/s`,Tt(),nn()),x){Te.push(`fight: ${x.enemies.filter(Mt=>Mt.alive).length}/${x.enemies.filter(Mt=>Mt.state!=="unused").length}  tokens ${x.tokens.held().join(",")||"-"}  hp ${fe.hp.toFixed(0)}`),Te.push(`health: ${fe.hp.toFixed(0)}/${X.health.max}  ${fe.downed?`downed ${fe.downT.toFixed(1)}`:"-"}`);let Xe=x.tobble,Ct=x.pads[0];Te.push(`tobble: ${Xe?`${Xe.state} hp ${Xe.hp.toFixed(0)}`:"off"}`,`sauna: ${Ct?`${Ct.state} ${Ct.spawned}/${X.pad.total}`:"-"}   kettlebells ${ge.count}`)}else Te.push(`dummies: ${S.filter(Xe=>Xe.alive).length}/${S.length}  last: ${T} ${G}`);Te.push(`${Math.round(le)} fps   ${Qe(ce)} ms   scale ${i.scale()}`,`${Ge} draw calls   ${Ye} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${F}`,"` tuning panel    ?look look test    H show/hide this read-out"),o.textContent=Te.join(`
`)}let Dt=F=>X.feedback[F];function yn(F){F.type==="shot"?Lt(F):F.type==="reloadStart"?Ee.play("magOut",Dt("reloadVolume")):F.type==="reloadPress"?(Ee.play(F.result,Dt("reloadVolume")),ee=F.result,pe=0):F.type==="reloadDone"?Ee.play("magIn",Dt("reloadVolume")):F.type==="dry"&&Ee.play("dry",Dt("reloadVolume"))}function et(F,Te){Dy(F.dummy,Te),F.dummy.alive&&!F.wasAlive&&F.view.respawn(),F.wasAlive=F.dummy.alive}let Pn=[0,0,0];function Lt(F){let Te=X.weapons[F.id],Xe=j.cover?j.cover.edge:null;ud(j,re,J.yaw,X.combat,ke);let Ct=Py({lens:N.pos,view:N.dir,muzzle:ke,spreadDeg:F.spread,range:Te.range,boxes:w,targets:U,ignoreBox:Xe?Xe.boxIndex:-1,rand:Ne,aimed:re==="aim"}),Mt=Ct.hit,Rt=Mt.target,vt=null;Rt&&(vt=x?x.hurt(Rt,S0(Te,Mt.kind,F.mult),Mt.kind==="head"?"head":"body"):Ny(Rt,S0(Te,Mt.kind,F.mult))),T=Mt.kind,G=Rt?Rt.id:"-",D.push({t:ne,kind:Mt.kind,target:Rt?Rt.id:null,point:Mt.point.slice(),stance:re}),D.length>oP&&D.shift();let fs=[Ct.dir[0],Ct.dir[1],Ct.dir[2]];if(he.push({id:F.id,from:ke.slice(),dir:fs,hit:Mt,target:Rt,result:vt}),vt==="kill"&&!x){let $d=_.find(uc=>uc.dummy===Rt);$d.wasAlive=!1}}function us(F){let Te=X.weapons[F.id],Xe=X.feedback,Ct=Me.gunTip(Pn);J.kick(Te.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Te.kickYaw),W.flash(Ct,F.dir),W.tracer(Ct,F.hit.point),Ee.play(F.id==="regret"?"rifle":"pistol",Xe.shotVolume);let Mt=[-F.dir[0],-F.dir[1],-F.dir[2]];if(F.hit.kind==="world")W.spark(F.hit.point,Mt);else if(F.target){let Rt=x?R.get(F.target):_.find(vt=>vt.dummy===F.target).view;F.result==="kill"?(x?(Rt.death(),E.addPickup(F.target.pos)):Rt.burst(),W.gel(F.hit.point,Mt,Xe.killGelCount),W.receipts(F.target.pos.map((vt,fs)=>fs===1?vt+1.2:vt),Xe.receiptCount),Ue="kill",ze=Xe.killMarkerTime,Ee.play("kill",Xe.killVolume)):F.result==="down"?(W.gel(F.hit.point,Mt,Xe.gelCount),Ue="kill",ze=Xe.killMarkerTime,Ee.play("hit",Xe.hitVolume)):(x||Rt.hit(F.hit.kind),W.gel(F.hit.point,Mt),Ue=F.hit.kind,ze=Xe.hitMarkerTime,x&&F.hit.kind==="head"&&Q("PR!","pr",.9,0),Ee.play(F.hit.kind==="head"?"head":"hit",Xe.hitVolume))}}let bn=Mu({before(F){ie=r.poll();let Te=Vn.open;Vn.pad(F);let Xe=Te||Vn.open;if(!Xe&&ie.pressed.pause&&!on&&!xe&&qd(),Zt){let Rt=ie.held;if(At.some(vt=>Rt[vt]))for(let vt of At)Rt[vt]=!1,ie.pressed[vt]=!1;else Zt=!1}if(Xe)for(let Rt of At)ie.pressed[Rt]=!1;Object.values(ie.pressed).some(Boolean)&&(Se=!0);let Ct=!!xe||we;if(Ie=!Xe&&!Vn.open&&(Ct||tP({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()})),a.hidden=Ie||Xe||Vn.open,!Ie){ye.reset(),De.reset(),ae.cover=!1,ae.fire=!1,ae.reload=!1,ae.weapon=null,ae.interact=!1,ae.melee=!1;return}let Mt=Math.min(F,gm);nt=ie.held.aim||xe&&xe.aim,J.look(ie.lookDX*oe.mouseSens,ie.lookDY*oe.mouseSens,ie.lookX,ie.lookY,Mt,nt,Pe*oe.padSens),ie.pressed.cover&&(ae.cover=!0),ie.pressed.fire&&(ae.fire=!0),ie.pressed.reload&&(ae.reload=!0),ie.pressed.interact&&(ae.interact=!0),ie.pressed.melee&&(ae.melee=!0);for(let[Rt,vt]of yt)ie.pressed[Rt]&&(ae.weapon=vt)},step(F){if(!Ie)return;let Te=Wb(X.cover);Te!==te&&(te=Te,j.coverEdges=z()),ne+=F;let Xe=St(F);if(iP(Xe,ut,{downed:!!x&&fe.downed,busy:_e.reload!==null||_e.switching>0}),(v.fading||se.locked)&&(Xe.moveX=0,Xe.moveY=0,Xe.tap=!1,Xe.sprint=!1,Xe.fire=!1,Xe.grenade=!1,ut.fire=!1,ut.firePressed=!1),P){let Mt=se.locked;P.step(F,{meleeHeld:Le.melee&&!Mt,meleePressed:$e.melee&&!Mt,grenadeHeld:Le.grenade&&!Mt,interactHeld:Le.interact&&!Mt,interactPressed:$e.interact&&!Mt,device:r.device(),camYaw:J.yaw,camPitch:J.pitch}),P.busy()&&(ut.fire=!1,ut.firePressed=!1,Xe.fire=!1)}j.update(Xe,F),re=Cy(j);let Ct=_e.update(ut,re,F);for(let Mt of Ct)yn(Mt);x&&(E.tick(F),cc(F),hs(F));for(let Mt of _)et(Mt,F);if(ky(j.pos,g.ammoCrates,X.combat.crateRadius)){let Mt=_e.ammo.regret.reserve;_e.refill(),ge.refill();let Rt=Math.round(_e.ammo.regret.reserve-Mt);Rt>0&&Q(`+${Rt} scoops`,"scoops",1.4,1)}Re&&vn(),x&&it&&!v.fading&&Bx(g.exit,j.pos)&&v.touchGate()&&Ee.play("clear",X.feedback.killVolume)},render(F,Te){let Xe=Ie?Math.min(Te,gm):0;for(let _n of v.step(Math.min(Te,gm)))_n.type==="swap"&&(xn(_n.to),Q("Progress photo saved.","photo",2.6,2));On>0&&Ie&&(On=Math.max(0,On-Xe)),O&&O.t>0&&(O.t-=Xe),ds(v.fade),ue.shot=he.length>0,ue.dir=N.dir,ue.stance=re,ue.weapon=_e.current(),ue.kettlebell=!!P&&P.armed(),Me.update(F,Xe,ue);for(let _n of _)_n.view.update(Xe);for(let _n of b)_n.update(F,Xe);E&&(E.update(Xe),C.update(x.grenades.live,F,Xe,x.lobMarkers),L.update(Xe),k&&(k.group.visible=!!x.tobble,x.tobble&&k.update(F,Xe)));let Ct=j.pos,Mt=j.prevPos;for(let _n=0;_n<3;_n++)de[_n]=Mt[_n]+(Ct[_n]-Mt[_n])*F;j.slams>V&&(V=j.slams,J.bump(),Ee.play("thud",X.cover.thudVolume));let Rt=b0(j);if(Rt==="aim"&&Z!=="aim"){let _n=j.cover?j.cover.edge:null;J.hold(kn(N.pos,N.dir,X.camera.holdRange,w,U,{ignoreBox:_n?_n.boxIndex:-1}).point)}Z=Rt,me=Yr(j);let vt=J.update(Xe,{target:de,mode:Z,side:me},w);N.pos[0]=vt.pos[0],N.pos[1]=vt.pos[1],N.pos[2]=vt.pos[2],N.fov=vt.fov,N.dir[0]=vt.dir[0],N.dir[1]=vt.dir[1],N.dir[2]=vt.dir[2],d.fov!==vt.fov&&(d.fov=vt.fov,d.updateProjectionMatrix()),Me.fadeHeadFor(vt.pos,X.camera.headHideDist,X.camera.headHideMargin),d.position.set(vt.pos[0],vt.pos[1],vt.pos[2]),d.lookAt(vt.pos[0]+vt.dir[0],vt.pos[1]+vt.dir[1],vt.pos[2]+vt.dir[2]),on&&$b(Te);for(let _n of he)us(_n);he.length=0,W.update(Xe),ze-=Xe,ze<=0&&(Ue=null),ee&&(pe+=Xe,pe>=X.feedback.reloadResultTime&&(ee=null));let fs=j.cover?j.cover.edge:null,$d=kn(N.pos,N.dir,100,w,U,{ignoreBox:fs?fs.boxIndex:-1});Pe=r.device()==="pad"&&$d.target?X.look.pad.assist:1;let uc=!!j.cover&&j.cover.pop<.5,Zb=re||(j.cover&&(j.cover.pop>0||uc)?"aim":"hip"),ym=x?Bb({hp:fe.hp,max:X.health.max,downed:fe.downed,downT:fe.downT,hits:Ae,now:ne}):null;be.render(Fy({arsenal:_e,stance:re,firing:Ke.fire,covered:uc,device:r.device(),spreadDeg:_e.spreadOf(Zb),fov:d.fov,viewportH:t.clientHeight||window.innerHeight,marker:Ue,reloadFlash:ee,face:ym,bark:E?E.bark():null,objective:x?hc():"",boss:Xd(),ending:Yd(),pop:O&&O.t>0?O:null,banner:x?fe.downed?{title:`You've hit a plateau ${ym.downed.seconds}`,hint:Wr(x.tobble&&!x.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:P.giveUpFrac()}:x.clear&&!x.boss?{title:"SET COMPLETE",hint:`${v.gateOpen?"Head for the GO gate!  ":"Rest 60 seconds!  "}${r.device()==="pad"?"X":"E"} for another set`}:null:null,grenades:x?ge.count:null,action:se.state==="desk"&&mm(j.pos,g.overlord&&g.overlord.desk,X.ending.deskReach)?{text:Wr("cancel",r.device()),hold:se.hold}:P?P.prompt():null,hours:On>0?e0(v.checkpoint):""})),u.update(performance.now()/1e3),y.update(Xe),s.render(h,d),Ge=s.info.render.calls,Ye=s.info.render.triangles,We++,je+=Te,je>=1&&(le=We/je,ce=je/We*1e3,We=0,je=0),tt+=Te,tt>=.1&&(tt=0,Ft()),i.frameDone(Te*1e3)}});n&&n.has("tune")&&c.toggle();let zs=document.createElement("div");zs.id="cr-fade",document.body.appendChild(zs);let wi=-1;function ds(F){let Te=Math.round(F*100);Te!==wi&&(wi=Te,zs.style.opacity=(Te/100).toFixed(2))}let At=["cover","fire","aim","melee","interact","grenade","reload","sprint"],Zt=!1,on=!1,Gt=0,an=Yx(He),di=()=>{try{document.exitPointerLock&&document.exitPointerLock()}catch{}};function oo(){Zt=!0,on=!1,r.requestLock()}function qd(){Vn.open||on||(di(),Vn.showPause())}function xm(){v.restart(),se.reset(),xn(Rn[0]),On=0,O=null,on=!0,di(),Vn.showTitle()}let Vn=ey({settings:oe,saved:()=>td(He),arenaTitle:F=>ed[Rn[F]]||"",onSettings(F){oe=F,Ce(),n0(He,oe)},actions:{continue(){v.goTo(td(He)),xn(v.arena),oo()},newRun(){v.newRun(),xn(Rn[0]),an?oo():(an=!0,qx(He),on=!1,Vn.showIntro(oo))},back(){window.location.href="../../index.html"},resume(){Zt=!0,r.requestLock()},restart(){Cn(),Zt=!0,r.requestLock()},quit(){xm()}}});l.toTitle=()=>{v.newRun(),xm()},document.addEventListener("pointerlockchange",()=>{r.isLocked()||Vn.open||on||l.panelOpen()||xe||r.device()!=="pad"&&qd()});let qb=()=>w.find(F=>F.kind==="floor");function $b(F){Gt+=F*X.run.attractSpeed;let Te=qb();if(!Te)return;let Xe=(Te.min[0]+Te.max[0])/2,Ct=(Te.min[2]+Te.max[2])/2,Mt=(Te.max[0]-Te.min[0])/2+X.run.attractMargin,Rt=(Te.max[2]-Te.min[2])/2*.8+X.run.attractMargin;d.position.set(Xe+Math.cos(Gt)*Mt,X.run.attractHeight,Ct+Math.sin(Gt)*Rt),d.lookAt(Xe,1,Ct)}Fe.menu=()=>({open:Vn.open,screen:Vn.screen,items:Vn.items(),onTitle:on,settings:{...oe}}),Fe.menuChoose=F=>Vn.choose(F),Fe.pause=()=>qd(),Fe.setSettings=F=>{oe={...oe,...F},Ce(),n0(He,oe)},f.name!=="greyRoom"&&f.jumped?(v.goTo(t0(f.name)),xn(f.name)):xn(f.name==="greyRoom"?"greyRoom":Rn[0]),sP(n)&&(on=!0,On=0,Vn.showTitle()),ie=r.poll(),J.update(0,{target:M.pos,mode:"normal",side:1},w),Ft(),bn.start()}var cP={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function vm(t,e){window.__cr.error={kind:t,detail:e||""},document.documentElement.dataset.crError=t;let n=document.getElementById("cr-error");n&&(n.textContent="",n.appendChild(document.createTextNode(cP[t])),t==="boot"&&e&&(n.appendChild(document.createElement("br")),n.appendChild(document.createTextNode(e))),n.hidden=!1)}window.addEventListener("error",t=>{window.__cr.error||vm("boot",t.message)});function hP(){let t=document.getElementById("cr-canvas"),e=t.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){vm("webgl");return}let n=new URLSearchParams(location.search);n.has("look")?mx({canvas:t,gl:e}):Yb({canvas:t,gl:e,params:n}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{hP()}catch(t){vm("boot",t&&t.message)}})();

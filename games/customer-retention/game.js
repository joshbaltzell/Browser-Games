/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var pp=0,vu=1,mp=2;var Ko=1,gp=2,zr=3,ds=0,$t=1,$n=2,js=0,Hr=1,_u=2,yu=3,Mu=4,xp=5;var Qs=100,vp=101,_p=102,yp=103,Mp=104,bp=200,Sp=201,wp=202,Tp=203,bu=204,Su=205,Ep=206,Ap=207,Rp=208,Cp=209,Pp=210,Ip=211,Lp=212,Dp=213,Np=214,ll=0,cl=1,hl=2,Cr=3,ul=4,dl=5,fl=6,pl=7,wu=0,Op=1,Up=2,vi=0,Tu=1,Eu=2,Au=3,Ru=4,Cu=5,Pu=6,Iu=7;var Lu=300,er=301,Gr=302,Xl=303,Yl=304,ml=1e3,mi=1001,gl=1002,sn=1003,Fp=1004;var Jo=1005;var wn=1006,ql=1007;var Gi=1008;var Hn=1009,Du=1010,Nu=1011,Vr=1012,$l=1013,oi=1014,Zn=1015,ai=1016,Zl=1017,Kl=1018,tr=1020,Ou=35902,Uu=35899,Fu=1021,ku=1022,li=1023,Bi=1026,Vi=1027,Jl=1028,jl=1029,fs=1030,Ql=1031;var ec=1033,jo=33776,Qo=33777,ea=33778,ta=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37488,cc=37489,na=37490,hc=37491,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,vc=37815,_c=37816,yc=37817,Mc=37818,bc=37819,Sc=37820,wc=37821,Tc=36492,Ec=36494,Ac=36495,Rc=36283,Cc=36284,ia=36285,Pc=36286;var Mo=2300,xl=2301,ol=2302,cu=2303,hu=2400,uu=2401,du=2402;var kp=3200;var Bu=0,Bp=1,Wi="",ln="srgb",bo="srgb-linear",So="linear",wt="srgb";var al=7680;var zp=519,Hp=512,Gp=513,Vp=514,zu=515,Wp=516,Xp=517,Hu=518,Gu=519,Yp=35044,Wr=35048;var Vu="300 es",Yn=2e3,wo=2001;function Ox(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ux(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qp(){let n=To("canvas");return n.style.display="block",n}var kf={},Pr=null;function Wu(...n){let e="THREE."+n.shift();Pr?Pr("log",e,...n):console.log(e,...n)}function $p(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=$p(n);let e="THREE."+n.shift();if(Pr)Pr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=$p(n);let e="THREE."+n.shift();if(Pr)Pr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function go(...n){let e=n.join(" ");e in kf||(kf[e]=!0,rt(...n))}function Zp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Kp={[ll]:ll,[hl]:fl,[ul]:ul,[Cr]:dl,[cl]:cl,[fl]:hl,[pl]:pl,[dl]:Cr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=1234567,xo=Math.PI/180,Ir=180/Math.PI;function nr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Xu(n,e){return(n%e+e)%e}function Fx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function kx(n,e,t){return n!==e?(t-n)/(e-n):0}function vo(n,e,t){return(1-t)*n+t*e}function Bx(n,e,t,i){return vo(n,e,1-Math.exp(-t*i))}function zx(n,e=1){return e-Math.abs(Xu(n,e*2)-e)}function Hx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wx(n,e){return n+Math.random()*(e-n)}function Xx(n){return n*(.5-Math.random())}function Yx(n){n!==void 0&&(Bf=n);let e=Bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qx(n){return n*xo}function $x(n){return n*Ir}function Zx(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Kx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),u=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*u,a*c);break;case"YXY":n.set(l*u,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*u,a*h,a*c);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jp(n,e){if(e.constructor===Float32Array)return n;let t=qu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function jp(n,e){if(e.constructor===Float32Array)return n;let t=qu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ic={DEG2RAD:xo,RAD2DEG:Ir,generateUUID:nr,clamp:ut,euclideanModulo:Xu,mapLinear:Fx,inverseLerp:kx,lerp:vo,damp:Bx,pingpong:zx,smoothstep:Hx,smootherstep:Gx,randInt:Vx,randFloat:Wx,randFloatSpread:Xx,seededRandom:Yx,degToRad:qx,radToDeg:$x,isPowerOfTwo:Zx,ceilPowerOfTwo:Kx,floorPowerOfTwo:Yu,setQuaternionFromProperEuler:Jx,normalize:jp,denormalize:Jp},Qu=class Qu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;var He=Qu,Tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],u=r[o+1],m=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==u||h!==m){let p=l*d+c*u+h*m+f*x;p<0&&(d=-d,u=-u,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),w=Math.sin(_);g=Math.sin(g*_)/w,a=Math.sin(a*_)/w,l=l*g+d*a,c=c*g+u*a,h=h*g+m*a,f=f*g+x*a}else{l=l*g+d*a,c=c*g+u*a,h=h*g+m*a,f=f*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],d=r[o+1],u=r[o+2],m=r[o+3];return e[t]=a*m+h*f+l*u-c*d,e[t+1]=l*m+h*d+c*f-a*u,e[t+2]=c*m+h*u+a*d-l*f,e[t+3]=h*m-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),d=l(i/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"YZX":this._x=d*h*f+c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f-d*u*m;break;case"XZY":this._x=d*h*f-c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f+d*u*m;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ed=class ed{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ed.prototype.isVector3=!0;var k=ed,Hh=new k,zf=new Tn,td=class td{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],m=i[8],x=s[0],p=s[3],g=s[6],_=s[1],w=s[4],M=s[7],b=s[2],S=s[5],v=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*p+a*w+l*S,r[6]=o*g+a*M+l*v,r[1]=c*x+h*_+f*b,r[4]=c*p+h*w+f*S,r[7]=c*g+h*M+f*v,r[2]=d*x+u*_+m*b,r[5]=d*p+u*w+m*S,r[8]=d*g+u*M+m*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,m=t*f+i*d+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gh.makeScale(e,t)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gh.makeRotation(-e)),this}translate(e,t){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};td.prototype.isMatrix3=!0;var at=td,Gh=new at,Hf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jx(){let n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?So:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bo]:{primaries:e,whitePoint:i,transfer:So,toXYZ:Hf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Hf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var _t=jx();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var pr,vl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=To("canvas")),pr.width=e.width,pr.height=e.height;let s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qx=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vh(s[o].image)):r.push(Vh(s[o]))}else r=Vh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var ev=0,Wh=new k,En=class n extends gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mi,s=mi,r=wn,o=Gi,a=li,l=Hn,c=n.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=nr(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Lu;En.DEFAULT_ANISOTROPY=1;var nd=class nd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(u+1)/2,b=(g+1)/2,S=(h+d)/4,v=(f+x)/4,y=(m+p)/4;return w>M&&w>b?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=v/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=v/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(f-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nd.prototype.isVector4=!0;var Gt=nd,_l=class extends gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new En({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends _l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Eo=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Wl=class Wl{constructor(e,t,i,s,r,o,a,l,c,h,f,d,u,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,d,u,m,x,p)}set(e,t,i,s,r,o,a,l,c,h,f,d,u,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,m=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,m=c*h,x=c*f;t[0]=d+x*a,t[4]=m*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,m=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,m=a*h,x=a*f;t[0]=l*h,t[4]=m*c-u,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=u*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=m*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+m,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,u=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=u*f-m,t[2]=m*f-u,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tv,e,nv)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ns.crossVectors(i,Fn),ns.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ns.crossVectors(i,Fn)),ns.normalize(),Fa.crossVectors(Fn,ns),s[0]=ns.x,s[4]=Fa.x,s[8]=Fn.x,s[1]=ns.y,s[5]=Fa.y,s[9]=Fn.y,s[2]=ns.z,s[6]=Fa.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],m=i[2],x=i[6],p=i[10],g=i[14],_=i[3],w=i[7],M=i[11],b=i[15],S=s[0],v=s[4],y=s[8],T=s[12],E=s[1],R=s[5],D=s[9],z=s[13],L=s[2],G=s[6],H=s[10],X=s[14],le=s[3],O=s[7],W=s[11],B=s[15];return r[0]=o*S+a*E+l*L+c*le,r[4]=o*v+a*R+l*G+c*O,r[8]=o*y+a*D+l*H+c*W,r[12]=o*T+a*z+l*X+c*B,r[1]=h*S+f*E+d*L+u*le,r[5]=h*v+f*R+d*G+u*O,r[9]=h*y+f*D+d*H+u*W,r[13]=h*T+f*z+d*X+u*B,r[2]=m*S+x*E+p*L+g*le,r[6]=m*v+x*R+p*G+g*O,r[10]=m*y+x*D+p*H+g*W,r[14]=m*T+x*z+p*X+g*B,r[3]=_*S+w*E+M*L+b*le,r[7]=_*v+w*R+M*G+b*O,r[11]=_*y+w*D+M*H+b*W,r[15]=_*T+w*z+M*X+b*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],m=e[3],x=e[7],p=e[11],g=e[15],_=l*u-c*d,w=a*u-c*f,M=a*d-l*f,b=o*u-c*h,S=o*d-l*h,v=o*f-a*h;return t*(x*_-p*w+g*M)-i*(m*_-p*b+g*S)+s*(m*w-x*b+g*v)-r*(m*M-x*S+p*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=t*a-i*o,w=t*l-s*o,M=t*c-r*o,b=i*l-s*a,S=i*c-r*a,v=s*c-r*l,y=h*x-f*m,T=h*p-d*m,E=h*g-u*m,R=f*p-d*x,D=f*g-u*x,z=d*g-u*p,L=_*z-w*D+M*R+b*E-S*T+v*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(a*z-l*D+c*R)*G,e[1]=(s*D-i*z-r*R)*G,e[2]=(x*v-p*S+g*b)*G,e[3]=(d*S-f*v-u*b)*G,e[4]=(l*E-o*z-c*T)*G,e[5]=(t*z-s*E+r*T)*G,e[6]=(p*M-m*v-g*w)*G,e[7]=(h*v-d*M+u*w)*G,e[8]=(o*D-a*E+c*y)*G,e[9]=(i*E-t*D-r*y)*G,e[10]=(m*S-x*M+g*_)*G,e[11]=(f*M-h*S-u*_)*G,e[12]=(a*T-o*R-l*y)*G,e[13]=(t*R-i*T+s*y)*G,e[14]=(x*w-m*b-p*_)*G,e[15]=(h*b-f*w+d*_)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,m=r*f,x=o*h,p=o*f,g=a*f,_=l*c,w=l*h,M=l*f,b=i.x,S=i.y,v=i.z;return s[0]=(1-(x+g))*b,s[1]=(u+M)*b,s[2]=(m-w)*b,s[3]=0,s[4]=(u-M)*S,s[5]=(1-(d+g))*S,s[6]=(p+_)*S,s[7]=0,s[8]=(m+w)*v,s[9]=(p-_)*v,s[10]=(1-(d+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=mr.set(s[0],s[1],s[2]).length(),a=mr.set(s[4],s[5],s[6]).length(),l=mr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,f=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,t.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Yn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Yn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===wo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Yn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===wo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Wl.prototype.isMatrix4=!0;var pt=Wl,mr=new k,ni=new pt,tv=new k(0,0,0),nv=new k(1,1,1),ns=new k,Fa=new k,Fn=new k,Vf=new pt,Wf=new Tn,In=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},iv=0,Xf=new k,gr=new Tn,Di=new pt,ka=new k,lo=new k,sv=new k,rv=new Tn,Yf=new k(1,0,0),qf=new k(0,1,0),$f=new k(0,0,1),Zf={type:"added"},ov={type:"removed"},xr={type:"childadded",child:null},Xh={type:"childremoved",child:null},xn=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new In,i=new Tn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new at}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ka.copy(e):ka.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(lo,ka,this.up):Di.lookAt(ka,lo,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Di),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zf),xr.child=e,this.dispatchEvent(xr),xr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ov),Xh.child=e,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zf),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new k(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bt=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},av={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&d>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(av)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=Xu(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Yh(o,r,e+1/3),this.g=Yh(o,r,e),this.b=Yh(o,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let i=Qp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return _t.workingToColorSpace(gn.copy(this),e),Math.round(ut(gn.r*255,0,255))*65536+Math.round(ut(gn.g*255,0,255))*256+Math.round(ut(gn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(gn.copy(this),t);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ln){_t.workingToColorSpace(gn.copy(this),e);let t=gn.r,i=gn.g,s=gn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Ba);let i=vo(is.h,Ba.h,t),s=vo(is.s,Ba.s,t),r=vo(is.l,Ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new it;it.NAMES=Qp;var Xs=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new k,Ni=new k,qh=new k,Oi=new k,vr=new k,_r=new k,Kf=new k,$h=new k,Zh=new k,Kh=new k,Jh=new Gt,jh=new Gt,Qh=new Gt,as=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Ni.subVectors(i,t),qh.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Ni),l=ii.dot(qh),c=Ni.dot(Ni),h=Ni.dot(qh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-u-m,m,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Jh.setScalar(0),jh.setScalar(0),Qh.setScalar(0),Jh.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,i),Qh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jh,r.x),o.addScaledVector(jh,r.y),o.addScaledVector(Qh,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Ni.subVectors(e,t),ii.cross(Ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;vr.subVectors(s,i),_r.subVectors(r,i),$h.subVectors(e,i);let l=vr.dot($h),c=_r.dot($h);if(l<=0&&c<=0)return t.copy(i);Zh.subVectors(e,s);let h=vr.dot(Zh),f=_r.dot(Zh);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(vr,o);Kh.subVectors(e,r);let u=vr.dot(Kh),m=_r.dot(Kh);if(m>=0&&u<=m)return t.copy(r);let x=u*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(_r,a);let p=h*m-u*f;if(p<=0&&f-h>=0&&u-m>=0)return Kf.subVectors(r,s),a=(f-h)/(f-h+(u-m)),t.copy(s).addScaledVector(Kf,a);let g=1/(p+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(vr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ha.subVectors(this.max,co),yr.subVectors(e.a,co),Mr.subVectors(e.b,co),br.subVectors(e.c,co),ss.subVectors(Mr,yr),rs.subVectors(br,Mr),zs.subVectors(yr,br);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-zs.z,zs.y,ss.z,0,-ss.x,rs.z,0,-rs.x,zs.z,0,-zs.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-zs.y,zs.x,0];return!eu(t,yr,Mr,br,Ha)||(t=[1,0,0,0,1,0,0,0,1],!eu(t,yr,Mr,br,Ha))?!1:(Ga.crossVectors(ss,rs),t=[Ga.x,Ga.y,Ga.z],eu(t,yr,Mr,br,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new k,new k,new k,new k,new k,new k,new k,new k],si=new k,za=new xi,yr=new k,Mr=new k,br=new k,ss=new k,rs=new k,zs=new k,co=new k,Ha=new k,Ga=new k,Hs=new k;function eu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hs.fromArray(n,r);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),h=i.dot(Hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qt=new k,Va=new He,lv=0,Tt=class extends gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yp,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=e!==void 0?qu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Jp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jp(e,this.array)}};var Ro=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Co=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},cv=new xi,ho=new k,tu=new k,qn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(tu)),this.expandByPoint(ho.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hv=0,Xn=new pt,nu=new xn,Sr=new k,kn=new xi,uo=new xi,nn=new k,kt=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Co:Ro)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(kn.min,uo.min),kn.expandByPoint(nn),nn.addVectors(kn.max,uo.max),kn.expandByPoint(nn)):(kn.expandByPoint(uo.min),kn.expandByPoint(uo.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),nn.add(Sr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let T=0;T<i.count;T++)a[T]=new k,l[T]=new k;let h=new k,f=new k,d=new k,u=new He,m=new He,x=new He,p=new k,g=new k;function _(T,E,R){c[T]=c[E]=c[R]=1,h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),f.sub(h),d.sub(h),m.sub(u),x.sub(u);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(D),g.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(D),a[T].add(p),a[E].add(p),a[R].add(p),l[T].add(g),l[E].add(g),l[R].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,E=w.length;T<E;++T){let R=w[T],D=R.start,z=R.count;for(let L=D,G=D+z;L<G;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let M=new k,b=new k,S=new k,v=new k;function y(T){S.fromBufferAttribute(s,T),v.copy(S);let E=a[T];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),b.crossVectors(v,E);let D=b.dot(l[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,D)}for(let T=0,E=i.count;T<E;++T)c[T]&&y(T);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,f=new k;if(e)for(let d=0,u=e.count;d<u;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[u++]}return new Tt(d,h,f)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var iu=new k,uv=new k,dv=new at,ri=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=iu.subVectors(i,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dv.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},fv=0,Ys=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Hr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Su,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Fi=new k,su=new k,Wa=new k,Xa=new k,Ml=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){su.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xa.copy(this.origin).sub(su);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Xa.dot(this.direction),l=-Xa.dot(Wa),c=Xa.lengthSq(),h=Math.abs(1-o*o),f,d,u,m;if(h>0)if(f=o*l-a,d=o*a-l,m=r*h,f>=0)if(d>=-m)if(d<=m){let x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(su).addScaledVector(Wa,d),u}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,g=i.x-o.x,_=i.y-o.y,w=i.z-o.z,M=Math.abs(l),b=Math.abs(c),S=Math.abs(h),v,y,T,E,R,D,z,L,G,H,X,le;if(M>=b&&M>=S?(T=l,D=f,G=m,le=g,l>=0?(v=c,y=h,E=d,R=u,z=x,L=p,H=_,X=w):(v=h,y=c,E=u,R=d,z=p,L=x,H=w,X=_)):b>=S?(T=c,D=d,G=x,le=_,c>=0?(v=h,y=l,E=u,R=f,z=p,L=m,H=w,X=g):(v=l,y=h,E=f,R=u,z=m,L=p,H=g,X=w)):(T=h,D=u,G=p,le=w,h>=0?(v=l,y=c,E=f,R=d,z=m,L=x,H=g,X=_):(v=c,y=l,E=d,R=f,z=x,L=m,H=_,X=g)),T===0)return null;let O=v/T,W=y/T,B=1/T,ge=E-O*D,de=R-W*D,J=z-O*G,ve=L-W*G,Te=H-O*le,Ye=X-W*le,ie=Te*ve-Ye*J,De=ge*Ye-de*Te,Ke=J*de-ve*ge;if(s){if(ie<0||De<0||Ke<0)return null}else if((ie<0||De<0||Ke<0)&&(ie>0||De>0||Ke>0))return null;let ke=ie+De+Ke;if(ke===0)return null;let Je=B*(ie*D+De*G+Ke*le);return(ke>0?Je<0:Je>0)?null:this.at(Je/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zi=class extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jf=new pt,Gs=new Ml,Ya=new qn,jf=new k,qa=new k,$a=new k,Za=new k,ru=new k,Ka=new k,Qf=new k,Ja=new k,mt=class extends xn{constructor(e=new kt,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(ru.fromBufferAttribute(f,e),o?Ka.addScaledVector(ru,h):Ka.addScaledVector(ru.sub(t),h))}t.add(Ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Gs.copy(e.ray).recast(e.near),!(Ya.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Ya,jf)===null||Gs.origin.distanceToSquared(jf)>(e.far-e.near)**2))&&(Jf.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Jf),!(i.boundingBox!==null&&Gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],_=Math.max(p.start,u.start),w=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let M=_,b=w;M<b;M+=3){let S=a.getX(M),v=a.getX(M+1),y=a.getX(M+2);s=ja(this,g,e,i,c,h,f,S,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);s=ja(this,o,e,i,c,h,f,_,w,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],_=Math.max(p.start,u.start),w=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let M=_,b=w;M<b;M+=3){let S=M,v=M+1,y=M+2;s=ja(this,g,e,i,c,h,f,S,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){let _=p,w=p+1,M=p+2;s=ja(this,o,e,i,c,h,f,_,w,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function pv(n,e,t,i,s,r,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ds,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:n}}function ja(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,qa),n.getVertexPosition(l,$a),n.getVertexPosition(c,Za);let h=pv(n,e,t,i,qa,$a,Za,Qf);if(h){let f=new k;as.getBarycoord(Qf,qa,$a,Za,f),s&&(h.uv=as.getInterpolatedAttribute(s,a,l,c,f,new He)),r&&(h.uv1=as.getInterpolatedAttribute(r,a,l,c,f,new He)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};as.getNormal(qa,$a,Za,d.normal),h.face=d,h.barycoord=f}return h}var Po=class extends En{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,h=sn,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new pt,ep=new pt,Qa=[],tp=new xi,mv=new pt,fo=new mt,po=new qn,qs=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wr),tp.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wr),po.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),ep.multiplyMatrices(i,wr),fo.matrixWorld=ep,fo.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){let l=Qa[o];l.instanceId=r,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Po(new Float32Array(s*this.count),s,this.count,Jl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new qn,gv=new He(.5,.5),el=new k,$s=class{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],w=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,u-h,g-m,b-_).normalize(),s[1].setComponents(c+o,u+h,g+m,b+_).normalize(),s[2].setComponents(c+a,u+f,g+x,b+w).normalize(),s[3].setComponents(c-a,u-f,g-x,b-w).normalize(),i)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,u-d,g-p,b-M).normalize();else if(s[4].setComponents(c-l,u-d,g-p,b-M).normalize(),t===Yn)s[5].setComponents(c+l,u+d,g+p,b+M).normalize();else if(t===wo)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=gv.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(el.x=s.normal.x>0?e.max.x:e.min.x,el.y=s.normal.y>0?e.max.y:e.min.y,el.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},np=new pt,bl=class n{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];np.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new $s),i[s].setFromProjectionMatrix(np,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new $s),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Io=class extends En{constructor(e=[],t=er,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lo=class extends En{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends En{constructor(e,t,i=oi,s,r,o,a=sn,l=sn,c,h=Bi,f=1){if(h!==Bi&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Do=class extends Hi{constructor(e,t=oi,i=er,s,r,o=sn,a=sn,l,c=Bi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},No=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},It=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function m(x,p,g,_,w,M,b,S,v,y,T){let E=M/v,R=b/y,D=M/2,z=b/2,L=S/2,G=v+1,H=y+1,X=0,le=0,O=new k;for(let W=0;W<H;W++){let B=W*R-z;for(let ge=0;ge<G;ge++){let de=ge*E-D;O[x]=de*_,O[p]=B*w,O[g]=L,c.push(O.x,O.y,O.z),O[x]=0,O[p]=0,O[g]=S>0?1:-1,h.push(O.x,O.y,O.z),f.push(ge/v),f.push(1-W/y),X+=1}}for(let W=0;W<y;W++)for(let B=0;B<v;B++){let ge=d+B+G*W,de=d+B+G*(W+1),J=d+(B+1)+G*(W+1),ve=d+(B+1)+G*W;l.push(ge,de,ve),l.push(de,J,ve),le+=6}a.addGroup(u,le,T),u+=le,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var vn=class n extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],m=0,x=[],p=i/2,g=0;_(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function _(){let M=new k,b=new k,S=0,v=(t-e)/i;for(let y=0;y<=r;y++){let T=[],E=y/r,R=E*(t-e)+e;for(let D=0;D<=s;D++){let z=D/s,L=z*l+a,G=Math.sin(L),H=Math.cos(L);b.x=R*G,b.y=-E*i+p,b.z=R*H,f.push(b.x,b.y,b.z),M.set(G,v,H).normalize(),d.push(M.x,M.y,M.z),u.push(z,1-E),T.push(m++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let E=x[T][y],R=x[T+1][y],D=x[T+1][y+1],z=x[T][y+1];(e>0||T!==0)&&(h.push(E,R,z),S+=3),(t>0||T!==r-1)&&(h.push(R,D,z),S+=3)}c.addGroup(g,S,0),g+=S}function w(M){let b=m,S=new He,v=new k,y=0,T=M===!0?e:t,E=M===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*E,0),d.push(0,E,0),u.push(.5,.5),m++;let R=m;for(let D=0;D<=s;D++){let L=D/s*l+a,G=Math.cos(L),H=Math.sin(L);v.x=T*H,v.y=p*E,v.z=T*G,f.push(v.x,v.y,v.z),d.push(0,E,0),S.x=G*.5+.5,S.y=H*.5*E+.5,u.push(S.x,S.y),m++}for(let D=0;D<s;D++){let z=b+D,L=R+D;M===!0?h.push(L,L+1,z):h.push(L+1,L,z),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oo=class n extends kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new k,M=new k,b=new k;for(let S=0;S<t.length;S+=3)u(t[S+0],w),u(t[S+1],M),u(t[S+2],b),l(w,M,b,_)}function l(_,w,M,b){let S=b+1,v=[];for(let y=0;y<=S;y++){v[y]=[];let T=_.clone().lerp(M,y/S),E=w.clone().lerp(M,y/S),R=S-y;for(let D=0;D<=R;D++)D===0&&y===S?v[y][D]=T:v[y][D]=T.clone().lerp(E,D/R)}for(let y=0;y<S;y++)for(let T=0;T<2*(S-y)-1;T++){let E=Math.floor(T/2);T%2===0?(d(v[y][E+1]),d(v[y+1][E]),d(v[y][E])):(d(v[y][E+1]),d(v[y+1][E+1]),d(v[y+1][E]))}}function c(_){let w=new k;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(_),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){let _=new k;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let M=p(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}m(),f()}function f(){for(let _=0;_<o.length;_+=6){let w=o[_+0],M=o[_+2],b=o[_+4],S=Math.max(w,M,b),v=Math.min(w,M,b);S>.9&&v<.1&&(w<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function u(_,w){let M=_*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function m(){let _=new k,w=new k,M=new k,b=new k,S=new He,v=new He,y=new He;for(let T=0,E=0;T<r.length;T+=9,E+=6){_.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),S.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(_).add(w).add(M).divideScalar(3);let R=p(b);x(S,E+0,_,R),x(v,E+2,w,R),x(y,E+4,M,R)}}function x(_,w,M,b){b<0&&_.x===1&&(o[w]=_.x-1),M.x===0&&M.z===0&&(o[w]=b/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new He:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new k,s=[],r=[],o=[],a=new k,l=new pt;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ut(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ut(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Or=class extends An{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new He){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sl=class extends Or{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $u(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ip=new k,sp=new k,ou=new $u,au=new $u,lu=new $u,wl=class extends An{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(sp.subVectors(s[0],s[1]).add(s[0]),c=sp);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ip.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ip),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),ou.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,x,p),au.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,x,p),lu.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(ou.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),au.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),lu.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(ou.calc(l),au.calc(l),lu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function xv(n,e){let t=1-n;return t*t*e}function vv(n,e){return 2*(1-n)*n*e}function _v(n,e){return n*n*e}function _o(n,e,t,i){return xv(n,e)+vv(n,t)+_v(n,i)}function yv(n,e){let t=1-n;return t*t*t*e}function Mv(n,e){let t=1-n;return 3*t*t*n*e}function bv(n,e){return 3*(1-n)*n*n*e}function Sv(n,e){return n*n*n*e}function yo(n,e,t,i,s){return yv(n,e)+Mv(n,t)+bv(n,i)+Sv(n,s)}var Uo=class extends An{constructor(e=new He,t=new He,i=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new He){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tl=class extends An{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y),yo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends An{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends An{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends An{constructor(e=new He,t=new He,i=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new He){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends An{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y),_o(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(rp(a,l.x,c.x,h.x,f.x),rp(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},Al=Object.freeze({__proto__:null,ArcCurve:Sl,CatmullRomCurve3:wl,CubicBezierCurve:Uo,CubicBezierCurve3:Tl,EllipseCurve:Or,LineCurve:Fo,LineCurve3:El,QuadraticBezierCurve:ko,QuadraticBezierCurve3:Bo,SplineCurve:zo}),Rl=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Al[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Al[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zs=class extends Rl{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Fo(this.currentPoint.clone(),new He(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ko(this.currentPoint.clone(),new He(e,t),new He(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Uo(this.currentPoint.clone(),new He(e,t),new He(i,s),new He(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new zo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Or(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ur=class extends Zs{constructor(e){super(e),this.uuid=nr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Zs().fromJSON(s))}return this}};function wv(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=e0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Cv(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let d=t;d<s;d+=t){let u=n[d],m=n[d+1];u<a&&(a=u),m<l&&(l=m),u>h&&(h=u),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Ho(r,o,t,a,l,c,0),o}function e0(n,e,t,i,s){let r;if(s===zv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=op(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=op(o/i|0,n[o],n[o+1],r);return r&&Fr(r,r.next)&&(Vo(r),r=r.next),r}function Ks(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fr(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Vo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ho(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Nv(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ev(n,i,s,r):Tv(n)){e.push(l.i,n.i,c.i),Vo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Av(Ks(n),e),Ho(n,e,t,i,s,r,2)):o===2&&Rv(n,e,t,i,s,r):Ho(Ks(n),e,t,i,s,r,1);break}}}function Tv(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=f&&m.y<=u&&mo(s,a,r,l,o,c,m.x,m.y)&&Ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ev(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,l,c),m=Math.min(h,f,d),x=Math.max(a,l,c),p=Math.max(h,f,d),g=fu(u,m,e,t,i),_=fu(x,p,e,t,i),w=n.prevZ,M=n.nextZ;for(;w&&w.z>=g&&M&&M.z<=_;){if(w.x>=u&&w.x<=x&&w.y>=m&&w.y<=p&&w!==s&&w!==o&&mo(a,h,l,f,c,d,w.x,w.y)&&Ht(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&mo(a,h,l,f,c,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=g;){if(w.x>=u&&w.x<=x&&w.y>=m&&w.y<=p&&w!==s&&w!==o&&mo(a,h,l,f,c,d,w.x,w.y)&&Ht(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=_;){if(M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&mo(a,h,l,f,c,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Av(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Fr(i,s)&&n0(i,t,t.next,s)&&Go(i,s)&&Go(s,i)&&(e.push(i.i,t.i,s.i),Vo(t),Vo(t.next),t=n=s),t=t.next}while(t!==n);return Ks(t)}function Rv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fv(o,a)){let l=i0(o,a);o=Ks(o,o.next),l=Ks(l,l.next),Ho(o,e,t,i,s,r,0),Ho(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Cv(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=e0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Uv(c))}s.sort(Pv);for(let r=0;r<s.length;r++)t=Iv(s[r],t);return t}function Pv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Iv(n,e){let t=Lv(n,e);if(!t)return e;let i=i0(t,n);return Ks(i,i.next),Ks(t,t.next)}function Lv(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Fr(n,t))return t;do{if(Fr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&t0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Go(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Dv(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Dv(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function Nv(n,e,t,i){let s=n;do s.z===0&&(s.z=fu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ov(s)}function Ov(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function fu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Uv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function t0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function mo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&t0(n,e,t,i,s,r,o,a)}function Fv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!kv(n,e)&&(Go(n,e)&&Go(e,n)&&Bv(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||Fr(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fr(n,e){return n.x===e.x&&n.y===e.y}function n0(n,e,t,i){let s=nl(Ht(n,e,t)),r=nl(Ht(n,e,i)),o=nl(Ht(t,i,n)),a=nl(Ht(t,i,e));return!!(s!==r&&o!==a||s===0&&tl(n,t,e)||r===0&&tl(n,i,e)||o===0&&tl(t,n,i)||a===0&&tl(t,e,i))}function tl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function nl(n){return n>0?1:n<0?-1:0}function kv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&n0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Go(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function Bv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function i0(n,e){let t=pu(n.i,n.x,n.y),i=pu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function op(n,e,t,i){let s=pu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var mu=class{static triangulate(e,t,i=2){return wv(e,t,i)}},Ws=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ap(e),lp(i,e);let o=e.length;t.forEach(ap);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,lp(i,t[l]);let a=mu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ap(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function lp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Wo=class n extends kt{constructor(e=new Ur([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Hv,w,M=!1,b,S,v,y;if(g){w=g.getSpacedPoints(h),M=!0,d=!1;let N=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,N),S=new k,v=new k,y=new k}d||(p=0,u=0,m=0,x=0);let T=a.extractPoints(c),E=T.shape,R=T.holes;if(!Ws.isClockWise(E)){E=E.reverse();for(let N=0,Y=R.length;N<Y;N++){let j=R[N];Ws.isClockWise(j)&&(R[N]=j.reverse())}}function z(N){let j=10000000000000001e-36,se=N[0];for(let Z=1;Z<=N.length;Z++){let xe=Z%N.length,Q=N[xe],pe=Q.x-se.x,Se=Q.y-se.y,Be=pe*pe+Se*Se,F=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(se.x),Math.abs(se.y)),me=j*F*F;if(Be<=me){N.splice(xe,1),Z--;continue}se=Q}}z(E),R.forEach(z);let L=R.length,G=E;for(let N=0;N<L;N++){let Y=R[N];E=E.concat(Y)}function H(N,Y,j){return Y||ot("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(Y,j)}let X=E.length;function le(N,Y,j){let se,Z,xe,Q=N.x-Y.x,pe=N.y-Y.y,Se=j.x-N.x,Be=j.y-N.y,F=Q*Q+pe*pe,me=Q*Be-pe*Se;if(Math.abs(me)>Number.EPSILON){let Ee=Math.sqrt(F),Ge=Math.sqrt(Se*Se+Be*Be),ne=Y.x-pe/Ee,Ze=Y.y+Q/Ee,Ae=j.x-Be/Ge,Re=j.y+Se/Ge,P=((Ae-ne)*Be-(Re-Ze)*Se)/(Q*Be-pe*Se);se=ne+Q*P-N.x,Z=Ze+pe*P-N.y;let A=se*se+Z*Z;if(A<=2)return new He(se,Z);xe=Math.sqrt(A/2)}else{let Ee=!1;Q>Number.EPSILON?Se>Number.EPSILON&&(Ee=!0):Q<-Number.EPSILON?Se<-Number.EPSILON&&(Ee=!0):Math.sign(pe)===Math.sign(Be)&&(Ee=!0),Ee?(se=-pe,Z=Q,xe=Math.sqrt(F)):(se=Q,Z=pe,xe=Math.sqrt(F/2))}return new He(se/xe,Z/xe)}let O=[];for(let N=0,Y=G.length,j=Y-1,se=N+1;N<Y;N++,j++,se++)j===Y&&(j=0),se===Y&&(se=0),O[N]=le(G[N],G[j],G[se]);let W=[],B,ge=O.concat();for(let N=0,Y=L;N<Y;N++){let j=R[N];B=[];for(let se=0,Z=j.length,xe=Z-1,Q=se+1;se<Z;se++,xe++,Q++)xe===Z&&(xe=0),Q===Z&&(Q=0),B[se]=le(j[se],j[xe],j[Q]);W.push(B),ge=ge.concat(B)}let de;if(p===0)de=Ws.triangulateShape(G,R);else{let N=[],Y=[];for(let j=0;j<p;j++){let se=j/p,Z=u*Math.cos(se*Math.PI/2),xe=m*Math.sin(se*Math.PI/2)+x;for(let Q=0,pe=G.length;Q<pe;Q++){let Se=H(G[Q],O[Q],xe);De(Se.x,Se.y,-Z),se===0&&N.push(Se)}for(let Q=0,pe=L;Q<pe;Q++){let Se=R[Q];B=W[Q];let Be=[];for(let F=0,me=Se.length;F<me;F++){let Ee=H(Se[F],B[F],xe);De(Ee.x,Ee.y,-Z),se===0&&Be.push(Ee)}se===0&&Y.push(Be)}}de=Ws.triangulateShape(N,Y)}let J=de.length,ve=m+x;for(let N=0;N<X;N++){let Y=d?H(E[N],ge[N],ve):E[N];M?(v.copy(b.normals[0]).multiplyScalar(Y.x),S.copy(b.binormals[0]).multiplyScalar(Y.y),y.copy(w[0]).add(v).add(S),De(y.x,y.y,y.z)):De(Y.x,Y.y,0)}for(let N=1;N<=h;N++)for(let Y=0;Y<X;Y++){let j=d?H(E[Y],ge[Y],ve):E[Y];M?(v.copy(b.normals[N]).multiplyScalar(j.x),S.copy(b.binormals[N]).multiplyScalar(j.y),y.copy(w[N]).add(v).add(S),De(y.x,y.y,y.z)):De(j.x,j.y,f/h*N)}for(let N=p-1;N>=0;N--){let Y=N/p,j=u*Math.cos(Y*Math.PI/2),se=m*Math.sin(Y*Math.PI/2)+x;for(let Z=0,xe=G.length;Z<xe;Z++){let Q=H(G[Z],O[Z],se);De(Q.x,Q.y,f+j)}for(let Z=0,xe=R.length;Z<xe;Z++){let Q=R[Z];B=W[Z];for(let pe=0,Se=Q.length;pe<Se;pe++){let Be=H(Q[pe],B[pe],se);M?De(Be.x,Be.y+w[h-1].y,w[h-1].x+j):De(Be.x,Be.y,f+j)}}}Te(),Ye();function Te(){let N=s.length/3;if(d){let Y=0,j=X*Y;for(let se=0;se<J;se++){let Z=de[se];Ke(Z[2]+j,Z[1]+j,Z[0]+j)}Y=h+p*2,j=X*Y;for(let se=0;se<J;se++){let Z=de[se];Ke(Z[0]+j,Z[1]+j,Z[2]+j)}}else{for(let Y=0;Y<J;Y++){let j=de[Y];Ke(j[2],j[1],j[0])}for(let Y=0;Y<J;Y++){let j=de[Y];Ke(j[0]+X*h,j[1]+X*h,j[2]+X*h)}}i.addGroup(N,s.length/3-N,0)}function Ye(){let N=s.length/3,Y=0;ie(G,Y),Y+=G.length;for(let j=0,se=R.length;j<se;j++){let Z=R[j];ie(Z,Y),Y+=Z.length}i.addGroup(N,s.length/3-N,1)}function ie(N,Y){let j=N.length;for(;--j>=0;){let se=j,Z=j-1;Z<0&&(Z=N.length-1);for(let xe=0,Q=h+p*2;xe<Q;xe++){let pe=X*xe,Se=X*(xe+1),Be=Y+se+pe,F=Y+Z+pe,me=Y+Z+Se,Ee=Y+se+Se;ke(Be,F,me,Ee)}}}function De(N,Y,j){l.push(N),l.push(Y),l.push(j)}function Ke(N,Y,j){Je(N),Je(Y),Je(j);let se=s.length/3,Z=_.generateTopUV(i,s,se-3,se-2,se-1);Fe(Z[0]),Fe(Z[1]),Fe(Z[2])}function ke(N,Y,j,se){Je(N),Je(Y),Je(se),Je(Y),Je(j),Je(se);let Z=s.length/3,xe=_.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Fe(xe[0]),Fe(xe[1]),Fe(xe[3]),Fe(xe[1]),Fe(xe[2]),Fe(xe[3])}function Je(N){s.push(l[N*3+0]),s.push(l[N*3+1]),s.push(l[N*3+2])}function Fe(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Gv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Al[s.type]().fromJSON(s)),new n(i,e.options)}},Hv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new He(r,o),new He(a,l),new He(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[s*3],u=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new He(o,1-l),new He(c,1-f),new He(d,1-m),new He(x,1-g)]:[new He(a,1-l),new He(h,1-f),new He(u,1-m),new He(p,1-g)]}};function Gv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xo=class n extends Oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Yo=class n extends kt{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new k,d=new He,u=new k,m=new k,x=new k,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,u.x=g*1,u.y=-p,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,u.x=g*1,u.y=-p,u.z=g*0,m.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(m)}for(let _=0;_<=t;_++){let w=i+_*h*s,M=Math.sin(w),b=Math.cos(w);for(let S=0;S<=e.length-1;S++){f.x=e[S].x*M,f.y=e[S].y,f.z=e[S].x*b,o.push(f.x,f.y,f.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);let v=l[3*S+0]*M,y=l[3*S+1],T=l[3*S+0]*b;c.push(v,y,T)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let M=w+_*e.length,b=M,S=M+e.length,v=M+e.length+1,y=M+1;r.push(b,S,y),r.push(v,y,S)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},kr=class n extends Oo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ls=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,u=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*d-o;for(let w=0;w<c;w++){let M=w*f-r;m.push(M,-_,0),x.push(0,0,1),p.push(w/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let w=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),S=_+1+c*g;u.push(w,M,S),u.push(M,b,S)}this.setIndex(u),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var _n=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new k,d=new k,u=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let _=[],w=g/i,M=o+w*a,b=e*Math.cos(M),S=Math.sqrt(e*e-b*b),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let T=y/t,E=s+T*r;f.x=-S*Math.cos(E),f.y=b,f.z=S*Math.sin(E),m.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(T+v,1-w),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let w=h[g][_+1],M=h[g][_],b=h[g+1][_],S=h[g+1][_+1];(g!==0||o>0)&&u.push(w,M,S),(g!==i-1||l<Math.PI)&&u.push(M,b,S)}this.setIndex(u),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Js=class n extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],d=new k,u=new k,m=new k;for(let x=0;x<=i;x++){let p=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),c.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(u,d).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,M=(s+1)*x+p;l.push(g,_,M),l.push(_,w,M)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var qo=class n extends kt{constructor(e=new Bo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new He,h=new k,f=[],d=[],u=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function x(){for(let w=0;w<t;w++)p(w);p(r===!1?t:0),_(),g()}function p(w){h=e.getPointAt(w/t,h);let M=o.normals[w],b=o.binormals[w];for(let S=0;S<=s;S++){let v=S/s*Math.PI*2,y=Math.sin(v),T=-Math.cos(v);l.x=T*M.x+y*b.x,l.y=T*M.y+y*b.y,l.z=T*M.z+y*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=t;w++)for(let M=1;M<=s;M++){let b=(s+1)*(w-1)+(M-1),S=(s+1)*w+(M-1),v=(s+1)*w+M,y=(s+1)*(w-1)+M;m.push(b,S,y),m.push(S,v,y)}}function _(){for(let w=0;w<=t;w++)for(let M=0;M<=s;M++)c.x=w/t,c.y=M/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Al[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ir(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(cp(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(cp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=ir(n[t]);for(let s in i)e[s]=i[s]}return e}function cp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Vv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var s0={clone:ir,merge:Mn},Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cl=class extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Pl=class extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Il=class extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function il(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hu,endingEnd:hu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uu:r=e,a=2*t-i;break;case du:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uu:o=e,l=2*i-t;break;case du:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(i-t)/(s-t),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-u)*p+(1.5+u)*x+.5*m,M=u*p-u*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+w*o[l+b]+M*o[f+b];return r}},Dl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Nl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ol=class extends cs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*m;return r}let d=a*2,u=e-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=u*d+m*2,_=f[g],w=f[g+1],M=e*d+m*2,b=h[M],S=h[M+1],v=qv(i,t,_,b,s);r[m]=r0(v,x,w,S,p)}return r}};function r0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Yv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function qv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=r0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Yv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),il(e.settings)&&(i.settings={inTangents:Tr(e.settings.inTangents,Array),outTangents:Tr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case cu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return rt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;il(this.settings)&&(hp(this.settings.inTangents,e),hp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;il(this.settings)&&(up(this.settings.inTangents,e),up(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ot("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ux(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,d=f-i,u=f+i;for(let m=0;m!==i;++m){let x=t[f+m];if(x!==t[d+m]||x!==t[u+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function up(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=xl;var hs=class extends zn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Mo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Ul.prototype.ValueTypeName="color";var Fl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="number";var kl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$o=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}};$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends zn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Mo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Bl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},o0=new zl,Hl=class{constructor(e){this.manager=e!==void 0?e:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var sl=new k,rl=new Tn,pi=new k,Zo=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,rl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sl,rl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new k,dp=new He,fp=new He,cn=class extends Zo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,dp,fp),t.subVectors(fp,dp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gl=class extends Zo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Er=-90,Ar=1,Br=class extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Er,Ar,e,t);s.layers=this.layers,this.add(s);let r=new cn(Er,Ar,e,t);r.layers=this.layers,this.add(r);let o=new cn(Er,Ar,e,t);o.layers=this.layers,this.add(o);let a=new cn(Er,Ar,e,t);a.layers=this.layers,this.add(a);let l=new cn(Er,Ar,e,t);l.layers=this.layers,this.add(l);let c=new cn(Er,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Vl=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ku="\\[\\]\\.:\\/",$v=new RegExp("["+Ku+"]","g"),Ju="[^"+Ku+"]",Zv="[^"+Ku.replace("\\.","")+"]",Kv=/((?:WC+[\/:])*)/.source.replace("WC",Ju),Jv=/(WCOD+)?/.source.replace("WCOD",Zv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),Qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),e_=new RegExp("^"+Kv+Jv+jv+Qv+"$"),t_=["material","materials","bones","map"],gu=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($v,"")}static parseTrackName(e){let t=e_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);t_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=gu;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UE=new Float32Array(1);var id=class id{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};id.prototype.isMatrix2=!0;var xu=id;function ju(n,e,t,i){let s=n_(i);switch(t){case Fu:return n*e;case Jl:return n*e/s.components*s.byteLength;case jl:return n*e/s.components*s.byteLength;case fs:return n*e*2/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case ku:return n*e*3/s.components*s.byteLength;case li:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:case na:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Ec:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ia:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n_(n){switch(n){case Hn:case Du:return{byteLength:1,components:1};case Vr:case Nu:case ai:return{byteLength:2,components:1};case Zl:case Kl:return{byteLength:2,components:4};case oi:case $l:case Zn:return{byteLength:4,components:1};case Ou:case Uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function R0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function c_(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){let m=f[d],x=f[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){let x=f[u];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
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
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
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
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v_=`#ifdef USE_BATCHING
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
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,w_=`#ifdef USE_BUMPMAP
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
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
#endif`,ay=`uniform sampler2D dfgLUT;
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
}`,ly=`
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_y=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
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
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$y=`float getShadowMask() {
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
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`uniform float backgroundBlurriness;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,T1=`#define LAMBERT
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
}`,E1=`#define LAMBERT
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
}`,A1=`#define MATCAP
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
}`,R1=`#define MATCAP
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
}`,C1=`#define NORMAL
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
}`,P1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,L1=`#define PHONG
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
}`,D1=`#define STANDARD
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
}`,N1=`#define STANDARD
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
}`,O1=`#define TOON
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
}`,U1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,k1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,z1=`uniform vec3 color;
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
}`,H1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:h_,alphahash_pars_fragment:u_,alphamap_fragment:d_,alphamap_pars_fragment:f_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:g_,aomap_pars_fragment:x_,batching_pars_vertex:v_,batching_vertex:__,begin_vertex:y_,beginnormal_vertex:M_,bsdfs:b_,iridescence_fragment:S_,bumpmap_pars_fragment:w_,clipping_planes_fragment:T_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:R_,color_fragment:C_,color_pars_fragment:P_,color_pars_vertex:I_,color_vertex:L_,common:D_,defaultnormal_vertex:N_,displacementmap_pars_vertex:O_,displacementmap_vertex:U_,emissivemap_fragment:F_,emissivemap_pars_fragment:k_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:H_,envmap_common_pars_fragment:G_,envmap_pars_fragment:V_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:ty,envmap_vertex:X_,fog_vertex:Y_,fog_pars_vertex:q_,fog_fragment:$_,fog_pars_fragment:Z_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:J_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:Q_,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:sy,lights_phong_pars_fragment:ry,lights_physical_fragment:oy,lights_physical_pars_fragment:ay,lights_fragment_begin:ly,lights_fragment_maps:cy,lights_fragment_end:hy,lightprobes_pars_fragment:uy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:_y,metalnessmap_fragment:yy,metalnessmap_pars_fragment:My,morphinstance_vertex:by,morphcolor_vertex:Sy,morphnormal_vertex:wy,morphtarget_pars_vertex:Ty,morphtarget_vertex:Ey,normal_fragment_begin:Ay,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:Py,normal_vertex:Iy,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:Uy,opaque_fragment:Fy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:Hy,dithering_pars_fragment:Gy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:Yy,shadowmap_vertex:qy,shadowmask_pars_fragment:$y,skinbase_vertex:Zy,skinning_pars_vertex:Ky,skinning_vertex:Jy,skinnormal_vertex:jy,specularmap_fragment:Qy,specularmap_pars_fragment:e1,tonemapping_fragment:t1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:o1,uv_vertex:a1,worldpos_vertex:l1,background_vert:c1,background_frag:h1,backgroundCube_vert:u1,backgroundCube_frag:d1,cube_vert:f1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:x1,distance_frag:v1,equirect_vert:_1,equirect_frag:y1,linedashed_vert:M1,linedashed_frag:b1,meshbasic_vert:S1,meshbasic_frag:w1,meshlambert_vert:T1,meshlambert_frag:E1,meshmatcap_vert:A1,meshmatcap_frag:R1,meshnormal_vert:C1,meshnormal_frag:P1,meshphong_vert:I1,meshphong_frag:L1,meshphysical_vert:D1,meshphysical_frag:N1,meshtoon_vert:O1,meshtoon_frag:U1,points_vert:F1,points_frag:k1,shadow_vert:B1,shadow_frag:z1,sprite_vert:H1,sprite_frag:G1},qe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},yi={basic:{uniforms:Mn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Mn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Mn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Mn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Mn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new it(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Mn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Mn([qe.points,qe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Mn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Mn([qe.common,qe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Mn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Mn([qe.sprite,qe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Mn([qe.common,qe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Mn([qe.lights,qe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};yi.physical={uniforms:Mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Lc={r:0,b:0,g:0},V1=new pt,C0=new at;C0.set(-1,0,0,0,1,0,0,0,1);function W1(n,e,t,i,s,r){let o=new it(0),a=s===!0?0:1,l,c,h=null,f=0,d=null;function u(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let M=_.backgroundBlurriness>0;w=e.get(w,M)}return w}function m(_){let w=!1,M=u(_);M===null?p(o,a):M&&M.isColor&&(p(M,1),w=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,w){let M=u(w);M&&M.isCubeTexture?(c===void 0&&(c=new mt(new It(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ir(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(C0),c.material.toneMapped=_t.getTransfer(M.colorSpace)!==wt,(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mt(new ls(2,2),new yn({name:"BackgroundMaterial",uniforms:ir(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=_t.getTransfer(M.colorSpace)!==wt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,w){_.getRGB(Lc,Zu(n)),t.buffers.color.setClear(Lc.r,Lc.g,Lc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:x,dispose:g}}function X1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(R,D,z,L,G){let H=!1,X=f(R,L,z,D);r!==X&&(r=X,c(r.object)),H=u(R,L,z,G),H&&m(R,L,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(R,D,z,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function f(R,D,z,L){let G=L.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let X=R.isInstancedMesh===!0?R.id:0,le=H[X];le===void 0&&(le={},H[X]=le);let O=le[z.id];O===void 0&&(O={},le[z.id]=O);let W=O[G];return W===void 0&&(W=d(l()),O[G]=W),W}function d(R){let D=[],z=[],L=[];for(let G=0;G<t;G++)D[G]=0,z[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:R,attributes:{},index:null}}function u(R,D,z,L){let G=r.attributes,H=D.attributes,X=0,le=z.getAttributes();for(let O in le)if(le[O].location>=0){let B=G[O],ge=H[O];if(ge===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),B===void 0||B.attribute!==ge||ge&&B.data!==ge.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function m(R,D,z,L){let G={},H=D.attributes,X=0,le=z.getAttributes();for(let O in le)if(le[O].location>=0){let B=H[O];B===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(B=R.instanceColor));let ge={};ge.attribute=B,B&&B.data&&(ge.data=B.data),G[O]=ge,X++}r.attributes=G,r.attributesNum=X,r.index=L}function x(){let R=r.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function p(R){g(R,0)}function g(R,D){let z=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;z[R]=1,L[R]===0&&(n.enableVertexAttribArray(R),L[R]=1),G[R]!==D&&(n.vertexAttribDivisor(R,D),G[R]=D)}function _(){let R=r.newAttributes,D=r.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==R[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function w(R,D,z,L,G,H,X){X===!0?n.vertexAttribIPointer(R,D,z,G,H):n.vertexAttribPointer(R,D,z,L,G,H)}function M(R,D,z,L){x();let G=L.attributes,H=z.getAttributes(),X=D.defaultAttributeValues;for(let le in H){let O=H[le];if(O.location>=0){let W=G[le];if(W===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){let B=W.normalized,ge=W.itemSize,de=e.get(W);if(de===void 0)continue;let J=de.buffer,ve=de.type,Te=de.bytesPerElement,Ye=ve===n.INT||ve===n.UNSIGNED_INT||W.gpuType===$l;if(W.isInterleavedBufferAttribute){let ie=W.data,De=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,Ke=W.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let ke=0;ke<O.locationSize;ke++)g(O.location+ke,ie.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ke=0;ke<O.locationSize;ke++)p(O.location+ke);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ke=0;ke<O.locationSize;ke++)w(O.location+ke,ge/O.locationSize,ve,B,De*Te,(Ke+ge/O.locationSize*ke)*Te,Ye)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<O.locationSize;ie++)g(O.location+ie,W.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<O.locationSize;ie++)p(O.location+ie);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ie=0;ie<O.locationSize;ie++)w(O.location+ie,ge/O.locationSize,ve,B,ge*Te,ge/O.locationSize*ie*Te,Ye)}}else if(X!==void 0){let B=X[le];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(O.location,B);break;case 3:n.vertexAttrib3fv(O.location,B);break;case 4:n.vertexAttrib4fv(O.location,B);break;default:n.vertexAttrib1fv(O.location,B)}}}}_()}function b(){T();for(let R in i){let D=i[R];for(let z in D){let L=D[z];for(let G in L){let H=L[G];for(let X in H)h(H[X].object),delete H[X];delete L[G]}}delete i[R]}}function S(R){if(i[R.id]===void 0)return;let D=i[R.id];for(let z in D){let L=D[z];for(let G in L){let H=L[G];for(let X in H)h(H[X].object),delete H[X];delete L[G]}}delete i[R.id]}function v(R){for(let D in i){let z=i[D];for(let L in z){let G=z[L];if(G[R.id]===void 0)continue;let H=G[R.id];for(let X in H)h(H[X].object),delete H[X];delete G[R.id]}}}function y(R){for(let D in i){let z=i[D],L=R.isInstancedMesh===!0?R.id:0,G=z[L];if(G!==void 0){for(let H in G){let X=G[H];for(let le in X)h(X[le].object),delete X[le];delete G[H]}delete z[L],Object.keys(z).length===0&&delete i[D]}}}function T(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Y1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==li&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let y=v===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Hn&&v!==Zn&&!y&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:M,maxSamples:b,samples:S}}function $1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ri,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,w=_*4,M=g.clippingState||null;l.value=M,M=h(m,d,w,u);for(let b=0;b!==w;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,m){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=u+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,M=u;w!==x;++w,M+=4)o.copy(f[w]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var oa=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:js});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=wn),new Br(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},a0=256,Z1=3,K1=20,P0=256,I0=16,J1=3,j1=new k,Q1=new it,Nc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Br(1,10,null),this._boxMesh=new mt(new It(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=j1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Q1));let p=new Br(i,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(a0,Yu(e))}_fromTexture(e,t){e.mapping===er||e.mapping===Gr?this._setSize(e.image.length===0?a0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=l0(e,!1,!1),i=Math.log2(e)-Z1;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=l0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===er||e.mapping===Gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=c0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=eM(),this._integrationMaterial=tM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/I0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-J1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(P0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=nM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function l0(n,e,t){return new oa(n,{minFilter:Gi,generateMipmaps:e,type:ai,colorSpace:bo,depthBuffer:t})}function aa(n,e,t){return new yn({name:n,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:$t,blending:js,depthTest:!1,depthWrite:!1})}function eM(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${P0}u

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
	`)}function tM(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:I0}},`

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
	`)}function nM(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${K1}
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
	`)}function c0(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function h0(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function iM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Xl||u===Yl)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new oa(m.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,m=u===Xl||u===Yl,x=u===er||u===Gr;if(m||x){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Nc(n)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return m&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Nc(n)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,u){return u===Xl?d.mapping=er:u===Yl&&(d.mapping=Gr),d}function l(d){let u=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&u++;return u===m}function c(d){let u=d.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function sM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&go("WebGLRenderer: "+i+" extension not supported."),s}}}function rM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function f(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?Co:Ro,M=new w(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let v=x.array;g=x.version;for(let y=0,T=0;y<_;y+=3){let E=v[y+0],R=v[y+1],D=v[y+2];b[T++]=E,b[T++]=R,b[T++]=R,b[T++]=D,b[T++]=D,b[T++]=E}}else{g=p.version;for(let v=0,y=0;v<_;v+=3){let T=v+0,E=v+1,R=v+2;b[y++]=T,b[y++]=E,b[y++]=E,b[y++]=R,b[y++]=R,b[y++]=T}}M.version=g;let S=r.get(m);S&&e.remove(S),r.set(m,M)}function d(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&f(m)}else f(m);return r.get(m)}function u(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function oM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,f*o,u),t.update(d,i,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let x=0;for(let p=0;p<u;p++)x+=d[p];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function aM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lM(n,e,t){let i=new WeakMap,s=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let T=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;u===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let M=a.attributes.position.count*w,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*b*4*f),v=new Eo(S,M,b,f);v.type=Zn,v.needsUpdate=!0;let y=w*4;for(let E=0;E<f;E++){let R=p[E],D=g[E],z=_[E],L=M*b*4*E;for(let G=0;G<R.count;G++){let H=G*y;u===!0&&(s.fromBufferAttribute(R,G),S[L+H+0]=s.x,S[L+H+1]=s.y,S[L+H+2]=s.z,S[L+H+3]=0),m===!0&&(s.fromBufferAttribute(D,G),S[L+H+4]=s.x,S[L+H+5]=s.y,S[L+H+6]=s.z,S[L+H+7]=0),x===!0&&(s.fromBufferAttribute(z,G),S[L+H+8]=s.x,S[L+H+9]=s.y,S[L+H+10]=s.z,S[L+H+11]=z.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new He(M,b)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function cM(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var hM={[Tu]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[Au]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[Pu]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Cu]:"CUSTOM_TONE_MAPPING"};function uM(n,e,t,i,s,r){let o=new Bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new kt;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let f=new Cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mt(h,f),u=new Gl(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,_=null,w=[],M=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),l!==null&&l.setSize(b,S);for(let v=0;v<w.length;v++){let y=w[v];y.setSize&&y.setSize(b,S)}},this.setEffects=function(b){w=b,M=w.length>0&&w[0].isRenderPass===!0;let S=o.width,v=o.height;w.length>0&&a===null&&(a=new Bn(S,v,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(S,v,{type:ai,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&w.some(T=>T.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Hi(S,v),r===!0&&(c.format=Vi,c.type=tr)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let T=0;T<w.length;T++){let E=w[T];E.setSize&&E.setSize(S,v),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,S){if(p||b.toneMapping===vi&&w.length===0)return!1;if(_=S,S!==null){let v=S.width,y=S.height;(o.width!==v||o.height!==y)&&this.setSize(v,y)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=vi,!0},this.hasRenderPass=function(){return M},this.end=function(b,S){b.toneMapping=g,p=!0;let v=o,y=a;for(let T=0;T<w.length;T++){let E=w[T];E.enabled!==!1&&(E.render(b,y,v,S),E.needsSwap!==!1&&(v=y,y=y===a?l:a))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,f.defines={},_t.getTransfer(m)===wt&&(f.defines.SRGB_TRANSFER="");let T=hM[x];T&&(f.defines[T]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(d,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var L0=new En,D0=new Hi(1,1),N0=new Do(1),O0=new Eo,U0=new yl,F0=new Io,u0=[],d0=[],f0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function Yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=u0[s];if(r===void 0&&(r=new Float32Array(s),u0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uc(n,e){let t=d0[e];t===void 0&&(t=new Int32Array(e),d0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function mM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function gM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;m0.set(i),n.uniformMatrix2fv(this.addr,!1,m0),Kt(t,i)}}function xM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;p0.set(i),n.uniformMatrix3fv(this.addr,!1,p0),Kt(t,i)}}function vM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;f0.set(i),n.uniformMatrix4fv(this.addr,!1,f0),Kt(t,i)}}function _M(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function bM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function SM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Fc(n){return n.version===0&&(n.compareFunction=Gu,n.needsUpdate=!0),n}function AM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fc(D0):r=L0,t.setTexture2D(e||r,s)}function RM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||U0,s)}function CM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fc(N0):r=F0,t.setTextureCube(e||r,s)}function PM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||O0,s)}function IM(n){switch(n){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return MM;case 35669:case 35673:return bM;case 5125:return SM;case 36294:return wM;case 36295:return TM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(n,e){n.uniform1fv(this.addr,e)}function DM(n,e){let t=Yr(e,this.size,2);n.uniform2fv(this.addr,t)}function NM(n,e){let t=Yr(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){let t=Yr(e,this.size,4);n.uniform4fv(this.addr,t)}function UM(n,e){let t=Yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FM(n,e){let t=Yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kM(n,e){let t=Yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BM(n,e){n.uniform1iv(this.addr,e)}function zM(n,e){n.uniform2iv(this.addr,e)}function HM(n,e){n.uniform3iv(this.addr,e)}function GM(n,e){n.uniform4iv(this.addr,e)}function VM(n,e){n.uniform1uiv(this.addr,e)}function WM(n,e){n.uniform2uiv(this.addr,e)}function XM(n,e){n.uniform3uiv(this.addr,e)}function YM(n,e){n.uniform4uiv(this.addr,e)}function qM(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fc(D0):o=L0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $M(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||U0,r[o])}function ZM(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Fc(N0):o=F0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function KM(n,e,t){let i=this.cache,s=e.length,r=Uc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||O0,r[o])}function JM(n){switch(n){case 5126:return LM;case 35664:return DM;case 35665:return NM;case 35666:return OM;case 35674:return UM;case 35675:return FM;case 35676:return kM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return HM;case 35669:case 35673:return GM;case 5125:return VM;case 36294:return WM;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return KM}}var od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IM(t.type)}},ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JM(t.type)}},ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},sd=/(\w+)(\])?(\[|\.)?/g;function g0(n,e){n.seq.push(e),n.map[e.id]=e}function jM(n,e,t){let i=n.name,s=i.length;for(sd.lastIndex=0;;){let r=sd.exec(i),o=sd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){g0(t,c===void 0?new od(a,n,e):new ad(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ld(a),g0(t,f)),t=f}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);jM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function x0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var QM=37297,eb=0;function tb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var v0=new at;function nb(n){_t._getMatrix(v0,_t.workingColorSpace,n);let e=`mat3( ${v0.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case So:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tb(n.getShaderSource(e),a)}else return r}function ib(n,e){let t=nb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var sb={[Tu]:"Linear",[Eu]:"Reinhard",[Au]:"Cineon",[Ru]:"ACESFilmic",[Pu]:"AgX",[Iu]:"Neutral",[Cu]:"Custom"};function rb(n,e){let t=sb[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dc=new k;function ob(){_t.getLuminanceCoefficients(Dc);let n=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function lb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ra(n){return n!==""}function y0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function M0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(n){return n.replace(hb,ub)}function ub(n,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cd(t)}var db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(n){return n.replace(db,fb)}function fb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function S0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var pb={[Ko]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function mb(n){return pb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gb={[Gr]:"ENVMAP_MODE_REFRACTION"};function xb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vb={[wu]:"ENVMAP_BLENDING_MULTIPLY",[Op]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function _b(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vb[n.combine]||"ENVMAP_BLENDING_NONE"}function yb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=mb(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xb(t),f=_b(t),d=ab(t),u=lb(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ra).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(x=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ht.tonemapping_pars_fragment:"",t.toneMapping!==vi?rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),o=cd(o),o=y0(o,t),o=M0(o,t),a=cd(a),a=y0(a,t),a=M0(a,t),o=b0(o),a=b0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+x+o,w=g+p+a,M=x0(s,s.VERTEX_SHADER,_),b=x0(s,s.FRAGMENT_SHADER,w);s.attachShader(m,M),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(E){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(b)||"",L=R.trim(),G=D.trim(),H=z.trim(),X=!0,le=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,M,b);else{let O=_0(s,M,"vertex"),W=_0(s,b,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+O+`
`+W)}else L!==""?rt("WebGLProgram: Program Info Log:",L):(G===""||H==="")&&(le=!1);le&&(E.diagnostics={runnable:X,programLog:L,vertexShader:{log:G,prefix:x},fragmentShader:{log:H,prefix:p}})}s.deleteShader(M),s.deleteShader(b),v=new Xr(s,m),y=cb(s,m)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,QM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}var Mb=0,hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ud(e),t.set(e,i)),i}},ud=class{constructor(e){this.id=Mb++,this.code=e,this.usedTimes=0}};function bb(n){return n===fs||n===na||n===ia}function Sb(n,e,t,i,s,r){let o=new Ao,a=new hd,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,T,E,R,D){let z=E.fog,L=R.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,X=e.get(v.envMap||G,H),le=d[v.type],O=i.precision;v.precision!==null&&(O=i.getMaxPrecision(v.precision),O!==v.precision&&rt("WebGLProgram.getParameters:",v.precision,"not supported, using",O,"instead."));let W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,B=W!==void 0?W.length:0,ge=0;L.morphAttributes.position!==void 0&&(ge=1),L.morphAttributes.normal!==void 0&&(ge=2),L.morphAttributes.color!==void 0&&(ge=3);let de,J,ve,Te;if(le){let Oe=yi[le];de=Oe.vertexShader,J=Oe.fragmentShader}else{de=v.vertexShader,J=v.fragmentShader;let Oe=a.getVertexShaderStage(v),tt=a.getFragmentShaderStage(v);a.update(v,Oe,tt),ve=Oe.id,Te=tt.id}let Ye=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),De=R.isInstancedMesh===!0,Ke=R.isBatchedMesh===!0,ke=!!v.map,Je=!!v.matcap,Fe=!!X,N=Fe&&X.isPMREMTexture===!0,Y=!!v.aoMap,j=!!v.lightMap,se=!!v.bumpMap&&v.wireframe===!1,Z=!!v.normalMap,xe=!!v.displacementMap,Q=!!v.emissiveMap,pe=!!v.metalnessMap,Se=!!v.roughnessMap,Be=v.anisotropy>0,F=v.clearcoat>0,me=v.diffuseRoughness>0,Ee=v.dispersion>0,Ge=v.retroreflectivity>0,ne=v.iridescence>0,Ze=v.sheen>0,Ae=v.transmission>0,Re=Be&&!!v.anisotropyMap,P=F&&!!v.clearcoatMap,A=F&&!!v.clearcoatNormalMap,$=F&&!!v.clearcoatRoughnessMap,be=me&&!!v.diffuseRoughnessMap,fe=ne&&!!v.iridescenceMap,we=ne&&!!v.iridescenceThicknessMap,Pe=Ze&&!!v.sheenColorMap,he=Ze&&!!v.sheenRoughnessMap,ue=!!v.specularMap,Le=!!v.specularColorMap,U=!!v.specularIntensityMap,ce=Ae&&!!v.transmissionMap,re=Ae&&!!v.thicknessMap,Ie=!!v.gradientMap,Ce=!!v.alphaMap,ye=v.alphaTest>0,Me=!!v.alphaHash,Ve=!!v.extensions,_e=vi;v.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(_e=n.toneMapping);let ze=N?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ne={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:de,fragmentShader:J,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:O,batching:Ke,batchingColor:Ke&&R._colorsTexture!==null,instancing:De,instancingColor:De&&R.instanceColor!==null,instancingMorph:De&&R.morphTexture!==null,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:Je,envMap:Fe,envMapMode:Fe&&X.mapping,envMapPMREM:N,envMapMaxLod:N?ze.length-1:null,envMapSize:N?ze[0].width:null,aoMap:Y,lightMap:j,bumpMap:se,normalMap:Z,displacementMap:xe,emissiveMap:Q,normalMapObjectSpace:Z&&v.normalMapType===Bp,normalMapTangentSpace:Z&&v.normalMapType===Bu,packedNormalMap:Z&&v.normalMapType===Bu&&bb(v.normalMap.format),metalnessMap:pe,roughnessMap:Se,anisotropy:Be,anisotropyMap:Re,clearcoat:F,clearcoatMap:P,clearcoatNormalMap:A,clearcoatRoughnessMap:$,diffuseRoughness:me,diffuseRoughnessMap:be,dispersion:Ee,retroreflection:Ge,iridescence:ne,iridescenceMap:fe,iridescenceThicknessMap:we,sheen:Ze,sheenColorMap:Pe,sheenRoughnessMap:he,specularMap:ue,specularColorMap:Le,specularIntensityMap:U,transmission:Ae,transmissionMap:ce,thicknessMap:re,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===Hr&&v.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ye,alphaHash:Me,combine:v.combine,mapUv:ke&&u(v.map.channel),aoMapUv:Y&&u(v.aoMap.channel),lightMapUv:j&&u(v.lightMap.channel),bumpMapUv:se&&u(v.bumpMap.channel),normalMapUv:Z&&u(v.normalMap.channel),displacementMapUv:xe&&u(v.displacementMap.channel),emissiveMapUv:Q&&u(v.emissiveMap.channel),metalnessMapUv:pe&&u(v.metalnessMap.channel),roughnessMapUv:Se&&u(v.roughnessMap.channel),anisotropyMapUv:Re&&u(v.anisotropyMap.channel),clearcoatMapUv:P&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:we&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:he&&u(v.sheenRoughnessMap.channel),specularMapUv:ue&&u(v.specularMap.channel),specularColorMapUv:Le&&u(v.specularColorMap.channel),specularIntensityMapUv:U&&u(v.specularIntensityMap.channel),transmissionMapUv:ce&&u(v.transmissionMap.channel),thicknessMapUv:re&&u(v.thicknessMap.channel),alphaMapUv:Ce&&u(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Z||Be),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(ke||Ce),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&Z===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ge,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&_t.getTransfer(v.map.colorSpace)===wt,decodeVideoTextureEmissive:Q&&v.emissiveMap.isVideoTexture===!0&&_t.getTransfer(v.emissiveMap.colorSpace)===wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&v.extensions.multiDraw===!0||Ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function x(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)y.push(T),y.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(p(y,v),g(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function p(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function g(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let y=d[v.type],T;if(y){let E=yi[y];T=s0.clone(E.uniforms)}else T=v.uniforms;return T}function w(v,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new yb(n,y,v,s),c.push(T),h.set(y,T)),T}function M(v){if(--v.usedTimes===0){let y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function S(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:_,acquireProgram:w,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:S}}function wb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Tb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function w0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function T0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,m,x,p,g){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},n[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=g),e++,_}function l(d,u,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);let w=a(d,u,m,x,p,g);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(d,u,m,x,p,g){let _=a(d,u,m,x,p,g);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,u){t.length>1&&t.sort(d||Tb),i.length>1&&i.sort(u||w0),s.length>1&&s.sort(u||w0)}function f(){for(let d=e,u=n.length;d<u;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Eb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new T0,n.set(i,[o])):s>=r.length?(o=new T0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ab(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Rb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Cb=0;function Pb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ib(n){let e=new Ab,t=Rb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new pt,o=new pt;function a(c){let h=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let u=0,m=0,x=0,p=0,g=0,_=0,w=0,M=0,b=0,S=0,v=0,y=0,T=0,E=0;c.sort(Pb);for(let D=0,z=c.length;D<z;D++){let L=c[D],G=L.color,H=L.intensity,X=L.distance,le=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===fs?le=L.shadow.map.texture:le=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*H,f+=G.g*H,d+=G.b*H;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],H);E++}else if(L.isSunLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,B=t.get(L);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[m]=B,i.sunShadowMap[m]=le;let ge=W.getViewportCount();for(let de=0;de<ge;de++)i.sunShadowMatrix[x+de]=W.getMatrix(de),i.sunShadowCascade[x+de]=W._cascadeData[de];x+=ge,m++}i.sun[u]=O,u++}else if(L.isDirectionalLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,B=t.get(L);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=O,p++}else if(L.isSpotLight){let O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(G).multiplyScalar(H),O.distance=X,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[_]=O;let W=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,W.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=W.matrix,L.castShadow){let B=t.get(L);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=le,v++}_++}else if(L.isRectAreaLight){let O=e.get(L);O.color.copy(G).multiplyScalar(H),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=O,w++}else if(L.isPointLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){let W=L.shadow,B=t.get(L);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=le,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=O,g++}else if(L.isHemisphereLight){let O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(H),O.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[M]=O,M++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let R=i.hash;(R.sunLength!==u||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==w||R.hemiLength!==M||R.numSunShadows!==m||R.numDirectionalShadows!==b||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==y||R.numLightProbes!==E)&&(i.sun.length=u,i.directional.length=p,i.spot.length=_,i.rectArea.length=w,i.point.length=g,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,R.sunLength=u,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=w,R.hemiLength=M,R.numSunShadows=m,R.numDirectionalShadows=b,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=y,R.numLightProbes=E,i.version=Cb++)}function l(c,h){let f=0,d=0,u=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let M=c[_];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(M.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function E0(n){let e=new Ib(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new E0(n),e.set(s,[a])):r>=o.length?(a=new E0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
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
}`,Ob=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Ub=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],A0=new pt,sa=new k,rd=new k;function Fb(n,e,t){let i=new $s,s=new He,r=new He,o=new Gt,a=new Pl,l=new Il,c={},h=t.maxTextureSize,f={[ds]:$t,[$t]:ds,[$n]:$n},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Db,fragmentShader:Nb}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let m=new kt;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let g=this.type;this.render=function(S,v,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===gp&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ko);let T=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(js),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==this.type;z&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=S.length;L<G;L++){let H=S[L],X=H.shadow;if(X===void 0){rt("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let le=X.getFrameExtents();s.multiply(le),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,X.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=O,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===zr){if(H.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Bn(s.x,s.y,{format:fs,type:ai,minFilter:wn,magFilter:wn,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new Hi(s.x,s.y,Zn),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=Bi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=sn,X.map.depthTexture.magFilter=sn}else H.isPointLight?(X.map=new oa(s.x),X.map.depthTexture=new Do(s.x,oi)):(X.map=new Bn(s.x,s.y),X.map.depthTexture=new Hi(s.x,s.y,oi)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=Bi,this.type===Ko?(X.map.depthTexture.compareFunction=O?Hu:zu,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=sn,X.map.depthTexture.magFilter=sn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let W=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,y);let B=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:y.layers;for(let ge=0;ge<W;ge++){let de=X.getCamera(ge);if(H.isPointLight){let J=X.camera,ve=X.matrix,Te=H.distance||J.far;Te!==J.far&&(J.far=Te,J.updateProjectionMatrix()),sa.setFromMatrixPosition(H.matrixWorld),J.position.copy(sa),rd.copy(J.position),rd.add(Ob[ge]),J.up.copy(Ub[ge]),J.lookAt(rd),J.updateMatrixWorld(),ve.makeTranslation(-sa.x,-sa.y,-sa.z),A0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X._frustum.setFromProjectionMatrix(A0,J.coordinateSystem,J.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(X.map),n.clear());let J=X.getViewport(ge);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(o)}i=X.getFrustum(ge),M(v,y,de,H,B,this.type)}X.isPointLightShadow!==!0&&this.type===zr&&_(X,y),X.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(T,E,R)};function _(S,v){let y=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null?S.mapPass=new Bn(s.x,s.y,{format:fs,type:ai}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(v,null,y,d,x,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(v,null,y,u,x,null)}function w(S,v,y,T){let E=null,R=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=E.uuid,z=v.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let G=L[z];G===void 0&&(G=E.clone(),L[z]=G,v.addEventListener("dispose",b)),E=G}if(E.visible=v.visible,E.wireframe=v.wireframe,T===zr?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:f[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=n.properties.get(E);D.light=y}return E}function M(S,v,y,T,E,R){if(S.visible===!1)return;if(S.layers.test(E)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===zr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let L=e.update(S),G=S.material;if(Array.isArray(G)){let H=L.groups;for(let X=0,le=H.length;X<le;X++){let O=H[X],W=G[O.materialIndex];if(W&&W.visible){let B=w(S,W,T,R);S.onBeforeShadow(n,S,v,y,L,B,O),n.renderBufferDirect(y,null,L,B,S,O),S.onAfterShadow(n,S,v,y,L,B,O)}}}else if(G.visible){let H=w(S,G,T,R);S.onBeforeShadow(n,S,v,y,L,H,null),n.renderBufferDirect(y,null,L,H,S,null),S.onAfterShadow(n,S,v,y,L,H,null)}}let z=S.children;for(let L=0,G=z.length;L<G;L++)M(z[L],v,y,T,E,R)}function b(S){S.target.removeEventListener("dispose",b);for(let y in c){let T=c[y],E=S.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function kb(n,e){function t(){let U=!1,ce=new Gt,re=null,Ie=new Gt(0,0,0,0);return{setMask:function(Ce){re!==Ce&&!U&&(n.colorMask(Ce,Ce,Ce,Ce),re=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,ye,Me,Ve,_e){_e===!0&&(Ce*=Ve,ye*=Ve,Me*=Ve),ce.set(Ce,ye,Me,Ve),Ie.equals(ce)===!1&&(n.clearColor(Ce,ye,Me,Ve),Ie.copy(ce))},reset:function(){U=!1,re=null,Ie.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,re=null,Ie=null,Ce=null;return{setReversed:function(ye){if(ce!==ye){let Me=e.get("EXT_clip_control");ye?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ce=ye;let Ve=Ce;Ce=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(ye){ye?ie(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ye){re!==ye&&!U&&(n.depthMask(ye),re=ye)},setFunc:function(ye){if(ce&&(ye=Kp[ye]),Ie!==ye){switch(ye){case ll:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case dl:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ye}},setLocked:function(ye){U=ye},setClear:function(ye){Ce!==ye&&(Ce=ye,ce&&(ye=1-ye),n.clearDepth(ye))},reset:function(){U=!1,re=null,Ie=null,Ce=null,ce=!1}}}function s(){let U=!1,ce=null,re=null,Ie=null,Ce=null,ye=null,Me=null,Ve=null,_e=null;return{setTest:function(ze){U||(ze?ie(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(ze){ce!==ze&&!U&&(n.stencilMask(ze),ce=ze)},setFunc:function(ze,Ne,Oe){(re!==ze||Ie!==Ne||Ce!==Oe)&&(n.stencilFunc(ze,Ne,Oe),re=ze,Ie=Ne,Ce=Oe)},setOp:function(ze,Ne,Oe){(ye!==ze||Me!==Ne||Ve!==Oe)&&(n.stencilOp(ze,Ne,Oe),ye=ze,Me=Ne,Ve=Oe)},setLocked:function(ze){U=ze},setClear:function(ze){_e!==ze&&(n.clearStencil(ze),_e=ze)},reset:function(){U=!1,ce=null,re=null,Ie=null,Ce=null,ye=null,Me=null,Ve=null,_e=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,m=[],x=null,p=!1,g=null,_=null,w=null,M=null,b=null,S=null,v=null,y=new it(0,0,0),T=0,E=!1,R=null,D=null,z=null,L=null,G=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,le=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=le>=1):O.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=le>=2);let W=null,B={},ge=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),J=new Gt().fromArray(ge),ve=new Gt().fromArray(de);function Te(U,ce,re,Ie){let Ce=new Uint8Array(4),ye=n.createTexture();n.bindTexture(U,ye),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<re;Me++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(ce+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return ye}let Ye={};Ye[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ye[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ye[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ye[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Cr),se(!1),Z(vu),ie(n.CULL_FACE),Y(js);function ie(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ke(U,ce){return d[U]!==ce?(n.bindFramebuffer(U,ce),d[U]=ce,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ke(U,ce){let re=m,Ie=!1;if(U){re=u.get(ce),re===void 0&&(re=[],u.set(ce,re));let Ce=U.textures;if(re.length!==Ce.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Me=Ce.length;ye<Me;ye++)re[ye]=n.COLOR_ATTACHMENT0+ye;re.length=Ce.length,Ie=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(re)}function Je(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let Fe={[Qs]:n.FUNC_ADD,[vp]:n.FUNC_SUBTRACT,[_p]:n.FUNC_REVERSE_SUBTRACT};Fe[yp]=n.MIN,Fe[Mp]=n.MAX;let N={[bp]:n.ZERO,[Sp]:n.ONE,[wp]:n.SRC_COLOR,[bu]:n.SRC_ALPHA,[Pp]:n.SRC_ALPHA_SATURATE,[Rp]:n.DST_COLOR,[Ep]:n.DST_ALPHA,[Tp]:n.ONE_MINUS_SRC_COLOR,[Su]:n.ONE_MINUS_SRC_ALPHA,[Cp]:n.ONE_MINUS_DST_COLOR,[Ap]:n.ONE_MINUS_DST_ALPHA,[Ip]:n.CONSTANT_COLOR,[Lp]:n.ONE_MINUS_CONSTANT_COLOR,[Dp]:n.CONSTANT_ALPHA,[Np]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(U,ce,re,Ie,Ce,ye,Me,Ve,_e,ze){if(U===js){p===!0&&(De(n.BLEND),p=!1);return}if(p===!1&&(ie(n.BLEND),p=!0),U!==xp){if(U!==g||ze!==E){if((_!==Qs||b!==Qs)&&(n.blendEquation(n.FUNC_ADD),_=Qs,b=Qs),ze)switch(U){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFunc(n.ONE,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",U);break}else switch(U){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yu:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",U);break}w=null,M=null,S=null,v=null,y.set(0,0,0),T=0,g=U,E=ze}return}Ce=Ce||ce,ye=ye||re,Me=Me||Ie,(ce!==_||Ce!==b)&&(n.blendEquationSeparate(Fe[ce],Fe[Ce]),_=ce,b=Ce),(re!==w||Ie!==M||ye!==S||Me!==v)&&(n.blendFuncSeparate(N[re],N[Ie],N[ye],N[Me]),w=re,M=Ie,S=ye,v=Me),(Ve.equals(y)===!1||_e!==T)&&(n.blendColor(Ve.r,Ve.g,Ve.b,_e),y.copy(Ve),T=_e),g=U,E=!1}function j(U,ce){U.side===$n?De(n.CULL_FACE):ie(n.CULL_FACE);let re=U.side===$t;ce&&(re=!re),se(re),U.blending===Hr&&U.transparent===!1?Y(js):Y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ie=U.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(U){R!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),R=U)}function Z(U){U!==pp?(ie(n.CULL_FACE),U!==D&&(U===vu?n.cullFace(n.BACK):U===mp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),D=U}function xe(U){U!==z&&(X&&n.lineWidth(U),z=U)}function Q(U,ce,re){U?(ie(n.POLYGON_OFFSET_FILL),(L!==ce||G!==re)&&(L=ce,G=re,o.getReversed()&&(ce=-ce,re=-re),n.polygonOffset(ce,re))):De(n.POLYGON_OFFSET_FILL)}function pe(U){U?ie(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function Se(U){U===void 0&&(U=n.TEXTURE0+H-1),W!==U&&(n.activeTexture(U),W=U)}function Be(U,ce,re){re===void 0&&(W===null?re=n.TEXTURE0+H-1:re=W);let Ie=B[re];Ie===void 0&&(Ie={type:void 0,texture:void 0},B[re]=Ie),(Ie.type!==U||Ie.texture!==ce)&&(W!==re&&(n.activeTexture(re),W=re),n.bindTexture(U,ce||Ye[U]),Ie.type=U,Ie.texture=ce)}function F(){let U=B[W];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function Ee(){try{n.compressedTexImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Ge(){try{n.texSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function ne(){try{n.texSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Ze(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Re(){try{n.texStorage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function P(){try{n.texStorage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function A(){try{n.texImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function $(){try{n.texImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function be(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function fe(U,ce){f[U]!==ce&&(n.pixelStorei(U,ce),f[U]=ce)}function we(U){J.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),J.copy(U))}function Pe(U){ve.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ve.copy(U))}function he(U,ce){let re=c.get(ce);re===void 0&&(re=new WeakMap,c.set(ce,re));let Ie=re.get(U);Ie===void 0&&(Ie=n.getUniformBlockIndex(ce,U.name),n.uniformBlockBinding(ce,Ie,Ie),re.set(U,Ie))}function ue(U,ce,re){let Ce=c.get(ce).get(U);l[Ce]!==re&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ce,re),l[Ce]=re)}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,B={},d={},l={},u=new WeakMap,m=[],x=null,p=!1,g=null,_=null,w=null,M=null,b=null,S=null,v=null,y=new it(0,0,0),T=0,E=!1,R=null,D=null,z=null,L=null,G=null,J.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:De,bindFramebuffer:Ke,drawBuffers:ke,useProgram:Je,setBlending:Y,setMaterial:j,setFlipSided:se,setCullFace:Z,setLineWidth:xe,setPolygonOffset:Q,setScissorTest:pe,activeTexture:Se,bindTexture:Be,unbindTexture:F,compressedTexImage2D:me,compressedTexImage3D:Ee,texImage2D:A,texImage3D:$,pixelStorei:fe,getParameter:be,updateUBOMapping:he,uniformBlockBinding:ue,texStorage2D:Re,texStorage3D:P,texSubImage2D:Ge,texSubImage3D:ne,compressedTexSubImage2D:Ze,compressedTexSubImage3D:Ae,scissor:we,viewport:Pe,reset:Le}}function Bb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,f=new Set,d,u=new WeakMap,m=new Set,x=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):To("canvas")}function _(P,A,$){let be=1,fe=Re(P);if((fe.width>$||fe.height>$)&&(be=$/Math.max(fe.width,fe.height)),be<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let we=Math.floor(be*fe.width),Pe=Math.floor(be*fe.height);d===void 0&&(d=g(we,Pe));let he=A?g(we,Pe):d;return he.width=we,he.height=Pe,he.getContext("2d").drawImage(P,0,0,we,Pe),rt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+we+"x"+Pe+")."),he}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),P;return P}function w(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(P,A,$,be,fe,we=!1){if(P!==null){if(n[P]!==void 0)return n[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;be&&(Pe=e.get("EXT_texture_norm16"),Pe||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=A;if(A===n.RED&&($===n.FLOAT&&(he=n.R32F),$===n.HALF_FLOAT&&(he=n.R16F),$===n.UNSIGNED_BYTE&&(he=n.R8),$===n.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),$===n.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),A===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(he=n.R8UI),$===n.UNSIGNED_SHORT&&(he=n.R16UI),$===n.UNSIGNED_INT&&(he=n.R32UI),$===n.BYTE&&(he=n.R8I),$===n.SHORT&&(he=n.R16I),$===n.INT&&(he=n.R32I)),A===n.RG&&($===n.FLOAT&&(he=n.RG32F),$===n.HALF_FLOAT&&(he=n.RG16F),$===n.UNSIGNED_BYTE&&(he=n.RG8),$===n.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),$===n.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),A===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(he=n.RG8UI),$===n.UNSIGNED_SHORT&&(he=n.RG16UI),$===n.UNSIGNED_INT&&(he=n.RG32UI),$===n.BYTE&&(he=n.RG8I),$===n.SHORT&&(he=n.RG16I),$===n.INT&&(he=n.RG32I)),A===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(he=n.RGB8UI),$===n.UNSIGNED_SHORT&&(he=n.RGB16UI),$===n.UNSIGNED_INT&&(he=n.RGB32UI),$===n.BYTE&&(he=n.RGB8I),$===n.SHORT&&(he=n.RGB16I),$===n.INT&&(he=n.RGB32I)),A===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),$===n.UNSIGNED_INT&&(he=n.RGBA32UI),$===n.BYTE&&(he=n.RGBA8I),$===n.SHORT&&(he=n.RGBA16I),$===n.INT&&(he=n.RGBA32I)),A===n.RGB&&($===n.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),$===n.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(he=n.R11F_G11F_B10F)),A===n.RGBA){let ue=we?So:_t.getTransfer(fe);$===n.FLOAT&&(he=n.RGBA32F),$===n.HALF_FLOAT&&(he=n.RGBA16F),$===n.UNSIGNED_BYTE&&(he=ue===wt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),$===n.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function v(P,A){let $;return P?A===null||A===oi||A===tr?$=n.DEPTH24_STENCIL8:A===Zn?$=n.DEPTH32F_STENCIL8:A===Vr&&($=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===oi||A===tr?$=n.DEPTH_COMPONENT24:A===Zn?$=n.DEPTH_COMPONENT32F:A===Vr&&($=n.DEPTH_COMPONENT16),$}function y(P,A){return w(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==wn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){let A=new WeakRef(P);i.get(P).__ref=A,m.add(A),x.register(P,A,A)}function E(P){let A=i.get(P).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function R(P){z(P.target)}function D(P){L(P.target)}function z(P){P.removeEventListener("dispose",R),E(P),H(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function L(P){P.removeEventListener("dispose",D),E(P),le(P)}function G(){for(let P of m){let A=P.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):z(A))}m.clear(),f.clear()}function H(P){let A=i.get(P);if(A.__webglInit===void 0)return;let $=P.source,be=u.get($);if(be){let fe=be[A.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&X(P),Object.keys(be).length===0&&u.delete($)}i.remove(P)}function X(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let $=P.source,be=u.get($);delete be[A.__cacheKey],o.memory.textures--}function le(P){let A=i.get(P);A.__depthDisposeCallback&&A.__depthDisposeCallback();let $=P.depthTexture;if($&&$.renderTarget===P&&z($),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let we=0;we<A.__webglFramebuffer[fe].length;we++)n.deleteFramebuffer(A.__webglFramebuffer[fe][we]);else n.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)n.deleteFramebuffer(A.__webglFramebuffer[fe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let be=P.textures;for(let fe=0,we=be.length;fe<we;fe++){let Pe=i.get(be[fe]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(be[fe])}i.remove(P)}let O=0;function W(){O=0}function B(){return O}function ge(P){O=P}function de(){let P=O;return P>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,P}function J(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.mipmapsAutoUpdate),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ve(P,A){let $=i.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){let be=P.image;if(be===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{j($,P,A);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function Te(P,A){let $=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){j($,P,A);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function Ye(P,A){let $=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){j($,P,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function ie(P,A){let $=i.get(P);if(P.version>0&&$.__version!==P.version){se($,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}let De={[ml]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},Ke={[sn]:n.NEAREST,[Fp]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[ql]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},ke={[Hp]:n.NEVER,[Gu]:n.ALWAYS,[Gp]:n.LESS,[zu]:n.LEQUAL,[Vp]:n.EQUAL,[Hu]:n.GEQUAL,[Wp]:n.GREATER,[Xp]:n.NOTEQUAL};function Je(P,A){if(A.type===Zn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===wn||A.magFilter===ql||A.magFilter===Jo||A.magFilter===Gi||A.minFilter===wn||A.minFilter===ql||A.minFilter===Jo||A.minFilter===Gi)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,De[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,De[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,De[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Ke[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Ke[A.minFilter]),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ke[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===sn||A.minFilter!==Jo&&A.minFilter!==Gi||A.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Fe(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",R),T(A));let be=A.source,fe=u.get(be);fe===void 0&&(fe={},u.set(be,fe));let we=J(A);if(we!==P.__cacheKey){fe[we]===void 0&&(fe[we]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),fe[we].usedTimes++;let Pe=fe[P.__cacheKey];Pe!==void 0&&(fe[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&X(A)),P.__cacheKey=we,P.__webglTexture=fe[we].texture}return $}function N(P,A,$){return Math.floor(Math.floor(P/$)/A)}function Y(P,A,$,be){let we=P.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,$,be,A.data);else{we.sort((U,ce)=>U.start-ce.start);let Pe=0;for(let U=1;U<we.length;U++){let ce=we[Pe],re=we[U],Ie=ce.start+ce.count,Ce=N(re.start,A.width,4),ye=N(ce.start,A.width,4);re.start<=Ie+1&&Ce===ye&&N(re.start+re.count-1,A.width,4)===Ce?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Pe,we[Pe]=re)}we.length=Pe+1;let he=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let U=0,ce=we.length;U<ce;U++){let re=we[U],Ie=Math.floor(re.start/4),Ce=Math.ceil(re.count/4),ye=Ie%A.width,Me=Math.floor(Ie/A.width),Ve=Ce,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me),t.texSubImage2D(n.TEXTURE_2D,0,ye,Me,Ve,_e,$,be,A.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,he),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function j(P,A,$){let be=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(be=n.TEXTURE_3D);let fe=Fe(P,A),we=A.source;t.bindTexture(be,P.__webglTexture,n.TEXTURE0+$);let Pe=i.get(we);if(we.version!==Pe.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let _e=_t.getPrimaries(_t.workingColorSpace),ze=A.colorSpace===Wi?null:_t.getPrimaries(A.colorSpace),Ne=A.colorSpace===Wi||_e===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let ue=_(A.image,!1,s.maxTextureSize);ue=Ae(A,ue);let Le=r.convert(A.format,A.colorSpace),U=r.convert(A.type),ce=S(A.internalFormat,Le,U,A.normalized,A.colorSpace,A.isVideoTexture);Je(be,A);let re,Ie=A.mipmaps,Ce=A.isVideoTexture!==!0,ye=Pe.__version===void 0||fe===!0,Me=we.dataReady,Ve=y(A,ue);if(A.isDepthTexture)ce=v(A.format===Vi,A.type),ye&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,ce,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ce,ue.width,ue.height,0,Le,U,null));else if(A.isDataTexture)if(Ie.length>0){Ce&&ye&&t.texStorage2D(n.TEXTURE_2D,Ve,ce,Ie[0].width,Ie[0].height);for(let _e=0,ze=Ie.length;_e<ze;_e++)re=Ie[_e],Ce?Me&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,re.width,re.height,Le,U,re.data):t.texImage2D(n.TEXTURE_2D,_e,ce,re.width,re.height,0,Le,U,re.data);A.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(n.TEXTURE_2D,Ve,ce,ue.width,ue.height),Me&&Y(A,ue,Le,U)):t.texImage2D(n.TEXTURE_2D,0,ce,ue.width,ue.height,0,Le,U,ue.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ce&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,ce,Ie[0].width,Ie[0].height,ue.depth);for(let _e=0,ze=Ie.length;_e<ze;_e++)if(re=Ie[_e],A.format!==li)if(Le!==null)if(Ce){if(Me)if(A.layerUpdates.size>0){let Ne=ju(re.width,re.height,A.format,A.type);for(let Oe of A.layerUpdates){let tt=re.data.subarray(Oe*Ne/re.data.BYTES_PER_ELEMENT,(Oe+1)*Ne/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Oe,re.width,re.height,1,Le,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,ue.depth,Le,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,ue.depth,0,re.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,ue.depth,Le,U,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,ue.depth,0,Le,U,re.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ce&&ye&&t.texStorage2D(n.TEXTURE_2D,Ve,ce,Ie[0].width,Ie[0].height);for(let _e=0,ze=Ie.length;_e<ze;_e++)re=Ie[_e],A.format!==li?Le!==null?Ce?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,re.width,re.height,Le,re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,ce,re.width,re.height,0,re.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?Me&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,re.width,re.height,Le,U,re.data):t.texImage2D(n.TEXTURE_2D,_e,ce,re.width,re.height,0,Le,U,re.data)}else if(A.isDataArrayTexture)if(Ce){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,ce,ue.width,ue.height,ue.depth),Me)if(A.layerUpdates.size>0){let _e=ju(ue.width,ue.height,A.format,A.type);for(let ze of A.layerUpdates){let Ne=ue.data.subarray(ze*_e/ue.data.BYTES_PER_ELEMENT,(ze+1)*_e/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ze,ue.width,ue.height,1,Le,U,Ne)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,U,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,ue.width,ue.height,ue.depth,0,Le,U,ue.data);else if(A.isData3DTexture)Ce?(ye&&t.texStorage3D(n.TEXTURE_3D,Ve,ce,ue.width,ue.height,ue.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,U,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ce,ue.width,ue.height,ue.depth,0,Le,U,ue.data);else if(A.isFramebufferTexture){if(ye)if(Ce)t.texStorage2D(n.TEXTURE_2D,Ve,ce,ue.width,ue.height);else{let _e=ue.width,ze=ue.height;for(let Ne=0;Ne<Ve;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,ce,_e,ze,0,Le,U,null),_e>>=1,ze>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ue.parentNode!==_e){_e.appendChild(ue),f.add(A),_e.onpaint=ze=>{let Ne=ze.changedElements;for(let Oe of f)Ne.includes(Oe.image)&&(Oe.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ue);else{let Ne=n.RGBA,Oe=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,Oe,tt,ue)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ce&&ye){let _e=Re(Ie[0]);t.texStorage2D(n.TEXTURE_2D,Ve,ce,_e.width,_e.height)}for(let _e=0,ze=Ie.length;_e<ze;_e++)re=Ie[_e],Ce?Me&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Le,U,re):t.texImage2D(n.TEXTURE_2D,_e,ce,Le,U,re);A.generateMipmaps=!1}else if(Ce){if(ye){let _e=Re(ue);t.texStorage2D(n.TEXTURE_2D,Ve,ce,_e.width,_e.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,U,ue)}else t.texImage2D(n.TEXTURE_2D,0,ce,Le,U,ue);w(A)&&A.mipmapsAutoUpdate===!0&&M(be),Pe.__version=we.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function se(P,A,$){if(A.image.length!==6)return;let be=Fe(P,A),fe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);let we=i.get(fe);if(fe.version!==we.__version||be===!0){t.activeTexture(n.TEXTURE0+$);let Pe=_t.getPrimaries(_t.workingColorSpace),he=A.colorSpace===Wi?null:_t.getPrimaries(A.colorSpace),ue=A.colorSpace===Wi||Pe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Le=A.isCompressedTexture||A.image[0].isCompressedTexture,U=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let Oe=0;Oe<6;Oe++)!Le&&!U?ce[Oe]=_(A.image[Oe],!0,s.maxCubemapSize):ce[Oe]=U?A.image[Oe].image:A.image[Oe],ce[Oe]=Ae(A,ce[Oe]);let re=ce[0],Ie=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),ye=S(A.internalFormat,Ie,Ce,A.normalized,A.colorSpace),Me=A.isVideoTexture!==!0,Ve=we.__version===void 0||be===!0,_e=fe.dataReady,ze=y(A,re);Je(n.TEXTURE_CUBE_MAP,A);let Ne;if(A.isDepthTexture){if(ye=v(A.format===Vi,A.type),Ve)if(Me)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ye,re.width,re.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ye,re.width,re.height,0,Ie,Ce,null)}else if(Le){Me&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,ye,re.width,re.height);for(let Oe=0;Oe<6;Oe++){Ne=ce[Oe].mipmaps;for(let tt=0;tt<Ne.length;tt++){let ct=Ne[tt];A.format!==li?Ie!==null?Me?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt,0,0,ct.width,ct.height,Ie,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt,ye,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt,0,0,ct.width,ct.height,Ie,Ce,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt,ye,ct.width,ct.height,0,Ie,Ce,ct.data)}}}else{if(Ne=A.mipmaps,Me&&Ve){Ne.length>0&&ze++;let Oe=Re(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,ye,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(U){Me?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ce[Oe].width,ce[Oe].height,Ie,Ce,ce[Oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ye,ce[Oe].width,ce[Oe].height,0,Ie,Ce,ce[Oe].data);for(let tt=0;tt<Ne.length;tt++){let Rt=Ne[tt].image[Oe].image;Me?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt+1,0,0,Rt.width,Rt.height,Ie,Ce,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt+1,ye,Rt.width,Rt.height,0,Ie,Ce,Rt.data)}}else{Me?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ie,Ce,ce[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ye,Ie,Ce,ce[Oe]);for(let tt=0;tt<Ne.length;tt++){let ct=Ne[tt];Me?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt+1,0,0,Ie,Ce,ct.image[Oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,tt+1,ye,Ie,Ce,ct.image[Oe])}}}w(A)&&A.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),we.__version=fe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Z(P,A,$,be,fe,we){let Pe=r.convert($.format,$.colorSpace),he=r.convert($.type),ue=S($.internalFormat,Pe,he,$.normalized,$.colorSpace),Le=i.get(A),U=i.get($);if(U.__renderTarget=A,!Le.__hasExternalTextures){let ce=Math.max(1,A.width>>we),re=Math.max(1,A.height>>we);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,we,ue,ce,re,A.depth,0,Pe,he,null):t.texImage2D(fe,we,ue,ce,re,0,Pe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ne(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,fe,U.__webglTexture,0,Ge(A)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,fe,U.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(P,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer){let be=A.depthTexture,fe=be&&be.isDepthTexture?be.type:null,we=v(A.stencilBuffer,fe),Pe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ne(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(A),we,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(A),we,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,we,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,P)}else{let be=A.textures;for(let fe=0;fe<be.length;fe++){let we=be[fe],Pe=r.convert(we.format,we.colorSpace),he=r.convert(we.type),ue=S(we.internalFormat,Pe,he,we.normalized,we.colorSpace);ne(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(A),ue,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(A),ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ue,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(P,A,$){let be=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=i.get(A.depthTexture);fe.__renderTarget=A;let we=be?A.depthTexture.image[0]:A.depthTexture.image;(!fe.__webglTexture||we.width!==A.width||we.height!==A.height)&&(we.width=A.width,we.height=A.height,A.depthTexture.needsUpdate=!0),be?ie(A.depthTexture,0):ve(A.depthTexture,0);let Pe=fe.__webglTexture,he=Ge(A),ue=be?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,Le=A.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Bi)ne(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ue,Pe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ue,Pe,0);else if(A.depthTexture.format===Vi)ne(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ue,Pe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ue,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(P){let A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let be=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),be){let fe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,be.removeEventListener("dispose",fe)};be.addEventListener("dispose",fe),A.__depthDisposeCallback=fe}A.__boundDepthTexture=be}if(P.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let be=0;be<6;be++)Q(A.__webglFramebuffer[be],P,be);else P.texture.mipmaps.length>0?Q(A.__webglFramebuffer[0],P,0):Q(A.__webglFramebuffer,P,0);else if($){A.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[be]),A.__webglDepthbuffer[be]===void 0)A.__webglDepthbuffer[be]=n.createRenderbuffer(),xe(A.__webglDepthbuffer[be],P,!1);else{let fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=A.__webglDepthbuffer[be];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,we)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),xe(A.__webglDepthbuffer,P,!1);else{let fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,we)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(P,A,$){let be=i.get(P);A!==void 0&&Z(be.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&pe(P)}function Be(P){let A=P.texture,$=i.get(P),be=i.get(A);P.addEventListener("dispose",D),T(P);let fe=P.textures,we=P.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=A.version,o.memory.textures++),we){$.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps.length>0){$.__webglFramebuffer[he]=[];for(let ue=0;ue<A.mipmaps.length;ue++)$.__webglFramebuffer[he][ue]=n.createFramebuffer()}else $.__webglFramebuffer[he]=n.createFramebuffer()}else{if(A.mipmaps.length>0){$.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)$.__webglFramebuffer[he]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let he=0,ue=fe.length;he<ue;he++){let Le=i.get(fe[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ne(P)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let he=0;he<fe.length;he++){let ue=fe[he];$.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[he]);let Le=r.convert(ue.format,ue.colorSpace),U=r.convert(ue.type),ce=S(ue.internalFormat,Le,U,ue.normalized,ue.colorSpace,P.isXRRenderTarget===!0),re=Ge(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ce,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,$.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),xe($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),Je(n.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)Z($.__webglFramebuffer[he][ue],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ue);else Z($.__webglFramebuffer[he],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);w(A)?M(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let he=0,ue=fe.length;he<ue;he++){let Le=fe[he],U=i.get(Le),ce=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,U.__webglTexture),Je(ce,Le),Z($.__webglFramebuffer,P,Le,n.COLOR_ATTACHMENT0+he,ce,0),w(Le)&&M(ce)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),Je(he,A),A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)Z($.__webglFramebuffer[ue],P,A,n.COLOR_ATTACHMENT0,he,ue);else Z($.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,he,0);w(A)?M(he):A.mipmaps.length>0&&n.texParameteri(he,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&pe(P)}function F(P){let A=P.textures;for(let $=0,be=A.length;$<be;$++){let fe=A[$];if(w(fe)&&fe.mipmapsAutoUpdate===!0){let we=b(P),Pe=i.get(fe).__webglTexture;t.bindTexture(we,Pe),M(we),t.unbindTexture()}}}let me=[];function Ee(P){if(P.samples>0){if(ne(P)===!1){let A=P.textures,$=P.width,be=P.height,fe=n.COLOR_BUFFER_BIT,we=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(P),he=A.length>1;if(he)for(let Le=0;Le<A.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);let U=i.get(A[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,$,be,0,0,$,be,fe,n.NEAREST),l===!0&&(me.length=0,me.push(n.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&me.push(we),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<A.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);let U=i.get(A[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let A=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ge(P){return Math.min(s.maxSamples,P.samples)}function ne(P){let A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ze(P){let A=o.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Ae(P,A){let $=P.colorSpace,be=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==bo&&$!==Wi&&(_t.getTransfer($)===wt?(be!==li||fe!==Hn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",$)),A}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=de,this.resetTextureUnits=W,this.getTextureUnits=B,this.setTextureUnits=ge,this.setTexture2D=ve,this.setTexture2DArray=Te,this.setTexture3D=Ye,this.setTextureCube=ie,this.rebindTextures=Se,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ne,this.dispose=G}function zb(n,e){function t(i,s=Wi){let r,o=_t.getTransfer(s);if(i===Hn)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Du)return n.BYTE;if(i===Nu)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===Fu)return n.ALPHA;if(i===ku)return n.RGB;if(i===li)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Jl)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===fs)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===jo||i===Qo||i===ea||i===ta)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac||i===lc||i===cc||i===na||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lc)return r.COMPRESSED_R11_EAC;if(i===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===na)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===vc||i===_c||i===yc||i===Mc||i===bc||i===Sc||i===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===Ec||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tc)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===Cc||i===ia||i===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
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

}`,dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new No(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yn({vertexShader:Hb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fd=class extends gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,m=null,x=typeof XRWebGLBinding<"u",p=new dd,g={},_=t.getContextAttributes(),w=null,M=null,b=[],S=[],v=new He,y=null,T=null,E=new cn;E.viewport=new Gt;let R=new cn;R.viewport=new Gt;let D=[E,R],z=new Vl,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ve=b[J];return ve===void 0&&(ve=new Dr,b[J]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(J){let ve=b[J];return ve===void 0&&(ve=new Dr,b[J]=ve),ve.getGripSpace()},this.getHand=function(J){let ve=b[J];return ve===void 0&&(ve=new Dr,b[J]=ve),ve.getHandSpace()};function H(J){let ve=S.indexOf(J.inputSource);if(ve===-1)return;let Te=b[ve];Te!==void 0&&(Te.update(J.inputSource,J.frame,c||o),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",le);for(let J=0;J<b.length;J++){let ve=S[J];ve!==null&&(S[J]=null,b[J].disconnect(ve))}L=null,G=null,p.reset();for(let J in g)delete g[J];if(e.setRenderTarget(w),u=null,d=null,f=null,s=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",le),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ye=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=_.stencil?Vi:Bi,Ye=_.stencil?tr:oi);let De={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Bn(d.textureWidth,d.textureHeight,{format:li,type:Hn,depthTexture:new Hi(d.textureWidth,d.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Bn(u.framebufferWidth,u.framebufferHeight,{format:li,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function le(J){for(let ve=0;ve<J.removed.length;ve++){let Te=J.removed[ve],Ye=S.indexOf(Te);Ye>=0&&(S[Ye]=null,b[Ye].disconnect(Te))}for(let ve=0;ve<J.added.length;ve++){let Te=J.added[ve],Ye=S.indexOf(Te);if(Ye===-1){for(let De=0;De<b.length;De++)if(De>=S.length){S.push(Te),Ye=De;break}else if(S[De]===null){S[De]=Te,Ye=De;break}if(Ye===-1)break}let ie=b[Ye];ie&&ie.connect(Te)}}function O(J,ve){ve===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ve.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ve=J.near,Te=J.far;p.texture!==null&&(p.depthNear>0&&(ve=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),z.near=R.near=E.near=ve,z.far=R.far=E.far=Te,(L!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,G=z.far),z.layers.mask=J.layers.mask|6,E.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let Ye=J.parent,ie=z.cameras;O(z,Ye);for(let De=0;De<ie.length;De++)O(ie[De],Ye);z.projectionMatrix.copy(E.projectionMatrix),z.projectionMatrixInverse.copy(E.projectionMatrixInverse),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),W(J,z,Ye)};function W(J,ve,Te){Te===null?J.matrix.copy(ve.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(ve.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ve.projectionMatrix),J.projectionMatrixInverse.copy(ve.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ir*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(J){return g[J]};let B=null;function ge(J,ve){if(h=ve.getViewerPose(c||o),m=ve,h!==null){let Te=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let Ye=!1;Te.length!==z.cameras.length&&(z.cameras.length=0,Ye=!0);for(let ke=0;ke<Te.length;ke++){let Je=Te[ke],Fe=null;if(u!==null)Fe=u.getViewport(Je);else{let Y=f.getViewSubImage(d,Je);Fe=Y.viewport,ke===0&&(e.setRenderTargetTextures(M,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(M))}let N=D[ke];N===void 0&&(N=new cn,N.layers.enable(ke),N.viewport=new Gt,D[ke]=N),N.matrix.fromArray(Je.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Je.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ke===0&&(z.matrix.copy(N.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ye===!0&&z.cameras.push(N)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let ke=f.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,s.renderState)}if(ie&&ie.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let ke=0;ke<Te.length;ke++){let Je=Te[ke].camera;if(Je){let Fe=g[Je];Fe||(Fe=new No,g[Je]=Fe);let N=f.getCameraImage(Je);Fe.sourceTexture=N}}}}for(let Te=0;Te<b.length;Te++){let Ye=S[Te],ie=b[Te];Ye!==null&&ie!==void 0&&ie.update(Ye,ve,c||o)}B&&B(J,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),m=null}let de=new R0;de.setAnimationLoop(ge),this.setAnimationLoop=function(J){B=J},this.dispose=function(){}}},Vb=new pt,k0=new at;k0.set(-1,0,0,0,1,0,0,0,1);function Wb(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Zu(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,w,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&u(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),w=_.envMap,M=_.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(k0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=w*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xb(n,e,t,i){let s={},r={};function o(_,w){let M=w.program;i.uniformBlockBinding(_,M,s[_.id])}function a(_,w){let M=s[_.id];M===void 0&&(m(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",p));let b=w.program;i.updateUBOMapping(_,b);let S=e.render.frame;r[_.id]!==S&&(c(_),r[_.id]=S)}function l(_){let w=n.createBuffer(),M=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,M,b),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(_){let w=s[_.id],M=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,v=M.length;S<v;S++){let y=M[S];if(Array.isArray(y))for(let T=0,E=y.length;T<E;T++)h(y[T],S,T,b);else h(y,S,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,w,M,b){if(d(_,w,M,b)===!0){let S=_.__offset,v=_.value;if(Array.isArray(v)){let y=0;for(let T=0;T<v.length;T++){let E=v[T],R=x(E,!0);f(E,_.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,_.__data)}}function f(_,w,M){typeof _=="number"||typeof _=="boolean"?w[M]=_:_.isMatrix3?(w[M]=_.elements[0],w[M+1]=_.elements[1],w[M+2]=_.elements[2],w[M+3]=0,w[M+4]=_.elements[3],w[M+5]=_.elements[4],w[M+6]=_.elements[5],w[M+7]=0,w[M+8]=_.elements[6],w[M+9]=_.elements[7],w[M+10]=_.elements[8],w[M+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-M),M):_.toArray(w,M)}function d(_,w,M,b){let S=_.value,v=w+"_"+M;if(Array.isArray(S)){b[v]===void 0&&(b[v]=[]);let y=b[v],T=!1;for(let E=0;E<S.length;E++)u(S[E],y,E)===!0&&(T=!0);return T}return u(S,b,v)}function u(_,w,M){if(w[M]===void 0)return typeof _=="number"||typeof _=="boolean"?w[M]=_:ArrayBuffer.isView(_)?w[M]=_.slice():w[M]=_.clone(),!0;{let b=w[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return w[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function m(_){let w=_.uniforms,M=0,b=16;for(let v=0,y=w.length;v<y;v++){let T=Array.isArray(w[v])?w[v]:[w[v]];for(let E=0,R=T.length;E<R;E++){let D=T[E],z=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(w[v])||Array.isArray(D.value),G=M;for(let X=0,le=z.length;X<le;X++){let O=z[X],W=x(O,L),B=M%b,ge=B%W.boundary,de=B+ge;M+=ge,de!==0&&b-de<W.storage&&(M+=b-de),X===0&&(G=M),M+=W.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((M-G)/Float32Array.BYTES_PER_ELEMENT),D.__offset=G}}let S=M%b;return S>0&&(M+=b-S),_.__size=M,_.__cache={},this}function x(_,w){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(_){let w=_.target;w.removeEventListener("dispose",p),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var Yb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function qb(){return _i===null&&(_i=new Po(Yb,16,16,fs,ai),_i.name="DFG_LUT",_i.minFilter=wn,_i.magFilter=wn,_i.wrapS=mi,_i.wrapT=mi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Oc=class{constructor(e={}){let{canvas:t=qp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Hn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=u,p=new Set([ec,Ql,jl]),g=new Set([Hn,oi,Vr,tr,Zl,Kl]),_=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,S=null,v=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,D=null,z=null,L=null,G=null;this._outputColorSpace=ln;let H=0,X=0,le=null,O=-1,W=null,B=new Gt,ge=new Gt,de=null,J=new it(0),ve=0,Te=t.width,Ye=t.height,ie=1,De=null,Ke=null,ke=new Gt(0,0,Te,Ye),Je=new Gt(0,0,Te,Ye),Fe=!1,N=new $s,Y=new bl,j=!1,se=!1,Z=new pt,xe=new k,Q=new Gt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Be(){return le===null?ie:1}let F=i;function me(C,V){return t.getContext(C,V)}let Ee,Ge,ne,Ze,Ae,Re,P,A,$,be,fe,we,Pe,he,ue,Le,U,ce,re,Ie,Ce,ye,Me;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),F===null){let V="webgl2";if(F=me(V,C),F===null)throw me(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(C){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),ot("WebGLRenderer: "+C.message),C}function Ve(){Ee=new sM(F),Ee.init(),Ce=new zb(F,Ee),Ge=new q1(F,Ee,e,Ce),ne=new kb(F,Ee),Ge.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),z=F.createFramebuffer(),L=F.createFramebuffer(),G=F.createFramebuffer(),Ze=new aM(F),Ae=new wb,Re=new Bb(F,Ee,ne,Ae,Ge,Ce,Ze),P=new iM(E),A=new c_(F),ye=new X1(F,A),$=new rM(F,A,Ze,ye),be=new cM(F,$,A,ye,Ze),ce=new lM(F,Ge,Re),ue=new $1(Ae),fe=new Sb(E,P,Ee,Ge,ye,ue),we=new Wb(E,Ae),Pe=new Eb,he=new Lb(Ee),U=new W1(E,P,ne,be,m,l),Le=new Fb(E,be,Ge),Me=new Xb(F,Ze,Ge,ne),re=new Y1(F,Ee,Ze),Ie=new oM(F,Ee,Ze),Ze.programs=fe.programs,E.capabilities=Ge,E.extensions=Ee,E.properties=Ae,E.renderLists=Pe,E.shadowMap=Le,E.state=ne,E.info=Ze}x!==Hn&&(T=new uM(x,t.width,t.height,a,s,r));let _e=new fd(E,F);this.xr=_e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(Te,Ye,!1))},this.getSize=function(C){return C.set(Te,Ye)},this.setSize=function(C,V,oe=!0){if(_e.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=C,Ye=V,t.width=Math.floor(C*ie),t.height=Math.floor(V*ie),oe===!0&&(t.style.width=C+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(Te*ie,Ye*ie).floor()},this.setDrawingBufferSize=function(C,V,oe){Te=C,Ye=V,ie=oe,t.width=Math.floor(C*oe),t.height=Math.floor(V*oe),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(x===Hn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(ke)},this.setViewport=function(C,V,oe,ee){C.isVector4?ke.set(C.x,C.y,C.z,C.w):ke.set(C,V,oe,ee),ne.viewport(B.copy(ke).multiplyScalar(Be()).round())},this.getScissor=function(C){return C.copy(Je)},this.setScissor=function(C,V,oe,ee){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,V,oe,ee),ne.scissor(ge.copy(Je).multiplyScalar(Be()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(C){ne.setScissorTest(Fe=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){Ke=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,oe=!0){let ee=0;if(C){let te=!1;if(le!==null){let Xe=le.texture.format;te=p.has(Xe)}if(te){let Xe=le.texture.type,je=g.has(Xe),We=U.getClearColor(),$e=U.getClearAlpha(),nt=We.r,lt=We.g,xt=We.b;je?(_[0]=nt,_[1]=lt,_[2]=xt,_[3]=$e,F.clearBufferuiv(F.COLOR,0,_)):(w[0]=nt,w[1]=lt,w[2]=xt,w[3]=$e,F.clearBufferiv(F.COLOR,0,w))}else ee|=F.COLOR_BUFFER_BIT}V&&(ee|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),U.dispose(),Pe.dispose(),he.dispose(),Re.dispose(),Ae.dispose(),P.dispose(),be.dispose(),$.dispose(),ye.dispose(),Me.dispose(),fe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",on),_e.removeEventListener("sessionend",Lt),Pn.stop()};function ze(C){C.preventDefault(),Wu("WebGLRenderer: Context Lost."),R=!0}function Ne(){Wu("WebGLRenderer: Context Restored."),R=!1;let C=Ze.autoReset,V=Le.enabled,oe=Le.autoUpdate,ee=Le.needsUpdate,te=Le.type;Ve(),Ze.autoReset=C,Le.enabled=V,Le.autoUpdate=oe,Le.needsUpdate=ee,Le.type=te}function Oe(C){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tt(C){let V=C.target;V.removeEventListener("dispose",tt),ct(V)}function ct(C){Rt(C),Ae.remove(C)}function Rt(C){let V=Ae.get(C).programs;V!==void 0&&(V.forEach(function(oe){fe.releaseProgram(oe)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,oe,ee,te,Xe){V===null&&(V=pe);let je=te.isMesh&&te.matrixWorld.determinantAffine()<0,We=oo(C,V,oe,ee,te);ne.setMaterial(ee,je);let $e=oe.index,nt=1;if(ee.wireframe===!0){if($e=$.getWireframeAttribute(oe),$e===void 0)return;nt=2}let lt=oe.drawRange,xt=oe.attributes.position,Qe=lt.start*nt,vt=(lt.start+lt.count)*nt;Xe!==null&&(Qe=Math.max(Qe,Xe.start*nt),vt=Math.min(vt,(Xe.start+Xe.count)*nt)),$e!==null?(Qe=Math.max(Qe,0),vt=Math.min(vt,$e.count)):xt!=null&&(Qe=Math.max(Qe,0),vt=Math.min(vt,xt.count));let Yt=vt-Qe;if(Yt<0||Yt===1/0)return;ye.setup(te,ee,We,oe,$e);let Nt,Pt=re;if($e!==null&&(Nt=A.get($e),Pt=Ie,Pt.setIndex(Nt)),te.isMesh)ee.wireframe===!0?(ne.setLineWidth(ee.wireframeLinewidth*Be()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(te.isLine){let fn=ee.linewidth;fn===void 0&&(fn=1),ne.setLineWidth(fn*Be()),te.isLineSegments?Pt.setMode(F.LINES):te.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else te.isPoints?Pt.setMode(F.POINTS):te.isSprite&&Pt.setMode(F.TRIANGLES);if(te.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))Pt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let fn=te._multiDrawStarts,et=te._multiDrawCounts,Sn=te._multiDrawCount,St=$e?A.get($e).bytesPerElement:1,ks=Ae.get(ee).currentProgram.getUniforms();for(let pn=0;pn<Sn;pn++)ks.setValue(F,"_gl_DrawID",pn),Pt.render(fn[pn]/St,et[pn])}else if(te.isInstancedMesh)Pt.renderInstances(Qe,Yt,te.count);else if(oe.isInstancedBufferGeometry){let fn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,et=Math.min(oe.instanceCount,fn);Pt.renderInstances(Qe,Yt,et)}else Pt.render(Qe,Yt)};function Ot(C,V,oe,ee){D!==null&&C.isNodeMaterial&&D.setObject(ee,C),j===!0&&ue.setState(C,oe,!1),C.transparent===!0&&C.side===$n&&C.forceSinglePass===!1?(C.side=$t,C.needsUpdate=!0,Et(C,V,ee),C.side=ds,C.needsUpdate=!0,Et(C,V,ee),C.side=$n):Et(C,V,ee)}this.compile=function(C,V,oe=null){oe===null&&(oe=C),D!==null&&D.renderStart(C,V,oe),S=he.get(oe),S.init(V),y.push(S),oe.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),C!==oe&&C.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),se=this.localClippingEnabled,j=ue.init(this.clippingPlanes,se),j===!0&&ue.setGlobalState(this.clippingPlanes,V),D!==null&&Le.render(S.state.shadowsArray,oe,V);let ee=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Xe=te.material;if(Xe)if(Array.isArray(Xe))for(let je=0;je<Xe.length;je++){let We=Xe[je];Ot(We,oe,V,te),ee.add(We)}else Ot(Xe,oe,V,te),ee.add(Xe)}),S=y.pop(),D!==null&&D.renderEnd(),ee},this.compileAsync=function(C,V,oe=null){let ee=this.compile(C,V,oe);return new Promise(te=>{function Xe(){if(ee.forEach(function(je){let $e=Ae.get(je).currentProgram;($e===void 0||$e.isReady())&&ee.delete(je)}),ee.size===0){te(C);return}setTimeout(Xe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Ct=null;function Un(C){Ct&&Ct(C)}function on(){Pn.stop()}function Lt(){Pn.start()}let Pn=new R0;Pn.setAnimationLoop(Un),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(C){Ct=C,_e.setAnimationLoop(C),C===null?Pn.stop():Pn.start()},_e.addEventListener("sessionstart",on),_e.addEventListener("sessionend",Lt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(C,V);let oe=_e.enabled===!0&&_e.isPresenting===!0,ee=T!==null&&(le===null||oe)&&T.begin(E,le);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(V),V=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,V,le),S=he.get(C,y.length),S.init(V),S.state.textureUnits=Re.getTextureUnits(),y.push(S),Z.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Y.setFromArrayCamera(V):N.setFromProjectionMatrix(Z,Yn,V.reversedDepth),se=this.localClippingEnabled,j=ue.init(this.clippingPlanes,se),b=Pe.get(C,v.length),b.init(),v.push(b),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let je=E.xr.getDepthSensingMesh();je!==null&&fi(je,V,-1/0,E.sortObjects)}fi(C,V,0,E.sortObjects),b.finish(),D!==null&&D.updateLights(S.state.lightsArray),E.sortObjects===!0&&b.sort(De,Ke),Se=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Se&&U.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),j===!0&&ue.beginShadows();let te=S.state.shadowsArray;if(Le.render(te,C,V),j===!0&&ue.endShadows(),(ee&&T.hasRenderPass())===!1){let je=b.opaque,We=b.transmissive;if(S.setupLights(),V.isArrayCamera){let $e=V.cameras;if(We.length>0)for(let nt=0,lt=$e.length;nt<lt;nt++){let xt=$e[nt];q(je,We,C,xt)}Se&&U.render(C);for(let nt=0,lt=$e.length;nt<lt;nt++){let xt=$e[nt];ei(b,C,xt,xt.viewport)}}else We.length>0&&q(je,We,C,V),Se&&U.render(C),ei(b,C,V)}le!==null&&X===0&&(Re.updateMultisampleRenderTarget(le),Re.updateRenderTargetMipmap(le)),ee&&T.end(E),C.isScene===!0&&C.onAfterRender(E,C,V),ye.resetDefaultState(),O=-1,W=null,y.pop(),y.length>0?(S=y[y.length-1],Re.setTextureUnits(S.state.textureUnits),j===!0&&ue.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,D!==null&&D.renderEnd()};function fi(C,V,oe,ee){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){let je=V.isArrayCamera?Y:N;if(!C.frustumCulled||C.intersectsFrustum(je)){ee&&Q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Z);let We=be.update(C),$e=C.material;$e.visible&&b.push(C,We,$e,oe,Q.z,null,V)}}else if(C.isMesh||C.isLine||C.isPoints){let je=V.isArrayCamera?Y:N;if(!C.frustumCulled||C.intersectsFrustum(je)){let We=be.update(C),$e=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Q.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Q.copy(We.boundingSphere.center)),Q.applyMatrix4(C.matrixWorld).applyMatrix4(Z)),Array.isArray($e)){let nt=We.groups;for(let lt=0,xt=nt.length;lt<xt;lt++){let Qe=nt[lt],vt=$e[Qe.materialIndex];vt&&vt.visible&&b.push(C,We,vt,oe,Q.z,Qe,V)}}else $e.visible&&b.push(C,We,$e,oe,Q.z,null,V)}}}let Xe=C.children;for(let je=0,We=Xe.length;je<We;je++)fi(Xe[je],V,oe,ee)}function ei(C,V,oe,ee){let{opaque:te,transmissive:Xe,transparent:je}=C;S.setupLightsView(oe),j===!0&&ue.setGlobalState(E.clippingPlanes,oe),ee&&ne.viewport(B.copy(ee)),te.length>0&&Ue(te,V,oe),Xe.length>0&&Ue(Xe,V,oe),je.length>0&&Ue(je,V,oe),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function q(C,V,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let Qe=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Bn(1,1,{generateMipmaps:!0,type:Qe?ai:Hn,minFilter:Gi,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Xe=S.state.transmissionRenderTarget[ee.id],je=ee.viewport||B;Xe.setSize(je.z*E.transmissionResolutionScale,je.w*E.transmissionResolutionScale);let We=E.getRenderTarget(),$e=E.getActiveCubeFace(),nt=E.getActiveMipmapLevel();E.setRenderTarget(Xe),E.getClearColor(J),ve=E.getClearAlpha(),ve<1&&E.setClearColor(16777215,.5),E.clear(),Se&&U.render(oe);let lt=E.toneMapping;E.toneMapping=vi;let xt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),j===!0&&ue.setGlobalState(E.clippingPlanes,ee),Ue(C,oe,ee),Re.updateMultisampleRenderTarget(Xe),Re.updateRenderTargetMipmap(Xe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let vt=0,Yt=V.length;vt<Yt;vt++){let Nt=V[vt],{object:Pt,geometry:fn,material:et,group:Sn}=Nt;if(et.side===$n&&Pt.layers.test(ee.layers)){let St=et.side;et.side=$t,et.needsUpdate=!0,st(Pt,oe,ee,fn,et,Sn),et.side=St,et.needsUpdate=!0,Qe=!0}}Qe===!0&&(Re.updateMultisampleRenderTarget(Xe),Re.updateRenderTargetMipmap(Xe))}E.setRenderTarget(We,$e,nt),E.setClearColor(J,ve),xt!==void 0&&(ee.viewport=xt),E.toneMapping=lt}function Ue(C,V,oe){let ee=V.isScene===!0?V.overrideMaterial:null;for(let te=0,Xe=C.length;te<Xe;te++){let je=C[te],{object:We,geometry:$e,group:nt}=je,lt=je.material;lt.allowOverride===!0&&ee!==null&&(lt=ee),We.layers.test(oe.layers)&&st(We,V,oe,$e,lt,nt)}}function st(C,V,oe,ee,te,Xe){D!==null&&te.isNodeMaterial&&D.setObject(C,te),C.onBeforeRender(E,V,oe,ee,te,Xe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(E,V,oe,ee,C,Xe),te.transparent===!0&&te.side===$n&&te.forceSinglePass===!1?(te.side=$t,te.needsUpdate=!0,E.renderBufferDirect(oe,V,ee,te,C,Xe),te.side=ds,te.needsUpdate=!0,E.renderBufferDirect(oe,V,ee,te,C,Xe),te.side=$n):E.renderBufferDirect(oe,V,ee,te,C,Xe),C.onAfterRender(E,V,oe,ee,te,Xe)}function Dt(C){let V=0;for(let oe of C)oe.texture!==null&&V++;return V}function Et(C,V,oe){V.isScene!==!0&&(V=pe);let ee=Ae.get(C),te=S.state.lights,Xe=S.state.shadowsArray,je=te.state.version,We=fe.getParameters(C,te.state,Xe,V,oe,S.state.lightProbeGridArray),$e=fe.getProgramCacheKey(We),nt=ee.programs;ee.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,ee.fog=V.fog;let lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ee.envMap=P.get(C.envMap||ee.environment,lt),ee.envMapRotation=ee.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",tt),nt=new Map,ee.programs=nt,ee.programVariants=new Map);let xt=nt.get($e);if(xt!==void 0){if(ee.currentProgram===xt&&ee.lightsStateVersion===je)return Wn(C,We),xt}else We.uniforms=fe.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,oe,We),C.onBeforeCompile(We,E),xt=fe.acquireProgram(We,$e),nt.set($e,xt),ee.uniforms=We.uniforms;let Qe=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=ue.uniform),Wn(C,We),ee.needsLights=zh(C),ee.lightsStateVersion=je,ee.needsLights&&(Qe.ambientLightColor.value=te.state.ambient,Qe.lightProbe.value=te.state.probe,Qe.sunLights.value=te.state.sun,Qe.sunLightShadows.value=te.state.sunShadow,Qe.directionalLights.value=te.state.directional,Qe.directionalLightShadows.value=te.state.directionalShadow,Qe.spotLights.value=te.state.spot,Qe.spotLightShadows.value=te.state.spotShadow,Qe.rectAreaLights.value=te.state.rectArea,Qe.ltc_1.value=te.state.rectAreaLTC1,Qe.ltc_2.value=te.state.rectAreaLTC2,Qe.pointLights.value=te.state.point,Qe.pointLightShadows.value=te.state.pointShadow,Qe.hemisphereLights.value=te.state.hemi,Qe.sunShadowMatrix.value=te.state.sunShadowMatrix,Qe.sunShadowCascade.value=te.state.sunShadowCascade,Qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Qe.spotLightMatrix.value=te.state.spotLightMatrix,Qe.spotLightMap.value=te.state.spotLightMap,Qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.numLightProbeGrids=Dt(S.state.lightProbeGridArray),ee.currentProgram=xt,ee.uniformsList=null,xt}function Ut(C,V,oe,ee,te){let Xe=Ae.get(C),je=Xe.currentProgram.id+","+ee+","+te,We=Xe.programVariants.get(je);return We===void 0?(We=Et(C,V,oe),Xe.programVariants.set(je,We)):(Xe.currentProgram=We,Xe.uniformsList=null,Xe.outputColorSpace=ee,Xe.toneMapping=te),We}function yt(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Xr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Wn(C,V){let oe=Ae.get(C);oe.outputColorSpace=V.outputColorSpace,oe.batching=V.batching,oe.batchingColor=V.batchingColor,oe.instancing=V.instancing,oe.instancingColor=V.instancingColor,oe.instancingMorph=V.instancingMorph,oe.skinning=V.skinning,oe.morphTargets=V.morphTargets,oe.morphNormals=V.morphNormals,oe.morphColors=V.morphColors,oe.morphTargetsCount=V.morphTargetsCount,oe.numClippingPlanes=V.numClippingPlanes,oe.numIntersection=V.numClipIntersection,oe.vertexAlphas=V.vertexAlphas,oe.vertexTangents=V.vertexTangents,oe.toneMapping=V.toneMapping}function oo(C,V,oe,ee,te){V.isScene!==!0&&(V=pe),Re.resetTextureUnits();let Xe=V.fog,je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?V.environment:null,We=le===null?E.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:_t.workingColorSpace,$e=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,nt=P.get(ee.envMap||je,$e),lt=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,xt=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!oe.morphAttributes.position,vt=!!oe.morphAttributes.normal,Yt=!!oe.morphAttributes.color,Nt=vi;ee.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Nt=E.toneMapping);let Pt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,fn=Pt!==void 0?Pt.length:0,et=Ae.get(ee),Sn=S.state.lights;if(j===!0&&(se===!0||C!==W)){let zt=C===W&&ee.id===O;ue.setState(ee,C,zt)}let St=!1,ks=!1;ee.version===et.__version?et.needsLights&&et.lightsStateVersion!==Sn.state.version||te.isBatchedMesh&&et.batching===!1||!te.isBatchedMesh&&et.batching===!0||te.isBatchedMesh&&et.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&et.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&et.instancing===!1||!te.isInstancedMesh&&et.instancing===!0||te.isSkinnedMesh&&et.skinning===!1||!te.isSkinnedMesh&&et.skinning===!0||te.isInstancedMesh&&et.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&et.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&et.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&et.instancingMorph===!1&&te.morphTexture!==null||et.envMap!==nt||ee.fog===!0&&et.fog!==Xe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ue.numPlanes||et.numIntersection!==ue.numIntersection)||et.vertexAlphas!==lt||et.vertexTangents!==xt||et.morphTargets!==Qe||et.morphNormals!==vt||et.morphColors!==Yt||et.morphTargetsCount!==fn||et.numLightProbeGrids!==Dt(S.state.lightProbeGridArray)?St=!0:(et.outputColorSpace!==We||et.toneMapping!==Nt)&&(ks=!0):(St=!0,et.__version=ee.version);let pn=et.currentProgram;(St===!0||ks===!0)&&(pn=ks===!0?Ut(ee,V,te,We,Nt):Et(ee,V,te),D&&ee.isNodeMaterial&&D.onUpdateProgram(ee,pn,et));let Ua=!1,ts=!1,Bs=!1,Mt=pn.getUniforms(),an=et.uniforms;if(ne.useProgram(pn.program)&&(Ua=!0,ts=!0,Bs=!0),ee.id!==O&&(O=ee.id,ts=!0),Ua||W!==C){ne.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(F,"projectionMatrix",C.projectionMatrix),Mt.setValue(F,"viewMatrix",C.matrixWorldInverse);let tn=Mt.map.cameraPosition;tn!==void 0&&tn.setValue(F,xe.setFromMatrixPosition(C.matrixWorld)),Ge.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),W!==C&&(W=C,ts=!0,Bs=!0)}if(et.needsLights&&(Sn.state.sunShadowMap.length>0&&Mt.setValue(F,"sunShadowMap",Sn.state.sunShadowMap,Re),Sn.state.directionalShadowMap.length>0&&Mt.setValue(F,"directionalShadowMap",Sn.state.directionalShadowMap,Re),Sn.state.spotShadowMap.length>0&&Mt.setValue(F,"spotShadowMap",Sn.state.spotShadowMap,Re),Sn.state.pointShadowMap.length>0&&Mt.setValue(F,"pointShadowMap",Sn.state.pointShadowMap,Re)),te.isSkinnedMesh){Mt.setOptional(F,te,"bindMatrix"),Mt.setOptional(F,te,"bindMatrixInverse");let zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Mt.setValue(F,"boneTexture",zt.boneTexture,Re))}te.isBatchedMesh&&(Mt.setOptional(F,te,"batchingTexture"),Mt.setValue(F,"batchingTexture",te._matricesTexture,Re),Mt.setOptional(F,te,"batchingIdTexture"),Mt.setValue(F,"batchingIdTexture",te._indirectTexture,Re),Mt.setOptional(F,te,"batchingColorTexture"),te._colorsTexture!==null&&Mt.setValue(F,"batchingColorTexture",te._colorsTexture,Re));let ti=oe.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&ce.update(te,oe,pn),(ts||et.receiveShadow!==te.receiveShadow)&&(et.receiveShadow=te.receiveShadow,Mt.setValue(F,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&V.environment!==null&&(an.envMapIntensity.value=V.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=qb()),ts){if(Mt.setValue(F,"toneMappingExposure",E.toneMappingExposure),et.needsLights&&fr(an,Bs),Xe&&ee.fog===!0&&we.refreshFogUniforms(an,Xe),we.refreshMaterialUniforms(an,ee,ie,Ye,S.state.transmissionRenderTarget[C.id]),et.needsLights&&et.numLightProbeGrids>0){let zt=M,tn=0;for(let Li of S.state.lightProbeGridArray)Li.texture!==null&&(zt.textures[tn]=Li.texture,zt.min[tn]=Li.boundingBox.min,zt.max[tn]=Li.boundingBox.max,zt.resolution[tn]=Li.resolution,tn++);for(let Li in zt)zt[Li].length=tn;an.probesSH.value=zt.textures,an.probesMin.value=zt.min,an.probesMax.value=zt.max,an.probesResolution.value=zt.resolution}Xr.upload(F,yt(et),an,Re)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Xr.upload(F,yt(et),an,Re),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Mt.setValue(F,"center",te.center),Mt.setValue(F,"modelViewMatrix",te.modelViewMatrix),Mt.setValue(F,"normalMatrix",te.normalMatrix),Mt.setValue(F,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let zt=ee.uniformsGroups;for(let tn=0,Li=zt.length;tn<Li;tn++){let Ff=zt[tn];Me.update(Ff,pn),Me.bind(Ff,pn)}}return pn}function fr(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.sunLights.needsUpdate=V,C.sunLightShadows.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function zh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(C,V,oe){let ee=Ae.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Ae.get(C.texture).__webglTexture=V,Ae.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){let oe=Ae.get(C);oe.__webglFramebuffer=V,oe.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,oe=0){le=C,H=V,X=oe;let ee=null,te=!1,Xe=!1;if(C){let We=Ae.get(C);if(We.__useDefaultFramebuffer!==void 0){ne.bindFramebuffer(F.FRAMEBUFFER,We.__webglFramebuffer),B.copy(C.viewport),ge.copy(C.scissor),de=C.scissorTest,ne.viewport(B),ne.scissor(ge),ne.setScissorTest(de),O=-1;return}else if(We.__webglFramebuffer===void 0)Re.setupRenderTarget(C);else if(We.__hasExternalTextures)Re.rebindTextures(C,Ae.get(C.texture).__webglTexture,Ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let lt=C.depthTexture;if(We.__boundDepthTexture!==lt){if(lt!==null&&Ae.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(C)}}let $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Xe=!0);let nt=Ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?ee=nt[V][oe]:ee=nt[V],te=!0):C.samples>0&&Re.useMultisampledRTT(C)===!1?ee=Ae.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?ee=nt[oe]:ee=nt,B.copy(C.viewport),ge.copy(C.scissor),de=C.scissorTest}else B.copy(ke).multiplyScalar(ie).floor(),ge.copy(Je).multiplyScalar(ie).floor(),de=Fe;if(oe!==0&&(ee=z),ne.bindFramebuffer(F.FRAMEBUFFER,ee)&&ne.drawBuffers(C,ee),ne.viewport(B),ne.scissor(ge),ne.setScissorTest(de),te){let We=Ae.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,We.__webglTexture,oe)}else if(Xe){let We=V;for(let $e=0;$e<C.textures.length;$e++){let nt=Ae.get(C.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,nt.__webglTexture,oe,We)}}else if(C!==null&&oe!==0){let We=Ae.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,oe)}O=-1};function ao(C){let V=Ae.get(C);return(V.__readFormat!==C.format||V.__readType!==C.type)&&(V.__readFormat=C.format,V.__readType=C.type,V.__formatReadable=Ge.textureFormatReadable(C.format),V.__typeReadable=Ge.textureTypeReadable(C.type)),V}this.readRenderTargetPixels=function(C,V,oe,ee,te,Xe,je,We=0){if(!(C&&C.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je],Array.isArray($e)&&($e=$e[0])),$e){ne.bindFramebuffer(F.FRAMEBUFFER,$e);try{let nt=C.textures[We],lt=nt.format,xt=nt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let Qe=ao(nt);if(Qe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-ee&&oe>=0&&oe<=C.height-te&&F.readPixels(V,oe,ee,te,Ce.convert(lt),Ce.convert(xt),Xe)}finally{let nt=le!==null?Ae.get(le).__webglFramebuffer:null;ne.bindFramebuffer(F.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,V,oe,ee,te,Xe,je,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je],Array.isArray($e)&&($e=$e[0])),$e)if(V>=0&&V<=C.width-ee&&oe>=0&&oe<=C.height-te){ne.bindFramebuffer(F.FRAMEBUFFER,$e);let nt=C.textures[We],lt=nt.format,xt=nt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let Qe=ao(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,Xe.byteLength,F.STREAM_READ),F.readPixels(V,oe,ee,te,Ce.convert(lt),Ce.convert(xt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Yt=le!==null?Ae.get(le).__webglFramebuffer:null;ne.bindFramebuffer(F.FRAMEBUFFER,Yt);let Nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zp(F,Nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Xe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(vt),F.deleteSync(Nt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,oe=0){let ee=Math.pow(2,-oe),te=Math.floor(C.image.width*ee),Xe=Math.floor(C.image.height*ee),je=V!==null?V.x:0,We=V!==null?V.y:0;Re.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,oe,0,0,je,We,te,Xe),ne.unbindTexture()},this.copyTextureToTexture=function(C,V,oe=null,ee=null,te=0,Xe=0){let je,We,$e,nt,lt,xt,Qe,vt,Yt,Nt=C.isCompressedTexture?C.mipmaps[Xe]:C.image;if(oe!==null)je=oe.max.x-oe.min.x,We=oe.max.y-oe.min.y,$e=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,lt=oe.min.y,xt=oe.isBox3?oe.min.z:0;else{let Mt=Math.pow(2,-te);je=Math.floor(Nt.width*Mt),We=Math.floor(Nt.height*Mt),C.isDataArrayTexture?$e=Nt.depth:C.isData3DTexture?$e=Math.floor(Nt.depth*Mt):$e=1,nt=0,lt=0,xt=0}ee!==null?(Qe=ee.x,vt=ee.y,Yt=ee.z):(Qe=0,vt=0,Yt=0);let Pt=Ce.convert(V.format),fn=Ce.convert(V.type),et;V.isData3DTexture?(Re.setTexture3D(V,0),et=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Re.setTexture2DArray(V,0),et=F.TEXTURE_2D_ARRAY):(Re.setTexture2D(V,0),et=F.TEXTURE_2D),ne.activeTexture(F.TEXTURE0),ne.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),ne.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ne.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);let Sn=ne.getParameter(F.UNPACK_ROW_LENGTH),St=ne.getParameter(F.UNPACK_IMAGE_HEIGHT),ks=ne.getParameter(F.UNPACK_SKIP_PIXELS),pn=ne.getParameter(F.UNPACK_SKIP_ROWS),Ua=ne.getParameter(F.UNPACK_SKIP_IMAGES);ne.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),ne.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),ne.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),ne.pixelStorei(F.UNPACK_SKIP_ROWS,lt),ne.pixelStorei(F.UNPACK_SKIP_IMAGES,xt);let ts=C.isDataArrayTexture||C.isData3DTexture,Bs=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){let Mt=Ae.get(C),an=Ae.get(V),ti=Ae.get(Mt.__renderTarget),zt=Ae.get(an.__renderTarget);ne.bindFramebuffer(F.READ_FRAMEBUFFER,ti.__webglFramebuffer),ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let tn=0;tn<$e;tn++)ts&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(C).__webglTexture,te,xt+tn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(V).__webglTexture,Xe,Yt+tn)),F.blitFramebuffer(nt,lt,nt+je,lt+We,Qe,vt,Qe+je,vt+We,F.DEPTH_BUFFER_BIT,F.NEAREST);ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||Ae.has(C)){let Mt=Ae.get(C),an=Ae.get(V);ne.bindFramebuffer(F.READ_FRAMEBUFFER,L),ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let ti=0;ti<$e;ti++)ts?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,te,xt+ti):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,te),Bs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,Xe,Yt+ti):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,Xe),te!==0?F.blitFramebuffer(nt,lt,nt+je,lt+We,Qe,vt,Qe+je,vt+We,F.COLOR_BUFFER_BIT,F.NEAREST):Bs?F.copyTexSubImage3D(et,Xe,Qe,vt,Yt+ti,nt,lt,je,We):F.copyTexSubImage2D(et,Xe,Qe,vt,nt,lt,je,We);ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bs?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(et,Xe,Qe,vt,Yt,je,We,$e,Pt,fn,Nt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(et,Xe,Qe,vt,Yt,je,We,$e,Pt,Nt.data):F.texSubImage3D(et,Xe,Qe,vt,Yt,je,We,$e,Pt,fn,Nt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Xe,Qe,vt,je,We,Pt,fn,Nt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Xe,Qe,vt,Nt.width,Nt.height,Pt,Nt.data):F.texSubImage2D(F.TEXTURE_2D,Xe,Qe,vt,je,We,Pt,fn,Nt);ne.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),ne.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St),ne.pixelStorei(F.UNPACK_SKIP_PIXELS,ks),ne.pixelStorei(F.UNPACK_SKIP_ROWS,pn),ne.pixelStorei(F.UNPACK_SKIP_IMAGES,Ua),Xe===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&F.generateMipmap(et),ne.unbindTexture()},this.initRenderTarget=function(C){Ae.get(C).__webglFramebuffer===void 0&&Re.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),ne.unbindTexture()},this.resetState=function(){H=0,X=0,le=null,ne.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var ae={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4}};function kc({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(x){if(!(x>0)||!Number.isFinite(x))return;t&&t(x),o+=x;let p=0;for(;o>=r&&p<s;)n(r),o-=r,p++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),x)}function f(x){if(c){try{l!==null&&h((x-l)/1e3)}catch(p){throw m(),p}l=x,c&&(a=requestAnimationFrame(f))}}function d(){document.visibilityState==="visible"&&(l=null)}function u(){c||(c=!0,l=null,document.addEventListener("visibilitychange",d),a=requestAnimationFrame(f))}function m(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",d)}return{advance:h,start:u,stop:m}}var pd=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),$b={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},Zb={0:"fire",2:"aim"},B0={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},z0={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},Kb=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function md(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!Kb.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function H0(n){return $b[n]||null}function G0(n){return Zb[n]||null}function qr(){let n={};for(let e of pd)n[e]=!1;return n}function V0(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function Jb(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=V0(n.axes[0],n.axes[1]),[i,s]=V0(n.axes[2],n.axes[3]),r=qr();for(let o in B0){let a=n.buttons[o];r[B0[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function jb(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of pd)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function Bc(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:qr(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=qr();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){jb(e)}function f(b){if(md(b.target))return;let S=H0(b.code);(S||b.code in z0)&&(c()&&(b.code==="Tab"||b.code==="Space")&&b.preventDefault(),r="kbm",!b.repeat&&!t.has(b.code)&&S&&s.add(S),t.add(b.code))}function d(b){t.delete(b.code)}function u(b){b.target===n&&n.focus();let S=G0(b.button);S&&(r="kbm",i.has(b.button)||s.add(S),i.add(b.button))}function m(b){i.delete(b.button)}function x(b){l()&&(r="kbm",e.lookDX+=b.movementX||0,e.lookDY+=b.movementY||0)}function p(b){!c()||!b.deltaY||(r="kbm",s.add(b.deltaY>0?"weaponNext":"weaponPrev"),b.preventDefault())}function g(b){b.preventDefault()}function _(){l()||h()}window.addEventListener("keydown",f),window.addEventListener("keyup",d),window.addEventListener("mouseup",m),window.addEventListener("blur",h),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",_),n.addEventListener("mousedown",u),n.addEventListener("wheel",p,{passive:!1}),n.addEventListener("contextmenu",g);function w(){let b=[];try{b=navigator.getGamepads&&navigator.getGamepads()||[]}catch{b=[]}let S=null;for(let y of b)if(y&&y.connected){S=y;break}let v=Jb(S);return o=v.ok?S.id:v.reason==="none"?"none":"unrecognised controller",v}function M(){let b={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:qr(),pressed:qr()};e.lookDX=0,e.lookDY=0;for(let y of t){let T=H0(y);T&&(b.held[T]=!0);let E=z0[y];E&&(b.moveX+=E[0],b.moveY+=E[1])}for(let y of i){let T=G0(y);T&&(b.held[T]=!0)}let S=Math.hypot(b.moveX,b.moveY);S>1&&(b.moveX/=S,b.moveY/=S);for(let y of s)b.pressed[y]=!0;s.clear();let v=w();if(v.ok){b.lookX=v.lookX,b.lookY=v.lookY;let y=v.moveX!==0||v.moveY!==0||v.lookX!==0||v.lookY!==0;for(let E of pd)v.held[E]&&(y=!0,b.held[E]=!0,a[E]||(b.pressed[E]=!0));a=v.held,b.moveX+=v.moveX,b.moveY+=v.moveY;let T=Math.hypot(b.moveX,b.moveY);T>1&&(b.moveX/=T,b.moveY/=T),y&&(r="pad")}else a=qr();return b}return{poll:M,requestLock(){try{let b=n.requestPointerLock&&n.requestPointerLock();b&&typeof b.catch=="function"&&b.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function X0(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var Qb=2e3,W0=1e4,eS=8e4;function Y0({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,f){if(f-n<Qb||(i+=Math.min(h,100),s++,s<60||i<1e3))return t;let d=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,d)));let u=X0(t,d,Math.max(14,1.1*r));if(u>t){if(f<l)return t;o=f}else u<t&&(o!==null&&f-o<W0&&(a=a===0?W0:Math.min(a*2,eS),l=f+a),o=null);return t=u,t}return{sample:c,scale:()=>t}}var K=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var gd={viewportHeight:{value:1080}};function ci(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=t.getX(l),h[1]+=t.getY(l),h[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Tt(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],f=c[1],d=c[2],u=Math.hypot(h,f,d);u<1e-6&&(h=t.getX(l),f=t.getY(l),d=t.getZ(l),u=Math.hypot(h,f,d)||1),a.setXYZ(l,h/u,f/u,d/u)}return a.needsUpdate=!0,n}var tS=`
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
`,nS=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function iS({px:n=ae.outlinePx,color:e=K.ink,outlineNormal:t=!1}={}){return new yn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new it(e)},viewportHeight:gd.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:tS,fragmentShader:nS,side:$t})}function sS(){}var q0=new Map;function rS(n,e,t){let i=n+"|"+new it(e).getHexString()+"|"+t,s=q0.get(i);return s||(s=iS({px:n,color:e,outlineNormal:t}),q0.set(i,s)),s}function Rn(n,{px:e=ae.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=rS(e,K.ink,t),s=new mt(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=sS,n.add(s),s}function xd(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function oS(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function zc(n,e){let t=new Oc({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=ln;let i=Y0({startMs:performance.now()});function s(){let o=oS(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),gd.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var Xi={lightDir:{value:new k(...ae.lightDir).normalize()},shadowTint:{value:new it(K.shadowTint)},bandEdge:{value:.15},shadowLift:{value:ae.shadowLift}},aS=`
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
`,lS=`
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
`;function Vt({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new yn({name:"toon",uniforms:{baseColor:{value:new it(n)},shadowMix:{value:t},rim:{value:i},lightDir:Xi.lightDir,shadowTint:Xi.shadowTint,bandEdge:Xi.bandEdge,shadowLift:Xi.shadowLift},vertexShader:aS,fragmentShader:lS,vertexColors:e})}var cS=400,hS=[-.45,.22,-1],uS=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,dS=`
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
`;function Hc({planetDir:n=hS}={}){let e=r=>new it(r),t=new yn({name:"sky",uniforms:{deep:{value:e(K.nebulaDeep)},hot:{value:e(K.nebulaHot)},pink:{value:e(K.hotPink)},lilac:{value:e(K.lilac)},ink:{value:e(K.ink)},planetColor:{value:e(K.planet)},shadowTint:Xi.shadowTint,shadowLift:Xi.shadowLift,bandEdge:Xi.bandEdge,lightDir:Xi.lightDir,planetDir:{value:new k(...n).normalize()},time:{value:0}},vertexShader:uS,fragmentShader:dS,side:$t,depthWrite:!1}),i=new mt(new _n(cS,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function bn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new kt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let f=n[h],d=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let d=0;d<n.length;++d){let u=n[d].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+h);h+=n[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=$0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][d]);let m=$0(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function $0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Tt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,u=h.count;d<u;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);a.setComponent(d+f,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function K0(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],f=["getX","getY","getZ","getW"],d=e*.5,u=Math.log10(1/e),m=Math.pow(10,u),x=d*m;for(let g=0;g<r;g++){let _=i?i.getX(g):g,w="";for(let M=0,b=a.length;M<b;M++){let S=a[M],v=n.getAttribute(S),y=v.itemSize;for(let T=0;T<y;T++)w+=`${Math.trunc(v[f[T]](_)*m+x)},`}w in t?h.push(t[w]):(l.push(_),t[w]=o,h.push(o),o++)}let p=n.clone();for(let g in n.attributes)p.setAttribute(g,Z0(n.attributes[g],l,c));for(let g in n.morphAttributes)p.morphAttributes[g]=n.morphAttributes[g].map(_=>Z0(_,l,c));return p.setIndex(h),p}function Z0(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function $r(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function J0(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new k),l=o.getCenter(new k),c=a.length(),h=$r(e*7919+13>>>0),f=[];for(let g=0;g<8;g++)f.push(h()*2-1);let d=Math.min(t*c,i)*.99/Math.sqrt(3),u=(g,_)=>_>1e-9?2*g/_:0,m=[a.x,a.y,a.z].map(g=>g>1e-9?2/g:0),x=new at,p=new k;for(let g=0;g<s.count;g++){let _=u(s.getX(g)-l.x,a.x),w=u(s.getY(g)-l.y,a.y),M=u(s.getZ(g)-l.z,a.z),b=(w+1)/2,S=(f[0]*w+f[1]*_*w)/2,v=(f[2]*_+f[3]*M)/2*b,y=(f[4]*w+f[5]*M*w)/2;if(r){let T=[f[1]*w/2,(f[0]+f[1]*_)/2,0],E=[f[2]/2*b,(f[2]*_+f[3]*M)/2*.5,f[3]/2*b],R=[0,(f[4]+f[5]*M)/2,f[5]*w/2];x.set(1+d*T[0]*m[0],d*T[1]*m[1],d*T[2]*m[2],d*E[0]*m[0],1+d*E[1]*m[1],d*E[2]*m[2],d*R[0]*m[0],d*R[1]*m[1],1+d*R[2]*m[2]),x.invert().transpose(),p.set(r.getX(g),r.getY(g),r.getZ(g)).applyMatrix3(x).normalize(),r.setXYZ(g,p.x,p.y,p.z)}s.setXYZ(g,s.getX(g)+d*S,s.getY(g)+d*v,s.getZ(g)+d*y)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var vd=null;function fS(){return vd||(vd=Vt({vertexColors:!0})),vd}var yd=(n,e,t)=>new it(n).lerp(new it(e),t),Md=(n,e=.3)=>yd(n,"#ffffff",e),Gc=(n,e=.2)=>yd(n,K.shadowTint,e),j0=new pt,Q0=new Tn,em=new In,pS=new k,mS=new k;function ps(n=1,e=.02,t="prop"){let i=[],s=0;function r(h,f,d={}){let u=h.index?h.toNonIndexed():h;u.deleteAttribute("uv");let m=d.wonk===void 0?e:d.wonk;m>0&&J0(u,n*131+s,m),s++;let x=u.getAttribute("normal"),p=new Float32Array(x.count*3);for(let g=0;g<x.count;g++){let _=typeof f=="function"?f(x.getX(g),x.getY(g),x.getZ(g)):f;p[g*3]=_.r,p[g*3+1]=_.g,p[g*3+2]=_.b}return u.setAttribute("color",new Tt(p,3)),(d.sx||d.sy||d.sz)&&u.scale(d.sx||1,d.sy||1,d.sz||1),d.m&&u.applyMatrix4(d.m),em.set(d.rx||0,d.ry||0,d.rz||0,"YXZ"),Q0.setFromEuler(em),j0.compose(pS.set(d.x||0,d.y||0,d.z||0),Q0,mS.set(1,1,1)),u.applyMatrix4(j0),i.push(u),u}function o(h,f={}){let d=f.top||Md(h),u=f.side||Gc(h,.22),m=Gc(h,.4),x=new it(h);return(p,g,_)=>g>.5?d:g<-.5?m:Math.abs(p)>.5?u:_>0?x:m}function a(h,f,d,u,m={}){return r(new It(h,f,d),o(u,m),m)}function l(h,f,d,u,m,x,p,g={}){return a(f-h,u-d,x-m,p,{...g,x:(h+f)/2,y:(d+u)/2,z:(m+x)/2})}function c(h=0){let f=bn(i,!1);if(!f)throw new Error(`${t}: parts have different attributes and cannot be merged`);return h>0&&J0(f,n,h),ci(f)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function ms(n){let e=new bt,t=new mt(n,fS());return Rn(t),e.add(t),e}var Yi=n=>()=>new it(n);function Vc({w:n,d:e,tile:t=1,colors:i=[K.cream,K.tealLight]}){let s=ps(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,K.lilac,{top:new it(K.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new ls(t,t);h.rotateX(-Math.PI/2),s.add(h,Yi(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(c+.5)*t})}return ms(s.finish())}function bd({w:n,h:e,color:t=K.cream,stripe:i=K.hotPink,opening:s=null,seed:r=2}){let o=ps(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,f=-.3,d=new Ur;if(d.moveTo(c,f),d.lineTo(h,f),d.lineTo(h,e),d.lineTo(c,e),d.closePath(),s){let g=new Zs,_=s.x-s.w/2,w=s.x+s.w/2;g.moveTo(_,s.y),g.lineTo(_,s.y+s.h),g.lineTo(w,s.y+s.h),g.lineTo(w,s.y),g.closePath(),d.holes.push(g)}let u=new Wo(d,{depth:a,bevelEnabled:!1});u.translate(0,0,-l),o.add(u,o.facePaint(t),{wonk:0}),o.span(c,h,f,.28,-l,l+.04,K.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,K.teal);let m=.5,x=.8;return s&&s.y<x&&s.y+s.h>m?(o.span(c,s.x-s.w/2,m,x,l-.01,l+.03,i),o.span(s.x+s.w/2,h,m,x,l-.01,l+.03,i)):o.span(c,h,m,x,l-.01,l+.03,i),ms(o.finish(.006))}function gS(n,e,t,i){let s=p=>Math.min(2048,Math.max(64,Math.round(p))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),f=[[n]];for(let p=1;p<h.length;p++)f.push([h.slice(0,p).join(" "),h.slice(p).join(" ")]);let d=null;for(let p of f){let g=Math.max(...p.map(w=>l.measureText(w).width)),_=Math.min(r*.88*100/g,o*.8/(p.length*1.08));(!d||_>d.size)&&(d={lines:p,size:_})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${d.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let u=d.size*1.08,m=o/2-(d.lines.length-1)*u/2;d.lines.forEach((p,g)=>{let _=m+g*u;l.fillStyle=K.ink,l.fillText(p,r/2+d.size*.05,_+d.size*.06),l.fillStyle=t,l.fillText(p,r/2,_)});let x=new Lo(a);return x.colorSpace=ln,x.anisotropy=8,x}function Wc({text:n,w:e,h:t,bg:i=K.hotPink,fg:s=K.cream,tilt:r=.04,seed:o=3}){let c=ps(o,0,"sign");c.box(e,t,.14,s,{wonk:0});let h=ms(c.finish()),f=e-.14*2,d=t-.14*2,u=new mt(new ls(f,d),new zi({map:gS(n,i,s,f/d),toneMapped:!1}));return u.name="signFace",u.position.z=.14/2+.008,h.add(u),h.rotation.z=r,h}function tm({w:n,h:e,seed:t=4}){let i=ps(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,K.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,K.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,K.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,K.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,K.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,K.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,K.cream),ms(i.finish(.006))}function la(n,e,t,i,s,r){let o=new Js(.16,.05,8,20);n.add(o,Yi(K.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function nm({w:n,h:e,name:t,signColor:i=K.hotPink,seed:s=5}){let r=ps(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=yd(K.glorpPurple,K.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,K.lilac);for(let g of[-1,1]){let _=g*(n/2-a/2);r.span(_-a/2,_+a/2,0,c,-o/2,o/2,K.lilac),r.span(_-a/2-.04,_+a/2+.04,0,.3,-o/2,o/2+.04,K.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,K.teal);let f=n-a*2-.1;r.span(-f/2,f/2,0,.86,.02,o/2+.3,K.hotPink),r.span(-f/2,f/2,0,.12,.02,o/2+.34,K.lilac),r.span(-f/2-.06,f/2+.06,.86,.96,0,o/2+.42,K.cream),la(r,-.9,1.01,.4,.1,.4),la(r,-.2,1.01,.5,-.1,-.3),la(r,.6,1.01,.38,.12,.9),la(r,1.2,1.01,.52,0,.1);let d=10,u=(n-.1)/d,m=.42;for(let g=0;g<d;g++){let _=g%2?K.cream:i,w=-n/2+.05+(g+.5)*u;r.box(u,.08,.95,_,{x:w,y:c-.02,z:o/2+.35,rx:m,top:Md(_,.2)}),r.box(u,.22,.06,_,{x:w,y:c-.24,z:o/2+.8,rx:.1})}let x=ms(r.finish(.006)),p=Wc({text:t,w:n-.7,h:1.15,bg:i,fg:K.cream,seed:s+1});return p.position.set(0,c+.7,o/2+.01),x.add(p),x}function im({w:n=2,d:e=1,h:t=.9,color:i=K.teal,seed:s=7}={}){let r=ps(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,K.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,K.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?K.cream:K.hotPink;r.box(a-.04,t-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,K.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,K.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),la(r,.45,t+.06,.05,.1,.5);let l=ms(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function sm({w:n=1.8,seed:e=11}={}){let t=ps(e,.02,"bench"),i=.5;t.box(n,.1,i,K.lilac,{y:.46}),t.box(n,.42,.08,K.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,K.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,K.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=ms(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function xS(n,e,t){let i=new It(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function rm({seed:n=21}={}){let e=ps(n,.02,"planter"),t=$r(n);e.add(new vn(.42,.32,.55,16),Yi(K.teal),{y:.275}),e.add(new vn(.47,.44,.12,16),Yi(K.hotPink),{y:.6}),e.add(new vn(.4,.4,.04,16),Yi(Gc(K.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Gc(K.planet,.15);for(let l=0;l<6;l++)e.add(new vn(.06-l*.004,.07-l*.004,.34,8),Yi(l%2?Md(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+t()*.3,h=l%2?.95+t()*.25:1.45+t()*.25,f=new pt().makeTranslation(i,s,0).multiply(new pt().makeRotationY(c)).multiply(new pt().makeRotationZ(-h));e.add(xS(.95,.24,l%2?.22:.4),Yi(l%2?K.gel:K.teal),{m:f,wonk:.03})}e.add(new _n(.1,10,8),Yi(K.planet),{x:i,y:s-.05,z:.08}),e.add(new _n(.1,10,8),Yi(K.planet),{x:i+.07,y:s-.1,z:-.07});let a=ms(e.finish());return a.userData.footprint={w:.95,d:.95},a}var _d=null;function Xc({rx:n,rz:e,opacity:t=.35}){let r=new it(K.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let f=1;f<=8;f++){let d=f/8,u=t*(1-d*d*(3-2*d));for(let m=0;m<28;m++){let x=m/28*Math.PI*2;o.push(Math.cos(x)*n*d,0,Math.sin(x)*e*d),a.push(r.r,r.g,r.b,u)}}let l=[];for(let f=0;f<28;f++)l.push(0,1+(f+1)%28,1+f);for(let f=1;f<8;f++){let d=1+(f-1)*28,u=1+f*28;for(let m=0;m<28;m++){let x=(m+1)%28;l.push(d+m,d+x,u+m,d+x,u+x,u+m)}}let c=new kt;c.setAttribute("position",new dt(o,3)),c.setAttribute("color",new dt(a,4)),c.setIndex(l),_d||(_d=new zi({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new mt(c,_d);return h.name="blobShadow",h.position.y=.012,h}var ca=8,Yc=ca/2,Sd=.2;function om(){let n=new bt;n.add(Vc({w:ca,d:ca}));let e=bd({w:ca+Sd*2,h:4});e.position.set(0,0,-Yc-Sd/2),n.add(e);let t=1.3,i=nm({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:K.hotPink});i.position.set(t,0,-Yc+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=bd({w:ca,h:4,color:"#f1e6ff",opening:s});r.position.set(-Yc-Sd/2,0,0),r.rotation.y=Math.PI/2;let o=tm({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=im({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=sm({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=rm({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(f,d,u,m,x=0)=>{let p=Xc({rx:u,rz:m,opacity:.7});p.position.x=f,p.position.z=d,p.rotation.y=x,n.add(p)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(t,-Yc+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function Cn(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function wd(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],c=e[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let f=1.15*o,d=e[0],u=e[1],m=e[2];h>f&&(h=f,d=n[0]+a*h,u=n[1]+l*h,m=n[2]+c*h);let x=h>o?h/o:1;if(h>=o){let y=h*(o>0?t/o:.5);return am(r,n[0]+a*y,n[1]+l*y,n[2]+c*y,d,u,m,x)}let p=Math.max(h,1e-6),g=Math.min(Math.max((p*p+t*t-i*i)/(2*p),-t),t),_=Math.sqrt(Math.max(t*t-g*g,0)),w=s[0],M=s[1],b=s[2],S=w*a+M*l+b*c;w-=a*S,M-=l*S,b-=c*S;let v=Math.hypot(w,M,b);return v<1e-6&&(Math.abs(a)<.9?(w=0,M=c,b=-l):(w=-c,M=0,b=a),v=Math.hypot(w,M,b)||1),w/=v,M/=v,b/=v,am(r,n[0]+a*g+w*_,n[1]+l*g+M*_,n[2]+c*g+b*_,d,u,m,x)}function am(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=e,l[1]=t,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var lm=[.65,1.2];function Td({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=lm.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),c=[],h=(se,Z,xe)=>{for(let Q=0;Q<t;Q++){let pe=(Q+1)%t,Se=se+Q,Be=se+pe,F=Z+Q,me=Z+pe;xe?c.push(Se,F,Be,Be,F,me):c.push(Se,Be,F,Be,me,F)}};for(let se=0;se<e;se++)h(se*t,(se+1)*t,!1);for(let se=0;se<2;se++){let Z=se===0,xe=se===0?0:e*t;for(let pe=0;pe<r;pe++){let Se=a[se]+pe*t;h(xe,Se,Z),xe=Se}let Q=a[se]+r*t;for(let pe=0;pe<t;pe++){let Se=xe+pe,Be=xe+(pe+1)%t;Z?c.push(Se,Q,Be):c.push(Se,Be,Q)}}let f=new Float32Array(l*3),d=new Float32Array(l*3),u=new kt,m=new Tt(f,3),x=new Tt(d,3);m.setUsage(Wr),x.setUsage(Wr),u.setAttribute("position",m),u.setAttribute("normal",x),u.setIndex(c);let p=new mt(u,Vt({color:i}));p.name="limb";let g=new qn(new k,n*2);u.boundingSphere=g,Rn(p);let _=new Float64Array(t),w=new Float64Array(t);for(let se=0;se<t;se++)_[se]=Math.cos(se/t*Math.PI*2),w[se]=Math.sin(se/t*Math.PI*2);let M=0,b=-1,S=0,v=1,y=0,T=0,E=0,R=0,D=1,z=0,L=0,G=0,H=0,X=0,le=0,O=0,W=0,B=0,ge=0,de=0,J=0,ve=0,Te=0,Ye=0,ie=0,De=0,Ke=0;function ke(se,Z,xe,Q,pe,Se,Be,F,me,Ee,Ge,ne,Ze,Ae,Re,P){for(let A=0;A<t;A++){let $=_[A]*Se+w[A]*me,be=_[A]*Be+w[A]*Ee,fe=_[A]*F+w[A]*Ge,we=(se+A)*3;f[we]=Z+$*pe,f[we+1]=xe+be*pe,f[we+2]=Q+fe*pe,d[we]=$*Re+ne*P,d[we+1]=be*Re+Ze*P,d[we+2]=fe*Re+Ae*P}}let Je=!1,Fe=1,N=0,Y=0;function j(se,Z,xe,Q=1){let pe=n/Math.sqrt(Q>1?Q:1),Se=2*Z[0]-(se[0]+xe[0])/2,Be=2*Z[1]-(se[1]+xe[1])/2,F=2*Z[2]-(se[2]+xe[2])/2,me=se[0],Ee=se[1],Ge=se[2],ne=xe[0],Ze=xe[1],Ae=xe[2],Re=(Z[1]-Ee)*(Ae-Z[2])-(Z[2]-Ge)*(Ze-Z[1]),P=(Z[2]-Ge)*(ne-Z[0])-(Z[0]-me)*(Ae-Z[2]),A=(Z[0]-me)*(Ze-Z[1])-(Z[1]-Ee)*(ne-Z[0]),$=Math.hypot(Re,P,A),be=Z[0]-me,fe=Z[1]-Ee,we=Z[2]-Ge,Pe=Math.hypot(be,fe,we),he=ne-Z[0],ue=Ze-Z[1],Le=Ae-Z[2],U=!1;$>1e-4*Pe*Math.hypot(he,ue,Le)&&$>1e-12?(Re/=$,P/=$,A/=$,Je&&Re*Fe+P*N+A*Y<0&&(Re=-Re,P=-P,A=-A),U=!0):Pe>1e-9&&be*he+fe*ue+we*Le<0&&(Se=(me+ne)/2,Be=(Ee+Ze)/2,F=(Ge+Ae)/2);let ce=(me+Se+ne)/3,re=(Ee+Be+Ze)/3,Ie=(Ge+F+Ae)/3,Ce=Math.max(Math.hypot(me-ce,Ee-re,Ge-Ie),Math.hypot(Se-ce,Be-re,F-Ie),Math.hypot(ne-ce,Ze-re,Ae-Ie));g.center.set(ce,re,Ie),g.radius=Ce+n*1.5+.02;for(let ye=0;ye<s;ye++){let Me=ye/e,Ve=1-Me,_e=Ve*Ve,ze=2*Ve*Me,Ne=Me*Me,Oe=_e*me+ze*Se+Ne*ne,tt=_e*Ee+ze*Be+Ne*Ze,ct=_e*Ge+ze*F+Ne*Ae,Rt=2*Ve*(Se-me)+2*Me*(ne-Se),Ot=2*Ve*(Be-Ee)+2*Me*(Ze-Be),Ct=2*Ve*(F-Ge)+2*Me*(Ae-F),Un=Math.hypot(Rt,Ot,Ct);if(Un>1e-9?(M=Rt/Un,b=Ot/Un,S=Ct/Un):ye===0&&(M=0,b=-1,S=0),ye===0){U?(v=Re,y=P,T=A):Je?(v=Fe,y=N,T=Y):(v=1,y=0,T=0);let on=v*M+y*b+T*S;v-=M*on,y-=b*on,T-=S*on;let Lt=Math.hypot(v,y,T);Lt<1e-6&&(Math.abs(M)<.9?(v=0,y=S,T=-b):(v=-S,y=0,T=M),Lt=Math.hypot(v,y,T)||1),v/=Lt,y/=Lt,T/=Lt,Fe=v,N=y,Y=T,Je=!0}else{let on=v*M+y*b+T*S;v-=M*on,y-=b*on,T-=S*on;let Lt=Math.hypot(v,y,T);Lt<1e-6&&(Math.abs(M)<.9?(v=0,y=S,T=-b):(v=-S,y=0,T=M),Lt=Math.hypot(v,y,T)||1),v/=Lt,y/=Lt,T/=Lt}E=b*T-S*y,R=S*v-M*T,D=M*y-b*v,ke(ye*t,Oe,tt,ct,pe,v,y,T,E,R,D,0,0,0,1,0),ye===0&&(z=M,L=b,G=S,H=v,X=y,le=T,O=E,W=R,B=D),ye===s-1&&(ge=M,de=b,J=S,ve=v,Te=y,Ye=T,ie=E,De=R,Ke=D)}for(let ye=0;ye<2;ye++){let Me=ye===0?-1:1,Ve=ye===0?me:ne,_e=ye===0?Ee:Ze,ze=ye===0?Ge:Ae,Ne=ye===0?z:ge,Oe=ye===0?L:de,tt=ye===0?G:J,ct=ye===0?H:ve,Rt=ye===0?X:Te,Ot=ye===0?le:Ye,Ct=ye===0?O:ie,Un=ye===0?W:De,on=ye===0?B:Ke,Lt=Ne*Me,Pn=Oe*Me,fi=tt*Me;for(let q=0;q<r;q++){let Ue=lm[q],st=Math.cos(Ue),Dt=Math.sin(Ue);ke(a[ye]+q*t,Ve+Lt*pe*Dt,_e+Pn*pe*Dt,ze+fi*pe*Dt,pe*st,ct,Rt,Ot,Ct,Un,on,Lt,Pn,fi,st,Dt)}let ei=(a[ye]+r*t)*3;f[ei]=Ve+Lt*pe,f[ei+1]=_e+Pn*pe,f[ei+2]=ze+fi*pe,d[ei]=Lt,d[ei+1]=Pn,d[ei+2]=fi}m.needsUpdate=!0,x.needsUpdate=!0}return{mesh:p,set:j}}var sr=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),vS=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),qc=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Ed=.04,_S=9;function $c(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function yS(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+$c(e,1))+.03*Math.sin(2.1*n+$c(e,2)),t[1]=.04*Math.sin(1.7*n+$c(e,3))+.02*Math.sin(2.6*n+$c(e,4)),t}var MS=(n,e)=>Math.min(n*2,1)*Math.max(e,0),ha=16,cm=ha+1,Mi=11,gs=4,Zc=13,bS=.07,SS=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function hm({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=K.ink,fixedSmile:h=0}={}){let f=n,d=e/2,u=[-d,d],m=.35,x=.035*f,p=f*.3,g=a==="uni",_=0,w=_+2*cm,M=w+16,b=M+2*Mi*gs,S=b+2*Mi*2,v=S+(g?6:8),y=v+Zc*2,T=[],E=me=>T.push(me,me+1,me+2,me,me+2,me+3),R=(me,Ee)=>{for(let Ge=0;Ge<Ee-1;Ge++){let ne=me+Ge*2;T.push(ne,ne+1,ne+2,ne+1,ne+3,ne+2)}};for(let me=0;me<2;me++){let Ee=_+me*cm;for(let Ge=0;Ge<ha;Ge++)T.push(Ee,Ee+1+Ge,Ee+1+(Ge+1)%ha)}for(let me=0;me<4;me++)E(w+me*4);for(let me=0;me<2;me++){let Ee=M+me*Mi*gs;for(let Ge=0;Ge<Mi-1;Ge++)for(let ne=0;ne<gs-1;ne++){let Ze=Ee+Ge*gs+ne,Ae=Ze+1,Re=Ze+gs,P=Re+1;T.push(Ze,Ae,Re,Ae,P,Re)}R(b+me*Mi*2,Mi)}g?T.push(S,S+1,S+2,S+1,S+3,S+2,S+2,S+3,S+4,S+3,S+5,S+4):(E(S),E(S+4)),R(v,Zc);let D=[];for(let me=0;me<2;me++){let Ee=new _n(f,18,12);Ee.deleteAttribute("uv"),Ee.applyMatrix4(new pt().makeScale(1,1,m).setPosition(u[me],t,i)),D.push(Ee)}let z=new mt(bn(D,!1),Vt({color:K.eyeWhite,shadowMix:.35,rim:0}));z.name="eyes",Rn(z,{px:2});let L=new Float32Array(y*3),G=new Float32Array(y*3),H=new Float32Array(y*3),X=new it(K.ink),le=new it(c);for(let me=0;me<y;me++){G[me*3+2]=1;let Ee=me>=M&&me<b?le:X;H[me*3]=Ee.r,H[me*3+1]=Ee.g,H[me*3+2]=Ee.b}let O=new kt,W=new Tt(L,3);W.setUsage(Wr),O.setAttribute("position",W),O.setAttribute("normal",new Tt(G,3)),O.setAttribute("color",new Tt(H,3)),O.setIndex(T);let B=t+f*3.5,ge=s-r*1.5-f,de=Math.max(d+2.5*f,r);O.boundingSphere=new qn(new k(0,(B+ge)/2,i),Math.hypot(de,(B-ge)/2,f*2));let J=Vt({color:"#ffffff",vertexColors:!0,rim:0});J.side=$n;let ve=new mt(O,J);ve.name="features";let Te=new bt;Te.name="face",Te.add(z,ve);let Ye=sr.neutral,ie=me=>{let Ee=h>0?vS[me]:0;return Ee>0?h*Ee:-1/0},De=ie("neutral"),Ke=me=>me==="mouthCurve"&&Ye.mouthCurve<De?De:Ye[me],ke={};for(let me of qc)ke[me]={x:Ke(me),v:0};let Je={x:0,v:0},Fe={x:0,v:0},N=0,Y=!1,j=0,se=[0,0],Z=0;function xe(me,Ee,Ge){let ne=Z*3;L[ne]=me,L[ne+1]=Ee,L[ne+2]=Ge,Z++}function Q(me,Ee,Ge){let ne=1-(me*me+Ee*Ee)/(f*f);return i+f*m*Math.sqrt(ne>0?ne:0)+Ge}function pe(me,Ee,Ge,ne,Ze,Ae){let Re=-(ne-Ee),P=Ge-me,A=Math.hypot(Re,P)||1;Re=Re/A*Ze/2,P=P/A*Ze/2,xe(me+Re,Ee+P,Ae),xe(Ge+Re,ne+P,Ae),xe(Ge-Re,ne-P,Ae),xe(me-Re,Ee-P,Ae)}let Se=f*1.03;function Be(){let me=ke,Ee=me.pupilScale.x*(1-Je.x),Ge=Je.x,ne=Math.min(Math.max(me.lid.x,0),.95),Ze=me.browAngle.x,Ae=ne>.005,Re=Se-2*Se*ne,P=Ze*.6*Math.min(ne*4,1),A=f*bS*Math.min(ne*10,1);Z=_;for(let Me=0;Me<2;Me++){let Ve=Me===0?-1:1;yS(j,l+Me*7.31,se);let _e=f*.5*(Ee>0?Ee:0),ze=se[0]*f,Ne=se[1]*f;if(Ae){let tt=Re+P*Ve*ze-Math.abs(P)*_e-A-(Ne+_e);if(tt>0){let ct=Math.min(Math.max((tt-.1*f)/(.1*f),0),1);Ne+=tt*(1-SS(ct))}}xe(u[Me]+ze,t+Ne,Q(ze,Ne,x));for(let Oe=0;Oe<ha;Oe++){let tt=Oe/ha*Math.PI*2,ct=ze+Math.cos(tt)*_e,Rt=Ne+Math.sin(tt)*_e;xe(u[Me]+ct,t+Rt,Q(ct,Rt,x))}}Z=w;for(let Me=0;Me<2;Me++){let Ve=f*.55*Ge,_e=Q(0,0,x),ze=f*.26*Ge;pe(u[Me]-Ve,t-Ve,u[Me]+Ve,t+Ve,ze,_e),pe(u[Me]-Ve,t+Ve,u[Me]+Ve,t-Ve,ze,_e)}for(let Me=0;Me<2;Me++){let Ve=Me===0?-1:1;for(let _e=0;_e<2;_e++){Z=_e===0?M+Me*Mi*gs:b+Me*Mi*2;for(let ze=0;ze<Mi;ze++){let Ne=(ze/(Mi-1)*2-1)*(Math.PI/2),Oe=Se*Math.sin(Ne),tt=Se*Math.cos(Ne),ct=Ae?Re+P*Oe:tt;ct>tt&&(ct=tt),ct<-tt&&(ct=-tt);let Rt=Ve*Oe;if(_e===0)for(let Ot=0;Ot<gs;Ot++){let Ct=tt+(ct-tt)*(Ot/(gs-1));xe(u[Me]+Rt,t+Ct,Q(Rt,Ct*.97,x*3))}else{let Ot=ct+(Ae?f*.02:0);Ot>tt&&(Ot=tt);let Ct=ct-A;Ct<-tt&&(Ct=-tt),xe(u[Me]+Rt,t+Ot,Q(Rt,Ot*.97,x*3.5)),xe(u[Me]+Rt,t+Ct,Q(Rt,Ct*.97,x*3.5))}}}}Z=S;let $=f*.9,be=t+f*(1.4+me.browY.x),fe=Math.cos(Ze),we=Math.sin(Ze),Pe=i+f*.15;if(g){let Me=d+$*fe,Ve=be+$*we,_e=be-we/(fe>.3?fe:.3)*d,ze=-(_e-Ve),Ne=Me,Oe=Math.hypot(ze,Ne)||1;ze/=Oe,Ne/=Oe;let tt=-(Ve-_e),ct=Me,Rt=Math.hypot(tt,ct)||1;tt/=Rt,ct/=Rt;let Ot=ze+tt,Ct=Ne+ct,Un=Math.hypot(Ot,Ct)||1;Ot/=Un,Ct/=Un;let on=Ot*ze+Ct*Ne,Lt=p/2/(on>.4?on:.4);xe(-Me+ze*p/2,Ve+Ne*p/2,Pe),xe(-Me-ze*p/2,Ve-Ne*p/2,Pe),xe(Ot*Lt,_e+Ct*Lt,Pe),xe(-Ot*Lt,_e-Ct*Lt,Pe),xe(Me+tt*p/2,Ve+ct*p/2,Pe),xe(Me-tt*p/2,Ve-ct*p/2,Pe)}else for(let Me=0;Me<2;Me++){let Ve=Me===0?-1:1;pe(u[Me]-Ve*$*fe,be-$*we,u[Me]+Ve*$*fe,be+$*we,p,Pe)}Z=v;let he=me.mouthOpen.x+Fe.x*(.55+.45*Math.sin((j+l*.37)*_S*Math.PI*2))*.8,ue=he>0?he<1.2?he:1.2:0,Le=-me.mouthCurve.x/.5,U=(Le>1?1:Le>0?Le:0)*(ue<.4?ue/.4:1),ce=r/2*(1-.35*(ue<1?ue:1)*(1-.7*U)),re=MS(me.lid.x,me.mouthCurve.x),Ie=me.mouthCurve.x*ce*.5*(1-.4*re)*(1+.6*U),Ce=.55+.5*U,ye=ue*ce*.9;for(let Me=0;Me<Zc;Me++){let Ve=Me/(Zc-1)*2-1,_e=1-Ve*Ve,ze=Ve*ce*(1-.25*re)+re*ce*.2,Ne=s-Ie*_e+re*ce*.45*Ve+Je.x*p*.6*Math.sin(Ve*Math.PI*3);xe(ze,Ne,o),xe(ze,Ne-p-ye*Math.pow(_e,Ce)+Ie*_e*U,o)}W.needsUpdate=!0}function F(me){j+=me;for(let Ee=0;Ee<qc.length;Ee++)Cn(ke[qc[Ee]],Ke(qc[Ee]),Ed,me);Cn(Je,N,Ed,me),Cn(Fe,Y?1:0,Ed,me),Be()}return Be(),{group:Te,setExpression(me){Ye=Object.prototype.hasOwnProperty.call(sr,me)?sr[me]:sr.neutral,N=me==="dead"?1:0,De=ie(Object.prototype.hasOwnProperty.call(sr,me)?me:"neutral")},setTalking(me){Y=!!me},update:F}}var Dn=Math.PI*2,ua=["handL","handR","footL","footR"];function bi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function um(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[ua[t]],s=e[ua[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function fa(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),f=r*a-o*l,d=r*l+o*a;return i[0]=s*c+d*h,i[1]=f+e.hipsY,i[2]=-s*h+d*c,i}var wS=n=>n<0?0:n>1?1:n,Zr=(n,e,t)=>{let i=wS((t-n)/(e-n));return i*i*(3-2*i)},da=(n,e,t,i,s)=>Zr(e,t,n)*(1-Zr(i,s,n));function Bt(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var Kc=[0,0,0];function vs(n,e,t,i,s,r){return Kc[0]=t,Kc[1]=i,Kc[2]=s,fa(n,e,Kc,r)}var Jc={sx:0,sy:0,fx:0};function Gn(n){return Jc.sx=Math.abs(n.shoulderL[0]),Jc.sy=n.shoulderL[1],Jc.fx=Math.abs(n.hipL[0])+.035,Jc}var Kr=(n,e)=>e>0?n.handL:n.handR;function Ad(n,e,t,i,s){return vs(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var Rd=.55;function nh(n,e,t){let i=Gn(e),s=n/At.idle.duration,r=Dn*s,o=e.hipHeight,a=da(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=Rd,Ad(e,t,i,t.handL,1),Ad(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}var qi=.34,Cd=.25,pm=-.33,TS=.4,ES=.37,AS=.035,th=(Cd-pm)/qi;function dm(n,e){if(n<qi)return e[0]=0,e[1]=Cd-th*n,e;let t=(n-qi)/(1-qi),i=-th*(1-qi),s=-.35*th*(1-qi),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*pm+(o-2*r+t)*i+(-2*o+3*r)*Cd+(o-r)*s,e[0]=TS*Math.sin(Math.PI*Math.pow(t,.8)),e}var rn=[0,0];function mm(n,e,t){let i=Gn(e),s=n/At.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*Dn*(r-(qi+.5)/2);t.hipsY=o-.06+AS*Math.cos(a),t.squash=1+.045*Math.cos(2*Dn*(r-qi-.03)),t.lean=ES+.03*Math.cos(2*Dn*(r-qi));let l=Math.cos(Dn*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,dm(r,rn),Bt(t.footL,i.fx*.75,rn[0],rn[1]),dm(r<.5?r+.5:r-.5,rn),Bt(t.footR,-i.fx*.75,rn[0],rn[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;vs(e,t,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,Kr(t,c))}return t}function gm(n,e,t){let i=Gn(e),s=Dn*n/At.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Bt(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Bt(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Bt(t.footL,i.fx+.02,0,.15),Bt(t.footR,-i.fx-.03,0,-.13),t}var Pd=.35;function RS(n){return n<.06?Zr(0,.06,n):Math.exp(-9*(n-.06))*(1-Zr(.24,Pd,n))}function CS(n){if(n<.07)return Zr(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(Dn*e/.22)*(1-Zr(.26,Pd,n))}function PS(n,e,t){let i=Gn(e),s=e.hipHeight,r=RS(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*CS(n),t.elbows=Rd+(1-Rd)*r;for(let o=-1;o<=1;o+=2){let a=Kr(t,o);Ad(e,t,i,a,o);let l=a[0],c=a[1],h=a[2];vs(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}var xs=[0,0,0];function IS(n,e,t){nh(n,e,t);let i=Gn(e),s=n/At.talk.duration,r=Dn*s,o=da(s,.04,.17,.4,.55),a=da(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),vs(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,xs);for(let c=0;c<3;c++)t.handR[c]+=(xs[c]-t.handR[c])*o;vs(e,t,i.sx+.19,i.sy-.12-.03*l,.34,xs);for(let c=0;c<3;c++)t.handL[c]+=(xs[c]-t.handL[c])*a;return t}var Ln=bi();function LS(n,e,t){let i=n/At.roll.duration,s=da(i,0,.15,.75,1),r=Gn(e);nh(0,e,Ln);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Ln.hipsY,.45),t.lean=o(Ln.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(Ln.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=Kr(t,a),c=Kr(Ln,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?t.footL:t.footR,f=a>0?Ln.footL:Ln.footR;h[0]=o(f[0],a*r.fx),h[1]=o(f[1],.18),h[2]=o(f[2],-.05)}return t}function DS(n,e,t){return mm(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var NS=.25,OS=.85,US=.82;function xm(n,e,t){let i=Gn(e),s=Dn*n/At.coverLow.duration;return t.hipsY=NS+.006*Math.sin(s),t.lean=OS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=US,t.elbows=1,Bt(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Bt(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Bt(t.footL,i.fx+.08,0,.12),Bt(t.footR,-i.fx-.08,0,.12),t}function vm(n,e,t,i){let s=Gn(n),r=i/At[t].duration,o=Math.sin(Dn*r);return e.hipsY+=.012*Math.cos(2*Dn*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function FS(n,e,t){return xm(0,e,t),vm(e,t,"coverLowMove",n),t}function Id(n,e,t){let i=Gn(e),s=Dn*n/At.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,vs(e,t,i.sx+.14,i.sy+0,.31,t.handL),vs(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}function kS(n,e,t){return Id(0,e,t),vm(e,t,"coverTallMove",n),t}function BS(n,e,t){return gm(n*(At.aim.duration/At.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function zS(n,e,t){let i=n/At.vault.duration,s=da(i,0,.3,.7,1),r=Gn(e);nh(0,e,Ln);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Ln.hipsY,e.hipHeight-.02),t.lean=o(Ln.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(Ln.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=Kr(t,a),c=Kr(Ln,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?t.footL:t.footR,f=a>0?Ln.footL:Ln.footR;h[0]=o(f[0],a*(r.fx+.04)),h[1]=o(f[1],.55),h[2]=o(f[2],.3)}return t}var HS=.17,GS=.5,VS=-.9,WS=.82;function XS(n,e,t){let i=Gn(e),s=Dn*n/At.coverBlindLow.duration;return t.hipsY=HS+.006*Math.sin(s),t.lean=GS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=VS+.03*Math.sin(2*s+1),t.squash=WS,t.elbows=1,fa(e,t,e.shoulderR,xs),Bt(t.handR,xs[0]-.02,xs[1]+.44+.008*Math.sin(s+.4),xs[2]+.12),Bt(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Bt(t.footL,i.fx+.08,0,.12),Bt(t.footR,-i.fx-.08,0,.12),t}function fm(n,e,t,i){Id(n*(At.coverTall.duration/At.coverBlindTallL.duration),e,t);let s=Gn(e);return vs(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var YS=.3,qS=1.2,jc=[.4,.62],Qc=[-.6,-.36];function eh(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function $S(n,e,t){let i=Gn(e),s=n/At.crawl.duration,r=Dn*s;return t.hipsY=YS+.012*Math.cos(2*r),t.lean=qS+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,eh(s,jc[1],jc[0],.16,.04,rn),Bt(t.handL,i.sx+.12,rn[0],rn[1]),eh(s+.5,jc[1],jc[0],.16,.04,rn),Bt(t.handR,-i.sx-.12,rn[0],rn[1]),eh(s,Qc[1],Qc[0],.16,0,rn),Bt(t.footR,-i.fx-.02,rn[0],rn[1]),eh(s+.5,Qc[1],Qc[0],.16,0,rn),Bt(t.footL,i.fx+.02,rn[0],rn[1]),t}var ZS=.05;function hn(n,e,t,i=ZS){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=bi())=>t(s,r,o)})}var At=Object.freeze({idle:hn(2.4,!0,nh),run:hn(.56,!0,mm,.008),aim:hn(1.6,!0,gm),flinch:hn(Pd,!1,PS),talk:hn(2.4,!0,IS),roll:hn(.55,!1,LS,.02),sprint:hn(.56,!0,DS,.008),coverLow:hn(2.4,!0,xm),coverLowMove:hn(.5,!0,FS),coverTall:hn(2.4,!0,Id),coverTallMove:hn(.5,!0,kS),coverPop:hn(1.6,!0,BS),vault:hn(.5,!1,zS,.02),coverBlindLow:hn(1.6,!0,XS),coverBlindTallL:hn(1.6,!0,(n,e,t)=>fm(n,e,t,1)),coverBlindTallR:hn(1.6,!0,(n,e,t)=>fm(n,e,t,-1)),crawl:hn(1,!0,$S)}),_s=th/At.run.duration;function pa(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(At,n)?At[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||bi())}function ih(n,e,t,i=bi()){if(!(t>0))return um(n,i);if(t>=1)return um(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[ua[r]],a=e[ua[r]],l=i[ua[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var KS=.05,$i=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],ma=["handL","handR","footL","footR"],Ld=$i.length+ma.length*3,Jr=[.35,-.2,-.8],Dd=[.75,-.85,-.15];function Xt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new it(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Tt(s,3)),n}var JS=new pt,Kn=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(JS.compose(new k(e,t,i),new Tn().setFromEuler(new In(s,r,o)),new k(a,l,c)));function rr(n=20,e=14){let t=new _n(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),K0(t)}function Nd(n,e,t){let i=rr(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function rh(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new vn(t,t,o,6,1),l=new Tn().setFromUnitVectors(new k(0,1,0),new k(i/o,s/o,r/o));return a.applyMatrix4(new pt().compose(new k((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new k(1,1,1))),a}function oh(n,e){let t=bn(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);ci(t),t.computeBoundingSphere();let i=new mt(t,Vt({color:"#ffffff",vertexColors:!0}));return i.name=e,Rn(i),i}function Od(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function jS(n){let e=n.torso,t=n.colors,i=n.outfit,s=(h,f)=>{let d=new Yo(h.map(([u,m])=>new He(u,m)),22);return d.scale(1,1,e.depth),Xt(d,f)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let f=e.shirt;for(let d=1;d<f.length;d++)if(h<=f[d][1]){let u=(h-f[d-1][1])/(f[d][1]-f[d-1][1]||1);return f[d-1][0]+(f[d][0]-f[d-1][0])*u}return 0},l=(h,f)=>{let d=a(f);return e.depth*d*Math.sqrt(Math.max(1-h*h/(d*d),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let f=rr(14,10);Kn(f,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),f.computeVertexNormals(),r.push(Xt(f,t.shirt))}if(i.collar){let h=new Js(.1,.03,8,20);Kn(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Xt(h,t.collar))}if(i.logo){let d=new vn(.03,.03,.01,12);Kn(d,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Xt(d,t.logo))}if(i.lanyard){let f=l(0,.15)+.012;for(let m of[-1,1]){let x=[m*.075,o-.03,.085],p=[m*.05,.34,l(.05,.34)+.014],g=[m*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Xt(rh(x,p,.008),t.lanyard),Xt(rh(p,g,.008),t.lanyard))}let d=new It(.075,.1,.014);Kn(d,0,.15,f,-.05,0,.04);let u=new It(.077,.026,.016);Kn(u,0,.15+.028,f,-.05,0,.04),r.push(Xt(d,t.badge),Xt(u,t.badgeStripe))}return oh(r,"torso")}function QS(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=Nd((a,l,c,h)=>Od(e,a,l,c,h),40,28);r.push(Xt(o,i.skin),Xt(ew(e,t),i.hair));for(let a of[-1,1]){let l=rr(12,8);Kn(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(Xt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=rr(12,8);Kn(c,0,l,tw(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(Xt(c,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new An;l.getPoint=(x,p=new k)=>p.set(Math.cos(Math.PI*x)*(e.rx+t.thickness+.012),Math.sin(Math.PI*x)*a,0);let c=new qo(l,24,.014,6,!1);Kn(c,0,0,-.03,-.12,0,0),r.push(Xt(c,i.headset));for(let x of[-1,1]){let p=new vn(.055,.06,.05,14);Kn(p,x*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Xt(p,i.headset))}let h=n.face,f=[e.rx+.035,-.04,0],d=[e.rx+.005,h.mouthY+.01,.13],u=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Xt(rh(f,d,.009),i.headset),Xt(rh(d,u,.009),i.headset));let m=rr(10,8);Kn(m,u[0],u[1],u[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(Xt(m,i.mic))}return oh(r,"headMesh")}var ys=48,sh=12;function ew(n,e){let t=(d,u)=>.04+.17*u+.025*Math.max(u,0)*d,i=[0,0,0],s=Ic.smoothstep,r=[],o=(d,u,m)=>{let x=Math.sin(d)*Math.sin(u),p=Math.cos(d),g=Math.sin(d)*Math.cos(u);Od(n,x,p,g,i);let _=i[0]/(n.rx*n.rx),w=i[1]/(n.ry*n.ry),M=i[2]/(n.rz*n.rz),b=Math.hypot(_,w,M)||1;_/=b,w/=b,M/=b;let S=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(g+.3,0),v=e.quiff?e.lift*Math.max(g,0)*s(i[1],.12,.26)*(1-.5*x):0,y=e.back*Math.max(-g,0)*s(i[1],-.15,.1),T=m?-.01:e.thickness*(1-.55*Math.min(S,1))+v+y;r.push(i[0]+_*T,i[1]+w*T,i[2]+M*T)},a=d=>{let u=0,m=Math.PI;for(let x=0;x<40;x++){let p=(u+m)/2,g=Math.sin(p)*Math.sin(d),_=Math.sin(p)*Math.cos(d);Od(n,g,Math.cos(p),_,i),i[1]>t(g,_)?u=p:m=p}return u};o(0,0,!1);let l=[];for(let d=0;d<ys;d++)l.push(a(d/ys*Math.PI*2));for(let d=1;d<=sh+1;d++)for(let u=0;u<ys;u++){let m=u/ys*Math.PI*2,x=d>sh;o(x?l[u]+.03:l[u]*(d/sh),m,x)}let c=(d,u)=>1+(d-1)*ys+u%ys,h=[];for(let d=0;d<ys;d++)h.push(0,c(1,d),c(1,d+1));for(let d=1;d<=sh;d++)for(let u=0;u<ys;u++){let m=c(d,u),x=c(d,u+1),p=c(d+1,u),g=c(d+1,u+1);h.push(m,p,g,m,g,x)}let f=new kt;return f.setAttribute("position",new dt(r,3)),f.setIndex(h),f.computeVertexNormals(),f}function tw(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function _m(n,e){let t=n.hand.radius,i=n.colors,s=rr(14,10);Kn(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=rr(10,8);return Kn(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),oh([Xt(s,i.skin),Xt(r,i.skin)],e>0?"handL":"handR")}function ym(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=Nd((h,f,d,u)=>{u[0]=h*s*(d>0?1:.9),u[1]=Math.max(a*.8,t.height*.55+f*t.height*.6-Math.max(d,0)*t.height*.25),u[2]=o+d*r*.96},20,12),c=Nd((h,f,d,u)=>{u[0]=h*(s+.008),u[1]=Math.min(Math.max(a*.5+f*a,0),a),u[2]=o+d*(r+.008)},20,6);return oh([Xt(l,i.shoe),Xt(c,i.sole)],e>0?"footL":"footR")}function Ms(n){let e=new bt;e.name=n.name||"character";let t=new bt;t.name="body",e.add(t);let i=new bt;i.name="hips",i.rotation.order="YXZ";let s=jS(n);i.add(s);let r=new bt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=QS(n);o.position.y=n.head.centerY,r.add(o);let a=hm({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[_m(n,1),_m(n,-1)],c=[ym(n,1),ym(n,-1)],h=[0,1].map(()=>Td({radius:n.armRadius,color:n.colors.skin})),f=[0,1].map(()=>Td({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",f[0].mesh.name="legL",f[1].mesh.name="legR",t.add(...l,...c,h[0].mesh,h[1].mesh,f[0].mesh,f[1].mesh);let d=Xc({rx:.45,rz:.38,opacity:.55});e.add(d);let u=bi(),m=bi(),x=[];for(let B=0;B<Ld;B++)x.push({x:0,v:0});let p=!1,g=KS,_=(B,ge)=>ge<$i.length?B[$i[ge]]:B[ma[(ge-$i.length)/3|0]][(ge-$i.length)%3];function w(B,ge,de){ge<$i.length?B[$i[ge]]=de:B[ma[(ge-$i.length)/3|0]][(ge-$i.length)%3]=de}function M(B,ge){ge>=0&&(g=ge),u.hipsY=B.hipsY,u.lean=B.lean,u.twist=B.twist,u.headYaw=B.headYaw,u.headPitch=B.headPitch,u.squash=B.squash,u.elbows=B.elbows>=0?B.elbows:0;for(let de=0;de<4;de++){let J=B[ma[de]],ve=u[ma[de]];ve[0]=J[0],ve[1]=J[1],ve[2]=J[2]}if(!p){p=!0;for(let de=0;de<Ld;de++)x[de].x=_(u,de),x[de].v=0}}let b=[0,0,0],S=[0,0,0],v=[0,0,0],y=[0,0,0],T={mid:[0,0,0],end:[0,0,0],stretch:1},E=new k,R=new k,D=new k,z=new pt,L=n.armLength/2,G=n.legLength/2,H=n.ankleHeight;function X(B,ge,de){let J=Math.cos(m.twist),ve=Math.sin(m.twist);y[0]=B*J+de*ve,y[1]=ge,y[2]=-B*ve+de*J}function le(){let B=m.squash>.2?m.squash:.2,ge=1/Math.sqrt(B);t.scale.set(ge,B,ge),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let de=0;de<2;de++){let J=de===0?1:-1;fa(n,m,de===0?n.shoulderL:n.shoulderR,b);let ve=m.elbows<0?0:m.elbows>1?1:m.elbows;X(J*(Jr[0]+(Dd[0]-Jr[0])*ve),Jr[1]+(Dd[1]-Jr[1])*ve,Jr[2]+(Dd[2]-Jr[2])*ve),wd(b,de===0?m.handL:m.handR,L,L,y,T),h[de].set(b,T.mid,T.end,T.stretch);let Te=l[de];Te.position.set(T.end[0],T.end[1],T.end[2]),E.set(T.end[0]-T.mid[0],T.end[1]-T.mid[1],T.end[2]-T.mid[2]),E.lengthSq()<1e-10&&E.set(0,-1,0),E.normalize(),R.set(-J*Math.cos(m.twist),0,J*Math.sin(m.twist)),R.addScaledVector(E,-R.dot(E)),R.lengthSq()<1e-4&&R.set(0,0,1).addScaledVector(E,-E.z),R.normalize(),D.crossVectors(R,E),z.makeBasis(R,E,D),Te.quaternion.setFromRotationMatrix(z),fa(n,m,de===0?n.hipL:n.hipR,S);let Ye=de===0?m.footL:m.footR;v[0]=Ye[0],v[1]=Ye[1]+H,v[2]=Ye[2],X(J*.15,0,1),wd(S,v,G,G,y,T),f[de].set(S,T.mid,T.end,T.stretch);let ie=c[de];ie.position.set(T.end[0],T.end[1]-H,T.end[2]),ie.rotation.set(Math.min(Math.max(T.end[1]-H,0),.3)*1.1,m.twist*.3,0)}}function O(B){if(p)for(let ge=0;ge<Ld;ge++)Cn(x[ge],_(u,ge),g,B),w(m,ge,x[ge].x);le(),a.update(B)}pa("idle",0,n,m),le();function W(){e.traverse(B=>{!B.isMesh||B.userData.isOutline||(B.geometry.dispose(),B!==d&&B.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:M,update:O,dispose:W,shadow:d}}var nw=.15,iw=.03,Mm=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function bs(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=At[t].ease,l=bi(),c=bi(),h=pa(t,0,e);ih(h,h,1,l);function f(m,{fade:x}={}){Object.prototype.hasOwnProperty.call(At,m)&&(m===t&&At[m].loop||(m==="flinch"&&t!=="flinch"&&(s=t),ih(h,h,1,l),a=d(),r=x===void 0?m==="flinch"?iw:nw:Math.max(x,0),o=0,t=m,i=0,n.face.setTalking(m==="talk")))}function d(){let m=r>0?Mm(o/r):1;return a+(At[t].ease-a)*m}function u(m,x=m){let p=At[t];if(i+=m,o+=x,p.loop)i>=p.duration&&(i-=p.duration*Math.floor(i/p.duration));else if(i>=p.duration)return f(s),u(0);pa(t,i,e,c),ih(l,c,r>0?Mm(o/r):1,h),n.setPose(h,d())}return{play:f,update:u,current:()=>t}}function ah(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function bm(n){for(let e of Object.values(n))e&&typeof e=="object"&&bm(e);return Object.freeze(n)}var Ud=K.glorpPurple,jt=bm({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:Ud,collar:ah(Ud,K.ink,.25),logo:K.gel,pants:ah(K.planet,K.ink,.3),skin:K.daleSkin,hair:K.daleHair,shoe:ah(K.ink,Ud,.3),sole:K.cream,lanyard:K.hotPink,badge:K.cream,badgeStripe:K.teal,headset:ah(K.ink,K.lilac,.25),mic:K.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var sw=1.5,rw=8,ow=-.2,aw=1.3,Sm=.6,lw=Math.atan2(1.3,-4),cw=new k(-.45,.22,-1).applyEuler(new In(-.2,.68,0)).toArray(),wm=10,hw=.8,uw=.05,dw=["idle","run","aim","flinch","talk"],ga=Object.keys(sr),Tm=(n,e,t)=>Math.min(t,Math.max(e,n));function fw(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function pw(n,e,t=ae.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Em({canvas:n,gl:e}){let t=zc(n,e),i=t.renderer,s=Bc(n),r=document.getElementById("cr-readout"),o=new Xs,a=new cn(ae.camera.fov,1,.1,100),l=Hc({planetDir:cw});o.add(l.mesh);let c=om();o.add(c.group);let h=[];function f(ie,De,Ke){let ke=Ms(Ke===void 0?jt:{...jt,face:{...jt.face,seed:Ke}});ke.root.position.set(ie,0,De),ke.root.rotation.y=Sm,o.add(ke.root);let Je=bs(ke),Fe={rig:ke,anim:Je};return h.push(Fe),Fe}let d=f(c.spawn[0],c.spawn[2]),u=[],m=!1,x=0,p=!0,g=!1,_=.685,w=.1,M=4.6,b=!1,S=new k(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),v=[0,0,0];function y(ie){if(!(!dw.includes(ie)&&!Object.prototype.hasOwnProperty.call(At,ie))){d.anim.play(ie);for(let De of u)De.anim.play(m?"run":ie)}}function T(ie){let De=ga.indexOf(ie);if(!(De<0)){x=De;for(let Ke of h)Ke.rig.face.setExpression(ie)}}function E(ie){p=!!ie,xd(o,p)}function R(ie){g=!!ie,d.rig.root.rotation.y=g?lw:Sm}function D(ie){if(ie=!!ie,ie!==m)if(m=ie,ie){let De=c.spawn[2]+2.4;for(let Ke=0;Ke<wm;Ke++){let ke=c.spawn[0]+(Ke-(wm-1)/2)*hw,Je=f(ke,De,10+Ke);Je.anim.play("run"),Je.rig.face.setExpression(ga[x]),u.push(Je)}xd(o,p)}else{for(let De of u)De.rig.dispose(),h.splice(h.indexOf(De),1);u=[]}}function z(){let ie=t.resize();a.aspect=ie.aspect,a.updateProjectionMatrix()}z(),window.addEventListener("resize",z),n.addEventListener("mousedown",ie=>{ie.button===0&&(b=!0)}),window.addEventListener("mouseup",()=>{b=!1}),window.addEventListener("mousemove",ie=>{b&&!s.isLocked()&&L(ie.movementX||0,ie.movementY||0,.006)}),n.addEventListener("wheel",ie=>{M=Tm(M*Math.exp(ie.deltaY*.001),sw,rw)},{passive:!0});function L(ie,De,Ke){_-=ie*Ke,w=Tm(w+De*Ke,ow,aw)}window.addEventListener("keydown",ie=>{ie.repeat||(ie.code==="Digit4"?y("flinch"):ie.code==="Digit5"?y("talk"):ie.code==="KeyO"?E(!p):ie.code==="KeyP"?D(!m):ie.code==="KeyL"?s.requestLock():ie.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let G=0,H=0,X=0,le=0,O=0,W=0,B=null,ge=0;window.__cr.stats=()=>({fps:G,ms:H,calls:O,tris:W,scale:t.scale(),characters:h.length}),window.__cr.anim=y,window.__cr.orbit=(ie,De,Ke)=>{_=ie,w=De,Ke&&(M=Ke)},window.__cr.expression=T,window.__cr.perf=D,window.__cr.gameCam=R,window.__cr.outlines=E;function de(ie){ie.pressed.weapon1&&y("idle"),ie.pressed.weapon2&&y("run"),ie.pressed.weapon3&&y("aim"),ie.pressed.interact&&T(ga[(x+1)%ga.length]),ie.pressed.grenade&&R(!g)}function J(){if(g){let ie=pw([d.rig.root.position.x,d.rig.root.position.y,d.rig.root.position.z],d.rig.root.rotation.y);a.position.fromArray(ie.pos),a.lookAt(ie.look[0],ie.look[1],ie.look[2])}else fw(_,w,M,v),a.position.set(S.x+v[0],S.y+v[1],S.z+v[2]),a.lookAt(S)}let ve=ie=>ie.toFixed(2);function Te(){let ie=B?Object.keys(B.held).filter(ke=>B.held[ke]).join(" "):"",De=s.padStatus(),Ke=B&&De!=="none"&&De!=="unrecognised controller"?`Gamepad: ${De}
  move ${ve(B.moveX)}, ${ve(B.moveY)}  look ${ve(B.lookX)}, ${ve(B.lookY)}
  held: ${ie||"nothing"}`:`Gamepad: ${De}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${d.anim.current()} / ${ga[x]}   camera: ${g?"game":"orbit"}   outlines: ${p?"on":"off"}`,`${Math.round(G)} fps   ${ve(H)} ms   scale ${t.scale()}`,`${O} draw calls   ${W} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${B?Math.round(B.lookDX):0}, ${B?Math.round(B.lookDY):0}`,Ke].join(`
`)}let Ye=kc({step(){},render(ie,De){let Ke=Math.min(De,uw);B=s.poll(),de(B),s.isLocked()&&!g&&L(B.lookDX,B.lookDY,.003),g||L(B.lookX*600*Ke,B.lookY*600*Ke,.004),l.update(performance.now()/1e3),c.update(Ke);for(let ke of h)ke.anim.update(Ke),ke.rig.update(Ke);J(),i.render(o,a),O=i.info.render.calls,W=i.info.render.triangles,X++,le+=De,le>=1&&(G=X/le,H=le/X*1e3,X=0,le=0),ge+=De,ge>=.1&&(ge=0,Te()),t.frameDone(De*1e3)}});J(),i.render(o,a),O=i.info.render.calls,W=i.info.render.triangles,Te(),Ye.start()}function Am(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function ft(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var Fd=1e-9;function Nn(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(p=>p.max[1]>o&&p.min[1]<a),c=Math.hypot(t[0],t[2]),h=Math.max(1,Math.ceil(c/(i/2))),f=t[0]/h,d=t[2]/h,u=!1,m=0,x=0;for(let p=0;p<h;p++){let g=r[0],_=r[2];r[0]+=f,r[2]+=d;let w=!1;for(let M=0;M<5;M++){let b=null,S=Fd;for(let v of l){let y=Math.max(v.min[0],Math.min(r[0],v.max[0])),T=Math.max(v.min[2],Math.min(r[2],v.max[2])),E=r[0]-y,R=r[2]-T,D=Math.hypot(E,R),z,L,G;if(D>Fd){if(D>=i)continue;z=i-D,L=E/D,G=R/D}else{let H=[[r[0]-v.min[0],-1,0],[v.max[0]-r[0],1,0],[r[2]-v.min[2],0,-1],[v.max[2]-r[2],0,1]],X=H[0];for(let le of H)le[0]<X[0]&&(X=le);z=X[0]+i,L=X[1],G=X[2]}z>S&&(S=z,b=[L,G])}if(!b){w=!0;break}if(M===4)break;r[0]+=b[0]*S,r[2]+=b[1]*S,u=!0,m=b[0],x=b[1]}w||(r[0]=g,r[2]=_,u=!0)}return u||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:u,normal:[m,0,x]}}function Jn(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let f=o.min[h]-i,d=o.max[h]+i;if(Math.abs(r[h])<Fd)(e[h]<f||e[h]>d)&&(c=!1);else{let u=(f-e[h])/r[h],m=(d-e[h])/r[h];if(u>m){let x=u;u=m,m=x}u>a&&(a=u),m<l&&(l=m),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function xa(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var kd=["fov","right","up","back"],lh=Math.PI*2,mw=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Pm=n=>n!=="normal"&&mw.includes(n);function Rm(n,e,t={}){let i=Pm(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of kd)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function Cm(n,e){let t=Pm(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function Im(n,e,t,i=0){return e?n>=t:n>=t+i}function Lm({tuning:n=ae.camera,look:e=ae.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],f={},d=[0,0,0],u=[0,0,0],m=[0,0,0],x=[0,0,0],p=[0,0,1],g={pos:x,dir:p,fov:70},_={on:!1,t:0,p:[0,0,0]},w=1,M=0,b=!1;return{yaw:0,pitch:0,look(v,y,T,E,R,D,z=1){(v||y||T||E)&&(_.on=!1);let L=D?e.aimScale:1,G=e.invertY?-1:1;this.yaw-=v*e.mouse*L,this.pitch-=y*e.mouse*L*G;let H=e.pad,X=L*z;T&&(this.yaw-=Math.sign(T)*Math.abs(T)**H.expo*H.yawRate*X*R),E&&(this.pitch-=Math.sign(E)*Math.abs(E)**H.expo*H.pitchRate*X*R*G),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(v=1){let y=n.bump;if(!y||!(y.amount>0)||!(v>0))return;s.x=Math.min(s.x+y.amount*v,2*y.amount);let T=n.slamShake;T&&T.amount>0&&T.time>0&&(o.t=T.time,o.amp=T.amount*v)},dip(v){Number.isFinite(v)&&v>0&&(r.x=Math.min(r.x+v,.1))},kick(v,y=0){let T=n.recoil?n.recoil.max:0;if(!(T>0))return;let E=(R,D)=>Math.max(-T,Math.min(T,R+(Number.isFinite(D)?D:0)));a.p.x=Math.max(0,E(a.p.x,v)),a.y.x=E(a.y.x,y)},hold(v){if(!(n.holdTime>0)){_.on=!1;return}_.on=!0,_.t=n.holdTime,_.p[0]=v[0],_.p[1]=v[1],_.p[2]=v[2]},holding(){return _.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(v,y,T="normal",E=1){y!==void 0&&(this.yaw=y),Rm(n,T,f);for(let R of kd)t[R].x=f[R],t[R].v=0;i.x=E,i.v=0,c.x=Cm(n,T),c.v=0;for(let R=0;R<3;R++)h[R].x=v[R],h[R].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,w=1,b=!0,_.on=!1},update(v,{target:y,mode:T="normal",side:E=1},R){b||this.snap(y,this.yaw,T,E),v>0||(v=0),M+=v,Rm(n,T,f);for(let B of kd)Cn(t[B],f[B],n.blendHalfLife,v);Cn(c,Cm(n,T),n.blendHalfLife,v),Cn(i,E,n.sideHalfLife,v);for(let B=0;B<3;B++)Cn(h[B],y[B],n.followHalfLife,v);Cn(s,0,n.bump?n.bump.halfLife:0,v),Cn(r,0,n.bump?n.bump.halfLife:0,v);let D=n.recoil?n.recoil.halfLife:0;Cn(a.p,0,D,v),Cn(a.y,0,D,v);let z=Math.PI/180,L=n.probeRadius,G=t.back.x,H=1,X=0,le=B=>{let ge=this.yaw+a.y.x*z,de=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*z));X=Math.sin(ge),H=Math.cos(ge);let J=Math.sin(de),ve=Math.cos(de);d[0]=h[0].x,d[1]=h[1].x+t.up.x,d[2]=h[2].x,l[0]=y[0],l[1]=y[1]+t.up.x,l[2]=y[2];let Te=Jn(R,l,d,L);if(Te<1)for(let Fe=0;Fe<3;Fe++)d[Fe]=l[Fe]+(d[Fe]-l[Fe])*Te;let Ye=t.right.x*i.x;u[0]=d[0]-H*Ye,u[1]=d[1],u[2]=d[2]+X*Ye;let ie=Jn(R,d,u,L);for(let Fe=0;Fe<3;Fe++)u[Fe]=d[Fe]+(u[Fe]-d[Fe])*ie;p[0]=X*ve,p[1]=J,p[2]=H*ve;for(let Fe=0;Fe<3;Fe++)m[Fe]=u[Fe]-p[Fe]*G;let De=Jn(R,u,m,L),Ke=G>1e-6?Math.max(n.minBack/G,De):1;Ke>1&&(Ke=1),Ke<w?w=Ke:B&&(w+=(Ke-w)*(n.wallReturnHalfLife>0?1-Math.pow(2,-v/n.wallReturnHalfLife):1));let ke=G*w-s.x;for(let Fe=0;Fe<3;Fe++)x[Fe]=u[Fe]-p[Fe]*ke;let Je=Jn(R,d,x,L);if(Je<1)for(let Fe=0;Fe<3;Fe++)x[Fe]=d[Fe]+(x[Fe]-d[Fe])*Je};if(le(!0),_.on)if(_.t-=v,_.t<=0||T!=="aim")_.on=!1;else for(let B=0;B<3;B++){let ge=_.p[0]-x[0],de=_.p[1]-x[1],J=_.p[2]-x[2],ve=Math.hypot(ge,de,J);if(ve<.5)break;this.yaw=Math.atan2(ge,J)-a.y.x*z,this.pitch=Math.max(n.pitchMin,Math.min(n.pitchMax,Math.asin(de/ve)-a.p.x*z)),le(!1)}let O=n.shake;if(O&&O.amp&&c.x>0){let B=O.amp*(c.x>1?1:c.x),ge=Math.sin(lh*O.hz*M)*B,de=Math.sin(lh*O.hz*1.3*M+1)*B,J=-H,ve=X;x[0]+=J*ge-ve*p[1]*de,x[1]+=(ve*p[0]-J*p[2])*de,x[2]+=ve*ge+J*p[1]*de}x[1]-=r.x;let W=n.slamShake;if(o.t>0&&W&&W.time>0){o.t=Math.max(0,o.t-v);let B=o.t/W.time,ge=o.amp*B*B,de=Math.sin(lh*W.hz*o.t)*ge,J=Math.sin(lh*W.hz*1.27*o.t+2)*ge,ve=-H,Te=X;x[0]+=ve*de-Te*p[1]*J,x[1]+=(Te*p[0]-ve*p[2])*J,x[2]+=Te*de+ve*p[1]*J}return g.fov=t.fov.x,g}}}var Ss=[K.hotPink,K.playerOrange,K.glorpPurple,K.tealLight,K.lilac];function gw(n){let e=n.max[0]-n.min[0],t=n.max[2]-n.min[2],i=n.max[1]-n.min[1],s=Math.max(e,t),r=Math.min(e,t);return n.kind==="pillar"?"pillar":n.kind==="low"?r<.7&&s>=1.8?"planter":"counter":n.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function xw(){let n=[],e=(t,i)=>{let s=new it(i),r=t.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new Tt(o,3)),t};return{list:n,box(t,i,s){let r=new It(i[0]-t[0],i[1]-t[1],i[2]-t[2]);r.translate((t[0]+i[0])/2,(t[1]+i[1])/2,(t[2]+i[2])/2),n.push(e(r,s))},cyl(t,i,s,r,o,a,l="y"){let c=new vn(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(t,i,s),n.push(e(c,a))},ball(t,i,s,r,o){let a=new _n(r,7,5);a.translate(t,i,s),n.push(e(a,o))}}}var jr=(n,e,t=n.min[1],i=n.max[1])=>[[n.min[0]-e,t,n.min[2]-e],[n.max[0]+e,i,n.max[2]+e]];function vw(n,e,t,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],f=.015,d=.06;o?(n.box([a+s,t,l+f],[c-s,i,l+d],r),n.box([a+s,t,h-d],[c-s,i,h-f],r)):(n.box([a+f,t,l+s],[a+d,i,h-s],r),n.box([c-d,t,l+s],[c-f,i,h-s],r))}function va(n,e){let t=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=t>=i,r=s?t:i,o=s?i:t,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,f,d,u,m,x){let p=a(c,f),g=a(h,d),_=l(c,f),w=l(h,d);n.box([Math.min(p,g),u,Math.min(_,w)],[Math.max(p,g),m,Math.max(_,w)],x)},cyl(c,h,f,d,u,m,x="y"){let p=x==="y"?"y":x==="u"?s?"x":"z":s?"z":"x";n.cyl(a(c,h),f,l(c,h),d,u,m,p)}}}function _w(n,e){let t=va(n,e),{len:i,dep:s}=t,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;t.slab(.03,i-.03,.04,s-.04,0,.5,K.shadowTint);for(let l=0;l<=o;l++){let c=l*a;t.slab(c,c+r,.06,s-.06,0,e.max[1],K.lilac),t.slab(c+.03,c+r-.03,0,.07,.8,.94,K.hotPink),t.slab(c+.03,c+r-.03,s-.07,s,.8,.94,K.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;t.slab(c,h,s/2-.03,s/2+.03,.5,.94,K.tealLight),t.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,K.cream)}}function yw(n,e,t){let i=va(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,K.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,K.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,K.cream),i.slab(.15,s-.15,0,.06,.25,.6,K.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,K.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let f=(h+.5+c%2*.25)/l*s,d=a===1?r/2:r*(.3+c*.4);i.cyl(f,d,(.82+o-.02)/2,.14,o-.84,Ss[(h+c*2+t)%Ss.length]),i.cyl(f,d,o-.01,.15,.02,K.cream)}}function Mw(n,e,t){t%3===1?yw(n,e,t):_w(n,e)}function bw(n,e,t){let i=va(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,K.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,K.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,K.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,K.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?K.ink:Ss[(l+t)%Ss.length])}function Sw(n,e,t){let i=va(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,K.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,K.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,K.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let f=0;f<a;f++)for(let d=0;d<l;d++){let u=(d+.5)/l*s,m=a===1?r/2:r*(.3+f*.4),x=Ss[(d+f+t)%Ss.length];i.cyl(u,m,h,.015,.14,K.cream,"u"),i.cyl(u-.07,m,h,c,.06,x,"u"),i.cyl(u+.07,m,h,c,.06,x,"u")}}function ww(n,e){let t=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];n.box(...jr({min:e.min,max:o},-.03,e.min[1],o[1]-.1),K.teal),n.box(...jr({min:e.min,max:o},0,o[1]-.1,o[1]),K.cream),vw(n,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,K.hotPink,t);let a=(m,x,p,g,_)=>n.box(t?[e.min[0]+m,p,e.min[2]+.12]:[e.min[0]+.12,p,e.min[2]+m],t?[e.min[0]+x,g,e.max[2]-.12]:[e.max[0]-.12,g,e.min[2]+x],_);a(.3,.7,o[1],o[1]+.06,K.cream),a(.32,.68,o[1]+.06,o[1]+.12,K.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,K.cream);let l=t?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=m=>t?e.min[0]+m:e.min[2]+m;t?n.cyl(c(r-.5),o[1]+.14,l,.06,.28,K.gel):n.cyl(l,o[1]+.14,c(r-.5),.06,.28,K.gel);let h=.14,f=t?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[m,x]of f)t?n.box([m,e.min[1],e.min[2]],[x,i,e.max[2]],K.lilac):n.box([e.min[0],e.min[1],m],[e.max[0],i,x],K.lilac);let d=f[0][1],u=f[1][0];t?(n.box([d,i-.12,e.min[2]],[u,i,e.max[2]],K.lilac),n.box([d,o[1],e.min[2]+.2],[u,i-.12,e.max[2]-.2],K.tealLight)):(n.box([e.min[0],i-.12,d],[e.max[0],i,u],K.lilac),n.box([e.min[0]+.2,o[1],d],[e.max[0]-.2,i-.12,u],K.tealLight))}function Tw(n,e,t){let i=va(n,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,K.shadowTint);for(let[h,f]of[[0,a],[s-a,s]])for(let[d,u]of[[0,a],[r-a,r]])i.slab(h,f,d,u,.12,o,K.lilac);i.slab(0,s,0,r,o-.1,o,K.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,K.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,K.cream),i.cyl(s/2,c,l,.025,s+.1,K.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?K.ink:Ss[t%Ss.length],"u")}function Ew(n,e){n.box(...jr(e,0,e.min[1],e.max[1]),K.cream),n.box(...jr(e,.05,e.min[1],e.min[1]+.25),K.shadowTint),n.box(...jr(e,.03,e.min[1]+1,e.min[1]+1.12),K.hotPink),n.box(...jr(e,.05,e.max[1]-.25,e.max[1]),K.shadowTint)}function Aw(n){if(!n)return[];let[e,,t]=n.min,[i,,s]=n.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,t],max:[h+c/2,l,t+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=t+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function Dm(n,e=null){let t=xw();for(let s of Aw(e))t.box(s.min,s.max,K.tealLight);let i=0;return n.forEach((s,r)=>{let o=gw(s);o==="counter"?Mw(t,s,i++):o==="planter"?(r%2?Sw:bw)(t,s,r):o==="desk"?ww(t,s):o==="shelf"?Tw(t,s,r):o==="pillar"?Ew(t,s):t.box(s.min,s.max,K.lilac)}),bn(t.list,!1)}var Nm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Nm)),n),ws=.3,Rw=[ft([-12,-1,-12],[12,0,12],"floor"),ft([-12-ws,0,-12-ws],[12+ws,4,-12]),ft([-12-ws,0,12],[12+ws,4,12+ws]),ft([-12-ws,0,-12],[-12,4,12]),ft([12,0,-12],[12+ws,4,12]),ft([5,0,-9],[5.3,4,-3]),ft([6.7,0,-9],[7,4,-3]),ft([-11,0,-7.3],[-6,3,-7]),ft([-6.3,0,-11],[-6,3,-7]),ft([-4,0,-3],[-2,1,-2.4],"low"),ft([3,0,3],[3.6,1,5],"low"),ft([-5,0,3],[-3.8,2.2,3.6],"tall"),ft([1,0,-6],[1.6,2.2,-4],"tall"),ft([-9.4,0,.6],[-8.6,4,1.4],"pillar"),ft([8.6,0,3.6],[9.4,4,4.4],"pillar"),ft([-9,0,6.5],[-6,1,7.1],"low"),ft([-4,0,6.5],[-1,1,7.1],"low"),ft([6,0,6],[10,2.2,6.6],"tall"),ft([-12,0,-1],[-10,1,-.4],"low")],Om=[];for(let n=0;n<=12;n++)Om.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var hh=Nm({boxes:Rw,marks:Om,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function Bd(n){let e=n.map(t=>{let i=new It(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return bn(e,!1)}var Ts=.03,Es=.3,As=.12,ch=2;function Cw(n=hh){let e=n.boxes.find(c=>c.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([t,0,i],[s,Es,i+Ts]),l([t,0,r-Ts],[s,Es,r]),l([t,0,i],[t+Ts,Es,r]),l([s-Ts,0,i],[s,Es,r]);for(let c=t+ch;c<s-.5;c+=ch)l([c-As/2,Es,i],[c+As/2,o,i+Ts]),l([c-As/2,Es,r-Ts],[c+As/2,o,r]);for(let c=i+ch;c<r-.5;c+=ch)l([t,Es,c-As/2],[t+Ts,o,c+As/2]),l([s-Ts,Es,c-As/2],[s,o,c+As/2]);return a}function Um(n=hh){let e=new bt,t=n.boxes.find(r=>r.kind==="floor");e.add(Vc({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));let i=n.boxes.filter(r=>r.kind!=="floor");if(i.length){let r=new mt(ci(Dm(i,t)),Vt({vertexColors:!0}));r.name="grey-props",Rn(r),e.add(r)}let s=Cw(n);if(s.length){let r=new mt(Bd(s),Vt({color:K.shadowTint}));r.name="grey-wall-trim",e.add(r)}if(n.marks.length){let r=new mt(Bd(n.marks),Vt({color:K.hotPink}));r.name="grey-marks",e.add(r)}if(n.ammoCrates&&n.ammoCrates.length){let r=[];for(let a of n.ammoCrates)r.push({min:[a.pos[0]-.35,0,a.pos[2]-.25],max:[a.pos[0]+.35,.4,a.pos[2]+.25]}),r.push({min:[a.pos[0]-.39,.4,a.pos[2]-.29],max:[a.pos[0]+.39,.5,a.pos[2]+.29]});let o=new mt(ci(Bd(r)),Vt({color:K.playerOrange}));o.name="grey-crate",Rn(o),e.add(o)}if(n.landmark){let r=n.landmark,o=Wc({text:r.text,w:r.w,h:r.h});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=Math.PI,e.add(o)}for(let r of n.signs||[]){let o=Wc({text:r.text,w:r.w,h:r.h,bg:r.bg,seed:4});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=r.yaw,e.add(o)}return{group:e,boxes:n.boxes,update(r){}}}var Fm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Fm)),n),Rs=.3,Si=7,wi=15,Pw=[ft([-Si,-1,-wi],[Si,0,wi],"floor"),ft([-Si-Rs,0,-wi-Rs],[Si+Rs,4,-wi]),ft([-Si-Rs,0,wi],[Si+Rs,4,wi+Rs]),ft([-Si-Rs,0,-wi],[-Si,4,wi]),ft([Si,0,-wi],[Si+Rs,4,wi]),ft([-5,0,-9.5],[-3,1,-8.5],"low"),ft([2,0,-9.5],[4,1,-8.5],"low"),ft([-.4,0,-7.4],[.4,4,-6.6],"pillar"),ft([-1,0,-3.5],[1,1,-2.5],"low"),ft([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),ft([3.5,0,-1.5],[5.5,1,-.5],"low"),ft([-4.5,0,3.5],[-2.5,1,4.5],"low"),ft([2.5,0,3.5],[4.5,1,4.5],"low"),ft([-.4,0,6.6],[.4,4,7.4],"pillar"),ft([-4.5,0,9],[-2.5,1,10],"low"),ft([2.5,0,9],[4.5,1,10],"low"),ft([-1.5,0,12],[1.5,2.2,12.6],"tall")],Iw=[-12,-6,.5,7,11],Lw=[-6,-2,2,6],uh=[];for(let n of Iw)for(let e of Lw)uh.push([e,n]);uh.push([0,-5],[0,0],[0,9.5]);uh.push([-3.5,13.5],[3.5,13.5]);var km=Fm({name:"kioskRow",boxes:Pw,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:uh,ammoCrates:[{pos:[5.5,0,-12.5]}],landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});var Cs=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},zd=class extends Cs{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Hd(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var Dw={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Hd,toHexString:Hd},ya={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Nw={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=ya.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return ya.toHexString(s)}},Ow={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=ya.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return ya.toHexString(s)}},Uw=[Dw,ya,Nw,Ow];function Fw(n){return Uw.find(e=>e.match(n))}var Gd=class extends Cs{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Fw(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Hd(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},_a=class extends Cs{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Vd=class extends Cs{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},i=_=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),i(this._step*this._normalizeMouseWheel(_)))},o=!1,a,l,c,h,f,d=5,u=_=>{a=_.clientX,l=c=_.clientY,o=!0,h=this.getValue(),f=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=_=>{if(o){let w=_.clientX-a,M=_.clientY-l;Math.abs(M)>d?(_.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>d&&x()}if(!o){let w=_.clientY-c;f-=w*this._step*this._arrowKeyMultiplier(_),h+f>this._max?f=this._max-h:h+f<this._min&&(f=this._min-h),this._snapClampSetValue(h+f)}c=_.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},p=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",u),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(g,_,w,M,b)=>(g-_)/(w-_)*(b-M)+M,t=g=>{let _=this.$slider.getBoundingClientRect(),w=e(g,_.left,_.right,this._min,this._max);this._snapClampSetValue(w)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",d))},f=g=>{if(o){let _=g.touches[0].clientX-a,w=g.touches[0].clientY-l;Math.abs(_)>Math.abs(w)?c(g):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d))}else g.preventDefault(),t(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d)},u=this._callOnFinishChange.bind(this),m=400,x,p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();let w=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(u,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Wd=class extends Cs{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Xd=class extends Cs{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},kw=`.lil-gui {
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
}`;function Bw(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var Bm=!1,dh=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Bm&&a&&(Bw(kw),Bm=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new Wd(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new Vd(this,e,t,i,s,r);case"boolean":return new zd(this,e,t);case"string":return new Xd(this,e,t);case"function":return new _a(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Gd(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof _a||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof _a)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var I=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function zm(n){let e=(t,i,s,r)=>I(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Ma=Object.freeze([I("move.jog",1,10,.1),I("move.aimWalk",.5,6,.1),I("move.sprint",2,14,.1),I("move.accelTime",.01,.6,.01),I("move.stopTime",.01,.6,.01),I("move.turnRate",1,40,.5),I("move.aimTurnRate",1,40,.5),I("move.sprintTurnRate",.2,20,.1),I("move.rollDistance",1,12,.1),I("move.rollTime",.2,1.5,.01),I("move.rollEase",1,4,.05),I("move.rollBuffer",0,.5,.01),I("move.tapMax",.05,.5,.01),I("move.stickSprintMin",0,1,.05),I("move.faceMinSpeed",0,2,.05),I("move.sprintHeadingMinSpeed",0,3,.05),I("move.runClipMinSpeed",0,2,.05),I("move.runRateMin",.1,2,.05),I("move.runRateMax",.5,4,.05),I("move.sprintRateMin",.1,2,.05),I("move.sprintRateMax",.5,4,.05),I("move.stepEvery",.4,4,.05),I("move.stepEverySprint",.4,6,.05),I("move.crawlSpeed",.2,4,.05),I("move.crawlTurnRate",.5,20,.5),I("camera.fov",40,110,1),I("camera.right",-1.5,1.5,.01),I("camera.up",.5,3,.01),I("camera.back",.5,6,.05),I("camera.aim.fov",20,90,1),I("camera.aim.back",.3,5,.05),I("camera.sprint.fov",50,120,1),I("camera.sprint.up",.3,3,.01),I("camera.sprint.back",.5,6,.05),I("camera.sprint.shakeWeight",0,3,.05),I("camera.coverLow.fov",50,120,1),I("camera.coverLow.right",-1.5,1.5,.01),I("camera.coverLow.up",.3,3,.01),I("camera.coverLow.back",.5,6,.05),I("camera.coverTall.fov",50,120,1),I("camera.coverTall.right",-1.5,1.5,.01),I("camera.coverTall.up",.3,3,.01),I("camera.coverTall.back",.5,6,.05),I("camera.downed.fov",40,120,1),I("camera.downed.up",.2,3,.01),I("camera.downed.back",.5,6,.05),I("camera.bump.amount",0,.6,.01),I("camera.bump.halfLife",.01,.3,.005),I("camera.slamShake.amount",0,.3,.005),I("camera.slamShake.time",.02,1,.01),I("camera.slamShake.hz",2,60,.5),I("camera.blendHalfLife",0,.5,.005),I("camera.holdTime",0,2,.05),I("camera.holdRange",10,300,5),I("camera.followHalfLife",0,.5,.005),I("camera.sideHalfLife",0,.6,.005),I("camera.headHideDist",0,2,.05),I("camera.headHideMargin",0,1,.01),I("camera.shake.amp",0,.15,.001),I("camera.shake.hz",1,30,.5),I("camera.probeRadius",.05,.6,.01),I("camera.minBack",0,2,.01),I("camera.wallReturnHalfLife",0,1,.01),I("camera.pitchMin",-1.5,0,.01),I("camera.pitchMax",0,1.5,.01),I("look.mouse",5e-4,.008,1e-4),I("look.pad.yawRate",.5,10,.1),I("look.pad.pitchRate",.5,10,.1),I("look.pad.expo",1,3,.05),I("look.aimScale",.1,1.5,.01),{path:"look.invertY"},I("cover.grabRange",0,5,.05),I("cover.grabAngle",0,180,1),I("cover.grabViewAngle",0,180,1),I("cover.grabSlack",0,5,.05),I("cover.grabMinTilt",0,1,.05),I("cover.gap",0,5,.01),I("cover.endInset",0,5,.01),I("cover.minLength",0,5,.05),I("cover.slideSpeed",0,30,.5),I("cover.slideMinTime",0,2,.01),I("cover.slideMaxTime",0,2,.01),I("cover.slideTurnRate",1,60,.5),I("cover.moveSpeed",0,30,.1),I("cover.alongDeadzone",0,1,.05),I("cover.leaveTilt",0,1,.05),I("cover.leaveAngle",0,180,1),I("cover.endLeaveTime",0,2,.01),I("cover.cornerZone",0,5,.05),I("cover.popTime",0,2,.01),I("cover.blindTime",0,2,.01),I("cover.popShift",0,5,.05),I("cover.pushAngle",0,180,1),I("cover.lowDrawBack",0,1,.01),I("cover.blindDrawBack",0,1,.01),I("cover.vaultTime",0,2,.01),I("cover.vaultMaxDepth",0,5,.05),I("cover.vaultHop",0,5,.05),I("cover.vaultExitSpeed",0,30,.1),I("cover.swapRange",0,5,.05),I("cover.swapSpeed",0,30,.5),I("cover.swapAngle",0,180,1),I("cover.swapMaxOffset",0,5,.05),I("cover.slamSquash",0,1,.01),I("cover.slamSquashTime",0,2,.01),I("cover.thudVolume",0,1,.05),I("cover.autoSlam",0,1,1),I("cover.autoAngle",0,90,1),I("cover.autoDist",0,1,.01),I("cover.autoMinTilt",0,1,.05),I("cover.autoMinSpeed",0,12,.1),I("cover.autoTime",0,1,.01),...zm("regret"),...zm("pistol"),I("combat.fireBuffer",0,.5,.01),I("combat.autoReload",0,1,1),I("combat.minRate",.01,1,.01),I("combat.minReloadTime",.01,.5,.01),I("combat.muzzleUp",.5,2,.01),I("combat.muzzleRight",-1,1,.01),I("combat.muzzleForward",0,2,.01),I("combat.blindLift",0,1,.01),I("combat.blindReach",0,1,.01),I("combat.crateRadius",.3,3,.05),I("combat.hitPad",0,.3,.005),I("combat.crouchHead",0,3,.01),I("combat.crouchBodyTop",0,3,.01),I("combat.shoulderDrop",0,1,.01),I("combat.pickupRadius",.2,3,.05),I("health.max",1,500,1),I("health.regenDelay",0,15,.1),I("health.regenTime",0,15,.1),I("health.downedTime",0,60,.5),I("health.standInRevive",0,1,1),I("health.reviveTime",0,10,.1),I("health.reviveHealth",0,1,.05),I("health.godMode",0,1,1),I("health.giveUpHold",0,5,.01),I("associate.radius",0,3,.01),I("associate.height",0,3,.01),I("associate.pointSpacing",.2,3,.01),I("associate.reserveRadius",0,3,.01),I("associate.popShift",0,3,.01),I("associate.linkMax",2,15,.5),I("associate.health",1,1e3,1),I("associate.runSpeed",0,12,.1),I("associate.turnRate",.5,40,.5),I("associate.arriveDist",.01,1,.01),I("associate.stuckTime",.1,5,.1),I("associate.popTime",0,1,.01),I("associate.telegraphTime",0,2,.01),I("associate.burstTime",0,5,.1),I("associate.rate",.5,20,.5),I("associate.damage",0,50,.5),I("associate.range",5,100,1),I("associate.spread",0,15,.1),I("associate.moveSpread",0,15,.1),I("associate.aimLag",0,1,.01),I("associate.suppressChance",0,1,.05),I("associate.suppressTime",0,5,.1),I("associate.suppressRate",.5,20,.5),I("associate.suppressMiss",0,5,.1),I("associate.suppressSpread",0,20,.5),I("associate.coverWaitMin",0,5,.1),I("associate.coverWaitMax",0,8,.1),I("associate.magBursts",1,10,1),I("associate.reloadTime",0,6,.1),I("associate.flinchTime",0,2,.01),I("associate.minRange",0,20,.5),I("associate.preferRange",0,40,.5),I("associate.maxRange",1,60,.5),I("associate.relocateCheck",.05,3,.05),I("associate.relocateAfter",1,60,.5),I("associate.ammoDrop",0,200,1),I("associate.muzzleUp",.5,2,.01),I("director.tokens",0,8,1),I("director.casualTokens",0,8,1),I("director.casual",0,1,1),I("director.tokenCooldown",0,5,.1),I("director.tokenMaxHold",.5,10,.1),I("director.requestWindow",0,2,.05),I("director.pushAfter",1,30,.5),I("director.flankAfter",1,60,.5),I("director.stayRadius",.5,10,.1),I("director.flankAngle",0,180,1),I("director.flankMaxAngle",60,180,1),I("director.maxEnemies",4,8,1),I("associate.downChance",0,1,.05),I("associate.downedCrawl",0,3,.05),I("associate.bleedTime",1,60,.5),I("associate.reviveTime",0,10,.1),I("associate.reviveHealth",.05,1,.05),I("associate.reviveRange",0,40,.5),I("associate.staggerTime",0,3,.05),I("associate.diveWarn",0,1.6,.05),I("associate.diveRadius",0,12,.1),I("associate.diveChance",0,1,.05),I("associate.diveReaction",0,2,.05),I("associate.diveDistance",0,10,.1),I("associate.diveTime",.05,3,.05),I("pad.radius",.1,4,.05),I("pad.openAfterKills",0,8,1),I("pad.openAfter",0,120,1),I("pad.interval",.5,30,.5),I("pad.maxAlive",1,8,1),I("pad.total",1,30,1),I("pad.riseTime",0,3,.05),I("tobble.enabled",0,1,1),I("tobble.scale",.3,1.2,.01),I("tobble.radius",.1,.6,.01),I("tobble.height",.5,2,.01),I("tobble.health",1,1e3,1),I("tobble.regenDelay",0,20,.5),I("tobble.regenTime",0,20,.5),I("tobble.runSpeed",0,12,.1),I("tobble.turnRate",1,30,.5),I("tobble.followMin",0,20,.5),I("tobble.followMax",1,30,.5),I("tobble.personalSpace",0,5,.05),I("tobble.lofClear",0,4,.05),I("tobble.lofRange",1,60,1),I("tobble.sidestepReact",0,3,.05),I("tobble.sidestepDist",0,5,.1),I("tobble.popTime",.01,1,.01),I("tobble.popLift",0,.6,.01),I("tobble.muzzleUp",.3,2,.01),I("tobble.coverWaitMin",0,5,.1),I("tobble.coverWaitMax",0,8,.1),I("tobble.burstTime",0,6,.1),I("tobble.rate",.5,20,.5),I("tobble.damage",0,100,1),I("tobble.spread",0,20,.5),I("tobble.range",1,100,1),I("tobble.reviveMaxThreats",0,8,1),I("tobble.reviveWaitMax",0,20,.5),I("tobble.reviveRange",.3,4,.05),I("tobble.reviveTime",0,15,.1),I("tobble.reviveHealth",.05,1,.05),I("tobble.playerReviveTime",0,10,.1),I("tobble.playerReviveRange",.3,5,.05),I("tobble.crawlSpeed",0,3,.05),I("tobble.complainEvery",1,30,.5),I("dummy.health",1,1e3,1),I("dummy.respawnTime",0,30,.5),I("dummy.railSpeed",0,10,.1),I("camera.recoil.halfLife",.01,.5,.01),I("camera.recoil.max",0,20,.5),I("look.pad.assist",.1,1,.05),I("feedback.flashTime",.01,.3,.01),I("feedback.flashSize",.05,1.5,.05),I("feedback.tracerTime",.01,.3,.01),I("feedback.tracerWidth",.005,.2,.005),I("feedback.sparkTime",.05,1,.01),I("feedback.sparkCount",0,12,1),I("feedback.gelTime",.1,2,.05),I("feedback.gelCount",0,24,1),I("feedback.gelSpeed",0,10,.1),I("feedback.killGelCount",0,48,1),I("feedback.receiptCount",0,24,1),I("feedback.receiptTime",.2,4,.05),I("feedback.gravity",0,30,.1),I("feedback.hitMarkerTime",.02,1,.01),I("feedback.killMarkerTime",.05,1,.01),I("feedback.reloadResultTime",.1,2,.05),I("feedback.reticleMinGap",0,30,1),I("feedback.lowAmmoFrac",0,1,.05),I("feedback.coverReticleOpacity",0,1,.05),I("feedback.stepDip",0,.1,.001),I("feedback.stepVolume",0,1,.05),I("feedback.shotVolume",0,1,.05),I("feedback.hitVolume",0,1,.05),I("feedback.killVolume",0,1,.05),I("feedback.reloadVolume",0,1,.05),I("feedback.gunSquash",0,.6,.01),I("feedback.gunSquashTime",.01,.5,.01),I("feedback.gunKick",0,.3,.01),I("feedback.bodyKick",0,.3,.01),I("feedback.dummyBurstTime",.01,1,.01),I("feedback.dummyRespawnPop",0,1,.01),I("feedback.faceMaxOpacity",0,1,.05),I("feedback.edgeMaxOpacity",0,1,.05),I("feedback.hitFlashTime",.05,2,.01),I("feedback.hitKick",0,3,.05),I("feedback.hurtVolume",0,1,.05),I("feedback.enemyFlashSize",.05,1.5,.05),I("feedback.enemyTracerTime",.01,.3,.01),I("feedback.enemyTracerWidth",.005,.2,.005),I("feedback.glintSize",.02,.4,.01),I("feedback.blasterVolume",0,1,.05),I("feedback.chargeVolume",0,1,.05),I("feedback.pickupVolume",0,1,.05),I("feedback.barkTime",.2,6,.1),I("feedback.barkGap",0,12,.5),I("melee.holdTime",0,5,.01),I("melee.bashTime",0,5,.01),I("melee.bashHitAt",0,5,.01),I("melee.bashRange",0,10,.05),I("melee.bashAngle",0,180,1),I("melee.bashDamage",0,500,1),I("melee.bashLunge",0,10,.05),I("melee.bashCooldown",0,5,.01),I("melee.revSpeed",0,30,.1),I("melee.revPulse",.05,5,.01),I("melee.cutterReach",0,10,.05),I("melee.cutterAngle",0,180,1),I("melee.cutTime",0,5,.01),I("melee.finishTime",0,5,.01),I("melee.executeRange",0,10,.05),I("melee.executeAngle",0,180,1),I("melee.promptRange",0,10,.05),I("melee.cutterSpin",0,100,1),I("grenade.carry",0,10,1),I("grenade.start",0,10,1),I("grenade.throwSpeed",0,30,.1),I("grenade.throwLift",0,180,1),I("grenade.gravity",.5,30,.1),I("grenade.ballRadius",.02,1,.01),I("grenade.restitution",0,1,.01),I("grenade.friction",0,1,.01),I("grenade.fuse",0,5,.01),I("grenade.radius",0,10,.05),I("grenade.damage",0,500,1),I("grenade.killRadius",0,10,.05),I("grenade.killDamage",0,500,1),I("grenade.selfDamage",0,2,.05),I("grenade.padReach",0,10,.05),I("grenade.arcTime",0,5,.01),I("grenade.throwTime",0,5,.01)]),zw=new Map(Ma.map(n=>[n.path,n])),ba=structuredClone(ae);function or(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function qd(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function $d(n=ae,e=ba){let t={};for(let i of Ma){let s=or(n,i.path);s!==or(e,i.path)&&(t[i.path]=s)}return t}function Hm(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=zw.get(i);if(!s)continue;let r=e[i],o=or(ba,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||qd(n,i,r)&&t++)}return t}function Yd(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>Yd(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${Yd(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function Gm(n=ae){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","pad","tobble","weapons"].map(e=>`  ${e}: ${Yd(n[e],1)},`).join(`
`)}var Zd="cr-tuning",Hw={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},Gw=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Vm(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&Gw.has(e[1])&&t.push("wall"),t[0]==="look"&&t[1]==="pad"&&(t[1]="lookPad"),t}function Vw(){try{return window.localStorage}catch{return null}}function Wm({storage:n=Vw()}={}){let e=()=>{try{return n?n.getItem(Zd):null}catch{return null}},t=x=>{try{n&&(x===null?n.removeItem(Zd):n.setItem(Zd,x))}catch{}};try{let x=e();x&&Hm(ae,JSON.parse(x))}catch{}let i=new dh({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let x=document.activeElement;x&&x!==document.body&&s.contains(x)&&x.blur&&x.blur()}s.addEventListener("click",x=>{let p=x.target;p&&p.closest&&p.closest(".lil-title")&&p.blur!==void 0&&r()});let o=new Map;function a(x){let p=i,g="";for(let _ of x){if(g+=`.${_}`,!o.has(g)){let w=p.addFolder(Hw[_]||_);w.close(),o.set(g,w)}p=o.get(g)}return p}function l(){let x=$d();t(Object.keys(x).length?JSON.stringify(x):null)}for(let x of Ma){let p=x.path.split("."),g=p[p.length-1],_=or(ae,p.slice(0,-1).join(".")),w=typeof or(ba,x.path)=="boolean"?a(Vm(x.path)).add(_,g):a(Vm(x.path)).add(_,g,x.min,x.max,x.step);w.onChange(l),w.onFinishChange(r)}let c=null;function h(x){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let p=document.createElement("div");p.textContent="Press Cmd+C to copy",p.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=p,s.appendChild(p),s.appendChild(c)}c.value=x,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function f(x){c&&(c.hidden=!0,c.note.hidden=!0);let p=null;try{p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(x):null}catch{p=null}if(!p){h(x);return}p.catch(()=>h(x))}let d={copyChanges(){r(),f(JSON.stringify($d(),null,2))},copyForFile(){r(),f(Gm())},resetAll(){r();for(let x of Ma)qd(ae,x.path,or(ba,x.path));t(null),i.controllersRecursive().forEach(x=>x.updateDisplay())}};i.add(d,"copyChanges").name("Copy changes"),i.add(d,"copyForFile").name("Copy for tuning.js"),i.add(d,"resetAll").name("Reset all");let u=!1;function m(x){u=x,s.style.display=x?"":"none"}return m(!1),{toggle(){m(!u)},isOpen:()=>u}}var Xm=Math.PI*2,Zi=n=>n-Xm*Math.round(n/Xm),hi=(n,e)=>Math.atan2(n,e);function Sa(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function jn(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Wt(n,e,t){let i=Zi(e-n);return n+Math.max(-t,Math.min(t,i))}function Qr(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=t-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=t):(o[0]+=l/h*a,o[2]+=c/h*a)}var Kd=[0,0],fh=[0,0,0],wa=1e-9,Ww=1.5;var Xw=(n=ae)=>n.tobble?.playerReviveTime??Ww;function Ym(n,e,t){let i=e-n.pos[0],s=t-n.pos[2];Math.hypot(i,s)>1e-6&&(n.facing=n.facing+Zi(Math.atan2(i,s)-n.facing)),n.heading=n.facing}function ph(n){n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0}var mh={bash:{acceptsTap:!1,selfMoves:!0,enter(n){n.aiming=!1,n.firing=!1,n.scratch.dir=[Math.sin(n.facing),Math.cos(n.facing)],n.scratch.prevOff=0,n.scratch.hit=!1,n.heading=n.facing},update(n,e,t){let i=ae.melee,s=n.scratch;n.aiming=!1,n.firing=!1;let r=n.stateTime>=i.bashTime-wa,o=r||!(i.bashTime>0)?1:n.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,fh[0]=s.dir[0]*l,fh[1]=0,fh[2]=s.dir[1]*l,n.moveBy(fh,t,!1),!s.hit&&(r||n.stateTime>=i.bashHitAt-wa)&&(s.hit=!0,n.onAction?.({type:"bashHit"})),r?(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(n){n.aiming=!1,n.firing=!1,n.heading=n.facing},update(n,e,t){let i=n.tuning,s=ae.melee.revSpeed;n.aiming=!1,n.firing=!1,jn(e,Kd),Qr(n,Kd[0]*s,Kd[1]*s,s,t,i);let r=n.speed();return r>s&&(n.vel[0]*=s/r,n.vel[2]*=s/r),r>i.faceMinSpeed?n.facing=Wt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t):n.facing=Wt(n.facing,e.camYaw,i.aimTurnRate*t),n.heading=n.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(n){ph(n)},update(n){return ph(n),n.stateTime<n.scratch.time-wa?null:(n.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(n){ph(n)},update(n,e){return ph(n),e.interactHeld?n.stateTime<Xw()-wa?null:(n.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},Ta={bash(n,e){return n.state!=="move"&&n.state!=="sprint"||n.bashReadyAt>n.clock+wa?!1:(n.bashReadyAt=n.clock+ae.melee.bashCooldown,Number.isFinite(e)&&(n.facing=n.facing+Zi(e-n.facing)),n.go("bash",{}),!0)},rev(n,e){return e?n.state!=="move"&&n.state!=="sprint"?!1:(n.go("rev",{}),!0):n.state!=="rev"?!1:(n.go("move",{}),!0)},execute(n,e,t){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("execute",{}),n.scratch.time=Number.isFinite(t)&&t>0?t:0,Ym(n,e[0],e[1]),!0)},reviveTobble(n,e){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("reviveTobble",{}),Ym(n,e[0],e.length>2?e[2]:e[1]),!0)}};var Ti=1e-9,Jd=Math.PI/180,$m=.05,Yw=1.8,qw={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function Zm(n=ae.cover,e=ae.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var $w=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],Zw=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function Km(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,c)=>{let h=qw[l.kind];if(!h)return;let f=n.filter((d,u)=>u!==c&&d.kind!=="floor"&&d.max[1]>$m&&d.min[1]<Yw);for(let d of $w){let u=d.axis*2,m=2-u,x=(d.sign>0?l.max[u]:l.min[u])+d.sign*o,p=l.min[m],g=l.max[m],_=g-p,w=[];for(let y of f){if(!(x>y.min[u]-o+Ti&&x<y.max[u]+o-Ti))continue;let T=y.min[m]-o-p,E=y.max[m]+o-p;E>Ti&&T<_-Ti&&w.push([Math.max(T,0),Math.min(E,_)])}w.sort((y,T)=>y[0]-T[0]);let M=[];for(let y of w){let T=M[M.length-1];T&&y[0]<=T[1]+Ti?T[1]=Math.max(T[1],y[1]):M.push([y[0],y[1]])}let b=[],S=0,v=!0;for(let[y,T]of M)y>S+Ti&&b.push([S,y,v,!1]),S=T,v=!1;_>S+Ti&&b.push([S,_,v,!0]),b.forEach(([y,T,E,R],D)=>{let z=`${c}${d.name}#${D}`;if(r.includes(z))return;let L=p+y+(E?i:0),G=p+T-(R?i:0),H=G-L;if(H<s-Ti)return;let X=d.axis===0?[x,L]:[L,x],le=d.axis===0?[x,G]:[G,x];a.push(Zw({id:z,kind:h,boxIndex:c,a:X,b:le,length:H,tangent:[d.tangent[0],d.tangent[1]],normal:[d.normal[0],d.normal[1]],height:l.max[1],depth:l.max[u]-l.min[u],openA:E,openB:R}))})}}),a}function ui(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function Ps(n,e,t=ae.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function Ea(n,e){return e<0?n.openA:n.openB}var qm=.9,Jm=(n,e,t,i)=>Jn(n,[e[0],qm,e[1]],[t[0],qm,t[1]],.9*i)===1;function Aa(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*Jd),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*Jd,f=null;for(let d of n){let u=(t[0]-d.a[0])*d.normal[0]+(t[2]-d.a[1])*d.normal[1],m=-(i[0]*d.normal[0]+i[1]*d.normal[1]);if(u<-(r.gap+.02)||m<a||m<=Ti)continue;let x=Math.max(u,0)/m,p=(t[0]+i[0]*x-d.a[0])*d.tangent[0]+(t[2]+i[1]*x-d.a[1])*d.tangent[1];if(p<-r.grabSlack||p>d.length+r.grabSlack)continue;let g=Math.max(0,Math.min(d.length,p)),_=ui(d,g),w=_[0]-t[0],M=_[1]-t[2],b=Math.hypot(w,M);if(!(b>r.grabRange||f&&b>=f.dist)){if(b>.3){let S=(w*l+M*c)/b;if(Math.acos(Math.max(-1,Math.min(1,S)))>h)continue}Jm(e,[t[0],t[2]],_,o)&&(f={edge:d,t:g,point:_,dist:b})}}return f}function jm(n,e,t,i,s,r,o){if(Ps(t,i,r)!==s||!Ea(t,s))return null;let a=ui(t,i),l=Math.cos(r.swapAngle*Jd),c=null;for(let h of n){if(h===t||h.normal[0]*t.normal[0]+h.normal[1]*t.normal[1]<l)continue;let f=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),d=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),u=f<=d?0:h.length,m=ui(h,u),x=m[0]-a[0],p=m[1]-a[1],g=Math.hypot(x,p);(x*t.tangent[0]+p*t.tangent[1])*s<=0||Math.abs(x*t.normal[0]+p*t.normal[1])>r.swapMaxOffset||g>r.swapRange||c&&g>=c.dist||Jm(e,a,m,o)&&(c={edge:h,t:u,point:m,dist:g})}return c}function Kw(n,e,t,i){let s=e[1]+$m,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-Ti)return!1}return!0}function Qm(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=ui(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!Kw(t,l,s,r))return null;let c=t.filter((h,f)=>f!==n.boxIndex);return Jn(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var Jw=["coverSlide","cover","vault","coverSwap"],eg=Math.PI/180,Qt=[0,0],xh=[0,0],Is=[0,0,0],ig=.001,jw=2,jd=(n,e,t)=>Math.max(e,Math.min(t,n));function Qd(n,e,t){if(Sa(e)>=n.coverTuning.grabMinTilt){jn(e,Qt);let i=Math.hypot(Qt[0],Qt[1]);t[0]=Qt[0]/i,t[1]=Qt[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var sg={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=Aa(n.coverEdges,n.boxes,n.pos,Qd(n,e,xh),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},gh={};function rg(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||Sa(e)<t.autoMinTilt)return null;Object.assign(gh,t),gh.grabAngle=t.autoAngle,gh.grabRange=t.autoDist,jn(e,Qt);let i=Math.hypot(Qt[0],Qt[1]);xh[0]=Qt[0]/i,xh[1]=Qt[1]/i;let s=Aa(n.coverEdges,n.boxes,n.pos,xh,e.camYaw,gh,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function Qw(n,e,t){let i=Ps(n,e,t);return n.kind==="low"||i!==0&&Ea(n,i)}function Ki(n){return n.cover?n.cover.edge:n.scratch.edge||null}function ef(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=Ki(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function ar(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=Ps(t,e.t,n.coverTuning)),i===0)return 1;let s=hi(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return Ea(t,i)?a:-a}function tg(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(ig,jd(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function ng(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Is[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Is[1]=0,Is[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Is,e,!1),i!==null&&(n.facing=Wt(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var eT={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;tg(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return ng(n,t,n.coverTuning.slideTurnRate,hi(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,tg(n,e.swapSpeed,0,jw);let t=n.scratch;n.heading=hi(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+Zi(n.heading-n.facing)},update(n,e,t){return ng(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=hi(-i.normal[0],-i.normal[1]),n.facing=n.facing+Zi(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,ig)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=jn(e,Qt),l=Math.hypot(Qt[0],Qt[1]),c=l>0?Qt[0]/l:0,h=l>0?Qt[1]/l:0,f=r.normal[0],d=r.normal[1],u=a>=i.leaveTilt,m=(y,T)=>(n.vel[0]=y*o.jog,n.vel[1]=0,n.vel[2]=T*o.jog,"move");if(u&&c*f+h*d>=Math.cos(i.leaveAngle*eg))return m(Qt[0],Qt[1]);if(e.tap&&u){let y=Math.cos(i.pushAngle*eg);if(-(c*f+h*d)>=y){let E=Qm(r,s.t,n.boxes,i,o.radius,o.height);if(E)return n.coverTarget={landing:E,edge:r},"vault"}let T=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(T)>=y){let E=jm(n.coverEdges,n.boxes,r,s.t,T>0?1:-1,i,o.radius);if(E)return n.coverTarget=E,"coverSwap"}}let x=Ps(r,s.t,i),p=Qw(r,s.t,i),g=e.aim&&p?1:0,_=e.fire&&!e.aim&&p?1:0,w=i.popTime>0?t/i.popTime:1;s.pop=s.pop<g?Math.min(g,s.pop+w):Math.max(g,s.pop-w);let M=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<_?Math.min(_,s.blind+M):Math.max(_,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?x:0,s.blindEnd=s.blind>0&&r.kind!=="low"?x:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let b=!1;if(s.pop===0&&s.blind===0){let y=Qt[0]*r.tangent[0]+Qt[1]*r.tangent[1];if(Math.abs(y)>=i.alongDeadzone){let T=s.t+y*i.moveSpeed*t;if(s.t=jd(T,0,r.length),T!==s.t&&Ea(r,y>0?1:-1)&&(b=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(y),r.tangent[1]*Math.sign(y))}}else s.blindEnd!==0&&_===1&&(s.t=jd(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));b||(s.endPush=0);let S=ui(r,s.t),v=s.popEnd*i.popShift*s.pop;return Is[0]=S[0]+r.tangent[0]*v-n.pos[0],Is[1]=0,Is[2]=S[1]+r.tangent[1]*v-n.pos[2],n.moveBy(Is,t,!1),s.pop>0?n.facing=Wt(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=Wt(n.facing,hi(-f,-d),o.turnRate*t),n.heading=n.facing,null}}},og=Object.fromEntries(Jw.map(n=>[n,eT[n]]));var nf=n=>[Math.sin(n),0,Math.cos(n)],sf=n=>[-Math.cos(n),0,Math.sin(n)],tT=(n,e,t)=>e*(1-(1-n)**t),un=[0,0],vh=[0,0,0];function tf(n,e,t){return e.sprint&&!e.aim&&!e.grenade&&Sa(e)>=t.stickSprintMin}var nT={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(tf(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return jn(e,un),Qr(n,un[0]*s,un[1]*s,s,t,i),e.aim||e.fire||e.grenade?n.facing=Wt(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=Wt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):jn(e,un)>.01?n.heading=Math.atan2(un[0],un[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return tf(n,e,i)?(jn(e,un),n.heading=Wt(n.heading,Math.atan2(un[0],un[1]),i.sprintTurnRate*t),Qr(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],jn(e,un)>.01){let i=Math.hypot(un[0],un[1]);t.dir[0]=un[0]/i,t.dir[1]=un[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+Zi(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=tT(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,vh[0]=s.dir[0]*a,vh[1]=0,vh[2]=s.dir[1]*a,n.moveBy(vh,t,!1),r?s.queued?"roll":tf(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,jn(e,un),Qr(n,un[0]*i.crawlSpeed,un[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=Wt(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...og,...mh},iT=[sg,{name:"roll",when:()=>!0,state:"roll"}];function ag({boxes:n,spawn:e,tuning:t=ae.move,coverTuning:i=ae.cover,coverEdges:s=[],states:r=nT,contextActions:o=iT,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(f,d,u=!0){let m=h.pos,x=Nn(n,m,f,t.radius,t.height);if(h.hit=!!x.hit,!u)d>0&&(h.vel[0]=(x.pos[0]-m[0])/d,h.vel[2]=(x.pos[2]-m[2])/d);else if(x.hit)if(d>0)h.vel[0]=(x.pos[0]-m[0])/d,h.vel[2]=(x.pos[2]-m[2])/d;else{let p=x.normal,g=h.vel[0]*p[0]+h.vel[1]*p[1]+h.vel[2]*p[2];g<0&&(h.vel[0]-=p[0]*g,h.vel[1]-=p[1]*g,h.vel[2]-=p[2]*g)}m[0]=x.pos[0],m[1]=x.pos[1],m[2]=x.pos[2]},go(f,d){let u=h.state;r[u].exit?.(h),h.state=f,h.stateTime=0,h.entries++,h.scratch={},r[u].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[f].enter(h,d),h.onState?.(f,u,d)},down(){h.go("downed",{})},bash(f){return Ta.bash(h,f)},rev(f){return Ta.rev(h,f)},execute(f,d){return Ta.execute(h,f,d)},reviveTobble(f){return Ta.reviveTobble(h,f)},revive(){h.state==="downed"&&h.go("move",{})},place(f,d){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=f[0],h.pos[1]=h.prevPos[1]=f[1],h.pos[2]=h.prevPos[2]=f[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,d!==void 0?h.facing=h.prevFacing=h.heading=d:h.prevFacing=h.facing},update(f,d){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,d>0&&(h.clock+=d),h.grenadeAim=!!f.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),f.tap&&r[h.state].acceptsTap){for(let x of o)if(x.when(h,f)){h.go(x.state,f);break}}h.stateTime+=d;let u=r[h.state].update(h,f,d),m=h.state;if(!r[m].selfMoves){let x=h.vel[0],p=h.vel[2],g=Math.hypot(x,p);h.moveBy([h.vel[0]*d,0,h.vel[2]*d],d,!0),h.hit?(h.hitTime+=d,(g>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=x,h.runVel[1]=p)):(h.runVel[0]=x,h.runVel[1]=p,h.hitTime=0)}if(m==="move"||m==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let p=Math.max(.1,m==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=p&&(h.stepDist%=p,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:m==="sprint",speed:h.speed()}))}if(m==="move"||m==="sprint"){let x=rg(h,f);if(!x)h.autoTimer=0;else if((h.autoTimer+=d)>=h.coverTuning.autoTime){h.coverTarget=x,h.go("coverSlide",f);return}}u&&h.go(u,f)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function lg({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let u=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,u,e.sampleRate);let m=t.getChannelData(0);for(let x=0;x<u;x++)m[x]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(u){if(!(u>0||u<0)||!e.createStereoPanner)return e.destination;let m=e.createStereoPanner();return m.pan.value=Math.max(-1,Math.min(1,u)),m.connect(e.destination),m}let a=()=>{if(e.state==="suspended"){let u=e.resume();u&&u.catch&&u.catch(()=>{})}};function l(u,m,x){let p=e.createGain();return p.gain.setValueAtTime(x,u),p.gain.exponentialRampToValueAtTime(.001,u+m),p.connect(s),p}function c(u,m,x,p,g,_){let w=e.createOscillator();w.type=m,w.frequency.setValueAtTime(x,g),p!==x&&w.frequency.exponentialRampToValueAtTime&&w.frequency.exponentialRampToValueAtTime(p,g+_),w.connect(u),w.start(g),w.stop(g+_)}function h(u,m,x,p,g){let _=e.createBufferSource();_.buffer=t;let w=e.createBiquadFilter();w.type=m,w.frequency.setValueAtTime(x,p),_.connect(w),w.connect(u),_.start(p),_.stop(p+g)}let f=(u,m,x)=>{let p=l(u,.03,x);h(p,"bandpass",m,u,.03)},d={rifle:(u,m)=>{h(l(u,.05,m*.55),"bandpass",2200,u,.05),c(l(u,.16,m*.9),"sine",150,48,u,.16),c(l(u,.22,m*.8),"sine",62,34,u,.22),h(l(u,.26,m*.35),"lowpass",700,u,.26)},pistol:(u,m)=>{h(l(u,.06,m*.6),"bandpass",2e3,u,.06),c(l(u,.2,m*.9),"sine",130,42,u,.2),c(l(u,.26,m*.85),"sine",56,30,u,.26),h(l(u,.3,m*.4),"lowpass",600,u,.3)},dry:(u,m)=>c(l(u,.02,m),"square",1200,1200,u,.02),hit:(u,m)=>c(l(u,.04,m),"sine",1600,1600,u,.04),head:(u,m)=>{let x=l(u,.06,m);c(x,"sine",2400,2400,u,.06),c(x,"sine",3200,3200,u,.06)},kill:(u,m)=>{let x=l(u,.12,m);c(x,"sine",300,900,u,.12);let p=l(u,.2,m*.8);h(p,"lowpass",1400,u,.2)},magOut:(u,m)=>{f(u,3e3,m),f(u+.08,2200,m)},magIn:(u,m)=>{f(u,2e3,m),f(u+.08,3400,m)},perfect:(u,m)=>{let x=l(u,.35,m);c(x,"sine",1320,1320,u,.35),c(x,"sine",1980,1980,u,.35)},good:(u,m)=>c(l(u,.15,m),"sine",990,990,u,.15),jam:(u,m)=>c(l(u,.15,m),"square",90,90,u,.15),blaster:(u,m)=>{let x=l(u,.1,m);c(x,"square",900,300,u,.1),h(x,"bandpass",1500,u,.1)},charge:(u,m)=>{let x=e.createGain();x.gain.setValueAtTime(.001,u),x.gain.exponentialRampToValueAtTime(m,u+.3),x.gain.exponentialRampToValueAtTime(.001,u+.35),x.connect(s),c(x,"sine",300,900,u,.35)},hurt:(u,m)=>{let x=l(u,.15,m);h(x,"lowpass",600,u,.15),c(x,"sine",80,80,u,.15)},downed:(u,m)=>c(l(u,.6,m),"sine",400,80,u,.6),clear:(u,m)=>{[523,659,784].forEach((x,p)=>c(l(u+p*.12,.15,m),"sine",x,x,u+p*.12,.15))},pickup:(u,m)=>{c(l(u,.06,m),"sine",880,880,u,.06),c(l(u+.07,.08,m),"sine",1320,1320,u+.07,.08)},thud:(u,m)=>{c(l(u,.32,m),"sine",60,30,u,.32),h(l(u,.28,m*.6),"lowpass",260,u,.28),h(l(u,.07,m*.3),"bandpass",900,u,.07)},step:(u,m)=>{c(l(u,.1,m),"sine",95,50,u,.1),h(l(u,.07,m*.5),"lowpass",280,u,.07)}};return{play(u,m,x=0){let p=d[u];if(!(!p||!(m>0)||!r()))try{a(),s=o(x),p(e.currentTime,m)}catch{}},unlock(){if(r())try{a()}catch{}}}}function cg(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var _h=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),hg=Object.freeze(["regret",null,"pistol"]);function ug(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function rf(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var sT={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function dg({weapons:n=ae.weapons,combat:e=ae.combat,loadout:t=hg}={}){let i={},s=()=>{for(let x of t)x&&Object.assign(i[x]||(i[x]={}),{mag:Math.floor(n[x].mag),reserve:Math.floor(n[x].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(x,p)=>x[sT[p]||"spreadHip"],c=x=>x!=null&&o.reload===null&&o.switching<=0;function h(){let x=a(),p=n[x],g=i[x];return o.reload===null&&o.switching<=0&&g.mag<p.mag&&(p.infiniteReserve>0||g.reserve>0)}function f(){let x=a(),p=n[x];o.reload={id:x,t:0,press:null,end:rf(p,0,"normal",e)},i[x].boost=!1,r.push({type:"reloadStart",id:x})}function d(){let{id:x,press:p}=o.reload,g=n[x],_=i[x],w=Math.max(0,g.mag-_.mag);if(g.infiniteReserve>0)_.mag+=w;else{let M=Math.min(w,_.reserve);_.mag+=M,_.reserve-=M}_.boost=p==="perfect",o.reload=null,r.push({type:"reloadDone",id:x,result:p||"normal"})}function u(x){x===o.slot||!t[x]||(o.reload=null,o.slot=x,o.switching=n[t[x]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[x]}))}function m(x){let p=t.length;for(let g=1;g<p;g++){let _=(o.slot+x*g+p*p)%p;if(t[_])return u(_)}}return o.current=a,o.canFire=c,o.spreadOf=x=>l(n[a()],x)+i[a()].bloom,o.update=function(p,g,_){r.length=0,(!(_>0)||!Number.isFinite(_))&&(_=0);let w=p.weapon;w==="next"?m(1):w==="prev"?m(-1):(w===1||w===2||w===3)&&u(w-1),o.switching-=_;for(let E of t)E&&(i[E].bloom=Math.max(0,i[E].bloom-n[E].bloomRecover*_));let M=a(),b=n[M],S=i[M];if(p.reload){if(o.reload===null)h()&&f();else if(o.reload.press===null){let E=o.reload,R=Math.max(b.reloadTime,e.minReloadTime);E.press=ug(E.t/R,b),E.end=rf(b,E.t,E.press,e),r.push({type:"reloadPress",id:M,result:E.press})}}o.reload!==null&&(o.reload.t+=_,o.reload.t>=o.reload.end&&d()),p.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=_,p.fire||(o.dryLatched=!1),c(g)||(o.buffer=0);let v=b.auto>0,y=v?!!p.fire:o.buffer>0,T=1/Math.max(b.rate,e.minRate);for(o.cooldown-=_,y||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-T);y&&c(g)&&o.cooldown<=0;){if(S.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&f();break}if(S.mag--,r.push({type:"shot",id:M,mult:S.boost?b.perfectDamage:1,spread:o.spreadOf(g)}),S.bloom=Math.min(b.bloomMax,S.bloom+b.bloomPerShot),o.cooldown+=T,S.mag===0&&(S.boost=!1),!v){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(x,p)=>{let g=i[x];!g||n[x].infiniteReserve>0||!(p>0)||(g.reserve=Math.max(g.reserve,Math.min(Math.floor(n[x].reserveMax),g.reserve+Math.floor(p))))},o.refill=()=>{for(let x of t)x&&(i[x].reserve=Math.floor(n[x].reserveMax))},o.set=(x,{mag:p,reserve:g}={})=>{i[x]&&(p!==void 0&&(i[x].mag=p),g!==void 0&&(i[x].reserve=g))},o}function fg(n){if(n.grenadeAim||Object.hasOwn(mh,n.state))return null;if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var eo=[0,0];function of(n,e,t,i=ae.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,c=l.edge,h=n.tuning.radius+n.coverTuning.gap,f=c.normal;if(c.kind==="low")ui(c,l.t,eo),s[0]=eo[0]-f[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=eo[1]-f[1]*(h+i.blindReach);else{let d=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;ui(c,d<0?0:c.length,eo);let u=n.coverTuning.endInset+i.blindReach;s[0]=eo[0]+c.tangent[0]*d*u-f[0]*h,s[1]=i.muzzleUp,s[2]=eo[1]+c.tangent[1]*d*u-f[1]*h}return s}let r=i.muzzleRight*ar(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!xa(n.boxes,s,0)));l-=.25);return s}function rT(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function af(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let f=-l-Math.sqrt(h);return f>=0&&f<=s?f:1/0}function oT(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],f=n[2]-t[2],d=o*o+a*a+l*l,u=o*c+a*h+l*f,m=d>1e-12?Math.max(0,Math.min(1,u/d)):0,x=c-o*m,p=h-a*m,g=f-l*m;if(x*x+p*p+g*g<=s*s)return 0;let _=Math.min(af(n,e,t,s,r),af(n,e,i,s,r));if(d>1e-12){let w=o*e[0]+a*e[1]+l*e[2],M=e[0]*c+e[1]*h+e[2]*f,b=c*c+h*h+f*f,S=d-w*w;if(S>1e-12*d){let v=d*M-u*w,y=d*b-u*u-s*s*d,T=v*v-S*y;if(T>=0){let E=(-v-Math.sqrt(T))/S,R=u+E*w;E>=0&&E<=r&&R>0&&R<d&&E<_&&(_=E)}}}return _}function dn(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,c=-1,h=!1;for(let f=0;f<i.length;f++){if(f===r)continue;let d=rT(n,e,i[f],o);d<=o&&d!==1/0&&(o=d,a="world",c=f,l=null,h=!0)}for(let f of s){if(!f.alive)continue;let{head:d,body:u}=f.shapes,m=af(n,e,d.c,d.r,o);m<=o&&m!==1/0&&(o=m,a="head",l=f,c=-1,h=!0);let x=oT(n,e,u.a,u.b,u.r,o);x<=o&&x!==1/0&&(o=x,a="body",l=f,c=-1,h=!0)}return h?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function to(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,c=l===0?1:0,h=n[1]*0-n[2]*c,f=n[2]*l-n[0]*0,d=n[0]*c-n[1]*l,u=Math.hypot(h,f,d);h/=u,f/=u,d/=u;let m=n[1]*d-n[2]*f,x=n[2]*h-n[0]*d,p=n[0]*f-n[1]*h,g=Math.cos(a)*o,_=Math.sin(a)*o;return i[0]=n[0]*r+h*g+m*_,i[1]=n[1]*r+f*g+x*_,i[2]=n[2]*r+d*g+p*_,i}function pg({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let p=to(e,i,l),g=dn(n,p,s,r,o,{ignoreBox:a}),_=[g.point[0]-t[0],g.point[1]-t[1],g.point[2]-t[2]],w=Math.hypot(_[0],_[1],_[2]),M=w>1e-9?[_[0]/w,_[1]/w,_[2]/w]:[p[0],p[1],p[2]];return{from:t,dir:M,hit:g}}let h=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),f=dn(n,e,s+h,r,o,{ignoreBox:a}),d=f.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:f.point,u=[d[0]-t[0],d[1]-t[1],d[2]-t[2]],m=Math.hypot(u[0],u[1],u[2]);m>1e-9?(u[0]/=m,u[1]/=m,u[2]/=m):(u[0]=e[0],u[1]=e[1],u[2]=e[2]);let x=to(u,i,l);return{from:t,dir:x,hit:dn(t,x,s,r,o)}}var gt=Object.freeze({head:Object.freeze({cy:jt.neckY+jt.head.centerY,r:jt.head.rx}),body:Object.freeze({ay:jt.ankleHeight,by:jt.neckY,r:Math.max(...jt.torso.shirt.map(n=>n[0]))})});function mg(n,e=ae.combat.hitPad){let[t,i,s]=n.pos,r=n.shapes;r.head.c[0]=t,r.head.c[1]=i+gt.head.cy,r.head.c[2]=s,r.head.r=gt.head.r+e,r.body.r=gt.body.r+e,r.body.a[0]=t,r.body.a[1]=i+gt.body.ay,r.body.a[2]=s,r.body.b[0]=t,r.body.b[1]=i+gt.body.by,r.body.b[2]=s}function gg({id:n,pos:e,yaw:t=0,rail:i=null},s=ae.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}}};return mg(r),r}function aT(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function xg(n,e,t=ae.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=aT(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}mg(n)}function vg(n,e,t=ae.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function lf(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function _g(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function yg(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var lT=new k(0,0,1);function Mg(n,e=()=>ae.feedback){let t=new xn,i=(y=1)=>(Math.random()*2-1)*y;function s(y,T,E){let R=new qs(y,Vt({color:T,rim:0}),E);R.frustumCulled=!1,R.count=E,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let D=0;D<E;D++)R.setMatrixAt(D,t.matrix);return n.add(R),{mesh:R,pool:yg(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new kr(.5,0),K.playerOrange,8),o=s(new It(1,1,1),K.playerOrange,24),a=s(new kr(.5,0),K.gel,8),l=s(new It(1,1,1),K.gel,24),c=s(new It(.05,.05,.05),K.cream,48),h=s(new Xo(.5,0),K.gel,96),f=s(new It(.16,.2,.012),K.cream,48),d=new k;function u(y,T){t.updateMatrix(),y.mesh.setMatrixAt(T,t.matrix),y.mesh.instanceMatrix.needsUpdate=!0}let m=(y,T)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),u(y,T)},x=(y,T,E,R,D)=>{y.pos[T*3]=E,y.pos[T*3+1]=R,y.pos[T*3+2]=D},p=(y,T,E,R,D)=>{y.vel[T*3]=E,y.vel[T*3+1]=R,y.vel[T*3+2]=D};function g(y,T,E,R,D){let z=E[0]+i(R),L=E[1]+i(R),G=E[2]+i(R),H=Math.hypot(z,L,G)||1;p(y,T,z/H*D*(.5+Math.random()*.5),L/H*D*(.5+Math.random()*.5),G/H*D*(.5+Math.random()*.5))}let _=[];function w(y,T,E,R){_.push({k:y,life:T,shown:new Uint8Array(y.pool.ages.length),step(D){let z=e().gravity,L=y;for(let G=0;G<L.pool.ages.length;G++)if(L.pool.alive(G)){L.vel[G*3+1]-=z*D;for(let H=0;H<3;H++)L.pos[G*3+H]+=L.vel[G*3+H]*D}},draw(D){let z=1-y.pool.ages[D]/T();t.position.set(y.pos[D*3],y.pos[D*3+1],y.pos[D*3+2]),t.scale.setScalar(E(D)*Math.max(0,z)),R?t.rotation.set(y.aux[D*4]+y.pool.ages[D]*7,y.aux[D*4+1]+y.pool.ages[D]*5,y.aux[D*4+2]):t.quaternion.identity(),u(y,D)}})}w(c,()=>e().sparkTime,()=>1,!1),w(h,()=>e().gelTime,y=>.05+h.aux[y*4+3]*.07,!1),w(f,()=>e().receiptTime,()=>1,!0);function M(y,T){_.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let R=1-y.pool.ages[E]/e().flashTime;t.position.set(y.pos[E*3],y.pos[E*3+1],y.pos[E*3+2]),t.scale.setScalar(e()[T]*(.5+.5*Math.max(0,R))),t.rotation.set(y.aux[E*4],y.aux[E*4+1],y.aux[E*4+2]),u(y,E)}})}function b(y,T,E){_.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e()[T],step(){},draw(R){let D=Math.max(0,1-y.pool.ages[R]/e()[T]),z=e()[E]*D,L=y.aux[R*4];t.position.set(y.pos[R*3],y.pos[R*3+1],y.pos[R*3+2]),t.quaternion.setFromUnitVectors(lT,d.set(y.vel[R*3],y.vel[R*3+1],y.vel[R*3+2])),t.scale.set(z,z,L),u(y,R)}})}M(r,"flashSize"),M(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(l,"enemyTracerTime","enemyTracerWidth");let S=(y,T,E)=>{let R=y.pool.spawn();x(y,R,T[0]+E[0]*.1,T[1]+E[1]*.1,T[2]+E[2]*.1),y.aux[R*4]=i(3),y.aux[R*4+1]=i(3),y.aux[R*4+2]=i(3)},v=(y,T,E)=>{let R=E[0]-T[0],D=E[1]-T[1],z=E[2]-T[2],L=Math.hypot(R,D,z);if(!(L>1e-6))return;let G=y.pool.spawn();x(y,G,T[0]+R/2,T[1]+D/2,T[2]+z/2),p(y,G,R/L,D/L,z/L),y.aux[G*4]=L};return{flash(y,T){S(r,y,T)},tracer(y,T){v(o,y,T)},enemyFlash(y,T){S(a,y,T)},enemyTracer(y,T){v(l,y,T)},spark(y,T){for(let E=0;E<e().sparkCount;E++){let R=c.pool.spawn();x(c,R,y[0],y[1],y[2]),g(c,R,T,.9,3)}},gel(y,T,E=e().gelCount){for(let R=0;R<E;R++){let D=h.pool.spawn();x(h,D,y[0],y[1],y[2]),g(h,D,T,1.2,e().gelSpeed),h.aux[D*4+3]=Math.random()}},receipts(y,T=e().receiptCount){for(let E=0;E<T;E++){let R=f.pool.spawn();x(f,R,y[0],y[1],y[2]),g(f,R,[0,1,0],1.5,e().gelSpeed),f.aux[R*4]=i(3),f.aux[R*4+1]=i(3),f.aux[R*4+2]=i(3)}},clear(){for(let y of _){y.k.pool.clear();for(let T=0;T<y.shown.length;T++)y.shown[T]&&(m(y.k,T),y.shown[T]=0)}},update(y){if(y>0)for(let T of _){T.step(y);let{pool:E}=T.k;E.update(y,T.life);for(let R=0;R<E.ages.length;R++)E.alive(R)?(T.draw(R),T.shown[R]=1):T.shown[R]&&(m(T.k,R),T.shown[R]=0)}}}}function cT(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var hT=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),uT=n=>n<0?0:n>1?1:n;function bg({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:f="",bark:d=null,banner:u=null,weapons:m=ae.weapons,combat:x=ae.combat,feedback:p=ae.feedback}){let g=n.current(),_=m[g],w=n.ammo[g],M=n.reload,b=s==="pad"?"RB":"R",S={show:!1,marker:0,good:[_.goodStart,_.goodEnd],perfect:[_.perfectStart,_.perfectEnd],flash:c,prompt:""};if(M){let R=Math.max(_.reloadTime,x.minReloadTime);S={...S,show:!0,marker:uT(M.t/R),prompt:M.press===null?`${b} again on the bright zone`:""}}else w.mag<=0&&(S.prompt=`${b} to reload`);let v=w.mag<=Math.max(0,p.lowAmmoFrac)*_.mag,y=_.infiniteReserve<=0&&w.reserve<=0,T={show:!1,text:"",kind:""};!M&&v&&!u&&(T.show=!0,y&&w.mag<=0?(T.text="NO AMMO",T.kind="none"):y?(T.text="LOW AMMO",T.kind="low"):w.mag<=0?(T.text=`EMPTY \u2014 RELOAD  ${b}`,T.kind="empty"):(T.text=`RELOAD  ${b}`,T.kind="low"));let E=e==="aim";return{weapon:_h[g].name,mag:w.mag,reserve:_.infiniteReserve>0?"\u221E":w.reserve,reticle:{show:E||!!t||i,gap:p.reticleMinGap+cT(r,o,a),opacity:i&&!E?p.coverReticleOpacity:1},reload:S,alert:T,hit:{show:!!l,kind:l||null},faceShow:!!h&&!u&&!h.downed.show,face:h,objective:f,bark:d,banner:u}}function Sg(n=document.body){let e=(O,W,B,ge)=>{let de=document.createElement(O);return W&&(de.className=W),ge!==void 0&&(de.textContent=ge),B&&B.appendChild(de),de},t=e("div","",n);t.id="cr-hud";let i={};for(let O of["top","right","bottom","left"])i[O]=e("div",`cr-edge cr-edge-${O}`,t);let s="http://www.w3.org/2000/svg",r=(O,W,B)=>{let ge=document.createElementNS(s,O);for(let de of Object.keys(W))ge.setAttribute(de,W[de]);return B&&B.appendChild(ge),ge},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),f=e("div","cr-banner",t),d=e("div","cr-banner-title",f),u=e("div","cr-banner-hint",f),m=e("div","cr-objective",t),x=e("div","cr-bark",t),p=e("span","cr-bark-who",x),g=e("span","cr-bark-text",x),_=e("div","cr-weapon",t),w=e("div","cr-weapon-name",_),M=e("div","cr-ammo",_),b=e("div","cr-prompt",_),S=e("div","cr-reload",_),v=e("div","cr-zone cr-zone-good",S),y=e("div","cr-zone cr-zone-perfect",S),T=e("div","cr-marker",S),E=e("div","cr-result",_),R=e("div","cr-alert",t),D=e("div","cr-reticle",t),z=["up","down","left","right"].map(O=>e("div",`cr-arm cr-arm-${O}`,D)),L=e("div","cr-hit",t);e("i","cr-hit-a",L),e("i","cr-hit-b",L),e("i","cr-hit-ring",L);let G={},H=(O,W,B)=>{G[O]!==W&&(G[O]=W,B(W))},X=O=>`${(O*100).toFixed(1)}%`,le=(O,[W,B])=>{O.style.left=X(W),O.style.width=X(Math.max(0,B-W))};return{render(O){H("weapon",O.weapon,B=>{w.textContent=B}),H("ammo",`${O.mag}|${O.reserve}`,()=>{M.textContent=`${O.mag} / ${O.reserve}`}),H("prompt",O.reload.prompt,B=>{b.textContent=B}),H("reload.show",O.reload.show,B=>{S.hidden=!B}),H("good",`${O.reload.good}`,()=>le(v,O.reload.good)),H("perfect",`${O.reload.perfect}`,()=>le(y,O.reload.perfect)),H("marker",Math.round(O.reload.marker*500),()=>{T.style.left=X(O.reload.marker)}),H("flash",O.reload.flash,B=>{E.textContent=B&&hT[B]||"",E.dataset.kind=B||""}),H("alert",O.alert.show?`${O.alert.kind}|${O.alert.text}`:"",()=>{R.hidden=!O.alert.show,R.textContent=O.alert.text,R.dataset.kind=O.alert.kind}),H("ret.show",O.reticle.show,B=>{D.hidden=!B}),H("ret.op",Math.round(O.reticle.opacity*100),()=>{D.style.opacity=O.reticle.opacity.toFixed(2)}),H("ret.gap",Math.round(O.reticle.gap),B=>{z.forEach(ge=>ge.style.setProperty("--gap",`${B}px`))});let W=O.face;if(H("face.show",!!O.faceShow,B=>{o.hidden=!B}),W){H("face.op",Math.round(W.face.opacity*100),()=>{o.style.opacity=W.face.opacity.toFixed(2)}),H("face.frown",Math.round(W.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*W.face.frown).toFixed(1)} 70 72`)}),H("face.fill",Math.round(W.face.fill*50),()=>{let B=92*W.face.fill;c.setAttribute("y",(96-B).toFixed(1)),c.setAttribute("height",B.toFixed(1))});for(let B of Object.keys(i))H(`edge.${B}`,Math.round(W.edges[B]*50),()=>{i[B].style.opacity=W.edges[B].toFixed(2)})}H("banner",O.banner?`${O.banner.title}|${O.banner.hint}`:"",B=>{f.hidden=!O.banner,O.banner&&(d.textContent=O.banner.title,u.textContent=O.banner.hint)}),H("objective",O.objective||"",B=>{m.textContent=B,m.hidden=!B}),H("bark",O.bark?`${O.bark.speaker}|${O.bark.text}`:"",()=>{x.hidden=!O.bark,O.bark&&(p.textContent=O.bark.speaker,g.textContent=O.bark.text)}),H("hit",O.hit.show?O.hit.kind:"",B=>{L.hidden=!B,L.dataset.kind=B})}}}function wg(n){let e=Ms(jt),t=bs(e),i=new bt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",c=0;s&&t.play("run",{fade:0});function h(d){i.scale.setScalar(Math.max(d,1e-4))}function f(d){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let u=n.pos[0]-o,m=n.pos[2]-a;s&&u*u+m*m>1e-8&&(r=Math.atan2(u,m)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let x=ae.feedback;if(l==="burst"){c+=d;let p=x.dummyBurstTime>0?Math.min(c/x.dummyBurstTime,1):1;h(1+.2*p),p>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=d;let p=x.dummyRespawnPop>0?Math.min(c/x.dummyRespawnPop,1):1;h(p),p>=1&&(l="live")}l!=="gone"&&(t.update(s?d*Math.min(Math.max(ae.dummy.railSpeed/_s,.3),3):d),e.update(d))}return{group:i,update:f,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var Tg="#f3efe6";function Eg(n){for(let e of Object.values(n))e&&typeof e=="object"&&Eg(e);return Object.freeze(n)}var Ag=Eg({...structuredClone(jt),name:"doc-placeholder",colors:{...jt.colors,hair:K.teal,shirt:Tg,collar:Tg},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...jt.face,brow:"uni",fixedSmile:0}});function Mh(n){return bn(n.map(([e,t,i,s,r,o])=>new It(e,t,i).translate(s,r,o)),!1)}function Ra(n,e,t){let i=new mt(ci(e),Vt({color:t}));return Rn(i),n.add(i),i}function dT(){let n=new bt;return n.name="rifle",Ra(n,Mh([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),K.playerOrange),Ra(n,Mh([[.05,.12,.06,0,-.07,0]]),K.ink),Ra(n,new vn(.055,.055,.03,12).translate(0,-.035,.28),K.cream),n}function fT(){let n=new bt;return n.name="pistol",Ra(n,Mh([[.045,.06,.25,0,.04,.075]]),K.playerOrange),Ra(n,Mh([[.04,.1,.05,0,-.04,0]]),K.ink),n}var pT={regret:[0,.06,.45],pistol:[0,.04,.2]},mT=new k(0,0,1),DP=new k,yh=new k;function Rg(){let n=new bt;n.name="gun";let e={regret:dT(),pistol:fT()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new k,s=new k(0,0,1),r=1/0;function o(c){if(!(!e[c]||c===t)){t=c;for(let h of Object.keys(e))e[h].visible=h===c}}function a(c,h){i.set(c[0],c[1],c[2]),s.set(h[0],h[1],h[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(mT,s),l()}function l(){let c=ae.feedback,h=Math.max(c.gunSquashTime,1e-6),f=r>=0&&r<h?Math.sin(Math.PI*r/h):0,d=c.gunSquash*f;n.scale.set(1+d/2,1+d/2,1-d),n.position.copy(i).addScaledVector(s,-c.gunKick*f)}return{group:n,setWeapon:o,place:a,shot(){r=0,l()},update(c){r+=c>0?c:0,l()},tip(c=[0,0,0]){let h=pT[t];return n.updateMatrix(),yh.set(h[0],h[1],h[2]).applyMatrix4(n.matrix),c[0]=yh.x,c[1]=yh.y,c[2]=yh.z,c}}}var Sh=Math.PI*2,Ai=(n,e,t)=>n<e?e:n>t?t:n,gT=n=>n-Sh*Math.round(n/Sh),Ig=.001,cf=.5;function xT(n,e=n.tuning||ae.move){let t=n.state,i=n.speed();if(t==="downed")return{name:"crawl",rate:Ai(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:At.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:Ai(i/_s,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:Ai(i/_s,e.runRateMin,e.runRateMax)};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:Ki(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:Ai(i/_s,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||ae.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":ar(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Ai(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:At.vault.duration/Math.max((n.coverTuning||ae.cover).vaultTime,Ig)}:{name:"idle",rate:1}}function vT(n){let e=n.state==="cover"||n.state==="coverSlide"?Ki(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?Ai(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?Ai(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var _T=(n,e)=>4*e*n*(1-n),yT=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function MT(n){if(n<=.08)return 0;if(n>=.9)return Sh;let e=(n-.08)/.82;return Sh*e*e*(3-2*e)}var Cg=.95,Pg=.6,Ji=new k,Ei=[0,0,1],bh=[0,0,0];function Lg(n,e=Ag){let t=Ms(e),i=bs(t),s=new bt;s.name="player";let r=new bt;r.position.y=cf,t.root.position.y=-cf,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Rg();s.add(l.group);let c=1/0,h=t.root.getObjectByName("head"),f=new k,d=!0;function u(T,E,R){h.getWorldPosition(f),f.y+=t.spec.head.centerY;let D=Math.hypot(T[0]-f.x,T[1]-f.y,T[2]-f.z);return d=Im(D,d,E,R),h.visible=d,d}let m=0,x=0,p=0,g="",_=-1,w=n.slams||0,M=1/0;function b(T,E,R){let D=n.pos,z=n.prevPos,L=n.coverTuning||ae.cover,G=vT(n);m=L.popTime>0?Math.max(G,m+Ai(G-m,-E/L.popTime,E/L.popTime)):G;let H=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?Ai(n.cover.blind||0,0,1):0;if(G>0||H>0){let J=Ki(n);x=J.normal[0],p=J.normal[1]}let X=m*L.lowDrawBack+H*L.blindDrawBack;s.position.set(z[0]+(D[0]-z[0])*T+x*X,z[1]+(D[1]-z[1])*T,z[2]+(D[2]-z[2])*T+p*X),s.rotation.y=n.prevFacing+gT(n.facing-n.prevFacing)*T;let le=xT(n);(le.name!==g||n.entries!==_)&&(i.play(le.name,le.name==="roll"?{fade:.05}:void 0),g=le.name,_=n.entries),i.update(E*le.rate,le.name==="crawl"?E:void 0),t.update(E);let O=ae.feedback,W=Math.max(O.gunSquashTime,1e-6);c=R&&R.shot?E:c+E;let B=c<W?O.bodyKick*Math.sin(Math.PI*c/W):0;r.rotation.x=(n.state==="roll"?MT(n.stateTime/n.tuning.rollTime):0)-B,(n.slams||0)!==w?(w=n.slams||0,M=0):M+=E;let ge=n.state==="vault"?_T(Ai(n.stateTime/Math.max(L.vaultTime,Ig),0,1),L.vaultHop):0,de=yT(M,L.slamSquash,L.slamSquashTime);r.scale.set(1+de/2,1-de,1+de/2),r.position.y=cf*(1-de)+ge,S(le.name,E,R)}function S(T,E,R){if(s.updateMatrixWorld(!0),(T==="coverBlindTallL"?a.L:a.R).getWorldPosition(Ji),s.worldToLocal(Ji),R&&R.stance&&T==="coverBlindLow")Ei[0]=0,Ei[1]=Math.sin(Cg),Ei[2]=Math.cos(Cg);else if(R&&R.stance&&R.dir){let z=Math.cos(s.rotation.y),L=Math.sin(s.rotation.y);Ei[0]=R.dir[0]*z-R.dir[2]*L,Ei[1]=R.dir[1],Ei[2]=R.dir[0]*L+R.dir[2]*z}else Ei[0]=0,Ei[1]=-Math.sin(Pg),Ei[2]=Math.cos(Pg);R&&R.weapon&&l.setWeapon(R.weapon),l.place([Ji.x,Ji.y,Ji.z],Ei),R&&R.shot&&l.shot(),l.update(E),l.group.visible=n.state!=="roll"&&n.state!=="downed"}function v(T=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(bh),Ji.set(bh[0],bh[1],bh[2]).applyMatrix4(s.matrixWorld),T[0]=Ji.x,T[1]=Ji.y,T[2]=Ji.z,T}function y(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:b,dispose:y,rig:t,anim:i,fadeHeadFor:u,gun:l,gunTip:v}}var Th=new Set(["telegraph","burst"]),wh=(n,e,t)=>n<e?e:n>t?t:n,bT=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),ST=n=>n.point&&n.point.kind==="tall"?"tall":"low";function wT(n){let e=ST(n)==="tall";switch(n.state){case"run":return"run";case"flinch":return"flinch";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=hi(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function TT(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return hi(-n.point.normal[0],-n.point.normal[1]);if(Th.has(n.state))return hi(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return hi(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function ET(n){return n.state==="dead"||!n.alive?"dead":Th.has(n.state)?"angry":n.state==="flinch"?"scared":"smug"}var Og=.03,hf=[0,.06,.32];function AT(){let n=new bt;n.name="blaster";let t=bn([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new It(r,o,a).translate(l,c,h)),!1),i=new mt(ci(t),Vt({color:K.glorpPurple}));Rn(i),n.add(i);let s=new mt(new _n(Og,10,8),new zi({color:K.gel}));return s.name="emitter",s.position.set(hf[0],hf[1],hf[2]),n.add(s),{group:n,emitter:s}}var RT=new k(0,0,1),Qn=new k,Ls=new k,Dg=.6,Ng=.95;function Ug(n){let e=Ms(jt),t=bs(e),i=new bt;i.name=`associate-${n.id}`,i.add(e.root),i.add(e.shadow);let s=e.root.getObjectByName("body").children[2],r=AT();i.add(r.group);let o="",a="",l=0,c=n.yaw,h="live",f=0,d=!1,u=0,m=0,x=0;function p(){h="live",f=0,l=0,c=n.yaw,d=!1,u=0,i.visible=!0,i.scale.setScalar(1),o="",a="",r.emitter.scale.setScalar(1)}function g(w,M){let b=ae.feedback,S=ae.cover,v=ae.associate;if(h==="burst"){f+=M;let O=b.dummyBurstTime>0?Math.min(f/b.dummyBurstTime,1):1;i.scale.setScalar(1+.2*O),O>=1&&(h="gone",i.visible=!1)}if(h==="gone")return;let y=h==="burst",T=n.pos,E=n.prevPos,R=!y&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",D=R?wh(1-Math.max(n.pop,n.blind),0,1):0;l=S.popTime>0?Math.max(D,l+wh(D-l,-M/S.popTime,M/S.popTime)):D;let z=R?wh(n.blind,0,1):0;R&&(m=n.point.normal[0],x=n.point.normal[1]);let L=l*S.lowDrawBack+z*S.blindDrawBack;i.position.set(E[0]+(T[0]-E[0])*w+m*L,E[1]+(T[1]-E[1])*w,E[2]+(T[2]-E[2])*w+x*L);let G=n.state==="run"||Th.has(n.state)?n.prevYaw+bT(n.yaw-n.prevYaw)*w:TT(n);if(c=Wt(c,G,v.turnRate*1.5*M),i.rotation.y=c,y)return;let H=wT(n);H!==o&&(t.play(H,H==="flinch"?void 0:{fade:.1}),o=H);let X=H==="run"?wh(v.runSpeed/_s,.5,3):1;t.update(M*X),e.update(M);let le=ET(n);le!==a&&(e.face.setExpression(le),a=le),_(H,M)}function _(w,M){i.updateMatrixWorld(!0),s.getWorldPosition(Qn);let b=Qn.x,S=Qn.y,v=Qn.z;i.worldToLocal(Qn);let y=Qn.x,T=Qn.y,E=Qn.z;if(Th.has(n.state)){let R=Math.cos(i.rotation.y),D=Math.sin(i.rotation.y),z=n.aim[0]-b,L=n.aim[2]-v;Ls.set(z*R-L*D,n.aim[1]-S,z*D+L*R)}else w==="coverBlindLow"?Ls.set(0,Math.sin(Ng),Math.cos(Ng)):n.state==="suppress"?Ls.set(0,.05,1):Ls.set(0,-Math.sin(Dg),Math.cos(Dg));if(Ls.lengthSq()<1e-12&&Ls.set(0,0,1),Ls.normalize(),r.group.position.set(y,T,E),r.group.quaternion.setFromUnitVectors(RT,Ls),d){u+=M;let R=.5+.5*Math.sin(u*2*Math.PI*8),D=ae.feedback.glintSize/Og;r.emitter.scale.setScalar(1+(D-1)*R)}else r.emitter.scale.setScalar(1)}return{group:i,update:g,reset:p,death(){h==="live"&&(h="burst",f=0)},glint(w){w&&!d&&(u=0),d=!!w},tip(w=[0,0,0]){return i.updateMatrixWorld(!0),r.emitter.getWorldPosition(Qn),w[0]=Qn.x,w[1]=Qn.y,w[2]=Qn.z,w},rig:e,anim:t,blaster:r}}function Fg(n=ae.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var CT=new Set(["cover","coverSlide","coverSwap"]),PT=[],IT=df(),LT=df(),Eh=[null];function df(){return{alive:!0,shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}}}}function kg(n){return CT.has(n.state)?Ki(n):null}function uf(n,e,t,i,s){let r=n.shapes;return r.head.r=gt.head.r,r.body.r=gt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function Ah(n,e=df(),t=ae.combat){let i=kg(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?uf(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):uf(e,n.pos,gt.head.cy,gt.body.ay,gt.body.by)}function Bg(n,e,t,i,s,r=ae.combat){let o=kg(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return dn(n,e,t,i,PT);if(!a)return Eh[0]=Ah(s,IT,r),dn(n,e,t,i,Eh);let l=gt.body.by;return Eh[0]=uf(LT,s.pos,gt.head.cy,l-r.shoulderDrop,l),dn(n,e,t,i,Eh)}var zg=1.49,Hg=.2;function Gg(n,{spacing:e,cornerZone:t}){e=Math.max(Hg,Number.isFinite(e)?e:Hg);let i={cornerZone:t},s=[],r=(o,a,l)=>{let c=ui(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,Ps(o,c,i))}r(o,o.length,Ps(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function lr(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function On(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:dn(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function Rh(n,e,t,i=ae){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:zg,n.pos[1]],r=lr(n,i.associate.popShift),o=[r[0],zg,r[1]];return{protected:!On(t,s,e),canShoot:On(t,o,e)}}var Vg=.9;function Ca(n,e,t,i){return Jn(n,[e[0],Vg,e[1]],[t[0],Vg,t[1]],i)===1}var Pa=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function Wg(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)Pa(s[o],s[a])<=i&&Ca(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function DT(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let p of t)h[p]=!0;let f=[];for(let p of e)a[p]=Pa(i,r[p]),f.push(p);let d=p=>a[p]+Pa(r[p],s),u=-1,m=1/0;for(;f.length;){let p=0;for(let _=1;_<f.length;_++){let w=f[_],M=f[p],b=d(w),S=d(M);(b<S-1e-12||Math.abs(b-S)<=1e-12&&w<M)&&(p=_)}let g=f.splice(p,1)[0];if(!c[g]){if(d(g)>=m)break;if(c[g]=!0,h[g]){let _=a[g]+Pa(r[g],s);(_<m-1e-12||Math.abs(_-m)<=1e-12&&g<u)&&(u=g,m=_)}for(let _ of o[g]){if(c[_])continue;let w=a[g]+Pa(r[g],r[_]);w<a[_]-1e-12&&(a[_]=w,l[_]=g,f.push(_))}}}if(u<0)return null;let x=[];for(let p=u;p>=0;p=l[p])x.push(p);return x.reverse()}function Ia(n,e,t,i,s){if(Ca(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((d,u)=>{Ca(e,t,d,s)&&o.push(u),Ca(e,d,i,s)&&a.push(u)}),!o.length||!a.length)return null;let l=DT(n,o,a,t,i);if(!l)return null;let c=[...l.map(d=>r[d]),i],h=[],f=t;for(let d=0;d<c.length;d++){let u=c[d+1];u&&Ca(e,f,u,s)||(h.push([c[d][0],c[d][1]]),f=c[d])}return h}var vI=Math.PI/180,Xg=.3,ff=1e-6,NT=64,OT=4;var UT=(n,e,t)=>Math.max(e,Math.min(t,n));var cr=[0,0,0];function FT(n,e){let t=null,i=1/0;for(let a of n){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),f=Math.hypot(l,c,h);f<i&&(i=f,t=a)}if(cr[0]=cr[1]=cr[2]=0,!t)return cr[1]=1,cr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=t.min[a]-e[a],c=e[a]-t.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return cr[s]=o,cr}var pf={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ri=[0,0,0];function kT(n,e,t,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=n.pos,l=n.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=UT(Math.ceil(c/r),1,NT),f=e/h;for(let d=0;d<h;d++){let u=f;for(let m=0;m<=OT&&u>0;m++){Ri[0]=a[0]+l[0]*u,Ri[1]=a[1]+l[1]*u-.5*o*u*u,Ri[2]=a[2]+l[2]*u;let x=Jn(t,a,Ri,r);if(x>=1){a[0]=Ri[0],a[1]=Ri[1],a[2]=Ri[2],l[1]-=o*u;break}a[0]+=(Ri[0]-a[0])*x,a[1]+=(Ri[1]-a[1])*x,a[2]+=(Ri[2]-a[2])*x,l[1]-=o*u*x;let p=FT(t,a),g=l[0]*p[0]+l[1]*p[1]+l[2]*p[2];if(g<0){let _=l[0]-p[0]*g,w=l[1]-p[1]*g,M=l[2]-p[2]*g;l[0]=_*i.friction-p[0]*g*i.restitution,l[1]=w*i.friction-p[1]*g*i.restitution,l[2]=M*i.friction-p[2]*g*i.restitution,-g>=Xg&&(s.clank=!0),p[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-p[0]*r,s.upPos[1]=a[1]-p[1]*r,s.upPos[2]=a[2]-p[2]*r)}if(a[0]+=p[0]*ff,a[1]+=p[1]*ff,a[2]+=p[2]*ff,p[1]>.7&&Math.hypot(l[0],l[1],l[2])<Xg){l[0]=l[1]=l[2]=0,n.resting=!0,s.rested=!0;return}u*=1-x}}}function BT(n,e,t,i=ae.grenade){return kT(n,e,t,i,pf),pf.clank?"clank":pf.rested?"rest":null}function Yg(n,e=ae.grenade){return n>=0?n<=e.killRadius?e.killDamage:n>=e.radius?0:e.damage*(1-n/e.radius):0}function qg(n=ae.grenade){let e=[];return{live:e,throw(t,i){let s={pos:[t[0],t[1],t[2]],vel:[i[0],i[1],i[2]],prevPos:[t[0],t[1],t[2]],resting:!1,fuse:n.fuse};return e.push(s),s},step(t,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=t,BT(o,t,i,n)==="clank"&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.fuse<=1e-9&&(s.push({type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}var zT=.25,Ph=new Set(["executed","unused","dead"]),HT=new Set(["cover","suppress","reload"]),Ds={r:.25,y:.25,back:.2,front:.6},GT=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),VT=new Set(["telegraph","burst","suppress"]),vf=n=>Math.max(0,Math.min(1,n)),Ci=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),$g=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function _f(n,e=ae.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.diveDir[0]=n.diveDir[1]=0,n.divePoint=null,n.claimed=!1,n.diedAt=-1/0,n.wasDowned=!1,no(n),n}function yf(n){return n.alive=!1,n.state="unused",n.stateT=0,n.health=0,n.pos[1]=n.prevPos[1]=-50,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.helping=null,n.claimed=!1,n.wasDowned=!1,no(n),n}function Mf(n,e,t){let i=(t.tuning||ae).associate;for(let r=0;r<3;r++)n.pos[r]=e[r],n.prevPos[r]=e[r];let s=t.player;return n.yaw=n.prevYaw=s?Math.atan2(s.pos[0]-e[0],s.pos[2]-e[2]):Math.PI,n.state="spawn",n.stateT=0,n.health=i.health,n.alive=!0,n.claimed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckCount=0,n.helper=null,n.helping=null,n.target="player",n.wasDowned=!1,n.diedAt=-1/0,n.divePoint=null,no(n),n}function bf({id:n,pos:e},t=ae.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return _f(i,t)}function no(n,e=ae.combat){let[t,i,s]=n.pos,r=n.shapes;if(n.state==="downed"){let a=Math.sin(n.yaw),l=Math.cos(n.yaw);return r.body.r=Ds.r,r.head.r=gt.head.r,r.body.a[0]=t-a*Ds.back,r.body.a[1]=i+Ds.y,r.body.a[2]=s-l*Ds.back,r.body.b[0]=t+a*Ds.front,r.body.b[1]=i+Ds.y,r.body.b[2]=s+l*Ds.front,r.head.c[0]=r.body.b[0],r.head.c[1]=i+Ds.y,r.head.c[2]=r.body.b[2],r}let o=GT.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.r=gt.head.r+e.hitPad,r.body.r=gt.body.r+e.hitPad,r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead-e.hitPad,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+gt.head.cy,r.body.a[1]=i+gt.body.ay,r.body.b[1]=i+gt.body.by),r}function en(n,e){n.state=e,n.stateT=0}function Pi(n,e,t){e=vf(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var Ns=(n,e)=>e>0?n/e:1;function La(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Wt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function Zg(n,e,t){let i=n.point.normal;n.yaw=Wt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Ii(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function Sf(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function Ih(n,e){let t=e.tuning||ae,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=Sf(n,e),l=n.point,c=Ci(l?l.pos:[n.pos[0],n.pos[2]],o),h=n.role,f=!!l&&(n.mustMove||h!=="hold"),d=[n.pos[0],n.pos[2]],u=Math.cos(s.flankAngle*Math.PI/180),m=Math.cos(s.flankMaxAngle*Math.PI/180),x=0,p=0;if(r.coverNormal)x=-r.coverNormal[0],p=-r.coverNormal[1];else{let b=0;for(let S of e.others||[])S.alive&&(x+=S.pos[0],p+=S.pos[2],b++);b?(x=x/b-o[0],p=p/b-o[1]):(x=n.pos[0]-o[0],p=n.pos[2]-o[1])}let g=Math.hypot(x,p)||1;x/=g,p/=g;let _=[];for(let[b,S]of e.reserved)S!==n.id&&_.push(e.points[b].pos);let w=null,M=-1/0;for(let b of e.points){let S=e.reserved.get(b.index);if(S!==void 0&&S!==n.id||f&&b.index===l.index||n.mustMove&&l&&Ci(b.pos,l.pos)<2*i.reserveRadius)continue;let v=Ci(b.pos,o);if(v<i.reserveRadius||v<i.minRange||v>i.maxRange)continue;let y=!1;for(let z of _)if(Ci(z,b.pos)<i.reserveRadius){y=!0;break}if(y)continue;let T=((b.pos[0]-o[0])*x+(b.pos[1]-o[1])*p)/v;if(h==="flank"?T<m:T<0)continue;let E=0;if(h==="push"){let z=c-v;if(z<2)continue;E=2*z}else if(h==="flank"){if(!r.coverNormal||T>u)continue;E=10}let R=Rh(b,a,e.boxes,t);if(!R.protected||!R.canShoot)continue;let D=-Ci(d,b.pos)-.5*Math.abs(v-i.preferRange)+E;D>M+1e-9&&(M=D,w=b)}return w?{point:w,score:M}:null}function WT(n,e){let t=Ih(n,e);return t?t.point:null}function mf(n,e,t){let i=e.tuning||ae,s=[n.pos[0],n.pos[2]],r=Sf(n,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==n.id)continue;let h=Ci(s,l.pos);h>=a||t&&!Rh(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function ji(n,e,t){en(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function Vn(n,e,t){Ii(n,e),Pi(n,0,t),n.blind=0;let i=n.stuckCount>=3?mf(n,e,!1):WT(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point&&Ci(n.point.pos,[n.pos[0],n.pos[2]])<=.5){ji(n,e,t);return}if(i=mf(n,e,!0)||mf(n,e,!1),!i){ji(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){Kg(n,e,t);return}let s=n.stuckCount>=3?null:Ia(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],en(n,"run")}function Kg(n,e,t){if(n.role==="revive"){en(n,"kneel");return}let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),ji(n,e,t)}function XT(n,e,t,i){if(n.role==="revive"){let r=tx(n,e);if(!r){Qi(n,e),Vn(n,e,t);return}if($g(n.pos,r.pos)<=ex){en(n,"kneel");return}}let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,l=o[0]-n.pos[0],c=o[1]-n.pos[2],h=Math.hypot(l,c);if(h<=t.arriveDist){if(a){Kg(n,e,t);return}n.pathI++;continue}La(n,o[0],o[1],t,i);let f=Math.min(s,h);if(f<=1e-9)break;let d=Nn(e.boxes,n.pos,[l/h*f,0,c/h*f],t.radius,t.height),u=Math.hypot(d.pos[0]-n.pos[0],d.pos[2]-n.pos[2]);if(n.pos[0]=d.pos[0],n.pos[2]=d.pos[2],s-=u,u<f*.5)break;u>=h-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.role==="revive"&&Qi(n,e),n.stuckCount++,Vn(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function wf(n,e,t,i,s){let r=e.player,o=n.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let l=0;l<3;l++)n.aim[l]+=(o[l]-n.aim[l])*a}var Jg=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1),Tf=n=>n.tobble&&!n.tobble.downed?n.tobble:null;function YT(n,e,t){if(n.point){let i=lr(n.point,(e.tuning||ae).associate.popShift);t[0]=i[0],t[2]=i[1]}else t[0]=n.pos[0],t[2]=n.pos[2];return t[1]=1.49,t}var gf=[0,0,0];function qT(n,e){let t=Tf(e),i=e.player;return t?(YT(n,e,gf),!i.downed&&On(e.boxes,gf,i.chest)?"player":On(e.boxes,gf,t.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var jg=(n,e)=>n.target==="tobble"?!Tf(e):e.player.downed,Qg=(n,e)=>n.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function $T(n,e,t,i,s){Pi(n,n.pop-Ns(s,t.popTime),t),Zg(n,t,s);let r=e.player;if(r.downed&&!Tf(e))return;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){Vn(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let a=Rh(n.point,Sf(n,e),e.boxes,e.tuning||ae);if(!a.protected||!a.canShoot||Ci(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,Vn(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,Vn(n,e,t);return}}if(n.stateT<n.wait)return;if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){en(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}let o=qT(n,e);if(o&&e.tokens.request(n.id,e.now,e.tokenCount,i)){n.target=o,en(n,"telegraph"),n.shots=0,wf(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&!r.downed&&(en(n,"suppress"),n.shots=0)}function xf(n,e,t,i){Ii(n,e),i&&n.bursts++,ji(n,e,t)}function ZT(n,e,t,i){Pi(n,n.pop+Ns(i,t.popTime),t);let s=Qg(n,e);if(La(n,s[0],s[2],t,i),wf(n,e,t,i,!1),jg(n,e)||!e.tokens.holds(n.id)){xf(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(en(n,"burst"),n.shots=0)}function KT(n,e,t,i){let s=e.player;Pi(n,n.pop+Ns(i,t.popTime),t);let r=Qg(n,e);if(La(n,r[0],r[2],t,i),wf(n,e,t,i,!1),jg(n,e)||!e.tokens.holds(n.id)){xf(n,e,t,!0);return}let o=n.muzzle;o[0]=n.pos[0],o[1]=n.pos[1]+t.muzzleUp,o[2]=n.pos[2];let a=Jg(n.stateT,t.rate,t.burstTime),l=n.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||ae).move.sprint);for(;n.shots<a;){n.shots++;let c=n.aim[0]-o[0],h=n.aim[1]-o[1],f=n.aim[2]-o[2],d=Math.hypot(c,h,f)||1;e.events.push({type:"enemyShot",id:n.id,from:[o[0],o[1],o[2]],dir:[c/d,h/d,f/d],accurate:!0,target:n.target,spread:t.spread+t.moveSpread*l})}n.stateT>=t.burstTime-1e-9&&xf(n,e,t,!0)}function JT(n,e,t,i){let s=e.player;if(n.blind=vf(n.blind+Ns(i,t.popTime)),La(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,ji(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),l=n.muzzle;l[0]=n.pos[0],l[2]=n.pos[2],l[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||ae).combat.blindLift:t.muzzleUp);let c=Jg(a,t.suppressRate,t.suppressTime);for(;n.shots<c;){n.shots++;let h=s.head[0]-l[0],f=s.head[1]-l[1],d=s.head[2]-l[2],u=Math.hypot(h,f,d)||1;h/=u,f/=u,d/=u;let m=d,x=-h,p=Math.hypot(m,x);p<1e-6&&(m=1,x=0,p=1),m/=p,x/=p;let g=f*x,_=d*m-h*x,w=-f*m,M=2*Math.PI*e.rand(),b=t.suppressMiss*(1+.5*e.rand()),S=Math.cos(M)*b,v=Math.sin(M)*b,y=s.head[0]+m*S+g*v,T=s.head[1]+_*v,E=s.head[2]+x*S+w*v,R=y-l[0],D=T-l[1],z=E-l[2],L=Math.hypot(R,D,z)||1;e.events.push({type:"enemyShot",id:n.id,from:[l[0],l[1],l[2]],dir:[R/L,D/L,z/L],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,ji(n,e,t))}var ex=.8;function tx(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);return t&&t.alive&&t.state==="downed"&&t.helper===n.id?t:null}function Qi(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);t&&t.helper===n.id&&(t.helper=null),n.helping=null,n.role="hold"}function nx(n,e,t){let i=(t.tuning||ae).associate;Ii(n,t),Pi(n,0,i),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.point=null,n.role="revive",n.helping=e.id,e.helper=n.id,n.mustMove=!1;let s=n.pos[0]-e.pos[0],r=n.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=ex){en(n,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];n.path=Ia(t.graph,t.boxes,[n.pos[0],n.pos[2]],a,i.radius)||[a],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],en(n,"run")}function jT(n,e,t,i){let s=tx(n,e);if(!s){Qi(n,e),Vn(n,e,t);return}La(n,s.pos[0],s.pos[2],t,i),!(n.stateT<t.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,t.reviveHealth*t.health),s.role="hold",s.mustMove=!1,s.bursts=0,en(s,"seek"),e.events.push({type:"cloneRevive",id:n.id,target:s.id}),n.helping=null,n.role="hold",Vn(n,e,t))}function QT(n,e,t,i){if(n.stateT>=t.bleedTime-1e-9){n.health=0,Ch(n,e,"bleed");return}if(n.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===n||!c.alive||!HT.has(c.state))continue;let h=$g(n.pos,c.pos);h<o&&(o=h,s=c.pos[0]-n.pos[0],r=c.pos[2]-n.pos[2])}if(o===1/0)s=n.pos[0]-e.player.pos[0],r=n.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),n.yaw=Wt(n.yaw,Math.atan2(s,r),t.turnRate*i);let a=t.downedCrawl*i,l=Nn(e.boxes,n.pos,[s/o*a,0,r/o*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}function eE(n,e,t){n.point&&e.reserved.get(n.point.index)===n.id&&n.pop<=1e-6&&Ci(n.point.pos,[n.pos[0],n.pos[2]])<=.3?ji(n,e,t):Vn(n,e,t)}function ix(n,e){return!n.alive||Ph.has(n.state)||n.state==="downed"?!1:(n.role==="revive"&&Qi(n,e),Ii(n,e),n.blind=0,en(n,"stagger"),!0)}function sx(n,e,t){if(!n.alive||Ph.has(n.state)||n.state==="downed"||n.state==="dive")return!1;n.role==="revive"&&Qi(n,t),Ii(n,t),Pi(n,0,(t.tuning||ae).associate),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.divePoint=n.point,n.point=null,n.role="hold",n.path=[],n.pathI=0;let i=n.pos[0]-e[0],s=n.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(n.yaw),s=Math.cos(n.yaw)):(i/=r,s/=r),n.diveDir[0]=i,n.diveDir[1]=s,n.yaw=Math.atan2(i,s),en(n,"dive"),!0}function tE(n,e,t,i){let s=Math.max(t.diveTime,.001),r=Math.max(n.stateT-i,t.diveReaction),o=Math.min(n.stateT,t.diveReaction+s);if(o>r){let a=t.diveDistance*(o-r)/s,l=Nn(e.boxes,n.pos,[n.diveDir[0]*a,0,n.diveDir[1]*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}n.stateT>=t.diveReaction+s-1e-9&&(n.point=n.divePoint,n.divePoint=null,n.mustMove=!0,Vn(n,e,t))}function rx(n,e){return!n.alive||Ph.has(n.state)||n.state==="dive"?!1:(n.role==="revive"&&Qi(n,e),Ii(n,e),Pi(n,0,(e.tuning||ae).associate),n.blind=0,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.wasDowned=n.state==="downed",n.point=null,n.role="hold",n.helper=null,n.mustMove=!1,en(n,"executed"),!0)}function ox(n){return!n.alive||n.state!=="executed"?!1:(en(n,n.wasDowned?"downed":"flinch"),n.wasDowned=!1,!0)}function ax(n,e,t="execute"){return!n.alive||n.state!=="executed"?null:(n.health=0,Ch(n,e,t))}function Ch(n,e,t){return n.alive=!1,Ii(n,e),n.role==="revive"&&Qi(n,e),n.helper=null,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.pop=0,n.blind=0,en(n,"dead"),e.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]],kind:t}),"kill"}function Ef(n,e){return!n.alive||Ph.has(n.state)||n.state==="downed"?null:(Ii(n,e),n.role==="revive"&&Qi(n,e),n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.point=null,n.health=1,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.mustMove=!1,en(n,"downed"),e.events.push({type:"down",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),e.events.push({type:"bark",id:n.id,key:"cloneDown"}),"down")}function lx(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,zT);let i=(e.tuning||ae).associate,s=e.director||ae.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&Vn(n,e,i);break;case"seek":Vn(n,e,i);break;case"run":XT(n,e,i,t);break;case"cover":$T(n,e,i,s,t);break;case"telegraph":ZT(n,e,i,t);break;case"burst":KT(n,e,i,t);break;case"suppress":JT(n,e,i,t);break;case"reload":Pi(n,n.pop-Ns(t,i.popTime),i),Zg(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,ji(n,e,i));break;case"flinch":Pi(n,n.pop-Ns(t,i.popTime),i),n.blind=vf(n.blind-Ns(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?ji(n,e,i):Vn(n,e,i));break;case"stagger":Pi(n,n.pop-Ns(t,i.popTime),i),n.stateT>=i.staggerTime-1e-9&&eE(n,e,i);break;case"dive":tE(n,e,i,t);break;case"kneel":jT(n,e,i,t);break;case"downed":QT(n,e,i,t);break;case"spawn":n.stateT>=(e.tuning||ae).pad.riseTime-1e-9&&Vn(n,e,i);break;default:break}}function cx(n,e,t,i="body"){return!n.alive||!(e>0)||n.state==="executed"||n.state==="unused"?null:n.state==="downed"?(n.health=0,Ch(n,t,i)):(n.health-=e,n.health<=0?(i==="body"||i==="tobble")&&t.rand()<(t.tuning||ae).associate.downChance?Ef(n,t):(n.health=0,Ch(n,t,i)):n.role==="revive"?(Qi(n,t),Ii(n,t),en(n,"flinch"),"hit"):(VT.has(n.state)&&(Ii(n,t),en(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function hx(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=ae.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[f,d]of e)r-d.last>a.requestWindow&&e.delete(f);if(n.size>=o)return!1;let c=null,h=1/0;for(let[f,d]of e)d.first<h&&(c=f,h=d.first);return c!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=ae.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=ae.director){let o=[];for(let[a,l]of n)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}function ux(n,e=ae){let t=(n.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(t.map(r=>[r.id,new Set]));return{list:t,step(r,o){let a=e.pad,l=[];for(let c of t){if(c.state==="dormant"){if(!o.started||!(o.kills>=a.openAfterKills||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of t)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of t)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return t.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of t)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var nE=.25,iE=1.49,sE=.5,ur="tobble",rE=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn"]),Lh=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),Fh=n=>Math.max(0,Math.min(1,n)),dx=(n,e)=>e&&e.tuning?e.tuning.tobble:n.cfg,oE=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function Cf({pos:n,yaw:e=0},t=ae.tobble){let i={id:ur,cfg:t,start:[n[0],n[1],n[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:gt.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return Pf(i)}function Pf(n){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=n.startYaw,n.state="idle",n.stateT=0,n.hp=n.cfg.health,n.alive=!0,n.downed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.target=null,n.reviveT=0,n.threatT=0,n.lofT=0,n.wait=0,n.shots=0,n.sinceHit=0,n.relocT=0,n.complainT=0,n.stuckT=0,n.stuckCount=0,n.kneeling=!1,n.revGo=!1,n.sideLeft=0,n.speed=0,n.aim[0]=n.aim[1]=n.aim[2]=0,Da(n),n}function Da(n,e=ae.combat){let t=n.cfg,i=t.scale,[s,r,o]=n.pos,a=n.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,n.downed){let c=Math.sin(n.yaw),h=Math.cos(n.yaw);a.body.r=.25*i,a.head.r=gt.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],n.chest[0]=s,n.chest[1]=r+.25*i,n.chest[2]=o}else if(n.point&&n.point.kind==="low"&&n.pop<.5)a.head.r=(gt.head.r+l)*i,a.body.r=(gt.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,n.chest[0]=s,n.chest[1]=r+e.crouchBodyTop*i*.9,n.chest[2]=o;else{let c=n.point?t.popLift*Fh(n.pop):0;a.head.r=(gt.head.r+l)*i,a.body.r=(gt.body.r+l)*i,a.head.c[1]=r+gt.head.cy*i+c,a.body.a[1]=r+gt.body.ay*i+c,a.body.b[1]=r+gt.body.by*i+c,n.chest[0]=s,n.chest[1]=r+t.height*(1.2/1.8)+c,n.chest[2]=o}return n.head[0]=a.head.c[0],n.head[1]=a.head.c[1],n.head[2]=a.head.c[2],a}function dr(n,e){n.state=e,n.stateT=0}var kh=(n,e,t=!1)=>n.events.push(t?{type:"bark",id:ur,key:e,force:t}:{type:"bark",id:ur,key:e});function Na(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Wt(n.yaw,Math.atan2(r,o),i.turnRate*s))}function aE(n,e,t){let i=n.point.normal;n.yaw=Wt(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function so(n,e,t){e=Fh(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.tuning.associate.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var If=(n,e)=>e>0?n/e:1;function Oa(n,e){n.point&&e.reserved.get(n.point.index)===ur&&e.reserved.delete(n.point.index),n.point=null}function fx(n,e,t,i){let s=n.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=t-s.lens[0],f=i-s.lens[2],d=Math.max(.5,Math.min(e.lofRange,h*l+f*c));return Math.hypot(h-l*d,f-c*d)}function lE(n,e,t){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=n.pos[0]-i.lens[0],l=n.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;n.side[0]=-o*c,n.side[1]=r*c,n.sideLeft=t.sidestepDist,Oa(n,e),so(n,0,e),n.target=null,n.lofT=0,dr(n,"sidestep")}var hr=n=>n.alive&&rE.has(n.state)&&n.state!=="executed",io=n=>n.state==="downed";function cE(n,e,t,i){return n.point?(lr(n.point,e.tuning.associate.popShift,es),i[0]=es[0],i[2]=es[1]):(i[0]=n.pos[0],i[2]=n.pos[2]),i[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0),i}function Oh(n,e){let t=n.shapes.body;return e[0]=(t.a[0]+t.b[0])/2,e[1]=(t.a[1]+t.b[1])/2,e[2]=(t.a[2]+t.b[2])/2,e}var di=[0,0,0],Af=[0,0,0],es=[0,0];function Lf(n,e,t){return n.point?(lr(n.point,e.tuning.associate.popShift,es),t[0]=es[0],t[2]=es[1]):(t[0]=n.pos[0],t[2]=n.pos[2]),t[1]=iE,t}function px(n,e,t){cE(n,e,t,Af);let i=null,s=1/0;for(let r of e.enemies){if(!hr(r)||io(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);o>=s||o>t.range||On(e.boxes,Af,Oh(r,di))&&(s=o,i=r)}return i}function mx(n,e,t){let i=null,s=1/0;for(let r of n.enemies){if(!hr(r)||io(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-t);o<s&&(s=o,i=r)}return i}var Uh=[0,0,0],Os=[0,0,0],Dh=[0,0,0];function gx(n,e,t){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[n.pos[0],n.pos[2]],l=mx(e,n.pos[0],n.pos[2]),c=[];for(let[u,m]of e.reserved)m!==ur&&c.push(e.points[u].pos);let h=(t.followMin+t.followMax)/2,f=null,d=-1/0;for(let u of e.points){let m=e.reserved.get(u.index);if(m!==void 0&&m!==ur)continue;let x=Lh(u.pos,o);if(x<t.followMin||x>t.followMax||x<=t.personalSpace||fx(e,t,u.pos[0],u.pos[1])<t.lofClear)continue;let p=!1;for(let M of c)if(Lh(M,u.pos)<s.reserveRadius){p=!0;break}if(p)continue;let g=!0;for(let M of e.enemies)if(hr(M)&&Lh([M.pos[0],M.pos[2]],u.pos)<s.radius+t.radius+.2){g=!1;break}if(!g)continue;let _=!1;if(l){if(Lf(l,e,Uh),Os[0]=u.pos[0],Os[1]=u.kind==="low"?i.combat.crouchHead*t.scale:t.height,Os[2]=u.pos[1],On(e.boxes,Os,Uh))continue;lr(u,s.popShift,es),Dh[0]=es[0],Dh[1]=t.muzzleUp+t.popLift,Dh[2]=es[1],_=On(e.boxes,Dh,Oh(l,di))}let w=-Lh(a,u.pos)-.5*Math.abs(x-h)+(_?8:0);w>d+1e-9&&(d=w,f=u)}return f}function hE(n,e,t){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let f=Math.hypot(i.dir[0],i.dir[2]);f>1e-6&&(r=i.dir[0]/f,o=i.dir[2]/f)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=Nn(e.boxes,[s[0],n.pos[1],s[2]],[l,0,c],t.radius,t.height);return[h.pos[0],h.pos[2]]}function xx(n,e,t,i){n.goal[0]=i[0],n.goal[1]=i[1],n.path=n.stuckCount>=3?[[i[0],i[1]]]:Ia(e.graph,e.boxes,[n.pos[0],n.pos[2]],i,t.radius)||[[i[0],i[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}function vx(n,e,t,i,s){let r=s*i,o=.15;for(let a=0;a<n.path.length+2;a++){let l=n.path[n.pathI],c=n.pathI===n.path.length-1,h=l[0]-n.pos[0],f=l[1]-n.pos[2],d=Math.hypot(h,f);if(d<=o){if(c)return"arrived";n.pathI++;continue}Na(n,l[0],l[1],t,i);let u=Math.min(r,d);if(u<=1e-9)break;let m=Nn(e.boxes,n.pos,[h/d*u,0,f/d*u],t.radius,t.height),x=Math.hypot(m.pos[0]-n.pos[0],m.pos[2]-n.pos[2]);if(n.pos[0]=m.pos[0],n.pos[2]=m.pos[2],r-=x,x<u*.5)break}if(n.stuckT+=i,n.stuckT>=1){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05)return"stuck";n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}return"moving"}function Us(n,e,t){let i=e.started?gx(n,e,t):null;n.point&&(!i||i.index!==n.point.index)&&Oa(n,e),so(n,0,e);let s;if(i?(n.point=i,e.reserved.set(i.index,ur),s=i.pos):s=hE(n,e,t),n.shots=0,n.target=null,Math.hypot(s[0]-n.pos[0],s[1]-n.pos[2])<=.15){_x(n,e,t);return}xx(n,e,t,s),dr(n,"follow")}function _x(n,e,t){if(n.stuckCount=0,n.point&&(n.pos[0]=n.point.pos[0],n.pos[2]=n.point.pos[1]),!e.started&&!n.point){dr(n,"idle");return}Rf(n,e,t)}function Rf(n,e,t){dr(n,"cover"),n.target=null,n.relocT=0,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function uE(n,e,t,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax){Us(n,e,t);return}Na(n,s[0],s[2],t,i)}function dE(n,e,t,i){let s=vx(n,e,t,i,t.runSpeed);s==="arrived"?_x(n,e,t):s==="stuck"&&(n.stuckCount++,Oa(n,e),Us(n,e,t))}function fE(n,e,t,i){so(n,n.pop-If(i,t.popTime),e);let s=e.player.pos;if(n.point?aE(n,t,i):Na(n,s[0],s[2],t,i),n.relocT+=i,n.relocT>=sE){n.relocT=0;let o=Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t.followMax;if(n.point){let a=n.point.pos,l=Math.hypot(n.pos[0]-a[0],n.pos[2]-a[1])>.3,c=mx(e,n.pos[0],n.pos[2]),h=!1;if(c){Lf(c,e,Uh);let f=n.point.kind==="low"?e.tuning.combat.crouchHead*t.scale:t.height;Os[0]=a[0],Os[1]=f,Os[2]=a[1],h=On(e.boxes,Os,Uh)}if(o||l||h){Us(n,e,t);return}}else if(o||e.started&&gx(n,e,t)){Us(n,e,t);return}}if(!e.started||n.stateT<n.wait)return;let r=px(n,e,t);r&&(n.target=r,n.shots=0,dr(n,"shoot"))}function pE(n,e,t,i){so(n,n.pop+If(i,t.popTime),e);let s=n.target;if((!s||!hr(s)||io(s)||!On(e.boxes,mE(n,t),Oh(s,di)))&&(s=n.target=px(n,e,t)),!s){Rf(n,e,t);return}if(Na(n,s.pos[0],s.pos[2],t,i),n.stateT<t.popTime-1e-9)return;let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp+(n.point?t.popLift:0)*Fh(n.pop),r[2]=n.pos[2];let o=oE(n.stateT-t.popTime,t.rate,t.burstTime);for(;n.shots<o;){n.shots++,Oh(s,di);let a=di[0]-r[0],l=di[1]-r[1],c=di[2]-r[2],h=Math.hypot(a,l,c)||1,f=to([a/h,l/h,c/h],t.spread,e.rand,n.scratch),d=dn(r,f,t.range,e.boxes,e.enemies),u=d.target&&(d.kind==="head"||d.kind==="body")?d.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:d.point,hit:u?u.id:null}),u&&e.hurtRep&&e.hurtRep(u,t.damage),!hr(s)||io(s))break}(!hr(s)||io(s))&&(n.target=null),n.stateT>=t.popTime+t.burstTime-1e-9&&Rf(n,e,t)}var Nh=[0,0,0];function mE(n,e){return Nh[0]=n.pos[0],Nh[1]=n.pos[1]+e.muzzleUp+(n.point?e.popLift:0)*Fh(n.pop),Nh[2]=n.pos[2],Nh}function gE(n,e,t,i){let s=Math.min(t.runSpeed*i,n.sideLeft);if(s>0){let r=Nn(e.boxes,n.pos,[n.side[0]*s,0,n.side[1]*s],t.radius,t.height),o=Math.hypot(r.pos[0]-n.pos[0],r.pos[2]-n.pos[2]);n.pos[0]=r.pos[0],n.pos[2]=r.pos[2],n.sideLeft-=o<s*.5?n.sideLeft:o}n.sideLeft<=1e-6&&Us(n,e,t)}function xE(n){let e=n.player.pos,t=0;di[0]=e[0],di[1]=.4,di[2]=e[2];for(let i of n.enemies)!hr(i)||io(i)||i.state==="spawn"||On(n.boxes,Lf(i,n,Af),di)&&t++;return t}function vE(n,e){Oa(n,e),so(n,0,e),n.target=null,n.revGo=!1,n.threatT=0,n.kneeling=!1,n.reviveT=0,n.path=[],n.pathI=0,n.goal[0]=n.goal[1]=1/0,dr(n,"revive")}function _E(n,e,t,i){let s=e.player.pos;if(!n.revGo)if(n.threatT+=i,so(n,n.pop-If(i,t.popTime),e),xE(e)<=t.reviveMaxThreats||n.threatT>=t.reviveWaitMax-1e-9)n.revGo=!0;else return;if(Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])<=t.reviveRange){n.kneeling||(n.kneeling=!0,n.reviveT=0,e.events.push({type:"tobbleKneel"})),Na(n,s[0],s[2],t,i),n.reviveT+=i,n.reviveT>=t.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&kh(e,"tobbleRevive",!0),Us(n,e,t));return}if(n.kneeling=!1,n.reviveT=0,Math.hypot(s[0]-n.goal[0],s[2]-n.goal[1])>t.reviveRange+.4||!n.path.length){let a=n.pos[0]-s[0],l=n.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,t.reviveRange*.8);xx(n,e,t,[s[0]+a*h,s[2]+l*h]),n.goal[0]=s[0],n.goal[1]=s[2]}let o=vx(n,e,t,i,t.runSpeed);o==="stuck"?(n.stuckCount++,n.path=[]):o==="arrived"&&(n.path=[])}function yE(n,e,t,i){let s=e.player.pos,r=s[0]-n.pos[0],o=s[2]-n.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(n.yaw=Wt(n.yaw,Math.atan2(r,o),t.turnRate*i)),a>t.reviveRange&&t.crawlSpeed>0){let l=Math.min(t.crawlSpeed*i,a-t.reviveRange),c=Nn(e.boxes,n.pos,[r/a*l,0,o/a*l],t.radius,t.height);n.pos[0]=c.pos[0],n.pos[2]=c.pos[2]}n.complainT+=i,n.complainT>=t.complainEvery-1e-9&&(n.complainT=0,kh(e,"tobbleComplain"))}function yx(n,e,t){(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,nE);let i=dx(n,e);if(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.sinceHit+=t,n.downed){yE(n,e,i,t);return}switch(n.hp<i.health&&n.sinceHit>=i.regenDelay&&(n.hp=Math.min(i.health,n.hp+(i.regenTime>0?i.health/i.regenTime*t:i.health))),e.playerDowned?n.state!=="revive"&&vE(n,e):n.state==="revive"&&Us(n,e,i),n.state!=="sidestep"&&n.state!=="revive"&&e.aim&&e.aim.active&&fx(e,i,n.pos[0],n.pos[2])<i.lofClear?(n.lofT+=t,n.lofT>=i.sidestepReact-1e-9&&lE(n,e,i)):n.state!=="sidestep"&&(n.lofT=0),n.state){case"idle":uE(n,e,i,t);break;case"follow":dE(n,e,i,t);break;case"cover":fE(n,e,i,t);break;case"shoot":pE(n,e,i,t);break;case"sidestep":gE(n,e,i,t);break;case"revive":_E(n,e,i,t);break;default:break}}function Df(n,e,t){return n.downed||!(e>0)?null:(n.hp-=e,n.sinceHit=0,n.hp>0?"hit":(n.hp=0,n.downed=!0,n.kneeling=!1,n.reviveT=0,n.complainT=0,n.target=null,n.pop=0,Oa(n,t),dr(n,"downed"),t.events.push({type:"tobbleDown"}),kh(t,"tobbleDown",!0),"downed"))}function Nf(n,e){if(!n.downed)return!1;let t=dx(n,e);return n.downed=!1,n.hp=Math.max(1,t.reviveHealth*t.health),n.sinceHit=0,n.lofT=0,n.complainT=0,e.events.push({type:"tobbleUp"}),kh(e,"tobbleUp"),Us(n,e,t),!0}var Mx=new Set(["cover","coverSlide","coverSwap"]),bx=new Set(["cover","suppress","reload","flinch"]),ME=new Set(["cover","suppress","reload"]),Sx=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),wx=8,bE=1,SE=.1,Of=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function Tx({level:n,boxes:e,edges:t,rand:i,tuning:s=ae}){let r=()=>s.associate,o=Gg(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=Wg(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=hx(),c=qg(s.grenade),h=ux(n,s),f=new Map,d=()=>!!n.tobble&&s.tobble.enabled>0,u=[],m=[],x=n.associates.length,p=n.associates.map(N=>bf(N,s.associate));for(let N=x;N<wx;N++)p.push(yf(bf({id:`r${N+1}`,pos:[0,0,0]},s.associate)));let g=()=>Math.max(x,Math.min(wx,Math.round(s.director.maxEnemies))),_=g(),w=Ah({state:"move",pos:[0,0,0],cover:null,scratch:{}}),M={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},b={boxes:e,points:o,graph:a,tokens:l,reserved:f,player:M,now:0,rand:i,tokenCount:0,events:u,tuning:s,director:s.director,others:p,started:!1,aim:void 0,tobble:null,enemies:p,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null},S={enemies:p,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null},v=!1,y=0,T=[0,0],E=!1,R=!1;function D(){f.clear();for(let N of p.slice(0,x)){let Y=null,j=1/0;for(let se of o){let Z=Math.hypot(se.pos[0]-N.pos[0],se.pos[1]-N.pos[2]);Z<j&&(j=Z,Y=se)}N.point=Y,Y&&f.set(Y.index,N.id)}}D(),S.tobble=b.tobble=d()?Cf(n.tobble,s.tobble):null;let z=()=>S.tobble&&!S.tobble.downed,L=(N,Y,j=u,se=!1)=>j.push(se?{type:"bark",id:N,key:Y,force:se}:{type:"bark",id:N,key:Y}),G=()=>p.find(N=>N.alive)||p[0];function H(){for(let N of l.held())l.release(N,S.now,s.director)}function X(N){S.started=!0,S.startT=S.now,L(G().id,"lockdown",N)}function le(N){N.diedAt=S.now,S.kills++,h.noteDeath(N.id)}function O(N,Y,j,se){!S.started&&N.alive&&N.state!=="unused"&&Y>0&&X(se),b.events=se;let Z=cx(N,Y,b,j);return b.events=u,Z==="kill"&&le(N),Z==="kill"&&j==="head"&&z()&&++y%3===0&&L("tobble","tobbleHeadshot",se),Z}b.hurtRep=(N,Y)=>O(N,Y,"tobble",u),b.reviveDoc=()=>!b.health||!b.health.downed?!1:(b.health.revive(),b.m.revive(),M.downed=!1,u.push({type:"revived"}),!0);function W(N,Y){let j=M,se=s.combat;j.pos[0]=N.pos[0],j.pos[1]=N.pos[1],j.pos[2]=N.pos[2];let Z=Mx.has(N.state)?Ki(N):null;j.exposed=!!(N.cover&&N.cover.exposed);let xe=!!Z&&Z.kind==="low"&&!j.exposed;j.chest[0]=N.pos[0],j.chest[1]=N.pos[1]+(xe?.6:1.2),j.chest[2]=N.pos[2];let Q=Ah(N,w,se).shapes.head.c;j.head[0]=Q[0],j.head[1]=Q[1],j.head[2]=Q[2],j.speed=N.speed(),j.coverNormal=Z?Z.normal:null,j.downed=!!Y.downed}function B(N,Y){let j=s.director;if(Mx.has(N.state)?M.exposed||(S.hideT+=Y):S.hideT=0,!R||Math.hypot(N.pos[0]-T[0],N.pos[2]-T[1])>j.stayRadius?(T[0]=N.pos[0],T[1]=N.pos[2],R=!0,S.stayT=0):S.stayT+=Y,S.hideT>=j.pushAfter&&!p.some(Z=>Z.alive&&Z.role==="push")){let Z=p.filter(Q=>Q.alive&&Q.role==="hold"&&bx.has(Q.state)&&!l.holds(Q.id)).sort((Q,pe)=>Of(Q.pos,M.pos)-Of(pe.pos,M.pos)),xe=null;for(let Q of Z){if(Q.role="push",Ih(Q,b)){xe=Q;break}Q.role="hold"}xe?(L(xe.id,"push"),S.hideT=0):S.hideT=Math.max(0,j.pushAfter-1)}if(S.stayT>=j.flankAfter&&!p.some(Z=>Z.alive&&Z.role==="flank")){let Z=null,xe=-1/0;for(let Q of p){if(!Q.alive||Q.role!=="hold"||!bx.has(Q.state)||l.holds(Q.id))continue;Q.role="flank";let pe=Ih(Q,b);Q.role="hold",pe&&pe.score>xe&&(xe=pe.score,Z=Q)}Z&&(Z.role="flank",z()&&L("tobble","tobbleFlank"),L(Z.id,"flank")),S.stayT=0}}function ge(){let N=r().reviveRange;for(let Y of p){if(!Y.alive||Y.state!=="downed"||Y.helper)continue;let j=null,se=1/0;for(let Z of p){if(!Z.alive||!ME.has(Z.state)||Z.role!=="hold"||l.holds(Z.id))continue;let xe=Of(Z.pos,Y.pos);xe<=N&&xe<se&&(se=xe,j=Z)}j&&(nx(j,Y,b),L(j.id,"cloneRevive"))}}function de(){for(let N=0;N<_;N++){let Y=p[N];if(!Y.claimed&&(Y.state==="unused"||Y.state==="dead"&&S.now-Y.diedAt>=bE-1e-9))return Y.claimed=!0,Y}return null}function J(){let N=h.step(0,{started:S.started,sinceStart:S.now-S.startT,kills:S.kills,freeSlot:de,now:S.now});for(let Y of N){if(u.push(Y),Y.type==="padOpen"){L(Y.id,"padOpen",u,!0),z()&&L("tobble","tobblePad",u,!0);continue}if(Y.type!=="padSpawn")continue;let j=h.list.find(Z=>Z.id===Y.id),se=p.find(Z=>Z.id===Y.enemyId);Mf(se,j.pos,b)}}let ve=[0,0,0],Te=[0,0,0];function Ye(N,Y,j){let se=s.grenade,Z=0;ve[0]=N[0],ve[1]=N[1]+.3,ve[2]=N[2];let xe=(pe,Se)=>{let Be=Math.hypot(pe[0]-N[0],pe[1]-N[1],pe[2]-N[2]),F=Yg(Be,se);return F>0&&On(e,ve,pe)?Se(F):null};for(let pe of p){if(!pe.alive||pe.state==="executed")continue;let Se=pe.shapes.body;Te[0]=pe.pos[0],Te[1]=(Se.a[1]+Se.b[1])/2,Te[2]=pe.pos[2],xe(Te,Be=>O(pe,Be,"blast",u))==="kill"&&Z++}Te[0]=Y.pos[0],Te[1]=Y.pos[1]+(M.chest[1]-Y.pos[1]<1?.45:.9),Te[2]=Y.pos[2],xe(Te,pe=>{let Se=pe*se.selfDamage,Be=j.damage(Se);return Be===null||(u.push({type:"playerHit",id:null,from:[N[0],N[1],N[2]],amount:Se,result:Be}),Be==="downed"&&(Y.state!=="downed"&&Y.down(),H())),null});let Q=h.blast(N);for(let pe of Q)u.push({type:"padClosed",id:pe}),L(pe,"padClosed");u.push({type:"explode",pos:[N[0],N[1],N[2]],kills:Z,closed:Q})}function ie(N,Y,j){for(let se of c.step(N,e))se.type==="explode"?Ye(se.pos,Y,j):u.push(se)}function De(){let N=r();for(let Y of c.live)if(!(Y.fuse>N.diveWarn))for(let j of p)!j.alive||j.state==="downed"||j.state==="executed"||j.state==="dive"||Y.rolled&&Y.rolled.has(j.id)||Math.hypot(j.pos[0]-Y.pos[0],j.pos[2]-Y.pos[2])>N.diveRadius||((Y.rolled||(Y.rolled=new Set)).add(j.id),i()<N.diveChance&&sx(j,Y.pos,b)&&!Y.barked&&(Y.barked=!0,L(j.id,"dive")))}let Ke=N=>{let Y=N.point,j=r();return Y.kind==="tall"&&N.pop>0?[Y.pos[0]+Y.tangent[0]*Y.end*j.popShift*N.pop,Y.pos[1]+Y.tangent[1]*Y.end*j.popShift*N.pop]:Y.pos};function ke(N){let Y=s.associate.radius,j=s.associate.height,se=(Q,pe,Se)=>{if(Q.state==="executed")return;let Be=Nn(e,Q.pos,[pe,0,Se],Y,j);Q.pos[0]=Be.pos[0],Q.pos[2]=Be.pos[2]},Z=Q=>Q.state==="executed";for(let Q=0;Q<p.length;Q++){let pe=p[Q];if(!pe.alive)continue;for(let Ee=Q+1;Ee<p.length;Ee++){let Ge=p[Ee];if(!Ge.alive)continue;let ne=Ge.pos[0]-pe.pos[0],Ze=Ge.pos[2]-pe.pos[2],Ae=Math.hypot(ne,Ze);if(Ae>=2*Y)continue;Ae<1e-6&&(ne=1,Ze=0,Ae=1);let Re=(2*Y-Ae)/2,P=Z(Ge)?2:Z(pe)?0:1,A=Z(pe)?2:Z(Ge)?0:1;se(pe,-ne/Ae*Re*P,-Ze/Ae*Re*P),se(Ge,ne/Ae*Re*A,Ze/Ae*Re*A)}let Se=pe.pos[0]-N.pos[0],Be=pe.pos[2]-N.pos[2],F=Math.hypot(Se,Be),me=Y+s.move.radius;F<me&&(F<1e-6&&(Se=1,Be=0,F=1),se(pe,Se/F*(me-F),Be/F*(me-F)))}let xe=S.tobble;if(xe){let Q=s.tobble.radius,pe=s.tobble.height,Se=(Ge,ne)=>{let Ze=Nn(e,xe.pos,[Ge,0,ne],Q,pe);xe.pos[0]=Ze.pos[0],xe.pos[2]=Ze.pos[2]};for(let Ge of p){if(!Ge.alive)continue;let ne=Ge.pos[0]-xe.pos[0],Ze=Ge.pos[2]-xe.pos[2],Ae=Math.hypot(ne,Ze),Re=Q+Y;if(Ae>=Re)continue;Ae<1e-6&&(ne=1,Ze=0,Ae=1);let P=Re-Ae,A=Z(Ge)||Ge.point&&Sx.has(Ge.state)?1:.5;Se(-ne/Ae*P*A,-Ze/Ae*P*A),se(Ge,ne/Ae*P*(1-A),Ze/Ae*P*(1-A))}let Be=xe.pos[0]-N.pos[0],F=xe.pos[2]-N.pos[2],me=Math.hypot(Be,F),Ee=Q+s.move.radius;me<Ee&&(me<1e-6&&(Be=1,F=0,me=1),Se(Be/me*(Ee-me),F/me*(Ee-me)))}for(let Q of p){if(!Q.alive||!Q.point||!Sx.has(Q.state))continue;let pe=Ke(Q);if(Math.hypot(Q.pos[0]-pe[0],Q.pos[2]-pe[1])<=.3)continue;let Se=Math.hypot(pe[0]-N.pos[0],pe[1]-N.pos[2])>=Y+s.move.radius-.001;S.tobble&&Math.hypot(pe[0]-S.tobble.pos[0],pe[1]-S.tobble.pos[2])<Y+s.tobble.radius-.001&&(Se=!1);for(let Be of p)Be===Q||!Be.alive||!Se||Math.hypot(pe[0]-Be.pos[0],pe[1]-Be.pos[2])<2*Y-.001&&(Se=!1);if(Se){Q.pos[0]=pe[0],Q.pos[2]=pe[1];continue}l.holds(Q.id)&&l.release(Q.id,S.now,s.director),Q.mustMove=!0,Q.pop=0,Q.blind=0,Q.state="seek",Q.stateT=0}}let Je=[null];function Fe(N,Y){let j=r(),se=[0,0,0];Je[0]=S.tobble;for(let Z=0;Z<u.length;Z++){let xe=u[Z];if(xe.type!=="enemyShot")continue;if(xe.accurate&&Y.downed&&xe.target!=="tobble"){u.splice(Z--,1);continue}let Q=to(xe.dir,xe.spread,i,se);if(xe.target==="tobble"){let pe=S.tobble,Se=dn(xe.from,Q,j.range,e,Je);if(pe&&!pe.downed&&(Se.kind==="head"||Se.kind==="body")){let Be=Df(pe,j.damage,b);u.push({type:"tobbleHit",id:xe.id,from:xe.from,result:Be})}u.push({type:"shotFx",from:xe.from,to:Se.point,accurate:!0})}else if(xe.accurate){let pe=Bg(xe.from,Q,j.range,e,N,s.combat),Se=pe.point;if(pe.kind==="head"||pe.kind==="body"){let Be=Y.damage(j.damage);u.push({type:"playerHit",id:xe.id,from:xe.from,amount:j.damage,result:Be}),Be==="downed"&&(N.state!=="downed"&&N.down(),H())}u.push({type:"shotFx",from:xe.from,to:Se.slice(),accurate:!0})}else{let pe=dn(xe.from,Q,j.range,e,[]);u.push({type:"shotFx",from:xe.from,to:pe.point,accurate:!1})}}}return S.targets=()=>p,S.freeSlot=de,S.step=(N,Y)=>{(!(N>0)||!Number.isFinite(N))&&(N=0),N=Math.min(N,SE),u.length=0;for(let Q of m)u.push(Q);m.length=0;let{m:j,health:se}=Y;if(S.now+=N,b.now=S.now,b.aim=Y.aim,b.m=j,b.health=se,!S.started&&j.pos[2]>n.trigger.z&&X(u),b.started=S.started,W(j,se),b.playerDowned=M.downed,M.downed){z()||H();for(let Q of p)Q.role!=="revive"&&(Q.role="hold");!E&&S.started&&L(G().id,"downed")}else S.started&&!S.clear&&B(j,N);E=M.downed,S.started&&(ge(),J()),l.expire(S.now,s.director),b.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,ie(N,j,se),De(),S.tobble&&(yx(S.tobble,b,N),Da(S.tobble,s.combat));let Z=u.length;for(let Q of p)lx(Q,b,N);for(let Q=Z;Q<u.length;Q++)u[Q].type==="death"&&le(p.find(pe=>pe.id===u[Q].id));Fe(j,se),ke(j);for(let Q of p)no(Q,s.combat);S.tobble&&Da(S.tobble,s.combat);let xe=!!S.tobble&&S.tobble.downed&&se.downed;return xe&&!v&&u.push({type:"checkpoint"}),v=xe,S.started&&!S.clear&&p.every(Q=>!Q.alive)&&h.allDone()&&(S.clear=!0,u.push({type:"clear"}),L(p[0].id,"clear"),S.tobble&&(Nf(S.tobble,b),L("tobble","tobbleClear"))),u},S.hurt=(N,Y,j="body")=>O(N,Y,j,m),S.bash=N=>{if(!N.alive||N.state==="executed"||N.state==="unused")return null;let Y=O(N,s.melee.bashDamage,"bash",m);return Y==="hit"?(ix(N,b),"hit"):Y==="kill"?"kill":null},S.beginExecution=N=>rx(N,b),S.finishExecution=N=>{b.events=m;let Y=ax(N,b,"execute");return b.events=u,Y==="kill"&&le(N),Y},S.releaseExecution=N=>ox(N),S.spawnRep=()=>{let N=de();if(!N)return null;let Y=h.list[0];return Mf(N,Y?Y.pos:[0,0,0],b)},S.downRep=N=>{b.events=m;let Y=Ef(N,b);return b.events=u,Y==="down"},S.hurtTobble=N=>{if(!S.tobble)return null;b.events=m;let Y=Df(S.tobble,N,b);return b.events=u,Y},S.reserved=f,S.reviveTobble=()=>{if(!S.tobble)return!1;b.events=m;let N=Nf(S.tobble,b);return b.events=u,N&&Da(S.tobble,s.combat),N},S.throwGrenade=(N,Y)=>c.throw(N,Y),S.reset=()=>{l.reset(),c.reset(),h.reset(),_=g(),p.forEach((N,Y)=>{_f(N,s.associate),Y>=x&&yf(N)}),D(),S.tobble=b.tobble=d()?S.tobble?Pf(S.tobble):Cf(n.tobble,s.tobble):null,v=!1,y=0,b.playerDowned=!1,u.length=0,m.length=0,S.started=S.clear=!1,S.now=0,S.startT=0,S.kills=0,S.hideT=S.stayT=0,b.now=0,b.started=!1,b.aim=void 0,E=!1,R=!1;for(let N of p)no(N,s.combat)},S}function Bh(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=nf(n),o=sf(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var Ex=n=>Math.max(0,Math.min(1,n));function Ax({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=ae.feedback}){let a=t?1:e>0?Ex(1-n/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let f=o.hitFlashTime>0?Ex(1-(r-h.t)/o.hitFlashTime):0;if(f<=0)continue;let d=Math.cos(h.angle),u=Math.sin(h.angle);l.top=Math.max(l.top,f*Math.max(0,d)),l.right=Math.max(l.right,f*Math.max(0,u)),l.bottom=Math.max(l.bottom,f*Math.max(0,-d)),l.left=Math.max(l.left,f*Math.max(0,-u))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var sL=Object.freeze({Rep:K.glorpPurple,PA:K.cream,Tobble:K.tobbleMint}),Fs=(...n)=>Object.freeze(n.map(e=>Object.freeze({speaker:"Tobble",text:e}))),Rx=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),tobbleRevive:Fs("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:Fs("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:Fs("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:Fs("Two more reps! I'm good!"),tobbleFlank:Fs("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:Fs("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:Fs("Ooh, you closed your rings!"),tobbleHeadshot:Fs("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function Cx(n=()=>ae.feedback){let e=1/0,t=0,i=null,s={};return{say(r,o=!1){if(!Rx[r]||!o&&e<n().barkGap)return!1;let a=Rx[r],l=(s[r]||0)%a.length;return s[r]=l+1,i=typeof a[l]=="string"?{speaker:"Rep",text:a[l]}:a[l],t=n().barkTime,e=0,!0},tick(r){r>0&&(e+=r,t-=r)},current:()=>t>0&&i?{speaker:i.speaker,text:i.text}:null,reset(){e=1/0,t=0,i=null;for(let r of Object.keys(s))s[r]=0}}}var Px=4,wE=1.2,ro=[0,0,0];function TE(){let n=(e,t,i,s,r)=>{let o=new It(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new it(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new Tt(c,3)),o};return bn([n(.3,.16,.22,.08,K.cream),n(.34,.07,.26,.195,K.playerOrange)],!1)}function EE(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function Ix({scene:n,effects:e,sfx:t,fight:i,views:s}){let r=new Map(i.enemies.map((g,_)=>[g.id,s[_]])),o=new Map(i.enemies.map(g=>[g.id,g])),a=new Map,l=[],c=new qs(TE(),Vt({vertexColors:!0,rim:0}),Px);c.name="pickups",c.frustumCulled=!1,c.count=0,n.add(c);let h=new xn,f=0,d=Cx(),u=(g,_)=>Math.sin(Bh(g.yaw,g.pos,_));function m(g){let _=null,w=1/0;for(let M of i.enemies){let b=Math.hypot(M.pos[0]-g[0],M.pos[2]-g[2]);b<w&&(w=b,_=M)}return _}function x(g,_){let w=ae.feedback,M=ae.associate;for(let b of g)if(b.type==="bark")d.say(b.key,!!b.force);else if(b.type==="telegraph"){a.set(b.id,M.popTime+M.telegraphTime);let S=r.get(b.id),v=o.get(b.id);S&&S.glint(!0),v&&t.play("charge",w.chargeVolume,u(_,v.pos))}else if(b.type==="shotFx"){let S=m(b.from),v=S&&r.get(S.id);EE(b,v?v.tip:null,ro);let y=b.to[0]-ro[0],T=b.to[1]-ro[1],E=b.to[2]-ro[2],R=Math.hypot(y,T,E)||1;e.enemyFlash(ro,[y/R,T/R,E/R]),e.enemyTracer(ro,b.to);let D=Math.hypot(b.from[0]-_.pos[0],b.from[2]-_.pos[2]);t.play("blaster",w.blasterVolume*Math.min(1,8/Math.max(D,.001)),u(_,b.from))}}function p(){c.count=l.length;for(let g=0;g<l.length;g++)h.position.set(l[g].pos[0],l[g].pos[1],l[g].pos[2]),h.rotation.set(0,f*wE+g,0),h.updateMatrix(),c.setMatrixAt(g,h.matrix);c.instanceMatrix.needsUpdate=!0}return{handle:x,forceBark:g=>d.say(g,!0),bark:()=>d.current(),tick:g=>d.tick(g),update(g){if(g>0){f+=g;for(let[_,w]of a)if(w-g<=0){a.delete(_);let M=r.get(_);M&&M.glint(!1)}else a.set(_,w-g);l.length&&p()}},addPickup(g){l.length>=Px&&l.shift(),l.push({pos:[g[0],g[1],g[2]]}),p()},collect(g,_){let w=0;for(let M=l.length-1;M>=0;M--)Math.hypot(g[0]-l[M].pos[0],g[2]-l[M].pos[2])<=_&&(l.splice(M,1),w++);return w&&p(),w},count:()=>l.length,pickups:()=>l.map(g=>g.pos.slice()),reset(){l.length=0,c.count=0,c.instanceMatrix.needsUpdate=!0,a.clear(),d.reset()}}}var Lx=.05;function AE({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function Dx(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function RE(n){return n&&n.has("room")?"greyRoom":"kioskRow"}function CE(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var PE=2e3,IE=500,LE=500,DE=new Set(["enemyShot","playerHit","telegraph","death","clear","bark"]);function Nx({canvas:n,gl:e,params:t}){let i=zc(n,e),s=i.renderer,r=Bc(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=Wm();l.panelOpen=c.isOpen;let h=new Xs,f=new cn(ae.camera.fov,1,.05,100),d=Hc();h.add(d.mesh);let u=RE(t),m=u==="greyRoom"?hh:km,x=Um(m);h.add(x.group);let p=x.boxes,g=m.spawn,_=()=>Km(p,{...Zm(),exclude:m.coverExclude}),w=Dx(ae.cover),M=[],b=0,S=!1,v=ag({boxes:p,spawn:g.pos,coverEdges:_(),onState(q,Ue){M.push({state:q,from:Ue,t:b,tapped:S,auto:q==="coverSlide"&&!S&&(Ue==="move"||Ue==="sprint")}),M.length>PE&&M.shift()},onStep(q){T.dip(ae.feedback.stepDip),R.play("step",ae.feedback.stepVolume*(q.sprint?1.25:1))}});v.place(g.pos,g.yaw);let y=Lg(v);h.add(y.group);let T=Lm(),E=Am(),R=lg({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),D=cg(),z=dg(),L=Mg(h),G=Sg(document.body),H=$r(1),X=(m.dummies||[]).map(q=>{let Ue=gg(q),st=wg(Ue);return h.add(st.group),{dummy:Ue,view:st,wasAlive:!0}}),le=X.map(q=>q.dummy),O=Fg(),W=u==="kioskRow"?Tx({level:m,boxes:p,edges:_(),rand:$r(4242)}):null,B=W?W.enemies.map(q=>{let Ue=Ug(q);return h.add(Ue.group),Ue}):[],ge=new Map(W?W.enemies.map((q,Ue)=>[q,B[Ue]]):[]),de=W?Ix({scene:h,effects:L,sfx:R,fight:W,views:B}):null,J=W?W.targets():le,ve=[],Te=[],Ye={pos:[0,0,0],yaw:0},ie=[],De="-",Ke="-",ke=null,Je=null,Fe=0,N=null,Y=0,j=1,se=[],Z={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},xe=[0,0,0],Q=0,pe=[0,0,0];T.snap(g.pos,g.yaw,"normal",1);let Se=null,Be=!1,F=null,me=!1,Ee=!1,Ge=!1,ne={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1},Ze={reload:!1,weapon:null,fire:!1,interact:!1},Ae=!1,Re={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1},P={weapon:null,reload:!1,fire:!1,firePressed:!1},A=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function $(){let q=i.resize();f.aspect=q.aspect,f.updateProjectionMatrix()}$(),window.addEventListener("resize",$),n.addEventListener("click",()=>r.requestLock());let be=()=>{E.reset(),D.reset()};window.addEventListener("blur",be),document.addEventListener("pointerlockchange",()=>{r.isLocked()||be()});let fe=()=>R.unlock();window.addEventListener("pointerdown",fe),window.addEventListener("keydown",fe),window.addEventListener("keydown",q=>{q.repeat||md(q.target)||(q.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):q.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function we(){W&&W.reset(),O.reset(),z.reset(),Le(g.pos,g.yaw),ke=null,E.reset(),D.reset(),T.recenter(),L.clear(),se.length=0,ve.length=0,Je=null,N=null,Fe=0,Y=0,de&&de.reset();for(let q of B)q.reset()}function Pe(){v.state!=="downed"&&v.down(),z.cancelReload(),R.play("downed",ae.feedback.hurtVolume),de&&de.forceBark("downed")}function he(q){Te.push({t:b,type:q.type,id:q.id||null,accurate:!!q.accurate,hit:q.type==="playerHit",key:q.key||null}),Te.length>LE&&Te.shift()}function ue(q){let Ue=ae.feedback;Ye.pos[0]=v.pos[0],Ye.pos[1]=v.pos[1],Ye.pos[2]=v.pos[2],Ye.yaw=T.yaw;let st=W.step(q,{m:v,health:O});de.handle(st,Ye);for(let Ut of st)if(DE.has(Ut.type)&&he(Ut),Ut.type==="playerHit"){let yt=Bh(T.yaw,v.pos,Ut.from);ve.push({t:b,angle:yt});let Wn=Math.random()*2*Math.PI;T.kick(Ue.hitKick*Math.cos(Wn),Ue.hitKick*Math.sin(Wn)),R.play("hurt",Ue.hurtVolume,Math.sin(yt)),Ut.result==="downed"&&Pe()}else Ut.type==="clear"&&R.play("clear",Ue.killVolume);for(;ve.length&&b-ve[0].t>Ue.hitFlashTime;)ve.shift();let Dt=O.update(q);Dt==="revived"&&v.revive();let Et=Ae;if(Ae=!1,Dt==="bleedOut"||Et&&(O.downed||W.clear)){we();return}!O.downed&&de.collect(v.pos,ae.combat.pickupRadius)&&(z.addReserve("regret",ae.associate.ammoDrop),R.play("pickup",Ue.pickupVolume))}function Le(q,Ue){v.place(q,Ue),T.snap(q,Ue,ef(v),ar(v)),Q=v.slams}let U={pos:[0,0,0],dir:[0,0,1],fov:70},ce="normal",re=1,Ie=0,Ce=0,ye=0,Me=0,Ve=0,_e=0,ze=0,Ne=window.__cr;Ne.stats=()=>({fps:Ie,ms:Ce,calls:Ve,tris:_e,scale:i.scale(),characters:1+B.length}),Ne.player=()=>{let q=v.cover;return{pos:v.pos.slice(),state:v.state,speed:v.speed(),facing:v.facing,entries:v.entries,cover:q?{id:q.edge.id,kind:q.edge.kind,t:q.t,length:q.edge.length,pop:q.pop,exposed:q.exposed}:null,slams:v.slams,steps:v.steps,blind:q?q.blind:0,firing:!!v.firing}},Ne.gun=()=>{let q=z.current(),Ue=z.ammo[q],st=z.reload,Dt=ae.weapons[q];return{id:q,slot:z.slot,mag:Ue.mag,reserve:Ue.reserve,boost:Ue.boost,reload:st?{u:st.t/Math.max(Dt.reloadTime,ae.combat.minReloadTime),press:st.press}:null,switching:z.switching>0,spread:z.spreadOf(ke||"hip"),stance:ke}},Ne.dummies=()=>le.map(q=>({id:q.id,health:q.health,alive:q.alive,pos:q.pos.slice()})),Ne.level=()=>u,Ne.fight=()=>W?{started:W.started,clear:W.clear,tokens:W.tokens.held(),pickups:de.count(),pickupPos:de.pickups(),enemies:W.enemies.map(q=>({id:q.id,state:q.state,health:q.health,alive:q.alive,pos:q.pos.slice(),holds:W.tokens.holds(q.id),role:q.role,point:q.point?q.point.index:null,pop:q.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},Ne.health=()=>({hp:O.hp,max:ae.health.max,downed:O.downed,downT:O.downT}),Ne.hurt=q=>{O.damage(q)==="downed"&&Pe()},Ne.god=q=>{ae.health.godMode=q?1:0},Ne.fightLog=()=>Te.map(q=>({...q})),Ne.clearFightLog=()=>{Te.length=0},Ne.restart=()=>we(),Ne.shots=()=>ie.map(q=>({...q})),Ne.clearShots=()=>{ie.length=0},Ne.setGun=(q,Ue)=>z.set(q,Ue),Ne.look=(q,Ue)=>{T.yaw=q,T.pitch=Ue},Ne.camera=()=>{let q=U;return{pos:q.pos.slice(),fov:q.fov,inside:xa(p,q.pos,.1),mode:ce,side:re,yaw:T.yaw,pitch:T.pitch}},Ne.transitions=()=>M.map(q=>({...q})),Ne.clearTransitions=()=>{M.length=0},Ne.coverTarget=()=>{let q=F||{moveX:Se?Se.moveX:0,moveY:Se?Se.moveY:0},Ue=Aa(v.coverEdges,p,v.pos,Qd(v,{moveX:q.moveX||0,moveY:q.moveY||0,camYaw:T.yaw},[0,0]),T.yaw,ae.cover,ae.move.radius);return Ue?{id:Ue.edge.id,kind:Ue.edge.kind,dist:Ue.dist}:null},Ne.place=q=>{let Ue=q==="spawn"?g:m.features[q];Ue&&Le(Ue.pos,Ue.yaw)},Ne.at=(q,Ue,st=0)=>Le([q,0,Ue],st),Ne.drive=q=>{if(!q){me?Ee=!0:F=null;return}q.fire&&!(F&&F.fire)&&(Ze.fire=!0),F=q,Ee=!1,q.tap&&(me=!0),q.reload&&(Ze.reload=!0),q.interact&&(Ze.interact=!0),q.weapon&&(Ze.weapon=q.weapon)};function Oe(q){if(F){Re.moveX=F.moveX||0,Re.moveY=F.moveY||0,Re.sprint=!!F.sprint,Re.aim=!!F.aim,Re.tap=me;let Ue=D.update(!!F.fire,Ze.fire,!0);Ze.fire=!1,Re.fire=Ue.fire,P.fire=Ue.fire,P.firePressed=Ue.firePressed,P.reload=Ze.reload,P.weapon=Ze.weapon,Ze.reload=!1,Ze.weapon=null,me&&(me=!1,Ee&&(F=null,Ee=!1))}else{let Ue=Se.held;Re.moveX=Se.moveX,Re.moveY=Se.moveY,Re.tap=E.update(Ue.cover,ne.cover,q,ae.move.tapMax),Re.sprint=Ue.sprint||E.holding(),Re.aim=Ue.aim;let st=D.update(Ue.fire,ne.fire,!0);Re.fire=st.fire,P.fire=st.fire,P.firePressed=st.firePressed,P.reload=ne.reload,P.weapon=ne.weapon}return Ae=ne.interact||Ze.interact,ne.cover=!1,ne.fire=!1,ne.reload=!1,ne.weapon=null,ne.interact=!1,Ze.interact=!1,Re.camYaw=T.yaw,S=Re.tap,Re}let tt=q=>q.toFixed(1);function ct(){let q=v.cover;if(q)return`cover: ${q.edge.kind} ${q.edge.id}  t ${q.t.toFixed(2)}/${q.edge.length.toFixed(2)}  pop ${q.pop.toFixed(2)}`;let Ue=Ne.coverTarget();return Ue?`tap grabs: ${Ue.kind} ${Ue.dist.toFixed(1)} m`:"tap grabs: nothing"}function Rt(){let q=Ne.gun(),Ue=q.id;return`gun: ${_h[Ue].name} ${q.mag}/${ae.weapons[Ue].infiniteReserve>0?"\u221E":q.reserve}  ${q.stance||"-"}  spread ${q.spread.toFixed(1)}`}function Ot(){let q=r.padStatus(),Ue=[W?"GYMS OF WAR \u2014 CHECK-IN TURNSTILES":"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];W&&Ue.push("E / X: renew your membership when downed, another set when clear"),Ue.push("Sound starts after a click or key","",`${v.state}   ${v.speed().toFixed(2)} m/s`,ct(),Rt()),W?(Ue.push(`fight: ${W.enemies.filter(st=>st.alive).length}/${W.enemies.length}  tokens ${W.tokens.held().join(",")||"-"}  hp ${O.hp.toFixed(0)}`),Ue.push(`health: ${O.hp.toFixed(0)}/${ae.health.max}  ${O.downed?`downed ${O.downT.toFixed(1)}`:"-"}`)):Ue.push(`dummies: ${le.filter(st=>st.alive).length}/${le.length}  last: ${De} ${Ke}`),Ue.push(`${Math.round(Ie)} fps   ${tt(Ce)} ms   scale ${i.scale()}`,`${Ve} draw calls   ${_e} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${q}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=Ue.join(`
`)}let Ct=q=>ae.feedback[q];function Un(q){q.type==="shot"?Pn(q):q.type==="reloadStart"?R.play("magOut",Ct("reloadVolume")):q.type==="reloadPress"?(R.play(q.result,Ct("reloadVolume")),N=q.result,Y=0):q.type==="reloadDone"?R.play("magIn",Ct("reloadVolume")):q.type==="dry"&&R.play("dry",Ct("reloadVolume"))}function on(q,Ue){xg(q.dummy,Ue),q.dummy.alive&&!q.wasAlive&&q.view.respawn(),q.wasAlive=q.dummy.alive}let Lt=[0,0,0];function Pn(q){let Ue=ae.weapons[q.id],st=v.cover?v.cover.edge:null;of(v,ke,T.yaw,ae.combat,xe);let Dt=pg({lens:U.pos,view:U.dir,muzzle:xe,spreadDeg:q.spread,range:Ue.range,boxes:p,targets:J,ignoreBox:st?st.boxIndex:-1,rand:H,aimed:ke==="aim"}),Et=Dt.hit,Ut=Et.target,yt=null;Ut&&(yt=W?W.hurt(Ut,lf(Ue,Et.kind,q.mult),Et.kind==="head"?"head":"body"):vg(Ut,lf(Ue,Et.kind,q.mult))),De=Et.kind,Ke=Ut?Ut.id:"-",ie.push({t:b,kind:Et.kind,target:Ut?Ut.id:null,point:Et.point.slice(),stance:ke}),ie.length>IE&&ie.shift();let Wn=[Dt.dir[0],Dt.dir[1],Dt.dir[2]];if(se.push({id:q.id,from:xe.slice(),dir:Wn,hit:Et,target:Ut,result:yt}),yt==="kill"&&!W){let oo=X.find(fr=>fr.dummy===Ut);oo.wasAlive=!1}}function fi(q){let Ue=ae.weapons[q.id],st=ae.feedback,Dt=y.gunTip(Lt);T.kick(Ue.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Ue.kickYaw),L.flash(Dt,q.dir),L.tracer(Dt,q.hit.point),R.play(q.id==="regret"?"rifle":"pistol",st.shotVolume);let Et=[-q.dir[0],-q.dir[1],-q.dir[2]];if(q.hit.kind==="world")L.spark(q.hit.point,Et);else if(q.target){let Ut=W?ge.get(q.target):X.find(yt=>yt.dummy===q.target).view;q.result==="kill"?(W?(Ut.death(),de.addPickup(q.target.pos)):Ut.burst(),L.gel(q.hit.point,Et,st.killGelCount),L.receipts(q.target.pos.map((yt,Wn)=>Wn===1?yt+1.2:yt),st.receiptCount),Je="kill",Fe=st.killMarkerTime,R.play("kill",st.killVolume)):(W||Ut.hit(q.hit.kind),L.gel(q.hit.point,Et),Je=q.hit.kind,Fe=st.hitMarkerTime,R.play(q.hit.kind==="head"?"head":"hit",st.hitVolume))}}let ei=kc({before(q){if(Se=r.poll(),Be=!!F||me||AE({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=Be,!Be){E.reset(),D.reset(),ne.cover=!1,ne.fire=!1,ne.reload=!1,ne.weapon=null,ne.interact=!1;return}let st=Math.min(q,Lx);Ge=Se.held.aim||F&&F.aim,T.look(Se.lookDX,Se.lookDY,Se.lookX,Se.lookY,st,Ge,j),Se.pressed.cover&&(ne.cover=!0),Se.pressed.fire&&(ne.fire=!0),Se.pressed.reload&&(ne.reload=!0),Se.pressed.interact&&(ne.interact=!0);for(let[Dt,Et]of A)Se.pressed[Dt]&&(ne.weapon=Et)},step(q){if(!Be)return;let Ue=Dx(ae.cover);Ue!==w&&(w=Ue,v.coverEdges=_()),b+=q;let st=Oe(q);CE(st,P,{downed:!!W&&O.downed,busy:z.reload!==null||z.switching>0}),v.update(st,q),ke=fg(v);let Dt=z.update(P,ke,q);for(let Et of Dt)Un(Et);W&&(de.tick(q),ue(q));for(let Et of X)on(Et,q);_g(v.pos,m.ammoCrates,ae.combat.crateRadius)&&z.refill()},render(q,Ue){let st=Be?Math.min(Ue,Lx):0;Z.shot=se.length>0,Z.dir=U.dir,Z.stance=ke,Z.weapon=z.current(),y.update(q,st,Z);for(let C of X)C.view.update(st);for(let C of B)C.update(q,st);de&&de.update(st);let Dt=v.pos,Et=v.prevPos;for(let C=0;C<3;C++)pe[C]=Et[C]+(Dt[C]-Et[C])*q;v.slams>Q&&(Q=v.slams,T.bump(),R.play("thud",ae.cover.thudVolume));let Ut=ef(v);if(Ut==="aim"&&ce!=="aim"){let C=v.cover?v.cover.edge:null;T.hold(dn(U.pos,U.dir,ae.camera.holdRange,p,J,{ignoreBox:C?C.boxIndex:-1}).point)}ce=Ut,re=ar(v);let yt=T.update(st,{target:pe,mode:ce,side:re},p);U.pos[0]=yt.pos[0],U.pos[1]=yt.pos[1],U.pos[2]=yt.pos[2],U.fov=yt.fov,U.dir[0]=yt.dir[0],U.dir[1]=yt.dir[1],U.dir[2]=yt.dir[2],f.fov!==yt.fov&&(f.fov=yt.fov,f.updateProjectionMatrix()),y.fadeHeadFor(yt.pos,ae.camera.headHideDist,ae.camera.headHideMargin),f.position.set(yt.pos[0],yt.pos[1],yt.pos[2]),f.lookAt(yt.pos[0]+yt.dir[0],yt.pos[1]+yt.dir[1],yt.pos[2]+yt.dir[2]);for(let C of se)fi(C);se.length=0,L.update(st),Fe-=st,Fe<=0&&(Je=null),N&&(Y+=st,Y>=ae.feedback.reloadResultTime&&(N=null));let Wn=v.cover?v.cover.edge:null,oo=dn(U.pos,U.dir,100,p,J,{ignoreBox:Wn?Wn.boxIndex:-1});j=r.device()==="pad"&&oo.target?ae.look.pad.assist:1;let fr=!!v.cover&&v.cover.pop<.5,zh=ke||(v.cover&&(v.cover.pop>0||fr)?"aim":"hip"),ao=W?Ax({hp:O.hp,max:ae.health.max,downed:O.downed,downT:O.downT,hits:ve,now:b}):null;G.render(bg({arsenal:z,stance:ke,firing:Re.fire,covered:fr,device:r.device(),spreadDeg:z.spreadOf(zh),fov:f.fov,viewportH:n.clientHeight||window.innerHeight,marker:Je,reloadFlash:N,face:ao,bark:de?de.bark():null,objective:W?W.clear?"Check-in Turnstiles: set complete":W.started?"Get past the front desk":"Walk in":"",banner:W?O.downed?{title:`You've hit a plateau ${ao.downed.seconds}`,hint:"E / X renew your membership"}:W.clear?{title:"SET COMPLETE",hint:"Rest 60 seconds! E / X for another set"}:null:null})),d.update(performance.now()/1e3),x.update(st),s.render(h,f),Ve=s.info.render.calls,_e=s.info.render.triangles,ye++,Me+=Ue,Me>=1&&(Ie=ye/Me,Ce=Me/ye*1e3,ye=0,Me=0),ze+=Ue,ze>=.1&&(ze=0,Ot()),i.frameDone(Ue*1e3)}});t&&t.has("tune")&&c.toggle(),Se=r.poll(),T.update(0,{target:g.pos,mode:"normal",side:1},p),Ot(),ei.start()}var NE={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function Uf(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(NE[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||Uf("boot",n.message)});function OE(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){Uf("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Em({canvas:n,gl:e}):Nx({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{OE()}catch(n){Uf("boot",n&&n.message)}})();

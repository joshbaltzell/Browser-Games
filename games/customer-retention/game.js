/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var Ff=0,Kh=1,kf=2;var Fo=1,Bf=2,Pr=3,ls=0,qt=1,Yn=2,Ys=0,Ir=1,Jh=2,jh=3,Qh=4,zf=5;var qs=100,Hf=101,Gf=102,Vf=103,Wf=104,Xf=200,Yf=201,qf=202,$f=203,eu=204,tu=205,Zf=206,Kf=207,Jf=208,jf=209,Qf=210,ep=211,tp=212,np=213,ip=214,Xa=0,Ya=1,qa=2,_r=3,$a=4,Za=5,Ka=6,Ja=7,nu=0,sp=1,rp=2,mi=0,iu=1,su=2,ru=3,ou=4,au=5,lu=6,cu=7;var hu=300,$s=301,Lr=302,Rl=303,Cl=304,ja=1e3,di=1001,Qa=1002,nn=1003,op=1004;var ko=1005;var Sn=1006,Pl=1007;var Bi=1008;var Bn=1009,uu=1010,du=1011,Dr=1012,Il=1013,si=1014,qn=1015,ri=1016,Ll=1017,Dl=1018,Zs=1020,fu=35902,pu=35899,mu=1021,gu=1022,oi=1023,Ui=1026,zi=1027,Nl=1028,Ol=1029,cs=1030,Ul=1031;var Fl=1033,Bo=33776,zo=33777,Ho=33778,Go=33779,kl=35840,Bl=35841,zl=35842,Hl=35843,Gl=36196,Vl=37492,Wl=37496,Xl=37488,Yl=37489,Vo=37490,ql=37491,$l=37808,Zl=37809,Kl=37810,Jl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,hc=36495,uc=36283,dc=36284,Wo=36285,fc=36286;var ao=2300,el=2301,Va=2302,Hh=2303,Gh=2400,Vh=2401,Wh=2402;var ap=3200;var xu=0,lp=1,Hi="",ln="srgb",lo="srgb-linear",co="linear",St="srgb";var Wa=7680;var cp=519,hp=512,up=513,dp=514,vu=515,fp=516,pp=517,_u=518,yu=519,mp=35044,Nr=35048;var Mu="300 es",Wn=2e3,ho=2001;function Yg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gp(){let n=uo("canvas");return n.style.display="block",n}var af={},yr=null;function bu(...n){let e="THREE."+n.shift();yr?yr("log",e,...n):console.log(e,...n)}function xp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=xp(n);let e="THREE."+n.shift();if(yr)yr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=xp(n);let e="THREE."+n.shift();if(yr)yr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function no(...n){let e=n.join(" ");e in af||(af[e]=!0,rt(...n))}function vp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var _p={[Xa]:Xa,[qa]:Ka,[$a]:$a,[_r]:Za,[Ya]:Ya,[Ka]:qa,[Ja]:Ja,[Za]:_r},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=1234567,io=Math.PI/180,Mr=180/Math.PI;function Ks(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Su(n,e){return(n%e+e)%e}function $g(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Zg(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function Kg(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}function Jg(n,e=1){return e-Math.abs(Su(n,e*2)-e)}function jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ex(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tx(n,e){return n+Math.random()*(e-n)}function nx(n){return n*(.5-Math.random())}function ix(n){n!==void 0&&(lf=n);let e=lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sx(n){return n*io}function rx(n){return n*Mr}function ox(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ax(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*h,a*c);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yp(n,e){if(e.constructor===Float32Array)return n;let t=Tu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Mp(n,e){if(e.constructor===Float32Array)return n;let t=Tu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var pc={DEG2RAD:io,RAD2DEG:Mr,generateUUID:Ks,clamp:ut,euclideanModulo:Su,mapLinear:$g,inverseLerp:Zg,lerp:so,damp:Kg,pingpong:Jg,smoothstep:jg,smootherstep:Qg,randInt:ex,randFloat:tx,randFloatSpread:nx,seededRandom:ix,degToRad:sx,radToDeg:rx,isPowerOfTwo:ox,ceilPowerOfTwo:ax,floorPowerOfTwo:wu,setQuaternionFromProperEuler:lx,normalize:Mp,denormalize:yp},Iu=class Iu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Iu.prototype.isVector2=!0;var ze=Iu,wn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(f!==x||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*x;p<0&&(u=-u,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),S=Math.sin(_);g=Math.sin(g*_)/S,a=Math.sin(a*_)/S,l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+x*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-a*d,e[t+2]=c*m+h*d+a*u-l*f,e[t+3]=h*m-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lu=class Lu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lu.prototype.isVector3=!0;var k=Lu,_h=new k,cf=new wn,Du=class Du{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],x=s[0],p=s[3],g=s[6],_=s[1],S=s[4],M=s[7],b=s[2],T=s[5],v=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*p+a*S+l*T,r[6]=o*g+a*M+l*v,r[1]=c*x+h*_+f*b,r[4]=c*p+h*S+f*T,r[7]=c*g+h*M+f*v,r[2]=u*x+d*_+m*b,r[5]=u*p+d*S+m*T,r[8]=u*g+d*M+m*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,t)),this}rotate(e){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Du.prototype.isMatrix3=!0;var at=Du,yh=new at,hf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){let n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:e,whitePoint:i,transfer:co,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:St,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var vt=cx();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sr,tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=uo("canvas")),sr.width=e.width,sr.height=e.height;let s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hx=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mh(s[o].image)):r.push(Mh(s[o]))}else r=Mh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var ux=0,bh=new k,Tn=class n extends fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=Sn,o=Bi,a=oi,l=Bn,c=n.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ks(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=hu;Tn.DEFAULT_ANISOTROPY=1;var Nu=class Nu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(d+1)/2,b=(g+1)/2,T=(h+u)/4,v=(f+x)/4,y=(m+p)/4;return S>M&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=v/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=v/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nu.prototype.isVector4=!0;var Gt=Nu,nl=class extends fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Tn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends nl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fo=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Al=class Al{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,m,x,p)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Al().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,m=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,x=c*f;t[0]=u+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,x=c*f;t[0]=u-x*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,m=a*h,x=a*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dx,e,fx)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),ji.crossVectors(i,On),ji.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ji.crossVectors(i,On)),ji.normalize(),ya.crossVectors(On,ji),s[0]=ji.x,s[4]=ya.x,s[8]=On.x,s[1]=ji.y,s[5]=ya.y,s[9]=On.y,s[2]=ji.z,s[6]=ya.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],x=i[6],p=i[10],g=i[14],_=i[3],S=i[7],M=i[11],b=i[15],T=s[0],v=s[4],y=s[8],w=s[12],E=s[1],R=s[5],D=s[9],B=s[13],I=s[2],G=s[6],H=s[10],Y=s[14],ae=s[3],N=s[7],W=s[11],F=s[15];return r[0]=o*T+a*E+l*I+c*ae,r[4]=o*v+a*R+l*G+c*N,r[8]=o*y+a*D+l*H+c*W,r[12]=o*w+a*B+l*Y+c*F,r[1]=h*T+f*E+u*I+d*ae,r[5]=h*v+f*R+u*G+d*N,r[9]=h*y+f*D+u*H+d*W,r[13]=h*w+f*B+u*Y+d*F,r[2]=m*T+x*E+p*I+g*ae,r[6]=m*v+x*R+p*G+g*N,r[10]=m*y+x*D+p*H+g*W,r[14]=m*w+x*B+p*Y+g*F,r[3]=_*T+S*E+M*I+b*ae,r[7]=_*v+S*R+M*G+b*N,r[11]=_*y+S*D+M*H+b*W,r[15]=_*w+S*B+M*Y+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],x=e[7],p=e[11],g=e[15],_=l*d-c*u,S=a*d-c*f,M=a*u-l*f,b=o*d-c*h,T=o*u-l*h,v=o*f-a*h;return t*(x*_-p*S+g*M)-i*(m*_-p*b+g*T)+s*(m*S-x*b+g*v)-r*(m*M-x*T+p*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=t*a-i*o,S=t*l-s*o,M=t*c-r*o,b=i*l-s*a,T=i*c-r*a,v=s*c-r*l,y=h*x-f*m,w=h*p-u*m,E=h*g-d*m,R=f*p-u*x,D=f*g-d*x,B=u*g-d*p,I=_*B-S*D+M*R+b*E-T*w+v*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(a*B-l*D+c*R)*G,e[1]=(s*D-i*B-r*R)*G,e[2]=(x*v-p*T+g*b)*G,e[3]=(u*T-f*v-d*b)*G,e[4]=(l*E-o*B-c*w)*G,e[5]=(t*B-s*E+r*w)*G,e[6]=(p*M-m*v-g*S)*G,e[7]=(h*v-u*M+d*S)*G,e[8]=(o*D-a*E+c*y)*G,e[9]=(i*E-t*D-r*y)*G,e[10]=(m*T-x*M+g*_)*G,e[11]=(f*M-h*T-d*_)*G,e[12]=(a*w-o*R-l*y)*G,e[13]=(t*R-i*w+s*y)*G,e[14]=(x*S-m*b-p*_)*G,e[15]=(h*b-f*S+u*_)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,x=o*h,p=o*f,g=a*f,_=l*c,S=l*h,M=l*f,b=i.x,T=i.y,v=i.z;return s[0]=(1-(x+g))*b,s[1]=(d+M)*b,s[2]=(m-S)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(u+g))*T,s[6]=(p+_)*T,s[7]=0,s[8]=(m+S)*v,s[9]=(p-_)*v,s[10]=(1-(u+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=rr.set(s[0],s[1],s[2]).length(),a=rr.set(s[4],s[5],s[6]).length(),l=rr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let c=1/o,h=1/a,f=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Wn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Wn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ho)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Wn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ho)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Al.prototype.isMatrix4=!0;var pt=Al,rr=new k,ei=new pt,dx=new k(0,0,0),fx=new k(1,1,1),ji=new k,ya=new k,On=new k,df=new pt,ff=new wn,Pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},px=0,pf=new k,or=new wn,Pi=new pt,Ma=new k,Zr=new k,mx=new k,gx=new wn,mf=new k(1,0,0),gf=new k(0,1,0),xf=new k(0,0,1),vf={type:"added"},xx={type:"removed"},ar={type:"childadded",child:null},Sh={type:"childremoved",child:null},gn=class n extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Pn,i=new wn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new at}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ma.copy(e):Ma.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Zr,Ma,this.up):Pi.lookAt(Ma,Zr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Pi),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),ar.child=e,this.dispatchEvent(ar),ar.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new k(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vx={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function wh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=Su(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=wh(o,r,e+1/3),this.g=wh(o,r,e),this.b=wh(o,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let i=bp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return vt.workingToColorSpace(mn.copy(this),e),Math.round(ut(mn.r*255,0,255))*65536+Math.round(ut(mn.g*255,0,255))*256+Math.round(ut(mn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ln){vt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(ba);let i=so(Qi.h,ba.h,t),s=so(Qi.s,ba.s,t),r=so(Qi.l,ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new it;it.NAMES=bp;var Bs=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new k,Ii=new k,Th=new k,Li=new k,lr=new k,cr=new k,_f=new k,Eh=new k,Ah=new k,Rh=new k,Ch=new Gt,Ph=new Gt,Ih=new Gt,is=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),Ii.subVectors(i,t),Th.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Ii),l=ti.dot(Th),c=Ii.dot(Ii),h=Ii.dot(Th),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ch.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Ch.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,i),Ih.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ch,r.x),o.addScaledVector(Ph,r.y),o.addScaledVector(Ih,r.z),o}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),Ii.subVectors(e,t),ti.cross(Ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ti.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,i),cr.subVectors(r,i),Eh.subVectors(e,i);let l=lr.dot(Eh),c=cr.dot(Eh);if(l<=0&&c<=0)return t.copy(i);Ah.subVectors(e,s);let h=lr.dot(Ah),f=cr.dot(Ah);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(lr,o);Rh.subVectors(e,r);let d=lr.dot(Rh),m=cr.dot(Rh);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(cr,a);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return _f.subVectors(r,s),a=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(_f,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),wa.subVectors(this.max,Kr),hr.subVectors(e.a,Kr),ur.subVectors(e.b,Kr),dr.subVectors(e.c,Kr),es.subVectors(ur,hr),ts.subVectors(dr,ur),Ns.subVectors(hr,dr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ns.z,Ns.y,es.z,0,-es.x,ts.z,0,-ts.x,Ns.z,0,-Ns.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ns.y,Ns.x,0];return!Lh(t,hr,ur,dr,wa)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,hr,ur,dr,wa))?!1:(Ta.crossVectors(es,ts),t=[Ta.x,Ta.y,Ta.z],Lh(t,hr,ur,dr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new k,new k,new k,new k,new k,new k,new k,new k],ni=new k,Sa=new pi,hr=new k,ur=new k,dr=new k,es=new k,ts=new k,Ns=new k,Kr=new k,wa=new k,Ta=new k,Os=new k;function Lh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Os.fromArray(n,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=i.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yt=new k,Ea=new ze,_x=0,wt=class extends fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mp,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Tu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mp(e,this.array)}};var mo=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var go=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},yx=new pi,Jr=new k,Dh=new k,Xn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Dh)),this.expandByPoint(Jr.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mx=0,Vn=new pt,Nh=new gn,fr=new k,Un=new pi,jr=new pi,tn=new k,kt=class n extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yg(e)?go:mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Un.min,jr.min),Un.expandByPoint(tn),tn.addVectors(Un.max,jr.max),Un.expandByPoint(tn)):(Un.expandByPoint(jr.min),Un.expandByPoint(jr.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(fr.fromBufferAttribute(e,c),tn.add(fr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let w=0;w<i.count;w++)a[w]=new k,l[w]=new k;let h=new k,f=new k,u=new k,d=new ze,m=new ze,x=new ze,p=new k,g=new k;function _(w,E,R){c[w]=c[E]=c[R]=1,h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),f.sub(h),u.sub(h),m.sub(d),x.sub(d);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(D),a[w].add(p),a[E].add(p),a[R].add(p),l[w].add(g),l[E].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,E=S.length;w<E;++w){let R=S[w],D=R.start,B=R.count;for(let I=D,G=D+B;I<G;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new k,b=new k,T=new k,v=new k;function y(w){T.fromBufferAttribute(s,w),v.copy(T);let E=a[w];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(v,E);let D=b.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,D)}for(let w=0,E=i.count;w<E;++w)c[w]&&y(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,f=new k;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new wt(u,h,f)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Oh=new k,bx=new k,Sx=new at,ii=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Oh.subVectors(i,t).cross(bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sx.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wx=0,zs=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Ir,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ii().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ni=new k,Uh=new k,Aa=new k,Ra=new k,sl=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uh.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(Uh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Aa),a=Ra.dot(this.direction),l=-Ra.dot(Aa),c=Ra.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Uh).addScaledVector(Aa,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let i=Ni.dot(this.direction),s=Ni.dot(Ni)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,g=i.x-o.x,_=i.y-o.y,S=i.z-o.z,M=Math.abs(l),b=Math.abs(c),T=Math.abs(h),v,y,w,E,R,D,B,I,G,H,Y,ae;if(M>=b&&M>=T?(w=l,D=f,G=m,ae=g,l>=0?(v=c,y=h,E=u,R=d,B=x,I=p,H=_,Y=S):(v=h,y=c,E=d,R=u,B=p,I=x,H=S,Y=_)):b>=T?(w=c,D=u,G=x,ae=_,c>=0?(v=h,y=l,E=d,R=f,B=p,I=m,H=S,Y=g):(v=l,y=h,E=f,R=d,B=m,I=p,H=g,Y=S)):(w=h,D=d,G=p,ae=S,h>=0?(v=l,y=c,E=f,R=u,B=m,I=x,H=g,Y=_):(v=c,y=l,E=u,R=f,B=x,I=m,H=_,Y=g)),w===0)return null;let N=v/w,W=y/w,F=1/w,fe=E-N*D,ge=R-W*D,Z=B-N*G,_e=I-W*G,Ie=H-N*ae,Xe=Y-W*ae,te=Ie*_e-Xe*Z,z=fe*Xe-ge*Ie,j=Z*ge-_e*fe;if(s){if(te<0||z<0||j<0)return null}else if((te<0||z<0||j<0)&&(te>0||z>0||j>0))return null;let ee=te+z+j;if(ee===0)return null;let Te=F*(te*D+z*G+j*ae);return(ee>0?Te<0:Te>0)?null:this.at(Te/ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yf=new pt,Us=new sl,Ca=new Xn,Mf=new k,Pa=new k,Ia=new k,La=new k,Fh=new k,Da=new k,bf=new k,Na=new k,mt=class extends gn{constructor(e=new kt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Fh.fromBufferAttribute(f,e),o?Da.addScaledVector(Fh,h):Da.addScaledVector(Fh.sub(t),h))}t.add(Da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(Ca.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Ca,Mf)===null||Us.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(yf.copy(r).invert(),Us.copy(e.ray).applyMatrix4(yf),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,b=S;M<b;M+=3){let T=a.getX(M),v=a.getX(M+1),y=a.getX(M+2);s=Oa(this,g,e,i,c,h,f,T,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);s=Oa(this,o,e,i,c,h,f,_,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,b=S;M<b;M+=3){let T=M,v=M+1,y=M+2;s=Oa(this,g,e,i,c,h,f,T,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=p,S=p+1,M=p+2;s=Oa(this,o,e,i,c,h,f,_,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Tx(n,e,t,i,s,r,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ls,a),l===null)return null;Na.copy(a),Na.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:n}}function Oa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Pa),n.getVertexPosition(l,Ia),n.getVertexPosition(c,La);let h=Tx(n,e,t,i,Pa,Ia,La,bf);if(h){let f=new k;is.getBarycoord(bf,Pa,Ia,La,f),s&&(h.uv=is.getInterpolatedAttribute(s,a,l,c,f,new ze)),r&&(h.uv1=is.getInterpolatedAttribute(r,a,l,c,f,new ze)),o&&(h.normal=is.getInterpolatedAttribute(o,a,l,c,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new k,materialIndex:0};is.getNormal(Pa,Ia,La,u.normal),h.face=u,h.barycoord=f}return h}var xo=class extends Tn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=nn,h=nn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new pt,Sf=new pt,Ua=[],wf=new pi,Ex=new pt,Qr=new mt,eo=new Xn,Hs=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),wf.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),eo.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Sf.multiplyMatrices(i,pr),Qr.matrixWorld=Sf,Qr.raycast(e,Ua);for(let o=0,a=Ua.length;o<a;o++){let l=Ua[o];l.instanceId=r,l.object=this,t.push(l)}Ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xo(new Float32Array(s*this.count),s,this.count,Nl,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Xn,Ax=new ze(.5,.5),Fa=new k,Gs=class{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],S=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,g-m,b-_).normalize(),s[1].setComponents(c+o,d+h,g+m,b+_).normalize(),s[2].setComponents(c+a,d+f,g+x,b+S).normalize(),s[3].setComponents(c-a,d-f,g-x,b-S).normalize(),i)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,d-u,g-p,b-M).normalize();else if(s[4].setComponents(c-l,d-u,g-p,b-M).normalize(),t===Wn)s[5].setComponents(c+l,d+u,g+p,b+M).normalize();else if(t===ho)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=Ax.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Tf=new pt,rl=class n{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Tf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Gs),i[s].setFromProjectionMatrix(Tf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var vo=class extends Tn{constructor(e=[],t=$s,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_o=class extends Tn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends Tn{constructor(e,t,i=si,s,r,o,a=nn,l=nn,c,h=Ui,f=1){if(h!==Ui&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},yo=class extends ki{constructor(e,t=si,i=$s,s,r,o=nn,a=nn,l,c=Ui){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mo=class extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function m(x,p,g,_,S,M,b,T,v,y,w){let E=M/v,R=b/y,D=M/2,B=b/2,I=T/2,G=v+1,H=y+1,Y=0,ae=0,N=new k;for(let W=0;W<H;W++){let F=W*R-B;for(let fe=0;fe<G;fe++){let ge=fe*E-D;N[x]=ge*_,N[p]=F*S,N[g]=I,c.push(N.x,N.y,N.z),N[x]=0,N[p]=0,N[g]=T>0?1:-1,h.push(N.x,N.y,N.z),f.push(fe/v),f.push(1-W/y),Y+=1}}for(let W=0;W<y;W++)for(let F=0;F<v;F++){let fe=u+F+G*W,ge=u+F+G*(W+1),Z=u+(F+1)+G*(W+1),_e=u+(F+1)+G*W;l.push(fe,ge,_e),l.push(ge,Z,_e),ae+=6}a.addGroup(d,ae,w),d+=ae,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xn=class n extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,x=[],p=i/2,g=0;_(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function _(){let M=new k,b=new k,T=0,v=(t-e)/i;for(let y=0;y<=r;y++){let w=[],E=y/r,R=E*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,I=B*l+a,G=Math.sin(I),H=Math.cos(I);b.x=R*G,b.y=-E*i+p,b.z=R*H,f.push(b.x,b.y,b.z),M.set(G,v,H).normalize(),u.push(M.x,M.y,M.z),d.push(B,1-E),w.push(m++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let E=x[w][y],R=x[w+1][y],D=x[w+1][y+1],B=x[w][y+1];(e>0||w!==0)&&(h.push(E,R,B),T+=3),(t>0||w!==r-1)&&(h.push(R,D,B),T+=3)}c.addGroup(g,T,0),g+=T}function S(M){let b=m,T=new ze,v=new k,y=0,w=M===!0?e:t,E=M===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*E,0),u.push(0,E,0),d.push(.5,.5),m++;let R=m;for(let D=0;D<=s;D++){let I=D/s*l+a,G=Math.cos(I),H=Math.sin(I);v.x=w*H,v.y=p*E,v.z=w*G,f.push(v.x,v.y,v.z),u.push(0,E,0),T.x=G*.5+.5,T.y=H*.5*E+.5,d.push(T.x,T.y),m++}for(let D=0;D<s;D++){let B=b+D,I=R+D;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bo=class n extends kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new k,M=new k,b=new k;for(let T=0;T<t.length;T+=3)d(t[T+0],S),d(t[T+1],M),d(t[T+2],b),l(S,M,b,_)}function l(_,S,M,b){let T=b+1,v=[];for(let y=0;y<=T;y++){v[y]=[];let w=_.clone().lerp(M,y/T),E=S.clone().lerp(M,y/T),R=T-y;for(let D=0;D<=R;D++)D===0&&y===T?v[y][D]=w:v[y][D]=w.clone().lerp(E,D/R)}for(let y=0;y<T;y++)for(let w=0;w<2*(T-y)-1;w++){let E=Math.floor(w/2);w%2===0?(u(v[y][E+1]),u(v[y+1][E]),u(v[y][E])):(u(v[y][E+1]),u(v[y+1][E+1]),u(v[y+1][E]))}}function c(_){let S=new k;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(_),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let _=new k;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let M=p(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}m(),f()}function f(){for(let _=0;_<o.length;_+=6){let S=o[_+0],M=o[_+2],b=o[_+4],T=Math.max(S,M,b),v=Math.min(S,M,b);T>.9&&v<.1&&(S<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function d(_,S){let M=_*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function m(){let _=new k,S=new k,M=new k,b=new k,T=new ze,v=new ze,y=new ze;for(let w=0,E=0;w<r.length;w+=9,E+=6){_.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),T.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(_).add(S).add(M).divideScalar(3);let R=p(b);x(T,E+0,_,R),x(v,E+2,S,R),x(y,E+4,M,R)}}function x(_,S,M,b){b<0&&_.x===1&&(o[S]=_.x-1),M.x===0&&M.z===0&&(o[S]=b/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ze:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new k,s=[],r=[],o=[],a=new k,l=new pt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Tr=class extends En{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ze){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ol=class extends Tr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ef=new k,Af=new k,kh=new Eu,Bh=new Eu,zh=new Eu,al=class extends En{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Af.subVectors(s[0],s[1]).add(s[0]),c=Af);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ef.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ef),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),kh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,p),Bh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,p),zh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Bh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),zh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(kh.calc(l),Bh.calc(l),zh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Rx(n,e){let t=1-n;return t*t*e}function Cx(n,e){return 2*(1-n)*n*e}function Px(n,e){return n*n*e}function ro(n,e,t,i){return Rx(n,e)+Cx(n,t)+Px(n,i)}function Ix(n,e){let t=1-n;return t*t*t*e}function Lx(n,e){let t=1-n;return 3*t*t*n*e}function Dx(n,e){return 3*(1-n)*n*n*e}function Nx(n,e){return n*n*n*e}function oo(n,e,t,i,s){return Ix(n,e)+Lx(n,t)+Dx(n,i)+Nx(n,s)}var So=class extends En{constructor(e=new ze,t=new ze,i=new ze,s=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ze){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oo(e,s.x,r.x,o.x,a.x),oo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends En{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oo(e,s.x,r.x,o.x,a.x),oo(e,s.y,r.y,o.y,a.y),oo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wo=class extends En{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends En{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends En{constructor(e=new ze,t=new ze,i=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ze){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ro(e,s.x,r.x,o.x),ro(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends En{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ro(e,s.x,r.x,o.x),ro(e,s.y,r.y,o.y),ro(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Rf(a,l.x,c.x,h.x,f.x),Rf(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ze().fromArray(s))}return this}},hl=Object.freeze({__proto__:null,ArcCurve:ol,CatmullRomCurve3:al,CubicBezierCurve:So,CubicBezierCurve3:ll,EllipseCurve:Tr,LineCurve:wo,LineCurve3:cl,QuadraticBezierCurve:To,QuadraticBezierCurve3:Eo,SplineCurve:Ao}),ul=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new hl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vs=class extends ul{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new wo(this.currentPoint.clone(),new ze(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new To(this.currentPoint.clone(),new ze(e,t),new ze(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new So(this.currentPoint.clone(),new ze(e,t),new ze(i,s),new ze(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ao(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Tr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Er=class extends Vs{constructor(e){super(e),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Vs().fromJSON(s))}return this}};function Ox(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Sp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=zx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Ro(r,o,t,a,l,c,0),o}function Sp(n,e,t,i,s){let r;if(s===Jx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Cf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Cf(o/i|0,n[o],n[o+1],r);return r&&Ar(r,r.next)&&(Po(r),r=r.next),r}function Ws(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ar(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Po(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ro(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Xx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Fx(n,i,s,r):Ux(n)){e.push(l.i,n.i,c.i),Po(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=kx(Ws(n),e),Ro(n,e,t,i,s,r,2)):o===2&&Bx(n,e,t,i,s,r):Ro(Ws(n),e,t,i,s,r,1);break}}}function Ux(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&to(s,a,r,l,o,c,m.x,m.y)&&Ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),x=Math.max(a,l,c),p=Math.max(h,f,u),g=Xh(d,m,e,t,i),_=Xh(x,p,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=_;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&to(a,h,l,f,c,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&to(a,h,l,f,c,u,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&to(a,h,l,f,c,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&to(a,h,l,f,c,u,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function kx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ar(i,s)&&Tp(i,t,t.next,s)&&Co(i,s)&&Co(s,i)&&(e.push(i.i,t.i,s.i),Po(t),Po(t.next),t=n=s),t=t.next}while(t!==n);return Ws(t)}function Bx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$x(o,a)){let l=Ep(o,a);o=Ws(o,o.next),l=Ws(l,l.next),Ro(o,e,t,i,s,r,0),Ro(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function zx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Sp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(qx(c))}s.sort(Hx);for(let r=0;r<s.length;r++)t=Gx(s[r],t);return t}function Hx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Gx(n,e){let t=Vx(n,e);if(!t)return e;let i=Ep(t,n);return Ws(i,i.next),Ws(t,t.next)}function Vx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Ar(n,t))return t;do{if(Ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&wp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Co(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Wx(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Wx(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function Xx(n,e,t,i){let s=n;do s.z===0&&(s.z=Xh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Yx(s)}function Yx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Xh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function qx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wp(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function to(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wp(n,e,t,i,s,r,o,a)}function $x(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Zx(n,e)&&(Co(n,e)&&Co(e,n)&&Kx(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||Ar(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ar(n,e){return n.x===e.x&&n.y===e.y}function Tp(n,e,t,i){let s=Ba(Ht(n,e,t)),r=Ba(Ht(n,e,i)),o=Ba(Ht(t,i,n)),a=Ba(Ht(t,i,e));return!!(s!==r&&o!==a||s===0&&ka(n,t,e)||r===0&&ka(n,i,e)||o===0&&ka(t,n,i)||a===0&&ka(t,e,i))}function ka(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ba(n){return n>0?1:n<0?-1:0}function Zx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Co(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function Kx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ep(n,e){let t=Yh(n.i,n.x,n.y),i=Yh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Cf(n,e,t,i){let s=Yh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var qh=class{static triangulate(e,t,i=2){return Ox(e,t,i)}},ks=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Pf(e),If(i,e);let o=e.length;t.forEach(Pf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,If(i,t[l]);let a=qh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Pf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function If(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Io=class n extends kt{constructor(e=new Er([new ze(.5,.5),new ze(-.5,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:jx,S,M=!1,b,T,v,y;if(g){S=g.getSpacedPoints(h),M=!0,u=!1;let X=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,X),T=new k,v=new k,y=new k}u||(p=0,d=0,m=0,x=0);let w=a.extractPoints(c),E=w.shape,R=w.holes;if(!ks.isClockWise(E)){E=E.reverse();for(let X=0,ne=R.length;X<ne;X++){let pe=R[X];ks.isClockWise(pe)&&(R[X]=pe.reverse())}}function B(X){let pe=10000000000000001e-36,xe=X[0];for(let re=1;re<=X.length;re++){let Ue=re%X.length,Fe=X[Ue],Ye=Fe.x-xe.x,Be=Fe.y-xe.y,Je=Ye*Ye+Be*Be,U=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(xe.x),Math.abs(xe.y)),ye=pe*U*U;if(Je<=ye){X.splice(Ue,1),re--;continue}xe=Fe}}B(E),R.forEach(B);let I=R.length,G=E;for(let X=0;X<I;X++){let ne=R[X];E=E.concat(ne)}function H(X,ne,pe){return ne||ot("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(ne,pe)}let Y=E.length;function ae(X,ne,pe){let xe,re,Ue,Fe=X.x-ne.x,Ye=X.y-ne.y,Be=pe.x-X.x,Je=pe.y-X.y,U=Fe*Fe+Ye*Ye,ye=Fe*Je-Ye*Be;if(Math.abs(ye)>Number.EPSILON){let Ce=Math.sqrt(U),Ze=Math.sqrt(Be*Be+Je*Je),oe=ne.x-Ye/Ce,nt=ne.y+Fe/Ce,Ve=pe.x-Je/Ze,Ne=pe.y+Be/Ze,P=((Ve-oe)*Je-(Ne-nt)*Be)/(Fe*Je-Ye*Be);xe=oe+Fe*P-X.x,re=nt+Ye*P-X.y;let A=xe*xe+re*re;if(A<=2)return new ze(xe,re);Ue=Math.sqrt(A/2)}else{let Ce=!1;Fe>Number.EPSILON?Be>Number.EPSILON&&(Ce=!0):Fe<-Number.EPSILON?Be<-Number.EPSILON&&(Ce=!0):Math.sign(Ye)===Math.sign(Je)&&(Ce=!0),Ce?(xe=-Ye,re=Fe,Ue=Math.sqrt(U)):(xe=Fe,re=Ye,Ue=Math.sqrt(U/2))}return new ze(xe/Ue,re/Ue)}let N=[];for(let X=0,ne=G.length,pe=ne-1,xe=X+1;X<ne;X++,pe++,xe++)pe===ne&&(pe=0),xe===ne&&(xe=0),N[X]=ae(G[X],G[pe],G[xe]);let W=[],F,fe=N.concat();for(let X=0,ne=I;X<ne;X++){let pe=R[X];F=[];for(let xe=0,re=pe.length,Ue=re-1,Fe=xe+1;xe<re;xe++,Ue++,Fe++)Ue===re&&(Ue=0),Fe===re&&(Fe=0),F[xe]=ae(pe[xe],pe[Ue],pe[Fe]);W.push(F),fe=fe.concat(F)}let ge;if(p===0)ge=ks.triangulateShape(G,R);else{let X=[],ne=[];for(let pe=0;pe<p;pe++){let xe=pe/p,re=d*Math.cos(xe*Math.PI/2),Ue=m*Math.sin(xe*Math.PI/2)+x;for(let Fe=0,Ye=G.length;Fe<Ye;Fe++){let Be=H(G[Fe],N[Fe],Ue);z(Be.x,Be.y,-re),xe===0&&X.push(Be)}for(let Fe=0,Ye=I;Fe<Ye;Fe++){let Be=R[Fe];F=W[Fe];let Je=[];for(let U=0,ye=Be.length;U<ye;U++){let Ce=H(Be[U],F[U],Ue);z(Ce.x,Ce.y,-re),xe===0&&Je.push(Ce)}xe===0&&ne.push(Je)}}ge=ks.triangulateShape(X,ne)}let Z=ge.length,_e=m+x;for(let X=0;X<Y;X++){let ne=u?H(E[X],fe[X],_e):E[X];M?(v.copy(b.normals[0]).multiplyScalar(ne.x),T.copy(b.binormals[0]).multiplyScalar(ne.y),y.copy(S[0]).add(v).add(T),z(y.x,y.y,y.z)):z(ne.x,ne.y,0)}for(let X=1;X<=h;X++)for(let ne=0;ne<Y;ne++){let pe=u?H(E[ne],fe[ne],_e):E[ne];M?(v.copy(b.normals[X]).multiplyScalar(pe.x),T.copy(b.binormals[X]).multiplyScalar(pe.y),y.copy(S[X]).add(v).add(T),z(y.x,y.y,y.z)):z(pe.x,pe.y,f/h*X)}for(let X=p-1;X>=0;X--){let ne=X/p,pe=d*Math.cos(ne*Math.PI/2),xe=m*Math.sin(ne*Math.PI/2)+x;for(let re=0,Ue=G.length;re<Ue;re++){let Fe=H(G[re],N[re],xe);z(Fe.x,Fe.y,f+pe)}for(let re=0,Ue=R.length;re<Ue;re++){let Fe=R[re];F=W[re];for(let Ye=0,Be=Fe.length;Ye<Be;Ye++){let Je=H(Fe[Ye],F[Ye],xe);M?z(Je.x,Je.y+S[h-1].y,S[h-1].x+pe):z(Je.x,Je.y,f+pe)}}}Ie(),Xe();function Ie(){let X=s.length/3;if(u){let ne=0,pe=Y*ne;for(let xe=0;xe<Z;xe++){let re=ge[xe];j(re[2]+pe,re[1]+pe,re[0]+pe)}ne=h+p*2,pe=Y*ne;for(let xe=0;xe<Z;xe++){let re=ge[xe];j(re[0]+pe,re[1]+pe,re[2]+pe)}}else{for(let ne=0;ne<Z;ne++){let pe=ge[ne];j(pe[2],pe[1],pe[0])}for(let ne=0;ne<Z;ne++){let pe=ge[ne];j(pe[0]+Y*h,pe[1]+Y*h,pe[2]+Y*h)}}i.addGroup(X,s.length/3-X,0)}function Xe(){let X=s.length/3,ne=0;te(G,ne),ne+=G.length;for(let pe=0,xe=R.length;pe<xe;pe++){let re=R[pe];te(re,ne),ne+=re.length}i.addGroup(X,s.length/3-X,1)}function te(X,ne){let pe=X.length;for(;--pe>=0;){let xe=pe,re=pe-1;re<0&&(re=X.length-1);for(let Ue=0,Fe=h+p*2;Ue<Fe;Ue++){let Ye=Y*Ue,Be=Y*(Ue+1),Je=ne+xe+Ye,U=ne+re+Ye,ye=ne+re+Be,Ce=ne+xe+Be;ee(Je,U,ye,Ce)}}}function z(X,ne,pe){l.push(X),l.push(ne),l.push(pe)}function j(X,ne,pe){Te(X),Te(ne),Te(pe);let xe=s.length/3,re=_.generateTopUV(i,s,xe-3,xe-2,xe-1);he(re[0]),he(re[1]),he(re[2])}function ee(X,ne,pe,xe){Te(X),Te(ne),Te(xe),Te(ne),Te(pe),Te(xe);let re=s.length/3,Ue=_.generateSideWallUV(i,s,re-6,re-3,re-2,re-1);he(Ue[0]),he(Ue[1]),he(Ue[3]),he(Ue[1]),he(Ue[2]),he(Ue[3])}function Te(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function he(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Qx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hl[s.type]().fromJSON(s)),new n(i,e.options)}},jx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ze(r,o),new ze(a,l),new ze(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ze(o,1-l),new ze(c,1-f),new ze(u,1-m),new ze(x,1-g)]:[new ze(a,1-l),new ze(h,1-f),new ze(d,1-m),new ze(p,1-g)]}};function Qx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Lo=class n extends bo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Do=class n extends kt{constructor(e=[new ze(0,-.5),new ze(.5,0),new ze(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new k,u=new ze,d=new k,m=new k,x=new k,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=t;_++){let S=i+_*h*s,M=Math.sin(S),b=Math.cos(S);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*M,f.y=e[T].y,f.z=e[T].x*b,o.push(f.x,f.y,f.z),u.x=_/t,u.y=T/(e.length-1),a.push(u.x,u.y);let v=l[3*T+0]*M,y=l[3*T+1],w=l[3*T+0]*b;c.push(v,y,w)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let M=S+_*e.length,b=M,T=M+e.length,v=M+e.length+1,y=M+1;r.push(b,T,y),r.push(v,y,T)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Rr=class n extends bo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ss=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let S=0;S<c;S++){let M=S*f-r;m.push(M,-_,0),x.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let S=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),T=_+1+c*g;d.push(S,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var vn=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new k,u=new k,d=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let _=[],S=g/i,M=o+S*a,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let w=y/t,E=s+w*r;f.x=-T*Math.cos(E),f.y=b,f.z=T*Math.sin(E),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(w+v,1-S),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let S=h[g][_+1],M=h[g][_],b=h[g+1][_],T=h[g+1][_+1];(g!==0||o>0)&&d.push(S,M,T),(g!==i-1||l<Math.PI)&&d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xs=class n extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new k,d=new k,m=new k;for(let x=0;x<=i;x++){let p=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,S=(s+1)*(x-1)+p,M=(s+1)*x+p;l.push(g,_,M),l.push(_,S,M)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var No=class n extends kt{constructor(e=new Eo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new ze,h=new k,f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function x(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),_(),g()}function p(S){h=e.getPointAt(S/t,h);let M=o.normals[S],b=o.binormals[S];for(let T=0;T<=s;T++){let v=T/s*Math.PI*2,y=Math.sin(v),w=-Math.cos(v);l.x=w*M.x+y*b.x,l.y=w*M.y+y*b.y,l.z=w*M.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let b=(s+1)*(S-1)+(M-1),T=(s+1)*S+(M-1),v=(s+1)*S+M,y=(s+1)*(S-1)+M;m.push(b,T,y),m.push(T,v,y)}}function _(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Js(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Lf(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=Js(n[t]);for(let s in i)e[s]=i[s]}return e}function Lf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ev(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Au(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var Ap={clone:Js,merge:yn},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dl=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fl=class extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function za(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var rs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends rs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=e,a=2*t-i;break;case Wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:o=e,l=2*i-t;break;case Wh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,S=(-1-d)*p+(1.5+d)*x+.5*m,M=d*p-d*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+S*o[l+b]+M*o[f+b];return r}},gl=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},xl=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vl=class extends rs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=d*u+m*2,_=f[g],S=f[g+1],M=e*u+m*2,b=h[M],T=h[M+1],v=sv(i,t,_,b,s);r[m]=Rp(v,x,S,T,p)}return r}};function Rp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function iv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function sv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Rp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=iv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),za(e.settings)&&(i.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case el:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case Hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return rt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return el;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return Hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;za(this.settings)&&(Df(this.settings.inTangents,e),Df(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;za(this.settings)&&(Nf(this.settings.inTangents,e),Nf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ot("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&qg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let x=t[f+m];if(x!==t[u+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Df(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Nf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=el;var os=class extends kn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ao;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};_l.prototype.ValueTypeName="color";var yl=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};yl.prototype.ValueTypeName="number";var Ml=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Oo=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends kn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ao;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};bl.prototype.ValueTypeName="vector";var Sl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cp=new Sl,wl=class{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=new k,Ga=new wn,ui=new k,Uo=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,Ga,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ha,Ga,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new k,Of=new ze,Uf=new ze,cn=class extends Uo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Of,Uf),t.subVectors(Uf,Of)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tl=class extends Uo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var gr=-90,xr=1,Cr=class extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(gr,xr,e,t);s.layers=this.layers,this.add(s);let r=new cn(gr,xr,e,t);r.layers=this.layers,this.add(r);let o=new cn(gr,xr,e,t);o.layers=this.layers,this.add(o);let a=new cn(gr,xr,e,t);a.layers=this.layers,this.add(a);let l=new cn(gr,xr,e,t);l.layers=this.layers,this.add(l);let c=new cn(gr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},El=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ru="\\[\\]\\.:\\/",rv=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",ov="[^"+Ru.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",Cu),lv=/(WCOD+)?/.source.replace("WCOD",ov),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),uv=new RegExp("^"+av+lv+cv+hv+"$"),dv=["material","materials","bones","map"],$h=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(e){let t=uv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=$h;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RT=new Float32Array(1);var Ou=class Ou{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Ou.prototype.isMatrix2=!0;var Zh=Ou;function Pu(n,e,t,i){let s=fv(i);switch(t){case mu:return n*e;case Nl:return n*e/s.components*s.byteLength;case Ol:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case Ul:return n*e*2/s.components*s.byteLength;case gu:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case Fl:return n*e*4/s.components*s.byteLength;case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(n,16)*Math.max(e,8)/4;case kl:case zl:return Math.max(n,8)*Math.max(e,8)/2;case Gl:case Vl:case Xl:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Vo:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wo:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fv(n){switch(n){case Bn:case uu:return{byteLength:1,components:1};case Dr:case du:case ri:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case si:case Il:case qn:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yv(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
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
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
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
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
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
#endif`,Pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ov=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wv=`#define PI 3.141592653589793
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
} // validated`,Xv=`vec3 transformedNormal = objectNormal;
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
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
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
}`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,v_=`uniform sampler2D dfgLUT;
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
}`,__=`
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P_=`#if defined( USE_POINTS_UV )
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
#endif`,I_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
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
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
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
#endif`,F_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
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
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`uniform float backgroundBlurriness;
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`#define DISTANCE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,By=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,qy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Ky=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,jy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Mv,alphahash_pars_fragment:bv,alphamap_fragment:Sv,alphamap_pars_fragment:wv,alphatest_fragment:Tv,alphatest_pars_fragment:Ev,aomap_fragment:Av,aomap_pars_fragment:Rv,batching_pars_vertex:Cv,batching_vertex:Pv,begin_vertex:Iv,beginnormal_vertex:Lv,bsdfs:Dv,iridescence_fragment:Nv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Bv,color_fragment:zv,color_pars_fragment:Hv,color_pars_vertex:Gv,color_vertex:Vv,common:Wv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:Yv,displacementmap_vertex:qv,emissivemap_fragment:$v,emissivemap_pars_fragment:Zv,colorspace_fragment:Kv,colorspace_pars_fragment:Jv,envmap_fragment:jv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:e_,envmap_pars_vertex:t_,envmap_physical_pars_fragment:d_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:s_,fog_fragment:r_,fog_pars_fragment:o_,gradientmap_pars_fragment:a_,lightmap_pars_fragment:l_,lights_lambert_fragment:c_,lights_lambert_pars_fragment:h_,lights_pars_begin:u_,lights_toon_fragment:f_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:x_,lights_physical_pars_fragment:v_,lights_fragment_begin:__,lights_fragment_maps:y_,lights_fragment_end:M_,lightprobes_pars_fragment:b_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:E_,map_fragment:A_,map_pars_fragment:R_,map_particle_fragment:C_,map_particle_pars_fragment:P_,metalnessmap_fragment:I_,metalnessmap_pars_fragment:L_,morphinstance_vertex:D_,morphcolor_vertex:N_,morphnormal_vertex:O_,morphtarget_pars_vertex:U_,morphtarget_vertex:F_,normal_fragment_begin:k_,normal_fragment_maps:B_,normal_pars_fragment:z_,normal_pars_vertex:H_,normal_vertex:G_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:X_,clearcoat_pars_fragment:Y_,iridescence_pars_fragment:q_,opaque_fragment:$_,packing:Z_,premultiplied_alpha_fragment:K_,project_vertex:J_,dithering_fragment:j_,dithering_pars_fragment:Q_,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:sy,shadowmask_pars_fragment:ry,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:hy,specularmap_pars_fragment:uy,tonemapping_fragment:dy,tonemapping_pars_fragment:fy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:xy,uv_vertex:vy,worldpos_vertex:_y,background_vert:yy,background_frag:My,backgroundCube_vert:by,backgroundCube_frag:Sy,cube_vert:wy,cube_frag:Ty,depth_vert:Ey,depth_frag:Ay,distance_vert:Ry,distance_frag:Cy,equirect_vert:Py,equirect_frag:Iy,linedashed_vert:Ly,linedashed_frag:Dy,meshbasic_vert:Ny,meshbasic_frag:Oy,meshlambert_vert:Uy,meshlambert_frag:Fy,meshmatcap_vert:ky,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:Hy,meshphong_vert:Gy,meshphong_frag:Vy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:Yy,meshtoon_frag:qy,points_vert:$y,points_frag:Zy,shadow_vert:Ky,shadow_frag:Jy,sprite_vert:jy,sprite_frag:Qy},qe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},xi={basic:{uniforms:yn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:yn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:yn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:yn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:yn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new it(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:yn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:yn([qe.points,qe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:yn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:yn([qe.common,qe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:yn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:yn([qe.sprite,qe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:yn([qe.common,qe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:yn([qe.lights,qe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};xi.physical={uniforms:yn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var mc={r:0,b:0,g:0},eM=new pt,jp=new at;jp.set(-1,0,0,0,1,0,0,0,1);function tM(n,e,t,i,s,r){let o=new it(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let M=_.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(_){let S=!1,M=d(_);M===null?p(o,a):M&&M.isColor&&(p(M,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,S){let M=d(S);M&&M.isCubeTexture?(c===void 0&&(c=new mt(new Pt(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Js(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jp),c.material.toneMapped=vt.getTransfer(M.colorSpace)!==St,(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mt(new ss(2,2),new _n({name:"BackgroundMaterial",uniforms:Js(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=vt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,S){_.getRGB(mc,Au(n)),t.buffers.color.setClear(mc.r,mc.g,mc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:x,dispose:g}}function nM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(R,D,B,I,G){let H=!1,Y=f(R,I,B,D);r!==Y&&(r=Y,c(r.object)),H=d(R,I,B,G),H&&m(R,I,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(R,D,B,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function f(R,D,B,I){let G=I.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let Y=R.isInstancedMesh===!0?R.id:0,ae=H[Y];ae===void 0&&(ae={},H[Y]=ae);let N=ae[B.id];N===void 0&&(N={},ae[B.id]=N);let W=N[G];return W===void 0&&(W=u(l()),N[G]=W),W}function u(R){let D=[],B=[],I=[];for(let G=0;G<t;G++)D[G]=0,B[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:R,attributes:{},index:null}}function d(R,D,B,I){let G=r.attributes,H=D.attributes,Y=0,ae=B.getAttributes();for(let N in ae)if(ae[N].location>=0){let F=G[N],fe=H[N];if(fe===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),F===void 0||F.attribute!==fe||fe&&F.data!==fe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function m(R,D,B,I){let G={},H=D.attributes,Y=0,ae=B.getAttributes();for(let N in ae)if(ae[N].location>=0){let F=H[N];F===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(F=R.instanceColor));let fe={};fe.attribute=F,F&&F.data&&(fe.data=F.data),G[N]=fe,Y++}r.attributes=G,r.attributesNum=Y,r.index=I}function x(){let R=r.newAttributes;for(let D=0,B=R.length;D<B;D++)R[D]=0}function p(R){g(R,0)}function g(R,D){let B=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;B[R]=1,I[R]===0&&(n.enableVertexAttribArray(R),I[R]=1),G[R]!==D&&(n.vertexAttribDivisor(R,D),G[R]=D)}function _(){let R=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==R[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function S(R,D,B,I,G,H,Y){Y===!0?n.vertexAttribIPointer(R,D,B,G,H):n.vertexAttribPointer(R,D,B,I,G,H)}function M(R,D,B,I){x();let G=I.attributes,H=B.getAttributes(),Y=D.defaultAttributeValues;for(let ae in H){let N=H[ae];if(N.location>=0){let W=G[ae];if(W===void 0&&(ae==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),ae==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){let F=W.normalized,fe=W.itemSize,ge=e.get(W);if(ge===void 0)continue;let Z=ge.buffer,_e=ge.type,Ie=ge.bytesPerElement,Xe=_e===n.INT||_e===n.UNSIGNED_INT||W.gpuType===Il;if(W.isInterleavedBufferAttribute){let te=W.data,z=te.isInterleavedBuffer===!0?te.stride:te.itemSize,j=W.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let ee=0;ee<N.locationSize;ee++)g(N.location+ee,te.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<N.locationSize;ee++)p(N.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let ee=0;ee<N.locationSize;ee++)S(N.location+ee,fe/N.locationSize,_e,F,z*Ie,(j+fe/N.locationSize*ee)*Ie,Xe)}else{if(W.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)g(N.location+te,W.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let te=0;te<N.locationSize;te++)p(N.location+te);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let te=0;te<N.locationSize;te++)S(N.location+te,fe/N.locationSize,_e,F,fe*Ie,fe/N.locationSize*te*Ie,Xe)}}else if(Y!==void 0){let F=Y[ae];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(N.location,F);break;case 3:n.vertexAttrib3fv(N.location,F);break;case 4:n.vertexAttrib4fv(N.location,F);break;default:n.vertexAttrib1fv(N.location,F)}}}}_()}function b(){w();for(let R in i){let D=i[R];for(let B in D){let I=D[B];for(let G in I){let H=I[G];for(let Y in H)h(H[Y].object),delete H[Y];delete I[G]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let D=i[R.id];for(let B in D){let I=D[B];for(let G in I){let H=I[G];for(let Y in H)h(H[Y].object),delete H[Y];delete I[G]}}delete i[R.id]}function v(R){for(let D in i){let B=i[D];for(let I in B){let G=B[I];if(G[R.id]===void 0)continue;let H=G[R.id];for(let Y in H)h(H[Y].object),delete H[Y];delete G[R.id]}}}function y(R){for(let D in i){let B=i[D],I=R.isInstancedMesh===!0?R.id:0,G=B[I];if(G!==void 0){for(let H in G){let Y=G[H];for(let ae in Y)h(Y[ae].object),delete Y[ae];delete G[H]}delete B[I],Object.keys(B).length===0&&delete i[D]}}}function w(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function iM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function sM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==oi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let y=v===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Bn&&v!==qn&&!y&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:T}}function rM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ii,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,S=_*4,M=g.clippingState||null;l.value=M,M=h(m,u,S,d);for(let b=0;b!==S;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,M=d;S!==x;++S,M+=4)o.copy(f[S]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var qo=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new vo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Ys});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Sn),new Cr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Pp=256,oM=3,aM=20,Qp=256,em=16,lM=3,cM=new k,hM=new it,xc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cr(1,10,null),this._boxMesh=new mt(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=cM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(hM));let p=new Cr(i,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pp,wu(e))}_fromTexture(e,t){e.mapping===$s||e.mapping===Lr?this._setSize(e.image.length===0?Pp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ip(e,!1,!1),i=Math.log2(e)-oM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ip(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===$s||e.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=uM(),this._integrationMaterial=dM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/em);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-lM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Qp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Ip(n,e,t){return new qo(n,{minFilter:Bi,generateMipmaps:e,type:ri,colorSpace:lo,depthBuffer:t})}function $o(n,e,t){return new _n({name:n,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:qt,blending:Ys,depthTest:!1,depthWrite:!1})}function uM(){return $o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qp}u

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
	`)}function dM(){return $o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:em}},`

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
	`)}function fM(){return $o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${aM}
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
	`)}function Lp(){return $o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dp(){return $o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Rl||d===Cl)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new qo(m.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===Rl||d===Cl,x=d===$s||d===Lr;if(m||x){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new xc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new xc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===Rl?u.mapping=$s:d===Cl&&(u.mapping=Lr),u}function l(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&no("WebGLRenderer: "+i+" extension not supported."),s}}}function gM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function f(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?go:mo,M=new S(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let v=x.array;g=x.version;for(let y=0,w=0;y<_;y+=3){let E=v[y+0],R=v[y+1],D=v[y+2];b[w++]=E,b[w++]=R,b[w++]=R,b[w++]=D,b[w++]=D,b[w++]=E}}else{g=p.version;for(let v=0,y=0;v<_;v+=3){let w=v+0,E=v+1,R=v+2;b[y++]=w,b[y++]=E,b[y++]=E,b[y++]=R,b[y++]=R,b[y++]=w}}M.version=g;let T=r.get(m);T&&e.remove(T),r.set(m,M)}function u(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function xM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _M(n,e,t){let i=new WeakMap,s=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let w=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*b*4*f),v=new fo(T,M,b,f);v.type=qn,v.needsUpdate=!0;let y=S*4;for(let E=0;E<f;E++){let R=p[E],D=g[E],B=_[E],I=M*b*4*E;for(let G=0;G<R.count;G++){let H=G*y;d===!0&&(s.fromBufferAttribute(R,G),T[I+H+0]=s.x,T[I+H+1]=s.y,T[I+H+2]=s.z,T[I+H+3]=0),m===!0&&(s.fromBufferAttribute(D,G),T[I+H+4]=s.x,T[I+H+5]=s.y,T[I+H+6]=s.z,T[I+H+7]=0),x===!0&&(s.fromBufferAttribute(B,G),T[I+H+8]=s.x,T[I+H+9]=s.y,T[I+H+10]=s.z,T[I+H+11]=B.itemSize===4?s.w:1)}}u={count:f,texture:v,size:new ze(M,b)},i.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yM(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var MM={[iu]:"LINEAR_TONE_MAPPING",[su]:"REINHARD_TONE_MAPPING",[ru]:"CINEON_TONE_MAPPING",[ou]:"ACES_FILMIC_TONE_MAPPING",[lu]:"AGX_TONE_MAPPING",[cu]:"NEUTRAL_TONE_MAPPING",[au]:"CUSTOM_TONE_MAPPING"};function bM(n,e,t,i,s,r){let o=new Fn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new kt;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let f=new dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new mt(h,f),d=new Tl(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,_=null,S=[],M=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let v=0;v<S.length;v++){let y=S[v];y.setSize&&y.setSize(b,T)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;let T=o.width,v=o.height;S.length>0&&a===null&&(a=new Fn(T,v,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(T,v,{type:ri,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&S.some(w=>w.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new ki(T,v),r===!0&&(c.format=zi,c.type=Zs)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let w=0;w<S.length;w++){let E=S[w];E.setSize&&E.setSize(T,v),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,T){if(p||b.toneMapping===mi&&S.length===0)return!1;if(_=T,T!==null){let v=T.width,y=T.height;(o.width!==v||o.height!==y)&&this.setSize(v,y)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(b,T){b.toneMapping=g,p=!0;let v=o,y=a;for(let w=0;w<S.length;w++){let E=S[w];E.enabled!==!1&&(E.render(b,y,v,T),E.needsSwap!==!1&&(v=y,y=y===a?l:a))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,f.defines={},vt.getTransfer(m)===St&&(f.defines.SRGB_TRANSFER="");let w=MM[x];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(u,d),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var tm=new Tn,nm=new ki(1,1),im=new yo(1),sm=new fo,rm=new il,om=new vo,Np=[],Op=[],Up=new Float32Array(16),Fp=new Float32Array(9),kp=new Float32Array(4);function Ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Np[s];if(r===void 0&&(r=new Float32Array(s),Np[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _c(n,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function AM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;kp.set(i),n.uniformMatrix2fv(this.addr,!1,kp),Zt(t,i)}}function RM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;Fp.set(i),n.uniformMatrix3fv(this.addr,!1,Fp),Zt(t,i)}}function CM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;Up.set(i),n.uniformMatrix4fv(this.addr,!1,Up),Zt(t,i)}}function PM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function IM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function DM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function NM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function yc(n){return n.version===0&&(n.compareFunction=yu,n.needsUpdate=!0),n}function kM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=yc(nm):r=tm,t.setTexture2D(e||r,s)}function BM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rm,s)}function zM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=yc(im):r=om,t.setTextureCube(e||r,s)}function HM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sm,s)}function GM(n){switch(n){case 5126:return SM;case 35664:return wM;case 35665:return TM;case 35666:return EM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return IM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return OM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return HM}}function VM(n,e){n.uniform1fv(this.addr,e)}function WM(n,e){let t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function XM(n,e){let t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function YM(n,e){let t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function qM(n,e){let t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $M(n,e){let t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZM(n,e){let t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KM(n,e){n.uniform1iv(this.addr,e)}function JM(n,e){n.uniform2iv(this.addr,e)}function jM(n,e){n.uniform3iv(this.addr,e)}function QM(n,e){n.uniform4iv(this.addr,e)}function e1(n,e){n.uniform1uiv(this.addr,e)}function t1(n,e){n.uniform2uiv(this.addr,e)}function n1(n,e){n.uniform3uiv(this.addr,e)}function i1(n,e){n.uniform4uiv(this.addr,e)}function s1(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=yc(nm):o=tm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function r1(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rm,r[o])}function o1(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=yc(im):o=om;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function a1(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sm,r[o])}function l1(n){switch(n){case 5126:return VM;case 35664:return WM;case 35665:return XM;case 35666:return YM;case 35674:return qM;case 35675:return $M;case 35676:return ZM;case 5124:case 35670:return KM;case 35667:case 35671:return JM;case 35668:case 35672:return jM;case 35669:case 35673:return QM;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}var ku=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}},Bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l1(t.type)}},zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Uu=/(\w+)(\])?(\[|\.)?/g;function Bp(n,e){n.seq.push(e),n.map[e.id]=e}function c1(n,e,t){let i=n.name,s=i.length;for(Uu.lastIndex=0;;){let r=Uu.exec(i),o=Uu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bp(t,c===void 0?new ku(a,n,e):new Bu(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zu(a),Bp(t,f)),t=f}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);c1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function zp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var h1=37297,u1=0;function d1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Hp=new at;function f1(n){vt._getMatrix(Hp,vt.workingColorSpace,n);let e=`mat3( ${Hp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case co:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+d1(n.getShaderSource(e),a)}else return r}function p1(n,e){let t=f1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var m1={[iu]:"Linear",[su]:"Reinhard",[ru]:"Cineon",[ou]:"ACESFilmic",[lu]:"AgX",[cu]:"Neutral",[au]:"Custom"};function g1(n,e){let t=m1[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new k;function x1(){vt.getLuminanceCoefficients(gc);let n=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function _1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yo(n){return n!==""}function Vp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(n){return n.replace(M1,b1)}function b1(n,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hu(t)}var S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(n){return n.replace(S1,w1)}function w1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var T1={[Fo]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function E1(n){return T1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A1={[Lr]:"ENVMAP_MODE_REFRACTION"};function R1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":A1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C1={[nu]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function P1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":C1[n.combine]||"ENVMAP_BLENDING_NONE"}function I1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=E1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=R1(t),f=P1(t),u=v1(t),d=_1(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Yo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Yo).join(`
`),p.length>0&&(p+=`
`)):(x=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),p=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ht.tonemapping_pars_fragment:"",t.toneMapping!==mi?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),x1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),o=Hu(o),o=Vp(o,t),o=Wp(o,t),a=Hu(a),a=Vp(a,t),a=Wp(a,t),o=Xp(o),a=Xp(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+x+o,S=g+p+a,M=zp(s,s.VERTEX_SHADER,_),b=zp(s,s.FRAGMENT_SHADER,S);s.attachShader(m,M),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(E){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(b)||"",I=R.trim(),G=D.trim(),H=B.trim(),Y=!0,ae=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,M,b);else{let N=Gp(s,M,"vertex"),W=Gp(s,b,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+N+`
`+W)}else I!==""?rt("WebGLProgram: Program Info Log:",I):(G===""||H==="")&&(ae=!1);ae&&(E.diagnostics={runnable:Y,programLog:I,vertexShader:{log:G,prefix:x},fragmentShader:{log:H,prefix:p}})}s.deleteShader(M),s.deleteShader(b),v=new Or(s,m),y=y1(s,m)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(m,h1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}var L1=0,Gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vu(e),t.set(e,i)),i}},Vu=class{constructor(e){this.id=L1++,this.code=e,this.usedTimes=0}};function D1(n){return n===cs||n===Vo||n===Wo}function N1(n,e,t,i,s,r){let o=new po,a=new Gu,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,w,E,R,D){let B=E.fog,I=R.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||G,H),ae=u[v.type],N=i.precision;v.precision!==null&&(N=i.getMaxPrecision(v.precision),N!==v.precision&&rt("WebGLProgram.getParameters:",v.precision,"not supported, using",N,"instead."));let W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=W!==void 0?W.length:0,fe=0;I.morphAttributes.position!==void 0&&(fe=1),I.morphAttributes.normal!==void 0&&(fe=2),I.morphAttributes.color!==void 0&&(fe=3);let ge,Z,_e,Ie;if(ae){let De=xi[ae];ge=De.vertexShader,Z=De.fragmentShader}else{ge=v.vertexShader,Z=v.fragmentShader;let De=a.getVertexShaderStage(v),et=a.getFragmentShaderStage(v);a.update(v,De,et),_e=De.id,Ie=et.id}let Xe=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),z=R.isInstancedMesh===!0,j=R.isBatchedMesh===!0,ee=!!v.map,Te=!!v.matcap,he=!!Y,X=he&&Y.isPMREMTexture===!0,ne=!!v.aoMap,pe=!!v.lightMap,xe=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,Ue=!!v.displacementMap,Fe=!!v.emissiveMap,Ye=!!v.metalnessMap,Be=!!v.roughnessMap,Je=v.anisotropy>0,U=v.clearcoat>0,ye=v.diffuseRoughness>0,Ce=v.dispersion>0,Ze=v.retroreflectivity>0,oe=v.iridescence>0,nt=v.sheen>0,Ve=v.transmission>0,Ne=Je&&!!v.anisotropyMap,P=U&&!!v.clearcoatMap,A=U&&!!v.clearcoatNormalMap,$=U&&!!v.clearcoatRoughnessMap,Se=ye&&!!v.diffuseRoughnessMap,me=oe&&!!v.iridescenceMap,we=oe&&!!v.iridescenceThicknessMap,Ae=nt&&!!v.sheenColorMap,ue=nt&&!!v.sheenRoughnessMap,de=!!v.specularMap,Pe=!!v.specularColorMap,O=!!v.specularIntensityMap,ce=Ve&&!!v.transmissionMap,ie=Ve&&!!v.thicknessMap,Re=!!v.gradientMap,Ee=!!v.alphaMap,Me=v.alphaTest>0,be=!!v.alphaHash,He=!!v.extensions,ve=mi;v.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(ve=n.toneMapping);let ke=X?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,Le={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:Z,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:Ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:N,batching:j,batchingColor:j&&R._colorsTexture!==null,instancing:z,instancingColor:z&&R.instanceColor!==null,instancingMorph:z&&R.morphTexture!==null,outputColorSpace:Xe===null?n.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:Te,envMap:he,envMapMode:he&&Y.mapping,envMapPMREM:X,envMapMaxLod:X?ke.length-1:null,envMapSize:X?ke[0].width:null,aoMap:ne,lightMap:pe,bumpMap:xe,normalMap:re,displacementMap:Ue,emissiveMap:Fe,normalMapObjectSpace:re&&v.normalMapType===lp,normalMapTangentSpace:re&&v.normalMapType===xu,packedNormalMap:re&&v.normalMapType===xu&&D1(v.normalMap.format),metalnessMap:Ye,roughnessMap:Be,anisotropy:Je,anisotropyMap:Ne,clearcoat:U,clearcoatMap:P,clearcoatNormalMap:A,clearcoatRoughnessMap:$,diffuseRoughness:ye,diffuseRoughnessMap:Se,dispersion:Ce,retroreflection:Ze,iridescence:oe,iridescenceMap:me,iridescenceThicknessMap:we,sheen:nt,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:de,specularColorMap:Pe,specularIntensityMap:O,transmission:Ve,transmissionMap:ce,thicknessMap:ie,gradientMap:Re,opaque:v.transparent===!1&&v.blending===Ir&&v.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Me,alphaHash:be,combine:v.combine,mapUv:ee&&d(v.map.channel),aoMapUv:ne&&d(v.aoMap.channel),lightMapUv:pe&&d(v.lightMap.channel),bumpMapUv:xe&&d(v.bumpMap.channel),normalMapUv:re&&d(v.normalMap.channel),displacementMapUv:Ue&&d(v.displacementMap.channel),emissiveMapUv:Fe&&d(v.emissiveMap.channel),metalnessMapUv:Ye&&d(v.metalnessMap.channel),roughnessMapUv:Be&&d(v.roughnessMap.channel),anisotropyMapUv:Ne&&d(v.anisotropyMap.channel),clearcoatMapUv:P&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:me&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:we&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&d(v.sheenRoughnessMap.channel),specularMapUv:de&&d(v.specularMap.channel),specularColorMapUv:Pe&&d(v.specularColorMap.channel),specularIntensityMapUv:O&&d(v.specularIntensityMap.channel),transmissionMapUv:ce&&d(v.transmissionMap.channel),thicknessMapUv:ie&&d(v.thicknessMap.channel),alphaMapUv:Ee&&d(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(re||Je),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(ee||Ee),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:te,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:fe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(De=>De.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&vt.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&vt.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yn,flipSided:v.side===qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:He&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&v.extensions.multiDraw===!0||j)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function x(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)y.push(w),y.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(p(y,v),g(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function p(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function g(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let y=u[v.type],w;if(y){let E=xi[y];w=Ap.clone(E.uniforms)}else w=v.uniforms;return w}function S(v,y){let w=h.get(y);return w!==void 0?++w.usedTimes:(w=new I1(n,y,v,s),c.push(w),h.set(y,w)),w}function M(v){if(--v.usedTimes===0){let y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:_,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:T}}function O1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function U1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function qp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $p(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,x,p,g){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},n[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=p,_.group=g),e++,_}function l(u,d,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);let S=a(u,d,m,x,p,g);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):t.push(S)}function c(u,d,m,x,p,g){let _=a(u,d,m,x,p,g);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,d){t.length>1&&t.sort(u||U1),i.length>1&&i.sort(d||qp),s.length>1&&s.sort(d||qp)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function F1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new $p,n.set(i,[o])):s>=r.length?(o=new $p,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function k1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function B1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var z1=0;function H1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G1(n){let e=new k1,t=B1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new pt,o=new pt;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,_=0,S=0,M=0,b=0,T=0,v=0,y=0,w=0,E=0;c.sort(H1);for(let D=0,B=c.length;D<B;D++){let I=c[D],G=I.color,H=I.intensity,Y=I.distance,ae=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cs?ae=I.shadow.map.texture:ae=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*H,f+=G.g*H,u+=G.b*H;else if(I.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(I.sh.coefficients[N],H);E++}else if(I.isSunLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,F=t.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[m]=F,i.sunShadowMap[m]=ae;let fe=W.getViewportCount();for(let ge=0;ge<fe;ge++)i.sunShadowMatrix[x+ge]=W.getMatrix(ge),i.sunShadowCascade[x+ge]=W._cascadeData[ge];x+=fe,m++}i.sun[d]=N,d++}else if(I.isDirectionalLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,F=t.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=N,p++}else if(I.isSpotLight){let N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(G).multiplyScalar(H),N.distance=Y,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,i.spot[_]=N;let W=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,W.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=W.matrix,I.castShadow){let F=t.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=ae,v++}_++}else if(I.isRectAreaLight){let N=e.get(I);N.color.copy(G).multiplyScalar(H),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=N,S++}else if(I.isPointLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){let W=I.shadow,F=t.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=N,g++}else if(I.isHemisphereLight){let N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(H),N.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[M]=N,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let R=i.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==S||R.hemiLength!==M||R.numSunShadows!==m||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==v||R.numSpotMaps!==y||R.numLightProbes!==E)&&(i.sun.length=d,i.directional.length=p,i.spot.length=_,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,R.sunLength=d,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=S,R.hemiLength=M,R.numSunShadows=m,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=v,R.numSpotMaps=y,R.numLightProbes=E,i.version=z1++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let M=c[_];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(M.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function Zp(n){let e=new G1(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function V1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zp(n),e.set(s,[a])):r>=o.length?(a=new Zp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
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
}`,Y1=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],q1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Kp=new pt,Xo=new k,Fu=new k;function $1(n,e,t){let i=new Gs,s=new ze,r=new ze,o=new Gt,a=new fl,l=new pl,c={},h=t.maxTextureSize,f={[ls]:qt,[qt]:ls,[Yn]:Yn},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:W1,fragmentShader:X1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new kt;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let g=this.type;this.render=function(T,v,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Bf&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fo);let w=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ys),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=T.length;I<G;I++){let H=T[I],Y=H.shadow;if(Y===void 0){rt("WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ae=Y.getFrameExtents();s.multiply(ae),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,Y.mapSize.y=r.y));let N=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=N,Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Pr){if(H.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Fn(s.x,s.y,{format:cs,type:ri,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),Y.map.texture.name=H.name+".shadowMap",Y.map.depthTexture=new ki(s.x,s.y,qn),Y.map.depthTexture.name=H.name+".shadowMapDepth",Y.map.depthTexture.format=Ui,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=nn,Y.map.depthTexture.magFilter=nn}else H.isPointLight?(Y.map=new qo(s.x),Y.map.depthTexture=new yo(s.x,si)):(Y.map=new Fn(s.x,s.y),Y.map.depthTexture=new ki(s.x,s.y,si)),Y.map.depthTexture.name=H.name+".shadowMap",Y.map.depthTexture.format=Ui,this.type===Fo?(Y.map.depthTexture.compareFunction=N?_u:vu,Y.map.depthTexture.minFilter=Sn,Y.map.depthTexture.magFilter=Sn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=nn,Y.map.depthTexture.magFilter=nn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let W=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();H.isPointLight!==!0&&Y.updateMatrices(H,y);let F=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:y.layers;for(let fe=0;fe<W;fe++){let ge=Y.getCamera(fe);if(H.isPointLight){let Z=Y.camera,_e=Y.matrix,Ie=H.distance||Z.far;Ie!==Z.far&&(Z.far=Ie,Z.updateProjectionMatrix()),Xo.setFromMatrixPosition(H.matrixWorld),Z.position.copy(Xo),Fu.copy(Z.position),Fu.add(Y1[fe]),Z.up.copy(q1[fe]),Z.lookAt(Fu),Z.updateMatrixWorld(),_e.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Kp.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Kp,Z.coordinateSystem,Z.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(Y.map),n.clear());let Z=Y.getViewport(fe);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),D.viewport(o)}i=Y.getFrustum(fe),M(v,y,ge,H,F,this.type)}Y.isPointLightShadow!==!0&&this.type===Pr&&_(Y,y),Y.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,R)};function _(T,v){let y=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Fn(s.x,s.y,{format:cs,type:ri}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,y,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,y,d,x,null)}function S(T,v,y,w){let E=null,R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=E.uuid,B=v.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let G=I[B];G===void 0&&(G=E.clone(),I[B]=G,v.addEventListener("dispose",b)),E=G}if(E.visible=v.visible,E.wireframe=v.wireframe,w===Pr?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:f[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=n.properties.get(E);D.light=y}return E}function M(T,v,y,w,E,R){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Pr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=e.update(T),G=T.material;if(Array.isArray(G)){let H=I.groups;for(let Y=0,ae=H.length;Y<ae;Y++){let N=H[Y],W=G[N.materialIndex];if(W&&W.visible){let F=S(T,W,w,R);T.onBeforeShadow(n,T,v,y,I,F,N),n.renderBufferDirect(y,null,I,F,T,N),T.onAfterShadow(n,T,v,y,I,F,N)}}}else if(G.visible){let H=S(T,G,w,R);T.onBeforeShadow(n,T,v,y,I,H,null),n.renderBufferDirect(y,null,I,H,T,null),T.onAfterShadow(n,T,v,y,I,H,null)}}let B=T.children;for(let I=0,G=B.length;I<G;I++)M(B[I],v,y,w,E,R)}function b(T){T.target.removeEventListener("dispose",b);for(let y in c){let w=c[y],E=T.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function Z1(n,e){function t(){let O=!1,ce=new Gt,ie=null,Re=new Gt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,Me,be,He,ve){ve===!0&&(Ee*=He,Me*=He,be*=He),ce.set(Ee,Me,be,He),Re.equals(ce)===!1&&(n.clearColor(Ee,Me,be,He),Re.copy(ce))},reset:function(){O=!1,ie=null,Re.set(-1,0,0,0)}}}function i(){let O=!1,ce=!1,ie=null,Re=null,Ee=null;return{setReversed:function(Me){if(ce!==Me){let be=e.get("EXT_clip_control");Me?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=Me;let He=Ee;Ee=null,this.setClear(He)}},getReversed:function(){return ce},setTest:function(Me){Me?te(n.DEPTH_TEST):z(n.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!O&&(n.depthMask(Me),ie=Me)},setFunc:function(Me){if(ce&&(Me=_p[Me]),Re!==Me){switch(Me){case Xa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Me}},setLocked:function(Me){O=Me},setClear:function(Me){Ee!==Me&&(Ee=Me,ce&&(Me=1-Me),n.clearDepth(Me))},reset:function(){O=!1,ie=null,Re=null,Ee=null,ce=!1}}}function s(){let O=!1,ce=null,ie=null,Re=null,Ee=null,Me=null,be=null,He=null,ve=null;return{setTest:function(ke){O||(ke?te(n.STENCIL_TEST):z(n.STENCIL_TEST))},setMask:function(ke){ce!==ke&&!O&&(n.stencilMask(ke),ce=ke)},setFunc:function(ke,Le,De){(ie!==ke||Re!==Le||Ee!==De)&&(n.stencilFunc(ke,Le,De),ie=ke,Re=Le,Ee=De)},setOp:function(ke,Le,De){(Me!==ke||be!==Le||He!==De)&&(n.stencilOp(ke,Le,De),Me=ke,be=Le,He=De)},setLocked:function(ke){O=ke},setClear:function(ke){ve!==ke&&(n.clearStencil(ke),ve=ke)},reset:function(){O=!1,ce=null,ie=null,Re=null,Ee=null,Me=null,be=null,He=null,ve=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,S=null,M=null,b=null,T=null,v=null,y=new it(0,0,0),w=0,E=!1,R=null,D=null,B=null,I=null,G=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ae=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(N)[1]),Y=ae>=1):N.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Y=ae>=2);let W=null,F={},fe=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Z=new Gt().fromArray(fe),_e=new Gt().fromArray(ge);function Ie(O,ce,ie,Re){let Ee=new Uint8Array(4),Me=n.createTexture();n.bindTexture(O,Me),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<ie;be++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ce+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Me}let Xe={};Xe[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Xe[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Xe[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xe[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(_r),xe(!1),re(Kh),te(n.CULL_FACE),ne(Ys);function te(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function z(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function j(O,ce){return u[O]!==ce?(n.bindFramebuffer(O,ce),u[O]=ce,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ee(O,ce){let ie=m,Re=!1;if(O){ie=d.get(ce),ie===void 0&&(ie=[],d.set(ce,ie));let Ee=O.textures;if(ie.length!==Ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,be=Ee.length;Me<be;Me++)ie[Me]=n.COLOR_ATTACHMENT0+Me;ie.length=Ee.length,Re=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ie)}function Te(O){return x!==O?(n.useProgram(O),x=O,!0):!1}let he={[qs]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Gf]:n.FUNC_REVERSE_SUBTRACT};he[Vf]=n.MIN,he[Wf]=n.MAX;let X={[Xf]:n.ZERO,[Yf]:n.ONE,[qf]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[Qf]:n.SRC_ALPHA_SATURATE,[Jf]:n.DST_COLOR,[Zf]:n.DST_ALPHA,[$f]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[jf]:n.ONE_MINUS_DST_COLOR,[Kf]:n.ONE_MINUS_DST_ALPHA,[ep]:n.CONSTANT_COLOR,[tp]:n.ONE_MINUS_CONSTANT_COLOR,[np]:n.CONSTANT_ALPHA,[ip]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(O,ce,ie,Re,Ee,Me,be,He,ve,ke){if(O===Ys){p===!0&&(z(n.BLEND),p=!1);return}if(p===!1&&(te(n.BLEND),p=!0),O!==zf){if(O!==g||ke!==E){if((_!==qs||b!==qs)&&(n.blendEquation(n.FUNC_ADD),_=qs,b=qs),ke)switch(O){case Ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",O);break}else switch(O){case Ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jh:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",O);break}S=null,M=null,T=null,v=null,y.set(0,0,0),w=0,g=O,E=ke}return}Ee=Ee||ce,Me=Me||ie,be=be||Re,(ce!==_||Ee!==b)&&(n.blendEquationSeparate(he[ce],he[Ee]),_=ce,b=Ee),(ie!==S||Re!==M||Me!==T||be!==v)&&(n.blendFuncSeparate(X[ie],X[Re],X[Me],X[be]),S=ie,M=Re,T=Me,v=be),(He.equals(y)===!1||ve!==w)&&(n.blendColor(He.r,He.g,He.b,ve),y.copy(He),w=ve),g=O,E=!1}function pe(O,ce){O.side===Yn?z(n.CULL_FACE):te(n.CULL_FACE);let ie=O.side===qt;ce&&(ie=!ie),xe(ie),O.blending===Ir&&O.transparent===!1?ne(Ys):ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Re=O.stencilWrite;a.setTest(Re),Re&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):z(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(O){R!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),R=O)}function re(O){O!==Ff?(te(n.CULL_FACE),O!==D&&(O===Kh?n.cullFace(n.BACK):O===kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):z(n.CULL_FACE),D=O}function Ue(O){O!==B&&(Y&&n.lineWidth(O),B=O)}function Fe(O,ce,ie){O?(te(n.POLYGON_OFFSET_FILL),(I!==ce||G!==ie)&&(I=ce,G=ie,o.getReversed()&&(ce=-ce,ie=-ie),n.polygonOffset(ce,ie))):z(n.POLYGON_OFFSET_FILL)}function Ye(O){O?te(n.SCISSOR_TEST):z(n.SCISSOR_TEST)}function Be(O){O===void 0&&(O=n.TEXTURE0+H-1),W!==O&&(n.activeTexture(O),W=O)}function Je(O,ce,ie){ie===void 0&&(W===null?ie=n.TEXTURE0+H-1:ie=W);let Re=F[ie];Re===void 0&&(Re={type:void 0,texture:void 0},F[ie]=Re),(Re.type!==O||Re.texture!==ce)&&(W!==ie&&(n.activeTexture(ie),W=ie),n.bindTexture(O,ce||Xe[O]),Re.type=O,Re.texture=ce)}function U(){let O=F[W];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ye(){try{n.compressedTexImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function Ce(){try{n.compressedTexImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Ze(){try{n.texSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function oe(){try{n.texSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Ne(){try{n.texStorage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function P(){try{n.texStorage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function A(){try{n.texImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function $(){try{n.texImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Se(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function me(O,ce){f[O]!==ce&&(n.pixelStorei(O,ce),f[O]=ce)}function we(O){Z.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Z.copy(O))}function Ae(O){_e.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function ue(O,ce){let ie=c.get(ce);ie===void 0&&(ie=new WeakMap,c.set(ce,ie));let Re=ie.get(O);Re===void 0&&(Re=n.getUniformBlockIndex(ce,O.name),n.uniformBlockBinding(ce,Re,Re),ie.set(O,Re))}function de(O,ce,ie){let Ee=c.get(ce).get(O);l[Ee]!==ie&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ee,ie),l[Ee]=ie)}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,F={},u={},l={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,S=null,M=null,b=null,T=null,v=null,y=new it(0,0,0),w=0,E=!1,R=null,D=null,B=null,I=null,G=null,Z.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:z,bindFramebuffer:j,drawBuffers:ee,useProgram:Te,setBlending:ne,setMaterial:pe,setFlipSided:xe,setCullFace:re,setLineWidth:Ue,setPolygonOffset:Fe,setScissorTest:Ye,activeTexture:Be,bindTexture:Je,unbindTexture:U,compressedTexImage2D:ye,compressedTexImage3D:Ce,texImage2D:A,texImage3D:$,pixelStorei:me,getParameter:Se,updateUBOMapping:ue,uniformBlockBinding:de,texStorage2D:Ne,texStorage3D:P,texSubImage2D:Ze,texSubImage3D:oe,compressedTexSubImage2D:nt,compressedTexSubImage3D:Ve,scissor:we,viewport:Ae,reset:Pe}}function K1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,x=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):uo("canvas")}function _(P,A,$){let Se=1,me=Ne(P);if((me.width>$||me.height>$)&&(Se=$/Math.max(me.width,me.height)),Se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let we=Math.floor(Se*me.width),Ae=Math.floor(Se*me.height);u===void 0&&(u=g(we,Ae));let ue=A?g(we,Ae):u;return ue.width=we,ue.height=Ae,ue.getContext("2d").drawImage(P,0,0,we,Ae),rt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+we+"x"+Ae+")."),ue}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function S(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(P,A,$,Se,me,we=!1){if(P!==null){if(n[P]!==void 0)return n[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ae;Se&&(Ae=e.get("EXT_texture_norm16"),Ae||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=A;if(A===n.RED&&($===n.FLOAT&&(ue=n.R32F),$===n.HALF_FLOAT&&(ue=n.R16F),$===n.UNSIGNED_BYTE&&(ue=n.R8),$===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.R16_EXT),$===n.SHORT&&Ae&&(ue=Ae.R16_SNORM_EXT)),A===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.R8UI),$===n.UNSIGNED_SHORT&&(ue=n.R16UI),$===n.UNSIGNED_INT&&(ue=n.R32UI),$===n.BYTE&&(ue=n.R8I),$===n.SHORT&&(ue=n.R16I),$===n.INT&&(ue=n.R32I)),A===n.RG&&($===n.FLOAT&&(ue=n.RG32F),$===n.HALF_FLOAT&&(ue=n.RG16F),$===n.UNSIGNED_BYTE&&(ue=n.RG8),$===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.RG16_EXT),$===n.SHORT&&Ae&&(ue=Ae.RG16_SNORM_EXT)),A===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.RG8UI),$===n.UNSIGNED_SHORT&&(ue=n.RG16UI),$===n.UNSIGNED_INT&&(ue=n.RG32UI),$===n.BYTE&&(ue=n.RG8I),$===n.SHORT&&(ue=n.RG16I),$===n.INT&&(ue=n.RG32I)),A===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),$===n.UNSIGNED_INT&&(ue=n.RGB32UI),$===n.BYTE&&(ue=n.RGB8I),$===n.SHORT&&(ue=n.RGB16I),$===n.INT&&(ue=n.RGB32I)),A===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),$===n.UNSIGNED_INT&&(ue=n.RGBA32UI),$===n.BYTE&&(ue=n.RGBA8I),$===n.SHORT&&(ue=n.RGBA16I),$===n.INT&&(ue=n.RGBA32I)),A===n.RGB&&($===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.RGB16_EXT),$===n.SHORT&&Ae&&(ue=Ae.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),A===n.RGBA){let de=we?co:vt.getTransfer(me);$===n.FLOAT&&(ue=n.RGBA32F),$===n.HALF_FLOAT&&(ue=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ue=de===St?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&Ae&&(ue=Ae.RGBA16_EXT),$===n.SHORT&&Ae&&(ue=Ae.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function v(P,A){let $;return P?A===null||A===si||A===Zs?$=n.DEPTH24_STENCIL8:A===qn?$=n.DEPTH32F_STENCIL8:A===Dr&&($=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===si||A===Zs?$=n.DEPTH_COMPONENT24:A===qn?$=n.DEPTH_COMPONENT32F:A===Dr&&($=n.DEPTH_COMPONENT16),$}function y(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==Sn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){let A=new WeakRef(P);i.get(P).__ref=A,m.add(A),x.register(P,A,A)}function E(P){let A=i.get(P).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function R(P){B(P.target)}function D(P){I(P.target)}function B(P){P.removeEventListener("dispose",R),E(P),H(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function I(P){P.removeEventListener("dispose",D),E(P),ae(P)}function G(){for(let P of m){let A=P.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):B(A))}m.clear(),f.clear()}function H(P){let A=i.get(P);if(A.__webglInit===void 0)return;let $=P.source,Se=d.get($);if(Se){let me=Se[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&Y(P),Object.keys(Se).length===0&&d.delete($)}i.remove(P)}function Y(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let $=P.source,Se=d.get($);delete Se[A.__cacheKey],o.memory.textures--}function ae(P){let A=i.get(P);A.__depthDisposeCallback&&A.__depthDisposeCallback();let $=P.depthTexture;if($&&$.renderTarget===P&&B($),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let we=0;we<A.__webglFramebuffer[me].length;we++)n.deleteFramebuffer(A.__webglFramebuffer[me][we]);else n.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)n.deleteFramebuffer(A.__webglFramebuffer[me]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Se=P.textures;for(let me=0,we=Se.length;me<we;me++){let Ae=i.get(Se[me]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(Se[me])}i.remove(P)}let N=0;function W(){N=0}function F(){return N}function fe(P){N=P}function ge(){let P=N;return P>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function Z(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.mipmapsAutoUpdate),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function _e(P,A){let $=i.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){let Se=P.image;if(Se===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{pe($,P,A);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function Ie(P,A){let $=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){pe($,P,A);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function Xe(P,A){let $=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){pe($,P,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function te(P,A){let $=i.get(P);if(P.version>0&&$.__version!==P.version){xe($,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}let z={[ja]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Qa]:n.MIRRORED_REPEAT},j={[nn]:n.NEAREST,[op]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},ee={[hp]:n.NEVER,[yu]:n.ALWAYS,[up]:n.LESS,[vu]:n.LEQUAL,[dp]:n.EQUAL,[_u]:n.GEQUAL,[fp]:n.GREATER,[pp]:n.NOTEQUAL};function Te(P,A){if(A.type===qn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Sn||A.magFilter===Pl||A.magFilter===ko||A.magFilter===Bi||A.minFilter===Sn||A.minFilter===Pl||A.minFilter===ko||A.minFilter===Bi)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,z[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,z[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,z[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,j[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===nn||A.minFilter!==ko&&A.minFilter!==Bi||A.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function he(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",R),w(A));let Se=A.source,me=d.get(Se);me===void 0&&(me={},d.set(Se,me));let we=Z(A);if(we!==P.__cacheKey){me[we]===void 0&&(me[we]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),me[we].usedTimes++;let Ae=me[P.__cacheKey];Ae!==void 0&&(me[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&Y(A)),P.__cacheKey=we,P.__webglTexture=me[we].texture}return $}function X(P,A,$){return Math.floor(Math.floor(P/$)/A)}function ne(P,A,$,Se){let we=P.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,$,Se,A.data);else{we.sort((O,ce)=>O.start-ce.start);let Ae=0;for(let O=1;O<we.length;O++){let ce=we[Ae],ie=we[O],Re=ce.start+ce.count,Ee=X(ie.start,A.width,4),Me=X(ce.start,A.width,4);ie.start<=Re+1&&Ee===Me&&X(ie.start+ie.count-1,A.width,4)===Ee?ce.count=Math.max(ce.count,ie.start+ie.count-ce.start):(++Ae,we[Ae]=ie)}we.length=Ae+1;let ue=t.getParameter(n.UNPACK_ROW_LENGTH),de=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let O=0,ce=we.length;O<ce;O++){let ie=we[O],Re=Math.floor(ie.start/4),Ee=Math.ceil(ie.count/4),Me=Re%A.width,be=Math.floor(Re/A.width),He=Ee,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,be),t.texSubImage2D(n.TEXTURE_2D,0,Me,be,He,ve,$,Se,A.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ue),t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function pe(P,A,$){let Se=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=n.TEXTURE_3D);let me=he(P,A),we=A.source;t.bindTexture(Se,P.__webglTexture,n.TEXTURE0+$);let Ae=i.get(we);if(we.version!==Ae.__version||me===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ve=vt.getPrimaries(vt.workingColorSpace),ke=A.colorSpace===Hi?null:vt.getPrimaries(A.colorSpace),Le=A.colorSpace===Hi||ve===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let de=_(A.image,!1,s.maxTextureSize);de=Ve(A,de);let Pe=r.convert(A.format,A.colorSpace),O=r.convert(A.type),ce=T(A.internalFormat,Pe,O,A.normalized,A.colorSpace,A.isVideoTexture);Te(Se,A);let ie,Re=A.mipmaps,Ee=A.isVideoTexture!==!0,Me=Ae.__version===void 0||me===!0,be=we.dataReady,He=y(A,de);if(A.isDepthTexture)ce=v(A.format===zi,A.type),Me&&(Ee?t.texStorage2D(n.TEXTURE_2D,1,ce,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,ce,de.width,de.height,0,Pe,O,null));else if(A.isDataTexture)if(Re.length>0){Ee&&Me&&t.texStorage2D(n.TEXTURE_2D,He,ce,Re[0].width,Re[0].height);for(let ve=0,ke=Re.length;ve<ke;ve++)ie=Re[ve],Ee?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ie.width,ie.height,Pe,O,ie.data):t.texImage2D(n.TEXTURE_2D,ve,ce,ie.width,ie.height,0,Pe,O,ie.data);A.generateMipmaps=!1}else Ee?(Me&&t.texStorage2D(n.TEXTURE_2D,He,ce,de.width,de.height),be&&ne(A,de,Pe,O)):t.texImage2D(n.TEXTURE_2D,0,ce,de.width,de.height,0,Pe,O,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ee&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,ce,Re[0].width,Re[0].height,de.depth);for(let ve=0,ke=Re.length;ve<ke;ve++)if(ie=Re[ve],A.format!==oi)if(Pe!==null)if(Ee){if(be)if(A.layerUpdates.size>0){let Le=Pu(ie.width,ie.height,A.format,A.type);for(let De of A.layerUpdates){let et=ie.data.subarray(De*Le/ie.data.BYTES_PER_ELEMENT,(De+1)*Le/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,De,ie.width,ie.height,1,Pe,et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ie.width,ie.height,de.depth,Pe,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ce,ie.width,ie.height,de.depth,0,ie.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ie.width,ie.height,de.depth,Pe,O,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ce,ie.width,ie.height,de.depth,0,Pe,O,ie.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ee&&Me&&t.texStorage2D(n.TEXTURE_2D,He,ce,Re[0].width,Re[0].height);for(let ve=0,ke=Re.length;ve<ke;ve++)ie=Re[ve],A.format!==oi?Pe!==null?Ee?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,ie.width,ie.height,Pe,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ce,ie.width,ie.height,0,ie.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ie.width,ie.height,Pe,O,ie.data):t.texImage2D(n.TEXTURE_2D,ve,ce,ie.width,ie.height,0,Pe,O,ie.data)}else if(A.isDataArrayTexture)if(Ee){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,ce,de.width,de.height,de.depth),be)if(A.layerUpdates.size>0){let ve=Pu(de.width,de.height,A.format,A.type);for(let ke of A.layerUpdates){let Le=de.data.subarray(ke*ve/de.data.BYTES_PER_ELEMENT,(ke+1)*ve/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,de.width,de.height,1,Pe,O,Le)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,O,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,de.width,de.height,de.depth,0,Pe,O,de.data);else if(A.isData3DTexture)Ee?(Me&&t.texStorage3D(n.TEXTURE_3D,He,ce,de.width,de.height,de.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,O,de.data)):t.texImage3D(n.TEXTURE_3D,0,ce,de.width,de.height,de.depth,0,Pe,O,de.data);else if(A.isFramebufferTexture){if(Me)if(Ee)t.texStorage2D(n.TEXTURE_2D,He,ce,de.width,de.height);else{let ve=de.width,ke=de.height;for(let Le=0;Le<He;Le++)t.texImage2D(n.TEXTURE_2D,Le,ce,ve,ke,0,Pe,O,null),ve>>=1,ke>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),de.parentNode!==ve){ve.appendChild(de),f.add(A),ve.onpaint=ke=>{let Le=ke.changedElements;for(let De of f)Le.includes(De.image)&&(De.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,de);else{let Le=n.RGBA,De=n.RGBA,et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,De,et,de)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ee&&Me){let ve=Ne(Re[0]);t.texStorage2D(n.TEXTURE_2D,He,ce,ve.width,ve.height)}for(let ve=0,ke=Re.length;ve<ke;ve++)ie=Re[ve],Ee?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe,O,ie):t.texImage2D(n.TEXTURE_2D,ve,ce,Pe,O,ie);A.generateMipmaps=!1}else if(Ee){if(Me){let ve=Ne(de);t.texStorage2D(n.TEXTURE_2D,He,ce,ve.width,ve.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,O,de)}else t.texImage2D(n.TEXTURE_2D,0,ce,Pe,O,de);S(A)&&A.mipmapsAutoUpdate===!0&&M(Se),Ae.__version=we.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function xe(P,A,$){if(A.image.length!==6)return;let Se=he(P,A),me=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);let we=i.get(me);if(me.version!==we.__version||Se===!0){t.activeTexture(n.TEXTURE0+$);let Ae=vt.getPrimaries(vt.workingColorSpace),ue=A.colorSpace===Hi?null:vt.getPrimaries(A.colorSpace),de=A.colorSpace===Hi||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,O=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let De=0;De<6;De++)!Pe&&!O?ce[De]=_(A.image[De],!0,s.maxCubemapSize):ce[De]=O?A.image[De].image:A.image[De],ce[De]=Ve(A,ce[De]);let ie=ce[0],Re=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type),Me=T(A.internalFormat,Re,Ee,A.normalized,A.colorSpace),be=A.isVideoTexture!==!0,He=we.__version===void 0||Se===!0,ve=me.dataReady,ke=y(A,ie);Te(n.TEXTURE_CUBE_MAP,A);let Le;if(A.isDepthTexture){if(Me=v(A.format===zi,A.type),He)if(be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Me,ie.width,ie.height);else for(let De=0;De<6;De++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Me,ie.width,ie.height,0,Re,Ee,null)}else if(Pe){be&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,Me,ie.width,ie.height);for(let De=0;De<6;De++){Le=ce[De].mipmaps;for(let et=0;et<Le.length;et++){let ct=Le[et];A.format!==oi?Re!==null?be?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et,0,0,ct.width,ct.height,Re,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et,Me,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et,0,0,ct.width,ct.height,Re,Ee,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et,Me,ct.width,ct.height,0,Re,Ee,ct.data)}}}else{if(Le=A.mipmaps,be&&He){Le.length>0&&ke++;let De=Ne(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,Me,De.width,De.height)}for(let De=0;De<6;De++)if(O){be?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,ce[De].width,ce[De].height,Re,Ee,ce[De].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Me,ce[De].width,ce[De].height,0,Re,Ee,ce[De].data);for(let et=0;et<Le.length;et++){let At=Le[et].image[De].image;be?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et+1,0,0,At.width,At.height,Re,Ee,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et+1,Me,At.width,At.height,0,Re,Ee,At.data)}}else{be?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Re,Ee,ce[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Me,Re,Ee,ce[De]);for(let et=0;et<Le.length;et++){let ct=Le[et];be?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et+1,0,0,Re,Ee,ct.image[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,et+1,Me,Re,Ee,ct.image[De])}}}S(A)&&A.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),we.__version=me.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function re(P,A,$,Se,me,we){let Ae=r.convert($.format,$.colorSpace),ue=r.convert($.type),de=T($.internalFormat,Ae,ue,$.normalized,$.colorSpace),Pe=i.get(A),O=i.get($);if(O.__renderTarget=A,!Pe.__hasExternalTextures){let ce=Math.max(1,A.width>>we),ie=Math.max(1,A.height>>we);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,we,de,ce,ie,A.depth,0,Ae,ue,null):t.texImage2D(me,we,de,ce,ie,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),oe(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,me,O.__webglTexture,0,Ze(A)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Se,me,O.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(P,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer){let Se=A.depthTexture,me=Se&&Se.isDepthTexture?Se.type:null,we=v(A.stencilBuffer,me),Ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(A),we,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(A),we,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,we,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,P)}else{let Se=A.textures;for(let me=0;me<Se.length;me++){let we=Se[me],Ae=r.convert(we.format,we.colorSpace),ue=r.convert(we.type),de=T(we.internalFormat,Ae,ue,we.normalized,we.colorSpace);oe(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(A),de,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(A),de,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,de,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(P,A,$){let Se=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let me=i.get(A.depthTexture);me.__renderTarget=A;let we=Se?A.depthTexture.image[0]:A.depthTexture.image;(!me.__webglTexture||we.width!==A.width||we.height!==A.height)&&(we.width=A.width,we.height=A.height,A.depthTexture.needsUpdate=!0),Se?te(A.depthTexture,0):_e(A.depthTexture,0);let Ae=me.__webglTexture,ue=Ze(A),de=Se?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,Pe=A.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ui)oe(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,de,Ae,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,de,Ae,0);else if(A.depthTexture.format===zi)oe(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,de,Ae,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,de,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(P){let A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let Se=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){let me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",me)};Se.addEventListener("dispose",me),A.__depthDisposeCallback=me}A.__boundDepthTexture=Se}if(P.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let Se=0;Se<6;Se++)Fe(A.__webglFramebuffer[Se],P,Se);else P.texture.mipmaps.length>0?Fe(A.__webglFramebuffer[0],P,0):Fe(A.__webglFramebuffer,P,0);else if($){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=n.createRenderbuffer(),Ue(A.__webglDepthbuffer[Se],P,!1);else{let me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=A.__webglDepthbuffer[Se];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,we)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ue(A.__webglDepthbuffer,P,!1);else{let me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,we)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(P,A,$){let Se=i.get(P);A!==void 0&&re(Se.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ye(P)}function Je(P){let A=P.texture,$=i.get(P),Se=i.get(A);P.addEventListener("dispose",D),w(P);let me=P.textures,we=P.isWebGLCubeRenderTarget===!0,Ae=me.length>1;if(Ae||(Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture()),Se.__version=A.version,o.memory.textures++),we){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(A.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let de=0;de<A.mipmaps.length;de++)$.__webglFramebuffer[ue][de]=n.createFramebuffer()}else $.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(A.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)$.__webglFramebuffer[ue]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,de=me.length;ue<de;ue++){let Pe=i.get(me[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&oe(P)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<me.length;ue++){let de=me[ue];$.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);let Pe=r.convert(de.format,de.colorSpace),O=r.convert(de.type),ce=T(de.internalFormat,Pe,O,de.normalized,de.colorSpace,P.isXRRenderTarget===!0),ie=Ze(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ce,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,Se.__webglTexture),Te(n.TEXTURE_CUBE_MAP,A);for(let ue=0;ue<6;ue++)if(A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)re($.__webglFramebuffer[ue][de],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else re($.__webglFramebuffer[ue],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(A)?M(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let ue=0,de=me.length;ue<de;ue++){let Pe=me[ue],O=i.get(Pe),ce=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,O.__webglTexture),Te(ce,Pe),re($.__webglFramebuffer,P,Pe,n.COLOR_ATTACHMENT0+ue,ce,0),S(Pe)&&M(ce)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Se.__webglTexture),Te(ue,A),A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)re($.__webglFramebuffer[de],P,A,n.COLOR_ATTACHMENT0,ue,de);else re($.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,ue,0);S(A)?M(ue):A.mipmaps.length>0&&n.texParameteri(ue,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Ye(P)}function U(P){let A=P.textures;for(let $=0,Se=A.length;$<Se;$++){let me=A[$];if(S(me)&&me.mipmapsAutoUpdate===!0){let we=b(P),Ae=i.get(me).__webglTexture;t.bindTexture(we,Ae),M(we),t.unbindTexture()}}}let ye=[];function Ce(P){if(P.samples>0){if(oe(P)===!1){let A=P.textures,$=P.width,Se=P.height,me=n.COLOR_BUFFER_BIT,we=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(P),ue=A.length>1;if(ue)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);let O=i.get(A[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,$,Se,0,0,$,Se,me,n.NEAREST),l===!0&&(ye.length=0,ye.push(n.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&ye.push(we),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);let O=i.get(A[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,O,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let A=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ze(P){return Math.min(s.maxSamples,P.samples)}function oe(P){let A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(P){let A=o.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Ve(P,A){let $=P.colorSpace,Se=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==lo&&$!==Hi&&(vt.getTransfer($)===St?(Se!==oi||me!==Bn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",$)),A}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ge,this.resetTextureUnits=W,this.getTextureUnits=F,this.setTextureUnits=fe,this.setTexture2D=_e,this.setTexture2DArray=Ie,this.setTexture3D=Xe,this.setTextureCube=te,this.rebindTextures=Be,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=re,this.useMultisampledRTT=oe,this.dispose=G}function J1(n,e){function t(i,s=Hi){let r,o=vt.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uu)return n.BYTE;if(i===du)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===Il)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===oi)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===Nl)return n.RED;if(i===Ol)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===Bo||i===zo||i===Ho||i===Go)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Bl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Vl||i===Wl||i===Xl||i===Yl||i===Vo||i===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gl||i===Vl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return r.COMPRESSED_R11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vo)return r.COMPRESSED_RG11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$l||i===Zl||i===Kl||i===Jl||i===jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===dc||i===Wo||i===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var j1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
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

}`,Wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:j1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xu=class extends fi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new Wu,g={},_=t.getContextAttributes(),S=null,M=null,b=[],T=[],v=new ze,y=null,w=null,E=new cn;E.viewport=new Gt;let R=new cn;R.viewport=new Gt;let D=[E,R],B=new El,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=b[Z];return _e===void 0&&(_e=new Sr,b[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=b[Z];return _e===void 0&&(_e=new Sr,b[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=b[Z];return _e===void 0&&(_e=new Sr,b[Z]=_e),_e.getHandSpace()};function H(Z){let _e=T.indexOf(Z.inputSource);if(_e===-1)return;let Ie=b[_e];Ie!==void 0&&(Ie.update(Z.inputSource,Z.frame,c||o),Ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ae);for(let Z=0;Z<b.length;Z++){let _e=T[Z];_e!==null&&(T[Z]=null,b[Z].disconnect(_e))}I=null,G=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(S),d=null,u=null,f=null,s=null,M=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Xe=null,te=null;_.depth&&(te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=_.stencil?zi:Ui,Xe=_.stencil?Zs:si);let z={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(z),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Fn(u.textureWidth,u.textureHeight,{format:oi,type:Bn,depthTexture:new ki(u.textureWidth,u.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Fn(d.framebufferWidth,d.framebufferHeight,{format:oi,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ae(Z){for(let _e=0;_e<Z.removed.length;_e++){let Ie=Z.removed[_e],Xe=T.indexOf(Ie);Xe>=0&&(T[Xe]=null,b[Xe].disconnect(Ie))}for(let _e=0;_e<Z.added.length;_e++){let Ie=Z.added[_e],Xe=T.indexOf(Ie);if(Xe===-1){for(let z=0;z<b.length;z++)if(z>=T.length){T.push(Ie),Xe=z;break}else if(T[z]===null){T[z]=Ie,Xe=z;break}if(Xe===-1)break}let te=b[Xe];te&&te.connect(Ie)}}function N(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let _e=Z.near,Ie=Z.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(Ie=p.depthFar)),B.near=R.near=E.near=_e,B.far=R.far=E.far=Ie,(I!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,G=B.far),B.layers.mask=Z.layers.mask|6,E.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;let Xe=Z.parent,te=B.cameras;N(B,Xe);for(let z=0;z<te.length;z++)N(te[z],Xe);B.projectionMatrix.copy(E.projectionMatrix),B.projectionMatrixInverse.copy(E.projectionMatrixInverse),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),W(Z,B,Xe)};function W(Z,_e,Ie){Ie===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(Ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let F=null;function fe(Z,_e){if(h=_e.getViewerPose(c||o),m=_e,h!==null){let Ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Xe=!1;Ie.length!==B.cameras.length&&(B.cameras.length=0,Xe=!0);for(let ee=0;ee<Ie.length;ee++){let Te=Ie[ee],he=null;if(d!==null)he=d.getViewport(Te);else{let ne=f.getViewSubImage(u,Te);he=ne.viewport,ee===0&&(e.setRenderTargetTextures(M,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(M))}let X=D[ee];X===void 0&&(X=new cn,X.layers.enable(ee),X.viewport=new Gt,D[ee]=X),X.matrix.fromArray(Te.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Te.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(he.x,he.y,he.width,he.height),ee===0&&(B.matrix.copy(X.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Xe===!0&&B.cameras.push(X)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let ee=f.getDepthInformation(Ie[0]);ee&&ee.isValid&&ee.texture&&p.init(ee,s.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let ee=0;ee<Ie.length;ee++){let Te=Ie[ee].camera;if(Te){let he=g[Te];he||(he=new Mo,g[Te]=he);let X=f.getCameraImage(Te);he.sourceTexture=X}}}}for(let Ie=0;Ie<b.length;Ie++){let Xe=T[Ie],te=b[Ie];Xe!==null&&te!==void 0&&te.update(Xe,_e,c||o)}F&&F(Z,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),m=null}let ge=new Jp;ge.setAnimationLoop(fe),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}},eb=new pt,am=new at;am.set(-1,0,0,0,1,0,0,0,1);function tb(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Au(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===qt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===qt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),S=_.envMap,M=_.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(am),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nb(n,e,t,i){let s={},r={};function o(_,S){let M=S.program;i.uniformBlockBinding(_,M,s[_.id])}function a(_,S){let M=s[_.id];M===void 0&&(m(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",p));let b=S.program;i.updateUBOMapping(_,b);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let S=n.createBuffer(),M=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,b),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(_){let S=s[_.id],M=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,v=M.length;T<v;T++){let y=M[T];if(Array.isArray(y))for(let w=0,E=y.length;w<E;w++)h(y[w],T,w,b);else h(y,T,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,S,M,b){if(u(_,S,M,b)===!0){let T=_.__offset,v=_.value;if(Array.isArray(v)){let y=0;for(let w=0;w<v.length;w++){let E=v[w],R=x(E,!0);f(E,_.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,_.__data)}}function f(_,S,M){typeof _=="number"||typeof _=="boolean"?S[M]=_:_.isMatrix3?(S[M]=_.elements[0],S[M+1]=_.elements[1],S[M+2]=_.elements[2],S[M+3]=0,S[M+4]=_.elements[3],S[M+5]=_.elements[4],S[M+6]=_.elements[5],S[M+7]=0,S[M+8]=_.elements[6],S[M+9]=_.elements[7],S[M+10]=_.elements[8],S[M+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-M),M):_.toArray(S,M)}function u(_,S,M,b){let T=_.value,v=S+"_"+M;if(Array.isArray(T)){b[v]===void 0&&(b[v]=[]);let y=b[v],w=!1;for(let E=0;E<T.length;E++)d(T[E],y,E)===!0&&(w=!0);return w}return d(T,b,v)}function d(_,S,M){if(S[M]===void 0)return typeof _=="number"||typeof _=="boolean"?S[M]=_:ArrayBuffer.isView(_)?S[M]=_.slice():S[M]=_.clone(),!0;{let b=S[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return S[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function m(_){let S=_.uniforms,M=0,b=16;for(let v=0,y=S.length;v<y;v++){let w=Array.isArray(S[v])?S[v]:[S[v]];for(let E=0,R=w.length;E<R;E++){let D=w[E],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(S[v])||Array.isArray(D.value),G=M;for(let Y=0,ae=B.length;Y<ae;Y++){let N=B[Y],W=x(N,I),F=M%b,fe=F%W.boundary,ge=F+fe;M+=fe,ge!==0&&b-ge<W.storage&&(M+=b-ge),Y===0&&(G=M),M+=W.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((M-G)/Float32Array.BYTES_PER_ELEMENT),D.__offset=G}}let T=M%b;return T>0&&(M+=b-T),_.__size=M,_.__cache={},this}function x(_,S){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(_){let S=_.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var ib=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function sb(){return gi===null&&(gi=new xo(ib,16,16,cs,ri),gi.name="DFG_LUT",gi.minFilter=Sn,gi.magFilter=Sn,gi.wrapS=di,gi.wrapT=di,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var vc=class{constructor(e={}){let{canvas:t=gp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Bn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=d,p=new Set([Fl,Ul,Ol]),g=new Set([Bn,si,Dr,Zs,Ll,Dl]),_=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,T=null,v=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,D=null,B=null,I=null,G=null;this._outputColorSpace=ln;let H=0,Y=0,ae=null,N=-1,W=null,F=new Gt,fe=new Gt,ge=null,Z=new it(0),_e=0,Ie=t.width,Xe=t.height,te=1,z=null,j=null,ee=new Gt(0,0,Ie,Xe),Te=new Gt(0,0,Ie,Xe),he=!1,X=new Gs,ne=new rl,pe=!1,xe=!1,re=new pt,Ue=new k,Fe=new Gt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function Je(){return ae===null?te:1}let U=i;function ye(C,V){return t.getContext(C,V)}let Ce,Ze,oe,nt,Ve,Ne,P,A,$,Se,me,we,Ae,ue,de,Pe,O,ce,ie,Re,Ee,Me,be;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),U===null){let V="webgl2";if(U=ye(V,C),U===null)throw ye(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(C){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ot("WebGLRenderer: "+C.message),C}function He(){Ce=new mM(U),Ce.init(),Ee=new J1(U,Ce),Ze=new sM(U,Ce,e,Ee),oe=new Z1(U,Ce),Ze.reversedDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),B=U.createFramebuffer(),I=U.createFramebuffer(),G=U.createFramebuffer(),nt=new vM(U),Ve=new O1,Ne=new K1(U,Ce,oe,Ve,Ze,Ee,nt),P=new pM(E),A=new yv(U),Me=new nM(U,A),$=new gM(U,A,nt,Me),Se=new yM(U,$,A,Me,nt),ce=new _M(U,Ze,Ne),de=new rM(Ve),me=new N1(E,P,Ce,Ze,Me,de),we=new tb(E,Ve),Ae=new F1,ue=new V1(Ce),O=new tM(E,P,oe,Se,m,l),Pe=new $1(E,Se,Ze),be=new nb(U,nt,Ze,oe),ie=new iM(U,Ce,nt),Re=new xM(U,Ce,nt),nt.programs=me.programs,E.capabilities=Ze,E.extensions=Ce,E.properties=Ve,E.renderLists=Ae,E.shadowMap=Pe,E.state=oe,E.info=nt}x!==Bn&&(w=new bM(x,t.width,t.height,a,s,r));let ve=new Xu(E,U);this.xr=ve,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize(Ie,Xe,!1))},this.getSize=function(C){return C.set(Ie,Xe)},this.setSize=function(C,V,se=!0){if(ve.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=C,Xe=V,t.width=Math.floor(C*te),t.height=Math.floor(V*te),se===!0&&(t.style.width=C+"px",t.style.height=V+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(Ie*te,Xe*te).floor()},this.setDrawingBufferSize=function(C,V,se){Ie=C,Xe=V,te=se,t.width=Math.floor(C*se),t.height=Math.floor(V*se),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(x===Bn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,V,se,J){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,V,se,J),oe.viewport(F.copy(ee).multiplyScalar(Je()).round())},this.getScissor=function(C){return C.copy(Te)},this.setScissor=function(C,V,se,J){C.isVector4?Te.set(C.x,C.y,C.z,C.w):Te.set(C,V,se,J),oe.scissor(fe.copy(Te).multiplyScalar(Je()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){oe.setScissorTest(he=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,se=!0){let J=0;if(C){let Q=!1;if(ae!==null){let We=ae.texture.format;Q=p.has(We)}if(Q){let We=ae.texture.type,Ke=g.has(We),Ge=O.getClearColor(),$e=O.getClearAlpha(),tt=Ge.r,lt=Ge.g,gt=Ge.b;Ke?(_[0]=tt,_[1]=lt,_[2]=gt,_[3]=$e,U.clearBufferuiv(U.COLOR,0,_)):(S[0]=tt,S[1]=lt,S[2]=gt,S[3]=$e,U.clearBufferiv(U.COLOR,0,S))}else J|=U.COLOR_BUFFER_BIT}V&&(J|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),O.dispose(),Ae.dispose(),ue.dispose(),Ne.dispose(),Ve.dispose(),P.dispose(),Se.dispose(),$.dispose(),Me.dispose(),be.dispose(),me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",on),ve.removeEventListener("sessionend",It),Cn.stop()};function ke(C){C.preventDefault(),bu("WebGLRenderer: Context Lost."),R=!0}function Le(){bu("WebGLRenderer: Context Restored."),R=!1;let C=nt.autoReset,V=Pe.enabled,se=Pe.autoUpdate,J=Pe.needsUpdate,Q=Pe.type;He(),nt.autoReset=C,Pe.enabled=V,Pe.autoUpdate=se,Pe.needsUpdate=J,Pe.type=Q}function De(C){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){let V=C.target;V.removeEventListener("dispose",et),ct(V)}function ct(C){At(C),Ve.remove(C)}function At(C){let V=Ve.get(C).programs;V!==void 0&&(V.forEach(function(se){me.releaseProgram(se)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,se,J,Q,We){V===null&&(V=Ye);let Ke=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ge=qr(C,V,se,J,Q);oe.setMaterial(J,Ke);let $e=se.index,tt=1;if(J.wireframe===!0){if($e=$.getWireframeAttribute(se),$e===void 0)return;tt=2}let lt=se.drawRange,gt=se.attributes.position,je=lt.start*tt,xt=(lt.start+lt.count)*tt;We!==null&&(je=Math.max(je,We.start*tt),xt=Math.min(xt,(We.start+We.count)*tt)),$e!==null?(je=Math.max(je,0),xt=Math.min(xt,$e.count)):gt!=null&&(je=Math.max(je,0),xt=Math.min(xt,gt.count));let Xt=xt-je;if(Xt<0||Xt===1/0)return;Me.setup(Q,J,Ge,se,$e);let Dt,Ct=ie;if($e!==null&&(Dt=A.get($e),Ct=Re,Ct.setIndex(Dt)),Q.isMesh)J.wireframe===!0?(oe.setLineWidth(J.wireframeLinewidth*Je()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(Q.isLine){let dn=J.linewidth;dn===void 0&&(dn=1),oe.setLineWidth(dn*Je()),Q.isLineSegments?Ct.setMode(U.LINES):Q.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else Q.isPoints?Ct.setMode(U.POINTS):Q.isSprite&&Ct.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let dn=Q._multiDrawStarts,Qe=Q._multiDrawCounts,bn=Q._multiDrawCount,bt=$e?A.get($e).bytesPerElement:1,Ls=Ve.get(J).currentProgram.getUniforms();for(let fn=0;fn<bn;fn++)Ls.setValue(U,"_gl_DrawID",fn),Ct.render(dn[fn]/bt,Qe[fn])}else if(Q.isInstancedMesh)Ct.renderInstances(je,Xt,Q.count);else if(se.isInstancedBufferGeometry){let dn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Qe=Math.min(se.instanceCount,dn);Ct.renderInstances(je,Xt,Qe)}else Ct.render(je,Xt)};function Ot(C,V,se,J){D!==null&&C.isNodeMaterial&&D.setObject(J,C),pe===!0&&de.setState(C,se,!1),C.transparent===!0&&C.side===Yn&&C.forceSinglePass===!1?(C.side=qt,C.needsUpdate=!0,Tt(C,V,J),C.side=ls,C.needsUpdate=!0,Tt(C,V,J),C.side=Yn):Tt(C,V,J)}this.compile=function(C,V,se=null){se===null&&(se=C),D!==null&&D.renderStart(C,V,se),T=ue.get(se),T.init(V),y.push(T),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),C!==se&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),xe=this.localClippingEnabled,pe=de.init(this.clippingPlanes,xe),pe===!0&&de.setGlobalState(this.clippingPlanes,V),D!==null&&Pe.render(T.state.shadowsArray,se,V);let J=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let We=Q.material;if(We)if(Array.isArray(We))for(let Ke=0;Ke<We.length;Ke++){let Ge=We[Ke];Ot(Ge,se,V,Q),J.add(Ge)}else Ot(We,se,V,Q),J.add(We)}),T=y.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(C,V,se=null){let J=this.compile(C,V,se);return new Promise(Q=>{function We(){if(J.forEach(function(Ke){let $e=Ve.get(Ke).currentProgram;($e===void 0||$e.isReady())&&J.delete(Ke)}),J.size===0){Q(C);return}setTimeout(We,10)}Ce.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Rt=null;function Nn(C){Rt&&Rt(C)}function on(){Cn.stop()}function It(){Cn.start()}let Cn=new Jp;Cn.setAnimationLoop(Nn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(C){Rt=C,ve.setAnimationLoop(C),C===null?Cn.stop():Cn.start()},ve.addEventListener("sessionstart",on),ve.addEventListener("sessionend",It),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(C,V);let se=ve.enabled===!0&&ve.isPresenting===!0,J=w!==null&&(ae===null||se)&&w.begin(E,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(V),V=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,V,ae),T=ue.get(C,y.length),T.init(V),T.state.textureUnits=Ne.getTextureUnits(),y.push(T),re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?ne.setFromArrayCamera(V):X.setFromProjectionMatrix(re,Wn,V.reversedDepth),xe=this.localClippingEnabled,pe=de.init(this.clippingPlanes,xe),b=Ae.get(C,v.length),b.init(),v.push(b),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){let Ke=E.xr.getDepthSensingMesh();Ke!==null&&hi(Ke,V,-1/0,E.sortObjects)}hi(C,V,0,E.sortObjects),b.finish(),D!==null&&D.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(z,j),Be=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Be&&O.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),pe===!0&&de.beginShadows();let Q=T.state.shadowsArray;if(Pe.render(Q,C,V),pe===!0&&de.endShadows(),(J&&w.hasRenderPass())===!1){let Ke=b.opaque,Ge=b.transmissive;if(T.setupLights(),V.isArrayCamera){let $e=V.cameras;if(Ge.length>0)for(let tt=0,lt=$e.length;tt<lt;tt++){let gt=$e[tt];q(Ke,Ge,C,gt)}Be&&O.render(C);for(let tt=0,lt=$e.length;tt<lt;tt++){let gt=$e[tt];jn(b,C,gt,gt.viewport)}}else Ge.length>0&&q(Ke,Ge,C,V),Be&&O.render(C),jn(b,C,V)}ae!==null&&Y===0&&(Ne.updateMultisampleRenderTarget(ae),Ne.updateRenderTargetMipmap(ae)),J&&w.end(E),C.isScene===!0&&C.onAfterRender(E,C,V),Me.resetDefaultState(),N=-1,W=null,y.pop(),y.length>0?(T=y[y.length-1],Ne.setTextureUnits(T.state.textureUnits),pe===!0&&de.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,D!==null&&D.renderEnd()};function hi(C,V,se,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){let Ke=V.isArrayCamera?ne:X;if(!C.frustumCulled||C.intersectsFrustum(Ke)){J&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);let Ge=Se.update(C),$e=C.material;$e.visible&&b.push(C,Ge,$e,se,Fe.z,null,V)}}else if(C.isMesh||C.isLine||C.isPoints){let Ke=V.isArrayCamera?ne:X;if(!C.frustumCulled||C.intersectsFrustum(Ke)){let Ge=Se.update(C),$e=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Fe.copy(Ge.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray($e)){let tt=Ge.groups;for(let lt=0,gt=tt.length;lt<gt;lt++){let je=tt[lt],xt=$e[je.materialIndex];xt&&xt.visible&&b.push(C,Ge,xt,se,Fe.z,je,V)}}else $e.visible&&b.push(C,Ge,$e,se,Fe.z,null,V)}}}let We=C.children;for(let Ke=0,Ge=We.length;Ke<Ge;Ke++)hi(We[Ke],V,se,J)}function jn(C,V,se,J){let{opaque:Q,transmissive:We,transparent:Ke}=C;T.setupLightsView(se),pe===!0&&de.setGlobalState(E.clippingPlanes,se),J&&oe.viewport(F.copy(J)),Q.length>0&&Oe(Q,V,se),We.length>0&&Oe(We,V,se),Ke.length>0&&Oe(Ke,V,se),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function q(C,V,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let je=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new Fn(1,1,{generateMipmaps:!0,type:je?ri:Bn,minFilter:Bi,samples:Math.max(4,Ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let We=T.state.transmissionRenderTarget[J.id],Ke=J.viewport||F;We.setSize(Ke.z*E.transmissionResolutionScale,Ke.w*E.transmissionResolutionScale);let Ge=E.getRenderTarget(),$e=E.getActiveCubeFace(),tt=E.getActiveMipmapLevel();E.setRenderTarget(We),E.getClearColor(Z),_e=E.getClearAlpha(),_e<1&&E.setClearColor(16777215,.5),E.clear(),Be&&O.render(se);let lt=E.toneMapping;E.toneMapping=mi;let gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),pe===!0&&de.setGlobalState(E.clippingPlanes,J),Oe(C,se,J),Ne.updateMultisampleRenderTarget(We),Ne.updateRenderTargetMipmap(We),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let xt=0,Xt=V.length;xt<Xt;xt++){let Dt=V[xt],{object:Ct,geometry:dn,material:Qe,group:bn}=Dt;if(Qe.side===Yn&&Ct.layers.test(J.layers)){let bt=Qe.side;Qe.side=qt,Qe.needsUpdate=!0,st(Ct,se,J,dn,Qe,bn),Qe.side=bt,Qe.needsUpdate=!0,je=!0}}je===!0&&(Ne.updateMultisampleRenderTarget(We),Ne.updateRenderTargetMipmap(We))}E.setRenderTarget(Ge,$e,tt),E.setClearColor(Z,_e),gt!==void 0&&(J.viewport=gt),E.toneMapping=lt}function Oe(C,V,se){let J=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,We=C.length;Q<We;Q++){let Ke=C[Q],{object:Ge,geometry:$e,group:tt}=Ke,lt=Ke.material;lt.allowOverride===!0&&J!==null&&(lt=J),Ge.layers.test(se.layers)&&st(Ge,V,se,$e,lt,tt)}}function st(C,V,se,J,Q,We){D!==null&&Q.isNodeMaterial&&D.setObject(C,Q),C.onBeforeRender(E,V,se,J,Q,We),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(E,V,se,J,C,We),Q.transparent===!0&&Q.side===Yn&&Q.forceSinglePass===!1?(Q.side=qt,Q.needsUpdate=!0,E.renderBufferDirect(se,V,J,Q,C,We),Q.side=ls,Q.needsUpdate=!0,E.renderBufferDirect(se,V,J,Q,C,We),Q.side=Yn):E.renderBufferDirect(se,V,J,Q,C,We),C.onAfterRender(E,V,se,J,Q,We)}function Lt(C){let V=0;for(let se of C)se.texture!==null&&V++;return V}function Tt(C,V,se){V.isScene!==!0&&(V=Ye);let J=Ve.get(C),Q=T.state.lights,We=T.state.shadowsArray,Ke=Q.state.version,Ge=me.getParameters(C,Q.state,We,V,se,T.state.lightProbeGridArray),$e=me.getProgramCacheKey(Ge),tt=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=P.get(C.envMap||J.environment,lt),J.envMapRotation=J.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",et),tt=new Map,J.programs=tt,J.programVariants=new Map);let gt=tt.get($e);if(gt!==void 0){if(J.currentProgram===gt&&J.lightsStateVersion===Ke)return Gn(C,Ge),gt}else Ge.uniforms=me.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,se,Ge),C.onBeforeCompile(Ge,E),gt=me.acquireProgram(Ge,$e),tt.set($e,gt),J.uniforms=Ge.uniforms;let je=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=de.uniform),Gn(C,Ge),J.needsLights=vh(C),J.lightsStateVersion=Ke,J.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.sunLights.value=Q.state.sun,je.sunLightShadows.value=Q.state.sunShadow,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.sunShadowMatrix.value=Q.state.sunShadowMatrix,je.sunShadowCascade.value=Q.state.sunShadowCascade,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.numLightProbeGrids=Lt(T.state.lightProbeGridArray),J.currentProgram=gt,J.uniformsList=null,gt}function Ut(C,V,se,J,Q){let We=Ve.get(C),Ke=We.currentProgram.id+","+J+","+Q,Ge=We.programVariants.get(Ke);return Ge===void 0?(Ge=Tt(C,V,se),We.programVariants.set(Ke,Ge)):(We.currentProgram=Ge,We.uniformsList=null,We.outputColorSpace=J,We.toneMapping=Q),Ge}function _t(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Or.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Gn(C,V){let se=Ve.get(C);se.outputColorSpace=V.outputColorSpace,se.batching=V.batching,se.batchingColor=V.batchingColor,se.instancing=V.instancing,se.instancingColor=V.instancingColor,se.instancingMorph=V.instancingMorph,se.skinning=V.skinning,se.morphTargets=V.morphTargets,se.morphNormals=V.morphNormals,se.morphColors=V.morphColors,se.morphTargetsCount=V.morphTargetsCount,se.numClippingPlanes=V.numClippingPlanes,se.numIntersection=V.numClipIntersection,se.vertexAlphas=V.vertexAlphas,se.vertexTangents=V.vertexTangents,se.toneMapping=V.toneMapping}function qr(C,V,se,J,Q){V.isScene!==!0&&(V=Ye),Ne.resetTextureUnits();let We=V.fog,Ke=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Ge=ae===null?E.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:vt.workingColorSpace,$e=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,tt=P.get(J.envMap||Ke,$e),lt=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,gt=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,Xt=!!se.morphAttributes.color,Dt=mi;J.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Dt=E.toneMapping);let Ct=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,dn=Ct!==void 0?Ct.length:0,Qe=Ve.get(J),bn=T.state.lights;if(pe===!0&&(xe===!0||C!==W)){let zt=C===W&&J.id===N;de.setState(J,C,zt)}let bt=!1,Ls=!1;J.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==bn.state.version||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==tt||J.fog===!0&&Qe.fog!==We||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==de.numPlanes||Qe.numIntersection!==de.numIntersection)||Qe.vertexAlphas!==lt||Qe.vertexTangents!==gt||Qe.morphTargets!==je||Qe.morphNormals!==xt||Qe.morphColors!==Xt||Qe.morphTargetsCount!==dn||Qe.numLightProbeGrids!==Lt(T.state.lightProbeGridArray)?bt=!0:(Qe.outputColorSpace!==Ge||Qe.toneMapping!==Dt)&&(Ls=!0):(bt=!0,Qe.__version=J.version);let fn=Qe.currentProgram;(bt===!0||Ls===!0)&&(fn=Ls===!0?Ut(J,V,Q,Ge,Dt):Tt(J,V,Q),D&&J.isNodeMaterial&&D.onUpdateProgram(J,fn,Qe));let _a=!1,Ji=!1,Ds=!1,yt=fn.getUniforms(),an=Qe.uniforms;if(oe.useProgram(fn.program)&&(_a=!0,Ji=!0,Ds=!0),J.id!==N&&(N=J.id,Ji=!0),_a||W!==C){oe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",C.projectionMatrix),yt.setValue(U,"viewMatrix",C.matrixWorldInverse);let en=yt.map.cameraPosition;en!==void 0&&en.setValue(U,Ue.setFromMatrixPosition(C.matrixWorld)),Ze.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),W!==C&&(W=C,Ji=!0,Ds=!0)}if(Qe.needsLights&&(bn.state.sunShadowMap.length>0&&yt.setValue(U,"sunShadowMap",bn.state.sunShadowMap,Ne),bn.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",bn.state.directionalShadowMap,Ne),bn.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",bn.state.spotShadowMap,Ne),bn.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",bn.state.pointShadowMap,Ne)),Q.isSkinnedMesh){yt.setOptional(U,Q,"bindMatrix"),yt.setOptional(U,Q,"bindMatrixInverse");let zt=Q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),yt.setValue(U,"boneTexture",zt.boneTexture,Ne))}Q.isBatchedMesh&&(yt.setOptional(U,Q,"batchingTexture"),yt.setValue(U,"batchingTexture",Q._matricesTexture,Ne),yt.setOptional(U,Q,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",Q._indirectTexture,Ne),yt.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",Q._colorsTexture,Ne));let Qn=se.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&ce.update(Q,se,fn),(Ji||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,yt.setValue(U,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(an.envMapIntensity.value=V.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=sb()),Ji){if(yt.setValue(U,"toneMappingExposure",E.toneMappingExposure),Qe.needsLights&&ir(an,Ds),We&&J.fog===!0&&we.refreshFogUniforms(an,We),we.refreshMaterialUniforms(an,J,te,Xe,T.state.transmissionRenderTarget[C.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let zt=M,en=0;for(let Ci of T.state.lightProbeGridArray)Ci.texture!==null&&(zt.textures[en]=Ci.texture,zt.min[en]=Ci.boundingBox.min,zt.max[en]=Ci.boundingBox.max,zt.resolution[en]=Ci.resolution,en++);for(let Ci in zt)zt[Ci].length=en;an.probesSH.value=zt.textures,an.probesMin.value=zt.min,an.probesMax.value=zt.max,an.probesResolution.value=zt.resolution}Or.upload(U,_t(Qe),an,Ne)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Or.upload(U,_t(Qe),an,Ne),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(U,"center",Q.center),yt.setValue(U,"modelViewMatrix",Q.modelViewMatrix),yt.setValue(U,"normalMatrix",Q.normalMatrix),yt.setValue(U,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let zt=J.uniformsGroups;for(let en=0,Ci=zt.length;en<Ci;en++){let of=zt[en];be.update(of,fn),be.bind(of,fn)}}return fn}function ir(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.sunLights.needsUpdate=V,C.sunLightShadows.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function vh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,V,se){let J=Ve.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ve.get(C.texture).__webglTexture=V,Ve.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){let se=Ve.get(C);se.__webglFramebuffer=V,se.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,se=0){ae=C,H=V,Y=se;let J=null,Q=!1,We=!1;if(C){let Ge=Ve.get(C);if(Ge.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(U.FRAMEBUFFER,Ge.__webglFramebuffer),F.copy(C.viewport),fe.copy(C.scissor),ge=C.scissorTest,oe.viewport(F),oe.scissor(fe),oe.setScissorTest(ge),N=-1;return}else if(Ge.__webglFramebuffer===void 0)Ne.setupRenderTarget(C);else if(Ge.__hasExternalTextures)Ne.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let lt=C.depthTexture;if(Ge.__boundDepthTexture!==lt){if(lt!==null&&Ve.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(C)}}let $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(We=!0);let tt=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[V])?J=tt[V][se]:J=tt[V],Q=!0):C.samples>0&&Ne.useMultisampledRTT(C)===!1?J=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?J=tt[se]:J=tt,F.copy(C.viewport),fe.copy(C.scissor),ge=C.scissorTest}else F.copy(ee).multiplyScalar(te).floor(),fe.copy(Te).multiplyScalar(te).floor(),ge=he;if(se!==0&&(J=B),oe.bindFramebuffer(U.FRAMEBUFFER,J)&&oe.drawBuffers(C,J),oe.viewport(F),oe.scissor(fe),oe.setScissorTest(ge),Q){let Ge=Ve.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,se)}else if(We){let Ge=V;for(let $e=0;$e<C.textures.length;$e++){let tt=Ve.get(C.textures[$e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+$e,tt.__webglTexture,se,Ge)}}else if(C!==null&&se!==0){let Ge=Ve.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ge.__webglTexture,se)}N=-1};function $r(C){let V=Ve.get(C);return(V.__readFormat!==C.format||V.__readType!==C.type)&&(V.__readFormat=C.format,V.__readType=C.type,V.__formatReadable=Ze.textureFormatReadable(C.format),V.__typeReadable=Ze.textureTypeReadable(C.type)),V}this.readRenderTargetPixels=function(C,V,se,J,Q,We,Ke,Ge=0){if(!(C&&C.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke],Array.isArray($e)&&($e=$e[0])),$e){oe.bindFramebuffer(U.FRAMEBUFFER,$e);try{let tt=C.textures[Ge],lt=tt.format,gt=tt.type;C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ge);let je=$r(tt);if(je.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&se>=0&&se<=C.height-Q&&U.readPixels(V,se,J,Q,Ee.convert(lt),Ee.convert(gt),We)}finally{let tt=ae!==null?Ve.get(ae).__webglFramebuffer:null;oe.bindFramebuffer(U.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,V,se,J,Q,We,Ke,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke],Array.isArray($e)&&($e=$e[0])),$e)if(V>=0&&V<=C.width-J&&se>=0&&se<=C.height-Q){oe.bindFramebuffer(U.FRAMEBUFFER,$e);let tt=C.textures[Ge],lt=tt.format,gt=tt.type;C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ge);let je=$r(tt);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,We.byteLength,U.STREAM_READ),U.readPixels(V,se,J,Q,Ee.convert(lt),Ee.convert(gt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Xt=ae!==null?Ve.get(ae).__webglFramebuffer:null;oe.bindFramebuffer(U.FRAMEBUFFER,Xt);let Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await vp(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,We),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(xt),U.deleteSync(Dt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,se=0){let J=Math.pow(2,-se),Q=Math.floor(C.image.width*J),We=Math.floor(C.image.height*J),Ke=V!==null?V.x:0,Ge=V!==null?V.y:0;Ne.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,se,0,0,Ke,Ge,Q,We),oe.unbindTexture()},this.copyTextureToTexture=function(C,V,se=null,J=null,Q=0,We=0){let Ke,Ge,$e,tt,lt,gt,je,xt,Xt,Dt=C.isCompressedTexture?C.mipmaps[We]:C.image;if(se!==null)Ke=se.max.x-se.min.x,Ge=se.max.y-se.min.y,$e=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,lt=se.min.y,gt=se.isBox3?se.min.z:0;else{let yt=Math.pow(2,-Q);Ke=Math.floor(Dt.width*yt),Ge=Math.floor(Dt.height*yt),C.isDataArrayTexture?$e=Dt.depth:C.isData3DTexture?$e=Math.floor(Dt.depth*yt):$e=1,tt=0,lt=0,gt=0}J!==null?(je=J.x,xt=J.y,Xt=J.z):(je=0,xt=0,Xt=0);let Ct=Ee.convert(V.format),dn=Ee.convert(V.type),Qe;V.isData3DTexture?(Ne.setTexture3D(V,0),Qe=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ne.setTexture2DArray(V,0),Qe=U.TEXTURE_2D_ARRAY):(Ne.setTexture2D(V,0),Qe=U.TEXTURE_2D),oe.activeTexture(U.TEXTURE0),oe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),oe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),oe.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let bn=oe.getParameter(U.UNPACK_ROW_LENGTH),bt=oe.getParameter(U.UNPACK_IMAGE_HEIGHT),Ls=oe.getParameter(U.UNPACK_SKIP_PIXELS),fn=oe.getParameter(U.UNPACK_SKIP_ROWS),_a=oe.getParameter(U.UNPACK_SKIP_IMAGES);oe.pixelStorei(U.UNPACK_ROW_LENGTH,Dt.width),oe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt.height),oe.pixelStorei(U.UNPACK_SKIP_PIXELS,tt),oe.pixelStorei(U.UNPACK_SKIP_ROWS,lt),oe.pixelStorei(U.UNPACK_SKIP_IMAGES,gt);let Ji=C.isDataArrayTexture||C.isData3DTexture,Ds=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){let yt=Ve.get(C),an=Ve.get(V),Qn=Ve.get(yt.__renderTarget),zt=Ve.get(an.__renderTarget);oe.bindFramebuffer(U.READ_FRAMEBUFFER,Qn.__webglFramebuffer),oe.bindFramebuffer(U.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let en=0;en<$e;en++)Ji&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,Q,gt+en),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(V).__webglTexture,We,Xt+en)),U.blitFramebuffer(tt,lt,tt+Ke,lt+Ge,je,xt,je+Ke,xt+Ge,U.DEPTH_BUFFER_BIT,U.NEAREST);oe.bindFramebuffer(U.READ_FRAMEBUFFER,null),oe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ve.has(C)){let yt=Ve.get(C),an=Ve.get(V);oe.bindFramebuffer(U.READ_FRAMEBUFFER,I),oe.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Qn=0;Qn<$e;Qn++)Ji?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,Q,gt+Qn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,Q),Ds?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,We,Xt+Qn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,We),Q!==0?U.blitFramebuffer(tt,lt,tt+Ke,lt+Ge,je,xt,je+Ke,xt+Ge,U.COLOR_BUFFER_BIT,U.NEAREST):Ds?U.copyTexSubImage3D(Qe,We,je,xt,Xt+Qn,tt,lt,Ke,Ge):U.copyTexSubImage2D(Qe,We,je,xt,tt,lt,Ke,Ge);oe.bindFramebuffer(U.READ_FRAMEBUFFER,null),oe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ds?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Qe,We,je,xt,Xt,Ke,Ge,$e,Ct,dn,Dt.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Qe,We,je,xt,Xt,Ke,Ge,$e,Ct,Dt.data):U.texSubImage3D(Qe,We,je,xt,Xt,Ke,Ge,$e,Ct,dn,Dt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,We,je,xt,Ke,Ge,Ct,dn,Dt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,We,je,xt,Dt.width,Dt.height,Ct,Dt.data):U.texSubImage2D(U.TEXTURE_2D,We,je,xt,Ke,Ge,Ct,dn,Dt);oe.pixelStorei(U.UNPACK_ROW_LENGTH,bn),oe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt),oe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ls),oe.pixelStorei(U.UNPACK_SKIP_ROWS,fn),oe.pixelStorei(U.UNPACK_SKIP_IMAGES,_a),We===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&U.generateMipmap(Qe),oe.unbindTexture()},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&Ne.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ne.setTextureCube(C,0):C.isData3DTexture?Ne.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ne.setTexture2DArray(C,0):Ne.setTexture2D(C,0),oe.unbindTexture()},this.resetState=function(){H=0,Y=0,ae=null,oe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var le={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4}};function Mc({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(x){if(!(x>0)||!Number.isFinite(x))return;t&&t(x),o+=x;let p=0;for(;o>=r&&p<s;)n(r),o-=r,p++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),x)}function f(x){if(c){try{l!==null&&h((x-l)/1e3)}catch(p){throw m(),p}l=x,c&&(a=requestAnimationFrame(f))}}function u(){document.visibilityState==="visible"&&(l=null)}function d(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(f))}function m(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:d,stop:m}}var Yu=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),rb={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},ob={0:"fire",2:"aim"},lm={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},cm={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},ab=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function qu(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!ab.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function hm(n){return rb[n]||null}function um(n){return ob[n]||null}function Fr(){let n={};for(let e of Yu)n[e]=!1;return n}function dm(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function lb(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=dm(n.axes[0],n.axes[1]),[i,s]=dm(n.axes[2],n.axes[3]),r=Fr();for(let o in lm){let a=n.buttons[o];r[lm[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function cb(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of Yu)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function bc(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Fr(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=Fr();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){cb(e)}function f(b){if(qu(b.target))return;let T=hm(b.code);(T||b.code in cm)&&(c()&&(b.code==="Tab"||b.code==="Space")&&b.preventDefault(),r="kbm",!b.repeat&&!t.has(b.code)&&T&&s.add(T),t.add(b.code))}function u(b){t.delete(b.code)}function d(b){b.target===n&&n.focus();let T=um(b.button);T&&(r="kbm",i.has(b.button)||s.add(T),i.add(b.button))}function m(b){i.delete(b.button)}function x(b){l()&&(r="kbm",e.lookDX+=b.movementX||0,e.lookDY+=b.movementY||0)}function p(b){!c()||!b.deltaY||(r="kbm",s.add(b.deltaY>0?"weaponNext":"weaponPrev"),b.preventDefault())}function g(b){b.preventDefault()}function _(){l()||h()}window.addEventListener("keydown",f),window.addEventListener("keyup",u),window.addEventListener("mouseup",m),window.addEventListener("blur",h),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",_),n.addEventListener("mousedown",d),n.addEventListener("wheel",p,{passive:!1}),n.addEventListener("contextmenu",g);function S(){let b=[];try{b=navigator.getGamepads&&navigator.getGamepads()||[]}catch{b=[]}let T=null;for(let y of b)if(y&&y.connected){T=y;break}let v=lb(T);return o=v.ok?T.id:v.reason==="none"?"none":"unrecognised controller",v}function M(){let b={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Fr(),pressed:Fr()};e.lookDX=0,e.lookDY=0;for(let y of t){let w=hm(y);w&&(b.held[w]=!0);let E=cm[y];E&&(b.moveX+=E[0],b.moveY+=E[1])}for(let y of i){let w=um(y);w&&(b.held[w]=!0)}let T=Math.hypot(b.moveX,b.moveY);T>1&&(b.moveX/=T,b.moveY/=T);for(let y of s)b.pressed[y]=!0;s.clear();let v=S();if(v.ok){b.lookX=v.lookX,b.lookY=v.lookY;let y=v.moveX!==0||v.moveY!==0||v.lookX!==0||v.lookY!==0;for(let E of Yu)v.held[E]&&(y=!0,b.held[E]=!0,a[E]||(b.pressed[E]=!0));a=v.held,b.moveX+=v.moveX,b.moveY+=v.moveY;let w=Math.hypot(b.moveX,b.moveY);w>1&&(b.moveX/=w,b.moveY/=w),y&&(r="pad")}else a=Fr();return b}return{poll:M,requestLock(){try{let b=n.requestPointerLock&&n.requestPointerLock();b&&typeof b.catch=="function"&&b.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function pm(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var hb=2e3,fm=1e4,ub=8e4;function mm({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,f){if(f-n<hb||(i+=Math.min(h,100),s++,s<60||i<1e3))return t;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let d=pm(t,u,Math.max(14,1.1*r));if(d>t){if(f<l)return t;o=f}else d<t&&(o!==null&&f-o<fm&&(a=a===0?fm:Math.min(a*2,ub),l=f+a),o=null);return t=d,t}return{sample:c,scale:()=>t}}var K=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var $u={viewportHeight:{value:1080}};function ai(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=t.getX(l),h[1]+=t.getY(l),h[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new wt(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],f=c[1],u=c[2],d=Math.hypot(h,f,u);d<1e-6&&(h=t.getX(l),f=t.getY(l),u=t.getZ(l),d=Math.hypot(h,f,u)||1),a.setXYZ(l,h/d,f/d,u/d)}return a.needsUpdate=!0,n}var db=`
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
`,fb=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function pb({px:n=le.outlinePx,color:e=K.ink,outlineNormal:t=!1}={}){return new _n({name:"outline",uniforms:{px:{value:n},inkColor:{value:new it(e)},viewportHeight:$u.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:db,fragmentShader:fb,side:qt})}function mb(){}var gm=new Map;function gb(n,e,t){let i=n+"|"+new it(e).getHexString()+"|"+t,s=gm.get(i);return s||(s=pb({px:n,color:e,outlineNormal:t}),gm.set(i,s)),s}function An(n,{px:e=le.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=gb(e,K.ink,t),s=new mt(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=mb,n.add(s),s}function Zu(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function xb(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Sc(n,e){let t=new vc({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=ln;let i=mm({startMs:performance.now()});function s(){let o=xb(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),$u.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var Gi={lightDir:{value:new k(...le.lightDir).normalize()},shadowTint:{value:new it(K.shadowTint)},bandEdge:{value:.15},shadowLift:{value:le.shadowLift}},vb=`
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
`,_b=`
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
`;function Vt({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new _n({name:"toon",uniforms:{baseColor:{value:new it(n)},shadowMix:{value:t},rim:{value:i},lightDir:Gi.lightDir,shadowTint:Gi.shadowTint,bandEdge:Gi.bandEdge,shadowLift:Gi.shadowLift},vertexShader:vb,fragmentShader:_b,vertexColors:e})}var yb=400,Mb=[-.45,.22,-1],bb=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,Sb=`
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
`;function wc({planetDir:n=Mb}={}){let e=r=>new it(r),t=new _n({name:"sky",uniforms:{deep:{value:e(K.nebulaDeep)},hot:{value:e(K.nebulaHot)},pink:{value:e(K.hotPink)},lilac:{value:e(K.lilac)},ink:{value:e(K.ink)},planetColor:{value:e(K.planet)},shadowTint:Gi.shadowTint,shadowLift:Gi.shadowLift,bandEdge:Gi.bandEdge,lightDir:Gi.lightDir,planetDir:{value:new k(...n).normalize()},time:{value:0}},vertexShader:bb,fragmentShader:Sb,side:qt,depthWrite:!1}),i=new mt(new vn(yb,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function Mn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new kt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=xm(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let m=xm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function xm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new wt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);a.setComponent(u+f,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function _m(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],f=["getX","getY","getZ","getW"],u=e*.5,d=Math.log10(1/e),m=Math.pow(10,d),x=u*m;for(let g=0;g<r;g++){let _=i?i.getX(g):g,S="";for(let M=0,b=a.length;M<b;M++){let T=a[M],v=n.getAttribute(T),y=v.itemSize;for(let w=0;w<y;w++)S+=`${Math.trunc(v[f[w]](_)*m+x)},`}S in t?h.push(t[S]):(l.push(_),t[S]=o,h.push(o),o++)}let p=n.clone();for(let g in n.attributes)p.setAttribute(g,vm(n.attributes[g],l,c));for(let g in n.morphAttributes)p.morphAttributes[g]=n.morphAttributes[g].map(_=>vm(_,l,c));return p.setIndex(h),p}function vm(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function kr(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function ym(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new k),l=o.getCenter(new k),c=a.length(),h=kr(e*7919+13>>>0),f=[];for(let g=0;g<8;g++)f.push(h()*2-1);let u=Math.min(t*c,i)*.99/Math.sqrt(3),d=(g,_)=>_>1e-9?2*g/_:0,m=[a.x,a.y,a.z].map(g=>g>1e-9?2/g:0),x=new at,p=new k;for(let g=0;g<s.count;g++){let _=d(s.getX(g)-l.x,a.x),S=d(s.getY(g)-l.y,a.y),M=d(s.getZ(g)-l.z,a.z),b=(S+1)/2,T=(f[0]*S+f[1]*_*S)/2,v=(f[2]*_+f[3]*M)/2*b,y=(f[4]*S+f[5]*M*S)/2;if(r){let w=[f[1]*S/2,(f[0]+f[1]*_)/2,0],E=[f[2]/2*b,(f[2]*_+f[3]*M)/2*.5,f[3]/2*b],R=[0,(f[4]+f[5]*M)/2,f[5]*S/2];x.set(1+u*w[0]*m[0],u*w[1]*m[1],u*w[2]*m[2],u*E[0]*m[0],1+u*E[1]*m[1],u*E[2]*m[2],u*R[0]*m[0],u*R[1]*m[1],1+u*R[2]*m[2]),x.invert().transpose(),p.set(r.getX(g),r.getY(g),r.getZ(g)).applyMatrix3(x).normalize(),r.setXYZ(g,p.x,p.y,p.z)}s.setXYZ(g,s.getX(g)+u*T,s.getY(g)+u*v,s.getZ(g)+u*y)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var Ku=null;function wb(){return Ku||(Ku=Vt({vertexColors:!0})),Ku}var ju=(n,e,t)=>new it(n).lerp(new it(e),t),Qu=(n,e=.3)=>ju(n,"#ffffff",e),Tc=(n,e=.2)=>ju(n,K.shadowTint,e),Mm=new pt,bm=new wn,Sm=new Pn,Tb=new k,Eb=new k;function hs(n=1,e=.02,t="prop"){let i=[],s=0;function r(h,f,u={}){let d=h.index?h.toNonIndexed():h;d.deleteAttribute("uv");let m=u.wonk===void 0?e:u.wonk;m>0&&ym(d,n*131+s,m),s++;let x=d.getAttribute("normal"),p=new Float32Array(x.count*3);for(let g=0;g<x.count;g++){let _=typeof f=="function"?f(x.getX(g),x.getY(g),x.getZ(g)):f;p[g*3]=_.r,p[g*3+1]=_.g,p[g*3+2]=_.b}return d.setAttribute("color",new wt(p,3)),(u.sx||u.sy||u.sz)&&d.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&d.applyMatrix4(u.m),Sm.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),bm.setFromEuler(Sm),Mm.compose(Tb.set(u.x||0,u.y||0,u.z||0),bm,Eb.set(1,1,1)),d.applyMatrix4(Mm),i.push(d),d}function o(h,f={}){let u=f.top||Qu(h),d=f.side||Tc(h,.22),m=Tc(h,.4),x=new it(h);return(p,g,_)=>g>.5?u:g<-.5?m:Math.abs(p)>.5?d:_>0?x:m}function a(h,f,u,d,m={}){return r(new Pt(h,f,u),o(d,m),m)}function l(h,f,u,d,m,x,p,g={}){return a(f-h,d-u,x-m,p,{...g,x:(h+f)/2,y:(u+d)/2,z:(m+x)/2})}function c(h=0){let f=Mn(i,!1);if(!f)throw new Error(`${t}: parts have different attributes and cannot be merged`);return h>0&&ym(f,n,h),ai(f)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function us(n){let e=new Mt,t=new mt(n,wb());return An(t),e.add(t),e}var Vi=n=>()=>new it(n);function Ec({w:n,d:e,tile:t=1,colors:i=[K.cream,K.tealLight]}){let s=hs(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,K.lilac,{top:new it(K.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new ss(t,t);h.rotateX(-Math.PI/2),s.add(h,Vi(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(c+.5)*t})}return us(s.finish())}function ed({w:n,h:e,color:t=K.cream,stripe:i=K.hotPink,opening:s=null,seed:r=2}){let o=hs(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,f=-.3,u=new Er;if(u.moveTo(c,f),u.lineTo(h,f),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let g=new Vs,_=s.x-s.w/2,S=s.x+s.w/2;g.moveTo(_,s.y),g.lineTo(_,s.y+s.h),g.lineTo(S,s.y+s.h),g.lineTo(S,s.y),g.closePath(),u.holes.push(g)}let d=new Io(u,{depth:a,bevelEnabled:!1});d.translate(0,0,-l),o.add(d,o.facePaint(t),{wonk:0}),o.span(c,h,f,.28,-l,l+.04,K.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,K.teal);let m=.5,x=.8;return s&&s.y<x&&s.y+s.h>m?(o.span(c,s.x-s.w/2,m,x,l-.01,l+.03,i),o.span(s.x+s.w/2,h,m,x,l-.01,l+.03,i)):o.span(c,h,m,x,l-.01,l+.03,i),us(o.finish(.006))}function Ab(n,e,t,i){let s=p=>Math.min(2048,Math.max(64,Math.round(p))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),f=[[n]];for(let p=1;p<h.length;p++)f.push([h.slice(0,p).join(" "),h.slice(p).join(" ")]);let u=null;for(let p of f){let g=Math.max(...p.map(S=>l.measureText(S).width)),_=Math.min(r*.88*100/g,o*.8/(p.length*1.08));(!u||_>u.size)&&(u={lines:p,size:_})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let d=u.size*1.08,m=o/2-(u.lines.length-1)*d/2;u.lines.forEach((p,g)=>{let _=m+g*d;l.fillStyle=K.ink,l.fillText(p,r/2+u.size*.05,_+u.size*.06),l.fillStyle=t,l.fillText(p,r/2,_)});let x=new _o(a);return x.colorSpace=ln,x.anisotropy=8,x}function Ac({text:n,w:e,h:t,bg:i=K.hotPink,fg:s=K.cream,tilt:r=.04,seed:o=3}){let c=hs(o,0,"sign");c.box(e,t,.14,s,{wonk:0});let h=us(c.finish()),f=e-.14*2,u=t-.14*2,d=new mt(new ss(f,u),new Fi({map:Ab(n,i,s,f/u),toneMapped:!1}));return d.name="signFace",d.position.z=.14/2+.008,h.add(d),h.rotation.z=r,h}function wm({w:n,h:e,seed:t=4}){let i=hs(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,K.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,K.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,K.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,K.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,K.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,K.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,K.cream),us(i.finish(.006))}function Zo(n,e,t,i,s,r){let o=new Xs(.16,.05,8,20);n.add(o,Vi(K.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function Tm({w:n,h:e,name:t,signColor:i=K.hotPink,seed:s=5}){let r=hs(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=ju(K.glorpPurple,K.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,K.lilac);for(let g of[-1,1]){let _=g*(n/2-a/2);r.span(_-a/2,_+a/2,0,c,-o/2,o/2,K.lilac),r.span(_-a/2-.04,_+a/2+.04,0,.3,-o/2,o/2+.04,K.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,K.teal);let f=n-a*2-.1;r.span(-f/2,f/2,0,.86,.02,o/2+.3,K.hotPink),r.span(-f/2,f/2,0,.12,.02,o/2+.34,K.lilac),r.span(-f/2-.06,f/2+.06,.86,.96,0,o/2+.42,K.cream),Zo(r,-.9,1.01,.4,.1,.4),Zo(r,-.2,1.01,.5,-.1,-.3),Zo(r,.6,1.01,.38,.12,.9),Zo(r,1.2,1.01,.52,0,.1);let u=10,d=(n-.1)/u,m=.42;for(let g=0;g<u;g++){let _=g%2?K.cream:i,S=-n/2+.05+(g+.5)*d;r.box(d,.08,.95,_,{x:S,y:c-.02,z:o/2+.35,rx:m,top:Qu(_,.2)}),r.box(d,.22,.06,_,{x:S,y:c-.24,z:o/2+.8,rx:.1})}let x=us(r.finish(.006)),p=Ac({text:t,w:n-.7,h:1.15,bg:i,fg:K.cream,seed:s+1});return p.position.set(0,c+.7,o/2+.01),x.add(p),x}function Em({w:n=2,d:e=1,h:t=.9,color:i=K.teal,seed:s=7}={}){let r=hs(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,K.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,K.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?K.cream:K.hotPink;r.box(a-.04,t-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,K.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,K.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),Zo(r,.45,t+.06,.05,.1,.5);let l=us(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function Am({w:n=1.8,seed:e=11}={}){let t=hs(e,.02,"bench"),i=.5;t.box(n,.1,i,K.lilac,{y:.46}),t.box(n,.42,.08,K.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,K.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,K.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=us(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function Rb(n,e,t){let i=new Pt(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function Rm({seed:n=21}={}){let e=hs(n,.02,"planter"),t=kr(n);e.add(new xn(.42,.32,.55,16),Vi(K.teal),{y:.275}),e.add(new xn(.47,.44,.12,16),Vi(K.hotPink),{y:.6}),e.add(new xn(.4,.4,.04,16),Vi(Tc(K.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Tc(K.planet,.15);for(let l=0;l<6;l++)e.add(new xn(.06-l*.004,.07-l*.004,.34,8),Vi(l%2?Qu(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+t()*.3,h=l%2?.95+t()*.25:1.45+t()*.25,f=new pt().makeTranslation(i,s,0).multiply(new pt().makeRotationY(c)).multiply(new pt().makeRotationZ(-h));e.add(Rb(.95,.24,l%2?.22:.4),Vi(l%2?K.gel:K.teal),{m:f,wonk:.03})}e.add(new vn(.1,10,8),Vi(K.planet),{x:i,y:s-.05,z:.08}),e.add(new vn(.1,10,8),Vi(K.planet),{x:i+.07,y:s-.1,z:-.07});let a=us(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Ju=null;function Rc({rx:n,rz:e,opacity:t=.35}){let r=new it(K.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let f=1;f<=8;f++){let u=f/8,d=t*(1-u*u*(3-2*u));for(let m=0;m<28;m++){let x=m/28*Math.PI*2;o.push(Math.cos(x)*n*u,0,Math.sin(x)*e*u),a.push(r.r,r.g,r.b,d)}}let l=[];for(let f=0;f<28;f++)l.push(0,1+(f+1)%28,1+f);for(let f=1;f<8;f++){let u=1+(f-1)*28,d=1+f*28;for(let m=0;m<28;m++){let x=(m+1)%28;l.push(u+m,u+x,d+m,u+x,d+x,d+m)}}let c=new kt;c.setAttribute("position",new dt(o,3)),c.setAttribute("color",new dt(a,4)),c.setIndex(l),Ju||(Ju=new Fi({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new mt(c,Ju);return h.name="blobShadow",h.position.y=.012,h}var Ko=8,Cc=Ko/2,td=.2;function Cm(){let n=new Mt;n.add(Ec({w:Ko,d:Ko}));let e=ed({w:Ko+td*2,h:4});e.position.set(0,0,-Cc-td/2),n.add(e);let t=1.3,i=Tm({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:K.hotPink});i.position.set(t,0,-Cc+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=ed({w:Ko,h:4,color:"#f1e6ff",opening:s});r.position.set(-Cc-td/2,0,0),r.rotation.y=Math.PI/2;let o=wm({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=Em({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Am({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=Rm({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(f,u,d,m,x=0)=>{let p=Rc({rx:d,rz:m,opacity:.7});p.position.x=f,p.position.z=u,p.rotation.y=x,n.add(p)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(t,-Cc+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function Rn(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function nd(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],c=e[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let f=1.15*o,u=e[0],d=e[1],m=e[2];h>f&&(h=f,u=n[0]+a*h,d=n[1]+l*h,m=n[2]+c*h);let x=h>o?h/o:1;if(h>=o){let y=h*(o>0?t/o:.5);return Pm(r,n[0]+a*y,n[1]+l*y,n[2]+c*y,u,d,m,x)}let p=Math.max(h,1e-6),g=Math.min(Math.max((p*p+t*t-i*i)/(2*p),-t),t),_=Math.sqrt(Math.max(t*t-g*g,0)),S=s[0],M=s[1],b=s[2],T=S*a+M*l+b*c;S-=a*T,M-=l*T,b-=c*T;let v=Math.hypot(S,M,b);return v<1e-6&&(Math.abs(a)<.9?(S=0,M=c,b=-l):(S=-c,M=0,b=a),v=Math.hypot(S,M,b)||1),S/=v,M/=v,b/=v,Pm(r,n[0]+a*g+S*_,n[1]+l*g+M*_,n[2]+c*g+b*_,u,d,m,x)}function Pm(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=e,l[1]=t,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var Im=[.65,1.2];function id({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=Im.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),c=[],h=(xe,re,Ue)=>{for(let Fe=0;Fe<t;Fe++){let Ye=(Fe+1)%t,Be=xe+Fe,Je=xe+Ye,U=re+Fe,ye=re+Ye;Ue?c.push(Be,U,Je,Je,U,ye):c.push(Be,Je,U,Je,ye,U)}};for(let xe=0;xe<e;xe++)h(xe*t,(xe+1)*t,!1);for(let xe=0;xe<2;xe++){let re=xe===0,Ue=xe===0?0:e*t;for(let Ye=0;Ye<r;Ye++){let Be=a[xe]+Ye*t;h(Ue,Be,re),Ue=Be}let Fe=a[xe]+r*t;for(let Ye=0;Ye<t;Ye++){let Be=Ue+Ye,Je=Ue+(Ye+1)%t;re?c.push(Be,Fe,Je):c.push(Be,Je,Fe)}}let f=new Float32Array(l*3),u=new Float32Array(l*3),d=new kt,m=new wt(f,3),x=new wt(u,3);m.setUsage(Nr),x.setUsage(Nr),d.setAttribute("position",m),d.setAttribute("normal",x),d.setIndex(c);let p=new mt(d,Vt({color:i}));p.name="limb";let g=new Xn(new k,n*2);d.boundingSphere=g,An(p);let _=new Float64Array(t),S=new Float64Array(t);for(let xe=0;xe<t;xe++)_[xe]=Math.cos(xe/t*Math.PI*2),S[xe]=Math.sin(xe/t*Math.PI*2);let M=0,b=-1,T=0,v=1,y=0,w=0,E=0,R=0,D=1,B=0,I=0,G=0,H=0,Y=0,ae=0,N=0,W=0,F=0,fe=0,ge=0,Z=0,_e=0,Ie=0,Xe=0,te=0,z=0,j=0;function ee(xe,re,Ue,Fe,Ye,Be,Je,U,ye,Ce,Ze,oe,nt,Ve,Ne,P){for(let A=0;A<t;A++){let $=_[A]*Be+S[A]*ye,Se=_[A]*Je+S[A]*Ce,me=_[A]*U+S[A]*Ze,we=(xe+A)*3;f[we]=re+$*Ye,f[we+1]=Ue+Se*Ye,f[we+2]=Fe+me*Ye,u[we]=$*Ne+oe*P,u[we+1]=Se*Ne+nt*P,u[we+2]=me*Ne+Ve*P}}let Te=!1,he=1,X=0,ne=0;function pe(xe,re,Ue,Fe=1){let Ye=n/Math.sqrt(Fe>1?Fe:1),Be=2*re[0]-(xe[0]+Ue[0])/2,Je=2*re[1]-(xe[1]+Ue[1])/2,U=2*re[2]-(xe[2]+Ue[2])/2,ye=xe[0],Ce=xe[1],Ze=xe[2],oe=Ue[0],nt=Ue[1],Ve=Ue[2],Ne=(re[1]-Ce)*(Ve-re[2])-(re[2]-Ze)*(nt-re[1]),P=(re[2]-Ze)*(oe-re[0])-(re[0]-ye)*(Ve-re[2]),A=(re[0]-ye)*(nt-re[1])-(re[1]-Ce)*(oe-re[0]),$=Math.hypot(Ne,P,A),Se=re[0]-ye,me=re[1]-Ce,we=re[2]-Ze,Ae=Math.hypot(Se,me,we),ue=oe-re[0],de=nt-re[1],Pe=Ve-re[2],O=!1;$>1e-4*Ae*Math.hypot(ue,de,Pe)&&$>1e-12?(Ne/=$,P/=$,A/=$,Te&&Ne*he+P*X+A*ne<0&&(Ne=-Ne,P=-P,A=-A),O=!0):Ae>1e-9&&Se*ue+me*de+we*Pe<0&&(Be=(ye+oe)/2,Je=(Ce+nt)/2,U=(Ze+Ve)/2);let ce=(ye+Be+oe)/3,ie=(Ce+Je+nt)/3,Re=(Ze+U+Ve)/3,Ee=Math.max(Math.hypot(ye-ce,Ce-ie,Ze-Re),Math.hypot(Be-ce,Je-ie,U-Re),Math.hypot(oe-ce,nt-ie,Ve-Re));g.center.set(ce,ie,Re),g.radius=Ee+n*1.5+.02;for(let Me=0;Me<s;Me++){let be=Me/e,He=1-be,ve=He*He,ke=2*He*be,Le=be*be,De=ve*ye+ke*Be+Le*oe,et=ve*Ce+ke*Je+Le*nt,ct=ve*Ze+ke*U+Le*Ve,At=2*He*(Be-ye)+2*be*(oe-Be),Ot=2*He*(Je-Ce)+2*be*(nt-Je),Rt=2*He*(U-Ze)+2*be*(Ve-U),Nn=Math.hypot(At,Ot,Rt);if(Nn>1e-9?(M=At/Nn,b=Ot/Nn,T=Rt/Nn):Me===0&&(M=0,b=-1,T=0),Me===0){O?(v=Ne,y=P,w=A):Te?(v=he,y=X,w=ne):(v=1,y=0,w=0);let on=v*M+y*b+w*T;v-=M*on,y-=b*on,w-=T*on;let It=Math.hypot(v,y,w);It<1e-6&&(Math.abs(M)<.9?(v=0,y=T,w=-b):(v=-T,y=0,w=M),It=Math.hypot(v,y,w)||1),v/=It,y/=It,w/=It,he=v,X=y,ne=w,Te=!0}else{let on=v*M+y*b+w*T;v-=M*on,y-=b*on,w-=T*on;let It=Math.hypot(v,y,w);It<1e-6&&(Math.abs(M)<.9?(v=0,y=T,w=-b):(v=-T,y=0,w=M),It=Math.hypot(v,y,w)||1),v/=It,y/=It,w/=It}E=b*w-T*y,R=T*v-M*w,D=M*y-b*v,ee(Me*t,De,et,ct,Ye,v,y,w,E,R,D,0,0,0,1,0),Me===0&&(B=M,I=b,G=T,H=v,Y=y,ae=w,N=E,W=R,F=D),Me===s-1&&(fe=M,ge=b,Z=T,_e=v,Ie=y,Xe=w,te=E,z=R,j=D)}for(let Me=0;Me<2;Me++){let be=Me===0?-1:1,He=Me===0?ye:oe,ve=Me===0?Ce:nt,ke=Me===0?Ze:Ve,Le=Me===0?B:fe,De=Me===0?I:ge,et=Me===0?G:Z,ct=Me===0?H:_e,At=Me===0?Y:Ie,Ot=Me===0?ae:Xe,Rt=Me===0?N:te,Nn=Me===0?W:z,on=Me===0?F:j,It=Le*be,Cn=De*be,hi=et*be;for(let q=0;q<r;q++){let Oe=Im[q],st=Math.cos(Oe),Lt=Math.sin(Oe);ee(a[Me]+q*t,He+It*Ye*Lt,ve+Cn*Ye*Lt,ke+hi*Ye*Lt,Ye*st,ct,At,Ot,Rt,Nn,on,It,Cn,hi,st,Lt)}let jn=(a[Me]+r*t)*3;f[jn]=He+It*Ye,f[jn+1]=ve+Cn*Ye,f[jn+2]=ke+hi*Ye,u[jn]=It,u[jn+1]=Cn,u[jn+2]=hi}m.needsUpdate=!0,x.needsUpdate=!0}return{mesh:p,set:pe}}var js=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),Cb=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Pc=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],sd=.04,Pb=9;function Ic(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function Ib(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+Ic(e,1))+.03*Math.sin(2.1*n+Ic(e,2)),t[1]=.04*Math.sin(1.7*n+Ic(e,3))+.02*Math.sin(2.6*n+Ic(e,4)),t}var Lb=(n,e)=>Math.min(n*2,1)*Math.max(e,0),Jo=16,Lm=Jo+1,vi=11,ds=4,Lc=13,Db=.07,Nb=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function Dm({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=K.ink,fixedSmile:h=0}={}){let f=n,u=e/2,d=[-u,u],m=.35,x=.035*f,p=f*.3,g=a==="uni",_=0,S=_+2*Lm,M=S+16,b=M+2*vi*ds,T=b+2*vi*2,v=T+(g?6:8),y=v+Lc*2,w=[],E=ye=>w.push(ye,ye+1,ye+2,ye,ye+2,ye+3),R=(ye,Ce)=>{for(let Ze=0;Ze<Ce-1;Ze++){let oe=ye+Ze*2;w.push(oe,oe+1,oe+2,oe+1,oe+3,oe+2)}};for(let ye=0;ye<2;ye++){let Ce=_+ye*Lm;for(let Ze=0;Ze<Jo;Ze++)w.push(Ce,Ce+1+Ze,Ce+1+(Ze+1)%Jo)}for(let ye=0;ye<4;ye++)E(S+ye*4);for(let ye=0;ye<2;ye++){let Ce=M+ye*vi*ds;for(let Ze=0;Ze<vi-1;Ze++)for(let oe=0;oe<ds-1;oe++){let nt=Ce+Ze*ds+oe,Ve=nt+1,Ne=nt+ds,P=Ne+1;w.push(nt,Ve,Ne,Ve,P,Ne)}R(b+ye*vi*2,vi)}g?w.push(T,T+1,T+2,T+1,T+3,T+2,T+2,T+3,T+4,T+3,T+5,T+4):(E(T),E(T+4)),R(v,Lc);let D=[];for(let ye=0;ye<2;ye++){let Ce=new vn(f,18,12);Ce.deleteAttribute("uv"),Ce.applyMatrix4(new pt().makeScale(1,1,m).setPosition(d[ye],t,i)),D.push(Ce)}let B=new mt(Mn(D,!1),Vt({color:K.eyeWhite,shadowMix:.35,rim:0}));B.name="eyes",An(B,{px:2});let I=new Float32Array(y*3),G=new Float32Array(y*3),H=new Float32Array(y*3),Y=new it(K.ink),ae=new it(c);for(let ye=0;ye<y;ye++){G[ye*3+2]=1;let Ce=ye>=M&&ye<b?ae:Y;H[ye*3]=Ce.r,H[ye*3+1]=Ce.g,H[ye*3+2]=Ce.b}let N=new kt,W=new wt(I,3);W.setUsage(Nr),N.setAttribute("position",W),N.setAttribute("normal",new wt(G,3)),N.setAttribute("color",new wt(H,3)),N.setIndex(w);let F=t+f*3.5,fe=s-r*1.5-f,ge=Math.max(u+2.5*f,r);N.boundingSphere=new Xn(new k(0,(F+fe)/2,i),Math.hypot(ge,(F-fe)/2,f*2));let Z=Vt({color:"#ffffff",vertexColors:!0,rim:0});Z.side=Yn;let _e=new mt(N,Z);_e.name="features";let Ie=new Mt;Ie.name="face",Ie.add(B,_e);let Xe=js.neutral,te=ye=>{let Ce=h>0?Cb[ye]:0;return Ce>0?h*Ce:-1/0},z=te("neutral"),j=ye=>ye==="mouthCurve"&&Xe.mouthCurve<z?z:Xe[ye],ee={};for(let ye of Pc)ee[ye]={x:j(ye),v:0};let Te={x:0,v:0},he={x:0,v:0},X=0,ne=!1,pe=0,xe=[0,0],re=0;function Ue(ye,Ce,Ze){let oe=re*3;I[oe]=ye,I[oe+1]=Ce,I[oe+2]=Ze,re++}function Fe(ye,Ce,Ze){let oe=1-(ye*ye+Ce*Ce)/(f*f);return i+f*m*Math.sqrt(oe>0?oe:0)+Ze}function Ye(ye,Ce,Ze,oe,nt,Ve){let Ne=-(oe-Ce),P=Ze-ye,A=Math.hypot(Ne,P)||1;Ne=Ne/A*nt/2,P=P/A*nt/2,Ue(ye+Ne,Ce+P,Ve),Ue(Ze+Ne,oe+P,Ve),Ue(Ze-Ne,oe-P,Ve),Ue(ye-Ne,Ce-P,Ve)}let Be=f*1.03;function Je(){let ye=ee,Ce=ye.pupilScale.x*(1-Te.x),Ze=Te.x,oe=Math.min(Math.max(ye.lid.x,0),.95),nt=ye.browAngle.x,Ve=oe>.005,Ne=Be-2*Be*oe,P=nt*.6*Math.min(oe*4,1),A=f*Db*Math.min(oe*10,1);re=_;for(let be=0;be<2;be++){let He=be===0?-1:1;Ib(pe,l+be*7.31,xe);let ve=f*.5*(Ce>0?Ce:0),ke=xe[0]*f,Le=xe[1]*f;if(Ve){let et=Ne+P*He*ke-Math.abs(P)*ve-A-(Le+ve);if(et>0){let ct=Math.min(Math.max((et-.1*f)/(.1*f),0),1);Le+=et*(1-Nb(ct))}}Ue(d[be]+ke,t+Le,Fe(ke,Le,x));for(let De=0;De<Jo;De++){let et=De/Jo*Math.PI*2,ct=ke+Math.cos(et)*ve,At=Le+Math.sin(et)*ve;Ue(d[be]+ct,t+At,Fe(ct,At,x))}}re=S;for(let be=0;be<2;be++){let He=f*.55*Ze,ve=Fe(0,0,x),ke=f*.26*Ze;Ye(d[be]-He,t-He,d[be]+He,t+He,ke,ve),Ye(d[be]-He,t+He,d[be]+He,t-He,ke,ve)}for(let be=0;be<2;be++){let He=be===0?-1:1;for(let ve=0;ve<2;ve++){re=ve===0?M+be*vi*ds:b+be*vi*2;for(let ke=0;ke<vi;ke++){let Le=(ke/(vi-1)*2-1)*(Math.PI/2),De=Be*Math.sin(Le),et=Be*Math.cos(Le),ct=Ve?Ne+P*De:et;ct>et&&(ct=et),ct<-et&&(ct=-et);let At=He*De;if(ve===0)for(let Ot=0;Ot<ds;Ot++){let Rt=et+(ct-et)*(Ot/(ds-1));Ue(d[be]+At,t+Rt,Fe(At,Rt*.97,x*3))}else{let Ot=ct+(Ve?f*.02:0);Ot>et&&(Ot=et);let Rt=ct-A;Rt<-et&&(Rt=-et),Ue(d[be]+At,t+Ot,Fe(At,Ot*.97,x*3.5)),Ue(d[be]+At,t+Rt,Fe(At,Rt*.97,x*3.5))}}}}re=T;let $=f*.9,Se=t+f*(1.4+ye.browY.x),me=Math.cos(nt),we=Math.sin(nt),Ae=i+f*.15;if(g){let be=u+$*me,He=Se+$*we,ve=Se-we/(me>.3?me:.3)*u,ke=-(ve-He),Le=be,De=Math.hypot(ke,Le)||1;ke/=De,Le/=De;let et=-(He-ve),ct=be,At=Math.hypot(et,ct)||1;et/=At,ct/=At;let Ot=ke+et,Rt=Le+ct,Nn=Math.hypot(Ot,Rt)||1;Ot/=Nn,Rt/=Nn;let on=Ot*ke+Rt*Le,It=p/2/(on>.4?on:.4);Ue(-be+ke*p/2,He+Le*p/2,Ae),Ue(-be-ke*p/2,He-Le*p/2,Ae),Ue(Ot*It,ve+Rt*It,Ae),Ue(-Ot*It,ve-Rt*It,Ae),Ue(be+et*p/2,He+ct*p/2,Ae),Ue(be-et*p/2,He-ct*p/2,Ae)}else for(let be=0;be<2;be++){let He=be===0?-1:1;Ye(d[be]-He*$*me,Se-$*we,d[be]+He*$*me,Se+$*we,p,Ae)}re=v;let ue=ye.mouthOpen.x+he.x*(.55+.45*Math.sin((pe+l*.37)*Pb*Math.PI*2))*.8,de=ue>0?ue<1.2?ue:1.2:0,Pe=-ye.mouthCurve.x/.5,O=(Pe>1?1:Pe>0?Pe:0)*(de<.4?de/.4:1),ce=r/2*(1-.35*(de<1?de:1)*(1-.7*O)),ie=Lb(ye.lid.x,ye.mouthCurve.x),Re=ye.mouthCurve.x*ce*.5*(1-.4*ie)*(1+.6*O),Ee=.55+.5*O,Me=de*ce*.9;for(let be=0;be<Lc;be++){let He=be/(Lc-1)*2-1,ve=1-He*He,ke=He*ce*(1-.25*ie)+ie*ce*.2,Le=s-Re*ve+ie*ce*.45*He+Te.x*p*.6*Math.sin(He*Math.PI*3);Ue(ke,Le,o),Ue(ke,Le-p-Me*Math.pow(ve,Ee)+Re*ve*O,o)}W.needsUpdate=!0}function U(ye){pe+=ye;for(let Ce=0;Ce<Pc.length;Ce++)Rn(ee[Pc[Ce]],j(Pc[Ce]),sd,ye);Rn(Te,X,sd,ye),Rn(he,ne?1:0,sd,ye),Je()}return Je(),{group:Ie,setExpression(ye){Xe=Object.prototype.hasOwnProperty.call(js,ye)?js[ye]:js.neutral,X=ye==="dead"?1:0,z=te(Object.prototype.hasOwnProperty.call(js,ye)?ye:"neutral")},setTalking(ye){ne=!!ye},update:U}}var Ln=Math.PI*2,jo=["handL","handR","footL","footR"];function _i(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Nm(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[jo[t]],s=e[jo[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function ea(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),f=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=f+e.hipsY,i[2]=-s*h+u*c,i}var Ob=n=>n<0?0:n>1?1:n,Br=(n,e,t)=>{let i=Ob((t-n)/(e-n));return i*i*(3-2*i)},Qo=(n,e,t,i,s)=>Br(e,t,n)*(1-Br(i,s,n));function Bt(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var Dc=[0,0,0];function ps(n,e,t,i,s,r){return Dc[0]=t,Dc[1]=i,Dc[2]=s,ea(n,e,Dc,r)}var Nc={sx:0,sy:0,fx:0};function zn(n){return Nc.sx=Math.abs(n.shoulderL[0]),Nc.sy=n.shoulderL[1],Nc.fx=Math.abs(n.hipL[0])+.035,Nc}var zr=(n,e)=>e>0?n.handL:n.handR;function rd(n,e,t,i,s){return ps(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var od=.55;function Bc(n,e,t){let i=zn(e),s=n/Et.idle.duration,r=Ln*s,o=e.hipHeight,a=Qo(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=od,rd(e,t,i,t.handL,1),rd(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}var Wi=.34,ad=.25,Fm=-.33,Ub=.4,Fb=.37,kb=.035,kc=(ad-Fm)/Wi;function Om(n,e){if(n<Wi)return e[0]=0,e[1]=ad-kc*n,e;let t=(n-Wi)/(1-Wi),i=-kc*(1-Wi),s=-.35*kc*(1-Wi),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*Fm+(o-2*r+t)*i+(-2*o+3*r)*ad+(o-r)*s,e[0]=Ub*Math.sin(Math.PI*Math.pow(t,.8)),e}var sn=[0,0];function km(n,e,t){let i=zn(e),s=n/Et.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*Ln*(r-(Wi+.5)/2);t.hipsY=o-.06+kb*Math.cos(a),t.squash=1+.045*Math.cos(2*Ln*(r-Wi-.03)),t.lean=Fb+.03*Math.cos(2*Ln*(r-Wi));let l=Math.cos(Ln*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,Om(r,sn),Bt(t.footL,i.fx*.75,sn[0],sn[1]),Om(r<.5?r+.5:r-.5,sn),Bt(t.footR,-i.fx*.75,sn[0],sn[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;ps(e,t,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,zr(t,c))}return t}function Bm(n,e,t){let i=zn(e),s=Ln*n/Et.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Bt(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Bt(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Bt(t.footL,i.fx+.02,0,.15),Bt(t.footR,-i.fx-.03,0,-.13),t}var ld=.35;function Bb(n){return n<.06?Br(0,.06,n):Math.exp(-9*(n-.06))*(1-Br(.24,ld,n))}function zb(n){if(n<.07)return Br(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(Ln*e/.22)*(1-Br(.26,ld,n))}function Hb(n,e,t){let i=zn(e),s=e.hipHeight,r=Bb(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*zb(n),t.elbows=od+(1-od)*r;for(let o=-1;o<=1;o+=2){let a=zr(t,o);rd(e,t,i,a,o);let l=a[0],c=a[1],h=a[2];ps(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}var fs=[0,0,0];function Gb(n,e,t){Bc(n,e,t);let i=zn(e),s=n/Et.talk.duration,r=Ln*s,o=Qo(s,.04,.17,.4,.55),a=Qo(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),ps(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,fs);for(let c=0;c<3;c++)t.handR[c]+=(fs[c]-t.handR[c])*o;ps(e,t,i.sx+.19,i.sy-.12-.03*l,.34,fs);for(let c=0;c<3;c++)t.handL[c]+=(fs[c]-t.handL[c])*a;return t}var In=_i();function Vb(n,e,t){let i=n/Et.roll.duration,s=Qo(i,0,.15,.75,1),r=zn(e);Bc(0,e,In);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(In.hipsY,.45),t.lean=o(In.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(In.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=zr(t,a),c=zr(In,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?t.footL:t.footR,f=a>0?In.footL:In.footR;h[0]=o(f[0],a*r.fx),h[1]=o(f[1],.18),h[2]=o(f[2],-.05)}return t}function Wb(n,e,t){return km(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var Xb=.25,Yb=.85,qb=.82;function zm(n,e,t){let i=zn(e),s=Ln*n/Et.coverLow.duration;return t.hipsY=Xb+.006*Math.sin(s),t.lean=Yb+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=qb,t.elbows=1,Bt(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Bt(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Bt(t.footL,i.fx+.08,0,.12),Bt(t.footR,-i.fx-.08,0,.12),t}function Hm(n,e,t,i){let s=zn(n),r=i/Et[t].duration,o=Math.sin(Ln*r);return e.hipsY+=.012*Math.cos(2*Ln*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function $b(n,e,t){return zm(0,e,t),Hm(e,t,"coverLowMove",n),t}function cd(n,e,t){let i=zn(e),s=Ln*n/Et.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,ps(e,t,i.sx+.14,i.sy+0,.31,t.handL),ps(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}function Zb(n,e,t){return cd(0,e,t),Hm(e,t,"coverTallMove",n),t}function Kb(n,e,t){return Bm(n*(Et.aim.duration/Et.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function Jb(n,e,t){let i=n/Et.vault.duration,s=Qo(i,0,.3,.7,1),r=zn(e);Bc(0,e,In);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(In.hipsY,e.hipHeight-.02),t.lean=o(In.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(In.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=zr(t,a),c=zr(In,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?t.footL:t.footR,f=a>0?In.footL:In.footR;h[0]=o(f[0],a*(r.fx+.04)),h[1]=o(f[1],.55),h[2]=o(f[2],.3)}return t}var jb=.17,Qb=.5,eS=-.9,tS=.82;function nS(n,e,t){let i=zn(e),s=Ln*n/Et.coverBlindLow.duration;return t.hipsY=jb+.006*Math.sin(s),t.lean=Qb+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=eS+.03*Math.sin(2*s+1),t.squash=tS,t.elbows=1,ea(e,t,e.shoulderR,fs),Bt(t.handR,fs[0]-.02,fs[1]+.44+.008*Math.sin(s+.4),fs[2]+.12),Bt(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Bt(t.footL,i.fx+.08,0,.12),Bt(t.footR,-i.fx-.08,0,.12),t}function Um(n,e,t,i){cd(n*(Et.coverTall.duration/Et.coverBlindTallL.duration),e,t);let s=zn(e);return ps(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var iS=.3,sS=1.2,Oc=[.4,.62],Uc=[-.6,-.36];function Fc(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function rS(n,e,t){let i=zn(e),s=n/Et.crawl.duration,r=Ln*s;return t.hipsY=iS+.012*Math.cos(2*r),t.lean=sS+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,Fc(s,Oc[1],Oc[0],.16,.04,sn),Bt(t.handL,i.sx+.12,sn[0],sn[1]),Fc(s+.5,Oc[1],Oc[0],.16,.04,sn),Bt(t.handR,-i.sx-.12,sn[0],sn[1]),Fc(s,Uc[1],Uc[0],.16,0,sn),Bt(t.footR,-i.fx-.02,sn[0],sn[1]),Fc(s+.5,Uc[1],Uc[0],.16,0,sn),Bt(t.footL,i.fx+.02,sn[0],sn[1]),t}var oS=.05;function hn(n,e,t,i=oS){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=_i())=>t(s,r,o)})}var Et=Object.freeze({idle:hn(2.4,!0,Bc),run:hn(.56,!0,km,.008),aim:hn(1.6,!0,Bm),flinch:hn(ld,!1,Hb),talk:hn(2.4,!0,Gb),roll:hn(.55,!1,Vb,.02),sprint:hn(.56,!0,Wb,.008),coverLow:hn(2.4,!0,zm),coverLowMove:hn(.5,!0,$b),coverTall:hn(2.4,!0,cd),coverTallMove:hn(.5,!0,Zb),coverPop:hn(1.6,!0,Kb),vault:hn(.5,!1,Jb,.02),coverBlindLow:hn(1.6,!0,nS),coverBlindTallL:hn(1.6,!0,(n,e,t)=>Um(n,e,t,1)),coverBlindTallR:hn(1.6,!0,(n,e,t)=>Um(n,e,t,-1)),crawl:hn(1,!0,rS)}),ms=kc/Et.run.duration;function ta(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(Et,n)?Et[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||_i())}function zc(n,e,t,i=_i()){if(!(t>0))return Nm(n,i);if(t>=1)return Nm(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[jo[r]],a=e[jo[r]],l=i[jo[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var aS=.05,Xi=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],na=["handL","handR","footL","footR"],hd=Xi.length+na.length*3,Hr=[.35,-.2,-.8],ud=[.75,-.85,-.15];function Wt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new it(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new wt(s,3)),n}var lS=new pt,$n=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(lS.compose(new k(e,t,i),new wn().setFromEuler(new Pn(s,r,o)),new k(a,l,c)));function Qs(n=20,e=14){let t=new vn(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),_m(t)}function dd(n,e,t){let i=Qs(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Gc(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new xn(t,t,o,6,1),l=new wn().setFromUnitVectors(new k(0,1,0),new k(i/o,s/o,r/o));return a.applyMatrix4(new pt().compose(new k((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new k(1,1,1))),a}function Vc(n,e){let t=Mn(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);ai(t),t.computeBoundingSphere();let i=new mt(t,Vt({color:"#ffffff",vertexColors:!0}));return i.name=e,An(i),i}function fd(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function cS(n){let e=n.torso,t=n.colors,i=n.outfit,s=(h,f)=>{let u=new Do(h.map(([d,m])=>new ze(d,m)),22);return u.scale(1,1,e.depth),Wt(u,f)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let f=e.shirt;for(let u=1;u<f.length;u++)if(h<=f[u][1]){let d=(h-f[u-1][1])/(f[u][1]-f[u-1][1]||1);return f[u-1][0]+(f[u][0]-f[u-1][0])*d}return 0},l=(h,f)=>{let u=a(f);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let f=Qs(14,10);$n(f,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),f.computeVertexNormals(),r.push(Wt(f,t.shirt))}if(i.collar){let h=new Xs(.1,.03,8,20);$n(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Wt(h,t.collar))}if(i.logo){let u=new xn(.03,.03,.01,12);$n(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Wt(u,t.logo))}if(i.lanyard){let f=l(0,.15)+.012;for(let m of[-1,1]){let x=[m*.075,o-.03,.085],p=[m*.05,.34,l(.05,.34)+.014],g=[m*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Wt(Gc(x,p,.008),t.lanyard),Wt(Gc(p,g,.008),t.lanyard))}let u=new Pt(.075,.1,.014);$n(u,0,.15,f,-.05,0,.04);let d=new Pt(.077,.026,.016);$n(d,0,.15+.028,f,-.05,0,.04),r.push(Wt(u,t.badge),Wt(d,t.badgeStripe))}return Vc(r,"torso")}function hS(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=dd((a,l,c,h)=>fd(e,a,l,c,h),40,28);r.push(Wt(o,i.skin),Wt(uS(e,t),i.hair));for(let a of[-1,1]){let l=Qs(12,8);$n(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(Wt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=Qs(12,8);$n(c,0,l,dS(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(Wt(c,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new En;l.getPoint=(x,p=new k)=>p.set(Math.cos(Math.PI*x)*(e.rx+t.thickness+.012),Math.sin(Math.PI*x)*a,0);let c=new No(l,24,.014,6,!1);$n(c,0,0,-.03,-.12,0,0),r.push(Wt(c,i.headset));for(let x of[-1,1]){let p=new xn(.055,.06,.05,14);$n(p,x*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Wt(p,i.headset))}let h=n.face,f=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],d=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Wt(Gc(f,u,.009),i.headset),Wt(Gc(u,d,.009),i.headset));let m=Qs(10,8);$n(m,d[0],d[1],d[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(Wt(m,i.mic))}return Vc(r,"headMesh")}var gs=48,Hc=12;function uS(n,e){let t=(u,d)=>.04+.17*d+.025*Math.max(d,0)*u,i=[0,0,0],s=pc.smoothstep,r=[],o=(u,d,m)=>{let x=Math.sin(u)*Math.sin(d),p=Math.cos(u),g=Math.sin(u)*Math.cos(d);fd(n,x,p,g,i);let _=i[0]/(n.rx*n.rx),S=i[1]/(n.ry*n.ry),M=i[2]/(n.rz*n.rz),b=Math.hypot(_,S,M)||1;_/=b,S/=b,M/=b;let T=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(g+.3,0),v=e.quiff?e.lift*Math.max(g,0)*s(i[1],.12,.26)*(1-.5*x):0,y=e.back*Math.max(-g,0)*s(i[1],-.15,.1),w=m?-.01:e.thickness*(1-.55*Math.min(T,1))+v+y;r.push(i[0]+_*w,i[1]+S*w,i[2]+M*w)},a=u=>{let d=0,m=Math.PI;for(let x=0;x<40;x++){let p=(d+m)/2,g=Math.sin(p)*Math.sin(u),_=Math.sin(p)*Math.cos(u);fd(n,g,Math.cos(p),_,i),i[1]>t(g,_)?d=p:m=p}return d};o(0,0,!1);let l=[];for(let u=0;u<gs;u++)l.push(a(u/gs*Math.PI*2));for(let u=1;u<=Hc+1;u++)for(let d=0;d<gs;d++){let m=d/gs*Math.PI*2,x=u>Hc;o(x?l[d]+.03:l[d]*(u/Hc),m,x)}let c=(u,d)=>1+(u-1)*gs+d%gs,h=[];for(let u=0;u<gs;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Hc;u++)for(let d=0;d<gs;d++){let m=c(u,d),x=c(u,d+1),p=c(u+1,d),g=c(u+1,d+1);h.push(m,p,g,m,g,x)}let f=new kt;return f.setAttribute("position",new dt(r,3)),f.setIndex(h),f.computeVertexNormals(),f}function dS(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function Gm(n,e){let t=n.hand.radius,i=n.colors,s=Qs(14,10);$n(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=Qs(10,8);return $n(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),Vc([Wt(s,i.skin),Wt(r,i.skin)],e>0?"handL":"handR")}function Vm(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=dd((h,f,u,d)=>{d[0]=h*s*(u>0?1:.9),d[1]=Math.max(a*.8,t.height*.55+f*t.height*.6-Math.max(u,0)*t.height*.25),d[2]=o+u*r*.96},20,12),c=dd((h,f,u,d)=>{d[0]=h*(s+.008),d[1]=Math.min(Math.max(a*.5+f*a,0),a),d[2]=o+u*(r+.008)},20,6);return Vc([Wt(l,i.shoe),Wt(c,i.sole)],e>0?"footL":"footR")}function xs(n){let e=new Mt;e.name=n.name||"character";let t=new Mt;t.name="body",e.add(t);let i=new Mt;i.name="hips",i.rotation.order="YXZ";let s=cS(n);i.add(s);let r=new Mt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=hS(n);o.position.y=n.head.centerY,r.add(o);let a=Dm({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[Gm(n,1),Gm(n,-1)],c=[Vm(n,1),Vm(n,-1)],h=[0,1].map(()=>id({radius:n.armRadius,color:n.colors.skin})),f=[0,1].map(()=>id({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",f[0].mesh.name="legL",f[1].mesh.name="legR",t.add(...l,...c,h[0].mesh,h[1].mesh,f[0].mesh,f[1].mesh);let u=Rc({rx:.45,rz:.38,opacity:.55});e.add(u);let d=_i(),m=_i(),x=[];for(let F=0;F<hd;F++)x.push({x:0,v:0});let p=!1,g=aS,_=(F,fe)=>fe<Xi.length?F[Xi[fe]]:F[na[(fe-Xi.length)/3|0]][(fe-Xi.length)%3];function S(F,fe,ge){fe<Xi.length?F[Xi[fe]]=ge:F[na[(fe-Xi.length)/3|0]][(fe-Xi.length)%3]=ge}function M(F,fe){fe>=0&&(g=fe),d.hipsY=F.hipsY,d.lean=F.lean,d.twist=F.twist,d.headYaw=F.headYaw,d.headPitch=F.headPitch,d.squash=F.squash,d.elbows=F.elbows>=0?F.elbows:0;for(let ge=0;ge<4;ge++){let Z=F[na[ge]],_e=d[na[ge]];_e[0]=Z[0],_e[1]=Z[1],_e[2]=Z[2]}if(!p){p=!0;for(let ge=0;ge<hd;ge++)x[ge].x=_(d,ge),x[ge].v=0}}let b=[0,0,0],T=[0,0,0],v=[0,0,0],y=[0,0,0],w={mid:[0,0,0],end:[0,0,0],stretch:1},E=new k,R=new k,D=new k,B=new pt,I=n.armLength/2,G=n.legLength/2,H=n.ankleHeight;function Y(F,fe,ge){let Z=Math.cos(m.twist),_e=Math.sin(m.twist);y[0]=F*Z+ge*_e,y[1]=fe,y[2]=-F*_e+ge*Z}function ae(){let F=m.squash>.2?m.squash:.2,fe=1/Math.sqrt(F);t.scale.set(fe,F,fe),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let ge=0;ge<2;ge++){let Z=ge===0?1:-1;ea(n,m,ge===0?n.shoulderL:n.shoulderR,b);let _e=m.elbows<0?0:m.elbows>1?1:m.elbows;Y(Z*(Hr[0]+(ud[0]-Hr[0])*_e),Hr[1]+(ud[1]-Hr[1])*_e,Hr[2]+(ud[2]-Hr[2])*_e),nd(b,ge===0?m.handL:m.handR,I,I,y,w),h[ge].set(b,w.mid,w.end,w.stretch);let Ie=l[ge];Ie.position.set(w.end[0],w.end[1],w.end[2]),E.set(w.end[0]-w.mid[0],w.end[1]-w.mid[1],w.end[2]-w.mid[2]),E.lengthSq()<1e-10&&E.set(0,-1,0),E.normalize(),R.set(-Z*Math.cos(m.twist),0,Z*Math.sin(m.twist)),R.addScaledVector(E,-R.dot(E)),R.lengthSq()<1e-4&&R.set(0,0,1).addScaledVector(E,-E.z),R.normalize(),D.crossVectors(R,E),B.makeBasis(R,E,D),Ie.quaternion.setFromRotationMatrix(B),ea(n,m,ge===0?n.hipL:n.hipR,T);let Xe=ge===0?m.footL:m.footR;v[0]=Xe[0],v[1]=Xe[1]+H,v[2]=Xe[2],Y(Z*.15,0,1),nd(T,v,G,G,y,w),f[ge].set(T,w.mid,w.end,w.stretch);let te=c[ge];te.position.set(w.end[0],w.end[1]-H,w.end[2]),te.rotation.set(Math.min(Math.max(w.end[1]-H,0),.3)*1.1,m.twist*.3,0)}}function N(F){if(p)for(let fe=0;fe<hd;fe++)Rn(x[fe],_(d,fe),g,F),S(m,fe,x[fe].x);ae(),a.update(F)}ta("idle",0,n,m),ae();function W(){e.traverse(F=>{!F.isMesh||F.userData.isOutline||(F.geometry.dispose(),F!==u&&F.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:M,update:N,dispose:W,shadow:u}}var fS=.15,pS=.03,Wm=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function vs(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=Et[t].ease,l=_i(),c=_i(),h=ta(t,0,e);zc(h,h,1,l);function f(m,{fade:x}={}){Object.prototype.hasOwnProperty.call(Et,m)&&(m===t&&Et[m].loop||(m==="flinch"&&t!=="flinch"&&(s=t),zc(h,h,1,l),a=u(),r=x===void 0?m==="flinch"?pS:fS:Math.max(x,0),o=0,t=m,i=0,n.face.setTalking(m==="talk")))}function u(){let m=r>0?Wm(o/r):1;return a+(Et[t].ease-a)*m}function d(m,x=m){let p=Et[t];if(i+=m,o+=x,p.loop)i>=p.duration&&(i-=p.duration*Math.floor(i/p.duration));else if(i>=p.duration)return f(s),d(0);ta(t,i,e,c),zc(l,c,r>0?Wm(o/r):1,h),n.setPose(h,u())}return{play:f,update:d,current:()=>t}}function Wc(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function Xm(n){for(let e of Object.values(n))e&&typeof e=="object"&&Xm(e);return Object.freeze(n)}var pd=K.glorpPurple,Jt=Xm({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:pd,collar:Wc(pd,K.ink,.25),logo:K.gel,pants:Wc(K.planet,K.ink,.3),skin:K.daleSkin,hair:K.daleHair,shoe:Wc(K.ink,pd,.3),sole:K.cream,lanyard:K.hotPink,badge:K.cream,badgeStripe:K.teal,headset:Wc(K.ink,K.lilac,.25),mic:K.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var mS=1.5,gS=8,xS=-.2,vS=1.3,Ym=.6,_S=Math.atan2(1.3,-4),yS=new k(-.45,.22,-1).applyEuler(new Pn(-.2,.68,0)).toArray(),qm=10,MS=.8,bS=.05,SS=["idle","run","aim","flinch","talk"],ia=Object.keys(js),$m=(n,e,t)=>Math.min(t,Math.max(e,n));function wS(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function TS(n,e,t=le.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Zm({canvas:n,gl:e}){let t=Sc(n,e),i=t.renderer,s=bc(n),r=document.getElementById("cr-readout"),o=new Bs,a=new cn(le.camera.fov,1,.1,100),l=wc({planetDir:yS});o.add(l.mesh);let c=Cm();o.add(c.group);let h=[];function f(te,z,j){let ee=xs(j===void 0?Jt:{...Jt,face:{...Jt.face,seed:j}});ee.root.position.set(te,0,z),ee.root.rotation.y=Ym,o.add(ee.root);let Te=vs(ee),he={rig:ee,anim:Te};return h.push(he),he}let u=f(c.spawn[0],c.spawn[2]),d=[],m=!1,x=0,p=!0,g=!1,_=.685,S=.1,M=4.6,b=!1,T=new k(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),v=[0,0,0];function y(te){if(!(!SS.includes(te)&&!Object.prototype.hasOwnProperty.call(Et,te))){u.anim.play(te);for(let z of d)z.anim.play(m?"run":te)}}function w(te){let z=ia.indexOf(te);if(!(z<0)){x=z;for(let j of h)j.rig.face.setExpression(te)}}function E(te){p=!!te,Zu(o,p)}function R(te){g=!!te,u.rig.root.rotation.y=g?_S:Ym}function D(te){if(te=!!te,te!==m)if(m=te,te){let z=c.spawn[2]+2.4;for(let j=0;j<qm;j++){let ee=c.spawn[0]+(j-(qm-1)/2)*MS,Te=f(ee,z,10+j);Te.anim.play("run"),Te.rig.face.setExpression(ia[x]),d.push(Te)}Zu(o,p)}else{for(let z of d)z.rig.dispose(),h.splice(h.indexOf(z),1);d=[]}}function B(){let te=t.resize();a.aspect=te.aspect,a.updateProjectionMatrix()}B(),window.addEventListener("resize",B),n.addEventListener("mousedown",te=>{te.button===0&&(b=!0)}),window.addEventListener("mouseup",()=>{b=!1}),window.addEventListener("mousemove",te=>{b&&!s.isLocked()&&I(te.movementX||0,te.movementY||0,.006)}),n.addEventListener("wheel",te=>{M=$m(M*Math.exp(te.deltaY*.001),mS,gS)},{passive:!0});function I(te,z,j){_-=te*j,S=$m(S+z*j,xS,vS)}window.addEventListener("keydown",te=>{te.repeat||(te.code==="Digit4"?y("flinch"):te.code==="Digit5"?y("talk"):te.code==="KeyO"?E(!p):te.code==="KeyP"?D(!m):te.code==="KeyL"?s.requestLock():te.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let G=0,H=0,Y=0,ae=0,N=0,W=0,F=null,fe=0;window.__cr.stats=()=>({fps:G,ms:H,calls:N,tris:W,scale:t.scale(),characters:h.length}),window.__cr.anim=y,window.__cr.orbit=(te,z,j)=>{_=te,S=z,j&&(M=j)},window.__cr.expression=w,window.__cr.perf=D,window.__cr.gameCam=R,window.__cr.outlines=E;function ge(te){te.pressed.weapon1&&y("idle"),te.pressed.weapon2&&y("run"),te.pressed.weapon3&&y("aim"),te.pressed.interact&&w(ia[(x+1)%ia.length]),te.pressed.grenade&&R(!g)}function Z(){if(g){let te=TS([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(te.pos),a.lookAt(te.look[0],te.look[1],te.look[2])}else wS(_,S,M,v),a.position.set(T.x+v[0],T.y+v[1],T.z+v[2]),a.lookAt(T)}let _e=te=>te.toFixed(2);function Ie(){let te=F?Object.keys(F.held).filter(ee=>F.held[ee]).join(" "):"",z=s.padStatus(),j=F&&z!=="none"&&z!=="unrecognised controller"?`Gamepad: ${z}
  move ${_e(F.moveX)}, ${_e(F.moveY)}  look ${_e(F.lookX)}, ${_e(F.lookY)}
  held: ${te||"nothing"}`:`Gamepad: ${z}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${ia[x]}   camera: ${g?"game":"orbit"}   outlines: ${p?"on":"off"}`,`${Math.round(G)} fps   ${_e(H)} ms   scale ${t.scale()}`,`${N} draw calls   ${W} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${F?Math.round(F.lookDX):0}, ${F?Math.round(F.lookDY):0}`,j].join(`
`)}let Xe=Mc({step(){},render(te,z){let j=Math.min(z,bS);F=s.poll(),ge(F),s.isLocked()&&!g&&I(F.lookDX,F.lookDY,.003),g||I(F.lookX*600*j,F.lookY*600*j,.004),l.update(performance.now()/1e3),c.update(j);for(let ee of h)ee.anim.update(j),ee.rig.update(j);Z(),i.render(o,a),N=i.info.render.calls,W=i.info.render.triangles,Y++,ae+=z,ae>=1&&(G=Y/ae,H=ae/Y*1e3,Y=0,ae=0),fe+=z,fe>=.1&&(fe=0,Ie()),t.frameDone(z*1e3)}});Z(),i.render(o,a),N=i.info.render.calls,W=i.info.render.triangles,Ie(),Xe.start()}function Km(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function ft(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var md=1e-9;function _s(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(p=>p.max[1]>o&&p.min[1]<a),c=Math.hypot(t[0],t[2]),h=Math.max(1,Math.ceil(c/(i/2))),f=t[0]/h,u=t[2]/h,d=!1,m=0,x=0;for(let p=0;p<h;p++){let g=r[0],_=r[2];r[0]+=f,r[2]+=u;let S=!1;for(let M=0;M<5;M++){let b=null,T=md;for(let v of l){let y=Math.max(v.min[0],Math.min(r[0],v.max[0])),w=Math.max(v.min[2],Math.min(r[2],v.max[2])),E=r[0]-y,R=r[2]-w,D=Math.hypot(E,R),B,I,G;if(D>md){if(D>=i)continue;B=i-D,I=E/D,G=R/D}else{let H=[[r[0]-v.min[0],-1,0],[v.max[0]-r[0],1,0],[r[2]-v.min[2],0,-1],[v.max[2]-r[2],0,1]],Y=H[0];for(let ae of H)ae[0]<Y[0]&&(Y=ae);B=Y[0]+i,I=Y[1],G=Y[2]}B>T&&(T=B,b=[I,G])}if(!b){S=!0;break}if(M===4)break;r[0]+=b[0]*T,r[2]+=b[1]*T,d=!0,m=b[0],x=b[1]}S||(r[0]=g,r[2]=_,d=!0)}return d||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:d,normal:[m,0,x]}}function Zn(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let f=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<md)(e[h]<f||e[h]>u)&&(c=!1);else{let d=(f-e[h])/r[h],m=(u-e[h])/r[h];if(d>m){let x=d;d=m,m=x}d>a&&(a=d),m<l&&(l=m),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function sa(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var gd=["fov","right","up","back"],Xc=Math.PI*2,ES=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Qm=n=>n!=="normal"&&ES.includes(n);function Jm(n,e,t={}){let i=Qm(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of gd)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function jm(n,e){let t=Qm(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function e0(n,e,t,i=0){return e?n>=t:n>=t+i}function t0({tuning:n=le.camera,look:e=le.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],c={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],f={},u=[0,0,0],d=[0,0,0],m=[0,0,0],x=[0,0,0],p=[0,0,1],g={pos:x,dir:p,fov:70},_={on:!1,t:0,p:[0,0,0]},S=1,M=0,b=!1;return{yaw:0,pitch:0,look(v,y,w,E,R,D,B=1){(v||y||w||E)&&(_.on=!1);let I=D?e.aimScale:1,G=e.invertY?-1:1;this.yaw-=v*e.mouse*I,this.pitch-=y*e.mouse*I*G;let H=e.pad,Y=I*B;w&&(this.yaw-=Math.sign(w)*Math.abs(w)**H.expo*H.yawRate*Y*R),E&&(this.pitch-=Math.sign(E)*Math.abs(E)**H.expo*H.pitchRate*Y*R*G),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(v=1){let y=n.bump;if(!y||!(y.amount>0)||!(v>0))return;s.x=Math.min(s.x+y.amount*v,2*y.amount);let w=n.slamShake;w&&w.amount>0&&w.time>0&&(o.t=w.time,o.amp=w.amount*v)},dip(v){Number.isFinite(v)&&v>0&&(r.x=Math.min(r.x+v,.1))},kick(v,y=0){let w=n.recoil?n.recoil.max:0;if(!(w>0))return;let E=(R,D)=>Math.max(-w,Math.min(w,R+(Number.isFinite(D)?D:0)));a.p.x=Math.max(0,E(a.p.x,v)),a.y.x=E(a.y.x,y)},hold(v){if(!(n.holdTime>0)){_.on=!1;return}_.on=!0,_.t=n.holdTime,_.p[0]=v[0],_.p[1]=v[1],_.p[2]=v[2]},holding(){return _.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(v,y,w="normal",E=1){y!==void 0&&(this.yaw=y),Jm(n,w,f);for(let R of gd)t[R].x=f[R],t[R].v=0;i.x=E,i.v=0,c.x=jm(n,w),c.v=0;for(let R=0;R<3;R++)h[R].x=v[R],h[R].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,S=1,b=!0,_.on=!1},update(v,{target:y,mode:w="normal",side:E=1},R){b||this.snap(y,this.yaw,w,E),v>0||(v=0),M+=v,Jm(n,w,f);for(let F of gd)Rn(t[F],f[F],n.blendHalfLife,v);Rn(c,jm(n,w),n.blendHalfLife,v),Rn(i,E,n.sideHalfLife,v);for(let F=0;F<3;F++)Rn(h[F],y[F],n.followHalfLife,v);Rn(s,0,n.bump?n.bump.halfLife:0,v),Rn(r,0,n.bump?n.bump.halfLife:0,v);let D=n.recoil?n.recoil.halfLife:0;Rn(a.p,0,D,v),Rn(a.y,0,D,v);let B=Math.PI/180,I=n.probeRadius,G=t.back.x,H=1,Y=0,ae=F=>{let fe=this.yaw+a.y.x*B,ge=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*B));Y=Math.sin(fe),H=Math.cos(fe);let Z=Math.sin(ge),_e=Math.cos(ge);u[0]=h[0].x,u[1]=h[1].x+t.up.x,u[2]=h[2].x,l[0]=y[0],l[1]=y[1]+t.up.x,l[2]=y[2];let Ie=Zn(R,l,u,I);if(Ie<1)for(let he=0;he<3;he++)u[he]=l[he]+(u[he]-l[he])*Ie;let Xe=t.right.x*i.x;d[0]=u[0]-H*Xe,d[1]=u[1],d[2]=u[2]+Y*Xe;let te=Zn(R,u,d,I);for(let he=0;he<3;he++)d[he]=u[he]+(d[he]-u[he])*te;p[0]=Y*_e,p[1]=Z,p[2]=H*_e;for(let he=0;he<3;he++)m[he]=d[he]-p[he]*G;let z=Zn(R,d,m,I),j=G>1e-6?Math.max(n.minBack/G,z):1;j>1&&(j=1),j<S?S=j:F&&(S+=(j-S)*(n.wallReturnHalfLife>0?1-Math.pow(2,-v/n.wallReturnHalfLife):1));let ee=G*S-s.x;for(let he=0;he<3;he++)x[he]=d[he]-p[he]*ee;let Te=Zn(R,u,x,I);if(Te<1)for(let he=0;he<3;he++)x[he]=u[he]+(x[he]-u[he])*Te};if(ae(!0),_.on)if(_.t-=v,_.t<=0||w!=="aim")_.on=!1;else for(let F=0;F<3;F++){let fe=_.p[0]-x[0],ge=_.p[1]-x[1],Z=_.p[2]-x[2],_e=Math.hypot(fe,ge,Z);if(_e<.5)break;this.yaw=Math.atan2(fe,Z)-a.y.x*B,this.pitch=Math.max(n.pitchMin,Math.min(n.pitchMax,Math.asin(ge/_e)-a.p.x*B)),ae(!1)}let N=n.shake;if(N&&N.amp&&c.x>0){let F=N.amp*(c.x>1?1:c.x),fe=Math.sin(Xc*N.hz*M)*F,ge=Math.sin(Xc*N.hz*1.3*M+1)*F,Z=-H,_e=Y;x[0]+=Z*fe-_e*p[1]*ge,x[1]+=(_e*p[0]-Z*p[2])*ge,x[2]+=_e*fe+Z*p[1]*ge}x[1]-=r.x;let W=n.slamShake;if(o.t>0&&W&&W.time>0){o.t=Math.max(0,o.t-v);let F=o.t/W.time,fe=o.amp*F*F,ge=Math.sin(Xc*W.hz*o.t)*fe,Z=Math.sin(Xc*W.hz*1.27*o.t+2)*fe,_e=-H,Ie=Y;x[0]+=_e*ge-Ie*p[1]*Z,x[1]+=(Ie*p[0]-_e*p[2])*Z,x[2]+=Ie*ge+_e*p[1]*Z}return g.fov=t.fov.x,g}}}var ys=[K.hotPink,K.playerOrange,K.glorpPurple,K.tealLight,K.lilac];function AS(n){let e=n.max[0]-n.min[0],t=n.max[2]-n.min[2],i=n.max[1]-n.min[1],s=Math.max(e,t),r=Math.min(e,t);return n.kind==="pillar"?"pillar":n.kind==="low"?r<.7&&s>=1.8?"planter":"counter":n.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function RS(){let n=[],e=(t,i)=>{let s=new it(i),r=t.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new wt(o,3)),t};return{list:n,box(t,i,s){let r=new Pt(i[0]-t[0],i[1]-t[1],i[2]-t[2]);r.translate((t[0]+i[0])/2,(t[1]+i[1])/2,(t[2]+i[2])/2),n.push(e(r,s))},cyl(t,i,s,r,o,a,l="y"){let c=new xn(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(t,i,s),n.push(e(c,a))},ball(t,i,s,r,o){let a=new vn(r,7,5);a.translate(t,i,s),n.push(e(a,o))}}}var Gr=(n,e,t=n.min[1],i=n.max[1])=>[[n.min[0]-e,t,n.min[2]-e],[n.max[0]+e,i,n.max[2]+e]];function CS(n,e,t,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],f=.015,u=.06;o?(n.box([a+s,t,l+f],[c-s,i,l+u],r),n.box([a+s,t,h-u],[c-s,i,h-f],r)):(n.box([a+f,t,l+s],[a+u,i,h-s],r),n.box([c-u,t,l+s],[c-f,i,h-s],r))}function ra(n,e){let t=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=t>=i,r=s?t:i,o=s?i:t,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,f,u,d,m,x){let p=a(c,f),g=a(h,u),_=l(c,f),S=l(h,u);n.box([Math.min(p,g),d,Math.min(_,S)],[Math.max(p,g),m,Math.max(_,S)],x)},cyl(c,h,f,u,d,m,x="y"){let p=x==="y"?"y":x==="u"?s?"x":"z":s?"z":"x";n.cyl(a(c,h),f,l(c,h),u,d,m,p)}}}function PS(n,e){let t=ra(n,e),{len:i,dep:s}=t,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;t.slab(.03,i-.03,.04,s-.04,0,.5,K.shadowTint);for(let l=0;l<=o;l++){let c=l*a;t.slab(c,c+r,.06,s-.06,0,e.max[1],K.lilac),t.slab(c+.03,c+r-.03,0,.07,.8,.94,K.hotPink),t.slab(c+.03,c+r-.03,s-.07,s,.8,.94,K.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;t.slab(c,h,s/2-.03,s/2+.03,.5,.94,K.tealLight),t.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,K.cream)}}function IS(n,e,t){let i=ra(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,K.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,K.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,K.cream),i.slab(.15,s-.15,0,.06,.25,.6,K.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,K.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let f=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(f,u,(.82+o-.02)/2,.14,o-.84,ys[(h+c*2+t)%ys.length]),i.cyl(f,u,o-.01,.15,.02,K.cream)}}function LS(n,e,t){t%3===1?IS(n,e,t):PS(n,e)}function DS(n,e,t){let i=ra(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,K.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,K.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,K.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,K.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?K.ink:ys[(l+t)%ys.length])}function NS(n,e,t){let i=ra(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,K.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,K.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,K.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let f=0;f<a;f++)for(let u=0;u<l;u++){let d=(u+.5)/l*s,m=a===1?r/2:r*(.3+f*.4),x=ys[(u+f+t)%ys.length];i.cyl(d,m,h,.015,.14,K.cream,"u"),i.cyl(d-.07,m,h,c,.06,x,"u"),i.cyl(d+.07,m,h,c,.06,x,"u")}}function OS(n,e){let t=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];n.box(...Gr({min:e.min,max:o},-.03,e.min[1],o[1]-.1),K.teal),n.box(...Gr({min:e.min,max:o},0,o[1]-.1,o[1]),K.cream),CS(n,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,K.hotPink,t);let a=(m,x,p,g,_)=>n.box(t?[e.min[0]+m,p,e.min[2]+.12]:[e.min[0]+.12,p,e.min[2]+m],t?[e.min[0]+x,g,e.max[2]-.12]:[e.max[0]-.12,g,e.min[2]+x],_);a(.3,.7,o[1],o[1]+.06,K.cream),a(.32,.68,o[1]+.06,o[1]+.12,K.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,K.cream);let l=t?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=m=>t?e.min[0]+m:e.min[2]+m;t?n.cyl(c(r-.5),o[1]+.14,l,.06,.28,K.gel):n.cyl(l,o[1]+.14,c(r-.5),.06,.28,K.gel);let h=.14,f=t?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[m,x]of f)t?n.box([m,e.min[1],e.min[2]],[x,i,e.max[2]],K.lilac):n.box([e.min[0],e.min[1],m],[e.max[0],i,x],K.lilac);let u=f[0][1],d=f[1][0];t?(n.box([u,i-.12,e.min[2]],[d,i,e.max[2]],K.lilac),n.box([u,o[1],e.min[2]+.2],[d,i-.12,e.max[2]-.2],K.tealLight)):(n.box([e.min[0],i-.12,u],[e.max[0],i,d],K.lilac),n.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,d],K.tealLight))}function US(n,e,t){let i=ra(n,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,K.shadowTint);for(let[h,f]of[[0,a],[s-a,s]])for(let[u,d]of[[0,a],[r-a,r]])i.slab(h,f,u,d,.12,o,K.lilac);i.slab(0,s,0,r,o-.1,o,K.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,K.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,K.cream),i.cyl(s/2,c,l,.025,s+.1,K.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?K.ink:ys[t%ys.length],"u")}function FS(n,e){n.box(...Gr(e,0,e.min[1],e.max[1]),K.cream),n.box(...Gr(e,.05,e.min[1],e.min[1]+.25),K.shadowTint),n.box(...Gr(e,.03,e.min[1]+1,e.min[1]+1.12),K.hotPink),n.box(...Gr(e,.05,e.max[1]-.25,e.max[1]),K.shadowTint)}function kS(n){if(!n)return[];let[e,,t]=n.min,[i,,s]=n.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,t],max:[h+c/2,l,t+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=t+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function n0(n,e=null){let t=RS();for(let s of kS(e))t.box(s.min,s.max,K.tealLight);let i=0;return n.forEach((s,r)=>{let o=AS(s);o==="counter"?LS(t,s,i++):o==="planter"?(r%2?NS:DS)(t,s,r):o==="desk"?OS(t,s):o==="shelf"?US(t,s,r):o==="pillar"?FS(t,s):t.box(s.min,s.max,K.lilac)}),Mn(t.list,!1)}var i0=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(i0)),n),Ms=.3,BS=[ft([-12,-1,-12],[12,0,12],"floor"),ft([-12-Ms,0,-12-Ms],[12+Ms,4,-12]),ft([-12-Ms,0,12],[12+Ms,4,12+Ms]),ft([-12-Ms,0,-12],[-12,4,12]),ft([12,0,-12],[12+Ms,4,12]),ft([5,0,-9],[5.3,4,-3]),ft([6.7,0,-9],[7,4,-3]),ft([-11,0,-7.3],[-6,3,-7]),ft([-6.3,0,-11],[-6,3,-7]),ft([-4,0,-3],[-2,1,-2.4],"low"),ft([3,0,3],[3.6,1,5],"low"),ft([-5,0,3],[-3.8,2.2,3.6],"tall"),ft([1,0,-6],[1.6,2.2,-4],"tall"),ft([-9.4,0,.6],[-8.6,4,1.4],"pillar"),ft([8.6,0,3.6],[9.4,4,4.4],"pillar"),ft([-9,0,6.5],[-6,1,7.1],"low"),ft([-4,0,6.5],[-1,1,7.1],"low"),ft([6,0,6],[10,2.2,6.6],"tall"),ft([-12,0,-1],[-10,1,-.4],"low")],s0=[];for(let n=0;n<=12;n++)s0.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var qc=i0({boxes:BS,marks:s0,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function xd(n){let e=n.map(t=>{let i=new Pt(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return Mn(e,!1)}var bs=.03,Ss=.3,ws=.12,Yc=2;function zS(n=qc){let e=n.boxes.find(c=>c.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([t,0,i],[s,Ss,i+bs]),l([t,0,r-bs],[s,Ss,r]),l([t,0,i],[t+bs,Ss,r]),l([s-bs,0,i],[s,Ss,r]);for(let c=t+Yc;c<s-.5;c+=Yc)l([c-ws/2,Ss,i],[c+ws/2,o,i+bs]),l([c-ws/2,Ss,r-bs],[c+ws/2,o,r]);for(let c=i+Yc;c<r-.5;c+=Yc)l([t,Ss,c-ws/2],[t+bs,o,c+ws/2]),l([s-bs,Ss,c-ws/2],[s,o,c+ws/2]);return a}function r0(n=qc){let e=new Mt,t=n.boxes.find(r=>r.kind==="floor");e.add(Ec({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));let i=n.boxes.filter(r=>r.kind!=="floor");if(i.length){let r=new mt(ai(n0(i,t)),Vt({vertexColors:!0}));r.name="grey-props",An(r),e.add(r)}let s=zS(n);if(s.length){let r=new mt(xd(s),Vt({color:K.shadowTint}));r.name="grey-wall-trim",e.add(r)}if(n.marks.length){let r=new mt(xd(n.marks),Vt({color:K.hotPink}));r.name="grey-marks",e.add(r)}if(n.ammoCrates&&n.ammoCrates.length){let r=[];for(let a of n.ammoCrates)r.push({min:[a.pos[0]-.35,0,a.pos[2]-.25],max:[a.pos[0]+.35,.4,a.pos[2]+.25]}),r.push({min:[a.pos[0]-.39,.4,a.pos[2]-.29],max:[a.pos[0]+.39,.5,a.pos[2]+.29]});let o=new mt(ai(xd(r)),Vt({color:K.playerOrange}));o.name="grey-crate",An(o),e.add(o)}if(n.landmark){let r=n.landmark,o=Ac({text:r.text,w:r.w,h:r.h});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=Math.PI,e.add(o)}for(let r of n.signs||[]){let o=Ac({text:r.text,w:r.w,h:r.h,bg:r.bg,seed:4});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=r.yaw,e.add(o)}return{group:e,boxes:n.boxes,update(r){}}}var o0=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(o0)),n),Ts=.3,yi=7,Mi=15,HS=[ft([-yi,-1,-Mi],[yi,0,Mi],"floor"),ft([-yi-Ts,0,-Mi-Ts],[yi+Ts,4,-Mi]),ft([-yi-Ts,0,Mi],[yi+Ts,4,Mi+Ts]),ft([-yi-Ts,0,-Mi],[-yi,4,Mi]),ft([yi,0,-Mi],[yi+Ts,4,Mi]),ft([-5,0,-9.5],[-3,1,-8.5],"low"),ft([2,0,-9.5],[4,1,-8.5],"low"),ft([-.4,0,-7.4],[.4,4,-6.6],"pillar"),ft([-1,0,-3.5],[1,1,-2.5],"low"),ft([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),ft([3.5,0,-1.5],[5.5,1,-.5],"low"),ft([-4.5,0,3.5],[-2.5,1,4.5],"low"),ft([2.5,0,3.5],[4.5,1,4.5],"low"),ft([-.4,0,6.6],[.4,4,7.4],"pillar"),ft([-4.5,0,9],[-2.5,1,10],"low"),ft([2.5,0,9],[4.5,1,10],"low"),ft([-1.5,0,12],[1.5,2.2,12.6],"tall")],GS=[-12,-6,.5,7,11],VS=[-6,-2,2,6],$c=[];for(let n of GS)for(let e of VS)$c.push([e,n]);$c.push([0,-5],[0,0],[0,9.5]);$c.push([-3.5,13.5],[3.5,13.5]);var a0=o0({name:"kioskRow",boxes:HS,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:$c,ammoCrates:[{pos:[5.5,0,-12.5]}],landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});var Es=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},vd=class extends Es{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function _d(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var WS={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:_d,toHexString:_d},aa={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},XS={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=aa.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return aa.toHexString(s)}},YS={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=aa.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return aa.toHexString(s)}},qS=[WS,aa,XS,YS];function $S(n){return qS.find(e=>e.match(n))}var yd=class extends Es{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=$S(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=_d(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},oa=class extends Es{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Md=class extends Es{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},i=_=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),i(this._step*this._normalizeMouseWheel(_)))},o=!1,a,l,c,h,f,u=5,d=_=>{a=_.clientX,l=c=_.clientY,o=!0,h=this.getValue(),f=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=_=>{if(o){let S=_.clientX-a,M=_.clientY-l;Math.abs(M)>u?(_.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>u&&x()}if(!o){let S=_.clientY-c;f-=S*this._step*this._arrowKeyMultiplier(_),h+f>this._max?f=this._max-h:h+f<this._min&&(f=this._min-h),this._snapClampSetValue(h+f)}c=_.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},p=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(g,_,S,M,b)=>(g-_)/(S-_)*(b-M)+M,t=g=>{let _=this.$slider.getBoundingClientRect(),S=e(g,_.left,_.right,this._min,this._max);this._snapClampSetValue(S)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",u))},f=g=>{if(o){let _=g.touches[0].clientX-a,S=g.touches[0].clientY-l;Math.abs(_)>Math.abs(S)?c(g):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",u))}else g.preventDefault(),t(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",u)},d=this._callOnFinishChange.bind(this),m=400,x,p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();let S=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(d,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},bd=class extends Es{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Sd=class extends Es{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},ZS=`.lil-gui {
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
}`;function KS(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var l0=!1,Zc=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!l0&&a&&(KS(ZS),l0=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new bd(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new Md(this,e,t,i,s,r);case"boolean":return new vd(this,e,t);case"string":return new Sd(this,e,t);case"function":return new oa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new yd(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof oa||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof oa)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var L=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function c0(n){let e=(t,i,s,r)=>L(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var la=Object.freeze([L("move.jog",1,10,.1),L("move.aimWalk",.5,6,.1),L("move.sprint",2,14,.1),L("move.accelTime",.01,.6,.01),L("move.stopTime",.01,.6,.01),L("move.turnRate",1,40,.5),L("move.aimTurnRate",1,40,.5),L("move.sprintTurnRate",.2,20,.1),L("move.rollDistance",1,12,.1),L("move.rollTime",.2,1.5,.01),L("move.rollEase",1,4,.05),L("move.rollBuffer",0,.5,.01),L("move.tapMax",.05,.5,.01),L("move.stickSprintMin",0,1,.05),L("move.faceMinSpeed",0,2,.05),L("move.sprintHeadingMinSpeed",0,3,.05),L("move.runClipMinSpeed",0,2,.05),L("move.runRateMin",.1,2,.05),L("move.runRateMax",.5,4,.05),L("move.sprintRateMin",.1,2,.05),L("move.sprintRateMax",.5,4,.05),L("move.stepEvery",.4,4,.05),L("move.stepEverySprint",.4,6,.05),L("move.crawlSpeed",.2,4,.05),L("move.crawlTurnRate",.5,20,.5),L("camera.fov",40,110,1),L("camera.right",-1.5,1.5,.01),L("camera.up",.5,3,.01),L("camera.back",.5,6,.05),L("camera.aim.fov",20,90,1),L("camera.aim.back",.3,5,.05),L("camera.sprint.fov",50,120,1),L("camera.sprint.up",.3,3,.01),L("camera.sprint.back",.5,6,.05),L("camera.sprint.shakeWeight",0,3,.05),L("camera.coverLow.fov",50,120,1),L("camera.coverLow.right",-1.5,1.5,.01),L("camera.coverLow.up",.3,3,.01),L("camera.coverLow.back",.5,6,.05),L("camera.coverTall.fov",50,120,1),L("camera.coverTall.right",-1.5,1.5,.01),L("camera.coverTall.up",.3,3,.01),L("camera.coverTall.back",.5,6,.05),L("camera.downed.fov",40,120,1),L("camera.downed.up",.2,3,.01),L("camera.downed.back",.5,6,.05),L("camera.bump.amount",0,.6,.01),L("camera.bump.halfLife",.01,.3,.005),L("camera.slamShake.amount",0,.3,.005),L("camera.slamShake.time",.02,1,.01),L("camera.slamShake.hz",2,60,.5),L("camera.blendHalfLife",0,.5,.005),L("camera.holdTime",0,2,.05),L("camera.holdRange",10,300,5),L("camera.followHalfLife",0,.5,.005),L("camera.sideHalfLife",0,.6,.005),L("camera.headHideDist",0,2,.05),L("camera.headHideMargin",0,1,.01),L("camera.shake.amp",0,.15,.001),L("camera.shake.hz",1,30,.5),L("camera.probeRadius",.05,.6,.01),L("camera.minBack",0,2,.01),L("camera.wallReturnHalfLife",0,1,.01),L("camera.pitchMin",-1.5,0,.01),L("camera.pitchMax",0,1.5,.01),L("look.mouse",5e-4,.008,1e-4),L("look.pad.yawRate",.5,10,.1),L("look.pad.pitchRate",.5,10,.1),L("look.pad.expo",1,3,.05),L("look.aimScale",.1,1.5,.01),{path:"look.invertY"},L("cover.grabRange",0,5,.05),L("cover.grabAngle",0,180,1),L("cover.grabViewAngle",0,180,1),L("cover.grabSlack",0,5,.05),L("cover.grabMinTilt",0,1,.05),L("cover.gap",0,5,.01),L("cover.endInset",0,5,.01),L("cover.minLength",0,5,.05),L("cover.slideSpeed",0,30,.5),L("cover.slideMinTime",0,2,.01),L("cover.slideMaxTime",0,2,.01),L("cover.slideTurnRate",1,60,.5),L("cover.moveSpeed",0,30,.1),L("cover.alongDeadzone",0,1,.05),L("cover.leaveTilt",0,1,.05),L("cover.leaveAngle",0,180,1),L("cover.endLeaveTime",0,2,.01),L("cover.cornerZone",0,5,.05),L("cover.popTime",0,2,.01),L("cover.blindTime",0,2,.01),L("cover.popShift",0,5,.05),L("cover.pushAngle",0,180,1),L("cover.lowDrawBack",0,1,.01),L("cover.blindDrawBack",0,1,.01),L("cover.vaultTime",0,2,.01),L("cover.vaultMaxDepth",0,5,.05),L("cover.vaultHop",0,5,.05),L("cover.vaultExitSpeed",0,30,.1),L("cover.swapRange",0,5,.05),L("cover.swapSpeed",0,30,.5),L("cover.swapAngle",0,180,1),L("cover.swapMaxOffset",0,5,.05),L("cover.slamSquash",0,1,.01),L("cover.slamSquashTime",0,2,.01),L("cover.thudVolume",0,1,.05),L("cover.autoSlam",0,1,1),L("cover.autoAngle",0,90,1),L("cover.autoDist",0,1,.01),L("cover.autoMinTilt",0,1,.05),L("cover.autoMinSpeed",0,12,.1),L("cover.autoTime",0,1,.01),...c0("regret"),...c0("pistol"),L("combat.fireBuffer",0,.5,.01),L("combat.autoReload",0,1,1),L("combat.minRate",.01,1,.01),L("combat.minReloadTime",.01,.5,.01),L("combat.muzzleUp",.5,2,.01),L("combat.muzzleRight",-1,1,.01),L("combat.muzzleForward",0,2,.01),L("combat.blindLift",0,1,.01),L("combat.blindReach",0,1,.01),L("combat.crateRadius",.3,3,.05),L("combat.hitPad",0,.3,.005),L("combat.crouchHead",0,3,.01),L("combat.crouchBodyTop",0,3,.01),L("combat.shoulderDrop",0,1,.01),L("combat.pickupRadius",.2,3,.05),L("health.max",1,500,1),L("health.regenDelay",0,15,.1),L("health.regenTime",0,15,.1),L("health.downedTime",0,60,.5),L("health.standInRevive",0,1,1),L("health.reviveTime",0,10,.1),L("health.reviveHealth",0,1,.05),L("health.godMode",0,1,1),L("health.giveUpHold",0,5,.01),L("associate.radius",0,3,.01),L("associate.height",0,3,.01),L("associate.pointSpacing",.2,3,.01),L("associate.reserveRadius",0,3,.01),L("associate.popShift",0,3,.01),L("associate.linkMax",2,15,.5),L("associate.health",1,1e3,1),L("associate.runSpeed",0,12,.1),L("associate.turnRate",.5,40,.5),L("associate.arriveDist",.01,1,.01),L("associate.stuckTime",.1,5,.1),L("associate.popTime",0,1,.01),L("associate.telegraphTime",0,2,.01),L("associate.burstTime",0,5,.1),L("associate.rate",.5,20,.5),L("associate.damage",0,50,.5),L("associate.range",5,100,1),L("associate.spread",0,15,.1),L("associate.moveSpread",0,15,.1),L("associate.aimLag",0,1,.01),L("associate.suppressChance",0,1,.05),L("associate.suppressTime",0,5,.1),L("associate.suppressRate",.5,20,.5),L("associate.suppressMiss",0,5,.1),L("associate.suppressSpread",0,20,.5),L("associate.coverWaitMin",0,5,.1),L("associate.coverWaitMax",0,8,.1),L("associate.magBursts",1,10,1),L("associate.reloadTime",0,6,.1),L("associate.flinchTime",0,2,.01),L("associate.minRange",0,20,.5),L("associate.preferRange",0,40,.5),L("associate.maxRange",1,60,.5),L("associate.relocateCheck",.05,3,.05),L("associate.relocateAfter",1,60,.5),L("associate.ammoDrop",0,200,1),L("associate.muzzleUp",.5,2,.01),L("director.tokens",0,8,1),L("director.casualTokens",0,8,1),L("director.casual",0,1,1),L("director.tokenCooldown",0,5,.1),L("director.tokenMaxHold",.5,10,.1),L("director.requestWindow",0,2,.05),L("director.pushAfter",1,30,.5),L("director.flankAfter",1,60,.5),L("director.stayRadius",.5,10,.1),L("director.flankAngle",0,180,1),L("director.flankMaxAngle",60,180,1),L("director.maxEnemies",4,8,1),L("associate.downChance",0,1,.05),L("associate.downedCrawl",0,3,.05),L("associate.bleedTime",1,60,.5),L("associate.reviveTime",0,10,.1),L("associate.reviveHealth",.05,1,.05),L("associate.reviveRange",0,40,.5),L("associate.staggerTime",0,3,.05),L("associate.diveWarn",0,1.6,.05),L("associate.diveRadius",0,12,.1),L("associate.diveChance",0,1,.05),L("associate.diveReaction",0,2,.05),L("associate.diveDistance",0,10,.1),L("associate.diveTime",.05,3,.05),L("pad.radius",.1,4,.05),L("pad.openAfterKills",0,8,1),L("pad.openAfter",0,120,1),L("pad.interval",.5,30,.5),L("pad.maxAlive",1,8,1),L("pad.total",1,30,1),L("pad.riseTime",0,3,.05),L("dummy.health",1,1e3,1),L("dummy.respawnTime",0,30,.5),L("dummy.railSpeed",0,10,.1),L("camera.recoil.halfLife",.01,.5,.01),L("camera.recoil.max",0,20,.5),L("look.pad.assist",.1,1,.05),L("feedback.flashTime",.01,.3,.01),L("feedback.flashSize",.05,1.5,.05),L("feedback.tracerTime",.01,.3,.01),L("feedback.tracerWidth",.005,.2,.005),L("feedback.sparkTime",.05,1,.01),L("feedback.sparkCount",0,12,1),L("feedback.gelTime",.1,2,.05),L("feedback.gelCount",0,24,1),L("feedback.gelSpeed",0,10,.1),L("feedback.killGelCount",0,48,1),L("feedback.receiptCount",0,24,1),L("feedback.receiptTime",.2,4,.05),L("feedback.gravity",0,30,.1),L("feedback.hitMarkerTime",.02,1,.01),L("feedback.killMarkerTime",.05,1,.01),L("feedback.reloadResultTime",.1,2,.05),L("feedback.reticleMinGap",0,30,1),L("feedback.lowAmmoFrac",0,1,.05),L("feedback.coverReticleOpacity",0,1,.05),L("feedback.stepDip",0,.1,.001),L("feedback.stepVolume",0,1,.05),L("feedback.shotVolume",0,1,.05),L("feedback.hitVolume",0,1,.05),L("feedback.killVolume",0,1,.05),L("feedback.reloadVolume",0,1,.05),L("feedback.gunSquash",0,.6,.01),L("feedback.gunSquashTime",.01,.5,.01),L("feedback.gunKick",0,.3,.01),L("feedback.bodyKick",0,.3,.01),L("feedback.dummyBurstTime",.01,1,.01),L("feedback.dummyRespawnPop",0,1,.01),L("feedback.faceMaxOpacity",0,1,.05),L("feedback.edgeMaxOpacity",0,1,.05),L("feedback.hitFlashTime",.05,2,.01),L("feedback.hitKick",0,3,.05),L("feedback.hurtVolume",0,1,.05),L("feedback.enemyFlashSize",.05,1.5,.05),L("feedback.enemyTracerTime",.01,.3,.01),L("feedback.enemyTracerWidth",.005,.2,.005),L("feedback.glintSize",.02,.4,.01),L("feedback.blasterVolume",0,1,.05),L("feedback.chargeVolume",0,1,.05),L("feedback.pickupVolume",0,1,.05),L("feedback.barkTime",.2,6,.1),L("feedback.barkGap",0,12,.5),L("melee.holdTime",0,5,.01),L("melee.bashTime",0,5,.01),L("melee.bashHitAt",0,5,.01),L("melee.bashRange",0,10,.05),L("melee.bashAngle",0,180,1),L("melee.bashDamage",0,500,1),L("melee.bashLunge",0,10,.05),L("melee.bashCooldown",0,5,.01),L("melee.revSpeed",0,30,.1),L("melee.revPulse",.05,5,.01),L("melee.cutterReach",0,10,.05),L("melee.cutterAngle",0,180,1),L("melee.cutTime",0,5,.01),L("melee.finishTime",0,5,.01),L("melee.executeRange",0,10,.05),L("melee.executeAngle",0,180,1),L("melee.promptRange",0,10,.05),L("melee.cutterSpin",0,100,1),L("grenade.carry",0,10,1),L("grenade.start",0,10,1),L("grenade.throwSpeed",0,30,.1),L("grenade.throwLift",0,180,1),L("grenade.gravity",.5,30,.1),L("grenade.ballRadius",.02,1,.01),L("grenade.restitution",0,1,.01),L("grenade.friction",0,1,.01),L("grenade.fuse",0,5,.01),L("grenade.radius",0,10,.05),L("grenade.damage",0,500,1),L("grenade.killRadius",0,10,.05),L("grenade.killDamage",0,500,1),L("grenade.selfDamage",0,2,.05),L("grenade.padReach",0,10,.05),L("grenade.arcTime",0,5,.01),L("grenade.throwTime",0,5,.01)]),JS=new Map(la.map(n=>[n.path,n])),ca=structuredClone(le);function er(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function Td(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function Ed(n=le,e=ca){let t={};for(let i of la){let s=er(n,i.path);s!==er(e,i.path)&&(t[i.path]=s)}return t}function h0(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=JS.get(i);if(!s)continue;let r=e[i],o=er(ca,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Td(n,i,r)&&t++)}return t}function wd(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>wd(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${wd(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function u0(n=le){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","pad","weapons"].map(e=>`  ${e}: ${wd(n[e],1)},`).join(`
`)}var Ad="cr-tuning",jS={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",lookPad:"Pad",wall:"Wall"},QS=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function d0(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&QS.has(e[1])&&t.push("wall"),t[0]==="look"&&t[1]==="pad"&&(t[1]="lookPad"),t}function ew(){try{return window.localStorage}catch{return null}}function f0({storage:n=ew()}={}){let e=()=>{try{return n?n.getItem(Ad):null}catch{return null}},t=x=>{try{n&&(x===null?n.removeItem(Ad):n.setItem(Ad,x))}catch{}};try{let x=e();x&&h0(le,JSON.parse(x))}catch{}let i=new Zc({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let x=document.activeElement;x&&x!==document.body&&s.contains(x)&&x.blur&&x.blur()}s.addEventListener("click",x=>{let p=x.target;p&&p.closest&&p.closest(".lil-title")&&p.blur!==void 0&&r()});let o=new Map;function a(x){let p=i,g="";for(let _ of x){if(g+=`.${_}`,!o.has(g)){let S=p.addFolder(jS[_]||_);S.close(),o.set(g,S)}p=o.get(g)}return p}function l(){let x=Ed();t(Object.keys(x).length?JSON.stringify(x):null)}for(let x of la){let p=x.path.split("."),g=p[p.length-1],_=er(le,p.slice(0,-1).join(".")),S=typeof er(ca,x.path)=="boolean"?a(d0(x.path)).add(_,g):a(d0(x.path)).add(_,g,x.min,x.max,x.step);S.onChange(l),S.onFinishChange(r)}let c=null;function h(x){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let p=document.createElement("div");p.textContent="Press Cmd+C to copy",p.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=p,s.appendChild(p),s.appendChild(c)}c.value=x,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function f(x){c&&(c.hidden=!0,c.note.hidden=!0);let p=null;try{p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(x):null}catch{p=null}if(!p){h(x);return}p.catch(()=>h(x))}let u={copyChanges(){r(),f(JSON.stringify(Ed(),null,2))},copyForFile(){r(),f(u0())},resetAll(){r();for(let x of la)Td(le,x.path,er(ca,x.path));t(null),i.controllersRecursive().forEach(x=>x.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let d=!1;function m(x){d=x,s.style.display=x?"":"none"}return m(!1),{toggle(){m(!d)},isOpen:()=>d}}var p0=Math.PI*2,Yi=n=>n-p0*Math.round(n/p0),li=(n,e)=>Math.atan2(n,e);function ha(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function Kn(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function rn(n,e,t){let i=Yi(e-n);return n+Math.max(-t,Math.min(t,i))}function Vr(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=t-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=t):(o[0]+=l/h*a,o[2]+=c/h*a)}var Rd=[0,0],Kc=[0,0,0],ua=1e-9,tw=1.5;var nw=(n=le)=>n.tobble?.playerReviveTime??tw;function m0(n,e,t){let i=e-n.pos[0],s=t-n.pos[2];Math.hypot(i,s)>1e-6&&(n.facing=n.facing+Yi(Math.atan2(i,s)-n.facing)),n.heading=n.facing}function Jc(n){n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0}var jc={bash:{acceptsTap:!1,selfMoves:!0,enter(n){n.aiming=!1,n.firing=!1,n.scratch.dir=[Math.sin(n.facing),Math.cos(n.facing)],n.scratch.prevOff=0,n.scratch.hit=!1,n.heading=n.facing},update(n,e,t){let i=le.melee,s=n.scratch;n.aiming=!1,n.firing=!1;let r=n.stateTime>=i.bashTime-ua,o=r||!(i.bashTime>0)?1:n.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,Kc[0]=s.dir[0]*l,Kc[1]=0,Kc[2]=s.dir[1]*l,n.moveBy(Kc,t,!1),!s.hit&&(r||n.stateTime>=i.bashHitAt-ua)&&(s.hit=!0,n.onAction?.({type:"bashHit"})),r?(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(n){n.aiming=!1,n.firing=!1,n.heading=n.facing},update(n,e,t){let i=n.tuning,s=le.melee.revSpeed;n.aiming=!1,n.firing=!1,Kn(e,Rd),Vr(n,Rd[0]*s,Rd[1]*s,s,t,i);let r=n.speed();return r>s&&(n.vel[0]*=s/r,n.vel[2]*=s/r),r>i.faceMinSpeed?n.facing=rn(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t):n.facing=rn(n.facing,e.camYaw,i.aimTurnRate*t),n.heading=n.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(n){Jc(n)},update(n){return Jc(n),n.stateTime<n.scratch.time-ua?null:(n.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(n){Jc(n)},update(n,e){return Jc(n),e.interactHeld?n.stateTime<nw()-ua?null:(n.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},da={bash(n,e){return n.state!=="move"&&n.state!=="sprint"||n.bashReadyAt>n.clock+ua?!1:(n.bashReadyAt=n.clock+le.melee.bashCooldown,Number.isFinite(e)&&(n.facing=n.facing+Yi(e-n.facing)),n.go("bash",{}),!0)},rev(n,e){return e?n.state!=="move"&&n.state!=="sprint"?!1:(n.go("rev",{}),!0):n.state!=="rev"?!1:(n.go("move",{}),!0)},execute(n,e,t){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("execute",{}),n.scratch.time=Number.isFinite(t)&&t>0?t:0,m0(n,e[0],e[1]),!0)},reviveTobble(n,e){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("reviveTobble",{}),m0(n,e[0],e.length>2?e[2]:e[1]),!0)}};var bi=1e-9,Cd=Math.PI/180,x0=.05,iw=1.8,sw={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function v0(n=le.cover,e=le.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var rw=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],ow=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function _0(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,c)=>{let h=sw[l.kind];if(!h)return;let f=n.filter((u,d)=>d!==c&&u.kind!=="floor"&&u.max[1]>x0&&u.min[1]<iw);for(let u of rw){let d=u.axis*2,m=2-d,x=(u.sign>0?l.max[d]:l.min[d])+u.sign*o,p=l.min[m],g=l.max[m],_=g-p,S=[];for(let y of f){if(!(x>y.min[d]-o+bi&&x<y.max[d]+o-bi))continue;let w=y.min[m]-o-p,E=y.max[m]+o-p;E>bi&&w<_-bi&&S.push([Math.max(w,0),Math.min(E,_)])}S.sort((y,w)=>y[0]-w[0]);let M=[];for(let y of S){let w=M[M.length-1];w&&y[0]<=w[1]+bi?w[1]=Math.max(w[1],y[1]):M.push([y[0],y[1]])}let b=[],T=0,v=!0;for(let[y,w]of M)y>T+bi&&b.push([T,y,v,!1]),T=w,v=!1;_>T+bi&&b.push([T,_,v,!0]),b.forEach(([y,w,E,R],D)=>{let B=`${c}${u.name}#${D}`;if(r.includes(B))return;let I=p+y+(E?i:0),G=p+w-(R?i:0),H=G-I;if(H<s-bi)return;let Y=u.axis===0?[x,I]:[I,x],ae=u.axis===0?[x,G]:[G,x];a.push(ow({id:B,kind:h,boxIndex:c,a:Y,b:ae,length:H,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[d]-l.min[d],openA:E,openB:R}))})}}),a}function ci(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function As(n,e,t=le.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function fa(n,e){return e<0?n.openA:n.openB}var g0=.9,y0=(n,e,t,i)=>Zn(n,[e[0],g0,e[1]],[t[0],g0,t[1]],.9*i)===1;function pa(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*Cd),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*Cd,f=null;for(let u of n){let d=(t[0]-u.a[0])*u.normal[0]+(t[2]-u.a[1])*u.normal[1],m=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(d<-(r.gap+.02)||m<a||m<=bi)continue;let x=Math.max(d,0)/m,p=(t[0]+i[0]*x-u.a[0])*u.tangent[0]+(t[2]+i[1]*x-u.a[1])*u.tangent[1];if(p<-r.grabSlack||p>u.length+r.grabSlack)continue;let g=Math.max(0,Math.min(u.length,p)),_=ci(u,g),S=_[0]-t[0],M=_[1]-t[2],b=Math.hypot(S,M);if(!(b>r.grabRange||f&&b>=f.dist)){if(b>.3){let T=(S*l+M*c)/b;if(Math.acos(Math.max(-1,Math.min(1,T)))>h)continue}y0(e,[t[0],t[2]],_,o)&&(f={edge:u,t:g,point:_,dist:b})}}return f}function M0(n,e,t,i,s,r,o){if(As(t,i,r)!==s||!fa(t,s))return null;let a=ci(t,i),l=Math.cos(r.swapAngle*Cd),c=null;for(let h of n){if(h===t||h.normal[0]*t.normal[0]+h.normal[1]*t.normal[1]<l)continue;let f=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),d=f<=u?0:h.length,m=ci(h,d),x=m[0]-a[0],p=m[1]-a[1],g=Math.hypot(x,p);(x*t.tangent[0]+p*t.tangent[1])*s<=0||Math.abs(x*t.normal[0]+p*t.normal[1])>r.swapMaxOffset||g>r.swapRange||c&&g>=c.dist||y0(e,a,m,o)&&(c={edge:h,t:d,point:m,dist:g})}return c}function aw(n,e,t,i){let s=e[1]+x0,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-bi)return!1}return!0}function b0(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=ci(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!aw(t,l,s,r))return null;let c=t.filter((h,f)=>f!==n.boxIndex);return Zn(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var lw=["coverSlide","cover","vault","coverSwap"],S0=Math.PI/180,jt=[0,0],eh=[0,0],Rs=[0,0,0],E0=.001,cw=2,Pd=(n,e,t)=>Math.max(e,Math.min(t,n));function Id(n,e,t){if(ha(e)>=n.coverTuning.grabMinTilt){Kn(e,jt);let i=Math.hypot(jt[0],jt[1]);t[0]=jt[0]/i,t[1]=jt[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var A0={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=pa(n.coverEdges,n.boxes,n.pos,Id(n,e,eh),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},Qc={};function R0(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||ha(e)<t.autoMinTilt)return null;Object.assign(Qc,t),Qc.grabAngle=t.autoAngle,Qc.grabRange=t.autoDist,Kn(e,jt);let i=Math.hypot(jt[0],jt[1]);eh[0]=jt[0]/i,eh[1]=jt[1]/i;let s=pa(n.coverEdges,n.boxes,n.pos,eh,e.camYaw,Qc,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function hw(n,e,t){let i=As(n,e,t);return n.kind==="low"||i!==0&&fa(n,i)}function qi(n){return n.cover?n.cover.edge:n.scratch.edge||null}function Ld(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=qi(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function tr(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=As(t,e.t,n.coverTuning)),i===0)return 1;let s=li(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return fa(t,i)?a:-a}function w0(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(E0,Pd(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function T0(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Rs[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Rs[1]=0,Rs[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Rs,e,!1),i!==null&&(n.facing=rn(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var uw={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;w0(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return T0(n,t,n.coverTuning.slideTurnRate,li(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,w0(n,e.swapSpeed,0,cw);let t=n.scratch;n.heading=li(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+Yi(n.heading-n.facing)},update(n,e,t){return T0(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=li(-i.normal[0],-i.normal[1]),n.facing=n.facing+Yi(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,E0)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=Kn(e,jt),l=Math.hypot(jt[0],jt[1]),c=l>0?jt[0]/l:0,h=l>0?jt[1]/l:0,f=r.normal[0],u=r.normal[1],d=a>=i.leaveTilt,m=(y,w)=>(n.vel[0]=y*o.jog,n.vel[1]=0,n.vel[2]=w*o.jog,"move");if(d&&c*f+h*u>=Math.cos(i.leaveAngle*S0))return m(jt[0],jt[1]);if(e.tap&&d){let y=Math.cos(i.pushAngle*S0);if(-(c*f+h*u)>=y){let E=b0(r,s.t,n.boxes,i,o.radius,o.height);if(E)return n.coverTarget={landing:E,edge:r},"vault"}let w=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(w)>=y){let E=M0(n.coverEdges,n.boxes,r,s.t,w>0?1:-1,i,o.radius);if(E)return n.coverTarget=E,"coverSwap"}}let x=As(r,s.t,i),p=hw(r,s.t,i),g=e.aim&&p?1:0,_=e.fire&&!e.aim&&p?1:0,S=i.popTime>0?t/i.popTime:1;s.pop=s.pop<g?Math.min(g,s.pop+S):Math.max(g,s.pop-S);let M=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<_?Math.min(_,s.blind+M):Math.max(_,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?x:0,s.blindEnd=s.blind>0&&r.kind!=="low"?x:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let b=!1;if(s.pop===0&&s.blind===0){let y=jt[0]*r.tangent[0]+jt[1]*r.tangent[1];if(Math.abs(y)>=i.alongDeadzone){let w=s.t+y*i.moveSpeed*t;if(s.t=Pd(w,0,r.length),w!==s.t&&fa(r,y>0?1:-1)&&(b=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(y),r.tangent[1]*Math.sign(y))}}else s.blindEnd!==0&&_===1&&(s.t=Pd(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));b||(s.endPush=0);let T=ci(r,s.t),v=s.popEnd*i.popShift*s.pop;return Rs[0]=T[0]+r.tangent[0]*v-n.pos[0],Rs[1]=0,Rs[2]=T[1]+r.tangent[1]*v-n.pos[2],n.moveBy(Rs,t,!1),s.pop>0?n.facing=rn(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=rn(n.facing,li(-f,-u),o.turnRate*t),n.heading=n.facing,null}}},C0=Object.fromEntries(lw.map(n=>[n,uw[n]]));var Nd=n=>[Math.sin(n),0,Math.cos(n)],Od=n=>[-Math.cos(n),0,Math.sin(n)],dw=(n,e,t)=>e*(1-(1-n)**t),un=[0,0],th=[0,0,0];function Dd(n,e,t){return e.sprint&&!e.aim&&!e.grenade&&ha(e)>=t.stickSprintMin}var fw={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(Dd(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return Kn(e,un),Vr(n,un[0]*s,un[1]*s,s,t,i),e.aim||e.fire||e.grenade?n.facing=rn(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=rn(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):Kn(e,un)>.01?n.heading=Math.atan2(un[0],un[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return Dd(n,e,i)?(Kn(e,un),n.heading=rn(n.heading,Math.atan2(un[0],un[1]),i.sprintTurnRate*t),Vr(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],Kn(e,un)>.01){let i=Math.hypot(un[0],un[1]);t.dir[0]=un[0]/i,t.dir[1]=un[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+Yi(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=dw(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,th[0]=s.dir[0]*a,th[1]=0,th[2]=s.dir[1]*a,n.moveBy(th,t,!1),r?s.queued?"roll":Dd(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,Kn(e,un),Vr(n,un[0]*i.crawlSpeed,un[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=rn(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...C0,...jc},pw=[A0,{name:"roll",when:()=>!0,state:"roll"}];function P0({boxes:n,spawn:e,tuning:t=le.move,coverTuning:i=le.cover,coverEdges:s=[],states:r=fw,contextActions:o=pw,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(f,u,d=!0){let m=h.pos,x=_s(n,m,f,t.radius,t.height);if(h.hit=!!x.hit,!d)u>0&&(h.vel[0]=(x.pos[0]-m[0])/u,h.vel[2]=(x.pos[2]-m[2])/u);else if(x.hit)if(u>0)h.vel[0]=(x.pos[0]-m[0])/u,h.vel[2]=(x.pos[2]-m[2])/u;else{let p=x.normal,g=h.vel[0]*p[0]+h.vel[1]*p[1]+h.vel[2]*p[2];g<0&&(h.vel[0]-=p[0]*g,h.vel[1]-=p[1]*g,h.vel[2]-=p[2]*g)}m[0]=x.pos[0],m[1]=x.pos[1],m[2]=x.pos[2]},go(f,u){let d=h.state;r[d].exit?.(h),h.state=f,h.stateTime=0,h.entries++,h.scratch={},r[d].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[f].enter(h,u),h.onState?.(f,d,u)},down(){h.go("downed",{})},bash(f){return da.bash(h,f)},rev(f){return da.rev(h,f)},execute(f,u){return da.execute(h,f,u)},reviveTobble(f){return da.reviveTobble(h,f)},revive(){h.state==="downed"&&h.go("move",{})},place(f,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=f[0],h.pos[1]=h.prevPos[1]=f[1],h.pos[2]=h.prevPos[2]=f[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(f,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!f.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),f.tap&&r[h.state].acceptsTap){for(let x of o)if(x.when(h,f)){h.go(x.state,f);break}}h.stateTime+=u;let d=r[h.state].update(h,f,u),m=h.state;if(!r[m].selfMoves){let x=h.vel[0],p=h.vel[2],g=Math.hypot(x,p);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(g>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=x,h.runVel[1]=p)):(h.runVel[0]=x,h.runVel[1]=p,h.hitTime=0)}if(m==="move"||m==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let p=Math.max(.1,m==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=p&&(h.stepDist%=p,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:m==="sprint",speed:h.speed()}))}if(m==="move"||m==="sprint"){let x=R0(h,f);if(!x)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=x,h.go("coverSlide",f);return}}d&&h.go(d,f)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function I0({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let d=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,d,e.sampleRate);let m=t.getChannelData(0);for(let x=0;x<d;x++)m[x]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(d){if(!(d>0||d<0)||!e.createStereoPanner)return e.destination;let m=e.createStereoPanner();return m.pan.value=Math.max(-1,Math.min(1,d)),m.connect(e.destination),m}let a=()=>{if(e.state==="suspended"){let d=e.resume();d&&d.catch&&d.catch(()=>{})}};function l(d,m,x){let p=e.createGain();return p.gain.setValueAtTime(x,d),p.gain.exponentialRampToValueAtTime(.001,d+m),p.connect(s),p}function c(d,m,x,p,g,_){let S=e.createOscillator();S.type=m,S.frequency.setValueAtTime(x,g),p!==x&&S.frequency.exponentialRampToValueAtTime&&S.frequency.exponentialRampToValueAtTime(p,g+_),S.connect(d),S.start(g),S.stop(g+_)}function h(d,m,x,p,g){let _=e.createBufferSource();_.buffer=t;let S=e.createBiquadFilter();S.type=m,S.frequency.setValueAtTime(x,p),_.connect(S),S.connect(d),_.start(p),_.stop(p+g)}let f=(d,m,x)=>{let p=l(d,.03,x);h(p,"bandpass",m,d,.03)},u={rifle:(d,m)=>{h(l(d,.05,m*.55),"bandpass",2200,d,.05),c(l(d,.16,m*.9),"sine",150,48,d,.16),c(l(d,.22,m*.8),"sine",62,34,d,.22),h(l(d,.26,m*.35),"lowpass",700,d,.26)},pistol:(d,m)=>{h(l(d,.06,m*.6),"bandpass",2e3,d,.06),c(l(d,.2,m*.9),"sine",130,42,d,.2),c(l(d,.26,m*.85),"sine",56,30,d,.26),h(l(d,.3,m*.4),"lowpass",600,d,.3)},dry:(d,m)=>c(l(d,.02,m),"square",1200,1200,d,.02),hit:(d,m)=>c(l(d,.04,m),"sine",1600,1600,d,.04),head:(d,m)=>{let x=l(d,.06,m);c(x,"sine",2400,2400,d,.06),c(x,"sine",3200,3200,d,.06)},kill:(d,m)=>{let x=l(d,.12,m);c(x,"sine",300,900,d,.12);let p=l(d,.2,m*.8);h(p,"lowpass",1400,d,.2)},magOut:(d,m)=>{f(d,3e3,m),f(d+.08,2200,m)},magIn:(d,m)=>{f(d,2e3,m),f(d+.08,3400,m)},perfect:(d,m)=>{let x=l(d,.35,m);c(x,"sine",1320,1320,d,.35),c(x,"sine",1980,1980,d,.35)},good:(d,m)=>c(l(d,.15,m),"sine",990,990,d,.15),jam:(d,m)=>c(l(d,.15,m),"square",90,90,d,.15),blaster:(d,m)=>{let x=l(d,.1,m);c(x,"square",900,300,d,.1),h(x,"bandpass",1500,d,.1)},charge:(d,m)=>{let x=e.createGain();x.gain.setValueAtTime(.001,d),x.gain.exponentialRampToValueAtTime(m,d+.3),x.gain.exponentialRampToValueAtTime(.001,d+.35),x.connect(s),c(x,"sine",300,900,d,.35)},hurt:(d,m)=>{let x=l(d,.15,m);h(x,"lowpass",600,d,.15),c(x,"sine",80,80,d,.15)},downed:(d,m)=>c(l(d,.6,m),"sine",400,80,d,.6),clear:(d,m)=>{[523,659,784].forEach((x,p)=>c(l(d+p*.12,.15,m),"sine",x,x,d+p*.12,.15))},pickup:(d,m)=>{c(l(d,.06,m),"sine",880,880,d,.06),c(l(d+.07,.08,m),"sine",1320,1320,d+.07,.08)},thud:(d,m)=>{c(l(d,.32,m),"sine",60,30,d,.32),h(l(d,.28,m*.6),"lowpass",260,d,.28),h(l(d,.07,m*.3),"bandpass",900,d,.07)},step:(d,m)=>{c(l(d,.1,m),"sine",95,50,d,.1),h(l(d,.07,m*.5),"lowpass",280,d,.07)}};return{play(d,m,x=0){let p=u[d];if(!(!p||!(m>0)||!r()))try{a(),s=o(x),p(e.currentTime,m)}catch{}},unlock(){if(r())try{a()}catch{}}}}function L0(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var nh=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),D0=Object.freeze(["regret",null,"pistol"]);function N0(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function Ud(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var mw={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function O0({weapons:n=le.weapons,combat:e=le.combat,loadout:t=D0}={}){let i={},s=()=>{for(let x of t)x&&Object.assign(i[x]||(i[x]={}),{mag:Math.floor(n[x].mag),reserve:Math.floor(n[x].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(x,p)=>x[mw[p]||"spreadHip"],c=x=>x!=null&&o.reload===null&&o.switching<=0;function h(){let x=a(),p=n[x],g=i[x];return o.reload===null&&o.switching<=0&&g.mag<p.mag&&(p.infiniteReserve>0||g.reserve>0)}function f(){let x=a(),p=n[x];o.reload={id:x,t:0,press:null,end:Ud(p,0,"normal",e)},i[x].boost=!1,r.push({type:"reloadStart",id:x})}function u(){let{id:x,press:p}=o.reload,g=n[x],_=i[x],S=Math.max(0,g.mag-_.mag);if(g.infiniteReserve>0)_.mag+=S;else{let M=Math.min(S,_.reserve);_.mag+=M,_.reserve-=M}_.boost=p==="perfect",o.reload=null,r.push({type:"reloadDone",id:x,result:p||"normal"})}function d(x){x===o.slot||!t[x]||(o.reload=null,o.slot=x,o.switching=n[t[x]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[x]}))}function m(x){let p=t.length;for(let g=1;g<p;g++){let _=(o.slot+x*g+p*p)%p;if(t[_])return d(_)}}return o.current=a,o.canFire=c,o.spreadOf=x=>l(n[a()],x)+i[a()].bloom,o.update=function(p,g,_){r.length=0,(!(_>0)||!Number.isFinite(_))&&(_=0);let S=p.weapon;S==="next"?m(1):S==="prev"?m(-1):(S===1||S===2||S===3)&&d(S-1),o.switching-=_;for(let E of t)E&&(i[E].bloom=Math.max(0,i[E].bloom-n[E].bloomRecover*_));let M=a(),b=n[M],T=i[M];if(p.reload){if(o.reload===null)h()&&f();else if(o.reload.press===null){let E=o.reload,R=Math.max(b.reloadTime,e.minReloadTime);E.press=N0(E.t/R,b),E.end=Ud(b,E.t,E.press,e),r.push({type:"reloadPress",id:M,result:E.press})}}o.reload!==null&&(o.reload.t+=_,o.reload.t>=o.reload.end&&u()),p.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=_,p.fire||(o.dryLatched=!1),c(g)||(o.buffer=0);let v=b.auto>0,y=v?!!p.fire:o.buffer>0,w=1/Math.max(b.rate,e.minRate);for(o.cooldown-=_,y||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-w);y&&c(g)&&o.cooldown<=0;){if(T.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&f();break}if(T.mag--,r.push({type:"shot",id:M,mult:T.boost?b.perfectDamage:1,spread:o.spreadOf(g)}),T.bloom=Math.min(b.bloomMax,T.bloom+b.bloomPerShot),o.cooldown+=w,T.mag===0&&(T.boost=!1),!v){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(x,p)=>{let g=i[x];!g||n[x].infiniteReserve>0||!(p>0)||(g.reserve=Math.max(g.reserve,Math.min(Math.floor(n[x].reserveMax),g.reserve+Math.floor(p))))},o.refill=()=>{for(let x of t)x&&(i[x].reserve=Math.floor(n[x].reserveMax))},o.set=(x,{mag:p,reserve:g}={})=>{i[x]&&(p!==void 0&&(i[x].mag=p),g!==void 0&&(i[x].reserve=g))},o}function U0(n){if(n.grenadeAim||Object.hasOwn(jc,n.state))return null;if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var Wr=[0,0];function Fd(n,e,t,i=le.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,c=l.edge,h=n.tuning.radius+n.coverTuning.gap,f=c.normal;if(c.kind==="low")ci(c,l.t,Wr),s[0]=Wr[0]-f[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=Wr[1]-f[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;ci(c,u<0?0:c.length,Wr);let d=n.coverTuning.endInset+i.blindReach;s[0]=Wr[0]+c.tangent[0]*u*d-f[0]*h,s[1]=i.muzzleUp,s[2]=Wr[1]+c.tangent[1]*u*d-f[1]*h}return s}let r=i.muzzleRight*tr(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!sa(n.boxes,s,0)));l-=.25);return s}function gw(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function kd(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let f=-l-Math.sqrt(h);return f>=0&&f<=s?f:1/0}function xw(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],f=n[2]-t[2],u=o*o+a*a+l*l,d=o*c+a*h+l*f,m=u>1e-12?Math.max(0,Math.min(1,d/u)):0,x=c-o*m,p=h-a*m,g=f-l*m;if(x*x+p*p+g*g<=s*s)return 0;let _=Math.min(kd(n,e,t,s,r),kd(n,e,i,s,r));if(u>1e-12){let S=o*e[0]+a*e[1]+l*e[2],M=e[0]*c+e[1]*h+e[2]*f,b=c*c+h*h+f*f,T=u-S*S;if(T>1e-12*u){let v=u*M-d*S,y=u*b-d*d-s*s*u,w=v*v-T*y;if(w>=0){let E=(-v-Math.sqrt(w))/T,R=d+E*S;E>=0&&E<=r&&R>0&&R<u&&E<_&&(_=E)}}}return _}function Dn(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,c=-1,h=!1;for(let f=0;f<i.length;f++){if(f===r)continue;let u=gw(n,e,i[f],o);u<=o&&u!==1/0&&(o=u,a="world",c=f,l=null,h=!0)}for(let f of s){if(!f.alive)continue;let{head:u,body:d}=f.shapes,m=kd(n,e,u.c,u.r,o);m<=o&&m!==1/0&&(o=m,a="head",l=f,c=-1,h=!0);let x=xw(n,e,d.a,d.b,d.r,o);x<=o&&x!==1/0&&(o=x,a="body",l=f,c=-1,h=!0)}return h?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function ih(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,c=l===0?1:0,h=n[1]*0-n[2]*c,f=n[2]*l-n[0]*0,u=n[0]*c-n[1]*l,d=Math.hypot(h,f,u);h/=d,f/=d,u/=d;let m=n[1]*u-n[2]*f,x=n[2]*h-n[0]*u,p=n[0]*f-n[1]*h,g=Math.cos(a)*o,_=Math.sin(a)*o;return i[0]=n[0]*r+h*g+m*_,i[1]=n[1]*r+f*g+x*_,i[2]=n[2]*r+u*g+p*_,i}function F0({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let p=ih(e,i,l),g=Dn(n,p,s,r,o,{ignoreBox:a}),_=[g.point[0]-t[0],g.point[1]-t[1],g.point[2]-t[2]],S=Math.hypot(_[0],_[1],_[2]),M=S>1e-9?[_[0]/S,_[1]/S,_[2]/S]:[p[0],p[1],p[2]];return{from:t,dir:M,hit:g}}let h=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),f=Dn(n,e,s+h,r,o,{ignoreBox:a}),u=f.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:f.point,d=[u[0]-t[0],u[1]-t[1],u[2]-t[2]],m=Math.hypot(d[0],d[1],d[2]);m>1e-9?(d[0]/=m,d[1]/=m,d[2]/=m):(d[0]=e[0],d[1]=e[1],d[2]=e[2]);let x=ih(d,i,l);return{from:t,dir:x,hit:Dn(t,x,s,r,o)}}var Nt=Object.freeze({head:Object.freeze({cy:Jt.neckY+Jt.head.centerY,r:Jt.head.rx}),body:Object.freeze({ay:Jt.ankleHeight,by:Jt.neckY,r:Math.max(...Jt.torso.shirt.map(n=>n[0]))})});function k0(n,e=le.combat.hitPad){let[t,i,s]=n.pos,r=n.shapes;r.head.c[0]=t,r.head.c[1]=i+Nt.head.cy,r.head.c[2]=s,r.head.r=Nt.head.r+e,r.body.r=Nt.body.r+e,r.body.a[0]=t,r.body.a[1]=i+Nt.body.ay,r.body.a[2]=s,r.body.b[0]=t,r.body.b[1]=i+Nt.body.by,r.body.b[2]=s}function B0({id:n,pos:e,yaw:t=0,rail:i=null},s=le.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:Nt.head.r},body:{a:[0,0,0],b:[0,0,0],r:Nt.body.r}}};return k0(r),r}function vw(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function z0(n,e,t=le.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=vw(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}k0(n)}function H0(n,e,t=le.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function Bd(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function G0(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function V0(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var _w=new k(0,0,1);function W0(n,e=()=>le.feedback){let t=new gn,i=(y=1)=>(Math.random()*2-1)*y;function s(y,w,E){let R=new Hs(y,Vt({color:w,rim:0}),E);R.frustumCulled=!1,R.count=E,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let D=0;D<E;D++)R.setMatrixAt(D,t.matrix);return n.add(R),{mesh:R,pool:V0(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new Rr(.5,0),K.playerOrange,8),o=s(new Pt(1,1,1),K.playerOrange,24),a=s(new Rr(.5,0),K.gel,8),l=s(new Pt(1,1,1),K.gel,24),c=s(new Pt(.05,.05,.05),K.cream,48),h=s(new Lo(.5,0),K.gel,96),f=s(new Pt(.16,.2,.012),K.cream,48),u=new k;function d(y,w){t.updateMatrix(),y.mesh.setMatrixAt(w,t.matrix),y.mesh.instanceMatrix.needsUpdate=!0}let m=(y,w)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),d(y,w)},x=(y,w,E,R,D)=>{y.pos[w*3]=E,y.pos[w*3+1]=R,y.pos[w*3+2]=D},p=(y,w,E,R,D)=>{y.vel[w*3]=E,y.vel[w*3+1]=R,y.vel[w*3+2]=D};function g(y,w,E,R,D){let B=E[0]+i(R),I=E[1]+i(R),G=E[2]+i(R),H=Math.hypot(B,I,G)||1;p(y,w,B/H*D*(.5+Math.random()*.5),I/H*D*(.5+Math.random()*.5),G/H*D*(.5+Math.random()*.5))}let _=[];function S(y,w,E,R){_.push({k:y,life:w,shown:new Uint8Array(y.pool.ages.length),step(D){let B=e().gravity,I=y;for(let G=0;G<I.pool.ages.length;G++)if(I.pool.alive(G)){I.vel[G*3+1]-=B*D;for(let H=0;H<3;H++)I.pos[G*3+H]+=I.vel[G*3+H]*D}},draw(D){let B=1-y.pool.ages[D]/w();t.position.set(y.pos[D*3],y.pos[D*3+1],y.pos[D*3+2]),t.scale.setScalar(E(D)*Math.max(0,B)),R?t.rotation.set(y.aux[D*4]+y.pool.ages[D]*7,y.aux[D*4+1]+y.pool.ages[D]*5,y.aux[D*4+2]):t.quaternion.identity(),d(y,D)}})}S(c,()=>e().sparkTime,()=>1,!1),S(h,()=>e().gelTime,y=>.05+h.aux[y*4+3]*.07,!1),S(f,()=>e().receiptTime,()=>1,!0);function M(y,w){_.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let R=1-y.pool.ages[E]/e().flashTime;t.position.set(y.pos[E*3],y.pos[E*3+1],y.pos[E*3+2]),t.scale.setScalar(e()[w]*(.5+.5*Math.max(0,R))),t.rotation.set(y.aux[E*4],y.aux[E*4+1],y.aux[E*4+2]),d(y,E)}})}function b(y,w,E){_.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e()[w],step(){},draw(R){let D=Math.max(0,1-y.pool.ages[R]/e()[w]),B=e()[E]*D,I=y.aux[R*4];t.position.set(y.pos[R*3],y.pos[R*3+1],y.pos[R*3+2]),t.quaternion.setFromUnitVectors(_w,u.set(y.vel[R*3],y.vel[R*3+1],y.vel[R*3+2])),t.scale.set(B,B,I),d(y,R)}})}M(r,"flashSize"),M(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(l,"enemyTracerTime","enemyTracerWidth");let T=(y,w,E)=>{let R=y.pool.spawn();x(y,R,w[0]+E[0]*.1,w[1]+E[1]*.1,w[2]+E[2]*.1),y.aux[R*4]=i(3),y.aux[R*4+1]=i(3),y.aux[R*4+2]=i(3)},v=(y,w,E)=>{let R=E[0]-w[0],D=E[1]-w[1],B=E[2]-w[2],I=Math.hypot(R,D,B);if(!(I>1e-6))return;let G=y.pool.spawn();x(y,G,w[0]+R/2,w[1]+D/2,w[2]+B/2),p(y,G,R/I,D/I,B/I),y.aux[G*4]=I};return{flash(y,w){T(r,y,w)},tracer(y,w){v(o,y,w)},enemyFlash(y,w){T(a,y,w)},enemyTracer(y,w){v(l,y,w)},spark(y,w){for(let E=0;E<e().sparkCount;E++){let R=c.pool.spawn();x(c,R,y[0],y[1],y[2]),g(c,R,w,.9,3)}},gel(y,w,E=e().gelCount){for(let R=0;R<E;R++){let D=h.pool.spawn();x(h,D,y[0],y[1],y[2]),g(h,D,w,1.2,e().gelSpeed),h.aux[D*4+3]=Math.random()}},receipts(y,w=e().receiptCount){for(let E=0;E<w;E++){let R=f.pool.spawn();x(f,R,y[0],y[1],y[2]),g(f,R,[0,1,0],1.5,e().gelSpeed),f.aux[R*4]=i(3),f.aux[R*4+1]=i(3),f.aux[R*4+2]=i(3)}},clear(){for(let y of _){y.k.pool.clear();for(let w=0;w<y.shown.length;w++)y.shown[w]&&(m(y.k,w),y.shown[w]=0)}},update(y){if(y>0)for(let w of _){w.step(y);let{pool:E}=w.k;E.update(y,w.life);for(let R=0;R<E.ages.length;R++)E.alive(R)?(w.draw(R),w.shown[R]=1):w.shown[R]&&(m(w.k,R),w.shown[R]=0)}}}}function yw(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var Mw=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),bw=n=>n<0?0:n>1?1:n;function X0({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:f="",bark:u=null,banner:d=null,weapons:m=le.weapons,combat:x=le.combat,feedback:p=le.feedback}){let g=n.current(),_=m[g],S=n.ammo[g],M=n.reload,b=s==="pad"?"RB":"R",T={show:!1,marker:0,good:[_.goodStart,_.goodEnd],perfect:[_.perfectStart,_.perfectEnd],flash:c,prompt:""};if(M){let R=Math.max(_.reloadTime,x.minReloadTime);T={...T,show:!0,marker:bw(M.t/R),prompt:M.press===null?`${b} again on the bright zone`:""}}else S.mag<=0&&(T.prompt=`${b} to reload`);let v=S.mag<=Math.max(0,p.lowAmmoFrac)*_.mag,y=_.infiniteReserve<=0&&S.reserve<=0,w={show:!1,text:"",kind:""};!M&&v&&!d&&(w.show=!0,y&&S.mag<=0?(w.text="NO AMMO",w.kind="none"):y?(w.text="LOW AMMO",w.kind="low"):S.mag<=0?(w.text=`EMPTY \u2014 RELOAD  ${b}`,w.kind="empty"):(w.text=`RELOAD  ${b}`,w.kind="low"));let E=e==="aim";return{weapon:nh[g].name,mag:S.mag,reserve:_.infiniteReserve>0?"\u221E":S.reserve,reticle:{show:E||!!t||i,gap:p.reticleMinGap+yw(r,o,a),opacity:i&&!E?p.coverReticleOpacity:1},reload:T,alert:w,hit:{show:!!l,kind:l||null},faceShow:!!h&&!d&&!h.downed.show,face:h,objective:f,bark:u,banner:d}}function Y0(n=document.body){let e=(N,W,F,fe)=>{let ge=document.createElement(N);return W&&(ge.className=W),fe!==void 0&&(ge.textContent=fe),F&&F.appendChild(ge),ge},t=e("div","",n);t.id="cr-hud";let i={};for(let N of["top","right","bottom","left"])i[N]=e("div",`cr-edge cr-edge-${N}`,t);let s="http://www.w3.org/2000/svg",r=(N,W,F)=>{let fe=document.createElementNS(s,N);for(let ge of Object.keys(W))fe.setAttribute(ge,W[ge]);return F&&F.appendChild(fe),fe},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),f=e("div","cr-banner",t),u=e("div","cr-banner-title",f),d=e("div","cr-banner-hint",f),m=e("div","cr-objective",t),x=e("div","cr-bark",t),p=e("span","cr-bark-who",x),g=e("span","cr-bark-text",x),_=e("div","cr-weapon",t),S=e("div","cr-weapon-name",_),M=e("div","cr-ammo",_),b=e("div","cr-prompt",_),T=e("div","cr-reload",_),v=e("div","cr-zone cr-zone-good",T),y=e("div","cr-zone cr-zone-perfect",T),w=e("div","cr-marker",T),E=e("div","cr-result",_),R=e("div","cr-alert",t),D=e("div","cr-reticle",t),B=["up","down","left","right"].map(N=>e("div",`cr-arm cr-arm-${N}`,D)),I=e("div","cr-hit",t);e("i","cr-hit-a",I),e("i","cr-hit-b",I),e("i","cr-hit-ring",I);let G={},H=(N,W,F)=>{G[N]!==W&&(G[N]=W,F(W))},Y=N=>`${(N*100).toFixed(1)}%`,ae=(N,[W,F])=>{N.style.left=Y(W),N.style.width=Y(Math.max(0,F-W))};return{render(N){H("weapon",N.weapon,F=>{S.textContent=F}),H("ammo",`${N.mag}|${N.reserve}`,()=>{M.textContent=`${N.mag} / ${N.reserve}`}),H("prompt",N.reload.prompt,F=>{b.textContent=F}),H("reload.show",N.reload.show,F=>{T.hidden=!F}),H("good",`${N.reload.good}`,()=>ae(v,N.reload.good)),H("perfect",`${N.reload.perfect}`,()=>ae(y,N.reload.perfect)),H("marker",Math.round(N.reload.marker*500),()=>{w.style.left=Y(N.reload.marker)}),H("flash",N.reload.flash,F=>{E.textContent=F&&Mw[F]||"",E.dataset.kind=F||""}),H("alert",N.alert.show?`${N.alert.kind}|${N.alert.text}`:"",()=>{R.hidden=!N.alert.show,R.textContent=N.alert.text,R.dataset.kind=N.alert.kind}),H("ret.show",N.reticle.show,F=>{D.hidden=!F}),H("ret.op",Math.round(N.reticle.opacity*100),()=>{D.style.opacity=N.reticle.opacity.toFixed(2)}),H("ret.gap",Math.round(N.reticle.gap),F=>{B.forEach(fe=>fe.style.setProperty("--gap",`${F}px`))});let W=N.face;if(H("face.show",!!N.faceShow,F=>{o.hidden=!F}),W){H("face.op",Math.round(W.face.opacity*100),()=>{o.style.opacity=W.face.opacity.toFixed(2)}),H("face.frown",Math.round(W.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*W.face.frown).toFixed(1)} 70 72`)}),H("face.fill",Math.round(W.face.fill*50),()=>{let F=92*W.face.fill;c.setAttribute("y",(96-F).toFixed(1)),c.setAttribute("height",F.toFixed(1))});for(let F of Object.keys(i))H(`edge.${F}`,Math.round(W.edges[F]*50),()=>{i[F].style.opacity=W.edges[F].toFixed(2)})}H("banner",N.banner?`${N.banner.title}|${N.banner.hint}`:"",F=>{f.hidden=!N.banner,N.banner&&(u.textContent=N.banner.title,d.textContent=N.banner.hint)}),H("objective",N.objective||"",F=>{m.textContent=F,m.hidden=!F}),H("bark",N.bark?`${N.bark.speaker}|${N.bark.text}`:"",()=>{x.hidden=!N.bark,N.bark&&(p.textContent=N.bark.speaker,g.textContent=N.bark.text)}),H("hit",N.hit.show?N.hit.kind:"",F=>{I.hidden=!F,I.dataset.kind=F})}}}function q0(n){let e=xs(Jt),t=vs(e),i=new Mt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",c=0;s&&t.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function f(u){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let d=n.pos[0]-o,m=n.pos[2]-a;s&&d*d+m*m>1e-8&&(r=Math.atan2(d,m)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let x=le.feedback;if(l==="burst"){c+=u;let p=x.dummyBurstTime>0?Math.min(c/x.dummyBurstTime,1):1;h(1+.2*p),p>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let p=x.dummyRespawnPop>0?Math.min(c/x.dummyRespawnPop,1):1;h(p),p>=1&&(l="live")}l!=="gone"&&(t.update(s?u*Math.min(Math.max(le.dummy.railSpeed/ms,.3),3):u),e.update(u))}return{group:i,update:f,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var $0="#f3efe6";function Z0(n){for(let e of Object.values(n))e&&typeof e=="object"&&Z0(e);return Object.freeze(n)}var K0=Z0({...structuredClone(Jt),name:"doc-placeholder",colors:{...Jt.colors,hair:K.teal,shirt:$0,collar:$0},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Jt.face,brow:"uni",fixedSmile:0}});function rh(n){return Mn(n.map(([e,t,i,s,r,o])=>new Pt(e,t,i).translate(s,r,o)),!1)}function ma(n,e,t){let i=new mt(ai(e),Vt({color:t}));return An(i),n.add(i),i}function Sw(){let n=new Mt;return n.name="rifle",ma(n,rh([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),K.playerOrange),ma(n,rh([[.05,.12,.06,0,-.07,0]]),K.ink),ma(n,new xn(.055,.055,.03,12).translate(0,-.035,.28),K.cream),n}function ww(){let n=new Mt;return n.name="pistol",ma(n,rh([[.045,.06,.25,0,.04,.075]]),K.playerOrange),ma(n,rh([[.04,.1,.05,0,-.04,0]]),K.ink),n}var Tw={regret:[0,.06,.45],pistol:[0,.04,.2]},Ew=new k(0,0,1),T3=new k,sh=new k;function J0(){let n=new Mt;n.name="gun";let e={regret:Sw(),pistol:ww()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new k,s=new k(0,0,1),r=1/0;function o(c){if(!(!e[c]||c===t)){t=c;for(let h of Object.keys(e))e[h].visible=h===c}}function a(c,h){i.set(c[0],c[1],c[2]),s.set(h[0],h[1],h[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(Ew,s),l()}function l(){let c=le.feedback,h=Math.max(c.gunSquashTime,1e-6),f=r>=0&&r<h?Math.sin(Math.PI*r/h):0,u=c.gunSquash*f;n.scale.set(1+u/2,1+u/2,1-u),n.position.copy(i).addScaledVector(s,-c.gunKick*f)}return{group:n,setWeapon:o,place:a,shot(){r=0,l()},update(c){r+=c>0?c:0,l()},tip(c=[0,0,0]){let h=Tw[t];return n.updateMatrix(),sh.set(h[0],h[1],h[2]).applyMatrix4(n.matrix),c[0]=sh.x,c[1]=sh.y,c[2]=sh.z,c}}}var ah=Math.PI*2,wi=(n,e,t)=>n<e?e:n>t?t:n,Aw=n=>n-ah*Math.round(n/ah),eg=.001,zd=.5;function Rw(n,e=n.tuning||le.move){let t=n.state,i=n.speed();if(t==="downed")return{name:"crawl",rate:wi(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:Et.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:wi(i/ms,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:wi(i/ms,e.runRateMin,e.runRateMax)};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:qi(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:wi(i/ms,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||le.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":tr(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:wi(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:Et.vault.duration/Math.max((n.coverTuning||le.cover).vaultTime,eg)}:{name:"idle",rate:1}}function Cw(n){let e=n.state==="cover"||n.state==="coverSlide"?qi(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?wi(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?wi(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var Pw=(n,e)=>4*e*n*(1-n),Iw=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function Lw(n){if(n<=.08)return 0;if(n>=.9)return ah;let e=(n-.08)/.82;return ah*e*e*(3-2*e)}var j0=.95,Q0=.6,$i=new k,Si=[0,0,1],oh=[0,0,0];function tg(n,e=K0){let t=xs(e),i=vs(t),s=new Mt;s.name="player";let r=new Mt;r.position.y=zd,t.root.position.y=-zd,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=J0();s.add(l.group);let c=1/0,h=t.root.getObjectByName("head"),f=new k,u=!0;function d(w,E,R){h.getWorldPosition(f),f.y+=t.spec.head.centerY;let D=Math.hypot(w[0]-f.x,w[1]-f.y,w[2]-f.z);return u=e0(D,u,E,R),h.visible=u,u}let m=0,x=0,p=0,g="",_=-1,S=n.slams||0,M=1/0;function b(w,E,R){let D=n.pos,B=n.prevPos,I=n.coverTuning||le.cover,G=Cw(n);m=I.popTime>0?Math.max(G,m+wi(G-m,-E/I.popTime,E/I.popTime)):G;let H=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?wi(n.cover.blind||0,0,1):0;if(G>0||H>0){let Z=qi(n);x=Z.normal[0],p=Z.normal[1]}let Y=m*I.lowDrawBack+H*I.blindDrawBack;s.position.set(B[0]+(D[0]-B[0])*w+x*Y,B[1]+(D[1]-B[1])*w,B[2]+(D[2]-B[2])*w+p*Y),s.rotation.y=n.prevFacing+Aw(n.facing-n.prevFacing)*w;let ae=Rw(n);(ae.name!==g||n.entries!==_)&&(i.play(ae.name,ae.name==="roll"?{fade:.05}:void 0),g=ae.name,_=n.entries),i.update(E*ae.rate,ae.name==="crawl"?E:void 0),t.update(E);let N=le.feedback,W=Math.max(N.gunSquashTime,1e-6);c=R&&R.shot?E:c+E;let F=c<W?N.bodyKick*Math.sin(Math.PI*c/W):0;r.rotation.x=(n.state==="roll"?Lw(n.stateTime/n.tuning.rollTime):0)-F,(n.slams||0)!==S?(S=n.slams||0,M=0):M+=E;let fe=n.state==="vault"?Pw(wi(n.stateTime/Math.max(I.vaultTime,eg),0,1),I.vaultHop):0,ge=Iw(M,I.slamSquash,I.slamSquashTime);r.scale.set(1+ge/2,1-ge,1+ge/2),r.position.y=zd*(1-ge)+fe,T(ae.name,E,R)}function T(w,E,R){if(s.updateMatrixWorld(!0),(w==="coverBlindTallL"?a.L:a.R).getWorldPosition($i),s.worldToLocal($i),R&&R.stance&&w==="coverBlindLow")Si[0]=0,Si[1]=Math.sin(j0),Si[2]=Math.cos(j0);else if(R&&R.stance&&R.dir){let B=Math.cos(s.rotation.y),I=Math.sin(s.rotation.y);Si[0]=R.dir[0]*B-R.dir[2]*I,Si[1]=R.dir[1],Si[2]=R.dir[0]*I+R.dir[2]*B}else Si[0]=0,Si[1]=-Math.sin(Q0),Si[2]=Math.cos(Q0);R&&R.weapon&&l.setWeapon(R.weapon),l.place([$i.x,$i.y,$i.z],Si),R&&R.shot&&l.shot(),l.update(E),l.group.visible=n.state!=="roll"&&n.state!=="downed"}function v(w=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(oh),$i.set(oh[0],oh[1],oh[2]).applyMatrix4(s.matrixWorld),w[0]=$i.x,w[1]=$i.y,w[2]=$i.z,w}function y(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:b,dispose:y,rig:t,anim:i,fadeHeadFor:d,gun:l,gunTip:v}}var ch=new Set(["telegraph","burst"]),lh=(n,e,t)=>n<e?e:n>t?t:n,Dw=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),Nw=n=>n.point&&n.point.kind==="tall"?"tall":"low";function Ow(n){let e=Nw(n)==="tall";switch(n.state){case"run":return"run";case"flinch":return"flinch";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=li(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function Uw(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return li(-n.point.normal[0],-n.point.normal[1]);if(ch.has(n.state))return li(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return li(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function Fw(n){return n.state==="dead"||!n.alive?"dead":ch.has(n.state)?"angry":n.state==="flinch"?"scared":"smug"}var sg=.03,Hd=[0,.06,.32];function kw(){let n=new Mt;n.name="blaster";let t=Mn([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new Pt(r,o,a).translate(l,c,h)),!1),i=new mt(ai(t),Vt({color:K.glorpPurple}));An(i),n.add(i);let s=new mt(new vn(sg,10,8),new Fi({color:K.gel}));return s.name="emitter",s.position.set(Hd[0],Hd[1],Hd[2]),n.add(s),{group:n,emitter:s}}var Bw=new k(0,0,1),Jn=new k,Cs=new k,ng=.6,ig=.95;function rg(n){let e=xs(Jt),t=vs(e),i=new Mt;i.name=`associate-${n.id}`,i.add(e.root),i.add(e.shadow);let s=e.root.getObjectByName("body").children[2],r=kw();i.add(r.group);let o="",a="",l=0,c=n.yaw,h="live",f=0,u=!1,d=0,m=0,x=0;function p(){h="live",f=0,l=0,c=n.yaw,u=!1,d=0,i.visible=!0,i.scale.setScalar(1),o="",a="",r.emitter.scale.setScalar(1)}function g(S,M){let b=le.feedback,T=le.cover,v=le.associate;if(h==="burst"){f+=M;let N=b.dummyBurstTime>0?Math.min(f/b.dummyBurstTime,1):1;i.scale.setScalar(1+.2*N),N>=1&&(h="gone",i.visible=!1)}if(h==="gone")return;let y=h==="burst",w=n.pos,E=n.prevPos,R=!y&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",D=R?lh(1-Math.max(n.pop,n.blind),0,1):0;l=T.popTime>0?Math.max(D,l+lh(D-l,-M/T.popTime,M/T.popTime)):D;let B=R?lh(n.blind,0,1):0;R&&(m=n.point.normal[0],x=n.point.normal[1]);let I=l*T.lowDrawBack+B*T.blindDrawBack;i.position.set(E[0]+(w[0]-E[0])*S+m*I,E[1]+(w[1]-E[1])*S,E[2]+(w[2]-E[2])*S+x*I);let G=n.state==="run"||ch.has(n.state)?n.prevYaw+Dw(n.yaw-n.prevYaw)*S:Uw(n);if(c=rn(c,G,v.turnRate*1.5*M),i.rotation.y=c,y)return;let H=Ow(n);H!==o&&(t.play(H,H==="flinch"?void 0:{fade:.1}),o=H);let Y=H==="run"?lh(v.runSpeed/ms,.5,3):1;t.update(M*Y),e.update(M);let ae=Fw(n);ae!==a&&(e.face.setExpression(ae),a=ae),_(H,M)}function _(S,M){i.updateMatrixWorld(!0),s.getWorldPosition(Jn);let b=Jn.x,T=Jn.y,v=Jn.z;i.worldToLocal(Jn);let y=Jn.x,w=Jn.y,E=Jn.z;if(ch.has(n.state)){let R=Math.cos(i.rotation.y),D=Math.sin(i.rotation.y),B=n.aim[0]-b,I=n.aim[2]-v;Cs.set(B*R-I*D,n.aim[1]-T,B*D+I*R)}else S==="coverBlindLow"?Cs.set(0,Math.sin(ig),Math.cos(ig)):n.state==="suppress"?Cs.set(0,.05,1):Cs.set(0,-Math.sin(ng),Math.cos(ng));if(Cs.lengthSq()<1e-12&&Cs.set(0,0,1),Cs.normalize(),r.group.position.set(y,w,E),r.group.quaternion.setFromUnitVectors(Bw,Cs),u){d+=M;let R=.5+.5*Math.sin(d*2*Math.PI*8),D=le.feedback.glintSize/sg;r.emitter.scale.setScalar(1+(D-1)*R)}else r.emitter.scale.setScalar(1)}return{group:i,update:g,reset:p,death(){h==="live"&&(h="burst",f=0)},glint(S){S&&!u&&(d=0),u=!!S},tip(S=[0,0,0]){return i.updateMatrixWorld(!0),r.emitter.getWorldPosition(Jn),S[0]=Jn.x,S[1]=Jn.y,S[2]=Jn.z,S},rig:e,anim:t,blaster:r}}function og(n=le.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var zw=new Set(["cover","coverSlide","coverSwap"]),Hw=[],Gw=Vd(),Vw=Vd(),hh=[null];function Vd(){return{alive:!0,shapes:{head:{c:[0,0,0],r:Nt.head.r},body:{a:[0,0,0],b:[0,0,0],r:Nt.body.r}}}}function ag(n){return zw.has(n.state)?qi(n):null}function Gd(n,e,t,i,s){let r=n.shapes;return r.head.r=Nt.head.r,r.body.r=Nt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function uh(n,e=Vd(),t=le.combat){let i=ag(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?Gd(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):Gd(e,n.pos,Nt.head.cy,Nt.body.ay,Nt.body.by)}function lg(n,e,t,i,s,r=le.combat){let o=ag(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Dn(n,e,t,i,Hw);if(!a)return hh[0]=uh(s,Gw,r),Dn(n,e,t,i,hh);let l=Nt.body.by;return hh[0]=Gd(Vw,s.pos,Nt.head.cy,l-r.shoulderDrop,l),Dn(n,e,t,i,hh)}var cg=1.49,hg=.2;function ug(n,{spacing:e,cornerZone:t}){e=Math.max(hg,Number.isFinite(e)?e:hg);let i={cornerZone:t},s=[],r=(o,a,l)=>{let c=ci(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,As(o,c,i))}r(o,o.length,As(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function Ww(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function dh(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Dn(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function fh(n,e,t,i=le){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:cg,n.pos[1]],r=Ww(n,i.associate.popShift),o=[r[0],cg,r[1]];return{protected:!dh(t,s,e),canShoot:dh(t,o,e)}}var dg=.9;function ga(n,e,t,i){return Zn(n,[e[0],dg,e[1]],[t[0],dg,t[1]],i)===1}var xa=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function fg(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)xa(s[o],s[a])<=i&&ga(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function Xw(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let p of t)h[p]=!0;let f=[];for(let p of e)a[p]=xa(i,r[p]),f.push(p);let u=p=>a[p]+xa(r[p],s),d=-1,m=1/0;for(;f.length;){let p=0;for(let _=1;_<f.length;_++){let S=f[_],M=f[p],b=u(S),T=u(M);(b<T-1e-12||Math.abs(b-T)<=1e-12&&S<M)&&(p=_)}let g=f.splice(p,1)[0];if(!c[g]){if(u(g)>=m)break;if(c[g]=!0,h[g]){let _=a[g]+xa(r[g],s);(_<m-1e-12||Math.abs(_-m)<=1e-12&&g<d)&&(d=g,m=_)}for(let _ of o[g]){if(c[_])continue;let S=a[g]+xa(r[g],r[_]);S<a[_]-1e-12&&(a[_]=S,l[_]=g,f.push(_))}}}if(d<0)return null;let x=[];for(let p=d;p>=0;p=l[p])x.push(p);return x.reverse()}function Wd(n,e,t,i,s){if(ga(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((u,d)=>{ga(e,t,u,s)&&o.push(d),ga(e,u,i,s)&&a.push(d)}),!o.length||!a.length)return null;let l=Xw(n,o,a,t,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],f=t;for(let u=0;u<c.length;u++){let d=c[u+1];d&&ga(e,f,d,s)||(h.push([c[u][0],c[u][1]]),f=c[u])}return h}var hP=Math.PI/180,pg=.3,Xd=1e-6,Yw=64,qw=4;var $w=(n,e,t)=>Math.max(e,Math.min(t,n));var nr=[0,0,0];function Zw(n,e){let t=null,i=1/0;for(let a of n){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),f=Math.hypot(l,c,h);f<i&&(i=f,t=a)}if(nr[0]=nr[1]=nr[2]=0,!t)return nr[1]=1,nr;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=t.min[a]-e[a],c=e[a]-t.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return nr[s]=o,nr}var Yd={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ti=[0,0,0];function Kw(n,e,t,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=n.pos,l=n.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=$w(Math.ceil(c/r),1,Yw),f=e/h;for(let u=0;u<h;u++){let d=f;for(let m=0;m<=qw&&d>0;m++){Ti[0]=a[0]+l[0]*d,Ti[1]=a[1]+l[1]*d-.5*o*d*d,Ti[2]=a[2]+l[2]*d;let x=Zn(t,a,Ti,r);if(x>=1){a[0]=Ti[0],a[1]=Ti[1],a[2]=Ti[2],l[1]-=o*d;break}a[0]+=(Ti[0]-a[0])*x,a[1]+=(Ti[1]-a[1])*x,a[2]+=(Ti[2]-a[2])*x,l[1]-=o*d*x;let p=Zw(t,a),g=l[0]*p[0]+l[1]*p[1]+l[2]*p[2];if(g<0){let _=l[0]-p[0]*g,S=l[1]-p[1]*g,M=l[2]-p[2]*g;l[0]=_*i.friction-p[0]*g*i.restitution,l[1]=S*i.friction-p[1]*g*i.restitution,l[2]=M*i.friction-p[2]*g*i.restitution,-g>=pg&&(s.clank=!0),p[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-p[0]*r,s.upPos[1]=a[1]-p[1]*r,s.upPos[2]=a[2]-p[2]*r)}if(a[0]+=p[0]*Xd,a[1]+=p[1]*Xd,a[2]+=p[2]*Xd,p[1]>.7&&Math.hypot(l[0],l[1],l[2])<pg){l[0]=l[1]=l[2]=0,n.resting=!0,s.rested=!0;return}d*=1-x}}}function Jw(n,e,t,i=le.grenade){return Kw(n,e,t,i,Yd),Yd.clank?"clank":Yd.rested?"rest":null}function mg(n,e=le.grenade){return n>=0?n<=e.killRadius?e.killDamage:n>=e.radius?0:e.damage*(1-n/e.radius):0}function gg(n=le.grenade){let e=[];return{live:e,throw(t,i){let s={pos:[t[0],t[1],t[2]],vel:[i[0],i[1],i[2]],prevPos:[t[0],t[1],t[2]],resting:!1,fuse:n.fuse};return e.push(s),s},step(t,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=t,Jw(o,t,i,n)==="clank"&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.fuse<=1e-9&&(s.push({type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}var jw=.25,mh=new Set(["executed","unused","dead"]),Qw=new Set(["cover","suppress","reload"]),Ps={r:.25,y:.25,back:.2,front:.6},eT=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),tT=new Set(["telegraph","burst","suppress"]),Zd=n=>Math.max(0,Math.min(1,n)),Ei=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]),xg=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function Kd(n,e=le.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,n.helper=null,n.helping=null,n.diveDir[0]=n.diveDir[1]=0,n.divePoint=null,n.claimed=!1,n.diedAt=-1/0,n.wasDowned=!1,Xr(n),n}function Jd(n){return n.alive=!1,n.state="unused",n.stateT=0,n.health=0,n.pos[1]=n.prevPos[1]=-50,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.helping=null,n.claimed=!1,n.wasDowned=!1,Xr(n),n}function jd(n,e,t){let i=(t.tuning||le).associate;for(let r=0;r<3;r++)n.pos[r]=e[r],n.prevPos[r]=e[r];let s=t.player;return n.yaw=n.prevYaw=s?Math.atan2(s.pos[0]-e[0],s.pos[2]-e[2]):Math.PI,n.state="spawn",n.stateT=0,n.health=i.health,n.alive=!0,n.claimed=!1,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckCount=0,n.helper=null,n.helping=null,n.wasDowned=!1,n.diedAt=-1/0,n.divePoint=null,Xr(n),n}function Qd({id:n,pos:e},t=le.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:Nt.head.r},body:{a:[0,0,0],b:[0,0,0],r:Nt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return Kd(i,t)}function Xr(n,e=le.combat){let[t,i,s]=n.pos,r=n.shapes;if(n.state==="downed"){let a=Math.sin(n.yaw),l=Math.cos(n.yaw);return r.body.r=Ps.r,r.head.r=Nt.head.r,r.body.a[0]=t-a*Ps.back,r.body.a[1]=i+Ps.y,r.body.a[2]=s-l*Ps.back,r.body.b[0]=t+a*Ps.front,r.body.b[1]=i+Ps.y,r.body.b[2]=s+l*Ps.front,r.head.c[0]=r.body.b[0],r.head.c[1]=i+Ps.y,r.head.c[2]=r.body.b[2],r}let o=eT.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.r=Nt.head.r+e.hitPad,r.body.r=Nt.body.r+e.hitPad,r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead-e.hitPad,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+Nt.head.cy,r.body.a[1]=i+Nt.body.ay,r.body.b[1]=i+Nt.body.by),r}function Qt(n,e){n.state=e,n.stateT=0}function Ai(n,e,t){e=Zd(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var Is=(n,e)=>e>0?n/e:1;function va(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=rn(n.yaw,Math.atan2(r,o),i.turnRate*s))}function vg(n,e,t){let i=n.point.normal;n.yaw=rn(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Ri(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function ef(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function gh(n,e){let t=e.tuning||le,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=ef(n,e),l=n.point,c=Ei(l?l.pos:[n.pos[0],n.pos[2]],o),h=n.role,f=!!l&&(n.mustMove||h!=="hold"),u=[n.pos[0],n.pos[2]],d=Math.cos(s.flankAngle*Math.PI/180),m=Math.cos(s.flankMaxAngle*Math.PI/180),x=0,p=0;if(r.coverNormal)x=-r.coverNormal[0],p=-r.coverNormal[1];else{let b=0;for(let T of e.others||[])T.alive&&(x+=T.pos[0],p+=T.pos[2],b++);b?(x=x/b-o[0],p=p/b-o[1]):(x=n.pos[0]-o[0],p=n.pos[2]-o[1])}let g=Math.hypot(x,p)||1;x/=g,p/=g;let _=[];for(let[b,T]of e.reserved)T!==n.id&&_.push(e.points[b].pos);let S=null,M=-1/0;for(let b of e.points){let T=e.reserved.get(b.index);if(T!==void 0&&T!==n.id||f&&b.index===l.index||n.mustMove&&l&&Ei(b.pos,l.pos)<2*i.reserveRadius)continue;let v=Ei(b.pos,o);if(v<i.reserveRadius||v<i.minRange||v>i.maxRange)continue;let y=!1;for(let B of _)if(Ei(B,b.pos)<i.reserveRadius){y=!0;break}if(y)continue;let w=((b.pos[0]-o[0])*x+(b.pos[1]-o[1])*p)/v;if(h==="flank"?w<m:w<0)continue;let E=0;if(h==="push"){let B=c-v;if(B<2)continue;E=2*B}else if(h==="flank"){if(!r.coverNormal||w>d)continue;E=10}let R=fh(b,a,e.boxes,t);if(!R.protected||!R.canShoot)continue;let D=-Ei(u,b.pos)-.5*Math.abs(v-i.preferRange)+E;D>M+1e-9&&(M=D,S=b)}return S?{point:S,score:M}:null}function nT(n,e){let t=gh(n,e);return t?t.point:null}function qd(n,e,t){let i=e.tuning||le,s=[n.pos[0],n.pos[2]],r=ef(n,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==n.id)continue;let h=Ei(s,l.pos);h>=a||t&&!fh(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function Zi(n,e,t){Qt(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function Hn(n,e,t){Ri(n,e),Ai(n,0,t),n.blind=0;let i=n.stuckCount>=3?qd(n,e,!1):nT(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point&&Ei(n.point.pos,[n.pos[0],n.pos[2]])<=.5){Zi(n,e,t);return}if(i=qd(n,e,!0)||qd(n,e,!1),!i){Zi(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){_g(n,e,t);return}let s=n.stuckCount>=3?null:Wd(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],Qt(n,"run")}function _g(n,e,t){if(n.role==="revive"){Qt(n,"kneel");return}let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),Zi(n,e,t)}function iT(n,e,t,i){if(n.role==="revive"){let r=bg(n,e);if(!r){Ki(n,e),Hn(n,e,t);return}if(xg(n.pos,r.pos)<=Mg){Qt(n,"kneel");return}}let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,l=o[0]-n.pos[0],c=o[1]-n.pos[2],h=Math.hypot(l,c);if(h<=t.arriveDist){if(a){_g(n,e,t);return}n.pathI++;continue}va(n,o[0],o[1],t,i);let f=Math.min(s,h);if(f<=1e-9)break;let u=_s(e.boxes,n.pos,[l/h*f,0,c/h*f],t.radius,t.height),d=Math.hypot(u.pos[0]-n.pos[0],u.pos[2]-n.pos[2]);if(n.pos[0]=u.pos[0],n.pos[2]=u.pos[2],s-=d,d<f*.5)break;d>=h-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.role==="revive"&&Ki(n,e),n.stuckCount++,Hn(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function tf(n,e,t,i,s){let r=e.player,o=r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let l=0;l<3;l++)n.aim[l]+=(o[l]-n.aim[l])*a}var yg=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function sT(n,e,t,i,s){Ai(n,n.pop-Is(s,t.popTime),t),vg(n,t,s);let r=e.player;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){Hn(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let o=fh(n.point,ef(n,e),e.boxes,e.tuning||le);if(!o.protected||!o.canShoot||Ei(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,Hn(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,Hn(n,e,t);return}if(!(n.stateT<n.wait)){if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){Qt(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}if(e.tokens.request(n.id,e.now,e.tokenCount,i)){Qt(n,"telegraph"),n.shots=0,tf(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&(Qt(n,"suppress"),n.shots=0)}}}function $d(n,e,t,i){Ri(n,e),i&&n.bursts++,Zi(n,e,t)}function rT(n,e,t,i){let s=e.player;if(Ai(n,n.pop+Is(i,t.popTime),t),va(n,s.pos[0],s.pos[2],t,i),tf(n,e,t,i,!1),s.downed||!e.tokens.holds(n.id)){$d(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(Qt(n,"burst"),n.shots=0)}function oT(n,e,t,i){let s=e.player;if(Ai(n,n.pop+Is(i,t.popTime),t),va(n,s.pos[0],s.pos[2],t,i),tf(n,e,t,i,!1),s.downed||!e.tokens.holds(n.id)){$d(n,e,t,!0);return}let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp,r[2]=n.pos[2];let o=yg(n.stateT,t.rate,t.burstTime),a=Math.min(1,s.speed/(e.tuning||le).move.sprint);for(;n.shots<o;){n.shots++;let l=n.aim[0]-r[0],c=n.aim[1]-r[1],h=n.aim[2]-r[2],f=Math.hypot(l,c,h)||1;e.events.push({type:"enemyShot",id:n.id,from:[r[0],r[1],r[2]],dir:[l/f,c/f,h/f],accurate:!0,spread:t.spread+t.moveSpread*a})}n.stateT>=t.burstTime-1e-9&&$d(n,e,t,!0)}function aT(n,e,t,i){let s=e.player;if(n.blind=Zd(n.blind+Is(i,t.popTime)),va(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,Zi(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),l=n.muzzle;l[0]=n.pos[0],l[2]=n.pos[2],l[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||le).combat.blindLift:t.muzzleUp);let c=yg(a,t.suppressRate,t.suppressTime);for(;n.shots<c;){n.shots++;let h=s.head[0]-l[0],f=s.head[1]-l[1],u=s.head[2]-l[2],d=Math.hypot(h,f,u)||1;h/=d,f/=d,u/=d;let m=u,x=-h,p=Math.hypot(m,x);p<1e-6&&(m=1,x=0,p=1),m/=p,x/=p;let g=f*x,_=u*m-h*x,S=-f*m,M=2*Math.PI*e.rand(),b=t.suppressMiss*(1+.5*e.rand()),T=Math.cos(M)*b,v=Math.sin(M)*b,y=s.head[0]+m*T+g*v,w=s.head[1]+_*v,E=s.head[2]+x*T+S*v,R=y-l[0],D=w-l[1],B=E-l[2],I=Math.hypot(R,D,B)||1;e.events.push({type:"enemyShot",id:n.id,from:[l[0],l[1],l[2]],dir:[R/I,D/I,B/I],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,Zi(n,e,t))}var Mg=.8;function bg(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);return t&&t.alive&&t.state==="downed"&&t.helper===n.id?t:null}function Ki(n,e){let t=(e.others||[]).find(i=>i.id===n.helping);t&&t.helper===n.id&&(t.helper=null),n.helping=null,n.role="hold"}function Sg(n,e,t){let i=(t.tuning||le).associate;Ri(n,t),Ai(n,0,i),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.point=null,n.role="revive",n.helping=e.id,e.helper=n.id,n.mustMove=!1;let s=n.pos[0]-e.pos[0],r=n.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=Mg){Qt(n,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];n.path=Wd(t.graph,t.boxes,[n.pos[0],n.pos[2]],a,i.radius)||[a],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],Qt(n,"run")}function lT(n,e,t,i){let s=bg(n,e);if(!s){Ki(n,e),Hn(n,e,t);return}va(n,s.pos[0],s.pos[2],t,i),!(n.stateT<t.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,t.reviveHealth*t.health),s.role="hold",s.mustMove=!1,s.bursts=0,Qt(s,"seek"),e.events.push({type:"cloneRevive",id:n.id,target:s.id}),n.helping=null,n.role="hold",Hn(n,e,t))}function cT(n,e,t,i){if(n.stateT>=t.bleedTime-1e-9){n.health=0,ph(n,e,"bleed");return}if(n.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===n||!c.alive||!Qw.has(c.state))continue;let h=xg(n.pos,c.pos);h<o&&(o=h,s=c.pos[0]-n.pos[0],r=c.pos[2]-n.pos[2])}if(o===1/0)s=n.pos[0]-e.player.pos[0],r=n.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),n.yaw=rn(n.yaw,Math.atan2(s,r),t.turnRate*i);let a=t.downedCrawl*i,l=_s(e.boxes,n.pos,[s/o*a,0,r/o*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}function hT(n,e,t){n.point&&e.reserved.get(n.point.index)===n.id&&n.pop<=1e-6&&Ei(n.point.pos,[n.pos[0],n.pos[2]])<=.3?Zi(n,e,t):Hn(n,e,t)}function wg(n,e){return!n.alive||mh.has(n.state)||n.state==="downed"?!1:(n.role==="revive"&&Ki(n,e),Ri(n,e),n.blind=0,Qt(n,"stagger"),!0)}function Tg(n,e,t){if(!n.alive||mh.has(n.state)||n.state==="downed"||n.state==="dive")return!1;n.role==="revive"&&Ki(n,t),Ri(n,t),Ai(n,0,(t.tuning||le).associate),n.blind=0,n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.divePoint=n.point,n.point=null,n.role="hold",n.path=[],n.pathI=0;let i=n.pos[0]-e[0],s=n.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(n.yaw),s=Math.cos(n.yaw)):(i/=r,s/=r),n.diveDir[0]=i,n.diveDir[1]=s,n.yaw=Math.atan2(i,s),Qt(n,"dive"),!0}function uT(n,e,t,i){let s=Math.max(t.diveTime,.001),r=Math.max(n.stateT-i,t.diveReaction),o=Math.min(n.stateT,t.diveReaction+s);if(o>r){let a=t.diveDistance*(o-r)/s,l=_s(e.boxes,n.pos,[n.diveDir[0]*a,0,n.diveDir[1]*a],t.radius,t.height);n.pos[0]=l.pos[0],n.pos[2]=l.pos[2]}n.stateT>=t.diveReaction+s-1e-9&&(n.point=n.divePoint,n.divePoint=null,n.mustMove=!0,Hn(n,e,t))}function Eg(n,e){return!n.alive||mh.has(n.state)||n.state==="dive"?!1:(n.role==="revive"&&Ki(n,e),Ri(n,e),Ai(n,0,(e.tuning||le).associate),n.blind=0,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.wasDowned=n.state==="downed",n.point=null,n.role="hold",n.helper=null,n.mustMove=!1,Qt(n,"executed"),!0)}function Ag(n){return!n.alive||n.state!=="executed"?!1:(Qt(n,n.wasDowned?"downed":"flinch"),n.wasDowned=!1,!0)}function Rg(n,e,t="execute"){return!n.alive||n.state!=="executed"?null:(n.health=0,ph(n,e,t))}function ph(n,e,t){return n.alive=!1,Ri(n,e),n.role==="revive"&&Ki(n,e),n.helper=null,n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.pop=0,n.blind=0,Qt(n,"dead"),e.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]],kind:t}),"kill"}function nf(n,e){return!n.alive||mh.has(n.state)||n.state==="downed"?null:(Ri(n,e),n.role==="revive"&&Ki(n,e),n.point&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),n.point=null,n.health=1,n.pop=0,n.blind=0,n.role="hold",n.helper=null,n.mustMove=!1,Qt(n,"downed"),e.events.push({type:"down",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),e.events.push({type:"bark",id:n.id,key:"cloneDown"}),"down")}function Cg(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,jw);let i=(e.tuning||le).associate,s=e.director||le.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&Hn(n,e,i);break;case"seek":Hn(n,e,i);break;case"run":iT(n,e,i,t);break;case"cover":sT(n,e,i,s,t);break;case"telegraph":rT(n,e,i,t);break;case"burst":oT(n,e,i,t);break;case"suppress":aT(n,e,i,t);break;case"reload":Ai(n,n.pop-Is(t,i.popTime),i),vg(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,Zi(n,e,i));break;case"flinch":Ai(n,n.pop-Is(t,i.popTime),i),n.blind=Zd(n.blind-Is(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?Zi(n,e,i):Hn(n,e,i));break;case"stagger":Ai(n,n.pop-Is(t,i.popTime),i),n.stateT>=i.staggerTime-1e-9&&hT(n,e,i);break;case"dive":uT(n,e,i,t);break;case"kneel":lT(n,e,i,t);break;case"downed":cT(n,e,i,t);break;case"spawn":n.stateT>=(e.tuning||le).pad.riseTime-1e-9&&Hn(n,e,i);break;default:break}}function Pg(n,e,t,i="body"){return!n.alive||!(e>0)||n.state==="executed"||n.state==="unused"?null:n.state==="downed"?(n.health=0,ph(n,t,i)):(n.health-=e,n.health<=0?(i==="body"||i==="tobble")&&t.rand()<(t.tuning||le).associate.downChance?nf(n,t):(n.health=0,ph(n,t,i)):n.role==="revive"?(Ki(n,t),Ri(n,t),Qt(n,"flinch"),"hit"):(tT.has(n.state)&&(Ri(n,t),Qt(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function Ig(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=le.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[f,u]of e)r-u.last>a.requestWindow&&e.delete(f);if(n.size>=o)return!1;let c=null,h=1/0;for(let[f,u]of e)u.first<h&&(c=f,h=u.first);return c!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=le.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=le.director){let o=[];for(let[a,l]of n)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}function Lg(n,e=le){let t=(n.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(t.map(r=>[r.id,new Set]));return{list:t,step(r,o){let a=e.pad,l=[];for(let c of t){if(c.state==="dormant"){if(!o.started||!(o.kills>=a.openAfterKills||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of t)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of t)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return t.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of t)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var Dg=new Set(["cover","coverSlide","coverSwap"]),Ng=new Set(["cover","suppress","reload","flinch"]),dT=new Set(["cover","suppress","reload"]),fT=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),Og=8,pT=1,mT=.1,sf=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function Ug({level:n,boxes:e,edges:t,rand:i,tuning:s=le}){let r=()=>s.associate,o=ug(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=fg(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=Ig(),c=gg(s.grenade),h=Lg(n,s),f=new Map,u=[],d=[],m=n.associates.length,x=n.associates.map(z=>Qd(z,s.associate));for(let z=m;z<Og;z++)x.push(Jd(Qd({id:`r${z+1}`,pos:[0,0,0]},s.associate)));let p=()=>Math.max(m,Math.min(Og,Math.round(s.director.maxEnemies))),g=p(),_=uh({state:"move",pos:[0,0,0],cover:null,scratch:{}}),S={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},M={boxes:e,points:o,graph:a,tokens:l,reserved:f,player:S,now:0,rand:i,tokenCount:0,events:u,tuning:s,director:s.director,others:x,started:!1,aim:void 0},b={enemies:x,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list},T=[0,0],v=!1,y=!1;function w(){f.clear();for(let z of x.slice(0,m)){let j=null,ee=1/0;for(let Te of o){let he=Math.hypot(Te.pos[0]-z.pos[0],Te.pos[1]-z.pos[2]);he<ee&&(ee=he,j=Te)}z.point=j,j&&f.set(j.index,z.id)}}w();let E=(z,j,ee=u,Te=!1)=>ee.push(Te?{type:"bark",id:z,key:j,force:Te}:{type:"bark",id:z,key:j}),R=()=>x.find(z=>z.alive)||x[0];function D(){for(let z of l.held())l.release(z,b.now,s.director)}function B(z){b.started=!0,b.startT=b.now,E(R().id,"lockdown",z)}function I(z){z.diedAt=b.now,b.kills++,h.noteDeath(z.id)}function G(z,j,ee,Te){!b.started&&z.alive&&z.state!=="unused"&&j>0&&B(Te),M.events=Te;let he=Pg(z,j,M,ee);return M.events=u,he==="kill"&&I(z),he}function H(z,j){let ee=S,Te=s.combat;ee.pos[0]=z.pos[0],ee.pos[1]=z.pos[1],ee.pos[2]=z.pos[2];let he=Dg.has(z.state)?qi(z):null;ee.exposed=!!(z.cover&&z.cover.exposed);let X=!!he&&he.kind==="low"&&!ee.exposed;ee.chest[0]=z.pos[0],ee.chest[1]=z.pos[1]+(X?.6:1.2),ee.chest[2]=z.pos[2];let ne=uh(z,_,Te).shapes.head.c;ee.head[0]=ne[0],ee.head[1]=ne[1],ee.head[2]=ne[2],ee.speed=z.speed(),ee.coverNormal=he?he.normal:null,ee.downed=!!j.downed}function Y(z,j){let ee=s.director;if(Dg.has(z.state)?S.exposed||(b.hideT+=j):b.hideT=0,!y||Math.hypot(z.pos[0]-T[0],z.pos[2]-T[1])>ee.stayRadius?(T[0]=z.pos[0],T[1]=z.pos[2],y=!0,b.stayT=0):b.stayT+=j,b.hideT>=ee.pushAfter&&!x.some(he=>he.alive&&he.role==="push")){let he=x.filter(ne=>ne.alive&&ne.role==="hold"&&Ng.has(ne.state)&&!l.holds(ne.id)).sort((ne,pe)=>sf(ne.pos,S.pos)-sf(pe.pos,S.pos)),X=null;for(let ne of he){if(ne.role="push",gh(ne,M)){X=ne;break}ne.role="hold"}X?(E(X.id,"push"),b.hideT=0):b.hideT=Math.max(0,ee.pushAfter-1)}if(b.stayT>=ee.flankAfter&&!x.some(he=>he.alive&&he.role==="flank")){let he=null,X=-1/0;for(let ne of x){if(!ne.alive||ne.role!=="hold"||!Ng.has(ne.state)||l.holds(ne.id))continue;ne.role="flank";let pe=gh(ne,M);ne.role="hold",pe&&pe.score>X&&(X=pe.score,he=ne)}he&&(he.role="flank",E(he.id,"flank")),b.stayT=0}}function ae(){let z=r().reviveRange;for(let j of x){if(!j.alive||j.state!=="downed"||j.helper)continue;let ee=null,Te=1/0;for(let he of x){if(!he.alive||!dT.has(he.state)||he.role!=="hold"||l.holds(he.id))continue;let X=sf(he.pos,j.pos);X<=z&&X<Te&&(Te=X,ee=he)}ee&&(Sg(ee,j,M),E(ee.id,"cloneRevive"))}}function N(){for(let z=0;z<g;z++){let j=x[z];if(!j.claimed&&(j.state==="unused"||j.state==="dead"&&b.now-j.diedAt>=pT-1e-9))return j.claimed=!0,j}return null}function W(){let z=h.step(0,{started:b.started,sinceStart:b.now-b.startT,kills:b.kills,freeSlot:N,now:b.now});for(let j of z){if(u.push(j),j.type==="padOpen"){E(j.id,"padOpen",u,!0);continue}if(j.type!=="padSpawn")continue;let ee=h.list.find(he=>he.id===j.id),Te=x.find(he=>he.id===j.enemyId);jd(Te,ee.pos,M)}}let F=[0,0,0],fe=[0,0,0];function ge(z,j,ee){let Te=s.grenade,he=0;F[0]=z[0],F[1]=z[1]+.3,F[2]=z[2];let X=(pe,xe)=>{let re=Math.hypot(pe[0]-z[0],pe[1]-z[1],pe[2]-z[2]),Ue=mg(re,Te);return Ue>0&&dh(e,F,pe)?xe(Ue):null};for(let pe of x){if(!pe.alive||pe.state==="executed")continue;let xe=pe.shapes.body;fe[0]=pe.pos[0],fe[1]=(xe.a[1]+xe.b[1])/2,fe[2]=pe.pos[2],X(fe,re=>G(pe,re,"blast",u))==="kill"&&he++}fe[0]=j.pos[0],fe[1]=j.pos[1]+(S.chest[1]-j.pos[1]<1?.45:.9),fe[2]=j.pos[2],X(fe,pe=>{let xe=pe*Te.selfDamage,re=ee.damage(xe);return re===null||(u.push({type:"playerHit",id:null,from:[z[0],z[1],z[2]],amount:xe,result:re}),re==="downed"&&(j.state!=="downed"&&j.down(),D())),null});let ne=h.blast(z);for(let pe of ne)u.push({type:"padClosed",id:pe}),E(pe,"padClosed");u.push({type:"explode",pos:[z[0],z[1],z[2]],kills:he,closed:ne})}function Z(z,j,ee){for(let Te of c.step(z,e))Te.type==="explode"?ge(Te.pos,j,ee):u.push(Te)}function _e(){let z=r();for(let j of c.live)if(!(j.fuse>z.diveWarn))for(let ee of x)!ee.alive||ee.state==="downed"||ee.state==="executed"||ee.state==="dive"||j.rolled&&j.rolled.has(ee.id)||Math.hypot(ee.pos[0]-j.pos[0],ee.pos[2]-j.pos[2])>z.diveRadius||((j.rolled||(j.rolled=new Set)).add(ee.id),i()<z.diveChance&&Tg(ee,j.pos,M)&&!j.barked&&(j.barked=!0,E(ee.id,"dive")))}let Ie=z=>{let j=z.point,ee=r();return j.kind==="tall"&&z.pop>0?[j.pos[0]+j.tangent[0]*j.end*ee.popShift*z.pop,j.pos[1]+j.tangent[1]*j.end*ee.popShift*z.pop]:j.pos};function Xe(z){let j=s.associate.radius,ee=s.associate.height,Te=(X,ne,pe)=>{if(X.state==="executed")return;let xe=_s(e,X.pos,[ne,0,pe],j,ee);X.pos[0]=xe.pos[0],X.pos[2]=xe.pos[2]},he=X=>X.state==="executed";for(let X=0;X<x.length;X++){let ne=x[X];if(!ne.alive)continue;for(let Fe=X+1;Fe<x.length;Fe++){let Ye=x[Fe];if(!Ye.alive)continue;let Be=Ye.pos[0]-ne.pos[0],Je=Ye.pos[2]-ne.pos[2],U=Math.hypot(Be,Je);if(U>=2*j)continue;U<1e-6&&(Be=1,Je=0,U=1);let ye=(2*j-U)/2,Ce=he(Ye)?2:he(ne)?0:1,Ze=he(ne)?2:he(Ye)?0:1;Te(ne,-Be/U*ye*Ce,-Je/U*ye*Ce),Te(Ye,Be/U*ye*Ze,Je/U*ye*Ze)}let pe=ne.pos[0]-z.pos[0],xe=ne.pos[2]-z.pos[2],re=Math.hypot(pe,xe),Ue=j+s.move.radius;re<Ue&&(re<1e-6&&(pe=1,xe=0,re=1),Te(ne,pe/re*(Ue-re),xe/re*(Ue-re)))}for(let X of x){if(!X.alive||!X.point||!fT.has(X.state))continue;let ne=Ie(X);if(Math.hypot(X.pos[0]-ne[0],X.pos[2]-ne[1])<=.3)continue;let pe=Math.hypot(ne[0]-z.pos[0],ne[1]-z.pos[2])>=j+s.move.radius-.001;for(let xe of x)xe===X||!xe.alive||!pe||Math.hypot(ne[0]-xe.pos[0],ne[1]-xe.pos[2])<2*j-.001&&(pe=!1);if(pe){X.pos[0]=ne[0],X.pos[2]=ne[1];continue}l.holds(X.id)&&l.release(X.id,b.now,s.director),X.mustMove=!0,X.pop=0,X.blind=0,X.state="seek",X.stateT=0}}function te(z,j){let ee=r(),Te=[0,0,0];for(let he=0;he<u.length;he++){let X=u[he];if(X.type!=="enemyShot")continue;if(X.accurate&&j.downed){u.splice(he--,1);continue}let ne=ih(X.dir,X.spread,i,Te);if(X.accurate){let pe=lg(X.from,ne,ee.range,e,z,s.combat),xe=pe.point;if(pe.kind==="head"||pe.kind==="body"){let re=j.damage(ee.damage);u.push({type:"playerHit",id:X.id,from:X.from,amount:ee.damage,result:re}),re==="downed"&&(z.state!=="downed"&&z.down(),D())}u.push({type:"shotFx",from:X.from,to:xe.slice(),accurate:!0})}else{let pe=Dn(X.from,ne,ee.range,e,[]);u.push({type:"shotFx",from:X.from,to:pe.point,accurate:!1})}}}return b.targets=()=>x,b.freeSlot=N,b.step=(z,j)=>{(!(z>0)||!Number.isFinite(z))&&(z=0),z=Math.min(z,mT),u.length=0;for(let X of d)u.push(X);d.length=0;let{m:ee,health:Te}=j;if(b.now+=z,M.now=b.now,M.aim=j.aim,!b.started&&ee.pos[2]>n.trigger.z&&B(u),M.started=b.started,H(ee,Te),S.downed){D();for(let X of x)X.role!=="revive"&&(X.role="hold");!v&&b.started&&E(R().id,"downed")}else b.started&&!b.clear&&Y(ee,z);v=S.downed,b.started&&(ae(),W()),l.expire(b.now,s.director),M.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,Z(z,ee,Te),_e();let he=u.length;for(let X of x)Cg(X,M,z);for(let X=he;X<u.length;X++)u[X].type==="death"&&I(x.find(ne=>ne.id===u[X].id));te(ee,Te),Xe(ee);for(let X of x)Xr(X,s.combat);return b.started&&!b.clear&&x.every(X=>!X.alive)&&h.allDone()&&(b.clear=!0,u.push({type:"clear"}),E(x[0].id,"clear")),u},b.hurt=(z,j,ee="body")=>G(z,j,ee,d),b.bash=z=>{if(!z.alive||z.state==="executed"||z.state==="unused")return null;let j=G(z,s.melee.bashDamage,"bash",d);return j==="hit"?(wg(z,M),"hit"):j==="kill"?"kill":null},b.beginExecution=z=>Eg(z,M),b.finishExecution=z=>{M.events=d;let j=Rg(z,M,"execute");return M.events=u,j==="kill"&&I(z),j},b.releaseExecution=z=>Ag(z),b.spawnRep=()=>{let z=N();if(!z)return null;let j=h.list[0];return jd(z,j?j.pos:[0,0,0],M)},b.downRep=z=>{M.events=d;let j=nf(z,M);return M.events=u,j==="down"},b.throwGrenade=(z,j)=>c.throw(z,j),b.reset=()=>{l.reset(),c.reset(),h.reset(),g=p(),x.forEach((z,j)=>{Kd(z,s.associate),j>=m&&Jd(z)}),w(),u.length=0,d.length=0,b.started=b.clear=!1,b.now=0,b.startT=0,b.kills=0,b.hideT=b.stayT=0,M.now=0,M.started=!1,M.aim=void 0,v=!1,y=!1;for(let z of x)Xr(z,s.combat)},b}function xh(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=Nd(n),o=Od(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var Fg=n=>Math.max(0,Math.min(1,n));function kg({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=le.feedback}){let a=t?1:e>0?Fg(1-n/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let f=o.hitFlashTime>0?Fg(1-(r-h.t)/o.hitFlashTime):0;if(f<=0)continue;let u=Math.cos(h.angle),d=Math.sin(h.angle);l.top=Math.max(l.top,f*Math.max(0,u)),l.right=Math.max(l.right,f*Math.max(0,d)),l.bottom=Math.max(l.bottom,f*Math.max(0,-u)),l.left=Math.max(l.left,f*Math.max(0,-d))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var Bg=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function zg(n=()=>le.feedback){let e=1/0,t=0,i=null,s={};return{say(r,o=!1){if(!Bg[r]||!o&&e<n().barkGap)return!1;let a=Bg[r],l=(s[r]||0)%a.length;return s[r]=l+1,i=typeof a[l]=="string"?{speaker:"Rep",text:a[l]}:a[l],t=n().barkTime,e=0,!0},tick(r){r>0&&(e+=r,t-=r)},current:()=>t>0&&i?{speaker:i.speaker,text:i.text}:null,reset(){e=1/0,t=0,i=null;for(let r of Object.keys(s))s[r]=0}}}var Hg=4,gT=1.2,Yr=[0,0,0];function xT(){let n=(e,t,i,s,r)=>{let o=new Pt(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new it(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new wt(c,3)),o};return Mn([n(.3,.16,.22,.08,K.cream),n(.34,.07,.26,.195,K.playerOrange)],!1)}function vT(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function Gg({scene:n,effects:e,sfx:t,fight:i,views:s}){let r=new Map(i.enemies.map((g,_)=>[g.id,s[_]])),o=new Map(i.enemies.map(g=>[g.id,g])),a=new Map,l=[],c=new Hs(xT(),Vt({vertexColors:!0,rim:0}),Hg);c.name="pickups",c.frustumCulled=!1,c.count=0,n.add(c);let h=new gn,f=0,u=zg(),d=(g,_)=>Math.sin(xh(g.yaw,g.pos,_));function m(g){let _=null,S=1/0;for(let M of i.enemies){let b=Math.hypot(M.pos[0]-g[0],M.pos[2]-g[2]);b<S&&(S=b,_=M)}return _}function x(g,_){let S=le.feedback,M=le.associate;for(let b of g)if(b.type==="bark")u.say(b.key,!!b.force);else if(b.type==="telegraph"){a.set(b.id,M.popTime+M.telegraphTime);let T=r.get(b.id),v=o.get(b.id);T&&T.glint(!0),v&&t.play("charge",S.chargeVolume,d(_,v.pos))}else if(b.type==="shotFx"){let T=m(b.from),v=T&&r.get(T.id);vT(b,v?v.tip:null,Yr);let y=b.to[0]-Yr[0],w=b.to[1]-Yr[1],E=b.to[2]-Yr[2],R=Math.hypot(y,w,E)||1;e.enemyFlash(Yr,[y/R,w/R,E/R]),e.enemyTracer(Yr,b.to);let D=Math.hypot(b.from[0]-_.pos[0],b.from[2]-_.pos[2]);t.play("blaster",S.blasterVolume*Math.min(1,8/Math.max(D,.001)),d(_,b.from))}}function p(){c.count=l.length;for(let g=0;g<l.length;g++)h.position.set(l[g].pos[0],l[g].pos[1],l[g].pos[2]),h.rotation.set(0,f*gT+g,0),h.updateMatrix(),c.setMatrixAt(g,h.matrix);c.instanceMatrix.needsUpdate=!0}return{handle:x,forceBark:g=>u.say(g,!0),bark:()=>u.current(),tick:g=>u.tick(g),update(g){if(g>0){f+=g;for(let[_,S]of a)if(S-g<=0){a.delete(_);let M=r.get(_);M&&M.glint(!1)}else a.set(_,S-g);l.length&&p()}},addPickup(g){l.length>=Hg&&l.shift(),l.push({pos:[g[0],g[1],g[2]]}),p()},collect(g,_){let S=0;for(let M=l.length-1;M>=0;M--)Math.hypot(g[0]-l[M].pos[0],g[2]-l[M].pos[2])<=_&&(l.splice(M,1),S++);return S&&p(),S},count:()=>l.length,pickups:()=>l.map(g=>g.pos.slice()),reset(){l.length=0,c.count=0,c.instanceMatrix.needsUpdate=!0,a.clear(),u.reset()}}}var Vg=.05;function _T({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function Wg(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function yT(n){return n&&n.has("room")?"greyRoom":"kioskRow"}function MT(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var bT=2e3,ST=500,wT=500,TT=new Set(["enemyShot","playerHit","telegraph","death","clear","bark"]);function Xg({canvas:n,gl:e,params:t}){let i=Sc(n,e),s=i.renderer,r=bc(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=f0();l.panelOpen=c.isOpen;let h=new Bs,f=new cn(le.camera.fov,1,.05,100),u=wc();h.add(u.mesh);let d=yT(t),m=d==="greyRoom"?qc:a0,x=r0(m);h.add(x.group);let p=x.boxes,g=m.spawn,_=()=>_0(p,{...v0(),exclude:m.coverExclude}),S=Wg(le.cover),M=[],b=0,T=!1,v=P0({boxes:p,spawn:g.pos,coverEdges:_(),onState(q,Oe){M.push({state:q,from:Oe,t:b,tapped:T,auto:q==="coverSlide"&&!T&&(Oe==="move"||Oe==="sprint")}),M.length>bT&&M.shift()},onStep(q){w.dip(le.feedback.stepDip),R.play("step",le.feedback.stepVolume*(q.sprint?1.25:1))}});v.place(g.pos,g.yaw);let y=tg(v);h.add(y.group);let w=t0(),E=Km(),R=I0({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),D=L0(),B=O0(),I=W0(h),G=Y0(document.body),H=kr(1),Y=(m.dummies||[]).map(q=>{let Oe=B0(q),st=q0(Oe);return h.add(st.group),{dummy:Oe,view:st,wasAlive:!0}}),ae=Y.map(q=>q.dummy),N=og(),W=d==="kioskRow"?Ug({level:m,boxes:p,edges:_(),rand:kr(4242)}):null,F=W?W.enemies.map(q=>{let Oe=rg(q);return h.add(Oe.group),Oe}):[],fe=new Map(W?W.enemies.map((q,Oe)=>[q,F[Oe]]):[]),ge=W?Gg({scene:h,effects:I,sfx:R,fight:W,views:F}):null,Z=W?W.targets():ae,_e=[],Ie=[],Xe={pos:[0,0,0],yaw:0},te=[],z="-",j="-",ee=null,Te=null,he=0,X=null,ne=0,pe=1,xe=[],re={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},Ue=[0,0,0],Fe=0,Ye=[0,0,0];w.snap(g.pos,g.yaw,"normal",1);let Be=null,Je=!1,U=null,ye=!1,Ce=!1,Ze=!1,oe={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1},nt={reload:!1,weapon:null,fire:!1,interact:!1},Ve=!1,Ne={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1},P={weapon:null,reload:!1,fire:!1,firePressed:!1},A=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function $(){let q=i.resize();f.aspect=q.aspect,f.updateProjectionMatrix()}$(),window.addEventListener("resize",$),n.addEventListener("click",()=>r.requestLock());let Se=()=>{E.reset(),D.reset()};window.addEventListener("blur",Se),document.addEventListener("pointerlockchange",()=>{r.isLocked()||Se()});let me=()=>R.unlock();window.addEventListener("pointerdown",me),window.addEventListener("keydown",me),window.addEventListener("keydown",q=>{q.repeat||qu(q.target)||(q.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):q.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function we(){W&&W.reset(),N.reset(),B.reset(),Pe(g.pos,g.yaw),ee=null,E.reset(),D.reset(),w.recenter(),I.clear(),xe.length=0,_e.length=0,Te=null,X=null,he=0,ne=0,ge&&ge.reset();for(let q of F)q.reset()}function Ae(){v.state!=="downed"&&v.down(),B.cancelReload(),R.play("downed",le.feedback.hurtVolume),ge&&ge.forceBark("downed")}function ue(q){Ie.push({t:b,type:q.type,id:q.id||null,accurate:!!q.accurate,hit:q.type==="playerHit",key:q.key||null}),Ie.length>wT&&Ie.shift()}function de(q){let Oe=le.feedback;Xe.pos[0]=v.pos[0],Xe.pos[1]=v.pos[1],Xe.pos[2]=v.pos[2],Xe.yaw=w.yaw;let st=W.step(q,{m:v,health:N});ge.handle(st,Xe);for(let Ut of st)if(TT.has(Ut.type)&&ue(Ut),Ut.type==="playerHit"){let _t=xh(w.yaw,v.pos,Ut.from);_e.push({t:b,angle:_t});let Gn=Math.random()*2*Math.PI;w.kick(Oe.hitKick*Math.cos(Gn),Oe.hitKick*Math.sin(Gn)),R.play("hurt",Oe.hurtVolume,Math.sin(_t)),Ut.result==="downed"&&Ae()}else Ut.type==="clear"&&R.play("clear",Oe.killVolume);for(;_e.length&&b-_e[0].t>Oe.hitFlashTime;)_e.shift();let Lt=N.update(q);Lt==="revived"&&v.revive();let Tt=Ve;if(Ve=!1,Lt==="bleedOut"||Tt&&(N.downed||W.clear)){we();return}!N.downed&&ge.collect(v.pos,le.combat.pickupRadius)&&(B.addReserve("regret",le.associate.ammoDrop),R.play("pickup",Oe.pickupVolume))}function Pe(q,Oe){v.place(q,Oe),w.snap(q,Oe,Ld(v),tr(v)),Fe=v.slams}let O={pos:[0,0,0],dir:[0,0,1],fov:70},ce="normal",ie=1,Re=0,Ee=0,Me=0,be=0,He=0,ve=0,ke=0,Le=window.__cr;Le.stats=()=>({fps:Re,ms:Ee,calls:He,tris:ve,scale:i.scale(),characters:1+F.length}),Le.player=()=>{let q=v.cover;return{pos:v.pos.slice(),state:v.state,speed:v.speed(),facing:v.facing,entries:v.entries,cover:q?{id:q.edge.id,kind:q.edge.kind,t:q.t,length:q.edge.length,pop:q.pop,exposed:q.exposed}:null,slams:v.slams,steps:v.steps,blind:q?q.blind:0,firing:!!v.firing}},Le.gun=()=>{let q=B.current(),Oe=B.ammo[q],st=B.reload,Lt=le.weapons[q];return{id:q,slot:B.slot,mag:Oe.mag,reserve:Oe.reserve,boost:Oe.boost,reload:st?{u:st.t/Math.max(Lt.reloadTime,le.combat.minReloadTime),press:st.press}:null,switching:B.switching>0,spread:B.spreadOf(ee||"hip"),stance:ee}},Le.dummies=()=>ae.map(q=>({id:q.id,health:q.health,alive:q.alive,pos:q.pos.slice()})),Le.level=()=>d,Le.fight=()=>W?{started:W.started,clear:W.clear,tokens:W.tokens.held(),pickups:ge.count(),pickupPos:ge.pickups(),enemies:W.enemies.map(q=>({id:q.id,state:q.state,health:q.health,alive:q.alive,pos:q.pos.slice(),holds:W.tokens.holds(q.id),role:q.role,point:q.point?q.point.index:null,pop:q.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},Le.health=()=>({hp:N.hp,max:le.health.max,downed:N.downed,downT:N.downT}),Le.hurt=q=>{N.damage(q)==="downed"&&Ae()},Le.god=q=>{le.health.godMode=q?1:0},Le.fightLog=()=>Ie.map(q=>({...q})),Le.clearFightLog=()=>{Ie.length=0},Le.restart=()=>we(),Le.shots=()=>te.map(q=>({...q})),Le.clearShots=()=>{te.length=0},Le.setGun=(q,Oe)=>B.set(q,Oe),Le.look=(q,Oe)=>{w.yaw=q,w.pitch=Oe},Le.camera=()=>{let q=O;return{pos:q.pos.slice(),fov:q.fov,inside:sa(p,q.pos,.1),mode:ce,side:ie,yaw:w.yaw,pitch:w.pitch}},Le.transitions=()=>M.map(q=>({...q})),Le.clearTransitions=()=>{M.length=0},Le.coverTarget=()=>{let q=U||{moveX:Be?Be.moveX:0,moveY:Be?Be.moveY:0},Oe=pa(v.coverEdges,p,v.pos,Id(v,{moveX:q.moveX||0,moveY:q.moveY||0,camYaw:w.yaw},[0,0]),w.yaw,le.cover,le.move.radius);return Oe?{id:Oe.edge.id,kind:Oe.edge.kind,dist:Oe.dist}:null},Le.place=q=>{let Oe=q==="spawn"?g:m.features[q];Oe&&Pe(Oe.pos,Oe.yaw)},Le.at=(q,Oe,st=0)=>Pe([q,0,Oe],st),Le.drive=q=>{if(!q){ye?Ce=!0:U=null;return}q.fire&&!(U&&U.fire)&&(nt.fire=!0),U=q,Ce=!1,q.tap&&(ye=!0),q.reload&&(nt.reload=!0),q.interact&&(nt.interact=!0),q.weapon&&(nt.weapon=q.weapon)};function De(q){if(U){Ne.moveX=U.moveX||0,Ne.moveY=U.moveY||0,Ne.sprint=!!U.sprint,Ne.aim=!!U.aim,Ne.tap=ye;let Oe=D.update(!!U.fire,nt.fire,!0);nt.fire=!1,Ne.fire=Oe.fire,P.fire=Oe.fire,P.firePressed=Oe.firePressed,P.reload=nt.reload,P.weapon=nt.weapon,nt.reload=!1,nt.weapon=null,ye&&(ye=!1,Ce&&(U=null,Ce=!1))}else{let Oe=Be.held;Ne.moveX=Be.moveX,Ne.moveY=Be.moveY,Ne.tap=E.update(Oe.cover,oe.cover,q,le.move.tapMax),Ne.sprint=Oe.sprint||E.holding(),Ne.aim=Oe.aim;let st=D.update(Oe.fire,oe.fire,!0);Ne.fire=st.fire,P.fire=st.fire,P.firePressed=st.firePressed,P.reload=oe.reload,P.weapon=oe.weapon}return Ve=oe.interact||nt.interact,oe.cover=!1,oe.fire=!1,oe.reload=!1,oe.weapon=null,oe.interact=!1,nt.interact=!1,Ne.camYaw=w.yaw,T=Ne.tap,Ne}let et=q=>q.toFixed(1);function ct(){let q=v.cover;if(q)return`cover: ${q.edge.kind} ${q.edge.id}  t ${q.t.toFixed(2)}/${q.edge.length.toFixed(2)}  pop ${q.pop.toFixed(2)}`;let Oe=Le.coverTarget();return Oe?`tap grabs: ${Oe.kind} ${Oe.dist.toFixed(1)} m`:"tap grabs: nothing"}function At(){let q=Le.gun(),Oe=q.id;return`gun: ${nh[Oe].name} ${q.mag}/${le.weapons[Oe].infiniteReserve>0?"\u221E":q.reserve}  ${q.stance||"-"}  spread ${q.spread.toFixed(1)}`}function Ot(){let q=r.padStatus(),Oe=[W?"GYMS OF WAR \u2014 CHECK-IN TURNSTILES":"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];W&&Oe.push("E / X: renew your membership when downed, another set when clear"),Oe.push("Sound starts after a click or key","",`${v.state}   ${v.speed().toFixed(2)} m/s`,ct(),At()),W?(Oe.push(`fight: ${W.enemies.filter(st=>st.alive).length}/${W.enemies.length}  tokens ${W.tokens.held().join(",")||"-"}  hp ${N.hp.toFixed(0)}`),Oe.push(`health: ${N.hp.toFixed(0)}/${le.health.max}  ${N.downed?`downed ${N.downT.toFixed(1)}`:"-"}`)):Oe.push(`dummies: ${ae.filter(st=>st.alive).length}/${ae.length}  last: ${z} ${j}`),Oe.push(`${Math.round(Re)} fps   ${et(Ee)} ms   scale ${i.scale()}`,`${He} draw calls   ${ve} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${q}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=Oe.join(`
`)}let Rt=q=>le.feedback[q];function Nn(q){q.type==="shot"?Cn(q):q.type==="reloadStart"?R.play("magOut",Rt("reloadVolume")):q.type==="reloadPress"?(R.play(q.result,Rt("reloadVolume")),X=q.result,ne=0):q.type==="reloadDone"?R.play("magIn",Rt("reloadVolume")):q.type==="dry"&&R.play("dry",Rt("reloadVolume"))}function on(q,Oe){z0(q.dummy,Oe),q.dummy.alive&&!q.wasAlive&&q.view.respawn(),q.wasAlive=q.dummy.alive}let It=[0,0,0];function Cn(q){let Oe=le.weapons[q.id],st=v.cover?v.cover.edge:null;Fd(v,ee,w.yaw,le.combat,Ue);let Lt=F0({lens:O.pos,view:O.dir,muzzle:Ue,spreadDeg:q.spread,range:Oe.range,boxes:p,targets:Z,ignoreBox:st?st.boxIndex:-1,rand:H,aimed:ee==="aim"}),Tt=Lt.hit,Ut=Tt.target,_t=null;Ut&&(_t=W?W.hurt(Ut,Bd(Oe,Tt.kind,q.mult),Tt.kind==="head"?"head":"body"):H0(Ut,Bd(Oe,Tt.kind,q.mult))),z=Tt.kind,j=Ut?Ut.id:"-",te.push({t:b,kind:Tt.kind,target:Ut?Ut.id:null,point:Tt.point.slice(),stance:ee}),te.length>ST&&te.shift();let Gn=[Lt.dir[0],Lt.dir[1],Lt.dir[2]];if(xe.push({id:q.id,from:Ue.slice(),dir:Gn,hit:Tt,target:Ut,result:_t}),_t==="kill"&&!W){let qr=Y.find(ir=>ir.dummy===Ut);qr.wasAlive=!1}}function hi(q){let Oe=le.weapons[q.id],st=le.feedback,Lt=y.gunTip(It);w.kick(Oe.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Oe.kickYaw),I.flash(Lt,q.dir),I.tracer(Lt,q.hit.point),R.play(q.id==="regret"?"rifle":"pistol",st.shotVolume);let Tt=[-q.dir[0],-q.dir[1],-q.dir[2]];if(q.hit.kind==="world")I.spark(q.hit.point,Tt);else if(q.target){let Ut=W?fe.get(q.target):Y.find(_t=>_t.dummy===q.target).view;q.result==="kill"?(W?(Ut.death(),ge.addPickup(q.target.pos)):Ut.burst(),I.gel(q.hit.point,Tt,st.killGelCount),I.receipts(q.target.pos.map((_t,Gn)=>Gn===1?_t+1.2:_t),st.receiptCount),Te="kill",he=st.killMarkerTime,R.play("kill",st.killVolume)):(W||Ut.hit(q.hit.kind),I.gel(q.hit.point,Tt),Te=q.hit.kind,he=st.hitMarkerTime,R.play(q.hit.kind==="head"?"head":"hit",st.hitVolume))}}let jn=Mc({before(q){if(Be=r.poll(),Je=!!U||ye||_T({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=Je,!Je){E.reset(),D.reset(),oe.cover=!1,oe.fire=!1,oe.reload=!1,oe.weapon=null,oe.interact=!1;return}let st=Math.min(q,Vg);Ze=Be.held.aim||U&&U.aim,w.look(Be.lookDX,Be.lookDY,Be.lookX,Be.lookY,st,Ze,pe),Be.pressed.cover&&(oe.cover=!0),Be.pressed.fire&&(oe.fire=!0),Be.pressed.reload&&(oe.reload=!0),Be.pressed.interact&&(oe.interact=!0);for(let[Lt,Tt]of A)Be.pressed[Lt]&&(oe.weapon=Tt)},step(q){if(!Je)return;let Oe=Wg(le.cover);Oe!==S&&(S=Oe,v.coverEdges=_()),b+=q;let st=De(q);MT(st,P,{downed:!!W&&N.downed,busy:B.reload!==null||B.switching>0}),v.update(st,q),ee=U0(v);let Lt=B.update(P,ee,q);for(let Tt of Lt)Nn(Tt);W&&(ge.tick(q),de(q));for(let Tt of Y)on(Tt,q);G0(v.pos,m.ammoCrates,le.combat.crateRadius)&&B.refill()},render(q,Oe){let st=Je?Math.min(Oe,Vg):0;re.shot=xe.length>0,re.dir=O.dir,re.stance=ee,re.weapon=B.current(),y.update(q,st,re);for(let C of Y)C.view.update(st);for(let C of F)C.update(q,st);ge&&ge.update(st);let Lt=v.pos,Tt=v.prevPos;for(let C=0;C<3;C++)Ye[C]=Tt[C]+(Lt[C]-Tt[C])*q;v.slams>Fe&&(Fe=v.slams,w.bump(),R.play("thud",le.cover.thudVolume));let Ut=Ld(v);if(Ut==="aim"&&ce!=="aim"){let C=v.cover?v.cover.edge:null;w.hold(Dn(O.pos,O.dir,le.camera.holdRange,p,Z,{ignoreBox:C?C.boxIndex:-1}).point)}ce=Ut,ie=tr(v);let _t=w.update(st,{target:Ye,mode:ce,side:ie},p);O.pos[0]=_t.pos[0],O.pos[1]=_t.pos[1],O.pos[2]=_t.pos[2],O.fov=_t.fov,O.dir[0]=_t.dir[0],O.dir[1]=_t.dir[1],O.dir[2]=_t.dir[2],f.fov!==_t.fov&&(f.fov=_t.fov,f.updateProjectionMatrix()),y.fadeHeadFor(_t.pos,le.camera.headHideDist,le.camera.headHideMargin),f.position.set(_t.pos[0],_t.pos[1],_t.pos[2]),f.lookAt(_t.pos[0]+_t.dir[0],_t.pos[1]+_t.dir[1],_t.pos[2]+_t.dir[2]);for(let C of xe)hi(C);xe.length=0,I.update(st),he-=st,he<=0&&(Te=null),X&&(ne+=st,ne>=le.feedback.reloadResultTime&&(X=null));let Gn=v.cover?v.cover.edge:null,qr=Dn(O.pos,O.dir,100,p,Z,{ignoreBox:Gn?Gn.boxIndex:-1});pe=r.device()==="pad"&&qr.target?le.look.pad.assist:1;let ir=!!v.cover&&v.cover.pop<.5,vh=ee||(v.cover&&(v.cover.pop>0||ir)?"aim":"hip"),$r=W?kg({hp:N.hp,max:le.health.max,downed:N.downed,downT:N.downT,hits:_e,now:b}):null;G.render(X0({arsenal:B,stance:ee,firing:Ne.fire,covered:ir,device:r.device(),spreadDeg:B.spreadOf(vh),fov:f.fov,viewportH:n.clientHeight||window.innerHeight,marker:Te,reloadFlash:X,face:$r,bark:ge?ge.bark():null,objective:W?W.clear?"Check-in Turnstiles: set complete":W.started?"Get past the front desk":"Walk in":"",banner:W?N.downed?{title:`You've hit a plateau ${$r.downed.seconds}`,hint:"E / X renew your membership"}:W.clear?{title:"SET COMPLETE",hint:"Rest 60 seconds! E / X for another set"}:null:null})),u.update(performance.now()/1e3),x.update(st),s.render(h,f),He=s.info.render.calls,ve=s.info.render.triangles,Me++,be+=Oe,be>=1&&(Re=Me/be,Ee=be/Me*1e3,Me=0,be=0),ke+=Oe,ke>=.1&&(ke=0,Ot()),i.frameDone(Oe*1e3)}});t&&t.has("tune")&&c.toggle(),Be=r.poll(),w.update(0,{target:g.pos,mode:"normal",side:1},p),Ot(),jn.start()}var ET={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function rf(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(ET[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||rf("boot",n.message)});function AT(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){rf("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Zm({canvas:n,gl:e}):Xg({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{AT()}catch(n){rf("boot",n&&n.message)}})();

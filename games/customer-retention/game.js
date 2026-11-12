/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var hf=0,Dh=1,uf=2;var Ro=1,df=2,Sr=3,es=0,Yt=1,Gn=2,Fs=0,br=1,Nh=2,Uh=3,Oh=4,ff=5;var ks=100,pf=101,mf=102,gf=103,xf=104,_f=200,vf=201,yf=202,Mf=203,Fh=204,kh=205,Sf=206,bf=207,wf=208,Tf=209,Ef=210,Af=211,Rf=212,Cf=213,Pf=214,La=0,Da=1,Na=2,ur=3,Ua=4,Oa=5,Fa=6,ka=7,Bh=0,If=1,Lf=2,di=0,zh=1,Hh=2,Vh=3,Gh=4,Wh=5,Xh=6,Yh=7;var qh=300,Bs=301,wr=302,ml=303,gl=304,Ba=1e3,ci=1001,za=1002,Qt=1003,Df=1004;var Co=1005;var vn=1006,xl=1007;var Ni=1008;var kn=1009,$h=1010,Zh=1011,Tr=1012,_l=1013,ti=1014,Wn=1015,ni=1016,vl=1017,yl=1018,zs=1020,Jh=35902,Kh=35899,jh=1021,Qh=1022,ii=1023,Ii=1026,Ui=1027,Ml=1028,Sl=1029,ts=1030,bl=1031;var wl=1033,Po=33776,Io=33777,Lo=33778,Do=33779,Tl=35840,El=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Ll=37488,Dl=37489,No=37490,Nl=37491,Ul=37808,Ol=37809,Fl=37810,kl=37811,Bl=37812,zl=37813,Hl=37814,Vl=37815,Gl=37816,Wl=37817,Xl=37818,Yl=37819,ql=37820,$l=37821,Zl=36492,Jl=36494,Kl=36495,jl=36283,Ql=36284,Uo=36285,ec=36286;var jr=2300,Ha=2301,Pa=2302,wh=2303,Th=2400,Eh=2401,Ah=2402;var Nf=3200;var eu=0,Uf=1,Oi="",on="srgb",Qr="srgb-linear",eo="linear",bt="srgb";var Ia=7680;var Of=519,Ff=512,kf=513,Bf=514,tu=515,zf=516,Hf=517,nu=518,iu=519,Vf=35044,Er=35048;var su="300 es",Hn=2e3,to=2001;function ug(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gf(){let n=no("canvas");return n.style.display="block",n}var Dd={},dr=null;function ru(...n){let e="THREE."+n.shift();dr?dr("log",e,...n):console.log(e,...n)}function Wf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=Wf(n);let e="THREE."+n.shift();if(dr)dr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=Wf(n);let e="THREE."+n.shift();if(dr)dr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function qr(...n){let e=n.join(" ");e in Dd||(Dd[e]=!0,rt(...n))}function Xf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Yf={[La]:La,[Na]:Fa,[Ua]:Ua,[ur]:Oa,[Da]:Da,[Fa]:Na,[ka]:ka,[Oa]:ur},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,$r=Math.PI/180,fr=180/Math.PI;function Hs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function fg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function pg(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function mg(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function gg(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function xg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yg(n,e){return n+Math.random()*(e-n)}function Mg(n){return n*(.5-Math.random())}function Sg(n){n!==void 0&&(Nd=n);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bg(n){return n*$r}function wg(n){return n*fr}function Tg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Eg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function au(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ag(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*h,a*l);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function lu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qf(n,e){if(e.constructor===Float32Array)return n;let t=lu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function $f(n,e){if(e.constructor===Float32Array)return n;let t=lu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var tc={DEG2RAD:$r,RAD2DEG:fr,generateUUID:Hs,clamp:dt,euclideanModulo:ou,mapLinear:fg,inverseLerp:pg,lerp:Zr,damp:mg,pingpong:gg,smoothstep:xg,smootherstep:_g,randInt:vg,randFloat:yg,randFloatSpread:Mg,seededRandom:Sg,degToRad:bg,radToDeg:wg,isPowerOfTwo:Tg,ceilPowerOfTwo:Eg,floorPowerOfTwo:au,setQuaternionFromProperEuler:Ag,normalize:$f,denormalize:qf},pu=class pu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pu.prototype.isVector2=!0;var Ue=pu,yn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(f!==x||c!==u||l!==d||h!==m){let p=c*u+l*d+h*m+f*x;p<0&&(u=-u,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,c=c*g+u*a,l=l*g+d*a,h=h*g+m*a,f=f*g+x*a}else{c=c*g+u*a,l=l*g+d*a,h=h*g+m*a,f=f*g+x*a;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+c*d-l*u,e[t+1]=c*m+h*u+l*f-a*d,e[t+2]=l*m+h*d+a*u-c*f,e[t+3]=h*m-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mu=class mu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mu.prototype.isVector3=!0;var O=mu,nh=new O,Ud=new yn,gu=class gu{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],x=s[0],p=s[3],g=s[6],v=s[1],S=s[4],M=s[7],b=s[2],w=s[5],_=s[8];return r[0]=o*x+a*v+c*b,r[3]=o*p+a*S+c*w,r[6]=o*g+a*M+c*_,r[1]=l*x+h*v+f*b,r[4]=l*p+h*S+f*w,r[7]=l*g+h*M+f*_,r[2]=u*x+d*v+m*b,r[5]=u*p+d*S+m*w,r[8]=u*g+d*M+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,t)),this}rotate(e){return qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gu.prototype.isMatrix3=!0;var at=gu,ih=new at,Od=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rg(){let n={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qr]:{primaries:e,whitePoint:i,transfer:eo,toXYZ:Od,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Od,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var vt=Rg();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,Va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=no("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cg=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sh(s[o].image)):r.push(sh(s[o]))}else r=sh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Va.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var Pg=0,rh=new O,Mn=class n extends hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ci,s=ci,r=vn,o=Ni,a=ii,c=kn,l=n.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Hs(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=qh;Mn.DEFAULT_ANISOTROPY=1;var xu=class xu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,M=(d+1)/2,b=(g+1)/2,w=(h+u)/4,_=(f+x)/4,y=(m+p)/4;return S>M&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=_/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=_/r,s=y/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xu.prototype.isVector4=!0;var zt=xu,Ga=class extends hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Mn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends Ga{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},io=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pl=class pl{constructor(e,t,i,s,r,o,a,c,l,h,f,u,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,f,u,d,m,x,p)}set(e,t,i,s,r,o,a,c,l,h,f,u,d,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,m=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,m=l*h,x=l*f;t[0]=u+x*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,m=l*h,x=l*f;t[0]=u-x*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,m=a*h,x=a*f;t[0]=c*h,t[4]=m*l-d,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+m,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ig,e,Lg)}lookAt(e,t,i){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Wi.crossVectors(i,Nn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Wi.crossVectors(i,Nn)),Wi.normalize(),aa.crossVectors(Nn,Wi),s[0]=Wi.x,s[4]=aa.x,s[8]=Nn.x,s[1]=Wi.y,s[5]=aa.y,s[9]=Nn.y,s[2]=Wi.z,s[6]=aa.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],x=i[6],p=i[10],g=i[14],v=i[3],S=i[7],M=i[11],b=i[15],w=s[0],_=s[4],y=s[8],T=s[12],E=s[1],R=s[5],I=s[9],D=s[13],P=s[2],U=s[6],F=s[10],G=s[14],V=s[3],z=s[7],H=s[11],X=s[15];return r[0]=o*w+a*E+c*P+l*V,r[4]=o*_+a*R+c*U+l*z,r[8]=o*y+a*I+c*F+l*H,r[12]=o*T+a*D+c*G+l*X,r[1]=h*w+f*E+u*P+d*V,r[5]=h*_+f*R+u*U+d*z,r[9]=h*y+f*I+u*F+d*H,r[13]=h*T+f*D+u*G+d*X,r[2]=m*w+x*E+p*P+g*V,r[6]=m*_+x*R+p*U+g*z,r[10]=m*y+x*I+p*F+g*H,r[14]=m*T+x*D+p*G+g*X,r[3]=v*w+S*E+M*P+b*V,r[7]=v*_+S*R+M*U+b*z,r[11]=v*y+S*I+M*F+b*H,r[15]=v*T+S*D+M*G+b*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],x=e[7],p=e[11],g=e[15],v=c*d-l*u,S=a*d-l*f,M=a*u-c*f,b=o*d-l*h,w=o*u-c*h,_=o*f-a*h;return t*(x*v-p*S+g*M)-i*(m*v-p*b+g*w)+s*(m*S-x*b+g*_)-r*(m*M-x*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],x=e[13],p=e[14],g=e[15],v=t*a-i*o,S=t*c-s*o,M=t*l-r*o,b=i*c-s*a,w=i*l-r*a,_=s*l-r*c,y=h*x-f*m,T=h*p-u*m,E=h*g-d*m,R=f*p-u*x,I=f*g-d*x,D=u*g-d*p,P=v*D-S*I+M*R+b*E-w*T+_*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(a*D-c*I+l*R)*U,e[1]=(s*I-i*D-r*R)*U,e[2]=(x*_-p*w+g*b)*U,e[3]=(u*w-f*_-d*b)*U,e[4]=(c*E-o*D-l*T)*U,e[5]=(t*D-s*E+r*T)*U,e[6]=(p*M-m*_-g*S)*U,e[7]=(h*_-u*M+d*S)*U,e[8]=(o*I-a*E+l*y)*U,e[9]=(i*E-t*I-r*y)*U,e[10]=(m*w-x*M+g*v)*U,e[11]=(f*M-h*w-d*v)*U,e[12]=(a*T-o*R-c*y)*U,e[13]=(t*R-i*T+s*y)*U,e[14]=(x*S-m*b-p*v)*U,e[15]=(h*b-f*S+u*v)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,m=r*f,x=o*h,p=o*f,g=a*f,v=c*l,S=c*h,M=c*f,b=i.x,w=i.y,_=i.z;return s[0]=(1-(x+g))*b,s[1]=(d+M)*b,s[2]=(m-S)*b,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(u+g))*w,s[6]=(p+v)*w,s[7]=0,s[8]=(m+S)*_,s[9]=(p-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),c=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let l=1/o,h=1/a,f=1/c;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Hn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Hn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===to)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Hn,c=!1){let l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Hn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===to)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};pl.prototype.isMatrix4=!0;var mt=pl,Ks=new O,Kn=new mt,Ig=new O(0,0,0),Lg=new O(1,1,1),Wi=new O,aa=new O,Nn=new O,kd=new mt,Bd=new yn,En=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dg=0,zd=new O,js=new yn,Ti=new mt,la=new O,zr=new O,Ng=new O,Ug=new yn,Hd=new O(1,0,0),Vd=new O(0,1,0),Gd=new O(0,0,1),Wd={type:"added"},Og={type:"removed"},Qs={type:"childadded",child:null},oh={type:"childremoved",child:null},pn=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new En,i=new yn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new at}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(zr,la,this.up):Ti.lookAt(la,zr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Ti),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Og),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new O(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=ou(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ah(o,r,e+1/3),this.g=ah(o,r,e),this.b=ah(o,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return vt.workingToColorSpace(fn.copy(this),e),Math.round(dt(fn.r*255,0,255))*65536+Math.round(dt(fn.g*255,0,255))*256+Math.round(dt(fn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=on){vt.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ca);let i=Zr(Xi.h,ca.h,t),s=Zr(Xi.s,ca.s,t),r=Zr(Xi.l,ca.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new it;it.NAMES=Zf;var Ps=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new O,Ei=new O,lh=new O,Ai=new O,er=new O,tr=new O,Xd=new O,ch=new O,hh=new O,uh=new O,dh=new zt,fh=new zt,ph=new zt,Zi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Ei.subVectors(i,t),lh.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Ei),c=jn.dot(lh),l=Ei.dot(Ei),h=Ei.dot(lh),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return dh.setScalar(0),fh.setScalar(0),ph.setScalar(0),dh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dh,r.x),o.addScaledVector(fh,r.y),o.addScaledVector(ph,r.z),o}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Ei.subVectors(e,t),jn.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),tr.subVectors(r,i),ch.subVectors(e,i);let c=er.dot(ch),l=tr.dot(ch);if(c<=0&&l<=0)return t.copy(i);hh.subVectors(e,s);let h=er.dot(hh),f=tr.dot(hh);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(i).addScaledVector(er,o);uh.subVectors(e,r);let d=er.dot(uh),m=tr.dot(uh);if(m>=0&&d<=m)return t.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(tr,a);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Xd.subVectors(r,s),a=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(Xd,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),ua.subVectors(this.max,Hr),nr.subVectors(e.a,Hr),ir.subVectors(e.b,Hr),sr.subVectors(e.c,Hr),Yi.subVectors(ir,nr),qi.subVectors(sr,ir),Ts.subVectors(nr,sr);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Ts.z,Ts.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Ts.z,0,-Ts.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Ts.y,Ts.x,0];return!mh(t,nr,ir,sr,ua)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,nr,ir,sr,ua))?!1:(da.crossVectors(Yi,qi),t=[da.x,da.y,da.z],mh(t,nr,ir,sr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new O,new O,new O,new O,new O,new O,new O,new O],Qn=new O,ha=new ui,nr=new O,ir=new O,sr=new O,Yi=new O,qi=new O,Ts=new O,Hr=new O,ua=new O,da=new O,Es=new O;function mh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Xt=new O,fa=new Ue,kg=0,At=class extends hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vf,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?lu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$f(e,this.array)}};var ro=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var oo=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ft=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bg=new ui,Vr=new O,gh=new O,Vn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(gh)),this.expandByPoint(Vr.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zg=0,zn=new mt,xh=new pn,rr=new O,Un=new ui,Gr=new ui,jt=new O,Ut=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ug(e)?oo:ro)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Un.min,Gr.min),Un.expandByPoint(jt),jt.addVectors(Un.max,Gr.max),Un.expandByPoint(jt)):(Un.expandByPoint(Gr.min),Un.expandByPoint(Gr.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)jt.fromBufferAttribute(a,l),c&&(rr.fromBufferAttribute(e,l),jt.add(rr)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new At(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let T=0;T<i.count;T++)a[T]=new O,c[T]=new O;let h=new O,f=new O,u=new O,d=new Ue,m=new Ue,x=new Ue,p=new O,g=new O;function v(T,E,R){l[T]=l[E]=l[R]=1,h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),f.sub(h),u.sub(h),m.sub(d),x.sub(d);let I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(I),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(I),a[T].add(p),a[E].add(p),a[R].add(p),c[T].add(g),c[E].add(g),c[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let T=0,E=S.length;T<E;++T){let R=S[T],I=R.start,D=R.count;for(let P=I,U=I+D;P<U;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new O,b=new O,w=new O,_=new O;function y(T){w.fromBufferAttribute(s,T),_.copy(w);let E=a[T];M.copy(E),M.sub(w.multiplyScalar(w.dot(E))).normalize(),b.crossVectors(_,E);let I=b.dot(c[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,I)}for(let T=0,E=i.count;T<E;++T)l[T]&&y(T);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,f=new O;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)u[m++]=l[d++]}return new At(u,h,f)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _h=new O,Hg=new O,Vg=new at,ei=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_h.subVectors(i,t).cross(Hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vg.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gg=0,Is=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=br,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=kh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new O,vh=new O,pa=new O,ma=new O,Xa=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vh.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ma.copy(this.origin).sub(vh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*c-a,u=o*a-c,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vh).addScaledVector(pa,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,g=i.x-o.x,v=i.y-o.y,S=i.z-o.z,M=Math.abs(c),b=Math.abs(l),w=Math.abs(h),_,y,T,E,R,I,D,P,U,F,G,V;if(M>=b&&M>=w?(T=c,I=f,U=m,V=g,c>=0?(_=l,y=h,E=u,R=d,D=x,P=p,F=v,G=S):(_=h,y=l,E=d,R=u,D=p,P=x,F=S,G=v)):b>=w?(T=l,I=u,U=x,V=v,l>=0?(_=h,y=c,E=d,R=f,D=p,P=m,F=S,G=g):(_=c,y=h,E=f,R=d,D=m,P=p,F=g,G=S)):(T=h,I=d,U=p,V=S,h>=0?(_=c,y=l,E=f,R=u,D=m,P=x,F=g,G=v):(_=l,y=c,E=u,R=f,D=x,P=m,F=v,G=g)),T===0)return null;let z=_/T,H=y/T,X=1/T,ce=E-z*I,pe=R-H*I,Z=D-z*U,he=P-H*U,Se=F-z*V,Ve=G-H*V,K=Se*he-Ve*Z,be=ce*Ve-pe*Se,_e=Z*pe-he*ce;if(s){if(K<0||be<0||_e<0)return null}else if((K<0||be<0||_e<0)&&(K>0||be>0||_e>0))return null;let De=K+be+_e;if(De===0)return null;let qe=X*(K*I+be*U+_e*V);return(De>0?qe<0:qe>0)?null:this.at(qe/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yd=new mt,As=new Xa,ga=new Vn,qd=new O,xa=new O,_a=new O,va=new O,yh=new O,ya=new O,$d=new O,Ma=new O,gt=class extends pn{constructor(e=new Ut,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(yh.fromBufferAttribute(f,e),o?ya.addScaledVector(yh,h):ya.addScaledVector(yh.sub(t),h))}t.add(ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(ga.containsPoint(As.origin)===!1&&(As.intersectSphere(ga,qd)===null||As.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),As.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,b=S;M<b;M+=3){let w=a.getX(M),_=a.getX(M+1),y=a.getX(M+2);s=Sa(this,g,e,i,l,h,f,w,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let v=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);s=Sa(this,o,e,i,l,h,f,v,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,b=S;M<b;M+=3){let w=M,_=M+1,y=M+2;s=Sa(this,g,e,i,l,h,f,w,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let v=p,S=p+1,M=p+2;s=Sa(this,o,e,i,l,h,f,v,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Wg(n,e,t,i,s,r,o,a){let c;if(e.side===Yt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===es,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:n}}function Sa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,xa),n.getVertexPosition(c,_a),n.getVertexPosition(l,va);let h=Wg(n,e,t,i,xa,_a,va,$d);if(h){let f=new O;Zi.getBarycoord($d,xa,_a,va,f),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,c,l,f,new Ue)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,c,l,f,new Ue)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,c,l,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};Zi.getNormal(xa,_a,va,u.normal),h.face=u,h.barycoord=f}return h}var ao=class extends Mn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Qt,h=Qt,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gr=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new mt,Zd=new mt,ba=[],Jd=new ui,Xg=new mt,Wr=new gt,Xr=new Vn,Ls=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Jd.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Xr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),e.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Zd.multiplyMatrices(i,or),Wr.matrixWorld=Zd,Wr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let c=ba[o];c.instanceId=r,c.object=this,t.push(c)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ao(new Float32Array(s*this.count),s,this.count,Ml,Wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Vn,Yg=new Ue(.5,.5),wa=new O,Ds=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],v=r[12],S=r[13],M=r[14],b=r[15];if(s[0].setComponents(l-o,d-h,g-m,b-v).normalize(),s[1].setComponents(l+o,d+h,g+m,b+v).normalize(),s[2].setComponents(l+a,d+f,g+x,b+S).normalize(),s[3].setComponents(l-a,d-f,g-x,b-S).normalize(),i)s[4].setComponents(c,u,p,M).normalize(),s[5].setComponents(l-c,d-u,g-p,b-M).normalize();else if(s[4].setComponents(l-c,d-u,g-p,b-M).normalize(),t===Hn)s[5].setComponents(l+c,d+u,g+p,b+M).normalize();else if(t===to)s[5].setComponents(c,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=Yg.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kd=new mt,Ya=class n{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Kd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ds),i[s].setFromProjectionMatrix(Kd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ds),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var lo=class extends Mn{constructor(e=[],t=Bs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},co=class extends Mn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends Mn{constructor(e,t,i=ti,s,r,o,a=Qt,c=Qt,l,h=Ii,f=1){if(h!==Ii&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ho=class extends Di{constructor(e,t=ti,i=Bs,s,r,o=Qt,a=Qt,c,l=Ii){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ot=class n extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function m(x,p,g,v,S,M,b,w,_,y,T){let E=M/_,R=b/y,I=M/2,D=b/2,P=w/2,U=_+1,F=y+1,G=0,V=0,z=new O;for(let H=0;H<F;H++){let X=H*R-D;for(let ce=0;ce<U;ce++){let pe=ce*E-I;z[x]=pe*v,z[p]=X*S,z[g]=P,l.push(z.x,z.y,z.z),z[x]=0,z[p]=0,z[g]=w>0?1:-1,h.push(z.x,z.y,z.z),f.push(ce/_),f.push(1-H/y),G+=1}}for(let H=0;H<y;H++)for(let X=0;X<_;X++){let ce=u+X+U*H,pe=u+X+U*(H+1),Z=u+(X+1)+U*(H+1),he=u+(X+1)+U*H;c.push(ce,pe,he),c.push(pe,Z,he),V+=6}a.addGroup(d,V,T),d+=V,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var An=class n extends Ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,x=[],p=i/2,g=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function v(){let M=new O,b=new O,w=0,_=(t-e)/i;for(let y=0;y<=r;y++){let T=[],E=y/r,R=E*(t-e)+e;for(let I=0;I<=s;I++){let D=I/s,P=D*c+a,U=Math.sin(P),F=Math.cos(P);b.x=R*U,b.y=-E*i+p,b.z=R*F,f.push(b.x,b.y,b.z),M.set(U,_,F).normalize(),u.push(M.x,M.y,M.z),d.push(D,1-E),T.push(m++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let E=x[T][y],R=x[T+1][y],I=x[T+1][y+1],D=x[T][y+1];(e>0||T!==0)&&(h.push(E,R,D),w+=3),(t>0||T!==r-1)&&(h.push(R,I,D),w+=3)}l.addGroup(g,w,0),g+=w}function S(M){let b=m,w=new Ue,_=new O,y=0,T=M===!0?e:t,E=M===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*E,0),u.push(0,E,0),d.push(.5,.5),m++;let R=m;for(let I=0;I<=s;I++){let P=I/s*c+a,U=Math.cos(P),F=Math.sin(P);_.x=T*F,_.y=p*E,_.z=T*U,f.push(_.x,_.y,_.z),u.push(0,E,0),w.x=U*.5+.5,w.y=F*.5*E+.5,d.push(w.x,w.y),m++}for(let I=0;I<s;I++){let D=b+I,P=R+I;M===!0?h.push(P,P+1,D):h.push(P+1,P,D),y+=3}l.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fo=class n extends Ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new O,M=new O,b=new O;for(let w=0;w<t.length;w+=3)d(t[w+0],S),d(t[w+1],M),d(t[w+2],b),c(S,M,b,v)}function c(v,S,M,b){let w=b+1,_=[];for(let y=0;y<=w;y++){_[y]=[];let T=v.clone().lerp(M,y/w),E=S.clone().lerp(M,y/w),R=w-y;for(let I=0;I<=R;I++)I===0&&y===w?_[y][I]=T:_[y][I]=T.clone().lerp(E,I/R)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){let E=Math.floor(T/2);T%2===0?(u(_[y][E+1]),u(_[y+1][E]),u(_[y][E])):(u(_[y][E+1]),u(_[y+1][E+1]),u(_[y+1][E]))}}function l(v){let S=new O;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let v=new O;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=p(v)/2/Math.PI+.5,b=g(v)/Math.PI+.5;o.push(M,1-b)}m(),f()}function f(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],b=o[v+4],w=Math.max(S,M,b),_=Math.min(S,M,b);w>.9&&_<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function m(){let v=new O,S=new O,M=new O,b=new O,w=new Ue,_=new Ue,y=new Ue;for(let T=0,E=0;T<r.length;T+=9,E+=6){v.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),w.set(o[E+0],o[E+1]),_.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(v).add(S).add(M).divideScalar(3);let R=p(b);x(w,E+0,v,R),x(_,E+2,S,R),x(y,E+4,M,R)}}function x(v,S,M,b){b<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ue:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new O,s=[],r=[],o=[],a=new O,c=new mt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(dt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(dt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},xr=class extends Sn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qa=class extends xr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var jd=new O,Qd=new O,Mh=new cu,Sh=new cu,bh=new cu,$a=class extends Sn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qd.subVectors(s[0],s[1]).add(s[0]),l=Qd);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Mh.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,m,x,p),Sh.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,m,x,p),bh.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Sh.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),bh.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(Mh.calc(c),Sh.calc(c),bh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ef(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function qg(n,e){let t=1-n;return t*t*e}function $g(n,e){return 2*(1-n)*n*e}function Zg(n,e){return n*n*e}function Jr(n,e,t,i){return qg(n,e)+$g(n,t)+Zg(n,i)}function Jg(n,e){let t=1-n;return t*t*t*e}function Kg(n,e){let t=1-n;return 3*t*t*n*e}function jg(n,e){return 3*(1-n)*n*n*e}function Qg(n,e){return n*n*n*e}function Kr(n,e,t,i,s){return Jg(n,e)+Kg(n,t)+jg(n,i)+Qg(n,s)}var po=class extends Sn{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Kr(e,s.x,r.x,o.x,a.x),Kr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends Sn{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Kr(e,s.x,r.x,o.x,a.x),Kr(e,s.y,r.y,o.y,a.y),Kr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mo=class extends Sn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Sn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Sn{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jr(e,s.x,r.x,o.x),Jr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Sn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jr(e,s.x,r.x,o.x),Jr(e,s.y,r.y,o.y),Jr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(ef(a,c.x,l.x,h.x,f.x),ef(a,c.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},Ka=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:$a,CubicBezierCurve:po,CubicBezierCurve3:Za,EllipseCurve:xr,LineCurve:mo,LineCurve3:Ja,QuadraticBezierCurve:go,QuadraticBezierCurve3:xo,SplineCurve:_o}),ja=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ka[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ka[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ns=class extends ja{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new mo(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new go(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new po(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new _o(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new xr(e,t,i,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_r=class extends Ns{constructor(e){super(e),this.uuid=Hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ns().fromJSON(s))}return this}};function ex(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Jf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=rx(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>f&&(f=m)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return vo(r,o,t,a,c,l,0),o}function Jf(n,e,t,i,s){let r;if(s===gx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=tf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=tf(o/i|0,n[o],n[o+1],r);return r&&vr(r,r.next)&&(Mo(r),r=r.next),r}function Us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Mo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function vo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&hx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?nx(n,i,s,r):tx(n)){e.push(c.i,n.i,l.i),Mo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ix(Us(n),e),vo(n,e,t,i,s,r,2)):o===2&&sx(n,e,t,i,s,r):vo(Us(n),e,t,i,s,r,1);break}}}function tx(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),f=Math.min(a,c,l),u=Math.max(s,r,o),d=Math.max(a,c,l),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Yr(s,a,r,c,o,l,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,c,l),m=Math.min(h,f,u),x=Math.max(a,c,l),p=Math.max(h,f,u),g=Rh(d,m,e,t,i),v=Rh(x,p,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=v;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Yr(a,h,c,f,l,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Yr(a,h,c,f,l,u,M.x,M.y)&&Bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Yr(a,h,c,f,l,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Yr(a,h,c,f,l,u,M.x,M.y)&&Bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ix(n,e){let t=n;do{let i=t.prev,s=t.next.next;!vr(i,s)&&jf(i,t,t.next,s)&&yo(i,s)&&yo(s,i)&&(e.push(i.i,t.i,s.i),Mo(t),Mo(t.next),t=n=s),t=t.next}while(t!==n);return Us(t)}function sx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fx(o,a)){let c=Qf(o,a);o=Us(o,o.next),c=Us(c,c.next),vo(o,e,t,i,s,r,0),vo(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function rx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Jf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(dx(l))}s.sort(ox);for(let r=0;r<s.length;r++)t=ax(s[r],t);return t}function ox(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ax(n,e){let t=lx(n,e);if(!t)return e;let i=Qf(t,n);return Us(i,i.next),Us(t,t.next)}function lx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(vr(n,t))return t;do{if(vr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Kf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);yo(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&cx(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function cx(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function hx(n,e,t,i){let s=n;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ux(s)}function ux(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Rh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Kf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Yr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Kf(n,e,t,i,s,r,o,a)}function fx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!px(n,e)&&(yo(n,e)&&yo(e,n)&&mx(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||vr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vr(n,e){return n.x===e.x&&n.y===e.y}function jf(n,e,t,i){let s=Ea(Bt(n,e,t)),r=Ea(Bt(n,e,i)),o=Ea(Bt(t,i,n)),a=Ea(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ta(n,t,e)||r===0&&Ta(n,i,e)||o===0&&Ta(t,n,i)||a===0&&Ta(t,e,i))}function Ta(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ea(n){return n>0?1:n<0?-1:0}function px(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&jf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function yo(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function mx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Qf(n,e){let t=Ch(n.i,n.x,n.y),i=Ch(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function tf(n,e,t,i){let s=Ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Mo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ch(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ph=class{static triangulate(e,t,i=2){return ex(e,t,i)}},Cs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];nf(e),sf(i,e);let o=e.length;t.forEach(nf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,sf(i,t[c]);let a=Ph.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function nf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var So=class n extends Ut{constructor(e=new _r([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:xx,S,M=!1,b,w,_,y;if(g){S=g.getSpacedPoints(h),M=!0,u=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,ie),w=new O,_=new O,y=new O}u||(p=0,d=0,m=0,x=0);let T=a.extractPoints(l),E=T.shape,R=T.holes;if(!Cs.isClockWise(E)){E=E.reverse();for(let ie=0,ye=R.length;ie<ye;ie++){let Ae=R[ie];Cs.isClockWise(Ae)&&(R[ie]=Ae.reverse())}}function D(ie){let Ae=10000000000000001e-36,ge=ie[0];for(let ae=1;ae<=ie.length;ae++){let Be=ae%ie.length,Oe=ie[Be],Ye=Oe.x-ge.x,Ge=Oe.y-ge.y,tt=Ye*Ye+Ge*Ge,k=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(ge.x),Math.abs(ge.y)),de=Ae*k*k;if(tt<=de){ie.splice(Be,1),ae--;continue}ge=Oe}}D(E),R.forEach(D);let P=R.length,U=E;for(let ie=0;ie<P;ie++){let ye=R[ie];E=E.concat(ye)}function F(ie,ye,Ae){return ye||ot("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ye,Ae)}let G=E.length;function V(ie,ye,Ae){let ge,ae,Be,Oe=ie.x-ye.x,Ye=ie.y-ye.y,Ge=Ae.x-ie.x,tt=Ae.y-ie.y,k=Oe*Oe+Ye*Ye,de=Oe*tt-Ye*Ge;if(Math.abs(de)>Number.EPSILON){let Pe=Math.sqrt(k),$e=Math.sqrt(Ge*Ge+tt*tt),ee=ye.x-Ye/Pe,nt=ye.y+Oe/Pe,ze=Ae.x-tt/$e,Ie=Ae.y+Ge/$e,L=((ze-ee)*tt-(Ie-nt)*Ge)/(Oe*tt-Ye*Ge);ge=ee+Oe*L-ie.x,ae=nt+Ye*L-ie.y;let A=ge*ge+ae*ae;if(A<=2)return new Ue(ge,ae);Be=Math.sqrt(A/2)}else{let Pe=!1;Oe>Number.EPSILON?Ge>Number.EPSILON&&(Pe=!0):Oe<-Number.EPSILON?Ge<-Number.EPSILON&&(Pe=!0):Math.sign(Ye)===Math.sign(tt)&&(Pe=!0),Pe?(ge=-Ye,ae=Oe,Be=Math.sqrt(k)):(ge=Oe,ae=Ye,Be=Math.sqrt(k/2))}return new Ue(ge/Be,ae/Be)}let z=[];for(let ie=0,ye=U.length,Ae=ye-1,ge=ie+1;ie<ye;ie++,Ae++,ge++)Ae===ye&&(Ae=0),ge===ye&&(ge=0),z[ie]=V(U[ie],U[Ae],U[ge]);let H=[],X,ce=z.concat();for(let ie=0,ye=P;ie<ye;ie++){let Ae=R[ie];X=[];for(let ge=0,ae=Ae.length,Be=ae-1,Oe=ge+1;ge<ae;ge++,Be++,Oe++)Be===ae&&(Be=0),Oe===ae&&(Oe=0),X[ge]=V(Ae[ge],Ae[Be],Ae[Oe]);H.push(X),ce=ce.concat(X)}let pe;if(p===0)pe=Cs.triangulateShape(U,R);else{let ie=[],ye=[];for(let Ae=0;Ae<p;Ae++){let ge=Ae/p,ae=d*Math.cos(ge*Math.PI/2),Be=m*Math.sin(ge*Math.PI/2)+x;for(let Oe=0,Ye=U.length;Oe<Ye;Oe++){let Ge=F(U[Oe],z[Oe],Be);be(Ge.x,Ge.y,-ae),ge===0&&ie.push(Ge)}for(let Oe=0,Ye=P;Oe<Ye;Oe++){let Ge=R[Oe];X=H[Oe];let tt=[];for(let k=0,de=Ge.length;k<de;k++){let Pe=F(Ge[k],X[k],Be);be(Pe.x,Pe.y,-ae),ge===0&&tt.push(Pe)}ge===0&&ye.push(tt)}}pe=Cs.triangulateShape(ie,ye)}let Z=pe.length,he=m+x;for(let ie=0;ie<G;ie++){let ye=u?F(E[ie],ce[ie],he):E[ie];M?(_.copy(b.normals[0]).multiplyScalar(ye.x),w.copy(b.binormals[0]).multiplyScalar(ye.y),y.copy(S[0]).add(_).add(w),be(y.x,y.y,y.z)):be(ye.x,ye.y,0)}for(let ie=1;ie<=h;ie++)for(let ye=0;ye<G;ye++){let Ae=u?F(E[ye],ce[ye],he):E[ye];M?(_.copy(b.normals[ie]).multiplyScalar(Ae.x),w.copy(b.binormals[ie]).multiplyScalar(Ae.y),y.copy(S[ie]).add(_).add(w),be(y.x,y.y,y.z)):be(Ae.x,Ae.y,f/h*ie)}for(let ie=p-1;ie>=0;ie--){let ye=ie/p,Ae=d*Math.cos(ye*Math.PI/2),ge=m*Math.sin(ye*Math.PI/2)+x;for(let ae=0,Be=U.length;ae<Be;ae++){let Oe=F(U[ae],z[ae],ge);be(Oe.x,Oe.y,f+Ae)}for(let ae=0,Be=R.length;ae<Be;ae++){let Oe=R[ae];X=H[ae];for(let Ye=0,Ge=Oe.length;Ye<Ge;Ye++){let tt=F(Oe[Ye],X[Ye],ge);M?be(tt.x,tt.y+S[h-1].y,S[h-1].x+Ae):be(tt.x,tt.y,f+Ae)}}}Se(),Ve();function Se(){let ie=s.length/3;if(u){let ye=0,Ae=G*ye;for(let ge=0;ge<Z;ge++){let ae=pe[ge];_e(ae[2]+Ae,ae[1]+Ae,ae[0]+Ae)}ye=h+p*2,Ae=G*ye;for(let ge=0;ge<Z;ge++){let ae=pe[ge];_e(ae[0]+Ae,ae[1]+Ae,ae[2]+Ae)}}else{for(let ye=0;ye<Z;ye++){let Ae=pe[ye];_e(Ae[2],Ae[1],Ae[0])}for(let ye=0;ye<Z;ye++){let Ae=pe[ye];_e(Ae[0]+G*h,Ae[1]+G*h,Ae[2]+G*h)}}i.addGroup(ie,s.length/3-ie,0)}function Ve(){let ie=s.length/3,ye=0;K(U,ye),ye+=U.length;for(let Ae=0,ge=R.length;Ae<ge;Ae++){let ae=R[Ae];K(ae,ye),ye+=ae.length}i.addGroup(ie,s.length/3-ie,1)}function K(ie,ye){let Ae=ie.length;for(;--Ae>=0;){let ge=Ae,ae=Ae-1;ae<0&&(ae=ie.length-1);for(let Be=0,Oe=h+p*2;Be<Oe;Be++){let Ye=G*Be,Ge=G*(Be+1),tt=ye+ge+Ye,k=ye+ae+Ye,de=ye+ae+Ge,Pe=ye+ge+Ge;De(tt,k,de,Pe)}}}function be(ie,ye,Ae){c.push(ie),c.push(ye),c.push(Ae)}function _e(ie,ye,Ae){qe(ie),qe(ye),qe(Ae);let ge=s.length/3,ae=v.generateTopUV(i,s,ge-3,ge-2,ge-1);je(ae[0]),je(ae[1]),je(ae[2])}function De(ie,ye,Ae,ge){qe(ie),qe(ye),qe(ge),qe(ye),qe(Ae),qe(ge);let ae=s.length/3,Be=v.generateSideWallUV(i,s,ae-6,ae-3,ae-2,ae-1);je(Be[0]),je(Be[1]),je(Be[3]),je(Be[1]),je(Be[2]),je(Be[3])}function qe(ie){s.push(c[ie*3+0]),s.push(c[ie*3+1]),s.push(c[ie*3+2])}function je(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _x(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ka[s.type]().fromJSON(s)),new n(i,e.options)}},xx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Ue(r,o),new Ue(a,c),new Ue(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ue(o,1-c),new Ue(l,1-f),new Ue(u,1-m),new Ue(x,1-g)]:[new Ue(a,1-c),new Ue(h,1-f),new Ue(d,1-m),new Ue(p,1-g)]}};function _x(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var bo=class n extends fo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},wo=class n extends Ut{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=dt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,f=new O,u=new Ue,d=new O,m=new O,x=new O,p=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let v=0;v<=t;v++){let S=i+v*h*s,M=Math.sin(S),b=Math.cos(S);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*M,f.y=e[w].y,f.z=e[w].x*b,o.push(f.x,f.y,f.z),u.x=v/t,u.y=w/(e.length-1),a.push(u.x,u.y);let _=c[3*w+0]*M,y=c[3*w+1],T=c[3*w+0]*b;l.push(_,y,T)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let M=S+v*e.length,b=M,w=M+e.length,_=M+e.length+1,y=M+1;r.push(b,w,y),r.push(_,y,w)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},yr=class n extends fo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ji=class n extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*u-o;for(let S=0;S<l;S++){let M=S*f-r;m.push(M,-v,0),x.push(0,0,1),p.push(S/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){let S=v+l*g,M=v+l*(g+1),b=v+1+l*(g+1),w=v+1+l*g;d.push(S,M,w),d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Rn=class n extends Ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new O,u=new O,d=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let v=[],S=g/i,M=o+S*a,b=e*Math.cos(M),w=Math.sqrt(e*e-b*b),_=0;g===0&&o===0?_=.5/t:g===i&&c===Math.PI&&(_=-.5/t);for(let y=0;y<=t;y++){let T=y/t,E=s+T*r;f.x=-w*Math.cos(E),f.y=b,f.z=w*Math.sin(E),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(T+_,1-S),v.push(l++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let S=h[g][v+1],M=h[g][v],b=h[g+1][v],w=h[g+1][v+1];(g!==0||o>0)&&d.push(S,M,w),(g!==i-1||c<Math.PI)&&d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Os=class n extends Ut{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],f=[],u=new O,d=new O,m=new O;for(let x=0;x<=i;x++){let p=o+x/i*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,v=(s+1)*(x-1)+p-1,S=(s+1)*(x-1)+p,M=(s+1)*x+p;c.push(g,v,M),c.push(v,S,M)}this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var To=class n extends Ut{constructor(e=new xo(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,c=new O,l=new Ue,h=new O,f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function x(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),v(),g()}function p(S){h=e.getPointAt(S/t,h);let M=o.normals[S],b=o.binormals[S];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,y=Math.sin(_),T=-Math.cos(_);c.x=T*M.x+y*b.x,c.y=T*M.y+y*b.y,c.z=T*M.z+y*b.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let b=(s+1)*(S-1)+(M-1),w=(s+1)*S+(M-1),_=(s+1)*S+M,y=(s+1)*(S-1)+M;m.push(b,w,y),m.push(w,_,y)}}function v(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)l.x=S/t,l.y=M/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ka[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rf(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=Vs(n[t]);for(let s in i)e[s]=i[s]}return e}function rf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var ep={clone:Vs,merge:gn},yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qa=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var el=class extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ar(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Aa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Eh:o=e,c=2*i-t;break;case Ah:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,S=(-1-d)*p+(1.5+d)*x+.5*m,M=d*p-d*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+v*o[l+b]+S*o[c+b]+M*o[f+b];return r}},il=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},sl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rl=class extends Ki{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[l+m],p=o[c+m],g=d*u+m*2,v=f[g],S=f[g+1],M=e*u+m*2,b=h[M],w=h[M+1],_=bx(i,t,v,b,s);r[m]=tp(_,x,S,w,p)}return r}};function tp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Sx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function bx(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=tp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Sx(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Aa(e.settings)&&(i.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return rt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Aa(this.settings)&&(of(this.settings.inTangents,e),of(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Aa(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ot("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ot("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&dg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ot("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let x=t[f+m];if(x!==t[u+m]||x!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Aa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function of(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function af(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ha;var ji=class extends Fn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=jr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};ol.prototype.ValueTypeName="color";var al=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};al.prototype.ValueTypeName="number";var ll=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Eo=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Fn{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=jr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};cl.prototype.ValueTypeName="vector";var hl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},np=new hl,ul=class{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=new O,Ca=new yn,li=new O,Ao=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ra,Ca,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ra,Ca,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new O,lf=new Ue,cf=new Ue,an=class extends Ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var dl=class extends Ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var lr=-90,cr=1,Mr=class extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new an(lr,cr,e,t);r.layers=this.layers,this.add(r);let o=new an(lr,cr,e,t);o.layers=this.layers,this.add(o);let a=new an(lr,cr,e,t);a.layers=this.layers,this.add(a);let c=new an(lr,cr,e,t);c.layers=this.layers,this.add(c);let l=new an(lr,cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},fl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var uu="\\[\\]\\.:\\/",wx=new RegExp("["+uu+"]","g"),du="[^"+uu+"]",Tx="[^"+uu.replace("\\.","")+"]",Ex=/((?:WC+[\/:])*)/.source.replace("WC",du),Ax=/(WCOD+)?/.source.replace("WCOD",Tx),Rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),Cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),Px=new RegExp("^"+Ex+Ax+Rx+Cx+"$"),Ix=["material","materials","bones","map"],Ih=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){let t=Px.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ix.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Ih;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _w=new Float32Array(1);var _u=class _u{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};_u.prototype.isMatrix2=!0;var Lh=_u;function fu(n,e,t,i){let s=Lx(i);switch(t){case jh:return n*e;case Ml:return n*e/s.components*s.byteLength;case Sl:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case bl:return n*e*2/s.components*s.byteLength;case Qh:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case wl:return n*e*4/s.components*s.byteLength;case Po:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case Rl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Pl:case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Il:case No:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zl:case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uo:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lx(n){switch(n){case kn:case $h:return{byteLength:1,components:1};case Tr:case Zh:case ni:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case ti:case _l:case Wn:return{byteLength:4,components:1};case Jh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function wp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Bx(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x=`#ifdef USE_BATCHING
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
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c_=`#define PI 3.141592653589793
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
} // validated`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
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
}`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I_=`#ifdef USE_ENVMAP
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
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O_=`PhysicalMaterial material;
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
#endif`,F_=`uniform sampler2D dfgLUT;
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
}`,k_=`
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
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
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q_=`#if defined( USE_MORPHCOLORS )
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
#endif`,ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`#ifdef USE_MORPHTARGETS
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
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
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
#endif`,cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wv=`float getShadowMask() {
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
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
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
#endif`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform float backgroundBlurriness;
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`#include <common>
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
}`,Yv=`#if DEPTH_PACKING == 3200
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
}`,qv=`#define DISTANCE
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
}`,$v=`#define DISTANCE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Qv=`#include <common>
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define MATCAP
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
}`,sy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,oy=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,ly=`#define PHONG
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
}`,cy=`#define STANDARD
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
}`,hy=`#define STANDARD
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
}`,uy=`#define TOON
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
}`,dy=`#define TOON
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
}`,fy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,_y=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:zx,alphahash_pars_fragment:Hx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Wx,alphatest_pars_fragment:Xx,aomap_fragment:Yx,aomap_pars_fragment:qx,batching_pars_vertex:$x,batching_vertex:Zx,begin_vertex:Jx,beginnormal_vertex:Kx,bsdfs:jx,iridescence_fragment:Qx,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:l_,common:c_,defaultnormal_vertex:h_,displacementmap_pars_vertex:u_,displacementmap_vertex:d_,emissivemap_fragment:f_,emissivemap_pars_fragment:p_,colorspace_fragment:m_,colorspace_pars_fragment:g_,envmap_fragment:x_,envmap_common_pars_fragment:__,envmap_pars_fragment:v_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:I_,envmap_vertex:M_,fog_vertex:S_,fog_pars_vertex:b_,fog_fragment:w_,fog_pars_fragment:T_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:A_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:C_,lights_pars_begin:P_,lights_toon_fragment:L_,lights_toon_pars_fragment:D_,lights_phong_fragment:N_,lights_phong_pars_fragment:U_,lights_physical_fragment:O_,lights_physical_pars_fragment:F_,lights_fragment_begin:k_,lights_fragment_maps:B_,lights_fragment_end:z_,lightprobes_pars_fragment:H_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:Y_,map_pars_fragment:q_,map_particle_fragment:$_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:K_,morphinstance_vertex:j_,morphcolor_vertex:Q_,morphnormal_vertex:ev,morphtarget_pars_vertex:tv,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:sv,normal_pars_fragment:rv,normal_pars_vertex:ov,normal_vertex:av,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:cv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:uv,iridescence_pars_fragment:dv,opaque_fragment:fv,packing:pv,premultiplied_alpha_fragment:mv,project_vertex:gv,dithering_fragment:xv,dithering_pars_fragment:_v,roughnessmap_fragment:vv,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Sv,shadowmap_vertex:bv,shadowmask_pars_fragment:wv,skinbase_vertex:Tv,skinning_pars_vertex:Ev,skinning_vertex:Av,skinnormal_vertex:Rv,specularmap_fragment:Cv,specularmap_pars_fragment:Pv,tonemapping_fragment:Iv,tonemapping_pars_fragment:Lv,transmission_fragment:Dv,transmission_pars_fragment:Nv,uv_pars_fragment:Uv,uv_pars_vertex:Ov,uv_vertex:Fv,worldpos_vertex:kv,background_vert:Bv,background_frag:zv,backgroundCube_vert:Hv,backgroundCube_frag:Vv,cube_vert:Gv,cube_frag:Wv,depth_vert:Xv,depth_frag:Yv,distance_vert:qv,distance_frag:$v,equirect_vert:Zv,equirect_frag:Jv,linedashed_vert:Kv,linedashed_frag:jv,meshbasic_vert:Qv,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:dy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:xy,sprite_frag:_y},We={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},pi={basic:{uniforms:gn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:gn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:gn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:gn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:gn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new it(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:gn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:gn([We.points,We.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:gn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:gn([We.common,We.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:gn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:gn([We.sprite,We.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:gn([We.common,We.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:gn([We.lights,We.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var nc={r:0,b:0,g:0},vy=new mt,Tp=new at;Tp.set(-1,0,0,0,1,0,0,0,1);function yy(n,e,t,i,s,r){let o=new it(0),a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(v){let S=!1,M=d(v);M===null?p(o,a):M&&M.isColor&&(p(M,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,S){let M=d(S);M&&M.isCubeTexture?(l===void 0&&(l=new gt(new Ot(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Vs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Tp),l.material.toneMapped=vt.getTransfer(M.colorSpace)!==bt,(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new gt(new Ji(2,2),new mn({name:"BackgroundMaterial",uniforms:Vs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=vt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(nc,hu(n)),t.buffers.color.setClear(nc.r,nc.g,nc.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:x,dispose:g}}function My(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(R,I,D,P,U){let F=!1,G=f(R,P,D,I);r!==G&&(r=G,l(r.object)),F=d(R,P,D,U),F&&m(R,P,D,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(R,I,D,P),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function f(R,I,D,P){let U=P.wireframe===!0,F=i[I.id];F===void 0&&(F={},i[I.id]=F);let G=R.isInstancedMesh===!0?R.id:0,V=F[G];V===void 0&&(V={},F[G]=V);let z=V[D.id];z===void 0&&(z={},V[D.id]=z);let H=z[U];return H===void 0&&(H=u(c()),z[U]=H),H}function u(R){let I=[],D=[],P=[];for(let U=0;U<t;U++)I[U]=0,D[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:P,object:R,attributes:{},index:null}}function d(R,I,D,P){let U=r.attributes,F=I.attributes,G=0,V=D.getAttributes();for(let z in V)if(V[z].location>=0){let X=U[z],ce=F[z];if(ce===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),X===void 0||X.attribute!==ce||ce&&X.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function m(R,I,D,P){let U={},F=I.attributes,G=0,V=D.getAttributes();for(let z in V)if(V[z].location>=0){let X=F[z];X===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(X=R.instanceColor));let ce={};ce.attribute=X,X&&X.data&&(ce.data=X.data),U[z]=ce,G++}r.attributes=U,r.attributesNum=G,r.index=P}function x(){let R=r.newAttributes;for(let I=0,D=R.length;I<D;I++)R[I]=0}function p(R){g(R,0)}function g(R,I){let D=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;D[R]=1,P[R]===0&&(n.enableVertexAttribArray(R),P[R]=1),U[R]!==I&&(n.vertexAttribDivisor(R,I),U[R]=I)}function v(){let R=r.newAttributes,I=r.enabledAttributes;for(let D=0,P=I.length;D<P;D++)I[D]!==R[D]&&(n.disableVertexAttribArray(D),I[D]=0)}function S(R,I,D,P,U,F,G){G===!0?n.vertexAttribIPointer(R,I,D,U,F):n.vertexAttribPointer(R,I,D,P,U,F)}function M(R,I,D,P){x();let U=P.attributes,F=D.getAttributes(),G=I.defaultAttributeValues;for(let V in F){let z=F[V];if(z.location>=0){let H=U[V];if(H===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let X=H.normalized,ce=H.itemSize,pe=e.get(H);if(pe===void 0)continue;let Z=pe.buffer,he=pe.type,Se=pe.bytesPerElement,Ve=he===n.INT||he===n.UNSIGNED_INT||H.gpuType===_l;if(H.isInterleavedBufferAttribute){let K=H.data,be=K.isInterleavedBuffer===!0?K.stride:K.itemSize,_e=H.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let De=0;De<z.locationSize;De++)g(z.location+De,K.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let De=0;De<z.locationSize;De++)p(z.location+De);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let De=0;De<z.locationSize;De++)S(z.location+De,ce/z.locationSize,he,X,be*Se,(_e+ce/z.locationSize*De)*Se,Ve)}else{if(H.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)g(z.location+K,H.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let K=0;K<z.locationSize;K++)p(z.location+K);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let K=0;K<z.locationSize;K++)S(z.location+K,ce/z.locationSize,he,X,ce*Se,ce/z.locationSize*K*Se,Ve)}}else if(G!==void 0){let X=G[V];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(z.location,X);break;case 3:n.vertexAttrib3fv(z.location,X);break;case 4:n.vertexAttrib4fv(z.location,X);break;default:n.vertexAttrib1fv(z.location,X)}}}}v()}function b(){T();for(let R in i){let I=i[R];for(let D in I){let P=I[D];for(let U in P){let F=P[U];for(let G in F)h(F[G].object),delete F[G];delete P[U]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;let I=i[R.id];for(let D in I){let P=I[D];for(let U in P){let F=P[U];for(let G in F)h(F[G].object),delete F[G];delete P[U]}}delete i[R.id]}function _(R){for(let I in i){let D=i[I];for(let P in D){let U=D[P];if(U[R.id]===void 0)continue;let F=U[R.id];for(let G in F)h(F[G].object),delete F[G];delete U[R.id]}}}function y(R){for(let I in i){let D=i[I],P=R.isInstancedMesh===!0?R.id:0,U=D[P];if(U!==void 0){for(let F in U){let G=U[F];for(let V in G)h(G[V].object),delete G[V];delete U[F]}delete D[P],Object.keys(D).length===0&&delete i[I]}}}function T(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Sy(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function by(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==ii&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let y=_===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==kn&&_!==Wn&&!y&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(rt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:w}}function wy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ei,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let v=r?0:i,S=v*4,M=g.clippingState||null;c.value=M,M=h(m,u,S,d);for(let b=0;b!==S;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=d+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,M=d;S!==x;++S,M+=4)o.copy(f[S]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ko=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new lo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Fs});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=vn),new Mr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ip=256,Ty=3,Ey=20,Ep=256,Ap=16,Ay=3,Ry=new O,Cy=new it,sc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Mr(1,10,null),this._boxMesh=new gt(new Ot(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Ry}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,m=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Cy));let p=new Mr(i,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ip,au(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===wr?this._setSize(e.image.length===0?ip:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=sp(e,!1,!1),i=Math.log2(e)-Ty;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=sp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===wr?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Py(),this._integrationMaterial=Iy());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ap);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Ay)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Ep*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ly());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function sp(n,e,t){return new ko(n,{minFilter:Ni,generateMipmaps:e,type:ni,colorSpace:Qr,depthBuffer:t})}function Bo(n,e,t){return new mn({name:n,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:Yt,blending:Fs,depthTest:!1,depthWrite:!1})}function Py(){return Bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ep}u

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
	`)}function Iy(){return Bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ap}},`

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
	`)}function Ly(){return Bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ey}
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
	`)}function rp(){return Bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function op(){return Bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dy(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ml||d===gl)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new ko(m.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===ml||d===gl,x=d===Bs||d===wr;if(m||x){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new sc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new sc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===ml?u.mapping=Bs:d===gl&&(u.mapping=wr),u}function c(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function l(u){let d=u.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Ny(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&qr("WebGLRenderer: "+i+" extension not supported."),s}}}function Uy(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function f(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?oo:ro,M=new S(Math.ceil(v/3)*6,1),b=M.array;if(x!==null){let _=x.array;g=x.version;for(let y=0,T=0;y<v;y+=3){let E=_[y+0],R=_[y+1],I=_[y+2];b[T++]=E,b[T++]=R,b[T++]=R,b[T++]=I,b[T++]=I,b[T++]=E}}else{g=p.version;for(let _=0,y=0;_<v;_+=3){let T=_+0,E=_+1,R=_+2;b[y++]=T,b[y++]=E,b[y++]=E,b[y++]=R,b[y++]=R,b[y++]=T}}M.version=g;let w=r.get(m);w&&e.remove(w),r.set(m,M)}function u(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Oy(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Fy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ky(n,e,t){let i=new WeakMap,s=new zt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let T=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*b*4*f),_=new io(w,M,b,f);_.type=Wn,_.needsUpdate=!0;let y=S*4;for(let E=0;E<f;E++){let R=p[E],I=g[E],D=v[E],P=M*b*4*E;for(let U=0;U<R.count;U++){let F=U*y;d===!0&&(s.fromBufferAttribute(R,U),w[P+F+0]=s.x,w[P+F+1]=s.y,w[P+F+2]=s.z,w[P+F+3]=0),m===!0&&(s.fromBufferAttribute(I,U),w[P+F+4]=s.x,w[P+F+5]=s.y,w[P+F+6]=s.z,w[P+F+7]=0),x===!0&&(s.fromBufferAttribute(D,U),w[P+F+8]=s.x,w[P+F+9]=s.y,w[P+F+10]=s.z,w[P+F+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new Ue(M,b)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function By(n,e,t,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var zy={[zh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[Gh]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function Hy(n,e,t,i,s,r){let o=new On(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Ut;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let f=new Qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new gt(h,f),d=new dl(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,S=[],M=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),c!==null&&c.setSize(b,w);for(let _=0;_<S.length;_++){let y=S[_];y.setSize&&y.setSize(b,w)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;let w=o.width,_=o.height;S.length>0&&a===null&&(a=new On(w,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}),c=new On(w,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&S.some(T=>T.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&l===null&&(l=new Di(w,_),r===!0&&(l.format=Ui,l.type=zs)),o.dispose(),o.depthTexture=y?l:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let T=0;T<S.length;T++){let E=S[T];E.setSize&&E.setSize(w,_),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(l)}},this.begin=function(b,w){if(p||b.toneMapping===di&&S.length===0)return!1;if(v=w,w!==null){let _=w.width,y=w.height;(o.width!==_||o.height!==y)&&this.setSize(_,y)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=di,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=g,p=!0;let _=o,y=a;for(let T=0;T<S.length;T++){let E=S[T];E.enabled!==!1&&(E.render(b,y,_,w),E.needsSwap!==!1&&(_=y,y=y===a?c:a))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,f.defines={},vt.getTransfer(m)===bt&&(f.defines.SRGB_TRANSFER="");let T=zy[x];T&&(f.defines[T]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(u,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Rp=new Mn,Cp=new Di(1,1),Pp=new ho(1),Ip=new io,Lp=new Wa,Dp=new lo,ap=[],lp=[],cp=new Float32Array(16),hp=new Float32Array(9),up=new Float32Array(4);function Rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ap[s];if(r===void 0&&(r=new Float32Array(s),ap[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oc(n,e){let t=lp[e];t===void 0&&(t=new Int32Array(e),lp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;up.set(i),n.uniformMatrix2fv(this.addr,!1,up),$t(t,i)}}function qy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;hp.set(i),n.uniformMatrix3fv(this.addr,!1,hp),$t(t,i)}}function $y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;cp.set(i),n.uniformMatrix4fv(this.addr,!1,cp),$t(t,i)}}function Zy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function Ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function Qy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function tM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function nM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function ac(n){return n.version===0&&(n.compareFunction=iu,n.needsUpdate=!0),n}function iM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ac(Cp):r=Rp,t.setTexture2D(e||r,s)}function sM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lp,s)}function rM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ac(Pp):r=Dp,t.setTextureCube(e||r,s)}function oM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ip,s)}function aM(n){switch(n){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return Yy;case 35675:return qy;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}function lM(n,e){n.uniform1fv(this.addr,e)}function cM(n,e){let t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function hM(n,e){let t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function uM(n,e){let t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function dM(n,e){let t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fM(n,e){let t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pM(n,e){let t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mM(n,e){n.uniform1iv(this.addr,e)}function gM(n,e){n.uniform2iv(this.addr,e)}function xM(n,e){n.uniform3iv(this.addr,e)}function _M(n,e){n.uniform4iv(this.addr,e)}function vM(n,e){n.uniform1uiv(this.addr,e)}function yM(n,e){n.uniform2uiv(this.addr,e)}function MM(n,e){n.uniform3uiv(this.addr,e)}function SM(n,e){n.uniform4uiv(this.addr,e)}function bM(n,e,t){let i=this.cache,s=e.length,r=oc(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ac(Cp):o=Rp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function wM(n,e,t){let i=this.cache,s=e.length,r=oc(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lp,r[o])}function TM(n,e,t){let i=this.cache,s=e.length,r=oc(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ac(Pp):o=Dp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function EM(n,e,t){let i=this.cache,s=e.length,r=oc(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ip,r[o])}function AM(n){switch(n){case 5126:return lM;case 35664:return cM;case 35665:return hM;case 35666:return uM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return xM;case 35669:case 35673:return _M;case 5125:return vM;case 36294:return yM;case 36295:return MM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return EM}}var Mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aM(t.type)}},Su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AM(t.type)}},bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},vu=/(\w+)(\])?(\[|\.)?/g;function dp(n,e){n.seq.push(e),n.map[e.id]=e}function RM(n,e,t){let i=n.name,s=i.length;for(vu.lastIndex=0;;){let r=vu.exec(i),o=vu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){dp(t,l===void 0?new Mu(a,n,e):new Su(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new bu(a),dp(t,f)),t=f}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);RM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function fp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var CM=37297,PM=0;function IM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var pp=new at;function LM(n){vt._getMatrix(pp,vt.workingColorSpace,n);let e=`mat3( ${pp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case eo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+IM(n.getShaderSource(e),a)}else return r}function DM(n,e){let t=LM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var NM={[zh]:"Linear",[Hh]:"Reinhard",[Vh]:"Cineon",[Gh]:"ACESFilmic",[Xh]:"AgX",[Yh]:"Neutral",[Wh]:"Custom"};function UM(n,e){let t=NM[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ic=new O;function OM(){vt.getLuminanceCoefficients(ic);let n=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function kM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fo(n){return n!==""}function gp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(zM,HM)}function HM(n,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wu(t)}var VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(n){return n.replace(VM,GM)}function GM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var WM={[Ro]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function XM(n){return WM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var YM={[wr]:"ENVMAP_MODE_REFRACTION"};function qM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $M={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function ZM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$M[n.combine]||"ENVMAP_BLENDING_NONE"}function JM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=XM(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qM(t),f=ZM(t),u=FM(t),d=kM(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fo).join(`
`),p.length>0&&(p+=`
`)):(x=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),p=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ut.tonemapping_pars_fragment:"",t.toneMapping!==di?UM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),OM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=wu(o),o=gp(o,t),o=xp(o,t),a=wu(a),a=gp(a,t),a=xp(a,t),o=_p(o),a=_p(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+o,S=g+p+a,M=fp(s,s.VERTEX_SHADER,v),b=fp(s,s.FRAGMENT_SHADER,S);s.attachShader(m,M),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(E){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(m)||"",I=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(b)||"",P=R.trim(),U=I.trim(),F=D.trim(),G=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,M,b);else{let z=mp(s,M,"vertex"),H=mp(s,b,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+z+`
`+H)}else P!==""?rt("WebGLProgram: Program Info Log:",P):(U===""||F==="")&&(V=!1);V&&(E.diagnostics={runnable:G,programLog:P,vertexShader:{log:U,prefix:x},fragmentShader:{log:F,prefix:p}})}s.deleteShader(M),s.deleteShader(b),_=new Ar(s,m),y=BM(s,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,CM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}var KM=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eu(e),t.set(e,i)),i}},Eu=class{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}};function jM(n){return n===ts||n===No||n===Uo}function QM(n,e,t,i,s,r){let o=new so,a=new Tu,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,T,E,R,I){let D=E.fog,P=R.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||U,F),V=u[_.type],z=i.precision;_.precision!==null&&(z=i.getMaxPrecision(_.precision),z!==_.precision&&rt("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));let H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,X=H!==void 0?H.length:0,ce=0;P.morphAttributes.position!==void 0&&(ce=1),P.morphAttributes.normal!==void 0&&(ce=2),P.morphAttributes.color!==void 0&&(ce=3);let pe,Z,he,Se;if(V){let Ce=pi[V];pe=Ce.vertexShader,Z=Ce.fragmentShader}else{pe=_.vertexShader,Z=_.fragmentShader;let Ce=a.getVertexShaderStage(_),Qe=a.getFragmentShaderStage(_);a.update(_,Ce,Qe),he=Ce.id,Se=Qe.id}let Ve=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),be=R.isInstancedMesh===!0,_e=R.isBatchedMesh===!0,De=!!_.map,qe=!!_.matcap,je=!!G,ie=je&&G.isPMREMTexture===!0,ye=!!_.aoMap,Ae=!!_.lightMap,ge=!!_.bumpMap&&_.wireframe===!1,ae=!!_.normalMap,Be=!!_.displacementMap,Oe=!!_.emissiveMap,Ye=!!_.metalnessMap,Ge=!!_.roughnessMap,tt=_.anisotropy>0,k=_.clearcoat>0,de=_.diffuseRoughness>0,Pe=_.dispersion>0,$e=_.retroreflectivity>0,ee=_.iridescence>0,nt=_.sheen>0,ze=_.transmission>0,Ie=tt&&!!_.anisotropyMap,L=k&&!!_.clearcoatMap,A=k&&!!_.clearcoatNormalMap,q=k&&!!_.clearcoatRoughnessMap,xe=de&&!!_.diffuseRoughnessMap,re=ee&&!!_.iridescenceMap,ve=ee&&!!_.iridescenceThicknessMap,we=nt&&!!_.sheenColorMap,ne=nt&&!!_.sheenRoughnessMap,se=!!_.specularMap,Ee=!!_.specularColorMap,N=!!_.specularIntensityMap,te=ze&&!!_.transmissionMap,j=ze&&!!_.thicknessMap,Te=!!_.gradientMap,Me=!!_.alphaMap,ue=_.alphaTest>0,me=!!_.alphaHash,Fe=!!_.extensions,oe=di;_.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(oe=n.toneMapping);let Ne=ie?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Re={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:pe,fragmentShader:Z,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:_e,batchingColor:_e&&R._colorsTexture!==null,instancing:be,instancingColor:be&&R.instanceColor!==null,instancingMorph:be&&R.morphTexture!==null,outputColorSpace:Ve===null?n.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:qe,envMap:je,envMapMode:je&&G.mapping,envMapPMREM:ie,envMapMaxLod:ie?Ne.length-1:null,envMapSize:ie?Ne[0].width:null,aoMap:ye,lightMap:Ae,bumpMap:ge,normalMap:ae,displacementMap:Be,emissiveMap:Oe,normalMapObjectSpace:ae&&_.normalMapType===Uf,normalMapTangentSpace:ae&&_.normalMapType===eu,packedNormalMap:ae&&_.normalMapType===eu&&jM(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ge,anisotropy:tt,anisotropyMap:Ie,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:q,diffuseRoughness:de,diffuseRoughnessMap:xe,dispersion:Pe,retroreflection:$e,iridescence:ee,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:nt,sheenColorMap:we,sheenRoughnessMap:ne,specularMap:se,specularColorMap:Ee,specularIntensityMap:N,transmission:ze,transmissionMap:te,thicknessMap:j,gradientMap:Te,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:Me,alphaTest:ue,alphaHash:me,combine:_.combine,mapUv:De&&d(_.map.channel),aoMapUv:ye&&d(_.aoMap.channel),lightMapUv:Ae&&d(_.lightMap.channel),bumpMapUv:ge&&d(_.bumpMap.channel),normalMapUv:ae&&d(_.normalMap.channel),displacementMapUv:Be&&d(_.displacementMap.channel),emissiveMapUv:Oe&&d(_.emissiveMap.channel),metalnessMapUv:Ye&&d(_.metalnessMap.channel),roughnessMapUv:Ge&&d(_.roughnessMap.channel),anisotropyMapUv:Ie&&d(_.anisotropyMap.channel),clearcoatMapUv:L&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&d(_.sheenRoughnessMap.channel),specularMapUv:se&&d(_.specularMap.channel),specularColorMapUv:Ee&&d(_.specularColorMap.channel),specularIntensityMapUv:N&&d(_.specularIntensityMap.channel),transmissionMapUv:te&&d(_.transmissionMap.channel),thicknessMapUv:j&&d(_.thicknessMap.channel),alphaMapUv:Me&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ae||tt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(De||Me),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:K,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ce,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&vt.getTransfer(_.map.colorSpace)===bt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&vt.getTransfer(_.emissiveMap.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gn,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Fe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function x(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)y.push(T),y.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(y,_),g(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let y=u[_.type],T;if(y){let E=pi[y];T=ep.clone(E.uniforms)}else T=_.uniforms;return T}function S(_,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new JM(n,y,_,s),l.push(T),h.set(y,T)),T}function M(_){if(--_.usedTimes===0){let y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:w}}function e1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function t1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,x,p,g){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},n[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=p,v.group=g),e++,v}function c(u,d,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let S=a(u,d,m,x,p,g);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):t.push(S)}function l(u,d,m,x,p,g){let v=a(u,d,m,x,p,g);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||t1),i.length>1&&i.sort(d||yp),s.length>1&&s.sort(d||yp)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function n1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Mp,n.set(i,[o])):s>=r.length?(o=new Mp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function i1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new it};break;case"SpotLight":t={position:new O,direction:new O,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function s1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var r1=0;function o1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a1(n){let e=new i1,t=s1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new mt,o=new mt;function a(l){let h=0,f=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,v=0,S=0,M=0,b=0,w=0,_=0,y=0,T=0,E=0;l.sort(o1);for(let I=0,D=l.length;I<D;I++){let P=l[I],U=P.color,F=P.intensity,G=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ts?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=U.r*F,f+=U.g*F,u+=U.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],F);E++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,X=t.get(P);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[m]=X,i.sunShadowMap[m]=V;let ce=H.getViewportCount();for(let pe=0;pe<ce;pe++)i.sunShadowMatrix[x+pe]=H.getMatrix(pe),i.sunShadowCascade[x+pe]=H._cascadeData[pe];x+=ce,m++}i.sun[d]=z,d++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,X=t.get(P);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=z,p++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(F),z.distance=G,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[v]=z;let H=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,H.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=H.matrix,P.castShadow){let X=t.get(P);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=V,_++}v++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(U).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=z,S++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let H=P.shadow,X=t.get(P);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=z,g++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[M]=z,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let R=i.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==S||R.hemiLength!==M||R.numSunShadows!==m||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==_||R.numSpotMaps!==y||R.numLightProbes!==E)&&(i.sun.length=d,i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,R.sunLength=d,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=S,R.hemiLength=M,R.numSunShadows=m,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=_,R.numSpotMaps=y,R.numLightProbes=E,i.version=r1++)}function c(l,h){let f=0,u=0,d=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let M=l[v];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(M.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:i}}function Sp(n){let e=new a1(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function l1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sp(n),e.set(s,[a])):r>=o.length?(a=new Sp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`,u1=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],d1=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],bp=new mt,Oo=new O,yu=new O;function f1(n,e,t){let i=new Ds,s=new Ue,r=new Ue,o=new zt,a=new el,c=new tl,l={},h=t.maxTextureSize,f={[es]:Yt,[Yt]:es,[Gn]:Gn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ut;m.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let g=this.type;this.render=function(w,_,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===df&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ro);let T=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Fs),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=g!==this.type;D&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=w.length;P<U;P++){let F=w[P],G=F.shadow;if(G===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let V=G.getFrameExtents();s.multiply(V),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,G.mapSize.y=r.y));let z=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=z,G.map===null||D===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Sr){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new On(s.x,s.y,{format:ts,type:ni,minFilter:vn,magFilter:vn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Di(s.x,s.y,Wn),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt}else F.isPointLight?(G.map=new ko(s.x),G.map.depthTexture=new ho(s.x,ti)):(G.map=new On(s.x,s.y),G.map.depthTexture=new Di(s.x,s.y,ti)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ii,this.type===Ro?(G.map.depthTexture.compareFunction=z?nu:tu,G.map.depthTexture.minFilter=vn,G.map.depthTexture.magFilter=vn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let H=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();F.isPointLight!==!0&&G.updateMatrices(F,y);let X=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let ce=0;ce<H;ce++){let pe=G.getCamera(ce);if(F.isPointLight){let Z=G.camera,he=G.matrix,Se=F.distance||Z.far;Se!==Z.far&&(Z.far=Se,Z.updateProjectionMatrix()),Oo.setFromMatrixPosition(F.matrixWorld),Z.position.copy(Oo),yu.copy(Z.position),yu.add(u1[ce]),Z.up.copy(d1[ce]),Z.lookAt(yu),Z.updateMatrixWorld(),he.makeTranslation(-Oo.x,-Oo.y,-Oo.z),bp.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bp,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(G.map),n.clear());let Z=G.getViewport(ce);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(o)}i=G.getFrustum(ce),M(_,y,pe,F,X,this.type)}G.isPointLightShadow!==!0&&this.type===Sr&&v(G,y),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(T,E,R)};function v(w,_){let y=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new On(s.x,s.y,{format:ts,type:ni}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,y,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,y,d,x,null)}function S(w,_,y,T){let E=null,R=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?c:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let I=E.uuid,D=_.uuid,P=l[I];P===void 0&&(P={},l[I]=P);let U=P[D];U===void 0&&(U=E.clone(),P[D]=U,_.addEventListener("dispose",b)),E=U}if(E.visible=_.visible,E.wireframe=_.wireframe,T===Sr?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:f[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=n.properties.get(E);I.light=y}return E}function M(w,_,y,T,E,R){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Sr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let P=e.update(w),U=w.material;if(Array.isArray(U)){let F=P.groups;for(let G=0,V=F.length;G<V;G++){let z=F[G],H=U[z.materialIndex];if(H&&H.visible){let X=S(w,H,T,R);w.onBeforeShadow(n,w,_,y,P,X,z),n.renderBufferDirect(y,null,P,X,w,z),w.onAfterShadow(n,w,_,y,P,X,z)}}}else if(U.visible){let F=S(w,U,T,R);w.onBeforeShadow(n,w,_,y,P,F,null),n.renderBufferDirect(y,null,P,F,w,null),w.onAfterShadow(n,w,_,y,P,F,null)}}let D=w.children;for(let P=0,U=D.length;P<U;P++)M(D[P],_,y,T,E,R)}function b(w){w.target.removeEventListener("dispose",b);for(let y in l){let T=l[y],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function p1(n,e){function t(){let N=!1,te=new zt,j=null,Te=new zt(0,0,0,0);return{setMask:function(Me){j!==Me&&!N&&(n.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){N=Me},setClear:function(Me,ue,me,Fe,oe){oe===!0&&(Me*=Fe,ue*=Fe,me*=Fe),te.set(Me,ue,me,Fe),Te.equals(te)===!1&&(n.clearColor(Me,ue,me,Fe),Te.copy(te))},reset:function(){N=!1,j=null,Te.set(-1,0,0,0)}}}function i(){let N=!1,te=!1,j=null,Te=null,Me=null;return{setReversed:function(ue){if(te!==ue){let me=e.get("EXT_clip_control");ue?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=ue;let Fe=Me;Me=null,this.setClear(Fe)}},getReversed:function(){return te},setTest:function(ue){ue?K(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ue){j!==ue&&!N&&(n.depthMask(ue),j=ue)},setFunc:function(ue){if(te&&(ue=Yf[ue]),Te!==ue){switch(ue){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Na:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Oa:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=ue}},setLocked:function(ue){N=ue},setClear:function(ue){Me!==ue&&(Me=ue,te&&(ue=1-ue),n.clearDepth(ue))},reset:function(){N=!1,j=null,Te=null,Me=null,te=!1}}}function s(){let N=!1,te=null,j=null,Te=null,Me=null,ue=null,me=null,Fe=null,oe=null;return{setTest:function(Ne){N||(Ne?K(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ne){te!==Ne&&!N&&(n.stencilMask(Ne),te=Ne)},setFunc:function(Ne,Re,Ce){(j!==Ne||Te!==Re||Me!==Ce)&&(n.stencilFunc(Ne,Re,Ce),j=Ne,Te=Re,Me=Ce)},setOp:function(Ne,Re,Ce){(ue!==Ne||me!==Re||Fe!==Ce)&&(n.stencilOp(Ne,Re,Ce),ue=Ne,me=Re,Fe=Ce)},setLocked:function(Ne){N=Ne},setClear:function(Ne){oe!==Ne&&(n.clearStencil(Ne),oe=Ne)},reset:function(){N=!1,te=null,j=null,Te=null,Me=null,ue=null,me=null,Fe=null,oe=null}}}let r=new t,o=new i,a=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],x=null,p=!1,g=null,v=null,S=null,M=null,b=null,w=null,_=null,y=new it(0,0,0),T=0,E=!1,R=null,I=null,D=null,P=null,U=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,V=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=V>=2);let H=null,X={},ce=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Z=new zt().fromArray(ce),he=new zt().fromArray(pe);function Se(N,te,j,Te){let Me=new Uint8Array(4),ue=n.createTexture();n.bindTexture(N,ue),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<j;me++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(te+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ue}let Ve={};Ve[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Ve[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ve[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ve[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(ur),ge(!1),ae(Dh),K(n.CULL_FACE),ye(Fs);function K(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function be(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function _e(N,te){return u[N]!==te?(n.bindFramebuffer(N,te),u[N]=te,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function De(N,te){let j=m,Te=!1;if(N){j=d.get(te),j===void 0&&(j=[],d.set(te,j));let Me=N.textures;if(j.length!==Me.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,me=Me.length;ue<me;ue++)j[ue]=n.COLOR_ATTACHMENT0+ue;j.length=Me.length,Te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Te=!0);Te&&n.drawBuffers(j)}function qe(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let je={[ks]:n.FUNC_ADD,[pf]:n.FUNC_SUBTRACT,[mf]:n.FUNC_REVERSE_SUBTRACT};je[gf]=n.MIN,je[xf]=n.MAX;let ie={[_f]:n.ZERO,[vf]:n.ONE,[yf]:n.SRC_COLOR,[Fh]:n.SRC_ALPHA,[Ef]:n.SRC_ALPHA_SATURATE,[wf]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[Mf]:n.ONE_MINUS_SRC_COLOR,[kh]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[bf]:n.ONE_MINUS_DST_ALPHA,[Af]:n.CONSTANT_COLOR,[Rf]:n.ONE_MINUS_CONSTANT_COLOR,[Cf]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(N,te,j,Te,Me,ue,me,Fe,oe,Ne){if(N===Fs){p===!0&&(be(n.BLEND),p=!1);return}if(p===!1&&(K(n.BLEND),p=!0),N!==ff){if(N!==g||Ne!==E){if((v!==ks||b!==ks)&&(n.blendEquation(n.FUNC_ADD),v=ks,b=ks),Ne)switch(N){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",N);break}else switch(N){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uh:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",N);break}S=null,M=null,w=null,_=null,y.set(0,0,0),T=0,g=N,E=Ne}return}Me=Me||te,ue=ue||j,me=me||Te,(te!==v||Me!==b)&&(n.blendEquationSeparate(je[te],je[Me]),v=te,b=Me),(j!==S||Te!==M||ue!==w||me!==_)&&(n.blendFuncSeparate(ie[j],ie[Te],ie[ue],ie[me]),S=j,M=Te,w=ue,_=me),(Fe.equals(y)===!1||oe!==T)&&(n.blendColor(Fe.r,Fe.g,Fe.b,oe),y.copy(Fe),T=oe),g=N,E=!1}function Ae(N,te){N.side===Gn?be(n.CULL_FACE):K(n.CULL_FACE);let j=N.side===Yt;te&&(j=!j),ge(j),N.blending===br&&N.transparent===!1?ye(Fs):ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Te=N.stencilWrite;a.setTest(Te),Te&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function ae(N){N!==hf?(K(n.CULL_FACE),N!==I&&(N===Dh?n.cullFace(n.BACK):N===uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),I=N}function Be(N){N!==D&&(G&&n.lineWidth(N),D=N)}function Oe(N,te,j){N?(K(n.POLYGON_OFFSET_FILL),(P!==te||U!==j)&&(P=te,U=j,o.getReversed()&&(te=-te,j=-j),n.polygonOffset(te,j))):be(n.POLYGON_OFFSET_FILL)}function Ye(N){N?K(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ge(N){N===void 0&&(N=n.TEXTURE0+F-1),H!==N&&(n.activeTexture(N),H=N)}function tt(N,te,j){j===void 0&&(H===null?j=n.TEXTURE0+F-1:j=H);let Te=X[j];Te===void 0&&(Te={type:void 0,texture:void 0},X[j]=Te),(Te.type!==N||Te.texture!==te)&&(H!==j&&(n.activeTexture(j),H=j),n.bindTexture(N,te||Ve[N]),Te.type=N,Te.texture=te)}function k(){let N=X[H];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function Pe(){try{n.compressedTexImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function $e(){try{n.texSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function ee(){try{n.texSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function Ie(){try{n.texStorage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function L(){try{n.texStorage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function A(){try{n.texImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function q(){try{n.texImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function xe(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function re(N,te){f[N]!==te&&(n.pixelStorei(N,te),f[N]=te)}function ve(N){Z.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function we(N){he.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function ne(N,te){let j=l.get(te);j===void 0&&(j=new WeakMap,l.set(te,j));let Te=j.get(N);Te===void 0&&(Te=n.getUniformBlockIndex(te,N.name),n.uniformBlockBinding(te,Te,Te),j.set(N,Te))}function se(N,te,j){let Me=l.get(te).get(N);c[Me]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,Me,j),c[Me]=j)}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},H=null,X={},u={},c={},d=new WeakMap,m=[],x=null,p=!1,g=null,v=null,S=null,M=null,b=null,w=null,_=null,y=new it(0,0,0),T=0,E=!1,R=null,I=null,D=null,P=null,U=null,Z.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:be,bindFramebuffer:_e,drawBuffers:De,useProgram:qe,setBlending:ye,setMaterial:Ae,setFlipSided:ge,setCullFace:ae,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:Ye,activeTexture:Ge,bindTexture:tt,unbindTexture:k,compressedTexImage2D:de,compressedTexImage3D:Pe,texImage2D:A,texImage3D:q,pixelStorei:re,getParameter:xe,updateUBOMapping:ne,uniformBlockBinding:se,texStorage2D:Ie,texStorage3D:L,texSubImage2D:$e,texSubImage3D:ee,compressedTexSubImage2D:nt,compressedTexSubImage3D:ze,scissor:ve,viewport:we,reset:Ee}}function m1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,x=new FinalizationRegistry(L=>m.delete(L)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return p?new OffscreenCanvas(L,A):no("canvas")}function v(L,A,q){let xe=1,re=Ie(L);if((re.width>q||re.height>q)&&(xe=q/Math.max(re.width,re.height)),xe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ve=Math.floor(xe*re.width),we=Math.floor(xe*re.height);u===void 0&&(u=g(ve,we));let ne=A?g(ve,we):u;return ne.width=ve,ne.height=we,ne.getContext("2d").drawImage(L,0,0,ve,we),rt("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ve+"x"+we+")."),ne}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function S(L){return L.generateMipmaps}function M(L){n.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(L,A,q,xe,re,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let we;xe&&(we=e.get("EXT_texture_norm16"),we||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=A;if(A===n.RED&&(q===n.FLOAT&&(ne=n.R32F),q===n.HALF_FLOAT&&(ne=n.R16F),q===n.UNSIGNED_BYTE&&(ne=n.R8),q===n.UNSIGNED_SHORT&&we&&(ne=we.R16_EXT),q===n.SHORT&&we&&(ne=we.R16_SNORM_EXT)),A===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.R8UI),q===n.UNSIGNED_SHORT&&(ne=n.R16UI),q===n.UNSIGNED_INT&&(ne=n.R32UI),q===n.BYTE&&(ne=n.R8I),q===n.SHORT&&(ne=n.R16I),q===n.INT&&(ne=n.R32I)),A===n.RG&&(q===n.FLOAT&&(ne=n.RG32F),q===n.HALF_FLOAT&&(ne=n.RG16F),q===n.UNSIGNED_BYTE&&(ne=n.RG8),q===n.UNSIGNED_SHORT&&we&&(ne=we.RG16_EXT),q===n.SHORT&&we&&(ne=we.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RG8UI),q===n.UNSIGNED_SHORT&&(ne=n.RG16UI),q===n.UNSIGNED_INT&&(ne=n.RG32UI),q===n.BYTE&&(ne=n.RG8I),q===n.SHORT&&(ne=n.RG16I),q===n.INT&&(ne=n.RG32I)),A===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),q===n.UNSIGNED_INT&&(ne=n.RGB32UI),q===n.BYTE&&(ne=n.RGB8I),q===n.SHORT&&(ne=n.RGB16I),q===n.INT&&(ne=n.RGB32I)),A===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),q===n.UNSIGNED_INT&&(ne=n.RGBA32UI),q===n.BYTE&&(ne=n.RGBA8I),q===n.SHORT&&(ne=n.RGBA16I),q===n.INT&&(ne=n.RGBA32I)),A===n.RGB&&(q===n.UNSIGNED_SHORT&&we&&(ne=we.RGB16_EXT),q===n.SHORT&&we&&(ne=we.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),A===n.RGBA){let se=ve?eo:vt.getTransfer(re);q===n.FLOAT&&(ne=n.RGBA32F),q===n.HALF_FLOAT&&(ne=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ne=se===bt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&we&&(ne=we.RGBA16_EXT),q===n.SHORT&&we&&(ne=we.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(L,A){let q;return L?A===null||A===ti||A===zs?q=n.DEPTH24_STENCIL8:A===Wn?q=n.DEPTH32F_STENCIL8:A===Tr&&(q=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ti||A===zs?q=n.DEPTH_COMPONENT24:A===Wn?q=n.DEPTH_COMPONENT32F:A===Tr&&(q=n.DEPTH_COMPONENT16),q}function y(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Qt&&L.minFilter!==vn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function T(L){let A=new WeakRef(L);i.get(L).__ref=A,m.add(A),x.register(L,A,A)}function E(L){let A=i.get(L).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function R(L){D(L.target)}function I(L){P(L.target)}function D(L){L.removeEventListener("dispose",R),E(L),F(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function P(L){L.removeEventListener("dispose",I),E(L),V(L)}function U(){for(let L of m){let A=L.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):D(A))}m.clear(),f.clear()}function F(L){let A=i.get(L);if(A.__webglInit===void 0)return;let q=L.source,xe=d.get(q);if(xe){let re=xe[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&G(L),Object.keys(xe).length===0&&d.delete(q)}i.remove(L)}function G(L){let A=i.get(L);n.deleteTexture(A.__webglTexture);let q=L.source,xe=d.get(q);delete xe[A.__cacheKey],o.memory.textures--}function V(L){let A=i.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();let q=L.depthTexture;if(q&&q.renderTarget===L&&D(q),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let ve=0;ve<A.__webglFramebuffer[re].length;ve++)n.deleteFramebuffer(A.__webglFramebuffer[re][ve]);else n.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)n.deleteFramebuffer(A.__webglFramebuffer[re]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let xe=L.textures;for(let re=0,ve=xe.length;re<ve;re++){let we=i.get(xe[re]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(xe[re])}i.remove(L)}let z=0;function H(){z=0}function X(){return z}function ce(L){z=L}function pe(){let L=z;return L>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,L}function Z(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function he(L,A){let q=i.get(L);if(L.isVideoTexture&&nt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let xe=L.image;if(xe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(q,L,A);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+A)}function Se(L,A){let q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Ae(q,L,A);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+A)}function Ve(L,A){let q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Ae(q,L,A);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+A)}function K(L,A){let q=i.get(L);if(L.version>0&&q.__version!==L.version){ge(q,L,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+A)}let be={[Ba]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},_e={[Qt]:n.NEAREST,[Df]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[xl]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},De={[Ff]:n.NEVER,[iu]:n.ALWAYS,[kf]:n.LESS,[tu]:n.LEQUAL,[Bf]:n.EQUAL,[nu]:n.GEQUAL,[zf]:n.GREATER,[Hf]:n.NOTEQUAL};function qe(L,A){if(A.type===Wn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===vn||A.magFilter===xl||A.magFilter===Co||A.magFilter===Ni||A.minFilter===vn||A.minFilter===xl||A.minFilter===Co||A.minFilter===Ni)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,be[A.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,be[A.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,be[A.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,_e[A.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,_e[A.minFilter]),A.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,De[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Qt||A.minFilter!==Co&&A.minFilter!==Ni||A.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function je(L,A){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",R),T(A));let xe=A.source,re=d.get(xe);re===void 0&&(re={},d.set(xe,re));let ve=Z(A);if(ve!==L.__cacheKey){re[ve]===void 0&&(re[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ve].usedTimes++;let we=re[L.__cacheKey];we!==void 0&&(re[L.__cacheKey].usedTimes--,we.usedTimes===0&&G(A)),L.__cacheKey=ve,L.__webglTexture=re[ve].texture}return q}function ie(L,A,q){return Math.floor(Math.floor(L/q)/A)}function ye(L,A,q,xe){let ve=L.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,q,xe,A.data);else{ve.sort((N,te)=>N.start-te.start);let we=0;for(let N=1;N<ve.length;N++){let te=ve[we],j=ve[N],Te=te.start+te.count,Me=ie(j.start,A.width,4),ue=ie(te.start,A.width,4);j.start<=Te+1&&Me===ue&&ie(j.start+j.count-1,A.width,4)===Me?te.count=Math.max(te.count,j.start+j.count-te.start):(++we,ve[we]=j)}ve.length=we+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let N=0,te=ve.length;N<te;N++){let j=ve[N],Te=Math.floor(j.start/4),Me=Math.ceil(j.count/4),ue=Te%A.width,me=Math.floor(Te/A.width),Fe=Me,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,me),t.texSubImage2D(n.TEXTURE_2D,0,ue,me,Fe,oe,q,xe,A.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Ae(L,A,q){let xe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=n.TEXTURE_3D);let re=je(L,A),ve=A.source;t.bindTexture(xe,L.__webglTexture,n.TEXTURE0+q);let we=i.get(ve);if(ve.version!==we.__version||re===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let oe=vt.getPrimaries(vt.workingColorSpace),Ne=A.colorSpace===Oi?null:vt.getPrimaries(A.colorSpace),Re=A.colorSpace===Oi||oe===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let se=v(A.image,!1,s.maxTextureSize);se=ze(A,se);let Ee=r.convert(A.format,A.colorSpace),N=r.convert(A.type),te=w(A.internalFormat,Ee,N,A.normalized,A.colorSpace,A.isVideoTexture);qe(xe,A);let j,Te=A.mipmaps,Me=A.isVideoTexture!==!0,ue=we.__version===void 0||re===!0,me=ve.dataReady,Fe=y(A,se);if(A.isDepthTexture)te=_(A.format===Ui,A.type),ue&&(Me?t.texStorage2D(n.TEXTURE_2D,1,te,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,te,se.width,se.height,0,Ee,N,null));else if(A.isDataTexture)if(Te.length>0){Me&&ue&&t.texStorage2D(n.TEXTURE_2D,Fe,te,Te[0].width,Te[0].height);for(let oe=0,Ne=Te.length;oe<Ne;oe++)j=Te[oe],Me?me&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,j.width,j.height,Ee,N,j.data):t.texImage2D(n.TEXTURE_2D,oe,te,j.width,j.height,0,Ee,N,j.data);A.generateMipmaps=!1}else Me?(ue&&t.texStorage2D(n.TEXTURE_2D,Fe,te,se.width,se.height),me&&ye(A,se,Ee,N)):t.texImage2D(n.TEXTURE_2D,0,te,se.width,se.height,0,Ee,N,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Me&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,te,Te[0].width,Te[0].height,se.depth);for(let oe=0,Ne=Te.length;oe<Ne;oe++)if(j=Te[oe],A.format!==ii)if(Ee!==null)if(Me){if(me)if(A.layerUpdates.size>0){let Re=fu(j.width,j.height,A.format,A.type);for(let Ce of A.layerUpdates){let Qe=j.data.subarray(Ce*Re/j.data.BYTES_PER_ELEMENT,(Ce+1)*Re/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ce,j.width,j.height,1,Ee,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,j.width,j.height,se.depth,Ee,j.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,te,j.width,j.height,se.depth,0,j.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,j.width,j.height,se.depth,Ee,N,j.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,te,j.width,j.height,se.depth,0,Ee,N,j.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Me&&ue&&t.texStorage2D(n.TEXTURE_2D,Fe,te,Te[0].width,Te[0].height);for(let oe=0,Ne=Te.length;oe<Ne;oe++)j=Te[oe],A.format!==ii?Ee!==null?Me?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,j.width,j.height,Ee,j.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,te,j.width,j.height,0,j.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?me&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,j.width,j.height,Ee,N,j.data):t.texImage2D(n.TEXTURE_2D,oe,te,j.width,j.height,0,Ee,N,j.data)}else if(A.isDataArrayTexture)if(Me){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,te,se.width,se.height,se.depth),me)if(A.layerUpdates.size>0){let oe=fu(se.width,se.height,A.format,A.type);for(let Ne of A.layerUpdates){let Re=se.data.subarray(Ne*oe/se.data.BYTES_PER_ELEMENT,(Ne+1)*oe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,se.width,se.height,1,Ee,N,Re)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ee,N,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,se.width,se.height,se.depth,0,Ee,N,se.data);else if(A.isData3DTexture)Me?(ue&&t.texStorage3D(n.TEXTURE_3D,Fe,te,se.width,se.height,se.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ee,N,se.data)):t.texImage3D(n.TEXTURE_3D,0,te,se.width,se.height,se.depth,0,Ee,N,se.data);else if(A.isFramebufferTexture){if(ue)if(Me)t.texStorage2D(n.TEXTURE_2D,Fe,te,se.width,se.height);else{let oe=se.width,Ne=se.height;for(let Re=0;Re<Fe;Re++)t.texImage2D(n.TEXTURE_2D,Re,te,oe,Ne,0,Ee,N,null),oe>>=1,Ne>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),se.parentNode!==oe){oe.appendChild(se),f.add(A),oe.onpaint=Ne=>{let Re=Ne.changedElements;for(let Ce of f)Re.includes(Ce.image)&&(Ce.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Re=n.RGBA,Ce=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,Ce,Qe,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Me&&ue){let oe=Ie(Te[0]);t.texStorage2D(n.TEXTURE_2D,Fe,te,oe.width,oe.height)}for(let oe=0,Ne=Te.length;oe<Ne;oe++)j=Te[oe],Me?me&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ee,N,j):t.texImage2D(n.TEXTURE_2D,oe,te,Ee,N,j);A.generateMipmaps=!1}else if(Me){if(ue){let oe=Ie(se);t.texStorage2D(n.TEXTURE_2D,Fe,te,oe.width,oe.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,N,se)}else t.texImage2D(n.TEXTURE_2D,0,te,Ee,N,se);S(A)&&A.mipmapsAutoUpdate===!0&&M(xe),we.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ge(L,A,q){if(A.image.length!==6)return;let xe=je(L,A),re=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+q);let ve=i.get(re);if(re.version!==ve.__version||xe===!0){t.activeTexture(n.TEXTURE0+q);let we=vt.getPrimaries(vt.workingColorSpace),ne=A.colorSpace===Oi?null:vt.getPrimaries(A.colorSpace),se=A.colorSpace===Oi||we===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,N=A.image[0]&&A.image[0].isDataTexture,te=[];for(let Ce=0;Ce<6;Ce++)!Ee&&!N?te[Ce]=v(A.image[Ce],!0,s.maxCubemapSize):te[Ce]=N?A.image[Ce].image:A.image[Ce],te[Ce]=ze(A,te[Ce]);let j=te[0],Te=r.convert(A.format,A.colorSpace),Me=r.convert(A.type),ue=w(A.internalFormat,Te,Me,A.normalized,A.colorSpace),me=A.isVideoTexture!==!0,Fe=ve.__version===void 0||xe===!0,oe=re.dataReady,Ne=y(A,j);qe(n.TEXTURE_CUBE_MAP,A);let Re;if(A.isDepthTexture){if(ue=_(A.format===Ui,A.type),Fe)if(me)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ue,j.width,j.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ue,j.width,j.height,0,Te,Me,null)}else if(Ee){me&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ue,j.width,j.height);for(let Ce=0;Ce<6;Ce++){Re=te[Ce].mipmaps;for(let Qe=0;Qe<Re.length;Qe++){let ct=Re[Qe];A.format!==ii?Te!==null?me?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe,0,0,ct.width,ct.height,Te,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe,ue,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe,0,0,ct.width,ct.height,Te,Me,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe,ue,ct.width,ct.height,0,Te,Me,ct.data)}}}else{if(Re=A.mipmaps,me&&Fe){Re.length>0&&Ne++;let Ce=Ie(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ue,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(N){me?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,te[Ce].width,te[Ce].height,Te,Me,te[Ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ue,te[Ce].width,te[Ce].height,0,Te,Me,te[Ce].data);for(let Qe=0;Qe<Re.length;Qe++){let Tt=Re[Qe].image[Ce].image;me?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe+1,0,0,Tt.width,Tt.height,Te,Me,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe+1,ue,Tt.width,Tt.height,0,Te,Me,Tt.data)}}else{me?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Te,Me,te[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ue,Te,Me,te[Ce]);for(let Qe=0;Qe<Re.length;Qe++){let ct=Re[Qe];me?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe+1,0,0,Te,Me,ct.image[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe+1,ue,Te,Me,ct.image[Ce])}}}S(A)&&A.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ve.__version=re.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ae(L,A,q,xe,re,ve){let we=r.convert(q.format,q.colorSpace),ne=r.convert(q.type),se=w(q.internalFormat,we,ne,q.normalized,q.colorSpace),Ee=i.get(A),N=i.get(q);if(N.__renderTarget=A,!Ee.__hasExternalTextures){let te=Math.max(1,A.width>>ve),j=Math.max(1,A.height>>ve);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ve,se,te,j,A.depth,0,we,ne,null):t.texImage2D(re,ve,se,te,j,0,we,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ee(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,re,N.__webglTexture,0,$e(A)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,re,N.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(L,A,q){if(n.bindRenderbuffer(n.RENDERBUFFER,L),A.depthBuffer){let xe=A.depthTexture,re=xe&&xe.isDepthTexture?xe.type:null,ve=_(A.stencilBuffer,re),we=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ee(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e(A),ve,A.width,A.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e(A),ve,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,L)}else{let xe=A.textures;for(let re=0;re<xe.length;re++){let ve=xe[re],we=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),se=w(ve.internalFormat,we,ne,ve.normalized,ve.colorSpace);ee(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e(A),se,A.width,A.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e(A),se,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,se,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(L,A,q){let xe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=i.get(A.depthTexture);re.__renderTarget=A;let ve=xe?A.depthTexture.image[0]:A.depthTexture.image;(!re.__webglTexture||ve.width!==A.width||ve.height!==A.height)&&(ve.width=A.width,ve.height=A.height,A.depthTexture.needsUpdate=!0),xe?K(A.depthTexture,0):he(A.depthTexture,0);let we=re.__webglTexture,ne=$e(A),se=xe?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,Ee=A.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ii)ee(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,se,we,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,se,we,0);else if(A.depthTexture.format===Ui)ee(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,se,we,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,se,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(L){let A=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let xe=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let re=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",re)};xe.addEventListener("dispose",re),A.__depthDisposeCallback=re}A.__boundDepthTexture=xe}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let xe=0;xe<6;xe++)Oe(A.__webglFramebuffer[xe],L,xe);else L.texture.mipmaps.length>0?Oe(A.__webglFramebuffer[0],L,0):Oe(A.__webglFramebuffer,L,0);else if(q){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=n.createRenderbuffer(),Be(A.__webglDepthbuffer[xe],L,!1);else{let re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ve)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Be(A.__webglDepthbuffer,L,!1);else{let re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(L,A,q){let xe=i.get(L);A!==void 0&&ae(xe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ye(L)}function tt(L){let A=L.texture,q=i.get(L),xe=i.get(A);L.addEventListener("dispose",I),T(L);let re=L.textures,ve=L.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=A.version,o.memory.textures++),ve){q.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(A.mipmaps.length>0){q.__webglFramebuffer[ne]=[];for(let se=0;se<A.mipmaps.length;se++)q.__webglFramebuffer[ne][se]=n.createFramebuffer()}else q.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ne=0;ne<A.mipmaps.length;ne++)q.__webglFramebuffer[ne]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(we)for(let ne=0,se=re.length;ne<se;ne++){let Ee=i.get(re[ne]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&ee(L)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let se=re[ne];q.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ne]);let Ee=r.convert(se.format,se.colorSpace),N=r.convert(se.type),te=w(se.internalFormat,Ee,N,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),j=$e(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,te,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,q.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),qe(n.TEXTURE_CUBE_MAP,A);for(let ne=0;ne<6;ne++)if(A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)ae(q.__webglFramebuffer[ne][se],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else ae(q.__webglFramebuffer[ne],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);S(A)?M(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ne=0,se=re.length;ne<se;ne++){let Ee=re[ne],N=i.get(Ee),te=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(te=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,N.__webglTexture),qe(te,Ee),ae(q.__webglFramebuffer,L,Ee,n.COLOR_ATTACHMENT0+ne,te,0),S(Ee)&&M(te)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,xe.__webglTexture),qe(ne,A),A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)ae(q.__webglFramebuffer[se],L,A,n.COLOR_ATTACHMENT0,ne,se);else ae(q.__webglFramebuffer,L,A,n.COLOR_ATTACHMENT0,ne,0);S(A)?M(ne):A.mipmaps.length>0&&n.texParameteri(ne,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Ye(L)}function k(L){let A=L.textures;for(let q=0,xe=A.length;q<xe;q++){let re=A[q];if(S(re)&&re.mipmapsAutoUpdate===!0){let ve=b(L),we=i.get(re).__webglTexture;t.bindTexture(ve,we),M(ve),t.unbindTexture()}}}let de=[];function Pe(L){if(L.samples>0){if(ee(L)===!1){let A=L.textures,q=L.width,xe=L.height,re=n.COLOR_BUFFER_BIT,ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(L),ne=A.length>1;if(ne)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let N=i.get(A[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,q,xe,0,0,q,xe,re,n.NEAREST),c===!0&&(de.length=0,de.push(n.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&de.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let N=i.get(A[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let A=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function $e(L){return Math.min(s.maxSamples,L.samples)}function ee(L){let A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(L){let A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function ze(L,A){let q=L.colorSpace,xe=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Qr&&q!==Oi&&(vt.getTransfer(q)===bt?(xe!==ii||re!==kn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",q)),A}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=pe,this.resetTextureUnits=H,this.getTextureUnits=X,this.setTextureUnits=ce,this.setTexture2D=he,this.setTexture2DArray=Se,this.setTexture3D=Ve,this.setTextureCube=K,this.rebindTextures=Ge,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ee,this.dispose=U}function g1(n,e){function t(i,s=Oi){let r,o=vt.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$h)return n.BYTE;if(i===Zh)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===jh)return n.ALPHA;if(i===Qh)return n.RGB;if(i===ii)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===Ml)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===bl)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===Po||i===Io||i===Lo||i===Do)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===El||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===No||i===Nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Pl)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Il)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===No)return r.COMPRESSED_RG11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Ol||i===Fl||i===kl||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===Yl||i===ql||i===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Jl||i===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Ql||i===Uo||i===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:x1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends hi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new Au,g={},v=t.getContextAttributes(),S=null,M=null,b=[],w=[],_=new Ue,y=null,T=null,E=new an;E.viewport=new zt;let R=new an;R.viewport=new zt;let I=[E,R],D=new fl,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=b[Z];return he===void 0&&(he=new mr,b[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=b[Z];return he===void 0&&(he=new mr,b[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=b[Z];return he===void 0&&(he=new mr,b[Z]=he),he.getHandSpace()};function F(Z){let he=w.indexOf(Z.inputSource);if(he===-1)return;let Se=b[he];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,l||o),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<b.length;Z++){let he=w[Z];he!==null&&(w[Z]=null,b[Z].disconnect(he))}P=null,U=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(S),d=null,u=null,f=null,s=null,M=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(_.width,_.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ve=null,K=null;v.depth&&(K=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=v.stencil?Ui:Ii,Ve=v.stencil?zs:ti);let be={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new On(u.textureWidth,u.textureHeight,{format:ii,type:kn,depthTexture:new Di(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new On(d.framebufferWidth,d.framebufferHeight,{format:ii,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(Z){for(let he=0;he<Z.removed.length;he++){let Se=Z.removed[he],Ve=w.indexOf(Se);Ve>=0&&(w[Ve]=null,b[Ve].disconnect(Se))}for(let he=0;he<Z.added.length;he++){let Se=Z.added[he],Ve=w.indexOf(Se);if(Ve===-1){for(let be=0;be<b.length;be++)if(be>=w.length){w.push(Se),Ve=be;break}else if(w[be]===null){w[be]=Se,Ve=be;break}if(Ve===-1)break}let K=b[Ve];K&&K.connect(Se)}}function z(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let he=Z.near,Se=Z.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),D.near=R.near=E.near=he,D.far=R.far=E.far=Se,(P!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,U=D.far),D.layers.mask=Z.layers.mask|6,E.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let Ve=Z.parent,K=D.cameras;z(D,Ve);for(let be=0;be<K.length;be++)z(K[be],Ve);D.projectionMatrix.copy(E.projectionMatrix),D.projectionMatrixInverse.copy(E.projectionMatrixInverse),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),H(Z,D,Ve)};function H(Z,he,Se){Se===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Z){return g[Z]};let X=null;function ce(Z,he){if(h=he.getViewerPose(l||o),m=he,h!==null){let Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ve=!1;Se.length!==D.cameras.length&&(D.cameras.length=0,Ve=!0);for(let De=0;De<Se.length;De++){let qe=Se[De],je=null;if(d!==null)je=d.getViewport(qe);else{let ye=f.getViewSubImage(u,qe);je=ye.viewport,De===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let ie=I[De];ie===void 0&&(ie=new an,ie.layers.enable(De),ie.viewport=new zt,I[De]=ie),ie.matrix.fromArray(qe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(qe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(je.x,je.y,je.width,je.height),De===0&&(D.matrix.copy(ie.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ve===!0&&D.cameras.push(ie)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let De=f.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&p.init(De,s.renderState)}if(K&&K.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let De=0;De<Se.length;De++){let qe=Se[De].camera;if(qe){let je=g[qe];je||(je=new uo,g[qe]=je);let ie=f.getCameraImage(qe);je.sourceTexture=ie}}}}for(let Se=0;Se<b.length;Se++){let Ve=w[Se],K=b[Se];Ve!==null&&K!==void 0&&K.update(Ve,he,l||o)}X&&X(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}let pe=new wp;pe.setAnimationLoop(ce),this.setAnimationLoop=function(Z){X=Z},this.dispose=function(){}}},v1=new mt,Np=new at;Np.set(-1,0,0,0,1,0,0,0,1);function y1(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,hu(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,v,S):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Yt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Yt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,M=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Np),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function M1(n,e,t,i){let s={},r={};function o(v,S){let M=S.program;i.uniformBlockBinding(v,M,s[v.id])}function a(v,S){let M=s[v.id];M===void 0&&(m(v),M=c(v),s[v.id]=M,v.addEventListener("dispose",p));let b=S.program;i.updateUBOMapping(v,b);let w=e.render.frame;r[v.id]!==w&&(l(v),r[v.id]=w)}function c(v){let S=n.createBuffer(),M=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,b),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function l(v){let S=s[v.id],M=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,_=M.length;w<_;w++){let y=M[w];if(Array.isArray(y))for(let T=0,E=y.length;T<E;T++)h(y[T],w,T,b);else h(y,w,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,M,b){if(u(v,S,M,b)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let y=0;for(let T=0;T<_.length;T++){let E=_[T],R=x(E,!0);f(E,v.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function f(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function u(v,S,M,b){let w=v.value,_=S+"_"+M;if(Array.isArray(w)){b[_]===void 0&&(b[_]=[]);let y=b[_],T=!1;for(let E=0;E<w.length;E++)d(w[E],y,E)===!0&&(T=!0);return T}return d(w,b,_)}function d(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let b=S[M];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(v){let S=v.uniforms,M=0,b=16;for(let _=0,y=S.length;_<y;_++){let T=Array.isArray(S[_])?S[_]:[S[_]];for(let E=0,R=T.length;E<R;E++){let I=T[E],D=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(S[_])||Array.isArray(I.value),U=M;for(let G=0,V=D.length;G<V;G++){let z=D[G],H=x(z,P),X=M%b,ce=X%H.boundary,pe=X+ce;M+=ce,pe!==0&&b-pe<H.storage&&(M+=b-pe),G===0&&(U=M),M+=H.storage}let F=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new F((M-U)/Float32Array.BYTES_PER_ELEMENT),I.__offset=U}}let w=M%b;return w>0&&(M+=b-w),v.__size=M,v.__cache={},this}function x(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(v){let S=v.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var S1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function b1(){return fi===null&&(fi=new ao(S1,16,16,ts,ni),fi.name="DFG_LUT",fi.minFilter=vn,fi.magFilter=vn,fi.wrapS=ci,fi.wrapT=ci,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var rc=class{constructor(e={}){let{canvas:t=Gf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=kn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=d,p=new Set([wl,bl,Sl]),g=new Set([kn,ti,Tr,zs,vl,yl]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,w=null,_=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,I=null,D=null,P=null,U=null;this._outputColorSpace=on;let F=0,G=0,V=null,z=-1,H=null,X=new zt,ce=new zt,pe=null,Z=new it(0),he=0,Se=t.width,Ve=t.height,K=1,be=null,_e=null,De=new zt(0,0,Se,Ve),qe=new zt(0,0,Se,Ve),je=!1,ie=new Ds,ye=new Ya,Ae=!1,ge=!1,ae=new mt,Be=new O,Oe=new zt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function tt(){return V===null?K:1}let k=i;function de(C,W){return t.getContext(C,W)}let Pe,$e,ee,nt,ze,Ie,L,A,q,xe,re,ve,we,ne,se,Ee,N,te,j,Te,Me,ue,me;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),k===null){let W="webgl2";if(k=de(W,C),k===null)throw de(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(C){throw t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ot("WebGLRenderer: "+C.message),C}function Fe(){Pe=new Ny(k),Pe.init(),Me=new g1(k,Pe),$e=new by(k,Pe,e,Me),ee=new p1(k,Pe),$e.reversedDepthBuffer&&u&&ee.buffers.depth.setReversed(!0),D=k.createFramebuffer(),P=k.createFramebuffer(),U=k.createFramebuffer(),nt=new Fy(k),ze=new e1,Ie=new m1(k,Pe,ee,ze,$e,Me,nt),L=new Dy(E),A=new Bx(k),ue=new My(k,A),q=new Uy(k,A,nt,ue),xe=new By(k,q,A,ue,nt),te=new ky(k,$e,Ie),se=new wy(ze),re=new QM(E,L,Pe,$e,ue,se),ve=new y1(E,ze),we=new n1,ne=new l1(Pe),N=new yy(E,L,ee,xe,m,c),Ee=new f1(E,xe,$e),me=new M1(k,nt,$e,ee),j=new Sy(k,Pe,nt),Te=new Oy(k,Pe,nt),nt.programs=re.programs,E.capabilities=$e,E.extensions=Pe,E.properties=ze,E.renderLists=we,E.shadowMap=Ee,E.state=ee,E.info=nt}x!==kn&&(T=new Hy(x,t.width,t.height,a,s,r));let oe=new Ru(E,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=Pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(Se,Ve,!1))},this.getSize=function(C){return C.set(Se,Ve)},this.setSize=function(C,W,Q=!0){if(oe.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=C,Ve=W,t.width=Math.floor(C*K),t.height=Math.floor(W*K),Q===!0&&(t.style.width=C+"px",t.style.height=W+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(Se*K,Ve*K).floor()},this.setDrawingBufferSize=function(C,W,Q){Se=C,Ve=W,K=Q,t.width=Math.floor(C*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(x===kn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(X)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,W,Q,$){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,W,Q,$),ee.viewport(X.copy(De).multiplyScalar(tt()).round())},this.getScissor=function(C){return C.copy(qe)},this.setScissor=function(C,W,Q,$){C.isVector4?qe.set(C.x,C.y,C.z,C.w):qe.set(C,W,Q,$),ee.scissor(ce.copy(qe).multiplyScalar(tt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(C){ee.setScissorTest(je=C)},this.setOpaqueSort=function(C){be=C},this.setTransparentSort=function(C){_e=C},this.getClearColor=function(C){return C.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,Q=!0){let $=0;if(C){let J=!1;if(V!==null){let He=V.texture.format;J=p.has(He)}if(J){let He=V.texture.type,Ze=g.has(He),ke=N.getClearColor(),Xe=N.getClearAlpha(),et=ke.r,lt=ke.g,xt=ke.b;Ze?(v[0]=et,v[1]=lt,v[2]=xt,v[3]=Xe,k.clearBufferuiv(k.COLOR,0,v)):(S[0]=et,S[1]=lt,S[2]=xt,S[3]=Xe,k.clearBufferiv(k.COLOR,0,S))}else $|=k.COLOR_BUFFER_BIT}W&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),N.dispose(),we.dispose(),ne.dispose(),Ie.dispose(),ze.dispose(),L.dispose(),xe.dispose(),q.dispose(),ue.dispose(),me.dispose(),re.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",nn),oe.removeEventListener("sessionend",Pt),Tn.stop()};function Ne(C){C.preventDefault(),ru("WebGLRenderer: Context Lost."),R=!0}function Re(){ru("WebGLRenderer: Context Restored."),R=!1;let C=nt.autoReset,W=Ee.enabled,Q=Ee.autoUpdate,$=Ee.needsUpdate,J=Ee.type;Fe(),nt.autoReset=C,Ee.enabled=W,Ee.autoUpdate=Q,Ee.needsUpdate=$,Ee.type=J}function Ce(C){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qe(C){let W=C.target;W.removeEventListener("dispose",Qe),ct(W)}function ct(C){Tt(C),ze.remove(C)}function Tt(C){let W=ze.get(C).programs;W!==void 0&&(W.forEach(function(Q){re.releaseProgram(Q)}),C.isShaderMaterial&&re.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,$,J,He){W===null&&(W=Ye);let Ze=J.isMesh&&J.matrixWorld.determinantAffine()<0,ke=Zs(C,W,Q,$,J);ee.setMaterial($,Ze);let Xe=Q.index,et=1;if($.wireframe===!0){if(Xe=q.getWireframeAttribute(Q),Xe===void 0)return;et=2}let lt=Q.drawRange,xt=Q.attributes.position,Je=lt.start*et,_t=(lt.start+lt.count)*et;He!==null&&(Je=Math.max(Je,He.start*et),_t=Math.min(_t,(He.start+He.count)*et)),Xe!==null?(Je=Math.max(Je,0),_t=Math.min(_t,Xe.count)):xt!=null&&(Je=Math.max(Je,0),_t=Math.min(_t,xt.count));let Wt=_t-Je;if(Wt<0||Wt===1/0)return;ue.setup(J,$,ke,Q,Xe);let Lt,Ct=j;if(Xe!==null&&(Lt=A.get(Xe),Ct=Te,Ct.setIndex(Lt)),J.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*tt()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(J.isLine){let hn=$.linewidth;hn===void 0&&(hn=1),ee.setLineWidth(hn*tt()),J.isLineSegments?Ct.setMode(k.LINES):J.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else J.isPoints?Ct.setMode(k.POINTS):J.isSprite&&Ct.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let hn=J._multiDrawStarts,Ke=J._multiDrawCounts,_n=J._multiDrawCount,St=Xe?A.get(Xe).bytesPerElement:1,bs=ze.get($).currentProgram.getUniforms();for(let un=0;un<_n;un++)bs.setValue(k,"_gl_DrawID",un),Ct.render(hn[un]/St,Ke[un])}else if(J.isInstancedMesh)Ct.renderInstances(Je,Wt,J.count);else if(Q.isInstancedBufferGeometry){let hn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ke=Math.min(Q.instanceCount,hn);Ct.renderInstances(Je,Wt,Ke)}else Ct.render(Je,Wt)};function Dt(C,W,Q,$){I!==null&&C.isNodeMaterial&&I.setObject($,C),Ae===!0&&se.setState(C,Q,!1),C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=Yt,C.needsUpdate=!0,Et(C,W,$),C.side=es,C.needsUpdate=!0,Et(C,W,$),C.side=Gn):Et(C,W,$)}this.compile=function(C,W,Q=null){Q===null&&(Q=C),I!==null&&I.renderStart(C,W,Q),w=ne.get(Q),w.init(W),y.push(w),Q.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),C!==Q&&C.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),ge=this.localClippingEnabled,Ae=se.init(this.clippingPlanes,ge),Ae===!0&&se.setGlobalState(this.clippingPlanes,W),I!==null&&Ee.render(w.state.shadowsArray,Q,W);let $=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let He=J.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){let ke=He[Ze];Dt(ke,Q,W,J),$.add(ke)}else Dt(He,Q,W,J),$.add(He)}),w=y.pop(),I!==null&&I.renderEnd(),$},this.compileAsync=function(C,W,Q=null){let $=this.compile(C,W,Q);return new Promise(J=>{function He(){if($.forEach(function(Ze){let Xe=ze.get(Ze).currentProgram;(Xe===void 0||Xe.isReady())&&$.delete(Ze)}),$.size===0){J(C);return}setTimeout(He,10)}Pe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Rt=null;function Dn(C){Rt&&Rt(C)}function nn(){Tn.stop()}function Pt(){Tn.start()}let Tn=new wp;Tn.setAnimationLoop(Dn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(C){Rt=C,oe.setAnimationLoop(C),C===null?Tn.stop():Tn.start()},oe.addEventListener("sessionstart",nn),oe.addEventListener("sessionend",Pt),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(C,W);let Q=oe.enabled===!0&&oe.isPresenting===!0,$=T!==null&&(V===null||Q)&&T.begin(E,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,W,V),w=ne.get(C,y.length),w.init(W),w.state.textureUnits=Ie.getTextureUnits(),y.push(w),ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ye.setFromArrayCamera(W):ie.setFromProjectionMatrix(ae,Hn,W.reversedDepth),ge=this.localClippingEnabled,Ae=se.init(this.clippingPlanes,ge),b=we.get(C,_.length),b.init(),_.push(b),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Ze=E.xr.getDepthSensingMesh();Ze!==null&&ai(Ze,W,-1/0,E.sortObjects)}ai(C,W,0,E.sortObjects),b.finish(),I!==null&&I.updateLights(w.state.lightsArray),E.sortObjects===!0&&b.sort(be,_e),Ge=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ge&&N.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&se.beginShadows();let J=w.state.shadowsArray;if(Ee.render(J,C,W),Ae===!0&&se.endShadows(),($&&T.hasRenderPass())===!1){let Ze=b.opaque,ke=b.transmissive;if(w.setupLights(),W.isArrayCamera){let Xe=W.cameras;if(ke.length>0)for(let et=0,lt=Xe.length;et<lt;et++){let xt=Xe[et];Y(Ze,ke,C,xt)}Ge&&N.render(C);for(let et=0,lt=Xe.length;et<lt;et++){let xt=Xe[et];$n(b,C,xt,xt.viewport)}}else ke.length>0&&Y(Ze,ke,C,W),Ge&&N.render(C),$n(b,C,W)}V!==null&&G===0&&(Ie.updateMultisampleRenderTarget(V),Ie.updateRenderTargetMipmap(V)),$&&T.end(E),C.isScene===!0&&C.onAfterRender(E,C,W),ue.resetDefaultState(),z=-1,H=null,y.pop(),y.length>0?(w=y[y.length-1],Ie.setTextureUnits(w.state.textureUnits),Ae===!0&&se.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,I!==null&&I.renderEnd()};function ai(C,W,Q,$){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){let Ze=W.isArrayCamera?ye:ie;if(!C.frustumCulled||C.intersectsFrustum(Ze)){$&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ae);let ke=xe.update(C),Xe=C.material;Xe.visible&&b.push(C,ke,Xe,Q,Oe.z,null,W)}}else if(C.isMesh||C.isLine||C.isPoints){let Ze=W.isArrayCamera?ye:ie;if(!C.frustumCulled||C.intersectsFrustum(Ze)){let ke=xe.update(C),Xe=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Oe.copy(ke.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(ae)),Array.isArray(Xe)){let et=ke.groups;for(let lt=0,xt=et.length;lt<xt;lt++){let Je=et[lt],_t=Xe[Je.materialIndex];_t&&_t.visible&&b.push(C,ke,_t,Q,Oe.z,Je,W)}}else Xe.visible&&b.push(C,ke,Xe,Q,Oe.z,null,W)}}}let He=C.children;for(let Ze=0,ke=He.length;Ze<ke;Ze++)ai(He[Ze],W,Q,$)}function $n(C,W,Q,$){let{opaque:J,transmissive:He,transparent:Ze}=C;w.setupLightsView(Q),Ae===!0&&se.setGlobalState(E.clippingPlanes,Q),$&&ee.viewport(X.copy($)),J.length>0&&Le(J,W,Q),He.length>0&&Le(He,W,Q),Ze.length>0&&Le(Ze,W,Q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Y(C,W,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){let Je=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new On(1,1,{generateMipmaps:!0,type:Je?ni:kn,minFilter:Ni,samples:Math.max(4,$e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let He=w.state.transmissionRenderTarget[$.id],Ze=$.viewport||X;He.setSize(Ze.z*E.transmissionResolutionScale,Ze.w*E.transmissionResolutionScale);let ke=E.getRenderTarget(),Xe=E.getActiveCubeFace(),et=E.getActiveMipmapLevel();E.setRenderTarget(He),E.getClearColor(Z),he=E.getClearAlpha(),he<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&N.render(Q);let lt=E.toneMapping;E.toneMapping=di;let xt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Ae===!0&&se.setGlobalState(E.clippingPlanes,$),Le(C,Q,$),Ie.updateMultisampleRenderTarget(He),Ie.updateRenderTargetMipmap(He),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let _t=0,Wt=W.length;_t<Wt;_t++){let Lt=W[_t],{object:Ct,geometry:hn,material:Ke,group:_n}=Lt;if(Ke.side===Gn&&Ct.layers.test($.layers)){let St=Ke.side;Ke.side=Yt,Ke.needsUpdate=!0,st(Ct,Q,$,hn,Ke,_n),Ke.side=St,Ke.needsUpdate=!0,Je=!0}}Je===!0&&(Ie.updateMultisampleRenderTarget(He),Ie.updateRenderTargetMipmap(He))}E.setRenderTarget(ke,Xe,et),E.setClearColor(Z,he),xt!==void 0&&($.viewport=xt),E.toneMapping=lt}function Le(C,W,Q){let $=W.isScene===!0?W.overrideMaterial:null;for(let J=0,He=C.length;J<He;J++){let Ze=C[J],{object:ke,geometry:Xe,group:et}=Ze,lt=Ze.material;lt.allowOverride===!0&&$!==null&&(lt=$),ke.layers.test(Q.layers)&&st(ke,W,Q,Xe,lt,et)}}function st(C,W,Q,$,J,He){I!==null&&J.isNodeMaterial&&I.setObject(C,J),C.onBeforeRender(E,W,Q,$,J,He),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(E,W,Q,$,C,He),J.transparent===!0&&J.side===Gn&&J.forceSinglePass===!1?(J.side=Yt,J.needsUpdate=!0,E.renderBufferDirect(Q,W,$,J,C,He),J.side=es,J.needsUpdate=!0,E.renderBufferDirect(Q,W,$,J,C,He),J.side=Gn):E.renderBufferDirect(Q,W,$,J,C,He),C.onAfterRender(E,W,Q,$,J,He)}function It(C){let W=0;for(let Q of C)Q.texture!==null&&W++;return W}function Et(C,W,Q){W.isScene!==!0&&(W=Ye);let $=ze.get(C),J=w.state.lights,He=w.state.shadowsArray,Ze=J.state.version,ke=re.getParameters(C,J.state,He,W,Q,w.state.lightProbeGridArray),Xe=re.getProgramCacheKey(ke),et=$.programs;$.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;$.envMap=L.get(C.envMap||$.environment,lt),$.envMapRotation=$.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",Qe),et=new Map,$.programs=et,$.programVariants=new Map);let xt=et.get(Xe);if(xt!==void 0){if($.currentProgram===xt&&$.lightsStateVersion===Ze)return Zn(C,ke),xt}else ke.uniforms=re.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,Q,ke),C.onBeforeCompile(ke,E),xt=re.acquireProgram(ke,Xe),et.set(Xe,xt),$.uniforms=ke.uniforms;let Je=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=se.uniform),Zn(C,ke),$.needsLights=ra(C),$.lightsStateVersion=Ze,$.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.sunLights.value=J.state.sun,Je.sunLightShadows.value=J.state.sunShadow,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.sunShadowMatrix.value=J.state.sunShadowMatrix,Je.sunShadowCascade.value=J.state.sunShadowCascade,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),$.numLightProbeGrids=It(w.state.lightProbeGridArray),$.currentProgram=xt,$.uniformsList=null,xt}function ht(C,W,Q,$,J){let He=ze.get(C),Ze=He.currentProgram.id+","+$+","+J,ke=He.programVariants.get(Ze);return ke===void 0?(ke=Et(C,W,Q),He.programVariants.set(Ze,ke)):(He.currentProgram=ke,He.uniformsList=null,He.outputColorSpace=$,He.toneMapping=J),ke}function sn(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Ar.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Zn(C,W){let Q=ze.get(C);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Zs(C,W,Q,$,J){W.isScene!==!0&&(W=Ye),Ie.resetTextureUnits();let He=W.fog,Ze=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,ke=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:vt.workingColorSpace,Xe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,et=L.get($.envMap||Ze,Xe),lt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,xt=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Je=!!Q.morphAttributes.position,_t=!!Q.morphAttributes.normal,Wt=!!Q.morphAttributes.color,Lt=di;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Lt=E.toneMapping);let Ct=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,hn=Ct!==void 0?Ct.length:0,Ke=ze.get($),_n=w.state.lights;if(Ae===!0&&(ge===!0||C!==H)){let kt=C===H&&$.id===z;se.setState($,C,kt)}let St=!1,bs=!1;$.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==_n.state.version||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isBatchedMesh&&Ke.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ke.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==et||$.fog===!0&&Ke.fog!==He||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==se.numPlanes||Ke.numIntersection!==se.numIntersection)||Ke.vertexAlphas!==lt||Ke.vertexTangents!==xt||Ke.morphTargets!==Je||Ke.morphNormals!==_t||Ke.morphColors!==Wt||Ke.morphTargetsCount!==hn||Ke.numLightProbeGrids!==It(w.state.lightProbeGridArray)?St=!0:(Ke.outputColorSpace!==ke||Ke.toneMapping!==Lt)&&(bs=!0):(St=!0,Ke.__version=$.version);let un=Ke.currentProgram;(St===!0||bs===!0)&&(un=bs===!0?ht($,W,J,ke,Lt):Et($,W,J),I&&$.isNodeMaterial&&I.onUpdateProgram($,un,Ke));let oa=!1,Gi=!1,ws=!1,yt=un.getUniforms(),rn=Ke.uniforms;if(ee.useProgram(un.program)&&(oa=!0,Gi=!0,ws=!0),$.id!==z&&(z=$.id,Gi=!0),oa||H!==C){ee.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(k,"projectionMatrix",C.projectionMatrix),yt.setValue(k,"viewMatrix",C.matrixWorldInverse);let Kt=yt.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,Be.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&yt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,Gi=!0,ws=!0)}if(Ke.needsLights&&(_n.state.sunShadowMap.length>0&&yt.setValue(k,"sunShadowMap",_n.state.sunShadowMap,Ie),_n.state.directionalShadowMap.length>0&&yt.setValue(k,"directionalShadowMap",_n.state.directionalShadowMap,Ie),_n.state.spotShadowMap.length>0&&yt.setValue(k,"spotShadowMap",_n.state.spotShadowMap,Ie),_n.state.pointShadowMap.length>0&&yt.setValue(k,"pointShadowMap",_n.state.pointShadowMap,Ie)),J.isSkinnedMesh){yt.setOptional(k,J,"bindMatrix"),yt.setOptional(k,J,"bindMatrixInverse");let kt=J.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),yt.setValue(k,"boneTexture",kt.boneTexture,Ie))}J.isBatchedMesh&&(yt.setOptional(k,J,"batchingTexture"),yt.setValue(k,"batchingTexture",J._matricesTexture,Ie),yt.setOptional(k,J,"batchingIdTexture"),yt.setValue(k,"batchingIdTexture",J._indirectTexture,Ie),yt.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&yt.setValue(k,"batchingColorTexture",J._colorsTexture,Ie));let Jn=Q.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&te.update(J,Q,un),(Gi||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,yt.setValue(k,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(rn.envMapIntensity.value=W.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=b1()),Gi){if(yt.setValue(k,"toneMappingExposure",E.toneMappingExposure),Ke.needsLights&&Br(rn,ws),He&&$.fog===!0&&ve.refreshFogUniforms(rn,He),ve.refreshMaterialUniforms(rn,$,K,Ve,w.state.transmissionRenderTarget[C.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let kt=M,Kt=0;for(let wi of w.state.lightProbeGridArray)wi.texture!==null&&(kt.textures[Kt]=wi.texture,kt.min[Kt]=wi.boundingBox.min,kt.max[Kt]=wi.boundingBox.max,kt.resolution[Kt]=wi.resolution,Kt++);for(let wi in kt)kt[wi].length=Kt;rn.probesSH.value=kt.textures,rn.probesMin.value=kt.min,rn.probesMax.value=kt.max,rn.probesResolution.value=kt.resolution}Ar.upload(k,sn(Ke),rn,Ie)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ar.upload(k,sn(Ke),rn,Ie),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(k,"center",J.center),yt.setValue(k,"modelViewMatrix",J.modelViewMatrix),yt.setValue(k,"normalMatrix",J.normalMatrix),yt.setValue(k,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let kt=$.uniformsGroups;for(let Kt=0,wi=kt.length;Kt<wi;Kt++){let Ld=kt[Kt];me.update(Ld,un),me.bind(Ld,un)}}return un}function Br(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ra(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,W,Q){let $=ze.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=W,ze.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let Q=ze.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Q=0){V=C,F=W,G=Q;let $=null,J=!1,He=!1;if(C){let ke=ze.get(C);if(ke.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(k.FRAMEBUFFER,ke.__webglFramebuffer),X.copy(C.viewport),ce.copy(C.scissor),pe=C.scissorTest,ee.viewport(X),ee.scissor(ce),ee.setScissorTest(pe),z=-1;return}else if(ke.__webglFramebuffer===void 0)Ie.setupRenderTarget(C);else if(ke.__hasExternalTextures)Ie.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let lt=C.depthTexture;if(ke.__boundDepthTexture!==lt){if(lt!==null&&ze.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(C)}}let Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(He=!0);let et=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[W])?$=et[W][Q]:$=et[W],J=!0):C.samples>0&&Ie.useMultisampledRTT(C)===!1?$=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?$=et[Q]:$=et,X.copy(C.viewport),ce.copy(C.scissor),pe=C.scissorTest}else X.copy(De).multiplyScalar(K).floor(),ce.copy(qe).multiplyScalar(K).floor(),pe=je;if(Q!==0&&($=D),ee.bindFramebuffer(k.FRAMEBUFFER,$)&&ee.drawBuffers(C,$),ee.viewport(X),ee.scissor(ce),ee.setScissorTest(pe),J){let ke=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,Q)}else if(He){let ke=W;for(let Xe=0;Xe<C.textures.length;Xe++){let et=ze.get(C.textures[Xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Xe,et.__webglTexture,Q,ke)}}else if(C!==null&&Q!==0){let ke=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ke.__webglTexture,Q)}z=-1};function xn(C){let W=ze.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=$e.textureFormatReadable(C.format),W.__typeReadable=$e.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,Q,$,J,He,Ze,ke=0){if(!(C&&C.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(Xe=Xe[Ze],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){ee.bindFramebuffer(k.FRAMEBUFFER,Xe);try{let et=C.textures[ke],lt=et.format,xt=et.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke);let Je=xn(et);if(Je.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-$&&Q>=0&&Q<=C.height-J&&k.readPixels(W,Q,$,J,Me.convert(lt),Me.convert(xt),He)}finally{let et=V!==null?ze.get(V).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,W,Q,$,J,He,Ze,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(Xe=Xe[Ze],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(W>=0&&W<=C.width-$&&Q>=0&&Q<=C.height-J){ee.bindFramebuffer(k.FRAMEBUFFER,Xe);let et=C.textures[ke],lt=et.format,xt=et.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke);let Je=xn(et);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,_t),k.bufferData(k.PIXEL_PACK_BUFFER,He.byteLength,k.STREAM_READ),k.readPixels(W,Q,$,J,Me.convert(lt),Me.convert(xt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Wt=V!==null?ze.get(V).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,Wt);let Lt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Xf(k,Lt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,_t),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,He),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(_t),k.deleteSync(Lt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,Q=0){let $=Math.pow(2,-Q),J=Math.floor(C.image.width*$),He=Math.floor(C.image.height*$),Ze=W!==null?W.x:0,ke=W!==null?W.y:0;Ie.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ze,ke,J,He),ee.unbindTexture()},this.copyTextureToTexture=function(C,W,Q=null,$=null,J=0,He=0){let Ze,ke,Xe,et,lt,xt,Je,_t,Wt,Lt=C.isCompressedTexture?C.mipmaps[He]:C.image;if(Q!==null)Ze=Q.max.x-Q.min.x,ke=Q.max.y-Q.min.y,Xe=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,lt=Q.min.y,xt=Q.isBox3?Q.min.z:0;else{let yt=Math.pow(2,-J);Ze=Math.floor(Lt.width*yt),ke=Math.floor(Lt.height*yt),C.isDataArrayTexture?Xe=Lt.depth:C.isData3DTexture?Xe=Math.floor(Lt.depth*yt):Xe=1,et=0,lt=0,xt=0}$!==null?(Je=$.x,_t=$.y,Wt=$.z):(Je=0,_t=0,Wt=0);let Ct=Me.convert(W.format),hn=Me.convert(W.type),Ke;W.isData3DTexture?(Ie.setTexture3D(W,0),Ke=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ie.setTexture2DArray(W,0),Ke=k.TEXTURE_2D_ARRAY):(Ie.setTexture2D(W,0),Ke=k.TEXTURE_2D),ee.activeTexture(k.TEXTURE0),ee.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),ee.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ee.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);let _n=ee.getParameter(k.UNPACK_ROW_LENGTH),St=ee.getParameter(k.UNPACK_IMAGE_HEIGHT),bs=ee.getParameter(k.UNPACK_SKIP_PIXELS),un=ee.getParameter(k.UNPACK_SKIP_ROWS),oa=ee.getParameter(k.UNPACK_SKIP_IMAGES);ee.pixelStorei(k.UNPACK_ROW_LENGTH,Lt.width),ee.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Lt.height),ee.pixelStorei(k.UNPACK_SKIP_PIXELS,et),ee.pixelStorei(k.UNPACK_SKIP_ROWS,lt),ee.pixelStorei(k.UNPACK_SKIP_IMAGES,xt);let Gi=C.isDataArrayTexture||C.isData3DTexture,ws=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let yt=ze.get(C),rn=ze.get(W),Jn=ze.get(yt.__renderTarget),kt=ze.get(rn.__renderTarget);ee.bindFramebuffer(k.READ_FRAMEBUFFER,Jn.__webglFramebuffer),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Kt=0;Kt<Xe;Kt++)Gi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,J,xt+Kt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(W).__webglTexture,He,Wt+Kt)),k.blitFramebuffer(et,lt,et+Ze,lt+ke,Je,_t,Je+Ze,_t+ke,k.DEPTH_BUFFER_BIT,k.NEAREST);ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||ze.has(C)){let yt=ze.get(C),rn=ze.get(W);ee.bindFramebuffer(k.READ_FRAMEBUFFER,P),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let Jn=0;Jn<Xe;Jn++)Gi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,J,xt+Jn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yt.__webglTexture,J),ws?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,He,Wt+Jn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,He),J!==0?k.blitFramebuffer(et,lt,et+Ze,lt+ke,Je,_t,Je+Ze,_t+ke,k.COLOR_BUFFER_BIT,k.NEAREST):ws?k.copyTexSubImage3D(Ke,He,Je,_t,Wt+Jn,et,lt,Ze,ke):k.copyTexSubImage2D(Ke,He,Je,_t,et,lt,Ze,ke);ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ws?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ke,He,Je,_t,Wt,Ze,ke,Xe,Ct,hn,Lt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ke,He,Je,_t,Wt,Ze,ke,Xe,Ct,Lt.data):k.texSubImage3D(Ke,He,Je,_t,Wt,Ze,ke,Xe,Ct,hn,Lt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,He,Je,_t,Ze,ke,Ct,hn,Lt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,He,Je,_t,Lt.width,Lt.height,Ct,Lt.data):k.texSubImage2D(k.TEXTURE_2D,He,Je,_t,Ze,ke,Ct,hn,Lt);ee.pixelStorei(k.UNPACK_ROW_LENGTH,_n),ee.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St),ee.pixelStorei(k.UNPACK_SKIP_PIXELS,bs),ee.pixelStorei(k.UNPACK_SKIP_ROWS,un),ee.pixelStorei(k.UNPACK_SKIP_IMAGES,oa),He===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&k.generateMipmap(Ke),ee.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&Ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),ee.unbindTexture()},this.resetState=function(){F=0,G=0,V=null,ee.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var le={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.5,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.96,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.325,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,godMode:0},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.35,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4}};function lc({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,c=null,l=!1;function h(x){if(!(x>0)||!Number.isFinite(x))return;t&&t(x),o+=x;let p=0;for(;o>=r&&p<s;)n(r),o-=r,p++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),x)}function f(x){if(l){try{c!==null&&h((x-c)/1e3)}catch(p){throw m(),p}c=x,l&&(a=requestAnimationFrame(f))}}function u(){document.visibilityState==="visible"&&(c=null)}function d(){l||(l=!0,c=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(f))}function m(){l=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:d,stop:m}}var Cu=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),w1={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},T1={0:"fire",2:"aim"},Up={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},Op={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},E1=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function Pu(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!E1.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function Fp(n){return w1[n]||null}function kp(n){return T1[n]||null}function Cr(){let n={};for(let e of Cu)n[e]=!1;return n}function Bp(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function A1(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=Bp(n.axes[0],n.axes[1]),[i,s]=Bp(n.axes[2],n.axes[3]),r=Cr();for(let o in Up){let a=n.buttons[o];r[Up[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function R1(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of Cu)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function cc(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Cr(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=Cr();n.tabIndex<0&&(n.tabIndex=0);let c=()=>document.pointerLockElement===n,l=()=>c()||document.activeElement===n;function h(){R1(e)}function f(b){if(Pu(b.target))return;let w=Fp(b.code);(w||b.code in Op)&&(l()&&(b.code==="Tab"||b.code==="Space")&&b.preventDefault(),r="kbm",!b.repeat&&!t.has(b.code)&&w&&s.add(w),t.add(b.code))}function u(b){t.delete(b.code)}function d(b){b.target===n&&n.focus();let w=kp(b.button);w&&(r="kbm",i.has(b.button)||s.add(w),i.add(b.button))}function m(b){i.delete(b.button)}function x(b){c()&&(r="kbm",e.lookDX+=b.movementX||0,e.lookDY+=b.movementY||0)}function p(b){!l()||!b.deltaY||(r="kbm",s.add(b.deltaY>0?"weaponNext":"weaponPrev"),b.preventDefault())}function g(b){b.preventDefault()}function v(){c()||h()}window.addEventListener("keydown",f),window.addEventListener("keyup",u),window.addEventListener("mouseup",m),window.addEventListener("blur",h),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",v),n.addEventListener("mousedown",d),n.addEventListener("wheel",p,{passive:!1}),n.addEventListener("contextmenu",g);function S(){let b=[];try{b=navigator.getGamepads&&navigator.getGamepads()||[]}catch{b=[]}let w=null;for(let y of b)if(y&&y.connected){w=y;break}let _=A1(w);return o=_.ok?w.id:_.reason==="none"?"none":"unrecognised controller",_}function M(){let b={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Cr(),pressed:Cr()};e.lookDX=0,e.lookDY=0;for(let y of t){let T=Fp(y);T&&(b.held[T]=!0);let E=Op[y];E&&(b.moveX+=E[0],b.moveY+=E[1])}for(let y of i){let T=kp(y);T&&(b.held[T]=!0)}let w=Math.hypot(b.moveX,b.moveY);w>1&&(b.moveX/=w,b.moveY/=w);for(let y of s)b.pressed[y]=!0;s.clear();let _=S();if(_.ok){b.lookX=_.lookX,b.lookY=_.lookY;let y=_.moveX!==0||_.moveY!==0||_.lookX!==0||_.lookY!==0;for(let E of Cu)_.held[E]&&(y=!0,b.held[E]=!0,a[E]||(b.pressed[E]=!0));a=_.held,b.moveX+=_.moveX,b.moveY+=_.moveY;let T=Math.hypot(b.moveX,b.moveY);T>1&&(b.moveX/=T,b.moveY/=T),y&&(r="pad")}else a=Cr();return b}return{poll:M,requestLock(){try{let b=n.requestPointerLock&&n.requestPointerLock();b&&typeof b.catch=="function"&&b.catch(()=>{})}catch{}},isLocked:c,device:()=>r,padStatus:()=>o}}function Hp(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var C1=2e3,zp=1e4,P1=8e4;function Vp({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,c=-1/0;function l(h,f){if(f-n<C1||(i+=Math.min(h,100),s++,s<60||i<1e3))return t;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let d=Hp(t,u,Math.max(14,1.1*r));if(d>t){if(f<c)return t;o=f}else d<t&&(o!==null&&f-o<zp&&(a=a===0?zp:Math.min(a*2,P1),c=f+a),o=null);return t=d,t}return{sample:l,scale:()=>t}}var fe=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Iu={viewportHeight:{value:1080}};function si(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=c=>Math.round(c*1e4);for(let c=0;c<i;c++){let l=o(e.getX(c))+","+o(e.getY(c))+","+o(e.getZ(c));r[c]=l;let h=s.get(l);h||(h=[0,0,0],s.set(l,h)),h[0]+=t.getX(c),h[1]+=t.getY(c),h[2]+=t.getZ(c)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new At(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let c=0;c<i;c++){let l=s.get(r[c]),h=l[0],f=l[1],u=l[2],d=Math.hypot(h,f,u);d<1e-6&&(h=t.getX(c),f=t.getY(c),u=t.getZ(c),d=Math.hypot(h,f,u)||1),a.setXYZ(c,h/d,f/d,u/d)}return a.needsUpdate=!0,n}var I1=`
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
`,L1=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function D1({px:n=le.outlinePx,color:e=fe.ink,outlineNormal:t=!1}={}){return new mn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new it(e)},viewportHeight:Iu.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:I1,fragmentShader:L1,side:Yt})}function N1(){}var Gp=new Map;function U1(n,e,t){let i=n+"|"+new it(e).getHexString()+"|"+t,s=Gp.get(i);return s||(s=D1({px:n,color:e,outlineNormal:t}),Gp.set(i,s)),s}function bn(n,{px:e=le.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=U1(e,fe.ink,t),s=new gt(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=N1,n.add(s),s}function Lu(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function O1(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function hc(n,e){let t=new rc({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=on;let i=Vp({startMs:performance.now()});function s(){let o=O1(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),Iu.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var Fi={lightDir:{value:new O(...le.lightDir).normalize()},shadowTint:{value:new it(fe.shadowTint)},bandEdge:{value:.15},shadowLift:{value:le.shadowLift}},F1=`
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
`,k1=`
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
`;function Ht({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new mn({name:"toon",uniforms:{baseColor:{value:new it(n)},shadowMix:{value:t},rim:{value:i},lightDir:Fi.lightDir,shadowTint:Fi.shadowTint,bandEdge:Fi.bandEdge,shadowLift:Fi.shadowLift},vertexShader:F1,fragmentShader:k1,vertexColors:e})}var B1=400,z1=[-.45,.22,-1],H1=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,V1=`
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
`;function uc({planetDir:n=z1}={}){let e=r=>new it(r),t=new mn({name:"sky",uniforms:{deep:{value:e(fe.nebulaDeep)},hot:{value:e(fe.nebulaHot)},pink:{value:e(fe.hotPink)},lilac:{value:e(fe.lilac)},ink:{value:e(fe.ink)},planetColor:{value:e(fe.planet)},shadowTint:Fi.shadowTint,shadowLift:Fi.shadowLift,bandEdge:Fi.bandEdge,lightDir:Fi.lightDir,planetDir:{value:new O(...n).normalize()},time:{value:0}},vertexShader:H1,fragmentShader:V1,side:Yt,depthWrite:!1}),i=new gt(new Rn(B1,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function Cn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Ut;c.morphTargetsRelative=a;let l=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Wp(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let m=Wp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Wp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new At(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);a.setComponent(u+f,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Yp(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),c=[],l=new Map,h=[],f=["getX","getY","getZ","getW"],u=e*.5,d=Math.log10(1/e),m=Math.pow(10,d),x=u*m;for(let g=0;g<r;g++){let v=i?i.getX(g):g,S="";for(let M=0,b=a.length;M<b;M++){let w=a[M],_=n.getAttribute(w),y=_.itemSize;for(let T=0;T<y;T++)S+=`${Math.trunc(_[f[T]](v)*m+x)},`}S in t?h.push(t[S]):(c.push(v),t[S]=o,h.push(o),o++)}let p=n.clone();for(let g in n.attributes)p.setAttribute(g,Xp(n.attributes[g],c,l));for(let g in n.morphAttributes)p.morphAttributes[g]=n.morphAttributes[g].map(v=>Xp(v,c,l));return p.setIndex(h),p}function Xp(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let c=new s.array.constructor(e.length*r);for(let l=0;l<e.length;l++)for(let h=0;h<r;h++)c[l*r+h]=s.array[e[l]*r+h];o=i?new s.constructor(c,r,s.meshPerAttribute):new n.constructor(c,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function Pr(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function qp(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new O),c=o.getCenter(new O),l=a.length(),h=Pr(e*7919+13>>>0),f=[];for(let g=0;g<8;g++)f.push(h()*2-1);let u=Math.min(t*l,i)*.99/Math.sqrt(3),d=(g,v)=>v>1e-9?2*g/v:0,m=[a.x,a.y,a.z].map(g=>g>1e-9?2/g:0),x=new at,p=new O;for(let g=0;g<s.count;g++){let v=d(s.getX(g)-c.x,a.x),S=d(s.getY(g)-c.y,a.y),M=d(s.getZ(g)-c.z,a.z),b=(S+1)/2,w=(f[0]*S+f[1]*v*S)/2,_=(f[2]*v+f[3]*M)/2*b,y=(f[4]*S+f[5]*M*S)/2;if(r){let T=[f[1]*S/2,(f[0]+f[1]*v)/2,0],E=[f[2]/2*b,(f[2]*v+f[3]*M)/2*.5,f[3]/2*b],R=[0,(f[4]+f[5]*M)/2,f[5]*S/2];x.set(1+u*T[0]*m[0],u*T[1]*m[1],u*T[2]*m[2],u*E[0]*m[0],1+u*E[1]*m[1],u*E[2]*m[2],u*R[0]*m[0],u*R[1]*m[1],1+u*R[2]*m[2]),x.invert().transpose(),p.set(r.getX(g),r.getY(g),r.getZ(g)).applyMatrix3(x).normalize(),r.setXYZ(g,p.x,p.y,p.z)}s.setXYZ(g,s.getX(g)+u*w,s.getY(g)+u*_,s.getZ(g)+u*y)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var Du=null;function G1(){return Du||(Du=Ht({vertexColors:!0})),Du}var Uu=(n,e,t)=>new it(n).lerp(new it(e),t),Ou=(n,e=.3)=>Uu(n,"#ffffff",e),dc=(n,e=.2)=>Uu(n,fe.shadowTint,e),$p=new mt,Zp=new yn,Jp=new En,W1=new O,X1=new O;function ns(n=1,e=.02,t="prop"){let i=[],s=0;function r(h,f,u={}){let d=h.index?h.toNonIndexed():h;d.deleteAttribute("uv");let m=u.wonk===void 0?e:u.wonk;m>0&&qp(d,n*131+s,m),s++;let x=d.getAttribute("normal"),p=new Float32Array(x.count*3);for(let g=0;g<x.count;g++){let v=typeof f=="function"?f(x.getX(g),x.getY(g),x.getZ(g)):f;p[g*3]=v.r,p[g*3+1]=v.g,p[g*3+2]=v.b}return d.setAttribute("color",new At(p,3)),(u.sx||u.sy||u.sz)&&d.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&d.applyMatrix4(u.m),Jp.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),Zp.setFromEuler(Jp),$p.compose(W1.set(u.x||0,u.y||0,u.z||0),Zp,X1.set(1,1,1)),d.applyMatrix4($p),i.push(d),d}function o(h,f={}){let u=f.top||Ou(h),d=f.side||dc(h,.22),m=dc(h,.4),x=new it(h);return(p,g,v)=>g>.5?u:g<-.5?m:Math.abs(p)>.5?d:v>0?x:m}function a(h,f,u,d,m={}){return r(new Ot(h,f,u),o(d,m),m)}function c(h,f,u,d,m,x,p,g={}){return a(f-h,d-u,x-m,p,{...g,x:(h+f)/2,y:(u+d)/2,z:(m+x)/2})}function l(h=0){let f=Cn(i,!1);if(!f)throw new Error(`${t}: parts have different attributes and cannot be merged`);return h>0&&qp(f,n,h),si(f)}return{add:r,box:a,span:c,facePaint:o,finish:l}}function is(n){let e=new Mt,t=new gt(n,G1());return bn(t),e.add(t),e}var ki=n=>()=>new it(n);function fc({w:n,d:e,tile:t=1,colors:i=[fe.cream,fe.tealLight]}){let s=ns(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,fe.lilac,{top:new it(fe.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let c=0;c<o;c++)for(let l=0;l<a;l++){let h=new Ji(t,t);h.rotateX(-Math.PI/2),s.add(h,ki(i[(c+l)%2]),{wonk:0,x:-n/2+(c+.5)*t,y:0,z:-e/2+(l+.5)*t})}return is(s.finish())}function Fu({w:n,h:e,color:t=fe.cream,stripe:i=fe.hotPink,opening:s=null,seed:r=2}){let o=ns(r,0,"wall"),a=.2,c=a/2,l=-n/2,h=n/2,f=-.3,u=new _r;if(u.moveTo(l,f),u.lineTo(h,f),u.lineTo(h,e),u.lineTo(l,e),u.closePath(),s){let g=new Ns,v=s.x-s.w/2,S=s.x+s.w/2;g.moveTo(v,s.y),g.lineTo(v,s.y+s.h),g.lineTo(S,s.y+s.h),g.lineTo(S,s.y),g.closePath(),u.holes.push(g)}let d=new So(u,{depth:a,bevelEnabled:!1});d.translate(0,0,-c),o.add(d,o.facePaint(t),{wonk:0}),o.span(l,h,f,.28,-c,c+.04,fe.lilac),o.span(l-.05,h+.05,e-.1,e+.12,-c-.06,c+.08,fe.teal);let m=.5,x=.8;return s&&s.y<x&&s.y+s.h>m?(o.span(l,s.x-s.w/2,m,x,c-.01,c+.03,i),o.span(s.x+s.w/2,h,m,x,c-.01,c+.03,i)):o.span(l,h,m,x,c-.01,c+.03,i),is(o.finish(.006))}function Y1(n,e,t,i){let s=p=>Math.min(2048,Math.max(64,Math.round(p))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let c=a.getContext("2d"),l='"Arial Black", Impact, sans-serif';c.font=`100px ${l}`;let h=n.split(" "),f=[[n]];for(let p=1;p<h.length;p++)f.push([h.slice(0,p).join(" "),h.slice(p).join(" ")]);let u=null;for(let p of f){let g=Math.max(...p.map(S=>c.measureText(S).width)),v=Math.min(r*.88*100/g,o*.8/(p.length*1.08));(!u||v>u.size)&&(u={lines:p,size:v})}c.fillStyle=e,c.fillRect(0,0,r,o),c.strokeStyle=t,c.lineWidth=8,c.setLineDash([22,14]),c.strokeRect(18,18,r-36,o-36),c.setLineDash([]),c.font=`${u.size}px ${l}`,c.textAlign="center",c.textBaseline="middle";let d=u.size*1.08,m=o/2-(u.lines.length-1)*d/2;u.lines.forEach((p,g)=>{let v=m+g*d;c.fillStyle=fe.ink,c.fillText(p,r/2+u.size*.05,v+u.size*.06),c.fillStyle=t,c.fillText(p,r/2,v)});let x=new co(a);return x.colorSpace=on,x.anisotropy=8,x}function ku({text:n,w:e,h:t,bg:i=fe.hotPink,fg:s=fe.cream,tilt:r=.04,seed:o=3}){let l=ns(o,0,"sign");l.box(e,t,.14,s,{wonk:0});let h=is(l.finish()),f=e-.14*2,u=t-.14*2,d=new gt(new Ji(f,u),new Li({map:Y1(n,i,s,f/u),toneMapped:!1}));return d.name="signFace",d.position.z=.14/2+.008,h.add(d),h.rotation.z=r,h}function Kp({w:n,h:e,seed:t=4}){let i=ns(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,fe.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,fe.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,fe.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,fe.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,fe.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,fe.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,fe.cream),is(i.finish(.006))}function zo(n,e,t,i,s,r){let o=new Os(.16,.05,8,20);n.add(o,ki(fe.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function jp({w:n,h:e,name:t,signColor:i=fe.hotPink,seed:s=5}){let r=ns(s,.012,"shopFront"),o=.5,a=.5,c=e,l=e-1.4,h=Uu(fe.glorpPurple,fe.ink,.7);r.span(-n/2+a,n/2-a,0,l,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,fe.lilac);for(let g of[-1,1]){let v=g*(n/2-a/2);r.span(v-a/2,v+a/2,0,l,-o/2,o/2,fe.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,fe.teal)}r.span(-n/2,n/2,l,c,-o/2,o/2,fe.teal);let f=n-a*2-.1;r.span(-f/2,f/2,0,.86,.02,o/2+.3,fe.hotPink),r.span(-f/2,f/2,0,.12,.02,o/2+.34,fe.lilac),r.span(-f/2-.06,f/2+.06,.86,.96,0,o/2+.42,fe.cream),zo(r,-.9,1.01,.4,.1,.4),zo(r,-.2,1.01,.5,-.1,-.3),zo(r,.6,1.01,.38,.12,.9),zo(r,1.2,1.01,.52,0,.1);let u=10,d=(n-.1)/u,m=.42;for(let g=0;g<u;g++){let v=g%2?fe.cream:i,S=-n/2+.05+(g+.5)*d;r.box(d,.08,.95,v,{x:S,y:l-.02,z:o/2+.35,rx:m,top:Ou(v,.2)}),r.box(d,.22,.06,v,{x:S,y:l-.24,z:o/2+.8,rx:.1})}let x=is(r.finish(.006)),p=ku({text:t,w:n-.7,h:1.15,bg:i,fg:fe.cream,seed:s+1});return p.position.set(0,l+.7,o/2+.01),x.add(p),x}function Qp({w:n=2,d:e=1,h:t=.9,color:i=fe.teal,seed:s=7}={}){let r=ns(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,fe.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,fe.cream);let o=4,a=(n-.3)/o;for(let l=0;l<o;l++){let h=l%2?fe.cream:fe.hotPink;r.box(a-.04,t-.45,.05,h,{x:-n/2+.15+(l+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,fe.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,fe.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),zo(r,.45,t+.06,.05,.1,.5);let c=is(r.finish(.006));return c.userData.footprint={w:n+.14,d:e+.14},c}function em({w:n=1.8,seed:e=11}={}){let t=ns(e,.02,"bench"),i=.5;t.box(n,.1,i,fe.lilac,{y:.46}),t.box(n,.42,.08,fe.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,fe.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,fe.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=is(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function q1(n,e,t){let i=new Ot(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function tm({seed:n=21}={}){let e=ns(n,.02,"planter"),t=Pr(n);e.add(new An(.42,.32,.55,16),ki(fe.teal),{y:.275}),e.add(new An(.47,.44,.12,16),ki(fe.hotPink),{y:.6}),e.add(new An(.4,.4,.04,16),ki(dc(fe.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=dc(fe.planet,.15);for(let c=0;c<6;c++)e.add(new An(.06-c*.004,.07-c*.004,.34,8),ki(c%2?Ou(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let c=0;c<o;c++){let l=c/o*Math.PI*2+t()*.3,h=c%2?.95+t()*.25:1.45+t()*.25,f=new mt().makeTranslation(i,s,0).multiply(new mt().makeRotationY(l)).multiply(new mt().makeRotationZ(-h));e.add(q1(.95,.24,c%2?.22:.4),ki(c%2?fe.gel:fe.teal),{m:f,wonk:.03})}e.add(new Rn(.1,10,8),ki(fe.planet),{x:i,y:s-.05,z:.08}),e.add(new Rn(.1,10,8),ki(fe.planet),{x:i+.07,y:s-.1,z:-.07});let a=is(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Nu=null;function pc({rx:n,rz:e,opacity:t=.35}){let r=new it(fe.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let f=1;f<=8;f++){let u=f/8,d=t*(1-u*u*(3-2*u));for(let m=0;m<28;m++){let x=m/28*Math.PI*2;o.push(Math.cos(x)*n*u,0,Math.sin(x)*e*u),a.push(r.r,r.g,r.b,d)}}let c=[];for(let f=0;f<28;f++)c.push(0,1+(f+1)%28,1+f);for(let f=1;f<8;f++){let u=1+(f-1)*28,d=1+f*28;for(let m=0;m<28;m++){let x=(m+1)%28;c.push(u+m,u+x,d+m,u+x,d+x,d+m)}}let l=new Ut;l.setAttribute("position",new ft(o,3)),l.setAttribute("color",new ft(a,4)),l.setIndex(c),Nu||(Nu=new Li({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new gt(l,Nu);return h.name="blobShadow",h.position.y=.012,h}var Ho=8,mc=Ho/2,Bu=.2;function nm(){let n=new Mt;n.add(fc({w:Ho,d:Ho}));let e=Fu({w:Ho+Bu*2,h:4});e.position.set(0,0,-mc-Bu/2),n.add(e);let t=1.3,i=jp({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:fe.hotPink});i.position.set(t,0,-mc+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=Fu({w:Ho,h:4,color:"#f1e6ff",opening:s});r.position.set(-mc-Bu/2,0,0),r.rotation.y=Math.PI/2;let o=Kp({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=Qp({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let c=em({seed:11});c.position.set(-3.45,0,.9),c.rotation.y=Math.PI/2;let l=tm({seed:21});l.position.set(-2.95,0,-2.9),n.add(a,c,l);let h=(f,u,d,m,x=0)=>{let p=pc({rx:d,rz:m,opacity:.7});p.position.x=f,p.position.z=u,p.rotation.y=x,n.add(p)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(c.position.x+.2,c.position.z,.6,1.2),h(l.position.x,l.position.z,.95,.95),h(t,-mc+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function wn(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function zu(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],c=e[1]-n[1],l=e[2]-n[2],h=Math.hypot(a,c,l);h<1e-9?(a=0,c=-1,l=0,h=0):(a/=h,c/=h,l/=h);let f=1.15*o,u=e[0],d=e[1],m=e[2];h>f&&(h=f,u=n[0]+a*h,d=n[1]+c*h,m=n[2]+l*h);let x=h>o?h/o:1;if(h>=o){let y=h*(o>0?t/o:.5);return im(r,n[0]+a*y,n[1]+c*y,n[2]+l*y,u,d,m,x)}let p=Math.max(h,1e-6),g=Math.min(Math.max((p*p+t*t-i*i)/(2*p),-t),t),v=Math.sqrt(Math.max(t*t-g*g,0)),S=s[0],M=s[1],b=s[2],w=S*a+M*c+b*l;S-=a*w,M-=c*w,b-=l*w;let _=Math.hypot(S,M,b);return _<1e-6&&(Math.abs(a)<.9?(S=0,M=l,b=-c):(S=-l,M=0,b=a),_=Math.hypot(S,M,b)||1),S/=_,M/=_,b/=_,im(r,n[0]+a*g+S*v,n[1]+c*g+M*v,n[2]+l*g+b*v,u,d,m,x)}function im(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let c=n.mid,l=n.end;return c[0]=e,c[1]=t,c[2]=i,l[0]=s,l[1]=r,l[2]=o,n.stretch=a,n}var sm=[.65,1.2];function Hu({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=sm.length,o=s*t,a=[o,o+r*t+1],c=o+2*(r*t+1),l=[],h=(ge,ae,Be)=>{for(let Oe=0;Oe<t;Oe++){let Ye=(Oe+1)%t,Ge=ge+Oe,tt=ge+Ye,k=ae+Oe,de=ae+Ye;Be?l.push(Ge,k,tt,tt,k,de):l.push(Ge,tt,k,tt,de,k)}};for(let ge=0;ge<e;ge++)h(ge*t,(ge+1)*t,!1);for(let ge=0;ge<2;ge++){let ae=ge===0,Be=ge===0?0:e*t;for(let Ye=0;Ye<r;Ye++){let Ge=a[ge]+Ye*t;h(Be,Ge,ae),Be=Ge}let Oe=a[ge]+r*t;for(let Ye=0;Ye<t;Ye++){let Ge=Be+Ye,tt=Be+(Ye+1)%t;ae?l.push(Ge,Oe,tt):l.push(Ge,tt,Oe)}}let f=new Float32Array(c*3),u=new Float32Array(c*3),d=new Ut,m=new At(f,3),x=new At(u,3);m.setUsage(Er),x.setUsage(Er),d.setAttribute("position",m),d.setAttribute("normal",x),d.setIndex(l);let p=new gt(d,Ht({color:i}));p.name="limb";let g=new Vn(new O,n*2);d.boundingSphere=g,bn(p);let v=new Float64Array(t),S=new Float64Array(t);for(let ge=0;ge<t;ge++)v[ge]=Math.cos(ge/t*Math.PI*2),S[ge]=Math.sin(ge/t*Math.PI*2);let M=0,b=-1,w=0,_=1,y=0,T=0,E=0,R=0,I=1,D=0,P=0,U=0,F=0,G=0,V=0,z=0,H=0,X=0,ce=0,pe=0,Z=0,he=0,Se=0,Ve=0,K=0,be=0,_e=0;function De(ge,ae,Be,Oe,Ye,Ge,tt,k,de,Pe,$e,ee,nt,ze,Ie,L){for(let A=0;A<t;A++){let q=v[A]*Ge+S[A]*de,xe=v[A]*tt+S[A]*Pe,re=v[A]*k+S[A]*$e,ve=(ge+A)*3;f[ve]=ae+q*Ye,f[ve+1]=Be+xe*Ye,f[ve+2]=Oe+re*Ye,u[ve]=q*Ie+ee*L,u[ve+1]=xe*Ie+nt*L,u[ve+2]=re*Ie+ze*L}}let qe=!1,je=1,ie=0,ye=0;function Ae(ge,ae,Be,Oe=1){let Ye=n/Math.sqrt(Oe>1?Oe:1),Ge=2*ae[0]-(ge[0]+Be[0])/2,tt=2*ae[1]-(ge[1]+Be[1])/2,k=2*ae[2]-(ge[2]+Be[2])/2,de=ge[0],Pe=ge[1],$e=ge[2],ee=Be[0],nt=Be[1],ze=Be[2],Ie=(ae[1]-Pe)*(ze-ae[2])-(ae[2]-$e)*(nt-ae[1]),L=(ae[2]-$e)*(ee-ae[0])-(ae[0]-de)*(ze-ae[2]),A=(ae[0]-de)*(nt-ae[1])-(ae[1]-Pe)*(ee-ae[0]),q=Math.hypot(Ie,L,A),xe=ae[0]-de,re=ae[1]-Pe,ve=ae[2]-$e,we=Math.hypot(xe,re,ve),ne=ee-ae[0],se=nt-ae[1],Ee=ze-ae[2],N=!1;q>1e-4*we*Math.hypot(ne,se,Ee)&&q>1e-12?(Ie/=q,L/=q,A/=q,qe&&Ie*je+L*ie+A*ye<0&&(Ie=-Ie,L=-L,A=-A),N=!0):we>1e-9&&xe*ne+re*se+ve*Ee<0&&(Ge=(de+ee)/2,tt=(Pe+nt)/2,k=($e+ze)/2);let te=(de+Ge+ee)/3,j=(Pe+tt+nt)/3,Te=($e+k+ze)/3,Me=Math.max(Math.hypot(de-te,Pe-j,$e-Te),Math.hypot(Ge-te,tt-j,k-Te),Math.hypot(ee-te,nt-j,ze-Te));g.center.set(te,j,Te),g.radius=Me+n*1.5+.02;for(let ue=0;ue<s;ue++){let me=ue/e,Fe=1-me,oe=Fe*Fe,Ne=2*Fe*me,Re=me*me,Ce=oe*de+Ne*Ge+Re*ee,Qe=oe*Pe+Ne*tt+Re*nt,ct=oe*$e+Ne*k+Re*ze,Tt=2*Fe*(Ge-de)+2*me*(ee-Ge),Dt=2*Fe*(tt-Pe)+2*me*(nt-tt),Rt=2*Fe*(k-$e)+2*me*(ze-k),Dn=Math.hypot(Tt,Dt,Rt);if(Dn>1e-9?(M=Tt/Dn,b=Dt/Dn,w=Rt/Dn):ue===0&&(M=0,b=-1,w=0),ue===0){N?(_=Ie,y=L,T=A):qe?(_=je,y=ie,T=ye):(_=1,y=0,T=0);let nn=_*M+y*b+T*w;_-=M*nn,y-=b*nn,T-=w*nn;let Pt=Math.hypot(_,y,T);Pt<1e-6&&(Math.abs(M)<.9?(_=0,y=w,T=-b):(_=-w,y=0,T=M),Pt=Math.hypot(_,y,T)||1),_/=Pt,y/=Pt,T/=Pt,je=_,ie=y,ye=T,qe=!0}else{let nn=_*M+y*b+T*w;_-=M*nn,y-=b*nn,T-=w*nn;let Pt=Math.hypot(_,y,T);Pt<1e-6&&(Math.abs(M)<.9?(_=0,y=w,T=-b):(_=-w,y=0,T=M),Pt=Math.hypot(_,y,T)||1),_/=Pt,y/=Pt,T/=Pt}E=b*T-w*y,R=w*_-M*T,I=M*y-b*_,De(ue*t,Ce,Qe,ct,Ye,_,y,T,E,R,I,0,0,0,1,0),ue===0&&(D=M,P=b,U=w,F=_,G=y,V=T,z=E,H=R,X=I),ue===s-1&&(ce=M,pe=b,Z=w,he=_,Se=y,Ve=T,K=E,be=R,_e=I)}for(let ue=0;ue<2;ue++){let me=ue===0?-1:1,Fe=ue===0?de:ee,oe=ue===0?Pe:nt,Ne=ue===0?$e:ze,Re=ue===0?D:ce,Ce=ue===0?P:pe,Qe=ue===0?U:Z,ct=ue===0?F:he,Tt=ue===0?G:Se,Dt=ue===0?V:Ve,Rt=ue===0?z:K,Dn=ue===0?H:be,nn=ue===0?X:_e,Pt=Re*me,Tn=Ce*me,ai=Qe*me;for(let Y=0;Y<r;Y++){let Le=sm[Y],st=Math.cos(Le),It=Math.sin(Le);De(a[ue]+Y*t,Fe+Pt*Ye*It,oe+Tn*Ye*It,Ne+ai*Ye*It,Ye*st,ct,Tt,Dt,Rt,Dn,nn,Pt,Tn,ai,st,It)}let $n=(a[ue]+r*t)*3;f[$n]=Fe+Pt*Ye,f[$n+1]=oe+Tn*Ye,f[$n+2]=Ne+ai*Ye,u[$n]=Pt,u[$n+1]=Tn,u[$n+2]=ai}m.needsUpdate=!0,x.needsUpdate=!0}return{mesh:p,set:Ae}}var Gs=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),$1=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),gc=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Vu=.04,Z1=9;function xc(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function J1(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+xc(e,1))+.03*Math.sin(2.1*n+xc(e,2)),t[1]=.04*Math.sin(1.7*n+xc(e,3))+.02*Math.sin(2.6*n+xc(e,4)),t}var K1=(n,e)=>Math.min(n*2,1)*Math.max(e,0),Vo=16,rm=Vo+1,mi=11,ss=4,_c=13,j1=.07,Q1=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function om({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:c=1,lidColor:l=fe.ink,fixedSmile:h=0}={}){let f=n,u=e/2,d=[-u,u],m=.35,x=.035*f,p=f*.3,g=a==="uni",v=0,S=v+2*rm,M=S+16,b=M+2*mi*ss,w=b+2*mi*2,_=w+(g?6:8),y=_+_c*2,T=[],E=de=>T.push(de,de+1,de+2,de,de+2,de+3),R=(de,Pe)=>{for(let $e=0;$e<Pe-1;$e++){let ee=de+$e*2;T.push(ee,ee+1,ee+2,ee+1,ee+3,ee+2)}};for(let de=0;de<2;de++){let Pe=v+de*rm;for(let $e=0;$e<Vo;$e++)T.push(Pe,Pe+1+$e,Pe+1+($e+1)%Vo)}for(let de=0;de<4;de++)E(S+de*4);for(let de=0;de<2;de++){let Pe=M+de*mi*ss;for(let $e=0;$e<mi-1;$e++)for(let ee=0;ee<ss-1;ee++){let nt=Pe+$e*ss+ee,ze=nt+1,Ie=nt+ss,L=Ie+1;T.push(nt,ze,Ie,ze,L,Ie)}R(b+de*mi*2,mi)}g?T.push(w,w+1,w+2,w+1,w+3,w+2,w+2,w+3,w+4,w+3,w+5,w+4):(E(w),E(w+4)),R(_,_c);let I=[];for(let de=0;de<2;de++){let Pe=new Rn(f,18,12);Pe.deleteAttribute("uv"),Pe.applyMatrix4(new mt().makeScale(1,1,m).setPosition(d[de],t,i)),I.push(Pe)}let D=new gt(Cn(I,!1),Ht({color:fe.eyeWhite,shadowMix:.35,rim:0}));D.name="eyes",bn(D,{px:2});let P=new Float32Array(y*3),U=new Float32Array(y*3),F=new Float32Array(y*3),G=new it(fe.ink),V=new it(l);for(let de=0;de<y;de++){U[de*3+2]=1;let Pe=de>=M&&de<b?V:G;F[de*3]=Pe.r,F[de*3+1]=Pe.g,F[de*3+2]=Pe.b}let z=new Ut,H=new At(P,3);H.setUsage(Er),z.setAttribute("position",H),z.setAttribute("normal",new At(U,3)),z.setAttribute("color",new At(F,3)),z.setIndex(T);let X=t+f*3.5,ce=s-r*1.5-f,pe=Math.max(u+2.5*f,r);z.boundingSphere=new Vn(new O(0,(X+ce)/2,i),Math.hypot(pe,(X-ce)/2,f*2));let Z=Ht({color:"#ffffff",vertexColors:!0,rim:0});Z.side=Gn;let he=new gt(z,Z);he.name="features";let Se=new Mt;Se.name="face",Se.add(D,he);let Ve=Gs.neutral,K=de=>{let Pe=h>0?$1[de]:0;return Pe>0?h*Pe:-1/0},be=K("neutral"),_e=de=>de==="mouthCurve"&&Ve.mouthCurve<be?be:Ve[de],De={};for(let de of gc)De[de]={x:_e(de),v:0};let qe={x:0,v:0},je={x:0,v:0},ie=0,ye=!1,Ae=0,ge=[0,0],ae=0;function Be(de,Pe,$e){let ee=ae*3;P[ee]=de,P[ee+1]=Pe,P[ee+2]=$e,ae++}function Oe(de,Pe,$e){let ee=1-(de*de+Pe*Pe)/(f*f);return i+f*m*Math.sqrt(ee>0?ee:0)+$e}function Ye(de,Pe,$e,ee,nt,ze){let Ie=-(ee-Pe),L=$e-de,A=Math.hypot(Ie,L)||1;Ie=Ie/A*nt/2,L=L/A*nt/2,Be(de+Ie,Pe+L,ze),Be($e+Ie,ee+L,ze),Be($e-Ie,ee-L,ze),Be(de-Ie,Pe-L,ze)}let Ge=f*1.03;function tt(){let de=De,Pe=de.pupilScale.x*(1-qe.x),$e=qe.x,ee=Math.min(Math.max(de.lid.x,0),.95),nt=de.browAngle.x,ze=ee>.005,Ie=Ge-2*Ge*ee,L=nt*.6*Math.min(ee*4,1),A=f*j1*Math.min(ee*10,1);ae=v;for(let me=0;me<2;me++){let Fe=me===0?-1:1;J1(Ae,c+me*7.31,ge);let oe=f*.5*(Pe>0?Pe:0),Ne=ge[0]*f,Re=ge[1]*f;if(ze){let Qe=Ie+L*Fe*Ne-Math.abs(L)*oe-A-(Re+oe);if(Qe>0){let ct=Math.min(Math.max((Qe-.1*f)/(.1*f),0),1);Re+=Qe*(1-Q1(ct))}}Be(d[me]+Ne,t+Re,Oe(Ne,Re,x));for(let Ce=0;Ce<Vo;Ce++){let Qe=Ce/Vo*Math.PI*2,ct=Ne+Math.cos(Qe)*oe,Tt=Re+Math.sin(Qe)*oe;Be(d[me]+ct,t+Tt,Oe(ct,Tt,x))}}ae=S;for(let me=0;me<2;me++){let Fe=f*.55*$e,oe=Oe(0,0,x),Ne=f*.26*$e;Ye(d[me]-Fe,t-Fe,d[me]+Fe,t+Fe,Ne,oe),Ye(d[me]-Fe,t+Fe,d[me]+Fe,t-Fe,Ne,oe)}for(let me=0;me<2;me++){let Fe=me===0?-1:1;for(let oe=0;oe<2;oe++){ae=oe===0?M+me*mi*ss:b+me*mi*2;for(let Ne=0;Ne<mi;Ne++){let Re=(Ne/(mi-1)*2-1)*(Math.PI/2),Ce=Ge*Math.sin(Re),Qe=Ge*Math.cos(Re),ct=ze?Ie+L*Ce:Qe;ct>Qe&&(ct=Qe),ct<-Qe&&(ct=-Qe);let Tt=Fe*Ce;if(oe===0)for(let Dt=0;Dt<ss;Dt++){let Rt=Qe+(ct-Qe)*(Dt/(ss-1));Be(d[me]+Tt,t+Rt,Oe(Tt,Rt*.97,x*3))}else{let Dt=ct+(ze?f*.02:0);Dt>Qe&&(Dt=Qe);let Rt=ct-A;Rt<-Qe&&(Rt=-Qe),Be(d[me]+Tt,t+Dt,Oe(Tt,Dt*.97,x*3.5)),Be(d[me]+Tt,t+Rt,Oe(Tt,Rt*.97,x*3.5))}}}}ae=w;let q=f*.9,xe=t+f*(1.4+de.browY.x),re=Math.cos(nt),ve=Math.sin(nt),we=i+f*.15;if(g){let me=u+q*re,Fe=xe+q*ve,oe=xe-ve/(re>.3?re:.3)*u,Ne=-(oe-Fe),Re=me,Ce=Math.hypot(Ne,Re)||1;Ne/=Ce,Re/=Ce;let Qe=-(Fe-oe),ct=me,Tt=Math.hypot(Qe,ct)||1;Qe/=Tt,ct/=Tt;let Dt=Ne+Qe,Rt=Re+ct,Dn=Math.hypot(Dt,Rt)||1;Dt/=Dn,Rt/=Dn;let nn=Dt*Ne+Rt*Re,Pt=p/2/(nn>.4?nn:.4);Be(-me+Ne*p/2,Fe+Re*p/2,we),Be(-me-Ne*p/2,Fe-Re*p/2,we),Be(Dt*Pt,oe+Rt*Pt,we),Be(-Dt*Pt,oe-Rt*Pt,we),Be(me+Qe*p/2,Fe+ct*p/2,we),Be(me-Qe*p/2,Fe-ct*p/2,we)}else for(let me=0;me<2;me++){let Fe=me===0?-1:1;Ye(d[me]-Fe*q*re,xe-q*ve,d[me]+Fe*q*re,xe+q*ve,p,we)}ae=_;let ne=de.mouthOpen.x+je.x*(.55+.45*Math.sin((Ae+c*.37)*Z1*Math.PI*2))*.8,se=ne>0?ne<1.2?ne:1.2:0,Ee=-de.mouthCurve.x/.5,N=(Ee>1?1:Ee>0?Ee:0)*(se<.4?se/.4:1),te=r/2*(1-.35*(se<1?se:1)*(1-.7*N)),j=K1(de.lid.x,de.mouthCurve.x),Te=de.mouthCurve.x*te*.5*(1-.4*j)*(1+.6*N),Me=.55+.5*N,ue=se*te*.9;for(let me=0;me<_c;me++){let Fe=me/(_c-1)*2-1,oe=1-Fe*Fe,Ne=Fe*te*(1-.25*j)+j*te*.2,Re=s-Te*oe+j*te*.45*Fe+qe.x*p*.6*Math.sin(Fe*Math.PI*3);Be(Ne,Re,o),Be(Ne,Re-p-ue*Math.pow(oe,Me)+Te*oe*N,o)}H.needsUpdate=!0}function k(de){Ae+=de;for(let Pe=0;Pe<gc.length;Pe++)wn(De[gc[Pe]],_e(gc[Pe]),Vu,de);wn(qe,ie,Vu,de),wn(je,ye?1:0,Vu,de),tt()}return tt(),{group:Se,setExpression(de){Ve=Object.prototype.hasOwnProperty.call(Gs,de)?Gs[de]:Gs.neutral,ie=de==="dead"?1:0,be=K(Object.prototype.hasOwnProperty.call(Gs,de)?de:"neutral")},setTalking(de){ye=!!de},update:k}}var In=Math.PI*2,Go=["handL","handR","footL","footR"];function gi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function am(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[Go[t]],s=e[Go[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function Xo(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),c=Math.sin(e.lean),l=Math.cos(e.twist),h=Math.sin(e.twist),f=r*a-o*c,u=r*c+o*a;return i[0]=s*l+u*h,i[1]=f+e.hipsY,i[2]=-s*h+u*l,i}var eS=n=>n<0?0:n>1?1:n,Ir=(n,e,t)=>{let i=eS((t-n)/(e-n));return i*i*(3-2*i)},Wo=(n,e,t,i,s)=>Ir(e,t,n)*(1-Ir(i,s,n));function Ft(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var vc=[0,0,0];function os(n,e,t,i,s,r){return vc[0]=t,vc[1]=i,vc[2]=s,Xo(n,e,vc,r)}var yc={sx:0,sy:0,fx:0};function Bn(n){return yc.sx=Math.abs(n.shoulderL[0]),yc.sy=n.shoulderL[1],yc.fx=Math.abs(n.hipL[0])+.035,yc}var Lr=(n,e)=>e>0?n.handL:n.handR;function Gu(n,e,t,i,s){return os(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var Wu=.55;function Tc(n,e,t){let i=Bn(e),s=n/wt.idle.duration,r=In*s,o=e.hipHeight,a=Wo(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=Wu,Gu(e,t,i,t.handL,1),Gu(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Ft(t.footL,i.fx,0,.015),Ft(t.footR,-i.fx,0,-.015),t}var Bi=.34,Xu=.25,hm=-.33,tS=.4,nS=.37,iS=.035,wc=(Xu-hm)/Bi;function lm(n,e){if(n<Bi)return e[0]=0,e[1]=Xu-wc*n,e;let t=(n-Bi)/(1-Bi),i=-wc*(1-Bi),s=-.35*wc*(1-Bi),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*hm+(o-2*r+t)*i+(-2*o+3*r)*Xu+(o-r)*s,e[0]=tS*Math.sin(Math.PI*Math.pow(t,.8)),e}var tn=[0,0];function um(n,e,t){let i=Bn(e),s=n/wt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*In*(r-(Bi+.5)/2);t.hipsY=o-.06+iS*Math.cos(a),t.squash=1+.045*Math.cos(2*In*(r-Bi-.03)),t.lean=nS+.03*Math.cos(2*In*(r-Bi));let c=Math.cos(In*(r+.03));t.twist=.2*c,t.headYaw=-.15*c,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,lm(r,tn),Ft(t.footL,i.fx*.75,tn[0],tn[1]),lm(r<.5?r+.5:r-.5,tn),Ft(t.footR,-i.fx*.75,tn[0],tn[1]);for(let l=-1;l<=1;l+=2){let h=(1-l*c)/2;os(e,t,l*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,Lr(t,l))}return t}function dm(n,e,t){let i=Bn(e),s=In*n/wt.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Ft(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Ft(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Ft(t.footL,i.fx+.02,0,.15),Ft(t.footR,-i.fx-.03,0,-.13),t}var Yu=.35;function sS(n){return n<.06?Ir(0,.06,n):Math.exp(-9*(n-.06))*(1-Ir(.24,Yu,n))}function rS(n){if(n<.07)return Ir(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(In*e/.22)*(1-Ir(.26,Yu,n))}function oS(n,e,t){let i=Bn(e),s=e.hipHeight,r=sS(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*rS(n),t.elbows=Wu+(1-Wu)*r;for(let o=-1;o<=1;o+=2){let a=Lr(t,o);Gu(e,t,i,a,o);let c=a[0],l=a[1],h=a[2];os(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=c+(a[0]-c)*r,a[1]=l+(a[1]-l)*r,a[2]=h+(a[2]-h)*r}return Ft(t.footL,i.fx,0,.015),Ft(t.footR,-i.fx,0,-.015),t}var rs=[0,0,0];function aS(n,e,t){Tc(n,e,t);let i=Bn(e),s=n/wt.talk.duration,r=In*s,o=Wo(s,.04,.17,.4,.55),a=Wo(s,.5,.63,.8,.95),c=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),os(e,t,-(i.sx+.19),i.sy-.1+.03*c,.36,rs);for(let l=0;l<3;l++)t.handR[l]+=(rs[l]-t.handR[l])*o;os(e,t,i.sx+.19,i.sy-.12-.03*c,.34,rs);for(let l=0;l<3;l++)t.handL[l]+=(rs[l]-t.handL[l])*a;return t}var Pn=gi();function lS(n,e,t){let i=n/wt.roll.duration,s=Wo(i,0,.15,.75,1),r=Bn(e);Tc(0,e,Pn);let o=(a,c)=>a+(c-a)*s;t.hipsY=o(Pn.hipsY,.45),t.lean=o(Pn.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(Pn.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let c=Lr(t,a),l=Lr(Pn,a);c[0]=o(l[0],a*(r.sx+.2)),c[1]=o(l[1],.2),c[2]=o(l[2],.3);let h=a>0?t.footL:t.footR,f=a>0?Pn.footL:Pn.footR;h[0]=o(f[0],a*r.fx),h[1]=o(f[1],.18),h[2]=o(f[2],-.05)}return t}function cS(n,e,t){return um(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var hS=.25,uS=.85,dS=.82;function fm(n,e,t){let i=Bn(e),s=In*n/wt.coverLow.duration;return t.hipsY=hS+.006*Math.sin(s),t.lean=uS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=dS,t.elbows=1,Ft(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Ft(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Ft(t.footL,i.fx+.08,0,.12),Ft(t.footR,-i.fx-.08,0,.12),t}function pm(n,e,t,i){let s=Bn(n),r=i/wt[t].duration,o=Math.sin(In*r);return e.hipsY+=.012*Math.cos(2*In*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function fS(n,e,t){return fm(0,e,t),pm(e,t,"coverLowMove",n),t}function qu(n,e,t){let i=Bn(e),s=In*n/wt.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,os(e,t,i.sx+.14,i.sy+0,.31,t.handL),os(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Ft(t.footL,i.fx,0,.015),Ft(t.footR,-i.fx,0,-.015),t}function pS(n,e,t){return qu(0,e,t),pm(e,t,"coverTallMove",n),t}function mS(n,e,t){return dm(n*(wt.aim.duration/wt.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function gS(n,e,t){let i=n/wt.vault.duration,s=Wo(i,0,.3,.7,1),r=Bn(e);Tc(0,e,Pn);let o=(a,c)=>a+(c-a)*s;t.hipsY=o(Pn.hipsY,e.hipHeight-.02),t.lean=o(Pn.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(Pn.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let c=Lr(t,a),l=Lr(Pn,a);c[0]=o(l[0],a*(r.sx+.14)),c[1]=o(l[1],.7),c[2]=o(l[2],.62);let h=a>0?t.footL:t.footR,f=a>0?Pn.footL:Pn.footR;h[0]=o(f[0],a*(r.fx+.04)),h[1]=o(f[1],.55),h[2]=o(f[2],.3)}return t}var xS=.17,_S=.5,vS=-.9,yS=.82;function MS(n,e,t){let i=Bn(e),s=In*n/wt.coverBlindLow.duration;return t.hipsY=xS+.006*Math.sin(s),t.lean=_S+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=vS+.03*Math.sin(2*s+1),t.squash=yS,t.elbows=1,Xo(e,t,e.shoulderR,rs),Ft(t.handR,rs[0]-.02,rs[1]+.44+.008*Math.sin(s+.4),rs[2]+.12),Ft(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Ft(t.footL,i.fx+.08,0,.12),Ft(t.footR,-i.fx-.08,0,.12),t}function cm(n,e,t,i){qu(n*(wt.coverTall.duration/wt.coverBlindTallL.duration),e,t);let s=Bn(e);return os(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var SS=.3,bS=1.2,Mc=[.4,.62],Sc=[-.6,-.36];function bc(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function wS(n,e,t){let i=Bn(e),s=n/wt.crawl.duration,r=In*s;return t.hipsY=SS+.012*Math.cos(2*r),t.lean=bS+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,bc(s,Mc[1],Mc[0],.16,.04,tn),Ft(t.handL,i.sx+.12,tn[0],tn[1]),bc(s+.5,Mc[1],Mc[0],.16,.04,tn),Ft(t.handR,-i.sx-.12,tn[0],tn[1]),bc(s,Sc[1],Sc[0],.16,0,tn),Ft(t.footR,-i.fx-.02,tn[0],tn[1]),bc(s+.5,Sc[1],Sc[0],.16,0,tn),Ft(t.footL,i.fx+.02,tn[0],tn[1]),t}var TS=.05;function ln(n,e,t,i=TS){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=gi())=>t(s,r,o)})}var wt=Object.freeze({idle:ln(2.4,!0,Tc),run:ln(.56,!0,um,.008),aim:ln(1.6,!0,dm),flinch:ln(Yu,!1,oS),talk:ln(2.4,!0,aS),roll:ln(.55,!1,lS,.02),sprint:ln(.56,!0,cS,.008),coverLow:ln(2.4,!0,fm),coverLowMove:ln(.5,!0,fS),coverTall:ln(2.4,!0,qu),coverTallMove:ln(.5,!0,pS),coverPop:ln(1.6,!0,mS),vault:ln(.5,!1,gS,.02),coverBlindLow:ln(1.6,!0,MS),coverBlindTallL:ln(1.6,!0,(n,e,t)=>cm(n,e,t,1)),coverBlindTallR:ln(1.6,!0,(n,e,t)=>cm(n,e,t,-1)),crawl:ln(1,!0,wS)}),as=wc/wt.run.duration;function Yo(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(wt,n)?wt[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||gi())}function Ec(n,e,t,i=gi()){if(!(t>0))return am(n,i);if(t>=1)return am(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[Go[r]],a=e[Go[r]],c=i[Go[r]];c[0]=o[0]*s+a[0]*t,c[1]=o[1]*s+a[1]*t,c[2]=o[2]*s+a[2]*t}return i}var ES=.05,zi=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],qo=["handL","handR","footL","footR"],$u=zi.length+qo.length*3,Dr=[.35,-.2,-.8],Zu=[.75,-.85,-.15];function Vt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new it(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new At(s,3)),n}var AS=new mt,Xn=(n,e,t,i,s=0,r=0,o=0,a=1,c=1,l=1)=>n.applyMatrix4(AS.compose(new O(e,t,i),new yn().setFromEuler(new En(s,r,o)),new O(a,c,l)));function Ws(n=20,e=14){let t=new Rn(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),Yp(t)}function Ju(n,e,t){let i=Ws(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Rc(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new An(t,t,o,6,1),c=new yn().setFromUnitVectors(new O(0,1,0),new O(i/o,s/o,r/o));return a.applyMatrix4(new mt().compose(new O((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),c,new O(1,1,1))),a}function Cc(n,e){let t=Cn(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);si(t),t.computeBoundingSphere();let i=new gt(t,Ht({color:"#ffffff",vertexColors:!0}));return i.name=e,bn(i),i}function Ku(n,e,t,i,s){let r=2/n.power,o=c=>Math.sign(c)*Math.pow(Math.abs(c),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function RS(n){let e=n.torso,t=n.colors,i=n.outfit,s=(h,f)=>{let u=new wo(h.map(([d,m])=>new Ue(d,m)),22);return u.scale(1,1,e.depth),Vt(u,f)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let f=e.shirt;for(let u=1;u<f.length;u++)if(h<=f[u][1]){let d=(h-f[u-1][1])/(f[u][1]-f[u-1][1]||1);return f[u-1][0]+(f[u][0]-f[u-1][0])*d}return 0},c=(h,f)=>{let u=a(f);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},l=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let f=Ws(14,10);Xn(f,h*Math.abs(n.shoulderL[0])*.97,l-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),f.computeVertexNormals(),r.push(Vt(f,t.shirt))}if(i.collar){let h=new Os(.1,.03,8,20);Xn(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Vt(h,t.collar))}if(i.logo){let u=new An(.03,.03,.01,12);Xn(u,.105,.28,c(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Vt(u,t.logo))}if(i.lanyard){let f=c(0,.15)+.012;for(let m of[-1,1]){let x=[m*.075,o-.03,.085],p=[m*.05,.34,c(.05,.34)+.014],g=[m*.014,.15+.05,c(.014,.15+.05)+.01];r.push(Vt(Rc(x,p,.008),t.lanyard),Vt(Rc(p,g,.008),t.lanyard))}let u=new Ot(.075,.1,.014);Xn(u,0,.15,f,-.05,0,.04);let d=new Ot(.077,.026,.016);Xn(d,0,.15+.028,f,-.05,0,.04),r.push(Vt(u,t.badge),Vt(d,t.badgeStripe))}return Cc(r,"torso")}function CS(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=Ju((a,c,l,h)=>Ku(e,a,c,l,h),40,28);r.push(Vt(o,i.skin),Vt(PS(e,t),i.hair));for(let a of[-1,1]){let c=Ws(12,8);Xn(c,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),c.computeVertexNormals(),r.push(Vt(c,i.skin))}{let a=n.face,c=(a.eyeY+a.mouthY)/2-.005,l=Ws(12,8);Xn(l,0,c,IS(e,0,c),0,0,0,e.nose*.9,e.nose*.8,e.nose),l.computeVertexNormals(),r.push(Vt(l,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,c=new Sn;c.getPoint=(x,p=new O)=>p.set(Math.cos(Math.PI*x)*(e.rx+t.thickness+.012),Math.sin(Math.PI*x)*a,0);let l=new To(c,24,.014,6,!1);Xn(l,0,0,-.03,-.12,0,0),r.push(Vt(l,i.headset));for(let x of[-1,1]){let p=new An(.055,.06,.05,14);Xn(p,x*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Vt(p,i.headset))}let h=n.face,f=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],d=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Vt(Rc(f,u,.009),i.headset),Vt(Rc(u,d,.009),i.headset));let m=Ws(10,8);Xn(m,d[0],d[1],d[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(Vt(m,i.mic))}return Cc(r,"headMesh")}var ls=48,Ac=12;function PS(n,e){let t=(u,d)=>.04+.17*d+.025*Math.max(d,0)*u,i=[0,0,0],s=tc.smoothstep,r=[],o=(u,d,m)=>{let x=Math.sin(u)*Math.sin(d),p=Math.cos(u),g=Math.sin(u)*Math.cos(d);Ku(n,x,p,g,i);let v=i[0]/(n.rx*n.rx),S=i[1]/(n.ry*n.ry),M=i[2]/(n.rz*n.rz),b=Math.hypot(v,S,M)||1;v/=b,S/=b,M/=b;let w=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(g+.3,0),_=e.quiff?e.lift*Math.max(g,0)*s(i[1],.12,.26)*(1-.5*x):0,y=e.back*Math.max(-g,0)*s(i[1],-.15,.1),T=m?-.01:e.thickness*(1-.55*Math.min(w,1))+_+y;r.push(i[0]+v*T,i[1]+S*T,i[2]+M*T)},a=u=>{let d=0,m=Math.PI;for(let x=0;x<40;x++){let p=(d+m)/2,g=Math.sin(p)*Math.sin(u),v=Math.sin(p)*Math.cos(u);Ku(n,g,Math.cos(p),v,i),i[1]>t(g,v)?d=p:m=p}return d};o(0,0,!1);let c=[];for(let u=0;u<ls;u++)c.push(a(u/ls*Math.PI*2));for(let u=1;u<=Ac+1;u++)for(let d=0;d<ls;d++){let m=d/ls*Math.PI*2,x=u>Ac;o(x?c[d]+.03:c[d]*(u/Ac),m,x)}let l=(u,d)=>1+(u-1)*ls+d%ls,h=[];for(let u=0;u<ls;u++)h.push(0,l(1,u),l(1,u+1));for(let u=1;u<=Ac;u++)for(let d=0;d<ls;d++){let m=l(u,d),x=l(u,d+1),p=l(u+1,d),g=l(u+1,d+1);h.push(m,p,g,m,g,x)}let f=new Ut;return f.setAttribute("position",new ft(r,3)),f.setIndex(h),f.computeVertexNormals(),f}function IS(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function mm(n,e){let t=n.hand.radius,i=n.colors,s=Ws(14,10);Xn(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=Ws(10,8);return Xn(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),Cc([Vt(s,i.skin),Vt(r,i.skin)],e>0?"handL":"handR")}function gm(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,c=Ju((h,f,u,d)=>{d[0]=h*s*(u>0?1:.9),d[1]=Math.max(a*.8,t.height*.55+f*t.height*.6-Math.max(u,0)*t.height*.25),d[2]=o+u*r*.96},20,12),l=Ju((h,f,u,d)=>{d[0]=h*(s+.008),d[1]=Math.min(Math.max(a*.5+f*a,0),a),d[2]=o+u*(r+.008)},20,6);return Cc([Vt(c,i.shoe),Vt(l,i.sole)],e>0?"footL":"footR")}function cs(n){let e=new Mt;e.name=n.name||"character";let t=new Mt;t.name="body",e.add(t);let i=new Mt;i.name="hips",i.rotation.order="YXZ";let s=RS(n);i.add(s);let r=new Mt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=CS(n);o.position.y=n.head.centerY,r.add(o);let a=om({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let c=[mm(n,1),mm(n,-1)],l=[gm(n,1),gm(n,-1)],h=[0,1].map(()=>Hu({radius:n.armRadius,color:n.colors.skin})),f=[0,1].map(()=>Hu({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",f[0].mesh.name="legL",f[1].mesh.name="legR",t.add(...c,...l,h[0].mesh,h[1].mesh,f[0].mesh,f[1].mesh);let u=pc({rx:.45,rz:.38,opacity:.55});e.add(u);let d=gi(),m=gi(),x=[];for(let X=0;X<$u;X++)x.push({x:0,v:0});let p=!1,g=ES,v=(X,ce)=>ce<zi.length?X[zi[ce]]:X[qo[(ce-zi.length)/3|0]][(ce-zi.length)%3];function S(X,ce,pe){ce<zi.length?X[zi[ce]]=pe:X[qo[(ce-zi.length)/3|0]][(ce-zi.length)%3]=pe}function M(X,ce){ce>=0&&(g=ce),d.hipsY=X.hipsY,d.lean=X.lean,d.twist=X.twist,d.headYaw=X.headYaw,d.headPitch=X.headPitch,d.squash=X.squash,d.elbows=X.elbows>=0?X.elbows:0;for(let pe=0;pe<4;pe++){let Z=X[qo[pe]],he=d[qo[pe]];he[0]=Z[0],he[1]=Z[1],he[2]=Z[2]}if(!p){p=!0;for(let pe=0;pe<$u;pe++)x[pe].x=v(d,pe),x[pe].v=0}}let b=[0,0,0],w=[0,0,0],_=[0,0,0],y=[0,0,0],T={mid:[0,0,0],end:[0,0,0],stretch:1},E=new O,R=new O,I=new O,D=new mt,P=n.armLength/2,U=n.legLength/2,F=n.ankleHeight;function G(X,ce,pe){let Z=Math.cos(m.twist),he=Math.sin(m.twist);y[0]=X*Z+pe*he,y[1]=ce,y[2]=-X*he+pe*Z}function V(){let X=m.squash>.2?m.squash:.2,ce=1/Math.sqrt(X);t.scale.set(ce,X,ce),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let pe=0;pe<2;pe++){let Z=pe===0?1:-1;Xo(n,m,pe===0?n.shoulderL:n.shoulderR,b);let he=m.elbows<0?0:m.elbows>1?1:m.elbows;G(Z*(Dr[0]+(Zu[0]-Dr[0])*he),Dr[1]+(Zu[1]-Dr[1])*he,Dr[2]+(Zu[2]-Dr[2])*he),zu(b,pe===0?m.handL:m.handR,P,P,y,T),h[pe].set(b,T.mid,T.end,T.stretch);let Se=c[pe];Se.position.set(T.end[0],T.end[1],T.end[2]),E.set(T.end[0]-T.mid[0],T.end[1]-T.mid[1],T.end[2]-T.mid[2]),E.lengthSq()<1e-10&&E.set(0,-1,0),E.normalize(),R.set(-Z*Math.cos(m.twist),0,Z*Math.sin(m.twist)),R.addScaledVector(E,-R.dot(E)),R.lengthSq()<1e-4&&R.set(0,0,1).addScaledVector(E,-E.z),R.normalize(),I.crossVectors(R,E),D.makeBasis(R,E,I),Se.quaternion.setFromRotationMatrix(D),Xo(n,m,pe===0?n.hipL:n.hipR,w);let Ve=pe===0?m.footL:m.footR;_[0]=Ve[0],_[1]=Ve[1]+F,_[2]=Ve[2],G(Z*.15,0,1),zu(w,_,U,U,y,T),f[pe].set(w,T.mid,T.end,T.stretch);let K=l[pe];K.position.set(T.end[0],T.end[1]-F,T.end[2]),K.rotation.set(Math.min(Math.max(T.end[1]-F,0),.3)*1.1,m.twist*.3,0)}}function z(X){if(p)for(let ce=0;ce<$u;ce++)wn(x[ce],v(d,ce),g,X),S(m,ce,x[ce].x);V(),a.update(X)}Yo("idle",0,n,m),V();function H(){e.traverse(X=>{!X.isMesh||X.userData.isOutline||(X.geometry.dispose(),X!==u&&X.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:M,update:z,dispose:H,shadow:u}}var LS=.15,DS=.03,xm=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function hs(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=wt[t].ease,c=gi(),l=gi(),h=Yo(t,0,e);Ec(h,h,1,c);function f(m,{fade:x}={}){Object.prototype.hasOwnProperty.call(wt,m)&&(m===t&&wt[m].loop||(m==="flinch"&&t!=="flinch"&&(s=t),Ec(h,h,1,c),a=u(),r=x===void 0?m==="flinch"?DS:LS:Math.max(x,0),o=0,t=m,i=0,n.face.setTalking(m==="talk")))}function u(){let m=r>0?xm(o/r):1;return a+(wt[t].ease-a)*m}function d(m,x=m){let p=wt[t];if(i+=m,o+=x,p.loop)i>=p.duration&&(i-=p.duration*Math.floor(i/p.duration));else if(i>=p.duration)return f(s),d(0);Yo(t,i,e,l),Ec(c,l,r>0?xm(o/r):1,h),n.setPose(h,u())}return{play:f,update:d,current:()=>t}}function Pc(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,c=s>>o&255;r|=Math.round(a+(c-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function _m(n){for(let e of Object.values(n))e&&typeof e=="object"&&_m(e);return Object.freeze(n)}var ju=fe.glorpPurple,Zt=_m({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:ju,collar:Pc(ju,fe.ink,.25),logo:fe.gel,pants:Pc(fe.planet,fe.ink,.3),skin:fe.daleSkin,hair:fe.daleHair,shoe:Pc(fe.ink,ju,.3),sole:fe.cream,lanyard:fe.hotPink,badge:fe.cream,badgeStripe:fe.teal,headset:Pc(fe.ink,fe.lilac,.25),mic:fe.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var NS=1.5,US=8,OS=-.2,FS=1.3,vm=.6,kS=Math.atan2(1.3,-4),BS=new O(-.45,.22,-1).applyEuler(new En(-.2,.68,0)).toArray(),ym=10,zS=.8,HS=.05,VS=["idle","run","aim","flinch","talk"],$o=Object.keys(Gs),Mm=(n,e,t)=>Math.min(t,Math.max(e,n));function GS(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function WS(n,e,t=le.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],c=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:c}}function Sm({canvas:n,gl:e}){let t=hc(n,e),i=t.renderer,s=cc(n),r=document.getElementById("cr-readout"),o=new Ps,a=new an(le.camera.fov,1,.1,100),c=uc({planetDir:BS});o.add(c.mesh);let l=nm();o.add(l.group);let h=[];function f(K,be,_e){let De=cs(_e===void 0?Zt:{...Zt,face:{...Zt.face,seed:_e}});De.root.position.set(K,0,be),De.root.rotation.y=vm,o.add(De.root);let qe=hs(De),je={rig:De,anim:qe};return h.push(je),je}let u=f(l.spawn[0],l.spawn[2]),d=[],m=!1,x=0,p=!0,g=!1,v=.685,S=.1,M=4.6,b=!1,w=new O(l.spawn[0],l.spawn[1]+1.1,l.spawn[2]),_=[0,0,0];function y(K){if(!(!VS.includes(K)&&!Object.prototype.hasOwnProperty.call(wt,K))){u.anim.play(K);for(let be of d)be.anim.play(m?"run":K)}}function T(K){let be=$o.indexOf(K);if(!(be<0)){x=be;for(let _e of h)_e.rig.face.setExpression(K)}}function E(K){p=!!K,Lu(o,p)}function R(K){g=!!K,u.rig.root.rotation.y=g?kS:vm}function I(K){if(K=!!K,K!==m)if(m=K,K){let be=l.spawn[2]+2.4;for(let _e=0;_e<ym;_e++){let De=l.spawn[0]+(_e-(ym-1)/2)*zS,qe=f(De,be,10+_e);qe.anim.play("run"),qe.rig.face.setExpression($o[x]),d.push(qe)}Lu(o,p)}else{for(let be of d)be.rig.dispose(),h.splice(h.indexOf(be),1);d=[]}}function D(){let K=t.resize();a.aspect=K.aspect,a.updateProjectionMatrix()}D(),window.addEventListener("resize",D),n.addEventListener("mousedown",K=>{K.button===0&&(b=!0)}),window.addEventListener("mouseup",()=>{b=!1}),window.addEventListener("mousemove",K=>{b&&!s.isLocked()&&P(K.movementX||0,K.movementY||0,.006)}),n.addEventListener("wheel",K=>{M=Mm(M*Math.exp(K.deltaY*.001),NS,US)},{passive:!0});function P(K,be,_e){v-=K*_e,S=Mm(S+be*_e,OS,FS)}window.addEventListener("keydown",K=>{K.repeat||(K.code==="Digit4"?y("flinch"):K.code==="Digit5"?y("talk"):K.code==="KeyO"?E(!p):K.code==="KeyP"?I(!m):K.code==="KeyL"?s.requestLock():K.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let U=0,F=0,G=0,V=0,z=0,H=0,X=null,ce=0;window.__cr.stats=()=>({fps:U,ms:F,calls:z,tris:H,scale:t.scale(),characters:h.length}),window.__cr.anim=y,window.__cr.orbit=(K,be,_e)=>{v=K,S=be,_e&&(M=_e)},window.__cr.expression=T,window.__cr.perf=I,window.__cr.gameCam=R,window.__cr.outlines=E;function pe(K){K.pressed.weapon1&&y("idle"),K.pressed.weapon2&&y("run"),K.pressed.weapon3&&y("aim"),K.pressed.interact&&T($o[(x+1)%$o.length]),K.pressed.grenade&&R(!g)}function Z(){if(g){let K=WS([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(K.pos),a.lookAt(K.look[0],K.look[1],K.look[2])}else GS(v,S,M,_),a.position.set(w.x+_[0],w.y+_[1],w.z+_[2]),a.lookAt(w)}let he=K=>K.toFixed(2);function Se(){let K=X?Object.keys(X.held).filter(De=>X.held[De]).join(" "):"",be=s.padStatus(),_e=X&&be!=="none"&&be!=="unrecognised controller"?`Gamepad: ${be}
  move ${he(X.moveX)}, ${he(X.moveY)}  look ${he(X.lookX)}, ${he(X.lookY)}
  held: ${K||"nothing"}`:`Gamepad: ${be}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${$o[x]}   camera: ${g?"game":"orbit"}   outlines: ${p?"on":"off"}`,`${Math.round(U)} fps   ${he(F)} ms   scale ${t.scale()}`,`${z} draw calls   ${H} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${X?Math.round(X.lookDX):0}, ${X?Math.round(X.lookDY):0}`,_e].join(`
`)}let Ve=lc({step(){},render(K,be){let _e=Math.min(be,HS);X=s.poll(),pe(X),s.isLocked()&&!g&&P(X.lookDX,X.lookDY,.003),g||P(X.lookX*600*_e,X.lookY*600*_e,.004),c.update(performance.now()/1e3),l.update(_e);for(let De of h)De.anim.update(_e),De.rig.update(_e);Z(),i.render(o,a),z=i.info.render.calls,H=i.info.render.triangles,G++,V+=be,V>=1&&(U=G/V,F=V/G*1e3,G=0,V=0),ce+=be,ce>=.1&&(ce=0,Se()),t.frameDone(be*1e3)}});Z(),i.render(o,a),z=i.info.render.calls,H=i.info.render.triangles,Se(),Ve.start()}function bm(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function pt(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var Qu=1e-9;function Nr(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,c=n.filter(p=>p.max[1]>o&&p.min[1]<a),l=Math.hypot(t[0],t[2]),h=Math.max(1,Math.ceil(l/(i/2))),f=t[0]/h,u=t[2]/h,d=!1,m=0,x=0;for(let p=0;p<h;p++){let g=r[0],v=r[2];r[0]+=f,r[2]+=u;let S=!1;for(let M=0;M<5;M++){let b=null,w=Qu;for(let _ of c){let y=Math.max(_.min[0],Math.min(r[0],_.max[0])),T=Math.max(_.min[2],Math.min(r[2],_.max[2])),E=r[0]-y,R=r[2]-T,I=Math.hypot(E,R),D,P,U;if(I>Qu){if(I>=i)continue;D=i-I,P=E/I,U=R/I}else{let F=[[r[0]-_.min[0],-1,0],[_.max[0]-r[0],1,0],[r[2]-_.min[2],0,-1],[_.max[2]-r[2],0,1]],G=F[0];for(let V of F)V[0]<G[0]&&(G=V);D=G[0]+i,P=G[1],U=G[2]}D>w&&(w=D,b=[P,U])}if(!b){S=!0;break}if(M===4)break;r[0]+=b[0]*w,r[2]+=b[1]*w,d=!0,m=b[0],x=b[1]}S||(r[0]=g,r[2]=v,d=!0)}return d||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:d,normal:[m,0,x]}}function xi(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,c=1,l=!0;for(let h=0;h<3&&l;h++){let f=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<Qu)(e[h]<f||e[h]>u)&&(l=!1);else{let d=(f-e[h])/r[h],m=(u-e[h])/r[h];if(d>m){let x=d;d=m,m=x}d>a&&(a=d),m<c&&(c=m),a>c&&(l=!1)}}l&&a<s&&(s=a)}return s}function Ic(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var ed=["fov","right","up","back"],Lc=Math.PI*2,XS=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Em=n=>n!=="normal"&&XS.includes(n);function wm(n,e,t={}){let i=Em(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of ed)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function Tm(n,e){let t=Em(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function Am(n,e,t,i=0){return e?n>=t:n>=t+i}function Rm({tuning:n=le.camera,look:e=le.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},c=[0,0,0],l={x:0,v:0},h=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],f={},u=[0,0,0],d=[0,0,0],m=[0,0,0],x=[0,0,0],p=[0,0,1],g={pos:x,dir:p,fov:70},v=1,S=0,M=!1;return{yaw:0,pitch:0,look(w,_,y,T,E,R,I=1){let D=R?e.aimScale:1,P=e.invertY?-1:1;this.yaw-=w*e.mouse*D,this.pitch-=_*e.mouse*D*P;let U=e.pad,F=D*I;y&&(this.yaw-=Math.sign(y)*Math.abs(y)**U.expo*U.yawRate*F*E),T&&(this.pitch-=Math.sign(T)*Math.abs(T)**U.expo*U.pitchRate*F*E*P),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(w=1){let _=n.bump;if(!_||!(_.amount>0)||!(w>0))return;s.x=Math.min(s.x+_.amount*w,2*_.amount);let y=n.slamShake;y&&y.amount>0&&y.time>0&&(o.t=y.time,o.amp=y.amount*w)},dip(w){Number.isFinite(w)&&w>0&&(r.x=Math.min(r.x+w,.1))},kick(w,_=0){let y=n.recoil?n.recoil.max:0;if(!(y>0))return;let T=(E,R)=>Math.max(-y,Math.min(y,E+(Number.isFinite(R)?R:0)));a.p.x=Math.max(0,T(a.p.x,w)),a.y.x=T(a.y.x,_)},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(w,_,y="normal",T=1){_!==void 0&&(this.yaw=_),wm(n,y,f);for(let E of ed)t[E].x=f[E],t[E].v=0;i.x=T,i.v=0,l.x=Tm(n,y),l.v=0;for(let E=0;E<3;E++)h[E].x=w[E],h[E].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,v=1,M=!0},update(w,{target:_,mode:y="normal",side:T=1},E){M||this.snap(_,this.yaw,y,T),w>0||(w=0),S+=w,wm(n,y,f);for(let _e of ed)wn(t[_e],f[_e],n.blendHalfLife,w);wn(l,Tm(n,y),n.blendHalfLife,w),wn(i,T,n.sideHalfLife,w);for(let _e=0;_e<3;_e++)wn(h[_e],_[_e],n.followHalfLife,w);wn(s,0,n.bump?n.bump.halfLife:0,w),wn(r,0,n.bump?n.bump.halfLife:0,w);let R=n.recoil?n.recoil.halfLife:0;wn(a.p,0,R,w),wn(a.y,0,R,w);let I=Math.PI/180,D=this.yaw+a.y.x*I,P=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*I)),U=Math.sin(D),F=Math.cos(D),G=Math.sin(P),V=Math.cos(P),z=n.probeRadius,H=t.back.x;u[0]=h[0].x,u[1]=h[1].x+t.up.x,u[2]=h[2].x,c[0]=_[0],c[1]=_[1]+t.up.x,c[2]=_[2];let X=xi(E,c,u,z);if(X<1)for(let _e=0;_e<3;_e++)u[_e]=c[_e]+(u[_e]-c[_e])*X;let ce=t.right.x*i.x;d[0]=u[0]-F*ce,d[1]=u[1],d[2]=u[2]+U*ce;let pe=xi(E,u,d,z);for(let _e=0;_e<3;_e++)d[_e]=u[_e]+(d[_e]-u[_e])*pe;p[0]=U*V,p[1]=G,p[2]=F*V;for(let _e=0;_e<3;_e++)m[_e]=d[_e]-p[_e]*H;let Z=xi(E,d,m,z),he=H>1e-6?Math.max(n.minBack/H,Z):1;he>1&&(he=1),he<v?v=he:v+=(he-v)*(n.wallReturnHalfLife>0?1-Math.pow(2,-w/n.wallReturnHalfLife):1);let Se=H*v-s.x;for(let _e=0;_e<3;_e++)x[_e]=d[_e]-p[_e]*Se;let Ve=xi(E,u,x,z);if(Ve<1)for(let _e=0;_e<3;_e++)x[_e]=u[_e]+(x[_e]-u[_e])*Ve;let K=n.shake;if(K&&K.amp&&l.x>0){let _e=K.amp*(l.x>1?1:l.x),De=Math.sin(Lc*K.hz*S)*_e,qe=Math.sin(Lc*K.hz*1.3*S+1)*_e,je=-F,ie=U;x[0]+=je*De-ie*p[1]*qe,x[1]+=(ie*p[0]-je*p[2])*qe,x[2]+=ie*De+je*p[1]*qe}x[1]-=r.x;let be=n.slamShake;if(o.t>0&&be&&be.time>0){o.t=Math.max(0,o.t-w);let _e=o.t/be.time,De=o.amp*_e*_e,qe=Math.sin(Lc*be.hz*o.t)*De,je=Math.sin(Lc*be.hz*1.27*o.t+2)*De,ie=-F,ye=U;x[0]+=ie*qe-ye*p[1]*je,x[1]+=(ye*p[0]-ie*p[2])*je,x[2]+=ye*qe+ie*p[1]*je}return g.fov=t.fov.x,g}}}var Pm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Pm)),n),us=.3,YS=[pt([-12,-1,-12],[12,0,12],"floor"),pt([-12-us,0,-12-us],[12+us,4,-12]),pt([-12-us,0,12],[12+us,4,12+us]),pt([-12-us,0,-12],[-12,4,12]),pt([12,0,-12],[12+us,4,12]),pt([5,0,-9],[5.3,4,-3]),pt([6.7,0,-9],[7,4,-3]),pt([-11,0,-7.3],[-6,3,-7]),pt([-6.3,0,-11],[-6,3,-7]),pt([-4,0,-3],[-2,1,-2.4],"low"),pt([3,0,3],[3.6,1,5],"low"),pt([-5,0,3],[-3.8,2.2,3.6],"tall"),pt([1,0,-6],[1.6,2.2,-4],"tall"),pt([-9.4,0,.6],[-8.6,4,1.4],"pillar"),pt([8.6,0,3.6],[9.4,4,4.4],"pillar"),pt([-9,0,6.5],[-6,1,7.1],"low"),pt([-4,0,6.5],[-1,1,7.1],"low"),pt([6,0,6],[10,2.2,6.6],"tall"),pt([-12,0,-1],[-10,1,-.4],"low")],Im=[];for(let n=0;n<=12;n++)Im.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var Uc=Pm({boxes:YS,marks:Im,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]}),Cm={wall:fe.lilac,low:fe.teal,tall:fe.hotPink,pillar:fe.cream};function Dc(n){let e=n.map(t=>{let i=new Ot(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return Cn(e,!1)}var ds=.03,fs=.3,ps=.12,Nc=2;function qS(n=Uc){let e=n.boxes.find(l=>l.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],c=(l,h)=>a.push({min:l,max:h});c([t,0,i],[s,fs,i+ds]),c([t,0,r-ds],[s,fs,r]),c([t,0,i],[t+ds,fs,r]),c([s-ds,0,i],[s,fs,r]);for(let l=t+Nc;l<s-.5;l+=Nc)c([l-ps/2,fs,i],[l+ps/2,o,i+ds]),c([l-ps/2,fs,r-ds],[l+ps/2,o,r]);for(let l=i+Nc;l<r-.5;l+=Nc)c([t,fs,l-ps/2],[t+ds,o,l+ps/2]),c([s-ds,fs,l-ps/2],[s,o,l+ps/2]);return a}function Lm(n=Uc){let e=new Mt,t=n.boxes.find(s=>s.kind==="floor");e.add(fc({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));for(let s of Object.keys(Cm)){let r=n.boxes.filter(a=>a.kind===s);if(!r.length)continue;let o=new gt(si(Dc(r)),Ht({color:Cm[s]}));o.name=`grey-${s}`,bn(o),e.add(o)}let i=qS(n);if(i.length){let s=new gt(Dc(i),Ht({color:fe.shadowTint}));s.name="grey-wall-trim",e.add(s)}if(n.marks.length){let s=new gt(Dc(n.marks),Ht({color:fe.hotPink}));s.name="grey-marks",e.add(s)}if(n.ammoCrates&&n.ammoCrates.length){let s=[];for(let o of n.ammoCrates)s.push({min:[o.pos[0]-.35,0,o.pos[2]-.25],max:[o.pos[0]+.35,.4,o.pos[2]+.25]}),s.push({min:[o.pos[0]-.39,.4,o.pos[2]-.29],max:[o.pos[0]+.39,.5,o.pos[2]+.29]});let r=new gt(si(Dc(s)),Ht({color:fe.playerOrange}));r.name="grey-crate",bn(r),e.add(r)}if(n.landmark){let s=n.landmark,r=ku({text:s.text,w:s.w,h:s.h});r.position.set(s.pos[0],s.pos[1],s.pos[2]),r.rotation.y=Math.PI,e.add(r)}return{group:e,boxes:n.boxes,update(s){}}}var Dm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Dm)),n),ms=.3,_i=7,vi=15,$S=[pt([-_i,-1,-vi],[_i,0,vi],"floor"),pt([-_i-ms,0,-vi-ms],[_i+ms,4,-vi]),pt([-_i-ms,0,vi],[_i+ms,4,vi+ms]),pt([-_i-ms,0,-vi],[-_i,4,vi]),pt([_i,0,-vi],[_i+ms,4,vi]),pt([-5,0,-9.5],[-3,1,-8.5],"low"),pt([2,0,-9.5],[4,1,-8.5],"low"),pt([-.4,0,-7.4],[.4,4,-6.6],"pillar"),pt([-1,0,-3.5],[1,1,-2.5],"low"),pt([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),pt([3.5,0,-1.5],[5.5,1,-.5],"low"),pt([-4.5,0,3.5],[-2.5,1,4.5],"low"),pt([2.5,0,3.5],[4.5,1,4.5],"low"),pt([-.4,0,6.6],[.4,4,7.4],"pillar"),pt([-4.5,0,9],[-2.5,1,10],"low"),pt([2.5,0,9],[4.5,1,10],"low"),pt([-1.5,0,12],[1.5,2.2,12.6],"tall")],ZS=[-12,-6,.5,7,11],JS=[-6,-2,2,6],Oc=[];for(let n of ZS)for(let e of JS)Oc.push([e,n]);Oc.push([0,-5],[0,0],[0,9.5]);Oc.push([-3.5,13.5],[3.5,13.5]);var Nm=Dm({name:"kioskRow",boxes:$S,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],waypoints:Oc,ammoCrates:[{pos:[5.5,0,-12.5]}],landmark:{pos:[0,3,14.7],text:"SERVICE DESK",w:6,h:1.2}});var gs=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},td=class extends gs{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function nd(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var KS={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:nd,toHexString:nd},Jo={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},jS={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=Jo.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return Jo.toHexString(s)}},QS={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=Jo.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return Jo.toHexString(s)}},eb=[KS,Jo,jS,QS];function tb(n){return eb.find(e=>e.match(n))}var id=class extends gs{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=tb(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=nd(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Zo=class extends gs{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},sd=class extends gs{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))},o=!1,a,c,l,h,f,u=5,d=v=>{a=v.clientX,c=l=v.clientY,o=!0,h=this.getValue(),f=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=v=>{if(o){let S=v.clientX-a,M=v.clientY-c;Math.abs(M)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>u&&x()}if(!o){let S=v.clientY-l;f-=S*this._step*this._arrowKeyMultiplier(v),h+f>this._max?f=this._max-h:h+f<this._min&&(f=this._min-h),this._snapClampSetValue(h+f)}l=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},p=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(g,v,S,M,b)=>(g-v)/(S-v)*(b-M)+M,t=g=>{let v=this.$slider.getBoundingClientRect(),S=e(g,v.left,v.right,this._min,this._max);this._snapClampSetValue(S)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,c,l=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,c=g.touches[0].clientY,o=!0):l(g),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",u))},f=g=>{if(o){let v=g.touches[0].clientX-a,S=g.touches[0].clientY-c;Math.abs(v)>Math.abs(S)?l(g):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",u))}else g.preventDefault(),t(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",u)},d=this._callOnFinishChange.bind(this),m=400,x,p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();let S=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(d,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},rd=class extends gs{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},od=class extends gs{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},nb=`.lil-gui {
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
}`;function ib(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var Um=!1,Fc=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!Um&&a&&(ib(nb),Um=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new rd(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new sd(this,e,t,i,s,r);case"boolean":return new td(this,e,t);case"string":return new od(this,e,t);case"function":return new Zo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new id(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Zo||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Zo)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var B=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function Om(n){let e=(t,i,s,r)=>B(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Ko=Object.freeze([B("move.jog",1,10,.1),B("move.aimWalk",.5,6,.1),B("move.sprint",2,14,.1),B("move.accelTime",.01,.6,.01),B("move.stopTime",.01,.6,.01),B("move.turnRate",1,40,.5),B("move.aimTurnRate",1,40,.5),B("move.sprintTurnRate",.2,20,.1),B("move.rollDistance",1,12,.1),B("move.rollTime",.2,1.5,.01),B("move.rollEase",1,4,.05),B("move.rollBuffer",0,.5,.01),B("move.tapMax",.05,.5,.01),B("move.stickSprintMin",0,1,.05),B("move.faceMinSpeed",0,2,.05),B("move.sprintHeadingMinSpeed",0,3,.05),B("move.runClipMinSpeed",0,2,.05),B("move.runRateMin",.1,2,.05),B("move.runRateMax",.5,4,.05),B("move.sprintRateMin",.1,2,.05),B("move.sprintRateMax",.5,4,.05),B("move.stepEvery",.4,4,.05),B("move.stepEverySprint",.4,6,.05),B("move.crawlSpeed",.2,4,.05),B("move.crawlTurnRate",.5,20,.5),B("camera.fov",40,110,1),B("camera.right",-1.5,1.5,.01),B("camera.up",.5,3,.01),B("camera.back",.5,6,.05),B("camera.aim.fov",20,90,1),B("camera.aim.back",.3,5,.05),B("camera.sprint.fov",50,120,1),B("camera.sprint.up",.3,3,.01),B("camera.sprint.back",.5,6,.05),B("camera.sprint.shakeWeight",0,3,.05),B("camera.coverLow.fov",50,120,1),B("camera.coverLow.right",-1.5,1.5,.01),B("camera.coverLow.up",.3,3,.01),B("camera.coverLow.back",.5,6,.05),B("camera.coverTall.fov",50,120,1),B("camera.coverTall.right",-1.5,1.5,.01),B("camera.coverTall.up",.3,3,.01),B("camera.coverTall.back",.5,6,.05),B("camera.downed.fov",40,120,1),B("camera.downed.up",.2,3,.01),B("camera.downed.back",.5,6,.05),B("camera.bump.amount",0,.6,.01),B("camera.bump.halfLife",.01,.3,.005),B("camera.slamShake.amount",0,.3,.005),B("camera.slamShake.time",.02,1,.01),B("camera.slamShake.hz",2,60,.5),B("camera.blendHalfLife",0,.5,.005),B("camera.followHalfLife",0,.5,.005),B("camera.sideHalfLife",0,.6,.005),B("camera.headHideDist",0,2,.05),B("camera.headHideMargin",0,1,.01),B("camera.shake.amp",0,.15,.001),B("camera.shake.hz",1,30,.5),B("camera.probeRadius",.05,.6,.01),B("camera.minBack",0,2,.01),B("camera.wallReturnHalfLife",0,1,.01),B("camera.pitchMin",-1.5,0,.01),B("camera.pitchMax",0,1.5,.01),B("look.mouse",5e-4,.008,1e-4),B("look.pad.yawRate",.5,10,.1),B("look.pad.pitchRate",.5,10,.1),B("look.pad.expo",1,3,.05),B("look.aimScale",.1,1.5,.01),{path:"look.invertY"},B("cover.grabRange",0,5,.05),B("cover.grabAngle",0,180,1),B("cover.grabViewAngle",0,180,1),B("cover.grabSlack",0,5,.05),B("cover.grabMinTilt",0,1,.05),B("cover.gap",0,5,.01),B("cover.endInset",0,5,.01),B("cover.minLength",0,5,.05),B("cover.slideSpeed",0,30,.5),B("cover.slideMinTime",0,2,.01),B("cover.slideMaxTime",0,2,.01),B("cover.slideTurnRate",1,60,.5),B("cover.moveSpeed",0,30,.1),B("cover.alongDeadzone",0,1,.05),B("cover.leaveTilt",0,1,.05),B("cover.leaveAngle",0,180,1),B("cover.endLeaveTime",0,2,.01),B("cover.cornerZone",0,5,.05),B("cover.popTime",0,2,.01),B("cover.blindTime",0,2,.01),B("cover.popShift",0,5,.05),B("cover.pushAngle",0,180,1),B("cover.lowDrawBack",0,1,.01),B("cover.blindDrawBack",0,1,.01),B("cover.vaultTime",0,2,.01),B("cover.vaultMaxDepth",0,5,.05),B("cover.vaultHop",0,5,.05),B("cover.vaultExitSpeed",0,30,.1),B("cover.swapRange",0,5,.05),B("cover.swapSpeed",0,30,.5),B("cover.swapAngle",0,180,1),B("cover.swapMaxOffset",0,5,.05),B("cover.slamSquash",0,1,.01),B("cover.slamSquashTime",0,2,.01),B("cover.thudVolume",0,1,.05),B("cover.autoSlam",0,1,1),B("cover.autoAngle",0,90,1),B("cover.autoDist",0,1,.01),B("cover.autoMinTilt",0,1,.05),B("cover.autoMinSpeed",0,12,.1),B("cover.autoTime",0,1,.01),...Om("regret"),...Om("pistol"),B("combat.fireBuffer",0,.5,.01),B("combat.autoReload",0,1,1),B("combat.minRate",.01,1,.01),B("combat.minReloadTime",.01,.5,.01),B("combat.muzzleUp",.5,2,.01),B("combat.muzzleRight",-1,1,.01),B("combat.muzzleForward",0,2,.01),B("combat.blindLift",0,1,.01),B("combat.blindReach",0,1,.01),B("combat.crateRadius",.3,3,.05),B("combat.crouchHead",0,3,.01),B("combat.crouchBodyTop",0,3,.01),B("combat.shoulderDrop",0,1,.01),B("combat.pickupRadius",.2,3,.05),B("health.max",1,500,1),B("health.regenDelay",0,15,.1),B("health.regenTime",0,15,.1),B("health.downedTime",0,60,.5),B("health.standInRevive",0,1,1),B("health.reviveTime",0,10,.1),B("health.reviveHealth",0,1,.05),B("health.godMode",0,1,1),B("associate.radius",0,3,.01),B("associate.height",0,3,.01),B("associate.pointSpacing",.2,3,.01),B("associate.reserveRadius",0,3,.01),B("associate.popShift",0,3,.01),B("associate.linkMax",2,15,.5),B("associate.health",1,1e3,1),B("associate.runSpeed",0,12,.1),B("associate.turnRate",.5,40,.5),B("associate.arriveDist",.01,1,.01),B("associate.stuckTime",.1,5,.1),B("associate.popTime",0,1,.01),B("associate.telegraphTime",0,2,.01),B("associate.burstTime",0,5,.1),B("associate.rate",.5,20,.5),B("associate.damage",0,50,.5),B("associate.range",5,100,1),B("associate.spread",0,15,.1),B("associate.moveSpread",0,15,.1),B("associate.aimLag",0,1,.01),B("associate.suppressChance",0,1,.05),B("associate.suppressTime",0,5,.1),B("associate.suppressRate",.5,20,.5),B("associate.suppressMiss",0,5,.1),B("associate.suppressSpread",0,20,.5),B("associate.coverWaitMin",0,5,.1),B("associate.coverWaitMax",0,8,.1),B("associate.magBursts",1,10,1),B("associate.reloadTime",0,6,.1),B("associate.flinchTime",0,2,.01),B("associate.minRange",0,20,.5),B("associate.preferRange",0,40,.5),B("associate.maxRange",1,60,.5),B("associate.relocateCheck",.05,3,.05),B("associate.relocateAfter",1,60,.5),B("associate.ammoDrop",0,200,1),B("associate.muzzleUp",.5,2,.01),B("director.tokens",0,8,1),B("director.casualTokens",0,8,1),B("director.casual",0,1,1),B("director.tokenCooldown",0,5,.1),B("director.tokenMaxHold",.5,10,.1),B("director.requestWindow",0,2,.05),B("director.pushAfter",1,30,.5),B("director.flankAfter",1,60,.5),B("director.stayRadius",.5,10,.1),B("director.flankAngle",0,180,1),B("director.flankMaxAngle",60,180,1),B("dummy.health",1,1e3,1),B("dummy.respawnTime",0,30,.5),B("dummy.railSpeed",0,10,.1),B("camera.recoil.halfLife",.01,.5,.01),B("camera.recoil.max",0,20,.5),B("look.pad.assist",.1,1,.05),B("feedback.flashTime",.01,.3,.01),B("feedback.flashSize",.05,1.5,.05),B("feedback.tracerTime",.01,.3,.01),B("feedback.tracerWidth",.005,.2,.005),B("feedback.sparkTime",.05,1,.01),B("feedback.sparkCount",0,12,1),B("feedback.gelTime",.1,2,.05),B("feedback.gelCount",0,24,1),B("feedback.gelSpeed",0,10,.1),B("feedback.killGelCount",0,48,1),B("feedback.receiptCount",0,24,1),B("feedback.receiptTime",.2,4,.05),B("feedback.gravity",0,30,.1),B("feedback.hitMarkerTime",.02,1,.01),B("feedback.killMarkerTime",.05,1,.01),B("feedback.reloadResultTime",.1,2,.05),B("feedback.reticleMinGap",0,30,1),B("feedback.coverReticleOpacity",0,1,.05),B("feedback.stepDip",0,.1,.001),B("feedback.stepVolume",0,1,.05),B("feedback.shotVolume",0,1,.05),B("feedback.hitVolume",0,1,.05),B("feedback.killVolume",0,1,.05),B("feedback.reloadVolume",0,1,.05),B("feedback.gunSquash",0,.6,.01),B("feedback.gunSquashTime",.01,.5,.01),B("feedback.gunKick",0,.3,.01),B("feedback.bodyKick",0,.3,.01),B("feedback.dummyBurstTime",.01,1,.01),B("feedback.dummyRespawnPop",0,1,.01),B("feedback.faceMaxOpacity",0,1,.05),B("feedback.edgeMaxOpacity",0,1,.05),B("feedback.hitFlashTime",.05,2,.01),B("feedback.hitKick",0,3,.05),B("feedback.hurtVolume",0,1,.05),B("feedback.enemyFlashSize",.05,1.5,.05),B("feedback.enemyTracerTime",.01,.3,.01),B("feedback.enemyTracerWidth",.005,.2,.005),B("feedback.glintSize",.02,.4,.01),B("feedback.blasterVolume",0,1,.05),B("feedback.chargeVolume",0,1,.05),B("feedback.pickupVolume",0,1,.05),B("feedback.barkTime",.2,6,.1),B("feedback.barkGap",0,12,.5)]),sb=new Map(Ko.map(n=>[n.path,n])),jo=structuredClone(le);function Xs(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function ld(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function cd(n=le,e=jo){let t={};for(let i of Ko){let s=Xs(n,i.path);s!==Xs(e,i.path)&&(t[i.path]=s)}return t}function Fm(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=sb.get(i);if(!s)continue;let r=e[i],o=Xs(jo,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||ld(n,i,r)&&t++)}return t}function ad(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>ad(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${ad(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function km(n=le){return["associate","camera","combat","cover","director","dummy","feedback","health","look","move","weapons"].map(e=>`  ${e}: ${ad(n[e],1)},`).join(`
`)}var hd="cr-tuning",rb={move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Clearance Pistol",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Pad",wall:"Wall"},ob=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Bm(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&ob.has(e[1])&&t.push("wall"),t}function ab(){try{return window.localStorage}catch{return null}}function zm({storage:n=ab()}={}){let e=()=>{try{return n?n.getItem(hd):null}catch{return null}},t=x=>{try{n&&(x===null?n.removeItem(hd):n.setItem(hd,x))}catch{}};try{let x=e();x&&Fm(le,JSON.parse(x))}catch{}let i=new Fc({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let x=document.activeElement;x&&x!==document.body&&s.contains(x)&&x.blur&&x.blur()}s.addEventListener("click",x=>{let p=x.target;p&&p.closest&&p.closest(".lil-title")&&p.blur!==void 0&&r()});let o=new Map;function a(x){let p=i,g="";for(let v of x){if(g+=`.${v}`,!o.has(g)){let S=p.addFolder(rb[v]||v);S.close(),o.set(g,S)}p=o.get(g)}return p}function c(){let x=cd();t(Object.keys(x).length?JSON.stringify(x):null)}for(let x of Ko){let p=x.path.split("."),g=p[p.length-1],v=Xs(le,p.slice(0,-1).join(".")),S=typeof Xs(jo,x.path)=="boolean"?a(Bm(x.path)).add(v,g):a(Bm(x.path)).add(v,g,x.min,x.max,x.step);S.onChange(c),S.onFinishChange(r)}let l=null;function h(x){if(!l){l=document.createElement("textarea"),l.readOnly=!0,l.rows=8,Object.assign(l.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let p=document.createElement("div");p.textContent="Press Cmd+C to copy",p.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",l.note=p,s.appendChild(p),s.appendChild(l)}l.value=x,l.note.hidden=!1,l.hidden=!1,l.focus(),l.select()}function f(x){l&&(l.hidden=!0,l.note.hidden=!0);let p=null;try{p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(x):null}catch{p=null}if(!p){h(x);return}p.catch(()=>h(x))}let u={copyChanges(){r(),f(JSON.stringify(cd(),null,2))},copyForFile(){r(),f(km())},resetAll(){r();for(let x of Ko)ld(le,x.path,Xs(jo,x.path));t(null),i.controllersRecursive().forEach(x=>x.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let d=!1;function m(x){d=x,s.style.display=x?"":"none"}return m(!1),{toggle(){m(!d)},isOpen:()=>d}}var Hm=Math.PI*2,Ur=n=>n-Hm*Math.round(n/Hm),ri=(n,e)=>Math.atan2(n,e);function Qo(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function yi(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function Ln(n,e,t){let i=Ur(e-n);return n+Math.max(-t,Math.min(t,i))}var Mi=1e-9,ud=Math.PI/180,Gm=.05,lb=1.8,cb={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function Wm(n=le.cover,e=le.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var hb=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],ub=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function Xm(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((c,l)=>{let h=cb[c.kind];if(!h)return;let f=n.filter((u,d)=>d!==l&&u.kind!=="floor"&&u.max[1]>Gm&&u.min[1]<lb);for(let u of hb){let d=u.axis*2,m=2-d,x=(u.sign>0?c.max[d]:c.min[d])+u.sign*o,p=c.min[m],g=c.max[m],v=g-p,S=[];for(let y of f){if(!(x>y.min[d]-o+Mi&&x<y.max[d]+o-Mi))continue;let T=y.min[m]-o-p,E=y.max[m]+o-p;E>Mi&&T<v-Mi&&S.push([Math.max(T,0),Math.min(E,v)])}S.sort((y,T)=>y[0]-T[0]);let M=[];for(let y of S){let T=M[M.length-1];T&&y[0]<=T[1]+Mi?T[1]=Math.max(T[1],y[1]):M.push([y[0],y[1]])}let b=[],w=0,_=!0;for(let[y,T]of M)y>w+Mi&&b.push([w,y,_,!1]),w=T,_=!1;v>w+Mi&&b.push([w,v,_,!0]),b.forEach(([y,T,E,R],I)=>{let D=`${l}${u.name}#${I}`;if(r.includes(D))return;let P=p+y+(E?i:0),U=p+T-(R?i:0),F=U-P;if(F<s-Mi)return;let G=u.axis===0?[x,P]:[P,x],V=u.axis===0?[x,U]:[U,x];a.push(ub({id:D,kind:h,boxIndex:l,a:G,b:V,length:F,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:c.max[1],depth:c.max[d]-c.min[d],openA:E,openB:R}))})}}),a}function oi(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function xs(n,e,t=le.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function ea(n,e){return e<0?n.openA:n.openB}var Vm=.9,Ym=(n,e,t,i)=>xi(n,[e[0],Vm,e[1]],[t[0],Vm,t[1]],.9*i)===1;function ta(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*ud),c=Math.sin(s),l=Math.cos(s),h=r.grabViewAngle*ud,f=null;for(let u of n){let d=(t[0]-u.a[0])*u.normal[0]+(t[2]-u.a[1])*u.normal[1],m=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(d<-(r.gap+.02)||m<a||m<=Mi)continue;let x=Math.max(d,0)/m,p=(t[0]+i[0]*x-u.a[0])*u.tangent[0]+(t[2]+i[1]*x-u.a[1])*u.tangent[1];if(p<-r.grabSlack||p>u.length+r.grabSlack)continue;let g=Math.max(0,Math.min(u.length,p)),v=oi(u,g),S=v[0]-t[0],M=v[1]-t[2],b=Math.hypot(S,M);if(!(b>r.grabRange||f&&b>=f.dist)){if(b>.3){let w=(S*c+M*l)/b;if(Math.acos(Math.max(-1,Math.min(1,w)))>h)continue}Ym(e,[t[0],t[2]],v,o)&&(f={edge:u,t:g,point:v,dist:b})}}return f}function qm(n,e,t,i,s,r,o){if(xs(t,i,r)!==s||!ea(t,s))return null;let a=oi(t,i),c=Math.cos(r.swapAngle*ud),l=null;for(let h of n){if(h===t||h.normal[0]*t.normal[0]+h.normal[1]*t.normal[1]<c)continue;let f=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),d=f<=u?0:h.length,m=oi(h,d),x=m[0]-a[0],p=m[1]-a[1],g=Math.hypot(x,p);(x*t.tangent[0]+p*t.tangent[1])*s<=0||Math.abs(x*t.normal[0]+p*t.normal[1])>r.swapMaxOffset||g>r.swapRange||l&&g>=l.dist||Ym(e,a,m,o)&&(l={edge:h,t:d,point:m,dist:g})}return l}function db(n,e,t,i){let s=e[1]+Gm,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),c=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-c)<t-Mi)return!1}return!0}function $m(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=oi(n,e),a=n.depth+2*(s+i.gap),c=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!db(t,c,s,r))return null;let l=t.filter((h,f)=>f!==n.boxIndex);return xi(l,[o[0],.5,o[1]],[c[0],.5,c[2]],s)!==1?null:c}var fb=["coverSlide","cover","vault","coverSwap"],Zm=Math.PI/180,Jt=[0,0],Bc=[0,0],_s=[0,0,0],jm=.001,pb=2,dd=(n,e,t)=>Math.max(e,Math.min(t,n));function fd(n,e,t){if(Qo(e)>=n.coverTuning.grabMinTilt){yi(e,Jt);let i=Math.hypot(Jt[0],Jt[1]);t[0]=Jt[0]/i,t[1]=Jt[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var Qm={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=ta(n.coverEdges,n.boxes,n.pos,fd(n,e,Bc),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},kc={};function e0(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||Qo(e)<t.autoMinTilt)return null;Object.assign(kc,t),kc.grabAngle=t.autoAngle,kc.grabRange=t.autoDist,yi(e,Jt);let i=Math.hypot(Jt[0],Jt[1]);Bc[0]=Jt[0]/i,Bc[1]=Jt[1]/i;let s=ta(n.coverEdges,n.boxes,n.pos,Bc,e.camYaw,kc,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function mb(n,e,t){let i=xs(n,e,t);return n.kind==="low"||i!==0&&ea(n,i)}function Hi(n){return n.cover?n.cover.edge:n.scratch.edge||null}function pd(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=Hi(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function Ys(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=xs(t,e.t,n.coverTuning)),i===0)return 1;let s=ri(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return ea(t,i)?a:-a}function Jm(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(jm,dd(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function Km(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return _s[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],_s[1]=0,_s[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(_s,e,!1),i!==null&&(n.facing=Ln(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var gb={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;Jm(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return Km(n,t,n.coverTuning.slideTurnRate,ri(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,Jm(n,e.swapSpeed,0,pb);let t=n.scratch;n.heading=ri(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+Ur(n.heading-n.facing)},update(n,e,t){return Km(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=ri(-i.normal[0],-i.normal[1]),n.facing=n.facing+Ur(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,jm)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=yi(e,Jt),c=Math.hypot(Jt[0],Jt[1]),l=c>0?Jt[0]/c:0,h=c>0?Jt[1]/c:0,f=r.normal[0],u=r.normal[1],d=a>=i.leaveTilt,m=(y,T)=>(n.vel[0]=y*o.jog,n.vel[1]=0,n.vel[2]=T*o.jog,"move");if(d&&l*f+h*u>=Math.cos(i.leaveAngle*Zm))return m(Jt[0],Jt[1]);if(e.tap&&d){let y=Math.cos(i.pushAngle*Zm);if(-(l*f+h*u)>=y){let E=$m(r,s.t,n.boxes,i,o.radius,o.height);if(E)return n.coverTarget={landing:E,edge:r},"vault"}let T=l*r.tangent[0]+h*r.tangent[1];if(Math.abs(T)>=y){let E=qm(n.coverEdges,n.boxes,r,s.t,T>0?1:-1,i,o.radius);if(E)return n.coverTarget=E,"coverSwap"}}let x=xs(r,s.t,i),p=mb(r,s.t,i),g=e.aim&&p?1:0,v=e.fire&&!e.aim&&p?1:0,S=i.popTime>0?t/i.popTime:1;s.pop=s.pop<g?Math.min(g,s.pop+S):Math.max(g,s.pop-S);let M=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<v?Math.min(v,s.blind+M):Math.max(v,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?x:0,s.blindEnd=s.blind>0&&r.kind!=="low"?x:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let b=!1;if(s.pop===0&&s.blind===0){let y=Jt[0]*r.tangent[0]+Jt[1]*r.tangent[1];if(Math.abs(y)>=i.alongDeadzone){let T=s.t+y*i.moveSpeed*t;if(s.t=dd(T,0,r.length),T!==s.t&&ea(r,y>0?1:-1)&&(b=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(y),r.tangent[1]*Math.sign(y))}}else s.blindEnd!==0&&v===1&&(s.t=dd(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));b||(s.endPush=0);let w=oi(r,s.t),_=s.popEnd*i.popShift*s.pop;return _s[0]=w[0]+r.tangent[0]*_-n.pos[0],_s[1]=0,_s[2]=w[1]+r.tangent[1]*_-n.pos[2],n.moveBy(_s,t,!1),s.pop>0?n.facing=Ln(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=Ln(n.facing,ri(-f,-u),o.turnRate*t),n.heading=n.facing,null}}},t0=Object.fromEntries(fb.map(n=>[n,gb[n]]));var n0=n=>[Math.sin(n),0,Math.cos(n)],i0=n=>[-Math.cos(n),0,Math.sin(n)],xb=(n,e,t)=>e*(1-(1-n)**t),cn=[0,0],zc=[0,0,0];function md(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,c=e-o[0],l=t-o[2],h=Math.hypot(c,l);h<=a?(o[0]=e,o[2]=t):(o[0]+=c/h*a,o[2]+=l/h*a)}function gd(n,e,t){return e.sprint&&!e.aim&&Qo(e)>=t.stickSprintMin}var _b={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(gd(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim?i.aimWalk:i.jog;return yi(e,cn),md(n,cn[0]*s,cn[1]*s,s,t,i),e.aim||e.fire?n.facing=Ln(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=Ln(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):yi(e,cn)>.01?n.heading=Math.atan2(cn[0],cn[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return gd(n,e,i)?(yi(e,cn),n.heading=Ln(n.heading,Math.atan2(cn[0],cn[1]),i.sprintTurnRate*t),md(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],yi(e,cn)>.01){let i=Math.hypot(cn[0],cn[1]);t.dir[0]=cn[0]/i,t.dir[1]=cn[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+Ur(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=xb(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,zc[0]=s.dir[0]*a,zc[1]=0,zc[2]=s.dir[1]*a,n.moveBy(zc,t,!1),r?s.queued?"roll":gd(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,yi(e,cn),md(n,cn[0]*i.crawlSpeed,cn[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=Ln(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...t0},vb=[Qm,{name:"roll",when:()=>!0,state:"roll"}];function s0({boxes:n,spawn:e,tuning:t=le.move,coverTuning:i=le.cover,coverEdges:s=[],states:r=_b,contextActions:o=vb,onState:a,onStep:c}){let l={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:c,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(l.vel[0],l.vel[2])},moveBy(h,f,u=!0){let d=l.pos,m=Nr(n,d,h,t.radius,t.height);if(l.hit=!!m.hit,!u)f>0&&(l.vel[0]=(m.pos[0]-d[0])/f,l.vel[2]=(m.pos[2]-d[2])/f);else if(m.hit)if(f>0)l.vel[0]=(m.pos[0]-d[0])/f,l.vel[2]=(m.pos[2]-d[2])/f;else{let x=m.normal,p=l.vel[0]*x[0]+l.vel[1]*x[1]+l.vel[2]*x[2];p<0&&(l.vel[0]-=x[0]*p,l.vel[1]-=x[1]*p,l.vel[2]-=x[2]*p)}d[0]=m.pos[0],d[1]=m.pos[1],d[2]=m.pos[2]},go(h,f){let u=l.state;r[u].exit?.(l),l.state=h,l.stateTime=0,l.entries++,l.scratch={},r[u].selfMoves&&(l.runVel[0]=l.runVel[1]=0,l.hitTime=0),l.autoTimer=0,r[h].enter(l,f),l.onState?.(h,u,f)},down(){l.go("downed",{})},revive(){l.state==="downed"&&l.go("move",{})},place(h,f){r[l.state].exit?.(l),l.state="move",l.stateTime=0,l.firing=!1,l.cover=null,l.coverTarget=null,l.scratch={},l.pos[0]=l.prevPos[0]=h[0],l.pos[1]=l.prevPos[1]=h[1],l.pos[2]=l.prevPos[2]=h[2],l.vel[0]=l.vel[1]=l.vel[2]=0,l.runVel[0]=l.runVel[1]=0,l.hitTime=l.autoTimer=0,f!==void 0?l.facing=l.prevFacing=l.heading=f:l.prevFacing=l.facing},update(h,f){if(l.prevPos[0]=l.pos[0],l.prevPos[1]=l.pos[1],l.prevPos[2]=l.pos[2],l.prevFacing=l.facing,l.firing=!1,h.tap&&r[l.state].acceptsTap){for(let m of o)if(m.when(l,h)){l.go(m.state,h);break}}l.stateTime+=f;let u=r[l.state].update(l,h,f),d=l.state;if(!r[d].selfMoves){let m=l.vel[0],x=l.vel[2],p=Math.hypot(m,x);l.moveBy([l.vel[0]*f,0,l.vel[2]*f],f,!0),l.hit?(l.hitTime+=f,(p>=Math.hypot(l.runVel[0],l.runVel[1])||l.hitTime>2*l.coverTuning.autoTime)&&(l.runVel[0]=m,l.runVel[1]=x)):(l.runVel[0]=m,l.runVel[1]=x,l.hitTime=0)}if(d==="move"||d==="sprint")if(!(l.speed()>l.tuning.runClipMinSpeed))l.stepDist=.5*l.tuning.stepEvery;else{l.stepDist+=Math.hypot(l.pos[0]-l.prevPos[0],l.pos[2]-l.prevPos[2]);let x=Math.max(.1,d==="sprint"?l.tuning.stepEverySprint:l.tuning.stepEvery);l.stepDist>=x&&(l.stepDist%=x,l.steps++,l.foot^=1,l.onStep?.({foot:l.foot,sprint:d==="sprint",speed:l.speed()}))}if(d==="move"||d==="sprint"){let m=e0(l,h);if(!m)l.autoTimer=0;else if((l.autoTimer+=f)>=l.coverTuning.autoTime){l.coverTarget=m,l.go("coverSlide",h);return}}u&&l.go(u,h)}};return r[l.state].enter(l,{moveX:0,moveY:0,camYaw:0}),l}function r0({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let d=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,d,e.sampleRate);let m=t.getChannelData(0);for(let x=0;x<d;x++)m[x]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(d){if(!(d>0||d<0)||!e.createStereoPanner)return e.destination;let m=e.createStereoPanner();return m.pan.value=Math.max(-1,Math.min(1,d)),m.connect(e.destination),m}let a=()=>{if(e.state==="suspended"){let d=e.resume();d&&d.catch&&d.catch(()=>{})}};function c(d,m,x){let p=e.createGain();return p.gain.setValueAtTime(x,d),p.gain.exponentialRampToValueAtTime(.001,d+m),p.connect(s),p}function l(d,m,x,p,g,v){let S=e.createOscillator();S.type=m,S.frequency.setValueAtTime(x,g),p!==x&&S.frequency.exponentialRampToValueAtTime&&S.frequency.exponentialRampToValueAtTime(p,g+v),S.connect(d),S.start(g),S.stop(g+v)}function h(d,m,x,p,g){let v=e.createBufferSource();v.buffer=t;let S=e.createBiquadFilter();S.type=m,S.frequency.setValueAtTime(x,p),v.connect(S),S.connect(d),v.start(p),v.stop(p+g)}let f=(d,m,x)=>{let p=c(d,.03,x);h(p,"bandpass",m,d,.03)},u={rifle:(d,m)=>{let x=c(d,.09,m);h(x,"bandpass",1800,d,.09),l(x,"sine",110,55,d,.09)},pistol:(d,m)=>{let x=c(d,.12,m);h(x,"lowpass",2500,d,.12),l(x,"sine",160,60,d,.12)},dry:(d,m)=>l(c(d,.02,m),"square",1200,1200,d,.02),hit:(d,m)=>l(c(d,.04,m),"sine",1600,1600,d,.04),head:(d,m)=>{let x=c(d,.06,m);l(x,"sine",2400,2400,d,.06),l(x,"sine",3200,3200,d,.06)},kill:(d,m)=>{let x=c(d,.12,m);l(x,"sine",300,900,d,.12);let p=c(d,.2,m*.8);h(p,"lowpass",1400,d,.2)},magOut:(d,m)=>{f(d,3e3,m),f(d+.08,2200,m)},magIn:(d,m)=>{f(d,2e3,m),f(d+.08,3400,m)},perfect:(d,m)=>{let x=c(d,.35,m);l(x,"sine",1320,1320,d,.35),l(x,"sine",1980,1980,d,.35)},good:(d,m)=>l(c(d,.15,m),"sine",990,990,d,.15),jam:(d,m)=>l(c(d,.15,m),"square",90,90,d,.15),blaster:(d,m)=>{let x=c(d,.1,m);l(x,"square",900,300,d,.1),h(x,"bandpass",1500,d,.1)},charge:(d,m)=>{let x=e.createGain();x.gain.setValueAtTime(.001,d),x.gain.exponentialRampToValueAtTime(m,d+.3),x.gain.exponentialRampToValueAtTime(.001,d+.35),x.connect(s),l(x,"sine",300,900,d,.35)},hurt:(d,m)=>{let x=c(d,.15,m);h(x,"lowpass",600,d,.15),l(x,"sine",80,80,d,.15)},downed:(d,m)=>l(c(d,.6,m),"sine",400,80,d,.6),clear:(d,m)=>{[523,659,784].forEach((x,p)=>l(c(d+p*.12,.15,m),"sine",x,x,d+p*.12,.15))},pickup:(d,m)=>{l(c(d,.06,m),"sine",880,880,d,.06),l(c(d+.07,.08,m),"sine",1320,1320,d+.07,.08)},thud:(d,m)=>{let x=c(d,.12,m);h(x,"lowpass",220,d,.12),l(x,"sine",70,70,d,.12)}};return{play(d,m,x=0){let p=u[d];if(!(!p||!(m>0)||!r()))try{a(),s=o(x),p(e.currentTime,m)}catch{}},unlock(){if(r())try{a()}catch{}}}}function o0(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var Hc=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Clearance Pistol"})}),a0=Object.freeze(["regret",null,"pistol"]);function l0(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function xd(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var yb={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function c0({weapons:n=le.weapons,combat:e=le.combat,loadout:t=a0}={}){let i={},s=()=>{for(let x of t)x&&Object.assign(i[x]||(i[x]={}),{mag:Math.floor(n[x].mag),reserve:Math.floor(n[x].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],c=(x,p)=>x[yb[p]||"spreadHip"],l=x=>x!=null&&o.reload===null&&o.switching<=0;function h(){let x=a(),p=n[x],g=i[x];return o.reload===null&&o.switching<=0&&g.mag<p.mag&&(p.infiniteReserve>0||g.reserve>0)}function f(){let x=a(),p=n[x];o.reload={id:x,t:0,press:null,end:xd(p,0,"normal",e)},i[x].boost=!1,r.push({type:"reloadStart",id:x})}function u(){let{id:x,press:p}=o.reload,g=n[x],v=i[x],S=Math.max(0,g.mag-v.mag);if(g.infiniteReserve>0)v.mag+=S;else{let M=Math.min(S,v.reserve);v.mag+=M,v.reserve-=M}v.boost=p==="perfect",o.reload=null,r.push({type:"reloadDone",id:x,result:p||"normal"})}function d(x){x===o.slot||!t[x]||(o.reload=null,o.slot=x,o.switching=n[t[x]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[x]}))}function m(x){let p=t.length;for(let g=1;g<p;g++){let v=(o.slot+x*g+p*p)%p;if(t[v])return d(v)}}return o.current=a,o.canFire=l,o.spreadOf=x=>c(n[a()],x)+i[a()].bloom,o.update=function(p,g,v){r.length=0,(!(v>0)||!Number.isFinite(v))&&(v=0);let S=p.weapon;S==="next"?m(1):S==="prev"?m(-1):(S===1||S===2||S===3)&&d(S-1),o.switching-=v;for(let E of t)E&&(i[E].bloom=Math.max(0,i[E].bloom-n[E].bloomRecover*v));let M=a(),b=n[M],w=i[M];if(p.reload){if(o.reload===null)h()&&f();else if(o.reload.press===null){let E=o.reload,R=Math.max(b.reloadTime,e.minReloadTime);E.press=l0(E.t/R,b),E.end=xd(b,E.t,E.press,e),r.push({type:"reloadPress",id:M,result:E.press})}}o.reload!==null&&(o.reload.t+=v,o.reload.t>=o.reload.end&&u()),p.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=v,p.fire||(o.dryLatched=!1),l(g)||(o.buffer=0);let _=b.auto>0,y=_?!!p.fire:o.buffer>0,T=1/Math.max(b.rate,e.minRate);for(o.cooldown-=v,y||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-T);y&&l(g)&&o.cooldown<=0;){if(w.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&f();break}if(w.mag--,r.push({type:"shot",id:M,mult:w.boost?b.perfectDamage:1,spread:o.spreadOf(g)}),w.bloom=Math.min(b.bloomMax,w.bloom+b.bloomPerShot),o.cooldown+=T,w.mag===0&&(w.boost=!1),!_){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(x,p)=>{let g=i[x];!g||n[x].infiniteReserve>0||!(p>0)||(g.reserve=Math.max(g.reserve,Math.min(Math.floor(n[x].reserveMax),g.reserve+Math.floor(p))))},o.refill=()=>{for(let x of t)x&&(i[x].reserve=Math.floor(n[x].reserveMax))},o.set=(x,{mag:p,reserve:g}={})=>{i[x]&&(p!==void 0&&(i[x].mag=p),g!==void 0&&(i[x].reserve=g))},o}function h0(n){if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var Or=[0,0];function u0(n,e,t,i=le.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let c=n.cover,l=c.edge,h=n.tuning.radius+n.coverTuning.gap,f=l.normal;if(l.kind==="low")oi(l,c.t,Or),s[0]=Or[0]-f[0]*(h+i.blindReach),s[1]=l.height+i.blindLift,s[2]=Or[1]-f[1]*(h+i.blindReach);else{let u=c.blindEnd!==0?c.blindEnd:c.t<l.length-c.t?-1:1;oi(l,u<0?0:l.length,Or);let d=n.coverTuning.endInset+i.blindReach;s[0]=Or[0]+l.tangent[0]*u*d-f[0]*h,s[1]=i.muzzleUp,s[2]=Or[1]+l.tangent[1]*u*d-f[1]*h}return s}let r=i.muzzleRight*Ys(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let c=1;c>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*c,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*c,!(c===0||!Ic(n.boxes,s,0)));c-=.25);return s}function Mb(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],c=(t.max[o]-n[o])/e[o];if(a>c){let l=a;a=c,c=l}if(a>s&&(s=a),c<r&&(r=c),s>r)return 1/0}return s}function _d(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],c=r*e[0]+o*e[1]+a*e[2],l=r*r+o*o+a*a-i*i;if(l<=0)return 0;let h=c*c-l;if(h<0)return 1/0;let f=-c-Math.sqrt(h);return f>=0&&f<=s?f:1/0}function Sb(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],c=i[2]-t[2],l=n[0]-t[0],h=n[1]-t[1],f=n[2]-t[2],u=o*o+a*a+c*c,d=o*l+a*h+c*f,m=u>1e-12?Math.max(0,Math.min(1,d/u)):0,x=l-o*m,p=h-a*m,g=f-c*m;if(x*x+p*p+g*g<=s*s)return 0;let v=Math.min(_d(n,e,t,s,r),_d(n,e,i,s,r));if(u>1e-12){let S=o*e[0]+a*e[1]+c*e[2],M=e[0]*l+e[1]*h+e[2]*f,b=l*l+h*h+f*f,w=u-S*S;if(w>1e-12*u){let _=u*M-d*S,y=u*b-d*d-s*s*u,T=_*_-w*y;if(T>=0){let E=(-_-Math.sqrt(T))/w,R=d+E*S;E>=0&&E<=r&&R>0&&R<u&&E<v&&(v=E)}}}return v}function Yn(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",c=null,l=-1,h=!1;for(let f=0;f<i.length;f++){if(f===r)continue;let u=Mb(n,e,i[f],o);u<=o&&u!==1/0&&(o=u,a="world",l=f,c=null,h=!0)}for(let f of s){if(!f.alive)continue;let{head:u,body:d}=f.shapes,m=_d(n,e,u.c,u.r,o);m<=o&&m!==1/0&&(o=m,a="head",c=f,l=-1,h=!0);let x=Sb(n,e,d.a,d.b,d.r,o);x<=o&&x!==1/0&&(o=x,a="body",c=f,l=-1,h=!0)}return h?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:c,boxIndex:l}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function vd(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),c=Math.abs(n[1])<.9?0:1,l=c===0?1:0,h=n[1]*0-n[2]*l,f=n[2]*c-n[0]*0,u=n[0]*l-n[1]*c,d=Math.hypot(h,f,u);h/=d,f/=d,u/=d;let m=n[1]*u-n[2]*f,x=n[2]*h-n[0]*u,p=n[0]*f-n[1]*h,g=Math.cos(a)*o,v=Math.sin(a)*o;return i[0]=n[0]*r+h*g+m*v,i[1]=n[1]*r+f*g+x*v,i[2]=n[2]*r+u*g+p*v,i}function d0({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:c=Math.random}){let l=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),h=Yn(n,e,s+l,r,o,{ignoreBox:a}),f=h.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:h.point,u=[f[0]-t[0],f[1]-t[1],f[2]-t[2]],d=Math.hypot(u[0],u[1],u[2]);d>1e-9?(u[0]/=d,u[1]/=d,u[2]/=d):(u[0]=e[0],u[1]=e[1],u[2]=e[2]);let m=vd(u,i,c);return{from:t,dir:m,hit:Yn(t,m,s,r,o)}}var Gt=Object.freeze({head:Object.freeze({cy:Zt.neckY+Zt.head.centerY,r:Zt.head.rx}),body:Object.freeze({ay:Zt.ankleHeight,by:Zt.neckY,r:Math.max(...Zt.torso.shirt.map(n=>n[0]))})});function f0(n){let[e,t,i]=n.pos,s=n.shapes;s.head.c[0]=e,s.head.c[1]=t+Gt.head.cy,s.head.c[2]=i,s.body.a[0]=e,s.body.a[1]=t+Gt.body.ay,s.body.a[2]=i,s.body.b[0]=e,s.body.b[1]=t+Gt.body.by,s.body.b[2]=i}function p0({id:n,pos:e,yaw:t=0,rail:i=null},s=le.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:Gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:Gt.body.r}}};return f0(r),r}function bb(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function m0(n,e,t=le.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=bb(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}f0(n)}function g0(n,e,t=le.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function yd(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function x0(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function _0(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var wb=new O(0,0,1);function v0(n,e=()=>le.feedback){let t=new pn,i=(y=1)=>(Math.random()*2-1)*y;function s(y,T,E){let R=new Ls(y,Ht({color:T,rim:0}),E);R.frustumCulled=!1,R.count=E,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let I=0;I<E;I++)R.setMatrixAt(I,t.matrix);return n.add(R),{mesh:R,pool:_0(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new yr(.5,0),fe.playerOrange,8),o=s(new Ot(1,1,1),fe.playerOrange,24),a=s(new yr(.5,0),fe.gel,8),c=s(new Ot(1,1,1),fe.gel,24),l=s(new Ot(.05,.05,.05),fe.cream,48),h=s(new bo(.5,0),fe.gel,96),f=s(new Ot(.16,.2,.012),fe.cream,48),u=new O;function d(y,T){t.updateMatrix(),y.mesh.setMatrixAt(T,t.matrix),y.mesh.instanceMatrix.needsUpdate=!0}let m=(y,T)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),d(y,T)},x=(y,T,E,R,I)=>{y.pos[T*3]=E,y.pos[T*3+1]=R,y.pos[T*3+2]=I},p=(y,T,E,R,I)=>{y.vel[T*3]=E,y.vel[T*3+1]=R,y.vel[T*3+2]=I};function g(y,T,E,R,I){let D=E[0]+i(R),P=E[1]+i(R),U=E[2]+i(R),F=Math.hypot(D,P,U)||1;p(y,T,D/F*I*(.5+Math.random()*.5),P/F*I*(.5+Math.random()*.5),U/F*I*(.5+Math.random()*.5))}let v=[];function S(y,T,E,R){v.push({k:y,life:T,shown:new Uint8Array(y.pool.ages.length),step(I){let D=e().gravity,P=y;for(let U=0;U<P.pool.ages.length;U++)if(P.pool.alive(U)){P.vel[U*3+1]-=D*I;for(let F=0;F<3;F++)P.pos[U*3+F]+=P.vel[U*3+F]*I}},draw(I){let D=1-y.pool.ages[I]/T();t.position.set(y.pos[I*3],y.pos[I*3+1],y.pos[I*3+2]),t.scale.setScalar(E(I)*Math.max(0,D)),R?t.rotation.set(y.aux[I*4]+y.pool.ages[I]*7,y.aux[I*4+1]+y.pool.ages[I]*5,y.aux[I*4+2]):t.quaternion.identity(),d(y,I)}})}S(l,()=>e().sparkTime,()=>1,!1),S(h,()=>e().gelTime,y=>.05+h.aux[y*4+3]*.07,!1),S(f,()=>e().receiptTime,()=>1,!0);function M(y,T){v.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let R=1-y.pool.ages[E]/e().flashTime;t.position.set(y.pos[E*3],y.pos[E*3+1],y.pos[E*3+2]),t.scale.setScalar(e()[T]*(.5+.5*Math.max(0,R))),t.rotation.set(y.aux[E*4],y.aux[E*4+1],y.aux[E*4+2]),d(y,E)}})}function b(y,T,E){v.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e()[T],step(){},draw(R){let I=Math.max(0,1-y.pool.ages[R]/e()[T]),D=e()[E]*I,P=y.aux[R*4];t.position.set(y.pos[R*3],y.pos[R*3+1],y.pos[R*3+2]),t.quaternion.setFromUnitVectors(wb,u.set(y.vel[R*3],y.vel[R*3+1],y.vel[R*3+2])),t.scale.set(D,D,P),d(y,R)}})}M(r,"flashSize"),M(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(c,"enemyTracerTime","enemyTracerWidth");let w=(y,T,E)=>{let R=y.pool.spawn();x(y,R,T[0]+E[0]*.1,T[1]+E[1]*.1,T[2]+E[2]*.1),y.aux[R*4]=i(3),y.aux[R*4+1]=i(3),y.aux[R*4+2]=i(3)},_=(y,T,E)=>{let R=E[0]-T[0],I=E[1]-T[1],D=E[2]-T[2],P=Math.hypot(R,I,D);if(!(P>1e-6))return;let U=y.pool.spawn();x(y,U,T[0]+R/2,T[1]+I/2,T[2]+D/2),p(y,U,R/P,I/P,D/P),y.aux[U*4]=P};return{flash(y,T){w(r,y,T)},tracer(y,T){_(o,y,T)},enemyFlash(y,T){w(a,y,T)},enemyTracer(y,T){_(c,y,T)},spark(y,T){for(let E=0;E<e().sparkCount;E++){let R=l.pool.spawn();x(l,R,y[0],y[1],y[2]),g(l,R,T,.9,3)}},gel(y,T,E=e().gelCount){for(let R=0;R<E;R++){let I=h.pool.spawn();x(h,I,y[0],y[1],y[2]),g(h,I,T,1.2,e().gelSpeed),h.aux[I*4+3]=Math.random()}},receipts(y,T=e().receiptCount){for(let E=0;E<T;E++){let R=f.pool.spawn();x(f,R,y[0],y[1],y[2]),g(f,R,[0,1,0],1.5,e().gelSpeed),f.aux[R*4]=i(3),f.aux[R*4+1]=i(3),f.aux[R*4+2]=i(3)}},clear(){for(let y of v){y.k.pool.clear();for(let T=0;T<y.shown.length;T++)y.shown[T]&&(m(y.k,T),y.shown[T]=0)}},update(y){if(y>0)for(let T of v){T.step(y);let{pool:E}=T.k;E.update(y,T.life);for(let R=0;R<E.ages.length;R++)E.alive(R)?(T.draw(R),T.shown[R]=1):T.shown[R]&&(m(T.k,R),T.shown[R]=0)}}}}function Tb(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var Eb=n=>n<0?0:n>1?1:n;function y0({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:c=null,reloadFlash:l=null,face:h=null,objective:f="",bark:u=null,banner:d=null,weapons:m=le.weapons,combat:x=le.combat,feedback:p=le.feedback}){let g=n.current(),v=m[g],S=n.ammo[g],M=n.reload,b=s==="pad"?"RB":"R",w={show:!1,marker:0,good:[v.goodStart,v.goodEnd],perfect:[v.perfectStart,v.perfectEnd],flash:l,prompt:""};if(M){let y=Math.max(v.reloadTime,x.minReloadTime);w={...w,show:!0,marker:Eb(M.t/y),prompt:M.press===null?`${b} again on the bright zone`:""}}else S.mag<=0&&(w.prompt=`${b} to reload`);let _=e==="aim";return{weapon:Hc[g].name,mag:S.mag,reserve:v.infiniteReserve>0?"\u221E":S.reserve,reticle:{show:_||!!t||i,gap:p.reticleMinGap+Tb(r,o,a),opacity:i&&!_?p.coverReticleOpacity:1},reload:w,hit:{show:!!c,kind:c||null},faceShow:!!h&&!d&&!h.downed.show,face:h,objective:f,bark:u,banner:d}}function M0(n=document.body){let e=(V,z,H,X)=>{let ce=document.createElement(V);return z&&(ce.className=z),X!==void 0&&(ce.textContent=X),H&&H.appendChild(ce),ce},t=e("div","",n);t.id="cr-hud";let i={};for(let V of["top","right","bottom","left"])i[V]=e("div",`cr-edge cr-edge-${V}`,t);let s="http://www.w3.org/2000/svg",r=(V,z,H)=>{let X=document.createElementNS(s,V);for(let ce of Object.keys(z))X.setAttribute(ce,z[ce]);return H&&H.appendChild(X),X},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),c=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},c)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let l=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),f=e("div","cr-banner",t),u=e("div","cr-banner-title",f),d=e("div","cr-banner-hint",f),m=e("div","cr-objective",t),x=e("div","cr-bark",t),p=e("span","cr-bark-who",x),g=e("span","cr-bark-text",x),v=e("div","cr-weapon",t),S=e("div","cr-weapon-name",v),M=e("div","cr-ammo",v),b=e("div","cr-prompt",v),w=e("div","cr-reload",v),_=e("div","cr-zone cr-zone-good",w),y=e("div","cr-zone cr-zone-perfect",w),T=e("div","cr-marker",w),E=e("div","cr-result",v),R=e("div","cr-reticle",t),I=["up","down","left","right"].map(V=>e("div",`cr-arm cr-arm-${V}`,R)),D=e("div","cr-hit",t);e("i","cr-hit-a",D),e("i","cr-hit-b",D),e("i","cr-hit-ring",D);let P={},U=(V,z,H)=>{P[V]!==z&&(P[V]=z,H(z))},F=V=>`${(V*100).toFixed(1)}%`,G=(V,[z,H])=>{V.style.left=F(z),V.style.width=F(Math.max(0,H-z))};return{render(V){U("weapon",V.weapon,H=>{S.textContent=H}),U("ammo",`${V.mag}|${V.reserve}`,()=>{M.textContent=`${V.mag} / ${V.reserve}`}),U("prompt",V.reload.prompt,H=>{b.textContent=H}),U("reload.show",V.reload.show,H=>{w.hidden=!H}),U("good",`${V.reload.good}`,()=>G(_,V.reload.good)),U("perfect",`${V.reload.perfect}`,()=>G(y,V.reload.perfect)),U("marker",Math.round(V.reload.marker*500),()=>{T.style.left=F(V.reload.marker)}),U("flash",V.reload.flash,H=>{E.textContent=H?H.toUpperCase().replace("JAM","JAMMED"):"",E.dataset.kind=H||""}),U("ret.show",V.reticle.show,H=>{R.hidden=!H}),U("ret.op",Math.round(V.reticle.opacity*100),()=>{R.style.opacity=V.reticle.opacity.toFixed(2)}),U("ret.gap",Math.round(V.reticle.gap),H=>{I.forEach(X=>X.style.setProperty("--gap",`${H}px`))});let z=V.face;if(U("face.show",!!V.faceShow,H=>{o.hidden=!H}),z){U("face.op",Math.round(z.face.opacity*100),()=>{o.style.opacity=z.face.opacity.toFixed(2)}),U("face.frown",Math.round(z.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*z.face.frown).toFixed(1)} 70 72`)}),U("face.fill",Math.round(z.face.fill*50),()=>{let H=92*z.face.fill;l.setAttribute("y",(96-H).toFixed(1)),l.setAttribute("height",H.toFixed(1))});for(let H of Object.keys(i))U(`edge.${H}`,Math.round(z.edges[H]*50),()=>{i[H].style.opacity=z.edges[H].toFixed(2)})}U("banner",V.banner?`${V.banner.title}|${V.banner.hint}`:"",H=>{f.hidden=!V.banner,V.banner&&(u.textContent=V.banner.title,d.textContent=V.banner.hint)}),U("objective",V.objective||"",H=>{m.textContent=H,m.hidden=!H}),U("bark",V.bark?`${V.bark.speaker}|${V.bark.text}`:"",()=>{x.hidden=!V.bark,V.bark&&(p.textContent=V.bark.speaker,g.textContent=V.bark.text)}),U("hit",V.hit.show?V.hit.kind:"",H=>{D.hidden=!H,D.dataset.kind=H})}}}function S0(n){let e=cs(Zt),t=hs(e),i=new Mt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],c="live",l=0;s&&t.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function f(u){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let d=n.pos[0]-o,m=n.pos[2]-a;s&&d*d+m*m>1e-8&&(r=Math.atan2(d,m)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let x=le.feedback;if(c==="burst"){l+=u;let p=x.dummyBurstTime>0?Math.min(l/x.dummyBurstTime,1):1;h(1+.2*p),p>=1&&(c="gone",i.visible=!1)}else if(c==="pop"){l+=u;let p=x.dummyRespawnPop>0?Math.min(l/x.dummyRespawnPop,1):1;h(p),p>=1&&(c="live")}c!=="gone"&&(t.update(s?u*Math.min(Math.max(le.dummy.railSpeed/as,.3),3):u),e.update(u))}return{group:i,update:f,hit(){(c==="live"||c==="pop")&&t.play("flinch")},burst(){c="burst",l=0},respawn(){c="pop",l=0,i.visible=!0,h(0)}}}var b0="#f3efe6";function w0(n){for(let e of Object.values(n))e&&typeof e=="object"&&w0(e);return Object.freeze(n)}var T0=w0({...structuredClone(Zt),name:"doc-placeholder",colors:{...Zt.colors,hair:fe.teal,shirt:b0,collar:b0},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Zt.face,brow:"uni",fixedSmile:0}});function Gc(n){return Cn(n.map(([e,t,i,s,r,o])=>new Ot(e,t,i).translate(s,r,o)),!1)}function na(n,e,t){let i=new gt(si(e),Ht({color:t}));return bn(i),n.add(i),i}function Ab(){let n=new Mt;return n.name="rifle",na(n,Gc([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),fe.playerOrange),na(n,Gc([[.05,.12,.06,0,-.07,0]]),fe.ink),na(n,new An(.055,.055,.03,12).translate(0,-.035,.28),fe.cream),n}function Rb(){let n=new Mt;return n.name="pistol",na(n,Gc([[.045,.06,.25,0,.04,.075]]),fe.playerOrange),na(n,Gc([[.04,.1,.05,0,-.04,0]]),fe.ink),n}var Cb={regret:[0,.06,.45],pistol:[0,.04,.2]},Pb=new O(0,0,1),oC=new O,Vc=new O;function E0(){let n=new Mt;n.name="gun";let e={regret:Ab(),pistol:Rb()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new O,s=new O(0,0,1),r=1/0;function o(l){if(!(!e[l]||l===t)){t=l;for(let h of Object.keys(e))e[h].visible=h===l}}function a(l,h){i.set(l[0],l[1],l[2]),s.set(h[0],h[1],h[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(Pb,s),c()}function c(){let l=le.feedback,h=Math.max(l.gunSquashTime,1e-6),f=r>=0&&r<h?Math.sin(Math.PI*r/h):0,u=l.gunSquash*f;n.scale.set(1+u/2,1+u/2,1-u),n.position.copy(i).addScaledVector(s,-l.gunKick*f)}return{group:n,setWeapon:o,place:a,shot(){r=0,c()},update(l){r+=l>0?l:0,c()},tip(l=[0,0,0]){let h=Cb[t];return n.updateMatrix(),Vc.set(h[0],h[1],h[2]).applyMatrix4(n.matrix),l[0]=Vc.x,l[1]=Vc.y,l[2]=Vc.z,l}}}var Xc=Math.PI*2,bi=(n,e,t)=>n<e?e:n>t?t:n,Ib=n=>n-Xc*Math.round(n/Xc),C0=.001,Md=.5;function Lb(n,e=n.tuning||le.move){let t=n.state,i=n.speed();if(t==="downed")return{name:"crawl",rate:bi(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:wt.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:bi(i/as,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:bi(i/as,e.runRateMin,e.runRateMax)};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:Hi(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:bi(i/as,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||le.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":Ys(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:bi(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:wt.vault.duration/Math.max((n.coverTuning||le.cover).vaultTime,C0)}:{name:"idle",rate:1}}function Db(n){let e=n.state==="cover"||n.state==="coverSlide"?Hi(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?bi(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?bi(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var Nb=(n,e)=>4*e*n*(1-n),Ub=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function Ob(n){if(n<=.08)return 0;if(n>=.9)return Xc;let e=(n-.08)/.82;return Xc*e*e*(3-2*e)}var A0=.95,R0=.6,Vi=new O,Si=[0,0,1],Wc=[0,0,0];function P0(n,e=T0){let t=cs(e),i=hs(t),s=new Mt;s.name="player";let r=new Mt;r.position.y=Md,t.root.position.y=-Md,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},c=E0();s.add(c.group);let l=1/0,h=t.root.getObjectByName("head"),f=new O,u=!0;function d(T,E,R){h.getWorldPosition(f),f.y+=t.spec.head.centerY;let I=Math.hypot(T[0]-f.x,T[1]-f.y,T[2]-f.z);return u=Am(I,u,E,R),h.visible=u,u}let m=0,x=0,p=0,g="",v=-1,S=n.slams||0,M=1/0;function b(T,E,R){let I=n.pos,D=n.prevPos,P=n.coverTuning||le.cover,U=Db(n);m=P.popTime>0?Math.max(U,m+bi(U-m,-E/P.popTime,E/P.popTime)):U;let F=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?bi(n.cover.blind||0,0,1):0;if(U>0||F>0){let Z=Hi(n);x=Z.normal[0],p=Z.normal[1]}let G=m*P.lowDrawBack+F*P.blindDrawBack;s.position.set(D[0]+(I[0]-D[0])*T+x*G,D[1]+(I[1]-D[1])*T,D[2]+(I[2]-D[2])*T+p*G),s.rotation.y=n.prevFacing+Ib(n.facing-n.prevFacing)*T;let V=Lb(n);(V.name!==g||n.entries!==v)&&(i.play(V.name,V.name==="roll"?{fade:.05}:void 0),g=V.name,v=n.entries),i.update(E*V.rate,V.name==="crawl"?E:void 0),t.update(E);let z=le.feedback,H=Math.max(z.gunSquashTime,1e-6);l=R&&R.shot?E:l+E;let X=l<H?z.bodyKick*Math.sin(Math.PI*l/H):0;r.rotation.x=(n.state==="roll"?Ob(n.stateTime/n.tuning.rollTime):0)-X,(n.slams||0)!==S?(S=n.slams||0,M=0):M+=E;let ce=n.state==="vault"?Nb(bi(n.stateTime/Math.max(P.vaultTime,C0),0,1),P.vaultHop):0,pe=Ub(M,P.slamSquash,P.slamSquashTime);r.scale.set(1+pe/2,1-pe,1+pe/2),r.position.y=Md*(1-pe)+ce,w(V.name,E,R)}function w(T,E,R){if(s.updateMatrixWorld(!0),(T==="coverBlindTallL"?a.L:a.R).getWorldPosition(Vi),s.worldToLocal(Vi),R&&R.stance&&T==="coverBlindLow")Si[0]=0,Si[1]=Math.sin(A0),Si[2]=Math.cos(A0);else if(R&&R.stance&&R.dir){let D=Math.cos(s.rotation.y),P=Math.sin(s.rotation.y);Si[0]=R.dir[0]*D-R.dir[2]*P,Si[1]=R.dir[1],Si[2]=R.dir[0]*P+R.dir[2]*D}else Si[0]=0,Si[1]=-Math.sin(R0),Si[2]=Math.cos(R0);R&&R.weapon&&c.setWeapon(R.weapon),c.place([Vi.x,Vi.y,Vi.z],Si),R&&R.shot&&c.shot(),c.update(E),c.group.visible=n.state!=="roll"&&n.state!=="downed"}function _(T=[0,0,0]){return s.updateMatrixWorld(!0),c.tip(Wc),Vi.set(Wc[0],Wc[1],Wc[2]).applyMatrix4(s.matrixWorld),T[0]=Vi.x,T[1]=Vi.y,T[2]=Vi.z,T}function y(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:b,dispose:y,rig:t,anim:i,fadeHeadFor:d,gun:c,gunTip:_}}var qc=new Set(["telegraph","burst"]),Yc=(n,e,t)=>n<e?e:n>t?t:n,Fb=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),kb=n=>n.point&&n.point.kind==="tall"?"tall":"low";function Bb(n){let e=kb(n)==="tall";switch(n.state){case"run":return"run";case"flinch":return"flinch";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=ri(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function zb(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return ri(-n.point.normal[0],-n.point.normal[1]);if(qc.has(n.state))return ri(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return ri(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function Hb(n){return n.state==="dead"||!n.alive?"dead":qc.has(n.state)?"angry":n.state==="flinch"?"scared":"smug"}var D0=.03,Sd=[0,.06,.32];function Vb(){let n=new Mt;n.name="blaster";let t=Cn([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,c,l,h])=>new Ot(r,o,a).translate(c,l,h)),!1),i=new gt(si(t),Ht({color:fe.glorpPurple}));bn(i),n.add(i);let s=new gt(new Rn(D0,10,8),new Li({color:fe.gel}));return s.name="emitter",s.position.set(Sd[0],Sd[1],Sd[2]),n.add(s),{group:n,emitter:s}}var Gb=new O(0,0,1),qn=new O,vs=new O,I0=.6,L0=.95;function N0(n){let e=cs(Zt),t=hs(e),i=new Mt;i.name=`associate-${n.id}`,i.add(e.root),i.add(e.shadow);let s=e.root.getObjectByName("body").children[2],r=Vb();i.add(r.group);let o="",a="",c=0,l=n.yaw,h="live",f=0,u=!1,d=0,m=0,x=0;function p(){h="live",f=0,c=0,l=n.yaw,u=!1,d=0,i.visible=!0,i.scale.setScalar(1),o="",a="",r.emitter.scale.setScalar(1)}function g(S,M){let b=le.feedback,w=le.cover,_=le.associate;if(h==="burst"){f+=M;let z=b.dummyBurstTime>0?Math.min(f/b.dummyBurstTime,1):1;i.scale.setScalar(1+.2*z),z>=1&&(h="gone",i.visible=!1)}if(h==="gone")return;let y=h==="burst",T=n.pos,E=n.prevPos,R=!y&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",I=R?Yc(1-Math.max(n.pop,n.blind),0,1):0;c=w.popTime>0?Math.max(I,c+Yc(I-c,-M/w.popTime,M/w.popTime)):I;let D=R?Yc(n.blind,0,1):0;R&&(m=n.point.normal[0],x=n.point.normal[1]);let P=c*w.lowDrawBack+D*w.blindDrawBack;i.position.set(E[0]+(T[0]-E[0])*S+m*P,E[1]+(T[1]-E[1])*S,E[2]+(T[2]-E[2])*S+x*P);let U=n.state==="run"||qc.has(n.state)?n.prevYaw+Fb(n.yaw-n.prevYaw)*S:zb(n);if(l=Ln(l,U,_.turnRate*1.5*M),i.rotation.y=l,y)return;let F=Bb(n);F!==o&&(t.play(F,F==="flinch"?void 0:{fade:.1}),o=F);let G=F==="run"?Yc(_.runSpeed/as,.5,3):1;t.update(M*G),e.update(M);let V=Hb(n);V!==a&&(e.face.setExpression(V),a=V),v(F,M)}function v(S,M){i.updateMatrixWorld(!0),s.getWorldPosition(qn);let b=qn.x,w=qn.y,_=qn.z;i.worldToLocal(qn);let y=qn.x,T=qn.y,E=qn.z;if(qc.has(n.state)){let R=Math.cos(i.rotation.y),I=Math.sin(i.rotation.y),D=n.aim[0]-b,P=n.aim[2]-_;vs.set(D*R-P*I,n.aim[1]-w,D*I+P*R)}else S==="coverBlindLow"?vs.set(0,Math.sin(L0),Math.cos(L0)):n.state==="suppress"?vs.set(0,.05,1):vs.set(0,-Math.sin(I0),Math.cos(I0));if(vs.lengthSq()<1e-12&&vs.set(0,0,1),vs.normalize(),r.group.position.set(y,T,E),r.group.quaternion.setFromUnitVectors(Gb,vs),u){d+=M;let R=.5+.5*Math.sin(d*2*Math.PI*8),I=le.feedback.glintSize/D0;r.emitter.scale.setScalar(1+(I-1)*R)}else r.emitter.scale.setScalar(1)}return{group:i,update:g,reset:p,death(){h==="live"&&(h="burst",f=0)},glint(S){S&&!u&&(d=0),u=!!S},tip(S=[0,0,0]){return i.updateMatrixWorld(!0),r.emitter.getWorldPosition(qn),S[0]=qn.x,S[1]=qn.y,S[2]=qn.z,S},rig:e,anim:t,blaster:r}}function U0(n=le.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},update(o){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.downed=!1,r.downT=0,i=0,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var Wb=new Set(["cover","coverSlide","coverSwap"]),Xb=[],Yb=wd(),qb=wd(),$c=[null];function wd(){return{alive:!0,shapes:{head:{c:[0,0,0],r:Gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:Gt.body.r}}}}function O0(n){return Wb.has(n.state)?Hi(n):null}function bd(n,e,t,i,s){let r=n.shapes;return r.head.r=Gt.head.r,r.body.r=Gt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function Zc(n,e=wd(),t=le.combat){let i=O0(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?bd(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):bd(e,n.pos,Gt.head.cy,Gt.body.ay,Gt.body.by)}function F0(n,e,t,i,s,r=le.combat){let o=O0(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Yn(n,e,t,i,Xb);if(!a)return $c[0]=Zc(s,Yb,r),Yn(n,e,t,i,$c);let c=Gt.body.by;return $c[0]=bd(qb,s.pos,Gt.head.cy,c-r.shoulderDrop,c),Yn(n,e,t,i,$c)}var k0=1.49,B0=.2;function H0(n,{spacing:e,cornerZone:t}){e=Math.max(B0,Number.isFinite(e)?e:B0);let i={cornerZone:t},s=[],r=(o,a,c)=>{let l=oi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:c,pos:[l[0],l[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let c=0;c<a;c++){let l=c*e;r(o,l,xs(o,l,i))}r(o,o.length,xs(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function $b(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function z0(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Yn(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function Jc(n,e,t,i=le){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:k0,n.pos[1]],r=$b(n,i.associate.popShift),o=[r[0],k0,r[1]];return{protected:!z0(t,s,e),canShoot:z0(t,o,e)}}var V0=.9;function ia(n,e,t,i){return xi(n,[e[0],V0,e[1]],[t[0],V0,t[1]],i)===1}var sa=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function G0(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)sa(s[o],s[a])<=i&&ia(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function Zb(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),c=new Array(r.length).fill(-1),l=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let p of t)h[p]=!0;let f=[];for(let p of e)a[p]=sa(i,r[p]),f.push(p);let u=p=>a[p]+sa(r[p],s),d=-1,m=1/0;for(;f.length;){let p=0;for(let v=1;v<f.length;v++){let S=f[v],M=f[p],b=u(S),w=u(M);(b<w-1e-12||Math.abs(b-w)<=1e-12&&S<M)&&(p=v)}let g=f.splice(p,1)[0];if(!l[g]){if(u(g)>=m)break;if(l[g]=!0,h[g]){let v=a[g]+sa(r[g],s);(v<m-1e-12||Math.abs(v-m)<=1e-12&&g<d)&&(d=g,m=v)}for(let v of o[g]){if(l[v])continue;let S=a[g]+sa(r[g],r[v]);S<a[v]-1e-12&&(a[v]=S,c[v]=g,f.push(v))}}}if(d<0)return null;let x=[];for(let p=d;p>=0;p=c[p])x.push(p);return x.reverse()}function W0(n,e,t,i,s){if(ia(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((u,d)=>{ia(e,t,u,s)&&o.push(d),ia(e,u,i,s)&&a.push(d)}),!o.length||!a.length)return null;let c=Zb(n,o,a,t,i);if(!c)return null;let l=[...c.map(u=>r[u]),i],h=[],f=t;for(let u=0;u<l.length;u++){let d=l[u+1];d&&ia(e,f,d,s)||(h.push([l[u][0],l[u][1]]),f=l[u])}return h}var Jb=.25,Kb=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),jb=new Set(["telegraph","burst","suppress"]),Ad=n=>Math.max(0,Math.min(1,n)),ys=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function Rd(n,e=le.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,jc(n),n}function X0({id:n,pos:e},t=le.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:Gt.head.r},body:{a:[0,0,0],b:[0,0,0],r:Gt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0]};return Rd(i,t)}function jc(n,e=le.combat){let[t,i,s]=n.pos,r=n.shapes,o=Kb.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+Gt.head.cy,r.body.a[1]=i+Gt.body.ay,r.body.b[1]=i+Gt.body.by),r}function Ms(n,e){n.state=e,n.stateT=0}function Fr(n,e,t){e=Ad(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var qs=(n,e)=>e>0?n/e:1;function Qc(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=Ln(n.yaw,Math.atan2(r,o),i.turnRate*s))}function Y0(n,e,t){let i=n.point.normal;n.yaw=Ln(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function Kc(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function Cd(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function eh(n,e){let t=e.tuning||le,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=Cd(n,e),c=n.point,l=ys(c?c.pos:[n.pos[0],n.pos[2]],o),h=n.role,f=!!c&&(n.mustMove||h!=="hold"),u=[n.pos[0],n.pos[2]],d=Math.cos(s.flankAngle*Math.PI/180),m=Math.cos(s.flankMaxAngle*Math.PI/180),x=0,p=0;if(r.coverNormal)x=-r.coverNormal[0],p=-r.coverNormal[1];else{let b=0;for(let w of e.others||[])w.alive&&(x+=w.pos[0],p+=w.pos[2],b++);b?(x=x/b-o[0],p=p/b-o[1]):(x=n.pos[0]-o[0],p=n.pos[2]-o[1])}let g=Math.hypot(x,p)||1;x/=g,p/=g;let v=[];for(let[b,w]of e.reserved)w!==n.id&&v.push(e.points[b].pos);let S=null,M=-1/0;for(let b of e.points){let w=e.reserved.get(b.index);if(w!==void 0&&w!==n.id||f&&b.index===c.index||n.mustMove&&c&&ys(b.pos,c.pos)<2*i.reserveRadius)continue;let _=ys(b.pos,o);if(_<i.reserveRadius||_<i.minRange||_>i.maxRange)continue;let y=!1;for(let D of v)if(ys(D,b.pos)<i.reserveRadius){y=!0;break}if(y)continue;let T=((b.pos[0]-o[0])*x+(b.pos[1]-o[1])*p)/_;if(h==="flank"?T<m:T<0)continue;let E=0;if(h==="push"){let D=l-_;if(D<2)continue;E=2*D}else if(h==="flank"){if(!r.coverNormal||T>d)continue;E=10}let R=Jc(b,a,e.boxes,t);if(!R.protected||!R.canShoot)continue;let I=-ys(u,b.pos)-.5*Math.abs(_-i.preferRange)+E;I>M+1e-9&&(M=I,S=b)}return S?{point:S,score:M}:null}function Qb(n,e){let t=eh(n,e);return t?t.point:null}function Td(n,e,t){let i=e.tuning||le,s=[n.pos[0],n.pos[2]],r=Cd(n,e),o=null,a=1/0;for(let c of e.points){let l=e.reserved.get(c.index);if(l!==void 0&&l!==n.id)continue;let h=ys(s,c.pos);h>=a||t&&!Jc(c,r,e.boxes,i).protected||(a=h,o=c)}return o}function Ss(n,e,t){Ms(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function $s(n,e,t){Kc(n,e),Fr(n,0,t),n.blind=0;let i=n.stuckCount>=3?Td(n,e,!1):Qb(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point){Ss(n,e,t);return}if(i=Td(n,e,!0)||Td(n,e,!1),!i){Ss(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){q0(n,e,t);return}let s=n.stuckCount>=3?null:W0(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],Ms(n,"run")}function q0(n,e,t){let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),Ss(n,e,t)}function ew(n,e,t,i){let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,c=o[0]-n.pos[0],l=o[1]-n.pos[2],h=Math.hypot(c,l);if(h<=t.arriveDist){if(a){q0(n,e,t);return}n.pathI++;continue}Qc(n,o[0],o[1],t,i);let f=Math.min(s,h);if(f<=1e-9)break;let u=Nr(e.boxes,n.pos,[c/h*f,0,l/h*f],t.radius,t.height),d=Math.hypot(u.pos[0]-n.pos[0],u.pos[2]-n.pos[2]);if(n.pos[0]=u.pos[0],n.pos[2]=u.pos[2],s-=d,d<f*.5)break;d>=h-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.stuckCount++,$s(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function Pd(n,e,t,i,s){let r=e.player,o=r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let c=0;c<3;c++)n.aim[c]+=(o[c]-n.aim[c])*a}var $0=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function tw(n,e,t,i,s){Fr(n,n.pop-qs(s,t.popTime),t),Y0(n,t,s);let r=e.player;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){$s(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let o=Jc(n.point,Cd(n,e),e.boxes,e.tuning||le);if(!o.protected||!o.canShoot||ys(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,$s(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,$s(n,e,t);return}if(!(n.stateT<n.wait)){if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){Ms(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}if(e.tokens.request(n.id,e.now,e.tokenCount,i)){Ms(n,"telegraph"),n.shots=0,Pd(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&(Ms(n,"suppress"),n.shots=0)}}}function Ed(n,e,t,i){Kc(n,e),i&&n.bursts++,Ss(n,e,t)}function nw(n,e,t,i){let s=e.player;if(Fr(n,n.pop+qs(i,t.popTime),t),Qc(n,s.pos[0],s.pos[2],t,i),Pd(n,e,t,i,!1),s.downed||!e.tokens.holds(n.id)){Ed(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(Ms(n,"burst"),n.shots=0)}function iw(n,e,t,i){let s=e.player;if(Fr(n,n.pop+qs(i,t.popTime),t),Qc(n,s.pos[0],s.pos[2],t,i),Pd(n,e,t,i,!1),s.downed||!e.tokens.holds(n.id)){Ed(n,e,t,!0);return}let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp,r[2]=n.pos[2];let o=$0(n.stateT,t.rate,t.burstTime),a=Math.min(1,s.speed/(e.tuning||le).move.sprint);for(;n.shots<o;){n.shots++;let c=n.aim[0]-r[0],l=n.aim[1]-r[1],h=n.aim[2]-r[2],f=Math.hypot(c,l,h)||1;e.events.push({type:"enemyShot",id:n.id,from:[r[0],r[1],r[2]],dir:[c/f,l/f,h/f],accurate:!0,spread:t.spread+t.moveSpread*a})}n.stateT>=t.burstTime-1e-9&&Ed(n,e,t,!0)}function sw(n,e,t,i){let s=e.player;if(n.blind=Ad(n.blind+qs(i,t.popTime)),Qc(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,Ss(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),c=n.muzzle;c[0]=n.pos[0],c[2]=n.pos[2],c[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||le).combat.blindLift:t.muzzleUp);let l=$0(a,t.suppressRate,t.suppressTime);for(;n.shots<l;){n.shots++;let h=s.head[0]-c[0],f=s.head[1]-c[1],u=s.head[2]-c[2],d=Math.hypot(h,f,u)||1;h/=d,f/=d,u/=d;let m=u,x=-h,p=Math.hypot(m,x);p<1e-6&&(m=1,x=0,p=1),m/=p,x/=p;let g=f*x,v=u*m-h*x,S=-f*m,M=2*Math.PI*e.rand(),b=t.suppressMiss*(1+.5*e.rand()),w=Math.cos(M)*b,_=Math.sin(M)*b,y=s.head[0]+m*w+g*_,T=s.head[1]+v*_,E=s.head[2]+x*w+S*_,R=y-c[0],I=T-c[1],D=E-c[2],P=Math.hypot(R,I,D)||1;e.events.push({type:"enemyShot",id:n.id,from:[c[0],c[1],c[2]],dir:[R/P,I/P,D/P],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,Ss(n,e,t))}function Z0(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,Jb);let i=(e.tuning||le).associate,s=e.director||le.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&$s(n,e,i);break;case"seek":$s(n,e,i);break;case"run":ew(n,e,i,t);break;case"cover":tw(n,e,i,s,t);break;case"telegraph":nw(n,e,i,t);break;case"burst":iw(n,e,i,t);break;case"suppress":sw(n,e,i,t);break;case"reload":Fr(n,n.pop-qs(t,i.popTime),i),Y0(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,Ss(n,e,i));break;case"flinch":Fr(n,n.pop-qs(t,i.popTime),i),n.blind=Ad(n.blind-qs(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?Ss(n,e,i):$s(n,e,i));break;default:break}}function J0(n,e,t){return!n.alive||!(e>0)?null:(n.health-=e,n.health<=0?(n.health=0,n.alive=!1,Kc(n,t),n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.pop=0,n.blind=0,Ms(n,"dead"),t.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),"kill"):(jb.has(n.state)&&(Kc(n,t),Ms(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function K0(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=le.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let c=e.get(s);c?c.last=r:e.set(s,{first:r,last:r});for(let[f,u]of e)r-u.last>a.requestWindow&&e.delete(f);if(n.size>=o)return!1;let l=null,h=1/0;for(let[f,u]of e)u.first<h&&(l=f,h=u.first);return l!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=le.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=le.director){let o=[];for(let[a,c]of n)s-c>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}var j0=new Set(["cover","coverSlide","coverSwap"]),Q0=new Set(["cover","suppress","reload","flinch"]),rw=.1,eg=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function tg({level:n,boxes:e,edges:t,rand:i,tuning:s=le}){let r=()=>s.associate,o=H0(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=G0(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),c=K0(),l=new Map,h=[],f=[],u=n.associates.map(I=>X0(I,s.associate)),d=Zc({state:"move",pos:[0,0,0],cover:null,scratch:{}}),m={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},x={boxes:e,points:o,graph:a,tokens:c,reserved:l,player:m,now:0,rand:i,tokenCount:0,events:h,tuning:s,director:s.director,others:u,started:!1},p={enemies:u,tokens:c,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0},g=[0,0],v=!1,S=!1;function M(){l.clear();for(let I of u){let D=null,P=1/0;for(let U of o){let F=Math.hypot(U.pos[0]-I.pos[0],U.pos[1]-I.pos[2]);F<P&&(P=F,D=U)}I.point=D,D&&l.set(D.index,I.id)}}M();let b=(I,D)=>h.push({type:"bark",id:I,key:D}),w=()=>u.find(I=>I.alive)||u[0];function _(){for(let I of c.held())c.release(I,p.now,s.director)}function y(I,D){let P=m,U=s.combat;P.pos[0]=I.pos[0],P.pos[1]=I.pos[1],P.pos[2]=I.pos[2];let F=j0.has(I.state)?Hi(I):null;P.exposed=!!(I.cover&&I.cover.exposed);let G=!!F&&F.kind==="low"&&!P.exposed;P.chest[0]=I.pos[0],P.chest[1]=I.pos[1]+(G?.6:1.2),P.chest[2]=I.pos[2];let V=Zc(I,d,U).shapes.head.c;P.head[0]=V[0],P.head[1]=V[1],P.head[2]=V[2],P.speed=I.speed(),P.coverNormal=F?F.normal:null,P.downed=!!D.downed}function T(I,D){let P=s.director;if(j0.has(I.state)?m.exposed||(p.hideT+=D):p.hideT=0,!S||Math.hypot(I.pos[0]-g[0],I.pos[2]-g[1])>P.stayRadius?(g[0]=I.pos[0],g[1]=I.pos[2],S=!0,p.stayT=0):p.stayT+=D,p.hideT>=P.pushAfter&&!u.some(F=>F.alive&&F.role==="push")){let F=u.filter(V=>V.alive&&V.role==="hold"&&Q0.has(V.state)&&!c.holds(V.id)).sort((V,z)=>eg(V.pos,m.pos)-eg(z.pos,m.pos)),G=null;for(let V of F){if(V.role="push",eh(V,x)){G=V;break}V.role="hold"}G?(b(G.id,"push"),p.hideT=0):p.hideT=Math.max(0,P.pushAfter-1)}if(p.stayT>=P.flankAfter&&!u.some(F=>F.alive&&F.role==="flank")){let F=null,G=-1/0;for(let V of u){if(!V.alive||V.role!=="hold"||!Q0.has(V.state)||c.holds(V.id))continue;V.role="flank";let z=eh(V,x);V.role="hold",z&&z.score>G&&(G=z.score,F=V)}F&&(F.role="flank",b(F.id,"flank")),p.stayT=0}}function E(I){let D=s.associate.radius,P=s.associate.height,U=(F,G,V)=>{let z=Nr(e,F.pos,[G,0,V],D,P);F.pos[0]=z.pos[0],F.pos[2]=z.pos[2]};for(let F=0;F<u.length;F++){let G=u[F];if(!G.alive)continue;for(let ce=F+1;ce<u.length;ce++){let pe=u[ce];if(!pe.alive)continue;let Z=pe.pos[0]-G.pos[0],he=pe.pos[2]-G.pos[2],Se=Math.hypot(Z,he);if(Se>=2*D)continue;Se<1e-6&&(Z=1,he=0,Se=1);let Ve=(2*D-Se)/2;U(G,-Z/Se*Ve,-he/Se*Ve),U(pe,Z/Se*Ve,he/Se*Ve)}let V=G.pos[0]-I.pos[0],z=G.pos[2]-I.pos[2],H=Math.hypot(V,z),X=D+s.move.radius;H<X&&(H<1e-6&&(V=1,z=0,H=1),U(G,V/H*(X-H),z/H*(X-H)))}}function R(I,D){let P=r(),U=[0,0,0];for(let F=0;F<h.length;F++){let G=h[F];if(G.type!=="enemyShot")continue;if(G.accurate&&D.downed){h.splice(F--,1);continue}let V=vd(G.dir,G.spread,i,U);if(G.accurate){let z=F0(G.from,V,P.range,e,I,s.combat),H=z.point;if(z.kind==="head"||z.kind==="body"){let X=D.damage(P.damage);h.push({type:"playerHit",id:G.id,from:G.from,amount:P.damage,result:X}),X==="downed"&&(I.state!=="downed"&&I.down(),_())}h.push({type:"shotFx",from:G.from,to:H.slice(),accurate:!0})}else{let z=Yn(G.from,V,P.range,e,[]);h.push({type:"shotFx",from:G.from,to:z.point,accurate:!1})}}}return p.targets=()=>u,p.step=(I,D)=>{(!(I>0)||!Number.isFinite(I))&&(I=0),I=Math.min(I,rw),h.length=0;for(let F of f)h.push(F);f.length=0;let{m:P,health:U}=D;if(p.now+=I,x.now=p.now,!p.started&&P.pos[2]>n.trigger.z&&(p.started=!0,b(w().id,"lockdown")),x.started=p.started,y(P,U),m.downed){_();for(let F of u)F.role="hold";!v&&p.started&&b(w().id,"downed")}else p.started&&!p.clear&&T(P,I);v=m.downed,c.expire(p.now,s.director),x.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens;for(let F of u)Z0(F,x,I);R(P,U),E(P);for(let F of u)jc(F,s.combat);return p.started&&!p.clear&&u.every(F=>!F.alive)&&(p.clear=!0,h.push({type:"clear"}),b(u[u.length-1].id,"clear")),h},p.hurt=(I,D)=>{x.events=f;let P=J0(I,D,x);return x.events=h,P&&(p.started=!0),P},p.reset=()=>{c.reset();for(let I of u)Rd(I,s.associate);M(),h.length=0,f.length=0,p.started=p.clear=!1,p.now=0,p.hideT=p.stayT=0,x.now=0,x.started=!1,v=!1,S=!1;for(let I of u)jc(I,s.combat)},p}function th(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=n0(n),o=i0(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var ng=n=>Math.max(0,Math.min(1,n));function ig({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=le.feedback}){let a=t?1:e>0?ng(1-n/e):1,c={top:0,right:0,bottom:0,left:0};for(let h of s){let f=o.hitFlashTime>0?ng(1-(r-h.t)/o.hitFlashTime):0;if(f<=0)continue;let u=Math.cos(h.angle),d=Math.sin(h.angle);c.top=Math.max(c.top,f*Math.max(0,u)),c.right=Math.max(c.right,f*Math.max(0,d)),c.bottom=Math.max(c.bottom,f*Math.max(0,-u)),c.left=Math.max(c.left,f*Math.max(0,-d))}let l=o.edgeMaxOpacity*a;for(let h of Object.keys(c))c[h]=Math.min(1,l+c[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:c,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var sg=Object.freeze({lockdown:"Lockdown! Your business is important to us!",push:"Escalating! Please hold!",flank:"Circling round to better assist you!",reload:"Restocking!",downed:"Customer resolved!",clear:"Ticket\u2026 closed\u2026"});function rg(n=()=>le.feedback){let e=1/0,t=0,i=null;return{say(s,r=!1){return!sg[s]||!r&&e<n().barkGap?!1:(i=sg[s],t=n().barkTime,e=0,!0)},tick(s){s>0&&(e+=s,t-=s)},current:()=>t>0&&i?{speaker:"Associate",text:i}:null,reset(){e=1/0,t=0,i=null}}}var og=4,ow=1.2,kr=[0,0,0];function aw(){let n=(e,t,i,s,r)=>{let o=new Ot(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new it(r),c=o.getAttribute("position").count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=a.r,l[h*3+1]=a.g,l[h*3+2]=a.b;return o.setAttribute("color",new At(l,3)),o};return Cn([n(.3,.16,.22,.08,fe.cream),n(.34,.07,.26,.195,fe.playerOrange)],!1)}function lw(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function ag({scene:n,effects:e,sfx:t,fight:i,views:s}){let r=new Map(i.enemies.map((g,v)=>[g.id,s[v]])),o=new Map(i.enemies.map(g=>[g.id,g])),a=new Map,c=[],l=new Ls(aw(),Ht({vertexColors:!0,rim:0}),og);l.name="pickups",l.frustumCulled=!1,l.count=0,n.add(l);let h=new pn,f=0,u=rg(),d=(g,v)=>Math.sin(th(g.yaw,g.pos,v));function m(g){let v=null,S=1/0;for(let M of i.enemies){let b=Math.hypot(M.pos[0]-g[0],M.pos[2]-g[2]);b<S&&(S=b,v=M)}return v}function x(g,v){let S=le.feedback,M=le.associate;for(let b of g)if(b.type==="bark")u.say(b.key,!1);else if(b.type==="telegraph"){a.set(b.id,M.popTime+M.telegraphTime);let w=r.get(b.id),_=o.get(b.id);w&&w.glint(!0),_&&t.play("charge",S.chargeVolume,d(v,_.pos))}else if(b.type==="shotFx"){let w=m(b.from),_=w&&r.get(w.id);lw(b,_?_.tip:null,kr);let y=b.to[0]-kr[0],T=b.to[1]-kr[1],E=b.to[2]-kr[2],R=Math.hypot(y,T,E)||1;e.enemyFlash(kr,[y/R,T/R,E/R]),e.enemyTracer(kr,b.to);let I=Math.hypot(b.from[0]-v.pos[0],b.from[2]-v.pos[2]);t.play("blaster",S.blasterVolume*Math.min(1,8/Math.max(I,.001)),d(v,b.from))}}function p(){l.count=c.length;for(let g=0;g<c.length;g++)h.position.set(c[g].pos[0],c[g].pos[1],c[g].pos[2]),h.rotation.set(0,f*ow+g,0),h.updateMatrix(),l.setMatrixAt(g,h.matrix);l.instanceMatrix.needsUpdate=!0}return{handle:x,forceBark:g=>u.say(g,!0),bark:()=>u.current(),tick:g=>u.tick(g),update(g){if(g>0){f+=g;for(let[v,S]of a)if(S-g<=0){a.delete(v);let M=r.get(v);M&&M.glint(!1)}else a.set(v,S-g);c.length&&p()}},addPickup(g){c.length>=og&&c.shift(),c.push({pos:[g[0],g[1],g[2]]}),p()},collect(g,v){let S=0;for(let M=c.length-1;M>=0;M--)Math.hypot(g[0]-c[M].pos[0],g[2]-c[M].pos[2])<=v&&(c.splice(M,1),S++);return S&&p(),S},count:()=>c.length,pickups:()=>c.map(g=>g.pos.slice()),reset(){c.length=0,l.count=0,l.instanceMatrix.needsUpdate=!0,a.clear(),u.reset()}}}var lg=.05;function cw({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function cg(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function hw(n){return n&&n.has("room")?"greyRoom":"kioskRow"}function uw(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var dw=2e3,fw=500,pw=500,mw=new Set(["enemyShot","playerHit","telegraph","death","clear","bark"]);function hg({canvas:n,gl:e,params:t}){let i=hc(n,e),s=i.renderer,r=cc(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),c={panelOpen:()=>!1};window.__cr.hooks=c;let l=zm();c.panelOpen=l.isOpen;let h=new Ps,f=new an(le.camera.fov,1,.05,100),u=uc();h.add(u.mesh);let d=hw(t),m=d==="greyRoom"?Uc:Nm,x=Lm(m);h.add(x.group);let p=x.boxes,g=m.spawn,v=()=>Xm(p,{...Wm(),exclude:m.coverExclude}),S=cg(le.cover),M=[],b=0,w=!1,_=s0({boxes:p,spawn:g.pos,coverEdges:v(),onState(Y,Le){M.push({state:Y,from:Le,t:b,tapped:w,auto:Y==="coverSlide"&&!w&&(Le==="move"||Le==="sprint")}),M.length>dw&&M.shift()},onStep(Y){T.dip(le.feedback.stepDip),R.play("step",le.feedback.stepVolume*(Y.sprint?1.25:1))}});_.place(g.pos,g.yaw);let y=P0(_);h.add(y.group);let T=Rm(),E=bm(),R=r0({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),I=o0(),D=c0(),P=v0(h),U=M0(document.body),F=Pr(1),G=(m.dummies||[]).map(Y=>{let Le=p0(Y),st=S0(Le);return h.add(st.group),{dummy:Le,view:st,wasAlive:!0}}),V=G.map(Y=>Y.dummy),z=U0(),H=d==="kioskRow"?tg({level:m,boxes:p,edges:v(),rand:Pr(4242)}):null,X=H?H.enemies.map(Y=>{let Le=N0(Y);return h.add(Le.group),Le}):[],ce=new Map(H?H.enemies.map((Y,Le)=>[Y,X[Le]]):[]),pe=H?ag({scene:h,effects:P,sfx:R,fight:H,views:X}):null,Z=H?H.targets():V,he=[],Se=[],Ve={pos:[0,0,0],yaw:0},K=[],be="-",_e="-",De=null,qe=null,je=0,ie=null,ye=0,Ae=1,ge=[],ae={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},Be=[0,0,0],Oe=0,Ye=[0,0,0];T.snap(g.pos,g.yaw,"normal",1);let Ge=null,tt=!1,k=null,de=!1,Pe=!1,$e=!1,ee={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1},nt={reload:!1,weapon:null,fire:!1,interact:!1},ze=!1,Ie={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1},L={weapon:null,reload:!1,fire:!1,firePressed:!1},A=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function q(){let Y=i.resize();f.aspect=Y.aspect,f.updateProjectionMatrix()}q(),window.addEventListener("resize",q),n.addEventListener("click",()=>r.requestLock());let xe=()=>{E.reset(),I.reset()};window.addEventListener("blur",xe),document.addEventListener("pointerlockchange",()=>{r.isLocked()||xe()});let re=()=>R.unlock();window.addEventListener("pointerdown",re),window.addEventListener("keydown",re),window.addEventListener("keydown",Y=>{Y.repeat||Pu(Y.target)||(Y.code==="Backquote"?(l.toggle(),l.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):Y.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function ve(){H&&H.reset(),z.reset(),D.reset(),Ee(g.pos,g.yaw),De=null,E.reset(),I.reset(),T.recenter(),P.clear(),ge.length=0,he.length=0,qe=null,ie=null,je=0,ye=0,pe&&pe.reset();for(let Y of X)Y.reset()}function we(){_.state!=="downed"&&_.down(),D.cancelReload(),R.play("downed",le.feedback.hurtVolume),pe&&pe.forceBark("downed")}function ne(Y){Se.push({t:b,type:Y.type,id:Y.id||null,accurate:!!Y.accurate,hit:Y.type==="playerHit",key:Y.key||null}),Se.length>pw&&Se.shift()}function se(Y){let Le=le.feedback;Ve.pos[0]=_.pos[0],Ve.pos[1]=_.pos[1],Ve.pos[2]=_.pos[2],Ve.yaw=T.yaw;let st=H.step(Y,{m:_,health:z});pe.handle(st,Ve);for(let ht of st)if(mw.has(ht.type)&&ne(ht),ht.type==="playerHit"){let sn=th(T.yaw,_.pos,ht.from);he.push({t:b,angle:sn});let Zn=Math.random()*2*Math.PI;T.kick(Le.hitKick*Math.cos(Zn),Le.hitKick*Math.sin(Zn)),R.play("hurt",Le.hurtVolume,Math.sin(sn)),ht.result==="downed"&&we()}else ht.type==="clear"&&R.play("clear",Le.killVolume);for(;he.length&&b-he[0].t>Le.hitFlashTime;)he.shift();let It=z.update(Y);It==="revived"&&_.revive();let Et=ze;if(ze=!1,It==="bleedOut"||Et&&(z.downed||H.clear)){ve();return}!z.downed&&pe.collect(_.pos,le.combat.pickupRadius)&&(D.addReserve("regret",le.associate.ammoDrop),R.play("pickup",Le.pickupVolume))}function Ee(Y,Le){_.place(Y,Le),T.snap(Y,Le,pd(_),Ys(_)),Oe=_.slams}let N={pos:[0,0,0],dir:[0,0,1],fov:70},te="normal",j=1,Te=0,Me=0,ue=0,me=0,Fe=0,oe=0,Ne=0,Re=window.__cr;Re.stats=()=>({fps:Te,ms:Me,calls:Fe,tris:oe,scale:i.scale(),characters:1+X.length}),Re.player=()=>{let Y=_.cover;return{pos:_.pos.slice(),state:_.state,speed:_.speed(),facing:_.facing,entries:_.entries,cover:Y?{id:Y.edge.id,kind:Y.edge.kind,t:Y.t,length:Y.edge.length,pop:Y.pop,exposed:Y.exposed}:null,slams:_.slams,steps:_.steps,blind:Y?Y.blind:0,firing:!!_.firing}},Re.gun=()=>{let Y=D.current(),Le=D.ammo[Y],st=D.reload,It=le.weapons[Y];return{id:Y,slot:D.slot,mag:Le.mag,reserve:Le.reserve,boost:Le.boost,reload:st?{u:st.t/Math.max(It.reloadTime,le.combat.minReloadTime),press:st.press}:null,switching:D.switching>0,spread:D.spreadOf(De||"hip"),stance:De}},Re.dummies=()=>V.map(Y=>({id:Y.id,health:Y.health,alive:Y.alive,pos:Y.pos.slice()})),Re.level=()=>d,Re.fight=()=>H?{started:H.started,clear:H.clear,tokens:H.tokens.held(),pickups:pe.count(),pickupPos:pe.pickups(),enemies:H.enemies.map(Y=>({id:Y.id,state:Y.state,health:Y.health,alive:Y.alive,pos:Y.pos.slice(),holds:H.tokens.holds(Y.id),role:Y.role,point:Y.point?Y.point.index:null,pop:Y.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},Re.health=()=>({hp:z.hp,max:le.health.max,downed:z.downed,downT:z.downT}),Re.hurt=Y=>{z.damage(Y)==="downed"&&we()},Re.god=Y=>{le.health.godMode=Y?1:0},Re.fightLog=()=>Se.map(Y=>({...Y})),Re.clearFightLog=()=>{Se.length=0},Re.restart=()=>ve(),Re.shots=()=>K.map(Y=>({...Y})),Re.clearShots=()=>{K.length=0},Re.setGun=(Y,Le)=>D.set(Y,Le),Re.look=(Y,Le)=>{T.yaw=Y,T.pitch=Le},Re.camera=()=>{let Y=N;return{pos:Y.pos.slice(),fov:Y.fov,inside:Ic(p,Y.pos,.1),mode:te,side:j,yaw:T.yaw,pitch:T.pitch}},Re.transitions=()=>M.map(Y=>({...Y})),Re.clearTransitions=()=>{M.length=0},Re.coverTarget=()=>{let Y=k||{moveX:Ge?Ge.moveX:0,moveY:Ge?Ge.moveY:0},Le=ta(_.coverEdges,p,_.pos,fd(_,{moveX:Y.moveX||0,moveY:Y.moveY||0,camYaw:T.yaw},[0,0]),T.yaw,le.cover,le.move.radius);return Le?{id:Le.edge.id,kind:Le.edge.kind,dist:Le.dist}:null},Re.place=Y=>{let Le=Y==="spawn"?g:m.features[Y];Le&&Ee(Le.pos,Le.yaw)},Re.at=(Y,Le,st=0)=>Ee([Y,0,Le],st),Re.drive=Y=>{if(!Y){de?Pe=!0:k=null;return}Y.fire&&!(k&&k.fire)&&(nt.fire=!0),k=Y,Pe=!1,Y.tap&&(de=!0),Y.reload&&(nt.reload=!0),Y.interact&&(nt.interact=!0),Y.weapon&&(nt.weapon=Y.weapon)};function Ce(Y){if(k){Ie.moveX=k.moveX||0,Ie.moveY=k.moveY||0,Ie.sprint=!!k.sprint,Ie.aim=!!k.aim,Ie.tap=de;let Le=I.update(!!k.fire,nt.fire,!0);nt.fire=!1,Ie.fire=Le.fire,L.fire=Le.fire,L.firePressed=Le.firePressed,L.reload=nt.reload,L.weapon=nt.weapon,nt.reload=!1,nt.weapon=null,de&&(de=!1,Pe&&(k=null,Pe=!1))}else{let Le=Ge.held;Ie.moveX=Ge.moveX,Ie.moveY=Ge.moveY,Ie.tap=E.update(Le.cover,ee.cover,Y,le.move.tapMax),Ie.sprint=Le.sprint||E.holding(),Ie.aim=Le.aim;let st=I.update(Le.fire,ee.fire,!0);Ie.fire=st.fire,L.fire=st.fire,L.firePressed=st.firePressed,L.reload=ee.reload,L.weapon=ee.weapon}return ze=ee.interact||nt.interact,ee.cover=!1,ee.fire=!1,ee.reload=!1,ee.weapon=null,ee.interact=!1,nt.interact=!1,Ie.camYaw=T.yaw,w=Ie.tap,Ie}let Qe=Y=>Y.toFixed(1);function ct(){let Y=_.cover;if(Y)return`cover: ${Y.edge.kind} ${Y.edge.id}  t ${Y.t.toFixed(2)}/${Y.edge.length.toFixed(2)}  pop ${Y.pop.toFixed(2)}`;let Le=Re.coverTarget();return Le?`tap grabs: ${Le.kind} ${Le.dist.toFixed(1)} m`:"tap grabs: nothing"}function Tt(){let Y=Re.gun(),Le=Y.id;return`gun: ${Hc[Le].name} ${Y.mag}/${le.weapons[Le].infiniteReserve>0?"\u221E":Y.reserve}  ${Y.stance||"-"}  spread ${Y.spread.toFixed(1)}`}function Dt(){let Y=r.padStatus(),Le=[H?"FIRST FIGHT":"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];H&&Le.push("E / X: give up when downed, go again when clear"),Le.push("Sound starts after a click or key","",`${_.state}   ${_.speed().toFixed(2)} m/s`,ct(),Tt()),H?(Le.push(`fight: ${H.enemies.filter(st=>st.alive).length}/${H.enemies.length}  tokens ${H.tokens.held().join(",")||"-"}  hp ${z.hp.toFixed(0)}`),Le.push(`health: ${z.hp.toFixed(0)}/${le.health.max}  ${z.downed?`downed ${z.downT.toFixed(1)}`:"-"}`)):Le.push(`dummies: ${V.filter(st=>st.alive).length}/${V.length}  last: ${be} ${_e}`),Le.push(`${Math.round(Te)} fps   ${Qe(Me)} ms   scale ${i.scale()}`,`${Fe} draw calls   ${oe} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${Y}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=Le.join(`
`)}let Rt=Y=>le.feedback[Y];function Dn(Y){Y.type==="shot"?Tn(Y):Y.type==="reloadStart"?R.play("magOut",Rt("reloadVolume")):Y.type==="reloadPress"?(R.play(Y.result,Rt("reloadVolume")),ie=Y.result,ye=0):Y.type==="reloadDone"?R.play("magIn",Rt("reloadVolume")):Y.type==="dry"&&R.play("dry",Rt("reloadVolume"))}function nn(Y,Le){m0(Y.dummy,Le),Y.dummy.alive&&!Y.wasAlive&&Y.view.respawn(),Y.wasAlive=Y.dummy.alive}let Pt=[0,0,0];function Tn(Y){let Le=le.weapons[Y.id],st=_.cover?_.cover.edge:null;u0(_,De,T.yaw,le.combat,Be);let It=d0({lens:N.pos,view:N.dir,muzzle:Be,spreadDeg:Y.spread,range:Le.range,boxes:p,targets:Z,ignoreBox:st?st.boxIndex:-1,rand:F}),Et=It.hit,ht=Et.target,sn=null;ht&&(sn=H?H.hurt(ht,yd(Le,Et.kind,Y.mult)):g0(ht,yd(Le,Et.kind,Y.mult))),be=Et.kind,_e=ht?ht.id:"-",K.push({t:b,kind:Et.kind,target:ht?ht.id:null,point:Et.point.slice(),stance:De}),K.length>fw&&K.shift();let Zn=[It.dir[0],It.dir[1],It.dir[2]];if(ge.push({id:Y.id,from:Be.slice(),dir:Zn,hit:Et,target:ht,result:sn}),sn==="kill"&&!H){let Zs=G.find(Br=>Br.dummy===ht);Zs.wasAlive=!1}}function ai(Y){let Le=le.weapons[Y.id],st=le.feedback,It=y.gunTip(Pt);T.kick(Le.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Le.kickYaw),P.flash(It,Y.dir),P.tracer(It,Y.hit.point),R.play(Y.id==="regret"?"rifle":"pistol",st.shotVolume);let Et=[-Y.dir[0],-Y.dir[1],-Y.dir[2]];if(Y.hit.kind==="world")P.spark(Y.hit.point,Et);else if(Y.target){let ht=H?ce.get(Y.target):G.find(sn=>sn.dummy===Y.target).view;Y.result==="kill"?(H?(ht.death(),pe.addPickup(Y.target.pos)):ht.burst(),P.gel(Y.hit.point,Et,st.killGelCount),P.receipts(Y.target.pos.map((sn,Zn)=>Zn===1?sn+1.2:sn),st.receiptCount),qe="kill",je=st.killMarkerTime,R.play("kill",st.killVolume)):(H||ht.hit(Y.hit.kind),P.gel(Y.hit.point,Et),qe=Y.hit.kind,je=st.hitMarkerTime,R.play(Y.hit.kind==="head"?"head":"hit",st.hitVolume))}}let $n=lc({before(Y){if(Ge=r.poll(),tt=!!k||de||cw({locked:r.isLocked(),device:r.device(),panelOpen:c.panelOpen()}),a.hidden=tt,!tt){E.reset(),I.reset(),ee.cover=!1,ee.fire=!1,ee.reload=!1,ee.weapon=null,ee.interact=!1;return}let st=Math.min(Y,lg);$e=Ge.held.aim||k&&k.aim,T.look(Ge.lookDX,Ge.lookDY,Ge.lookX,Ge.lookY,st,$e,Ae),Ge.pressed.cover&&(ee.cover=!0),Ge.pressed.fire&&(ee.fire=!0),Ge.pressed.reload&&(ee.reload=!0),Ge.pressed.interact&&(ee.interact=!0);for(let[It,Et]of A)Ge.pressed[It]&&(ee.weapon=Et)},step(Y){if(!tt)return;let Le=cg(le.cover);Le!==S&&(S=Le,_.coverEdges=v()),b+=Y;let st=Ce(Y);uw(st,L,{downed:!!H&&z.downed,busy:D.reload!==null||D.switching>0}),_.update(st,Y),De=h0(_);let It=D.update(L,De,Y);for(let Et of It)Dn(Et);H&&(pe.tick(Y),se(Y));for(let Et of G)nn(Et,Y);x0(_.pos,m.ammoCrates,le.combat.crateRadius)&&D.refill()},render(Y,Le){let st=tt?Math.min(Le,lg):0;ae.shot=ge.length>0,ae.dir=N.dir,ae.stance=De,ae.weapon=D.current(),y.update(Y,st,ae);for(let xn of G)xn.view.update(st);for(let xn of X)xn.update(Y,st);pe&&pe.update(st);let It=_.pos,Et=_.prevPos;for(let xn=0;xn<3;xn++)Ye[xn]=Et[xn]+(It[xn]-Et[xn])*Y;_.slams>Oe&&(Oe=_.slams,T.bump(),R.play("thud",le.cover.thudVolume)),te=pd(_),j=Ys(_);let ht=T.update(st,{target:Ye,mode:te,side:j},p);N.pos[0]=ht.pos[0],N.pos[1]=ht.pos[1],N.pos[2]=ht.pos[2],N.fov=ht.fov,N.dir[0]=ht.dir[0],N.dir[1]=ht.dir[1],N.dir[2]=ht.dir[2],f.fov!==ht.fov&&(f.fov=ht.fov,f.updateProjectionMatrix()),y.fadeHeadFor(ht.pos,le.camera.headHideDist,le.camera.headHideMargin),f.position.set(ht.pos[0],ht.pos[1],ht.pos[2]),f.lookAt(ht.pos[0]+ht.dir[0],ht.pos[1]+ht.dir[1],ht.pos[2]+ht.dir[2]);for(let xn of ge)ai(xn);ge.length=0,P.update(st),je-=st,je<=0&&(qe=null),ie&&(ye+=st,ye>=le.feedback.reloadResultTime&&(ie=null));let sn=_.cover?_.cover.edge:null,Zn=Yn(N.pos,N.dir,100,p,Z,{ignoreBox:sn?sn.boxIndex:-1});Ae=r.device()==="pad"&&Zn.target?le.look.pad.assist:1;let Zs=!!_.cover&&_.cover.pop<.5,Br=De||(_.cover&&(_.cover.pop>0||Zs)?"aim":"hip"),ra=H?ig({hp:z.hp,max:le.health.max,downed:z.downed,downT:z.downT,hits:he,now:b}):null;U.render(y0({arsenal:D,stance:De,firing:Ie.fire,covered:Zs,device:r.device(),spreadDeg:D.spreadOf(Br),fov:f.fov,viewportH:n.clientHeight||window.innerHeight,marker:qe,reloadFlash:ie,face:ra,bark:pe?pe.bark():null,objective:H?H.clear?"Kiosk Row clear":H.started?"Clear Kiosk Row":"Walk in":"",banner:H?z.downed?{title:`DOWNED ${ra.downed.seconds}`,hint:"E / X give up"}:H.clear?{title:"KIOSK ROW CLEAR",hint:"E / X go again"}:null:null})),u.update(performance.now()/1e3),x.update(st),s.render(h,f),Fe=s.info.render.calls,oe=s.info.render.triangles,ue++,me+=Le,me>=1&&(Te=ue/me,Me=me/ue*1e3,ue=0,me=0),Ne+=Le,Ne>=.1&&(Ne=0,Dt()),i.frameDone(Le*1e3)}});t&&t.has("tune")&&l.toggle(),Ge=r.poll(),T.update(0,{target:g.pos,mode:"normal",side:1},p),Dt(),$n.start()}var gw={webgl:"Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function Id(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(gw[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||Id("boot",n.message)});function xw(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){Id("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Sm({canvas:n,gl:e}):hg({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{xw()}catch(n){Id("boot",n&&n.message)}})();

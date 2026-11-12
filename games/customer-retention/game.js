/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var _f=0,Vh=1,yf=2;var Io=1,Mf=2,br=3,es=0,qt=1,Wn=2,ks=0,wr=1,Wh=2,Xh=3,Yh=4,Sf=5;var Bs=100,bf=101,wf=102,Tf=103,Ef=104,Af=200,Rf=201,Cf=202,Pf=203,qh=204,$h=205,If=206,Lf=207,Df=208,Nf=209,Of=210,Uf=211,Ff=212,kf=213,Bf=214,Fa=0,ka=1,Ba=2,dr=3,za=4,Ha=5,Ga=6,Va=7,Zh=0,zf=1,Hf=2,di=0,Jh=1,Kh=2,jh=3,Qh=4,eu=5,tu=6,nu=7;var iu=300,zs=301,Tr=302,yl=303,Ml=304,Wa=1e3,ci=1001,Xa=1002,tn=1003,Gf=1004;var Lo=1005;var Sn=1006,Sl=1007;var Di=1008;var kn=1009,su=1010,ru=1011,Er=1012,bl=1013,ti=1014,Xn=1015,ni=1016,wl=1017,Tl=1018,Hs=1020,ou=35902,au=35899,lu=1021,cu=1022,ii=1023,Pi=1026,Ni=1027,El=1028,Al=1029,ts=1030,Rl=1031;var Cl=1033,Do=33776,No=33777,Oo=33778,Uo=33779,Pl=35840,Il=35841,Ll=35842,Dl=35843,Nl=36196,Ol=37492,Ul=37496,Fl=37488,kl=37489,Fo=37490,Bl=37491,zl=37808,Hl=37809,Gl=37810,Vl=37811,Wl=37812,Xl=37813,Yl=37814,ql=37815,$l=37816,Zl=37817,Jl=37818,Kl=37819,jl=37820,Ql=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,ko=36285,rc=36286;var to=2300,Ya=2301,Oa=2302,Nh=2303,Oh=2400,Uh=2401,Fh=2402;var Vf=3200;var hu=0,Wf=1,Oi="",on="srgb",no="srgb-linear",io="linear",bt="srgb";var Ua=7680;var Xf=519,Yf=512,qf=513,$f=514,uu=515,Zf=516,Jf=517,du=518,fu=519,Kf=35044,Ar=35048;var pu="300 es",Gn=2e3,so=2001;function Mg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jf(){let n=ro("canvas");return n.style.display="block",n}var Gd={},fr=null;function mu(...n){let e="THREE."+n.shift();fr?fr("log",e,...n):console.log(e,...n)}function Qf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=Qf(n);let e="THREE."+n.shift();if(fr)fr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=Qf(n);let e="THREE."+n.shift();if(fr)fr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Jr(...n){let e=n.join(" ");e in Gd||(Gd[e]=!0,rt(...n))}function ep(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var tp={[Fa]:Fa,[Ba]:Ga,[za]:za,[dr]:Ha,[ka]:ka,[Ga]:Ba,[Va]:Va,[Ha]:dr},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,Kr=Math.PI/180,pr=180/Math.PI;function Gs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function gu(n,e){return(n%e+e)%e}function bg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wg(n,e,t){return n!==e?(t-n)/(e-n):0}function jr(n,e,t){return(1-t)*n+t*e}function Tg(n,e,t,i){return jr(n,e,1-Math.exp(-t*i))}function Eg(n,e=1){return e-Math.abs(gu(n,e*2)-e)}function Ag(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Pg(n,e){return n+Math.random()*(e-n)}function Ig(n){return n*(.5-Math.random())}function Lg(n){n!==void 0&&(Vd=n);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dg(n){return n*Kr}function Ng(n){return n*pr}function Og(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ug(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+i)/2),c=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*c,l*f,l*u,a*h);break;case"YZY":n.set(l*u,a*c,l*f,a*h);break;case"ZXZ":n.set(l*f,l*u,a*c,a*h);break;case"XZX":n.set(a*c,l*m,l*d,a*h);break;case"YXY":n.set(l*d,a*c,l*m,a*h);break;case"ZYZ":n.set(l*m,l*d,a*c,a*h);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function np(n,e){if(e.constructor===Float32Array)return n;let t=vu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function ip(n,e){if(e.constructor===Float32Array)return n;let t=vu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var oc={DEG2RAD:Kr,RAD2DEG:pr,generateUUID:Gs,clamp:ut,euclideanModulo:gu,mapLinear:bg,inverseLerp:wg,lerp:jr,damp:Tg,pingpong:Eg,smoothstep:Ag,smootherstep:Rg,randInt:Cg,randFloat:Pg,randFloatSpread:Ig,seededRandom:Lg,degToRad:Dg,radToDeg:Ng,isPowerOfTwo:Og,ceilPowerOfTwo:Ug,floorPowerOfTwo:xu,setQuaternionFromProperEuler:Fg,normalize:ip,denormalize:np},wu=class wu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wu.prototype.isVector2=!0;var Oe=wu,bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(f!==x||l!==u||h!==d||c!==m){let p=l*u+h*d+c*m+f*x;p<0&&(u=-u,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),S=Math.sin(_);g=Math.sin(g*_)/S,a=Math.sin(a*_)/S,l=l*g+u*a,h=h*g+d*a,c=c*g+m*a,f=f*g+x*a}else{l=l*g+u*a,h=h*g+d*a,c=c*g+m*a,f=f*g+x*a;let _=1/Math.sqrt(l*l+h*h+c*c+f*f);l*=_,h*=_,c*=_,f*=_}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+c*f+l*d-h*u,e[t+1]=l*m+c*u+h*f-a*d,e[t+2]=h*m+c*d+a*u-l*f,e[t+3]=c*m-a*f-l*u-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*c*f+h*d*m,this._y=h*d*f-u*c*m,this._z=h*c*m+u*d*f,this._w=h*c*f-u*d*m;break;case"YXZ":this._x=u*c*f+h*d*m,this._y=h*d*f-u*c*m,this._z=h*c*m-u*d*f,this._w=h*c*f+u*d*m;break;case"ZXY":this._x=u*c*f-h*d*m,this._y=h*d*f+u*c*m,this._z=h*c*m+u*d*f,this._w=h*c*f-u*d*m;break;case"ZYX":this._x=u*c*f-h*d*m,this._y=h*d*f+u*c*m,this._z=h*c*m-u*d*f,this._w=h*c*f+u*d*m;break;case"YZX":this._x=u*c*f+h*d*m,this._y=h*d*f+u*c*m,this._z=h*c*m-u*d*f,this._w=h*c*f-u*d*m;break;case"XZY":this._x=u*c*f-h*d*m,this._y=h*d*f-u*c*m,this._z=h*c*m+u*d*f,this._w=h*c*f+u*d*m;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],c=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+c)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tu=class Tu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*i),c=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*h+o*f-a*c,this.y=i+l*c+a*h-r*f,this.z=s+l*f+r*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tu.prototype.isVector3=!0;var B=Tu,dh=new B,Wd=new bn,Eu=class Eu{constructor(e,t,i,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h)}set(e,t,i,s,r,o,a,l,h){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],f=i[7],u=i[2],d=i[5],m=i[8],x=s[0],p=s[3],g=s[6],_=s[1],S=s[4],M=s[7],b=s[2],T=s[5],v=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*p+a*S+l*T,r[6]=o*g+a*M+l*v,r[1]=h*x+c*_+f*b,r[4]=h*p+c*S+f*T,r[7]=h*g+c*M+f*v,r[2]=u*x+d*_+m*b,r[5]=u*p+d*S+m*T,r[8]=u*g+d*M+m*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8];return t*o*c-t*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],f=c*o-a*h,u=a*l-c*r,d=h*r-o*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*h-c*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(c*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-h*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return Jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fh.makeScale(e,t)),this}rotate(e){return Jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return Jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eu.prototype.isMatrix3=!0;var at=Eu,fh=new at,Xd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){let n={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[no]:{primaries:e,whitePoint:i,transfer:io,toXYZ:Xd,fromXYZ:Yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Xd,fromXYZ:Yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var vt=kg();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=ro("canvas")),Ks.width=e.width,Ks.height=e.height;let s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ro("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bg=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ph(s[o].image)):r.push(ph(s[o]))}else r=ph(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var zg=0,mh=new B,wn=class n extends hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ci,s=ci,r=Sn,o=Di,a=ii,l=kn,h=n.DEFAULT_ANISOTROPY,c=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Gs(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=iu;wn.DEFAULT_ANISOTROPY=1;var Au=class Au{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,h=l[0],c=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(c-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(h+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(h+1)/2,M=(d+1)/2,b=(g+1)/2,T=(c+u)/4,v=(f+x)/4,y=(m+p)/4;return S>M&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=v/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=v/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(f-x)/_,this.z=(u-c)/_,this.w=Math.acos((h+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Au.prototype.isVector4=!0;var Gt=Au,$a=class extends hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends $a{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oo=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _l=class _l{constructor(e,t,i,s,r,o,a,l,h,c,f,u,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h,c,f,u,d,m,x,p)}set(e,t,i,s,r,o,a,l,h,c,f,u,d,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=h,g[6]=c,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _l().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*c,d=o*f,m=a*c,x=a*f;t[0]=l*c,t[4]=-l*f,t[8]=h,t[1]=d+m*h,t[5]=u-x*h,t[9]=-a*l,t[2]=x-u*h,t[6]=m+d*h,t[10]=o*l}else if(e.order==="YXZ"){let u=l*c,d=l*f,m=h*c,x=h*f;t[0]=u+x*a,t[4]=m*a-d,t[8]=o*h,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=d*a-m,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*c,d=l*f,m=h*c,x=h*f;t[0]=u-x*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*c,t[9]=x-u*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*c,d=o*f,m=a*c,x=a*f;t[0]=l*c,t[4]=m*h-d,t[8]=u*h+x,t[1]=l*f,t[5]=x*h+u,t[9]=d*h-m,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*h,m=a*l,x=a*h;t[0]=l*c,t[4]=x-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-h*c,t[6]=d*f+m,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*l,d=o*h,m=a*l,x=a*h;t[0]=l*c,t[4]=-f,t[8]=h*c,t[1]=u*f+x,t[5]=o*c,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*c,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Gg)}lookAt(e,t,i){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Wi.crossVectors(i,Nn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Wi.crossVectors(i,Nn)),Wi.normalize(),da.crossVectors(Nn,Wi),s[0]=Wi.x,s[4]=da.x,s[8]=Nn.x,s[1]=Wi.y,s[5]=da.y,s[9]=Nn.y,s[2]=Wi.z,s[6]=da.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],f=i[5],u=i[9],d=i[13],m=i[2],x=i[6],p=i[10],g=i[14],_=i[3],S=i[7],M=i[11],b=i[15],T=s[0],v=s[4],y=s[8],w=s[12],E=s[1],R=s[5],I=s[9],F=s[13],P=s[2],G=s[6],O=s[10],H=s[14],$=s[3],N=s[7],V=s[11],k=s[15];return r[0]=o*T+a*E+l*P+h*$,r[4]=o*v+a*R+l*G+h*N,r[8]=o*y+a*I+l*O+h*V,r[12]=o*w+a*F+l*H+h*k,r[1]=c*T+f*E+u*P+d*$,r[5]=c*v+f*R+u*G+d*N,r[9]=c*y+f*I+u*O+d*V,r[13]=c*w+f*F+u*H+d*k,r[2]=m*T+x*E+p*P+g*$,r[6]=m*v+x*R+p*G+g*N,r[10]=m*y+x*I+p*O+g*V,r[14]=m*w+x*F+p*H+g*k,r[3]=_*T+S*E+M*P+b*$,r[7]=_*v+S*R+M*G+b*N,r[11]=_*y+S*I+M*O+b*V,r[15]=_*w+S*F+M*H+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],c=e[2],f=e[6],u=e[10],d=e[14],m=e[3],x=e[7],p=e[11],g=e[15],_=l*d-h*u,S=a*d-h*f,M=a*u-l*f,b=o*d-h*c,T=o*u-l*c,v=o*f-a*c;return t*(x*_-p*S+g*M)-i*(m*_-p*b+g*T)+s*(m*S-x*b+g*v)-r*(m*M-x*T+p*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],h=e[6],c=e[10];return t*(o*c-a*h)-i*(r*c-a*l)+s*(r*h-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],f=e[9],u=e[10],d=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=t*a-i*o,S=t*l-s*o,M=t*h-r*o,b=i*l-s*a,T=i*h-r*a,v=s*h-r*l,y=c*x-f*m,w=c*p-u*m,E=c*g-d*m,R=f*p-u*x,I=f*g-d*x,F=u*g-d*p,P=_*F-S*I+M*R+b*E-T*w+v*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return e[0]=(a*F-l*I+h*R)*G,e[1]=(s*I-i*F-r*R)*G,e[2]=(x*v-p*T+g*b)*G,e[3]=(u*T-f*v-d*b)*G,e[4]=(l*E-o*F-h*w)*G,e[5]=(t*F-s*E+r*w)*G,e[6]=(p*M-m*v-g*S)*G,e[7]=(c*v-u*M+d*S)*G,e[8]=(o*I-a*E+h*y)*G,e[9]=(i*E-t*I-r*y)*G,e[10]=(m*T-x*M+g*_)*G,e[11]=(f*M-c*T-d*_)*G,e[12]=(a*w-o*R-l*y)*G,e[13]=(t*R-i*w+s*y)*G,e[14]=(x*S-m*b-p*_)*G,e[15]=(c*b-f*S+u*_)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,c=o+o,f=a+a,u=r*h,d=r*c,m=r*f,x=o*c,p=o*f,g=a*f,_=l*h,S=l*c,M=l*f,b=i.x,T=i.y,v=i.z;return s[0]=(1-(x+g))*b,s[1]=(d+M)*b,s[2]=(m-S)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(u+g))*T,s[6]=(p+_)*T,s[7]=0,s[8]=(m+S)*v,s[9]=(p-_)*v,s[10]=(1-(u+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=js.set(s[0],s[1],s[2]).length(),a=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let h=1/o,c=1/a,f=1/l;return Kn.elements[0]*=h,Kn.elements[1]*=h,Kn.elements[2]*=h,Kn.elements[4]*=c,Kn.elements[5]*=c,Kn.elements[6]*=c,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Gn,l=!1){let h=this.elements,c=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Gn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=f,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Gn,l=!1){let h=this.elements,c=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Gn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=f,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};_l.prototype.isMatrix4=!0;var pt=_l,js=new B,Kn=new pt,Hg=new B(0,0,0),Gg=new B(1,1,1),Wi=new B,da=new B,Nn=new B,qd=new pt,$d=new bn,Cn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vg=0,Zd=new B,Qs=new bn,wi=new pt,fa=new B,Vr=new B,Wg=new B,Xg=new bn,Jd=new B(1,0,0),Kd=new B(0,1,0),jd=new B(0,0,1),Qd={type:"added"},Yg={type:"removed"},er={type:"childadded",child:null},gh={type:"childremoved",child:null},mn=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Cn,i=new bn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new at}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Vr,fa,this.up):wi.lookAt(fa,Vr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(wi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),er.child=e,this.dispatchEvent(er),er.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let f=l[h];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),h=o(e.textures),c=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new B(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qg={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(h,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=c.position.distanceTo(f.position),d=.02,m=.005;h.inputState.pinching&&u>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=vt.workingColorSpace){if(e=gu(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xh(o,r,e+1/3),this.g=xh(o,r,e),this.b=xh(o,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let i=sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return vt.workingToColorSpace(pn.copy(this),e),Math.round(ut(pn.r*255,0,255))*65536+Math.round(ut(pn.g*255,0,255))*256+Math.round(ut(pn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let f=o-a;switch(h=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=on){vt.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(pa);let i=jr(Xi.h,pa.h,t),s=jr(Xi.s,pa.s,t),r=jr(Xi.l,pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new it;it.NAMES=sp;var Is=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new B,Ti=new B,vh=new B,Ei=new B,tr=new B,nr=new B,ef=new B,_h=new B,yh=new B,Mh=new B,Sh=new Gt,bh=new Gt,wh=new Gt,Zi=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Ti.subVectors(i,t),vh.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Ti),l=jn.dot(vh),h=Ti.dot(Ti),c=Ti.dot(vh),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(h*l-a*c)*u,m=(o*c-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sh.setScalar(0),bh.setScalar(0),wh.setScalar(0),Sh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sh,r.x),o.addScaledVector(bh,r.y),o.addScaledVector(wh,r.z),o}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Ti.subVectors(e,t),jn.cross(Ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,i),nr.subVectors(r,i),_h.subVectors(e,i);let l=tr.dot(_h),h=nr.dot(_h);if(l<=0&&h<=0)return t.copy(i);yh.subVectors(e,s);let c=tr.dot(yh),f=nr.dot(yh);if(c>=0&&f<=c)return t.copy(s);let u=l*f-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return o=l/(l-c),t.copy(i).addScaledVector(tr,o);Mh.subVectors(e,r);let d=tr.dot(Mh),m=nr.dot(Mh);if(m>=0&&d<=m)return t.copy(r);let x=d*h-l*m;if(x<=0&&h>=0&&m<=0)return a=h/(h-m),t.copy(i).addScaledVector(nr,a);let p=c*m-d*f;if(p<=0&&f-c>=0&&d-m>=0)return ef.subVectors(r,s),a=(f-c)/(f-c+(d-m)),t.copy(s).addScaledVector(ef,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),ga.subVectors(this.max,Wr),ir.subVectors(e.a,Wr),sr.subVectors(e.b,Wr),rr.subVectors(e.c,Wr),Yi.subVectors(sr,ir),qi.subVectors(rr,sr),Es.subVectors(ir,rr);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Es.z,Es.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Es.z,0,-Es.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Es.y,Es.x,0];return!Th(t,ir,sr,rr,ga)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,ir,sr,rr,ga))?!1:(xa.crossVectors(Yi,qi),t=[xa.x,xa.y,xa.z],Th(t,ir,sr,rr,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,ma=new ui,ir=new B,sr=new B,rr=new B,Yi=new B,qi=new B,Es=new B,Wr=new B,ga=new B,xa=new B,As=new B;function Th(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){As.fromArray(n,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),h=t.dot(As),c=i.dot(As);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Yt=new B,va=new Oe,$g=0,wt=class extends hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kf,this.updateRanges=[],this.gpuType=Xn,this.version=0,this._normalizationScale=e!==void 0?vu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):np(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ip(e,this.array)}};var lo=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var co=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Zg=new ui,Xr=new B,Eh=new B,Vn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Eh)),this.expandByPoint(Xr.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jg=0,Hn=new pt,Ah=new mn,or=new B,On=new ui,Yr=new ui,en=new B,Ft=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?co:lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(On.min,Yr.min),On.expandByPoint(en),en.addVectors(On.max,Yr.max),On.expandByPoint(en)):(On.expandByPoint(Yr.min),On.expandByPoint(Yr.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)en.fromBufferAttribute(a,h),l&&(or.fromBufferAttribute(e,h),en.add(or)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],h=new Uint8Array(i.count);for(let w=0;w<i.count;w++)a[w]=new B,l[w]=new B;let c=new B,f=new B,u=new B,d=new Oe,m=new Oe,x=new Oe,p=new B,g=new B;function _(w,E,R){h[w]=h[E]=h[R]=1,c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),f.sub(c),u.sub(c),m.sub(d),x.sub(d);let I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(I),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(I),a[w].add(p),a[E].add(p),a[R].add(p),l[w].add(g),l[E].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,E=S.length;w<E;++w){let R=S[w],I=R.start,F=R.count;for(let P=I,G=I+F;P<G;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new B,b=new B,T=new B,v=new B;function y(w){T.fromBufferAttribute(s,w),v.copy(T);let E=a[w];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(v,E);let I=b.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,I)}for(let w=0,E=i.count;w<E;++w)h[w]&&y(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,h=new B,c=new B,f=new B;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,p),a.add(c),l.add(c),h.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let h=a.array,c=a.itemSize,f=a.normalized,u=new h.constructor(l.length*c),d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*c;for(let g=0;g<c;g++)u[m++]=h[d++]}return new wt(u,c,f)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=e(l,i);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,f=h.length;c<f;c++){let u=h[c],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let f=0,u=h.length;f<u;f++){let d=h[f];c.push(d.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],f=r[h];for(let u=0,d=f.length;u<d;u++)c.push(f[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,c=o.length;h<c;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rh=new B,Kg=new B,jg=new at,ei=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rh.subVectors(i,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jg.getNormalMatrix(e),s=this.coplanarPoint(Rh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qg=0,Ls=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=wr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=$h,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ri=new B,Ch=new B,_a=new B,ya=new B,Ja=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ch.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(Ch);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=ya.dot(this.direction),l=-ya.dot(_a),h=ya.lengthSq(),c=Math.abs(1-o*o),f,u,d,m;if(c>0)if(f=o*l-a,u=o*a-l,m=r*c,f>=0)if(u>=-m)if(u<=m){let x=1/c;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+h}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+h;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+h;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+h):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+h):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+h);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ch).addScaledVector(_a,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,s=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,s=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,c=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,g=i.x-o.x,_=i.y-o.y,S=i.z-o.z,M=Math.abs(l),b=Math.abs(h),T=Math.abs(c),v,y,w,E,R,I,F,P,G,O,H,$;if(M>=b&&M>=T?(w=l,I=f,G=m,$=g,l>=0?(v=h,y=c,E=u,R=d,F=x,P=p,O=_,H=S):(v=c,y=h,E=d,R=u,F=p,P=x,O=S,H=_)):b>=T?(w=h,I=u,G=x,$=_,h>=0?(v=c,y=l,E=d,R=f,F=p,P=m,O=S,H=g):(v=l,y=c,E=f,R=d,F=m,P=p,O=g,H=S)):(w=c,I=d,G=p,$=S,c>=0?(v=l,y=h,E=f,R=u,F=m,P=x,O=g,H=_):(v=h,y=l,E=u,R=f,F=x,P=m,O=_,H=g)),w===0)return null;let N=v/w,V=y/w,k=1/w,ae=E-N*I,re=R-V*I,q=F-N*G,he=P-V*G,_e=O-N*$,Ge=H-V*$,j=_e*he-Ge*q,Re=ae*Ge-re*_e,$e=q*re-he*ae;if(s){if(j<0||Re<0||$e<0)return null}else if((j<0||Re<0||$e<0)&&(j>0||Re>0||$e>0))return null;let Ne=j+Re+$e;if(Ne===0)return null;let Je=k*(j*I+Re*G+$e*$);return(Ne>0?Je<0:Je>0)?null:this.at(Je/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ii=class extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tf=new pt,Rs=new Ja,Ma=new Vn,nf=new B,Sa=new B,ba=new B,wa=new B,Ph=new B,Ta=new B,sf=new B,Ea=new B,mt=class extends mn{constructor(e=new Ft,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],f=r[l];c!==0&&(Ph.fromBufferAttribute(f,e),o?Ta.addScaledVector(Ph,c):Ta.addScaledVector(Ph.sub(t),c))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Ma.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ma,nf)===null||Rs.origin.distanceToSquared(nf)>(e.far-e.near)**2))&&(tf.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(tf),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,b=S;M<b;M+=3){let T=a.getX(M),v=a.getX(M+1),y=a.getX(M+2);s=Aa(this,g,e,i,h,c,f,T,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);s=Aa(this,o,e,i,h,c,f,_,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,b=S;M<b;M+=3){let T=M,v=M+1,y=M+2;s=Aa(this,g,e,i,h,c,f,T,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=p,S=p+1,M=p+2;s=Aa(this,o,e,i,h,c,f,_,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ex(n,e,t,i,s,r,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===es,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Ea);return h<t.near||h>t.far?null:{distance:h,point:Ea.clone(),object:n}}function Aa(n,e,t,i,s,r,o,a,l,h){n.getVertexPosition(a,Sa),n.getVertexPosition(l,ba),n.getVertexPosition(h,wa);let c=ex(n,e,t,i,Sa,ba,wa,sf);if(c){let f=new B;Zi.getBarycoord(sf,Sa,ba,wa,f),s&&(c.uv=Zi.getInterpolatedAttribute(s,a,l,h,f,new Oe)),r&&(c.uv1=Zi.getInterpolatedAttribute(r,a,l,h,f,new Oe)),o&&(c.normal=Zi.getInterpolatedAttribute(o,a,l,h,f,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new B,materialIndex:0};Zi.getNormal(Sa,ba,wa,u.normal),c.face=u,c.barycoord=f}return c}var ho=class extends wn{constructor(e=null,t=1,i=1,s,r,o,a,l,h=tn,c=tn,f,u){super(null,o,a,l,h,c,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new pt,rf=new pt,Ra=[],of=new ui,tx=new pt,qr=new mt,$r=new Vn,Ds=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),of.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(of)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),$r.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),rf.multiplyMatrices(i,ar),qr.matrixWorld=rf,qr.raycast(e,Ra);for(let o=0,a=Ra.length;o<a;o++){let l=Ra[o];l.instanceId=r,l.object=this,t.push(l)}Ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(s*this.count),s,this.count,El,Xn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Vn,nx=new Oe(.5,.5),Ca=new B,Ns=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],f=r[5],u=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],S=r[13],M=r[14],b=r[15];if(s[0].setComponents(h-o,d-c,g-m,b-_).normalize(),s[1].setComponents(h+o,d+c,g+m,b+_).normalize(),s[2].setComponents(h+a,d+f,g+x,b+S).normalize(),s[3].setComponents(h-a,d-f,g-x,b-S).normalize(),i)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(h-l,d-u,g-p,b-M).normalize();else if(s[4].setComponents(h-l,d-u,g-p,b-M).normalize(),t===Gn)s[5].setComponents(h+l,d+u,g+p,b+M).normalize();else if(t===so)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=nx.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ca.x=s.normal.x>0?e.max.x:e.min.x,Ca.y=s.normal.y>0?e.max.y:e.min.y,Ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},af=new pt,Ka=class n{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];af.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ns),i[s].setFromProjectionMatrix(af,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ns),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var uo=class extends wn{constructor(e=[],t=zs,i,s,r,o,a,l,h,c){super(e,t,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fo=class extends wn{constructor(e,t,i,s,r,o,a,l,h){super(e,t,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends wn{constructor(e,t,i=ti,s,r,o,a=tn,l=tn,h,c=Pi,f=1){if(c!==Pi&&c!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},po=class extends Li{constructor(e,t=ti,i=zs,s,r,o=tn,a=tn,l,h=Pi){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,s,r,o,a,l,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mo=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(f,2));function m(x,p,g,_,S,M,b,T,v,y,w){let E=M/v,R=b/y,I=M/2,F=b/2,P=T/2,G=v+1,O=y+1,H=0,$=0,N=new B;for(let V=0;V<O;V++){let k=V*R-F;for(let ae=0;ae<G;ae++){let re=ae*E-I;N[x]=re*_,N[p]=k*S,N[g]=P,h.push(N.x,N.y,N.z),N[x]=0,N[p]=0,N[g]=T>0?1:-1,c.push(N.x,N.y,N.z),f.push(ae/v),f.push(1-V/y),H+=1}}for(let V=0;V<y;V++)for(let k=0;k<v;k++){let ae=u+k+G*V,re=u+k+G*(V+1),q=u+(k+1)+G*(V+1),he=u+(k+1)+G*V;l.push(ae,re,he),l.push(re,q,he),$+=6}a.addGroup(d,$,w),d+=$,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var gn=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],f=[],u=[],d=[],m=0,x=[],p=i/2,g=0;_(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function _(){let M=new B,b=new B,T=0,v=(t-e)/i;for(let y=0;y<=r;y++){let w=[],E=y/r,R=E*(t-e)+e;for(let I=0;I<=s;I++){let F=I/s,P=F*l+a,G=Math.sin(P),O=Math.cos(P);b.x=R*G,b.y=-E*i+p,b.z=R*O,f.push(b.x,b.y,b.z),M.set(G,v,O).normalize(),u.push(M.x,M.y,M.z),d.push(F,1-E),w.push(m++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let E=x[w][y],R=x[w+1][y],I=x[w+1][y+1],F=x[w][y+1];(e>0||w!==0)&&(c.push(E,R,F),T+=3),(t>0||w!==r-1)&&(c.push(R,I,F),T+=3)}h.addGroup(g,T,0),g+=T}function S(M){let b=m,T=new Oe,v=new B,y=0,w=M===!0?e:t,E=M===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*E,0),u.push(0,E,0),d.push(.5,.5),m++;let R=m;for(let I=0;I<=s;I++){let P=I/s*l+a,G=Math.cos(P),O=Math.sin(P);v.x=w*O,v.y=p*E,v.z=w*G,f.push(v.x,v.y,v.z),u.push(0,E,0),T.x=G*.5+.5,T.y=O*.5*E+.5,d.push(T.x,T.y),m++}for(let I=0;I<s;I++){let F=b+I,P=R+I;M===!0?c.push(P,P+1,F):c.push(P+1,P,F),y+=3}h.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var go=class n extends Ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),h(i),c(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new B,M=new B,b=new B;for(let T=0;T<t.length;T+=3)d(t[T+0],S),d(t[T+1],M),d(t[T+2],b),l(S,M,b,_)}function l(_,S,M,b){let T=b+1,v=[];for(let y=0;y<=T;y++){v[y]=[];let w=_.clone().lerp(M,y/T),E=S.clone().lerp(M,y/T),R=T-y;for(let I=0;I<=R;I++)I===0&&y===T?v[y][I]=w:v[y][I]=w.clone().lerp(E,I/R)}for(let y=0;y<T;y++)for(let w=0;w<2*(T-y)-1;w++){let E=Math.floor(w/2);w%2===0?(u(v[y][E+1]),u(v[y+1][E]),u(v[y][E])):(u(v[y][E+1]),u(v[y+1][E+1]),u(v[y+1][E]))}}function h(_){let S=new B;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(_),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function c(){let _=new B;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let M=p(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}m(),f()}function f(){for(let _=0;_<o.length;_+=6){let S=o[_+0],M=o[_+2],b=o[_+4],T=Math.max(S,M,b),v=Math.min(S,M,b);T>.9&&v<.1&&(S<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function d(_,S){let M=_*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function m(){let _=new B,S=new B,M=new B,b=new B,T=new Oe,v=new Oe,y=new Oe;for(let w=0,E=0;w<r.length;w+=9,E+=6){_.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),T.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(_).add(S).add(M).divideScalar(3);let R=p(b);x(T,E+0,_,R),x(v,E+2,S,R),x(y,E+4,M,R)}}function x(_,S,M,b){b<0&&_.x===1&&(o[S]=_.x-1),M.x===0&&M.z===0&&(o[S]=b/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let c=i[s],u=i[s+1]-c,d=(o-c)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Oe:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new B,s=[],r=[],o=[],a=new B,l=new pt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),f<=h&&(h=f,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},vr=class extends Tn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=h-this.aY;l=u*c-d*f+this.aX,h=u*f+d*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ja=class extends vr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _u(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,f){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;u*=c,d*=c,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var lf=new B,cf=new B,Ih=new _u,Lh=new _u,Dh=new _u,Qa=class extends Tn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(cf.subVectors(s[0],s[1]).add(s[0]),h=cf);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(lf.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=lf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(c),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Ih.initNonuniformCatmullRom(h.x,f.x,u.x,c.x,m,x,p),Lh.initNonuniformCatmullRom(h.y,f.y,u.y,c.y,m,x,p),Dh.initNonuniformCatmullRom(h.z,f.z,u.z,c.z,m,x,p)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(h.x,f.x,u.x,c.x,this.tension),Lh.initCatmullRom(h.y,f.y,u.y,c.y,this.tension),Dh.initCatmullRom(h.z,f.z,u.z,c.z,this.tension));return i.set(Ih.calc(l),Lh.calc(l),Dh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ix(n,e){let t=1-n;return t*t*e}function sx(n,e){return 2*(1-n)*n*e}function rx(n,e){return n*n*e}function Qr(n,e,t,i){return ix(n,e)+sx(n,t)+rx(n,i)}function ox(n,e){let t=1-n;return t*t*t*e}function ax(n,e){let t=1-n;return 3*t*t*n*e}function lx(n,e){return 3*(1-n)*n*n*e}function cx(n,e){return n*n*n*e}function eo(n,e,t,i,s){return ox(n,e)+ax(n,t)+lx(n,i)+cx(n,s)}var xo=class extends Tn{constructor(e=new Oe,t=new Oe,i=new Oe,s=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(eo(e,s.x,r.x,o.x,a.x),eo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends Tn{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(eo(e,s.x,r.x,o.x,a.x),eo(e,s.y,r.y,o.y,a.y),eo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends Tn{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends Tn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Tn{constructor(e=new Oe,t=new Oe,i=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Qr(e,s.x,r.x,o.x),Qr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Tn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Qr(e,s.x,r.x,o.x),Qr(e,s.y,r.y,o.y),Qr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(hf(a,l.x,h.x,c.x,f.x),hf(a,l.y,h.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:Qa,CubicBezierCurve:xo,CubicBezierCurve3:el,EllipseCurve:vr,LineCurve:vo,LineCurve3:tl,QuadraticBezierCurve:_o,QuadraticBezierCurve3:yo,SplineCurve:Mo}),il=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new nl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Os=class extends il{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vo(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new _o(this.currentPoint.clone(),new Oe(e,t),new Oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new xo(this.currentPoint.clone(),new Oe(e,t),new Oe(i,s),new Oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Mo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let h=new vr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_r=class extends Os{constructor(e){super(e),this.uuid=Gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Os().fromJSON(s))}return this}};function hx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=rp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(i&&(r=mx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let c=a,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<a&&(a=d),m<l&&(l=m),d>c&&(c=d),m>f&&(f=m)}h=Math.max(c-a,f-l),h=h!==0?32767/h:0}return So(r,o,t,a,l,h,0),o}function rp(n,e,t,i,s){let r;if(s===Ex(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=uf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=uf(o/i|0,n[o],n[o+1],r);return r&&yr(r,r.next)&&(wo(r),r=r.next),r}function Us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yr(t,t.next)||Ht(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function So(n,e,t,i,s,r,o){if(!n)return;!o&&r&&yx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,h=n.next;if(r?dx(n,i,s,r):ux(n)){e.push(l.i,n.i,h.i),wo(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=fx(Us(n),e),So(n,e,t,i,s,r,2)):o===2&&px(n,e,t,i,s,r):So(Us(n),e,t,i,s,r,1);break}}}function ux(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,h=i.y,c=Math.min(s,r,o),f=Math.min(a,l,h),u=Math.max(s,r,o),d=Math.max(a,l,h),m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=u&&m.y>=f&&m.y<=d&&Zr(s,a,r,l,o,h,m.x,m.y)&&Ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,c=s.y,f=r.y,u=o.y,d=Math.min(a,l,h),m=Math.min(c,f,u),x=Math.max(a,l,h),p=Math.max(c,f,u),g=kh(d,m,e,t,i),_=kh(x,p,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=_;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Zr(a,c,l,f,h,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Zr(a,c,l,f,h,u,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Zr(a,c,l,f,h,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Zr(a,c,l,f,h,u,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!yr(i,s)&&ap(i,t,t.next,s)&&bo(i,s)&&bo(s,i)&&(e.push(i.i,t.i,s.i),wo(t),wo(t.next),t=n=s),t=t.next}while(t!==n);return Us(t)}function px(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bx(o,a)){let l=lp(o,a);o=Us(o,o.next),l=Us(l,l.next),So(o,e,t,i,s,r,0),So(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function mx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,h=rp(n,a,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Sx(h))}s.sort(gx);for(let r=0;r<s.length;r++)t=xx(s[r],t);return t}function gx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function xx(n,e){let t=vx(n,e);if(!t)return e;let i=lp(t,n);return Us(i,i.next),Us(t,t.next)}function vx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(yr(n,t))return t;do{if(yr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,h=o.y,c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&op(s<h?i:r,s,l,h,s<h?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);bo(t,n)&&(f<c||f===c&&(t.x>o.x||t.x===o.x&&_x(o,t)))&&(o=t,c=f)}t=t.next}while(t!==a);return o}function _x(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function yx(n,e,t,i){let s=n;do s.z===0&&(s.z=kh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Mx(s)}function Mx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let h=0;h<t&&(a++,o=o.nextZ,!!o);h++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function kh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Sx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function op(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Zr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&op(n,e,t,i,s,r,o,a)}function bx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!wx(n,e)&&(bo(n,e)&&bo(e,n)&&Tx(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||yr(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yr(n,e){return n.x===e.x&&n.y===e.y}function ap(n,e,t,i){let s=Ia(Ht(n,e,t)),r=Ia(Ht(n,e,i)),o=Ia(Ht(t,i,n)),a=Ia(Ht(t,i,e));return!!(s!==r&&o!==a||s===0&&Pa(n,t,e)||r===0&&Pa(n,i,e)||o===0&&Pa(t,n,i)||a===0&&Pa(t,e,i))}function Pa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ia(n){return n>0?1:n<0?-1:0}function wx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ap(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function bo(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function Tx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function lp(n,e){let t=Bh(n.i,n.x,n.y),i=Bh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function uf(n,e,t,i){let s=Bh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ex(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var zh=class{static triangulate(e,t,i=2){return hx(e,t,i)}},Ps=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];df(e),ff(i,e);let o=e.length;t.forEach(df);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ff(i,t[l]);let a=zh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function df(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ff(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var To=class n extends Ft{constructor(e=new _r([new Oe(.5,.5),new Oe(-.5,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let h=e[a];o(h)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ax,S,M=!1,b,T,v,y;if(g){S=g.getSpacedPoints(c),M=!0,u=!1;let le=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(c,le),T=new B,v=new B,y=new B}u||(p=0,d=0,m=0,x=0);let w=a.extractPoints(h),E=w.shape,R=w.holes;if(!Ps.isClockWise(E)){E=E.reverse();for(let le=0,Me=R.length;le<Me;le++){let Te=R[le];Ps.isClockWise(Te)&&(R[le]=Te.reverse())}}function F(le){let Te=10000000000000001e-36,ge=le[0];for(let de=1;de<=le.length;de++){let Be=de%le.length,Ue=le[Be],Ye=Ue.x-ge.x,Ve=Ue.y-ge.y,tt=Ye*Ye+Ve*Ve,z=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ge.x),Math.abs(ge.y)),pe=Te*z*z;if(tt<=pe){le.splice(Be,1),de--;continue}ge=Ue}}F(E),R.forEach(F);let P=R.length,G=E;for(let le=0;le<P;le++){let Me=R[le];E=E.concat(Me)}function O(le,Me,Te){return Me||ot("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(Me,Te)}let H=E.length;function $(le,Me,Te){let ge,de,Be,Ue=le.x-Me.x,Ye=le.y-Me.y,Ve=Te.x-le.x,tt=Te.y-le.y,z=Ue*Ue+Ye*Ye,pe=Ue*tt-Ye*Ve;if(Math.abs(pe)>Number.EPSILON){let Ce=Math.sqrt(z),qe=Math.sqrt(Ve*Ve+tt*tt),te=Me.x-Ye/Ce,nt=Me.y+Ue/Ce,ze=Te.x-tt/qe,Pe=Te.y+Ve/qe,L=((ze-te)*tt-(Pe-nt)*Ve)/(Ue*tt-Ye*Ve);ge=te+Ue*L-le.x,de=nt+Ye*L-le.y;let A=ge*ge+de*de;if(A<=2)return new Oe(ge,de);Be=Math.sqrt(A/2)}else{let Ce=!1;Ue>Number.EPSILON?Ve>Number.EPSILON&&(Ce=!0):Ue<-Number.EPSILON?Ve<-Number.EPSILON&&(Ce=!0):Math.sign(Ye)===Math.sign(tt)&&(Ce=!0),Ce?(ge=-Ye,de=Ue,Be=Math.sqrt(z)):(ge=Ue,de=Ye,Be=Math.sqrt(z/2))}return new Oe(ge/Be,de/Be)}let N=[];for(let le=0,Me=G.length,Te=Me-1,ge=le+1;le<Me;le++,Te++,ge++)Te===Me&&(Te=0),ge===Me&&(ge=0),N[le]=$(G[le],G[Te],G[ge]);let V=[],k,ae=N.concat();for(let le=0,Me=P;le<Me;le++){let Te=R[le];k=[];for(let ge=0,de=Te.length,Be=de-1,Ue=ge+1;ge<de;ge++,Be++,Ue++)Be===de&&(Be=0),Ue===de&&(Ue=0),k[ge]=$(Te[ge],Te[Be],Te[Ue]);V.push(k),ae=ae.concat(k)}let re;if(p===0)re=Ps.triangulateShape(G,R);else{let le=[],Me=[];for(let Te=0;Te<p;Te++){let ge=Te/p,de=d*Math.cos(ge*Math.PI/2),Be=m*Math.sin(ge*Math.PI/2)+x;for(let Ue=0,Ye=G.length;Ue<Ye;Ue++){let Ve=O(G[Ue],N[Ue],Be);Re(Ve.x,Ve.y,-de),ge===0&&le.push(Ve)}for(let Ue=0,Ye=P;Ue<Ye;Ue++){let Ve=R[Ue];k=V[Ue];let tt=[];for(let z=0,pe=Ve.length;z<pe;z++){let Ce=O(Ve[z],k[z],Be);Re(Ce.x,Ce.y,-de),ge===0&&tt.push(Ce)}ge===0&&Me.push(tt)}}re=Ps.triangulateShape(le,Me)}let q=re.length,he=m+x;for(let le=0;le<H;le++){let Me=u?O(E[le],ae[le],he):E[le];M?(v.copy(b.normals[0]).multiplyScalar(Me.x),T.copy(b.binormals[0]).multiplyScalar(Me.y),y.copy(S[0]).add(v).add(T),Re(y.x,y.y,y.z)):Re(Me.x,Me.y,0)}for(let le=1;le<=c;le++)for(let Me=0;Me<H;Me++){let Te=u?O(E[Me],ae[Me],he):E[Me];M?(v.copy(b.normals[le]).multiplyScalar(Te.x),T.copy(b.binormals[le]).multiplyScalar(Te.y),y.copy(S[le]).add(v).add(T),Re(y.x,y.y,y.z)):Re(Te.x,Te.y,f/c*le)}for(let le=p-1;le>=0;le--){let Me=le/p,Te=d*Math.cos(Me*Math.PI/2),ge=m*Math.sin(Me*Math.PI/2)+x;for(let de=0,Be=G.length;de<Be;de++){let Ue=O(G[de],N[de],ge);Re(Ue.x,Ue.y,f+Te)}for(let de=0,Be=R.length;de<Be;de++){let Ue=R[de];k=V[de];for(let Ye=0,Ve=Ue.length;Ye<Ve;Ye++){let tt=O(Ue[Ye],k[Ye],ge);M?Re(tt.x,tt.y+S[c-1].y,S[c-1].x+Te):Re(tt.x,tt.y,f+Te)}}}_e(),Ge();function _e(){let le=s.length/3;if(u){let Me=0,Te=H*Me;for(let ge=0;ge<q;ge++){let de=re[ge];$e(de[2]+Te,de[1]+Te,de[0]+Te)}Me=c+p*2,Te=H*Me;for(let ge=0;ge<q;ge++){let de=re[ge];$e(de[0]+Te,de[1]+Te,de[2]+Te)}}else{for(let Me=0;Me<q;Me++){let Te=re[Me];$e(Te[2],Te[1],Te[0])}for(let Me=0;Me<q;Me++){let Te=re[Me];$e(Te[0]+H*c,Te[1]+H*c,Te[2]+H*c)}}i.addGroup(le,s.length/3-le,0)}function Ge(){let le=s.length/3,Me=0;j(G,Me),Me+=G.length;for(let Te=0,ge=R.length;Te<ge;Te++){let de=R[Te];j(de,Me),Me+=de.length}i.addGroup(le,s.length/3-le,1)}function j(le,Me){let Te=le.length;for(;--Te>=0;){let ge=Te,de=Te-1;de<0&&(de=le.length-1);for(let Be=0,Ue=c+p*2;Be<Ue;Be++){let Ye=H*Be,Ve=H*(Be+1),tt=Me+ge+Ye,z=Me+de+Ye,pe=Me+de+Ve,Ce=Me+ge+Ve;Ne(tt,z,pe,Ce)}}}function Re(le,Me,Te){l.push(le),l.push(Me),l.push(Te)}function $e(le,Me,Te){Je(le),Je(Me),Je(Te);let ge=s.length/3,de=_.generateTopUV(i,s,ge-3,ge-2,ge-1);De(de[0]),De(de[1]),De(de[2])}function Ne(le,Me,Te,ge){Je(le),Je(Me),Je(ge),Je(Me),Je(Te),Je(ge);let de=s.length/3,Be=_.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);De(Be[0]),De(Be[1]),De(Be[3]),De(Be[1]),De(Be[2]),De(Be[3])}function Je(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function De(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Rx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nl[s.type]().fromJSON(s)),new n(i,e.options)}},Ax={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],h=e[s*3],c=e[s*3+1];return[new Oe(r,o),new Oe(a,l),new Oe(h,c)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],h=e[i*3],c=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new Oe(o,1-l),new Oe(h,1-f),new Oe(u,1-m),new Oe(x,1-g)]:[new Oe(a,1-l),new Oe(c,1-f),new Oe(d,1-m),new Oe(p,1-g)]}};function Rx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Eo=class n extends go{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ao=class n extends Ft{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/t,f=new B,u=new Oe,d=new B,m=new B,x=new B,p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=t;_++){let S=i+_*c*s,M=Math.sin(S),b=Math.cos(S);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*M,f.y=e[T].y,f.z=e[T].x*b,o.push(f.x,f.y,f.z),u.x=_/t,u.y=T/(e.length-1),a.push(u.x,u.y);let v=l[3*T+0]*M,y=l[3*T+1],w=l[3*T+0]*b;h.push(v,y,w)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let M=S+_*e.length,b=M,T=M+e.length,v=M+e.length+1,y=M+1;r.push(b,T,y),r.push(v,y,T)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Mr=class n extends go{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ji=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,f=e/a,u=t/l,d=[],m=[],x=[],p=[];for(let g=0;g<c;g++){let _=g*u-o;for(let S=0;S<h;S++){let M=S*f-r;m.push(M,-_,0),x.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let S=_+h*g,M=_+h*(g+1),b=_+1+h*(g+1),T=_+1+h*g;d.push(S,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var xn=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],f=new B,u=new B,d=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let _=[],S=g/i,M=o+S*a,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let w=y/t,E=s+w*r;f.x=-T*Math.cos(E),f.y=b,f.z=T*Math.sin(E),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(w+v,1-S),_.push(h++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let S=c[g][_+1],M=c[g][_],b=c[g+1][_],T=c[g+1][_+1];(g!==0||o>0)&&d.push(S,M,T),(g!==i-1||l<Math.PI)&&d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fs=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],c=[],f=[],u=new B,d=new B,m=new B;for(let x=0;x<=i;x++){let p=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),h.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),m.subVectors(d,u).normalize(),c.push(m.x,m.y,m.z),f.push(g/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,S=(s+1)*(x-1)+p,M=(s+1)*x+p;l.push(g,_,M),l.push(_,S,M)}this.setIndex(l),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ro=class n extends Ft{constructor(e=new yo(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,h=new Oe,c=new B,f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function x(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),_(),g()}function p(S){c=e.getPointAt(S/t,c);let M=o.normals[S],b=o.binormals[S];for(let T=0;T<=s;T++){let v=T/s*Math.PI*2,y=Math.sin(v),w=-Math.cos(v);l.x=w*M.x+y*b.x,l.y=w*M.y+y*b.y,l.z=w*M.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let b=(s+1)*(S-1)+(M-1),T=(s+1)*S+(M-1),v=(s+1)*S+M,y=(s+1)*(S-1)+M;m.push(b,T,y),m.push(T,v,y)}}function _(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)h.x=S/t,h.y=M/s,d.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new nl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(pf(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(pf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function _n(n){let e={};for(let t=0;t<n.length;t++){let i=Vs(n[t]);for(let s in i)e[s]=i[s]}return e}function pf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var cp={clone:Vs,merge:_n},Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sl=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var rl=class extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function La(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends Ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=e,a=2*t-i;break;case Fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:o=e,l=2*i-t;break;case Fh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,S=(-1-d)*p+(1.5+d)*x+.5*m,M=d*p-d*x;for(let b=0;b!==a;++b)r[b]=g*o[c+b]+_*o[h+b]+S*o[l+b]+M*o[f+b];return r}},ll=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=(i-t)/(s-t),f=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*f+o[l+u]*c;return r}},cl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hl=class extends Ki{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=this.inTangents,f=this.outTangents;if(!c||!f){let m=(i-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[h+p]*x+o[l+p]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[h+m],p=o[l+m],g=d*u+m*2,_=f[g],S=f[g+1],M=e*u+m*2,b=c[M],T=c[M+1],v=Dx(i,t,_,b,s);r[m]=hp(v,x,S,T,p)}return r}};function hp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Lx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Dx(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=hp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Lx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),La(e.settings)&&(i.settings={inTangents:lr(e.settings.inTangents,Array),outTangents:lr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break;case Nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return rt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;La(this.settings)&&(mf(this.settings.inTangents,e),mf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;La(this.settings)&&(gf(this.settings.inTangents,e),gf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ot("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Sg(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){ot("KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=e[a],c=e[a+1];if(h!==c&&(a!==1||h!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let x=t[f+m];if(x!==t[u+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,La(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function gf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ya;var ji=class extends Fn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=to;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};ul.prototype.ValueTypeName="color";var dl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="number";var fl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),h=e*a;for(let c=h+a;h!==c;h+=4)bn.slerpFlat(r,0,o,h-a,o,h,l);return r}},Co=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Fn{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=to;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};pl.prototype.ValueTypeName="vector";var ml=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return h.push(c,f),this},this.removeHandler=function(c){let f=h.indexOf(c);return f!==-1&&h.splice(f,2),this},this.getHandler=function(c){for(let f=0,u=h.length;f<u;f+=2){let d=h[f],m=h[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},up=new ml,gl=class{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=new B,Na=new bn,li=new B,Po=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Da,Na,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Da,Na,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new B,xf=new Oe,vf=new Oe,an=class extends Po{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,xf,vf),t.subVectors(vf,xf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xl=class extends Po{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var cr=-90,hr=1,Sr=class extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(cr,hr,e,t);s.layers=this.layers,this.add(s);let r=new an(cr,hr,e,t);r.layers=this.layers,this.add(r);let o=new an(cr,hr,e,t);o.layers=this.layers,this.add(o);let a=new an(cr,hr,e,t);a.layers=this.layers,this.add(a);let l=new an(cr,hr,e,t);l.layers=this.layers,this.add(l);let h=new an(cr,hr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let h of t)this.remove(h);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},vl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Mu="\\[\\]\\.:\\/",Nx=new RegExp("["+Mu+"]","g"),Su="[^"+Mu+"]",Ox="[^"+Mu.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Su),Fx=/(WCOD+)?/.source.replace("WCOD",Ox),kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),zx=new RegExp("^"+Ux+Fx+kx+Bx+"$"),Hx=["material","materials","bones","map"],Hh=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(e){let t=zx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Hh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vw=new Float32Array(1);var Ru=class Ru{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Ru.prototype.isMatrix2=!0;var Gh=Ru;function bu(n,e,t,i){let s=Gx(i);switch(t){case lu:return n*e;case El:return n*e/s.components*s.byteLength;case Al:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case Rl:return n*e*2/s.components*s.byteLength;case cu:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case Cl:return n*e*4/s.components*s.byteLength;case Do:case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Pl:case Ll:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Ol:case Fl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fo:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ko:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gx(n){switch(n){case kn:case su:return{byteLength:1,components:1};case Er:case ru:case ni:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case ti:case bl:case Xn:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Zx(n){let e=new WeakMap;function t(a,l){let h=a.array,c=a.usage,f=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),a.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,h){let c=l.array,f=l.updateRanges;if(n.bindBuffer(h,a),f.length===0)n.bufferSubData(h,0,c);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];n.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kx=`#ifdef USE_ALPHAHASH
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
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
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
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cv=`#ifdef USE_IRIDESCENCE
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
#endif`,hv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_v=`#define PI 3.141592653589793
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
} // validated`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
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
}`,Fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
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
#endif`,qv=`uniform sampler2D dfgLUT;
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
}`,$v=`
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c_=`#if defined( USE_MORPHCOLORS )
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
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N_=`float getShadowMask() {
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform float backgroundBlurriness;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
}`,iy=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#define LAMBERT
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define MATCAP
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
}`,py=`#define MATCAP
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
}`,my=`#define NORMAL
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
}`,gy=`#define NORMAL
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
}`,xy=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,_y=`#define STANDARD
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
}`,yy=`#define STANDARD
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
}`,My=`#define TOON
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
}`,Sy=`#define TOON
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
}`,by=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ey=`uniform vec3 color;
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
}`,Ay=`uniform float rotation;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Jx,alphahash_pars_fragment:Kx,alphamap_fragment:jx,alphamap_pars_fragment:Qx,alphatest_fragment:ev,alphatest_pars_fragment:tv,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:sv,batching_vertex:rv,begin_vertex:ov,beginnormal_vertex:av,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:hv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:gv,color_pars_vertex:xv,color_vertex:vv,common:_v,defaultnormal_vertex:yv,displacementmap_pars_vertex:Mv,displacementmap_vertex:Sv,emissivemap_fragment:bv,emissivemap_pars_fragment:wv,colorspace_fragment:Tv,colorspace_pars_fragment:Ev,envmap_fragment:Av,envmap_common_pars_fragment:Rv,envmap_pars_fragment:Cv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Hv,envmap_vertex:Iv,fog_vertex:Lv,fog_pars_vertex:Dv,fog_fragment:Nv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Uv,lightmap_pars_fragment:Fv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:Bv,lights_pars_begin:zv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:Yv,lights_physical_pars_fragment:qv,lights_fragment_begin:$v,lights_fragment_maps:Zv,lights_fragment_end:Jv,lightprobes_pars_fragment:Kv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:e_,logdepthbuf_vertex:t_,map_fragment:n_,map_pars_fragment:i_,map_particle_fragment:s_,map_particle_pars_fragment:r_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:a_,morphinstance_vertex:l_,morphcolor_vertex:c_,morphnormal_vertex:h_,morphtarget_pars_vertex:u_,morphtarget_vertex:d_,normal_fragment_begin:f_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:x_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:y_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:S_,opaque_fragment:b_,packing:w_,premultiplied_alpha_fragment:T_,project_vertex:E_,dithering_fragment:A_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:L_,shadowmap_vertex:D_,shadowmask_pars_fragment:N_,skinbase_vertex:O_,skinning_pars_vertex:U_,skinning_vertex:F_,skinnormal_vertex:k_,specularmap_fragment:B_,specularmap_pars_fragment:z_,tonemapping_fragment:H_,tonemapping_pars_fragment:G_,transmission_fragment:V_,transmission_pars_fragment:W_,uv_pars_fragment:X_,uv_pars_vertex:Y_,uv_vertex:q_,worldpos_vertex:$_,background_vert:Z_,background_frag:J_,backgroundCube_vert:K_,backgroundCube_frag:j_,cube_vert:Q_,cube_frag:ey,depth_vert:ty,depth_frag:ny,distance_vert:iy,distance_frag:sy,equirect_vert:ry,equirect_frag:oy,linedashed_vert:ay,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:hy,meshlambert_vert:uy,meshlambert_frag:dy,meshmatcap_vert:fy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:xy,meshphong_frag:vy,meshphysical_vert:_y,meshphysical_frag:yy,meshtoon_vert:My,meshtoon_frag:Sy,points_vert:by,points_frag:wy,shadow_vert:Ty,shadow_frag:Ey,sprite_vert:Ay,sprite_frag:Ry},We={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},pi={basic:{uniforms:_n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:_n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:_n([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:_n([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:_n([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new it(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:_n([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:_n([We.points,We.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:_n([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:_n([We.common,We.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:_n([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:_n([We.sprite,We.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:_n([We.common,We.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:_n([We.lights,We.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};pi.physical={uniforms:_n([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var ac={r:0,b:0,g:0},Cy=new pt,Np=new at;Np.set(-1,0,0,0,1,0,0,0,1);function Py(n,e,t,i,s,r){let o=new it(0),a=s===!0?0:1,l,h,c=null,f=0,u=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let M=_.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(_){let S=!1,M=d(_);M===null?p(o,a):M&&M.isColor&&(p(M,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,S){let M=d(S);M&&M.isCubeTexture?(h===void 0&&(h=new mt(new Pt(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Vs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Np),h.material.toneMapped=vt.getTransfer(M.colorSpace)!==bt,(c!==M||f!==M.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=M,f=M.version,u=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mt(new Ji(2,2),new vn({name:"BackgroundMaterial",uniforms:Vs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=vt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,S){_.getRGB(ac,yu(n)),t.buffers.color.setClear(ac.r,ac.g,ac.b,S,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:x,dispose:g}}function Iy(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(R,I,F,P,G){let O=!1,H=f(R,P,F,I);r!==H&&(r=H,h(r.object)),O=d(R,P,F,G),O&&m(R,P,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(R,I,F,P),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function c(R){return n.deleteVertexArray(R)}function f(R,I,F,P){let G=P.wireframe===!0,O=i[I.id];O===void 0&&(O={},i[I.id]=O);let H=R.isInstancedMesh===!0?R.id:0,$=O[H];$===void 0&&($={},O[H]=$);let N=$[F.id];N===void 0&&(N={},$[F.id]=N);let V=N[G];return V===void 0&&(V=u(l()),N[G]=V),V}function u(R){let I=[],F=[],P=[];for(let G=0;G<t;G++)I[G]=0,F[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:P,object:R,attributes:{},index:null}}function d(R,I,F,P){let G=r.attributes,O=I.attributes,H=0,$=F.getAttributes();for(let N in $)if($[N].location>=0){let k=G[N],ae=O[N];if(ae===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),k===void 0||k.attribute!==ae||ae&&k.data!==ae.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function m(R,I,F,P){let G={},O=I.attributes,H=0,$=F.getAttributes();for(let N in $)if($[N].location>=0){let k=O[N];k===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let ae={};ae.attribute=k,k&&k.data&&(ae.data=k.data),G[N]=ae,H++}r.attributes=G,r.attributesNum=H,r.index=P}function x(){let R=r.newAttributes;for(let I=0,F=R.length;I<F;I++)R[I]=0}function p(R){g(R,0)}function g(R,I){let F=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;F[R]=1,P[R]===0&&(n.enableVertexAttribArray(R),P[R]=1),G[R]!==I&&(n.vertexAttribDivisor(R,I),G[R]=I)}function _(){let R=r.newAttributes,I=r.enabledAttributes;for(let F=0,P=I.length;F<P;F++)I[F]!==R[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function S(R,I,F,P,G,O,H){H===!0?n.vertexAttribIPointer(R,I,F,G,O):n.vertexAttribPointer(R,I,F,P,G,O)}function M(R,I,F,P){x();let G=P.attributes,O=F.getAttributes(),H=I.defaultAttributeValues;for(let $ in O){let N=O[$];if(N.location>=0){let V=G[$];if(V===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),V!==void 0){let k=V.normalized,ae=V.itemSize,re=e.get(V);if(re===void 0)continue;let q=re.buffer,he=re.type,_e=re.bytesPerElement,Ge=he===n.INT||he===n.UNSIGNED_INT||V.gpuType===bl;if(V.isInterleavedBufferAttribute){let j=V.data,Re=j.isInterleavedBuffer===!0?j.stride:j.itemSize,$e=V.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let Ne=0;Ne<N.locationSize;Ne++)g(N.location+Ne,j.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ne=0;Ne<N.locationSize;Ne++)p(N.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Ne=0;Ne<N.locationSize;Ne++)S(N.location+Ne,ae/N.locationSize,he,k,Re*_e,($e+ae/N.locationSize*Ne)*_e,Ge)}else{if(V.isInstancedBufferAttribute){for(let j=0;j<N.locationSize;j++)g(N.location+j,V.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let j=0;j<N.locationSize;j++)p(N.location+j);n.bindBuffer(n.ARRAY_BUFFER,q);for(let j=0;j<N.locationSize;j++)S(N.location+j,ae/N.locationSize,he,k,ae*_e,ae/N.locationSize*j*_e,Ge)}}else if(H!==void 0){let k=H[$];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(N.location,k);break;case 3:n.vertexAttrib3fv(N.location,k);break;case 4:n.vertexAttrib4fv(N.location,k);break;default:n.vertexAttrib1fv(N.location,k)}}}}_()}function b(){w();for(let R in i){let I=i[R];for(let F in I){let P=I[F];for(let G in P){let O=P[G];for(let H in O)c(O[H].object),delete O[H];delete P[G]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let I=i[R.id];for(let F in I){let P=I[F];for(let G in P){let O=P[G];for(let H in O)c(O[H].object),delete O[H];delete P[G]}}delete i[R.id]}function v(R){for(let I in i){let F=i[I];for(let P in F){let G=F[P];if(G[R.id]===void 0)continue;let O=G[R.id];for(let H in O)c(O[H].object),delete O[H];delete G[R.id]}}}function y(R){for(let I in i){let F=i[I],P=R.isInstancedMesh===!0?R.id:0,G=F[P];if(G!==void 0){for(let O in G){let H=G[O];for(let $ in H)c(H[$].object),delete H[$];delete G[O]}delete F[P],Object.keys(F).length===0&&delete i[I]}}}function w(){E(),o=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Ly(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),t.update(h,i,c))}function a(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let d=0;d<c;d++)u+=h[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Dy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==ii&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let y=v===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==kn&&v!==Xn&&!y&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",c=l(h);c!==h&&(rt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:T}}function Ny(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ei,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=c(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?c(null):h();else{let _=r?0:i,S=_*4,M=g.clippingState||null;l.value=M,M=c(m,u,S,d);for(let b=0;b!==S;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,u,d,m){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,M=d;S!==x;++S,M+=4)o.copy(f[S]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Ho=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:ks});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Sn),new Sr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},dp=256,Oy=3,Uy=20,Op=256,Up=16,Fy=3,ky=new B,By=new it,cc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sr(1,10,null),this._boxMesh=new mt(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=ky}=r,l=this._renderer;this._setSize(o);let h=this._allocateTarget(),c=this._getSourceTarget(!0);t>0&&(c.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(By));let p=new Sr(i,s,c);return p.position.copy(a),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(dp,xu(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===Tr?this._setSize(e.image.length===0?dp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=fp(e,!1,!1),i=Math.log2(e)-Oy;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=fp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===Tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zy(),this._integrationMaterial=Hy());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Up);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Fy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Op*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Gy());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function fp(n,e,t){return new Ho(n,{minFilter:Di,generateMipmaps:e,type:ni,colorSpace:no,depthBuffer:t})}function Go(n,e,t){return new vn({name:n,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:qt,blending:ks,depthTest:!1,depthWrite:!1})}function zy(){return Go("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Op}u

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
	`)}function Hy(){return Go("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Up}},`

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
	`)}function Gy(){return Go("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Uy}
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
	`)}function pp(){return Go("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mp(){return Go("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vy(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===yl||d===Ml)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new Ho(m.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",h),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===yl||d===Ml,x=d===zs||d===Tr;if(m||x){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new cc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new cc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",c),p.texture):null}}}return u}function a(u,d){return d===yl?u.mapping=zs:d===Ml&&(u.mapping=Tr),u}function l(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Wy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Jr("WebGLRenderer: "+i+" extension not supported."),s}}}function Xy(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function h(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function c(m){let x=m.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function f(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?co:lo,M=new S(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let v=x.array;g=x.version;for(let y=0,w=0;y<_;y+=3){let E=v[y+0],R=v[y+1],I=v[y+2];b[w++]=E,b[w++]=R,b[w++]=R,b[w++]=I,b[w++]=I,b[w++]=E}}else{g=p.version;for(let v=0,y=0;v<_;v+=3){let w=v+0,E=v+1,R=v+2;b[y++]=w,b[y++]=E,b[y++]=E,b[y++]=R,b[y++]=R,b[y++]=w}}M.version=g;let T=r.get(m);T&&e.remove(T),r.set(m,M)}function u(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:h,update:c,getWireframeAttribute:u,dispose:d}}function Yy(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function h(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function c(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function qy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $y(n,e,t){let i=new WeakMap,s=new Gt;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==f){let w=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*b*4*f),v=new oo(T,M,b,f);v.type=Xn,v.needsUpdate=!0;let y=S*4;for(let E=0;E<f;E++){let R=p[E],I=g[E],F=_[E],P=M*b*4*E;for(let G=0;G<R.count;G++){let O=G*y;d===!0&&(s.fromBufferAttribute(R,G),T[P+O+0]=s.x,T[P+O+1]=s.y,T[P+O+2]=s.z,T[P+O+3]=0),m===!0&&(s.fromBufferAttribute(I,G),T[P+O+4]=s.x,T[P+O+5]=s.y,T[P+O+6]=s.z,T[P+O+7]=0),x===!0&&(s.fromBufferAttribute(F,G),T[P+O+8]=s.x,T[P+O+9]=s.y,T[P+O+10]=s.z,T[P+O+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:v,size:new Oe(M,b)},i.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<h.length;x++)d+=h[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Zy(n,e,t,i,s){let r=new WeakMap;function o(h){let c=s.render.frame,f=h.geometry,u=e.get(h,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}var Jy={[Jh]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[jh]:"CINEON_TONE_MAPPING",[Qh]:"ACES_FILMIC_TONE_MAPPING",[tu]:"AGX_TONE_MAPPING",[nu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function Ky(n,e,t,i,s,r){let o=new Un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=null,c=new Ft;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let f=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new mt(c,f),d=new xl(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,_=null,S=[],M=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let v=0;v<S.length;v++){let y=S[v];y.setSize&&y.setSize(b,T)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;let T=o.width,v=o.height;S.length>0&&a===null&&(a=new Un(T,v,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new Un(T,v,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&S.some(w=>w.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&h===null&&(h=new Li(T,v),r===!0&&(h.format=Ni,h.type=Hs)),o.dispose(),o.depthTexture=y?h:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let w=0;w<S.length;w++){let E=S[w];E.setSize&&E.setSize(T,v),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(h)}},this.begin=function(b,T){if(p||b.toneMapping===di&&S.length===0)return!1;if(_=T,T!==null){let v=T.width,y=T.height;(o.width!==v||o.height!==y)&&this.setSize(v,y)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=di,!0},this.hasRenderPass=function(){return M},this.end=function(b,T){b.toneMapping=g,p=!0;let v=o,y=a;for(let w=0;w<S.length;w++){let E=S[w];E.enabled!==!1&&(E.render(b,y,v,T),E.needsSwap!==!1&&(v=y,y=y===a?l:a))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,f.defines={},vt.getTransfer(m)===bt&&(f.defines.SRGB_TRANSFER="");let w=Jy[x];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(u,d),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Fp=new wn,kp=new Li(1,1),Bp=new po(1),zp=new oo,Hp=new Za,Gp=new uo,gp=[],xp=[],vp=new Float32Array(16),_p=new Float32Array(9),yp=new Float32Array(4);function Cr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=gp[s];if(r===void 0&&(r=new Float32Array(s),gp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uc(n,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function eM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function tM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function nM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;yp.set(i),n.uniformMatrix2fv(this.addr,!1,yp),Zt(t,i)}}function iM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;_p.set(i),n.uniformMatrix3fv(this.addr,!1,_p),Zt(t,i)}}function sM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;vp.set(i),n.uniformMatrix4fv(this.addr,!1,vp),Zt(t,i)}}function rM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function aM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function lM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function cM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function dc(n){return n.version===0&&(n.compareFunction=fu,n.needsUpdate=!0),n}function fM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=dc(kp):r=Fp,t.setTexture2D(e||r,s)}function pM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hp,s)}function mM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=dc(Bp):r=Gp,t.setTextureCube(e||r,s)}function gM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zp,s)}function xM(n){switch(n){case 5126:return jy;case 35664:return Qy;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(n,e){n.uniform1fv(this.addr,e)}function _M(n,e){let t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function yM(n,e){let t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function MM(n,e){let t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function SM(n,e){let t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bM(n,e){let t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wM(n,e){let t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TM(n,e){n.uniform1iv(this.addr,e)}function EM(n,e){n.uniform2iv(this.addr,e)}function AM(n,e){n.uniform3iv(this.addr,e)}function RM(n,e){n.uniform4iv(this.addr,e)}function CM(n,e){n.uniform1uiv(this.addr,e)}function PM(n,e){n.uniform2uiv(this.addr,e)}function IM(n,e){n.uniform3uiv(this.addr,e)}function LM(n,e){n.uniform4uiv(this.addr,e)}function DM(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=dc(kp):o=Fp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function NM(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hp,r[o])}function OM(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=dc(Bp):o=Gp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function UM(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function FM(n){switch(n){case 5126:return vM;case 35664:return _M;case 35665:return yM;case 35666:return MM;case 35674:return SM;case 35675:return bM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return EM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return UM}}var Iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xM(t.type)}},Lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}},Du=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function Mp(n,e){n.seq.push(e),n.map[e.id]=e}function kM(n,e,t){let i=n.name,s=i.length;for(Cu.lastIndex=0;;){let r=Cu.exec(i),o=Cu.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Mp(t,h===void 0?new Iu(a,n,e):new Lu(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Du(a),Mp(t,f)),t=f}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);kM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Sp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var BM=37297,zM=0;function HM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var bp=new at;function GM(n){vt._getMatrix(bp,vt.workingColorSpace,n);let e=`mat3( ${bp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case io:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+HM(n.getShaderSource(e),a)}else return r}function VM(n,e){let t=GM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var WM={[Jh]:"Linear",[Kh]:"Reinhard",[jh]:"Cineon",[Qh]:"ACESFilmic",[tu]:"AgX",[nu]:"Neutral",[eu]:"Custom"};function XM(n,e){let t=WM[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new B;function YM(){vt.getLuminanceCoefficients(lc);let n=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function $M(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zo(n){return n!==""}function Tp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ep(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(n){return n.replace(JM,KM)}function KM(n,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Nu(t)}var jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(n){return n.replace(jM,QM)}function QM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var e1={[Io]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function t1(n){return e1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n1={[Tr]:"ENVMAP_MODE_REFRACTION"};function i1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":n1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s1={[Zh]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function r1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":s1[n.combine]||"ENVMAP_BLENDING_NONE"}function o1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=t1(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=i1(t),f=r1(t),u=qM(t),d=$M(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(zo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(x=[Rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[Rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ht.tonemapping_pars_fragment:"",t.toneMapping!==di?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=Nu(o),o=Tp(o,t),o=Ep(o,t),a=Nu(a),a=Tp(a,t),a=Ep(a,t),o=Ap(o),a=Ap(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+x+o,S=g+p+a,M=Sp(s,s.VERTEX_SHADER,_),b=Sp(s,s.FRAGMENT_SHADER,S);s.attachShader(m,M),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(E){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(m)||"",I=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(b)||"",P=R.trim(),G=I.trim(),O=F.trim(),H=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,M,b);else{let N=wp(s,M,"vertex"),V=wp(s,b,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+N+`
`+V)}else P!==""?rt("WebGLProgram: Program Info Log:",P):(G===""||O==="")&&($=!1);$&&(E.diagnostics={runnable:H,programLog:P,vertexShader:{log:G,prefix:x},fragmentShader:{log:O,prefix:p}})}s.deleteShader(M),s.deleteShader(b),v=new Rr(s,m),y=ZM(s,m)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(m,BM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}var a1=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Uu(e),t.set(e,i)),i}},Uu=class{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}};function l1(n){return n===ts||n===Fo||n===ko}function c1(n,e,t,i,s,r){let o=new ao,a=new Ou,l=new Set,h=[],c=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,w,E,R,I){let F=E.fog,P=R.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=e.get(v.envMap||G,O),$=u[v.type],N=i.precision;v.precision!==null&&(N=i.getMaxPrecision(v.precision),N!==v.precision&&rt("WebGLProgram.getParameters:",v.precision,"not supported, using",N,"instead."));let V=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=V!==void 0?V.length:0,ae=0;P.morphAttributes.position!==void 0&&(ae=1),P.morphAttributes.normal!==void 0&&(ae=2),P.morphAttributes.color!==void 0&&(ae=3);let re,q,he,_e;if($){let Ae=pi[$];re=Ae.vertexShader,q=Ae.fragmentShader}else{re=v.vertexShader,q=v.fragmentShader;let Ae=a.getVertexShaderStage(v),Qe=a.getFragmentShaderStage(v);a.update(v,Ae,Qe),he=Ae.id,_e=Qe.id}let Ge=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),Re=R.isInstancedMesh===!0,$e=R.isBatchedMesh===!0,Ne=!!v.map,Je=!!v.matcap,De=!!H,le=De&&H.isPMREMTexture===!0,Me=!!v.aoMap,Te=!!v.lightMap,ge=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,Be=!!v.displacementMap,Ue=!!v.emissiveMap,Ye=!!v.metalnessMap,Ve=!!v.roughnessMap,tt=v.anisotropy>0,z=v.clearcoat>0,pe=v.diffuseRoughness>0,Ce=v.dispersion>0,qe=v.retroreflectivity>0,te=v.iridescence>0,nt=v.sheen>0,ze=v.transmission>0,Pe=tt&&!!v.anisotropyMap,L=z&&!!v.clearcoatMap,A=z&&!!v.clearcoatNormalMap,Y=z&&!!v.clearcoatRoughnessMap,xe=pe&&!!v.diffuseRoughnessMap,oe=te&&!!v.iridescenceMap,ve=te&&!!v.iridescenceThicknessMap,Se=nt&&!!v.sheenColorMap,ie=nt&&!!v.sheenRoughnessMap,se=!!v.specularMap,we=!!v.specularColorMap,U=!!v.specularIntensityMap,ne=ze&&!!v.transmissionMap,Q=ze&&!!v.thicknessMap,be=!!v.gradientMap,ye=!!v.alphaMap,fe=v.alphaTest>0,me=!!v.alphaHash,Fe=!!v.extensions,ue=di;v.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(ue=n.toneMapping);let Le=le?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ee={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:q,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:N,batching:$e,batchingColor:$e&&R._colorsTexture!==null,instancing:Re,instancingColor:Re&&R.instanceColor!==null,instancingMorph:Re&&R.morphTexture!==null,outputColorSpace:Ge===null?n.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ne,matcap:Je,envMap:De,envMapMode:De&&H.mapping,envMapPMREM:le,envMapMaxLod:le?Le.length-1:null,envMapSize:le?Le[0].width:null,aoMap:Me,lightMap:Te,bumpMap:ge,normalMap:de,displacementMap:Be,emissiveMap:Ue,normalMapObjectSpace:de&&v.normalMapType===Wf,normalMapTangentSpace:de&&v.normalMapType===hu,packedNormalMap:de&&v.normalMapType===hu&&l1(v.normalMap.format),metalnessMap:Ye,roughnessMap:Ve,anisotropy:tt,anisotropyMap:Pe,clearcoat:z,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:Y,diffuseRoughness:pe,diffuseRoughnessMap:xe,dispersion:Ce,retroreflection:qe,iridescence:te,iridescenceMap:oe,iridescenceThicknessMap:ve,sheen:nt,sheenColorMap:Se,sheenRoughnessMap:ie,specularMap:se,specularColorMap:we,specularIntensityMap:U,transmission:ze,transmissionMap:ne,thicknessMap:Q,gradientMap:be,opaque:v.transparent===!1&&v.blending===wr&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:fe,alphaHash:me,combine:v.combine,mapUv:Ne&&d(v.map.channel),aoMapUv:Me&&d(v.aoMap.channel),lightMapUv:Te&&d(v.lightMap.channel),bumpMapUv:ge&&d(v.bumpMap.channel),normalMapUv:de&&d(v.normalMap.channel),displacementMapUv:Be&&d(v.displacementMap.channel),emissiveMapUv:Ue&&d(v.emissiveMap.channel),metalnessMapUv:Ye&&d(v.metalnessMap.channel),roughnessMapUv:Ve&&d(v.roughnessMap.channel),anisotropyMapUv:Pe&&d(v.anisotropyMap.channel),clearcoatMapUv:L&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(v.sheenRoughnessMap.channel),specularMapUv:se&&d(v.specularMap.channel),specularColorMapUv:we&&d(v.specularColorMap.channel),specularIntensityMapUv:U&&d(v.specularIntensityMap.channel),transmissionMapUv:ne&&d(v.transmissionMap.channel),thicknessMapUv:Q&&d(v.thicknessMap.channel),alphaMapUv:ye&&d(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(de||tt),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Ne||ye),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:j,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ae,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ne&&v.map.isVideoTexture===!0&&vt.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:Ue&&v.emissiveMap.isVideoTexture===!0&&vt.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&v.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function x(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)y.push(w),y.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(p(y,v),g(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function p(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function g(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let y=u[v.type],w;if(y){let E=pi[y];w=cp.clone(E.uniforms)}else w=v.uniforms;return w}function S(v,y){let w=c.get(y);return w!==void 0?++w.usedTimes:(w=new o1(n,y,v,s),h.push(w),c.set(y,w)),w}function M(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:_,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:h,dispose:T}}function h1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function u1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Cp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,x,p,g){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},n[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=p,_.group=g),e++,_}function l(u,d,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);let S=a(u,d,m,x,p,g);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):t.push(S)}function h(u,d,m,x,p,g){let _=a(u,d,m,x,p,g);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||u1),i.length>1&&i.sort(d||Cp),s.length>1&&s.sort(d||Cp)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:f,sort:c}}function d1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Pp,n.set(i,[o])):s>=r.length?(o=new Pp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function f1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new it};break;case"SpotLight":t={position:new B,direction:new B,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function p1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var m1=0;function g1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x1(n){let e=new f1,t=p1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);let s=new B,r=new pt,o=new pt;function a(h){let c=0,f=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,_=0,S=0,M=0,b=0,T=0,v=0,y=0,w=0,E=0;h.sort(g1);for(let I=0,F=h.length;I<F;I++){let P=h[I],G=P.color,O=P.intensity,H=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ts?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=G.r*O,f+=G.g*O,u+=G.b*O;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],O);E++}else if(P.isSunLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let V=P.shadow,k=t.get(P);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[m]=k,i.sunShadowMap[m]=$;let ae=V.getViewportCount();for(let re=0;re<ae;re++)i.sunShadowMatrix[x+re]=V.getMatrix(re),i.sunShadowCascade[x+re]=V._cascadeData[re];x+=ae,m++}i.sun[d]=N,d++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let V=P.shadow,k=t.get(P);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=N,p++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(G).multiplyScalar(O),N.distance=H,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[_]=N;let V=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,V.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=V.matrix,P.castShadow){let k=t.get(P);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=$,v++}_++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(G).multiplyScalar(O),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=N,S++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let V=P.shadow,k=t.get(P);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=N,g++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(O),N.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[M]=N,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=u;let R=i.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==S||R.hemiLength!==M||R.numSunShadows!==m||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==v||R.numSpotMaps!==y||R.numLightProbes!==E)&&(i.sun.length=d,i.directional.length=p,i.spot.length=_,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,R.sunLength=d,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=S,R.hemiLength=M,R.numSunShadows=m,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=v,R.numSpotMaps=y,R.numLightProbes=E,i.version=m1++)}function l(h,c){let f=0,u=0,d=0,m=0,x=0,p=0,g=c.matrixWorldInverse;for(let _=0,S=h.length;_<S;_++){let M=h[_];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(M.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function Ip(n){let e=new x1(n),t=[],i=[],s=[];function r(f){c.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function h(f){e.setupView(t,f)}let c={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function v1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ip(n),e.set(s,[a])):r>=o.length?(a=new Ip(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
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
}`,M1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],S1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Lp=new pt,Bo=new B,Pu=new B;function b1(n,e,t){let i=new Ns,s=new Oe,r=new Oe,o=new Gt,a=new rl,l=new ol,h={},c=t.maxTextureSize,f={[es]:qt,[qt]:es,[Wn]:Wn},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:_1,fragmentShader:y1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ft;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let g=this.type;this.render=function(T,v,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Mf&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let w=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ks),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=g!==this.type;F&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=T.length;P<G;P++){let O=T[P],H=O.shadow;if(H===void 0){rt("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let $=H.getFrameExtents();s.multiply($),r.copy(H.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/$.y),s.y=r.y*$.y,H.mapSize.y=r.y));let N=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=N,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===br){if(O.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Un(s.x,s.y,{format:ts,type:ni,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Li(s.x,s.y,Xn),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Pi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=tn,H.map.depthTexture.magFilter=tn}else O.isPointLight?(H.map=new Ho(s.x),H.map.depthTexture=new po(s.x,ti)):(H.map=new Un(s.x,s.y),H.map.depthTexture=new Li(s.x,s.y,ti)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Pi,this.type===Io?(H.map.depthTexture.compareFunction=N?du:uu,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=tn,H.map.depthTexture.magFilter=tn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let V=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();O.isPointLight!==!0&&H.updateMatrices(O,y);let k=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:y.layers;for(let ae=0;ae<V;ae++){let re=H.getCamera(ae);if(O.isPointLight){let q=H.camera,he=H.matrix,_e=O.distance||q.far;_e!==q.far&&(q.far=_e,q.updateProjectionMatrix()),Bo.setFromMatrixPosition(O.matrixWorld),q.position.copy(Bo),Pu.copy(q.position),Pu.add(M1[ae]),q.up.copy(S1[ae]),q.lookAt(Pu),q.updateMatrixWorld(),he.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Lp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Lp,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(H.map),n.clear());let q=H.getViewport(ae);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),I.viewport(o)}i=H.getFrustum(ae),M(v,y,re,O,k,this.type)}H.isPointLightShadow!==!0&&this.type===br&&_(H,y),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,R)};function _(T,v){let y=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Un(s.x,s.y,{format:ts,type:ni}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,y,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,y,d,x,null)}function S(T,v,y,w){let E=null,R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let I=E.uuid,F=v.uuid,P=h[I];P===void 0&&(P={},h[I]=P);let G=P[F];G===void 0&&(G=E.clone(),P[F]=G,v.addEventListener("dispose",b)),E=G}if(E.visible=v.visible,E.wireframe=v.wireframe,w===br?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:f[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=n.properties.get(E);I.light=y}return E}function M(T,v,y,w,E,R){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===br)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let P=e.update(T),G=T.material;if(Array.isArray(G)){let O=P.groups;for(let H=0,$=O.length;H<$;H++){let N=O[H],V=G[N.materialIndex];if(V&&V.visible){let k=S(T,V,w,R);T.onBeforeShadow(n,T,v,y,P,k,N),n.renderBufferDirect(y,null,P,k,T,N),T.onAfterShadow(n,T,v,y,P,k,N)}}}else if(G.visible){let O=S(T,G,w,R);T.onBeforeShadow(n,T,v,y,P,O,null),n.renderBufferDirect(y,null,P,O,T,null),T.onAfterShadow(n,T,v,y,P,O,null)}}let F=T.children;for(let P=0,G=F.length;P<G;P++)M(F[P],v,y,w,E,R)}function b(T){T.target.removeEventListener("dispose",b);for(let y in h){let w=h[y],E=T.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function w1(n,e){function t(){let U=!1,ne=new Gt,Q=null,be=new Gt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!U&&(n.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){U=ye},setClear:function(ye,fe,me,Fe,ue){ue===!0&&(ye*=Fe,fe*=Fe,me*=Fe),ne.set(ye,fe,me,Fe),be.equals(ne)===!1&&(n.clearColor(ye,fe,me,Fe),be.copy(ne))},reset:function(){U=!1,Q=null,be.set(-1,0,0,0)}}}function i(){let U=!1,ne=!1,Q=null,be=null,ye=null;return{setReversed:function(fe){if(ne!==fe){let me=e.get("EXT_clip_control");fe?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ne=fe;let Fe=ye;ye=null,this.setClear(Fe)}},getReversed:function(){return ne},setTest:function(fe){fe?j(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(fe){Q!==fe&&!U&&(n.depthMask(fe),Q=fe)},setFunc:function(fe){if(ne&&(fe=tp[fe]),be!==fe){switch(fe){case Fa:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Ga:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=fe}},setLocked:function(fe){U=fe},setClear:function(fe){ye!==fe&&(ye=fe,ne&&(fe=1-fe),n.clearDepth(fe))},reset:function(){U=!1,Q=null,be=null,ye=null,ne=!1}}}function s(){let U=!1,ne=null,Q=null,be=null,ye=null,fe=null,me=null,Fe=null,ue=null;return{setTest:function(Le){U||(Le?j(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Le){ne!==Le&&!U&&(n.stencilMask(Le),ne=Le)},setFunc:function(Le,Ee,Ae){(Q!==Le||be!==Ee||ye!==Ae)&&(n.stencilFunc(Le,Ee,Ae),Q=Le,be=Ee,ye=Ae)},setOp:function(Le,Ee,Ae){(fe!==Le||me!==Ee||Fe!==Ae)&&(n.stencilOp(Le,Ee,Ae),fe=Le,me=Ee,Fe=Ae)},setLocked:function(Le){U=Le},setClear:function(Le){ue!==Le&&(n.clearStencil(Le),ue=Le)},reset:function(){U=!1,ne=null,Q=null,be=null,ye=null,fe=null,me=null,Fe=null,ue=null}}}let r=new t,o=new i,a=new s,l={},h=new WeakMap,c={},f={},u={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,S=null,M=null,b=null,T=null,v=null,y=new it(0,0,0),w=0,E=!1,R=null,I=null,F=null,P=null,G=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=$>=1):N.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=$>=2);let V=null,k={},ae=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),q=new Gt().fromArray(ae),he=new Gt().fromArray(re);function _e(U,ne,Q,be){let ye=new Uint8Array(4),fe=n.createTexture();n.bindTexture(U,fe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<Q;me++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ne+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return fe}let Ge={};Ge[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(dr),ge(!1),de(Vh),j(n.CULL_FACE),Me(ks);function j(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function Re(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function $e(U,ne){return u[U]!==ne?(n.bindFramebuffer(U,ne),u[U]=ne,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ne(U,ne){let Q=m,be=!1;if(U){Q=d.get(ne),Q===void 0&&(Q=[],d.set(ne,Q));let ye=U.textures;if(Q.length!==ye.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,me=ye.length;fe<me;fe++)Q[fe]=n.COLOR_ATTACHMENT0+fe;Q.length=ye.length,be=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,be=!0);be&&n.drawBuffers(Q)}function Je(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let De={[Bs]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[wf]:n.FUNC_REVERSE_SUBTRACT};De[Tf]=n.MIN,De[Ef]=n.MAX;let le={[Af]:n.ZERO,[Rf]:n.ONE,[Cf]:n.SRC_COLOR,[qh]:n.SRC_ALPHA,[Of]:n.SRC_ALPHA_SATURATE,[Df]:n.DST_COLOR,[If]:n.DST_ALPHA,[Pf]:n.ONE_MINUS_SRC_COLOR,[$h]:n.ONE_MINUS_SRC_ALPHA,[Nf]:n.ONE_MINUS_DST_COLOR,[Lf]:n.ONE_MINUS_DST_ALPHA,[Uf]:n.CONSTANT_COLOR,[Ff]:n.ONE_MINUS_CONSTANT_COLOR,[kf]:n.CONSTANT_ALPHA,[Bf]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(U,ne,Q,be,ye,fe,me,Fe,ue,Le){if(U===ks){p===!0&&(Re(n.BLEND),p=!1);return}if(p===!1&&(j(n.BLEND),p=!0),U!==Sf){if(U!==g||Le!==E){if((_!==Bs||b!==Bs)&&(n.blendEquation(n.FUNC_ADD),_=Bs,b=Bs),Le)switch(U){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wh:n.blendFunc(n.ONE,n.ONE);break;case Xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",U);break}else switch(U){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xh:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",U);break}S=null,M=null,T=null,v=null,y.set(0,0,0),w=0,g=U,E=Le}return}ye=ye||ne,fe=fe||Q,me=me||be,(ne!==_||ye!==b)&&(n.blendEquationSeparate(De[ne],De[ye]),_=ne,b=ye),(Q!==S||be!==M||fe!==T||me!==v)&&(n.blendFuncSeparate(le[Q],le[be],le[fe],le[me]),S=Q,M=be,T=fe,v=me),(Fe.equals(y)===!1||ue!==w)&&(n.blendColor(Fe.r,Fe.g,Fe.b,ue),y.copy(Fe),w=ue),g=U,E=!1}function Te(U,ne){U.side===Wn?Re(n.CULL_FACE):j(n.CULL_FACE);let Q=U.side===qt;ne&&(Q=!Q),ge(Q),U.blending===wr&&U.transparent===!1?Me(ks):Me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let be=U.stencilWrite;a.setTest(be),be&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(U){R!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),R=U)}function de(U){U!==_f?(j(n.CULL_FACE),U!==I&&(U===Vh?n.cullFace(n.BACK):U===yf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),I=U}function Be(U){U!==F&&(H&&n.lineWidth(U),F=U)}function Ue(U,ne,Q){U?(j(n.POLYGON_OFFSET_FILL),(P!==ne||G!==Q)&&(P=ne,G=Q,o.getReversed()&&(ne=-ne,Q=-Q),n.polygonOffset(ne,Q))):Re(n.POLYGON_OFFSET_FILL)}function Ye(U){U?j(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Ve(U){U===void 0&&(U=n.TEXTURE0+O-1),V!==U&&(n.activeTexture(U),V=U)}function tt(U,ne,Q){Q===void 0&&(V===null?Q=n.TEXTURE0+O-1:Q=V);let be=k[Q];be===void 0&&(be={type:void 0,texture:void 0},k[Q]=be),(be.type!==U||be.texture!==ne)&&(V!==Q&&(n.activeTexture(Q),V=Q),n.bindTexture(U,ne||Ge[U]),be.type=U,be.texture=ne)}function z(){let U=k[V];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pe(){try{n.compressedTexImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function Ce(){try{n.compressedTexImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function qe(){try{n.texSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function te(){try{n.texSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Pe(){try{n.texStorage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function L(){try{n.texStorage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function A(){try{n.texImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function Y(){try{n.texImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function xe(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function oe(U,ne){f[U]!==ne&&(n.pixelStorei(U,ne),f[U]=ne)}function ve(U){q.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function Se(U){he.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function ie(U,ne){let Q=h.get(ne);Q===void 0&&(Q=new WeakMap,h.set(ne,Q));let be=Q.get(U);be===void 0&&(be=n.getUniformBlockIndex(ne,U.name),n.uniformBlockBinding(ne,be,be),Q.set(U,be))}function se(U,ne,Q){let ye=h.get(ne).get(U);l[ye]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ye,Q),l[ye]=Q)}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},f={},V=null,k={},u={},l={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,S=null,M=null,b=null,T=null,v=null,y=new it(0,0,0),w=0,E=!1,R=null,I=null,F=null,P=null,G=null,q.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:Re,bindFramebuffer:$e,drawBuffers:Ne,useProgram:Je,setBlending:Me,setMaterial:Te,setFlipSided:ge,setCullFace:de,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:Ye,activeTexture:Ve,bindTexture:tt,unbindTexture:z,compressedTexImage2D:pe,compressedTexImage3D:Ce,texImage2D:A,texImage3D:Y,pixelStorei:oe,getParameter:xe,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:Pe,texStorage3D:L,texSubImage2D:qe,texSubImage3D:te,compressedTexSubImage2D:nt,compressedTexSubImage3D:ze,scissor:ve,viewport:Se,reset:we}}function T1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Oe,c=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,x=new FinalizationRegistry(L=>m.delete(L)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return p?new OffscreenCanvas(L,A):ro("canvas")}function _(L,A,Y){let xe=1,oe=Pe(L);if((oe.width>Y||oe.height>Y)&&(xe=Y/Math.max(oe.width,oe.height)),xe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ve=Math.floor(xe*oe.width),Se=Math.floor(xe*oe.height);u===void 0&&(u=g(ve,Se));let ie=A?g(ve,Se):u;return ie.width=ve,ie.height=Se,ie.getContext("2d").drawImage(L,0,0,ve,Se),rt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ve+"x"+Se+")."),ie}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function S(L){return L.generateMipmaps}function M(L){n.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(L,A,Y,xe,oe,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Se;xe&&(Se=e.get("EXT_texture_norm16"),Se||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===n.RED&&(Y===n.FLOAT&&(ie=n.R32F),Y===n.HALF_FLOAT&&(ie=n.R16F),Y===n.UNSIGNED_BYTE&&(ie=n.R8),Y===n.UNSIGNED_SHORT&&Se&&(ie=Se.R16_EXT),Y===n.SHORT&&Se&&(ie=Se.R16_SNORM_EXT)),A===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.R8UI),Y===n.UNSIGNED_SHORT&&(ie=n.R16UI),Y===n.UNSIGNED_INT&&(ie=n.R32UI),Y===n.BYTE&&(ie=n.R8I),Y===n.SHORT&&(ie=n.R16I),Y===n.INT&&(ie=n.R32I)),A===n.RG&&(Y===n.FLOAT&&(ie=n.RG32F),Y===n.HALF_FLOAT&&(ie=n.RG16F),Y===n.UNSIGNED_BYTE&&(ie=n.RG8),Y===n.UNSIGNED_SHORT&&Se&&(ie=Se.RG16_EXT),Y===n.SHORT&&Se&&(ie=Se.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RG16UI),Y===n.UNSIGNED_INT&&(ie=n.RG32UI),Y===n.BYTE&&(ie=n.RG8I),Y===n.SHORT&&(ie=n.RG16I),Y===n.INT&&(ie=n.RG32I)),A===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),Y===n.UNSIGNED_INT&&(ie=n.RGB32UI),Y===n.BYTE&&(ie=n.RGB8I),Y===n.SHORT&&(ie=n.RGB16I),Y===n.INT&&(ie=n.RGB32I)),A===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ie=n.RGBA32UI),Y===n.BYTE&&(ie=n.RGBA8I),Y===n.SHORT&&(ie=n.RGBA16I),Y===n.INT&&(ie=n.RGBA32I)),A===n.RGB&&(Y===n.UNSIGNED_SHORT&&Se&&(ie=Se.RGB16_EXT),Y===n.SHORT&&Se&&(ie=Se.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),A===n.RGBA){let se=ve?io:vt.getTransfer(oe);Y===n.FLOAT&&(ie=n.RGBA32F),Y===n.HALF_FLOAT&&(ie=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ie=se===bt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Se&&(ie=Se.RGBA16_EXT),Y===n.SHORT&&Se&&(ie=Se.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(L,A){let Y;return L?A===null||A===ti||A===Hs?Y=n.DEPTH24_STENCIL8:A===Xn?Y=n.DEPTH32F_STENCIL8:A===Er&&(Y=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ti||A===Hs?Y=n.DEPTH_COMPONENT24:A===Xn?Y=n.DEPTH_COMPONENT32F:A===Er&&(Y=n.DEPTH_COMPONENT16),Y}function y(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==tn&&L.minFilter!==Sn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){let A=new WeakRef(L);i.get(L).__ref=A,m.add(A),x.register(L,A,A)}function E(L){let A=i.get(L).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function R(L){F(L.target)}function I(L){P(L.target)}function F(L){L.removeEventListener("dispose",R),E(L),O(L),L.isVideoTexture&&c.delete(L),L.isHTMLTexture&&f.delete(L)}function P(L){L.removeEventListener("dispose",I),E(L),$(L)}function G(){for(let L of m){let A=L.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):F(A))}m.clear(),f.clear()}function O(L){let A=i.get(L);if(A.__webglInit===void 0)return;let Y=L.source,xe=d.get(Y);if(xe){let oe=xe[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&H(L),Object.keys(xe).length===0&&d.delete(Y)}i.remove(L)}function H(L){let A=i.get(L);n.deleteTexture(A.__webglTexture);let Y=L.source,xe=d.get(Y);delete xe[A.__cacheKey],o.memory.textures--}function $(L){let A=i.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Y=L.depthTexture;if(Y&&Y.renderTarget===L&&F(Y),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let ve=0;ve<A.__webglFramebuffer[oe].length;ve++)n.deleteFramebuffer(A.__webglFramebuffer[oe][ve]);else n.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)n.deleteFramebuffer(A.__webglFramebuffer[oe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let xe=L.textures;for(let oe=0,ve=xe.length;oe<ve;oe++){let Se=i.get(xe[oe]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(xe[oe])}i.remove(L)}let N=0;function V(){N=0}function k(){return N}function ae(L){N=L}function re(){let L=N;return L>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function q(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function he(L,A){let Y=i.get(L);if(L.isVideoTexture&&nt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let xe=L.image;if(xe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Y,L,A);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+A)}function _e(L,A){let Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Te(Y,L,A);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+A)}function Ge(L,A){let Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Te(Y,L,A);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+A)}function j(L,A){let Y=i.get(L);if(L.version>0&&Y.__version!==L.version){ge(Y,L,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+A)}let Re={[Wa]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},$e={[tn]:n.NEAREST,[Gf]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Ne={[Yf]:n.NEVER,[fu]:n.ALWAYS,[qf]:n.LESS,[uu]:n.LEQUAL,[$f]:n.EQUAL,[du]:n.GEQUAL,[Zf]:n.GREATER,[Jf]:n.NOTEQUAL};function Je(L,A){if(A.type===Xn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Sn||A.magFilter===Sl||A.magFilter===Lo||A.magFilter===Di||A.minFilter===Sn||A.minFilter===Sl||A.minFilter===Lo||A.minFilter===Di)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Re[A.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Re[A.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Re[A.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$e[A.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$e[A.minFilter]),A.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Ne[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===tn||A.minFilter!==Lo&&A.minFilter!==Di||A.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function De(L,A){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",R),w(A));let xe=A.source,oe=d.get(xe);oe===void 0&&(oe={},d.set(xe,oe));let ve=q(A);if(ve!==L.__cacheKey){oe[ve]===void 0&&(oe[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),oe[ve].usedTimes++;let Se=oe[L.__cacheKey];Se!==void 0&&(oe[L.__cacheKey].usedTimes--,Se.usedTimes===0&&H(A)),L.__cacheKey=ve,L.__webglTexture=oe[ve].texture}return Y}function le(L,A,Y){return Math.floor(Math.floor(L/Y)/A)}function Me(L,A,Y,xe){let ve=L.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,Y,xe,A.data);else{ve.sort((U,ne)=>U.start-ne.start);let Se=0;for(let U=1;U<ve.length;U++){let ne=ve[Se],Q=ve[U],be=ne.start+ne.count,ye=le(Q.start,A.width,4),fe=le(ne.start,A.width,4);Q.start<=be+1&&ye===fe&&le(Q.start+Q.count-1,A.width,4)===ye?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++Se,ve[Se]=Q)}ve.length=Se+1;let ie=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let U=0,ne=ve.length;U<ne;U++){let Q=ve[U],be=Math.floor(Q.start/4),ye=Math.ceil(Q.count/4),fe=be%A.width,me=Math.floor(be/A.width),Fe=ye,ue=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,me),t.texSubImage2D(n.TEXTURE_2D,0,fe,me,Fe,ue,Y,xe,A.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function Te(L,A,Y){let xe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=n.TEXTURE_3D);let oe=De(L,A),ve=A.source;t.bindTexture(xe,L.__webglTexture,n.TEXTURE0+Y);let Se=i.get(ve);if(ve.version!==Se.__version||oe===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ue=vt.getPrimaries(vt.workingColorSpace),Le=A.colorSpace===Oi?null:vt.getPrimaries(A.colorSpace),Ee=A.colorSpace===Oi||ue===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let se=_(A.image,!1,s.maxTextureSize);se=ze(A,se);let we=r.convert(A.format,A.colorSpace),U=r.convert(A.type),ne=T(A.internalFormat,we,U,A.normalized,A.colorSpace,A.isVideoTexture);Je(xe,A);let Q,be=A.mipmaps,ye=A.isVideoTexture!==!0,fe=Se.__version===void 0||oe===!0,me=ve.dataReady,Fe=y(A,se);if(A.isDepthTexture)ne=v(A.format===Ni,A.type),fe&&(ye?t.texStorage2D(n.TEXTURE_2D,1,ne,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ne,se.width,se.height,0,we,U,null));else if(A.isDataTexture)if(be.length>0){ye&&fe&&t.texStorage2D(n.TEXTURE_2D,Fe,ne,be[0].width,be[0].height);for(let ue=0,Le=be.length;ue<Le;ue++)Q=be[ue],ye?me&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Q.width,Q.height,we,U,Q.data):t.texImage2D(n.TEXTURE_2D,ue,ne,Q.width,Q.height,0,we,U,Q.data);A.generateMipmaps=!1}else ye?(fe&&t.texStorage2D(n.TEXTURE_2D,Fe,ne,se.width,se.height),me&&Me(A,se,we,U)):t.texImage2D(n.TEXTURE_2D,0,ne,se.width,se.height,0,we,U,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ye&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,ne,be[0].width,be[0].height,se.depth);for(let ue=0,Le=be.length;ue<Le;ue++)if(Q=be[ue],A.format!==ii)if(we!==null)if(ye){if(me)if(A.layerUpdates.size>0){let Ee=bu(Q.width,Q.height,A.format,A.type);for(let Ae of A.layerUpdates){let Qe=Q.data.subarray(Ae*Ee/Q.data.BYTES_PER_ELEMENT,(Ae+1)*Ee/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ae,Q.width,Q.height,1,we,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Q.width,Q.height,se.depth,we,Q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,ne,Q.width,Q.height,se.depth,0,Q.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Q.width,Q.height,se.depth,we,U,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,ne,Q.width,Q.height,se.depth,0,we,U,Q.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ye&&fe&&t.texStorage2D(n.TEXTURE_2D,Fe,ne,be[0].width,be[0].height);for(let ue=0,Le=be.length;ue<Le;ue++)Q=be[ue],A.format!==ii?we!==null?ye?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Q.width,Q.height,we,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,ne,Q.width,Q.height,0,Q.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?me&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Q.width,Q.height,we,U,Q.data):t.texImage2D(n.TEXTURE_2D,ue,ne,Q.width,Q.height,0,we,U,Q.data)}else if(A.isDataArrayTexture)if(ye){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,ne,se.width,se.height,se.depth),me)if(A.layerUpdates.size>0){let ue=bu(se.width,se.height,A.format,A.type);for(let Le of A.layerUpdates){let Ee=se.data.subarray(Le*ue/se.data.BYTES_PER_ELEMENT,(Le+1)*ue/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Le,se.width,se.height,1,we,U,Ee)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,U,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,se.width,se.height,se.depth,0,we,U,se.data);else if(A.isData3DTexture)ye?(fe&&t.texStorage3D(n.TEXTURE_3D,Fe,ne,se.width,se.height,se.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,U,se.data)):t.texImage3D(n.TEXTURE_3D,0,ne,se.width,se.height,se.depth,0,we,U,se.data);else if(A.isFramebufferTexture){if(fe)if(ye)t.texStorage2D(n.TEXTURE_2D,Fe,ne,se.width,se.height);else{let ue=se.width,Le=se.height;for(let Ee=0;Ee<Fe;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ne,ue,Le,0,we,U,null),ue>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let ue=n.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),se.parentNode!==ue){ue.appendChild(se),f.add(A),ue.onpaint=Le=>{let Ee=Le.changedElements;for(let Ae of f)Ee.includes(Ae.image)&&(Ae.needsUpdate=!0)},ue.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Ee=n.RGBA,Ae=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,Ae,Qe,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(be.length>0){if(ye&&fe){let ue=Pe(be[0]);t.texStorage2D(n.TEXTURE_2D,Fe,ne,ue.width,ue.height)}for(let ue=0,Le=be.length;ue<Le;ue++)Q=be[ue],ye?me&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,we,U,Q):t.texImage2D(n.TEXTURE_2D,ue,ne,we,U,Q);A.generateMipmaps=!1}else if(ye){if(fe){let ue=Pe(se);t.texStorage2D(n.TEXTURE_2D,Fe,ne,ue.width,ue.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,U,se)}else t.texImage2D(n.TEXTURE_2D,0,ne,we,U,se);S(A)&&A.mipmapsAutoUpdate===!0&&M(xe),Se.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ge(L,A,Y){if(A.image.length!==6)return;let xe=De(L,A),oe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);let ve=i.get(oe);if(oe.version!==ve.__version||xe===!0){t.activeTexture(n.TEXTURE0+Y);let Se=vt.getPrimaries(vt.workingColorSpace),ie=A.colorSpace===Oi?null:vt.getPrimaries(A.colorSpace),se=A.colorSpace===Oi||Se===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let we=A.isCompressedTexture||A.image[0].isCompressedTexture,U=A.image[0]&&A.image[0].isDataTexture,ne=[];for(let Ae=0;Ae<6;Ae++)!we&&!U?ne[Ae]=_(A.image[Ae],!0,s.maxCubemapSize):ne[Ae]=U?A.image[Ae].image:A.image[Ae],ne[Ae]=ze(A,ne[Ae]);let Q=ne[0],be=r.convert(A.format,A.colorSpace),ye=r.convert(A.type),fe=T(A.internalFormat,be,ye,A.normalized,A.colorSpace),me=A.isVideoTexture!==!0,Fe=ve.__version===void 0||xe===!0,ue=oe.dataReady,Le=y(A,Q);Je(n.TEXTURE_CUBE_MAP,A);let Ee;if(A.isDepthTexture){if(fe=v(A.format===Ni,A.type),Fe)if(me)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,fe,Q.width,Q.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,Q.width,Q.height,0,be,ye,null)}else if(we){me&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,fe,Q.width,Q.height);for(let Ae=0;Ae<6;Ae++){Ee=ne[Ae].mipmaps;for(let Qe=0;Qe<Ee.length;Qe++){let ct=Ee[Qe];A.format!==ii?be!==null?me?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,ct.width,ct.height,be,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,fe,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,ct.width,ct.height,be,ye,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,fe,ct.width,ct.height,0,be,ye,ct.data)}}}else{if(Ee=A.mipmaps,me&&Fe){Ee.length>0&&Le++;let Ae=Pe(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,fe,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(U){me?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ne[Ae].width,ne[Ae].height,be,ye,ne[Ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,ne[Ae].width,ne[Ae].height,0,be,ye,ne[Ae].data);for(let Qe=0;Qe<Ee.length;Qe++){let Et=Ee[Qe].image[Ae].image;me?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,Et.width,Et.height,be,ye,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,fe,Et.width,Et.height,0,be,ye,Et.data)}}else{me?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,be,ye,ne[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,be,ye,ne[Ae]);for(let Qe=0;Qe<Ee.length;Qe++){let ct=Ee[Qe];me?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,be,ye,ct.image[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,fe,be,ye,ct.image[Ae])}}}S(A)&&A.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ve.__version=oe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function de(L,A,Y,xe,oe,ve){let Se=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),se=T(Y.internalFormat,Se,ie,Y.normalized,Y.colorSpace),we=i.get(A),U=i.get(Y);if(U.__renderTarget=A,!we.__hasExternalTextures){let ne=Math.max(1,A.width>>ve),Q=Math.max(1,A.height>>ve);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ve,se,ne,Q,A.depth,0,Se,ie,null):t.texImage2D(oe,ve,se,ne,Q,0,Se,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),te(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,oe,U.__webglTexture,0,qe(A)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,oe,U.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(L,A,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),A.depthBuffer){let xe=A.depthTexture,oe=xe&&xe.isDepthTexture?xe.type:null,ve=v(A.stencilBuffer,oe),Se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;te(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(A),ve,A.width,A.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(A),ve,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,L)}else{let xe=A.textures;for(let oe=0;oe<xe.length;oe++){let ve=xe[oe],Se=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),se=T(ve.internalFormat,Se,ie,ve.normalized,ve.colorSpace);te(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(A),se,A.width,A.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(A),se,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,se,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(L,A,Y){let xe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=i.get(A.depthTexture);oe.__renderTarget=A;let ve=xe?A.depthTexture.image[0]:A.depthTexture.image;(!oe.__webglTexture||ve.width!==A.width||ve.height!==A.height)&&(ve.width=A.width,ve.height=A.height,A.depthTexture.needsUpdate=!0),xe?j(A.depthTexture,0):he(A.depthTexture,0);let Se=oe.__webglTexture,ie=qe(A),se=xe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,we=A.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Pi)te(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,se,Se,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,we,se,Se,0);else if(A.depthTexture.format===Ni)te(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,se,Se,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,we,se,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(L){let A=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let xe=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let oe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",oe)};xe.addEventListener("dispose",oe),A.__depthDisposeCallback=oe}A.__boundDepthTexture=xe}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let xe=0;xe<6;xe++)Ue(A.__webglFramebuffer[xe],L,xe);else L.texture.mipmaps.length>0?Ue(A.__webglFramebuffer[0],L,0):Ue(A.__webglFramebuffer,L,0);else if(Y){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=n.createRenderbuffer(),Be(A.__webglDepthbuffer[xe],L,!1);else{let oe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ve)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Be(A.__webglDepthbuffer,L,!1);else{let oe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(L,A,Y){let xe=i.get(L);A!==void 0&&de(xe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ye(L)}function tt(L){let A=L.texture,Y=i.get(L),xe=i.get(A);L.addEventListener("dispose",I),w(L);let oe=L.textures,ve=L.isWebGLCubeRenderTarget===!0,Se=oe.length>1;if(Se||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=A.version,o.memory.textures++),ve){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let se=0;se<A.mipmaps.length;se++)Y.__webglFramebuffer[ie][se]=n.createFramebuffer()}else Y.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ie=0,se=oe.length;ie<se;ie++){let we=i.get(oe[ie]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&te(L)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<oe.length;ie++){let se=oe[ie];Y.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let we=r.convert(se.format,se.colorSpace),U=r.convert(se.type),ne=T(se.internalFormat,we,U,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),Q=qe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,ne,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),Je(n.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)de(Y.__webglFramebuffer[ie][se],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else de(Y.__webglFramebuffer[ie],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);S(A)?M(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let ie=0,se=oe.length;ie<se;ie++){let we=oe[ie],U=i.get(we),ne=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,U.__webglTexture),Je(ne,we),de(Y.__webglFramebuffer,L,we,n.COLOR_ATTACHMENT0+ie,ne,0),S(we)&&M(ne)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,xe.__webglTexture),Je(ie,A),A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)de(Y.__webglFramebuffer[se],L,A,n.COLOR_ATTACHMENT0,ie,se);else de(Y.__webglFramebuffer,L,A,n.COLOR_ATTACHMENT0,ie,0);S(A)?M(ie):A.mipmaps.length>0&&n.texParameteri(ie,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Ye(L)}function z(L){let A=L.textures;for(let Y=0,xe=A.length;Y<xe;Y++){let oe=A[Y];if(S(oe)&&oe.mipmapsAutoUpdate===!0){let ve=b(L),Se=i.get(oe).__webglTexture;t.bindTexture(ve,Se),M(ve),t.unbindTexture()}}}let pe=[];function Ce(L){if(L.samples>0){if(te(L)===!1){let A=L.textures,Y=L.width,xe=L.height,oe=n.COLOR_BUFFER_BIT,ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(L),ie=A.length>1;if(ie)for(let we=0;we<A.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<A.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let U=i.get(A[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,Y,xe,0,0,Y,xe,oe,n.NEAREST),l===!0&&(pe.length=0,pe.push(n.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&pe.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<A.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let U=i.get(A[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let A=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function qe(L){return Math.min(s.maxSamples,L.samples)}function te(L){let A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(L){let A=o.render.frame;c.get(L)!==A&&(c.set(L,A),L.update())}function ze(L,A){let Y=L.colorSpace,xe=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==no&&Y!==Oi&&(vt.getTransfer(Y)===bt?(xe!==ii||oe!==kn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Y)),A}function Pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=re,this.resetTextureUnits=V,this.getTextureUnits=k,this.setTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=_e,this.setTexture3D=Ge,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=te,this.dispose=G}function E1(n,e){function t(i,s=Oi){let r,o=vt.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===su)return n.BYTE;if(i===ru)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===lu)return n.ALPHA;if(i===cu)return n.RGB;if(i===ii)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===El)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Cl)return n.RGBA_INTEGER;if(i===Do||i===No||i===Oo||i===Uo)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pl||i===Il||i===Ll||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Ol||i===Ul||i===Fl||i===kl||i===Fo||i===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===Ol)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fl)return r.COMPRESSED_R11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fo)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===Yl||i===ql||i===$l||i===Zl||i===Jl||i===Kl||i===jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===tc||i===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ec)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ic||i===sc||i===ko||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vn({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ku=class extends hi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,f=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new Fu,g={},_=t.getContextAttributes(),S=null,M=null,b=[],T=[],v=new Oe,y=null,w=null,E=new an;E.viewport=new Gt;let R=new an;R.viewport=new Gt;let I=[E,R],F=new vl,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=b[q];return he===void 0&&(he=new gr,b[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=b[q];return he===void 0&&(he=new gr,b[q]=he),he.getGripSpace()},this.getHand=function(q){let he=b[q];return he===void 0&&(he=new gr,b[q]=he),he.getHandSpace()};function O(q){let he=T.indexOf(q.inputSource);if(he===-1)return;let _e=b[he];_e!==void 0&&(_e.update(q.inputSource,q.frame,h||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let q=0;q<b.length;q++){let he=T[q];he!==null&&(T[q]=null,b[q].disconnect(he))}P=null,G=null,p.reset();for(let q in g)delete g[q];if(e.setRenderTarget(S),d=null,u=null,f=null,s=null,M=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ge=null,j=null;_.depth&&(j=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=_.stencil?Ni:Pi,Ge=_.stencil?Hs:ti);let Re={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Un(u.textureWidth,u.textureHeight,{format:ii,type:kn,depthTexture:new Li(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Un(d.framebufferWidth,d.framebufferHeight,{format:ii,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(q){for(let he=0;he<q.removed.length;he++){let _e=q.removed[he],Ge=T.indexOf(_e);Ge>=0&&(T[Ge]=null,b[Ge].disconnect(_e))}for(let he=0;he<q.added.length;he++){let _e=q.added[he],Ge=T.indexOf(_e);if(Ge===-1){for(let Re=0;Re<b.length;Re++)if(Re>=T.length){T.push(_e),Ge=Re;break}else if(T[Re]===null){T[Re]=_e,Ge=Re;break}if(Ge===-1)break}let j=b[Ge];j&&j.connect(_e)}}function N(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let he=q.near,_e=q.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),F.near=R.near=E.near=he,F.far=R.far=E.far=_e,(P!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,G=F.far),F.layers.mask=q.layers.mask|6,E.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Ge=q.parent,j=F.cameras;N(F,Ge);for(let Re=0;Re<j.length;Re++)N(j[Re],Ge);F.projectionMatrix.copy(E.projectionMatrix),F.projectionMatrixInverse.copy(E.projectionMatrixInverse),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),V(q,F,Ge)};function V(q,he,_e){_e===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(q){return g[q]};let k=null;function ae(q,he){if(c=he.getViewerPose(h||o),m=he,c!==null){let _e=c.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ge=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,Ge=!0);for(let Ne=0;Ne<_e.length;Ne++){let Je=_e[Ne],De=null;if(d!==null)De=d.getViewport(Je);else{let Me=f.getViewSubImage(u,Je);De=Me.viewport,Ne===0&&(e.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(M))}let le=I[Ne];le===void 0&&(le=new an,le.layers.enable(Ne),le.viewport=new Gt,I[Ne]=le),le.matrix.fromArray(Je.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Je.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(De.x,De.y,De.width,De.height),Ne===0&&(F.matrix.copy(le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ge===!0&&F.cameras.push(le)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let Ne=f.getDepthInformation(_e[0]);Ne&&Ne.isValid&&Ne.texture&&p.init(Ne,s.renderState)}if(j&&j.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ne=0;Ne<_e.length;Ne++){let Je=_e[Ne].camera;if(Je){let De=g[Je];De||(De=new mo,g[Je]=De);let le=f.getCameraImage(Je);De.sourceTexture=le}}}}for(let _e=0;_e<b.length;_e++){let Ge=T[_e],j=b[_e];Ge!==null&&j!==void 0&&j.update(Ge,he,h||o)}k&&k(q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}let re=new Dp;re.setAnimationLoop(ae),this.setAnimationLoop=function(q){k=q},this.dispose=function(){}}},C1=new pt,Vp=new at;Vp.set(-1,0,0,0,1,0,0,0,1);function P1(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,yu(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),c(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,S):g.isSpriteMaterial?h(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===qt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===qt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),S=_.envMap,M=_.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function I1(n,e,t,i){let s={},r={};function o(_,S){let M=S.program;i.uniformBlockBinding(_,M,s[_.id])}function a(_,S){let M=s[_.id];M===void 0&&(m(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",p));let b=S.program;i.updateUBOMapping(_,b);let T=e.render.frame;r[_.id]!==T&&(h(_),r[_.id]=T)}function l(_){let S=n.createBuffer(),M=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,b),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function h(_){let S=s[_.id],M=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,v=M.length;T<v;T++){let y=M[T];if(Array.isArray(y))for(let w=0,E=y.length;w<E;w++)c(y[w],T,w,b);else c(y,T,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(_,S,M,b){if(u(_,S,M,b)===!0){let T=_.__offset,v=_.value;if(Array.isArray(v)){let y=0;for(let w=0;w<v.length;w++){let E=v[w],R=x(E,!0);f(E,_.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,_.__data)}}function f(_,S,M){typeof _=="number"||typeof _=="boolean"?S[M]=_:_.isMatrix3?(S[M]=_.elements[0],S[M+1]=_.elements[1],S[M+2]=_.elements[2],S[M+3]=0,S[M+4]=_.elements[3],S[M+5]=_.elements[4],S[M+6]=_.elements[5],S[M+7]=0,S[M+8]=_.elements[6],S[M+9]=_.elements[7],S[M+10]=_.elements[8],S[M+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-M),M):_.toArray(S,M)}function u(_,S,M,b){let T=_.value,v=S+"_"+M;if(Array.isArray(T)){b[v]===void 0&&(b[v]=[]);let y=b[v],w=!1;for(let E=0;E<T.length;E++)d(T[E],y,E)===!0&&(w=!0);return w}return d(T,b,v)}function d(_,S,M){if(S[M]===void 0)return typeof _=="number"||typeof _=="boolean"?S[M]=_:ArrayBuffer.isView(_)?S[M]=_.slice():S[M]=_.clone(),!0;{let b=S[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return S[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function m(_){let S=_.uniforms,M=0,b=16;for(let v=0,y=S.length;v<y;v++){let w=Array.isArray(S[v])?S[v]:[S[v]];for(let E=0,R=w.length;E<R;E++){let I=w[E],F=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(S[v])||Array.isArray(I.value),G=M;for(let H=0,$=F.length;H<$;H++){let N=F[H],V=x(N,P),k=M%b,ae=k%V.boundary,re=k+ae;M+=ae,re!==0&&b-re<V.storage&&(M+=b-re),H===0&&(G=M),M+=V.storage}let O=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new O((M-G)/Float32Array.BYTES_PER_ELEMENT),I.__offset=G}}let T=M%b;return T>0&&(M+=b-T),_.__size=M,_.__cache={},this}function x(_,S){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(_){let S=_.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var L1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function D1(){return fi===null&&(fi=new ho(L1,16,16,ts,ni),fi.name="DFG_LUT",fi.minFilter=Sn,fi.magFilter=Sn,fi.wrapS=ci,fi.wrapT=ci,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var hc=class{constructor(e={}){let{canvas:t=jf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=kn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=d,p=new Set([Cl,Rl,Al]),g=new Set([kn,ti,Er,Hs,wl,Tl]),_=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,T=null,v=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,I=null,F=null,P=null,G=null;this._outputColorSpace=on;let O=0,H=0,$=null,N=-1,V=null,k=new Gt,ae=new Gt,re=null,q=new it(0),he=0,_e=t.width,Ge=t.height,j=1,Re=null,$e=null,Ne=new Gt(0,0,_e,Ge),Je=new Gt(0,0,_e,Ge),De=!1,le=new Ns,Me=new Ka,Te=!1,ge=!1,de=new pt,Be=new B,Ue=new Gt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function tt(){return $===null?j:1}let z=i;function pe(C,W){return t.getContext(C,W)}let Ce,qe,te,nt,ze,Pe,L,A,Y,xe,oe,ve,Se,ie,se,we,U,ne,Q,be,ye,fe,me;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),z===null){let W="webgl2";if(z=pe(W,C),z===null)throw pe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(C){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ot("WebGLRenderer: "+C.message),C}function Fe(){Ce=new Wy(z),Ce.init(),ye=new E1(z,Ce),qe=new Dy(z,Ce,e,ye),te=new w1(z,Ce),qe.reversedDepthBuffer&&u&&te.buffers.depth.setReversed(!0),F=z.createFramebuffer(),P=z.createFramebuffer(),G=z.createFramebuffer(),nt=new qy(z),ze=new h1,Pe=new T1(z,Ce,te,ze,qe,ye,nt),L=new Vy(E),A=new Zx(z),fe=new Iy(z,A),Y=new Xy(z,A,nt,fe),xe=new Zy(z,Y,A,fe,nt),ne=new $y(z,qe,Pe),se=new Ny(ze),oe=new c1(E,L,Ce,qe,fe,se),ve=new P1(E,ze),Se=new d1,ie=new v1(Ce),U=new Py(E,L,te,xe,m,l),we=new b1(E,xe,qe),me=new I1(z,nt,qe,te),Q=new Ly(z,Ce,nt),be=new Yy(z,Ce,nt),nt.programs=oe.programs,E.capabilities=qe,E.extensions=Ce,E.properties=ze,E.renderLists=Se,E.shadowMap=we,E.state=te,E.info=nt}x!==kn&&(w=new Ky(x,t.width,t.height,a,s,r));let ue=new ku(E,z);this.xr=ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(_e,Ge,!1))},this.getSize=function(C){return C.set(_e,Ge)},this.setSize=function(C,W,ee=!0){if(ue.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=C,Ge=W,t.width=Math.floor(C*j),t.height=Math.floor(W*j),ee===!0&&(t.style.width=C+"px",t.style.height=W+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(_e*j,Ge*j).floor()},this.setDrawingBufferSize=function(C,W,ee){_e=C,Ge=W,j=ee,t.width=Math.floor(C*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(x===kn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Ne)},this.setViewport=function(C,W,ee,J){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,W,ee,J),te.viewport(k.copy(Ne).multiplyScalar(tt()).round())},this.getScissor=function(C){return C.copy(Je)},this.setScissor=function(C,W,ee,J){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,W,ee,J),te.scissor(ae.copy(Je).multiplyScalar(tt()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){te.setScissorTest(De=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){$e=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ee=!0){let J=0;if(C){let K=!1;if($!==null){let He=$.texture.format;K=p.has(He)}if(K){let He=$.texture.type,Ze=g.has(He),ke=U.getClearColor(),Xe=U.getClearAlpha(),et=ke.r,lt=ke.g,gt=ke.b;Ze?(_[0]=et,_[1]=lt,_[2]=gt,_[3]=Xe,z.clearBufferuiv(z.COLOR,0,_)):(S[0]=et,S[1]=lt,S[2]=gt,S[3]=Xe,z.clearBufferiv(z.COLOR,0,S))}else J|=z.COLOR_BUFFER_BIT}W&&(J|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),U.dispose(),Se.dispose(),ie.dispose(),Pe.dispose(),ze.dispose(),L.dispose(),xe.dispose(),Y.dispose(),fe.dispose(),me.dispose(),oe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",sn),ue.removeEventListener("sessionend",It),Rn.stop()};function Le(C){C.preventDefault(),mu("WebGLRenderer: Context Lost."),R=!0}function Ee(){mu("WebGLRenderer: Context Restored."),R=!1;let C=nt.autoReset,W=we.enabled,ee=we.autoUpdate,J=we.needsUpdate,K=we.type;Fe(),nt.autoReset=C,we.enabled=W,we.autoUpdate=ee,we.needsUpdate=J,we.type=K}function Ae(C){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qe(C){let W=C.target;W.removeEventListener("dispose",Qe),ct(W)}function ct(C){Et(C),ze.remove(C)}function Et(C){let W=ze.get(C).programs;W!==void 0&&(W.forEach(function(ee){oe.releaseProgram(ee)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ee,J,K,He){W===null&&(W=Ye);let Ze=K.isMesh&&K.matrixWorld.determinantAffine()<0,ke=Hr(C,W,ee,J,K);te.setMaterial(J,Ze);let Xe=ee.index,et=1;if(J.wireframe===!0){if(Xe=Y.getWireframeAttribute(ee),Xe===void 0)return;et=2}let lt=ee.drawRange,gt=ee.attributes.position,Ke=lt.start*et,xt=(lt.start+lt.count)*et;He!==null&&(Ke=Math.max(Ke,He.start*et),xt=Math.min(xt,(He.start+He.count)*et)),Xe!==null?(Ke=Math.max(Ke,0),xt=Math.min(xt,Xe.count)):gt!=null&&(Ke=Math.max(Ke,0),xt=Math.min(xt,gt.count));let Xt=xt-Ke;if(Xt<0||Xt===1/0)return;fe.setup(K,J,ke,ee,Xe);let Dt,Ct=Q;if(Xe!==null&&(Dt=A.get(Xe),Ct=be,Ct.setIndex(Dt)),K.isMesh)J.wireframe===!0?(te.setLineWidth(J.wireframeLinewidth*tt()),Ct.setMode(z.LINES)):Ct.setMode(z.TRIANGLES);else if(K.isLine){let un=J.linewidth;un===void 0&&(un=1),te.setLineWidth(un*tt()),K.isLineSegments?Ct.setMode(z.LINES):K.isLineLoop?Ct.setMode(z.LINE_LOOP):Ct.setMode(z.LINE_STRIP)}else K.isPoints?Ct.setMode(z.POINTS):K.isSprite&&Ct.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))Ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let un=K._multiDrawStarts,je=K._multiDrawCounts,Mn=K._multiDrawCount,St=Xe?A.get(Xe).bytesPerElement:1,ws=ze.get(J).currentProgram.getUniforms();for(let dn=0;dn<Mn;dn++)ws.setValue(z,"_gl_DrawID",dn),Ct.render(un[dn]/St,je[dn])}else if(K.isInstancedMesh)Ct.renderInstances(Ke,Xt,K.count);else if(ee.isInstancedBufferGeometry){let un=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,je=Math.min(ee.instanceCount,un);Ct.renderInstances(Ke,Xt,je)}else Ct.render(Ke,Xt)};function Nt(C,W,ee,J){I!==null&&C.isNodeMaterial&&I.setObject(J,C),Te===!0&&se.setState(C,ee,!1),C.transparent===!0&&C.side===Wn&&C.forceSinglePass===!1?(C.side=qt,C.needsUpdate=!0,At(C,W,J),C.side=es,C.needsUpdate=!0,At(C,W,J),C.side=Wn):At(C,W,J)}this.compile=function(C,W,ee=null){ee===null&&(ee=C),I!==null&&I.renderStart(C,W,ee),T=ie.get(ee),T.init(W),y.push(T),ee.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),C!==ee&&C.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),ge=this.localClippingEnabled,Te=se.init(this.clippingPlanes,ge),Te===!0&&se.setGlobalState(this.clippingPlanes,W),I!==null&&we.render(T.state.shadowsArray,ee,W);let J=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let He=K.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){let ke=He[Ze];Nt(ke,ee,W,K),J.add(ke)}else Nt(He,ee,W,K),J.add(He)}),T=y.pop(),I!==null&&I.renderEnd(),J},this.compileAsync=function(C,W,ee=null){let J=this.compile(C,W,ee);return new Promise(K=>{function He(){if(J.forEach(function(Ze){let Xe=ze.get(Ze).currentProgram;(Xe===void 0||Xe.isReady())&&J.delete(Ze)}),J.size===0){K(C);return}setTimeout(He,10)}Ce.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Rt=null;function Dn(C){Rt&&Rt(C)}function sn(){Rn.stop()}function It(){Rn.start()}let Rn=new Dp;Rn.setAnimationLoop(Dn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(C){Rt=C,ue.setAnimationLoop(C),C===null?Rn.stop():Rn.start()},ue.addEventListener("sessionstart",sn),ue.addEventListener("sessionend",It),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(C,W);let ee=ue.enabled===!0&&ue.isPresenting===!0,J=w!==null&&($===null||ee)&&w.begin(E,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(W),W=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,W,$),T=ie.get(C,y.length),T.init(W),T.state.textureUnits=Pe.getTextureUnits(),y.push(T),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Me.setFromArrayCamera(W):le.setFromProjectionMatrix(de,Gn,W.reversedDepth),ge=this.localClippingEnabled,Te=se.init(this.clippingPlanes,ge),b=Se.get(C,v.length),b.init(),v.push(b),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Ze=E.xr.getDepthSensingMesh();Ze!==null&&ai(Ze,W,-1/0,E.sortObjects)}ai(C,W,0,E.sortObjects),b.finish(),I!==null&&I.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(Re,$e),Ve=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ve&&U.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),Te===!0&&se.beginShadows();let K=T.state.shadowsArray;if(we.render(K,C,W),Te===!0&&se.endShadows(),(J&&w.hasRenderPass())===!1){let Ze=b.opaque,ke=b.transmissive;if(T.setupLights(),W.isArrayCamera){let Xe=W.cameras;if(ke.length>0)for(let et=0,lt=Xe.length;et<lt;et++){let gt=Xe[et];X(Ze,ke,C,gt)}Ve&&U.render(C);for(let et=0,lt=Xe.length;et<lt;et++){let gt=Xe[et];Zn(b,C,gt,gt.viewport)}}else ke.length>0&&X(Ze,ke,C,W),Ve&&U.render(C),Zn(b,C,W)}$!==null&&H===0&&(Pe.updateMultisampleRenderTarget($),Pe.updateRenderTargetMipmap($)),J&&w.end(E),C.isScene===!0&&C.onAfterRender(E,C,W),fe.resetDefaultState(),N=-1,V=null,y.pop(),y.length>0?(T=y[y.length-1],Pe.setTextureUnits(T.state.textureUnits),Te===!0&&se.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,I!==null&&I.renderEnd()};function ai(C,W,ee,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){let Ze=W.isArrayCamera?Me:le;if(!C.frustumCulled||C.intersectsFrustum(Ze)){J&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);let ke=xe.update(C),Xe=C.material;Xe.visible&&b.push(C,ke,Xe,ee,Ue.z,null,W)}}else if(C.isMesh||C.isLine||C.isPoints){let Ze=W.isArrayCamera?Me:le;if(!C.frustumCulled||C.intersectsFrustum(Ze)){let ke=xe.update(C),Xe=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Ue.copy(ke.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Xe)){let et=ke.groups;for(let lt=0,gt=et.length;lt<gt;lt++){let Ke=et[lt],xt=Xe[Ke.materialIndex];xt&&xt.visible&&b.push(C,ke,xt,ee,Ue.z,Ke,W)}}else Xe.visible&&b.push(C,ke,Xe,ee,Ue.z,null,W)}}}let He=C.children;for(let Ze=0,ke=He.length;Ze<ke;Ze++)ai(He[Ze],W,ee,J)}function Zn(C,W,ee,J){let{opaque:K,transmissive:He,transparent:Ze}=C;T.setupLightsView(ee),Te===!0&&se.setGlobalState(E.clippingPlanes,ee),J&&te.viewport(k.copy(J)),K.length>0&&Ie(K,W,ee),He.length>0&&Ie(He,W,ee),Ze.length>0&&Ie(Ze,W,ee),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function X(C,W,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Ke=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new Un(1,1,{generateMipmaps:!0,type:Ke?ni:kn,minFilter:Di,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let He=T.state.transmissionRenderTarget[J.id],Ze=J.viewport||k;He.setSize(Ze.z*E.transmissionResolutionScale,Ze.w*E.transmissionResolutionScale);let ke=E.getRenderTarget(),Xe=E.getActiveCubeFace(),et=E.getActiveMipmapLevel();E.setRenderTarget(He),E.getClearColor(q),he=E.getClearAlpha(),he<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&U.render(ee);let lt=E.toneMapping;E.toneMapping=di;let gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),Te===!0&&se.setGlobalState(E.clippingPlanes,J),Ie(C,ee,J),Pe.updateMultisampleRenderTarget(He),Pe.updateRenderTargetMipmap(He),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let xt=0,Xt=W.length;xt<Xt;xt++){let Dt=W[xt],{object:Ct,geometry:un,material:je,group:Mn}=Dt;if(je.side===Wn&&Ct.layers.test(J.layers)){let St=je.side;je.side=qt,je.needsUpdate=!0,st(Ct,ee,J,un,je,Mn),je.side=St,je.needsUpdate=!0,Ke=!0}}Ke===!0&&(Pe.updateMultisampleRenderTarget(He),Pe.updateRenderTargetMipmap(He))}E.setRenderTarget(ke,Xe,et),E.setClearColor(q,he),gt!==void 0&&(J.viewport=gt),E.toneMapping=lt}function Ie(C,W,ee){let J=W.isScene===!0?W.overrideMaterial:null;for(let K=0,He=C.length;K<He;K++){let Ze=C[K],{object:ke,geometry:Xe,group:et}=Ze,lt=Ze.material;lt.allowOverride===!0&&J!==null&&(lt=J),ke.layers.test(ee.layers)&&st(ke,W,ee,Xe,lt,et)}}function st(C,W,ee,J,K,He){I!==null&&K.isNodeMaterial&&I.setObject(C,K),C.onBeforeRender(E,W,ee,J,K,He),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(E,W,ee,J,C,He),K.transparent===!0&&K.side===Wn&&K.forceSinglePass===!1?(K.side=qt,K.needsUpdate=!0,E.renderBufferDirect(ee,W,J,K,C,He),K.side=es,K.needsUpdate=!0,E.renderBufferDirect(ee,W,J,K,C,He),K.side=Wn):E.renderBufferDirect(ee,W,J,K,C,He),C.onAfterRender(E,W,ee,J,K,He)}function Lt(C){let W=0;for(let ee of C)ee.texture!==null&&W++;return W}function At(C,W,ee){W.isScene!==!0&&(W=Ye);let J=ze.get(C),K=T.state.lights,He=T.state.shadowsArray,Ze=K.state.version,ke=oe.getParameters(C,K.state,He,W,ee,T.state.lightProbeGridArray),Xe=oe.getProgramCacheKey(ke),et=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;let lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=L.get(C.envMap||J.environment,lt),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",Qe),et=new Map,J.programs=et,J.programVariants=new Map);let gt=et.get(Xe);if(gt!==void 0){if(J.currentProgram===gt&&J.lightsStateVersion===Ze)return zn(C,ke),gt}else ke.uniforms=oe.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,ee,ke),C.onBeforeCompile(ke,E),gt=oe.acquireProgram(ke,Xe),et.set(Xe,gt),J.uniforms=ke.uniforms;let Ke=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=se.uniform),zn(C,ke),J.needsLights=uh(C),J.lightsStateVersion=Ze,J.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.sunLights.value=K.state.sun,Ke.sunLightShadows.value=K.state.sunShadow,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.sunShadowMatrix.value=K.state.sunShadowMatrix,Ke.sunShadowCascade.value=K.state.sunShadowCascade,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),J.numLightProbeGrids=Lt(T.state.lightProbeGridArray),J.currentProgram=gt,J.uniformsList=null,gt}function Ot(C,W,ee,J,K){let He=ze.get(C),Ze=He.currentProgram.id+","+J+","+K,ke=He.programVariants.get(Ze);return ke===void 0?(ke=At(C,W,ee),He.programVariants.set(Ze,ke)):(He.currentProgram=ke,He.uniformsList=null,He.outputColorSpace=J,He.toneMapping=K),ke}function _t(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Rr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function zn(C,W){let ee=ze.get(C);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Hr(C,W,ee,J,K){W.isScene!==!0&&(W=Ye),Pe.resetTextureUnits();let He=W.fog,Ze=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,ke=$===null?E.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:vt.workingColorSpace,Xe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,et=L.get(J.envMap||Ze,Xe),lt=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,gt=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ke=!!ee.morphAttributes.position,xt=!!ee.morphAttributes.normal,Xt=!!ee.morphAttributes.color,Dt=di;J.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Dt=E.toneMapping);let Ct=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,un=Ct!==void 0?Ct.length:0,je=ze.get(J),Mn=T.state.lights;if(Te===!0&&(ge===!0||C!==V)){let zt=C===V&&J.id===N;se.setState(J,C,zt)}let St=!1,ws=!1;J.version===je.__version?je.needsLights&&je.lightsStateVersion!==Mn.state.version||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==et||J.fog===!0&&je.fog!==He||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==se.numPlanes||je.numIntersection!==se.numIntersection)||je.vertexAlphas!==lt||je.vertexTangents!==gt||je.morphTargets!==Ke||je.morphNormals!==xt||je.morphColors!==Xt||je.morphTargetsCount!==un||je.numLightProbeGrids!==Lt(T.state.lightProbeGridArray)?St=!0:(je.outputColorSpace!==ke||je.toneMapping!==Dt)&&(ws=!0):(St=!0,je.__version=J.version);let dn=je.currentProgram;(St===!0||ws===!0)&&(dn=ws===!0?Ot(J,W,K,ke,Dt):At(J,W,K),I&&J.isNodeMaterial&&I.onUpdateProgram(J,dn,je));let ua=!1,Vi=!1,Ts=!1,yt=dn.getUniforms(),rn=je.uniforms;if(te.useProgram(dn.program)&&(ua=!0,Vi=!0,Ts=!0),J.id!==N&&(N=J.id,Vi=!0),ua||V!==C){te.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(z,"projectionMatrix",C.projectionMatrix),yt.setValue(z,"viewMatrix",C.matrixWorldInverse);let Qt=yt.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,Be.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&yt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,Vi=!0,Ts=!0)}if(je.needsLights&&(Mn.state.sunShadowMap.length>0&&yt.setValue(z,"sunShadowMap",Mn.state.sunShadowMap,Pe),Mn.state.directionalShadowMap.length>0&&yt.setValue(z,"directionalShadowMap",Mn.state.directionalShadowMap,Pe),Mn.state.spotShadowMap.length>0&&yt.setValue(z,"spotShadowMap",Mn.state.spotShadowMap,Pe),Mn.state.pointShadowMap.length>0&&yt.setValue(z,"pointShadowMap",Mn.state.pointShadowMap,Pe)),K.isSkinnedMesh){yt.setOptional(z,K,"bindMatrix"),yt.setOptional(z,K,"bindMatrixInverse");let zt=K.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),yt.setValue(z,"boneTexture",zt.boneTexture,Pe))}K.isBatchedMesh&&(yt.setOptional(z,K,"batchingTexture"),yt.setValue(z,"batchingTexture",K._matricesTexture,Pe),yt.setOptional(z,K,"batchingIdTexture"),yt.setValue(z,"batchingIdTexture",K._indirectTexture,Pe),yt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&yt.setValue(z,"batchingColorTexture",K._colorsTexture,Pe));let Jn=ee.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&ne.update(K,ee,dn),(Vi||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,yt.setValue(z,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(rn.envMapIntensity.value=W.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=D1()),Vi){if(yt.setValue(z,"toneMappingExposure",E.toneMappingExposure),je.needsLights&&Js(rn,Ts),He&&J.fog===!0&&ve.refreshFogUniforms(rn,He),ve.refreshMaterialUniforms(rn,J,j,Ge,T.state.transmissionRenderTarget[C.id]),je.needsLights&&je.numLightProbeGrids>0){let zt=M,Qt=0;for(let bi of T.state.lightProbeGridArray)bi.texture!==null&&(zt.textures[Qt]=bi.texture,zt.min[Qt]=bi.boundingBox.min,zt.max[Qt]=bi.boundingBox.max,zt.resolution[Qt]=bi.resolution,Qt++);for(let bi in zt)zt[bi].length=Qt;rn.probesSH.value=zt.textures,rn.probesMin.value=zt.min,rn.probesMax.value=zt.max,rn.probesResolution.value=zt.resolution}Rr.upload(z,_t(je),rn,Pe)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rr.upload(z,_t(je),rn,Pe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(z,"center",K.center),yt.setValue(z,"modelViewMatrix",K.modelViewMatrix),yt.setValue(z,"normalMatrix",K.normalMatrix),yt.setValue(z,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let zt=J.uniformsGroups;for(let Qt=0,bi=zt.length;Qt<bi;Qt++){let Hd=zt[Qt];me.update(Hd,dn),me.bind(Hd,dn)}}return dn}function Js(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function uh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,W,ee){let J=ze.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=W,ze.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let ee=ze.get(C);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ee=0){$=C,O=W,H=ee;let J=null,K=!1,He=!1;if(C){let ke=ze.get(C);if(ke.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(z.FRAMEBUFFER,ke.__webglFramebuffer),k.copy(C.viewport),ae.copy(C.scissor),re=C.scissorTest,te.viewport(k),te.scissor(ae),te.setScissorTest(re),N=-1;return}else if(ke.__webglFramebuffer===void 0)Pe.setupRenderTarget(C);else if(ke.__hasExternalTextures)Pe.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let lt=C.depthTexture;if(ke.__boundDepthTexture!==lt){if(lt!==null&&ze.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(C)}}let Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(He=!0);let et=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[W])?J=et[W][ee]:J=et[W],K=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?J=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?J=et[ee]:J=et,k.copy(C.viewport),ae.copy(C.scissor),re=C.scissorTest}else k.copy(Ne).multiplyScalar(j).floor(),ae.copy(Je).multiplyScalar(j).floor(),re=De;if(ee!==0&&(J=F),te.bindFramebuffer(z.FRAMEBUFFER,J)&&te.drawBuffers(C,J),te.viewport(k),te.scissor(ae),te.setScissorTest(re),K){let ke=ze.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,ee)}else if(He){let ke=W;for(let Xe=0;Xe<C.textures.length;Xe++){let et=ze.get(C.textures[Xe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Xe,et.__webglTexture,ee,ke)}}else if(C!==null&&ee!==0){let ke=ze.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,ee)}N=-1};function Gr(C){let W=ze.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=qe.textureFormatReadable(C.format),W.__typeReadable=qe.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,ee,J,K,He,Ze,ke=0){if(!(C&&C.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(Xe=Xe[Ze],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){te.bindFramebuffer(z.FRAMEBUFFER,Xe);try{let et=C.textures[ke],lt=et.format,gt=et.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ke);let Ke=Gr(et);if(Ke.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&ee>=0&&ee<=C.height-K&&z.readPixels(W,ee,J,K,ye.convert(lt),ye.convert(gt),He)}finally{let et=$!==null?ze.get($).__webglFramebuffer:null;te.bindFramebuffer(z.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,W,ee,J,K,He,Ze,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(Xe=Xe[Ze],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(W>=0&&W<=C.width-J&&ee>=0&&ee<=C.height-K){te.bindFramebuffer(z.FRAMEBUFFER,Xe);let et=C.textures[ke],lt=et.format,gt=et.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ke);let Ke=Gr(et);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,xt),z.bufferData(z.PIXEL_PACK_BUFFER,He.byteLength,z.STREAM_READ),z.readPixels(W,ee,J,K,ye.convert(lt),ye.convert(gt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Xt=$!==null?ze.get($).__webglFramebuffer:null;te.bindFramebuffer(z.FRAMEBUFFER,Xt);let Dt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ep(z,Dt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,xt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,He),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(xt),z.deleteSync(Dt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ee=0){let J=Math.pow(2,-ee),K=Math.floor(C.image.width*J),He=Math.floor(C.image.height*J),Ze=W!==null?W.x:0,ke=W!==null?W.y:0;Pe.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Ze,ke,K,He),te.unbindTexture()},this.copyTextureToTexture=function(C,W,ee=null,J=null,K=0,He=0){let Ze,ke,Xe,et,lt,gt,Ke,xt,Xt,Dt=C.isCompressedTexture?C.mipmaps[He]:C.image;if(ee!==null)Ze=ee.max.x-ee.min.x,ke=ee.max.y-ee.min.y,Xe=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,lt=ee.min.y,gt=ee.isBox3?ee.min.z:0;else{let yt=Math.pow(2,-K);Ze=Math.floor(Dt.width*yt),ke=Math.floor(Dt.height*yt),C.isDataArrayTexture?Xe=Dt.depth:C.isData3DTexture?Xe=Math.floor(Dt.depth*yt):Xe=1,et=0,lt=0,gt=0}J!==null?(Ke=J.x,xt=J.y,Xt=J.z):(Ke=0,xt=0,Xt=0);let Ct=ye.convert(W.format),un=ye.convert(W.type),je;W.isData3DTexture?(Pe.setTexture3D(W,0),je=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Pe.setTexture2DArray(W,0),je=z.TEXTURE_2D_ARRAY):(Pe.setTexture2D(W,0),je=z.TEXTURE_2D),te.activeTexture(z.TEXTURE0),te.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),te.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),te.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let Mn=te.getParameter(z.UNPACK_ROW_LENGTH),St=te.getParameter(z.UNPACK_IMAGE_HEIGHT),ws=te.getParameter(z.UNPACK_SKIP_PIXELS),dn=te.getParameter(z.UNPACK_SKIP_ROWS),ua=te.getParameter(z.UNPACK_SKIP_IMAGES);te.pixelStorei(z.UNPACK_ROW_LENGTH,Dt.width),te.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt.height),te.pixelStorei(z.UNPACK_SKIP_PIXELS,et),te.pixelStorei(z.UNPACK_SKIP_ROWS,lt),te.pixelStorei(z.UNPACK_SKIP_IMAGES,gt);let Vi=C.isDataArrayTexture||C.isData3DTexture,Ts=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let yt=ze.get(C),rn=ze.get(W),Jn=ze.get(yt.__renderTarget),zt=ze.get(rn.__renderTarget);te.bindFramebuffer(z.READ_FRAMEBUFFER,Jn.__webglFramebuffer),te.bindFramebuffer(z.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Qt=0;Qt<Xe;Qt++)Vi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,K,gt+Qt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(W).__webglTexture,He,Xt+Qt)),z.blitFramebuffer(et,lt,et+Ze,lt+ke,Ke,xt,Ke+Ze,xt+ke,z.DEPTH_BUFFER_BIT,z.NEAREST);te.bindFramebuffer(z.READ_FRAMEBUFFER,null),te.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||ze.has(C)){let yt=ze.get(C),rn=ze.get(W);te.bindFramebuffer(z.READ_FRAMEBUFFER,P),te.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let Jn=0;Jn<Xe;Jn++)Vi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yt.__webglTexture,K,gt+Jn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yt.__webglTexture,K),Ts?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,He,Xt+Jn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,He),K!==0?z.blitFramebuffer(et,lt,et+Ze,lt+ke,Ke,xt,Ke+Ze,xt+ke,z.COLOR_BUFFER_BIT,z.NEAREST):Ts?z.copyTexSubImage3D(je,He,Ke,xt,Xt+Jn,et,lt,Ze,ke):z.copyTexSubImage2D(je,He,Ke,xt,et,lt,Ze,ke);te.bindFramebuffer(z.READ_FRAMEBUFFER,null),te.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ts?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(je,He,Ke,xt,Xt,Ze,ke,Xe,Ct,un,Dt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(je,He,Ke,xt,Xt,Ze,ke,Xe,Ct,Dt.data):z.texSubImage3D(je,He,Ke,xt,Xt,Ze,ke,Xe,Ct,un,Dt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,He,Ke,xt,Ze,ke,Ct,un,Dt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,He,Ke,xt,Dt.width,Dt.height,Ct,Dt.data):z.texSubImage2D(z.TEXTURE_2D,He,Ke,xt,Ze,ke,Ct,un,Dt);te.pixelStorei(z.UNPACK_ROW_LENGTH,Mn),te.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),te.pixelStorei(z.UNPACK_SKIP_PIXELS,ws),te.pixelStorei(z.UNPACK_SKIP_ROWS,dn),te.pixelStorei(z.UNPACK_SKIP_IMAGES,ua),He===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&z.generateMipmap(je),te.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){O=0,H=0,$=null,te.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var ce={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.3,halfLife:.07},slamShake:{amount:.06,time:.18,hz:24},recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.2,slamSquashTime:.15,thudVolume:.75,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:11.2,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:6.5,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.1,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4}};function fc({step:n,render:e,before:t,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,h=!1;function c(x){if(!(x>0)||!Number.isFinite(x))return;t&&t(x),o+=x;let p=0;for(;o>=r&&p<s;)n(r),o-=r,p++;o>=r&&(o=0),e(Math.min(o/r,1-Number.EPSILON),x)}function f(x){if(h){try{l!==null&&c((x-l)/1e3)}catch(p){throw m(),p}l=x,h&&(a=requestAnimationFrame(f))}}function u(){document.visibilityState==="visible"&&(l=null)}function d(){h||(h=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(f))}function m(){h=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:c,start:d,stop:m}}var Bu=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),N1={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},O1={0:"fire",2:"aim"},Wp={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},Xp={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},U1=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function zu(n){if(!n||typeof n.tagName!="string")return!1;let e=n.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!U1.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function Yp(n){return N1[n]||null}function qp(n){return O1[n]||null}function Pr(){let n={};for(let e of Bu)n[e]=!1;return n}function $p(n,e,t=.15){let i=Math.hypot(n,e);if(i<t)return[0,0];let s=Math.min(1,(i-t)/(1-t))/i;return[n*s,e*s]}function F1(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,t]=$p(n.axes[0],n.axes[1]),[i,s]=$p(n.axes[2],n.axes[3]),r=Pr();for(let o in Wp){let a=n.buttons[o];r[Wp[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:t,lookX:i,lookY:s,held:r}}function k1(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let e of Bu)n.held[e]=!1;for(let e in n.held)n.held[e]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function pc(n){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:Pr(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:t,downButtons:i,latched:s}=e,r="kbm",o="none",a=Pr();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,h=()=>l()||document.activeElement===n;function c(){k1(e)}function f(b){if(zu(b.target))return;let T=Yp(b.code);(T||b.code in Xp)&&(h()&&(b.code==="Tab"||b.code==="Space")&&b.preventDefault(),r="kbm",!b.repeat&&!t.has(b.code)&&T&&s.add(T),t.add(b.code))}function u(b){t.delete(b.code)}function d(b){b.target===n&&n.focus();let T=qp(b.button);T&&(r="kbm",i.has(b.button)||s.add(T),i.add(b.button))}function m(b){i.delete(b.button)}function x(b){l()&&(r="kbm",e.lookDX+=b.movementX||0,e.lookDY+=b.movementY||0)}function p(b){!h()||!b.deltaY||(r="kbm",s.add(b.deltaY>0?"weaponNext":"weaponPrev"),b.preventDefault())}function g(b){b.preventDefault()}function _(){l()||c()}window.addEventListener("keydown",f),window.addEventListener("keyup",u),window.addEventListener("mouseup",m),window.addEventListener("blur",c),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",_),n.addEventListener("mousedown",d),n.addEventListener("wheel",p,{passive:!1}),n.addEventListener("contextmenu",g);function S(){let b=[];try{b=navigator.getGamepads&&navigator.getGamepads()||[]}catch{b=[]}let T=null;for(let y of b)if(y&&y.connected){T=y;break}let v=F1(T);return o=v.ok?T.id:v.reason==="none"?"none":"unrecognised controller",v}function M(){let b={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:Pr(),pressed:Pr()};e.lookDX=0,e.lookDY=0;for(let y of t){let w=Yp(y);w&&(b.held[w]=!0);let E=Xp[y];E&&(b.moveX+=E[0],b.moveY+=E[1])}for(let y of i){let w=qp(y);w&&(b.held[w]=!0)}let T=Math.hypot(b.moveX,b.moveY);T>1&&(b.moveX/=T,b.moveY/=T);for(let y of s)b.pressed[y]=!0;s.clear();let v=S();if(v.ok){b.lookX=v.lookX,b.lookY=v.lookY;let y=v.moveX!==0||v.moveY!==0||v.lookX!==0||v.lookY!==0;for(let E of Bu)v.held[E]&&(y=!0,b.held[E]=!0,a[E]||(b.pressed[E]=!0));a=v.held,b.moveX+=v.moveX,b.moveY+=v.moveY;let w=Math.hypot(b.moveX,b.moveY);w>1&&(b.moveX/=w,b.moveY/=w),y&&(r="pad")}else a=Pr();return b}return{poll:M,requestLock(){try{let b=n.requestPointerLock&&n.requestPointerLock();b&&typeof b.catch=="function"&&b.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Jp(n,e,t=14){let i=n;return e>20?i-=.1:e<t&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var B1=2e3,Zp=1e4,z1=8e4;function Kp({startMs:n=0,scale:e=1}={}){let t=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function h(c,f){if(f-n<B1||(i+=Math.min(c,100),s++,s<60||i<1e3))return t;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let d=Jp(t,u,Math.max(14,1.1*r));if(d>t){if(f<l)return t;o=f}else d<t&&(o!==null&&f-o<Zp&&(a=a===0?Zp:Math.min(a*2,z1),l=f+a),o=null);return t=d,t}return{sample:h,scale:()=>t}}var Z=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Hu={viewportHeight:{value:1080}};function si(n){n.getAttribute("normal")||n.computeVertexNormals();let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let h=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=h;let c=s.get(h);c||(c=[0,0,0],s.set(h,c)),c[0]+=t.getX(l),c[1]+=t.getY(l),c[2]+=t.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new wt(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let h=s.get(r[l]),c=h[0],f=h[1],u=h[2],d=Math.hypot(c,f,u);d<1e-6&&(c=t.getX(l),f=t.getY(l),u=t.getZ(l),d=Math.hypot(c,f,u)||1),a.setXYZ(l,c/d,f/d,u/d)}return a.needsUpdate=!0,n}var H1=`
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
`,G1=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function V1({px:n=ce.outlinePx,color:e=Z.ink,outlineNormal:t=!1}={}){return new vn({name:"outline",uniforms:{px:{value:n},inkColor:{value:new it(e)},viewportHeight:Hu.viewportHeight},defines:t?{USE_OUTLINE_NORMAL:""}:{},vertexShader:H1,fragmentShader:G1,side:qt})}function W1(){}var jp=new Map;function X1(n,e,t){let i=n+"|"+new it(e).getHexString()+"|"+t,s=jp.get(i);return s||(s=V1({px:n,color:e,outlineNormal:t}),jp.set(i,s)),s}function En(n,{px:e=ce.outlinePx}={}){let t=!!n.geometry.getAttribute("outlineNormal"),i=X1(e,Z.ink,t),s=new mt(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=W1,n.add(s),s}function Gu(n,e){n.traverse(t=>{t.userData.isOutline&&(t.visible=e)})}function Y1(n,e,t,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(t>0?t:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function mc(n,e){let t=new hc({canvas:n,context:e,antialias:!0,powerPreference:"high-performance"});t.outputColorSpace=on;let i=Kp({startMs:performance.now()});function s(){let o=Y1(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return t.setPixelRatio(o.pixelRatio),t.setSize(o.width,o.height,!1),Hu.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:t,resize:s,frameDone:r,scale:i.scale}}var Ui={lightDir:{value:new B(...ce.lightDir).normalize()},shadowTint:{value:new it(Z.shadowTint)},bandEdge:{value:.15},shadowLift:{value:ce.shadowLift}},q1=`
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
`,$1=`
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
`;function Vt({color:n="#ffffff",vertexColors:e=!1,shadowMix:t=.55,rim:i=.25}={}){return new vn({name:"toon",uniforms:{baseColor:{value:new it(n)},shadowMix:{value:t},rim:{value:i},lightDir:Ui.lightDir,shadowTint:Ui.shadowTint,bandEdge:Ui.bandEdge,shadowLift:Ui.shadowLift},vertexShader:q1,fragmentShader:$1,vertexColors:e})}var Z1=400,J1=[-.45,.22,-1],K1=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,j1=`
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
`;function gc({planetDir:n=J1}={}){let e=r=>new it(r),t=new vn({name:"sky",uniforms:{deep:{value:e(Z.nebulaDeep)},hot:{value:e(Z.nebulaHot)},pink:{value:e(Z.hotPink)},lilac:{value:e(Z.lilac)},ink:{value:e(Z.ink)},planetColor:{value:e(Z.planet)},shadowTint:Ui.shadowTint,shadowLift:Ui.shadowLift,bandEdge:Ui.bandEdge,lightDir:Ui.lightDir,planetDir:{value:new B(...n).normalize()},time:{value:0}},vertexShader:K1,fragmentShader:j1,side:qt,depthWrite:!1}),i=new mt(new xn(Z1,48,24),t);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){t.uniforms.time.value=r}return{mesh:i,update:s}}function yn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ft;l.morphTargetsRelative=a;let h=0;for(let c=0;c<n.length;++c){let f=n[c],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,m,c),h+=m}}if(t){let c=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+c);c+=n[u].attributes.position.count}l.setIndex(f)}for(let c in r){let f=Qp(r[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(let c in o){let f=o[c][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[c].length;++x)d.push(o[c][x][u]);let m=Qp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}}return l}function Qp(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){let c=n[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let o=new e(r),a=new wt(o,t,i),l=0;for(let h=0;h<n.length;++h){let c=n[h];if(c.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=c.count;u<d;u++)for(let m=0;m<t;m++){let x=c.getComponent(u,m);a.setComponent(u+f,m,x)}}else o.set(c.array,l);l+=c.count*t}return s!==void 0&&(a.gpuType=s),a}function tm(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],h=new Map,c=[],f=["getX","getY","getZ","getW"],u=e*.5,d=Math.log10(1/e),m=Math.pow(10,d),x=u*m;for(let g=0;g<r;g++){let _=i?i.getX(g):g,S="";for(let M=0,b=a.length;M<b;M++){let T=a[M],v=n.getAttribute(T),y=v.itemSize;for(let w=0;w<y;w++)S+=`${Math.trunc(v[f[w]](_)*m+x)},`}S in t?c.push(t[S]):(l.push(_),t[S]=o,c.push(o),o++)}let p=n.clone();for(let g in n.attributes)p.setAttribute(g,em(n.attributes[g],l,h));for(let g in n.morphAttributes)p.morphAttributes[g]=n.morphAttributes[g].map(_=>em(_,l,h));return p.setIndex(c),p}function em(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let h=0;h<e.length;h++)for(let c=0;c<r;c++)l[h*r+c]=s.array[e[h]*r+c];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function Ir(n){let e=n>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function nm(n,e,t=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new B),l=o.getCenter(new B),h=a.length(),c=Ir(e*7919+13>>>0),f=[];for(let g=0;g<8;g++)f.push(c()*2-1);let u=Math.min(t*h,i)*.99/Math.sqrt(3),d=(g,_)=>_>1e-9?2*g/_:0,m=[a.x,a.y,a.z].map(g=>g>1e-9?2/g:0),x=new at,p=new B;for(let g=0;g<s.count;g++){let _=d(s.getX(g)-l.x,a.x),S=d(s.getY(g)-l.y,a.y),M=d(s.getZ(g)-l.z,a.z),b=(S+1)/2,T=(f[0]*S+f[1]*_*S)/2,v=(f[2]*_+f[3]*M)/2*b,y=(f[4]*S+f[5]*M*S)/2;if(r){let w=[f[1]*S/2,(f[0]+f[1]*_)/2,0],E=[f[2]/2*b,(f[2]*_+f[3]*M)/2*.5,f[3]/2*b],R=[0,(f[4]+f[5]*M)/2,f[5]*S/2];x.set(1+u*w[0]*m[0],u*w[1]*m[1],u*w[2]*m[2],u*E[0]*m[0],1+u*E[1]*m[1],u*E[2]*m[2],u*R[0]*m[0],u*R[1]*m[1],1+u*R[2]*m[2]),x.invert().transpose(),p.set(r.getX(g),r.getY(g),r.getZ(g)).applyMatrix3(x).normalize(),r.setXYZ(g,p.x,p.y,p.z)}s.setXYZ(g,s.getX(g)+u*T,s.getY(g)+u*v,s.getZ(g)+u*y)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var Vu=null;function Q1(){return Vu||(Vu=Vt({vertexColors:!0})),Vu}var Xu=(n,e,t)=>new it(n).lerp(new it(e),t),Yu=(n,e=.3)=>Xu(n,"#ffffff",e),xc=(n,e=.2)=>Xu(n,Z.shadowTint,e),im=new pt,sm=new bn,rm=new Cn,eS=new B,tS=new B;function ns(n=1,e=.02,t="prop"){let i=[],s=0;function r(c,f,u={}){let d=c.index?c.toNonIndexed():c;d.deleteAttribute("uv");let m=u.wonk===void 0?e:u.wonk;m>0&&nm(d,n*131+s,m),s++;let x=d.getAttribute("normal"),p=new Float32Array(x.count*3);for(let g=0;g<x.count;g++){let _=typeof f=="function"?f(x.getX(g),x.getY(g),x.getZ(g)):f;p[g*3]=_.r,p[g*3+1]=_.g,p[g*3+2]=_.b}return d.setAttribute("color",new wt(p,3)),(u.sx||u.sy||u.sz)&&d.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&d.applyMatrix4(u.m),rm.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),sm.setFromEuler(rm),im.compose(eS.set(u.x||0,u.y||0,u.z||0),sm,tS.set(1,1,1)),d.applyMatrix4(im),i.push(d),d}function o(c,f={}){let u=f.top||Yu(c),d=f.side||xc(c,.22),m=xc(c,.4),x=new it(c);return(p,g,_)=>g>.5?u:g<-.5?m:Math.abs(p)>.5?d:_>0?x:m}function a(c,f,u,d,m={}){return r(new Pt(c,f,u),o(d,m),m)}function l(c,f,u,d,m,x,p,g={}){return a(f-c,d-u,x-m,p,{...g,x:(c+f)/2,y:(u+d)/2,z:(m+x)/2})}function h(c=0){let f=yn(i,!1);if(!f)throw new Error(`${t}: parts have different attributes and cannot be merged`);return c>0&&nm(f,n,c),si(f)}return{add:r,box:a,span:l,facePaint:o,finish:h}}function is(n){let e=new Mt,t=new mt(n,Q1());return En(t),e.add(t),e}var Fi=n=>()=>new it(n);function vc({w:n,d:e,tile:t=1,colors:i=[Z.cream,Z.tealLight]}){let s=ns(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-e/2,e/2,Z.lilac,{top:new it(Z.lilac)});let o=Math.round(n/t),a=Math.round(e/t);for(let l=0;l<o;l++)for(let h=0;h<a;h++){let c=new Ji(t,t);c.rotateX(-Math.PI/2),s.add(c,Fi(i[(l+h)%2]),{wonk:0,x:-n/2+(l+.5)*t,y:0,z:-e/2+(h+.5)*t})}return is(s.finish())}function qu({w:n,h:e,color:t=Z.cream,stripe:i=Z.hotPink,opening:s=null,seed:r=2}){let o=ns(r,0,"wall"),a=.2,l=a/2,h=-n/2,c=n/2,f=-.3,u=new _r;if(u.moveTo(h,f),u.lineTo(c,f),u.lineTo(c,e),u.lineTo(h,e),u.closePath(),s){let g=new Os,_=s.x-s.w/2,S=s.x+s.w/2;g.moveTo(_,s.y),g.lineTo(_,s.y+s.h),g.lineTo(S,s.y+s.h),g.lineTo(S,s.y),g.closePath(),u.holes.push(g)}let d=new To(u,{depth:a,bevelEnabled:!1});d.translate(0,0,-l),o.add(d,o.facePaint(t),{wonk:0}),o.span(h,c,f,.28,-l,l+.04,Z.lilac),o.span(h-.05,c+.05,e-.1,e+.12,-l-.06,l+.08,Z.teal);let m=.5,x=.8;return s&&s.y<x&&s.y+s.h>m?(o.span(h,s.x-s.w/2,m,x,l-.01,l+.03,i),o.span(s.x+s.w/2,c,m,x,l-.01,l+.03,i)):o.span(h,c,m,x,l-.01,l+.03,i),is(o.finish(.006))}function nS(n,e,t,i){let s=p=>Math.min(2048,Math.max(64,Math.round(p))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),h='"Arial Black", Impact, sans-serif';l.font=`100px ${h}`;let c=n.split(" "),f=[[n]];for(let p=1;p<c.length;p++)f.push([c.slice(0,p).join(" "),c.slice(p).join(" ")]);let u=null;for(let p of f){let g=Math.max(...p.map(S=>l.measureText(S).width)),_=Math.min(r*.88*100/g,o*.8/(p.length*1.08));(!u||_>u.size)&&(u={lines:p,size:_})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=t,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${h}`,l.textAlign="center",l.textBaseline="middle";let d=u.size*1.08,m=o/2-(u.lines.length-1)*d/2;u.lines.forEach((p,g)=>{let _=m+g*d;l.fillStyle=Z.ink,l.fillText(p,r/2+u.size*.05,_+u.size*.06),l.fillStyle=t,l.fillText(p,r/2,_)});let x=new fo(a);return x.colorSpace=on,x.anisotropy=8,x}function _c({text:n,w:e,h:t,bg:i=Z.hotPink,fg:s=Z.cream,tilt:r=.04,seed:o=3}){let h=ns(o,0,"sign");h.box(e,t,.14,s,{wonk:0});let c=is(h.finish()),f=e-.14*2,u=t-.14*2,d=new mt(new Ji(f,u),new Ii({map:nS(n,i,s,f/u),toneMapped:!1}));return d.name="signFace",d.position.z=.14/2+.008,c.add(d),c.rotation.z=r,c}function om({w:n,h:e,seed:t=4}){let i=ns(t,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,e,-r/2,r/2,Z.teal),i.span(n/2-s,n/2,0,e,-r/2,r/2,Z.teal),i.span(-n/2+s,n/2-s,e-s,e,-r/2,r/2,Z.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,Z.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,Z.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,Z.cream),i.span(-n/2+s,n/2-s,e/2-.04,e/2+.04,-.04,.04,Z.cream),is(i.finish(.006))}function Vo(n,e,t,i,s,r){let o=new Fs(.16,.05,8,20);n.add(o,Fi(Z.planet),{wonk:.04,x:e,y:t,z:i,rx:-Math.PI/2+s,ry:r})}function am({w:n,h:e,name:t,signColor:i=Z.hotPink,seed:s=5}){let r=ns(s,.012,"shopFront"),o=.5,a=.5,l=e,h=e-1.4,c=Xu(Z.glorpPurple,Z.ink,.7);r.span(-n/2+a,n/2-a,0,h,-o/2,-o/2+.1,c),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,Z.lilac);for(let g of[-1,1]){let _=g*(n/2-a/2);r.span(_-a/2,_+a/2,0,h,-o/2,o/2,Z.lilac),r.span(_-a/2-.04,_+a/2+.04,0,.3,-o/2,o/2+.04,Z.teal)}r.span(-n/2,n/2,h,l,-o/2,o/2,Z.teal);let f=n-a*2-.1;r.span(-f/2,f/2,0,.86,.02,o/2+.3,Z.hotPink),r.span(-f/2,f/2,0,.12,.02,o/2+.34,Z.lilac),r.span(-f/2-.06,f/2+.06,.86,.96,0,o/2+.42,Z.cream),Vo(r,-.9,1.01,.4,.1,.4),Vo(r,-.2,1.01,.5,-.1,-.3),Vo(r,.6,1.01,.38,.12,.9),Vo(r,1.2,1.01,.52,0,.1);let u=10,d=(n-.1)/u,m=.42;for(let g=0;g<u;g++){let _=g%2?Z.cream:i,S=-n/2+.05+(g+.5)*d;r.box(d,.08,.95,_,{x:S,y:h-.02,z:o/2+.35,rx:m,top:Yu(_,.2)}),r.box(d,.22,.06,_,{x:S,y:h-.24,z:o/2+.8,rx:.1})}let x=is(r.finish(.006)),p=_c({text:t,w:n-.7,h:1.15,bg:i,fg:Z.cream,seed:s+1});return p.position.set(0,h+.7,o/2+.01),x.add(p),x}function lm({w:n=2,d:e=1,h:t=.9,color:i=Z.teal,seed:s=7}={}){let r=ns(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-e/2+.03,e/2-.03,Z.lilac),r.span(-n/2,n/2,.16,t-.08,-e/2,e/2,i),r.span(-n/2-.07,n/2+.07,t-.08,t,-e/2-.07,e/2+.07,Z.cream);let o=4,a=(n-.3)/o;for(let h=0;h<o;h++){let c=h%2?Z.cream:Z.hotPink;r.box(a-.04,t-.45,.05,c,{x:-n/2+.15+(h+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,Z.glorpPurple,{x:-.55,y:t+.14,z:-.1}),r.box(.3,.14,.04,Z.gel,{x:-.55,y:t+.28,z:.07,rx:-.5,wonk:0}),Vo(r,.45,t+.06,.05,.1,.5);let l=is(r.finish(.006));return l.userData.footprint={w:n+.14,d:e+.14},l}function cm({w:n=1.8,seed:e=11}={}){let t=ns(e,.02,"bench"),i=.5;t.box(n,.1,i,Z.lilac,{y:.46}),t.box(n,.42,.08,Z.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])t.box(.1,.46,i-.06,Z.teal,{x:r*(n/2-.2),y:.23}),t.box(.08,.5,.08,Z.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=is(t.finish(.006));return s.userData.footprint={w:n,d:i},s}function iS(n,e,t){let i=new Pt(.035,n,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+t*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function hm({seed:n=21}={}){let e=ns(n,.02,"planter"),t=Ir(n);e.add(new gn(.42,.32,.55,16),Fi(Z.teal),{y:.275}),e.add(new gn(.47,.44,.12,16),Fi(Z.hotPink),{y:.6}),e.add(new gn(.4,.4,.04,16),Fi(xc(Z.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=xc(Z.planet,.15);for(let l=0;l<6;l++)e.add(new gn(.06-l*.004,.07-l*.004,.34,8),Fi(l%2?Yu(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let h=l/o*Math.PI*2+t()*.3,c=l%2?.95+t()*.25:1.45+t()*.25,f=new pt().makeTranslation(i,s,0).multiply(new pt().makeRotationY(h)).multiply(new pt().makeRotationZ(-c));e.add(iS(.95,.24,l%2?.22:.4),Fi(l%2?Z.gel:Z.teal),{m:f,wonk:.03})}e.add(new xn(.1,10,8),Fi(Z.planet),{x:i,y:s-.05,z:.08}),e.add(new xn(.1,10,8),Fi(Z.planet),{x:i+.07,y:s-.1,z:-.07});let a=is(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Wu=null;function yc({rx:n,rz:e,opacity:t=.35}){let r=new it(Z.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,t];for(let f=1;f<=8;f++){let u=f/8,d=t*(1-u*u*(3-2*u));for(let m=0;m<28;m++){let x=m/28*Math.PI*2;o.push(Math.cos(x)*n*u,0,Math.sin(x)*e*u),a.push(r.r,r.g,r.b,d)}}let l=[];for(let f=0;f<28;f++)l.push(0,1+(f+1)%28,1+f);for(let f=1;f<8;f++){let u=1+(f-1)*28,d=1+f*28;for(let m=0;m<28;m++){let x=(m+1)%28;l.push(u+m,u+x,d+m,u+x,d+x,d+m)}}let h=new Ft;h.setAttribute("position",new dt(o,3)),h.setAttribute("color",new dt(a,4)),h.setIndex(l),Wu||(Wu=new Ii({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let c=new mt(h,Wu);return c.name="blobShadow",c.position.y=.012,c}var Wo=8,Mc=Wo/2,$u=.2;function um(){let n=new Mt;n.add(vc({w:Wo,d:Wo}));let e=qu({w:Wo+$u*2,h:4});e.position.set(0,0,-Mc-$u/2),n.add(e);let t=1.3,i=am({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:Z.hotPink});i.position.set(t,0,-Mc+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=qu({w:Wo,h:4,color:"#f1e6ff",opening:s});r.position.set(-Mc-$u/2,0,0),r.rotation.y=Math.PI/2;let o=om({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=lm({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=cm({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let h=hm({seed:21});h.position.set(-2.95,0,-2.9),n.add(a,l,h);let c=(f,u,d,m,x=0)=>{let p=yc({rx:d,rz:m,opacity:.7});p.position.x=f,p.position.z=u,p.rotation.y=x,n.add(p)};return c(a.position.x,a.position.z,1.3,.95,a.rotation.y),c(l.position.x+.2,l.position.z,.6,1.2),c(h.position.x,h.position.z,.95,.95),c(t,-Mc+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function An(n,e,t,i){if(!(t>0)||!(i>0))return t>0||(n.x=e,n.v=0),n;let s=4*Math.LN2/t/2,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i),n}function Zu(n,e,t,i,s,r){let o=t+i,a=e[0]-n[0],l=e[1]-n[1],h=e[2]-n[2],c=Math.hypot(a,l,h);c<1e-9?(a=0,l=-1,h=0,c=0):(a/=c,l/=c,h/=c);let f=1.15*o,u=e[0],d=e[1],m=e[2];c>f&&(c=f,u=n[0]+a*c,d=n[1]+l*c,m=n[2]+h*c);let x=c>o?c/o:1;if(c>=o){let y=c*(o>0?t/o:.5);return dm(r,n[0]+a*y,n[1]+l*y,n[2]+h*y,u,d,m,x)}let p=Math.max(c,1e-6),g=Math.min(Math.max((p*p+t*t-i*i)/(2*p),-t),t),_=Math.sqrt(Math.max(t*t-g*g,0)),S=s[0],M=s[1],b=s[2],T=S*a+M*l+b*h;S-=a*T,M-=l*T,b-=h*T;let v=Math.hypot(S,M,b);return v<1e-6&&(Math.abs(a)<.9?(S=0,M=h,b=-l):(S=-h,M=0,b=a),v=Math.hypot(S,M,b)||1),S/=v,M/=v,b/=v,dm(r,n[0]+a*g+S*_,n[1]+l*g+M*_,n[2]+h*g+b*_,u,d,m,x)}function dm(n,e,t,i,s,r,o,a){if(!n)return{mid:[e,t,i],end:[s,r,o],stretch:a};let l=n.mid,h=n.end;return l[0]=e,l[1]=t,l[2]=i,h[0]=s,h[1]=r,h[2]=o,n.stretch=a,n}var fm=[.65,1.2];function Ju({radius:n=.06,rings:e=8,sides:t=8,color:i="#ffffff"}={}){let s=e+1,r=fm.length,o=s*t,a=[o,o+r*t+1],l=o+2*(r*t+1),h=[],c=(ge,de,Be)=>{for(let Ue=0;Ue<t;Ue++){let Ye=(Ue+1)%t,Ve=ge+Ue,tt=ge+Ye,z=de+Ue,pe=de+Ye;Be?h.push(Ve,z,tt,tt,z,pe):h.push(Ve,tt,z,tt,pe,z)}};for(let ge=0;ge<e;ge++)c(ge*t,(ge+1)*t,!1);for(let ge=0;ge<2;ge++){let de=ge===0,Be=ge===0?0:e*t;for(let Ye=0;Ye<r;Ye++){let Ve=a[ge]+Ye*t;c(Be,Ve,de),Be=Ve}let Ue=a[ge]+r*t;for(let Ye=0;Ye<t;Ye++){let Ve=Be+Ye,tt=Be+(Ye+1)%t;de?h.push(Ve,Ue,tt):h.push(Ve,tt,Ue)}}let f=new Float32Array(l*3),u=new Float32Array(l*3),d=new Ft,m=new wt(f,3),x=new wt(u,3);m.setUsage(Ar),x.setUsage(Ar),d.setAttribute("position",m),d.setAttribute("normal",x),d.setIndex(h);let p=new mt(d,Vt({color:i}));p.name="limb";let g=new Vn(new B,n*2);d.boundingSphere=g,En(p);let _=new Float64Array(t),S=new Float64Array(t);for(let ge=0;ge<t;ge++)_[ge]=Math.cos(ge/t*Math.PI*2),S[ge]=Math.sin(ge/t*Math.PI*2);let M=0,b=-1,T=0,v=1,y=0,w=0,E=0,R=0,I=1,F=0,P=0,G=0,O=0,H=0,$=0,N=0,V=0,k=0,ae=0,re=0,q=0,he=0,_e=0,Ge=0,j=0,Re=0,$e=0;function Ne(ge,de,Be,Ue,Ye,Ve,tt,z,pe,Ce,qe,te,nt,ze,Pe,L){for(let A=0;A<t;A++){let Y=_[A]*Ve+S[A]*pe,xe=_[A]*tt+S[A]*Ce,oe=_[A]*z+S[A]*qe,ve=(ge+A)*3;f[ve]=de+Y*Ye,f[ve+1]=Be+xe*Ye,f[ve+2]=Ue+oe*Ye,u[ve]=Y*Pe+te*L,u[ve+1]=xe*Pe+nt*L,u[ve+2]=oe*Pe+ze*L}}let Je=!1,De=1,le=0,Me=0;function Te(ge,de,Be,Ue=1){let Ye=n/Math.sqrt(Ue>1?Ue:1),Ve=2*de[0]-(ge[0]+Be[0])/2,tt=2*de[1]-(ge[1]+Be[1])/2,z=2*de[2]-(ge[2]+Be[2])/2,pe=ge[0],Ce=ge[1],qe=ge[2],te=Be[0],nt=Be[1],ze=Be[2],Pe=(de[1]-Ce)*(ze-de[2])-(de[2]-qe)*(nt-de[1]),L=(de[2]-qe)*(te-de[0])-(de[0]-pe)*(ze-de[2]),A=(de[0]-pe)*(nt-de[1])-(de[1]-Ce)*(te-de[0]),Y=Math.hypot(Pe,L,A),xe=de[0]-pe,oe=de[1]-Ce,ve=de[2]-qe,Se=Math.hypot(xe,oe,ve),ie=te-de[0],se=nt-de[1],we=ze-de[2],U=!1;Y>1e-4*Se*Math.hypot(ie,se,we)&&Y>1e-12?(Pe/=Y,L/=Y,A/=Y,Je&&Pe*De+L*le+A*Me<0&&(Pe=-Pe,L=-L,A=-A),U=!0):Se>1e-9&&xe*ie+oe*se+ve*we<0&&(Ve=(pe+te)/2,tt=(Ce+nt)/2,z=(qe+ze)/2);let ne=(pe+Ve+te)/3,Q=(Ce+tt+nt)/3,be=(qe+z+ze)/3,ye=Math.max(Math.hypot(pe-ne,Ce-Q,qe-be),Math.hypot(Ve-ne,tt-Q,z-be),Math.hypot(te-ne,nt-Q,ze-be));g.center.set(ne,Q,be),g.radius=ye+n*1.5+.02;for(let fe=0;fe<s;fe++){let me=fe/e,Fe=1-me,ue=Fe*Fe,Le=2*Fe*me,Ee=me*me,Ae=ue*pe+Le*Ve+Ee*te,Qe=ue*Ce+Le*tt+Ee*nt,ct=ue*qe+Le*z+Ee*ze,Et=2*Fe*(Ve-pe)+2*me*(te-Ve),Nt=2*Fe*(tt-Ce)+2*me*(nt-tt),Rt=2*Fe*(z-qe)+2*me*(ze-z),Dn=Math.hypot(Et,Nt,Rt);if(Dn>1e-9?(M=Et/Dn,b=Nt/Dn,T=Rt/Dn):fe===0&&(M=0,b=-1,T=0),fe===0){U?(v=Pe,y=L,w=A):Je?(v=De,y=le,w=Me):(v=1,y=0,w=0);let sn=v*M+y*b+w*T;v-=M*sn,y-=b*sn,w-=T*sn;let It=Math.hypot(v,y,w);It<1e-6&&(Math.abs(M)<.9?(v=0,y=T,w=-b):(v=-T,y=0,w=M),It=Math.hypot(v,y,w)||1),v/=It,y/=It,w/=It,De=v,le=y,Me=w,Je=!0}else{let sn=v*M+y*b+w*T;v-=M*sn,y-=b*sn,w-=T*sn;let It=Math.hypot(v,y,w);It<1e-6&&(Math.abs(M)<.9?(v=0,y=T,w=-b):(v=-T,y=0,w=M),It=Math.hypot(v,y,w)||1),v/=It,y/=It,w/=It}E=b*w-T*y,R=T*v-M*w,I=M*y-b*v,Ne(fe*t,Ae,Qe,ct,Ye,v,y,w,E,R,I,0,0,0,1,0),fe===0&&(F=M,P=b,G=T,O=v,H=y,$=w,N=E,V=R,k=I),fe===s-1&&(ae=M,re=b,q=T,he=v,_e=y,Ge=w,j=E,Re=R,$e=I)}for(let fe=0;fe<2;fe++){let me=fe===0?-1:1,Fe=fe===0?pe:te,ue=fe===0?Ce:nt,Le=fe===0?qe:ze,Ee=fe===0?F:ae,Ae=fe===0?P:re,Qe=fe===0?G:q,ct=fe===0?O:he,Et=fe===0?H:_e,Nt=fe===0?$:Ge,Rt=fe===0?N:j,Dn=fe===0?V:Re,sn=fe===0?k:$e,It=Ee*me,Rn=Ae*me,ai=Qe*me;for(let X=0;X<r;X++){let Ie=fm[X],st=Math.cos(Ie),Lt=Math.sin(Ie);Ne(a[fe]+X*t,Fe+It*Ye*Lt,ue+Rn*Ye*Lt,Le+ai*Ye*Lt,Ye*st,ct,Et,Nt,Rt,Dn,sn,It,Rn,ai,st,Lt)}let Zn=(a[fe]+r*t)*3;f[Zn]=Fe+It*Ye,f[Zn+1]=ue+Rn*Ye,f[Zn+2]=Le+ai*Ye,u[Zn]=It,u[Zn+1]=Rn,u[Zn+2]=ai}m.needsUpdate=!0,x.needsUpdate=!0}return{mesh:p,set:Te}}var Ws=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),sS=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Sc=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Ku=.04,rS=9;function bc(n,e){let t=Math.sin(n*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*Math.PI*2}function oS(n,e,t=[0,0]){return t[0]=.05*Math.sin(1.3*n+bc(e,1))+.03*Math.sin(2.1*n+bc(e,2)),t[1]=.04*Math.sin(1.7*n+bc(e,3))+.02*Math.sin(2.6*n+bc(e,4)),t}var aS=(n,e)=>Math.min(n*2,1)*Math.max(e,0),Xo=16,pm=Xo+1,mi=11,ss=4,wc=13,lS=.07,cS=n=>{let e=n<0?0:n>1?1:n;return e*e*(3-2*e)};function mm({eyeRadius:n=.1,eyeSpacing:e=.26,eyeY:t=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:h=Z.ink,fixedSmile:c=0}={}){let f=n,u=e/2,d=[-u,u],m=.35,x=.035*f,p=f*.3,g=a==="uni",_=0,S=_+2*pm,M=S+16,b=M+2*mi*ss,T=b+2*mi*2,v=T+(g?6:8),y=v+wc*2,w=[],E=pe=>w.push(pe,pe+1,pe+2,pe,pe+2,pe+3),R=(pe,Ce)=>{for(let qe=0;qe<Ce-1;qe++){let te=pe+qe*2;w.push(te,te+1,te+2,te+1,te+3,te+2)}};for(let pe=0;pe<2;pe++){let Ce=_+pe*pm;for(let qe=0;qe<Xo;qe++)w.push(Ce,Ce+1+qe,Ce+1+(qe+1)%Xo)}for(let pe=0;pe<4;pe++)E(S+pe*4);for(let pe=0;pe<2;pe++){let Ce=M+pe*mi*ss;for(let qe=0;qe<mi-1;qe++)for(let te=0;te<ss-1;te++){let nt=Ce+qe*ss+te,ze=nt+1,Pe=nt+ss,L=Pe+1;w.push(nt,ze,Pe,ze,L,Pe)}R(b+pe*mi*2,mi)}g?w.push(T,T+1,T+2,T+1,T+3,T+2,T+2,T+3,T+4,T+3,T+5,T+4):(E(T),E(T+4)),R(v,wc);let I=[];for(let pe=0;pe<2;pe++){let Ce=new xn(f,18,12);Ce.deleteAttribute("uv"),Ce.applyMatrix4(new pt().makeScale(1,1,m).setPosition(d[pe],t,i)),I.push(Ce)}let F=new mt(yn(I,!1),Vt({color:Z.eyeWhite,shadowMix:.35,rim:0}));F.name="eyes",En(F,{px:2});let P=new Float32Array(y*3),G=new Float32Array(y*3),O=new Float32Array(y*3),H=new it(Z.ink),$=new it(h);for(let pe=0;pe<y;pe++){G[pe*3+2]=1;let Ce=pe>=M&&pe<b?$:H;O[pe*3]=Ce.r,O[pe*3+1]=Ce.g,O[pe*3+2]=Ce.b}let N=new Ft,V=new wt(P,3);V.setUsage(Ar),N.setAttribute("position",V),N.setAttribute("normal",new wt(G,3)),N.setAttribute("color",new wt(O,3)),N.setIndex(w);let k=t+f*3.5,ae=s-r*1.5-f,re=Math.max(u+2.5*f,r);N.boundingSphere=new Vn(new B(0,(k+ae)/2,i),Math.hypot(re,(k-ae)/2,f*2));let q=Vt({color:"#ffffff",vertexColors:!0,rim:0});q.side=Wn;let he=new mt(N,q);he.name="features";let _e=new Mt;_e.name="face",_e.add(F,he);let Ge=Ws.neutral,j=pe=>{let Ce=c>0?sS[pe]:0;return Ce>0?c*Ce:-1/0},Re=j("neutral"),$e=pe=>pe==="mouthCurve"&&Ge.mouthCurve<Re?Re:Ge[pe],Ne={};for(let pe of Sc)Ne[pe]={x:$e(pe),v:0};let Je={x:0,v:0},De={x:0,v:0},le=0,Me=!1,Te=0,ge=[0,0],de=0;function Be(pe,Ce,qe){let te=de*3;P[te]=pe,P[te+1]=Ce,P[te+2]=qe,de++}function Ue(pe,Ce,qe){let te=1-(pe*pe+Ce*Ce)/(f*f);return i+f*m*Math.sqrt(te>0?te:0)+qe}function Ye(pe,Ce,qe,te,nt,ze){let Pe=-(te-Ce),L=qe-pe,A=Math.hypot(Pe,L)||1;Pe=Pe/A*nt/2,L=L/A*nt/2,Be(pe+Pe,Ce+L,ze),Be(qe+Pe,te+L,ze),Be(qe-Pe,te-L,ze),Be(pe-Pe,Ce-L,ze)}let Ve=f*1.03;function tt(){let pe=Ne,Ce=pe.pupilScale.x*(1-Je.x),qe=Je.x,te=Math.min(Math.max(pe.lid.x,0),.95),nt=pe.browAngle.x,ze=te>.005,Pe=Ve-2*Ve*te,L=nt*.6*Math.min(te*4,1),A=f*lS*Math.min(te*10,1);de=_;for(let me=0;me<2;me++){let Fe=me===0?-1:1;oS(Te,l+me*7.31,ge);let ue=f*.5*(Ce>0?Ce:0),Le=ge[0]*f,Ee=ge[1]*f;if(ze){let Qe=Pe+L*Fe*Le-Math.abs(L)*ue-A-(Ee+ue);if(Qe>0){let ct=Math.min(Math.max((Qe-.1*f)/(.1*f),0),1);Ee+=Qe*(1-cS(ct))}}Be(d[me]+Le,t+Ee,Ue(Le,Ee,x));for(let Ae=0;Ae<Xo;Ae++){let Qe=Ae/Xo*Math.PI*2,ct=Le+Math.cos(Qe)*ue,Et=Ee+Math.sin(Qe)*ue;Be(d[me]+ct,t+Et,Ue(ct,Et,x))}}de=S;for(let me=0;me<2;me++){let Fe=f*.55*qe,ue=Ue(0,0,x),Le=f*.26*qe;Ye(d[me]-Fe,t-Fe,d[me]+Fe,t+Fe,Le,ue),Ye(d[me]-Fe,t+Fe,d[me]+Fe,t-Fe,Le,ue)}for(let me=0;me<2;me++){let Fe=me===0?-1:1;for(let ue=0;ue<2;ue++){de=ue===0?M+me*mi*ss:b+me*mi*2;for(let Le=0;Le<mi;Le++){let Ee=(Le/(mi-1)*2-1)*(Math.PI/2),Ae=Ve*Math.sin(Ee),Qe=Ve*Math.cos(Ee),ct=ze?Pe+L*Ae:Qe;ct>Qe&&(ct=Qe),ct<-Qe&&(ct=-Qe);let Et=Fe*Ae;if(ue===0)for(let Nt=0;Nt<ss;Nt++){let Rt=Qe+(ct-Qe)*(Nt/(ss-1));Be(d[me]+Et,t+Rt,Ue(Et,Rt*.97,x*3))}else{let Nt=ct+(ze?f*.02:0);Nt>Qe&&(Nt=Qe);let Rt=ct-A;Rt<-Qe&&(Rt=-Qe),Be(d[me]+Et,t+Nt,Ue(Et,Nt*.97,x*3.5)),Be(d[me]+Et,t+Rt,Ue(Et,Rt*.97,x*3.5))}}}}de=T;let Y=f*.9,xe=t+f*(1.4+pe.browY.x),oe=Math.cos(nt),ve=Math.sin(nt),Se=i+f*.15;if(g){let me=u+Y*oe,Fe=xe+Y*ve,ue=xe-ve/(oe>.3?oe:.3)*u,Le=-(ue-Fe),Ee=me,Ae=Math.hypot(Le,Ee)||1;Le/=Ae,Ee/=Ae;let Qe=-(Fe-ue),ct=me,Et=Math.hypot(Qe,ct)||1;Qe/=Et,ct/=Et;let Nt=Le+Qe,Rt=Ee+ct,Dn=Math.hypot(Nt,Rt)||1;Nt/=Dn,Rt/=Dn;let sn=Nt*Le+Rt*Ee,It=p/2/(sn>.4?sn:.4);Be(-me+Le*p/2,Fe+Ee*p/2,Se),Be(-me-Le*p/2,Fe-Ee*p/2,Se),Be(Nt*It,ue+Rt*It,Se),Be(-Nt*It,ue-Rt*It,Se),Be(me+Qe*p/2,Fe+ct*p/2,Se),Be(me-Qe*p/2,Fe-ct*p/2,Se)}else for(let me=0;me<2;me++){let Fe=me===0?-1:1;Ye(d[me]-Fe*Y*oe,xe-Y*ve,d[me]+Fe*Y*oe,xe+Y*ve,p,Se)}de=v;let ie=pe.mouthOpen.x+De.x*(.55+.45*Math.sin((Te+l*.37)*rS*Math.PI*2))*.8,se=ie>0?ie<1.2?ie:1.2:0,we=-pe.mouthCurve.x/.5,U=(we>1?1:we>0?we:0)*(se<.4?se/.4:1),ne=r/2*(1-.35*(se<1?se:1)*(1-.7*U)),Q=aS(pe.lid.x,pe.mouthCurve.x),be=pe.mouthCurve.x*ne*.5*(1-.4*Q)*(1+.6*U),ye=.55+.5*U,fe=se*ne*.9;for(let me=0;me<wc;me++){let Fe=me/(wc-1)*2-1,ue=1-Fe*Fe,Le=Fe*ne*(1-.25*Q)+Q*ne*.2,Ee=s-be*ue+Q*ne*.45*Fe+Je.x*p*.6*Math.sin(Fe*Math.PI*3);Be(Le,Ee,o),Be(Le,Ee-p-fe*Math.pow(ue,ye)+be*ue*U,o)}V.needsUpdate=!0}function z(pe){Te+=pe;for(let Ce=0;Ce<Sc.length;Ce++)An(Ne[Sc[Ce]],$e(Sc[Ce]),Ku,pe);An(Je,le,Ku,pe),An(De,Me?1:0,Ku,pe),tt()}return tt(),{group:_e,setExpression(pe){Ge=Object.prototype.hasOwnProperty.call(Ws,pe)?Ws[pe]:Ws.neutral,le=pe==="dead"?1:0,Re=j(Object.prototype.hasOwnProperty.call(Ws,pe)?pe:"neutral")},setTalking(pe){Me=!!pe},update:z}}var In=Math.PI*2,Yo=["handL","handR","footL","footR"];function gi(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function gm(n,e){e.hipsY=n.hipsY,e.lean=n.lean,e.twist=n.twist,e.headYaw=n.headYaw,e.headPitch=n.headPitch,e.squash=n.squash,e.elbows=n.elbows;for(let t=0;t<4;t++){let i=n[Yo[t]],s=e[Yo[t]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function $o(n,e,t,i=[0,0,0]){let s=t[0],r=t[1]-n.hipHeight,o=t[2],a=Math.cos(e.lean),l=Math.sin(e.lean),h=Math.cos(e.twist),c=Math.sin(e.twist),f=r*a-o*l,u=r*l+o*a;return i[0]=s*h+u*c,i[1]=f+e.hipsY,i[2]=-s*c+u*h,i}var hS=n=>n<0?0:n>1?1:n,Lr=(n,e,t)=>{let i=hS((t-n)/(e-n));return i*i*(3-2*i)},qo=(n,e,t,i,s)=>Lr(e,t,n)*(1-Lr(i,s,n));function Bt(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}var Tc=[0,0,0];function os(n,e,t,i,s,r){return Tc[0]=t,Tc[1]=i,Tc[2]=s,$o(n,e,Tc,r)}var Ec={sx:0,sy:0,fx:0};function Bn(n){return Ec.sx=Math.abs(n.shoulderL[0]),Ec.sy=n.shoulderL[1],Ec.fx=Math.abs(n.hipL[0])+.035,Ec}var Dr=(n,e)=>e>0?n.handL:n.handR;function ju(n,e,t,i,s){return os(n,e,s*(t.sx+.16),n.hipHeight+0,.1,i)}var Qu=.55;function Ic(n,e,t){let i=Bn(e),s=n/Tt.idle.duration,r=In*s,o=e.hipHeight,a=qo(s,.42,.52,.72,.86);return t.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),t.lean=.03+.015*Math.sin(r+.4),t.twist=.05*Math.sin(r+.6),t.headYaw=.03*Math.sin(r)+.3*a,t.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,t.squash=1+.008*Math.sin(r),t.elbows=Qu,ju(e,t,i,t.handL,1),ju(e,t,i,t.handR,-1),t.handL[1]+=.008*Math.sin(r-.5),t.handR[1]+=.008*Math.sin(r+.4),t.handL[2]+=.01*Math.sin(r+1.1),t.handR[2]+=.01*Math.sin(r-.7),Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}var ki=.34,ed=.25,_m=-.33,uS=.4,dS=.37,fS=.035,Pc=(ed-_m)/ki;function xm(n,e){if(n<ki)return e[0]=0,e[1]=ed-Pc*n,e;let t=(n-ki)/(1-ki),i=-Pc*(1-ki),s=-.35*Pc*(1-ki),r=t*t,o=r*t;return e[1]=(2*o-3*r+1)*_m+(o-2*r+t)*i+(-2*o+3*r)*ed+(o-r)*s,e[0]=uS*Math.sin(Math.PI*Math.pow(t,.8)),e}var nn=[0,0];function ym(n,e,t){let i=Bn(e),s=n/Tt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*In*(r-(ki+.5)/2);t.hipsY=o-.06+fS*Math.cos(a),t.squash=1+.045*Math.cos(2*In*(r-ki-.03)),t.lean=dS+.03*Math.cos(2*In*(r-ki));let l=Math.cos(In*(r+.03));t.twist=.2*l,t.headYaw=-.15*l,t.headPitch=-.28+.04*Math.cos(a),t.elbows=0,xm(r,nn),Bt(t.footL,i.fx*.75,nn[0],nn[1]),xm(r<.5?r+.5:r-.5,nn),Bt(t.footR,-i.fx*.75,nn[0],nn[1]);for(let h=-1;h<=1;h+=2){let c=(1-h*l)/2;os(e,t,h*(i.sx+.13-.1*c+.12*Math.sin(Math.PI*c)),i.sy-.34+.28*c+.05*Math.sin(Math.PI*c),-.14+.46*c,Dr(t,h))}return t}function Mm(n,e,t){let i=Bn(e),s=In*n/Tt.aim.duration,r=e.hipHeight;t.hipsY=r-.05+.005*Math.sin(s),t.lean=.12+.01*Math.sin(s),t.twist=-.1,t.headYaw=.08,t.headPitch=.04+.012*Math.sin(2*s),t.squash=1,t.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Bt(t.handL,i.sx*1.2+o,i.sy-.12+a,.56),Bt(t.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Bt(t.footL,i.fx+.02,0,.15),Bt(t.footR,-i.fx-.03,0,-.13),t}var td=.35;function pS(n){return n<.06?Lr(0,.06,n):Math.exp(-9*(n-.06))*(1-Lr(.24,td,n))}function mS(n){if(n<.07)return Lr(0,.07,n);let e=n-.07;return Math.exp(-11*e)*Math.cos(In*e/.22)*(1-Lr(.26,td,n))}function gS(n,e,t){let i=Bn(e),s=e.hipHeight,r=pS(n);t.hipsY=s-.012-.05*r,t.lean=.03-.4*r,t.twist=.12*r,t.headYaw=-.12*r,t.headPitch=-.02-.32*r,t.squash=1-.15*mS(n),t.elbows=Qu+(1-Qu)*r;for(let o=-1;o<=1;o+=2){let a=Dr(t,o);ju(e,t,i,a,o);let l=a[0],h=a[1],c=a[2];os(e,t,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=h+(a[1]-h)*r,a[2]=c+(a[2]-c)*r}return Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}var rs=[0,0,0];function xS(n,e,t){Ic(n,e,t);let i=Bn(e),s=n/Tt.talk.duration,r=In*s,o=qo(s,.04,.17,.4,.55),a=qo(s,.5,.63,.8,.95),l=Math.sin(3*r);t.headPitch+=.05*Math.sin(4*r)-.04*(o+a),t.headYaw+=-.12*o+.12*a,t.elbows+=(.85-t.elbows)*Math.max(o,a),os(e,t,-(i.sx+.19),i.sy-.1+.03*l,.36,rs);for(let h=0;h<3;h++)t.handR[h]+=(rs[h]-t.handR[h])*o;os(e,t,i.sx+.19,i.sy-.12-.03*l,.34,rs);for(let h=0;h<3;h++)t.handL[h]+=(rs[h]-t.handL[h])*a;return t}var Pn=gi();function vS(n,e,t){let i=n/Tt.roll.duration,s=qo(i,0,.15,.75,1),r=Bn(e);Ic(0,e,Pn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Pn.hipsY,.45),t.lean=o(Pn.lean,1.3),t.twist=0,t.headYaw=0,t.headPitch=o(Pn.headPitch,.35),t.squash=o(1,.9),t.elbows=1;for(let a=-1;a<=1;a+=2){let l=Dr(t,a),h=Dr(Pn,a);l[0]=o(h[0],a*(r.sx+.2)),l[1]=o(h[1],.2),l[2]=o(h[2],.3);let c=a>0?t.footL:t.footR,f=a>0?Pn.footL:Pn.footR;c[0]=o(f[0],a*r.fx),c[1]=o(f[1],.18),c[2]=o(f[2],-.05)}return t}function _S(n,e,t){return ym(n,e,t),t.hipsY-=.12,t.lean+=.15,t}var yS=.25,MS=.85,SS=.82;function Sm(n,e,t){let i=Bn(e),s=In*n/Tt.coverLow.duration;return t.hipsY=yS+.006*Math.sin(s),t.lean=MS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=-.55+.03*Math.sin(2*s+1),t.squash=SS,t.elbows=1,Bt(t.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Bt(t.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Bt(t.footL,i.fx+.08,0,.12),Bt(t.footR,-i.fx-.08,0,.12),t}function bm(n,e,t,i){let s=Bn(n),r=i/Tt[t].duration,o=Math.sin(In*r);return e.hipsY+=.012*Math.cos(2*In*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function bS(n,e,t){return Sm(0,e,t),bm(e,t,"coverLowMove",n),t}function nd(n,e,t){let i=Bn(e),s=In*n/Tt.coverTall.duration;return t.hipsY=e.hipHeight-.012+.006*Math.sin(s),t.lean=.07+.01*Math.sin(s+.4),t.twist=.02*Math.sin(s+.6),t.headYaw=.05*Math.sin(s),t.headPitch=0+.02*Math.sin(2*s+1),t.squash=1+.006*Math.sin(s),t.elbows=1,os(e,t,i.sx+.14,i.sy+0,.31,t.handL),os(e,t,-i.sx-.14,i.sy+0,.31,t.handR),Bt(t.footL,i.fx,0,.015),Bt(t.footR,-i.fx,0,-.015),t}function wS(n,e,t){return nd(0,e,t),bm(e,t,"coverTallMove",n),t}function TS(n,e,t){return Mm(n*(Tt.aim.duration/Tt.coverPop.duration),e,t),t.hipsY-=.07,t.lean+=.06,t.footL[2]+=.04,t.footR[2]-=.04,t.footL[0]+=.04,t.footR[0]-=.04,t}function ES(n,e,t){let i=n/Tt.vault.duration,s=qo(i,0,.3,.7,1),r=Bn(e);Ic(0,e,Pn);let o=(a,l)=>a+(l-a)*s;t.hipsY=o(Pn.hipsY,e.hipHeight-.02),t.lean=o(Pn.lean,.55),t.twist=0,t.headYaw=0,t.headPitch=o(Pn.headPitch,-.25),t.squash=1,t.elbows=1;for(let a=-1;a<=1;a+=2){let l=Dr(t,a),h=Dr(Pn,a);l[0]=o(h[0],a*(r.sx+.14)),l[1]=o(h[1],.7),l[2]=o(h[2],.62);let c=a>0?t.footL:t.footR,f=a>0?Pn.footL:Pn.footR;c[0]=o(f[0],a*(r.fx+.04)),c[1]=o(f[1],.55),c[2]=o(f[2],.3)}return t}var AS=.17,RS=.5,CS=-.9,PS=.82;function IS(n,e,t){let i=Bn(e),s=In*n/Tt.coverBlindLow.duration;return t.hipsY=AS+.006*Math.sin(s),t.lean=RS+.015*Math.sin(s+.4),t.twist=.03*Math.sin(s+.6),t.headYaw=.04*Math.sin(s),t.headPitch=CS+.03*Math.sin(2*s+1),t.squash=PS,t.elbows=1,$o(e,t,e.shoulderR,rs),Bt(t.handR,rs[0]-.02,rs[1]+.44+.008*Math.sin(s+.4),rs[2]+.12),Bt(t.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Bt(t.footL,i.fx+.08,0,.12),Bt(t.footR,-i.fx-.08,0,.12),t}function vm(n,e,t,i){nd(n*(Tt.coverTall.duration/Tt.coverBlindTallL.duration),e,t);let s=Bn(e);return os(e,t,i*(s.sx+.4),s.sy,.2,i>0?t.handL:t.handR),t}var LS=.3,DS=1.2,Ac=[.4,.62],Rc=[-.6,-.36];function Cc(n,e,t,i,s,r){if(n-=Math.floor(n),n<.5)return r[0]=s,r[1]=e+(t-e)*(n/.5),r;let o=(n-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=t+(e-t)*(o*o*(3-2*o)),r}function NS(n,e,t){let i=Bn(e),s=n/Tt.crawl.duration,r=In*s;return t.hipsY=LS+.012*Math.cos(2*r),t.lean=DS+.03*Math.cos(2*r),t.twist=.1*Math.sin(r),t.headYaw=-.1*Math.sin(r),t.headPitch=-.75,t.squash=1,t.elbows=1,Cc(s,Ac[1],Ac[0],.16,.04,nn),Bt(t.handL,i.sx+.12,nn[0],nn[1]),Cc(s+.5,Ac[1],Ac[0],.16,.04,nn),Bt(t.handR,-i.sx-.12,nn[0],nn[1]),Cc(s,Rc[1],Rc[0],.16,0,nn),Bt(t.footR,-i.fx-.02,nn[0],nn[1]),Cc(s+.5,Rc[1],Rc[0],.16,0,nn),Bt(t.footL,i.fx+.02,nn[0],nn[1]),t}var OS=.05;function ln(n,e,t,i=OS){return Object.freeze({duration:n,loop:e,ease:i,sample:(s,r,o=gi())=>t(s,r,o)})}var Tt=Object.freeze({idle:ln(2.4,!0,Ic),run:ln(.56,!0,ym,.008),aim:ln(1.6,!0,Mm),flinch:ln(td,!1,gS),talk:ln(2.4,!0,xS),roll:ln(.55,!1,vS,.02),sprint:ln(.56,!0,_S,.008),coverLow:ln(2.4,!0,Sm),coverLowMove:ln(.5,!0,bS),coverTall:ln(2.4,!0,nd),coverTallMove:ln(.5,!0,wS),coverPop:ln(1.6,!0,TS),vault:ln(.5,!1,ES,.02),coverBlindLow:ln(1.6,!0,IS),coverBlindTallL:ln(1.6,!0,(n,e,t)=>vm(n,e,t,1)),coverBlindTallR:ln(1.6,!0,(n,e,t)=>vm(n,e,t,-1)),crawl:ln(1,!0,NS)}),as=Pc/Tt.run.duration;function Zo(n,e,t,i){let s=Object.prototype.hasOwnProperty.call(Tt,n)?Tt[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,t,i||gi())}function Lc(n,e,t,i=gi()){if(!(t>0))return gm(n,i);if(t>=1)return gm(e,i);let s=1-t;i.hipsY=n.hipsY*s+e.hipsY*t,i.lean=n.lean*s+e.lean*t,i.twist=n.twist*s+e.twist*t,i.headYaw=n.headYaw*s+e.headYaw*t,i.headPitch=n.headPitch*s+e.headPitch*t,i.squash=n.squash*s+e.squash*t,i.elbows=n.elbows*s+e.elbows*t;for(let r=0;r<4;r++){let o=n[Yo[r]],a=e[Yo[r]],l=i[Yo[r]];l[0]=o[0]*s+a[0]*t,l[1]=o[1]*s+a[1]*t,l[2]=o[2]*s+a[2]*t}return i}var US=.05,Bi=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Jo=["handL","handR","footL","footR"],id=Bi.length+Jo.length*3,Nr=[.35,-.2,-.8],sd=[.75,-.85,-.15];function Wt(n,e){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let t=new it(e),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new wt(s,3)),n}var FS=new pt,Yn=(n,e,t,i,s=0,r=0,o=0,a=1,l=1,h=1)=>n.applyMatrix4(FS.compose(new B(e,t,i),new bn().setFromEuler(new Cn(s,r,o)),new B(a,l,h)));function Xs(n=20,e=14){let t=new xn(1,n,e);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),tm(t)}function rd(n,e,t){let i=Xs(e,t),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Nc(n,e,t){let i=e[0]-n[0],s=e[1]-n[1],r=e[2]-n[2],o=Math.hypot(i,s,r),a=new gn(t,t,o,6,1),l=new bn().setFromUnitVectors(new B(0,1,0),new B(i/o,s/o,r/o));return a.applyMatrix4(new pt().compose(new B((n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2),l,new B(1,1,1))),a}function Oc(n,e){let t=yn(n,!1);if(!t)throw new Error(`rig: could not merge the ${e} parts`);si(t),t.computeBoundingSphere();let i=new mt(t,Vt({color:"#ffffff",vertexColors:!0}));return i.name=e,En(i),i}function od(n,e,t,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*n.rx,s[1]=o(t)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function kS(n){let e=n.torso,t=n.colors,i=n.outfit,s=(c,f)=>{let u=new Ao(c.map(([d,m])=>new Oe(d,m)),22);return u.scale(1,1,e.depth),Wt(u,f)},r=[s(e.pants,t.pants),s(e.shirt,t.shirt)],o=e.shirt[e.shirt.length-2][1],a=c=>{let f=e.shirt;for(let u=1;u<f.length;u++)if(c<=f[u][1]){let d=(c-f[u-1][1])/(f[u][1]-f[u-1][1]||1);return f[u-1][0]+(f[u][0]-f[u-1][0])*d}return 0},l=(c,f)=>{let u=a(f);return e.depth*u*Math.sqrt(Math.max(1-c*c/(u*u),0))},h=n.shoulderL[1]-n.hipHeight;for(let c of[-1,1]){let f=Xs(14,10);Yn(f,c*Math.abs(n.shoulderL[0])*.97,h-.01,0,0,0,c*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),f.computeVertexNormals(),r.push(Wt(f,t.shirt))}if(i.collar){let c=new Fs(.1,.03,8,20);Yn(c,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Wt(c,t.collar))}if(i.logo){let u=new gn(.03,.03,.01,12);Yn(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Wt(u,t.logo))}if(i.lanyard){let f=l(0,.15)+.012;for(let m of[-1,1]){let x=[m*.075,o-.03,.085],p=[m*.05,.34,l(.05,.34)+.014],g=[m*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Wt(Nc(x,p,.008),t.lanyard),Wt(Nc(p,g,.008),t.lanyard))}let u=new Pt(.075,.1,.014);Yn(u,0,.15,f,-.05,0,.04);let d=new Pt(.077,.026,.016);Yn(d,0,.15+.028,f,-.05,0,.04),r.push(Wt(u,t.badge),Wt(d,t.badgeStripe))}return Oc(r,"torso")}function BS(n){let e=n.head,t=n.hair,i=n.colors,s=n.outfit,r=[],o=rd((a,l,h,c)=>od(e,a,l,h,c),40,28);r.push(Wt(o,i.skin),Wt(zS(e,t),i.hair));for(let a of[-1,1]){let l=Xs(12,8);Yn(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(Wt(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,h=Xs(12,8);Yn(h,0,l,HS(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),h.computeVertexNormals(),r.push(Wt(h,i.skin))}if(s.headset){let a=e.ry+t.thickness+.03,l=new Tn;l.getPoint=(x,p=new B)=>p.set(Math.cos(Math.PI*x)*(e.rx+t.thickness+.012),Math.sin(Math.PI*x)*a,0);let h=new Ro(l,24,.014,6,!1);Yn(h,0,0,-.03,-.12,0,0),r.push(Wt(h,i.headset));for(let x of[-1,1]){let p=new gn(.055,.06,.05,14);Yn(p,x*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Wt(p,i.headset))}let c=n.face,f=[e.rx+.035,-.04,0],u=[e.rx+.005,c.mouthY+.01,.13],d=[c.mouthWidth/2+.06,c.mouthY-.02,c.mouthZ+.025];r.push(Wt(Nc(f,u,.009),i.headset),Wt(Nc(u,d,.009),i.headset));let m=Xs(10,8);Yn(m,d[0],d[1],d[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(Wt(m,i.mic))}return Oc(r,"headMesh")}var ls=48,Dc=12;function zS(n,e){let t=(u,d)=>.04+.17*d+.025*Math.max(d,0)*u,i=[0,0,0],s=oc.smoothstep,r=[],o=(u,d,m)=>{let x=Math.sin(u)*Math.sin(d),p=Math.cos(u),g=Math.sin(u)*Math.cos(d);od(n,x,p,g,i);let _=i[0]/(n.rx*n.rx),S=i[1]/(n.ry*n.ry),M=i[2]/(n.rz*n.rz),b=Math.hypot(_,S,M)||1;_/=b,S/=b,M/=b;let T=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(g+.3,0),v=e.quiff?e.lift*Math.max(g,0)*s(i[1],.12,.26)*(1-.5*x):0,y=e.back*Math.max(-g,0)*s(i[1],-.15,.1),w=m?-.01:e.thickness*(1-.55*Math.min(T,1))+v+y;r.push(i[0]+_*w,i[1]+S*w,i[2]+M*w)},a=u=>{let d=0,m=Math.PI;for(let x=0;x<40;x++){let p=(d+m)/2,g=Math.sin(p)*Math.sin(u),_=Math.sin(p)*Math.cos(u);od(n,g,Math.cos(p),_,i),i[1]>t(g,_)?d=p:m=p}return d};o(0,0,!1);let l=[];for(let u=0;u<ls;u++)l.push(a(u/ls*Math.PI*2));for(let u=1;u<=Dc+1;u++)for(let d=0;d<ls;d++){let m=d/ls*Math.PI*2,x=u>Dc;o(x?l[d]+.03:l[d]*(u/Dc),m,x)}let h=(u,d)=>1+(u-1)*ls+d%ls,c=[];for(let u=0;u<ls;u++)c.push(0,h(1,u),h(1,u+1));for(let u=1;u<=Dc;u++)for(let d=0;d<ls;d++){let m=h(u,d),x=h(u,d+1),p=h(u+1,d),g=h(u+1,d+1);c.push(m,p,g,m,g,x)}let f=new Ft;return f.setAttribute("position",new dt(r,3)),f.setIndex(c),f.computeVertexNormals(),f}function HS(n,e,t){let i=1-Math.pow(Math.abs(e/n.rx),n.power)-Math.pow(Math.abs(t/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function wm(n,e){let t=n.hand.radius,i=n.colors,s=Xs(14,10);Yn(s,0,t*.75,0,0,0,0,t*.78,t*1.1,t*.95),s.computeVertexNormals();let r=Xs(10,8);return Yn(r,t*.3,t*.45,e*t*.75,e*-.6,0,.3,t*.34,t*.55,t*.34),r.computeVertexNormals(),Oc([Wt(s,i.skin),Wt(r,i.skin)],e>0?"handL":"handR")}function Tm(n,e){let t=n.shoe,i=n.colors,s=t.width/2,r=t.length/2,o=t.length*.18,a=.03,l=rd((c,f,u,d)=>{d[0]=c*s*(u>0?1:.9),d[1]=Math.max(a*.8,t.height*.55+f*t.height*.6-Math.max(u,0)*t.height*.25),d[2]=o+u*r*.96},20,12),h=rd((c,f,u,d)=>{d[0]=c*(s+.008),d[1]=Math.min(Math.max(a*.5+f*a,0),a),d[2]=o+u*(r+.008)},20,6);return Oc([Wt(l,i.shoe),Wt(h,i.sole)],e>0?"footL":"footR")}function cs(n){let e=new Mt;e.name=n.name||"character";let t=new Mt;t.name="body",e.add(t);let i=new Mt;i.name="hips",i.rotation.order="YXZ";let s=kS(n);i.add(s);let r=new Mt;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=BS(n);o.position.y=n.head.centerY,r.add(o);let a=mm({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),t.add(i);let l=[wm(n,1),wm(n,-1)],h=[Tm(n,1),Tm(n,-1)],c=[0,1].map(()=>Ju({radius:n.armRadius,color:n.colors.skin})),f=[0,1].map(()=>Ju({radius:n.legRadius,color:n.colors.pants}));c[0].mesh.name="armL",c[1].mesh.name="armR",f[0].mesh.name="legL",f[1].mesh.name="legR",t.add(...l,...h,c[0].mesh,c[1].mesh,f[0].mesh,f[1].mesh);let u=yc({rx:.45,rz:.38,opacity:.55});e.add(u);let d=gi(),m=gi(),x=[];for(let k=0;k<id;k++)x.push({x:0,v:0});let p=!1,g=US,_=(k,ae)=>ae<Bi.length?k[Bi[ae]]:k[Jo[(ae-Bi.length)/3|0]][(ae-Bi.length)%3];function S(k,ae,re){ae<Bi.length?k[Bi[ae]]=re:k[Jo[(ae-Bi.length)/3|0]][(ae-Bi.length)%3]=re}function M(k,ae){ae>=0&&(g=ae),d.hipsY=k.hipsY,d.lean=k.lean,d.twist=k.twist,d.headYaw=k.headYaw,d.headPitch=k.headPitch,d.squash=k.squash,d.elbows=k.elbows>=0?k.elbows:0;for(let re=0;re<4;re++){let q=k[Jo[re]],he=d[Jo[re]];he[0]=q[0],he[1]=q[1],he[2]=q[2]}if(!p){p=!0;for(let re=0;re<id;re++)x[re].x=_(d,re),x[re].v=0}}let b=[0,0,0],T=[0,0,0],v=[0,0,0],y=[0,0,0],w={mid:[0,0,0],end:[0,0,0],stretch:1},E=new B,R=new B,I=new B,F=new pt,P=n.armLength/2,G=n.legLength/2,O=n.ankleHeight;function H(k,ae,re){let q=Math.cos(m.twist),he=Math.sin(m.twist);y[0]=k*q+re*he,y[1]=ae,y[2]=-k*he+re*q}function $(){let k=m.squash>.2?m.squash:.2,ae=1/Math.sqrt(k);t.scale.set(ae,k,ae),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let re=0;re<2;re++){let q=re===0?1:-1;$o(n,m,re===0?n.shoulderL:n.shoulderR,b);let he=m.elbows<0?0:m.elbows>1?1:m.elbows;H(q*(Nr[0]+(sd[0]-Nr[0])*he),Nr[1]+(sd[1]-Nr[1])*he,Nr[2]+(sd[2]-Nr[2])*he),Zu(b,re===0?m.handL:m.handR,P,P,y,w),c[re].set(b,w.mid,w.end,w.stretch);let _e=l[re];_e.position.set(w.end[0],w.end[1],w.end[2]),E.set(w.end[0]-w.mid[0],w.end[1]-w.mid[1],w.end[2]-w.mid[2]),E.lengthSq()<1e-10&&E.set(0,-1,0),E.normalize(),R.set(-q*Math.cos(m.twist),0,q*Math.sin(m.twist)),R.addScaledVector(E,-R.dot(E)),R.lengthSq()<1e-4&&R.set(0,0,1).addScaledVector(E,-E.z),R.normalize(),I.crossVectors(R,E),F.makeBasis(R,E,I),_e.quaternion.setFromRotationMatrix(F),$o(n,m,re===0?n.hipL:n.hipR,T);let Ge=re===0?m.footL:m.footR;v[0]=Ge[0],v[1]=Ge[1]+O,v[2]=Ge[2],H(q*.15,0,1),Zu(T,v,G,G,y,w),f[re].set(T,w.mid,w.end,w.stretch);let j=h[re];j.position.set(w.end[0],w.end[1]-O,w.end[2]),j.rotation.set(Math.min(Math.max(w.end[1]-O,0),.3)*1.1,m.twist*.3,0)}}function N(k){if(p)for(let ae=0;ae<id;ae++)An(x[ae],_(d,ae),g,k),S(m,ae,x[ae].x);$(),a.update(k)}Zo("idle",0,n,m),$();function V(){e.traverse(k=>{!k.isMesh||k.userData.isOutline||(k.geometry.dispose(),k!==u&&k.material.dispose())}),e.removeFromParent()}return{root:e,spec:n,face:a,setPose:M,update:N,dispose:V,shadow:u}}var GS=.15,VS=.03,Em=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function hs(n){let e=n.spec,t="idle",i=0,s="idle",r=0,o=0,a=Tt[t].ease,l=gi(),h=gi(),c=Zo(t,0,e);Lc(c,c,1,l);function f(m,{fade:x}={}){Object.prototype.hasOwnProperty.call(Tt,m)&&(m===t&&Tt[m].loop||(m==="flinch"&&t!=="flinch"&&(s=t),Lc(c,c,1,l),a=u(),r=x===void 0?m==="flinch"?VS:GS:Math.max(x,0),o=0,t=m,i=0,n.face.setTalking(m==="talk")))}function u(){let m=r>0?Em(o/r):1;return a+(Tt[t].ease-a)*m}function d(m,x=m){let p=Tt[t];if(i+=m,o+=x,p.loop)i>=p.duration&&(i-=p.duration*Math.floor(i/p.duration));else if(i>=p.duration)return f(s),d(0);Zo(t,i,e,h),Lc(l,h,r>0?Em(o/r):1,c),n.setPose(c,u())}return{play:f,update:d,current:()=>t}}function Uc(n,e,t){let i=parseInt(n.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*t)<<o}return"#"+r.toString(16).padStart(6,"0")}function Am(n){for(let e of Object.values(n))e&&typeof e=="object"&&Am(e);return Object.freeze(n)}var ad=Z.glorpPurple,Kt=Am({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:ad,collar:Uc(ad,Z.ink,.25),logo:Z.gel,pants:Uc(Z.planet,Z.ink,.3),skin:Z.daleSkin,hair:Z.daleHair,shoe:Uc(Z.ink,ad,.3),sole:Z.cream,lanyard:Z.hotPink,badge:Z.cream,badgeStripe:Z.teal,headset:Uc(Z.ink,Z.lilac,.25),mic:Z.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var WS=1.5,XS=8,YS=-.2,qS=1.3,Rm=.6,$S=Math.atan2(1.3,-4),ZS=new B(-.45,.22,-1).applyEuler(new Cn(-.2,.68,0)).toArray(),Cm=10,JS=.8,KS=.05,jS=["idle","run","aim","flinch","talk"],Ko=Object.keys(Ws),Pm=(n,e,t)=>Math.min(t,Math.max(e,n));function QS(n,e,t,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(e)*t,i[1]=Math.sin(e)*t,i[2]=Math.cos(n)*Math.cos(e)*t,i}function eb(n,e,t=ce.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[n[0]+r*t.right-i*t.back,n[1]+t.up,n[2]+o*t.right-s*t.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Im({canvas:n,gl:e}){let t=mc(n,e),i=t.renderer,s=pc(n),r=document.getElementById("cr-readout"),o=new Is,a=new an(ce.camera.fov,1,.1,100),l=gc({planetDir:ZS});o.add(l.mesh);let h=um();o.add(h.group);let c=[];function f(j,Re,$e){let Ne=cs($e===void 0?Kt:{...Kt,face:{...Kt.face,seed:$e}});Ne.root.position.set(j,0,Re),Ne.root.rotation.y=Rm,o.add(Ne.root);let Je=hs(Ne),De={rig:Ne,anim:Je};return c.push(De),De}let u=f(h.spawn[0],h.spawn[2]),d=[],m=!1,x=0,p=!0,g=!1,_=.685,S=.1,M=4.6,b=!1,T=new B(h.spawn[0],h.spawn[1]+1.1,h.spawn[2]),v=[0,0,0];function y(j){if(!(!jS.includes(j)&&!Object.prototype.hasOwnProperty.call(Tt,j))){u.anim.play(j);for(let Re of d)Re.anim.play(m?"run":j)}}function w(j){let Re=Ko.indexOf(j);if(!(Re<0)){x=Re;for(let $e of c)$e.rig.face.setExpression(j)}}function E(j){p=!!j,Gu(o,p)}function R(j){g=!!j,u.rig.root.rotation.y=g?$S:Rm}function I(j){if(j=!!j,j!==m)if(m=j,j){let Re=h.spawn[2]+2.4;for(let $e=0;$e<Cm;$e++){let Ne=h.spawn[0]+($e-(Cm-1)/2)*JS,Je=f(Ne,Re,10+$e);Je.anim.play("run"),Je.rig.face.setExpression(Ko[x]),d.push(Je)}Gu(o,p)}else{for(let Re of d)Re.rig.dispose(),c.splice(c.indexOf(Re),1);d=[]}}function F(){let j=t.resize();a.aspect=j.aspect,a.updateProjectionMatrix()}F(),window.addEventListener("resize",F),n.addEventListener("mousedown",j=>{j.button===0&&(b=!0)}),window.addEventListener("mouseup",()=>{b=!1}),window.addEventListener("mousemove",j=>{b&&!s.isLocked()&&P(j.movementX||0,j.movementY||0,.006)}),n.addEventListener("wheel",j=>{M=Pm(M*Math.exp(j.deltaY*.001),WS,XS)},{passive:!0});function P(j,Re,$e){_-=j*$e,S=Pm(S+Re*$e,YS,qS)}window.addEventListener("keydown",j=>{j.repeat||(j.code==="Digit4"?y("flinch"):j.code==="Digit5"?y("talk"):j.code==="KeyO"?E(!p):j.code==="KeyP"?I(!m):j.code==="KeyL"?s.requestLock():j.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let G=0,O=0,H=0,$=0,N=0,V=0,k=null,ae=0;window.__cr.stats=()=>({fps:G,ms:O,calls:N,tris:V,scale:t.scale(),characters:c.length}),window.__cr.anim=y,window.__cr.orbit=(j,Re,$e)=>{_=j,S=Re,$e&&(M=$e)},window.__cr.expression=w,window.__cr.perf=I,window.__cr.gameCam=R,window.__cr.outlines=E;function re(j){j.pressed.weapon1&&y("idle"),j.pressed.weapon2&&y("run"),j.pressed.weapon3&&y("aim"),j.pressed.interact&&w(Ko[(x+1)%Ko.length]),j.pressed.grenade&&R(!g)}function q(){if(g){let j=eb([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(j.pos),a.lookAt(j.look[0],j.look[1],j.look[2])}else QS(_,S,M,v),a.position.set(T.x+v[0],T.y+v[1],T.z+v[2]),a.lookAt(T)}let he=j=>j.toFixed(2);function _e(){let j=k?Object.keys(k.held).filter(Ne=>k.held[Ne]).join(" "):"",Re=s.padStatus(),$e=k&&Re!=="none"&&Re!=="unrecognised controller"?`Gamepad: ${Re}
  move ${he(k.moveX)}, ${he(k.moveY)}  look ${he(k.lookX)}, ${he(k.lookY)}
  held: ${j||"nothing"}`:`Gamepad: ${Re}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Ko[x]}   camera: ${g?"game":"orbit"}   outlines: ${p?"on":"off"}`,`${Math.round(G)} fps   ${he(O)} ms   scale ${t.scale()}`,`${N} draw calls   ${V} triangles   ${c.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${k?Math.round(k.lookDX):0}, ${k?Math.round(k.lookDY):0}`,$e].join(`
`)}let Ge=fc({step(){},render(j,Re){let $e=Math.min(Re,KS);k=s.poll(),re(k),s.isLocked()&&!g&&P(k.lookDX,k.lookDY,.003),g||P(k.lookX*600*$e,k.lookY*600*$e,.004),l.update(performance.now()/1e3),h.update($e);for(let Ne of c)Ne.anim.update($e),Ne.rig.update($e);q(),i.render(o,a),N=i.info.render.calls,V=i.info.render.triangles,H++,$+=Re,$>=1&&(G=H/$,O=$/H*1e3,H=0,$=0),ae+=Re,ae>=.1&&(ae=0,_e()),t.frameDone(Re*1e3)}});q(),i.render(o,a),N=i.info.render.calls,V=i.info.render.triangles,_e(),Ge.start()}function Lm(){let n=!1,e=0,t=.18;return{update(i,s,r,o){return t=o,n?(e+=r,i?!1:(n=!1,e<=o)):s?i?(n=!0,e=r,!1):!0:!1},holding(){return n&&e>t},reset(){n=!1,e=0}}}function ft(n,e,t="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...e]),kind:t})}var ld=1e-9;function Or(n,e,t,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=n.filter(p=>p.max[1]>o&&p.min[1]<a),h=Math.hypot(t[0],t[2]),c=Math.max(1,Math.ceil(h/(i/2))),f=t[0]/c,u=t[2]/c,d=!1,m=0,x=0;for(let p=0;p<c;p++){let g=r[0],_=r[2];r[0]+=f,r[2]+=u;let S=!1;for(let M=0;M<5;M++){let b=null,T=ld;for(let v of l){let y=Math.max(v.min[0],Math.min(r[0],v.max[0])),w=Math.max(v.min[2],Math.min(r[2],v.max[2])),E=r[0]-y,R=r[2]-w,I=Math.hypot(E,R),F,P,G;if(I>ld){if(I>=i)continue;F=i-I,P=E/I,G=R/I}else{let O=[[r[0]-v.min[0],-1,0],[v.max[0]-r[0],1,0],[r[2]-v.min[2],0,-1],[v.max[2]-r[2],0,1]],H=O[0];for(let $ of O)$[0]<H[0]&&(H=$);F=H[0]+i,P=H[1],G=H[2]}F>T&&(T=F,b=[P,G])}if(!b){S=!0;break}if(M===4)break;r[0]+=b[0]*T,r[2]+=b[1]*T,d=!0,m=b[0],x=b[1]}S||(r[0]=g,r[2]=_,d=!0)}return d||(r[0]=e[0]+t[0],r[2]=e[2]+t[2]),{pos:r,hit:d,normal:[m,0,x]}}function xi(n,e,t,i){let s=1,r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];for(let o of n){let a=0,l=1,h=!0;for(let c=0;c<3&&h;c++){let f=o.min[c]-i,u=o.max[c]+i;if(Math.abs(r[c])<ld)(e[c]<f||e[c]>u)&&(h=!1);else{let d=(f-e[c])/r[c],m=(u-e[c])/r[c];if(d>m){let x=d;d=m,m=x}d>a&&(a=d),m<l&&(l=m),a>l&&(h=!1)}}h&&a<s&&(s=a)}return s}function Fc(n,e,t=0){for(let i of n)if(e[0]>=i.min[0]-t&&e[0]<=i.max[0]+t&&e[1]>=i.min[1]-t&&e[1]<=i.max[1]+t&&e[2]>=i.min[2]-t&&e[2]<=i.max[2]+t)return!0;return!1}var cd=["fov","right","up","back"],kc=Math.PI*2,tb=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Om=n=>n!=="normal"&&tb.includes(n);function Dm(n,e,t={}){let i=Om(e)&&n[e]&&typeof n[e]=="object"?n[e]:null;for(let s of cd)t[s]=i&&i[s]!==void 0?i[s]:n[s];return t}function Nm(n,e){let t=Om(e)?n[e]:null;return t&&typeof t=="object"&&t.shakeWeight>0?t.shakeWeight:0}function Um(n,e,t,i=0){return e?n>=t:n>=t+i}function Fm({tuning:n=ce.camera,look:e=ce.look}={}){let t={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l=[0,0,0],h={x:0,v:0},c=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],f={},u=[0,0,0],d=[0,0,0],m=[0,0,0],x=[0,0,0],p=[0,0,1],g={pos:x,dir:p,fov:70},_={on:!1,t:0,p:[0,0,0]},S=1,M=0,b=!1;return{yaw:0,pitch:0,look(v,y,w,E,R,I,F=1){(v||y||w||E)&&(_.on=!1);let P=I?e.aimScale:1,G=e.invertY?-1:1;this.yaw-=v*e.mouse*P,this.pitch-=y*e.mouse*P*G;let O=e.pad,H=P*F;w&&(this.yaw-=Math.sign(w)*Math.abs(w)**O.expo*O.yawRate*H*R),E&&(this.pitch-=Math.sign(E)*Math.abs(E)**O.expo*O.pitchRate*H*R*G),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(v=1){let y=n.bump;if(!y||!(y.amount>0)||!(v>0))return;s.x=Math.min(s.x+y.amount*v,2*y.amount);let w=n.slamShake;w&&w.amount>0&&w.time>0&&(o.t=w.time,o.amp=w.amount*v)},dip(v){Number.isFinite(v)&&v>0&&(r.x=Math.min(r.x+v,.1))},kick(v,y=0){let w=n.recoil?n.recoil.max:0;if(!(w>0))return;let E=(R,I)=>Math.max(-w,Math.min(w,R+(Number.isFinite(I)?I:0)));a.p.x=Math.max(0,E(a.p.x,v)),a.y.x=E(a.y.x,y)},hold(v){if(!(n.holdTime>0)){_.on=!1;return}_.on=!0,_.t=n.holdTime,_.p[0]=v[0],_.p[1]=v[1],_.p[2]=v[2]},holding(){return _.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(v,y,w="normal",E=1){y!==void 0&&(this.yaw=y),Dm(n,w,f);for(let R of cd)t[R].x=f[R],t[R].v=0;i.x=E,i.v=0,h.x=Nm(n,w),h.v=0;for(let R=0;R<3;R++)c[R].x=v[R],c[R].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,S=1,b=!0,_.on=!1},update(v,{target:y,mode:w="normal",side:E=1},R){b||this.snap(y,this.yaw,w,E),v>0||(v=0),M+=v,Dm(n,w,f);for(let k of cd)An(t[k],f[k],n.blendHalfLife,v);An(h,Nm(n,w),n.blendHalfLife,v),An(i,E,n.sideHalfLife,v);for(let k=0;k<3;k++)An(c[k],y[k],n.followHalfLife,v);An(s,0,n.bump?n.bump.halfLife:0,v),An(r,0,n.bump?n.bump.halfLife:0,v);let I=n.recoil?n.recoil.halfLife:0;An(a.p,0,I,v),An(a.y,0,I,v);let F=Math.PI/180,P=n.probeRadius,G=t.back.x,O=1,H=0,$=k=>{let ae=this.yaw+a.y.x*F,re=Math.max(n.pitchMin,Math.min(n.pitchMax,this.pitch+a.p.x*F));H=Math.sin(ae),O=Math.cos(ae);let q=Math.sin(re),he=Math.cos(re);u[0]=c[0].x,u[1]=c[1].x+t.up.x,u[2]=c[2].x,l[0]=y[0],l[1]=y[1]+t.up.x,l[2]=y[2];let _e=xi(R,l,u,P);if(_e<1)for(let De=0;De<3;De++)u[De]=l[De]+(u[De]-l[De])*_e;let Ge=t.right.x*i.x;d[0]=u[0]-O*Ge,d[1]=u[1],d[2]=u[2]+H*Ge;let j=xi(R,u,d,P);for(let De=0;De<3;De++)d[De]=u[De]+(d[De]-u[De])*j;p[0]=H*he,p[1]=q,p[2]=O*he;for(let De=0;De<3;De++)m[De]=d[De]-p[De]*G;let Re=xi(R,d,m,P),$e=G>1e-6?Math.max(n.minBack/G,Re):1;$e>1&&($e=1),$e<S?S=$e:k&&(S+=($e-S)*(n.wallReturnHalfLife>0?1-Math.pow(2,-v/n.wallReturnHalfLife):1));let Ne=G*S-s.x;for(let De=0;De<3;De++)x[De]=d[De]-p[De]*Ne;let Je=xi(R,u,x,P);if(Je<1)for(let De=0;De<3;De++)x[De]=u[De]+(x[De]-u[De])*Je};if($(!0),_.on)if(_.t-=v,_.t<=0||w!=="aim")_.on=!1;else for(let k=0;k<3;k++){let ae=_.p[0]-x[0],re=_.p[1]-x[1],q=_.p[2]-x[2],he=Math.hypot(ae,re,q);if(he<.5)break;this.yaw=Math.atan2(ae,q)-a.y.x*F,this.pitch=Math.max(n.pitchMin,Math.min(n.pitchMax,Math.asin(re/he)-a.p.x*F)),$(!1)}let N=n.shake;if(N&&N.amp&&h.x>0){let k=N.amp*(h.x>1?1:h.x),ae=Math.sin(kc*N.hz*M)*k,re=Math.sin(kc*N.hz*1.3*M+1)*k,q=-O,he=H;x[0]+=q*ae-he*p[1]*re,x[1]+=(he*p[0]-q*p[2])*re,x[2]+=he*ae+q*p[1]*re}x[1]-=r.x;let V=n.slamShake;if(o.t>0&&V&&V.time>0){o.t=Math.max(0,o.t-v);let k=o.t/V.time,ae=o.amp*k*k,re=Math.sin(kc*V.hz*o.t)*ae,q=Math.sin(kc*V.hz*1.27*o.t+2)*ae,he=-O,_e=H;x[0]+=he*re-_e*p[1]*q,x[1]+=(_e*p[0]-he*p[2])*q,x[2]+=_e*re+he*p[1]*q}return g.fov=t.fov.x,g}}}var us=[Z.hotPink,Z.playerOrange,Z.glorpPurple,Z.tealLight,Z.lilac];function nb(n){let e=n.max[0]-n.min[0],t=n.max[2]-n.min[2],i=n.max[1]-n.min[1],s=Math.max(e,t),r=Math.min(e,t);return n.kind==="pillar"?"pillar":n.kind==="low"?r<.7&&s>=1.8?"planter":"counter":n.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function ib(){let n=[],e=(t,i)=>{let s=new it(i),r=t.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new wt(o,3)),t};return{list:n,box(t,i,s){let r=new Pt(i[0]-t[0],i[1]-t[1],i[2]-t[2]);r.translate((t[0]+i[0])/2,(t[1]+i[1])/2,(t[2]+i[2])/2),n.push(e(r,s))},cyl(t,i,s,r,o,a,l="y"){let h=new gn(r,r,o,8,1);l==="x"?h.rotateZ(Math.PI/2):l==="z"&&h.rotateX(Math.PI/2),h.translate(t,i,s),n.push(e(h,a))},ball(t,i,s,r,o){let a=new xn(r,7,5);a.translate(t,i,s),n.push(e(a,o))}}}var Ur=(n,e,t=n.min[1],i=n.max[1])=>[[n.min[0]-e,t,n.min[2]-e],[n.max[0]+e,i,n.max[2]+e]];function sb(n,e,t,i,s,r,o){let[a,l,h,c]=[e.min[0],e.min[2],e.max[0],e.max[2]],f=.015,u=.06;o?(n.box([a+s,t,l+f],[h-s,i,l+u],r),n.box([a+s,t,c-u],[h-s,i,c-f],r)):(n.box([a+f,t,l+s],[a+u,i,c-s],r),n.box([h-u,t,l+s],[h-f,i,c-s],r))}function jo(n,e){let t=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=t>=i,r=s?t:i,o=s?i:t,a=(h,c)=>s?e.min[0]+h:e.min[0]+c,l=(h,c)=>s?e.min[2]+c:e.min[2]+h;return{len:r,dep:o,top:e.max[1],alongX:s,slab(h,c,f,u,d,m,x){let p=a(h,f),g=a(c,u),_=l(h,f),S=l(c,u);n.box([Math.min(p,g),d,Math.min(_,S)],[Math.max(p,g),m,Math.max(_,S)],x)},cyl(h,c,f,u,d,m,x="y"){let p=x==="y"?"y":x==="u"?s?"x":"z":s?"z":"x";n.cyl(a(h,c),f,l(h,c),u,d,m,p)}}}function rb(n,e){let t=jo(n,e),{len:i,dep:s}=t,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;t.slab(.03,i-.03,.04,s-.04,0,.5,Z.shadowTint);for(let l=0;l<=o;l++){let h=l*a;t.slab(h,h+r,.06,s-.06,0,e.max[1],Z.lilac),t.slab(h+.03,h+r-.03,0,.07,.8,.94,Z.hotPink),t.slab(h+.03,h+r-.03,s-.07,s,.8,.94,Z.hotPink)}for(let l=0;l<o;l++){let h=l*a+r,c=(l+1)*a;t.slab(h,c,s/2-.03,s/2+.03,.5,.94,Z.tealLight),t.slab(h,h+(c-h)*.6,s/2-.05,s/2+.05,.7,.76,Z.cream)}}function ob(n,e,t){let i=jo(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,Z.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,Z.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,Z.cream),i.slab(.15,s-.15,0,.06,.25,.6,Z.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,Z.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let h=0;h<a;h++)for(let c=0;c<l;c++){let f=(c+.5+h%2*.25)/l*s,u=a===1?r/2:r*(.3+h*.4);i.cyl(f,u,(.82+o-.02)/2,.14,o-.84,us[(c+h*2+t)%us.length]),i.cyl(f,u,o-.01,.15,.02,Z.cream)}}function ab(n,e,t){t%3===1?ob(n,e,t):rb(n,e)}function lb(n,e,t){let i=jo(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,Z.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,Z.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,Z.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,Z.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?Z.ink:us[(l+t)%us.length])}function cb(n,e,t){let i=jo(n,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,Z.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,Z.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,Z.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),h=(o-.8)/2-.005,c=.8+h+.005;for(let f=0;f<a;f++)for(let u=0;u<l;u++){let d=(u+.5)/l*s,m=a===1?r/2:r*(.3+f*.4),x=us[(u+f+t)%us.length];i.cyl(d,m,c,.015,.14,Z.cream,"u"),i.cyl(d-.07,m,c,h,.06,x,"u"),i.cyl(d+.07,m,c,h,.06,x,"u")}}function hb(n,e){let t=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];n.box(...Ur({min:e.min,max:o},-.03,e.min[1],o[1]-.1),Z.teal),n.box(...Ur({min:e.min,max:o},0,o[1]-.1,o[1]),Z.cream),sb(n,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,Z.hotPink,t);let a=(m,x,p,g,_)=>n.box(t?[e.min[0]+m,p,e.min[2]+.12]:[e.min[0]+.12,p,e.min[2]+m],t?[e.min[0]+x,g,e.max[2]-.12]:[e.max[0]-.12,g,e.min[2]+x],_);a(.3,.7,o[1],o[1]+.06,Z.cream),a(.32,.68,o[1]+.06,o[1]+.12,Z.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,Z.cream);let l=t?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,h=m=>t?e.min[0]+m:e.min[2]+m;t?n.cyl(h(r-.5),o[1]+.14,l,.06,.28,Z.gel):n.cyl(l,o[1]+.14,h(r-.5),.06,.28,Z.gel);let c=.14,f=t?[[e.min[0],e.min[0]+c],[e.max[0]-c,e.max[0]]]:[[e.min[2],e.min[2]+c],[e.max[2]-c,e.max[2]]];for(let[m,x]of f)t?n.box([m,e.min[1],e.min[2]],[x,i,e.max[2]],Z.lilac):n.box([e.min[0],e.min[1],m],[e.max[0],i,x],Z.lilac);let u=f[0][1],d=f[1][0];t?(n.box([u,i-.12,e.min[2]],[d,i,e.max[2]],Z.lilac),n.box([u,o[1],e.min[2]+.2],[d,i-.12,e.max[2]-.2],Z.tealLight)):(n.box([e.min[0],i-.12,u],[e.max[0],i,d],Z.lilac),n.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,d],Z.tealLight))}function ub(n,e,t){let i=jo(n,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,Z.shadowTint);for(let[c,f]of[[0,a],[s-a,s]])for(let[u,d]of[[0,a],[r-a,r]])i.slab(c,f,u,d,.12,o,Z.lilac);i.slab(0,s,0,r,o-.1,o,Z.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,Z.tealLight);let l=1.35,h=r*.32;i.slab(a,s-a,h-.03,h+.03,.7,.76,Z.cream),i.cyl(s/2,h,l,.025,s+.1,Z.cream,"u");for(let c of[.2,.27,s-.2,s-.27])i.cyl(c,h,l,c===.2||c===s-.2?.2:.17,.06,c===.2||c===s-.2?Z.ink:us[t%us.length],"u")}function db(n,e){n.box(...Ur(e,0,e.min[1],e.max[1]),Z.cream),n.box(...Ur(e,.05,e.min[1],e.min[1]+.25),Z.shadowTint),n.box(...Ur(e,.03,e.min[1]+1,e.min[1]+1.12),Z.hotPink),n.box(...Ur(e,.05,e.max[1]-.25,e.max[1]),Z.shadowTint)}function fb(n){if(!n)return[];let[e,,t]=n.min,[i,,s]=n.max,r=[],o=.05,a=1,l=2.8,h=1.3;for(let c=e+1;c+h/2<i-.3;c+=2)r.push({min:[c-h/2,a,t],max:[c+h/2,l,t+o]},{min:[c-h/2,a,s-o],max:[c+h/2,l,s]});for(let c=t+1;c+h/2<s-.3;c+=2)r.push({min:[e,a,c-h/2],max:[e+o,l,c+h/2]},{min:[i-o,a,c-h/2],max:[i,l,c+h/2]});return r}function km(n,e=null){let t=ib();for(let s of fb(e))t.box(s.min,s.max,Z.tealLight);let i=0;return n.forEach((s,r)=>{let o=nb(s);o==="counter"?ab(t,s,i++):o==="planter"?(r%2?cb:lb)(t,s,r):o==="desk"?hb(t,s):o==="shelf"?ub(t,s,r):o==="pillar"?db(t,s):t.box(s.min,s.max,Z.lilac)}),yn(t.list,!1)}var Bm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Bm)),n),ds=.3,pb=[ft([-12,-1,-12],[12,0,12],"floor"),ft([-12-ds,0,-12-ds],[12+ds,4,-12]),ft([-12-ds,0,12],[12+ds,4,12+ds]),ft([-12-ds,0,-12],[-12,4,12]),ft([12,0,-12],[12+ds,4,12]),ft([5,0,-9],[5.3,4,-3]),ft([6.7,0,-9],[7,4,-3]),ft([-11,0,-7.3],[-6,3,-7]),ft([-6.3,0,-11],[-6,3,-7]),ft([-4,0,-3],[-2,1,-2.4],"low"),ft([3,0,3],[3.6,1,5],"low"),ft([-5,0,3],[-3.8,2.2,3.6],"tall"),ft([1,0,-6],[1.6,2.2,-4],"tall"),ft([-9.4,0,.6],[-8.6,4,1.4],"pillar"),ft([8.6,0,3.6],[9.4,4,4.4],"pillar"),ft([-9,0,6.5],[-6,1,7.1],"low"),ft([-4,0,6.5],[-1,1,7.1],"low"),ft([6,0,6],[10,2.2,6.6],"tall"),ft([-12,0,-1],[-10,1,-.4],"low")],zm=[];for(let n=0;n<=12;n++)zm.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var zc=Bm({boxes:pb,marks:zm,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function hd(n){let e=n.map(t=>{let i=new Pt(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);return i.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2),i});return yn(e,!1)}var fs=.03,ps=.3,ms=.12,Bc=2;function mb(n=zc){let e=n.boxes.find(h=>h.kind==="floor");if(!e)return[];let[t,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(h,c)=>a.push({min:h,max:c});l([t,0,i],[s,ps,i+fs]),l([t,0,r-fs],[s,ps,r]),l([t,0,i],[t+fs,ps,r]),l([s-fs,0,i],[s,ps,r]);for(let h=t+Bc;h<s-.5;h+=Bc)l([h-ms/2,ps,i],[h+ms/2,o,i+fs]),l([h-ms/2,ps,r-fs],[h+ms/2,o,r]);for(let h=i+Bc;h<r-.5;h+=Bc)l([t,ps,h-ms/2],[t+fs,o,h+ms/2]),l([s-fs,ps,h-ms/2],[s,o,h+ms/2]);return a}function Hm(n=zc){let e=new Mt,t=n.boxes.find(r=>r.kind==="floor");e.add(vc({w:t.max[0]-t.min[0],d:t.max[2]-t.min[2]}));let i=n.boxes.filter(r=>r.kind!=="floor");if(i.length){let r=new mt(si(km(i,t)),Vt({vertexColors:!0}));r.name="grey-props",En(r),e.add(r)}let s=mb(n);if(s.length){let r=new mt(hd(s),Vt({color:Z.shadowTint}));r.name="grey-wall-trim",e.add(r)}if(n.marks.length){let r=new mt(hd(n.marks),Vt({color:Z.hotPink}));r.name="grey-marks",e.add(r)}if(n.ammoCrates&&n.ammoCrates.length){let r=[];for(let a of n.ammoCrates)r.push({min:[a.pos[0]-.35,0,a.pos[2]-.25],max:[a.pos[0]+.35,.4,a.pos[2]+.25]}),r.push({min:[a.pos[0]-.39,.4,a.pos[2]-.29],max:[a.pos[0]+.39,.5,a.pos[2]+.29]});let o=new mt(si(hd(r)),Vt({color:Z.playerOrange}));o.name="grey-crate",En(o),e.add(o)}if(n.landmark){let r=n.landmark,o=_c({text:r.text,w:r.w,h:r.h});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=Math.PI,e.add(o)}for(let r of n.signs||[]){let o=_c({text:r.text,w:r.w,h:r.h,bg:r.bg,seed:4});o.position.set(r.pos[0],r.pos[1],r.pos[2]),o.rotation.y=r.yaw,e.add(o)}return{group:e,boxes:n.boxes,update(r){}}}var Gm=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(Gm)),n),gs=.3,vi=7,_i=15,gb=[ft([-vi,-1,-_i],[vi,0,_i],"floor"),ft([-vi-gs,0,-_i-gs],[vi+gs,4,-_i]),ft([-vi-gs,0,_i],[vi+gs,4,_i+gs]),ft([-vi-gs,0,-_i],[-vi,4,_i]),ft([vi,0,-_i],[vi+gs,4,_i]),ft([-5,0,-9.5],[-3,1,-8.5],"low"),ft([2,0,-9.5],[4,1,-8.5],"low"),ft([-.4,0,-7.4],[.4,4,-6.6],"pillar"),ft([-1,0,-3.5],[1,1,-2.5],"low"),ft([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),ft([3.5,0,-1.5],[5.5,1,-.5],"low"),ft([-4.5,0,3.5],[-2.5,1,4.5],"low"),ft([2.5,0,3.5],[4.5,1,4.5],"low"),ft([-.4,0,6.6],[.4,4,7.4],"pillar"),ft([-4.5,0,9],[-2.5,1,10],"low"),ft([2.5,0,9],[4.5,1,10],"low"),ft([-1.5,0,12],[1.5,2.2,12.6],"tall")],xb=[-12,-6,.5,7,11],vb=[-6,-2,2,6],Hc=[];for(let n of xb)for(let e of vb)Hc.push([e,n]);Hc.push([0,-5],[0,0],[0,9.5]);Hc.push([-3.5,13.5],[3.5,13.5]);var Vm=Gm({name:"kioskRow",boxes:gb,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],waypoints:Hc,ammoCrates:[{pos:[5.5,0,-12.5]}],landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});var xs=class n{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ud=class extends xs{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function dd(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var _b={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:dd,toHexString:dd},ea={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},yb={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){let i=ea.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return ea.toHexString(s)}},Mb={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){let i=ea.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;let s=n*i<<16^e*i<<8^t*i<<0;return ea.toHexString(s)}},Sb=[_b,ea,yb,Mb];function bb(n){return Sb.find(e=>e.match(n))}var fd=class extends xs{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=bb(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=dd(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Qo=class extends xs{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},pd=class extends xs{constructor(e,t,i,s,r,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},i=_=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),i(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),i(this._step*this._normalizeMouseWheel(_)))},o=!1,a,l,h,c,f,u=5,d=_=>{a=_.clientX,l=h=_.clientY,o=!0,c=this.getValue(),f=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=_=>{if(o){let S=_.clientX-a,M=_.clientY-l;Math.abs(M)>u?(_.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>u&&x()}if(!o){let S=_.clientY-h;f-=S*this._step*this._arrowKeyMultiplier(_),c+f>this._max?f=this._max-c:c+f<this._min&&(f=this._min-c),this._snapClampSetValue(c+f)}h=_.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},p=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(g,_,S,M,b)=>(g-_)/(S-_)*(b-M)+M,t=g=>{let _=this.$slider.getBoundingClientRect(),S=e(g,_.left,_.right,this._min,this._max);this._snapClampSetValue(S)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,h=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},c=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):h(g),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",u))},f=g=>{if(o){let _=g.touches[0].clientX-a,S=g.touches[0].clientY-l;Math.abs(_)>Math.abs(S)?h(g):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",u))}else g.preventDefault(),t(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",u)},d=this._callOnFinishChange.bind(this),m=400,x,p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();let S=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(d,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},md=class extends xs{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},gd=class extends xs{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},wb=`.lil-gui {
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
}`;function Tb(n){let e=document.createElement("style");e.innerHTML=n;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var Wm=!1,Gc=class n{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Wm&&a&&(Tb(wb),Wm=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new md(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new pd(this,e,t,i,s,r);case"boolean":return new ud(this,e,t);case"string":return new gd(this,e,t);case"function":return new Qo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new fd(this,e,t,i)}addFolder(e){let t=new n({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Qo||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Qo)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var D=(n,e,t,i)=>({path:n,min:e,max:t,step:i});function Xm(n){let e=(t,i,s,r)=>D(`weapons.${n}.${t}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,20,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var ta=Object.freeze([D("move.jog",1,10,.1),D("move.aimWalk",.5,6,.1),D("move.sprint",2,14,.1),D("move.accelTime",.01,.6,.01),D("move.stopTime",.01,.6,.01),D("move.turnRate",1,40,.5),D("move.aimTurnRate",1,40,.5),D("move.sprintTurnRate",.2,20,.1),D("move.rollDistance",1,12,.1),D("move.rollTime",.2,1.5,.01),D("move.rollEase",1,4,.05),D("move.rollBuffer",0,.5,.01),D("move.tapMax",.05,.5,.01),D("move.stickSprintMin",0,1,.05),D("move.faceMinSpeed",0,2,.05),D("move.sprintHeadingMinSpeed",0,3,.05),D("move.runClipMinSpeed",0,2,.05),D("move.runRateMin",.1,2,.05),D("move.runRateMax",.5,4,.05),D("move.sprintRateMin",.1,2,.05),D("move.sprintRateMax",.5,4,.05),D("move.stepEvery",.4,4,.05),D("move.stepEverySprint",.4,6,.05),D("move.crawlSpeed",.2,4,.05),D("move.crawlTurnRate",.5,20,.5),D("camera.fov",40,110,1),D("camera.right",-1.5,1.5,.01),D("camera.up",.5,3,.01),D("camera.back",.5,6,.05),D("camera.aim.fov",20,90,1),D("camera.aim.back",.3,5,.05),D("camera.sprint.fov",50,120,1),D("camera.sprint.up",.3,3,.01),D("camera.sprint.back",.5,6,.05),D("camera.sprint.shakeWeight",0,3,.05),D("camera.coverLow.fov",50,120,1),D("camera.coverLow.right",-1.5,1.5,.01),D("camera.coverLow.up",.3,3,.01),D("camera.coverLow.back",.5,6,.05),D("camera.coverTall.fov",50,120,1),D("camera.coverTall.right",-1.5,1.5,.01),D("camera.coverTall.up",.3,3,.01),D("camera.coverTall.back",.5,6,.05),D("camera.downed.fov",40,120,1),D("camera.downed.up",.2,3,.01),D("camera.downed.back",.5,6,.05),D("camera.bump.amount",0,.6,.01),D("camera.bump.halfLife",.01,.3,.005),D("camera.slamShake.amount",0,.3,.005),D("camera.slamShake.time",.02,1,.01),D("camera.slamShake.hz",2,60,.5),D("camera.blendHalfLife",0,.5,.005),D("camera.holdTime",0,2,.05),D("camera.holdRange",10,300,5),D("camera.followHalfLife",0,.5,.005),D("camera.sideHalfLife",0,.6,.005),D("camera.headHideDist",0,2,.05),D("camera.headHideMargin",0,1,.01),D("camera.shake.amp",0,.15,.001),D("camera.shake.hz",1,30,.5),D("camera.probeRadius",.05,.6,.01),D("camera.minBack",0,2,.01),D("camera.wallReturnHalfLife",0,1,.01),D("camera.pitchMin",-1.5,0,.01),D("camera.pitchMax",0,1.5,.01),D("look.mouse",5e-4,.008,1e-4),D("look.pad.yawRate",.5,10,.1),D("look.pad.pitchRate",.5,10,.1),D("look.pad.expo",1,3,.05),D("look.aimScale",.1,1.5,.01),{path:"look.invertY"},D("cover.grabRange",0,5,.05),D("cover.grabAngle",0,180,1),D("cover.grabViewAngle",0,180,1),D("cover.grabSlack",0,5,.05),D("cover.grabMinTilt",0,1,.05),D("cover.gap",0,5,.01),D("cover.endInset",0,5,.01),D("cover.minLength",0,5,.05),D("cover.slideSpeed",0,30,.5),D("cover.slideMinTime",0,2,.01),D("cover.slideMaxTime",0,2,.01),D("cover.slideTurnRate",1,60,.5),D("cover.moveSpeed",0,30,.1),D("cover.alongDeadzone",0,1,.05),D("cover.leaveTilt",0,1,.05),D("cover.leaveAngle",0,180,1),D("cover.endLeaveTime",0,2,.01),D("cover.cornerZone",0,5,.05),D("cover.popTime",0,2,.01),D("cover.blindTime",0,2,.01),D("cover.popShift",0,5,.05),D("cover.pushAngle",0,180,1),D("cover.lowDrawBack",0,1,.01),D("cover.blindDrawBack",0,1,.01),D("cover.vaultTime",0,2,.01),D("cover.vaultMaxDepth",0,5,.05),D("cover.vaultHop",0,5,.05),D("cover.vaultExitSpeed",0,30,.1),D("cover.swapRange",0,5,.05),D("cover.swapSpeed",0,30,.5),D("cover.swapAngle",0,180,1),D("cover.swapMaxOffset",0,5,.05),D("cover.slamSquash",0,1,.01),D("cover.slamSquashTime",0,2,.01),D("cover.thudVolume",0,1,.05),D("cover.autoSlam",0,1,1),D("cover.autoAngle",0,90,1),D("cover.autoDist",0,1,.01),D("cover.autoMinTilt",0,1,.05),D("cover.autoMinSpeed",0,12,.1),D("cover.autoTime",0,1,.01),...Xm("regret"),...Xm("pistol"),D("combat.fireBuffer",0,.5,.01),D("combat.autoReload",0,1,1),D("combat.minRate",.01,1,.01),D("combat.minReloadTime",.01,.5,.01),D("combat.muzzleUp",.5,2,.01),D("combat.muzzleRight",-1,1,.01),D("combat.muzzleForward",0,2,.01),D("combat.blindLift",0,1,.01),D("combat.blindReach",0,1,.01),D("combat.crateRadius",.3,3,.05),D("combat.hitPad",0,.3,.005),D("combat.crouchHead",0,3,.01),D("combat.crouchBodyTop",0,3,.01),D("combat.shoulderDrop",0,1,.01),D("combat.pickupRadius",.2,3,.05),D("health.max",1,500,1),D("health.regenDelay",0,15,.1),D("health.regenTime",0,15,.1),D("health.downedTime",0,60,.5),D("health.standInRevive",0,1,1),D("health.reviveTime",0,10,.1),D("health.reviveHealth",0,1,.05),D("health.godMode",0,1,1),D("health.giveUpHold",0,5,.01),D("associate.radius",0,3,.01),D("associate.height",0,3,.01),D("associate.pointSpacing",.2,3,.01),D("associate.reserveRadius",0,3,.01),D("associate.popShift",0,3,.01),D("associate.linkMax",2,15,.5),D("associate.health",1,1e3,1),D("associate.runSpeed",0,12,.1),D("associate.turnRate",.5,40,.5),D("associate.arriveDist",.01,1,.01),D("associate.stuckTime",.1,5,.1),D("associate.popTime",0,1,.01),D("associate.telegraphTime",0,2,.01),D("associate.burstTime",0,5,.1),D("associate.rate",.5,20,.5),D("associate.damage",0,50,.5),D("associate.range",5,100,1),D("associate.spread",0,15,.1),D("associate.moveSpread",0,15,.1),D("associate.aimLag",0,1,.01),D("associate.suppressChance",0,1,.05),D("associate.suppressTime",0,5,.1),D("associate.suppressRate",.5,20,.5),D("associate.suppressMiss",0,5,.1),D("associate.suppressSpread",0,20,.5),D("associate.coverWaitMin",0,5,.1),D("associate.coverWaitMax",0,8,.1),D("associate.magBursts",1,10,1),D("associate.reloadTime",0,6,.1),D("associate.flinchTime",0,2,.01),D("associate.minRange",0,20,.5),D("associate.preferRange",0,40,.5),D("associate.maxRange",1,60,.5),D("associate.relocateCheck",.05,3,.05),D("associate.relocateAfter",1,60,.5),D("associate.ammoDrop",0,200,1),D("associate.muzzleUp",.5,2,.01),D("director.tokens",0,8,1),D("director.casualTokens",0,8,1),D("director.casual",0,1,1),D("director.tokenCooldown",0,5,.1),D("director.tokenMaxHold",.5,10,.1),D("director.requestWindow",0,2,.05),D("director.pushAfter",1,30,.5),D("director.flankAfter",1,60,.5),D("director.stayRadius",.5,10,.1),D("director.flankAngle",0,180,1),D("director.flankMaxAngle",60,180,1),D("dummy.health",1,1e3,1),D("dummy.respawnTime",0,30,.5),D("dummy.railSpeed",0,10,.1),D("camera.recoil.halfLife",.01,.5,.01),D("camera.recoil.max",0,20,.5),D("look.pad.assist",.1,1,.05),D("feedback.flashTime",.01,.3,.01),D("feedback.flashSize",.05,1.5,.05),D("feedback.tracerTime",.01,.3,.01),D("feedback.tracerWidth",.005,.2,.005),D("feedback.sparkTime",.05,1,.01),D("feedback.sparkCount",0,12,1),D("feedback.gelTime",.1,2,.05),D("feedback.gelCount",0,24,1),D("feedback.gelSpeed",0,10,.1),D("feedback.killGelCount",0,48,1),D("feedback.receiptCount",0,24,1),D("feedback.receiptTime",.2,4,.05),D("feedback.gravity",0,30,.1),D("feedback.hitMarkerTime",.02,1,.01),D("feedback.killMarkerTime",.05,1,.01),D("feedback.reloadResultTime",.1,2,.05),D("feedback.reticleMinGap",0,30,1),D("feedback.lowAmmoFrac",0,1,.05),D("feedback.coverReticleOpacity",0,1,.05),D("feedback.stepDip",0,.1,.001),D("feedback.stepVolume",0,1,.05),D("feedback.shotVolume",0,1,.05),D("feedback.hitVolume",0,1,.05),D("feedback.killVolume",0,1,.05),D("feedback.reloadVolume",0,1,.05),D("feedback.gunSquash",0,.6,.01),D("feedback.gunSquashTime",.01,.5,.01),D("feedback.gunKick",0,.3,.01),D("feedback.bodyKick",0,.3,.01),D("feedback.dummyBurstTime",.01,1,.01),D("feedback.dummyRespawnPop",0,1,.01),D("feedback.faceMaxOpacity",0,1,.05),D("feedback.edgeMaxOpacity",0,1,.05),D("feedback.hitFlashTime",.05,2,.01),D("feedback.hitKick",0,3,.05),D("feedback.hurtVolume",0,1,.05),D("feedback.enemyFlashSize",.05,1.5,.05),D("feedback.enemyTracerTime",.01,.3,.01),D("feedback.enemyTracerWidth",.005,.2,.005),D("feedback.glintSize",.02,.4,.01),D("feedback.blasterVolume",0,1,.05),D("feedback.chargeVolume",0,1,.05),D("feedback.pickupVolume",0,1,.05),D("feedback.barkTime",.2,6,.1),D("feedback.barkGap",0,12,.5),D("melee.holdTime",0,5,.01),D("melee.bashTime",0,5,.01),D("melee.bashHitAt",0,5,.01),D("melee.bashRange",0,10,.05),D("melee.bashAngle",0,180,1),D("melee.bashDamage",0,500,1),D("melee.bashLunge",0,10,.05),D("melee.bashCooldown",0,5,.01),D("melee.revSpeed",0,30,.1),D("melee.revPulse",.05,5,.01),D("melee.cutterReach",0,10,.05),D("melee.cutterAngle",0,180,1),D("melee.cutTime",0,5,.01),D("melee.finishTime",0,5,.01),D("melee.executeRange",0,10,.05),D("melee.executeAngle",0,180,1),D("melee.promptRange",0,10,.05),D("melee.cutterSpin",0,100,1),D("grenade.carry",0,10,1),D("grenade.start",0,10,1),D("grenade.throwSpeed",0,30,.1),D("grenade.throwLift",0,180,1),D("grenade.gravity",.5,30,.1),D("grenade.ballRadius",.02,1,.01),D("grenade.restitution",0,1,.01),D("grenade.friction",0,1,.01),D("grenade.fuse",0,5,.01),D("grenade.radius",0,10,.05),D("grenade.damage",0,500,1),D("grenade.killRadius",0,10,.05),D("grenade.killDamage",0,500,1),D("grenade.selfDamage",0,2,.05),D("grenade.padReach",0,10,.05),D("grenade.arcTime",0,5,.01),D("grenade.throwTime",0,5,.01)]),Eb=new Map(ta.map(n=>[n.path,n])),na=structuredClone(ce);function Ys(n,e){let t=n;for(let i of e.split(".")){if(t===null||typeof t!="object")return;t=t[i]}return t}function vd(n,e,t){let i=e.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=t,!0}function _d(n=ce,e=na){let t={};for(let i of ta){let s=Ys(n,i.path);s!==Ys(e,i.path)&&(t[i.path]=s)}return t}function Ym(n,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let t=0;for(let i of Object.keys(e)){let s=Eb.get(i);if(!s)continue;let r=e[i],o=Ys(na,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||vd(n,i,r)&&t++)}return t}function xd(n,e){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>xd(s,e)).join(", ")}]`;let t="  ".repeat(e+1);return`{
${Object.keys(n).map(s=>`${t}${s}: ${xd(n[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function qm(n=ce){return["associate","camera","combat","cover","director","dummy","feedback","grenade","health","look","melee","move","weapons"].map(e=>`  ${e}: ${xd(n[e],1)},`).join(`
`)}var yd="cr-tuning",Ab={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Pad",wall:"Wall"},Rb=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function $m(n){let e=n.split("."),t=e.slice(0,-1);return t.length===1&&t[0]==="camera"&&Rb.has(e[1])&&t.push("wall"),t}function Cb(){try{return window.localStorage}catch{return null}}function Zm({storage:n=Cb()}={}){let e=()=>{try{return n?n.getItem(yd):null}catch{return null}},t=x=>{try{n&&(x===null?n.removeItem(yd):n.setItem(yd,x))}catch{}};try{let x=e();x&&Ym(ce,JSON.parse(x))}catch{}let i=new Gc({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let x=document.activeElement;x&&x!==document.body&&s.contains(x)&&x.blur&&x.blur()}s.addEventListener("click",x=>{let p=x.target;p&&p.closest&&p.closest(".lil-title")&&p.blur!==void 0&&r()});let o=new Map;function a(x){let p=i,g="";for(let _ of x){if(g+=`.${_}`,!o.has(g)){let S=p.addFolder(Ab[_]||_);S.close(),o.set(g,S)}p=o.get(g)}return p}function l(){let x=_d();t(Object.keys(x).length?JSON.stringify(x):null)}for(let x of ta){let p=x.path.split("."),g=p[p.length-1],_=Ys(ce,p.slice(0,-1).join(".")),S=typeof Ys(na,x.path)=="boolean"?a($m(x.path)).add(_,g):a($m(x.path)).add(_,g,x.min,x.max,x.step);S.onChange(l),S.onFinishChange(r)}let h=null;function c(x){if(!h){h=document.createElement("textarea"),h.readOnly=!0,h.rows=8,Object.assign(h.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let p=document.createElement("div");p.textContent="Press Cmd+C to copy",p.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",h.note=p,s.appendChild(p),s.appendChild(h)}h.value=x,h.note.hidden=!1,h.hidden=!1,h.focus(),h.select()}function f(x){h&&(h.hidden=!0,h.note.hidden=!0);let p=null;try{p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(x):null}catch{p=null}if(!p){c(x);return}p.catch(()=>c(x))}let u={copyChanges(){r(),f(JSON.stringify(_d(),null,2))},copyForFile(){r(),f(qm())},resetAll(){r();for(let x of ta)vd(ce,x.path,Ys(na,x.path));t(null),i.controllersRecursive().forEach(x=>x.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let d=!1;function m(x){d=x,s.style.display=x?"":"none"}return m(!1),{toggle(){m(!d)},isOpen:()=>d}}var Jm=Math.PI*2,zi=n=>n-Jm*Math.round(n/Jm),ri=(n,e)=>Math.atan2(n,e);function ia(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function qn(n,e){let t=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*t-n.moveX*i,r=-n.moveY*i+n.moveX*t,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function cn(n,e,t){let i=zi(e-n);return n+Math.max(-t,Math.min(t,i))}function Fr(n,e,t,i,s,r){let o=n.vel,a=(Math.hypot(e,t)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],h=t-o[2],c=Math.hypot(l,h);c<=a?(o[0]=e,o[2]=t):(o[0]+=l/c*a,o[2]+=h/c*a)}var Md=[0,0],Vc=[0,0,0],sa=1e-9,Pb=1.5;var Ib=(n=ce)=>n.tobble?.playerReviveTime??Pb;function Km(n,e,t){let i=e-n.pos[0],s=t-n.pos[2];Math.hypot(i,s)>1e-6&&(n.facing=n.facing+zi(Math.atan2(i,s)-n.facing)),n.heading=n.facing}function Wc(n){n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0}var Xc={bash:{acceptsTap:!1,selfMoves:!0,enter(n){n.aiming=!1,n.firing=!1,n.scratch.dir=[Math.sin(n.facing),Math.cos(n.facing)],n.scratch.prevOff=0,n.scratch.hit=!1,n.heading=n.facing},update(n,e,t){let i=ce.melee,s=n.scratch;n.aiming=!1,n.firing=!1;let r=n.stateTime>=i.bashTime-sa,o=r||!(i.bashTime>0)?1:n.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,Vc[0]=s.dir[0]*l,Vc[1]=0,Vc[2]=s.dir[1]*l,n.moveBy(Vc,t,!1),!s.hit&&(r||n.stateTime>=i.bashHitAt-sa)&&(s.hit=!0,n.onAction?.({type:"bashHit"})),r?(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(n){n.aiming=!1,n.firing=!1,n.heading=n.facing},update(n,e,t){let i=n.tuning,s=ce.melee.revSpeed;n.aiming=!1,n.firing=!1,qn(e,Md),Fr(n,Md[0]*s,Md[1]*s,s,t,i);let r=n.speed();return r>s&&(n.vel[0]*=s/r,n.vel[2]*=s/r),r>i.faceMinSpeed?n.facing=cn(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t):n.facing=cn(n.facing,e.camYaw,i.aimTurnRate*t),n.heading=n.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(n){Wc(n)},update(n){return Wc(n),n.stateTime<n.scratch.time-sa?null:(n.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(n){Wc(n)},update(n,e){return Wc(n),e.interactHeld?n.stateTime<Ib()-sa?null:(n.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},ra={bash(n,e){return n.state!=="move"&&n.state!=="sprint"||n.bashReadyAt>n.clock+sa?!1:(n.bashReadyAt=n.clock+ce.melee.bashCooldown,Number.isFinite(e)&&(n.facing=n.facing+zi(e-n.facing)),n.go("bash",{}),!0)},rev(n,e){return e?n.state!=="move"&&n.state!=="sprint"?!1:(n.go("rev",{}),!0):n.state!=="rev"?!1:(n.go("move",{}),!0)},execute(n,e,t){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("execute",{}),n.scratch.time=Number.isFinite(t)&&t>0?t:0,Km(n,e[0],e[1]),!0)},reviveTobble(n,e){return n.state!=="move"&&n.state!=="sprint"&&n.state!=="rev"?!1:(n.go("reviveTobble",{}),Km(n,e[0],e.length>2?e[2]:e[1]),!0)}};var yi=1e-9,Sd=Math.PI/180,Qm=.05,Lb=1.8,Db={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function e0(n=ce.cover,e=ce.move){return{radius:e.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var Nb=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],Ob=n=>{for(let e of["a","b","tangent","normal"])Object.freeze(n[e]);return Object.freeze(n)};function t0(n,{radius:e,gap:t,endInset:i,minLength:s,exclude:r=[]}){let o=e+t,a=[];return n.forEach((l,h)=>{let c=Db[l.kind];if(!c)return;let f=n.filter((u,d)=>d!==h&&u.kind!=="floor"&&u.max[1]>Qm&&u.min[1]<Lb);for(let u of Nb){let d=u.axis*2,m=2-d,x=(u.sign>0?l.max[d]:l.min[d])+u.sign*o,p=l.min[m],g=l.max[m],_=g-p,S=[];for(let y of f){if(!(x>y.min[d]-o+yi&&x<y.max[d]+o-yi))continue;let w=y.min[m]-o-p,E=y.max[m]+o-p;E>yi&&w<_-yi&&S.push([Math.max(w,0),Math.min(E,_)])}S.sort((y,w)=>y[0]-w[0]);let M=[];for(let y of S){let w=M[M.length-1];w&&y[0]<=w[1]+yi?w[1]=Math.max(w[1],y[1]):M.push([y[0],y[1]])}let b=[],T=0,v=!0;for(let[y,w]of M)y>T+yi&&b.push([T,y,v,!1]),T=w,v=!1;_>T+yi&&b.push([T,_,v,!0]),b.forEach(([y,w,E,R],I)=>{let F=`${h}${u.name}#${I}`;if(r.includes(F))return;let P=p+y+(E?i:0),G=p+w-(R?i:0),O=G-P;if(O<s-yi)return;let H=u.axis===0?[x,P]:[P,x],$=u.axis===0?[x,G]:[G,x];a.push(Ob({id:F,kind:c,boxIndex:h,a:H,b:$,length:O,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[d]-l.min[d],openA:E,openB:R}))})}}),a}function oi(n,e,t=[0,0]){return t[0]=n.a[0]+n.tangent[0]*e,t[1]=n.a[1]+n.tangent[1]*e,t}function vs(n,e,t=ce.cover){let i=e<=t.cornerZone,s=n.length-e<=t.cornerZone;return i&&s?e<=n.length-e?-1:1:i?-1:s?1:0}function oa(n,e){return e<0?n.openA:n.openB}var jm=.9,n0=(n,e,t,i)=>xi(n,[e[0],jm,e[1]],[t[0],jm,t[1]],.9*i)===1;function aa(n,e,t,i,s,r,o){let a=Math.cos(r.grabAngle*Sd),l=Math.sin(s),h=Math.cos(s),c=r.grabViewAngle*Sd,f=null;for(let u of n){let d=(t[0]-u.a[0])*u.normal[0]+(t[2]-u.a[1])*u.normal[1],m=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(d<-(r.gap+.02)||m<a||m<=yi)continue;let x=Math.max(d,0)/m,p=(t[0]+i[0]*x-u.a[0])*u.tangent[0]+(t[2]+i[1]*x-u.a[1])*u.tangent[1];if(p<-r.grabSlack||p>u.length+r.grabSlack)continue;let g=Math.max(0,Math.min(u.length,p)),_=oi(u,g),S=_[0]-t[0],M=_[1]-t[2],b=Math.hypot(S,M);if(!(b>r.grabRange||f&&b>=f.dist)){if(b>.3){let T=(S*l+M*h)/b;if(Math.acos(Math.max(-1,Math.min(1,T)))>c)continue}n0(e,[t[0],t[2]],_,o)&&(f={edge:u,t:g,point:_,dist:b})}}return f}function i0(n,e,t,i,s,r,o){if(vs(t,i,r)!==s||!oa(t,s))return null;let a=oi(t,i),l=Math.cos(r.swapAngle*Sd),h=null;for(let c of n){if(c===t||c.normal[0]*t.normal[0]+c.normal[1]*t.normal[1]<l)continue;let f=Math.hypot(c.a[0]-a[0],c.a[1]-a[1]),u=Math.hypot(c.b[0]-a[0],c.b[1]-a[1]),d=f<=u?0:c.length,m=oi(c,d),x=m[0]-a[0],p=m[1]-a[1],g=Math.hypot(x,p);(x*t.tangent[0]+p*t.tangent[1])*s<=0||Math.abs(x*t.normal[0]+p*t.normal[1])>r.swapMaxOffset||g>r.swapRange||h&&g>=h.dist||n0(e,a,m,o)&&(h={edge:c,t:d,point:m,dist:g})}return h}function Ub(n,e,t,i){let s=e[1]+Qm,r=e[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<t-yi)return!1}return!0}function s0(n,e,t,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=oi(n,e),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!Ub(t,l,s,r))return null;let h=t.filter((c,f)=>f!==n.boxIndex);return xi(h,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var Fb=["coverSlide","cover","vault","coverSwap"],r0=Math.PI/180,jt=[0,0],qc=[0,0],_s=[0,0,0],l0=.001,kb=2,bd=(n,e,t)=>Math.max(e,Math.min(t,n));function wd(n,e,t){if(ia(e)>=n.coverTuning.grabMinTilt){qn(e,jt);let i=Math.hypot(jt[0],jt[1]);t[0]=jt[0]/i,t[1]=jt[1]/i}else t[0]=Math.sin(n.facing),t[1]=Math.cos(n.facing);return t}var c0={name:"cover",state:"coverSlide",when(n,e){return n.coverTarget=aa(n.coverEdges,n.boxes,n.pos,wd(n,e,qc),e.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},Yc={};function h0(n,e){let t=n.coverTuning;if(!t.autoSlam||e.aim||ia(e)<t.autoMinTilt)return null;Object.assign(Yc,t),Yc.grabAngle=t.autoAngle,Yc.grabRange=t.autoDist,qn(e,jt);let i=Math.hypot(jt[0],jt[1]);qc[0]=jt[0]/i,qc[1]=jt[1]/i;let s=aa(n.coverEdges,n.boxes,n.pos,qc,e.camYaw,Yc,n.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(n.runVel[0]*r[0]+n.runVel[1]*r[1])>=t.autoMinSpeed?s:null}function Bb(n,e,t){let i=vs(n,e,t);return n.kind==="low"||i!==0&&oa(n,i)}function Hi(n){return n.cover?n.cover.edge:n.scratch.edge||null}function Td(n){if(n.state==="downed")return"downed";if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let e=Hi(n);if(e)return e.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function qs(n){let e=n.cover;if(!e)return 1;let t=e.edge,i=e.popEnd;if(i===0&&(i=vs(t,e.t,n.coverTuning)),i===0)return 1;let s=ri(-t.normal[0],-t.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=t.tangent[0]*i*r+t.tangent[1]*i*o<0?-1:1;return oa(t,i)?a:-a}function o0(n,e,t,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(l0,bd(o/Math.max(e,1e-6),t,i)),n.aiming=!1}function a0(n,e,t,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return _s[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],_s[1]=0,_s[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(_s,e,!1),i!==null&&(n.facing=cn(n.facing,i,t*e)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var zb={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;o0(n,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(n,e,t){let i=n.scratch.edge;return a0(n,t,n.coverTuning.slideTurnRate,ri(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTuning;n.cover=null,o0(n,e.swapSpeed,0,kb);let t=n.scratch;n.heading=ri(t.to[0]-t.from[0],t.to[2]-t.from[2]),n.facing=n.facing+zi(n.heading-n.facing)},update(n,e,t){return a0(n,t,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let e=n.coverTarget;n.coverTarget=null;let t=n.scratch,i=e.edge;n.cover=null,n.aiming=!1,t.edge=i,t.landing=e.landing,t.from=[n.pos[0],n.pos[2]],n.heading=ri(-i.normal[0],-i.normal[1]),n.facing=n.facing+zi(n.heading-n.facing)},update(n,e,t){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,l0)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,e,t){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=qn(e,jt),l=Math.hypot(jt[0],jt[1]),h=l>0?jt[0]/l:0,c=l>0?jt[1]/l:0,f=r.normal[0],u=r.normal[1],d=a>=i.leaveTilt,m=(y,w)=>(n.vel[0]=y*o.jog,n.vel[1]=0,n.vel[2]=w*o.jog,"move");if(d&&h*f+c*u>=Math.cos(i.leaveAngle*r0))return m(jt[0],jt[1]);if(e.tap&&d){let y=Math.cos(i.pushAngle*r0);if(-(h*f+c*u)>=y){let E=s0(r,s.t,n.boxes,i,o.radius,o.height);if(E)return n.coverTarget={landing:E,edge:r},"vault"}let w=h*r.tangent[0]+c*r.tangent[1];if(Math.abs(w)>=y){let E=i0(n.coverEdges,n.boxes,r,s.t,w>0?1:-1,i,o.radius);if(E)return n.coverTarget=E,"coverSwap"}}let x=vs(r,s.t,i),p=Bb(r,s.t,i),g=e.aim&&p?1:0,_=e.fire&&!e.aim&&p?1:0,S=i.popTime>0?t/i.popTime:1;s.pop=s.pop<g?Math.min(g,s.pop+S):Math.max(g,s.pop-S);let M=i.blindTime>0?t/i.blindTime:1;s.blind=s.blind<_?Math.min(_,s.blind+M):Math.max(_,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?x:0,s.blindEnd=s.blind>0&&r.kind!=="low"?x:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let b=!1;if(s.pop===0&&s.blind===0){let y=jt[0]*r.tangent[0]+jt[1]*r.tangent[1];if(Math.abs(y)>=i.alongDeadzone){let w=s.t+y*i.moveSpeed*t;if(s.t=bd(w,0,r.length),w!==s.t&&oa(r,y>0?1:-1)&&(b=!0,s.endPush+=t,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(y),r.tangent[1]*Math.sign(y))}}else s.blindEnd!==0&&_===1&&(s.t=bd(s.t+s.blindEnd*i.moveSpeed*t,0,r.length));b||(s.endPush=0);let T=oi(r,s.t),v=s.popEnd*i.popShift*s.pop;return _s[0]=T[0]+r.tangent[0]*v-n.pos[0],_s[1]=0,_s[2]=T[1]+r.tangent[1]*v-n.pos[2],n.moveBy(_s,t,!1),s.pop>0?n.facing=cn(n.facing,e.camYaw,o.aimTurnRate*t):n.facing=cn(n.facing,ri(-f,-u),o.turnRate*t),n.heading=n.facing,null}}},u0=Object.fromEntries(Fb.map(n=>[n,zb[n]]));var d0=n=>[Math.sin(n),0,Math.cos(n)],f0=n=>[-Math.cos(n),0,Math.sin(n)],Hb=(n,e,t)=>e*(1-(1-n)**t),hn=[0,0],$c=[0,0,0];function Ed(n,e,t){return e.sprint&&!e.aim&&!e.grenade&&ia(e)>=t.stickSprintMin}var Gb={move:{acceptsTap:!0,enter(){},update(n,e,t){let i=n.tuning;if(Ed(n,e,i))return"sprint";n.aiming=e.aim,n.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return qn(e,hn),Fr(n,hn[0]*s,hn[1]*s,s,t,i),e.aim||e.fire||e.grenade?n.facing=cn(n.facing,e.camYaw,i.aimTurnRate*t):n.speed()>i.faceMinSpeed&&(n.facing=cn(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*t)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,e){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):qn(e,hn)>.01?n.heading=Math.atan2(hn[0],hn[1]):n.heading=n.facing},update(n,e,t){let i=n.tuning;return Ed(n,e,i)?(qn(e,hn),n.heading=cn(n.heading,Math.atan2(hn[0],hn[1]),i.sprintTurnRate*t),Fr(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,t,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,e){n.aiming=!1;let t=n.scratch;if(t.dir=[Math.sin(n.facing),Math.cos(n.facing)],qn(e,hn)>.01){let i=Math.hypot(hn[0],hn[1]);t.dir[0]=hn[0]/i,t.dir[1]=hn[1]/i}t.prevOff=0,t.queued=!1,n.heading=Math.atan2(t.dir[0],t.dir[1]),n.facing=n.facing+zi(n.heading-n.facing)},update(n,e,t){let i=n.tuning,s=n.scratch;e.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=Hb(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,$c[0]=s.dir[0]*a,$c[1]=0,$c[2]=s.dir[1]*a,n.moveBy($c,t,!1),r?s.queued?"roll":Ed(n,e,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(n){n.cover=null,n.coverTarget=null,n.aiming=!1,n.firing=!1,n.vel[0]=n.vel[1]=n.vel[2]=0},update(n,e,t){let i=n.tuning;return n.aiming=!1,n.firing=!1,qn(e,hn),Fr(n,hn[0]*i.crawlSpeed,hn[1]*i.crawlSpeed,i.crawlSpeed,t,i),n.speed()>i.faceMinSpeed&&(n.facing=cn(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.crawlTurnRate*t)),n.heading=n.facing,null},exit(){}},...u0,...Xc},Vb=[c0,{name:"roll",when:()=>!0,state:"roll"}];function p0({boxes:n,spawn:e,tuning:t=ce.move,coverTuning:i=ce.cover,coverEdges:s=[],states:r=Gb,contextActions:o=Vb,onState:a,onStep:l,onAction:h}){let c={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:t,boxes:n,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:h,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(c.vel[0],c.vel[2])},moveBy(f,u,d=!0){let m=c.pos,x=Or(n,m,f,t.radius,t.height);if(c.hit=!!x.hit,!d)u>0&&(c.vel[0]=(x.pos[0]-m[0])/u,c.vel[2]=(x.pos[2]-m[2])/u);else if(x.hit)if(u>0)c.vel[0]=(x.pos[0]-m[0])/u,c.vel[2]=(x.pos[2]-m[2])/u;else{let p=x.normal,g=c.vel[0]*p[0]+c.vel[1]*p[1]+c.vel[2]*p[2];g<0&&(c.vel[0]-=p[0]*g,c.vel[1]-=p[1]*g,c.vel[2]-=p[2]*g)}m[0]=x.pos[0],m[1]=x.pos[1],m[2]=x.pos[2]},go(f,u){let d=c.state;r[d].exit?.(c),c.state=f,c.stateTime=0,c.entries++,c.scratch={},r[d].selfMoves&&(c.runVel[0]=c.runVel[1]=0,c.hitTime=0),c.autoTimer=0,r[f].enter(c,u),c.onState?.(f,d,u)},down(){c.go("downed",{})},bash(f){return ra.bash(c,f)},rev(f){return ra.rev(c,f)},execute(f,u){return ra.execute(c,f,u)},reviveTobble(f){return ra.reviveTobble(c,f)},revive(){c.state==="downed"&&c.go("move",{})},place(f,u){r[c.state].exit?.(c),c.state="move",c.stateTime=0,c.firing=!1,c.cover=null,c.coverTarget=null,c.scratch={},c.pos[0]=c.prevPos[0]=f[0],c.pos[1]=c.prevPos[1]=f[1],c.pos[2]=c.prevPos[2]=f[2],c.vel[0]=c.vel[1]=c.vel[2]=0,c.runVel[0]=c.runVel[1]=0,c.hitTime=c.autoTimer=0,c.grenadeAim=!1,c.bashReadyAt=0,u!==void 0?c.facing=c.prevFacing=c.heading=u:c.prevFacing=c.facing},update(f,u){if(c.prevPos[0]=c.pos[0],c.prevPos[1]=c.pos[1],c.prevPos[2]=c.pos[2],c.prevFacing=c.facing,c.firing=!1,u>0&&(c.clock+=u),c.grenadeAim=!!f.grenade&&(c.state==="move"||c.state==="sprint"||c.state==="cover"),f.tap&&r[c.state].acceptsTap){for(let x of o)if(x.when(c,f)){c.go(x.state,f);break}}c.stateTime+=u;let d=r[c.state].update(c,f,u),m=c.state;if(!r[m].selfMoves){let x=c.vel[0],p=c.vel[2],g=Math.hypot(x,p);c.moveBy([c.vel[0]*u,0,c.vel[2]*u],u,!0),c.hit?(c.hitTime+=u,(g>=Math.hypot(c.runVel[0],c.runVel[1])||c.hitTime>2*c.coverTuning.autoTime)&&(c.runVel[0]=x,c.runVel[1]=p)):(c.runVel[0]=x,c.runVel[1]=p,c.hitTime=0)}if(m==="move"||m==="sprint")if(!(c.speed()>c.tuning.runClipMinSpeed))c.stepDist=.5*c.tuning.stepEvery;else{c.stepDist+=Math.hypot(c.pos[0]-c.prevPos[0],c.pos[2]-c.prevPos[2]);let p=Math.max(.1,m==="sprint"?c.tuning.stepEverySprint:c.tuning.stepEvery);c.stepDist>=p&&(c.stepDist%=p,c.steps++,c.foot^=1,c.onStep?.({foot:c.foot,sprint:m==="sprint",speed:c.speed()}))}if(m==="move"||m==="sprint"){let x=h0(c,f);if(!x)c.autoTimer=0;else if((c.autoTimer+=u)>=c.coverTuning.autoTime){c.coverTarget=x,c.go("coverSlide",f);return}}d&&c.go(d,f)}};return r[c.state].enter(c,{moveX:0,moveY:0,camYaw:0}),c}function m0({AudioContextCtor:n=globalThis.AudioContext}={}){let e=null,t=null,i=!1,s=null;function r(){if(e||i||!n)return e;try{e=new n;let d=Math.max(1,Math.floor(e.sampleRate*.4));t=e.createBuffer(1,d,e.sampleRate);let m=t.getChannelData(0);for(let x=0;x<d;x++)m[x]=Math.random()*2-1}catch{e=null,i=!0}return e}function o(d){if(!(d>0||d<0)||!e.createStereoPanner)return e.destination;let m=e.createStereoPanner();return m.pan.value=Math.max(-1,Math.min(1,d)),m.connect(e.destination),m}let a=()=>{if(e.state==="suspended"){let d=e.resume();d&&d.catch&&d.catch(()=>{})}};function l(d,m,x){let p=e.createGain();return p.gain.setValueAtTime(x,d),p.gain.exponentialRampToValueAtTime(.001,d+m),p.connect(s),p}function h(d,m,x,p,g,_){let S=e.createOscillator();S.type=m,S.frequency.setValueAtTime(x,g),p!==x&&S.frequency.exponentialRampToValueAtTime&&S.frequency.exponentialRampToValueAtTime(p,g+_),S.connect(d),S.start(g),S.stop(g+_)}function c(d,m,x,p,g){let _=e.createBufferSource();_.buffer=t;let S=e.createBiquadFilter();S.type=m,S.frequency.setValueAtTime(x,p),_.connect(S),S.connect(d),_.start(p),_.stop(p+g)}let f=(d,m,x)=>{let p=l(d,.03,x);c(p,"bandpass",m,d,.03)},u={rifle:(d,m)=>{c(l(d,.05,m*.55),"bandpass",2200,d,.05),h(l(d,.16,m*.9),"sine",150,48,d,.16),h(l(d,.22,m*.8),"sine",62,34,d,.22),c(l(d,.26,m*.35),"lowpass",700,d,.26)},pistol:(d,m)=>{c(l(d,.06,m*.6),"bandpass",2e3,d,.06),h(l(d,.2,m*.9),"sine",130,42,d,.2),h(l(d,.26,m*.85),"sine",56,30,d,.26),c(l(d,.3,m*.4),"lowpass",600,d,.3)},dry:(d,m)=>h(l(d,.02,m),"square",1200,1200,d,.02),hit:(d,m)=>h(l(d,.04,m),"sine",1600,1600,d,.04),head:(d,m)=>{let x=l(d,.06,m);h(x,"sine",2400,2400,d,.06),h(x,"sine",3200,3200,d,.06)},kill:(d,m)=>{let x=l(d,.12,m);h(x,"sine",300,900,d,.12);let p=l(d,.2,m*.8);c(p,"lowpass",1400,d,.2)},magOut:(d,m)=>{f(d,3e3,m),f(d+.08,2200,m)},magIn:(d,m)=>{f(d,2e3,m),f(d+.08,3400,m)},perfect:(d,m)=>{let x=l(d,.35,m);h(x,"sine",1320,1320,d,.35),h(x,"sine",1980,1980,d,.35)},good:(d,m)=>h(l(d,.15,m),"sine",990,990,d,.15),jam:(d,m)=>h(l(d,.15,m),"square",90,90,d,.15),blaster:(d,m)=>{let x=l(d,.1,m);h(x,"square",900,300,d,.1),c(x,"bandpass",1500,d,.1)},charge:(d,m)=>{let x=e.createGain();x.gain.setValueAtTime(.001,d),x.gain.exponentialRampToValueAtTime(m,d+.3),x.gain.exponentialRampToValueAtTime(.001,d+.35),x.connect(s),h(x,"sine",300,900,d,.35)},hurt:(d,m)=>{let x=l(d,.15,m);c(x,"lowpass",600,d,.15),h(x,"sine",80,80,d,.15)},downed:(d,m)=>h(l(d,.6,m),"sine",400,80,d,.6),clear:(d,m)=>{[523,659,784].forEach((x,p)=>h(l(d+p*.12,.15,m),"sine",x,x,d+p*.12,.15))},pickup:(d,m)=>{h(l(d,.06,m),"sine",880,880,d,.06),h(l(d+.07,.08,m),"sine",1320,1320,d+.07,.08)},thud:(d,m)=>{h(l(d,.32,m),"sine",60,30,d,.32),c(l(d,.28,m*.6),"lowpass",260,d,.28),c(l(d,.07,m*.3),"bandpass",900,d,.07)},step:(d,m)=>{h(l(d,.1,m),"sine",95,50,d,.1),c(l(d,.07,m*.5),"lowpass",280,d,.07)}};return{play(d,m,x=0){let p=u[d];if(!(!p||!(m>0)||!r()))try{a(),s=o(x),p(e.currentTime,m)}catch{}},unlock(){if(r())try{a()}catch{}}}}function g0(){let n=!1;return{update(e,t,i){return i?(t&&(n=!0),e||(n=!1),{fire:n&&!!e,firePressed:!!t}):(n=!1,{fire:!1,firePressed:!1})},reset(){n=!1}}}var Zc=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),x0=Object.freeze(["regret",null,"pistol"]);function v0(n,e){return n>=e.perfectStart&&n<=e.perfectEnd?"perfect":n>=e.goodStart&&n<=e.goodEnd?"good":"jam"}function Ad(n,e,t,i){let s=Math.max(n.reloadTime,i.minReloadTime);return t==="perfect"?Math.min(e+n.perfectFinish,s):t==="good"?Math.min(e+n.goodFinish,s):t==="jam"?s+n.jamPenalty:s}var Wb={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function _0({weapons:n=ce.weapons,combat:e=ce.combat,loadout:t=x0}={}){let i={},s=()=>{for(let x of t)x&&Object.assign(i[x]||(i[x]={}),{mag:Math.floor(n[x].mag),reserve:Math.floor(n[x].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,t.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>t[o.slot],l=(x,p)=>x[Wb[p]||"spreadHip"],h=x=>x!=null&&o.reload===null&&o.switching<=0;function c(){let x=a(),p=n[x],g=i[x];return o.reload===null&&o.switching<=0&&g.mag<p.mag&&(p.infiniteReserve>0||g.reserve>0)}function f(){let x=a(),p=n[x];o.reload={id:x,t:0,press:null,end:Ad(p,0,"normal",e)},i[x].boost=!1,r.push({type:"reloadStart",id:x})}function u(){let{id:x,press:p}=o.reload,g=n[x],_=i[x],S=Math.max(0,g.mag-_.mag);if(g.infiniteReserve>0)_.mag+=S;else{let M=Math.min(S,_.reserve);_.mag+=M,_.reserve-=M}_.boost=p==="perfect",o.reload=null,r.push({type:"reloadDone",id:x,result:p||"normal"})}function d(x){x===o.slot||!t[x]||(o.reload=null,o.slot=x,o.switching=n[t[x]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:t[x]}))}function m(x){let p=t.length;for(let g=1;g<p;g++){let _=(o.slot+x*g+p*p)%p;if(t[_])return d(_)}}return o.current=a,o.canFire=h,o.spreadOf=x=>l(n[a()],x)+i[a()].bloom,o.update=function(p,g,_){r.length=0,(!(_>0)||!Number.isFinite(_))&&(_=0);let S=p.weapon;S==="next"?m(1):S==="prev"?m(-1):(S===1||S===2||S===3)&&d(S-1),o.switching-=_;for(let E of t)E&&(i[E].bloom=Math.max(0,i[E].bloom-n[E].bloomRecover*_));let M=a(),b=n[M],T=i[M];if(p.reload){if(o.reload===null)c()&&f();else if(o.reload.press===null){let E=o.reload,R=Math.max(b.reloadTime,e.minReloadTime);E.press=v0(E.t/R,b),E.end=Ad(b,E.t,E.press,e),r.push({type:"reloadPress",id:M,result:E.press})}}o.reload!==null&&(o.reload.t+=_,o.reload.t>=o.reload.end&&u()),p.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=_,p.fire||(o.dryLatched=!1),h(g)||(o.buffer=0);let v=b.auto>0,y=v?!!p.fire:o.buffer>0,w=1/Math.max(b.rate,e.minRate);for(o.cooldown-=_,y||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-w);y&&h(g)&&o.cooldown<=0;){if(T.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&c()&&f();break}if(T.mag--,r.push({type:"shot",id:M,mult:T.boost?b.perfectDamage:1,spread:o.spreadOf(g)}),T.bloom=Math.min(b.bloomMax,T.bloom+b.bloomPerShot),o.cooldown+=w,T.mag===0&&(T.boost=!1),!v){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,t.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(x,p)=>{let g=i[x];!g||n[x].infiniteReserve>0||!(p>0)||(g.reserve=Math.max(g.reserve,Math.min(Math.floor(n[x].reserveMax),g.reserve+Math.floor(p))))},o.refill=()=>{for(let x of t)x&&(i[x].reserve=Math.floor(n[x].reserveMax))},o.set=(x,{mag:p,reserve:g}={})=>{i[x]&&(p!==void 0&&(i[x].mag=p),g!==void 0&&(i[x].reserve=g))},o}function y0(n){if(n.grenadeAim||Object.hasOwn(Xc,n.state))return null;if(n.state==="move")return n.aiming?"aim":n.firing?"hip":null;if(n.state==="cover"&&n.cover){if(n.cover.pop===1)return"aim";if(n.cover.blind===1)return"blind"}return null}var kr=[0,0];function M0(n,e,t,i=ce.combat,s=[0,0,0]){if(e==="blind"&&n.cover){let l=n.cover,h=l.edge,c=n.tuning.radius+n.coverTuning.gap,f=h.normal;if(h.kind==="low")oi(h,l.t,kr),s[0]=kr[0]-f[0]*(c+i.blindReach),s[1]=h.height+i.blindLift,s[2]=kr[1]-f[1]*(c+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<h.length-l.t?-1:1;oi(h,u<0?0:h.length,kr);let d=n.coverTuning.endInset+i.blindReach;s[0]=kr[0]+h.tangent[0]*u*d-f[0]*c,s[1]=i.muzzleUp,s[2]=kr[1]+h.tangent[1]*u*d-f[1]*c}return s}let r=i.muzzleRight*qs(n),o=Math.sin(t),a=Math.cos(t);s[1]=n.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=n.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=n.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!Fc(n.boxes,s,0)));l-=.25);return s}function Xb(n,e,t,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(n[o]<t.min[o]||n[o]>t.max[o])return 1/0}else{let a=(t.min[o]-n[o])/e[o],l=(t.max[o]-n[o])/e[o];if(a>l){let h=a;a=l,l=h}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function Rd(n,e,t,i,s=1/0){let r=n[0]-t[0],o=n[1]-t[1],a=n[2]-t[2],l=r*e[0]+o*e[1]+a*e[2],h=r*r+o*o+a*a-i*i;if(h<=0)return 0;let c=l*l-h;if(c<0)return 1/0;let f=-l-Math.sqrt(c);return f>=0&&f<=s?f:1/0}function Yb(n,e,t,i,s,r=1/0){let o=i[0]-t[0],a=i[1]-t[1],l=i[2]-t[2],h=n[0]-t[0],c=n[1]-t[1],f=n[2]-t[2],u=o*o+a*a+l*l,d=o*h+a*c+l*f,m=u>1e-12?Math.max(0,Math.min(1,d/u)):0,x=h-o*m,p=c-a*m,g=f-l*m;if(x*x+p*p+g*g<=s*s)return 0;let _=Math.min(Rd(n,e,t,s,r),Rd(n,e,i,s,r));if(u>1e-12){let S=o*e[0]+a*e[1]+l*e[2],M=e[0]*h+e[1]*c+e[2]*f,b=h*h+c*c+f*f,T=u-S*S;if(T>1e-12*u){let v=u*M-d*S,y=u*b-d*d-s*s*u,w=v*v-T*y;if(w>=0){let E=(-v-Math.sqrt(w))/T,R=d+E*S;E>=0&&E<=r&&R>0&&R<u&&E<_&&(_=E)}}}return _}function Ln(n,e,t,i,s,{ignoreBox:r=-1}={}){let o=t,a="none",l=null,h=-1,c=!1;for(let f=0;f<i.length;f++){if(f===r)continue;let u=Xb(n,e,i[f],o);u<=o&&u!==1/0&&(o=u,a="world",h=f,l=null,c=!0)}for(let f of s){if(!f.alive)continue;let{head:u,body:d}=f.shapes,m=Rd(n,e,u.c,u.r,o);m<=o&&m!==1/0&&(o=m,a="head",l=f,h=-1,c=!0);let x=Yb(n,e,d.a,d.b,d.r,o);x<=o&&x!==1/0&&(o=x,a="body",l=f,h=-1,c=!0)}return c?{t:o,point:[n[0]+e[0]*o,n[1]+e[1]*o,n[2]+e[2]*o],kind:a,target:l,boxIndex:h}:{t:1/0,point:[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],kind:"none",target:null,boxIndex:-1}}function Jc(n,e,t,i=[0,0,0]){if(!(e>0))return i[0]=n[0],i[1]=n[1],i[2]=n[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*t(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*t(),l=Math.abs(n[1])<.9?0:1,h=l===0?1:0,c=n[1]*0-n[2]*h,f=n[2]*l-n[0]*0,u=n[0]*h-n[1]*l,d=Math.hypot(c,f,u);c/=d,f/=d,u/=d;let m=n[1]*u-n[2]*f,x=n[2]*c-n[0]*u,p=n[0]*f-n[1]*c,g=Math.cos(a)*o,_=Math.sin(a)*o;return i[0]=n[0]*r+c*g+m*_,i[1]=n[1]*r+f*g+x*_,i[2]=n[2]*r+u*g+p*_,i}function S0({lens:n,view:e,muzzle:t,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:h=!1}){if(h){let p=Jc(e,i,l),g=Ln(n,p,s,r,o,{ignoreBox:a}),_=[g.point[0]-t[0],g.point[1]-t[1],g.point[2]-t[2]],S=Math.hypot(_[0],_[1],_[2]),M=S>1e-9?[_[0]/S,_[1]/S,_[2]/S]:[p[0],p[1],p[2]];return{from:t,dir:M,hit:g}}let c=Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),f=Ln(n,e,s+c,r,o,{ignoreBox:a}),u=f.kind==="none"?[n[0]+e[0]*s,n[1]+e[1]*s,n[2]+e[2]*s]:f.point,d=[u[0]-t[0],u[1]-t[1],u[2]-t[2]],m=Math.hypot(d[0],d[1],d[2]);m>1e-9?(d[0]/=m,d[1]/=m,d[2]/=m):(d[0]=e[0],d[1]=e[1],d[2]=e[2]);let x=Jc(d,i,l);return{from:t,dir:x,hit:Ln(t,x,s,r,o)}}var kt=Object.freeze({head:Object.freeze({cy:Kt.neckY+Kt.head.centerY,r:Kt.head.rx}),body:Object.freeze({ay:Kt.ankleHeight,by:Kt.neckY,r:Math.max(...Kt.torso.shirt.map(n=>n[0]))})});function b0(n,e=ce.combat.hitPad){let[t,i,s]=n.pos,r=n.shapes;r.head.c[0]=t,r.head.c[1]=i+kt.head.cy,r.head.c[2]=s,r.head.r=kt.head.r+e,r.body.r=kt.body.r+e,r.body.a[0]=t,r.body.a[1]=i+kt.body.ay,r.body.a[2]=s,r.body.b[0]=t,r.body.b[1]=i+kt.body.by,r.body.b[2]=s}function w0({id:n,pos:e,yaw:t=0,rail:i=null},s=ce.dummy){let r={id:n,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:t,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:kt.head.r},body:{a:[0,0,0],b:[0,0,0],r:kt.body.r}}};return b0(r),r}function qb(n,e){let t=n%(4*e);return t<e?t:t<3*e?2*e-t:t-4*e}function T0(n,e,t=ce.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!n.alive)n.respawnT-=e,n.respawnT<=0&&(n.alive=!0,n.respawnT=0,n.health=t.health,n.railT=0,n.pos[0]=n.home[0],n.pos[1]=n.home[1],n.pos[2]=n.home[2]);else if(n.rail&&n.rail.half>0){n.railT+=e*Math.max(0,t.railSpeed);let i=qb(n.railT,n.rail.half),s=n.rail.axis==="x"?0:2;n.pos[0]=n.home[0],n.pos[2]=n.home[2],n.pos[s]=n.home[s]+i}b0(n)}function E0(n,e,t=ce.dummy){return!n.alive||!(e>0)?null:(n.health-=e,n.health>0?"hit":(n.health=0,n.alive=!1,n.respawnT=t.respawnTime,"kill"))}function Cd(n,e,t=1){return e!=="head"&&e!=="body"?0:n.damage*t*(e==="head"?n.headMult:1)}function A0(n,e,t){for(let i of e)if(Math.hypot(n[0]-i.pos[0],n[2]-i.pos[2])<=t)return!0;return!1}function R0(n){let e=new Float32Array(n),t=new Uint8Array(n),i=0;return{ages:e,alive:s=>t[s]===1,spawn(){let s=-1;for(let r=0;r<n;r++){let o=(i+r)%n;if(!t[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<n;r++)e[r]>e[s]&&(s=r)}return t[s]=1,e[s]=0,i=(s+1)%n,s},clear(){t.fill(0)},update(s,r){for(let o=0;o<n;o++)t[o]&&(e[o]+=s,e[o]>r(o)&&(t[o]=0))}}}var $b=new B(0,0,1);function C0(n,e=()=>ce.feedback){let t=new mn,i=(y=1)=>(Math.random()*2-1)*y;function s(y,w,E){let R=new Ds(y,Vt({color:w,rim:0}),E);R.frustumCulled=!1,R.count=E,t.position.set(0,-1e3,0),t.scale.setScalar(0),t.updateMatrix();for(let I=0;I<E;I++)R.setMatrixAt(I,t.matrix);return n.add(R),{mesh:R,pool:R0(E),pos:new Float32Array(E*3),vel:new Float32Array(E*3),aux:new Float32Array(E*4)}}let r=s(new Mr(.5,0),Z.playerOrange,8),o=s(new Pt(1,1,1),Z.playerOrange,24),a=s(new Mr(.5,0),Z.gel,8),l=s(new Pt(1,1,1),Z.gel,24),h=s(new Pt(.05,.05,.05),Z.cream,48),c=s(new Eo(.5,0),Z.gel,96),f=s(new Pt(.16,.2,.012),Z.cream,48),u=new B;function d(y,w){t.updateMatrix(),y.mesh.setMatrixAt(w,t.matrix),y.mesh.instanceMatrix.needsUpdate=!0}let m=(y,w)=>{t.position.set(0,-1e3,0),t.scale.setScalar(0),t.quaternion.identity(),d(y,w)},x=(y,w,E,R,I)=>{y.pos[w*3]=E,y.pos[w*3+1]=R,y.pos[w*3+2]=I},p=(y,w,E,R,I)=>{y.vel[w*3]=E,y.vel[w*3+1]=R,y.vel[w*3+2]=I};function g(y,w,E,R,I){let F=E[0]+i(R),P=E[1]+i(R),G=E[2]+i(R),O=Math.hypot(F,P,G)||1;p(y,w,F/O*I*(.5+Math.random()*.5),P/O*I*(.5+Math.random()*.5),G/O*I*(.5+Math.random()*.5))}let _=[];function S(y,w,E,R){_.push({k:y,life:w,shown:new Uint8Array(y.pool.ages.length),step(I){let F=e().gravity,P=y;for(let G=0;G<P.pool.ages.length;G++)if(P.pool.alive(G)){P.vel[G*3+1]-=F*I;for(let O=0;O<3;O++)P.pos[G*3+O]+=P.vel[G*3+O]*I}},draw(I){let F=1-y.pool.ages[I]/w();t.position.set(y.pos[I*3],y.pos[I*3+1],y.pos[I*3+2]),t.scale.setScalar(E(I)*Math.max(0,F)),R?t.rotation.set(y.aux[I*4]+y.pool.ages[I]*7,y.aux[I*4+1]+y.pool.ages[I]*5,y.aux[I*4+2]):t.quaternion.identity(),d(y,I)}})}S(h,()=>e().sparkTime,()=>1,!1),S(c,()=>e().gelTime,y=>.05+c.aux[y*4+3]*.07,!1),S(f,()=>e().receiptTime,()=>1,!0);function M(y,w){_.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e().flashTime,step(){},draw(E){let R=1-y.pool.ages[E]/e().flashTime;t.position.set(y.pos[E*3],y.pos[E*3+1],y.pos[E*3+2]),t.scale.setScalar(e()[w]*(.5+.5*Math.max(0,R))),t.rotation.set(y.aux[E*4],y.aux[E*4+1],y.aux[E*4+2]),d(y,E)}})}function b(y,w,E){_.push({k:y,shown:new Uint8Array(y.pool.ages.length),life:()=>e()[w],step(){},draw(R){let I=Math.max(0,1-y.pool.ages[R]/e()[w]),F=e()[E]*I,P=y.aux[R*4];t.position.set(y.pos[R*3],y.pos[R*3+1],y.pos[R*3+2]),t.quaternion.setFromUnitVectors($b,u.set(y.vel[R*3],y.vel[R*3+1],y.vel[R*3+2])),t.scale.set(F,F,P),d(y,R)}})}M(r,"flashSize"),M(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(l,"enemyTracerTime","enemyTracerWidth");let T=(y,w,E)=>{let R=y.pool.spawn();x(y,R,w[0]+E[0]*.1,w[1]+E[1]*.1,w[2]+E[2]*.1),y.aux[R*4]=i(3),y.aux[R*4+1]=i(3),y.aux[R*4+2]=i(3)},v=(y,w,E)=>{let R=E[0]-w[0],I=E[1]-w[1],F=E[2]-w[2],P=Math.hypot(R,I,F);if(!(P>1e-6))return;let G=y.pool.spawn();x(y,G,w[0]+R/2,w[1]+I/2,w[2]+F/2),p(y,G,R/P,I/P,F/P),y.aux[G*4]=P};return{flash(y,w){T(r,y,w)},tracer(y,w){v(o,y,w)},enemyFlash(y,w){T(a,y,w)},enemyTracer(y,w){v(l,y,w)},spark(y,w){for(let E=0;E<e().sparkCount;E++){let R=h.pool.spawn();x(h,R,y[0],y[1],y[2]),g(h,R,w,.9,3)}},gel(y,w,E=e().gelCount){for(let R=0;R<E;R++){let I=c.pool.spawn();x(c,I,y[0],y[1],y[2]),g(c,I,w,1.2,e().gelSpeed),c.aux[I*4+3]=Math.random()}},receipts(y,w=e().receiptCount){for(let E=0;E<w;E++){let R=f.pool.spawn();x(f,R,y[0],y[1],y[2]),g(f,R,[0,1,0],1.5,e().gelSpeed),f.aux[R*4]=i(3),f.aux[R*4+1]=i(3),f.aux[R*4+2]=i(3)}},clear(){for(let y of _){y.k.pool.clear();for(let w=0;w<y.shown.length;w++)y.shown[w]&&(m(y.k,w),y.shown[w]=0)}},update(y){if(y>0)for(let w of _){w.step(y);let{pool:E}=w.k;E.update(y,w.life);for(let R=0;R<E.ages.length;R++)E.alive(R)?(w.draw(R),w.shown[R]=1):w.shown[R]&&(m(w.k,R),w.shown[R]=0)}}}}function Zb(n,e,t){let i=Math.PI/180;return t/2*Math.tan(n*i/2)/Math.tan(e*i/2)}var Jb=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),Kb=n=>n<0?0:n>1?1:n;function P0({arsenal:n,stance:e,firing:t,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:h=null,face:c=null,objective:f="",bark:u=null,banner:d=null,weapons:m=ce.weapons,combat:x=ce.combat,feedback:p=ce.feedback}){let g=n.current(),_=m[g],S=n.ammo[g],M=n.reload,b=s==="pad"?"RB":"R",T={show:!1,marker:0,good:[_.goodStart,_.goodEnd],perfect:[_.perfectStart,_.perfectEnd],flash:h,prompt:""};if(M){let R=Math.max(_.reloadTime,x.minReloadTime);T={...T,show:!0,marker:Kb(M.t/R),prompt:M.press===null?`${b} again on the bright zone`:""}}else S.mag<=0&&(T.prompt=`${b} to reload`);let v=S.mag<=Math.max(0,p.lowAmmoFrac)*_.mag,y=_.infiniteReserve<=0&&S.reserve<=0,w={show:!1,text:"",kind:""};!M&&v&&!d&&(w.show=!0,y&&S.mag<=0?(w.text="NO AMMO",w.kind="none"):y?(w.text="LOW AMMO",w.kind="low"):S.mag<=0?(w.text=`EMPTY \u2014 RELOAD  ${b}`,w.kind="empty"):(w.text=`RELOAD  ${b}`,w.kind="low"));let E=e==="aim";return{weapon:Zc[g].name,mag:S.mag,reserve:_.infiniteReserve>0?"\u221E":S.reserve,reticle:{show:E||!!t||i,gap:p.reticleMinGap+Zb(r,o,a),opacity:i&&!E?p.coverReticleOpacity:1},reload:T,alert:w,hit:{show:!!l,kind:l||null},faceShow:!!c&&!d&&!c.downed.show,face:c,objective:f,bark:u,banner:d}}function I0(n=document.body){let e=(N,V,k,ae)=>{let re=document.createElement(N);return V&&(re.className=V),ae!==void 0&&(re.textContent=ae),k&&k.appendChild(re),re},t=e("div","",n);t.id="cr-hud";let i={};for(let N of["top","right","bottom","left"])i[N]=e("div",`cr-edge cr-edge-${N}`,t);let s="http://www.w3.org/2000/svg",r=(N,V,k)=>{let ae=document.createElementNS(s,N);for(let re of Object.keys(V))ae.setAttribute(re,V[re]);return k&&k.appendChild(ae),ae},o=e("div","cr-face",t),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let h=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let c=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),f=e("div","cr-banner",t),u=e("div","cr-banner-title",f),d=e("div","cr-banner-hint",f),m=e("div","cr-objective",t),x=e("div","cr-bark",t),p=e("span","cr-bark-who",x),g=e("span","cr-bark-text",x),_=e("div","cr-weapon",t),S=e("div","cr-weapon-name",_),M=e("div","cr-ammo",_),b=e("div","cr-prompt",_),T=e("div","cr-reload",_),v=e("div","cr-zone cr-zone-good",T),y=e("div","cr-zone cr-zone-perfect",T),w=e("div","cr-marker",T),E=e("div","cr-result",_),R=e("div","cr-alert",t),I=e("div","cr-reticle",t),F=["up","down","left","right"].map(N=>e("div",`cr-arm cr-arm-${N}`,I)),P=e("div","cr-hit",t);e("i","cr-hit-a",P),e("i","cr-hit-b",P),e("i","cr-hit-ring",P);let G={},O=(N,V,k)=>{G[N]!==V&&(G[N]=V,k(V))},H=N=>`${(N*100).toFixed(1)}%`,$=(N,[V,k])=>{N.style.left=H(V),N.style.width=H(Math.max(0,k-V))};return{render(N){O("weapon",N.weapon,k=>{S.textContent=k}),O("ammo",`${N.mag}|${N.reserve}`,()=>{M.textContent=`${N.mag} / ${N.reserve}`}),O("prompt",N.reload.prompt,k=>{b.textContent=k}),O("reload.show",N.reload.show,k=>{T.hidden=!k}),O("good",`${N.reload.good}`,()=>$(v,N.reload.good)),O("perfect",`${N.reload.perfect}`,()=>$(y,N.reload.perfect)),O("marker",Math.round(N.reload.marker*500),()=>{w.style.left=H(N.reload.marker)}),O("flash",N.reload.flash,k=>{E.textContent=k&&Jb[k]||"",E.dataset.kind=k||""}),O("alert",N.alert.show?`${N.alert.kind}|${N.alert.text}`:"",()=>{R.hidden=!N.alert.show,R.textContent=N.alert.text,R.dataset.kind=N.alert.kind}),O("ret.show",N.reticle.show,k=>{I.hidden=!k}),O("ret.op",Math.round(N.reticle.opacity*100),()=>{I.style.opacity=N.reticle.opacity.toFixed(2)}),O("ret.gap",Math.round(N.reticle.gap),k=>{F.forEach(ae=>ae.style.setProperty("--gap",`${k}px`))});let V=N.face;if(O("face.show",!!N.faceShow,k=>{o.hidden=!k}),V){O("face.op",Math.round(V.face.opacity*100),()=>{o.style.opacity=V.face.opacity.toFixed(2)}),O("face.frown",Math.round(V.face.frown*50),()=>{c.setAttribute("d",`M 30 72 Q 50 ${(72-24*V.face.frown).toFixed(1)} 70 72`)}),O("face.fill",Math.round(V.face.fill*50),()=>{let k=92*V.face.fill;h.setAttribute("y",(96-k).toFixed(1)),h.setAttribute("height",k.toFixed(1))});for(let k of Object.keys(i))O(`edge.${k}`,Math.round(V.edges[k]*50),()=>{i[k].style.opacity=V.edges[k].toFixed(2)})}O("banner",N.banner?`${N.banner.title}|${N.banner.hint}`:"",k=>{f.hidden=!N.banner,N.banner&&(u.textContent=N.banner.title,d.textContent=N.banner.hint)}),O("objective",N.objective||"",k=>{m.textContent=k,m.hidden=!k}),O("bark",N.bark?`${N.bark.speaker}|${N.bark.text}`:"",()=>{x.hidden=!N.bark,N.bark&&(p.textContent=N.bark.speaker,g.textContent=N.bark.text)}),O("hit",N.hit.show?N.hit.kind:"",k=>{P.hidden=!k,P.dataset.kind=k})}}}function L0(n){let e=cs(Kt),t=hs(e),i=new Mt;i.name=`dummy-${n.id}`,i.add(e.root),i.add(e.shadow);let s=!!(n.rail&&n.rail.half>0),r=n.yaw,o=n.pos[0],a=n.pos[2],l="live",h=0;s&&t.play("run",{fade:0});function c(u){i.scale.setScalar(Math.max(u,1e-4))}function f(u){i.position.set(n.pos[0],n.pos[1],n.pos[2]);let d=n.pos[0]-o,m=n.pos[2]-a;s&&d*d+m*m>1e-8&&(r=Math.atan2(d,m)),o=n.pos[0],a=n.pos[2],i.rotation.y=r;let x=ce.feedback;if(l==="burst"){h+=u;let p=x.dummyBurstTime>0?Math.min(h/x.dummyBurstTime,1):1;c(1+.2*p),p>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){h+=u;let p=x.dummyRespawnPop>0?Math.min(h/x.dummyRespawnPop,1):1;c(p),p>=1&&(l="live")}l!=="gone"&&(t.update(s?u*Math.min(Math.max(ce.dummy.railSpeed/as,.3),3):u),e.update(u))}return{group:i,update:f,hit(){(l==="live"||l==="pop")&&t.play("flinch")},burst(){l="burst",h=0},respawn(){l="pop",h=0,i.visible=!0,c(0)}}}var D0="#f3efe6";function N0(n){for(let e of Object.values(n))e&&typeof e=="object"&&N0(e);return Object.freeze(n)}var O0=N0({...structuredClone(Kt),name:"doc-placeholder",colors:{...Kt.colors,hair:Z.teal,shirt:D0,collar:D0},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Kt.face,brow:"uni",fixedSmile:0}});function jc(n){return yn(n.map(([e,t,i,s,r,o])=>new Pt(e,t,i).translate(s,r,o)),!1)}function la(n,e,t){let i=new mt(si(e),Vt({color:t}));return En(i),n.add(i),i}function jb(){let n=new Mt;return n.name="rifle",la(n,jc([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),Z.playerOrange),la(n,jc([[.05,.12,.06,0,-.07,0]]),Z.ink),la(n,new gn(.055,.055,.03,12).translate(0,-.035,.28),Z.cream),n}function Qb(){let n=new Mt;return n.name="pistol",la(n,jc([[.045,.06,.25,0,.04,.075]]),Z.playerOrange),la(n,jc([[.04,.1,.05,0,-.04,0]]),Z.ink),n}var ew={regret:[0,.06,.45],pistol:[0,.04,.2]},tw=new B(0,0,1),zC=new B,Kc=new B;function U0(){let n=new Mt;n.name="gun";let e={regret:jb(),pistol:Qb()};n.add(e.regret,e.pistol);let t="regret";e.pistol.visible=!1;let i=new B,s=new B(0,0,1),r=1/0;function o(h){if(!(!e[h]||h===t)){t=h;for(let c of Object.keys(e))e[c].visible=c===h}}function a(h,c){i.set(h[0],h[1],h[2]),s.set(c[0],c[1],c[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),n.quaternion.setFromUnitVectors(tw,s),l()}function l(){let h=ce.feedback,c=Math.max(h.gunSquashTime,1e-6),f=r>=0&&r<c?Math.sin(Math.PI*r/c):0,u=h.gunSquash*f;n.scale.set(1+u/2,1+u/2,1-u),n.position.copy(i).addScaledVector(s,-h.gunKick*f)}return{group:n,setWeapon:o,place:a,shot(){r=0,l()},update(h){r+=h>0?h:0,l()},tip(h=[0,0,0]){let c=ew[t];return n.updateMatrix(),Kc.set(c[0],c[1],c[2]).applyMatrix4(n.matrix),h[0]=Kc.x,h[1]=Kc.y,h[2]=Kc.z,h}}}var eh=Math.PI*2,Si=(n,e,t)=>n<e?e:n>t?t:n,nw=n=>n-eh*Math.round(n/eh),B0=.001,Pd=.5;function iw(n,e=n.tuning||ce.move){let t=n.state,i=n.speed();if(t==="downed")return{name:"crawl",rate:Si(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(t==="roll")return{name:"roll",rate:Tt.roll.duration/e.rollTime};if(t==="sprint")return{name:"sprint",rate:Si(i/as,e.sprintRateMin,e.sprintRateMax)};if(t==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:Si(i/as,e.runRateMin,e.runRateMax)};if(n.aiming||n.firing)return{name:"aim",rate:1}}if(t==="coverSlide")return{name:Hi(n).kind==="low"?"coverLow":"coverTall",rate:1};if(t==="coverSwap")return{name:"sprint",rate:Si(i/as,e.sprintRateMin,e.sprintRateMax)};if(t==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||ce.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":qs(n)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Si(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return t==="vault"?{name:"vault",rate:Tt.vault.duration/Math.max((n.coverTuning||ce.cover).vaultTime,B0)}:{name:"idle",rate:1}}function sw(n){let e=n.state==="cover"||n.state==="coverSlide"?Hi(n):null;return!e||e.kind!=="low"?0:n.state==="coverSlide"?Si(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?Si(1-Math.max(n.cover.pop,n.cover.blind||0),0,1):0}var rw=(n,e)=>4*e*n*(1-n),ow=(n,e,t)=>n>=0&&n<t?e*Math.sin(Math.PI*n/t):0;function aw(n){if(n<=.08)return 0;if(n>=.9)return eh;let e=(n-.08)/.82;return eh*e*e*(3-2*e)}var F0=.95,k0=.6,Gi=new B,Mi=[0,0,1],Qc=[0,0,0];function z0(n,e=O0){let t=cs(e),i=hs(t),s=new Mt;s.name="player";let r=new Mt;r.position.y=Pd,t.root.position.y=-Pd,r.add(t.root),s.add(r),s.add(t.shadow);let o=t.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=U0();s.add(l.group);let h=1/0,c=t.root.getObjectByName("head"),f=new B,u=!0;function d(w,E,R){c.getWorldPosition(f),f.y+=t.spec.head.centerY;let I=Math.hypot(w[0]-f.x,w[1]-f.y,w[2]-f.z);return u=Um(I,u,E,R),c.visible=u,u}let m=0,x=0,p=0,g="",_=-1,S=n.slams||0,M=1/0;function b(w,E,R){let I=n.pos,F=n.prevPos,P=n.coverTuning||ce.cover,G=sw(n);m=P.popTime>0?Math.max(G,m+Si(G-m,-E/P.popTime,E/P.popTime)):G;let O=n.state==="cover"&&n.cover&&n.cover.edge.kind==="low"?Si(n.cover.blind||0,0,1):0;if(G>0||O>0){let q=Hi(n);x=q.normal[0],p=q.normal[1]}let H=m*P.lowDrawBack+O*P.blindDrawBack;s.position.set(F[0]+(I[0]-F[0])*w+x*H,F[1]+(I[1]-F[1])*w,F[2]+(I[2]-F[2])*w+p*H),s.rotation.y=n.prevFacing+nw(n.facing-n.prevFacing)*w;let $=iw(n);($.name!==g||n.entries!==_)&&(i.play($.name,$.name==="roll"?{fade:.05}:void 0),g=$.name,_=n.entries),i.update(E*$.rate,$.name==="crawl"?E:void 0),t.update(E);let N=ce.feedback,V=Math.max(N.gunSquashTime,1e-6);h=R&&R.shot?E:h+E;let k=h<V?N.bodyKick*Math.sin(Math.PI*h/V):0;r.rotation.x=(n.state==="roll"?aw(n.stateTime/n.tuning.rollTime):0)-k,(n.slams||0)!==S?(S=n.slams||0,M=0):M+=E;let ae=n.state==="vault"?rw(Si(n.stateTime/Math.max(P.vaultTime,B0),0,1),P.vaultHop):0,re=ow(M,P.slamSquash,P.slamSquashTime);r.scale.set(1+re/2,1-re,1+re/2),r.position.y=Pd*(1-re)+ae,T($.name,E,R)}function T(w,E,R){if(s.updateMatrixWorld(!0),(w==="coverBlindTallL"?a.L:a.R).getWorldPosition(Gi),s.worldToLocal(Gi),R&&R.stance&&w==="coverBlindLow")Mi[0]=0,Mi[1]=Math.sin(F0),Mi[2]=Math.cos(F0);else if(R&&R.stance&&R.dir){let F=Math.cos(s.rotation.y),P=Math.sin(s.rotation.y);Mi[0]=R.dir[0]*F-R.dir[2]*P,Mi[1]=R.dir[1],Mi[2]=R.dir[0]*P+R.dir[2]*F}else Mi[0]=0,Mi[1]=-Math.sin(k0),Mi[2]=Math.cos(k0);R&&R.weapon&&l.setWeapon(R.weapon),l.place([Gi.x,Gi.y,Gi.z],Mi),R&&R.shot&&l.shot(),l.update(E),l.group.visible=n.state!=="roll"&&n.state!=="downed"}function v(w=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(Qc),Gi.set(Qc[0],Qc[1],Qc[2]).applyMatrix4(s.matrixWorld),w[0]=Gi.x,w[1]=Gi.y,w[2]=Gi.z,w}function y(){t.dispose(),t.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:b,dispose:y,rig:t,anim:i,fadeHeadFor:d,gun:l,gunTip:v}}var nh=new Set(["telegraph","burst"]),th=(n,e,t)=>n<e?e:n>t?t:n,lw=n=>n-2*Math.PI*Math.round(n/(2*Math.PI)),cw=n=>n.point&&n.point.kind==="tall"?"tall":"low";function hw(n){let e=cw(n)==="tall";switch(n.state){case"run":return"run";case"flinch":return"flinch";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let t=n.point,i=ri(-t.normal[0],-t.normal[1]);return t.tangent[0]*t.end*Math.cos(i)-t.tangent[1]*t.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function uw(n){if((n.state==="idle"||n.state==="cover"||n.state==="reload"||n.state==="flinch"||n.state==="suppress")&&n.point)return ri(-n.point.normal[0],-n.point.normal[1]);if(nh.has(n.state))return ri(n.aim[0]-n.pos[0],n.aim[2]-n.pos[2]);if(n.state==="run"&&n.path&&n.path[n.pathI]){let e=n.path[n.pathI];if(Math.hypot(e[0]-n.pos[0],e[1]-n.pos[2])>1e-6)return ri(e[0]-n.pos[0],e[1]-n.pos[2])}return n.yaw}function dw(n){return n.state==="dead"||!n.alive?"dead":nh.has(n.state)?"angry":n.state==="flinch"?"scared":"smug"}var V0=.03,Id=[0,.06,.32];function fw(){let n=new Mt;n.name="blaster";let t=yn([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,h,c])=>new Pt(r,o,a).translate(l,h,c)),!1),i=new mt(si(t),Vt({color:Z.glorpPurple}));En(i),n.add(i);let s=new mt(new xn(V0,10,8),new Ii({color:Z.gel}));return s.name="emitter",s.position.set(Id[0],Id[1],Id[2]),n.add(s),{group:n,emitter:s}}var pw=new B(0,0,1),$n=new B,ys=new B,H0=.6,G0=.95;function W0(n){let e=cs(Kt),t=hs(e),i=new Mt;i.name=`associate-${n.id}`,i.add(e.root),i.add(e.shadow);let s=e.root.getObjectByName("body").children[2],r=fw();i.add(r.group);let o="",a="",l=0,h=n.yaw,c="live",f=0,u=!1,d=0,m=0,x=0;function p(){c="live",f=0,l=0,h=n.yaw,u=!1,d=0,i.visible=!0,i.scale.setScalar(1),o="",a="",r.emitter.scale.setScalar(1)}function g(S,M){let b=ce.feedback,T=ce.cover,v=ce.associate;if(c==="burst"){f+=M;let N=b.dummyBurstTime>0?Math.min(f/b.dummyBurstTime,1):1;i.scale.setScalar(1+.2*N),N>=1&&(c="gone",i.visible=!1)}if(c==="gone")return;let y=c==="burst",w=n.pos,E=n.prevPos,R=!y&&n.point&&n.point.kind==="low"&&n.state!=="run"&&n.state!=="dead",I=R?th(1-Math.max(n.pop,n.blind),0,1):0;l=T.popTime>0?Math.max(I,l+th(I-l,-M/T.popTime,M/T.popTime)):I;let F=R?th(n.blind,0,1):0;R&&(m=n.point.normal[0],x=n.point.normal[1]);let P=l*T.lowDrawBack+F*T.blindDrawBack;i.position.set(E[0]+(w[0]-E[0])*S+m*P,E[1]+(w[1]-E[1])*S,E[2]+(w[2]-E[2])*S+x*P);let G=n.state==="run"||nh.has(n.state)?n.prevYaw+lw(n.yaw-n.prevYaw)*S:uw(n);if(h=cn(h,G,v.turnRate*1.5*M),i.rotation.y=h,y)return;let O=hw(n);O!==o&&(t.play(O,O==="flinch"?void 0:{fade:.1}),o=O);let H=O==="run"?th(v.runSpeed/as,.5,3):1;t.update(M*H),e.update(M);let $=dw(n);$!==a&&(e.face.setExpression($),a=$),_(O,M)}function _(S,M){i.updateMatrixWorld(!0),s.getWorldPosition($n);let b=$n.x,T=$n.y,v=$n.z;i.worldToLocal($n);let y=$n.x,w=$n.y,E=$n.z;if(nh.has(n.state)){let R=Math.cos(i.rotation.y),I=Math.sin(i.rotation.y),F=n.aim[0]-b,P=n.aim[2]-v;ys.set(F*R-P*I,n.aim[1]-T,F*I+P*R)}else S==="coverBlindLow"?ys.set(0,Math.sin(G0),Math.cos(G0)):n.state==="suppress"?ys.set(0,.05,1):ys.set(0,-Math.sin(H0),Math.cos(H0));if(ys.lengthSq()<1e-12&&ys.set(0,0,1),ys.normalize(),r.group.position.set(y,w,E),r.group.quaternion.setFromUnitVectors(pw,ys),u){d+=M;let R=.5+.5*Math.sin(d*2*Math.PI*8),I=ce.feedback.glintSize/V0;r.emitter.scale.setScalar(1+(I-1)*R)}else r.emitter.scale.setScalar(1)}return{group:i,update:g,reset:p,death(){c==="live"&&(c="burst",f=0)},glint(S){S&&!u&&(d=0),u=!!S},tip(S=[0,0,0]){return i.updateMatrixWorld(!0),r.emitter.getWorldPosition($n),S[0]=$n.x,S[1]=$n.y,S[2]=$n.z,S},rig:e,anim:t,blaster:r}}function X0(n=ce.health){let e=-1,t=0,i=0,s=!1,r={hp:n.max,downed:!1,downT:0,sinceHit:0,fraction(){return n.max>0?Math.max(0,Math.min(1,r.hp/n.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,t=0,n.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=n.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,n.reviveHealth*n.max),r.sinceHit=0,e=-1,t=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&n.standInRevive>0&&(i+=o,i>=n.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<n.max&&r.sinceHit>=n.regenDelay&&(e<0&&(e=r.hp,t=0),t+=Math.min(o,r.sinceHit-n.regenDelay),r.hp=n.regenTime>0&&t<n.regenTime?e+(n.max-e)*t/n.regenTime:n.max),r.hp>=n.max&&(r.hp=n.max,e=-1),null)},reset(){r.hp=n.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,t=0,i=0,s=!1}};return r}var mw=new Set(["cover","coverSlide","coverSwap"]),gw=[],xw=Dd(),vw=Dd(),ih=[null];function Dd(){return{alive:!0,shapes:{head:{c:[0,0,0],r:kt.head.r},body:{a:[0,0,0],b:[0,0,0],r:kt.body.r}}}}function Y0(n){return mw.has(n.state)?Hi(n):null}function Ld(n,e,t,i,s){let r=n.shapes;return r.head.r=kt.head.r,r.body.r=kt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+t,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],n}function sh(n,e=Dd(),t=ce.combat){let i=Y0(n),s=!!i&&i.kind==="low"&&!(n.cover&&n.cover.pop>=.5);return e.alive=!0,s?Ld(e,n.pos,t.crouchHead,.1,t.crouchBodyTop):Ld(e,n.pos,kt.head.cy,kt.body.ay,kt.body.by)}function q0(n,e,t,i,s,r=ce.combat){let o=Y0(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Ln(n,e,t,i,gw);if(!a)return ih[0]=sh(s,xw,r),Ln(n,e,t,i,ih);let l=kt.body.by;return ih[0]=Ld(vw,s.pos,kt.head.cy,l-r.shoulderDrop,l),Ln(n,e,t,i,ih)}var $0=1.49,Z0=.2;function K0(n,{spacing:e,cornerZone:t}){e=Math.max(Z0,Number.isFinite(e)?e:Z0);let i={cornerZone:t},s=[],r=(o,a,l)=>{let h=oi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[h[0],h[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return n.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let h=l*e;r(o,h,vs(o,h,i))}r(o,o.length,vs(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function _w(n,e,t=[0,0]){let i=n.kind==="low"?0:n.end*e;return t[0]=n.pos[0]+n.tangent[0]*i,t[1]=n.pos[1]+n.tangent[1]*i,t}function J0(n,e,t){let i=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Ln(e,[i/o,s/o,r/o],o,n,[]).t>=o-1e-6}function rh(n,e,t,i=ce){let s=[n.pos[0],n.kind==="low"?i.combat.crouchHead:$0,n.pos[1]],r=_w(n,i.associate.popShift),o=[r[0],$0,r[1]];return{protected:!J0(t,s,e),canShoot:J0(t,o,e)}}var j0=.9;function ca(n,e,t,i){return xi(n,[e[0],j0,e[1]],[t[0],j0,t[1]],i)===1}var ha=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function Q0(n,e,{radius:t,linkMax:i}){let s=n.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)ha(s[o],s[a])<=i&&ca(e,s[o],s[a],t)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function yw(n,e,t,i,s){let{nodes:r,links:o}=n,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),h=new Array(r.length).fill(!1),c=new Array(r.length).fill(!1);for(let p of t)c[p]=!0;let f=[];for(let p of e)a[p]=ha(i,r[p]),f.push(p);let u=p=>a[p]+ha(r[p],s),d=-1,m=1/0;for(;f.length;){let p=0;for(let _=1;_<f.length;_++){let S=f[_],M=f[p],b=u(S),T=u(M);(b<T-1e-12||Math.abs(b-T)<=1e-12&&S<M)&&(p=_)}let g=f.splice(p,1)[0];if(!h[g]){if(u(g)>=m)break;if(h[g]=!0,c[g]){let _=a[g]+ha(r[g],s);(_<m-1e-12||Math.abs(_-m)<=1e-12&&g<d)&&(d=g,m=_)}for(let _ of o[g]){if(h[_])continue;let S=a[g]+ha(r[g],r[_]);S<a[_]-1e-12&&(a[_]=S,l[_]=g,f.push(_))}}}if(d<0)return null;let x=[];for(let p=d;p>=0;p=l[p])x.push(p);return x.reverse()}function eg(n,e,t,i,s){if(ca(e,t,i,s))return[[i[0],i[1]]];let{nodes:r}=n,o=[],a=[];if(r.forEach((u,d)=>{ca(e,t,u,s)&&o.push(d),ca(e,u,i,s)&&a.push(d)}),!o.length||!a.length)return null;let l=yw(n,o,a,t,i);if(!l)return null;let h=[...l.map(u=>r[u]),i],c=[],f=t;for(let u=0;u<h.length;u++){let d=h[u+1];d&&ca(e,f,d,s)||(c.push([h[u][0],h[u][1]]),f=h[u])}return c}var Mw=.25,Sw=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),bw=new Set(["telegraph","burst","suppress"]),Ud=n=>Math.max(0,Math.min(1,n)),Ms=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function Fd(n,e=ce.associate){return n.pos[0]=n.start[0],n.pos[1]=n.start[1],n.pos[2]=n.start[2],n.prevPos[0]=n.start[0],n.prevPos[1]=n.start[1],n.prevPos[2]=n.start[2],n.yaw=n.prevYaw=Math.PI,n.state="idle",n.stateT=0,n.health=e.health,n.alive=!0,n.point=null,n.path=[],n.pathI=0,n.pop=0,n.blind=0,n.role="hold",n.bursts=0,n.aim[0]=n.aim[1]=n.aim[2]=0,n.wait=0,n.wantSuppress=null,n.shots=0,n.relocT=0,n.pointT=0,n.mustMove=!1,n.stuckT=0,n.stuckRef[0]=n.start[0],n.stuckRef[1]=n.start[2],n.stuckCount=0,ah(n),n}function tg({id:n,pos:e},t=ce.associate){let i={id:n,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:kt.head.r},body:{a:[0,0,0],b:[0,0,0],r:kt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0]};return Fd(i,t)}function ah(n,e=ce.combat){let[t,i,s]=n.pos,r=n.shapes,o=Sw.has(n.state)&&n.point&&n.point.kind==="low"&&n.pop<.5;return r.head.r=kt.head.r+e.hitPad,r.body.r=kt.body.r+e.hitPad,r.head.c[0]=t,r.head.c[2]=s,r.body.a[0]=t,r.body.a[2]=s,r.body.b[0]=t,r.body.b[2]=s,o?(r.head.c[1]=i+e.crouchHead-e.hitPad,r.body.a[1]=i+.1,r.body.b[1]=i+e.crouchBodyTop):(r.head.c[1]=i+kt.head.cy,r.body.a[1]=i+kt.body.ay,r.body.b[1]=i+kt.body.by),r}function Ss(n,e){n.state=e,n.stateT=0}function Br(n,e,t){e=Ud(e);let i=n.point;if(i&&i.kind==="tall"&&e!==n.pop){let s=i.end*t.popShift*(e-n.pop);n.pos[0]+=i.tangent[0]*s,n.pos[2]+=i.tangent[1]*s}n.pop=e}var $s=(n,e)=>e>0?n/e:1;function lh(n,e,t,i,s){let r=e-n.pos[0],o=t-n.pos[2];Math.hypot(r,o)>1e-6&&(n.yaw=cn(n.yaw,Math.atan2(r,o),i.turnRate*s))}function ng(n,e,t){let i=n.point.normal;n.yaw=cn(n.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*t)}function oh(n,e){e.tokens.holds(n.id)&&e.tokens.release(n.id,e.now,e.director)}function kd(n,e){let t=e.player.pos;return n.chest[0]=t[0],n.chest[1]=t[1]+1.2,n.chest[2]=t[2],n.chest}function ch(n,e){let t=e.tuning||ce,i=t.associate,s=e.director||t.director,r=e.player,o=[r.pos[0],r.pos[2]],a=kd(n,e),l=n.point,h=Ms(l?l.pos:[n.pos[0],n.pos[2]],o),c=n.role,f=!!l&&(n.mustMove||c!=="hold"),u=[n.pos[0],n.pos[2]],d=Math.cos(s.flankAngle*Math.PI/180),m=Math.cos(s.flankMaxAngle*Math.PI/180),x=0,p=0;if(r.coverNormal)x=-r.coverNormal[0],p=-r.coverNormal[1];else{let b=0;for(let T of e.others||[])T.alive&&(x+=T.pos[0],p+=T.pos[2],b++);b?(x=x/b-o[0],p=p/b-o[1]):(x=n.pos[0]-o[0],p=n.pos[2]-o[1])}let g=Math.hypot(x,p)||1;x/=g,p/=g;let _=[];for(let[b,T]of e.reserved)T!==n.id&&_.push(e.points[b].pos);let S=null,M=-1/0;for(let b of e.points){let T=e.reserved.get(b.index);if(T!==void 0&&T!==n.id||f&&b.index===l.index||n.mustMove&&l&&Ms(b.pos,l.pos)<2*i.reserveRadius)continue;let v=Ms(b.pos,o);if(v<i.reserveRadius||v<i.minRange||v>i.maxRange)continue;let y=!1;for(let F of _)if(Ms(F,b.pos)<i.reserveRadius){y=!0;break}if(y)continue;let w=((b.pos[0]-o[0])*x+(b.pos[1]-o[1])*p)/v;if(c==="flank"?w<m:w<0)continue;let E=0;if(c==="push"){let F=h-v;if(F<2)continue;E=2*F}else if(c==="flank"){if(!r.coverNormal||w>d)continue;E=10}let R=rh(b,a,e.boxes,t);if(!R.protected||!R.canShoot)continue;let I=-Ms(u,b.pos)-.5*Math.abs(v-i.preferRange)+E;I>M+1e-9&&(M=I,S=b)}return S?{point:S,score:M}:null}function ww(n,e){let t=ch(n,e);return t?t.point:null}function Nd(n,e,t){let i=e.tuning||ce,s=[n.pos[0],n.pos[2]],r=kd(n,e),o=null,a=1/0;for(let l of e.points){let h=e.reserved.get(l.index);if(h!==void 0&&h!==n.id)continue;let c=Ms(s,l.pos);c>=a||t&&!rh(l,r,e.boxes,i).protected||(a=c,o=l)}return o}function bs(n,e,t){Ss(n,"cover"),n.blind=0,n.wantSuppress=null,n.wait=t.coverWaitMin+(t.coverWaitMax-t.coverWaitMin)*e.rand()}function Zs(n,e,t){oh(n,e),Br(n,0,t),n.blind=0;let i=n.stuckCount>=3?Nd(n,e,!1):ww(n,e);if(!i){if(n.mustMove=!1,n.role!=="hold"&&(n.role="hold"),n.point){bs(n,e,t);return}if(i=Nd(n,e,!0)||Nd(n,e,!1),!i){bs(n,e,t);return}}if(n.point&&n.point.index!==i.index&&e.reserved.get(n.point.index)===n.id&&e.reserved.delete(n.point.index),e.reserved.set(i.index,n.id),n.point=i,n.mustMove=!1,Math.hypot(i.pos[0]-n.pos[0],i.pos[1]-n.pos[2])<=t.arriveDist){ig(n,e,t);return}let s=n.stuckCount>=3?null:eg(e.graph,e.boxes,[n.pos[0],n.pos[2]],i.pos,t.radius);n.path=s||[[i.pos[0],i.pos[1]]],n.pathI=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2],Ss(n,"run")}function ig(n,e,t){let i=n.point;n.pos[0]=i.pos[0],n.pos[2]=i.pos[1],n.role="hold",n.stuckCount=0,n.pointT=0,n.relocT=0,n.mustMove=!1,e.events.push({type:"arrive",id:n.id,point:i}),bs(n,e,t)}function Tw(n,e,t,i){let s=t.runSpeed*i;for(let r=0;r<n.path.length+2;r++){let o=n.path[n.pathI],a=n.pathI===n.path.length-1,l=o[0]-n.pos[0],h=o[1]-n.pos[2],c=Math.hypot(l,h);if(c<=t.arriveDist){if(a){ig(n,e,t);return}n.pathI++;continue}lh(n,o[0],o[1],t,i);let f=Math.min(s,c);if(f<=1e-9)break;let u=Or(e.boxes,n.pos,[l/c*f,0,h/c*f],t.radius,t.height),d=Math.hypot(u.pos[0]-n.pos[0],u.pos[2]-n.pos[2]);if(n.pos[0]=u.pos[0],n.pos[2]=u.pos[2],s-=d,d<f*.5)break;d>=c-1e-9}if(n.stuckT+=i,n.stuckT>=t.stuckTime){if(Math.hypot(n.pos[0]-n.stuckRef[0],n.pos[2]-n.stuckRef[1])<.05){n.stuckCount++,Zs(n,e,t);return}n.stuckCount=0,n.stuckT=0,n.stuckRef[0]=n.pos[0],n.stuckRef[1]=n.pos[2]}}function Bd(n,e,t,i,s){let r=e.player,o=r.exposed?r.head:r.chest,a=s||!(t.aimLag>0)?1:1-Math.pow(.5,i/t.aimLag);for(let l=0;l<3;l++)n.aim[l]+=(o[l]-n.aim[l])*a}var sg=(n,e,t)=>Math.min(Math.ceil(t*e-1e-9),Math.floor(n*e+1e-9)+1);function Ew(n,e,t,i,s){Br(n,n.pop-$s(s,t.popTime),t),ng(n,t,s);let r=e.player;if(!r.downed){if(n.pointT+=s,n.role!=="hold"){Zs(n,e,t);return}if(n.relocT+=s,n.relocT>=t.relocateCheck){n.relocT=0;let o=rh(n.point,kd(n,e),e.boxes,e.tuning||ce);if(!o.protected||!o.canShoot||Ms(n.point.pos,[r.pos[0],r.pos[2]])<t.reserveRadius){n.mustMove=!0,Zs(n,e,t);return}}if(n.pointT>=t.relocateAfter){n.mustMove=!0,n.pointT=0,Zs(n,e,t);return}if(!(n.stateT<n.wait)){if(n.wantSuppress===null&&(n.wantSuppress=e.rand()<t.suppressChance),n.bursts>=t.magBursts){Ss(n,"reload"),e.events.push({type:"bark",id:n.id,key:"reload"});return}if(e.tokens.request(n.id,e.now,e.tokenCount,i)){Ss(n,"telegraph"),n.shots=0,Bd(n,e,t,s,!0),e.events.push({type:"telegraph",id:n.id});return}n.wantSuppress&&(Ss(n,"suppress"),n.shots=0)}}}function Od(n,e,t,i){oh(n,e),i&&n.bursts++,bs(n,e,t)}function Aw(n,e,t,i){let s=e.player;if(Br(n,n.pop+$s(i,t.popTime),t),lh(n,s.pos[0],s.pos[2],t,i),Bd(n,e,t,i,!1),s.downed||!e.tokens.holds(n.id)){Od(n,e,t,!1);return}n.stateT>=t.popTime+t.telegraphTime-1e-9&&(Ss(n,"burst"),n.shots=0)}function Rw(n,e,t,i){let s=e.player;if(Br(n,n.pop+$s(i,t.popTime),t),lh(n,s.pos[0],s.pos[2],t,i),Bd(n,e,t,i,!1),s.downed||!e.tokens.holds(n.id)){Od(n,e,t,!0);return}let r=n.muzzle;r[0]=n.pos[0],r[1]=n.pos[1]+t.muzzleUp,r[2]=n.pos[2];let o=sg(n.stateT,t.rate,t.burstTime),a=Math.min(1,s.speed/(e.tuning||ce).move.sprint);for(;n.shots<o;){n.shots++;let l=n.aim[0]-r[0],h=n.aim[1]-r[1],c=n.aim[2]-r[2],f=Math.hypot(l,h,c)||1;e.events.push({type:"enemyShot",id:n.id,from:[r[0],r[1],r[2]],dir:[l/f,h/f,c/f],accurate:!0,spread:t.spread+t.moveSpread*a})}n.stateT>=t.burstTime-1e-9&&Od(n,e,t,!0)}function Cw(n,e,t,i){let s=e.player;if(n.blind=Ud(n.blind+$s(i,t.popTime)),lh(n,s.pos[0],s.pos[2],t,i),s.downed){n.blind=0,bs(n,e,t);return}let r=n.stateT-t.popTime;if(r<0&&n.blind<1)return;let o=n.point,a=Math.max(0,r),l=n.muzzle;l[0]=n.pos[0],l[2]=n.pos[2],l[1]=n.pos[1]+(o.kind==="low"?o.height+(e.tuning||ce).combat.blindLift:t.muzzleUp);let h=sg(a,t.suppressRate,t.suppressTime);for(;n.shots<h;){n.shots++;let c=s.head[0]-l[0],f=s.head[1]-l[1],u=s.head[2]-l[2],d=Math.hypot(c,f,u)||1;c/=d,f/=d,u/=d;let m=u,x=-c,p=Math.hypot(m,x);p<1e-6&&(m=1,x=0,p=1),m/=p,x/=p;let g=f*x,_=u*m-c*x,S=-f*m,M=2*Math.PI*e.rand(),b=t.suppressMiss*(1+.5*e.rand()),T=Math.cos(M)*b,v=Math.sin(M)*b,y=s.head[0]+m*T+g*v,w=s.head[1]+_*v,E=s.head[2]+x*T+S*v,R=y-l[0],I=w-l[1],F=E-l[2],P=Math.hypot(R,I,F)||1;e.events.push({type:"enemyShot",id:n.id,from:[l[0],l[1],l[2]],dir:[R/P,I/P,F/P],accurate:!1,spread:t.suppressSpread})}r>=t.suppressTime-1e-9&&(n.blind=0,bs(n,e,t))}function rg(n,e,t){if(!n.alive)return;(!(t>0)||!Number.isFinite(t))&&(t=0),t=Math.min(t,Mw);let i=(e.tuning||ce).associate,s=e.director||ce.director;switch(n.prevPos[0]=n.pos[0],n.prevPos[1]=n.pos[1],n.prevPos[2]=n.pos[2],n.prevYaw=n.yaw,n.stateT+=t,n.state){case"idle":e.started&&Zs(n,e,i);break;case"seek":Zs(n,e,i);break;case"run":Tw(n,e,i,t);break;case"cover":Ew(n,e,i,s,t);break;case"telegraph":Aw(n,e,i,t);break;case"burst":Rw(n,e,i,t);break;case"suppress":Cw(n,e,i,t);break;case"reload":Br(n,n.pop-$s(t,i.popTime),i),ng(n,i,t),n.stateT>=i.reloadTime&&(n.bursts=0,bs(n,e,i));break;case"flinch":Br(n,n.pop-$s(t,i.popTime),i),n.blind=Ud(n.blind-$s(t,i.popTime)),n.stateT>=i.flinchTime&&(n.point?bs(n,e,i):Zs(n,e,i));break;default:break}}function og(n,e,t){return!n.alive||!(e>0)?null:(n.health-=e,n.health<=0?(n.health=0,n.alive=!1,oh(n,t),n.point&&t.reserved.get(n.point.index)===n.id&&t.reserved.delete(n.point.index),n.pop=0,n.blind=0,Ss(n,"dead"),t.events.push({type:"death",id:n.id,pos:[n.pos[0],n.pos[1],n.pos[2]]}),"kill"):(bw.has(n.state)&&(oh(n,t),Ss(n,"flinch"),n.blind=Math.min(n.blind,1)),"hit"))}function ag(){let n=new Map,e=new Map,t=new Map,i={request(s,r,o,a=ce.director){if(n.has(s))return!0;if(r<(t.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[f,u]of e)r-u.last>a.requestWindow&&e.delete(f);if(n.size>=o)return!1;let h=null,c=1/0;for(let[f,u]of e)u.first<c&&(h=f,c=u.first);return h!==s?!1:(e.delete(s),n.set(s,r),!0)},release(s,r,o=ce.director){e.delete(s),n.delete(s)&&t.set(s,r+o.tokenCooldown)},holds(s){return n.has(s)},held(){return[...n.keys()]},expire(s,r=ce.director){let o=[];for(let[a,l]of n)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){n.clear(),e.clear(),t.clear()}};return i}var lg=new Set(["cover","coverSlide","coverSwap"]),cg=new Set(["cover","suppress","reload","flinch"]),Pw=.1,hg=(n,e)=>Math.hypot(n[0]-e[0],n[2]-e[2]);function ug({level:n,boxes:e,edges:t,rand:i,tuning:s=ce}){let r=()=>s.associate,o=K0(t,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=Q0(n.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=ag(),h=new Map,c=[],f=[],u=n.associates.map(I=>tg(I,s.associate)),d=sh({state:"move",pos:[0,0,0],cover:null,scratch:{}}),m={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},x={boxes:e,points:o,graph:a,tokens:l,reserved:h,player:m,now:0,rand:i,tokenCount:0,events:c,tuning:s,director:s.director,others:u,started:!1},p={enemies:u,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0},g=[0,0],_=!1,S=!1;function M(){h.clear();for(let I of u){let F=null,P=1/0;for(let G of o){let O=Math.hypot(G.pos[0]-I.pos[0],G.pos[1]-I.pos[2]);O<P&&(P=O,F=G)}I.point=F,F&&h.set(F.index,I.id)}}M();let b=(I,F)=>c.push({type:"bark",id:I,key:F}),T=()=>u.find(I=>I.alive)||u[0];function v(){for(let I of l.held())l.release(I,p.now,s.director)}function y(I,F){let P=m,G=s.combat;P.pos[0]=I.pos[0],P.pos[1]=I.pos[1],P.pos[2]=I.pos[2];let O=lg.has(I.state)?Hi(I):null;P.exposed=!!(I.cover&&I.cover.exposed);let H=!!O&&O.kind==="low"&&!P.exposed;P.chest[0]=I.pos[0],P.chest[1]=I.pos[1]+(H?.6:1.2),P.chest[2]=I.pos[2];let $=sh(I,d,G).shapes.head.c;P.head[0]=$[0],P.head[1]=$[1],P.head[2]=$[2],P.speed=I.speed(),P.coverNormal=O?O.normal:null,P.downed=!!F.downed}function w(I,F){let P=s.director;if(lg.has(I.state)?m.exposed||(p.hideT+=F):p.hideT=0,!S||Math.hypot(I.pos[0]-g[0],I.pos[2]-g[1])>P.stayRadius?(g[0]=I.pos[0],g[1]=I.pos[2],S=!0,p.stayT=0):p.stayT+=F,p.hideT>=P.pushAfter&&!u.some(O=>O.alive&&O.role==="push")){let O=u.filter($=>$.alive&&$.role==="hold"&&cg.has($.state)&&!l.holds($.id)).sort(($,N)=>hg($.pos,m.pos)-hg(N.pos,m.pos)),H=null;for(let $ of O){if($.role="push",ch($,x)){H=$;break}$.role="hold"}H?(b(H.id,"push"),p.hideT=0):p.hideT=Math.max(0,P.pushAfter-1)}if(p.stayT>=P.flankAfter&&!u.some(O=>O.alive&&O.role==="flank")){let O=null,H=-1/0;for(let $ of u){if(!$.alive||$.role!=="hold"||!cg.has($.state)||l.holds($.id))continue;$.role="flank";let N=ch($,x);$.role="hold",N&&N.score>H&&(H=N.score,O=$)}O&&(O.role="flank",b(O.id,"flank")),p.stayT=0}}function E(I){let F=s.associate.radius,P=s.associate.height,G=(O,H,$)=>{let N=Or(e,O.pos,[H,0,$],F,P);O.pos[0]=N.pos[0],O.pos[2]=N.pos[2]};for(let O=0;O<u.length;O++){let H=u[O];if(!H.alive)continue;for(let ae=O+1;ae<u.length;ae++){let re=u[ae];if(!re.alive)continue;let q=re.pos[0]-H.pos[0],he=re.pos[2]-H.pos[2],_e=Math.hypot(q,he);if(_e>=2*F)continue;_e<1e-6&&(q=1,he=0,_e=1);let Ge=(2*F-_e)/2;G(H,-q/_e*Ge,-he/_e*Ge),G(re,q/_e*Ge,he/_e*Ge)}let $=H.pos[0]-I.pos[0],N=H.pos[2]-I.pos[2],V=Math.hypot($,N),k=F+s.move.radius;V<k&&(V<1e-6&&($=1,N=0,V=1),G(H,$/V*(k-V),N/V*(k-V)))}}function R(I,F){let P=r(),G=[0,0,0];for(let O=0;O<c.length;O++){let H=c[O];if(H.type!=="enemyShot")continue;if(H.accurate&&F.downed){c.splice(O--,1);continue}let $=Jc(H.dir,H.spread,i,G);if(H.accurate){let N=q0(H.from,$,P.range,e,I,s.combat),V=N.point;if(N.kind==="head"||N.kind==="body"){let k=F.damage(P.damage);c.push({type:"playerHit",id:H.id,from:H.from,amount:P.damage,result:k}),k==="downed"&&(I.state!=="downed"&&I.down(),v())}c.push({type:"shotFx",from:H.from,to:V.slice(),accurate:!0})}else{let N=Ln(H.from,$,P.range,e,[]);c.push({type:"shotFx",from:H.from,to:N.point,accurate:!1})}}}return p.targets=()=>u,p.step=(I,F)=>{(!(I>0)||!Number.isFinite(I))&&(I=0),I=Math.min(I,Pw),c.length=0;for(let O of f)c.push(O);f.length=0;let{m:P,health:G}=F;if(p.now+=I,x.now=p.now,!p.started&&P.pos[2]>n.trigger.z&&(p.started=!0,b(T().id,"lockdown")),x.started=p.started,y(P,G),m.downed){v();for(let O of u)O.role="hold";!_&&p.started&&b(T().id,"downed")}else p.started&&!p.clear&&w(P,I);_=m.downed,l.expire(p.now,s.director),x.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens;for(let O of u)rg(O,x,I);R(P,G),E(P);for(let O of u)ah(O,s.combat);return p.started&&!p.clear&&u.every(O=>!O.alive)&&(p.clear=!0,c.push({type:"clear"}),b(u[u.length-1].id,"clear")),c},p.hurt=(I,F)=>{x.events=f;let P=og(I,F,x);return x.events=c,P&&(p.started=!0),P},p.reset=()=>{l.reset();for(let I of u)Fd(I,s.associate);M(),c.length=0,f.length=0,p.started=p.clear=!1,p.now=0,p.hideT=p.stayT=0,x.now=0,x.started=!1,_=!1,S=!1;for(let I of u)ah(I,s.combat)},p}function hh(n,e,t){let i=t[0]-e[0],s=t[2]-e[2],r=d0(n),o=f0(n),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var dg=n=>Math.max(0,Math.min(1,n));function fg({hp:n,max:e,downed:t,downT:i,hits:s=[],now:r,fb:o=ce.feedback}){let a=t?1:e>0?dg(1-n/e):1,l={top:0,right:0,bottom:0,left:0};for(let c of s){let f=o.hitFlashTime>0?dg(1-(r-c.t)/o.hitFlashTime):0;if(f<=0)continue;let u=Math.cos(c.angle),d=Math.sin(c.angle);l.top=Math.max(l.top,f*Math.max(0,u)),l.right=Math.max(l.right,f*Math.max(0,d)),l.bottom=Math.max(l.bottom,f*Math.max(0,-u)),l.left=Math.max(l.left,f*Math.max(0,-d))}let h=o.edgeMaxOpacity*a;for(let c of Object.keys(l))l[c]=Math.min(1,h+l[c]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!t,seconds:t?Math.ceil(Math.max(0,i)):0}}}var pg=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function mg(n=()=>ce.feedback){let e=1/0,t=0,i=null,s={};return{say(r,o=!1){if(!pg[r]||!o&&e<n().barkGap)return!1;let a=pg[r],l=(s[r]||0)%a.length;return s[r]=l+1,i=typeof a[l]=="string"?{speaker:"Rep",text:a[l]}:a[l],t=n().barkTime,e=0,!0},tick(r){r>0&&(e+=r,t-=r)},current:()=>t>0&&i?{speaker:i.speaker,text:i.text}:null,reset(){e=1/0,t=0,i=null;for(let r of Object.keys(s))s[r]=0}}}var gg=4,Iw=1.2,zr=[0,0,0];function Lw(){let n=(e,t,i,s,r)=>{let o=new Pt(e,t,i).translate(0,s,0);o.deleteAttribute("uv");let a=new it(r),l=o.getAttribute("position").count,h=new Float32Array(l*3);for(let c=0;c<l;c++)h[c*3]=a.r,h[c*3+1]=a.g,h[c*3+2]=a.b;return o.setAttribute("color",new wt(h,3)),o};return yn([n(.3,.16,.22,.08,Z.cream),n(.34,.07,.26,.195,Z.playerOrange)],!1)}function Dw(n,e,t){return n.accurate&&e?(e(t),t):(t[0]=n.from[0],t[1]=n.from[1],t[2]=n.from[2],t)}function xg({scene:n,effects:e,sfx:t,fight:i,views:s}){let r=new Map(i.enemies.map((g,_)=>[g.id,s[_]])),o=new Map(i.enemies.map(g=>[g.id,g])),a=new Map,l=[],h=new Ds(Lw(),Vt({vertexColors:!0,rim:0}),gg);h.name="pickups",h.frustumCulled=!1,h.count=0,n.add(h);let c=new mn,f=0,u=mg(),d=(g,_)=>Math.sin(hh(g.yaw,g.pos,_));function m(g){let _=null,S=1/0;for(let M of i.enemies){let b=Math.hypot(M.pos[0]-g[0],M.pos[2]-g[2]);b<S&&(S=b,_=M)}return _}function x(g,_){let S=ce.feedback,M=ce.associate;for(let b of g)if(b.type==="bark")u.say(b.key,!1);else if(b.type==="telegraph"){a.set(b.id,M.popTime+M.telegraphTime);let T=r.get(b.id),v=o.get(b.id);T&&T.glint(!0),v&&t.play("charge",S.chargeVolume,d(_,v.pos))}else if(b.type==="shotFx"){let T=m(b.from),v=T&&r.get(T.id);Dw(b,v?v.tip:null,zr);let y=b.to[0]-zr[0],w=b.to[1]-zr[1],E=b.to[2]-zr[2],R=Math.hypot(y,w,E)||1;e.enemyFlash(zr,[y/R,w/R,E/R]),e.enemyTracer(zr,b.to);let I=Math.hypot(b.from[0]-_.pos[0],b.from[2]-_.pos[2]);t.play("blaster",S.blasterVolume*Math.min(1,8/Math.max(I,.001)),d(_,b.from))}}function p(){h.count=l.length;for(let g=0;g<l.length;g++)c.position.set(l[g].pos[0],l[g].pos[1],l[g].pos[2]),c.rotation.set(0,f*Iw+g,0),c.updateMatrix(),h.setMatrixAt(g,c.matrix);h.instanceMatrix.needsUpdate=!0}return{handle:x,forceBark:g=>u.say(g,!0),bark:()=>u.current(),tick:g=>u.tick(g),update(g){if(g>0){f+=g;for(let[_,S]of a)if(S-g<=0){a.delete(_);let M=r.get(_);M&&M.glint(!1)}else a.set(_,S-g);l.length&&p()}},addPickup(g){l.length>=gg&&l.shift(),l.push({pos:[g[0],g[1],g[2]]}),p()},collect(g,_){let S=0;for(let M=l.length-1;M>=0;M--)Math.hypot(g[0]-l[M].pos[0],g[2]-l[M].pos[2])<=_&&(l.splice(M,1),S++);return S&&p(),S},count:()=>l.length,pickups:()=>l.map(g=>g.pos.slice()),reset(){l.length=0,h.count=0,h.instanceMatrix.needsUpdate=!0,a.clear(),u.reset()}}}var vg=.05;function Nw({locked:n,device:e,panelOpen:t}){return!!(n||e==="pad"||t)}function _g(n){return`${n.gap}|${n.endInset}|${n.minLength}`}function Ow(n){return n&&n.has("room")?"greyRoom":"kioskRow"}function Uw(n,e,{downed:t=!1,busy:i=!1}={}){return t&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(t||i)&&(n.fire=!1),n}var Fw=2e3,kw=500,Bw=500,zw=new Set(["enemyShot","playerHit","telegraph","death","clear","bark"]);function yg({canvas:n,gl:e,params:t}){let i=mc(n,e),s=i.renderer,r=pc(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let h=Zm();l.panelOpen=h.isOpen;let c=new Is,f=new an(ce.camera.fov,1,.05,100),u=gc();c.add(u.mesh);let d=Ow(t),m=d==="greyRoom"?zc:Vm,x=Hm(m);c.add(x.group);let p=x.boxes,g=m.spawn,_=()=>t0(p,{...e0(),exclude:m.coverExclude}),S=_g(ce.cover),M=[],b=0,T=!1,v=p0({boxes:p,spawn:g.pos,coverEdges:_(),onState(X,Ie){M.push({state:X,from:Ie,t:b,tapped:T,auto:X==="coverSlide"&&!T&&(Ie==="move"||Ie==="sprint")}),M.length>Fw&&M.shift()},onStep(X){w.dip(ce.feedback.stepDip),R.play("step",ce.feedback.stepVolume*(X.sprint?1.25:1))}});v.place(g.pos,g.yaw);let y=z0(v);c.add(y.group);let w=Fm(),E=Lm(),R=m0({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),I=g0(),F=_0(),P=C0(c),G=I0(document.body),O=Ir(1),H=(m.dummies||[]).map(X=>{let Ie=w0(X),st=L0(Ie);return c.add(st.group),{dummy:Ie,view:st,wasAlive:!0}}),$=H.map(X=>X.dummy),N=X0(),V=d==="kioskRow"?ug({level:m,boxes:p,edges:_(),rand:Ir(4242)}):null,k=V?V.enemies.map(X=>{let Ie=W0(X);return c.add(Ie.group),Ie}):[],ae=new Map(V?V.enemies.map((X,Ie)=>[X,k[Ie]]):[]),re=V?xg({scene:c,effects:P,sfx:R,fight:V,views:k}):null,q=V?V.targets():$,he=[],_e=[],Ge={pos:[0,0,0],yaw:0},j=[],Re="-",$e="-",Ne=null,Je=null,De=0,le=null,Me=0,Te=1,ge=[],de={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},Be=[0,0,0],Ue=0,Ye=[0,0,0];w.snap(g.pos,g.yaw,"normal",1);let Ve=null,tt=!1,z=null,pe=!1,Ce=!1,qe=!1,te={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1},nt={reload:!1,weapon:null,fire:!1,interact:!1},ze=!1,Pe={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1},L={weapon:null,reload:!1,fire:!1,firePressed:!1},A=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Y(){let X=i.resize();f.aspect=X.aspect,f.updateProjectionMatrix()}Y(),window.addEventListener("resize",Y),n.addEventListener("click",()=>r.requestLock());let xe=()=>{E.reset(),I.reset()};window.addEventListener("blur",xe),document.addEventListener("pointerlockchange",()=>{r.isLocked()||xe()});let oe=()=>R.unlock();window.addEventListener("pointerdown",oe),window.addEventListener("keydown",oe),window.addEventListener("keydown",X=>{X.repeat||zu(X.target)||(X.code==="Backquote"?(h.toggle(),h.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):X.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function ve(){V&&V.reset(),N.reset(),F.reset(),we(g.pos,g.yaw),Ne=null,E.reset(),I.reset(),w.recenter(),P.clear(),ge.length=0,he.length=0,Je=null,le=null,De=0,Me=0,re&&re.reset();for(let X of k)X.reset()}function Se(){v.state!=="downed"&&v.down(),F.cancelReload(),R.play("downed",ce.feedback.hurtVolume),re&&re.forceBark("downed")}function ie(X){_e.push({t:b,type:X.type,id:X.id||null,accurate:!!X.accurate,hit:X.type==="playerHit",key:X.key||null}),_e.length>Bw&&_e.shift()}function se(X){let Ie=ce.feedback;Ge.pos[0]=v.pos[0],Ge.pos[1]=v.pos[1],Ge.pos[2]=v.pos[2],Ge.yaw=w.yaw;let st=V.step(X,{m:v,health:N});re.handle(st,Ge);for(let Ot of st)if(zw.has(Ot.type)&&ie(Ot),Ot.type==="playerHit"){let _t=hh(w.yaw,v.pos,Ot.from);he.push({t:b,angle:_t});let zn=Math.random()*2*Math.PI;w.kick(Ie.hitKick*Math.cos(zn),Ie.hitKick*Math.sin(zn)),R.play("hurt",Ie.hurtVolume,Math.sin(_t)),Ot.result==="downed"&&Se()}else Ot.type==="clear"&&R.play("clear",Ie.killVolume);for(;he.length&&b-he[0].t>Ie.hitFlashTime;)he.shift();let Lt=N.update(X);Lt==="revived"&&v.revive();let At=ze;if(ze=!1,Lt==="bleedOut"||At&&(N.downed||V.clear)){ve();return}!N.downed&&re.collect(v.pos,ce.combat.pickupRadius)&&(F.addReserve("regret",ce.associate.ammoDrop),R.play("pickup",Ie.pickupVolume))}function we(X,Ie){v.place(X,Ie),w.snap(X,Ie,Td(v),qs(v)),Ue=v.slams}let U={pos:[0,0,0],dir:[0,0,1],fov:70},ne="normal",Q=1,be=0,ye=0,fe=0,me=0,Fe=0,ue=0,Le=0,Ee=window.__cr;Ee.stats=()=>({fps:be,ms:ye,calls:Fe,tris:ue,scale:i.scale(),characters:1+k.length}),Ee.player=()=>{let X=v.cover;return{pos:v.pos.slice(),state:v.state,speed:v.speed(),facing:v.facing,entries:v.entries,cover:X?{id:X.edge.id,kind:X.edge.kind,t:X.t,length:X.edge.length,pop:X.pop,exposed:X.exposed}:null,slams:v.slams,steps:v.steps,blind:X?X.blind:0,firing:!!v.firing}},Ee.gun=()=>{let X=F.current(),Ie=F.ammo[X],st=F.reload,Lt=ce.weapons[X];return{id:X,slot:F.slot,mag:Ie.mag,reserve:Ie.reserve,boost:Ie.boost,reload:st?{u:st.t/Math.max(Lt.reloadTime,ce.combat.minReloadTime),press:st.press}:null,switching:F.switching>0,spread:F.spreadOf(Ne||"hip"),stance:Ne}},Ee.dummies=()=>$.map(X=>({id:X.id,health:X.health,alive:X.alive,pos:X.pos.slice()})),Ee.level=()=>d,Ee.fight=()=>V?{started:V.started,clear:V.clear,tokens:V.tokens.held(),pickups:re.count(),pickupPos:re.pickups(),enemies:V.enemies.map(X=>({id:X.id,state:X.state,health:X.health,alive:X.alive,pos:X.pos.slice(),holds:V.tokens.holds(X.id),role:X.role,point:X.point?X.point.index:null,pop:X.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},Ee.health=()=>({hp:N.hp,max:ce.health.max,downed:N.downed,downT:N.downT}),Ee.hurt=X=>{N.damage(X)==="downed"&&Se()},Ee.god=X=>{ce.health.godMode=X?1:0},Ee.fightLog=()=>_e.map(X=>({...X})),Ee.clearFightLog=()=>{_e.length=0},Ee.restart=()=>ve(),Ee.shots=()=>j.map(X=>({...X})),Ee.clearShots=()=>{j.length=0},Ee.setGun=(X,Ie)=>F.set(X,Ie),Ee.look=(X,Ie)=>{w.yaw=X,w.pitch=Ie},Ee.camera=()=>{let X=U;return{pos:X.pos.slice(),fov:X.fov,inside:Fc(p,X.pos,.1),mode:ne,side:Q,yaw:w.yaw,pitch:w.pitch}},Ee.transitions=()=>M.map(X=>({...X})),Ee.clearTransitions=()=>{M.length=0},Ee.coverTarget=()=>{let X=z||{moveX:Ve?Ve.moveX:0,moveY:Ve?Ve.moveY:0},Ie=aa(v.coverEdges,p,v.pos,wd(v,{moveX:X.moveX||0,moveY:X.moveY||0,camYaw:w.yaw},[0,0]),w.yaw,ce.cover,ce.move.radius);return Ie?{id:Ie.edge.id,kind:Ie.edge.kind,dist:Ie.dist}:null},Ee.place=X=>{let Ie=X==="spawn"?g:m.features[X];Ie&&we(Ie.pos,Ie.yaw)},Ee.at=(X,Ie,st=0)=>we([X,0,Ie],st),Ee.drive=X=>{if(!X){pe?Ce=!0:z=null;return}X.fire&&!(z&&z.fire)&&(nt.fire=!0),z=X,Ce=!1,X.tap&&(pe=!0),X.reload&&(nt.reload=!0),X.interact&&(nt.interact=!0),X.weapon&&(nt.weapon=X.weapon)};function Ae(X){if(z){Pe.moveX=z.moveX||0,Pe.moveY=z.moveY||0,Pe.sprint=!!z.sprint,Pe.aim=!!z.aim,Pe.tap=pe;let Ie=I.update(!!z.fire,nt.fire,!0);nt.fire=!1,Pe.fire=Ie.fire,L.fire=Ie.fire,L.firePressed=Ie.firePressed,L.reload=nt.reload,L.weapon=nt.weapon,nt.reload=!1,nt.weapon=null,pe&&(pe=!1,Ce&&(z=null,Ce=!1))}else{let Ie=Ve.held;Pe.moveX=Ve.moveX,Pe.moveY=Ve.moveY,Pe.tap=E.update(Ie.cover,te.cover,X,ce.move.tapMax),Pe.sprint=Ie.sprint||E.holding(),Pe.aim=Ie.aim;let st=I.update(Ie.fire,te.fire,!0);Pe.fire=st.fire,L.fire=st.fire,L.firePressed=st.firePressed,L.reload=te.reload,L.weapon=te.weapon}return ze=te.interact||nt.interact,te.cover=!1,te.fire=!1,te.reload=!1,te.weapon=null,te.interact=!1,nt.interact=!1,Pe.camYaw=w.yaw,T=Pe.tap,Pe}let Qe=X=>X.toFixed(1);function ct(){let X=v.cover;if(X)return`cover: ${X.edge.kind} ${X.edge.id}  t ${X.t.toFixed(2)}/${X.edge.length.toFixed(2)}  pop ${X.pop.toFixed(2)}`;let Ie=Ee.coverTarget();return Ie?`tap grabs: ${Ie.kind} ${Ie.dist.toFixed(1)} m`:"tap grabs: nothing"}function Et(){let X=Ee.gun(),Ie=X.id;return`gun: ${Zc[Ie].name} ${X.mag}/${ce.weapons[Ie].infiniteReserve>0?"\u221E":X.reserve}  ${X.stance||"-"}  spread ${X.spread.toFixed(1)}`}function Nt(){let X=r.padStatus(),Ie=[V?"GYMS OF WAR \u2014 CHECK-IN TURNSTILES":"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];V&&Ie.push("E / X: renew your membership when downed, another set when clear"),Ie.push("Sound starts after a click or key","",`${v.state}   ${v.speed().toFixed(2)} m/s`,ct(),Et()),V?(Ie.push(`fight: ${V.enemies.filter(st=>st.alive).length}/${V.enemies.length}  tokens ${V.tokens.held().join(",")||"-"}  hp ${N.hp.toFixed(0)}`),Ie.push(`health: ${N.hp.toFixed(0)}/${ce.health.max}  ${N.downed?`downed ${N.downT.toFixed(1)}`:"-"}`)):Ie.push(`dummies: ${$.filter(st=>st.alive).length}/${$.length}  last: ${Re} ${$e}`),Ie.push(`${Math.round(be)} fps   ${Qe(ye)} ms   scale ${i.scale()}`,`${Fe} draw calls   ${ue} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${X}`,"` tuning panel    ?look look test    H hide panel"),o.textContent=Ie.join(`
`)}let Rt=X=>ce.feedback[X];function Dn(X){X.type==="shot"?Rn(X):X.type==="reloadStart"?R.play("magOut",Rt("reloadVolume")):X.type==="reloadPress"?(R.play(X.result,Rt("reloadVolume")),le=X.result,Me=0):X.type==="reloadDone"?R.play("magIn",Rt("reloadVolume")):X.type==="dry"&&R.play("dry",Rt("reloadVolume"))}function sn(X,Ie){T0(X.dummy,Ie),X.dummy.alive&&!X.wasAlive&&X.view.respawn(),X.wasAlive=X.dummy.alive}let It=[0,0,0];function Rn(X){let Ie=ce.weapons[X.id],st=v.cover?v.cover.edge:null;M0(v,Ne,w.yaw,ce.combat,Be);let Lt=S0({lens:U.pos,view:U.dir,muzzle:Be,spreadDeg:X.spread,range:Ie.range,boxes:p,targets:q,ignoreBox:st?st.boxIndex:-1,rand:O,aimed:Ne==="aim"}),At=Lt.hit,Ot=At.target,_t=null;Ot&&(_t=V?V.hurt(Ot,Cd(Ie,At.kind,X.mult)):E0(Ot,Cd(Ie,At.kind,X.mult))),Re=At.kind,$e=Ot?Ot.id:"-",j.push({t:b,kind:At.kind,target:Ot?Ot.id:null,point:At.point.slice(),stance:Ne}),j.length>kw&&j.shift();let zn=[Lt.dir[0],Lt.dir[1],Lt.dir[2]];if(ge.push({id:X.id,from:Be.slice(),dir:zn,hit:At,target:Ot,result:_t}),_t==="kill"&&!V){let Hr=H.find(Js=>Js.dummy===Ot);Hr.wasAlive=!1}}function ai(X){let Ie=ce.weapons[X.id],st=ce.feedback,Lt=y.gunTip(It);w.kick(Ie.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*Ie.kickYaw),P.flash(Lt,X.dir),P.tracer(Lt,X.hit.point),R.play(X.id==="regret"?"rifle":"pistol",st.shotVolume);let At=[-X.dir[0],-X.dir[1],-X.dir[2]];if(X.hit.kind==="world")P.spark(X.hit.point,At);else if(X.target){let Ot=V?ae.get(X.target):H.find(_t=>_t.dummy===X.target).view;X.result==="kill"?(V?(Ot.death(),re.addPickup(X.target.pos)):Ot.burst(),P.gel(X.hit.point,At,st.killGelCount),P.receipts(X.target.pos.map((_t,zn)=>zn===1?_t+1.2:_t),st.receiptCount),Je="kill",De=st.killMarkerTime,R.play("kill",st.killVolume)):(V||Ot.hit(X.hit.kind),P.gel(X.hit.point,At),Je=X.hit.kind,De=st.hitMarkerTime,R.play(X.hit.kind==="head"?"head":"hit",st.hitVolume))}}let Zn=fc({before(X){if(Ve=r.poll(),tt=!!z||pe||Nw({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=tt,!tt){E.reset(),I.reset(),te.cover=!1,te.fire=!1,te.reload=!1,te.weapon=null,te.interact=!1;return}let st=Math.min(X,vg);qe=Ve.held.aim||z&&z.aim,w.look(Ve.lookDX,Ve.lookDY,Ve.lookX,Ve.lookY,st,qe,Te),Ve.pressed.cover&&(te.cover=!0),Ve.pressed.fire&&(te.fire=!0),Ve.pressed.reload&&(te.reload=!0),Ve.pressed.interact&&(te.interact=!0);for(let[Lt,At]of A)Ve.pressed[Lt]&&(te.weapon=At)},step(X){if(!tt)return;let Ie=_g(ce.cover);Ie!==S&&(S=Ie,v.coverEdges=_()),b+=X;let st=Ae(X);Uw(st,L,{downed:!!V&&N.downed,busy:F.reload!==null||F.switching>0}),v.update(st,X),Ne=y0(v);let Lt=F.update(L,Ne,X);for(let At of Lt)Dn(At);V&&(re.tick(X),se(X));for(let At of H)sn(At,X);A0(v.pos,m.ammoCrates,ce.combat.crateRadius)&&F.refill()},render(X,Ie){let st=tt?Math.min(Ie,vg):0;de.shot=ge.length>0,de.dir=U.dir,de.stance=Ne,de.weapon=F.current(),y.update(X,st,de);for(let C of H)C.view.update(st);for(let C of k)C.update(X,st);re&&re.update(st);let Lt=v.pos,At=v.prevPos;for(let C=0;C<3;C++)Ye[C]=At[C]+(Lt[C]-At[C])*X;v.slams>Ue&&(Ue=v.slams,w.bump(),R.play("thud",ce.cover.thudVolume));let Ot=Td(v);if(Ot==="aim"&&ne!=="aim"){let C=v.cover?v.cover.edge:null;w.hold(Ln(U.pos,U.dir,ce.camera.holdRange,p,q,{ignoreBox:C?C.boxIndex:-1}).point)}ne=Ot,Q=qs(v);let _t=w.update(st,{target:Ye,mode:ne,side:Q},p);U.pos[0]=_t.pos[0],U.pos[1]=_t.pos[1],U.pos[2]=_t.pos[2],U.fov=_t.fov,U.dir[0]=_t.dir[0],U.dir[1]=_t.dir[1],U.dir[2]=_t.dir[2],f.fov!==_t.fov&&(f.fov=_t.fov,f.updateProjectionMatrix()),y.fadeHeadFor(_t.pos,ce.camera.headHideDist,ce.camera.headHideMargin),f.position.set(_t.pos[0],_t.pos[1],_t.pos[2]),f.lookAt(_t.pos[0]+_t.dir[0],_t.pos[1]+_t.dir[1],_t.pos[2]+_t.dir[2]);for(let C of ge)ai(C);ge.length=0,P.update(st),De-=st,De<=0&&(Je=null),le&&(Me+=st,Me>=ce.feedback.reloadResultTime&&(le=null));let zn=v.cover?v.cover.edge:null,Hr=Ln(U.pos,U.dir,100,p,q,{ignoreBox:zn?zn.boxIndex:-1});Te=r.device()==="pad"&&Hr.target?ce.look.pad.assist:1;let Js=!!v.cover&&v.cover.pop<.5,uh=Ne||(v.cover&&(v.cover.pop>0||Js)?"aim":"hip"),Gr=V?fg({hp:N.hp,max:ce.health.max,downed:N.downed,downT:N.downT,hits:he,now:b}):null;G.render(P0({arsenal:F,stance:Ne,firing:Pe.fire,covered:Js,device:r.device(),spreadDeg:F.spreadOf(uh),fov:f.fov,viewportH:n.clientHeight||window.innerHeight,marker:Je,reloadFlash:le,face:Gr,bark:re?re.bark():null,objective:V?V.clear?"Check-in Turnstiles: set complete":V.started?"Get past the front desk":"Walk in":"",banner:V?N.downed?{title:`You've hit a plateau ${Gr.downed.seconds}`,hint:"E / X renew your membership"}:V.clear?{title:"SET COMPLETE",hint:"Rest 60 seconds! E / X for another set"}:null:null})),u.update(performance.now()/1e3),x.update(st),s.render(c,f),Fe=s.info.render.calls,ue=s.info.render.triangles,fe++,me+=Ie,me>=1&&(be=fe/me,ye=me/fe*1e3,fe=0,me=0),Le+=Ie,Le>=.1&&(Le=0,Nt()),i.frameDone(Ie*1e3)}});t&&t.has("tune")&&h.toggle(),Ve=r.poll(),w.update(0,{target:g.pos,mode:"normal",side:1},p),Nt(),Zn.start()}var Hw={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function zd(n,e){window.__cr.error={kind:n,detail:e||""},document.documentElement.dataset.crError=n;let t=document.getElementById("cr-error");t&&(t.textContent="",t.appendChild(document.createTextNode(Hw[n])),n==="boot"&&e&&(t.appendChild(document.createElement("br")),t.appendChild(document.createTextNode(e))),t.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||zd("boot",n.message)});function Gw(){let n=document.getElementById("cr-canvas"),e=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){zd("webgl");return}let t=new URLSearchParams(location.search);t.has("look")?Im({canvas:n,gl:e}):yg({canvas:n,gl:e,params:t}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{Gw()}catch(n){zd("boot",n&&n.message)}})();

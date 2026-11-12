/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var vg=0,Wf=1,xg=2;var Tl=1,yg=2,$o=3,sr=0,wn=1,kn=2,Wr=0,Ko=1,Xf=2,Yf=3,qf=4,bg=5;var Xr=100,_g=101,Mg=102,wg=103,Sg=104,Tg=200,Eg=201,Ag=202,Rg=203,$f=204,Kf=205,Cg=206,Pg=207,Ig=208,Lg=209,kg=210,Dg=211,Ng=212,Og=213,Fg=214,nh=0,ih=1,sh=2,ko=3,rh=4,oh=5,ah=6,lh=7,Zf=0,Ug=1,Bg=2,ns=0,jf=1,Jf=2,Qf=3,ep=4,tp=5,np=6,ip=7;var sp=300,Yr=301,Zo=302,zh=303,Hh=304,ch=1e3,Zi=1001,hh=1002,In=1003,zg=1004;var El=1005;var Ln=1006,Gh=1007;var Ls=1008;var mi=1009,rp=1010,op=1011,jo=1012,Vh=1013,zi=1014,Ai=1015,Hi=1016,Wh=1017,Xh=1018,qr=1020,ap=35902,lp=35899,cp=1021,hp=1022,gi=1023,Ps=1026,ks=1027,Yh=1028,qh=1029,rr=1030,$h=1031;var Kh=1033,Al=33776,Rl=33777,Cl=33778,Pl=33779,Zh=35840,jh=35841,Jh=35842,Qh=35843,eu=36196,tu=37492,nu=37496,iu=37488,su=37489,Il=37490,ru=37491,ou=37808,au=37809,lu=37810,cu=37811,hu=37812,uu=37813,du=37814,fu=37815,pu=37816,mu=37817,gu=37818,vu=37819,xu=37820,yu=37821,bu=36492,_u=36494,Mu=36495,wu=36283,Su=36284,Ll=36285,Tu=36286;var Wa=2300,uh=2301,eh=2302,Df=2303,Nf=2400,Of=2401,Ff=2402;var Hg=3200;var up=0,Gg=1,Ds="",pn="srgb",Xa="srgb-linear",Ya="linear",Gt="srgb";var th=7680;var Vg=519,Wg=512,Xg=513,Yg=514,dp=515,qg=516,$g=517,fp=518,pp=519,mp=35044,Jo=35048;var gp="300 es",Ei=2e3,qa=2001;function z_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function H_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function $a(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Kg(){let t=$a("canvas");return t.style.display="block",t}var Dm={},Do=null;function Ka(...t){let e="THREE."+t.shift();Do?Do("log",e,...t):console.log(e,...t)}function Zg(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ft(...t){t=Zg(t);let e="THREE."+t.shift();if(Do)Do("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function mt(...t){t=Zg(t);let e="THREE."+t.shift();if(Do)Do("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ba(...t){let e=t.join(" ");e in Dm||(Dm[e]=!0,ft(...t))}function jg(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Jg={[nh]:nh,[sh]:ah,[rh]:rh,[ko]:oh,[ih]:ih,[ah]:sh,[lh]:lh,[oh]:ko},ji=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nm=1234567,za=Math.PI/180,No=180/Math.PI;function Ns(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[t&255]+Vn[t>>8&255]+Vn[t>>16&255]+Vn[t>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function Rt(t,e,n){return Math.max(e,Math.min(n,t))}function vp(t,e){return(t%e+e)%e}function G_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function V_(t,e,n){return t!==e?(n-t)/(e-t):0}function Ha(t,e,n){return(1-n)*t+n*e}function W_(t,e,n,i){return Ha(t,e,1-Math.exp(-n*i))}function X_(t,e=1){return e-Math.abs(vp(t,e*2)-e)}function Y_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function q_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function $_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function K_(t,e){return t+Math.random()*(e-t)}function Z_(t){return t*(.5-Math.random())}function j_(t){t!==void 0&&(Nm=t);let e=Nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J_(t){return t*za}function Q_(t){return t*No}function eM(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function tM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function xp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function nM(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*m,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*m,a*c);break;case"ZYZ":t.set(l*m,l*f,a*h,a*c);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Eu(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yp(t,e){if(e.constructor===Float32Array)return t;let n=Eu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function bp(t,e){if(e.constructor===Float32Array)return t;let n=Eu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var Au={DEG2RAD:za,RAD2DEG:No,generateUUID:Ns,clamp:Rt,euclideanModulo:vp,mapLinear:G_,inverseLerp:V_,lerp:Ha,damp:W_,pingpong:X_,smoothstep:Y_,smootherstep:q_,randInt:$_,randFloat:K_,randFloatSpread:Z_,seededRandom:j_,degToRad:J_,radToDeg:Q_,isPowerOfTwo:eM,ceilPowerOfTwo:tM,floorPowerOfTwo:xp,setQuaternionFromProperEuler:nM,normalize:bp,denormalize:yp},Ep=class Ep{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;var Ge=Ep,jn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),_=Math.sin(v);p=Math.sin(p*v)/_,a=Math.sin(a*v)/_,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+y*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[n]=a*m+h*d+l*f-c*u,e[n+1]=l*m+h*u+c*d-a*f,e[n+2]=c*m+h*f+a*u-l*d,e[n+3]=h*m-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ap=class Ap{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Om.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;var G=Ap,hf=new G,Om=new jn,Rp=class Rp{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],v=s[1],_=s[4],M=s[7],S=s[2],T=s[5],x=s[8];return r[0]=o*y+a*v+l*S,r[3]=o*g+a*_+l*T,r[6]=o*p+a*M+l*x,r[1]=c*y+h*v+d*S,r[4]=c*g+h*_+d*T,r[7]=c*p+h*M+d*x,r[2]=u*y+f*v+m*S,r[5]=u*g+f*_+m*T,r[8]=u*p+f*M+m*x,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=n*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*n-s*l)*y,e[5]=(s*r-a*n)*y,e[6]=f*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*r)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Ba("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uf.makeScale(e,n)),this}rotate(e){return Ba("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uf.makeRotation(-e)),this}translate(e,n){return Ba("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rp.prototype.isMatrix3=!0;var yt=Rp,uf=new yt,Fm=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){let t={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Gt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Gt&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ds?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xa]:{primaries:e,whitePoint:i,transfer:Ya,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:Gt,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}var kt=iM();function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var po,dh=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{po===void 0&&(po=$a("canvas")),po.width=e.width,po.height=e.height;let s=po.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=po}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=$a("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sM=0,Oo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(df(s[o].image)):r.push(df(s[o]))}else r=df(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function df(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var rM=0,ff=new G,Jn=class t extends ji{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Zi,s=Zi,r=Ln,o=Ls,a=gi,l=mi,c=t.DEFAULT_ANISOTROPY,h=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ns(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ch:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ch:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=sp;Jn.DEFAULT_ANISOTROPY=1;var Cp=class Cp{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,M=(f+1)/2,S=(p+1)/2,T=(h+u)/4,x=(d+y)/4,b=(m+g)/4;return _>M&&_>S?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=x/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=b/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=b/r),this.set(i,s,r,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cp.prototype.isVector4=!0;var on=Cp,fh=class extends ji{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Jn({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Oo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends fh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Za=class extends Jn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ph=class extends Jn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Bh=class Bh{constructor(e,n,i,s,r,o,a,l,c,h,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,f,m,y,g)}set(e,n,i,s,r,o,a,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bh().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),r=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,y=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+m*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=m+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;n[0]=u+y*a,n[4]=m*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-m,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;n[0]=u-y*a,n[4]=-o*d,n[8]=m+f*a,n[1]=f+m*a,n[5]=o*h,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,y=a*d;n[0]=l*h,n[4]=m*c-f,n[8]=u*c+y,n[1]=l*d,n[5]=y*c+u,n[9]=f*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,m=a*l,y=a*c;n[0]=l*h,n[4]=y-u*d,n[8]=m*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+m,n[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,f=o*c,m=a*l,y=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+y,n[5]=o*h,n[9]=f*d-m,n[2]=m*d-f,n[6]=a*h,n[10]=y*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oM,e,aM)}lookAt(e,n,i){let s=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Ks.crossVectors(i,ui),Ks.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Ks.crossVectors(i,ui)),Ks.normalize(),Sc.crossVectors(ui,Ks),s[0]=Ks.x,s[4]=Sc.x,s[8]=ui.x,s[1]=Ks.y,s[5]=Sc.y,s[9]=ui.y,s[2]=Ks.z,s[6]=Sc.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],v=i[3],_=i[7],M=i[11],S=i[15],T=s[0],x=s[4],b=s[8],C=s[12],L=s[1],R=s[5],w=s[9],k=s[13],P=s[2],I=s[6],F=s[10],B=s[14],$=s[3],X=s[7],j=s[11],W=s[15];return r[0]=o*T+a*L+l*P+c*$,r[4]=o*x+a*R+l*I+c*X,r[8]=o*b+a*w+l*F+c*j,r[12]=o*C+a*k+l*B+c*W,r[1]=h*T+d*L+u*P+f*$,r[5]=h*x+d*R+u*I+f*X,r[9]=h*b+d*w+u*F+f*j,r[13]=h*C+d*k+u*B+f*W,r[2]=m*T+y*L+g*P+p*$,r[6]=m*x+y*R+g*I+p*X,r[10]=m*b+y*w+g*F+p*j,r[14]=m*C+y*k+g*B+p*W,r[3]=v*T+_*L+M*P+S*$,r[7]=v*x+_*R+M*I+S*X,r[11]=v*b+_*w+M*F+S*j,r[15]=v*C+_*k+M*B+S*W,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15],v=l*f-c*u,_=a*f-c*d,M=a*u-l*d,S=o*f-c*h,T=o*u-l*h,x=o*d-a*h;return n*(y*v-g*_+p*M)-i*(m*v-g*S+p*T)+s*(m*_-y*S+p*x)-r*(m*M-y*T+g*x)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],v=n*a-i*o,_=n*l-s*o,M=n*c-r*o,S=i*l-s*a,T=i*c-r*a,x=s*c-r*l,b=h*y-d*m,C=h*g-u*m,L=h*p-f*m,R=d*g-u*y,w=d*p-f*y,k=u*p-f*g,P=v*k-_*w+M*R+S*L-T*C+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=(a*k-l*w+c*R)*I,e[1]=(s*w-i*k-r*R)*I,e[2]=(y*x-g*T+p*S)*I,e[3]=(u*T-d*x-f*S)*I,e[4]=(l*L-o*k-c*C)*I,e[5]=(n*k-s*L+r*C)*I,e[6]=(g*M-m*x-p*_)*I,e[7]=(h*x-u*M+f*_)*I,e[8]=(o*w-a*L+c*b)*I,e[9]=(i*L-n*w-r*b)*I,e[10]=(m*T-y*M+p*v)*I,e[11]=(d*M-h*T-f*v)*I,e[12]=(a*C-o*R-l*b)*I,e[13]=(n*R-i*C+s*b)*I,e[14]=(y*_-m*S-g*v)*I,e[15]=(h*S-d*_+u*v)*I,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,y=o*h,g=o*d,p=a*d,v=l*c,_=l*h,M=l*d,S=i.x,T=i.y,x=i.z;return s[0]=(1-(y+p))*S,s[1]=(f+M)*S,s[2]=(m-_)*S,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+_)*x,s[9]=(g-v)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=mo.set(s[0],s[1],s[2]).length(),a=mo.set(s[4],s[5],s[6]).length(),l=mo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Oi.copy(this);let c=1/o,h=1/a,d=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=d,Oi.elements[9]*=d,Oi.elements[10]*=d,n.setFromRotationMatrix(Oi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Ei,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Ei)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===qa)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ei,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Ei)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===qa)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Bh.prototype.isMatrix4=!0;var Et=Bh,mo=new G,Oi=new Et,oM=new G(0,0,0),aM=new G(1,1,1),Ks=new G,Sc=new G,ui=new G,Bm=new Et,zm=new jn,si=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lM=0,Hm=new G,go=new jn,ws=new Et,Tc=new G,Ra=new G,cM=new G,hM=new jn,Gm=new G(1,0,0),Vm=new G(0,1,0),Wm=new G(0,0,1),Xm={type:"added"},uM={type:"removed"},vo={type:"childadded",child:null},pf={type:"childremoved",child:null},mn=class t extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new G,n=new si,i=new jn,s=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new yt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Vm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,n){return Hm.copy(e).applyQuaternion(this.quaternion),this.position.add(Hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Vm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ws.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Tc.copy(e):Tc.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ws.lookAt(Ra,Tc,this.up):ws.lookAt(Tc,Ra,this.up),this.quaternion.setFromRotationMatrix(ws),s&&(ws.extractRotation(s.matrixWorld),go.setFromRotationMatrix(ws),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),vo.child=e,this.dispatchEvent(vo),vo.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uM),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ws.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ws.multiply(e.parent.matrixWorld)),e.applyMatrix4(ws),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,cM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new G(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xt=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},dM={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=n.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function mf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Je=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=kt.workingColorSpace){return this.r=e,this.g=n,this.b=i,kt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=kt.workingColorSpace){if(e=vp(e,1),n=Rt(n,0,1),i=Rt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=mf(o,r,e+1/3),this.g=mf(o,r,e),this.b=mf(o,r,e-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(e,n=pn){function i(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){let i=Qg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return kt.workingToColorSpace(Wn.copy(this),e),Math.round(Rt(Wn.r*255,0,255))*65536+Math.round(Rt(Wn.g*255,0,255))*256+Math.round(Rt(Wn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=kt.workingColorSpace){kt.workingToColorSpace(Wn.copy(this),n);let i=Wn.r,s=Wn.g,r=Wn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=kt.workingColorSpace){return kt.workingToColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=pn){kt.workingToColorSpace(Wn.copy(this),e);let n=Wn.r,i=Wn.g,s=Wn.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+n,Zs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zs),e.getHSL(Ec);let i=Ha(Zs.h,Ec.h,n),s=Ha(Zs.s,Ec.s,n),r=Ha(Zs.l,Ec.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new Je;Je.NAMES=Qg;var Or=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Fi=new G,Ss=new G,gf=new G,Ts=new G,xo=new G,yo=new G,Ym=new G,vf=new G,xf=new G,yf=new G,bf=new on,_f=new on,Mf=new on,Rs=class t{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Fi.subVectors(e,n),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Fi.subVectors(s,n),Ss.subVectors(i,n),gf.subVectors(e,n);let o=Fi.dot(Fi),a=Fi.dot(Ss),l=Fi.dot(gf),c=Ss.dot(Ss),h=Ss.dot(gf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return bf.setScalar(0),_f.setScalar(0),Mf.setScalar(0),bf.fromBufferAttribute(e,n),_f.fromBufferAttribute(e,i),Mf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bf,r.x),o.addScaledVector(_f,r.y),o.addScaledVector(Mf,r.z),o}static isFrontFacing(e,n,i,s){return Fi.subVectors(i,n),Ss.subVectors(e,n),Fi.cross(Ss).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ss.subVectors(this.a,this.b),Fi.cross(Ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;xo.subVectors(s,i),yo.subVectors(r,i),vf.subVectors(e,i);let l=xo.dot(vf),c=yo.dot(vf);if(l<=0&&c<=0)return n.copy(i);xf.subVectors(e,s);let h=xo.dot(xf),d=yo.dot(xf);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),n.copy(i).addScaledVector(xo,o);yf.subVectors(e,r);let f=xo.dot(yf),m=yo.dot(yf);if(m>=0&&f<=m)return n.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(yo,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Ym.subVectors(r,s),a=(d-h)/(d-h+(f-m)),n.copy(s).addScaledVector(Ym,a);let p=1/(g+y+u);return o=y*p,a=u*p,n.copy(i).addScaledVector(xo,o).addScaledVector(yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ji=class{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ac.copy(i.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),Rc.subVectors(this.max,Ca),bo.subVectors(e.a,Ca),_o.subVectors(e.b,Ca),Mo.subVectors(e.c,Ca),js.subVectors(_o,bo),Js.subVectors(Mo,_o),Ir.subVectors(bo,Mo);let n=[0,-js.z,js.y,0,-Js.z,Js.y,0,-Ir.z,Ir.y,js.z,0,-js.x,Js.z,0,-Js.x,Ir.z,0,-Ir.x,-js.y,js.x,0,-Js.y,Js.x,0,-Ir.y,Ir.x,0];return!wf(n,bo,_o,Mo,Rc)||(n=[1,0,0,0,1,0,0,0,1],!wf(n,bo,_o,Mo,Rc))?!1:(Cc.crossVectors(js,Js),n=[Cc.x,Cc.y,Cc.z],wf(n,bo,_o,Mo,Rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Es=[new G,new G,new G,new G,new G,new G,new G,new G],Ui=new G,Ac=new Ji,bo=new G,_o=new G,Mo=new G,js=new G,Js=new G,Ir=new G,Ca=new G,Rc=new G,Cc=new G,Lr=new G;function wf(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Lr.fromArray(t,r);let a=s.x*Math.abs(Lr.x)+s.y*Math.abs(Lr.y)+s.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xn=new G,Pc=new Ge,fM=0,Tt=class extends ji{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mp,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=e!==void 0?Eu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(e),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):yp(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):bp(e,this.array)}};var Ja=class extends Tt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Qa=class extends Tt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var _t=class extends Tt{constructor(e,n,i){super(new Float32Array(e),n,i)}},pM=new Ji,Pa=new G,Sf=new G,ri=class{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):pM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let n=Pa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Pa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Sf)),this.expandByPoint(Pa.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mM=0,Ti=new Et,Tf=new mn,wo=new G,di=new Ji,Ia=new Ji,Pn=new G,Bt=class t extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z_(e)?Qa:Ja)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new yt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,i){return Ti.makeTranslation(e,n,i),this.applyMatrix4(Ti),this}scale(e,n,i){return Ti.makeScale(e,n,i),this.applyMatrix4(Ti),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];Ia.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(di.min,Ia.min),di.expandByPoint(Pn),Pn.addVectors(di.max,Ia.max),di.expandByPoint(Pn)):(di.expandByPoint(Ia.min),di.expandByPoint(Ia.max))}di.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),Pn.add(wo)),s=Math.max(s,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new G,l[C]=new G;let h=new G,d=new G,u=new G,f=new Ge,m=new Ge,y=new Ge,g=new G,p=new G;function v(C,L,R){c[C]=c[L]=c[R]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,L),y.fromBufferAttribute(r,R),d.sub(h),u.sub(h),m.sub(f),y.sub(f);let w=1/(m.x*y.y-y.x*m.y);isFinite(w)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(w),a[C].add(g),a[L].add(g),a[R].add(g),l[C].add(p),l[L].add(p),l[R].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,L=_.length;C<L;++C){let R=_[C],w=R.start,k=R.count;for(let P=w,I=w+k;P<I;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new G,S=new G,T=new G,x=new G;function b(C){T.fromBufferAttribute(s,C),x.copy(T);let L=a[C];M.copy(L),M.sub(T.multiplyScalar(T.dot(L))).normalize(),S.crossVectors(x,L);let w=S.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,w)}for(let C=0,L=i.count;C<L;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Tt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Tt(u,h,d)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},el=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mp,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=qm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=qm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function qm(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Ns()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var Zn=new G,Uo=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Eu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix4(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyNormalMatrix(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.transformDirection(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Tt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):yp(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):bp(e,this.data.array)}},Ef=new G,gM=new G,vM=new yt,Bi=class{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Ef.subVectors(i,n).cross(gM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Ef),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||vM.getNormalMatrix(e),s=this.coplanarPoint(Ef).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xM=0,Qi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ko,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=th,this.stencilZFail=th,this.stencilZPass=th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Bi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bo=class extends Qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},So,La=new G,To=new G,Eo=new G,Ao=new Ge,ka=new Ge,ev=new Et,Ic=new G,Da=new G,Lc=new G,$m=new Ge,Af=new Ge,Km=new Ge,tl=class extends mn{constructor(e=new Bo){if(super(),this.isSprite=!0,this.type="Sprite",So===void 0){So=new Bt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new el(n,5);So.setIndex([0,1,2,0,2,3]),So.setAttribute("position",new Uo(i,3,0,!1)),So.setAttribute("uv",new Uo(i,2,3,!1))}this.geometry=So,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),ev.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-Eo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;kc(Ic.set(-.5,-.5,0),Eo,o,To,s,r),kc(Da.set(.5,-.5,0),Eo,o,To,s,r),kc(Lc.set(.5,.5,0),Eo,o,To,s,r),$m.set(0,0),Af.set(1,0),Km.set(1,1);let a=e.ray.intersectTriangle(Ic,Da,Lc,!1,La);if(a===null&&(kc(Da.set(-.5,.5,0),Eo,o,To,s,r),Af.set(0,1),a=e.ray.intersectTriangle(Ic,Lc,Da,!1,La),a===null))return;let l=e.ray.origin.distanceTo(La);l<e.near||l>e.far||n.push({distance:l,point:La.clone(),uv:Rs.getInterpolation(La,Ic,Da,Lc,$m,Af,Km,new Ge),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let n=super.toJSON(e);return n.object.center=this.center.toArray(),n}};function kc(t,e,n,i,s,r){Ao.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(ka.x=r*Ao.x-s*Ao.y,ka.y=s*Ao.x+r*Ao.y):ka.copy(Ao),t.copy(e),t.x+=ka.x,t.y+=ka.y,t.applyMatrix4(ev)}var As=new G,Rf=new G,Dc=new G,Nc=new G,zo=class{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,As)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=As.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(As.copy(this.origin).addScaledVector(this.direction,n),As.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Rf.copy(e).add(n).multiplyScalar(.5),Dc.copy(n).sub(e).normalize(),Nc.copy(this.origin).sub(Rf);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Dc),a=Nc.dot(this.direction),l=-Nc.dot(Dc),c=Nc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rf).addScaledVector(Dc,u),f}intersectSphere(e,n){if(e.radius<0)return null;As.subVectors(e.center,this.origin);let i=As.dot(this.direction),s=As.dot(As)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,As)!==null}intersectTriangle(e,n,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=n.x-o.x,y=n.y-o.y,g=n.z-o.z,p=i.x-o.x,v=i.y-o.y,_=i.z-o.z,M=Math.abs(l),S=Math.abs(c),T=Math.abs(h),x,b,C,L,R,w,k,P,I,F,B,$;if(M>=S&&M>=T?(C=l,w=d,I=m,$=p,l>=0?(x=c,b=h,L=u,R=f,k=y,P=g,F=v,B=_):(x=h,b=c,L=f,R=u,k=g,P=y,F=_,B=v)):S>=T?(C=c,w=u,I=y,$=v,c>=0?(x=h,b=l,L=f,R=d,k=g,P=m,F=_,B=p):(x=l,b=h,L=d,R=f,k=m,P=g,F=p,B=_)):(C=h,w=f,I=g,$=_,h>=0?(x=l,b=c,L=d,R=u,k=m,P=y,F=p,B=v):(x=c,b=l,L=u,R=d,k=y,P=m,F=v,B=p)),C===0)return null;let X=x/C,j=b/C,W=1/C,ee=L-X*w,Ee=R-j*w,Q=k-X*I,re=P-j*I,_e=F-X*$,Oe=B-j*$,ie=_e*re-Oe*Q,Ce=ee*Oe-Ee*_e,He=Q*Ee-re*ee;if(s){if(ie<0||Ce<0||He<0)return null}else if((ie<0||Ce<0||He<0)&&(ie>0||Ce>0||He>0))return null;let Ue=ie+Ce+He;if(Ue===0)return null;let qe=W*(ie*w+Ce*I+He*$);return(Ue>0?qe<0:qe>0)?null:this.at(qe/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zm=new Et,kr=new zo,Oc=new ri,jm=new G,Fc=new G,Uc=new G,Bc=new G,Cf=new G,zc=new G,Jm=new G,Hc=new G,at=class extends mn{constructor(e=new Bt,n=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){zc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Cf.fromBufferAttribute(d,e),o?zc.addScaledVector(Cf,h):zc.addScaledVector(Cf.sub(n),h))}n.add(zc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),kr.copy(e.ray).recast(e.near),!(Oc.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Oc,jm)===null||kr.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Zm.copy(r).invert(),kr.copy(e.ray).applyMatrix4(Zm),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=_;M<S;M+=3){let T=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);s=Gc(this,p,e,i,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let v=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);s=Gc(this,o,e,i,c,h,d,v,_,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=_;M<S;M+=3){let T=M,x=M+1,b=M+2;s=Gc(this,p,e,i,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let v=g,_=g+1,M=g+2;s=Gc(this,o,e,i,c,h,d,v,_,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function yM(t,e,n,i,s,r,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===sr,a),l===null)return null;Hc.copy(a),Hc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Hc);return c<n.near||c>n.far?null:{distance:c,point:Hc.clone(),object:t}}function Gc(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Fc),t.getVertexPosition(l,Uc),t.getVertexPosition(c,Bc);let h=yM(t,e,n,i,Fc,Uc,Bc,Jm);if(h){let d=new G;Rs.getBarycoord(Jm,Fc,Uc,Bc,d),s&&(h.uv=Rs.getInterpolatedAttribute(s,a,l,c,d,new Ge)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,a,l,c,d,new Ge)),o&&(h.normal=Rs.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};Rs.getNormal(Fc,Uc,Bc,u.normal),h.face=u,h.barycoord=d}return h}var Fr=class extends Jn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=In,h=In,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ho=class extends Tt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ro=new Et,Qm=new Et,Vc=[],eg=new Ji,bM=new Et,Na=new at,Oa=new ri,es=class extends at{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bM)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ro),eg.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(eg)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ro),Oa.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Oa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ro),Qm.multiplyMatrices(i,Ro),Na.matrixWorld=Qm,Na.raycast(e,Vc);for(let o=0,a=Vc.length;o<a;o++){let l=Vc[o];l.instanceId=r,l.object=this,n.push(l)}Vc.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,Yh,Ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dr=new ri,_M=new Ge(.5,.5),Wc=new G,Ur=class{constructor(e=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],v=r[12],_=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-m,S-v).normalize(),s[1].setComponents(c+o,f+h,p+m,S+v).normalize(),s[2].setComponents(c+a,f+d,p+y,S+_).normalize(),s[3].setComponents(c-a,f-d,p-y,S-_).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,p-g,S-M).normalize();else if(s[4].setComponents(c-l,f-u,p-g,S-M).normalize(),n===Ei)s[5].setComponents(c+l,f+u,p+g,S+M).normalize();else if(n===qa)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);let n=_M.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Wc.x=s.normal.x>0?e.max.x:e.min.x,Wc.y=s.normal.y>0?e.max.y:e.min.y,Wc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tg=new Et,mh=class t{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];tg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ur),i[s].setFromProjectionMatrix(tg,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new Ur),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}};var nl=class extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gh=new G,vh=new G,ng=new Et,Fa=new zo,Xc=new ri,Pf=new G,ig=new G,il=class extends mn{constructor(e=new Bt,n=new nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)gh.fromBufferAttribute(n,s-1),vh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=gh.distanceTo(vh);e.setAttribute("lineDistance",new _t(i,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(s),Xc.radius+=r,e.ray.intersectsSphere(Xc)===!1)return;ng.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(ng);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=h.getX(y),v=h.getX(y+1),_=Yc(this,e,Fa,l,p,v,y);_&&n.push(_)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(f),p=Yc(this,e,Fa,l,y,g,m-1);p&&n.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=Yc(this,e,Fa,l,y,y+1,y);p&&n.push(p)}if(this.isLineLoop){let y=Yc(this,e,Fa,l,m-1,f,m-1);y&&n.push(y)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yc(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(gh.fromBufferAttribute(a,s),vh.fromBufferAttribute(a,r),n.distanceSqToSegment(gh,vh,Pf,ig)>i)return;Pf.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Pf);if(!(c<e.near||c>e.far))return{distance:c,point:ig.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Go=class extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sg=new Et,Uf=new zo,qc=new ri,$c=new G,sl=class extends mn{constructor(e=new Bt,n=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(s),qc.radius+=r,e.ray.intersectsSphere(qc)===!1)return;sg.copy(s).invert(),Uf.copy(e.ray).applyMatrix4(sg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);$c.fromBufferAttribute(d,g),rg($c,g,l,s,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,y=f;m<y;m++)$c.fromBufferAttribute(d,m),rg($c,m,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rg(t,e,n,i,s,r,o){let a=Uf.distanceSqToPoint(t);if(a<n){let l=new G;Uf.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var rl=class extends Jn{constructor(e=[],n=Yr,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Br=class extends Jn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Is=class extends Jn{constructor(e,n,i=zi,s,r,o,a=In,l=In,c,h=Ps,d=1){if(h!==Ps&&h!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},ol=class extends Is{constructor(e,n=zi,i=Yr,s,r,o=In,a=In,l,c=Ps){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},al=class extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gt=class t extends Bt{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,n,e,o,r,0),m("z","y","x",1,-1,i,n,-e,o,r,1),m("x","z","y",1,1,e,i,n,s,o,2),m("x","z","y",1,-1,e,i,-n,s,o,3),m("x","y","z",1,-1,e,n,i,s,r,4),m("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function m(y,g,p,v,_,M,S,T,x,b,C){let L=M/x,R=S/b,w=M/2,k=S/2,P=T/2,I=x+1,F=b+1,B=0,$=0,X=new G;for(let j=0;j<F;j++){let W=j*R-k;for(let ee=0;ee<I;ee++){let Ee=ee*L-w;X[y]=Ee*v,X[g]=W*_,X[p]=P,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(ee/x),d.push(1-j/b),B+=1}}for(let j=0;j<b;j++)for(let W=0;W<x;W++){let ee=u+W+I*j,Ee=u+W+I*(j+1),Q=u+(W+1)+I*(j+1),re=u+(W+1)+I*j;l.push(ee,Ee,re),l.push(Ee,Q,re),$+=6}a.addGroup(f,$,C),f+=$,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ll=class t extends Bt{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new G,h=new Ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class t extends Bt{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=i/2,p=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function v(){let M=new G,S=new G,T=0,x=(n-e)/i;for(let b=0;b<=r;b++){let C=[],L=b/r,R=L*(n-e)+e;for(let w=0;w<=s;w++){let k=w/s,P=k*l+a,I=Math.sin(P),F=Math.cos(P);S.x=R*I,S.y=-L*i+g,S.z=R*F,d.push(S.x,S.y,S.z),M.set(I,x,F).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-L),C.push(m++)}y.push(C)}for(let b=0;b<s;b++)for(let C=0;C<r;C++){let L=y[C][b],R=y[C+1][b],w=y[C+1][b+1],k=y[C][b+1];(e>0||C!==0)&&(h.push(L,R,k),T+=3),(n>0||C!==r-1)&&(h.push(R,w,k),T+=3)}c.addGroup(p,T,0),p+=T}function _(M){let S=m,T=new Ge,x=new G,b=0,C=M===!0?e:n,L=M===!0?1:-1;for(let w=1;w<=s;w++)d.push(0,g*L,0),u.push(0,L,0),f.push(.5,.5),m++;let R=m;for(let w=0;w<=s;w++){let P=w/s*l+a,I=Math.cos(P),F=Math.sin(P);x.x=C*F,x.y=g*L,x.z=C*I,d.push(x.x,x.y,x.z),u.push(0,L,0),T.x=I*.5+.5,T.y=F*.5*L+.5,f.push(T.x,T.y),m++}for(let w=0;w<s;w++){let k=S+w,P=R+w;M===!0?h.push(P,P+1,k):h.push(P+1,P,k),b+=3}c.addGroup(p,b,M===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cl=class t extends Jt{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hl=class t extends Bt{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new G,M=new G,S=new G;for(let T=0;T<n.length;T+=3)f(n[T+0],_),f(n[T+1],M),f(n[T+2],S),l(_,M,S,v)}function l(v,_,M,S){let T=S+1,x=[];for(let b=0;b<=T;b++){x[b]=[];let C=v.clone().lerp(M,b/T),L=_.clone().lerp(M,b/T),R=T-b;for(let w=0;w<=R;w++)w===0&&b===T?x[b][w]=C:x[b][w]=C.clone().lerp(L,w/R)}for(let b=0;b<T;b++)for(let C=0;C<2*(T-b)-1;C++){let L=Math.floor(C/2);C%2===0?(u(x[b][L+1]),u(x[b+1][L]),u(x[b][L])):(u(x[b][L+1]),u(x[b+1][L+1]),u(x[b+1][L]))}}function c(v){let _=new G;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let v=new G;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let M=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(M,1-S)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],M=o[v+2],S=o[v+4],T=Math.max(_,M,S),x=Math.min(_,M,S);T>.9&&x<.1&&(_<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let M=v*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function m(){let v=new G,_=new G,M=new G,S=new G,T=new Ge,x=new Ge,b=new Ge;for(let C=0,L=0;C<r.length;C+=9,L+=6){v.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),T.set(o[L+0],o[L+1]),x.set(o[L+2],o[L+3]),b.set(o[L+4],o[L+5]),S.copy(v).add(_).add(M).divideScalar(3);let R=g(S);y(T,L+0,v,R),y(x,L+2,_,R),y(b,L+4,M,R)}}function y(v,_,M,S){S<0&&v.x===1&&(o[_]=v.x-1),M.x===0&&M.z===0&&(o[_]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Ge:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new G,s=[],r=[],o=[],a=new G,l=new Et;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(Rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Vo=class extends Qn{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ge){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends Vo{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _p(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var og=new G,ag=new G,If=new _p,Lf=new _p,kf=new _p,yh=class extends Qn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new G){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ag.subVectors(s[0],s[1]).add(s[0]),c=ag);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(og.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=og),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),If.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),Lf.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),kf.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(If.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Lf.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),kf.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(If.calc(l),Lf.calc(l),kf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lg(t,e,n,i,s){let r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function MM(t,e){let n=1-t;return n*n*e}function wM(t,e){return 2*(1-t)*t*e}function SM(t,e){return t*t*e}function Ga(t,e,n,i){return MM(t,e)+wM(t,n)+SM(t,i)}function TM(t,e){let n=1-t;return n*n*n*e}function EM(t,e){let n=1-t;return 3*n*n*t*e}function AM(t,e){return 3*(1-t)*t*t*e}function RM(t,e){return t*t*t*e}function Va(t,e,n,i,s){return TM(t,e)+EM(t,n)+AM(t,i)+RM(t,s)}var ul=class extends Qn{constructor(e=new Ge,n=new Ge,i=new Ge,s=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Ge){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,s.x,r.x,o.x,a.x),Va(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bh=class extends Qn{constructor(e=new G,n=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new G){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,s.x,r.x,o.x,a.x),Va(e,s.y,r.y,o.y,a.y),Va(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dl=class extends Qn{constructor(e=new Ge,n=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ge){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_h=class extends Qn{constructor(e=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new G){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Qn{constructor(e=new Ge,n=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ge){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Ga(e,s.x,r.x,o.x),Ga(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends Qn{constructor(e=new G,n=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new G){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Ga(e,s.x,r.x,o.x),Ga(e,s.y,r.y,o.y),Ga(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ge){let i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(lg(a,l.x,c.x,h.x,d.x),lg(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new Ge().fromArray(s))}return this}},Mh=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:yh,CubicBezierCurve:ul,CubicBezierCurve3:bh,EllipseCurve:Vo,LineCurve:dl,LineCurve3:_h,QuadraticBezierCurve:fl,QuadraticBezierCurve3:pl,SplineCurve:ml}),wh=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mh[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new Mh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},zr=class extends wh{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new dl(this.currentPoint.clone(),new Ge(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new fl(this.currentPoint.clone(),new Ge(e,n),new Ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){let a=new ul(this.currentPoint.clone(),new Ge(e,n),new Ge(i,s),new Ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new ml(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){let c=new Vo(e,n,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wo=class extends zr{constructor(e){super(e),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new zr().fromJSON(s))}return this}};function CM(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=tv(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=DM(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let h=a,d=l;for(let u=n;u<s;u+=n){let f=t[u],m=t[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return gl(r,o,n,a,l,c,0),o}function tv(t,e,n,i,s){let r;if(s===XM(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=cg(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=cg(o/i|0,t[o],t[o+1],r);return r&&Xo(r,r.next)&&(xl(r),r=r.next),r}function Hr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Xo(n,n.next)||rn(n.prev,n,n.next)===0)){if(xl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function gl(t,e,n,i,s,r,o){if(!t)return;!o&&r&&BM(t,i,s,r);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?IM(t,i,s,r):PM(t)){e.push(l.i,t.i,c.i),xl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=LM(Hr(t),e),gl(t,e,n,i,s,r,2)):o===2&&kM(t,e,n,i,s,r):gl(Hr(t),e,n,i,s,r,1);break}}}function PM(t){let e=t.prev,n=t,i=t.next;if(rn(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Ua(s,a,r,l,o,c,m.x,m.y)&&rn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function IM(t,e,n,i){let s=t.prev,r=t,o=t.next;if(rn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),y=Math.max(a,l,c),g=Math.max(h,d,u),p=Bf(f,m,e,n,i),v=Bf(y,g,e,n,i),_=t.prevZ,M=t.nextZ;for(;_&&_.z>=p&&M&&M.z<=v;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ua(a,h,l,d,c,u,_.x,_.y)&&rn(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Ua(a,h,l,d,c,u,M.x,M.y)&&rn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ua(a,h,l,d,c,u,_.x,_.y)&&rn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Ua(a,h,l,d,c,u,M.x,M.y)&&rn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function LM(t,e){let n=t;do{let i=n.prev,s=n.next.next;!Xo(i,s)&&iv(i,n,n.next,s)&&vl(i,s)&&vl(s,i)&&(e.push(i.i,n.i,s.i),xl(n),xl(n.next),n=t=s),n=n.next}while(n!==t);return Hr(n)}function kM(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&GM(o,a)){let l=sv(o,a);o=Hr(o,o.next),l=Hr(l,l.next),gl(o,e,n,i,s,r,0),gl(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function DM(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=tv(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(HM(c))}s.sort(NM);for(let r=0;r<s.length;r++)n=OM(s[r],n);return n}function NM(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function OM(t,e){let n=FM(t,e);if(!n)return e;let i=sv(n,t);return Hr(i,i.next),Hr(n,n.next)}function FM(t,e){let n=e,i=t.x,s=t.y,r=-1/0,o;if(Xo(t,n))return n;do{if(Xo(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r&&(r=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&nv(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);vl(n,t)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&UM(o,n)))&&(o=n,h=d)}n=n.next}while(n!==a);return o}function UM(t,e){return rn(t.prev,t,e.prev)<0&&rn(e.next,t,t.next)<0}function BM(t,e,n,i){let s=t;do s.z===0&&(s.z=Bf(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,zM(s)}function zM(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function Bf(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function HM(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function nv(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Ua(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&nv(t,e,n,i,s,r,o,a)}function GM(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!VM(t,e)&&(vl(t,e)&&vl(e,t)&&WM(t,e)&&(rn(t.prev,t,e.prev)||rn(t,e.prev,e))||Xo(t,e)&&rn(t.prev,t,t.next)>0&&rn(e.prev,e,e.next)>0)}function rn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Xo(t,e){return t.x===e.x&&t.y===e.y}function iv(t,e,n,i){let s=Zc(rn(t,e,n)),r=Zc(rn(t,e,i)),o=Zc(rn(n,i,t)),a=Zc(rn(n,i,e));return!!(s!==r&&o!==a||s===0&&Kc(t,n,e)||r===0&&Kc(t,i,e)||o===0&&Kc(n,t,i)||a===0&&Kc(n,e,i))}function Kc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Zc(t){return t>0?1:t<0?-1:0}function VM(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&iv(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function vl(t,e){return rn(t.prev,t,t.next)<0?rn(t,e,t.next)>=0&&rn(t,t.prev,e)>=0:rn(t,e,t.prev)<0||rn(t,t.next,e)<0}function WM(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function sv(t,e){let n=zf(t.i,t.x,t.y),i=zf(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function cg(t,e,n,i){let s=zf(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function zf(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function XM(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}var Hf=class{static triangulate(e,n,i=2){return CM(e,n,i)}},Nr=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];hg(e),ug(i,e);let o=e.length;n.forEach(hg);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,ug(i,n[l]);let a=Hf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hg(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ug(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var yl=class t extends Bt{constructor(e=new Wo([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:f-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,p=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:YM,_,M=!1,S,T,x,b;if(p){_=p.getSpacedPoints(h),M=!0,u=!1;let ge=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,ge),T=new G,x=new G,b=new G}u||(g=0,f=0,m=0,y=0);let C=a.extractPoints(c),L=C.shape,R=C.holes;if(!Nr.isClockWise(L)){L=L.reverse();for(let ge=0,Pe=R.length;ge<Pe;ge++){let ye=R[ge];Nr.isClockWise(ye)&&(R[ge]=ye.reverse())}}function k(ge){let ye=10000000000000001e-36,fe=ge[0];for(let Ae=1;Ae<=ge.length;Ae++){let Z=Ae%ge.length,de=ge[Z],pe=de.x-fe.x,De=de.y-fe.y,Ne=pe*pe+De*De,q=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(fe.x),Math.abs(fe.y)),we=ye*q*q;if(Ne<=we){ge.splice(Z,1),Ae--;continue}fe=de}}k(L),R.forEach(k);let P=R.length,I=L;for(let ge=0;ge<P;ge++){let Pe=R[ge];L=L.concat(Pe)}function F(ge,Pe,ye){return Pe||mt("ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(Pe,ye)}let B=L.length;function $(ge,Pe,ye){let fe,Ae,Z,de=ge.x-Pe.x,pe=ge.y-Pe.y,De=ye.x-ge.x,Ne=ye.y-ge.y,q=de*de+pe*pe,we=de*Ne-pe*De;if(Math.abs(we)>Number.EPSILON){let Ve=Math.sqrt(q),Te=Math.sqrt(De*De+Ne*Ne),O=Pe.x-pe/Ve,K=Pe.y+de/Ve,J=ye.x-Ne/Te,Me=ye.y+De/Te,D=((J-O)*Ne-(Me-K)*De)/(de*Ne-pe*De);fe=O+de*D-ge.x,Ae=K+pe*D-ge.y;let E=fe*fe+Ae*Ae;if(E<=2)return new Ge(fe,Ae);Z=Math.sqrt(E/2)}else{let Ve=!1;de>Number.EPSILON?De>Number.EPSILON&&(Ve=!0):de<-Number.EPSILON?De<-Number.EPSILON&&(Ve=!0):Math.sign(pe)===Math.sign(Ne)&&(Ve=!0),Ve?(fe=-pe,Ae=de,Z=Math.sqrt(q)):(fe=de,Ae=pe,Z=Math.sqrt(q/2))}return new Ge(fe/Z,Ae/Z)}let X=[];for(let ge=0,Pe=I.length,ye=Pe-1,fe=ge+1;ge<Pe;ge++,ye++,fe++)ye===Pe&&(ye=0),fe===Pe&&(fe=0),X[ge]=$(I[ge],I[ye],I[fe]);let j=[],W,ee=X.concat();for(let ge=0,Pe=P;ge<Pe;ge++){let ye=R[ge];W=[];for(let fe=0,Ae=ye.length,Z=Ae-1,de=fe+1;fe<Ae;fe++,Z++,de++)Z===Ae&&(Z=0),de===Ae&&(de=0),W[fe]=$(ye[fe],ye[Z],ye[de]);j.push(W),ee=ee.concat(W)}let Ee;if(g===0)Ee=Nr.triangulateShape(I,R);else{let ge=[],Pe=[];for(let ye=0;ye<g;ye++){let fe=ye/g,Ae=f*Math.cos(fe*Math.PI/2),Z=m*Math.sin(fe*Math.PI/2)+y;for(let de=0,pe=I.length;de<pe;de++){let De=F(I[de],X[de],Z);Ce(De.x,De.y,-Ae),fe===0&&ge.push(De)}for(let de=0,pe=P;de<pe;de++){let De=R[de];W=j[de];let Ne=[];for(let q=0,we=De.length;q<we;q++){let Ve=F(De[q],W[q],Z);Ce(Ve.x,Ve.y,-Ae),fe===0&&Ne.push(Ve)}fe===0&&Pe.push(Ne)}}Ee=Nr.triangulateShape(ge,Pe)}let Q=Ee.length,re=m+y;for(let ge=0;ge<B;ge++){let Pe=u?F(L[ge],ee[ge],re):L[ge];M?(x.copy(S.normals[0]).multiplyScalar(Pe.x),T.copy(S.binormals[0]).multiplyScalar(Pe.y),b.copy(_[0]).add(x).add(T),Ce(b.x,b.y,b.z)):Ce(Pe.x,Pe.y,0)}for(let ge=1;ge<=h;ge++)for(let Pe=0;Pe<B;Pe++){let ye=u?F(L[Pe],ee[Pe],re):L[Pe];M?(x.copy(S.normals[ge]).multiplyScalar(ye.x),T.copy(S.binormals[ge]).multiplyScalar(ye.y),b.copy(_[ge]).add(x).add(T),Ce(b.x,b.y,b.z)):Ce(ye.x,ye.y,d/h*ge)}for(let ge=g-1;ge>=0;ge--){let Pe=ge/g,ye=f*Math.cos(Pe*Math.PI/2),fe=m*Math.sin(Pe*Math.PI/2)+y;for(let Ae=0,Z=I.length;Ae<Z;Ae++){let de=F(I[Ae],X[Ae],fe);Ce(de.x,de.y,d+ye)}for(let Ae=0,Z=R.length;Ae<Z;Ae++){let de=R[Ae];W=j[Ae];for(let pe=0,De=de.length;pe<De;pe++){let Ne=F(de[pe],W[pe],fe);M?Ce(Ne.x,Ne.y+_[h-1].y,_[h-1].x+ye):Ce(Ne.x,Ne.y,d+ye)}}}_e(),Oe();function _e(){let ge=s.length/3;if(u){let Pe=0,ye=B*Pe;for(let fe=0;fe<Q;fe++){let Ae=Ee[fe];He(Ae[2]+ye,Ae[1]+ye,Ae[0]+ye)}Pe=h+g*2,ye=B*Pe;for(let fe=0;fe<Q;fe++){let Ae=Ee[fe];He(Ae[0]+ye,Ae[1]+ye,Ae[2]+ye)}}else{for(let Pe=0;Pe<Q;Pe++){let ye=Ee[Pe];He(ye[2],ye[1],ye[0])}for(let Pe=0;Pe<Q;Pe++){let ye=Ee[Pe];He(ye[0]+B*h,ye[1]+B*h,ye[2]+B*h)}}i.addGroup(ge,s.length/3-ge,0)}function Oe(){let ge=s.length/3,Pe=0;ie(I,Pe),Pe+=I.length;for(let ye=0,fe=R.length;ye<fe;ye++){let Ae=R[ye];ie(Ae,Pe),Pe+=Ae.length}i.addGroup(ge,s.length/3-ge,1)}function ie(ge,Pe){let ye=ge.length;for(;--ye>=0;){let fe=ye,Ae=ye-1;Ae<0&&(Ae=ge.length-1);for(let Z=0,de=h+g*2;Z<de;Z++){let pe=B*Z,De=B*(Z+1),Ne=Pe+fe+pe,q=Pe+Ae+pe,we=Pe+Ae+De,Ve=Pe+fe+De;Ue(Ne,q,we,Ve)}}}function Ce(ge,Pe,ye){l.push(ge),l.push(Pe),l.push(ye)}function He(ge,Pe,ye){qe(ge),qe(Pe),qe(ye);let fe=s.length/3,Ae=v.generateTopUV(i,s,fe-3,fe-2,fe-1);Ke(Ae[0]),Ke(Ae[1]),Ke(Ae[2])}function Ue(ge,Pe,ye,fe){qe(ge),qe(Pe),qe(fe),qe(Pe),qe(ye),qe(fe);let Ae=s.length/3,Z=v.generateSideWallUV(i,s,Ae-6,Ae-3,Ae-2,Ae-1);Ke(Z[0]),Ke(Z[1]),Ke(Z[3]),Ke(Z[1]),Ke(Z[2]),Ke(Z[3])}function qe(ge){s.push(l[ge*3+0]),s.push(l[ge*3+1]),s.push(l[ge*3+2])}function Ke(ge){r.push(ge.x),r.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return qM(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=n[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mh[s.type]().fromJSON(s)),new t(i,e.options)}},YM={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ge(r,o),new Ge(a,l),new Ge(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ge(o,1-l),new Ge(c,1-d),new Ge(u,1-m),new Ge(y,1-p)]:[new Ge(a,1-l),new Ge(h,1-d),new Ge(f,1-m),new Ge(g,1-p)]}};function qM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Gr=class t extends hl{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},bl=class t extends Bt{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=Rt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/n,d=new G,u=new Ge,f=new G,m=new G,y=new G,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let v=0;v<=n;v++){let _=i+v*h*s,M=Math.sin(_),S=Math.cos(_);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*S,o.push(d.x,d.y,d.z),u.x=v/n,u.y=T/(e.length-1),a.push(u.x,u.y);let x=l[3*T+0]*M,b=l[3*T+1],C=l[3*T+0]*S;c.push(x,b,C)}}for(let v=0;v<n;v++)for(let _=0;_<e.length-1;_++){let M=_+v*e.length,S=M,T=M+e.length,x=M+e.length+1,b=M+1;r.push(S,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("uv",new _t(a,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},Yo=class t extends hl{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},ts=class t extends Bt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let M=_*d-r;m.push(M,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,M=v+c*(p+1),S=v+1+c*(p+1),T=v+1+c*p;f.push(_,M,T),f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},er=class t extends Bt{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/s,f=new G,m=new Ge;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/n+1)/2,m.y=(f.y/n+1)/2,h.push(m.x,m.y)}d+=u}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let v=p+g,_=v,M=v+i+1,S=v+i+2,T=v+1;a.push(_,M,T),a.push(M,S,T)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var an=class t extends Bt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new G,u=new G,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let v=[],_=p/i,M=o+_*a,S=e*Math.cos(M),T=Math.sqrt(e*e-S*S),x=0;p===0&&o===0?x=.5/n:p===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){let C=b/n,L=s+C*r;d.x=-T*Math.cos(L),d.y=S,d.z=T*Math.sin(L),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(C+x,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<n;v++){let _=h[p][v+1],M=h[p][v],S=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(_,M,T),(p!==i-1||l<Math.PI)&&f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vr=class t extends Bt{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new G,f=new G,m=new G;for(let y=0;y<=i;y++){let g=o+y/i*a;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(e+n*Math.cos(g))*Math.cos(v),f.y=(e+n*Math.cos(g))*Math.sin(v),f.z=n*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,v=(s+1)*(y-1)+g-1,_=(s+1)*(y-1)+g,M=(s+1)*y+g;l.push(p,v,M),l.push(v,_,M)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var _l=class t extends Bt{constructor(e=new pl(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,c=new Ge,h=new G,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function y(){for(let _=0;_<n;_++)g(_);g(r===!1?n:0),v(),p()}function g(_){h=e.getPointAt(_/n,h);let M=o.normals[_],S=o.binormals[_];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),C=-Math.cos(x);l.x=C*M.x+b*S.x,l.y=C*M.y+b*S.y,l.z=C*M.z+b*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=n;_++)for(let M=1;M<=s;M++){let S=(s+1)*(_-1)+(M-1),T=(s+1)*_+(M-1),x=(s+1)*_+M,b=(s+1)*(_-1)+M;m.push(S,T,b),m.push(T,x,b)}}function v(){for(let _=0;_<=n;_++)for(let M=0;M<=s;M++)c.x=_/n,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new Mh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function $r(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(dg(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(dg(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Yn(t){let e={};for(let n=0;n<t.length;n++){let i=$r(t[n]);for(let s in i)e[s]=i[s]}return e}function dg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $M(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mp(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var rv={clone:$r,merge:Yn},KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=$M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new on().fromArray(s.value);break;case"m3":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sh=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Th=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ml=class extends nl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Co(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function jc(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var tr=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ah=class extends tr{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nf,endingEnd:Nf}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Of:r=e,a=2*n-i;break;case Ff:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Of:o=e,l=2*i-n;break;case Ff:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-n)/(s-n),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,v=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[c+S]+_*o[l+S]+M*o[d+S];return r}},Rh=class extends tr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ch=class extends tr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ph=class extends tr{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-n)/(s-n),y=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let y=o[c+m],g=o[l+m],p=f*u+m*2,v=d[p],_=d[p+1],M=e*u+m*2,S=h[M],T=h[M+1],x=JM(i,n,v,S,s);r[m]=ov(x,y,_,T,g)}return r}};function ov(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function jM(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function JM(t,e,n,i,s){let r=(t-e)/(s-e);for(let o=0;o<8;o++){let a=ov(r,e,n,i,s)-t;if(Math.abs(a)<1e-10)break;let l=jM(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var pi=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(n,this.TimeBufferType),this.values=Co(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),jc(e.settings)&&(i.settings={inTangents:Co(e.settings.inTangents,Array),outTangents:Co(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Ph(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Wa:n=this.InterpolantFactoryMethodDiscrete;break;case uh:n=this.InterpolantFactoryMethodLinear;break;case eh:n=this.InterpolantFactoryMethodSmooth;break;case Df:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ft("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return eh;case this.InterpolantFactoryMethodBezier:return Df}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;jc(this.settings)&&(fg(this.settings.inTangents,e),fg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;jc(this.settings)&&(pg(this.settings.inTangents,e),pg(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){mt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&H_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===eh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let y=n[d+m];if(y!==n[u+m]||y!==n[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,jc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fg(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function pg(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=uh;var nr=class extends pi{constructor(e,n,i){super(e,n,i)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Wa;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}};Ih.prototype.ValueTypeName="color";var Lh=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}};Lh.prototype.ValueTypeName="number";var kh=class extends tr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wl=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}};wl.prototype.ValueTypeName="quaternion";wl.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends pi{constructor(e,n,i){super(e,n,i)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Wa;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}};Dh.prototype.ValueTypeName="vector";var Nh=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},av=new Nh,Oh=class{constructor(e){this.manager=e!==void 0?e:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Oh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jc=new G,Qc=new jn,Ki=new G,Sl=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jc,Qc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,Qc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Jc,Qc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,Qc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qs=new G,mg=new Ge,gg=new Ge,Un=class extends Sl{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z)}getViewSize(e,n){return this.getViewBounds(e,mg,gg),n.subVectors(gg,mg)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Fh=class extends Sl{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Po=-90,Io=1,qo=class extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(Po,Io,e,n);s.layers=this.layers,this.add(s);let r=new Un(Po,Io,e,n);r.layers=this.layers,this.add(r);let o=new Un(Po,Io,e,n);o.layers=this.layers,this.add(o);let a=new Un(Po,Io,e,n);a.layers=this.layers,this.add(a);let l=new Un(Po,Io,e,n);l.layers=this.layers,this.add(l);let c=new Un(Po,Io,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Uh=class extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var wp="\\[\\]\\.:\\/",QM=new RegExp("["+wp+"]","g"),Sp="[^"+wp+"]",ew="[^"+wp.replace("\\.","")+"]",tw=/((?:WC+[\/:])*)/.source.replace("WC",Sp),nw=/(WCOD+)?/.source.replace("WCOD",ew),iw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sp),sw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sp),rw=new RegExp("^"+tw+nw+iw+sw+"$"),ow=["material","materials","bones","map"],Gf=class{constructor(e,n,i){let s=i||jt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},jt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(QM,"")}static parseTrackName(e){let n=rw.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ow.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=Gf;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uI=new Float32Array(1);var Pp=class Pp{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Pp.prototype.isMatrix2=!0;var Vf=Pp;function Tp(t,e,n,i){let s=aw(i);switch(n){case cp:return t*e;case Yh:return t*e/s.components*s.byteLength;case qh:return t*e/s.components*s.byteLength;case rr:return t*e*2/s.components*s.byteLength;case $h:return t*e*2/s.components*s.byteLength;case hp:return t*e*3/s.components*s.byteLength;case gi:return t*e*4/s.components*s.byteLength;case Kh:return t*e*4/s.components*s.byteLength;case Al:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:case Qh:return Math.max(t,16)*Math.max(e,8)/4;case Zh:case Jh:return Math.max(t,8)*Math.max(e,8)/2;case eu:case tu:case iu:case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nu:case Il:case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case du:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case fu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bu:case _u:case Mu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wu:case Su:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ll:case Tu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aw(t){switch(t){case mi:case rp:return{byteLength:1,components:1};case jo:case op:case Hi:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case zi:case Vh:case Ai:return{byteLength:4,components:1};case ap:case lp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Cv(){let t=null,e=!1,n=null,i=null;function s(r,o){i=t.requestAnimationFrame(s),n(r,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function dw(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pw=`#ifdef USE_ALPHAHASH
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
#endif`,mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yw=`#ifdef USE_AOMAP
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
#endif`,bw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_w=`#ifdef USE_BATCHING
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
#endif`,Mw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ww=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ew=`#ifdef USE_IRIDESCENCE
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
#endif`,Aw=`#ifdef USE_BUMPMAP
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
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ow=`#define PI 3.141592653589793
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
} // validated`,Fw=`vec3 transformedNormal = objectNormal;
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
#endif`,Uw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ww=`#ifdef USE_ENVMAP
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
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
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
#endif`,qw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
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
#endif`,Kw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qw=`#ifdef USE_GRADIENTMAP
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
}`,eS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sS=`#ifdef USE_ENVMAP
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cS=`PhysicalMaterial material;
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
#endif`,hS=`uniform sampler2D dfgLUT;
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
}`,uS=`
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MS=`#if defined( USE_POINTS_UV )
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
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
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
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NS=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,US=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jS=`float getShadowMask() {
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
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform float backgroundBlurriness;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
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
}`,yT=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,TT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,AT=`uniform vec3 diffuse;
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
}`,RT=`#define LAMBERT
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
}`,CT=`#define LAMBERT
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
}`,PT=`#define MATCAP
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
}`,IT=`#define MATCAP
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
}`,LT=`#define NORMAL
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
}`,kT=`#define NORMAL
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
}`,DT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,OT=`#define STANDARD
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
}`,FT=`#define STANDARD
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
}`,UT=`#define TOON
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
}`,BT=`#define TOON
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
}`,zT=`uniform float size;
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
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
}`,VT=`uniform vec3 color;
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
}`,WT=`uniform float rotation;
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
}`,XT=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:fw,alphahash_pars_fragment:pw,alphamap_fragment:mw,alphamap_pars_fragment:gw,alphatest_fragment:vw,alphatest_pars_fragment:xw,aomap_fragment:yw,aomap_pars_fragment:bw,batching_pars_vertex:_w,batching_vertex:Mw,begin_vertex:ww,beginnormal_vertex:Sw,bsdfs:Tw,iridescence_fragment:Ew,bumpmap_pars_fragment:Aw,clipping_planes_fragment:Rw,clipping_planes_pars_fragment:Cw,clipping_planes_pars_vertex:Pw,clipping_planes_vertex:Iw,color_fragment:Lw,color_pars_fragment:kw,color_pars_vertex:Dw,color_vertex:Nw,common:Ow,defaultnormal_vertex:Fw,displacementmap_pars_vertex:Uw,displacementmap_vertex:Bw,emissivemap_fragment:zw,emissivemap_pars_fragment:Hw,colorspace_fragment:Gw,colorspace_pars_fragment:Vw,envmap_fragment:Ww,envmap_common_pars_fragment:Xw,envmap_pars_fragment:Yw,envmap_pars_vertex:qw,envmap_physical_pars_fragment:sS,envmap_vertex:$w,fog_vertex:Kw,fog_pars_vertex:Zw,fog_fragment:jw,fog_pars_fragment:Jw,gradientmap_pars_fragment:Qw,lightmap_pars_fragment:eS,lights_lambert_fragment:tS,lights_lambert_pars_fragment:nS,lights_pars_begin:iS,lights_toon_fragment:rS,lights_toon_pars_fragment:oS,lights_phong_fragment:aS,lights_phong_pars_fragment:lS,lights_physical_fragment:cS,lights_physical_pars_fragment:hS,lights_fragment_begin:uS,lights_fragment_maps:dS,lights_fragment_end:fS,lightprobes_pars_fragment:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:xS,map_fragment:yS,map_pars_fragment:bS,map_particle_fragment:_S,map_particle_pars_fragment:MS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:SS,morphinstance_vertex:TS,morphcolor_vertex:ES,morphnormal_vertex:AS,morphtarget_pars_vertex:RS,morphtarget_vertex:CS,normal_fragment_begin:PS,normal_fragment_maps:IS,normal_pars_fragment:LS,normal_pars_vertex:kS,normal_vertex:DS,normalmap_pars_fragment:NS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:US,iridescence_pars_fragment:BS,opaque_fragment:zS,packing:HS,premultiplied_alpha_fragment:GS,project_vertex:VS,dithering_fragment:WS,dithering_pars_fragment:XS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:KS,shadowmap_vertex:ZS,shadowmask_pars_fragment:jS,skinbase_vertex:JS,skinning_pars_vertex:QS,skinning_vertex:eT,skinnormal_vertex:tT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:sT,tonemapping_pars_fragment:rT,transmission_fragment:oT,transmission_pars_fragment:aT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:hT,worldpos_vertex:uT,background_vert:dT,background_frag:fT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:vT,depth_vert:xT,depth_frag:yT,distance_vert:bT,distance_frag:_T,equirect_vert:MT,equirect_frag:wT,linedashed_vert:ST,linedashed_frag:TT,meshbasic_vert:ET,meshbasic_frag:AT,meshlambert_vert:RT,meshlambert_frag:CT,meshmatcap_vert:PT,meshmatcap_frag:IT,meshnormal_vert:LT,meshnormal_frag:kT,meshphong_vert:DT,meshphong_frag:NT,meshphysical_vert:OT,meshphysical_frag:FT,meshtoon_vert:UT,meshtoon_frag:BT,points_vert:zT,points_frag:HT,shadow_vert:GT,shadow_frag:VT,sprite_vert:WT,sprite_frag:XT},je={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ss={basic:{uniforms:Yn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Yn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Yn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Yn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Yn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Je(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Yn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Yn([je.points,je.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Yn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Yn([je.common,je.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Yn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Yn([je.sprite,je.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Yn([je.common,je.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Yn([je.lights,je.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ss.physical={uniforms:Yn([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Ru={r:0,b:0,g:0},YT=new Et,Pv=new yt;Pv.set(-1,0,0,0,1,0,0,0,1);function qT(t,e,n,i,s,r){let o=new Je(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let M=v.backgroundBlurriness>0;_=e.get(_,M)}return _}function m(v){let _=!1,M=f(v);M===null?g(o,a):M&&M.isColor&&(g(M,1),_=!0);let S=t.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(v,_){let M=f(_);M&&M.isCubeTexture?(c===void 0&&(c=new at(new gt(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:$r(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pv),c.material.toneMapped=kt.getTransfer(M.colorSpace)!==Gt,(h!==M||d!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new at(new ts(2,2),new Xn({name:"BackgroundMaterial",uniforms:$r(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=kt.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,_){v.getRGB(Ru,Mp(t)),n.buffers.color.setClear(Ru.r,Ru.g,Ru.b,_,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:y,dispose:p}}function $T(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(R,w,k,P,I){let F=!1,B=d(R,P,k,w);r!==B&&(r=B,c(r.object)),F=f(R,P,k,I),F&&m(R,P,k,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(R,w,k,P),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function h(R){return t.deleteVertexArray(R)}function d(R,w,k,P){let I=P.wireframe===!0,F=i[w.id];F===void 0&&(F={},i[w.id]=F);let B=R.isInstancedMesh===!0?R.id:0,$=F[B];$===void 0&&($={},F[B]=$);let X=$[k.id];X===void 0&&(X={},$[k.id]=X);let j=X[I];return j===void 0&&(j=u(l()),X[I]=j),j}function u(R){let w=[],k=[],P=[];for(let I=0;I<n;I++)w[I]=0,k[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:P,object:R,attributes:{},index:null}}function f(R,w,k,P){let I=r.attributes,F=w.attributes,B=0,$=k.getAttributes();for(let X in $)if($[X].location>=0){let W=I[X],ee=F[X];if(ee===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),W===void 0||W.attribute!==ee||ee&&W.data!==ee.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function m(R,w,k,P){let I={},F=w.attributes,B=0,$=k.getAttributes();for(let X in $)if($[X].location>=0){let W=F[X];W===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));let ee={};ee.attribute=W,W&&W.data&&(ee.data=W.data),I[X]=ee,B++}r.attributes=I,r.attributesNum=B,r.index=P}function y(){let R=r.newAttributes;for(let w=0,k=R.length;w<k;w++)R[w]=0}function g(R){p(R,0)}function p(R,w){let k=r.newAttributes,P=r.enabledAttributes,I=r.attributeDivisors;k[R]=1,P[R]===0&&(t.enableVertexAttribArray(R),P[R]=1),I[R]!==w&&(t.vertexAttribDivisor(R,w),I[R]=w)}function v(){let R=r.newAttributes,w=r.enabledAttributes;for(let k=0,P=w.length;k<P;k++)w[k]!==R[k]&&(t.disableVertexAttribArray(k),w[k]=0)}function _(R,w,k,P,I,F,B){B===!0?t.vertexAttribIPointer(R,w,k,I,F):t.vertexAttribPointer(R,w,k,P,I,F)}function M(R,w,k,P){y();let I=P.attributes,F=k.getAttributes(),B=w.defaultAttributeValues;for(let $ in F){let X=F[$];if(X.location>=0){let j=I[$];if(j===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){let W=j.normalized,ee=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;let Q=Ee.buffer,re=Ee.type,_e=Ee.bytesPerElement,Oe=re===t.INT||re===t.UNSIGNED_INT||j.gpuType===Vh;if(j.isInterleavedBufferAttribute){let ie=j.data,Ce=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,He=j.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Ue=0;Ue<X.locationSize;Ue++)p(X.location+Ue,ie.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)g(X.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let Ue=0;Ue<X.locationSize;Ue++)_(X.location+Ue,ee/X.locationSize,re,W,Ce*_e,(He+ee/X.locationSize*Ue)*_e,Oe)}else{if(j.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)p(X.location+ie,j.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<X.locationSize;ie++)g(X.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let ie=0;ie<X.locationSize;ie++)_(X.location+ie,ee/X.locationSize,re,W,ee*_e,ee/X.locationSize*ie*_e,Oe)}}else if(B!==void 0){let W=B[$];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(X.location,W);break;case 3:t.vertexAttrib3fv(X.location,W);break;case 4:t.vertexAttrib4fv(X.location,W);break;default:t.vertexAttrib1fv(X.location,W)}}}}v()}function S(){C();for(let R in i){let w=i[R];for(let k in w){let P=w[k];for(let I in P){let F=P[I];for(let B in F)h(F[B].object),delete F[B];delete P[I]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let w=i[R.id];for(let k in w){let P=w[k];for(let I in P){let F=P[I];for(let B in F)h(F[B].object),delete F[B];delete P[I]}}delete i[R.id]}function x(R){for(let w in i){let k=i[w];for(let P in k){let I=k[P];if(I[R.id]===void 0)continue;let F=I[R.id];for(let B in F)h(F[B].object),delete F[B];delete I[R.id]}}}function b(R){for(let w in i){let k=i[w],P=R.isInstancedMesh===!0?R.id:0,I=k[P];if(I!==void 0){for(let F in I){let B=I[F];for(let $ in B)h(B[$].object),delete B[$];delete I[F]}delete k[P],Object.keys(k).length===0&&delete i[w]}}}function C(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function KT(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ZT(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==gi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==mi&&x!==Ai&&!b&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,maxSamples:S,samples:T}}function jT(t){let e=this,n=null,i=0,s=!1,r=!1,o=new Bi,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,_=v*4,M=p.clippingState||null;l.value=M,M=h(m,u,_,f);for(let S=0;S!==_;++S)M[S]=n[S];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,M=f;_!==y;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Nl=class extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Wr});r.uniforms.tEquirect.value=n;let o=new at(s,r),a=n.minFilter;return n.minFilter===Ls&&(n.minFilter=Ln),new qo(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},lv=256,JT=3,QT=20,Iv=256,Lv=16,eE=3,tE=new G,nE=new Je,Pu=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qo(1,10,null),this._boxMesh=new at(new gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=tE}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(nE));let g=new qo(i,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,e.background=y,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(lv,xp(e))}_fromTexture(e,n){e.mapping===Yr||e.mapping===Zo?this._setSize(e.image.length===0?lv:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=cv(e,!1,!1),i=Math.log2(e)-JT;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=cv(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let o=e.width>>n;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Yr||e.mapping===Zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hv()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iE(),this._integrationMaterial=sE());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/Lv);for(let o=0;o<=i;o++){let a=t.lodToRoughness(o,i);if(o>i-eE)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(n)+.5*Math.log2(6/(Iv*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=rE());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function cv(t,e,n){return new Nl(t,{minFilter:Ls,generateMipmaps:e,type:Hi,colorSpace:Xa,depthBuffer:n})}function Ol(t,e,n){return new Xn({name:t,uniforms:e,vertexShader:At.cube_vert,fragmentShader:n,side:wn,blending:Wr,depthTest:!1,depthWrite:!1})}function iE(){return Ol("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Iv}u

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
	`)}function sE(){return Ol("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lv}},`

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
	`)}function rE(){return Ol("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${QT}
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
	`)}function hv(){return Ol("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function uv(){return Ol("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function oE(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===zh||f===Hh)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Nl(m.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===zh||f===Hh,y=f===Yr||f===Zo;if(m||y){let g=n.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Pu(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new Pu(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===zh?u.mapping=Yr:f===Hh&&(u.mapping=Zo),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=n.get(f);m!==void 0&&(n.delete(f),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function aE(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ba("WebGLRenderer: "+i+" extension not supported."),s}}}function lE(t,e,n,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),n.memory.geometries++),y}function h(m){let y=m.attributes;for(let g in y)e.update(y[g],t.ARRAY_BUFFER)}function d(m){let y=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=y!==null?y.array.length:g.array.length/3-1,_=g.count>=65535?Qa:Ja,M=new _(Math.ceil(v/3)*6,1),S=M.array;if(y!==null){let x=y.array;p=y.version;for(let b=0,C=0;b<v;b+=3){let L=x[b+0],R=x[b+1],w=x[b+2];S[C++]=L,S[C++]=R,S[C++]=R,S[C++]=w,S[C++]=w,S[C++]=L}}else{p=g.version;for(let x=0,b=0;x<v;x+=3){let C=x+0,L=x+1,R=x+2;S[b++]=C,S[b++]=L,S[b++]=L,S[b++]=R,S[b++]=R,S[b++]=C}}M.version=p;let T=r.get(m);T&&e.remove(T),r.set(m,M)}function u(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function cE(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];n.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hE(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function uE(t,e,n){let i=new WeakMap,s=new on;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),y===!0&&(_=3);let M=a.attributes.position.count*_,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*S*4*d),x=new Za(T,M,S,d);x.type=Ai,x.needsUpdate=!0;let b=_*4;for(let L=0;L<d;L++){let R=g[L],w=p[L],k=v[L],P=M*S*4*L;for(let I=0;I<R.count;I++){let F=I*b;f===!0&&(s.fromBufferAttribute(R,I),T[P+F+0]=s.x,T[P+F+1]=s.y,T[P+F+2]=s.z,T[P+F+3]=0),m===!0&&(s.fromBufferAttribute(w,I),T[P+F+4]=s.x,T[P+F+5]=s.y,T[P+F+6]=s.z,T[P+F+7]=0),y===!0&&(s.fromBufferAttribute(k,I),T[P+F+8]=s.x,T[P+F+9]=s.y,T[P+F+10]=s.z,T[P+F+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Ge(M,S)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function dE(t,e,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var fE={[jf]:"LINEAR_TONE_MAPPING",[Jf]:"REINHARD_TONE_MAPPING",[Qf]:"CINEON_TONE_MAPPING",[ep]:"ACES_FILMIC_TONE_MAPPING",[np]:"AGX_TONE_MAPPING",[ip]:"NEUTRAL_TONE_MAPPING",[tp]:"CUSTOM_TONE_MAPPING"};function pE(t,e,n,i,s,r){let o=new fi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Bt;h.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _t([0,2,0,0,2,0],2));let d=new Sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(h,d),f=new Fh(-1,1,1,-1,0,1),m=null,y=null,g=!1,p,v=null,_=[],M=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let x=0;x<_.length;x++){let b=_[x];b.setSize&&b.setSize(S,T)}},this.setEffects=function(S){_=S,M=_.length>0&&_[0].isRenderPass===!0;let T=o.width,x=o.height;_.length>0&&a===null&&(a=new fi(T,x,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(T,x,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&_.some(C=>C.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Is(T,x),r===!0&&(c.format=ks,c.type=qr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let C=0;C<_.length;C++){let L=_[C];L.setSize&&L.setSize(T,x),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(S,T){if(g||S.toneMapping===ns&&_.length===0)return!1;if(v=T,T!==null){let x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return M===!1&&S.setRenderTarget(o),p=S.toneMapping,S.toneMapping=ns,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=p,g=!0;let x=o,b=a;for(let C=0;C<_.length;C++){let L=_[C];L.enabled!==!1&&(L.render(S,b,x,T),L.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==S.outputColorSpace||y!==S.toneMapping){m=S.outputColorSpace,y=S.toneMapping,d.defines={},kt.getTransfer(m)===Gt&&(d.defines.SRGB_TRANSFER="");let C=fE[y];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var kv=new Jn,Dv=new Is(1,1),Nv=new ol(1),Ov=new Za,Fv=new ph,Uv=new rl,dv=[],fv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function ea(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=dv[s];if(r===void 0&&(r=new Float32Array(s),dv[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lu(t,e){let n=fv[e];n===void 0&&(n=new Int32Array(e),fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2fv(this.addr,e),Tn(n,e)}}function vE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Sn(n,e))return;t.uniform3fv(this.addr,e),Tn(n,e)}}function xE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4fv(this.addr,e),Tn(n,e)}}function yE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(Sn(n,i))return;gv.set(i),t.uniformMatrix2fv(this.addr,!1,gv),Tn(n,i)}}function bE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(Sn(n,i))return;mv.set(i),t.uniformMatrix3fv(this.addr,!1,mv),Tn(n,i)}}function _E(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(Sn(n,i))return;pv.set(i),t.uniformMatrix4fv(this.addr,!1,pv),Tn(n,i)}}function ME(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2iv(this.addr,e),Tn(n,e)}}function SE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;t.uniform3iv(this.addr,e),Tn(n,e)}}function TE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4iv(this.addr,e),Tn(n,e)}}function EE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;t.uniform2uiv(this.addr,e),Tn(n,e)}}function RE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;t.uniform3uiv(this.addr,e),Tn(n,e)}}function CE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;t.uniform4uiv(this.addr,e),Tn(n,e)}}function ku(t){return t.version===0&&(t.compareFunction=pp,t.needsUpdate=!0),t}function PE(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=ku(Dv):r=kv,n.setTexture2D(e||r,s)}function IE(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Fv,s)}function LE(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=ku(Nv):r=Uv,n.setTextureCube(e||r,s)}function kE(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Ov,s)}function DE(t){switch(t){case 5126:return mE;case 35664:return gE;case 35665:return vE;case 35666:return xE;case 35674:return yE;case 35675:return bE;case 35676:return _E;case 5124:case 35670:return ME;case 35667:case 35671:return wE;case 35668:case 35672:return SE;case 35669:case 35673:return TE;case 5125:return EE;case 36294:return AE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return kE}}function NE(t,e){t.uniform1fv(this.addr,e)}function OE(t,e){let n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function FE(t,e){let n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function UE(t,e){let n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function BE(t,e){let n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zE(t,e){let n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HE(t,e){let n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GE(t,e){t.uniform1iv(this.addr,e)}function VE(t,e){t.uniform2iv(this.addr,e)}function WE(t,e){t.uniform3iv(this.addr,e)}function XE(t,e){t.uniform4iv(this.addr,e)}function YE(t,e){t.uniform1uiv(this.addr,e)}function qE(t,e){t.uniform2uiv(this.addr,e)}function $E(t,e){t.uniform3uiv(this.addr,e)}function KE(t,e){t.uniform4uiv(this.addr,e)}function ZE(t,e,n){let i=this.cache,s=e.length,r=Lu(n,s);Sn(i,r)||(t.uniform1iv(this.addr,r),Tn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=ku(Dv):o=kv;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function jE(t,e,n){let i=this.cache,s=e.length,r=Lu(n,s);Sn(i,r)||(t.uniform1iv(this.addr,r),Tn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Fv,r[o])}function JE(t,e,n){let i=this.cache,s=e.length,r=Lu(n,s);Sn(i,r)||(t.uniform1iv(this.addr,r),Tn(i,r));let o;this.type===t.SAMPLER_CUBE_SHADOW?o=ku(Nv):o=Uv;for(let a=0;a!==s;++a)n.setTextureCube(e[a]||o,r[a])}function QE(t,e,n){let i=this.cache,s=e.length,r=Lu(n,s);Sn(i,r)||(t.uniform1iv(this.addr,r),Tn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Ov,r[o])}function e2(t){switch(t){case 5126:return NE;case 35664:return OE;case 35665:return FE;case 35666:return UE;case 35674:return BE;case 35675:return zE;case 35676:return HE;case 5124:case 35670:return GE;case 35667:case 35671:return VE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return YE;case 36294:return qE;case 36295:return $E;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}var kp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=DE(n.type)}},Dp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=e2(n.type)}},Np=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},Ip=/(\w+)(\])?(\[|\.)?/g;function vv(t,e){t.seq.push(e),t.map[e.id]=e}function t2(t,e,n){let i=t.name,s=i.length;for(Ip.lastIndex=0;;){let r=Ip.exec(i),o=Ip.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vv(n,c===void 0?new kp(a,t,e):new Dp(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Np(a),vv(n,d)),n=d}}}var Qo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);t2(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function xv(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var n2=37297,i2=0;function s2(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var yv=new yt;function r2(t){kt._getMatrix(yv,kt.workingColorSpace,t);let e=`mat3( ${yv.elements.map(n=>n.toFixed(4))} )`;switch(kt.getTransfer(t)){case Ya:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bv(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+s2(t.getShaderSource(e),a)}else return r}function o2(t,e){let n=r2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var a2={[jf]:"Linear",[Jf]:"Reinhard",[Qf]:"Cineon",[ep]:"ACESFilmic",[np]:"AgX",[ip]:"Neutral",[tp]:"Custom"};function l2(t,e){let n=a2[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Cu=new G;function c2(){kt.getLuminanceCoefficients(Cu);let t=Cu.x.toFixed(4),e=Cu.y.toFixed(4),n=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function u2(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function d2(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Dl(t){return t!==""}function _v(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Mv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(t){return t.replace(f2,p2)}function p2(t,e){let n=At[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Op(n)}var m2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wv(t){return t.replace(m2,g2)}function g2(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var v2={[Tl]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function x2(t){return v2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var y2={[Zo]:"ENVMAP_MODE_REFRACTION"};function b2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":y2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _2={[Zf]:"ENVMAP_BLENDING_MULTIPLY",[Ug]:"ENVMAP_BLENDING_MIX",[Bg]:"ENVMAP_BLENDING_ADD"};function M2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_2[t.combine]||"ENVMAP_BLENDING_NONE"}function w2(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=x2(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=b2(n),d=M2(n),u=h2(n),f=u2(r),m=s.createProgram(),y,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Dl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Dl).join(`
`),g.length>0&&(g+=`
`)):(y=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),g=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ns?"#define TONE_MAPPING":"",n.toneMapping!==ns?At.tonemapping_pars_fragment:"",n.toneMapping!==ns?l2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,o2("linearToOutputTexel",n.outputColorSpace),c2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),o=Op(o),o=_v(o,n),o=Mv(o,n),a=Op(a),a=_v(a,n),a=Mv(a,n),o=wv(o),a=wv(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+y+o,_=p+g+a,M=xv(s,s.VERTEX_SHADER,v),S=xv(s,s.FRAGMENT_SHADER,_);s.attachShader(m,M),s.attachShader(m,S),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(L){if(t.debug.checkShaderErrors){let R=s.getProgramInfoLog(m)||"",w=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(S)||"",P=R.trim(),I=w.trim(),F=k.trim(),B=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,M,S);else{let X=bv(s,M,"vertex"),j=bv(s,S,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+X+`
`+j)}else P!==""?ft("WebGLProgram: Program Info Log:",P):(I===""||F==="")&&($=!1);$&&(L.diagnostics={runnable:B,programLog:P,vertexShader:{log:I,prefix:y},fragmentShader:{log:F,prefix:g}})}s.deleteShader(M),s.deleteShader(S),x=new Qo(s,m),b=d2(s,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,n2)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=i2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}var S2=0,Fp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Up(e),n.set(e,i)),i}},Up=class{constructor(e){this.id=S2++,this.code=e,this.usedTimes=0}};function T2(t){return t===rr||t===Il||t===Ll}function E2(t,e,n,i,s,r){let o=new ja,a=new Fp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,C,L,R,w){let k=L.fog,P=R.geometry,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||I,F),$=u[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&ft("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=j!==void 0?j.length:0,ee=0;P.morphAttributes.position!==void 0&&(ee=1),P.morphAttributes.normal!==void 0&&(ee=2),P.morphAttributes.color!==void 0&&(ee=3);let Ee,Q,re,_e;if($){let Fe=ss[$];Ee=Fe.vertexShader,Q=Fe.fragmentShader}else{Ee=x.vertexShader,Q=x.fragmentShader;let Fe=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,Fe,ct),re=Fe.id,_e=ct.id}let Oe=t.getRenderTarget(),ie=t.state.buffers.depth.getReversed(),Ce=R.isInstancedMesh===!0,He=R.isBatchedMesh===!0,Ue=!!x.map,qe=!!x.matcap,Ke=!!B,ge=Ke&&B.isPMREMTexture===!0,Pe=!!x.aoMap,ye=!!x.lightMap,fe=!!x.bumpMap&&x.wireframe===!1,Ae=!!x.normalMap,Z=!!x.displacementMap,de=!!x.emissiveMap,pe=!!x.metalnessMap,De=!!x.roughnessMap,Ne=x.anisotropy>0,q=x.clearcoat>0,we=x.diffuseRoughness>0,Ve=x.dispersion>0,Te=x.retroreflectivity>0,O=x.iridescence>0,K=x.sheen>0,J=x.transmission>0,Me=Ne&&!!x.anisotropyMap,D=q&&!!x.clearcoatMap,E=q&&!!x.clearcoatNormalMap,V=q&&!!x.clearcoatRoughnessMap,oe=we&&!!x.diffuseRoughnessMap,ne=O&&!!x.iridescenceMap,ve=O&&!!x.iridescenceThicknessMap,Re=K&&!!x.sheenColorMap,se=K&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Le=!!x.specularColorMap,Y=!!x.specularIntensityMap,ue=J&&!!x.transmissionMap,ce=J&&!!x.thicknessMap,ke=!!x.gradientMap,Ie=!!x.alphaMap,Se=x.alphaTest>0,We=!!x.alphaHash,st=!!x.extensions,be=ns;x.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(be=t.toneMapping);let ze=ge?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,$e={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:Q,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:He,batchingColor:He&&R._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&R.instanceColor!==null,instancingMorph:Ce&&R.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:qe,envMap:Ke,envMapMode:Ke&&B.mapping,envMapPMREM:ge,envMapMaxLod:ge?ze.length-1:null,envMapSize:ge?ze[0].width:null,aoMap:Pe,lightMap:ye,bumpMap:fe,normalMap:Ae,displacementMap:Z,emissiveMap:de,normalMapObjectSpace:Ae&&x.normalMapType===Gg,normalMapTangentSpace:Ae&&x.normalMapType===up,packedNormalMap:Ae&&x.normalMapType===up&&T2(x.normalMap.format),metalnessMap:pe,roughnessMap:De,anisotropy:Ne,anisotropyMap:Me,clearcoat:q,clearcoatMap:D,clearcoatNormalMap:E,clearcoatRoughnessMap:V,diffuseRoughness:we,diffuseRoughnessMap:oe,dispersion:Ve,retroreflection:Te,iridescence:O,iridescenceMap:ne,iridescenceThicknessMap:ve,sheen:K,sheenColorMap:Re,sheenRoughnessMap:se,specularMap:ae,specularColorMap:Le,specularIntensityMap:Y,transmission:J,transmissionMap:ue,thicknessMap:ce,gradientMap:ke,opaque:x.transparent===!1&&x.blending===Ko&&x.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Se,alphaHash:We,combine:x.combine,mapUv:Ue&&f(x.map.channel),aoMapUv:Pe&&f(x.aoMap.channel),lightMapUv:ye&&f(x.lightMap.channel),bumpMapUv:fe&&f(x.bumpMap.channel),normalMapUv:Ae&&f(x.normalMap.channel),displacementMapUv:Z&&f(x.displacementMap.channel),emissiveMapUv:de&&f(x.emissiveMap.channel),metalnessMapUv:pe&&f(x.metalnessMap.channel),roughnessMapUv:De&&f(x.roughnessMap.channel),anisotropyMapUv:Me&&f(x.anisotropyMap.channel),clearcoatMapUv:D&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(x.sheenRoughnessMap.channel),specularMapUv:ae&&f(x.specularMap.channel),specularColorMapUv:Le&&f(x.specularColorMap.channel),specularIntensityMapUv:Y&&f(x.specularIntensityMap.channel),transmissionMapUv:ue&&f(x.transmissionMap.channel),thicknessMapUv:ce&&f(x.thicknessMap.channel),alphaMapUv:Ie&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ae||Ne),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Ue||Ie),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:w.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:be,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===Gt,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&kt.getTransfer(x.emissiveMap.colorSpace)===Gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(b,x),p(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=u[x.type],C;if(b){let L=ss[b];C=rv.clone(L.uniforms)}else C=x.uniforms;return C}function _(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new w2(t,b,x,s),c.push(C),h.set(b,C)),C}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:v,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:T}}function A2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function R2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Tv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ev(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,y,g,p){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},t[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,f,m,y,g,p,v){v.reversedDepth===!0&&(g=-g);let _=a(u,f,m,y,g,p);m.transmission>0?i.push(_):m.transparent===!0?s.push(_):n.push(_)}function c(u,f,m,y,g,p){let v=a(u,f,m,y,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):n.unshift(v)}function h(u,f){n.length>1&&n.sort(u||R2),i.length>1&&i.sort(f||Tv),s.length>1&&s.sort(f||Tv)}function d(){for(let u=e,f=t.length;u<f;u++){let m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function C2(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new Ev,t.set(i,[o])):s>=r.length?(o=new Ev,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function P2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new Je};break;case"SpotLight":n={position:new G,direction:new G,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function I2(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var L2=0;function k2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function D2(t){let e=new P2,n=I2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new Et,o=new Et;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,v=0,_=0,M=0,S=0,T=0,x=0,b=0,C=0,L=0;c.sort(k2);for(let w=0,k=c.length;w<k;w++){let P=c[w],I=P.color,F=P.intensity,B=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rr?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*F,d+=I.g*F,u+=I.b*F;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],F);L++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,W=n.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=W,i.sunShadowMap[m]=$;let ee=j.getViewportCount();for(let Ee=0;Ee<ee;Ee++)i.sunShadowMatrix[y+Ee]=j.getMatrix(Ee),i.sunShadowCascade[y+Ee]=j._cascadeData[Ee];y+=ee,m++}i.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,W=n.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[g]=W,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=X,g++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(I).multiplyScalar(F),X.distance=B,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;let j=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[v]=j.matrix,P.castShadow){let W=n.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=$,x++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(I).multiplyScalar(F),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=X,_++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,W=n.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(F),X.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[M]=X,M++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let R=i.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==_||R.hemiLength!==M||R.numSunShadows!==m||R.numDirectionalShadows!==S||R.numPointShadows!==T||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=_,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,R.sunLength=f,R.directionalLength=g,R.pointLength=p,R.spotLength=v,R.rectAreaLength=_,R.hemiLength=M,R.numSunShadows=m,R.numDirectionalShadows=S,R.numPointShadows=T,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=L,i.version=L2++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let M=c[v];if(M.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(M.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Av(t){let e=new D2(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):n.push(d)}function a(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function N2(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Av(t),e.set(s,[a])):r>=o.length?(a=new Av(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
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
}`,U2=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],B2=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Rv=new Et,kl=new G,Lp=new G;function z2(t,e,n){let i=new Ur,s=new Ge,r=new Ge,o=new on,a=new Th,l=new Eh,c={},h=n.maxTextureSize,d={[sr]:wn,[wn]:sr,[kn]:kn},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:O2,fragmentShader:F2}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Bt;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new at(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(T,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===yg&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tl);let C=t.getRenderTarget(),L=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),w=t.state;w.setBlending(Wr),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let k=p!==this.type;k&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(I=>I.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,I=T.length;P<I;P++){let F=T[P],B=F.shadow;if(B===void 0){ft("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let $=B.getFrameExtents();s.multiply($),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,B.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===$o){if(F.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new fi(s.x,s.y,{format:rr,type:Hi,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Is(s.x,s.y,Ai),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Ps,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In}else F.isPointLight?(B.map=new Nl(s.x),B.map.depthTexture=new ol(s.x,zi)):(B.map=new fi(s.x,s.y),B.map.depthTexture=new Is(s.x,s.y,zi)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Ps,this.type===Tl?(B.map.depthTexture.compareFunction=X?fp:dp,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();F.isPointLight!==!0&&B.updateMatrices(F,b);let W=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let ee=0;ee<j;ee++){let Ee=B.getCamera(ee);if(F.isPointLight){let Q=B.camera,re=B.matrix,_e=F.distance||Q.far;_e!==Q.far&&(Q.far=_e,Q.updateProjectionMatrix()),kl.setFromMatrixPosition(F.matrixWorld),Q.position.copy(kl),Lp.copy(Q.position),Lp.add(U2[ee]),Q.up.copy(B2[ee]),Q.lookAt(Lp),Q.updateMatrixWorld(),re.makeTranslation(-kl.x,-kl.y,-kl.z),Rv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Rv,Q.coordinateSystem,Q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(B.map),t.clear());let Q=B.getViewport(ee);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),w.viewport(o)}i=B.getFrustum(ee),M(x,b,Ee,F,W,this.type)}B.isPointLightShadow!==!0&&this.type===$o&&v(B,b),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(C,L,R)};function v(T,x){let b=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new fi(s.x,s.y,{format:rr,type:Hi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(x,null,b,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(x,null,b,f,y,null)}function _(T,x,b,C){let L=null,R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)L=R;else if(L=b.isPointLight===!0?l:a,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let w=L.uuid,k=x.uuid,P=c[w];P===void 0&&(P={},c[w]=P);let I=P[k];I===void 0&&(I=L.clone(),P[k]=I,x.addEventListener("dispose",S)),L=I}if(L.visible=x.visible,L.wireframe=x.wireframe,C===$o?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:d[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let w=t.properties.get(L);w.light=b}return L}function M(T,x,b,C,L,R){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===$o)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=e.update(T),I=T.material;if(Array.isArray(I)){let F=P.groups;for(let B=0,$=F.length;B<$;B++){let X=F[B],j=I[X.materialIndex];if(j&&j.visible){let W=_(T,j,C,R);T.onBeforeShadow(t,T,x,b,P,W,X),t.renderBufferDirect(b,null,P,W,T,X),T.onAfterShadow(t,T,x,b,P,W,X)}}}else if(I.visible){let F=_(T,I,C,R);T.onBeforeShadow(t,T,x,b,P,F,null),t.renderBufferDirect(b,null,P,F,T,null),T.onAfterShadow(t,T,x,b,P,F,null)}}let k=T.children;for(let P=0,I=k.length;P<I;P++)M(k[P],x,b,C,L,R)}function S(T){T.target.removeEventListener("dispose",S);for(let b in c){let C=c[b],L=T.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function H2(t,e){function n(){let Y=!1,ue=new on,ce=null,ke=new on(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!Y&&(t.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){Y=Ie},setClear:function(Ie,Se,We,st,be){be===!0&&(Ie*=st,Se*=st,We*=st),ue.set(Ie,Se,We,st),ke.equals(ue)===!1&&(t.clearColor(Ie,Se,We,st),ke.copy(ue))},reset:function(){Y=!1,ce=null,ke.set(-1,0,0,0)}}}function i(){let Y=!1,ue=!1,ce=null,ke=null,Ie=null;return{setReversed:function(Se){if(ue!==Se){let We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ue=Se;let st=Ie;Ie=null,this.setClear(st)}},getReversed:function(){return ue},setTest:function(Se){Se?ie(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Se){ce!==Se&&!Y&&(t.depthMask(Se),ce=Se)},setFunc:function(Se){if(ue&&(Se=Jg[Se]),ke!==Se){switch(Se){case nh:t.depthFunc(t.NEVER);break;case ih:t.depthFunc(t.ALWAYS);break;case sh:t.depthFunc(t.LESS);break;case ko:t.depthFunc(t.LEQUAL);break;case rh:t.depthFunc(t.EQUAL);break;case oh:t.depthFunc(t.GEQUAL);break;case ah:t.depthFunc(t.GREATER);break;case lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=Se}},setLocked:function(Se){Y=Se},setClear:function(Se){Ie!==Se&&(Ie=Se,ue&&(Se=1-Se),t.clearDepth(Se))},reset:function(){Y=!1,ce=null,ke=null,Ie=null,ue=!1}}}function s(){let Y=!1,ue=null,ce=null,ke=null,Ie=null,Se=null,We=null,st=null,be=null;return{setTest:function(ze){Y||(ze?ie(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(ze){ue!==ze&&!Y&&(t.stencilMask(ze),ue=ze)},setFunc:function(ze,$e,Fe){(ce!==ze||ke!==$e||Ie!==Fe)&&(t.stencilFunc(ze,$e,Fe),ce=ze,ke=$e,Ie=Fe)},setOp:function(ze,$e,Fe){(Se!==ze||We!==$e||st!==Fe)&&(t.stencilOp(ze,$e,Fe),Se=ze,We=$e,st=Fe)},setLocked:function(ze){Y=ze},setClear:function(ze){be!==ze&&(t.clearStencil(ze),be=ze)},reset:function(){Y=!1,ue=null,ce=null,ke=null,Ie=null,Se=null,We=null,st=null,be=null}}}let r=new n,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,v=null,_=null,M=null,S=null,T=null,x=null,b=new Je(0,0,0),C=0,L=!1,R=null,w=null,k=null,P=null,I=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=$>=2);let j=null,W={},ee=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Q=new on().fromArray(ee),re=new on().fromArray(Ee);function _e(Y,ue,ce,ke){let Ie=new Uint8Array(4),Se=t.createTexture();t.bindTexture(Y,Se),t.texParameteri(Y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<ce;We++)Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(ue+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return Se}let Oe={};Oe[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(ko),fe(!1),Ae(Wf),ie(t.CULL_FACE),Pe(Wr);function ie(Y){h[Y]!==!0&&(t.enable(Y),h[Y]=!0)}function Ce(Y){h[Y]!==!1&&(t.disable(Y),h[Y]=!1)}function He(Y,ue){return u[Y]!==ue?(t.bindFramebuffer(Y,ue),u[Y]=ue,Y===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),Y===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ue(Y,ue){let ce=m,ke=!1;if(Y){ce=f.get(ue),ce===void 0&&(ce=[],f.set(ue,ce));let Ie=Y.textures;if(ce.length!==Ie.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,We=Ie.length;Se<We;Se++)ce[Se]=t.COLOR_ATTACHMENT0+Se;ce.length=Ie.length,ke=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,ke=!0);ke&&t.drawBuffers(ce)}function qe(Y){return y!==Y?(t.useProgram(Y),y=Y,!0):!1}let Ke={[Xr]:t.FUNC_ADD,[_g]:t.FUNC_SUBTRACT,[Mg]:t.FUNC_REVERSE_SUBTRACT};Ke[wg]=t.MIN,Ke[Sg]=t.MAX;let ge={[Tg]:t.ZERO,[Eg]:t.ONE,[Ag]:t.SRC_COLOR,[$f]:t.SRC_ALPHA,[kg]:t.SRC_ALPHA_SATURATE,[Ig]:t.DST_COLOR,[Cg]:t.DST_ALPHA,[Rg]:t.ONE_MINUS_SRC_COLOR,[Kf]:t.ONE_MINUS_SRC_ALPHA,[Lg]:t.ONE_MINUS_DST_COLOR,[Pg]:t.ONE_MINUS_DST_ALPHA,[Dg]:t.CONSTANT_COLOR,[Ng]:t.ONE_MINUS_CONSTANT_COLOR,[Og]:t.CONSTANT_ALPHA,[Fg]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(Y,ue,ce,ke,Ie,Se,We,st,be,ze){if(Y===Wr){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(ie(t.BLEND),g=!0),Y!==bg){if(Y!==p||ze!==L){if((v!==Xr||S!==Xr)&&(t.blendEquation(t.FUNC_ADD),v=Xr,S=Xr),ze)switch(Y){case Ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.ONE,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:mt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Yf:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qf:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",Y);break}_=null,M=null,T=null,x=null,b.set(0,0,0),C=0,p=Y,L=ze}return}Ie=Ie||ue,Se=Se||ce,We=We||ke,(ue!==v||Ie!==S)&&(t.blendEquationSeparate(Ke[ue],Ke[Ie]),v=ue,S=Ie),(ce!==_||ke!==M||Se!==T||We!==x)&&(t.blendFuncSeparate(ge[ce],ge[ke],ge[Se],ge[We]),_=ce,M=ke,T=Se,x=We),(st.equals(b)===!1||be!==C)&&(t.blendColor(st.r,st.g,st.b,be),b.copy(st),C=be),p=Y,L=!1}function ye(Y,ue){Y.side===kn?Ce(t.CULL_FACE):ie(t.CULL_FACE);let ce=Y.side===wn;ue&&(ce=!ce),fe(ce),Y.blending===Ko&&Y.transparent===!1?Pe(Wr):Pe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let ke=Y.stencilWrite;a.setTest(ke),ke&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),de(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(Y){R!==Y&&(Y?t.frontFace(t.CW):t.frontFace(t.CCW),R=Y)}function Ae(Y){Y!==vg?(ie(t.CULL_FACE),Y!==w&&(Y===Wf?t.cullFace(t.BACK):Y===xg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),w=Y}function Z(Y){Y!==k&&(B&&t.lineWidth(Y),k=Y)}function de(Y,ue,ce){Y?(ie(t.POLYGON_OFFSET_FILL),(P!==ue||I!==ce)&&(P=ue,I=ce,o.getReversed()&&(ue=-ue,ce=-ce),t.polygonOffset(ue,ce))):Ce(t.POLYGON_OFFSET_FILL)}function pe(Y){Y?ie(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function De(Y){Y===void 0&&(Y=t.TEXTURE0+F-1),j!==Y&&(t.activeTexture(Y),j=Y)}function Ne(Y,ue,ce){ce===void 0&&(j===null?ce=t.TEXTURE0+F-1:ce=j);let ke=W[ce];ke===void 0&&(ke={type:void 0,texture:void 0},W[ce]=ke),(ke.type!==Y||ke.texture!==ue)&&(j!==ce&&(t.activeTexture(ce),j=ce),t.bindTexture(Y,ue||Oe[Y]),ke.type=Y,ke.texture=ue)}function q(){let Y=W[j];Y!==void 0&&Y.type!==void 0&&(t.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function we(){try{t.compressedTexImage2D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function Ve(){try{t.compressedTexImage3D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function Te(){try{t.texSubImage2D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function O(){try{t.texSubImage3D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function Me(){try{t.texStorage2D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function D(){try{t.texStorage3D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function E(){try{t.texImage2D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function V(){try{t.texImage3D(...arguments)}catch(Y){mt("WebGLState:",Y)}}function oe(Y){return d[Y]!==void 0?d[Y]:t.getParameter(Y)}function ne(Y,ue){d[Y]!==ue&&(t.pixelStorei(Y,ue),d[Y]=ue)}function ve(Y){Q.equals(Y)===!1&&(t.scissor(Y.x,Y.y,Y.z,Y.w),Q.copy(Y))}function Re(Y){re.equals(Y)===!1&&(t.viewport(Y.x,Y.y,Y.z,Y.w),re.copy(Y))}function se(Y,ue){let ce=c.get(ue);ce===void 0&&(ce=new WeakMap,c.set(ue,ce));let ke=ce.get(Y);ke===void 0&&(ke=t.getUniformBlockIndex(ue,Y.name),t.uniformBlockBinding(ue,ke,ke),ce.set(Y,ke))}function ae(Y,ue,ce){let Ie=c.get(ue).get(Y);l[Ie]!==ce&&(t.bindBufferBase(t.UNIFORM_BUFFER,Ie,ce),l[Ie]=ce)}function Le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,W={},u={},l={},f=new WeakMap,m=[],y=null,g=!1,p=null,v=null,_=null,M=null,S=null,T=null,x=null,b=new Je(0,0,0),C=0,L=!1,R=null,w=null,k=null,P=null,I=null,Q.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Ce,bindFramebuffer:He,drawBuffers:Ue,useProgram:qe,setBlending:Pe,setMaterial:ye,setFlipSided:fe,setCullFace:Ae,setLineWidth:Z,setPolygonOffset:de,setScissorTest:pe,activeTexture:De,bindTexture:Ne,unbindTexture:q,compressedTexImage2D:we,compressedTexImage3D:Ve,texImage2D:E,texImage3D:V,pixelStorei:ne,getParameter:oe,updateUBOMapping:se,uniformBlockBinding:ae,texStorage2D:Me,texStorage3D:D,texSubImage2D:Te,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:J,scissor:ve,viewport:Re,reset:Le}}function G2(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,y=new FinalizationRegistry(D=>m.delete(D)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,E){return g?new OffscreenCanvas(D,E):$a("canvas")}function v(D,E,V){let oe=1,ne=Me(D);if((ne.width>V||ne.height>V)&&(oe=V/Math.max(ne.width,ne.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ve=Math.floor(oe*ne.width),Re=Math.floor(oe*ne.height);u===void 0&&(u=p(ve,Re));let se=E?p(ve,Re):u;return se.width=ve,se.height=Re,se.getContext("2d").drawImage(D,0,0,ve,Re),ft("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ve+"x"+Re+")."),se}else return"data"in D&&ft("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function _(D){return D.generateMipmaps}function M(D){t.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(D,E,V,oe,ne,ve=!1){if(D!==null){if(t[D]!==void 0)return t[D];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Re;oe&&(Re=e.get("EXT_texture_norm16"),Re||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=E;if(E===t.RED&&(V===t.FLOAT&&(se=t.R32F),V===t.HALF_FLOAT&&(se=t.R16F),V===t.UNSIGNED_BYTE&&(se=t.R8),V===t.UNSIGNED_SHORT&&Re&&(se=Re.R16_EXT),V===t.SHORT&&Re&&(se=Re.R16_SNORM_EXT)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(se=t.R8UI),V===t.UNSIGNED_SHORT&&(se=t.R16UI),V===t.UNSIGNED_INT&&(se=t.R32UI),V===t.BYTE&&(se=t.R8I),V===t.SHORT&&(se=t.R16I),V===t.INT&&(se=t.R32I)),E===t.RG&&(V===t.FLOAT&&(se=t.RG32F),V===t.HALF_FLOAT&&(se=t.RG16F),V===t.UNSIGNED_BYTE&&(se=t.RG8),V===t.UNSIGNED_SHORT&&Re&&(se=Re.RG16_EXT),V===t.SHORT&&Re&&(se=Re.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(se=t.RG8UI),V===t.UNSIGNED_SHORT&&(se=t.RG16UI),V===t.UNSIGNED_INT&&(se=t.RG32UI),V===t.BYTE&&(se=t.RG8I),V===t.SHORT&&(se=t.RG16I),V===t.INT&&(se=t.RG32I)),E===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(se=t.RGB8UI),V===t.UNSIGNED_SHORT&&(se=t.RGB16UI),V===t.UNSIGNED_INT&&(se=t.RGB32UI),V===t.BYTE&&(se=t.RGB8I),V===t.SHORT&&(se=t.RGB16I),V===t.INT&&(se=t.RGB32I)),E===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(se=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(se=t.RGBA16UI),V===t.UNSIGNED_INT&&(se=t.RGBA32UI),V===t.BYTE&&(se=t.RGBA8I),V===t.SHORT&&(se=t.RGBA16I),V===t.INT&&(se=t.RGBA32I)),E===t.RGB&&(V===t.UNSIGNED_SHORT&&Re&&(se=Re.RGB16_EXT),V===t.SHORT&&Re&&(se=Re.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(se=t.R11F_G11F_B10F)),E===t.RGBA){let ae=ve?Ya:kt.getTransfer(ne);V===t.FLOAT&&(se=t.RGBA32F),V===t.HALF_FLOAT&&(se=t.RGBA16F),V===t.UNSIGNED_BYTE&&(se=ae===Gt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&Re&&(se=Re.RGBA16_EXT),V===t.SHORT&&Re&&(se=Re.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(D,E){let V;return D?E===null||E===zi||E===qr?V=t.DEPTH24_STENCIL8:E===Ai?V=t.DEPTH32F_STENCIL8:E===jo&&(V=t.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===qr?V=t.DEPTH_COMPONENT24:E===Ai?V=t.DEPTH_COMPONENT32F:E===jo&&(V=t.DEPTH_COMPONENT16),V}function b(D,E){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==In&&D.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function C(D){let E=new WeakRef(D);i.get(D).__ref=E,m.add(E),y.register(D,E,E)}function L(D){let E=i.get(D).__ref;E!==void 0&&(m.delete(E),y.unregister(E))}function R(D){k(D.target)}function w(D){P(D.target)}function k(D){D.removeEventListener("dispose",R),L(D),F(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&d.delete(D)}function P(D){D.removeEventListener("dispose",w),L(D),$(D)}function I(){for(let D of m){let E=D.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):k(E))}m.clear(),d.clear()}function F(D){let E=i.get(D);if(E.__webglInit===void 0)return;let V=D.source,oe=f.get(V);if(oe){let ne=oe[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(D),Object.keys(oe).length===0&&f.delete(V)}i.remove(D)}function B(D){let E=i.get(D);t.deleteTexture(E.__webglTexture);let V=D.source,oe=f.get(V);delete oe[E.__cacheKey],o.memory.textures--}function $(D){let E=i.get(D);E.__depthDisposeCallback&&E.__depthDisposeCallback();let V=D.depthTexture;if(V&&V.renderTarget===D&&k(V),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ve=0;ve<E.__webglFramebuffer[ne].length;ve++)t.deleteFramebuffer(E.__webglFramebuffer[ne][ve]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let oe=D.textures;for(let ne=0,ve=oe.length;ne<ve;ne++){let Re=i.get(oe[ne]);Re.__webglTexture&&(t.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(oe[ne])}i.remove(D)}let X=0;function j(){X=0}function W(){return X}function ee(D){X=D}function Ee(){let D=X;return D>=s.maxTextures&&ft("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,D}function Q(D){let E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.mipmapsAutoUpdate),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function re(D,E){let V=i.get(D);if(D.isVideoTexture&&K(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){let oe=D.image;if(oe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,D,E);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function _e(D,E){let V=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){ye(V,D,E);return}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function Oe(D,E){let V=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){ye(V,D,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function ie(D,E){let V=i.get(D);if(D.version>0&&V.__version!==D.version){fe(V,D,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}let Ce={[ch]:t.REPEAT,[Zi]:t.CLAMP_TO_EDGE,[hh]:t.MIRRORED_REPEAT},He={[In]:t.NEAREST,[zg]:t.NEAREST_MIPMAP_NEAREST,[El]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[Gh]:t.LINEAR_MIPMAP_NEAREST,[Ls]:t.LINEAR_MIPMAP_LINEAR},Ue={[Wg]:t.NEVER,[pp]:t.ALWAYS,[Xg]:t.LESS,[dp]:t.LEQUAL,[Yg]:t.EQUAL,[fp]:t.GEQUAL,[qg]:t.GREATER,[$g]:t.NOTEQUAL};function qe(D,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===Gh||E.magFilter===El||E.magFilter===Ls||E.minFilter===Ln||E.minFilter===Gh||E.minFilter===El||E.minFilter===Ls)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,Ce[E.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,Ce[E.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,Ce[E.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,He[E.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,He[E.minFilter]),E.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==El&&E.minFilter!==Ls||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(D,E){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",R),C(E));let oe=E.source,ne=f.get(oe);ne===void 0&&(ne={},f.set(oe,ne));let ve=Q(E);if(ve!==D.__cacheKey){ne[ve]===void 0&&(ne[ve]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[ve].usedTimes++;let Re=ne[D.__cacheKey];Re!==void 0&&(ne[D.__cacheKey].usedTimes--,Re.usedTimes===0&&B(E)),D.__cacheKey=ve,D.__webglTexture=ne[ve].texture}return V}function ge(D,E,V){return Math.floor(Math.floor(D/V)/E)}function Pe(D,E,V,oe){let ve=D.updateRanges;if(ve.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,V,oe,E.data);else{ve.sort((Y,ue)=>Y.start-ue.start);let Re=0;for(let Y=1;Y<ve.length;Y++){let ue=ve[Re],ce=ve[Y],ke=ue.start+ue.count,Ie=ge(ce.start,E.width,4),Se=ge(ue.start,E.width,4);ce.start<=ke+1&&Ie===Se&&ge(ce.start+ce.count-1,E.width,4)===Ie?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++Re,ve[Re]=ce)}ve.length=Re+1;let se=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),Le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Y=0,ue=ve.length;Y<ue;Y++){let ce=ve[Y],ke=Math.floor(ce.start/4),Ie=Math.ceil(ce.count/4),Se=ke%E.width,We=Math.floor(ke/E.width),st=Ie,be=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(t.UNPACK_SKIP_ROWS,We),n.texSubImage2D(t.TEXTURE_2D,0,Se,We,st,be,V,oe,E.data)}D.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,se),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,Le)}}function ye(D,E,V){let oe=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=t.TEXTURE_3D);let ne=Ke(D,E),ve=E.source;n.bindTexture(oe,D.__webglTexture,t.TEXTURE0+V);let Re=i.get(ve);if(ve.version!==Re.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let be=kt.getPrimaries(kt.workingColorSpace),ze=E.colorSpace===Ds?null:kt.getPrimaries(E.colorSpace),$e=E.colorSpace===Ds||be===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let ae=v(E.image,!1,s.maxTextureSize);ae=J(E,ae);let Le=r.convert(E.format,E.colorSpace),Y=r.convert(E.type),ue=T(E.internalFormat,Le,Y,E.normalized,E.colorSpace,E.isVideoTexture);qe(oe,E);let ce,ke=E.mipmaps,Ie=E.isVideoTexture!==!0,Se=Re.__version===void 0||ne===!0,We=ve.dataReady,st=b(E,ae);if(E.isDepthTexture)ue=x(E.format===ks,E.type),Se&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,ue,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ue,ae.width,ae.height,0,Le,Y,null));else if(E.isDataTexture)if(ke.length>0){Ie&&Se&&n.texStorage2D(t.TEXTURE_2D,st,ue,ke[0].width,ke[0].height);for(let be=0,ze=ke.length;be<ze;be++)ce=ke[be],Ie?We&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,ce.width,ce.height,Le,Y,ce.data):n.texImage2D(t.TEXTURE_2D,be,ue,ce.width,ce.height,0,Le,Y,ce.data);E.generateMipmaps=!1}else Ie?(Se&&n.texStorage2D(t.TEXTURE_2D,st,ue,ae.width,ae.height),We&&Pe(E,ae,Le,Y)):n.texImage2D(t.TEXTURE_2D,0,ue,ae.width,ae.height,0,Le,Y,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,st,ue,ke[0].width,ke[0].height,ae.depth);for(let be=0,ze=ke.length;be<ze;be++)if(ce=ke[be],E.format!==gi)if(Le!==null)if(Ie){if(We)if(E.layerUpdates.size>0){let $e=Tp(ce.width,ce.height,E.format,E.type);for(let Fe of E.layerUpdates){let ct=ce.data.subarray(Fe*$e/ce.data.BYTES_PER_ELEMENT,(Fe+1)*$e/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,Fe,ce.width,ce.height,1,Le,ct)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,ce.width,ce.height,ae.depth,Le,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,ue,ce.width,ce.height,ae.depth,0,ce.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?We&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,ce.width,ce.height,ae.depth,Le,Y,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,ue,ce.width,ce.height,ae.depth,0,Le,Y,ce.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ie&&Se&&n.texStorage2D(t.TEXTURE_2D,st,ue,ke[0].width,ke[0].height);for(let be=0,ze=ke.length;be<ze;be++)ce=ke[be],E.format!==gi?Le!==null?Ie?We&&n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,ce.width,ce.height,Le,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,be,ue,ce.width,ce.height,0,ce.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?We&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,ce.width,ce.height,Le,Y,ce.data):n.texImage2D(t.TEXTURE_2D,be,ue,ce.width,ce.height,0,Le,Y,ce.data)}else if(E.isDataArrayTexture)if(Ie){if(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,st,ue,ae.width,ae.height,ae.depth),We)if(E.layerUpdates.size>0){let be=Tp(ae.width,ae.height,E.format,E.type);for(let ze of E.layerUpdates){let $e=ae.data.subarray(ze*be/ae.data.BYTES_PER_ELEMENT,(ze+1)*be/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ze,ae.width,ae.height,1,Le,Y,$e)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Le,Y,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,ae.width,ae.height,ae.depth,0,Le,Y,ae.data);else if(E.isData3DTexture)Ie?(Se&&n.texStorage3D(t.TEXTURE_3D,st,ue,ae.width,ae.height,ae.depth),We&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Le,Y,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ue,ae.width,ae.height,ae.depth,0,Le,Y,ae.data);else if(E.isFramebufferTexture){if(Se)if(Ie)n.texStorage2D(t.TEXTURE_2D,st,ue,ae.width,ae.height);else{let be=ae.width,ze=ae.height;for(let $e=0;$e<st;$e++)n.texImage2D(t.TEXTURE_2D,$e,ue,be,ze,0,Le,Y,null),be>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){let be=t.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),ae.parentNode!==be){be.appendChild(ae),d.add(E),be.onpaint=ze=>{let $e=ze.changedElements;for(let Fe of d)$e.includes(Fe.image)&&(Fe.needsUpdate=!0)},be.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ae);else{let $e=t.RGBA,Fe=t.RGBA,ct=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,$e,Fe,ct,ae)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ie&&Se){let be=Me(ke[0]);n.texStorage2D(t.TEXTURE_2D,st,ue,be.width,be.height)}for(let be=0,ze=ke.length;be<ze;be++)ce=ke[be],Ie?We&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Le,Y,ce):n.texImage2D(t.TEXTURE_2D,be,ue,Le,Y,ce);E.generateMipmaps=!1}else if(Ie){if(Se){let be=Me(ae);n.texStorage2D(t.TEXTURE_2D,st,ue,be.width,be.height)}We&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Y,ae)}else n.texImage2D(t.TEXTURE_2D,0,ue,Le,Y,ae);_(E)&&E.mipmapsAutoUpdate===!0&&M(oe),Re.__version=ve.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function fe(D,E,V){if(E.image.length!==6)return;let oe=Ke(D,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+V);let ve=i.get(ne);if(ne.version!==ve.__version||oe===!0){n.activeTexture(t.TEXTURE0+V);let Re=kt.getPrimaries(kt.workingColorSpace),se=E.colorSpace===Ds?null:kt.getPrimaries(E.colorSpace),ae=E.colorSpace===Ds||Re===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Y=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let Fe=0;Fe<6;Fe++)!Le&&!Y?ue[Fe]=v(E.image[Fe],!0,s.maxCubemapSize):ue[Fe]=Y?E.image[Fe].image:E.image[Fe],ue[Fe]=J(E,ue[Fe]);let ce=ue[0],ke=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),Se=T(E.internalFormat,ke,Ie,E.normalized,E.colorSpace),We=E.isVideoTexture!==!0,st=ve.__version===void 0||oe===!0,be=ne.dataReady,ze=b(E,ce);qe(t.TEXTURE_CUBE_MAP,E);let $e;if(E.isDepthTexture){if(Se=x(E.format===ks,E.type),st)if(We)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,Se,ce.width,ce.height);else for(let Fe=0;Fe<6;Fe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Se,ce.width,ce.height,0,ke,Ie,null)}else if(Le){We&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,Se,ce.width,ce.height);for(let Fe=0;Fe<6;Fe++){$e=ue[Fe].mipmaps;for(let ct=0;ct<$e.length;ct++){let It=$e[ct];E.format!==gi?ke!==null?We?be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct,0,0,It.width,It.height,ke,It.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct,Se,It.width,It.height,0,It.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct,0,0,It.width,It.height,ke,Ie,It.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct,Se,It.width,It.height,0,ke,Ie,It.data)}}}else{if($e=E.mipmaps,We&&st){$e.length>0&&ze++;let Fe=Me(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,Se,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(Y){We?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ue[Fe].width,ue[Fe].height,ke,Ie,ue[Fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Se,ue[Fe].width,ue[Fe].height,0,ke,Ie,ue[Fe].data);for(let ct=0;ct<$e.length;ct++){let et=$e[ct].image[Fe].image;We?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct+1,0,0,et.width,et.height,ke,Ie,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct+1,Se,et.width,et.height,0,ke,Ie,et.data)}}else{We?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ke,Ie,ue[Fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Se,ke,Ie,ue[Fe]);for(let ct=0;ct<$e.length;ct++){let It=$e[ct];We?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct+1,0,0,ke,Ie,It.image[Fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ct+1,Se,ke,Ie,It.image[Fe])}}}_(E)&&E.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),ve.__version=ne.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ae(D,E,V,oe,ne,ve){let Re=r.convert(V.format,V.colorSpace),se=r.convert(V.type),ae=T(V.internalFormat,Re,se,V.normalized,V.colorSpace),Le=i.get(E),Y=i.get(V);if(Y.__renderTarget=E,!Le.__hasExternalTextures){let ue=Math.max(1,E.width>>ve),ce=Math.max(1,E.height>>ve);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ve,ae,ue,ce,E.depth,0,Re,se,null):n.texImage2D(ne,ve,ae,ue,ce,0,Re,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),O(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ne,Y.__webglTexture,0,Te(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,ne,Y.__webglTexture,ve),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(D,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,D),E.depthBuffer){let oe=E.depthTexture,ne=oe&&oe.isDepthTexture?oe.type:null,ve=x(E.stencilBuffer,ne),Re=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;O(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te(E),ve,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te(E),ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,D)}else{let oe=E.textures;for(let ne=0;ne<oe.length;ne++){let ve=oe[ne],Re=r.convert(ve.format,ve.colorSpace),se=r.convert(ve.type),ae=T(ve.internalFormat,Re,se,ve.normalized,ve.colorSpace);O(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te(E),ae,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te(E),ae,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ae,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(D,E,V){let oe=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(E.depthTexture);ne.__renderTarget=E;let ve=oe?E.depthTexture.image[0]:E.depthTexture.image;(!ne.__webglTexture||ve.width!==E.width||ve.height!==E.height)&&(ve.width=E.width,ve.height=E.height,E.depthTexture.needsUpdate=!0),oe?ie(E.depthTexture,0):re(E.depthTexture,0);let Re=ne.__webglTexture,se=Te(E),ae=oe?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,Le=E.depthTexture.format===ks?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ps)O(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,ae,Re,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,Le,ae,Re,0);else if(E.depthTexture.format===ks)O(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,ae,Re,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,Le,ae,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(D){let E=i.get(D),V=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){let oe=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){let ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",ne)};oe.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=oe}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let oe=0;oe<6;oe++)de(E.__webglFramebuffer[oe],D,oe);else D.texture.mipmaps.length>0?de(E.__webglFramebuffer[0],D,0):de(E.__webglFramebuffer,D,0);else if(V){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=t.createRenderbuffer(),Z(E.__webglDepthbuffer[oe],D,!1);else{let ne=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[oe];t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ve)}}else if(D.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Z(E.__webglDepthbuffer,D,!1);else{let ne=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ve)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(D,E,V){let oe=i.get(D);E!==void 0&&Ae(oe.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&pe(D)}function Ne(D){let E=D.texture,V=i.get(D),oe=i.get(E);D.addEventListener("dispose",w),C(D);let ne=D.textures,ve=D.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=E.version,o.memory.textures++),ve){V.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps.length>0){V.__webglFramebuffer[se]=[];for(let ae=0;ae<E.mipmaps.length;ae++)V.__webglFramebuffer[se][ae]=t.createFramebuffer()}else V.__webglFramebuffer[se]=t.createFramebuffer()}else{if(E.mipmaps.length>0){V.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)V.__webglFramebuffer[se]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Re)for(let se=0,ae=ne.length;se<ae;se++){let Le=i.get(ne[se]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&O(D)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let se=0;se<ne.length;se++){let ae=ne[se];V.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[se]);let Le=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),ue=T(ae.internalFormat,Le,Y,ae.normalized,ae.colorSpace,D.isXRRenderTarget===!0),ce=Te(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ue,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,V.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Z(V.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ve){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),qe(t.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Ae(V.__webglFramebuffer[se][ae],D,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else Ae(V.__webglFramebuffer[se],D,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(E)?M(t.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}else if(Re){for(let se=0,ae=ne.length;se<ae;se++){let Le=ne[se],Y=i.get(Le),ue=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Y.__webglTexture),qe(ue,Le),Ae(V.__webglFramebuffer,D,Le,t.COLOR_ATTACHMENT0+se,ue,0),_(Le)&&M(ue)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,oe.__webglTexture),qe(se,E),E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Ae(V.__webglFramebuffer[ae],D,E,t.COLOR_ATTACHMENT0,se,ae);else Ae(V.__webglFramebuffer,D,E,t.COLOR_ATTACHMENT0,se,0);_(E)?M(se):E.mipmaps.length>0&&t.texParameteri(se,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}D.depthBuffer&&pe(D)}function q(D){let E=D.textures;for(let V=0,oe=E.length;V<oe;V++){let ne=E[V];if(_(ne)&&ne.mipmapsAutoUpdate===!0){let ve=S(D),Re=i.get(ne).__webglTexture;n.bindTexture(ve,Re),M(ve),n.unbindTexture()}}}let we=[];function Ve(D){if(D.samples>0){if(O(D)===!1){let E=D.textures,V=D.width,oe=D.height,ne=t.COLOR_BUFFER_BIT,ve=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(D),se=E.length>1;if(se)for(let Le=0;Le<E.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let Y=i.get(E[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Y,0)}t.blitFramebuffer(0,0,V,oe,0,0,V,oe,ne,t.NEAREST),l===!0&&(we.length=0,we.push(t.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&we.push(ve),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let Le=0;Le<E.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let Y=i.get(E[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Y,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let E=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Te(D){return Math.min(s.maxSamples,D.samples)}function O(D){let E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(D){let E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function J(D,E){let V=D.colorSpace,oe=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Xa&&V!==Ds&&(kt.getTransfer(V)===Gt?(oe!==gi||ne!==mi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",V)),E}function Me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Ee,this.resetTextureUnits=j,this.getTextureUnits=W,this.setTextureUnits=ee,this.setTexture2D=re,this.setTexture2DArray=_e,this.setTexture3D=Oe,this.setTextureCube=ie,this.rebindTextures=De,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=O,this.dispose=I}function V2(t,e){function n(i,s=Ds){let r,o=kt.getTransfer(s);if(i===mi)return t.UNSIGNED_BYTE;if(i===Wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ap)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===rp)return t.BYTE;if(i===op)return t.SHORT;if(i===jo)return t.UNSIGNED_SHORT;if(i===Vh)return t.INT;if(i===zi)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Hi)return t.HALF_FLOAT;if(i===cp)return t.ALPHA;if(i===hp)return t.RGB;if(i===gi)return t.RGBA;if(i===Ps)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===Yh)return t.RED;if(i===qh)return t.RED_INTEGER;if(i===rr)return t.RG;if(i===$h)return t.RG_INTEGER;if(i===Kh)return t.RGBA_INTEGER;if(i===Al||i===Rl||i===Cl||i===Pl)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===jh||i===Jh||i===Qh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===tu||i===nu||i===iu||i===su||i===Il||i===ru)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eu||i===tu)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===iu)return r.COMPRESSED_R11_EAC;if(i===su)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Il)return r.COMPRESSED_RG11_EAC;if(i===ru)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ou||i===au||i===lu||i===cu||i===hu||i===uu||i===du||i===fu||i===pu||i===mu||i===gu||i===vu||i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ou)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===au)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===du)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yu)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bu||i===_u||i===Mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bu)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wu||i===Su||i===Ll||i===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var W2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X2=`
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

}`,Bp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new al(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Xn({vertexShader:W2,fragmentShader:X2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zp=class extends ji{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new Bp,p={},v=n.getContextAttributes(),_=null,M=null,S=[],T=[],x=new Ge,b=null,C=null,L=new Un;L.viewport=new on;let R=new Un;R.viewport=new on;let w=[L,R],k=new Uh,P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=S[Q];return re===void 0&&(re=new Fo,S[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=S[Q];return re===void 0&&(re=new Fo,S[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=S[Q];return re===void 0&&(re=new Fo,S[Q]=re),re.getHandSpace()};function F(Q){let re=T.indexOf(Q.inputSource);if(re===-1)return;let _e=S[re];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,c||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",$);for(let Q=0;Q<S.length;Q++){let re=T[Q];re!==null&&(T[Q]=null,S[Q].disconnect(re))}P=null,I=null,g.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(_),f=null,u=null,d=null,s=null,M=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),C!==null){let Q=C.camera;Q.fov=C.fov,Q.zoom=C.zoom,Q.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,ie=null;v.depth&&(ie=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=v.stencil?ks:Ps,Oe=v.stencil?qr:zi);let Ce={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new fi(u.textureWidth,u.textureHeight,{format:gi,type:mi,depthTexture:new Is(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new fi(f.framebufferWidth,f.framebufferHeight,{format:gi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Q){for(let re=0;re<Q.removed.length;re++){let _e=Q.removed[re],Oe=T.indexOf(_e);Oe>=0&&(T[Oe]=null,S[Oe].disconnect(_e))}for(let re=0;re<Q.added.length;re++){let _e=Q.added[re],Oe=T.indexOf(_e);if(Oe===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=T.length){T.push(_e),Oe=Ce;break}else if(T[Ce]===null){T[Ce]=_e,Oe=Ce;break}if(Oe===-1)break}let ie=S[Oe];ie&&ie.connect(_e)}}function X(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let re=Q.near,_e=Q.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),k.near=R.near=L.near=re,k.far=R.far=L.far=_e,(P!==k.near||I!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,I=k.far),k.layers.mask=Q.layers.mask|6,L.layers.mask=k.layers.mask&-5,R.layers.mask=k.layers.mask&-3;let Oe=Q.parent,ie=k.cameras;X(k,Oe);for(let Ce=0;Ce<ie.length;Ce++)X(ie[Ce],Oe);k.projectionMatrix.copy(L.projectionMatrix),k.projectionMatrixInverse.copy(L.projectionMatrixInverse),C===null&&Q.isPerspectiveCamera&&(C={camera:Q,fov:Q.fov,zoom:Q.zoom}),j(Q,k,Oe)};function j(Q,re,_e){_e===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=No*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Q){return p[Q]};let W=null;function ee(Q,re){if(h=re.getViewerPose(c||o),m=re,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Oe=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let Ue=0;Ue<_e.length;Ue++){let qe=_e[Ue],Ke=null;if(f!==null)Ke=f.getViewport(qe);else{let Pe=d.getViewSubImage(u,qe);Ke=Pe.viewport,Ue===0&&(e.setRenderTargetTextures(M,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(M))}let ge=w[Ue];ge===void 0&&(ge=new Un,ge.layers.enable(Ue),ge.viewport=new on,w[Ue]=ge),ge.matrix.fromArray(qe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(qe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ue===0&&(k.matrix.copy(ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(ge)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ue=d.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(Ue,s.renderState)}if(ie&&ie.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ue=0;Ue<_e.length;Ue++){let qe=_e[Ue].camera;if(qe){let Ke=p[qe];Ke||(Ke=new al,p[qe]=Ke);let ge=d.getCameraImage(qe);Ke.sourceTexture=ge}}}}for(let _e=0;_e<S.length;_e++){let Oe=T[_e],ie=S[_e];Oe!==null&&ie!==void 0&&ie.update(Oe,re,c||o)}W&&W(Q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}let Ee=new Cv;Ee.setAnimationLoop(ee),this.setAnimationLoop=function(Q){W=Q},this.dispose=function(){}}},Y2=new Et,Bv=new yt;Bv.set(-1,0,0,0,1,0,0,0,1);function q2(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Mp(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,_,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===wn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===wn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,M=v.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Bv),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $2(t,e,n,i){let s={},r={};function o(v,_){let M=_.program;i.uniformBlockBinding(v,M,s[v.id])}function a(v,_){let M=s[v.id];M===void 0&&(m(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",g));let S=_.program;i.updateUBOMapping(v,S);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let _=t.createBuffer(),M=v.__size,S=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,M,S),t.bindBuffer(t.UNIFORM_BUFFER,null),_}function c(v){let _=s[v.id],M=v.uniforms,S=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,x=M.length;T<x;T++){let b=M[T];if(Array.isArray(b))for(let C=0,L=b.length;C<L;C++)h(b[C],T,C,S);else h(b,T,0,S)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,_,M,S){if(u(v,_,M,S)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let C=0;C<x.length;C++){let L=x[C],R=y(L,!0);d(L,v.__data,b),b+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,v.__data)}}function d(v,_,M){typeof v=="number"||typeof v=="boolean"?_[M]=v:v.isMatrix3?(_[M]=v.elements[0],_[M+1]=v.elements[1],_[M+2]=v.elements[2],_[M+3]=0,_[M+4]=v.elements[3],_[M+5]=v.elements[4],_[M+6]=v.elements[5],_[M+7]=0,_[M+8]=v.elements[6],_[M+9]=v.elements[7],_[M+10]=v.elements[8],_[M+11]=0):ArrayBuffer.isView(v)?_.set(v.subarray(0,_.length-M),M):v.toArray(_,M)}function u(v,_,M,S){let T=v.value,x=_+"_"+M;if(Array.isArray(T)){S[x]===void 0&&(S[x]=[]);let b=S[x],C=!1;for(let L=0;L<T.length;L++)f(T[L],b,L)===!0&&(C=!0);return C}return f(T,S,x)}function f(v,_,M){if(_[M]===void 0)return typeof v=="number"||typeof v=="boolean"?_[M]=v:ArrayBuffer.isView(v)?_[M]=v.slice():_[M]=v.clone(),!0;{let S=_[M];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return _[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(v){let _=v.uniforms,M=0,S=16;for(let x=0,b=_.length;x<b;x++){let C=Array.isArray(_[x])?_[x]:[_[x]];for(let L=0,R=C.length;L<R;L++){let w=C[L],k=Array.isArray(w.value)?w.value:[w.value],P=Array.isArray(_[x])||Array.isArray(w.value),I=M;for(let B=0,$=k.length;B<$;B++){let X=k[B],j=y(X,P),W=M%S,ee=W%j.boundary,Ee=W+ee;M+=ee,Ee!==0&&S-Ee<j.storage&&(M+=S-Ee),B===0&&(I=M),M+=j.storage}let F=w.type==="int"?Int32Array:w.type==="uint"?Uint32Array:Float32Array;w.__data=new F((M-I)/Float32Array.BYTES_PER_ELEMENT),w.__offset=I}}let T=M%S;return T>0&&(M+=S-T),v.__size=M,v.__cache={},this}function y(v,_){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",v),_===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){let _=v.target;_.removeEventListener("dispose",g),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)t.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:p}}var K2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),is=null;function Z2(){return is===null&&(is=new Fr(K2,16,16,rr,Hi),is.name="DFG_LUT",is.minFilter=Ln,is.magFilter=Ln,is.wrapS=Zi,is.wrapT=Zi,is.generateMipmaps=!1,is.needsUpdate=!0),is}var Iu=class{constructor(e={}){let{canvas:n=Kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=f,g=new Set([Kh,$h,qh]),p=new Set([mi,zi,jo,qr,Wh,Xh]),v=new Uint32Array(4),_=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,T=null,x=[],b=[],C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,R=!1,w=null,k=null,P=null,I=null;this._outputColorSpace=pn;let F=0,B=0,$=null,X=-1,j=null,W=new on,ee=new on,Ee=null,Q=new Je(0),re=0,_e=n.width,Oe=n.height,ie=1,Ce=null,He=null,Ue=new on(0,0,_e,Oe),qe=new on(0,0,_e,Oe),Ke=!1,ge=new Ur,Pe=new mh,ye=!1,fe=!1,Ae=new Et,Z=new G,de=new on,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Ne(){return $===null?ie:1}let q=i;function we(N,te){return n.getContext(N,te)}let Ve,Te,O,K,J,Me,D,E,V,oe,ne,ve,Re,se,ae,Le,Y,ue,ce,ke,Ie,Se,We;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",ze,!1),n.addEventListener("webglcontextrestored",$e,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),q===null){let te="webgl2";if(q=we(te,N),q===null)throw we(te)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(N){throw n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),mt("WebGLRenderer: "+N.message),N}function st(){Ve=new aE(q),Ve.init(),Ie=new V2(q,Ve),Te=new ZT(q,Ve,e,Ie),O=new H2(q,Ve),Te.reversedDepthBuffer&&u&&O.buffers.depth.setReversed(!0),k=q.createFramebuffer(),P=q.createFramebuffer(),I=q.createFramebuffer(),K=new hE(q),J=new A2,Me=new G2(q,Ve,O,J,Te,Ie,K),D=new oE(L),E=new dw(q),Se=new $T(q,E),V=new lE(q,E,K,Se),oe=new dE(q,V,E,Se,K),ue=new uE(q,Te,Me),ae=new jT(J),ne=new E2(L,D,Ve,Te,Se,ae),ve=new q2(L,J),Re=new C2,se=new N2(Ve),Y=new qT(L,D,O,oe,m,l),Le=new z2(L,oe,Te),We=new $2(q,K,Te,O),ce=new KT(q,Ve,K),ke=new cE(q,Ve,K),K.programs=ne.programs,L.capabilities=Te,L.extensions=Ve,L.properties=J,L.renderLists=Re,L.shadowMap=Le,L.state=O,L.info=K}y!==mi&&(C=new pE(y,n.width,n.height,a,s,r));let be=new zp(L,q);this.xr=be,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let N=Ve.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=Ve.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(N){N!==void 0&&(ie=N,this.setSize(_e,Oe,!1))},this.getSize=function(N){return N.set(_e,Oe)},this.setSize=function(N,te,xe=!0){if(be.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=N,Oe=te,n.width=Math.floor(N*ie),n.height=Math.floor(te*ie),xe===!0&&(n.style.width=N+"px",n.style.height=te+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,N,te)},this.getDrawingBufferSize=function(N){return N.set(_e*ie,Oe*ie).floor()},this.setDrawingBufferSize=function(N,te,xe){_e=N,Oe=te,ie=xe,n.width=Math.floor(N*xe),n.height=Math.floor(te*xe),this.setViewport(0,0,N,te)},this.setEffects=function(N){if(y===mi){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let te=0;te<N.length;te++)if(N[te].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(W)},this.getViewport=function(N){return N.copy(Ue)},this.setViewport=function(N,te,xe,le){N.isVector4?Ue.set(N.x,N.y,N.z,N.w):Ue.set(N,te,xe,le),O.viewport(W.copy(Ue).multiplyScalar(Ne()).round())},this.getScissor=function(N){return N.copy(qe)},this.setScissor=function(N,te,xe,le){N.isVector4?qe.set(N.x,N.y,N.z,N.w):qe.set(N,te,xe,le),O.scissor(ee.copy(qe).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(N){O.setScissorTest(Ke=N)},this.setOpaqueSort=function(N){Ce=N},this.setTransparentSort=function(N){He=N},this.getClearColor=function(N){return N.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(N=!0,te=!0,xe=!0){let le=0;if(N){let he=!1;if($!==null){let Ye=$.texture.format;he=g.has(Ye)}if(he){let Ye=$.texture.type,it=p.has(Ye),Xe=Y.getClearColor(),Ze=Y.getClearAlpha(),rt=Xe.r,bt=Xe.g,Ct=Xe.b;it?(v[0]=rt,v[1]=bt,v[2]=Ct,v[3]=Ze,q.clearBufferuiv(q.COLOR,0,v)):(_[0]=rt,_[1]=bt,_[2]=Ct,_[3]=Ze,q.clearBufferiv(q.COLOR,0,_))}else le|=q.COLOR_BUFFER_BIT}te&&(le|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xe&&(le|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),w=N},this.dispose=function(){n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),Y.dispose(),Re.dispose(),se.dispose(),Me.dispose(),J.dispose(),D.dispose(),oe.dispose(),V.dispose(),Se.dispose(),We.dispose(),ne.dispose(),be.dispose(),be.removeEventListener("sessionstart",zt),be.removeEventListener("sessionend",Kt),dt.stop()};function ze(N){N.preventDefault(),Ka("WebGLRenderer: Context Lost."),R=!0}function $e(){Ka("WebGLRenderer: Context Restored."),R=!1;let N=K.autoReset,te=Le.enabled,xe=Le.autoUpdate,le=Le.needsUpdate,he=Le.type;st(),K.autoReset=N,Le.enabled=te,Le.autoUpdate=xe,Le.needsUpdate=le,Le.type=he}function Fe(N){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ct(N){let te=N.target;te.removeEventListener("dispose",ct),It(te)}function It(N){et(N),J.remove(N)}function et(N){let te=J.get(N).programs;te!==void 0&&(te.forEach(function(xe){ne.releaseProgram(xe)}),N.isShaderMaterial&&ne.releaseShaderCache(N))}this.renderBufferDirect=function(N,te,xe,le,he,Ye){te===null&&(te=pe);let it=he.isMesh&&he.matrixWorld.determinantAffine()<0,Xe=bc(N,te,xe,le,he);O.setMaterial(le,it);let Ze=xe.index,rt=1;if(le.wireframe===!0){if(Ze=V.getWireframeAttribute(xe),Ze===void 0)return;rt=2}let bt=xe.drawRange,Ct=xe.attributes.position,tt=bt.start*rt,ht=(bt.start+bt.count)*rt;Ye!==null&&(tt=Math.max(tt,Ye.start*rt),ht=Math.min(ht,(Ye.start+Ye.count)*rt)),Ze!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Ze.count)):Ct!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,Ct.count));let hn=ht-tt;if(hn<0||hn===1/0)return;Se.setup(he,le,Xe,xe,Ze);let Wt,Ut=ce;if(Ze!==null&&(Wt=E.get(Ze),Ut=ke,Ut.setIndex(Wt)),he.isMesh)le.wireframe===!0?(O.setLineWidth(le.wireframeLinewidth*Ne()),Ut.setMode(q.LINES)):Ut.setMode(q.TRIANGLES);else if(he.isLine){let vn=le.linewidth;vn===void 0&&(vn=1),O.setLineWidth(vn*Ne()),he.isLineSegments?Ut.setMode(q.LINES):he.isLineLoop?Ut.setMode(q.LINE_LOOP):Ut.setMode(q.LINE_STRIP)}else he.isPoints?Ut.setMode(q.POINTS):he.isSprite&&Ut.setMode(q.TRIANGLES);if(he.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Ut.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let vn=he._multiDrawStarts,nt=he._multiDrawCounts,bn=he._multiDrawCount,Lt=Ze?E.get(Ze).bytesPerElement:1,li=J.get(le).currentProgram.getUniforms();for(let dn=0;dn<bn;dn++)li.setValue(q,"_gl_DrawID",dn),Ut.render(vn[dn]/Lt,nt[dn])}else if(he.isInstancedMesh)Ut.renderInstances(tt,hn,he.count);else if(xe.isInstancedBufferGeometry){let vn=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,nt=Math.min(xe.instanceCount,vn);Ut.renderInstances(tt,hn,nt)}else Ut.render(tt,hn)};function St(N,te,xe,le){w!==null&&N.isNodeMaterial&&w.setObject(le,N),ye===!0&&ae.setState(N,xe,!1),N.transparent===!0&&N.side===kn&&N.forceSinglePass===!1?(N.side=wn,N.needsUpdate=!0,$s(N,te,le),N.side=sr,N.needsUpdate=!0,$s(N,te,le),N.side=kn):$s(N,te,le)}this.compile=function(N,te,xe=null){xe===null&&(xe=N),w!==null&&w.renderStart(N,te,xe),T=se.get(xe),T.init(te),b.push(T),xe.traverseVisible(function(he){he.isLight&&he.layers.test(te.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),N!==xe&&N.traverseVisible(function(he){he.isLight&&he.layers.test(te.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),T.setupLights(),w!==null&&w.updateLights(T.state.lightsArray),fe=this.localClippingEnabled,ye=ae.init(this.clippingPlanes,fe),ye===!0&&ae.setGlobalState(this.clippingPlanes,te),w!==null&&Le.render(T.state.shadowsArray,xe,te);let le=new Set;return N.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Ye=he.material;if(Ye)if(Array.isArray(Ye))for(let it=0;it<Ye.length;it++){let Xe=Ye[it];St(Xe,xe,te,he),le.add(Xe)}else St(Ye,xe,te,he),le.add(Ye)}),T=b.pop(),w!==null&&w.renderEnd(),le},this.compileAsync=function(N,te,xe=null){let le=this.compile(N,te,xe);return new Promise(he=>{function Ye(){if(le.forEach(function(it){let Ze=J.get(it).currentProgram;(Ze===void 0||Ze.isReady())&&le.delete(it)}),le.size===0){he(N);return}setTimeout(Ye,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let pt=null;function Ht(N){pt&&pt(N)}function zt(){dt.stop()}function Kt(){dt.start()}let dt=new Cv;dt.setAnimationLoop(Ht),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(N){pt=N,be.setAnimationLoop(N),N===null?dt.stop():dt.start()},be.addEventListener("sessionstart",zt),be.addEventListener("sessionend",Kt),this.render=function(N,te){if(te!==void 0&&te.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;w!==null&&w.renderStart(N,te);let xe=be.enabled===!0&&be.isPresenting===!0,le=C!==null&&($===null||xe)&&C.begin(L,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(te),te=be.getCamera()),N.isScene===!0&&N.onBeforeRender(L,N,te,$),T=se.get(N,b.length),T.init(te),T.state.textureUnits=Me.getTextureUnits(),b.push(T),Ae.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),te.isArrayCamera?Pe.setFromArrayCamera(te):ge.setFromProjectionMatrix(Ae,Ei,te.reversedDepth),fe=this.localClippingEnabled,ye=ae.init(this.clippingPlanes,fe),S=Re.get(N,x.length),S.init(),x.push(S),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let it=L.xr.getDepthSensingMesh();it!==null&&Dt(it,te,-1/0,L.sortObjects)}Dt(N,te,0,L.sortObjects),S.finish(),w!==null&&w.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(Ce,He),De=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,De&&Y.addToRenderList(S,N),this.info.autoReset===!0&&this.info.reset(),ye===!0&&ae.beginShadows();let he=T.state.shadowsArray;if(Le.render(he,N,te),ye===!0&&ae.endShadows(),(le&&C.hasRenderPass())===!1){let it=S.opaque,Xe=S.transmissive;if(T.setupLights(),te.isArrayCamera){let Ze=te.cameras;if(Xe.length>0)for(let rt=0,bt=Ze.length;rt<bt;rt++){let Ct=Ze[rt];sn(it,Xe,N,Ct)}De&&Y.render(N);for(let rt=0,bt=Ze.length;rt<bt;rt++){let Ct=Ze[rt];gn(S,N,Ct,Ct.viewport)}}else Xe.length>0&&sn(it,Xe,N,te),De&&Y.render(N),gn(S,N,te)}$!==null&&B===0&&(Me.updateMultisampleRenderTarget($),Me.updateRenderTargetMipmap($)),le&&C.end(L),N.isScene===!0&&N.onAfterRender(L,N,te),Se.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(T=b[b.length-1],Me.setTextureUnits(T.state.textureUnits),ye===!0&&ae.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,w!==null&&w.renderEnd()};function Dt(N,te,xe,le){if(N.visible===!1)return;if(N.layers.test(te.layers)){if(N.isGroup)xe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(te);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){let it=te.isArrayCamera?Pe:ge;if(!N.frustumCulled||N.intersectsFrustum(it)){le&&de.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ae);let Xe=oe.update(N),Ze=N.material;Ze.visible&&S.push(N,Xe,Ze,xe,de.z,null,te)}}else if(N.isMesh||N.isLine||N.isPoints){let it=te.isArrayCamera?Pe:ge;if(!N.frustumCulled||N.intersectsFrustum(it)){let Xe=oe.update(N),Ze=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),de.copy(N.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),de.copy(Xe.boundingSphere.center)),de.applyMatrix4(N.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ze)){let rt=Xe.groups;for(let bt=0,Ct=rt.length;bt<Ct;bt++){let tt=rt[bt],ht=Ze[tt.materialIndex];ht&&ht.visible&&S.push(N,Xe,ht,xe,de.z,tt,te)}}else Ze.visible&&S.push(N,Xe,Ze,xe,de.z,null,te)}}}let Ye=N.children;for(let it=0,Xe=Ye.length;it<Xe;it++)Dt(Ye[it],te,xe,le)}function gn(N,te,xe,le){let{opaque:he,transmissive:Ye,transparent:it}=N;T.setupLightsView(xe),ye===!0&&ae.setGlobalState(L.clippingPlanes,xe),le&&O.viewport(W.copy(le)),he.length>0&&Vt(he,te,xe),Ye.length>0&&Vt(Ye,te,xe),it.length>0&&Vt(it,te,xe),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function sn(N,te,xe,le){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[le.id]===void 0){let tt=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[le.id]=new fi(1,1,{generateMipmaps:!0,type:tt?Hi:mi,minFilter:Ls,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let Ye=T.state.transmissionRenderTarget[le.id],it=le.viewport||W;Ye.setSize(it.z*L.transmissionResolutionScale,it.w*L.transmissionResolutionScale);let Xe=L.getRenderTarget(),Ze=L.getActiveCubeFace(),rt=L.getActiveMipmapLevel();L.setRenderTarget(Ye),L.getClearColor(Q),re=L.getClearAlpha(),re<1&&L.setClearColor(16777215,.5),L.clear(),De&&Y.render(xe);let bt=L.toneMapping;L.toneMapping=ns;let Ct=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),T.setupLightsView(le),ye===!0&&ae.setGlobalState(L.clippingPlanes,le),Vt(N,xe,le),Me.updateMultisampleRenderTarget(Ye),Me.updateRenderTargetMipmap(Ye),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ht=0,hn=te.length;ht<hn;ht++){let Wt=te[ht],{object:Ut,geometry:vn,material:nt,group:bn}=Wt;if(nt.side===kn&&Ut.layers.test(le.layers)){let Lt=nt.side;nt.side=wn,nt.needsUpdate=!0,en(Ut,xe,le,vn,nt,bn),nt.side=Lt,nt.needsUpdate=!0,tt=!0}}tt===!0&&(Me.updateMultisampleRenderTarget(Ye),Me.updateRenderTargetMipmap(Ye))}L.setRenderTarget(Xe,Ze,rt),L.setClearColor(Q,re),Ct!==void 0&&(le.viewport=Ct),L.toneMapping=bt}function Vt(N,te,xe){let le=te.isScene===!0?te.overrideMaterial:null;for(let he=0,Ye=N.length;he<Ye;he++){let it=N[he],{object:Xe,geometry:Ze,group:rt}=it,bt=it.material;bt.allowOverride===!0&&le!==null&&(bt=le),Xe.layers.test(xe.layers)&&en(Xe,te,xe,Ze,bt,rt)}}function en(N,te,xe,le,he,Ye){w!==null&&he.isNodeMaterial&&w.setObject(N,he),N.onBeforeRender(L,te,xe,le,he,Ye),N.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),he.onBeforeRender(L,te,xe,le,N,Ye),he.transparent===!0&&he.side===kn&&he.forceSinglePass===!1?(he.side=wn,he.needsUpdate=!0,L.renderBufferDirect(xe,te,le,he,N,Ye),he.side=sr,he.needsUpdate=!0,L.renderBufferDirect(xe,te,le,he,N,Ye),he.side=kn):L.renderBufferDirect(xe,te,le,he,N,Ye),N.onAfterRender(L,te,xe,le,he,Ye)}function _s(N){let te=0;for(let xe of N)xe.texture!==null&&te++;return te}function $s(N,te,xe){te.isScene!==!0&&(te=pe);let le=J.get(N),he=T.state.lights,Ye=T.state.shadowsArray,it=he.state.version,Xe=ne.getParameters(N,he.state,Ye,te,xe,T.state.lightProbeGridArray),Ze=ne.getProgramCacheKey(Xe),rt=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?te.environment:null,le.fog=te.fog;let bt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=D.get(N.envMap||le.environment,bt),le.envMapRotation=le.environment!==null&&N.envMap===null?te.environmentRotation:N.envMapRotation,rt===void 0&&(N.addEventListener("dispose",ct),rt=new Map,le.programs=rt,le.programVariants=new Map);let Ct=rt.get(Ze);if(Ct!==void 0){if(le.currentProgram===Ct&&le.lightsStateVersion===it)return Ta(N,Xe),Ct}else Xe.uniforms=ne.getUniforms(N),w!==null&&N.isNodeMaterial&&w.build(N,xe,Xe),N.onBeforeCompile(Xe,L),Ct=ne.acquireProgram(Xe,Ze),rt.set(Ze,Ct),le.uniforms=Xe.uniforms;let tt=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(tt.clippingPlanes=ae.uniform),Ta(N,Xe),le.needsLights=Ea(N),le.lightsStateVersion=it,le.needsLights&&(tt.ambientLightColor.value=he.state.ambient,tt.lightProbe.value=he.state.probe,tt.sunLights.value=he.state.sun,tt.sunLightShadows.value=he.state.sunShadow,tt.directionalLights.value=he.state.directional,tt.directionalLightShadows.value=he.state.directionalShadow,tt.spotLights.value=he.state.spot,tt.spotLightShadows.value=he.state.spotShadow,tt.rectAreaLights.value=he.state.rectArea,tt.ltc_1.value=he.state.rectAreaLTC1,tt.ltc_2.value=he.state.rectAreaLTC2,tt.pointLights.value=he.state.point,tt.pointLightShadows.value=he.state.pointShadow,tt.hemisphereLights.value=he.state.hemi,tt.sunShadowMatrix.value=he.state.sunShadowMatrix,tt.sunShadowCascade.value=he.state.sunShadowCascade,tt.directionalShadowMatrix.value=he.state.directionalShadowMatrix,tt.spotLightMatrix.value=he.state.spotLightMatrix,tt.spotLightMap.value=he.state.spotLightMap,tt.pointShadowMatrix.value=he.state.pointShadowMatrix),le.numLightProbeGrids=_s(T.state.lightProbeGridArray),le.currentProgram=Ct,le.uniformsList=null,Ct}function yc(N,te,xe,le,he){let Ye=J.get(N),it=Ye.currentProgram.id+","+le+","+he,Xe=Ye.programVariants.get(it);return Xe===void 0?(Xe=$s(N,te,xe),Ye.programVariants.set(it,Xe)):(Ye.currentProgram=Xe,Ye.uniformsList=null,Ye.outputColorSpace=le,Ye.toneMapping=he),Xe}function Sa(N){if(N.uniformsList===null){let te=N.currentProgram.getUniforms();N.uniformsList=Qo.seqWithValue(te.seq,N.uniforms)}return N.uniformsList}function Ta(N,te){let xe=J.get(N);xe.outputColorSpace=te.outputColorSpace,xe.batching=te.batching,xe.batchingColor=te.batchingColor,xe.instancing=te.instancing,xe.instancingColor=te.instancingColor,xe.instancingMorph=te.instancingMorph,xe.skinning=te.skinning,xe.morphTargets=te.morphTargets,xe.morphNormals=te.morphNormals,xe.morphColors=te.morphColors,xe.morphTargetsCount=te.morphTargetsCount,xe.numClippingPlanes=te.numClippingPlanes,xe.numIntersection=te.numClipIntersection,xe.vertexAlphas=te.vertexAlphas,xe.vertexTangents=te.vertexTangents,xe.toneMapping=te.toneMapping}function bc(N,te,xe,le,he){te.isScene!==!0&&(te=pe),Me.resetTextureUnits();let Ye=te.fog,it=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?te.environment:null,Xe=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:kt.workingColorSpace,Ze=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,rt=D.get(le.envMap||it,Ze),bt=le.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,Ct=!!xe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!xe.morphAttributes.position,ht=!!xe.morphAttributes.normal,hn=!!xe.morphAttributes.color,Wt=ns;le.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Wt=L.toneMapping);let Ut=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,vn=Ut!==void 0?Ut.length:0,nt=J.get(le),bn=T.state.lights;if(ye===!0&&(fe===!0||N!==j)){let Zt=N===j&&le.id===X;ae.setState(le,N,Zt)}let Lt=!1,li=!1;le.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==bn.state.version||he.isBatchedMesh&&nt.batching===!1||!he.isBatchedMesh&&nt.batching===!0||he.isBatchedMesh&&nt.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&nt.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&nt.instancing===!1||!he.isInstancedMesh&&nt.instancing===!0||he.isSkinnedMesh&&nt.skinning===!1||!he.isSkinnedMesh&&nt.skinning===!0||he.isInstancedMesh&&nt.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&nt.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&nt.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&nt.instancingMorph===!1&&he.morphTexture!==null||nt.envMap!==rt||le.fog===!0&&nt.fog!==Ye||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ae.numPlanes||nt.numIntersection!==ae.numIntersection)||nt.vertexAlphas!==bt||nt.vertexTangents!==Ct||nt.morphTargets!==tt||nt.morphNormals!==ht||nt.morphColors!==hn||nt.morphTargetsCount!==vn||nt.numLightProbeGrids!==_s(T.state.lightProbeGridArray)?Lt=!0:(nt.outputColorSpace!==Xe||nt.toneMapping!==Wt)&&(li=!0):(Lt=!0,nt.__version=le.version);let dn=nt.currentProgram;(Lt===!0||li===!0)&&(dn=li===!0?yc(le,te,he,Xe,Wt):$s(le,te,he),w&&le.isNodeMaterial&&w.onUpdateProgram(le,dn,nt));let Ms=!1,wi=!1,ot=!1,Nt=dn.getUniforms(),_n=nt.uniforms;if(O.useProgram(dn.program)&&(Ms=!0,wi=!0,ot=!0),le.id!==X&&(X=le.id,wi=!0),Ms||j!==N){O.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Nt.setValue(q,"projectionMatrix",N.projectionMatrix),Nt.setValue(q,"viewMatrix",N.matrixWorldInverse);let fn=Nt.map.cameraPosition;fn!==void 0&&fn.setValue(q,Z.setFromMatrixPosition(N.matrixWorld)),Te.logarithmicDepthBuffer&&Nt.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Nt.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),j!==N&&(j=N,wi=!0,ot=!0)}if(nt.needsLights&&(bn.state.sunShadowMap.length>0&&Nt.setValue(q,"sunShadowMap",bn.state.sunShadowMap,Me),bn.state.directionalShadowMap.length>0&&Nt.setValue(q,"directionalShadowMap",bn.state.directionalShadowMap,Me),bn.state.spotShadowMap.length>0&&Nt.setValue(q,"spotShadowMap",bn.state.spotShadowMap,Me),bn.state.pointShadowMap.length>0&&Nt.setValue(q,"pointShadowMap",bn.state.pointShadowMap,Me)),he.isSkinnedMesh){Nt.setOptional(q,he,"bindMatrix"),Nt.setOptional(q,he,"bindMatrixInverse");let Zt=he.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Nt.setValue(q,"boneTexture",Zt.boneTexture,Me))}he.isBatchedMesh&&(Nt.setOptional(q,he,"batchingTexture"),Nt.setValue(q,"batchingTexture",he._matricesTexture,Me),Nt.setOptional(q,he,"batchingIdTexture"),Nt.setValue(q,"batchingIdTexture",he._indirectTexture,Me),Nt.setOptional(q,he,"batchingColorTexture"),he._colorsTexture!==null&&Nt.setValue(q,"batchingColorTexture",he._colorsTexture,Me));let ci=xe.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&ue.update(he,xe,dn),(wi||nt.receiveShadow!==he.receiveShadow)&&(nt.receiveShadow=he.receiveShadow,Nt.setValue(q,"receiveShadow",he.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&te.environment!==null&&(_n.envMapIntensity.value=te.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=Z2()),wi){if(Nt.setValue(q,"toneMappingExposure",L.toneMappingExposure),nt.needsLights&&_c(_n,ot),Ye&&le.fog===!0&&ve.refreshFogUniforms(_n,Ye),ve.refreshMaterialUniforms(_n,le,ie,Oe,T.state.transmissionRenderTarget[N.id]),nt.needsLights&&nt.numLightProbeGrids>0){let Zt=M,fn=0;for(let ni of T.state.lightProbeGridArray)ni.texture!==null&&(Zt.textures[fn]=ni.texture,Zt.min[fn]=ni.boundingBox.min,Zt.max[fn]=ni.boundingBox.max,Zt.resolution[fn]=ni.resolution,fn++);for(let ni in Zt)Zt[ni].length=fn;_n.probesSH.value=Zt.textures,_n.probesMin.value=Zt.min,_n.probesMax.value=Zt.max,_n.probesResolution.value=Zt.resolution}Qo.upload(q,Sa(nt),_n,Me)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qo.upload(q,Sa(nt),_n,Me),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Nt.setValue(q,"center",he.center),Nt.setValue(q,"modelViewMatrix",he.modelViewMatrix),Nt.setValue(q,"normalMatrix",he.normalMatrix),Nt.setValue(q,"modelMatrix",he.matrixWorld),le.uniformsGroups!==void 0){let Zt=le.uniformsGroups;for(let fn=0,ni=Zt.length;fn<ni;fn++){let Mc=Zt[fn];We.update(Mc,dn),We.bind(Mc,dn)}}return dn}function _c(N,te){N.ambientLightColor.needsUpdate=te,N.lightProbe.needsUpdate=te,N.sunLights.needsUpdate=te,N.sunLightShadows.needsUpdate=te,N.directionalLights.needsUpdate=te,N.directionalLightShadows.needsUpdate=te,N.pointLights.needsUpdate=te,N.pointLightShadows.needsUpdate=te,N.spotLights.needsUpdate=te,N.spotLightShadows.needsUpdate=te,N.rectAreaLights.needsUpdate=te,N.hemisphereLights.needsUpdate=te}function Ea(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,te,xe){let le=J.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),J.get(N.texture).__webglTexture=te,J.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:xe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,te){let xe=J.get(N);xe.__webglFramebuffer=te,xe.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(N,te=0,xe=0){$=N,F=te,B=xe;let le=null,he=!1,Ye=!1;if(N){let Xe=J.get(N);if(Xe.__useDefaultFramebuffer!==void 0){O.bindFramebuffer(q.FRAMEBUFFER,Xe.__webglFramebuffer),W.copy(N.viewport),ee.copy(N.scissor),Ee=N.scissorTest,O.viewport(W),O.scissor(ee),O.setScissorTest(Ee),X=-1;return}else if(Xe.__webglFramebuffer===void 0)Me.setupRenderTarget(N);else if(Xe.__hasExternalTextures)Me.rebindTextures(N,J.get(N.texture).__webglTexture,J.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let bt=N.depthTexture;if(Xe.__boundDepthTexture!==bt){if(bt!==null&&J.has(bt)&&(N.width!==bt.image.width||N.height!==bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(N)}}let Ze=N.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ye=!0);let rt=J.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(rt[te])?le=rt[te][xe]:le=rt[te],he=!0):N.samples>0&&Me.useMultisampledRTT(N)===!1?le=J.get(N).__webglMultisampledFramebuffer:Array.isArray(rt)?le=rt[xe]:le=rt,W.copy(N.viewport),ee.copy(N.scissor),Ee=N.scissorTest}else W.copy(Ue).multiplyScalar(ie).floor(),ee.copy(qe).multiplyScalar(ie).floor(),Ee=Ke;if(xe!==0&&(le=k),O.bindFramebuffer(q.FRAMEBUFFER,le)&&O.drawBuffers(N,le),O.viewport(W),O.scissor(ee),O.setScissorTest(Ee),he){let Xe=J.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+te,Xe.__webglTexture,xe)}else if(Ye){let Xe=te;for(let Ze=0;Ze<N.textures.length;Ze++){let rt=J.get(N.textures[Ze]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ze,rt.__webglTexture,xe,Xe)}}else if(N!==null&&xe!==0){let Xe=J.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Xe.__webglTexture,xe)}X=-1};function Ni(N){let te=J.get(N);return(te.__readFormat!==N.format||te.__readType!==N.type)&&(te.__readFormat=N.format,te.__readType=N.type,te.__formatReadable=Te.textureFormatReadable(N.format),te.__typeReadable=Te.textureTypeReadable(N.type)),te}this.readRenderTargetPixels=function(N,te,xe,le,he,Ye,it,Xe=0){if(!(N&&N.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=J.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&it!==void 0&&(Ze=Ze[it],Array.isArray(Ze)&&(Ze=Ze[0])),Ze){O.bindFramebuffer(q.FRAMEBUFFER,Ze);try{let rt=N.textures[Xe],bt=rt.format,Ct=rt.type;N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Xe);let tt=Ni(rt);if(tt.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=N.width-le&&xe>=0&&xe<=N.height-he&&q.readPixels(te,xe,le,he,Ie.convert(bt),Ie.convert(Ct),Ye)}finally{let rt=$!==null?J.get($).__webglFramebuffer:null;O.bindFramebuffer(q.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(N,te,xe,le,he,Ye,it,Xe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=J.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&it!==void 0&&(Ze=Ze[it],Array.isArray(Ze)&&(Ze=Ze[0])),Ze)if(te>=0&&te<=N.width-le&&xe>=0&&xe<=N.height-he){O.bindFramebuffer(q.FRAMEBUFFER,Ze);let rt=N.textures[Xe],bt=rt.format,Ct=rt.type;N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Xe);let tt=Ni(rt);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ht),q.bufferData(q.PIXEL_PACK_BUFFER,Ye.byteLength,q.STREAM_READ),q.readPixels(te,xe,le,he,Ie.convert(bt),Ie.convert(Ct),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let hn=$!==null?J.get($).__webglFramebuffer:null;O.bindFramebuffer(q.FRAMEBUFFER,hn);let Wt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await jg(q,Wt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ht),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ye),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(ht),q.deleteSync(Wt),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,te=null,xe=0){let le=Math.pow(2,-xe),he=Math.floor(N.image.width*le),Ye=Math.floor(N.image.height*le),it=te!==null?te.x:0,Xe=te!==null?te.y:0;Me.setTexture2D(N,0),q.copyTexSubImage2D(q.TEXTURE_2D,xe,0,0,it,Xe,he,Ye),O.unbindTexture()},this.copyTextureToTexture=function(N,te,xe=null,le=null,he=0,Ye=0){let it,Xe,Ze,rt,bt,Ct,tt,ht,hn,Wt=N.isCompressedTexture?N.mipmaps[Ye]:N.image;if(xe!==null)it=xe.max.x-xe.min.x,Xe=xe.max.y-xe.min.y,Ze=xe.isBox3?xe.max.z-xe.min.z:1,rt=xe.min.x,bt=xe.min.y,Ct=xe.isBox3?xe.min.z:0;else{let Nt=Math.pow(2,-he);it=Math.floor(Wt.width*Nt),Xe=Math.floor(Wt.height*Nt),N.isDataArrayTexture?Ze=Wt.depth:N.isData3DTexture?Ze=Math.floor(Wt.depth*Nt):Ze=1,rt=0,bt=0,Ct=0}le!==null?(tt=le.x,ht=le.y,hn=le.z):(tt=0,ht=0,hn=0);let Ut=Ie.convert(te.format),vn=Ie.convert(te.type),nt;te.isData3DTexture?(Me.setTexture3D(te,0),nt=q.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(Me.setTexture2DArray(te,0),nt=q.TEXTURE_2D_ARRAY):(Me.setTexture2D(te,0),nt=q.TEXTURE_2D),O.activeTexture(q.TEXTURE0),O.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),O.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),O.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);let bn=O.getParameter(q.UNPACK_ROW_LENGTH),Lt=O.getParameter(q.UNPACK_IMAGE_HEIGHT),li=O.getParameter(q.UNPACK_SKIP_PIXELS),dn=O.getParameter(q.UNPACK_SKIP_ROWS),Ms=O.getParameter(q.UNPACK_SKIP_IMAGES);O.pixelStorei(q.UNPACK_ROW_LENGTH,Wt.width),O.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Wt.height),O.pixelStorei(q.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(q.UNPACK_SKIP_ROWS,bt),O.pixelStorei(q.UNPACK_SKIP_IMAGES,Ct);let wi=N.isDataArrayTexture||N.isData3DTexture,ot=te.isDataArrayTexture||te.isData3DTexture;if(N.isDepthTexture){let Nt=J.get(N),_n=J.get(te),ci=J.get(Nt.__renderTarget),Zt=J.get(_n.__renderTarget);O.bindFramebuffer(q.READ_FRAMEBUFFER,ci.__webglFramebuffer),O.bindFramebuffer(q.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let fn=0;fn<Ze;fn++)wi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,J.get(N).__webglTexture,he,Ct+fn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,J.get(te).__webglTexture,Ye,hn+fn)),q.blitFramebuffer(rt,bt,rt+it,bt+Xe,tt,ht,tt+it,ht+Xe,q.DEPTH_BUFFER_BIT,q.NEAREST);O.bindFramebuffer(q.READ_FRAMEBUFFER,null),O.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(he!==0||N.isRenderTargetTexture||J.has(N)){let Nt=J.get(N),_n=J.get(te);O.bindFramebuffer(q.READ_FRAMEBUFFER,P),O.bindFramebuffer(q.DRAW_FRAMEBUFFER,I);for(let ci=0;ci<Ze;ci++)wi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Nt.__webglTexture,he,Ct+ci):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Nt.__webglTexture,he),ot?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,_n.__webglTexture,Ye,hn+ci):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_n.__webglTexture,Ye),he!==0?q.blitFramebuffer(rt,bt,rt+it,bt+Xe,tt,ht,tt+it,ht+Xe,q.COLOR_BUFFER_BIT,q.NEAREST):ot?q.copyTexSubImage3D(nt,Ye,tt,ht,hn+ci,rt,bt,it,Xe):q.copyTexSubImage2D(nt,Ye,tt,ht,rt,bt,it,Xe);O.bindFramebuffer(q.READ_FRAMEBUFFER,null),O.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ot?N.isDataTexture||N.isData3DTexture?q.texSubImage3D(nt,Ye,tt,ht,hn,it,Xe,Ze,Ut,vn,Wt.data):te.isCompressedArrayTexture?q.compressedTexSubImage3D(nt,Ye,tt,ht,hn,it,Xe,Ze,Ut,Wt.data):q.texSubImage3D(nt,Ye,tt,ht,hn,it,Xe,Ze,Ut,vn,Wt):N.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ye,tt,ht,it,Xe,Ut,vn,Wt.data):N.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ye,tt,ht,Wt.width,Wt.height,Ut,Wt.data):q.texSubImage2D(q.TEXTURE_2D,Ye,tt,ht,it,Xe,Ut,vn,Wt);O.pixelStorei(q.UNPACK_ROW_LENGTH,bn),O.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Lt),O.pixelStorei(q.UNPACK_SKIP_PIXELS,li),O.pixelStorei(q.UNPACK_SKIP_ROWS,dn),O.pixelStorei(q.UNPACK_SKIP_IMAGES,Ms),Ye===0&&te.generateMipmaps===!0&&te.mipmapsAutoUpdate===!0&&q.generateMipmap(nt),O.unbindTexture()},this.initRenderTarget=function(N){J.get(N).__webglFramebuffer===void 0&&Me.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Me.setTextureCube(N,0):N.isData3DTexture?Me.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Me.setTexture2DArray(N,0):Me.setTexture2D(N,0),O.unbindTexture()},this.resetState=function(){F=0,B=0,$=null,O.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),n.unpackColorSpace=kt._getUnpackColorSpace()}};var H={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.5,halfLife:.07},slamShake:{amount:.12,time:.26,hz:24},slamFovKick:4,slamFovHalfLife:.12,objectiveTurnTime:.4,sustainHalfLife:.06,recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:14,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.32,slamSquashTime:.2,thudVolume:1,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:22.4,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:13,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,revPulse:.25,cutterReach:1.1,cutterAngle:50,cutTime:1.2,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfterKillsSmoothie:3,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8,trainerShare:0,trainerShareSmoothie:.5,trainerShareBoss:.4},trainer:{health:130,scaleW:1.2,scaleH:1.1,runSpeed:6.2,turnRate:12,maxAlive:3,swingRange:1.6,swingSlack:.4,swingArc:120,windup:.5,lockTime:.15,swingTime:.3,recover:.8,swingGap:.6,damage:30,tobbleDamage:30,knockback:1.6,knockTime:.35,staggerTime:.8,preferDoc:.6,retargetTime:.4,repathTime:.5,avoidRadius:1.8,avoidWeight:1.5,stuckTime:.6,diveChance:.4,barkChance:.5},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,revVolume:.35,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.05,arcDot:.06,coverGlow:1,coverGlowOpacity:.9,coverGlowFade:.15,coverGlowLength:3,coverGlowHz:2.5,slamHitstop:.06,hitstopScale:.05,slamDust:8,slamDebris:6,rumble:1,slamRumble:.8,slamRumbleTime:.18,blindDrift:6,blindDriftHz:.8,blindDriftRamp:.5,blindShake:2,blindShakeAmp:.012,blindFlail:.35,blindFlailHz:9,motorVolume:.35,motorRevTime:.8,revShake:.006,revRumble:.3,revSparkEvery:.07,revSparkCount:2,discScale:1.9,discBlur:.4,grindShake:.03,grindZoom:6,grindPull:.35,grindGelCount:6,grindSparkCount:3,executeJitter:.05,grindRumble:.7,hint:1,hintTime:4,hintFade:.4,hintCoverDelay:6,reloadBarScale:1.6,reloadBarGap:28,reloadPulseHz:3,reloadAlertScale:1.5,reloadFlashScale:1.8,reloadTickVolume:.3,reloadTickLead:.3,reloadTickSlow:.25,reloadTickFast:.06,tacComHz:1.5},run:{fadeOut:.6,blackHold:.25,fadeIn:.6,gateReach:1.6,hoursTime:6,gateOpenTime:.8,attractSpeed:.12,attractMargin:6,attractHeight:10},boss:{health:4500,scale:2,crouchY:.5,headMult:2,phase2At:.66,phase3At:.33,popTime:.5,telegraphTime:1,burstTime:2.4,rate:5,damage:6,spread:2.5,aimLag:.25,muzzleUp:1.35,coverWaitMin:1.2,coverWaitMax:2.2,shiftTime:.8,lobEvery:2,lobWindup:1.2,lobFlight:1.5,lobRecover:.7,lobRadius:2.5,lobDamage:32,lobTobbleDamage:32,lobFalloff:.5,retreatSpeed:4.5,returnSpeed:4.5,minHide:2,fastTelegraph:.8,fastBurstTime:2,fastRate:7,fastWaitMin:.5,fastWaitMax:1.1,offerGap:.4},ending:{deathDelay:2.2,deskReach:2.6,holdTime:1,card1Time:2.2,card2Time:6,card3Time:3.4,skipLock:.7,finalLock:1.2}};function Du({step:t,render:e,before:n,timeScale:i,hz:s=60,maxSteps:r=5}){let o=1/s,a=0,l=0,c=null,h=!1;function d(g){if(!(g>0)||!Number.isFinite(g))return;n&&n(g);let p=i?i(g):1;(!(p>=0)||!Number.isFinite(p))&&(p=1),a+=g*p;let v=0;for(;a>=o&&v<r;)t(o),a-=o,v++;a>=o&&(a=0),e(Math.min(a/o,1-Number.EPSILON),g,p)}function u(g){if(h){try{c!==null&&d((g-c)/1e3)}catch(p){throw y(),p}c=g,h&&(l=requestAnimationFrame(u))}}function f(){document.visibilityState==="visible"&&(c=null)}function m(){h||(h=!0,c=null,document.addEventListener("visibilitychange",f),l=requestAnimationFrame(u))}function y(){h=!1,cancelAnimationFrame(l),document.removeEventListener("visibilitychange",f)}return{advance:d,start:m,stop:y}}var Hp=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause","tacCom","equipKb","controls"]),j2={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},J2={0:"fire",2:"aim"},Q2=Object.freeze({0:"cover",1:"melee",2:"interact",3:"objective",4:"tacCom",5:"reload",6:"aim",7:"fire",8:"controls",9:"pause",12:"equipKb",13:"weapon3",14:"weapon2",15:"weapon1"}),zv=Q2,Hv={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},eA=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function Gp(t){if(!t||typeof t.tagName!="string")return!1;let e=t.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!eA.has(String(t.type||"text").toLowerCase()):!!t.isContentEditable}function Gv(t){return j2[t]||null}function Vv(t){return J2[t]||null}function ta(){let t={};for(let e of Hp)t[e]=!1;return t}function Wv(t,e,n=.15){let i=Math.hypot(t,e);if(i<n)return[0,0];let s=Math.min(1,(i-n)/(1-n))/i;return[t*s,e*s]}function tA(t){if(!t||!t.connected)return{ok:!1,reason:"none"};if(t.mapping!=="standard"||!t.buttons||t.buttons.length<16||!t.axes||t.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,n]=Wv(t.axes[0],t.axes[1]),[i,s]=Wv(t.axes[2],t.axes[3]),r=ta();for(let o in zv){let a=t.buttons[o];r[zv[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:n,lookX:i,lookY:s,held:r}}function nA(t){t.downCodes&&t.downCodes.clear(),t.downButtons&&t.downButtons.clear(),t.latched&&t.latched.clear(),t.held=t.held||{};for(let e of Hp)t.held[e]=!1;for(let e in t.held)t.held[e]=!1;return t.lookDX=0,t.lookDY=0,t.lookX=0,t.lookY=0,t.moveX=0,t.moveY=0,t}function Nu(t){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:ta(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:n,downButtons:i,latched:s}=e,r="kbm",o="none",a=ta();t.tabIndex<0&&(t.tabIndex=0);let l=()=>document.pointerLockElement===t,c=()=>l()||document.activeElement===t;function h(){nA(e)}function d(S){if(Gp(S.target))return;let T=Gv(S.code);(T||S.code in Hv)&&(c()&&(S.code==="Tab"||S.code==="Space")&&S.preventDefault(),r="kbm",!S.repeat&&!n.has(S.code)&&T&&s.add(T),n.add(S.code))}function u(S){n.delete(S.code)}function f(S){S.target===t&&t.focus();let T=Vv(S.button);T&&(r="kbm",i.has(S.button)||s.add(T),i.add(S.button))}function m(S){i.delete(S.button)}function y(S){l()&&(r="kbm",e.lookDX+=S.movementX||0,e.lookDY+=S.movementY||0)}function g(S){!c()||!S.deltaY||(r="kbm",s.add(S.deltaY>0?"weaponNext":"weaponPrev"),S.preventDefault())}function p(S){S.preventDefault()}function v(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",m),window.addEventListener("blur",h),document.addEventListener("mousemove",y),document.addEventListener("pointerlockchange",v),t.addEventListener("mousedown",f),t.addEventListener("wheel",g,{passive:!1}),t.addEventListener("contextmenu",p);function _(){let S=[];try{S=navigator.getGamepads&&navigator.getGamepads()||[]}catch{S=[]}let T=null;for(let b of S)if(b&&b.connected){T=b;break}let x=tA(T);return o=x.ok?T.id:x.reason==="none"?"none":"unrecognised controller",x}function M(){let S={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:ta(),pressed:ta()};e.lookDX=0,e.lookDY=0;for(let b of n){let C=Gv(b);C&&(S.held[C]=!0);let L=Hv[b];L&&(S.moveX+=L[0],S.moveY+=L[1])}for(let b of i){let C=Vv(b);C&&(S.held[C]=!0)}let T=Math.hypot(S.moveX,S.moveY);T>1&&(S.moveX/=T,S.moveY/=T);for(let b of s)S.pressed[b]=!0;s.clear();let x=_();if(x.ok){S.lookX=x.lookX,S.lookY=x.lookY;let b=x.moveX!==0||x.moveY!==0||x.lookX!==0||x.lookY!==0;for(let L of Hp)x.held[L]&&(b=!0,S.held[L]=!0,a[L]||(S.pressed[L]=!0));a=x.held,S.moveX+=x.moveX,S.moveY+=x.moveY;let C=Math.hypot(S.moveX,S.moveY);C>1&&(S.moveX/=C,S.moveY/=C),b&&(r="pad")}else a=ta();return S}return{poll:M,requestLock(){try{let S=t.requestPointerLock&&t.requestPointerLock();S&&typeof S.catch=="function"&&S.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Yv(t,e,n=14){let i=t;return e>20?i-=.1:e<n&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var iA=2e3,Xv=1e4,sA=8e4;function qv({startMs:t=0,scale:e=1}={}){let n=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-t<iA||(i+=Math.min(h,100),s++,s<60||i<1e3))return n;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=Yv(n,u,Math.max(14,1.1*r));if(f>n){if(d<l)return n;o=d}else f<n&&(o!==null&&d-o<Xv&&(a=a===0?Xv:Math.min(a*2,sA),l=d+a),o=null);return n=f,n}return{sample:c,scale:()=>n}}var z=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Vp={viewportHeight:{value:1080}};function vi(t){t.getAttribute("normal")||t.computeVertexNormals();let e=t.getAttribute("position"),n=t.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=n.getX(l),h[1]+=n.getY(l),h[2]+=n.getZ(l)}let a=t.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Tt(new Float32Array(i*3),3),t.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=n.getX(l),d=n.getY(l),u=n.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,t}var rA=`
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
`,oA=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function aA({px:t=H.outlinePx,color:e=z.ink,outlineNormal:n=!1}={}){return new Xn({name:"outline",uniforms:{px:{value:t},inkColor:{value:new Je(e)},viewportHeight:Vp.viewportHeight},defines:n?{USE_OUTLINE_NORMAL:""}:{},vertexShader:rA,fragmentShader:oA,side:wn})}function lA(){}var $v=new Map;function cA(t,e,n){let i=t+"|"+new Je(e).getHexString()+"|"+n,s=$v.get(i);return s||(s=aA({px:t,color:e,outlineNormal:n}),$v.set(i,s)),s}function Bn(t,{px:e=H.outlinePx}={}){let n=!!t.geometry.getAttribute("outlineNormal"),i=cA(e,z.ink,n),s=new at(t.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=lA,t.add(s),s}function Wp(t,e){t.traverse(n=>{n.userData.isOutline&&(n.visible=e)})}function hA(t,e,n,i){let s=Math.max(1,Math.floor(t)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(n>0?n:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Ou(t,e){let n=new Iu({canvas:t,context:e,antialias:!0,powerPreference:"high-performance"});n.outputColorSpace=pn;let i=qv({startMs:performance.now()});function s(){let o=hA(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return n.setPixelRatio(o.pixelRatio),n.setSize(o.width,o.height,!1),Vp.viewportHeight.value=t.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:n,resize:s,frameDone:r,scale:i.scale}}var Os={lightDir:{value:new G(...H.lightDir).normalize()},shadowTint:{value:new Je(z.shadowTint)},bandEdge:{value:.15},shadowLift:{value:H.shadowLift}},uA=`
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
`,dA=`
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
`;function Pt({color:t="#ffffff",vertexColors:e=!1,shadowMix:n=.55,rim:i=.25,rimColor:s="#ffffff"}={}){return new Xn({name:"toon",uniforms:{baseColor:{value:new Je(t)},shadowMix:{value:n},rim:{value:i},rimColor:{value:new Je(s)},lightDir:Os.lightDir,shadowTint:Os.shadowTint,bandEdge:Os.bandEdge,shadowLift:Os.shadowLift},vertexShader:uA,fragmentShader:dA,vertexColors:e})}var fA=400,pA=[-.45,.22,-1],mA=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,gA=`
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
`;function Fu({planetDir:t=pA}={}){let e=r=>new Je(r),n=new Xn({name:"sky",uniforms:{deep:{value:e(z.nebulaDeep)},hot:{value:e(z.nebulaHot)},pink:{value:e(z.hotPink)},lilac:{value:e(z.lilac)},ink:{value:e(z.ink)},planetColor:{value:e(z.planet)},shadowTint:Os.shadowTint,shadowLift:Os.shadowLift,bandEdge:Os.bandEdge,lightDir:Os.lightDir,planetDir:{value:new G(...t).normalize()},time:{value:0}},vertexShader:mA,fragmentShader:gA,side:wn,depthWrite:!1}),i=new at(new an(fA,48,24),n);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){n.uniforms.time.value=r}return{mesh:i,update:s}}function Xt(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},o={},a=t[0].morphTargetsRelative,l=new Bt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==t[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(n)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Kv(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let m=Kv(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Kv(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new e(r),a=new Tt(o,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<n;m++){let y=h.getComponent(u,m);a.setComponent(u+d,m,y)}}else o.set(h.array,l);l+=h.count*n}return s!==void 0&&(a.gpuType=s),a}function jv(t,e=1e-4){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),s=t.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(t.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),m=Math.pow(10,f),y=u*m;for(let p=0;p<r;p++){let v=i?i.getX(p):p,_="";for(let M=0,S=a.length;M<S;M++){let T=a[M],x=t.getAttribute(T),b=x.itemSize;for(let C=0;C<b;C++)_+=`${Math.trunc(x[d[C]](v)*m+y)},`}_ in n?h.push(n[_]):(l.push(v),n[_]=o,h.push(o),o++)}let g=t.clone();for(let p in t.attributes)g.setAttribute(p,Zv(t.attributes[p],l,c));for(let p in t.morphAttributes)g.morphAttributes[p]=t.morphAttributes[p].map(v=>Zv(v,l,c));return g.setIndex(h),g}function Zv(t,e,n=new Map){let i=t.isInterleavedBufferAttribute,s=i?t.data:t,r=i?s.stride:t.itemSize,o=i?n.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new t.constructor(l,t.itemSize,t.normalized,t.meshPerAttribute),o.setUsage(s.usage),i&&n.set(s,o)}let a=i?new t.constructor(o,t.itemSize,t.offset,t.normalized):o;return a.name=t.name,i||(a.gpuType=t.gpuType),a}function na(t){let e=t>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Jv(t,e,n=.03,i=.04){let s=t.getAttribute("position"),r=t.getAttribute("normal");t.computeBoundingBox();let o=t.boundingBox,a=o.getSize(new G),l=o.getCenter(new G),c=a.length(),h=na(e*7919+13>>>0),d=[];for(let p=0;p<8;p++)d.push(h()*2-1);let u=Math.min(n*c,i)*.99/Math.sqrt(3),f=(p,v)=>v>1e-9?2*p/v:0,m=[a.x,a.y,a.z].map(p=>p>1e-9?2/p:0),y=new yt,g=new G;for(let p=0;p<s.count;p++){let v=f(s.getX(p)-l.x,a.x),_=f(s.getY(p)-l.y,a.y),M=f(s.getZ(p)-l.z,a.z),S=(_+1)/2,T=(d[0]*_+d[1]*v*_)/2,x=(d[2]*v+d[3]*M)/2*S,b=(d[4]*_+d[5]*M*_)/2;if(r){let C=[d[1]*_/2,(d[0]+d[1]*v)/2,0],L=[d[2]/2*S,(d[2]*v+d[3]*M)/2*.5,d[3]/2*S],R=[0,(d[4]+d[5]*M)/2,d[5]*_/2];y.set(1+u*C[0]*m[0],u*C[1]*m[1],u*C[2]*m[2],u*L[0]*m[0],1+u*L[1]*m[1],u*L[2]*m[2],u*R[0]*m[0],u*R[1]*m[1],1+u*R[2]*m[2]),y.invert().transpose(),g.set(r.getX(p),r.getY(p),r.getZ(p)).applyMatrix3(y).normalize(),r.setXYZ(p,g.x,g.y,g.z)}s.setXYZ(p,s.getX(p)+u*T,s.getY(p)+u*x,s.getZ(p)+u*b)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),t.computeBoundingBox(),t.computeBoundingSphere(),t}var Xp=null;function vA(){return Xp||(Xp=Pt({vertexColors:!0})),Xp}var qp=(t,e,n)=>new Je(t).lerp(new Je(e),n),$p=(t,e=.3)=>qp(t,"#ffffff",e),Uu=(t,e=.2)=>qp(t,z.shadowTint,e),Qv=new Et,ex=new jn,tx=new si,xA=new G,yA=new G;function or(t=1,e=.02,n="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let m=u.wonk===void 0?e:u.wonk;m>0&&Jv(f,t*131+s,m),s++;let y=f.getAttribute("normal"),g=new Float32Array(y.count*3);for(let p=0;p<y.count;p++){let v=typeof d=="function"?d(y.getX(p),y.getY(p),y.getZ(p)):d;g[p*3]=v.r,g[p*3+1]=v.g,g[p*3+2]=v.b}return f.setAttribute("color",new Tt(g,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),tx.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),ex.setFromEuler(tx),Qv.compose(xA.set(u.x||0,u.y||0,u.z||0),ex,yA.set(1,1,1)),f.applyMatrix4(Qv),i.push(f),f}function o(h,d={}){let u=d.top||$p(h),f=d.side||Uu(h,.22),m=Uu(h,.4),y=new Je(h);return(g,p,v)=>p>.5?u:p<-.5?m:Math.abs(g)>.5?f:v>0?y:m}function a(h,d,u,f,m={}){return r(new gt(h,d,u),o(f,m),m)}function l(h,d,u,f,m,y,g,p={}){return a(d-h,f-u,y-m,g,{...p,x:(h+d)/2,y:(u+f)/2,z:(m+y)/2})}function c(h=0){let d=Xt(i,!1);if(!d)throw new Error(`${n}: parts have different attributes and cannot be merged`);return h>0&&Jv(d,t,h),vi(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function ar(t){let e=new xt,n=new at(t,vA());return Bn(n),e.add(n),e}var Fs=t=>()=>new Je(t);function Bu({w:t,d:e,tile:n=1,colors:i=[z.cream,z.tealLight]}){let s=or(1,0,"floor");s.span(-t/2,t/2,-.15,-.002,-e/2,e/2,z.lilac,{top:new Je(z.lilac)});let o=Math.round(t/n),a=Math.round(e/n);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new ts(n,n);h.rotateX(-Math.PI/2),s.add(h,Fs(i[(l+c)%2]),{wonk:0,x:-t/2+(l+.5)*n,y:0,z:-e/2+(c+.5)*n})}return ar(s.finish())}function Kp({w:t,h:e,color:n=z.cream,stripe:i=z.hotPink,opening:s=null,seed:r=2}){let o=or(r,0,"wall"),a=.2,l=a/2,c=-t/2,h=t/2,d=-.3,u=new Wo;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let p=new zr,v=s.x-s.w/2,_=s.x+s.w/2;p.moveTo(v,s.y),p.lineTo(v,s.y+s.h),p.lineTo(_,s.y+s.h),p.lineTo(_,s.y),p.closePath(),u.holes.push(p)}let f=new yl(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(n),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,z.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,z.teal);let m=.5,y=.8;return s&&s.y<y&&s.y+s.h>m?(o.span(c,s.x-s.w/2,m,y,l-.01,l+.03,i),o.span(s.x+s.w/2,h,m,y,l-.01,l+.03,i)):o.span(c,h,m,y,l-.01,l+.03,i),ar(o.finish(.006))}function bA(t,e,n,i){let s=g=>Math.min(2048,Math.max(64,Math.round(g))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=t.split(" "),d=[[t]];for(let g=1;g<h.length;g++)d.push([h.slice(0,g).join(" "),h.slice(g).join(" ")]);let u=null;for(let g of d){let p=Math.max(...g.map(_=>l.measureText(_).width)),v=Math.min(r*.88*100/p,o*.8/(g.length*1.08));(!u||v>u.size)&&(u={lines:g,size:v})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=n,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,m=o/2-(u.lines.length-1)*f/2;u.lines.forEach((g,p)=>{let v=m+p*f;l.fillStyle=z.ink,l.fillText(g,r/2+u.size*.05,v+u.size*.06),l.fillStyle=n,l.fillText(g,r/2,v)});let y=new Br(a);return y.colorSpace=pn,y.anisotropy=8,y}function Us({text:t,w:e,h:n,bg:i=z.hotPink,fg:s=z.cream,tilt:r=.04,seed:o=3}){let c=or(o,0,"sign");c.box(e,n,.14,s,{wonk:0});let h=ar(c.finish()),d=e-.14*2,u=n-.14*2,f=new at(new ts(d,u),new $t({map:bA(t,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function nx({w:t,h:e,seed:n=4}){let i=or(n,.012,"window"),s=.15,r=.34;return i.span(-t/2,-t/2+s,0,e,-r/2,r/2,z.teal),i.span(t/2-s,t/2,0,e,-r/2,r/2,z.teal),i.span(-t/2+s,t/2-s,e-s,e,-r/2,r/2,z.teal),i.span(-t/2+s,t/2-s,0,s,-r/2,r/2,z.teal),i.span(-t/2-.2,t/2+.2,-.08,.06,-r/2,r/2+.28,z.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,z.cream),i.span(-t/2+s,t/2-s,e/2-.04,e/2+.04,-.04,.04,z.cream),ar(i.finish(.006))}function Fl(t,e,n,i,s,r){let o=new Vr(.16,.05,8,20);t.add(o,Fs(z.planet),{wonk:.04,x:e,y:n,z:i,rx:-Math.PI/2+s,ry:r})}function ix({w:t,h:e,name:n,signColor:i=z.hotPink,seed:s=5}){let r=or(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=qp(z.glorpPurple,z.ink,.7);r.span(-t/2+a,t/2-a,0,c,-o/2,-o/2+.1,h),r.span(-t/2+a,t/2-a,1.15,1.22,-o/2,-o/2+.4,z.lilac);for(let p of[-1,1]){let v=p*(t/2-a/2);r.span(v-a/2,v+a/2,0,c,-o/2,o/2,z.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,z.teal)}r.span(-t/2,t/2,c,l,-o/2,o/2,z.teal);let d=t-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,z.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,z.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,z.cream),Fl(r,-.9,1.01,.4,.1,.4),Fl(r,-.2,1.01,.5,-.1,-.3),Fl(r,.6,1.01,.38,.12,.9),Fl(r,1.2,1.01,.52,0,.1);let u=10,f=(t-.1)/u,m=.42;for(let p=0;p<u;p++){let v=p%2?z.cream:i,_=-t/2+.05+(p+.5)*f;r.box(f,.08,.95,v,{x:_,y:c-.02,z:o/2+.35,rx:m,top:$p(v,.2)}),r.box(f,.22,.06,v,{x:_,y:c-.24,z:o/2+.8,rx:.1})}let y=ar(r.finish(.006)),g=Us({text:n,w:t-.7,h:1.15,bg:i,fg:z.cream,seed:s+1});return g.position.set(0,c+.7,o/2+.01),y.add(g),y}function sx({w:t=2,d:e=1,h:n=.9,color:i=z.teal,seed:s=7}={}){let r=or(s,.018,"kiosk");r.span(-t/2+.03,t/2-.03,0,.16,-e/2+.03,e/2-.03,z.lilac),r.span(-t/2,t/2,.16,n-.08,-e/2,e/2,i),r.span(-t/2-.07,t/2+.07,n-.08,n,-e/2-.07,e/2+.07,z.cream);let o=4,a=(t-.3)/o;for(let c=0;c<o;c++){let h=c%2?z.cream:z.hotPink;r.box(a-.04,n-.45,.05,h,{x:-t/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,z.glorpPurple,{x:-.55,y:n+.14,z:-.1}),r.box(.3,.14,.04,z.gel,{x:-.55,y:n+.28,z:.07,rx:-.5,wonk:0}),Fl(r,.45,n+.06,.05,.1,.5);let l=ar(r.finish(.006));return l.userData.footprint={w:t+.14,d:e+.14},l}function rx({w:t=1.8,seed:e=11}={}){let n=or(e,.02,"bench"),i=.5;n.box(t,.1,i,z.lilac,{y:.46}),n.box(t,.42,.08,z.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])n.box(.1,.46,i-.06,z.teal,{x:r*(t/2-.2),y:.23}),n.box(.08,.5,.08,z.teal,{x:r*(t/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=ar(n.finish(.006));return s.userData.footprint={w:t,d:i},s}function _A(t,e,n){let i=new gt(.035,t,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+t/2)/t;s.setXYZ(r,s.getX(r)+n*o*o,s.getY(r)+t/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function ox({seed:t=21}={}){let e=or(t,.02,"planter"),n=na(t);e.add(new Jt(.42,.32,.55,16),Fs(z.teal),{y:.275}),e.add(new Jt(.47,.44,.12,16),Fs(z.hotPink),{y:.6}),e.add(new Jt(.4,.4,.04,16),Fs(Uu(z.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Uu(z.planet,.15);for(let l=0;l<6;l++)e.add(new Jt(.06-l*.004,.07-l*.004,.34,8),Fs(l%2?$p(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+n()*.3,h=l%2?.95+n()*.25:1.45+n()*.25,d=new Et().makeTranslation(i,s,0).multiply(new Et().makeRotationY(c)).multiply(new Et().makeRotationZ(-h));e.add(_A(.95,.24,l%2?.22:.4),Fs(l%2?z.gel:z.teal),{m:d,wonk:.03})}e.add(new an(.1,10,8),Fs(z.planet),{x:i,y:s-.05,z:.08}),e.add(new an(.1,10,8),Fs(z.planet),{x:i+.07,y:s-.1,z:-.07});let a=ar(e.finish());return a.userData.footprint={w:.95,d:.95},a}var Yp=null;function zu({rx:t,rz:e,opacity:n=.35}){let r=new Je(z.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,n];for(let d=1;d<=8;d++){let u=d/8,f=n*(1-u*u*(3-2*u));for(let m=0;m<28;m++){let y=m/28*Math.PI*2;o.push(Math.cos(y)*t*u,0,Math.sin(y)*e*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let m=0;m<28;m++){let y=(m+1)%28;l.push(u+m,u+y,f+m,u+y,f+y,f+m)}}let c=new Bt;c.setAttribute("position",new _t(o,3)),c.setAttribute("color",new _t(a,4)),c.setIndex(l),Yp||(Yp=new $t({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new at(c,Yp);return h.name="blobShadow",h.position.y=.012,h}var Ul=8,Hu=Ul/2,Zp=.2;function ax(){let t=new xt;t.add(Bu({w:Ul,d:Ul}));let e=Kp({w:Ul+Zp*2,h:4});e.position.set(0,0,-Hu-Zp/2),t.add(e);let n=1.3,i=ix({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:z.hotPink});i.position.set(n,0,-Hu+.25),t.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=Kp({w:Ul,h:4,color:"#f1e6ff",opening:s});r.position.set(-Hu-Zp/2,0,0),r.rotation.y=Math.PI/2;let o=nx({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),t.add(r);let a=sx({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=rx({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=ox({seed:21});c.position.set(-2.95,0,-2.9),t.add(a,l,c);let h=(d,u,f,m,y=0)=>{let g=zu({rx:f,rz:m,opacity:.7});g.position.x=d,g.position.z=u,g.rotation.y=y,t.add(g)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(n,-Hu+.9,2.7,.8),{group:t,spawn:[0,0,0],update(){}}}function En(t,e,n,i){if(!(n>0)||!(i>0))return n>0||(t.x=e,t.v=0),t;let s=4*Math.LN2/n/2,r=t.x-e,o=t.v+r*s,a=Math.exp(-s*i);return t.x=a*(r+o*i)+e,t.v=a*(t.v-o*s*i),t}function jp(t,e,n,i,s,r){let o=n+i,a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],f=e[1],m=e[2];h>d&&(h=d,u=t[0]+a*h,f=t[1]+l*h,m=t[2]+c*h);let y=h>o?h/o:1;if(h>=o){let b=h*(o>0?n/o:.5);return lx(r,t[0]+a*b,t[1]+l*b,t[2]+c*b,u,f,m,y)}let g=Math.max(h,1e-6),p=Math.min(Math.max((g*g+n*n-i*i)/(2*g),-n),n),v=Math.sqrt(Math.max(n*n-p*p,0)),_=s[0],M=s[1],S=s[2],T=_*a+M*l+S*c;_-=a*T,M-=l*T,S-=c*T;let x=Math.hypot(_,M,S);return x<1e-6&&(Math.abs(a)<.9?(_=0,M=c,S=-l):(_=-c,M=0,S=a),x=Math.hypot(_,M,S)||1),_/=x,M/=x,S/=x,lx(r,t[0]+a*p+_*v,t[1]+l*p+M*v,t[2]+c*p+S*v,u,f,m,y)}function lx(t,e,n,i,s,r,o,a){if(!t)return{mid:[e,n,i],end:[s,r,o],stretch:a};let l=t.mid,c=t.end;return l[0]=e,l[1]=n,l[2]=i,c[0]=s,c[1]=r,c[2]=o,t.stretch=a,t}var cx=[.65,1.2];function Jp({radius:t=.06,rings:e=8,sides:n=8,color:i="#ffffff"}={}){let s=e+1,r=cx.length,o=s*n,a=[o,o+r*n+1],l=o+2*(r*n+1),c=[],h=(fe,Ae,Z)=>{for(let de=0;de<n;de++){let pe=(de+1)%n,De=fe+de,Ne=fe+pe,q=Ae+de,we=Ae+pe;Z?c.push(De,q,Ne,Ne,q,we):c.push(De,Ne,q,Ne,we,q)}};for(let fe=0;fe<e;fe++)h(fe*n,(fe+1)*n,!1);for(let fe=0;fe<2;fe++){let Ae=fe===0,Z=fe===0?0:e*n;for(let pe=0;pe<r;pe++){let De=a[fe]+pe*n;h(Z,De,Ae),Z=De}let de=a[fe]+r*n;for(let pe=0;pe<n;pe++){let De=Z+pe,Ne=Z+(pe+1)%n;Ae?c.push(De,de,Ne):c.push(De,Ne,de)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Bt,m=new Tt(d,3),y=new Tt(u,3);m.setUsage(Jo),y.setUsage(Jo),f.setAttribute("position",m),f.setAttribute("normal",y),f.setIndex(c);let g=new at(f,Pt({color:i}));g.name="limb";let p=new ri(new G,t*2);f.boundingSphere=p,Bn(g);let v=new Float64Array(n),_=new Float64Array(n);for(let fe=0;fe<n;fe++)v[fe]=Math.cos(fe/n*Math.PI*2),_[fe]=Math.sin(fe/n*Math.PI*2);let M=0,S=-1,T=0,x=1,b=0,C=0,L=0,R=0,w=1,k=0,P=0,I=0,F=0,B=0,$=0,X=0,j=0,W=0,ee=0,Ee=0,Q=0,re=0,_e=0,Oe=0,ie=0,Ce=0,He=0;function Ue(fe,Ae,Z,de,pe,De,Ne,q,we,Ve,Te,O,K,J,Me,D){for(let E=0;E<n;E++){let V=v[E]*De+_[E]*we,oe=v[E]*Ne+_[E]*Ve,ne=v[E]*q+_[E]*Te,ve=(fe+E)*3;d[ve]=Ae+V*pe,d[ve+1]=Z+oe*pe,d[ve+2]=de+ne*pe,u[ve]=V*Me+O*D,u[ve+1]=oe*Me+K*D,u[ve+2]=ne*Me+J*D}}let qe=!1,Ke=1,ge=0,Pe=0;function ye(fe,Ae,Z,de=1){let pe=t/Math.sqrt(de>1?de:1),De=2*Ae[0]-(fe[0]+Z[0])/2,Ne=2*Ae[1]-(fe[1]+Z[1])/2,q=2*Ae[2]-(fe[2]+Z[2])/2,we=fe[0],Ve=fe[1],Te=fe[2],O=Z[0],K=Z[1],J=Z[2],Me=(Ae[1]-Ve)*(J-Ae[2])-(Ae[2]-Te)*(K-Ae[1]),D=(Ae[2]-Te)*(O-Ae[0])-(Ae[0]-we)*(J-Ae[2]),E=(Ae[0]-we)*(K-Ae[1])-(Ae[1]-Ve)*(O-Ae[0]),V=Math.hypot(Me,D,E),oe=Ae[0]-we,ne=Ae[1]-Ve,ve=Ae[2]-Te,Re=Math.hypot(oe,ne,ve),se=O-Ae[0],ae=K-Ae[1],Le=J-Ae[2],Y=!1;V>1e-4*Re*Math.hypot(se,ae,Le)&&V>1e-12?(Me/=V,D/=V,E/=V,qe&&Me*Ke+D*ge+E*Pe<0&&(Me=-Me,D=-D,E=-E),Y=!0):Re>1e-9&&oe*se+ne*ae+ve*Le<0&&(De=(we+O)/2,Ne=(Ve+K)/2,q=(Te+J)/2);let ue=(we+De+O)/3,ce=(Ve+Ne+K)/3,ke=(Te+q+J)/3,Ie=Math.max(Math.hypot(we-ue,Ve-ce,Te-ke),Math.hypot(De-ue,Ne-ce,q-ke),Math.hypot(O-ue,K-ce,J-ke));p.center.set(ue,ce,ke),p.radius=Ie+t*1.5+.02;for(let Se=0;Se<s;Se++){let We=Se/e,st=1-We,be=st*st,ze=2*st*We,$e=We*We,Fe=be*we+ze*De+$e*O,ct=be*Ve+ze*Ne+$e*K,It=be*Te+ze*q+$e*J,et=2*st*(De-we)+2*We*(O-De),St=2*st*(Ne-Ve)+2*We*(K-Ne),pt=2*st*(q-Te)+2*We*(J-q),Ht=Math.hypot(et,St,pt);if(Ht>1e-9?(M=et/Ht,S=St/Ht,T=pt/Ht):Se===0&&(M=0,S=-1,T=0),Se===0){Y?(x=Me,b=D,C=E):qe?(x=Ke,b=ge,C=Pe):(x=1,b=0,C=0);let zt=x*M+b*S+C*T;x-=M*zt,b-=S*zt,C-=T*zt;let Kt=Math.hypot(x,b,C);Kt<1e-6&&(Math.abs(M)<.9?(x=0,b=T,C=-S):(x=-T,b=0,C=M),Kt=Math.hypot(x,b,C)||1),x/=Kt,b/=Kt,C/=Kt,Ke=x,ge=b,Pe=C,qe=!0}else{let zt=x*M+b*S+C*T;x-=M*zt,b-=S*zt,C-=T*zt;let Kt=Math.hypot(x,b,C);Kt<1e-6&&(Math.abs(M)<.9?(x=0,b=T,C=-S):(x=-T,b=0,C=M),Kt=Math.hypot(x,b,C)||1),x/=Kt,b/=Kt,C/=Kt}L=S*C-T*b,R=T*x-M*C,w=M*b-S*x,Ue(Se*n,Fe,ct,It,pe,x,b,C,L,R,w,0,0,0,1,0),Se===0&&(k=M,P=S,I=T,F=x,B=b,$=C,X=L,j=R,W=w),Se===s-1&&(ee=M,Ee=S,Q=T,re=x,_e=b,Oe=C,ie=L,Ce=R,He=w)}for(let Se=0;Se<2;Se++){let We=Se===0?-1:1,st=Se===0?we:O,be=Se===0?Ve:K,ze=Se===0?Te:J,$e=Se===0?k:ee,Fe=Se===0?P:Ee,ct=Se===0?I:Q,It=Se===0?F:re,et=Se===0?B:_e,St=Se===0?$:Oe,pt=Se===0?X:ie,Ht=Se===0?j:Ce,zt=Se===0?W:He,Kt=$e*We,dt=Fe*We,Dt=ct*We;for(let sn=0;sn<r;sn++){let Vt=cx[sn],en=Math.cos(Vt),_s=Math.sin(Vt);Ue(a[Se]+sn*n,st+Kt*pe*_s,be+dt*pe*_s,ze+Dt*pe*_s,pe*en,It,et,St,pt,Ht,zt,Kt,dt,Dt,en,_s)}let gn=(a[Se]+r*n)*3;d[gn]=st+Kt*pe,d[gn+1]=be+dt*pe,d[gn+2]=ze+Dt*pe,u[gn]=Kt,u[gn+1]=dt,u[gn+2]=Dt}m.needsUpdate=!0,y.needsUpdate=!0}return{mesh:g,set:ye}}var Kr=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),MA=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),Gu=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Qp=.04,wA=9;function Vu(t,e){let n=Math.sin(t*12.9898+e*78.233)*43758.5453;return(n-Math.floor(n))*Math.PI*2}function SA(t,e,n=[0,0]){return n[0]=.05*Math.sin(1.3*t+Vu(e,1))+.03*Math.sin(2.1*t+Vu(e,2)),n[1]=.04*Math.sin(1.7*t+Vu(e,3))+.02*Math.sin(2.6*t+Vu(e,4)),n}var TA=(t,e)=>Math.min(t*2,1)*Math.max(e,0),Bl=16,hx=Bl+1,rs=11,lr=4,Wu=13,EA=.07,AA=t=>{let e=t<0?0:t>1?1:t;return e*e*(3-2*e)};function ux({eyeRadius:t=.1,eyeSpacing:e=.26,eyeY:n=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=z.ink,fixedSmile:h=0,eyeColor:d=z.eyeWhite,eyeGlow:u=!1}={}){let f=t,m=e/2,y=[-m,m],g=.35,p=.035*f,v=f*.3,_=a==="uni",M=0,S=M+2*hx,T=S+16,x=T+2*rs*lr,b=x+2*rs*2,C=b+(_?6:8),L=C+Wu*2,R=[],w=Te=>R.push(Te,Te+1,Te+2,Te,Te+2,Te+3),k=(Te,O)=>{for(let K=0;K<O-1;K++){let J=Te+K*2;R.push(J,J+1,J+2,J+1,J+3,J+2)}};for(let Te=0;Te<2;Te++){let O=M+Te*hx;for(let K=0;K<Bl;K++)R.push(O,O+1+K,O+1+(K+1)%Bl)}for(let Te=0;Te<4;Te++)w(S+Te*4);for(let Te=0;Te<2;Te++){let O=T+Te*rs*lr;for(let K=0;K<rs-1;K++)for(let J=0;J<lr-1;J++){let Me=O+K*lr+J,D=Me+1,E=Me+lr,V=E+1;R.push(Me,D,E,D,V,E)}k(x+Te*rs*2,rs)}_?R.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4,b+3,b+5,b+4):(w(b),w(b+4)),k(C,Wu);let P=[];for(let Te=0;Te<2;Te++){let O=new an(f,18,12);O.deleteAttribute("uv"),O.applyMatrix4(new Et().makeScale(1,1,g).setPosition(y[Te],n,i)),P.push(O)}let I=new at(Xt(P,!1),u?new $t({color:d,toneMapped:!1}):Pt({color:d,shadowMix:.35,rim:0}));I.name="eyes",Bn(I,{px:2});let F=new Float32Array(L*3),B=new Float32Array(L*3),$=new Float32Array(L*3),X=new Je(z.ink),j=new Je(c);for(let Te=0;Te<L;Te++){B[Te*3+2]=1;let O=Te>=T&&Te<x?j:X;$[Te*3]=O.r,$[Te*3+1]=O.g,$[Te*3+2]=O.b}let W=new Bt,ee=new Tt(F,3);ee.setUsage(Jo),W.setAttribute("position",ee),W.setAttribute("normal",new Tt(B,3)),W.setAttribute("color",new Tt($,3)),W.setIndex(R);let Ee=n+f*3.5,Q=s-r*1.5-f,re=Math.max(m+2.5*f,r);W.boundingSphere=new ri(new G(0,(Ee+Q)/2,i),Math.hypot(re,(Ee-Q)/2,f*2));let _e=Pt({color:"#ffffff",vertexColors:!0,rim:0});_e.side=kn;let Oe=new at(W,_e);Oe.name="features";let ie=new xt;ie.name="face",ie.add(I,Oe);let Ce=Kr.neutral,He=Te=>{let O=h>0?MA[Te]:0;return O>0?h*O:-1/0},Ue=He("neutral"),qe=Te=>Te==="mouthCurve"&&Ce.mouthCurve<Ue?Ue:Ce[Te],Ke={};for(let Te of Gu)Ke[Te]={x:qe(Te),v:0};let ge={x:0,v:0},Pe={x:0,v:0},ye=0,fe=!1,Ae=0,Z=[0,0],de=0;function pe(Te,O,K){let J=de*3;F[J]=Te,F[J+1]=O,F[J+2]=K,de++}function De(Te,O,K){let J=1-(Te*Te+O*O)/(f*f);return i+f*g*Math.sqrt(J>0?J:0)+K}function Ne(Te,O,K,J,Me,D){let E=-(J-O),V=K-Te,oe=Math.hypot(E,V)||1;E=E/oe*Me/2,V=V/oe*Me/2,pe(Te+E,O+V,D),pe(K+E,J+V,D),pe(K-E,J-V,D),pe(Te-E,O-V,D)}let q=f*1.03;function we(){let Te=Ke,O=Te.pupilScale.x*(1-ge.x),K=ge.x,J=Math.min(Math.max(Te.lid.x,0),.95),Me=Te.browAngle.x,D=J>.005,E=q-2*q*J,V=Me*.6*Math.min(J*4,1),oe=f*EA*Math.min(J*10,1);de=M;for(let be=0;be<2;be++){let ze=be===0?-1:1;SA(Ae,l+be*7.31,Z);let $e=f*.5*(O>0?O:0),Fe=Z[0]*f,ct=Z[1]*f;if(D){let et=E+V*ze*Fe-Math.abs(V)*$e-oe-(ct+$e);if(et>0){let St=Math.min(Math.max((et-.1*f)/(.1*f),0),1);ct+=et*(1-AA(St))}}pe(y[be]+Fe,n+ct,De(Fe,ct,p));for(let It=0;It<Bl;It++){let et=It/Bl*Math.PI*2,St=Fe+Math.cos(et)*$e,pt=ct+Math.sin(et)*$e;pe(y[be]+St,n+pt,De(St,pt,p))}}de=S;for(let be=0;be<2;be++){let ze=f*.55*K,$e=De(0,0,p),Fe=f*.26*K;Ne(y[be]-ze,n-ze,y[be]+ze,n+ze,Fe,$e),Ne(y[be]-ze,n+ze,y[be]+ze,n-ze,Fe,$e)}for(let be=0;be<2;be++){let ze=be===0?-1:1;for(let $e=0;$e<2;$e++){de=$e===0?T+be*rs*lr:x+be*rs*2;for(let Fe=0;Fe<rs;Fe++){let ct=(Fe/(rs-1)*2-1)*(Math.PI/2),It=q*Math.sin(ct),et=q*Math.cos(ct),St=D?E+V*It:et;St>et&&(St=et),St<-et&&(St=-et);let pt=ze*It;if($e===0)for(let Ht=0;Ht<lr;Ht++){let zt=et+(St-et)*(Ht/(lr-1));pe(y[be]+pt,n+zt,De(pt,zt*.97,p*3))}else{let Ht=St+(D?f*.02:0);Ht>et&&(Ht=et);let zt=St-oe;zt<-et&&(zt=-et),pe(y[be]+pt,n+Ht,De(pt,Ht*.97,p*3.5)),pe(y[be]+pt,n+zt,De(pt,zt*.97,p*3.5))}}}}de=b;let ne=f*.9,ve=n+f*(1.4+Te.browY.x),Re=Math.cos(Me),se=Math.sin(Me),ae=i+f*.15;if(_){let be=m+ne*Re,ze=ve+ne*se,$e=ve-se/(Re>.3?Re:.3)*m,Fe=-($e-ze),ct=be,It=Math.hypot(Fe,ct)||1;Fe/=It,ct/=It;let et=-(ze-$e),St=be,pt=Math.hypot(et,St)||1;et/=pt,St/=pt;let Ht=Fe+et,zt=ct+St,Kt=Math.hypot(Ht,zt)||1;Ht/=Kt,zt/=Kt;let dt=Ht*Fe+zt*ct,Dt=v/2/(dt>.4?dt:.4);pe(-be+Fe*v/2,ze+ct*v/2,ae),pe(-be-Fe*v/2,ze-ct*v/2,ae),pe(Ht*Dt,$e+zt*Dt,ae),pe(-Ht*Dt,$e-zt*Dt,ae),pe(be+et*v/2,ze+St*v/2,ae),pe(be-et*v/2,ze-St*v/2,ae)}else for(let be=0;be<2;be++){let ze=be===0?-1:1;Ne(y[be]-ze*ne*Re,ve-ne*se,y[be]+ze*ne*Re,ve+ne*se,v,ae)}de=C;let Le=Te.mouthOpen.x+Pe.x*(.55+.45*Math.sin((Ae+l*.37)*wA*Math.PI*2))*.8,Y=Le>0?Le<1.2?Le:1.2:0,ue=-Te.mouthCurve.x/.5,ce=(ue>1?1:ue>0?ue:0)*(Y<.4?Y/.4:1),ke=r/2*(1-.35*(Y<1?Y:1)*(1-.7*ce)),Ie=TA(Te.lid.x,Te.mouthCurve.x),Se=Te.mouthCurve.x*ke*.5*(1-.4*Ie)*(1+.6*ce),We=.55+.5*ce,st=Y*ke*.9;for(let be=0;be<Wu;be++){let ze=be/(Wu-1)*2-1,$e=1-ze*ze,Fe=ze*ke*(1-.25*Ie)+Ie*ke*.2,ct=s-Se*$e+Ie*ke*.45*ze+ge.x*v*.6*Math.sin(ze*Math.PI*3);pe(Fe,ct,o),pe(Fe,ct-v-st*Math.pow($e,We)+Se*$e*ce,o)}ee.needsUpdate=!0}function Ve(Te){Ae+=Te;for(let O=0;O<Gu.length;O++)En(Ke[Gu[O]],qe(Gu[O]),Qp,Te);En(ge,ye,Qp,Te),En(Pe,fe?1:0,Qp,Te),we()}return we(),{group:ie,setExpression(Te){Ce=Object.prototype.hasOwnProperty.call(Kr,Te)?Kr[Te]:Kr.neutral,ye=Te==="dead"?1:0,Ue=He(Object.prototype.hasOwnProperty.call(Kr,Te)?Te:"neutral")},setTalking(Te){fe=!!Te},update:Ve}}var ei=Math.PI*2,zl=["handL","handR","footL","footR"];function as(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function dx(t,e){e.hipsY=t.hipsY,e.lean=t.lean,e.twist=t.twist,e.headYaw=t.headYaw,e.headPitch=t.headPitch,e.squash=t.squash,e.elbows=t.elbows;for(let n=0;n<4;n++){let i=t[zl[n]],s=e[zl[n]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function Hl(t,e,n,i=[0,0,0]){let s=n[0],r=n[1]-t.hipHeight,o=n[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var RA=t=>t<0?0:t>1?1:t,os=(t,e,n)=>{let i=RA((n-t)/(e-t));return i*i*(3-2*i)},Zr=(t,e,n,i,s)=>os(e,n,t)*(1-os(i,s,t));function Ot(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}var Xu=[0,0,0];function Ri(t,e,n,i,s,r){return Xu[0]=n,Xu[1]=i,Xu[2]=s,Hl(t,e,Xu,r)}var Yu={sx:0,sy:0,fx:0};function $n(t){return Yu.sx=Math.abs(t.shoulderL[0]),Yu.sy=t.shoulderL[1],Yu.fx=Math.abs(t.hipL[0])+.035,Yu}var sa=(t,e)=>e>0?t.handL:t.handR;function e0(t,e,n,i,s){return Ri(t,e,s*(n.sx+.16),t.hipHeight+0,.1,i)}var t0=.55;function ju(t,e,n){let i=$n(e),s=t/wt.idle.duration,r=ei*s,o=e.hipHeight,a=Zr(s,.42,.52,.72,.86);return n.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),n.lean=.03+.015*Math.sin(r+.4),n.twist=.05*Math.sin(r+.6),n.headYaw=.03*Math.sin(r)+.3*a,n.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,n.squash=1+.008*Math.sin(r),n.elbows=t0,e0(e,n,i,n.handL,1),e0(e,n,i,n.handR,-1),n.handL[1]+=.008*Math.sin(r-.5),n.handR[1]+=.008*Math.sin(r+.4),n.handL[2]+=.01*Math.sin(r+1.1),n.handR[2]+=.01*Math.sin(r-.7),Ot(n.footL,i.fx,0,.015),Ot(n.footR,-i.fx,0,-.015),n}var Bs=.34,n0=.25,mx=-.33,CA=.4,PA=.37,IA=.035,Zu=(n0-mx)/Bs;function fx(t,e){if(t<Bs)return e[0]=0,e[1]=n0-Zu*t,e;let n=(t-Bs)/(1-Bs),i=-Zu*(1-Bs),s=-.35*Zu*(1-Bs),r=n*n,o=r*n;return e[1]=(2*o-3*r+1)*mx+(o-2*r+n)*i+(-2*o+3*r)*n0+(o-r)*s,e[0]=CA*Math.sin(Math.PI*Math.pow(n,.8)),e}var Dn=[0,0];function gx(t,e,n){let i=$n(e),s=t/wt.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*ei*(r-(Bs+.5)/2);n.hipsY=o-.06+IA*Math.cos(a),n.squash=1+.045*Math.cos(2*ei*(r-Bs-.03)),n.lean=PA+.03*Math.cos(2*ei*(r-Bs));let l=Math.cos(ei*(r+.03));n.twist=.2*l,n.headYaw=-.15*l,n.headPitch=-.28+.04*Math.cos(a),n.elbows=0,fx(r,Dn),Ot(n.footL,i.fx*.75,Dn[0],Dn[1]),fx(r<.5?r+.5:r-.5,Dn),Ot(n.footR,-i.fx*.75,Dn[0],Dn[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;Ri(e,n,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,sa(n,c))}return n}function vx(t,e,n){let i=$n(e),s=ei*t/wt.aim.duration,r=e.hipHeight;n.hipsY=r-.05+.005*Math.sin(s),n.lean=.12+.01*Math.sin(s),n.twist=-.1,n.headYaw=.08,n.headPitch=.04+.012*Math.sin(2*s),n.squash=1,n.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Ot(n.handL,i.sx*1.2+o,i.sy-.12+a,.56),Ot(n.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Ot(n.footL,i.fx+.02,0,.15),Ot(n.footR,-i.fx-.03,0,-.13),n}var i0=.35;function LA(t){return t<.06?os(0,.06,t):Math.exp(-9*(t-.06))*(1-os(.24,i0,t))}function kA(t){if(t<.07)return os(0,.07,t);let e=t-.07;return Math.exp(-11*e)*Math.cos(ei*e/.22)*(1-os(.26,i0,t))}function DA(t,e,n){let i=$n(e),s=e.hipHeight,r=LA(t);n.hipsY=s-.012-.05*r,n.lean=.03-.4*r,n.twist=.12*r,n.headYaw=-.12*r,n.headPitch=-.02-.32*r,n.squash=1-.15*kA(t),n.elbows=t0+(1-t0)*r;for(let o=-1;o<=1;o+=2){let a=sa(n,o);e0(e,n,i,a,o);let l=a[0],c=a[1],h=a[2];Ri(e,n,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Ot(n.footL,i.fx,0,.015),Ot(n.footR,-i.fx,0,-.015),n}var cr=[0,0,0];function NA(t,e,n){ju(t,e,n);let i=$n(e),s=t/wt.talk.duration,r=ei*s,o=Zr(s,.04,.17,.4,.55),a=Zr(s,.5,.63,.8,.95),l=Math.sin(3*r);n.headPitch+=.05*Math.sin(4*r)-.04*(o+a),n.headYaw+=-.12*o+.12*a,n.elbows+=(.85-n.elbows)*Math.max(o,a),Ri(e,n,-(i.sx+.19),i.sy-.1+.03*l,.36,cr);for(let c=0;c<3;c++)n.handR[c]+=(cr[c]-n.handR[c])*o;Ri(e,n,i.sx+.19,i.sy-.12-.03*l,.34,cr);for(let c=0;c<3;c++)n.handL[c]+=(cr[c]-n.handL[c])*a;return n}var oi=as();function OA(t,e,n){let i=t/wt.roll.duration,s=Zr(i,0,.15,.75,1),r=$n(e);ju(0,e,oi);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(oi.hipsY,.45),n.lean=o(oi.lean,1.3),n.twist=0,n.headYaw=0,n.headPitch=o(oi.headPitch,.35),n.squash=o(1,.9),n.elbows=1;for(let a=-1;a<=1;a+=2){let l=sa(n,a),c=sa(oi,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?n.footL:n.footR,d=a>0?oi.footL:oi.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return n}function FA(t,e,n){return gx(t,e,n),n.hipsY-=.12,n.lean+=.15,n}var UA=.25,BA=.85,zA=.82;function xx(t,e,n){let i=$n(e),s=ei*t/wt.coverLow.duration;return n.hipsY=UA+.006*Math.sin(s),n.lean=BA+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=-.55+.03*Math.sin(2*s+1),n.squash=zA,n.elbows=1,Ot(n.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Ot(n.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Ot(n.footL,i.fx+.08,0,.12),Ot(n.footR,-i.fx-.08,0,.12),n}function yx(t,e,n,i){let s=$n(t),r=i/wt[n].duration,o=Math.sin(ei*r);return e.hipsY+=.012*Math.cos(2*ei*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function HA(t,e,n){return xx(0,e,n),yx(e,n,"coverLowMove",t),n}function s0(t,e,n){let i=$n(e),s=ei*t/wt.coverTall.duration;return n.hipsY=e.hipHeight-.012+.006*Math.sin(s),n.lean=.07+.01*Math.sin(s+.4),n.twist=.02*Math.sin(s+.6),n.headYaw=.05*Math.sin(s),n.headPitch=0+.02*Math.sin(2*s+1),n.squash=1+.006*Math.sin(s),n.elbows=1,Ri(e,n,i.sx+.14,i.sy+0,.31,n.handL),Ri(e,n,-i.sx-.14,i.sy+0,.31,n.handR),Ot(n.footL,i.fx,0,.015),Ot(n.footR,-i.fx,0,-.015),n}function GA(t,e,n){return s0(0,e,n),yx(e,n,"coverTallMove",t),n}function VA(t,e,n){return vx(t*(wt.aim.duration/wt.coverPop.duration),e,n),n.hipsY-=.07,n.lean+=.06,n.footL[2]+=.04,n.footR[2]-=.04,n.footL[0]+=.04,n.footR[0]-=.04,n}function WA(t,e,n){let i=t/wt.vault.duration,s=Zr(i,0,.3,.7,1),r=$n(e);ju(0,e,oi);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(oi.hipsY,e.hipHeight-.02),n.lean=o(oi.lean,.55),n.twist=0,n.headYaw=0,n.headPitch=o(oi.headPitch,-.25),n.squash=1,n.elbows=1;for(let a=-1;a<=1;a+=2){let l=sa(n,a),c=sa(oi,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?n.footL:n.footR,d=a>0?oi.footL:oi.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return n}var XA=.17,YA=.5,qA=-.9,$A=.82;function KA(t,e,n){let i=$n(e),s=ei*t/wt.coverBlindLow.duration;return n.hipsY=XA+.006*Math.sin(s),n.lean=YA+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=qA+.03*Math.sin(2*s+1),n.squash=$A,n.elbows=1,Hl(e,n,e.shoulderR,cr),Ot(n.handR,cr[0]-.02,cr[1]+.44+.008*Math.sin(s+.4),cr[2]+.12),Ot(n.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Ot(n.footL,i.fx+.08,0,.12),Ot(n.footR,-i.fx-.08,0,.12),n}function px(t,e,n,i){s0(t*(wt.coverTall.duration/wt.coverBlindTallL.duration),e,n);let s=$n(e);return Ri(e,n,i*(s.sx+.4),s.sy,.2,i>0?n.handL:n.handR),n}var ZA=.3,jA=1.2,qu=[.4,.62],$u=[-.6,-.36];function Ku(t,e,n,i,s,r){if(t-=Math.floor(t),t<.5)return r[0]=s,r[1]=e+(n-e)*(t/.5),r;let o=(t-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=n+(e-n)*(o*o*(3-2*o)),r}function JA(t,e,n){let i=$n(e),s=t/wt.crawl.duration,r=ei*s;return n.hipsY=ZA+.012*Math.cos(2*r),n.lean=jA+.03*Math.cos(2*r),n.twist=.1*Math.sin(r),n.headYaw=-.1*Math.sin(r),n.headPitch=-.75,n.squash=1,n.elbows=1,Ku(s,qu[1],qu[0],.16,.04,Dn),Ot(n.handL,i.sx+.12,Dn[0],Dn[1]),Ku(s+.5,qu[1],qu[0],.16,.04,Dn),Ot(n.handR,-i.sx-.12,Dn[0],Dn[1]),Ku(s,$u[1],$u[0],.16,0,Dn),Ot(n.footR,-i.fx-.02,Dn[0],Dn[1]),Ku(s+.5,$u[1],$u[0],.16,0,Dn),Ot(n.footL,i.fx+.02,Dn[0],Dn[1]),n}function ia(t,e,n){let i=e.length;if(t<=e[0][0])return Ot(n,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(t<a[0]){let l=os(o[0],a[0],t);return Ot(n,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return Ot(n,s[1],s[2],s[3])}var QA=.4,eR=.9;function tR(t,e,n){let i=$n(e),s=t/wt.revive.duration,r=ei*s;return n.hipsY=QA+.012*Math.sin(2*r),n.lean=eR+.05*Math.sin(2*r),n.twist=.04*Math.sin(r),n.headYaw=.04*Math.sin(r),n.headPitch=-.55,n.squash=1,n.elbows=1,Ot(n.handL,i.sx-.06,.37-.06*Math.sin(r),.64),Ot(n.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),Ot(n.footL,i.fx+.06,0,-.32),Ot(n.footR,-i.fx-.06,0,-.32),n}var nR=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],iR=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],sR=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],qn=[0,0,0];function rR(t,e,n){let i=$n(e),s=t/wt.bash.duration;return ia(s,iR,qn),n.lean=qn[0],ia(s,sR,qn),n.twist=qn[0],n.hipsY=e.hipHeight-.09-.03*Zr(s,.2,.33,.55,.9),n.headYaw=-.5*n.twist,n.headPitch=-.1,n.squash=1,n.elbows=1,ia(s,nR,qn),Ri(e,n,qn[0],qn[1],qn[2],n.handR),Ri(e,n,i.sx+.14,i.sy-.1,.32,n.handL),Ot(n.footL,i.fx+.04,0,-.14),Ot(n.footR,-i.fx-.04,0,.2),n}var oR=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],aR=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],lR=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function cR(t,e,n){let i=$n(e),s=t/wt.throw.duration;return ia(s,aR,qn),n.lean=qn[0],ia(s,lR,qn),n.twist=qn[0],n.hipsY=e.hipHeight-.07-.03*Zr(s,.4,.6,.9,1),n.headYaw=-.4*n.twist,n.headPitch=-.05,n.squash=1,n.elbows=1,ia(s,oR,qn),Ri(e,n,qn[0],qn[1],qn[2],n.handR),Ri(e,n,i.sx+.2,i.sy-.12-.08*os(.5,.9,s),.34-.12*os(.5,.9,s),n.handL),Ot(n.footL,i.fx+.04,0,.1+.06*os(.4,.7,s)),Ot(n.footR,-i.fx-.04,0,-.16),n}var hR=.05;function yn(t,e,n,i=hR){return Object.freeze({duration:t,loop:e,ease:i,sample:(s,r,o=as())=>n(s,r,o)})}var wt=Object.freeze({idle:yn(2.4,!0,ju),run:yn(.56,!0,gx,.008),aim:yn(1.6,!0,vx),flinch:yn(i0,!1,DA),talk:yn(2.4,!0,NA),roll:yn(.55,!1,OA,.02),sprint:yn(.56,!0,FA,.008),coverLow:yn(2.4,!0,xx),coverLowMove:yn(.5,!0,HA),coverTall:yn(2.4,!0,s0),coverTallMove:yn(.5,!0,GA),coverPop:yn(1.6,!0,VA),vault:yn(.5,!1,WA,.02),coverBlindLow:yn(1.6,!0,KA),coverBlindTallL:yn(1.6,!0,(t,e,n)=>px(t,e,n,1)),coverBlindTallR:yn(1.6,!0,(t,e,n)=>px(t,e,n,-1)),crawl:yn(1,!0,JA),revive:yn(.5,!0,tR),bash:yn(.45,!1,rR,.02),throw:yn(.5,!1,cR,.02)}),ls=Zu/wt.run.duration;function Gl(t,e,n,i){let s=Object.prototype.hasOwnProperty.call(wt,t)?wt[t]:null;if(!s)throw new Error(`unknown clip: ${t}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,n,i||as())}function Ju(t,e,n,i=as()){if(!(n>0))return dx(t,i);if(n>=1)return dx(e,i);let s=1-n;i.hipsY=t.hipsY*s+e.hipsY*n,i.lean=t.lean*s+e.lean*n,i.twist=t.twist*s+e.twist*n,i.headYaw=t.headYaw*s+e.headYaw*n,i.headPitch=t.headPitch*s+e.headPitch*n,i.squash=t.squash*s+e.squash*n,i.elbows=t.elbows*s+e.elbows*n;for(let r=0;r<4;r++){let o=t[zl[r]],a=e[zl[r]],l=i[zl[r]];l[0]=o[0]*s+a[0]*n,l[1]=o[1]*s+a[1]*n,l[2]=o[2]*s+a[2]*n}return i}var uR=.05,zs=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Vl=["handL","handR","footL","footR"],r0=zs.length+Vl.length*3,ra=[.35,-.2,-.8],o0=[.75,-.85,-.15];function ln(t,e){if(t.deleteAttribute("uv"),!t.index){let r=t.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;t.setIndex(o)}let n=new Je(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new Tt(s,3)),t}var dR=new Et,ai=(t,e,n,i,s=0,r=0,o=0,a=1,l=1,c=1)=>t.applyMatrix4(dR.compose(new G(e,n,i),new jn().setFromEuler(new si(s,r,o)),new G(a,l,c)));function jr(t=20,e=14){let n=new an(1,t,e);return n.deleteAttribute("uv"),n.deleteAttribute("normal"),jv(n)}function a0(t,e,n){let i=jr(e,n),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)t(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function ed(t,e,n){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,s,r),a=new Jt(n,n,o,6,1),l=new jn().setFromUnitVectors(new G(0,1,0),new G(i/o,s/o,r/o));return a.applyMatrix4(new Et().compose(new G((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),l,new G(1,1,1))),a}function td(t,e,n={}){let i=Xt(t,!1);if(!i)throw new Error(`rig: could not merge the ${e} parts`);vi(i),i.computeBoundingSphere();let s=new at(i,Pt({color:"#ffffff",vertexColors:!0,...n.rim!==void 0?{rim:n.rim}:{},...n.rimColor?{rimColor:n.rimColor}:{}}));return s.name=e,Bn(s),s}function l0(t,e,n,i,s){let r=2/t.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*t.rx,s[1]=o(n)*t.ry;let a=o(i)*t.rz;return a>t.flatZ&&(a=t.flatZ+(a-t.flatZ)*t.flatK),s[2]=a,s}function fR(t){let e=t.torso,n=t.colors,i=t.outfit,s=(h,d)=>{let u=new bl(h.map(([f,m])=>new Ge(f,m)),22);return u.scale(1,1,e.depth),ln(u,d)},r=[s(e.pants,n.pants),s(e.shirt,n.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=t.shoulderL[1]-t.hipHeight;for(let h of[-1,1]){let d=jr(14,10);ai(d,h*Math.abs(t.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(ln(d,n.shirt))}if(i.collar){let h=new Vr(.1,.03,8,20);ai(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(ln(h,n.collar))}if(i.logo){let u=new Jt(.03,.03,.01,12);ai(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(ln(u,n.logo))}if(i.badge&&!i.lanyard){let d=l(.09,.2)+.012,u=new gt(.075,.1,.014);ai(u,.09,.2,d,-.05,0,.04);let f=new gt(.077,.026,.016);ai(f,.09,.2+.028,d,-.05,0,.04),r.push(ln(u,n.badge),ln(f,n.badgeStripe))}if(i.lanyard){let d=l(0,.15)+.012;for(let m of[-1,1]){let y=[m*.075,o-.03,.085],g=[m*.05,.34,l(.05,.34)+.014],p=[m*.014,.15+.05,l(.014,.15+.05)+.01];r.push(ln(ed(y,g,.008),n.lanyard),ln(ed(g,p,.008),n.lanyard))}let u=new gt(.075,.1,.014);ai(u,0,.15,d,-.05,0,.04);let f=new gt(.077,.026,.016);ai(f,0,.15+.028,d,-.05,0,.04),r.push(ln(u,n.badge),ln(f,n.badgeStripe))}return td(r,"torso",n)}function pR(t){let e=t.head,n=t.hair,i=t.colors,s=t.outfit,r=[],o=a0((a,l,c,h)=>l0(e,a,l,c,h),40,28);r.push(ln(o,i.skin),ln(mR(e,n),i.hair));for(let a of[-1,1]){let l=jr(12,8);ai(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(ln(l,i.skin))}{let a=t.face,l=(a.eyeY+a.mouthY)/2-.005,c=jr(12,8);ai(c,0,l,gR(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(ln(c,i.skin))}if(s.headset){let a=e.ry+n.thickness+.03,l=new Qn;l.getPoint=(y,g=new G)=>g.set(Math.cos(Math.PI*y)*(e.rx+n.thickness+.012),Math.sin(Math.PI*y)*a,0);let c=new _l(l,24,.014,6,!1);ai(c,0,0,-.03,-.12,0,0),r.push(ln(c,i.headset));for(let y of[-1,1]){let g=new Jt(.055,.06,.05,14);ai(g,y*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(ln(g,i.headset))}let h=t.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(ln(ed(d,u,.009),i.headset),ln(ed(u,f,.009),i.headset));let m=jr(10,8);ai(m,f[0],f[1],f[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(ln(m,i.mic))}return td(r,"headMesh",i)}var hr=48,Qu=12;function mR(t,e){let n=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=Au.smoothstep,r=[],o=(u,f,m)=>{let y=Math.sin(u)*Math.sin(f),g=Math.cos(u),p=Math.sin(u)*Math.cos(f);l0(t,y,g,p,i);let v=i[0]/(t.rx*t.rx),_=i[1]/(t.ry*t.ry),M=i[2]/(t.rz*t.rz),S=Math.hypot(v,_,M)||1;v/=S,_/=S,M/=S;let T=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(p+.3,0),x=e.quiff?e.lift*Math.max(p,0)*s(i[1],.12,.26)*(1-.5*y):0,b=e.back*Math.max(-p,0)*s(i[1],-.15,.1),C=m?-.01:e.thickness*(1-.55*Math.min(T,1))+x+b;r.push(i[0]+v*C,i[1]+_*C,i[2]+M*C)},a=u=>{let f=0,m=Math.PI;for(let y=0;y<40;y++){let g=(f+m)/2,p=Math.sin(g)*Math.sin(u),v=Math.sin(g)*Math.cos(u);l0(t,p,Math.cos(g),v,i),i[1]>n(p,v)?f=g:m=g}return f};o(0,0,!1);let l=[];for(let u=0;u<hr;u++)l.push(a(u/hr*Math.PI*2));for(let u=1;u<=Qu+1;u++)for(let f=0;f<hr;f++){let m=f/hr*Math.PI*2,y=u>Qu;o(y?l[f]+.03:l[f]*(u/Qu),m,y)}let c=(u,f)=>1+(u-1)*hr+f%hr,h=[];for(let u=0;u<hr;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Qu;u++)for(let f=0;f<hr;f++){let m=c(u,f),y=c(u,f+1),g=c(u+1,f),p=c(u+1,f+1);h.push(m,g,p,m,p,y)}let d=new Bt;return d.setAttribute("position",new _t(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function gR(t,e,n){let i=1-Math.pow(Math.abs(e/t.rx),t.power)-Math.pow(Math.abs(n/t.ry),t.power),s=i>0?t.rz*Math.pow(i,1/t.power):0;return s>t.flatZ?t.flatZ+(s-t.flatZ)*t.flatK:s}function bx(t,e){let n=t.hand.radius,i=t.colors,s=jr(14,10);ai(s,0,n*.75,0,0,0,0,n*.78,n*1.1,n*.95),s.computeVertexNormals();let r=jr(10,8);return ai(r,n*.3,n*.45,e*n*.75,e*-.6,0,.3,n*.34,n*.55,n*.34),r.computeVertexNormals(),td([ln(s,i.skin),ln(r,i.skin)],e>0?"handL":"handR",i)}function _x(t,e){let n=t.shoe,i=t.colors,s=n.width/2,r=n.length/2,o=n.length*.18,a=.03,l=a0((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,n.height*.55+d*n.height*.6-Math.max(u,0)*n.height*.25),f[2]=o+u*r*.96},20,12),c=a0((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return td([ln(l,i.shoe),ln(c,i.sole)],e>0?"footL":"footR",i)}function cs(t){let e=new xt;e.name=t.name||"character";let n=new xt;n.name="body",e.add(n);let i=new xt;i.name="hips",i.rotation.order="YXZ";let s=fR(t);i.add(s);let r=new xt;r.name="head",r.rotation.order="YXZ",r.position.set(0,t.neckY-t.hipHeight,0),i.add(r);let o=pR(t);o.position.y=t.head.centerY,r.add(o);let a=ux({...t.face,lidColor:t.colors.skin});a.group.position.y=t.head.centerY,r.add(a.group),n.add(i);let l=[bx(t,1),bx(t,-1)],c=[_x(t,1),_x(t,-1)],h=[0,1].map(()=>Jp({radius:t.armRadius,color:t.colors.skin})),d=[0,1].map(()=>Jp({radius:t.legRadius,color:t.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",n.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=zu({rx:.45,rz:.38,opacity:.55});e.add(u);let f=as(),m=as(),y=[];for(let W=0;W<r0;W++)y.push({x:0,v:0});let g=!1,p=uR,v=(W,ee)=>ee<zs.length?W[zs[ee]]:W[Vl[(ee-zs.length)/3|0]][(ee-zs.length)%3];function _(W,ee,Ee){ee<zs.length?W[zs[ee]]=Ee:W[Vl[(ee-zs.length)/3|0]][(ee-zs.length)%3]=Ee}function M(W,ee){ee>=0&&(p=ee),f.hipsY=W.hipsY,f.lean=W.lean,f.twist=W.twist,f.headYaw=W.headYaw,f.headPitch=W.headPitch,f.squash=W.squash,f.elbows=W.elbows>=0?W.elbows:0;for(let Ee=0;Ee<4;Ee++){let Q=W[Vl[Ee]],re=f[Vl[Ee]];re[0]=Q[0],re[1]=Q[1],re[2]=Q[2]}if(!g){g=!0;for(let Ee=0;Ee<r0;Ee++)y[Ee].x=v(f,Ee),y[Ee].v=0}}let S=[0,0,0],T=[0,0,0],x=[0,0,0],b=[0,0,0],C={mid:[0,0,0],end:[0,0,0],stretch:1},L=new G,R=new G,w=new G,k=new Et,P=t.armLength/2,I=t.legLength/2,F=t.ankleHeight;function B(W,ee,Ee){let Q=Math.cos(m.twist),re=Math.sin(m.twist);b[0]=W*Q+Ee*re,b[1]=ee,b[2]=-W*re+Ee*Q}function $(){let W=m.squash>.2?m.squash:.2,ee=1/Math.sqrt(W);n.scale.set(ee,W,ee),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let Ee=0;Ee<2;Ee++){let Q=Ee===0?1:-1;Hl(t,m,Ee===0?t.shoulderL:t.shoulderR,S);let re=m.elbows<0?0:m.elbows>1?1:m.elbows;B(Q*(ra[0]+(o0[0]-ra[0])*re),ra[1]+(o0[1]-ra[1])*re,ra[2]+(o0[2]-ra[2])*re),jp(S,Ee===0?m.handL:m.handR,P,P,b,C),h[Ee].set(S,C.mid,C.end,C.stretch);let _e=l[Ee];_e.position.set(C.end[0],C.end[1],C.end[2]),L.set(C.end[0]-C.mid[0],C.end[1]-C.mid[1],C.end[2]-C.mid[2]),L.lengthSq()<1e-10&&L.set(0,-1,0),L.normalize(),R.set(-Q*Math.cos(m.twist),0,Q*Math.sin(m.twist)),R.addScaledVector(L,-R.dot(L)),R.lengthSq()<1e-4&&R.set(0,0,1).addScaledVector(L,-L.z),R.normalize(),w.crossVectors(R,L),k.makeBasis(R,L,w),_e.quaternion.setFromRotationMatrix(k),Hl(t,m,Ee===0?t.hipL:t.hipR,T);let Oe=Ee===0?m.footL:m.footR;x[0]=Oe[0],x[1]=Oe[1]+F,x[2]=Oe[2],B(Q*.15,0,1),jp(T,x,I,I,b,C),d[Ee].set(T,C.mid,C.end,C.stretch);let ie=c[Ee];ie.position.set(C.end[0],C.end[1]-F,C.end[2]),ie.rotation.set(Math.min(Math.max(C.end[1]-F,0),.3)*1.1,m.twist*.3,0)}}function X(W){if(g)for(let ee=0;ee<r0;ee++)En(y[ee],v(f,ee),p,W),_(m,ee,y[ee].x);$(),a.update(W)}Gl("idle",0,t,m),$();function j(){e.traverse(W=>{!W.isMesh||W.userData.isOutline||(W.geometry.dispose(),W!==u&&W.material.dispose())}),e.removeFromParent()}return{root:e,spec:t,face:a,setPose:M,update:X,dispose:j,shadow:u}}var vR=.15,xR=.03,Mx=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function hs(t){let e=t.spec,n="idle",i=0,s="idle",r=0,o=0,a=wt[n].ease,l=as(),c=as(),h=Gl(n,0,e);Ju(h,h,1,l);function d(m,{fade:y,at:g}={}){Object.prototype.hasOwnProperty.call(wt,m)&&(m===n&&wt[m].loop||(m==="flinch"&&n!=="flinch"&&(s=n),Ju(h,h,1,l),a=u(),r=y===void 0?m==="flinch"?xR:vR:Math.max(y,0),o=0,n=m,i=Number.isFinite(g)&&g>0?g:0,t.face.setTalking(m==="talk")))}function u(){let m=r>0?Mx(o/r):1;return a+(wt[n].ease-a)*m}function f(m,y=m){let g=wt[n];if(i+=m,o+=y,g.loop)i>=g.duration&&(i-=g.duration*Math.floor(i/g.duration));else if(i>=g.duration)return d(s),f(0);Gl(n,i,e,c),Ju(l,c,r>0?Mx(o/r):1,h),t.setPose(h,u())}return{play:d,update:f,current:()=>n}}function Hs(t,e,n){let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*n)<<o}return"#"+r.toString(16).padStart(6,"0")}function Wl(t){for(let e of Object.values(t))e&&typeof e=="object"&&Wl(e);return Object.freeze(t)}var oa=z.glorpPurple,us="#ffcf3a",c0="#8fe04a",wx=Hs(c0,z.ink,.6),Sx={rim:.55,rimColor:"#e4ff8a"},yR=Object.freeze({eyeColor:"#e8ff3a",eyeGlow:!0}),h0=Wl({associate:{shirt:oa,collar:Hs(oa,z.ink,.25),logo:z.gel,pants:Hs(z.planet,z.ink,.3),skin:c0,hair:wx,...Sx,shoe:Hs(z.ink,oa,.3),sole:z.cream,lanyard:z.hotPink,badge:z.cream,badgeStripe:z.teal,headset:Hs(z.ink,z.lilac,.25),mic:z.hotPink},trainer:{shirt:z.planet,collar:z.planet,logo:z.gel,pants:Hs(z.teal,z.ink,.45),skin:c0,hair:wx,...Sx,shoe:z.cream,sole:z.ink,lanyard:z.hotPink,badge:z.cream,badgeStripe:z.teal,headset:z.ink,mic:z.hotPink},boss:{shirt:Hs(oa,z.ink,.15),collar:us,logo:us,pants:Hs(oa,z.ink,.55),skin:Hs(z.lilac,oa,.4),hair:us,rim:.5,rimColor:"#ffe9a8",shoe:us,sole:z.ink,lanyard:us,badge:z.cream,badgeStripe:z.hotPink,headset:us,mic:z.hotPink}}),Yt=Wl({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:h0.associate,outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75,...yR}}),Tx=Wl({...Yt,name:"trainer",colors:h0.trainer,torso:{...Yt.torso,sleeve:.02},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1,badge:!0},face:{...Yt.face,seed:11}}),nd=Wl({...Yt,name:"overlord",colors:h0.boss,face:{...Yt.face,seed:21,eyeColor:us}});var bR=1.5,_R=8,MR=-.2,wR=1.3,Ex=.6,SR=Math.atan2(1.3,-4),TR=new G(-.45,.22,-1).applyEuler(new si(-.2,.68,0)).toArray(),Ax=10,ER=.8,AR=.05,RR=["idle","run","aim","flinch","talk"],Xl=Object.keys(Kr),Rx=(t,e,n)=>Math.min(n,Math.max(e,t));function CR(t,e,n,i=[0,0,0]){return i[0]=Math.sin(t)*Math.cos(e)*n,i[1]=Math.sin(e)*n,i[2]=Math.cos(t)*Math.cos(e)*n,i}function PR(t,e,n=H.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[t[0]+r*n.right-i*n.back,t[1]+n.up,t[2]+o*n.right-s*n.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Cx({canvas:t,gl:e}){let n=Ou(t,e),i=n.renderer,s=Nu(t),r=document.getElementById("cr-readout"),o=new Or,a=new Un(H.camera.fov,1,.1,100),l=Fu({planetDir:TR});o.add(l.mesh);let c=ax();o.add(c.group);let h=[];function d(ie,Ce,He){let Ue=cs(He===void 0?Yt:{...Yt,face:{...Yt.face,seed:He}});Ue.root.position.set(ie,0,Ce),Ue.root.rotation.y=Ex,o.add(Ue.root);let qe=hs(Ue),Ke={rig:Ue,anim:qe};return h.push(Ke),Ke}let u=d(c.spawn[0],c.spawn[2]),f=[],m=!1,y=0,g=!0,p=!1,v=.685,_=.1,M=4.6,S=!1,T=new G(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),x=[0,0,0];function b(ie){if(!(!RR.includes(ie)&&!Object.prototype.hasOwnProperty.call(wt,ie))){u.anim.play(ie);for(let Ce of f)Ce.anim.play(m?"run":ie)}}function C(ie){let Ce=Xl.indexOf(ie);if(!(Ce<0)){y=Ce;for(let He of h)He.rig.face.setExpression(ie)}}function L(ie){g=!!ie,Wp(o,g)}function R(ie){p=!!ie,u.rig.root.rotation.y=p?SR:Ex}function w(ie){if(ie=!!ie,ie!==m)if(m=ie,ie){let Ce=c.spawn[2]+2.4;for(let He=0;He<Ax;He++){let Ue=c.spawn[0]+(He-(Ax-1)/2)*ER,qe=d(Ue,Ce,10+He);qe.anim.play("run"),qe.rig.face.setExpression(Xl[y]),f.push(qe)}Wp(o,g)}else{for(let Ce of f)Ce.rig.dispose(),h.splice(h.indexOf(Ce),1);f=[]}}function k(){let ie=n.resize();a.aspect=ie.aspect,a.updateProjectionMatrix()}k(),window.addEventListener("resize",k),t.addEventListener("mousedown",ie=>{ie.button===0&&(S=!0)}),window.addEventListener("mouseup",()=>{S=!1}),window.addEventListener("mousemove",ie=>{S&&!s.isLocked()&&P(ie.movementX||0,ie.movementY||0,.006)}),t.addEventListener("wheel",ie=>{M=Rx(M*Math.exp(ie.deltaY*.001),bR,_R)},{passive:!0});function P(ie,Ce,He){v-=ie*He,_=Rx(_+Ce*He,MR,wR)}window.addEventListener("keydown",ie=>{ie.repeat||(ie.code==="Digit4"?b("flinch"):ie.code==="Digit5"?b("talk"):ie.code==="KeyO"?L(!g):ie.code==="KeyP"?w(!m):ie.code==="KeyL"?s.requestLock():ie.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let I=0,F=0,B=0,$=0,X=0,j=0,W=null,ee=0;window.__cr.stats=()=>({fps:I,ms:F,calls:X,tris:j,scale:n.scale(),characters:h.length}),window.__cr.anim=b,window.__cr.orbit=(ie,Ce,He)=>{v=ie,_=Ce,He&&(M=He)},window.__cr.expression=C,window.__cr.perf=w,window.__cr.gameCam=R,window.__cr.outlines=L;function Ee(ie){ie.pressed.weapon1&&b("idle"),ie.pressed.weapon2&&b("run"),ie.pressed.weapon3&&b("aim"),ie.pressed.interact&&C(Xl[(y+1)%Xl.length]),ie.pressed.grenade&&R(!p)}function Q(){if(p){let ie=PR([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(ie.pos),a.lookAt(ie.look[0],ie.look[1],ie.look[2])}else CR(v,_,M,x),a.position.set(T.x+x[0],T.y+x[1],T.z+x[2]),a.lookAt(T)}let re=ie=>ie.toFixed(2);function _e(){let ie=W?Object.keys(W.held).filter(Ue=>W.held[Ue]).join(" "):"",Ce=s.padStatus(),He=W&&Ce!=="none"&&Ce!=="unrecognised controller"?`Gamepad: ${Ce}
  move ${re(W.moveX)}, ${re(W.moveY)}  look ${re(W.lookX)}, ${re(W.lookY)}
  held: ${ie||"nothing"}`:`Gamepad: ${Ce}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Xl[y]}   camera: ${p?"game":"orbit"}   outlines: ${g?"on":"off"}`,`${Math.round(I)} fps   ${re(F)} ms   scale ${n.scale()}`,`${X} draw calls   ${j} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${W?Math.round(W.lookDX):0}, ${W?Math.round(W.lookDY):0}`,He].join(`
`)}let Oe=Du({step(){},render(ie,Ce){let He=Math.min(Ce,AR);W=s.poll(),Ee(W),s.isLocked()&&!p&&P(W.lookDX,W.lookDY,.003),p||P(W.lookX*600*He,W.lookY*600*He,.004),l.update(performance.now()/1e3),c.update(He);for(let Ue of h)Ue.anim.update(He),Ue.rig.update(He);Q(),i.render(o,a),X=i.info.render.calls,j=i.info.render.triangles,B++,$+=Ce,$>=1&&(I=B/$,F=$/B*1e3,B=0,$=0),ee+=Ce,ee>=.1&&(ee=0,_e()),n.frameDone(Ce*1e3)}});Q(),i.render(o,a),X=i.info.render.calls,j=i.info.render.triangles,_e(),Oe.start()}function id(){let t=!1,e=0,n=.18;return{update(i,s,r,o){return n=o,t?(e+=r,i?!1:(t=!1,e<=o)):s?i?(t=!0,e=r,!1):!0:!1},holding(){return t&&e>n},reset(){t=!1,e=0}}}function lt(t,e,n="wall",i=void 0){let s={min:Object.freeze([...t]),max:Object.freeze([...e]),kind:n};return i&&(s.prop=i),Object.freeze(s)}var u0=1e-9;function zn(t,e,n,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=t.filter(g=>g.max[1]>o&&g.min[1]<a),c=Math.hypot(n[0],n[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=n[0]/h,u=n[2]/h,f=!1,m=0,y=0;for(let g=0;g<h;g++){let p=r[0],v=r[2];r[0]+=d,r[2]+=u;let _=!1;for(let M=0;M<5;M++){let S=null,T=u0;for(let x of l){let b=Math.max(x.min[0],Math.min(r[0],x.max[0])),C=Math.max(x.min[2],Math.min(r[2],x.max[2])),L=r[0]-b,R=r[2]-C,w=Math.hypot(L,R),k,P,I;if(w>u0){if(w>=i)continue;k=i-w,P=L/w,I=R/w}else{let F=[[r[0]-x.min[0],-1,0],[x.max[0]-r[0],1,0],[r[2]-x.min[2],0,-1],[x.max[2]-r[2],0,1]],B=F[0];for(let $ of F)$[0]<B[0]&&(B=$);k=B[0]+i,P=B[1],I=B[2]}k>T&&(T=k,S=[P,I])}if(!S){_=!0;break}if(M===4)break;r[0]+=S[0]*T,r[2]+=S[1]*T,f=!0,m=S[0],y=S[1]}_||(r[0]=p,r[2]=v,f=!0)}return f||(r[0]=e[0]+n[0],r[2]=e[2]+n[2]),{pos:r,hit:f,normal:[m,0,y]}}function Ci(t,e,n,i){let s=1,r=[n[0]-e[0],n[1]-e[1],n[2]-e[2]];for(let o of t){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<u0)(e[h]<d||e[h]>u)&&(c=!1);else{let f=(d-e[h])/r[h],m=(u-e[h])/r[h];if(f>m){let y=f;f=m,m=y}f>a&&(a=f),m<l&&(l=m),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function aa(t,e,n=0){for(let i of t)if(e[0]>=i.min[0]-n&&e[0]<=i.max[0]+n&&e[1]>=i.min[1]-n&&e[1]<=i.max[1]+n&&e[2]>=i.min[2]-n&&e[2]<=i.max[2]+n)return!0;return!1}var d0=["fov","right","up","back"],la=Math.PI*2,IR=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Lx=t=>t!=="normal"&&IR.includes(t);function Px(t,e,n={}){let i=Lx(e)&&t[e]&&typeof t[e]=="object"?t[e]:null;for(let s of d0)n[s]=i&&i[s]!==void 0?i[s]:t[s];return n}function Ix(t,e){let n=Lx(e)?t[e]:null;return n&&typeof n=="object"&&n.shakeWeight>0?n.shakeWeight:0}function kx(t,e,n,i=0){return e?t>=n:t>=n+i}function Dx({tuning:t=H.camera,look:e=H.look}={}){let n={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l={x:0,v:0},c={shake:{x:0,v:0},fov:{x:0,v:0},pull:{x:0,v:0}},h={shake:0,fov:0,pull:0},d=null,u=[0,0,0],f={x:0,v:0},m=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],y={},g=[0,0,0],p=[0,0,0],v=[0,0,0],_=[0,0,0],M=[0,0,1],S={pos:_,dir:M,fov:70},T={on:!1,t:0,p:[0,0,0]},x=1,b=0,C=!1;return{yaw:0,pitch:0,look(R,w,k,P,I,F,B=1){(R||w||k||P)&&(T.on=!1,d=null);let $=F?e.aimScale:1,X=e.invertY?-1:1;this.yaw-=R*e.mouse*$,this.pitch-=w*e.mouse*$*X;let j=e.pad,W=$*B;k&&(this.yaw-=Math.sign(k)*Math.abs(k)**j.expo*j.yawRate*W*I),P&&(this.pitch-=Math.sign(P)*Math.abs(P)**j.expo*j.pitchRate*W*I*X),this.pitch<t.pitchMin&&(this.pitch=t.pitchMin),this.pitch>t.pitchMax&&(this.pitch=t.pitchMax)},bump(R=1){let w=t.bump;if(!w||!(w.amount>0)||!(R>0))return;s.x=Math.min(s.x+w.amount*R,2*w.amount);let k=t.slamShake;k&&k.amount>0&&k.time>0&&(o.t=k.time,o.amp=k.amount*R)},slam(R=1){this.bump(R);let w=t.slamFovKick;Number.isFinite(w)&&w!==0&&R>0&&(l.x=Math.max(-20,Math.min(20,l.x+w*R)))},sustain({shake:R=0,fov:w=0,pull:k=0}={}){Number.isFinite(R)&&R>h.shake&&(h.shake=R),Number.isFinite(k)&&k>h.pull&&(h.pull=k),Number.isFinite(w)&&(h.fov+=w)},turnTo(R,w=null,k=t.objectiveTurnTime){if(!Number.isFinite(R))return!1;let P=Math.PI*2,I=R-this.yaw,F=I-P*Math.round(I/P);return d={t:0,dur:Math.max(k,.001),y0:this.yaw,dy:F,p0:this.pitch,dp:Number.isFinite(w)?Math.max(t.pitchMin,Math.min(t.pitchMax,w))-this.pitch:0},T.on=!1,!0},turning(){return d!==null},dip(R){Number.isFinite(R)&&R>0&&(r.x=Math.min(r.x+R,.1))},kick(R,w=0){let k=t.recoil?t.recoil.max:0;if(!(k>0))return;let P=(I,F)=>Math.max(-k,Math.min(k,I+(Number.isFinite(F)?F:0)));a.p.x=Math.max(0,P(a.p.x,R)),a.y.x=P(a.y.x,w)},hold(R){if(!(t.holdTime>0)){T.on=!1;return}T.on=!0,T.t=t.holdTime,T.p[0]=R[0],T.p[1]=R[1],T.p[2]=R[2]},holding(){return T.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(R,w,k="normal",P=1){w!==void 0&&(this.yaw=w),Px(t,k,y);for(let I of d0)n[I].x=y[I],n[I].v=0;i.x=P,i.v=0,f.x=Ix(t,k),f.v=0;for(let I=0;I<3;I++)m[I].x=R[I],m[I].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,l.x=0,l.v=0,d=null;for(let I of["shake","fov","pull"])c[I].x=0,c[I].v=0,h[I]=0;a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,x=1,C=!0,T.on=!1},update(R,{target:w,mode:k="normal",side:P=1},I){C||this.snap(w,this.yaw,k,P),R>0||(R=0),b+=R,Px(t,k,y);for(let re of d0)En(n[re],y[re],t.blendHalfLife,R);En(f,Ix(t,k),t.blendHalfLife,R),En(i,P,t.sideHalfLife,R);for(let re=0;re<3;re++)En(m[re],w[re],t.followHalfLife,R);En(s,0,t.bump?t.bump.halfLife:0,R),En(r,0,t.bump?t.bump.halfLife:0,R),En(l,0,t.slamFovHalfLife,R);for(let re of["shake","fov","pull"])En(c[re],h[re],t.sustainHalfLife,R),h[re]=0;if(d){d.t+=R;let re=Math.min(1,d.t/d.dur),_e=re*re*(3-2*re);this.yaw=d.y0+d.dy*_e,this.pitch=d.p0+d.dp*_e,re>=1&&(d=null)}let F=t.recoil?t.recoil.halfLife:0;En(a.p,0,F,R),En(a.y,0,F,R);let B=Math.PI/180,$=t.probeRadius,X=Math.max(n.back.x-c.pull.x,Math.min(n.back.x,t.minBack)),j=1,W=0,ee=re=>{let _e=this.yaw+a.y.x*B,Oe=Math.max(t.pitchMin,Math.min(t.pitchMax,this.pitch+a.p.x*B));W=Math.sin(_e),j=Math.cos(_e);let ie=Math.sin(Oe),Ce=Math.cos(Oe);g[0]=m[0].x,g[1]=m[1].x+n.up.x,g[2]=m[2].x,u[0]=w[0],u[1]=w[1]+n.up.x,u[2]=w[2];let He=Ci(I,u,g,$);if(He<1)for(let fe=0;fe<3;fe++)g[fe]=u[fe]+(g[fe]-u[fe])*He;let Ue=n.right.x*i.x;p[0]=g[0]-j*Ue,p[1]=g[1],p[2]=g[2]+W*Ue;let qe=Ci(I,g,p,$);for(let fe=0;fe<3;fe++)p[fe]=g[fe]+(p[fe]-g[fe])*qe;M[0]=W*Ce,M[1]=ie,M[2]=j*Ce;for(let fe=0;fe<3;fe++)v[fe]=p[fe]-M[fe]*X;let Ke=Ci(I,p,v,$),ge=X>1e-6?Math.max(t.minBack/X,Ke):1;ge>1&&(ge=1),ge<x?x=ge:re&&(x+=(ge-x)*(t.wallReturnHalfLife>0?1-Math.pow(2,-R/t.wallReturnHalfLife):1));let Pe=X*x-s.x;for(let fe=0;fe<3;fe++)_[fe]=p[fe]-M[fe]*Pe;let ye=Ci(I,g,_,$);if(ye<1)for(let fe=0;fe<3;fe++)_[fe]=g[fe]+(_[fe]-g[fe])*ye};if(ee(!0),T.on)if(T.t-=R,T.t<=0||k!=="aim")T.on=!1;else for(let re=0;re<3;re++){let _e=T.p[0]-_[0],Oe=T.p[1]-_[1],ie=T.p[2]-_[2],Ce=Math.hypot(_e,Oe,ie);if(Ce<.5)break;this.yaw=Math.atan2(_e,ie)-a.y.x*B,this.pitch=Math.max(t.pitchMin,Math.min(t.pitchMax,Math.asin(Oe/Ce)-a.p.x*B)),ee(!1)}let Ee=t.shake;if(Ee&&Ee.amp&&f.x>0){let re=Ee.amp*(f.x>1?1:f.x),_e=Math.sin(la*Ee.hz*b)*re,Oe=Math.sin(la*Ee.hz*1.3*b+1)*re,ie=-j,Ce=W;_[0]+=ie*_e-Ce*M[1]*Oe,_[1]+=(Ce*M[0]-ie*M[2])*Oe,_[2]+=Ce*_e+ie*M[1]*Oe}if(_[1]-=r.x,c.shake.x>1e-6){let re=c.shake.x,_e=Math.sin(la*17*b)*re,Oe=Math.sin(la*23*b+.7)*re,ie=-j,Ce=W;_[0]+=ie*_e-Ce*M[1]*Oe,_[1]+=(Ce*M[0]-ie*M[2])*Oe,_[2]+=Ce*_e+ie*M[1]*Oe}let Q=t.slamShake;if(o.t>0&&Q&&Q.time>0){o.t=Math.max(0,o.t-R);let re=o.t/Q.time,_e=o.amp*re*re,Oe=Math.sin(la*Q.hz*o.t)*_e,ie=Math.sin(la*Q.hz*1.27*o.t+2)*_e,Ce=-j,He=W;_[0]+=Ce*Oe-He*M[1]*ie,_[1]+=(He*M[0]-Ce*M[2])*ie,_[2]+=He*Oe+Ce*M[1]*ie}return S.fov=n.fov.x+l.x+c.fov.x,S}}}var Nn=[z.hotPink,z.playerOrange,z.glorpPurple,z.tealLight,z.lilac];function LR(t){if(t.prop)return t.prop;let e=t.max[0]-t.min[0],n=t.max[2]-t.min[2],i=t.max[1]-t.min[1],s=Math.max(e,n),r=Math.min(e,n);return t.kind==="pillar"?"pillar":t.kind==="low"?r<.7&&s>=1.8?"planter":"counter":t.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function kR(){let t=[],e=(n,i)=>{let s=new Je(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new Tt(o,3)),n};return{list:t,box(n,i,s){let r=new gt(i[0]-n[0],i[1]-n[1],i[2]-n[2]);r.translate((n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2),t.push(e(r,s))},cyl(n,i,s,r,o,a,l="y"){let c=new Jt(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(n,i,s),t.push(e(c,a))},ball(n,i,s,r,o){let a=new an(r,7,5);a.translate(n,i,s),t.push(e(a,o))}}}var Gi=(t,e,n=t.min[1],i=t.max[1])=>[[t.min[0]-e,n,t.min[2]-e],[t.max[0]+e,i,t.max[2]+e]];function DR(t,e,n,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(t.box([a+s,n,l+d],[c-s,i,l+u],r),t.box([a+s,n,h-u],[c-s,i,h-d],r)):(t.box([a+d,n,l+s],[a+u,i,h-s],r),t.box([c-u,n,l+s],[c-d,i,h-s],r))}function Vi(t,e){let n=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=n>=i,r=s?n:i,o=s?i:n,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,f,m,y){let g=a(c,d),p=a(h,u),v=l(c,d),_=l(h,u);t.box([Math.min(g,p),f,Math.min(v,_)],[Math.max(g,p),m,Math.max(v,_)],y)},cyl(c,h,d,u,f,m,y="y"){let g=y==="y"?"y":y==="u"?s?"x":"z":s?"z":"x";t.cyl(a(c,h),d,l(c,h),u,f,m,g)}}}function NR(t,e){let n=Vi(t,e),{len:i,dep:s}=n,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;n.slab(.03,i-.03,.04,s-.04,0,.5,z.shadowTint);for(let l=0;l<=o;l++){let c=l*a;n.slab(c,c+r,.06,s-.06,0,e.max[1],z.lilac),n.slab(c+.03,c+r-.03,0,.07,.8,.94,z.hotPink),n.slab(c+.03,c+r-.03,s-.07,s,.8,.94,z.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;n.slab(c,h,s/2-.03,s/2+.03,.5,.94,z.tealLight),n.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,z.cream)}}function OR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,z.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,z.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,z.cream),i.slab(.15,s-.15,0,.06,.25,.6,z.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,z.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,Nn[(h+c*2+n)%Nn.length]),i.cyl(d,u,o-.01,.15,.02,z.cream)}}function FR(t,e,n){n%3===1?OR(t,e,n):NR(t,e)}function UR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,z.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,z.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,z.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,z.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?z.ink:Nn[(l+n)%Nn.length])}function BR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,z.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,z.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,z.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let f=(u+.5)/l*s,m=a===1?r/2:r*(.3+d*.4),y=Nn[(u+d+n)%Nn.length];i.cyl(f,m,h,.015,.14,z.cream,"u"),i.cyl(f-.07,m,h,c,.06,y,"u"),i.cyl(f+.07,m,h,c,.06,y,"u")}}function zR(t,e){let n=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=n?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];t.box(...Gi({min:e.min,max:o},-.03,e.min[1],o[1]-.1),z.teal),t.box(...Gi({min:e.min,max:o},0,o[1]-.1,o[1]),z.cream),DR(t,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,z.hotPink,n);let a=(m,y,g,p,v)=>t.box(n?[e.min[0]+m,g,e.min[2]+.12]:[e.min[0]+.12,g,e.min[2]+m],n?[e.min[0]+y,p,e.max[2]-.12]:[e.max[0]-.12,p,e.min[2]+y],v);a(.3,.7,o[1],o[1]+.06,z.cream),a(.32,.68,o[1]+.06,o[1]+.12,z.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,z.cream);let l=n?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=m=>n?e.min[0]+m:e.min[2]+m;n?t.cyl(c(r-.5),o[1]+.14,l,.06,.28,z.gel):t.cyl(l,o[1]+.14,c(r-.5),.06,.28,z.gel);let h=.14,d=n?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[m,y]of d)n?t.box([m,e.min[1],e.min[2]],[y,i,e.max[2]],z.lilac):t.box([e.min[0],e.min[1],m],[e.max[0],i,y],z.lilac);let u=d[0][1],f=d[1][0];n?(t.box([u,i-.12,e.min[2]],[f,i,e.max[2]],z.lilac),t.box([u,o[1],e.min[2]+.2],[f,i-.12,e.max[2]-.2],z.tealLight)):(t.box([e.min[0],i-.12,u],[e.max[0],i,f],z.lilac),t.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,f],z.tealLight))}function HR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,z.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,f]of[[0,a],[r-a,r]])i.slab(h,d,u,f,.12,o,z.lilac);i.slab(0,s,0,r,o-.1,o,z.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,z.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,z.cream),i.cyl(s/2,c,l,.025,s+.1,z.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?z.ink:Nn[n%Nn.length],"u")}function GR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1],a=1.1;i.slab(.06,s-.06,.04,r-.04,0,.08,z.shadowTint),i.slab(.04,s-.04,.02,r-.02,.08,a-.06,z.hotPink),i.slab(.15,s-.15,0,.05,.3,.7,z.cream),i.slab(.15,s-.15,r-.05,r,.3,.7,z.cream),i.slab(-.04,s+.04,-.04,r+.04,a-.06,a,z.cream),i.slab(0,s,r/2-.04,r/2+.04,a,o,z.lilac),i.slab(0,s,r/2-.07,r/2+.07,o-.1,o,z.shadowTint);let l=Math.max(2,Math.floor(s/.9));for(let c=0;c<l;c++)for(let h of[r*.2,r*.8]){let d=(c+.5)/l*s,u=Nn[(c+n+(h>r/2?2:0))%Nn.length],f=Math.min(o-.14,a+.55);i.cyl(d,h,a+.04,.13,.08,z.ink),i.cyl(d,h,(a+.08+f)/2,.11,f-a-.08,u),i.cyl(d,h,f+.03,.12,.06,z.cream)}}function VR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.06,s-.06,.05,r-.05,0,.1,z.shadowTint),i.slab(.03,s-.03,.03,r-.03,.1,o-.1,z.teal),i.slab(.2,s-.2,0,.06,.25,.65,z.hotPink),i.slab(.2,s-.2,r-.06,r,.25,.65,z.hotPink),i.slab(-.04,s+.04,-.04,r+.04,o-.1,o-.04,z.cream);let a=Math.max(2,Math.floor(s/.6));for(let l=0;l<a;l++){let c=(l+.5)/a*s;i.cyl(c,r/2,o-.035,.2,.07,z.ink),i.cyl(c,r/2,o-.02,.17,.04,Nn[(l+n)%Nn.length])}}function WR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.05,s-.05,.05,r-.05,0,.1,z.shadowTint),i.slab(.08,s-.08,.08,r-.08,.1,o-.08,z.cream),i.slab(.08,s-.08,.04,.09,.4,.55,Nn[n%Nn.length]),i.slab(.08,s-.08,r-.09,r-.04,.4,.55,Nn[n%Nn.length]),i.slab(-.04,s+.04,-.04,r+.04,o-.08,o,z.lilac)}function XR(t,e,n){t.box(...Gi(e,0,e.min[1],e.max[1]),z.cream),t.box(...Gi(e,.05,e.min[1],e.min[1]+.25),z.shadowTint),t.box(...Gi(e,.04,e.min[1]+1.1,e.min[1]+2.9),z.ink),[1.4,1.75,2.1,2.45].forEach((i,s)=>t.box(...Gi(e,.055,e.min[1]+i,e.min[1]+i+.1),Nn[(s+n)%Nn.length])),t.box(...Gi(e,.05,e.max[1]-.25,e.max[1]),z.shadowTint)}function YR(t,e){let n=Vi(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.05,.2,.05,s-.05,0,r-.12,z.lilac),n.slab(i-.2,i-.05,.05,s-.05,0,r-.12,z.lilac),n.slab(0,i,0,s,r-.12,r,z.teal);for(let o=.3;o<i-.2;o+=.3)n.slab(o,o+.03,0,s,r-.125,r-.1,z.shadowTint)}function qR(t,e,n){let i=Vi(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.02,s-.02,.02,r-.02,0,o*.5,z.playerOrange),i.slab(0,s,0,r,o*.5-.06,o*.5,z.shadowTint);let a=Math.max(2,Math.floor(s/.5)),l=Math.min(r/2-.02,(o-o*.5)/2-.01);for(let c=0;c<a;c++)i.cyl((c+.5)/a*s,r/2,o*.5+l+.005,l,l*2,c%2?z.gel:z.teal)}function $R(t,e){let n=Vi(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.04,i-.04,.04,s-.04,0,.12,z.shadowTint),n.slab(.02,i-.02,.02,s-.02,.12,r-.1,z.hotPink),n.slab(.1,i-.1,0,.05,.3,.5,z.cream),n.slab(.1,i-.1,s-.05,s,.3,.5,z.cream),n.slab(0,i,0,s,r-.1,r,z.playerOrange)}function KR(t,e){t.box(...Gi(e,0,e.min[1],e.max[1]),z.cream),t.box(...Gi(e,.05,e.min[1],e.min[1]+.25),z.shadowTint),t.box(...Gi(e,.03,e.min[1]+1,e.min[1]+1.12),z.hotPink),t.box(...Gi(e,.05,e.max[1]-.25,e.max[1]),z.shadowTint)}function ZR(t){if(!t)return[];let[e,,n]=t.min,[i,,s]=t.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,n],max:[h+c/2,l,n+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=n+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function Nx(t,e=null){let n=kR();for(let s of ZR(e))n.box(s.min,s.max,z.tealLight);let i=0;return t.forEach((s,r)=>{let o=LR(s);o==="counter"?FR(n,s,i++):o==="planter"?(r%2?BR:UR)(n,s,r):o==="desk"?zR(n,s):o==="shelf"?HR(n,s,r):o==="pillar"?KR(n,s):o==="bar"?GR(n,s,r):o==="bowl"?VR(n,s,r):o==="booth"?WR(n,s,r):o==="menu"?XR(n,s,r):o==="seat"?YR(n,s):o==="plant"?qR(n,s,r):o==="velvet"?$R(n,s):n.box(s.min,s.max,z.lilac)}),Xt(n.list,!1)}var ur=2.7,sd=.22,rd=.16;function Yl(t,e,n){let i=new gt(e[0]-t[0],e[1]-t[1],e[2]-t[2]);i.translate((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),i.deleteAttribute("uv");let s=new Je(n),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return i.setAttribute("color",new Tt(o,3)),i}function Ox(t){let e=t.w,n=e/2,i=new xt;i.name="exit-gate",i.position.set(t.pos[0],t.pos[1],t.pos[2]),i.rotation.y=t.yaw;let s=new at(Xt([Yl([-n-sd,0,0],[-n,ur+.25,rd],z.lilac),Yl([n,0,0],[n+sd,ur+.25,rd],z.lilac),Yl([-n-sd,ur,0],[n+sd,ur+.25,rd],z.hotPink),Yl([-n,0,.005],[n,ur,.04],z.gel)].map(u=>u.toNonIndexed()),!1),Pt({vertexColors:!0,rim:.1}));s.name="gate-frame",i.add(s);let r=u=>{let f=new at(Yl(u<0?[0,0,.04]:[-n,0,.04],u<0?[n,ur,.1]:[0,ur,.1],z.teal).toNonIndexed(),Pt({vertexColors:!0,rim:.1}));return f.position.x=u*n,f.name=u<0?"gate-door-west":"gate-door-east",i.add(f),f},o=r(-1),a=r(1),l=Us({text:"GO \u2192",w:2.2,h:.8,bg:z.glorpPurple,fg:z.gel,seed:5});l.position.set(0,ur+.85,rd+.1),i.add(l);let c=0,h=0,d=()=>{let u=Math.max(.06,1-c);o.scale.x=u,a.scale.x=u,l.visible=c>.5};return d(),{group:i,setOpen(u,f=!1){h=u?1:0,f&&(c=h,d())},update(u){if(c===h||!(u>0))return;let f=1/Math.max(H.run.gateOpenTime,.001);c=c<h?Math.min(h,c+u*f):Math.max(h,c-u*f),d()},openness:()=>c}}var Fx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Fx)),t),dr=.3,jR=[lt([-12,-1,-12],[12,0,12],"floor"),lt([-12-dr,0,-12-dr],[12+dr,4,-12]),lt([-12-dr,0,12],[12+dr,4,12+dr]),lt([-12-dr,0,-12],[-12,4,12]),lt([12,0,-12],[12+dr,4,12]),lt([5,0,-9],[5.3,4,-3]),lt([6.7,0,-9],[7,4,-3]),lt([-11,0,-7.3],[-6,3,-7]),lt([-6.3,0,-11],[-6,3,-7]),lt([-4,0,-3],[-2,1,-2.4],"low"),lt([3,0,3],[3.6,1,5],"low"),lt([-5,0,3],[-3.8,2.2,3.6],"tall"),lt([1,0,-6],[1.6,2.2,-4],"tall"),lt([-9.4,0,.6],[-8.6,4,1.4],"pillar"),lt([8.6,0,3.6],[9.4,4,4.4],"pillar"),lt([-9,0,6.5],[-6,1,7.1],"low"),lt([-4,0,6.5],[-1,1,7.1],"low"),lt([6,0,6],[10,2.2,6.6],"tall"),lt([-12,0,-1],[-10,1,-.4],"low")],Ux=[];for(let t=0;t<=12;t++)Ux.push({min:[-10+t-.05,0,10],max:[-10+t+.05,.02,11]});var ad=Fx({boxes:jR,marks:Ux,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function f0(t){let e=t.map(n=>{let i=new gt(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);return i.translate((n.min[0]+n.max[0])/2,(n.min[1]+n.max[1])/2,(n.min[2]+n.max[2])/2),i});return Xt(e,!1)}var fr=.03,pr=.3,mr=.12,od=2;function JR(t=ad){let e=t.boxes.find(c=>c.kind==="floor");if(!e)return[];let[n,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([n,0,i],[s,pr,i+fr]),l([n,0,r-fr],[s,pr,r]),l([n,0,i],[n+fr,pr,r]),l([s-fr,0,i],[s,pr,r]);for(let c=n+od;c<s-.5;c+=od)l([c-mr/2,pr,i],[c+mr/2,o,i+fr]),l([c-mr/2,pr,r-fr],[c+mr/2,o,r]);for(let c=i+od;c<r-.5;c+=od)l([n,pr,c-mr/2],[n+fr,o,c+mr/2]),l([s-fr,pr,c-mr/2],[s,o,c+mr/2]);return a}function Bx(t=ad){let e=new xt,n=t.boxes.find(a=>a.kind==="floor");e.add(Bu({w:n.max[0]-n.min[0],d:n.max[2]-n.min[2]}));let i=t.boxes.filter(a=>a.kind!=="floor");if(i.length){let a=new at(vi(Nx(i,n)),Pt({vertexColors:!0}));a.name="grey-props",Bn(a),e.add(a)}let s=JR(t);if(s.length){let a=new at(f0(s),Pt({color:z.shadowTint}));a.name="grey-wall-trim",e.add(a)}if(t.marks.length){let a=new at(f0(t.marks),Pt({color:z.hotPink}));a.name="grey-marks",e.add(a)}if(t.ammoCrates&&t.ammoCrates.length){let a=[];for(let c of t.ammoCrates)a.push({min:[c.pos[0]-.35,0,c.pos[2]-.25],max:[c.pos[0]+.35,.4,c.pos[2]+.25]}),a.push({min:[c.pos[0]-.39,.4,c.pos[2]-.29],max:[c.pos[0]+.39,.5,c.pos[2]+.29]});let l=new at(vi(f0(a)),Pt({color:z.playerOrange}));l.name="grey-crate",Bn(l),e.add(l)}if(t.landmark){let a=t.landmark,l=Us({text:a.text,w:a.w,h:a.h});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=Math.PI,e.add(l)}for(let a of t.signs||[]){let l=Us({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:4});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=a.yaw,e.add(l)}let r=null;if(t.cancelSign){let a=t.cancelSign;r=Us({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:6}),r.name="cancel-sign",r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.rotation.y=a.yaw,r.visible=!1,e.add(r)}let o=t.exit?Ox(t.exit):null;return o&&e.add(o.group),{group:e,boxes:t.boxes,gate:o,setGateOpen(a,l=!1){o&&o.setOpen(a,l)},setCancelLit(a){r&&(r.visible=!!a)},update(a){o&&o.update(a)}}}var zx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(zx)),t),gr=.3,ds=7,Wi=15,QR=[lt([-ds,-1,-Wi],[ds,0,Wi],"floor"),lt([-ds-gr,0,-Wi-gr],[ds+gr,4,-Wi]),lt([-ds-gr,0,Wi],[ds+gr,4,Wi+gr]),lt([-ds-gr,0,-Wi],[-ds,4,Wi]),lt([ds,0,-Wi],[ds+gr,4,Wi]),lt([-5,0,-9.5],[-3,1,-8.5],"low"),lt([2,0,-9.5],[4,1,-8.5],"low"),lt([-.4,0,-7.4],[.4,4,-6.6],"pillar"),lt([-1,0,-3.5],[1,1,-2.5],"low"),lt([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),lt([3.5,0,-1.5],[5.5,1,-.5],"low"),lt([-4.5,0,3.5],[-2.5,1,4.5],"low"),lt([2.5,0,3.5],[4.5,1,4.5],"low"),lt([-.4,0,6.6],[.4,4,7.4],"pillar"),lt([-4.5,0,9],[-2.5,1,10],"low"),lt([2.5,0,9],[4.5,1,10],"low"),lt([-1.5,0,12],[1.5,2.2,12.6],"tall")],eC=[-12,-6,.5,7,11],tC=[-6,-2,2,6],ld=[];for(let t of eC)for(let e of tC)ld.push([e,t]);ld.push([0,-5],[0,0],[0,9.5]);ld.push([-3.5,13.5],[3.5,13.5]);var Hx=zx({name:"kioskRow",boxes:QR,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:ld,ammoCrates:[{pos:[5.5,0,-12.5]}],exit:{pos:[-4.5,0,Wi],yaw:Math.PI,w:3},landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});function nC(t,e,n){let i=Math.max(t.min[0]-e,0,e-t.max[0]),s=Math.max(t.min[2]-n,0,n-t.max[2]);return Math.hypot(i,s)}function cd(t,{cols:e,rows:n,clearance:i=.8}){let s=t.filter(o=>o.kind!=="floor"),r=[];for(let o of n)for(let a of e)s.every(l=>nC(l,a,o)>=i)&&r.push([a,o]);return r}var Gx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Gx)),t),vr=.3,xi=20,Pi=18,cn=(t,e,n,i)=>lt(t,e,n,i),Vx=[lt([-xi,-1,-Pi],[xi,0,Pi],"floor"),lt([-xi-vr,0,-Pi-vr],[xi+vr,4,-Pi]),lt([-xi-vr,0,Pi],[xi+vr,4,Pi+vr]),lt([-xi-vr,0,-Pi],[-xi,4,Pi]),lt([xi,0,-Pi],[xi+vr,4,Pi]),cn([-7,0,-.35],[7,2.2,.35],"tall","bar"),cn([-3,0,14.2],[3,2.2,14.9],"tall","bar"),cn([-9,0,9.5],[-5,1,10.5],"low","bowl"),cn([5,0,9.5],[9,1,10.5],"low","bowl"),cn([-1,0,10.8],[1,1,11.8],"low","booth"),cn([-14.6,0,-5],[-13,1,-4],"low","booth"),cn([13,0,-5],[14.6,1,-4],"low","booth"),cn([-14.6,0,4],[-13,1,5],"low","booth"),cn([13,0,4],[14.6,1,5],"low","booth"),cn([-3.6,0,-6.5],[-2,1,-5.5],"low","booth"),cn([2,0,-6.5],[3.6,1,-5.5],"low","booth"),cn([-3.6,0,4.5],[-2,1,5.5],"low","booth"),cn([2,0,4.5],[3.6,1,5.5],"low","booth"),cn([-9,0,-13],[-6,1,-12.4],"low","plant"),cn([6,0,-13],[9,1,-12.4],"low","plant"),cn([-17,0,10],[-14,1,10.6],"low","plant"),cn([10.5,0,13.2],[13.5,1,13.8],"low","plant"),cn([-18.5,0,-10],[-16.5,1,-9.4],"low","seat"),cn([16.5,0,-10],[18.5,1,-9.4],"low","seat"),cn([-12.4,0,-9.4],[-11.6,4,-8.6],"pillar","menu"),cn([11.6,0,-9.4],[12.4,4,-8.6],"pillar","menu"),cn([-12.4,0,8.6],[-11.6,4,9.4],"pillar","menu"),cn([11.6,0,8.6],[12.4,4,9.4],"pillar","menu")],Wx=cd(Vx,{cols:[-17.5,-12.5,-7.5,-2.5,2.5,7.5,12.5,17.5],rows:[-15.5,-10.5,-7.5,-2.5,2.5,7.5,12,16.5],clearance:.9});Wx.push([0,-3.5],[0,3.5],[0,8],[-4,15.8],[0,15.8],[4,15.8],[14.5,12],[16,16.5],[-12,16],[-9.5,12],[9.5,12]);var Xx=Gx({name:"smoothieBar",boxes:Vx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-16.5],yaw:0},trigger:{z:-14},features:{start:{pos:[0,0,-16.5],yaw:0},startCover:{pos:[-7.5,0,-13.4],yaw:0},mid:{pos:[0,0,-3.5],yaw:0},open:{pos:[0,0,-9],yaw:0},flankWest:{pos:[-16,0,0],yaw:0},flankEast:{pos:[16,0,0],yaw:0}},associates:[{id:"a1",pos:[-8.3,0,10.88]},{id:"a2",pos:[-5.7,0,10.88]},{id:"b1",pos:[5.7,0,10.88]},{id:"b2",pos:[8.3,0,10.88]},{id:"c1",pos:[0,0,12.18]},{id:"t1",kind:"trainer",pos:[-12,0,6]}],pads:[{id:"sauna1",pos:[14.5,0,16.4],spawns:"associate",openKey:"openAfterKillsSmoothie",shareKey:"trainerShareSmoothie"}],tobble:{pos:[1.6,0,-16.5],yaw:0},waypoints:Wx,ammoCrates:[{pos:[6.5,0,-16.8]},{pos:[-16.5,0,14.5]}],exit:{pos:[-12,0,Pi],yaw:Math.PI,w:3.4},landmark:{pos:[9,3.2,Pi-.3],text:"SMOOTHIE BAR",w:7,h:1.4},signs:[{pos:[0,2.9,14.95],yaw:Math.PI,text:"FREE TRIAL COUNTER \u2014 No commitment!*",w:6.2,h:1,bg:"#ff4f9a"},{pos:[-xi+.14,2.2,-2],yaw:Math.PI/2,text:"BUILD-YOUR-BOWL",w:3.2,h:1.2,bg:"#2ec4b6"},{pos:[xi-.14,2.2,2],yaw:-Math.PI/2,text:"BLEND NOW, QUIT LATER",w:3.6,h:1.2,bg:"#ff8a1f"},{pos:[xi-.14,2.4,-12],yaw:-Math.PI/2,text:"SMOOTHIE BAR",w:3.6,h:1.2,bg:"#b9a7ff"}]});var Yx=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(Yx)),t),xr=.3,Ii=12,Xi=10,qx=[lt([-Ii,-1,-Xi],[Ii,0,Xi],"floor"),lt([-Ii-xr,0,-Xi-xr],[Ii+xr,4,-Xi]),lt([-Ii-xr,0,Xi],[Ii+xr,4,Xi+xr]),lt([-Ii-xr,0,-Xi],[-Ii,4,Xi]),lt([Ii,0,-Xi],[Ii+xr,4,Xi]),lt([-4,0,7.2],[4,2.2,7.9],"tall","desk"),lt([-8,0,-3.2],[-5.5,1,-2.6],"low","velvet"),lt([5.5,0,-3.2],[8,1,-2.6],"low","velvet"),lt([-4.5,0,1.8],[-2,1,2.4],"low","velvet"),lt([2,0,1.8],[4.5,1,2.4],"low","velvet"),lt([-6.4,0,-.4],[-5.6,4,.4],"pillar"),lt([5.6,0,4.2],[6.4,4,5],"pillar")],$x=cd(qx,{cols:[-10,-6,-2,2,6,10],rows:[-8,-5,-1.5,3.5,6,8.8],clearance:.9});$x.push([0,-3.5],[0,2],[-6,5.5],[6,5.5],[-5.5,9],[5.5,9],[0,9]);var Kx=Yx({name:"cancellationDesk",boss:!0,boxes:qx,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-8.5],yaw:0},trigger:{z:-6.5},features:{start:{pos:[0,0,-8.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},desk:{pos:[0,0,5.8],yaw:0}},associates:[],overlord:{spots:[{hide:[-3.2,8.9],pop:[-5.4,8.5]},{hide:[3.2,8.9],pop:[5.4,8.5]}],deskHide:[0,8.9],desk:{x0:-4,x1:4,z:7.2}},cancelSign:{pos:[0,1.75,7.2-.12],yaw:Math.PI,text:"PRESS E / X TO CANCEL",w:3.8,h:.9,bg:"#2a9d2a"},pads:[{id:"sauna1",pos:[-9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"},{id:"sauna2",pos:[9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"}],tobble:{pos:[1.5,0,-8.7],yaw:0},waypoints:$x,ammoCrates:[{pos:[-10.5,0,-8.8]}],landmark:{pos:[0,3.2,Xi-.3],text:"CANCELLATION DESK",w:7,h:1.3},signs:[{pos:[-Ii+.14,2.2,-1],yaw:Math.PI/2,text:"PLEASE TAKE A NUMBER \u2014 NOW SERVING: 3",w:4.2,h:1.3,bg:"#ff4f9a"},{pos:[Ii-.14,2.2,-1],yaw:-Math.PI/2,text:"ALL SALES FINAL. ALL EXITS FINAL.",w:4.2,h:1.3,bg:"#7a3cff"}]});var Zx=Object.freeze({turnstiles:Hx,smoothie:Xx,desk:Kx});var On=Object.freeze(["turnstiles","smoothie","desk"]),ud=Object.freeze({turnstiles:"Check-in Turnstiles",smoothie:"Smoothie Bar",desk:"The Cancellation Desk"}),jx=Object.freeze(["Tues 2:00\u20132:10","Tues 2:00\u20132:05","By appointment"]),p0=t=>`Cancellation hours: ${jx[Math.max(0,Math.min(jx.length-1,t|0))]}`,Jx="gyms-of-war.checkpoint",hd=t=>Number.isInteger(t)&&t>=0&&t<On.length?t:0,m0=t=>{let e=On.indexOf(t);return e<0?0:e};function dd(t){try{let e=t&&t.getItem(Jx);return e==null?0:hd(Number(e))}catch{return 0}}function iC(t,e){try{t&&t.setItem(Jx,String(hd(e)))}catch{}}function Qx(t,e,n=H.run.gateReach){if(!t)return!1;let i=e[0]-t.pos[0],s=e[2]-t.pos[2],r=Math.sin(t.yaw),o=Math.cos(t.yaw),a=i*o-s*r,l=i*r+s*o;return Math.abs(a)<=t.w/2&&l>=-.25&&l<=n}function ey({storage:t=null,tuning:e=H}={}){let n=()=>e.run,i=0,s=0,r="play",o=0,a=!1,l=dd(t),c=d=>{s=hd(d),iC(t,s)},h={get index(){return i},get checkpoint(){return s},get arena(){return On[i]},get phase(){return r},get cleared(){return a},get fading(){return r!=="play"},get hasNext(){return i<On.length-1},saved:l,get fade(){return r==="fadeOut"?Math.min(1,o/Math.max(n().fadeOut,1e-6)):r==="black"?1:r==="fadeIn"?Math.max(0,1-o/Math.max(n().fadeIn,1e-6)):0},get gateOpen(){return a&&h.hasNext},markClear(){return r==="play"&&(a=!0),h.gateOpen},touchGate(){return r!=="play"||!h.gateOpen?!1:(r="fadeOut",o=0,!0)},restart(){return a=!1,r="play",o=0,On[i]},goTo(d){return i=hd(d),c(i),a=!1,r="play",o=0,On[i]},newRun(){return h.goTo(0)},step(d){let u=[];if(!(d>0)||r==="play")return u;if(o+=d,r==="fadeOut"&&o>=n().fadeOut){let f=On[i];i=Math.min(On.length-1,i+1),c(i),a=!1,r="black",o=0,u.push({type:"swap",from:f,to:On[i]})}return r==="black"&&o>=n().blackHold&&(r="fadeIn",o=0),r==="fadeIn"&&o>=n().fadeIn&&(r="play",o=0,u.push({type:"faded"})),u}};return h}var ty="gyms-of-war.settings",$l=Object.freeze([Object.freeze({key:"volume",label:"Master volume",kind:"range",min:0,max:1,step:.1,def:1}),Object.freeze({key:"mouseSens",label:"Mouse sensitivity",kind:"range",min:.3,max:2.5,step:.1,def:1}),Object.freeze({key:"invertY",label:"Invert Y (look up/down)",kind:"toggle",def:!1}),Object.freeze({key:"padSens",label:"Pad look sensitivity",kind:"range",min:.3,max:2.5,step:.1,def:1})]),hO=Object.freeze(Object.fromEntries($l.map(t=>[t.key,t.def]))),sC=(t,e)=>Math.round(t/e)*e;function ql(t){let e={},n=t&&typeof t=="object"?t:{};for(let i of $l){let s=n[i.key];if(i.kind==="toggle")e[i.key]=typeof s=="boolean"?s:i.def;else{let r=typeof s=="number"&&Number.isFinite(s)?s:i.def;e[i.key]=Number(sC(Math.min(i.max,Math.max(i.min,r)),i.step).toFixed(3))}}return e}function ny(t){try{let e=t&&t.getItem(ty);return ql(e?JSON.parse(e):null)}catch{return ql(null)}}function g0(t,e){try{t&&t.setItem(ty,JSON.stringify(ql(e)))}catch{}}function iy(t,e,n){let i=$l.find(r=>r.key===e);if(!i)return ql(t);let s={...t};return s[e]=i.kind==="toggle"?!t[e]:t[e]+(n<0?-i.step:i.step),ql(s)}function sy(t,e){return t.kind==="toggle"?e?"On":"Off":t.key==="volume"?`${Math.round(e*100)}%`:`${e.toFixed(1)}x`}var ry="gyms-of-war.introSeen";function oy(t){try{return!!(t&&t.getItem(ry))}catch{return!1}}function ay(t){try{t&&t.setItem(ry,"1")}catch{}}var ca=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G",finish:"E",cover:"Space",aim:"right mouse",pop:"right mouse",reload:"R",throw:"Release G",rev:"F"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"D-pad Up",finish:"Y",cover:"A",aim:"LT",pop:"LT",reload:"RB",throw:"RT",rev:"B"})}),ly={throw:t=>`${t.throw}  throw`,equipped:t=>`${t.aim} aim  ${t.throw} throw`,reviveTobble:t=>`Hold ${t.interact}  revive Tobble`,finish:t=>`${t.finish}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:t=>`${t.melee}  bash`,rev:t=>`Hold ${t.melee}  rev Cheat Day`,giveUp:t=>`Hold ${t.interact}  renew your membership`,giveUpTobble:t=>`Tobble is coming! Hold ${t.interact} to renew your membership`,sauna:t=>`Close the Spawn Sauna (${t.grenade} kettlebell)`,cancel:t=>`Hold ${t.interact}  CANCEL`};function Jr(t,e="kbm"){let n=Object.hasOwn(ly,t)?ly[t]:null;return n?n(ca[e]||ca.kbm):""}var cy="GYMS OF WAR",hy="NO PAIN, NO CANCEL";function uy({saved:t=0,arenaTitle:e=""}={}){let n=[];return t>0&&n.push({id:"continue",label:e?`Continue \u2014 ${e}`:"Continue"}),n.push({id:"new",label:"New Run"},{id:"settings",label:"Settings"},{id:"controls",label:"Controls"},{id:"back",label:"Back to games"}),n}var dy=Object.freeze([Object.freeze({id:"resume",label:"Resume"}),Object.freeze({id:"settings",label:"Settings"}),Object.freeze({id:"controls",label:"Controls"}),Object.freeze({id:"restart",label:"Restart arena"}),Object.freeze({id:"quit",label:"Quit to title"})]);function fy(t=ca){let e=t.kbm,n=t.pad;return[["Move","W A S D","Left stick"],["Look","Mouse","Right stick"],["Aim (pop out of cover)","Right mouse","LT"],["Fire (no aim in cover: blind fire)","Left mouse","RT"],["Reload (again on the bright zone)",e.reload,n.reload],["Take cover, vault, roll (tap) / sprint (hold)",e.cover,n.cover],["Bash (tap) / rev Cheat Day (hold)",e.melee,n.melee],["Kettlebell: hold to aim, release to throw (pad: equip, LT aim, RT throw)",e.grenade,n.grenade],["Pick up, revive Tobble, renew, cancel",e.interact,n.interact],["Finish a downed alien",e.finish,n.finish],["Turn toward the objective (tap)","Tab","Y"],["Tac/Com: objective and Tobble marked (hold)","\u2014","LB"],["The Regret / Guest Pass","1 / 3 or wheel","D-pad Right / Down"],["Pause","Esc","Start"],["This card","\u2014","View"]]}var v0=Object.freeze(["Seven years ago, on January 2nd, Doc Vex signed up for GlorpFit Orbital.","He went twice.","He has been billed $49.99 every month since.","GlorpFit has been taken over by the Glorp, aliens that feed on unused memberships.","Cancellation must be made in person, at the Cancellation Desk, on the top floor.","It is Tuesday. It is 1:30."]);function Kl(t,e,n){return e>0?((t+(n<0?-1:1))%e+e)%e:0}var rC=new Set(["Backquote","KeyH"]),oC=.4,aC=.12;function Qt(t,e,n,i){let s=document.createElement(t);return e&&(s.className=e),i!==void 0&&(s.textContent=i),n&&n.appendChild(s),s}function py(t){let e=Qt("div",null,document.body);e.id="cr-menu",e.hidden=!0;let n=null,i="title",s=0,r=[],o=t.settings,a=null,l=!1,c={get open(){return n!==null},get screen(){return n},get settings(){return o},showTitle(){i="title",h("title")},showPause(){i="pause",h("pause")},showControls(){i="game",h("controls")},showIntro(x){a=x,h("intro")},hide(){n=null,e.hidden=!0,document.body.classList.remove("cr-menu-open","cr-on-title"),e.replaceChildren()},pad(x){T(x)},choose(x){let b=r.findIndex(C=>C.id===x);return b>=0?(s=b,v(),!0):!1},items:()=>r.map(x=>x.id)};function h(x){n=x,s=0,e.hidden=!1,l=!1,document.body.classList.add("cr-menu-open"),document.body.classList.toggle("cr-on-title",x==="title"||(x==="settings"||x==="controls")&&i==="title"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),u()}function d(){n==="title"?r=uy({saved:t.saved?t.saved():0,arenaTitle:t.arenaTitle?t.arenaTitle(t.saved()):""}):n==="pause"?r=dy.map(x=>({...x})):n==="settings"?r=[...$l.map(x=>({id:x.key,label:x.label,row:x})),{id:"close",label:"Back"}]:n==="controls"?r=[{id:"resetTutorial",label:l?"Tutorial hints will show again":"Reset tutorial hints"},{id:"close",label:"Back"}]:r=[]}function u(){d(),e.replaceChildren(),e.onclick=null,e.dataset.screen=n;let x=Qt("div","cr-menu-box",e);if(n==="intro"){Qt("div","cr-menu-kicker",x,"GLORPFIT ORBITAL"),v0.forEach((C,L)=>Qt("div",L===v0.length-1?"cr-intro-line cr-intro-last":"cr-intro-line",x,C)),Qt("div","cr-menu-hint",x,"Press any key, click, or A"),e.onclick=y;return}if(n==="title"?(Qt("div","cr-menu-title",x,cy),Qt("div","cr-menu-tag",x,hy)):Qt("div","cr-menu-head",x,n==="pause"?"PAUSED":n==="settings"?"SETTINGS":"CONTROLS"),n==="controls"){let C=Qt("div","cr-controls",x),L=Qt("div","cr-ctl-row cr-ctl-head",C);Qt("span",null,L,""),Qt("span",null,L,"Keyboard + mouse"),Qt("span",null,L,"Gamepad");for(let[R,w,k]of fy()){let P=Qt("div","cr-ctl-row",C);Qt("span","cr-ctl-what",P,R),Qt("span","cr-ctl-key",P,w),Qt("span","cr-ctl-pad",P,k)}}let b=Qt("div","cr-menu-list",x);r.forEach((C,L)=>{let R=Qt("div","cr-menu-item",b);if(R.setAttribute("role","menuitem"),R.dataset.id=C.id,L===s&&R.classList.add("sel"),R.addEventListener("mouseenter",()=>{s=L,f()}),C.row){R.classList.add("cr-setting"),Qt("span","cr-set-label",R,C.label);let w=Qt("span","cr-set-ctl",R);C.row.kind==="range"&&Qt("span","cr-set-step",w,"\u2212").addEventListener("click",P=>{P.stopPropagation(),s=L,m(-1)}),Qt("span","cr-set-val",w,sy(C.row,o[C.id])),C.row.kind==="range"&&Qt("span","cr-set-step",w,"+").addEventListener("click",P=>{P.stopPropagation(),s=L,m(1)}),R.addEventListener("click",()=>{s=L,C.row.kind==="toggle"&&m(1)})}else R.textContent=C.label,R.addEventListener("click",()=>{s=L,v()})}),n==="title"&&Qt("div","cr-menu-hint",x,"Mouse, arrow keys + Enter, or a gamepad")}function f(){e.querySelectorAll(".cr-menu-item").forEach((x,b)=>x.classList.toggle("sel",b===s))}function m(x){let b=r[s];n!=="settings"||!b||!b.row||(o=iy(o,b.id,x),t.onSettings&&t.onSettings(o),u())}function y(){if(n!=="intro")return;let x=a;a=null,n=null,c.hide(),x&&x()}function g(){i==="game"?(c.hide(),t.actions.resume()):h(i)}function p(){n==="settings"||n==="controls"?g():n==="pause"?(c.hide(),t.actions.resume()):n==="intro"&&y()}function v(){let x=r[s];if(!x)return;let b=t.actions;switch(x.id){case"continue":c.hide(),b.continue();break;case"new":c.hide(),b.newRun();break;case"settings":h("settings");break;case"controls":h("controls");break;case"back":b.back();break;case"resume":c.hide(),b.resume();break;case"restart":c.hide(),b.restart();break;case"quit":c.hide(),b.quit();break;case"close":g();break;case"resetTutorial":b.resetTutorial&&b.resetTutorial(),l=!0,u();break;default:x.row&&m(1)}}window.addEventListener("keydown",x=>{if(!(n===null||rC.has(x.code))&&(x.preventDefault(),x.stopImmediatePropagation(),!(x.metaKey||x.ctrlKey||x.altKey||["ShiftLeft","ShiftRight","ControlLeft","ControlRight","AltLeft","AltRight","MetaLeft","MetaRight"].includes(x.code)))){if(n==="intro"){x.repeat||y();return}switch(x.code){case"ArrowUp":case"KeyW":s=Kl(s,r.length,-1),f();break;case"ArrowDown":case"KeyS":s=Kl(s,r.length,1),f();break;case"ArrowLeft":case"KeyA":m(-1);break;case"ArrowRight":case"KeyD":m(1);break;case"Enter":case"Space":x.repeat||v();break;case"Escape":x.repeat||p();break;default:break}}},!0),e.addEventListener("contextmenu",x=>x.preventDefault());let _={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,start:!1,select:!1},M={up:0,down:0,left:0,right:0};function S(){let x=[];try{x=navigator.getGamepads&&navigator.getGamepads()||[]}catch{x=[]}for(let b of x){if(!b||!b.connected||!b.buttons||b.buttons.length<10)continue;let C=b.axes||[],L=R=>!!(b.buttons[R]&&b.buttons[R].pressed);return{up:L(12)||(C[1]||0)<-.6,down:L(13)||(C[1]||0)>.6,left:L(14)||(C[0]||0)<-.6,right:L(15)||(C[0]||0)>.6,a:L(0),b:L(1),start:L(9),select:L(8)}}return null}function T(x){let b=S();if(!b){_={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,start:!1,select:!1};return}let C=_;if(_=b,n===null){M={up:0,down:0,left:0,right:0};return}let L=w=>b[w]?C[w]?(M[w]-=x,M[w]<=0?(M[w]=aC,!0):!1):(M[w]=oC,!0):(M[w]=0,!1),R=w=>b[w]&&!C[w];if(n==="intro"){(R("a")||R("b")||R("start"))&&y();return}L("up")&&(s=Kl(s,r.length,-1),f()),L("down")&&(s=Kl(s,r.length,1),f()),L("left")&&m(-1),L("right")&&m(1),R("a")?v():R("b")?p():R("start")?n==="pause"?p():n==="title"&&v():R("select")&&n==="controls"&&i==="game"&&p()}return c}function x0(t){let e=new Set,n=new Set,i=new Set;t.traverse(s=>{s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];if(!(s.userData&&s.userData.isOutline))for(let o of r)n.add(o)});for(let s of n)for(let r of Object.keys(s)){let o=s[r];o&&o.isTexture&&i.add(o)}return e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),t.parent&&t.parent.remove(t),{geometries:e.size,materials:n.size,textures:i.size}}var yr=class t{constructor(e,n,i,s,r="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),t.nextNameID=t.nextNameID||0,this.$name.id=`lil-gui-name-${++t.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},y0=class extends yr{constructor(e,n,i){super(e,n,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function b0(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}var lC={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:b0,toHexString:b0},jl={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},cC={isPrimitive:!1,match:t=>Array.isArray(t)||ArrayBuffer.isView(t),fromHexString(t,e,n=1){let i=jl.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return jl.toHexString(s)}},hC={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){let i=jl.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return jl.toHexString(s)}},uC=[lC,jl,cC,hC];function dC(t){return uC.find(e=>e.match(t))}var _0=class extends yr{constructor(e,n,i,s){super(e,n,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=dC(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=b0(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Zl=class extends yr{constructor(e,n,i){super(e,n,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},M0=class extends yr{constructor(e,n,i,s,r,o){super(e,n,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let n=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))},o=!1,a,l,c,h,d,u=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",y)},m=v=>{if(o){let _=v.clientX-a,M=v.clientY-l;Math.abs(M)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>u&&y()}if(!o){let _=v.clientY-c;d-=_*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",y)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(p,v,_,M,S)=>(p-v)/(_-v)*(S-M)+M,n=p=>{let v=this.$slider.getBoundingClientRect(),_=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(_)},i=p=>{this._setDraggingStyle(!0),n(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{n(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=p=>{p.preventDefault(),this._setDraggingStyle(!0),n(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(o){let v=p.touches[0].clientX-a,_=p.touches[0].clientY-l;Math.abs(v)>Math.abs(_)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),n(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),m=400,y,g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();let _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(f,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),e-=n,e=Math.round(e/this._step)*this._step,e+=n,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},w0=class extends yr{constructor(e,n,i,s){super(e,n,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(n=>{let i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?e:this._names[n],this}},S0=class extends yr{constructor(e,n,i){super(e,n,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},fC=`.lil-gui {
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
}`;function pC(t){let e=document.createElement("style");e.innerHTML=t;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var my=!1,fd=class t{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!my&&a&&(pC(fC),my=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,n,i,s,r){if(Object(i)===i)return new w0(this,e,n,i);let o=e[n];switch(typeof o){case"number":return new M0(this,e,n,i,s,r);case"boolean":return new y0(this,e,n);case"string":return new S0(this,e,n);case"function":return new Zl(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new _0(this,e,n,i)}addFolder(e){let n=new t({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Zl||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Zl)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}};var A=(t,e,n,i)=>({path:t,min:e,max:n,step:i});function gy(t){let e=(n,i,s,r)=>A(`weapons.${t}.${n}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,40,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var Jl=Object.freeze([A("move.jog",1,10,.1),A("move.aimWalk",.5,6,.1),A("move.sprint",2,14,.1),A("move.accelTime",.01,.6,.01),A("move.stopTime",.01,.6,.01),A("move.turnRate",1,40,.5),A("move.aimTurnRate",1,40,.5),A("move.sprintTurnRate",.2,20,.1),A("move.rollDistance",1,12,.1),A("move.rollTime",.2,1.5,.01),A("move.rollEase",1,4,.05),A("move.rollBuffer",0,.5,.01),A("move.tapMax",.05,.5,.01),A("move.stickSprintMin",0,1,.05),A("move.faceMinSpeed",0,2,.05),A("move.sprintHeadingMinSpeed",0,3,.05),A("move.runClipMinSpeed",0,2,.05),A("move.runRateMin",.1,2,.05),A("move.runRateMax",.5,4,.05),A("move.sprintRateMin",.1,2,.05),A("move.sprintRateMax",.5,4,.05),A("move.stepEvery",.4,4,.05),A("move.stepEverySprint",.4,6,.05),A("move.crawlSpeed",.2,4,.05),A("move.crawlTurnRate",.5,20,.5),A("camera.fov",40,110,1),A("camera.right",-1.5,1.5,.01),A("camera.up",.5,3,.01),A("camera.back",.5,6,.05),A("camera.aim.fov",20,90,1),A("camera.aim.back",.3,5,.05),A("camera.sprint.fov",50,120,1),A("camera.sprint.up",.3,3,.01),A("camera.sprint.back",.5,6,.05),A("camera.sprint.shakeWeight",0,3,.05),A("camera.coverLow.fov",50,120,1),A("camera.coverLow.right",-1.5,1.5,.01),A("camera.coverLow.up",.3,3,.01),A("camera.coverLow.back",.5,6,.05),A("camera.coverTall.fov",50,120,1),A("camera.coverTall.right",-1.5,1.5,.01),A("camera.coverTall.up",.3,3,.01),A("camera.coverTall.back",.5,6,.05),A("camera.downed.fov",40,120,1),A("camera.downed.up",.2,3,.01),A("camera.downed.back",.5,6,.05),A("camera.bump.amount",0,.6,.01),A("camera.bump.halfLife",.01,.3,.005),A("camera.slamShake.amount",0,.3,.005),A("camera.slamShake.time",.02,1,.01),A("camera.slamShake.hz",2,60,.5),A("camera.slamFovKick",-15,15,.5),A("camera.slamFovHalfLife",.01,.6,.01),A("camera.objectiveTurnTime",.05,2,.05),A("camera.sustainHalfLife",.01,.5,.01),A("camera.blendHalfLife",0,.5,.005),A("camera.holdTime",0,2,.05),A("camera.holdRange",10,300,5),A("camera.followHalfLife",0,.5,.005),A("camera.sideHalfLife",0,.6,.005),A("camera.headHideDist",0,2,.05),A("camera.headHideMargin",0,1,.01),A("camera.shake.amp",0,.15,.001),A("camera.shake.hz",1,30,.5),A("camera.probeRadius",.05,.6,.01),A("camera.minBack",0,2,.01),A("camera.wallReturnHalfLife",0,1,.01),A("camera.pitchMin",-1.5,0,.01),A("camera.pitchMax",0,1.5,.01),A("look.mouse",5e-4,.008,1e-4),A("look.pad.yawRate",.5,10,.1),A("look.pad.pitchRate",.5,10,.1),A("look.pad.expo",1,3,.05),A("look.aimScale",.1,1.5,.01),{path:"look.invertY"},A("cover.grabRange",0,5,.05),A("cover.grabAngle",0,180,1),A("cover.grabViewAngle",0,180,1),A("cover.grabSlack",0,5,.05),A("cover.grabMinTilt",0,1,.05),A("cover.gap",0,5,.01),A("cover.endInset",0,5,.01),A("cover.minLength",0,5,.05),A("cover.slideSpeed",0,30,.5),A("cover.slideMinTime",0,2,.01),A("cover.slideMaxTime",0,2,.01),A("cover.slideTurnRate",1,60,.5),A("cover.moveSpeed",0,30,.1),A("cover.alongDeadzone",0,1,.05),A("cover.leaveTilt",0,1,.05),A("cover.leaveAngle",0,180,1),A("cover.endLeaveTime",0,2,.01),A("cover.cornerZone",0,5,.05),A("cover.popTime",0,2,.01),A("cover.blindTime",0,2,.01),A("cover.popShift",0,5,.05),A("cover.pushAngle",0,180,1),A("cover.lowDrawBack",0,1,.01),A("cover.blindDrawBack",0,1,.01),A("cover.vaultTime",0,2,.01),A("cover.vaultMaxDepth",0,5,.05),A("cover.vaultHop",0,5,.05),A("cover.vaultExitSpeed",0,30,.1),A("cover.swapRange",0,5,.05),A("cover.swapSpeed",0,30,.5),A("cover.swapAngle",0,180,1),A("cover.swapMaxOffset",0,5,.05),A("cover.slamSquash",0,1,.01),A("cover.slamSquashTime",0,2,.01),A("cover.thudVolume",0,1,.05),A("cover.autoSlam",0,1,1),A("cover.autoAngle",0,90,1),A("cover.autoDist",0,1,.01),A("cover.autoMinTilt",0,1,.05),A("cover.autoMinSpeed",0,12,.1),A("cover.autoTime",0,1,.01),...gy("regret"),...gy("pistol"),A("combat.fireBuffer",0,.5,.01),A("combat.autoReload",0,1,1),A("combat.minRate",.01,1,.01),A("combat.minReloadTime",.01,.5,.01),A("combat.muzzleUp",.5,2,.01),A("combat.muzzleRight",-1,1,.01),A("combat.muzzleForward",0,2,.01),A("combat.blindLift",0,1,.01),A("combat.blindReach",0,1,.01),A("combat.crateRadius",.3,3,.05),A("combat.hitPad",0,.3,.005),A("combat.crouchHead",0,3,.01),A("combat.crouchBodyTop",0,3,.01),A("combat.shoulderDrop",0,1,.01),A("combat.pickupRadius",.2,3,.05),A("health.max",1,500,1),A("health.regenDelay",0,15,.1),A("health.regenTime",0,15,.1),A("health.downedTime",0,60,.5),A("health.standInRevive",0,1,1),A("health.reviveTime",0,10,.1),A("health.reviveHealth",0,1,.05),A("health.godMode",0,1,1),A("health.giveUpHold",.3,5,.01),A("associate.radius",0,3,.01),A("associate.height",0,3,.01),A("associate.pointSpacing",.2,3,.01),A("associate.reserveRadius",0,3,.01),A("associate.popShift",0,3,.01),A("associate.linkMax",2,15,.5),A("associate.health",1,1e3,1),A("associate.runSpeed",0,12,.1),A("associate.turnRate",.5,40,.5),A("associate.arriveDist",.01,1,.01),A("associate.stuckTime",.1,5,.1),A("associate.popTime",0,1,.01),A("associate.telegraphTime",0,2,.01),A("associate.burstTime",0,5,.1),A("associate.rate",.5,20,.5),A("associate.damage",0,50,.5),A("associate.range",5,100,1),A("associate.spread",0,15,.1),A("associate.moveSpread",0,15,.1),A("associate.aimLag",0,1,.01),A("associate.suppressChance",0,1,.05),A("associate.suppressTime",0,5,.1),A("associate.suppressRate",.5,20,.5),A("associate.suppressMiss",0,5,.1),A("associate.suppressSpread",0,20,.5),A("associate.coverWaitMin",0,5,.1),A("associate.coverWaitMax",0,8,.1),A("associate.magBursts",1,10,1),A("associate.reloadTime",0,6,.1),A("associate.flinchTime",0,2,.01),A("associate.minRange",0,20,.5),A("associate.preferRange",0,40,.5),A("associate.maxRange",1,60,.5),A("associate.relocateCheck",.05,3,.05),A("associate.relocateAfter",1,60,.5),A("associate.ammoDrop",0,200,1),A("associate.muzzleUp",.5,2,.01),A("director.tokens",0,8,1),A("director.casualTokens",0,8,1),A("director.casual",0,1,1),A("director.tokenCooldown",0,5,.1),A("director.tokenMaxHold",.5,10,.1),A("director.requestWindow",0,2,.05),A("director.pushAfter",1,30,.5),A("director.flankAfter",1,60,.5),A("director.stayRadius",.5,10,.1),A("director.flankAngle",0,180,1),A("director.flankMaxAngle",60,180,1),A("director.maxEnemies",4,8,1),A("associate.downChance",0,1,.05),A("associate.downedCrawl",0,3,.05),A("associate.bleedTime",1,60,.5),A("associate.reviveTime",0,10,.1),A("associate.reviveHealth",.05,1,.05),A("associate.reviveRange",0,40,.5),A("associate.staggerTime",0,3,.05),A("associate.diveWarn",0,1.6,.05),A("associate.diveRadius",0,12,.1),A("associate.diveChance",0,1,.05),A("associate.diveReaction",0,2,.05),A("associate.diveDistance",0,10,.1),A("associate.diveTime",.05,3,.05),A("pad.radius",.1,4,.05),A("pad.openAfterKills",0,8,1),A("pad.openAfterKillsSmoothie",0,8,1),A("pad.openAfter",0,120,1),A("pad.interval",.5,30,.5),A("pad.maxAlive",1,8,1),A("pad.total",1,30,1),A("pad.riseTime",0,3,.05),A("pad.trainerShare",0,1,.05),A("pad.trainerShareSmoothie",0,1,.05),A("pad.trainerShareBoss",0,1,.05),A("trainer.health",1,1e3,1),A("trainer.scaleW",.5,2,.05),A("trainer.scaleH",.5,2,.05),A("trainer.runSpeed",0,12,.1),A("trainer.turnRate",.5,40,.5),A("trainer.maxAlive",0,8,1),A("trainer.swingRange",.5,4,.05),A("trainer.swingSlack",0,2,.05),A("trainer.swingArc",10,360,5),A("trainer.windup",.05,2,.05),A("trainer.lockTime",0,1,.05),A("trainer.swingTime",.05,1.5,.05),A("trainer.recover",0,3,.05),A("trainer.swingGap",0,3,.05),A("trainer.damage",0,100,1),A("trainer.tobbleDamage",0,100,1),A("trainer.knockback",0,6,.1),A("trainer.knockTime",.05,1.5,.05),A("trainer.staggerTime",0,3,.05),A("trainer.preferDoc",.1,2,.05),A("trainer.retargetTime",.05,3,.05),A("trainer.repathTime",.1,3,.05),A("trainer.avoidRadius",0,5,.1),A("trainer.avoidWeight",0,5,.1),A("trainer.stuckTime",.1,3,.1),A("trainer.diveChance",0,1,.05),A("trainer.barkChance",0,1,.05),A("run.fadeOut",.05,3,.05),A("run.blackHold",0,2,.05),A("run.fadeIn",.05,3,.05),A("run.gateReach",.5,4,.1),A("run.hoursTime",1,20,.5),A("run.gateOpenTime",.1,3,.05),A("run.attractSpeed",0,1,.02),A("run.attractMargin",0,12,.5),A("run.attractHeight",4.5,14,.5),A("boss.health",100,2e4,50),A("boss.scale",1,3,.05),A("boss.crouchY",.3,1,.01),A("boss.headMult",1,4,.1),A("boss.phase2At",.1,.95,.01),A("boss.phase3At",.05,.9,.01),A("boss.popTime",.05,2,.05),A("boss.telegraphTime",.1,3,.05),A("boss.burstTime",.2,6,.1),A("boss.rate",.5,20,.5),A("boss.damage",0,40,1),A("boss.spread",0,15,.1),A("boss.aimLag",0,1,.01),A("boss.muzzleUp",.5,2,.01),A("boss.coverWaitMin",0,6,.1),A("boss.coverWaitMax",0,8,.1),A("boss.shiftTime",.1,3,.05),A("boss.lobEvery",1,8,1),A("boss.lobWindup",.2,4,.05),A("boss.lobFlight",.5,4,.05),A("boss.lobRecover",0,3,.05),A("boss.lobRadius",.5,6,.1),A("boss.lobDamage",0,150,1),A("boss.lobTobbleDamage",0,150,1),A("boss.lobFalloff",0,1,.05),A("boss.retreatSpeed",.5,12,.1),A("boss.returnSpeed",.5,12,.1),A("boss.minHide",0,20,.5),A("boss.fastTelegraph",.1,3,.05),A("boss.fastBurstTime",.2,6,.1),A("boss.fastRate",.5,20,.5),A("boss.fastWaitMin",0,6,.1),A("boss.fastWaitMax",0,8,.1),A("boss.offerGap",0,3,.05),A("ending.deathDelay",0,10,.1),A("ending.deskReach",.5,6,.1),A("ending.holdTime",.1,5,.1),A("ending.card1Time",.5,15,.1),A("ending.card2Time",.5,20,.1),A("ending.card3Time",.5,15,.1),A("ending.skipLock",0,5,.1),A("ending.finalLock",0,5,.1),A("tobble.enabled",0,1,1),A("tobble.scale",.3,1.2,.01),A("tobble.radius",.1,.6,.01),A("tobble.height",.5,2,.01),A("tobble.health",1,1e3,1),A("tobble.regenDelay",0,20,.5),A("tobble.regenTime",0,20,.5),A("tobble.runSpeed",0,12,.1),A("tobble.turnRate",1,30,.5),A("tobble.followMin",0,20,.5),A("tobble.followMax",1,30,.5),A("tobble.personalSpace",0,5,.05),A("tobble.lofClear",0,4,.05),A("tobble.lofRange",1,60,1),A("tobble.sidestepReact",0,3,.05),A("tobble.sidestepDist",0,5,.1),A("tobble.popTime",.01,1,.01),A("tobble.popLift",0,.6,.01),A("tobble.muzzleUp",.3,2,.01),A("tobble.coverWaitMin",0,5,.1),A("tobble.coverWaitMax",0,8,.1),A("tobble.burstTime",0,6,.1),A("tobble.rate",.5,20,.5),A("tobble.damage",0,100,1),A("tobble.spread",0,20,.5),A("tobble.range",1,100,1),A("tobble.reviveMaxThreats",0,8,1),A("tobble.reviveWaitMax",0,20,.5),A("tobble.reviveRange",.3,4,.05),A("tobble.reviveTime",0,15,.1),A("tobble.reviveHealth",.05,1,.05),A("tobble.playerReviveTime",0,10,.1),A("tobble.playerReviveRange",.3,5,.05),A("tobble.crawlSpeed",0,3,.05),A("tobble.complainEvery",1,30,.5),A("dummy.health",1,1e3,1),A("dummy.respawnTime",0,30,.5),A("dummy.railSpeed",0,10,.1),A("camera.recoil.halfLife",.01,.5,.01),A("camera.recoil.max",0,20,.5),A("look.pad.assist",.1,1,.05),A("feedback.flashTime",.01,.3,.01),A("feedback.flashSize",.05,1.5,.05),A("feedback.tracerTime",.01,.3,.01),A("feedback.tracerWidth",.005,.2,.005),A("feedback.sparkTime",.05,1,.01),A("feedback.sparkCount",0,12,1),A("feedback.gelTime",.1,2,.05),A("feedback.gelCount",0,24,1),A("feedback.gelSpeed",0,10,.1),A("feedback.killGelCount",0,48,1),A("feedback.receiptCount",0,24,1),A("feedback.receiptTime",.2,4,.05),A("feedback.gravity",0,30,.1),A("feedback.hitMarkerTime",.02,1,.01),A("feedback.killMarkerTime",.05,1,.01),A("feedback.reloadResultTime",.1,2,.05),A("feedback.reticleMinGap",0,30,1),A("feedback.lowAmmoFrac",0,1,.05),A("feedback.coverReticleOpacity",0,1,.05),A("feedback.stepDip",0,.1,.001),A("feedback.stepVolume",0,1,.05),A("feedback.shotVolume",0,1,.05),A("feedback.hitVolume",0,1,.05),A("feedback.killVolume",0,1,.05),A("feedback.reloadVolume",0,1,.05),A("feedback.gunSquash",0,.6,.01),A("feedback.gunSquashTime",.01,.5,.01),A("feedback.gunKick",0,.3,.01),A("feedback.bodyKick",0,.3,.01),A("feedback.dummyBurstTime",.01,1,.01),A("feedback.dummyRespawnPop",0,1,.01),A("feedback.faceMaxOpacity",0,1,.05),A("feedback.edgeMaxOpacity",0,1,.05),A("feedback.hitFlashTime",.05,2,.01),A("feedback.hitKick",0,3,.05),A("feedback.hurtVolume",0,1,.05),A("feedback.enemyFlashSize",.05,1.5,.05),A("feedback.enemyTracerTime",.01,.3,.01),A("feedback.enemyTracerWidth",.005,.2,.005),A("feedback.glintSize",.02,.4,.01),A("feedback.blasterVolume",0,1,.05),A("feedback.chargeVolume",0,1,.05),A("feedback.pickupVolume",0,1,.05),A("feedback.barkTime",.2,6,.1),A("feedback.barkGap",0,12,.5),A("feedback.barkMinShow",0,4,.1),A("feedback.bashVolume",0,1,.05),A("feedback.revVolume",0,1,.05),A("feedback.cutVolume",0,1,.05),A("feedback.throwVolume",0,1,.05),A("feedback.clankVolume",0,1,.05),A("feedback.boomVolume",0,1,.05),A("feedback.saunaVolume",0,1,.05),A("feedback.reviveVolume",0,1,.05),A("feedback.tobbleShotVolume",0,1,.05),A("feedback.blastSize",.2,8,.1),A("feedback.blastTime",.05,2,.01),A("feedback.executeShake",0,.3,.005),A("feedback.cutGelEvery",.02,1,.01),A("feedback.arcDot",.01,.5,.01),A("feedback.coverGlow",0,1,1),A("feedback.coverGlowOpacity",0,1,.05),A("feedback.coverGlowFade",.01,1,.01),A("feedback.coverGlowLength",.5,10,.1),A("feedback.coverGlowHz",0,10,.1),A("feedback.slamHitstop",0,.3,.005),A("feedback.hitstopScale",0,1,.01),A("feedback.slamDust",0,20,1),A("feedback.slamDebris",0,20,1),A("feedback.rumble",0,1,1),A("feedback.slamRumble",0,1,.05),A("feedback.slamRumbleTime",.02,1,.01),A("feedback.blindDrift",0,20,.5),A("feedback.blindDriftHz",0,5,.05),A("feedback.blindDriftRamp",0,3,.05),A("feedback.blindShake",1,6,.1),A("feedback.blindShakeAmp",0,.1,.001),A("feedback.blindFlail",0,1.2,.01),A("feedback.blindFlailHz",0,30,.5),A("feedback.motorVolume",0,1,.05),A("feedback.motorRevTime",.05,3,.05),A("feedback.revShake",0,.1,.001),A("feedback.revRumble",0,1,.05),A("feedback.revSparkEvery",.02,1,.01),A("feedback.revSparkCount",0,8,1),A("feedback.discScale",1,4,.05),A("feedback.discBlur",0,1,.05),A("feedback.grindShake",0,.15,.002),A("feedback.grindZoom",0,20,.5),A("feedback.grindPull",0,1.5,.05),A("feedback.grindGelCount",0,24,1),A("feedback.grindSparkCount",0,12,1),A("feedback.executeJitter",0,.3,.005),A("feedback.grindRumble",0,1,.05),A("feedback.hint",0,1,1),A("feedback.hintTime",.5,15,.1),A("feedback.hintFade",.05,2,.05),A("feedback.hintCoverDelay",0,30,.5),A("feedback.reloadBarScale",.5,3,.05),A("feedback.reloadBarGap",0,120,1),A("feedback.reloadPulseHz",0,10,.1),A("feedback.reloadAlertScale",.5,3,.05),A("feedback.reloadFlashScale",.5,4,.05),A("feedback.reloadTickVolume",0,1,.05),A("feedback.reloadTickLead",0,1,.02),A("feedback.reloadTickSlow",.03,1,.01),A("feedback.reloadTickFast",.02,.5,.01),A("feedback.tacComHz",0,6,.1),A("melee.holdTime",0,5,.01),A("melee.bashTime",0,5,.01),A("melee.bashHitAt",0,5,.01),A("melee.bashRange",0,10,.05),A("melee.bashAngle",0,180,1),A("melee.bashDamage",0,500,1),A("melee.bashLunge",0,10,.05),A("melee.bashCooldown",0,5,.01),A("melee.revSpeed",0,30,.1),A("melee.revPulse",.05,5,.01),A("melee.cutterReach",0,10,.05),A("melee.cutterAngle",0,180,1),A("melee.cutTime",0,5,.01),A("melee.finishTime",0,5,.01),A("melee.executeRange",0,10,.05),A("melee.executeAngle",0,180,1),A("melee.promptRange",0,10,.05),A("melee.cutterSpin",0,100,1),A("grenade.carry",0,10,1),A("grenade.start",0,10,1),A("grenade.throwSpeed",0,30,.1),A("grenade.throwLift",0,180,1),A("grenade.gravity",.5,30,.1),A("grenade.ballRadius",.02,1,.01),A("grenade.restitution",0,1,.01),A("grenade.friction",0,1,.01),A("grenade.fuse",0,5,.01),A("grenade.radius",0,10,.05),A("grenade.damage",0,500,1),A("grenade.killRadius",0,10,.05),A("grenade.killDamage",0,500,1),A("grenade.selfDamage",0,2,.05),A("grenade.padReach",0,10,.05),A("grenade.arcTime",0,5,.01),A("grenade.throwTime",0,5,.01)]),mC=new Map(Jl.map(t=>[t.path,t])),Ql=structuredClone(H);function Qr(t,e){let n=t;for(let i of e.split(".")){if(n===null||typeof n!="object")return;n=n[i]}return n}function E0(t,e,n){let i=e.split("."),s=t;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=n,!0}function A0(t=H,e=Ql){let n={};for(let i of Jl){let s=Qr(t,i.path);s!==Qr(e,i.path)&&(n[i.path]=s)}return n}function vy(t,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let n=0;for(let i of Object.keys(e)){let s=mC.get(i);if(!s)continue;let r=e[i],o=Qr(Ql,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||E0(t,i,r)&&n++)}return n}function T0(t,e){if(t===null||typeof t!="object")return JSON.stringify(t);if(Array.isArray(t))return`[${t.map(s=>T0(s,e)).join(", ")}]`;let n="  ".repeat(e+1);return`{
${Object.keys(t).map(s=>`${n}${s}: ${T0(t[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function xy(t=H){return["associate","boss","camera","combat","cover","director","dummy","ending","feedback","grenade","health","look","melee","move","pad","run","tobble","trainer","weapons"].map(e=>`  ${e}: ${T0(t[e],1)},`).join(`
`)}var R0="cr-tuning",gC={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},vC=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function yy(t){let e=t.split("."),n=e.slice(0,-1);return n.length===1&&n[0]==="camera"&&vC.has(e[1])&&n.push("wall"),n[0]==="look"&&n[1]==="pad"&&(n[1]="lookPad"),n}function xC(){try{return window.localStorage}catch{return null}}function by({storage:t=xC()}={}){let e=()=>{try{return t?t.getItem(R0):null}catch{return null}},n=y=>{try{t&&(y===null?t.removeItem(R0):t.setItem(R0,y))}catch{}};try{let y=e();y&&vy(H,JSON.parse(y))}catch{}let i=new fd({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let y=document.activeElement;y&&y!==document.body&&s.contains(y)&&y.blur&&y.blur()}s.addEventListener("click",y=>{let g=y.target;g&&g.closest&&g.closest(".lil-title")&&g.blur!==void 0&&r()});let o=new Map;function a(y){let g=i,p="";for(let v of y){if(p+=`.${v}`,!o.has(p)){let _=g.addFolder(gC[v]||v);_.close(),o.set(p,_)}g=o.get(p)}return g}function l(){let y=A0();n(Object.keys(y).length?JSON.stringify(y):null)}for(let y of Jl){let g=y.path.split("."),p=g[g.length-1],v=Qr(H,g.slice(0,-1).join(".")),_=typeof Qr(Ql,y.path)=="boolean"?a(yy(y.path)).add(v,p):a(yy(y.path)).add(v,p,y.min,y.max,y.step);_.onChange(l),_.onFinishChange(r)}let c=null;function h(y){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let g=document.createElement("div");g.textContent="Press Cmd+C to copy",g.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=g,s.appendChild(g),s.appendChild(c)}c.value=y,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(y){c&&(c.hidden=!0,c.note.hidden=!0);let g=null;try{g=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(y):null}catch{g=null}if(!g){h(y);return}g.catch(()=>h(y))}let u={copyChanges(){r(),d(JSON.stringify(A0(),null,2))},copyForFile(){r(),d(xy())},resetAll(){r();for(let y of Jl)E0(H,y.path,Qr(Ql,y.path));n(null),i.controllersRecursive().forEach(y=>y.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function m(y){f=y,s.style.display=y?"":"none"}return m(!1),{toggle(){m(!f)},isOpen:()=>f}}var _y=Math.PI*2,yi=t=>t-_y*Math.round(t/_y),Yi=(t,e)=>Math.atan2(t,e);function ec(t){return Math.min(1,Math.hypot(t.moveX,t.moveY))}function Li(t,e){let n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),s=-t.moveY*n-t.moveX*i,r=-t.moveY*i+t.moveX*n,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function qt(t,e,n){let i=yi(e-t);return t+Math.max(-n,Math.min(n,i))}function ha(t,e,n,i,s,r){let o=t.vel,a=(Math.hypot(e,n)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=n-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=n):(o[0]+=l/h*a,o[2]+=c/h*a)}var C0=[0,0],br=[0,0,0],ua=1e-9,yC=1.5;var P0=(t=H)=>t.tobble?.playerReviveTime??yC;function My(t,e,n){let i=e-t.pos[0],s=n-t.pos[2];Math.hypot(i,s)>1e-6&&(t.facing=t.facing+yi(Math.atan2(i,s)-t.facing)),t.heading=t.facing}function tc(t){t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0}var pd={knocked:{acceptsTap:!1,selfMoves:!0,enter(t){tc(t),t.cover=null,t.coverTarget=null,t.scratch.prevOff=0},update(t,e,n){let i=t.scratch;t.aiming=!1,t.firing=!1;let s=i.time>0?i.time:0,r=t.stateTime>=s-ua,o=r||!(s>0)?1:t.stateTime/s,a=i.dist*(1-(1-o)*(1-o)),l=a-i.prevOff;return i.prevOff=a,br[0]=i.dir[0]*l,br[1]=0,br[2]=i.dir[1]*l,t.moveBy(br,n,!1),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},bash:{acceptsTap:!1,selfMoves:!0,enter(t){t.aiming=!1,t.firing=!1,t.scratch.dir=[Math.sin(t.facing),Math.cos(t.facing)],t.scratch.prevOff=0,t.scratch.hit=!1,t.heading=t.facing},update(t,e,n){let i=H.melee,s=t.scratch;t.aiming=!1,t.firing=!1;let r=t.stateTime>=i.bashTime-ua,o=r||!(i.bashTime>0)?1:t.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,br[0]=s.dir[0]*l,br[1]=0,br[2]=s.dir[1]*l,t.moveBy(br,n,!1),!s.hit&&(r||t.stateTime>=i.bashHitAt-ua)&&(s.hit=!0,t.onAction?.({type:"bashHit"})),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(t){t.aiming=!1,t.firing=!1,t.heading=t.facing},update(t,e,n){let i=t.tuning,s=H.melee.revSpeed;t.aiming=!1,t.firing=!1,Li(e,C0),ha(t,C0[0]*s,C0[1]*s,s,n,i);let r=t.speed();return r>s&&(t.vel[0]*=s/r,t.vel[2]*=s/r),r>i.faceMinSpeed?t.facing=qt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n):t.facing=qt(t.facing,e.camYaw,i.aimTurnRate*n),t.heading=t.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(t){tc(t)},update(t){return tc(t),t.stateTime<t.scratch.time-ua?null:(t.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(t){tc(t)},update(t,e){return tc(t),e.interactHeld?t.stateTime<P0()-ua?null:(t.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},da={bash(t,e){return t.state!=="move"&&t.state!=="sprint"||t.bashReadyAt>t.clock+ua?!1:(t.bashReadyAt=t.clock+H.melee.bashCooldown,Number.isFinite(e)&&(t.facing=t.facing+yi(e-t.facing)),t.go("bash",{}),!0)},rev(t,e){return e?t.state!=="move"&&t.state!=="sprint"?!1:(t.go("rev",{}),!0):t.state!=="rev"?!1:(t.go("move",{}),!0)},execute(t,e,n){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("execute",{}),t.scratch.time=Number.isFinite(n)&&n>0?n:0,My(t,e[0],e[1]),!0)},knock(t,e,n,i,s){if(t.state==="roll"||t.state==="execute"||t.state==="reviveTobble"||t.state==="knocked"||t.state==="downed")return!1;let r=Math.hypot(e,n);return r>1e-9?(t.go("knocked",{}),t.scratch.dir=[e/r,n/r],t.scratch.dist=i>0?i:0,t.scratch.time=s,!0):!1},reviveTobble(t,e){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("reviveTobble",{}),My(t,e[0],e.length>2?e[2]:e[1]),!0)}};var fs=1e-9,I0=Math.PI/180,Sy=.05,bC=1.8,_C={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function Ty(t=H.cover,e=H.move){return{radius:e.radius,gap:t.gap,endInset:t.endInset,minLength:t.minLength}}var MC=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],wC=t=>{for(let e of["a","b","tangent","normal"])Object.freeze(t[e]);return Object.freeze(t)};function Ey(t,{radius:e,gap:n,endInset:i,minLength:s,exclude:r=[]}){let o=e+n,a=[];return t.forEach((l,c)=>{let h=_C[l.kind];if(!h)return;let d=t.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>Sy&&u.min[1]<bC);for(let u of MC){let f=u.axis*2,m=2-f,y=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,g=l.min[m],p=l.max[m],v=p-g,_=[];for(let b of d){if(!(y>b.min[f]-o+fs&&y<b.max[f]+o-fs))continue;let C=b.min[m]-o-g,L=b.max[m]+o-g;L>fs&&C<v-fs&&_.push([Math.max(C,0),Math.min(L,v)])}_.sort((b,C)=>b[0]-C[0]);let M=[];for(let b of _){let C=M[M.length-1];C&&b[0]<=C[1]+fs?C[1]=Math.max(C[1],b[1]):M.push([b[0],b[1]])}let S=[],T=0,x=!0;for(let[b,C]of M)b>T+fs&&S.push([T,b,x,!1]),T=C,x=!1;v>T+fs&&S.push([T,v,x,!0]),S.forEach(([b,C,L,R],w)=>{let k=`${c}${u.name}#${w}`;if(r.includes(k))return;let P=g+b+(L?i:0),I=g+C-(R?i:0),F=I-P;if(F<s-fs)return;let B=u.axis===0?[y,P]:[P,y],$=u.axis===0?[y,I]:[I,y];a.push(wC({id:k,kind:h,boxIndex:c,a:B,b:$,length:F,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:L,openB:R}))})}}),a}function bi(t,e,n=[0,0]){return n[0]=t.a[0]+t.tangent[0]*e,n[1]=t.a[1]+t.tangent[1]*e,n}function _r(t,e,n=H.cover){let i=e<=n.cornerZone,s=t.length-e<=n.cornerZone;return i&&s?e<=t.length-e?-1:1:i?-1:s?1:0}function nc(t,e){return e<0?t.openA:t.openB}var wy=.9,Ay=(t,e,n,i)=>Ci(t,[e[0],wy,e[1]],[n[0],wy,n[1]],.9*i)===1;function fa(t,e,n,i,s,r,o){let a=Math.cos(r.grabAngle*I0),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*I0,d=null;for(let u of t){let f=(n[0]-u.a[0])*u.normal[0]+(n[2]-u.a[1])*u.normal[1],m=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||m<a||m<=fs)continue;let y=Math.max(f,0)/m,g=(n[0]+i[0]*y-u.a[0])*u.tangent[0]+(n[2]+i[1]*y-u.a[1])*u.tangent[1];if(g<-r.grabSlack||g>u.length+r.grabSlack)continue;let p=Math.max(0,Math.min(u.length,g)),v=bi(u,p),_=v[0]-n[0],M=v[1]-n[2],S=Math.hypot(_,M);if(!(S>r.grabRange||d&&S>=d.dist)){if(S>.3){let T=(_*l+M*c)/S;if(Math.acos(Math.max(-1,Math.min(1,T)))>h)continue}Ay(e,[n[0],n[2]],v,o)&&(d={edge:u,t:p,point:v,dist:S})}}return d}function Ry(t,e,n,i,s,r,o){if(_r(n,i,r)!==s||!nc(n,s))return null;let a=bi(n,i),l=Math.cos(r.swapAngle*I0),c=null;for(let h of t){if(h===n||h.normal[0]*n.normal[0]+h.normal[1]*n.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,m=bi(h,f),y=m[0]-a[0],g=m[1]-a[1],p=Math.hypot(y,g);(y*n.tangent[0]+g*n.tangent[1])*s<=0||Math.abs(y*n.normal[0]+g*n.normal[1])>r.swapMaxOffset||p>r.swapRange||c&&p>=c.dist||Ay(e,a,m,o)&&(c={edge:h,t:f,point:m,dist:p})}return c}function SC(t,e,n,i){let s=e[1]+Sy,r=e[1]+i;for(let o of t){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<n-fs)return!1}return!0}function Cy(t,e,n,i,s,r){if(t.kind!=="low"||t.depth>i.vaultMaxDepth)return null;let o=bi(t,e),a=t.depth+2*(s+i.gap),l=[o[0]-t.normal[0]*a,0,o[1]-t.normal[1]*a];if(!SC(n,l,s,r))return null;let c=n.filter((h,d)=>d!==t.boxIndex);return Ci(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var TC=["coverSlide","cover","vault","coverSwap"],Py=Math.PI/180,An=[0,0],gd=[0,0],Mr=[0,0,0],ky=.001,EC=2,L0=(t,e,n)=>Math.max(e,Math.min(n,t));function vd(t,e,n){if(ec(e)>=t.coverTuning.grabMinTilt){Li(e,An);let i=Math.hypot(An[0],An[1]);n[0]=An[0]/i,n[1]=An[1]/i}else n[0]=Math.sin(t.facing),n[1]=Math.cos(t.facing);return n}var Dy={name:"cover",state:"coverSlide",when(t,e){return t.coverTarget=fa(t.coverEdges,t.boxes,t.pos,vd(t,e,gd),e.camYaw,t.coverTuning,t.tuning.radius),t.coverTarget!==null}},md={};function Ny(t,e){let n=t.coverTuning;if(!n.autoSlam||e.aim||ec(e)<n.autoMinTilt)return null;Object.assign(md,n),md.grabAngle=n.autoAngle,md.grabRange=n.autoDist,Li(e,An);let i=Math.hypot(An[0],An[1]);gd[0]=An[0]/i,gd[1]=An[1]/i;let s=fa(t.coverEdges,t.boxes,t.pos,gd,e.camYaw,md,t.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(t.runVel[0]*r[0]+t.runVel[1]*r[1])>=n.autoMinSpeed?s:null}function AC(t,e,n){let i=_r(t,e,n);return t.kind==="low"||i!==0&&nc(t,i)}function Gs(t){return t.cover?t.cover.edge:t.scratch.edge||null}function k0(t){if(t.state==="downed")return"downed";if(t.state==="sprint")return"sprint";if(t.cover&&t.cover.pop>=.5)return"aim";if(t.state==="cover"||t.state==="coverSlide"||t.state==="coverSwap"){let e=Gs(t);if(e)return e.kind==="low"?"coverLow":"coverTall"}return t.aiming?"aim":"normal"}function eo(t){let e=t.cover;if(!e)return 1;let n=e.edge,i=e.popEnd;if(i===0&&(i=_r(n,e.t,t.coverTuning)),i===0)return 1;let s=Yi(-n.normal[0],-n.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=n.tangent[0]*i*r+n.tangent[1]*i*o<0?-1:1;return nc(n,i)?a:-a}function Iy(t,e,n,i){let s=t.coverTarget;t.coverTarget=null;let r=t.scratch;r.edge=s.edge,r.t=s.t,r.from=[t.pos[0],t.pos[1],t.pos[2]],r.to=[s.point[0],t.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(ky,L0(o/Math.max(e,1e-6),n,i)),t.aiming=!1}function Ly(t,e,n,i){let s=t.scratch,r=Math.min(1,t.stateTime/s.dur+1e-9);return Mr[0]=s.from[0]+(s.to[0]-s.from[0])*r-t.pos[0],Mr[1]=0,Mr[2]=s.from[2]+(s.to[2]-s.from[2])*r-t.pos[2],t.moveBy(Mr,e,!1),i!==null&&(t.facing=qt(t.facing,i,n*e)),t.heading=t.facing,r<1?null:Math.hypot(t.pos[0]-s.to[0],t.pos[2]-s.to[2])>.1?"move":(t.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},t.vel[0]=t.vel[1]=t.vel[2]=0,t.slams++,"cover")}var RC={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;Iy(t,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(t,e,n){let i=t.scratch.edge;return Ly(t,n,t.coverTuning.slideTurnRate,Yi(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;t.cover=null,Iy(t,e.swapSpeed,0,EC);let n=t.scratch;t.heading=Yi(n.to[0]-n.from[0],n.to[2]-n.from[2]),t.facing=t.facing+yi(t.heading-t.facing)},update(t,e,n){return Ly(t,n,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTarget;t.coverTarget=null;let n=t.scratch,i=e.edge;t.cover=null,t.aiming=!1,n.edge=i,n.landing=e.landing,n.from=[t.pos[0],t.pos[2]],t.heading=Yi(-i.normal[0],-i.normal[1]),t.facing=t.facing+yi(t.heading-t.facing)},update(t,e,n){let i=t.scratch,s=t.coverTuning,r=Math.min(1,t.stateTime/Math.max(s.vaultTime,ky)+1e-9);return t.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,t.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(t.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,t.vel[1]=0,t.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(t){t.cover=null,t.aiming=!1},update(t,e,n){let i=t.coverTuning,s=t.cover,r=s.edge,o=t.tuning,a=Li(e,An),l=Math.hypot(An[0],An[1]),c=l>0?An[0]/l:0,h=l>0?An[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,m=(b,C)=>(t.vel[0]=b*o.jog,t.vel[1]=0,t.vel[2]=C*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*Py))return m(An[0],An[1]);if(e.tap&&f){let b=Math.cos(i.pushAngle*Py);if(-(c*d+h*u)>=b){let L=Cy(r,s.t,t.boxes,i,o.radius,o.height);if(L)return t.coverTarget={landing:L,edge:r},"vault"}let C=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(C)>=b){let L=Ry(t.coverEdges,t.boxes,r,s.t,C>0?1:-1,i,o.radius);if(L)return t.coverTarget=L,"coverSwap"}}let y=_r(r,s.t,i),g=AC(r,s.t,i),p=e.aim&&g?1:0,v=e.fire&&!e.aim&&g?1:0,_=i.popTime>0?n/i.popTime:1;s.pop=s.pop<p?Math.min(p,s.pop+_):Math.max(p,s.pop-_);let M=i.blindTime>0?n/i.blindTime:1;s.blind=s.blind<v?Math.min(v,s.blind+M):Math.max(v,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?y:0,s.blindEnd=s.blind>0&&r.kind!=="low"?y:0,s.exposed=s.pop>=.5,t.aiming=s.exposed;let S=!1;if(s.pop===0&&s.blind===0){let b=An[0]*r.tangent[0]+An[1]*r.tangent[1];if(Math.abs(b)>=i.alongDeadzone){let C=s.t+b*i.moveSpeed*n;if(s.t=L0(C,0,r.length),C!==s.t&&nc(r,b>0?1:-1)&&(S=!0,s.endPush+=n,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(b),r.tangent[1]*Math.sign(b))}}else s.blindEnd!==0&&v===1&&(s.t=L0(s.t+s.blindEnd*i.moveSpeed*n,0,r.length));S||(s.endPush=0);let T=bi(r,s.t),x=s.popEnd*i.popShift*s.pop;return Mr[0]=T[0]+r.tangent[0]*x-t.pos[0],Mr[1]=0,Mr[2]=T[1]+r.tangent[1]*x-t.pos[2],t.moveBy(Mr,n,!1),s.pop>0?t.facing=qt(t.facing,e.camYaw,o.aimTurnRate*n):t.facing=qt(t.facing,Yi(-d,-u),o.turnRate*n),t.heading=t.facing,null}}},Oy=Object.fromEntries(TC.map(t=>[t,RC[t]]));var yd=t=>[Math.sin(t),0,Math.cos(t)],bd=t=>[-Math.cos(t),0,Math.sin(t)],CC=(t,e,n)=>e*(1-(1-t)**n),Hn=[0,0],xd=[0,0,0];function D0(t,e,n){return e.sprint&&!e.aim&&!e.grenade&&ec(e)>=n.stickSprintMin}var PC={move:{acceptsTap:!0,enter(){},update(t,e,n){let i=t.tuning;if(D0(t,e,i))return"sprint";t.aiming=e.aim,t.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return Li(e,Hn),ha(t,Hn[0]*s,Hn[1]*s,s,n,i),e.aim||e.fire||e.grenade?t.facing=qt(t.facing,e.camYaw,i.aimTurnRate*n):t.speed()>i.faceMinSpeed&&(t.facing=qt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n)),t.heading=t.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(t,e){t.aiming=!1,t.speed()>t.tuning.sprintHeadingMinSpeed?t.heading=Math.atan2(t.vel[0],t.vel[2]):Li(e,Hn)>.01?t.heading=Math.atan2(Hn[0],Hn[1]):t.heading=t.facing},update(t,e,n){let i=t.tuning;return D0(t,e,i)?(Li(e,Hn),t.heading=qt(t.heading,Math.atan2(Hn[0],Hn[1]),i.sprintTurnRate*n),ha(t,Math.sin(t.heading)*i.sprint,Math.cos(t.heading)*i.sprint,i.sprint,n,i),t.facing=t.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(t,e){t.aiming=!1;let n=t.scratch;if(n.dir=[Math.sin(t.facing),Math.cos(t.facing)],Li(e,Hn)>.01){let i=Math.hypot(Hn[0],Hn[1]);n.dir[0]=Hn[0]/i,n.dir[1]=Hn[1]/i}n.prevOff=0,n.queued=!1,t.heading=Math.atan2(n.dir[0],n.dir[1]),t.facing=t.facing+yi(t.heading-t.facing)},update(t,e,n){let i=t.tuning,s=t.scratch;e.tap&&t.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=t.stateTime>=i.rollTime-1e-9,o=CC(r?1:t.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,xd[0]=s.dir[0]*a,xd[1]=0,xd[2]=s.dir[1]*a,t.moveBy(xd,n,!1),r?s.queued?"roll":D0(t,e,i)?"sprint":(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(t){t.cover=null,t.coverTarget=null,t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0},update(t,e,n){let i=t.tuning;return t.aiming=!1,t.firing=!1,Li(e,Hn),ha(t,Hn[0]*i.crawlSpeed,Hn[1]*i.crawlSpeed,i.crawlSpeed,n,i),t.speed()>i.faceMinSpeed&&(t.facing=qt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.crawlTurnRate*n)),t.heading=t.facing,null},exit(){}},...Oy,...pd},IC=[Dy,{name:"roll",when:()=>!0,state:"roll"}];function Fy({boxes:t,spawn:e,tuning:n=H.move,coverTuning:i=H.cover,coverEdges:s=[],states:r=PC,contextActions:o=IC,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:n,boxes:t,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,f=!0){let m=h.pos,y=zn(h.boxes,m,d,n.radius,n.height);if(h.hit=!!y.hit,!f)u>0&&(h.vel[0]=(y.pos[0]-m[0])/u,h.vel[2]=(y.pos[2]-m[2])/u);else if(y.hit)if(u>0)h.vel[0]=(y.pos[0]-m[0])/u,h.vel[2]=(y.pos[2]-m[2])/u;else{let g=y.normal,p=h.vel[0]*g[0]+h.vel[1]*g[1]+h.vel[2]*g[2];p<0&&(h.vel[0]-=g[0]*p,h.vel[1]-=g[1]*p,h.vel[2]-=g[2]*p)}m[0]=y.pos[0],m[1]=y.pos[1],m[2]=y.pos[2]},go(d,u){let f=h.state;r[f].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[f].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,f,u)},down(){h.go("downed",{})},bash(d){return da.bash(h,d)},rev(d){return da.rev(h,d)},execute(d,u){return da.execute(h,d,u)},reviveTobble(d){return da.reviveTobble(h,d)},knock(d,u,f,m){return da.knock(h,d,u,f,m)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let y of o)if(y.when(h,d)){h.go(y.state,d);break}}h.stateTime+=u;let f=r[h.state].update(h,d,u),m=h.state;if(!r[m].selfMoves){let y=h.vel[0],g=h.vel[2],p=Math.hypot(y,g);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(p>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=y,h.runVel[1]=g)):(h.runVel[0]=y,h.runVel[1]=g,h.hitTime=0)}if(m==="move"||m==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let g=Math.max(.1,m==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=g&&(h.stepDist%=g,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:m==="sprint",speed:h.speed()}))}if(m==="move"||m==="sprint"){let y=Ny(h,d);if(!y)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=y,h.go("coverSlide",d);return}}f&&h.go(f,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function Uy({AudioContextCtor:t=globalThis.AudioContext}={}){let e=null,n=null,i=!1,s=null,r=1;function o(){if(e||i||!t)return e;try{e=new t;let p=Math.max(1,Math.floor(e.sampleRate*.4));n=e.createBuffer(1,p,e.sampleRate);let v=n.getChannelData(0);for(let _=0;_<p;_++)v[_]=Math.random()*2-1}catch{e=null,i=!0}return e}function a(p){if(!(p>0||p<0)||!e.createStereoPanner)return e.destination;let v=e.createStereoPanner();return v.pan.value=Math.max(-1,Math.min(1,p)),v.connect(e.destination),v}let l=()=>{if(e.state==="suspended"){let p=e.resume();p&&p.catch&&p.catch(()=>{})}};function c(p,v,_){let M=e.createGain();return M.gain.setValueAtTime(_,p),M.gain.exponentialRampToValueAtTime(.001,p+v),M.connect(s),M}function h(p,v,_,M,S,T){let x=e.createOscillator();x.type=v,x.frequency.setValueAtTime(_,S),M!==_&&x.frequency.exponentialRampToValueAtTime&&x.frequency.exponentialRampToValueAtTime(M,S+T),x.connect(p),x.start(S),x.stop(S+T)}function d(p,v,_,M,S){let T=e.createBufferSource();T.buffer=n;let x=e.createBiquadFilter();x.type=v,x.frequency.setValueAtTime(_,M),T.connect(x),x.connect(p),T.start(M),T.stop(M+S)}function u(p,v,_,M,S,T){let x=e.createBufferSource();x.buffer=n;let b=e.createBiquadFilter();b.type=v,b.frequency.setValueAtTime(_,S),b.frequency.exponentialRampToValueAtTime&&b.frequency.exponentialRampToValueAtTime(M,S+T),x.connect(b),b.connect(p),x.start(S),x.stop(S+T)}let f=(p,v,_)=>{let M=c(p,.03,_);d(M,"bandpass",v,p,.03)},m={rifle:(p,v)=>{d(c(p,.05,v*.55),"bandpass",2200,p,.05),h(c(p,.16,v*.9),"sine",150,48,p,.16),h(c(p,.22,v*.8),"sine",62,34,p,.22),d(c(p,.26,v*.35),"lowpass",700,p,.26)},pistol:(p,v)=>{d(c(p,.06,v*.6),"bandpass",2e3,p,.06),h(c(p,.2,v*.9),"sine",130,42,p,.2),h(c(p,.26,v*.85),"sine",56,30,p,.26),d(c(p,.3,v*.4),"lowpass",600,p,.3)},dry:(p,v)=>h(c(p,.02,v),"square",1200,1200,p,.02),hit:(p,v)=>h(c(p,.04,v),"sine",1600,1600,p,.04),head:(p,v)=>{let _=c(p,.06,v);h(_,"sine",2400,2400,p,.06),h(_,"sine",3200,3200,p,.06)},kill:(p,v)=>{let _=c(p,.12,v);h(_,"sine",300,900,p,.12);let M=c(p,.2,v*.8);d(M,"lowpass",1400,p,.2)},magOut:(p,v)=>{f(p,3e3,v),f(p+.08,2200,v)},magIn:(p,v)=>{f(p,2e3,v),f(p+.08,3400,v)},perfect:(p,v)=>{let _=c(p,.35,v);h(_,"sine",1320,1320,p,.35),h(_,"sine",1980,1980,p,.35)},good:(p,v)=>h(c(p,.15,v),"sine",990,990,p,.15),jam:(p,v)=>h(c(p,.15,v),"square",90,90,p,.15),blaster:(p,v)=>{let _=c(p,.1,v);h(_,"square",900,300,p,.1),d(_,"bandpass",1500,p,.1)},charge:(p,v)=>{let _=e.createGain();_.gain.setValueAtTime(.001,p),_.gain.exponentialRampToValueAtTime(v,p+.3),_.gain.exponentialRampToValueAtTime(.001,p+.35),_.connect(s),h(_,"sine",300,900,p,.35)},hurt:(p,v)=>{let _=c(p,.15,v);d(_,"lowpass",600,p,.15),h(_,"sine",80,80,p,.15)},downed:(p,v)=>h(c(p,.6,v),"sine",400,80,p,.6),clear:(p,v)=>{[523,659,784].forEach((_,M)=>h(c(p+M*.12,.15,v),"sine",_,_,p+M*.12,.15))},pickup:(p,v)=>{h(c(p,.06,v),"sine",880,880,p,.06),h(c(p+.07,.08,v),"sine",1320,1320,p+.07,.08)},thud:(p,v)=>{h(c(p,.42,v),"sine",52,22,p,.42),d(c(p,.38,v*.9),"lowpass",150,p,.38),d(c(p,.22,v*.5),"lowpass",420,p,.22),d(c(p,.09,v*.45),"bandpass",800,p,.09)},reloadTick:(p,v,_)=>{let M=900+1500*Math.max(0,Math.min(1,_||0));h(c(p,.04,v),"square",M,M,p,.04)},bash:(p,v)=>{h(c(p,.2,v),"sine",120,40,p,.2),d(c(p,.06,v*.6),"bandpass",1800,p,.06)},rev:(p,v)=>{h(c(p,.25,v*.5),"sawtooth",180,260,p,.25),d(c(p,.25,v*.25),"bandpass",2600,p,.25)},cut:(p,v)=>{h(c(p,.3,v*.5),"sawtooth",150,105,p,.3),d(c(p,.3,v*.5),"bandpass",900,p,.3),d(c(p,.2,v*.3),"lowpass",400,p,.2)},finish:(p,v)=>{h(c(p,.4,v),"sine",70,26,p,.4),d(c(p,.3,v*.5),"lowpass",220,p,.3)},throw:(p,v)=>{u(c(p,.3,v*.6),"bandpass",400,1600,p,.3),h(c(p,.18,v*.5),"sawtooth",140,85,p+.02,.18)},clank:(p,v)=>{let _=c(p,.14,v*.6);h(_,"square",1450,1450,p,.14),h(_,"square",2230,2230,p,.14),d(c(p,.04,v*.5),"bandpass",3500,p,.04)},boom:(p,v)=>{h(c(p,.5,v),"sine",50,50,p,.5),h(c(p,.3,v*.7),"sine",110,40,p,.3),d(c(p,.45,v*.6),"lowpass",500,p,.45)},saunaOpen:(p,v)=>{u(c(p,.5,v*.7),"bandpass",700,3200,p,.5)},saunaClose:(p,v)=>{u(c(p,.3,v*.6),"bandpass",2600,600,p,.3),h(c(p+.28,.2,v),"sine",95,45,p+.28,.2)},revive:(p,v)=>{h(c(p,.2,v*.8),"triangle",440,440,p,.2),h(c(p+.17,.3,v),"triangle",660,660,p+.17,.3)},tobbleShot:(p,v)=>{h(c(p,.07,v),"sine",700,280,p,.07),d(c(p,.04,v*.5),"bandpass",2800,p,.04)},step:(p,v)=>{h(c(p,.1,v),"sine",95,50,p,.1),d(c(p,.07,v*.5),"lowpass",280,p,.07)}},y={update(){},stop(){},active:!1};function g(){if(!o())return y;try{l();let p=e.currentTime,v=e.createGain();v.gain.setValueAtTime(1e-4,p),v.connect(e.destination);let _=e.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(700,p),_.connect(v);let M=(I,F)=>{let B=e.createOscillator();return B.type=I,B.frequency.setValueAtTime(F,p),B.connect(_),B.start(p),B},S=M("sawtooth",80),T=M("sawtooth",83),x=M("square",40),b=e.createOscillator();b.type="sine",b.frequency.setValueAtTime(20,p);let C=e.createGain();C.gain.setValueAtTime(0,p),b.connect(C),C.connect(v.gain),b.start(p);let L=e.createGain();L.gain.setValueAtTime(1e-4,p),L.connect(v);let R=e.createBufferSource();R.buffer=n,R.loop=!0;let w=e.createBiquadFilter();w.type="bandpass",w.frequency.setValueAtTime(1100,p),R.connect(w),w.connect(L),R.start(p);let k=[S,T,x,b,R],P=!1;return{active:!0,update(I,F=1,B=1){if(P||!(B*r>0)){P||v.gain.linearRampToValueAtTime(1e-4,e.currentTime+.05);return}let $=e.currentTime,X=Math.max(0,Math.min(1,F)),j=B*r,W=I==="grind",ee=W?62+10*X:64+120*X;S.frequency.setValueAtTime(ee,$),T.frequency.setValueAtTime(ee*1.04,$),x.frequency.setValueAtTime(ee*.5,$),_.frequency.setValueAtTime(W?650:500+1500*X,$),b.frequency.setValueAtTime(W?14:16+16*X,$),C.gain.setValueAtTime(j*(W?.3:.12+.2*X),$),v.gain.linearRampToValueAtTime(j*(W?.7:.3+.35*X),$+.05),L.gain.linearRampToValueAtTime(W?.9:.1+.25*X,$+.05),w.frequency.setValueAtTime(W?900:1300+1200*X,$)},stop(){if(P)return;P=!0;let I=e.currentTime;try{v.gain.linearRampToValueAtTime(1e-4,I+.08)}catch{}for(let F of k)try{F.stop(I+.1)}catch{}}}}catch{return y}}return{play(p,v,_=0,M=0){let S=m[p];if(!(!S||!(v*r>0)||!o()))try{l(),s=a(_),S(e.currentTime,v*r,M)}catch{}},motor:g,setVolume(p){r=Number.isFinite(p)?Math.min(1,Math.max(0,p)):1},unlock(){if(o())try{l()}catch{}}}}function By(){let t=!1;return{update(e,n,i){return i?(n&&(t=!0),e||(t=!1),{fire:t&&!!e,firePressed:!!n}):(t=!1,{fire:!1,firePressed:!1})},reset(){t=!1}}}var _d=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),zy=Object.freeze(["regret",null,"pistol"]);function Hy(t,e){return t>=e.perfectStart&&t<=e.perfectEnd?"perfect":t>=e.goodStart&&t<=e.goodEnd?"good":"jam"}function N0(t,e,n,i){let s=Math.max(t.reloadTime,i.minReloadTime);return n==="perfect"?Math.min(e+t.perfectFinish,s):n==="good"?Math.min(e+t.goodFinish,s):n==="jam"?s+t.jamPenalty:s}var LC={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function Gy({weapons:t=H.weapons,combat:e=H.combat,loadout:n=zy}={}){let i={},s=()=>{for(let y of n)y&&Object.assign(i[y]||(i[y]={}),{mag:Math.floor(t[y].mag),reserve:Math.floor(t[y].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,n.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>n[o.slot],l=(y,g)=>y[LC[g]||"spreadHip"],c=y=>y!=null&&o.reload===null&&o.switching<=0;function h(){let y=a(),g=t[y],p=i[y];return o.reload===null&&o.switching<=0&&p.mag<g.mag&&(g.infiniteReserve>0||p.reserve>0)}function d(){let y=a(),g=t[y];o.reload={id:y,t:0,press:null,end:N0(g,0,"normal",e)},i[y].boost=!1,r.push({type:"reloadStart",id:y})}function u(){let{id:y,press:g}=o.reload,p=t[y],v=i[y],_=Math.max(0,p.mag-v.mag);if(p.infiniteReserve>0)v.mag+=_;else{let M=Math.min(_,v.reserve);v.mag+=M,v.reserve-=M}v.boost=g==="perfect",o.reload=null,r.push({type:"reloadDone",id:y,result:g||"normal"})}function f(y){y===o.slot||!n[y]||(o.reload=null,o.slot=y,o.switching=t[n[y]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:n[y]}))}function m(y){let g=n.length;for(let p=1;p<g;p++){let v=(o.slot+y*p+g*g)%g;if(n[v])return f(v)}}return o.current=a,o.canFire=c,o.spreadOf=y=>l(t[a()],y)+i[a()].bloom,o.update=function(g,p,v){r.length=0,(!(v>0)||!Number.isFinite(v))&&(v=0);let _=g.weapon;_==="next"?m(1):_==="prev"?m(-1):(_===1||_===2||_===3)&&f(_-1),o.switching-=v;for(let L of n)L&&(i[L].bloom=Math.max(0,i[L].bloom-t[L].bloomRecover*v));let M=a(),S=t[M],T=i[M];if(g.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let L=o.reload,R=Math.max(S.reloadTime,e.minReloadTime);L.press=Hy(L.t/R,S),L.end=N0(S,L.t,L.press,e),r.push({type:"reloadPress",id:M,result:L.press})}}o.reload!==null&&(o.reload.t+=v,o.reload.t>=o.reload.end&&u()),g.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=v,g.fire||(o.dryLatched=!1),c(p)||(o.buffer=0);let x=S.auto>0,b=x?!!g.fire:o.buffer>0,C=1/Math.max(S.rate,e.minRate);for(o.cooldown-=v,b||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-C);b&&c(p)&&o.cooldown<=0;){if(T.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(T.mag--,r.push({type:"shot",id:M,mult:T.boost?S.perfectDamage:1,spread:o.spreadOf(p)}),T.bloom=Math.min(S.bloomMax,T.bloom+S.bloomPerShot),o.cooldown+=C,T.mag===0&&(T.boost=!1),!x){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,n.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(y,g)=>{let p=i[y];!p||t[y].infiniteReserve>0||!(g>0)||(p.reserve=Math.max(p.reserve,Math.min(Math.floor(t[y].reserveMax),p.reserve+Math.floor(g))))},o.refill=()=>{for(let y of n)y&&(i[y].reserve=Math.floor(t[y].reserveMax))},o.set=(y,{mag:g,reserve:p}={})=>{i[y]&&(g!==void 0&&(i[y].mag=g),p!==void 0&&(i[y].reserve=p))},o}function Vy(t){if(t.grenadeAim||Object.hasOwn(pd,t.state))return null;if(t.state==="move")return t.aiming?"aim":t.firing?"hip":null;if(t.state==="cover"&&t.cover){if(t.cover.pop===1)return"aim";if(t.cover.blind===1)return"blind"}return null}var pa=[0,0];function Md(t,e,n,i=H.combat,s=[0,0,0]){if(e==="blind"&&t.cover){let l=t.cover,c=l.edge,h=t.tuning.radius+t.coverTuning.gap,d=c.normal;if(c.kind==="low")bi(c,l.t,pa),s[0]=pa[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=pa[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;bi(c,u<0?0:c.length,pa);let f=t.coverTuning.endInset+i.blindReach;s[0]=pa[0]+c.tangent[0]*u*f-d[0]*h,s[1]=i.muzzleUp,s[2]=pa[1]+c.tangent[1]*u*f-d[1]*h}return s}let r=i.muzzleRight*eo(t),o=Math.sin(n),a=Math.cos(n);s[1]=t.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=t.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=t.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!aa(t.boxes,s,0)));l-=.25);return s}function kC(t,e,n,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(t[o]<n.min[o]||t[o]>n.max[o])return 1/0}else{let a=(n.min[o]-t[o])/e[o],l=(n.max[o]-t[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function O0(t,e,n,i,s=1/0){let r=t[0]-n[0],o=t[1]-n[1],a=t[2]-n[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function DC(t,e,n,i,s,r=1/0){let o=i[0]-n[0],a=i[1]-n[1],l=i[2]-n[2],c=t[0]-n[0],h=t[1]-n[1],d=t[2]-n[2],u=o*o+a*a+l*l,f=o*c+a*h+l*d,m=u>1e-12?Math.max(0,Math.min(1,f/u)):0,y=c-o*m,g=h-a*m,p=d-l*m;if(y*y+g*g+p*p<=s*s)return 0;let v=Math.min(O0(t,e,n,s,r),O0(t,e,i,s,r));if(u>1e-12){let _=o*e[0]+a*e[1]+l*e[2],M=e[0]*c+e[1]*h+e[2]*d,S=c*c+h*h+d*d,T=u-_*_;if(T>1e-12*u){let x=u*M-f*_,b=u*S-f*f-s*s*u,C=x*x-T*b;if(C>=0){let L=(-x-Math.sqrt(C))/T,R=f+L*_;L>=0&&L<=r&&R>0&&R<u&&L<v&&(v=L)}}}return v}function Gn(t,e,n,i,s,{ignoreBox:r=-1}={}){let o=n,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=kC(t,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive)continue;let{head:u,body:f}=d.shapes,m=O0(t,e,u.c,u.r,o);m<=o&&m!==1/0&&(o=m,a="head",l=d,c=-1,h=!0);let y=DC(t,e,f.a,f.b,f.r,o);y<=o&&y!==1/0&&(o=y,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[t[0]+e[0]*o,t[1]+e[1]*o,t[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n],kind:"none",target:null,boxIndex:-1}}function ma(t,e,n,i=[0,0,0]){if(!(e>0))return i[0]=t[0],i[1]=t[1],i[2]=t[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*n(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*n(),l=Math.abs(t[1])<.9?0:1,c=l===0?1:0,h=t[1]*0-t[2]*c,d=t[2]*l-t[0]*0,u=t[0]*c-t[1]*l,f=Math.hypot(h,d,u);h/=f,d/=f,u/=f;let m=t[1]*u-t[2]*d,y=t[2]*h-t[0]*u,g=t[0]*d-t[1]*h,p=Math.cos(a)*o,v=Math.sin(a)*o;return i[0]=t[0]*r+h*p+m*v,i[1]=t[1]*r+d*p+y*v,i[2]=t[2]*r+u*p+g*v,i}function Wy({lens:t,view:e,muzzle:n,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let g=ma(e,i,l),p=Gn(t,g,s,r,o,{ignoreBox:a}),v=[p.point[0]-n[0],p.point[1]-n[1],p.point[2]-n[2]],_=Math.hypot(v[0],v[1],v[2]),M=_>1e-9?[v[0]/_,v[1]/_,v[2]/_]:[g[0],g[1],g[2]];return{from:n,dir:M,hit:p}}let h=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),d=Gn(t,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s]:d.point,f=[u[0]-n[0],u[1]-n[1],u[2]-n[2]],m=Math.hypot(f[0],f[1],f[2]);m>1e-9?(f[0]/=m,f[1]/=m,f[2]/=m):(f[0]=e[0],f[1]=e[1],f[2]=e[2]);let y=ma(f,i,l);return{from:n,dir:y,hit:Gn(n,y,s,r,o)}}var vt=Object.freeze({head:Object.freeze({cy:Yt.neckY+Yt.head.centerY,r:Yt.head.rx}),body:Object.freeze({ay:Yt.ankleHeight,by:Yt.neckY,r:Math.max(...Yt.torso.shirt.map(t=>t[0]))})});function Xy(t,e=H.combat.hitPad){let[n,i,s]=t.pos,r=t.shapes;r.head.c[0]=n,r.head.c[1]=i+vt.head.cy,r.head.c[2]=s,r.head.r=vt.head.r+e,r.body.r=vt.body.r+e,r.body.a[0]=n,r.body.a[1]=i+vt.body.ay,r.body.a[2]=s,r.body.b[0]=n,r.body.b[1]=i+vt.body.by,r.body.b[2]=s}function Yy({id:t,pos:e,yaw:n=0,rail:i=null},s=H.dummy){let r={id:t,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:n,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:vt.head.r},body:{a:[0,0,0],b:[0,0,0],r:vt.body.r}}};return Xy(r),r}function NC(t,e){let n=t%(4*e);return n<e?n:n<3*e?2*e-n:n-4*e}function qy(t,e,n=H.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!t.alive)t.respawnT-=e,t.respawnT<=0&&(t.alive=!0,t.respawnT=0,t.health=n.health,t.railT=0,t.pos[0]=t.home[0],t.pos[1]=t.home[1],t.pos[2]=t.home[2]);else if(t.rail&&t.rail.half>0){t.railT+=e*Math.max(0,n.railSpeed);let i=NC(t.railT,t.rail.half),s=t.rail.axis==="x"?0:2;t.pos[0]=t.home[0],t.pos[2]=t.home[2],t.pos[s]=t.home[s]+i}Xy(t)}function $y(t,e,n=H.dummy){return!t.alive||!(e>0)?null:(t.health-=e,t.health>0?"hit":(t.health=0,t.alive=!1,t.respawnT=n.respawnTime,"kill"))}function F0(t,e,n=1){return e!=="head"&&e!=="body"?0:t.damage*n*(e==="head"?t.headMult:1)}function Ky(t,e,n){for(let i of e)if(Math.hypot(t[0]-i.pos[0],t[2]-i.pos[2])<=n)return!0;return!1}function Zy(t){let e=new Float32Array(t),n=new Uint8Array(t),i=0;return{ages:e,alive:s=>n[s]===1,spawn(){let s=-1;for(let r=0;r<t;r++){let o=(i+r)%t;if(!n[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<t;r++)e[r]>e[s]&&(s=r)}return n[s]=1,e[s]=0,i=(s+1)%t,s},clear(){n.fill(0)},update(s,r){for(let o=0;o<t;o++)n[o]&&(e[o]+=s,e[o]>r(o)&&(n[o]=0))}}}var OC=new G(0,0,1);function jy(t,e=()=>H.feedback){let n=new mn,i=(w=1)=>(Math.random()*2-1)*w;function s(w,k,P){let I=new es(w,Pt({color:k,rim:0}),P);I.frustumCulled=!1,I.count=P,n.position.set(0,-1e3,0),n.scale.setScalar(0),n.updateMatrix();for(let F=0;F<P;F++)I.setMatrixAt(F,n.matrix);return t.add(I),{mesh:I,pool:Zy(P),pos:new Float32Array(P*3),vel:new Float32Array(P*3),aux:new Float32Array(P*4)}}let r=s(new Yo(.5,0),z.playerOrange,8),o=s(new gt(1,1,1),z.playerOrange,24),a=s(new Yo(.5,0),z.gel,8),l=s(new gt(1,1,1),z.gel,24),c=s(new gt(.05,.05,.05),z.cream,48),h=s(new Gr(.5,0),z.gel,96),d=s(new gt(.16,.2,.012),z.cream,48),u=s(new Gr(.5,0),z.cream,40),f=s(new Gr(.5,1),z.planet,4),m=s(new gt(1,1,1),z.playerOrange,16),y=new G;function g(w,k){n.updateMatrix(),w.mesh.setMatrixAt(k,n.matrix),w.mesh.instanceMatrix.needsUpdate=!0}let p=(w,k)=>{n.position.set(0,-1e3,0),n.scale.setScalar(0),n.quaternion.identity(),g(w,k)},v=(w,k,P,I,F)=>{w.pos[k*3]=P,w.pos[k*3+1]=I,w.pos[k*3+2]=F},_=(w,k,P,I,F)=>{w.vel[k*3]=P,w.vel[k*3+1]=I,w.vel[k*3+2]=F};function M(w,k,P,I,F){let B=P[0]+i(I),$=P[1]+i(I),X=P[2]+i(I),j=Math.hypot(B,$,X)||1;_(w,k,B/j*F*(.5+Math.random()*.5),$/j*F*(.5+Math.random()*.5),X/j*F*(.5+Math.random()*.5))}let S=[];function T(w,k,P,I){S.push({k:w,life:k,shown:new Uint8Array(w.pool.ages.length),step(F){let B=e().gravity,$=w;for(let X=0;X<$.pool.ages.length;X++)if($.pool.alive(X)){$.vel[X*3+1]-=B*F;for(let j=0;j<3;j++)$.pos[X*3+j]+=$.vel[X*3+j]*F}},draw(F){let B=1-w.pool.ages[F]/k();n.position.set(w.pos[F*3],w.pos[F*3+1],w.pos[F*3+2]),n.scale.setScalar(P(F)*Math.max(0,B)),I?n.rotation.set(w.aux[F*4]+w.pool.ages[F]*7,w.aux[F*4+1]+w.pool.ages[F]*5,w.aux[F*4+2]):n.quaternion.identity(),g(w,F)}})}T(c,()=>e().sparkTime,()=>1,!1),T(h,()=>e().gelTime,w=>.05+h.aux[w*4+3]*.07,!1),T(d,()=>e().receiptTime,()=>1,!0);function x(w,k){S.push({k:w,shown:new Uint8Array(w.pool.ages.length),life:()=>e().flashTime,step(){},draw(P){let I=1-w.pool.ages[P]/e().flashTime;n.position.set(w.pos[P*3],w.pos[P*3+1],w.pos[P*3+2]),n.scale.setScalar(e()[k]*(.5+.5*Math.max(0,I))),n.rotation.set(w.aux[P*4],w.aux[P*4+1],w.aux[P*4+2]),g(w,P)}})}function b(w,k,P,I=1){S.push({k:w,shown:new Uint8Array(w.pool.ages.length),life:()=>e()[k],step(){},draw(F){let B=Math.max(0,1-w.pool.ages[F]/e()[k]),$=e()[P]*I*B,X=w.aux[F*4];n.position.set(w.pos[F*3],w.pos[F*3+1],w.pos[F*3+2]),n.quaternion.setFromUnitVectors(OC,y.set(w.vel[F*3],w.vel[F*3+1],w.vel[F*3+2])),n.scale.set($,$,X),g(w,F)}})}let C=.9;S.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>C,step(w){for(let k=0;k<u.pool.ages.length;k++)if(u.pool.alive(k))for(let P=0;P<3;P++)u.pos[k*3+P]+=u.vel[k*3+P]*w},draw(w){let k=u.pool.ages[w]/C;n.position.set(u.pos[w*3],u.pos[w*3+1],u.pos[w*3+2]),n.scale.setScalar(u.aux[w*4+3]*(.5+k)*(1-k*k*k)),n.quaternion.identity(),g(u,w)}}),S.push({k:f,shown:new Uint8Array(f.pool.ages.length),life:()=>e().blastTime,step(){},draw(w){let k=Math.min(f.pool.ages[w]/Math.max(e().blastTime,.001),1),P=1-(1-Math.min(k/.6,1))**2,I=k>.6?1-(k-.6)/.4:1;n.position.set(f.pos[w*3],f.pos[w*3+1],f.pos[w*3+2]),n.scale.setScalar(Math.max(e().blastSize*P*I,.001)),n.rotation.set(0,f.aux[w*4],0),g(f,w)}}),b(m,"tracerTime","tracerWidth",.6),x(r,"flashSize"),x(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(l,"enemyTracerTime","enemyTracerWidth");let L=(w,k,P)=>{let I=w.pool.spawn();v(w,I,k[0]+P[0]*.1,k[1]+P[1]*.1,k[2]+P[2]*.1),w.aux[I*4]=i(3),w.aux[I*4+1]=i(3),w.aux[I*4+2]=i(3)},R=(w,k,P)=>{let I=P[0]-k[0],F=P[1]-k[1],B=P[2]-k[2],$=Math.hypot(I,F,B);if(!($>1e-6))return;let X=w.pool.spawn();v(w,X,k[0]+I/2,k[1]+F/2,k[2]+B/2),_(w,X,I/$,F/$,B/$),w.aux[X*4]=$};return{flash(w,k){L(r,w,k)},tracer(w,k){R(o,w,k)},friendlyTracer(w,k){R(m,w,k)},steam(w){let k=u.pool.spawn();v(u,k,w[0],w[1],w[2]),_(u,k,i(.15),.7+Math.random()*.4,i(.15)),u.aux[k*4+3]=.16+Math.random()*.1},blast(w){let k=f.pool.spawn();v(f,k,w[0],w[1]+.3,w[2]),f.aux[k*4]=Math.random()*6;for(let P=0;P<6;P++){let I=u.pool.spawn(),F=P/6*Math.PI*2+Math.random();v(u,I,w[0],w[1]+.2,w[2]),_(u,I,Math.cos(F)*2.2,.8+Math.random()*.6,Math.sin(F)*2.2),u.aux[I*4+3]=.35+Math.random()*.2}this.gel([w[0],w[1]+.3,w[2]],[0,1,0],12)},enemyFlash(w,k){L(a,w,k)},enemyTracer(w,k){R(l,w,k)},dust(w,k,P,I=e().slamDust,F=e().slamDebris){for(let B=0;B<I;B++){let $=u.pool.spawn(),X=(B%2?1:-1)*(.4+Math.random()*1.8),j=.3+Math.random()*1.2;v(u,$,w[0]+k[0]*.3,w[1]+.15,w[2]+k[1]*.3),_(u,$,P[0]*X+k[0]*j+i(.2),.3+Math.random()*.6,P[1]*X+k[1]*j+i(.2)),u.aux[$*4+3]=.25+Math.random()*.2}for(let B=0;B<F;B++){let $=c.pool.spawn();v(c,$,w[0]+k[0]*.2,w[1]+.2,w[2]+k[1]*.2),M(c,$,[k[0]+P[0]*i(1),.9,k[1]+P[1]*i(1)],.6,3.5)}},spark(w,k,P=e().sparkCount){for(let I=0;I<P;I++){let F=c.pool.spawn();v(c,F,w[0],w[1],w[2]),M(c,F,k,.9,3)}},gel(w,k,P=e().gelCount){for(let I=0;I<P;I++){let F=h.pool.spawn();v(h,F,w[0],w[1],w[2]),M(h,F,k,1.2,e().gelSpeed),h.aux[F*4+3]=Math.random()}},receipts(w,k=e().receiptCount){for(let P=0;P<k;P++){let I=d.pool.spawn();v(d,I,w[0],w[1],w[2]),M(d,I,[0,1,0],1.5,e().gelSpeed),d.aux[I*4]=i(3),d.aux[I*4+1]=i(3),d.aux[I*4+2]=i(3)}},clear(){for(let w of S){w.k.pool.clear();for(let k=0;k<w.shown.length;k++)w.shown[k]&&(p(w.k,k),w.shown[k]=0)}},update(w){if(w>0)for(let k of S){k.step(w);let{pool:P}=k.k;P.update(w,k.life);for(let I=0;I<P.ages.length;I++)P.alive(I)?(k.draw(I),k.shown[I]=1):k.shown[I]&&(p(k.k,I),k.shown[I]=0)}}}}function FC(t,e,n){let i=Math.PI/180;return n/2*Math.tan(t*i/2)/Math.tan(e*i/2)}var UC=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),ic=t=>t<0?0:t>1?1:t;function Jy({arsenal:t,stance:e,firing:n,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",hours:u="",bark:f=null,banner:m=null,grenades:y=null,action:g=null,boss:p=null,ending:v=null,pop:_=null,hint:M=null,tac:S=null,weapons:T=H.weapons,combat:x=H.combat,feedback:b=H.feedback}){let C=t.current(),L=T[C],R=t.ammo[C],w=t.reload,k=s==="pad"?"RB":"R",P=b.reticleMinGap+FC(r,o,a),I=Math.max(b.reloadBarScale,.1),F={show:!1,marker:0,good:[L.goodStart,L.goodEnd],perfect:[L.perfectStart,L.perfectEnd],flash:c,prompt:"",barScale:I,offset:P+8+Math.max(0,b.reloadBarGap),pulseHz:Math.max(0,b.reloadPulseHz),flashScale:b.reloadFlashScale/I};if(w){let W=Math.max(L.reloadTime,x.minReloadTime);F={...F,show:!0,marker:ic(w.t/W),prompt:w.press===null?`PRESS ${k} AGAIN IN THE BRIGHT ZONE`:""}}else R.mag<=0&&(F.prompt=`${k} to reload`);let B=R.mag<=Math.max(0,b.lowAmmoFrac)*L.mag,$=L.infiniteReserve<=0&&R.reserve<=0,X={show:!1,text:"",kind:"",scale:1,pulseHz:0};!w&&B&&!m&&(X.show=!0,$&&R.mag<=0?(X.text="NO AMMO",X.kind="none"):$?(X.text="LOW AMMO",X.kind="low"):R.mag<=0?(X.text=`EMPTY \u2014 RELOAD \u2014 ${k}`,X.kind="empty"):(X.text=`RELOAD \u2014 ${k}`,X.kind="low"),X.scale=b.reloadAlertScale,X.pulseHz=Math.max(0,b.reloadPulseHz));let j=e==="aim";return{weapon:_d[C].name,mag:R.mag,reserve:L.infiniteReserve>0?"\u221E":R.reserve,reticle:{show:j||!!n||i,gap:P,opacity:i&&!j?b.coverReticleOpacity:1},reload:F,alert:X,hit:{show:!!l,kind:l||null},faceShow:!!h&&!m&&!h.downed.show,face:h,objective:d,hours:u||"",bark:f,banner:m,grenades:Number.isFinite(y)?y:null,boss:p?{name:p.name,fraction:ic(p.fraction),phase:p.phase,invuln:!!p.invuln,hint:p.hint||""}:null,ending:v?{card:v.card,lines:v.lines,tone:v.tone||"big",final:!!v.final}:null,pop:_&&_.text?{text:_.text,kind:_.kind||""}:null,hint:M&&M.text?{text:M.text,opacity:ic(Number.isFinite(M.opacity)?M.opacity:1)}:null,tac:S&&S.show?{show:!0,items:(S.items||[]).filter(W=>W&&Number.isFinite(W.x)&&Number.isFinite(W.y))}:null,action:g&&g.text?{text:g.text,hold:Number.isFinite(g.hold)?ic(g.hold):null}:null}}function Qy(t=document.body){let e=(Z,de,pe,De)=>{let Ne=document.createElement(Z);return de&&(Ne.className=de),De!==void 0&&(Ne.textContent=De),pe&&pe.appendChild(Ne),Ne},n=e("div","",t);n.id="cr-hud";let i={};for(let Z of["top","right","bottom","left"])i[Z]=e("div",`cr-edge cr-edge-${Z}`,n);let s="http://www.w3.org/2000/svg",r=(Z,de,pe)=>{let De=document.createElementNS(s,Z);for(let Ne of Object.keys(de))De.setAttribute(Ne,de[Ne]);return pe&&pe.appendChild(De),De},o=e("div","cr-face",n),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",n),u=e("div","cr-banner-title",d),f=e("div","cr-banner-hint",d),m=e("i","cr-ring",d),y=e("div","cr-action",n),g=e("span","cr-action-text",y),p=e("i","cr-ring",y),v=e("div","cr-objective",n),_=e("div","cr-boss",n),M=e("div","cr-boss-name",_),S=e("div","cr-boss-bar",_),T=e("i","cr-boss-fill",S);e("i","cr-boss-tick cr-boss-tick-a",S),e("i","cr-boss-tick cr-boss-tick-b",S);let x=e("div","cr-boss-hint",_),b=e("div","cr-ending",n),C=e("div","cr-ending-text",b),L=e("div","cr-ending-hint",b),R=e("div","cr-pop",n),w=e("div","cr-hint",n),k=e("div","cr-tac",n),P={},I=e("div","cr-hours",n),F=e("div","cr-bark",n),B=e("span","cr-bark-who",F),$=e("span","cr-bark-text",F),X=e("div","cr-weapon",n),j=e("div","cr-weapon-name",X),W=e("div","cr-ammo",X),ee=e("div","cr-kb",X),Ee=e("div","cr-prompt",X),Q=e("div","cr-reloadbox",n),re=e("div","cr-reload-prompt",Q),_e=e("div","cr-reload",Q),Oe=e("div","cr-zone cr-zone-good",_e),ie=e("div","cr-zone cr-zone-perfect",_e),Ce=e("div","cr-marker",_e),He=e("div","cr-result",Q),Ue=e("div","cr-alert",n),qe=e("div","cr-reticle",n),Ke=["up","down","left","right"].map(Z=>e("div",`cr-arm cr-arm-${Z}`,qe)),ge=e("div","cr-hit",n);e("i","cr-hit-a",ge),e("i","cr-hit-b",ge),e("i","cr-hit-ring",ge);let Pe={},ye=(Z,de,pe)=>{Pe[Z]!==de&&(Pe[Z]=de,pe(de))},fe=Z=>`${(Z*100).toFixed(1)}%`,Ae=(Z,[de,pe])=>{Z.style.left=fe(de),Z.style.width=fe(Math.max(0,pe-de))};return{render(Z){ye("weapon",Z.weapon,we=>{j.textContent=we}),ye("ammo",`${Z.mag}|${Z.reserve}`,()=>{W.textContent=`${Z.mag} / ${Z.reserve}`}),ye("prompt",Z.reload.show?"":Z.reload.prompt,we=>{Ee.textContent=we}),ye("barPrompt",Z.reload.show?Z.reload.prompt:"",we=>{re.textContent=we,re.hidden=!we}),ye("reload.show",Z.reload.show,we=>{_e.hidden=!we}),ye("reload.box",`${Z.reload.show||!!Z.reload.flash}`,we=>{Q.hidden=we!=="true"}),ye("reload.look",`${Math.round(Z.reload.offset)}|${Z.reload.barScale}|${Z.reload.pulseHz}|${Z.reload.flashScale}`,()=>{Q.style.setProperty("--off",`${Z.reload.offset.toFixed(0)}px`),Q.style.setProperty("--s",String(Z.reload.barScale)),Q.style.setProperty("--fs",String(Z.reload.flashScale)),Q.style.setProperty("--pulse",Z.reload.pulseHz>0?`${(1/Z.reload.pulseHz).toFixed(3)}s`:"0s")}),ye("good",`${Z.reload.good}`,()=>Ae(Oe,Z.reload.good)),ye("perfect",`${Z.reload.perfect}`,()=>Ae(ie,Z.reload.perfect)),ye("marker",Math.round(Z.reload.marker*500),()=>{Ce.style.left=fe(Z.reload.marker)}),ye("flash",Z.reload.flash,we=>{He.textContent=we&&UC[we]||"",He.dataset.kind=we||""}),ye("alert",Z.alert.show?`${Z.alert.kind}|${Z.alert.text}|${Z.alert.scale}|${Z.alert.pulseHz}`:"",()=>{Ue.hidden=!Z.alert.show,Ue.textContent=Z.alert.text,Ue.dataset.kind=Z.alert.kind,Ue.style.setProperty("--as",String(Z.alert.scale)),Ue.style.setProperty("--pulse",Z.alert.pulseHz>0?`${(1/Z.alert.pulseHz).toFixed(3)}s`:"0s")}),ye("ret.show",Z.reticle.show,we=>{qe.hidden=!we}),ye("ret.op",Math.round(Z.reticle.opacity*100),()=>{qe.style.opacity=Z.reticle.opacity.toFixed(2)}),ye("ret.gap",Math.round(Z.reticle.gap),we=>{Ke.forEach(Ve=>Ve.style.setProperty("--gap",`${we}px`))});let de=Z.face;if(ye("face.show",!!Z.faceShow,we=>{o.hidden=!we}),de){ye("face.op",Math.round(de.face.opacity*100),()=>{o.style.opacity=de.face.opacity.toFixed(2)}),ye("face.frown",Math.round(de.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*de.face.frown).toFixed(1)} 70 72`)}),ye("face.fill",Math.round(de.face.fill*50),()=>{let we=92*de.face.fill;c.setAttribute("y",(96-we).toFixed(1)),c.setAttribute("height",we.toFixed(1))});for(let we of Object.keys(i))ye(`edge.${we}`,Math.round(de.edges[we]*50),()=>{i[we].style.opacity=de.edges[we].toFixed(2)})}ye("kb",Z.grenades===null?"":String(Z.grenades),we=>{ee.hidden=we==="",ee.textContent=`KETTLEBELLS ${we}`}),ye("action",Z.action?Z.action.text:"",we=>{y.hidden=!Z.action,g.textContent=we}),ye("action.hold",Z.action&&Z.action.hold!==null?Math.round(Z.action.hold*100):-1,we=>{p.hidden=we<0,p.style.setProperty("--hold",`${Math.max(we,0)*3.6}deg`)});let pe=Z.banner&&Z.banner.hold!==void 0&&Z.banner.hold!==null?Math.round(ic(Z.banner.hold)*100):-1;ye("banner.hold",pe,we=>{m.hidden=we<0,m.style.setProperty("--hold",`${Math.max(we,0)*3.6}deg`)}),ye("banner",Z.banner?`${Z.banner.title}|${Z.banner.hint}`:"",we=>{d.hidden=!Z.banner,Z.banner&&(u.textContent=Z.banner.title,f.textContent=Z.banner.hint)}),ye("objective",Z.objective||"",we=>{v.textContent=we,v.hidden=!we});let De=Z.boss;ye("boss",De?`${De.name}|${De.phase}|${De.invuln}|${De.hint}`:"",()=>{_.hidden=!De,De&&(M.textContent=De.name,_.dataset.invuln=De.invuln?"1":"0",x.textContent=De.hint)}),ye("boss.fill",De?Math.round(De.fraction*500):-1,()=>{De&&(T.style.width=fe(De.fraction))});let Ne=Z.ending;ye("ending",Ne?`${Ne.card}|${Ne.final}`:"",()=>{b.hidden=!Ne,Ne&&(b.dataset.tone=Ne.tone,C.replaceChildren(...Ne.lines.map((we,Ve)=>e("div",Ve===0?"cr-ending-line cr-ending-first":"cr-ending-line",null,we))),L.textContent=Ne.final?"Press any key":"")}),ye("pop",Z.pop?`${Z.pop.kind}|${Z.pop.text}`:"",()=>{R.hidden=!Z.pop,Z.pop&&(R.textContent=Z.pop.text,R.dataset.kind=Z.pop.kind)}),ye("hint",Z.hint?Z.hint.text:"",we=>{w.hidden=!we,w.textContent=we}),ye("hint.op",Z.hint?Math.round(Z.hint.opacity*50):-1,()=>{Z.hint&&(w.style.opacity=Z.hint.opacity.toFixed(2))});let q=Z.tac?Z.tac.items:[];k.hidden=!Z.tac;for(let we of Object.keys(P))P[we].root.hidden=!q.some(Ve=>Ve.id===we);for(let we of q){let Ve=P[we.id];if(!Ve){let Te=e("div",`cr-tac-item cr-tac-${we.kind}`,k);Ve=P[we.id]={root:Te,arrow:e("i","cr-tac-arrow",Te),label:e("span","cr-tac-label",Te),bar:e("i","cr-tac-bar",Te),fill:e("b","",null)},Ve.bar.appendChild(Ve.fill)}Ve.root.style.left=fe(we.x),Ve.root.style.top=fe(we.y),Ve.root.dataset.off=we.off?"1":"0",Ve.root.dataset.down=we.down?"1":"0",Ve.arrow.style.transform=`rotate(${(we.angle||0).toFixed(2)}rad)`,ye(`tac.${we.id}.label`,we.label,Te=>{Ve.label.textContent=Te}),ye(`tac.${we.id}.bar`,we.frac===void 0?-1:Math.round(we.frac*100),Te=>{Ve.bar.hidden=Te<0,Te>=0&&(Ve.fill.style.width=`${Te}%`)})}ye("hours",Z.hours||"",we=>{I.textContent=we,I.hidden=!we}),ye("bark",Z.bark?`${Z.bark.speaker}|${Z.bark.text}`:"",()=>{F.hidden=!Z.bark,Z.bark&&(B.textContent=Z.bark.speaker,B.style.color=Z.bark.color||"",$.textContent=Z.bark.text)}),ye("hit",Z.hit.show?Z.hit.kind:"",we=>{ge.hidden=!we,ge.dataset.kind=we})}}}function eb(t){let e=cs(Yt),n=hs(e),i=new xt;i.name=`dummy-${t.id}`,i.add(e.root),i.add(e.shadow);let s=!!(t.rail&&t.rail.half>0),r=t.yaw,o=t.pos[0],a=t.pos[2],l="live",c=0;s&&n.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(t.pos[0],t.pos[1],t.pos[2]);let f=t.pos[0]-o,m=t.pos[2]-a;s&&f*f+m*m>1e-8&&(r=Math.atan2(f,m)),o=t.pos[0],a=t.pos[2],i.rotation.y=r;let y=H.feedback;if(l==="burst"){c+=u;let g=y.dummyBurstTime>0?Math.min(c/y.dummyBurstTime,1):1;h(1+.2*g),g>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let g=y.dummyRespawnPop>0?Math.min(c/y.dummyRespawnPop,1):1;h(g),g>=1&&(l="live")}l!=="gone"&&(n.update(s?u*Math.min(Math.max(H.dummy.railSpeed/ls,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&n.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var tb="#f3efe6";function nb(t){for(let e of Object.values(t))e&&typeof e=="object"&&nb(e);return Object.freeze(t)}var ib=nb({...structuredClone(Yt),name:"doc-placeholder",colors:{...Yt.colors,hair:z.teal,shirt:tb,collar:tb},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Yt.face,brow:"uni",fixedSmile:0}});function wd(t){return Xt(t.map(([e,n,i,s,r,o])=>new gt(e,n,i).translate(s,r,o)),!1)}function to(t,e,n){let i=new at(vi(e),Pt({color:n}));return Bn(i),t.add(i),i}var Vs=.09;function BC(){let t=new xt;t.name="disc",t.position.set(0,-.05,.22),to(t,new Jt(Vs,Vs,.022,20),z.playerOrange),to(t,new Jt(Vs-.018,Vs-.018,.034,20),z.cream);let e=[];for(let i=0;i<6;i++){let s=i/6*Math.PI*2;e.push(new gt(.02,.026,.05).rotateY(s).translate(Math.sin(s)*(Vs-.03),0,Math.cos(s)*(Vs-.03)))}to(t,Xt(e,!1),z.ink);let n=new at(new Jt(Vs*1.12,Vs*1.12,.012,28),new $t({color:z.cream,transparent:!0,opacity:0,depthWrite:!1}));return n.name="discBlur",n.visible=!1,t.add(n),t}function zC(){let t=new xt;return t.name="rifle",to(t,wd([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),z.playerOrange),to(t,wd([[.05,.12,.06,0,-.07,0]]),z.ink),t.add(BC()),t}function HC(){let t=new xt;return t.name="pistol",to(t,wd([[.045,.06,.25,0,.04,.075]]),z.playerOrange),to(t,wd([[.04,.1,.05,0,-.04,0]]),z.ink),t}var GC={regret:[0,.06,.45],pistol:[0,.04,.2]},VC=new G(0,0,1),AF=new G,wr=new G;function sb(){let t=new xt;t.name="gun";let e={regret:zC(),pistol:HC()};t.add(e.regret,e.pistol);let n="regret";e.pistol.visible=!1;let i=new G,s=new G(0,0,1),r=e.regret.getObjectByName("disc"),o=r.getObjectByName("discBlur"),a=1/0,l=0;function c(u){if(!(!e[u]||u===n)){n=u;for(let f of Object.keys(e))e[f].visible=f===u}}function h(u,f){i.set(u[0],u[1],u[2]),s.set(f[0],f[1],f[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),t.quaternion.setFromUnitVectors(VC,s),d()}function d(){let u=H.feedback,f=Math.max(u.gunSquashTime,1e-6),m=a>=0&&a<f?Math.sin(Math.PI*a/f):0,y=u.gunSquash*m;t.scale.set(1+y/2,1+y/2,1-y),t.position.copy(i).addScaledVector(s,-u.gunKick*m)}return{group:t,setWeapon:c,place:h,shot(){a=0,d()},update(u,f=0){a+=u>0?u:0,u>0&&f&&(r.rotation.y+=f*u),u>0&&(l+=((f?1:0)-l)*(1-Math.exp(-u/.06)));let m=H.feedback;r.scale.setScalar(1+(Math.max(m.discScale,1)-1)*l),o.visible=l>.05&&m.discBlur>0,o.material.opacity=m.discBlur*l,d()},disc:r,blade(u=[0,0,0]){return t.updateMatrix(),wr.set(r.position.x,r.position.y,r.position.z+Vs*r.scale.x).applyMatrix4(t.matrix),u[0]=wr.x,u[1]=wr.y,u[2]=wr.z,u},revK:()=>l,tip(u=[0,0,0]){let f=GC[n];return t.updateMatrix(),wr.set(f[0],f[1],f[2]).applyMatrix4(t.matrix),u[0]=wr.x,u[1]=wr.y,u[2]=wr.z,u}}}var rb=8,ob=64,ga=.12,ab=4,lb=3;function sc(){let t=(s,r)=>{s.deleteAttribute("uv");let o=new Je(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new Tt(l,3)),s},e=t(new an(ga,14,10).toNonIndexed(),z.ink),n=[new gt(.03,.1,.03).translate(-.055,ga+.04,0),new gt(.03,.1,.03).translate(.055,ga+.04,0),new gt(.14,.03,.03).translate(0,ga+.1,0)].map(s=>t(s.toNonIndexed(),z.playerOrange)),i=t(new gt(.07,.07,.012).translate(0,0,ga-.002).toNonIndexed(),z.cream);return Xt([e,...n,i],!1)}function WC(){let t=(n,i)=>{n=n.toNonIndexed(),n.deleteAttribute("uv");let s=new Je(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new Tt(o,3)),n},e=[t(new gt(.5,.03,.65),"#9be15d")];for(let n=0;n<6;n++)e.push(t(new gt(.38,.034,.025).translate(0,0,-.24+n*.09),z.ink));return Xt(e,!1)}function cb(t){let e=new es(sc(),Pt({vertexColors:!0,rim:.15}),rb);e.name="kettlebells",e.frustumCulled=!1,e.count=0,t.add(e);let n=new mn,i=0,s=new es(WC(),Pt({vertexColors:!0,rim:.15}),ab);s.name="termsPages",s.frustumCulled=!1,s.count=0,t.add(s);let r=[];for(let u=0;u<lb;u++){let f=new at(new er(.9,1,48).rotateX(-Math.PI/2),new $t({color:z.gel,side:kn,depthWrite:!1,toneMapped:!1})),m=new at(new ll(.9,36).rotateX(-Math.PI/2),new $t({color:"#ff3b1f",transparent:!0,opacity:.28,side:kn,depthWrite:!1,toneMapped:!1}));f.name="lobMarkerRing",m.name="lobMarkerDisc",f.visible=m.visible=!1,t.add(f,m),r.push({ring:f,disc:m})}let o=new Float32Array(ob*3),a=new Bt;a.setAttribute("position",new Tt(o,3)),a.setDrawRange(0,0);let l=new Ml({color:z.playerOrange,dashSize:H.feedback.arcDot,gapSize:H.feedback.arcDot}),c=new il(a,l);c.name="kettlebellArc",c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new sl(a,new Go({color:z.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));h.name="kettlebellArcDots",h.frustumCulled=!1,h.visible=!1,t.add(h);let d=new at(new er(.88,1,40).rotateX(-Math.PI/2),new $t({color:z.playerOrange,side:kn,depthWrite:!1,toneMapped:!1}));return d.name="kettlebellRing",d.visible=!1,t.add(d),{mesh:e,line:c,ring:d,dots:h,pages:s,markers:r,update(u,f,m=0,y=null){i+=m>0?m:0;let g=H.grenade.ballRadius/ga,p=0,v=0;for(let M=0;M<u.length;M++){let S=u[M];if(S.hostile){if(v>=ab)continue;n.position.set(S.prevPos[0]+(S.pos[0]-S.prevPos[0])*f,S.prevPos[1]+(S.pos[1]-S.prevPos[1])*f,S.prevPos[2]+(S.pos[2]-S.prevPos[2])*f),n.rotation.set(i*7+v,i*5,i*9),n.scale.setScalar(1),n.updateMatrix(),s.setMatrixAt(v++,n.matrix);continue}if(p>=rb)continue;let T=S.prevPos[0]+(S.pos[0]-S.prevPos[0])*f,x=S.prevPos[1]+(S.pos[1]-S.prevPos[1])*f,b=S.prevPos[2]+(S.pos[2]-S.prevPos[2])*f,C=S.fuse<H.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;n.position.set(T,x,b),n.rotation.set(b*2.5,0,-T*2.5),n.scale.setScalar(g*C),n.updateMatrix(),e.setMatrixAt(p++,n.matrix)}e.count=p,e.instanceMatrix.needsUpdate=!0,s.count=v,s.instanceMatrix.needsUpdate=!0;let _=y||[];for(let M=0;M<lb;M++){let S=r[M],T=_[M];if(S.ring.visible=S.disc.visible=!!T,!T)continue;let x=.5+.5*Math.sin(i*(T.windup?14:22));S.ring.position.set(T.pos[0],.04,T.pos[2]),S.disc.position.set(T.pos[0],.035,T.pos[2]),S.ring.scale.setScalar(T.radius),S.disc.scale.setScalar(T.radius*(.55+.45*x))}},arc(u,f,m,y){if(!y||!(f>1)){c.visible=!1,h.visible=!1,d.visible=!1;return}let g=Math.min(f,ob);for(let p=0;p<g;p++)o[p*3]=u[p][0],o[p*3+1]=u[p][1],o[p*3+2]=u[p][2];a.attributes.position.needsUpdate=!0,a.setDrawRange(0,g),l.dashSize=l.gapSize=Math.max(H.feedback.arcDot,.001),c.computeLineDistances(),c.visible=!0,h.visible=!0,m?(d.position.set(m[0],m[1]+.03,m[2]),d.scale.setScalar(H.grenade.killRadius),d.visible=!0):d.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,s.count=0,s.instanceMatrix.needsUpdate=!0,c.visible=!1,h.visible=!1,d.visible=!1;for(let u of r)u.ring.visible=u.disc.visible=!1}}}var Td=Math.PI*2,ps=(t,e,n)=>t<e?e:t>n?n:t,XC=t=>t-Td*Math.round(t/Td),db=.001,U0=.5,B0=.3;function YC(t,e=t.tuning||H.move){let n=t.state,i=t.speed();if(n==="bash")return{name:"bash",rate:wt.bash.duration/Math.max(H.melee.bashTime,.001)};if(n==="rev")return{name:"aim",rate:1};if(n==="execute")return{name:"bash",rate:1,loop:!0};if(n==="reviveTobble")return{name:"revive",rate:1};if(n==="knocked")return{name:"flinch",rate:1};if(n==="downed")return{name:"crawl",rate:ps(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(n==="roll")return{name:"roll",rate:wt.roll.duration/e.rollTime};if(n==="sprint")return{name:"sprint",rate:ps(i/ls,e.sprintRateMin,e.sprintRateMax)};if(n==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:ps(i/ls,e.runRateMin,e.runRateMax)};if(t.grenadeAim)return{name:"throw",rate:0,at:B0*wt.throw.duration};if(t.aiming||t.firing)return{name:"aim",rate:1}}if(n==="coverSlide")return{name:Gs(t).kind==="low"?"coverLow":"coverTall",rate:1};if(n==="coverSwap")return{name:"sprint",rate:ps(i/ls,e.sprintRateMin,e.sprintRateMax)};if(n==="cover"&&t.cover){let s=t.cover,r=t.coverTuning||H.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":eo(t)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:ps(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return n==="vault"?{name:"vault",rate:wt.vault.duration/Math.max((t.coverTuning||H.cover).vaultTime,db)}:{name:"idle",rate:1}}function qC(t){let e=t.state==="cover"||t.state==="coverSlide"?Gs(t):null;return!e||e.kind!=="low"?0:t.state==="coverSlide"?ps(t.stateTime/Math.max(t.scratch.dur,1e-6),0,1):t.cover?ps(1-Math.max(t.cover.pop,t.cover.blind||0),0,1):0}var $C=(t,e)=>4*e*t*(1-t),KC=(t,e,n)=>t>=0&&t<n?e*Math.sin(Math.PI*t/n):0;function z0(t){if(t<=.08)return 0;if(t>=.9)return Td;let e=(t-.08)/.82;return Td*e*e*(3-2*e)}var hb=.95,ub=.6,_i=new G,Fn=[0,0,1],Sd=[0,0,0];function fb(t,e=ib){let n=cs(e),i=hs(n),s=new xt;s.name="player";let r=new xt;r.position.y=U0,n.root.position.y=-U0,r.add(n.root),s.add(r),s.add(n.shadow);let o=n.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=sb();s.add(l.group);let c=new at(sc(),Pt({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=n.root.getObjectByName("head"),f=new G,m=!0;function y(F,B,$){u.getWorldPosition(f),f.y+=n.spec.head.centerY;let X=Math.hypot(F[0]-f.x,F[1]-f.y,F[2]-f.z);return m=kx(X,m,B,$),u.visible=m,m}let g=0,p=0,v=0,_=0,M="",S=0,T=-1,x=t.slams||0,b=1/0;function C(F,B,$){let X=t.pos,j=t.prevPos,W=t.coverTuning||H.cover,ee=qC(t);g=W.popTime>0?Math.max(ee,g+ps(ee-g,-B/W.popTime,B/W.popTime)):ee;let Ee=t.state==="cover"&&t.cover&&t.cover.edge.kind==="low"?ps(t.cover.blind||0,0,1):0;if(ee>0||Ee>0){let Ke=Gs(t);p=Ke.normal[0],v=Ke.normal[1]}let Q=g*W.lowDrawBack+Ee*W.blindDrawBack;s.position.set(j[0]+(X[0]-j[0])*F+p*Q,j[1]+(X[1]-j[1])*F,j[2]+(X[2]-j[2])*F+v*Q),s.rotation.y=t.prevFacing+XC(t.facing-t.prevFacing)*F;let re=YC(t),_e=h>0;_e&&(re={name:"throw",rate:wt.throw.duration*(1-B0)/Math.max(H.grenade.throwTime,.001),at:B0*wt.throw.duration},h-=B);let Oe=_e?"throw!":re.name;Oe!==M||t.entries!==T?(i.play(re.name,re.name==="roll"?{fade:.05}:re.at!==void 0?{fade:.06,at:re.at}:void 0),M=Oe,T=t.entries,S=0):re.loop&&(S+=B*re.rate,S>=wt[re.name].duration&&(S-=wt[re.name].duration,i.play(re.name,{fade:0}))),i.update(B*re.rate,re.rate===0?B:void 0),n.update(B);let ie=H.feedback,Ce=Math.max(ie.gunSquashTime,1e-6);d=$&&$.shot?B:d+B;let He=d<Ce?ie.bodyKick*Math.sin(Math.PI*d/Ce):0;r.rotation.x=(t.state==="roll"?z0(t.stateTime/t.tuning.rollTime):0)-He,(t.slams||0)!==x?(x=t.slams||0,b=0):b+=B;let Ue=t.state==="vault"?$C(ps(t.stateTime/Math.max(W.vaultTime,db),0,1),W.vaultHop):0,qe=KC(b,W.slamSquash,W.slamSquashTime);r.scale.set(1+qe/2,1-qe,1+qe/2),r.position.y=U0*(1-qe)+Ue,c.visible=!!($&&$.kettlebell)&&!_e,c.scale.setScalar(H.grenade.ballRadius/.12),L(re.name,B,$)}function L(F,B,$){if(s.updateMatrixWorld(!0),(F==="coverBlindTallL"?a.L:a.R).getWorldPosition(_i),s.worldToLocal(_i),$&&$.stance&&F==="coverBlindLow")Fn[0]=0,Fn[1]=Math.sin(hb),Fn[2]=Math.cos(hb);else if(t.state==="bash"||t.state==="rev"||t.state==="execute")Fn[0]=0,Fn[1]=-.05,Fn[2]=1;else if($&&$.stance&&$.dir){let j=Math.cos(s.rotation.y),W=Math.sin(s.rotation.y);Fn[0]=$.dir[0]*j-$.dir[2]*W,Fn[1]=$.dir[1],Fn[2]=$.dir[0]*W+$.dir[2]*j}else Fn[0]=0,Fn[1]=-Math.sin(ub),Fn[2]=Math.cos(ub);if($&&$.stance==="blind"&&F.startsWith("coverBlind")){let j=H.feedback,W=j.blindFlail,ee=2*Math.PI*j.blindFlailHz;_+=B;let Ee=($.blindDrift||0)*Math.PI/180+Math.sin(ee*_)*W*.5,Q=Math.sin(ee*1.3*_+1)*W*.5,re=Math.cos(Ee),_e=Math.sin(Ee),Oe=Fn[0],ie=Fn[2];Fn[0]=Oe*re+ie*_e,Fn[2]=-Oe*_e+ie*re,Fn[1]+=Q}$&&$.weapon&&l.setWeapon($.weapon),l.place([_i.x,_i.y,_i.z],Fn),$&&$.shot&&l.shot(),l.update(B,t.state==="rev"||t.state==="execute"?H.melee.cutterSpin:0),l.group.visible=t.state!=="roll"&&t.state!=="downed"&&t.state!=="reviveTobble"&&!c.visible&&h<=0}function R(F=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(Sd),_i.set(Sd[0],Sd[1],Sd[2]).applyMatrix4(s.matrixWorld),F[0]=_i.x,F[1]=_i.y,F[2]=_i.z,F}let w=[0,0,0];function k(F=[0,0,0]){return s.updateMatrixWorld(!0),l.blade(w),_i.set(w[0],w[1],w[2]).applyMatrix4(s.matrixWorld),F[0]=_i.x,F[1]=_i.y,F[2]=_i.z,F}function P(){n.dispose(),n.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:C,dispose:P,rig:n,anim:i,fadeHeadFor:y,gun:l,gunTip:R,bladePos:k,throwNow:()=>{h=Math.max(H.grenade.throwTime,.001)},kettlebell:c}}var Ed=new Set(["telegraph","burst"]),Sr=(t,e,n)=>t<e?e:t>n?n:t,ZC=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),pb=.5,jC=-.6,JC=t=>t.point&&t.point.kind==="tall"?"tall":"low";function QC(t){let e=JC(t)==="tall";switch(t.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let n=t.point,i=Yi(-n.normal[0],-n.normal[1]);return n.tangent[0]*n.end*Math.cos(i)-n.tangent[1]*n.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function e3(t){if(t.kind==="trainer"||t.kind==="boss")return t.yaw;if((t.state==="idle"||t.state==="cover"||t.state==="reload"||t.state==="flinch"||t.state==="suppress")&&t.point)return Yi(-t.point.normal[0],-t.point.normal[1]);if(Ed.has(t.state))return Yi(t.aim[0]-t.pos[0],t.aim[2]-t.pos[2]);if(t.state==="run"&&t.path&&t.path[t.pathI]){let e=t.path[t.pathI];if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[2])>1e-6)return Yi(e[0]-t.pos[0],e[1]-t.pos[2])}return t.yaw}function t3(t){switch(t.state){case"run":return"run";case"windup":case"swing":return"throw";case"stagger":case"executed":return"flinch";case"dive":return"roll";default:return"idle"}}function n3(t){switch(t.state){case"retreat":case"return":return"run";case"telegraph":case"burst":return"aim";case"lobWindup":case"lobRecover":return"throw";default:return"idle"}}function i3(t){return t.state==="dead"||!t.alive?"dead":t.kind==="boss"?t.state==="telegraph"||t.state==="burst"||t.state==="lobWindup"||t.state==="lobRecover"?"angry":t.state==="retreat"||t.state==="hiding"?"scared":"smug":t.kind==="trainer"&&(t.state==="run"||t.state==="windup"||t.state==="swing")||Ed.has(t.state)?"angry":t.state==="flinch"||t.state==="stagger"||t.state==="downed"||t.state==="executed"||t.state==="dive"?"scared":"smug"}var xb=.03,H0=[0,.06,.32];function s3(){let t=new xt;t.name="blaster";let n=Xt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new gt(r,o,a).translate(l,c,h)),!1),i=new at(vi(n),Pt({color:z.glorpPurple}));Bn(i),t.add(i);let s=new at(new an(xb,10,8),new $t({color:z.gel}));return s.name="emitter",s.position.set(H0[0],H0[1],H0[2]),t.add(s),{group:t,emitter:s}}var r3=new G(0,0,1),ki=new G,Tr=new G,mb=.6,no=.4,gb=.95,o3=1.3;function a3(){let t=sc();t.translate(0,-.22,0).rotateX(Math.PI);let e=new xt;e.name="trainerKettlebell",e.scale.setScalar(o3),e.add(new at(t,Pt({vertexColors:!0,rim:.15})));let n=new at(new an(.07,10,8),new $t({color:"#ff4a1c",toneMapped:!1}));return n.name="glint",n.position.set(0,.22,0),n.visible=!1,e.add(n),{group:e,glint:n}}function rc(t,e){t=t.toNonIndexed(),t.deleteAttribute("uv");let n=new Je(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new Tt(s,3)),t}function l3(){let t=[rc(new Jt(.2,.22,.09,16,1,!0).translate(0,.045,0),us)];for(let n=0;n<5;n++){let i=n/5*Math.PI*2;t.push(rc(new cl(.045,.14,4).translate(Math.sin(i)*.2,.16,Math.cos(i)*.2),n%2?us:z.hotPink))}let e=new at(Xt(t,!1),Pt({vertexColors:!0,rim:.1}));return e.name="crown",e}function c3(){let e=[z.hotPink,z.teal,z.cream,z.gel,z.lilac].map((i,s)=>rc(new gt(.075,.105,.012).translate(-.12+s*.06,.3-Math.abs(s-2)*.03-s%2*.03,.215),i)),n=new at(Xt(e,!1),Pt({vertexColors:!0,rim:.1}));return n.name="keycards",n}function h3(){let t=[rc(new gt(.3,.4,.014),"#9be15d")];for(let i=0;i<5;i++)t.push(rc(new gt(.22,.014,.018).translate(0,.14-i*.07,0),z.ink));let e=new xt;e.name="termsPage",e.add(new at(Xt(t,!1),Pt({vertexColors:!0,rim:.1})));let n=new at(new an(.08,10,8),new $t({color:z.gel,toneMapped:!1}));return n.name="glint",n.position.set(0,.24,0),n.visible=!1,e.add(n),e.visible=!1,e.position.set(0,.1,.12),e.rotation.x=-.5,{group:e,glint:n}}function vb(t){let e=t==="trainer",n=t==="boss",i=cs(e?Tx:n?nd:Yt),s=hs(i),r=new xt;r.name=t;let o=new xt;o.position.y=pb,i.root.position.y=-pb,o.add(i.root),r.add(o),r.add(i.shadow);let a=i.root.getObjectByName("body").children[2],l=e?a3():s3(),c=null;if(e?a.add(l.group):r.add(l.group),n){let h=l3();h.position.set(0,nd.head.centerY+nd.head.ry-.04,0),i.root.getObjectByName("head").add(h),i.root.getObjectByName("hips").add(c3()),c=h3(),a.add(c.group)}return{kind:t,rig:i,anim:s,root:r,tumble:o,handR:a,weapon:l,terms:c}}function yb(t){let e=new xt;e.name=`associate-${t.id}`;let n={associate:vb("associate"),trainer:null,boss:null},i=n.associate;e.add(i.root);let s=i.weapon,r="",o=0,a="",l=0,c=t.yaw,h="live",d=0,u=!1,f=0,m=0,y=0,g=0,p=0;function v(b){if(i.kind===b)return;n[b]||(n[b]=vb(b),e.add(n[b].root),b==="boss"&&e.add(n.boss.weapon.group)),i.root.visible=!1,i=n[b],i.root.visible=!0;let C=H.trainer.scaleW,L=H.trainer.scaleH;r="",a=""}function _(){h="live",d=0,l=0,c=t.yaw,u=!1,f=0,e.visible=!0,e.scale.setScalar(1),i.tumble.rotation.x=0,r="",a="",o=0,s.emitter.scale.setScalar(1),n.trainer&&(n.trainer.weapon.glint.visible=!1),n.boss&&(n.boss.terms.glint.visible=!1,n.boss.terms.group.visible=!1)}function M(b,C){let L=H.feedback,R=H.cover,w=H.associate;if(t.state==="unused"){e.visible=!1;return}if(t.state==="spawn"&&(h==="burst"||h==="gone")&&_(),t.state!=="dead"&&t.alive&&v(t.kind||"associate"),!t.alive&&t.state==="dead"&&h==="live"&&(h="burst",d=0),h==="live"&&(e.visible=!0),h==="burst"){d+=C;let Pe=t.kind==="boss"?H.ending.deathDelay*.9:L.dummyBurstTime,ye=Pe>0?Math.min(d/Pe,1):1;e.scale.setScalar(1+.2*ye),ye>=1&&(h="gone",e.visible=!1)}if(h==="gone")return;let k=h==="burst",{rig:P,anim:I,tumble:F,handR:B}=i,$=i.kind==="trainer",X=i.kind==="boss",j=H.trainer,W=H.boss;if(X){let Pe=W.scale*(W.crouchY+(1-W.crouchY)*Sr(t.pop,0,1));i.root.scale.set(W.scale,Pe,W.scale)}else i.root.scale.set($?j.scaleW:1,$?j.scaleH:1,$?j.scaleW:1);X&&k&&(i.root.scale.y*=1-.45*Sr(d/Math.max(H.ending.deathDelay*.9,.001),0,1));let ee=t.pos,Ee=t.prevPos,Q=!k&&t.point&&t.point.kind==="low"&&t.state!=="run"&&t.state!=="dead",re=Q?Sr(1-Math.max(t.pop,t.blind),0,1):0;l=R.popTime>0?Math.max(re,l+Sr(re-l,-C/R.popTime,C/R.popTime)):re;let _e=Q?Sr(t.blind,0,1):0;Q&&(y=t.point.normal[0],g=t.point.normal[1]);let Oe=l*R.lowDrawBack+_e*R.blindDrawBack,ie=t.state==="spawn"?jC*(1-Sr(t.stateT/Math.max(H.pad.riseTime,.001),0,1)):0;if(e.position.set(Ee[0]+(ee[0]-Ee[0])*b+y*Oe,Ee[1]+(ee[1]-Ee[1])*b+ie,Ee[2]+(ee[2]-Ee[2])*b+g*Oe),m+=C,t.state==="executed"){let Pe=H.feedback.executeJitter,ye=2*Math.PI*m;e.position.x+=Math.sin(ye*17)*Pe,e.position.z+=Math.sin(ye*13+1)*Pe,i.root.rotation.z=Math.sin(ye*15+2)*Pe*1.6}else i.root.rotation.z=0;let Ce=$||X||t.state==="run"||Ed.has(t.state)?t.prevYaw+ZC(t.yaw-t.prevYaw)*b:e3(t);if(c=qt(c,Ce,($?j.turnRate:w.turnRate)*1.5*C),e.rotation.y=c,k)return;let He=$?t3(t):X?n3(t):QC(t),Ue=$||X?He+":"+t.state:He,qe=wt.throw.duration;if(Ue!==r){if(($||X)&&He==="throw"){let Pe=t.state==="swing"||t.state==="lobRecover",ye=Pe?no*qe:0;I.play(He,{fade:Pe?.02:.08,at:ye}),p=ye}else I.play(He,He==="flinch"?void 0:{fade:.1});r=Ue,o=0}else t.state==="executed"&&(o+=C,o>=wt.flinch.duration&&(o=0,I.play("flinch")));let Ke=He==="run"?Sr(($?j.runSpeed:X?W.retreatSpeed:w.runSpeed)/ls,.5,3):1;He==="crawl"&&(Ke=Math.hypot(ee[0]-Ee[0],ee[2]-Ee[2])>1e-5?1:0),He==="roll"&&(Ke=wt.roll.duration/Math.max(w.diveReaction+w.diveTime,.001)),$&&t.state==="windup"&&(Ke=p<no*qe-1e-6?no*qe/Math.max(j.windup,.001):0),X&&t.state==="lobWindup"&&(Ke=p<no*qe-1e-6?no*qe/Math.max(W.popTime+W.lobWindup,.001):0),X&&t.state==="lobRecover"&&(Ke=(1-no)*qe/Math.max(W.lobRecover,.001)),$&&t.state==="swing"&&(Ke=(1-no)*qe/Math.max(j.swingTime,.001)),p+=C*Ke,F.rotation.x=He==="roll"?z0(Sr(t.stateT/Math.max(w.diveReaction+w.diveTime,.001),0,1)):0,I.update(C*Ke,Ke===0?C:void 0),P.update(C);let ge=i3(t);ge!==a&&(P.face.setExpression(ge),a=ge),$?S(C):X?(i.weapon.group.scale.setScalar(W.scale),T(C),x(He,C,B,i.weapon,t.state==="lobWindup"||t.state==="lobRecover")):x(He,C,B)}function S(b){let C=n.trainer.weapon.glint;C.visible=u&&t.state==="windup",C.visible&&(f+=b,C.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function T(b){let C=n.boss.terms;C.group.visible=t.state==="lobWindup",C.glint.visible=u&&t.state==="lobWindup",C.glint.visible&&(f+=b,C.glint.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function x(b,C,L,R=n.associate.weapon,w=!1){R.group.visible=t.state!=="downed"&&t.state!=="dive"&&!w,e.updateMatrixWorld(!0),L.getWorldPosition(ki);let k=ki.x,P=ki.y,I=ki.z;e.worldToLocal(ki);let F=ki.x,B=ki.y,$=ki.z;if(Ed.has(t.state)){let X=Math.cos(e.rotation.y),j=Math.sin(e.rotation.y),W=t.aim[0]-k,ee=t.aim[2]-I;Tr.set(W*X-ee*j,t.aim[1]-P,W*j+ee*X)}else b==="coverBlindLow"?Tr.set(0,Math.sin(gb),Math.cos(gb)):t.state==="suppress"?Tr.set(0,.05,1):Tr.set(0,-Math.sin(mb),Math.cos(mb));if(Tr.lengthSq()<1e-12&&Tr.set(0,0,1),Tr.normalize(),R.group.position.set(F,B,$),R.group.quaternion.setFromUnitVectors(r3,Tr),u){f+=C;let X=.5+.5*Math.sin(f*2*Math.PI*8),j=H.feedback.glintSize/xb;R.emitter.scale.setScalar(1+(j-1)*X)}else R.emitter.scale.setScalar(1)}return{group:e,update:M,reset:_,death(){h==="live"&&(h="burst",d=0)},glint(b){b&&!u&&(f=0),u=!!b},tip(b=[0,0,0]){return e.updateMatrixWorld(!0),(i.kind==="trainer"?i.weapon.glint:i.weapon.emitter).getWorldPosition(ki),b[0]=ki.x,b[1]=ki.y,b[2]=ki.z,b},get rig(){return i.rig},get anim(){return i.anim},blaster:s,get kind(){return i.kind}}}var oc=new G;function Di(t,e,n,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;oc.copy(e),oc[i]=0,oc.normalize();let c=.5*o/(o+a),h=1-oc.angleTo(t)/l;return Math.sign(oc[n])===1?h*c:a/(o+a)+c+c*(1-h)}var Ad=class t extends gt{constructor(e=1,n=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,n/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new G,c=new G,h=new G(e,n,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,y=new G,g=.5/o;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[v+0]=Di(y,c,"z","y",r,i),f[v+1]=1-Di(y,c,"y","z",r,n);break;case 1:y.set(-1,0,0),f[v+0]=1-Di(y,c,"z","y",r,i),f[v+1]=1-Di(y,c,"y","z",r,n);break;case 2:y.set(0,1,0),f[v+0]=1-Di(y,c,"x","z",r,e),f[v+1]=Di(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[v+0]=1-Di(y,c,"x","z",r,e),f[v+1]=1-Di(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[v+0]=1-Di(y,c,"x","y",r,e),f[v+1]=1-Di(y,c,"y","x",r,n);break;case 5:y.set(0,0,-1),f[v+0]=Di(y,c,"x","y",r,e),f[v+1]=1-Di(y,c,"y","x",r,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};function _b(t){for(let e of Object.values(t))e&&typeof e=="object"&&_b(e);return Object.freeze(t)}var bb=(t,e,n)=>{let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*n)<<o;return"#"+r.toString(16).padStart(6,"0")},io=_b({...Yt,name:"tobble",hair:{...Yt.hair,quiff:!1},colors:{...Yt.colors,shirt:z.cream,collar:bb(z.cream,z.ink,.2),skin:z.tobbleMint,hair:bb(z.tobbleMint,z.ink,.45),backpack:"#ffd23f",lanyard:"#ffd23f",badgeStripe:"#ffd23f",rim:.25,rimColor:"#ffffff",mat:z.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...Yt.face,brow:"pair",fixedSmile:.4,eyeColor:z.eyeWhite,eyeGlow:!1},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var V0=(t,e,n)=>t<e?e:t>n?n:t,Tb=t=>V0(t,0,1),Mb=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),u3=1/60,wb=t=>t.point&&t.point.kind==="tall"?"tall":"low";function d3(t,e=t.speed||0){let n=e>.3;switch(t.state){case"cover":return wb(t)==="tall"?"coverTall":"coverLow";case"shoot":return wb(t)==="tall"?"aim":"coverPop";case"revive":return t.kneeling?"revive":n?"run":"idle";case"downed":return"crawl";default:return n?"run":"idle"}}function f3(t){return t.downed||!t.point||t.point.kind!=="low"||t.state!=="cover"&&t.state!=="shoot"?0:Tb(1-t.pop)}function p3(){let e=new Uint8Array(16384),n=new Je(z.tobbleMint),i=new Je(z.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?n:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new Fr(e,64,64,gi);return r.colorSpace=pn,r.magFilter=Ln,r.minFilter=Ln,r.needsUpdate=!0,r}function W0(t,e){let n=new at(vi(t),Pt({color:e}));return Bn(n),n}var G0=[0,.04,.2];function m3(){let t=new xt;t.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return t.add(W0(Xt(e.map(([n,i,s,r,o,a])=>new gt(n,i,s).translate(r,o,a)),!1),z.tobbleMint)),t}var g3=new G(0,0,1),ms=new G,va=new G,Sb=.6;function Eb(t){let e=cs(io),n=hs(e),i=new xt;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new xt;l.name="thirdEye";let c=io.thirdEye,h=new at(new an(c.r,12,10),new $t({color:z.eyeWhite})),d=new at(new an(c.r*.5,10,8),new $t({color:z.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,io.head.centerY+c.y,.27),a.add(l);let u=io.backpack,f=new xt;f.name="backpack",f.add(W0(new Ad(u.w,u.h,u.d,3,.06),io.colors.backpack));let m=W0(new Jt(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),io.colors.mat);m.position.y=u.h/2+.05,f.add(m),f.position.set(0,.2,-.32),o.add(f);let y=m3();i.add(y);let g=new tl(new Bo({map:p3(),depthTest:!1,depthWrite:!1,toneMapped:!1}));g.name="tobblePlus",g.renderOrder=20,g.visible=!1,i.add(g);let p="",v=0,_=t.yaw,M=0,S=0,T="",x=0;function b(){p="",v=0,_=t.yaw,T="",x=0,i.position.set(t.start[0],t.start[1],t.start[2]),i.rotation.y=t.startYaw,g.visible=!1}function C(R,w){let k=H.tobble,P=H.cover,I=k.scale;x+=w>0?w:0,i.scale.setScalar(I);let F=t.pos,B=t.prevPos,$=Math.hypot(F[0]-B[0],F[2]-B[2])/u3,X=f3(t);v=P.popTime>0?Math.max(X,v+V0(X-v,-w/P.popTime,w/P.popTime)):X,X>0&&t.point&&(M=t.point.normal[0],S=t.point.normal[1]);let j=v*P.lowDrawBack*I,W=t.point&&!t.downed?k.popLift*Tb(t.pop):0;i.position.set(B[0]+(F[0]-B[0])*R+M*j,B[1]+(F[1]-B[1])*R+W,B[2]+(F[2]-B[2])*R+S*j);let ee=t.prevYaw+Mb(t.yaw-t.prevYaw)*R;_+=Mb(ee-_)*Math.min(1,w*25),i.rotation.y=_;let Ee=d3(t,$);Ee!==p&&(n.play(Ee,{fade:.1}),p=Ee);let Q=1;Ee==="run"?Q=V0($/(ls*I),.5,3):Ee==="crawl"&&(Q=$>.001?1:0),n.update(w*Q,Q===0?w:void 0),e.update(w);let re=t.downed?"scared":t.state==="shoot"?"angry":"smug";re!==T&&(e.face.setExpression(re),T=re),g.visible=t.downed,t.downed&&(g.position.set(0,.95/I+.05*Math.sin(x*4),0),g.scale.setScalar(.5/I)),L()}function L(){y.visible=!t.downed&&t.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(ms);let R=ms.x,w=ms.y,k=ms.z;if(i.worldToLocal(ms),y.position.copy(ms),t.state==="shoot"&&t.target&&t.target.pos){let P=Math.cos(i.rotation.y),I=Math.sin(i.rotation.y),F=t.target.pos[0]-R,B=t.target.pos[2]-k;va.set(F*P-B*I,t.target.pos[1]+1.2-w,F*I+B*P)}else va.set(0,-Math.sin(Sb),Math.cos(Sb));va.lengthSq()<1e-12&&va.set(0,0,1),va.normalize(),y.quaternion.setFromUnitVectors(g3,va)}return b(),{group:i,update:C,reset:b,rig:e,anim:n,pistol:y,plus:g,eye:l,pack:f,tip(R=[0,0,0]){return i.updateMatrixWorld(!0),ms.set(G0[0],G0[1],G0[2]).applyMatrix4(y.matrixWorld),R[0]=ms.x,R[1]=ms.y,R[2]=ms.z,R}}}function v3(t){return t==="open"?{ring:z.gel,pulse:!0,steam:!0}:t==="closed"?{ring:z.ink,pulse:!1,steam:!1}:{ring:z.lilac,pulse:!1,steam:!1}}var x3="#e6c28c",y3="#b98a50",b3=.3;function _3(t){let e=(i,s)=>{i.deleteAttribute("uv");let r=new Je(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new Tt(a,3)),i},n=[e(new Jt(t,t,.08,32).translate(0,.04,0).toNonIndexed(),x3)];for(let i=-3;i<=3;i++){let s=i*(t/3.6),r=2*Math.sqrt(Math.max(t*t-s*s,.01))-.04;n.push(e(new gt(r,.006,.035).translate(0,.081,s).toNonIndexed(),y3))}return Xt(n,!1)}function Ab(t,e,n=null){let i=e.map(r=>{let o=H.pad.radius,a=new xt;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new at(_3(o),Pt({vertexColors:!0,rim:.1})));let l=new $t({color:z.lilac,side:kn,toneMapped:!1}),c=new at(new er(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),t.add(a);let h=Us({text:"SPAWN SAUNA",w:2.4,h:.7,bg:z.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,t.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=v3(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&n&&r>0){if(o.steamT+=r,o.steamT>=b3){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*H.pad.radius*.8;n.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var xa=Math.PI/180,Rb=.3,X0=1e-6,M3=64,w3=4,S3=64,Cb=(t,e,n)=>Math.max(e,Math.min(n,t));function q0(t,e,n=H.grenade,i=[0,0,0]){let s=Cb(e+n.throwLift*xa,-30*xa,70*xa),r=Math.cos(s);return i[0]=n.throwSpeed*Math.sin(t)*r,i[1]=n.throwSpeed*Math.sin(s),i[2]=n.throwSpeed*Math.cos(t)*r,i}function Rd(t,e,n=H.combat,i=[0,0,0]){if(t.cover)return Md(t,"blind",e,n,i);let s=bd(e),r=yd(e);i[1]=t.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=t.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=t.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!aa(t.boxes,i,0)));o-=.25);return i}var so=[0,0,0];function T3(t,e){let n=null,i=1/0;for(let a of t){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,n=a)}if(so[0]=so[1]=so[2]=0,!n)return so[1]=1,so;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=n.min[a]-e[a],c=e[a]-n.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return so[s]=o,so}var Y0={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},gs=[0,0,0];function Pb(t,e,n,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=t.pos,l=t.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=Cb(Math.ceil(c/r),1,M3),d=e/h;for(let u=0;u<h;u++){let f=d;for(let m=0;m<=w3&&f>0;m++){gs[0]=a[0]+l[0]*f,gs[1]=a[1]+l[1]*f-.5*o*f*f,gs[2]=a[2]+l[2]*f;let y=Ci(n,a,gs,r);if(y>=1){a[0]=gs[0],a[1]=gs[1],a[2]=gs[2],l[1]-=o*f;break}a[0]+=(gs[0]-a[0])*y,a[1]+=(gs[1]-a[1])*y,a[2]+=(gs[2]-a[2])*y,l[1]-=o*f*y;let g=T3(n,a),p=l[0]*g[0]+l[1]*g[1]+l[2]*g[2];if(p<0){let v=l[0]-g[0]*p,_=l[1]-g[1]*p,M=l[2]-g[2]*p;l[0]=v*i.friction-g[0]*p*i.restitution,l[1]=_*i.friction-g[1]*p*i.restitution,l[2]=M*i.friction-g[2]*p*i.restitution,-p>=Rb&&(s.clank=!0),g[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-g[0]*r,s.upPos[1]=a[1]-g[1]*r,s.upPos[2]=a[2]-g[2]*r)}if(a[0]+=g[0]*X0,a[1]+=g[1]*X0,a[2]+=g[2]*X0,g[1]>.7&&Math.hypot(l[0],l[1],l[2])<Rb){l[0]=l[1]=l[2]=0,t.resting=!0,s.rested=!0;return}f*=1-y}}}function E3(t,e,n,i=H.grenade){return Pb(t,e,n,i,Y0),Y0.clank?"clank":Y0.rested?"rest":null}var A3={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},ac={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function Ib(t,e,n,i=H.grenade,s){let r=A3;for(let h=0;h<3;h++)r.pos[h]=t[h],r.vel[h]=e[h],r.prevPos[h]=t[h];r.resting=!1;let o=Math.min(s.length,S3),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)Pb(r,1/60,n,i,ac),!c&&ac.up&&(c=[ac.upPos[0],ac.upPos[1],ac.upPos[2]])}return{count:l,land:c}}function Lb(t,e=H.grenade){return t>=0?t<=e.killRadius?e.killDamage:t>=e.radius?0:e.damage*(1-t/e.radius):0}function kb(t,e,n,i=H.grenade){let s=e[0]-t[0],r=e[2]-t[2],o=e[1]-t[1],a=s*Math.sin(n)+r*Math.cos(n),l=Math.abs(s*Math.cos(n)-r*Math.sin(n));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=p=>{let v=Math.cos(p);return a*Math.tan(p)-h*a*a/(2*c*c*v*v)},u=-30*xa,f=Math.min(70*xa,Math.atan(c*c/(h*a)));if(!(f>u)||d(u)>o||d(f)<o)return null;let m=u,y=f;for(let p=0;p<50;p++){let v=(m+y)/2;d(v)<o?m=v:y=v}let g=(m+y)/2;return Math.abs(d(g)-o)<=.3?g-i.throwLift*xa:null}function Db(t=H.grenade){let e=[];return{live:e,throw(n,i,s=t.fuse,r=null){let o={pos:[n[0],n[1],n[2]],vel:[i[0],i[1],i[2]],prevPos:[n[0],n[1],n[2]],resting:!1,fuse:s,hostile:r};return e.push(o),o},step(n,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=n;let a=E3(o,n,i,t);a==="clank"&&!o.hostile&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.hostile&&(a!==null||o.pos[1]<=t.ballRadius+.02)&&(o.fuse=0),o.fuse<=1e-9&&(s.push(o.hostile?{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]],hostile:o.hostile}:{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function Nb(t=H.grenade){let e={count:Math.min(t.start,t.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=t.carry},reset(){e.count=Math.min(t.start,t.carry)}};return e}var Ob=1.49,Fb=.2;function Ub(t,{spacing:e,cornerZone:n}){e=Math.max(Fb,Number.isFinite(e)?e:Fb);let i={cornerZone:n},s=[],r=(o,a,l)=>{let c=bi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return t.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,_r(o,c,i))}r(o,o.length,_r(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function ro(t,e,n=[0,0]){let i=t.kind==="low"?0:t.end*e;return n[0]=t.pos[0]+t.tangent[0]*i,n[1]=t.pos[1]+t.tangent[1]*i,n}function un(t,e,n){let i=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Gn(e,[i/o,s/o,r/o],o,t,[]).t>=o-1e-6}function Cd(t,e,n,i=H){let s=[t.pos[0],t.kind==="low"?i.combat.crouchHead:Ob,t.pos[1]],r=ro(t,i.associate.popShift),o=[r[0],Ob,r[1]];return{protected:!un(n,s,e),canShoot:un(n,o,e)}}var R3=Math.PI/180,C3=1.5,Pd=[0,0,0],Id=[0,0,0],P3={bash:t=>[t.melee.bashRange,t.melee.bashAngle],cutter:t=>[t.melee.cutterReach,t.melee.cutterAngle],finish:t=>[t.melee.executeRange,t.melee.executeAngle]};function lc(t,e,n,i,s,r=H){let[o,a]=P3[t](r),l=a*R3/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(t==="finish"&&!u)continue;let f=d.pos[0]-e[0],m=d.pos[2]-e[2],y=Math.hypot(f,m);y>o||y>=h||y>1e-6&&Math.abs(yi(Math.atan2(f,m)-n))>l+1e-9||(Pd[0]=e[0],Pd[1]=e[1]+1,Pd[2]=e[2],Id[0]=d.pos[0],Id[1]=d.pos[1]+(u?.3:1),Id[2]=d.pos[2],un(s,Pd,Id)&&(c=d,h=y))}return c}function Bb({downed:t,clear:e,tobble:n,pos:i,yaw:s,enemies:r,boxes:o,t:a=H}){if(t)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(n&&n.downed){let c=a.tobble?.playerReviveRange??C3;if(Math.hypot(n.pos[0]-i[0],n.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:n}}let l=lc("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}function zb(){let t=!1;return{step({equipPressed:n=!1,switched:i=!1,count:s=0,blocked:r=!1}={}){return r?(t=!1,t):(i?t=!1:n&&(t=t?!1:s>0),t&&s<=0&&(t=!1),t)},equipped:()=>t,reset(){t=!1}}}function Hb({equipped:t,aimHeld:e,firePressed:n,grenadeHeld:i,wasArmed:s}){return t?{aiming:!!e,throwNow:!!n}:{aiming:!!i,throwNow:!!s&&!i}}function Gb({bossArena:t=!1,boss:e=null,ending:n="off",desk:i=null,exit:s=null,gateOpen:r=!1}={}){return t?n==="desk"&&i?{kind:"desk",pos:[(i.x0+i.x1)/2,1.2,i.z],label:"CANCELLATION DESK"}:e&&e.alive?{kind:"boss",pos:[e.pos[0],e.pos[1]+1.6,e.pos[2]],label:"OVERLORD"}:null:r&&s?{kind:"gate",pos:[s.pos[0],1.6,s.pos[2]],label:"GO"}:null}function Vb(t,e,n=.35){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,r),a=Math.hypot(o,s);if(!(a>1e-6))return null;let l=o>1e-6?Math.atan2(i,r):null,c=Math.max(-n,Math.min(n,Math.asin(s/a)));return{yaw:l,pitch:c}}function Wb({finishTarget:t=!1,objective:e=null}={}){return t?"finish":e?"look":null}function Xb(t,e,n=!1,i=.06){let s=n?-t:t,r=n?-e:e;(!Number.isFinite(s)||!Number.isFinite(r))&&(s=0,r=0);let o=1-2*i;if(n||Math.abs(s)>o||Math.abs(r)>o){let l=Math.max(Math.abs(s)/o,Math.abs(r)/o,1e-9),c=s/l,h=r/l;return{x:(c+1)/2,y:(1-h)/2,off:!0,angle:Math.atan2(s,r)}}return{x:(s+1)/2,y:(1-r)/2,off:!1,angle:0}}function Yb({held:t=!1,blocked:e=!1,objective:n=null,tobble:i=null}={}){if(!t||e)return{show:!1,items:[]};let s=[];return n&&s.push({id:"objective",kind:n.kind,label:n.label,pos:n.pos}),i&&s.push({id:"tobble",kind:"tobble",label:i.downed?"TOBBLE DOWN":"TOBBLE",pos:[i.pos[0],i.pos[1]+1.5,i.pos[2]],frac:Math.max(0,Math.min(1,i.frac)),down:!!i.downed}),{show:!0,items:s}}var K0=t=>t<0?0:t>1?1:t,$0=new Set(["move","sprint"]),Ld=new Set(["move","sprint","cover"]);function I3({device:t="kbm",grenadeHeld:e=!1,equipped:n=!1,interact:i=null,reviving:s=!1,revving:r=!1,bashTarget:o=!1,cutterNear:a=!1,regretInHand:l=!1,holdFrac:c=0}={}){let h=(d,u=null)=>({text:Jr(d,t),hold:u});return e?h("throw"):n?h("equipped"):s||i&&i.kind==="reviveTobble"?h("reviveTobble",s?K0(c):0):i&&i.kind==="finish"?h("finish"):r?h("revving"):o?h("bash"):l&&a?h("rev"):null}function qb({mover:t,fight:e,arsenal:n,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let f=id(),m=Array.from({length:64},()=>[0,0,0]),y=[0,0,0],g=[0,0,0],p=[0,0,0],v=[0,1,0],_=0,M=0,S="kbm",T=!1,x=0,b=0,C=!1,L=0,R=!1,w=null,k=zb(),P=!1,I=null,F=0,B=0,$=[0,0,0],X=[0,0,1],j={count:0,land:null,show:!1},W=null,ee=0,Ee=()=>{u.restart&&u.restart()},Q=Z=>{u.marker&&u.marker(Z)},re=(Z,de=1)=>(p[0]=Z.pos[0],p[1]=Z.pos[1]+de,p[2]=Z.pos[2],p),_e=Z=>{let de=Z.pos[0]-t.pos[0],pe=Z.pos[2]-t.pos[2],De=Math.hypot(de,pe)||1;return v[0]=de/De,v[1]=.5,v[2]=pe/De,v};function Oe(){w&&w.e.state==="executed"&&e.releaseExecution(w.e),w=null}function ie(Z){return c&&typeof c.bladePos=="function"?c.bladePos($):re(Z)}function Ce(Z,de){if(!de){I&&(I.stop(),I=null),F=0;return}I||(I=typeof r.motor=="function"?r.motor():null),F+=Z,I&&I.update(de,Math.min(1,F/Math.max(H.feedback.motorRevTime,.001)),H.feedback.motorVolume)}function He(Z,de,pe){if(!e.beginExecution(Z))return!1;if(!t.execute([Z.pos[0],Z.pos[2]],de))return e.releaseExecution(Z),!1;if(w={e:Z,kind:pe,gelT:0,sfxT:0},pe==="cut"){let De=H.feedback,Ne=ie(Z);o.gel(Ne,_e(Z),De.grindGelCount*2),typeof o.spark=="function"&&o.spark(Ne,_e(Z),De.grindSparkCount*2),u.rumble&&u.rumble(De.grindRumble,.2)}return!0}function Ue(Z){let de=H.feedback;if(Z.type==="bashHit"){let pe=lc("bash",t.pos,_,e.enemies,d);if(s.bump(),r.play("bash",de.bashVolume),!pe)return;let De=e.bash(pe);o.gel(re(pe),_e(pe),de.gelCount),De==="hit"&&Q("body")}else if(Z.type==="executeDone"){let pe=w;if(w=null,!pe)return;s.bump(1.5),e.finishExecution(pe.e),pe.kind==="stomp"&&r.play("finish",de.bashVolume)}else Z.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",de.reviveVolume)}function qe(){if(!(L>0)){if(!i.take()){r.play("dry",H.feedback.reloadVolume);return}Rd(t,_,H.combat,y),q0(_,M,H.grenade,g),e.throwGrenade(y,g),c&&c.throwNow(),r.play("throw",H.feedback.throwVolume),s.kick(1.5,0),L=H.grenade.throwTime}}function Ke(){h&&h.arc(m,j.count,j.land,j.show)}function ge(){let Z=H.melee.promptRange;for(let de of e.enemies){if(!de.alive||de.state==="unused"||de.state==="downed"||de.state==="executed")continue;let pe=de.pos[0]-t.pos[0],De=de.pos[2]-t.pos[2],Ne=Math.hypot(pe,De);if(!(Ne>Z)&&(Ne<.5||Math.cos(Math.atan2(pe,De)-_)>=.5))return!0}return!1}function Pe(){f.reset(),T=!1,x=0,b=0,C=!1,L=0,R=!1,w=null,k.reset(),P=!1,Ce(0,null),B=0,j={count:0,land:null,show:!1},W=null,ee=0,Ke()}function ye(Z,de){_=de.camYaw,M=de.camPitch||0,S=de.device||"kbm";let pe=t,De=H.melee,Ne=H.grenade;L>0&&(L=Math.max(0,L-Z)),j.show=!1,W=null,ee=0;let q=k.step({equipPressed:!!de.equipPressed,switched:!!de.switched,count:i.count,blocked:l.downed});if(l.downed){w&&Oe(),f.reset(),T=!1,R=!1,x=0,k.reset(),P=!1,Ce(0,null),de.interactHeld||(C=!0),b=de.interactHeld&&C?b+Z:0,ee=K0(b/Math.max(H.health.giveUpHold,.001)),Ke(),b>=H.health.giveUpHold-1e-9&&(b=0,Ee());return}b=0,C=!1,w&&(pe.state!=="execute"||w.e.state!=="executed")&&Oe();let we=f.update(de.meleeHeld,de.meleePressed,Z,De.holdTime),Ve=f.holding();de.meleeHeld||(T=!1);let Te=n.current()==="regret"&&n.reload===null&&!(n.switching>0);we&&pe.bash(_);let O=!!de.grenadeHeld||q;pe.state==="rev"&&(!Ve||T||!Te||O)?pe.rev(!1):Ve&&!T&&Te&&!O&&L<=0&&$0.has(pe.state)&&pe.rev(!0);let K=H.feedback;if(pe.state==="rev"){Ce(Z,"rev"),B-=Z,B<=0&&(B=Math.max(K.revSparkEvery,.02),K.revSparkCount>0&&typeof o.spark=="function"&&(ie({pos:pe.pos}),X[0]=Math.sin(pe.facing),X[1]=.7,X[2]=Math.cos(pe.facing),o.spark($,X,K.revSparkCount)));let se=lc("cutter",pe.pos,pe.facing,e.enemies,d);se&&He(se,De.cutTime,"cut")&&r.play("cut",K.cutVolume)}else B=0;if(w&&pe.state==="execute"){let se=H.feedback;if(w.gelT-=Z,w.sfxT-=Z,w.kind==="cut"){if(Ce(Z,"grind"),w.gelT<=0){w.gelT=Math.max(se.cutGelEvery,.02);let ae=ie(w.e);o.gel(ae,_e(w.e),se.grindGelCount),typeof o.spark=="function"&&se.grindSparkCount>0&&o.spark(ae,_e(w.e),se.grindSparkCount);let Le=H.camera.bump.amount;Le>0&&s.bump(se.executeShake/Le),u.rumble&&u.rumble(se.grindRumble,Math.max(se.cutGelEvery*2,.08))}w.sfxT<=0&&(w.sfxT=.3,r.play("cut",se.cutVolume))}}pe.state!=="rev"&&!(w&&w.kind==="cut"&&pe.state==="execute")&&Ce(Z,null);let J=e.tobble,Me=Bb({downed:!1,clear:e.clear&&!e.boss,tobble:J,pos:pe.pos,yaw:pe.facing,enemies:e.enemies,boxes:d});if(Me.kind==="again"&&de.interactPressed){Ee();return}let D=Me.kind==="finish"&&Ld.has(pe.state),E=!!de.objectivePressed||S!=="pad"&&!!de.interactPressed;if(D&&E)He(Me.target,De.finishTime,"stomp")&&s.bump(.6);else if(de.objectivePressed&&Ld.has(pe.state)){let se=u.objective?u.objective():null;Wb({finishTarget:D,objective:se})==="look"&&u.lookAt&&u.lookAt(se)}Me.kind==="reviveTobble"&&de.interactHeld&&Ld.has(pe.state)&&pe.reviveTobble(J.pos);let V=pe.state==="reviveTobble";V&&(ee=K0(pe.stateTime/Math.max(P0(),.001)));let oe=R,ne=Hb({equipped:q,aimHeld:de.aimHeld,firePressed:de.firePressed,grenadeHeld:de.grenadeHeld,wasArmed:oe});if(P=ne.aiming,R=ne.aiming&&pe.grenadeAim,ne.throwNow&&(q||oe)&&(qe(),k.equipped()&&i.count<=0&&k.step({count:0})),R&&i.count>0){Rd(pe,_,H.combat,y),q0(_,M,Ne,g);let se=Ib(y,g,d,Ne,m);j={count:se.count,land:se.land,show:!0}}Ke();let ve=Ld.has(pe.state),Re=$0.has(pe.state)&&L<=0;W=I3({device:S,grenadeHeld:R&&i.count>0,equipped:k.equipped()&&i.count>0,interact:ve?Me:null,reviving:V,revving:pe.state==="rev",bashTarget:$0.has(pe.state)&&pe.bashReadyAt<=pe.clock&&!!lc("bash",pe.pos,_,e.enemies,d),cutterNear:Re&&ge(),regretInHand:Te,holdFrac:ee})}function fe(){t.state==="rev"&&(t.rev(!1),T=!0)}function Ae(Z,de){let pe=null;for(let De=0;De<3;De++){Rd(t,_,H.combat,y);let Ne=Math.atan2(Z-y[0],de-y[2]);if(_=Ne,pe=kb(y,[Z,H.grenade.ballRadius,de],Ne),pe===null)return!1}return s.yaw=_,s.pitch=pe,!0}return{step:ye,reset:Pe,onAction:Ue,onPlayerHit:fe,aimThrow:Ae,prompt:()=>W,arc:()=>({count:j.count,land:j.land,show:j.show}),busy:()=>L>0,armed:()=>R&&i.count>0,handKb:()=>(R||k.equipped())&&i.count>0,equipped:()=>k.equipped(),grenadeIntent:()=>P,status:()=>({revving:t.state==="rev",grinding:!!w&&w.kind==="cut"&&t.state==="execute"}),giveUpFrac:()=>l.downed?ee:null,execution:()=>w?{id:w.e.id,kind:w.kind}:null}}function $b(t=H.health){let e=-1,n=0,i=0,s=!1,r={hp:t.max,downed:!1,downT:0,sinceHit:0,fraction(){return t.max>0?Math.max(0,Math.min(1,r.hp/t.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,n=0,t.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=t.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,t.reviveHealth*t.max),r.sinceHit=0,e=-1,n=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&t.standInRevive>0&&(i+=o,i>=t.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<t.max&&r.sinceHit>=t.regenDelay&&(e<0&&(e=r.hp,n=0),n+=Math.min(o,r.sinceHit-t.regenDelay),r.hp=t.regenTime>0&&n<t.regenTime?e+(t.max-e)*n/t.regenTime:t.max),r.hp>=t.max&&(r.hp=t.max,e=-1),null)},reset(){r.hp=t.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,n=0,i=0,s=!1}};return r}var L3=new Set(["cover","coverSlide","coverSwap"]),k3=[],D3=j0(),N3=j0(),kd=[null];function j0(){return{alive:!0,shapes:{head:{c:[0,0,0],r:vt.head.r},body:{a:[0,0,0],b:[0,0,0],r:vt.body.r}}}}function Kb(t){return L3.has(t.state)?Gs(t):null}function Z0(t,e,n,i,s){let r=t.shapes;return r.head.r=vt.head.r,r.body.r=vt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+n,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],t}function Dd(t,e=j0(),n=H.combat){let i=Kb(t),s=!!i&&i.kind==="low"&&!(t.cover&&t.cover.pop>=.5);return e.alive=!0,s?Z0(e,t.pos,n.crouchHead,.1,n.crouchBodyTop):Z0(e,t.pos,vt.head.cy,vt.body.ay,vt.body.by)}function Zb(t,e,n,i,s,r=H.combat){let o=Kb(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Gn(t,e,n,i,k3);if(!a)return kd[0]=Dd(s,D3,r),Gn(t,e,n,i,kd);let l=vt.body.by;return kd[0]=Z0(N3,s.pos,vt.head.cy,l-r.shoulderDrop,l),Gn(t,e,n,i,kd)}var jb=.9;function oo(t,e,n,i){return Ci(t,[e[0],jb,e[1]],[n[0],jb,n[1]],i)===1}var cc=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function Jb(t,e,{radius:n,linkMax:i}){let s=t.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)cc(s[o],s[a])<=i&&oo(e,s[o],s[a],n)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function O3(t,e,n,i,s){let{nodes:r,links:o}=t,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let g of n)h[g]=!0;let d=[];for(let g of e)a[g]=cc(i,r[g]),d.push(g);let u=g=>a[g]+cc(r[g],s),f=-1,m=1/0;for(;d.length;){let g=0;for(let v=1;v<d.length;v++){let _=d[v],M=d[g],S=u(_),T=u(M);(S<T-1e-12||Math.abs(S-T)<=1e-12&&_<M)&&(g=v)}let p=d.splice(g,1)[0];if(!c[p]){if(u(p)>=m)break;if(c[p]=!0,h[p]){let v=a[p]+cc(r[p],s);(v<m-1e-12||Math.abs(v-m)<=1e-12&&p<f)&&(f=p,m=v)}for(let v of o[p]){if(c[v])continue;let _=a[p]+cc(r[p],r[v]);_<a[v]-1e-12&&(a[v]=_,l[v]=p,d.push(v))}}}if(f<0)return null;let y=[];for(let g=f;g>=0;g=l[g])y.push(g);return y.reverse()}function ao(t,e,n,i,s){if(oo(e,n,i,s))return[[i[0],i[1]]];let{nodes:r}=t,o=[],a=[];if(r.forEach((u,f)=>{oo(e,n,u,s)&&o.push(f),oo(e,u,i,s)&&a.push(f)}),!o.length||!a.length)return null;let l=O3(t,o,a,n,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=n;for(let u=0;u<c.length;u++){let f=c[u+1];f&&oo(e,d,f,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var Q0=new Set(["executed","unused","dead"]),Qb=1.3,Er=1e-9,e1=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]),Bd=(t=H)=>t.associate.radius*t.trainer.scaleW,t1=(t=H)=>t.associate.height*t.trainer.scaleH;function qi(t,e){t.state=e,t.stateT=0}function em(t,e=H){return t.kind="trainer",t.health=e.trainer.health,t.strikeAt=-1,t.windupLen=0,t.struckAt=-1/0,t.retargetT=0,t.repathT=0,t.forcePathT=0,t.stuckCount=0,t.target="player",t.path=[],t.pathI=0,t.point=null,t.pop=0,t.blind=0,t.role="hold",t}function n1(t,e=H.combat,n=H){let[i,s,r]=t.pos,o=t.shapes,a=n.trainer.scaleW,l=n.trainer.scaleH;return o.head.r=vt.head.r*a+e.hitPad,o.body.r=vt.body.r*a+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+vt.head.cy*l,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+vt.body.ay*l,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+vt.body.by*l,o.body.b[2]=r,o}var tm=t=>t.tobble&&!t.tobble.downed?t.tobble:null,i1=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,F3=(t,e)=>t.target==="tobble"?!tm(e):e.player.downed;function s1(t,e,n){let i=e.player,s=tm(e);return i.downed?s?"tobble":null:s&&e1(t.pos,s.pos)<e1(t.pos,i.pos)*n.preferDoc?"tobble":"player"}function r1(t,e,n){e.events.push({type:"bark",id:t.id,key:n})}function hc(t,e,n,i){let s=s1(t,e,n);if(!s){qi(t,"idle");return}t.target=s,t.retargetT=n.retargetTime,t.repathT=0,t.path=[],t.pathI=0,qi(t,"run"),i&&e.rand()<n.barkChance&&r1(t,e,"trainerCharge")}function U3(t,e,n,i){i[0]=i[1]=0;let s=n.avoidRadius;if(!(s>0))return i;let r=(a,l,c)=>{let h=t.pos[0]-a,d=t.pos[2]-l,u=Math.hypot(h,d);if(u>=s||u<1e-6)return;let f=(s-u)/s*c/u;i[0]+=h*f,i[1]+=d*f};for(let a of e.others||[])a!==t&&a.alive&&a.state!=="unused"&&a.state!=="executed"&&a.state!=="dead"&&r(a.pos[0],a.pos[2],1);t.target!=="player"&&!e.player.downed&&r(e.player.pos[0],e.player.pos[2],1);let o=tm(e);return o&&t.target!=="tobble"&&r(o.pos[0],o.pos[2],1),i}var J0=[0,0],Nd=[0,0],Od=[0,0],Fd=[0,0,0],Ud=[0,0,0];function B3(t,e,n,i){return Math.hypot(i[0]-t.pos[0],i[2]-t.pos[2])>n.swingRange?!1:(Fd[0]=t.pos[0],Fd[1]=t.pos[1]+Qb,Fd[2]=t.pos[2],Ud[0]=i[0],Ud[1]=t.pos[1]+Qb,Ud[2]=i[2],un(e.boxes,Fd,Ud))}function z3(t,e,n){let i=e.now+n.windup,s=(e.others||[]).filter(r=>r!==t&&r.kind==="trainer"&&r.alive);for(let r=0;r<=s.length;r++){let o=!1;for(let a of s)for(let l of[a.struckAt,a.state==="windup"?a.strikeAt:-1/0])Number.isFinite(l)&&Math.abs(i-l)<n.swingGap-Er&&(i=l+n.swingGap,o=!0);if(!o)break}t.strikeAt=i,t.windupLen=Math.max(n.windup,i-e.now),qi(t,"windup"),e.events.push({type:"telegraph",id:t.id,kind:"trainer",time:t.windupLen}),r1(t,e,"trainerWindup")}function H3(t,e,n,i,s){if(t.retargetT-=i,t.repathT-=i,t.forcePathT-=i,t.retargetT<=0||F3(t,e)){let g=s1(t,e,n);if(!g){qi(t,"idle");return}t.target=g,t.retargetT=n.retargetTime}let r=i1(t,e);if(B3(t,e,n,r)){z3(t,e,n);return}let o=Bd(s),a=t1(s);Nd[0]=t.pos[0],Nd[1]=t.pos[2],Od[0]=r[0],Od[1]=r[2];let l=r[0],c=r[2];if(t.forcePathT>0||!oo(e.boxes,Nd,Od,o*.9)){for((t.repathT<=0||!t.path.length)&&(t.path=ao(e.graph,e.boxes,Nd,Od,o)||[[r[0],r[2]]],t.pathI=0,t.repathT=n.repathTime);t.pathI<t.path.length-1&&Math.hypot(t.path[t.pathI][0]-t.pos[0],t.path[t.pathI][1]-t.pos[2])<.35;)t.pathI++;l=t.path[t.pathI][0],c=t.path[t.pathI][1]}else t.path.length=0;let h=l-t.pos[0],d=c-t.pos[2],u=Math.hypot(h,d)||1;h/=u,d/=u,U3(t,e,n,J0),h+=J0[0]*n.avoidWeight,d+=J0[1]*n.avoidWeight;let f=Math.hypot(h,d)||1;h/=f,d/=f,t.yaw=qt(t.yaw,Math.atan2(h,d),n.turnRate*i);let m=n.runSpeed*i,y=zn(e.boxes,t.pos,[h*m,0,d*m],o,a);t.pos[0]=y.pos[0],t.pos[2]=y.pos[2],t.stuckT+=i,t.stuckT>=n.stuckTime&&(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<n.runSpeed*n.stuckTime*.25&&(t.forcePathT=1,t.repathT=0,t.stuckCount++),t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2])}function G3(t,e,n,i){let s=i1(t,e);if(t.stateT<t.windupLen-n.lockTime){let r=s[0]-t.pos[0],o=s[2]-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=qt(t.yaw,Math.atan2(r,o),n.turnRate*i))}if(!(t.stateT<t.windupLen-Er)){for(let r of e.others||[])if(r!==t&&r.kind==="trainer"&&e.now-r.struckAt<n.swingGap-Er)return;t.struckAt=e.now,t.strikeAt=-1,qi(t,"swing"),e.events.push({type:"trainerSwing",id:t.id,from:[t.pos[0],t.pos[1],t.pos[2]],yaw:t.yaw,reach:n.swingRange+n.swingSlack,arc:n.swingArc,target:t.target})}}function V3(t,e,n,i,s){let r=i.associate,o=Math.max(r.diveTime,.001),a=Math.max(t.stateT-s,r.diveReaction),l=Math.min(t.stateT,r.diveReaction+o);if(l>a){let c=r.diveDistance*(l-a)/o,h=zn(e.boxes,t.pos,[t.diveDir[0]*c,0,t.diveDir[1]*c],Bd(i),t1(i));t.pos[0]=h.pos[0],t.pos[2]=h.pos[2]}t.stateT>=r.diveReaction+o-Er&&hc(t,e,n,!1)}function o1(t,e,n){let i=e.tuning||H,s=i.trainer;switch(t.state){case"idle":e.started&&hc(t,e,s,!0);break;case"spawn":t.stateT>=i.pad.riseTime-Er&&hc(t,e,s,!0);break;case"run":H3(t,e,s,n,i);break;case"windup":G3(t,e,s,n);break;case"swing":t.stateT>=s.swingTime-Er&&qi(t,"recover");break;case"recover":t.stateT>=s.recover-Er&&hc(t,e,s,!1);break;case"stagger":t.stateT>=s.staggerTime-Er&&hc(t,e,s,!1);break;case"dive":V3(t,e,s,i,n);break;default:break}}function a1(t){return!t.alive||Q0.has(t.state)?!1:(t.strikeAt=-1,qi(t,"stagger"),!0)}function l1(t,e){if(!t.alive||Q0.has(t.state)||t.state==="dive")return!1;t.strikeAt=-1,t.path=[],t.pathI=0;let n=t.pos[0]-e[0],i=t.pos[2]-e[2],s=Math.hypot(n,i);return s<1e-6?(n=Math.sin(t.yaw),i=Math.cos(t.yaw)):(n/=s,i/=s),t.diveDir[0]=n,t.diveDir[1]=i,t.yaw=Math.atan2(n,i),qi(t,"dive"),!0}function c1(t){return!t.alive||Q0.has(t.state)||t.state==="dive"?!1:(t.strikeAt=-1,t.wasDowned=!1,qi(t,"executed"),!0)}function h1(t){return!t.alive||t.state!=="executed"?!1:(qi(t,"recover"),!0)}function u1(t,e,n){return t.alive=!1,t.strikeAt=-1,t.pop=0,t.blind=0,qi(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),e.events.push({type:"bark",id:t.id,key:"trainerDeath"}),"kill"}function d1(t,e,n="execute"){return!t.alive||t.state!=="executed"?null:(t.health=0,u1(t,e,n))}function f1(t,e,n,i="body"){return!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:(t.health-=e,t.health<=0?(t.health=0,u1(t,n,i)):"hit")}var co=1e-9,m1=8,W3=t=>Math.max(0,Math.min(1,t));var g1=(t=H)=>t.associate.radius*t.boss.scale;function vs(t,e){t.state=e,t.stateT=0}var lo=(t,e,n,i=!0)=>e.events.push(i?{type:"bark",id:t.id,key:n,force:!0}:{type:"bark",id:t.id,key:n}),v1=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function x1(t,e=H){return t.kind="boss",t.health=e.boss.health,t.phase=1,t.invuln=!1,t.spot=0,t.nextSpot=0,t.shiftPending=!1,t.shiftT=1,t.shiftFrom=[t.start[0],t.start[2]],t.sinceLob=0,t.offers=0,t.saunasOpen=!1,t.lobTo=[0,0,0],t.lobSent=!1,t.wait=0,t.pop=0,t.blind=0,t.role="hold",t.point=null,t.path=[],t.pathI=0,t.target="player",t.shots=0,t.bursts=0,t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t}function y1(t,e=H.combat,n=H){let[i,s,r]=t.pos,o=t.shapes,a=n.boss,l=a.scale,c=a.scale*(a.crouchY+(1-a.crouchY)*W3(t.pop));return o.head.r=vt.head.r*l+e.hitPad,o.body.r=vt.body.r*l+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+vt.head.cy*c,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+vt.body.ay*c,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+vt.body.by*c,o.body.b[2]=r,o}function b1(t,e,n){let i=e.bossLevel.spots[t.spot];t.pos[0]=i.hide[0]+(i.pop[0]-i.hide[0])*n,t.pos[2]=i.hide[1]+(i.pop[1]-i.hide[1])*n}function dc(t,e,n,i){let s=e-t.pos[0],r=n-t.pos[2];Math.hypot(s,r)>1e-6&&(t.yaw=qt(t.yaw,Math.atan2(s,r),m1*i))}var nm=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,_1=(t,e)=>t.target==="tobble"?!v1(e):e.player.downed,uc=[0,0,0];function X3(t,e,n){let i=v1(e),s=e.player,r=e.bossLevel.spots[t.shiftPending?t.nextSpot:t.spot];return uc[0]=r.pop[0],uc[1]=1.49*n.scale,uc[2]=r.pop[1],!s.downed&&un(e.boxes,uc,s.chest)?"player":i&&un(e.boxes,uc,i.chest)?"tobble":s.downed?null:"player"}function im(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var ya=t=>t.phase===3,M1=(t,e)=>e.popTime+(ya(t)?e.fastTelegraph:e.telegraphTime),p1=(t,e)=>ya(t)?e.fastBurstTime:e.burstTime,Y3=(t,e)=>ya(t)?e.fastRate:e.rate,q3=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function sm(t,e,n){vs(t,"tucked");let i=ya(t)?n.fastWaitMin:n.coverWaitMin,s=ya(t)?n.fastWaitMax:n.coverWaitMax;t.wait=i+Math.max(0,s-i)*e.rand()}function $3(t,e,n,i){if(t.pop>0?(t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001)),b1(t,e,t.pop)):t.shiftPending&&(t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.spot=t.nextSpot,t.shiftPending=!1,t.shiftT=0),t.pop<=0&&t.shiftT<1){t.shiftT=Math.min(1,t.shiftT+i/Math.max(n.shiftTime,.001));let r=e.bossLevel.spots[t.spot].hide;t.pos[0]=t.shiftFrom[0]+(r[0]-t.shiftFrom[0])*t.shiftT,t.pos[2]=t.shiftFrom[1]+(r[1]-t.shiftFrom[1])*t.shiftT}if(dc(t,e.player.pos[0],e.player.pos[2],i),t.stateT<t.wait||t.pop>0||t.shiftT<1)return;let s=X3(t,e,n);if(s)if(t.target=s,t.shots=0,t.phase===1&&t.sinceLob>=n.lobEvery){let r=nm(t,e);t.lobTo[0]=r[0],t.lobTo[1]=0,t.lobTo[2]=r[2],t.lobSent=!1,vs(t,"lobWindup"),e.events.push({type:"telegraph",id:t.id,kind:"lob",time:n.popTime+n.lobWindup})}else vs(t,"telegraph"),im(t,e,n,i,!0),e.events.push({type:"telegraph",id:t.id,kind:"boss",time:M1(t,n)})}function zd(t,e,n,i){i&&(t.bursts++,t.sinceLob++,K3(t,e,n)),t.nextSpot=1-t.spot,t.shiftPending=!0,sm(t,e,n)}function K3(t,e,n){!ya(t)||t.offers>=3||(t.offers++,lo(t,e,"bossOffer"),t.offers===3&&(lo(t,e,"bossOfferTobble"),lo(t,e,"bossOfferDoc")))}function Hd(t,e,n,i){t.pop=Math.min(1,t.pop+i/Math.max(n.popTime,.001)),b1(t,e,t.pop)}function Z3(t,e,n,i){Hd(t,e,n,i);let s=nm(t,e);if(dc(t,s[0],s[2],i),im(t,e,n,i,!1),_1(t,e)){zd(t,e,n,!1);return}t.stateT>=M1(t,n)-co&&(vs(t,"burst"),t.shots=0)}function j3(t,e,n,i,s){Hd(t,e,n,i);let r=nm(t,e);if(dc(t,r[0],r[2],i),im(t,e,n,i,!1),_1(t,e)){zd(t,e,n,!0);return}let o=t.muzzle,a=e.player;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp*n.scale,o[2]=t.pos[2];let l=q3(t.stateT,Y3(t,n),p1(t,n)),c=t.target==="tobble"?0:Math.min(1,a.speed/s.move.sprint);for(;t.shots<l;){t.shots++;let h=t.aim[0]-o[0],d=t.aim[1]-o[1],u=t.aim[2]-o[2],f=Math.hypot(h,d,u)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[h/f,d/f,u/f],accurate:!0,target:t.target,spread:n.spread+s.associate.moveSpread*c,damage:n.damage})}t.stateT>=p1(t,n)-co&&zd(t,e,n,!0)}function J3(t,e,n,i){if(Hd(t,e,n,i),dc(t,t.lobTo[0],t.lobTo[2],i),t.stateT<n.popTime+n.lobWindup-co)return;let s=t.muzzle;s[0]=t.pos[0],s[1]=t.pos[1]+n.muzzleUp*n.scale,s[2]=t.pos[2],t.lobSent=!0,e.events.push({type:"bossLob",id:t.id,from:[s[0],s[1],s[2]],to:[t.lobTo[0],0,t.lobTo[2]],flight:n.lobFlight,target:t.target}),t.sinceLob=0,vs(t,"lobRecover")}function Q3(t,e,n,i){Hd(t,e,n,i),t.stateT>=n.lobRecover-co&&zd(t,e,n,!1)}function w1(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2],a=Math.hypot(r,o),l=i*s;return a<=l+co?(t.pos[0]=e,t.pos[2]=n,!0):(t.pos[0]+=r/a*l,t.pos[2]+=o/a*l,t.yaw=qt(t.yaw,Math.atan2(r,o),m1*s),!1)}function eP(t,e,n,i){t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001));let s=e.bossLevel.deskHide;w1(t,s[0],s[1],n.retreatSpeed,i)&&t.pop<=0&&(vs(t,"hiding"),t.saunasOpen=!0,e.events.push({type:"bossSaunas",id:t.id}))}function tP(t,e,n,i){dc(t,e.player.pos[0],e.player.pos[2],i),!(t.stateT<n.minHide-co||!(e.saunasDone&&e.saunasDone()))&&(t.phase=3,t.invuln=!1,t.spot=e.player.pos[0]<0?0:1,t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.shiftT=0,t.shiftPending=!1,vs(t,"return"),e.events.push({type:"bossPhase",id:t.id,phase:3}),lo(t,e,"bossReturn"))}function nP(t,e,n,i){let s=e.bossLevel.spots[t.spot].hide;w1(t,s[0],s[1],n.returnSpeed,i)&&(t.shiftT=1,sm(t,e,n))}function S1(t,e,n){let i=e.tuning||H,s=i.boss;switch(t.state){case"idle":e.started&&(lo(t,e,"bossIntro"),sm(t,e,s));break;case"tucked":$3(t,e,s,n);break;case"telegraph":Z3(t,e,s,n);break;case"burst":j3(t,e,s,n,i);break;case"lobWindup":J3(t,e,s,n);break;case"lobRecover":Q3(t,e,s,n);break;case"retreat":eP(t,e,s,n);break;case"hiding":tP(t,e,s,n);break;case"return":nP(t,e,s,n);break;default:break}}function iP(t,e,n){return t.alive=!1,t.pop=0,t.invuln=!1,vs(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n,boss:!0}),lo(t,e,"bossDeath"),"kill"}function T1(t,e,n,i="body"){if(!t.alive||!(e>0)||t.state==="unused")return null;if(t.invuln)return"immune";let s=n.tuning||H,r=s.boss;if(t.health-=i==="head"?e*r.headMult:e,t.phase===1){let o=r.phase2At*r.health;return t.health<=o+co&&(t.health=o,t.phase=2,t.invuln=!0,t.lobSent=!0,vs(t,"retreat"),n.events.push({type:"bossPhase",id:t.id,phase:2}),lo(t,n,"bossTeam")),"hit"}return t.health<=0?(t.health=0,iP(t,n,i)):"hit"}function rm(t){t.phase=3,t.invuln=!1,t.health=1,(t.state==="retreat"||t.state==="hiding")&&(vs(t,"tucked"),t.wait=0,t.pop=0)}var sP=.25,Vd=new Set(["executed","unused","dead"]),rP=new Set(["cover","suppress","reload"]),Ar={r:.25,y:.25,back:.2,front:.6},oP=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),aP=new Set(["telegraph","burst","suppress"]),cm=t=>Math.max(0,Math.min(1,t)),xs=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),E1=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function hm(t,e=H.associate,n=H){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=Math.PI,t.state="idle",t.stateT=0,t.health=e.health,t.alive=!0,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.aim[0]=t.aim[1]=t.aim[2]=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckRef[0]=t.start[0],t.stuckRef[1]=t.start[2],t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.diveDir[0]=t.diveDir[1]=0,t.divePoint=null,t.claimed=!1,t.diedAt=-1/0,t.wasDowned=!1,t.kind=t.startKind,t.kind==="trainer"?em(t,n):t.kind==="boss"&&x1(t,n),ba(t,n.combat,n),t}function um(t){return t.alive=!1,t.state="unused",t.stateT=0,t.health=0,t.pos[1]=t.prevPos[1]=-50,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.helping=null,t.claimed=!1,t.wasDowned=!1,t.kind="associate",ba(t),t}function Wd(t,e,n,i="associate"){let s=n.tuning||H,r=s.associate;for(let a=0;a<3;a++)t.pos[a]=e[a],t.prevPos[a]=e[a];let o=n.player;return t.yaw=t.prevYaw=o?Math.atan2(o.pos[0]-e[0],o.pos[2]-e[2]):Math.PI,t.state="spawn",t.stateT=0,t.health=r.health,t.alive=!0,t.claimed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.wasDowned=!1,t.diedAt=-1/0,t.divePoint=null,t.kind=i,i==="trainer"&&em(t,s),ba(t,s.combat,s),t}function dm({id:t,pos:e,kind:n="associate"},i=H.associate,s=H){let r={id:t,kind:n,startKind:n,strikeAt:-1,windupLen:0,struckAt:-1/0,retargetT:0,repathT:0,forcePathT:0,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:vt.head.r},body:{a:[0,0,0],b:[0,0,0],r:vt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return hm(r,i,s)}function ba(t,e=H.combat,n=H){if(t.kind==="trainer")return n1(t,e,n);if(t.kind==="boss")return y1(t,e,n);let[i,s,r]=t.pos,o=t.shapes;if(t.state==="downed"){let l=Math.sin(t.yaw),c=Math.cos(t.yaw);return o.body.r=Ar.r,o.head.r=vt.head.r,o.body.a[0]=i-l*Ar.back,o.body.a[1]=s+Ar.y,o.body.a[2]=r-c*Ar.back,o.body.b[0]=i+l*Ar.front,o.body.b[1]=s+Ar.y,o.body.b[2]=r+c*Ar.front,o.head.c[0]=o.body.b[0],o.head.c[1]=s+Ar.y,o.head.c[2]=o.body.b[2],o}let a=oP.has(t.state)&&t.point&&t.point.kind==="low"&&t.pop<.5;return o.head.r=vt.head.r+e.hitPad,o.body.r=vt.body.r+e.hitPad,o.head.c[0]=i,o.head.c[2]=r,o.body.a[0]=i,o.body.a[2]=r,o.body.b[0]=i,o.body.b[2]=r,a?(o.head.c[1]=s+e.crouchHead-e.hitPad,o.body.a[1]=s+.1,o.body.b[1]=s+e.crouchBodyTop):(o.head.c[1]=s+vt.head.cy,o.body.a[1]=s+vt.body.ay,o.body.b[1]=s+vt.body.by),o}function Rn(t,e){t.state=e,t.stateT=0}function ys(t,e,n){e=cm(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var Rr=(t,e)=>e>0?t/e:1;function fc(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=qt(t.yaw,Math.atan2(r,o),i.turnRate*s))}function A1(t,e,n){let i=t.point.normal;t.yaw=qt(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function bs(t,e){e.tokens.holds(t.id)&&e.tokens.release(t.id,e.now,e.director)}function fm(t,e){let n=e.player.pos;return t.chest[0]=n[0],t.chest[1]=n[1]+1.2,t.chest[2]=n[2],t.chest}function Xd(t,e){let n=e.tuning||H,i=n.associate,s=e.director||n.director,r=e.player,o=[r.pos[0],r.pos[2]],a=fm(t,e),l=t.point,c=xs(l?l.pos:[t.pos[0],t.pos[2]],o),h=t.role,d=!!l&&(t.mustMove||h!=="hold"),u=[t.pos[0],t.pos[2]],f=Math.cos(s.flankAngle*Math.PI/180),m=Math.cos(s.flankMaxAngle*Math.PI/180),y=0,g=0;if(r.coverNormal)y=-r.coverNormal[0],g=-r.coverNormal[1];else{let S=0;for(let T of e.others||[])T.alive&&(y+=T.pos[0],g+=T.pos[2],S++);S?(y=y/S-o[0],g=g/S-o[1]):(y=t.pos[0]-o[0],g=t.pos[2]-o[1])}let p=Math.hypot(y,g)||1;y/=p,g/=p;let v=[];for(let[S,T]of e.reserved)T!==t.id&&v.push(e.points[S].pos);let _=null,M=-1/0;for(let S of e.points){let T=e.reserved.get(S.index);if(T!==void 0&&T!==t.id||d&&S.index===l.index||t.mustMove&&l&&xs(S.pos,l.pos)<2*i.reserveRadius)continue;let x=xs(S.pos,o);if(x<i.reserveRadius||x<i.minRange||x>i.maxRange)continue;let b=!1;for(let k of v)if(xs(k,S.pos)<i.reserveRadius){b=!0;break}if(b)continue;let C=((S.pos[0]-o[0])*y+(S.pos[1]-o[1])*g)/x;if(h==="flank"?C<m:C<0)continue;let L=0;if(h==="push"){let k=c-x;if(k<2)continue;L=2*k}else if(h==="flank"){if(!r.coverNormal||C>f)continue;L=10}let R=Cd(S,a,e.boxes,n);if(!R.protected||!R.canShoot)continue;let w=-xs(u,S.pos)-.5*Math.abs(x-i.preferRange)+L;w>M+1e-9&&(M=w,_=S)}return _?{point:_,score:M}:null}function lP(t,e){let n=Xd(t,e);return n?n.point:null}function om(t,e,n){let i=e.tuning||H,s=[t.pos[0],t.pos[2]],r=fm(t,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==t.id)continue;let h=xs(s,l.pos);h>=a||n&&!Cd(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function Ws(t,e,n){Rn(t,"cover"),t.blind=0,t.wantSuppress=null,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function Mi(t,e,n){bs(t,e),ys(t,0,n),t.blind=0;let i=t.stuckCount>=3?om(t,e,!1):lP(t,e);if(!i){if(t.mustMove=!1,t.role!=="hold"&&(t.role="hold"),t.point&&xs(t.point.pos,[t.pos[0],t.pos[2]])<=.5){Ws(t,e,n);return}if(i=om(t,e,!0)||om(t,e,!1),!i){Ws(t,e,n);return}}if(t.point&&t.point.index!==i.index&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),e.reserved.set(i.index,t.id),t.point=i,t.mustMove=!1,Math.hypot(i.pos[0]-t.pos[0],i.pos[1]-t.pos[2])<=n.arriveDist){R1(t,e,n);return}let s=t.stuckCount>=3?null:ao(e.graph,e.boxes,[t.pos[0],t.pos[2]],i.pos,n.radius);t.path=s||[[i.pos[0],i.pos[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],Rn(t,"run")}function R1(t,e,n){if(t.role==="revive"){Rn(t,"kneel");return}let i=t.point;t.pos[0]=i.pos[0],t.pos[2]=i.pos[1],t.role="hold",t.stuckCount=0,t.pointT=0,t.relocT=0,t.mustMove=!1,e.events.push({type:"arrive",id:t.id,point:i}),Ws(t,e,n)}function cP(t,e,n,i){if(t.role==="revive"){let r=k1(t,e);if(!r){Xs(t,e),Mi(t,e,n);return}if(E1(t.pos,r.pos)<=L1){Rn(t,"kneel");return}}let s=n.runSpeed*i;for(let r=0;r<t.path.length+2;r++){let o=t.path[t.pathI],a=t.pathI===t.path.length-1,l=o[0]-t.pos[0],c=o[1]-t.pos[2],h=Math.hypot(l,c);if(h<=n.arriveDist){if(a){R1(t,e,n);return}t.pathI++;continue}fc(t,o[0],o[1],n,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=zn(e.boxes,t.pos,[l/h*d,0,c/h*d],n.radius,n.height),f=Math.hypot(u.pos[0]-t.pos[0],u.pos[2]-t.pos[2]);if(t.pos[0]=u.pos[0],t.pos[2]=u.pos[2],s-=f,f<d*.5)break;f>=h-1e-9}if(t.stuckT+=i,t.stuckT>=n.stuckTime){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05){t.role==="revive"&&Xs(t,e),t.stuckCount++,Mi(t,e,n);return}t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}}function pm(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var C1=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1),mm=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function hP(t,e,n){if(t.point){let i=ro(t.point,(e.tuning||H).associate.popShift);n[0]=i[0],n[2]=i[1]}else n[0]=t.pos[0],n[2]=t.pos[2];return n[1]=1.49,n}var am=[0,0,0];function uP(t,e){let n=mm(e),i=e.player;return n?(hP(t,e,am),!i.downed&&un(e.boxes,am,i.chest)?"player":un(e.boxes,am,n.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var P1=(t,e)=>t.target==="tobble"?!mm(e):e.player.downed,I1=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function dP(t,e,n,i,s){ys(t,t.pop-Rr(s,n.popTime),n),A1(t,n,s);let r=e.player;if(r.downed&&!mm(e))return;if(!r.downed){if(t.pointT+=s,t.role!=="hold"){Mi(t,e,n);return}if(t.relocT+=s,t.relocT>=n.relocateCheck){t.relocT=0;let a=Cd(t.point,fm(t,e),e.boxes,e.tuning||H);if(!a.protected||!a.canShoot||xs(t.point.pos,[r.pos[0],r.pos[2]])<n.reserveRadius){t.mustMove=!0,Mi(t,e,n);return}}if(t.pointT>=n.relocateAfter){t.mustMove=!0,t.pointT=0,Mi(t,e,n);return}}if(t.stateT<t.wait)return;if(t.wantSuppress===null&&(t.wantSuppress=e.rand()<n.suppressChance),t.bursts>=n.magBursts){Rn(t,"reload"),e.events.push({type:"bark",id:t.id,key:"reload"});return}let o=uP(t,e);if(o&&e.tokens.request(t.id,e.now,e.tokenCount,i)){t.target=o,Rn(t,"telegraph"),t.shots=0,pm(t,e,n,s,!0),e.events.push({type:"telegraph",id:t.id});return}t.wantSuppress&&!r.downed&&(Rn(t,"suppress"),t.shots=0)}function lm(t,e,n,i){bs(t,e),i&&t.bursts++,Ws(t,e,n)}function fP(t,e,n,i){ys(t,t.pop+Rr(i,n.popTime),n);let s=I1(t,e);if(fc(t,s[0],s[2],n,i),pm(t,e,n,i,!1),P1(t,e)||!e.tokens.holds(t.id)){lm(t,e,n,!1);return}t.stateT>=n.popTime+n.telegraphTime-1e-9&&(Rn(t,"burst"),t.shots=0)}function pP(t,e,n,i){let s=e.player;ys(t,t.pop+Rr(i,n.popTime),n);let r=I1(t,e);if(fc(t,r[0],r[2],n,i),pm(t,e,n,i,!1),P1(t,e)||!e.tokens.holds(t.id)){lm(t,e,n,!0);return}let o=t.muzzle;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp,o[2]=t.pos[2];let a=C1(t.stateT,n.rate,n.burstTime),l=t.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||H).move.sprint);for(;t.shots<a;){t.shots++;let c=t.aim[0]-o[0],h=t.aim[1]-o[1],d=t.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:t.target,spread:n.spread+n.moveSpread*l})}t.stateT>=n.burstTime-1e-9&&lm(t,e,n,!0)}function mP(t,e,n,i){let s=e.player;if(t.blind=cm(t.blind+Rr(i,n.popTime)),fc(t,s.pos[0],s.pos[2],n,i),s.downed){t.blind=0,Ws(t,e,n);return}let r=t.stateT-n.popTime;if(r<0&&t.blind<1)return;let o=t.point,a=Math.max(0,r),l=t.muzzle;l[0]=t.pos[0],l[2]=t.pos[2],l[1]=t.pos[1]+(o.kind==="low"?o.height+(e.tuning||H).combat.blindLift:n.muzzleUp);let c=C1(a,n.suppressRate,n.suppressTime);for(;t.shots<c;){t.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let m=u,y=-h,g=Math.hypot(m,y);g<1e-6&&(m=1,y=0,g=1),m/=g,y/=g;let p=d*y,v=u*m-h*y,_=-d*m,M=2*Math.PI*e.rand(),S=n.suppressMiss*(1+.5*e.rand()),T=Math.cos(M)*S,x=Math.sin(M)*S,b=s.head[0]+m*T+p*x,C=s.head[1]+v*x,L=s.head[2]+y*T+_*x,R=b-l[0],w=C-l[1],k=L-l[2],P=Math.hypot(R,w,k)||1;e.events.push({type:"enemyShot",id:t.id,from:[l[0],l[1],l[2]],dir:[R/P,w/P,k/P],accurate:!1,spread:n.suppressSpread})}r>=n.suppressTime-1e-9&&(t.blind=0,Ws(t,e,n))}var L1=.8;function k1(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);return n&&n.alive&&n.state==="downed"&&n.helper===t.id?n:null}function Xs(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);n&&n.helper===t.id&&(n.helper=null),t.helping=null,t.role="hold"}function D1(t,e,n){let i=(n.tuning||H).associate;bs(t,n),ys(t,0,i),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.point=null,t.role="revive",t.helping=e.id,e.helper=t.id,t.mustMove=!1;let s=t.pos[0]-e.pos[0],r=t.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=L1){Rn(t,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];t.path=ao(n.graph,n.boxes,[t.pos[0],t.pos[2]],a,i.radius)||[a],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],Rn(t,"run")}function gP(t,e,n,i){let s=k1(t,e);if(!s){Xs(t,e),Mi(t,e,n);return}fc(t,s.pos[0],s.pos[2],n,i),!(t.stateT<n.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,n.reviveHealth*n.health),s.role="hold",s.mustMove=!1,s.bursts=0,Rn(s,"seek"),e.events.push({type:"cloneRevive",id:t.id,target:s.id}),t.helping=null,t.role="hold",Mi(t,e,n))}function vP(t,e,n,i){if(t.stateT>=n.bleedTime-1e-9){t.health=0,Gd(t,e,"bleed");return}if(t.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===t||!c.alive||!rP.has(c.state))continue;let h=E1(t.pos,c.pos);h<o&&(o=h,s=c.pos[0]-t.pos[0],r=c.pos[2]-t.pos[2])}if(o===1/0)s=t.pos[0]-e.player.pos[0],r=t.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),t.yaw=qt(t.yaw,Math.atan2(s,r),n.turnRate*i);let a=n.downedCrawl*i,l=zn(e.boxes,t.pos,[s/o*a,0,r/o*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}function xP(t,e,n){t.point&&e.reserved.get(t.point.index)===t.id&&t.pop<=1e-6&&xs(t.point.pos,[t.pos[0],t.pos[2]])<=.3?Ws(t,e,n):Mi(t,e,n)}function N1(t,e){return t.kind==="trainer"?a1(t):t.kind==="boss"||!t.alive||Vd.has(t.state)||t.state==="downed"?!1:(t.role==="revive"&&Xs(t,e),bs(t,e),t.blind=0,Rn(t,"stagger"),!0)}function O1(t,e,n){if(t.kind==="trainer")return l1(t,e);if(t.kind==="boss"||!t.alive||Vd.has(t.state)||t.state==="downed"||t.state==="dive")return!1;t.role==="revive"&&Xs(t,n),bs(t,n),ys(t,0,(n.tuning||H).associate),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.divePoint=t.point,t.point=null,t.role="hold",t.path=[],t.pathI=0;let i=t.pos[0]-e[0],s=t.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(t.yaw),s=Math.cos(t.yaw)):(i/=r,s/=r),t.diveDir[0]=i,t.diveDir[1]=s,t.yaw=Math.atan2(i,s),Rn(t,"dive"),!0}function yP(t,e,n,i){let s=Math.max(n.diveTime,.001),r=Math.max(t.stateT-i,n.diveReaction),o=Math.min(t.stateT,n.diveReaction+s);if(o>r){let a=n.diveDistance*(o-r)/s,l=zn(e.boxes,t.pos,[t.diveDir[0]*a,0,t.diveDir[1]*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}t.stateT>=n.diveReaction+s-1e-9&&(t.point=t.divePoint,t.divePoint=null,t.mustMove=!0,Mi(t,e,n))}function F1(t,e){return t.kind==="trainer"?c1(t):t.kind==="boss"||!t.alive||Vd.has(t.state)||t.state==="dive"?!1:(t.role==="revive"&&Xs(t,e),bs(t,e),ys(t,0,(e.tuning||H).associate),t.blind=0,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.wasDowned=t.state==="downed",t.point=null,t.role="hold",t.helper=null,t.mustMove=!1,Rn(t,"executed"),!0)}function U1(t){return t.kind==="trainer"?h1(t):!t.alive||t.state!=="executed"?!1:(Rn(t,t.wasDowned?"downed":"flinch"),t.wasDowned=!1,!0)}function B1(t,e,n="execute"){return t.kind==="trainer"?d1(t,e,n):t.kind==="boss"||!t.alive||t.state!=="executed"?null:(t.health=0,Gd(t,e,n))}function Gd(t,e,n){return t.alive=!1,bs(t,e),t.role==="revive"&&Xs(t,e),t.helper=null,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.pop=0,t.blind=0,Rn(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),"kill"}function gm(t,e){return t.kind==="trainer"||t.kind==="boss"||!t.alive||Vd.has(t.state)||t.state==="downed"?null:(bs(t,e),t.role==="revive"&&Xs(t,e),t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.point=null,t.health=1,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.mustMove=!1,Rn(t,"downed"),e.events.push({type:"down",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]]}),e.events.push({type:"bark",id:t.id,key:"cloneDown"}),"down")}function z1(t,e,n){if(!t.alive)return;(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,sP);let i=(e.tuning||H).associate,s=e.director||H.director;if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.kind==="trainer"){o1(t,e,n);return}if(t.kind==="boss"){S1(t,e,n);return}switch(t.state){case"idle":e.started&&Mi(t,e,i);break;case"seek":Mi(t,e,i);break;case"run":cP(t,e,i,n);break;case"cover":dP(t,e,i,s,n);break;case"telegraph":fP(t,e,i,n);break;case"burst":pP(t,e,i,n);break;case"suppress":mP(t,e,i,n);break;case"reload":ys(t,t.pop-Rr(n,i.popTime),i),A1(t,i,n),t.stateT>=i.reloadTime&&(t.bursts=0,Ws(t,e,i));break;case"flinch":ys(t,t.pop-Rr(n,i.popTime),i),t.blind=cm(t.blind-Rr(n,i.popTime)),t.stateT>=i.flinchTime&&(t.point?Ws(t,e,i):Mi(t,e,i));break;case"stagger":ys(t,t.pop-Rr(n,i.popTime),i),t.stateT>=i.staggerTime-1e-9&&xP(t,e,i);break;case"dive":yP(t,e,i,n);break;case"kneel":gP(t,e,i,n);break;case"downed":vP(t,e,i,n);break;case"spawn":t.stateT>=(e.tuning||H).pad.riseTime-1e-9&&Mi(t,e,i);break;default:break}}function H1(t,e,n,i="body"){return t.kind==="trainer"?f1(t,e,n,i):t.kind==="boss"?T1(t,e,n,i):!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:t.state==="downed"?(t.health=0,Gd(t,n,i)):(t.health-=e,t.health<=0?(i==="body"||i==="tobble")&&n.rand()<(n.tuning||H).associate.downChance?gm(t,n):(t.health=0,Gd(t,n,i)):t.role==="revive"?(Xs(t,n),bs(t,n),Rn(t,"flinch"),"hit"):(aP.has(t.state)&&(bs(t,n),Rn(t,"flinch"),t.blind=Math.min(t.blind,1)),"hit"))}function G1(){let t=new Map,e=new Map,n=new Map,i={request(s,r,o,a=H.director){if(t.has(s))return!0;if(r<(n.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(t.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),t.set(s,r),!0)},release(s,r,o=H.director){e.delete(s),t.delete(s)&&n.set(s,r+o.tokenCooldown)},holds(s){return t.has(s)},held(){return[...t.keys()]},expire(s,r=H.director){let o=[];for(let[a,l]of t)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){t.clear(),e.clear(),n.clear()}};return i}function V1(t,e=H){let n=(t.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,openKey:r.openKey,shareKey:r.shareKey,manual:!!r.manual,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(n.map(r=>[r.id,new Set]));return{list:n,step(r,o){let a=e.pad,l=[];for(let c of n){if(c.state==="dormant"){if(c.manual||!o.started||!(o.kills>=(c.openKey&&Number.isFinite(a[c.openKey])?a[c.openKey]:a.openAfterKills)||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of n)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of n)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return n.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of n)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var bP=.25,_P=1.49,MP=.5,uo="tobble",wP=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn","windup","swing","recover"]),Yd=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),jd=t=>Math.max(0,Math.min(1,t)),W1=(t,e)=>e&&e.tuning?e.tuning.tobble:t.cfg,SP=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function ym({pos:t,yaw:e=0},n=H.tobble){let i={id:uo,cfg:n,start:[t[0],t[1],t[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:vt.head.r},body:{a:[0,0,0],b:[0,0,0],r:vt.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return bm(i)}function bm(t){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=t.startYaw,t.state="idle",t.stateT=0,t.hp=t.cfg.health,t.alive=!0,t.downed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.target=null,t.reviveT=0,t.threatT=0,t.lofT=0,t.wait=0,t.shots=0,t.sinceHit=0,t.relocT=0,t.complainT=0,t.stuckT=0,t.stuckCount=0,t.kneeling=!1,t.revGo=!1,t.sideLeft=0,t.speed=0,t.aim[0]=t.aim[1]=t.aim[2]=0,pc(t),t}function pc(t,e=H.combat){let n=t.cfg,i=n.scale,[s,r,o]=t.pos,a=t.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,t.downed){let c=Math.sin(t.yaw),h=Math.cos(t.yaw);a.body.r=.25*i,a.head.r=vt.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],t.chest[0]=s,t.chest[1]=r+.25*i,t.chest[2]=o}else if(t.point&&t.point.kind==="low"&&t.pop<.5)a.head.r=(vt.head.r+l)*i,a.body.r=(vt.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,t.chest[0]=s,t.chest[1]=r+e.crouchBodyTop*i*.9,t.chest[2]=o;else{let c=t.point?n.popLift*jd(t.pop):0;a.head.r=(vt.head.r+l)*i,a.body.r=(vt.body.r+l)*i,a.head.c[1]=r+vt.head.cy*i+c,a.body.a[1]=r+vt.body.ay*i+c,a.body.b[1]=r+vt.body.by*i+c,t.chest[0]=s,t.chest[1]=r+n.height*(1.2/1.8)+c,t.chest[2]=o}return t.head[0]=a.head.c[0],t.head[1]=a.head.c[1],t.head[2]=a.head.c[2],a}function fo(t,e){t.state=e,t.stateT=0}var Jd=(t,e,n=!1)=>t.events.push(n?{type:"bark",id:uo,key:e,force:n}:{type:"bark",id:uo,key:e});function mc(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=qt(t.yaw,Math.atan2(r,o),i.turnRate*s))}function TP(t,e,n){let i=t.point.normal;t.yaw=qt(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function Ma(t,e,n){e=jd(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.tuning.associate.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var _m=(t,e)=>e>0?t/e:1;function gc(t,e){t.point&&e.reserved.get(t.point.index)===uo&&e.reserved.delete(t.point.index),t.point=null}function X1(t,e,n,i){let s=t.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=n-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function EP(t,e,n){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=t.pos[0]-i.lens[0],l=t.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;t.side[0]=-o*c,t.side[1]=r*c,t.sideLeft=n.sidestepDist,gc(t,e),Ma(t,0,e),t.target=null,t.lofT=0,fo(t,"sidestep")}var ho=t=>t.alive&&wP.has(t.state)&&t.state!=="executed",_a=t=>t.state==="downed";function AP(t,e,n,i){return t.point?(ro(t.point,e.tuning.associate.popShift,Ys),i[0]=Ys[0],i[2]=Ys[1]):(i[0]=t.pos[0],i[2]=t.pos[2]),i[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0),i}function Kd(t,e){let n=t.shapes.body;return e[0]=(n.a[0]+n.b[0])/2,e[1]=(n.a[1]+n.b[1])/2,e[2]=(n.a[2]+n.b[2])/2,e}var $i=[0,0,0],vm=[0,0,0],Ys=[0,0];function Mm(t,e,n){return t.point?(ro(t.point,e.tuning.associate.popShift,Ys),n[0]=Ys[0],n[2]=Ys[1]):(n[0]=t.pos[0],n[2]=t.pos[2]),n[1]=_P,n}function Y1(t,e,n){AP(t,e,n,vm);let i=null,s=1/0;for(let r of e.enemies){if(!ho(r)||_a(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);o>=s||o>n.range||un(e.boxes,vm,Kd(r,$i))&&(s=o,i=r)}return i}function q1(t,e,n){let i=null,s=1/0;for(let r of t.enemies){if(!ho(r)||_a(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-n);o<s&&(s=o,i=r)}return i}var Zd=[0,0,0],Cr=[0,0,0],qd=[0,0,0];function $1(t,e,n){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[t.pos[0],t.pos[2]],l=q1(e,t.pos[0],t.pos[2]),c=[];for(let[f,m]of e.reserved)m!==uo&&c.push(e.points[f].pos);let h=(n.followMin+n.followMax)/2,d=null,u=-1/0;for(let f of e.points){let m=e.reserved.get(f.index);if(m!==void 0&&m!==uo)continue;let y=Yd(f.pos,o);if(y<n.followMin||y>n.followMax||y<=n.personalSpace||X1(e,n,f.pos[0],f.pos[1])<n.lofClear)continue;let g=!1;for(let M of c)if(Yd(M,f.pos)<s.reserveRadius){g=!0;break}if(g)continue;let p=!0;for(let M of e.enemies)if(ho(M)&&Yd([M.pos[0],M.pos[2]],f.pos)<s.radius+n.radius+.2){p=!1;break}if(!p)continue;let v=!1;if(l){if(Mm(l,e,Zd),Cr[0]=f.pos[0],Cr[1]=f.kind==="low"?i.combat.crouchHead*n.scale:n.height,Cr[2]=f.pos[1],un(e.boxes,Cr,Zd))continue;ro(f,s.popShift,Ys),qd[0]=Ys[0],qd[1]=n.muzzleUp+n.popLift,qd[2]=Ys[1],v=un(e.boxes,qd,Kd(l,$i))}let _=-Yd(a,f.pos)-.5*Math.abs(y-h)+(v?8:0);_>u+1e-9&&(u=_,d=f)}return d}function RP(t,e,n){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=zn(e.boxes,[s[0],t.pos[1],s[2]],[l,0,c],n.radius,n.height);return[h.pos[0],h.pos[2]]}function K1(t,e,n,i){t.goal[0]=i[0],t.goal[1]=i[1],t.path=t.stuckCount>=3?[[i[0],i[1]]]:ao(e.graph,e.boxes,[t.pos[0],t.pos[2]],i,n.radius)||[[i[0],i[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}function Z1(t,e,n,i,s){let r=s*i,o=.15;for(let a=0;a<t.path.length+2;a++){let l=t.path[t.pathI],c=t.pathI===t.path.length-1,h=l[0]-t.pos[0],d=l[1]-t.pos[2],u=Math.hypot(h,d);if(u<=o){if(c)return"arrived";t.pathI++;continue}mc(t,l[0],l[1],n,i);let f=Math.min(r,u);if(f<=1e-9)break;let m=zn(e.boxes,t.pos,[h/u*f,0,d/u*f],n.radius,n.height),y=Math.hypot(m.pos[0]-t.pos[0],m.pos[2]-t.pos[2]);if(t.pos[0]=m.pos[0],t.pos[2]=m.pos[2],r-=y,y<f*.5)break}if(t.stuckT+=i,t.stuckT>=1){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05)return"stuck";t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}return"moving"}function Pr(t,e,n){let i=e.started?$1(t,e,n):null;t.point&&(!i||i.index!==t.point.index)&&gc(t,e),Ma(t,0,e);let s;if(i?(t.point=i,e.reserved.set(i.index,uo),s=i.pos):s=RP(t,e,n),t.shots=0,t.target=null,Math.hypot(s[0]-t.pos[0],s[1]-t.pos[2])<=.15){j1(t,e,n);return}K1(t,e,n,s),fo(t,"follow")}function j1(t,e,n){if(t.stuckCount=0,t.point&&(t.pos[0]=t.point.pos[0],t.pos[2]=t.point.pos[1]),!e.started&&!t.point){fo(t,"idle");return}xm(t,e,n)}function xm(t,e,n){fo(t,"cover"),t.target=null,t.relocT=0,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function CP(t,e,n,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax){Pr(t,e,n);return}mc(t,s[0],s[2],n,i)}function PP(t,e,n,i){let s=Z1(t,e,n,i,n.runSpeed);s==="arrived"?j1(t,e,n):s==="stuck"&&(t.stuckCount++,gc(t,e),Pr(t,e,n))}function IP(t,e,n,i){Ma(t,t.pop-_m(i,n.popTime),e);let s=e.player.pos;if(t.point?TP(t,n,i):mc(t,s[0],s[2],n,i),t.relocT+=i,t.relocT>=MP){t.relocT=0;let o=Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax;if(t.point){let a=t.point.pos,l=Math.hypot(t.pos[0]-a[0],t.pos[2]-a[1])>.3,c=q1(e,t.pos[0],t.pos[2]),h=!1;if(c){Mm(c,e,Zd);let d=t.point.kind==="low"?e.tuning.combat.crouchHead*n.scale:n.height;Cr[0]=a[0],Cr[1]=d,Cr[2]=a[1],h=un(e.boxes,Cr,Zd)}if(o||l||h){Pr(t,e,n);return}}else if(o||e.started&&$1(t,e,n)){Pr(t,e,n);return}}if(!e.started||t.stateT<t.wait)return;let r=Y1(t,e,n);r&&(t.target=r,t.shots=0,fo(t,"shoot"))}function LP(t,e,n,i){Ma(t,t.pop+_m(i,n.popTime),e);let s=t.target;if((!s||!ho(s)||_a(s)||!un(e.boxes,kP(t,n),Kd(s,$i)))&&(s=t.target=Y1(t,e,n)),!s){xm(t,e,n);return}if(mc(t,s.pos[0],s.pos[2],n,i),t.stateT<n.popTime-1e-9)return;let r=t.muzzle;r[0]=t.pos[0],r[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0)*jd(t.pop),r[2]=t.pos[2];let o=SP(t.stateT-n.popTime,n.rate,n.burstTime);for(;t.shots<o;){t.shots++,Kd(s,$i);let a=$i[0]-r[0],l=$i[1]-r[1],c=$i[2]-r[2],h=Math.hypot(a,l,c)||1,d=ma([a/h,l/h,c/h],n.spread,e.rand,t.scratch),u=Gn(r,d,n.range,e.boxes,e.enemies),f=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:f?f.id:null}),f&&e.hurtRep&&e.hurtRep(f,n.damage),!ho(s)||_a(s))break}(!ho(s)||_a(s))&&(t.target=null),t.stateT>=n.popTime+n.burstTime-1e-9&&xm(t,e,n)}var $d=[0,0,0];function kP(t,e){return $d[0]=t.pos[0],$d[1]=t.pos[1]+e.muzzleUp+(t.point?e.popLift:0)*jd(t.pop),$d[2]=t.pos[2],$d}function DP(t,e,n,i){let s=Math.min(n.runSpeed*i,t.sideLeft);if(s>0){let r=zn(e.boxes,t.pos,[t.side[0]*s,0,t.side[1]*s],n.radius,n.height),o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);t.pos[0]=r.pos[0],t.pos[2]=r.pos[2],t.sideLeft-=o<s*.5?t.sideLeft:o}t.sideLeft<=1e-6&&Pr(t,e,n)}function NP(t){let e=t.player.pos,n=0;$i[0]=e[0],$i[1]=.4,$i[2]=e[2];for(let i of t.enemies)!ho(i)||_a(i)||i.state==="spawn"||un(t.boxes,Mm(i,t,vm),$i)&&n++;return n}function OP(t,e){gc(t,e),Ma(t,0,e),t.target=null,t.revGo=!1,t.threatT=0,t.kneeling=!1,t.reviveT=0,t.path=[],t.pathI=0,t.goal[0]=t.goal[1]=1/0,fo(t,"revive")}function FP(t,e,n,i){let s=e.player.pos;if(!t.revGo)if(t.threatT+=i,Ma(t,t.pop-_m(i,n.popTime),e),NP(e)<=n.reviveMaxThreats||t.threatT>=n.reviveWaitMax-1e-9)t.revGo=!0;else return;if(Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])<=n.reviveRange){t.kneeling||(t.kneeling=!0,t.reviveT=0,e.events.push({type:"tobbleKneel"})),mc(t,s[0],s[2],n,i),t.reviveT+=i,t.reviveT>=n.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&Jd(e,"tobbleRevive",!0),Pr(t,e,n));return}if(t.kneeling=!1,t.reviveT=0,Math.hypot(s[0]-t.goal[0],s[2]-t.goal[1])>n.reviveRange+.4||!t.path.length){let a=t.pos[0]-s[0],l=t.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,n.reviveRange*.8);K1(t,e,n,[s[0]+a*h,s[2]+l*h]),t.goal[0]=s[0],t.goal[1]=s[2]}let o=Z1(t,e,n,i,n.runSpeed);o==="stuck"?(t.stuckCount++,t.path=[]):o==="arrived"&&(t.path=[])}function UP(t,e,n,i){let s=e.player.pos,r=s[0]-t.pos[0],o=s[2]-t.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(t.yaw=qt(t.yaw,Math.atan2(r,o),n.turnRate*i)),a>n.reviveRange&&n.crawlSpeed>0){let l=Math.min(n.crawlSpeed*i,a-n.reviveRange),c=zn(e.boxes,t.pos,[r/a*l,0,o/a*l],n.radius,n.height);t.pos[0]=c.pos[0],t.pos[2]=c.pos[2]}t.complainT+=i,t.complainT>=n.complainEvery-1e-9&&(t.complainT=0,Jd(e,"tobbleComplain"))}function J1(t,e,n){(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,bP);let i=W1(t,e);if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.sinceHit+=n,t.downed){UP(t,e,i,n);return}switch(t.hp<i.health&&t.sinceHit>=i.regenDelay&&(t.hp=Math.min(i.health,t.hp+(i.regenTime>0?i.health/i.regenTime*n:i.health))),e.playerDowned?t.state!=="revive"&&OP(t,e):t.state==="revive"&&Pr(t,e,i),t.state!=="sidestep"&&t.state!=="revive"&&e.aim&&e.aim.active&&X1(e,i,t.pos[0],t.pos[2])<i.lofClear?(t.lofT+=n,t.lofT>=i.sidestepReact-1e-9&&EP(t,e,i)):t.state!=="sidestep"&&(t.lofT=0),t.state){case"idle":CP(t,e,i,n);break;case"follow":PP(t,e,i,n);break;case"cover":IP(t,e,i,n);break;case"shoot":LP(t,e,i,n);break;case"sidestep":DP(t,e,i,n);break;case"revive":FP(t,e,i,n);break;default:break}}function vc(t,e,n){return t.downed||!(e>0)?null:(t.hp-=e,t.sinceHit=0,t.hp>0?"hit":(t.hp=0,t.downed=!0,t.kneeling=!1,t.reviveT=0,t.complainT=0,t.target=null,t.pop=0,gc(t,n),fo(t,"downed"),n.events.push({type:"tobbleDown"}),Jd(n,"tobbleDown",!0),"downed"))}function wm(t,e){if(!t.downed)return!1;let n=W1(t,e);return t.downed=!1,t.hp=Math.max(1,n.reviveHealth*n.health),t.sinceHit=0,t.lofT=0,t.complainT=0,e.events.push({type:"tobbleUp"}),Jd(e,"tobbleUp"),Pr(t,e,n),!0}var Q1=new Set(["cover","coverSlide","coverSwap"]),e_=new Set(["cover","suppress","reload","flinch"]),BP=new Set(["cover","suppress","reload"]),t_=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),n_=8,zP=1,HP=.1,i_=1.3,Sm=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function s_({level:t,boxes:e,edges:n,rand:i,tuning:s=H}){let r=()=>s.associate,o=Ub(n,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=Jb(t.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=G1(),c=Db(s.grenade),h=V1(t,s),d=new Map,u=()=>!!t.tobble&&s.tobble.enabled>0,f=[],m=[],y=t.overlord||null,g=y?[{id:"overlord",kind:"boss",pos:[y.spots[0].hide[0],0,y.spots[0].hide[1]]},...t.associates]:t.associates,p=g.length,v=g.map(O=>dm(O,s.associate,s));for(let O=p;O<n_;O++)v.push(um(dm({id:`r${O+1}`,pos:[0,0,0]},s.associate,s)));let _=()=>Math.max(p,Math.min(n_,Math.round(s.director.maxEnemies))),M=_(),S=Dd({state:"move",pos:[0,0,0],cover:null,scratch:{}}),T={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},x={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:T,now:0,rand:i,tokenCount:0,events:f,tuning:s,director:s.director,others:v,started:!1,aim:void 0,tobble:null,enemies:v,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null,bossLevel:y,saunasDone:()=>h.allDone()},b={enemies:v,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null,boss:v.find(O=>O.kind==="boss")||null,lobMarkers:[]},C=!1,L=0,R=[0,0],w=!1,k=!1;function P(){d.clear();for(let O of v.slice(0,p)){if(O.kind!=="associate")continue;let K=null,J=1/0;for(let Me of o){let D=Math.hypot(Me.pos[0]-O.pos[0],Me.pos[1]-O.pos[2]);D<J&&(J=D,K=Me)}O.point=K,K&&d.set(K.index,O.id)}}P(),b.tobble=x.tobble=u()?ym(t.tobble,s.tobble):null;let I=()=>b.tobble&&!b.tobble.downed,F=(O,K,J=f,Me=!1)=>J.push(Me?{type:"bark",id:O,key:K,force:Me}:{type:"bark",id:O,key:K}),B=()=>v.find(O=>O.alive)||v[0];function $(){for(let O of l.held())l.release(O,b.now,s.director)}function X(O){b.started=!0,b.startT=b.now,F(B().id,"lockdown",O)}function j(O){O.diedAt=b.now,b.kills++,h.noteDeath(O.id)}function W(O,K,J,Me){!b.started&&O.alive&&O.state!=="unused"&&K>0&&X(Me),x.events=Me;let D=H1(O,K,x,J);return x.events=f,D==="kill"&&j(O),D==="kill"&&J==="head"&&I()&&++L%3===0&&F("tobble","tobbleHeadshot",Me),D==="kill"&&O.kind==="boss"&&ee(Me),D}function ee(O){for(let K of v)K.alive&&K.kind!=="boss"&&W(K,1e6,"blast",O);for(let K of h.list)(K.state==="dormant"||K.state==="open")&&(K.state="closed")}x.hurtRep=(O,K)=>W(O,K,"tobble",f),x.reviveDoc=()=>!x.health||!x.health.downed?!1:(x.health.revive(),x.m.revive(),T.downed=!1,f.push({type:"revived"}),!0);function Ee(O,K){let J=T,Me=s.combat;J.pos[0]=O.pos[0],J.pos[1]=O.pos[1],J.pos[2]=O.pos[2];let D=Q1.has(O.state)?Gs(O):null;J.exposed=!!(O.cover&&O.cover.exposed);let E=!!D&&D.kind==="low"&&!J.exposed;J.chest[0]=O.pos[0],J.chest[1]=O.pos[1]+(E?.6:1.2),J.chest[2]=O.pos[2];let V=Dd(O,S,Me).shapes.head.c;J.head[0]=V[0],J.head[1]=V[1],J.head[2]=V[2],J.speed=O.speed(),J.coverNormal=D?D.normal:null,J.downed=!!K.downed}function Q(O,K){let J=s.director;if(Q1.has(O.state)?T.exposed||(b.hideT+=K):b.hideT=0,!k||Math.hypot(O.pos[0]-R[0],O.pos[2]-R[1])>J.stayRadius?(R[0]=O.pos[0],R[1]=O.pos[2],k=!0,b.stayT=0):b.stayT+=K,b.hideT>=J.pushAfter&&!v.some(D=>D.alive&&D.role==="push")){let D=v.filter(V=>V.kind==="associate"&&V.alive&&V.role==="hold"&&e_.has(V.state)&&!l.holds(V.id)).sort((V,oe)=>Sm(V.pos,T.pos)-Sm(oe.pos,T.pos)),E=null;for(let V of D){if(V.role="push",Xd(V,x)){E=V;break}V.role="hold"}E?(F(E.id,"push"),b.hideT=0):b.hideT=Math.max(0,J.pushAfter-1)}if(b.stayT>=J.flankAfter&&!v.some(D=>D.alive&&D.role==="flank")){let D=null,E=-1/0;for(let V of v){if(V.kind!=="associate"||!V.alive||V.role!=="hold"||!e_.has(V.state)||l.holds(V.id))continue;V.role="flank";let oe=Xd(V,x);V.role="hold",oe&&oe.score>E&&(E=oe.score,D=V)}D&&(D.role="flank",I()&&F("tobble","tobbleFlank"),F(D.id,"flank")),b.stayT=0}}function re(){let O=r().reviveRange;for(let K of v){if(!K.alive||K.state!=="downed"||K.helper)continue;let J=null,Me=1/0;for(let D of v){if(D.kind!=="associate"||!D.alive||!BP.has(D.state)||D.role!=="hold"||l.holds(D.id))continue;let E=Sm(D.pos,K.pos);E<=O&&E<Me&&(Me=E,J=D)}J&&(D1(J,K,x),F(J.id,"cloneRevive"))}}function _e(){for(let O=0;O<M;O++){let K=v[O];if(!K.claimed&&(K.state==="unused"||K.state==="dead"&&b.now-K.diedAt>=zP-1e-9))return K.claimed=!0,K}return null}function Oe(){let O=h.step(0,{started:b.started,sinceStart:b.now-b.startT,kills:b.kills,freeSlot:_e,now:b.now});for(let K of O){if(f.push(K),K.type==="padOpen"){F(K.id,"padOpen",f,!0),I()&&F("tobble","tobblePad",f,!0);continue}if(K.type!=="padSpawn")continue;let J=h.list.find(D=>D.id===K.id),Me=v.find(D=>D.id===K.enemyId);Wd(Me,J.pos,x,Ce(J))}}let ie=()=>v.reduce((O,K)=>O+(K.kind==="trainer"&&K.alive?1:0),0);function Ce(O){let K=s.pad,J=O.shareKey&&Number.isFinite(K[O.shareKey])?K[O.shareKey]:K.trainerShare;return J>0&&ie()<s.trainer.maxAlive&&i()<J?"trainer":"associate"}let He=[0,0,0],Ue=[0,0,0];function qe(O,K){let J=K[0]-O.from[0],Me=K[2]-O.from[2],D=Math.hypot(J,Me);return D>O.reach||D>1e-6&&Math.abs(yi(Math.atan2(J,Me)-O.yaw))>O.arc*Math.PI/360+1e-9?!1:(He[0]=O.from[0],He[1]=O.from[1]+i_,He[2]=O.from[2],Ue[0]=K[0],Ue[1]=O.from[1]+i_,Ue[2]=K[2],un(e,He,Ue))}function Ke(O,K){let J=s.trainer;for(let Me=0;Me<f.length;Me++){let D=f[Me];if(D.type!=="trainerSwing")continue;if(!K.downed&&qe(D,O.pos)){let V=K.damage(J.damage);if(V!==null){if(f.push({type:"playerHit",id:D.id,from:D.from,amount:J.damage,result:V,melee:!0}),V==="downed")O.state!=="downed"&&O.down(),$();else if(O.knock){let oe=O.pos[0]-D.from[0],ne=O.pos[2]-D.from[2],ve=Math.hypot(oe,ne)||1;O.knock(oe/ve,ne/ve,J.knockback,J.knockTime)}}}let E=b.tobble;if(E&&!E.downed&&qe(D,E.pos)){let V=vc(E,J.tobbleDamage,x);f.push({type:"tobbleHit",id:D.id,from:D.from,result:V})}}}let ge=[0,0,0],Pe=[0,0,0];function ye(O,K,J){let Me=s.grenade,D=0;ge[0]=O[0],ge[1]=O[1]+.3,ge[2]=O[2];let E=(oe,ne)=>{let ve=Math.hypot(oe[0]-O[0],oe[1]-O[1],oe[2]-O[2]),Re=Lb(ve,Me);return Re>0&&un(e,ge,oe)?ne(Re):null};for(let oe of v){if(!oe.alive||oe.state==="executed")continue;let ne=oe.shapes.body;Pe[0]=oe.pos[0],Pe[1]=(ne.a[1]+ne.b[1])/2,Pe[2]=oe.pos[2],E(Pe,ve=>W(oe,ve,"blast",f))==="kill"&&D++}Pe[0]=K.pos[0],Pe[1]=K.pos[1]+(T.chest[1]-K.pos[1]<1?.45:.9),Pe[2]=K.pos[2],E(Pe,oe=>{let ne=oe*Me.selfDamage,ve=J.damage(ne);return ve===null||(f.push({type:"playerHit",id:null,from:[O[0],O[1],O[2]],amount:ne,result:ve}),ve==="downed"&&(K.state!=="downed"&&K.down(),$())),null});let V=h.blast(O);for(let oe of V)f.push({type:"padClosed",id:oe}),F(oe,"padClosed");f.push({type:"explode",pos:[O[0],O[1],O[2]],kills:D,closed:V})}function fe(O,K,J){let Me=O.hostile,D=s.boss,E=O.pos,V=(Re,se)=>{let ae=Math.hypot(Re[0]-E[0],Re[2]-E[2]);return ae<=Me.radius?se*(1-D.lobFalloff*ae/Math.max(Me.radius,1e-6)):0},oe=V(K.pos,Me.damage);if(!J.downed&&oe>0){let Re=J.damage(oe);Re!==null&&(f.push({type:"playerHit",id:Me.id,from:[E[0],E[1],E[2]],amount:oe,result:Re,lob:!0}),Re==="downed"&&(K.state!=="downed"&&K.down(),$()))}let ne=b.tobble,ve=ne&&!ne.downed?V(ne.pos,D.lobTobbleDamage):0;ve>0&&f.push({type:"tobbleHit",id:Me.id,from:[E[0],E[1],E[2]],result:vc(ne,ve,x)}),f.push({type:"lobLand",id:Me.id,pos:[E[0],E[1],E[2]],radius:Me.radius})}function Ae(O,K,J){for(let Me of c.step(O,e))Me.type!=="explode"?f.push(Me):Me.hostile?fe(Me,K,J):ye(Me.pos,K,J)}function Z(O){let K=s.grenade.gravity,J=Math.max(O.flight,.2),Me=s.grenade.ballRadius,D=[(O.to[0]-O.from[0])/J,(Me-O.from[1]+.5*K*J*J)/J,(O.to[2]-O.from[2])/J];c.throw(O.from,D,J+.3,{id:O.id,to:[O.to[0],0,O.to[2]],radius:s.boss.lobRadius,damage:s.boss.lobDamage})}function de(){for(let O of f)O.type==="bossLob"&&Z(O)}function pe(){let O=b.lobMarkers;O.length=0;let K=b.boss;K&&K.alive&&K.state==="lobWindup"&&O.push({pos:K.lobTo,radius:s.boss.lobRadius,t:K.stateT,windup:!0});for(let J of c.live)J.hostile&&O.push({pos:J.hostile.to,radius:J.hostile.radius,t:0,windup:!1})}function De(){let O=r();for(let K of c.live)if(!(K.fuse>O.diveWarn||K.hostile))for(let J of v)!J.alive||J.state==="downed"||J.state==="executed"||J.state==="dive"||K.rolled&&K.rolled.has(J.id)||Math.hypot(J.pos[0]-K.pos[0],J.pos[2]-K.pos[2])>O.diveRadius||((K.rolled||(K.rolled=new Set)).add(J.id),i()<(J.kind==="trainer"?s.trainer.diveChance:O.diveChance)&&O1(J,K.pos,x)&&!K.barked&&(K.barked=!0,F(J.id,"dive")))}let Ne=O=>{let K=O.point,J=r();return K.kind==="tall"&&O.pop>0?[K.pos[0]+K.tangent[0]*K.end*J.popShift*O.pop,K.pos[1]+K.tangent[1]*K.end*J.popShift*O.pop]:K.pos};function q(O){let K=s.associate.radius,J=s.associate.height,Me=ne=>ne.kind==="trainer"?Bd(s):ne.kind==="boss"?g1(s):K,D=ne=>ne.kind==="trainer"?J*s.trainer.scaleH:ne.kind==="boss"?J*s.boss.scale:J,E=(ne,ve,Re)=>{if(ne.state==="executed"||ne.kind==="boss")return;let se=zn(e,ne.pos,[ve,0,Re],Me(ne),D(ne));ne.pos[0]=se.pos[0],ne.pos[2]=se.pos[2]},V=ne=>ne.state==="executed";for(let ne=0;ne<v.length;ne++){let ve=v[ne];if(!ve.alive)continue;for(let Y=ne+1;Y<v.length;Y++){let ue=v[Y];if(!ue.alive)continue;let ce=ue.pos[0]-ve.pos[0],ke=ue.pos[2]-ve.pos[2],Ie=Math.hypot(ce,ke),Se=Me(ve)+Me(ue);if(Ie>=Se)continue;Ie<1e-6&&(ce=1,ke=0,Ie=1);let We=(Se-Ie)/2,st=V(ue)?2:V(ve)?0:1,be=V(ve)?2:V(ue)?0:1;E(ve,-ce/Ie*We*st,-ke/Ie*We*st),E(ue,ce/Ie*We*be,ke/Ie*We*be)}let Re=ve.pos[0]-O.pos[0],se=ve.pos[2]-O.pos[2],ae=Math.hypot(Re,se),Le=Me(ve)+s.move.radius;ae<Le&&(ae<1e-6&&(Re=1,se=0,ae=1),E(ve,Re/ae*(Le-ae),se/ae*(Le-ae)))}let oe=b.tobble;if(oe){let ne=s.tobble.radius,ve=s.tobble.height,Re=(ue,ce)=>{let ke=zn(e,oe.pos,[ue,0,ce],ne,ve);oe.pos[0]=ke.pos[0],oe.pos[2]=ke.pos[2]};for(let ue of v){if(!ue.alive)continue;let ce=ue.pos[0]-oe.pos[0],ke=ue.pos[2]-oe.pos[2],Ie=Math.hypot(ce,ke),Se=ne+Me(ue);if(Ie>=Se)continue;Ie<1e-6&&(ce=1,ke=0,Ie=1);let We=Se-Ie,st=V(ue)||ue.point&&t_.has(ue.state)?1:.5;Re(-ce/Ie*We*st,-ke/Ie*We*st),E(ue,ce/Ie*We*(1-st),ke/Ie*We*(1-st))}let se=oe.pos[0]-O.pos[0],ae=oe.pos[2]-O.pos[2],Le=Math.hypot(se,ae),Y=ne+s.move.radius;Le<Y&&(Le<1e-6&&(se=1,ae=0,Le=1),Re(se/Le*(Y-Le),ae/Le*(Y-Le)))}for(let ne of v){if(!ne.alive||!ne.point||!t_.has(ne.state))continue;let ve=Ne(ne);if(Math.hypot(ne.pos[0]-ve[0],ne.pos[2]-ve[1])<=.3)continue;let Re=Math.hypot(ve[0]-O.pos[0],ve[1]-O.pos[2])>=K+s.move.radius-.001;b.tobble&&Math.hypot(ve[0]-b.tobble.pos[0],ve[1]-b.tobble.pos[2])<K+s.tobble.radius-.001&&(Re=!1);for(let se of v)se===ne||!se.alive||!Re||Math.hypot(ve[0]-se.pos[0],ve[1]-se.pos[2])<2*K-.001&&(Re=!1);if(Re){ne.pos[0]=ve[0],ne.pos[2]=ve[1];continue}l.holds(ne.id)&&l.release(ne.id,b.now,s.director),ne.mustMove=!0,ne.pop=0,ne.blind=0,ne.state="seek",ne.stateT=0}}let we=[null];function Ve(O,K){let J=r(),Me=[0,0,0];we[0]=b.tobble;for(let D=0;D<f.length;D++){let E=f[D];if(E.type!=="enemyShot")continue;if(E.accurate&&K.downed&&E.target!=="tobble"){f.splice(D--,1);continue}let V=ma(E.dir,E.spread,i,Me);if(E.target==="tobble"){let oe=b.tobble,ne=Gn(E.from,V,J.range,e,we);if(oe&&!oe.downed&&(ne.kind==="head"||ne.kind==="body")){let ve=vc(oe,E.damage!==void 0?E.damage:J.damage,x);f.push({type:"tobbleHit",id:E.id,from:E.from,result:ve})}f.push({type:"shotFx",from:E.from,to:ne.point,accurate:!0})}else if(E.accurate){let oe=Zb(E.from,V,J.range,e,O,s.combat),ne=oe.point;if(oe.kind==="head"||oe.kind==="body"){let ve=E.damage!==void 0?E.damage:J.damage,Re=K.damage(ve);f.push({type:"playerHit",id:E.id,from:E.from,amount:ve,result:Re}),Re==="downed"&&(O.state!=="downed"&&O.down(),$())}f.push({type:"shotFx",from:E.from,to:ne.slice(),accurate:!0})}else{let oe=Gn(E.from,V,J.range,e,[]);f.push({type:"shotFx",from:E.from,to:oe.point,accurate:!1})}}}b.targets=()=>v,b.freeSlot=_e,b.step=(O,K)=>{(!(O>0)||!Number.isFinite(O))&&(O=0),O=Math.min(O,HP),f.length=0;for(let V of m)f.push(V);m.length=0;let{m:J,health:Me}=K;if(b.now+=O,x.now=b.now,x.aim=K.aim,x.m=J,x.health=Me,!b.started&&J.pos[2]>t.trigger.z&&X(f),x.started=b.started,Ee(J,Me),x.playerDowned=T.downed,T.downed){I()||$();for(let V of v)V.role!=="revive"&&(V.role="hold");!w&&b.started&&F(B().id,"downed")}else b.started&&!b.clear&&Q(J,O);w=T.downed,b.started&&(re(),Oe()),l.expire(b.now,s.director),x.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,Ae(O,J,Me),De(),b.tobble&&(J1(b.tobble,x,O),pc(b.tobble,s.combat));let D=f.length;for(let V of v)z1(V,x,O);for(let V=D;V<f.length;V++){let oe=f[V];if(oe.type==="death")j(v.find(ne=>ne.id===oe.id));else if(oe.type==="bossSaunas")for(let ne of h.list)Te(ne.id,f)}de(),Ve(J,Me),Ke(J,Me),q(J);for(let V of v)ba(V,s.combat,s);b.tobble&&pc(b.tobble,s.combat),pe();let E=!!b.tobble&&b.tobble.downed&&Me.downed;return E&&!C&&f.push({type:"checkpoint"}),C=E,b.started&&!b.clear&&v.every(V=>!V.alive)&&h.allDone()&&(b.clear=!0,f.push({type:"clear"}),y||F(v[0].id,"clear"),b.tobble&&(wm(b.tobble,x),y||F("tobble","tobbleClear"))),f},b.hurt=(O,K,J="body")=>W(O,K,J,m),b.bash=O=>{if(!O.alive||O.state==="executed"||O.state==="unused")return null;let K=W(O,s.melee.bashDamage,"bash",m);return K==="hit"?(N1(O,x),"hit"):K==="kill"?"kill":null},b.beginExecution=O=>F1(O,x),b.finishExecution=O=>{x.events=m;let K=B1(O,x,"execute");return x.events=f,K==="kill"&&j(O),K},b.releaseExecution=O=>U1(O);function Te(O,K){let J=h.list.find(Me=>Me.id===O);return!J||J.state!=="dormant"?!1:(J.state="open",J.nextT=b.now+s.pad.interval,K.push({type:"padOpen",id:O}),F(O,"padOpen",K,!0),I()&&F("tobble","tobblePad",K,!0),!0)}return b.openPad=O=>Te(O,m),b.forceClear=()=>{b.boss&&b.boss.alive&&(rm(b.boss),W(b.boss,1e6,"blast",m));for(let O of v)O.alive&&W(O,1e6,"blast",m);for(let O of h.list)(O.state==="dormant"||O.state==="open")&&(O.state="closed");return!0},b.spawnRep=()=>{let O=_e();if(!O)return null;let K=h.list[0];return Wd(O,K?K.pos:[0,0,0],x)},b.spawnTrainer=O=>{if(ie()>=s.trainer.maxAlive)return null;let K=_e();if(!K)return null;let J=h.list[0];return Wd(K,O||(J?J.pos:[0,0,0]),x,"trainer")},b.downRep=O=>{x.events=m;let K=gm(O,x);return x.events=f,K==="down"},b.hurtTobble=O=>{if(!b.tobble)return null;x.events=m;let K=vc(b.tobble,O,x);return x.events=f,K},b.closePads=()=>{for(let O of h.list)(O.state==="dormant"||O.state==="open")&&(O.state="closed");return!0},b.readyBoss=()=>{b.boss&&b.boss.alive&&rm(b.boss)},b.reserved=d,b.reviveTobble=()=>{if(!b.tobble)return!1;x.events=m;let O=wm(b.tobble,x);return x.events=f,O&&pc(b.tobble,s.combat),O},b.throwGrenade=(O,K)=>c.throw(O,K),b.reset=()=>{l.reset(),c.reset(),h.reset(),M=_(),v.forEach((O,K)=>{hm(O,s.associate,s),K>=p&&um(O)}),P(),b.tobble=x.tobble=u()?b.tobble?bm(b.tobble):ym(t.tobble,s.tobble):null,C=!1,L=0,x.playerDowned=!1,f.length=0,m.length=0,b.lobMarkers.length=0,b.started=b.clear=!1,b.now=0,b.startT=0,b.kills=0,b.hideT=b.stayT=0,x.now=0,x.started=!1,x.aim=void 0,w=!1,k=!1;for(let O of v)ba(O,s.combat,s)},b}function Qd(t,e,n){let i=n[0]-e[0],s=n[2]-e[2],r=yd(t),o=bd(t),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var r_=t=>Math.max(0,Math.min(1,t));function o_({hp:t,max:e,downed:n,downT:i,hits:s=[],now:r,fb:o=H.feedback}){let a=n?1:e>0?r_(1-t/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?r_(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),f=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,f)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-f))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!n,seconds:n?Math.ceil(Math.max(0,i)):0}}}var GP=Object.freeze({Rep:z.glorpPurple,PA:z.cream,Tobble:z.tobbleMint,Trainer:z.planet,Overlord:"#ffcf3a",Doc:z.cream}),qs=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Tobble",text:e}))),Tm=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Trainer",text:e}))),xc=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Overlord",text:e}))),Em=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),paGate:Object.freeze([{speaker:"PA",text:"Members who attempt to leave will be enrolled in our Loyalty Program."}]),paSmoothie:Object.freeze([{speaker:"PA",text:"The pool is closed. The pool has always been closed."}]),paDesk:Object.freeze([{speaker:"PA",text:"Reminder: re-racking weights is mandatory. Re-racking members is also mandatory."}]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),trainerCharge:Tm("ONE MORE REP!","You're not quitting, you're just TIRED!","PAIN IS WEAKNESS LEAVING YOUR WALLET!","NO EXCUSES!"),trainerWindup:Tm("HUP!"),trainerDeath:Tm("\u2026tell my\u2026 macros\u2026"),bossIntro:xc("Doc Vex! Do come in. Your commitment is so valuable to us."),bossTeam:xc("Have you met our team?"),bossReturn:xc("Let us talk about retention. Again."),bossOffer:xc("One month free.","THREE months!","SIX MONTHS AND A TOWEL!"),bossOfferTobble:qs("Doc, that's actually a good\u2014"),bossOfferDoc:Object.freeze([Object.freeze({speaker:"Doc",text:"No."})]),bossDeath:xc("Cancellation\u2026 is\u2026 a process\u2026"),tobbleRevive:qs("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:qs("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:qs("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:qs("Two more reps! I'm good!"),tobbleFlank:qs("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:qs("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:qs("Ooh, you closed your rings!"),tobbleHeadshot:qs("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function a_(t=()=>H.feedback){let e=1/0,n=0,i=null,s={},r=[],o=l=>{let c=Em[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=Em[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],n=t().barkTime,e=0}return{say(l,c=!1){return!Em[l]||!c&&e<t().barkGap?!1:c&&i&&n>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,n-=l,r.length&&e>=t().barkMinShow&&a(r.shift()))},current:()=>n>0&&i?{speaker:i.speaker,text:i.text,color:GP[i.speaker]||null}:null,reset(){e=1/0,n=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var l_=4,VP=1.2,ti=[0,0,0];function WP(){let t=(e,n,i,s,r)=>{let o=new gt(e,n,i).translate(0,s,0);o.deleteAttribute("uv");let a=new Je(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new Tt(c,3)),o};return Xt([t(.3,.16,.22,.08,z.cream),t(.34,.07,.26,.195,z.playerOrange)],!1)}function XP(t,e,n){return t.accurate&&e?(e(n),n):(n[0]=t.from[0],n[1]=t.from[1],n[2]=t.from[2],n)}function c_({scene:t,effects:e,sfx:n,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((R,w)=>[R.id,s[w]])),l=new Map(i.enemies.map(R=>[R.id,R])),c=new Map,h=[],d=new es(WP(),Pt({vertexColors:!0,rim:0}),l_);d.name="pickups",d.frustumCulled=!1,d.count=0,t.add(d);let u=new mn,f=0,m=a_(),y=[],g=(R,w)=>Math.sin(Qd(R.yaw,R.pos,w)),p=(R,w)=>Math.min(1,6/Math.max(Math.hypot(w[0]-R.pos[0],w[2]-R.pos[2]),.001)),v=[0,0,0],_=[0,1,0],M=(R,w=1)=>(v[0]=R[0],v[1]=R[1]+w,v[2]=R[2],v);function S(R,w){let k=H.feedback,P=R.kind;if(R.boss){y.push({t:H.ending.deathDelay*.9,pos:[R.pos[0],R.pos[1],R.pos[2]]}),e.gel(M(R.pos,1.5),_,k.gelCount),n.play("kill",k.killVolume,g(w,R.pos)),o.marker&&o.marker("kill");return}if(P==="body"||P==="head")return;let I=M(R.pos),F=P==="execute"?k.killGelCount*2:P==="bleed"?k.gelCount:k.killGelCount;if(e.gel(I,_,F),P!=="bleed"){if(e.receipts(M(R.pos,1.2),k.receiptCount),C(R.pos),P==="tobble"){n.play("kill",k.killVolume*.5,g(w,R.pos));return}o.marker&&o.marker("kill"),n.play(P==="execute"?"finish":"kill",P==="execute"?k.bashVolume:k.killVolume,g(w,R.pos))}}let T=R=>{let w=i.pads.find(k=>k.id===R);return w?w.pos:[0,0,0]};function x(R){let w=null,k=1/0;for(let P of i.enemies){let I=Math.hypot(P.pos[0]-R[0],P.pos[2]-R[2]);I<k&&(k=I,w=P)}return w}function b(R,w){let k=H.feedback,P=H.associate;for(let I of R)if(I.type==="bark")m.say(I.key,!!I.force);else if(I.type==="padOpen")n.play("saunaOpen",k.saunaVolume,g(w,T(I.id)));else if(I.type==="padClosed")n.play("saunaClose",k.saunaVolume,g(w,T(I.id)));else if(I.type==="padSpawn"){let F=T(I.id);for(let B=0;B<4;B++)e.steam([F[0]+(B-1.5)*.25,.1,F[2]])}else if(I.type==="explode"){e.blast(I.pos);let F=Math.hypot(I.pos[0]-w.pos[0],I.pos[2]-w.pos[2]),B=Math.min(1,8/Math.max(F,.001));n.play("boom",k.boomVolume*Math.max(.4,B),g(w,I.pos)),r&&(r.kick(4*B,(Math.random()*2-1)*2*B),r.bump(B))}else if(I.type==="clank")n.play("clank",k.clankVolume*p(w,I.pos),g(w,I.pos));else if(I.type==="tobbleShot"){let F=i.tobble,B=o.tobbleView;B&&F&&F.pop>=.5?B.tip(ti):(ti[0]=I.from[0],ti[1]=I.from[1],ti[2]=I.from[2]);let $=I.to[0]-ti[0],X=I.to[1]-ti[1],j=I.to[2]-ti[2],W=Math.hypot($,X,j)||1;e.flash(ti,[$/W,X/W,j/W]),e.friendlyTracer(ti,I.to),n.play("tobbleShot",k.tobbleShotVolume*p(w,I.from),g(w,I.from))}else if(I.type==="tobbleHit"){let F=i.tobble;F&&e.gel(F.chest,[I.from[0]-F.chest[0],.3,I.from[2]-F.chest[2]],4)}else if(I.type==="revived")n.play("revive",k.reviveVolume);else if(I.type==="cloneRevive"){let F=l.get(I.id);F&&n.play("revive",k.reviveVolume*.6*p(w,F.pos),g(w,F.pos))}else if(I.type==="down")o.marker&&o.marker("kill"),e.gel(M(I.pos),_,6),n.play("hit",k.hitVolume,g(w,I.pos));else if(I.type==="death")S(I,w);else if(I.type==="bossLob"){let F=l.get(I.id);n.play("throw",k.throwVolume,F?g(w,F.pos):0)}else if(I.type==="lobLand"){e.blast(I.pos),e.receipts(M(I.pos,.6),k.receiptCount);let F=Math.hypot(I.pos[0]-w.pos[0],I.pos[2]-w.pos[2]),B=Math.min(1,8/Math.max(F,.001));n.play("boom",k.boomVolume*Math.max(.4,B),g(w,I.pos)),r&&(r.kick(3*B,(Math.random()*2-1)*2*B),r.bump(B))}else if(I.type==="bossPhase")n.play(I.phase===2?"saunaOpen":"charge",I.phase===2?k.saunaVolume:k.chargeVolume),r&&r.bump(1.5);else if(I.type==="checkpoint")o.restart&&o.restart();else if(I.type==="telegraph"){c.set(I.id,I.time!==void 0?I.time:P.popTime+P.telegraphTime);let F=a.get(I.id),B=l.get(I.id);F&&F.glint(!0),B&&n.play("charge",k.chargeVolume,g(w,B.pos))}else if(I.type==="trainerSwing")n.play("bash",k.bashVolume*p(w,I.from),g(w,I.from));else if(I.type==="shotFx"){let F=x(I.from),B=F&&a.get(F.id);XP(I,B?B.tip:null,ti);let $=I.to[0]-ti[0],X=I.to[1]-ti[1],j=I.to[2]-ti[2],W=Math.hypot($,X,j)||1;e.enemyFlash(ti,[$/W,X/W,j/W]),e.enemyTracer(ti,I.to);let ee=Math.hypot(I.from[0]-w.pos[0],I.from[2]-w.pos[2]);n.play("blaster",k.blasterVolume*Math.min(1,8/Math.max(ee,.001)),g(w,I.from))}}function C(R){h.length>=l_&&h.shift(),h.push({pos:[R[0],R[1],R[2]]}),L()}function L(){d.count=h.length;for(let R=0;R<h.length;R++)u.position.set(h[R].pos[0],h[R].pos[1],h[R].pos[2]),u.rotation.set(0,f*VP+R,0),u.updateMatrix(),d.setMatrixAt(R,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:b,forceBark:R=>m.say(R,!0),bark:()=>m.current(),pan:g,near:p,tick:R=>m.tick(R),update(R){if(R>0){f+=R;for(let w=y.length-1;w>=0;w--){if(y[w].t-=R,y[w].t>0)continue;let k=y.splice(w,1)[0],P=H.feedback;e.gel(M(k.pos,1.5),_,P.killGelCount*3),e.receipts(M(k.pos,2),P.receiptCount*3),n.play("finish",P.bashVolume),r&&r.bump(2)}for(let[w,k]of c)if(k-R<=0){c.delete(w);let P=a.get(w);P&&P.glint(!1)}else c.set(w,k-R);h.length&&L()}},addPickup:C,collect(R,w){let k=0;for(let P=h.length-1;P>=0;P--)Math.hypot(R[0]-h[P].pos[0],R[2]-h[P].pos[2])<=w&&(h.splice(P,1),k++);return k&&L(),k},count:()=>h.length,pickups:()=>h.map(R=>R.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),m.reset(),y.length=0}}}var wa=Object.freeze([Object.freeze({id:"cancelled",tone:"big",lines:Object.freeze(["MEMBERSHIP CANCELLED."])}),Object.freeze({id:"email",tone:"mail",lines:Object.freeze(["We're sorry to see you go!","Your cancellation is confirmed.","A $49.99 cancellation fee has been applied.","Come back anytime \u2014 50% off your first month!"])}),Object.freeze({id:"tobble",tone:"talk",lines:Object.freeze(['Tobble: "Ooh, fifty percent."',"Doc reloads."])}),Object.freeze({id:"thanks",tone:"big",lines:Object.freeze(["GYMS OF WAR \u2014 thanks for playing","We miss you! \u2014 GlorpFit"])})]);function Am(t,e,n){if(!e)return!1;let i=Math.max(e.x0-t[0],0,t[0]-e.x1),s=Math.max(e.z-t[2],0);return Math.hypot(i,s)<=n}function h_({tuning:t=H}={}){let e=()=>t.ending,n="off",i=0,s=0,r=0,o=l=>l===0?e().card1Time:l===1?e().card2Time:l===2?e().card3Time:1/0;return{get state(){return n},get card(){return r},get cardCount(){return wa.length},get hold(){return n==="desk"?Math.min(1,s/Math.max(e().holdTime,1e-6)):0},get locked(){return n==="cards"||n==="done"},get lit(){return n==="desk"||n==="cards"||n==="done"},start(){return n!=="off"?!1:(n="slump",i=0,s=0,r=0,!0)},reset(){n="off",i=0,s=0,r=0},step(l,c={}){let h=[];return!(l>0)||n==="off"||n==="done"||(i+=l,n==="slump"?i>=e().deathDelay&&(n="desk",i=0,s=0,h.push({type:"deskLit"})):n==="desk"?(s=c.atDesk&&c.hold?s+l:0,s>=e().holdTime-1e-9&&(n="cards",i=0,r=0,h.push({type:"cancelled"},{type:"card",index:0}))):n==="cards"&&(r===wa.length-1?c.press&&i>=e().finalLock&&(n="done",h.push({type:"toTitle"})):(i>=o(r)||c.press&&i>=e().skipLock)&&(r++,i=0,h.push({type:"card",index:r})))),h}}}var u_=.3,YP=.02;function qP(t,e=H.feedback.coverGlowLength,n=H.move,i=H.cover){let s=t.edge,r=n.radius+i.gap,o=Math.max(.05,Math.min(s.length,Number.isFinite(e)?e:s.length)),a=o/2,l=Math.max(a,s.length-o/2),c=Math.max(a,Math.min(l,t.t)),h=Math.max(.05,Math.min(u_,s.depth||u_)),d=r+h/2;return{x:s.a[0]+s.tangent[0]*c-s.normal[0]*d,y:s.height+YP,z:s.a[1]+s.tangent[1]*c-s.normal[1]*d,len:o,width:h,yaw:Math.atan2(-s.tangent[1],s.tangent[0])}}function d_({feedback:t=()=>H.feedback}={}){let e=0,n=null,i={x:0,v:0},s={opacity:0,amount:0,strip:null};return{update(r,o){let a=t(),l=a.coverGlow>0&&!!o,c=r>0&&Number.isFinite(r)?r:0;l&&(o.edge!==n?(n=o.edge,i.x=o.t,i.v=0):En(i,o.t,.05,c));let h=Math.max(a.coverGlowFade,.001);return e=Math.max(0,Math.min(1,e+(l?c:-c)/h)),s.amount=e,s.opacity=e*Math.max(0,a.coverGlowOpacity),s.strip=e>0&&n?qP({edge:n,t:i.x},a.coverGlowLength):null,e===0&&(n=null),s},reset(){e=0,n=null}}}var $P=5111744;function KP(){let t=document.createElement("canvas");t.width=64,t.height=16;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.18,"rgba(255,255,255,1)"),n.addColorStop(.82,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,16),e.globalCompositeOperation="destination-in";let i=e.createLinearGradient(0,0,0,16);i.addColorStop(0,"rgba(255,255,255,0.15)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0.15)"),e.fillStyle=i,e.fillRect(0,0,64,16);let s=new Br(t);return s.colorSpace=pn,s}function f_(t){let e=d_(),n=KP(),i=new $t({color:$P,map:n,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),s=new ts(1,1).rotateX(-Math.PI/2),r=new at(s,i);r.name="coverGlow",r.visible=!1,r.frustumCulled=!1,r.renderOrder=5,t.add(r);let o=0;return{mesh:r,model:e,update(a,l){o+=a>0?a:0;let c=e.update(a,l),h=c.strip;if(r.visible=!!h&&c.opacity>.002,!r.visible)return!1;let d=H.feedback.coverGlowHz,u=d>0?.72+.28*Math.sin(2*Math.PI*d*o):1;return i.opacity=Math.min(1,c.opacity*u),r.position.set(h.x,h.y,h.z),r.rotation.y=h.yaw,r.scale.set(h.len,1,h.width*3),!0},reset(){e.reset(),r.visible=!1},dispose(){t.remove(r),s.dispose(),i.dispose(),n.dispose()}}}function p_({feedback:t=()=>H.feedback}={}){let e=0;return{trigger(n=t().slamHitstop){n>0&&Number.isFinite(n)&&(e=Math.max(e,n))},scale(n){if(!(e>0))return 1;e=Math.max(0,e-(n>0&&Number.isFinite(n)?n:0));let i=t().hitstopScale;return Number.isFinite(i)?Math.max(0,Math.min(1,i)):1},active:()=>e>0,reset(){e=0}}}function m_({getPads:t=()=>[],feedback:e=()=>H.feedback}={}){return{pulse(n,i,{weak:s=.6,strong:r=1}={}){if(!(e().rumble>0)||!(n>0)||!(i>0))return!1;let o=Math.min(1,n);try{let a=t()||[];for(let l of a){let c=l&&l.connected&&l.vibrationActuator;if(!c||typeof c.playEffect!="function")continue;let h=c.playEffect("dual-rumble",{startDelay:0,duration:Math.round(i*1e3),weakMagnitude:Math.min(1,o*s),strongMagnitude:Math.min(1,o*r)});return h&&typeof h.catch=="function"&&h.catch(()=>{}),!0}}catch{}return!1}}}var g_=Math.PI*2;function ZP(t,{amp:e=0,hz:n=0,ramp:i=0}={}){if(!(e>0)||!(t>=0)||!Number.isFinite(t)||!Number.isFinite(e))return 0;let s=Number.isFinite(n)&&n>0?n:0,r=i>0?Math.min(1,t/i):1;return e*r*(.7*Math.sin(g_*s*t)+.3*Math.sin(g_*s*2.3*t+1.3))}function v_(t,e){let n=(Number.isFinite(e)?e:0)*Math.PI/180,i=Math.cos(n),s=Math.sin(n);return[t[0]*i+t[2]*s,t[1],-t[0]*s+t[2]*i]}function x_({feedback:t=()=>H.feedback}={}){let e=0,n=0;return{update(i,s){let r=t();return s?e+=i>0&&Number.isFinite(i)?i:0:e=0,n=s?ZP(e,{amp:r.blindDrift,hz:r.blindDriftHz,ramp:r.blindDriftRamp}):0,n},drift:()=>n,time:()=>e,reset(){e=0,n=0}}}function jP(t,e,n=H.feedback){let i=Math.max(0,Math.min(1,n.reloadTickLead)),s=e.perfectStart;return!(i>0)||!(t<s)||!(t>=s-i)?{active:!1,near:0}:{active:!0,near:Math.max(0,Math.min(1,(t-(s-i))/i))}}function y_({feedback:t=()=>H.feedback}={}){let e=0;return{step(n,i,s,r=!1){let o=t(),a=r?{active:!1,near:0}:jP(i,s,o);if(!a.active)return e=0,null;if(e-=n>0?n:0,e>0)return null;let l=Math.max(o.reloadTickSlow,.01),c=Math.max(Math.min(o.reloadTickFast,l),.01);return e=l+(c-l)*a.near,{tick:!0,pitch:a.near}},reset(){e=0}}}var ef="gyms-of-war.tutorial",JP=Object.freeze([{id:"run",when:t=>t.arena==="turnstiles"&&!t.inCover,done:t=>t.inCover,text:t=>`Enemies ahead \u2014 RUN to cover! Run straight into it, or tap ${t.cover}`},{id:"pop",when:t=>t.inCover,done:t=>t.popped,text:t=>`Hold ${t.pop} to pop out and aim`},{id:"blind",when:t=>t.inCover&&(t.aimedKills>=1||t.coverTime>=H.feedback.hintCoverDelay),done:t=>t.blindFired,text:()=>"Fire without aiming to blind-fire \u2014 safe, but wild"},{id:"reload",when:t=>t.lowAmmo,done:t=>t.reloading||!t.lowAmmo,text:t=>`RELOAD \u2014 ${t.reload}  (press again in the bright zone)`},{id:"trainer",when:t=>t.trainerSeen,done:t=>t.revving,text:t=>`Trainers charge! Hold ${t.melee} to rev Cheat Day`},{id:"finish",when:t=>t.downedRep,done:t=>t.finishing||!t.downedRep,text:t=>`${t.finish} to finish it`},{id:"sauna",when:t=>t.saunaOpen,done:t=>t.thrown||!t.saunaOpen,text:(t,e)=>e==="pad"?`Throw a kettlebell (${t.grenade}, LT aim, RT throw) into the sauna to close it`:`Throw a kettlebell (${t.grenade}) into the sauna to close it`}]);function QP(t){try{let e=t&&t.getItem(ef),n=e?JSON.parse(e):null;return n&&typeof n=="object"&&n.seen&&typeof n.seen=="object"?{...n.seen}:{}}catch{return{}}}function b_(t,e){try{t&&t.setItem(ef,JSON.stringify({seen:e}))}catch{}}function eI(t){try{t&&(t.removeItem?t.removeItem(ef):t.setItem(ef,JSON.stringify({seen:{}})))}catch{}}function __({storage:t=null,hints:e=JP,feedback:n=()=>H.feedback}={}){let i=QP(t),s=null,r=new Map;return{step(a,l){let c=n();if(!(c.hint>0)||!l||l.blocked)return null;let h=a>0&&Number.isFinite(a)?a:0;if(s&&(s.t+=h,(s.t>=c.hintTime||s.hint.done(l))&&(i[s.hint.id]=!0,b_(t,i),s=null)),!s){for(let m of e)i[m.id]||(m.when(l)&&!m.done(l)?r.set(m.id,(r.get(m.id)||0)+h):r.delete(m.id));for(let m of e)if(!(i[m.id]||!r.has(m.id))){s={hint:m,t:0},r.delete(m.id);break}}if(!s)return null;let d=l.device==="pad"?"pad":"kbm",u=Math.max(c.hintFade,.001),f=Math.max(0,Math.min(1,s.t/u,(c.hintTime-s.t)/u));return{id:s.hint.id,text:s.hint.text(ca[d],d),opacity:f}},seen:a=>!!i[a],reset(){i={},s=null,r.clear(),eI(t)},know(a){i[a]||(i[a]=!0,b_(t,i)),s&&s.hint.id===a&&(s=null)}}}var tf=.05;function tI({locked:t,device:e,panelOpen:n}){return!!(t||e==="pad"||n)}function M_(t){return`${t.gap}|${t.endInset}|${t.minLength}`}function nI(t){if(t&&t.has("room"))return{name:"greyRoom",jumped:!1};let e=t&&t.get("arena");return e&&On.includes(e)?{name:e,jumped:!0}:{name:On[0],jumped:!1}}function iI(t,e,{downed:n=!1,busy:i=!1}={}){return n&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(n||i)&&(t.fire=!1),t}function sI(t){return!(t&&(t.has("room")||t.has("arena")||t.has("skipTitle")))}var rI=2e3,oI=500,aI=500,lI=new Set(["bossLob","lobLand","bossPhase","enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function w_(){try{return window.localStorage||null}catch{return null}}function S_({canvas:t,gl:e,params:n}){let i=Ou(t,e),s=i.renderer,r=Nu(t),o=document.getElementById("cr-readout");o.style.display="none";let a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=by();l.panelOpen=c.isOpen;let h=new Or,d=new Un(H.camera.fov,1,.05,100),u=Fu();h.add(u.mesh);let f=nI(n),m=ey({storage:f.name==="greyRoom"?null:w_()}),y=null,g="",p=null,v=null,_=[],M={pos:[0,0,0],yaw:0},S=[],T=[],x=null,b=[],C=new Map,L=null,R=null,w=null,k=null,P=null,I=null,F=[],B=()=>Ey(_,{...Ty(),exclude:p.coverExclude}),$=M_(H.cover),X=[],j=0,W=!1,ee=Fy({boxes:_,spawn:[0,0,0],coverEdges:[],onAction(U){I&&I.onAction(U)},onState(U,me){X.push({state:U,from:me,t:j,tapped:W,auto:U==="coverSlide"&&!W&&(me==="move"||me==="sprint")}),X.length>rI&&X.shift()},onStep(U){Q.dip(H.feedback.stepDip),_e.play("step",H.feedback.stepVolume*(U.sprint?1.25:1))}}),Ee=fb(ee);h.add(Ee.group);let Q=Dx(),re=id(),_e=Uy({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),Oe=w_(),ie=ny(Oe);function Ce(){_e.setVolume(ie.volume),H.look.invertY=ie.invertY}Ce();let He=By(),Ue=f_(h),qe=p_(),Ke=m_({getPads:()=>{try{return navigator.getGamepads&&navigator.getGamepads()||[]}catch{return[]}}}),ge=x_(),Pe=y_(),ye=__({storage:Oe}),fe={aimedKills:0,coverTime:0,blindFired:!1,lastKettlebells:-1,thrown:!1,finishing:!1},Ae=null,Z=null,de=null,pe=0,De=new G,Ne=h_(),q=!1,we=Gy(),Ve=jy(h),Te=Qy(document.body),O=na(1),K=$b(),J=Nb(),Me=!1,D=null,E=0,V={restart:()=>{Me=!0},marker:U=>{D=U,E=H.feedback.killMarkerTime},tobbleView:null,objective:()=>Xe(),lookAt:U=>{let me=Vb(ht.pos,U.pos);me&&me.yaw!==null&&Q.turnTo(me.yaw,me.pitch)},rumble:(U,me)=>{r.device()==="pad"&&Ke.pulse(U,me)}};function oe(){!x||P===x.tobble||(k&&(y.remove(k.group),x0(k.group)),k=x.tobble?Eb(x.tobble):null,k&&y.add(k.group),P=x.tobble,V.tobbleView=k)}function ne(){y&&(x0(y),y=null,k=null,P=null,V.tobbleView=null)}function ve(U){ne(),g=U,p=U==="greyRoom"?ad:Zx[U],y=new xt,y.name=`arena-${U}`,h.add(y),v=Bx(p),y.add(v.group),_=v.boxes,M=p.spawn,ee.boxes=_,ee.coverEdges=B(),S=(p.dummies||[]).map(me=>{let Be=Yy(me),Qe=eb(Be);return y.add(Qe.group),{dummy:Be,view:Qe,wasAlive:!0}}),T=S.map(me=>me.dummy),x=U==="greyRoom"?null:s_({level:p,boxes:_,edges:B(),rand:na(4242)}),b=x?x.enemies.map(me=>{let Be=yb(me);return y.add(Be.group),Be}):[],C=new Map(x?x.enemies.map((me,Be)=>[me,b[Be]]):[]),L=x?cb(y):null,R=x?Ab(y,x.pads,Ve):null,w=x?c_({scene:y,effects:Ve,sfx:_e,fight:x,views:b,cam:Q,hooks:V}):null,oe(),I=x?qb({mover:ee,fight:x,arsenal:we,bag:J,cam:Q,sfx:_e,effects:Ve,views:b,health:K,playerView:Ee,grenadeView:L,boxes:_,hooks:V}):null,F=x?x.targets():T,v.setGateOpen(!1,!0),Re=!1,Ne.reset(),v.setCancelLit(!1)}let Re=!1,se=[],ae=null;function Le(U,me="",Be=1.4,Qe=0){ae&&ae.t>0&&ae.prio>Qe||(ae={text:U,kind:me,t:Be,prio:Qe})}let Y=[],ue={pos:[0,0,0],yaw:0},ce=[],ke="-",Ie="-",Se=null,We=null,st=0,be=1,ze=[],$e={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},Fe=[0,0,0],ct=0,It=[0,0,0],et=null,St=!1,pt=null,Ht=!1,zt=!1,Kt=!1,dt={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1,objective:!1,equip:!1,switched:!1},Dt={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1,objective:!1,equip:!1},gn={melee:!1,interact:!1,objective:!1,equip:!1,switched:!1},sn={melee:!1,grenade:!1,interact:!1,tac:!1},Vt={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},en={weapon:null,reload:!1,fire:!1,firePressed:!1},_s=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function $s(){let U=i.resize();d.aspect=U.aspect,d.updateProjectionMatrix()}$s(),window.addEventListener("resize",$s),t.addEventListener("click",()=>r.requestLock());let yc=()=>{re.reset(),He.reset()};window.addEventListener("blur",yc),document.addEventListener("pointerlockchange",()=>{r.isLocked()||yc()});let Sa=()=>_e.unlock();window.addEventListener("pointerdown",Sa);let Ta=()=>{q=!0};window.addEventListener("keydown",Ta),window.addEventListener("pointerdown",Ta),window.addEventListener("keydown",Sa),window.addEventListener("keydown",U=>{U.repeat||Gp(U.target)||(U.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):U.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function bc(){K.reset(),we.reset(),J.reset(),tt(M.pos,M.yaw),Se=null,re.reset(),He.reset(),Q.recenter(),Ve.clear(),Ue.reset(),qe.reset(),ge.reset(),Pe.reset(),fe.coverTime=0,fe.blindFired=!1,fe.lastKettlebells=-1,ze.length=0,se.length=0,D=null,We=null,E=0,st=0,Me=!1}function _c(){Ea(),Le("Your membership has been renewed.","over",3.2,3)}function Ea(){x&&x.reset(),bc(),w&&w.reset();for(let U of b)U.reset();x&&(I.reset(),L.reset(),R.reset(),oe(),k&&k.reset()),m.restart(),v.setGateOpen(!1,!0),Re=!1,Ne.reset(),v.setCancelLit(!1)}function Ni(U){ve(U),bc(),Q.snap(M.pos,M.yaw,"normal",1),N=U==="greyRoom"?0:H.run.hoursTime,ae=null,w&&U==="smoothie"?w.forceBark("paSmoothie"):w&&U==="desk"&&w.forceBark("paDesk")}let N=0;function te(){if(x.boss){Ne.start();return}m.markClear()&&!Re&&(Re=!0,v.setGateOpen(!0),_e.play("saunaOpen",H.feedback.saunaVolume),w.forceBark("paGate"))}function xe(){ee.state!=="downed"&&ee.down(),we.cancelReload(),_e.play("downed",H.feedback.hurtVolume),w&&w.forceBark("downed")}function le(U){let me=q;if(q=!1,Ne.state==="off")return;let Be=p.overlord;for(let Qe of Ne.step(U,{atDesk:!K.downed&&Am(ee.pos,Be&&Be.desk,H.ending.deskReach),hold:sn.interact,press:me}))Ye(Qe),Qe.type==="deskLit"?(v.setCancelLit(!0),_e.play("saunaOpen",H.feedback.saunaVolume)):Qe.type==="cancelled"?_e.play("clear",H.feedback.killVolume):Qe.type==="toTitle"&&he()}function he(){if(typeof l.toTitle=="function"){l.toTitle();return}m.newRun(),Ni(On[0])}function Ye(U){Y.push({t:j,type:U.type,id:U.id||null,accurate:!!U.accurate,hit:U.type==="playerHit",key:U.key||null,kind:U.kind||null}),Y.length>aI&&Y.shift()}function it(U){let me=H.feedback;ue.pos[0]=ee.pos[0],ue.pos[1]=ee.pos[1],ue.pos[2]=ee.pos[2],ue.yaw=Q.yaw;let Be=x.step(U,{m:ee,health:K,aim:{lens:ht.pos,dir:ht.dir,active:!!Se&&Se!=="blind"||ee.grenadeAim}});w.handle(Be,ue);for(let Mt of Be)if(lI.has(Mt.type)&&Ye(Mt),Mt.type==="playerHit"){let Ft=Qd(Q.yaw,ee.pos,Mt.from);se.push({t:j,angle:Ft});let ii=Math.random()*2*Math.PI;Q.kick(me.hitKick*Math.cos(ii),me.hitKick*Math.sin(ii)),_e.play("hurt",me.hurtVolume,Math.sin(Ft)),I.onPlayerHit(),Mt.result==="downed"&&xe()}else Mt.type==="clear"&&(_e.play("clear",me.killVolume),te());for(;se.length&&j-se[0].t>me.hitFlashTime;)se.shift();let Qe=K.update(U,{standIn:!x.tobble});if(Qe==="revived"&&ee.revive(),Qe==="bleedOut"||Me){_c();return}let ut=K.downed?0:w.collect(ee.pos,H.combat.pickupRadius);if(ut){let Mt=we.ammo.regret.reserve;we.addReserve("regret",ut*H.associate.ammoDrop);let Ft=Math.round(we.ammo.regret.reserve-Mt);Ft>0&&Le(`+${Ft} scoops`,"scoops",1.2,1),_e.play("pickup",me.pickupVolume)}}function Xe(){if(!x)return null;let U=p.overlord;return Gb({bossArena:!!p.boss,boss:x.boss,ending:Ne.state,desk:U&&U.desk,exit:p.exit,gateOpen:m.gateOpen&&Re})}function Ze(){let U=ud[m.arena];if(p.boss){let me=x.boss;return Ne.state==="slump"?"The Membership Overlord has fallen":Ne.state==="desk"?"Cancel your membership at the desk":Ne.locked?"":!me||!x.started?U:me.invuln?`Invulnerable! ${Jr("sauna",r.device())}`:`${U}: shoot the Overlord. Head shots count double`}return x.clear?m.gateOpen?`${U}: clear \u2014 head for the GO gate`:`${U}: set complete`:x.pads.some(me=>me.state==="open")?Jr("sauna",r.device()):x.started?m.arena==="turnstiles"?"Get past the front desk":`${U}: clear the room`:"Walk in"}let rt="THE MEMBERSHIP OVERLORD";function bt(){let U=x&&x.boss;return!U||!x.started||!U.alive?null:{name:rt,fraction:U.health/H.boss.health,phase:U.phase,invuln:U.invuln,hint:U.invuln?"INVULNERABLE \u2014 close the Spawn Saunas":""}}function Ct(){if(Ne.state!=="cards"&&Ne.state!=="done")return null;let U=wa[Math.min(Ne.card,wa.length-1)];return{card:Ne.card,lines:U.lines,tone:U.tone,final:Ne.card===wa.length-1}}function tt(U,me){ee.place(U,me),Q.snap(U,me,k0(ee),eo(ee)),ct=ee.slams}let ht={pos:[0,0,0],dir:[0,0,1],fov:70},hn={revving:!1,grinding:!1},Wt=[0,1],Ut="normal",vn=1,nt=0,bn=0,Lt=0,li=0,dn=0,Ms=0,wi=0,ot=window.__cr;ot.stats=()=>({fps:nt,ms:bn,calls:dn,tris:Ms,scale:i.scale(),characters:1+b.length+(k?1:0)}),ot.player=()=>{let U=ee.cover;return{pos:ee.pos.slice(),state:ee.state,speed:ee.speed(),facing:ee.facing,entries:ee.entries,cover:U?{id:U.edge.id,kind:U.edge.kind,t:U.t,length:U.edge.length,pop:U.pop,exposed:U.exposed}:null,slams:ee.slams,steps:ee.steps,blind:U?U.blind:0,firing:!!ee.firing}},ot.gun=()=>{let U=we.current(),me=we.ammo[U],Be=we.reload,Qe=H.weapons[U];return{id:U,slot:we.slot,mag:me.mag,reserve:me.reserve,boost:me.boost,reload:Be?{u:Be.t/Math.max(Qe.reloadTime,H.combat.minReloadTime),press:Be.press}:null,switching:we.switching>0,spread:we.spreadOf(Se||"hip"),stance:Se}},ot.dummies=()=>T.map(U=>({id:U.id,health:U.health,alive:U.alive,pos:U.pos.slice()})),ot.level=()=>p.name||g,ot.run=()=>({arena:m.arena,index:m.index,checkpoint:m.checkpoint,phase:m.phase,cleared:m.cleared,gateOpen:m.gateOpen,fade:m.fade,saved:m.saved,hours:N>0?p0(m.checkpoint):null}),ot.gate=()=>p.exit?{pos:p.exit.pos.slice(),yaw:p.exit.yaw,w:p.exit.w,open:Re,openness:v.gate?v.gate.openness():0}:null,ot.go=U=>On.includes(U)?(m.goTo(m0(U)),Ni(U),!0):!1,ot.clearArena=()=>x?x.forceClear():!1,ot.gpu=()=>{let U=s.info;return{geometries:U.memory.geometries,textures:U.memory.textures,programs:(U.programs||[]).length,calls:dn,tris:Ms}},ot.boss=()=>{let U=x&&x.boss;return U?{state:U.state,phase:U.phase,invuln:U.invuln,health:U.health,alive:U.alive,pos:U.pos.slice(),pop:U.pop,saunasOpen:U.saunasOpen,markers:x.lobMarkers.map(me=>({pos:me.pos.slice(),radius:me.radius}))}:null},ot.ending=()=>({state:Ne.state,card:Ne.card,hold:Ne.hold,lit:Ne.lit}),ot.hurtBoss=(U,me="body")=>{let Be=x&&x.boss;return Be?x.hurt(Be,U,me):null},ot.closePads=()=>x?x.closePads():!1,ot.bossReady=()=>x&&x.boss?(x.readyBoss(),!0):!1,ot.fight=()=>x?{started:x.started,clear:x.clear,tokens:x.tokens.held(),pickups:w.count(),pickupPos:w.pickups(),enemies:x.enemies.filter(U=>U.state!=="unused").map(U=>({id:U.id,slot:x.enemies.indexOf(U),kind:U.kind||"associate",state:U.state,health:U.health,alive:U.alive,pos:U.pos.slice(),holds:x.tokens.holds(U.id),role:U.role,point:U.point?U.point.index:null,pop:U.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},ot.tobble=()=>{let U=x&&x.tobble;return U?{state:U.state,hp:U.hp,downed:U.downed,pos:U.pos.slice(),point:U.point?U.point.index:null}:null},ot.pads=()=>x?x.pads.map(U=>({id:U.id,state:U.state,spawned:U.spawned,alive:U.alive})):[],ot.grenades=()=>({count:J.count,live:x?x.grenades.live.map(U=>({pos:U.pos.slice(),fuse:U.fuse})):[]}),ot.aimThrow=(U,me)=>I?I.aimThrow(U,me):!1,ot.hurtTobble=U=>x?x.hurtTobble(U):null,ot.spawnTrainer=U=>{let me=x&&x.spawnTrainer(U);return me?me.id:null},ot.downRep=U=>{let me=x&&x.enemies.find(Be=>Be.id===U);return!!me&&x.downRep(me)},ot.openPad=U=>x?x.openPad(U):!1,ot.spawnRep=()=>{let U=x&&x.spawnRep();return U?U.id:null},ot.health=()=>({hp:K.hp,max:H.health.max,downed:K.downed,downT:K.downT}),ot.hurt=U=>{K.damage(U)==="downed"&&xe()},ot.god=U=>{H.health.godMode=U?1:0},ot.fightLog=()=>Y.map(U=>({...U})),ot.clearFightLog=()=>{Y.length=0},ot.restart=()=>Ea(),ot.shots=()=>ce.map(U=>({...U})),ot.clearShots=()=>{ce.length=0},ot.setGun=(U,me)=>we.set(U,me),ot.look=(U,me)=>{Q.yaw=U,Q.pitch=me},ot.hint=()=>Ae?{id:Ae.id,text:Ae.text,opacity:Ae.opacity}:null,ot.glow=()=>({visible:Ue.mesh.visible,opacity:Ue.mesh.material.opacity,edge:de?de.edge.id:null,pos:Ue.mesh.position.toArray(),scale:Ue.mesh.scale.toArray()}),ot.tac=()=>Z,ot.fov=()=>d.fov,ot.hitstop=()=>qe.active(),ot.blindDrift=()=>ge.drift(),ot.camera=()=>{let U=ht;return{pos:U.pos.slice(),fov:U.fov,inside:aa(_,U.pos,.1),mode:Ut,side:vn,yaw:Q.yaw,pitch:Q.pitch}},ot.transitions=()=>X.map(U=>({...U})),ot.clearTransitions=()=>{X.length=0},ot.coverTarget=()=>{let U=pt||{moveX:et?et.moveX:0,moveY:et?et.moveY:0},me=fa(ee.coverEdges,_,ee.pos,vd(ee,{moveX:U.moveX||0,moveY:U.moveY||0,camYaw:Q.yaw},[0,0]),Q.yaw,H.cover,H.move.radius);return me?{id:me.edge.id,kind:me.edge.kind,dist:me.dist}:null},ot.place=U=>{let me=U==="spawn"?M:p.features[U];me&&tt(me.pos,me.yaw)},ot.at=(U,me,Be=0)=>tt([U,0,me],Be),ot.drive=U=>{if(!U){Ht?zt=!0:pt=null;return}U.fire&&!(pt&&pt.fire)&&(Dt.fire=!0),U.melee&&!(pt&&pt.melee)&&(Dt.melee=!0),U.objective&&!(pt&&pt.objective)&&(Dt.objective=!0),U.equip&&!(pt&&pt.equip)&&(Dt.equip=!0),pt=U,zt=!1,U.tap&&(Ht=!0),U.reload&&(Dt.reload=!0),U.interact&&(Dt.interact=!0),U.weapon&&(Dt.weapon=U.weapon)};function Nt(U){if(pt){Vt.moveX=pt.moveX||0,Vt.moveY=pt.moveY||0,Vt.sprint=!!pt.sprint,Vt.aim=!!pt.aim,Vt.tap=Ht;let me=He.update(!!pt.fire,Dt.fire,!0);Dt.fire=!1,Vt.fire=me.fire,en.fire=me.fire,en.firePressed=me.firePressed,en.reload=Dt.reload,en.weapon=Dt.weapon,Dt.reload=!1,Dt.weapon=null,sn.melee=!!pt.melee,sn.grenade=!!pt.grenade,sn.interact=!!pt.interactHeld,sn.tac=!!pt.tac,Ht&&(Ht=!1,zt&&(pt=null,zt=!1))}else{let me=et.held;Vt.moveX=et.moveX,Vt.moveY=et.moveY,Vt.tap=re.update(me.cover,dt.cover,U,H.move.tapMax),Vt.sprint=me.sprint||re.holding(),Vt.aim=me.aim;let Be=He.update(me.fire,dt.fire,!0);Vt.fire=Be.fire,en.fire=Be.fire,en.firePressed=Be.firePressed,en.reload=dt.reload,en.weapon=dt.weapon,sn.melee=me.melee,sn.grenade=me.grenade,sn.interact=me.interact,sn.tac=me.tacCom}return gn.interact=dt.interact||Dt.interact,gn.melee=dt.melee||Dt.melee,gn.objective=dt.objective||Dt.objective,gn.equip=dt.equip||Dt.equip,gn.switched=dt.switched,Vt.grenade=sn.grenade,Vt.interactHeld=sn.interact,dt.cover=!1,dt.fire=!1,dt.reload=!1,dt.weapon=null,dt.interact=!1,dt.melee=!1,dt.objective=!1,dt.equip=!1,dt.switched=!1,Dt.interact=!1,Dt.melee=!1,Dt.objective=!1,Dt.equip=!1,Vt.camYaw=Q.yaw,W=Vt.tap,Vt}let _n=U=>U.toFixed(1);function ci(){let U=ee.cover;if(U)return`cover: ${U.edge.kind} ${U.edge.id}  t ${U.t.toFixed(2)}/${U.edge.length.toFixed(2)}  pop ${U.pop.toFixed(2)}`;let me=ot.coverTarget();return me?`tap grabs: ${me.kind} ${me.dist.toFixed(1)} m`:"tap grabs: nothing"}function Zt(){let U=ot.gun(),me=U.id;return`gun: ${_d[me].name} ${U.mag}/${H.weapons[me].infiniteReserve>0?"\u221E":U.reserve}  ${U.stance||"-"}  spread ${U.spread.toFixed(1)}`}function fn(){let U=r.padStatus(),me=[x?`GYMS OF WAR \u2014 ${ud[m.arena].toUpperCase()}`:"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad (Gears layout): left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), A tap: take cover or roll, hold: sprint, D-pad Right Regret / Down Guest Pass / Up kettlebells, Y finish or look at the objective, LB Tac/Com, Start pause, View controls","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(x&&me.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G: hold to aim a kettlebell, release to throw (pad: D-pad Up, LT aim, RT throw)   E / Y: finish a downed Rep   E / X: hold to revive Tobble"),me.push("Sound starts after a click or key","",`${ee.state}   ${ee.speed().toFixed(2)} m/s`,ci(),Zt()),x){me.push(`fight: ${x.enemies.filter(ut=>ut.alive).length}/${x.enemies.filter(ut=>ut.state!=="unused").length}  tokens ${x.tokens.held().join(",")||"-"}  hp ${K.hp.toFixed(0)}`),me.push(`health: ${K.hp.toFixed(0)}/${H.health.max}  ${K.downed?`downed ${K.downT.toFixed(1)}`:"-"}`);let Be=x.tobble,Qe=x.pads[0];me.push(`tobble: ${Be?`${Be.state} hp ${Be.hp.toFixed(0)}`:"off"}`,`sauna: ${Qe?`${Qe.state} ${Qe.spawned}/${H.pad.total}`:"-"}   kettlebells ${J.count}`)}else me.push(`dummies: ${T.filter(Be=>Be.alive).length}/${T.length}  last: ${ke} ${Ie}`);me.push(`${Math.round(nt)} fps   ${_n(bn)} ms   scale ${i.scale()}`,`${dn} draw calls   ${Ms} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${U}`,"` tuning panel    ?look look test    H show/hide this read-out"),o.textContent=me.join(`
`)}let ni=U=>H.feedback[U];function Mc(U){U.type==="shot"?I_(U):U.type==="reloadStart"?_e.play("magOut",ni("reloadVolume")):U.type==="reloadPress"?(_e.play(U.result,ni("reloadVolume")),We=U.result,st=0):U.type==="reloadDone"?_e.play("magIn",ni("reloadVolume")):U.type==="dry"&&_e.play("dry",ni("reloadVolume"))}function T_(U){let me=we.reload;if(!me){Pe.reset();return}let Be=H.weapons[me.id],Qe=Math.max(Be.reloadTime,H.combat.minReloadTime),ut=Pe.step(U,me.t/Qe,Be,me.press!==null);ut&&_e.play("reloadTick",H.feedback.reloadTickVolume,0,ut.pitch)}let wc=[0,0,0];function E_(){let U=H.feedback;Q.slam(),_e.play("thud",H.cover.thudVolume),qe.trigger(),r.device()==="pad"&&Ke.pulse(U.slamRumble,U.slamRumbleTime);let me=ee.cover;if(me&&St){let Be=me.edge,Qe=bi(Be,me.t),ut=H.move.radius+H.cover.gap;wc[0]=Qe[0]-Be.normal[0]*ut,wc[1]=0,wc[2]=Qe[1]-Be.normal[1]*ut,Ve.dust(wc,Be.normal,Be.tangent)}}function A_(U){let me=ee.cover,Be=fe,Qe=hi||Mn.open||!St||!x||K.downed||m.fading||Ne.state!=="off"||x.clear;if(Qe&&!x)return{blocked:!0};St&&!Qe&&(me?Be.coverTime+=U:(Be.coverTime=0,Be.blindFired=!1));let ut=we.current(),Mt=we.ammo[ut],Ft=H.weapons[ut],ii=Mt.mag<=Math.max(0,H.feedback.lowAmmoFrac)*Ft.mag&&(Ft.infiniteReserve>0||Mt.reserve>0);Be.thrown=Be.lastKettlebells>=0&&J.count<Be.lastKettlebells,Be.lastKettlebells=J.count;let Si=I?I.execution():null,tn=x.enemies.filter(Kn=>Kn.alive&&Kn.state!=="unused");return{blocked:Qe,device:r.device(),arena:m.arena,fightStarted:x.started,inCover:!!me,popped:!!me&&me.pop>=.5,coverTime:Be.coverTime,aimedKills:Be.aimedKills,blindFired:Be.blindFired,lowAmmo:ii,reloading:we.reload!==null,revving:ee.state==="rev",finishing:!!Si&&Si.kind==="stomp",thrown:Be.thrown,trainerSeen:tn.some(Kn=>Kn.kind==="trainer"),downedRep:tn.some(Kn=>Kn.state==="downed"&&Math.hypot(Kn.pos[0]-ee.pos[0],Kn.pos[2]-ee.pos[2])<12),saunaOpen:x.pads.some(Kn=>Kn.state==="open")}}function R_(){if(!x||!St)return null;let U=x.tobble,me=Yb({held:sn.tac,blocked:hi||Mn.open,objective:Xe(),tobble:U?{pos:U.pos,frac:U.hp/Math.max(H.tobble.health,1),downed:U.downed}:null});return me.show?(d.updateMatrixWorld(),{show:!0,items:me.items.map(Qe=>{De.set(Qe.pos[0],Qe.pos[1],Qe.pos[2]).project(d);let ut=Xb(De.x,De.y,De.z>1);return{id:Qe.id,kind:Qe.kind,label:Qe.label,x:ut.x,y:ut.y,off:ut.off,angle:ut.angle,frac:Qe.frac,down:Qe.down}})}):null}function C_(U,me){qy(U.dummy,me),U.dummy.alive&&!U.wasAlive&&U.view.respawn(),U.wasAlive=U.dummy.alive}let P_=[0,0,0];function I_(U){let me=H.weapons[U.id],Be=ee.cover?ee.cover.edge:null;Md(ee,Se,Q.yaw,H.combat,Fe);let Qe=Se==="blind"?v_(ht.dir,ge.drift()):ht.dir,ut=Wy({lens:ht.pos,view:Qe,muzzle:Fe,spreadDeg:U.spread,range:me.range,boxes:_,targets:F,ignoreBox:Be?Be.boxIndex:-1,rand:O,aimed:Se==="aim"}),Mt=ut.hit,Ft=Mt.target,ii=null;Ft&&(ii=x?x.hurt(Ft,F0(me,Mt.kind,U.mult),Mt.kind==="head"?"head":"body"):$y(Ft,F0(me,Mt.kind,U.mult))),ke=Mt.kind,Ie=Ft?Ft.id:"-",ce.push({t:j,kind:Mt.kind,target:Ft?Ft.id:null,point:Mt.point.slice(),stance:Se}),ce.length>oI&&ce.shift();let Si=[ut.dir[0],ut.dir[1],ut.dir[2]];if(ze.push({id:U.id,from:Fe.slice(),dir:Si,hit:Mt,target:Ft,result:ii,stance:Se}),Se==="blind"&&(fe.blindFired=!0),ii==="kill"&&!x){let tn=S.find(Kn=>Kn.dummy===Ft);tn.wasAlive=!1}}function L_(U){let me=H.weapons[U.id],Be=H.feedback,Qe=Ee.gunTip(P_);if(Q.kick(me.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*me.kickYaw),U.stance==="blind"){let Mt=Math.max(Be.blindShake,1);Q.kick(me.kickPitch*(Mt-1)*(.85+.3*Math.random()),(Math.random()*2-1)*(me.kickYaw*Mt+.4))}Ve.flash(Qe,U.dir),Ve.tracer(Qe,U.hit.point),_e.play(U.id==="regret"?"rifle":"pistol",Be.shotVolume);let ut=[-U.dir[0],-U.dir[1],-U.dir[2]];if(U.hit.kind==="world")Ve.spark(U.hit.point,ut);else if(U.target){let Mt=x?C.get(U.target):S.find(Ft=>Ft.dummy===U.target).view;U.result==="kill"?(x?(Mt.death(),w.addPickup(U.target.pos)):Mt.burst(),Ve.gel(U.hit.point,ut,Be.killGelCount),Ve.receipts(U.target.pos.map((Ft,ii)=>ii===1?Ft+1.2:Ft),Be.receiptCount),D="kill",E=Be.killMarkerTime,U.stance==="aim"&&fe.aimedKills++,_e.play("kill",Be.killVolume)):U.result==="down"?(Ve.gel(U.hit.point,ut,Be.gelCount),D="kill",E=Be.killMarkerTime,_e.play("hit",Be.hitVolume)):(x||Mt.hit(U.hit.kind),Ve.gel(U.hit.point,ut),D=U.hit.kind,E=Be.hitMarkerTime,x&&U.hit.kind==="head"&&Le("PR!","pr",.9,0),_e.play(U.hit.kind==="head"?"head":"hit",Be.hitVolume))}}let k_=Du({timeScale:U=>St?qe.scale(U):1,before(U){et=r.poll();let me=Mn.open;Mn.pad(U);let Be=me||Mn.open;if(!Be&&et.pressed.pause&&!hi&&!pt?lf():!Be&&et.pressed.controls&&!hi&&!pt&&N_(),Aa){let Mt=et.held;if(sf.some(Ft=>Mt[Ft]))for(let Ft of sf)Mt[Ft]=!1,et.pressed[Ft]=!1;else Aa=!1}if(Be)for(let Mt of sf)et.pressed[Mt]=!1;Object.values(et.pressed).some(Boolean)&&(q=!0);let Qe=!!pt||Ht;if(St=!Be&&!Mn.open&&(Qe||tI({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()})),a.hidden=St||Be||Mn.open,!St){re.reset(),He.reset(),dt.cover=!1,dt.fire=!1,dt.reload=!1,dt.weapon=null,dt.interact=!1,dt.melee=!1,dt.objective=!1,dt.equip=!1,dt.switched=!1;return}let ut=Math.min(U,tf);Kt=et.held.aim||pt&&pt.aim,Q.look(et.lookDX*ie.mouseSens,et.lookDY*ie.mouseSens,et.lookX,et.lookY,ut,Kt,be*ie.padSens),et.pressed.cover&&(dt.cover=!0),et.pressed.fire&&(dt.fire=!0),et.pressed.reload&&(dt.reload=!0),et.pressed.interact&&(dt.interact=!0),et.pressed.melee&&(dt.melee=!0),et.pressed.objective&&(dt.objective=!0),et.pressed.equipKb&&(dt.equip=!0);for(let[Mt,Ft]of _s)et.pressed[Mt]&&(dt.weapon=Ft,Ft!==2&&(dt.switched=!0))},step(U){if(!St)return;let me=M_(H.cover);me!==$&&($=me,ee.coverEdges=B()),j+=U;let Be=Nt(U);if(iI(Be,en,{downed:!!x&&K.downed,busy:we.reload!==null||we.switching>0}),(m.fading||Ne.locked)&&(Be.moveX=0,Be.moveY=0,Be.tap=!1,Be.sprint=!1,Be.fire=!1,Be.grenade=!1,en.fire=!1,en.firePressed=!1),I){let ut=Ne.locked;I.step(U,{meleeHeld:sn.melee&&!ut,meleePressed:gn.melee&&!ut,grenadeHeld:sn.grenade&&!ut,interactHeld:sn.interact&&!ut,interactPressed:gn.interact&&!ut,objectivePressed:gn.objective&&!ut,equipPressed:gn.equip&&!ut,switched:gn.switched,aimHeld:!!Be.aim&&!ut,firePressed:en.firePressed&&!ut,device:r.device(),camYaw:Q.yaw,camPitch:Q.pitch}),I.equipped()&&(Be.grenade=I.grenadeIntent()&&!m.fading&&!ut,en.reload=!1,en.fire=!1,en.firePressed=!1,Be.fire=!1),I.busy()&&(en.fire=!1,en.firePressed=!1,Be.fire=!1)}ee.update(Be,U),Se=Vy(ee),ge.update(U,Se==="blind");let Qe=we.update(en,Se,U);for(let ut of Qe)Mc(ut);T_(U),x&&(w.tick(U),it(U),le(U));for(let ut of S)C_(ut,U);if(Ky(ee.pos,p.ammoCrates,H.combat.crateRadius)){let ut=we.ammo.regret.reserve;we.refill(),J.refill();let Mt=Math.round(we.ammo.regret.reserve-ut);Mt>0&&Le(`+${Mt} scoops`,"scoops",1.4,1)}Me&&_c(),x&&Re&&!m.fading&&Qx(p.exit,ee.pos)&&m.touchGate()&&_e.play("clear",H.feedback.killVolume)},render(U,me,Be=1){let Qe=St?Math.min(me*Be,tf):0;for(let Cn of m.step(Math.min(me,tf)))Cn.type==="swap"&&(Ni(Cn.to),Le("Progress photo saved.","photo",2.6,2));N>0&&St&&(N=Math.max(0,N-Qe)),ae&&ae.t>0&&(ae.t-=Qe),D_(m.fade),$e.shot=ze.length>0,$e.dir=ht.dir,$e.stance=Se,$e.weapon=we.current(),$e.kettlebell=!!I&&I.handKb(),$e.blindDrift=ge.drift(),Ee.update(U,Qe,$e);for(let Cn of S)Cn.view.update(Qe);for(let Cn of b)Cn.update(U,Qe);w&&(w.update(Qe),L.update(x.grenades.live,U,Qe,x.lobMarkers),R.update(Qe),k&&(k.group.visible=!!x.tobble,x.tobble&&k.update(U,Qe)));let ut=ee.pos,Mt=ee.prevPos;for(let Cn=0;Cn<3;Cn++)It[Cn]=Mt[Cn]+(ut[Cn]-Mt[Cn])*U;ee.slams>ct&&(ct=ee.slams,E_());let Ft=k0(ee);if(Ft==="aim"&&Ut!=="aim"){let Cn=ee.cover?ee.cover.edge:null;Q.hold(Gn(ht.pos,ht.dir,H.camera.holdRange,_,F,{ignoreBox:Cn?Cn.boxIndex:-1}).point)}Ut=Ft,vn=eo(ee);let ii=I?I.status():hn,Si=H.feedback;St&&(ii.grinding?Q.sustain({shake:Si.grindShake,fov:-Si.grindZoom,pull:Si.grindPull}):ii.revving&&Q.sustain({shake:Si.revShake}),Se==="blind"&&Vt.fire&&Q.sustain({shake:Si.blindShakeAmp}),pe-=Qe,pe<=0&&ii.revving&&r.device()==="pad"&&(pe=.1,Ke.pulse(Si.revRumble,.12)));let tn=Q.update(Qe,{target:It,mode:Ut,side:vn},_);ht.pos[0]=tn.pos[0],ht.pos[1]=tn.pos[1],ht.pos[2]=tn.pos[2],ht.fov=tn.fov,ht.dir[0]=tn.dir[0],ht.dir[1]=tn.dir[1],ht.dir[2]=tn.dir[2],d.fov!==tn.fov&&(d.fov=tn.fov,d.updateProjectionMatrix()),Ee.fadeHeadFor(tn.pos,H.camera.headHideDist,H.camera.headHideMargin),d.position.set(tn.pos[0],tn.pos[1],tn.pos[2]),d.lookAt(tn.pos[0]+tn.dir[0],tn.pos[1]+tn.dir[1],tn.pos[2]+tn.dir[2]),hi&&F_(me);for(let Cn of ze)L_(Cn);ze.length=0,Ve.update(Qe),E-=Qe,E<=0&&(D=null),We&&(st+=Qe,st>=H.feedback.reloadResultTime&&(We=null));let Kn=ee.cover?ee.cover.edge:null,U_=Gn(ht.pos,ht.dir,100,_,F,{ignoreBox:Kn?Kn.boxIndex:-1});be=r.device()==="pad"&&U_.target?H.look.pad.assist:1;let cf=null;St&&Si.coverGlow>0&&!K.downed&&!m.fading&&(ee.state==="move"||ee.state==="sprint")&&(vd(ee,{moveX:Vt.moveX,moveY:Vt.moveY,camYaw:Q.yaw},Wt),cf=fa(ee.coverEdges,_,ee.pos,Wt,Q.yaw,H.cover,H.move.radius)),de=cf,Ue.update(St?Qe:Math.min(me,tf),cf),Ae=ye.step(Qe,A_(Qe)),Z=R_();let Lm=!!ee.cover&&ee.cover.pop<.5,B_=Se||(ee.cover&&(ee.cover.pop>0||Lm)?"aim":"hip"),km=x?o_({hp:K.hp,max:H.health.max,downed:K.downed,downT:K.downT,hits:se,now:j}):null;Te.render(Jy({arsenal:we,stance:Se,firing:Vt.fire,covered:Lm,device:r.device(),spreadDeg:we.spreadOf(B_),fov:d.fov,viewportH:t.clientHeight||window.innerHeight,marker:D,reloadFlash:We,face:km,bark:w?w.bark():null,objective:x?Ze():"",boss:bt(),ending:Ct(),pop:ae&&ae.t>0?ae:null,banner:x?K.downed?{title:`You've hit a plateau ${km.downed.seconds}`,hint:Jr(x.tobble&&!x.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:I.giveUpFrac()}:x.clear&&!x.boss?{title:"SET COMPLETE",hint:`${m.gateOpen?"Head for the GO gate!  ":"Rest 60 seconds!  "}${r.device()==="pad"?"X":"E"} for another set`}:null:null,grenades:x?J.count:null,action:Ne.state==="desk"&&Am(ee.pos,p.overlord&&p.overlord.desk,H.ending.deskReach)?{text:Jr("cancel",r.device()),hold:Ne.hold}:I?I.prompt():null,hours:N>0?p0(m.checkpoint):"",hint:Ae,tac:Z})),u.update(performance.now()/1e3),v.update(Qe),s.render(h,d),dn=s.info.render.calls,Ms=s.info.render.triangles,Lt++,li+=me,li>=1&&(nt=Lt/li,bn=li/Lt*1e3,Lt=0,li=0),wi+=me,wi>=.1&&(wi=0,fn()),i.frameDone(me*1e3)}});n&&n.has("tune")&&c.toggle();let nf=document.createElement("div");nf.id="cr-fade",document.body.appendChild(nf);let Cm=-1;function D_(U){let me=Math.round(U*100);me!==Cm&&(Cm=me,nf.style.opacity=(me/100).toFixed(2))}let sf=["cover","fire","aim","melee","interact","grenade","reload","sprint","objective","equipKb","tacCom","controls"],Aa=!1,hi=!1,rf=0,Pm=oy(Oe),of=()=>{try{document.exitPointerLock&&document.exitPointerLock()}catch{}};function af(){Aa=!0,hi=!1,r.requestLock()}function lf(){Mn.open||hi||(of(),Mn.showPause())}function N_(){Mn.open||hi||(of(),Mn.showControls())}function Im(){m.restart(),Ne.reset(),Ni(On[0]),N=0,ae=null,hi=!0,of(),Mn.showTitle()}let Mn=py({settings:ie,saved:()=>dd(Oe),arenaTitle:U=>ud[On[U]]||"",onSettings(U){ie=U,Ce(),g0(Oe,ie)},actions:{continue(){m.goTo(dd(Oe)),Ni(m.arena),af()},newRun(){m.newRun(),Ni(On[0]),Pm?af():(Pm=!0,ay(Oe),hi=!1,Mn.showIntro(af))},back(){window.location.href="../../index.html"},resume(){Aa=!0,r.requestLock()},restart(){Ea(),Aa=!0,r.requestLock()},quit(){Im()},resetTutorial(){ye.reset()}}});l.toTitle=()=>{m.newRun(),Im()},document.addEventListener("pointerlockchange",()=>{r.isLocked()||Mn.open||hi||l.panelOpen()||pt||r.device()!=="pad"&&lf()});let O_=()=>_.find(U=>U.kind==="floor");function F_(U){rf+=U*H.run.attractSpeed;let me=O_();if(!me)return;let Be=(me.min[0]+me.max[0])/2,Qe=(me.min[2]+me.max[2])/2,ut=(me.max[0]-me.min[0])/2+H.run.attractMargin,Mt=(me.max[2]-me.min[2])/2*.8+H.run.attractMargin;d.position.set(Be+Math.cos(rf)*ut,H.run.attractHeight,Qe+Math.sin(rf)*Mt),d.lookAt(Be,1,Qe)}ot.menu=()=>({open:Mn.open,screen:Mn.screen,items:Mn.items(),onTitle:hi,settings:{...ie}}),ot.menuChoose=U=>Mn.choose(U),ot.pause=()=>lf(),ot.setSettings=U=>{ie={...ie,...U},Ce(),g0(Oe,ie)},f.name!=="greyRoom"&&f.jumped?(m.goTo(m0(f.name)),Ni(f.name)):Ni(f.name==="greyRoom"?"greyRoom":On[0]),sI(n)&&(hi=!0,N=0,Mn.showTitle()),et=r.poll(),Q.update(0,{target:M.pos,mode:"normal",side:1},_),fn(),k_.start()}var cI={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function Rm(t,e){window.__cr.error={kind:t,detail:e||""},document.documentElement.dataset.crError=t;let n=document.getElementById("cr-error");n&&(n.textContent="",n.appendChild(document.createTextNode(cI[t])),t==="boot"&&e&&(n.appendChild(document.createElement("br")),n.appendChild(document.createTextNode(e))),n.hidden=!1)}window.addEventListener("error",t=>{window.__cr.error||Rm("boot",t.message)});function hI(){let t=document.getElementById("cr-canvas"),e=t.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){Rm("webgl");return}let n=new URLSearchParams(location.search);n.has("look")?Cx({canvas:t,gl:e}):S_({canvas:t,gl:e,params:n}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{hI()}catch(t){Rm("boot",t&&t.message)}})();

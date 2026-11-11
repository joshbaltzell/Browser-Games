/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var vu=0,rc=1,yu=2;var Er=1,Mu=2,Rs=3,yi=0,Ne=1,vn=2,$i=0,Cs=1,oc=2,ac=3,lc=4,Su=5;var Zi=100,bu=101,wu=102,Eu=103,Tu=104,Au=200,Ru=201,Cu=202,Pu=203,cc=204,hc=205,Iu=206,Lu=207,Du=208,Nu=209,Uu=210,Fu=211,Ou=212,Bu=213,ku=214,Mo=0,So=1,bo=2,vs=3,wo=4,Eo=5,To=6,Ao=7,uc=0,zu=1,Hu=2,On=0,dc=1,fc=2,pc=3,mc=4,gc=5,_c=6,xc=7;var vc=300,Ji=301,Ps=302,ra=303,oa=304,Ro=1e3,Nn=1001,Co=1002,ke=1003,Gu=1004;var Tr=1005;var Qe=1006,aa=1007;var ti=1008;var un=1009,yc=1010,Mc=1011,Is=1012,la=1013,Rn=1014,Cn=1015,Pn=1016,ca=1017,ha=1018,Ki=1020,Sc=35902,bc=35899,wc=1021,Ec=1022,In=1023,jn=1026,ei=1027,Tc=1028,ua=1029,Mi=1030,da=1031;var fa=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,pa=35840,ma=35841,ga=35842,_a=35843,xa=36196,va=37492,ya=37496,Ma=37488,Sa=37489,Ir=37490,ba=37491,wa=37808,Ea=37809,Ta=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,Ia=37815,La=37816,Da=37817,Na=37818,Ua=37819,Fa=37820,Oa=37821,Ba=36492,ka=36494,za=36495,Ha=36283,Ga=36284,Lr=36285,Va=36286;var Qs=2300,Po=2301,vo=2302,Jl=2303,Kl=2400,jl=2401,Ql=2402;var Vu=3200;var Ac=0,Wu=1,ni="",He="srgb",tr="srgb-linear",er="linear",me="srgb";var yo=7680;var Xu=519,Yu=512,qu=513,$u=514,Rc=515,Zu=516,Ju=517,Cc=518,Pc=519,Ku=35044,Ls=35048;var Ic="300 es",mn=2e3,nr=2001;function lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){let i=ir("canvas");return i.style.display="block",i}var Xh={},ys=null;function Lc(...i){let t="THREE."+i.shift();ys?ys("log",t,...i):console.log(t,...i)}function Qu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Qu(i);let t="THREE."+i.shift();if(ys)ys("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=Qu(i);let t="THREE."+i.shift();if(ys)ys("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $s(...i){let t=i.join(" ");t in Xh||(Xh[t]=!0,jt(...i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ed={[Mo]:Mo,[bo]:To,[wo]:wo,[vs]:Eo,[So]:So,[To]:bo,[Ao]:Ao,[Eo]:vs},Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,Zs=Math.PI/180,Ms=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function Dc(i,t){return(i%t+t)%t}function hp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function up(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function dp(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function fp(i,t=1){return t-Math.abs(Dc(i,t*2)-t)}function pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _p(i,t){return i+Math.random()*(t-i)}function xp(i){return i*(.5-Math.random())}function vp(i){i!==void 0&&(Yh=i);let t=Yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(i){return i*Zs}function Mp(i){return i*Ms}function Sp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nd(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function id(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Wa={DEG2RAD:Zs,RAD2DEG:Ms,generateUUID:ji,clamp:oe,euclideanModulo:Dc,mapLinear:hp,inverseLerp:up,lerp:Js,damp:dp,pingpong:fp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:_p,randFloatSpread:xp,seededRandom:vp,degToRad:yp,radToDeg:Mp,isPowerOfTwo:Sp,ceilPowerOfTwo:bp,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:wp,normalize:id,denormalize:nd},Hc=class Hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hc.prototype.isVector2=!0;var Pt=Hc,tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);m=Math.sin(m*v)/w,a=Math.sin(a*v)/w,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gc=class Gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gc.prototype.isVector3=!0;var N=Gc,Rl=new N,qh=new tn,Vc=class Vc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],w=s[4],y=s[7],b=s[2],T=s[5],_=s[8];return r[0]=o*x+a*v+l*b,r[3]=o*g+a*w+l*T,r[6]=o*m+a*y+l*_,r[1]=c*x+h*v+d*b,r[4]=c*g+h*w+d*T,r[7]=c*m+h*y+d*_,r[2]=u*x+f*v+p*b,r[5]=u*g+f*w+p*T,r[8]=u*m+f*y+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vc.prototype.isMatrix3=!0;var ee=Vc,Cl=new ee,$h=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:me,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var he=Ep();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=ir("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tp=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Ap=0,Il=new N,en=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Qe,o=ti,a=In,l=un,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ji(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=vc;en.DEFAULT_ANISOTROPY=1;var Wc=class Wc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,b=(m+1)/2,T=(h+u)/4,_=(d+x)/4,S=(p+g)/4;return w>y&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=_/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=S/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;var Re=Wc,Lo=class extends Un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new en({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sa=class sa{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,x,g)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rp,t,Cp)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ci.crossVectors(n,an),ci.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ci.crossVectors(n,an)),ci.normalize(),Jr.crossVectors(an,ci),s[0]=ci.x,s[4]=Jr.x,s[8]=an.x,s[1]=ci.y,s[5]=Jr.y,s[9]=an.y,s[2]=ci.z,s[6]=Jr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],w=n[7],y=n[11],b=n[15],T=s[0],_=s[4],S=s[8],R=s[12],C=s[1],L=s[5],F=s[9],V=s[13],P=s[2],H=s[6],q=s[10],O=s[14],it=s[3],G=s[7],z=s[11],k=s[15];return r[0]=o*T+a*C+l*P+c*it,r[4]=o*_+a*L+l*H+c*G,r[8]=o*S+a*F+l*q+c*z,r[12]=o*R+a*V+l*O+c*k,r[1]=h*T+d*C+u*P+f*it,r[5]=h*_+d*L+u*H+f*G,r[9]=h*S+d*F+u*q+f*z,r[13]=h*R+d*V+u*O+f*k,r[2]=p*T+x*C+g*P+m*it,r[6]=p*_+x*L+g*H+m*G,r[10]=p*S+x*F+g*q+m*z,r[14]=p*R+x*V+g*O+m*k,r[3]=v*T+w*C+y*P+b*it,r[7]=v*_+w*L+y*H+b*G,r[11]=v*S+w*F+y*q+b*z,r[15]=v*R+w*V+y*O+b*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*f-c*u,w=a*f-c*d,y=a*u-l*d,b=o*f-c*h,T=o*u-l*h,_=o*d-a*h;return e*(x*v-g*w+m*y)-n*(p*v-g*b+m*T)+s*(p*w-x*b+m*_)-r*(p*y-x*T+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*a-n*o,w=e*l-s*o,y=e*c-r*o,b=n*l-s*a,T=n*c-r*a,_=s*c-r*l,S=h*x-d*p,R=h*g-u*p,C=h*m-f*p,L=d*g-u*x,F=d*m-f*x,V=u*m-f*g,P=v*V-w*F+y*L+b*C-T*R+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(a*V-l*F+c*L)*H,t[1]=(s*F-n*V-r*L)*H,t[2]=(x*_-g*T+m*b)*H,t[3]=(u*T-d*_-f*b)*H,t[4]=(l*C-o*V-c*R)*H,t[5]=(e*V-s*C+r*R)*H,t[6]=(g*y-p*_-m*w)*H,t[7]=(h*_-u*y+f*w)*H,t[8]=(o*F-a*C+c*S)*H,t[9]=(n*C-e*F-r*S)*H,t[10]=(p*T-x*y+m*v)*H,t[11]=(d*y-h*T-f*v)*H,t[12]=(a*R-o*L-l*S)*H,t[13]=(e*L-n*R+s*S)*H,t[14]=(x*w-p*b-g*v)*H,t[15]=(h*b-d*w+u*v)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,v=l*c,w=l*h,y=l*d,b=n.x,T=n.y,_=n.z;return s[0]=(1-(x+m))*b,s[1]=(f+y)*b,s[2]=(p-w)*b,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+w)*_,s[9]=(g-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=os.set(s[0],s[1],s[2]).length(),a=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);let c=1/o,h=1/a,d=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,e.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===mn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===nr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===mn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===nr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sa.prototype.isMatrix4=!0;var de=sa,os=new N,wn=new de,Rp=new N(0,0,0),Cp=new N(1,1,1),ci=new N,Jr=new N,an=new N,Jh=new de,Kh=new tn,sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pp=0,jh=new N,as=new tn,Yn=new de,Kr=new N,Vs=new N,Ip=new N,Lp=new tn,Qh=new N(1,0,0),tu=new N(0,1,0),eu=new N(0,0,1),nu={type:"added"},Dp={type:"removed"},ls={type:"childadded",child:null},Ll={type:"childremoved",child:null},gn=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new sn,n=new tn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new ee}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Vs,Kr,this.up):Yn.lookAt(Kr,Vs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Yn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),ls.child=t,this.dispatchEvent(ls),ls.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dp),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new N(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Np={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Dc(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dl(o,r,t+1/3),this.g=Dl(o,r,t),this.b=Dl(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return he.workingToColorSpace(Ye.copy(this),t),Math.round(oe(Ye.r*255,0,255))*65536+Math.round(oe(Ye.g*255,0,255))*256+Math.round(oe(Ye.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=He){he.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(jr);let n=Js(hi.h,jr.h,e),s=Js(hi.s,jr.s,e),r=Js(hi.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Jt;Jt.NAMES=sd;var Hi=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},En=new N,qn=new N,Nl=new N,$n=new N,cs=new N,hs=new N,iu=new N,Ul=new N,Fl=new N,Ol=new N,Bl=new Re,kl=new Re,zl=new Re,pi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),qn.subVectors(n,e),Nl.subVectors(t,e);let o=En.dot(En),a=En.dot(qn),l=En.dot(Nl),c=qn.dot(qn),h=qn.dot(Nl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),zl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),qn.subVectors(t,e),En.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),hs.subVectors(r,n),Ul.subVectors(t,n);let l=cs.dot(Ul),c=hs.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,s);let h=cs.dot(Fl),d=hs.dot(Fl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);Ol.subVectors(t,r);let f=cs.dot(Ol),p=hs.dot(Ol);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(hs,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return iu.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(iu,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),to.subVectors(this.max,Ws),us.subVectors(t.a,Ws),ds.subVectors(t.b,Ws),fs.subVectors(t.c,Ws),ui.subVectors(ds,us),di.subVectors(fs,ds),Fi.subVectors(us,fs);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,di.z,0,-di.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Fi.y,Fi.x,0];return!Hl(e,us,ds,fs,to)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,us,ds,fs,to))?!1:(eo.crossVectors(ui,di),e=[eo.x,eo.y,eo.z],Hl(e,us,ds,fs,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Qr=new mi,us=new N,ds=new N,fs=new N,ui=new N,di=new N,Fi=new N,Ws=new N,to=new N,eo=new N,Oi=new N;function Hl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var De=new N,no=new Pt,Up=0,Se=class extends Un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Up++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=t!==void 0?Uc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):id(t,this.array)}};var or=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ar=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fp=new mi,Xs=new N,Gl=new N,Fn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Gl)),this.expandByPoint(Xs.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Op=0,pn=new de,Vl=new gn,ps=new N,ln=new mi,Ys=new mi,Be=new N,we=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lp(t)?ar:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,Ys.min),ln.expandByPoint(Be),Be.addVectors(ln.max,Ys.max),ln.expandByPoint(Be)):(ln.expandByPoint(Ys.min),ln.expandByPoint(Ys.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),Be.add(ps)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Se(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;let h=new N,d=new N,u=new N,f=new Pt,p=new Pt,x=new Pt,g=new N,m=new N;function v(R,C,L){c[R]=c[C]=c[L]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,L),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(F),a[R].add(g),a[C].add(g),a[L].add(g),l[R].add(m),l[C].add(m),l[L].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,C=w.length;R<C;++R){let L=w[R],F=L.start,V=L.count;for(let P=F,H=F+V;P<H;P+=3)v(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new N,b=new N,T=new N,_=new N;function S(R){T.fromBufferAttribute(s,R),_.copy(T);let C=a[R];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),b.crossVectors(_,C);let F=b.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,F)}for(let R=0,C=n.count;R<C;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Se(u,h,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wl=new N,Bp=new N,kp=new ee,An=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wl.subVectors(n,e).cross(Bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kp.getNormalMatrix(t),s=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zp=0,Gi=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Cs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=hc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Jn=new N,Xl=new N,io=new N,so=new N,No=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),so.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xl).addScaledVector(io,u),f}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),b=Math.abs(c),T=Math.abs(h),_,S,R,C,L,F,V,P,H,q,O,it;if(y>=b&&y>=T?(R=l,F=d,H=p,it=m,l>=0?(_=c,S=h,C=u,L=f,V=x,P=g,q=v,O=w):(_=h,S=c,C=f,L=u,V=g,P=x,q=w,O=v)):b>=T?(R=c,F=u,H=x,it=v,c>=0?(_=h,S=l,C=f,L=d,V=g,P=p,q=w,O=m):(_=l,S=h,C=d,L=f,V=p,P=g,q=m,O=w)):(R=h,F=f,H=g,it=w,h>=0?(_=l,S=c,C=d,L=u,V=p,P=x,q=m,O=v):(_=c,S=l,C=u,L=d,V=x,P=p,q=v,O=m)),R===0)return null;let G=_/R,z=S/R,k=1/R,ct=C-G*F,gt=L-z*F,Y=V-G*H,ft=P-z*H,It=q-G*it,kt=O-z*it,$=It*ft-kt*Y,wt=ct*kt-gt*It,Et=Y*gt-ft*ct;if(s){if($<0||wt<0||Et<0)return null}else if(($<0||wt<0||Et<0)&&($>0||wt>0||Et>0))return null;let bt=$+wt+Et;if(bt===0)return null;let Yt=k*($*F+wt*H+Et*it);return(bt>0?Yt<0:Yt>0)?null:this.at(Yt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vi=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},su=new de,Bi=new No,ro=new Fn,ru=new N,oo=new N,ao=new N,lo=new N,Yl=new N,co=new N,ou=new N,ho=new N,ge=class extends gn{constructor(t=new we,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Yl.fromBufferAttribute(d,t),o?co.addScaledVector(Yl,h):co.addScaledVector(Yl.sub(e),h))}e.add(co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(ro.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ro,ru)===null||Bi.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,b=w;y<b;y+=3){let T=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);s=uo(this,m,t,n,c,h,d,T,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),w=a.getX(g+1),y=a.getX(g+2);s=uo(this,o,t,n,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,b=w;y<b;y+=3){let T=y,_=y+1,S=y+2;s=uo(this,m,t,n,c,h,d,T,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,w=g+1,y=g+2;s=uo(this,o,t,n,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Hp(i,t,e,n,s,r,o,a){let l;if(t.side===Ne?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===yi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(c,lo);let h=Hp(i,t,e,n,oo,ao,lo,ou);if(h){let d=new N;pi.getBarycoord(ou,oo,ao,lo,d),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,d,new Pt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,d,new Pt)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};pi.getNormal(oo,ao,lo,u.normal),h.face=u,h.barycoord=d}return h}var Uo=class extends en{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,h=ke,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=new Fn,Gp=new Pt(.5,.5),fo=new N,Wi=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],w=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,m-p,b-v).normalize(),s[1].setComponents(c+o,f+h,m+p,b+v).normalize(),s[2].setComponents(c+a,f+d,m+x,b+w).normalize(),s[3].setComponents(c-a,f-d,m-x,b-w).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,m-g,b-y).normalize();else if(s[4].setComponents(c-l,f-u,m-g,b-y).normalize(),e===mn)s[5].setComponents(c+l,f+u,m+g,b+y).normalize();else if(e===nr)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=Gp.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},au=new de,Fo=class i{constructor(){this.coordinateSystem=mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];au.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Wi),n[s].setFromProjectionMatrix(au,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Wi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var lr=class extends en{constructor(t=[],e=Ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cr=class extends en{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends en{constructor(t,e,n=Rn,s,r,o,a=ke,l=ke,c,h=jn,d=1){if(h!==jn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},hr=class extends Qn{constructor(t,e=Rn,n=Ji,s,r,o=ke,a=ke,l,c=jn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ur=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rn=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function p(x,g,m,v,w,y,b,T,_,S,R){let C=y/_,L=b/S,F=y/2,V=b/2,P=T/2,H=_+1,q=S+1,O=0,it=0,G=new N;for(let z=0;z<q;z++){let k=z*L-V;for(let ct=0;ct<H;ct++){let gt=ct*C-F;G[x]=gt*v,G[g]=k*w,G[m]=P,c.push(G.x,G.y,G.z),G[x]=0,G[g]=0,G[m]=T>0?1:-1,h.push(G.x,G.y,G.z),d.push(ct/_),d.push(1-z/S),O+=1}}for(let z=0;z<S;z++)for(let k=0;k<_;k++){let ct=u+k+H*z,gt=u+k+H*(z+1),Y=u+(k+1)+H*(z+1),ft=u+(k+1)+H*z;l.push(ct,gt,ft),l.push(gt,Y,ft),it+=6}a.addGroup(f,it,R),f+=it,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _n=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function v(){let y=new N,b=new N,T=0,_=(e-t)/n;for(let S=0;S<=r;S++){let R=[],C=S/r,L=C*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,P=V*l+a,H=Math.sin(P),q=Math.cos(P);b.x=L*H,b.y=-C*n+g,b.z=L*q,d.push(b.x,b.y,b.z),y.set(H,_,q).normalize(),u.push(y.x,y.y,y.z),f.push(V,1-C),R.push(p++)}x.push(R)}for(let S=0;S<s;S++)for(let R=0;R<r;R++){let C=x[R][S],L=x[R+1][S],F=x[R+1][S+1],V=x[R][S+1];(t>0||R!==0)&&(h.push(C,L,V),T+=3),(e>0||R!==r-1)&&(h.push(L,F,V),T+=3)}c.addGroup(m,T,0),m+=T}function w(y){let b=p,T=new Pt,_=new N,S=0,R=y===!0?t:e,C=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let L=p;for(let F=0;F<=s;F++){let P=F/s*l+a,H=Math.cos(P),q=Math.sin(P);_.x=R*q,_.y=g*C,_.z=R*H,d.push(_.x,_.y,_.z),u.push(0,C,0),T.x=H*.5+.5,T.y=q*.5*C+.5,f.push(T.x,T.y),p++}for(let F=0;F<s;F++){let V=b+F,P=L+F;y===!0?h.push(P,P+1,V):h.push(P+1,P,V),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new de;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ws=class extends nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oo=class extends ws{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var lu=new N,cu=new N,ql=new Fc,$l=new Fc,Zl=new Fc,Bo=class extends nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(cu.subVectors(s[0],s[1]).add(s[0]),c=cu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),ql.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),$l.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Zl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(ql.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),$l.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Zl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ql.calc(l),$l.calc(l),Zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Vp(i,t){let e=1-i;return e*e*t}function Wp(i,t){return 2*(1-i)*i*t}function Xp(i,t){return i*i*t}function Ks(i,t,e,n){return Vp(i,t)+Wp(i,e)+Xp(i,n)}function Yp(i,t){let e=1-i;return e*e*e*t}function qp(i,t){let e=1-i;return 3*e*e*i*t}function $p(i,t){return 3*(1-i)*i*i*t}function Zp(i,t){return i*i*i*t}function js(i,t,e,n,s){return Yp(i,t)+qp(i,e)+$p(i,n)+Zp(i,s)}var dr=class extends nn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ko=class extends nn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fr=class extends nn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends nn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends nn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mr=class extends nn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y),Ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(hu(a,l.x,c.x,h.x,d.x),hu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},Ho=Object.freeze({__proto__:null,ArcCurve:Oo,CatmullRomCurve3:Bo,CubicBezierCurve:dr,CubicBezierCurve3:ko,EllipseCurve:ws,LineCurve:fr,LineCurve3:zo,QuadraticBezierCurve:pr,QuadraticBezierCurve3:mr,SplineCurve:gr}),Go=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ho[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xi=class extends Go{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fr(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pr(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new dr(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new gr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ws(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Es=class extends Xi{constructor(t){super(t),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xi().fromJSON(s))}return this}};function Jp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=rd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=em(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return _r(r,o,e,a,l,c,0),o}function rd(i,t,e,n,s){let r;if(s===dm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=uu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=uu(o/n|0,i[o],i[o+1],r);return r&&Ts(r,r.next)&&(vr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ts(e,e.next)||Te(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _r(i,t,e,n,s,r,o){if(!i)return;!o&&r&&om(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?jp(i,n,s,r):Kp(i)){t.push(l.i,i.i,c.i),vr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qp(Yi(i),t),_r(i,t,e,n,s,r,2)):o===2&&tm(i,t,e,n,s,r):_r(Yi(i),t,e,n,s,r,1);break}}}function Kp(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&qs(s,a,r,l,o,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function jp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),g=Math.max(h,d,u),m=tc(f,p,t,e,n),v=tc(x,g,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=m&&y&&y.z<=v;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&qs(a,h,l,d,c,u,w.x,w.y)&&Te(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&qs(a,h,l,d,c,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&qs(a,h,l,d,c,u,w.x,w.y)&&Te(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&qs(a,h,l,d,c,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ts(n,s)&&ad(n,e,e.next,s)&&xr(n,s)&&xr(s,n)&&(t.push(n.i,e.i,s.i),vr(e),vr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function tm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let l=ld(o,a);o=Yi(o,o.next),l=Yi(l,l.next),_r(o,t,e,n,s,r,0),_r(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function em(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=rd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lm(c))}s.sort(nm);for(let r=0;r<s.length;r++)e=im(s[r],e);return e}function nm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function im(i,t){let e=sm(i,t);if(!e)return t;let n=ld(e,i);return Yi(n,n.next),Yi(e,e.next)}function sm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ts(i,e))return e;do{if(Ts(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&od(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);xr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&rm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function rm(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function om(i,t,e,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,am(s)}function am(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function tc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function od(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&od(i,t,e,n,s,r,o,a)}function cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hm(i,t)&&(xr(i,t)&&xr(t,i)&&um(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Ts(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ts(i,t){return i.x===t.x&&i.y===t.y}function ad(i,t,e,n){let s=mo(Te(i,t,e)),r=mo(Te(i,t,n)),o=mo(Te(e,n,i)),a=mo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&po(i,e,t)||r===0&&po(i,n,t)||o===0&&po(e,i,n)||a===0&&po(e,t,n))}function po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mo(i){return i>0?1:i<0?-1:0}function hm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function um(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ld(i,t){let e=ec(i.i,i.x,i.y),n=ec(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uu(i,t,e,n){let s=ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var nc=class{static triangulate(t,e,n=2){return Jp(t,e,n)}},zi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];du(t),fu(n,t);let o=t.length;e.forEach(du);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,fu(n,e[l]);let a=nc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function du(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yr=class i extends we{constructor(t=new Es([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:fm,w,y=!1,b,T,_,S;if(m){w=m.getSpacedPoints(h),y=!0,u=!1;let et=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,et),T=new N,_=new N,S=new N}u||(g=0,f=0,p=0,x=0);let R=a.extractPoints(c),C=R.shape,L=R.holes;if(!zi.isClockWise(C)){C=C.reverse();for(let et=0,ht=L.length;et<ht;et++){let mt=L[et];zi.isClockWise(mt)&&(L[et]=mt.reverse())}}function V(et){let mt=10000000000000001e-36,dt=et[0];for(let rt=1;rt<=et.length;rt++){let Nt=rt%et.length,Lt=et[Nt],zt=Lt.x-dt.x,$t=Lt.y-dt.y,Kt=zt*zt+$t*$t,D=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(dt.x),Math.abs(dt.y)),at=mt*D*D;if(Kt<=at){et.splice(Nt,1),rt--;continue}dt=Lt}}V(C),L.forEach(V);let P=L.length,H=C;for(let et=0;et<P;et++){let ht=L[et];C=C.concat(ht)}function q(et,ht,mt){return ht||te("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ht,mt)}let O=C.length;function it(et,ht,mt){let dt,rt,Nt,Lt=et.x-ht.x,zt=et.y-ht.y,$t=mt.x-et.x,Kt=mt.y-et.y,D=Lt*Lt+zt*zt,at=Lt*Kt-zt*$t;if(Math.abs(at)>Number.EPSILON){let Tt=Math.sqrt(D),Vt=Math.sqrt($t*$t+Kt*Kt),st=ht.x-zt/Tt,ne=ht.y+Lt/Tt,Ut=mt.x-Kt/Vt,Ot=mt.y+$t/Vt,A=((Ut-st)*Kt-(Ot-ne)*$t)/(Lt*Kt-zt*$t);dt=st+Lt*A-et.x,rt=ne+zt*A-et.y;let M=dt*dt+rt*rt;if(M<=2)return new Pt(dt,rt);Nt=Math.sqrt(M/2)}else{let Tt=!1;Lt>Number.EPSILON?$t>Number.EPSILON&&(Tt=!0):Lt<-Number.EPSILON?$t<-Number.EPSILON&&(Tt=!0):Math.sign(zt)===Math.sign(Kt)&&(Tt=!0),Tt?(dt=-zt,rt=Lt,Nt=Math.sqrt(D)):(dt=Lt,rt=zt,Nt=Math.sqrt(D/2))}return new Pt(dt/Nt,rt/Nt)}let G=[];for(let et=0,ht=H.length,mt=ht-1,dt=et+1;et<ht;et++,mt++,dt++)mt===ht&&(mt=0),dt===ht&&(dt=0),G[et]=it(H[et],H[mt],H[dt]);let z=[],k,ct=G.concat();for(let et=0,ht=P;et<ht;et++){let mt=L[et];k=[];for(let dt=0,rt=mt.length,Nt=rt-1,Lt=dt+1;dt<rt;dt++,Nt++,Lt++)Nt===rt&&(Nt=0),Lt===rt&&(Lt=0),k[dt]=it(mt[dt],mt[Nt],mt[Lt]);z.push(k),ct=ct.concat(k)}let gt;if(g===0)gt=zi.triangulateShape(H,L);else{let et=[],ht=[];for(let mt=0;mt<g;mt++){let dt=mt/g,rt=f*Math.cos(dt*Math.PI/2),Nt=p*Math.sin(dt*Math.PI/2)+x;for(let Lt=0,zt=H.length;Lt<zt;Lt++){let $t=q(H[Lt],G[Lt],Nt);wt($t.x,$t.y,-rt),dt===0&&et.push($t)}for(let Lt=0,zt=P;Lt<zt;Lt++){let $t=L[Lt];k=z[Lt];let Kt=[];for(let D=0,at=$t.length;D<at;D++){let Tt=q($t[D],k[D],Nt);wt(Tt.x,Tt.y,-rt),dt===0&&Kt.push(Tt)}dt===0&&ht.push(Kt)}}gt=zi.triangulateShape(et,ht)}let Y=gt.length,ft=p+x;for(let et=0;et<O;et++){let ht=u?q(C[et],ct[et],ft):C[et];y?(_.copy(b.normals[0]).multiplyScalar(ht.x),T.copy(b.binormals[0]).multiplyScalar(ht.y),S.copy(w[0]).add(_).add(T),wt(S.x,S.y,S.z)):wt(ht.x,ht.y,0)}for(let et=1;et<=h;et++)for(let ht=0;ht<O;ht++){let mt=u?q(C[ht],ct[ht],ft):C[ht];y?(_.copy(b.normals[et]).multiplyScalar(mt.x),T.copy(b.binormals[et]).multiplyScalar(mt.y),S.copy(w[et]).add(_).add(T),wt(S.x,S.y,S.z)):wt(mt.x,mt.y,d/h*et)}for(let et=g-1;et>=0;et--){let ht=et/g,mt=f*Math.cos(ht*Math.PI/2),dt=p*Math.sin(ht*Math.PI/2)+x;for(let rt=0,Nt=H.length;rt<Nt;rt++){let Lt=q(H[rt],G[rt],dt);wt(Lt.x,Lt.y,d+mt)}for(let rt=0,Nt=L.length;rt<Nt;rt++){let Lt=L[rt];k=z[rt];for(let zt=0,$t=Lt.length;zt<$t;zt++){let Kt=q(Lt[zt],k[zt],dt);y?wt(Kt.x,Kt.y+w[h-1].y,w[h-1].x+mt):wt(Kt.x,Kt.y,d+mt)}}}It(),kt();function It(){let et=s.length/3;if(u){let ht=0,mt=O*ht;for(let dt=0;dt<Y;dt++){let rt=gt[dt];Et(rt[2]+mt,rt[1]+mt,rt[0]+mt)}ht=h+g*2,mt=O*ht;for(let dt=0;dt<Y;dt++){let rt=gt[dt];Et(rt[0]+mt,rt[1]+mt,rt[2]+mt)}}else{for(let ht=0;ht<Y;ht++){let mt=gt[ht];Et(mt[2],mt[1],mt[0])}for(let ht=0;ht<Y;ht++){let mt=gt[ht];Et(mt[0]+O*h,mt[1]+O*h,mt[2]+O*h)}}n.addGroup(et,s.length/3-et,0)}function kt(){let et=s.length/3,ht=0;$(H,ht),ht+=H.length;for(let mt=0,dt=L.length;mt<dt;mt++){let rt=L[mt];$(rt,ht),ht+=rt.length}n.addGroup(et,s.length/3-et,1)}function $(et,ht){let mt=et.length;for(;--mt>=0;){let dt=mt,rt=mt-1;rt<0&&(rt=et.length-1);for(let Nt=0,Lt=h+g*2;Nt<Lt;Nt++){let zt=O*Nt,$t=O*(Nt+1),Kt=ht+dt+zt,D=ht+rt+zt,at=ht+rt+$t,Tt=ht+dt+$t;bt(Kt,D,at,Tt)}}}function wt(et,ht,mt){l.push(et),l.push(ht),l.push(mt)}function Et(et,ht,mt){Yt(et),Yt(ht),Yt(mt);let dt=s.length/3,rt=v.generateTopUV(n,s,dt-3,dt-2,dt-1);Qt(rt[0]),Qt(rt[1]),Qt(rt[2])}function bt(et,ht,mt,dt){Yt(et),Yt(ht),Yt(dt),Yt(ht),Yt(mt),Yt(dt);let rt=s.length/3,Nt=v.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);Qt(Nt[0]),Qt(Nt[1]),Qt(Nt[3]),Qt(Nt[1]),Qt(Nt[2]),Qt(Nt[3])}function Yt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Qt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ho[s.type]().fromJSON(s)),new i(n,t.options)}},fm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Pt(r,o),new Pt(a,l),new Pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Pt(o,1-l),new Pt(c,1-d),new Pt(u,1-p),new Pt(x,1-m)]:[new Pt(a,1-l),new Pt(h,1-d),new Pt(f,1-p),new Pt(g,1-m)]}};function pm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mr=class i extends we{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new Pt,f=new N,p=new N,x=new N,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){let w=n+v*h*s,y=Math.sin(w),b=Math.cos(w);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*b,o.push(d.x,d.y,d.z),u.x=v/e,u.y=T/(t.length-1),a.push(u.x,u.y);let _=l[3*T+0]*y,S=l[3*T+1],R=l[3*T+0]*b;c.push(_,S,R)}}for(let v=0;v<e;v++)for(let w=0;w<t.length-1;w++){let y=w+v*t.length,b=y,T=y+t.length,_=y+t.length+1,S=y+1;r.push(b,T,S),r.push(_,S,T)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var gi=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-o;for(let w=0;w<c;w++){let y=w*d-r;p.push(y,-v,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let w=v+c*m,y=v+c*(m+1),b=v+1+c*(m+1),T=v+1+c*m;f.push(w,y,T),f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var xn=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],w=m/n,y=o+w*a,b=t*Math.cos(y),T=Math.sqrt(t*t-b*b),_=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let R=S/e,C=s+R*r;d.x=-T*Math.cos(C),d.y=b,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(R+_,1-w),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let w=h[m][v+1],y=h[m][v],b=h[m+1][v],T=h[m+1][v+1];(m!==0||o>0)&&f.push(w,y,T),(m!==n-1||l<Math.PI)&&f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qi=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new N,f=new N,p=new N;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,w=(s+1)*(x-1)+g,y=(s+1)*x+g;l.push(m,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Sr=class i extends we{constructor(t=new mr(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Pt,h=new N,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function x(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),v(),m()}function g(w){h=t.getPointAt(w/e,h);let y=o.normals[w],b=o.binormals[w];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,S=Math.sin(_),R=-Math.cos(_);l.x=R*y.x+S*b.x,l.y=R*y.y+S*b.y,l.z=R*y.z+S*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=e;w++)for(let y=1;y<=s;y++){let b=(s+1)*(w-1)+(y-1),T=(s+1)*w+(y-1),_=(s+1)*w+y,S=(s+1)*(w-1)+y;p.push(b,T,S),p.push(T,_,S)}}function v(){for(let w=0;w<=e;w++)for(let y=0;y<=s;y++)c.x=w/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ho[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(pu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(pu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Qi(i[e]);for(let s in n)t[s]=n[s]}return t}function pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var cd={clone:Qi,merge:$e},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vo=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wo=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xo=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function go(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends _i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jl:r=t,a=2*e-n;break;case Ql:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jl:o=t,l=2*n-e;break;case Ql:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+v*o[c+b]+w*o[l+b]+y*o[d+b];return r}},qo=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},$o=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zo=class extends _i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,v=d[m],w=d[m+1],y=t*u+p*2,b=h[y],T=h[y+1],_=vm(n,e,v,b,s);r[p]=hd(_,x,w,T,g)}return r}};function hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function xm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function vm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=hd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=xm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),go(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Po:e=this.InterpolantFactoryMethodLinear;break;case vo:e=this.InterpolantFactoryMethodSmooth;break;case Jl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return vo;case this.InterpolantFactoryMethodBezier:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;go(this.settings)&&(mu(this.settings.inTangents,t),mu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;go(this.settings)&&(gu(this.settings.inTangents,t),gu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){te("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&cp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function gu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Po;var xi=class extends hn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Qs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Jo.prototype.ValueTypeName="color";var Ko=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="number";var jo=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},br=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends hn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Qs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Qo.prototype.ValueTypeName="vector";var ta=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ud=new ta,ea=class{constructor(t){this.manager=t!==void 0?t:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var _o=new N,xo=new tn,Dn=new N,wr=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,xo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_o,xo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new N,_u=new Pt,xu=new Pt,Ge=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,_u,xu),e.subVectors(xu,_u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var na=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var gs=-90,_s=1,As=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(gs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Ge(gs,_s,t,e);r.layers=this.layers,this.add(r);let o=new Ge(gs,_s,t,e);o.layers=this.layers,this.add(o);let a=new Ge(gs,_s,t,e);a.layers=this.layers,this.add(a);let l=new Ge(gs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Ge(gs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ia=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Bc="\\[\\]\\.:\\/",ym=new RegExp("["+Bc+"]","g"),kc="[^"+Bc+"]",Mm="[^"+Bc.replace("\\.","")+"]",Sm=/((?:WC+[\/:])*)/.source.replace("WC",kc),bm=/(WCOD+)?/.source.replace("WCOD",Mm),wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),Em=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),Tm=new RegExp("^"+Sm+bm+wm+Em+"$"),Am=["material","materials","bones","map"],ic=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ym,"")}static parseTrackName(t){let e=Tm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Am.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;te("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=ic;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);var Xc=class Xc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Xc.prototype.isMatrix2=!0;var sc=Xc;function zc(i,t,e,n){let s=Rm(n);switch(e){case wc:return i*t;case Tc:return i*t/s.components*s.byteLength;case ua:return i*t/s.components*s.byteLength;case Mi:return i*t*2/s.components*s.byteLength;case da:return i*t*2/s.components*s.byteLength;case Ec:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case fa:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case xa:case va:case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:case Ir:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ba:case ka:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lr:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(i){switch(i){case un:case yc:return{byteLength:1,components:1};case Is:case Mc:case Pn:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case Rn:case la:case Cn:return{byteLength:4,components:1};case Sc:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
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
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform float backgroundBlurriness;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Kg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,e_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,c_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,u_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:km,alphamap_pars_fragment:zm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Vm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:Ym,begin_vertex:qm,beginnormal_vertex:$m,bsdfs:Zm,iridescence_fragment:Jm,bumpmap_pars_fragment:Km,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:R0,envmap_vertex:x0,fog_vertex:v0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:w0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:P0,lights_phong_fragment:I0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:F0,lights_fragment_end:O0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:G0,map_fragment:V0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:Y0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:$0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:K0,morphtarget_pars_vertex:j0,morphtarget_vertex:Q0,normal_fragment_begin:tg,normal_fragment_maps:eg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:vg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:bg,skinning_vertex:wg,skinnormal_vertex:Eg,specularmap_fragment:Tg,specularmap_pars_fragment:Ag,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Pg,transmission_pars_fragment:Ig,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Ng,worldpos_vertex:Ug,background_vert:Fg,background_frag:Og,backgroundCube_vert:Bg,backgroundCube_frag:kg,cube_vert:zg,cube_frag:Hg,depth_vert:Gg,depth_frag:Vg,distance_vert:Wg,distance_frag:Xg,equirect_vert:Yg,equirect_frag:qg,linedashed_vert:$g,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:Kg,meshlambert_vert:jg,meshlambert_frag:Qg,meshmatcap_vert:t_,meshmatcap_frag:e_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:o_,meshphysical_frag:a_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:h_,points_frag:u_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},Ft={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},kn={basic:{uniforms:$e([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:$e([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:$e([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:$e([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:$e([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Jt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:$e([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:$e([Ft.points,Ft.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:$e([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:$e([Ft.common,Ft.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:$e([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:$e([Ft.sprite,Ft.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:$e([Ft.common,Ft.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:$e([Ft.lights,Ft.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};kn.physical={uniforms:$e([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Xa={r:0,b:0,g:0},g_=new de,Nd=new ee;Nd.set(-1,0,0,0,1,0,0,0,1);function __(i,t,e,n,s,r){let o=new Jt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1,y=f(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,w){let y=f(w);y&&y.isCubeTexture?(c===void 0&&(c=new ge(new rn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Qi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nd),c.material.toneMapped=he.getTransfer(y.colorSpace)!==me,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ge(new gi(2,2),new qe({name:"BackgroundMaterial",uniforms:Qi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=he.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(Xa,Oc(i)),e.buffers.color.setClear(Xa.r,Xa.g,Xa.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:x,dispose:m}}function x_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,F,V,P,H){let q=!1,O=d(L,P,V,F);r!==O&&(r=O,c(r.object)),q=f(L,P,V,H),q&&p(L,P,V,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(L,F,V,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,F,V,P){let H=P.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let O=L.isInstancedMesh===!0?L.id:0,it=q[O];it===void 0&&(it={},q[O]=it);let G=it[V.id];G===void 0&&(G={},it[V.id]=G);let z=G[H];return z===void 0&&(z=u(l()),G[H]=z),z}function u(L){let F=[],V=[],P=[];for(let H=0;H<e;H++)F[H]=0,V[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,F,V,P){let H=r.attributes,q=F.attributes,O=0,it=V.getAttributes();for(let G in it)if(it[G].location>=0){let k=H[G],ct=q[G];if(ct===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),k===void 0||k.attribute!==ct||ct&&k.data!==ct.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function p(L,F,V,P){let H={},q=F.attributes,O=0,it=V.getAttributes();for(let G in it)if(it[G].location>=0){let k=q[G];k===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(k=L.instanceColor));let ct={};ct.attribute=k,k&&k.data&&(ct.data=k.data),H[G]=ct,O++}r.attributes=H,r.attributesNum=O,r.index=P}function x(){let L=r.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function g(L){m(L,0)}function m(L,F){let V=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;V[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),H[L]!==F&&(i.vertexAttribDivisor(L,F),H[L]=F)}function v(){let L=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function w(L,F,V,P,H,q,O){O===!0?i.vertexAttribIPointer(L,F,V,H,q):i.vertexAttribPointer(L,F,V,P,H,q)}function y(L,F,V,P){x();let H=P.attributes,q=V.getAttributes(),O=F.defaultAttributeValues;for(let it in q){let G=q[it];if(G.location>=0){let z=H[it];if(z===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let k=z.normalized,ct=z.itemSize,gt=t.get(z);if(gt===void 0)continue;let Y=gt.buffer,ft=gt.type,It=gt.bytesPerElement,kt=ft===i.INT||ft===i.UNSIGNED_INT||z.gpuType===la;if(z.isInterleavedBufferAttribute){let $=z.data,wt=$.isInterleavedBuffer===!0?$.stride:$.itemSize,Et=z.offset;if($.isInstancedInterleavedBuffer||$.isInstancedBufferAttribute){for(let bt=0;bt<G.locationSize;bt++)m(G.location+bt,$.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let bt=0;bt<G.locationSize;bt++)g(G.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let bt=0;bt<G.locationSize;bt++)w(G.location+bt,ct/G.locationSize,ft,k,wt*It,(Et+ct/G.locationSize*bt)*It,kt)}else{if(z.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)m(G.location+$,z.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let $=0;$<G.locationSize;$++)g(G.location+$);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let $=0;$<G.locationSize;$++)w(G.location+$,ct/G.locationSize,ft,k,ct*It,ct/G.locationSize*$*It,kt)}}else if(O!==void 0){let k=O[it];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(G.location,k);break;case 3:i.vertexAttrib3fv(G.location,k);break;case 4:i.vertexAttrib4fv(G.location,k);break;default:i.vertexAttrib1fv(G.location,k)}}}}v()}function b(){R();for(let L in n){let F=n[L];for(let V in F){let P=F[V];for(let H in P){let q=P[H];for(let O in q)h(q[O].object),delete q[O];delete P[H]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let V in F){let P=F[V];for(let H in P){let q=P[H];for(let O in q)h(q[O].object),delete q[O];delete P[H]}}delete n[L.id]}function _(L){for(let F in n){let V=n[F];for(let P in V){let H=V[P];if(H[L.id]===void 0)continue;let q=H[L.id];for(let O in q)h(q[O].object),delete q[O];delete H[L.id]}}}function S(L){for(let F in n){let V=n[F],P=L.isInstancedMesh===!0?L.id:0,H=V[P];if(H!==void 0){for(let q in H){let O=H[q];for(let it in O)h(O[it].object),delete O[it];delete H[q]}delete V[P],Object.keys(V).length===0&&delete n[F]}}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function v_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function y_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==In&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==un&&_!==Cn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:T}}function M_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new An,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,w=v*4,y=m.clippingState||null;l.value=y,y=h(p,u,w,f);for(let b=0;b!==w;++b)y[b]=e[b];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=f;w!==x;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ur=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:$i});r.uniforms.tEquirect.value=e;let o=new ge(s,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=Qe),new As(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},dd=256,S_=3,b_=20,Ud=256,Fd=16,w_=3,E_=new N,T_=new Jt,qa=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new ge(new rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=E_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(T_));let g=new As(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(dd,Nc(t))}_fromTexture(t,e){t.mapping===Ji||t.mapping===Ps?this._setSize(t.image.length===0?dd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=fd(t,!1,!1),n=Math.log2(t)-S_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ji||t.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=A_(),this._integrationMaterial=R_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Fd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-w_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Ud*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=C_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function fd(i,t,e){return new Ur(i,{minFilter:ti,generateMipmaps:t,type:Pn,colorSpace:tr,depthBuffer:e})}function Fr(i,t,e){return new qe({name:i,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:Ne,blending:$i,depthTest:!1,depthWrite:!1})}function A_(){return Fr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ud}u

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
	`)}function R_(){return Fr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fd}},`

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
	`)}function C_(){return Fr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${b_}
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
	`)}function pd(){return Fr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function md(){return Fr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ra||f===oa)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ur(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===ra||f===oa,x=f===Ji||f===Ps;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new qa(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new qa(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===ra?u.mapping=Ji:f===oa&&(u.mapping=Ps),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function I_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function L_(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let g in x)t.update(x[g],i.ARRAY_BUFFER)}function d(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,w=g.count>=65535?ar:or,y=new w(Math.ceil(v/3)*6,1),b=y.array;if(x!==null){let _=x.array;m=x.version;for(let S=0,R=0;S<v;S+=3){let C=_[S+0],L=_[S+1],F=_[S+2];b[R++]=C,b[R++]=L,b[R++]=L,b[R++]=F,b[R++]=F,b[R++]=C}}else{m=g.version;for(let _=0,S=0;_<v;_+=3){let R=_+0,C=_+1,L=_+2;b[S++]=R,b[S++]=C,b[S++]=C,b[S++]=L,b[S++]=L,b[S++]=R}}y.version=m;let T=r.get(p);T&&t.remove(T),r.set(p,y)}function u(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function D_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let y=a.attributes.position.count*w,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*b*4*d),_=new sr(T,y,b,d);_.type=Cn,_.needsUpdate=!0;let S=w*4;for(let C=0;C<d;C++){let L=g[C],F=m[C],V=v[C],P=y*b*4*C;for(let H=0;H<L.count;H++){let q=H*S;f===!0&&(s.fromBufferAttribute(L,H),T[P+q+0]=s.x,T[P+q+1]=s.y,T[P+q+2]=s.z,T[P+q+3]=0),p===!0&&(s.fromBufferAttribute(F,H),T[P+q+4]=s.x,T[P+q+5]=s.y,T[P+q+6]=s.z,T[P+q+7]=0),x===!0&&(s.fromBufferAttribute(V,H),T[P+q+8]=s.x,T[P+q+9]=s.y,T[P+q+10]=s.z,T[P+q+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Pt(y,b)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function F_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var O_={[dc]:"LINEAR_TONE_MAPPING",[fc]:"REINHARD_TONE_MAPPING",[pc]:"CINEON_TONE_MAPPING",[mc]:"ACES_FILMIC_TONE_MAPPING",[_c]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};function B_(i,t,e,n,s,r){let o=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new we;h.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ue([0,2,0,0,2,0],2));let d=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ge(h,d),f=new na(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,v=null,w=[],y=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let _=0;_<w.length;_++){let S=w[_];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){w=b,y=w.length>0&&w[0].isRenderPass===!0;let T=o.width,_=o.height;w.length>0&&a===null&&(a=new cn(T,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(T,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Qn(T,_),r===!0&&(c.format=ei,c.type=Ki)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<w.length;R++){let C=w[R];C.setSize&&C.setSize(T,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(b,T){if(g||b.toneMapping===On&&w.length===0)return!1;if(v=T,T!==null){let _=T.width,S=T.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=On,!0},this.hasRenderPass=function(){return y},this.end=function(b,T){b.toneMapping=m,g=!0;let _=o,S=a;for(let R=0;R<w.length;R++){let C=w[R];C.enabled!==!1&&(C.render(b,S,_,T),C.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,d.defines={},he.getTransfer(p)===me&&(d.defines.SRGB_TRANSFER="");let R=O_[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Od=new en,Bd=new Qn(1,1),kd=new hr(1),zd=new sr,Hd=new Do,Gd=new lr,gd=[],_d=[],xd=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Za(i,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function k_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function V_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Fe(e,n)}}function W_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),Fe(e,n)}}function X_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),Fe(e,n)}}function Y_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function $_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function J_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Ja(i){return i.version===0&&(i.compareFunction=Pc,i.needsUpdate=!0),i}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ja(Bd):r=Od,e.setTexture2D(t||r,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hd,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ja(kd):r=Gd,e.setTextureCube(t||r,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zd,s)}function sx(i){switch(i){case 5126:return k_;case 35664:return z_;case 35665:return H_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return q_;case 35668:case 35672:return $_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return K_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,t){i.uniform1fv(this.addr,t)}function ox(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function ax(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function lx(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function cx(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hx(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ux(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function fx(i,t){i.uniform2iv(this.addr,t)}function px(i,t){i.uniform3iv(this.addr,t)}function mx(i,t){i.uniform4iv(this.addr,t)}function gx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function xx(i,t){i.uniform3uiv(this.addr,t)}function vx(i,t){i.uniform4uiv(this.addr,t)}function yx(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ja(Bd):o=Od;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Mx(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hd,r[o])}function Sx(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ja(kd):o=Gd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function bx(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zd,r[o])}function wx(i){switch(i){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function Md(i,t){i.seq.push(t),i.map[t.id]=t}function Ex(i,t,e){let n=i.name,s=n.length;for(Yc.lastIndex=0;;){let r=Yc.exec(n),o=Yc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Md(e,c===void 0?new $c(a,i,t):new Zc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Jc(a),Md(e,d)),e=d}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ex(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Sd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tx=37297,Ax=0;function Rx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bd=new ee;function Cx(i){he._getMatrix(bd,he.workingColorSpace,i);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(t),a)}else return r}function Px(i,t){let e=Cx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ix={[dc]:"Linear",[fc]:"Reinhard",[pc]:"Cineon",[mc]:"ACESFilmic",[_c]:"AgX",[xc]:"Neutral",[gc]:"Custom"};function Lx(i,t){let e=Ix[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ya=new N;function Dx(){he.getLuminanceCoefficients(Ya);let i=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Ux(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Nr(i){return i!==""}function Ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(Ox,Bx)}function Bx(i,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Kc(e)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(kx,zx)}function zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hx={[Er]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function Gx(i){return Hx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vx={[Ps]:"ENVMAP_MODE_REFRACTION"};function Wx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Vx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xx={[uc]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function Yx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[i.combine]||"ENVMAP_BLENDING_NONE"}function qx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Gx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Wx(e),d=Yx(e),u=Nx(e),f=Ux(r),p=s.createProgram(),x,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Nr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Nr).join(`
`),g.length>0&&(g+=`
`)):(x=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),g=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?re.tonemapping_pars_fragment:"",e.toneMapping!==On?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),Dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Kc(o),o=Ed(o,e),o=Td(o,e),a=Kc(a),a=Ed(a,e),a=Td(a,e),o=Ad(o),a=Ad(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+x+o,w=m+g+a,y=Sd(s,s.VERTEX_SHADER,v),b=Sd(s,s.FRAGMENT_SHADER,w);s.attachShader(p,y),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(b)||"",P=L.trim(),H=F.trim(),q=V.trim(),O=!0,it=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,b);else{let G=wd(s,y,"vertex"),z=wd(s,b,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+G+`
`+z)}else P!==""?jt("WebGLProgram: Program Info Log:",P):(H===""||q==="")&&(it=!1);it&&(C.diagnostics={runnable:O,programLog:P,vertexShader:{log:H,prefix:x},fragmentShader:{log:q,prefix:g}})}s.deleteShader(y),s.deleteShader(b),_=new Ds(s,p),S=Fx(s,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,Tx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var $x=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}};function Zx(i){return i===Mi||i===Ir||i===Lr}function Jx(i,t,e,n,s,r){let o=new rr,a=new jc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,R,C,L,F){let V=C.fog,P=L.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||H,q),it=u[_.type],G=n.precision;_.precision!==null&&(G=n.getMaxPrecision(_.precision),G!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",G,"instead."));let z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=z!==void 0?z.length:0,ct=0;P.morphAttributes.position!==void 0&&(ct=1),P.morphAttributes.normal!==void 0&&(ct=2),P.morphAttributes.color!==void 0&&(ct=3);let gt,Y,ft,It;if(it){let St=kn[it];gt=St.vertexShader,Y=St.fragmentShader}else{gt=_.vertexShader,Y=_.fragmentShader;let St=a.getVertexShaderStage(_),Zt=a.getFragmentShaderStage(_);a.update(_,St,Zt),ft=St.id,It=Zt.id}let kt=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,Et=L.isBatchedMesh===!0,bt=!!_.map,Yt=!!_.matcap,Qt=!!O,et=Qt&&O.isPMREMTexture===!0,ht=!!_.aoMap,mt=!!_.lightMap,dt=!!_.bumpMap&&_.wireframe===!1,rt=!!_.normalMap,Nt=!!_.displacementMap,Lt=!!_.emissiveMap,zt=!!_.metalnessMap,$t=!!_.roughnessMap,Kt=_.anisotropy>0,D=_.clearcoat>0,at=_.diffuseRoughness>0,Tt=_.dispersion>0,Vt=_.retroreflectivity>0,st=_.iridescence>0,ne=_.sheen>0,Ut=_.transmission>0,Ot=Kt&&!!_.anisotropyMap,A=D&&!!_.clearcoatMap,M=D&&!!_.clearcoatNormalMap,B=D&&!!_.clearcoatRoughnessMap,ut=at&&!!_.diffuseRoughnessMap,tt=st&&!!_.iridescenceMap,pt=st&&!!_.iridescenceThicknessMap,xt=ne&&!!_.sheenColorMap,K=ne&&!!_.sheenRoughnessMap,j=!!_.specularMap,Mt=!!_.specularColorMap,I=!!_.specularIntensityMap,Q=Ut&&!!_.transmissionMap,J=Ut&&!!_.thicknessMap,yt=!!_.gradientMap,vt=!!_.alphaMap,ot=_.alphaTest>0,lt=!!_.alphaHash,Dt=!!_.extensions,nt=On;_.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(nt=i.toneMapping);let At=et?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Ht={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:gt,fragmentShader:Y,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:It,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:G,batching:Et,batchingColor:Et&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:bt,matcap:Yt,envMap:Qt,envMapMode:Qt&&O.mapping,envMapPMREM:et,envMapMaxLod:et?At.length-1:null,envMapSize:et?At[0].width:null,aoMap:ht,lightMap:mt,bumpMap:dt,normalMap:rt,displacementMap:Nt,emissiveMap:Lt,normalMapObjectSpace:rt&&_.normalMapType===Wu,normalMapTangentSpace:rt&&_.normalMapType===Ac,packedNormalMap:rt&&_.normalMapType===Ac&&Zx(_.normalMap.format),metalnessMap:zt,roughnessMap:$t,anisotropy:Kt,anisotropyMap:Ot,clearcoat:D,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:at,diffuseRoughnessMap:ut,dispersion:Tt,retroreflection:Vt,iridescence:st,iridescenceMap:tt,iridescenceThicknessMap:pt,sheen:ne,sheenColorMap:xt,sheenRoughnessMap:K,specularMap:j,specularColorMap:Mt,specularIntensityMap:I,transmission:Ut,transmissionMap:Q,thicknessMap:J,gradientMap:yt,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:ot,alphaHash:lt,combine:_.combine,mapUv:bt&&f(_.map.channel),aoMapUv:ht&&f(_.aoMap.channel),lightMapUv:mt&&f(_.lightMap.channel),bumpMapUv:dt&&f(_.bumpMap.channel),normalMapUv:rt&&f(_.normalMap.channel),displacementMapUv:Nt&&f(_.displacementMap.channel),emissiveMapUv:Lt&&f(_.emissiveMap.channel),metalnessMapUv:zt&&f(_.metalnessMap.channel),roughnessMapUv:$t&&f(_.roughnessMap.channel),anisotropyMapUv:Ot&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:Mt&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:J&&f(_.thicknessMap.channel),alphaMapUv:vt&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(rt||Kt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(bt||vt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:bt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===Ne,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&_.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(S,_),m(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let S=u[_.type],R;if(S){let C=kn[S];R=cd.clone(C.uniforms)}else R=_.uniforms;return R}function w(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new qx(i,S,_,s),c.push(R),h.set(S,R)),R}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:T}}function Kx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let w=a(u,f,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(u,f,p,x,g,m){let v=a(u,f,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||jx),n.length>1&&n.sort(f||Cd),s.length>1&&s.sort(f||Cd)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Qx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pd,i.set(n,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function tv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function ev(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var nv=0;function iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sv(i){let t=new tv,e=ev(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new de,o=new de;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,w=0,y=0,b=0,T=0,_=0,S=0,R=0,C=0;c.sort(iv);for(let F=0,V=c.length;F<V;F++){let P=c[F],H=P.color,q=P.intensity,O=P.distance,it=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Mi?it=P.shadow.map.texture:it=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],q);C++}else if(P.isSunLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=k,n.sunShadowMap[p]=it;let ct=z.getViewportCount();for(let gt=0;gt<ct;gt++)n.sunShadowMatrix[x+gt]=z.getMatrix(gt),n.sunShadowCascade[x+gt]=z._cascadeData[gt];x+=ct,p++}n.sun[f]=G,f++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=G,g++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(q),G.distance=O,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[v]=G;let z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[v]=z.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=it,_++}v++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(H).multiplyScalar(q),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=G,w++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let z=P.shadow,k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=it,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=G,m++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(q),G.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[y]=G,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==w||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==_||L.numSpotMaps!==S||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=m,L.spotLength=v,L.rectAreaLength=w,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=_,L.numSpotMaps=S,L.numLightProbes=C,n.version=nv++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Id(i){let t=new sv(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Id(i),t.set(s,[a])):r>=o.length?(a=new Id(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`,lv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],cv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ld=new de,Dr=new N,qc=new N;function hv(i,t,e){let n=new Wi,s=new Pt,r=new Pt,o=new Re,a=new Wo,l=new Xo,c={},h=e.maxTextureSize,d={[yi]:Ne,[Ne]:yi,[vn]:vn},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:ov,fragmentShader:av}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new we;p.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let m=this.type;this.render=function(T,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Mu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let R=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=m!==this.type;V&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=T.length;P<H;P++){let q=T[P],O=q.shadow;if(O===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let it=O.getFrameExtents();s.multiply(it),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,O.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Rs){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new cn(s.x,s.y,{format:Mi,type:Pn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new Qn(s.x,s.y,Cn),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=jn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke}else q.isPointLight?(O.map=new Ur(s.x),O.map.depthTexture=new hr(s.x,Rn)):(O.map=new cn(s.x,s.y),O.map.depthTexture=new Qn(s.x,s.y,Rn)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=jn,this.type===Er?(O.map.depthTexture.compareFunction=G?Cc:Rc,O.map.depthTexture.minFilter=Qe,O.map.depthTexture.magFilter=Qe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,S);let k=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ct=0;ct<z;ct++){let gt=O.getCamera(ct);if(q.isPointLight){let Y=O.camera,ft=O.matrix,It=q.distance||Y.far;It!==Y.far&&(Y.far=It,Y.updateProjectionMatrix()),Dr.setFromMatrixPosition(q.matrixWorld),Y.position.copy(Dr),qc.copy(Y.position),qc.add(lv[ct]),Y.up.copy(cv[ct]),Y.lookAt(qc),Y.updateMatrixWorld(),ft.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Ld.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ld,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ct),i.clear();else{ct===0&&(i.setRenderTarget(O.map),i.clear());let Y=O.getViewport(ct);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o)}n=O.getFrustum(ct),y(_,S,gt,q,k,this.type)}O.isPointLightShadow!==!0&&this.type===Rs&&v(O,S),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,C,L)};function v(T,_){let S=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(s.x,s.y,{format:Mi,type:Pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,S,f,x,null)}function w(T,_,S,R){let C=null,L=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,V=_.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let H=P[V];H===void 0&&(H=C.clone(),P[V]=H,_.addEventListener("dispose",b)),C=H}if(C.visible=_.visible,C.wireframe=_.wireframe,R===Rs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=S}return C}function y(T,_,S,R,C,L){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Rs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let P=t.update(T),H=T.material;if(Array.isArray(H)){let q=P.groups;for(let O=0,it=q.length;O<it;O++){let G=q[O],z=H[G.materialIndex];if(z&&z.visible){let k=w(T,z,R,L);T.onBeforeShadow(i,T,_,S,P,k,G),i.renderBufferDirect(S,null,P,k,T,G),T.onAfterShadow(i,T,_,S,P,k,G)}}}else if(H.visible){let q=w(T,H,R,L);T.onBeforeShadow(i,T,_,S,P,q,null),i.renderBufferDirect(S,null,P,q,T,null),T.onAfterShadow(i,T,_,S,P,q,null)}}let V=T.children;for(let P=0,H=V.length;P<H;P++)y(V[P],_,S,R,C,L)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let R=c[S],C=T.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function uv(i,t){function e(){let I=!1,Q=new Re,J=null,yt=new Re(0,0,0,0);return{setMask:function(vt){J!==vt&&!I&&(i.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){I=vt},setClear:function(vt,ot,lt,Dt,nt){nt===!0&&(vt*=Dt,ot*=Dt,lt*=Dt),Q.set(vt,ot,lt,Dt),yt.equals(Q)===!1&&(i.clearColor(vt,ot,lt,Dt),yt.copy(Q))},reset:function(){I=!1,J=null,yt.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,J=null,yt=null,vt=null;return{setReversed:function(ot){if(Q!==ot){let lt=t.get("EXT_clip_control");ot?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Q=ot;let Dt=vt;vt=null,this.setClear(Dt)}},getReversed:function(){return Q},setTest:function(ot){ot?$(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ot){J!==ot&&!I&&(i.depthMask(ot),J=ot)},setFunc:function(ot){if(Q&&(ot=ed[ot]),yt!==ot){switch(ot){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ot}},setLocked:function(ot){I=ot},setClear:function(ot){vt!==ot&&(vt=ot,Q&&(ot=1-ot),i.clearDepth(ot))},reset:function(){I=!1,J=null,yt=null,vt=null,Q=!1}}}function s(){let I=!1,Q=null,J=null,yt=null,vt=null,ot=null,lt=null,Dt=null,nt=null;return{setTest:function(At){I||(At?$(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(At){Q!==At&&!I&&(i.stencilMask(At),Q=At)},setFunc:function(At,Ht,St){(J!==At||yt!==Ht||vt!==St)&&(i.stencilFunc(At,Ht,St),J=At,yt=Ht,vt=St)},setOp:function(At,Ht,St){(ot!==At||lt!==Ht||Dt!==St)&&(i.stencilOp(At,Ht,St),ot=At,lt=Ht,Dt=St)},setLocked:function(At){I=At},setClear:function(At){nt!==At&&(i.clearStencil(At),nt=At)},reset:function(){I=!1,Q=null,J=null,yt=null,vt=null,ot=null,lt=null,Dt=null,nt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,b=null,T=null,_=null,S=new Jt(0,0,0),R=0,C=!1,L=null,F=null,V=null,P=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,it=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=it>=2);let z=null,k={},ct=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Y=new Re().fromArray(ct),ft=new Re().fromArray(gt);function It(I,Q,J,yt){let vt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(I,ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<J;lt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(Q+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return ot}let kt={};kt[i.TEXTURE_2D]=It(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=It(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[i.TEXTURE_2D_ARRAY]=It(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=It(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(vs),dt(!1),rt(rc),$(i.CULL_FACE),ht($i);function $(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function wt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Et(I,Q){return u[I]!==Q?(i.bindFramebuffer(I,Q),u[I]=Q,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function bt(I,Q){let J=p,yt=!1;if(I){J=f.get(Q),J===void 0&&(J=[],f.set(Q,J));let vt=I.textures;if(J.length!==vt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,lt=vt.length;ot<lt;ot++)J[ot]=i.COLOR_ATTACHMENT0+ot;J.length=vt.length,yt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,yt=!0);yt&&i.drawBuffers(J)}function Yt(I){return x!==I?(i.useProgram(I),x=I,!0):!1}let Qt={[Zi]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Qt[Eu]=i.MIN,Qt[Tu]=i.MAX;let et={[Au]:i.ZERO,[Ru]:i.ONE,[Cu]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[hc]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(I,Q,J,yt,vt,ot,lt,Dt,nt,At){if(I===$i){g===!0&&(wt(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),I!==Su){if(I!==m||At!==C){if((v!==Zi||b!==Zi)&&(i.blendEquation(i.FUNC_ADD),v=Zi,b=Zi),At)switch(I){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",I);break}w=null,y=null,T=null,_=null,S.set(0,0,0),R=0,m=I,C=At}return}vt=vt||Q,ot=ot||J,lt=lt||yt,(Q!==v||vt!==b)&&(i.blendEquationSeparate(Qt[Q],Qt[vt]),v=Q,b=vt),(J!==w||yt!==y||ot!==T||lt!==_)&&(i.blendFuncSeparate(et[J],et[yt],et[ot],et[lt]),w=J,y=yt,T=ot,_=lt),(Dt.equals(S)===!1||nt!==R)&&(i.blendColor(Dt.r,Dt.g,Dt.b,nt),S.copy(Dt),R=nt),m=I,C=!1}function mt(I,Q){I.side===vn?wt(i.CULL_FACE):$(i.CULL_FACE);let J=I.side===Ne;Q&&(J=!J),dt(J),I.blending===Cs&&I.transparent===!1?ht($i):ht(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let yt=I.stencilWrite;a.setTest(yt),yt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function rt(I){I!==vu?($(i.CULL_FACE),I!==F&&(I===rc?i.cullFace(i.BACK):I===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),F=I}function Nt(I){I!==V&&(O&&i.lineWidth(I),V=I)}function Lt(I,Q,J){I?($(i.POLYGON_OFFSET_FILL),(P!==Q||H!==J)&&(P=Q,H=J,o.getReversed()&&(Q=-Q,J=-J),i.polygonOffset(Q,J))):wt(i.POLYGON_OFFSET_FILL)}function zt(I){I?$(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function $t(I){I===void 0&&(I=i.TEXTURE0+q-1),z!==I&&(i.activeTexture(I),z=I)}function Kt(I,Q,J){J===void 0&&(z===null?J=i.TEXTURE0+q-1:J=z);let yt=k[J];yt===void 0&&(yt={type:void 0,texture:void 0},k[J]=yt),(yt.type!==I||yt.texture!==Q)&&(z!==J&&(i.activeTexture(J),z=J),i.bindTexture(I,Q||kt[I]),yt.type=I,yt.texture=Q)}function D(){let I=k[z];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(I){te("WebGLState:",I)}}function Tt(){try{i.compressedTexImage3D(...arguments)}catch(I){te("WebGLState:",I)}}function Vt(){try{i.texSubImage2D(...arguments)}catch(I){te("WebGLState:",I)}}function st(){try{i.texSubImage3D(...arguments)}catch(I){te("WebGLState:",I)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(I){te("WebGLState:",I)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(I){te("WebGLState:",I)}}function Ot(){try{i.texStorage2D(...arguments)}catch(I){te("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){te("WebGLState:",I)}}function M(){try{i.texImage2D(...arguments)}catch(I){te("WebGLState:",I)}}function B(){try{i.texImage3D(...arguments)}catch(I){te("WebGLState:",I)}}function ut(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function tt(I,Q){d[I]!==Q&&(i.pixelStorei(I,Q),d[I]=Q)}function pt(I){Y.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function xt(I){ft.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ft.copy(I))}function K(I,Q){let J=c.get(Q);J===void 0&&(J=new WeakMap,c.set(Q,J));let yt=J.get(I);yt===void 0&&(yt=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,yt,yt),J.set(I,yt))}function j(I,Q,J){let vt=c.get(Q).get(I);l[vt]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,vt,J),l[vt]=J)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,k={},u={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,b=null,T=null,_=null,S=new Jt(0,0,0),R=0,C=!1,L=null,F=null,V=null,P=null,H=null,Y.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:wt,bindFramebuffer:Et,drawBuffers:bt,useProgram:Yt,setBlending:ht,setMaterial:mt,setFlipSided:dt,setCullFace:rt,setLineWidth:Nt,setPolygonOffset:Lt,setScissorTest:zt,activeTexture:$t,bindTexture:Kt,unbindTexture:D,compressedTexImage2D:at,compressedTexImage3D:Tt,texImage2D:M,texImage3D:B,pixelStorei:tt,getParameter:ut,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Ot,texStorage3D:A,texSubImage2D:Vt,texSubImage3D:st,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ut,scissor:pt,viewport:xt,reset:Mt}}function dv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):ir("canvas")}function v(A,M,B){let ut=1,tt=Ot(A);if((tt.width>B||tt.height>B)&&(ut=B/Math.max(tt.width,tt.height)),ut<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pt=Math.floor(ut*tt.width),xt=Math.floor(ut*tt.height);u===void 0&&(u=m(pt,xt));let K=M?m(pt,xt):u;return K.width=pt,K.height=xt,K.getContext("2d").drawImage(A,0,0,pt,xt),jt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+pt+"x"+xt+")."),K}else return"data"in A&&jt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,M,B,ut,tt,pt=!1){if(A!==null){if(i[A]!==void 0)return i[A];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xt;ut&&(xt=t.get("EXT_texture_norm16"),xt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&xt&&(K=xt.R16_EXT),B===i.SHORT&&xt&&(K=xt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),M===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&xt&&(K=xt.RG16_EXT),B===i.SHORT&&xt&&(K=xt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),M===i.RGB&&(B===i.UNSIGNED_SHORT&&xt&&(K=xt.RGB16_EXT),B===i.SHORT&&xt&&(K=xt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),M===i.RGBA){let j=pt?er:he.getTransfer(tt);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=j===me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&xt&&(K=xt.RGBA16_EXT),B===i.SHORT&&xt&&(K=xt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,M){let B;return A?M===null||M===Rn||M===Ki?B=i.DEPTH24_STENCIL8:M===Cn?B=i.DEPTH32F_STENCIL8:M===Is&&(B=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rn||M===Ki?B=i.DEPTH_COMPONENT24:M===Cn?B=i.DEPTH_COMPONENT32F:M===Is&&(B=i.DEPTH_COMPONENT16),B}function S(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=new WeakRef(A);n.get(A).__ref=M,p.add(M),x.register(A,M,M)}function C(A){let M=n.get(A).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function L(A){V(A.target)}function F(A){P(A.target)}function V(A){A.removeEventListener("dispose",L),C(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",F),C(A),it(A)}function H(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):V(M))}p.clear(),d.clear()}function q(A){let M=n.get(A);if(M.__webglInit===void 0)return;let B=A.source,ut=f.get(B);if(ut){let tt=ut[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&O(A),Object.keys(ut).length===0&&f.delete(B)}n.remove(A)}function O(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let B=A.source,ut=f.get(B);delete ut[M.__cacheKey],o.memory.textures--}function it(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&V(B),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let pt=0;pt<M.__webglFramebuffer[tt].length;pt++)i.deleteFramebuffer(M.__webglFramebuffer[tt][pt]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ut=A.textures;for(let tt=0,pt=ut.length;tt<pt;tt++){let xt=n.get(ut[tt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ut[tt])}n.remove(A)}let G=0;function z(){G=0}function k(){return G}function ct(A){G=A}function gt(){let A=G;return A>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function Y(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ft(A,M){let B=n.get(A);if(A.isVideoTexture&&ne(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ut=A.image;if(ut===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,A,M);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function It(A,M){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){mt(B,A,M);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function kt(A,M){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){mt(B,A,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function $(A,M){let B=n.get(A);if(A.version>0&&B.__version!==A.version){dt(B,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let wt={[Ro]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},Et={[ke]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},bt={[Yu]:i.NEVER,[Pc]:i.ALWAYS,[qu]:i.LESS,[Rc]:i.LEQUAL,[$u]:i.EQUAL,[Cc]:i.GEQUAL,[Zu]:i.GREATER,[Ju]:i.NOTEQUAL};function Yt(A,M){if(M.type===Cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Qe||M.magFilter===aa||M.magFilter===Tr||M.magFilter===ti||M.minFilter===Qe||M.minFilter===aa||M.minFilter===Tr||M.minFilter===ti)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,wt[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,wt[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,wt[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Et[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ke||M.minFilter!==Tr&&M.minFilter!==ti||M.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",L),R(M));let ut=M.source,tt=f.get(ut);tt===void 0&&(tt={},f.set(ut,tt));let pt=Y(M);if(pt!==A.__cacheKey){tt[pt]===void 0&&(tt[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[pt].usedTimes++;let xt=tt[A.__cacheKey];xt!==void 0&&(tt[A.__cacheKey].usedTimes--,xt.usedTimes===0&&O(M)),A.__cacheKey=pt,A.__webglTexture=tt[pt].texture}return B}function et(A,M,B){return Math.floor(Math.floor(A/B)/M)}function ht(A,M,B,ut){let pt=A.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,B,ut,M.data);else{pt.sort((I,Q)=>I.start-Q.start);let xt=0;for(let I=1;I<pt.length;I++){let Q=pt[xt],J=pt[I],yt=Q.start+Q.count,vt=et(J.start,M.width,4),ot=et(Q.start,M.width,4);J.start<=yt+1&&vt===ot&&et(J.start+J.count-1,M.width,4)===vt?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++xt,pt[xt]=J)}pt.length=xt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let I=0,Q=pt.length;I<Q;I++){let J=pt[I],yt=Math.floor(J.start/4),vt=Math.ceil(J.count/4),ot=yt%M.width,lt=Math.floor(yt/M.width),Dt=vt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt),e.texSubImage2D(i.TEXTURE_2D,0,ot,lt,Dt,nt,B,ut,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function mt(A,M,B){let ut=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ut=i.TEXTURE_3D);let tt=Qt(A,M),pt=M.source;e.bindTexture(ut,A.__webglTexture,i.TEXTURE0+B);let xt=n.get(pt);if(pt.version!==xt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let nt=he.getPrimaries(he.workingColorSpace),At=M.colorSpace===ni?null:he.getPrimaries(M.colorSpace),Ht=M.colorSpace===ni||nt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=v(M.image,!1,s.maxTextureSize);j=Ut(M,j);let Mt=r.convert(M.format,M.colorSpace),I=r.convert(M.type),Q=T(M.internalFormat,Mt,I,M.normalized,M.colorSpace,M.isVideoTexture);Yt(ut,M);let J,yt=M.mipmaps,vt=M.isVideoTexture!==!0,ot=xt.__version===void 0||tt===!0,lt=pt.dataReady,Dt=S(M,j);if(M.isDepthTexture)Q=_(M.format===ei,M.type),ot&&(vt?e.texStorage2D(i.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,Mt,I,null));else if(M.isDataTexture)if(yt.length>0){vt&&ot&&e.texStorage2D(i.TEXTURE_2D,Dt,Q,yt[0].width,yt[0].height);for(let nt=0,At=yt.length;nt<At;nt++)J=yt[nt],vt?lt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,J.width,J.height,Mt,I,J.data):e.texImage2D(i.TEXTURE_2D,nt,Q,J.width,J.height,0,Mt,I,J.data);M.generateMipmaps=!1}else vt?(ot&&e.texStorage2D(i.TEXTURE_2D,Dt,Q,j.width,j.height),lt&&ht(M,j,Mt,I)):e.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,Mt,I,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){vt&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Q,yt[0].width,yt[0].height,j.depth);for(let nt=0,At=yt.length;nt<At;nt++)if(J=yt[nt],M.format!==In)if(Mt!==null)if(vt){if(lt)if(M.layerUpdates.size>0){let Ht=zc(J.width,J.height,M.format,M.type);for(let St of M.layerUpdates){let Zt=J.data.subarray(St*Ht/J.data.BYTES_PER_ELEMENT,(St+1)*Ht/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,St,J.width,J.height,1,Mt,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,J.width,J.height,j.depth,Mt,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Q,J.width,J.height,j.depth,0,J.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,J.width,J.height,j.depth,Mt,I,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Q,J.width,J.height,j.depth,0,Mt,I,J.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{vt&&ot&&e.texStorage2D(i.TEXTURE_2D,Dt,Q,yt[0].width,yt[0].height);for(let nt=0,At=yt.length;nt<At;nt++)J=yt[nt],M.format!==In?Mt!==null?vt?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,J.width,J.height,Mt,J.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Q,J.width,J.height,0,J.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?lt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,J.width,J.height,Mt,I,J.data):e.texImage2D(i.TEXTURE_2D,nt,Q,J.width,J.height,0,Mt,I,J.data)}else if(M.isDataArrayTexture)if(vt){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Q,j.width,j.height,j.depth),lt)if(M.layerUpdates.size>0){let nt=zc(j.width,j.height,M.format,M.type);for(let At of M.layerUpdates){let Ht=j.data.subarray(At*nt/j.data.BYTES_PER_ELEMENT,(At+1)*nt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,j.width,j.height,1,Mt,I,Ht)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Mt,I,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,Mt,I,j.data);else if(M.isData3DTexture)vt?(ot&&e.texStorage3D(i.TEXTURE_3D,Dt,Q,j.width,j.height,j.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Mt,I,j.data)):e.texImage3D(i.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,Mt,I,j.data);else if(M.isFramebufferTexture){if(ot)if(vt)e.texStorage2D(i.TEXTURE_2D,Dt,Q,j.width,j.height);else{let nt=j.width,At=j.height;for(let Ht=0;Ht<Dt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Q,nt,At,0,Mt,I,null),nt>>=1,At>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),j.parentNode!==nt){nt.appendChild(j),d.add(M),nt.onpaint=At=>{let Ht=At.changedElements;for(let St of d)Ht.includes(St.image)&&(St.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Ht=i.RGBA,St=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,St,Zt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(vt&&ot){let nt=Ot(yt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Q,nt.width,nt.height)}for(let nt=0,At=yt.length;nt<At;nt++)J=yt[nt],vt?lt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Mt,I,J):e.texImage2D(i.TEXTURE_2D,nt,Q,Mt,I,J);M.generateMipmaps=!1}else if(vt){if(ot){let nt=Ot(j);e.texStorage2D(i.TEXTURE_2D,Dt,Q,nt.width,nt.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,I,j)}else e.texImage2D(i.TEXTURE_2D,0,Q,Mt,I,j);w(M)&&M.mipmapsAutoUpdate===!0&&y(ut),xt.__version=pt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function dt(A,M,B){if(M.image.length!==6)return;let ut=Qt(A,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let pt=n.get(tt);if(tt.version!==pt.__version||ut===!0){e.activeTexture(i.TEXTURE0+B);let xt=he.getPrimaries(he.workingColorSpace),K=M.colorSpace===ni?null:he.getPrimaries(M.colorSpace),j=M.colorSpace===ni||xt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let Mt=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let St=0;St<6;St++)!Mt&&!I?Q[St]=v(M.image[St],!0,s.maxCubemapSize):Q[St]=I?M.image[St].image:M.image[St],Q[St]=Ut(M,Q[St]);let J=Q[0],yt=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),ot=T(M.internalFormat,yt,vt,M.normalized,M.colorSpace),lt=M.isVideoTexture!==!0,Dt=pt.__version===void 0||ut===!0,nt=tt.dataReady,At=S(M,J);Yt(i.TEXTURE_CUBE_MAP,M);let Ht;if(M.isDepthTexture){if(ot=_(M.format===ei,M.type),Dt)if(lt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,J.width,J.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ot,J.width,J.height,0,yt,vt,null)}else if(Mt){lt&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ot,J.width,J.height);for(let St=0;St<6;St++){Ht=Q[St].mipmaps;for(let Zt=0;Zt<Ht.length;Zt++){let se=Ht[Zt];M.format!==In?yt!==null?lt?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,0,0,se.width,se.height,yt,se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,ot,se.width,se.height,0,se.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,0,0,se.width,se.height,yt,vt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,ot,se.width,se.height,0,yt,vt,se.data)}}}else{if(Ht=M.mipmaps,lt&&Dt){Ht.length>0&&At++;let St=Ot(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ot,St.width,St.height)}for(let St=0;St<6;St++)if(I){lt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Q[St].width,Q[St].height,yt,vt,Q[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ot,Q[St].width,Q[St].height,0,yt,vt,Q[St].data);for(let Zt=0;Zt<Ht.length;Zt++){let ve=Ht[Zt].image[St].image;lt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,0,0,ve.width,ve.height,yt,vt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,ot,ve.width,ve.height,0,yt,vt,ve.data)}}else{lt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,yt,vt,Q[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ot,yt,vt,Q[St]);for(let Zt=0;Zt<Ht.length;Zt++){let se=Ht[Zt];lt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,0,0,yt,vt,se.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,ot,yt,vt,se.image[St])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),pt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function rt(A,M,B,ut,tt,pt){let xt=r.convert(B.format,B.colorSpace),K=r.convert(B.type),j=T(B.internalFormat,xt,K,B.normalized,B.colorSpace),Mt=n.get(M),I=n.get(B);if(I.__renderTarget=M,!Mt.__hasExternalTextures){let Q=Math.max(1,M.width>>pt),J=Math.max(1,M.height>>pt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,pt,j,Q,J,M.depth,0,xt,K,null):e.texImage2D(tt,pt,j,Q,J,0,xt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),st(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,tt,I.__webglTexture,0,Vt(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,tt,I.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(A,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let ut=M.depthTexture,tt=ut&&ut.isDepthTexture?ut.type:null,pt=_(M.stencilBuffer,tt),xt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(M),pt,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(M),pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,A)}else{let ut=M.textures;for(let tt=0;tt<ut.length;tt++){let pt=ut[tt],xt=r.convert(pt.format,pt.colorSpace),K=r.convert(pt.type),j=T(pt.internalFormat,xt,K,pt.normalized,pt.colorSpace);st(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(M),j,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(A,M,B){let ut=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(M.depthTexture);tt.__renderTarget=M;let pt=ut?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||pt.width!==M.width||pt.height!==M.height)&&(pt.width=M.width,pt.height=M.height,M.depthTexture.needsUpdate=!0),ut?$(M.depthTexture,0):ft(M.depthTexture,0);let xt=tt.__webglTexture,K=Vt(M),j=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Mt=M.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===jn)st(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,j,xt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,j,xt,0);else if(M.depthTexture.format===ei)st(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,j,xt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,j,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(A){let M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let ut=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ut){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ut.removeEventListener("dispose",tt)};ut.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=ut}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let ut=0;ut<6;ut++)Lt(M.__webglFramebuffer[ut],A,ut);else A.texture.mipmaps.length>0?Lt(M.__webglFramebuffer[0],A,0):Lt(M.__webglFramebuffer,A,0);else if(B){M.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ut]),M.__webglDepthbuffer[ut]===void 0)M.__webglDepthbuffer[ut]=i.createRenderbuffer(),Nt(M.__webglDepthbuffer[ut],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=M.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,pt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Nt(M.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,M,B){let ut=n.get(A);M!==void 0&&rt(ut.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&zt(A)}function Kt(A){let M=A.texture,B=n.get(A),ut=n.get(M);A.addEventListener("dispose",F),R(A);let tt=A.textures,pt=A.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=M.version,o.memory.textures++),pt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<M.mipmaps.length;j++)B.__webglFramebuffer[K][j]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xt)for(let K=0,j=tt.length;K<j;K++){let Mt=n.get(tt[K]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&st(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){let j=tt[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let Mt=r.convert(j.format,j.colorSpace),I=r.convert(j.type),Q=T(j.internalFormat,Mt,I,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),J=Vt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)rt(B.__webglFramebuffer[K][j],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else rt(B.__webglFramebuffer[K],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let K=0,j=tt.length;K<j;K++){let Mt=tt[K],I=n.get(Mt),Q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),Yt(Q,Mt),rt(B.__webglFramebuffer,A,Mt,i.COLOR_ATTACHMENT0+K,Q,0),w(Mt)&&y(Q)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,ut.__webglTexture),Yt(K,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)rt(B.__webglFramebuffer[j],A,M,i.COLOR_ATTACHMENT0,K,j);else rt(B.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,K,0);w(M)?y(K):M.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&zt(A)}function D(A){let M=A.textures;for(let B=0,ut=M.length;B<ut;B++){let tt=M[B];if(w(tt)&&tt.mipmapsAutoUpdate===!0){let pt=b(A),xt=n.get(tt).__webglTexture;e.bindTexture(pt,xt),y(pt),e.unbindTexture()}}}let at=[];function Tt(A){if(A.samples>0){if(st(A)===!1){let M=A.textures,B=A.width,ut=A.height,tt=i.COLOR_BUFFER_BIT,pt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),K=M.length>1;if(K)for(let Mt=0;Mt<M.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<M.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);let I=n.get(M[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,B,ut,0,0,B,ut,tt,i.NEAREST),l===!0&&(at.length=0,at.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&at.push(pt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let Mt=0;Mt<M.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);let I=n.get(M[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Vt(A){return Math.min(s.maxSamples,A.samples)}function st(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ut(A,M){let B=A.colorSpace,ut=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==tr&&B!==ni&&(he.getTransfer(B)===me?(ut!==In||tt!==un)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",B)),M}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=gt,this.resetTextureUnits=z,this.getTextureUnits=k,this.setTextureUnits=ct,this.setTexture2D=ft,this.setTexture2DArray=It,this.setTexture3D=kt,this.setTextureCube=$,this.rebindTextures=$t,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=st,this.dispose=H}function fv(i,t){function e(n,s=ni){let r,o=he.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yc)return i.BYTE;if(n===Mc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===In)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Tc)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===da)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===va||n===ya||n===Ma||n===Sa||n===Ir||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===va)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ma)return r.COMPRESSED_R11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return r.COMPRESSED_RG11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===ka||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Ga||n===Lr||n===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new th,m={},v=e.getContextAttributes(),w=null,y=null,b=[],T=[],_=new Pt,S=null,R=null,C=new Ge;C.viewport=new Re;let L=new Ge;L.viewport=new Re;let F=[C,L],V=new ia,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=b[Y];return ft===void 0&&(ft=new bs,b[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=b[Y];return ft===void 0&&(ft=new bs,b[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=b[Y];return ft===void 0&&(ft=new bs,b[Y]=ft),ft.getHandSpace()};function q(Y){let ft=T.indexOf(Y.inputSource);if(ft===-1)return;let It=b[ft];It!==void 0&&(It.update(Y.inputSource,Y.frame,c||o),It.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",it);for(let Y=0;Y<b.length;Y++){let ft=T[Y];ft!==null&&(T[Y]=null,b[Y].disconnect(ft))}P=null,H=null,g.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),R!==null){let Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,kt=null,$=null;v.depth&&($=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=v.stencil?ei:jn,kt=v.stencil?Ki:Rn);let wt={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new cn(u.textureWidth,u.textureHeight,{format:In,type:un,depthTexture:new Qn(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let It={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:In,type:un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(Y){for(let ft=0;ft<Y.removed.length;ft++){let It=Y.removed[ft],kt=T.indexOf(It);kt>=0&&(T[kt]=null,b[kt].disconnect(It))}for(let ft=0;ft<Y.added.length;ft++){let It=Y.added[ft],kt=T.indexOf(It);if(kt===-1){for(let wt=0;wt<b.length;wt++)if(wt>=T.length){T.push(It),kt=wt;break}else if(T[wt]===null){T[wt]=It,kt=wt;break}if(kt===-1)break}let $=b[kt];$&&$.connect(It)}}function G(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ft=Y.near,It=Y.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(It=g.depthFar)),V.near=L.near=C.near=ft,V.far=L.far=C.far=It,(P!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,H=V.far),V.layers.mask=Y.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let kt=Y.parent,$=V.cameras;G(V,kt);for(let wt=0;wt<$.length;wt++)G($[wt],kt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),z(Y,V,kt)};function z(Y,ft,It){It===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(It.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return m[Y]};let k=null;function ct(Y,ft){if(h=ft.getViewerPose(c||o),p=ft,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;It.length!==V.cameras.length&&(V.cameras.length=0,kt=!0);for(let bt=0;bt<It.length;bt++){let Yt=It[bt],Qt=null;if(f!==null)Qt=f.getViewport(Yt);else{let ht=d.getViewSubImage(u,Yt);Qt=ht.viewport,bt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(y))}let et=F[bt];et===void 0&&(et=new Ge,et.layers.enable(bt),et.viewport=new Re,F[bt]=et),et.matrix.fromArray(Yt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Yt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),bt===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),kt===!0&&V.cameras.push(et)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let bt=d.getDepthInformation(It[0]);bt&&bt.isValid&&bt.texture&&g.init(bt,s.renderState)}if($&&$.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let bt=0;bt<It.length;bt++){let Yt=It[bt].camera;if(Yt){let Qt=m[Yt];Qt||(Qt=new ur,m[Yt]=Qt);let et=d.getCameraImage(Yt);Qt.sourceTexture=et}}}}for(let It=0;It<b.length;It++){let kt=T[It],$=b[It];kt!==null&&$!==void 0&&$.update(kt,ft,c||o)}k&&k(Y,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),p=null}let gt=new Dd;gt.setAnimationLoop(ct),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}},gv=new de,Vd=new ee;Vd.set(-1,0,0,0,1,0,0,0,1);function _v(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Oc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ne&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ne&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),w=v.envMap,y=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ne&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,t,e,n){let s={},r={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,s[v.id])}function a(v,w){let y=s[v.id];y===void 0&&(p(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let b=w.program;n.updateUBOMapping(v,b);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let w=i.createBuffer(),y=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],y=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,_=y.length;T<_;T++){let S=y[T];if(Array.isArray(S))for(let R=0,C=S.length;R<C;R++)h(S[R],T,R,b);else h(S,T,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,y,b){if(u(v,w,y,b)===!0){let T=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let R=0;R<_.length;R++){let C=_[R],L=x(C,!0);d(C,v.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function u(v,w,y,b){let T=v.value,_=w+"_"+y;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);let S=b[_],R=!1;for(let C=0;C<T.length;C++)f(T[C],S,C)===!0&&(R=!0);return R}return f(T,b,_)}function f(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let b=w[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let w=v.uniforms,y=0,b=16;for(let _=0,S=w.length;_<S;_++){let R=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,L=R.length;C<L;C++){let F=R[C],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(w[_])||Array.isArray(F.value),H=y;for(let O=0,it=V.length;O<it;O++){let G=V[O],z=x(G,P),k=y%b,ct=k%z.boundary,gt=k+ct;y+=ct,gt!==0&&b-gt<z.storage&&(y+=b-gt),O===0&&(H=y),y+=z.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((y-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let T=y%b;return T>0&&(y+=b-T),v.__size=y,v.__cache={},this}function x(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let w=v.target;w.removeEventListener("dispose",g),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}var vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function yv(){return Bn===null&&(Bn=new Uo(vv,16,16,Mi,Pn),Bn.name="DFG_LUT",Bn.minFilter=Qe,Bn.magFilter=Qe,Bn.wrapS=Nn,Bn.wrapT=Nn,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var $a=class{constructor(t={}){let{canvas:e=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([fa,da,ua]),m=new Set([un,Rn,Is,Ki,ca,ha]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,T=null,_=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,V=null,P=null,H=null;this._outputColorSpace=He;let q=0,O=0,it=null,G=-1,z=null,k=new Re,ct=new Re,gt=null,Y=new Jt(0),ft=0,It=e.width,kt=e.height,$=1,wt=null,Et=null,bt=new Re(0,0,It,kt),Yt=new Re(0,0,It,kt),Qt=!1,et=new Wi,ht=new Fo,mt=!1,dt=!1,rt=new de,Nt=new N,Lt=new Re,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function Kt(){return it===null?$:1}let D=n;function at(E,U){return e.getContext(E,U)}let Tt,Vt,st,ne,Ut,Ot,A,M,B,ut,tt,pt,xt,K,j,Mt,I,Q,J,yt,vt,ot,lt;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",St,!1),D===null){let U="webgl2";if(D=at(U,E),D===null)throw at(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(E){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",St,!1),te("WebGLRenderer: "+E.message),E}function Dt(){Tt=new I_(D),Tt.init(),vt=new fv(D,Tt),Vt=new y_(D,Tt,t,vt),st=new uv(D,Tt),Vt.reversedDepthBuffer&&u&&st.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),H=D.createFramebuffer(),ne=new N_(D),Ut=new Kx,Ot=new dv(D,Tt,st,Ut,Vt,vt,ne),A=new P_(C),M=new Fm(D),ot=new x_(D,M),B=new L_(D,M,ne,ot),ut=new F_(D,B,M,ot,ne),Q=new U_(D,Vt,Ot),j=new M_(Ut),tt=new Jx(C,A,Tt,Vt,ot,j),pt=new _v(C,Ut),xt=new Qx,K=new rv(Tt),I=new __(C,A,st,ut,p,l),Mt=new hv(C,ut,Vt),lt=new xv(D,ne,Vt,st),J=new v_(D,Tt,ne),yt=new D_(D,Tt,ne),ne.programs=tt.programs,C.capabilities=Vt,C.extensions=Tt,C.properties=Ut,C.renderLists=xt,C.shadowMap=Mt,C.state=st,C.info=ne}x!==un&&(R=new B_(x,e.width,e.height,a,s,r));let nt=new eh(C,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(It,kt,!1))},this.getSize=function(E){return E.set(It,kt)},this.setSize=function(E,U,Z=!0){if(nt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}It=E,kt=U,e.width=Math.floor(E*$),e.height=Math.floor(U*$),Z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(It*$,kt*$).floor()},this.setDrawingBufferSize=function(E,U,Z){It=E,kt=U,$=Z,e.width=Math.floor(E*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===un){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(bt)},this.setViewport=function(E,U,Z,W){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,U,Z,W),st.viewport(k.copy(bt).multiplyScalar(Kt()).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,U,Z,W){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,U,Z,W),st.scissor(ct.copy(Yt).multiplyScalar(Kt()).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){st.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){wt=E},this.setTransparentSort=function(E){Et=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Z=!0){let W=0;if(E){let X=!1;if(it!==null){let Ct=it.texture.format;X=g.has(Ct)}if(X){let Ct=it.texture.type,Gt=m.has(Ct),Rt=I.getClearColor(),Bt=I.getClearAlpha(),qt=Rt.r,ie=Rt.g,le=Rt.b;Gt?(v[0]=qt,v[1]=ie,v[2]=le,v[3]=Bt,D.clearBufferuiv(D.COLOR,0,v)):(w[0]=qt,w[1]=ie,w[2]=le,w[3]=Bt,D.clearBufferiv(D.COLOR,0,w))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",St,!1),I.dispose(),xt.dispose(),K.dispose(),Ot.dispose(),Ut.dispose(),A.dispose(),ut.dispose(),B.dispose(),ot.dispose(),lt.dispose(),tt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Ke),nt.removeEventListener("sessionend",be),fn.stop()};function At(E){E.preventDefault(),Lc("WebGLRenderer: Context Lost."),L=!0}function Ht(){Lc("WebGLRenderer: Context Restored."),L=!1;let E=ne.autoReset,U=Mt.enabled,Z=Mt.autoUpdate,W=Mt.needsUpdate,X=Mt.type;Dt(),ne.autoReset=E,Mt.enabled=U,Mt.autoUpdate=Z,Mt.needsUpdate=W,Mt.type=X}function St(E){te("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){let U=E.target;U.removeEventListener("dispose",Zt),se(U)}function se(E){ve(E),Ut.remove(E)}function ve(E){let U=Ut.get(E).programs;U!==void 0&&(U.forEach(function(Z){tt.releaseProgram(Z)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Z,W,X,Ct){U===null&&(U=zt);let Gt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Rt=rp(E,U,Z,W,X);st.setMaterial(W,Gt);let Bt=Z.index,qt=1;if(W.wireframe===!0){if(Bt=B.getWireframeAttribute(Z),Bt===void 0)return;qt=2}let ie=Z.drawRange,le=Z.attributes.position,Wt=ie.start*qt,ce=(ie.start+ie.count)*qt;Ct!==null&&(Wt=Math.max(Wt,Ct.start*qt),ce=Math.min(ce,(Ct.start+Ct.count)*qt)),Bt!==null?(Wt=Math.max(Wt,0),ce=Math.min(ce,Bt.count)):le!=null&&(Wt=Math.max(Wt,0),ce=Math.min(ce,le.count));let Le=ce-Wt;if(Le<0||Le===1/0)return;ot.setup(X,W,Rt,Z,Bt);let ye,_e=J;if(Bt!==null&&(ye=M.get(Bt),_e=yt,_e.setIndex(ye)),X.isMesh)W.wireframe===!0?(st.setLineWidth(W.wireframeLinewidth*Kt()),_e.setMode(D.LINES)):_e.setMode(D.TRIANGLES);else if(X.isLine){let Ve=W.linewidth;Ve===void 0&&(Ve=1),st.setLineWidth(Ve*Kt()),X.isLineSegments?_e.setMode(D.LINES):X.isLineLoop?_e.setMode(D.LINE_LOOP):_e.setMode(D.LINE_STRIP)}else X.isPoints?_e.setMode(D.POINTS):X.isSprite&&_e.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))_e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ve=X._multiDrawStarts,Xt=X._multiDrawCounts,je=X._multiDrawCount,pe=Bt?M.get(Bt).bytesPerElement:1,Ni=Ut.get(W).currentProgram.getUniforms();for(let We=0;We<je;We++)Ni.setValue(D,"_gl_DrawID",We),_e.render(Ve[We]/pe,Xt[We])}else if(X.isInstancedMesh)_e.renderInstances(Wt,Le,X.count);else if(Z.isInstancedBufferGeometry){let Ve=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Xt=Math.min(Z.instanceCount,Ve);_e.renderInstances(Wt,Le,Xt)}else _e.render(Wt,Le)};function Ce(E,U,Z,W){F!==null&&E.isNodeMaterial&&F.setObject(W,E),mt===!0&&j.setState(E,Z,!1),E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,Gs(E,U,W),E.side=yi,E.needsUpdate=!0,Gs(E,U,W),E.side=vn):Gs(E,U,W)}this.compile=function(E,U,Z=null){Z===null&&(Z=E),F!==null&&F.renderStart(E,U,Z),T=K.get(Z),T.init(U),S.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),E!==Z&&E.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,mt=j.init(this.clippingPlanes,dt),mt===!0&&j.setGlobalState(this.clippingPlanes,U),F!==null&&Mt.render(T.state.shadowsArray,Z,U);let W=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ct=X.material;if(Ct)if(Array.isArray(Ct))for(let Gt=0;Gt<Ct.length;Gt++){let Rt=Ct[Gt];Ce(Rt,Z,U,X),W.add(Rt)}else Ce(Ct,Z,U,X),W.add(Ct)}),T=S.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(E,U,Z=null){let W=this.compile(E,U,Z);return new Promise(X=>{function Ct(){if(W.forEach(function(Gt){let Bt=Ut.get(Gt).currentProgram;(Bt===void 0||Bt.isReady())&&W.delete(Gt)}),W.size===0){X(E);return}setTimeout(Ct,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Pe=null;function Sn(E){Pe&&Pe(E)}function Ke(){fn.stop()}function be(){fn.start()}let fn=new Dd;fn.setAnimationLoop(Sn),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(E){Pe=E,nt.setAnimationLoop(E),E===null?fn.stop():fn.start()},nt.addEventListener("sessionstart",Ke),nt.addEventListener("sessionend",be),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,U);let Z=nt.enabled===!0&&nt.isPresenting===!0,W=R!==null&&(it===null||Z)&&R.begin(C,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,U,it),T=K.get(E,S.length),T.init(U),T.state.textureUnits=Ot.getTextureUnits(),S.push(T),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ht.setFromArrayCamera(U):et.setFromProjectionMatrix(rt,mn,U.reversedDepth),dt=this.localClippingEnabled,mt=j.init(this.clippingPlanes,dt),b=xt.get(E,_.length),b.init(),_.push(b),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Gt=C.xr.getDepthSensingMesh();Gt!==null&&ai(Gt,U,-1/0,C.sortObjects)}ai(E,U,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(wt,Et),$t=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,$t&&I.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),mt===!0&&j.beginShadows();let X=T.state.shadowsArray;if(Mt.render(X,E,U),mt===!0&&j.endShadows(),(W&&R.hasRenderPass())===!1){let Gt=b.opaque,Rt=b.transmissive;if(T.setupLights(),U.isArrayCamera){let Bt=U.cameras;if(Rt.length>0)for(let qt=0,ie=Bt.length;qt<ie;qt++){let le=Bt[qt];Ii(Gt,Rt,E,le)}$t&&I.render(E);for(let qt=0,ie=Bt.length;qt<ie;qt++){let le=Bt[qt];Wn(b,E,le,le.viewport)}}else Rt.length>0&&Ii(Gt,Rt,E,U),$t&&I.render(E),Wn(b,E,U)}it!==null&&O===0&&(Ot.updateMultisampleRenderTarget(it),Ot.updateRenderTargetMipmap(it)),W&&R.end(C),E.isScene===!0&&E.onAfterRender(C,E,U),ot.resetDefaultState(),G=-1,z=null,S.pop(),S.length>0?(T=S[S.length-1],Ot.setTextureUnits(T.state.textureUnits),mt===!0&&j.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,F!==null&&F.renderEnd()};function ai(E,U,Z,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Gt=U.isArrayCamera?ht:et;if(!E.frustumCulled||E.intersectsFrustum(Gt)){W&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);let Rt=ut.update(E),Bt=E.material;Bt.visible&&b.push(E,Rt,Bt,Z,Lt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Gt=U.isArrayCamera?ht:et;if(!E.frustumCulled||E.intersectsFrustum(Gt)){let Rt=ut.update(E),Bt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Lt.copy(Rt.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(Bt)){let qt=Rt.groups;for(let ie=0,le=qt.length;ie<le;ie++){let Wt=qt[ie],ce=Bt[Wt.materialIndex];ce&&ce.visible&&b.push(E,Rt,ce,Z,Lt.z,Wt,U)}}else Bt.visible&&b.push(E,Rt,Bt,Z,Lt.z,null,U)}}}let Ct=E.children;for(let Gt=0,Rt=Ct.length;Gt<Rt;Gt++)ai(Ct[Gt],U,Z,W)}function Wn(E,U,Z,W){let{opaque:X,transmissive:Ct,transparent:Gt}=E;T.setupLightsView(Z),mt===!0&&j.setGlobalState(C.clippingPlanes,Z),W&&st.viewport(k.copy(W)),X.length>0&&Li(X,U,Z),Ct.length>0&&Li(Ct,U,Z),Gt.length>0&&Li(Gt,U,Z),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ii(E,U,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Wt=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new cn(1,1,{generateMipmaps:!0,type:Wt?Pn:un,minFilter:ti,samples:Math.max(4,Vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Ct=T.state.transmissionRenderTarget[W.id],Gt=W.viewport||k;Ct.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),Bt=C.getActiveCubeFace(),qt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(Y),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),$t&&I.render(Z);let ie=C.toneMapping;C.toneMapping=On;let le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),mt===!0&&j.setGlobalState(C.clippingPlanes,W),Li(E,Z,W),Ot.updateMultisampleRenderTarget(Ct),Ot.updateRenderTargetMipmap(Ct),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ce=0,Le=U.length;ce<Le;ce++){let ye=U[ce],{object:_e,geometry:Ve,material:Xt,group:je}=ye;if(Xt.side===vn&&_e.layers.test(W.layers)){let pe=Xt.side;Xt.side=Ne,Xt.needsUpdate=!0,Hs(_e,Z,W,Ve,Xt,je),Xt.side=pe,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Ot.updateMultisampleRenderTarget(Ct),Ot.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Rt,Bt,qt),C.setClearColor(Y,ft),le!==void 0&&(W.viewport=le),C.toneMapping=ie}function Li(E,U,Z){let W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Ct=E.length;X<Ct;X++){let Gt=E[X],{object:Rt,geometry:Bt,group:qt}=Gt,ie=Gt.material;ie.allowOverride===!0&&W!==null&&(ie=W),Rt.layers.test(Z.layers)&&Hs(Rt,U,Z,Bt,ie,qt)}}function Hs(E,U,Z,W,X,Ct){F!==null&&X.isNodeMaterial&&F.setObject(E,X),E.onBeforeRender(C,U,Z,W,X,Ct),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(C,U,Z,W,E,Ct),X.transparent===!0&&X.side===vn&&X.forceSinglePass===!1?(X.side=Ne,X.needsUpdate=!0,C.renderBufferDirect(Z,U,W,X,E,Ct),X.side=yi,X.needsUpdate=!0,C.renderBufferDirect(Z,U,W,X,E,Ct),X.side=vn):C.renderBufferDirect(Z,U,W,X,E,Ct),E.onAfterRender(C,U,Z,W,X,Ct)}function Di(E){let U=0;for(let Z of E)Z.texture!==null&&U++;return U}function Gs(E,U,Z){U.isScene!==!0&&(U=zt);let W=Ut.get(E),X=T.state.lights,Ct=T.state.shadowsArray,Gt=X.state.version,Rt=tt.getParameters(E,X.state,Ct,U,Z,T.state.lightProbeGridArray),Bt=tt.getProgramCacheKey(Rt),qt=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=A.get(E.envMap||W.environment,ie),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",Zt),qt=new Map,W.programs=qt,W.programVariants=new Map);let le=qt.get(Bt);if(le!==void 0){if(W.currentProgram===le&&W.lightsStateVersion===Gt)return Gh(E,Rt),le}else Rt.uniforms=tt.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Z,Rt),E.onBeforeCompile(Rt,C),le=tt.acquireProgram(Rt,Bt),qt.set(Bt,le),W.uniforms=Rt.uniforms;let Wt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=j.uniform),Gh(E,Rt),W.needsLights=ap(E),W.lightsStateVersion=Gt,W.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.sunLights.value=X.state.sun,Wt.sunLightShadows.value=X.state.sunShadow,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.sunShadowMatrix.value=X.state.sunShadowMatrix,Wt.sunShadowCascade.value=X.state.sunShadowCascade,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=Di(T.state.lightProbeGridArray),W.currentProgram=le,W.uniformsList=null,le}function sp(E,U,Z,W,X){let Ct=Ut.get(E),Gt=Ct.currentProgram.id+","+W+","+X,Rt=Ct.programVariants.get(Gt);return Rt===void 0?(Rt=Gs(E,U,Z),Ct.programVariants.set(Gt,Rt)):(Ct.currentProgram=Rt,Ct.uniformsList=null,Ct.outputColorSpace=W,Ct.toneMapping=X),Rt}function Hh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Gh(E,U){let Z=Ut.get(E);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function rp(E,U,Z,W,X){U.isScene!==!0&&(U=zt),Ot.resetTextureUnits();let Ct=U.fog,Gt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Rt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:he.workingColorSpace,Bt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,qt=A.get(W.envMap||Gt,Bt),ie=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,le=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,Le=!!Z.morphAttributes.color,ye=On;W.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=C.toneMapping);let _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ve=_e!==void 0?_e.length:0,Xt=Ut.get(W),je=T.state.lights;if(mt===!0&&(dt===!0||E!==z)){let Ee=E===z&&W.id===G;j.setState(W,E,Ee)}let pe=!1,Ni=!1;W.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==je.state.version||X.isBatchedMesh&&Xt.batching===!1||!X.isBatchedMesh&&Xt.batching===!0||X.isBatchedMesh&&Xt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Xt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Xt.instancing===!1||!X.isInstancedMesh&&Xt.instancing===!0||X.isSkinnedMesh&&Xt.skinning===!1||!X.isSkinnedMesh&&Xt.skinning===!0||X.isInstancedMesh&&Xt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xt.instancingMorph===!1&&X.morphTexture!==null||Xt.envMap!==qt||W.fog===!0&&Xt.fog!==Ct||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==j.numPlanes||Xt.numIntersection!==j.numIntersection)||Xt.vertexAlphas!==ie||Xt.vertexTangents!==le||Xt.morphTargets!==Wt||Xt.morphNormals!==ce||Xt.morphColors!==Le||Xt.morphTargetsCount!==Ve||Xt.numLightProbeGrids!==Di(T.state.lightProbeGridArray)?pe=!0:(Xt.outputColorSpace!==Rt||Xt.toneMapping!==ye)&&(Ni=!0):(pe=!0,Xt.__version=W.version);let We=Xt.currentProgram;(pe===!0||Ni===!0)&&(We=Ni===!0?sp(W,U,X,Rt,ye):Gs(W,U,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,We,Xt));let Zr=!1,li=!1,Ui=!1,fe=We.getUniforms(),ze=Xt.uniforms;if(st.useProgram(We.program)&&(Zr=!0,li=!0,Ui=!0),W.id!==G&&(G=W.id,li=!0),Zr||z!==E){st.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",E.projectionMatrix),fe.setValue(D,"viewMatrix",E.matrixWorldInverse);let Oe=fe.map.cameraPosition;Oe!==void 0&&Oe.setValue(D,Nt.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,li=!0,Ui=!0)}if(Xt.needsLights&&(je.state.sunShadowMap.length>0&&fe.setValue(D,"sunShadowMap",je.state.sunShadowMap,Ot),je.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",je.state.directionalShadowMap,Ot),je.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",je.state.spotShadowMap,Ot),je.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",je.state.pointShadowMap,Ot)),X.isSkinnedMesh){fe.setOptional(D,X,"bindMatrix"),fe.setOptional(D,X,"bindMatrixInverse");let Ee=X.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),fe.setValue(D,"boneTexture",Ee.boneTexture,Ot))}X.isBatchedMesh&&(fe.setOptional(D,X,"batchingTexture"),fe.setValue(D,"batchingTexture",X._matricesTexture,Ot),fe.setOptional(D,X,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",X._indirectTexture,Ot),fe.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",X._colorsTexture,Ot));let bn=Z.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Q.update(X,Z,We),(li||Xt.receiveShadow!==X.receiveShadow)&&(Xt.receiveShadow=X.receiveShadow,fe.setValue(D,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(ze.envMapIntensity.value=U.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=yv()),li){if(fe.setValue(D,"toneMappingExposure",C.toneMappingExposure),Xt.needsLights&&op(ze,Ui),Ct&&W.fog===!0&&pt.refreshFogUniforms(ze,Ct),pt.refreshMaterialUniforms(ze,W,$,kt,T.state.transmissionRenderTarget[E.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let Ee=y,Oe=0;for(let Xn of T.state.lightProbeGridArray)Xn.texture!==null&&(Ee.textures[Oe]=Xn.texture,Ee.min[Oe]=Xn.boundingBox.min,Ee.max[Oe]=Xn.boundingBox.max,Ee.resolution[Oe]=Xn.resolution,Oe++);for(let Xn in Ee)Ee[Xn].length=Oe;ze.probesSH.value=Ee.textures,ze.probesMin.value=Ee.min,ze.probesMax.value=Ee.max,ze.probesResolution.value=Ee.resolution}Ds.upload(D,Hh(Xt),ze,Ot)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ds.upload(D,Hh(Xt),ze,Ot),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(D,"center",X.center),fe.setValue(D,"modelViewMatrix",X.modelViewMatrix),fe.setValue(D,"normalMatrix",X.normalMatrix),fe.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Ee=W.uniformsGroups;for(let Oe=0,Xn=Ee.length;Oe<Xn;Oe++){let Wh=Ee[Oe];lt.update(Wh,We),lt.bind(Wh,We)}}return We}function op(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function ap(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,U,Z){let W=Ut.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ut.get(E.texture).__webglTexture=U,Ut.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let Z=Ut.get(E);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Z=0){it=E,q=U,O=Z;let W=null,X=!1,Ct=!1;if(E){let Rt=Ut.get(E);if(Rt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(D.FRAMEBUFFER,Rt.__webglFramebuffer),k.copy(E.viewport),ct.copy(E.scissor),gt=E.scissorTest,st.viewport(k),st.scissor(ct),st.setScissorTest(gt),G=-1;return}else if(Rt.__webglFramebuffer===void 0)Ot.setupRenderTarget(E);else if(Rt.__hasExternalTextures)Ot.rebindTextures(E,Ut.get(E.texture).__webglTexture,Ut.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ie=E.depthTexture;if(Rt.__boundDepthTexture!==ie){if(ie!==null&&Ut.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(E)}}let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ct=!0);let qt=Ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[U])?W=qt[U][Z]:W=qt[U],X=!0):E.samples>0&&Ot.useMultisampledRTT(E)===!1?W=Ut.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[Z]:W=qt,k.copy(E.viewport),ct.copy(E.scissor),gt=E.scissorTest}else k.copy(bt).multiplyScalar($).floor(),ct.copy(Yt).multiplyScalar($).floor(),gt=Qt;if(Z!==0&&(W=V),st.bindFramebuffer(D.FRAMEBUFFER,W)&&st.drawBuffers(E,W),st.viewport(k),st.scissor(ct),st.setScissorTest(gt),X){let Rt=Ut.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,Z)}else if(Ct){let Rt=U;for(let Bt=0;Bt<E.textures.length;Bt++){let qt=Ut.get(E.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,qt.__webglTexture,Z,Rt)}}else if(E!==null&&Z!==0){let Rt=Ut.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,Z)}G=-1};function Vh(E){let U=Ut.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=Vt.textureFormatReadable(E.format),U.__typeReadable=Vt.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Z,W,X,Ct,Gt,Rt=0){if(!(E&&E.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Gt!==void 0&&(Bt=Bt[Gt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt){st.bindFramebuffer(D.FRAMEBUFFER,Bt);try{let qt=E.textures[Rt],ie=qt.format,le=qt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Rt);let Wt=Vh(qt);if(Wt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&Z>=0&&Z<=E.height-X&&D.readPixels(U,Z,W,X,vt.convert(ie),vt.convert(le),Ct)}finally{let qt=it!==null?Ut.get(it).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(E,U,Z,W,X,Ct,Gt,Rt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Gt!==void 0&&(Bt=Bt[Gt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt)if(U>=0&&U<=E.width-W&&Z>=0&&Z<=E.height-X){st.bindFramebuffer(D.FRAMEBUFFER,Bt);let qt=E.textures[Rt],ie=qt.format,le=qt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Rt);let Wt=Vh(qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ce),D.bufferData(D.PIXEL_PACK_BUFFER,Ct.byteLength,D.STREAM_READ),D.readPixels(U,Z,W,X,vt.convert(ie),vt.convert(le),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Le=it!==null?Ut.get(it).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,Le);let ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await td(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ct),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ce),D.deleteSync(ye),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(E.image.width*W),Ct=Math.floor(E.image.height*W),Gt=U!==null?U.x:0,Rt=U!==null?U.y:0;Ot.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Gt,Rt,X,Ct),st.unbindTexture()},this.copyTextureToTexture=function(E,U,Z=null,W=null,X=0,Ct=0){let Gt,Rt,Bt,qt,ie,le,Wt,ce,Le,ye=E.isCompressedTexture?E.mipmaps[Ct]:E.image;if(Z!==null)Gt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Bt=Z.isBox3?Z.max.z-Z.min.z:1,qt=Z.min.x,ie=Z.min.y,le=Z.isBox3?Z.min.z:0;else{let fe=Math.pow(2,-X);Gt=Math.floor(ye.width*fe),Rt=Math.floor(ye.height*fe),E.isDataArrayTexture?Bt=ye.depth:E.isData3DTexture?Bt=Math.floor(ye.depth*fe):Bt=1,qt=0,ie=0,le=0}W!==null?(Wt=W.x,ce=W.y,Le=W.z):(Wt=0,ce=0,Le=0);let _e=vt.convert(U.format),Ve=vt.convert(U.type),Xt;U.isData3DTexture?(Ot.setTexture3D(U,0),Xt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ot.setTexture2DArray(U,0),Xt=D.TEXTURE_2D_ARRAY):(Ot.setTexture2D(U,0),Xt=D.TEXTURE_2D),st.activeTexture(D.TEXTURE0),st.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),st.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),st.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let je=st.getParameter(D.UNPACK_ROW_LENGTH),pe=st.getParameter(D.UNPACK_IMAGE_HEIGHT),Ni=st.getParameter(D.UNPACK_SKIP_PIXELS),We=st.getParameter(D.UNPACK_SKIP_ROWS),Zr=st.getParameter(D.UNPACK_SKIP_IMAGES);st.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),st.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),st.pixelStorei(D.UNPACK_SKIP_PIXELS,qt),st.pixelStorei(D.UNPACK_SKIP_ROWS,ie),st.pixelStorei(D.UNPACK_SKIP_IMAGES,le);let li=E.isDataArrayTexture||E.isData3DTexture,Ui=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let fe=Ut.get(E),ze=Ut.get(U),bn=Ut.get(fe.__renderTarget),Ee=Ut.get(ze.__renderTarget);st.bindFramebuffer(D.READ_FRAMEBUFFER,bn.__webglFramebuffer),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<Bt;Oe++)li&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.get(E).__webglTexture,X,le+Oe),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,Ct,Le+Oe)),D.blitFramebuffer(qt,ie,qt+Gt,ie+Rt,Wt,ce,Wt+Gt,ce+Rt,D.DEPTH_BUFFER_BIT,D.NEAREST);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Ut.has(E)){let fe=Ut.get(E),ze=Ut.get(U);st.bindFramebuffer(D.READ_FRAMEBUFFER,P),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let bn=0;bn<Bt;bn++)li?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.__webglTexture,X,le+bn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,X),Ui?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ze.__webglTexture,Ct,Le+bn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ze.__webglTexture,Ct),X!==0?D.blitFramebuffer(qt,ie,qt+Gt,ie+Rt,Wt,ce,Wt+Gt,ce+Rt,D.COLOR_BUFFER_BIT,D.NEAREST):Ui?D.copyTexSubImage3D(Xt,Ct,Wt,ce,Le+bn,qt,ie,Gt,Rt):D.copyTexSubImage2D(Xt,Ct,Wt,ce,qt,ie,Gt,Rt);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ui?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Xt,Ct,Wt,ce,Le,Gt,Rt,Bt,_e,Ve,ye.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,Ct,Wt,ce,Le,Gt,Rt,Bt,_e,ye.data):D.texSubImage3D(Xt,Ct,Wt,ce,Le,Gt,Rt,Bt,_e,Ve,ye):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ct,Wt,ce,Gt,Rt,_e,Ve,ye.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ct,Wt,ce,ye.width,ye.height,_e,ye.data):D.texSubImage2D(D.TEXTURE_2D,Ct,Wt,ce,Gt,Rt,_e,Ve,ye);st.pixelStorei(D.UNPACK_ROW_LENGTH,je),st.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),st.pixelStorei(D.UNPACK_SKIP_PIXELS,Ni),st.pixelStorei(D.UNPACK_SKIP_ROWS,We),st.pixelStorei(D.UNPACK_SKIP_IMAGES,Zr),Ct===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&D.generateMipmap(Xt),st.unbindTexture()},this.initRenderTarget=function(E){Ut.get(E).__webglFramebuffer===void 0&&Ot.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ot.setTextureCube(E,0):E.isData3DTexture?Ot.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ot.setTexture2DArray(E,0):Ot.setTexture2D(E,0),st.unbindTexture()},this.resetState=function(){q=0,O=0,it=null,st.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var xe={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},blendHalfLife:.07,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.12,stopTime:.08,turnRate:14,aimTurnRate:20,sprintTurnRate:3,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5}};function Ka({step:i,render:t,before:e,hz:n=60,maxSteps:s=5}){let r=1/n,o=0,a=0,l=null,c=!1;function h(x){if(!(x>0)||!Number.isFinite(x))return;e&&e(x),o+=x;let g=0;for(;o>=r&&g<s;)i(r),o-=r,g++;o>=r&&(o=0),t(Math.min(o/r,1-Number.EPSILON),x)}function d(x){if(c){try{l!==null&&h((x-l)/1e3)}catch(g){throw p(),g}l=x,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function p(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:p}}var nh=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),Mv={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},Sv={0:"fire",2:"aim"},Wd={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},Xd={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]};function Yd(i){return Mv[i]||null}function qd(i){return Sv[i]||null}function Us(){let i={};for(let t of nh)i[t]=!1;return i}function $d(i,t,e=.15){let n=Math.hypot(i,t);if(n<e)return[0,0];let s=Math.min(1,(n-e)/(1-e))/n;return[i*s,t*s]}function bv(i){if(!i||!i.connected)return{ok:!1,reason:"none"};if(i.mapping!=="standard"||!i.buttons||i.buttons.length<16||!i.axes||i.axes.length<4)return{ok:!1,reason:"unrecognised"};let[t,e]=$d(i.axes[0],i.axes[1]),[n,s]=$d(i.axes[2],i.axes[3]),r=Us();for(let o in Wd){let a=i.buttons[o];r[Wd[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:t,moveY:e,lookX:n,lookY:s,held:r}}function wv(i){i.downCodes&&i.downCodes.clear(),i.downButtons&&i.downButtons.clear(),i.latched&&i.latched.clear(),i.held=i.held||{};for(let t of nh)i.held[t]=!1;for(let t in i.held)i.held[t]=!1;return i.lookDX=0,i.lookDY=0,i.lookX=0,i.lookY=0,i.moveX=0,i.moveY=0,i}function ja(i){let t={downCodes:new Set,downButtons:new Set,latched:new Set,held:Us(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:e,downButtons:n,latched:s}=t,r="kbm",o="none",a=Us();i.tabIndex<0&&(i.tabIndex=0);let l=()=>document.pointerLockElement===i,c=()=>l()||document.activeElement===i;function h(){wv(t)}function d(b){let T=Yd(b.code);(T||b.code in Xd)&&(c()&&(b.code==="Tab"||b.code==="Space")&&b.preventDefault(),r="kbm",!b.repeat&&!e.has(b.code)&&T&&s.add(T),e.add(b.code))}function u(b){e.delete(b.code)}function f(b){b.target===i&&i.focus();let T=qd(b.button);T&&(r="kbm",n.has(b.button)||s.add(T),n.add(b.button))}function p(b){n.delete(b.button)}function x(b){l()&&(r="kbm",t.lookDX+=b.movementX||0,t.lookDY+=b.movementY||0)}function g(b){!c()||!b.deltaY||(r="kbm",s.add(b.deltaY>0?"weaponNext":"weaponPrev"),b.preventDefault())}function m(b){b.preventDefault()}function v(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",p),window.addEventListener("blur",h),document.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",v),i.addEventListener("mousedown",f),i.addEventListener("wheel",g,{passive:!1}),i.addEventListener("contextmenu",m);function w(){let b=[];try{b=navigator.getGamepads&&navigator.getGamepads()||[]}catch{b=[]}let T=null;for(let S of b)if(S&&S.connected){T=S;break}let _=bv(T);return o=_.ok?T.id:_.reason==="none"?"none":"unrecognised controller",_}function y(){let b={moveX:0,moveY:0,lookDX:t.lookDX,lookDY:t.lookDY,lookX:0,lookY:0,held:Us(),pressed:Us()};t.lookDX=0,t.lookDY=0;for(let S of e){let R=Yd(S);R&&(b.held[R]=!0);let C=Xd[S];C&&(b.moveX+=C[0],b.moveY+=C[1])}for(let S of n){let R=qd(S);R&&(b.held[R]=!0)}let T=Math.hypot(b.moveX,b.moveY);T>1&&(b.moveX/=T,b.moveY/=T);for(let S of s)b.pressed[S]=!0;s.clear();let _=w();if(_.ok){b.lookX=_.lookX,b.lookY=_.lookY;let S=_.moveX!==0||_.moveY!==0||_.lookX!==0||_.lookY!==0;for(let C of nh)_.held[C]&&(S=!0,b.held[C]=!0,a[C]||(b.pressed[C]=!0));a=_.held,b.moveX+=_.moveX,b.moveY+=_.moveY;let R=Math.hypot(b.moveX,b.moveY);R>1&&(b.moveX/=R,b.moveY/=R),S&&(r="pad")}else a=Us();return b}return{poll:y,requestLock(){try{let b=i.requestPointerLock&&i.requestPointerLock();b&&typeof b.catch=="function"&&b.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Jd(i,t,e=14){let n=i;return t>20?n-=.1:t<e&&(n+=.05),Math.round(Math.min(1,Math.max(.5,n))*100)/100}var Ev=2e3,Zd=1e4,Tv=8e4;function Kd({startMs:i=0,scale:t=1}={}){let e=t,n=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-i<Ev||(n+=Math.min(h,100),s++,s<60||n<1e3))return e;let u=n/s;n=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=Jd(e,u,Math.max(14,1.1*r));if(f>e){if(d<l)return e;o=d}else f<e&&(o!==null&&d-o<Zd&&(a=a===0?Zd:Math.min(a*2,Tv),l=d+a),o=null);return e=f,e}return{sample:c,scale:()=>e}}var _t=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var ih={viewportHeight:{value:1080}};function Fs(i){i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=t.count,s=new Map,r=new Array(n),o=l=>Math.round(l*1e4);for(let l=0;l<n;l++){let c=o(t.getX(l))+","+o(t.getY(l))+","+o(t.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=e.getX(l),h[1]+=e.getY(l),h[2]+=e.getZ(l)}let a=i.getAttribute("outlineNormal");(!a||a.count!==n)&&(a=new Se(new Float32Array(n*3),3),i.setAttribute("outlineNormal",a));for(let l=0;l<n;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=e.getX(l),d=e.getY(l),u=e.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,i}var Av=`
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
`,Rv=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function Cv({px:i=xe.outlinePx,color:t=_t.ink,outlineNormal:e=!1}={}){return new qe({name:"outline",uniforms:{px:{value:i},inkColor:{value:new Jt(t)},viewportHeight:ih.viewportHeight},defines:e?{USE_OUTLINE_NORMAL:""}:{},vertexShader:Av,fragmentShader:Rv,side:Ne})}function Pv(){}var jd=new Map;function Iv(i,t,e){let n=i+"|"+new Jt(t).getHexString()+"|"+e,s=jd.get(n);return s||(s=Cv({px:i,color:t,outlineNormal:e}),jd.set(n,s)),s}function zn(i,{px:t=xe.outlinePx}={}){let e=!!i.geometry.getAttribute("outlineNormal"),n=Iv(t,_t.ink,e),s=new ge(i.geometry,n);return s.name="outline",s.userData.isOutline=!0,s.raycast=Pv,i.add(s),s}function sh(i,t){i.traverse(e=>{e.userData.isOutline&&(e.visible=t)})}function Lv(i,t,e,n){let s=Math.max(1,Math.floor(i)||1),r=Math.max(1,Math.floor(t)||1),o=Math.min(e>0?e:1,2)*n;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Qa(i,t){let e=new $a({canvas:i,context:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=He;let n=Kd({startMs:performance.now()});function s(){let o=Lv(window.innerWidth,window.innerHeight,window.devicePixelRatio,n.scale());return e.setPixelRatio(o.pixelRatio),e.setSize(o.width,o.height,!1),ih.viewportHeight.value=i.height,o}function r(o){let a=n.scale();n.sample(o,performance.now())!==a&&s()}return{renderer:e,resize:s,frameDone:r,scale:n.scale}}var ii={lightDir:{value:new N(...xe.lightDir).normalize()},shadowTint:{value:new Jt(_t.shadowTint)},bandEdge:{value:.15},shadowLift:{value:xe.shadowLift}},Dv=`
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
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPos = mvPosition.xyz;
  vViewNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPosition;
}
`,Nv=`
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
`;function yn({color:i="#ffffff",vertexColors:t=!1,shadowMix:e=.55,rim:n=.25}={}){return new qe({name:"toon",uniforms:{baseColor:{value:new Jt(i)},shadowMix:{value:e},rim:{value:n},lightDir:ii.lightDir,shadowTint:ii.shadowTint,bandEdge:ii.bandEdge,shadowLift:ii.shadowLift},vertexShader:Dv,fragmentShader:Nv,vertexColors:t})}var Uv=400,Fv=[-.45,.22,-1],Ov=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,Bv=`
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
`;function tl({planetDir:i=Fv}={}){let t=r=>new Jt(r),e=new qe({name:"sky",uniforms:{deep:{value:t(_t.nebulaDeep)},hot:{value:t(_t.nebulaHot)},pink:{value:t(_t.hotPink)},lilac:{value:t(_t.lilac)},ink:{value:t(_t.ink)},planetColor:{value:t(_t.planet)},shadowTint:ii.shadowTint,shadowLift:ii.shadowLift,bandEdge:ii.bandEdge,lightDir:ii.lightDir,planetDir:{value:new N(...i).normalize()},time:{value:0}},vertexShader:Ov,fragmentShader:Bv,side:Ne,depthWrite:!1}),n=new ge(new xn(Uv,48,24),e);n.name="sky",n.frustumCulled=!1,n.renderOrder=1e3,n.raycast=()=>{};function s(r){e.uniforms.time.value=r}return{mesh:n,update:s}}function Si(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new we;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Qd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=Qd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Qd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ef(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=t*.5,f=Math.log10(1/t),p=Math.pow(10,f),x=u*p;for(let m=0;m<r;m++){let v=n?n.getX(m):m,w="";for(let y=0,b=a.length;y<b;y++){let T=a[y],_=i.getAttribute(T),S=_.itemSize;for(let R=0;R<S;R++)w+=`${Math.trunc(_[d[R]](v)*p+x)},`}w in e?h.push(e[w]):(l.push(v),e[w]=o,h.push(o),o++)}let g=i.clone();for(let m in i.attributes)g.setAttribute(m,tf(i.attributes[m],l,c));for(let m in i.morphAttributes)g.morphAttributes[m]=i.morphAttributes[m].map(v=>tf(v,l,c));return g.setIndex(h),g}function tf(i,t,e=new Map){let n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize,o=n?e.get(s):void 0;if(o===void 0){let l=new s.array.constructor(t.length*r);for(let c=0;c<t.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[t[c]*r+h];o=n?new s.constructor(l,r,s.meshPerAttribute):new i.constructor(l,i.itemSize,i.normalized,i.meshPerAttribute),o.setUsage(s.usage),n&&e.set(s,o)}let a=n?new i.constructor(o,i.itemSize,i.offset,i.normalized):o;return a.name=i.name,n||(a.gpuType=i.gpuType),a}function rh(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function nf(i,t,e=.03,n=.04){let s=i.getAttribute("position"),r=i.getAttribute("normal");i.computeBoundingBox();let o=i.boundingBox,a=o.getSize(new N),l=o.getCenter(new N),c=a.length(),h=rh(t*7919+13>>>0),d=[];for(let m=0;m<8;m++)d.push(h()*2-1);let u=Math.min(e*c,n)*.99/Math.sqrt(3),f=(m,v)=>v>1e-9?2*m/v:0,p=[a.x,a.y,a.z].map(m=>m>1e-9?2/m:0),x=new ee,g=new N;for(let m=0;m<s.count;m++){let v=f(s.getX(m)-l.x,a.x),w=f(s.getY(m)-l.y,a.y),y=f(s.getZ(m)-l.z,a.z),b=(w+1)/2,T=(d[0]*w+d[1]*v*w)/2,_=(d[2]*v+d[3]*y)/2*b,S=(d[4]*w+d[5]*y*w)/2;if(r){let R=[d[1]*w/2,(d[0]+d[1]*v)/2,0],C=[d[2]/2*b,(d[2]*v+d[3]*y)/2*.5,d[3]/2*b],L=[0,(d[4]+d[5]*y)/2,d[5]*w/2];x.set(1+u*R[0]*p[0],u*R[1]*p[1],u*R[2]*p[2],u*C[0]*p[0],1+u*C[1]*p[1],u*C[2]*p[2],u*L[0]*p[0],u*L[1]*p[1],1+u*L[2]*p[2]),x.invert().transpose(),g.set(r.getX(m),r.getY(m),r.getZ(m)).applyMatrix3(x).normalize(),r.setXYZ(m,g.x,g.y,g.z)}s.setXYZ(m,s.getX(m)+u*T,s.getY(m)+u*_,s.getZ(m)+u*S)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),i.computeBoundingBox(),i.computeBoundingSphere(),i}var oh=null;function kv(){return oh||(oh=yn({vertexColors:!0})),oh}var lh=(i,t,e)=>new Jt(i).lerp(new Jt(t),e),ch=(i,t=.3)=>lh(i,"#ffffff",t),el=(i,t=.2)=>lh(i,_t.shadowTint,t),sf=new de,rf=new tn,of=new sn,zv=new N,Hv=new N;function bi(i=1,t=.02,e="prop"){let n=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let p=u.wonk===void 0?t:u.wonk;p>0&&nf(f,i*131+s,p),s++;let x=f.getAttribute("normal"),g=new Float32Array(x.count*3);for(let m=0;m<x.count;m++){let v=typeof d=="function"?d(x.getX(m),x.getY(m),x.getZ(m)):d;g[m*3]=v.r,g[m*3+1]=v.g,g[m*3+2]=v.b}return f.setAttribute("color",new Se(g,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),of.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),rf.setFromEuler(of),sf.compose(zv.set(u.x||0,u.y||0,u.z||0),rf,Hv.set(1,1,1)),f.applyMatrix4(sf),n.push(f),f}function o(h,d={}){let u=d.top||ch(h),f=d.side||el(h,.22),p=el(h,.4),x=new Jt(h);return(g,m,v)=>m>.5?u:m<-.5?p:Math.abs(g)>.5?f:v>0?x:p}function a(h,d,u,f,p={}){return r(new rn(h,d,u),o(f,p),p)}function l(h,d,u,f,p,x,g,m={}){return a(d-h,f-u,x-p,g,{...m,x:(h+d)/2,y:(u+f)/2,z:(p+x)/2})}function c(h=0){let d=Si(n,!1);if(!d)throw new Error(`${e}: parts have different attributes and cannot be merged`);return h>0&&nf(d,i,h),Fs(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function wi(i){let t=new Ae,e=new ge(i,kv());return zn(e),t.add(e),t}var si=i=>()=>new Jt(i);function nl({w:i,d:t,tile:e=1,colors:n=[_t.cream,_t.tealLight]}){let s=bi(1,0,"floor");s.span(-i/2,i/2,-.15,-.002,-t/2,t/2,_t.lilac,{top:new Jt(_t.lilac)});let o=Math.round(i/e),a=Math.round(t/e);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new gi(e,e);h.rotateX(-Math.PI/2),s.add(h,si(n[(l+c)%2]),{wonk:0,x:-i/2+(l+.5)*e,y:0,z:-t/2+(c+.5)*e})}return wi(s.finish())}function hh({w:i,h:t,color:e=_t.cream,stripe:n=_t.hotPink,opening:s=null,seed:r=2}){let o=bi(r,0,"wall"),a=.2,l=a/2,c=-i/2,h=i/2,d=-.3,u=new Es;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,t),u.lineTo(c,t),u.closePath(),s){let m=new Xi,v=s.x-s.w/2,w=s.x+s.w/2;m.moveTo(v,s.y),m.lineTo(v,s.y+s.h),m.lineTo(w,s.y+s.h),m.lineTo(w,s.y),m.closePath(),u.holes.push(m)}let f=new yr(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(e),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,_t.lilac),o.span(c-.05,h+.05,t-.1,t+.12,-l-.06,l+.08,_t.teal);let p=.5,x=.8;return s&&s.y<x&&s.y+s.h>p?(o.span(c,s.x-s.w/2,p,x,l-.01,l+.03,n),o.span(s.x+s.w/2,h,p,x,l-.01,l+.03,n)):o.span(c,h,p,x,l-.01,l+.03,n),wi(o.finish(.006))}function Gv(i,t,e,n){let s=g=>Math.min(2048,Math.max(64,Math.round(g))),r=s(n>=1?1024:1024*n),o=s(n>=1?1024/n:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=i.split(" "),d=[[i]];for(let g=1;g<h.length;g++)d.push([h.slice(0,g).join(" "),h.slice(g).join(" ")]);let u=null;for(let g of d){let m=Math.max(...g.map(w=>l.measureText(w).width)),v=Math.min(r*.88*100/m,o*.8/(g.length*1.08));(!u||v>u.size)&&(u={lines:g,size:v})}l.fillStyle=t,l.fillRect(0,0,r,o),l.strokeStyle=e,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,p=o/2-(u.lines.length-1)*f/2;u.lines.forEach((g,m)=>{let v=p+m*f;l.fillStyle=_t.ink,l.fillText(g,r/2+u.size*.05,v+u.size*.06),l.fillStyle=e,l.fillText(g,r/2,v)});let x=new cr(a);return x.colorSpace=He,x.anisotropy=8,x}function Vv({text:i,w:t,h:e,bg:n=_t.hotPink,fg:s=_t.cream,tilt:r=.04,seed:o=3}){let c=bi(o,0,"sign");c.box(t,e,.14,s,{wonk:0});let h=wi(c.finish()),d=t-.14*2,u=e-.14*2,f=new ge(new gi(d,u),new Vi({map:Gv(i,n,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function af({w:i,h:t,seed:e=4}){let n=bi(e,.012,"window"),s=.15,r=.34;return n.span(-i/2,-i/2+s,0,t,-r/2,r/2,_t.teal),n.span(i/2-s,i/2,0,t,-r/2,r/2,_t.teal),n.span(-i/2+s,i/2-s,t-s,t,-r/2,r/2,_t.teal),n.span(-i/2+s,i/2-s,0,s,-r/2,r/2,_t.teal),n.span(-i/2-.2,i/2+.2,-.08,.06,-r/2,r/2+.28,_t.hotPink),n.span(-.04,.04,s,t-s,-.04,.04,_t.cream),n.span(-i/2+s,i/2-s,t/2-.04,t/2+.04,-.04,.04,_t.cream),wi(n.finish(.006))}function Or(i,t,e,n,s,r){let o=new qi(.16,.05,8,20);i.add(o,si(_t.planet),{wonk:.04,x:t,y:e,z:n,rx:-Math.PI/2+s,ry:r})}function lf({w:i,h:t,name:e,signColor:n=_t.hotPink,seed:s=5}){let r=bi(s,.012,"shopFront"),o=.5,a=.5,l=t,c=t-1.4,h=lh(_t.glorpPurple,_t.ink,.7);r.span(-i/2+a,i/2-a,0,c,-o/2,-o/2+.1,h),r.span(-i/2+a,i/2-a,1.15,1.22,-o/2,-o/2+.4,_t.lilac);for(let m of[-1,1]){let v=m*(i/2-a/2);r.span(v-a/2,v+a/2,0,c,-o/2,o/2,_t.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,_t.teal)}r.span(-i/2,i/2,c,l,-o/2,o/2,_t.teal);let d=i-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,_t.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,_t.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,_t.cream),Or(r,-.9,1.01,.4,.1,.4),Or(r,-.2,1.01,.5,-.1,-.3),Or(r,.6,1.01,.38,.12,.9),Or(r,1.2,1.01,.52,0,.1);let u=10,f=(i-.1)/u,p=.42;for(let m=0;m<u;m++){let v=m%2?_t.cream:n,w=-i/2+.05+(m+.5)*f;r.box(f,.08,.95,v,{x:w,y:c-.02,z:o/2+.35,rx:p,top:ch(v,.2)}),r.box(f,.22,.06,v,{x:w,y:c-.24,z:o/2+.8,rx:.1})}let x=wi(r.finish(.006)),g=Vv({text:e,w:i-.7,h:1.15,bg:n,fg:_t.cream,seed:s+1});return g.position.set(0,c+.7,o/2+.01),x.add(g),x}function cf({w:i=2,d:t=1,h:e=.9,color:n=_t.teal,seed:s=7}={}){let r=bi(s,.018,"kiosk");r.span(-i/2+.03,i/2-.03,0,.16,-t/2+.03,t/2-.03,_t.lilac),r.span(-i/2,i/2,.16,e-.08,-t/2,t/2,n),r.span(-i/2-.07,i/2+.07,e-.08,e,-t/2-.07,t/2+.07,_t.cream);let o=4,a=(i-.3)/o;for(let c=0;c<o;c++){let h=c%2?_t.cream:_t.hotPink;r.box(a-.04,e-.45,.05,h,{x:-i/2+.15+(c+.5)*a,y:.5,z:t/2+.02})}r.box(.38,.28,.3,_t.glorpPurple,{x:-.55,y:e+.14,z:-.1}),r.box(.3,.14,.04,_t.gel,{x:-.55,y:e+.28,z:.07,rx:-.5,wonk:0}),Or(r,.45,e+.06,.05,.1,.5);let l=wi(r.finish(.006));return l.userData.footprint={w:i+.14,d:t+.14},l}function hf({w:i=1.8,seed:t=11}={}){let e=bi(t,.02,"bench"),n=.5;e.box(i,.1,n,_t.lilac,{y:.46}),e.box(i,.42,.08,_t.glorpPurple,{y:.86,z:-n/2+.04,rx:-.14});for(let r of[-1,1])e.box(.1,.46,n-.06,_t.teal,{x:r*(i/2-.2),y:.23}),e.box(.08,.5,.08,_t.teal,{x:r*(i/2-.2),y:.7,z:-n/2+.05,rx:-.14});let s=wi(e.finish(.006));return s.userData.footprint={w:i,d:n},s}function Wv(i,t,e){let n=new rn(.035,i,t,1,5,1).toNonIndexed(),s=n.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+i/2)/i;s.setXYZ(r,s.getX(r)+e*o*o,s.getY(r)+i/2,s.getZ(r)*(1-.9*o))}return n.computeVertexNormals(),n}function uf({seed:i=21}={}){let t=bi(i,.02,"planter"),e=rh(i);t.add(new _n(.42,.32,.55,16),si(_t.teal),{y:.275}),t.add(new _n(.47,.44,.12,16),si(_t.hotPink),{y:.6}),t.add(new _n(.4,.4,.04,16),si(el(_t.glorpPurple,.5)),{y:.64,wonk:0});let n=0,s=.66,r=el(_t.planet,.15);for(let l=0;l<6;l++)t.add(new _n(.06-l*.004,.07-l*.004,.34,8),si(l%2?ch(r,.2):r),{x:n,y:s+.34/2,rz:-.12,wonk:.03}),n+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+e()*.3,h=l%2?.95+e()*.25:1.45+e()*.25,d=new de().makeTranslation(n,s,0).multiply(new de().makeRotationY(c)).multiply(new de().makeRotationZ(-h));t.add(Wv(.95,.24,l%2?.22:.4),si(l%2?_t.gel:_t.teal),{m:d,wonk:.03})}t.add(new xn(.1,10,8),si(_t.planet),{x:n,y:s-.05,z:.08}),t.add(new xn(.1,10,8),si(_t.planet),{x:n+.07,y:s-.1,z:-.07});let a=wi(t.finish());return a.userData.footprint={w:.95,d:.95},a}var ah=null;function il({rx:i,rz:t,opacity:e=.35}){let r=new Jt(_t.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,e];for(let d=1;d<=8;d++){let u=d/8,f=e*(1-u*u*(3-2*u));for(let p=0;p<28;p++){let x=p/28*Math.PI*2;o.push(Math.cos(x)*i*u,0,Math.sin(x)*t*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let p=0;p<28;p++){let x=(p+1)%28;l.push(u+p,u+x,f+p,u+x,f+x,f+p)}}let c=new we;c.setAttribute("position",new ue(o,3)),c.setAttribute("color",new ue(a,4)),c.setIndex(l),ah||(ah=new Vi({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new ge(c,ah);return h.name="blobShadow",h.position.y=.012,h}var Br=8,sl=Br/2,uh=.2;function df(){let i=new Ae;i.add(nl({w:Br,d:Br}));let t=hh({w:Br+uh*2,h:4});t.position.set(0,0,-sl-uh/2),i.add(t);let e=1.3,n=lf({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:_t.hotPink});n.position.set(e,0,-sl+.25),i.add(n);let s={x:-.9,y:1.7,w:3,h:2},r=hh({w:Br,h:4,color:"#f1e6ff",opening:s});r.position.set(-sl-uh/2,0,0),r.rotation.y=Math.PI/2;let o=af({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),i.add(r);let a=cf({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=hf({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=uf({seed:21});c.position.set(-2.95,0,-2.9),i.add(a,l,c);let h=(d,u,f,p,x=0)=>{let g=il({rx:f,rz:p,opacity:.7});g.position.x=d,g.position.z=u,g.rotation.y=x,i.add(g)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(e,-sl+.9,2.7,.8),{group:i,spawn:[0,0,0],update(){}}}function Ln(i,t,e,n){if(!(e>0)||!(n>0))return e>0||(i.x=t,i.v=0),i;let s=4*Math.LN2/e/2,r=i.x-t,o=i.v+r*s,a=Math.exp(-s*n);return i.x=a*(r+o*n)+t,i.v=a*(i.v-o*s*n),i}function dh(i,t,e,n,s,r){let o=e+n,a=t[0]-i[0],l=t[1]-i[1],c=t[2]-i[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=t[0],f=t[1],p=t[2];h>d&&(h=d,u=i[0]+a*h,f=i[1]+l*h,p=i[2]+c*h);let x=h>o?h/o:1;if(h>=o){let S=h*(o>0?e/o:.5);return ff(r,i[0]+a*S,i[1]+l*S,i[2]+c*S,u,f,p,x)}let g=Math.max(h,1e-6),m=Math.min(Math.max((g*g+e*e-n*n)/(2*g),-e),e),v=Math.sqrt(Math.max(e*e-m*m,0)),w=s[0],y=s[1],b=s[2],T=w*a+y*l+b*c;w-=a*T,y-=l*T,b-=c*T;let _=Math.hypot(w,y,b);return _<1e-6&&(Math.abs(a)<.9?(w=0,y=c,b=-l):(w=-c,y=0,b=a),_=Math.hypot(w,y,b)||1),w/=_,y/=_,b/=_,ff(r,i[0]+a*m+w*v,i[1]+l*m+y*v,i[2]+c*m+b*v,u,f,p,x)}function ff(i,t,e,n,s,r,o,a){if(!i)return{mid:[t,e,n],end:[s,r,o],stretch:a};let l=i.mid,c=i.end;return l[0]=t,l[1]=e,l[2]=n,c[0]=s,c[1]=r,c[2]=o,i.stretch=a,i}var pf=[.65,1.2];function fh({radius:i=.06,rings:t=8,sides:e=8,color:n="#ffffff"}={}){let s=t+1,r=pf.length,o=s*e,a=[o,o+r*e+1],l=o+2*(r*e+1),c=[],h=(dt,rt,Nt)=>{for(let Lt=0;Lt<e;Lt++){let zt=(Lt+1)%e,$t=dt+Lt,Kt=dt+zt,D=rt+Lt,at=rt+zt;Nt?c.push($t,D,Kt,Kt,D,at):c.push($t,Kt,D,Kt,at,D)}};for(let dt=0;dt<t;dt++)h(dt*e,(dt+1)*e,!1);for(let dt=0;dt<2;dt++){let rt=dt===0,Nt=dt===0?0:t*e;for(let zt=0;zt<r;zt++){let $t=a[dt]+zt*e;h(Nt,$t,rt),Nt=$t}let Lt=a[dt]+r*e;for(let zt=0;zt<e;zt++){let $t=Nt+zt,Kt=Nt+(zt+1)%e;rt?c.push($t,Lt,Kt):c.push($t,Kt,Lt)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new we,p=new Se(d,3),x=new Se(u,3);p.setUsage(Ls),x.setUsage(Ls),f.setAttribute("position",p),f.setAttribute("normal",x),f.setIndex(c);let g=new ge(f,yn({color:n}));g.name="limb";let m=new Fn(new N,i*2);f.boundingSphere=m,zn(g);let v=new Float64Array(e),w=new Float64Array(e);for(let dt=0;dt<e;dt++)v[dt]=Math.cos(dt/e*Math.PI*2),w[dt]=Math.sin(dt/e*Math.PI*2);let y=0,b=-1,T=0,_=1,S=0,R=0,C=0,L=0,F=1,V=0,P=0,H=0,q=0,O=0,it=0,G=0,z=0,k=0,ct=0,gt=0,Y=0,ft=0,It=0,kt=0,$=0,wt=0,Et=0;function bt(dt,rt,Nt,Lt,zt,$t,Kt,D,at,Tt,Vt,st,ne,Ut,Ot,A){for(let M=0;M<e;M++){let B=v[M]*$t+w[M]*at,ut=v[M]*Kt+w[M]*Tt,tt=v[M]*D+w[M]*Vt,pt=(dt+M)*3;d[pt]=rt+B*zt,d[pt+1]=Nt+ut*zt,d[pt+2]=Lt+tt*zt,u[pt]=B*Ot+st*A,u[pt+1]=ut*Ot+ne*A,u[pt+2]=tt*Ot+Ut*A}}let Yt=!1,Qt=1,et=0,ht=0;function mt(dt,rt,Nt,Lt=1){let zt=i/Math.sqrt(Lt>1?Lt:1),$t=2*rt[0]-(dt[0]+Nt[0])/2,Kt=2*rt[1]-(dt[1]+Nt[1])/2,D=2*rt[2]-(dt[2]+Nt[2])/2,at=dt[0],Tt=dt[1],Vt=dt[2],st=Nt[0],ne=Nt[1],Ut=Nt[2],Ot=(rt[1]-Tt)*(Ut-rt[2])-(rt[2]-Vt)*(ne-rt[1]),A=(rt[2]-Vt)*(st-rt[0])-(rt[0]-at)*(Ut-rt[2]),M=(rt[0]-at)*(ne-rt[1])-(rt[1]-Tt)*(st-rt[0]),B=Math.hypot(Ot,A,M),ut=rt[0]-at,tt=rt[1]-Tt,pt=rt[2]-Vt,xt=Math.hypot(ut,tt,pt),K=st-rt[0],j=ne-rt[1],Mt=Ut-rt[2],I=!1;B>1e-4*xt*Math.hypot(K,j,Mt)&&B>1e-12?(Ot/=B,A/=B,M/=B,Yt&&Ot*Qt+A*et+M*ht<0&&(Ot=-Ot,A=-A,M=-M),I=!0):xt>1e-9&&ut*K+tt*j+pt*Mt<0&&($t=(at+st)/2,Kt=(Tt+ne)/2,D=(Vt+Ut)/2);let Q=(at+$t+st)/3,J=(Tt+Kt+ne)/3,yt=(Vt+D+Ut)/3,vt=Math.max(Math.hypot(at-Q,Tt-J,Vt-yt),Math.hypot($t-Q,Kt-J,D-yt),Math.hypot(st-Q,ne-J,Ut-yt));m.center.set(Q,J,yt),m.radius=vt+i*1.5+.02;for(let ot=0;ot<s;ot++){let lt=ot/t,Dt=1-lt,nt=Dt*Dt,At=2*Dt*lt,Ht=lt*lt,St=nt*at+At*$t+Ht*st,Zt=nt*Tt+At*Kt+Ht*ne,se=nt*Vt+At*D+Ht*Ut,ve=2*Dt*($t-at)+2*lt*(st-$t),Ce=2*Dt*(Kt-Tt)+2*lt*(ne-Kt),Pe=2*Dt*(D-Vt)+2*lt*(Ut-D),Sn=Math.hypot(ve,Ce,Pe);if(Sn>1e-9?(y=ve/Sn,b=Ce/Sn,T=Pe/Sn):ot===0&&(y=0,b=-1,T=0),ot===0){I?(_=Ot,S=A,R=M):Yt?(_=Qt,S=et,R=ht):(_=1,S=0,R=0);let Ke=_*y+S*b+R*T;_-=y*Ke,S-=b*Ke,R-=T*Ke;let be=Math.hypot(_,S,R);be<1e-6&&(Math.abs(y)<.9?(_=0,S=T,R=-b):(_=-T,S=0,R=y),be=Math.hypot(_,S,R)||1),_/=be,S/=be,R/=be,Qt=_,et=S,ht=R,Yt=!0}else{let Ke=_*y+S*b+R*T;_-=y*Ke,S-=b*Ke,R-=T*Ke;let be=Math.hypot(_,S,R);be<1e-6&&(Math.abs(y)<.9?(_=0,S=T,R=-b):(_=-T,S=0,R=y),be=Math.hypot(_,S,R)||1),_/=be,S/=be,R/=be}C=b*R-T*S,L=T*_-y*R,F=y*S-b*_,bt(ot*e,St,Zt,se,zt,_,S,R,C,L,F,0,0,0,1,0),ot===0&&(V=y,P=b,H=T,q=_,O=S,it=R,G=C,z=L,k=F),ot===s-1&&(ct=y,gt=b,Y=T,ft=_,It=S,kt=R,$=C,wt=L,Et=F)}for(let ot=0;ot<2;ot++){let lt=ot===0?-1:1,Dt=ot===0?at:st,nt=ot===0?Tt:ne,At=ot===0?Vt:Ut,Ht=ot===0?V:ct,St=ot===0?P:gt,Zt=ot===0?H:Y,se=ot===0?q:ft,ve=ot===0?O:It,Ce=ot===0?it:kt,Pe=ot===0?G:$,Sn=ot===0?z:wt,Ke=ot===0?k:Et,be=Ht*lt,fn=St*lt,ai=Zt*lt;for(let Ii=0;Ii<r;Ii++){let Li=pf[Ii],Hs=Math.cos(Li),Di=Math.sin(Li);bt(a[ot]+Ii*e,Dt+be*zt*Di,nt+fn*zt*Di,At+ai*zt*Di,zt*Hs,se,ve,Ce,Pe,Sn,Ke,be,fn,ai,Hs,Di)}let Wn=(a[ot]+r*e)*3;d[Wn]=Dt+be*zt,d[Wn+1]=nt+fn*zt,d[Wn+2]=At+ai*zt,u[Wn]=be,u[Wn+1]=fn,u[Wn+2]=ai}p.needsUpdate=!0,x.needsUpdate=!0}return{mesh:g,set:mt}}var ts=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),Xv=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),rl=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],ph=.04,Yv=9;function ol(i,t){let e=Math.sin(i*12.9898+t*78.233)*43758.5453;return(e-Math.floor(e))*Math.PI*2}function qv(i,t,e=[0,0]){return e[0]=.05*Math.sin(1.3*i+ol(t,1))+.03*Math.sin(2.1*i+ol(t,2)),e[1]=.04*Math.sin(1.7*i+ol(t,3))+.02*Math.sin(2.6*i+ol(t,4)),e}var $v=(i,t)=>Math.min(i*2,1)*Math.max(t,0),kr=16,mf=kr+1,Hn=11,Ei=4,al=13,Zv=.07,Jv=i=>{let t=i<0?0:i>1?1:i;return t*t*(3-2*t)};function gf({eyeRadius:i=.1,eyeSpacing:t=.26,eyeY:e=.05,eyeZ:n=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=n,brow:a="pair",seed:l=1,lidColor:c=_t.ink,fixedSmile:h=0}={}){let d=i,u=t/2,f=[-u,u],p=.35,x=.035*d,g=d*.3,m=a==="uni",v=0,w=v+2*mf,y=w+16,b=y+2*Hn*Ei,T=b+2*Hn*2,_=T+(m?6:8),S=_+al*2,R=[],C=at=>R.push(at,at+1,at+2,at,at+2,at+3),L=(at,Tt)=>{for(let Vt=0;Vt<Tt-1;Vt++){let st=at+Vt*2;R.push(st,st+1,st+2,st+1,st+3,st+2)}};for(let at=0;at<2;at++){let Tt=v+at*mf;for(let Vt=0;Vt<kr;Vt++)R.push(Tt,Tt+1+Vt,Tt+1+(Vt+1)%kr)}for(let at=0;at<4;at++)C(w+at*4);for(let at=0;at<2;at++){let Tt=y+at*Hn*Ei;for(let Vt=0;Vt<Hn-1;Vt++)for(let st=0;st<Ei-1;st++){let ne=Tt+Vt*Ei+st,Ut=ne+1,Ot=ne+Ei,A=Ot+1;R.push(ne,Ut,Ot,Ut,A,Ot)}L(b+at*Hn*2,Hn)}m?R.push(T,T+1,T+2,T+1,T+3,T+2,T+2,T+3,T+4,T+3,T+5,T+4):(C(T),C(T+4)),L(_,al);let F=[];for(let at=0;at<2;at++){let Tt=new xn(d,18,12);Tt.deleteAttribute("uv"),Tt.applyMatrix4(new de().makeScale(1,1,p).setPosition(f[at],e,n)),F.push(Tt)}let V=new ge(Si(F,!1),yn({color:_t.eyeWhite,shadowMix:.35,rim:0}));V.name="eyes",zn(V,{px:2});let P=new Float32Array(S*3),H=new Float32Array(S*3),q=new Float32Array(S*3),O=new Jt(_t.ink),it=new Jt(c);for(let at=0;at<S;at++){H[at*3+2]=1;let Tt=at>=y&&at<b?it:O;q[at*3]=Tt.r,q[at*3+1]=Tt.g,q[at*3+2]=Tt.b}let G=new we,z=new Se(P,3);z.setUsage(Ls),G.setAttribute("position",z),G.setAttribute("normal",new Se(H,3)),G.setAttribute("color",new Se(q,3)),G.setIndex(R);let k=e+d*3.5,ct=s-r*1.5-d,gt=Math.max(u+2.5*d,r);G.boundingSphere=new Fn(new N(0,(k+ct)/2,n),Math.hypot(gt,(k-ct)/2,d*2));let Y=yn({color:"#ffffff",vertexColors:!0,rim:0});Y.side=vn;let ft=new ge(G,Y);ft.name="features";let It=new Ae;It.name="face",It.add(V,ft);let kt=ts.neutral,$=at=>{let Tt=h>0?Xv[at]:0;return Tt>0?h*Tt:-1/0},wt=$("neutral"),Et=at=>at==="mouthCurve"&&kt.mouthCurve<wt?wt:kt[at],bt={};for(let at of rl)bt[at]={x:Et(at),v:0};let Yt={x:0,v:0},Qt={x:0,v:0},et=0,ht=!1,mt=0,dt=[0,0],rt=0;function Nt(at,Tt,Vt){let st=rt*3;P[st]=at,P[st+1]=Tt,P[st+2]=Vt,rt++}function Lt(at,Tt,Vt){let st=1-(at*at+Tt*Tt)/(d*d);return n+d*p*Math.sqrt(st>0?st:0)+Vt}function zt(at,Tt,Vt,st,ne,Ut){let Ot=-(st-Tt),A=Vt-at,M=Math.hypot(Ot,A)||1;Ot=Ot/M*ne/2,A=A/M*ne/2,Nt(at+Ot,Tt+A,Ut),Nt(Vt+Ot,st+A,Ut),Nt(Vt-Ot,st-A,Ut),Nt(at-Ot,Tt-A,Ut)}let $t=d*1.03;function Kt(){let at=bt,Tt=at.pupilScale.x*(1-Yt.x),Vt=Yt.x,st=Math.min(Math.max(at.lid.x,0),.95),ne=at.browAngle.x,Ut=st>.005,Ot=$t-2*$t*st,A=ne*.6*Math.min(st*4,1),M=d*Zv*Math.min(st*10,1);rt=v;for(let lt=0;lt<2;lt++){let Dt=lt===0?-1:1;qv(mt,l+lt*7.31,dt);let nt=d*.5*(Tt>0?Tt:0),At=dt[0]*d,Ht=dt[1]*d;if(Ut){let Zt=Ot+A*Dt*At-Math.abs(A)*nt-M-(Ht+nt);if(Zt>0){let se=Math.min(Math.max((Zt-.1*d)/(.1*d),0),1);Ht+=Zt*(1-Jv(se))}}Nt(f[lt]+At,e+Ht,Lt(At,Ht,x));for(let St=0;St<kr;St++){let Zt=St/kr*Math.PI*2,se=At+Math.cos(Zt)*nt,ve=Ht+Math.sin(Zt)*nt;Nt(f[lt]+se,e+ve,Lt(se,ve,x))}}rt=w;for(let lt=0;lt<2;lt++){let Dt=d*.55*Vt,nt=Lt(0,0,x),At=d*.26*Vt;zt(f[lt]-Dt,e-Dt,f[lt]+Dt,e+Dt,At,nt),zt(f[lt]-Dt,e+Dt,f[lt]+Dt,e-Dt,At,nt)}for(let lt=0;lt<2;lt++){let Dt=lt===0?-1:1;for(let nt=0;nt<2;nt++){rt=nt===0?y+lt*Hn*Ei:b+lt*Hn*2;for(let At=0;At<Hn;At++){let Ht=(At/(Hn-1)*2-1)*(Math.PI/2),St=$t*Math.sin(Ht),Zt=$t*Math.cos(Ht),se=Ut?Ot+A*St:Zt;se>Zt&&(se=Zt),se<-Zt&&(se=-Zt);let ve=Dt*St;if(nt===0)for(let Ce=0;Ce<Ei;Ce++){let Pe=Zt+(se-Zt)*(Ce/(Ei-1));Nt(f[lt]+ve,e+Pe,Lt(ve,Pe*.97,x*3))}else{let Ce=se+(Ut?d*.02:0);Ce>Zt&&(Ce=Zt);let Pe=se-M;Pe<-Zt&&(Pe=-Zt),Nt(f[lt]+ve,e+Ce,Lt(ve,Ce*.97,x*3.5)),Nt(f[lt]+ve,e+Pe,Lt(ve,Pe*.97,x*3.5))}}}}rt=T;let B=d*.9,ut=e+d*(1.4+at.browY.x),tt=Math.cos(ne),pt=Math.sin(ne),xt=n+d*.15;if(m){let lt=u+B*tt,Dt=ut+B*pt,nt=ut-pt/(tt>.3?tt:.3)*u,At=-(nt-Dt),Ht=lt,St=Math.hypot(At,Ht)||1;At/=St,Ht/=St;let Zt=-(Dt-nt),se=lt,ve=Math.hypot(Zt,se)||1;Zt/=ve,se/=ve;let Ce=At+Zt,Pe=Ht+se,Sn=Math.hypot(Ce,Pe)||1;Ce/=Sn,Pe/=Sn;let Ke=Ce*At+Pe*Ht,be=g/2/(Ke>.4?Ke:.4);Nt(-lt+At*g/2,Dt+Ht*g/2,xt),Nt(-lt-At*g/2,Dt-Ht*g/2,xt),Nt(Ce*be,nt+Pe*be,xt),Nt(-Ce*be,nt-Pe*be,xt),Nt(lt+Zt*g/2,Dt+se*g/2,xt),Nt(lt-Zt*g/2,Dt-se*g/2,xt)}else for(let lt=0;lt<2;lt++){let Dt=lt===0?-1:1;zt(f[lt]-Dt*B*tt,ut-B*pt,f[lt]+Dt*B*tt,ut+B*pt,g,xt)}rt=_;let K=at.mouthOpen.x+Qt.x*(.55+.45*Math.sin((mt+l*.37)*Yv*Math.PI*2))*.8,j=K>0?K<1.2?K:1.2:0,Mt=-at.mouthCurve.x/.5,I=(Mt>1?1:Mt>0?Mt:0)*(j<.4?j/.4:1),Q=r/2*(1-.35*(j<1?j:1)*(1-.7*I)),J=$v(at.lid.x,at.mouthCurve.x),yt=at.mouthCurve.x*Q*.5*(1-.4*J)*(1+.6*I),vt=.55+.5*I,ot=j*Q*.9;for(let lt=0;lt<al;lt++){let Dt=lt/(al-1)*2-1,nt=1-Dt*Dt,At=Dt*Q*(1-.25*J)+J*Q*.2,Ht=s-yt*nt+J*Q*.45*Dt+Yt.x*g*.6*Math.sin(Dt*Math.PI*3);Nt(At,Ht,o),Nt(At,Ht-g-ot*Math.pow(nt,vt)+yt*nt*I,o)}z.needsUpdate=!0}function D(at){mt+=at;for(let Tt=0;Tt<rl.length;Tt++)Ln(bt[rl[Tt]],Et(rl[Tt]),ph,at);Ln(Yt,et,ph,at),Ln(Qt,ht?1:0,ph,at),Kt()}return Kt(),{group:It,setExpression(at){kt=Object.prototype.hasOwnProperty.call(ts,at)?ts[at]:ts.neutral,et=at==="dead"?1:0,wt=$(Object.prototype.hasOwnProperty.call(ts,at)?at:"neutral")},setTalking(at){ht=!!at},update:D}}var Ti=Math.PI*2,zr=["handL","handR","footL","footR"];function Vn(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function _f(i,t){t.hipsY=i.hipsY,t.lean=i.lean,t.twist=i.twist,t.headYaw=i.headYaw,t.headPitch=i.headPitch,t.squash=i.squash,t.elbows=i.elbows;for(let e=0;e<4;e++){let n=i[zr[e]],s=t[zr[e]];s[0]=n[0],s[1]=n[1],s[2]=n[2]}return t}function pl(i,t,e,n=[0,0,0]){let s=e[0],r=e[1]-i.hipHeight,o=e[2],a=Math.cos(t.lean),l=Math.sin(t.lean),c=Math.cos(t.twist),h=Math.sin(t.twist),d=r*a-o*l,u=r*l+o*a;return n[0]=s*c+u*h,n[1]=d+t.hipsY,n[2]=-s*h+u*c,n}var Kv=i=>i<0?0:i>1?1:i,Bs=(i,t,e)=>{let n=Kv((e-i)/(t-i));return n*n*(3-2*n)},dl=(i,t,e,n,s)=>Bs(t,e,i)*(1-Bs(n,s,i));function Gn(i,t,e,n){return i[0]=t,i[1]=e,i[2]=n,i}var ll=[0,0,0];function Hr(i,t,e,n,s,r){return ll[0]=e,ll[1]=n,ll[2]=s,pl(i,t,ll,r)}var cl={sx:0,sy:0,fx:0};function ks(i){return cl.sx=Math.abs(i.shoulderL[0]),cl.sy=i.shoulderL[1],cl.fx=Math.abs(i.hipL[0])+.035,cl}var fl=(i,t)=>t>0?i.handL:i.handR;function mh(i,t,e,n,s){return Hr(i,t,s*(e.sx+.16),i.hipHeight+0,.1,n)}var gh=.55;function xh(i,t,e){let n=ks(t),s=i/Ze.idle.duration,r=Ti*s,o=t.hipHeight,a=dl(s,.42,.52,.72,.86);return e.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),e.lean=.03+.015*Math.sin(r+.4),e.twist=.05*Math.sin(r+.6),e.headYaw=.03*Math.sin(r)+.3*a,e.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,e.squash=1+.008*Math.sin(r),e.elbows=gh,mh(t,e,n,e.handL,1),mh(t,e,n,e.handR,-1),e.handL[1]+=.008*Math.sin(r-.5),e.handR[1]+=.008*Math.sin(r+.4),e.handL[2]+=.01*Math.sin(r+1.1),e.handR[2]+=.01*Math.sin(r-.7),Gn(e.footL,n.fx,0,.015),Gn(e.footR,-n.fx,0,-.015),e}var ri=.34,_h=.25,vf=-.33,jv=.4,Qv=.37,ty=.035,ul=(_h-vf)/ri;function xf(i,t){if(i<ri)return t[0]=0,t[1]=_h-ul*i,t;let e=(i-ri)/(1-ri),n=-ul*(1-ri),s=-.35*ul*(1-ri),r=e*e,o=r*e;return t[1]=(2*o-3*r+1)*vf+(o-2*r+e)*n+(-2*o+3*r)*_h+(o-r)*s,t[0]=jv*Math.sin(Math.PI*Math.pow(e,.8)),t}var Os=[0,0];function yf(i,t,e){let n=ks(t),s=i/Ze.run.duration,r=s-Math.floor(s),o=t.hipHeight,a=2*Ti*(r-(ri+.5)/2);e.hipsY=o-.06+ty*Math.cos(a),e.squash=1+.045*Math.cos(2*Ti*(r-ri-.03)),e.lean=Qv+.03*Math.cos(2*Ti*(r-ri));let l=Math.cos(Ti*(r+.03));e.twist=.2*l,e.headYaw=-.15*l,e.headPitch=-.28+.04*Math.cos(a),e.elbows=0,xf(r,Os),Gn(e.footL,n.fx*.75,Os[0],Os[1]),xf(r<.5?r+.5:r-.5,Os),Gn(e.footR,-n.fx*.75,Os[0],Os[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;Hr(t,e,c*(n.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),n.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,fl(e,c))}return e}function ey(i,t,e){let n=ks(t),s=Ti*i/Ze.aim.duration,r=t.hipHeight;e.hipsY=r-.05+.005*Math.sin(s),e.lean=.12+.01*Math.sin(s),e.twist=-.1,e.headYaw=.08,e.headPitch=.04+.012*Math.sin(2*s),e.squash=1,e.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Gn(e.handL,n.sx*1.2+o,n.sy-.12+a,.56),Gn(e.handR,-n.sx*1.25+o,n.sy-.06+a,.52),Gn(e.footL,n.fx+.02,0,.15),Gn(e.footR,-n.fx-.03,0,-.13),e}var vh=.35;function ny(i){return i<.06?Bs(0,.06,i):Math.exp(-9*(i-.06))*(1-Bs(.24,vh,i))}function iy(i){if(i<.07)return Bs(0,.07,i);let t=i-.07;return Math.exp(-11*t)*Math.cos(Ti*t/.22)*(1-Bs(.26,vh,i))}function sy(i,t,e){let n=ks(t),s=t.hipHeight,r=ny(i);e.hipsY=s-.012-.05*r,e.lean=.03-.4*r,e.twist=.12*r,e.headYaw=-.12*r,e.headPitch=-.02-.32*r,e.squash=1-.15*iy(i),e.elbows=gh+(1-gh)*r;for(let o=-1;o<=1;o+=2){let a=fl(e,o);mh(t,e,n,a,o);let l=a[0],c=a[1],h=a[2];Hr(t,e,o*n.sx*1.75,n.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Gn(e.footL,n.fx,0,.015),Gn(e.footR,-n.fx,0,-.015),e}var hl=[0,0,0];function ry(i,t,e){xh(i,t,e);let n=ks(t),s=i/Ze.talk.duration,r=Ti*s,o=dl(s,.04,.17,.4,.55),a=dl(s,.5,.63,.8,.95),l=Math.sin(3*r);e.headPitch+=.05*Math.sin(4*r)-.04*(o+a),e.headYaw+=-.12*o+.12*a,e.elbows+=(.85-e.elbows)*Math.max(o,a),Hr(t,e,-(n.sx+.19),n.sy-.1+.03*l,.36,hl);for(let c=0;c<3;c++)e.handR[c]+=(hl[c]-e.handR[c])*o;Hr(t,e,n.sx+.19,n.sy-.12-.03*l,.34,hl);for(let c=0;c<3;c++)e.handL[c]+=(hl[c]-e.handL[c])*a;return e}var es=Vn();function oy(i,t,e){let n=i/Ze.roll.duration,s=dl(n,0,.15,.75,1),r=ks(t);xh(0,t,es);let o=(a,l)=>a+(l-a)*s;e.hipsY=o(es.hipsY,.45),e.lean=o(es.lean,1.3),e.twist=0,e.headYaw=0,e.headPitch=o(es.headPitch,.35),e.squash=o(1,.9),e.elbows=1;for(let a=-1;a<=1;a+=2){let l=fl(e,a),c=fl(es,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?e.footL:e.footR,d=a>0?es.footL:es.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return e}function ay(i,t,e){return yf(i,t,e),e.hipsY-=.12,e.lean+=.15,e}var ly=.05;function ns(i,t,e,n=ly){return Object.freeze({duration:i,loop:t,ease:n,sample:(s,r,o=Vn())=>e(s,r,o)})}var Ze=Object.freeze({idle:ns(2.4,!0,xh),run:ns(.56,!0,yf,.008),aim:ns(1.6,!0,ey),flinch:ns(vh,!1,sy),talk:ns(2.4,!0,ry),roll:ns(.55,!1,oy,.02),sprint:ns(.56,!0,ay,.008)}),yh=ul/Ze.run.duration;function Gr(i,t,e,n){let s=Object.prototype.hasOwnProperty.call(Ze,i)?Ze[i]:null;if(!s)throw new Error(`unknown clip: ${i}`);let r=s.loop?t:Math.min(Math.max(t,0),s.duration);return s.sample(r,e,n||Vn())}function ml(i,t,e,n=Vn()){if(!(e>0))return _f(i,n);if(e>=1)return _f(t,n);let s=1-e;n.hipsY=i.hipsY*s+t.hipsY*e,n.lean=i.lean*s+t.lean*e,n.twist=i.twist*s+t.twist*e,n.headYaw=i.headYaw*s+t.headYaw*e,n.headPitch=i.headPitch*s+t.headPitch*e,n.squash=i.squash*s+t.squash*e,n.elbows=i.elbows*s+t.elbows*e;for(let r=0;r<4;r++){let o=i[zr[r]],a=t[zr[r]],l=n[zr[r]];l[0]=o[0]*s+a[0]*e,l[1]=o[1]*s+a[1]*e,l[2]=o[2]*s+a[2]*e}return n}var cy=.05,oi=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Vr=["handL","handR","footL","footR"],Mh=oi.length+Vr.length*3,zs=[.35,-.2,-.8],Sh=[.75,-.85,-.15];function Ie(i,t){if(i.deleteAttribute("uv"),!i.index){let r=i.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;i.setIndex(o)}let e=new Jt(t),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Se(s,3)),i}var hy=new de,Mn=(i,t,e,n,s=0,r=0,o=0,a=1,l=1,c=1)=>i.applyMatrix4(hy.compose(new N(t,e,n),new tn().setFromEuler(new sn(s,r,o)),new N(a,l,c)));function is(i=20,t=14){let e=new xn(1,i,t);return e.deleteAttribute("uv"),e.deleteAttribute("normal"),ef(e)}function bh(i,t,e){let n=is(t,e),s=n.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)i(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return n.computeVertexNormals(),n}function _l(i,t,e){let n=t[0]-i[0],s=t[1]-i[1],r=t[2]-i[2],o=Math.hypot(n,s,r),a=new _n(e,e,o,6,1),l=new tn().setFromUnitVectors(new N(0,1,0),new N(n/o,s/o,r/o));return a.applyMatrix4(new de().compose(new N((i[0]+t[0])/2,(i[1]+t[1])/2,(i[2]+t[2])/2),l,new N(1,1,1))),a}function xl(i,t){let e=Si(i,!1);if(!e)throw new Error(`rig: could not merge the ${t} parts`);Fs(e),e.computeBoundingSphere();let n=new ge(e,yn({color:"#ffffff",vertexColors:!0}));return n.name=t,zn(n),n}function wh(i,t,e,n,s){let r=2/i.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(t)*i.rx,s[1]=o(e)*i.ry;let a=o(n)*i.rz;return a>i.flatZ&&(a=i.flatZ+(a-i.flatZ)*i.flatK),s[2]=a,s}function uy(i){let t=i.torso,e=i.colors,n=i.outfit,s=(h,d)=>{let u=new Mr(h.map(([f,p])=>new Pt(f,p)),22);return u.scale(1,1,t.depth),Ie(u,d)},r=[s(t.pants,e.pants),s(t.shirt,e.shirt)],o=t.shirt[t.shirt.length-2][1],a=h=>{let d=t.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return t.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=i.shoulderL[1]-i.hipHeight;for(let h of[-1,1]){let d=is(14,10);Mn(d,h*Math.abs(i.shoulderL[0])*.97,c-.01,0,0,0,h*.5,t.sleeve*1.15,t.sleeve,t.sleeve*1.05),d.computeVertexNormals(),r.push(Ie(d,e.shirt))}if(n.collar){let h=new qi(.1,.03,8,20);Mn(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Ie(h,e.collar))}if(n.logo){let u=new _n(.03,.03,.01,12);Mn(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Ie(u,e.logo))}if(n.lanyard){let d=l(0,.15)+.012;for(let p of[-1,1]){let x=[p*.075,o-.03,.085],g=[p*.05,.34,l(.05,.34)+.014],m=[p*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Ie(_l(x,g,.008),e.lanyard),Ie(_l(g,m,.008),e.lanyard))}let u=new rn(.075,.1,.014);Mn(u,0,.15,d,-.05,0,.04);let f=new rn(.077,.026,.016);Mn(f,0,.15+.028,d,-.05,0,.04),r.push(Ie(u,e.badge),Ie(f,e.badgeStripe))}return xl(r,"torso")}function dy(i){let t=i.head,e=i.hair,n=i.colors,s=i.outfit,r=[],o=bh((a,l,c,h)=>wh(t,a,l,c,h),40,28);r.push(Ie(o,n.skin),Ie(fy(t,e),n.hair));for(let a of[-1,1]){let l=is(12,8);Mn(l,a*t.rx*.97,-.03,-.015,0,a*.3,0,t.ear*.45,t.ear,t.ear*.75),l.computeVertexNormals(),r.push(Ie(l,n.skin))}{let a=i.face,l=(a.eyeY+a.mouthY)/2-.005,c=is(12,8);Mn(c,0,l,py(t,0,l),0,0,0,t.nose*.9,t.nose*.8,t.nose),c.computeVertexNormals(),r.push(Ie(c,n.skin))}if(s.headset){let a=t.ry+e.thickness+.03,l=new nn;l.getPoint=(x,g=new N)=>g.set(Math.cos(Math.PI*x)*(t.rx+e.thickness+.012),Math.sin(Math.PI*x)*a,0);let c=new Sr(l,24,.014,6,!1);Mn(c,0,0,-.03,-.12,0,0),r.push(Ie(c,n.headset));for(let x of[-1,1]){let g=new _n(.055,.06,.05,14);Mn(g,x*(t.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Ie(g,n.headset))}let h=i.face,d=[t.rx+.035,-.04,0],u=[t.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Ie(_l(d,u,.009),n.headset),Ie(_l(u,f,.009),n.headset));let p=is(10,8);Mn(p,f[0],f[1],f[2],0,0,0,.022,.02,.022),p.computeVertexNormals(),r.push(Ie(p,n.mic))}return xl(r,"headMesh")}var Ai=48,gl=12;function fy(i,t){let e=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,n=[0,0,0],s=Wa.smoothstep,r=[],o=(u,f,p)=>{let x=Math.sin(u)*Math.sin(f),g=Math.cos(u),m=Math.sin(u)*Math.cos(f);wh(i,x,g,m,n);let v=n[0]/(i.rx*i.rx),w=n[1]/(i.ry*i.ry),y=n[2]/(i.rz*i.rz),b=Math.hypot(v,w,y)||1;v/=b,w/=b,y/=b;let T=Math.exp(-(((n[0]-.085)/.018)**2))*s(n[1],.12,.2)*Math.max(m+.3,0),_=t.quiff?t.lift*Math.max(m,0)*s(n[1],.12,.26)*(1-.5*x):0,S=t.back*Math.max(-m,0)*s(n[1],-.15,.1),R=p?-.01:t.thickness*(1-.55*Math.min(T,1))+_+S;r.push(n[0]+v*R,n[1]+w*R,n[2]+y*R)},a=u=>{let f=0,p=Math.PI;for(let x=0;x<40;x++){let g=(f+p)/2,m=Math.sin(g)*Math.sin(u),v=Math.sin(g)*Math.cos(u);wh(i,m,Math.cos(g),v,n),n[1]>e(m,v)?f=g:p=g}return f};o(0,0,!1);let l=[];for(let u=0;u<Ai;u++)l.push(a(u/Ai*Math.PI*2));for(let u=1;u<=gl+1;u++)for(let f=0;f<Ai;f++){let p=f/Ai*Math.PI*2,x=u>gl;o(x?l[f]+.03:l[f]*(u/gl),p,x)}let c=(u,f)=>1+(u-1)*Ai+f%Ai,h=[];for(let u=0;u<Ai;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=gl;u++)for(let f=0;f<Ai;f++){let p=c(u,f),x=c(u,f+1),g=c(u+1,f),m=c(u+1,f+1);h.push(p,g,m,p,m,x)}let d=new we;return d.setAttribute("position",new ue(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function py(i,t,e){let n=1-Math.pow(Math.abs(t/i.rx),i.power)-Math.pow(Math.abs(e/i.ry),i.power),s=n>0?i.rz*Math.pow(n,1/i.power):0;return s>i.flatZ?i.flatZ+(s-i.flatZ)*i.flatK:s}function Mf(i,t){let e=i.hand.radius,n=i.colors,s=is(14,10);Mn(s,0,e*.75,0,0,0,0,e*.78,e*1.1,e*.95),s.computeVertexNormals();let r=is(10,8);return Mn(r,e*.3,e*.45,t*e*.75,t*-.6,0,.3,e*.34,e*.55,e*.34),r.computeVertexNormals(),xl([Ie(s,n.skin),Ie(r,n.skin)],t>0?"handL":"handR")}function Sf(i,t){let e=i.shoe,n=i.colors,s=e.width/2,r=e.length/2,o=e.length*.18,a=.03,l=bh((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,e.height*.55+d*e.height*.6-Math.max(u,0)*e.height*.25),f[2]=o+u*r*.96},20,12),c=bh((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return xl([Ie(l,n.shoe),Ie(c,n.sole)],t>0?"footL":"footR")}function vl(i){let t=new Ae;t.name=i.name||"character";let e=new Ae;e.name="body",t.add(e);let n=new Ae;n.name="hips",n.rotation.order="YXZ";let s=uy(i);n.add(s);let r=new Ae;r.name="head",r.rotation.order="YXZ",r.position.set(0,i.neckY-i.hipHeight,0),n.add(r);let o=dy(i);o.position.y=i.head.centerY,r.add(o);let a=gf({...i.face,lidColor:i.colors.skin});a.group.position.y=i.head.centerY,r.add(a.group),e.add(n);let l=[Mf(i,1),Mf(i,-1)],c=[Sf(i,1),Sf(i,-1)],h=[0,1].map(()=>fh({radius:i.armRadius,color:i.colors.skin})),d=[0,1].map(()=>fh({radius:i.legRadius,color:i.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",e.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=il({rx:.45,rz:.38,opacity:.55});t.add(u);let f=Vn(),p=Vn(),x=[];for(let k=0;k<Mh;k++)x.push({x:0,v:0});let g=!1,m=cy,v=(k,ct)=>ct<oi.length?k[oi[ct]]:k[Vr[(ct-oi.length)/3|0]][(ct-oi.length)%3];function w(k,ct,gt){ct<oi.length?k[oi[ct]]=gt:k[Vr[(ct-oi.length)/3|0]][(ct-oi.length)%3]=gt}function y(k,ct){ct>=0&&(m=ct),f.hipsY=k.hipsY,f.lean=k.lean,f.twist=k.twist,f.headYaw=k.headYaw,f.headPitch=k.headPitch,f.squash=k.squash,f.elbows=k.elbows>=0?k.elbows:0;for(let gt=0;gt<4;gt++){let Y=k[Vr[gt]],ft=f[Vr[gt]];ft[0]=Y[0],ft[1]=Y[1],ft[2]=Y[2]}if(!g){g=!0;for(let gt=0;gt<Mh;gt++)x[gt].x=v(f,gt),x[gt].v=0}}let b=[0,0,0],T=[0,0,0],_=[0,0,0],S=[0,0,0],R={mid:[0,0,0],end:[0,0,0],stretch:1},C=new N,L=new N,F=new N,V=new de,P=i.armLength/2,H=i.legLength/2,q=i.ankleHeight;function O(k,ct,gt){let Y=Math.cos(p.twist),ft=Math.sin(p.twist);S[0]=k*Y+gt*ft,S[1]=ct,S[2]=-k*ft+gt*Y}function it(){let k=p.squash>.2?p.squash:.2,ct=1/Math.sqrt(k);e.scale.set(ct,k,ct),n.position.set(0,p.hipsY,0),n.rotation.set(p.lean,p.twist,0),r.rotation.set(p.headPitch,p.headYaw,0);for(let gt=0;gt<2;gt++){let Y=gt===0?1:-1;pl(i,p,gt===0?i.shoulderL:i.shoulderR,b);let ft=p.elbows<0?0:p.elbows>1?1:p.elbows;O(Y*(zs[0]+(Sh[0]-zs[0])*ft),zs[1]+(Sh[1]-zs[1])*ft,zs[2]+(Sh[2]-zs[2])*ft),dh(b,gt===0?p.handL:p.handR,P,P,S,R),h[gt].set(b,R.mid,R.end,R.stretch);let It=l[gt];It.position.set(R.end[0],R.end[1],R.end[2]),C.set(R.end[0]-R.mid[0],R.end[1]-R.mid[1],R.end[2]-R.mid[2]),C.lengthSq()<1e-10&&C.set(0,-1,0),C.normalize(),L.set(-Y*Math.cos(p.twist),0,Y*Math.sin(p.twist)),L.addScaledVector(C,-L.dot(C)),L.lengthSq()<1e-4&&L.set(0,0,1).addScaledVector(C,-C.z),L.normalize(),F.crossVectors(L,C),V.makeBasis(L,C,F),It.quaternion.setFromRotationMatrix(V),pl(i,p,gt===0?i.hipL:i.hipR,T);let kt=gt===0?p.footL:p.footR;_[0]=kt[0],_[1]=kt[1]+q,_[2]=kt[2],O(Y*.15,0,1),dh(T,_,H,H,S,R),d[gt].set(T,R.mid,R.end,R.stretch);let $=c[gt];$.position.set(R.end[0],R.end[1]-q,R.end[2]),$.rotation.set(Math.min(Math.max(R.end[1]-q,0),.3)*1.1,p.twist*.3,0)}}function G(k){if(g)for(let ct=0;ct<Mh;ct++)Ln(x[ct],v(f,ct),m,k),w(p,ct,x[ct].x);it(),a.update(k)}Gr("idle",0,i,p),it();function z(){t.traverse(k=>{!k.isMesh||k.userData.isOutline||(k.geometry.dispose(),k!==u&&k.material.dispose())}),t.removeFromParent()}return{root:t,spec:i,face:a,setPose:y,update:G,dispose:z,shadow:u}}var my=.15,gy=.03,bf=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function yl(i){let t=i.spec,e="idle",n=0,s="idle",r=0,o=0,a=Ze[e].ease,l=Vn(),c=Vn(),h=Gr(e,0,t);ml(h,h,1,l);function d(p,{fade:x}={}){Object.prototype.hasOwnProperty.call(Ze,p)&&(p===e&&Ze[p].loop||(p==="flinch"&&e!=="flinch"&&(s=e),ml(h,h,1,l),a=u(),r=x===void 0?p==="flinch"?gy:my:Math.max(x,0),o=0,e=p,n=0,i.face.setTalking(p==="talk")))}function u(){let p=r>0?bf(o/r):1;return a+(Ze[e].ease-a)*p}function f(p){let x=Ze[e];if(n+=p,o+=p,x.loop)n>=x.duration&&(n-=x.duration*Math.floor(n/x.duration));else if(n>=x.duration)return d(s),f(0);Gr(e,n,t,c),ml(l,c,r>0?bf(o/r):1,h),i.setPose(h,u())}return{play:d,update:f,current:()=>e}}function Ml(i,t,e){let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=n>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*e)<<o}return"#"+r.toString(16).padStart(6,"0")}function wf(i){for(let t of Object.values(i))t&&typeof t=="object"&&wf(t);return Object.freeze(i)}var Eh=_t.glorpPurple,Ri=wf({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:Eh,collar:Ml(Eh,_t.ink,.25),logo:_t.gel,pants:Ml(_t.planet,_t.ink,.3),skin:_t.daleSkin,hair:_t.daleHair,shoe:Ml(_t.ink,Eh,.3),sole:_t.cream,lanyard:_t.hotPink,badge:_t.cream,badgeStripe:_t.teal,headset:Ml(_t.ink,_t.lilac,.25),mic:_t.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var _y=1.5,xy=8,vy=-.2,yy=1.3,Ef=.6,My=Math.atan2(1.3,-4),Sy=new N(-.45,.22,-1).applyEuler(new sn(-.2,.68,0)).toArray(),Tf=10,by=.8,wy=.05,Ey=["idle","run","aim","flinch","talk"],Wr=Object.keys(ts),Af=(i,t,e)=>Math.min(e,Math.max(t,i));function Ty(i,t,e,n=[0,0,0]){return n[0]=Math.sin(i)*Math.cos(t)*e,n[1]=Math.sin(t)*e,n[2]=Math.cos(i)*Math.cos(t)*e,n}function Ay(i,t,e=xe.camera){let n=Math.sin(t),s=Math.cos(t),r=-Math.cos(t),o=Math.sin(t),a=[i[0]+r*e.right-n*e.back,i[1]+e.up,i[2]+o*e.right-s*e.back],l=[a[0]+n*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Rf({canvas:i,gl:t}){let e=Qa(i,t),n=e.renderer,s=ja(i),r=document.getElementById("cr-readout"),o=new Hi,a=new Ge(xe.camera.fov,1,.1,100),l=tl({planetDir:Sy});o.add(l.mesh);let c=df();o.add(c.group);let h=[];function d($,wt,Et){let bt=vl(Et===void 0?Ri:{...Ri,face:{...Ri.face,seed:Et}});bt.root.position.set($,0,wt),bt.root.rotation.y=Ef,o.add(bt.root);let Yt=yl(bt),Qt={rig:bt,anim:Yt};return h.push(Qt),Qt}let u=d(c.spawn[0],c.spawn[2]),f=[],p=!1,x=0,g=!0,m=!1,v=.685,w=.1,y=4.6,b=!1,T=new N(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),_=[0,0,0];function S($){if(Ey.includes($)){u.anim.play($);for(let wt of f)wt.anim.play(p?"run":$)}}function R($){let wt=Wr.indexOf($);if(!(wt<0)){x=wt;for(let Et of h)Et.rig.face.setExpression($)}}function C($){g=!!$,sh(o,g)}function L($){m=!!$,u.rig.root.rotation.y=m?My:Ef}function F($){if($=!!$,$!==p)if(p=$,$){let wt=c.spawn[2]+2.4;for(let Et=0;Et<Tf;Et++){let bt=c.spawn[0]+(Et-(Tf-1)/2)*by,Yt=d(bt,wt,10+Et);Yt.anim.play("run"),Yt.rig.face.setExpression(Wr[x]),f.push(Yt)}sh(o,g)}else{for(let wt of f)wt.rig.dispose(),h.splice(h.indexOf(wt),1);f=[]}}function V(){let $=e.resize();a.aspect=$.aspect,a.updateProjectionMatrix()}V(),window.addEventListener("resize",V),i.addEventListener("mousedown",$=>{$.button===0&&(b=!0)}),window.addEventListener("mouseup",()=>{b=!1}),window.addEventListener("mousemove",$=>{b&&!s.isLocked()&&P($.movementX||0,$.movementY||0,.006)}),i.addEventListener("wheel",$=>{y=Af(y*Math.exp($.deltaY*.001),_y,xy)},{passive:!0});function P($,wt,Et){v-=$*Et,w=Af(w+wt*Et,vy,yy)}window.addEventListener("keydown",$=>{$.repeat||($.code==="Digit4"?S("flinch"):$.code==="Digit5"?S("talk"):$.code==="KeyO"?C(!g):$.code==="KeyP"?F(!p):$.code==="KeyL"?s.requestLock():$.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let H=0,q=0,O=0,it=0,G=0,z=0,k=null,ct=0;window.__cr.stats=()=>({fps:H,ms:q,calls:G,tris:z,scale:e.scale(),characters:h.length}),window.__cr.anim=S,window.__cr.expression=R,window.__cr.perf=F,window.__cr.gameCam=L,window.__cr.outlines=C;function gt($){$.pressed.weapon1&&S("idle"),$.pressed.weapon2&&S("run"),$.pressed.weapon3&&S("aim"),$.pressed.interact&&R(Wr[(x+1)%Wr.length]),$.pressed.grenade&&L(!m)}function Y(){if(m){let $=Ay([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray($.pos),a.lookAt($.look[0],$.look[1],$.look[2])}else Ty(v,w,y,_),a.position.set(T.x+_[0],T.y+_[1],T.z+_[2]),a.lookAt(T)}let ft=$=>$.toFixed(2);function It(){let $=k?Object.keys(k.held).filter(bt=>k.held[bt]).join(" "):"",wt=s.padStatus(),Et=k&&wt!=="none"&&wt!=="unrecognised controller"?`Gamepad: ${wt}
  move ${ft(k.moveX)}, ${ft(k.moveY)}  look ${ft(k.lookX)}, ${ft(k.lookY)}
  held: ${$||"nothing"}`:`Gamepad: ${wt}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${Wr[x]}   camera: ${m?"game":"orbit"}   outlines: ${g?"on":"off"}`,`${Math.round(H)} fps   ${ft(q)} ms   scale ${e.scale()}`,`${G} draw calls   ${z} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${k?Math.round(k.lookDX):0}, ${k?Math.round(k.lookDY):0}`,Et].join(`
`)}let kt=Ka({step(){},render($,wt){let Et=Math.min(wt,wy);k=s.poll(),gt(k),s.isLocked()&&!m&&P(k.lookDX,k.lookDY,.003),m||P(k.lookX*600*Et,k.lookY*600*Et,.004),l.update(performance.now()/1e3),c.update(Et);for(let bt of h)bt.anim.update(Et),bt.rig.update(Et);Y(),n.render(o,a),G=n.info.render.calls,z=n.info.render.triangles,O++,it+=wt,it>=1&&(H=O/it,q=it/O*1e3,O=0,it=0),ct+=wt,ct>=.1&&(ct=0,It()),e.frameDone(wt*1e3)}});Y(),n.render(o,a),G=n.info.render.calls,z=n.info.render.triangles,It(),kt.start()}function Cf(){let i=!1,t=0,e=.18;return{update(n,s,r,o){return e=o,i?(t+=r,n?!1:(i=!1,t<=o)):s?n?(i=!0,t=r,!1):!0:!1},holding(){return i&&t>e},reset(){i=!1,t=0}}}function Je(i,t,e="wall"){return Object.freeze({min:Object.freeze([...i]),max:Object.freeze([...t]),kind:e})}var Th=1e-9;function Pf(i,t,e,n,s){let r=[t[0],t[1],t[2]],o=t[1]+.05,a=t[1]+s,l=i.filter(g=>g.max[1]>o&&g.min[1]<a),c=Math.hypot(e[0],e[2]),h=Math.max(1,Math.ceil(c/(n/2))),d=e[0]/h,u=e[2]/h,f=!1,p=0,x=0;for(let g=0;g<h;g++){let m=r[0],v=r[2];r[0]+=d,r[2]+=u;let w=!1;for(let y=0;y<5;y++){let b=null,T=Th;for(let _ of l){let S=Math.max(_.min[0],Math.min(r[0],_.max[0])),R=Math.max(_.min[2],Math.min(r[2],_.max[2])),C=r[0]-S,L=r[2]-R,F=Math.hypot(C,L),V,P,H;if(F>Th){if(F>=n)continue;V=n-F,P=C/F,H=L/F}else{let q=[[r[0]-_.min[0],-1,0],[_.max[0]-r[0],1,0],[r[2]-_.min[2],0,-1],[_.max[2]-r[2],0,1]],O=q[0];for(let it of q)it[0]<O[0]&&(O=it);V=O[0]+n,P=O[1],H=O[2]}V>T&&(T=V,b=[P,H])}if(!b){w=!0;break}if(y===4)break;r[0]+=b[0]*T,r[2]+=b[1]*T,f=!0,p=b[0],x=b[1]}w||(r[0]=m,r[2]=v,f=!0)}return f||(r[0]=t[0]+e[0],r[2]=t[2]+e[2]),{pos:r,hit:f,normal:[p,0,x]}}function Sl(i,t,e,n){let s=1,r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]];for(let o of i){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-n,u=o.max[h]+n;if(Math.abs(r[h])<Th)(t[h]<d||t[h]>u)&&(c=!1);else{let f=(d-t[h])/r[h],p=(u-t[h])/r[h];if(f>p){let x=f;f=p,p=x}f>a&&(a=f),p<l&&(l=p),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function If(i,t,e=0){for(let n of i)if(t[0]>=n.min[0]-e&&t[0]<=n.max[0]+e&&t[1]>=n.min[1]-e&&t[1]<=n.max[1]+e&&t[2]>=n.min[2]-e&&t[2]<=n.max[2]+e)return!0;return!1}var Ah=["fov","right","up","back"],Lf=Math.PI*2;function Df(i,t,e={}){let n=t&&t!=="normal"&&i[t]&&typeof i[t]=="object"?i[t]:null;for(let s of Ah)e[s]=n&&n[s]!==void 0?n[s]:i[s];return e}function Nf(i,t){let e=t&&t!=="normal"?i[t]:null;return e&&typeof e=="object"&&e.shakeWeight>0?e.shakeWeight:0}function Uf({tuning:i=xe.camera,look:t=xe.look}={}){let e={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},n={x:1,v:0},s={x:0,v:0},r=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],o={},a=[0,0,0],l=[0,0,0],c=[0,0,0],h=[0,0,0],d=[0,0,1],u={pos:h,dir:d,fov:70},f=1,p=0,x=!1;return{yaw:0,pitch:0,look(m,v,w,y,b,T){let _=T?t.aimScale:1,S=t.invertY?-1:1;this.yaw-=m*t.mouse*_,this.pitch-=v*t.mouse*_*S;let R=t.pad;w&&(this.yaw-=Math.sign(w)*Math.abs(w)**R.expo*R.yawRate*_*b),y&&(this.pitch-=Math.sign(y)*Math.abs(y)**R.expo*R.pitchRate*_*b*S),this.pitch<i.pitchMin&&(this.pitch=i.pitchMin),this.pitch>i.pitchMax&&(this.pitch=i.pitchMax)},snap(m,v,w="normal",y=1){v!==void 0&&(this.yaw=v),Df(i,w,o);for(let b of Ah)e[b].x=o[b],e[b].v=0;n.x=y,n.v=0,s.x=Nf(i,w),s.v=0;for(let b=0;b<3;b++)r[b].x=m[b],r[b].v=0;f=1,x=!0},update(m,{target:v,mode:w="normal",side:y=1},b){x||this.snap(v,this.yaw,w,y),m>0||(m=0),p+=m,Df(i,w,o);for(let z of Ah)Ln(e[z],o[z],i.blendHalfLife,m);Ln(s,Nf(i,w),i.blendHalfLife,m),Ln(n,y,i.sideHalfLife,m);for(let z=0;z<3;z++)Ln(r[z],v[z],i.followHalfLife,m);let T=this.yaw,_=this.pitch,S=Math.sin(T),R=Math.cos(T),C=Math.sin(_),L=Math.cos(_),F=i.probeRadius,V=e.back.x;a[0]=r[0].x,a[1]=r[1].x+e.up.x,a[2]=r[2].x;let P=e.right.x*n.x;l[0]=a[0]-R*P,l[1]=a[1],l[2]=a[2]+S*P;let H=Sl(b,a,l,F);for(let z=0;z<3;z++)l[z]=a[z]+(l[z]-a[z])*H;d[0]=S*L,d[1]=C,d[2]=R*L;for(let z=0;z<3;z++)c[z]=l[z]-d[z]*V;let q=Sl(b,l,c,F),O=V>1e-6?Math.max(i.minBack/V,q):1;O>1&&(O=1),O<f?f=O:f+=(O-f)*(i.wallReturnHalfLife>0?1-Math.pow(2,-m/i.wallReturnHalfLife):1);for(let z=0;z<3;z++)h[z]=l[z]-d[z]*V*f;let it=Sl(b,a,h,F);if(it<1)for(let z=0;z<3;z++)h[z]=a[z]+(h[z]-a[z])*it;let G=i.shake;if(G&&G.amp&&s.x>0){let z=G.amp*(s.x>1?1:s.x),k=Math.sin(Lf*G.hz*p)*z,ct=Math.sin(Lf*G.hz*1.3*p+1)*z,gt=-R,Y=S;h[0]+=gt*k-Y*d[1]*ct,h[1]+=(Y*d[0]-gt*d[2])*ct,h[2]+=Y*k+gt*d[1]*ct}return u.fov=e.fov.x,u}}}var Bf=i=>(i&&typeof i=="object"&&!Object.isFrozen(i)&&(Object.freeze(i),Object.values(i).forEach(Bf)),i),Ci=.3,Ry=[Je([-12,-1,-12],[12,0,12],"floor"),Je([-12-Ci,0,-12-Ci],[12+Ci,4,-12]),Je([-12-Ci,0,12],[12+Ci,4,12+Ci]),Je([-12-Ci,0,-12],[-12,4,12]),Je([12,0,-12],[12+Ci,4,12]),Je([5,0,-9],[5.3,4,-3]),Je([6.7,0,-9],[7,4,-3]),Je([-11,0,-7.3],[-6,3,-7]),Je([-6.3,0,-11],[-6,3,-7]),Je([-4,0,-3],[-2,1,-2.4],"low"),Je([3,0,3],[3.6,1,5],"low"),Je([-5,0,3],[-3.8,2.2,3.6],"tall"),Je([1,0,-6],[1.6,2.2,-4],"tall"),Je([-9.4,0,.6],[-8.6,4,1.4],"pillar"),Je([8.6,0,3.6],[9.4,4,4.4],"pillar")],kf=[];for(let i=0;i<=12;i++)kf.push({min:[-10+i-.05,0,10],max:[-10+i+.05,.02,11]});var bl=Bf({boxes:Ry,marks:kf,spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2}}}),Ff={wall:_t.lilac,low:_t.teal,tall:_t.hotPink,pillar:_t.cream};function Of(i){let t=i.map(e=>{let n=new rn(e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]);return n.translate((e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,(e.min[2]+e.max[2])/2),n});return Si(t,!1)}function zf(i=bl){let t=new Ae;t.add(nl({w:24,d:24}));for(let e of Object.keys(Ff)){let n=i.boxes.filter(r=>r.kind===e);if(!n.length)continue;let s=new ge(Fs(Of(n)),yn({color:Ff[e]}));s.name=`grey-${e}`,zn(s),t.add(s)}if(i.marks.length){let e=new ge(Of(i.marks),yn({color:_t.hotPink}));e.name="grey-marks",t.add(e)}return{group:t,boxes:i.boxes,update(e){}}}var Pi=class i{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),i.nextNameID=i.nextNameID||0,this.$name.id=`lil-gui-name-${++i.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Rh=class extends Pi{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ch(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}var Cy={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ch,toHexString:Ch},Yr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Py={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,t,e=1){let n=Yr.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;let s=i*n<<16^t*n<<8^e*n<<0;return Yr.toHexString(s)}},Iy={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){let n=Yr.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;let s=i*n<<16^t*n<<8^e*n<<0;return Yr.toHexString(s)}},Ly=[Cy,Yr,Py,Iy];function Dy(i){return Ly.find(t=>t.match(i))}var Ph=class extends Pi{constructor(t,e,n,s){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Dy(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Ch(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Xr=class extends Pi{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Ih=class extends Pi{constructor(t,e,n,s,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))},o=!1,a,l,c,h,d,u=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",x)},p=v=>{if(o){let w=v.clientX-a,y=v.clientY-l;Math.abs(y)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&x()}if(!o){let w=v.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",x)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let t=(m,v,w,y,b)=>(m-v)/(w-v)*(b-y)+y,e=m=>{let v=this.$slider.getBoundingClientRect(),w=t(m,v.left,v.right,this._min,this._max);this._snapClampSetValue(w)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=m=>{if(o){let v=m.touches[0].clientX-a,w=m.touches[0].clientY-l;Math.abs(v)>Math.abs(w)?c(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else m.preventDefault(),e(m.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),p=400,x,g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();let w=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,p)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Lh=class extends Pi{constructor(t,e,n,s){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{let n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}},Dh=class extends Pi{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Ny=`.lil-gui {
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
}`;function Uy(i){let t=document.createElement("style");t.innerHTML=i;let e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}var Hf=!1,wl=class i{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Hf&&a&&(Uy(Ny),Hf=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Lh(this,t,e,n);let o=t[e];switch(typeof o){case"number":return new Ih(this,t,e,n,s,r);case"boolean":return new Rh(this,t,e);case"string":return new Dh(this,t,e);case"function":return new Xr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Ph(this,t,e,n)}addFolder(t){let e=new i({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Xr||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Xr)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");let n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);let s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};var ae=(i,t,e,n)=>({path:i,min:t,max:e,step:n}),qr=Object.freeze([ae("move.jog",1,10,.1),ae("move.aimWalk",.5,6,.1),ae("move.sprint",2,14,.1),ae("move.accelTime",.01,.6,.01),ae("move.stopTime",.01,.6,.01),ae("move.turnRate",1,40,.5),ae("move.aimTurnRate",1,40,.5),ae("move.sprintTurnRate",.2,20,.1),ae("move.rollDistance",1,12,.1),ae("move.rollTime",.2,1.5,.01),ae("move.rollEase",1,4,.05),ae("move.rollBuffer",0,.5,.01),ae("move.tapMax",.05,.5,.01),ae("move.stickSprintMin",0,1,.05),ae("camera.fov",40,110,1),ae("camera.right",-1.5,1.5,.01),ae("camera.up",.5,3,.01),ae("camera.back",.5,6,.05),ae("camera.aim.fov",20,90,1),ae("camera.aim.back",.3,5,.05),ae("camera.sprint.fov",50,120,1),ae("camera.sprint.up",.3,3,.01),ae("camera.sprint.back",.5,6,.05),ae("camera.sprint.shakeWeight",0,3,.05),ae("camera.blendHalfLife",0,.5,.005),ae("camera.followHalfLife",0,.5,.005),ae("camera.sideHalfLife",0,.6,.005),ae("camera.shake.amp",0,.15,.001),ae("camera.shake.hz",1,30,.5),ae("camera.probeRadius",.05,.6,.01),ae("camera.minBack",0,2,.01),ae("camera.wallReturnHalfLife",0,1,.01),ae("camera.pitchMin",-1.5,0,.01),ae("camera.pitchMax",0,1.5,.01),ae("look.mouse",5e-4,.008,1e-4),ae("look.pad.yawRate",.5,10,.1),ae("look.pad.pitchRate",.5,10,.1),ae("look.pad.expo",1,3,.05),ae("look.aimScale",.1,1.5,.01),{path:"look.invertY"}]),Fy=new Map(qr.map(i=>[i.path,i])),$r=structuredClone(xe);function ss(i,t){let e=i;for(let n of t.split(".")){if(e===null||typeof e!="object")return;e=e[n]}return e}function Uh(i,t,e){let n=t.split("."),s=i;for(let r=0;r<n.length-1;r++)if(s=s[n[r]],s===null||typeof s!="object")return!1;return s[n[n.length-1]]=e,!0}function Fh(i=xe,t=$r){let e={};for(let n of qr){let s=ss(i,n.path);s!==ss(t,n.path)&&(e[n.path]=s)}return e}function Gf(i,t){if(t===null||typeof t!="object"||Array.isArray(t))return 0;let e=0;for(let n of Object.keys(t)){let s=Fy.get(n);if(!s)continue;let r=t[n],o=ss($r,n);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Uh(i,n,r)&&e++)}return e}function Nh(i,t){if(i===null||typeof i!="object")return JSON.stringify(i);if(Array.isArray(i))return`[${i.map(s=>Nh(s,t)).join(", ")}]`;let e="  ".repeat(t+1);return`{
${Object.keys(i).map(s=>`${e}${s}: ${Nh(i[s],t+1)},`).join(`
`)}
${"  ".repeat(t)}}`}function Vf(i=xe){return["camera","look","move"].map(t=>`  ${t}: ${Nh(i[t],1)},`).join(`
`)}var Oh="cr-tuning",Oy={move:"Move",camera:"Camera",look:"Look",aim:"Aim",sprint:"Sprint",shake:"Shake",pad:"Pad",wall:"Wall"},By=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Wf(i){let t=i.split("."),e=t.slice(0,-1);return e.length===1&&e[0]==="camera"&&By.has(t[1])&&e.push("wall"),e}function ky(){try{return window.localStorage}catch{return null}}function Xf({storage:i=ky()}={}){let t=()=>{try{return i?i.getItem(Oh):null}catch{return null}},e=p=>{try{i&&(p===null?i.removeItem(Oh):i.setItem(Oh,p))}catch{}};try{let p=t();p&&Gf(xe,JSON.parse(p))}catch{}let n=new wl({title:"Tuning",autoPlace:!1,width:300}),s=n.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);let r=new Map;function o(p){let x=n,g="";for(let m of p){if(g+=`.${m}`,!r.has(g)){let v=x.addFolder(Oy[m]||m);v.close(),r.set(g,v)}x=r.get(g)}return x}function a(){let p=Fh();e(Object.keys(p).length?JSON.stringify(p):null)}for(let p of qr){let x=p.path.split("."),g=x[x.length-1],m=ss(xe,x.slice(0,-1).join("."));(typeof ss($r,p.path)=="boolean"?o(Wf(p.path)).add(m,g):o(Wf(p.path)).add(m,g,p.min,p.max,p.step)).onChange(a)}let l=null;function c(p){if(!l){l=document.createElement("textarea"),l.readOnly=!0,l.rows=8,Object.assign(l.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let x=document.createElement("div");x.textContent="Press Cmd+C to copy",x.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",l.note=x,s.appendChild(x),s.appendChild(l)}l.value=p,l.note.hidden=!1,l.hidden=!1,l.focus(),l.select()}function h(p){l&&(l.hidden=!0,l.note.hidden=!0);let x=null;try{x=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(p):null}catch{x=null}if(!x){c(p);return}x.catch(()=>c(p))}let d={copyChanges(){h(JSON.stringify(Fh(),null,2))},copyForFile(){h(Vf())},resetAll(){for(let p of qr)Uh(xe,p.path,ss($r,p.path));e(null),n.controllersRecursive().forEach(p=>p.updateDisplay())}};n.add(d,"copyChanges").name("Copy changes"),n.add(d,"copyForFile").name("Copy for tuning.js"),n.add(d,"resetAll").name("Reset all");let u=!1;function f(p){u=p,s.style.display=p?"":"none"}return f(!1),{toggle(){f(!u)},isOpen:()=>u}}var Yf=Math.PI*2;var zy=(i,t,e)=>t*(1-(1-i)**e),$f=i=>i-Yf*Math.round(i/Yf);function Hy(i){return Math.min(1,Math.hypot(i.moveX,i.moveY))}function El(i,t){let e=Math.sin(i.camYaw),n=Math.cos(i.camYaw),s=-i.moveY*e-i.moveX*n,r=-i.moveY*n+i.moveX*e,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),t[0]=s,t[1]=r,Math.min(1,o)}var on=[0,0],Tl=[0,0,0];function qf(i,t,e,n,s,r){let o=i.vel,a=(Math.hypot(t,e)<Math.hypot(o[0],o[2])?n/r.stopTime:n/r.accelTime)*s,l=t-o[0],c=e-o[2],h=Math.hypot(l,c);h<=a?(o[0]=t,o[2]=e):(o[0]+=l/h*a,o[2]+=c/h*a)}function Bh(i,t,e){let n=$f(t-i);return i+Math.max(-e,Math.min(e,n))}function kh(i,t,e){return t.sprint&&!t.aim&&Hy(t)>=e.stickSprintMin}var Gy={move:{acceptsTap:!0,enter(){},update(i,t,e){let n=i.tuning;if(kh(i,t,n))return"sprint";i.aiming=t.aim;let s=t.aim?n.aimWalk:n.jog;return El(t,on),qf(i,on[0]*s,on[1]*s,s,e,n),t.aim?i.facing=Bh(i.facing,t.camYaw,n.aimTurnRate*e):i.speed()>.2&&(i.facing=Bh(i.facing,Math.atan2(i.vel[0],i.vel[2]),n.turnRate*e)),i.heading=i.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(i,t){i.aiming=!1,i.speed()>.5?i.heading=Math.atan2(i.vel[0],i.vel[2]):El(t,on)>.01?i.heading=Math.atan2(on[0],on[1]):i.heading=i.facing},update(i,t,e){let n=i.tuning;return kh(i,t,n)?(El(t,on),i.heading=Bh(i.heading,Math.atan2(on[0],on[1]),n.sprintTurnRate*e),qf(i,Math.sin(i.heading)*n.sprint,Math.cos(i.heading)*n.sprint,n.sprint,e,n),i.facing=i.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(i,t){i.aiming=!1;let e=i.scratch;if(e.dir=[Math.sin(i.facing),Math.cos(i.facing)],El(t,on)>.01){let n=Math.hypot(on[0],on[1]);e.dir[0]=on[0]/n,e.dir[1]=on[1]/n}e.prevOff=0,e.queued=!1,i.heading=Math.atan2(e.dir[0],e.dir[1]),i.facing=i.facing+$f(i.heading-i.facing)},update(i,t,e){let n=i.tuning,s=i.scratch;t.tap&&i.stateTime>=n.rollTime-n.rollBuffer&&(s.queued=!0);let r=i.stateTime>=n.rollTime-1e-9,o=zy(r?1:i.stateTime/n.rollTime,n.rollDistance,n.rollEase),a=o-s.prevOff;return s.prevOff=o,Tl[0]=s.dir[0]*a,Tl[1]=0,Tl[2]=s.dir[1]*a,i.moveBy(Tl,e,!1),r?s.queued?"roll":kh(i,t,n)?"sprint":(i.vel[0]=i.vel[1]=i.vel[2]=0,"move"):null},exit(){}}},Vy=[{name:"roll",when:()=>!0,state:"roll"}];function Zf({boxes:i,spawn:t,tuning:e=xe.move,states:n=Gy,contextActions:s=Vy}){let r={state:"move",stateTime:0,entries:0,pos:[t[0],t[1],t[2]],prevPos:[t[0],t[1],t[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,heading:0,tuning:e,boxes:i,scratch:{},speed(){return Math.hypot(r.vel[0],r.vel[2])},moveBy(o,a,l=!0){let c=r.pos,h=Pf(i,c,o,e.radius,e.height);if(!l)a>0&&(r.vel[0]=(h.pos[0]-c[0])/a,r.vel[2]=(h.pos[2]-c[2])/a);else if(h.hit){let d=h.normal,u=r.vel[0]*d[0]+r.vel[1]*d[1]+r.vel[2]*d[2];u<0&&(r.vel[0]-=d[0]*u,r.vel[1]-=d[1]*u,r.vel[2]-=d[2]*u)}c[0]=h.pos[0],c[1]=h.pos[1],c[2]=h.pos[2]},go(o,a){n[r.state].exit?.(r),r.state=o,r.stateTime=0,r.entries++,r.scratch={},n[o].enter(r,a)},place(o,a){r.pos[0]=r.prevPos[0]=o[0],r.pos[1]=r.prevPos[1]=o[1],r.pos[2]=r.prevPos[2]=o[2],r.vel[0]=r.vel[1]=r.vel[2]=0,a!==void 0?r.facing=r.prevFacing=r.heading=a:r.prevFacing=r.facing},update(o,a){if(r.prevPos[0]=r.pos[0],r.prevPos[1]=r.pos[1],r.prevPos[2]=r.pos[2],r.prevFacing=r.facing,o.tap&&n[r.state].acceptsTap){for(let c of s)if(c.when(r,o)){r.go(c.state,o);break}}r.stateTime+=a;let l=n[r.state].update(r,o,a);n[r.state].selfMoves||r.moveBy([r.vel[0]*a,0,r.vel[2]*a],a,!0),l&&r.go(l,o)}};return n[r.state].enter(r,{moveX:0,moveY:0,camYaw:0}),r}var Jf="#f3efe6";function Kf(i){for(let t of Object.values(i))t&&typeof t=="object"&&Kf(t);return Object.freeze(i)}var jf=Kf({...structuredClone(Ri),name:"doc-placeholder",colors:{...Ri.colors,hair:_t.teal,shirt:Jf,collar:Jf},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ri.face,brow:"uni",fixedSmile:0}});var Al=Math.PI*2,Qf=(i,t,e)=>i<t?t:i>e?e:i,Wy=i=>i-Al*Math.round(i/Al),tp=.5;function Xy(i,t=xe.move){let e=i.state,n=i.speed();if(e==="roll")return{name:"roll",rate:Ze.roll.duration/t.rollTime};if(e==="sprint")return{name:"sprint",rate:Qf(n/yh,.8,2.2)};if(e==="move"){if(n>.3)return{name:"run",rate:Qf(n/yh,.5,2.2)};if(i.aiming)return{name:"aim",rate:1}}return{name:"idle",rate:1}}function Yy(i){if(i<=.08)return 0;if(i>=.9)return Al;let t=(i-.08)/.82;return Al*t*t*(3-2*t)}function ep(i,t=jf){let e=vl(t),n=yl(e),s=new Ae;s.name="player";let r=new Ae;r.position.y=tp,e.root.position.y=-tp,r.add(e.root),s.add(r),s.add(e.shadow);let o="",a=-1;function l(h,d){let u=i.pos,f=i.prevPos;s.position.set(f[0]+(u[0]-f[0])*h,f[1]+(u[1]-f[1])*h,f[2]+(u[2]-f[2])*h),s.rotation.y=i.prevFacing+Wy(i.facing-i.prevFacing)*h;let p=Xy(i);(p.name!==o||i.entries!==a)&&(n.play(p.name,p.name==="roll"?{fade:.05}:void 0),o=p.name,a=i.entries),n.update(d*p.rate),e.update(d),r.rotation.x=i.state==="roll"?Yy(i.stateTime/i.tuning.rollTime):0}function c(){e.dispose(),e.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:l,dispose:c,rig:e,anim:n}}var np=.05;function qy({locked:i,device:t,panelOpen:e}){return!!(i||t==="pad"||e)}function ip({canvas:i,gl:t,params:e}){let n=Qa(i,t),s=n.renderer,r=ja(i),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=Xf();l.panelOpen=c.isOpen;let h=new Hi,d=new Ge(xe.camera.fov,1,.05,100),u=tl();h.add(u.mesh);let f=zf();h.add(f.group);let p=f.boxes,x=bl.spawn,g=Zf({boxes:p,spawn:x.pos});g.place(x.pos,x.yaw);let m=ep(g);h.add(m.group);let v=Uf(),w=Cf(),y=[0,0,0];v.snap(x.pos,x.yaw,"normal",1);let b=null,T=!1,_=null,S=!1,R=!1,C=!1,L={cover:!1},F={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1};function V(){let Et=n.resize();d.aspect=Et.aspect,d.updateProjectionMatrix()}V(),window.addEventListener("resize",V),i.addEventListener("click",()=>r.requestLock());let P=()=>w.reset();window.addEventListener("blur",P),document.addEventListener("pointerlockchange",()=>{r.isLocked()||w.reset()}),window.addEventListener("keydown",Et=>{Et.repeat||(Et.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):Et.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function H(){return g.state==="sprint"?"sprint":g.aiming?"aim":"normal"}function q(Et,bt){g.place(Et,bt),v.snap(Et,bt,"normal",1)}let O=0,it=0,G=0,z=0,k=0,ct=0,gt=0,Y=window.__cr;Y.stats=()=>({fps:O,ms:it,calls:k,tris:ct,scale:n.scale(),characters:1}),Y.player=()=>({pos:g.pos.slice(),state:g.state,speed:g.speed(),facing:g.facing,entries:g.entries}),Y.camera=()=>{let Et=$;return{pos:Et.pos.slice(),fov:Et.fov,inside:If(p,Et.pos,.1)}},Y.place=Et=>{let bt=Et==="spawn"?x:bl.features[Et];bt&&q(bt.pos,bt.yaw)},Y.drive=Et=>{if(!Et){S?R=!0:_=null;return}_=Et,R=!1,Et.tap&&(S=!0)};function ft(Et){if(_)F.moveX=_.moveX||0,F.moveY=_.moveY||0,F.sprint=!!_.sprint,F.aim=!!_.aim,F.tap=S,S&&(S=!1,R&&(_=null,R=!1));else{let bt=b.held;F.moveX=b.moveX,F.moveY=b.moveY,F.tap=w.update(bt.cover,L.cover,Et,xe.move.tapMax),F.sprint=bt.sprint||w.holding(),F.aim=bt.aim}return L.cover=!1,F.camYaw=v.yaw,F}let It=Et=>Et.toFixed(1);function kt(){let Et=r.padStatus();o.textContent=["MOVEMENT TEST","Mouse + keys: WASD move, mouse look, right mouse aim, Space tap roll / hold sprint, Shift sprint","Gamepad: left stick move, right stick look, left trigger aim, A tap roll / hold sprint","",`${g.state}   ${g.speed().toFixed(2)} m/s`,`${Math.round(O)} fps   ${It(it)} ms   scale ${n.scale()}`,`${k} draw calls   ${ct} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${Et}`,"` tuning panel    ?look look test    H hide panel"].join(`
`)}let $={pos:[0,0,0],fov:70},wt=Ka({before(Et){if(b=r.poll(),T=!!_||S||qy({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=T,!T){w.reset(),L.cover=!1;return}let Yt=Math.min(Et,np);C=b.held.aim||_&&_.aim,v.look(b.lookDX,b.lookDY,b.lookX,b.lookY,Yt,C),b.pressed.cover&&(L.cover=!0)},step(Et){T&&g.update(ft(Et),Et)},render(Et,bt){let Yt=T?Math.min(bt,np):0;m.update(Et,Yt);let Qt=g.pos,et=g.prevPos;for(let mt=0;mt<3;mt++)y[mt]=et[mt]+(Qt[mt]-et[mt])*Et;let ht=v.update(Yt,{target:y,mode:H(),side:1},p);$.pos[0]=ht.pos[0],$.pos[1]=ht.pos[1],$.pos[2]=ht.pos[2],$.fov=ht.fov,d.fov!==ht.fov&&(d.fov=ht.fov,d.updateProjectionMatrix()),d.position.set(ht.pos[0],ht.pos[1],ht.pos[2]),d.lookAt(ht.pos[0]+ht.dir[0],ht.pos[1]+ht.dir[1],ht.pos[2]+ht.dir[2]),u.update(performance.now()/1e3),f.update(Yt),s.render(h,d),k=s.info.render.calls,ct=s.info.render.triangles,G++,z+=bt,z>=1&&(O=G/z,it=z/G*1e3,G=0,z=0),gt+=bt,gt>=.1&&(gt=0,kt()),n.frameDone(bt*1e3)}});e&&e.has("tune")&&c.toggle(),b=r.poll(),v.update(0,{target:x.pos,mode:"normal",side:1},p),kt(),wt.start()}var $y={webgl:"Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function zh(i,t){window.__cr.error={kind:i,detail:t||""},document.documentElement.dataset.crError=i;let e=document.getElementById("cr-error");e&&(e.textContent="",e.appendChild(document.createTextNode($y[i])),i==="boot"&&t&&(e.appendChild(document.createElement("br")),e.appendChild(document.createTextNode(t))),e.hidden=!1)}window.addEventListener("error",i=>{window.__cr.error||zh("boot",i.message)});function Zy(){let i=document.getElementById("cr-canvas"),t=i.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!t){zh("webgl");return}let e=new URLSearchParams(location.search);e.has("look")?Rf({canvas:i,gl:t}):ip({canvas:i,gl:t,params:e}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{Zy()}catch(i){zh("boot",i&&i.message)}})();

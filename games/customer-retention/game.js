/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var Wu=0,Tc=1,Xu=2;var Hr=1,Yu=2,zs=3,Ai=0,Fe=1,wn=2,as=0,Hs=1,Ac=2,Rc=3,Cc=4,qu=5;var ls=100,$u=101,Zu=102,Ju=103,Ku=104,ju=200,Qu=201,td=202,ed=203,Pc=204,Ic=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,Ho=0,Go=1,Vo=2,Is=3,Wo=4,Xo=5,Yo=6,qo=7,Lc=0,ud=1,dd=2,Gn=0,Dc=1,Nc=2,Uc=3,Fc=4,Oc=5,Bc=6,kc=7;var zc=300,cs=301,Gs=302,Ea=303,Ta=304,$o=1e3,kn=1001,Zo=1002,Ge=1003,fd=1004;var Gr=1005;var en=1006,Aa=1007;var oi=1008;var pn=1009,Hc=1010,Gc=1011,Vs=1012,Ra=1013,Nn=1014,Un=1015,Fn=1016,Ca=1017,Pa=1018,hs=1020,Vc=35902,Wc=35899,Xc=1021,Yc=1022,On=1023,si=1026,ai=1027,qc=1028,Ia=1029,Ri=1030,La=1031;var Da=1033,Vr=33776,Wr=33777,Xr=33778,Yr=33779,Na=35840,Ua=35841,Fa=35842,Oa=35843,Ba=36196,ka=37492,za=37496,Ha=37488,Ga=37489,qr=37490,Va=37491,Wa=37808,Xa=37809,Ya=37810,qa=37811,$a=37812,Za=37813,Ja=37814,Ka=37815,ja=37816,Qa=37817,tl=37818,el=37819,nl=37820,il=37821,sl=36492,rl=36494,ol=36495,al=36283,ll=36284,$r=36285,cl=36286;var mr=2300,Jo=2301,ko=2302,xc=2303,_c=2400,vc=2401,yc=2402;var pd=3200;var $c=0,md=1,li="",We="srgb",gr="srgb-linear",xr="linear",ge="srgb";var zo=7680;var gd=519,xd=512,_d=513,vd=514,Zc=515,yd=516,Md=517,Jc=518,Kc=519,Sd=35044,Ws=35048;var jc="300 es",yn=2e3,_r=2001;function Qp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function tm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bd(){let n=vr("canvas");return n.style.display="block",n}var gu={},Ls=null;function Qc(...n){let t="THREE."+n.shift();Ls?Ls("log",t,...n):console.log(t,...n)}function wd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qt(...n){n=wd(n);let t="THREE."+n.shift();if(Ls)Ls("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=wd(n);let t="THREE."+n.shift();if(Ls)Ls("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hr(...n){let t=n.join(" ");t in gu||(gu[t]=!0,Qt(...n))}function Ed(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Td={[Ho]:Ho,[Vo]:Yo,[Wo]:Wo,[Is]:Xo,[Go]:Go,[Yo]:Vo,[qo]:qo,[Xo]:Is},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,ur=Math.PI/180,Ds=180/Math.PI;function us(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function le(n,t,e){return Math.max(t,Math.min(e,n))}function th(n,t){return(n%t+t)%t}function em(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function nm(n,t,e){return n!==t?(e-n)/(t-n):0}function dr(n,t,e){return(1-e)*n+e*t}function im(n,t,e,i){return dr(n,t,1-Math.exp(-e*i))}function sm(n,t=1){return t-Math.abs(th(n,t*2)-t)}function rm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function om(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function am(n,t){return n+Math.floor(Math.random()*(t-n+1))}function lm(n,t){return n+Math.random()*(t-n)}function cm(n){return n*(.5-Math.random())}function hm(n){n!==void 0&&(xu=n);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function um(n){return n*ur}function dm(n){return n*Ds}function fm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function pm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function eh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mm(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ad(n,t){if(t.constructor===Float32Array)return n;let e=nh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Rd(n,t){if(t.constructor===Float32Array)return n;let e=nh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var hl={DEG2RAD:ur,RAD2DEG:Ds,generateUUID:us,clamp:le,euclideanModulo:th,mapLinear:em,inverseLerp:nm,lerp:dr,damp:im,pingpong:sm,smoothstep:rm,smootherstep:om,randInt:am,randFloat:lm,randFloatSpread:cm,seededRandom:hm,degToRad:um,radToDeg:dm,isPowerOfTwo:fm,ceilPowerOfTwo:pm,floorPowerOfTwo:eh,setQuaternionFromProperEuler:mm,normalize:Rd,denormalize:Ad},lh=class lh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;var Lt=lh,nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),b=Math.sin(v);m=Math.sin(m*v)/b,a=Math.sin(a*v)/b,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ch=class ch{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;var N=ch,Zl=new N,_u=new nn,hh=class hh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],v=s[1],b=s[4],y=s[7],S=s[2],E=s[5],x=s[8];return r[0]=o*_+a*v+l*S,r[3]=o*g+a*b+l*E,r[6]=o*m+a*y+l*x,r[1]=c*_+h*v+d*S,r[4]=c*g+h*b+d*E,r[7]=c*m+h*y+d*x,r[2]=u*_+f*v+p*S,r[5]=u*g+f*b+p*E,r[8]=u*m+f*y+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;var ne=hh,Jl=new ne,vu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gm(){let n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:t,whitePoint:i,transfer:xr,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),n}var ue=gm();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xs,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=vr("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xm=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var _m=0,jl=new N,sn=class n extends zn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=kn,s=kn,r=en,o=oi,a=On,l=pn,c=n.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=us(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $o:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $o:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=zc;sn.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(f+1)/2,S=(m+1)/2,E=(h+u)/4,x=(d+_)/4,M=(p+g)/4;return b>y&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=x/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=M/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var Ce=uh,jo=class extends zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends jo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},yr=class extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wa=class wa{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,_,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,ym)}lookAt(t,e,i){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(i,hn),gi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(i,hn)),gi.normalize(),xo.crossVectors(hn,gi),s[0]=gi.x,s[4]=xo.x,s[8]=hn.x,s[1]=gi.y,s[5]=xo.y,s[9]=hn.y,s[2]=gi.z,s[6]=xo.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],b=i[7],y=i[11],S=i[15],E=s[0],x=s[4],M=s[8],R=s[12],C=s[1],I=s[5],F=s[9],H=s[13],P=s[2],B=s[6],W=s[10],z=s[14],it=s[3],V=s[7],J=s[11],G=s[15];return r[0]=o*E+a*C+l*P+c*it,r[4]=o*x+a*I+l*B+c*V,r[8]=o*M+a*F+l*W+c*J,r[12]=o*R+a*H+l*z+c*G,r[1]=h*E+d*C+u*P+f*it,r[5]=h*x+d*I+u*B+f*V,r[9]=h*M+d*F+u*W+f*J,r[13]=h*R+d*H+u*z+f*G,r[2]=p*E+_*C+g*P+m*it,r[6]=p*x+_*I+g*B+m*V,r[10]=p*M+_*F+g*W+m*J,r[14]=p*R+_*H+g*z+m*G,r[3]=v*E+b*C+y*P+S*it,r[7]=v*x+b*I+y*B+S*V,r[11]=v*M+b*F+y*W+S*J,r[15]=v*R+b*H+y*z+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=l*f-c*u,b=a*f-c*d,y=a*u-l*d,S=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(_*v-g*b+m*y)-i*(p*v-g*S+m*E)+s*(p*b-_*S+m*x)-r*(p*y-_*E+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=e*a-i*o,b=e*l-s*o,y=e*c-r*o,S=i*l-s*a,E=i*c-r*a,x=s*c-r*l,M=h*_-d*p,R=h*g-u*p,C=h*m-f*p,I=d*g-u*_,F=d*m-f*_,H=u*m-f*g,P=v*H-b*F+y*I+S*C-E*R+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(a*H-l*F+c*I)*B,t[1]=(s*F-i*H-r*I)*B,t[2]=(_*x-g*E+m*S)*B,t[3]=(u*E-d*x-f*S)*B,t[4]=(l*C-o*H-c*R)*B,t[5]=(e*H-s*C+r*R)*B,t[6]=(g*y-p*x-m*b)*B,t[7]=(h*x-u*y+f*b)*B,t[8]=(o*F-a*C+c*M)*B,t[9]=(i*C-e*F-r*M)*B,t[10]=(p*E-_*y+m*v)*B,t[11]=(d*y-h*E-f*v)*B,t[12]=(a*R-o*I-l*M)*B,t[13]=(e*I-i*R+s*M)*B,t[14]=(_*b-p*S-g*v)*B,t[15]=(h*S-d*b+u*v)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,g=o*d,m=a*d,v=l*c,b=l*h,y=l*d,S=i.x,E=i.y,x=i.z;return s[0]=(1-(_+m))*S,s[1]=(f+y)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(p+b)*x,s[9]=(g-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);let c=1/o,h=1/a,d=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===yn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_r)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===yn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===_r)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};wa.prototype.isMatrix4=!0;var fe=wa,_s=new N,Pn=new fe,vm=new N(0,0,0),ym=new N(1,1,1),gi=new N,xo=new N,hn=new N,Mu=new fe,Su=new nn,on=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mm=0,bu=new N,vs=new nn,jn=new fe,_o=new N,rr=new N,Sm=new N,bm=new nn,wu=new N(1,0,0),Eu=new N(0,1,0),Tu=new N(0,0,1),Au={type:"added"},wm={type:"removed"},ys={type:"childadded",child:null},Ql={type:"childremoved",child:null},Mn=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new on,i=new nn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new ne}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return bu.copy(t).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_o.copy(t):_o.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(rr,_o,this.up):jn.lookAt(_o,rr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(jn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),ys.child=t,this.dispatchEvent(ys),ys.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wm),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new N(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function tc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=th(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function i(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let i=Cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ue.workingToColorSpace(Ze.copy(this),t),Math.round(le(Ze.r*255,0,255))*65536+Math.round(le(Ze.g*255,0,255))*256+Math.round(le(Ze.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=We){ue.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(vo);let i=dr(xi.h,vo.h,e),s=dr(xi.s,vo.s,e),r=dr(xi.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new jt;jt.NAMES=Cd;var ts=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new N,Qn=new N,ec=new N,ti=new N,Ms=new N,Ss=new N,Ru=new N,nc=new N,ic=new N,sc=new N,rc=new Ce,oc=new Ce,ac=new Ce,Mi=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),Qn.subVectors(i,e),ec.subVectors(t,e);let o=In.dot(In),a=In.dot(Qn),l=In.dot(ec),c=Qn.dot(Qn),h=Qn.dot(ec),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,i),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),Qn.subVectors(t,e),In.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,i),Ss.subVectors(r,i),nc.subVectors(t,i);let l=Ms.dot(nc),c=Ss.dot(nc);if(l<=0&&c<=0)return e.copy(i);ic.subVectors(t,s);let h=Ms.dot(ic),d=Ss.dot(ic);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Ms,o);sc.subVectors(t,r);let f=Ms.dot(sc),p=Ss.dot(sc);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ss,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Ru.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Ru,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(i).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Mo.subVectors(this.max,or),bs.subVectors(t.a,or),ws.subVectors(t.b,or),Es.subVectors(t.c,or),_i.subVectors(ws,bs),vi.subVectors(Es,ws),Zi.subVectors(bs,Es);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Zi.z,Zi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Zi.z,0,-Zi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Zi.y,Zi.x,0];return!lc(e,bs,ws,Es,Mo)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,bs,ws,Es,Mo))?!1:(So.crossVectors(_i,vi),e=[So.x,So.y,So.z],lc(e,bs,ws,Es,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,yo=new Si,bs=new N,ws=new N,Es=new N,_i=new N,vi=new N,Zi=new N,or=new N,Mo=new N,So=new N,Ji=new N;function lc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ne=new N,bo=new Lt,Tm=0,Se=class extends zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=t!==void 0?nh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ad(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Rd(t,this.array)}};var Sr=class extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var br=class extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}},Am=new Si,ar=new N,cc=new N,Hn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Am.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(cc)),this.expandByPoint(ar.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rm=0,vn=new fe,hc=new Mn,Ts=new N,un=new Si,lr=new Si,He=new N,Ee=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qp(t)?br:Sr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,i){return vn.makeTranslation(t,e,i),this.applyMatrix4(vn),this}scale(t,e,i){return vn.makeScale(t,e,i),this.applyMatrix4(vn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(un.min,lr.min),un.expandByPoint(He),He.addVectors(un.max,lr.max),un.expandByPoint(He)):(un.expandByPoint(lr.min),un.expandByPoint(lr.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),He.add(Ts)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Se(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;let h=new N,d=new N,u=new N,f=new Lt,p=new Lt,_=new Lt,g=new N,m=new N;function v(R,C,I){c[R]=c[C]=c[I]=1,h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,I),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,I),d.sub(h),u.sub(h),p.sub(f),_.sub(f);let F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(F),a[R].add(g),a[C].add(g),a[I].add(g),l[R].add(m),l[C].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,C=b.length;R<C;++R){let I=b[R],F=I.start,H=I.count;for(let P=F,B=F+H;P<B;P+=3)v(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new N,S=new N,E=new N,x=new N;function M(R){E.fromBufferAttribute(s,R),x.copy(E);let C=a[R];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),S.crossVectors(x,C);let F=S.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,F)}for(let R=0,C=i.count;R<C;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Se(u,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uc=new N,Cm=new N,Pm=new ne,Dn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=uc.subVectors(i,e).cross(Cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pm.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Im=0,es=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Hs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Dn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new N,dc=new N,wo=new N,Eo=new N,ta=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dc.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),Eo.copy(this.origin).sub(dc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=Eo.dot(this.direction),l=-Eo.dot(wo),c=Eo.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dc).addScaledVector(wo,u),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=i.x-o.x,v=i.y-o.y,b=i.z-o.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(h),x,M,R,C,I,F,H,P,B,W,z,it;if(y>=S&&y>=E?(R=l,F=d,B=p,it=m,l>=0?(x=c,M=h,C=u,I=f,H=_,P=g,W=v,z=b):(x=h,M=c,C=f,I=u,H=g,P=_,W=b,z=v)):S>=E?(R=c,F=u,B=_,it=v,c>=0?(x=h,M=l,C=f,I=d,H=g,P=p,W=b,z=m):(x=l,M=h,C=d,I=f,H=p,P=g,W=m,z=b)):(R=h,F=f,B=g,it=b,h>=0?(x=l,M=c,C=d,I=u,H=p,P=_,W=m,z=v):(x=c,M=l,C=u,I=d,H=_,P=p,W=v,z=m)),R===0)return null;let V=x/R,J=M/R,G=1/R,pt=C-V*F,gt=I-J*F,O=H-V*B,ut=P-J*B,At=W-V*it,Ft=z-J*it,q=At*ut-Ft*O,wt=pt*Ft-gt*At,Gt=O*gt-ut*pt;if(s){if(q<0||wt<0||Gt<0)return null}else if((q<0||wt<0||Gt<0)&&(q>0||wt>0||Gt>0))return null;let Ot=q+wt+Gt;if(Ot===0)return null;let Jt=G*(q*F+wt*B+Gt*it);return(Ot>0?Jt<0:Jt>0)?null:this.at(Jt/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ns=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cu=new fe,Ki=new ta,To=new Hn,Pu=new N,Ao=new N,Ro=new N,Co=new N,fc=new N,Po=new N,Iu=new N,Io=new N,xe=class extends Mn{constructor(t=new Ee,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(fc.fromBufferAttribute(d,t),o?Po.addScaledVector(fc,h):Po.addScaledVector(fc.sub(e),h))}e.add(Po)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(To.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(To,Pu)===null||Ki.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(Cu),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=b;y<S;y+=3){let E=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);s=Lo(this,m,t,i,c,h,d,E,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);s=Lo(this,o,t,i,c,h,d,v,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=b;y<S;y+=3){let E=y,x=y+1,M=y+2;s=Lo(this,m,t,i,c,h,d,E,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=g,b=g+1,y=g+2;s=Lo(this,o,t,i,c,h,d,v,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Lm(n,t,e,i,s,r,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;Io.copy(a),Io.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:n}}function Lo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ao),n.getVertexPosition(l,Ro),n.getVertexPosition(c,Co);let h=Lm(n,t,e,i,Ao,Ro,Co,Iu);if(h){let d=new N;Mi.getBarycoord(Iu,Ao,Ro,Co,d),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,l,c,d,new Lt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,d,new Lt)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};Mi.getNormal(Ao,Ro,Co,u.normal),h.face=u,h.barycoord=d}return h}var ea=class extends sn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ge,h=Ge,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=new Hn,Dm=new Lt(.5,.5),Do=new N,is=class{constructor(t=new Dn,e=new Dn,i=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],v=r[12],b=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,m-p,S-v).normalize(),s[1].setComponents(c+o,f+h,m+p,S+v).normalize(),s[2].setComponents(c+a,f+d,m+_,S+b).normalize(),s[3].setComponents(c-a,f-d,m-_,S-b).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,m-g,S-y).normalize();else if(s[4].setComponents(c-l,f-u,m-g,S-y).normalize(),e===yn)s[5].setComponents(c+l,f+u,m+g,S+y).normalize();else if(e===_r)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=Dm.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Do.x=s.normal.x>0?t.max.x:t.min.x,Do.y=s.normal.y>0?t.max.y:t.min.y,Do.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lu=new fe,na=class n{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Lu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new is),i[s].setFromProjectionMatrix(Lu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new is),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var wr=class extends sn{constructor(t=[],e=cs,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Er=class extends sn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class extends sn{constructor(t,e,i=Nn,s,r,o,a=Ge,l=Ge,c,h=si,d=1){if(h!==si&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Tr=class extends ri{constructor(t,e=Nn,i=cs,s,r,o=Ge,a=Ge,l,c=si){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ar=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},an=class n extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function p(_,g,m,v,b,y,S,E,x,M,R){let C=y/x,I=S/M,F=y/2,H=S/2,P=E/2,B=x+1,W=M+1,z=0,it=0,V=new N;for(let J=0;J<W;J++){let G=J*I-H;for(let pt=0;pt<B;pt++){let gt=pt*C-F;V[_]=gt*v,V[g]=G*b,V[m]=P,c.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[m]=E>0?1:-1,h.push(V.x,V.y,V.z),d.push(pt/x),d.push(1-J/M),z+=1}}for(let J=0;J<M;J++)for(let G=0;G<x;G++){let pt=u+G+B*J,gt=u+G+B*(J+1),O=u+(G+1)+B*(J+1),ut=u+(G+1)+B*J;l.push(pt,gt,ut),l.push(gt,O,ut),it+=6}a.addGroup(f,it,R),f+=it,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Sn=class n extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],g=i/2,m=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function v(){let y=new N,S=new N,E=0,x=(e-t)/i;for(let M=0;M<=r;M++){let R=[],C=M/r,I=C*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,P=H*l+a,B=Math.sin(P),W=Math.cos(P);S.x=I*B,S.y=-C*i+g,S.z=I*W,d.push(S.x,S.y,S.z),y.set(B,x,W).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-C),R.push(p++)}_.push(R)}for(let M=0;M<s;M++)for(let R=0;R<r;R++){let C=_[R][M],I=_[R+1][M],F=_[R+1][M+1],H=_[R][M+1];(t>0||R!==0)&&(h.push(C,I,H),E+=3),(e>0||R!==r-1)&&(h.push(I,F,H),E+=3)}c.addGroup(m,E,0),m+=E}function b(y){let S=p,E=new Lt,x=new N,M=0,R=y===!0?t:e,C=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let I=p;for(let F=0;F<=s;F++){let P=F/s*l+a,B=Math.cos(P),W=Math.sin(P);x.x=R*W,x.y=g*C,x.z=R*B,d.push(x.x,x.y,x.z),u.push(0,C,0),E.x=B*.5+.5,E.y=W*.5*C+.5,f.push(E.x,E.y),p++}for(let F=0;F<s;F++){let H=S+F,P=I+F;y===!0?h.push(P,P+1,H):h.push(P+1,P,H),M+=3}c.addGroup(m,M,y===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Lt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new N,s=[],r=[],o=[],a=new N,l=new fe;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Fs=class extends rn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Lt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ia=class extends Fs{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Du=new N,Nu=new N,pc=new ih,mc=new ih,gc=new ih,sa=class extends rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nu.subVectors(s[0],s[1]).add(s[0]),c=Nu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Du.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Du),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),pc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),mc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),gc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),mc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),gc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(pc.calc(l),mc.calc(l),gc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Nm(n,t){let e=1-n;return e*e*t}function Um(n,t){return 2*(1-n)*n*t}function Fm(n,t){return n*n*t}function fr(n,t,e,i){return Nm(n,t)+Um(n,e)+Fm(n,i)}function Om(n,t){let e=1-n;return e*e*e*t}function Bm(n,t){let e=1-n;return 3*e*e*n*t}function km(n,t){return 3*(1-n)*n*n*t}function zm(n,t){return n*n*n*t}function pr(n,t,e,i,s){return Om(n,t)+Bm(n,e)+km(n,i)+zm(n,s)}var Rr=class extends rn{constructor(t=new Lt,e=new Lt,i=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Lt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends rn{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y),pr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cr=class extends rn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends rn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends rn{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends rn{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y),fr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Uu(a,l.x,c.x,h.x,d.x),Uu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:sa,CubicBezierCurve:Rr,CubicBezierCurve3:ra,EllipseCurve:Fs,LineCurve:Cr,LineCurve3:oa,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:Ir,SplineCurve:Lr}),la=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new aa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ss=class extends la{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Cr(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Pr(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Rr(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s),new Lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Lr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Fs(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Os=class extends ss{constructor(t){super(t),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ss().fromJSON(s))}return this}};function Hm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Pd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ym(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=n[u],p=n[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Dr(r,o,e,a,l,c,0),o}function Pd(n,t,e,i,s){let r;if(s===i0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Fu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Fu(o/i|0,n[o],n[o+1],r);return r&&Bs(r,r.next)&&(Ur(r),r=r.next),r}function rs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Bs(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Ur(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Dr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Km(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Vm(n,i,s,r):Gm(n)){t.push(l.i,n.i,c.i),Ur(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Wm(rs(n),t),Dr(n,t,e,i,s,r,2)):o===2&&Xm(n,t,e,i,s,r):Dr(rs(n),t,e,i,s,r,1);break}}}function Gm(n){let t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&cr(s,a,r,l,o,c,p.x,p.y)&&Ae(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vm(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ae(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),m=Mc(f,p,t,e,i),v=Mc(_,g,t,e,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&cr(a,h,l,d,c,u,b.x,b.y)&&Ae(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&cr(a,h,l,d,c,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&cr(a,h,l,d,c,u,b.x,b.y)&&Ae(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&cr(a,h,l,d,c,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Bs(i,s)&&Ld(i,e,e.next,s)&&Nr(i,s)&&Nr(s,i)&&(t.push(i.i,e.i,s.i),Ur(e),Ur(e.next),e=n=s),e=e.next}while(e!==n);return rs(e)}function Xm(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let l=Dd(o,a);o=rs(o,o.next),l=rs(l,l.next),Dr(o,t,e,i,s,r,0),Dr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ym(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Pd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Qm(c))}s.sort(qm);for(let r=0;r<s.length;r++)e=$m(s[r],e);return e}function qm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function $m(n,t){let e=Zm(n,t);if(!e)return t;let i=Dd(e,n);return rs(i,i.next),rs(e,e.next)}function Zm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Bs(n,e))return e;do{if(Bs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Id(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Nr(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Jm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Jm(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function Km(n,t,e,i){let s=n;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,jm(s)}function jm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Mc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Qm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Id(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function cr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Id(n,t,e,i,s,r,o,a)}function t0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!e0(n,t)&&(Nr(n,t)&&Nr(t,n)&&n0(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||Bs(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Bs(n,t){return n.x===t.x&&n.y===t.y}function Ld(n,t,e,i){let s=Uo(Ae(n,t,e)),r=Uo(Ae(n,t,i)),o=Uo(Ae(e,i,n)),a=Uo(Ae(e,i,t));return!!(s!==r&&o!==a||s===0&&No(n,e,t)||r===0&&No(n,i,t)||o===0&&No(e,n,i)||a===0&&No(e,t,i))}function No(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Uo(n){return n>0?1:n<0?-1:0}function e0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ld(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Nr(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function n0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Dd(n,t){let e=Sc(n.i,n.x,n.y),i=Sc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fu(n,t,e,i){let s=Sc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ur(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var bc=class{static triangulate(t,e,i=2){return Hm(t,e,i)}},Qi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ou(t),Bu(i,t);let o=t.length;e.forEach(Ou);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Bu(i,e[l]);let a=bc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ou(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Fr=class n extends Ee{constructor(t=new Os([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:s0,b,y=!1,S,E,x,M;if(m){b=m.getSpacedPoints(h),y=!0,u=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,nt),E=new N,x=new N,M=new N}u||(g=0,f=0,p=0,_=0);let R=a.extractPoints(c),C=R.shape,I=R.holes;if(!Qi.isClockWise(C)){C=C.reverse();for(let nt=0,_t=I.length;nt<_t;nt++){let yt=I[nt];Qi.isClockWise(yt)&&(I[nt]=yt.reverse())}}function H(nt){let yt=10000000000000001e-36,dt=nt[0];for(let ot=1;ot<=nt.length;ot++){let K=ot%nt.length,ct=nt[K],zt=ct.x-dt.x,qt=ct.y-dt.y,Kt=zt*zt+qt*qt,L=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(dt.x),Math.abs(dt.y)),at=yt*L*L;if(Kt<=at){nt.splice(K,1),ot--;continue}dt=ct}}H(C),I.forEach(H);let P=I.length,B=C;for(let nt=0;nt<P;nt++){let _t=I[nt];C=C.concat(_t)}function W(nt,_t,yt){return _t||ee("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(_t,yt)}let z=C.length;function it(nt,_t,yt){let dt,ot,K,ct=nt.x-_t.x,zt=nt.y-_t.y,qt=yt.x-nt.x,Kt=yt.y-nt.y,L=ct*ct+zt*zt,at=ct*Kt-zt*qt;if(Math.abs(at)>Number.EPSILON){let Rt=Math.sqrt(L),Wt=Math.sqrt(qt*qt+Kt*Kt),rt=_t.x-zt/Rt,ie=_t.y+ct/Rt,Nt=yt.x-Kt/Wt,Bt=yt.y+qt/Wt,A=((Nt-rt)*Kt-(Bt-ie)*qt)/(ct*Kt-zt*qt);dt=rt+ct*A-nt.x,ot=ie+zt*A-nt.y;let w=dt*dt+ot*ot;if(w<=2)return new Lt(dt,ot);K=Math.sqrt(w/2)}else{let Rt=!1;ct>Number.EPSILON?qt>Number.EPSILON&&(Rt=!0):ct<-Number.EPSILON?qt<-Number.EPSILON&&(Rt=!0):Math.sign(zt)===Math.sign(Kt)&&(Rt=!0),Rt?(dt=-zt,ot=ct,K=Math.sqrt(L)):(dt=ct,ot=zt,K=Math.sqrt(L/2))}return new Lt(dt/K,ot/K)}let V=[];for(let nt=0,_t=B.length,yt=_t-1,dt=nt+1;nt<_t;nt++,yt++,dt++)yt===_t&&(yt=0),dt===_t&&(dt=0),V[nt]=it(B[nt],B[yt],B[dt]);let J=[],G,pt=V.concat();for(let nt=0,_t=P;nt<_t;nt++){let yt=I[nt];G=[];for(let dt=0,ot=yt.length,K=ot-1,ct=dt+1;dt<ot;dt++,K++,ct++)K===ot&&(K=0),ct===ot&&(ct=0),G[dt]=it(yt[dt],yt[K],yt[ct]);J.push(G),pt=pt.concat(G)}let gt;if(g===0)gt=Qi.triangulateShape(B,I);else{let nt=[],_t=[];for(let yt=0;yt<g;yt++){let dt=yt/g,ot=f*Math.cos(dt*Math.PI/2),K=p*Math.sin(dt*Math.PI/2)+_;for(let ct=0,zt=B.length;ct<zt;ct++){let qt=W(B[ct],V[ct],K);wt(qt.x,qt.y,-ot),dt===0&&nt.push(qt)}for(let ct=0,zt=P;ct<zt;ct++){let qt=I[ct];G=J[ct];let Kt=[];for(let L=0,at=qt.length;L<at;L++){let Rt=W(qt[L],G[L],K);wt(Rt.x,Rt.y,-ot),dt===0&&Kt.push(Rt)}dt===0&&_t.push(Kt)}}gt=Qi.triangulateShape(nt,_t)}let O=gt.length,ut=p+_;for(let nt=0;nt<z;nt++){let _t=u?W(C[nt],pt[nt],ut):C[nt];y?(x.copy(S.normals[0]).multiplyScalar(_t.x),E.copy(S.binormals[0]).multiplyScalar(_t.y),M.copy(b[0]).add(x).add(E),wt(M.x,M.y,M.z)):wt(_t.x,_t.y,0)}for(let nt=1;nt<=h;nt++)for(let _t=0;_t<z;_t++){let yt=u?W(C[_t],pt[_t],ut):C[_t];y?(x.copy(S.normals[nt]).multiplyScalar(yt.x),E.copy(S.binormals[nt]).multiplyScalar(yt.y),M.copy(b[nt]).add(x).add(E),wt(M.x,M.y,M.z)):wt(yt.x,yt.y,d/h*nt)}for(let nt=g-1;nt>=0;nt--){let _t=nt/g,yt=f*Math.cos(_t*Math.PI/2),dt=p*Math.sin(_t*Math.PI/2)+_;for(let ot=0,K=B.length;ot<K;ot++){let ct=W(B[ot],V[ot],dt);wt(ct.x,ct.y,d+yt)}for(let ot=0,K=I.length;ot<K;ot++){let ct=I[ot];G=J[ot];for(let zt=0,qt=ct.length;zt<qt;zt++){let Kt=W(ct[zt],G[zt],dt);y?wt(Kt.x,Kt.y+b[h-1].y,b[h-1].x+yt):wt(Kt.x,Kt.y,d+yt)}}}At(),Ft();function At(){let nt=s.length/3;if(u){let _t=0,yt=z*_t;for(let dt=0;dt<O;dt++){let ot=gt[dt];Gt(ot[2]+yt,ot[1]+yt,ot[0]+yt)}_t=h+g*2,yt=z*_t;for(let dt=0;dt<O;dt++){let ot=gt[dt];Gt(ot[0]+yt,ot[1]+yt,ot[2]+yt)}}else{for(let _t=0;_t<O;_t++){let yt=gt[_t];Gt(yt[2],yt[1],yt[0])}for(let _t=0;_t<O;_t++){let yt=gt[_t];Gt(yt[0]+z*h,yt[1]+z*h,yt[2]+z*h)}}i.addGroup(nt,s.length/3-nt,0)}function Ft(){let nt=s.length/3,_t=0;q(B,_t),_t+=B.length;for(let yt=0,dt=I.length;yt<dt;yt++){let ot=I[yt];q(ot,_t),_t+=ot.length}i.addGroup(nt,s.length/3-nt,1)}function q(nt,_t){let yt=nt.length;for(;--yt>=0;){let dt=yt,ot=yt-1;ot<0&&(ot=nt.length-1);for(let K=0,ct=h+g*2;K<ct;K++){let zt=z*K,qt=z*(K+1),Kt=_t+dt+zt,L=_t+ot+zt,at=_t+ot+qt,Rt=_t+dt+qt;Ot(Kt,L,at,Rt)}}}function wt(nt,_t,yt){l.push(nt),l.push(_t),l.push(yt)}function Gt(nt,_t,yt){Jt(nt),Jt(_t),Jt(yt);let dt=s.length/3,ot=v.generateTopUV(i,s,dt-3,dt-2,dt-1);te(ot[0]),te(ot[1]),te(ot[2])}function Ot(nt,_t,yt,dt){Jt(nt),Jt(_t),Jt(dt),Jt(_t),Jt(yt),Jt(dt);let ot=s.length/3,K=v.generateSideWallUV(i,s,ot-6,ot-3,ot-2,ot-1);te(K[0]),te(K[1]),te(K[3]),te(K[1]),te(K[2]),te(K[3])}function Jt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function te(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return r0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new aa[s.type]().fromJSON(s)),new n(i,t.options)}},s0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Lt(r,o),new Lt(a,l),new Lt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Lt(o,1-l),new Lt(c,1-d),new Lt(u,1-p),new Lt(_,1-m)]:[new Lt(a,1-l),new Lt(h,1-d),new Lt(f,1-p),new Lt(g,1-m)]}};function r0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Or=class n extends Ee{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new Lt,f=new N,p=new N,_=new N,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=e;v++){let b=i+v*h*s,y=Math.sin(b),S=Math.cos(b);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*S,o.push(d.x,d.y,d.z),u.x=v/e,u.y=E/(t.length-1),a.push(u.x,u.y);let x=l[3*E+0]*y,M=l[3*E+1],R=l[3*E+0]*S;c.push(x,M,R)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){let y=b+v*t.length,S=y,E=y+t.length,x=y+t.length+1,M=y+1;r.push(S,E,M),r.push(x,M,E)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var bi=class n extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let v=m*u-o;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-v,0),_.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let b=v+c*m,y=v+c*(m+1),S=v+1+c*(m+1),E=v+1+c*m;f.push(b,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var bn=class n extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){let v=[],b=m/i,y=o+b*a,S=t*Math.cos(y),E=Math.sqrt(t*t-S*S),x=0;m===0&&o===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let R=M/e,C=s+R*r;d.x=-E*Math.cos(C),d.y=S,d.z=E*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(R+x,1-b),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let b=h[m][v+1],y=h[m][v],S=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&f.push(b,y,E),(m!==i-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var os=class n extends Ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new N,f=new N,p=new N;for(let _=0;_<=i;_++){let g=o+_/i*a;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(m,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Br=class n extends Ee{constructor(t=new Ir(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Lt,h=new N,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function _(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),v(),m()}function g(b){h=t.getPointAt(b/e,h);let y=o.normals[b],S=o.binormals[b];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,M=Math.sin(x),R=-Math.cos(x);l.x=R*y.x+M*S.x,l.y=R*y.y+M*S.y,l.z=R*y.z+M*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){let S=(s+1)*(b-1)+(y-1),E=(s+1)*b+(y-1),x=(s+1)*b+y,M=(s+1)*(b-1)+y;p.push(S,E,M),p.push(E,x,M)}}function v(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)c.x=b/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ds(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ku(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ku(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ke(n){let t={};for(let e=0;e<n.length;e++){let i=ds(n[e]);for(let s in i)t[s]=i[s]}return t}function ku(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function o0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Nd={clone:ds,merge:Ke},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=o0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ca=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ha=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Fo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var wi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends wi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vc:r=t,a=2*e-i;break;case yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:o=t,l=2*i-e;break;case yc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+v*o[c+S]+b*o[l+S]+y*o[d+S];return r}},fa=class extends wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},pa=class extends wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ma=class extends wi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(s-e),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*u+p*2,v=d[m],b=d[m+1],y=t*u+p*2,S=h[y],E=h[y+1],x=h0(i,e,v,S,s);r[p]=Ud(x,_,b,E,g)}return r}};function Ud(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function c0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function h0(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ud(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=c0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Fo(t.settings)&&(i.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Fo(this.settings)&&(zu(this.settings.inTangents,t),zu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Fo(this.settings)&&(Hu(this.settings.inTangents,t),Hu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&tm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ko,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Fo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Hu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Jo;var Ei=class extends fn{constructor(t,e,i){super(t,e,i)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=mr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};ga.prototype.ValueTypeName="color";var xa=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};xa.prototype.ValueTypeName="number";var _a=class extends wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},kr=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends fn{constructor(t,e,i){super(t,e,i)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=mr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};va.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new ya,Ma=class{constructor(t){this.manager=t!==void 0?t:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=new N,Bo=new nn,Bn=new N,zr=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oo,Bo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Oo,Bo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new N,Gu=new Lt,Vu=new Lt,Xe=class extends zr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Vu),e.subVectors(Vu,Gu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ur*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sa=class extends zr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Rs=-90,Cs=1,ks=class extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new Xe(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let o=new Xe(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let l=new Xe(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ba=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var rh="\\[\\]\\.:\\/",u0=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",d0="[^"+rh.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",oh),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),x0=new RegExp("^"+f0+p0+m0+g0+"$"),_0=["material","materials","bones","map"],wc=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=wc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aS=new Float32Array(1);var dh=class dh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};dh.prototype.isMatrix2=!0;var Ec=dh;function ah(n,t,e,i){let s=v0(i);switch(e){case Xc:return n*t;case qc:return n*t/s.components*s.byteLength;case Ia:return n*t/s.components*s.byteLength;case Ri:return n*t*2/s.components*s.byteLength;case La:return n*t*2/s.components*s.byteLength;case Yc:return n*t*3/s.components*s.byteLength;case On:return n*t*4/s.components*s.byteLength;case Da:return n*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Oa:return Math.max(n,16)*Math.max(t,8)/4;case Na:case Fa:return Math.max(n,8)*Math.max(t,8)/2;case Ba:case ka:case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case za:case qr:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sl:case rl:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case al:case ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $r:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v0(n){switch(n){case pn:case Hc:return{byteLength:1,components:1};case Vs:case Gc:case Fn:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case Nn:case Ra:case Un:return{byteLength:4,components:1};case Vc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function A0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
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
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#endif`,Eg=`uniform sampler2D dfgLUT;
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
}`,Tg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dx=`float getShadowMask() {
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
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform float backgroundBlurriness;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Ux=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,Zx=`#define PHONG
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
}`,Jx=`#define PHONG
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
}`,Kx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,t_=`#define TOON
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
}`,e_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:I0,alphatest_fragment:L0,alphatest_pars_fragment:D0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:k0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:Y0,color_fragment:q0,color_pars_fragment:$0,color_pars_vertex:Z0,color_vertex:J0,common:K0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:tg,emissivemap_fragment:eg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:lg,envmap_physical_pars_fragment:vg,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:dg,fog_pars_fragment:fg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:yg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:bg,lights_physical_fragment:wg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Tg,lights_fragment_maps:Ag,lights_fragment_end:Rg,lightprobes_pars_fragment:Cg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Dg,map_fragment:Ng,map_pars_fragment:Ug,map_particle_fragment:Fg,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:kg,morphinstance_vertex:zg,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:Yg,normal_pars_fragment:qg,normal_pars_vertex:$g,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:tx,opaque_fragment:ex,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:rx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:hx,shadowmap_vertex:ux,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:xx,specularmap_pars_fragment:_x,tonemapping_fragment:vx,tonemapping_pars_fragment:yx,transmission_fragment:Mx,transmission_pars_fragment:Sx,uv_pars_fragment:bx,uv_pars_vertex:wx,uv_vertex:Ex,worldpos_vertex:Tx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Lx,depth_vert:Dx,depth_frag:Nx,distance_vert:Ux,distance_frag:Fx,equirect_vert:Ox,equirect_frag:Bx,linedashed_vert:kx,linedashed_frag:zx,meshbasic_vert:Hx,meshbasic_frag:Gx,meshlambert_vert:Vx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:Yx,meshnormal_vert:qx,meshnormal_frag:$x,meshphong_vert:Zx,meshphong_frag:Jx,meshphysical_vert:Kx,meshphysical_frag:jx,meshtoon_vert:Qx,meshtoon_frag:t_,points_vert:e_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},Ut={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Wn={basic:{uniforms:Ke([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Ke([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Ke([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Ke([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Ke([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Ke([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Ke([Ut.points,Ut.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Ke([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Ke([Ut.common,Ut.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Ke([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Ke([Ut.sprite,Ut.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Ke([Ut.common,Ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Ke([Ut.lights,Ut.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Wn.physical={uniforms:Ke([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var ul={r:0,b:0,g:0},a_=new fe,of=new ne;of.set(-1,0,0,0,1,0,0,0,1);function l_(n,t,e,i,s,r){let o=new jt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=f(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),b=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,b){let y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new xe(new an(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:ds(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xe(new bi(2,2),new Je({name:"BackgroundMaterial",uniforms:ds(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,b){v.getRGB(ul,sh(n)),e.buffers.color.setClear(ul.r,ul.g,ul.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:_,dispose:m}}function c_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(I,F,H,P,B){let W=!1,z=d(I,P,H,F);r!==z&&(r=z,c(r.object)),W=f(I,P,H,B),W&&p(I,P,H,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(I,F,H,P),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function d(I,F,H,P){let B=P.wireframe===!0,W=i[F.id];W===void 0&&(W={},i[F.id]=W);let z=I.isInstancedMesh===!0?I.id:0,it=W[z];it===void 0&&(it={},W[z]=it);let V=it[H.id];V===void 0&&(V={},it[H.id]=V);let J=V[B];return J===void 0&&(J=u(l()),V[B]=J),J}function u(I){let F=[],H=[],P=[];for(let B=0;B<e;B++)F[B]=0,H[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,F,H,P){let B=r.attributes,W=F.attributes,z=0,it=H.getAttributes();for(let V in it)if(it[V].location>=0){let G=B[V],pt=W[V];if(pt===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),G===void 0||G.attribute!==pt||pt&&G.data!==pt.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function p(I,F,H,P){let B={},W=F.attributes,z=0,it=H.getAttributes();for(let V in it)if(it[V].location>=0){let G=W[V];G===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let pt={};pt.attribute=G,G&&G.data&&(pt.data=G.data),B[V]=pt,z++}r.attributes=B,r.attributesNum=z,r.index=P}function _(){let I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function g(I){m(I,0)}function m(I,F){let H=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;H[I]=1,P[I]===0&&(n.enableVertexAttribArray(I),P[I]=1),B[I]!==F&&(n.vertexAttribDivisor(I,F),B[I]=F)}function v(){let I=r.newAttributes,F=r.enabledAttributes;for(let H=0,P=F.length;H<P;H++)F[H]!==I[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function b(I,F,H,P,B,W,z){z===!0?n.vertexAttribIPointer(I,F,H,B,W):n.vertexAttribPointer(I,F,H,P,B,W)}function y(I,F,H,P){_();let B=P.attributes,W=H.getAttributes(),z=F.defaultAttributeValues;for(let it in W){let V=W[it];if(V.location>=0){let J=B[it];if(J===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let G=J.normalized,pt=J.itemSize,gt=t.get(J);if(gt===void 0)continue;let O=gt.buffer,ut=gt.type,At=gt.bytesPerElement,Ft=ut===n.INT||ut===n.UNSIGNED_INT||J.gpuType===Ra;if(J.isInterleavedBufferAttribute){let q=J.data,wt=q.isInterleavedBuffer===!0?q.stride:q.itemSize,Gt=J.offset;if(q.isInstancedInterleavedBuffer||q.isInstancedBufferAttribute){for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot,q.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)g(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,O);for(let Ot=0;Ot<V.locationSize;Ot++)b(V.location+Ot,pt/V.locationSize,ut,G,wt*At,(Gt+pt/V.locationSize*Ot)*At,Ft)}else{if(J.isInstancedBufferAttribute){for(let q=0;q<V.locationSize;q++)m(V.location+q,J.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let q=0;q<V.locationSize;q++)g(V.location+q);n.bindBuffer(n.ARRAY_BUFFER,O);for(let q=0;q<V.locationSize;q++)b(V.location+q,pt/V.locationSize,ut,G,pt*At,pt/V.locationSize*q*At,Ft)}}else if(z!==void 0){let G=z[it];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(V.location,G);break;case 3:n.vertexAttrib3fv(V.location,G);break;case 4:n.vertexAttrib4fv(V.location,G);break;default:n.vertexAttrib1fv(V.location,G)}}}}v()}function S(){R();for(let I in i){let F=i[I];for(let H in F){let P=F[H];for(let B in P){let W=P[B];for(let z in W)h(W[z].object),delete W[z];delete P[B]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let H in F){let P=F[H];for(let B in P){let W=P[B];for(let z in W)h(W[z].object),delete W[z];delete P[B]}}delete i[I.id]}function x(I){for(let F in i){let H=i[F];for(let P in H){let B=H[P];if(B[I.id]===void 0)continue;let W=B[I.id];for(let z in W)h(W[z].object),delete W[z];delete B[I.id]}}}function M(I){for(let F in i){let H=i[F],P=I.isInstancedMesh===!0?I.id:0,B=H[P];if(B!==void 0){for(let W in B){let z=B[W];for(let it in z)h(z[it].object),delete z[it];delete B[W]}delete H[P],Object.keys(H).length===0&&delete i[F]}}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function h_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==On&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==pn&&x!==Un&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:S,samples:E}}function d_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Dn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,b=v*4,y=m.clippingState||null;l.value=y,y=h(p,u,b,f);for(let S=0;S!==b;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==_;++b,y+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Kr=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:as});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=en),new ks(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Od=256,f_=3,p_=20,af=256,lf=16,m_=3,g_=new N,x_=new jt,fl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ks(1,10,null),this._boxMesh=new xe(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=g_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(x_));let g=new ks(i,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Od,eh(t))}_fromTexture(t,e){t.mapping===cs||t.mapping===Gs?this._setSize(t.image.length===0?Od:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Bd(t,!1,!1),i=Math.log2(t)-f_;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Bd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===cs||t.mapping===Gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=__(),this._integrationMaterial=v_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-m_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(af*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=y_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Bd(n,t,e){return new Kr(n,{minFilter:oi,generateMipmaps:t,type:Fn,colorSpace:gr,depthBuffer:e})}function jr(n,t,e){return new Je({name:n,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:Fe,blending:as,depthTest:!1,depthWrite:!1})}function __(){return jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${af}u

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
	`)}function v_(){return jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

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
	`)}function y_(){return jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${p_}
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
	`)}function kd(){return jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zd(){return jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function M_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ea||f===Ta)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Kr(p.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ea||f===Ta,_=f===cs||f===Gs;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new fl(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new fl(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ea?u.mapping=cs:f===Ta&&(u.mapping=Gs),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function S_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hr("WebGLRenderer: "+i+" extension not supported."),s}}}function b_(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let g in _)t.update(_[g],n.ARRAY_BUFFER)}function d(p){let _=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,b=g.count>=65535?br:Sr,y=new b(Math.ceil(v/3)*6,1),S=y.array;if(_!==null){let x=_.array;m=_.version;for(let M=0,R=0;M<v;M+=3){let C=x[M+0],I=x[M+1],F=x[M+2];S[R++]=C,S[R++]=I,S[R++]=I,S[R++]=F,S[R++]=F,S[R++]=C}}else{m=g.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,C=x+1,I=x+2;S[M++]=R,S[M++]=C,S[M++]=C,S[M++]=I,S[M++]=I,S[M++]=R}}y.version=m;let E=r.get(p);E&&t.remove(E),r.set(p,y)}function u(p){let _=r.get(p);if(_){let g=p.index;g!==null&&_.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function w_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function E_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function T_(n,t,e){let i=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=a.attributes.position.count*b,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*S*4*d),x=new yr(E,y,S,d);x.type=Un,x.needsUpdate=!0;let M=b*4;for(let C=0;C<d;C++){let I=g[C],F=m[C],H=v[C],P=y*S*4*C;for(let B=0;B<I.count;B++){let W=B*M;f===!0&&(s.fromBufferAttribute(I,B),E[P+W+0]=s.x,E[P+W+1]=s.y,E[P+W+2]=s.z,E[P+W+3]=0),p===!0&&(s.fromBufferAttribute(F,B),E[P+W+4]=s.x,E[P+W+5]=s.y,E[P+W+6]=s.z,E[P+W+7]=0),_===!0&&(s.fromBufferAttribute(H,B),E[P+W+8]=s.x,E[P+W+9]=s.y,E[P+W+10]=s.z,E[P+W+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Lt(y,S)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function A_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var R_={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function C_(n,t,e,i,s,r){let o=new dn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ee;h.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new de([0,2,0,0,2,0],2));let d=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xe(h,d),f=new Sa(-1,1,1,-1,0,1),p=null,_=null,g=!1,m,v=null,b=[],y=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(S,E)}},this.setEffects=function(S){b=S,y=b.length>0&&b[0].isRenderPass===!0;let E=o.width,x=o.height;b.length>0&&a===null&&(a=new dn(E,x,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new dn(E,x,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(R=>R.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new ri(E,x),r===!0&&(c.format=ai,c.type=hs)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let R=0;R<b.length;R++){let C=b[R];C.setSize&&C.setSize(E,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(S,E){if(g||S.toneMapping===Gn&&b.length===0)return!1;if(v=E,E!==null){let x=E.width,M=E.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Gn,!0},this.hasRenderPass=function(){return y},this.end=function(S,E){S.toneMapping=m,g=!0;let x=o,M=a;for(let R=0;R<b.length;R++){let C=b[R];C.enabled!==!1&&(C.render(S,M,x,E),C.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(p!==S.outputColorSpace||_!==S.toneMapping){p=S.outputColorSpace,_=S.toneMapping,d.defines={},ue.getTransfer(p)===ge&&(d.defines.SRGB_TRANSFER="");let R=R_[_];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var cf=new sn,hf=new ri(1,1),uf=new Tr(1),df=new yr,ff=new Qo,pf=new wr,Hd=[],Gd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Ys(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ml(n,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function P_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function N_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Xd.set(i),n.uniformMatrix2fv(this.addr,!1,Xd),Be(e,i)}}function U_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Wd.set(i),n.uniformMatrix3fv(this.addr,!1,Wd),Be(e,i)}}function F_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Vd.set(i),n.uniformMatrix4fv(this.addr,!1,Vd),Be(e,i)}}function O_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function k_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function H_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function G_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function V_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function W_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function gl(n){return n.version===0&&(n.compareFunction=Kc,n.needsUpdate=!0),n}function X_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=gl(hf):r=cf,e.setTexture2D(t||r,s)}function Y_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ff,s)}function q_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=gl(uf):r=pf,e.setTextureCube(t||r,s)}function $_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||df,s)}function Z_(n){switch(n){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return $_}}function J_(n,t){n.uniform1fv(this.addr,t)}function K_(n,t){let e=Ys(t,this.size,2);n.uniform2fv(this.addr,e)}function j_(n,t){let e=Ys(t,this.size,3);n.uniform3fv(this.addr,e)}function Q_(n,t){let e=Ys(t,this.size,4);n.uniform4fv(this.addr,e)}function tv(n,t){let e=Ys(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ev(n,t){let e=Ys(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nv(n,t){let e=Ys(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iv(n,t){n.uniform1iv(this.addr,t)}function sv(n,t){n.uniform2iv(this.addr,t)}function rv(n,t){n.uniform3iv(this.addr,t)}function ov(n,t){n.uniform4iv(this.addr,t)}function av(n,t){n.uniform1uiv(this.addr,t)}function lv(n,t){n.uniform2uiv(this.addr,t)}function cv(n,t){n.uniform3uiv(this.addr,t)}function hv(n,t){n.uniform4uiv(this.addr,t)}function uv(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=gl(hf):o=cf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function dv(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function fv(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=gl(uf):o=pf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function pv(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function mv(n){switch(n){case 5126:return J_;case 35664:return K_;case 35665:return j_;case 35666:return Q_;case 35674:return tv;case 35675:return ev;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}var mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}},gh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mv(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Yd(n,t){n.seq.push(t),n.map[t.id]=t}function gv(n,t,e){let i=n.name,s=i.length;for(fh.lastIndex=0;;){let r=fh.exec(i),o=fh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(e,c===void 0?new mh(a,n,t):new gh(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new xh(a),Yd(e,d)),e=d}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function qd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xv=37297,_v=0;function vv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var $d=new ne;function yv(n){ue._getMatrix($d,ue.workingColorSpace,n);let t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case xr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vv(n.getShaderSource(t),a)}else return r}function Mv(n,t){let e=yv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Sv={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Fc]:"ACESFilmic",[Bc]:"AgX",[kc]:"Neutral",[Oc]:"Custom"};function bv(n,t){let e=Sv[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new N;function wv(){ue.getLuminanceCoefficients(dl);let n=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function Tv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Av(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Jr(n){return n!==""}function Jd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(n){return n.replace(Rv,Cv)}function Cv(n,t){let e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return _h(e)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(n){return n.replace(Pv,Iv)}function Iv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Lv={[Hr]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Dv(n){return Lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[Gs]:"ENVMAP_MODE_REFRACTION"};function Uv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Nv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fv={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function Ov(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[n.combine]||"ENVMAP_BLENDING_NONE"}function Bv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Dv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Uv(e),d=Ov(e),u=Ev(e),f=Tv(r),p=s.createProgram(),_,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Jr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Jr).join(`
`),g.length>0&&(g+=`
`)):(_=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),g=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Gn?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Mv("linearToOutputTexel",e.outputColorSpace),wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=_h(o),o=Jd(o,e),o=Kd(o,e),a=_h(a),a=Jd(a,e),a=Kd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+_+o,b=m+g+a,y=qd(s,s.VERTEX_SHADER,v),S=qd(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(C){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(S)||"",P=I.trim(),B=F.trim(),W=H.trim(),z=!0,it=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,S);else{let V=Zd(s,y,"vertex"),J=Zd(s,S,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+V+`
`+J)}else P!==""?Qt("WebGLProgram: Program Info Log:",P):(B===""||W==="")&&(it=!1);it&&(C.diagnostics={runnable:z,programLog:P,vertexShader:{log:B,prefix:_},fragmentShader:{log:W,prefix:g}})}s.deleteShader(y),s.deleteShader(S),x=new Xs(s,p),M=Av(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,xv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_v++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=S,this}var kv=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yh(t),e.set(t,i)),i}},yh=class{constructor(t){this.id=kv++,this.code=t,this.usedTimes=0}};function zv(n){return n===Ri||n===qr||n===$r}function Hv(n,t,e,i,s,r){let o=new Mr,a=new vh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,R,C,I,F){let H=C.fog,P=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||B,W),it=u[x.type],V=i.precision;x.precision!==null&&(V=i.getMaxPrecision(x.precision),V!==x.precision&&Qt("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));let J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=J!==void 0?J.length:0,pt=0;P.morphAttributes.position!==void 0&&(pt=1),P.morphAttributes.normal!==void 0&&(pt=2),P.morphAttributes.color!==void 0&&(pt=3);let gt,O,ut,At;if(it){let Tt=Wn[it];gt=Tt.vertexShader,O=Tt.fragmentShader}else{gt=x.vertexShader,O=x.fragmentShader;let Tt=a.getVertexShaderStage(x),Zt=a.getFragmentShaderStage(x);a.update(x,Tt,Zt),ut=Tt.id,At=Zt.id}let Ft=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),wt=I.isInstancedMesh===!0,Gt=I.isBatchedMesh===!0,Ot=!!x.map,Jt=!!x.matcap,te=!!z,nt=te&&z.isPMREMTexture===!0,_t=!!x.aoMap,yt=!!x.lightMap,dt=!!x.bumpMap&&x.wireframe===!1,ot=!!x.normalMap,K=!!x.displacementMap,ct=!!x.emissiveMap,zt=!!x.metalnessMap,qt=!!x.roughnessMap,Kt=x.anisotropy>0,L=x.clearcoat>0,at=x.diffuseRoughness>0,Rt=x.dispersion>0,Wt=x.retroreflectivity>0,rt=x.iridescence>0,ie=x.sheen>0,Nt=x.transmission>0,Bt=Kt&&!!x.anisotropyMap,A=L&&!!x.clearcoatMap,w=L&&!!x.clearcoatNormalMap,k=L&&!!x.clearcoatRoughnessMap,ft=at&&!!x.diffuseRoughnessMap,et=rt&&!!x.iridescenceMap,mt=rt&&!!x.iridescenceThicknessMap,Mt=ie&&!!x.sheenColorMap,j=ie&&!!x.sheenRoughnessMap,Q=!!x.specularMap,Et=!!x.specularColorMap,D=!!x.specularIntensityMap,tt=Nt&&!!x.transmissionMap,Z=Nt&&!!x.thicknessMap,bt=!!x.gradientMap,St=!!x.alphaMap,lt=x.alphaTest>0,ht=!!x.alphaHash,Dt=!!x.extensions,st=Gn;x.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(st=n.toneMapping);let Ct=nt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ht={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:gt,fragmentShader:O,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:At,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Gt,batchingColor:Gt&&I._colorsTexture!==null,instancing:wt,instancingColor:wt&&I.instanceColor!==null,instancingMorph:wt&&I.morphTexture!==null,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Jt,envMap:te,envMapMode:te&&z.mapping,envMapPMREM:nt,envMapMaxLod:nt?Ct.length-1:null,envMapSize:nt?Ct[0].width:null,aoMap:_t,lightMap:yt,bumpMap:dt,normalMap:ot,displacementMap:K,emissiveMap:ct,normalMapObjectSpace:ot&&x.normalMapType===md,normalMapTangentSpace:ot&&x.normalMapType===$c,packedNormalMap:ot&&x.normalMapType===$c&&zv(x.normalMap.format),metalnessMap:zt,roughnessMap:qt,anisotropy:Kt,anisotropyMap:Bt,clearcoat:L,clearcoatMap:A,clearcoatNormalMap:w,clearcoatRoughnessMap:k,diffuseRoughness:at,diffuseRoughnessMap:ft,dispersion:Rt,retroreflection:Wt,iridescence:rt,iridescenceMap:et,iridescenceThicknessMap:mt,sheen:ie,sheenColorMap:Mt,sheenRoughnessMap:j,specularMap:Q,specularColorMap:Et,specularIntensityMap:D,transmission:Nt,transmissionMap:tt,thicknessMap:Z,gradientMap:bt,opaque:x.transparent===!1&&x.blending===Hs&&x.alphaToCoverage===!1,alphaMap:St,alphaTest:lt,alphaHash:ht,combine:x.combine,mapUv:Ot&&f(x.map.channel),aoMapUv:_t&&f(x.aoMap.channel),lightMapUv:yt&&f(x.lightMap.channel),bumpMapUv:dt&&f(x.bumpMap.channel),normalMapUv:ot&&f(x.normalMap.channel),displacementMapUv:K&&f(x.displacementMap.channel),emissiveMapUv:ct&&f(x.emissiveMap.channel),metalnessMapUv:zt&&f(x.metalnessMap.channel),roughnessMapUv:qt&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(x.sheenRoughnessMap.channel),specularMapUv:Q&&f(x.specularMap.channel),specularColorMapUv:Et&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:tt&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:St&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ot||Kt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Ot||St),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:q,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:pt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:ct&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Fe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Dt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&x.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(M,x),m(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=u[x.type],R;if(M){let C=Wn[M];R=Nd.clone(C.uniforms)}else R=x.uniforms;return R}function b(x,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new Bv(n,M,x,s),c.push(R),h.set(M,R)),R}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function Gv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Vv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function tf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ef(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,_,g,m,v){v.reversedDepth===!0&&(g=-g);let b=a(u,f,p,_,g,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(u,f,p,_,g,m){let v=a(u,f,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Vv),i.length>1&&i.sort(f||tf),s.length>1&&s.sort(f||tf)}function d(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Wv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ef,n.set(i,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Xv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new jt};break;case"SpotLight":e={position:new N,direction:new N,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Yv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var qv=0;function $v(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Zv(n){let t=new Xv,e=Yv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new fe,o=new fe;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,b=0,y=0,S=0,E=0,x=0,M=0,R=0,C=0;c.sort($v);for(let F=0,H=c.length;F<H;F++){let P=c[F],B=P.color,W=P.intensity,z=P.distance,it=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ri?it=P.shadow.map.texture:it=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*W,d+=B.g*W,u+=B.b*W;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],W);C++}else if(P.isSunLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=G,i.sunShadowMap[p]=it;let pt=J.getViewportCount();for(let gt=0;gt<pt;gt++)i.sunShadowMatrix[_+gt]=J.getMatrix(gt),i.sunShadowCascade[_+gt]=J._cascadeData[gt];_+=pt,p++}i.sun[f]=V,f++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[g]=G,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=V,g++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(W),V.distance=z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[v]=V;let J=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,J.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=J.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=it,x++}v++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(B).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=V,b++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=it,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=V,m++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(W),V.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[y]=V,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=b,i.point.length=m,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=C,i.version=qv++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function nf(n){let t=new Zv(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nf(n),t.set(s,[a])):r>=o.length?(a=new nf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
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
}`,Qv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],ty=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],sf=new fe,Zr=new N,ph=new N;function ey(n,t,e){let i=new is,s=new Lt,r=new Lt,o=new Ce,a=new ha,l=new ua,c={},h=e.maxTextureSize,d={[Ai]:Fe,[Fe]:Ai,[wn]:wn},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Kv,fragmentShader:jv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let m=this.type;this.render=function(E,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Yu&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hr);let R=n.getRenderTarget(),C=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(as),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=m!==this.type;H&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=E.length;P<B;P++){let W=E[P],z=W.shadow;if(z===void 0){Qt("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let it=z.getFrameExtents();s.multiply(it),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,z.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===zs){if(W.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new dn(s.x,s.y,{format:Ri,type:Fn,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new ri(s.x,s.y,Un),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=si,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge}else W.isPointLight?(z.map=new Kr(s.x),z.map.depthTexture=new Tr(s.x,Nn)):(z.map=new dn(s.x,s.y),z.map.depthTexture=new ri(s.x,s.y,Nn)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=si,this.type===Hr?(z.map.depthTexture.compareFunction=V?Jc:Zc,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();W.isPointLight!==!0&&z.updateMatrices(W,M);let G=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let pt=0;pt<J;pt++){let gt=z.getCamera(pt);if(W.isPointLight){let O=z.camera,ut=z.matrix,At=W.distance||O.far;At!==O.far&&(O.far=At,O.updateProjectionMatrix()),Zr.setFromMatrixPosition(W.matrixWorld),O.position.copy(Zr),ph.copy(O.position),ph.add(Qv[pt]),O.up.copy(ty[pt]),O.lookAt(ph),O.updateMatrixWorld(),ut.makeTranslation(-Zr.x,-Zr.y,-Zr.z),sf.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),z._frustum.setFromProjectionMatrix(sf,O.coordinateSystem,O.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,pt),n.clear();else{pt===0&&(n.setRenderTarget(z.map),n.clear());let O=z.getViewport(pt);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),F.viewport(o)}i=z.getFrustum(pt),y(x,M,gt,W,G,this.type)}z.isPointLightShadow!==!0&&this.type===zs&&v(z,M),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(R,C,I)};function v(E,x){let M=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new dn(s.x,s.y,{format:Ri,type:Fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(x,null,M,f,_,null)}function b(E,x,M,R){let C=null,I=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=M.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=C.uuid,H=x.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let B=P[H];B===void 0&&(B=C.clone(),P[H]=B,x.addEventListener("dispose",S)),C=B}if(C.visible=x.visible,C.wireframe=x.wireframe,R===zs?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=M}return C}function y(E,x,M,R,C,I){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===zs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=t.update(E),B=E.material;if(Array.isArray(B)){let W=P.groups;for(let z=0,it=W.length;z<it;z++){let V=W[z],J=B[V.materialIndex];if(J&&J.visible){let G=b(E,J,R,I);E.onBeforeShadow(n,E,x,M,P,G,V),n.renderBufferDirect(M,null,P,G,E,V),E.onAfterShadow(n,E,x,M,P,G,V)}}}else if(B.visible){let W=b(E,B,R,I);E.onBeforeShadow(n,E,x,M,P,W,null),n.renderBufferDirect(M,null,P,W,E,null),E.onAfterShadow(n,E,x,M,P,W,null)}}let H=E.children;for(let P=0,B=H.length;P<B;P++)y(H[P],x,M,R,C,I)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let R=c[M],C=E.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function ny(n,t){function e(){let D=!1,tt=new Ce,Z=null,bt=new Ce(0,0,0,0);return{setMask:function(St){Z!==St&&!D&&(n.colorMask(St,St,St,St),Z=St)},setLocked:function(St){D=St},setClear:function(St,lt,ht,Dt,st){st===!0&&(St*=Dt,lt*=Dt,ht*=Dt),tt.set(St,lt,ht,Dt),bt.equals(tt)===!1&&(n.clearColor(St,lt,ht,Dt),bt.copy(tt))},reset:function(){D=!1,Z=null,bt.set(-1,0,0,0)}}}function i(){let D=!1,tt=!1,Z=null,bt=null,St=null;return{setReversed:function(lt){if(tt!==lt){let ht=t.get("EXT_clip_control");lt?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),tt=lt;let Dt=St;St=null,this.setClear(Dt)}},getReversed:function(){return tt},setTest:function(lt){lt?q(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!D&&(n.depthMask(lt),Z=lt)},setFunc:function(lt){if(tt&&(lt=Td[lt]),bt!==lt){switch(lt){case Ho:n.depthFunc(n.NEVER);break;case Go:n.depthFunc(n.ALWAYS);break;case Vo:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case Wo:n.depthFunc(n.EQUAL);break;case Xo:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=lt}},setLocked:function(lt){D=lt},setClear:function(lt){St!==lt&&(St=lt,tt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){D=!1,Z=null,bt=null,St=null,tt=!1}}}function s(){let D=!1,tt=null,Z=null,bt=null,St=null,lt=null,ht=null,Dt=null,st=null;return{setTest:function(Ct){D||(Ct?q(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Ct){tt!==Ct&&!D&&(n.stencilMask(Ct),tt=Ct)},setFunc:function(Ct,Ht,Tt){(Z!==Ct||bt!==Ht||St!==Tt)&&(n.stencilFunc(Ct,Ht,Tt),Z=Ct,bt=Ht,St=Tt)},setOp:function(Ct,Ht,Tt){(lt!==Ct||ht!==Ht||Dt!==Tt)&&(n.stencilOp(Ct,Ht,Tt),lt=Ct,ht=Ht,Dt=Tt)},setLocked:function(Ct){D=Ct},setClear:function(Ct){st!==Ct&&(n.clearStencil(Ct),st=Ct)},reset:function(){D=!1,tt=null,Z=null,bt=null,St=null,lt=null,ht=null,Dt=null,st=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,b=null,y=null,S=null,E=null,x=null,M=new jt(0,0,0),R=0,C=!1,I=null,F=null,H=null,P=null,B=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,it=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=it>=1):V.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=it>=2);let J=null,G={},pt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),O=new Ce().fromArray(pt),ut=new Ce().fromArray(gt);function At(D,tt,Z,bt){let St=new Uint8Array(4),lt=n.createTexture();n.bindTexture(D,lt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<Z;ht++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(tt+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return lt}let Ft={};Ft[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),Ft[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ft[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(n.DEPTH_TEST),o.setFunc(Is),dt(!1),ot(Tc),q(n.CULL_FACE),_t(as);function q(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function wt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Gt(D,tt){return u[D]!==tt?(n.bindFramebuffer(D,tt),u[D]=tt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=tt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ot(D,tt){let Z=p,bt=!1;if(D){Z=f.get(tt),Z===void 0&&(Z=[],f.set(tt,Z));let St=D.textures;if(Z.length!==St.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,ht=St.length;lt<ht;lt++)Z[lt]=n.COLOR_ATTACHMENT0+lt;Z.length=St.length,bt=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,bt=!0);bt&&n.drawBuffers(Z)}function Jt(D){return _!==D?(n.useProgram(D),_=D,!0):!1}let te={[ls]:n.FUNC_ADD,[$u]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};te[Ju]=n.MIN,te[Ku]=n.MAX;let nt={[ju]:n.ZERO,[Qu]:n.ONE,[td]:n.SRC_COLOR,[Pc]:n.SRC_ALPHA,[od]:n.SRC_ALPHA_SATURATE,[sd]:n.DST_COLOR,[nd]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[Ic]:n.ONE_MINUS_SRC_ALPHA,[rd]:n.ONE_MINUS_DST_COLOR,[id]:n.ONE_MINUS_DST_ALPHA,[ad]:n.CONSTANT_COLOR,[ld]:n.ONE_MINUS_CONSTANT_COLOR,[cd]:n.CONSTANT_ALPHA,[hd]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(D,tt,Z,bt,St,lt,ht,Dt,st,Ct){if(D===as){g===!0&&(wt(n.BLEND),g=!1);return}if(g===!1&&(q(n.BLEND),g=!0),D!==qu){if(D!==m||Ct!==C){if((v!==ls||S!==ls)&&(n.blendEquation(n.FUNC_ADD),v=ls,S=ls),Ct)switch(D){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",D);break}else switch(D){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",D);break}b=null,y=null,E=null,x=null,M.set(0,0,0),R=0,m=D,C=Ct}return}St=St||tt,lt=lt||Z,ht=ht||bt,(tt!==v||St!==S)&&(n.blendEquationSeparate(te[tt],te[St]),v=tt,S=St),(Z!==b||bt!==y||lt!==E||ht!==x)&&(n.blendFuncSeparate(nt[Z],nt[bt],nt[lt],nt[ht]),b=Z,y=bt,E=lt,x=ht),(Dt.equals(M)===!1||st!==R)&&(n.blendColor(Dt.r,Dt.g,Dt.b,st),M.copy(Dt),R=st),m=D,C=!1}function yt(D,tt){D.side===wn?wt(n.CULL_FACE):q(n.CULL_FACE);let Z=D.side===Fe;tt&&(Z=!Z),dt(Z),D.blending===Hs&&D.transparent===!1?_t(as):_t(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let bt=D.stencilWrite;a.setTest(bt),bt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(D){I!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),I=D)}function ot(D){D!==Wu?(q(n.CULL_FACE),D!==F&&(D===Tc?n.cullFace(n.BACK):D===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),F=D}function K(D){D!==H&&(z&&n.lineWidth(D),H=D)}function ct(D,tt,Z){D?(q(n.POLYGON_OFFSET_FILL),(P!==tt||B!==Z)&&(P=tt,B=Z,o.getReversed()&&(tt=-tt,Z=-Z),n.polygonOffset(tt,Z))):wt(n.POLYGON_OFFSET_FILL)}function zt(D){D?q(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function qt(D){D===void 0&&(D=n.TEXTURE0+W-1),J!==D&&(n.activeTexture(D),J=D)}function Kt(D,tt,Z){Z===void 0&&(J===null?Z=n.TEXTURE0+W-1:Z=J);let bt=G[Z];bt===void 0&&(bt={type:void 0,texture:void 0},G[Z]=bt),(bt.type!==D||bt.texture!==tt)&&(J!==Z&&(n.activeTexture(Z),J=Z),n.bindTexture(D,tt||Ft[D]),bt.type=D,bt.texture=tt)}function L(){let D=G[J];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(D){ee("WebGLState:",D)}}function Rt(){try{n.compressedTexImage3D(...arguments)}catch(D){ee("WebGLState:",D)}}function Wt(){try{n.texSubImage2D(...arguments)}catch(D){ee("WebGLState:",D)}}function rt(){try{n.texSubImage3D(...arguments)}catch(D){ee("WebGLState:",D)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(D){ee("WebGLState:",D)}}function Nt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){ee("WebGLState:",D)}}function Bt(){try{n.texStorage2D(...arguments)}catch(D){ee("WebGLState:",D)}}function A(){try{n.texStorage3D(...arguments)}catch(D){ee("WebGLState:",D)}}function w(){try{n.texImage2D(...arguments)}catch(D){ee("WebGLState:",D)}}function k(){try{n.texImage3D(...arguments)}catch(D){ee("WebGLState:",D)}}function ft(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function et(D,tt){d[D]!==tt&&(n.pixelStorei(D,tt),d[D]=tt)}function mt(D){O.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),O.copy(D))}function Mt(D){ut.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ut.copy(D))}function j(D,tt){let Z=c.get(tt);Z===void 0&&(Z=new WeakMap,c.set(tt,Z));let bt=Z.get(D);bt===void 0&&(bt=n.getUniformBlockIndex(tt,D.name),n.uniformBlockBinding(tt,bt,bt),Z.set(D,bt))}function Q(D,tt,Z){let St=c.get(tt).get(D);l[St]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,St,Z),l[St]=Z)}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,G={},u={},l={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,b=null,y=null,S=null,E=null,x=null,M=new jt(0,0,0),R=0,C=!1,I=null,F=null,H=null,P=null,B=null,O.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:wt,bindFramebuffer:Gt,drawBuffers:Ot,useProgram:Jt,setBlending:_t,setMaterial:yt,setFlipSided:dt,setCullFace:ot,setLineWidth:K,setPolygonOffset:ct,setScissorTest:zt,activeTexture:qt,bindTexture:Kt,unbindTexture:L,compressedTexImage2D:at,compressedTexImage3D:Rt,texImage2D:w,texImage3D:k,pixelStorei:et,getParameter:ft,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Bt,texStorage3D:A,texSubImage2D:Wt,texSubImage3D:rt,compressedTexSubImage2D:ie,compressedTexSubImage3D:Nt,scissor:mt,viewport:Mt,reset:Et}}function iy(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return g?new OffscreenCanvas(A,w):vr("canvas")}function v(A,w,k){let ft=1,et=Bt(A);if((et.width>k||et.height>k)&&(ft=k/Math.max(et.width,et.height)),ft<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let mt=Math.floor(ft*et.width),Mt=Math.floor(ft*et.height);u===void 0&&(u=m(mt,Mt));let j=w?m(mt,Mt):u;return j.width=mt,j.height=Mt,j.getContext("2d").drawImage(A,0,0,mt,Mt),Qt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+mt+"x"+Mt+")."),j}else return"data"in A&&Qt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function b(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,w,k,ft,et,mt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Mt;ft&&(Mt=t.get("EXT_texture_norm16"),Mt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=w;if(w===n.RED&&(k===n.FLOAT&&(j=n.R32F),k===n.HALF_FLOAT&&(j=n.R16F),k===n.UNSIGNED_BYTE&&(j=n.R8),k===n.UNSIGNED_SHORT&&Mt&&(j=Mt.R16_EXT),k===n.SHORT&&Mt&&(j=Mt.R16_SNORM_EXT)),w===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.R8UI),k===n.UNSIGNED_SHORT&&(j=n.R16UI),k===n.UNSIGNED_INT&&(j=n.R32UI),k===n.BYTE&&(j=n.R8I),k===n.SHORT&&(j=n.R16I),k===n.INT&&(j=n.R32I)),w===n.RG&&(k===n.FLOAT&&(j=n.RG32F),k===n.HALF_FLOAT&&(j=n.RG16F),k===n.UNSIGNED_BYTE&&(j=n.RG8),k===n.UNSIGNED_SHORT&&Mt&&(j=Mt.RG16_EXT),k===n.SHORT&&Mt&&(j=Mt.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RG8UI),k===n.UNSIGNED_SHORT&&(j=n.RG16UI),k===n.UNSIGNED_INT&&(j=n.RG32UI),k===n.BYTE&&(j=n.RG8I),k===n.SHORT&&(j=n.RG16I),k===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGB8UI),k===n.UNSIGNED_SHORT&&(j=n.RGB16UI),k===n.UNSIGNED_INT&&(j=n.RGB32UI),k===n.BYTE&&(j=n.RGB8I),k===n.SHORT&&(j=n.RGB16I),k===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),k===n.UNSIGNED_INT&&(j=n.RGBA32UI),k===n.BYTE&&(j=n.RGBA8I),k===n.SHORT&&(j=n.RGBA16I),k===n.INT&&(j=n.RGBA32I)),w===n.RGB&&(k===n.UNSIGNED_SHORT&&Mt&&(j=Mt.RGB16_EXT),k===n.SHORT&&Mt&&(j=Mt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),w===n.RGBA){let Q=mt?xr:ue.getTransfer(et);k===n.FLOAT&&(j=n.RGBA32F),k===n.HALF_FLOAT&&(j=n.RGBA16F),k===n.UNSIGNED_BYTE&&(j=Q===ge?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&Mt&&(j=Mt.RGBA16_EXT),k===n.SHORT&&Mt&&(j=Mt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(A,w){let k;return A?w===null||w===Nn||w===hs?k=n.DEPTH24_STENCIL8:w===Un?k=n.DEPTH32F_STENCIL8:w===Vs&&(k=n.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nn||w===hs?k=n.DEPTH_COMPONENT24:w===Un?k=n.DEPTH_COMPONENT32F:w===Vs&&(k=n.DEPTH_COMPONENT16),k}function M(A,w){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function R(A){let w=new WeakRef(A);i.get(A).__ref=w,p.add(w),_.register(A,w,w)}function C(A){let w=i.get(A).__ref;w!==void 0&&(p.delete(w),_.unregister(w))}function I(A){H(A.target)}function F(A){P(A.target)}function H(A){A.removeEventListener("dispose",I),C(A),W(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",F),C(A),it(A)}function B(){for(let A of p){let w=A.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):H(w))}p.clear(),d.clear()}function W(A){let w=i.get(A);if(w.__webglInit===void 0)return;let k=A.source,ft=f.get(k);if(ft){let et=ft[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&z(A),Object.keys(ft).length===0&&f.delete(k)}i.remove(A)}function z(A){let w=i.get(A);n.deleteTexture(w.__webglTexture);let k=A.source,ft=f.get(k);delete ft[w.__cacheKey],o.memory.textures--}function it(A){let w=i.get(A);w.__depthDisposeCallback&&w.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&H(k),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let mt=0;mt<w.__webglFramebuffer[et].length;mt++)n.deleteFramebuffer(w.__webglFramebuffer[et][mt]);else n.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)n.deleteFramebuffer(w.__webglFramebuffer[et]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ft=A.textures;for(let et=0,mt=ft.length;et<mt;et++){let Mt=i.get(ft[et]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(ft[et])}i.remove(A)}let V=0;function J(){V=0}function G(){return V}function pt(A){V=A}function gt(){let A=V;return A>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function O(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.mipmapsAutoUpdate),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function ut(A,w){let k=i.get(A);if(A.isVideoTexture&&ie(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let ft=A.image;if(ft===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(k,A,w);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+w)}function At(A,w){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){yt(k,A,w);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+w)}function Ft(A,w){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){yt(k,A,w);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+w)}function q(A,w){let k=i.get(A);if(A.version>0&&k.__version!==A.version){dt(k,A,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+w)}let wt={[$o]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},Gt={[Ge]:n.NEAREST,[fd]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},Ot={[xd]:n.NEVER,[Kc]:n.ALWAYS,[_d]:n.LESS,[Zc]:n.LEQUAL,[vd]:n.EQUAL,[Jc]:n.GEQUAL,[yd]:n.GREATER,[Md]:n.NOTEQUAL};function Jt(A,w){if(w.type===Un&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===Aa||w.magFilter===Gr||w.magFilter===oi||w.minFilter===en||w.minFilter===Aa||w.minFilter===Gr||w.minFilter===oi)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,wt[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,wt[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,wt[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Gt[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Gt[w.minFilter]),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ot[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ge||w.minFilter!==Gr&&w.minFilter!==oi||w.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(A,w){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",I),R(w));let ft=w.source,et=f.get(ft);et===void 0&&(et={},f.set(ft,et));let mt=O(w);if(mt!==A.__cacheKey){et[mt]===void 0&&(et[mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[mt].usedTimes++;let Mt=et[A.__cacheKey];Mt!==void 0&&(et[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&z(w)),A.__cacheKey=mt,A.__webglTexture=et[mt].texture}return k}function nt(A,w,k){return Math.floor(Math.floor(A/k)/w)}function _t(A,w,k,ft){let mt=A.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,k,ft,w.data);else{mt.sort((D,tt)=>D.start-tt.start);let Mt=0;for(let D=1;D<mt.length;D++){let tt=mt[Mt],Z=mt[D],bt=tt.start+tt.count,St=nt(Z.start,w.width,4),lt=nt(tt.start,w.width,4);Z.start<=bt+1&&St===lt&&nt(Z.start+Z.count-1,w.width,4)===St?tt.count=Math.max(tt.count,Z.start+Z.count-tt.start):(++Mt,mt[Mt]=Z)}mt.length=Mt+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let D=0,tt=mt.length;D<tt;D++){let Z=mt[D],bt=Math.floor(Z.start/4),St=Math.ceil(Z.count/4),lt=bt%w.width,ht=Math.floor(bt/w.width),Dt=St,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,ht),e.texSubImage2D(n.TEXTURE_2D,0,lt,ht,Dt,st,k,ft,w.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function yt(A,w,k){let ft=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ft=n.TEXTURE_3D);let et=te(A,w),mt=w.source;e.bindTexture(ft,A.__webglTexture,n.TEXTURE0+k);let Mt=i.get(mt);if(mt.version!==Mt.__version||et===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let st=ue.getPrimaries(ue.workingColorSpace),Ct=w.colorSpace===li?null:ue.getPrimaries(w.colorSpace),Ht=w.colorSpace===li||st===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let Q=v(w.image,!1,s.maxTextureSize);Q=Nt(w,Q);let Et=r.convert(w.format,w.colorSpace),D=r.convert(w.type),tt=E(w.internalFormat,Et,D,w.normalized,w.colorSpace,w.isVideoTexture);Jt(ft,w);let Z,bt=w.mipmaps,St=w.isVideoTexture!==!0,lt=Mt.__version===void 0||et===!0,ht=mt.dataReady,Dt=M(w,Q);if(w.isDepthTexture)tt=x(w.format===ai,w.type),lt&&(St?e.texStorage2D(n.TEXTURE_2D,1,tt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,tt,Q.width,Q.height,0,Et,D,null));else if(w.isDataTexture)if(bt.length>0){St&&lt&&e.texStorage2D(n.TEXTURE_2D,Dt,tt,bt[0].width,bt[0].height);for(let st=0,Ct=bt.length;st<Ct;st++)Z=bt[st],St?ht&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Z.width,Z.height,Et,D,Z.data):e.texImage2D(n.TEXTURE_2D,st,tt,Z.width,Z.height,0,Et,D,Z.data);w.generateMipmaps=!1}else St?(lt&&e.texStorage2D(n.TEXTURE_2D,Dt,tt,Q.width,Q.height),ht&&_t(w,Q,Et,D)):e.texImage2D(n.TEXTURE_2D,0,tt,Q.width,Q.height,0,Et,D,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){St&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,tt,bt[0].width,bt[0].height,Q.depth);for(let st=0,Ct=bt.length;st<Ct;st++)if(Z=bt[st],w.format!==On)if(Et!==null)if(St){if(ht)if(w.layerUpdates.size>0){let Ht=ah(Z.width,Z.height,w.format,w.type);for(let Tt of w.layerUpdates){let Zt=Z.data.subarray(Tt*Ht/Z.data.BYTES_PER_ELEMENT,(Tt+1)*Ht/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Tt,Z.width,Z.height,1,Et,Zt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Z.width,Z.height,Q.depth,Et,Z.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,tt,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Z.width,Z.height,Q.depth,Et,D,Z.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,tt,Z.width,Z.height,Q.depth,0,Et,D,Z.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{St&&lt&&e.texStorage2D(n.TEXTURE_2D,Dt,tt,bt[0].width,bt[0].height);for(let st=0,Ct=bt.length;st<Ct;st++)Z=bt[st],w.format!==On?Et!==null?St?ht&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Z.width,Z.height,Et,Z.data):e.compressedTexImage2D(n.TEXTURE_2D,st,tt,Z.width,Z.height,0,Z.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?ht&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Z.width,Z.height,Et,D,Z.data):e.texImage2D(n.TEXTURE_2D,st,tt,Z.width,Z.height,0,Et,D,Z.data)}else if(w.isDataArrayTexture)if(St){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,tt,Q.width,Q.height,Q.depth),ht)if(w.layerUpdates.size>0){let st=ah(Q.width,Q.height,w.format,w.type);for(let Ct of w.layerUpdates){let Ht=Q.data.subarray(Ct*st/Q.data.BYTES_PER_ELEMENT,(Ct+1)*st/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,Q.width,Q.height,1,Et,D,Ht)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Et,D,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Q.width,Q.height,Q.depth,0,Et,D,Q.data);else if(w.isData3DTexture)St?(lt&&e.texStorage3D(n.TEXTURE_3D,Dt,tt,Q.width,Q.height,Q.depth),ht&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Et,D,Q.data)):e.texImage3D(n.TEXTURE_3D,0,tt,Q.width,Q.height,Q.depth,0,Et,D,Q.data);else if(w.isFramebufferTexture){if(lt)if(St)e.texStorage2D(n.TEXTURE_2D,Dt,tt,Q.width,Q.height);else{let st=Q.width,Ct=Q.height;for(let Ht=0;Ht<Dt;Ht++)e.texImage2D(n.TEXTURE_2D,Ht,tt,st,Ct,0,Et,D,null),st>>=1,Ct>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Q.parentNode!==st){st.appendChild(Q),d.add(w),st.onpaint=Ct=>{let Ht=Ct.changedElements;for(let Tt of d)Ht.includes(Tt.image)&&(Tt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Ht=n.RGBA,Tt=n.RGBA,Zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ht,Tt,Zt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(bt.length>0){if(St&&lt){let st=Bt(bt[0]);e.texStorage2D(n.TEXTURE_2D,Dt,tt,st.width,st.height)}for(let st=0,Ct=bt.length;st<Ct;st++)Z=bt[st],St?ht&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Et,D,Z):e.texImage2D(n.TEXTURE_2D,st,tt,Et,D,Z);w.generateMipmaps=!1}else if(St){if(lt){let st=Bt(Q);e.texStorage2D(n.TEXTURE_2D,Dt,tt,st.width,st.height)}ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,D,Q)}else e.texImage2D(n.TEXTURE_2D,0,tt,Et,D,Q);b(w)&&w.mipmapsAutoUpdate===!0&&y(ft),Mt.__version=mt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function dt(A,w,k){if(w.image.length!==6)return;let ft=te(A,w),et=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let mt=i.get(et);if(et.version!==mt.__version||ft===!0){e.activeTexture(n.TEXTURE0+k);let Mt=ue.getPrimaries(ue.workingColorSpace),j=w.colorSpace===li?null:ue.getPrimaries(w.colorSpace),Q=w.colorSpace===li||Mt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let Et=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let Tt=0;Tt<6;Tt++)!Et&&!D?tt[Tt]=v(w.image[Tt],!0,s.maxCubemapSize):tt[Tt]=D?w.image[Tt].image:w.image[Tt],tt[Tt]=Nt(w,tt[Tt]);let Z=tt[0],bt=r.convert(w.format,w.colorSpace),St=r.convert(w.type),lt=E(w.internalFormat,bt,St,w.normalized,w.colorSpace),ht=w.isVideoTexture!==!0,Dt=mt.__version===void 0||ft===!0,st=et.dataReady,Ct=M(w,Z);Jt(n.TEXTURE_CUBE_MAP,w);let Ht;if(w.isDepthTexture){if(lt=x(w.format===ai,w.type),Dt)if(ht)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,lt,Z.width,Z.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,lt,Z.width,Z.height,0,bt,St,null)}else if(Et){ht&&Dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,lt,Z.width,Z.height);for(let Tt=0;Tt<6;Tt++){Ht=tt[Tt].mipmaps;for(let Zt=0;Zt<Ht.length;Zt++){let oe=Ht[Zt];w.format!==On?bt!==null?ht?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt,0,0,oe.width,oe.height,bt,oe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt,lt,oe.width,oe.height,0,oe.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt,0,0,oe.width,oe.height,bt,St,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt,lt,oe.width,oe.height,0,bt,St,oe.data)}}}else{if(Ht=w.mipmaps,ht&&Dt){Ht.length>0&&Ct++;let Tt=Bt(tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,lt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(D){ht?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,tt[Tt].width,tt[Tt].height,bt,St,tt[Tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,lt,tt[Tt].width,tt[Tt].height,0,bt,St,tt[Tt].data);for(let Zt=0;Zt<Ht.length;Zt++){let ve=Ht[Zt].image[Tt].image;ht?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt+1,0,0,ve.width,ve.height,bt,St,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt+1,lt,ve.width,ve.height,0,bt,St,ve.data)}}else{ht?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,bt,St,tt[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,lt,bt,St,tt[Tt]);for(let Zt=0;Zt<Ht.length;Zt++){let oe=Ht[Zt];ht?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt+1,0,0,bt,St,oe.image[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Zt+1,lt,bt,St,oe.image[Tt])}}}b(w)&&w.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),mt.__version=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ot(A,w,k,ft,et,mt){let Mt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),Q=E(k.internalFormat,Mt,j,k.normalized,k.colorSpace),Et=i.get(w),D=i.get(k);if(D.__renderTarget=w,!Et.__hasExternalTextures){let tt=Math.max(1,w.width>>mt),Z=Math.max(1,w.height>>mt);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,mt,Q,tt,Z,w.depth,0,Mt,j,null):e.texImage2D(et,mt,Q,tt,Z,0,Mt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),rt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,et,D.__webglTexture,0,Wt(w)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,et,D.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function K(A,w,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer){let ft=w.depthTexture,et=ft&&ft.isDepthTexture?ft.type:null,mt=x(w.stencilBuffer,et),Mt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;rt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(w),mt,w.width,w.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(w),mt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,A)}else{let ft=w.textures;for(let et=0;et<ft.length;et++){let mt=ft[et],Mt=r.convert(mt.format,mt.colorSpace),j=r.convert(mt.type),Q=E(mt.internalFormat,Mt,j,mt.normalized,mt.colorSpace);rt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(w),Q,w.width,w.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(w),Q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(A,w,k){let ft=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=i.get(w.depthTexture);et.__renderTarget=w;let mt=ft?w.depthTexture.image[0]:w.depthTexture.image;(!et.__webglTexture||mt.width!==w.width||mt.height!==w.height)&&(mt.width=w.width,mt.height=w.height,w.depthTexture.needsUpdate=!0),ft?q(w.depthTexture,0):ut(w.depthTexture,0);let Mt=et.__webglTexture,j=Wt(w),Q=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Et=w.depthTexture.format===ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===si)rt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Et,Q,Mt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,Et,Q,Mt,0);else if(w.depthTexture.format===ai)rt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Et,Q,Mt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,Et,Q,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(A){let w=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let ft=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ft){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ft.removeEventListener("dispose",et)};ft.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=ft}if(A.depthTexture&&!w.__autoAllocateDepthBuffer)if(k)for(let ft=0;ft<6;ft++)ct(w.__webglFramebuffer[ft],A,ft);else A.texture.mipmaps.length>0?ct(w.__webglFramebuffer[0],A,0):ct(w.__webglFramebuffer,A,0);else if(k){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]===void 0)w.__webglDepthbuffer[ft]=n.createRenderbuffer(),K(w.__webglDepthbuffer[ft],A,!1);else{let et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,mt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),K(w.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(A,w,k){let ft=i.get(A);w!==void 0&&ot(ft.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&zt(A)}function Kt(A){let w=A.texture,k=i.get(A),ft=i.get(w);A.addEventListener("dispose",F),R(A);let et=A.textures,mt=A.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=w.version,o.memory.textures++),mt){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(w.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let Q=0;Q<w.mipmaps.length;Q++)k.__webglFramebuffer[j][Q]=n.createFramebuffer()}else k.__webglFramebuffer[j]=n.createFramebuffer()}else{if(w.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<w.mipmaps.length;j++)k.__webglFramebuffer[j]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let j=0,Q=et.length;j<Q;j++){let Et=i.get(et[j]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&rt(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<et.length;j++){let Q=et[j];k.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let Et=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),tt=E(Q.internalFormat,Et,D,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),Z=Wt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,tt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,k.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),K(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,w);for(let j=0;j<6;j++)if(w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)ot(k.__webglFramebuffer[j][Q],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else ot(k.__webglFramebuffer[j],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);b(w)?y(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let j=0,Q=et.length;j<Q;j++){let Et=et[j],D=i.get(Et),tt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(tt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,D.__webglTexture),Jt(tt,Et),ot(k.__webglFramebuffer,A,Et,n.COLOR_ATTACHMENT0+j,tt,0),b(Et)&&y(tt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,ft.__webglTexture),Jt(j,w),w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)ot(k.__webglFramebuffer[Q],A,w,n.COLOR_ATTACHMENT0,j,Q);else ot(k.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,j,0);b(w)?y(j):w.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&zt(A)}function L(A){let w=A.textures;for(let k=0,ft=w.length;k<ft;k++){let et=w[k];if(b(et)&&et.mipmapsAutoUpdate===!0){let mt=S(A),Mt=i.get(et).__webglTexture;e.bindTexture(mt,Mt),y(mt),e.unbindTexture()}}}let at=[];function Rt(A){if(A.samples>0){if(rt(A)===!1){let w=A.textures,k=A.width,ft=A.height,et=n.COLOR_BUFFER_BIT,mt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(A),j=w.length>1;if(j)for(let Et=0;Et<w.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Et=0;Et<w.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let D=i.get(w[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,k,ft,0,0,k,ft,et,n.NEAREST),l===!0&&(at.length=0,at.push(n.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&at.push(mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let Et=0;Et<w.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let D=i.get(w[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,D,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Wt(A){return Math.min(s.maxSamples,A.samples)}function rt(A){let w=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ie(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Nt(A,w){let k=A.colorSpace,ft=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==gr&&k!==li&&(ue.getTransfer(k)===ge?(ft!==On||et!==pn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",k)),w}function Bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=gt,this.resetTextureUnits=J,this.getTextureUnits=G,this.setTextureUnits=pt,this.setTexture2D=ut,this.setTexture2DArray=At,this.setTexture3D=Ft,this.setTextureCube=q,this.rebindTextures=qt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=rt,this.dispose=B}function sy(n,t){function e(i,s=li){let r,o=ue.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===Ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hc)return n.BYTE;if(i===Gc)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===Ra)return n.INT;if(i===Nn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Xc)return n.ALPHA;if(i===Yc)return n.RGB;if(i===On)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===ai)return n.DEPTH_STENCIL;if(i===qc)return n.RED;if(i===Ia)return n.RED_INTEGER;if(i===Ri)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===Yr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Ua||i===Fa||i===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===ka||i===za||i===Ha||i===Ga||i===qr||i===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ba||i===ka)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ha)return r.COMPRESSED_R11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qr)return r.COMPRESSED_RG11_EAC;if(i===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wa||i===Xa||i===Ya||i===qa||i===$a||i===Za||i===Ja||i===Ka||i===ja||i===Qa||i===tl||i===el||i===nl||i===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$a)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===rl||i===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sl)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ll||i===$r||i===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Je({vertexShader:ry,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends zn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Mh,m={},v=e.getContextAttributes(),b=null,y=null,S=[],E=[],x=new Lt,M=null,R=null,C=new Xe;C.viewport=new Ce;let I=new Xe;I.viewport=new Ce;let F=[C,I],H=new ba,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let ut=S[O];return ut===void 0&&(ut=new Us,S[O]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(O){let ut=S[O];return ut===void 0&&(ut=new Us,S[O]=ut),ut.getGripSpace()},this.getHand=function(O){let ut=S[O];return ut===void 0&&(ut=new Us,S[O]=ut),ut.getHandSpace()};function W(O){let ut=E.indexOf(O.inputSource);if(ut===-1)return;let At=S[ut];At!==void 0&&(At.update(O.inputSource,O.frame,c||o),At.dispatchEvent({type:O.type,data:O.inputSource}))}function z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",it);for(let O=0;O<S.length;O++){let ut=E[O];ut!==null&&(E[O]=null,S[O].disconnect(ut))}P=null,B=null,g.reset();for(let O in m)delete m[O];if(t.setRenderTarget(b),f=null,u=null,d=null,s=null,y=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),R!==null){let O=R.camera;O.fov=R.fov,O.zoom=R.zoom,O.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",z),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ft=null,q=null;v.depth&&(q=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=v.stencil?ai:si,Ft=v.stencil?hs:Nn);let wt={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new dn(u.textureWidth,u.textureHeight,{format:On,type:pn,depthTexture:new ri(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new dn(f.framebufferWidth,f.framebufferHeight,{format:On,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(O){for(let ut=0;ut<O.removed.length;ut++){let At=O.removed[ut],Ft=E.indexOf(At);Ft>=0&&(E[Ft]=null,S[Ft].disconnect(At))}for(let ut=0;ut<O.added.length;ut++){let At=O.added[ut],Ft=E.indexOf(At);if(Ft===-1){for(let wt=0;wt<S.length;wt++)if(wt>=E.length){E.push(At),Ft=wt;break}else if(E[wt]===null){E[wt]=At,Ft=wt;break}if(Ft===-1)break}let q=S[Ft];q&&q.connect(At)}}function V(O,ut){ut===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(ut.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let ut=O.near,At=O.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(At=g.depthFar)),H.near=I.near=C.near=ut,H.far=I.far=C.far=At,(P!==H.near||B!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,B=H.far),H.layers.mask=O.layers.mask|6,C.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Ft=O.parent,q=H.cameras;V(H,Ft);for(let wt=0;wt<q.length;wt++)V(q[wt],Ft);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&O.isPerspectiveCamera&&(R={camera:O,fov:O.fov,zoom:O.zoom}),J(O,H,Ft)};function J(O,ut,At){At===null?O.matrix.copy(ut.matrixWorld):(O.matrix.copy(At.matrixWorld),O.matrix.invert(),O.matrix.multiply(ut.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(ut.projectionMatrix),O.projectionMatrixInverse.copy(ut.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ds*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(O){return m[O]};let G=null;function pt(O,ut){if(h=ut.getViewerPose(c||o),p=ut,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ft=!1;At.length!==H.cameras.length&&(H.cameras.length=0,Ft=!0);for(let Ot=0;Ot<At.length;Ot++){let Jt=At[Ot],te=null;if(f!==null)te=f.getViewport(Jt);else{let _t=d.getViewSubImage(u,Jt);te=_t.viewport,Ot===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let nt=F[Ot];nt===void 0&&(nt=new Xe,nt.layers.enable(Ot),nt.viewport=new Ce,F[Ot]=nt),nt.matrix.fromArray(Jt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Jt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(H.matrix.copy(nt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ft===!0&&H.cameras.push(nt)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Ot=d.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,s.renderState)}if(q&&q.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Ot=0;Ot<At.length;Ot++){let Jt=At[Ot].camera;if(Jt){let te=m[Jt];te||(te=new Ar,m[Jt]=te);let nt=d.getCameraImage(Jt);te.sourceTexture=nt}}}}for(let At=0;At<S.length;At++){let Ft=E[At],q=S[At];Ft!==null&&q!==void 0&&q.update(Ft,ut,c||o)}G&&G(O,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),p=null}let gt=new rf;gt.setAnimationLoop(pt),this.setAnimationLoop=function(O){G=O},this.dispose=function(){}}},ay=new fe,mf=new ne;mf.set(-1,0,0,0,1,0,0,0,1);function ly(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,sh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),b=v.envMap,y=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cy(n,t,e,i){let s={},r={};function o(v,b){let y=b.program;i.uniformBlockBinding(v,y,s[v.id])}function a(v,b){let y=s[v.id];y===void 0&&(p(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let S=b.program;i.updateUBOMapping(v,S);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let b=n.createBuffer(),y=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],y=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,x=y.length;E<x;E++){let M=y[E];if(Array.isArray(M))for(let R=0,C=M.length;R<C;R++)h(M[R],E,R,S);else h(M,E,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,y,S){if(u(v,b,y,S)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let C=x[R],I=_(C,!0);d(C,v.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,v.__data)}}function d(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function u(v,b,y,S){let E=v.value,x=b+"_"+y;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let M=S[x],R=!1;for(let C=0;C<E.length;C++)f(E[C],M,C)===!0&&(R=!0);return R}return f(E,S,x)}function f(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let S=b[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function p(v){let b=v.uniforms,y=0,S=16;for(let x=0,M=b.length;x<M;x++){let R=Array.isArray(b[x])?b[x]:[b[x]];for(let C=0,I=R.length;C<I;C++){let F=R[C],H=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(b[x])||Array.isArray(F.value),B=y;for(let z=0,it=H.length;z<it;z++){let V=H[z],J=_(V,P),G=y%S,pt=G%J.boundary,gt=G+pt;y+=pt,gt!==0&&S-gt<J.storage&&(y+=S-gt),z===0&&(B=y),y+=J.storage}let W=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new W((y-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let E=y%S;return E>0&&(y+=S-E),v.__size=y,v.__cache={},this}function _(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let b=v.target;b.removeEventListener("dispose",g),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}var hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function uy(){return Vn===null&&(Vn=new ea(hy,16,16,Ri,Fn),Vn.name="DFG_LUT",Vn.minFilter=en,Vn.magFilter=en,Vn.wrapS=kn,Vn.wrapT=kn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var pl=class{constructor(t={}){let{canvas:e=bd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=f,g=new Set([Da,La,Ia]),m=new Set([pn,Nn,Vs,hs,Ca,Pa]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],M=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,H=null,P=null,B=null;this._outputColorSpace=We;let W=0,z=0,it=null,V=-1,J=null,G=new Ce,pt=new Ce,gt=null,O=new jt(0),ut=0,At=e.width,Ft=e.height,q=1,wt=null,Gt=null,Ot=new Ce(0,0,At,Ft),Jt=new Ce(0,0,At,Ft),te=!1,nt=new is,_t=new na,yt=!1,dt=!1,ot=new fe,K=new N,ct=new Ce,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Kt(){return it===null?q:1}let L=i;function at(T,U){return e.getContext(T,U)}let Rt,Wt,rt,ie,Nt,Bt,A,w,k,ft,et,mt,Mt,j,Q,Et,D,tt,Z,bt,St,lt,ht;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),L===null){let U="webgl2";if(L=at(U,T),L===null)throw at(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(T){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ee("WebGLRenderer: "+T.message),T}function Dt(){Rt=new S_(L),Rt.init(),St=new sy(L,Rt),Wt=new u_(L,Rt,t,St),rt=new ny(L,Rt),Wt.reversedDepthBuffer&&u&&rt.buffers.depth.setReversed(!0),H=L.createFramebuffer(),P=L.createFramebuffer(),B=L.createFramebuffer(),ie=new E_(L),Nt=new Gv,Bt=new iy(L,Rt,rt,Nt,Wt,St,ie),A=new M_(C),w=new A0(L),lt=new c_(L,w),k=new b_(L,w,ie,lt),ft=new A_(L,k,w,lt,ie),tt=new T_(L,Wt,Bt),Q=new d_(Nt),et=new Hv(C,A,Rt,Wt,lt,Q),mt=new ly(C,Nt),Mt=new Wv,j=new Jv(Rt),D=new l_(C,A,rt,ft,p,l),Et=new ey(C,ft,Wt),ht=new cy(L,ie,Wt,rt),Z=new h_(L,Rt,ie),bt=new w_(L,Rt,ie),ie.programs=et.programs,C.capabilities=Wt,C.extensions=Rt,C.properties=Nt,C.renderLists=Mt,C.shadowMap=Et,C.state=rt,C.info=ie}_!==pn&&(R=new C_(_,e.width,e.height,a,s,r));let st=new Sh(C,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(At,Ft,!1))},this.getSize=function(T){return T.set(At,Ft)},this.setSize=function(T,U,$=!0){if(st.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=T,Ft=U,e.width=Math.floor(T*q),e.height=Math.floor(U*q),$===!0&&(e.style.width=T+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(At*q,Ft*q).floor()},this.setDrawingBufferSize=function(T,U,$){At=T,Ft=U,q=$,e.width=Math.floor(T*$),e.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===pn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(Ot)},this.setViewport=function(T,U,$,X){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,U,$,X),rt.viewport(G.copy(Ot).multiplyScalar(Kt()).round())},this.getScissor=function(T){return T.copy(Jt)},this.setScissor=function(T,U,$,X){T.isVector4?Jt.set(T.x,T.y,T.z,T.w):Jt.set(T,U,$,X),rt.scissor(pt.copy(Jt).multiplyScalar(Kt()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){rt.setScissorTest(te=T)},this.setOpaqueSort=function(T){wt=T},this.setTransparentSort=function(T){Gt=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let X=0;if(T){let Y=!1;if(it!==null){let It=it.texture.format;Y=g.has(It)}if(Y){let It=it.texture.type,Vt=m.has(It),Pt=D.getClearColor(),kt=D.getClearAlpha(),$t=Pt.r,se=Pt.g,ce=Pt.b;Vt?(v[0]=$t,v[1]=se,v[2]=ce,v[3]=kt,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=$t,b[1]=se,b[2]=ce,b[3]=kt,L.clearBufferiv(L.COLOR,0,b))}else X|=L.COLOR_BUFFER_BIT}U&&(X|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),D.dispose(),Mt.dispose(),j.dispose(),Bt.dispose(),Nt.dispose(),A.dispose(),ft.dispose(),k.dispose(),lt.dispose(),ht.dispose(),et.dispose(),st.dispose(),st.removeEventListener("sessionstart",Qe),st.removeEventListener("sessionend",we),_n.stop()};function Ct(T){T.preventDefault(),Qc("WebGLRenderer: Context Lost."),I=!0}function Ht(){Qc("WebGLRenderer: Context Restored."),I=!1;let T=ie.autoReset,U=Et.enabled,$=Et.autoUpdate,X=Et.needsUpdate,Y=Et.type;Dt(),ie.autoReset=T,Et.enabled=U,Et.autoUpdate=$,Et.needsUpdate=X,Et.type=Y}function Tt(T){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){let U=T.target;U.removeEventListener("dispose",Zt),oe(U)}function oe(T){ve(T),Nt.remove(T)}function ve(T){let U=Nt.get(T).programs;U!==void 0&&(U.forEach(function($){et.releaseProgram($)}),T.isShaderMaterial&&et.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,X,Y,It){U===null&&(U=zt);let Vt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Pt=Jp(T,U,$,X,Y);rt.setMaterial(X,Vt);let kt=$.index,$t=1;if(X.wireframe===!0){if(kt=k.getWireframeAttribute($),kt===void 0)return;$t=2}let se=$.drawRange,ce=$.attributes.position,Xt=se.start*$t,he=(se.start+se.count)*$t;It!==null&&(Xt=Math.max(Xt,It.start*$t),he=Math.min(he,(It.start+It.count)*$t)),kt!==null?(Xt=Math.max(Xt,0),he=Math.min(he,kt.count)):ce!=null&&(Xt=Math.max(Xt,0),he=Math.min(he,ce.count));let De=he-Xt;if(De<0||De===1/0)return;lt.setup(Y,X,Pt,$,kt);let ye,_e=Z;if(kt!==null&&(ye=w.get(kt),_e=bt,_e.setIndex(ye)),Y.isMesh)X.wireframe===!0?(rt.setLineWidth(X.wireframeLinewidth*Kt()),_e.setMode(L.LINES)):_e.setMode(L.TRIANGLES);else if(Y.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),rt.setLineWidth(Ye*Kt()),Y.isLineSegments?_e.setMode(L.LINES):Y.isLineLoop?_e.setMode(L.LINE_LOOP):_e.setMode(L.LINE_STRIP)}else Y.isPoints?_e.setMode(L.POINTS):Y.isSprite&&_e.setMode(L.TRIANGLES);if(Y.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ye=Y._multiDrawStarts,Yt=Y._multiDrawCounts,tn=Y._multiDrawCount,me=kt?w.get(kt).bytesPerElement:1,qi=Nt.get(X).currentProgram.getUniforms();for(let qe=0;qe<tn;qe++)qi.setValue(L,"_gl_DrawID",qe),_e.render(Ye[qe]/me,Yt[qe])}else if(Y.isInstancedMesh)_e.renderInstances(Xt,De,Y.count);else if($.isInstancedBufferGeometry){let Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Yt=Math.min($.instanceCount,Ye);_e.renderInstances(Xt,De,Yt)}else _e.render(Xt,De)};function Pe(T,U,$,X){F!==null&&T.isNodeMaterial&&F.setObject(X,T),yt===!0&&Q.setState(T,$,!1),T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=Fe,T.needsUpdate=!0,sr(T,U,X),T.side=Ai,T.needsUpdate=!0,sr(T,U,X),T.side=wn):sr(T,U,X)}this.compile=function(T,U,$=null){$===null&&($=T),F!==null&&F.renderStart(T,U,$),E=j.get($),E.init(U),M.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),dt=this.localClippingEnabled,yt=Q.init(this.clippingPlanes,dt),yt===!0&&Q.setGlobalState(this.clippingPlanes,U),F!==null&&Et.render(E.state.shadowsArray,$,U);let X=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let It=Y.material;if(It)if(Array.isArray(It))for(let Vt=0;Vt<It.length;Vt++){let Pt=It[Vt];Pe(Pt,$,U,Y),X.add(Pt)}else Pe(It,$,U,Y),X.add(It)}),E=M.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(T,U,$=null){let X=this.compile(T,U,$);return new Promise(Y=>{function It(){if(X.forEach(function(Vt){let kt=Nt.get(Vt).currentProgram;(kt===void 0||kt.isReady())&&X.delete(Vt)}),X.size===0){Y(T);return}setTimeout(It,10)}Rt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ie=null;function Rn(T){Ie&&Ie(T)}function Qe(){_n.stop()}function we(){_n.start()}let _n=new rf;_n.setAnimationLoop(Rn),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(T){Ie=T,st.setAnimationLoop(T),T===null?_n.stop():_n.start()},st.addEventListener("sessionstart",Qe),st.addEventListener("sessionend",we),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(T,U);let $=st.enabled===!0&&st.isPresenting===!0,X=R!==null&&(it===null||$)&&R.begin(C,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,it),E=j.get(T,M.length),E.init(U),E.state.textureUnits=Bt.getTextureUnits(),M.push(E),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?_t.setFromArrayCamera(U):nt.setFromProjectionMatrix(ot,yn,U.reversedDepth),dt=this.localClippingEnabled,yt=Q.init(this.clippingPlanes,dt),S=Mt.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Vt=C.xr.getDepthSensingMesh();Vt!==null&&pi(Vt,U,-1/0,C.sortObjects)}pi(T,U,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(wt,Gt),qt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,qt&&D.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),yt===!0&&Q.beginShadows();let Y=E.state.shadowsArray;if(Et.render(Y,T,U),yt===!0&&Q.endShadows(),(X&&R.hasRenderPass())===!1){let Vt=S.opaque,Pt=S.transmissive;if(E.setupLights(),U.isArrayCamera){let kt=U.cameras;if(Pt.length>0)for(let $t=0,se=kt.length;$t<se;$t++){let ce=kt[$t];Wi(Vt,Pt,T,ce)}qt&&D.render(T);for(let $t=0,se=kt.length;$t<se;$t++){let ce=kt[$t];Jn(S,T,ce,ce.viewport)}}else Pt.length>0&&Wi(Vt,Pt,T,U),qt&&D.render(T),Jn(S,T,U)}it!==null&&z===0&&(Bt.updateMultisampleRenderTarget(it),Bt.updateRenderTargetMipmap(it)),X&&R.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),lt.resetDefaultState(),V=-1,J=null,M.pop(),M.length>0?(E=M[M.length-1],Bt.setTextureUnits(E.state.textureUnits),yt===!0&&Q.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,F!==null&&F.renderEnd()};function pi(T,U,$,X){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Vt=U.isArrayCamera?_t:nt;if(!T.frustumCulled||T.intersectsFrustum(Vt)){X&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);let Pt=ft.update(T),kt=T.material;kt.visible&&S.push(T,Pt,kt,$,ct.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Vt=U.isArrayCamera?_t:nt;if(!T.frustumCulled||T.intersectsFrustum(Vt)){let Pt=ft.update(T),kt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ct.copy(Pt.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(kt)){let $t=Pt.groups;for(let se=0,ce=$t.length;se<ce;se++){let Xt=$t[se],he=kt[Xt.materialIndex];he&&he.visible&&S.push(T,Pt,he,$,ct.z,Xt,U)}}else kt.visible&&S.push(T,Pt,kt,$,ct.z,null,U)}}}let It=T.children;for(let Vt=0,Pt=It.length;Vt<Pt;Vt++)pi(It[Vt],U,$,X)}function Jn(T,U,$,X){let{opaque:Y,transmissive:It,transparent:Vt}=T;E.setupLightsView($),yt===!0&&Q.setGlobalState(C.clippingPlanes,$),X&&rt.viewport(G.copy(X)),Y.length>0&&Xi(Y,U,$),It.length>0&&Xi(It,U,$),Vt.length>0&&Xi(Vt,U,$),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Wi(T,U,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Xt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:Xt?Fn:pn,minFilter:oi,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let It=E.state.transmissionRenderTarget[X.id],Vt=X.viewport||G;It.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);let Pt=C.getRenderTarget(),kt=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(O),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),qt&&D.render($);let se=C.toneMapping;C.toneMapping=Gn;let ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),yt===!0&&Q.setGlobalState(C.clippingPlanes,X),Xi(T,$,X),Bt.updateMultisampleRenderTarget(It),Bt.updateRenderTargetMipmap(It),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let he=0,De=U.length;he<De;he++){let ye=U[he],{object:_e,geometry:Ye,material:Yt,group:tn}=ye;if(Yt.side===wn&&_e.layers.test(X.layers)){let me=Yt.side;Yt.side=Fe,Yt.needsUpdate=!0,ir(_e,$,X,Ye,Yt,tn),Yt.side=me,Yt.needsUpdate=!0,Xt=!0}}Xt===!0&&(Bt.updateMultisampleRenderTarget(It),Bt.updateRenderTargetMipmap(It))}C.setRenderTarget(Pt,kt,$t),C.setClearColor(O,ut),ce!==void 0&&(X.viewport=ce),C.toneMapping=se}function Xi(T,U,$){let X=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,It=T.length;Y<It;Y++){let Vt=T[Y],{object:Pt,geometry:kt,group:$t}=Vt,se=Vt.material;se.allowOverride===!0&&X!==null&&(se=X),Pt.layers.test($.layers)&&ir(Pt,U,$,kt,se,$t)}}function ir(T,U,$,X,Y,It){F!==null&&Y.isNodeMaterial&&F.setObject(T,Y),T.onBeforeRender(C,U,$,X,Y,It),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(C,U,$,X,T,It),Y.transparent===!0&&Y.side===wn&&Y.forceSinglePass===!1?(Y.side=Fe,Y.needsUpdate=!0,C.renderBufferDirect($,U,X,Y,T,It),Y.side=Ai,Y.needsUpdate=!0,C.renderBufferDirect($,U,X,Y,T,It),Y.side=wn):C.renderBufferDirect($,U,X,Y,T,It),T.onAfterRender(C,U,$,X,Y,It)}function Yi(T){let U=0;for(let $ of T)$.texture!==null&&U++;return U}function sr(T,U,$){U.isScene!==!0&&(U=zt);let X=Nt.get(T),Y=E.state.lights,It=E.state.shadowsArray,Vt=Y.state.version,Pt=et.getParameters(T,Y.state,It,U,$,E.state.lightProbeGridArray),kt=et.getProgramCacheKey(Pt),$t=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=A.get(T.envMap||X.environment,se),X.envMapRotation=X.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",Zt),$t=new Map,X.programs=$t,X.programVariants=new Map);let ce=$t.get(kt);if(ce!==void 0){if(X.currentProgram===ce&&X.lightsStateVersion===Vt)return fu(T,Pt),ce}else Pt.uniforms=et.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,$,Pt),T.onBeforeCompile(Pt,C),ce=et.acquireProgram(Pt,kt),$t.set(kt,ce),X.uniforms=Pt.uniforms;let Xt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=Q.uniform),fu(T,Pt),X.needsLights=jp(T),X.lightsStateVersion=Vt,X.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.sunLights.value=Y.state.sun,Xt.sunLightShadows.value=Y.state.sunShadow,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Xt.sunShadowCascade.value=Y.state.sunShadowCascade,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Yi(E.state.lightProbeGridArray),X.currentProgram=ce,X.uniformsList=null,ce}function Zp(T,U,$,X,Y){let It=Nt.get(T),Vt=It.currentProgram.id+","+X+","+Y,Pt=It.programVariants.get(Vt);return Pt===void 0?(Pt=sr(T,U,$),It.programVariants.set(Vt,Pt)):(It.currentProgram=Pt,It.uniformsList=null,It.outputColorSpace=X,It.toneMapping=Y),Pt}function du(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Xs.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function fu(T,U){let $=Nt.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Jp(T,U,$,X,Y){U.isScene!==!0&&(U=zt),Bt.resetTextureUnits();let It=U.fog,Vt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,Pt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ue.workingColorSpace,kt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,$t=A.get(X.envMap||Vt,kt),se=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ce=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,De=!!$.morphAttributes.color,ye=Gn;X.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=C.toneMapping);let _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ye=_e!==void 0?_e.length:0,Yt=Nt.get(X),tn=E.state.lights;if(yt===!0&&(dt===!0||T!==J)){let Te=T===J&&X.id===V;Q.setState(X,T,Te)}let me=!1,qi=!1;X.version===Yt.__version?Yt.needsLights&&Yt.lightsStateVersion!==tn.state.version||Y.isBatchedMesh&&Yt.batching===!1||!Y.isBatchedMesh&&Yt.batching===!0||Y.isBatchedMesh&&Yt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Yt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Yt.instancing===!1||!Y.isInstancedMesh&&Yt.instancing===!0||Y.isSkinnedMesh&&Yt.skinning===!1||!Y.isSkinnedMesh&&Yt.skinning===!0||Y.isInstancedMesh&&Yt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Yt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Yt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Yt.instancingMorph===!1&&Y.morphTexture!==null||Yt.envMap!==$t||X.fog===!0&&Yt.fog!==It||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Q.numPlanes||Yt.numIntersection!==Q.numIntersection)||Yt.vertexAlphas!==se||Yt.vertexTangents!==ce||Yt.morphTargets!==Xt||Yt.morphNormals!==he||Yt.morphColors!==De||Yt.morphTargetsCount!==Ye||Yt.numLightProbeGrids!==Yi(E.state.lightProbeGridArray)?me=!0:(Yt.outputColorSpace!==Pt||Yt.toneMapping!==ye)&&(qi=!0):(me=!0,Yt.__version=X.version);let qe=Yt.currentProgram;(me===!0||qi===!0)&&(qe=qi===!0?Zp(X,U,Y,Pt,ye):sr(X,U,Y),F&&X.isNodeMaterial&&F.onUpdateProgram(X,qe,Yt));let go=!1,mi=!1,$i=!1,pe=qe.getUniforms(),Ve=Yt.uniforms;if(rt.useProgram(qe.program)&&(go=!0,mi=!0,$i=!0),X.id!==V&&(V=X.id,mi=!0),go||J!==T){rt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pe.setValue(L,"projectionMatrix",T.projectionMatrix),pe.setValue(L,"viewMatrix",T.matrixWorldInverse);let ze=pe.map.cameraPosition;ze!==void 0&&ze.setValue(L,K.setFromMatrixPosition(T.matrixWorld)),Wt.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,mi=!0,$i=!0)}if(Yt.needsLights&&(tn.state.sunShadowMap.length>0&&pe.setValue(L,"sunShadowMap",tn.state.sunShadowMap,Bt),tn.state.directionalShadowMap.length>0&&pe.setValue(L,"directionalShadowMap",tn.state.directionalShadowMap,Bt),tn.state.spotShadowMap.length>0&&pe.setValue(L,"spotShadowMap",tn.state.spotShadowMap,Bt),tn.state.pointShadowMap.length>0&&pe.setValue(L,"pointShadowMap",tn.state.pointShadowMap,Bt)),Y.isSkinnedMesh){pe.setOptional(L,Y,"bindMatrix"),pe.setOptional(L,Y,"bindMatrixInverse");let Te=Y.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),pe.setValue(L,"boneTexture",Te.boneTexture,Bt))}Y.isBatchedMesh&&(pe.setOptional(L,Y,"batchingTexture"),pe.setValue(L,"batchingTexture",Y._matricesTexture,Bt),pe.setOptional(L,Y,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",Y._indirectTexture,Bt),pe.setOptional(L,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",Y._colorsTexture,Bt));let Cn=$.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&tt.update(Y,$,qe),(mi||Yt.receiveShadow!==Y.receiveShadow)&&(Yt.receiveShadow=Y.receiveShadow,pe.setValue(L,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(Ve.envMapIntensity.value=U.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=uy()),mi){if(pe.setValue(L,"toneMappingExposure",C.toneMappingExposure),Yt.needsLights&&Kp(Ve,$i),It&&X.fog===!0&&mt.refreshFogUniforms(Ve,It),mt.refreshMaterialUniforms(Ve,X,q,Ft,E.state.transmissionRenderTarget[T.id]),Yt.needsLights&&Yt.numLightProbeGrids>0){let Te=y,ze=0;for(let Kn of E.state.lightProbeGridArray)Kn.texture!==null&&(Te.textures[ze]=Kn.texture,Te.min[ze]=Kn.boundingBox.min,Te.max[ze]=Kn.boundingBox.max,Te.resolution[ze]=Kn.resolution,ze++);for(let Kn in Te)Te[Kn].length=ze;Ve.probesSH.value=Te.textures,Ve.probesMin.value=Te.min,Ve.probesMax.value=Te.max,Ve.probesResolution.value=Te.resolution}Xs.upload(L,du(Yt),Ve,Bt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Xs.upload(L,du(Yt),Ve,Bt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(L,"center",Y.center),pe.setValue(L,"modelViewMatrix",Y.modelViewMatrix),pe.setValue(L,"normalMatrix",Y.normalMatrix),pe.setValue(L,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Te=X.uniformsGroups;for(let ze=0,Kn=Te.length;ze<Kn;ze++){let mu=Te[ze];ht.update(mu,qe),ht.bind(mu,qe)}}return qe}function Kp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function jp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,U,$){let X=Nt.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Nt.get(T.texture).__webglTexture=U,Nt.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let $=Nt.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){it=T,W=U,z=$;let X=null,Y=!1,It=!1;if(T){let Pt=Nt.get(T);if(Pt.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(L.FRAMEBUFFER,Pt.__webglFramebuffer),G.copy(T.viewport),pt.copy(T.scissor),gt=T.scissorTest,rt.viewport(G),rt.scissor(pt),rt.setScissorTest(gt),V=-1;return}else if(Pt.__webglFramebuffer===void 0)Bt.setupRenderTarget(T);else if(Pt.__hasExternalTextures)Bt.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let se=T.depthTexture;if(Pt.__boundDepthTexture!==se){if(se!==null&&Nt.has(se)&&(T.width!==se.image.width||T.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(T)}}let kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(It=!0);let $t=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($t[U])?X=$t[U][$]:X=$t[U],Y=!0):T.samples>0&&Bt.useMultisampledRTT(T)===!1?X=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray($t)?X=$t[$]:X=$t,G.copy(T.viewport),pt.copy(T.scissor),gt=T.scissorTest}else G.copy(Ot).multiplyScalar(q).floor(),pt.copy(Jt).multiplyScalar(q).floor(),gt=te;if($!==0&&(X=H),rt.bindFramebuffer(L.FRAMEBUFFER,X)&&rt.drawBuffers(T,X),rt.viewport(G),rt.scissor(pt),rt.setScissorTest(gt),Y){let Pt=Nt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,$)}else if(It){let Pt=U;for(let kt=0;kt<T.textures.length;kt++){let $t=Nt.get(T.textures[kt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+kt,$t.__webglTexture,$,Pt)}}else if(T!==null&&$!==0){let Pt=Nt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,$)}V=-1};function pu(T){let U=Nt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Wt.textureFormatReadable(T.format),U.__typeReadable=Wt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,X,Y,It,Vt,Pt=0){if(!(T&&T.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt],Array.isArray(kt)&&(kt=kt[0])),kt){rt.bindFramebuffer(L.FRAMEBUFFER,kt);try{let $t=T.textures[Pt],se=$t.format,ce=$t.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pt);let Xt=pu($t);if(Xt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-X&&$>=0&&$<=T.height-Y&&L.readPixels(U,$,X,Y,St.convert(se),St.convert(ce),It)}finally{let $t=it!==null?Nt.get(it).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,X,Y,It,Vt,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt],Array.isArray(kt)&&(kt=kt[0])),kt)if(U>=0&&U<=T.width-X&&$>=0&&$<=T.height-Y){rt.bindFramebuffer(L.FRAMEBUFFER,kt);let $t=T.textures[Pt],se=$t.format,ce=$t.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pt);let Xt=pu($t);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,he),L.bufferData(L.PIXEL_PACK_BUFFER,It.byteLength,L.STREAM_READ),L.readPixels(U,$,X,Y,St.convert(se),St.convert(ce),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let De=it!==null?Nt.get(it).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,De);let ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ed(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,he),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,It),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(he),L.deleteSync(ye),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){let X=Math.pow(2,-$),Y=Math.floor(T.image.width*X),It=Math.floor(T.image.height*X),Vt=U!==null?U.x:0,Pt=U!==null?U.y:0;Bt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Vt,Pt,Y,It),rt.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,X=null,Y=0,It=0){let Vt,Pt,kt,$t,se,ce,Xt,he,De,ye=T.isCompressedTexture?T.mipmaps[It]:T.image;if($!==null)Vt=$.max.x-$.min.x,Pt=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,$t=$.min.x,se=$.min.y,ce=$.isBox3?$.min.z:0;else{let pe=Math.pow(2,-Y);Vt=Math.floor(ye.width*pe),Pt=Math.floor(ye.height*pe),T.isDataArrayTexture?kt=ye.depth:T.isData3DTexture?kt=Math.floor(ye.depth*pe):kt=1,$t=0,se=0,ce=0}X!==null?(Xt=X.x,he=X.y,De=X.z):(Xt=0,he=0,De=0);let _e=St.convert(U.format),Ye=St.convert(U.type),Yt;U.isData3DTexture?(Bt.setTexture3D(U,0),Yt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),Yt=L.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),Yt=L.TEXTURE_2D),rt.activeTexture(L.TEXTURE0),rt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),rt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),rt.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let tn=rt.getParameter(L.UNPACK_ROW_LENGTH),me=rt.getParameter(L.UNPACK_IMAGE_HEIGHT),qi=rt.getParameter(L.UNPACK_SKIP_PIXELS),qe=rt.getParameter(L.UNPACK_SKIP_ROWS),go=rt.getParameter(L.UNPACK_SKIP_IMAGES);rt.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),rt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),rt.pixelStorei(L.UNPACK_SKIP_PIXELS,$t),rt.pixelStorei(L.UNPACK_SKIP_ROWS,se),rt.pixelStorei(L.UNPACK_SKIP_IMAGES,ce);let mi=T.isDataArrayTexture||T.isData3DTexture,$i=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let pe=Nt.get(T),Ve=Nt.get(U),Cn=Nt.get(pe.__renderTarget),Te=Nt.get(Ve.__renderTarget);rt.bindFramebuffer(L.READ_FRAMEBUFFER,Cn.__webglFramebuffer),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ze=0;ze<kt;ze++)mi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.get(T).__webglTexture,Y,ce+ze),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,It,De+ze)),L.blitFramebuffer($t,se,$t+Vt,se+Pt,Xt,he,Xt+Vt,he+Pt,L.DEPTH_BUFFER_BIT,L.NEAREST);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Nt.has(T)){let pe=Nt.get(T),Ve=Nt.get(U);rt.bindFramebuffer(L.READ_FRAMEBUFFER,P),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let Cn=0;Cn<kt;Cn++)mi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.__webglTexture,Y,ce+Cn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,Y),$i?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,It,De+Cn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,It),Y!==0?L.blitFramebuffer($t,se,$t+Vt,se+Pt,Xt,he,Xt+Vt,he+Pt,L.COLOR_BUFFER_BIT,L.NEAREST):$i?L.copyTexSubImage3D(Yt,It,Xt,he,De+Cn,$t,se,Vt,Pt):L.copyTexSubImage2D(Yt,It,Xt,he,$t,se,Vt,Pt);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $i?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Yt,It,Xt,he,De,Vt,Pt,kt,_e,Ye,ye.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Yt,It,Xt,he,De,Vt,Pt,kt,_e,ye.data):L.texSubImage3D(Yt,It,Xt,he,De,Vt,Pt,kt,_e,Ye,ye):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,It,Xt,he,Vt,Pt,_e,Ye,ye.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,It,Xt,he,ye.width,ye.height,_e,ye.data):L.texSubImage2D(L.TEXTURE_2D,It,Xt,he,Vt,Pt,_e,Ye,ye);rt.pixelStorei(L.UNPACK_ROW_LENGTH,tn),rt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),rt.pixelStorei(L.UNPACK_SKIP_PIXELS,qi),rt.pixelStorei(L.UNPACK_SKIP_ROWS,qe),rt.pixelStorei(L.UNPACK_SKIP_IMAGES,go),It===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&L.generateMipmap(Yt),rt.unbindTexture()},this.initRenderTarget=function(T){Nt.get(T).__webglFramebuffer===void 0&&Bt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Bt.setTextureCube(T,0):T.isData3DTexture?Bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Bt.setTexture2DArray(T,0):Bt.setTexture2D(T,0),rt.unbindTexture()},this.resetState=function(){W=0,z=0,it=null,rt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var re={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},bump:{amount:.18,halfLife:.07},blendHalfLife:.07,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.12,stopTime:.08,turnRate:14,aimTurnRate:20,sprintTurnRate:3,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,popShift:.55,pushAngle:40,lowDrawBack:.38,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.12,slamSquashTime:.15,thudVolume:.5,autoSlam:1,autoAngle:25,autoDist:.15,autoMinTilt:.7,autoMinSpeed:3,autoTime:.08}};function xl({step:n,render:t,before:e,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(_){if(!(_>0)||!Number.isFinite(_))return;e&&e(_),o+=_;let g=0;for(;o>=r&&g<s;)n(r),o-=r,g++;o>=r&&(o=0),t(Math.min(o/r,1-Number.EPSILON),_)}function d(_){if(c){try{l!==null&&h((_-l)/1e3)}catch(g){throw p(),g}l=_,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function p(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:p}}var bh=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),dy={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},fy={0:"fire",2:"aim"},gf={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},xf={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},py=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function wh(n){if(!n||typeof n.tagName!="string")return!1;let t=n.tagName.toUpperCase();return t==="TEXTAREA"?!0:t==="INPUT"?!py.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function _f(n){return dy[n]||null}function vf(n){return fy[n]||null}function qs(){let n={};for(let t of bh)n[t]=!1;return n}function yf(n,t,e=.15){let i=Math.hypot(n,t);if(i<e)return[0,0];let s=Math.min(1,(i-e)/(1-e))/i;return[n*s,t*s]}function my(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[t,e]=yf(n.axes[0],n.axes[1]),[i,s]=yf(n.axes[2],n.axes[3]),r=qs();for(let o in gf){let a=n.buttons[o];r[gf[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:t,moveY:e,lookX:i,lookY:s,held:r}}function gy(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let t of bh)n.held[t]=!1;for(let t in n.held)n.held[t]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function _l(n){let t={downCodes:new Set,downButtons:new Set,latched:new Set,held:qs(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:e,downButtons:i,latched:s}=t,r="kbm",o="none",a=qs();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){gy(t)}function d(S){if(wh(S.target))return;let E=_f(S.code);(E||S.code in xf)&&(c()&&(S.code==="Tab"||S.code==="Space")&&S.preventDefault(),r="kbm",!S.repeat&&!e.has(S.code)&&E&&s.add(E),e.add(S.code))}function u(S){e.delete(S.code)}function f(S){S.target===n&&n.focus();let E=vf(S.button);E&&(r="kbm",i.has(S.button)||s.add(E),i.add(S.button))}function p(S){i.delete(S.button)}function _(S){l()&&(r="kbm",t.lookDX+=S.movementX||0,t.lookDY+=S.movementY||0)}function g(S){!c()||!S.deltaY||(r="kbm",s.add(S.deltaY>0?"weaponNext":"weaponPrev"),S.preventDefault())}function m(S){S.preventDefault()}function v(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",p),window.addEventListener("blur",h),document.addEventListener("mousemove",_),document.addEventListener("pointerlockchange",v),n.addEventListener("mousedown",f),n.addEventListener("wheel",g,{passive:!1}),n.addEventListener("contextmenu",m);function b(){let S=[];try{S=navigator.getGamepads&&navigator.getGamepads()||[]}catch{S=[]}let E=null;for(let M of S)if(M&&M.connected){E=M;break}let x=my(E);return o=x.ok?E.id:x.reason==="none"?"none":"unrecognised controller",x}function y(){let S={moveX:0,moveY:0,lookDX:t.lookDX,lookDY:t.lookDY,lookX:0,lookY:0,held:qs(),pressed:qs()};t.lookDX=0,t.lookDY=0;for(let M of e){let R=_f(M);R&&(S.held[R]=!0);let C=xf[M];C&&(S.moveX+=C[0],S.moveY+=C[1])}for(let M of i){let R=vf(M);R&&(S.held[R]=!0)}let E=Math.hypot(S.moveX,S.moveY);E>1&&(S.moveX/=E,S.moveY/=E);for(let M of s)S.pressed[M]=!0;s.clear();let x=b();if(x.ok){S.lookX=x.lookX,S.lookY=x.lookY;let M=x.moveX!==0||x.moveY!==0||x.lookX!==0||x.lookY!==0;for(let C of bh)x.held[C]&&(M=!0,S.held[C]=!0,a[C]||(S.pressed[C]=!0));a=x.held,S.moveX+=x.moveX,S.moveY+=x.moveY;let R=Math.hypot(S.moveX,S.moveY);R>1&&(S.moveX/=R,S.moveY/=R),M&&(r="pad")}else a=qs();return S}return{poll:y,requestLock(){try{let S=n.requestPointerLock&&n.requestPointerLock();S&&typeof S.catch=="function"&&S.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function Sf(n,t,e=14){let i=n;return t>20?i-=.1:t<e&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var xy=2e3,Mf=1e4,_y=8e4;function bf({startMs:n=0,scale:t=1}={}){let e=t,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-n<xy||(i+=Math.min(h,100),s++,s<60||i<1e3))return e;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=Sf(e,u,Math.max(14,1.1*r));if(f>e){if(d<l)return e;o=d}else f<e&&(o!==null&&d-o<Mf&&(a=a===0?Mf:Math.min(a*2,_y),l=d+a),o=null);return e=f,e}return{sample:c,scale:()=>e}}var vt=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Eh={viewportHeight:{value:1080}};function $s(n){n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=t.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(t.getX(l))+","+o(t.getY(l))+","+o(t.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=e.getX(l),h[1]+=e.getY(l),h[2]+=e.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Se(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=e.getX(l),d=e.getY(l),u=e.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,n}var vy=`
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
`,yy=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function My({px:n=re.outlinePx,color:t=vt.ink,outlineNormal:e=!1}={}){return new Je({name:"outline",uniforms:{px:{value:n},inkColor:{value:new jt(t)},viewportHeight:Eh.viewportHeight},defines:e?{USE_OUTLINE_NORMAL:""}:{},vertexShader:vy,fragmentShader:yy,side:Fe})}function Sy(){}var wf=new Map;function by(n,t,e){let i=n+"|"+new jt(t).getHexString()+"|"+e,s=wf.get(i);return s||(s=My({px:n,color:t,outlineNormal:e}),wf.set(i,s)),s}function Xn(n,{px:t=re.outlinePx}={}){let e=!!n.geometry.getAttribute("outlineNormal"),i=by(t,vt.ink,e),s=new xe(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=Sy,n.add(s),s}function Th(n,t){n.traverse(e=>{e.userData.isOutline&&(e.visible=t)})}function wy(n,t,e,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(t)||1),o=Math.min(e>0?e:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function vl(n,t){let e=new pl({canvas:n,context:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=We;let i=bf({startMs:performance.now()});function s(){let o=wy(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return e.setPixelRatio(o.pixelRatio),e.setSize(o.width,o.height,!1),Eh.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:e,resize:s,frameDone:r,scale:i.scale}}var ci={lightDir:{value:new N(...re.lightDir).normalize()},shadowTint:{value:new jt(vt.shadowTint)},bandEdge:{value:.15},shadowLift:{value:re.shadowLift}},Ey=`
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
`,Ty=`
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
`;function gn({color:n="#ffffff",vertexColors:t=!1,shadowMix:e=.55,rim:i=.25}={}){return new Je({name:"toon",uniforms:{baseColor:{value:new jt(n)},shadowMix:{value:e},rim:{value:i},lightDir:ci.lightDir,shadowTint:ci.shadowTint,bandEdge:ci.bandEdge,shadowLift:ci.shadowLift},vertexShader:Ey,fragmentShader:Ty,vertexColors:t})}var Ay=400,Ry=[-.45,.22,-1],Cy=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,Py=`
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
`;function yl({planetDir:n=Ry}={}){let t=r=>new jt(r),e=new Je({name:"sky",uniforms:{deep:{value:t(vt.nebulaDeep)},hot:{value:t(vt.nebulaHot)},pink:{value:t(vt.hotPink)},lilac:{value:t(vt.lilac)},ink:{value:t(vt.ink)},planetColor:{value:t(vt.planet)},shadowTint:ci.shadowTint,shadowLift:ci.shadowLift,bandEdge:ci.bandEdge,lightDir:ci.lightDir,planetDir:{value:new N(...n).normalize()},time:{value:0}},vertexShader:Cy,fragmentShader:Py,side:Fe,depthWrite:!1}),i=new xe(new bn(Ay,48,24),e);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){e.uniforms.time.value=r}return{mesh:i,update:s}}function Ci(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ee;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Ef(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let p=Ef(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Ef(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let _=h.getComponent(u,p);a.setComponent(u+d,p,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Af(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=t*.5,f=Math.log10(1/t),p=Math.pow(10,f),_=u*p;for(let m=0;m<r;m++){let v=i?i.getX(m):m,b="";for(let y=0,S=a.length;y<S;y++){let E=a[y],x=n.getAttribute(E),M=x.itemSize;for(let R=0;R<M;R++)b+=`${Math.trunc(x[d[R]](v)*p+_)},`}b in e?h.push(e[b]):(l.push(v),e[b]=o,h.push(o),o++)}let g=n.clone();for(let m in n.attributes)g.setAttribute(m,Tf(n.attributes[m],l,c));for(let m in n.morphAttributes)g.morphAttributes[m]=n.morphAttributes[m].map(v=>Tf(v,l,c));return g.setIndex(h),g}function Tf(n,t,e=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?e.get(s):void 0;if(o===void 0){let l=new s.array.constructor(t.length*r);for(let c=0;c<t.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[t[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&e.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function Ah(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Rf(n,t,e=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new N),l=o.getCenter(new N),c=a.length(),h=Ah(t*7919+13>>>0),d=[];for(let m=0;m<8;m++)d.push(h()*2-1);let u=Math.min(e*c,i)*.99/Math.sqrt(3),f=(m,v)=>v>1e-9?2*m/v:0,p=[a.x,a.y,a.z].map(m=>m>1e-9?2/m:0),_=new ne,g=new N;for(let m=0;m<s.count;m++){let v=f(s.getX(m)-l.x,a.x),b=f(s.getY(m)-l.y,a.y),y=f(s.getZ(m)-l.z,a.z),S=(b+1)/2,E=(d[0]*b+d[1]*v*b)/2,x=(d[2]*v+d[3]*y)/2*S,M=(d[4]*b+d[5]*y*b)/2;if(r){let R=[d[1]*b/2,(d[0]+d[1]*v)/2,0],C=[d[2]/2*S,(d[2]*v+d[3]*y)/2*.5,d[3]/2*S],I=[0,(d[4]+d[5]*y)/2,d[5]*b/2];_.set(1+u*R[0]*p[0],u*R[1]*p[1],u*R[2]*p[2],u*C[0]*p[0],1+u*C[1]*p[1],u*C[2]*p[2],u*I[0]*p[0],u*I[1]*p[1],1+u*I[2]*p[2]),_.invert().transpose(),g.set(r.getX(m),r.getY(m),r.getZ(m)).applyMatrix3(_).normalize(),r.setXYZ(m,g.x,g.y,g.z)}s.setXYZ(m,s.getX(m)+u*E,s.getY(m)+u*x,s.getZ(m)+u*M)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var Rh=null;function Iy(){return Rh||(Rh=gn({vertexColors:!0})),Rh}var Ph=(n,t,e)=>new jt(n).lerp(new jt(t),e),Ih=(n,t=.3)=>Ph(n,"#ffffff",t),Ml=(n,t=.2)=>Ph(n,vt.shadowTint,t),Cf=new fe,Pf=new nn,If=new on,Ly=new N,Dy=new N;function Pi(n=1,t=.02,e="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let p=u.wonk===void 0?t:u.wonk;p>0&&Rf(f,n*131+s,p),s++;let _=f.getAttribute("normal"),g=new Float32Array(_.count*3);for(let m=0;m<_.count;m++){let v=typeof d=="function"?d(_.getX(m),_.getY(m),_.getZ(m)):d;g[m*3]=v.r,g[m*3+1]=v.g,g[m*3+2]=v.b}return f.setAttribute("color",new Se(g,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),If.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),Pf.setFromEuler(If),Cf.compose(Ly.set(u.x||0,u.y||0,u.z||0),Pf,Dy.set(1,1,1)),f.applyMatrix4(Cf),i.push(f),f}function o(h,d={}){let u=d.top||Ih(h),f=d.side||Ml(h,.22),p=Ml(h,.4),_=new jt(h);return(g,m,v)=>m>.5?u:m<-.5?p:Math.abs(g)>.5?f:v>0?_:p}function a(h,d,u,f,p={}){return r(new an(h,d,u),o(f,p),p)}function l(h,d,u,f,p,_,g,m={}){return a(d-h,f-u,_-p,g,{...m,x:(h+d)/2,y:(u+f)/2,z:(p+_)/2})}function c(h=0){let d=Ci(i,!1);if(!d)throw new Error(`${e}: parts have different attributes and cannot be merged`);return h>0&&Rf(d,n,h),$s(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function Ii(n){let t=new Re,e=new xe(n,Iy());return Xn(e),t.add(e),t}var hi=n=>()=>new jt(n);function Sl({w:n,d:t,tile:e=1,colors:i=[vt.cream,vt.tealLight]}){let s=Pi(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-t/2,t/2,vt.lilac,{top:new jt(vt.lilac)});let o=Math.round(n/e),a=Math.round(t/e);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new bi(e,e);h.rotateX(-Math.PI/2),s.add(h,hi(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*e,y:0,z:-t/2+(c+.5)*e})}return Ii(s.finish())}function Lh({w:n,h:t,color:e=vt.cream,stripe:i=vt.hotPink,opening:s=null,seed:r=2}){let o=Pi(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,d=-.3,u=new Os;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,t),u.lineTo(c,t),u.closePath(),s){let m=new ss,v=s.x-s.w/2,b=s.x+s.w/2;m.moveTo(v,s.y),m.lineTo(v,s.y+s.h),m.lineTo(b,s.y+s.h),m.lineTo(b,s.y),m.closePath(),u.holes.push(m)}let f=new Fr(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(e),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,vt.lilac),o.span(c-.05,h+.05,t-.1,t+.12,-l-.06,l+.08,vt.teal);let p=.5,_=.8;return s&&s.y<_&&s.y+s.h>p?(o.span(c,s.x-s.w/2,p,_,l-.01,l+.03,i),o.span(s.x+s.w/2,h,p,_,l-.01,l+.03,i)):o.span(c,h,p,_,l-.01,l+.03,i),Ii(o.finish(.006))}function Ny(n,t,e,i){let s=g=>Math.min(2048,Math.max(64,Math.round(g))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),d=[[n]];for(let g=1;g<h.length;g++)d.push([h.slice(0,g).join(" "),h.slice(g).join(" ")]);let u=null;for(let g of d){let m=Math.max(...g.map(b=>l.measureText(b).width)),v=Math.min(r*.88*100/m,o*.8/(g.length*1.08));(!u||v>u.size)&&(u={lines:g,size:v})}l.fillStyle=t,l.fillRect(0,0,r,o),l.strokeStyle=e,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,p=o/2-(u.lines.length-1)*f/2;u.lines.forEach((g,m)=>{let v=p+m*f;l.fillStyle=vt.ink,l.fillText(g,r/2+u.size*.05,v+u.size*.06),l.fillStyle=e,l.fillText(g,r/2,v)});let _=new Er(a);return _.colorSpace=We,_.anisotropy=8,_}function Uy({text:n,w:t,h:e,bg:i=vt.hotPink,fg:s=vt.cream,tilt:r=.04,seed:o=3}){let c=Pi(o,0,"sign");c.box(t,e,.14,s,{wonk:0});let h=Ii(c.finish()),d=t-.14*2,u=e-.14*2,f=new xe(new bi(d,u),new ns({map:Ny(n,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function Lf({w:n,h:t,seed:e=4}){let i=Pi(e,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,t,-r/2,r/2,vt.teal),i.span(n/2-s,n/2,0,t,-r/2,r/2,vt.teal),i.span(-n/2+s,n/2-s,t-s,t,-r/2,r/2,vt.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,vt.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,vt.hotPink),i.span(-.04,.04,s,t-s,-.04,.04,vt.cream),i.span(-n/2+s,n/2-s,t/2-.04,t/2+.04,-.04,.04,vt.cream),Ii(i.finish(.006))}function Qr(n,t,e,i,s,r){let o=new os(.16,.05,8,20);n.add(o,hi(vt.planet),{wonk:.04,x:t,y:e,z:i,rx:-Math.PI/2+s,ry:r})}function Df({w:n,h:t,name:e,signColor:i=vt.hotPink,seed:s=5}){let r=Pi(s,.012,"shopFront"),o=.5,a=.5,l=t,c=t-1.4,h=Ph(vt.glorpPurple,vt.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,vt.lilac);for(let m of[-1,1]){let v=m*(n/2-a/2);r.span(v-a/2,v+a/2,0,c,-o/2,o/2,vt.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,vt.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,vt.teal);let d=n-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,vt.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,vt.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,vt.cream),Qr(r,-.9,1.01,.4,.1,.4),Qr(r,-.2,1.01,.5,-.1,-.3),Qr(r,.6,1.01,.38,.12,.9),Qr(r,1.2,1.01,.52,0,.1);let u=10,f=(n-.1)/u,p=.42;for(let m=0;m<u;m++){let v=m%2?vt.cream:i,b=-n/2+.05+(m+.5)*f;r.box(f,.08,.95,v,{x:b,y:c-.02,z:o/2+.35,rx:p,top:Ih(v,.2)}),r.box(f,.22,.06,v,{x:b,y:c-.24,z:o/2+.8,rx:.1})}let _=Ii(r.finish(.006)),g=Uy({text:e,w:n-.7,h:1.15,bg:i,fg:vt.cream,seed:s+1});return g.position.set(0,c+.7,o/2+.01),_.add(g),_}function Nf({w:n=2,d:t=1,h:e=.9,color:i=vt.teal,seed:s=7}={}){let r=Pi(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-t/2+.03,t/2-.03,vt.lilac),r.span(-n/2,n/2,.16,e-.08,-t/2,t/2,i),r.span(-n/2-.07,n/2+.07,e-.08,e,-t/2-.07,t/2+.07,vt.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?vt.cream:vt.hotPink;r.box(a-.04,e-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:t/2+.02})}r.box(.38,.28,.3,vt.glorpPurple,{x:-.55,y:e+.14,z:-.1}),r.box(.3,.14,.04,vt.gel,{x:-.55,y:e+.28,z:.07,rx:-.5,wonk:0}),Qr(r,.45,e+.06,.05,.1,.5);let l=Ii(r.finish(.006));return l.userData.footprint={w:n+.14,d:t+.14},l}function Uf({w:n=1.8,seed:t=11}={}){let e=Pi(t,.02,"bench"),i=.5;e.box(n,.1,i,vt.lilac,{y:.46}),e.box(n,.42,.08,vt.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])e.box(.1,.46,i-.06,vt.teal,{x:r*(n/2-.2),y:.23}),e.box(.08,.5,.08,vt.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=Ii(e.finish(.006));return s.userData.footprint={w:n,d:i},s}function Fy(n,t,e){let i=new an(.035,n,t,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+e*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function Ff({seed:n=21}={}){let t=Pi(n,.02,"planter"),e=Ah(n);t.add(new Sn(.42,.32,.55,16),hi(vt.teal),{y:.275}),t.add(new Sn(.47,.44,.12,16),hi(vt.hotPink),{y:.6}),t.add(new Sn(.4,.4,.04,16),hi(Ml(vt.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=Ml(vt.planet,.15);for(let l=0;l<6;l++)t.add(new Sn(.06-l*.004,.07-l*.004,.34,8),hi(l%2?Ih(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+e()*.3,h=l%2?.95+e()*.25:1.45+e()*.25,d=new fe().makeTranslation(i,s,0).multiply(new fe().makeRotationY(c)).multiply(new fe().makeRotationZ(-h));t.add(Fy(.95,.24,l%2?.22:.4),hi(l%2?vt.gel:vt.teal),{m:d,wonk:.03})}t.add(new bn(.1,10,8),hi(vt.planet),{x:i,y:s-.05,z:.08}),t.add(new bn(.1,10,8),hi(vt.planet),{x:i+.07,y:s-.1,z:-.07});let a=Ii(t.finish());return a.userData.footprint={w:.95,d:.95},a}var Ch=null;function bl({rx:n,rz:t,opacity:e=.35}){let r=new jt(vt.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,e];for(let d=1;d<=8;d++){let u=d/8,f=e*(1-u*u*(3-2*u));for(let p=0;p<28;p++){let _=p/28*Math.PI*2;o.push(Math.cos(_)*n*u,0,Math.sin(_)*t*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let p=0;p<28;p++){let _=(p+1)%28;l.push(u+p,u+_,f+p,u+_,f+_,f+p)}}let c=new Ee;c.setAttribute("position",new de(o,3)),c.setAttribute("color",new de(a,4)),c.setIndex(l),Ch||(Ch=new ns({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new xe(c,Ch);return h.name="blobShadow",h.position.y=.012,h}var to=8,wl=to/2,Dh=.2;function Of(){let n=new Re;n.add(Sl({w:to,d:to}));let t=Lh({w:to+Dh*2,h:4});t.position.set(0,0,-wl-Dh/2),n.add(t);let e=1.3,i=Df({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:vt.hotPink});i.position.set(e,0,-wl+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=Lh({w:to,h:4,color:"#f1e6ff",opening:s});r.position.set(-wl-Dh/2,0,0),r.rotation.y=Math.PI/2;let o=Lf({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=Nf({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Uf({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=Ff({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(d,u,f,p,_=0)=>{let g=bl({rx:f,rz:p,opacity:.7});g.position.x=d,g.position.z=u,g.rotation.y=_,n.add(g)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(e,-wl+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function En(n,t,e,i){if(!(e>0)||!(i>0))return e>0||(n.x=t,n.v=0),n;let s=4*Math.LN2/e/2,r=n.x-t,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+t,n.v=a*(n.v-o*s*i),n}function Nh(n,t,e,i,s,r){let o=e+i,a=t[0]-n[0],l=t[1]-n[1],c=t[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=t[0],f=t[1],p=t[2];h>d&&(h=d,u=n[0]+a*h,f=n[1]+l*h,p=n[2]+c*h);let _=h>o?h/o:1;if(h>=o){let M=h*(o>0?e/o:.5);return Bf(r,n[0]+a*M,n[1]+l*M,n[2]+c*M,u,f,p,_)}let g=Math.max(h,1e-6),m=Math.min(Math.max((g*g+e*e-i*i)/(2*g),-e),e),v=Math.sqrt(Math.max(e*e-m*m,0)),b=s[0],y=s[1],S=s[2],E=b*a+y*l+S*c;b-=a*E,y-=l*E,S-=c*E;let x=Math.hypot(b,y,S);return x<1e-6&&(Math.abs(a)<.9?(b=0,y=c,S=-l):(b=-c,y=0,S=a),x=Math.hypot(b,y,S)||1),b/=x,y/=x,S/=x,Bf(r,n[0]+a*m+b*v,n[1]+l*m+y*v,n[2]+c*m+S*v,u,f,p,_)}function Bf(n,t,e,i,s,r,o,a){if(!n)return{mid:[t,e,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=t,l[1]=e,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var kf=[.65,1.2];function Uh({radius:n=.06,rings:t=8,sides:e=8,color:i="#ffffff"}={}){let s=t+1,r=kf.length,o=s*e,a=[o,o+r*e+1],l=o+2*(r*e+1),c=[],h=(dt,ot,K)=>{for(let ct=0;ct<e;ct++){let zt=(ct+1)%e,qt=dt+ct,Kt=dt+zt,L=ot+ct,at=ot+zt;K?c.push(qt,L,Kt,Kt,L,at):c.push(qt,Kt,L,Kt,at,L)}};for(let dt=0;dt<t;dt++)h(dt*e,(dt+1)*e,!1);for(let dt=0;dt<2;dt++){let ot=dt===0,K=dt===0?0:t*e;for(let zt=0;zt<r;zt++){let qt=a[dt]+zt*e;h(K,qt,ot),K=qt}let ct=a[dt]+r*e;for(let zt=0;zt<e;zt++){let qt=K+zt,Kt=K+(zt+1)%e;ot?c.push(qt,ct,Kt):c.push(qt,Kt,ct)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Ee,p=new Se(d,3),_=new Se(u,3);p.setUsage(Ws),_.setUsage(Ws),f.setAttribute("position",p),f.setAttribute("normal",_),f.setIndex(c);let g=new xe(f,gn({color:i}));g.name="limb";let m=new Hn(new N,n*2);f.boundingSphere=m,Xn(g);let v=new Float64Array(e),b=new Float64Array(e);for(let dt=0;dt<e;dt++)v[dt]=Math.cos(dt/e*Math.PI*2),b[dt]=Math.sin(dt/e*Math.PI*2);let y=0,S=-1,E=0,x=1,M=0,R=0,C=0,I=0,F=1,H=0,P=0,B=0,W=0,z=0,it=0,V=0,J=0,G=0,pt=0,gt=0,O=0,ut=0,At=0,Ft=0,q=0,wt=0,Gt=0;function Ot(dt,ot,K,ct,zt,qt,Kt,L,at,Rt,Wt,rt,ie,Nt,Bt,A){for(let w=0;w<e;w++){let k=v[w]*qt+b[w]*at,ft=v[w]*Kt+b[w]*Rt,et=v[w]*L+b[w]*Wt,mt=(dt+w)*3;d[mt]=ot+k*zt,d[mt+1]=K+ft*zt,d[mt+2]=ct+et*zt,u[mt]=k*Bt+rt*A,u[mt+1]=ft*Bt+ie*A,u[mt+2]=et*Bt+Nt*A}}let Jt=!1,te=1,nt=0,_t=0;function yt(dt,ot,K,ct=1){let zt=n/Math.sqrt(ct>1?ct:1),qt=2*ot[0]-(dt[0]+K[0])/2,Kt=2*ot[1]-(dt[1]+K[1])/2,L=2*ot[2]-(dt[2]+K[2])/2,at=dt[0],Rt=dt[1],Wt=dt[2],rt=K[0],ie=K[1],Nt=K[2],Bt=(ot[1]-Rt)*(Nt-ot[2])-(ot[2]-Wt)*(ie-ot[1]),A=(ot[2]-Wt)*(rt-ot[0])-(ot[0]-at)*(Nt-ot[2]),w=(ot[0]-at)*(ie-ot[1])-(ot[1]-Rt)*(rt-ot[0]),k=Math.hypot(Bt,A,w),ft=ot[0]-at,et=ot[1]-Rt,mt=ot[2]-Wt,Mt=Math.hypot(ft,et,mt),j=rt-ot[0],Q=ie-ot[1],Et=Nt-ot[2],D=!1;k>1e-4*Mt*Math.hypot(j,Q,Et)&&k>1e-12?(Bt/=k,A/=k,w/=k,Jt&&Bt*te+A*nt+w*_t<0&&(Bt=-Bt,A=-A,w=-w),D=!0):Mt>1e-9&&ft*j+et*Q+mt*Et<0&&(qt=(at+rt)/2,Kt=(Rt+ie)/2,L=(Wt+Nt)/2);let tt=(at+qt+rt)/3,Z=(Rt+Kt+ie)/3,bt=(Wt+L+Nt)/3,St=Math.max(Math.hypot(at-tt,Rt-Z,Wt-bt),Math.hypot(qt-tt,Kt-Z,L-bt),Math.hypot(rt-tt,ie-Z,Nt-bt));m.center.set(tt,Z,bt),m.radius=St+n*1.5+.02;for(let lt=0;lt<s;lt++){let ht=lt/t,Dt=1-ht,st=Dt*Dt,Ct=2*Dt*ht,Ht=ht*ht,Tt=st*at+Ct*qt+Ht*rt,Zt=st*Rt+Ct*Kt+Ht*ie,oe=st*Wt+Ct*L+Ht*Nt,ve=2*Dt*(qt-at)+2*ht*(rt-qt),Pe=2*Dt*(Kt-Rt)+2*ht*(ie-Kt),Ie=2*Dt*(L-Wt)+2*ht*(Nt-L),Rn=Math.hypot(ve,Pe,Ie);if(Rn>1e-9?(y=ve/Rn,S=Pe/Rn,E=Ie/Rn):lt===0&&(y=0,S=-1,E=0),lt===0){D?(x=Bt,M=A,R=w):Jt?(x=te,M=nt,R=_t):(x=1,M=0,R=0);let Qe=x*y+M*S+R*E;x-=y*Qe,M-=S*Qe,R-=E*Qe;let we=Math.hypot(x,M,R);we<1e-6&&(Math.abs(y)<.9?(x=0,M=E,R=-S):(x=-E,M=0,R=y),we=Math.hypot(x,M,R)||1),x/=we,M/=we,R/=we,te=x,nt=M,_t=R,Jt=!0}else{let Qe=x*y+M*S+R*E;x-=y*Qe,M-=S*Qe,R-=E*Qe;let we=Math.hypot(x,M,R);we<1e-6&&(Math.abs(y)<.9?(x=0,M=E,R=-S):(x=-E,M=0,R=y),we=Math.hypot(x,M,R)||1),x/=we,M/=we,R/=we}C=S*R-E*M,I=E*x-y*R,F=y*M-S*x,Ot(lt*e,Tt,Zt,oe,zt,x,M,R,C,I,F,0,0,0,1,0),lt===0&&(H=y,P=S,B=E,W=x,z=M,it=R,V=C,J=I,G=F),lt===s-1&&(pt=y,gt=S,O=E,ut=x,At=M,Ft=R,q=C,wt=I,Gt=F)}for(let lt=0;lt<2;lt++){let ht=lt===0?-1:1,Dt=lt===0?at:rt,st=lt===0?Rt:ie,Ct=lt===0?Wt:Nt,Ht=lt===0?H:pt,Tt=lt===0?P:gt,Zt=lt===0?B:O,oe=lt===0?W:ut,ve=lt===0?z:At,Pe=lt===0?it:Ft,Ie=lt===0?V:q,Rn=lt===0?J:wt,Qe=lt===0?G:Gt,we=Ht*ht,_n=Tt*ht,pi=Zt*ht;for(let Wi=0;Wi<r;Wi++){let Xi=kf[Wi],ir=Math.cos(Xi),Yi=Math.sin(Xi);Ot(a[lt]+Wi*e,Dt+we*zt*Yi,st+_n*zt*Yi,Ct+pi*zt*Yi,zt*ir,oe,ve,Pe,Ie,Rn,Qe,we,_n,pi,ir,Yi)}let Jn=(a[lt]+r*e)*3;d[Jn]=Dt+we*zt,d[Jn+1]=st+_n*zt,d[Jn+2]=Ct+pi*zt,u[Jn]=we,u[Jn+1]=_n,u[Jn+2]=pi}p.needsUpdate=!0,_.needsUpdate=!0}return{mesh:g,set:yt}}var fs=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),Oy=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),El=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Fh=.04,By=9;function Tl(n,t){let e=Math.sin(n*12.9898+t*78.233)*43758.5453;return(e-Math.floor(e))*Math.PI*2}function ky(n,t,e=[0,0]){return e[0]=.05*Math.sin(1.3*n+Tl(t,1))+.03*Math.sin(2.1*n+Tl(t,2)),e[1]=.04*Math.sin(1.7*n+Tl(t,3))+.02*Math.sin(2.6*n+Tl(t,4)),e}var zy=(n,t)=>Math.min(n*2,1)*Math.max(t,0),eo=16,zf=eo+1,Yn=11,Li=4,Al=13,Hy=.07,Gy=n=>{let t=n<0?0:n>1?1:n;return t*t*(3-2*t)};function Hf({eyeRadius:n=.1,eyeSpacing:t=.26,eyeY:e=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=vt.ink,fixedSmile:h=0}={}){let d=n,u=t/2,f=[-u,u],p=.35,_=.035*d,g=d*.3,m=a==="uni",v=0,b=v+2*zf,y=b+16,S=y+2*Yn*Li,E=S+2*Yn*2,x=E+(m?6:8),M=x+Al*2,R=[],C=at=>R.push(at,at+1,at+2,at,at+2,at+3),I=(at,Rt)=>{for(let Wt=0;Wt<Rt-1;Wt++){let rt=at+Wt*2;R.push(rt,rt+1,rt+2,rt+1,rt+3,rt+2)}};for(let at=0;at<2;at++){let Rt=v+at*zf;for(let Wt=0;Wt<eo;Wt++)R.push(Rt,Rt+1+Wt,Rt+1+(Wt+1)%eo)}for(let at=0;at<4;at++)C(b+at*4);for(let at=0;at<2;at++){let Rt=y+at*Yn*Li;for(let Wt=0;Wt<Yn-1;Wt++)for(let rt=0;rt<Li-1;rt++){let ie=Rt+Wt*Li+rt,Nt=ie+1,Bt=ie+Li,A=Bt+1;R.push(ie,Nt,Bt,Nt,A,Bt)}I(S+at*Yn*2,Yn)}m?R.push(E,E+1,E+2,E+1,E+3,E+2,E+2,E+3,E+4,E+3,E+5,E+4):(C(E),C(E+4)),I(x,Al);let F=[];for(let at=0;at<2;at++){let Rt=new bn(d,18,12);Rt.deleteAttribute("uv"),Rt.applyMatrix4(new fe().makeScale(1,1,p).setPosition(f[at],e,i)),F.push(Rt)}let H=new xe(Ci(F,!1),gn({color:vt.eyeWhite,shadowMix:.35,rim:0}));H.name="eyes",Xn(H,{px:2});let P=new Float32Array(M*3),B=new Float32Array(M*3),W=new Float32Array(M*3),z=new jt(vt.ink),it=new jt(c);for(let at=0;at<M;at++){B[at*3+2]=1;let Rt=at>=y&&at<S?it:z;W[at*3]=Rt.r,W[at*3+1]=Rt.g,W[at*3+2]=Rt.b}let V=new Ee,J=new Se(P,3);J.setUsage(Ws),V.setAttribute("position",J),V.setAttribute("normal",new Se(B,3)),V.setAttribute("color",new Se(W,3)),V.setIndex(R);let G=e+d*3.5,pt=s-r*1.5-d,gt=Math.max(u+2.5*d,r);V.boundingSphere=new Hn(new N(0,(G+pt)/2,i),Math.hypot(gt,(G-pt)/2,d*2));let O=gn({color:"#ffffff",vertexColors:!0,rim:0});O.side=wn;let ut=new xe(V,O);ut.name="features";let At=new Re;At.name="face",At.add(H,ut);let Ft=fs.neutral,q=at=>{let Rt=h>0?Oy[at]:0;return Rt>0?h*Rt:-1/0},wt=q("neutral"),Gt=at=>at==="mouthCurve"&&Ft.mouthCurve<wt?wt:Ft[at],Ot={};for(let at of El)Ot[at]={x:Gt(at),v:0};let Jt={x:0,v:0},te={x:0,v:0},nt=0,_t=!1,yt=0,dt=[0,0],ot=0;function K(at,Rt,Wt){let rt=ot*3;P[rt]=at,P[rt+1]=Rt,P[rt+2]=Wt,ot++}function ct(at,Rt,Wt){let rt=1-(at*at+Rt*Rt)/(d*d);return i+d*p*Math.sqrt(rt>0?rt:0)+Wt}function zt(at,Rt,Wt,rt,ie,Nt){let Bt=-(rt-Rt),A=Wt-at,w=Math.hypot(Bt,A)||1;Bt=Bt/w*ie/2,A=A/w*ie/2,K(at+Bt,Rt+A,Nt),K(Wt+Bt,rt+A,Nt),K(Wt-Bt,rt-A,Nt),K(at-Bt,Rt-A,Nt)}let qt=d*1.03;function Kt(){let at=Ot,Rt=at.pupilScale.x*(1-Jt.x),Wt=Jt.x,rt=Math.min(Math.max(at.lid.x,0),.95),ie=at.browAngle.x,Nt=rt>.005,Bt=qt-2*qt*rt,A=ie*.6*Math.min(rt*4,1),w=d*Hy*Math.min(rt*10,1);ot=v;for(let ht=0;ht<2;ht++){let Dt=ht===0?-1:1;ky(yt,l+ht*7.31,dt);let st=d*.5*(Rt>0?Rt:0),Ct=dt[0]*d,Ht=dt[1]*d;if(Nt){let Zt=Bt+A*Dt*Ct-Math.abs(A)*st-w-(Ht+st);if(Zt>0){let oe=Math.min(Math.max((Zt-.1*d)/(.1*d),0),1);Ht+=Zt*(1-Gy(oe))}}K(f[ht]+Ct,e+Ht,ct(Ct,Ht,_));for(let Tt=0;Tt<eo;Tt++){let Zt=Tt/eo*Math.PI*2,oe=Ct+Math.cos(Zt)*st,ve=Ht+Math.sin(Zt)*st;K(f[ht]+oe,e+ve,ct(oe,ve,_))}}ot=b;for(let ht=0;ht<2;ht++){let Dt=d*.55*Wt,st=ct(0,0,_),Ct=d*.26*Wt;zt(f[ht]-Dt,e-Dt,f[ht]+Dt,e+Dt,Ct,st),zt(f[ht]-Dt,e+Dt,f[ht]+Dt,e-Dt,Ct,st)}for(let ht=0;ht<2;ht++){let Dt=ht===0?-1:1;for(let st=0;st<2;st++){ot=st===0?y+ht*Yn*Li:S+ht*Yn*2;for(let Ct=0;Ct<Yn;Ct++){let Ht=(Ct/(Yn-1)*2-1)*(Math.PI/2),Tt=qt*Math.sin(Ht),Zt=qt*Math.cos(Ht),oe=Nt?Bt+A*Tt:Zt;oe>Zt&&(oe=Zt),oe<-Zt&&(oe=-Zt);let ve=Dt*Tt;if(st===0)for(let Pe=0;Pe<Li;Pe++){let Ie=Zt+(oe-Zt)*(Pe/(Li-1));K(f[ht]+ve,e+Ie,ct(ve,Ie*.97,_*3))}else{let Pe=oe+(Nt?d*.02:0);Pe>Zt&&(Pe=Zt);let Ie=oe-w;Ie<-Zt&&(Ie=-Zt),K(f[ht]+ve,e+Pe,ct(ve,Pe*.97,_*3.5)),K(f[ht]+ve,e+Ie,ct(ve,Ie*.97,_*3.5))}}}}ot=E;let k=d*.9,ft=e+d*(1.4+at.browY.x),et=Math.cos(ie),mt=Math.sin(ie),Mt=i+d*.15;if(m){let ht=u+k*et,Dt=ft+k*mt,st=ft-mt/(et>.3?et:.3)*u,Ct=-(st-Dt),Ht=ht,Tt=Math.hypot(Ct,Ht)||1;Ct/=Tt,Ht/=Tt;let Zt=-(Dt-st),oe=ht,ve=Math.hypot(Zt,oe)||1;Zt/=ve,oe/=ve;let Pe=Ct+Zt,Ie=Ht+oe,Rn=Math.hypot(Pe,Ie)||1;Pe/=Rn,Ie/=Rn;let Qe=Pe*Ct+Ie*Ht,we=g/2/(Qe>.4?Qe:.4);K(-ht+Ct*g/2,Dt+Ht*g/2,Mt),K(-ht-Ct*g/2,Dt-Ht*g/2,Mt),K(Pe*we,st+Ie*we,Mt),K(-Pe*we,st-Ie*we,Mt),K(ht+Zt*g/2,Dt+oe*g/2,Mt),K(ht-Zt*g/2,Dt-oe*g/2,Mt)}else for(let ht=0;ht<2;ht++){let Dt=ht===0?-1:1;zt(f[ht]-Dt*k*et,ft-k*mt,f[ht]+Dt*k*et,ft+k*mt,g,Mt)}ot=x;let j=at.mouthOpen.x+te.x*(.55+.45*Math.sin((yt+l*.37)*By*Math.PI*2))*.8,Q=j>0?j<1.2?j:1.2:0,Et=-at.mouthCurve.x/.5,D=(Et>1?1:Et>0?Et:0)*(Q<.4?Q/.4:1),tt=r/2*(1-.35*(Q<1?Q:1)*(1-.7*D)),Z=zy(at.lid.x,at.mouthCurve.x),bt=at.mouthCurve.x*tt*.5*(1-.4*Z)*(1+.6*D),St=.55+.5*D,lt=Q*tt*.9;for(let ht=0;ht<Al;ht++){let Dt=ht/(Al-1)*2-1,st=1-Dt*Dt,Ct=Dt*tt*(1-.25*Z)+Z*tt*.2,Ht=s-bt*st+Z*tt*.45*Dt+Jt.x*g*.6*Math.sin(Dt*Math.PI*3);K(Ct,Ht,o),K(Ct,Ht-g-lt*Math.pow(st,St)+bt*st*D,o)}J.needsUpdate=!0}function L(at){yt+=at;for(let Rt=0;Rt<El.length;Rt++)En(Ot[El[Rt]],Gt(El[Rt]),Fh,at);En(Jt,nt,Fh,at),En(te,_t?1:0,Fh,at),Kt()}return Kt(),{group:At,setExpression(at){Ft=Object.prototype.hasOwnProperty.call(fs,at)?fs[at]:fs.neutral,nt=at==="dead"?1:0,wt=q(Object.prototype.hasOwnProperty.call(fs,at)?at:"neutral")},setTalking(at){_t=!!at},update:L}}var Tn=Math.PI*2,no=["handL","handR","footL","footR"];function qn(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Gf(n,t){t.hipsY=n.hipsY,t.lean=n.lean,t.twist=n.twist,t.headYaw=n.headYaw,t.headPitch=n.headPitch,t.squash=n.squash,t.elbows=n.elbows;for(let e=0;e<4;e++){let i=n[no[e]],s=t[no[e]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return t}function Ll(n,t,e,i=[0,0,0]){let s=e[0],r=e[1]-n.hipHeight,o=e[2],a=Math.cos(t.lean),l=Math.sin(t.lean),c=Math.cos(t.twist),h=Math.sin(t.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+t.hipsY,i[2]=-s*h+u*c,i}var Vy=n=>n<0?0:n>1?1:n,Js=(n,t,e)=>{let i=Vy((e-n)/(t-n));return i*i*(3-2*i)},io=(n,t,e,i,s)=>Js(t,e,n)*(1-Js(i,s,n));function je(n,t,e,i){return n[0]=t,n[1]=e,n[2]=i,n}var Rl=[0,0,0];function ps(n,t,e,i,s,r){return Rl[0]=e,Rl[1]=i,Rl[2]=s,Ll(n,t,Rl,r)}var Cl={sx:0,sy:0,fx:0};function $n(n){return Cl.sx=Math.abs(n.shoulderL[0]),Cl.sy=n.shoulderL[1],Cl.fx=Math.abs(n.hipL[0])+.035,Cl}var Ks=(n,t)=>t>0?n.handL:n.handR;function Oh(n,t,e,i,s){return ps(n,t,s*(e.sx+.16),n.hipHeight+0,.1,i)}var Bh=.55;function Dl(n,t,e){let i=$n(t),s=n/be.idle.duration,r=Tn*s,o=t.hipHeight,a=io(s,.42,.52,.72,.86);return e.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),e.lean=.03+.015*Math.sin(r+.4),e.twist=.05*Math.sin(r+.6),e.headYaw=.03*Math.sin(r)+.3*a,e.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,e.squash=1+.008*Math.sin(r),e.elbows=Bh,Oh(t,e,i,e.handL,1),Oh(t,e,i,e.handR,-1),e.handL[1]+=.008*Math.sin(r-.5),e.handR[1]+=.008*Math.sin(r+.4),e.handL[2]+=.01*Math.sin(r+1.1),e.handR[2]+=.01*Math.sin(r-.7),je(e.footL,i.fx,0,.015),je(e.footR,-i.fx,0,-.015),e}var ui=.34,kh=.25,Wf=-.33,Wy=.4,Xy=.37,Yy=.035,Il=(kh-Wf)/ui;function Vf(n,t){if(n<ui)return t[0]=0,t[1]=kh-Il*n,t;let e=(n-ui)/(1-ui),i=-Il*(1-ui),s=-.35*Il*(1-ui),r=e*e,o=r*e;return t[1]=(2*o-3*r+1)*Wf+(o-2*r+e)*i+(-2*o+3*r)*kh+(o-r)*s,t[0]=Wy*Math.sin(Math.PI*Math.pow(e,.8)),t}var Zs=[0,0];function Xf(n,t,e){let i=$n(t),s=n/be.run.duration,r=s-Math.floor(s),o=t.hipHeight,a=2*Tn*(r-(ui+.5)/2);e.hipsY=o-.06+Yy*Math.cos(a),e.squash=1+.045*Math.cos(2*Tn*(r-ui-.03)),e.lean=Xy+.03*Math.cos(2*Tn*(r-ui));let l=Math.cos(Tn*(r+.03));e.twist=.2*l,e.headYaw=-.15*l,e.headPitch=-.28+.04*Math.cos(a),e.elbows=0,Vf(r,Zs),je(e.footL,i.fx*.75,Zs[0],Zs[1]),Vf(r<.5?r+.5:r-.5,Zs),je(e.footR,-i.fx*.75,Zs[0],Zs[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;ps(t,e,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,Ks(e,c))}return e}function Yf(n,t,e){let i=$n(t),s=Tn*n/be.aim.duration,r=t.hipHeight;e.hipsY=r-.05+.005*Math.sin(s),e.lean=.12+.01*Math.sin(s),e.twist=-.1,e.headYaw=.08,e.headPitch=.04+.012*Math.sin(2*s),e.squash=1,e.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return je(e.handL,i.sx*1.2+o,i.sy-.12+a,.56),je(e.handR,-i.sx*1.25+o,i.sy-.06+a,.52),je(e.footL,i.fx+.02,0,.15),je(e.footR,-i.fx-.03,0,-.13),e}var zh=.35;function qy(n){return n<.06?Js(0,.06,n):Math.exp(-9*(n-.06))*(1-Js(.24,zh,n))}function $y(n){if(n<.07)return Js(0,.07,n);let t=n-.07;return Math.exp(-11*t)*Math.cos(Tn*t/.22)*(1-Js(.26,zh,n))}function Zy(n,t,e){let i=$n(t),s=t.hipHeight,r=qy(n);e.hipsY=s-.012-.05*r,e.lean=.03-.4*r,e.twist=.12*r,e.headYaw=-.12*r,e.headPitch=-.02-.32*r,e.squash=1-.15*$y(n),e.elbows=Bh+(1-Bh)*r;for(let o=-1;o<=1;o+=2){let a=Ks(e,o);Oh(t,e,i,a,o);let l=a[0],c=a[1],h=a[2];ps(t,e,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return je(e.footL,i.fx,0,.015),je(e.footR,-i.fx,0,-.015),e}var Pl=[0,0,0];function Jy(n,t,e){Dl(n,t,e);let i=$n(t),s=n/be.talk.duration,r=Tn*s,o=io(s,.04,.17,.4,.55),a=io(s,.5,.63,.8,.95),l=Math.sin(3*r);e.headPitch+=.05*Math.sin(4*r)-.04*(o+a),e.headYaw+=-.12*o+.12*a,e.elbows+=(.85-e.elbows)*Math.max(o,a),ps(t,e,-(i.sx+.19),i.sy-.1+.03*l,.36,Pl);for(let c=0;c<3;c++)e.handR[c]+=(Pl[c]-e.handR[c])*o;ps(t,e,i.sx+.19,i.sy-.12-.03*l,.34,Pl);for(let c=0;c<3;c++)e.handL[c]+=(Pl[c]-e.handL[c])*a;return e}var ln=qn();function Ky(n,t,e){let i=n/be.roll.duration,s=io(i,0,.15,.75,1),r=$n(t);Dl(0,t,ln);let o=(a,l)=>a+(l-a)*s;e.hipsY=o(ln.hipsY,.45),e.lean=o(ln.lean,1.3),e.twist=0,e.headYaw=0,e.headPitch=o(ln.headPitch,.35),e.squash=o(1,.9),e.elbows=1;for(let a=-1;a<=1;a+=2){let l=Ks(e,a),c=Ks(ln,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?e.footL:e.footR,d=a>0?ln.footL:ln.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return e}function jy(n,t,e){return Xf(n,t,e),e.hipsY-=.12,e.lean+=.15,e}var Qy=.25,tM=.85,eM=.82;function qf(n,t,e){let i=$n(t),s=Tn*n/be.coverLow.duration;return e.hipsY=Qy+.006*Math.sin(s),e.lean=tM+.015*Math.sin(s+.4),e.twist=.03*Math.sin(s+.6),e.headYaw=.04*Math.sin(s),e.headPitch=-.55+.03*Math.sin(2*s+1),e.squash=eM,e.elbows=1,je(e.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),je(e.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),je(e.footL,i.fx+.08,0,.12),je(e.footR,-i.fx-.08,0,.12),e}function $f(n,t,e,i){let s=$n(n),r=i/be[e].duration,o=Math.sin(Tn*r);return t.hipsY+=.012*Math.cos(2*Tn*r),t.footL[0]+=.06*o,t.footR[0]+=.06*o,t.footL[1]=.09*Math.max(0,o),t.footR[1]=.09*Math.max(0,-o),t.twist+=.03*o,s}function nM(n,t,e){return qf(0,t,e),$f(t,e,"coverLowMove",n),e}function Zf(n,t,e){let i=$n(t),s=Tn*n/be.coverTall.duration;return e.hipsY=t.hipHeight-.012+.006*Math.sin(s),e.lean=.07+.01*Math.sin(s+.4),e.twist=.02*Math.sin(s+.6),e.headYaw=.05*Math.sin(s),e.headPitch=0+.02*Math.sin(2*s+1),e.squash=1+.006*Math.sin(s),e.elbows=1,ps(t,e,i.sx+.14,i.sy+0,.31,e.handL),ps(t,e,-i.sx-.14,i.sy+0,.31,e.handR),je(e.footL,i.fx,0,.015),je(e.footR,-i.fx,0,-.015),e}function iM(n,t,e){return Zf(0,t,e),$f(t,e,"coverTallMove",n),e}function sM(n,t,e){return Yf(n*(be.aim.duration/be.coverPop.duration),t,e),e.hipsY-=.07,e.lean+=.06,e.footL[2]+=.04,e.footR[2]-=.04,e.footL[0]+=.04,e.footR[0]-=.04,e}function rM(n,t,e){let i=n/be.vault.duration,s=io(i,0,.3,.7,1),r=$n(t);Dl(0,t,ln);let o=(a,l)=>a+(l-a)*s;e.hipsY=o(ln.hipsY,t.hipHeight-.02),e.lean=o(ln.lean,.55),e.twist=0,e.headYaw=0,e.headPitch=o(ln.headPitch,-.25),e.squash=1,e.elbows=1;for(let a=-1;a<=1;a+=2){let l=Ks(e,a),c=Ks(ln,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?e.footL:e.footR,d=a>0?ln.footL:ln.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return e}var oM=.05;function xn(n,t,e,i=oM){return Object.freeze({duration:n,loop:t,ease:i,sample:(s,r,o=qn())=>e(s,r,o)})}var be=Object.freeze({idle:xn(2.4,!0,Dl),run:xn(.56,!0,Xf,.008),aim:xn(1.6,!0,Yf),flinch:xn(zh,!1,Zy),talk:xn(2.4,!0,Jy),roll:xn(.55,!1,Ky,.02),sprint:xn(.56,!0,jy,.008),coverLow:xn(2.4,!0,qf),coverLowMove:xn(.5,!0,nM),coverTall:xn(2.4,!0,Zf),coverTallMove:xn(.5,!0,iM),coverPop:xn(1.6,!0,sM),vault:xn(.5,!1,rM,.02)}),Nl=Il/be.run.duration;function so(n,t,e,i){let s=Object.prototype.hasOwnProperty.call(be,n)?be[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?t:Math.min(Math.max(t,0),s.duration);return s.sample(r,e,i||qn())}function Ul(n,t,e,i=qn()){if(!(e>0))return Gf(n,i);if(e>=1)return Gf(t,i);let s=1-e;i.hipsY=n.hipsY*s+t.hipsY*e,i.lean=n.lean*s+t.lean*e,i.twist=n.twist*s+t.twist*e,i.headYaw=n.headYaw*s+t.headYaw*e,i.headPitch=n.headPitch*s+t.headPitch*e,i.squash=n.squash*s+t.squash*e,i.elbows=n.elbows*s+t.elbows*e;for(let r=0;r<4;r++){let o=n[no[r]],a=t[no[r]],l=i[no[r]];l[0]=o[0]*s+a[0]*e,l[1]=o[1]*s+a[1]*e,l[2]=o[2]*s+a[2]*e}return i}var aM=.05,di=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],ro=["handL","handR","footL","footR"],Hh=di.length+ro.length*3,js=[.35,-.2,-.8],Gh=[.75,-.85,-.15];function Le(n,t){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let e=new jt(t),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Se(s,3)),n}var lM=new fe,An=(n,t,e,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(lM.compose(new N(t,e,i),new nn().setFromEuler(new on(s,r,o)),new N(a,l,c)));function ms(n=20,t=14){let e=new bn(1,n,t);return e.deleteAttribute("uv"),e.deleteAttribute("normal"),Af(e)}function Vh(n,t,e){let i=ms(t,e),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Ol(n,t,e){let i=t[0]-n[0],s=t[1]-n[1],r=t[2]-n[2],o=Math.hypot(i,s,r),a=new Sn(e,e,o,6,1),l=new nn().setFromUnitVectors(new N(0,1,0),new N(i/o,s/o,r/o));return a.applyMatrix4(new fe().compose(new N((n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2),l,new N(1,1,1))),a}function Bl(n,t){let e=Ci(n,!1);if(!e)throw new Error(`rig: could not merge the ${t} parts`);$s(e),e.computeBoundingSphere();let i=new xe(e,gn({color:"#ffffff",vertexColors:!0}));return i.name=t,Xn(i),i}function Wh(n,t,e,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(t)*n.rx,s[1]=o(e)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function cM(n){let t=n.torso,e=n.colors,i=n.outfit,s=(h,d)=>{let u=new Or(h.map(([f,p])=>new Lt(f,p)),22);return u.scale(1,1,t.depth),Le(u,d)},r=[s(t.pants,e.pants),s(t.shirt,e.shirt)],o=t.shirt[t.shirt.length-2][1],a=h=>{let d=t.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return t.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let d=ms(14,10);An(d,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,t.sleeve*1.15,t.sleeve,t.sleeve*1.05),d.computeVertexNormals(),r.push(Le(d,e.shirt))}if(i.collar){let h=new os(.1,.03,8,20);An(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Le(h,e.collar))}if(i.logo){let u=new Sn(.03,.03,.01,12);An(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Le(u,e.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let p of[-1,1]){let _=[p*.075,o-.03,.085],g=[p*.05,.34,l(.05,.34)+.014],m=[p*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Le(Ol(_,g,.008),e.lanyard),Le(Ol(g,m,.008),e.lanyard))}let u=new an(.075,.1,.014);An(u,0,.15,d,-.05,0,.04);let f=new an(.077,.026,.016);An(f,0,.15+.028,d,-.05,0,.04),r.push(Le(u,e.badge),Le(f,e.badgeStripe))}return Bl(r,"torso")}function hM(n){let t=n.head,e=n.hair,i=n.colors,s=n.outfit,r=[],o=Vh((a,l,c,h)=>Wh(t,a,l,c,h),40,28);r.push(Le(o,i.skin),Le(uM(t,e),i.hair));for(let a of[-1,1]){let l=ms(12,8);An(l,a*t.rx*.97,-.03,-.015,0,a*.3,0,t.ear*.45,t.ear,t.ear*.75),l.computeVertexNormals(),r.push(Le(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=ms(12,8);An(c,0,l,dM(t,0,l),0,0,0,t.nose*.9,t.nose*.8,t.nose),c.computeVertexNormals(),r.push(Le(c,i.skin))}if(s.headset){let a=t.ry+e.thickness+.03,l=new rn;l.getPoint=(_,g=new N)=>g.set(Math.cos(Math.PI*_)*(t.rx+e.thickness+.012),Math.sin(Math.PI*_)*a,0);let c=new Br(l,24,.014,6,!1);An(c,0,0,-.03,-.12,0,0),r.push(Le(c,i.headset));for(let _ of[-1,1]){let g=new Sn(.055,.06,.05,14);An(g,_*(t.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Le(g,i.headset))}let h=n.face,d=[t.rx+.035,-.04,0],u=[t.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Le(Ol(d,u,.009),i.headset),Le(Ol(u,f,.009),i.headset));let p=ms(10,8);An(p,f[0],f[1],f[2],0,0,0,.022,.02,.022),p.computeVertexNormals(),r.push(Le(p,i.mic))}return Bl(r,"headMesh")}var Di=48,Fl=12;function uM(n,t){let e=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=hl.smoothstep,r=[],o=(u,f,p)=>{let _=Math.sin(u)*Math.sin(f),g=Math.cos(u),m=Math.sin(u)*Math.cos(f);Wh(n,_,g,m,i);let v=i[0]/(n.rx*n.rx),b=i[1]/(n.ry*n.ry),y=i[2]/(n.rz*n.rz),S=Math.hypot(v,b,y)||1;v/=S,b/=S,y/=S;let E=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(m+.3,0),x=t.quiff?t.lift*Math.max(m,0)*s(i[1],.12,.26)*(1-.5*_):0,M=t.back*Math.max(-m,0)*s(i[1],-.15,.1),R=p?-.01:t.thickness*(1-.55*Math.min(E,1))+x+M;r.push(i[0]+v*R,i[1]+b*R,i[2]+y*R)},a=u=>{let f=0,p=Math.PI;for(let _=0;_<40;_++){let g=(f+p)/2,m=Math.sin(g)*Math.sin(u),v=Math.sin(g)*Math.cos(u);Wh(n,m,Math.cos(g),v,i),i[1]>e(m,v)?f=g:p=g}return f};o(0,0,!1);let l=[];for(let u=0;u<Di;u++)l.push(a(u/Di*Math.PI*2));for(let u=1;u<=Fl+1;u++)for(let f=0;f<Di;f++){let p=f/Di*Math.PI*2,_=u>Fl;o(_?l[f]+.03:l[f]*(u/Fl),p,_)}let c=(u,f)=>1+(u-1)*Di+f%Di,h=[];for(let u=0;u<Di;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Fl;u++)for(let f=0;f<Di;f++){let p=c(u,f),_=c(u,f+1),g=c(u+1,f),m=c(u+1,f+1);h.push(p,g,m,p,m,_)}let d=new Ee;return d.setAttribute("position",new de(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function dM(n,t,e){let i=1-Math.pow(Math.abs(t/n.rx),n.power)-Math.pow(Math.abs(e/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function Jf(n,t){let e=n.hand.radius,i=n.colors,s=ms(14,10);An(s,0,e*.75,0,0,0,0,e*.78,e*1.1,e*.95),s.computeVertexNormals();let r=ms(10,8);return An(r,e*.3,e*.45,t*e*.75,t*-.6,0,.3,e*.34,e*.55,e*.34),r.computeVertexNormals(),Bl([Le(s,i.skin),Le(r,i.skin)],t>0?"handL":"handR")}function Kf(n,t){let e=n.shoe,i=n.colors,s=e.width/2,r=e.length/2,o=e.length*.18,a=.03,l=Vh((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,e.height*.55+d*e.height*.6-Math.max(u,0)*e.height*.25),f[2]=o+u*r*.96},20,12),c=Vh((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return Bl([Le(l,i.shoe),Le(c,i.sole)],t>0?"footL":"footR")}function kl(n){let t=new Re;t.name=n.name||"character";let e=new Re;e.name="body",t.add(e);let i=new Re;i.name="hips",i.rotation.order="YXZ";let s=cM(n);i.add(s);let r=new Re;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=hM(n);o.position.y=n.head.centerY,r.add(o);let a=Hf({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),e.add(i);let l=[Jf(n,1),Jf(n,-1)],c=[Kf(n,1),Kf(n,-1)],h=[0,1].map(()=>Uh({radius:n.armRadius,color:n.colors.skin})),d=[0,1].map(()=>Uh({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",e.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=bl({rx:.45,rz:.38,opacity:.55});t.add(u);let f=qn(),p=qn(),_=[];for(let G=0;G<Hh;G++)_.push({x:0,v:0});let g=!1,m=aM,v=(G,pt)=>pt<di.length?G[di[pt]]:G[ro[(pt-di.length)/3|0]][(pt-di.length)%3];function b(G,pt,gt){pt<di.length?G[di[pt]]=gt:G[ro[(pt-di.length)/3|0]][(pt-di.length)%3]=gt}function y(G,pt){pt>=0&&(m=pt),f.hipsY=G.hipsY,f.lean=G.lean,f.twist=G.twist,f.headYaw=G.headYaw,f.headPitch=G.headPitch,f.squash=G.squash,f.elbows=G.elbows>=0?G.elbows:0;for(let gt=0;gt<4;gt++){let O=G[ro[gt]],ut=f[ro[gt]];ut[0]=O[0],ut[1]=O[1],ut[2]=O[2]}if(!g){g=!0;for(let gt=0;gt<Hh;gt++)_[gt].x=v(f,gt),_[gt].v=0}}let S=[0,0,0],E=[0,0,0],x=[0,0,0],M=[0,0,0],R={mid:[0,0,0],end:[0,0,0],stretch:1},C=new N,I=new N,F=new N,H=new fe,P=n.armLength/2,B=n.legLength/2,W=n.ankleHeight;function z(G,pt,gt){let O=Math.cos(p.twist),ut=Math.sin(p.twist);M[0]=G*O+gt*ut,M[1]=pt,M[2]=-G*ut+gt*O}function it(){let G=p.squash>.2?p.squash:.2,pt=1/Math.sqrt(G);e.scale.set(pt,G,pt),i.position.set(0,p.hipsY,0),i.rotation.set(p.lean,p.twist,0),r.rotation.set(p.headPitch,p.headYaw,0);for(let gt=0;gt<2;gt++){let O=gt===0?1:-1;Ll(n,p,gt===0?n.shoulderL:n.shoulderR,S);let ut=p.elbows<0?0:p.elbows>1?1:p.elbows;z(O*(js[0]+(Gh[0]-js[0])*ut),js[1]+(Gh[1]-js[1])*ut,js[2]+(Gh[2]-js[2])*ut),Nh(S,gt===0?p.handL:p.handR,P,P,M,R),h[gt].set(S,R.mid,R.end,R.stretch);let At=l[gt];At.position.set(R.end[0],R.end[1],R.end[2]),C.set(R.end[0]-R.mid[0],R.end[1]-R.mid[1],R.end[2]-R.mid[2]),C.lengthSq()<1e-10&&C.set(0,-1,0),C.normalize(),I.set(-O*Math.cos(p.twist),0,O*Math.sin(p.twist)),I.addScaledVector(C,-I.dot(C)),I.lengthSq()<1e-4&&I.set(0,0,1).addScaledVector(C,-C.z),I.normalize(),F.crossVectors(I,C),H.makeBasis(I,C,F),At.quaternion.setFromRotationMatrix(H),Ll(n,p,gt===0?n.hipL:n.hipR,E);let Ft=gt===0?p.footL:p.footR;x[0]=Ft[0],x[1]=Ft[1]+W,x[2]=Ft[2],z(O*.15,0,1),Nh(E,x,B,B,M,R),d[gt].set(E,R.mid,R.end,R.stretch);let q=c[gt];q.position.set(R.end[0],R.end[1]-W,R.end[2]),q.rotation.set(Math.min(Math.max(R.end[1]-W,0),.3)*1.1,p.twist*.3,0)}}function V(G){if(g)for(let pt=0;pt<Hh;pt++)En(_[pt],v(f,pt),m,G),b(p,pt,_[pt].x);it(),a.update(G)}so("idle",0,n,p),it();function J(){t.traverse(G=>{!G.isMesh||G.userData.isOutline||(G.geometry.dispose(),G!==u&&G.material.dispose())}),t.removeFromParent()}return{root:t,spec:n,face:a,setPose:y,update:V,dispose:J,shadow:u}}var fM=.15,pM=.03,jf=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function zl(n){let t=n.spec,e="idle",i=0,s="idle",r=0,o=0,a=be[e].ease,l=qn(),c=qn(),h=so(e,0,t);Ul(h,h,1,l);function d(p,{fade:_}={}){Object.prototype.hasOwnProperty.call(be,p)&&(p===e&&be[p].loop||(p==="flinch"&&e!=="flinch"&&(s=e),Ul(h,h,1,l),a=u(),r=_===void 0?p==="flinch"?pM:fM:Math.max(_,0),o=0,e=p,i=0,n.face.setTalking(p==="talk")))}function u(){let p=r>0?jf(o/r):1;return a+(be[e].ease-a)*p}function f(p){let _=be[e];if(i+=p,o+=p,_.loop)i>=_.duration&&(i-=_.duration*Math.floor(i/_.duration));else if(i>=_.duration)return d(s),f(0);so(e,i,t,c),Ul(l,c,r>0?jf(o/r):1,h),n.setPose(h,u())}return{play:d,update:f,current:()=>e}}function Hl(n,t,e){let i=parseInt(n.slice(1),16),s=parseInt(t.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*e)<<o}return"#"+r.toString(16).padStart(6,"0")}function Qf(n){for(let t of Object.values(n))t&&typeof t=="object"&&Qf(t);return Object.freeze(n)}var Xh=vt.glorpPurple,Ni=Qf({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:Xh,collar:Hl(Xh,vt.ink,.25),logo:vt.gel,pants:Hl(vt.planet,vt.ink,.3),skin:vt.daleSkin,hair:vt.daleHair,shoe:Hl(vt.ink,Xh,.3),sole:vt.cream,lanyard:vt.hotPink,badge:vt.cream,badgeStripe:vt.teal,headset:Hl(vt.ink,vt.lilac,.25),mic:vt.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var mM=1.5,gM=8,xM=-.2,_M=1.3,tp=.6,vM=Math.atan2(1.3,-4),yM=new N(-.45,.22,-1).applyEuler(new on(-.2,.68,0)).toArray(),ep=10,MM=.8,SM=.05,bM=["idle","run","aim","flinch","talk"],oo=Object.keys(fs),np=(n,t,e)=>Math.min(e,Math.max(t,n));function wM(n,t,e,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(t)*e,i[1]=Math.sin(t)*e,i[2]=Math.cos(n)*Math.cos(t)*e,i}function EM(n,t,e=re.camera){let i=Math.sin(t),s=Math.cos(t),r=-Math.cos(t),o=Math.sin(t),a=[n[0]+r*e.right-i*e.back,n[1]+e.up,n[2]+o*e.right-s*e.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function ip({canvas:n,gl:t}){let e=vl(n,t),i=e.renderer,s=_l(n),r=document.getElementById("cr-readout"),o=new ts,a=new Xe(re.camera.fov,1,.1,100),l=yl({planetDir:yM});o.add(l.mesh);let c=Of();o.add(c.group);let h=[];function d(q,wt,Gt){let Ot=kl(Gt===void 0?Ni:{...Ni,face:{...Ni.face,seed:Gt}});Ot.root.position.set(q,0,wt),Ot.root.rotation.y=tp,o.add(Ot.root);let Jt=zl(Ot),te={rig:Ot,anim:Jt};return h.push(te),te}let u=d(c.spawn[0],c.spawn[2]),f=[],p=!1,_=0,g=!0,m=!1,v=.685,b=.1,y=4.6,S=!1,E=new N(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),x=[0,0,0];function M(q){if(!(!bM.includes(q)&&!Object.prototype.hasOwnProperty.call(be,q))){u.anim.play(q);for(let wt of f)wt.anim.play(p?"run":q)}}function R(q){let wt=oo.indexOf(q);if(!(wt<0)){_=wt;for(let Gt of h)Gt.rig.face.setExpression(q)}}function C(q){g=!!q,Th(o,g)}function I(q){m=!!q,u.rig.root.rotation.y=m?vM:tp}function F(q){if(q=!!q,q!==p)if(p=q,q){let wt=c.spawn[2]+2.4;for(let Gt=0;Gt<ep;Gt++){let Ot=c.spawn[0]+(Gt-(ep-1)/2)*MM,Jt=d(Ot,wt,10+Gt);Jt.anim.play("run"),Jt.rig.face.setExpression(oo[_]),f.push(Jt)}Th(o,g)}else{for(let wt of f)wt.rig.dispose(),h.splice(h.indexOf(wt),1);f=[]}}function H(){let q=e.resize();a.aspect=q.aspect,a.updateProjectionMatrix()}H(),window.addEventListener("resize",H),n.addEventListener("mousedown",q=>{q.button===0&&(S=!0)}),window.addEventListener("mouseup",()=>{S=!1}),window.addEventListener("mousemove",q=>{S&&!s.isLocked()&&P(q.movementX||0,q.movementY||0,.006)}),n.addEventListener("wheel",q=>{y=np(y*Math.exp(q.deltaY*.001),mM,gM)},{passive:!0});function P(q,wt,Gt){v-=q*Gt,b=np(b+wt*Gt,xM,_M)}window.addEventListener("keydown",q=>{q.repeat||(q.code==="Digit4"?M("flinch"):q.code==="Digit5"?M("talk"):q.code==="KeyO"?C(!g):q.code==="KeyP"?F(!p):q.code==="KeyL"?s.requestLock():q.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let B=0,W=0,z=0,it=0,V=0,J=0,G=null,pt=0;window.__cr.stats=()=>({fps:B,ms:W,calls:V,tris:J,scale:e.scale(),characters:h.length}),window.__cr.anim=M,window.__cr.orbit=(q,wt,Gt)=>{v=q,b=wt,Gt&&(y=Gt)},window.__cr.expression=R,window.__cr.perf=F,window.__cr.gameCam=I,window.__cr.outlines=C;function gt(q){q.pressed.weapon1&&M("idle"),q.pressed.weapon2&&M("run"),q.pressed.weapon3&&M("aim"),q.pressed.interact&&R(oo[(_+1)%oo.length]),q.pressed.grenade&&I(!m)}function O(){if(m){let q=EM([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(q.pos),a.lookAt(q.look[0],q.look[1],q.look[2])}else wM(v,b,y,x),a.position.set(E.x+x[0],E.y+x[1],E.z+x[2]),a.lookAt(E)}let ut=q=>q.toFixed(2);function At(){let q=G?Object.keys(G.held).filter(Ot=>G.held[Ot]).join(" "):"",wt=s.padStatus(),Gt=G&&wt!=="none"&&wt!=="unrecognised controller"?`Gamepad: ${wt}
  move ${ut(G.moveX)}, ${ut(G.moveY)}  look ${ut(G.lookX)}, ${ut(G.lookY)}
  held: ${q||"nothing"}`:`Gamepad: ${wt}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${oo[_]}   camera: ${m?"game":"orbit"}   outlines: ${g?"on":"off"}`,`${Math.round(B)} fps   ${ut(W)} ms   scale ${e.scale()}`,`${V} draw calls   ${J} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${G?Math.round(G.lookDX):0}, ${G?Math.round(G.lookDY):0}`,Gt].join(`
`)}let Ft=xl({step(){},render(q,wt){let Gt=Math.min(wt,SM);G=s.poll(),gt(G),s.isLocked()&&!m&&P(G.lookDX,G.lookDY,.003),m||P(G.lookX*600*Gt,G.lookY*600*Gt,.004),l.update(performance.now()/1e3),c.update(Gt);for(let Ot of h)Ot.anim.update(Gt),Ot.rig.update(Gt);O(),i.render(o,a),V=i.info.render.calls,J=i.info.render.triangles,z++,it+=wt,it>=1&&(B=z/it,W=it/z*1e3,z=0,it=0),pt+=wt,pt>=.1&&(pt=0,At()),e.frameDone(wt*1e3)}});O(),i.render(o,a),V=i.info.render.calls,J=i.info.render.triangles,At(),Ft.start()}function sp(){let n=!1,t=0,e=.18;return{update(i,s,r,o){return e=o,n?(t+=r,i?!1:(n=!1,t<=o)):s?i?(n=!0,t=r,!1):!0:!1},holding(){return n&&t>e},reset(){n=!1,t=0}}}function Ue(n,t,e="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...t]),kind:e})}var Yh=1e-9;function rp(n,t,e,i,s){let r=[t[0],t[1],t[2]],o=t[1]+.05,a=t[1]+s,l=n.filter(g=>g.max[1]>o&&g.min[1]<a),c=Math.hypot(e[0],e[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=e[0]/h,u=e[2]/h,f=!1,p=0,_=0;for(let g=0;g<h;g++){let m=r[0],v=r[2];r[0]+=d,r[2]+=u;let b=!1;for(let y=0;y<5;y++){let S=null,E=Yh;for(let x of l){let M=Math.max(x.min[0],Math.min(r[0],x.max[0])),R=Math.max(x.min[2],Math.min(r[2],x.max[2])),C=r[0]-M,I=r[2]-R,F=Math.hypot(C,I),H,P,B;if(F>Yh){if(F>=i)continue;H=i-F,P=C/F,B=I/F}else{let W=[[r[0]-x.min[0],-1,0],[x.max[0]-r[0],1,0],[r[2]-x.min[2],0,-1],[x.max[2]-r[2],0,1]],z=W[0];for(let it of W)it[0]<z[0]&&(z=it);H=z[0]+i,P=z[1],B=z[2]}H>E&&(E=H,S=[P,B])}if(!S){b=!0;break}if(y===4)break;r[0]+=S[0]*E,r[2]+=S[1]*E,f=!0,p=S[0],_=S[1]}b||(r[0]=m,r[2]=v,f=!0)}return f||(r[0]=t[0]+e[0],r[2]=t[2]+e[2]),{pos:r,hit:f,normal:[p,0,_]}}function Ui(n,t,e,i){let s=1,r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<Yh)(t[h]<d||t[h]>u)&&(c=!1);else{let f=(d-t[h])/r[h],p=(u-t[h])/r[h];if(f>p){let _=f;f=p,p=_}f>a&&(a=f),p<l&&(l=p),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function op(n,t,e=0){for(let i of n)if(t[0]>=i.min[0]-e&&t[0]<=i.max[0]+e&&t[1]>=i.min[1]-e&&t[1]<=i.max[1]+e&&t[2]>=i.min[2]-e&&t[2]<=i.max[2]+e)return!0;return!1}var qh=["fov","right","up","back"],ap=Math.PI*2,TM=Object.freeze(["normal","aim","sprint","coverLow","coverTall"]),hp=n=>n!=="normal"&&TM.includes(n);function lp(n,t,e={}){let i=hp(t)&&n[t]&&typeof n[t]=="object"?n[t]:null;for(let s of qh)e[s]=i&&i[s]!==void 0?i[s]:n[s];return e}function cp(n,t){let e=hp(t)?n[t]:null;return e&&typeof e=="object"&&e.shakeWeight>0?e.shakeWeight:0}function up(n,t,e,i=0){return t?n>=e:n>=e+i}function dp({tuning:n=re.camera,look:t=re.look}={}){let e={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r=[0,0,0],o={x:0,v:0},a=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],l={},c=[0,0,0],h=[0,0,0],d=[0,0,0],u=[0,0,0],f=[0,0,1],p={pos:u,dir:f,fov:70},_=1,g=0,m=!1;return{yaw:0,pitch:0,look(b,y,S,E,x,M){let R=M?t.aimScale:1,C=t.invertY?-1:1;this.yaw-=b*t.mouse*R,this.pitch-=y*t.mouse*R*C;let I=t.pad;S&&(this.yaw-=Math.sign(S)*Math.abs(S)**I.expo*I.yawRate*R*x),E&&(this.pitch-=Math.sign(E)*Math.abs(E)**I.expo*I.pitchRate*R*x*C),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},bump(b=1){let y=n.bump;!y||!(y.amount>0)||!(b>0)||(s.x=Math.min(s.x+y.amount*b,2*y.amount))},snap(b,y,S="normal",E=1){y!==void 0&&(this.yaw=y),lp(n,S,l);for(let x of qh)e[x].x=l[x],e[x].v=0;i.x=E,i.v=0,o.x=cp(n,S),o.v=0;for(let x=0;x<3;x++)a[x].x=b[x],a[x].v=0;s.x=0,s.v=0,_=1,m=!0},update(b,{target:y,mode:S="normal",side:E=1},x){m||this.snap(y,this.yaw,S,E),b>0||(b=0),g+=b,lp(n,S,l);for(let O of qh)En(e[O],l[O],n.blendHalfLife,b);En(o,cp(n,S),n.blendHalfLife,b),En(i,E,n.sideHalfLife,b);for(let O=0;O<3;O++)En(a[O],y[O],n.followHalfLife,b);En(s,0,n.bump?n.bump.halfLife:0,b);let M=this.yaw,R=this.pitch,C=Math.sin(M),I=Math.cos(M),F=Math.sin(R),H=Math.cos(R),P=n.probeRadius,B=e.back.x;c[0]=a[0].x,c[1]=a[1].x+e.up.x,c[2]=a[2].x,r[0]=y[0],r[1]=y[1]+e.up.x,r[2]=y[2];let W=Ui(x,r,c,P);if(W<1)for(let O=0;O<3;O++)c[O]=r[O]+(c[O]-r[O])*W;let z=e.right.x*i.x;h[0]=c[0]-I*z,h[1]=c[1],h[2]=c[2]+C*z;let it=Ui(x,c,h,P);for(let O=0;O<3;O++)h[O]=c[O]+(h[O]-c[O])*it;f[0]=C*H,f[1]=F,f[2]=I*H;for(let O=0;O<3;O++)d[O]=h[O]-f[O]*B;let V=Ui(x,h,d,P),J=B>1e-6?Math.max(n.minBack/B,V):1;J>1&&(J=1),J<_?_=J:_+=(J-_)*(n.wallReturnHalfLife>0?1-Math.pow(2,-b/n.wallReturnHalfLife):1);let G=B*_-s.x;for(let O=0;O<3;O++)u[O]=h[O]-f[O]*G;let pt=Ui(x,c,u,P);if(pt<1)for(let O=0;O<3;O++)u[O]=c[O]+(u[O]-c[O])*pt;let gt=n.shake;if(gt&&gt.amp&&o.x>0){let O=gt.amp*(o.x>1?1:o.x),ut=Math.sin(ap*gt.hz*g)*O,At=Math.sin(ap*gt.hz*1.3*g+1)*O,Ft=-I,q=C;u[0]+=Ft*ut-q*f[1]*At,u[1]+=(q*f[0]-Ft*f[2])*At,u[2]+=q*ut+Ft*f[1]*At}return p.fov=e.fov.x,p}}}var pp=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(pp)),n),Fi=.3,AM=[Ue([-12,-1,-12],[12,0,12],"floor"),Ue([-12-Fi,0,-12-Fi],[12+Fi,4,-12]),Ue([-12-Fi,0,12],[12+Fi,4,12+Fi]),Ue([-12-Fi,0,-12],[-12,4,12]),Ue([12,0,-12],[12+Fi,4,12]),Ue([5,0,-9],[5.3,4,-3]),Ue([6.7,0,-9],[7,4,-3]),Ue([-11,0,-7.3],[-6,3,-7]),Ue([-6.3,0,-11],[-6,3,-7]),Ue([-4,0,-3],[-2,1,-2.4],"low"),Ue([3,0,3],[3.6,1,5],"low"),Ue([-5,0,3],[-3.8,2.2,3.6],"tall"),Ue([1,0,-6],[1.6,2.2,-4],"tall"),Ue([-9.4,0,.6],[-8.6,4,1.4],"pillar"),Ue([8.6,0,3.6],[9.4,4,4.4],"pillar"),Ue([-9,0,6.5],[-6,1,7.1],"low"),Ue([-4,0,6.5],[-1,1,7.1],"low"),Ue([6,0,6],[10,2.2,6.6],"tall"),Ue([-12,0,-1],[-10,1,-.4],"low")],mp=[];for(let n=0;n<=12;n++)mp.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var Qs=pp({boxes:AM,marks:mp,coverExclude:[],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI}}}),fp={wall:vt.lilac,low:vt.teal,tall:vt.hotPink,pillar:vt.cream};function $h(n){let t=n.map(e=>{let i=new an(e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]);return i.translate((e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,(e.min[2]+e.max[2])/2),i});return Ci(t,!1)}var Oi=.03,Bi=.3,ki=.12,Gl=2;function RM(n=Qs){let t=n.boxes.find(c=>c.kind==="floor");if(!t)return[];let[e,,i]=t.min,[s,,r]=t.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([e,0,i],[s,Bi,i+Oi]),l([e,0,r-Oi],[s,Bi,r]),l([e,0,i],[e+Oi,Bi,r]),l([s-Oi,0,i],[s,Bi,r]);for(let c=e+Gl;c<s-.5;c+=Gl)l([c-ki/2,Bi,i],[c+ki/2,o,i+Oi]),l([c-ki/2,Bi,r-Oi],[c+ki/2,o,r]);for(let c=i+Gl;c<r-.5;c+=Gl)l([e,Bi,c-ki/2],[e+Oi,o,c+ki/2]),l([s-Oi,Bi,c-ki/2],[s,o,c+ki/2]);return a}function gp(n=Qs){let t=new Re;t.add(Sl({w:24,d:24}));for(let i of Object.keys(fp)){let s=n.boxes.filter(o=>o.kind===i);if(!s.length)continue;let r=new xe($s($h(s)),gn({color:fp[i]}));r.name=`grey-${i}`,Xn(r),t.add(r)}let e=RM(n);if(e.length){let i=new xe($h(e),gn({color:vt.shadowTint}));i.name="grey-wall-trim",t.add(i)}if(n.marks.length){let i=new xe($h(n.marks),gn({color:vt.hotPink}));i.name="grey-marks",t.add(i)}return{group:t,boxes:n.boxes,update(i){}}}var zi=class n{constructor(t,e,i,s,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Zh=class extends zi{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Jh(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}var CM={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Jh,toHexString:Jh},lo={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},PM={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,t,e=1){let i=lo.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([n,t,e],i=1){i=255/i;let s=n*i<<16^t*i<<8^e*i<<0;return lo.toHexString(s)}},IM={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){let i=lo.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:n,g:t,b:e},i=1){i=255/i;let s=n*i<<16^t*i<<8^e*i<<0;return lo.toHexString(s)}},LM=[CM,lo,PM,IM];function DM(n){return LM.find(t=>t.match(n))}var Kh=class extends zi{constructor(t,e,i,s){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=DM(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Jh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},ao=class extends zi{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},jh=class extends zi{constructor(t,e,i,s,r,o){super(t,e,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))},o=!1,a,l,c,h,d,u=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",_)},p=v=>{if(o){let b=v.clientX-a,y=v.clientY-l;Math.abs(y)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>u&&_()}if(!o){let b=v.clientY-c;d-=b*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let t=(m,v,b,y,S)=>(m-v)/(b-v)*(S-y)+y,e=m=>{let v=this.$slider.getBoundingClientRect(),b=t(m,v.left,v.right,this._min,this._max);this._snapClampSetValue(b)},i=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=m=>{if(o){let v=m.touches[0].clientX-a,b=m.touches[0].clientY-l;Math.abs(v)>Math.abs(b)?c(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else m.preventDefault(),e(m.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),p=400,_,g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();let b=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Qh=class extends zi{constructor(t,e,i,s){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{let i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}},tu=class extends zi{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},NM=`.lil-gui {
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
}`;function UM(n){let t=document.createElement("style");t.innerHTML=n;let e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}var xp=!1,Vl=class n{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!xp&&a&&(UM(NM),xp=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,i,s,r){if(Object(i)===i)return new Qh(this,t,e,i);let o=t[e];switch(typeof o){case"number":return new jh(this,t,e,i,s,r);case"boolean":return new Zh(this,t,e);case"string":return new tu(this,t,e);case"function":return new ao(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new Kh(this,t,e,i)}addFolder(t){let e=new n({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof ao||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ao)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};var xt=(n,t,e,i)=>({path:n,min:t,max:e,step:i}),co=Object.freeze([xt("move.jog",1,10,.1),xt("move.aimWalk",.5,6,.1),xt("move.sprint",2,14,.1),xt("move.accelTime",.01,.6,.01),xt("move.stopTime",.01,.6,.01),xt("move.turnRate",1,40,.5),xt("move.aimTurnRate",1,40,.5),xt("move.sprintTurnRate",.2,20,.1),xt("move.rollDistance",1,12,.1),xt("move.rollTime",.2,1.5,.01),xt("move.rollEase",1,4,.05),xt("move.rollBuffer",0,.5,.01),xt("move.tapMax",.05,.5,.01),xt("move.stickSprintMin",0,1,.05),xt("move.faceMinSpeed",0,2,.05),xt("move.sprintHeadingMinSpeed",0,3,.05),xt("move.runClipMinSpeed",0,2,.05),xt("move.runRateMin",.1,2,.05),xt("move.runRateMax",.5,4,.05),xt("move.sprintRateMin",.1,2,.05),xt("move.sprintRateMax",.5,4,.05),xt("camera.fov",40,110,1),xt("camera.right",-1.5,1.5,.01),xt("camera.up",.5,3,.01),xt("camera.back",.5,6,.05),xt("camera.aim.fov",20,90,1),xt("camera.aim.back",.3,5,.05),xt("camera.sprint.fov",50,120,1),xt("camera.sprint.up",.3,3,.01),xt("camera.sprint.back",.5,6,.05),xt("camera.sprint.shakeWeight",0,3,.05),xt("camera.coverLow.fov",50,120,1),xt("camera.coverLow.right",-1.5,1.5,.01),xt("camera.coverLow.up",.3,3,.01),xt("camera.coverLow.back",.5,6,.05),xt("camera.coverTall.fov",50,120,1),xt("camera.coverTall.right",-1.5,1.5,.01),xt("camera.coverTall.up",.3,3,.01),xt("camera.coverTall.back",.5,6,.05),xt("camera.bump.amount",0,.6,.01),xt("camera.bump.halfLife",.01,.3,.005),xt("camera.blendHalfLife",0,.5,.005),xt("camera.followHalfLife",0,.5,.005),xt("camera.sideHalfLife",0,.6,.005),xt("camera.headHideDist",0,2,.05),xt("camera.headHideMargin",0,1,.01),xt("camera.shake.amp",0,.15,.001),xt("camera.shake.hz",1,30,.5),xt("camera.probeRadius",.05,.6,.01),xt("camera.minBack",0,2,.01),xt("camera.wallReturnHalfLife",0,1,.01),xt("camera.pitchMin",-1.5,0,.01),xt("camera.pitchMax",0,1.5,.01),xt("look.mouse",5e-4,.008,1e-4),xt("look.pad.yawRate",.5,10,.1),xt("look.pad.pitchRate",.5,10,.1),xt("look.pad.expo",1,3,.05),xt("look.aimScale",.1,1.5,.01),{path:"look.invertY"},xt("cover.grabRange",0,5,.05),xt("cover.grabAngle",0,180,1),xt("cover.grabViewAngle",0,180,1),xt("cover.grabSlack",0,5,.05),xt("cover.grabMinTilt",0,1,.05),xt("cover.gap",0,5,.01),xt("cover.endInset",0,5,.01),xt("cover.minLength",0,5,.05),xt("cover.slideSpeed",0,30,.5),xt("cover.slideMinTime",0,2,.01),xt("cover.slideMaxTime",0,2,.01),xt("cover.slideTurnRate",1,60,.5),xt("cover.moveSpeed",0,30,.1),xt("cover.alongDeadzone",0,1,.05),xt("cover.leaveTilt",0,1,.05),xt("cover.leaveAngle",0,180,1),xt("cover.endLeaveTime",0,2,.01),xt("cover.cornerZone",0,5,.05),xt("cover.popTime",0,2,.01),xt("cover.popShift",0,5,.05),xt("cover.pushAngle",0,180,1),xt("cover.lowDrawBack",0,1,.01),xt("cover.vaultTime",0,2,.01),xt("cover.vaultMaxDepth",0,5,.05),xt("cover.vaultHop",0,5,.05),xt("cover.vaultExitSpeed",0,30,.1),xt("cover.swapRange",0,5,.05),xt("cover.swapSpeed",0,30,.5),xt("cover.swapAngle",0,180,1),xt("cover.swapMaxOffset",0,5,.05),xt("cover.slamSquash",0,1,.01),xt("cover.slamSquashTime",0,2,.01),xt("cover.thudVolume",0,1,.05),xt("cover.autoSlam",0,1,1),xt("cover.autoAngle",0,90,1),xt("cover.autoDist",0,1,.01),xt("cover.autoMinTilt",0,1,.05),xt("cover.autoMinSpeed",0,12,.1),xt("cover.autoTime",0,1,.01)]),FM=new Map(co.map(n=>[n.path,n])),ho=structuredClone(re);function gs(n,t){let e=n;for(let i of t.split(".")){if(e===null||typeof e!="object")return;e=e[i]}return e}function nu(n,t,e){let i=t.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=e,!0}function iu(n=re,t=ho){let e={};for(let i of co){let s=gs(n,i.path);s!==gs(t,i.path)&&(e[i.path]=s)}return e}function _p(n,t){if(t===null||typeof t!="object"||Array.isArray(t))return 0;let e=0;for(let i of Object.keys(t)){let s=FM.get(i);if(!s)continue;let r=t[i],o=gs(ho,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||nu(n,i,r)&&e++)}return e}function eu(n,t){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>eu(s,t)).join(", ")}]`;let e="  ".repeat(t+1);return`{
${Object.keys(n).map(s=>`${e}${s}: ${eu(n[s],t+1)},`).join(`
`)}
${"  ".repeat(t)}}`}function vp(n=re){return["camera","cover","look","move"].map(t=>`  ${t}: ${eu(n[t],1)},`).join(`
`)}var su="cr-tuning",OM={move:"Move",camera:"Camera",look:"Look",cover:"Cover",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",bump:"Bump",shake:"Shake",pad:"Pad",wall:"Wall"},BM=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function yp(n){let t=n.split("."),e=t.slice(0,-1);return e.length===1&&e[0]==="camera"&&BM.has(t[1])&&e.push("wall"),e}function kM(){try{return window.localStorage}catch{return null}}function Mp({storage:n=kM()}={}){let t=()=>{try{return n?n.getItem(su):null}catch{return null}},e=_=>{try{n&&(_===null?n.removeItem(su):n.setItem(su,_))}catch{}};try{let _=t();_&&_p(re,JSON.parse(_))}catch{}let i=new Vl({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let _=document.activeElement;_&&_!==document.body&&s.contains(_)&&_.blur&&_.blur()}s.addEventListener("click",_=>{let g=_.target;g&&g.closest&&g.closest(".lil-title")&&g.blur!==void 0&&r()});let o=new Map;function a(_){let g=i,m="";for(let v of _){if(m+=`.${v}`,!o.has(m)){let b=g.addFolder(OM[v]||v);b.close(),o.set(m,b)}g=o.get(m)}return g}function l(){let _=iu();e(Object.keys(_).length?JSON.stringify(_):null)}for(let _ of co){let g=_.path.split("."),m=g[g.length-1],v=gs(re,g.slice(0,-1).join(".")),b=typeof gs(ho,_.path)=="boolean"?a(yp(_.path)).add(v,m):a(yp(_.path)).add(v,m,_.min,_.max,_.step);b.onChange(l),b.onFinishChange(r)}let c=null;function h(_){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let g=document.createElement("div");g.textContent="Press Cmd+C to copy",g.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=g,s.appendChild(g),s.appendChild(c)}c.value=_,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(_){c&&(c.hidden=!0,c.note.hidden=!0);let g=null;try{g=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(_):null}catch{g=null}if(!g){h(_);return}g.catch(()=>h(_))}let u={copyChanges(){r(),d(JSON.stringify(iu(),null,2))},copyForFile(){r(),d(vp())},resetAll(){r();for(let _ of co)nu(re,_.path,gs(ho,_.path));e(null),i.controllersRecursive().forEach(_=>_.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function p(_){f=_,s.style.display=_?"":"none"}return p(!1),{toggle(){p(!f)},isOpen:()=>f}}var Sp=Math.PI*2,tr=n=>n-Sp*Math.round(n/Sp),er=(n,t)=>Math.atan2(n,t);function uo(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function fi(n,t){let e=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*e-n.moveX*i,r=-n.moveY*i+n.moveX*e,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),t[0]=s,t[1]=r,Math.min(1,o)}function Hi(n,t,e){let i=tr(t-n);return n+Math.max(-e,Math.min(e,i))}var Zn=1e-9,ru=Math.PI/180,wp=.05,zM=1.8,HM={low:"low",tall:"tall",pillar:"tall"};function Ep(n=re.cover,t=re.move){return{radius:t.radius,gap:n.gap,endInset:n.endInset,minLength:n.minLength}}var GM=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],VM=n=>{for(let t of["a","b","tangent","normal"])Object.freeze(n[t]);return Object.freeze(n)};function Tp(n,{radius:t,gap:e,endInset:i,minLength:s,exclude:r=[]}){let o=t+e,a=[];return n.forEach((l,c)=>{let h=HM[l.kind];if(!h)return;let d=n.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>wp&&u.min[1]<zM);for(let u of GM){let f=u.axis*2,p=2-f,_=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,g=l.min[p],m=l.max[p],v=m-g,b=[];for(let M of d){if(!(_>M.min[f]-o+Zn&&_<M.max[f]+o-Zn))continue;let R=M.min[p]-o-g,C=M.max[p]+o-g;C>Zn&&R<v-Zn&&b.push([Math.max(R,0),Math.min(C,v)])}b.sort((M,R)=>M[0]-R[0]);let y=[];for(let M of b){let R=y[y.length-1];R&&M[0]<=R[1]+Zn?R[1]=Math.max(R[1],M[1]):y.push([M[0],M[1]])}let S=[],E=0,x=!0;for(let[M,R]of y)M>E+Zn&&S.push([E,M,x,!1]),E=R,x=!1;v>E+Zn&&S.push([E,v,x,!0]),S.forEach(([M,R,C,I],F)=>{let H=`${c}${u.name}#${F}`;if(r.includes(H))return;let P=g+M+(C?i:0),B=g+R-(I?i:0),W=B-P;if(W<s-Zn)return;let z=u.axis===0?[_,P]:[P,_],it=u.axis===0?[_,B]:[B,_];a.push(VM({id:H,kind:h,boxIndex:c,a:z,b:it,length:W,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:C,openB:I}))})}}),a}function nr(n,t,e=[0,0]){return e[0]=n.a[0]+n.tangent[0]*t,e[1]=n.a[1]+n.tangent[1]*t,e}function Wl(n,t,e=re.cover){let i=t<=e.cornerZone,s=n.length-t<=e.cornerZone;return i&&s?t<=n.length-t?-1:1:i?-1:s?1:0}function fo(n,t){return t<0?n.openA:n.openB}var bp=.9,Ap=(n,t,e,i)=>Ui(n,[t[0],bp,t[1]],[e[0],bp,e[1]],.9*i)===1;function po(n,t,e,i,s,r,o){let a=Math.cos(r.grabAngle*ru),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*ru,d=null;for(let u of n){let f=(e[0]-u.a[0])*u.normal[0]+(e[2]-u.a[1])*u.normal[1],p=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||p<a||p<=Zn)continue;let _=Math.max(f,0)/p,g=(e[0]+i[0]*_-u.a[0])*u.tangent[0]+(e[2]+i[1]*_-u.a[1])*u.tangent[1];if(g<-r.grabSlack||g>u.length+r.grabSlack)continue;let m=Math.max(0,Math.min(u.length,g)),v=nr(u,m),b=v[0]-e[0],y=v[1]-e[2],S=Math.hypot(b,y);if(!(S>r.grabRange||d&&S>=d.dist)){if(S>.3){let E=(b*l+y*c)/S;if(Math.acos(Math.max(-1,Math.min(1,E)))>h)continue}Ap(t,[e[0],e[2]],v,o)&&(d={edge:u,t:m,point:v,dist:S})}}return d}function Rp(n,t,e,i,s,r,o){if(Wl(e,i,r)!==s||!fo(e,s))return null;let a=nr(e,i),l=Math.cos(r.swapAngle*ru),c=null;for(let h of n){if(h===e||h.normal[0]*e.normal[0]+h.normal[1]*e.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,p=nr(h,f),_=p[0]-a[0],g=p[1]-a[1],m=Math.hypot(_,g);(_*e.tangent[0]+g*e.tangent[1])*s<=0||Math.abs(_*e.normal[0]+g*e.normal[1])>r.swapMaxOffset||m>r.swapRange||c&&m>=c.dist||Ap(t,a,p,o)&&(c={edge:h,t:f,point:p,dist:m})}return c}function WM(n,t,e,i){let s=t[1]+wp,r=t[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(t[0],o.max[0])),l=Math.max(o.min[2],Math.min(t[2],o.max[2]));if(Math.hypot(t[0]-a,t[2]-l)<e-Zn)return!1}return!0}function Cp(n,t,e,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=nr(n,t),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!WM(e,l,s,r))return null;let c=e.filter((h,d)=>d!==n.boxIndex);return Ui(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var XM=["coverSlide","cover","vault","coverSwap"],Pp=Math.PI/180,ke=[0,0],Yl=[0,0],Gi=[0,0,0],Dp=.001,YM=2,Np=(n,t,e)=>Math.max(t,Math.min(e,n));function ou(n,t,e){if(uo(t)>=n.coverTuning.grabMinTilt){fi(t,ke);let i=Math.hypot(ke[0],ke[1]);e[0]=ke[0]/i,e[1]=ke[1]/i}else e[0]=Math.sin(n.facing),e[1]=Math.cos(n.facing);return e}var Up={name:"cover",state:"coverSlide",when(n,t){return n.coverTarget=po(n.coverEdges,n.boxes,n.pos,ou(n,t,Yl),t.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}},Xl={};function Fp(n,t){let e=n.coverTuning;if(!e.autoSlam||t.aim||uo(t)<e.autoMinTilt||n.runSpeed<e.autoMinSpeed)return null;Object.assign(Xl,e),Xl.grabAngle=e.autoAngle,Xl.grabRange=e.autoDist,fi(t,ke);let i=Math.hypot(ke[0],ke[1]);return Yl[0]=ke[0]/i,Yl[1]=ke[1]/i,po(n.coverEdges,n.boxes,n.pos,Yl,t.camYaw,Xl,n.tuning.radius)}function mo(n){return n.cover?n.cover.edge:n.scratch.edge||null}function au(n){if(n.state==="sprint")return"sprint";if(n.cover&&n.cover.pop>=.5)return"aim";if(n.state==="cover"||n.state==="coverSlide"||n.state==="coverSwap"){let t=mo(n);if(t)return t.kind==="low"?"coverLow":"coverTall"}return n.aiming?"aim":"normal"}function lu(n){let t=n.cover;if(!t)return 1;let e=t.edge,i=t.popEnd;if(i===0&&(i=Wl(e,t.t,n.coverTuning)),i===0)return 1;let s=er(-e.normal[0],-e.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=e.tangent[0]*i*r+e.tangent[1]*i*o<0?-1:1;return fo(e,i)?a:-a}function Ip(n,t,e,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(Dp,Np(o/Math.max(t,1e-6),e,i)),n.aiming=!1}function Lp(n,t,e,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Gi[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Gi[1]=0,Gi[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Gi,t,!1),i!==null&&(n.facing=Hi(n.facing,i,e*t)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var qM={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let t=n.coverTuning;Ip(n,t.slideSpeed,t.slideMinTime,t.slideMaxTime)},update(n,t,e){let i=n.scratch.edge;return Lp(n,e,n.coverTuning.slideTurnRate,er(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let t=n.coverTuning;n.cover=null,Ip(n,t.swapSpeed,0,YM);let e=n.scratch;n.heading=er(e.to[0]-e.from[0],e.to[2]-e.from[2]),n.facing=n.facing+tr(n.heading-n.facing)},update(n,t,e){return Lp(n,e,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let t=n.coverTarget;n.coverTarget=null;let e=n.scratch,i=t.edge;n.cover=null,n.aiming=!1,e.edge=i,e.landing=t.landing,e.from=[n.pos[0],n.pos[2]],n.heading=er(-i.normal[0],-i.normal[1]),n.facing=n.facing+tr(n.heading-n.facing)},update(n,t,e){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,Dp)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,t,e){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=fi(t,ke),l=Math.hypot(ke[0],ke[1]),c=l>0?ke[0]/l:0,h=l>0?ke[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,p=(E,x)=>(n.vel[0]=E*o.jog,n.vel[1]=0,n.vel[2]=x*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*Pp))return p(ke[0],ke[1]);if(t.tap&&f){let E=Math.cos(i.pushAngle*Pp);if(-(c*d+h*u)>=E){let M=Cp(r,s.t,n.boxes,i,o.radius,o.height);if(M)return n.coverTarget={landing:M,edge:r},"vault"}let x=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(x)>=E){let M=Rp(n.coverEdges,n.boxes,r,s.t,x>0?1:-1,i,o.radius);if(M)return n.coverTarget=M,"coverSwap"}}let _=Wl(r,s.t,i),g=r.kind==="low"||_!==0&&fo(r,_),m=t.aim&&g?1:0,v=i.popTime>0?e/i.popTime:1;s.pop=s.pop<m?Math.min(m,s.pop+v):Math.max(m,s.pop-v),s.popEnd=s.pop>0&&r.kind!=="low"?_:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let b=!1;if(s.pop===0){let E=ke[0]*r.tangent[0]+ke[1]*r.tangent[1];if(Math.abs(E)>=i.alongDeadzone){let x=s.t+E*i.moveSpeed*e;if(s.t=Np(x,0,r.length),x!==s.t&&fo(r,E>0?1:-1)&&(b=!0,s.endPush+=e,s.endPush>=i.endLeaveTime))return p(r.tangent[0]*Math.sign(E),r.tangent[1]*Math.sign(E))}}b||(s.endPush=0);let y=nr(r,s.t),S=s.popEnd*i.popShift*s.pop;return Gi[0]=y[0]+r.tangent[0]*S-n.pos[0],Gi[1]=0,Gi[2]=y[1]+r.tangent[1]*S-n.pos[2],n.moveBy(Gi,e,!1),s.pop>0?n.facing=Hi(n.facing,t.camYaw,o.aimTurnRate*e):n.facing=Hi(n.facing,er(-d,-u),o.turnRate*e),n.heading=n.facing,null}}},Op=Object.fromEntries(XM.map(n=>[n,qM[n]]));var $M=(n,t,e)=>t*(1-(1-n)**e),cn=[0,0],ql=[0,0,0];function Bp(n,t,e,i,s,r){let o=n.vel,a=(Math.hypot(t,e)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=t-o[0],c=e-o[2],h=Math.hypot(l,c);h<=a?(o[0]=t,o[2]=e):(o[0]+=l/h*a,o[2]+=c/h*a)}function cu(n,t,e){return t.sprint&&!t.aim&&uo(t)>=e.stickSprintMin}var ZM={move:{acceptsTap:!0,enter(){},update(n,t,e){let i=n.tuning;if(cu(n,t,i))return"sprint";n.aiming=t.aim;let s=t.aim?i.aimWalk:i.jog;return fi(t,cn),Bp(n,cn[0]*s,cn[1]*s,s,e,i),t.aim?n.facing=Hi(n.facing,t.camYaw,i.aimTurnRate*e):n.speed()>i.faceMinSpeed&&(n.facing=Hi(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*e)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,t){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):fi(t,cn)>.01?n.heading=Math.atan2(cn[0],cn[1]):n.heading=n.facing},update(n,t,e){let i=n.tuning;return cu(n,t,i)?(fi(t,cn),n.heading=Hi(n.heading,Math.atan2(cn[0],cn[1]),i.sprintTurnRate*e),Bp(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,e,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,t){n.aiming=!1;let e=n.scratch;if(e.dir=[Math.sin(n.facing),Math.cos(n.facing)],fi(t,cn)>.01){let i=Math.hypot(cn[0],cn[1]);e.dir[0]=cn[0]/i,e.dir[1]=cn[1]/i}e.prevOff=0,e.queued=!1,n.heading=Math.atan2(e.dir[0],e.dir[1]),n.facing=n.facing+tr(n.heading-n.facing)},update(n,t,e){let i=n.tuning,s=n.scratch;t.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=$M(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,ql[0]=s.dir[0]*a,ql[1]=0,ql[2]=s.dir[1]*a,n.moveBy(ql,e,!1),r?s.queued?"roll":cu(n,t,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},...Op},JM=[Up,{name:"roll",when:()=>!0,state:"roll"}];function kp({boxes:n,spawn:t,tuning:e=re.move,coverTuning:i=re.cover,coverEdges:s=[],states:r=ZM,contextActions:o=JM,onState:a}){let l={state:"move",stateTime:0,entries:0,pos:[t[0],t[1],t[2]],prevPos:[t[0],t[1],t[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,heading:0,tuning:e,boxes:n,coverTuning:i,coverEdges:s,onState:a,cover:null,coverTarget:null,slams:0,runSpeed:0,hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(l.vel[0],l.vel[2])},moveBy(c,h,d=!0){let u=l.pos,f=rp(n,u,c,e.radius,e.height);if(l.hit=!!f.hit,!d)h>0&&(l.vel[0]=(f.pos[0]-u[0])/h,l.vel[2]=(f.pos[2]-u[2])/h);else if(f.hit)if(h>0)l.vel[0]=(f.pos[0]-u[0])/h,l.vel[2]=(f.pos[2]-u[2])/h;else{let p=f.normal,_=l.vel[0]*p[0]+l.vel[1]*p[1]+l.vel[2]*p[2];_<0&&(l.vel[0]-=p[0]*_,l.vel[1]-=p[1]*_,l.vel[2]-=p[2]*_)}u[0]=f.pos[0],u[1]=f.pos[1],u[2]=f.pos[2]},go(c,h){let d=l.state;r[d].exit?.(l),l.state=c,l.stateTime=0,l.entries++,l.scratch={},r[d].selfMoves&&(l.runSpeed=0,l.hitTime=0),l.autoTimer=0,r[c].enter(l,h),l.onState?.(c,d,h)},place(c,h){r[l.state].exit?.(l),l.state="move",l.stateTime=0,l.cover=null,l.coverTarget=null,l.scratch={},l.pos[0]=l.prevPos[0]=c[0],l.pos[1]=l.prevPos[1]=c[1],l.pos[2]=l.prevPos[2]=c[2],l.vel[0]=l.vel[1]=l.vel[2]=0,l.runSpeed=l.hitTime=l.autoTimer=0,h!==void 0?l.facing=l.prevFacing=l.heading=h:l.prevFacing=l.facing},update(c,h){if(l.prevPos[0]=l.pos[0],l.prevPos[1]=l.pos[1],l.prevPos[2]=l.pos[2],l.prevFacing=l.facing,c.tap&&r[l.state].acceptsTap){for(let f of o)if(f.when(l,c)){l.go(f.state,c);break}}l.stateTime+=h;let d=r[l.state].update(l,c,h),u=l.state;if(!r[u].selfMoves){let f=l.speed();l.moveBy([l.vel[0]*h,0,l.vel[2]*h],h,!0),l.hit?(l.hitTime+=h,(f>=l.runSpeed||l.hitTime>2*l.coverTuning.autoTime)&&(l.runSpeed=f)):(l.runSpeed=f,l.hitTime=0)}if(u==="move"||u==="sprint"){let f=Fp(l,c);if(!f)l.autoTimer=0;else if((l.autoTimer+=h)>=l.coverTuning.autoTime){l.coverTarget=f,l.go("coverSlide",c);return}}d&&l.go(d,c)}};return r[l.state].enter(l,{moveX:0,moveY:0,camYaw:0}),l}function zp({AudioContextCtor:n=globalThis.AudioContext}={}){let t=null,e=null,i=!1;function s(){if(t||i||!n)return t;try{t=new n;let r=Math.max(1,Math.floor(t.sampleRate*.12));e=t.createBuffer(1,r,t.sampleRate);let o=e.getChannelData(0);for(let a=0;a<r;a++)o[a]=Math.random()*2-1}catch{t=null,i=!0}return t}return{play(r){if(s())try{t.state==="suspended"&&t.resume();let o=t.currentTime,a=t.createGain();a.gain.setValueAtTime(r,o),a.gain.exponentialRampToValueAtTime(.001,o+.12),a.connect(t.destination);let l=t.createBufferSource();l.buffer=e;let c=t.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(220,o),l.connect(c),c.connect(a);let h=t.createOscillator();h.type="sine",h.frequency.setValueAtTime(70,o),h.connect(a),l.start(o),h.start(o),l.stop(o+.12),h.stop(o+.12)}catch{}}}}var Hp="#f3efe6";function Gp(n){for(let t of Object.values(n))t&&typeof t=="object"&&Gp(t);return Object.freeze(n)}var Vp=Gp({...structuredClone(Ni),name:"doc-placeholder",colors:{...Ni.colors,hair:vt.teal,shirt:Hp,collar:Hp},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ni.face,brow:"uni",fixedSmile:0}});var $l=Math.PI*2,Vi=(n,t,e)=>n<t?t:n>e?e:n,KM=n=>n-$l*Math.round(n/$l),Wp=.001,hu=.5;function jM(n,t=n.tuning||re.move){let e=n.state,i=n.speed();if(e==="roll")return{name:"roll",rate:be.roll.duration/t.rollTime};if(e==="sprint")return{name:"sprint",rate:Vi(i/Nl,t.sprintRateMin,t.sprintRateMax)};if(e==="move"){if(i>t.runClipMinSpeed)return{name:"run",rate:Vi(i/Nl,t.runRateMin,t.runRateMax)};if(n.aiming)return{name:"aim",rate:1}}if(e==="coverSlide")return{name:mo(n).kind==="low"?"coverLow":"coverTall",rate:1};if(e==="coverSwap")return{name:"sprint",rate:Vi(i/Nl,t.sprintRateMin,t.sprintRateMax)};if(e==="cover"&&n.cover){let s=n.cover,r=n.coverTuning||re.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:i>t.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:Vi(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return e==="vault"?{name:"vault",rate:be.vault.duration/Math.max((n.coverTuning||re.cover).vaultTime,Wp)}:{name:"idle",rate:1}}function QM(n){let t=n.state==="cover"||n.state==="coverSlide"?mo(n):null;return!t||t.kind!=="low"?0:n.state==="coverSlide"?Vi(n.stateTime/Math.max(n.scratch.dur,1e-6),0,1):n.cover?Vi(1-n.cover.pop,0,1):0}var tS=(n,t)=>4*t*n*(1-n),eS=(n,t,e)=>n>=0&&n<e?t*Math.sin(Math.PI*n/e):0;function nS(n){if(n<=.08)return 0;if(n>=.9)return $l;let t=(n-.08)/.82;return $l*t*t*(3-2*t)}function Xp(n,t=Vp){let e=kl(t),i=zl(e),s=new Re;s.name="player";let r=new Re;r.position.y=hu,e.root.position.y=-hu,r.add(e.root),s.add(r),s.add(e.shadow);let o=e.root.getObjectByName("head"),a=new N,l=!0;function c(b,y,S){o.getWorldPosition(a),a.y+=e.spec.head.centerY;let E=Math.hypot(b[0]-a.x,b[1]-a.y,b[2]-a.z);return l=up(E,l,y,S),o.visible=l,l}let h=0,d=0,u=0,f="",p=-1,_=n.slams||0,g=1/0;function m(b,y){let S=n.pos,E=n.prevPos,x=n.coverTuning||re.cover,M=QM(n);if(M>0){let H=mo(n);d=H.normal[0],u=H.normal[1]}h=x.popTime>0?Math.max(M,h+Vi(M-h,-y/x.popTime,y/x.popTime)):M;let R=h*x.lowDrawBack;s.position.set(E[0]+(S[0]-E[0])*b+d*R,E[1]+(S[1]-E[1])*b,E[2]+(S[2]-E[2])*b+u*R),s.rotation.y=n.prevFacing+KM(n.facing-n.prevFacing)*b;let C=jM(n);(C.name!==f||n.entries!==p)&&(i.play(C.name,C.name==="roll"?{fade:.05}:void 0),f=C.name,p=n.entries),i.update(y*C.rate),e.update(y),r.rotation.x=n.state==="roll"?nS(n.stateTime/n.tuning.rollTime):0,(n.slams||0)!==_?(_=n.slams||0,g=0):g+=y;let I=n.state==="vault"?tS(Vi(n.stateTime/Math.max(x.vaultTime,Wp),0,1),x.vaultHop):0,F=eS(g,x.slamSquash,x.slamSquashTime);r.scale.set(1+F/2,1-F,1+F/2),r.position.y=hu*(1-F)+I}function v(){e.dispose(),e.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:m,dispose:v,rig:e,anim:i,fadeHeadFor:c}}var Yp=.05;function iS({locked:n,device:t,panelOpen:e}){return!!(n||t==="pad"||e)}function qp(n){return`${n.gap}|${n.endInset}|${n.minLength}`}var sS=2e3;function $p({canvas:n,gl:t,params:e}){let i=vl(n,t),s=i.renderer,r=_l(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=Mp();l.panelOpen=c.isOpen;let h=new ts,d=new Xe(re.camera.fov,1,.05,100),u=yl();h.add(u.mesh);let f=gp();h.add(f.group);let p=f.boxes,_=Qs.spawn,g=()=>Tp(p,{...Ep(),exclude:Qs.coverExclude}),m=qp(re.cover),v=[],b=0,y=!1,S=kp({boxes:p,spawn:_.pos,coverEdges:g(),onState(K,ct){v.push({state:K,from:ct,t:b,tapped:y,auto:K==="coverSlide"&&!y&&(ct==="move"||ct==="sprint")}),v.length>sS&&v.shift()}});S.place(_.pos,_.yaw);let E=Xp(S);h.add(E.group);let x=dp(),M=sp(),R=zp(),C=0,I=[0,0,0];x.snap(_.pos,_.yaw,"normal",1);let F=null,H=!1,P=null,B=!1,W=!1,z=!1,it={cover:!1},V={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1};function J(){let K=i.resize();d.aspect=K.aspect,d.updateProjectionMatrix()}J(),window.addEventListener("resize",J),n.addEventListener("click",()=>r.requestLock());let G=()=>M.reset();window.addEventListener("blur",G),document.addEventListener("pointerlockchange",()=>{r.isLocked()||M.reset()}),window.addEventListener("keydown",K=>{K.repeat||wh(K.target)||(K.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):K.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function pt(K,ct){S.place(K,ct),x.snap(K,ct,au(S),lu(S)),C=S.slams}let gt=0,O=0,ut=0,At=0,Ft=0,q=0,wt=0,Gt=window.__cr;Gt.stats=()=>({fps:gt,ms:O,calls:Ft,tris:q,scale:i.scale(),characters:1}),Gt.player=()=>{let K=S.cover;return{pos:S.pos.slice(),state:S.state,speed:S.speed(),facing:S.facing,entries:S.entries,cover:K?{id:K.edge.id,kind:K.edge.kind,t:K.t,length:K.edge.length,pop:K.pop,exposed:K.exposed}:null,slams:S.slams}},Gt.camera=()=>{let K=_t;return{pos:K.pos.slice(),fov:K.fov,inside:op(p,K.pos,.1),mode:yt,side:dt}},Gt.transitions=()=>v.map(K=>({...K})),Gt.clearTransitions=()=>{v.length=0},Gt.coverTarget=()=>{let K=P||{moveX:F?F.moveX:0,moveY:F?F.moveY:0},ct=po(S.coverEdges,p,S.pos,ou(S,{moveX:K.moveX||0,moveY:K.moveY||0,camYaw:x.yaw},[0,0]),x.yaw,re.cover,re.move.radius);return ct?{id:ct.edge.id,kind:ct.edge.kind,dist:ct.dist}:null},Gt.place=K=>{let ct=K==="spawn"?_:Qs.features[K];ct&&pt(ct.pos,ct.yaw)},Gt.drive=K=>{if(!K){B?W=!0:P=null;return}P=K,W=!1,K.tap&&(B=!0)};function Ot(K){if(P)V.moveX=P.moveX||0,V.moveY=P.moveY||0,V.sprint=!!P.sprint,V.aim=!!P.aim,V.tap=B,B&&(B=!1,W&&(P=null,W=!1));else{let ct=F.held;V.moveX=F.moveX,V.moveY=F.moveY,V.tap=M.update(ct.cover,it.cover,K,re.move.tapMax),V.sprint=ct.sprint||M.holding(),V.aim=ct.aim}return it.cover=!1,V.camYaw=x.yaw,y=V.tap,V}let Jt=K=>K.toFixed(1);function te(){let K=S.cover;if(K)return`cover: ${K.edge.kind} ${K.edge.id}  t ${K.t.toFixed(2)}/${K.edge.length.toFixed(2)}  pop ${K.pop.toFixed(2)}`;let ct=Gt.coverTarget();return ct?`tap grabs: ${ct.kind} ${ct.dist.toFixed(1)} m`:"tap grabs: nothing"}function nt(){let K=r.padStatus();o.textContent=["COVER TEST","Mouse + keys: WASD move, mouse look, right mouse aim / pop out, Space tap or run straight in: take cover, else roll, hold: sprint, Shift sprint","Gamepad: left stick move, right stick look, left trigger aim / pop out, A tap or run straight in: take cover, else roll, hold: sprint","In cover: push along to move, aim to pop out, push in + tap to vault, push toward a gap + tap to swap, pull away to leave","",`${S.state}   ${S.speed().toFixed(2)} m/s`,te(),`${Math.round(gt)} fps   ${Jt(O)} ms   scale ${i.scale()}`,`${Ft} draw calls   ${q} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${K}`,"` tuning panel    ?look look test    H hide panel"].join(`
`)}let _t={pos:[0,0,0],fov:70},yt="normal",dt=1,ot=xl({before(K){if(F=r.poll(),H=!!P||B||iS({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=H,!H){M.reset(),it.cover=!1;return}let zt=Math.min(K,Yp);z=F.held.aim||P&&P.aim,x.look(F.lookDX,F.lookDY,F.lookX,F.lookY,zt,z),F.pressed.cover&&(it.cover=!0)},step(K){if(!H)return;let ct=qp(re.cover);ct!==m&&(m=ct,S.coverEdges=g()),b+=K,S.update(Ot(K),K)},render(K,ct){let zt=H?Math.min(ct,Yp):0;E.update(K,zt);let qt=S.pos,Kt=S.prevPos;for(let at=0;at<3;at++)I[at]=Kt[at]+(qt[at]-Kt[at])*K;S.slams>C&&(C=S.slams,x.bump(),R.play(re.cover.thudVolume)),yt=au(S),dt=lu(S);let L=x.update(zt,{target:I,mode:yt,side:dt},p);_t.pos[0]=L.pos[0],_t.pos[1]=L.pos[1],_t.pos[2]=L.pos[2],_t.fov=L.fov,d.fov!==L.fov&&(d.fov=L.fov,d.updateProjectionMatrix()),E.fadeHeadFor(L.pos,re.camera.headHideDist,re.camera.headHideMargin),d.position.set(L.pos[0],L.pos[1],L.pos[2]),d.lookAt(L.pos[0]+L.dir[0],L.pos[1]+L.dir[1],L.pos[2]+L.dir[2]),u.update(performance.now()/1e3),f.update(zt),s.render(h,d),Ft=s.info.render.calls,q=s.info.render.triangles,ut++,At+=ct,At>=1&&(gt=ut/At,O=At/ut*1e3,ut=0,At=0),wt+=ct,wt>=.1&&(wt=0,nt()),i.frameDone(ct*1e3)}});e&&e.has("tune")&&c.toggle(),F=r.poll(),x.update(0,{target:_.pos,mode:"normal",side:1},p),nt(),ot.start()}var rS={webgl:"Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function uu(n,t){window.__cr.error={kind:n,detail:t||""},document.documentElement.dataset.crError=n;let e=document.getElementById("cr-error");e&&(e.textContent="",e.appendChild(document.createTextNode(rS[n])),n==="boot"&&t&&(e.appendChild(document.createElement("br")),e.appendChild(document.createTextNode(t))),e.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||uu("boot",n.message)});function oS(){let n=document.getElementById("cr-canvas"),t=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!t){uu("webgl");return}let e=new URLSearchParams(location.search);e.has("look")?ip({canvas:n,gl:t}):$p({canvas:n,gl:t,params:e}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{oS()}catch(n){uu("boot",n&&n.message)}})();

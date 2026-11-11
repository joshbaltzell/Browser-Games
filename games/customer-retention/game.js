/* Customer Retention. Built file: edit src/ and run npm run build. */
(()=>{var Nu=0,xc=1,Uu=2;var Ur=1,Fu=2,Fs=3,Mi=0,Ue=1,Mn=2,es=0,Os=1,_c=2,vc=3,yc=4,Ou=5;var ns=100,Bu=101,ku=102,zu=103,Hu=104,Gu=200,Vu=201,Wu=202,Xu=203,Mc=204,Sc=205,Yu=206,qu=207,$u=208,Zu=209,Ju=210,Ku=211,ju=212,Qu=213,td=214,Do=0,No=1,Uo=2,As=3,Fo=4,Oo=5,Bo=6,ko=7,bc=0,ed=1,nd=2,Bn=0,wc=1,Ec=2,Tc=3,Ac=4,Rc=5,Cc=6,Pc=7;var Ic=300,is=301,Bs=302,xa=303,_a=304,zo=1e3,Un=1001,Ho=1002,ze=1003,id=1004;var Fr=1005;var Qe=1006,va=1007;var ei=1008;var dn=1009,Lc=1010,Dc=1011,ks=1012,ya=1013,Cn=1014,Pn=1015,In=1016,Ma=1017,Sa=1018,ss=1020,Nc=35902,Uc=35899,Fc=1021,Oc=1022,Ln=1023,Qn=1026,ni=1027,Bc=1028,ba=1029,Si=1030,wa=1031;var Ea=1033,Or=33776,Br=33777,kr=33778,zr=33779,Ta=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,Ia=37492,La=37496,Da=37488,Na=37489,Hr=37490,Ua=37491,Fa=37808,Oa=37809,Ba=37810,ka=37811,za=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,Ya=37818,qa=37819,$a=37820,Za=37821,Ja=36492,Ka=36494,ja=36495,Qa=36283,tl=36284,Gr=36285,el=36286;var cr=2300,Go=2301,Io=2302,lc=2303,cc=2400,hc=2401,uc=2402;var sd=3200;var kc=0,rd=1,ii="",Ge="srgb",hr="srgb-linear",ur="linear",me="srgb";var Lo=7680;var od=519,ad=512,ld=513,cd=514,zc=515,hd=516,ud=517,Hc=518,Gc=519,dd=35044,zs=35048;var Vc="300 es",xn=2e3,dr=2001;function Np(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Up(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fd(){let n=fr("canvas");return n.style.display="block",n}var ou={},Rs=null;function Wc(...n){let t="THREE."+n.shift();Rs?Rs("log",t,...n):console.log(t,...n)}function pd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qt(...n){n=pd(n);let t="THREE."+n.shift();if(Rs)Rs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=pd(n);let t="THREE."+n.shift();if(Rs)Rs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function sr(...n){let t=n.join(" ");t in ou||(ou[t]=!0,Qt(...n))}function md(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var gd={[Do]:Do,[Uo]:Bo,[Fo]:Fo,[As]:Oo,[No]:No,[Bo]:Uo,[ko]:ko,[Oo]:As},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,rr=Math.PI/180,Cs=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function Xc(n,t){return(n%t+t)%t}function Fp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Op(n,t,e){return n!==t?(e-n)/(t-n):0}function or(n,t,e){return(1-e)*n+e*t}function Bp(n,t,e,i){return or(n,t,1-Math.exp(-e*i))}function kp(n,t=1){return t-Math.abs(Xc(n,t*2)-t)}function zp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Hp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Gp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Vp(n,t){return n+Math.random()*(t-n)}function Wp(n){return n*(.5-Math.random())}function Xp(n){n!==void 0&&(au=n);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yp(n){return n*rr}function qp(n){return n*Cs}function $p(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Zp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xd(n,t){if(t.constructor===Float32Array)return n;let e=qc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _d(n,t){if(t.constructor===Float32Array)return n;let e=qc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var nl={DEG2RAD:rr,RAD2DEG:Cs,generateUUID:rs,clamp:ae,euclideanModulo:Xc,mapLinear:Fp,inverseLerp:Op,lerp:or,damp:Bp,pingpong:kp,smoothstep:zp,smootherstep:Hp,randInt:Gp,randFloat:Vp,randFloatSpread:Wp,seededRandom:Xp,degToRad:Yp,radToDeg:qp,isPowerOfTwo:$p,ceilPowerOfTwo:Zp,floorPowerOfTwo:Yc,setQuaternionFromProperEuler:Jp,normalize:_d,denormalize:xd},Qc=class Qc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qc.prototype.isVector2=!0;var Pt=Qc,tn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);p=Math.sin(p*v)/w,a=Math.sin(a*v)/w,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var N=th,zl=new N,lu=new tn,eh=class eh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],w=s[4],y=s[7],S=s[2],E=s[5],x=s[8];return r[0]=o*_+a*v+l*S,r[3]=o*g+a*w+l*E,r[6]=o*p+a*y+l*x,r[1]=c*_+h*v+d*S,r[4]=c*g+h*w+d*E,r[7]=c*p+h*y+d*x,r[2]=u*_+f*v+m*S,r[5]=u*g+f*w+m*E,r[8]=u*p+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var ne=eh,Hl=new ne,cu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kp(){let n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:t,whitePoint:i,transfer:ur,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:me,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var he=Kp();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fs,Vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fs===void 0&&(fs=fr("canvas")),fs.width=t.width,fs.height=t.height;let s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jp=0,Ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var Qp=0,Vl=new N,en=class n extends Fn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Un,s=Un,r=Qe,o=ei,a=Ln,l=dn,c=n.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=rs(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Ic;en.DEFAULT_ANISOTROPY=1;var nh=class nh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,S=(p+1)/2,E=(h+u)/4,x=(d+_)/4,M=(m+g)/4;return w>y&&w>S?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=x/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=M/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nh.prototype.isVector4=!0;var Re=nh,Wo=class extends Fn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new en({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Wo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},pr=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ga=class ga{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,_,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tm,t,em)}lookAt(t,e,i){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(i,ln),hi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(i,ln)),hi.normalize(),lo.crossVectors(ln,hi),s[0]=hi.x,s[4]=lo.x,s[8]=ln.x,s[1]=hi.y,s[5]=lo.y,s[9]=ln.y,s[2]=hi.z,s[6]=lo.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],w=i[7],y=i[11],S=i[15],E=s[0],x=s[4],M=s[8],R=s[12],C=s[1],L=s[5],F=s[9],V=s[13],P=s[2],H=s[6],q=s[10],O=s[14],it=s[3],G=s[7],z=s[11],k=s[15];return r[0]=o*E+a*C+l*P+c*it,r[4]=o*x+a*L+l*H+c*G,r[8]=o*M+a*F+l*q+c*z,r[12]=o*R+a*V+l*O+c*k,r[1]=h*E+d*C+u*P+f*it,r[5]=h*x+d*L+u*H+f*G,r[9]=h*M+d*F+u*q+f*z,r[13]=h*R+d*V+u*O+f*k,r[2]=m*E+_*C+g*P+p*it,r[6]=m*x+_*L+g*H+p*G,r[10]=m*M+_*F+g*q+p*z,r[14]=m*R+_*V+g*O+p*k,r[3]=v*E+w*C+y*P+S*it,r[7]=v*x+w*L+y*H+S*G,r[11]=v*M+w*F+y*q+S*z,r[15]=v*R+w*V+y*O+S*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*f-c*u,w=a*f-c*d,y=a*u-l*d,S=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(_*v-g*w+p*y)-i*(m*v-g*S+p*E)+s*(m*w-_*S+p*x)-r*(m*y-_*E+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=e*a-i*o,w=e*l-s*o,y=e*c-r*o,S=i*l-s*a,E=i*c-r*a,x=s*c-r*l,M=h*_-d*m,R=h*g-u*m,C=h*p-f*m,L=d*g-u*_,F=d*p-f*_,V=u*p-f*g,P=v*V-w*F+y*L+S*C-E*R+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(a*V-l*F+c*L)*H,t[1]=(s*F-i*V-r*L)*H,t[2]=(_*x-g*E+p*S)*H,t[3]=(u*E-d*x-f*S)*H,t[4]=(l*C-o*V-c*R)*H,t[5]=(e*V-s*C+r*R)*H,t[6]=(g*y-m*x-p*w)*H,t[7]=(h*x-u*y+f*w)*H,t[8]=(o*F-a*C+c*M)*H,t[9]=(i*C-e*F-r*M)*H,t[10]=(m*E-_*y+p*v)*H,t[11]=(d*y-h*E-f*v)*H,t[12]=(a*R-o*L-l*M)*H,t[13]=(e*L-i*R+s*M)*H,t[14]=(_*w-m*S-g*v)*H,t[15]=(h*S-d*w+u*v)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,g=o*d,p=a*d,v=l*c,w=l*h,y=l*d,S=i.x,E=i.y,x=i.z;return s[0]=(1-(_+p))*S,s[1]=(f+y)*S,s[2]=(m-w)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+w)*x,s[9]=(g-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ps.set(s[0],s[1],s[2]).length(),a=ps.set(s[4],s[5],s[6]).length(),l=ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);let c=1/o,h=1/a,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=xn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===xn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===dr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=xn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===xn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===dr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ga.prototype.isMatrix4=!0;var de=ga,ps=new N,En=new de,tm=new N(0,0,0),em=new N(1,1,1),hi=new N,lo=new N,ln=new N,uu=new de,du=new tn,sn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nm=0,fu=new N,ms=new tn,qn=new de,co=new N,Qs=new N,im=new N,sm=new tn,pu=new N(1,0,0),mu=new N(0,1,0),gu=new N(0,0,1),xu={type:"added"},rm={type:"removed"},gs={type:"childadded",child:null},Wl={type:"childremoved",child:null},_n=class n extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new sn,i=new tn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new ne}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?co.copy(t):co.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Qs,co,this.up):qn.lookAt(co,Qs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(qn),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),gs.child=t,this.dispatchEvent(gs),gs.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rm),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new N(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},om={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(om)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Xc(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Xl(o,r,t+1/3),this.g=Xl(o,r,t),this.b=Xl(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=vd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return he.workingToColorSpace(qe.copy(this),t),Math.round(ae(qe.r*255,0,255))*65536+Math.round(ae(qe.g*255,0,255))*256+Math.round(ae(qe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ge){he.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(ho);let i=or(ui.h,ho.h,e),s=or(ui.s,ho.s,e),r=or(ui.l,ho.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Kt;Kt.NAMES=vd;var $i=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new N,$n=new N,Yl=new N,Zn=new N,xs=new N,_s=new N,_u=new N,ql=new N,$l=new N,Zl=new N,Jl=new Re,Kl=new Re,jl=new Re,mi=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),$n.subVectors(i,e),Yl.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot($n),l=Tn.dot(Yl),c=$n.dot($n),h=$n.dot(Yl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Jl.setScalar(0),Kl.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(Kl,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),$n.subVectors(t,e),Tn.cross($n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,i),_s.subVectors(r,i),ql.subVectors(t,i);let l=xs.dot(ql),c=_s.dot(ql);if(l<=0&&c<=0)return e.copy(i);$l.subVectors(t,s);let h=xs.dot($l),d=_s.dot($l);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(xs,o);Zl.subVectors(t,r);let f=xs.dot(Zl),m=_s.dot(Zl);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(_s,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return _u.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(_u,a);let p=1/(g+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(xs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),fo.subVectors(this.max,tr),vs.subVectors(t.a,tr),ys.subVectors(t.b,tr),Ms.subVectors(t.c,tr),di.subVectors(ys,vs),fi.subVectors(Ms,ys),Vi.subVectors(vs,Ms);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Vi.z,Vi.y,di.z,0,-di.x,fi.z,0,-fi.x,Vi.z,0,-Vi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Vi.y,Vi.x,0];return!Ql(e,vs,ys,Ms,fo)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,vs,ys,Ms,fo))?!1:(po.crossVectors(di,fi),e=[po.x,po.y,po.z],Ql(e,vs,ys,Ms,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,uo=new gi,vs=new N,ys=new N,Ms=new N,di=new N,fi=new N,Vi=new N,tr=new N,fo=new N,po=new N,Wi=new N;function Ql(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var De=new N,mo=new Pt,am=0,Se=class extends Fn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dd,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?qc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_d(t,this.array)}};var gr=class extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var xr=class extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}},lm=new gi,er=new N,tc=new N,On=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):lm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(tc)),this.expandByPoint(er.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cm=0,gn=new de,ec=new _n,Ss=new N,cn=new gi,nr=new gi,ke=new N,we=class n extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Np(t)?xr:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(cn.min,nr.min),cn.expandByPoint(ke),ke.addVectors(cn.max,nr.max),cn.expandByPoint(ke)):(cn.expandByPoint(nr.min),cn.expandByPoint(nr.max))}cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),ke.add(Ss)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Se(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;let h=new N,d=new N,u=new N,f=new Pt,m=new Pt,_=new Pt,g=new N,p=new N;function v(R,C,L){c[R]=c[C]=c[L]=1,h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(F),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(F),a[R].add(g),a[C].add(g),a[L].add(g),l[R].add(p),l[C].add(p),l[L].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,C=w.length;R<C;++R){let L=w[R],F=L.start,V=L.count;for(let P=F,H=F+V;P<H;P+=3)v(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new N,S=new N,E=new N,x=new N;function M(R){E.fromBufferAttribute(s,R),x.copy(E);let C=a[R];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),S.crossVectors(x,C);let F=S.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,F)}for(let R=0,C=i.count;R<C;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Se(u,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=new N,hm=new N,um=new ne,Rn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=nc.subVectors(i,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||um.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dm=0,Zi=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Os,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Rn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Kn=new N,ic=new N,go=new N,xo=new N,Yo=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ic.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(ic);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=xo.dot(this.direction),l=-xo.dot(go),c=xo.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ic).addScaledVector(go,u),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,g=e.z-o.z,p=i.x-o.x,v=i.y-o.y,w=i.z-o.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(h),x,M,R,C,L,F,V,P,H,q,O,it;if(y>=S&&y>=E?(R=l,F=d,H=m,it=p,l>=0?(x=c,M=h,C=u,L=f,V=_,P=g,q=v,O=w):(x=h,M=c,C=f,L=u,V=g,P=_,q=w,O=v)):S>=E?(R=c,F=u,H=_,it=v,c>=0?(x=h,M=l,C=f,L=d,V=g,P=m,q=w,O=p):(x=l,M=h,C=d,L=f,V=m,P=g,q=p,O=w)):(R=h,F=f,H=g,it=w,h>=0?(x=l,M=c,C=d,L=u,V=m,P=_,q=p,O=v):(x=c,M=l,C=u,L=d,V=_,P=m,q=v,O=p)),R===0)return null;let G=x/R,z=M/R,k=1/R,ct=C-G*F,gt=L-z*F,Y=V-G*H,ft=P-z*H,It=q-G*it,zt=O-z*it,$=It*ft-zt*Y,Et=ct*zt-gt*It,wt=Y*gt-ft*ct;if(s){if($<0||Et<0||wt<0)return null}else if(($<0||Et<0||wt<0)&&($>0||Et>0||wt>0))return null;let bt=$+Et+wt;if(bt===0)return null;let qt=k*($*F+Et*H+wt*it);return(bt>0?qt<0:qt>0)?null:this.at(qt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ji=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vu=new de,Xi=new Yo,_o=new On,yu=new N,vo=new N,yo=new N,Mo=new N,sc=new N,So=new N,Mu=new N,bo=new N,xe=class extends _n{constructor(t=new we,e=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(sc.fromBufferAttribute(d,t),o?So.addScaledVector(sc,h):So.addScaledVector(sc.sub(e),h))}e.add(So)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(_o.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(_o,yu)===null||Xi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(vu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=w;y<S;y+=3){let E=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);s=wo(this,p,t,i,c,h,d,E,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),w=a.getX(g+1),y=a.getX(g+2);s=wo(this,o,t,i,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=w;y<S;y+=3){let E=y,x=y+1,M=y+2;s=wo(this,p,t,i,c,h,d,E,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,w=g+1,y=g+2;s=wo(this,o,t,i,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function fm(n,t,e,i,s,r,o,a){let l;if(t.side===Ue?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(bo);return c<e.near||c>e.far?null:{distance:c,point:bo.clone(),object:n}}function wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,vo),n.getVertexPosition(l,yo),n.getVertexPosition(c,Mo);let h=fm(n,t,e,i,vo,yo,Mo,Mu);if(h){let d=new N;mi.getBarycoord(Mu,vo,yo,Mo,d),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,d,new Pt)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,d,new Pt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};mi.getNormal(vo,yo,Mo,u.normal),h.face=u,h.barycoord=d}return h}var qo=class extends en{constructor(t=null,e=1,i=1,s,r,o,a,l,c=ze,h=ze,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=new On,pm=new Pt(.5,.5),Eo=new N,Ki=class{constructor(t=new Rn,e=new Rn,i=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],w=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-m,S-v).normalize(),s[1].setComponents(c+o,f+h,p+m,S+v).normalize(),s[2].setComponents(c+a,f+d,p+_,S+w).normalize(),s[3].setComponents(c-a,f-d,p-_,S-w).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,p-g,S-y).normalize();else if(s[4].setComponents(c-l,f-u,p-g,S-y).normalize(),e===xn)s[5].setComponents(c+l,f+u,p+g,S+y).normalize();else if(e===dr)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);let e=pm.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Eo.x=s.normal.x>0?t.max.x:t.min.x,Eo.y=s.normal.y>0?t.max.y:t.min.y,Eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Su=new de,$o=class n{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Su.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ki),i[s].setFromProjectionMatrix(Su,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ki),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var _r=class extends en{constructor(t=[],e=is,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vr=class extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends en{constructor(t,e,i=Cn,s,r,o,a=ze,l=ze,c,h=Qn,d=1){if(h!==Qn&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yr=class extends ti{constructor(t,e=Cn,i=is,s,r,o=ze,a=ze,l,c=Qn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rn=class n extends we{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function m(_,g,p,v,w,y,S,E,x,M,R){let C=y/x,L=S/M,F=y/2,V=S/2,P=E/2,H=x+1,q=M+1,O=0,it=0,G=new N;for(let z=0;z<q;z++){let k=z*L-V;for(let ct=0;ct<H;ct++){let gt=ct*C-F;G[_]=gt*v,G[g]=k*w,G[p]=P,c.push(G.x,G.y,G.z),G[_]=0,G[g]=0,G[p]=E>0?1:-1,h.push(G.x,G.y,G.z),d.push(ct/x),d.push(1-z/M),O+=1}}for(let z=0;z<M;z++)for(let k=0;k<x;k++){let ct=u+k+H*z,gt=u+k+H*(z+1),Y=u+(k+1)+H*(z+1),ft=u+(k+1)+H*z;l.push(ct,gt,ft),l.push(gt,Y,ft),it+=6}a.addGroup(f,it,R),f+=it,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vn=class n extends we{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],g=i/2,p=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function v(){let y=new N,S=new N,E=0,x=(e-t)/i;for(let M=0;M<=r;M++){let R=[],C=M/r,L=C*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,P=V*l+a,H=Math.sin(P),q=Math.cos(P);S.x=L*H,S.y=-C*i+g,S.z=L*q,d.push(S.x,S.y,S.z),y.set(H,x,q).normalize(),u.push(y.x,y.y,y.z),f.push(V,1-C),R.push(m++)}_.push(R)}for(let M=0;M<s;M++)for(let R=0;R<r;R++){let C=_[R][M],L=_[R+1][M],F=_[R+1][M+1],V=_[R][M+1];(t>0||R!==0)&&(h.push(C,L,V),E+=3),(e>0||R!==r-1)&&(h.push(L,F,V),E+=3)}c.addGroup(p,E,0),p+=E}function w(y){let S=m,E=new Pt,x=new N,M=0,R=y===!0?t:e,C=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let L=m;for(let F=0;F<=s;F++){let P=F/s*l+a,H=Math.cos(P),q=Math.sin(P);x.x=R*q,x.y=g*C,x.z=R*H,d.push(x.x,x.y,x.z),u.push(0,C,0),E.x=H*.5+.5,E.y=q*.5*C+.5,f.push(E.x,E.y),m++}for(let F=0;F<s;F++){let V=S+F,P=L+F;y===!0?h.push(P,P+1,V):h.push(P+1,P,V),M+=3}c.addGroup(p,M,y===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new N,s=[],r=[],o=[],a=new N,l=new de;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ls=class extends nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zo=class extends Ls{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $c(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var bu=new N,wu=new N,rc=new $c,oc=new $c,ac=new $c,Jo=class extends nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wu.subVectors(s[0],s[1]).add(s[0]),c=wu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),rc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),oc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),ac.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),oc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ac.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(rc.calc(l),oc.calc(l),ac.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function mm(n,t){let e=1-n;return e*e*t}function gm(n,t){return 2*(1-n)*n*t}function xm(n,t){return n*n*t}function ar(n,t,e,i){return mm(n,t)+gm(n,e)+xm(n,i)}function _m(n,t){let e=1-n;return e*e*e*t}function vm(n,t){let e=1-n;return 3*e*e*n*t}function ym(n,t){return 3*(1-n)*n*n*t}function Mm(n,t){return n*n*n*t}function lr(n,t,e,i,s){return _m(n,t)+vm(n,e)+ym(n,i)+Mm(n,s)}var Sr=class extends nn{constructor(t=new Pt,e=new Pt,i=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Pt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends nn{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y),lr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends nn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends nn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends nn{constructor(t=new Pt,e=new Pt,i=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Pt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends nn{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y),ar(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Eu(a,l.x,c.x,h.x,d.x),Eu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},Qo=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:Jo,CubicBezierCurve:Sr,CubicBezierCurve3:Ko,EllipseCurve:Ls,LineCurve:br,LineCurve3:jo,QuadraticBezierCurve:wr,QuadraticBezierCurve3:Er,SplineCurve:Tr}),ta=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ji=class extends ta{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new br(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new wr(this.currentPoint.clone(),new Pt(t,e),new Pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Sr(this.currentPoint.clone(),new Pt(t,e),new Pt(i,s),new Pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Tr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Ls(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ds=class extends ji{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ji().fromJSON(s))}return this}};function Sm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=yd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Am(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=n[u],m=n[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ar(r,o,e,a,l,c,0),o}function yd(n,t,e,i,s){let r;if(s===Bm(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Tu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Tu(o/i|0,n[o],n[o+1],r);return r&&Ns(r,r.next)&&(Cr(r),r=r.next),r}function Qi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ns(e,e.next)||Te(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ar(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Lm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?wm(n,i,s,r):bm(n)){t.push(l.i,n.i,c.i),Cr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Em(Qi(n),t),Ar(n,t,e,i,s,r,2)):o===2&&Tm(n,t,e,i,s,r):Ar(Qi(n),t,e,i,s,r,1);break}}}function bm(n){let t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&ir(s,a,r,l,o,c,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wm(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),p=dc(f,m,t,e,i),v=dc(_,g,t,e,i),w=n.prevZ,y=n.nextZ;for(;w&&w.z>=p&&y&&y.z<=v;){if(w.x>=f&&w.x<=_&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&ir(a,h,l,d,c,u,w.x,w.y)&&Te(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&ir(a,h,l,d,c,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&ir(a,h,l,d,c,u,w.x,w.y)&&Te(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&ir(a,h,l,d,c,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Em(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ns(i,s)&&Sd(i,e,e.next,s)&&Rr(i,s)&&Rr(s,i)&&(t.push(i.i,e.i,s.i),Cr(e),Cr(e.next),e=n=s),e=e.next}while(e!==n);return Qi(e)}function Tm(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Um(o,a)){let l=bd(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Ar(o,t,e,i,s,r,0),Ar(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Am(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=yd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Nm(c))}s.sort(Rm);for(let r=0;r<s.length;r++)e=Cm(s[r],e);return e}function Rm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Cm(n,t){let e=Pm(n,t);if(!e)return t;let i=bd(e,n);return Qi(i,i.next),Qi(e,e.next)}function Pm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Ns(n,e))return e;do{if(Ns(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Md(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Rr(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Im(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Im(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function Lm(n,t,e,i){let s=n;do s.z===0&&(s.z=dc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Dm(s)}function Dm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function dc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Nm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Md(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function ir(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Md(n,t,e,i,s,r,o,a)}function Um(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Fm(n,t)&&(Rr(n,t)&&Rr(t,n)&&Om(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||Ns(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ns(n,t){return n.x===t.x&&n.y===t.y}function Sd(n,t,e,i){let s=Ao(Te(n,t,e)),r=Ao(Te(n,t,i)),o=Ao(Te(e,i,n)),a=Ao(Te(e,i,t));return!!(s!==r&&o!==a||s===0&&To(n,e,t)||r===0&&To(n,i,t)||o===0&&To(e,n,i)||a===0&&To(e,t,i))}function To(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ao(n){return n>0?1:n<0?-1:0}function Fm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Rr(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function Om(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function bd(n,t){let e=fc(n.i,n.x,n.y),i=fc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Tu(n,t,e,i){let s=fc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bm(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var pc=class{static triangulate(t,e,i=2){return Sm(t,e,i)}},qi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Au(t),Ru(i,t);let o=t.length;e.forEach(Au);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ru(i,e[l]);let a=pc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Au(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Pr=class n extends we{constructor(t=new Ds([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:km,w,y=!1,S,E,x,M;if(p){w=p.getSpacedPoints(h),y=!0,u=!1;let et=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,et),E=new N,x=new N,M=new N}u||(g=0,f=0,m=0,_=0);let R=a.extractPoints(c),C=R.shape,L=R.holes;if(!qi.isClockWise(C)){C=C.reverse();for(let et=0,ht=L.length;et<ht;et++){let mt=L[et];qi.isClockWise(mt)&&(L[et]=mt.reverse())}}function V(et){let mt=10000000000000001e-36,dt=et[0];for(let rt=1;rt<=et.length;rt++){let Ut=rt%et.length,Lt=et[Ut],Ht=Lt.x-dt.x,Zt=Lt.y-dt.y,jt=Ht*Ht+Zt*Zt,D=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(dt.x),Math.abs(dt.y)),at=mt*D*D;if(jt<=at){et.splice(Ut,1),rt--;continue}dt=Lt}}V(C),L.forEach(V);let P=L.length,H=C;for(let et=0;et<P;et++){let ht=L[et];C=C.concat(ht)}function q(et,ht,mt){return ht||ee("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ht,mt)}let O=C.length;function it(et,ht,mt){let dt,rt,Ut,Lt=et.x-ht.x,Ht=et.y-ht.y,Zt=mt.x-et.x,jt=mt.y-et.y,D=Lt*Lt+Ht*Ht,at=Lt*jt-Ht*Zt;if(Math.abs(at)>Number.EPSILON){let Tt=Math.sqrt(D),Wt=Math.sqrt(Zt*Zt+jt*jt),st=ht.x-Ht/Tt,ie=ht.y+Lt/Tt,Ft=mt.x-jt/Wt,Bt=mt.y+Zt/Wt,A=((Ft-st)*jt-(Bt-ie)*Zt)/(Lt*jt-Ht*Zt);dt=st+Lt*A-et.x,rt=ie+Ht*A-et.y;let b=dt*dt+rt*rt;if(b<=2)return new Pt(dt,rt);Ut=Math.sqrt(b/2)}else{let Tt=!1;Lt>Number.EPSILON?Zt>Number.EPSILON&&(Tt=!0):Lt<-Number.EPSILON?Zt<-Number.EPSILON&&(Tt=!0):Math.sign(Ht)===Math.sign(jt)&&(Tt=!0),Tt?(dt=-Ht,rt=Lt,Ut=Math.sqrt(D)):(dt=Lt,rt=Ht,Ut=Math.sqrt(D/2))}return new Pt(dt/Ut,rt/Ut)}let G=[];for(let et=0,ht=H.length,mt=ht-1,dt=et+1;et<ht;et++,mt++,dt++)mt===ht&&(mt=0),dt===ht&&(dt=0),G[et]=it(H[et],H[mt],H[dt]);let z=[],k,ct=G.concat();for(let et=0,ht=P;et<ht;et++){let mt=L[et];k=[];for(let dt=0,rt=mt.length,Ut=rt-1,Lt=dt+1;dt<rt;dt++,Ut++,Lt++)Ut===rt&&(Ut=0),Lt===rt&&(Lt=0),k[dt]=it(mt[dt],mt[Ut],mt[Lt]);z.push(k),ct=ct.concat(k)}let gt;if(g===0)gt=qi.triangulateShape(H,L);else{let et=[],ht=[];for(let mt=0;mt<g;mt++){let dt=mt/g,rt=f*Math.cos(dt*Math.PI/2),Ut=m*Math.sin(dt*Math.PI/2)+_;for(let Lt=0,Ht=H.length;Lt<Ht;Lt++){let Zt=q(H[Lt],G[Lt],Ut);Et(Zt.x,Zt.y,-rt),dt===0&&et.push(Zt)}for(let Lt=0,Ht=P;Lt<Ht;Lt++){let Zt=L[Lt];k=z[Lt];let jt=[];for(let D=0,at=Zt.length;D<at;D++){let Tt=q(Zt[D],k[D],Ut);Et(Tt.x,Tt.y,-rt),dt===0&&jt.push(Tt)}dt===0&&ht.push(jt)}}gt=qi.triangulateShape(et,ht)}let Y=gt.length,ft=m+_;for(let et=0;et<O;et++){let ht=u?q(C[et],ct[et],ft):C[et];y?(x.copy(S.normals[0]).multiplyScalar(ht.x),E.copy(S.binormals[0]).multiplyScalar(ht.y),M.copy(w[0]).add(x).add(E),Et(M.x,M.y,M.z)):Et(ht.x,ht.y,0)}for(let et=1;et<=h;et++)for(let ht=0;ht<O;ht++){let mt=u?q(C[ht],ct[ht],ft):C[ht];y?(x.copy(S.normals[et]).multiplyScalar(mt.x),E.copy(S.binormals[et]).multiplyScalar(mt.y),M.copy(w[et]).add(x).add(E),Et(M.x,M.y,M.z)):Et(mt.x,mt.y,d/h*et)}for(let et=g-1;et>=0;et--){let ht=et/g,mt=f*Math.cos(ht*Math.PI/2),dt=m*Math.sin(ht*Math.PI/2)+_;for(let rt=0,Ut=H.length;rt<Ut;rt++){let Lt=q(H[rt],G[rt],dt);Et(Lt.x,Lt.y,d+mt)}for(let rt=0,Ut=L.length;rt<Ut;rt++){let Lt=L[rt];k=z[rt];for(let Ht=0,Zt=Lt.length;Ht<Zt;Ht++){let jt=q(Lt[Ht],k[Ht],dt);y?Et(jt.x,jt.y+w[h-1].y,w[h-1].x+mt):Et(jt.x,jt.y,d+mt)}}}It(),zt();function It(){let et=s.length/3;if(u){let ht=0,mt=O*ht;for(let dt=0;dt<Y;dt++){let rt=gt[dt];wt(rt[2]+mt,rt[1]+mt,rt[0]+mt)}ht=h+g*2,mt=O*ht;for(let dt=0;dt<Y;dt++){let rt=gt[dt];wt(rt[0]+mt,rt[1]+mt,rt[2]+mt)}}else{for(let ht=0;ht<Y;ht++){let mt=gt[ht];wt(mt[2],mt[1],mt[0])}for(let ht=0;ht<Y;ht++){let mt=gt[ht];wt(mt[0]+O*h,mt[1]+O*h,mt[2]+O*h)}}i.addGroup(et,s.length/3-et,0)}function zt(){let et=s.length/3,ht=0;$(H,ht),ht+=H.length;for(let mt=0,dt=L.length;mt<dt;mt++){let rt=L[mt];$(rt,ht),ht+=rt.length}i.addGroup(et,s.length/3-et,1)}function $(et,ht){let mt=et.length;for(;--mt>=0;){let dt=mt,rt=mt-1;rt<0&&(rt=et.length-1);for(let Ut=0,Lt=h+g*2;Ut<Lt;Ut++){let Ht=O*Ut,Zt=O*(Ut+1),jt=ht+dt+Ht,D=ht+rt+Ht,at=ht+rt+Zt,Tt=ht+dt+Zt;bt(jt,D,at,Tt)}}}function Et(et,ht,mt){l.push(et),l.push(ht),l.push(mt)}function wt(et,ht,mt){qt(et),qt(ht),qt(mt);let dt=s.length/3,rt=v.generateTopUV(i,s,dt-3,dt-2,dt-1);te(rt[0]),te(rt[1]),te(rt[2])}function bt(et,ht,mt,dt){qt(et),qt(ht),qt(dt),qt(ht),qt(mt),qt(dt);let rt=s.length/3,Ut=v.generateSideWallUV(i,s,rt-6,rt-3,rt-2,rt-1);te(Ut[0]),te(Ut[1]),te(Ut[3]),te(Ut[1]),te(Ut[2]),te(Ut[3])}function qt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function te(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return zm(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new n(i,t.options)}},km={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Pt(r,o),new Pt(a,l),new Pt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Pt(o,1-l),new Pt(c,1-d),new Pt(u,1-m),new Pt(_,1-p)]:[new Pt(a,1-l),new Pt(h,1-d),new Pt(f,1-m),new Pt(g,1-p)]}};function zm(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ir=class n extends we{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ae(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new Pt,f=new N,m=new N,_=new N,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){let w=i+v*h*s,y=Math.sin(w),S=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*S,o.push(d.x,d.y,d.z),u.x=v/e,u.y=E/(t.length-1),a.push(u.x,u.y);let x=l[3*E+0]*y,M=l[3*E+1],R=l[3*E+0]*S;c.push(x,M,R)}}for(let v=0;v<e;v++)for(let w=0;w<t.length-1;w++){let y=w+v*t.length,S=y,E=y+t.length,x=y+t.length+1,M=y+1;r.push(S,E,M),r.push(x,M,E)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var xi=class n extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*u-o;for(let w=0;w<c;w++){let y=w*d-r;m.push(y,-v,0),_.push(0,0,1),g.push(w/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let w=v+c*p,y=v+c*(p+1),S=v+1+c*(p+1),E=v+1+c*p;f.push(w,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var yn=class n extends we{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){let v=[],w=p/i,y=o+w*a,S=t*Math.cos(y),E=Math.sqrt(t*t-S*S),x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let R=M/e,C=s+R*r;d.x=-E*Math.cos(C),d.y=S,d.z=E*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(R+x,1-w),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let w=h[p][v+1],y=h[p][v],S=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(w,y,E),(p!==i-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ts=class n extends we{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new N,f=new N,m=new N;for(let _=0;_<=i;_++){let g=o+_/i*a;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,w=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(p,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Lr=class n extends we{constructor(t=new Er(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Pt,h=new N,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function _(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),v(),p()}function g(w){h=t.getPointAt(w/e,h);let y=o.normals[w],S=o.binormals[w];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,M=Math.sin(x),R=-Math.cos(x);l.x=R*y.x+M*S.x,l.y=R*y.y+M*S.y,l.z=R*y.z+M*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let y=1;y<=s;y++){let S=(s+1)*(w-1)+(y-1),E=(s+1)*w+(y-1),x=(s+1)*w+y,M=(s+1)*(w-1)+y;m.push(S,E,M),m.push(E,x,M)}}function v(){for(let w=0;w<=e;w++)for(let y=0;y<=s;y++)c.x=w/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function os(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Cu(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Cu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=os(n[e]);for(let s in i)t[s]=i[s]}return t}function Cu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var wd={clone:os,merge:Ze},Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new de().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ea=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var na=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ia=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function bs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ro(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _i=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends _i{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-i;break;case uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*i-e;break;case uc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,w=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[c+S]+w*o[l+S]+y*o[d+S];return r}},ra=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},oa=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},aa=class extends _i{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),_=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],p=f*u+m*2,v=d[p],w=d[p+1],y=t*u+m*2,S=h[y],E=h[y+1],x=Xm(i,e,v,S,s);r[m]=Ed(x,_,w,E,g)}return r}};function Ed(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Wm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Xm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ed(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Wm(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bs(e,this.TimeBufferType),this.values=bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:bs(t.times,Array),values:bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ro(t.settings)&&(i.settings={inTangents:bs(t.settings.inTangents,Array),outTangents:bs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ro(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ro(this.settings)&&(Iu(this.settings.inTangents,t),Iu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ro(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Iu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Go;var vi=class extends un{constructor(t,e,i){super(t,e,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=cr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends un{constructor(t,e,i,s){super(t,e,i,s)}};la.prototype.ValueTypeName="color";var ca=class extends un{constructor(t,e,i,s){super(t,e,i,s)}};ca.prototype.ValueTypeName="number";var ha=class extends _i{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Dr=class extends un{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends un{constructor(t,e,i){super(t,e,i)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=cr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends un{constructor(t,e,i,s){super(t,e,i,s)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new da,fa=class{constructor(t){this.manager=t!==void 0?t:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=new N,Po=new tn,Nn=new N,Nr=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Po,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Co,Po,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new N,Lu=new Pt,Du=new Pt,Ve=class extends Nr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pa=class extends Nr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ws=-90,Es=1,Us=class extends _n{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(ws,Es,t,e);s.layers=this.layers,this.add(s);let r=new Ve(ws,Es,t,e);r.layers=this.layers,this.add(r);let o=new Ve(ws,Es,t,e);o.layers=this.layers,this.add(o);let a=new Ve(ws,Es,t,e);a.layers=this.layers,this.add(a);let l=new Ve(ws,Es,t,e);l.layers=this.layers,this.add(l);let c=new Ve(ws,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ma=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Jc="\\[\\]\\.:\\/",Ym=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",qm="[^"+Jc.replace("\\.","")+"]",$m=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Zm=/(WCOD+)?/.source.replace("WCOD",qm),Jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),Km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),jm=new RegExp("^"+$m+Zm+Jm+Km+"$"),Qm=["material","materials","bones","map"],mc=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(t){let e=jm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=mc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PM=new Float32Array(1);var ih=class ih{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ih.prototype.isMatrix2=!0;var gc=ih;function jc(n,t,e,i){let s=t0(i);switch(e){case Fc:return n*t;case Bc:return n*t/s.components*s.byteLength;case ba:return n*t/s.components*s.byteLength;case Si:return n*t*2/s.components*s.byteLength;case wa:return n*t*2/s.components*s.byteLength;case Oc:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case Ea:return n*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kr:case zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(n,16)*Math.max(t,8)/4;case Ta:case Ra:return Math.max(n,8)*Math.max(t,8)/2;case Pa:case Ia:case Da:case Na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case La:case Hr:case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ja:case Ka:case ja:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Qa:case tl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gr:case el:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(n){switch(n){case dn:case Lc:return{byteLength:1,components:1};case ks:case Dc:case In:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Cn:case ya:case Pn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $d(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function l0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,L0=`#define PI 3.141592653589793
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
} // validated`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
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
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform float backgroundBlurriness;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Ex=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,kx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:c0,alphahash_pars_fragment:h0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:x0,batching_vertex:_0,begin_vertex:v0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:b0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:I0,common:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:N0,displacementmap_vertex:U0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:B0,colorspace_pars_fragment:k0,envmap_fragment:z0,envmap_common_pars_fragment:H0,envmap_pars_fragment:G0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:tg,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:Y0,fog_fragment:q0,fog_pars_fragment:$0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:j0,lights_pars_begin:Q0,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:vg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:wg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:zg,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:Yg,shadowmask_pars_fragment:qg,skinbase_vertex:$g,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Kg,specularmap_fragment:jg,specularmap_pars_fragment:Qg,tonemapping_fragment:tx,tonemapping_pars_fragment:ex,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:lx,background_frag:cx,backgroundCube_vert:hx,backgroundCube_frag:ux,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:xx,equirect_vert:_x,equirect_frag:vx,linedashed_vert:yx,linedashed_frag:Mx,meshbasic_vert:Sx,meshbasic_frag:bx,meshlambert_vert:wx,meshlambert_frag:Ex,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Px,meshphong_frag:Ix,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Nx,meshtoon_frag:Ux,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:kx,sprite_vert:zx,sprite_frag:Hx},Ot={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},zn={basic:{uniforms:Ze([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Ze([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Ze([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Ze([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Ze([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Ze([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Ze([Ot.points,Ot.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Ze([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Ze([Ot.common,Ot.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Ze([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Ze([Ot.sprite,Ot.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Ze([Ot.common,Ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Ze([Ot.lights,Ot.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};zn.physical={uniforms:Ze([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var il={r:0,b:0,g:0},Gx=new de,Zd=new ne;Zd.set(-1,0,0,0,1,0,0,0,1);function Vx(n,t,e,i,s,r){let o=new Kt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function m(v){let w=!1,y=f(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),w=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,w){let y=f(w);y&&y.isCubeTexture?(c===void 0&&(c=new xe(new rn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:os(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=he.getTransfer(y.colorSpace)!==me,(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xe(new xi(2,2),new $e({name:"BackgroundMaterial",uniforms:os(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=he.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(il,Zc(n)),e.buffers.color.setClear(il.r,il.g,il.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:_,dispose:p}}function Wx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(L,F,V,P,H){let q=!1,O=d(L,P,V,F);r!==O&&(r=O,c(r.object)),q=f(L,P,V,H),q&&m(L,P,V,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(L,F,V,P),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,F,V,P){let H=P.wireframe===!0,q=i[F.id];q===void 0&&(q={},i[F.id]=q);let O=L.isInstancedMesh===!0?L.id:0,it=q[O];it===void 0&&(it={},q[O]=it);let G=it[V.id];G===void 0&&(G={},it[V.id]=G);let z=G[H];return z===void 0&&(z=u(l()),G[H]=z),z}function u(L){let F=[],V=[],P=[];for(let H=0;H<e;H++)F[H]=0,V[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,F,V,P){let H=r.attributes,q=F.attributes,O=0,it=V.getAttributes();for(let G in it)if(it[G].location>=0){let k=H[G],ct=q[G];if(ct===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),k===void 0||k.attribute!==ct||ct&&k.data!==ct.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function m(L,F,V,P){let H={},q=F.attributes,O=0,it=V.getAttributes();for(let G in it)if(it[G].location>=0){let k=q[G];k===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(k=L.instanceColor));let ct={};ct.attribute=k,k&&k.data&&(ct.data=k.data),H[G]=ct,O++}r.attributes=H,r.attributesNum=O,r.index=P}function _(){let L=r.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function g(L){p(L,0)}function p(L,F){let V=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;V[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),H[L]!==F&&(n.vertexAttribDivisor(L,F),H[L]=F)}function v(){let L=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==L[V]&&(n.disableVertexAttribArray(V),F[V]=0)}function w(L,F,V,P,H,q,O){O===!0?n.vertexAttribIPointer(L,F,V,H,q):n.vertexAttribPointer(L,F,V,P,H,q)}function y(L,F,V,P){_();let H=P.attributes,q=V.getAttributes(),O=F.defaultAttributeValues;for(let it in q){let G=q[it];if(G.location>=0){let z=H[it];if(z===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let k=z.normalized,ct=z.itemSize,gt=t.get(z);if(gt===void 0)continue;let Y=gt.buffer,ft=gt.type,It=gt.bytesPerElement,zt=ft===n.INT||ft===n.UNSIGNED_INT||z.gpuType===ya;if(z.isInterleavedBufferAttribute){let $=z.data,Et=$.isInterleavedBuffer===!0?$.stride:$.itemSize,wt=z.offset;if($.isInstancedInterleavedBuffer||$.isInstancedBufferAttribute){for(let bt=0;bt<G.locationSize;bt++)p(G.location+bt,$.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let bt=0;bt<G.locationSize;bt++)g(G.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let bt=0;bt<G.locationSize;bt++)w(G.location+bt,ct/G.locationSize,ft,k,Et*It,(wt+ct/G.locationSize*bt)*It,zt)}else{if(z.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)p(G.location+$,z.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let $=0;$<G.locationSize;$++)g(G.location+$);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let $=0;$<G.locationSize;$++)w(G.location+$,ct/G.locationSize,ft,k,ct*It,ct/G.locationSize*$*It,zt)}}else if(O!==void 0){let k=O[it];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(G.location,k);break;case 3:n.vertexAttrib3fv(G.location,k);break;case 4:n.vertexAttrib4fv(G.location,k);break;default:n.vertexAttrib1fv(G.location,k)}}}}v()}function S(){R();for(let L in i){let F=i[L];for(let V in F){let P=F[V];for(let H in P){let q=P[H];for(let O in q)h(q[O].object),delete q[O];delete P[H]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let F=i[L.id];for(let V in F){let P=F[V];for(let H in P){let q=P[H];for(let O in q)h(q[O].object),delete q[O];delete P[H]}}delete i[L.id]}function x(L){for(let F in i){let V=i[F];for(let P in V){let H=V[P];if(H[L.id]===void 0)continue;let q=H[L.id];for(let O in q)h(q[O].object),delete q[O];delete H[L.id]}}}function M(L){for(let F in i){let V=i[F],P=L.isInstancedMesh===!0?L.id:0,H=V[P];if(H!==void 0){for(let q in H){let O=H[q];for(let it in O)h(O[it].object),delete O[it];delete H[q]}delete V[P],Object.keys(V).length===0&&delete i[F]}}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Xx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Ln&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==dn&&x!==Pn&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:E}}function qx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Rn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,w=v*4,y=p.clippingState||null;l.value=y,y=h(m,u,w,f);for(let S=0;S!==w;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,y=f;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Xr=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:es});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=Qe),new Us(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ad=256,$x=3,Zx=20,Jd=256,Kd=16,Jx=3,Kx=new N,jx=new Kt,rl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new xe(new rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Kx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(jx));let g=new Us(i,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ad,Yc(t))}_fromTexture(t,e){t.mapping===is||t.mapping===Bs?this._setSize(t.image.length===0?Ad:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Rd(t,!1,!1),i=Math.log2(t)-$x;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Rd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===is||t.mapping===Bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Qx(),this._integrationMaterial=t_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Kd);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Jx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Jd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=e_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Rd(n,t,e){return new Xr(n,{minFilter:ei,generateMipmaps:t,type:In,colorSpace:hr,depthBuffer:e})}function Yr(n,t,e){return new $e({name:n,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:Ue,blending:es,depthTest:!1,depthWrite:!1})}function Qx(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jd}u

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
	`)}function t_(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kd}},`

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
	`)}function e_(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zx}
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
	`)}function Cd(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pd(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===xa||f===_a)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Xr(m.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===xa||f===_a,_=f===is||f===Bs;if(m||_){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new rl(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new rl(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===xa?u.mapping=is:f===_a&&(u.mapping=Bs),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function i_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&sr("WebGLRenderer: "+i+" extension not supported."),s}}}function s_(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let g in _)t.update(_[g],n.ARRAY_BUFFER)}function d(m){let _=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,w=g.count>=65535?xr:gr,y=new w(Math.ceil(v/3)*6,1),S=y.array;if(_!==null){let x=_.array;p=_.version;for(let M=0,R=0;M<v;M+=3){let C=x[M+0],L=x[M+1],F=x[M+2];S[R++]=C,S[R++]=L,S[R++]=L,S[R++]=F,S[R++]=F,S[R++]=C}}else{p=g.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,C=x+1,L=x+2;S[M++]=R,S[M++]=C,S[M++]=C,S[M++]=L,S[M++]=L,S[M++]=R}}y.version=p;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function u(m){let _=r.get(m);if(_){let g=m.index;g!==null&&_.version<g.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function r_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function o_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function a_(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*S*4*d),x=new pr(E,y,S,d);x.type=Pn,x.needsUpdate=!0;let M=w*4;for(let C=0;C<d;C++){let L=g[C],F=p[C],V=v[C],P=y*S*4*C;for(let H=0;H<L.count;H++){let q=H*M;f===!0&&(s.fromBufferAttribute(L,H),E[P+q+0]=s.x,E[P+q+1]=s.y,E[P+q+2]=s.z,E[P+q+3]=0),m===!0&&(s.fromBufferAttribute(F,H),E[P+q+4]=s.x,E[P+q+5]=s.y,E[P+q+6]=s.z,E[P+q+7]=0),_===!0&&(s.fromBufferAttribute(V,H),E[P+q+8]=s.x,E[P+q+9]=s.y,E[P+q+10]=s.z,E[P+q+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Pt(y,S)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function l_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var c_={[wc]:"LINEAR_TONE_MAPPING",[Ec]:"REINHARD_TONE_MAPPING",[Tc]:"CINEON_TONE_MAPPING",[Ac]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Pc]:"NEUTRAL_TONE_MAPPING",[Rc]:"CUSTOM_TONE_MAPPING"};function h_(n,t,e,i,s,r){let o=new hn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new we;h.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ue([0,2,0,0,2,0],2));let d=new ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xe(h,d),f=new pa(-1,1,1,-1,0,1),m=null,_=null,g=!1,p,v=null,w=[],y=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<w.length;x++){let M=w[x];M.setSize&&M.setSize(S,E)}},this.setEffects=function(S){w=S,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new hn(E,x,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new hn(E,x,{type:In,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&w.some(R=>R.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new ti(E,x),r===!0&&(c.format=ni,c.type=ss)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let R=0;R<w.length;R++){let C=w[R];C.setSize&&C.setSize(E,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(S,E){if(g||S.toneMapping===Bn&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,M=E.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&S.setRenderTarget(o),p=S.toneMapping,S.toneMapping=Bn,!0},this.hasRenderPass=function(){return y},this.end=function(S,E){S.toneMapping=p,g=!0;let x=o,M=a;for(let R=0;R<w.length;R++){let C=w[R];C.enabled!==!1&&(C.render(S,M,x,E),C.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,d.defines={},he.getTransfer(m)===me&&(d.defines.SRGB_TRANSFER="");let R=c_[_];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var jd=new en,Qd=new ti(1,1),tf=new yr(1),ef=new pr,nf=new Xo,sf=new _r,Id=[],Ld=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function Gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function al(n,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function u_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function p_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function m_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Oe(e,i)}}function g_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Nd.set(i),n.uniformMatrix3fv(this.addr,!1,Nd),Oe(e,i)}}function x_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),Oe(e,i)}}function __(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function v_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function M_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function S_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function ll(n){return n.version===0&&(n.compareFunction=Gc,n.needsUpdate=!0),n}function T_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ll(Qd):r=jd,e.setTexture2D(t||r,s)}function A_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nf,s)}function R_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ll(tf):r=sf,e.setTextureCube(t||r,s)}function C_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ef,s)}function P_(n){switch(n){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return w_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function I_(n,t){n.uniform1fv(this.addr,t)}function L_(n,t){let e=Gs(t,this.size,2);n.uniform2fv(this.addr,e)}function D_(n,t){let e=Gs(t,this.size,3);n.uniform3fv(this.addr,e)}function N_(n,t){let e=Gs(t,this.size,4);n.uniform4fv(this.addr,e)}function U_(n,t){let e=Gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function F_(n,t){let e=Gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function O_(n,t){let e=Gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function B_(n,t){n.uniform1iv(this.addr,t)}function k_(n,t){n.uniform2iv(this.addr,t)}function z_(n,t){n.uniform3iv(this.addr,t)}function H_(n,t){n.uniform4iv(this.addr,t)}function G_(n,t){n.uniform1uiv(this.addr,t)}function V_(n,t){n.uniform2uiv(this.addr,t)}function W_(n,t){n.uniform3uiv(this.addr,t)}function X_(n,t){n.uniform4uiv(this.addr,t)}function Y_(n,t,e){let i=this.cache,s=t.length,r=al(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ll(Qd):o=jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function q_(n,t,e){let i=this.cache,s=t.length,r=al(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nf,r[o])}function $_(n,t,e){let i=this.cache,s=t.length,r=al(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ll(tf):o=sf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Z_(n,t,e){let i=this.cache,s=t.length,r=al(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ef,r[o])}function J_(n){switch(n){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return k_;case 35668:case 35672:return z_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return V_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}var oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=P_(e.type)}},ah=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J_(e.type)}},lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},sh=/(\w+)(\])?(\[|\.)?/g;function Fd(n,t){n.seq.push(t),n.map[t.id]=t}function K_(n,t,e){let i=n.name,s=i.length;for(sh.lastIndex=0;;){let r=sh.exec(i),o=sh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(e,c===void 0?new oh(a,n,t):new ah(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new lh(a),Fd(e,d)),e=d}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);K_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Od(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var j_=37297,Q_=0;function tv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Bd=new ne;function ev(n){he._getMatrix(Bd,he.workingColorSpace,n);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case ur:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(t),a)}else return r}function nv(n,t){let e=ev(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iv={[wc]:"Linear",[Ec]:"Reinhard",[Tc]:"Cineon",[Ac]:"ACESFilmic",[Cc]:"AgX",[Pc]:"Neutral",[Rc]:"Custom"};function sv(n,t){let e=iv[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new N;function rv(){he.getLuminanceCoefficients(sl);let n=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function av(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wr(n){return n!==""}function zd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Hd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(n){return n.replace(cv,hv)}function hv(n,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ch(e)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(n){return n.replace(uv,dv)}function dv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var fv={[Ur]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function pv(n){return fv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mv={[Bs]:"ENVMAP_MODE_REFRACTION"};function gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xv={[bc]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function _v(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xv[n.combine]||"ENVMAP_BLENDING_NONE"}function vv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=pv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gv(e),d=_v(e),u=ov(e),f=av(r),m=s.createProgram(),_,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Wr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Wr).join(`
`),g.length>0&&(g+=`
`)):(_=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),g=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Bn?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=ch(o),o=zd(o,e),o=Hd(o,e),a=ch(a),a=zd(a,e),a=Hd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+_+o,w=p+g+a,y=Od(s,s.VERTEX_SHADER,v),S=Od(s,s.FRAGMENT_SHADER,w);s.attachShader(m,y),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(C){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(S)||"",P=L.trim(),H=F.trim(),q=V.trim(),O=!0,it=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,S);else{let G=kd(s,y,"vertex"),z=kd(s,S,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+G+`
`+z)}else P!==""?Qt("WebGLProgram: Program Info Log:",P):(H===""||q==="")&&(it=!1);it&&(C.diagnostics={runnable:O,programLog:P,vertexShader:{log:H,prefix:_},fragmentShader:{log:q,prefix:g}})}s.deleteShader(y),s.deleteShader(S),x=new Hs(s,m),M=lv(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,j_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var yv=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new uh(t),e.set(t,i)),i}},uh=class{constructor(t){this.id=yv++,this.code=t,this.usedTimes=0}};function Mv(n){return n===Si||n===Hr||n===Gr}function Sv(n,t,e,i,s,r){let o=new mr,a=new hh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,R,C,L,F){let V=C.fog,P=L.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||H,q),it=u[x.type],G=i.precision;x.precision!==null&&(G=i.getMaxPrecision(x.precision),G!==x.precision&&Qt("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=z!==void 0?z.length:0,ct=0;P.morphAttributes.position!==void 0&&(ct=1),P.morphAttributes.normal!==void 0&&(ct=2),P.morphAttributes.color!==void 0&&(ct=3);let gt,Y,ft,It;if(it){let St=zn[it];gt=St.vertexShader,Y=St.fragmentShader}else{gt=x.vertexShader,Y=x.fragmentShader;let St=a.getVertexShaderStage(x),Jt=a.getFragmentShaderStage(x);a.update(x,St,Jt),ft=St.id,It=Jt.id}let zt=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),Et=L.isInstancedMesh===!0,wt=L.isBatchedMesh===!0,bt=!!x.map,qt=!!x.matcap,te=!!O,et=te&&O.isPMREMTexture===!0,ht=!!x.aoMap,mt=!!x.lightMap,dt=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,Ut=!!x.displacementMap,Lt=!!x.emissiveMap,Ht=!!x.metalnessMap,Zt=!!x.roughnessMap,jt=x.anisotropy>0,D=x.clearcoat>0,at=x.diffuseRoughness>0,Tt=x.dispersion>0,Wt=x.retroreflectivity>0,st=x.iridescence>0,ie=x.sheen>0,Ft=x.transmission>0,Bt=jt&&!!x.anisotropyMap,A=D&&!!x.clearcoatMap,b=D&&!!x.clearcoatNormalMap,B=D&&!!x.clearcoatRoughnessMap,ut=at&&!!x.diffuseRoughnessMap,tt=st&&!!x.iridescenceMap,pt=st&&!!x.iridescenceThicknessMap,_t=ie&&!!x.sheenColorMap,K=ie&&!!x.sheenRoughnessMap,j=!!x.specularMap,Mt=!!x.specularColorMap,I=!!x.specularIntensityMap,Q=Ft&&!!x.transmissionMap,J=Ft&&!!x.thicknessMap,yt=!!x.gradientMap,vt=!!x.alphaMap,ot=x.alphaTest>0,lt=!!x.alphaHash,Dt=!!x.extensions,nt=Bn;x.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(nt=n.toneMapping);let At=et?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Gt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:gt,fragmentShader:Y,defines:x.defines,customVertexShaderID:ft,customFragmentShaderID:It,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:wt,batchingColor:wt&&L._colorsTexture!==null,instancing:Et,instancingColor:Et&&L.instanceColor!==null,instancingMorph:Et&&L.morphTexture!==null,outputColorSpace:zt===null?n.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:bt,matcap:qt,envMap:te,envMapMode:te&&O.mapping,envMapPMREM:et,envMapMaxLod:et?At.length-1:null,envMapSize:et?At[0].width:null,aoMap:ht,lightMap:mt,bumpMap:dt,normalMap:rt,displacementMap:Ut,emissiveMap:Lt,normalMapObjectSpace:rt&&x.normalMapType===rd,normalMapTangentSpace:rt&&x.normalMapType===kc,packedNormalMap:rt&&x.normalMapType===kc&&Mv(x.normalMap.format),metalnessMap:Ht,roughnessMap:Zt,anisotropy:jt,anisotropyMap:Bt,clearcoat:D,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:at,diffuseRoughnessMap:ut,dispersion:Tt,retroreflection:Wt,iridescence:st,iridescenceMap:tt,iridescenceThicknessMap:pt,sheen:ie,sheenColorMap:_t,sheenRoughnessMap:K,specularMap:j,specularColorMap:Mt,specularIntensityMap:I,transmission:Ft,transmissionMap:Q,thicknessMap:J,gradientMap:yt,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:ot,alphaHash:lt,combine:x.combine,mapUv:bt&&f(x.map.channel),aoMapUv:ht&&f(x.aoMap.channel),lightMapUv:mt&&f(x.lightMap.channel),bumpMapUv:dt&&f(x.bumpMap.channel),normalMapUv:rt&&f(x.normalMap.channel),displacementMapUv:Ut&&f(x.displacementMap.channel),emissiveMapUv:Lt&&f(x.emissiveMap.channel),metalnessMapUv:Ht&&f(x.metalnessMap.channel),roughnessMapUv:Zt&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:Mt&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:vt&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(rt||jt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(bt||vt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ct,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Ue,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Dt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&x.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(M,x),p(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=u[x.type],R;if(M){let C=zn[M];R=wd.clone(C.uniforms)}else R=x.uniforms;return R}function w(x,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new vv(n,M,x,s),c.push(R),h.set(M,R)),R}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function bv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,g,p){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},n[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=p),t++,v}function l(u,f,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);let w=a(u,f,m,_,g,p);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(u,f,m,_,g,p){let v=a(u,f,m,_,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||wv),i.length>1&&i.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ev(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Xd,n.set(i,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Rv=0;function Cv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Pv(n){let t=new Tv,e=Av(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new de,o=new de;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,w=0,y=0,S=0,E=0,x=0,M=0,R=0,C=0;c.sort(Cv);for(let F=0,V=c.length;F<V;F++){let P=c[F],H=P.color,q=P.intensity,O=P.distance,it=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?it=P.shadow.map.texture:it=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],q);C++}else if(P.isSunLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[m]=k,i.sunShadowMap[m]=it;let ct=z.getViewportCount();for(let gt=0;gt<ct;gt++)i.sunShadowMatrix[_+gt]=z.getMatrix(gt),i.sunShadowCascade[_+gt]=z._cascadeData[gt];_+=ct,m++}i.sun[f]=G,f++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=G,g++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(q),G.distance=O,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[v]=G;let z=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,z.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=z.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=it,x++}v++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(H).multiplyScalar(q),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=G,w++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let z=P.shadow,k=e.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=G,p++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(q),G.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[y]=G,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==w||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=v,L.rectAreaLength=w,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=C,i.version=Rv++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Yd(n){let t=new Pv(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yd(n),t.set(s,[a])):r>=o.length?(a=new Yd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`,Nv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Uv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],qd=new de,Vr=new N,rh=new N;function Fv(n,t,e){let i=new Ki,s=new Pt,r=new Pt,o=new Re,a=new na,l=new ia,c={},h=e.maxTextureSize,d={[Mi]:Ue,[Ue]:Mi,[Mn]:Mn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new we;m.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(E,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Fu&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let R=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(es),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=E.length;P<H;P++){let q=E[P],O=q.shadow;if(O===void 0){Qt("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let it=O.getFrameExtents();s.multiply(it),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,O.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Fs){if(q.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hn(s.x,s.y,{format:Si,type:In,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new ti(s.x,s.y,Pn),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=Qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ze,O.map.depthTexture.magFilter=ze}else q.isPointLight?(O.map=new Xr(s.x),O.map.depthTexture=new yr(s.x,Cn)):(O.map=new hn(s.x,s.y),O.map.depthTexture=new ti(s.x,s.y,Cn)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=Qn,this.type===Ur?(O.map.depthTexture.compareFunction=G?Hc:zc,O.map.depthTexture.minFilter=Qe,O.map.depthTexture.magFilter=Qe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ze,O.map.depthTexture.magFilter=ze);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,M);let k=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let ct=0;ct<z;ct++){let gt=O.getCamera(ct);if(q.isPointLight){let Y=O.camera,ft=O.matrix,It=q.distance||Y.far;It!==Y.far&&(Y.far=It,Y.updateProjectionMatrix()),Vr.setFromMatrixPosition(q.matrixWorld),Y.position.copy(Vr),rh.copy(Y.position),rh.add(Nv[ct]),Y.up.copy(Uv[ct]),Y.lookAt(rh),Y.updateMatrixWorld(),ft.makeTranslation(-Vr.x,-Vr.y,-Vr.z),qd.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qd,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ct),n.clear();else{ct===0&&(n.setRenderTarget(O.map),n.clear());let Y=O.getViewport(ct);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o)}i=O.getFrustum(ct),y(x,M,gt,q,k,this.type)}O.isPointLightShadow!==!0&&this.type===Fs&&v(O,M),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(R,C,L)};function v(E,x){let M=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new hn(s.x,s.y,{format:Si,type:In}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(x,null,M,f,_,null)}function w(E,x,M,R){let C=null,L=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=M.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=C.uuid,V=x.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let H=P[V];H===void 0&&(H=C.clone(),P[V]=H,x.addEventListener("dispose",S)),C=H}if(C.visible=x.visible,C.wireframe=x.wireframe,R===Fs?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=M}return C}function y(E,x,M,R,C,L){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Fs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=t.update(E),H=E.material;if(Array.isArray(H)){let q=P.groups;for(let O=0,it=q.length;O<it;O++){let G=q[O],z=H[G.materialIndex];if(z&&z.visible){let k=w(E,z,R,L);E.onBeforeShadow(n,E,x,M,P,k,G),n.renderBufferDirect(M,null,P,k,E,G),E.onAfterShadow(n,E,x,M,P,k,G)}}}else if(H.visible){let q=w(E,H,R,L);E.onBeforeShadow(n,E,x,M,P,q,null),n.renderBufferDirect(M,null,P,q,E,null),E.onAfterShadow(n,E,x,M,P,q,null)}}let V=E.children;for(let P=0,H=V.length;P<H;P++)y(V[P],x,M,R,C,L)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let R=c[M],C=E.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function Ov(n,t){function e(){let I=!1,Q=new Re,J=null,yt=new Re(0,0,0,0);return{setMask:function(vt){J!==vt&&!I&&(n.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){I=vt},setClear:function(vt,ot,lt,Dt,nt){nt===!0&&(vt*=Dt,ot*=Dt,lt*=Dt),Q.set(vt,ot,lt,Dt),yt.equals(Q)===!1&&(n.clearColor(vt,ot,lt,Dt),yt.copy(Q))},reset:function(){I=!1,J=null,yt.set(-1,0,0,0)}}}function i(){let I=!1,Q=!1,J=null,yt=null,vt=null;return{setReversed:function(ot){if(Q!==ot){let lt=t.get("EXT_clip_control");ot?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Q=ot;let Dt=vt;vt=null,this.setClear(Dt)}},getReversed:function(){return Q},setTest:function(ot){ot?$(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(ot){J!==ot&&!I&&(n.depthMask(ot),J=ot)},setFunc:function(ot){if(Q&&(ot=gd[ot]),yt!==ot){switch(ot){case Do:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=ot}},setLocked:function(ot){I=ot},setClear:function(ot){vt!==ot&&(vt=ot,Q&&(ot=1-ot),n.clearDepth(ot))},reset:function(){I=!1,J=null,yt=null,vt=null,Q=!1}}}function s(){let I=!1,Q=null,J=null,yt=null,vt=null,ot=null,lt=null,Dt=null,nt=null;return{setTest:function(At){I||(At?$(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(At){Q!==At&&!I&&(n.stencilMask(At),Q=At)},setFunc:function(At,Gt,St){(J!==At||yt!==Gt||vt!==St)&&(n.stencilFunc(At,Gt,St),J=At,yt=Gt,vt=St)},setOp:function(At,Gt,St){(ot!==At||lt!==Gt||Dt!==St)&&(n.stencilOp(At,Gt,St),ot=At,lt=Gt,Dt=St)},setLocked:function(At){I=At},setClear:function(At){nt!==At&&(n.clearStencil(At),nt=At)},reset:function(){I=!1,Q=null,J=null,yt=null,vt=null,ot=null,lt=null,Dt=null,nt=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,v=null,w=null,y=null,S=null,E=null,x=null,M=new Kt(0,0,0),R=0,C=!1,L=null,F=null,V=null,P=null,H=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,it=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=it>=2);let z=null,k={},ct=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Y=new Re().fromArray(ct),ft=new Re().fromArray(gt);function It(I,Q,J,yt){let vt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(I,ot),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<J;lt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(Q+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return ot}let zt={};zt[n.TEXTURE_2D]=It(n.TEXTURE_2D,n.TEXTURE_2D,1),zt[n.TEXTURE_CUBE_MAP]=It(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[n.TEXTURE_2D_ARRAY]=It(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),zt[n.TEXTURE_3D]=It(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(As),dt(!1),rt(xc),$(n.CULL_FACE),ht(es);function $(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Et(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function wt(I,Q){return u[I]!==Q?(n.bindFramebuffer(I,Q),u[I]=Q,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function bt(I,Q){let J=m,yt=!1;if(I){J=f.get(Q),J===void 0&&(J=[],f.set(Q,J));let vt=I.textures;if(J.length!==vt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,lt=vt.length;ot<lt;ot++)J[ot]=n.COLOR_ATTACHMENT0+ot;J.length=vt.length,yt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,yt=!0);yt&&n.drawBuffers(J)}function qt(I){return _!==I?(n.useProgram(I),_=I,!0):!1}let te={[ns]:n.FUNC_ADD,[Bu]:n.FUNC_SUBTRACT,[ku]:n.FUNC_REVERSE_SUBTRACT};te[zu]=n.MIN,te[Hu]=n.MAX;let et={[Gu]:n.ZERO,[Vu]:n.ONE,[Wu]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[Ju]:n.SRC_ALPHA_SATURATE,[$u]:n.DST_COLOR,[Yu]:n.DST_ALPHA,[Xu]:n.ONE_MINUS_SRC_COLOR,[Sc]:n.ONE_MINUS_SRC_ALPHA,[Zu]:n.ONE_MINUS_DST_COLOR,[qu]:n.ONE_MINUS_DST_ALPHA,[Ku]:n.CONSTANT_COLOR,[ju]:n.ONE_MINUS_CONSTANT_COLOR,[Qu]:n.CONSTANT_ALPHA,[td]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(I,Q,J,yt,vt,ot,lt,Dt,nt,At){if(I===es){g===!0&&(Et(n.BLEND),g=!1);return}if(g===!1&&($(n.BLEND),g=!0),I!==Ou){if(I!==p||At!==C){if((v!==ns||S!==ns)&&(n.blendEquation(n.FUNC_ADD),v=ns,S=ns),At)switch(I){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",I);break}else switch(I){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",I);break}w=null,y=null,E=null,x=null,M.set(0,0,0),R=0,p=I,C=At}return}vt=vt||Q,ot=ot||J,lt=lt||yt,(Q!==v||vt!==S)&&(n.blendEquationSeparate(te[Q],te[vt]),v=Q,S=vt),(J!==w||yt!==y||ot!==E||lt!==x)&&(n.blendFuncSeparate(et[J],et[yt],et[ot],et[lt]),w=J,y=yt,E=ot,x=lt),(Dt.equals(M)===!1||nt!==R)&&(n.blendColor(Dt.r,Dt.g,Dt.b,nt),M.copy(Dt),R=nt),p=I,C=!1}function mt(I,Q){I.side===Mn?Et(n.CULL_FACE):$(n.CULL_FACE);let J=I.side===Ue;Q&&(J=!J),dt(J),I.blending===Os&&I.transparent===!1?ht(es):ht(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let yt=I.stencilWrite;a.setTest(yt),yt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function rt(I){I!==Nu?($(n.CULL_FACE),I!==F&&(I===xc?n.cullFace(n.BACK):I===Uu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),F=I}function Ut(I){I!==V&&(O&&n.lineWidth(I),V=I)}function Lt(I,Q,J){I?($(n.POLYGON_OFFSET_FILL),(P!==Q||H!==J)&&(P=Q,H=J,o.getReversed()&&(Q=-Q,J=-J),n.polygonOffset(Q,J))):Et(n.POLYGON_OFFSET_FILL)}function Ht(I){I?$(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function Zt(I){I===void 0&&(I=n.TEXTURE0+q-1),z!==I&&(n.activeTexture(I),z=I)}function jt(I,Q,J){J===void 0&&(z===null?J=n.TEXTURE0+q-1:J=z);let yt=k[J];yt===void 0&&(yt={type:void 0,texture:void 0},k[J]=yt),(yt.type!==I||yt.texture!==Q)&&(z!==J&&(n.activeTexture(J),z=J),n.bindTexture(I,Q||zt[I]),yt.type=I,yt.texture=Q)}function D(){let I=k[z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function Tt(){try{n.compressedTexImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function Wt(){try{n.texSubImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function st(){try{n.texSubImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function Bt(){try{n.texStorage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function A(){try{n.texStorage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function b(){try{n.texImage2D(...arguments)}catch(I){ee("WebGLState:",I)}}function B(){try{n.texImage3D(...arguments)}catch(I){ee("WebGLState:",I)}}function ut(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function tt(I,Q){d[I]!==Q&&(n.pixelStorei(I,Q),d[I]=Q)}function pt(I){Y.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function _t(I){ft.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ft.copy(I))}function K(I,Q){let J=c.get(Q);J===void 0&&(J=new WeakMap,c.set(Q,J));let yt=J.get(I);yt===void 0&&(yt=n.getUniformBlockIndex(Q,I.name),n.uniformBlockBinding(Q,yt,yt),J.set(I,yt))}function j(I,Q,J){let vt=c.get(Q).get(I);l[vt]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,vt,J),l[vt]=J)}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,k={},u={},l={},f=new WeakMap,m=[],_=null,g=!1,p=null,v=null,w=null,y=null,S=null,E=null,x=null,M=new Kt(0,0,0),R=0,C=!1,L=null,F=null,V=null,P=null,H=null,Y.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:Et,bindFramebuffer:wt,drawBuffers:bt,useProgram:qt,setBlending:ht,setMaterial:mt,setFlipSided:dt,setCullFace:rt,setLineWidth:Ut,setPolygonOffset:Lt,setScissorTest:Ht,activeTexture:Zt,bindTexture:jt,unbindTexture:D,compressedTexImage2D:at,compressedTexImage3D:Tt,texImage2D:b,texImage3D:B,pixelStorei:tt,getParameter:ut,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Bt,texStorage3D:A,texSubImage2D:Wt,texSubImage3D:st,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ft,scissor:pt,viewport:_t,reset:Mt}}function Bv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return g?new OffscreenCanvas(A,b):fr("canvas")}function v(A,b,B){let ut=1,tt=Bt(A);if((tt.width>B||tt.height>B)&&(ut=B/Math.max(tt.width,tt.height)),ut<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pt=Math.floor(ut*tt.width),_t=Math.floor(ut*tt.height);u===void 0&&(u=p(pt,_t));let K=b?p(pt,_t):u;return K.width=pt,K.height=_t,K.getContext("2d").drawImage(A,0,0,pt,_t),Qt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+pt+"x"+_t+")."),K}else return"data"in A&&Qt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,b,B,ut,tt,pt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t;ut&&(_t=t.get("EXT_texture_norm16"),_t||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8),B===n.UNSIGNED_SHORT&&_t&&(K=_t.R16_EXT),B===n.SHORT&&_t&&(K=_t.R16_SNORM_EXT)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),b===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8),B===n.UNSIGNED_SHORT&&_t&&(K=_t.RG16_EXT),B===n.SHORT&&_t&&(K=_t.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(B===n.UNSIGNED_SHORT&&_t&&(K=_t.RGB16_EXT),B===n.SHORT&&_t&&(K=_t.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){let j=pt?ur:he.getTransfer(tt);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=j===me?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&_t&&(K=_t.RGBA16_EXT),B===n.SHORT&&_t&&(K=_t.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(A,b){let B;return A?b===null||b===Cn||b===ss?B=n.DEPTH24_STENCIL8:b===Pn?B=n.DEPTH32F_STENCIL8:b===ks&&(B=n.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cn||b===ss?B=n.DEPTH_COMPONENT24:b===Pn?B=n.DEPTH_COMPONENT32F:b===ks&&(B=n.DEPTH_COMPONENT16),B}function M(A,b){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==ze&&A.minFilter!==Qe?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){let b=new WeakRef(A);i.get(A).__ref=b,m.add(b),_.register(A,b,b)}function C(A){let b=i.get(A).__ref;b!==void 0&&(m.delete(b),_.unregister(b))}function L(A){V(A.target)}function F(A){P(A.target)}function V(A){A.removeEventListener("dispose",L),C(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",F),C(A),it(A)}function H(){for(let A of m){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):V(b))}m.clear(),d.clear()}function q(A){let b=i.get(A);if(b.__webglInit===void 0)return;let B=A.source,ut=f.get(B);if(ut){let tt=ut[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&O(A),Object.keys(ut).length===0&&f.delete(B)}i.remove(A)}function O(A){let b=i.get(A);n.deleteTexture(b.__webglTexture);let B=A.source,ut=f.get(B);delete ut[b.__cacheKey],o.memory.textures--}function it(A){let b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&V(B),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let pt=0;pt<b.__webglFramebuffer[tt].length;pt++)n.deleteFramebuffer(b.__webglFramebuffer[tt][pt]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ut=A.textures;for(let tt=0,pt=ut.length;tt<pt;tt++){let _t=i.get(ut[tt]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),o.memory.textures--),i.remove(ut[tt])}i.remove(A)}let G=0;function z(){G=0}function k(){return G}function ct(A){G=A}function gt(){let A=G;return A>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function Y(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function ft(A,b){let B=i.get(A);if(A.isVideoTexture&&ie(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ut=A.image;if(ut===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,A,b);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function It(A,b){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){mt(B,A,b);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function zt(A,b){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){mt(B,A,b);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function $(A,b){let B=i.get(A);if(A.version>0&&B.__version!==A.version){dt(B,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}let Et={[zo]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},wt={[ze]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[ei]:n.LINEAR_MIPMAP_LINEAR},bt={[ad]:n.NEVER,[Gc]:n.ALWAYS,[ld]:n.LESS,[zc]:n.LEQUAL,[cd]:n.EQUAL,[Hc]:n.GEQUAL,[hd]:n.GREATER,[ud]:n.NOTEQUAL};function qt(A,b){if(b.type===Pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qe||b.magFilter===va||b.magFilter===Fr||b.magFilter===ei||b.minFilter===Qe||b.minFilter===va||b.minFilter===Fr||b.minFilter===ei)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Et[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Et[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Et[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,wt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ze||b.minFilter!==Fr&&b.minFilter!==ei||b.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function te(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",L),R(b));let ut=b.source,tt=f.get(ut);tt===void 0&&(tt={},f.set(ut,tt));let pt=Y(b);if(pt!==A.__cacheKey){tt[pt]===void 0&&(tt[pt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[pt].usedTimes++;let _t=tt[A.__cacheKey];_t!==void 0&&(tt[A.__cacheKey].usedTimes--,_t.usedTimes===0&&O(b)),A.__cacheKey=pt,A.__webglTexture=tt[pt].texture}return B}function et(A,b,B){return Math.floor(Math.floor(A/B)/b)}function ht(A,b,B,ut){let pt=A.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,B,ut,b.data);else{pt.sort((I,Q)=>I.start-Q.start);let _t=0;for(let I=1;I<pt.length;I++){let Q=pt[_t],J=pt[I],yt=Q.start+Q.count,vt=et(J.start,b.width,4),ot=et(Q.start,b.width,4);J.start<=yt+1&&vt===ot&&et(J.start+J.count-1,b.width,4)===vt?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++_t,pt[_t]=J)}pt.length=_t+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let I=0,Q=pt.length;I<Q;I++){let J=pt[I],yt=Math.floor(J.start/4),vt=Math.ceil(J.count/4),ot=yt%b.width,lt=Math.floor(yt/b.width),Dt=vt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(n.UNPACK_SKIP_ROWS,lt),e.texSubImage2D(n.TEXTURE_2D,0,ot,lt,Dt,nt,B,ut,b.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function mt(A,b,B){let ut=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=n.TEXTURE_3D);let tt=te(A,b),pt=b.source;e.bindTexture(ut,A.__webglTexture,n.TEXTURE0+B);let _t=i.get(pt);if(pt.version!==_t.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let nt=he.getPrimaries(he.workingColorSpace),At=b.colorSpace===ii?null:he.getPrimaries(b.colorSpace),Gt=b.colorSpace===ii||nt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let j=v(b.image,!1,s.maxTextureSize);j=Ft(b,j);let Mt=r.convert(b.format,b.colorSpace),I=r.convert(b.type),Q=E(b.internalFormat,Mt,I,b.normalized,b.colorSpace,b.isVideoTexture);qt(ut,b);let J,yt=b.mipmaps,vt=b.isVideoTexture!==!0,ot=_t.__version===void 0||tt===!0,lt=pt.dataReady,Dt=M(b,j);if(b.isDepthTexture)Q=x(b.format===ni,b.type),ot&&(vt?e.texStorage2D(n.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,Q,j.width,j.height,0,Mt,I,null));else if(b.isDataTexture)if(yt.length>0){vt&&ot&&e.texStorage2D(n.TEXTURE_2D,Dt,Q,yt[0].width,yt[0].height);for(let nt=0,At=yt.length;nt<At;nt++)J=yt[nt],vt?lt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,J.width,J.height,Mt,I,J.data):e.texImage2D(n.TEXTURE_2D,nt,Q,J.width,J.height,0,Mt,I,J.data);b.generateMipmaps=!1}else vt?(ot&&e.texStorage2D(n.TEXTURE_2D,Dt,Q,j.width,j.height),lt&&ht(b,j,Mt,I)):e.texImage2D(n.TEXTURE_2D,0,Q,j.width,j.height,0,Mt,I,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){vt&&ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,Q,yt[0].width,yt[0].height,j.depth);for(let nt=0,At=yt.length;nt<At;nt++)if(J=yt[nt],b.format!==Ln)if(Mt!==null)if(vt){if(lt)if(b.layerUpdates.size>0){let Gt=jc(J.width,J.height,b.format,b.type);for(let St of b.layerUpdates){let Jt=J.data.subarray(St*Gt/J.data.BYTES_PER_ELEMENT,(St+1)*Gt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,St,J.width,J.height,1,Mt,Jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,J.width,J.height,j.depth,Mt,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Q,J.width,J.height,j.depth,0,J.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,J.width,J.height,j.depth,Mt,I,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Q,J.width,J.height,j.depth,0,Mt,I,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{vt&&ot&&e.texStorage2D(n.TEXTURE_2D,Dt,Q,yt[0].width,yt[0].height);for(let nt=0,At=yt.length;nt<At;nt++)J=yt[nt],b.format!==Ln?Mt!==null?vt?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,J.width,J.height,Mt,J.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Q,J.width,J.height,0,J.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?lt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,J.width,J.height,Mt,I,J.data):e.texImage2D(n.TEXTURE_2D,nt,Q,J.width,J.height,0,Mt,I,J.data)}else if(b.isDataArrayTexture)if(vt){if(ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,Q,j.width,j.height,j.depth),lt)if(b.layerUpdates.size>0){let nt=jc(j.width,j.height,b.format,b.type);for(let At of b.layerUpdates){let Gt=j.data.subarray(At*nt/j.data.BYTES_PER_ELEMENT,(At+1)*nt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,j.width,j.height,1,Mt,I,Gt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Mt,I,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,Mt,I,j.data);else if(b.isData3DTexture)vt?(ot&&e.texStorage3D(n.TEXTURE_3D,Dt,Q,j.width,j.height,j.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Mt,I,j.data)):e.texImage3D(n.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,Mt,I,j.data);else if(b.isFramebufferTexture){if(ot)if(vt)e.texStorage2D(n.TEXTURE_2D,Dt,Q,j.width,j.height);else{let nt=j.width,At=j.height;for(let Gt=0;Gt<Dt;Gt++)e.texImage2D(n.TEXTURE_2D,Gt,Q,nt,At,0,Mt,I,null),nt>>=1,At>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),j.parentNode!==nt){nt.appendChild(j),d.add(b),nt.onpaint=At=>{let Gt=At.changedElements;for(let St of d)Gt.includes(St.image)&&(St.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Gt=n.RGBA,St=n.RGBA,Jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Gt,St,Jt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(yt.length>0){if(vt&&ot){let nt=Bt(yt[0]);e.texStorage2D(n.TEXTURE_2D,Dt,Q,nt.width,nt.height)}for(let nt=0,At=yt.length;nt<At;nt++)J=yt[nt],vt?lt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Mt,I,J):e.texImage2D(n.TEXTURE_2D,nt,Q,Mt,I,J);b.generateMipmaps=!1}else if(vt){if(ot){let nt=Bt(j);e.texStorage2D(n.TEXTURE_2D,Dt,Q,nt.width,nt.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,I,j)}else e.texImage2D(n.TEXTURE_2D,0,Q,Mt,I,j);w(b)&&b.mipmapsAutoUpdate===!0&&y(ut),_t.__version=pt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function dt(A,b,B){if(b.image.length!==6)return;let ut=te(A,b),tt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);let pt=i.get(tt);if(tt.version!==pt.__version||ut===!0){e.activeTexture(n.TEXTURE0+B);let _t=he.getPrimaries(he.workingColorSpace),K=b.colorSpace===ii?null:he.getPrimaries(b.colorSpace),j=b.colorSpace===ii||_t===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,I=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let St=0;St<6;St++)!Mt&&!I?Q[St]=v(b.image[St],!0,s.maxCubemapSize):Q[St]=I?b.image[St].image:b.image[St],Q[St]=Ft(b,Q[St]);let J=Q[0],yt=r.convert(b.format,b.colorSpace),vt=r.convert(b.type),ot=E(b.internalFormat,yt,vt,b.normalized,b.colorSpace),lt=b.isVideoTexture!==!0,Dt=pt.__version===void 0||ut===!0,nt=tt.dataReady,At=M(b,J);qt(n.TEXTURE_CUBE_MAP,b);let Gt;if(b.isDepthTexture){if(ot=x(b.format===ni,b.type),Dt)if(lt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ot,J.width,J.height);else for(let St=0;St<6;St++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ot,J.width,J.height,0,yt,vt,null)}else if(Mt){lt&&Dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ot,J.width,J.height);for(let St=0;St<6;St++){Gt=Q[St].mipmaps;for(let Jt=0;Jt<Gt.length;Jt++){let re=Gt[Jt];b.format!==Ln?yt!==null?lt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,0,0,re.width,re.height,yt,re.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,ot,re.width,re.height,0,re.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,0,0,re.width,re.height,yt,vt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,ot,re.width,re.height,0,yt,vt,re.data)}}}else{if(Gt=b.mipmaps,lt&&Dt){Gt.length>0&&At++;let St=Bt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ot,St.width,St.height)}for(let St=0;St<6;St++)if(I){lt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Q[St].width,Q[St].height,yt,vt,Q[St].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ot,Q[St].width,Q[St].height,0,yt,vt,Q[St].data);for(let Jt=0;Jt<Gt.length;Jt++){let ve=Gt[Jt].image[St].image;lt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,0,0,ve.width,ve.height,yt,vt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,ot,ve.width,ve.height,0,yt,vt,ve.data)}}else{lt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,yt,vt,Q[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ot,yt,vt,Q[St]);for(let Jt=0;Jt<Gt.length;Jt++){let re=Gt[Jt];lt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,0,0,yt,vt,re.image[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,ot,yt,vt,re.image[St])}}}w(b)&&b.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),pt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function rt(A,b,B,ut,tt,pt){let _t=r.convert(B.format,B.colorSpace),K=r.convert(B.type),j=E(B.internalFormat,_t,K,B.normalized,B.colorSpace),Mt=i.get(b),I=i.get(B);if(I.__renderTarget=b,!Mt.__hasExternalTextures){let Q=Math.max(1,b.width>>pt),J=Math.max(1,b.height>>pt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,pt,j,Q,J,b.depth,0,_t,K,null):e.texImage2D(tt,pt,j,Q,J,0,_t,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),st(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,tt,I.__webglTexture,0,Wt(b)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,tt,I.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(A,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){let ut=b.depthTexture,tt=ut&&ut.isDepthTexture?ut.type:null,pt=x(b.stencilBuffer,tt),_t=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;st(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(b),pt,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(b),pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,A)}else{let ut=b.textures;for(let tt=0;tt<ut.length;tt++){let pt=ut[tt],_t=r.convert(pt.format,pt.colorSpace),K=r.convert(pt.type),j=E(pt.internalFormat,_t,K,pt.normalized,pt.colorSpace);st(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(b),j,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(b),j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(A,b,B){let ut=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(b.depthTexture);tt.__renderTarget=b;let pt=ut?b.depthTexture.image[0]:b.depthTexture.image;(!tt.__webglTexture||pt.width!==b.width||pt.height!==b.height)&&(pt.width=b.width,pt.height=b.height,b.depthTexture.needsUpdate=!0),ut?$(b.depthTexture,0):ft(b.depthTexture,0);let _t=tt.__webglTexture,K=Wt(b),j=ut?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Mt=b.depthTexture.format===ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Qn)st(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,j,_t,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,j,_t,0);else if(b.depthTexture.format===ni)st(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,j,_t,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,j,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(A){let b=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let ut=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",tt)};ut.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=ut}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let ut=0;ut<6;ut++)Lt(b.__webglFramebuffer[ut],A,ut);else A.texture.mipmaps.length>0?Lt(b.__webglFramebuffer[0],A,0):Lt(b.__webglFramebuffer,A,0);else if(B){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=n.createRenderbuffer(),Ut(b.__webglDepthbuffer[ut],A,!1);else{let tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,pt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ut(b.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,pt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(A,b,B){let ut=i.get(A);b!==void 0&&rt(ut.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ht(A)}function jt(A){let b=A.texture,B=i.get(A),ut=i.get(b);A.addEventListener("dispose",F),R(A);let tt=A.textures,pt=A.isWebGLCubeRenderTarget===!0,_t=tt.length>1;if(_t||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=b.version,o.memory.textures++),pt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<b.mipmaps.length;j++)B.__webglFramebuffer[K][j]=n.createFramebuffer()}else B.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)B.__webglFramebuffer[K]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(_t)for(let K=0,j=tt.length;K<j;K++){let Mt=i.get(tt[K]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&st(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){let j=tt[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let Mt=r.convert(j.format,j.colorSpace),I=r.convert(j.type),Q=E(j.internalFormat,Mt,I,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),J=Wt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),qt(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)rt(B.__webglFramebuffer[K][j],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else rt(B.__webglFramebuffer[K],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(b)?y(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let K=0,j=tt.length;K<j;K++){let Mt=tt[K],I=i.get(Mt),Q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),qt(Q,Mt),rt(B.__webglFramebuffer,A,Mt,n.COLOR_ATTACHMENT0+K,Q,0),w(Mt)&&y(Q)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,ut.__webglTexture),qt(K,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)rt(B.__webglFramebuffer[j],A,b,n.COLOR_ATTACHMENT0,K,j);else rt(B.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,K,0);w(b)?y(K):b.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Ht(A)}function D(A){let b=A.textures;for(let B=0,ut=b.length;B<ut;B++){let tt=b[B];if(w(tt)&&tt.mipmapsAutoUpdate===!0){let pt=S(A),_t=i.get(tt).__webglTexture;e.bindTexture(pt,_t),y(pt),e.unbindTexture()}}}let at=[];function Tt(A){if(A.samples>0){if(st(A)===!1){let b=A.textures,B=A.width,ut=A.height,tt=n.COLOR_BUFFER_BIT,pt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(A),K=b.length>1;if(K)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let I=i.get(b[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,B,ut,0,0,B,ut,tt,n.NEAREST),l===!0&&(at.length=0,at.push(n.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&at.push(pt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let I=i.get(b[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,I,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Wt(A){return Math.min(s.maxSamples,A.samples)}function st(A){let b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ie(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Ft(A,b){let B=A.colorSpace,ut=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==hr&&B!==ii&&(he.getTransfer(B)===me?(ut!==Ln||tt!==dn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",B)),b}function Bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=gt,this.resetTextureUnits=z,this.getTextureUnits=k,this.setTextureUnits=ct,this.setTexture2D=ft,this.setTexture2DArray=It,this.setTexture3D=zt,this.setTextureCube=$,this.rebindTextures=Zt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=st,this.dispose=H}function kv(n,t){function e(i,s=ii){let r,o=he.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lc)return n.BYTE;if(i===Dc)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===ya)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===Fc)return n.ALPHA;if(i===Oc)return n.RGB;if(i===Ln)return n.RGBA;if(i===Qn)return n.DEPTH_COMPONENT;if(i===ni)return n.DEPTH_STENCIL;if(i===Bc)return n.RED;if(i===ba)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===wa)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===Or||i===Br||i===kr||i===zr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ta||i===Aa||i===Ra||i===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pa||i===Ia||i===La||i===Da||i===Na||i===Hr||i===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pa||i===Ia)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===La)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Da)return r.COMPRESSED_R11_EAC;if(i===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Hr)return r.COMPRESSED_RG11_EAC;if(i===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fa||i===Oa||i===Ba||i===ka||i===za||i===Ha||i===Ga||i===Va||i===Wa||i===Xa||i===Ya||i===qa||i===$a||i===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===Ka||i===ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ja)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qa||i===tl||i===Gr||i===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new $e({vertexShader:zv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Fn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new dh,p={},v=e.getContextAttributes(),w=null,y=null,S=[],E=[],x=new Pt,M=null,R=null,C=new Ve;C.viewport=new Re;let L=new Ve;L.viewport=new Re;let F=[C,L],V=new ma,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=S[Y];return ft===void 0&&(ft=new Is,S[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=S[Y];return ft===void 0&&(ft=new Is,S[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=S[Y];return ft===void 0&&(ft=new Is,S[Y]=ft),ft.getHandSpace()};function q(Y){let ft=E.indexOf(Y.inputSource);if(ft===-1)return;let It=S[ft];It!==void 0&&(It.update(Y.inputSource,Y.frame,c||o),It.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",it);for(let Y=0;Y<S.length;Y++){let ft=E[Y];ft!==null&&(E[Y]=null,S[Y].disconnect(ft))}P=null,H=null,g.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),R!==null){let Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,zt=null,$=null;v.depth&&($=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=v.stencil?ni:Qn,zt=v.stencil?ss:Cn);let Et={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new hn(u.textureWidth,u.textureHeight,{format:Ln,type:dn,depthTexture:new ti(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let It={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(Y){for(let ft=0;ft<Y.removed.length;ft++){let It=Y.removed[ft],zt=E.indexOf(It);zt>=0&&(E[zt]=null,S[zt].disconnect(It))}for(let ft=0;ft<Y.added.length;ft++){let It=Y.added[ft],zt=E.indexOf(It);if(zt===-1){for(let Et=0;Et<S.length;Et++)if(Et>=E.length){E.push(It),zt=Et;break}else if(E[Et]===null){E[Et]=It,zt=Et;break}if(zt===-1)break}let $=S[zt];$&&$.connect(It)}}function G(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ft=Y.near,It=Y.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(It=g.depthFar)),V.near=L.near=C.near=ft,V.far=L.far=C.far=It,(P!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,H=V.far),V.layers.mask=Y.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let zt=Y.parent,$=V.cameras;G(V,zt);for(let Et=0;Et<$.length;Et++)G($[Et],zt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),z(Y,V,zt)};function z(Y,ft,It){It===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(It.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return p[Y]};let k=null;function ct(Y,ft){if(h=ft.getViewerPose(c||o),m=ft,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let zt=!1;It.length!==V.cameras.length&&(V.cameras.length=0,zt=!0);for(let bt=0;bt<It.length;bt++){let qt=It[bt],te=null;if(f!==null)te=f.getViewport(qt);else{let ht=d.getViewSubImage(u,qt);te=ht.viewport,bt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(y))}let et=F[bt];et===void 0&&(et=new Ve,et.layers.enable(bt),et.viewport=new Re,F[bt]=et),et.matrix.fromArray(qt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(qt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(te.x,te.y,te.width,te.height),bt===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),zt===!0&&V.cameras.push(et)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let bt=d.getDepthInformation(It[0]);bt&&bt.isValid&&bt.texture&&g.init(bt,s.renderState)}if($&&$.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let bt=0;bt<It.length;bt++){let qt=It[bt].camera;if(qt){let te=p[qt];te||(te=new Mr,p[qt]=te);let et=d.getCameraImage(qt);te.sourceTexture=et}}}}for(let It=0;It<S.length;It++){let zt=E[It],$=S[It];zt!==null&&$!==void 0&&$.update(zt,ft,c||o)}k&&k(Y,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),m=null}let gt=new $d;gt.setAnimationLoop(ct),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}},Gv=new de,rf=new ne;rf.set(-1,0,0,0,1,0,0,0,1);function Vv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Zc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),w=v.envMap,y=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wv(n,t,e,i){let s={},r={};function o(v,w){let y=w.program;i.uniformBlockBinding(v,y,s[v.id])}function a(v,w){let y=s[v.id];y===void 0&&(m(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let S=w.program;i.updateUBOMapping(v,S);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=n.createBuffer(),y=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],y=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let M=y[E];if(Array.isArray(M))for(let R=0,C=M.length;R<C;R++)h(M[R],E,R,S);else h(M,E,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,w,y,S){if(u(v,w,y,S)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let C=x[R],L=_(C,!0);d(C,v.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function u(v,w,y,S){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let M=S[x],R=!1;for(let C=0;C<E.length;C++)f(E[C],M,C)===!0&&(R=!0);return R}return f(E,S,x)}function f(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let S=w[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(v){let w=v.uniforms,y=0,S=16;for(let x=0,M=w.length;x<M;x++){let R=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,L=R.length;C<L;C++){let F=R[C],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(w[x])||Array.isArray(F.value),H=y;for(let O=0,it=V.length;O<it;O++){let G=V[O],z=_(G,P),k=y%S,ct=k%z.boundary,gt=k+ct;y+=ct,gt!==0&&S-gt<z.storage&&(y+=S-gt),O===0&&(H=y),y+=z.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((y-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let E=y%S;return E>0&&(y+=S-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let w=v.target;w.removeEventListener("dispose",g),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:p}}var Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function Yv(){return kn===null&&(kn=new qo(Xv,16,16,Si,In),kn.name="DFG_LUT",kn.minFilter=Qe,kn.magFilter=Qe,kn.wrapS=Un,kn.wrapT=Un,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var ol=class{constructor(t={}){let{canvas:e=fd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=f,g=new Set([Ea,wa,ba]),p=new Set([dn,Cn,ks,ss,Ma,Sa]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],M=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,V=null,P=null,H=null;this._outputColorSpace=Ge;let q=0,O=0,it=null,G=-1,z=null,k=new Re,ct=new Re,gt=null,Y=new Kt(0),ft=0,It=e.width,zt=e.height,$=1,Et=null,wt=null,bt=new Re(0,0,It,zt),qt=new Re(0,0,It,zt),te=!1,et=new Ki,ht=new $o,mt=!1,dt=!1,rt=new de,Ut=new N,Lt=new Re,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function jt(){return it===null?$:1}let D=i;function at(T,U){return e.getContext(T,U)}let Tt,Wt,st,ie,Ft,Bt,A,b,B,ut,tt,pt,_t,K,j,Mt,I,Q,J,yt,vt,ot,lt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",St,!1),D===null){let U="webgl2";if(D=at(U,T),D===null)throw at(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(T){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ee("WebGLRenderer: "+T.message),T}function Dt(){Tt=new i_(D),Tt.init(),vt=new kv(D,Tt),Wt=new Yx(D,Tt,t,vt),st=new Ov(D,Tt),Wt.reversedDepthBuffer&&u&&st.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),H=D.createFramebuffer(),ie=new o_(D),Ft=new bv,Bt=new Bv(D,Tt,st,Ft,Wt,vt,ie),A=new n_(C),b=new l0(D),ot=new Wx(D,b),B=new s_(D,b,ie,ot),ut=new l_(D,B,b,ot,ie),Q=new a_(D,Wt,Bt),j=new qx(Ft),tt=new Sv(C,A,Tt,Wt,ot,j),pt=new Vv(C,Ft),_t=new Ev,K=new Iv(Tt),I=new Vx(C,A,st,ut,m,l),Mt=new Fv(C,ut,Wt),lt=new Wv(D,ie,Wt,st),J=new Xx(D,Tt,ie),yt=new r_(D,Tt,ie),ie.programs=tt.programs,C.capabilities=Wt,C.extensions=Tt,C.properties=Ft,C.renderLists=_t,C.shadowMap=Mt,C.state=st,C.info=ie}_!==dn&&(R=new h_(_,e.width,e.height,a,s,r));let nt=new fh(C,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=Tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(It,zt,!1))},this.getSize=function(T){return T.set(It,zt)},this.setSize=function(T,U,Z=!0){if(nt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}It=T,zt=U,e.width=Math.floor(T*$),e.height=Math.floor(U*$),Z===!0&&(e.style.width=T+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(It*$,zt*$).floor()},this.setDrawingBufferSize=function(T,U,Z){It=T,zt=U,$=Z,e.width=Math.floor(T*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===dn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(bt)},this.setViewport=function(T,U,Z,W){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,U,Z,W),st.viewport(k.copy(bt).multiplyScalar(jt()).round())},this.getScissor=function(T){return T.copy(qt)},this.setScissor=function(T,U,Z,W){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,U,Z,W),st.scissor(ct.copy(qt).multiplyScalar(jt()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){st.setScissorTest(te=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){wt=T},this.getClearColor=function(T){return T.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Z=!0){let W=0;if(T){let X=!1;if(it!==null){let Ct=it.texture.format;X=g.has(Ct)}if(X){let Ct=it.texture.type,Vt=p.has(Ct),Rt=I.getClearColor(),kt=I.getClearAlpha(),$t=Rt.r,se=Rt.g,le=Rt.b;Vt?(v[0]=$t,v[1]=se,v[2]=le,v[3]=kt,D.clearBufferuiv(D.COLOR,0,v)):(w[0]=$t,w[1]=se,w[2]=le,w[3]=kt,D.clearBufferiv(D.COLOR,0,w))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),I.dispose(),_t.dispose(),K.dispose(),Bt.dispose(),Ft.dispose(),A.dispose(),ut.dispose(),B.dispose(),ot.dispose(),lt.dispose(),tt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Ke),nt.removeEventListener("sessionend",be),mn.stop()};function At(T){T.preventDefault(),Wc("WebGLRenderer: Context Lost."),L=!0}function Gt(){Wc("WebGLRenderer: Context Restored."),L=!1;let T=ie.autoReset,U=Mt.enabled,Z=Mt.autoUpdate,W=Mt.needsUpdate,X=Mt.type;Dt(),ie.autoReset=T,Mt.enabled=U,Mt.autoUpdate=Z,Mt.needsUpdate=W,Mt.type=X}function St(T){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jt(T){let U=T.target;U.removeEventListener("dispose",Jt),re(U)}function re(T){ve(T),Ft.remove(T)}function ve(T){let U=Ft.get(T).programs;U!==void 0&&(U.forEach(function(Z){tt.releaseProgram(Z)}),T.isShaderMaterial&&tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Z,W,X,Ct){U===null&&(U=Ht);let Vt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Rt=Ip(T,U,Z,W,X);st.setMaterial(W,Vt);let kt=Z.index,$t=1;if(W.wireframe===!0){if(kt=B.getWireframeAttribute(Z),kt===void 0)return;$t=2}let se=Z.drawRange,le=Z.attributes.position,Xt=se.start*$t,ce=(se.start+se.count)*$t;Ct!==null&&(Xt=Math.max(Xt,Ct.start*$t),ce=Math.min(ce,(Ct.start+Ct.count)*$t)),kt!==null?(Xt=Math.max(Xt,0),ce=Math.min(ce,kt.count)):le!=null&&(Xt=Math.max(Xt,0),ce=Math.min(ce,le.count));let Le=ce-Xt;if(Le<0||Le===1/0)return;ot.setup(X,W,Rt,Z,kt);let ye,_e=J;if(kt!==null&&(ye=b.get(kt),_e=yt,_e.setIndex(ye)),X.isMesh)W.wireframe===!0?(st.setLineWidth(W.wireframeLinewidth*jt()),_e.setMode(D.LINES)):_e.setMode(D.TRIANGLES);else if(X.isLine){let We=W.linewidth;We===void 0&&(We=1),st.setLineWidth(We*jt()),X.isLineSegments?_e.setMode(D.LINES):X.isLineLoop?_e.setMode(D.LINE_LOOP):_e.setMode(D.LINE_STRIP)}else X.isPoints?_e.setMode(D.POINTS):X.isSprite&&_e.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))_e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,Yt=X._multiDrawCounts,je=X._multiDrawCount,pe=kt?b.get(kt).bytesPerElement:1,Hi=Ft.get(W).currentProgram.getUniforms();for(let Xe=0;Xe<je;Xe++)Hi.setValue(D,"_gl_DrawID",Xe),_e.render(We[Xe]/pe,Yt[Xe])}else if(X.isInstancedMesh)_e.renderInstances(Xt,Le,X.count);else if(Z.isInstancedBufferGeometry){let We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Yt=Math.min(Z.instanceCount,We);_e.renderInstances(Xt,Le,Yt)}else _e.render(Xt,Le)};function Ce(T,U,Z,W){F!==null&&T.isNodeMaterial&&F.setObject(W,T),mt===!0&&j.setState(T,Z,!1),T.transparent===!0&&T.side===Mn&&T.forceSinglePass===!1?(T.side=Ue,T.needsUpdate=!0,js(T,U,W),T.side=Mi,T.needsUpdate=!0,js(T,U,W),T.side=Mn):js(T,U,W)}this.compile=function(T,U,Z=null){Z===null&&(Z=T),F!==null&&F.renderStart(T,U,Z),E=K.get(Z),E.init(U),M.push(E),Z.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),T!==Z&&T.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),dt=this.localClippingEnabled,mt=j.init(this.clippingPlanes,dt),mt===!0&&j.setGlobalState(this.clippingPlanes,U),F!==null&&Mt.render(E.state.shadowsArray,Z,U);let W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ct=X.material;if(Ct)if(Array.isArray(Ct))for(let Vt=0;Vt<Ct.length;Vt++){let Rt=Ct[Vt];Ce(Rt,Z,U,X),W.add(Rt)}else Ce(Ct,Z,U,X),W.add(Ct)}),E=M.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(T,U,Z=null){let W=this.compile(T,U,Z);return new Promise(X=>{function Ct(){if(W.forEach(function(Vt){let kt=Ft.get(Vt).currentProgram;(kt===void 0||kt.isReady())&&W.delete(Vt)}),W.size===0){X(T);return}setTimeout(Ct,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Pe=null;function bn(T){Pe&&Pe(T)}function Ke(){mn.stop()}function be(){mn.start()}let mn=new $d;mn.setAnimationLoop(bn),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(T){Pe=T,nt.setAnimationLoop(T),T===null?mn.stop():mn.start()},nt.addEventListener("sessionstart",Ke),nt.addEventListener("sessionend",be),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(T,U);let Z=nt.enabled===!0&&nt.isPresenting===!0,W=R!==null&&(it===null||Z)&&R.begin(C,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,it),E=K.get(T,M.length),E.init(U),E.state.textureUnits=Bt.getTextureUnits(),M.push(E),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ht.setFromArrayCamera(U):et.setFromProjectionMatrix(rt,xn,U.reversedDepth),dt=this.localClippingEnabled,mt=j.init(this.clippingPlanes,dt),S=_t.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Vt=C.xr.getDepthSensingMesh();Vt!==null&&li(Vt,U,-1/0,C.sortObjects)}li(T,U,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(Et,wt),Zt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Zt&&I.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),mt===!0&&j.beginShadows();let X=E.state.shadowsArray;if(Mt.render(X,T,U),mt===!0&&j.endShadows(),(W&&R.hasRenderPass())===!1){let Vt=S.opaque,Rt=S.transmissive;if(E.setupLights(),U.isArrayCamera){let kt=U.cameras;if(Rt.length>0)for(let $t=0,se=kt.length;$t<se;$t++){let le=kt[$t];Bi(Vt,Rt,T,le)}Zt&&I.render(T);for(let $t=0,se=kt.length;$t<se;$t++){let le=kt[$t];Xn(S,T,le,le.viewport)}}else Rt.length>0&&Bi(Vt,Rt,T,U),Zt&&I.render(T),Xn(S,T,U)}it!==null&&O===0&&(Bt.updateMultisampleRenderTarget(it),Bt.updateRenderTargetMipmap(it)),W&&R.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),ot.resetDefaultState(),G=-1,z=null,M.pop(),M.length>0?(E=M[M.length-1],Bt.setTextureUnits(E.state.textureUnits),mt===!0&&j.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,F!==null&&F.renderEnd()};function li(T,U,Z,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Vt=U.isArrayCamera?ht:et;if(!T.frustumCulled||T.intersectsFrustum(Vt)){W&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(rt);let Rt=ut.update(T),kt=T.material;kt.visible&&S.push(T,Rt,kt,Z,Lt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Vt=U.isArrayCamera?ht:et;if(!T.frustumCulled||T.intersectsFrustum(Vt)){let Rt=ut.update(T),kt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Lt.copy(Rt.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(rt)),Array.isArray(kt)){let $t=Rt.groups;for(let se=0,le=$t.length;se<le;se++){let Xt=$t[se],ce=kt[Xt.materialIndex];ce&&ce.visible&&S.push(T,Rt,ce,Z,Lt.z,Xt,U)}}else kt.visible&&S.push(T,Rt,kt,Z,Lt.z,null,U)}}}let Ct=T.children;for(let Vt=0,Rt=Ct.length;Vt<Rt;Vt++)li(Ct[Vt],U,Z,W)}function Xn(T,U,Z,W){let{opaque:X,transmissive:Ct,transparent:Vt}=T;E.setupLightsView(Z),mt===!0&&j.setGlobalState(C.clippingPlanes,Z),W&&st.viewport(k.copy(W)),X.length>0&&ki(X,U,Z),Ct.length>0&&ki(Ct,U,Z),Vt.length>0&&ki(Vt,U,Z),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Bi(T,U,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Xt=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new hn(1,1,{generateMipmaps:!0,type:Xt?In:dn,minFilter:ei,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Ct=E.state.transmissionRenderTarget[W.id],Vt=W.viewport||k;Ct.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),kt=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(Y),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),Zt&&I.render(Z);let se=C.toneMapping;C.toneMapping=Bn;let le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),mt===!0&&j.setGlobalState(C.clippingPlanes,W),ki(T,Z,W),Bt.updateMultisampleRenderTarget(Ct),Bt.updateRenderTargetMipmap(Ct),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ce=0,Le=U.length;ce<Le;ce++){let ye=U[ce],{object:_e,geometry:We,material:Yt,group:je}=ye;if(Yt.side===Mn&&_e.layers.test(W.layers)){let pe=Yt.side;Yt.side=Ue,Yt.needsUpdate=!0,Ks(_e,Z,W,We,Yt,je),Yt.side=pe,Yt.needsUpdate=!0,Xt=!0}}Xt===!0&&(Bt.updateMultisampleRenderTarget(Ct),Bt.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Rt,kt,$t),C.setClearColor(Y,ft),le!==void 0&&(W.viewport=le),C.toneMapping=se}function ki(T,U,Z){let W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Ct=T.length;X<Ct;X++){let Vt=T[X],{object:Rt,geometry:kt,group:$t}=Vt,se=Vt.material;se.allowOverride===!0&&W!==null&&(se=W),Rt.layers.test(Z.layers)&&Ks(Rt,U,Z,kt,se,$t)}}function Ks(T,U,Z,W,X,Ct){F!==null&&X.isNodeMaterial&&F.setObject(T,X),T.onBeforeRender(C,U,Z,W,X,Ct),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,U,Z,W,T,Ct),X.transparent===!0&&X.side===Mn&&X.forceSinglePass===!1?(X.side=Ue,X.needsUpdate=!0,C.renderBufferDirect(Z,U,W,X,T,Ct),X.side=Mi,X.needsUpdate=!0,C.renderBufferDirect(Z,U,W,X,T,Ct),X.side=Mn):C.renderBufferDirect(Z,U,W,X,T,Ct),T.onAfterRender(C,U,Z,W,X,Ct)}function zi(T){let U=0;for(let Z of T)Z.texture!==null&&U++;return U}function js(T,U,Z){U.isScene!==!0&&(U=Ht);let W=Ft.get(T),X=E.state.lights,Ct=E.state.shadowsArray,Vt=X.state.version,Rt=tt.getParameters(T,X.state,Ct,U,Z,E.state.lightProbeGridArray),kt=tt.getProgramCacheKey(Rt),$t=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=A.get(T.envMap||W.environment,se),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",Jt),$t=new Map,W.programs=$t,W.programVariants=new Map);let le=$t.get(kt);if(le!==void 0){if(W.currentProgram===le&&W.lightsStateVersion===Vt)return iu(T,Rt),le}else Rt.uniforms=tt.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,Z,Rt),T.onBeforeCompile(Rt,C),le=tt.acquireProgram(Rt,kt),$t.set(kt,le),W.uniforms=Rt.uniforms;let Xt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=j.uniform),iu(T,Rt),W.needsLights=Dp(T),W.lightsStateVersion=Vt,W.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.sunLights.value=X.state.sun,Xt.sunLightShadows.value=X.state.sunShadow,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.sunShadowMatrix.value=X.state.sunShadowMatrix,Xt.sunShadowCascade.value=X.state.sunShadowCascade,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=zi(E.state.lightProbeGridArray),W.currentProgram=le,W.uniformsList=null,le}function Pp(T,U,Z,W,X){let Ct=Ft.get(T),Vt=Ct.currentProgram.id+","+W+","+X,Rt=Ct.programVariants.get(Vt);return Rt===void 0?(Rt=js(T,U,Z),Ct.programVariants.set(Vt,Rt)):(Ct.currentProgram=Rt,Ct.uniformsList=null,Ct.outputColorSpace=W,Ct.toneMapping=X),Rt}function nu(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Hs.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function iu(T,U){let Z=Ft.get(T);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Ip(T,U,Z,W,X){U.isScene!==!0&&(U=Ht),Bt.resetTextureUnits();let Ct=U.fog,Vt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Rt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:he.workingColorSpace,kt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,$t=A.get(W.envMap||Vt,kt),se=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,le=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,Le=!!Z.morphAttributes.color,ye=Bn;W.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=C.toneMapping);let _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,We=_e!==void 0?_e.length:0,Yt=Ft.get(W),je=E.state.lights;if(mt===!0&&(dt===!0||T!==z)){let Ee=T===z&&W.id===G;j.setState(W,T,Ee)}let pe=!1,Hi=!1;W.version===Yt.__version?Yt.needsLights&&Yt.lightsStateVersion!==je.state.version||X.isBatchedMesh&&Yt.batching===!1||!X.isBatchedMesh&&Yt.batching===!0||X.isBatchedMesh&&Yt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Yt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Yt.instancing===!1||!X.isInstancedMesh&&Yt.instancing===!0||X.isSkinnedMesh&&Yt.skinning===!1||!X.isSkinnedMesh&&Yt.skinning===!0||X.isInstancedMesh&&Yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Yt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Yt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Yt.instancingMorph===!1&&X.morphTexture!==null||Yt.envMap!==$t||W.fog===!0&&Yt.fog!==Ct||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==j.numPlanes||Yt.numIntersection!==j.numIntersection)||Yt.vertexAlphas!==se||Yt.vertexTangents!==le||Yt.morphTargets!==Xt||Yt.morphNormals!==ce||Yt.morphColors!==Le||Yt.morphTargetsCount!==We||Yt.numLightProbeGrids!==zi(E.state.lightProbeGridArray)?pe=!0:(Yt.outputColorSpace!==Rt||Yt.toneMapping!==ye)&&(Hi=!0):(pe=!0,Yt.__version=W.version);let Xe=Yt.currentProgram;(pe===!0||Hi===!0)&&(Xe=Hi===!0?Pp(W,U,X,Rt,ye):js(W,U,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,Xe,Yt));let ao=!1,ci=!1,Gi=!1,fe=Xe.getUniforms(),He=Yt.uniforms;if(st.useProgram(Xe.program)&&(ao=!0,ci=!0,Gi=!0),W.id!==G&&(G=W.id,ci=!0),ao||z!==T){st.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",T.projectionMatrix),fe.setValue(D,"viewMatrix",T.matrixWorldInverse);let Be=fe.map.cameraPosition;Be!==void 0&&Be.setValue(D,Ut.setFromMatrixPosition(T.matrixWorld)),Wt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,ci=!0,Gi=!0)}if(Yt.needsLights&&(je.state.sunShadowMap.length>0&&fe.setValue(D,"sunShadowMap",je.state.sunShadowMap,Bt),je.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",je.state.directionalShadowMap,Bt),je.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",je.state.spotShadowMap,Bt),je.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",je.state.pointShadowMap,Bt)),X.isSkinnedMesh){fe.setOptional(D,X,"bindMatrix"),fe.setOptional(D,X,"bindMatrixInverse");let Ee=X.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),fe.setValue(D,"boneTexture",Ee.boneTexture,Bt))}X.isBatchedMesh&&(fe.setOptional(D,X,"batchingTexture"),fe.setValue(D,"batchingTexture",X._matricesTexture,Bt),fe.setOptional(D,X,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",X._indirectTexture,Bt),fe.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",X._colorsTexture,Bt));let wn=Z.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Q.update(X,Z,Xe),(ci||Yt.receiveShadow!==X.receiveShadow)&&(Yt.receiveShadow=X.receiveShadow,fe.setValue(D,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=Yv()),ci){if(fe.setValue(D,"toneMappingExposure",C.toneMappingExposure),Yt.needsLights&&Lp(He,Gi),Ct&&W.fog===!0&&pt.refreshFogUniforms(He,Ct),pt.refreshMaterialUniforms(He,W,$,zt,E.state.transmissionRenderTarget[T.id]),Yt.needsLights&&Yt.numLightProbeGrids>0){let Ee=y,Be=0;for(let Yn of E.state.lightProbeGridArray)Yn.texture!==null&&(Ee.textures[Be]=Yn.texture,Ee.min[Be]=Yn.boundingBox.min,Ee.max[Be]=Yn.boundingBox.max,Ee.resolution[Be]=Yn.resolution,Be++);for(let Yn in Ee)Ee[Yn].length=Be;He.probesSH.value=Ee.textures,He.probesMin.value=Ee.min,He.probesMax.value=Ee.max,He.probesResolution.value=Ee.resolution}Hs.upload(D,nu(Yt),He,Bt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hs.upload(D,nu(Yt),He,Bt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(D,"center",X.center),fe.setValue(D,"modelViewMatrix",X.modelViewMatrix),fe.setValue(D,"normalMatrix",X.normalMatrix),fe.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Ee=W.uniformsGroups;for(let Be=0,Yn=Ee.length;Be<Yn;Be++){let ru=Ee[Be];lt.update(ru,Xe),lt.bind(ru,Xe)}}return Xe}function Lp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Dp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,U,Z){let W=Ft.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ft.get(T.texture).__webglTexture=U,Ft.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Z=Ft.get(T);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Z=0){it=T,q=U,O=Z;let W=null,X=!1,Ct=!1;if(T){let Rt=Ft.get(T);if(Rt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(D.FRAMEBUFFER,Rt.__webglFramebuffer),k.copy(T.viewport),ct.copy(T.scissor),gt=T.scissorTest,st.viewport(k),st.scissor(ct),st.setScissorTest(gt),G=-1;return}else if(Rt.__webglFramebuffer===void 0)Bt.setupRenderTarget(T);else if(Rt.__hasExternalTextures)Bt.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let se=T.depthTexture;if(Rt.__boundDepthTexture!==se){if(se!==null&&Ft.has(se)&&(T.width!==se.image.width||T.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(T)}}let kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ct=!0);let $t=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($t[U])?W=$t[U][Z]:W=$t[U],X=!0):T.samples>0&&Bt.useMultisampledRTT(T)===!1?W=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray($t)?W=$t[Z]:W=$t,k.copy(T.viewport),ct.copy(T.scissor),gt=T.scissorTest}else k.copy(bt).multiplyScalar($).floor(),ct.copy(qt).multiplyScalar($).floor(),gt=te;if(Z!==0&&(W=V),st.bindFramebuffer(D.FRAMEBUFFER,W)&&st.drawBuffers(T,W),st.viewport(k),st.scissor(ct),st.setScissorTest(gt),X){let Rt=Ft.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,Z)}else if(Ct){let Rt=U;for(let kt=0;kt<T.textures.length;kt++){let $t=Ft.get(T.textures[kt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+kt,$t.__webglTexture,Z,Rt)}}else if(T!==null&&Z!==0){let Rt=Ft.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,Z)}G=-1};function su(T){let U=Ft.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Wt.textureFormatReadable(T.format),U.__typeReadable=Wt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Z,W,X,Ct,Vt,Rt=0){if(!(T&&T.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt],Array.isArray(kt)&&(kt=kt[0])),kt){st.bindFramebuffer(D.FRAMEBUFFER,kt);try{let $t=T.textures[Rt],se=$t.format,le=$t.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Rt);let Xt=su($t);if(Xt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&Z>=0&&Z<=T.height-X&&D.readPixels(U,Z,W,X,vt.convert(se),vt.convert(le),Ct)}finally{let $t=it!==null?Ft.get(it).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,U,Z,W,X,Ct,Vt,Rt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt],Array.isArray(kt)&&(kt=kt[0])),kt)if(U>=0&&U<=T.width-W&&Z>=0&&Z<=T.height-X){st.bindFramebuffer(D.FRAMEBUFFER,kt);let $t=T.textures[Rt],se=$t.format,le=$t.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Rt);let Xt=su($t);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ce),D.bufferData(D.PIXEL_PACK_BUFFER,Ct.byteLength,D.STREAM_READ),D.readPixels(U,Z,W,X,vt.convert(se),vt.convert(le),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Le=it!==null?Ft.get(it).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,Le);let ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await md(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ct),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ce),D.deleteSync(ye),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(T.image.width*W),Ct=Math.floor(T.image.height*W),Vt=U!==null?U.x:0,Rt=U!==null?U.y:0;Bt.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Vt,Rt,X,Ct),st.unbindTexture()},this.copyTextureToTexture=function(T,U,Z=null,W=null,X=0,Ct=0){let Vt,Rt,kt,$t,se,le,Xt,ce,Le,ye=T.isCompressedTexture?T.mipmaps[Ct]:T.image;if(Z!==null)Vt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,kt=Z.isBox3?Z.max.z-Z.min.z:1,$t=Z.min.x,se=Z.min.y,le=Z.isBox3?Z.min.z:0;else{let fe=Math.pow(2,-X);Vt=Math.floor(ye.width*fe),Rt=Math.floor(ye.height*fe),T.isDataArrayTexture?kt=ye.depth:T.isData3DTexture?kt=Math.floor(ye.depth*fe):kt=1,$t=0,se=0,le=0}W!==null?(Xt=W.x,ce=W.y,Le=W.z):(Xt=0,ce=0,Le=0);let _e=vt.convert(U.format),We=vt.convert(U.type),Yt;U.isData3DTexture?(Bt.setTexture3D(U,0),Yt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),Yt=D.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),Yt=D.TEXTURE_2D),st.activeTexture(D.TEXTURE0),st.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),st.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),st.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let je=st.getParameter(D.UNPACK_ROW_LENGTH),pe=st.getParameter(D.UNPACK_IMAGE_HEIGHT),Hi=st.getParameter(D.UNPACK_SKIP_PIXELS),Xe=st.getParameter(D.UNPACK_SKIP_ROWS),ao=st.getParameter(D.UNPACK_SKIP_IMAGES);st.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),st.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),st.pixelStorei(D.UNPACK_SKIP_PIXELS,$t),st.pixelStorei(D.UNPACK_SKIP_ROWS,se),st.pixelStorei(D.UNPACK_SKIP_IMAGES,le);let ci=T.isDataArrayTexture||T.isData3DTexture,Gi=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let fe=Ft.get(T),He=Ft.get(U),wn=Ft.get(fe.__renderTarget),Ee=Ft.get(He.__renderTarget);st.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Be=0;Be<kt;Be++)ci&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(T).__webglTexture,X,le+Be),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(U).__webglTexture,Ct,Le+Be)),D.blitFramebuffer($t,se,$t+Vt,se+Rt,Xt,ce,Xt+Vt,ce+Rt,D.DEPTH_BUFFER_BIT,D.NEAREST);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Ft.has(T)){let fe=Ft.get(T),He=Ft.get(U);st.bindFramebuffer(D.READ_FRAMEBUFFER,P),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let wn=0;wn<kt;wn++)ci?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.__webglTexture,X,le+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,X),Gi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,He.__webglTexture,Ct,Le+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,He.__webglTexture,Ct),X!==0?D.blitFramebuffer($t,se,$t+Vt,se+Rt,Xt,ce,Xt+Vt,ce+Rt,D.COLOR_BUFFER_BIT,D.NEAREST):Gi?D.copyTexSubImage3D(Yt,Ct,Xt,ce,Le+wn,$t,se,Vt,Rt):D.copyTexSubImage2D(Yt,Ct,Xt,ce,$t,se,Vt,Rt);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gi?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Yt,Ct,Xt,ce,Le,Vt,Rt,kt,_e,We,ye.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Yt,Ct,Xt,ce,Le,Vt,Rt,kt,_e,ye.data):D.texSubImage3D(Yt,Ct,Xt,ce,Le,Vt,Rt,kt,_e,We,ye):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ct,Xt,ce,Vt,Rt,_e,We,ye.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ct,Xt,ce,ye.width,ye.height,_e,ye.data):D.texSubImage2D(D.TEXTURE_2D,Ct,Xt,ce,Vt,Rt,_e,We,ye);st.pixelStorei(D.UNPACK_ROW_LENGTH,je),st.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),st.pixelStorei(D.UNPACK_SKIP_PIXELS,Hi),st.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),st.pixelStorei(D.UNPACK_SKIP_IMAGES,ao),Ct===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&D.generateMipmap(Yt),st.unbindTexture()},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&Bt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Bt.setTextureCube(T,0):T.isData3DTexture?Bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Bt.setTexture2DArray(T,0):Bt.setTexture2D(T,0),st.unbindTexture()},this.resetState=function(){q=0,O=0,it=null,st.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var ge={outlinePx:3,lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},blendHalfLife:.07,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.12,stopTime:.08,turnRate:14,aimTurnRate:20,sprintTurnRate:3,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:10,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:45,endLeaveTime:.3,cornerZone:.3,popTime:.12,popShift:.55,pushAngle:45,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.12,slamSquashTime:.15,thudVolume:.5}};function cl({step:n,render:t,before:e,hz:i=60,maxSteps:s=5}){let r=1/i,o=0,a=0,l=null,c=!1;function h(_){if(!(_>0)||!Number.isFinite(_))return;e&&e(_),o+=_;let g=0;for(;o>=r&&g<s;)n(r),o-=r,g++;o>=r&&(o=0),t(Math.min(o/r,1-Number.EPSILON),_)}function d(_){if(c){try{l!==null&&h((_-l)/1e3)}catch(g){throw m(),g}l=_,c&&(a=requestAnimationFrame(d))}}function u(){document.visibilityState==="visible"&&(l=null)}function f(){c||(c=!0,l=null,document.addEventListener("visibilitychange",u),a=requestAnimationFrame(d))}function m(){c=!1,cancelAnimationFrame(a),document.removeEventListener("visibilitychange",u)}return{advance:h,start:f,stop:m}}var ph=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause"]),qv={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},$v={0:"fire",2:"aim"},of={0:"cover",1:"melee",2:"interact",3:"objective",4:"grenade",5:"reload",6:"aim",7:"fire",9:"pause",13:"weapon3",14:"weapon1",15:"weapon2"},af={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},Zv=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function mh(n){if(!n||typeof n.tagName!="string")return!1;let t=n.tagName.toUpperCase();return t==="TEXTAREA"?!0:t==="INPUT"?!Zv.has(String(n.type||"text").toLowerCase()):!!n.isContentEditable}function lf(n){return qv[n]||null}function cf(n){return $v[n]||null}function Vs(){let n={};for(let t of ph)n[t]=!1;return n}function hf(n,t,e=.15){let i=Math.hypot(n,t);if(i<e)return[0,0];let s=Math.min(1,(i-e)/(1-e))/i;return[n*s,t*s]}function Jv(n){if(!n||!n.connected)return{ok:!1,reason:"none"};if(n.mapping!=="standard"||!n.buttons||n.buttons.length<16||!n.axes||n.axes.length<4)return{ok:!1,reason:"unrecognised"};let[t,e]=hf(n.axes[0],n.axes[1]),[i,s]=hf(n.axes[2],n.axes[3]),r=Vs();for(let o in of){let a=n.buttons[o];r[of[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:t,moveY:e,lookX:i,lookY:s,held:r}}function Kv(n){n.downCodes&&n.downCodes.clear(),n.downButtons&&n.downButtons.clear(),n.latched&&n.latched.clear(),n.held=n.held||{};for(let t of ph)n.held[t]=!1;for(let t in n.held)n.held[t]=!1;return n.lookDX=0,n.lookDY=0,n.lookX=0,n.lookY=0,n.moveX=0,n.moveY=0,n}function hl(n){let t={downCodes:new Set,downButtons:new Set,latched:new Set,held:Vs(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:e,downButtons:i,latched:s}=t,r="kbm",o="none",a=Vs();n.tabIndex<0&&(n.tabIndex=0);let l=()=>document.pointerLockElement===n,c=()=>l()||document.activeElement===n;function h(){Kv(t)}function d(S){if(mh(S.target))return;let E=lf(S.code);(E||S.code in af)&&(c()&&(S.code==="Tab"||S.code==="Space")&&S.preventDefault(),r="kbm",!S.repeat&&!e.has(S.code)&&E&&s.add(E),e.add(S.code))}function u(S){e.delete(S.code)}function f(S){S.target===n&&n.focus();let E=cf(S.button);E&&(r="kbm",i.has(S.button)||s.add(E),i.add(S.button))}function m(S){i.delete(S.button)}function _(S){l()&&(r="kbm",t.lookDX+=S.movementX||0,t.lookDY+=S.movementY||0)}function g(S){!c()||!S.deltaY||(r="kbm",s.add(S.deltaY>0?"weaponNext":"weaponPrev"),S.preventDefault())}function p(S){S.preventDefault()}function v(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",m),window.addEventListener("blur",h),document.addEventListener("mousemove",_),document.addEventListener("pointerlockchange",v),n.addEventListener("mousedown",f),n.addEventListener("wheel",g,{passive:!1}),n.addEventListener("contextmenu",p);function w(){let S=[];try{S=navigator.getGamepads&&navigator.getGamepads()||[]}catch{S=[]}let E=null;for(let M of S)if(M&&M.connected){E=M;break}let x=Jv(E);return o=x.ok?E.id:x.reason==="none"?"none":"unrecognised controller",x}function y(){let S={moveX:0,moveY:0,lookDX:t.lookDX,lookDY:t.lookDY,lookX:0,lookY:0,held:Vs(),pressed:Vs()};t.lookDX=0,t.lookDY=0;for(let M of e){let R=lf(M);R&&(S.held[R]=!0);let C=af[M];C&&(S.moveX+=C[0],S.moveY+=C[1])}for(let M of i){let R=cf(M);R&&(S.held[R]=!0)}let E=Math.hypot(S.moveX,S.moveY);E>1&&(S.moveX/=E,S.moveY/=E);for(let M of s)S.pressed[M]=!0;s.clear();let x=w();if(x.ok){S.lookX=x.lookX,S.lookY=x.lookY;let M=x.moveX!==0||x.moveY!==0||x.lookX!==0||x.lookY!==0;for(let C of ph)x.held[C]&&(M=!0,S.held[C]=!0,a[C]||(S.pressed[C]=!0));a=x.held,S.moveX+=x.moveX,S.moveY+=x.moveY;let R=Math.hypot(S.moveX,S.moveY);R>1&&(S.moveX/=R,S.moveY/=R),M&&(r="pad")}else a=Vs();return S}return{poll:y,requestLock(){try{let S=n.requestPointerLock&&n.requestPointerLock();S&&typeof S.catch=="function"&&S.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function df(n,t,e=14){let i=n;return t>20?i-=.1:t<e&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var jv=2e3,uf=1e4,Qv=8e4;function ff({startMs:n=0,scale:t=1}={}){let e=t,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-n<jv||(i+=Math.min(h,100),s++,s<60||i<1e3))return e;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=df(e,u,Math.max(14,1.1*r));if(f>e){if(d<l)return e;o=d}else f<e&&(o!==null&&d-o<uf&&(a=a===0?uf:Math.min(a*2,Qv),l=d+a),o=null);return e=f,e}return{sample:c,scale:()=>e}}var xt=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var gh={viewportHeight:{value:1080}};function Ws(n){n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=t.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(t.getX(l))+","+o(t.getY(l))+","+o(t.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=e.getX(l),h[1]+=e.getY(l),h[2]+=e.getZ(l)}let a=n.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new Se(new Float32Array(i*3),3),n.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=e.getX(l),d=e.getY(l),u=e.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,n}var ty=`
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
`,ey=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`;function ny({px:n=ge.outlinePx,color:t=xt.ink,outlineNormal:e=!1}={}){return new $e({name:"outline",uniforms:{px:{value:n},inkColor:{value:new Kt(t)},viewportHeight:gh.viewportHeight},defines:e?{USE_OUTLINE_NORMAL:""}:{},vertexShader:ty,fragmentShader:ey,side:Ue})}function iy(){}var pf=new Map;function sy(n,t,e){let i=n+"|"+new Kt(t).getHexString()+"|"+e,s=pf.get(i);return s||(s=ny({px:n,color:t,outlineNormal:e}),pf.set(i,s)),s}function Hn(n,{px:t=ge.outlinePx}={}){let e=!!n.geometry.getAttribute("outlineNormal"),i=sy(t,xt.ink,e),s=new xe(n.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=iy,n.add(s),s}function xh(n,t){n.traverse(e=>{e.userData.isOutline&&(e.visible=t)})}function ry(n,t,e,i){let s=Math.max(1,Math.floor(n)||1),r=Math.max(1,Math.floor(t)||1),o=Math.min(e>0?e:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function ul(n,t){let e=new ol({canvas:n,context:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=Ge;let i=ff({startMs:performance.now()});function s(){let o=ry(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return e.setPixelRatio(o.pixelRatio),e.setSize(o.width,o.height,!1),gh.viewportHeight.value=n.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:e,resize:s,frameDone:r,scale:i.scale}}var si={lightDir:{value:new N(...ge.lightDir).normalize()},shadowTint:{value:new Kt(xt.shadowTint)},bandEdge:{value:.15},shadowLift:{value:ge.shadowLift}},oy=`
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
`,ay=`
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
`;function pn({color:n="#ffffff",vertexColors:t=!1,shadowMix:e=.55,rim:i=.25}={}){return new $e({name:"toon",uniforms:{baseColor:{value:new Kt(n)},shadowMix:{value:e},rim:{value:i},lightDir:si.lightDir,shadowTint:si.shadowTint,bandEdge:si.bandEdge,shadowLift:si.shadowLift},vertexShader:oy,fragmentShader:ay,vertexColors:t})}var ly=400,cy=[-.45,.22,-1],hy=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,uy=`
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
`;function dl({planetDir:n=cy}={}){let t=r=>new Kt(r),e=new $e({name:"sky",uniforms:{deep:{value:t(xt.nebulaDeep)},hot:{value:t(xt.nebulaHot)},pink:{value:t(xt.hotPink)},lilac:{value:t(xt.lilac)},ink:{value:t(xt.ink)},planetColor:{value:t(xt.planet)},shadowTint:si.shadowTint,shadowLift:si.shadowLift,bandEdge:si.bandEdge,lightDir:si.lightDir,planetDir:{value:new N(...n).normalize()},time:{value:0}},vertexShader:hy,fragmentShader:uy,side:Ue,depthWrite:!1}),i=new xe(new yn(ly,48,24),e);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){e.uniforms.time.value=r}return{mesh:i,update:s}}function bi(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new we;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=mf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let m=mf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function mf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function xf(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=t*.5,f=Math.log10(1/t),m=Math.pow(10,f),_=u*m;for(let p=0;p<r;p++){let v=i?i.getX(p):p,w="";for(let y=0,S=a.length;y<S;y++){let E=a[y],x=n.getAttribute(E),M=x.itemSize;for(let R=0;R<M;R++)w+=`${Math.trunc(x[d[R]](v)*m+_)},`}w in e?h.push(e[w]):(l.push(v),e[w]=o,h.push(o),o++)}let g=n.clone();for(let p in n.attributes)g.setAttribute(p,gf(n.attributes[p],l,c));for(let p in n.morphAttributes)g.morphAttributes[p]=n.morphAttributes[p].map(v=>gf(v,l,c));return g.setIndex(h),g}function gf(n,t,e=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?e.get(s):void 0;if(o===void 0){let l=new s.array.constructor(t.length*r);for(let c=0;c<t.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[t[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&e.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}function _h(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function _f(n,t,e=.03,i=.04){let s=n.getAttribute("position"),r=n.getAttribute("normal");n.computeBoundingBox();let o=n.boundingBox,a=o.getSize(new N),l=o.getCenter(new N),c=a.length(),h=_h(t*7919+13>>>0),d=[];for(let p=0;p<8;p++)d.push(h()*2-1);let u=Math.min(e*c,i)*.99/Math.sqrt(3),f=(p,v)=>v>1e-9?2*p/v:0,m=[a.x,a.y,a.z].map(p=>p>1e-9?2/p:0),_=new ne,g=new N;for(let p=0;p<s.count;p++){let v=f(s.getX(p)-l.x,a.x),w=f(s.getY(p)-l.y,a.y),y=f(s.getZ(p)-l.z,a.z),S=(w+1)/2,E=(d[0]*w+d[1]*v*w)/2,x=(d[2]*v+d[3]*y)/2*S,M=(d[4]*w+d[5]*y*w)/2;if(r){let R=[d[1]*w/2,(d[0]+d[1]*v)/2,0],C=[d[2]/2*S,(d[2]*v+d[3]*y)/2*.5,d[3]/2*S],L=[0,(d[4]+d[5]*y)/2,d[5]*w/2];_.set(1+u*R[0]*m[0],u*R[1]*m[1],u*R[2]*m[2],u*C[0]*m[0],1+u*C[1]*m[1],u*C[2]*m[2],u*L[0]*m[0],u*L[1]*m[1],1+u*L[2]*m[2]),_.invert().transpose(),g.set(r.getX(p),r.getY(p),r.getZ(p)).applyMatrix3(_).normalize(),r.setXYZ(p,g.x,g.y,g.z)}s.setXYZ(p,s.getX(p)+u*E,s.getY(p)+u*x,s.getZ(p)+u*M)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n.computeBoundingBox(),n.computeBoundingSphere(),n}var vh=null;function dy(){return vh||(vh=pn({vertexColors:!0})),vh}var Mh=(n,t,e)=>new Kt(n).lerp(new Kt(t),e),Sh=(n,t=.3)=>Mh(n,"#ffffff",t),fl=(n,t=.2)=>Mh(n,xt.shadowTint,t),vf=new de,yf=new tn,Mf=new sn,fy=new N,py=new N;function wi(n=1,t=.02,e="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let m=u.wonk===void 0?t:u.wonk;m>0&&_f(f,n*131+s,m),s++;let _=f.getAttribute("normal"),g=new Float32Array(_.count*3);for(let p=0;p<_.count;p++){let v=typeof d=="function"?d(_.getX(p),_.getY(p),_.getZ(p)):d;g[p*3]=v.r,g[p*3+1]=v.g,g[p*3+2]=v.b}return f.setAttribute("color",new Se(g,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),Mf.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),yf.setFromEuler(Mf),vf.compose(fy.set(u.x||0,u.y||0,u.z||0),yf,py.set(1,1,1)),f.applyMatrix4(vf),i.push(f),f}function o(h,d={}){let u=d.top||Sh(h),f=d.side||fl(h,.22),m=fl(h,.4),_=new Kt(h);return(g,p,v)=>p>.5?u:p<-.5?m:Math.abs(g)>.5?f:v>0?_:m}function a(h,d,u,f,m={}){return r(new rn(h,d,u),o(f,m),m)}function l(h,d,u,f,m,_,g,p={}){return a(d-h,f-u,_-m,g,{...p,x:(h+d)/2,y:(u+f)/2,z:(m+_)/2})}function c(h=0){let d=bi(i,!1);if(!d)throw new Error(`${e}: parts have different attributes and cannot be merged`);return h>0&&_f(d,n,h),Ws(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function Ei(n){let t=new Ae,e=new xe(n,dy());return Hn(e),t.add(e),t}var ri=n=>()=>new Kt(n);function pl({w:n,d:t,tile:e=1,colors:i=[xt.cream,xt.tealLight]}){let s=wi(1,0,"floor");s.span(-n/2,n/2,-.15,-.002,-t/2,t/2,xt.lilac,{top:new Kt(xt.lilac)});let o=Math.round(n/e),a=Math.round(t/e);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new xi(e,e);h.rotateX(-Math.PI/2),s.add(h,ri(i[(l+c)%2]),{wonk:0,x:-n/2+(l+.5)*e,y:0,z:-t/2+(c+.5)*e})}return Ei(s.finish())}function bh({w:n,h:t,color:e=xt.cream,stripe:i=xt.hotPink,opening:s=null,seed:r=2}){let o=wi(r,0,"wall"),a=.2,l=a/2,c=-n/2,h=n/2,d=-.3,u=new Ds;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,t),u.lineTo(c,t),u.closePath(),s){let p=new ji,v=s.x-s.w/2,w=s.x+s.w/2;p.moveTo(v,s.y),p.lineTo(v,s.y+s.h),p.lineTo(w,s.y+s.h),p.lineTo(w,s.y),p.closePath(),u.holes.push(p)}let f=new Pr(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(e),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,xt.lilac),o.span(c-.05,h+.05,t-.1,t+.12,-l-.06,l+.08,xt.teal);let m=.5,_=.8;return s&&s.y<_&&s.y+s.h>m?(o.span(c,s.x-s.w/2,m,_,l-.01,l+.03,i),o.span(s.x+s.w/2,h,m,_,l-.01,l+.03,i)):o.span(c,h,m,_,l-.01,l+.03,i),Ei(o.finish(.006))}function my(n,t,e,i){let s=g=>Math.min(2048,Math.max(64,Math.round(g))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=n.split(" "),d=[[n]];for(let g=1;g<h.length;g++)d.push([h.slice(0,g).join(" "),h.slice(g).join(" ")]);let u=null;for(let g of d){let p=Math.max(...g.map(w=>l.measureText(w).width)),v=Math.min(r*.88*100/p,o*.8/(g.length*1.08));(!u||v>u.size)&&(u={lines:g,size:v})}l.fillStyle=t,l.fillRect(0,0,r,o),l.strokeStyle=e,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,m=o/2-(u.lines.length-1)*f/2;u.lines.forEach((g,p)=>{let v=m+p*f;l.fillStyle=xt.ink,l.fillText(g,r/2+u.size*.05,v+u.size*.06),l.fillStyle=e,l.fillText(g,r/2,v)});let _=new vr(a);return _.colorSpace=Ge,_.anisotropy=8,_}function gy({text:n,w:t,h:e,bg:i=xt.hotPink,fg:s=xt.cream,tilt:r=.04,seed:o=3}){let c=wi(o,0,"sign");c.box(t,e,.14,s,{wonk:0});let h=Ei(c.finish()),d=t-.14*2,u=e-.14*2,f=new xe(new xi(d,u),new Ji({map:my(n,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function Sf({w:n,h:t,seed:e=4}){let i=wi(e,.012,"window"),s=.15,r=.34;return i.span(-n/2,-n/2+s,0,t,-r/2,r/2,xt.teal),i.span(n/2-s,n/2,0,t,-r/2,r/2,xt.teal),i.span(-n/2+s,n/2-s,t-s,t,-r/2,r/2,xt.teal),i.span(-n/2+s,n/2-s,0,s,-r/2,r/2,xt.teal),i.span(-n/2-.2,n/2+.2,-.08,.06,-r/2,r/2+.28,xt.hotPink),i.span(-.04,.04,s,t-s,-.04,.04,xt.cream),i.span(-n/2+s,n/2-s,t/2-.04,t/2+.04,-.04,.04,xt.cream),Ei(i.finish(.006))}function qr(n,t,e,i,s,r){let o=new ts(.16,.05,8,20);n.add(o,ri(xt.planet),{wonk:.04,x:t,y:e,z:i,rx:-Math.PI/2+s,ry:r})}function bf({w:n,h:t,name:e,signColor:i=xt.hotPink,seed:s=5}){let r=wi(s,.012,"shopFront"),o=.5,a=.5,l=t,c=t-1.4,h=Mh(xt.glorpPurple,xt.ink,.7);r.span(-n/2+a,n/2-a,0,c,-o/2,-o/2+.1,h),r.span(-n/2+a,n/2-a,1.15,1.22,-o/2,-o/2+.4,xt.lilac);for(let p of[-1,1]){let v=p*(n/2-a/2);r.span(v-a/2,v+a/2,0,c,-o/2,o/2,xt.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,xt.teal)}r.span(-n/2,n/2,c,l,-o/2,o/2,xt.teal);let d=n-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,xt.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,xt.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,xt.cream),qr(r,-.9,1.01,.4,.1,.4),qr(r,-.2,1.01,.5,-.1,-.3),qr(r,.6,1.01,.38,.12,.9),qr(r,1.2,1.01,.52,0,.1);let u=10,f=(n-.1)/u,m=.42;for(let p=0;p<u;p++){let v=p%2?xt.cream:i,w=-n/2+.05+(p+.5)*f;r.box(f,.08,.95,v,{x:w,y:c-.02,z:o/2+.35,rx:m,top:Sh(v,.2)}),r.box(f,.22,.06,v,{x:w,y:c-.24,z:o/2+.8,rx:.1})}let _=Ei(r.finish(.006)),g=gy({text:e,w:n-.7,h:1.15,bg:i,fg:xt.cream,seed:s+1});return g.position.set(0,c+.7,o/2+.01),_.add(g),_}function wf({w:n=2,d:t=1,h:e=.9,color:i=xt.teal,seed:s=7}={}){let r=wi(s,.018,"kiosk");r.span(-n/2+.03,n/2-.03,0,.16,-t/2+.03,t/2-.03,xt.lilac),r.span(-n/2,n/2,.16,e-.08,-t/2,t/2,i),r.span(-n/2-.07,n/2+.07,e-.08,e,-t/2-.07,t/2+.07,xt.cream);let o=4,a=(n-.3)/o;for(let c=0;c<o;c++){let h=c%2?xt.cream:xt.hotPink;r.box(a-.04,e-.45,.05,h,{x:-n/2+.15+(c+.5)*a,y:.5,z:t/2+.02})}r.box(.38,.28,.3,xt.glorpPurple,{x:-.55,y:e+.14,z:-.1}),r.box(.3,.14,.04,xt.gel,{x:-.55,y:e+.28,z:.07,rx:-.5,wonk:0}),qr(r,.45,e+.06,.05,.1,.5);let l=Ei(r.finish(.006));return l.userData.footprint={w:n+.14,d:t+.14},l}function Ef({w:n=1.8,seed:t=11}={}){let e=wi(t,.02,"bench"),i=.5;e.box(n,.1,i,xt.lilac,{y:.46}),e.box(n,.42,.08,xt.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])e.box(.1,.46,i-.06,xt.teal,{x:r*(n/2-.2),y:.23}),e.box(.08,.5,.08,xt.teal,{x:r*(n/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=Ei(e.finish(.006));return s.userData.footprint={w:n,d:i},s}function xy(n,t,e){let i=new rn(.035,n,t,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+n/2)/n;s.setXYZ(r,s.getX(r)+e*o*o,s.getY(r)+n/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function Tf({seed:n=21}={}){let t=wi(n,.02,"planter"),e=_h(n);t.add(new vn(.42,.32,.55,16),ri(xt.teal),{y:.275}),t.add(new vn(.47,.44,.12,16),ri(xt.hotPink),{y:.6}),t.add(new vn(.4,.4,.04,16),ri(fl(xt.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=fl(xt.planet,.15);for(let l=0;l<6;l++)t.add(new vn(.06-l*.004,.07-l*.004,.34,8),ri(l%2?Sh(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+e()*.3,h=l%2?.95+e()*.25:1.45+e()*.25,d=new de().makeTranslation(i,s,0).multiply(new de().makeRotationY(c)).multiply(new de().makeRotationZ(-h));t.add(xy(.95,.24,l%2?.22:.4),ri(l%2?xt.gel:xt.teal),{m:d,wonk:.03})}t.add(new yn(.1,10,8),ri(xt.planet),{x:i,y:s-.05,z:.08}),t.add(new yn(.1,10,8),ri(xt.planet),{x:i+.07,y:s-.1,z:-.07});let a=Ei(t.finish());return a.userData.footprint={w:.95,d:.95},a}var yh=null;function ml({rx:n,rz:t,opacity:e=.35}){let r=new Kt(xt.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,e];for(let d=1;d<=8;d++){let u=d/8,f=e*(1-u*u*(3-2*u));for(let m=0;m<28;m++){let _=m/28*Math.PI*2;o.push(Math.cos(_)*n*u,0,Math.sin(_)*t*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let m=0;m<28;m++){let _=(m+1)%28;l.push(u+m,u+_,f+m,u+_,f+_,f+m)}}let c=new we;c.setAttribute("position",new ue(o,3)),c.setAttribute("color",new ue(a,4)),c.setIndex(l),yh||(yh=new Ji({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new xe(c,yh);return h.name="blobShadow",h.position.y=.012,h}var $r=8,gl=$r/2,wh=.2;function Af(){let n=new Ae;n.add(pl({w:$r,d:$r}));let t=bh({w:$r+wh*2,h:4});t.position.set(0,0,-gl-wh/2),n.add(t);let e=1.3,i=bf({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:xt.hotPink});i.position.set(e,0,-gl+.25),n.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=bh({w:$r,h:4,color:"#f1e6ff",opening:s});r.position.set(-gl-wh/2,0,0),r.rotation.y=Math.PI/2;let o=Sf({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),n.add(r);let a=wf({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Ef({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=Tf({seed:21});c.position.set(-2.95,0,-2.9),n.add(a,l,c);let h=(d,u,f,m,_=0)=>{let g=ml({rx:f,rz:m,opacity:.7});g.position.x=d,g.position.z=u,g.rotation.y=_,n.add(g)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(e,-gl+.9,2.7,.8),{group:n,spawn:[0,0,0],update(){}}}function Dn(n,t,e,i){if(!(e>0)||!(i>0))return e>0||(n.x=t,n.v=0),n;let s=4*Math.LN2/e/2,r=n.x-t,o=n.v+r*s,a=Math.exp(-s*i);return n.x=a*(r+o*i)+t,n.v=a*(n.v-o*s*i),n}function Eh(n,t,e,i,s,r){let o=e+i,a=t[0]-n[0],l=t[1]-n[1],c=t[2]-n[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=t[0],f=t[1],m=t[2];h>d&&(h=d,u=n[0]+a*h,f=n[1]+l*h,m=n[2]+c*h);let _=h>o?h/o:1;if(h>=o){let M=h*(o>0?e/o:.5);return Rf(r,n[0]+a*M,n[1]+l*M,n[2]+c*M,u,f,m,_)}let g=Math.max(h,1e-6),p=Math.min(Math.max((g*g+e*e-i*i)/(2*g),-e),e),v=Math.sqrt(Math.max(e*e-p*p,0)),w=s[0],y=s[1],S=s[2],E=w*a+y*l+S*c;w-=a*E,y-=l*E,S-=c*E;let x=Math.hypot(w,y,S);return x<1e-6&&(Math.abs(a)<.9?(w=0,y=c,S=-l):(w=-c,y=0,S=a),x=Math.hypot(w,y,S)||1),w/=x,y/=x,S/=x,Rf(r,n[0]+a*p+w*v,n[1]+l*p+y*v,n[2]+c*p+S*v,u,f,m,_)}function Rf(n,t,e,i,s,r,o,a){if(!n)return{mid:[t,e,i],end:[s,r,o],stretch:a};let l=n.mid,c=n.end;return l[0]=t,l[1]=e,l[2]=i,c[0]=s,c[1]=r,c[2]=o,n.stretch=a,n}var Cf=[.65,1.2];function Th({radius:n=.06,rings:t=8,sides:e=8,color:i="#ffffff"}={}){let s=t+1,r=Cf.length,o=s*e,a=[o,o+r*e+1],l=o+2*(r*e+1),c=[],h=(dt,rt,Ut)=>{for(let Lt=0;Lt<e;Lt++){let Ht=(Lt+1)%e,Zt=dt+Lt,jt=dt+Ht,D=rt+Lt,at=rt+Ht;Ut?c.push(Zt,D,jt,jt,D,at):c.push(Zt,jt,D,jt,at,D)}};for(let dt=0;dt<t;dt++)h(dt*e,(dt+1)*e,!1);for(let dt=0;dt<2;dt++){let rt=dt===0,Ut=dt===0?0:t*e;for(let Ht=0;Ht<r;Ht++){let Zt=a[dt]+Ht*e;h(Ut,Zt,rt),Ut=Zt}let Lt=a[dt]+r*e;for(let Ht=0;Ht<e;Ht++){let Zt=Ut+Ht,jt=Ut+(Ht+1)%e;rt?c.push(Zt,Lt,jt):c.push(Zt,jt,Lt)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new we,m=new Se(d,3),_=new Se(u,3);m.setUsage(zs),_.setUsage(zs),f.setAttribute("position",m),f.setAttribute("normal",_),f.setIndex(c);let g=new xe(f,pn({color:i}));g.name="limb";let p=new On(new N,n*2);f.boundingSphere=p,Hn(g);let v=new Float64Array(e),w=new Float64Array(e);for(let dt=0;dt<e;dt++)v[dt]=Math.cos(dt/e*Math.PI*2),w[dt]=Math.sin(dt/e*Math.PI*2);let y=0,S=-1,E=0,x=1,M=0,R=0,C=0,L=0,F=1,V=0,P=0,H=0,q=0,O=0,it=0,G=0,z=0,k=0,ct=0,gt=0,Y=0,ft=0,It=0,zt=0,$=0,Et=0,wt=0;function bt(dt,rt,Ut,Lt,Ht,Zt,jt,D,at,Tt,Wt,st,ie,Ft,Bt,A){for(let b=0;b<e;b++){let B=v[b]*Zt+w[b]*at,ut=v[b]*jt+w[b]*Tt,tt=v[b]*D+w[b]*Wt,pt=(dt+b)*3;d[pt]=rt+B*Ht,d[pt+1]=Ut+ut*Ht,d[pt+2]=Lt+tt*Ht,u[pt]=B*Bt+st*A,u[pt+1]=ut*Bt+ie*A,u[pt+2]=tt*Bt+Ft*A}}let qt=!1,te=1,et=0,ht=0;function mt(dt,rt,Ut,Lt=1){let Ht=n/Math.sqrt(Lt>1?Lt:1),Zt=2*rt[0]-(dt[0]+Ut[0])/2,jt=2*rt[1]-(dt[1]+Ut[1])/2,D=2*rt[2]-(dt[2]+Ut[2])/2,at=dt[0],Tt=dt[1],Wt=dt[2],st=Ut[0],ie=Ut[1],Ft=Ut[2],Bt=(rt[1]-Tt)*(Ft-rt[2])-(rt[2]-Wt)*(ie-rt[1]),A=(rt[2]-Wt)*(st-rt[0])-(rt[0]-at)*(Ft-rt[2]),b=(rt[0]-at)*(ie-rt[1])-(rt[1]-Tt)*(st-rt[0]),B=Math.hypot(Bt,A,b),ut=rt[0]-at,tt=rt[1]-Tt,pt=rt[2]-Wt,_t=Math.hypot(ut,tt,pt),K=st-rt[0],j=ie-rt[1],Mt=Ft-rt[2],I=!1;B>1e-4*_t*Math.hypot(K,j,Mt)&&B>1e-12?(Bt/=B,A/=B,b/=B,qt&&Bt*te+A*et+b*ht<0&&(Bt=-Bt,A=-A,b=-b),I=!0):_t>1e-9&&ut*K+tt*j+pt*Mt<0&&(Zt=(at+st)/2,jt=(Tt+ie)/2,D=(Wt+Ft)/2);let Q=(at+Zt+st)/3,J=(Tt+jt+ie)/3,yt=(Wt+D+Ft)/3,vt=Math.max(Math.hypot(at-Q,Tt-J,Wt-yt),Math.hypot(Zt-Q,jt-J,D-yt),Math.hypot(st-Q,ie-J,Ft-yt));p.center.set(Q,J,yt),p.radius=vt+n*1.5+.02;for(let ot=0;ot<s;ot++){let lt=ot/t,Dt=1-lt,nt=Dt*Dt,At=2*Dt*lt,Gt=lt*lt,St=nt*at+At*Zt+Gt*st,Jt=nt*Tt+At*jt+Gt*ie,re=nt*Wt+At*D+Gt*Ft,ve=2*Dt*(Zt-at)+2*lt*(st-Zt),Ce=2*Dt*(jt-Tt)+2*lt*(ie-jt),Pe=2*Dt*(D-Wt)+2*lt*(Ft-D),bn=Math.hypot(ve,Ce,Pe);if(bn>1e-9?(y=ve/bn,S=Ce/bn,E=Pe/bn):ot===0&&(y=0,S=-1,E=0),ot===0){I?(x=Bt,M=A,R=b):qt?(x=te,M=et,R=ht):(x=1,M=0,R=0);let Ke=x*y+M*S+R*E;x-=y*Ke,M-=S*Ke,R-=E*Ke;let be=Math.hypot(x,M,R);be<1e-6&&(Math.abs(y)<.9?(x=0,M=E,R=-S):(x=-E,M=0,R=y),be=Math.hypot(x,M,R)||1),x/=be,M/=be,R/=be,te=x,et=M,ht=R,qt=!0}else{let Ke=x*y+M*S+R*E;x-=y*Ke,M-=S*Ke,R-=E*Ke;let be=Math.hypot(x,M,R);be<1e-6&&(Math.abs(y)<.9?(x=0,M=E,R=-S):(x=-E,M=0,R=y),be=Math.hypot(x,M,R)||1),x/=be,M/=be,R/=be}C=S*R-E*M,L=E*x-y*R,F=y*M-S*x,bt(ot*e,St,Jt,re,Ht,x,M,R,C,L,F,0,0,0,1,0),ot===0&&(V=y,P=S,H=E,q=x,O=M,it=R,G=C,z=L,k=F),ot===s-1&&(ct=y,gt=S,Y=E,ft=x,It=M,zt=R,$=C,Et=L,wt=F)}for(let ot=0;ot<2;ot++){let lt=ot===0?-1:1,Dt=ot===0?at:st,nt=ot===0?Tt:ie,At=ot===0?Wt:Ft,Gt=ot===0?V:ct,St=ot===0?P:gt,Jt=ot===0?H:Y,re=ot===0?q:ft,ve=ot===0?O:It,Ce=ot===0?it:zt,Pe=ot===0?G:$,bn=ot===0?z:Et,Ke=ot===0?k:wt,be=Gt*lt,mn=St*lt,li=Jt*lt;for(let Bi=0;Bi<r;Bi++){let ki=Cf[Bi],Ks=Math.cos(ki),zi=Math.sin(ki);bt(a[ot]+Bi*e,Dt+be*Ht*zi,nt+mn*Ht*zi,At+li*Ht*zi,Ht*Ks,re,ve,Ce,Pe,bn,Ke,be,mn,li,Ks,zi)}let Xn=(a[ot]+r*e)*3;d[Xn]=Dt+be*Ht,d[Xn+1]=nt+mn*Ht,d[Xn+2]=At+li*Ht,u[Xn]=be,u[Xn+1]=mn,u[Xn+2]=li}m.needsUpdate=!0,_.needsUpdate=!0}return{mesh:g,set:mt}}var as=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),_y=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),xl=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],Ah=.04,vy=9;function _l(n,t){let e=Math.sin(n*12.9898+t*78.233)*43758.5453;return(e-Math.floor(e))*Math.PI*2}function yy(n,t,e=[0,0]){return e[0]=.05*Math.sin(1.3*n+_l(t,1))+.03*Math.sin(2.1*n+_l(t,2)),e[1]=.04*Math.sin(1.7*n+_l(t,3))+.02*Math.sin(2.6*n+_l(t,4)),e}var My=(n,t)=>Math.min(n*2,1)*Math.max(t,0),Zr=16,Pf=Zr+1,Gn=11,Ti=4,vl=13,Sy=.07,by=n=>{let t=n<0?0:n>1?1:n;return t*t*(3-2*t)};function If({eyeRadius:n=.1,eyeSpacing:t=.26,eyeY:e=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=xt.ink,fixedSmile:h=0}={}){let d=n,u=t/2,f=[-u,u],m=.35,_=.035*d,g=d*.3,p=a==="uni",v=0,w=v+2*Pf,y=w+16,S=y+2*Gn*Ti,E=S+2*Gn*2,x=E+(p?6:8),M=x+vl*2,R=[],C=at=>R.push(at,at+1,at+2,at,at+2,at+3),L=(at,Tt)=>{for(let Wt=0;Wt<Tt-1;Wt++){let st=at+Wt*2;R.push(st,st+1,st+2,st+1,st+3,st+2)}};for(let at=0;at<2;at++){let Tt=v+at*Pf;for(let Wt=0;Wt<Zr;Wt++)R.push(Tt,Tt+1+Wt,Tt+1+(Wt+1)%Zr)}for(let at=0;at<4;at++)C(w+at*4);for(let at=0;at<2;at++){let Tt=y+at*Gn*Ti;for(let Wt=0;Wt<Gn-1;Wt++)for(let st=0;st<Ti-1;st++){let ie=Tt+Wt*Ti+st,Ft=ie+1,Bt=ie+Ti,A=Bt+1;R.push(ie,Ft,Bt,Ft,A,Bt)}L(S+at*Gn*2,Gn)}p?R.push(E,E+1,E+2,E+1,E+3,E+2,E+2,E+3,E+4,E+3,E+5,E+4):(C(E),C(E+4)),L(x,vl);let F=[];for(let at=0;at<2;at++){let Tt=new yn(d,18,12);Tt.deleteAttribute("uv"),Tt.applyMatrix4(new de().makeScale(1,1,m).setPosition(f[at],e,i)),F.push(Tt)}let V=new xe(bi(F,!1),pn({color:xt.eyeWhite,shadowMix:.35,rim:0}));V.name="eyes",Hn(V,{px:2});let P=new Float32Array(M*3),H=new Float32Array(M*3),q=new Float32Array(M*3),O=new Kt(xt.ink),it=new Kt(c);for(let at=0;at<M;at++){H[at*3+2]=1;let Tt=at>=y&&at<S?it:O;q[at*3]=Tt.r,q[at*3+1]=Tt.g,q[at*3+2]=Tt.b}let G=new we,z=new Se(P,3);z.setUsage(zs),G.setAttribute("position",z),G.setAttribute("normal",new Se(H,3)),G.setAttribute("color",new Se(q,3)),G.setIndex(R);let k=e+d*3.5,ct=s-r*1.5-d,gt=Math.max(u+2.5*d,r);G.boundingSphere=new On(new N(0,(k+ct)/2,i),Math.hypot(gt,(k-ct)/2,d*2));let Y=pn({color:"#ffffff",vertexColors:!0,rim:0});Y.side=Mn;let ft=new xe(G,Y);ft.name="features";let It=new Ae;It.name="face",It.add(V,ft);let zt=as.neutral,$=at=>{let Tt=h>0?_y[at]:0;return Tt>0?h*Tt:-1/0},Et=$("neutral"),wt=at=>at==="mouthCurve"&&zt.mouthCurve<Et?Et:zt[at],bt={};for(let at of xl)bt[at]={x:wt(at),v:0};let qt={x:0,v:0},te={x:0,v:0},et=0,ht=!1,mt=0,dt=[0,0],rt=0;function Ut(at,Tt,Wt){let st=rt*3;P[st]=at,P[st+1]=Tt,P[st+2]=Wt,rt++}function Lt(at,Tt,Wt){let st=1-(at*at+Tt*Tt)/(d*d);return i+d*m*Math.sqrt(st>0?st:0)+Wt}function Ht(at,Tt,Wt,st,ie,Ft){let Bt=-(st-Tt),A=Wt-at,b=Math.hypot(Bt,A)||1;Bt=Bt/b*ie/2,A=A/b*ie/2,Ut(at+Bt,Tt+A,Ft),Ut(Wt+Bt,st+A,Ft),Ut(Wt-Bt,st-A,Ft),Ut(at-Bt,Tt-A,Ft)}let Zt=d*1.03;function jt(){let at=bt,Tt=at.pupilScale.x*(1-qt.x),Wt=qt.x,st=Math.min(Math.max(at.lid.x,0),.95),ie=at.browAngle.x,Ft=st>.005,Bt=Zt-2*Zt*st,A=ie*.6*Math.min(st*4,1),b=d*Sy*Math.min(st*10,1);rt=v;for(let lt=0;lt<2;lt++){let Dt=lt===0?-1:1;yy(mt,l+lt*7.31,dt);let nt=d*.5*(Tt>0?Tt:0),At=dt[0]*d,Gt=dt[1]*d;if(Ft){let Jt=Bt+A*Dt*At-Math.abs(A)*nt-b-(Gt+nt);if(Jt>0){let re=Math.min(Math.max((Jt-.1*d)/(.1*d),0),1);Gt+=Jt*(1-by(re))}}Ut(f[lt]+At,e+Gt,Lt(At,Gt,_));for(let St=0;St<Zr;St++){let Jt=St/Zr*Math.PI*2,re=At+Math.cos(Jt)*nt,ve=Gt+Math.sin(Jt)*nt;Ut(f[lt]+re,e+ve,Lt(re,ve,_))}}rt=w;for(let lt=0;lt<2;lt++){let Dt=d*.55*Wt,nt=Lt(0,0,_),At=d*.26*Wt;Ht(f[lt]-Dt,e-Dt,f[lt]+Dt,e+Dt,At,nt),Ht(f[lt]-Dt,e+Dt,f[lt]+Dt,e-Dt,At,nt)}for(let lt=0;lt<2;lt++){let Dt=lt===0?-1:1;for(let nt=0;nt<2;nt++){rt=nt===0?y+lt*Gn*Ti:S+lt*Gn*2;for(let At=0;At<Gn;At++){let Gt=(At/(Gn-1)*2-1)*(Math.PI/2),St=Zt*Math.sin(Gt),Jt=Zt*Math.cos(Gt),re=Ft?Bt+A*St:Jt;re>Jt&&(re=Jt),re<-Jt&&(re=-Jt);let ve=Dt*St;if(nt===0)for(let Ce=0;Ce<Ti;Ce++){let Pe=Jt+(re-Jt)*(Ce/(Ti-1));Ut(f[lt]+ve,e+Pe,Lt(ve,Pe*.97,_*3))}else{let Ce=re+(Ft?d*.02:0);Ce>Jt&&(Ce=Jt);let Pe=re-b;Pe<-Jt&&(Pe=-Jt),Ut(f[lt]+ve,e+Ce,Lt(ve,Ce*.97,_*3.5)),Ut(f[lt]+ve,e+Pe,Lt(ve,Pe*.97,_*3.5))}}}}rt=E;let B=d*.9,ut=e+d*(1.4+at.browY.x),tt=Math.cos(ie),pt=Math.sin(ie),_t=i+d*.15;if(p){let lt=u+B*tt,Dt=ut+B*pt,nt=ut-pt/(tt>.3?tt:.3)*u,At=-(nt-Dt),Gt=lt,St=Math.hypot(At,Gt)||1;At/=St,Gt/=St;let Jt=-(Dt-nt),re=lt,ve=Math.hypot(Jt,re)||1;Jt/=ve,re/=ve;let Ce=At+Jt,Pe=Gt+re,bn=Math.hypot(Ce,Pe)||1;Ce/=bn,Pe/=bn;let Ke=Ce*At+Pe*Gt,be=g/2/(Ke>.4?Ke:.4);Ut(-lt+At*g/2,Dt+Gt*g/2,_t),Ut(-lt-At*g/2,Dt-Gt*g/2,_t),Ut(Ce*be,nt+Pe*be,_t),Ut(-Ce*be,nt-Pe*be,_t),Ut(lt+Jt*g/2,Dt+re*g/2,_t),Ut(lt-Jt*g/2,Dt-re*g/2,_t)}else for(let lt=0;lt<2;lt++){let Dt=lt===0?-1:1;Ht(f[lt]-Dt*B*tt,ut-B*pt,f[lt]+Dt*B*tt,ut+B*pt,g,_t)}rt=x;let K=at.mouthOpen.x+te.x*(.55+.45*Math.sin((mt+l*.37)*vy*Math.PI*2))*.8,j=K>0?K<1.2?K:1.2:0,Mt=-at.mouthCurve.x/.5,I=(Mt>1?1:Mt>0?Mt:0)*(j<.4?j/.4:1),Q=r/2*(1-.35*(j<1?j:1)*(1-.7*I)),J=My(at.lid.x,at.mouthCurve.x),yt=at.mouthCurve.x*Q*.5*(1-.4*J)*(1+.6*I),vt=.55+.5*I,ot=j*Q*.9;for(let lt=0;lt<vl;lt++){let Dt=lt/(vl-1)*2-1,nt=1-Dt*Dt,At=Dt*Q*(1-.25*J)+J*Q*.2,Gt=s-yt*nt+J*Q*.45*Dt+qt.x*g*.6*Math.sin(Dt*Math.PI*3);Ut(At,Gt,o),Ut(At,Gt-g-ot*Math.pow(nt,vt)+yt*nt*I,o)}z.needsUpdate=!0}function D(at){mt+=at;for(let Tt=0;Tt<xl.length;Tt++)Dn(bt[xl[Tt]],wt(xl[Tt]),Ah,at);Dn(qt,et,Ah,at),Dn(te,ht?1:0,Ah,at),jt()}return jt(),{group:It,setExpression(at){zt=Object.prototype.hasOwnProperty.call(as,at)?as[at]:as.neutral,et=at==="dead"?1:0,Et=$(Object.prototype.hasOwnProperty.call(as,at)?at:"neutral")},setTalking(at){ht=!!at},update:D}}var Ai=Math.PI*2,Jr=["handL","handR","footL","footR"];function Wn(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Lf(n,t){t.hipsY=n.hipsY,t.lean=n.lean,t.twist=n.twist,t.headYaw=n.headYaw,t.headPitch=n.headPitch,t.squash=n.squash,t.elbows=n.elbows;for(let e=0;e<4;e++){let i=n[Jr[e]],s=t[Jr[e]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return t}function Tl(n,t,e,i=[0,0,0]){let s=e[0],r=e[1]-n.hipHeight,o=e[2],a=Math.cos(t.lean),l=Math.sin(t.lean),c=Math.cos(t.twist),h=Math.sin(t.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+t.hipsY,i[2]=-s*h+u*c,i}var wy=n=>n<0?0:n>1?1:n,Ys=(n,t,e)=>{let i=wy((e-n)/(t-n));return i*i*(3-2*i)},wl=(n,t,e,i,s)=>Ys(t,e,n)*(1-Ys(i,s,n));function Vn(n,t,e,i){return n[0]=t,n[1]=e,n[2]=i,n}var yl=[0,0,0];function Kr(n,t,e,i,s,r){return yl[0]=e,yl[1]=i,yl[2]=s,Tl(n,t,yl,r)}var Ml={sx:0,sy:0,fx:0};function qs(n){return Ml.sx=Math.abs(n.shoulderL[0]),Ml.sy=n.shoulderL[1],Ml.fx=Math.abs(n.hipL[0])+.035,Ml}var El=(n,t)=>t>0?n.handL:n.handR;function Rh(n,t,e,i,s){return Kr(n,t,s*(e.sx+.16),n.hipHeight+0,.1,i)}var Ch=.55;function Ih(n,t,e){let i=qs(t),s=n/Je.idle.duration,r=Ai*s,o=t.hipHeight,a=wl(s,.42,.52,.72,.86);return e.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),e.lean=.03+.015*Math.sin(r+.4),e.twist=.05*Math.sin(r+.6),e.headYaw=.03*Math.sin(r)+.3*a,e.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,e.squash=1+.008*Math.sin(r),e.elbows=Ch,Rh(t,e,i,e.handL,1),Rh(t,e,i,e.handR,-1),e.handL[1]+=.008*Math.sin(r-.5),e.handR[1]+=.008*Math.sin(r+.4),e.handL[2]+=.01*Math.sin(r+1.1),e.handR[2]+=.01*Math.sin(r-.7),Vn(e.footL,i.fx,0,.015),Vn(e.footR,-i.fx,0,-.015),e}var oi=.34,Ph=.25,Nf=-.33,Ey=.4,Ty=.37,Ay=.035,bl=(Ph-Nf)/oi;function Df(n,t){if(n<oi)return t[0]=0,t[1]=Ph-bl*n,t;let e=(n-oi)/(1-oi),i=-bl*(1-oi),s=-.35*bl*(1-oi),r=e*e,o=r*e;return t[1]=(2*o-3*r+1)*Nf+(o-2*r+e)*i+(-2*o+3*r)*Ph+(o-r)*s,t[0]=Ey*Math.sin(Math.PI*Math.pow(e,.8)),t}var Xs=[0,0];function Uf(n,t,e){let i=qs(t),s=n/Je.run.duration,r=s-Math.floor(s),o=t.hipHeight,a=2*Ai*(r-(oi+.5)/2);e.hipsY=o-.06+Ay*Math.cos(a),e.squash=1+.045*Math.cos(2*Ai*(r-oi-.03)),e.lean=Ty+.03*Math.cos(2*Ai*(r-oi));let l=Math.cos(Ai*(r+.03));e.twist=.2*l,e.headYaw=-.15*l,e.headPitch=-.28+.04*Math.cos(a),e.elbows=0,Df(r,Xs),Vn(e.footL,i.fx*.75,Xs[0],Xs[1]),Df(r<.5?r+.5:r-.5,Xs),Vn(e.footR,-i.fx*.75,Xs[0],Xs[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;Kr(t,e,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,El(e,c))}return e}function Ry(n,t,e){let i=qs(t),s=Ai*n/Je.aim.duration,r=t.hipHeight;e.hipsY=r-.05+.005*Math.sin(s),e.lean=.12+.01*Math.sin(s),e.twist=-.1,e.headYaw=.08,e.headPitch=.04+.012*Math.sin(2*s),e.squash=1,e.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Vn(e.handL,i.sx*1.2+o,i.sy-.12+a,.56),Vn(e.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Vn(e.footL,i.fx+.02,0,.15),Vn(e.footR,-i.fx-.03,0,-.13),e}var Lh=.35;function Cy(n){return n<.06?Ys(0,.06,n):Math.exp(-9*(n-.06))*(1-Ys(.24,Lh,n))}function Py(n){if(n<.07)return Ys(0,.07,n);let t=n-.07;return Math.exp(-11*t)*Math.cos(Ai*t/.22)*(1-Ys(.26,Lh,n))}function Iy(n,t,e){let i=qs(t),s=t.hipHeight,r=Cy(n);e.hipsY=s-.012-.05*r,e.lean=.03-.4*r,e.twist=.12*r,e.headYaw=-.12*r,e.headPitch=-.02-.32*r,e.squash=1-.15*Py(n),e.elbows=Ch+(1-Ch)*r;for(let o=-1;o<=1;o+=2){let a=El(e,o);Rh(t,e,i,a,o);let l=a[0],c=a[1],h=a[2];Kr(t,e,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Vn(e.footL,i.fx,0,.015),Vn(e.footR,-i.fx,0,-.015),e}var Sl=[0,0,0];function Ly(n,t,e){Ih(n,t,e);let i=qs(t),s=n/Je.talk.duration,r=Ai*s,o=wl(s,.04,.17,.4,.55),a=wl(s,.5,.63,.8,.95),l=Math.sin(3*r);e.headPitch+=.05*Math.sin(4*r)-.04*(o+a),e.headYaw+=-.12*o+.12*a,e.elbows+=(.85-e.elbows)*Math.max(o,a),Kr(t,e,-(i.sx+.19),i.sy-.1+.03*l,.36,Sl);for(let c=0;c<3;c++)e.handR[c]+=(Sl[c]-e.handR[c])*o;Kr(t,e,i.sx+.19,i.sy-.12-.03*l,.34,Sl);for(let c=0;c<3;c++)e.handL[c]+=(Sl[c]-e.handL[c])*a;return e}var ls=Wn();function Dy(n,t,e){let i=n/Je.roll.duration,s=wl(i,0,.15,.75,1),r=qs(t);Ih(0,t,ls);let o=(a,l)=>a+(l-a)*s;e.hipsY=o(ls.hipsY,.45),e.lean=o(ls.lean,1.3),e.twist=0,e.headYaw=0,e.headPitch=o(ls.headPitch,.35),e.squash=o(1,.9),e.elbows=1;for(let a=-1;a<=1;a+=2){let l=El(e,a),c=El(ls,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?e.footL:e.footR,d=a>0?ls.footL:ls.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return e}function Ny(n,t,e){return Uf(n,t,e),e.hipsY-=.12,e.lean+=.15,e}var Uy=.05;function cs(n,t,e,i=Uy){return Object.freeze({duration:n,loop:t,ease:i,sample:(s,r,o=Wn())=>e(s,r,o)})}var Je=Object.freeze({idle:cs(2.4,!0,Ih),run:cs(.56,!0,Uf,.008),aim:cs(1.6,!0,Ry),flinch:cs(Lh,!1,Iy),talk:cs(2.4,!0,Ly),roll:cs(.55,!1,Dy,.02),sprint:cs(.56,!0,Ny,.008)}),Dh=bl/Je.run.duration;function jr(n,t,e,i){let s=Object.prototype.hasOwnProperty.call(Je,n)?Je[n]:null;if(!s)throw new Error(`unknown clip: ${n}`);let r=s.loop?t:Math.min(Math.max(t,0),s.duration);return s.sample(r,e,i||Wn())}function Al(n,t,e,i=Wn()){if(!(e>0))return Lf(n,i);if(e>=1)return Lf(t,i);let s=1-e;i.hipsY=n.hipsY*s+t.hipsY*e,i.lean=n.lean*s+t.lean*e,i.twist=n.twist*s+t.twist*e,i.headYaw=n.headYaw*s+t.headYaw*e,i.headPitch=n.headPitch*s+t.headPitch*e,i.squash=n.squash*s+t.squash*e,i.elbows=n.elbows*s+t.elbows*e;for(let r=0;r<4;r++){let o=n[Jr[r]],a=t[Jr[r]],l=i[Jr[r]];l[0]=o[0]*s+a[0]*e,l[1]=o[1]*s+a[1]*e,l[2]=o[2]*s+a[2]*e}return i}var Fy=.05,ai=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Qr=["handL","handR","footL","footR"],Nh=ai.length+Qr.length*3,$s=[.35,-.2,-.8],Uh=[.75,-.85,-.15];function Ie(n,t){if(n.deleteAttribute("uv"),!n.index){let r=n.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;n.setIndex(o)}let e=new Kt(t),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Se(s,3)),n}var Oy=new de,Sn=(n,t,e,i,s=0,r=0,o=0,a=1,l=1,c=1)=>n.applyMatrix4(Oy.compose(new N(t,e,i),new tn().setFromEuler(new sn(s,r,o)),new N(a,l,c)));function hs(n=20,t=14){let e=new yn(1,n,t);return e.deleteAttribute("uv"),e.deleteAttribute("normal"),xf(e)}function Fh(n,t,e){let i=hs(t,e),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)n(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function Cl(n,t,e){let i=t[0]-n[0],s=t[1]-n[1],r=t[2]-n[2],o=Math.hypot(i,s,r),a=new vn(e,e,o,6,1),l=new tn().setFromUnitVectors(new N(0,1,0),new N(i/o,s/o,r/o));return a.applyMatrix4(new de().compose(new N((n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2),l,new N(1,1,1))),a}function Pl(n,t){let e=bi(n,!1);if(!e)throw new Error(`rig: could not merge the ${t} parts`);Ws(e),e.computeBoundingSphere();let i=new xe(e,pn({color:"#ffffff",vertexColors:!0}));return i.name=t,Hn(i),i}function Oh(n,t,e,i,s){let r=2/n.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(t)*n.rx,s[1]=o(e)*n.ry;let a=o(i)*n.rz;return a>n.flatZ&&(a=n.flatZ+(a-n.flatZ)*n.flatK),s[2]=a,s}function By(n){let t=n.torso,e=n.colors,i=n.outfit,s=(h,d)=>{let u=new Ir(h.map(([f,m])=>new Pt(f,m)),22);return u.scale(1,1,t.depth),Ie(u,d)},r=[s(t.pants,e.pants),s(t.shirt,e.shirt)],o=t.shirt[t.shirt.length-2][1],a=h=>{let d=t.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return t.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=n.shoulderL[1]-n.hipHeight;for(let h of[-1,1]){let d=hs(14,10);Sn(d,h*Math.abs(n.shoulderL[0])*.97,c-.01,0,0,0,h*.5,t.sleeve*1.15,t.sleeve,t.sleeve*1.05),d.computeVertexNormals(),r.push(Ie(d,e.shirt))}if(i.collar){let h=new ts(.1,.03,8,20);Sn(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(Ie(h,e.collar))}if(i.logo){let u=new vn(.03,.03,.01,12);Sn(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(Ie(u,e.logo))}if(i.lanyard){let d=l(0,.15)+.012;for(let m of[-1,1]){let _=[m*.075,o-.03,.085],g=[m*.05,.34,l(.05,.34)+.014],p=[m*.014,.15+.05,l(.014,.15+.05)+.01];r.push(Ie(Cl(_,g,.008),e.lanyard),Ie(Cl(g,p,.008),e.lanyard))}let u=new rn(.075,.1,.014);Sn(u,0,.15,d,-.05,0,.04);let f=new rn(.077,.026,.016);Sn(f,0,.15+.028,d,-.05,0,.04),r.push(Ie(u,e.badge),Ie(f,e.badgeStripe))}return Pl(r,"torso")}function ky(n){let t=n.head,e=n.hair,i=n.colors,s=n.outfit,r=[],o=Fh((a,l,c,h)=>Oh(t,a,l,c,h),40,28);r.push(Ie(o,i.skin),Ie(zy(t,e),i.hair));for(let a of[-1,1]){let l=hs(12,8);Sn(l,a*t.rx*.97,-.03,-.015,0,a*.3,0,t.ear*.45,t.ear,t.ear*.75),l.computeVertexNormals(),r.push(Ie(l,i.skin))}{let a=n.face,l=(a.eyeY+a.mouthY)/2-.005,c=hs(12,8);Sn(c,0,l,Hy(t,0,l),0,0,0,t.nose*.9,t.nose*.8,t.nose),c.computeVertexNormals(),r.push(Ie(c,i.skin))}if(s.headset){let a=t.ry+e.thickness+.03,l=new nn;l.getPoint=(_,g=new N)=>g.set(Math.cos(Math.PI*_)*(t.rx+e.thickness+.012),Math.sin(Math.PI*_)*a,0);let c=new Lr(l,24,.014,6,!1);Sn(c,0,0,-.03,-.12,0,0),r.push(Ie(c,i.headset));for(let _ of[-1,1]){let g=new vn(.055,.06,.05,14);Sn(g,_*(t.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(Ie(g,i.headset))}let h=n.face,d=[t.rx+.035,-.04,0],u=[t.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(Ie(Cl(d,u,.009),i.headset),Ie(Cl(u,f,.009),i.headset));let m=hs(10,8);Sn(m,f[0],f[1],f[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(Ie(m,i.mic))}return Pl(r,"headMesh")}var Ri=48,Rl=12;function zy(n,t){let e=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=nl.smoothstep,r=[],o=(u,f,m)=>{let _=Math.sin(u)*Math.sin(f),g=Math.cos(u),p=Math.sin(u)*Math.cos(f);Oh(n,_,g,p,i);let v=i[0]/(n.rx*n.rx),w=i[1]/(n.ry*n.ry),y=i[2]/(n.rz*n.rz),S=Math.hypot(v,w,y)||1;v/=S,w/=S,y/=S;let E=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(p+.3,0),x=t.quiff?t.lift*Math.max(p,0)*s(i[1],.12,.26)*(1-.5*_):0,M=t.back*Math.max(-p,0)*s(i[1],-.15,.1),R=m?-.01:t.thickness*(1-.55*Math.min(E,1))+x+M;r.push(i[0]+v*R,i[1]+w*R,i[2]+y*R)},a=u=>{let f=0,m=Math.PI;for(let _=0;_<40;_++){let g=(f+m)/2,p=Math.sin(g)*Math.sin(u),v=Math.sin(g)*Math.cos(u);Oh(n,p,Math.cos(g),v,i),i[1]>e(p,v)?f=g:m=g}return f};o(0,0,!1);let l=[];for(let u=0;u<Ri;u++)l.push(a(u/Ri*Math.PI*2));for(let u=1;u<=Rl+1;u++)for(let f=0;f<Ri;f++){let m=f/Ri*Math.PI*2,_=u>Rl;o(_?l[f]+.03:l[f]*(u/Rl),m,_)}let c=(u,f)=>1+(u-1)*Ri+f%Ri,h=[];for(let u=0;u<Ri;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=Rl;u++)for(let f=0;f<Ri;f++){let m=c(u,f),_=c(u,f+1),g=c(u+1,f),p=c(u+1,f+1);h.push(m,g,p,m,p,_)}let d=new we;return d.setAttribute("position",new ue(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function Hy(n,t,e){let i=1-Math.pow(Math.abs(t/n.rx),n.power)-Math.pow(Math.abs(e/n.ry),n.power),s=i>0?n.rz*Math.pow(i,1/n.power):0;return s>n.flatZ?n.flatZ+(s-n.flatZ)*n.flatK:s}function Ff(n,t){let e=n.hand.radius,i=n.colors,s=hs(14,10);Sn(s,0,e*.75,0,0,0,0,e*.78,e*1.1,e*.95),s.computeVertexNormals();let r=hs(10,8);return Sn(r,e*.3,e*.45,t*e*.75,t*-.6,0,.3,e*.34,e*.55,e*.34),r.computeVertexNormals(),Pl([Ie(s,i.skin),Ie(r,i.skin)],t>0?"handL":"handR")}function Of(n,t){let e=n.shoe,i=n.colors,s=e.width/2,r=e.length/2,o=e.length*.18,a=.03,l=Fh((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,e.height*.55+d*e.height*.6-Math.max(u,0)*e.height*.25),f[2]=o+u*r*.96},20,12),c=Fh((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return Pl([Ie(l,i.shoe),Ie(c,i.sole)],t>0?"footL":"footR")}function Il(n){let t=new Ae;t.name=n.name||"character";let e=new Ae;e.name="body",t.add(e);let i=new Ae;i.name="hips",i.rotation.order="YXZ";let s=By(n);i.add(s);let r=new Ae;r.name="head",r.rotation.order="YXZ",r.position.set(0,n.neckY-n.hipHeight,0),i.add(r);let o=ky(n);o.position.y=n.head.centerY,r.add(o);let a=If({...n.face,lidColor:n.colors.skin});a.group.position.y=n.head.centerY,r.add(a.group),e.add(i);let l=[Ff(n,1),Ff(n,-1)],c=[Of(n,1),Of(n,-1)],h=[0,1].map(()=>Th({radius:n.armRadius,color:n.colors.skin})),d=[0,1].map(()=>Th({radius:n.legRadius,color:n.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",e.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=ml({rx:.45,rz:.38,opacity:.55});t.add(u);let f=Wn(),m=Wn(),_=[];for(let k=0;k<Nh;k++)_.push({x:0,v:0});let g=!1,p=Fy,v=(k,ct)=>ct<ai.length?k[ai[ct]]:k[Qr[(ct-ai.length)/3|0]][(ct-ai.length)%3];function w(k,ct,gt){ct<ai.length?k[ai[ct]]=gt:k[Qr[(ct-ai.length)/3|0]][(ct-ai.length)%3]=gt}function y(k,ct){ct>=0&&(p=ct),f.hipsY=k.hipsY,f.lean=k.lean,f.twist=k.twist,f.headYaw=k.headYaw,f.headPitch=k.headPitch,f.squash=k.squash,f.elbows=k.elbows>=0?k.elbows:0;for(let gt=0;gt<4;gt++){let Y=k[Qr[gt]],ft=f[Qr[gt]];ft[0]=Y[0],ft[1]=Y[1],ft[2]=Y[2]}if(!g){g=!0;for(let gt=0;gt<Nh;gt++)_[gt].x=v(f,gt),_[gt].v=0}}let S=[0,0,0],E=[0,0,0],x=[0,0,0],M=[0,0,0],R={mid:[0,0,0],end:[0,0,0],stretch:1},C=new N,L=new N,F=new N,V=new de,P=n.armLength/2,H=n.legLength/2,q=n.ankleHeight;function O(k,ct,gt){let Y=Math.cos(m.twist),ft=Math.sin(m.twist);M[0]=k*Y+gt*ft,M[1]=ct,M[2]=-k*ft+gt*Y}function it(){let k=m.squash>.2?m.squash:.2,ct=1/Math.sqrt(k);e.scale.set(ct,k,ct),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let gt=0;gt<2;gt++){let Y=gt===0?1:-1;Tl(n,m,gt===0?n.shoulderL:n.shoulderR,S);let ft=m.elbows<0?0:m.elbows>1?1:m.elbows;O(Y*($s[0]+(Uh[0]-$s[0])*ft),$s[1]+(Uh[1]-$s[1])*ft,$s[2]+(Uh[2]-$s[2])*ft),Eh(S,gt===0?m.handL:m.handR,P,P,M,R),h[gt].set(S,R.mid,R.end,R.stretch);let It=l[gt];It.position.set(R.end[0],R.end[1],R.end[2]),C.set(R.end[0]-R.mid[0],R.end[1]-R.mid[1],R.end[2]-R.mid[2]),C.lengthSq()<1e-10&&C.set(0,-1,0),C.normalize(),L.set(-Y*Math.cos(m.twist),0,Y*Math.sin(m.twist)),L.addScaledVector(C,-L.dot(C)),L.lengthSq()<1e-4&&L.set(0,0,1).addScaledVector(C,-C.z),L.normalize(),F.crossVectors(L,C),V.makeBasis(L,C,F),It.quaternion.setFromRotationMatrix(V),Tl(n,m,gt===0?n.hipL:n.hipR,E);let zt=gt===0?m.footL:m.footR;x[0]=zt[0],x[1]=zt[1]+q,x[2]=zt[2],O(Y*.15,0,1),Eh(E,x,H,H,M,R),d[gt].set(E,R.mid,R.end,R.stretch);let $=c[gt];$.position.set(R.end[0],R.end[1]-q,R.end[2]),$.rotation.set(Math.min(Math.max(R.end[1]-q,0),.3)*1.1,m.twist*.3,0)}}function G(k){if(g)for(let ct=0;ct<Nh;ct++)Dn(_[ct],v(f,ct),p,k),w(m,ct,_[ct].x);it(),a.update(k)}jr("idle",0,n,m),it();function z(){t.traverse(k=>{!k.isMesh||k.userData.isOutline||(k.geometry.dispose(),k!==u&&k.material.dispose())}),t.removeFromParent()}return{root:t,spec:n,face:a,setPose:y,update:G,dispose:z,shadow:u}}var Gy=.15,Vy=.03,Bf=n=>n<=0?0:n>=1?1:n*n*(3-2*n);function Ll(n){let t=n.spec,e="idle",i=0,s="idle",r=0,o=0,a=Je[e].ease,l=Wn(),c=Wn(),h=jr(e,0,t);Al(h,h,1,l);function d(m,{fade:_}={}){Object.prototype.hasOwnProperty.call(Je,m)&&(m===e&&Je[m].loop||(m==="flinch"&&e!=="flinch"&&(s=e),Al(h,h,1,l),a=u(),r=_===void 0?m==="flinch"?Vy:Gy:Math.max(_,0),o=0,e=m,i=0,n.face.setTalking(m==="talk")))}function u(){let m=r>0?Bf(o/r):1;return a+(Je[e].ease-a)*m}function f(m){let _=Je[e];if(i+=m,o+=m,_.loop)i>=_.duration&&(i-=_.duration*Math.floor(i/_.duration));else if(i>=_.duration)return d(s),f(0);jr(e,i,t,c),Al(l,c,r>0?Bf(o/r):1,h),n.setPose(h,u())}return{play:d,update:f,current:()=>e}}function Dl(n,t,e){let i=parseInt(n.slice(1),16),s=parseInt(t.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*e)<<o}return"#"+r.toString(16).padStart(6,"0")}function kf(n){for(let t of Object.values(n))t&&typeof t=="object"&&kf(t);return Object.freeze(n)}var Bh=xt.glorpPurple,Ci=kf({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:{shirt:Bh,collar:Dl(Bh,xt.ink,.25),logo:xt.gel,pants:Dl(xt.planet,xt.ink,.3),skin:xt.daleSkin,hair:xt.daleHair,shoe:Dl(xt.ink,Bh,.3),sole:xt.cream,lanyard:xt.hotPink,badge:xt.cream,badgeStripe:xt.teal,headset:Dl(xt.ink,xt.lilac,.25),mic:xt.hotPink},outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75}});var Wy=1.5,Xy=8,Yy=-.2,qy=1.3,zf=.6,$y=Math.atan2(1.3,-4),Zy=new N(-.45,.22,-1).applyEuler(new sn(-.2,.68,0)).toArray(),Hf=10,Jy=.8,Ky=.05,jy=["idle","run","aim","flinch","talk"],to=Object.keys(as),Gf=(n,t,e)=>Math.min(e,Math.max(t,n));function Qy(n,t,e,i=[0,0,0]){return i[0]=Math.sin(n)*Math.cos(t)*e,i[1]=Math.sin(t)*e,i[2]=Math.cos(n)*Math.cos(t)*e,i}function tM(n,t,e=ge.camera){let i=Math.sin(t),s=Math.cos(t),r=-Math.cos(t),o=Math.sin(t),a=[n[0]+r*e.right-i*e.back,n[1]+e.up,n[2]+o*e.right-s*e.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Vf({canvas:n,gl:t}){let e=ul(n,t),i=e.renderer,s=hl(n),r=document.getElementById("cr-readout"),o=new $i,a=new Ve(ge.camera.fov,1,.1,100),l=dl({planetDir:Zy});o.add(l.mesh);let c=Af();o.add(c.group);let h=[];function d($,Et,wt){let bt=Il(wt===void 0?Ci:{...Ci,face:{...Ci.face,seed:wt}});bt.root.position.set($,0,Et),bt.root.rotation.y=zf,o.add(bt.root);let qt=Ll(bt),te={rig:bt,anim:qt};return h.push(te),te}let u=d(c.spawn[0],c.spawn[2]),f=[],m=!1,_=0,g=!0,p=!1,v=.685,w=.1,y=4.6,S=!1,E=new N(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),x=[0,0,0];function M($){if(jy.includes($)){u.anim.play($);for(let Et of f)Et.anim.play(m?"run":$)}}function R($){let Et=to.indexOf($);if(!(Et<0)){_=Et;for(let wt of h)wt.rig.face.setExpression($)}}function C($){g=!!$,xh(o,g)}function L($){p=!!$,u.rig.root.rotation.y=p?$y:zf}function F($){if($=!!$,$!==m)if(m=$,$){let Et=c.spawn[2]+2.4;for(let wt=0;wt<Hf;wt++){let bt=c.spawn[0]+(wt-(Hf-1)/2)*Jy,qt=d(bt,Et,10+wt);qt.anim.play("run"),qt.rig.face.setExpression(to[_]),f.push(qt)}xh(o,g)}else{for(let Et of f)Et.rig.dispose(),h.splice(h.indexOf(Et),1);f=[]}}function V(){let $=e.resize();a.aspect=$.aspect,a.updateProjectionMatrix()}V(),window.addEventListener("resize",V),n.addEventListener("mousedown",$=>{$.button===0&&(S=!0)}),window.addEventListener("mouseup",()=>{S=!1}),window.addEventListener("mousemove",$=>{S&&!s.isLocked()&&P($.movementX||0,$.movementY||0,.006)}),n.addEventListener("wheel",$=>{y=Gf(y*Math.exp($.deltaY*.001),Wy,Xy)},{passive:!0});function P($,Et,wt){v-=$*wt,w=Gf(w+Et*wt,Yy,qy)}window.addEventListener("keydown",$=>{$.repeat||($.code==="Digit4"?M("flinch"):$.code==="Digit5"?M("talk"):$.code==="KeyO"?C(!g):$.code==="KeyP"?F(!m):$.code==="KeyL"?s.requestLock():$.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let H=0,q=0,O=0,it=0,G=0,z=0,k=null,ct=0;window.__cr.stats=()=>({fps:H,ms:q,calls:G,tris:z,scale:e.scale(),characters:h.length}),window.__cr.anim=M,window.__cr.expression=R,window.__cr.perf=F,window.__cr.gameCam=L,window.__cr.outlines=C;function gt($){$.pressed.weapon1&&M("idle"),$.pressed.weapon2&&M("run"),$.pressed.weapon3&&M("aim"),$.pressed.interact&&R(to[(_+1)%to.length]),$.pressed.grenade&&L(!p)}function Y(){if(p){let $=tM([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray($.pos),a.lookAt($.look[0],$.look[1],$.look[2])}else Qy(v,w,y,x),a.position.set(E.x+x[0],E.y+x[1],E.z+x[2]),a.lookAt(E)}let ft=$=>$.toFixed(2);function It(){let $=k?Object.keys(k.held).filter(bt=>k.held[bt]).join(" "):"",Et=s.padStatus(),wt=k&&Et!=="none"&&Et!=="unrecognised controller"?`Gamepad: ${Et}
  move ${ft(k.moveX)}, ${ft(k.moveY)}  look ${ft(k.lookX)}, ${ft(k.lookY)}
  held: ${$||"nothing"}`:`Gamepad: ${Et}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${to[_]}   camera: ${p?"game":"orbit"}   outlines: ${g?"on":"off"}`,`${Math.round(H)} fps   ${ft(q)} ms   scale ${e.scale()}`,`${G} draw calls   ${z} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${k?Math.round(k.lookDX):0}, ${k?Math.round(k.lookDY):0}`,wt].join(`
`)}let zt=cl({step(){},render($,Et){let wt=Math.min(Et,Ky);k=s.poll(),gt(k),s.isLocked()&&!p&&P(k.lookDX,k.lookDY,.003),p||P(k.lookX*600*wt,k.lookY*600*wt,.004),l.update(performance.now()/1e3),c.update(wt);for(let bt of h)bt.anim.update(wt),bt.rig.update(wt);Y(),i.render(o,a),G=i.info.render.calls,z=i.info.render.triangles,O++,it+=Et,it>=1&&(H=O/it,q=it/O*1e3,O=0,it=0),ct+=Et,ct>=.1&&(ct=0,It()),e.frameDone(Et*1e3)}});Y(),i.render(o,a),G=i.info.render.calls,z=i.info.render.triangles,It(),zt.start()}function Wf(){let n=!1,t=0,e=.18;return{update(i,s,r,o){return e=o,n?(t+=r,i?!1:(n=!1,t<=o)):s?i?(n=!0,t=r,!1):!0:!1},holding(){return n&&t>e},reset(){n=!1,t=0}}}function Ne(n,t,e="wall"){return Object.freeze({min:Object.freeze([...n]),max:Object.freeze([...t]),kind:e})}var kh=1e-9;function Xf(n,t,e,i,s){let r=[t[0],t[1],t[2]],o=t[1]+.05,a=t[1]+s,l=n.filter(g=>g.max[1]>o&&g.min[1]<a),c=Math.hypot(e[0],e[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=e[0]/h,u=e[2]/h,f=!1,m=0,_=0;for(let g=0;g<h;g++){let p=r[0],v=r[2];r[0]+=d,r[2]+=u;let w=!1;for(let y=0;y<5;y++){let S=null,E=kh;for(let x of l){let M=Math.max(x.min[0],Math.min(r[0],x.max[0])),R=Math.max(x.min[2],Math.min(r[2],x.max[2])),C=r[0]-M,L=r[2]-R,F=Math.hypot(C,L),V,P,H;if(F>kh){if(F>=i)continue;V=i-F,P=C/F,H=L/F}else{let q=[[r[0]-x.min[0],-1,0],[x.max[0]-r[0],1,0],[r[2]-x.min[2],0,-1],[x.max[2]-r[2],0,1]],O=q[0];for(let it of q)it[0]<O[0]&&(O=it);V=O[0]+i,P=O[1],H=O[2]}V>E&&(E=V,S=[P,H])}if(!S){w=!0;break}if(y===4)break;r[0]+=S[0]*E,r[2]+=S[1]*E,f=!0,m=S[0],_=S[1]}w||(r[0]=p,r[2]=v,f=!0)}return f||(r[0]=t[0]+e[0],r[2]=t[2]+e[2]),{pos:r,hit:f,normal:[m,0,_]}}function us(n,t,e,i){let s=1,r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]];for(let o of n){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<kh)(t[h]<d||t[h]>u)&&(c=!1);else{let f=(d-t[h])/r[h],m=(u-t[h])/r[h];if(f>m){let _=f;f=m,m=_}f>a&&(a=f),m<l&&(l=m),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function Yf(n,t,e=0){for(let i of n)if(t[0]>=i.min[0]-e&&t[0]<=i.max[0]+e&&t[1]>=i.min[1]-e&&t[1]<=i.max[1]+e&&t[2]>=i.min[2]-e&&t[2]<=i.max[2]+e)return!0;return!1}var zh=["fov","right","up","back"],qf=Math.PI*2;function $f(n,t,e={}){let i=t&&t!=="normal"&&n[t]&&typeof n[t]=="object"?n[t]:null;for(let s of zh)e[s]=i&&i[s]!==void 0?i[s]:n[s];return e}function Zf(n,t){let e=t&&t!=="normal"?n[t]:null;return e&&typeof e=="object"&&e.shakeWeight>0?e.shakeWeight:0}function Jf({tuning:n=ge.camera,look:t=ge.look}={}){let e={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],o={},a=[0,0,0],l=[0,0,0],c=[0,0,0],h=[0,0,0],d=[0,0,1],u={pos:h,dir:d,fov:70},f=1,m=0,_=!1;return{yaw:0,pitch:0,look(p,v,w,y,S,E){let x=E?t.aimScale:1,M=t.invertY?-1:1;this.yaw-=p*t.mouse*x,this.pitch-=v*t.mouse*x*M;let R=t.pad;w&&(this.yaw-=Math.sign(w)*Math.abs(w)**R.expo*R.yawRate*x*S),y&&(this.pitch-=Math.sign(y)*Math.abs(y)**R.expo*R.pitchRate*x*S*M),this.pitch<n.pitchMin&&(this.pitch=n.pitchMin),this.pitch>n.pitchMax&&(this.pitch=n.pitchMax)},snap(p,v,w="normal",y=1){v!==void 0&&(this.yaw=v),$f(n,w,o);for(let S of zh)e[S].x=o[S],e[S].v=0;i.x=y,i.v=0,s.x=Zf(n,w),s.v=0;for(let S=0;S<3;S++)r[S].x=p[S],r[S].v=0;f=1,_=!0},update(p,{target:v,mode:w="normal",side:y=1},S){_||this.snap(v,this.yaw,w,y),p>0||(p=0),m+=p,$f(n,w,o);for(let z of zh)Dn(e[z],o[z],n.blendHalfLife,p);Dn(s,Zf(n,w),n.blendHalfLife,p),Dn(i,y,n.sideHalfLife,p);for(let z=0;z<3;z++)Dn(r[z],v[z],n.followHalfLife,p);let E=this.yaw,x=this.pitch,M=Math.sin(E),R=Math.cos(E),C=Math.sin(x),L=Math.cos(x),F=n.probeRadius,V=e.back.x;a[0]=r[0].x,a[1]=r[1].x+e.up.x,a[2]=r[2].x;let P=e.right.x*i.x;l[0]=a[0]-R*P,l[1]=a[1],l[2]=a[2]+M*P;let H=us(S,a,l,F);for(let z=0;z<3;z++)l[z]=a[z]+(l[z]-a[z])*H;d[0]=M*L,d[1]=C,d[2]=R*L;for(let z=0;z<3;z++)c[z]=l[z]-d[z]*V;let q=us(S,l,c,F),O=V>1e-6?Math.max(n.minBack/V,q):1;O>1&&(O=1),O<f?f=O:f+=(O-f)*(n.wallReturnHalfLife>0?1-Math.pow(2,-p/n.wallReturnHalfLife):1);for(let z=0;z<3;z++)h[z]=l[z]-d[z]*V*f;let it=us(S,a,h,F);if(it<1)for(let z=0;z<3;z++)h[z]=a[z]+(h[z]-a[z])*it;let G=n.shake;if(G&&G.amp&&s.x>0){let z=G.amp*(s.x>1?1:s.x),k=Math.sin(qf*G.hz*m)*z,ct=Math.sin(qf*G.hz*1.3*m+1)*z,gt=-R,Y=M;h[0]+=gt*k-Y*d[1]*ct,h[1]+=(Y*d[0]-gt*d[2])*ct,h[2]+=Y*k+gt*d[1]*ct}return u.fov=e.fov.x,u}}}var jf=n=>(n&&typeof n=="object"&&!Object.isFrozen(n)&&(Object.freeze(n),Object.values(n).forEach(jf)),n),Pi=.3,eM=[Ne([-12,-1,-12],[12,0,12],"floor"),Ne([-12-Pi,0,-12-Pi],[12+Pi,4,-12]),Ne([-12-Pi,0,12],[12+Pi,4,12+Pi]),Ne([-12-Pi,0,-12],[-12,4,12]),Ne([12,0,-12],[12+Pi,4,12]),Ne([5,0,-9],[5.3,4,-3]),Ne([6.7,0,-9],[7,4,-3]),Ne([-11,0,-7.3],[-6,3,-7]),Ne([-6.3,0,-11],[-6,3,-7]),Ne([-4,0,-3],[-2,1,-2.4],"low"),Ne([3,0,3],[3.6,1,5],"low"),Ne([-5,0,3],[-3.8,2.2,3.6],"tall"),Ne([1,0,-6],[1.6,2.2,-4],"tall"),Ne([-9.4,0,.6],[-8.6,4,1.4],"pillar"),Ne([8.6,0,3.6],[9.4,4,4.4],"pillar"),Ne([-9,0,6.5],[-6,1,7.1],"low"),Ne([-4,0,6.5],[-1,1,7.1],"low"),Ne([6,0,6],[10,2.2,6.6],"tall"),Ne([-12,0,-1],[-10,1,-.4],"low")],Qf=[];for(let n=0;n<=12;n++)Qf.push({min:[-10+n-.05,0,10],max:[-10+n+.05,.02,11]});var eo=jf({boxes:eM,marks:Qf,coverExclude:[],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI}}}),Kf={wall:xt.lilac,low:xt.teal,tall:xt.hotPink,pillar:xt.cream};function Hh(n){let t=n.map(e=>{let i=new rn(e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]);return i.translate((e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,(e.min[2]+e.max[2])/2),i});return bi(t,!1)}var Ii=.03,Li=.3,Di=.12,Nl=2;function nM(n=eo){let t=n.boxes.find(c=>c.kind==="floor");if(!t)return[];let[e,,i]=t.min,[s,,r]=t.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([e,0,i],[s,Li,i+Ii]),l([e,0,r-Ii],[s,Li,r]),l([e,0,i],[e+Ii,Li,r]),l([s-Ii,0,i],[s,Li,r]);for(let c=e+Nl;c<s-.5;c+=Nl)l([c-Di/2,Li,i],[c+Di/2,o,i+Ii]),l([c-Di/2,Li,r-Ii],[c+Di/2,o,r]);for(let c=i+Nl;c<r-.5;c+=Nl)l([e,Li,c-Di/2],[e+Ii,o,c+Di/2]),l([s-Ii,Li,c-Di/2],[s,o,c+Di/2]);return a}function tp(n=eo){let t=new Ae;t.add(pl({w:24,d:24}));for(let i of Object.keys(Kf)){let s=n.boxes.filter(o=>o.kind===i);if(!s.length)continue;let r=new xe(Ws(Hh(s)),pn({color:Kf[i]}));r.name=`grey-${i}`,Hn(r),t.add(r)}let e=nM(n);if(e.length){let i=new xe(Hh(e),pn({color:xt.shadowTint}));i.name="grey-wall-trim",t.add(i)}if(n.marks.length){let i=new xe(Hh(n.marks),pn({color:xt.hotPink}));i.name="grey-marks",t.add(i)}return{group:t,boxes:n.boxes,update(i){}}}var Ni=class n{constructor(t,e,i,s,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Gh=class extends Ni{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Vh(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}var iM={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Vh,toHexString:Vh},io={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},sM={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,t,e=1){let i=io.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([n,t,e],i=1){i=255/i;let s=n*i<<16^t*i<<8^e*i<<0;return io.toHexString(s)}},rM={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){let i=io.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:n,g:t,b:e},i=1){i=255/i;let s=n*i<<16^t*i<<8^e*i<<0;return io.toHexString(s)}},oM=[iM,io,sM,rM];function aM(n){return oM.find(t=>t.match(n))}var Wh=class extends Ni{constructor(t,e,i,s){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=aM(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Vh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},no=class extends Ni{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Xh=class extends Ni{constructor(t,e,i,s,r,o){super(t,e,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))},o=!1,a,l,c,h,d,u=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=v=>{if(o){let w=v.clientX-a,y=v.clientY-l;Math.abs(y)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&_()}if(!o){let w=v.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let t=(p,v,w,y,S)=>(p-v)/(w-v)*(S-y)+y,e=p=>{let v=this.$slider.getBoundingClientRect(),w=t(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(w)},i=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(o){let v=p.touches[0].clientX-a,w=p.touches[0].clientY-l;Math.abs(v)>Math.abs(w)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),e(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),m=400,_,g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();let w=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Yh=class extends Ni{constructor(t,e,i,s){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{let i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}},qh=class extends Ni{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},lM=`.lil-gui {
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
}`;function cM(n){let t=document.createElement("style");t.innerHTML=n;let e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}var ep=!1,Ul=class n{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!ep&&a&&(cM(lM),ep=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,i,s,r){if(Object(i)===i)return new Yh(this,t,e,i);let o=t[e];switch(typeof o){case"number":return new Xh(this,t,e,i,s,r);case"boolean":return new Gh(this,t,e);case"string":return new qh(this,t,e);case"function":return new no(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new Wh(this,t,e,i)}addFolder(t){let e=new n({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof no||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof no)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};var Nt=(n,t,e,i)=>({path:n,min:t,max:e,step:i}),so=Object.freeze([Nt("move.jog",1,10,.1),Nt("move.aimWalk",.5,6,.1),Nt("move.sprint",2,14,.1),Nt("move.accelTime",.01,.6,.01),Nt("move.stopTime",.01,.6,.01),Nt("move.turnRate",1,40,.5),Nt("move.aimTurnRate",1,40,.5),Nt("move.sprintTurnRate",.2,20,.1),Nt("move.rollDistance",1,12,.1),Nt("move.rollTime",.2,1.5,.01),Nt("move.rollEase",1,4,.05),Nt("move.rollBuffer",0,.5,.01),Nt("move.tapMax",.05,.5,.01),Nt("move.stickSprintMin",0,1,.05),Nt("move.faceMinSpeed",0,2,.05),Nt("move.sprintHeadingMinSpeed",0,3,.05),Nt("move.runClipMinSpeed",0,2,.05),Nt("move.runRateMin",.1,2,.05),Nt("move.runRateMax",.5,4,.05),Nt("move.sprintRateMin",.1,2,.05),Nt("move.sprintRateMax",.5,4,.05),Nt("camera.fov",40,110,1),Nt("camera.right",-1.5,1.5,.01),Nt("camera.up",.5,3,.01),Nt("camera.back",.5,6,.05),Nt("camera.aim.fov",20,90,1),Nt("camera.aim.back",.3,5,.05),Nt("camera.sprint.fov",50,120,1),Nt("camera.sprint.up",.3,3,.01),Nt("camera.sprint.back",.5,6,.05),Nt("camera.sprint.shakeWeight",0,3,.05),Nt("camera.blendHalfLife",0,.5,.005),Nt("camera.followHalfLife",0,.5,.005),Nt("camera.sideHalfLife",0,.6,.005),Nt("camera.shake.amp",0,.15,.001),Nt("camera.shake.hz",1,30,.5),Nt("camera.probeRadius",.05,.6,.01),Nt("camera.minBack",0,2,.01),Nt("camera.wallReturnHalfLife",0,1,.01),Nt("camera.pitchMin",-1.5,0,.01),Nt("camera.pitchMax",0,1.5,.01),Nt("look.mouse",5e-4,.008,1e-4),Nt("look.pad.yawRate",.5,10,.1),Nt("look.pad.pitchRate",.5,10,.1),Nt("look.pad.expo",1,3,.05),Nt("look.aimScale",.1,1.5,.01),{path:"look.invertY"},Nt("cover.grabRange",0,5,.05),Nt("cover.grabAngle",0,180,1),Nt("cover.grabViewAngle",0,180,1),Nt("cover.grabSlack",0,5,.05),Nt("cover.grabMinTilt",0,1,.05),Nt("cover.gap",0,5,.01),Nt("cover.endInset",0,5,.01),Nt("cover.minLength",0,5,.05),Nt("cover.slideSpeed",0,30,.5),Nt("cover.slideMinTime",0,2,.01),Nt("cover.slideMaxTime",0,2,.01),Nt("cover.slideTurnRate",1,60,.5),Nt("cover.moveSpeed",0,30,.1),Nt("cover.alongDeadzone",0,1,.05),Nt("cover.leaveTilt",0,1,.05),Nt("cover.leaveAngle",0,180,1),Nt("cover.endLeaveTime",0,2,.01),Nt("cover.cornerZone",0,5,.05),Nt("cover.popTime",0,2,.01),Nt("cover.popShift",0,5,.05),Nt("cover.pushAngle",0,180,1),Nt("cover.vaultTime",0,2,.01),Nt("cover.vaultMaxDepth",0,5,.05),Nt("cover.vaultHop",0,5,.05),Nt("cover.vaultExitSpeed",0,30,.1),Nt("cover.swapRange",0,5,.05),Nt("cover.swapSpeed",0,30,.5),Nt("cover.swapAngle",0,180,1),Nt("cover.swapMaxOffset",0,5,.05),Nt("cover.slamSquash",0,1,.01),Nt("cover.slamSquashTime",0,2,.01),Nt("cover.thudVolume",0,1,.05)]),hM=new Map(so.map(n=>[n.path,n])),ro=structuredClone(ge);function ds(n,t){let e=n;for(let i of t.split(".")){if(e===null||typeof e!="object")return;e=e[i]}return e}function Zh(n,t,e){let i=t.split("."),s=n;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=e,!0}function Jh(n=ge,t=ro){let e={};for(let i of so){let s=ds(n,i.path);s!==ds(t,i.path)&&(e[i.path]=s)}return e}function np(n,t){if(t===null||typeof t!="object"||Array.isArray(t))return 0;let e=0;for(let i of Object.keys(t)){let s=hM.get(i);if(!s)continue;let r=t[i],o=ds(ro,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||Zh(n,i,r)&&e++)}return e}function $h(n,t){if(n===null||typeof n!="object")return JSON.stringify(n);if(Array.isArray(n))return`[${n.map(s=>$h(s,t)).join(", ")}]`;let e="  ".repeat(t+1);return`{
${Object.keys(n).map(s=>`${e}${s}: ${$h(n[s],t+1)},`).join(`
`)}
${"  ".repeat(t)}}`}function ip(n=ge){return["camera","cover","look","move"].map(t=>`  ${t}: ${$h(n[t],1)},`).join(`
`)}var Kh="cr-tuning",uM={move:"Move",camera:"Camera",look:"Look",cover:"Cover",aim:"Aim",sprint:"Sprint",shake:"Shake",pad:"Pad",wall:"Wall"},dM=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function sp(n){let t=n.split("."),e=t.slice(0,-1);return e.length===1&&e[0]==="camera"&&dM.has(t[1])&&e.push("wall"),e}function fM(){try{return window.localStorage}catch{return null}}function rp({storage:n=fM()}={}){let t=()=>{try{return n?n.getItem(Kh):null}catch{return null}},e=_=>{try{n&&(_===null?n.removeItem(Kh):n.setItem(Kh,_))}catch{}};try{let _=t();_&&np(ge,JSON.parse(_))}catch{}let i=new Ul({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let _=document.activeElement;_&&_!==document.body&&s.contains(_)&&_.blur&&_.blur()}s.addEventListener("click",_=>{let g=_.target;g&&g.closest&&g.closest(".lil-title")&&g.blur!==void 0&&r()});let o=new Map;function a(_){let g=i,p="";for(let v of _){if(p+=`.${v}`,!o.has(p)){let w=g.addFolder(uM[v]||v);w.close(),o.set(p,w)}g=o.get(p)}return g}function l(){let _=Jh();e(Object.keys(_).length?JSON.stringify(_):null)}for(let _ of so){let g=_.path.split("."),p=g[g.length-1],v=ds(ge,g.slice(0,-1).join(".")),w=typeof ds(ro,_.path)=="boolean"?a(sp(_.path)).add(v,p):a(sp(_.path)).add(v,p,_.min,_.max,_.step);w.onChange(l),w.onFinishChange(r)}let c=null;function h(_){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let g=document.createElement("div");g.textContent="Press Cmd+C to copy",g.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=g,s.appendChild(g),s.appendChild(c)}c.value=_,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(_){c&&(c.hidden=!0,c.note.hidden=!0);let g=null;try{g=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(_):null}catch{g=null}if(!g){h(_);return}g.catch(()=>h(_))}let u={copyChanges(){r(),d(JSON.stringify(Jh(),null,2))},copyForFile(){r(),d(ip())},resetAll(){r();for(let _ of so)Zh(ge,_.path,ds(ro,_.path));e(null),i.controllersRecursive().forEach(_=>_.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function m(_){f=_,s.style.display=_?"":"none"}return m(!1),{toggle(){m(!f)},isOpen:()=>f}}var op=Math.PI*2,Zs=n=>n-op*Math.round(n/op),oo=(n,t)=>Math.atan2(n,t);function Fl(n){return Math.min(1,Math.hypot(n.moveX,n.moveY))}function Ui(n,t){let e=Math.sin(n.camYaw),i=Math.cos(n.camYaw),s=-n.moveY*e-n.moveX*i,r=-n.moveY*i+n.moveX*e,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),t[0]=s,t[1]=r,Math.min(1,o)}function Fi(n,t,e){let i=Zs(t-n);return n+Math.max(-e,Math.min(e,i))}var lp=1e-9,jh=Math.PI/180,pM=.05;function Js(n,t,e=[0,0]){return e[0]=n.a[0]+n.tangent[0]*t,e[1]=n.a[1]+n.tangent[1]*t,e}function Qh(n,t,e=ge.cover){let i=t<=e.cornerZone,s=n.length-t<=e.cornerZone;return i&&s?t<=n.length-t?-1:1:i?-1:s?1:0}function Ol(n,t){return t<0?n.openA:n.openB}var ap=.9,cp=(n,t,e,i)=>us(n,[t[0],ap,t[1]],[e[0],ap,e[1]],.9*i)===1;function hp(n,t,e,i,s,r,o){let a=Math.cos(r.grabAngle*jh),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*jh,d=null;for(let u of n){let f=(e[0]-u.a[0])*u.normal[0]+(e[2]-u.a[1])*u.normal[1],m=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||m<a||m<=lp)continue;let _=Math.max(f,0)/m,g=(e[0]+i[0]*_-u.a[0])*u.tangent[0]+(e[2]+i[1]*_-u.a[1])*u.tangent[1];if(g<-r.grabSlack||g>u.length+r.grabSlack)continue;let p=Math.max(0,Math.min(u.length,g)),v=Js(u,p),w=v[0]-e[0],y=v[1]-e[2],S=Math.hypot(w,y);if(!(S>r.grabRange||d&&S>=d.dist)){if(S>.3){let E=(w*l+y*c)/S;if(Math.acos(Math.max(-1,Math.min(1,E)))>h)continue}cp(t,[e[0],e[2]],v,o)&&(d={edge:u,t:p,point:v,dist:S})}}return d}function up(n,t,e,i,s,r,o){if(Qh(e,i,r)!==s||!Ol(e,s))return null;let a=Js(e,i),l=Math.cos(r.swapAngle*jh),c=null;for(let h of n){if(h===e||h.normal[0]*e.normal[0]+h.normal[1]*e.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,m=Js(h,f),_=m[0]-a[0],g=m[1]-a[1],p=Math.hypot(_,g);(_*e.tangent[0]+g*e.tangent[1])*s<=0||Math.abs(_*e.normal[0]+g*e.normal[1])>r.swapMaxOffset||p>r.swapRange||c&&p>=c.dist||cp(t,a,m,o)&&(c={edge:h,t:f,point:m,dist:p})}return c}function mM(n,t,e,i){let s=t[1]+pM,r=t[1]+i;for(let o of n){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(t[0],o.max[0])),l=Math.max(o.min[2],Math.min(t[2],o.max[2]));if(Math.hypot(t[0]-a,t[2]-l)<e-lp)return!1}return!0}function dp(n,t,e,i,s,r){if(n.kind!=="low"||n.depth>i.vaultMaxDepth)return null;let o=Js(n,t),a=n.depth+2*(s+i.gap),l=[o[0]-n.normal[0]*a,0,o[1]-n.normal[1]*a];if(!mM(e,l,s,r))return null;let c=e.filter((h,d)=>d!==n.boxIndex);return us(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var gM=["coverSlide","cover","vault","coverSwap"],fp=Math.PI/180,on=[0,0],xM=[0,0],Oi=[0,0,0],gp=.001,_M=2,xp=(n,t,e)=>Math.max(t,Math.min(e,n));function vM(n,t,e){if(Fl(t)>=n.coverTuning.grabMinTilt){Ui(t,on);let i=Math.hypot(on[0],on[1]);e[0]=on[0]/i,e[1]=on[1]/i}else e[0]=Math.sin(n.facing),e[1]=Math.cos(n.facing);return e}var _p={name:"cover",state:"coverSlide",when(n,t){return n.coverTarget=hp(n.coverEdges,n.boxes,n.pos,vM(n,t,xM),t.camYaw,n.coverTuning,n.tuning.radius),n.coverTarget!==null}};function pp(n,t,e,i){let s=n.coverTarget;n.coverTarget=null;let r=n.scratch;r.edge=s.edge,r.t=s.t,r.from=[n.pos[0],n.pos[1],n.pos[2]],r.to=[s.point[0],n.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(gp,xp(o/Math.max(t,1e-6),e,i)),n.aiming=!1}function mp(n,t,e,i){let s=n.scratch,r=Math.min(1,n.stateTime/s.dur+1e-9);return Oi[0]=s.from[0]+(s.to[0]-s.from[0])*r-n.pos[0],Oi[1]=0,Oi[2]=s.from[2]+(s.to[2]-s.from[2])*r-n.pos[2],n.moveBy(Oi,t,!1),i!==null&&(n.facing=Fi(n.facing,i,e*t)),n.heading=n.facing,r<1?null:Math.hypot(n.pos[0]-s.to[0],n.pos[2]-s.to[2])>.1?"move":(n.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0},n.vel[0]=n.vel[1]=n.vel[2]=0,n.slams++,"cover")}var yM={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(n){let t=n.coverTuning;pp(n,t.slideSpeed,t.slideMinTime,t.slideMaxTime)},update(n,t,e){let i=n.scratch.edge;return mp(n,e,n.coverTuning.slideTurnRate,oo(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(n){let t=n.coverTuning;n.cover=null,pp(n,t.swapSpeed,0,_M);let e=n.scratch;n.heading=oo(e.to[0]-e.from[0],e.to[2]-e.from[2]),n.facing=n.facing+Zs(n.heading-n.facing)},update(n,t,e){return mp(n,e,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(n){let t=n.coverTarget;n.coverTarget=null;let e=n.scratch,i=t.edge;n.cover=null,n.aiming=!1,e.edge=i,e.landing=t.landing,e.from=[n.pos[0],n.pos[2]],n.heading=oo(-i.normal[0],-i.normal[1]),n.facing=n.facing+Zs(n.heading-n.facing)},update(n,t,e){let i=n.scratch,s=n.coverTuning,r=Math.min(1,n.stateTime/Math.max(s.vaultTime,gp)+1e-9);return n.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,n.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(n.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,n.vel[1]=0,n.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(n){n.cover=null,n.aiming=!1},update(n,t,e){let i=n.coverTuning,s=n.cover,r=s.edge,o=n.tuning,a=Ui(t,on),l=Math.hypot(on[0],on[1]),c=l>0?on[0]/l:0,h=l>0?on[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,m=(E,x)=>(n.vel[0]=E*o.jog,n.vel[1]=0,n.vel[2]=x*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*fp))return m(on[0],on[1]);if(t.tap&&f){let E=Math.cos(i.pushAngle*fp);if(-(c*d+h*u)>=E){let M=dp(r,s.t,n.boxes,i,o.radius,o.height);if(M)return n.coverTarget={landing:M,edge:r},"vault"}let x=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(x)>=E){let M=up(n.coverEdges,n.boxes,r,s.t,x>0?1:-1,i,o.radius);if(M)return n.coverTarget=M,"coverSwap"}}let _=Qh(r,s.t,i),g=r.kind==="low"||_!==0&&Ol(r,_),p=t.aim&&g?1:0,v=i.popTime>0?e/i.popTime:1;s.pop=s.pop<p?Math.min(p,s.pop+v):Math.max(p,s.pop-v),s.popEnd=s.pop>0&&r.kind!=="low"?_:0,s.exposed=s.pop>=.5,n.aiming=s.exposed;let w=!1;if(s.pop===0){let E=on[0]*r.tangent[0]+on[1]*r.tangent[1];if(Math.abs(E)>=i.alongDeadzone){let x=s.t+E*i.moveSpeed*e;if(s.t=xp(x,0,r.length),x!==s.t&&Ol(r,E>0?1:-1)&&(w=!0,s.endPush+=e,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(E),r.tangent[1]*Math.sign(E))}}w||(s.endPush=0);let y=Js(r,s.t),S=s.popEnd*i.popShift*s.pop;return Oi[0]=y[0]+r.tangent[0]*S-n.pos[0],Oi[1]=0,Oi[2]=y[1]+r.tangent[1]*S-n.pos[2],n.moveBy(Oi,e,!1),s.pop>0?n.facing=Fi(n.facing,t.camYaw,o.aimTurnRate*e):n.facing=Fi(n.facing,oo(-d,-u),o.turnRate*e),n.heading=n.facing,null}}},vp=Object.fromEntries(gM.map(n=>[n,yM[n]]));var MM=(n,t,e)=>t*(1-(1-n)**e),an=[0,0],Bl=[0,0,0];function yp(n,t,e,i,s,r){let o=n.vel,a=(Math.hypot(t,e)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=t-o[0],c=e-o[2],h=Math.hypot(l,c);h<=a?(o[0]=t,o[2]=e):(o[0]+=l/h*a,o[2]+=c/h*a)}function tu(n,t,e){return t.sprint&&!t.aim&&Fl(t)>=e.stickSprintMin}var SM={move:{acceptsTap:!0,enter(){},update(n,t,e){let i=n.tuning;if(tu(n,t,i))return"sprint";n.aiming=t.aim;let s=t.aim?i.aimWalk:i.jog;return Ui(t,an),yp(n,an[0]*s,an[1]*s,s,e,i),t.aim?n.facing=Fi(n.facing,t.camYaw,i.aimTurnRate*e):n.speed()>i.faceMinSpeed&&(n.facing=Fi(n.facing,Math.atan2(n.vel[0],n.vel[2]),i.turnRate*e)),n.heading=n.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(n,t){n.aiming=!1,n.speed()>n.tuning.sprintHeadingMinSpeed?n.heading=Math.atan2(n.vel[0],n.vel[2]):Ui(t,an)>.01?n.heading=Math.atan2(an[0],an[1]):n.heading=n.facing},update(n,t,e){let i=n.tuning;return tu(n,t,i)?(Ui(t,an),n.heading=Fi(n.heading,Math.atan2(an[0],an[1]),i.sprintTurnRate*e),yp(n,Math.sin(n.heading)*i.sprint,Math.cos(n.heading)*i.sprint,i.sprint,e,i),n.facing=n.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(n,t){n.aiming=!1;let e=n.scratch;if(e.dir=[Math.sin(n.facing),Math.cos(n.facing)],Ui(t,an)>.01){let i=Math.hypot(an[0],an[1]);e.dir[0]=an[0]/i,e.dir[1]=an[1]/i}e.prevOff=0,e.queued=!1,n.heading=Math.atan2(e.dir[0],e.dir[1]),n.facing=n.facing+Zs(n.heading-n.facing)},update(n,t,e){let i=n.tuning,s=n.scratch;t.tap&&n.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=n.stateTime>=i.rollTime-1e-9,o=MM(r?1:n.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,Bl[0]=s.dir[0]*a,Bl[1]=0,Bl[2]=s.dir[1]*a,n.moveBy(Bl,e,!1),r?s.queued?"roll":tu(n,t,i)?"sprint":(n.vel[0]=n.vel[1]=n.vel[2]=0,"move"):null},exit(){}},...vp},bM=[_p,{name:"roll",when:()=>!0,state:"roll"}];function Mp({boxes:n,spawn:t,tuning:e=ge.move,coverTuning:i=ge.cover,coverEdges:s=[],states:r=SM,contextActions:o=bM,onState:a}){let l={state:"move",stateTime:0,entries:0,pos:[t[0],t[1],t[2]],prevPos:[t[0],t[1],t[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,heading:0,tuning:e,boxes:n,coverTuning:i,coverEdges:s,onState:a,cover:null,coverTarget:null,slams:0,scratch:{},speed(){return Math.hypot(l.vel[0],l.vel[2])},moveBy(c,h,d=!0){let u=l.pos,f=Xf(n,u,c,e.radius,e.height);if(!d)h>0&&(l.vel[0]=(f.pos[0]-u[0])/h,l.vel[2]=(f.pos[2]-u[2])/h);else if(f.hit)if(h>0)l.vel[0]=(f.pos[0]-u[0])/h,l.vel[2]=(f.pos[2]-u[2])/h;else{let m=f.normal,_=l.vel[0]*m[0]+l.vel[1]*m[1]+l.vel[2]*m[2];_<0&&(l.vel[0]-=m[0]*_,l.vel[1]-=m[1]*_,l.vel[2]-=m[2]*_)}u[0]=f.pos[0],u[1]=f.pos[1],u[2]=f.pos[2]},go(c,h){let d=l.state;r[d].exit?.(l),l.state=c,l.stateTime=0,l.entries++,l.scratch={},r[c].enter(l,h),l.onState?.(c,d,h)},place(c,h){r[l.state].exit?.(l),l.state="move",l.stateTime=0,l.cover=null,l.coverTarget=null,l.scratch={},l.pos[0]=l.prevPos[0]=c[0],l.pos[1]=l.prevPos[1]=c[1],l.pos[2]=l.prevPos[2]=c[2],l.vel[0]=l.vel[1]=l.vel[2]=0,h!==void 0?l.facing=l.prevFacing=l.heading=h:l.prevFacing=l.facing},update(c,h){if(l.prevPos[0]=l.pos[0],l.prevPos[1]=l.pos[1],l.prevPos[2]=l.pos[2],l.prevFacing=l.facing,c.tap&&r[l.state].acceptsTap){for(let u of o)if(u.when(l,c)){l.go(u.state,c);break}}l.stateTime+=h;let d=r[l.state].update(l,c,h);r[l.state].selfMoves||l.moveBy([l.vel[0]*h,0,l.vel[2]*h],h,!0),d&&l.go(d,c)}};return r[l.state].enter(l,{moveX:0,moveY:0,camYaw:0}),l}var Sp="#f3efe6";function bp(n){for(let t of Object.values(n))t&&typeof t=="object"&&bp(t);return Object.freeze(n)}var wp=bp({...structuredClone(Ci),name:"doc-placeholder",colors:{...Ci.colors,hair:xt.teal,shirt:Sp,collar:Sp},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Ci.face,brow:"uni",fixedSmile:0}});var kl=Math.PI*2,Ep=(n,t,e)=>n<t?t:n>e?e:n,wM=n=>n-kl*Math.round(n/kl),Tp=.5;function EM(n,t=n.tuning||ge.move){let e=n.state,i=n.speed();if(e==="roll")return{name:"roll",rate:Je.roll.duration/t.rollTime};if(e==="sprint")return{name:"sprint",rate:Ep(i/Dh,t.sprintRateMin,t.sprintRateMax)};if(e==="move"){if(i>t.runClipMinSpeed)return{name:"run",rate:Ep(i/Dh,t.runRateMin,t.runRateMax)};if(n.aiming)return{name:"aim",rate:1}}return{name:"idle",rate:1}}function TM(n){if(n<=.08)return 0;if(n>=.9)return kl;let t=(n-.08)/.82;return kl*t*t*(3-2*t)}function Ap(n,t=wp){let e=Il(t),i=Ll(e),s=new Ae;s.name="player";let r=new Ae;r.position.y=Tp,e.root.position.y=-Tp,r.add(e.root),s.add(r),s.add(e.shadow);let o="",a=-1;function l(h,d){let u=n.pos,f=n.prevPos;s.position.set(f[0]+(u[0]-f[0])*h,f[1]+(u[1]-f[1])*h,f[2]+(u[2]-f[2])*h),s.rotation.y=n.prevFacing+wM(n.facing-n.prevFacing)*h;let m=EM(n);(m.name!==o||n.entries!==a)&&(i.play(m.name,m.name==="roll"?{fade:.05}:void 0),o=m.name,a=n.entries),i.update(d*m.rate),e.update(d),r.rotation.x=n.state==="roll"?TM(n.stateTime/n.tuning.rollTime):0}function c(){e.dispose(),e.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:l,dispose:c,rig:e,anim:i}}var Rp=.05;function AM({locked:n,device:t,panelOpen:e}){return!!(n||t==="pad"||e)}function Cp({canvas:n,gl:t,params:e}){let i=ul(n,t),s=i.renderer,r=hl(n),o=document.getElementById("cr-readout"),a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=rp();l.panelOpen=c.isOpen;let h=new $i,d=new Ve(ge.camera.fov,1,.05,100),u=dl();h.add(u.mesh);let f=tp();h.add(f.group);let m=f.boxes,_=eo.spawn,g=Mp({boxes:m,spawn:_.pos});g.place(_.pos,_.yaw);let p=Ap(g);h.add(p.group);let v=Jf(),w=Wf(),y=[0,0,0];v.snap(_.pos,_.yaw,"normal",1);let S=null,E=!1,x=null,M=!1,R=!1,C=!1,L={cover:!1},F={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1};function V(){let wt=i.resize();d.aspect=wt.aspect,d.updateProjectionMatrix()}V(),window.addEventListener("resize",V),n.addEventListener("click",()=>r.requestLock());let P=()=>w.reset();window.addEventListener("blur",P),document.addEventListener("pointerlockchange",()=>{r.isLocked()||w.reset()}),window.addEventListener("keydown",wt=>{wt.repeat||mh(wt.target)||(wt.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):wt.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function H(){return g.state==="sprint"?"sprint":g.aiming?"aim":"normal"}function q(wt,bt){g.place(wt,bt),v.snap(wt,bt,"normal",1)}let O=0,it=0,G=0,z=0,k=0,ct=0,gt=0,Y=window.__cr;Y.stats=()=>({fps:O,ms:it,calls:k,tris:ct,scale:i.scale(),characters:1}),Y.player=()=>({pos:g.pos.slice(),state:g.state,speed:g.speed(),facing:g.facing,entries:g.entries}),Y.camera=()=>{let wt=$;return{pos:wt.pos.slice(),fov:wt.fov,inside:Yf(m,wt.pos,.1)}},Y.place=wt=>{let bt=wt==="spawn"?_:eo.features[wt];bt&&q(bt.pos,bt.yaw)},Y.drive=wt=>{if(!wt){M?R=!0:x=null;return}x=wt,R=!1,wt.tap&&(M=!0)};function ft(wt){if(x)F.moveX=x.moveX||0,F.moveY=x.moveY||0,F.sprint=!!x.sprint,F.aim=!!x.aim,F.tap=M,M&&(M=!1,R&&(x=null,R=!1));else{let bt=S.held;F.moveX=S.moveX,F.moveY=S.moveY,F.tap=w.update(bt.cover,L.cover,wt,ge.move.tapMax),F.sprint=bt.sprint||w.holding(),F.aim=bt.aim}return L.cover=!1,F.camYaw=v.yaw,F}let It=wt=>wt.toFixed(1);function zt(){let wt=r.padStatus();o.textContent=["MOVEMENT TEST","Mouse + keys: WASD move, mouse look, right mouse aim, Space tap roll / hold sprint, Shift sprint","Gamepad: left stick move, right stick look, left trigger aim, A tap roll / hold sprint","",`${g.state}   ${g.speed().toFixed(2)} m/s`,`${Math.round(O)} fps   ${It(it)} ms   scale ${i.scale()}`,`${k} draw calls   ${ct} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${wt}`,"` tuning panel    ?look look test    H hide panel"].join(`
`)}let $={pos:[0,0,0],fov:70},Et=cl({before(wt){if(S=r.poll(),E=!!x||M||AM({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()}),a.hidden=E,!E){w.reset(),L.cover=!1;return}let qt=Math.min(wt,Rp);C=S.held.aim||x&&x.aim,v.look(S.lookDX,S.lookDY,S.lookX,S.lookY,qt,C),S.pressed.cover&&(L.cover=!0)},step(wt){E&&g.update(ft(wt),wt)},render(wt,bt){let qt=E?Math.min(bt,Rp):0;p.update(wt,qt);let te=g.pos,et=g.prevPos;for(let mt=0;mt<3;mt++)y[mt]=et[mt]+(te[mt]-et[mt])*wt;let ht=v.update(qt,{target:y,mode:H(),side:1},m);$.pos[0]=ht.pos[0],$.pos[1]=ht.pos[1],$.pos[2]=ht.pos[2],$.fov=ht.fov,d.fov!==ht.fov&&(d.fov=ht.fov,d.updateProjectionMatrix()),d.position.set(ht.pos[0],ht.pos[1],ht.pos[2]),d.lookAt(ht.pos[0]+ht.dir[0],ht.pos[1]+ht.dir[1],ht.pos[2]+ht.dir[2]),u.update(performance.now()/1e3),f.update(qt),s.render(h,d),k=s.info.render.calls,ct=s.info.render.triangles,G++,z+=bt,z>=1&&(O=G/z,it=z/G*1e3,G=0,z=0),gt+=bt,gt>=.1&&(gt=0,zt()),i.frameDone(bt*1e3)}});e&&e.has("tune")&&c.toggle(),S=r.poll(),v.update(0,{target:_.pos,mode:"normal",side:1},m),zt(),Et.start()}var RM={webgl:"Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function eu(n,t){window.__cr.error={kind:n,detail:t||""},document.documentElement.dataset.crError=n;let e=document.getElementById("cr-error");e&&(e.textContent="",e.appendChild(document.createTextNode(RM[n])),n==="boot"&&t&&(e.appendChild(document.createElement("br")),e.appendChild(document.createTextNode(t))),e.hidden=!1)}window.addEventListener("error",n=>{window.__cr.error||eu("boot",n.message)});function CM(){let n=document.getElementById("cr-canvas"),t=n.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!t){eu("webgl");return}let e=new URLSearchParams(location.search);e.has("look")?Vf({canvas:n,gl:t}):Cp({canvas:n,gl:t,params:e}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{CM()}catch(n){eu("boot",n&&n.message)}})();

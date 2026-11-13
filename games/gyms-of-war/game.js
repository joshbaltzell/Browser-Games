/* Gyms of War. Built file: edit src/ and run npm run build. */
(()=>{var Og=0,Qf=1,Fg=2;var Dl=1,Ug=2,ra=3,dr=0,Tn=1,Nn=2,eo=0,oa=1,ep=2,tp=3,np=4,Bg=5;var to=100,zg=101,Hg=102,Gg=103,Vg=104,Wg=200,Xg=201,Yg=202,qg=203,ip=204,sp=205,$g=206,Kg=207,Zg=208,jg=209,Jg=210,Qg=211,ev=212,tv=213,nv=214,uh=0,dh=1,fh=2,Wo=3,ph=4,mh=5,gh=6,vh=7,rp=0,iv=1,sv=2,hs=0,op=1,ap=2,lp=3,cp=4,hp=5,up=6,dp=7;var fp=300,no=301,aa=302,Kh=303,Zh=304,xh=1e3,rs=1001,yh=1002,kn=1003,rv=1004;var Nl=1005;var Dn=1006,jh=1007;var Bs=1008;var xi=1009,pp=1010,mp=1011,la=1012,Jh=1013,qi=1014,ki=1015,$i=1016,Qh=1017,eu=1018,io=1020,gp=35902,vp=35899,xp=1021,yp=1022,yi=1023,Fs=1026,zs=1027,tu=1028,nu=1029,fr=1030,iu=1031;var su=1033,Ol=33776,Fl=33777,Ul=33778,Bl=33779,ru=35840,ou=35841,au=35842,lu=35843,cu=36196,hu=37492,uu=37496,du=37488,fu=37489,zl=37490,pu=37491,mu=37808,gu=37809,vu=37810,xu=37811,yu=37812,bu=37813,_u=37814,Mu=37815,wu=37816,Su=37817,Tu=37818,Eu=37819,Au=37820,Ru=37821,Cu=36492,Pu=36494,Iu=36495,Lu=36283,ku=36284,Hl=36285,Du=36286;var Qa=2300,bh=2301,ch=2302,Vf=2303,Wf=2400,Xf=2401,Yf=2402;var ov=3200;var bp=0,av=1,Hs="",xn="srgb",el="srgb-linear",tl="linear",Vt="srgb";var hh=7680;var lv=519,cv=512,hv=513,uv=514,_p=515,dv=516,fv=517,Mp=518,wp=519,Sp=35044,ca=35048;var Tp="300 es",Ii=2e3,nl=2001;function _M(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function MM(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pv(){let t=il("canvas");return t.style.display="block",t}var Qm={},Xo=null;function sl(...t){let e="THREE."+t.shift();Xo?Xo("log",e,...t):console.log(e,...t)}function mv(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ht(...t){t=mv(t);let e="THREE."+t.shift();if(Xo)Xo("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=mv(t);let e="THREE."+t.shift();if(Xo)Xo("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function $a(...t){let e=t.join(" ");e in Qm||(Qm[e]=!0,ht(...t))}function gv(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var vv={[uh]:uh,[fh]:gh,[ph]:ph,[Wo]:mh,[dh]:dh,[gh]:fh,[vh]:vh,[mh]:Wo},os=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eg=1234567,Ka=Math.PI/180,Yo=180/Math.PI;function Gs(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[t&255]+Yn[t>>8&255]+Yn[t>>16&255]+Yn[t>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function At(t,e,n){return Math.max(e,Math.min(n,t))}function Ep(t,e){return(t%e+e)%e}function wM(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function SM(t,e,n){return t!==e?(n-t)/(e-t):0}function Za(t,e,n){return(1-n)*t+n*e}function TM(t,e,n,i){return Za(t,e,1-Math.exp(-n*i))}function EM(t,e=1){return e-Math.abs(Ep(t,e*2)-e)}function AM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function RM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function CM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function PM(t,e){return t+Math.random()*(e-t)}function IM(t){return t*(.5-Math.random())}function LM(t){t!==void 0&&(eg=t);let e=eg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kM(t){return t*Ka}function DM(t){return t*Yo}function NM(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function OM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ap(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function FM(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*m,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*m,a*c);break;case"ZYZ":t.set(l*m,l*f,a*h,a*c);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nu(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rp(t,e){if(e.constructor===Float32Array)return t;let n=Nu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Cp(t,e){if(e.constructor===Float32Array)return t;let n=Nu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var Ou={DEG2RAD:Ka,RAD2DEG:Yo,generateUUID:Gs,clamp:At,euclideanModulo:Ep,mapLinear:wM,inverseLerp:SM,lerp:Za,damp:TM,pingpong:EM,smoothstep:AM,smootherstep:RM,randInt:CM,randFloat:PM,randFloatSpread:IM,seededRandom:LM,degToRad:kM,radToDeg:DM,isPowerOfTwo:NM,ceilPowerOfTwo:OM,floorPowerOfTwo:Ap,setQuaternionFromProperEuler:FM,normalize:Cp,denormalize:Rp},Np=class Np{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Np.prototype.isVector2=!0;var He=Np,ti=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),_=Math.sin(v);p=Math.sin(p*v)/_,a=Math.sin(a*v)/_,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+y*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[n]=a*m+h*d+l*f-c*u,e[n+1]=l*m+h*u+c*d-a*f,e[n+2]=c*m+h*f+a*u-l*d,e[n+3]=h*m-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Op=class Op{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tg.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Op.prototype.isVector3=!0;var G=Op,yf=new G,tg=new ti,Fp=class Fp{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],v=s[1],_=s[4],M=s[7],S=s[2],E=s[5],x=s[8];return r[0]=o*y+a*v+l*S,r[3]=o*g+a*_+l*E,r[6]=o*p+a*M+l*x,r[1]=c*y+h*v+d*S,r[4]=c*g+h*_+d*E,r[7]=c*p+h*M+d*x,r[2]=u*y+f*v+m*S,r[5]=u*g+f*_+m*E,r[8]=u*p+f*M+m*x,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=n*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*n-s*l)*y,e[5]=(s*r-a*n)*y,e[6]=f*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*r)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return $a("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bf.makeScale(e,n)),this}rotate(e){return $a("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bf.makeRotation(-e)),this}translate(e,n){return $a("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fp.prototype.isMatrix3=!0;var mt=Fp,bf=new mt,ng=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){let t={enabled:!0,workingColorSpace:el,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(s.r=Vo(s.r),s.g=Vo(s.g),s.b=Vo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hs?tl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[el]:{primaries:e,whitePoint:i,transfer:tl,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}var Dt=UM();function Os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var To,_h=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{To===void 0&&(To=il("canvas")),To.width=e.width,To.height=e.height;let s=To.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=To}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=il("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Os(n[i]/255)*255):n[i]=Os(n[i]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},BM=0,qo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_f(s[o].image)):r.push(_f(s[o]))}else r=_f(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function _f(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_h.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var zM=0,Mf=new G,ni=class t extends os{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=rs,s=rs,r=Dn,o=Bs,a=yi,l=xi,c=t.DEFAULT_ANISOTROPY,h=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Gs(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=fp;ni.DEFAULT_ANISOTROPY=1;var Up=class Up{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,M=(f+1)/2,S=(p+1)/2,E=(h+u)/4,x=(d+y)/4,b=(m+g)/4;return _>M&&_>S?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=x/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=b/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=b/r),this.set(i,s,r,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this.w=At(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this.w=At(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Up.prototype.isVector4=!0;var fn=Up,Mh=class extends os{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ni({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new qo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Mh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},rl=class extends ni{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wh=class extends ni{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $h=class $h{constructor(e,n,i,s,r,o,a,l,c,h,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,f,m,y,g)}set(e,n,i,s,r,o,a,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $h().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Eo.setFromMatrixColumn(e,0).length(),r=1/Eo.setFromMatrixColumn(e,1).length(),o=1/Eo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,y=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+m*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=m+f*c,n[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;n[0]=u+y*a,n[4]=m*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-m,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;n[0]=u-y*a,n[4]=-o*d,n[8]=m+f*a,n[1]=f+m*a,n[5]=o*h,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,y=a*d;n[0]=l*h,n[4]=m*c-f,n[8]=u*c+y,n[1]=l*d,n[5]=y*c+u,n[9]=f*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,m=a*l,y=a*c;n[0]=l*h,n[4]=y-u*d,n[8]=m*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+m,n[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,f=o*c,m=a*l,y=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+y,n[5]=o*h,n[9]=f*d-m,n[2]=m*d-f,n[6]=a*h,n[10]=y*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,GM)}lookAt(e,n,i){let s=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ir.crossVectors(i,pi),ir.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ir.crossVectors(i,pi)),ir.normalize(),kc.crossVectors(pi,ir),s[0]=ir.x,s[4]=kc.x,s[8]=pi.x,s[1]=ir.y,s[5]=kc.y,s[9]=pi.y,s[2]=ir.z,s[6]=kc.z,s[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],v=i[3],_=i[7],M=i[11],S=i[15],E=s[0],x=s[4],b=s[8],P=s[12],L=s[1],C=s[5],w=s[9],D=s[13],k=s[2],I=s[6],F=s[10],z=s[14],$=s[3],X=s[7],j=s[11],W=s[15];return r[0]=o*E+a*L+l*k+c*$,r[4]=o*x+a*C+l*I+c*X,r[8]=o*b+a*w+l*F+c*j,r[12]=o*P+a*D+l*z+c*W,r[1]=h*E+d*L+u*k+f*$,r[5]=h*x+d*C+u*I+f*X,r[9]=h*b+d*w+u*F+f*j,r[13]=h*P+d*D+u*z+f*W,r[2]=m*E+y*L+g*k+p*$,r[6]=m*x+y*C+g*I+p*X,r[10]=m*b+y*w+g*F+p*j,r[14]=m*P+y*D+g*z+p*W,r[3]=v*E+_*L+M*k+S*$,r[7]=v*x+_*C+M*I+S*X,r[11]=v*b+_*w+M*F+S*j,r[15]=v*P+_*D+M*z+S*W,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15],v=l*f-c*u,_=a*f-c*d,M=a*u-l*d,S=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return n*(y*v-g*_+p*M)-i*(m*v-g*S+p*E)+s*(m*_-y*S+p*x)-r*(m*M-y*E+g*x)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],v=n*a-i*o,_=n*l-s*o,M=n*c-r*o,S=i*l-s*a,E=i*c-r*a,x=s*c-r*l,b=h*y-d*m,P=h*g-u*m,L=h*p-f*m,C=d*g-u*y,w=d*p-f*y,D=u*p-f*g,k=v*D-_*w+M*C+S*L-E*P+x*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/k;return e[0]=(a*D-l*w+c*C)*I,e[1]=(s*w-i*D-r*C)*I,e[2]=(y*x-g*E+p*S)*I,e[3]=(u*E-d*x-f*S)*I,e[4]=(l*L-o*D-c*P)*I,e[5]=(n*D-s*L+r*P)*I,e[6]=(g*M-m*x-p*_)*I,e[7]=(h*x-u*M+f*_)*I,e[8]=(o*w-a*L+c*b)*I,e[9]=(i*L-n*w-r*b)*I,e[10]=(m*E-y*M+p*v)*I,e[11]=(d*M-h*E-f*v)*I,e[12]=(a*P-o*C-l*b)*I,e[13]=(n*C-i*P+s*b)*I,e[14]=(y*_-m*S-g*v)*I,e[15]=(h*S-d*_+u*v)*I,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,y=o*h,g=o*d,p=a*d,v=l*c,_=l*h,M=l*d,S=i.x,E=i.y,x=i.z;return s[0]=(1-(y+p))*S,s[1]=(f+M)*S,s[2]=(m-_)*S,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+_)*x,s[9]=(g-v)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Eo.set(s[0],s[1],s[2]).length(),a=Eo.set(s[4],s[5],s[6]).length(),l=Eo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vi.copy(this);let c=1/o,h=1/a,d=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=d,Vi.elements[9]*=d,Vi.elements[10]*=d,n.setFromRotationMatrix(Vi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Ii,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Ii)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===nl)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ii,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Ii)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===nl)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$h.prototype.isMatrix4=!0;var wt=$h,Eo=new G,Vi=new wt,HM=new G(0,0,0),GM=new G(1,1,1),ir=new G,kc=new G,pi=new G,sg=new wt,rg=new ti,hi=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rg.setFromEuler(this),this.setFromQuaternion(rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var ol=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VM=0,og=new G,Ao=new ti,Ps=new wt,Dc=new G,Fa=new G,WM=new G,XM=new ti,ag=new G(1,0,0),lg=new G(0,1,0),cg=new G(0,0,1),hg={type:"added"},YM={type:"removed"},Ro={type:"childadded",child:null},wf={type:"childremoved",child:null},yn=class t extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new G,n=new hi,i=new ti,s=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new mt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ao.setFromAxisAngle(e,n),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,n){return Ao.setFromAxisAngle(e,n),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(cg,e)}translateOnAxis(e,n){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dc.copy(e):Dc.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(Fa,Dc,this.up):Ps.lookAt(Dc,Fa,this.up),this.quaternion.setFromRotationMatrix(Ps),s&&(Ps.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(Ps),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YM),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new G(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qM={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=n.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var $e=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Dt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Dt.workingColorSpace){if(e=Ep(e,1),n=At(n,0,1),i=At(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Sf(o,r,e+1/3),this.g=Sf(o,r,e),this.b=Sf(o,r,e-1/3)}return Dt.colorSpaceToWorking(this,s),this}setStyle(e,n=xn){function i(r){r!==void 0&&parseFloat(r)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){let i=xv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Dt.workingToColorSpace(qn.copy(this),e),Math.round(At(qn.r*255,0,255))*65536+Math.round(At(qn.g*255,0,255))*256+Math.round(At(qn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(qn.copy(this),n);let i=qn.r,s=qn.g,r=qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=xn){Dt.workingToColorSpace(qn.copy(this),e);let n=qn.r,i=qn.g,s=qn.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Nc);let i=Za(sr.h,Nc.h,n),s=Za(sr.s,Nc.s,n),r=Za(sr.l,Nc.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new $e;$e.NAMES=xv;var Yr=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Wi=new G,Is=new G,Tf=new G,Ls=new G,Co=new G,Po=new G,ug=new G,Ef=new G,Af=new G,Rf=new G,Cf=new fn,Pf=new fn,If=new fn,Ns=class t{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Wi.subVectors(e,n),s.cross(Wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Wi.subVectors(s,n),Is.subVectors(i,n),Tf.subVectors(e,n);let o=Wi.dot(Wi),a=Wi.dot(Is),l=Wi.dot(Tf),c=Is.dot(Is),h=Is.dot(Tf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ls)===null?!1:Ls.x>=0&&Ls.y>=0&&Ls.x+Ls.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ls.x),l.addScaledVector(o,Ls.y),l.addScaledVector(a,Ls.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Cf.setScalar(0),Pf.setScalar(0),If.setScalar(0),Cf.fromBufferAttribute(e,n),Pf.fromBufferAttribute(e,i),If.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cf,r.x),o.addScaledVector(Pf,r.y),o.addScaledVector(If,r.z),o}static isFrontFacing(e,n,i,s){return Wi.subVectors(i,n),Is.subVectors(e,n),Wi.cross(Is).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),Wi.cross(Is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;Co.subVectors(s,i),Po.subVectors(r,i),Ef.subVectors(e,i);let l=Co.dot(Ef),c=Po.dot(Ef);if(l<=0&&c<=0)return n.copy(i);Af.subVectors(e,s);let h=Co.dot(Af),d=Po.dot(Af);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),n.copy(i).addScaledVector(Co,o);Rf.subVectors(e,r);let f=Co.dot(Rf),m=Po.dot(Rf);if(m>=0&&f<=m)return n.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Po,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return ug.subVectors(r,s),a=(d-h)/(d-h+(f-m)),n.copy(s).addScaledVector(ug,a);let p=1/(g+y+u);return o=y*p,a=u*p,n.copy(i).addScaledVector(Co,o).addScaledVector(Po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},as=class{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xi):Xi.fromBufferAttribute(r,o),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oc.copy(i.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Fc.subVectors(this.max,Ua),Io.subVectors(e.a,Ua),Lo.subVectors(e.b,Ua),ko.subVectors(e.c,Ua),rr.subVectors(Lo,Io),or.subVectors(ko,Lo),Hr.subVectors(Io,ko);let n=[0,-rr.z,rr.y,0,-or.z,or.y,0,-Hr.z,Hr.y,rr.z,0,-rr.x,or.z,0,-or.x,Hr.z,0,-Hr.x,-rr.y,rr.x,0,-or.y,or.x,0,-Hr.y,Hr.x,0];return!Lf(n,Io,Lo,ko,Fc)||(n=[1,0,0,0,1,0,0,0,1],!Lf(n,Io,Lo,ko,Fc))?!1:(Uc.crossVectors(rr,or),n=[Uc.x,Uc.y,Uc.z],Lf(n,Io,Lo,ko,Fc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ks[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ks[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ks[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ks[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ks[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ks[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ks[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ks[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ks),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ks=[new G,new G,new G,new G,new G,new G,new G,new G],Xi=new G,Oc=new as,Io=new G,Lo=new G,ko=new G,rr=new G,or=new G,Hr=new G,Ua=new G,Fc=new G,Uc=new G,Gr=new G;function Lf(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Gr.fromArray(t,r);let a=s.x*Math.abs(Gr.x)+s.y*Math.abs(Gr.y)+s.z*Math.abs(Gr.z),l=e.dot(Gr),c=n.dot(Gr),h=i.dot(Gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Mn=new G,Bc=new He,$M=0,bt=class extends os{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sp,this.updateRanges=[],this.gpuType=ki,this.version=0,this._normalizationScale=e!==void 0?Nu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bc.fromBufferAttribute(this,n),Bc.applyMatrix3(e),this.setXY(n,Bc.x,Bc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Rp(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Cp(e,this.array)}};var al=class extends bt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var ll=class extends bt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var vt=class extends bt{constructor(e,n,i){super(new Float32Array(e),n,i)}},KM=new as,Ba=new G,kf=new G,ui=class{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):KM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);let n=Ba.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ba,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(kf)),this.expandByPoint(Ba.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ZM=0,Pi=new wt,Df=new yn,Do=new G,mi=new as,za=new as,Ln=new G,Ut=class t extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_M(e)?ll:al)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];za.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(mi.min,za.min),mi.expandByPoint(Ln),Ln.addVectors(mi.max,za.max),mi.expandByPoint(Ln)):(mi.expandByPoint(za.min),mi.expandByPoint(za.max))}mi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ln));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ln.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(e,c),Ln.add(Do)),s=Math.max(s,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new G,l[P]=new G;let h=new G,d=new G,u=new G,f=new He,m=new He,y=new He,g=new G,p=new G;function v(P,L,C){c[P]=c[L]=c[C]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,L),u.fromBufferAttribute(i,C),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,L),y.fromBufferAttribute(r,C),d.sub(h),u.sub(h),m.sub(f),y.sub(f);let w=1/(m.x*y.y-y.x*m.y);isFinite(w)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(w),a[P].add(g),a[L].add(g),a[C].add(g),l[P].add(p),l[L].add(p),l[C].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,L=_.length;P<L;++P){let C=_[P],w=C.start,D=C.count;for(let k=w,I=w+D;k<I;k+=3)v(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new G,S=new G,E=new G,x=new G;function b(P){E.fromBufferAttribute(s,P),x.copy(E);let L=a[P];M.copy(L),M.sub(E.multiplyScalar(E.dot(L))).normalize(),S.crossVectors(x,L);let w=S.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,w)}for(let P=0,L=i.count;P<L;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new bt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new bt(u,h,d)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},cl=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Sp,this.updateRanges=[],this.version=0,this.uuid=Gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=dg(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=dg(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function dg(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Gs()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var ei=new G,Ko=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Nu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.applyMatrix4(e),this.setXYZ(n,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.applyNormalMatrix(e),this.setXYZ(n,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.transformDirection(e),this.setXYZ(n,ei.x,ei.y,ei.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new bt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Rp(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Cp(e,this.data.array)}},Nf=new G,jM=new G,JM=new mt,Yi=class{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Nf.subVectors(i,n).cross(jM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Nf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||JM.getNormalMatrix(e),s=this.coplanarPoint(Nf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},QM=0,ls=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=oa,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=sp,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hh,this.stencilZFail=hh,this.stencilZPass=hh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zo=class extends ls{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},No,Ha=new G,Oo=new G,Fo=new G,Uo=new He,Ga=new He,yv=new wt,zc=new G,Va=new G,Hc=new G,fg=new He,Of=new He,pg=new He,hl=class extends yn{constructor(e=new Zo){if(super(),this.isSprite=!0,this.type="Sprite",No===void 0){No=new Ut;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cl(n,5);No.setIndex([0,1,2,0,2,3]),No.setAttribute("position",new Ko(i,3,0,!1)),No.setAttribute("uv",new Ko(i,2,3,!1))}this.geometry=No,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oo.setFromMatrixScale(this.matrixWorld),yv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oo.multiplyScalar(-Fo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Gc(zc.set(-.5,-.5,0),Fo,o,Oo,s,r),Gc(Va.set(.5,-.5,0),Fo,o,Oo,s,r),Gc(Hc.set(.5,.5,0),Fo,o,Oo,s,r),fg.set(0,0),Of.set(1,0),pg.set(1,1);let a=e.ray.intersectTriangle(zc,Va,Hc,!1,Ha);if(a===null&&(Gc(Va.set(-.5,.5,0),Fo,o,Oo,s,r),Of.set(0,1),a=e.ray.intersectTriangle(zc,Hc,Va,!1,Ha),a===null))return;let l=e.ray.origin.distanceTo(Ha);l<e.near||l>e.far||n.push({distance:l,point:Ha.clone(),uv:Ns.getInterpolation(Ha,zc,Va,Hc,fg,Of,pg,new He),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let n=super.toJSON(e);return n.object.center=this.center.toArray(),n}};function Gc(t,e,n,i,s,r){Uo.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(Ga.x=r*Uo.x-s*Uo.y,Ga.y=s*Uo.x+r*Uo.y):Ga.copy(Uo),t.copy(e),t.x+=Ga.x,t.y+=Ga.y,t.applyMatrix4(yv)}var Ds=new G,Ff=new G,Vc=new G,Wc=new G,jo=class{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ds)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Ds.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ds.copy(this.origin).addScaledVector(this.direction,n),Ds.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ff.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),Wc.copy(this.origin).sub(Ff);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Vc),a=Wc.dot(this.direction),l=-Wc.dot(Vc),c=Wc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ff).addScaledVector(Vc,u),f}intersectSphere(e,n){if(e.radius<0)return null;Ds.subVectors(e.center,this.origin);let i=Ds.dot(this.direction),s=Ds.dot(Ds)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ds)!==null}intersectTriangle(e,n,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=n.x-o.x,y=n.y-o.y,g=n.z-o.z,p=i.x-o.x,v=i.y-o.y,_=i.z-o.z,M=Math.abs(l),S=Math.abs(c),E=Math.abs(h),x,b,P,L,C,w,D,k,I,F,z,$;if(M>=S&&M>=E?(P=l,w=d,I=m,$=p,l>=0?(x=c,b=h,L=u,C=f,D=y,k=g,F=v,z=_):(x=h,b=c,L=f,C=u,D=g,k=y,F=_,z=v)):S>=E?(P=c,w=u,I=y,$=v,c>=0?(x=h,b=l,L=f,C=d,D=g,k=m,F=_,z=p):(x=l,b=h,L=d,C=f,D=m,k=g,F=p,z=_)):(P=h,w=f,I=g,$=_,h>=0?(x=l,b=c,L=d,C=u,D=m,k=y,F=p,z=v):(x=c,b=l,L=u,C=d,D=y,k=m,F=v,z=p)),P===0)return null;let X=x/P,j=b/P,W=1/P,ee=L-X*w,Me=C-j*w,te=D-X*I,oe=k-j*I,be=F-X*$,Oe=z-j*$,ne=be*oe-Oe*te,Ce=ee*Oe-Me*be,Fe=te*Me-oe*ee;if(s){if(ne<0||Ce<0||Fe<0)return null}else if((ne<0||Ce<0||Fe<0)&&(ne>0||Ce>0||Fe>0))return null;let Be=ne+Ce+Fe;if(Be===0)return null;let Xe=W*(ne*w+Ce*I+Fe*$);return(Be>0?Xe<0:Xe>0)?null:this.at(Xe/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mg=new wt,Vr=new jo,Xc=new ui,gg=new G,Yc=new G,qc=new G,$c=new G,Uf=new G,Kc=new G,vg=new G,Zc=new G,rt=class extends yn{constructor(e=new Ut,n=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Kc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Uf.fromBufferAttribute(d,e),o?Kc.addScaledVector(Uf,h):Kc.addScaledVector(Uf.sub(n),h))}n.add(Kc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(r),Vr.copy(e.ray).recast(e.near),!(Xc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Xc,gg)===null||Vr.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(mg),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=_;M<S;M+=3){let E=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);s=jc(this,p,e,i,c,h,d,E,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let v=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);s=jc(this,o,e,i,c,h,d,v,_,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=_;M<S;M+=3){let E=M,x=M+1,b=M+2;s=jc(this,p,e,i,c,h,d,E,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let v=g,_=g+1,M=g+2;s=jc(this,o,e,i,c,h,d,v,_,M),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function ew(t,e,n,i,s,r,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===dr,a),l===null)return null;Zc.copy(a),Zc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Zc);return c<n.near||c>n.far?null:{distance:c,point:Zc.clone(),object:t}}function jc(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Yc),t.getVertexPosition(l,qc),t.getVertexPosition(c,$c);let h=ew(t,e,n,i,Yc,qc,$c,vg);if(h){let d=new G;Ns.getBarycoord(vg,Yc,qc,$c,d),s&&(h.uv=Ns.getInterpolatedAttribute(s,a,l,c,d,new He)),r&&(h.uv1=Ns.getInterpolatedAttribute(r,a,l,c,d,new He)),o&&(h.normal=Ns.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};Ns.getNormal(Yc,qc,$c,u.normal),h.face=u,h.barycoord=d}return h}var qr=class extends ni{constructor(e=null,n=1,i=1,s,r,o,a,l,c=kn,h=kn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends bt{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bo=new wt,xg=new wt,Jc=[],yg=new as,tw=new wt,Wa=new rt,Xa=new ui,cs=class extends rt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tw)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new as),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Bo),yg.copy(e.boundingBox).applyMatrix4(Bo),this.boundingBox.union(yg)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Bo),Xa.copy(e.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(Xa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bo),xg.multiplyMatrices(i,Bo),Wa.matrixWorld=xg,Wa.raycast(e,Jc);for(let o=0,a=Jc.length;o<a;o++){let l=Jc[o];l.instanceId=r,l.object=this,n.push(l)}Jc.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qr(new Float32Array(s*this.count),s,this.count,tu,ki));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wr=new ui,nw=new He(.5,.5),Qc=new G,$r=class{constructor(e=new Yi,n=new Yi,i=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],v=r[12],_=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-m,S-v).normalize(),s[1].setComponents(c+o,f+h,p+m,S+v).normalize(),s[2].setComponents(c+a,f+d,p+y,S+_).normalize(),s[3].setComponents(c-a,f-d,p-y,S-_).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,p-g,S-M).normalize();else if(s[4].setComponents(c-l,f-u,p-g,S-M).normalize(),n===Ii)s[5].setComponents(c+l,f+u,p+g,S+M).normalize();else if(n===nl)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);let n=nw.distanceTo(e.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Qc.x=s.normal.x>0?e.max.x:e.min.x,Qc.y=s.normal.y>0?e.max.y:e.min.y,Qc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bg=new wt,Sh=class t{constructor(){this.coordinateSystem=Ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];bg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new $r),i[s].setFromProjectionMatrix(bg,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new $r),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}};var ul=class extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Th=new G,Eh=new G,_g=new wt,Ya=new jo,eh=new ui,Bf=new G,Mg=new G,dl=class extends yn{constructor(e=new Ut,n=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Th.fromBufferAttribute(n,s-1),Eh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Th.distanceTo(Eh);e.setAttribute("lineDistance",new vt(i,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eh.copy(i.boundingSphere),eh.applyMatrix4(s),eh.radius+=r,e.ray.intersectsSphere(eh)===!1)return;_g.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(_g);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=h.getX(y),v=h.getX(y+1),_=th(this,e,Ya,l,p,v,y);_&&n.push(_)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(f),p=th(this,e,Ya,l,y,g,m-1);p&&n.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=c){let p=th(this,e,Ya,l,y,y+1,y);p&&n.push(p)}if(this.isLineLoop){let y=th(this,e,Ya,l,m-1,f,m-1);y&&n.push(y)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function th(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(Th.fromBufferAttribute(a,s),Eh.fromBufferAttribute(a,r),n.distanceSqToSegment(Th,Eh,Bf,Mg)>i)return;Bf.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Bf);if(!(c<e.near||c>e.far))return{distance:c,point:Mg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var Qo=class extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wg=new wt,qf=new jo,nh=new ui,ih=new G,fl=class extends yn{constructor(e=new Ut,n=new Qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nh.copy(i.boundingSphere),nh.applyMatrix4(s),nh.radius+=r,e.ray.intersectsSphere(nh)===!1)return;wg.copy(s).invert(),qf.copy(e.ray).applyMatrix4(wg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);ih.fromBufferAttribute(d,g),Sg(ih,g,l,s,e,n,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,y=f;m<y;m++)ih.fromBufferAttribute(d,m),Sg(ih,m,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sg(t,e,n,i,s,r,o){let a=qf.distanceSqToPoint(t);if(a<n){let l=new G;qf.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var pl=class extends ni{constructor(e=[],n=no,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends ni{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Us=class extends ni{constructor(e,n,i=qi,s,r,o,a=kn,l=kn,c,h=Fs,d=1){if(h!==Fs&&h!==zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},ml=class extends Us{constructor(e,n=qi,i=no,s,r,o=kn,a=kn,l,c=Fs){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gl=class extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ut=class t extends Ut{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,n,e,o,r,0),m("z","y","x",1,-1,i,n,-e,o,r,1),m("x","z","y",1,1,e,i,n,s,o,2),m("x","z","y",1,-1,e,i,-n,s,o,3),m("x","y","z",1,-1,e,n,i,s,r,4),m("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function m(y,g,p,v,_,M,S,E,x,b,P){let L=M/x,C=S/b,w=M/2,D=S/2,k=E/2,I=x+1,F=b+1,z=0,$=0,X=new G;for(let j=0;j<F;j++){let W=j*C-D;for(let ee=0;ee<I;ee++){let Me=ee*L-w;X[y]=Me*v,X[g]=W*_,X[p]=k,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(ee/x),d.push(1-j/b),z+=1}}for(let j=0;j<b;j++)for(let W=0;W<x;W++){let ee=u+W+I*j,Me=u+W+I*(j+1),te=u+(W+1)+I*(j+1),oe=u+(W+1)+I*j;l.push(ee,Me,oe),l.push(Me,te,oe),$+=6}a.addGroup(f,$,P),f+=$,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var vl=class t extends Ut{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new G,h=new He;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},en=class t extends Ut{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=i/2,p=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function v(){let M=new G,S=new G,E=0,x=(n-e)/i;for(let b=0;b<=r;b++){let P=[],L=b/r,C=L*(n-e)+e;for(let w=0;w<=s;w++){let D=w/s,k=D*l+a,I=Math.sin(k),F=Math.cos(k);S.x=C*I,S.y=-L*i+g,S.z=C*F,d.push(S.x,S.y,S.z),M.set(I,x,F).normalize(),u.push(M.x,M.y,M.z),f.push(D,1-L),P.push(m++)}y.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let L=y[P][b],C=y[P+1][b],w=y[P+1][b+1],D=y[P][b+1];(e>0||P!==0)&&(h.push(L,C,D),E+=3),(n>0||P!==r-1)&&(h.push(C,w,D),E+=3)}c.addGroup(p,E,0),p+=E}function _(M){let S=m,E=new He,x=new G,b=0,P=M===!0?e:n,L=M===!0?1:-1;for(let w=1;w<=s;w++)d.push(0,g*L,0),u.push(0,L,0),f.push(.5,.5),m++;let C=m;for(let w=0;w<=s;w++){let k=w/s*l+a,I=Math.cos(k),F=Math.sin(k);x.x=P*F,x.y=g*L,x.z=P*I,d.push(x.x,x.y,x.z),u.push(0,L,0),E.x=I*.5+.5,E.y=F*.5*L+.5,f.push(E.x,E.y),m++}for(let w=0;w<s;w++){let D=S+w,k=C+w;M===!0?h.push(k,k+1,D):h.push(k+1,k,D),b+=3}c.addGroup(p,b,M===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xl=class t extends en{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yl=class t extends Ut{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new G,M=new G,S=new G;for(let E=0;E<n.length;E+=3)f(n[E+0],_),f(n[E+1],M),f(n[E+2],S),l(_,M,S,v)}function l(v,_,M,S){let E=S+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let P=v.clone().lerp(M,b/E),L=_.clone().lerp(M,b/E),C=E-b;for(let w=0;w<=C;w++)w===0&&b===E?x[b][w]=P:x[b][w]=P.clone().lerp(L,w/C)}for(let b=0;b<E;b++)for(let P=0;P<2*(E-b)-1;P++){let L=Math.floor(P/2);P%2===0?(u(x[b][L+1]),u(x[b+1][L]),u(x[b][L])):(u(x[b][L+1]),u(x[b+1][L+1]),u(x[b+1][L]))}}function c(v){let _=new G;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let v=new G;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let M=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(M,1-S)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],M=o[v+2],S=o[v+4],E=Math.max(_,M,S),x=Math.min(_,M,S);E>.9&&x<.1&&(_<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let M=v*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function m(){let v=new G,_=new G,M=new G,S=new G,E=new He,x=new He,b=new He;for(let P=0,L=0;P<r.length;P+=9,L+=6){v.set(r[P+0],r[P+1],r[P+2]),_.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),E.set(o[L+0],o[L+1]),x.set(o[L+2],o[L+3]),b.set(o[L+4],o[L+5]),S.copy(v).add(_).add(M).divideScalar(3);let C=g(S);y(E,L+0,v,C),y(x,L+2,_,C),y(b,L+4,M,C)}}function y(v,_,M,S){S<0&&v.x===1&&(o[_]=v.x-1),M.x===0&&M.z===0&&(o[_]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new He:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new G,s=[],r=[],o=[],a=new G,l=new wt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(At(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ea=class extends ii{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new He){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ah=class extends ea{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pp(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var Tg=new G,Eg=new G,zf=new Pp,Hf=new Pp,Gf=new Pp,Rh=class extends ii{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new G){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eg.subVectors(s[0],s[1]).add(s[0]),c=Eg);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Tg.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Tg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),zf.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),Hf.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Gf.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(zf.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Hf.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Gf.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(zf.calc(l),Hf.calc(l),Gf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ag(t,e,n,i,s){let r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function iw(t,e){let n=1-t;return n*n*e}function sw(t,e){return 2*(1-t)*t*e}function rw(t,e){return t*t*e}function ja(t,e,n,i){return iw(t,e)+sw(t,n)+rw(t,i)}function ow(t,e){let n=1-t;return n*n*n*e}function aw(t,e){let n=1-t;return 3*n*n*t*e}function lw(t,e){return 3*(1-t)*t*t*e}function cw(t,e){return t*t*t*e}function Ja(t,e,n,i,s){return ow(t,e)+aw(t,n)+lw(t,i)+cw(t,s)}var bl=class extends ii{constructor(e=new He,n=new He,i=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new He){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ja(e,s.x,r.x,o.x,a.x),Ja(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ch=class extends ii{constructor(e=new G,n=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new G){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ja(e,s.x,r.x,o.x,a.x),Ja(e,s.y,r.y,o.y,a.y),Ja(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends ii{constructor(e=new He,n=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new He){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new He){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ph=class extends ii{constructor(e=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new G){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends ii{constructor(e=new He,n=new He,i=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new He){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ja(e,s.x,r.x,o.x),ja(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends ii{constructor(e=new G,n=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new G){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ja(e,s.x,r.x,o.x),ja(e,s.y,r.y,o.y),ja(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new He){let i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Ag(a,l.x,c.x,h.x,d.x),Ag(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new He().fromArray(s))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:Ah,CatmullRomCurve3:Rh,CubicBezierCurve:bl,CubicBezierCurve3:Ch,EllipseCurve:ea,LineCurve:_l,LineCurve3:Ph,QuadraticBezierCurve:Ml,QuadraticBezierCurve3:wl,SplineCurve:Sl}),Lh=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new Ih[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zr=class extends Lh{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new _l(this.currentPoint.clone(),new He(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new Ml(this.currentPoint.clone(),new He(e,n),new He(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){let a=new bl(this.currentPoint.clone(),new He(e,n),new He(i,s),new He(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Sl(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){let c=new ea(e,n,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ta=class extends Zr{constructor(e){super(e),this.uuid=Gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new Zr().fromJSON(s))}return this}};function hw(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=bv(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=mw(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let h=a,d=l;for(let u=n;u<s;u+=n){let f=t[u],m=t[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Tl(r,o,n,a,l,c,0),o}function bv(t,e,n,i,s){let r;if(s===Ew(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Rg(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Rg(o/i|0,t[o],t[o+1],r);return r&&na(r,r.next)&&(Al(r),r=r.next),r}function jr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(na(n,n.next)||dn(n.prev,n,n.next)===0)){if(Al(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Tl(t,e,n,i,s,r,o){if(!t)return;!o&&r&&bw(t,i,s,r);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?dw(t,i,s,r):uw(t)){e.push(l.i,t.i,c.i),Al(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=fw(jr(t),e),Tl(t,e,n,i,s,r,2)):o===2&&pw(t,e,n,i,s,r):Tl(jr(t),e,n,i,s,r,1);break}}}function uw(t){let e=t.prev,n=t,i=t.next;if(dn(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&qa(s,a,r,l,o,c,m.x,m.y)&&dn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dw(t,e,n,i){let s=t.prev,r=t,o=t.next;if(dn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),y=Math.max(a,l,c),g=Math.max(h,d,u),p=$f(f,m,e,n,i),v=$f(y,g,e,n,i),_=t.prevZ,M=t.nextZ;for(;_&&_.z>=p&&M&&M.z<=v;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&qa(a,h,l,d,c,u,_.x,_.y)&&dn(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&qa(a,h,l,d,c,u,M.x,M.y)&&dn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&qa(a,h,l,d,c,u,_.x,_.y)&&dn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&qa(a,h,l,d,c,u,M.x,M.y)&&dn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fw(t,e){let n=t;do{let i=n.prev,s=n.next.next;!na(i,s)&&Mv(i,n,n.next,s)&&El(i,s)&&El(s,i)&&(e.push(i.i,n.i,s.i),Al(n),Al(n.next),n=t=s),n=n.next}while(n!==t);return jr(n)}function pw(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ww(o,a)){let l=wv(o,a);o=jr(o,o.next),l=jr(l,l.next),Tl(o,e,n,i,s,r,0),Tl(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function mw(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=bv(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Mw(c))}s.sort(gw);for(let r=0;r<s.length;r++)n=vw(s[r],n);return n}function gw(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function vw(t,e){let n=xw(t,e);if(!n)return e;let i=wv(n,t);return jr(i,i.next),jr(n,n.next)}function xw(t,e){let n=e,i=t.x,s=t.y,r=-1/0,o;if(na(t,n))return n;do{if(na(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r&&(r=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&_v(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);El(n,t)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&yw(o,n)))&&(o=n,h=d)}n=n.next}while(n!==a);return o}function yw(t,e){return dn(t.prev,t,e.prev)<0&&dn(e.next,t,t.next)<0}function bw(t,e,n,i){let s=t;do s.z===0&&(s.z=$f(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,_w(s)}function _w(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function $f(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Mw(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function _v(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function qa(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&_v(t,e,n,i,s,r,o,a)}function ww(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Sw(t,e)&&(El(t,e)&&El(e,t)&&Tw(t,e)&&(dn(t.prev,t,e.prev)||dn(t,e.prev,e))||na(t,e)&&dn(t.prev,t,t.next)>0&&dn(e.prev,e,e.next)>0)}function dn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function na(t,e){return t.x===e.x&&t.y===e.y}function Mv(t,e,n,i){let s=rh(dn(t,e,n)),r=rh(dn(t,e,i)),o=rh(dn(n,i,t)),a=rh(dn(n,i,e));return!!(s!==r&&o!==a||s===0&&sh(t,n,e)||r===0&&sh(t,i,e)||o===0&&sh(n,t,i)||a===0&&sh(n,e,i))}function sh(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function rh(t){return t>0?1:t<0?-1:0}function Sw(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Mv(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function El(t,e){return dn(t.prev,t,t.next)<0?dn(t,e,t.next)>=0&&dn(t,t.prev,e)>=0:dn(t,e,t.prev)<0||dn(t,t.next,e)<0}function Tw(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function wv(t,e){let n=Kf(t.i,t.x,t.y),i=Kf(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Rg(t,e,n,i){let s=Kf(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Al(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Kf(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ew(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}var Zf=class{static triangulate(e,n,i=2){return hw(e,n,i)}},Xr=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];Cg(e),Pg(i,e);let o=e.length;n.forEach(Cg);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,Pg(i,n[l]);let a=Zf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cg(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Pg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Rl=class t extends Ut{constructor(e=new ta([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:f-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,p=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:Aw,_,M=!1,S,E,x,b;if(p){_=p.getSpacedPoints(h),M=!0,u=!1;let me=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,me),E=new G,x=new G,b=new G}u||(g=0,f=0,m=0,y=0);let P=a.extractPoints(c),L=P.shape,C=P.holes;if(!Xr.isClockWise(L)){L=L.reverse();for(let me=0,Pe=C.length;me<Pe;me++){let ke=C[me];Xr.isClockWise(ke)&&(C[me]=ke.reverse())}}function D(me){let ke=10000000000000001e-36,xe=me[0];for(let Ee=1;Ee<=me.length;Ee++){let qe=Ee%me.length,we=me[qe],_e=we.x-xe.x,Re=we.y-xe.y,Le=_e*_e+Re*Re,q=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(xe.x),Math.abs(xe.y)),Je=ke*q*q;if(Le<=Je){me.splice(qe,1),Ee--;continue}xe=we}}D(L),C.forEach(D);let k=C.length,I=L;for(let me=0;me<k;me++){let Pe=C[me];L=L.concat(Pe)}function F(me,Pe,ke){return Pe||ft("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(Pe,ke)}let z=L.length;function $(me,Pe,ke){let xe,Ee,qe,we=me.x-Pe.x,_e=me.y-Pe.y,Re=ke.x-me.x,Le=ke.y-me.y,q=we*we+_e*_e,Je=we*Le-_e*Re;if(Math.abs(Je)>Number.EPSILON){let se=Math.sqrt(q),ae=Math.sqrt(Re*Re+Le*Le),N=Pe.x-_e/se,Z=Pe.y+we/se,K=ke.x-Le/ae,ye=ke.y+Re/ae,R=((K-N)*Le-(ye-Z)*Re)/(we*Le-_e*Re);xe=N+we*R-me.x,Ee=Z+_e*R-me.y;let T=xe*xe+Ee*Ee;if(T<=2)return new He(xe,Ee);qe=Math.sqrt(T/2)}else{let se=!1;we>Number.EPSILON?Re>Number.EPSILON&&(se=!0):we<-Number.EPSILON?Re<-Number.EPSILON&&(se=!0):Math.sign(_e)===Math.sign(Le)&&(se=!0),se?(xe=-_e,Ee=we,qe=Math.sqrt(q)):(xe=we,Ee=_e,qe=Math.sqrt(q/2))}return new He(xe/qe,Ee/qe)}let X=[];for(let me=0,Pe=I.length,ke=Pe-1,xe=me+1;me<Pe;me++,ke++,xe++)ke===Pe&&(ke=0),xe===Pe&&(xe=0),X[me]=$(I[me],I[ke],I[xe]);let j=[],W,ee=X.concat();for(let me=0,Pe=k;me<Pe;me++){let ke=C[me];W=[];for(let xe=0,Ee=ke.length,qe=Ee-1,we=xe+1;xe<Ee;xe++,qe++,we++)qe===Ee&&(qe=0),we===Ee&&(we=0),W[xe]=$(ke[xe],ke[qe],ke[we]);j.push(W),ee=ee.concat(W)}let Me;if(g===0)Me=Xr.triangulateShape(I,C);else{let me=[],Pe=[];for(let ke=0;ke<g;ke++){let xe=ke/g,Ee=f*Math.cos(xe*Math.PI/2),qe=m*Math.sin(xe*Math.PI/2)+y;for(let we=0,_e=I.length;we<_e;we++){let Re=F(I[we],X[we],qe);Ce(Re.x,Re.y,-Ee),xe===0&&me.push(Re)}for(let we=0,_e=k;we<_e;we++){let Re=C[we];W=j[we];let Le=[];for(let q=0,Je=Re.length;q<Je;q++){let se=F(Re[q],W[q],qe);Ce(se.x,se.y,-Ee),xe===0&&Le.push(se)}xe===0&&Pe.push(Le)}}Me=Xr.triangulateShape(me,Pe)}let te=Me.length,oe=m+y;for(let me=0;me<z;me++){let Pe=u?F(L[me],ee[me],oe):L[me];M?(x.copy(S.normals[0]).multiplyScalar(Pe.x),E.copy(S.binormals[0]).multiplyScalar(Pe.y),b.copy(_[0]).add(x).add(E),Ce(b.x,b.y,b.z)):Ce(Pe.x,Pe.y,0)}for(let me=1;me<=h;me++)for(let Pe=0;Pe<z;Pe++){let ke=u?F(L[Pe],ee[Pe],oe):L[Pe];M?(x.copy(S.normals[me]).multiplyScalar(ke.x),E.copy(S.binormals[me]).multiplyScalar(ke.y),b.copy(_[me]).add(x).add(E),Ce(b.x,b.y,b.z)):Ce(ke.x,ke.y,d/h*me)}for(let me=g-1;me>=0;me--){let Pe=me/g,ke=f*Math.cos(Pe*Math.PI/2),xe=m*Math.sin(Pe*Math.PI/2)+y;for(let Ee=0,qe=I.length;Ee<qe;Ee++){let we=F(I[Ee],X[Ee],xe);Ce(we.x,we.y,d+ke)}for(let Ee=0,qe=C.length;Ee<qe;Ee++){let we=C[Ee];W=j[Ee];for(let _e=0,Re=we.length;_e<Re;_e++){let Le=F(we[_e],W[_e],xe);M?Ce(Le.x,Le.y+_[h-1].y,_[h-1].x+ke):Ce(Le.x,Le.y,d+ke)}}}be(),Oe();function be(){let me=s.length/3;if(u){let Pe=0,ke=z*Pe;for(let xe=0;xe<te;xe++){let Ee=Me[xe];Fe(Ee[2]+ke,Ee[1]+ke,Ee[0]+ke)}Pe=h+g*2,ke=z*Pe;for(let xe=0;xe<te;xe++){let Ee=Me[xe];Fe(Ee[0]+ke,Ee[1]+ke,Ee[2]+ke)}}else{for(let Pe=0;Pe<te;Pe++){let ke=Me[Pe];Fe(ke[2],ke[1],ke[0])}for(let Pe=0;Pe<te;Pe++){let ke=Me[Pe];Fe(ke[0]+z*h,ke[1]+z*h,ke[2]+z*h)}}i.addGroup(me,s.length/3-me,0)}function Oe(){let me=s.length/3,Pe=0;ne(I,Pe),Pe+=I.length;for(let ke=0,xe=C.length;ke<xe;ke++){let Ee=C[ke];ne(Ee,Pe),Pe+=Ee.length}i.addGroup(me,s.length/3-me,1)}function ne(me,Pe){let ke=me.length;for(;--ke>=0;){let xe=ke,Ee=ke-1;Ee<0&&(Ee=me.length-1);for(let qe=0,we=h+g*2;qe<we;qe++){let _e=z*qe,Re=z*(qe+1),Le=Pe+xe+_e,q=Pe+Ee+_e,Je=Pe+Ee+Re,se=Pe+xe+Re;Be(Le,q,Je,se)}}}function Ce(me,Pe,ke){l.push(me),l.push(Pe),l.push(ke)}function Fe(me,Pe,ke){Xe(me),Xe(Pe),Xe(ke);let xe=s.length/3,Ee=v.generateTopUV(i,s,xe-3,xe-2,xe-1);Ye(Ee[0]),Ye(Ee[1]),Ye(Ee[2])}function Be(me,Pe,ke,xe){Xe(me),Xe(Pe),Xe(xe),Xe(Pe),Xe(ke),Xe(xe);let Ee=s.length/3,qe=v.generateSideWallUV(i,s,Ee-6,Ee-3,Ee-2,Ee-1);Ye(qe[0]),Ye(qe[1]),Ye(qe[3]),Ye(qe[1]),Ye(qe[2]),Ye(qe[3])}function Xe(me){s.push(l[me*3+0]),s.push(l[me*3+1]),s.push(l[me*3+2])}function Ye(me){r.push(me.x),r.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Rw(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=n[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ih[s.type]().fromJSON(s)),new t(i,e.options)}},Aw={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new He(r,o),new He(a,l),new He(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new He(o,1-l),new He(c,1-d),new He(u,1-m),new He(y,1-p)]:[new He(a,1-l),new He(h,1-d),new He(f,1-m),new He(g,1-p)]}};function Rw(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Jr=class t extends yl{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Cl=class t extends Ut{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=At(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/n,d=new G,u=new He,f=new G,m=new G,y=new G,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let v=0;v<=n;v++){let _=i+v*h*s,M=Math.sin(_),S=Math.cos(_);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*M,d.y=e[E].y,d.z=e[E].x*S,o.push(d.x,d.y,d.z),u.x=v/n,u.y=E/(e.length-1),a.push(u.x,u.y);let x=l[3*E+0]*M,b=l[3*E+1],P=l[3*E+0]*S;c.push(x,b,P)}}for(let v=0;v<n;v++)for(let _=0;_<e.length-1;_++){let M=_+v*e.length,S=M,E=M+e.length,x=M+e.length+1,b=M+1;r.push(S,E,b),r.push(x,b,E)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},ia=class t extends yl{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},Li=class t extends Ut{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let M=_*d-r;m.push(M,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,M=v+c*(p+1),S=v+1+c*(p+1),E=v+1+c*p;f.push(_,M,E),f.push(M,S,E)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},lr=class t extends Ut{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(n-e)/s,f=new G,m=new He;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/n+1)/2,m.y=(f.y/n+1)/2,h.push(m.x,m.y)}d+=u}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let v=p+g,_=v,M=v+i+1,S=v+i+2,E=v+1;a.push(_,M,E),a.push(M,S,E)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pn=class t extends Ut{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new G,u=new G,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let v=[],_=p/i,M=o+_*a,S=e*Math.cos(M),E=Math.sqrt(e*e-S*S),x=0;p===0&&o===0?x=.5/n:p===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){let P=b/n,L=s+P*r;d.x=-E*Math.cos(L),d.y=S,d.z=E*Math.sin(L),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(P+x,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<n;v++){let _=h[p][v+1],M=h[p][v],S=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(_,M,E),(p!==i-1||l<Math.PI)&&f.push(M,S,E)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qr=class t extends Ut{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new G,f=new G,m=new G;for(let y=0;y<=i;y++){let g=o+y/i*a;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(e+n*Math.cos(g))*Math.cos(v),f.y=(e+n*Math.cos(g))*Math.sin(v),f.z=n*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,v=(s+1)*(y-1)+g-1,_=(s+1)*(y-1)+g,M=(s+1)*y+g;l.push(p,v,M),l.push(v,_,M)}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Pl=class t extends Ut{constructor(e=new wl(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,c=new He,h=new G,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function y(){for(let _=0;_<n;_++)g(_);g(r===!1?n:0),v(),p()}function g(_){h=e.getPointAt(_/n,h);let M=o.normals[_],S=o.binormals[_];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,b=Math.sin(x),P=-Math.cos(x);l.x=P*M.x+b*S.x,l.y=P*M.y+b*S.y,l.z=P*M.z+b*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=n;_++)for(let M=1;M<=s;M++){let S=(s+1)*(_-1)+(M-1),E=(s+1)*_+(M-1),x=(s+1)*_+M,b=(s+1)*(_-1)+M;m.push(S,E,b),m.push(E,x,b)}}function v(){for(let _=0;_<=n;_++)for(let M=0;M<=s;M++)c.x=_/n,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new Ih[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function so(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Ig(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Ig(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Kn(t){let e={};for(let n=0;n<t.length;n++){let i=so(t[n]);for(let s in i)e[s]=i[s]}return e}function Ig(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Cw(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ip(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}var Sv={clone:so,merge:Kn},Pw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pw,this.fragmentShader=Iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new fn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new mt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kh=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Dh=class extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nh=class extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Il=class extends ul{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function zo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function oh(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var cr=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break e}o=n.length;break t}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oh=class extends cr{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wf,endingEnd:Wf}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xf:r=e,a=2*n-i;break;case Yf:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xf:o=e,l=2*i-n;break;case Yf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-n)/(s-n),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,v=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[c+S]+_*o[l+S]+M*o[d+S];return r}},Fh=class extends cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Uh=class extends cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bh=class extends cr{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-n)/(s-n),y=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let y=o[c+m],g=o[l+m],p=f*u+m*2,v=d[p],_=d[p+1],M=e*u+m*2,S=h[M],E=h[M+1],x=kw(i,n,v,S,s);r[m]=Tv(x,y,_,E,g)}return r}};function Tv(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Lw(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function kw(t,e,n,i,s){let r=(t-e)/(s-e);for(let o=0;o<8;o++){let a=Tv(r,e,n,i,s)-t;if(Math.abs(a)<1e-10)break;let l=Lw(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var vi=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(n,this.TimeBufferType),this.values=zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),oh(e.settings)&&(i.settings={inTangents:zo(e.settings.inTangents,Array),outTangents:zo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Bh(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Qa:n=this.InterpolantFactoryMethodDiscrete;break;case bh:n=this.InterpolantFactoryMethodLinear;break;case ch:n=this.InterpolantFactoryMethodSmooth;break;case Vf:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ht("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return bh;case this.InterpolantFactoryMethodSmooth:return ch;case this.InterpolantFactoryMethodBezier:return Vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;oh(this.settings)&&(Lg(this.settings.inTangents,e),Lg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;oh(this.settings)&&(kg(this.settings.inTangents,e),kg(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ft("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ft("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&MM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ft("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ch,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let y=n[d+m];if(y!==n[u+m]||y!==n[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,oh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lg(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function kg(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=bh;var hr=class extends vi{constructor(e,n,i){super(e,n,i)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Qa;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var zh=class extends vi{constructor(e,n,i,s){super(e,n,i,s)}};zh.prototype.ValueTypeName="color";var Hh=class extends vi{constructor(e,n,i,s){super(e,n,i,s)}};Hh.prototype.ValueTypeName="number";var Gh=class extends cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ll=class extends vi{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}};Ll.prototype.ValueTypeName="quaternion";Ll.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends vi{constructor(e,n,i){super(e,n,i)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Qa;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Vh=class extends vi{constructor(e,n,i,s){super(e,n,i,s)}};Vh.prototype.ValueTypeName="vector";var Wh=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ev=new Wh,Xh=class{constructor(e){this.manager=e!==void 0?e:Ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ah=new G,lh=new ti,ss=new G,kl=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ah,lh,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ah,lh,ss.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ah,lh,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ah,lh,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ar=new G,Dg=new He,Ng=new He,Hn=class extends kl{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,Dg,Ng),n.subVectors(Ng,Dg)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Yh=class extends kl{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Ho=-90,Go=1,sa=class extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(Ho,Go,e,n);s.layers=this.layers,this.add(s);let r=new Hn(Ho,Go,e,n);r.layers=this.layers,this.add(r);let o=new Hn(Ho,Go,e,n);o.layers=this.layers,this.add(o);let a=new Hn(Ho,Go,e,n);a.layers=this.layers,this.add(a);let l=new Hn(Ho,Go,e,n);l.layers=this.layers,this.add(l);let c=new Hn(Ho,Go,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},qh=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Lp="\\[\\]\\.:\\/",Dw=new RegExp("["+Lp+"]","g"),kp="[^"+Lp+"]",Nw="[^"+Lp.replace("\\.","")+"]",Ow=/((?:WC+[\/:])*)/.source.replace("WC",kp),Fw=/(WCOD+)?/.source.replace("WCOD",Nw),Uw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kp),Bw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kp),zw=new RegExp("^"+Ow+Fw+Uw+Bw+"$"),Hw=["material","materials","bones","map"],jf=class{constructor(e,n,i){let s=i||sn.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},sn=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dw,"")}static parseTrackName(e){let n=zw.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hw.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=jf;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tL=new Float32Array(1);var Bp=class Bp{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Bp.prototype.isMatrix2=!0;var Jf=Bp;function Dp(t,e,n,i){let s=Gw(i);switch(n){case xp:return t*e;case tu:return t*e/s.components*s.byteLength;case nu:return t*e/s.components*s.byteLength;case fr:return t*e*2/s.components*s.byteLength;case iu:return t*e*2/s.components*s.byteLength;case yp:return t*e*3/s.components*s.byteLength;case yi:return t*e*4/s.components*s.byteLength;case su:return t*e*4/s.components*s.byteLength;case Ol:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(t,16)*Math.max(e,8)/4;case ru:case au:return Math.max(t,8)*Math.max(e,8)/2;case cu:case hu:case du:case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uu:case zl:case pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Cu:case Pu:case Iu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lu:case ku:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hl:case Du:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Gw(t){switch(t){case xi:case pp:return{byteLength:1,components:1};case la:case mp:case $i:return{byteLength:2,components:1};case Qh:case eu:return{byteLength:2,components:4};case qi:case Jh:case ki:return{byteLength:4,components:1};case gp:case vp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $v(){let t=null,e=!1,n=null,i=null;function s(r,o){i=t.requestAnimationFrame(s),n(r,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function qw(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $w=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kw=`#ifdef USE_ALPHAHASH
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
#endif`,Zw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eS=`#ifdef USE_AOMAP
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
#endif`,tS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nS=`#ifdef USE_BATCHING
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
#endif`,iS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aS=`#ifdef USE_IRIDESCENCE
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
#endif`,lS=`#ifdef USE_BUMPMAP
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
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vS=`#define PI 3.141592653589793
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
} // validated`,xS=`vec3 transformedNormal = objectNormal;
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
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
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
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,BS=`#ifdef USE_ENVMAP
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
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
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
#endif`,XS=`uniform sampler2D dfgLUT;
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
}`,YS=`
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
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
#endif`,$S=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iT=`#if defined( USE_POINTS_UV )
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
#endif`,sT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
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
#endif`,lT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`#ifdef USE_MORPHTARGETS
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
#endif`,hT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gT=`#ifdef USE_NORMALMAP
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
#endif`,vT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ST=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LT=`float getShadowMask() {
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
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,FT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$T=`uniform sampler2D t2D;
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform float backgroundBlurriness;
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`#include <common>
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
}`,eE=`#if DEPTH_PACKING == 3200
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
}`,tE=`#define DISTANCE
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
}`,nE=`#define DISTANCE
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#include <common>
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
}`,lE=`uniform vec3 diffuse;
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
}`,cE=`#define LAMBERT
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
}`,hE=`#define LAMBERT
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
}`,uE=`#define MATCAP
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
}`,dE=`#define MATCAP
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
}`,fE=`#define NORMAL
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
}`,pE=`#define NORMAL
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
}`,mE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,xE=`#define STANDARD
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
}`,yE=`#define TOON
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
}`,bE=`#define TOON
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
}`,_E=`uniform float size;
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
}`,ME=`uniform vec3 diffuse;
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
}`,wE=`#include <common>
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
}`,SE=`uniform vec3 color;
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
}`,TE=`uniform float rotation;
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
}`,EE=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:$w,alphahash_pars_fragment:Kw,alphamap_fragment:Zw,alphamap_pars_fragment:jw,alphatest_fragment:Jw,alphatest_pars_fragment:Qw,aomap_fragment:eS,aomap_pars_fragment:tS,batching_pars_vertex:nS,batching_vertex:iS,begin_vertex:sS,beginnormal_vertex:rS,bsdfs:oS,iridescence_fragment:aS,bumpmap_pars_fragment:lS,clipping_planes_fragment:cS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:dS,color_fragment:fS,color_pars_fragment:pS,color_pars_vertex:mS,color_vertex:gS,common:vS,defaultnormal_vertex:xS,displacementmap_pars_vertex:yS,displacementmap_vertex:bS,emissivemap_fragment:_S,emissivemap_pars_fragment:MS,colorspace_fragment:wS,colorspace_pars_fragment:SS,envmap_fragment:TS,envmap_common_pars_fragment:ES,envmap_pars_fragment:AS,envmap_pars_vertex:RS,envmap_physical_pars_fragment:BS,envmap_vertex:CS,fog_vertex:PS,fog_pars_vertex:IS,fog_fragment:LS,fog_pars_fragment:kS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:NS,lights_lambert_fragment:OS,lights_lambert_pars_fragment:FS,lights_pars_begin:US,lights_toon_fragment:zS,lights_toon_pars_fragment:HS,lights_phong_fragment:GS,lights_phong_pars_fragment:VS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:YS,lights_fragment_maps:qS,lights_fragment_end:$S,lightprobes_pars_fragment:KS,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:jS,logdepthbuf_pars_vertex:JS,logdepthbuf_vertex:QS,map_fragment:eT,map_pars_fragment:tT,map_particle_fragment:nT,map_particle_pars_fragment:iT,metalnessmap_fragment:sT,metalnessmap_pars_fragment:rT,morphinstance_vertex:oT,morphcolor_vertex:aT,morphnormal_vertex:lT,morphtarget_pars_vertex:cT,morphtarget_vertex:hT,normal_fragment_begin:uT,normal_fragment_maps:dT,normal_pars_fragment:fT,normal_pars_vertex:pT,normal_vertex:mT,normalmap_pars_fragment:gT,clearcoat_normal_fragment_begin:vT,clearcoat_normal_fragment_maps:xT,clearcoat_pars_fragment:yT,iridescence_pars_fragment:bT,opaque_fragment:_T,packing:MT,premultiplied_alpha_fragment:wT,project_vertex:ST,dithering_fragment:TT,dithering_pars_fragment:ET,roughnessmap_fragment:AT,roughnessmap_pars_fragment:RT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:PT,shadowmap_vertex:IT,shadowmask_pars_fragment:LT,skinbase_vertex:kT,skinning_pars_vertex:DT,skinning_vertex:NT,skinnormal_vertex:OT,specularmap_fragment:FT,specularmap_pars_fragment:UT,tonemapping_fragment:BT,tonemapping_pars_fragment:zT,transmission_fragment:HT,transmission_pars_fragment:GT,uv_pars_fragment:VT,uv_pars_vertex:WT,uv_vertex:XT,worldpos_vertex:YT,background_vert:qT,background_frag:$T,backgroundCube_vert:KT,backgroundCube_frag:ZT,cube_vert:jT,cube_frag:JT,depth_vert:QT,depth_frag:eE,distance_vert:tE,distance_frag:nE,equirect_vert:iE,equirect_frag:sE,linedashed_vert:rE,linedashed_frag:oE,meshbasic_vert:aE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:hE,meshmatcap_vert:uE,meshmatcap_frag:dE,meshnormal_vert:fE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:xE,meshtoon_vert:yE,meshtoon_frag:bE,points_vert:_E,points_frag:ME,shadow_vert:wE,shadow_frag:SE,sprite_vert:TE,sprite_frag:EE},Ze={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ds={basic:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Kn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Kn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new $e(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Kn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Kn([Ze.points,Ze.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Kn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Kn([Ze.common,Ze.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Kn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Kn([Ze.sprite,Ze.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Kn([Ze.common,Ze.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Kn([Ze.lights,Ze.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ds.physical={uniforms:Kn([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var Fu={r:0,b:0,g:0},AE=new wt,Kv=new mt;Kv.set(-1,0,0,0,1,0,0,0,1);function RE(t,e,n,i,s,r){let o=new $e(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let M=v.backgroundBlurriness>0;_=e.get(_,M)}return _}function m(v){let _=!1,M=f(v);M===null?g(o,a):M&&M.isColor&&(g(M,1),_=!0);let S=t.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(v,_){let M=f(_);M&&M.isCubeTexture?(c===void 0&&(c=new rt(new ut(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:so(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kv),c.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Vt,(h!==M||d!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new rt(new Li(2,2),new $n({name:"BackgroundMaterial",uniforms:so(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,_){v.getRGB(Fu,Ip(t)),n.buffers.color.setClear(Fu.r,Fu.g,Fu.b,_,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:y,dispose:p}}function CE(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,w,D,k,I){let F=!1,z=d(C,k,D,w);r!==z&&(r=z,c(r.object)),F=f(C,k,D,I),F&&m(C,k,D,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(C,w,D,k),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function h(C){return t.deleteVertexArray(C)}function d(C,w,D,k){let I=k.wireframe===!0,F=i[w.id];F===void 0&&(F={},i[w.id]=F);let z=C.isInstancedMesh===!0?C.id:0,$=F[z];$===void 0&&($={},F[z]=$);let X=$[D.id];X===void 0&&(X={},$[D.id]=X);let j=X[I];return j===void 0&&(j=u(l()),X[I]=j),j}function u(C){let w=[],D=[],k=[];for(let I=0;I<n;I++)w[I]=0,D[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:D,attributeDivisors:k,object:C,attributes:{},index:null}}function f(C,w,D,k){let I=r.attributes,F=w.attributes,z=0,$=D.getAttributes();for(let X in $)if($[X].location>=0){let W=I[X],ee=F[X];if(ee===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),W===void 0||W.attribute!==ee||ee&&W.data!==ee.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function m(C,w,D,k){let I={},F=w.attributes,z=0,$=D.getAttributes();for(let X in $)if($[X].location>=0){let W=F[X];W===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(W=C.instanceColor));let ee={};ee.attribute=W,W&&W.data&&(ee.data=W.data),I[X]=ee,z++}r.attributes=I,r.attributesNum=z,r.index=k}function y(){let C=r.newAttributes;for(let w=0,D=C.length;w<D;w++)C[w]=0}function g(C){p(C,0)}function p(C,w){let D=r.newAttributes,k=r.enabledAttributes,I=r.attributeDivisors;D[C]=1,k[C]===0&&(t.enableVertexAttribArray(C),k[C]=1),I[C]!==w&&(t.vertexAttribDivisor(C,w),I[C]=w)}function v(){let C=r.newAttributes,w=r.enabledAttributes;for(let D=0,k=w.length;D<k;D++)w[D]!==C[D]&&(t.disableVertexAttribArray(D),w[D]=0)}function _(C,w,D,k,I,F,z){z===!0?t.vertexAttribIPointer(C,w,D,I,F):t.vertexAttribPointer(C,w,D,k,I,F)}function M(C,w,D,k){y();let I=k.attributes,F=D.getAttributes(),z=w.defaultAttributeValues;for(let $ in F){let X=F[$];if(X.location>=0){let j=I[$];if(j===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){let W=j.normalized,ee=j.itemSize,Me=e.get(j);if(Me===void 0)continue;let te=Me.buffer,oe=Me.type,be=Me.bytesPerElement,Oe=oe===t.INT||oe===t.UNSIGNED_INT||j.gpuType===Jh;if(j.isInterleavedBufferAttribute){let ne=j.data,Ce=ne.isInterleavedBuffer===!0?ne.stride:ne.itemSize,Fe=j.offset;if(ne.isInstancedInterleavedBuffer||ne.isInstancedBufferAttribute){for(let Be=0;Be<X.locationSize;Be++)p(X.location+Be,ne.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Be=0;Be<X.locationSize;Be++)g(X.location+Be);t.bindBuffer(t.ARRAY_BUFFER,te);for(let Be=0;Be<X.locationSize;Be++)_(X.location+Be,ee/X.locationSize,oe,W,Ce*be,(Fe+ee/X.locationSize*Be)*be,Oe)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)p(X.location+ne,j.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<X.locationSize;ne++)g(X.location+ne);t.bindBuffer(t.ARRAY_BUFFER,te);for(let ne=0;ne<X.locationSize;ne++)_(X.location+ne,ee/X.locationSize,oe,W,ee*be,ee/X.locationSize*ne*be,Oe)}}else if(z!==void 0){let W=z[$];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(X.location,W);break;case 3:t.vertexAttrib3fv(X.location,W);break;case 4:t.vertexAttrib4fv(X.location,W);break;default:t.vertexAttrib1fv(X.location,W)}}}}v()}function S(){P();for(let C in i){let w=i[C];for(let D in w){let k=w[D];for(let I in k){let F=k[I];for(let z in F)h(F[z].object),delete F[z];delete k[I]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let w=i[C.id];for(let D in w){let k=w[D];for(let I in k){let F=k[I];for(let z in F)h(F[z].object),delete F[z];delete k[I]}}delete i[C.id]}function x(C){for(let w in i){let D=i[w];for(let k in D){let I=D[k];if(I[C.id]===void 0)continue;let F=I[C.id];for(let z in F)h(F[z].object),delete F[z];delete I[C.id]}}}function b(C){for(let w in i){let D=i[w],k=C.isInstancedMesh===!0?C.id:0,I=D[k];if(I!==void 0){for(let F in I){let z=I[F];for(let $ in z)h(z[$].object),delete z[$];delete I[F]}delete D[k],Object.keys(D).length===0&&delete i[w]}}}function P(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function PE(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function IE(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==yi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xi&&x!==ki&&!b&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,maxSamples:S,samples:E}}function LE(t){let e=this,n=null,i=0,s=!1,r=!1,o=new Yi,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,_=v*4,M=p.clippingState||null;l.value=M,M=h(m,u,_,f);for(let S=0;S!==_;++S)M[S]=n[S];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,M=f;_!==y;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Wl=class extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ut(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:eo});r.uniforms.tEquirect.value=n;let o=new rt(s,r),a=n.minFilter;return n.minFilter===Bs&&(n.minFilter=Dn),new sa(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},Av=256,kE=3,DE=20,Zv=256,jv=16,NE=3,OE=new G,FE=new $e,Bu=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sa(1,10,null),this._boxMesh=new rt(new ut(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=OE}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(FE));let g=new sa(i,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,e.background=y,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Av,Ap(e))}_fromTexture(e,n){e.mapping===no||e.mapping===aa?this._setSize(e.image.length===0?Av:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=Rv(e,!1,!1),i=Math.log2(e)-kE;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Rv(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let o=e.width>>n;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===no||e.mapping===aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cv()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=UE(),this._integrationMaterial=BE());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/jv);for(let o=0;o<=i;o++){let a=t.lodToRoughness(o,i);if(o>i-NE)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(n)+.5*Math.log2(6/(Zv*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=zE());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Rv(t,e,n){return new Wl(t,{minFilter:Bs,generateMipmaps:e,type:$i,colorSpace:el,depthBuffer:n})}function Xl(t,e,n){return new $n({name:t,uniforms:e,vertexShader:St.cube_vert,fragmentShader:n,side:Tn,blending:eo,depthTest:!1,depthWrite:!1})}function UE(){return Xl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zv}u

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
	`)}function BE(){return Xl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jv}},`

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
	`)}function zE(){return Xl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${DE}
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
	`)}function Cv(){return Xl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pv(){return Xl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function HE(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Kh||f===Zh)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Wl(m.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Kh||f===Zh,y=f===no||f===aa;if(m||y){let g=n.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Bu(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new Bu(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Kh?u.mapping=no:f===Zh&&(u.mapping=aa),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=n.get(f);m!==void 0&&(n.delete(f),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function GE(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&$a("WebGLRenderer: "+i+" extension not supported."),s}}}function VE(t,e,n,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),n.memory.geometries++),y}function h(m){let y=m.attributes;for(let g in y)e.update(y[g],t.ARRAY_BUFFER)}function d(m){let y=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=y!==null?y.array.length:g.array.length/3-1,_=g.count>=65535?ll:al,M=new _(Math.ceil(v/3)*6,1),S=M.array;if(y!==null){let x=y.array;p=y.version;for(let b=0,P=0;b<v;b+=3){let L=x[b+0],C=x[b+1],w=x[b+2];S[P++]=L,S[P++]=C,S[P++]=C,S[P++]=w,S[P++]=w,S[P++]=L}}else{p=g.version;for(let x=0,b=0;x<v;x+=3){let P=x+0,L=x+1,C=x+2;S[b++]=P,S[b++]=L,S[b++]=L,S[b++]=C,S[b++]=C,S[b++]=P}}M.version=p;let E=r.get(m);E&&e.remove(E),r.set(m,M)}function u(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function WE(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];n.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function XE(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function YE(t,e,n){let i=new WeakMap,s=new fn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),y===!0&&(_=3);let M=a.attributes.position.count*_,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*S*4*d),x=new rl(E,M,S,d);x.type=ki,x.needsUpdate=!0;let b=_*4;for(let L=0;L<d;L++){let C=g[L],w=p[L],D=v[L],k=M*S*4*L;for(let I=0;I<C.count;I++){let F=I*b;f===!0&&(s.fromBufferAttribute(C,I),E[k+F+0]=s.x,E[k+F+1]=s.y,E[k+F+2]=s.z,E[k+F+3]=0),m===!0&&(s.fromBufferAttribute(w,I),E[k+F+4]=s.x,E[k+F+5]=s.y,E[k+F+6]=s.z,E[k+F+7]=0),y===!0&&(s.fromBufferAttribute(D,I),E[k+F+8]=s.x,E[k+F+9]=s.y,E[k+F+10]=s.z,E[k+F+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new He(M,S)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function qE(t,e,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}var $E={[op]:"LINEAR_TONE_MAPPING",[ap]:"REINHARD_TONE_MAPPING",[lp]:"CINEON_TONE_MAPPING",[cp]:"ACES_FILMIC_TONE_MAPPING",[up]:"AGX_TONE_MAPPING",[dp]:"NEUTRAL_TONE_MAPPING",[hp]:"CUSTOM_TONE_MAPPING"};function KE(t,e,n,i,s,r){let o=new gi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ut;h.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vt([0,2,0,0,2,0],2));let d=new kh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new rt(h,d),f=new Yh(-1,1,1,-1,0,1),m=null,y=null,g=!1,p,v=null,_=[],M=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<_.length;x++){let b=_[x];b.setSize&&b.setSize(S,E)}},this.setEffects=function(S){_=S,M=_.length>0&&_[0].isRenderPass===!0;let E=o.width,x=o.height;_.length>0&&a===null&&(a=new gi(E,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new gi(E,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&_.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Us(E,x),r===!0&&(c.format=zs,c.type=io)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<_.length;P++){let L=_[P];L.setSize&&L.setSize(E,x),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(S,E){if(g||S.toneMapping===hs&&_.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return M===!1&&S.setRenderTarget(o),p=S.toneMapping,S.toneMapping=hs,!0},this.hasRenderPass=function(){return M},this.end=function(S,E){S.toneMapping=p,g=!0;let x=o,b=a;for(let P=0;P<_.length;P++){let L=_[P];L.enabled!==!1&&(L.render(S,b,x,E),L.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==S.outputColorSpace||y!==S.toneMapping){m=S.outputColorSpace,y=S.toneMapping,d.defines={},Dt.getTransfer(m)===Vt&&(d.defines.SRGB_TRANSFER="");let P=$E[y];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Jv=new ni,Qv=new Us(1,1),ex=new ml(1),tx=new rl,nx=new wh,ix=new pl,Iv=[],Lv=[],kv=new Float32Array(16),Dv=new Float32Array(9),Nv=new Float32Array(4);function ua(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Iv[s];if(r===void 0&&(r=new Float32Array(s),Iv[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function En(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function An(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hu(t,e){let n=Lv[e];n===void 0&&(n=new Int32Array(e),Lv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2fv(this.addr,e),An(n,e)}}function JE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(En(n,e))return;t.uniform3fv(this.addr,e),An(n,e)}}function QE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4fv(this.addr,e),An(n,e)}}function e2(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(En(n,i))return;Nv.set(i),t.uniformMatrix2fv(this.addr,!1,Nv),An(n,i)}}function t2(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(En(n,i))return;Dv.set(i),t.uniformMatrix3fv(this.addr,!1,Dv),An(n,i)}}function n2(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(En(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(En(n,i))return;kv.set(i),t.uniformMatrix4fv(this.addr,!1,kv),An(n,i)}}function i2(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function s2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2iv(this.addr,e),An(n,e)}}function r2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3iv(this.addr,e),An(n,e)}}function o2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4iv(this.addr,e),An(n,e)}}function a2(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function l2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;t.uniform2uiv(this.addr,e),An(n,e)}}function c2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;t.uniform3uiv(this.addr,e),An(n,e)}}function h2(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;t.uniform4uiv(this.addr,e),An(n,e)}}function Gu(t){return t.version===0&&(t.compareFunction=wp,t.needsUpdate=!0),t}function u2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=Gu(Qv):r=Jv,n.setTexture2D(e||r,s)}function d2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||nx,s)}function f2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=Gu(ex):r=ix,n.setTextureCube(e||r,s)}function p2(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||tx,s)}function m2(t){switch(t){case 5126:return ZE;case 35664:return jE;case 35665:return JE;case 35666:return QE;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return s2;case 35668:case 35672:return r2;case 35669:case 35673:return o2;case 5125:return a2;case 36294:return l2;case 36295:return c2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(t,e){t.uniform1fv(this.addr,e)}function v2(t,e){let n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function x2(t,e){let n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function y2(t,e){let n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function b2(t,e){let n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _2(t,e){let n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function M2(t,e){let n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function w2(t,e){t.uniform1iv(this.addr,e)}function S2(t,e){t.uniform2iv(this.addr,e)}function T2(t,e){t.uniform3iv(this.addr,e)}function E2(t,e){t.uniform4iv(this.addr,e)}function A2(t,e){t.uniform1uiv(this.addr,e)}function R2(t,e){t.uniform2uiv(this.addr,e)}function C2(t,e){t.uniform3uiv(this.addr,e)}function P2(t,e){t.uniform4uiv(this.addr,e)}function I2(t,e,n){let i=this.cache,s=e.length,r=Hu(n,s);En(i,r)||(t.uniform1iv(this.addr,r),An(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Gu(Qv):o=Jv;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function L2(t,e,n){let i=this.cache,s=e.length,r=Hu(n,s);En(i,r)||(t.uniform1iv(this.addr,r),An(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||nx,r[o])}function k2(t,e,n){let i=this.cache,s=e.length,r=Hu(n,s);En(i,r)||(t.uniform1iv(this.addr,r),An(i,r));let o;this.type===t.SAMPLER_CUBE_SHADOW?o=Gu(ex):o=ix;for(let a=0;a!==s;++a)n.setTextureCube(e[a]||o,r[a])}function D2(t,e,n){let i=this.cache,s=e.length,r=Hu(n,s);En(i,r)||(t.uniform1iv(this.addr,r),An(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||tx,r[o])}function N2(t){switch(t){case 5126:return g2;case 35664:return v2;case 35665:return x2;case 35666:return y2;case 35674:return b2;case 35675:return _2;case 35676:return M2;case 5124:case 35670:return w2;case 35667:case 35671:return S2;case 35668:case 35672:return T2;case 35669:case 35673:return E2;case 5125:return A2;case 36294:return R2;case 36295:return C2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return D2}}var Gp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=m2(n.type)}},Vp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N2(n.type)}},Wp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},zp=/(\w+)(\])?(\[|\.)?/g;function Ov(t,e){t.seq.push(e),t.map[e.id]=e}function O2(t,e,n){let i=t.name,s=i.length;for(zp.lastIndex=0;;){let r=zp.exec(i),o=zp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ov(n,c===void 0?new Gp(a,t,e):new Vp(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Wp(a),Ov(n,d)),n=d}}}var ha=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);O2(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function Fv(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var F2=37297,U2=0;function B2(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Uv=new mt;function z2(t){Dt._getMatrix(Uv,Dt.workingColorSpace,t);let e=`mat3( ${Uv.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(t)){case tl:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Bv(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+B2(t.getShaderSource(e),a)}else return r}function H2(t,e){let n=z2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var G2={[op]:"Linear",[ap]:"Reinhard",[lp]:"Cineon",[cp]:"ACESFilmic",[up]:"AgX",[dp]:"Neutral",[hp]:"Custom"};function V2(t,e){let n=G2[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Uu=new G;function W2(){Dt.getLuminanceCoefficients(Uu);let t=Uu.x.toFixed(4),e=Uu.y.toFixed(4),n=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function Y2(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function q2(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vl(t){return t!==""}function zv(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Hv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(t){return t.replace($2,K2)}function K2(t,e){let n=St[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xp(n)}var Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(t){return t.replace(Z2,j2)}function j2(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var J2={[Dl]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function Q2(t){return J2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eA={[aa]:"ENVMAP_MODE_REFRACTION"};function tA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":eA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nA={[rp]:"ENVMAP_BLENDING_MULTIPLY",[iv]:"ENVMAP_BLENDING_MIX",[sv]:"ENVMAP_BLENDING_ADD"};function iA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nA[t.combine]||"ENVMAP_BLENDING_NONE"}function sA(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=Q2(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=tA(n),d=iA(n),u=X2(n),f=Y2(r),m=s.createProgram(),y,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Vl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Vl).join(`
`),g.length>0&&(g+=`
`)):(y=[Vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),g=[Vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hs?"#define TONE_MAPPING":"",n.toneMapping!==hs?St.tonemapping_pars_fragment:"",n.toneMapping!==hs?V2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),W2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vl).join(`
`)),o=Xp(o),o=zv(o,n),o=Hv(o,n),a=Xp(a),a=zv(a,n),a=Hv(a,n),o=Gv(o),a=Gv(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+y+o,_=p+g+a,M=Fv(s,s.VERTEX_SHADER,v),S=Fv(s,s.FRAGMENT_SHADER,_);s.attachShader(m,M),s.attachShader(m,S),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(L){if(t.debug.checkShaderErrors){let C=s.getProgramInfoLog(m)||"",w=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(S)||"",k=C.trim(),I=w.trim(),F=D.trim(),z=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,M,S);else{let X=Bv(s,M,"vertex"),j=Bv(s,S,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+X+`
`+j)}else k!==""?ht("WebGLProgram: Program Info Log:",k):(I===""||F==="")&&($=!1);$&&(L.diagnostics={runnable:z,programLog:k,vertexShader:{log:I,prefix:y},fragmentShader:{log:F,prefix:g}})}s.deleteShader(M),s.deleteShader(S),x=new ha(s,m),b=q2(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,F2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}var rA=0,Yp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new qp(e),n.set(e,i)),i}},qp=class{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}};function oA(t){return t===fr||t===zl||t===Hl}function aA(t,e,n,i,s,r){let o=new ol,a=new Yp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,P,L,C,w){let D=L.fog,k=C.geometry,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||I,F),$=u[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&ht("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,W=j!==void 0?j.length:0,ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let Me,te,oe,be;if($){let Ie=ds[$];Me=Ie.vertexShader,te=Ie.fragmentShader}else{Me=x.vertexShader,te=x.fragmentShader;let Ie=a.getVertexShaderStage(x),ot=a.getFragmentShaderStage(x);a.update(x,Ie,ot),oe=Ie.id,be=ot.id}let Oe=t.getRenderTarget(),ne=t.state.buffers.depth.getReversed(),Ce=C.isInstancedMesh===!0,Fe=C.isBatchedMesh===!0,Be=!!x.map,Xe=!!x.matcap,Ye=!!z,me=Ye&&z.isPMREMTexture===!0,Pe=!!x.aoMap,ke=!!x.lightMap,xe=!!x.bumpMap&&x.wireframe===!1,Ee=!!x.normalMap,qe=!!x.displacementMap,we=!!x.emissiveMap,_e=!!x.metalnessMap,Re=!!x.roughnessMap,Le=x.anisotropy>0,q=x.clearcoat>0,Je=x.diffuseRoughness>0,se=x.dispersion>0,ae=x.retroreflectivity>0,N=x.iridescence>0,Z=x.sheen>0,K=x.transmission>0,ye=Le&&!!x.anisotropyMap,R=q&&!!x.clearcoatMap,T=q&&!!x.clearcoatNormalMap,V=q&&!!x.clearcoatRoughnessMap,ie=Je&&!!x.diffuseRoughnessMap,J=N&&!!x.iridescenceMap,fe=N&&!!x.iridescenceThicknessMap,Se=Z&&!!x.sheenColorMap,ce=Z&&!!x.sheenRoughnessMap,re=!!x.specularMap,Ne=!!x.specularColorMap,Y=!!x.specularIntensityMap,pe=K&&!!x.transmissionMap,he=K&&!!x.thicknessMap,De=!!x.gradientMap,Ae=!!x.alphaMap,Te=x.alphaTest>0,Ge=!!x.alphaHash,nt=!!x.extensions,ge=hs;x.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ge=t.toneMapping);let ze=me?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Qe={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:te,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:Fe,batchingColor:Fe&&C._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&C.instanceColor!==null,instancingMorph:Ce&&C.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Xe,envMap:Ye,envMapMode:Ye&&z.mapping,envMapPMREM:me,envMapMaxLod:me?ze.length-1:null,envMapSize:me?ze[0].width:null,aoMap:Pe,lightMap:ke,bumpMap:xe,normalMap:Ee,displacementMap:qe,emissiveMap:we,normalMapObjectSpace:Ee&&x.normalMapType===av,normalMapTangentSpace:Ee&&x.normalMapType===bp,packedNormalMap:Ee&&x.normalMapType===bp&&oA(x.normalMap.format),metalnessMap:_e,roughnessMap:Re,anisotropy:Le,anisotropyMap:ye,clearcoat:q,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:Je,diffuseRoughnessMap:ie,dispersion:se,retroreflection:ae,iridescence:N,iridescenceMap:J,iridescenceThicknessMap:fe,sheen:Z,sheenColorMap:Se,sheenRoughnessMap:ce,specularMap:re,specularColorMap:Ne,specularIntensityMap:Y,transmission:K,transmissionMap:pe,thicknessMap:he,gradientMap:De,opaque:x.transparent===!1&&x.blending===oa&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Te,alphaHash:Ge,combine:x.combine,mapUv:Be&&f(x.map.channel),aoMapUv:Pe&&f(x.aoMap.channel),lightMapUv:ke&&f(x.lightMap.channel),bumpMapUv:xe&&f(x.bumpMap.channel),normalMapUv:Ee&&f(x.normalMap.channel),displacementMapUv:qe&&f(x.displacementMap.channel),emissiveMapUv:we&&f(x.emissiveMap.channel),metalnessMapUv:_e&&f(x.metalnessMap.channel),roughnessMapUv:Re&&f(x.roughnessMap.channel),anisotropyMapUv:ye&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&f(x.sheenRoughnessMap.channel),specularMapUv:re&&f(x.specularMap.channel),specularColorMapUv:Ne&&f(x.specularColorMap.channel),specularIntensityMapUv:Y&&f(x.specularIntensityMap.channel),transmissionMapUv:pe&&f(x.transmissionMap.channel),thicknessMapUv:he&&f(x.thicknessMap.channel),alphaMapUv:Ae&&f(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ee||Le),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!k.attributes.uv&&(Be||Ae),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:w.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&Dt.getTransfer(x.map.colorSpace)===Vt,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(x.emissiveMap.colorSpace)===Vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(b,x),p(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=u[x.type],P;if(b){let L=ds[b];P=Sv.clone(L.uniforms)}else P=x.uniforms;return P}function _(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new sA(t,b,x,s),c.push(P),h.set(b,P)),P}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:v,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function lA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function cA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Wv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xv(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,y,g,p){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},t[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,f,m,y,g,p,v){v.reversedDepth===!0&&(g=-g);let _=a(u,f,m,y,g,p);m.transmission>0?i.push(_):m.transparent===!0?s.push(_):n.push(_)}function c(u,f,m,y,g,p){let v=a(u,f,m,y,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):n.unshift(v)}function h(u,f){n.length>1&&n.sort(u||cA),i.length>1&&i.sort(f||Wv),s.length>1&&s.sort(f||Wv)}function d(){for(let u=e,f=t.length;u<f;u++){let m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function hA(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new Xv,t.set(i,[o])):s>=r.length?(o=new Xv,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new $e};break;case"SpotLight":n={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function dA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var fA=0;function pA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mA(t){let e=new uA,n=dA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new wt,o=new wt;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,v=0,_=0,M=0,S=0,E=0,x=0,b=0,P=0,L=0;c.sort(pA);for(let w=0,D=c.length;w<D;w++){let k=c[w],I=k.color,F=k.intensity,z=k.distance,$=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===fr?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=I.r*F,d+=I.g*F,u+=I.b*F;else if(k.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(k.sh.coefficients[X],F);L++}else if(k.isSunLight){let X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let j=k.shadow,W=n.get(k);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=W,i.sunShadowMap[m]=$;let ee=j.getViewportCount();for(let Me=0;Me<ee;Me++)i.sunShadowMatrix[y+Me]=j.getMatrix(Me),i.sunShadowCascade[y+Me]=j._cascadeData[Me];y+=ee,m++}i.sun[f]=X,f++}else if(k.isDirectionalLight){let X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let j=k.shadow,W=n.get(k);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[g]=W,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=k.shadow.matrix,S++}i.directional[g]=X,g++}else if(k.isSpotLight){let X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(I).multiplyScalar(F),X.distance=z,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,i.spot[v]=X;let j=k.shadow;if(k.map&&(i.spotLightMap[b]=k.map,b++,j.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[v]=j.matrix,k.castShadow){let W=n.get(k);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=$,x++}v++}else if(k.isRectAreaLight){let X=e.get(k);X.color.copy(I).multiplyScalar(F),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),i.rectArea[_]=X,_++}else if(k.isPointLight){let X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){let j=k.shadow,W=n.get(k);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=k.shadow.matrix,E++}i.point[p]=X,p++}else if(k.isHemisphereLight){let X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(F),X.groundColor.copy(k.groundColor).multiplyScalar(F),i.hemi[M]=X,M++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ze.LTC_FLOAT_1,i.rectAreaLTC2=Ze.LTC_FLOAT_2):(i.rectAreaLTC1=Ze.LTC_HALF_1,i.rectAreaLTC2=Ze.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==_||C.hemiLength!==M||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=_,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,C.sunLength=f,C.directionalLength=g,C.pointLength=p,C.spotLength=v,C.rectAreaLength=_,C.hemiLength=M,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=L,i.version=fA++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let M=c[v];if(M.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(M.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Yv(t){let e=new mA(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):n.push(d)}function a(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gA(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Yv(t),e.set(s,[a])):r>=o.length?(a=new Yv(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
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
}`,yA=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],bA=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],qv=new wt,Gl=new G,Hp=new G;function _A(t,e,n){let i=new $r,s=new He,r=new He,o=new fn,a=new Dh,l=new Nh,c={},h=n.maxTextureSize,d={[dr]:Tn,[Tn]:dr,[Nn]:Nn},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ut;m.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new rt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let p=this.type;this.render=function(E,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Ug&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dl);let P=t.getRenderTarget(),L=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),w=t.state;w.setBlending(eo),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let D=p!==this.type;D&&x.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(I=>I.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,I=E.length;k<I;k++){let F=E[k],z=F.shadow;if(z===void 0){ht("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let $=z.getFrameExtents();s.multiply($),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,z.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ra){if(F.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new gi(s.x,s.y,{format:fr,type:$i,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new Us(s.x,s.y,ki),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=Fs,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=kn,z.map.depthTexture.magFilter=kn}else F.isPointLight?(z.map=new Wl(s.x),z.map.depthTexture=new ml(s.x,qi)):(z.map=new gi(s.x,s.y),z.map.depthTexture=new Us(s.x,s.y,qi)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=Fs,this.type===Dl?(z.map.depthTexture.compareFunction=X?Mp:_p,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=kn,z.map.depthTexture.magFilter=kn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();F.isPointLight!==!0&&z.updateMatrices(F,b);let W=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let ee=0;ee<j;ee++){let Me=z.getCamera(ee);if(F.isPointLight){let te=z.camera,oe=z.matrix,be=F.distance||te.far;be!==te.far&&(te.far=be,te.updateProjectionMatrix()),Gl.setFromMatrixPosition(F.matrixWorld),te.position.copy(Gl),Hp.copy(te.position),Hp.add(yA[ee]),te.up.copy(bA[ee]),te.lookAt(Hp),te.updateMatrixWorld(),oe.makeTranslation(-Gl.x,-Gl.y,-Gl.z),qv.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(qv,te.coordinateSystem,te.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(z.map),t.clear());let te=z.getViewport(ee);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),w.viewport(o)}i=z.getFrustum(ee),M(x,b,Me,F,W,this.type)}z.isPointLightShadow!==!0&&this.type===ra&&v(z,b),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(P,L,C)};function v(E,x){let b=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new gi(s.x,s.y,{format:fr,type:$i}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(x,null,b,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(x,null,b,f,y,null)}function _(E,x,b,P){let L=null,C=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)L=C;else if(L=b.isPointLight===!0?l:a,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let w=L.uuid,D=x.uuid,k=c[w];k===void 0&&(k={},c[w]=k);let I=k[D];I===void 0&&(I=L.clone(),k[D]=I,x.addEventListener("dispose",S)),L=I}if(L.visible=x.visible,L.wireframe=x.wireframe,P===ra?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:d[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let w=t.properties.get(L);w.light=b}return L}function M(E,x,b,P,L,C){if(E.visible===!1)return;if(E.layers.test(L)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ra)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let k=e.update(E),I=E.material;if(Array.isArray(I)){let F=k.groups;for(let z=0,$=F.length;z<$;z++){let X=F[z],j=I[X.materialIndex];if(j&&j.visible){let W=_(E,j,P,C);E.onBeforeShadow(t,E,x,b,k,W,X),t.renderBufferDirect(b,null,k,W,E,X),E.onAfterShadow(t,E,x,b,k,W,X)}}}else if(I.visible){let F=_(E,I,P,C);E.onBeforeShadow(t,E,x,b,k,F,null),t.renderBufferDirect(b,null,k,F,E,null),E.onAfterShadow(t,E,x,b,k,F,null)}}let D=E.children;for(let k=0,I=D.length;k<I;k++)M(D[k],x,b,P,L,C)}function S(E){E.target.removeEventListener("dispose",S);for(let b in c){let P=c[b],L=E.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}}function MA(t,e){function n(){let Y=!1,pe=new fn,he=null,De=new fn(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!Y&&(t.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,Te,Ge,nt,ge){ge===!0&&(Ae*=nt,Te*=nt,Ge*=nt),pe.set(Ae,Te,Ge,nt),De.equals(pe)===!1&&(t.clearColor(Ae,Te,Ge,nt),De.copy(pe))},reset:function(){Y=!1,he=null,De.set(-1,0,0,0)}}}function i(){let Y=!1,pe=!1,he=null,De=null,Ae=null;return{setReversed:function(Te){if(pe!==Te){let Ge=e.get("EXT_clip_control");Te?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),pe=Te;let nt=Ae;Ae=null,this.setClear(nt)}},getReversed:function(){return pe},setTest:function(Te){Te?ne(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Te){he!==Te&&!Y&&(t.depthMask(Te),he=Te)},setFunc:function(Te){if(pe&&(Te=vv[Te]),De!==Te){switch(Te){case uh:t.depthFunc(t.NEVER);break;case dh:t.depthFunc(t.ALWAYS);break;case fh:t.depthFunc(t.LESS);break;case Wo:t.depthFunc(t.LEQUAL);break;case ph:t.depthFunc(t.EQUAL);break;case mh:t.depthFunc(t.GEQUAL);break;case gh:t.depthFunc(t.GREATER);break;case vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=Te}},setLocked:function(Te){Y=Te},setClear:function(Te){Ae!==Te&&(Ae=Te,pe&&(Te=1-Te),t.clearDepth(Te))},reset:function(){Y=!1,he=null,De=null,Ae=null,pe=!1}}}function s(){let Y=!1,pe=null,he=null,De=null,Ae=null,Te=null,Ge=null,nt=null,ge=null;return{setTest:function(ze){Y||(ze?ne(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(ze){pe!==ze&&!Y&&(t.stencilMask(ze),pe=ze)},setFunc:function(ze,Qe,Ie){(he!==ze||De!==Qe||Ae!==Ie)&&(t.stencilFunc(ze,Qe,Ie),he=ze,De=Qe,Ae=Ie)},setOp:function(ze,Qe,Ie){(Te!==ze||Ge!==Qe||nt!==Ie)&&(t.stencilOp(ze,Qe,Ie),Te=ze,Ge=Qe,nt=Ie)},setLocked:function(ze){Y=ze},setClear:function(ze){ge!==ze&&(t.clearStencil(ze),ge=ze)},reset:function(){Y=!1,pe=null,he=null,De=null,Ae=null,Te=null,Ge=null,nt=null,ge=null}}}let r=new n,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,v=null,_=null,M=null,S=null,E=null,x=null,b=new $e(0,0,0),P=0,L=!1,C=null,w=null,D=null,k=null,I=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=$>=2);let j=null,W={},ee=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),te=new fn().fromArray(ee),oe=new fn().fromArray(Me);function be(Y,pe,he,De){let Ae=new Uint8Array(4),Te=t.createTexture();t.bindTexture(Y,Te),t.texParameteri(Y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<he;Ge++)Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(pe+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return Te}let Oe={};Oe[t.TEXTURE_2D]=be(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(Wo),xe(!1),Ee(Qf),ne(t.CULL_FACE),Pe(eo);function ne(Y){h[Y]!==!0&&(t.enable(Y),h[Y]=!0)}function Ce(Y){h[Y]!==!1&&(t.disable(Y),h[Y]=!1)}function Fe(Y,pe){return u[Y]!==pe?(t.bindFramebuffer(Y,pe),u[Y]=pe,Y===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),Y===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Be(Y,pe){let he=m,De=!1;if(Y){he=f.get(pe),he===void 0&&(he=[],f.set(pe,he));let Ae=Y.textures;if(he.length!==Ae.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,Ge=Ae.length;Te<Ge;Te++)he[Te]=t.COLOR_ATTACHMENT0+Te;he.length=Ae.length,De=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,De=!0);De&&t.drawBuffers(he)}function Xe(Y){return y!==Y?(t.useProgram(Y),y=Y,!0):!1}let Ye={[to]:t.FUNC_ADD,[zg]:t.FUNC_SUBTRACT,[Hg]:t.FUNC_REVERSE_SUBTRACT};Ye[Gg]=t.MIN,Ye[Vg]=t.MAX;let me={[Wg]:t.ZERO,[Xg]:t.ONE,[Yg]:t.SRC_COLOR,[ip]:t.SRC_ALPHA,[Jg]:t.SRC_ALPHA_SATURATE,[Zg]:t.DST_COLOR,[$g]:t.DST_ALPHA,[qg]:t.ONE_MINUS_SRC_COLOR,[sp]:t.ONE_MINUS_SRC_ALPHA,[jg]:t.ONE_MINUS_DST_COLOR,[Kg]:t.ONE_MINUS_DST_ALPHA,[Qg]:t.CONSTANT_COLOR,[ev]:t.ONE_MINUS_CONSTANT_COLOR,[tv]:t.CONSTANT_ALPHA,[nv]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(Y,pe,he,De,Ae,Te,Ge,nt,ge,ze){if(Y===eo){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),Y!==Bg){if(Y!==p||ze!==L){if((v!==to||S!==to)&&(t.blendEquation(t.FUNC_ADD),v=to,S=to),ze)switch(Y){case oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ep:t.blendFunc(t.ONE,t.ONE);break;case tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case np:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",Y);break}else switch(Y){case oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ep:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case tp:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case np:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",Y);break}_=null,M=null,E=null,x=null,b.set(0,0,0),P=0,p=Y,L=ze}return}Ae=Ae||pe,Te=Te||he,Ge=Ge||De,(pe!==v||Ae!==S)&&(t.blendEquationSeparate(Ye[pe],Ye[Ae]),v=pe,S=Ae),(he!==_||De!==M||Te!==E||Ge!==x)&&(t.blendFuncSeparate(me[he],me[De],me[Te],me[Ge]),_=he,M=De,E=Te,x=Ge),(nt.equals(b)===!1||ge!==P)&&(t.blendColor(nt.r,nt.g,nt.b,ge),b.copy(nt),P=ge),p=Y,L=!1}function ke(Y,pe){Y.side===Nn?Ce(t.CULL_FACE):ne(t.CULL_FACE);let he=Y.side===Tn;pe&&(he=!he),xe(he),Y.blending===oa&&Y.transparent===!1?Pe(eo):Pe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let De=Y.stencilWrite;a.setTest(De),De&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),we(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function xe(Y){C!==Y&&(Y?t.frontFace(t.CW):t.frontFace(t.CCW),C=Y)}function Ee(Y){Y!==Og?(ne(t.CULL_FACE),Y!==w&&(Y===Qf?t.cullFace(t.BACK):Y===Fg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),w=Y}function qe(Y){Y!==D&&(z&&t.lineWidth(Y),D=Y)}function we(Y,pe,he){Y?(ne(t.POLYGON_OFFSET_FILL),(k!==pe||I!==he)&&(k=pe,I=he,o.getReversed()&&(pe=-pe,he=-he),t.polygonOffset(pe,he))):Ce(t.POLYGON_OFFSET_FILL)}function _e(Y){Y?ne(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Re(Y){Y===void 0&&(Y=t.TEXTURE0+F-1),j!==Y&&(t.activeTexture(Y),j=Y)}function Le(Y,pe,he){he===void 0&&(j===null?he=t.TEXTURE0+F-1:he=j);let De=W[he];De===void 0&&(De={type:void 0,texture:void 0},W[he]=De),(De.type!==Y||De.texture!==pe)&&(j!==he&&(t.activeTexture(he),j=he),t.bindTexture(Y,pe||Oe[Y]),De.type=Y,De.texture=pe)}function q(){let Y=W[j];Y!==void 0&&Y.type!==void 0&&(t.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Je(){try{t.compressedTexImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function se(){try{t.compressedTexImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function ae(){try{t.texSubImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function N(){try{t.texSubImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function ye(){try{t.texStorage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function R(){try{t.texStorage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function T(){try{t.texImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function V(){try{t.texImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function ie(Y){return d[Y]!==void 0?d[Y]:t.getParameter(Y)}function J(Y,pe){d[Y]!==pe&&(t.pixelStorei(Y,pe),d[Y]=pe)}function fe(Y){te.equals(Y)===!1&&(t.scissor(Y.x,Y.y,Y.z,Y.w),te.copy(Y))}function Se(Y){oe.equals(Y)===!1&&(t.viewport(Y.x,Y.y,Y.z,Y.w),oe.copy(Y))}function ce(Y,pe){let he=c.get(pe);he===void 0&&(he=new WeakMap,c.set(pe,he));let De=he.get(Y);De===void 0&&(De=t.getUniformBlockIndex(pe,Y.name),t.uniformBlockBinding(pe,De,De),he.set(Y,De))}function re(Y,pe,he){let Ae=c.get(pe).get(Y);l[Ae]!==he&&(t.bindBufferBase(t.UNIFORM_BUFFER,Ae,he),l[Ae]=he)}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,W={},u={},l={},f=new WeakMap,m=[],y=null,g=!1,p=null,v=null,_=null,M=null,S=null,E=null,x=null,b=new $e(0,0,0),P=0,L=!1,C=null,w=null,D=null,k=null,I=null,te.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Ce,bindFramebuffer:Fe,drawBuffers:Be,useProgram:Xe,setBlending:Pe,setMaterial:ke,setFlipSided:xe,setCullFace:Ee,setLineWidth:qe,setPolygonOffset:we,setScissorTest:_e,activeTexture:Re,bindTexture:Le,unbindTexture:q,compressedTexImage2D:Je,compressedTexImage3D:se,texImage2D:T,texImage3D:V,pixelStorei:J,getParameter:ie,updateUBOMapping:ce,uniformBlockBinding:re,texStorage2D:ye,texStorage3D:R,texSubImage2D:ae,texSubImage3D:N,compressedTexSubImage2D:Z,compressedTexSubImage3D:K,scissor:fe,viewport:Se,reset:Ne}}function wA(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,y=new FinalizationRegistry(R=>m.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return g?new OffscreenCanvas(R,T):il("canvas")}function v(R,T,V){let ie=1,J=ye(R);if((J.width>V||J.height>V)&&(ie=V/Math.max(J.width,J.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let fe=Math.floor(ie*J.width),Se=Math.floor(ie*J.height);u===void 0&&(u=p(fe,Se));let ce=T?p(fe,Se):u;return ce.width=fe,ce.height=Se,ce.getContext("2d").drawImage(R,0,0,fe,Se),ht("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+fe+"x"+Se+")."),ce}else return"data"in R&&ht("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function _(R){return R.generateMipmaps}function M(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(R,T,V,ie,J,fe=!1){if(R!==null){if(t[R]!==void 0)return t[R];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Se;ie&&(Se=e.get("EXT_texture_norm16"),Se||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=T;if(T===t.RED&&(V===t.FLOAT&&(ce=t.R32F),V===t.HALF_FLOAT&&(ce=t.R16F),V===t.UNSIGNED_BYTE&&(ce=t.R8),V===t.UNSIGNED_SHORT&&Se&&(ce=Se.R16_EXT),V===t.SHORT&&Se&&(ce=Se.R16_SNORM_EXT)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.R8UI),V===t.UNSIGNED_SHORT&&(ce=t.R16UI),V===t.UNSIGNED_INT&&(ce=t.R32UI),V===t.BYTE&&(ce=t.R8I),V===t.SHORT&&(ce=t.R16I),V===t.INT&&(ce=t.R32I)),T===t.RG&&(V===t.FLOAT&&(ce=t.RG32F),V===t.HALF_FLOAT&&(ce=t.RG16F),V===t.UNSIGNED_BYTE&&(ce=t.RG8),V===t.UNSIGNED_SHORT&&Se&&(ce=Se.RG16_EXT),V===t.SHORT&&Se&&(ce=Se.RG16_SNORM_EXT)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.RG8UI),V===t.UNSIGNED_SHORT&&(ce=t.RG16UI),V===t.UNSIGNED_INT&&(ce=t.RG32UI),V===t.BYTE&&(ce=t.RG8I),V===t.SHORT&&(ce=t.RG16I),V===t.INT&&(ce=t.RG32I)),T===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),V===t.UNSIGNED_INT&&(ce=t.RGB32UI),V===t.BYTE&&(ce=t.RGB8I),V===t.SHORT&&(ce=t.RGB16I),V===t.INT&&(ce=t.RGB32I)),T===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),V===t.UNSIGNED_INT&&(ce=t.RGBA32UI),V===t.BYTE&&(ce=t.RGBA8I),V===t.SHORT&&(ce=t.RGBA16I),V===t.INT&&(ce=t.RGBA32I)),T===t.RGB&&(V===t.UNSIGNED_SHORT&&Se&&(ce=Se.RGB16_EXT),V===t.SHORT&&Se&&(ce=Se.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ce=t.R11F_G11F_B10F)),T===t.RGBA){let re=fe?tl:Dt.getTransfer(J);V===t.FLOAT&&(ce=t.RGBA32F),V===t.HALF_FLOAT&&(ce=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ce=re===Vt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&Se&&(ce=Se.RGBA16_EXT),V===t.SHORT&&Se&&(ce=Se.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(R,T){let V;return R?T===null||T===qi||T===io?V=t.DEPTH24_STENCIL8:T===ki?V=t.DEPTH32F_STENCIL8:T===la&&(V=t.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===io?V=t.DEPTH_COMPONENT24:T===ki?V=t.DEPTH_COMPONENT32F:T===la&&(V=t.DEPTH_COMPONENT16),V}function b(R,T){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==kn&&R.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){let T=new WeakRef(R);i.get(R).__ref=T,m.add(T),y.register(R,T,T)}function L(R){let T=i.get(R).__ref;T!==void 0&&(m.delete(T),y.unregister(T))}function C(R){D(R.target)}function w(R){k(R.target)}function D(R){R.removeEventListener("dispose",C),L(R),F(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function k(R){R.removeEventListener("dispose",w),L(R),$(R)}function I(){for(let R of m){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?k(T):D(T))}m.clear(),d.clear()}function F(R){let T=i.get(R);if(T.__webglInit===void 0)return;let V=R.source,ie=f.get(V);if(ie){let J=ie[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(R),Object.keys(ie).length===0&&f.delete(V)}i.remove(R)}function z(R){let T=i.get(R);t.deleteTexture(T.__webglTexture);let V=R.source,ie=f.get(V);delete ie[T.__cacheKey],o.memory.textures--}function $(R){let T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&D(V),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let fe=0;fe<T.__webglFramebuffer[J].length;fe++)t.deleteFramebuffer(T.__webglFramebuffer[J][fe]);else t.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)t.deleteFramebuffer(T.__webglFramebuffer[J]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ie=R.textures;for(let J=0,fe=ie.length;J<fe;J++){let Se=i.get(ie[J]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(ie[J])}i.remove(R)}let X=0;function j(){X=0}function W(){return X}function ee(R){X=R}function Me(){let R=X;return R>=s.maxTextures&&ht("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function te(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function oe(R,T){let V=i.get(R);if(R.isVideoTexture&&Z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let ie=R.image;if(ie===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(V,R,T);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function be(R,T){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ke(V,R,T);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function Oe(R,T){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ke(V,R,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function ne(R,T){let V=i.get(R);if(R.version>0&&V.__version!==R.version){xe(V,R,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}let Ce={[xh]:t.REPEAT,[rs]:t.CLAMP_TO_EDGE,[yh]:t.MIRRORED_REPEAT},Fe={[kn]:t.NEAREST,[rv]:t.NEAREST_MIPMAP_NEAREST,[Nl]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[jh]:t.LINEAR_MIPMAP_NEAREST,[Bs]:t.LINEAR_MIPMAP_LINEAR},Be={[cv]:t.NEVER,[wp]:t.ALWAYS,[hv]:t.LESS,[_p]:t.LEQUAL,[uv]:t.EQUAL,[Mp]:t.GEQUAL,[dv]:t.GREATER,[fv]:t.NOTEQUAL};function Xe(R,T){if(T.type===ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===jh||T.magFilter===Nl||T.magFilter===Bs||T.minFilter===Dn||T.minFilter===jh||T.minFilter===Nl||T.minFilter===Bs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Ce[T.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Ce[T.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Ce[T.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Fe[T.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Fe[T.minFilter]),T.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===kn||T.minFilter!==Nl&&T.minFilter!==Bs||T.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ye(R,T){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C),P(T));let ie=T.source,J=f.get(ie);J===void 0&&(J={},f.set(ie,J));let fe=te(T);if(fe!==R.__cacheKey){J[fe]===void 0&&(J[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[fe].usedTimes++;let Se=J[R.__cacheKey];Se!==void 0&&(J[R.__cacheKey].usedTimes--,Se.usedTimes===0&&z(T)),R.__cacheKey=fe,R.__webglTexture=J[fe].texture}return V}function me(R,T,V){return Math.floor(Math.floor(R/V)/T)}function Pe(R,T,V,ie){let fe=R.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,V,ie,T.data);else{fe.sort((Y,pe)=>Y.start-pe.start);let Se=0;for(let Y=1;Y<fe.length;Y++){let pe=fe[Se],he=fe[Y],De=pe.start+pe.count,Ae=me(he.start,T.width,4),Te=me(pe.start,T.width,4);he.start<=De+1&&Ae===Te&&me(he.start+he.count-1,T.width,4)===Ae?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++Se,fe[Se]=he)}fe.length=Se+1;let ce=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),Ne=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let Y=0,pe=fe.length;Y<pe;Y++){let he=fe[Y],De=Math.floor(he.start/4),Ae=Math.ceil(he.count/4),Te=De%T.width,Ge=Math.floor(De/T.width),nt=Ae,ge=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ge),n.texSubImage2D(t.TEXTURE_2D,0,Te,Ge,nt,ge,V,ie,T.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ce),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ne)}}function ke(R,T,V){let ie=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=t.TEXTURE_3D);let J=Ye(R,T),fe=T.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+V);let Se=i.get(fe);if(fe.version!==Se.__version||J===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ge=Dt.getPrimaries(Dt.workingColorSpace),ze=T.colorSpace===Hs?null:Dt.getPrimaries(T.colorSpace),Qe=T.colorSpace===Hs||ge===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment);let re=v(T.image,!1,s.maxTextureSize);re=K(T,re);let Ne=r.convert(T.format,T.colorSpace),Y=r.convert(T.type),pe=E(T.internalFormat,Ne,Y,T.normalized,T.colorSpace,T.isVideoTexture);Xe(ie,T);let he,De=T.mipmaps,Ae=T.isVideoTexture!==!0,Te=Se.__version===void 0||J===!0,Ge=fe.dataReady,nt=b(T,re);if(T.isDepthTexture)pe=x(T.format===zs,T.type),Te&&(Ae?n.texStorage2D(t.TEXTURE_2D,1,pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,pe,re.width,re.height,0,Ne,Y,null));else if(T.isDataTexture)if(De.length>0){Ae&&Te&&n.texStorage2D(t.TEXTURE_2D,nt,pe,De[0].width,De[0].height);for(let ge=0,ze=De.length;ge<ze;ge++)he=De[ge],Ae?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,Ne,Y,he.data):n.texImage2D(t.TEXTURE_2D,ge,pe,he.width,he.height,0,Ne,Y,he.data);T.generateMipmaps=!1}else Ae?(Te&&n.texStorage2D(t.TEXTURE_2D,nt,pe,re.width,re.height),Ge&&Pe(T,re,Ne,Y)):n.texImage2D(t.TEXTURE_2D,0,pe,re.width,re.height,0,Ne,Y,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ae&&Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,pe,De[0].width,De[0].height,re.depth);for(let ge=0,ze=De.length;ge<ze;ge++)if(he=De[ge],T.format!==yi)if(Ne!==null)if(Ae){if(Ge)if(T.layerUpdates.size>0){let Qe=Dp(he.width,he.height,T.format,T.type);for(let Ie of T.layerUpdates){let ot=he.data.subarray(Ie*Qe/he.data.BYTES_PER_ELEMENT,(Ie+1)*Qe/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,Ie,he.width,he.height,1,Ne,ot)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,re.depth,Ne,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,pe,he.width,he.height,re.depth,0,he.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,re.depth,Ne,Y,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,pe,he.width,he.height,re.depth,0,Ne,Y,he.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ae&&Te&&n.texStorage2D(t.TEXTURE_2D,nt,pe,De[0].width,De[0].height);for(let ge=0,ze=De.length;ge<ze;ge++)he=De[ge],T.format!==yi?Ne!==null?Ae?Ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,Ne,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,pe,he.width,he.height,0,he.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,Ne,Y,he.data):n.texImage2D(t.TEXTURE_2D,ge,pe,he.width,he.height,0,Ne,Y,he.data)}else if(T.isDataArrayTexture)if(Ae){if(Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,pe,re.width,re.height,re.depth),Ge)if(T.layerUpdates.size>0){let ge=Dp(re.width,re.height,T.format,T.type);for(let ze of T.layerUpdates){let Qe=re.data.subarray(ze*ge/re.data.BYTES_PER_ELEMENT,(ze+1)*ge/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ze,re.width,re.height,1,Ne,Y,Qe)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ne,Y,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,re.width,re.height,re.depth,0,Ne,Y,re.data);else if(T.isData3DTexture)Ae?(Te&&n.texStorage3D(t.TEXTURE_3D,nt,pe,re.width,re.height,re.depth),Ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ne,Y,re.data)):n.texImage3D(t.TEXTURE_3D,0,pe,re.width,re.height,re.depth,0,Ne,Y,re.data);else if(T.isFramebufferTexture){if(Te)if(Ae)n.texStorage2D(t.TEXTURE_2D,nt,pe,re.width,re.height);else{let ge=re.width,ze=re.height;for(let Qe=0;Qe<nt;Qe++)n.texImage2D(t.TEXTURE_2D,Qe,pe,ge,ze,0,Ne,Y,null),ge>>=1,ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in t){let ge=t.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),re.parentNode!==ge){ge.appendChild(re),d.add(T),ge.onpaint=ze=>{let Qe=ze.changedElements;for(let Ie of d)Qe.includes(Ie.image)&&(Ie.needsUpdate=!0)},ge.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{let Qe=t.RGBA,Ie=t.RGBA,ot=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Qe,Ie,ot,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ae&&Te){let ge=ye(De[0]);n.texStorage2D(t.TEXTURE_2D,nt,pe,ge.width,ge.height)}for(let ge=0,ze=De.length;ge<ze;ge++)he=De[ge],Ae?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ne,Y,he):n.texImage2D(t.TEXTURE_2D,ge,pe,Ne,Y,he);T.generateMipmaps=!1}else if(Ae){if(Te){let ge=ye(re);n.texStorage2D(t.TEXTURE_2D,nt,pe,ge.width,ge.height)}Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,Y,re)}else n.texImage2D(t.TEXTURE_2D,0,pe,Ne,Y,re);_(T)&&T.mipmapsAutoUpdate===!0&&M(ie),Se.__version=fe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function xe(R,T,V){if(T.image.length!==6)return;let ie=Ye(R,T),J=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);let fe=i.get(J);if(J.version!==fe.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);let Se=Dt.getPrimaries(Dt.workingColorSpace),ce=T.colorSpace===Hs?null:Dt.getPrimaries(T.colorSpace),re=T.colorSpace===Hs||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,Y=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let Ie=0;Ie<6;Ie++)!Ne&&!Y?pe[Ie]=v(T.image[Ie],!0,s.maxCubemapSize):pe[Ie]=Y?T.image[Ie].image:T.image[Ie],pe[Ie]=K(T,pe[Ie]);let he=pe[0],De=r.convert(T.format,T.colorSpace),Ae=r.convert(T.type),Te=E(T.internalFormat,De,Ae,T.normalized,T.colorSpace),Ge=T.isVideoTexture!==!0,nt=fe.__version===void 0||ie===!0,ge=J.dataReady,ze=b(T,he);Xe(t.TEXTURE_CUBE_MAP,T);let Qe;if(T.isDepthTexture){if(Te=x(T.format===zs,T.type),nt)if(Ge)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,Te,he.width,he.height);else for(let Ie=0;Ie<6;Ie++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Te,he.width,he.height,0,De,Ae,null)}else if(Ne){Ge&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,Te,he.width,he.height);for(let Ie=0;Ie<6;Ie++){Qe=pe[Ie].mipmaps;for(let ot=0;ot<Qe.length;ot++){let Rt=Qe[ot];T.format!==yi?De!==null?Ge?ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot,0,0,Rt.width,Rt.height,De,Rt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot,Te,Rt.width,Rt.height,0,Rt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot,0,0,Rt.width,Rt.height,De,Ae,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot,Te,Rt.width,Rt.height,0,De,Ae,Rt.data)}}}else{if(Qe=T.mipmaps,Ge&&nt){Qe.length>0&&ze++;let Ie=ye(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,Te,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(Y){Ge?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,pe[Ie].width,pe[Ie].height,De,Ae,pe[Ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Te,pe[Ie].width,pe[Ie].height,0,De,Ae,pe[Ie].data);for(let ot=0;ot<Qe.length;ot++){let Mt=Qe[ot].image[Ie].image;Ge?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot+1,0,0,Mt.width,Mt.height,De,Ae,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot+1,Te,Mt.width,Mt.height,0,De,Ae,Mt.data)}}else{Ge?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,De,Ae,pe[Ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Te,De,Ae,pe[Ie]);for(let ot=0;ot<Qe.length;ot++){let Rt=Qe[ot];Ge?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot+1,0,0,De,Ae,Rt.image[Ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot+1,Te,De,Ae,Rt.image[Ie])}}}_(T)&&T.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),fe.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ee(R,T,V,ie,J,fe){let Se=r.convert(V.format,V.colorSpace),ce=r.convert(V.type),re=E(V.internalFormat,Se,ce,V.normalized,V.colorSpace),Ne=i.get(T),Y=i.get(V);if(Y.__renderTarget=T,!Ne.__hasExternalTextures){let pe=Math.max(1,T.width>>fe),he=Math.max(1,T.height>>fe);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,fe,re,pe,he,T.depth,0,Se,ce,null):n.texImage2D(J,fe,re,pe,he,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),N(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,J,Y.__webglTexture,0,ae(T)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,J,Y.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),T.depthBuffer){let ie=T.depthTexture,J=ie&&ie.isDepthTexture?ie.type:null,fe=x(T.stencilBuffer,J),Se=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;N(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(T),fe,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(T),fe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,fe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{let ie=T.textures;for(let J=0;J<ie.length;J++){let fe=ie[J],Se=r.convert(fe.format,fe.colorSpace),ce=r.convert(fe.type),re=E(fe.internalFormat,Se,ce,fe.normalized,fe.colorSpace);N(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(T),re,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(T),re,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,re,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(R,T,V){let ie=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(T.depthTexture);J.__renderTarget=T;let fe=ie?T.depthTexture.image[0]:T.depthTexture.image;(!J.__webglTexture||fe.width!==T.width||fe.height!==T.height)&&(fe.width=T.width,fe.height=T.height,T.depthTexture.needsUpdate=!0),ie?ne(T.depthTexture,0):oe(T.depthTexture,0);let Se=J.__webglTexture,ce=ae(T),re=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,Ne=T.depthTexture.format===zs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(T.depthTexture.format===Fs)N(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,re,Se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,re,Se,0);else if(T.depthTexture.format===zs)N(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,re,Se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,re,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(R){let T=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){let J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",J)};ie.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=ie}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let ie=0;ie<6;ie++)we(T.__webglFramebuffer[ie],R,ie);else R.texture.mipmaps.length>0?we(T.__webglFramebuffer[0],R,0):we(T.__webglFramebuffer,R,0);else if(V){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=t.createRenderbuffer(),qe(T.__webglDepthbuffer[ie],R,!1);else{let J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,fe)}}else if(R.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),qe(T.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,fe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(R,T,V){let ie=i.get(R);T!==void 0&&Ee(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&_e(R)}function Le(R){let T=R.texture,V=i.get(R),ie=i.get(T);R.addEventListener("dispose",w),P(R);let J=R.textures,fe=R.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=T.version,o.memory.textures++),fe){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let re=0;re<T.mipmaps.length;re++)V.__webglFramebuffer[ce][re]=t.createFramebuffer()}else V.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)V.__webglFramebuffer[ce]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,re=J.length;ce<re;ce++){let Ne=i.get(J[ce]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&N(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){let re=J[ce];V.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ce]);let Ne=r.convert(re.format,re.colorSpace),Y=r.convert(re.type),pe=E(re.internalFormat,Ne,Y,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),he=ae(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,V.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Ee(V.__webglFramebuffer[ce][re],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,re);else Ee(V.__webglFramebuffer[ce],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(T)?M(t.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}else if(Se){for(let ce=0,re=J.length;ce<re;ce++){let Ne=J[ce],Y=i.get(Ne),pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Y.__webglTexture),Xe(pe,Ne),Ee(V.__webglFramebuffer,R,Ne,t.COLOR_ATTACHMENT0+ce,pe,0),_(Ne)&&M(pe)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ie.__webglTexture),Xe(ce,T),T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Ee(V.__webglFramebuffer[re],R,T,t.COLOR_ATTACHMENT0,ce,re);else Ee(V.__webglFramebuffer,R,T,t.COLOR_ATTACHMENT0,ce,0);_(T)?M(ce):T.mipmaps.length>0&&t.texParameteri(ce,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}R.depthBuffer&&_e(R)}function q(R){let T=R.textures;for(let V=0,ie=T.length;V<ie;V++){let J=T[V];if(_(J)&&J.mipmapsAutoUpdate===!0){let fe=S(R),Se=i.get(J).__webglTexture;n.bindTexture(fe,Se),M(fe),n.unbindTexture()}}}let Je=[];function se(R){if(R.samples>0){if(N(R)===!1){let T=R.textures,V=R.width,ie=R.height,J=t.COLOR_BUFFER_BIT,fe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ce=T.length>1;if(ce)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ne]);let Y=i.get(T[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Y,0)}t.blitFramebuffer(0,0,V,ie,0,0,V,ie,J,t.NEAREST),l===!0&&(Je.length=0,Je.push(t.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Je.push(fe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ne]);let Y=i.get(T[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,Y,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function ae(R){return Math.min(s.maxSamples,R.samples)}function N(R){let T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Z(R){let T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function K(R,T){let V=R.colorSpace,ie=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==el&&V!==Hs&&(Dt.getTransfer(V)===Vt?(ie!==yi||J!==xi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",V)),T}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=j,this.getTextureUnits=W,this.setTextureUnits=ee,this.setTexture2D=oe,this.setTexture2DArray=be,this.setTexture3D=Oe,this.setTextureCube=ne,this.rebindTextures=Re,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=N,this.dispose=I}function SA(t,e){function n(i,s=Hs){let r,o=Dt.getTransfer(s);if(i===xi)return t.UNSIGNED_BYTE;if(i===Qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===pp)return t.BYTE;if(i===mp)return t.SHORT;if(i===la)return t.UNSIGNED_SHORT;if(i===Jh)return t.INT;if(i===qi)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===xp)return t.ALPHA;if(i===yp)return t.RGB;if(i===yi)return t.RGBA;if(i===Fs)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===tu)return t.RED;if(i===nu)return t.RED_INTEGER;if(i===fr)return t.RG;if(i===iu)return t.RG_INTEGER;if(i===su)return t.RGBA_INTEGER;if(i===Ol||i===Fl||i===Ul||i===Bl)if(o===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ru||i===ou||i===au||i===lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cu||i===hu||i===uu||i===du||i===fu||i===zl||i===pu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cu||i===hu)return o===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===du)return r.COMPRESSED_R11_EAC;if(i===fu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return r.COMPRESSED_RG11_EAC;if(i===pu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mu||i===gu||i===vu||i===xu||i===yu||i===bu||i===_u||i===Mu||i===wu||i===Su||i===Tu||i===Eu||i===Au||i===Ru)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Su)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Au)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ru)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cu||i===Pu||i===Iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cu)return o===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lu||i===ku||i===Hl||i===Du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
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

}`,$p=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new gl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new $n({vertexShader:TA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kp=class extends os{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new $p,p={},v=n.getContextAttributes(),_=null,M=null,S=[],E=[],x=new He,b=null,P=null,L=new Hn;L.viewport=new fn;let C=new Hn;C.viewport=new fn;let w=[L,C],D=new qh,k=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=S[te];return oe===void 0&&(oe=new $o,S[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=S[te];return oe===void 0&&(oe=new $o,S[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=S[te];return oe===void 0&&(oe=new $o,S[te]=oe),oe.getHandSpace()};function F(te){let oe=E.indexOf(te.inputSource);if(oe===-1)return;let be=S[oe];be!==void 0&&(be.update(te.inputSource,te.frame,c||o),be.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let te=0;te<S.length;te++){let oe=E[te];oe!==null&&(E[te]=null,S[te].disconnect(oe))}k=null,I=null,g.reset();for(let te in p)delete p[te];if(e.setRenderTarget(_),f=null,u=null,d=null,s=null,M=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),P!==null){let te=P.camera;te.fov=P.fov,te.zoom=P.zoom,te.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Oe=null,ne=null;v.depth&&(ne=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=v.stencil?zs:Fs,Oe=v.stencil?io:qi);let Ce={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new gi(u.textureWidth,u.textureHeight,{format:yi,type:xi,depthTexture:new Us(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new gi(f.framebufferWidth,f.framebufferHeight,{format:yi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(te){for(let oe=0;oe<te.removed.length;oe++){let be=te.removed[oe],Oe=E.indexOf(be);Oe>=0&&(E[Oe]=null,S[Oe].disconnect(be))}for(let oe=0;oe<te.added.length;oe++){let be=te.added[oe],Oe=E.indexOf(be);if(Oe===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=E.length){E.push(be),Oe=Ce;break}else if(E[Ce]===null){E[Ce]=be,Oe=Ce;break}if(Oe===-1)break}let ne=S[Oe];ne&&ne.connect(be)}}function X(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let oe=te.near,be=te.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(be=g.depthFar)),D.near=C.near=L.near=oe,D.far=C.far=L.far=be,(k!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,I=D.far),D.layers.mask=te.layers.mask|6,L.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;let Oe=te.parent,ne=D.cameras;X(D,Oe);for(let Ce=0;Ce<ne.length;Ce++)X(ne[Ce],Oe);D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse),P===null&&te.isPerspectiveCamera&&(P={camera:te,fov:te.fov,zoom:te.zoom}),j(te,D,Oe)};function j(te,oe,be){be===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Yo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(te){return p[te]};let W=null;function ee(te,oe){if(h=oe.getViewerPose(c||o),m=oe,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Oe=!1;be.length!==D.cameras.length&&(D.cameras.length=0,Oe=!0);for(let Be=0;Be<be.length;Be++){let Xe=be[Be],Ye=null;if(f!==null)Ye=f.getViewport(Xe);else{let Pe=d.getViewSubImage(u,Xe);Ye=Pe.viewport,Be===0&&(e.setRenderTargetTextures(M,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(M))}let me=w[Be];me===void 0&&(me=new Hn,me.layers.enable(Be),me.viewport=new fn,w[Be]=me),me.matrix.fromArray(Xe.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Xe.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Be===0&&(D.matrix.copy(me.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Oe===!0&&D.cameras.push(me)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Be=d.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,s.renderState)}if(ne&&ne.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<be.length;Be++){let Xe=be[Be].camera;if(Xe){let Ye=p[Xe];Ye||(Ye=new gl,p[Xe]=Ye);let me=d.getCameraImage(Xe);Ye.sourceTexture=me}}}}for(let be=0;be<S.length;be++){let Oe=E[be],ne=S[be];Oe!==null&&ne!==void 0&&ne.update(Oe,oe,c||o)}W&&W(te,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),m=null}let Me=new $v;Me.setAnimationLoop(ee),this.setAnimationLoop=function(te){W=te},this.dispose=function(){}}},AA=new wt,sx=new mt;sx.set(-1,0,0,0,1,0,0,0,1);function RA(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Ip(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,_,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,M=v.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(AA.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sx),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CA(t,e,n,i){let s={},r={};function o(v,_){let M=_.program;i.uniformBlockBinding(v,M,s[v.id])}function a(v,_){let M=s[v.id];M===void 0&&(m(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",g));let S=_.program;i.updateUBOMapping(v,S);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let _=t.createBuffer(),M=v.__size,S=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,M,S),t.bindBuffer(t.UNIFORM_BUFFER,null),_}function c(v){let _=s[v.id],M=v.uniforms,S=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,x=M.length;E<x;E++){let b=M[E];if(Array.isArray(b))for(let P=0,L=b.length;P<L;P++)h(b[P],E,P,S);else h(b,E,0,S)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,_,M,S){if(u(v,_,M,S)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let L=x[P],C=y(L,!0);d(L,v.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,v.__data)}}function d(v,_,M){typeof v=="number"||typeof v=="boolean"?_[M]=v:v.isMatrix3?(_[M]=v.elements[0],_[M+1]=v.elements[1],_[M+2]=v.elements[2],_[M+3]=0,_[M+4]=v.elements[3],_[M+5]=v.elements[4],_[M+6]=v.elements[5],_[M+7]=0,_[M+8]=v.elements[6],_[M+9]=v.elements[7],_[M+10]=v.elements[8],_[M+11]=0):ArrayBuffer.isView(v)?_.set(v.subarray(0,_.length-M),M):v.toArray(_,M)}function u(v,_,M,S){let E=v.value,x=_+"_"+M;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let b=S[x],P=!1;for(let L=0;L<E.length;L++)f(E[L],b,L)===!0&&(P=!0);return P}return f(E,S,x)}function f(v,_,M){if(_[M]===void 0)return typeof v=="number"||typeof v=="boolean"?_[M]=v:ArrayBuffer.isView(v)?_[M]=v.slice():_[M]=v.clone(),!0;{let S=_[M];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return _[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(v){let _=v.uniforms,M=0,S=16;for(let x=0,b=_.length;x<b;x++){let P=Array.isArray(_[x])?_[x]:[_[x]];for(let L=0,C=P.length;L<C;L++){let w=P[L],D=Array.isArray(w.value)?w.value:[w.value],k=Array.isArray(_[x])||Array.isArray(w.value),I=M;for(let z=0,$=D.length;z<$;z++){let X=D[z],j=y(X,k),W=M%S,ee=W%j.boundary,Me=W+ee;M+=ee,Me!==0&&S-Me<j.storage&&(M+=S-Me),z===0&&(I=M),M+=j.storage}let F=w.type==="int"?Int32Array:w.type==="uint"?Uint32Array:Float32Array;w.__data=new F((M-I)/Float32Array.BYTES_PER_ELEMENT),w.__offset=I}}let E=M%S;return E>0&&(M+=S-E),v.__size=M,v.__cache={},this}function y(v,_){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",v),_===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){let _=v.target;_.removeEventListener("dispose",g),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)t.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:p}}var PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),us=null;function IA(){return us===null&&(us=new qr(PA,16,16,fr,$i),us.name="DFG_LUT",us.minFilter=Dn,us.magFilter=Dn,us.wrapS=rs,us.wrapT=rs,us.generateMipmaps=!1,us.needsUpdate=!0),us}var zu=class{constructor(e={}){let{canvas:n=pv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=f,g=new Set([su,iu,nu]),p=new Set([xi,qi,la,io,Qh,eu]),v=new Uint32Array(4),_=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],b=[],P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1,w=null,D=null,k=null,I=null;this._outputColorSpace=xn;let F=0,z=0,$=null,X=-1,j=null,W=new fn,ee=new fn,Me=null,te=new $e(0),oe=0,be=n.width,Oe=n.height,ne=1,Ce=null,Fe=null,Be=new fn(0,0,be,Oe),Xe=new fn(0,0,be,Oe),Ye=!1,me=new $r,Pe=new Sh,ke=!1,xe=!1,Ee=new wt,qe=new G,we=new fn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Le(){return $===null?ne:1}let q=i;function Je(O,Q){return n.getContext(O,Q)}let se,ae,N,Z,K,ye,R,T,V,ie,J,fe,Se,ce,re,Ne,Y,pe,he,De,Ae,Te,Ge;try{let O={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",ze,!1),n.addEventListener("webglcontextrestored",Qe,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),q===null){let Q="webgl2";if(q=Je(Q,O),q===null)throw Je(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(O){throw n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),ft("WebGLRenderer: "+O.message),O}function nt(){se=new GE(q),se.init(),Ae=new SA(q,se),ae=new IE(q,se,e,Ae),N=new MA(q,se),ae.reversedDepthBuffer&&u&&N.buffers.depth.setReversed(!0),D=q.createFramebuffer(),k=q.createFramebuffer(),I=q.createFramebuffer(),Z=new XE(q),K=new lA,ye=new wA(q,se,N,K,ae,Ae,Z),R=new HE(L),T=new qw(q),Te=new CE(q,T),V=new VE(q,T,Z,Te),ie=new qE(q,V,T,Te,Z),pe=new YE(q,ae,ye),re=new LE(K),J=new aA(L,R,se,ae,Te,re),fe=new RA(L,K),Se=new hA,ce=new gA(se),Y=new RE(L,R,N,ie,m,l),Ne=new _A(L,ie,ae),Ge=new CA(q,Z,ae,N),he=new PE(q,se,Z),De=new WE(q,se,Z),Z.programs=J.programs,L.capabilities=ae,L.extensions=se,L.properties=K,L.renderLists=Se,L.shadowMap=Ne,L.state=N,L.info=Z}y!==xi&&(P=new KE(y,n.width,n.height,a,s,r));let ge=new Kp(L,q);this.xr=ge,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let O=se.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=se.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(O){O!==void 0&&(ne=O,this.setSize(be,Oe,!1))},this.getSize=function(O){return O.set(be,Oe)},this.setSize=function(O,Q,ve=!0){if(ge.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}be=O,Oe=Q,n.width=Math.floor(O*ne),n.height=Math.floor(Q*ne),ve===!0&&(n.style.width=O+"px",n.style.height=Q+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,O,Q)},this.getDrawingBufferSize=function(O){return O.set(be*ne,Oe*ne).floor()},this.setDrawingBufferSize=function(O,Q,ve){be=O,Oe=Q,ne=ve,n.width=Math.floor(O*ve),n.height=Math.floor(Q*ve),this.setViewport(0,0,O,Q)},this.setEffects=function(O){if(y===xi){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let Q=0;Q<O.length;Q++)if(O[Q].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(W)},this.getViewport=function(O){return O.copy(Be)},this.setViewport=function(O,Q,ve,le){O.isVector4?Be.set(O.x,O.y,O.z,O.w):Be.set(O,Q,ve,le),N.viewport(W.copy(Be).multiplyScalar(Le()).round())},this.getScissor=function(O){return O.copy(Xe)},this.setScissor=function(O,Q,ve,le){O.isVector4?Xe.set(O.x,O.y,O.z,O.w):Xe.set(O,Q,ve,le),N.scissor(ee.copy(Xe).multiplyScalar(Le()).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(O){N.setScissorTest(Ye=O)},this.setOpaqueSort=function(O){Ce=O},this.setTransparentSort=function(O){Fe=O},this.getClearColor=function(O){return O.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(O=!0,Q=!0,ve=!0){let le=0;if(O){let ue=!1;if($!==null){let Ve=$.texture.format;ue=g.has(Ve)}if(ue){let Ve=$.texture.type,je=p.has(Ve),We=Y.getClearColor(),Ke=Y.getClearAlpha(),et=We.r,gt=We.g,Et=We.b;je?(v[0]=et,v[1]=gt,v[2]=Et,v[3]=Ke,q.clearBufferuiv(q.COLOR,0,v)):(_[0]=et,_[1]=gt,_[2]=Et,_[3]=Ke,q.clearBufferiv(q.COLOR,0,_))}else le|=q.COLOR_BUFFER_BIT}Q&&(le|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ve&&(le|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),w=O},this.dispose=function(){n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Y.dispose(),Se.dispose(),ce.dispose(),ye.dispose(),K.dispose(),R.dispose(),ie.dispose(),V.dispose(),Te.dispose(),Ge.dispose(),J.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",zt),ge.removeEventListener("sessionend",tn),xt.stop()};function ze(O){O.preventDefault(),sl("WebGLRenderer: Context Lost."),C=!0}function Qe(){sl("WebGLRenderer: Context Restored."),C=!1;let O=Z.autoReset,Q=Ne.enabled,ve=Ne.autoUpdate,le=Ne.needsUpdate,ue=Ne.type;nt(),Z.autoReset=O,Ne.enabled=Q,Ne.autoUpdate=ve,Ne.needsUpdate=le,Ne.type=ue}function Ie(O){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ot(O){let Q=O.target;Q.removeEventListener("dispose",ot),Rt(Q)}function Rt(O){Mt(O),K.remove(O)}function Mt(O){let Q=K.get(O).programs;Q!==void 0&&(Q.forEach(function(ve){J.releaseProgram(ve)}),O.isShaderMaterial&&J.releaseShaderCache(O))}this.renderBufferDirect=function(O,Q,ve,le,ue,Ve){Q===null&&(Q=_e);let je=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,We=bn(O,Q,ve,le,ue);N.setMaterial(le,je);let Ke=ve.index,et=1;if(le.wireframe===!0){if(Ke=V.getWireframeAttribute(ve),Ke===void 0)return;et=2}let gt=ve.drawRange,Et=ve.attributes.position,it=gt.start*et,Pt=(gt.start+gt.count)*et;Ve!==null&&(it=Math.max(it,Ve.start*et),Pt=Math.min(Pt,(Ve.start+Ve.count)*et)),Ke!==null?(it=Math.max(it,0),Pt=Math.min(Pt,Ke.count)):Et!=null&&(it=Math.max(it,0),Pt=Math.min(Pt,Et.count));let un=Pt-it;if(un<0||un===1/0)return;Te.setup(ue,le,We,ve,Ke);let $t,Ht=he;if(Ke!==null&&($t=T.get(Ke),Ht=De,Ht.setIndex($t)),ue.isMesh)le.wireframe===!0?(N.setLineWidth(le.wireframeLinewidth*Le()),Ht.setMode(q.LINES)):Ht.setMode(q.TRIANGLES);else if(ue.isLine){let In=le.linewidth;In===void 0&&(In=1),N.setLineWidth(In*Le()),ue.isLineSegments?Ht.setMode(q.LINES):ue.isLineLoop?Ht.setMode(q.LINE_LOOP):Ht.setMode(q.LINE_STRIP)}else ue.isPoints?Ht.setMode(q.POINTS):ue.isSprite&&Ht.setMode(q.TRIANGLES);if(ue.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{let In=ue._multiDrawStarts,st=ue._multiDrawCounts,Bn=ue._multiDrawCount,Ot=Ke?T.get(Ke).bytesPerElement:1,Hi=K.get(le).currentProgram.getUniforms();for(let kt=0;kt<Bn;kt++)Hi.setValue(q,"_gl_DrawID",kt),Ht.render(In[kt]/Ot,st[kt])}else if(ue.isInstancedMesh)Ht.renderInstances(it,un,ue.count);else if(ve.isInstancedBufferGeometry){let In=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,st=Math.min(ve.instanceCount,In);Ht.renderInstances(it,un,st)}else Ht.render(it,un)};function Ft(O,Q,ve,le){w!==null&&O.isNodeMaterial&&w.setObject(le,O),ke===!0&&re.setState(O,ve,!1),O.transparent===!0&&O.side===Nn&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,Qt(O,Q,le),O.side=dr,O.needsUpdate=!0,Qt(O,Q,le),O.side=Nn):Qt(O,Q,le)}this.compile=function(O,Q,ve=null){ve===null&&(ve=O),w!==null&&w.renderStart(O,Q,ve),E=ce.get(ve),E.init(Q),b.push(E),ve.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Q.layers)&&(E.pushLight(ue),ue.castShadow&&E.pushShadow(ue))}),O!==ve&&O.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Q.layers)&&(E.pushLight(ue),ue.castShadow&&E.pushShadow(ue))}),E.setupLights(),w!==null&&w.updateLights(E.state.lightsArray),xe=this.localClippingEnabled,ke=re.init(this.clippingPlanes,xe),ke===!0&&re.setGlobalState(this.clippingPlanes,Q),w!==null&&Ne.render(E.state.shadowsArray,ve,Q);let le=new Set;return O.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;let Ve=ue.material;if(Ve)if(Array.isArray(Ve))for(let je=0;je<Ve.length;je++){let We=Ve[je];Ft(We,ve,Q,ue),le.add(We)}else Ft(Ve,ve,Q,ue),le.add(Ve)}),E=b.pop(),w!==null&&w.renderEnd(),le},this.compileAsync=function(O,Q,ve=null){let le=this.compile(O,Q,ve);return new Promise(ue=>{function Ve(){if(le.forEach(function(je){let Ke=K.get(je).currentProgram;(Ke===void 0||Ke.isReady())&&le.delete(je)}),le.size===0){ue(O);return}setTimeout(Ve,10)}se.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Yt=null;function Jt(O){Yt&&Yt(O)}function zt(){xt.stop()}function tn(){xt.start()}let xt=new $v;xt.setAnimationLoop(Jt),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(O){Yt=O,ge.setAnimationLoop(O),O===null?xt.stop():xt.start()},ge.addEventListener("sessionstart",zt),ge.addEventListener("sessionend",tn),this.render=function(O,Q){if(Q!==void 0&&Q.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;w!==null&&w.renderStart(O,Q);let ve=ge.enabled===!0&&ge.isPresenting===!0,le=P!==null&&($===null||ve)&&P.begin(L,$);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(Q),Q=ge.getCamera()),O.isScene===!0&&O.onBeforeRender(L,O,Q,$),E=ce.get(O,b.length),E.init(Q),E.state.textureUnits=ye.getTextureUnits(),b.push(E),Ee.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Q.isArrayCamera?Pe.setFromArrayCamera(Q):me.setFromProjectionMatrix(Ee,Ii,Q.reversedDepth),xe=this.localClippingEnabled,ke=re.init(this.clippingPlanes,xe),S=Se.get(O,x.length),S.init(),x.push(S),this.info.render.frame++,ge.enabled===!0&&ge.isPresenting===!0){let je=L.xr.getDepthSensingMesh();je!==null&&qt(je,Q,-1/0,L.sortObjects)}qt(O,Q,0,L.sortObjects),S.finish(),w!==null&&w.updateLights(E.state.lightsArray),L.sortObjects===!0&&S.sort(Ce,Fe),Re=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Re&&Y.addToRenderList(S,O),this.info.autoReset===!0&&this.info.reset(),ke===!0&&re.beginShadows();let ue=E.state.shadowsArray;if(Ne.render(ue,O,Q),ke===!0&&re.endShadows(),(le&&P.hasRenderPass())===!1){let je=S.opaque,We=S.transmissive;if(E.setupLights(),Q.isArrayCamera){let Ke=Q.cameras;if(We.length>0)for(let et=0,gt=Ke.length;et<gt;et++){let Et=Ke[et];li(je,We,O,Et)}Re&&Y.render(O);for(let et=0,gt=Ke.length;et<gt;et++){let Et=Ke[et];Ct(S,O,Et,Et.viewport)}}else We.length>0&&li(je,We,O,Q),Re&&Y.render(O),Ct(S,O,Q)}$!==null&&z===0&&(ye.updateMultisampleRenderTarget($),ye.updateRenderTargetMipmap($)),le&&P.end(L),O.isScene===!0&&O.onAfterRender(L,O,Q),Te.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(E=b[b.length-1],ye.setTextureUnits(E.state.textureUnits),ke===!0&&re.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,w!==null&&w.renderEnd()};function qt(O,Q,ve,le){if(O.visible===!1)return;if(O.layers.test(Q.layers)){if(O.isGroup)ve=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Q);else if(O.isLight)E.pushLight(O),O.castShadow&&E.pushShadow(O);else if(O.isSprite){let je=Q.isArrayCamera?Pe:me;if(!O.frustumCulled||O.intersectsFrustum(je)){le&&we.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Ee);let We=ie.update(O),Ke=O.material;Ke.visible&&S.push(O,We,Ke,ve,we.z,null,Q)}}else if(O.isMesh||O.isLine||O.isPoints){let je=Q.isArrayCamera?Pe:me;if(!O.frustumCulled||O.intersectsFrustum(je)){let We=ie.update(O),Ke=O.material;if(le&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),we.copy(O.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),we.copy(We.boundingSphere.center)),we.applyMatrix4(O.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ke)){let et=We.groups;for(let gt=0,Et=et.length;gt<Et;gt++){let it=et[gt],Pt=Ke[it.materialIndex];Pt&&Pt.visible&&S.push(O,We,Pt,ve,we.z,it,Q)}}else Ke.visible&&S.push(O,We,Ke,ve,we.z,null,Q)}}}let Ve=O.children;for(let je=0,We=Ve.length;je<We;je++)qt(Ve[je],Q,ve,le)}function Ct(O,Q,ve,le){let{opaque:ue,transmissive:Ve,transparent:je}=O;E.setupLightsView(ve),ke===!0&&re.setGlobalState(L.clippingPlanes,ve),le&&N.viewport(W.copy(le)),ue.length>0&&Ei(ue,Q,ve),Ve.length>0&&Ei(Ve,Q,ve),je.length>0&&Ei(je,Q,ve),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function li(O,Q,ve,le){if((ve.isScene===!0?ve.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[le.id]===void 0){let it=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[le.id]=new gi(1,1,{generateMipmaps:!0,type:it?$i:xi,minFilter:Bs,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}let Ve=E.state.transmissionRenderTarget[le.id],je=le.viewport||W;Ve.setSize(je.z*L.transmissionResolutionScale,je.w*L.transmissionResolutionScale);let We=L.getRenderTarget(),Ke=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(Ve),L.getClearColor(te),oe=L.getClearAlpha(),oe<1&&L.setClearColor(16777215,.5),L.clear(),Re&&Y.render(ve);let gt=L.toneMapping;L.toneMapping=hs;let Et=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),E.setupLightsView(le),ke===!0&&re.setGlobalState(L.clippingPlanes,le),Ei(O,ve,le),ye.updateMultisampleRenderTarget(Ve),ye.updateRenderTargetMipmap(Ve),se.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Pt=0,un=Q.length;Pt<un;Pt++){let $t=Q[Pt],{object:Ht,geometry:In,material:st,group:Bn}=$t;if(st.side===Nn&&Ht.layers.test(le.layers)){let Ot=st.side;st.side=Tn,st.needsUpdate=!0,nr(Ht,ve,le,In,st,Bn),st.side=Ot,st.needsUpdate=!0,it=!0}}it===!0&&(ye.updateMultisampleRenderTarget(Ve),ye.updateRenderTargetMipmap(Ve))}L.setRenderTarget(We,Ke,et),L.setClearColor(te,oe),Et!==void 0&&(le.viewport=Et),L.toneMapping=gt}function Ei(O,Q,ve){let le=Q.isScene===!0?Q.overrideMaterial:null;for(let ue=0,Ve=O.length;ue<Ve;ue++){let je=O[ue],{object:We,geometry:Ke,group:et}=je,gt=je.material;gt.allowOverride===!0&&le!==null&&(gt=le),We.layers.test(ve.layers)&&nr(We,Q,ve,Ke,gt,et)}}function nr(O,Q,ve,le,ue,Ve){w!==null&&ue.isNodeMaterial&&w.setObject(O,ue),O.onBeforeRender(L,Q,ve,le,ue,Ve),O.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ue.onBeforeRender(L,Q,ve,le,O,Ve),ue.transparent===!0&&ue.side===Nn&&ue.forceSinglePass===!1?(ue.side=Tn,ue.needsUpdate=!0,L.renderBufferDirect(ve,Q,le,ue,O,Ve),ue.side=dr,ue.needsUpdate=!0,L.renderBufferDirect(ve,Q,le,ue,O,Ve),ue.side=Nn):L.renderBufferDirect(ve,Q,le,ue,O,Ve),O.onAfterRender(L,Q,ve,le,ue,Ve)}function yt(O){let Q=0;for(let ve of O)ve.texture!==null&&Q++;return Q}function Qt(O,Q,ve){Q.isScene!==!0&&(Q=_e);let le=K.get(O),ue=E.state.lights,Ve=E.state.shadowsArray,je=ue.state.version,We=J.getParameters(O,ue.state,Ve,Q,ve,E.state.lightProbeGridArray),Ke=J.getProgramCacheKey(We),et=le.programs;le.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?Q.environment:null,le.fog=Q.fog;let gt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;le.envMap=R.get(O.envMap||le.environment,gt),le.envMapRotation=le.environment!==null&&O.envMap===null?Q.environmentRotation:O.envMapRotation,et===void 0&&(O.addEventListener("dispose",ot),et=new Map,le.programs=et,le.programVariants=new Map);let Et=et.get(Ke);if(Et!==void 0){if(le.currentProgram===Et&&le.lightsStateVersion===je)return on(O,We),Et}else We.uniforms=J.getUniforms(O),w!==null&&O.isNodeMaterial&&w.build(O,ve,We),O.onBeforeCompile(We,L),Et=J.acquireProgram(We,Ke),et.set(Ke,Et),le.uniforms=We.uniforms;let it=le.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(it.clippingPlanes=re.uniform),on(O,We),le.needsLights=Pc(O),le.lightsStateVersion=je,le.needsLights&&(it.ambientLightColor.value=ue.state.ambient,it.lightProbe.value=ue.state.probe,it.sunLights.value=ue.state.sun,it.sunLightShadows.value=ue.state.sunShadow,it.directionalLights.value=ue.state.directional,it.directionalLightShadows.value=ue.state.directionalShadow,it.spotLights.value=ue.state.spot,it.spotLightShadows.value=ue.state.spotShadow,it.rectAreaLights.value=ue.state.rectArea,it.ltc_1.value=ue.state.rectAreaLTC1,it.ltc_2.value=ue.state.rectAreaLTC2,it.pointLights.value=ue.state.point,it.pointLightShadows.value=ue.state.pointShadow,it.hemisphereLights.value=ue.state.hemi,it.sunShadowMatrix.value=ue.state.sunShadowMatrix,it.sunShadowCascade.value=ue.state.sunShadowCascade,it.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,it.spotLightMatrix.value=ue.state.spotLightMatrix,it.spotLightMap.value=ue.state.spotLightMap,it.pointShadowMatrix.value=ue.state.pointShadowMatrix),le.numLightProbeGrids=yt(E.state.lightProbeGridArray),le.currentProgram=Et,le.uniformsList=null,Et}function Ai(O,Q,ve,le,ue){let Ve=K.get(O),je=Ve.currentProgram.id+","+le+","+ue,We=Ve.programVariants.get(je);return We===void 0?(We=Qt(O,Q,ve),Ve.programVariants.set(je,We)):(Ve.currentProgram=We,Ve.uniformsList=null,Ve.outputColorSpace=le,Ve.toneMapping=ue),We}function Pn(O){if(O.uniformsList===null){let Q=O.currentProgram.getUniforms();O.uniformsList=ha.seqWithValue(Q.seq,O.uniforms)}return O.uniformsList}function on(O,Q){let ve=K.get(O);ve.outputColorSpace=Q.outputColorSpace,ve.batching=Q.batching,ve.batchingColor=Q.batchingColor,ve.instancing=Q.instancing,ve.instancingColor=Q.instancingColor,ve.instancingMorph=Q.instancingMorph,ve.skinning=Q.skinning,ve.morphTargets=Q.morphTargets,ve.morphNormals=Q.morphNormals,ve.morphColors=Q.morphColors,ve.morphTargetsCount=Q.morphTargetsCount,ve.numClippingPlanes=Q.numClippingPlanes,ve.numIntersection=Q.numClipIntersection,ve.vertexAlphas=Q.vertexAlphas,ve.vertexTangents=Q.vertexTangents,ve.toneMapping=Q.toneMapping}function bn(O,Q,ve,le,ue){Q.isScene!==!0&&(Q=_e),ye.resetTextureUnits();let Ve=Q.fog,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Q.environment:null,We=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Dt.workingColorSpace,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,et=R.get(le.envMap||je,Ke),gt=le.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,Et=!!ve.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),it=!!ve.morphAttributes.position,Pt=!!ve.morphAttributes.normal,un=!!ve.morphAttributes.color,$t=hs;le.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($t=L.toneMapping);let Ht=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,In=Ht!==void 0?Ht.length:0,st=K.get(le),Bn=E.state.lights;if(ke===!0&&(xe===!0||O!==j)){let Kt=O===j&&le.id===X;re.setState(le,O,Kt)}let Ot=!1,Hi=!1;le.version===st.__version?st.needsLights&&st.lightsStateVersion!==Bn.state.version||ue.isBatchedMesh&&st.batching===!1||!ue.isBatchedMesh&&st.batching===!0||ue.isBatchedMesh&&st.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&st.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&st.instancing===!1||!ue.isInstancedMesh&&st.instancing===!0||ue.isSkinnedMesh&&st.skinning===!1||!ue.isSkinnedMesh&&st.skinning===!0||ue.isInstancedMesh&&st.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&st.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&st.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&st.instancingMorph===!1&&ue.morphTexture!==null||st.envMap!==et||le.fog===!0&&st.fog!==Ve||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==re.numPlanes||st.numIntersection!==re.numIntersection)||st.vertexAlphas!==gt||st.vertexTangents!==Et||st.morphTargets!==it||st.morphNormals!==Pt||st.morphColors!==un||st.morphTargetsCount!==In||st.numLightProbeGrids!==yt(E.state.lightProbeGridArray)?Ot=!0:(st.outputColorSpace!==We||st.toneMapping!==$t)&&(Hi=!0):(Ot=!0,st.__version=le.version);let kt=st.currentProgram;(Ot===!0||Hi===!0)&&(kt=Hi===!0?Ai(le,Q,ue,We,$t):Qt(le,Q,ue),w&&le.isNodeMaterial&&w.onUpdateProgram(le,kt,st));let So=!1,Gi=!1,Ri=!1,It=kt.getUniforms(),vn=st.uniforms;if(N.useProgram(kt.program)&&(So=!0,Gi=!0,Ri=!0),le.id!==X&&(X=le.id,Gi=!0),So||j!==O){N.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),It.setValue(q,"projectionMatrix",O.projectionMatrix),It.setValue(q,"viewMatrix",O.matrixWorldInverse);let an=It.map.cameraPosition;an!==void 0&&an.setValue(q,qe.setFromMatrixPosition(O.matrixWorld)),ae.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&It.setValue(q,"isOrthographic",O.isOrthographicCamera===!0),j!==O&&(j=O,Gi=!0,Ri=!0)}if(st.needsLights&&(Bn.state.sunShadowMap.length>0&&It.setValue(q,"sunShadowMap",Bn.state.sunShadowMap,ye),Bn.state.directionalShadowMap.length>0&&It.setValue(q,"directionalShadowMap",Bn.state.directionalShadowMap,ye),Bn.state.spotShadowMap.length>0&&It.setValue(q,"spotShadowMap",Bn.state.spotShadowMap,ye),Bn.state.pointShadowMap.length>0&&It.setValue(q,"pointShadowMap",Bn.state.pointShadowMap,ye)),ue.isSkinnedMesh){It.setOptional(q,ue,"bindMatrix"),It.setOptional(q,ue,"bindMatrixInverse");let Kt=ue.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),It.setValue(q,"boneTexture",Kt.boneTexture,ye))}ue.isBatchedMesh&&(It.setOptional(q,ue,"batchingTexture"),It.setValue(q,"batchingTexture",ue._matricesTexture,ye),It.setOptional(q,ue,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",ue._indirectTexture,ye),It.setOptional(q,ue,"batchingColorTexture"),ue._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",ue._colorsTexture,ye));let Jn=ve.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&pe.update(ue,ve,kt),(Gi||st.receiveShadow!==ue.receiveShadow)&&(st.receiveShadow=ue.receiveShadow,It.setValue(q,"receiveShadow",ue.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Q.environment!==null&&(vn.envMapIntensity.value=Q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=IA()),Gi){if(It.setValue(q,"toneMappingExposure",L.toneMappingExposure),st.needsLights&&uf(vn,Ri),Ve&&le.fog===!0&&fe.refreshFogUniforms(vn,Ve),fe.refreshMaterialUniforms(vn,le,ne,Oe,E.state.transmissionRenderTarget[O.id]),st.needsLights&&st.numLightProbeGrids>0){let Kt=M,an=0;for(let ci of E.state.lightProbeGridArray)ci.texture!==null&&(Kt.textures[an]=ci.texture,Kt.min[an]=ci.boundingBox.min,Kt.max[an]=ci.boundingBox.max,Kt.resolution[an]=ci.resolution,an++);for(let ci in Kt)Kt[ci].length=an;vn.probesSH.value=Kt.textures,vn.probesMin.value=Kt.min,vn.probesMax.value=Kt.max,vn.probesResolution.value=Kt.resolution}ha.upload(q,Pn(st),vn,ye)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(ha.upload(q,Pn(st),vn,ye),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&It.setValue(q,"center",ue.center),It.setValue(q,"modelViewMatrix",ue.modelViewMatrix),It.setValue(q,"normalMatrix",ue.normalMatrix),It.setValue(q,"modelMatrix",ue.matrixWorld),le.uniformsGroups!==void 0){let Kt=le.uniformsGroups;for(let an=0,ci=Kt.length;an<ci;an++){let Br=Kt[an];Ge.update(Br,kt),Ge.bind(Br,kt)}}return kt}function uf(O,Q){O.ambientLightColor.needsUpdate=Q,O.lightProbe.needsUpdate=Q,O.sunLights.needsUpdate=Q,O.sunLightShadows.needsUpdate=Q,O.directionalLights.needsUpdate=Q,O.directionalLightShadows.needsUpdate=Q,O.pointLights.needsUpdate=Q,O.pointLightShadows.needsUpdate=Q,O.spotLights.needsUpdate=Q,O.spotLightShadows.needsUpdate=Q,O.rectAreaLights.needsUpdate=Q,O.hemisphereLights.needsUpdate=Q}function Pc(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(O,Q,ve){let le=K.get(O);le.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),K.get(O.texture).__webglTexture=Q,K.get(O.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ve,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,Q){let ve=K.get(O);ve.__webglFramebuffer=Q,ve.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(O,Q=0,ve=0){$=O,F=Q,z=ve;let le=null,ue=!1,Ve=!1;if(O){let We=K.get(O);if(We.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(q.FRAMEBUFFER,We.__webglFramebuffer),W.copy(O.viewport),ee.copy(O.scissor),Me=O.scissorTest,N.viewport(W),N.scissor(ee),N.setScissorTest(Me),X=-1;return}else if(We.__webglFramebuffer===void 0)ye.setupRenderTarget(O);else if(We.__hasExternalTextures)ye.rebindTextures(O,K.get(O.texture).__webglTexture,K.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let gt=O.depthTexture;if(We.__boundDepthTexture!==gt){if(gt!==null&&K.has(gt)&&(O.width!==gt.image.width||O.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(O)}}let Ke=O.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ve=!0);let et=K.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(et[Q])?le=et[Q][ve]:le=et[Q],ue=!0):O.samples>0&&ye.useMultisampledRTT(O)===!1?le=K.get(O).__webglMultisampledFramebuffer:Array.isArray(et)?le=et[ve]:le=et,W.copy(O.viewport),ee.copy(O.scissor),Me=O.scissorTest}else W.copy(Be).multiplyScalar(ne).floor(),ee.copy(Xe).multiplyScalar(ne).floor(),Me=Ye;if(ve!==0&&(le=D),N.bindFramebuffer(q.FRAMEBUFFER,le)&&N.drawBuffers(O,le),N.viewport(W),N.scissor(ee),N.setScissorTest(Me),ue){let We=K.get(O.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Q,We.__webglTexture,ve)}else if(Ve){let We=Q;for(let Ke=0;Ke<O.textures.length;Ke++){let et=K.get(O.textures[Ke]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ke,et.__webglTexture,ve,We)}}else if(O!==null&&ve!==0){let We=K.get(O.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,We.__webglTexture,ve)}X=-1};function wo(O){let Q=K.get(O);return(Q.__readFormat!==O.format||Q.__readType!==O.type)&&(Q.__readFormat=O.format,Q.__readType=O.type,Q.__formatReadable=ae.textureFormatReadable(O.format),Q.__typeReadable=ae.textureTypeReadable(O.type)),Q}this.readRenderTargetPixels=function(O,Q,ve,le,ue,Ve,je,We=0){if(!(O&&O.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=K.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&je!==void 0&&(Ke=Ke[je],Array.isArray(Ke)&&(Ke=Ke[0])),Ke){N.bindFramebuffer(q.FRAMEBUFFER,Ke);try{let et=O.textures[We],gt=et.format,Et=et.type;O.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);let it=wo(et);if(it.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=O.width-le&&ve>=0&&ve<=O.height-ue&&q.readPixels(Q,ve,le,ue,Ae.convert(gt),Ae.convert(Et),Ve)}finally{let et=$!==null?K.get($).__webglFramebuffer:null;N.bindFramebuffer(q.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(O,Q,ve,le,ue,Ve,je,We=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=K.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&je!==void 0&&(Ke=Ke[je],Array.isArray(Ke)&&(Ke=Ke[0])),Ke)if(Q>=0&&Q<=O.width-le&&ve>=0&&ve<=O.height-ue){N.bindFramebuffer(q.FRAMEBUFFER,Ke);let et=O.textures[We],gt=et.format,Et=et.type;O.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);let it=wo(et);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Pt),q.bufferData(q.PIXEL_PACK_BUFFER,Ve.byteLength,q.STREAM_READ),q.readPixels(Q,ve,le,ue,Ae.convert(gt),Ae.convert(Et),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let un=$!==null?K.get($).__webglFramebuffer:null;N.bindFramebuffer(q.FRAMEBUFFER,un);let $t=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await gv(q,$t,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Pt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ve),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Pt),q.deleteSync($t),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,Q=null,ve=0){let le=Math.pow(2,-ve),ue=Math.floor(O.image.width*le),Ve=Math.floor(O.image.height*le),je=Q!==null?Q.x:0,We=Q!==null?Q.y:0;ye.setTexture2D(O,0),q.copyTexSubImage2D(q.TEXTURE_2D,ve,0,0,je,We,ue,Ve),N.unbindTexture()},this.copyTextureToTexture=function(O,Q,ve=null,le=null,ue=0,Ve=0){let je,We,Ke,et,gt,Et,it,Pt,un,$t=O.isCompressedTexture?O.mipmaps[Ve]:O.image;if(ve!==null)je=ve.max.x-ve.min.x,We=ve.max.y-ve.min.y,Ke=ve.isBox3?ve.max.z-ve.min.z:1,et=ve.min.x,gt=ve.min.y,Et=ve.isBox3?ve.min.z:0;else{let It=Math.pow(2,-ue);je=Math.floor($t.width*It),We=Math.floor($t.height*It),O.isDataArrayTexture?Ke=$t.depth:O.isData3DTexture?Ke=Math.floor($t.depth*It):Ke=1,et=0,gt=0,Et=0}le!==null?(it=le.x,Pt=le.y,un=le.z):(it=0,Pt=0,un=0);let Ht=Ae.convert(Q.format),In=Ae.convert(Q.type),st;Q.isData3DTexture?(ye.setTexture3D(Q,0),st=q.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ye.setTexture2DArray(Q,0),st=q.TEXTURE_2D_ARRAY):(ye.setTexture2D(Q,0),st=q.TEXTURE_2D),N.activeTexture(q.TEXTURE0),N.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),N.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),N.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);let Bn=N.getParameter(q.UNPACK_ROW_LENGTH),Ot=N.getParameter(q.UNPACK_IMAGE_HEIGHT),Hi=N.getParameter(q.UNPACK_SKIP_PIXELS),kt=N.getParameter(q.UNPACK_SKIP_ROWS),So=N.getParameter(q.UNPACK_SKIP_IMAGES);N.pixelStorei(q.UNPACK_ROW_LENGTH,$t.width),N.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$t.height),N.pixelStorei(q.UNPACK_SKIP_PIXELS,et),N.pixelStorei(q.UNPACK_SKIP_ROWS,gt),N.pixelStorei(q.UNPACK_SKIP_IMAGES,Et);let Gi=O.isDataArrayTexture||O.isData3DTexture,Ri=Q.isDataArrayTexture||Q.isData3DTexture;if(O.isDepthTexture){let It=K.get(O),vn=K.get(Q),Jn=K.get(It.__renderTarget),Kt=K.get(vn.__renderTarget);N.bindFramebuffer(q.READ_FRAMEBUFFER,Jn.__webglFramebuffer),N.bindFramebuffer(q.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let an=0;an<Ke;an++)Gi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.get(O).__webglTexture,ue,Et+an),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.get(Q).__webglTexture,Ve,un+an)),q.blitFramebuffer(et,gt,et+je,gt+We,it,Pt,it+je,Pt+We,q.DEPTH_BUFFER_BIT,q.NEAREST);N.bindFramebuffer(q.READ_FRAMEBUFFER,null),N.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ue!==0||O.isRenderTargetTexture||K.has(O)){let It=K.get(O),vn=K.get(Q);N.bindFramebuffer(q.READ_FRAMEBUFFER,k),N.bindFramebuffer(q.DRAW_FRAMEBUFFER,I);for(let Jn=0;Jn<Ke;Jn++)Gi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,It.__webglTexture,ue,Et+Jn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,ue),Ri?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,vn.__webglTexture,Ve,un+Jn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,vn.__webglTexture,Ve),ue!==0?q.blitFramebuffer(et,gt,et+je,gt+We,it,Pt,it+je,Pt+We,q.COLOR_BUFFER_BIT,q.NEAREST):Ri?q.copyTexSubImage3D(st,Ve,it,Pt,un+Jn,et,gt,je,We):q.copyTexSubImage2D(st,Ve,it,Pt,et,gt,je,We);N.bindFramebuffer(q.READ_FRAMEBUFFER,null),N.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ri?O.isDataTexture||O.isData3DTexture?q.texSubImage3D(st,Ve,it,Pt,un,je,We,Ke,Ht,In,$t.data):Q.isCompressedArrayTexture?q.compressedTexSubImage3D(st,Ve,it,Pt,un,je,We,Ke,Ht,$t.data):q.texSubImage3D(st,Ve,it,Pt,un,je,We,Ke,Ht,In,$t):O.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ve,it,Pt,je,We,Ht,In,$t.data):O.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ve,it,Pt,$t.width,$t.height,Ht,$t.data):q.texSubImage2D(q.TEXTURE_2D,Ve,it,Pt,je,We,Ht,In,$t);N.pixelStorei(q.UNPACK_ROW_LENGTH,Bn),N.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ot),N.pixelStorei(q.UNPACK_SKIP_PIXELS,Hi),N.pixelStorei(q.UNPACK_SKIP_ROWS,kt),N.pixelStorei(q.UNPACK_SKIP_IMAGES,So),Ve===0&&Q.generateMipmaps===!0&&Q.mipmapsAutoUpdate===!0&&q.generateMipmap(st),N.unbindTexture()},this.initRenderTarget=function(O){K.get(O).__webglFramebuffer===void 0&&ye.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?ye.setTextureCube(O,0):O.isData3DTexture?ye.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?ye.setTexture2DArray(O,0):ye.setTexture2D(O,0),N.unbindTexture()},this.resetState=function(){F=0,z=0,$=null,N.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}};var H={outlinePx:3,render:{outlineWidth:1.5},lightDir:[.45,.8,.35],shadowLift:.45,camera:{fov:70,right:.55,up:1.55,back:2.6,aim:{fov:50,back:1.4},sprint:{fov:80,up:1.25,back:2.9,shakeWeight:1},coverLow:{fov:70,right:.55,up:1,back:1.9},coverTall:{fov:70,right:.65,up:1.35,back:1.9},downed:{fov:70,up:.8,back:2.4},bump:{amount:.5,halfLife:.07},slamShake:{amount:.12,time:.26,hz:24},slamFovKick:4,slamFovHalfLife:.12,objectiveTurnTime:.4,sustainHalfLife:.06,recoil:{halfLife:.09,max:6},blendHalfLife:.07,holdTime:.6,holdRange:100,followHalfLife:.04,sideHalfLife:.12,shake:{amp:.025,hz:9},probeRadius:.22,minBack:.35,wallReturnHalfLife:.18,pitchMin:-1.1,pitchMax:1.2,headHideDist:.45,headHideMargin:.08},look:{mouse:.0022,pad:{yawRate:3.2,pitchRate:2.2,expo:1.8,assist:.6},aimScale:.6,invertY:!1},move:{radius:.35,height:1.8,jog:4.5,aimWalk:2.2,sprint:7.5,accelTime:.25,stopTime:.16,turnRate:10,aimTurnRate:14,sprintTurnRate:2.1,rollDistance:5,rollTime:.55,rollEase:1.6,rollBuffer:.15,tapMax:.18,stickSprintMin:.5,faceMinSpeed:.2,sprintHeadingMinSpeed:.5,runClipMinSpeed:.3,runRateMin:.5,runRateMax:2.2,sprintRateMin:.8,sprintRateMax:2.2,stepEvery:1.6,stepEverySprint:2.4,crawlSpeed:1,crawlTurnRate:4},cover:{grabRange:2.5,grabAngle:50,grabViewAngle:80,grabSlack:.5,grabMinTilt:.2,gap:.03,endInset:.2,minLength:.3,slideSpeed:14,slideMinTime:.06,slideMaxTime:.25,slideTurnRate:20,moveSpeed:3,alongDeadzone:.2,leaveTilt:.5,leaveAngle:55,endLeaveTime:.3,cornerZone:.3,popTime:.12,blindTime:.08,popShift:.55,pushAngle:40,lowDrawBack:.38,blindDrawBack:.15,vaultTime:.5,vaultMaxDepth:1,vaultHop:.6,vaultExitSpeed:3,swapRange:3,swapSpeed:9,swapAngle:30,swapMaxOffset:.6,slamSquash:.32,slamSquashTime:.2,thudVolume:1,autoSlam:1,autoAngle:40,autoDist:.25,autoMinTilt:.7,autoMinSpeed:2.5,autoTime:.08},weapons:{regret:{mag:50,reserveStart:250,reserveMax:400,infiniteReserve:0,auto:1,rate:9,damage:16,headMult:2,range:60,spreadAim:.8,spreadHip:4,spreadBlind:22.4,bloomPerShot:.25,bloomMax:2,bloomRecover:1.5,kickPitch:.98,kickYaw:.25,reloadTime:2.2,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.35,jamPenalty:.9,perfectDamage:1.1,switchTime:.35},pistol:{mag:12,reserveStart:0,reserveMax:0,infiniteReserve:1,auto:0,rate:4,damage:30,headMult:2.5,range:50,spreadAim:.25,spreadHip:1.56,spreadBlind:13,bloomPerShot:.8,bloomMax:2.5,bloomRecover:6,kickPitch:1.6,kickYaw:.4,reloadTime:1.4,perfectStart:.38,perfectEnd:.46,goodStart:.3,goodEnd:.62,perfectFinish:.1,goodFinish:.3,jamPenalty:.8,perfectDamage:1.1,switchTime:.3}},combat:{fireBuffer:.12,autoReload:1,minRate:.1,minReloadTime:.05,muzzleUp:1.35,muzzleRight:.22,muzzleForward:.55,blindLift:.15,blindReach:.15,hitPad:.05,crateRadius:1,crouchHead:.7,crouchBodyTop:.45,shoulderDrop:.25,pickupRadius:.8},health:{max:100,regenDelay:3,regenTime:3,downedTime:12,standInRevive:0,reviveTime:3,reviveHealth:.5,giveUpHold:1,godMode:0},melee:{holdTime:.2,bashTime:.45,bashHitAt:.15,bashRange:1.8,bashAngle:60,bashDamage:30,bashLunge:.6,bashCooldown:.6,revSpeed:2.5,cutterReach:1.1,cutterAngle:50,cutTime:1.2,finishTime:.7,executeRange:1.6,executeAngle:70,promptRange:4,cutterSpin:40},grenade:{carry:4,start:4,throwSpeed:13,throwLift:10,gravity:12,ballRadius:.12,restitution:.35,friction:.6,fuse:1.6,radius:4,damage:160,killRadius:1.2,killDamage:200,selfDamage:.5,padReach:.8,arcTime:2,throwTime:.35},dummy:{health:100,respawnTime:3,railSpeed:1.5},associate:{radius:.35,height:1.8,pointSpacing:.8,reserveRadius:1,popShift:.55,linkMax:7,health:100,runSpeed:4.2,turnRate:10,arriveDist:.15,stuckTime:1,popTime:.15,telegraphTime:.6,burstTime:1.6,rate:5,damage:5,range:30,spread:2.5,moveSpread:4,aimLag:.2,suppressChance:.5,suppressTime:1.2,suppressRate:4,suppressMiss:1.5,suppressSpread:8,coverWaitMin:.8,coverWaitMax:2,magBursts:3,reloadTime:2,flinchTime:.25,minRange:5,preferRange:12,maxRange:24,relocateCheck:.5,relocateAfter:12,ammoDrop:25,muzzleUp:1.35,downChance:.35,downedCrawl:.8,bleedTime:15,reviveTime:2.5,reviveHealth:.4,reviveRange:12,kneelReach:.8,staggerTime:.9,diveWarn:1,diveRadius:4.5,diveChance:.75,diveReaction:.25,diveDistance:3,diveTime:.6},pad:{radius:1.1,openAfterKills:2,openAfterKillsSmoothie:3,openAfter:25,interval:5,maxAlive:2,total:6,riseTime:.8,trainerShare:0,trainerShareSmoothie:.5,trainerShareBoss:.4},trainer:{health:130,scaleW:1.2,scaleH:1.1,runSpeed:6.2,turnRate:12,maxAlive:3,swingRange:1.6,swingSlack:.4,swingArc:120,windup:.5,lockTime:.15,swingTime:.3,recover:.8,swingGap:.6,damage:30,tobbleDamage:30,knockback:1.6,knockTime:.35,staggerTime:.8,preferDoc:.6,retargetTime:.4,repathTime:.5,avoidRadius:1.8,avoidWeight:1.5,stuckTime:.6,diveChance:.4,barkChance:.5},tobble:{enabled:1,scale:.7,radius:.25,height:1.26,health:150,regenDelay:3,regenTime:3,runSpeed:5,turnRate:10,followMin:2,followMax:6,personalSpace:1.2,lofClear:.8,lofRange:20,sidestepReact:.4,sidestepDist:1.2,popTime:.15,popLift:.15,muzzleUp:1.1,coverWaitMin:.6,coverWaitMax:1.6,burstTime:1.2,rate:4,damage:9,spread:3,range:30,reviveMaxThreats:2,reviveWaitMax:4,reviveRange:1,reviveTime:3,reviveHealth:.5,playerReviveTime:1.5,playerReviveRange:1.5,crawlSpeed:.5,complainEvery:6,recheckTime:.5,arriveDist:.15},director:{tokens:2,casualTokens:1,casual:0,tokenCooldown:1,tokenMaxHold:3,requestWindow:.25,pushAfter:6,flankAfter:10,stayRadius:2.5,flankAngle:60,flankMaxAngle:120,slotReuse:1,maxEnemies:8},feedback:{flashTime:.05,flashSize:.35,tracerTime:.05,tracerWidth:.025,sparkTime:.25,sparkCount:4,gelTime:.5,gelCount:6,gelSpeed:3,killGelCount:18,receiptCount:8,receiptTime:1.2,gravity:9.8,hitMarkerTime:.12,killMarkerTime:.3,reloadResultTime:.6,lowAmmoFrac:.2,coverReticleOpacity:.5,stepDip:.015,stepVolume:.3,reticleMinGap:6,shotVolume:.55,hitVolume:.3,killVolume:.45,reloadVolume:.35,gunSquash:.18,gunSquashTime:.08,gunKick:.05,bodyKick:.04,dummyBurstTime:.12,dummyRespawnPop:.2,faceMaxOpacity:.85,edgeMaxOpacity:.55,hitFlashTime:.4,hitKick:.5,hurtVolume:.45,enemyFlashSize:.3,enemyTracerTime:.08,enemyTracerWidth:.04,glintSize:.12,blasterVolume:.3,chargeVolume:.25,pickupVolume:.35,barkTime:2.5,barkGap:4,barkMinShow:1.2,bashVolume:.6,cutVolume:.5,throwVolume:.45,clankVolume:.35,boomVolume:.7,saunaVolume:.4,reviveVolume:.4,tobbleShotVolume:.25,blastSize:2.5,blastTime:.35,executeShake:.05,cutGelEvery:.05,arcDot:.06,coverGlow:1,coverGlowOpacity:.9,coverGlowFade:.15,coverGlowLength:3,coverGlowHz:2.5,slamHitstop:.06,hitstopScale:.05,slamDust:8,slamDebris:6,rumble:1,slamRumble:.8,slamRumbleTime:.18,blindDrift:6,blindDriftHz:.8,blindDriftRamp:.5,blindShake:2,blindShakeAmp:.012,blindFlail:.35,blindFlailHz:9,motorVolume:.35,motorRevTime:.8,revShake:.006,revRumble:.3,revSparkEvery:.07,revSparkCount:2,discScale:1.9,discBlur:.4,grindShake:.03,grindZoom:6,grindPull:.35,grindGelCount:6,grindSparkCount:3,executeJitter:.05,grindRumble:.7,hint:1,hintTime:4,hintFade:.4,hintCoverDelay:6,reloadBarScale:1.6,reloadBarGap:28,reloadPulseHz:3,reloadAlertScale:1.5,reloadFlashScale:1.8,reloadTickVolume:.3,reloadTickLead:.3,reloadTickSlow:.25,reloadTickFast:.06},run:{fadeOut:.6,blackHold:.25,fadeIn:.6,gateReach:1.6,hoursTime:6,gateOpenTime:.8,attractSpeed:.12,attractMargin:6,attractHeight:10,cardTime:3.5,defeatCardTime:2.4,cardSkipDelay:.7},boss:{health:4500,scale:2,crouchY:.5,headMult:2,phase2At:.66,phase3At:.33,popTime:.5,telegraphTime:1,burstTime:2.4,rate:5,damage:6,spread:2.5,aimLag:.25,muzzleUp:1.35,coverWaitMin:1.2,coverWaitMax:2.2,shiftTime:.8,lobEvery:2,lobWindup:1.2,lobFlight:1.5,lobRecover:.7,lobRadius:2.5,lobDamage:32,lobTobbleDamage:32,lobFalloff:.5,retreatSpeed:4.5,returnSpeed:4.5,minHide:2,fastTelegraph:.8,fastBurstTime:2,fastRate:7,fastWaitMin:.5,fastWaitMax:1.1},ending:{deathDelay:2.2,deskReach:2.6,holdTime:1,card1Time:2.2,card2Time:6,card3Time:3.4,skipLock:.7,finalLock:1.2}};function Vu({step:t,render:e,before:n,timeScale:i,hz:s=60,maxSteps:r=5}){let o=1/s,a=0,l=0,c=null,h=!1;function d(g){if(!(g>0)||!Number.isFinite(g))return;n&&n(g);let p=i?i(g):1;(!(p>=0)||!Number.isFinite(p))&&(p=1),a+=g*p;let v=0;for(;a>=o&&v<r;)t(o),a-=o,v++;a>=o&&(a=0),e(Math.min(a/o,1-Number.EPSILON),g,p)}function u(g){if(h){try{c!==null&&d((g-c)/1e3)}catch(p){throw y(),p}c=g,h&&(l=requestAnimationFrame(u))}}function f(){document.visibilityState==="visible"&&(c=null)}function m(){h||(h=!0,c=null,document.addEventListener("visibilitychange",f),l=requestAnimationFrame(u))}function y(){h=!1,cancelAnimationFrame(l),document.removeEventListener("visibilitychange",f)}return{advance:d,start:m,stop:y}}var Zp=Object.freeze(["aim","fire","cover","sprint","reload","melee","interact","grenade","weapon1","weapon2","weapon3","weaponNext","weaponPrev","objective","pause","tacCom","equipKb","controls"]),LA={Space:"cover",ShiftLeft:"sprint",ShiftRight:"sprint",KeyR:"reload",KeyF:"melee",KeyE:"interact",KeyG:"grenade",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Tab:"objective",Escape:"pause"},kA={0:"fire",2:"aim"},DA=Object.freeze({0:"cover",1:"melee",2:"interact",3:"objective",4:"tacCom",5:"reload",6:"aim",7:"fire",8:"controls",9:"pause",12:"equipKb",13:"weapon3",14:"weapon2",15:"weapon1"}),rx=DA,ox={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},NA=new Set(["checkbox","radio","button","submit","reset","range","color","file","image"]);function jp(t){if(!t||typeof t.tagName!="string")return!1;let e=t.tagName.toUpperCase();return e==="TEXTAREA"?!0:e==="INPUT"?!NA.has(String(t.type||"text").toLowerCase()):!!t.isContentEditable}function ax(t){return LA[t]||null}function lx(t){return kA[t]||null}function da(){let t={};for(let e of Zp)t[e]=!1;return t}function cx(t,e,n=.15){let i=Math.hypot(t,e);if(i<n)return[0,0];let s=Math.min(1,(i-n)/(1-n))/i;return[t*s,e*s]}function OA(t){if(!t||!t.connected)return{ok:!1,reason:"none"};if(t.mapping!=="standard"||!t.buttons||t.buttons.length<16||!t.axes||t.axes.length<4)return{ok:!1,reason:"unrecognised"};let[e,n]=cx(t.axes[0],t.axes[1]),[i,s]=cx(t.axes[2],t.axes[3]),r=da();for(let o in rx){let a=t.buttons[o];r[rx[o]]=o==="6"||o==="7"?a.value>.5:!!a.pressed}return{ok:!0,moveX:e,moveY:n,lookX:i,lookY:s,held:r}}function FA(t){t.downCodes&&t.downCodes.clear(),t.downButtons&&t.downButtons.clear(),t.latched&&t.latched.clear(),t.held=t.held||{};for(let e of Zp)t.held[e]=!1;for(let e in t.held)t.held[e]=!1;return t.lookDX=0,t.lookDY=0,t.lookX=0,t.lookY=0,t.moveX=0,t.moveY=0,t}function Wu(t){let e={downCodes:new Set,downButtons:new Set,latched:new Set,held:da(),lookDX:0,lookDY:0,lookX:0,lookY:0,moveX:0,moveY:0},{downCodes:n,downButtons:i,latched:s}=e,r="kbm",o="none",a=da();t.tabIndex<0&&(t.tabIndex=0);let l=()=>document.pointerLockElement===t,c=()=>l()||document.activeElement===t;function h(){FA(e)}function d(S){if(jp(S.target))return;let E=ax(S.code);(E||S.code in ox)&&(c()&&(S.code==="Tab"||S.code==="Space")&&S.preventDefault(),r="kbm",!S.repeat&&!n.has(S.code)&&E&&s.add(E),n.add(S.code))}function u(S){n.delete(S.code)}function f(S){S.target===t&&t.focus();let E=lx(S.button);E&&(r="kbm",i.has(S.button)||s.add(E),i.add(S.button))}function m(S){i.delete(S.button)}function y(S){l()&&(r="kbm",e.lookDX+=S.movementX||0,e.lookDY+=S.movementY||0)}function g(S){!c()||!S.deltaY||(r="kbm",s.add(S.deltaY>0?"weaponNext":"weaponPrev"),S.preventDefault())}function p(S){S.preventDefault()}function v(){l()||h()}window.addEventListener("keydown",d),window.addEventListener("keyup",u),window.addEventListener("mouseup",m),window.addEventListener("blur",h),document.addEventListener("mousemove",y),document.addEventListener("pointerlockchange",v),t.addEventListener("mousedown",f),t.addEventListener("wheel",g,{passive:!1}),t.addEventListener("contextmenu",p);function _(){let S=[];try{S=navigator.getGamepads&&navigator.getGamepads()||[]}catch{S=[]}let E=null;for(let b of S)if(b&&b.connected){E=b;break}let x=OA(E);return o=x.ok?E.id:x.reason==="none"?"none":"unrecognised controller",x}function M(){let S={moveX:0,moveY:0,lookDX:e.lookDX,lookDY:e.lookDY,lookX:0,lookY:0,held:da(),pressed:da()};e.lookDX=0,e.lookDY=0;for(let b of n){let P=ax(b);P&&(S.held[P]=!0);let L=ox[b];L&&(S.moveX+=L[0],S.moveY+=L[1])}for(let b of i){let P=lx(b);P&&(S.held[P]=!0)}let E=Math.hypot(S.moveX,S.moveY);E>1&&(S.moveX/=E,S.moveY/=E);for(let b of s)S.pressed[b]=!0;s.clear();let x=_();if(x.ok){S.lookX=x.lookX,S.lookY=x.lookY;let b=x.moveX!==0||x.moveY!==0||x.lookX!==0||x.lookY!==0;for(let L of Zp)x.held[L]&&(b=!0,S.held[L]=!0,a[L]||(S.pressed[L]=!0));a=x.held,S.moveX+=x.moveX,S.moveY+=x.moveY;let P=Math.hypot(S.moveX,S.moveY);P>1&&(S.moveX/=P,S.moveY/=P),b&&(r="pad")}else a=da();return S}return{poll:M,requestLock(){try{let S=t.requestPointerLock&&t.requestPointerLock();S&&typeof S.catch=="function"&&S.catch(()=>{})}catch{}},isLocked:l,device:()=>r,padStatus:()=>o}}function ux(t,e,n=14){let i=t;return e>20?i-=.1:e<n&&(i+=.05),Math.round(Math.min(1,Math.max(.5,i))*100)/100}var UA=2e3,hx=1e4,BA=8e4;function dx({startMs:t=0,scale:e=1}={}){let n=e,i=0,s=0,r=20,o=null,a=0,l=-1/0;function c(h,d){if(d-t<UA||(i+=Math.min(h,100),s++,s<60||i<1e3))return n;let u=i/s;i=0,s=0,r=Math.min(20,Math.max(4,Math.min(r,u)));let f=ux(n,u,Math.max(14,1.1*r));if(f>n){if(d<l)return n;o=d}else f<n&&(o!==null&&d-o<hx&&(a=a===0?hx:Math.min(a*2,BA),l=d+a),o=null);return n=f,n}return{sample:c,scale:()=>n}}var B=Object.freeze({ink:"#1b1f3b",shadowTint:"#5b3a8c",teal:"#2ec4b6",tealLight:"#bfeee8",hotPink:"#ff4f9a",cream:"#fff3d6",lilac:"#b9a7ff",glorpPurple:"#7a3cff",gel:"#b6ff3c",playerOrange:"#ff8a1f",daleSkin:"#f4b6a6",daleHair:"#4a2f5a",docSkin:"#f7c29a",tobbleMint:"#7ee8b0",eyeWhite:"#fffdf5",nebulaDeep:"#3a0ca3",nebulaHot:"#c2185b",planet:"#ffb347"});var Jp={viewportHeight:{value:1080}};function bi(t){t.getAttribute("normal")||t.computeVertexNormals();let e=t.getAttribute("position"),n=t.getAttribute("normal"),i=e.count,s=new Map,r=new Array(i),o=l=>Math.round(l*1e4);for(let l=0;l<i;l++){let c=o(e.getX(l))+","+o(e.getY(l))+","+o(e.getZ(l));r[l]=c;let h=s.get(c);h||(h=[0,0,0],s.set(c,h)),h[0]+=n.getX(l),h[1]+=n.getY(l),h[2]+=n.getZ(l)}let a=t.getAttribute("outlineNormal");(!a||a.count!==i)&&(a=new bt(new Float32Array(i*3),3),t.setAttribute("outlineNormal",a));for(let l=0;l<i;l++){let c=s.get(r[l]),h=c[0],d=c[1],u=c[2],f=Math.hypot(h,d,u);f<1e-6&&(h=n.getX(l),d=n.getY(l),u=n.getZ(l),f=Math.hypot(h,d,u)||1),a.setXYZ(l,h/f,d/f,u/f)}return a.needsUpdate=!0,t}var zA=`
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

  // Thickness is TUNING.outlinePx * TUNING.render.outlineWidth at 1080 lines and scales with the viewport,
  // but never thinner than one pixel. Multiplying by w keeps it the same on
  // screen at any distance.
  float thickness = max(px * (viewportHeight / 1080.0), 1.0);
  clip.xy += pixelDir * (2.0 * thickness / viewport) * clip.w;
  gl_Position = clip;
}
`,HA=`
uniform vec3 inkColor;

void main() {
  gl_FragColor = vec4(inkColor, 1.0);
  #include <colorspace_fragment>
}
`,px=()=>H.outlinePx*H.render.outlineWidth;function GA({px:t=px(),color:e=B.ink,outlineNormal:n=!1}={}){return new $n({name:"outline",uniforms:{px:{value:t},inkColor:{value:new $e(e)},viewportHeight:Jp.viewportHeight},defines:n?{USE_OUTLINE_NORMAL:""}:{},vertexShader:zA,fragmentShader:HA,side:Tn})}function VA(){}var fx=new Map;function WA(t,e,n){let i=t+"|"+new $e(e).getHexString()+"|"+n,s=fx.get(i);return s||(s=GA({px:t,color:e,outlineNormal:n}),fx.set(i,s)),s}function Gn(t,{px:e=px()}={}){let n=!!t.geometry.getAttribute("outlineNormal"),i=WA(e,B.ink,n),s=new rt(t.geometry,i);return s.name="outline",s.userData.isOutline=!0,s.raycast=VA,t.add(s),s}function Qp(t,e){t.traverse(n=>{n.userData.isOutline&&(n.visible=e)})}function XA(t,e,n,i){let s=Math.max(1,Math.floor(t)||1),r=Math.max(1,Math.floor(e)||1),o=Math.min(n>0?n:1,2)*i;return{width:s,height:r,pixelRatio:o,aspect:s/r}}function Xu(t,e){let n=new zu({canvas:t,context:e,antialias:!0,powerPreference:"high-performance"});n.outputColorSpace=xn;let i=dx({startMs:performance.now()});function s(){let o=XA(window.innerWidth,window.innerHeight,window.devicePixelRatio,i.scale());return n.setPixelRatio(o.pixelRatio),n.setSize(o.width,o.height,!1),Jp.viewportHeight.value=t.height,o}function r(o){let a=i.scale();i.sample(o,performance.now())!==a&&s()}return{renderer:n,resize:s,frameDone:r,scale:i.scale}}var Vs={lightDir:{value:new G(...H.lightDir).normalize()},shadowTint:{value:new $e(B.shadowTint)},bandEdge:{value:.15},shadowLift:{value:H.shadowLift}},YA=`
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
`,qA=`
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
`;function Tt({color:t="#ffffff",vertexColors:e=!1,shadowMix:n=.55,rim:i=.25,rimColor:s="#ffffff"}={}){return new $n({name:"toon",uniforms:{baseColor:{value:new $e(t)},shadowMix:{value:n},rim:{value:i},rimColor:{value:new $e(s)},lightDir:Vs.lightDir,shadowTint:Vs.shadowTint,bandEdge:Vs.bandEdge,shadowLift:Vs.shadowLift},vertexShader:YA,fragmentShader:qA,vertexColors:e})}var $A=400,KA=[-.45,.22,-1],ZA=`
varying vec3 vDir;

void main() {
  vDir = position;
  // Rotation only: the sky is centred on the camera wherever it goes, and
  // z = w pins it to the far plane so it is never clipped and never in front.
  vec3 viewDir = mat3(viewMatrix) * mat3(modelMatrix) * position;
  gl_Position = projectionMatrix * vec4(viewDir, 1.0);
  gl_Position.z = gl_Position.w;
}
`,jA=`
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
`;function Yu({planetDir:t=KA}={}){let e=r=>new $e(r),n=new $n({name:"sky",uniforms:{deep:{value:e(B.nebulaDeep)},hot:{value:e(B.nebulaHot)},pink:{value:e(B.hotPink)},lilac:{value:e(B.lilac)},ink:{value:e(B.ink)},planetColor:{value:e(B.planet)},shadowTint:Vs.shadowTint,shadowLift:Vs.shadowLift,bandEdge:Vs.bandEdge,lightDir:Vs.lightDir,planetDir:{value:new G(...t).normalize()},time:{value:0}},vertexShader:ZA,fragmentShader:jA,side:Tn,depthWrite:!1}),i=new rt(new pn($A,48,24),n);i.name="sky",i.frustumCulled=!1,i.renderOrder=1e3,i.raycast=()=>{};function s(r){n.uniforms.time.value=r}return{mesh:i,update:s}}function Bt(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},o={},a=t[0].morphTargetsRelative,l=new Ut;l.morphTargetsRelative=a;let c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==t[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(n)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=mx(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let m=mx(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function mx(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new e(r),a=new bt(o,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<n;m++){let y=h.getComponent(u,m);a.setComponent(u+d,m,y)}}else o.set(h.array,l);l+=h.count*n}return s!==void 0&&(a.gpuType=s),a}function vx(t,e=1e-4){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),s=t.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(t.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),m=Math.pow(10,f),y=u*m;for(let p=0;p<r;p++){let v=i?i.getX(p):p,_="";for(let M=0,S=a.length;M<S;M++){let E=a[M],x=t.getAttribute(E),b=x.itemSize;for(let P=0;P<b;P++)_+=`${Math.trunc(x[d[P]](v)*m+y)},`}_ in n?h.push(n[_]):(l.push(v),n[_]=o,h.push(o),o++)}let g=t.clone();for(let p in t.attributes)g.setAttribute(p,gx(t.attributes[p],l,c));for(let p in t.morphAttributes)g.morphAttributes[p]=t.morphAttributes[p].map(v=>gx(v,l,c));return g.setIndex(h),g}function gx(t,e,n=new Map){let i=t.isInterleavedBufferAttribute,s=i?t.data:t,r=i?s.stride:t.itemSize,o=i?n.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new t.constructor(l,t.itemSize,t.normalized,t.meshPerAttribute),o.setUsage(s.usage),i&&n.set(s,o)}let a=i?new t.constructor(o,t.itemSize,t.offset,t.normalized):o;return a.name=t.name,i||(a.gpuType=t.gpuType),a}function fa(t){let e=t>>>0;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function xx(t,e,n=.03,i=.04){let s=t.getAttribute("position"),r=t.getAttribute("normal");t.computeBoundingBox();let o=t.boundingBox,a=o.getSize(new G),l=o.getCenter(new G),c=a.length(),h=fa(e*7919+13>>>0),d=[];for(let p=0;p<8;p++)d.push(h()*2-1);let u=Math.min(n*c,i)*.99/Math.sqrt(3),f=(p,v)=>v>1e-9?2*p/v:0,m=[a.x,a.y,a.z].map(p=>p>1e-9?2/p:0),y=new mt,g=new G;for(let p=0;p<s.count;p++){let v=f(s.getX(p)-l.x,a.x),_=f(s.getY(p)-l.y,a.y),M=f(s.getZ(p)-l.z,a.z),S=(_+1)/2,E=(d[0]*_+d[1]*v*_)/2,x=(d[2]*v+d[3]*M)/2*S,b=(d[4]*_+d[5]*M*_)/2;if(r){let P=[d[1]*_/2,(d[0]+d[1]*v)/2,0],L=[d[2]/2*S,(d[2]*v+d[3]*M)/2*.5,d[3]/2*S],C=[0,(d[4]+d[5]*M)/2,d[5]*_/2];y.set(1+u*P[0]*m[0],u*P[1]*m[1],u*P[2]*m[2],u*L[0]*m[0],1+u*L[1]*m[1],u*L[2]*m[2],u*C[0]*m[0],u*C[1]*m[1],1+u*C[2]*m[2]),y.invert().transpose(),g.set(r.getX(p),r.getY(p),r.getZ(p)).applyMatrix3(y).normalize(),r.setXYZ(p,g.x,g.y,g.z)}s.setXYZ(p,s.getX(p)+u*E,s.getY(p)+u*x,s.getZ(p)+u*b)}return s.needsUpdate=!0,r&&(r.needsUpdate=!0),t.computeBoundingBox(),t.computeBoundingSphere(),t}var e0=null;function JA(){return e0||(e0=Tt({vertexColors:!0})),e0}var n0=(t,e,n)=>new $e(t).lerp(new $e(e),n),i0=(t,e=.3)=>n0(t,"#ffffff",e),qu=(t,e=.2)=>n0(t,B.shadowTint,e),yx=new wt,bx=new ti,_x=new hi,QA=new G,eR=new G;function pr(t=1,e=.02,n="prop"){let i=[],s=0;function r(h,d,u={}){let f=h.index?h.toNonIndexed():h;f.deleteAttribute("uv");let m=u.wonk===void 0?e:u.wonk;m>0&&xx(f,t*131+s,m),s++;let y=f.getAttribute("normal"),g=new Float32Array(y.count*3);for(let p=0;p<y.count;p++){let v=typeof d=="function"?d(y.getX(p),y.getY(p),y.getZ(p)):d;g[p*3]=v.r,g[p*3+1]=v.g,g[p*3+2]=v.b}return f.setAttribute("color",new bt(g,3)),(u.sx||u.sy||u.sz)&&f.scale(u.sx||1,u.sy||1,u.sz||1),u.m&&f.applyMatrix4(u.m),_x.set(u.rx||0,u.ry||0,u.rz||0,"YXZ"),bx.setFromEuler(_x),yx.compose(QA.set(u.x||0,u.y||0,u.z||0),bx,eR.set(1,1,1)),f.applyMatrix4(yx),i.push(f),f}function o(h,d={}){let u=d.top||i0(h),f=d.side||qu(h,.22),m=qu(h,.4),y=new $e(h);return(g,p,v)=>p>.5?u:p<-.5?m:Math.abs(g)>.5?f:v>0?y:m}function a(h,d,u,f,m={}){return r(new ut(h,d,u),o(f,m),m)}function l(h,d,u,f,m,y,g,p={}){return a(d-h,f-u,y-m,g,{...p,x:(h+d)/2,y:(u+f)/2,z:(m+y)/2})}function c(h=0){let d=Bt(i,!1);if(!d)throw new Error(`${n}: parts have different attributes and cannot be merged`);return h>0&&xx(d,t,h),bi(d)}return{add:r,box:a,span:l,facePaint:o,finish:c}}function mr(t){let e=new dt,n=new rt(t,JA());return Gn(n),e.add(n),e}var Ws=t=>()=>new $e(t);function $u({w:t,d:e,tile:n=1,colors:i=[B.cream,B.tealLight]}){let s=pr(1,0,"floor");s.span(-t/2,t/2,-.15,-.002,-e/2,e/2,B.lilac,{top:new $e(B.lilac)});let o=Math.round(t/n),a=Math.round(e/n);for(let l=0;l<o;l++)for(let c=0;c<a;c++){let h=new Li(n,n);h.rotateX(-Math.PI/2),s.add(h,Ws(i[(l+c)%2]),{wonk:0,x:-t/2+(l+.5)*n,y:0,z:-e/2+(c+.5)*n})}return mr(s.finish())}function s0({w:t,h:e,color:n=B.cream,stripe:i=B.hotPink,opening:s=null,seed:r=2}){let o=pr(r,0,"wall"),a=.2,l=a/2,c=-t/2,h=t/2,d=-.3,u=new ta;if(u.moveTo(c,d),u.lineTo(h,d),u.lineTo(h,e),u.lineTo(c,e),u.closePath(),s){let p=new Zr,v=s.x-s.w/2,_=s.x+s.w/2;p.moveTo(v,s.y),p.lineTo(v,s.y+s.h),p.lineTo(_,s.y+s.h),p.lineTo(_,s.y),p.closePath(),u.holes.push(p)}let f=new Rl(u,{depth:a,bevelEnabled:!1});f.translate(0,0,-l),o.add(f,o.facePaint(n),{wonk:0}),o.span(c,h,d,.28,-l,l+.04,B.lilac),o.span(c-.05,h+.05,e-.1,e+.12,-l-.06,l+.08,B.teal);let m=.5,y=.8;return s&&s.y<y&&s.y+s.h>m?(o.span(c,s.x-s.w/2,m,y,l-.01,l+.03,i),o.span(s.x+s.w/2,h,m,y,l-.01,l+.03,i)):o.span(c,h,m,y,l-.01,l+.03,i),mr(o.finish(.006))}function tR(t,e,n,i){let s=g=>Math.min(2048,Math.max(64,Math.round(g))),r=s(i>=1?1024:1024*i),o=s(i>=1?1024/i:1024),a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c='"Arial Black", Impact, sans-serif';l.font=`100px ${c}`;let h=t.split(" "),d=[[t]];for(let g=1;g<h.length;g++)d.push([h.slice(0,g).join(" "),h.slice(g).join(" ")]);let u=null;for(let g of d){let p=Math.max(...g.map(_=>l.measureText(_).width)),v=Math.min(r*.88*100/p,o*.8/(g.length*1.08));(!u||v>u.size)&&(u={lines:g,size:v})}l.fillStyle=e,l.fillRect(0,0,r,o),l.strokeStyle=n,l.lineWidth=8,l.setLineDash([22,14]),l.strokeRect(18,18,r-36,o-36),l.setLineDash([]),l.font=`${u.size}px ${c}`,l.textAlign="center",l.textBaseline="middle";let f=u.size*1.08,m=o/2-(u.lines.length-1)*f/2;u.lines.forEach((g,p)=>{let v=m+p*f;l.fillStyle=B.ink,l.fillText(g,r/2+u.size*.05,v+u.size*.06),l.fillStyle=n,l.fillText(g,r/2,v)});let y=new Kr(a);return y.colorSpace=xn,y.anisotropy=8,y}function Ki({text:t,w:e,h:n,bg:i=B.hotPink,fg:s=B.cream,tilt:r=.04,seed:o=3}){let c=pr(o,0,"sign");c.box(e,n,.14,s,{wonk:0});let h=mr(c.finish()),d=e-.14*2,u=n-.14*2,f=new rt(new Li(d,u),new Zt({map:tR(t,i,s,d/u),toneMapped:!1}));return f.name="signFace",f.position.z=.14/2+.008,h.add(f),h.rotation.z=r,h}function Mx({w:t,h:e,seed:n=4}){let i=pr(n,.012,"window"),s=.15,r=.34;return i.span(-t/2,-t/2+s,0,e,-r/2,r/2,B.teal),i.span(t/2-s,t/2,0,e,-r/2,r/2,B.teal),i.span(-t/2+s,t/2-s,e-s,e,-r/2,r/2,B.teal),i.span(-t/2+s,t/2-s,0,s,-r/2,r/2,B.teal),i.span(-t/2-.2,t/2+.2,-.08,.06,-r/2,r/2+.28,B.hotPink),i.span(-.04,.04,s,e-s,-.04,.04,B.cream),i.span(-t/2+s,t/2-s,e/2-.04,e/2+.04,-.04,.04,B.cream),mr(i.finish(.006))}function Yl(t,e,n,i,s,r){let o=new Qr(.16,.05,8,20);t.add(o,Ws(B.planet),{wonk:.04,x:e,y:n,z:i,rx:-Math.PI/2+s,ry:r})}function wx({w:t,h:e,name:n,signColor:i=B.hotPink,seed:s=5}){let r=pr(s,.012,"shopFront"),o=.5,a=.5,l=e,c=e-1.4,h=n0(B.glorpPurple,B.ink,.7);r.span(-t/2+a,t/2-a,0,c,-o/2,-o/2+.1,h),r.span(-t/2+a,t/2-a,1.15,1.22,-o/2,-o/2+.4,B.lilac);for(let p of[-1,1]){let v=p*(t/2-a/2);r.span(v-a/2,v+a/2,0,c,-o/2,o/2,B.lilac),r.span(v-a/2-.04,v+a/2+.04,0,.3,-o/2,o/2+.04,B.teal)}r.span(-t/2,t/2,c,l,-o/2,o/2,B.teal);let d=t-a*2-.1;r.span(-d/2,d/2,0,.86,.02,o/2+.3,B.hotPink),r.span(-d/2,d/2,0,.12,.02,o/2+.34,B.lilac),r.span(-d/2-.06,d/2+.06,.86,.96,0,o/2+.42,B.cream),Yl(r,-.9,1.01,.4,.1,.4),Yl(r,-.2,1.01,.5,-.1,-.3),Yl(r,.6,1.01,.38,.12,.9),Yl(r,1.2,1.01,.52,0,.1);let u=10,f=(t-.1)/u,m=.42;for(let p=0;p<u;p++){let v=p%2?B.cream:i,_=-t/2+.05+(p+.5)*f;r.box(f,.08,.95,v,{x:_,y:c-.02,z:o/2+.35,rx:m,top:i0(v,.2)}),r.box(f,.22,.06,v,{x:_,y:c-.24,z:o/2+.8,rx:.1})}let y=mr(r.finish(.006)),g=Ki({text:n,w:t-.7,h:1.15,bg:i,fg:B.cream,seed:s+1});return g.position.set(0,c+.7,o/2+.01),y.add(g),y}function Sx({w:t=2,d:e=1,h:n=.9,color:i=B.teal,seed:s=7}={}){let r=pr(s,.018,"kiosk");r.span(-t/2+.03,t/2-.03,0,.16,-e/2+.03,e/2-.03,B.lilac),r.span(-t/2,t/2,.16,n-.08,-e/2,e/2,i),r.span(-t/2-.07,t/2+.07,n-.08,n,-e/2-.07,e/2+.07,B.cream);let o=4,a=(t-.3)/o;for(let c=0;c<o;c++){let h=c%2?B.cream:B.hotPink;r.box(a-.04,n-.45,.05,h,{x:-t/2+.15+(c+.5)*a,y:.5,z:e/2+.02})}r.box(.38,.28,.3,B.glorpPurple,{x:-.55,y:n+.14,z:-.1}),r.box(.3,.14,.04,B.gel,{x:-.55,y:n+.28,z:.07,rx:-.5,wonk:0}),Yl(r,.45,n+.06,.05,.1,.5);let l=mr(r.finish(.006));return l.userData.footprint={w:t+.14,d:e+.14},l}function Tx({w:t=1.8,seed:e=11}={}){let n=pr(e,.02,"bench"),i=.5;n.box(t,.1,i,B.lilac,{y:.46}),n.box(t,.42,.08,B.glorpPurple,{y:.86,z:-i/2+.04,rx:-.14});for(let r of[-1,1])n.box(.1,.46,i-.06,B.teal,{x:r*(t/2-.2),y:.23}),n.box(.08,.5,.08,B.teal,{x:r*(t/2-.2),y:.7,z:-i/2+.05,rx:-.14});let s=mr(n.finish(.006));return s.userData.footprint={w:t,d:i},s}function nR(t,e,n){let i=new ut(.035,t,e,1,5,1).toNonIndexed(),s=i.getAttribute("position");for(let r=0;r<s.count;r++){let o=(s.getY(r)+t/2)/t;s.setXYZ(r,s.getX(r)+n*o*o,s.getY(r)+t/2,s.getZ(r)*(1-.9*o))}return i.computeVertexNormals(),i}function Ex({seed:t=21}={}){let e=pr(t,.02,"planter"),n=fa(t);e.add(new en(.42,.32,.55,16),Ws(B.teal),{y:.275}),e.add(new en(.47,.44,.12,16),Ws(B.hotPink),{y:.6}),e.add(new en(.4,.4,.04,16),Ws(qu(B.glorpPurple,.5)),{y:.64,wonk:0});let i=0,s=.66,r=qu(B.planet,.15);for(let l=0;l<6;l++)e.add(new en(.06-l*.004,.07-l*.004,.34,8),Ws(l%2?i0(r,.2):r),{x:i,y:s+.34/2,rz:-.12,wonk:.03}),i+=.05,s+=.34*.98;let o=10;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+n()*.3,h=l%2?.95+n()*.25:1.45+n()*.25,d=new wt().makeTranslation(i,s,0).multiply(new wt().makeRotationY(c)).multiply(new wt().makeRotationZ(-h));e.add(nR(.95,.24,l%2?.22:.4),Ws(l%2?B.gel:B.teal),{m:d,wonk:.03})}e.add(new pn(.1,10,8),Ws(B.planet),{x:i,y:s-.05,z:.08}),e.add(new pn(.1,10,8),Ws(B.planet),{x:i+.07,y:s-.1,z:-.07});let a=mr(e.finish());return a.userData.footprint={w:.95,d:.95},a}var t0=null;function Ku({rx:t,rz:e,opacity:n=.35}){let r=new $e(B.shadowTint),o=[0,0,0],a=[r.r,r.g,r.b,n];for(let d=1;d<=8;d++){let u=d/8,f=n*(1-u*u*(3-2*u));for(let m=0;m<28;m++){let y=m/28*Math.PI*2;o.push(Math.cos(y)*t*u,0,Math.sin(y)*e*u),a.push(r.r,r.g,r.b,f)}}let l=[];for(let d=0;d<28;d++)l.push(0,1+(d+1)%28,1+d);for(let d=1;d<8;d++){let u=1+(d-1)*28,f=1+d*28;for(let m=0;m<28;m++){let y=(m+1)%28;l.push(u+m,u+y,f+m,u+y,f+y,f+m)}}let c=new Ut;c.setAttribute("position",new vt(o,3)),c.setAttribute("color",new vt(a,4)),c.setIndex(l),t0||(t0=new Zt({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));let h=new rt(c,t0);return h.name="blobShadow",h.position.y=.012,h}var ql=8,Zu=ql/2,r0=.2;function Ax(){let t=new dt;t.add($u({w:ql,d:ql}));let e=s0({w:ql+r0*2,h:4});e.position.set(0,0,-Zu-r0/2),t.add(e);let n=1.3,i=wx({w:5,h:3.4,name:"PRETZEL SINGULARITY",signColor:B.hotPink});i.position.set(n,0,-Zu+.25),t.add(i);let s={x:-.9,y:1.7,w:3,h:2},r=s0({w:ql,h:4,color:"#f1e6ff",opening:s});r.position.set(-Zu-r0/2,0,0),r.rotation.y=Math.PI/2;let o=Mx({w:s.w,h:s.h});o.position.set(s.x,s.y,0),r.add(o),t.add(r);let a=Sx({seed:7});a.position.set(2.4,0,.5),a.rotation.y=.35;let l=Tx({seed:11});l.position.set(-3.45,0,.9),l.rotation.y=Math.PI/2;let c=Ex({seed:21});c.position.set(-2.95,0,-2.9),t.add(a,l,c);let h=(d,u,f,m,y=0)=>{let g=Ku({rx:f,rz:m,opacity:.7});g.position.x=d,g.position.z=u,g.rotation.y=y,t.add(g)};return h(a.position.x,a.position.z,1.3,.95,a.rotation.y),h(l.position.x+.2,l.position.z,.6,1.2),h(c.position.x,c.position.z,.95,.95),h(n,-Zu+.9,2.7,.8),{group:t,spawn:[0,0,0],update(){}}}function Rn(t,e,n,i){if(!(n>0)||!(i>0))return n>0||(t.x=e,t.v=0),t;let s=4*Math.LN2/n/2,r=t.x-e,o=t.v+r*s,a=Math.exp(-s*i);return t.x=a*(r+o*i)+e,t.v=a*(t.v-o*s*i),t}function o0(t,e,n,i,s,r){let o=n+i,a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=Math.hypot(a,l,c);h<1e-9?(a=0,l=-1,c=0,h=0):(a/=h,l/=h,c/=h);let d=1.15*o,u=e[0],f=e[1],m=e[2];h>d&&(h=d,u=t[0]+a*h,f=t[1]+l*h,m=t[2]+c*h);let y=h>o?h/o:1;if(h>=o){let b=h*(o>0?n/o:.5);return Rx(r,t[0]+a*b,t[1]+l*b,t[2]+c*b,u,f,m,y)}let g=Math.max(h,1e-6),p=Math.min(Math.max((g*g+n*n-i*i)/(2*g),-n),n),v=Math.sqrt(Math.max(n*n-p*p,0)),_=s[0],M=s[1],S=s[2],E=_*a+M*l+S*c;_-=a*E,M-=l*E,S-=c*E;let x=Math.hypot(_,M,S);return x<1e-6&&(Math.abs(a)<.9?(_=0,M=c,S=-l):(_=-c,M=0,S=a),x=Math.hypot(_,M,S)||1),_/=x,M/=x,S/=x,Rx(r,t[0]+a*p+_*v,t[1]+l*p+M*v,t[2]+c*p+S*v,u,f,m,y)}function Rx(t,e,n,i,s,r,o,a){if(!t)return{mid:[e,n,i],end:[s,r,o],stretch:a};let l=t.mid,c=t.end;return l[0]=e,l[1]=n,l[2]=i,c[0]=s,c[1]=r,c[2]=o,t.stretch=a,t}var Cx=[.65,1.2];function a0({radius:t=.06,rings:e=8,sides:n=8,color:i="#ffffff"}={}){let s=e+1,r=Cx.length,o=s*n,a=[o,o+r*n+1],l=o+2*(r*n+1),c=[],h=(xe,Ee,qe)=>{for(let we=0;we<n;we++){let _e=(we+1)%n,Re=xe+we,Le=xe+_e,q=Ee+we,Je=Ee+_e;qe?c.push(Re,q,Le,Le,q,Je):c.push(Re,Le,q,Le,Je,q)}};for(let xe=0;xe<e;xe++)h(xe*n,(xe+1)*n,!1);for(let xe=0;xe<2;xe++){let Ee=xe===0,qe=xe===0?0:e*n;for(let _e=0;_e<r;_e++){let Re=a[xe]+_e*n;h(qe,Re,Ee),qe=Re}let we=a[xe]+r*n;for(let _e=0;_e<n;_e++){let Re=qe+_e,Le=qe+(_e+1)%n;Ee?c.push(Re,we,Le):c.push(Re,Le,we)}}let d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Ut,m=new bt(d,3),y=new bt(u,3);m.setUsage(ca),y.setUsage(ca),f.setAttribute("position",m),f.setAttribute("normal",y),f.setIndex(c);let g=new rt(f,Tt({color:i}));g.name="limb";let p=new ui(new G,t*2);f.boundingSphere=p,Gn(g);let v=new Float64Array(n),_=new Float64Array(n);for(let xe=0;xe<n;xe++)v[xe]=Math.cos(xe/n*Math.PI*2),_[xe]=Math.sin(xe/n*Math.PI*2);let M=0,S=-1,E=0,x=1,b=0,P=0,L=0,C=0,w=1,D=0,k=0,I=0,F=0,z=0,$=0,X=0,j=0,W=0,ee=0,Me=0,te=0,oe=0,be=0,Oe=0,ne=0,Ce=0,Fe=0;function Be(xe,Ee,qe,we,_e,Re,Le,q,Je,se,ae,N,Z,K,ye,R){for(let T=0;T<n;T++){let V=v[T]*Re+_[T]*Je,ie=v[T]*Le+_[T]*se,J=v[T]*q+_[T]*ae,fe=(xe+T)*3;d[fe]=Ee+V*_e,d[fe+1]=qe+ie*_e,d[fe+2]=we+J*_e,u[fe]=V*ye+N*R,u[fe+1]=ie*ye+Z*R,u[fe+2]=J*ye+K*R}}let Xe=!1,Ye=1,me=0,Pe=0;function ke(xe,Ee,qe,we=1){let _e=t/Math.sqrt(we>1?we:1),Re=2*Ee[0]-(xe[0]+qe[0])/2,Le=2*Ee[1]-(xe[1]+qe[1])/2,q=2*Ee[2]-(xe[2]+qe[2])/2,Je=xe[0],se=xe[1],ae=xe[2],N=qe[0],Z=qe[1],K=qe[2],ye=(Ee[1]-se)*(K-Ee[2])-(Ee[2]-ae)*(Z-Ee[1]),R=(Ee[2]-ae)*(N-Ee[0])-(Ee[0]-Je)*(K-Ee[2]),T=(Ee[0]-Je)*(Z-Ee[1])-(Ee[1]-se)*(N-Ee[0]),V=Math.hypot(ye,R,T),ie=Ee[0]-Je,J=Ee[1]-se,fe=Ee[2]-ae,Se=Math.hypot(ie,J,fe),ce=N-Ee[0],re=Z-Ee[1],Ne=K-Ee[2],Y=!1;V>1e-4*Se*Math.hypot(ce,re,Ne)&&V>1e-12?(ye/=V,R/=V,T/=V,Xe&&ye*Ye+R*me+T*Pe<0&&(ye=-ye,R=-R,T=-T),Y=!0):Se>1e-9&&ie*ce+J*re+fe*Ne<0&&(Re=(Je+N)/2,Le=(se+Z)/2,q=(ae+K)/2);let pe=(Je+Re+N)/3,he=(se+Le+Z)/3,De=(ae+q+K)/3,Ae=Math.max(Math.hypot(Je-pe,se-he,ae-De),Math.hypot(Re-pe,Le-he,q-De),Math.hypot(N-pe,Z-he,K-De));p.center.set(pe,he,De),p.radius=Ae+t*1.5+.02;for(let Te=0;Te<s;Te++){let Ge=Te/e,nt=1-Ge,ge=nt*nt,ze=2*nt*Ge,Qe=Ge*Ge,Ie=ge*Je+ze*Re+Qe*N,ot=ge*se+ze*Le+Qe*Z,Rt=ge*ae+ze*q+Qe*K,Mt=2*nt*(Re-Je)+2*Ge*(N-Re),Ft=2*nt*(Le-se)+2*Ge*(Z-Le),Yt=2*nt*(q-ae)+2*Ge*(K-q),Jt=Math.hypot(Mt,Ft,Yt);if(Jt>1e-9?(M=Mt/Jt,S=Ft/Jt,E=Yt/Jt):Te===0&&(M=0,S=-1,E=0),Te===0){Y?(x=ye,b=R,P=T):Xe?(x=Ye,b=me,P=Pe):(x=1,b=0,P=0);let zt=x*M+b*S+P*E;x-=M*zt,b-=S*zt,P-=E*zt;let tn=Math.hypot(x,b,P);tn<1e-6&&(Math.abs(M)<.9?(x=0,b=E,P=-S):(x=-E,b=0,P=M),tn=Math.hypot(x,b,P)||1),x/=tn,b/=tn,P/=tn,Ye=x,me=b,Pe=P,Xe=!0}else{let zt=x*M+b*S+P*E;x-=M*zt,b-=S*zt,P-=E*zt;let tn=Math.hypot(x,b,P);tn<1e-6&&(Math.abs(M)<.9?(x=0,b=E,P=-S):(x=-E,b=0,P=M),tn=Math.hypot(x,b,P)||1),x/=tn,b/=tn,P/=tn}L=S*P-E*b,C=E*x-M*P,w=M*b-S*x,Be(Te*n,Ie,ot,Rt,_e,x,b,P,L,C,w,0,0,0,1,0),Te===0&&(D=M,k=S,I=E,F=x,z=b,$=P,X=L,j=C,W=w),Te===s-1&&(ee=M,Me=S,te=E,oe=x,be=b,Oe=P,ne=L,Ce=C,Fe=w)}for(let Te=0;Te<2;Te++){let Ge=Te===0?-1:1,nt=Te===0?Je:N,ge=Te===0?se:Z,ze=Te===0?ae:K,Qe=Te===0?D:ee,Ie=Te===0?k:Me,ot=Te===0?I:te,Rt=Te===0?F:oe,Mt=Te===0?z:be,Ft=Te===0?$:Oe,Yt=Te===0?X:ne,Jt=Te===0?j:Ce,zt=Te===0?W:Fe,tn=Qe*Ge,xt=Ie*Ge,qt=ot*Ge;for(let li=0;li<r;li++){let Ei=Cx[li],nr=Math.cos(Ei),yt=Math.sin(Ei);Be(a[Te]+li*n,nt+tn*_e*yt,ge+xt*_e*yt,ze+qt*_e*yt,_e*nr,Rt,Mt,Ft,Yt,Jt,zt,tn,xt,qt,nr,yt)}let Ct=(a[Te]+r*n)*3;d[Ct]=nt+tn*_e,d[Ct+1]=ge+xt*_e,d[Ct+2]=ze+qt*_e,u[Ct]=tn,u[Ct+1]=xt,u[Ct+2]=qt}m.needsUpdate=!0,y.needsUpdate=!0}return{mesh:g,set:ke}}var ro=Object.freeze({neutral:Object.freeze({browAngle:0,browY:0,lid:0,pupilScale:1,mouthCurve:.4,mouthOpen:0}),angry:Object.freeze({browAngle:.5,browY:-.2,lid:.3,pupilScale:.8,mouthCurve:-.55,mouthOpen:.6}),scared:Object.freeze({browAngle:-.4,browY:.7,lid:0,pupilScale:.4,mouthCurve:-.45,mouthOpen:1}),smug:Object.freeze({browAngle:.1,browY:.3,lid:.45,pupilScale:1,mouthCurve:.8,mouthOpen:0}),dead:Object.freeze({browAngle:-.3,browY:.1,lid:0,pupilScale:0,mouthCurve:-.15,mouthOpen:0})}),iR=Object.freeze({neutral:1,smug:1,scared:0,angry:0,dead:0}),ju=["browAngle","browY","lid","pupilScale","mouthCurve","mouthOpen"],l0=.04,sR=9;function Ju(t,e){let n=Math.sin(t*12.9898+e*78.233)*43758.5453;return(n-Math.floor(n))*Math.PI*2}function rR(t,e,n=[0,0]){return n[0]=.05*Math.sin(1.3*t+Ju(e,1))+.03*Math.sin(2.1*t+Ju(e,2)),n[1]=.04*Math.sin(1.7*t+Ju(e,3))+.02*Math.sin(2.6*t+Ju(e,4)),n}var oR=(t,e)=>Math.min(t*2,1)*Math.max(e,0),$l=16,Px=$l+1,fs=11,gr=4,Qu=13,aR=.07,lR=t=>{let e=t<0?0:t>1?1:t;return e*e*(3-2*e)};function Ix({eyeRadius:t=.1,eyeSpacing:e=.26,eyeY:n=.05,eyeZ:i=.3,mouthY:s=-.12,mouthWidth:r=.22,mouthZ:o=i,brow:a="pair",seed:l=1,lidColor:c=B.ink,fixedSmile:h=0,eyeColor:d=B.eyeWhite,eyeGlow:u=!1}={}){let f=t,m=e/2,y=[-m,m],g=.35,p=.035*f,v=f*.3,_=a==="uni",M=0,S=M+2*Px,E=S+16,x=E+2*fs*gr,b=x+2*fs*2,P=b+(_?6:8),L=P+Qu*2,C=[],w=ae=>C.push(ae,ae+1,ae+2,ae,ae+2,ae+3),D=(ae,N)=>{for(let Z=0;Z<N-1;Z++){let K=ae+Z*2;C.push(K,K+1,K+2,K+1,K+3,K+2)}};for(let ae=0;ae<2;ae++){let N=M+ae*Px;for(let Z=0;Z<$l;Z++)C.push(N,N+1+Z,N+1+(Z+1)%$l)}for(let ae=0;ae<4;ae++)w(S+ae*4);for(let ae=0;ae<2;ae++){let N=E+ae*fs*gr;for(let Z=0;Z<fs-1;Z++)for(let K=0;K<gr-1;K++){let ye=N+Z*gr+K,R=ye+1,T=ye+gr,V=T+1;C.push(ye,R,T,R,V,T)}D(x+ae*fs*2,fs)}_?C.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4,b+3,b+5,b+4):(w(b),w(b+4)),D(P,Qu);let k=[];for(let ae=0;ae<2;ae++){let N=new pn(f,18,12);N.deleteAttribute("uv"),N.applyMatrix4(new wt().makeScale(1,1,g).setPosition(y[ae],n,i)),k.push(N)}let I=new rt(Bt(k,!1),u?new Zt({color:d,toneMapped:!1}):Tt({color:d,shadowMix:.35,rim:0}));I.name="eyes",Gn(I,{px:2});let F=new Float32Array(L*3),z=new Float32Array(L*3),$=new Float32Array(L*3),X=new $e(B.ink),j=new $e(c);for(let ae=0;ae<L;ae++){z[ae*3+2]=1;let N=ae>=E&&ae<x?j:X;$[ae*3]=N.r,$[ae*3+1]=N.g,$[ae*3+2]=N.b}let W=new Ut,ee=new bt(F,3);ee.setUsage(ca),W.setAttribute("position",ee),W.setAttribute("normal",new bt(z,3)),W.setAttribute("color",new bt($,3)),W.setIndex(C);let Me=n+f*3.5,te=s-r*1.5-f,oe=Math.max(m+2.5*f,r);W.boundingSphere=new ui(new G(0,(Me+te)/2,i),Math.hypot(oe,(Me-te)/2,f*2));let be=Tt({color:"#ffffff",vertexColors:!0,rim:0});be.side=Nn;let Oe=new rt(W,be);Oe.name="features";let ne=new dt;ne.name="face",ne.add(I,Oe);let Ce=ro.neutral,Fe=ae=>{let N=h>0?iR[ae]:0;return N>0?h*N:-1/0},Be=Fe("neutral"),Xe=ae=>ae==="mouthCurve"&&Ce.mouthCurve<Be?Be:Ce[ae],Ye={};for(let ae of ju)Ye[ae]={x:Xe(ae),v:0};let me={x:0,v:0},Pe={x:0,v:0},ke=0,xe=!1,Ee=0,qe=[0,0],we=0;function _e(ae,N,Z){let K=we*3;F[K]=ae,F[K+1]=N,F[K+2]=Z,we++}function Re(ae,N,Z){let K=1-(ae*ae+N*N)/(f*f);return i+f*g*Math.sqrt(K>0?K:0)+Z}function Le(ae,N,Z,K,ye,R){let T=-(K-N),V=Z-ae,ie=Math.hypot(T,V)||1;T=T/ie*ye/2,V=V/ie*ye/2,_e(ae+T,N+V,R),_e(Z+T,K+V,R),_e(Z-T,K-V,R),_e(ae-T,N-V,R)}let q=f*1.03;function Je(){let ae=Ye,N=ae.pupilScale.x*(1-me.x),Z=me.x,K=Math.min(Math.max(ae.lid.x,0),.95),ye=ae.browAngle.x,R=K>.005,T=q-2*q*K,V=ye*.6*Math.min(K*4,1),ie=f*aR*Math.min(K*10,1);we=M;for(let ge=0;ge<2;ge++){let ze=ge===0?-1:1;rR(Ee,l+ge*7.31,qe);let Qe=f*.5*(N>0?N:0),Ie=qe[0]*f,ot=qe[1]*f;if(R){let Mt=T+V*ze*Ie-Math.abs(V)*Qe-ie-(ot+Qe);if(Mt>0){let Ft=Math.min(Math.max((Mt-.1*f)/(.1*f),0),1);ot+=Mt*(1-lR(Ft))}}_e(y[ge]+Ie,n+ot,Re(Ie,ot,p));for(let Rt=0;Rt<$l;Rt++){let Mt=Rt/$l*Math.PI*2,Ft=Ie+Math.cos(Mt)*Qe,Yt=ot+Math.sin(Mt)*Qe;_e(y[ge]+Ft,n+Yt,Re(Ft,Yt,p))}}we=S;for(let ge=0;ge<2;ge++){let ze=f*.55*Z,Qe=Re(0,0,p),Ie=f*.26*Z;Le(y[ge]-ze,n-ze,y[ge]+ze,n+ze,Ie,Qe),Le(y[ge]-ze,n+ze,y[ge]+ze,n-ze,Ie,Qe)}for(let ge=0;ge<2;ge++){let ze=ge===0?-1:1;for(let Qe=0;Qe<2;Qe++){we=Qe===0?E+ge*fs*gr:x+ge*fs*2;for(let Ie=0;Ie<fs;Ie++){let ot=(Ie/(fs-1)*2-1)*(Math.PI/2),Rt=q*Math.sin(ot),Mt=q*Math.cos(ot),Ft=R?T+V*Rt:Mt;Ft>Mt&&(Ft=Mt),Ft<-Mt&&(Ft=-Mt);let Yt=ze*Rt;if(Qe===0)for(let Jt=0;Jt<gr;Jt++){let zt=Mt+(Ft-Mt)*(Jt/(gr-1));_e(y[ge]+Yt,n+zt,Re(Yt,zt*.97,p*3))}else{let Jt=Ft+(R?f*.02:0);Jt>Mt&&(Jt=Mt);let zt=Ft-ie;zt<-Mt&&(zt=-Mt),_e(y[ge]+Yt,n+Jt,Re(Yt,Jt*.97,p*3.5)),_e(y[ge]+Yt,n+zt,Re(Yt,zt*.97,p*3.5))}}}}we=b;let J=f*.9,fe=n+f*(1.4+ae.browY.x),Se=Math.cos(ye),ce=Math.sin(ye),re=i+f*.15;if(_){let ge=m+J*Se,ze=fe+J*ce,Qe=fe-ce/(Se>.3?Se:.3)*m,Ie=-(Qe-ze),ot=ge,Rt=Math.hypot(Ie,ot)||1;Ie/=Rt,ot/=Rt;let Mt=-(ze-Qe),Ft=ge,Yt=Math.hypot(Mt,Ft)||1;Mt/=Yt,Ft/=Yt;let Jt=Ie+Mt,zt=ot+Ft,tn=Math.hypot(Jt,zt)||1;Jt/=tn,zt/=tn;let xt=Jt*Ie+zt*ot,qt=v/2/(xt>.4?xt:.4);_e(-ge+Ie*v/2,ze+ot*v/2,re),_e(-ge-Ie*v/2,ze-ot*v/2,re),_e(Jt*qt,Qe+zt*qt,re),_e(-Jt*qt,Qe-zt*qt,re),_e(ge+Mt*v/2,ze+Ft*v/2,re),_e(ge-Mt*v/2,ze-Ft*v/2,re)}else for(let ge=0;ge<2;ge++){let ze=ge===0?-1:1;Le(y[ge]-ze*J*Se,fe-J*ce,y[ge]+ze*J*Se,fe+J*ce,v,re)}we=P;let Ne=ae.mouthOpen.x+Pe.x*(.55+.45*Math.sin((Ee+l*.37)*sR*Math.PI*2))*.8,Y=Ne>0?Ne<1.2?Ne:1.2:0,pe=-ae.mouthCurve.x/.5,he=(pe>1?1:pe>0?pe:0)*(Y<.4?Y/.4:1),De=r/2*(1-.35*(Y<1?Y:1)*(1-.7*he)),Ae=oR(ae.lid.x,ae.mouthCurve.x),Te=ae.mouthCurve.x*De*.5*(1-.4*Ae)*(1+.6*he),Ge=.55+.5*he,nt=Y*De*.9;for(let ge=0;ge<Qu;ge++){let ze=ge/(Qu-1)*2-1,Qe=1-ze*ze,Ie=ze*De*(1-.25*Ae)+Ae*De*.2,ot=s-Te*Qe+Ae*De*.45*ze+me.x*v*.6*Math.sin(ze*Math.PI*3);_e(Ie,ot,o),_e(Ie,ot-v-nt*Math.pow(Qe,Ge)+Te*Qe*he,o)}ee.needsUpdate=!0}function se(ae){Ee+=ae;for(let N=0;N<ju.length;N++)Rn(Ye[ju[N]],Xe(ju[N]),l0,ae);Rn(me,ke,l0,ae),Rn(Pe,xe?1:0,l0,ae),Je()}return Je(),{group:ne,setExpression(ae){Ce=Object.prototype.hasOwnProperty.call(ro,ae)?ro[ae]:ro.neutral,ke=ae==="dead"?1:0,Be=Fe(Object.prototype.hasOwnProperty.call(ro,ae)?ae:"neutral")},setTalking(ae){xe=!!ae},update:se}}var si=Math.PI*2,Kl=["handL","handR","footL","footR"];function ms(){return{hipsY:0,lean:0,twist:0,headYaw:0,headPitch:0,elbows:0,handL:[0,0,0],handR:[0,0,0],footL:[0,0,0],footR:[0,0,0],squash:1}}function Lx(t,e){e.hipsY=t.hipsY,e.lean=t.lean,e.twist=t.twist,e.headYaw=t.headYaw,e.headPitch=t.headPitch,e.squash=t.squash,e.elbows=t.elbows;for(let n=0;n<4;n++){let i=t[Kl[n]],s=e[Kl[n]];s[0]=i[0],s[1]=i[1],s[2]=i[2]}return e}function Zl(t,e,n,i=[0,0,0]){let s=n[0],r=n[1]-t.hipHeight,o=n[2],a=Math.cos(e.lean),l=Math.sin(e.lean),c=Math.cos(e.twist),h=Math.sin(e.twist),d=r*a-o*l,u=r*l+o*a;return i[0]=s*c+u*h,i[1]=d+e.hipsY,i[2]=-s*h+u*c,i}var cR=t=>t<0?0:t>1?1:t,ps=(t,e,n)=>{let i=cR((n-t)/(e-t));return i*i*(3-2*i)},oo=(t,e,n,i,s)=>ps(e,n,t)*(1-ps(i,s,t));function Nt(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}var ed=[0,0,0];function Di(t,e,n,i,s,r){return ed[0]=n,ed[1]=i,ed[2]=s,Zl(t,e,ed,r)}var td={sx:0,sy:0,fx:0};function jn(t){return td.sx=Math.abs(t.shoulderL[0]),td.sy=t.shoulderL[1],td.fx=Math.abs(t.hipL[0])+.035,td}var ma=(t,e)=>e>0?t.handL:t.handR;function c0(t,e,n,i,s){return Di(t,e,s*(n.sx+.16),t.hipHeight+0,.1,i)}var h0=.55;function od(t,e,n){let i=jn(e),s=t/_t.idle.duration,r=si*s,o=e.hipHeight,a=oo(s,.42,.52,.72,.86);return n.hipsY=o-.012+.006*Math.sin(r)-.004*Math.cos(2*r),n.lean=.03+.015*Math.sin(r+.4),n.twist=.05*Math.sin(r+.6),n.headYaw=.03*Math.sin(r)+.3*a,n.headPitch=-.02+.03*Math.sin(2*r+1)+.1*a,n.squash=1+.008*Math.sin(r),n.elbows=h0,c0(e,n,i,n.handL,1),c0(e,n,i,n.handR,-1),n.handL[1]+=.008*Math.sin(r-.5),n.handR[1]+=.008*Math.sin(r+.4),n.handL[2]+=.01*Math.sin(r+1.1),n.handR[2]+=.01*Math.sin(r-.7),Nt(n.footL,i.fx,0,.015),Nt(n.footR,-i.fx,0,-.015),n}var Xs=.34,u0=.25,Nx=-.33,hR=.4,uR=.37,dR=.035,rd=(u0-Nx)/Xs;function kx(t,e){if(t<Xs)return e[0]=0,e[1]=u0-rd*t,e;let n=(t-Xs)/(1-Xs),i=-rd*(1-Xs),s=-.35*rd*(1-Xs),r=n*n,o=r*n;return e[1]=(2*o-3*r+1)*Nx+(o-2*r+n)*i+(-2*o+3*r)*u0+(o-r)*s,e[0]=hR*Math.sin(Math.PI*Math.pow(n,.8)),e}var On=[0,0];function Ox(t,e,n){let i=jn(e),s=t/_t.run.duration,r=s-Math.floor(s),o=e.hipHeight,a=2*si*(r-(Xs+.5)/2);n.hipsY=o-.06+dR*Math.cos(a),n.squash=1+.045*Math.cos(2*si*(r-Xs-.03)),n.lean=uR+.03*Math.cos(2*si*(r-Xs));let l=Math.cos(si*(r+.03));n.twist=.2*l,n.headYaw=-.15*l,n.headPitch=-.28+.04*Math.cos(a),n.elbows=0,kx(r,On),Nt(n.footL,i.fx*.75,On[0],On[1]),kx(r<.5?r+.5:r-.5,On),Nt(n.footR,-i.fx*.75,On[0],On[1]);for(let c=-1;c<=1;c+=2){let h=(1-c*l)/2;Di(e,n,c*(i.sx+.13-.1*h+.12*Math.sin(Math.PI*h)),i.sy-.34+.28*h+.05*Math.sin(Math.PI*h),-.14+.46*h,ma(n,c))}return n}function Fx(t,e,n){let i=jn(e),s=si*t/_t.aim.duration,r=e.hipHeight;n.hipsY=r-.05+.005*Math.sin(s),n.lean=.12+.01*Math.sin(s),n.twist=-.1,n.headYaw=.08,n.headPitch=.04+.012*Math.sin(2*s),n.squash=1,n.elbows=1;let o=.012*Math.sin(s),a=.008*Math.sin(2*s);return Nt(n.handL,i.sx*1.2+o,i.sy-.12+a,.56),Nt(n.handR,-i.sx*1.25+o,i.sy-.06+a,.52),Nt(n.footL,i.fx+.02,0,.15),Nt(n.footR,-i.fx-.03,0,-.13),n}var d0=.35;function fR(t){return t<.06?ps(0,.06,t):Math.exp(-9*(t-.06))*(1-ps(.24,d0,t))}function pR(t){if(t<.07)return ps(0,.07,t);let e=t-.07;return Math.exp(-11*e)*Math.cos(si*e/.22)*(1-ps(.26,d0,t))}function mR(t,e,n){let i=jn(e),s=e.hipHeight,r=fR(t);n.hipsY=s-.012-.05*r,n.lean=.03-.4*r,n.twist=.12*r,n.headYaw=-.12*r,n.headPitch=-.02-.32*r,n.squash=1-.15*pR(t),n.elbows=h0+(1-h0)*r;for(let o=-1;o<=1;o+=2){let a=ma(n,o);c0(e,n,i,a,o);let l=a[0],c=a[1],h=a[2];Di(e,n,o*i.sx*1.75,i.sy+.08,.14,a),a[0]=l+(a[0]-l)*r,a[1]=c+(a[1]-c)*r,a[2]=h+(a[2]-h)*r}return Nt(n.footL,i.fx,0,.015),Nt(n.footR,-i.fx,0,-.015),n}var vr=[0,0,0];function gR(t,e,n){od(t,e,n);let i=jn(e),s=t/_t.talk.duration,r=si*s,o=oo(s,.04,.17,.4,.55),a=oo(s,.5,.63,.8,.95),l=Math.sin(3*r);n.headPitch+=.05*Math.sin(4*r)-.04*(o+a),n.headYaw+=-.12*o+.12*a,n.elbows+=(.85-n.elbows)*Math.max(o,a),Di(e,n,-(i.sx+.19),i.sy-.1+.03*l,.36,vr);for(let c=0;c<3;c++)n.handR[c]+=(vr[c]-n.handR[c])*o;Di(e,n,i.sx+.19,i.sy-.12-.03*l,.34,vr);for(let c=0;c<3;c++)n.handL[c]+=(vr[c]-n.handL[c])*a;return n}var di=ms();function vR(t,e,n){let i=t/_t.roll.duration,s=oo(i,0,.15,.75,1),r=jn(e);od(0,e,di);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(di.hipsY,.45),n.lean=o(di.lean,1.3),n.twist=0,n.headYaw=0,n.headPitch=o(di.headPitch,.35),n.squash=o(1,.9),n.elbows=1;for(let a=-1;a<=1;a+=2){let l=ma(n,a),c=ma(di,a);l[0]=o(c[0],a*(r.sx+.2)),l[1]=o(c[1],.2),l[2]=o(c[2],.3);let h=a>0?n.footL:n.footR,d=a>0?di.footL:di.footR;h[0]=o(d[0],a*r.fx),h[1]=o(d[1],.18),h[2]=o(d[2],-.05)}return n}function xR(t,e,n){return Ox(t,e,n),n.hipsY-=.12,n.lean+=.15,n}var yR=.25,bR=.85,_R=.82;function Ux(t,e,n){let i=jn(e),s=si*t/_t.coverLow.duration;return n.hipsY=yR+.006*Math.sin(s),n.lean=bR+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=-.55+.03*Math.sin(2*s+1),n.squash=_R,n.elbows=1,Nt(n.handL,i.sx+.12,.88+.006*Math.sin(s-.5),.66),Nt(n.handR,-i.sx-.12,.88+.006*Math.sin(s+.4),.66),Nt(n.footL,i.fx+.08,0,.12),Nt(n.footR,-i.fx-.08,0,.12),n}function Bx(t,e,n,i){let s=jn(t),r=i/_t[n].duration,o=Math.sin(si*r);return e.hipsY+=.012*Math.cos(2*si*r),e.footL[0]+=.06*o,e.footR[0]+=.06*o,e.footL[1]=.09*Math.max(0,o),e.footR[1]=.09*Math.max(0,-o),e.twist+=.03*o,s}function MR(t,e,n){return Ux(0,e,n),Bx(e,n,"coverLowMove",t),n}function f0(t,e,n){let i=jn(e),s=si*t/_t.coverTall.duration;return n.hipsY=e.hipHeight-.012+.006*Math.sin(s),n.lean=.07+.01*Math.sin(s+.4),n.twist=.02*Math.sin(s+.6),n.headYaw=.05*Math.sin(s),n.headPitch=0+.02*Math.sin(2*s+1),n.squash=1+.006*Math.sin(s),n.elbows=1,Di(e,n,i.sx+.14,i.sy+0,.31,n.handL),Di(e,n,-i.sx-.14,i.sy+0,.31,n.handR),Nt(n.footL,i.fx,0,.015),Nt(n.footR,-i.fx,0,-.015),n}function wR(t,e,n){return f0(0,e,n),Bx(e,n,"coverTallMove",t),n}function SR(t,e,n){return Fx(t*(_t.aim.duration/_t.coverPop.duration),e,n),n.hipsY-=.07,n.lean+=.06,n.footL[2]+=.04,n.footR[2]-=.04,n.footL[0]+=.04,n.footR[0]-=.04,n}function TR(t,e,n){let i=t/_t.vault.duration,s=oo(i,0,.3,.7,1),r=jn(e);od(0,e,di);let o=(a,l)=>a+(l-a)*s;n.hipsY=o(di.hipsY,e.hipHeight-.02),n.lean=o(di.lean,.55),n.twist=0,n.headYaw=0,n.headPitch=o(di.headPitch,-.25),n.squash=1,n.elbows=1;for(let a=-1;a<=1;a+=2){let l=ma(n,a),c=ma(di,a);l[0]=o(c[0],a*(r.sx+.14)),l[1]=o(c[1],.7),l[2]=o(c[2],.62);let h=a>0?n.footL:n.footR,d=a>0?di.footL:di.footR;h[0]=o(d[0],a*(r.fx+.04)),h[1]=o(d[1],.55),h[2]=o(d[2],.3)}return n}var ER=.17,AR=.5,RR=-.9,CR=.82;function PR(t,e,n){let i=jn(e),s=si*t/_t.coverBlindLow.duration;return n.hipsY=ER+.006*Math.sin(s),n.lean=AR+.015*Math.sin(s+.4),n.twist=.03*Math.sin(s+.6),n.headYaw=.04*Math.sin(s),n.headPitch=RR+.03*Math.sin(2*s+1),n.squash=CR,n.elbows=1,Zl(e,n,e.shoulderR,vr),Nt(n.handR,vr[0]-.02,vr[1]+.44+.008*Math.sin(s+.4),vr[2]+.12),Nt(n.handL,i.sx+.12,.72+.006*Math.sin(s-.5),.44),Nt(n.footL,i.fx+.08,0,.12),Nt(n.footR,-i.fx-.08,0,.12),n}function Dx(t,e,n,i){f0(t*(_t.coverTall.duration/_t.coverBlindTallL.duration),e,n);let s=jn(e);return Di(e,n,i*(s.sx+.4),s.sy,.2,i>0?n.handL:n.handR),n}var IR=.3,LR=1.2,nd=[.4,.62],id=[-.6,-.36];function sd(t,e,n,i,s,r){if(t-=Math.floor(t),t<.5)return r[0]=s,r[1]=e+(n-e)*(t/.5),r;let o=(t-.5)/.5;return r[0]=s+i*Math.sin(Math.PI*o),r[1]=n+(e-n)*(o*o*(3-2*o)),r}function kR(t,e,n){let i=jn(e),s=t/_t.crawl.duration,r=si*s;return n.hipsY=IR+.012*Math.cos(2*r),n.lean=LR+.03*Math.cos(2*r),n.twist=.1*Math.sin(r),n.headYaw=-.1*Math.sin(r),n.headPitch=-.75,n.squash=1,n.elbows=1,sd(s,nd[1],nd[0],.16,.04,On),Nt(n.handL,i.sx+.12,On[0],On[1]),sd(s+.5,nd[1],nd[0],.16,.04,On),Nt(n.handR,-i.sx-.12,On[0],On[1]),sd(s,id[1],id[0],.16,0,On),Nt(n.footR,-i.fx-.02,On[0],On[1]),sd(s+.5,id[1],id[0],.16,0,On),Nt(n.footL,i.fx+.02,On[0],On[1]),n}function pa(t,e,n){let i=e.length;if(t<=e[0][0])return Nt(n,e[0][1],e[0][2],e[0][3]);for(let r=0;r<i-1;r++){let o=e[r],a=e[r+1];if(t<a[0]){let l=ps(o[0],a[0],t);return Nt(n,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l,o[3]+(a[3]-o[3])*l)}}let s=e[i-1];return Nt(n,s[1],s[2],s[3])}var DR=.4,NR=.9;function OR(t,e,n){let i=jn(e),s=t/_t.revive.duration,r=si*s;return n.hipsY=DR+.012*Math.sin(2*r),n.lean=NR+.05*Math.sin(2*r),n.twist=.04*Math.sin(r),n.headYaw=.04*Math.sin(r),n.headPitch=-.55,n.squash=1,n.elbows=1,Nt(n.handL,i.sx-.06,.37-.06*Math.sin(r),.64),Nt(n.handR,-i.sx+.06,.37+.06*Math.sin(r),.64),Nt(n.footL,i.fx+.06,0,-.32),Nt(n.footR,-i.fx-.06,0,-.32),n}var FR=[[0,-.3,1,.3],[.17,-.29,1.08,.08],[.33,-.23,1.17,.5],[.55,-.23,1.17,.5],[1,-.3,1,.3]],UR=[[0,.1,0,0],[.17,-.05,0,0],[.33,.15,0,0],[.55,.15,0,0],[1,.1,0,0]],BR=[[0,0,0,0],[.17,-.3,0,0],[.33,.3,0,0],[.55,.25,0,0],[1,0,0,0]],Zn=[0,0,0];function zR(t,e,n){let i=jn(e),s=t/_t.bash.duration;return pa(s,UR,Zn),n.lean=Zn[0],pa(s,BR,Zn),n.twist=Zn[0],n.hipsY=e.hipHeight-.09-.03*oo(s,.2,.33,.55,.9),n.headYaw=-.5*n.twist,n.headPitch=-.1,n.squash=1,n.elbows=1,pa(s,FR,Zn),Di(e,n,Zn[0],Zn[1],Zn[2],n.handR),Di(e,n,i.sx+.14,i.sy-.1,.32,n.handL),Nt(n.footL,i.fx+.04,0,-.14),Nt(n.footR,-i.fx-.04,0,.2),n}var HR=[[0,-.3,1,.3],[.3,-.31,1.38,-.12],[.4,-.22,1.6,.04],[.6,-.2,1.22,.5],[.9,-.15,.98,.46],[1,-.3,1,.3]],GR=[[0,.1,0,0],[.3,-.2,0,0],[.4,-.28,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,.1,0,0]],VR=[[0,-.1,0,0],[.3,-.45,0,0],[.4,-.45,0,0],[.6,.35,0,0],[.9,.3,0,0],[1,-.1,0,0]];function WR(t,e,n){let i=jn(e),s=t/_t.throw.duration;return pa(s,GR,Zn),n.lean=Zn[0],pa(s,VR,Zn),n.twist=Zn[0],n.hipsY=e.hipHeight-.07-.03*oo(s,.4,.6,.9,1),n.headYaw=-.4*n.twist,n.headPitch=-.05,n.squash=1,n.elbows=1,pa(s,HR,Zn),Di(e,n,Zn[0],Zn[1],Zn[2],n.handR),Di(e,n,i.sx+.2,i.sy-.12-.08*ps(.5,.9,s),.34-.12*ps(.5,.9,s),n.handL),Nt(n.footL,i.fx+.04,0,.1+.06*ps(.4,.7,s)),Nt(n.footR,-i.fx-.04,0,-.16),n}var XR=.05;function wn(t,e,n,i=XR){return Object.freeze({duration:t,loop:e,ease:i,sample:(s,r,o=ms())=>n(s,r,o)})}var _t=Object.freeze({idle:wn(2.4,!0,od),run:wn(.56,!0,Ox,.008),aim:wn(1.6,!0,Fx),flinch:wn(d0,!1,mR),talk:wn(2.4,!0,gR),roll:wn(.55,!1,vR,.02),sprint:wn(.56,!0,xR,.008),coverLow:wn(2.4,!0,Ux),coverLowMove:wn(.5,!0,MR),coverTall:wn(2.4,!0,f0),coverTallMove:wn(.5,!0,wR),coverPop:wn(1.6,!0,SR),vault:wn(.5,!1,TR,.02),coverBlindLow:wn(1.6,!0,PR),coverBlindTallL:wn(1.6,!0,(t,e,n)=>Dx(t,e,n,1)),coverBlindTallR:wn(1.6,!0,(t,e,n)=>Dx(t,e,n,-1)),crawl:wn(1,!0,kR),revive:wn(.5,!0,OR),bash:wn(.45,!1,zR,.02),throw:wn(.5,!1,WR,.02)}),gs=rd/_t.run.duration;function jl(t,e,n,i){let s=Object.prototype.hasOwnProperty.call(_t,t)?_t[t]:null;if(!s)throw new Error(`unknown clip: ${t}`);let r=s.loop?e:Math.min(Math.max(e,0),s.duration);return s.sample(r,n,i||ms())}function ad(t,e,n,i=ms()){if(!(n>0))return Lx(t,i);if(n>=1)return Lx(e,i);let s=1-n;i.hipsY=t.hipsY*s+e.hipsY*n,i.lean=t.lean*s+e.lean*n,i.twist=t.twist*s+e.twist*n,i.headYaw=t.headYaw*s+e.headYaw*n,i.headPitch=t.headPitch*s+e.headPitch*n,i.squash=t.squash*s+e.squash*n,i.elbows=t.elbows*s+e.elbows*n;for(let r=0;r<4;r++){let o=t[Kl[r]],a=e[Kl[r]],l=i[Kl[r]];l[0]=o[0]*s+a[0]*n,l[1]=o[1]*s+a[1]*n,l[2]=o[2]*s+a[2]*n}return i}var YR=.05,Ys=["hipsY","lean","twist","headYaw","headPitch","squash","elbows"],Jl=["handL","handR","footL","footR"],p0=Ys.length+Jl.length*3,ga=[.35,-.2,-.8],m0=[.75,-.85,-.15];function cn(t,e){if(t.deleteAttribute("uv"),!t.index){let r=t.getAttribute("position").count,o=new Array(r);for(let a=0;a<r;a++)o[a]=a;t.setIndex(o)}let n=new $e(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new bt(s,3)),t}var qR=new wt,ri=(t,e,n,i,s=0,r=0,o=0,a=1,l=1,c=1)=>t.applyMatrix4(qR.compose(new G(e,n,i),new ti().setFromEuler(new hi(s,r,o)),new G(a,l,c)));function ao(t=20,e=14){let n=new pn(1,t,e);return n.deleteAttribute("uv"),n.deleteAttribute("normal"),vx(n)}function g0(t,e,n){let i=ao(e,n),s=i.getAttribute("position"),r=[0,0,0];for(let o=0;o<s.count;o++)t(s.getX(o),s.getY(o),s.getZ(o),r),s.setXYZ(o,r[0],r[1],r[2]);return i.computeVertexNormals(),i}function cd(t,e,n){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,s,r),a=new en(n,n,o,6,1),l=new ti().setFromUnitVectors(new G(0,1,0),new G(i/o,s/o,r/o));return a.applyMatrix4(new wt().compose(new G((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),l,new G(1,1,1))),a}function hd(t,e,n={}){let i=Bt(t,!1);if(!i)throw new Error(`rig: could not merge the ${e} parts`);bi(i),i.computeBoundingSphere();let s=new rt(i,Tt({color:"#ffffff",vertexColors:!0,...n.rim!==void 0?{rim:n.rim}:{},...n.rimColor?{rimColor:n.rimColor}:{}}));return s.name=e,Gn(s),s}function v0(t,e,n,i,s){let r=2/t.power,o=l=>Math.sign(l)*Math.pow(Math.abs(l),r);s[0]=o(e)*t.rx,s[1]=o(n)*t.ry;let a=o(i)*t.rz;return a>t.flatZ&&(a=t.flatZ+(a-t.flatZ)*t.flatK),s[2]=a,s}function $R(t){let e=t.torso,n=t.colors,i=t.outfit,s=(h,d)=>{let u=new Cl(h.map(([f,m])=>new He(f,m)),22);return u.scale(1,1,e.depth),cn(u,d)},r=[s(e.pants,n.pants),s(e.shirt,n.shirt)],o=e.shirt[e.shirt.length-2][1],a=h=>{let d=e.shirt;for(let u=1;u<d.length;u++)if(h<=d[u][1]){let f=(h-d[u-1][1])/(d[u][1]-d[u-1][1]||1);return d[u-1][0]+(d[u][0]-d[u-1][0])*f}return 0},l=(h,d)=>{let u=a(d);return e.depth*u*Math.sqrt(Math.max(1-h*h/(u*u),0))},c=t.shoulderL[1]-t.hipHeight;for(let h of[-1,1]){let d=ao(14,10);ri(d,h*Math.abs(t.shoulderL[0])*.97,c-.01,0,0,0,h*.5,e.sleeve*1.15,e.sleeve,e.sleeve*1.05),d.computeVertexNormals(),r.push(cn(d,n.shirt))}if(t.neck){let h=new en(t.neck.radius,t.neck.radius*1.08,.16,14,1);ri(h,0,o-.03,0,0,0,0,1,1,t.neck.depth),r.push(cn(h,n.skin))}if(i.collar){let h=new Qr(.1,.03,8,20);ri(h,0,o-.03,.005,Math.PI/2-.25,0,0,1,1,.8),r.push(cn(h,n.collar))}if(i.logo){let u=new en(.03,.03,.01,12);ri(u,.105,.28,l(.105,.28)+.003,Math.PI/2-.15,0,0),r.push(cn(u,n.logo))}if(i.badge&&!i.lanyard){let d=l(.09,.2)+.012,u=new ut(.075,.1,.014);ri(u,.09,.2,d,-.05,0,.04);let f=new ut(.077,.026,.016);ri(f,.09,.2+.028,d,-.05,0,.04),r.push(cn(u,n.badge),cn(f,n.badgeStripe))}if(i.lanyard){let d=l(0,.15)+.012;for(let m of[-1,1]){let y=[m*.075,o-.03,.085],g=[m*.05,.34,l(.05,.34)+.014],p=[m*.014,.15+.05,l(.014,.15+.05)+.01];r.push(cn(cd(y,g,.008),n.lanyard),cn(cd(g,p,.008),n.lanyard))}let u=new ut(.075,.1,.014);ri(u,0,.15,d,-.05,0,.04);let f=new ut(.077,.026,.016);ri(f,0,.15+.028,d,-.05,0,.04),r.push(cn(u,n.badge),cn(f,n.badgeStripe))}return hd(r,"torso",n)}function KR(t){let e=t.head,n=t.hair,i=t.colors,s=t.outfit,r=[],o=g0((a,l,c,h)=>v0(e,a,l,c,h),40,28);r.push(cn(o,i.skin),cn(ZR(e,n),i.hair));for(let a of[-1,1]){let l=ao(12,8);ri(l,a*e.rx*.97,-.03,-.015,0,a*.3,0,e.ear*.45,e.ear,e.ear*.75),l.computeVertexNormals(),r.push(cn(l,i.skin))}{let a=t.face,l=(a.eyeY+a.mouthY)/2-.005,c=ao(12,8);ri(c,0,l,jR(e,0,l),0,0,0,e.nose*.9,e.nose*.8,e.nose),c.computeVertexNormals(),r.push(cn(c,i.skin))}if(s.headset){let a=e.ry+n.thickness+.03,l=new ii;l.getPoint=(y,g=new G)=>g.set(Math.cos(Math.PI*y)*(e.rx+n.thickness+.012),Math.sin(Math.PI*y)*a,0);let c=new Pl(l,24,.014,6,!1);ri(c,0,0,-.03,-.12,0,0),r.push(cn(c,i.headset));for(let y of[-1,1]){let g=new en(.055,.06,.05,14);ri(g,y*(e.rx+.02),-.01,-.02,0,0,Math.PI/2),r.push(cn(g,i.headset))}let h=t.face,d=[e.rx+.035,-.04,0],u=[e.rx+.005,h.mouthY+.01,.13],f=[h.mouthWidth/2+.06,h.mouthY-.02,h.mouthZ+.025];r.push(cn(cd(d,u,.009),i.headset),cn(cd(u,f,.009),i.headset));let m=ao(10,8);ri(m,f[0],f[1],f[2],0,0,0,.022,.02,.022),m.computeVertexNormals(),r.push(cn(m,i.mic))}return hd(r,"headMesh",i)}var xr=48,ld=12;function ZR(t,e){let n=(u,f)=>.04+.17*f+.025*Math.max(f,0)*u,i=[0,0,0],s=Ou.smoothstep,r=[],o=(u,f,m)=>{let y=Math.sin(u)*Math.sin(f),g=Math.cos(u),p=Math.sin(u)*Math.cos(f);v0(t,y,g,p,i);let v=i[0]/(t.rx*t.rx),_=i[1]/(t.ry*t.ry),M=i[2]/(t.rz*t.rz),S=Math.hypot(v,_,M)||1;v/=S,_/=S,M/=S;let E=Math.exp(-(((i[0]-.085)/.018)**2))*s(i[1],.12,.2)*Math.max(p+.3,0),x=e.quiff?e.lift*Math.max(p,0)*s(i[1],.12,.26)*(1-.5*y):0,b=e.back*Math.max(-p,0)*s(i[1],-.15,.1),P=m?-.01:e.thickness*(1-.55*Math.min(E,1))+x+b;r.push(i[0]+v*P,i[1]+_*P,i[2]+M*P)},a=u=>{let f=0,m=Math.PI;for(let y=0;y<40;y++){let g=(f+m)/2,p=Math.sin(g)*Math.sin(u),v=Math.sin(g)*Math.cos(u);v0(t,p,Math.cos(g),v,i),i[1]>n(p,v)?f=g:m=g}return f};o(0,0,!1);let l=[];for(let u=0;u<xr;u++)l.push(a(u/xr*Math.PI*2));for(let u=1;u<=ld+1;u++)for(let f=0;f<xr;f++){let m=f/xr*Math.PI*2,y=u>ld;o(y?l[f]+.03:l[f]*(u/ld),m,y)}let c=(u,f)=>1+(u-1)*xr+f%xr,h=[];for(let u=0;u<xr;u++)h.push(0,c(1,u),c(1,u+1));for(let u=1;u<=ld;u++)for(let f=0;f<xr;f++){let m=c(u,f),y=c(u,f+1),g=c(u+1,f),p=c(u+1,f+1);h.push(m,g,p,m,p,y)}let d=new Ut;return d.setAttribute("position",new vt(r,3)),d.setIndex(h),d.computeVertexNormals(),d}function jR(t,e,n){let i=1-Math.pow(Math.abs(e/t.rx),t.power)-Math.pow(Math.abs(n/t.ry),t.power),s=i>0?t.rz*Math.pow(i,1/t.power):0;return s>t.flatZ?t.flatZ+(s-t.flatZ)*t.flatK:s}function zx(t,e){let n=t.hand.radius,i=t.colors,s=ao(14,10);ri(s,0,n*.75,0,0,0,0,n*.78,n*1.1,n*.95),s.computeVertexNormals();let r=ao(10,8);return ri(r,n*.3,n*.45,e*n*.75,e*-.6,0,.3,n*.34,n*.55,n*.34),r.computeVertexNormals(),hd([cn(s,i.skin),cn(r,i.skin)],e>0?"handL":"handR",i)}function Hx(t,e){let n=t.shoe,i=t.colors,s=n.width/2,r=n.length/2,o=n.length*.18,a=.03,l=g0((h,d,u,f)=>{f[0]=h*s*(u>0?1:.9),f[1]=Math.max(a*.8,n.height*.55+d*n.height*.6-Math.max(u,0)*n.height*.25),f[2]=o+u*r*.96},20,12),c=g0((h,d,u,f)=>{f[0]=h*(s+.008),f[1]=Math.min(Math.max(a*.5+d*a,0),a),f[2]=o+u*(r+.008)},20,6);return hd([cn(l,i.shoe),cn(c,i.sole)],e>0?"footL":"footR",i)}function vs(t){let e=new dt;e.name=t.name||"character";let n=new dt;n.name="body",e.add(n);let i=new dt;i.name="hips",i.rotation.order="YXZ";let s=$R(t);i.add(s);let r=new dt;r.name="head",r.rotation.order="YXZ",r.position.set(0,t.neckY-t.hipHeight,0),i.add(r);let o=KR(t);o.position.y=t.head.centerY,r.add(o);let a=Ix({...t.face,lidColor:t.colors.skin});a.group.position.y=t.head.centerY,r.add(a.group),n.add(i);let l=[zx(t,1),zx(t,-1)],c=[Hx(t,1),Hx(t,-1)],h=[0,1].map(()=>a0({radius:t.armRadius,color:t.colors.skin})),d=[0,1].map(()=>a0({radius:t.legRadius,color:t.colors.pants}));h[0].mesh.name="armL",h[1].mesh.name="armR",d[0].mesh.name="legL",d[1].mesh.name="legR",n.add(...l,...c,h[0].mesh,h[1].mesh,d[0].mesh,d[1].mesh);let u=Ku({rx:.45,rz:.38,opacity:.55});e.add(u);let f=ms(),m=ms(),y=[];for(let W=0;W<p0;W++)y.push({x:0,v:0});let g=!1,p=YR,v=(W,ee)=>ee<Ys.length?W[Ys[ee]]:W[Jl[(ee-Ys.length)/3|0]][(ee-Ys.length)%3];function _(W,ee,Me){ee<Ys.length?W[Ys[ee]]=Me:W[Jl[(ee-Ys.length)/3|0]][(ee-Ys.length)%3]=Me}function M(W,ee){ee>=0&&(p=ee),f.hipsY=W.hipsY,f.lean=W.lean,f.twist=W.twist,f.headYaw=W.headYaw,f.headPitch=W.headPitch,f.squash=W.squash,f.elbows=W.elbows>=0?W.elbows:0;for(let Me=0;Me<4;Me++){let te=W[Jl[Me]],oe=f[Jl[Me]];oe[0]=te[0],oe[1]=te[1],oe[2]=te[2]}if(!g){g=!0;for(let Me=0;Me<p0;Me++)y[Me].x=v(f,Me),y[Me].v=0}}let S=[0,0,0],E=[0,0,0],x=[0,0,0],b=[0,0,0],P={mid:[0,0,0],end:[0,0,0],stretch:1},L=new G,C=new G,w=new G,D=new wt,k=t.armLength/2,I=t.legLength/2,F=t.ankleHeight;function z(W,ee,Me){let te=Math.cos(m.twist),oe=Math.sin(m.twist);b[0]=W*te+Me*oe,b[1]=ee,b[2]=-W*oe+Me*te}function $(){let W=m.squash>.2?m.squash:.2,ee=1/Math.sqrt(W);n.scale.set(ee,W,ee),i.position.set(0,m.hipsY,0),i.rotation.set(m.lean,m.twist,0),r.rotation.set(m.headPitch,m.headYaw,0);for(let Me=0;Me<2;Me++){let te=Me===0?1:-1;Zl(t,m,Me===0?t.shoulderL:t.shoulderR,S);let oe=m.elbows<0?0:m.elbows>1?1:m.elbows;z(te*(ga[0]+(m0[0]-ga[0])*oe),ga[1]+(m0[1]-ga[1])*oe,ga[2]+(m0[2]-ga[2])*oe),o0(S,Me===0?m.handL:m.handR,k,k,b,P),h[Me].set(S,P.mid,P.end,P.stretch);let be=l[Me];be.position.set(P.end[0],P.end[1],P.end[2]),L.set(P.end[0]-P.mid[0],P.end[1]-P.mid[1],P.end[2]-P.mid[2]),L.lengthSq()<1e-10&&L.set(0,-1,0),L.normalize(),C.set(-te*Math.cos(m.twist),0,te*Math.sin(m.twist)),C.addScaledVector(L,-C.dot(L)),C.lengthSq()<1e-4&&C.set(0,0,1).addScaledVector(L,-L.z),C.normalize(),w.crossVectors(C,L),D.makeBasis(C,L,w),be.quaternion.setFromRotationMatrix(D),Zl(t,m,Me===0?t.hipL:t.hipR,E);let Oe=Me===0?m.footL:m.footR;x[0]=Oe[0],x[1]=Oe[1]+F,x[2]=Oe[2],z(te*.15,0,1),o0(E,x,I,I,b,P),d[Me].set(E,P.mid,P.end,P.stretch);let ne=c[Me];ne.position.set(P.end[0],P.end[1]-F,P.end[2]),ne.rotation.set(Math.min(Math.max(P.end[1]-F,0),.3)*1.1,m.twist*.3,0)}}function X(W){if(g)for(let ee=0;ee<p0;ee++)Rn(y[ee],v(f,ee),p,W),_(m,ee,y[ee].x);$(),a.update(W)}jl("idle",0,t,m),$();function j(){e.traverse(W=>{!W.isMesh||W.userData.isOutline||(W.geometry.dispose(),W!==u&&W.material.dispose())}),e.removeFromParent()}return{root:e,spec:t,face:a,setPose:M,update:X,dispose:j,shadow:u}}var JR=.15,QR=.03,Gx=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function xs(t){let e=t.spec,n="idle",i=0,s="idle",r=0,o=0,a=_t[n].ease,l=ms(),c=ms(),h=jl(n,0,e);ad(h,h,1,l);function d(m,{fade:y,at:g}={}){Object.prototype.hasOwnProperty.call(_t,m)&&(m===n&&_t[m].loop||(m==="flinch"&&n!=="flinch"&&(s=n),ad(h,h,1,l),a=u(),r=y===void 0?m==="flinch"?QR:JR:Math.max(y,0),o=0,n=m,i=Number.isFinite(g)&&g>0?g:0,t.face.setTalking(m==="talk")))}function u(){let m=r>0?Gx(o/r):1;return a+(_t[n].ease-a)*m}function f(m,y=m){let g=_t[n];if(i+=m,o+=y,g.loop)i>=g.duration&&(i-=g.duration*Math.floor(i/g.duration));else if(i>=g.duration)return d(s),f(0);jl(n,i,e,c),ad(l,c,r>0?Gx(o/r):1,h),t.setPose(h,u())}return{play:d,update:f,current:()=>n}}function qs(t,e,n){let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8){let a=i>>o&255,l=s>>o&255;r|=Math.round(a+(l-a)*n)<<o}return"#"+r.toString(16).padStart(6,"0")}function Ql(t){for(let e of Object.values(t))e&&typeof e=="object"&&Ql(e);return Object.freeze(t)}var va=B.glorpPurple,ys="#ffcf3a",x0="#8fe04a",Vx=qs(x0,B.ink,.6),Wx={rim:.55,rimColor:"#e4ff8a"},eC=Object.freeze({eyeColor:"#e8ff3a",eyeGlow:!0}),y0=Ql({associate:{shirt:va,collar:qs(va,B.ink,.25),logo:B.gel,pants:qs(B.planet,B.ink,.3),skin:x0,hair:Vx,...Wx,shoe:qs(B.ink,va,.3),sole:B.cream,lanyard:B.hotPink,badge:B.cream,badgeStripe:B.teal,headset:qs(B.ink,B.lilac,.25),mic:B.hotPink},trainer:{shirt:B.planet,collar:B.planet,logo:B.gel,pants:qs(B.teal,B.ink,.45),skin:x0,hair:Vx,...Wx,shoe:B.cream,sole:B.ink,lanyard:B.hotPink,badge:B.cream,badgeStripe:B.teal,headset:B.ink,mic:B.hotPink},boss:{shirt:qs(va,B.ink,.15),collar:ys,logo:ys,pants:qs(va,B.ink,.55),skin:qs(B.lilac,va,.4),hair:ys,rim:.5,rimColor:"#ffe9a8",shoe:ys,sole:B.ink,lanyard:ys,badge:B.cream,badgeStripe:B.hotPink,headset:ys,mic:B.hotPink}}),Wt=Ql({name:"associate",height:1.8,hipHeight:.72,armLength:.52,legLength:.6,shoulderL:[.19,1.095,0],shoulderR:[-.19,1.095,0],hipL:[.1,.665,0],hipR:[-.1,.665,0],ankleHeight:.1,neckY:1.19,armRadius:.045,legRadius:.055,torso:{depth:.76,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.249,.02],[.25,.06],[0,.06]],shirt:[[0,0],[.24,0],[.262,.018],[.262,.06],[.255,.13],[.236,.23],[.205,.32],[.17,.39],[.125,.445],[.07,.478],[0,.49]],sleeve:.075},head:{rx:.26,ry:.29,rz:.235,power:2.5,centerY:.3,flatZ:.16,flatK:.22,nose:.03,ear:.05},hair:{thickness:.032,lift:.04,back:.05,quiff:!0},hand:{radius:.07},shoe:{length:.32,width:.17,height:.135},colors:y0.associate,outfit:{collar:!0,lanyard:!0,logo:!0,headset:!0},face:{eyeRadius:.072,eyeSpacing:.158,eyeY:.035,eyeZ:.204,mouthY:-.105,mouthWidth:.15,mouthZ:.19,brow:"pair",seed:6,fixedSmile:.75,...eC}}),Xx=Ql({...Wt,name:"trainer",colors:y0.trainer,torso:{...Wt.torso,sleeve:.02},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1,badge:!0},face:{...Wt.face,seed:11}}),ud=Ql({...Wt,name:"overlord",colors:y0.boss,face:{...Wt.face,seed:21,eyeColor:ys}});var tC=1.5,nC=8,iC=-.2,sC=1.3,Yx=.6,rC=Math.atan2(1.3,-4),oC=new G(-.45,.22,-1).applyEuler(new hi(-.2,.68,0)).toArray(),qx=10,aC=.8,lC=.05,cC=["idle","run","aim","flinch","talk"],ec=Object.keys(ro),$x=(t,e,n)=>Math.min(n,Math.max(e,t));function hC(t,e,n,i=[0,0,0]){return i[0]=Math.sin(t)*Math.cos(e)*n,i[1]=Math.sin(e)*n,i[2]=Math.cos(t)*Math.cos(e)*n,i}function uC(t,e,n=H.camera){let i=Math.sin(e),s=Math.cos(e),r=-Math.cos(e),o=Math.sin(e),a=[t[0]+r*n.right-i*n.back,t[1]+n.up,t[2]+o*n.right-s*n.back],l=[a[0]+i*10,a[1],a[2]+s*10];return{pos:a,look:l}}function Kx({canvas:t,gl:e}){let n=Xu(t,e),i=n.renderer,s=Wu(t),r=document.getElementById("cr-readout"),o=new Yr,a=new Hn(H.camera.fov,1,.1,100),l=Yu({planetDir:oC});o.add(l.mesh);let c=Ax();o.add(c.group);let h=[];function d(ne,Ce,Fe){let Be=vs(Fe===void 0?Wt:{...Wt,face:{...Wt.face,seed:Fe}});Be.root.position.set(ne,0,Ce),Be.root.rotation.y=Yx,o.add(Be.root);let Xe=xs(Be),Ye={rig:Be,anim:Xe};return h.push(Ye),Ye}let u=d(c.spawn[0],c.spawn[2]),f=[],m=!1,y=0,g=!0,p=!1,v=.685,_=.1,M=4.6,S=!1,E=new G(c.spawn[0],c.spawn[1]+1.1,c.spawn[2]),x=[0,0,0];function b(ne){if(!(!cC.includes(ne)&&!Object.prototype.hasOwnProperty.call(_t,ne))){u.anim.play(ne);for(let Ce of f)Ce.anim.play(m?"run":ne)}}function P(ne){let Ce=ec.indexOf(ne);if(!(Ce<0)){y=Ce;for(let Fe of h)Fe.rig.face.setExpression(ne)}}function L(ne){g=!!ne,Qp(o,g)}function C(ne){p=!!ne,u.rig.root.rotation.y=p?rC:Yx}function w(ne){if(ne=!!ne,ne!==m)if(m=ne,ne){let Ce=c.spawn[2]+2.4;for(let Fe=0;Fe<qx;Fe++){let Be=c.spawn[0]+(Fe-(qx-1)/2)*aC,Xe=d(Be,Ce,10+Fe);Xe.anim.play("run"),Xe.rig.face.setExpression(ec[y]),f.push(Xe)}Qp(o,g)}else{for(let Ce of f)Ce.rig.dispose(),h.splice(h.indexOf(Ce),1);f=[]}}function D(){let ne=n.resize();a.aspect=ne.aspect,a.updateProjectionMatrix()}D(),window.addEventListener("resize",D),t.addEventListener("mousedown",ne=>{ne.button===0&&(S=!0)}),window.addEventListener("mouseup",()=>{S=!1}),window.addEventListener("mousemove",ne=>{S&&!s.isLocked()&&k(ne.movementX||0,ne.movementY||0,.006)}),t.addEventListener("wheel",ne=>{M=$x(M*Math.exp(ne.deltaY*.001),tC,nC)},{passive:!0});function k(ne,Ce,Fe){v-=ne*Fe,_=$x(_+Ce*Fe,iC,sC)}window.addEventListener("keydown",ne=>{ne.repeat||(ne.code==="Digit4"?b("flinch"):ne.code==="Digit5"?b("talk"):ne.code==="KeyO"?L(!g):ne.code==="KeyP"?w(!m):ne.code==="KeyL"?s.requestLock():ne.code==="KeyH"&&(r.style.display=r.style.display==="none"?"":"none"))});let I=0,F=0,z=0,$=0,X=0,j=0,W=null,ee=0;window.__cr.stats=()=>({fps:I,ms:F,calls:X,tris:j,scale:n.scale(),characters:h.length}),window.__cr.anim=b,window.__cr.orbit=(ne,Ce,Fe)=>{v=ne,_=Ce,Fe&&(M=Fe)},window.__cr.expression=P,window.__cr.perf=w,window.__cr.gameCam=C,window.__cr.outlines=L;function Me(ne){ne.pressed.weapon1&&b("idle"),ne.pressed.weapon2&&b("run"),ne.pressed.weapon3&&b("aim"),ne.pressed.interact&&P(ec[(y+1)%ec.length]),ne.pressed.grenade&&C(!p)}function te(){if(p){let ne=uC([u.rig.root.position.x,u.rig.root.position.y,u.rig.root.position.z],u.rig.root.rotation.y);a.position.fromArray(ne.pos),a.lookAt(ne.look[0],ne.look[1],ne.look[2])}else hC(v,_,M,x),a.position.set(E.x+x[0],E.y+x[1],E.z+x[2]),a.lookAt(E)}let oe=ne=>ne.toFixed(2);function be(){let ne=W?Object.keys(W.held).filter(Be=>W.held[Be]).join(" "):"",Ce=s.padStatus(),Fe=W&&Ce!=="none"&&Ce!=="unrecognised controller"?`Gamepad: ${Ce}
  move ${oe(W.moveX)}, ${oe(W.moveY)}  look ${oe(W.lookX)}, ${oe(W.lookY)}
  held: ${ne||"nothing"}`:`Gamepad: ${Ce}`;r.textContent=["LOOK TEST","Drag: orbit    Wheel: zoom","1 2 3 4 5: idle run aim flinch talk","E: next expression    G: game camera","O: outlines    P: ten more, running","L: lock pointer (Esc releases)    H: hide panel","",`${u.anim.current()} / ${ec[y]}   camera: ${p?"game":"orbit"}   outlines: ${g?"on":"off"}`,`${Math.round(I)} fps   ${oe(F)} ms   scale ${n.scale()}`,`${X} draw calls   ${j} triangles   ${h.length} characters`,`Pointer lock: ${s.isLocked()?"yes":"no"}   mouse ${W?Math.round(W.lookDX):0}, ${W?Math.round(W.lookDY):0}`,Fe].join(`
`)}let Oe=Vu({step(){},render(ne,Ce){let Fe=Math.min(Ce,lC);W=s.poll(),Me(W),s.isLocked()&&!p&&k(W.lookDX,W.lookDY,.003),p||k(W.lookX*600*Fe,W.lookY*600*Fe,.004),l.update(performance.now()/1e3),c.update(Fe);for(let Be of h)Be.anim.update(Fe),Be.rig.update(Fe);te(),i.render(o,a),X=i.info.render.calls,j=i.info.render.triangles,z++,$+=Ce,$>=1&&(I=z/$,F=$/z*1e3,z=0,$=0),ee+=Ce,ee>=.1&&(ee=0,be()),n.frameDone(Ce*1e3)}});te(),i.render(o,a),X=i.info.render.calls,j=i.info.render.triangles,be(),Oe.start()}function dd(){let t=!1,e=0,n=.18;return{update(i,s,r,o){return n=o,t?(e+=r,i?!1:(t=!1,e<=o)):s?i?(t=!0,e=r,!1):!0:!1},holding(){return t&&e>n},reset(){t=!1,e=0}}}function at(t,e,n="wall",i=void 0){let s={min:Object.freeze([...t]),max:Object.freeze([...e]),kind:n};return i&&(s.prop=i),Object.freeze(s)}var b0=1e-9;function Vn(t,e,n,i,s){let r=[e[0],e[1],e[2]],o=e[1]+.05,a=e[1]+s,l=t.filter(g=>g.max[1]>o&&g.min[1]<a),c=Math.hypot(n[0],n[2]),h=Math.max(1,Math.ceil(c/(i/2))),d=n[0]/h,u=n[2]/h,f=!1,m=0,y=0;for(let g=0;g<h;g++){let p=r[0],v=r[2];r[0]+=d,r[2]+=u;let _=!1;for(let M=0;M<5;M++){let S=null,E=b0;for(let x of l){let b=Math.max(x.min[0],Math.min(r[0],x.max[0])),P=Math.max(x.min[2],Math.min(r[2],x.max[2])),L=r[0]-b,C=r[2]-P,w=Math.hypot(L,C),D,k,I;if(w>b0){if(w>=i)continue;D=i-w,k=L/w,I=C/w}else{let F=[[r[0]-x.min[0],-1,0],[x.max[0]-r[0],1,0],[r[2]-x.min[2],0,-1],[x.max[2]-r[2],0,1]],z=F[0];for(let $ of F)$[0]<z[0]&&(z=$);D=z[0]+i,k=z[1],I=z[2]}D>E&&(E=D,S=[k,I])}if(!S){_=!0;break}if(M===4)break;r[0]+=S[0]*E,r[2]+=S[1]*E,f=!0,m=S[0],y=S[1]}_||(r[0]=p,r[2]=v,f=!0)}return f||(r[0]=e[0]+n[0],r[2]=e[2]+n[2]),{pos:r,hit:f,normal:[m,0,y]}}function Ni(t,e,n,i){let s=1,r=[n[0]-e[0],n[1]-e[1],n[2]-e[2]];for(let o of t){let a=0,l=1,c=!0;for(let h=0;h<3&&c;h++){let d=o.min[h]-i,u=o.max[h]+i;if(Math.abs(r[h])<b0)(e[h]<d||e[h]>u)&&(c=!1);else{let f=(d-e[h])/r[h],m=(u-e[h])/r[h];if(f>m){let y=f;f=m,m=y}f>a&&(a=f),m<l&&(l=m),a>l&&(c=!1)}}c&&a<s&&(s=a)}return s}function xa(t,e,n=0){for(let i of t)if(e[0]>=i.min[0]-n&&e[0]<=i.max[0]+n&&e[1]>=i.min[1]-n&&e[1]<=i.max[1]+n&&e[2]>=i.min[2]-n&&e[2]<=i.max[2]+n)return!0;return!1}var _0=["fov","right","up","back"],ya=Math.PI*2,dC=Object.freeze(["normal","aim","sprint","coverLow","coverTall","downed"]),Jx=t=>t!=="normal"&&dC.includes(t);function Zx(t,e,n={}){let i=Jx(e)&&t[e]&&typeof t[e]=="object"?t[e]:null;for(let s of _0)n[s]=i&&i[s]!==void 0?i[s]:t[s];return n}function jx(t,e){let n=Jx(e)?t[e]:null;return n&&typeof n=="object"&&n.shakeWeight>0?n.shakeWeight:0}function Qx(t,e,n,i=0){return e?t>=n:t>=n+i}function ey({tuning:t=H.camera,look:e=H.look}={}){let n={fov:{x:0,v:0},right:{x:0,v:0},up:{x:0,v:0},back:{x:0,v:0}},i={x:1,v:0},s={x:0,v:0},r={x:0,v:0},o={t:0,amp:0},a={p:{x:0,v:0},y:{x:0,v:0}},l={x:0,v:0},c={shake:{x:0,v:0},fov:{x:0,v:0},pull:{x:0,v:0}},h={shake:0,fov:0,pull:0},d=null,u=[0,0,0],f={x:0,v:0},m=[{x:0,v:0},{x:0,v:0},{x:0,v:0}],y={},g=[0,0,0],p=[0,0,0],v=[0,0,0],_=[0,0,0],M=[0,0,1],S={pos:_,dir:M,fov:70},E={on:!1,t:0,p:[0,0,0]},x=1,b=0,P=!1;return{yaw:0,pitch:0,look(C,w,D,k,I,F,z=1){(C||w||D||k)&&(E.on=!1,d=null);let $=F?e.aimScale:1,X=e.invertY?-1:1;this.yaw-=C*e.mouse*$,this.pitch-=w*e.mouse*$*X;let j=e.pad,W=$*z;D&&(this.yaw-=Math.sign(D)*Math.abs(D)**j.expo*j.yawRate*W*I),k&&(this.pitch-=Math.sign(k)*Math.abs(k)**j.expo*j.pitchRate*W*I*X),this.pitch<t.pitchMin&&(this.pitch=t.pitchMin),this.pitch>t.pitchMax&&(this.pitch=t.pitchMax)},bump(C=1){let w=t.bump;if(!w||!(w.amount>0)||!(C>0))return;s.x=Math.min(s.x+w.amount*C,2*w.amount);let D=t.slamShake;D&&D.amount>0&&D.time>0&&(o.t=D.time,o.amp=D.amount*C)},slam(C=1){this.bump(C);let w=t.slamFovKick;Number.isFinite(w)&&w!==0&&C>0&&(l.x=Math.max(-20,Math.min(20,l.x+w*C)))},sustain({shake:C=0,fov:w=0,pull:D=0}={}){Number.isFinite(C)&&C>h.shake&&(h.shake=C),Number.isFinite(D)&&D>h.pull&&(h.pull=D),Number.isFinite(w)&&(h.fov+=w)},turnTo(C,w=null,D=t.objectiveTurnTime){if(!Number.isFinite(C))return!1;let k=Math.PI*2,I=C-this.yaw,F=I-k*Math.round(I/k);return d={t:0,dur:Math.max(D,.001),y0:this.yaw,dy:F,p0:this.pitch,dp:Number.isFinite(w)?Math.max(t.pitchMin,Math.min(t.pitchMax,w))-this.pitch:0},E.on=!1,!0},turning(){return d!==null},dip(C){Number.isFinite(C)&&C>0&&(r.x=Math.min(r.x+C,.1))},kick(C,w=0){let D=t.recoil?t.recoil.max:0;if(!(D>0))return;let k=(I,F)=>Math.max(-D,Math.min(D,I+(Number.isFinite(F)?F:0)));a.p.x=Math.max(0,k(a.p.x,C)),a.y.x=k(a.y.x,w)},hold(C){if(!(t.holdTime>0)){E.on=!1;return}E.on=!0,E.t=t.holdTime,E.p[0]=C[0],E.p[1]=C[1],E.p[2]=C[2]},holding(){return E.on},recenter(){this.pitch=0,a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0},snap(C,w,D="normal",k=1){w!==void 0&&(this.yaw=w),Zx(t,D,y);for(let I of _0)n[I].x=y[I],n[I].v=0;i.x=k,i.v=0,f.x=jx(t,D),f.v=0;for(let I=0;I<3;I++)m[I].x=C[I],m[I].v=0;s.x=0,s.v=0,r.x=0,r.v=0,o.t=0,l.x=0,l.v=0,d=null;for(let I of["shake","fov","pull"])c[I].x=0,c[I].v=0,h[I]=0;a.p.x=0,a.p.v=0,a.y.x=0,a.y.v=0,x=1,P=!0,E.on=!1},update(C,{target:w,mode:D="normal",side:k=1},I){P||this.snap(w,this.yaw,D,k),C>0||(C=0),b+=C,Zx(t,D,y);for(let oe of _0)Rn(n[oe],y[oe],t.blendHalfLife,C);Rn(f,jx(t,D),t.blendHalfLife,C),Rn(i,k,t.sideHalfLife,C);for(let oe=0;oe<3;oe++)Rn(m[oe],w[oe],t.followHalfLife,C);Rn(s,0,t.bump?t.bump.halfLife:0,C),Rn(r,0,t.bump?t.bump.halfLife:0,C),Rn(l,0,t.slamFovHalfLife,C);for(let oe of["shake","fov","pull"])Rn(c[oe],h[oe],t.sustainHalfLife,C),h[oe]=0;if(d){d.t+=C;let oe=Math.min(1,d.t/d.dur),be=oe*oe*(3-2*oe);this.yaw=d.y0+d.dy*be,this.pitch=d.p0+d.dp*be,oe>=1&&(d=null)}let F=t.recoil?t.recoil.halfLife:0;Rn(a.p,0,F,C),Rn(a.y,0,F,C);let z=Math.PI/180,$=t.probeRadius,X=Math.max(n.back.x-c.pull.x,Math.min(n.back.x,t.minBack)),j=1,W=0,ee=oe=>{let be=this.yaw+a.y.x*z,Oe=Math.max(t.pitchMin,Math.min(t.pitchMax,this.pitch+a.p.x*z));W=Math.sin(be),j=Math.cos(be);let ne=Math.sin(Oe),Ce=Math.cos(Oe);g[0]=m[0].x,g[1]=m[1].x+n.up.x,g[2]=m[2].x,u[0]=w[0],u[1]=w[1]+n.up.x,u[2]=w[2];let Fe=Ni(I,u,g,$);if(Fe<1)for(let xe=0;xe<3;xe++)g[xe]=u[xe]+(g[xe]-u[xe])*Fe;let Be=n.right.x*i.x;p[0]=g[0]-j*Be,p[1]=g[1],p[2]=g[2]+W*Be;let Xe=Ni(I,g,p,$);for(let xe=0;xe<3;xe++)p[xe]=g[xe]+(p[xe]-g[xe])*Xe;M[0]=W*Ce,M[1]=ne,M[2]=j*Ce;for(let xe=0;xe<3;xe++)v[xe]=p[xe]-M[xe]*X;let Ye=Ni(I,p,v,$),me=X>1e-6?Math.max(t.minBack/X,Ye):1;me>1&&(me=1),me<x?x=me:oe&&(x+=(me-x)*(t.wallReturnHalfLife>0?1-Math.pow(2,-C/t.wallReturnHalfLife):1));let Pe=X*x-s.x;for(let xe=0;xe<3;xe++)_[xe]=p[xe]-M[xe]*Pe;let ke=Ni(I,g,_,$);if(ke<1)for(let xe=0;xe<3;xe++)_[xe]=g[xe]+(_[xe]-g[xe])*ke};if(ee(!0),E.on)if(E.t-=C,E.t<=0||D!=="aim")E.on=!1;else for(let oe=0;oe<3;oe++){let be=E.p[0]-_[0],Oe=E.p[1]-_[1],ne=E.p[2]-_[2],Ce=Math.hypot(be,Oe,ne);if(Ce<.5)break;this.yaw=Math.atan2(be,ne)-a.y.x*z,this.pitch=Math.max(t.pitchMin,Math.min(t.pitchMax,Math.asin(Oe/Ce)-a.p.x*z)),ee(!1)}let Me=t.shake;if(Me&&Me.amp&&f.x>0){let oe=Me.amp*(f.x>1?1:f.x),be=Math.sin(ya*Me.hz*b)*oe,Oe=Math.sin(ya*Me.hz*1.3*b+1)*oe,ne=-j,Ce=W;_[0]+=ne*be-Ce*M[1]*Oe,_[1]+=(Ce*M[0]-ne*M[2])*Oe,_[2]+=Ce*be+ne*M[1]*Oe}if(_[1]-=r.x,c.shake.x>1e-6){let oe=c.shake.x,be=Math.sin(ya*17*b)*oe,Oe=Math.sin(ya*23*b+.7)*oe,ne=-j,Ce=W;_[0]+=ne*be-Ce*M[1]*Oe,_[1]+=(Ce*M[0]-ne*M[2])*Oe,_[2]+=Ce*be+ne*M[1]*Oe}let te=t.slamShake;if(o.t>0&&te&&te.time>0){o.t=Math.max(0,o.t-C);let oe=o.t/te.time,be=o.amp*oe*oe,Oe=Math.sin(ya*te.hz*o.t)*be,ne=Math.sin(ya*te.hz*1.27*o.t+2)*be,Ce=-j,Fe=W;_[0]+=Ce*Oe-Fe*M[1]*ne,_[1]+=(Fe*M[0]-Ce*M[2])*ne,_[2]+=Fe*Oe+Ce*M[1]*ne}return S.fov=n.fov.x+l.x+c.fov.x,S}}}var Fn=[B.hotPink,B.playerOrange,B.glorpPurple,B.tealLight,B.lilac];function fC(t){if(t.prop)return t.prop;let e=t.max[0]-t.min[0],n=t.max[2]-t.min[2],i=t.max[1]-t.min[1],s=Math.max(e,n),r=Math.min(e,n);return t.kind==="pillar"?"pillar":t.kind==="low"?r<.7&&s>=1.8?"planter":"counter":t.kind==="tall"?s>=2.8&&r<=.7&&i>=2?"desk":"shelf":"wall"}function pC(){let t=[],e=(n,i)=>{let s=new $e(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new bt(o,3)),n};return{list:t,box(n,i,s){let r=new ut(i[0]-n[0],i[1]-n[1],i[2]-n[2]);r.translate((n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2),t.push(e(r,s))},cyl(n,i,s,r,o,a,l="y"){let c=new en(r,r,o,8,1);l==="x"?c.rotateZ(Math.PI/2):l==="z"&&c.rotateX(Math.PI/2),c.translate(n,i,s),t.push(e(c,a))},ball(n,i,s,r,o){let a=new pn(r,7,5);a.translate(n,i,s),t.push(e(a,o))}}}var Zi=(t,e,n=t.min[1],i=t.max[1])=>[[t.min[0]-e,n,t.min[2]-e],[t.max[0]+e,i,t.max[2]+e]];function mC(t,e,n,i,s,r,o){let[a,l,c,h]=[e.min[0],e.min[2],e.max[0],e.max[2]],d=.015,u=.06;o?(t.box([a+s,n,l+d],[c-s,i,l+u],r),t.box([a+s,n,h-u],[c-s,i,h-d],r)):(t.box([a+d,n,l+s],[a+u,i,h-s],r),t.box([c-u,n,l+s],[c-d,i,h-s],r))}function ji(t,e){let n=e.max[0]-e.min[0],i=e.max[2]-e.min[2],s=n>=i,r=s?n:i,o=s?i:n,a=(c,h)=>s?e.min[0]+c:e.min[0]+h,l=(c,h)=>s?e.min[2]+h:e.min[2]+c;return{len:r,dep:o,top:e.max[1],alongX:s,slab(c,h,d,u,f,m,y){let g=a(c,d),p=a(h,u),v=l(c,d),_=l(h,u);t.box([Math.min(g,p),f,Math.min(v,_)],[Math.max(g,p),m,Math.max(v,_)],y)},cyl(c,h,d,u,f,m,y="y"){let g=y==="y"?"y":y==="u"?s?"x":"z":s?"z":"x";t.cyl(a(c,h),d,l(c,h),u,f,m,g)}}}function gC(t,e){let n=ji(t,e),{len:i,dep:s}=n,r=.22,o=Math.max(1,Math.round((i-r)/1)),a=(i-r)/o;n.slab(.03,i-.03,.04,s-.04,0,.5,B.shadowTint);for(let l=0;l<=o;l++){let c=l*a;n.slab(c,c+r,.06,s-.06,0,e.max[1],B.lilac),n.slab(c+.03,c+r-.03,0,.07,.8,.94,B.hotPink),n.slab(c+.03,c+r-.03,s-.07,s,.8,.94,B.hotPink)}for(let l=0;l<o;l++){let c=l*a+r,h=(l+1)*a;n.slab(c,h,s/2-.03,s/2+.03,.5,.94,B.tealLight),n.slab(c,c+(h-c)*.6,s/2-.05,s/2+.05,.7,.76,B.cream)}}function vC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.08,s-.08,.08,r-.08,0,.1,B.shadowTint),i.slab(.05,s-.05,.05,r-.05,.1,.76,B.teal),i.slab(-.04,s+.04,-.04,r+.04,.76,.82,B.cream),i.slab(.15,s-.15,0,.06,.25,.6,B.hotPink),i.slab(.15,s-.15,r-.06,r,.25,.6,B.hotPink);let a=r>=.8?2:1,l=Math.max(2,Math.floor(s/.5));for(let c=0;c<a;c++)for(let h=0;h<l;h++){let d=(h+.5+c%2*.25)/l*s,u=a===1?r/2:r*(.3+c*.4);i.cyl(d,u,(.82+o-.02)/2,.14,o-.84,Fn[(h+c*2+n)%Fn.length]),i.cyl(d,u,o-.01,.15,.02,B.cream)}}function xC(t,e,n){n%3===1?vC(t,e,n):gC(t,e)}function yC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.42,B.shadowTint),i.slab(.1,s*.62,r*.18,r*.82,.42,.56,B.hotPink),i.slab(.1,s*.62,r*.18,r*.82,.56,.58,B.cream);let a=s*.8;i.cyl(a,r/2,(.42+o)/2,.05,o-.42,B.lilac);for(let l=0;l<4;l++)i.cyl(a,r/2,.485+l*.12,l%2?.2:.23,.09,l%2?B.ink:Fn[(l+n)%Fn.length])}function bC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.04,s-.04,.04,r-.04,0,.74,B.lilac),i.slab(.04,s-.04,.04,r-.04,.3,.34,B.shadowTint),i.slab(-.02,s+.02,-.02,r+.02,.74,.8,B.cream);let a=r>=.55?2:1,l=Math.max(3,Math.floor(s/.32)),c=(o-.8)/2-.005,h=.8+c+.005;for(let d=0;d<a;d++)for(let u=0;u<l;u++){let f=(u+.5)/l*s,m=a===1?r/2:r*(.3+d*.4),y=Fn[(u+d+n)%Fn.length];i.cyl(f,m,h,.015,.14,B.cream,"u"),i.cyl(f-.07,m,h,c,.06,y,"u"),i.cyl(f+.07,m,h,c,.06,y,"u")}}function _C(t,e){let n=e.max[0]-e.min[0]>=e.max[2]-e.min[2],i=e.max[1],s=1.1,r=n?e.max[0]-e.min[0]:e.max[2]-e.min[2],o=[e.max[0],e.min[1]+s,e.max[2]];t.box(...Zi({min:e.min,max:o},-.03,e.min[1],o[1]-.1),B.teal),t.box(...Zi({min:e.min,max:o},0,o[1]-.1,o[1]),B.cream),mC(t,{min:e.min,max:[e.max[0],o[1],e.max[2]]},e.min[1]+.3,e.min[1]+.8,.3,B.hotPink,n);let a=(m,y,g,p,v)=>t.box(n?[e.min[0]+m,g,e.min[2]+.12]:[e.min[0]+.12,g,e.min[2]+m],n?[e.min[0]+y,p,e.max[2]-.12]:[e.max[0]-.12,p,e.min[2]+y],v);a(.3,.7,o[1],o[1]+.06,B.cream),a(.32,.68,o[1]+.06,o[1]+.12,B.hotPink),a(.3,.7,o[1]+.12,o[1]+.18,B.cream);let l=n?(e.min[2]+e.max[2])/2:(e.min[0]+e.max[0])/2,c=m=>n?e.min[0]+m:e.min[2]+m;n?t.cyl(c(r-.5),o[1]+.14,l,.06,.28,B.gel):t.cyl(l,o[1]+.14,c(r-.5),.06,.28,B.gel);let h=.14,d=n?[[e.min[0],e.min[0]+h],[e.max[0]-h,e.max[0]]]:[[e.min[2],e.min[2]+h],[e.max[2]-h,e.max[2]]];for(let[m,y]of d)n?t.box([m,e.min[1],e.min[2]],[y,i,e.max[2]],B.lilac):t.box([e.min[0],e.min[1],m],[e.max[0],i,y],B.lilac);let u=d[0][1],f=d[1][0];n?(t.box([u,i-.12,e.min[2]],[f,i,e.max[2]],B.lilac),t.box([u,o[1],e.min[2]+.2],[f,i-.12,e.max[2]-.2],B.tealLight)):(t.box([e.min[0],i-.12,u],[e.max[0],i,f],B.lilac),t.box([e.min[0]+.2,o[1],u],[e.max[0]-.2,i-.12,f],B.tealLight))}function MC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1],a=.1;i.slab(0,s,0,r,0,.12,B.shadowTint);for(let[h,d]of[[0,a],[s-a,s]])for(let[u,f]of[[0,a],[r-a,r]])i.slab(h,d,u,f,.12,o,B.lilac);i.slab(0,s,0,r,o-.1,o,B.hotPink),i.slab(a,s-a,r/2-.02,r/2+.02,.12,o-.1,B.tealLight);let l=1.35,c=r*.32;i.slab(a,s-a,c-.03,c+.03,.7,.76,B.cream),i.cyl(s/2,c,l,.025,s+.1,B.cream,"u");for(let h of[.2,.27,s-.2,s-.27])i.cyl(h,c,l,h===.2||h===s-.2?.2:.17,.06,h===.2||h===s-.2?B.ink:Fn[n%Fn.length],"u")}function wC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1],a=1.1;i.slab(.06,s-.06,.04,r-.04,0,.08,B.shadowTint),i.slab(.04,s-.04,.02,r-.02,.08,a-.06,B.hotPink),i.slab(.15,s-.15,0,.05,.3,.7,B.cream),i.slab(.15,s-.15,r-.05,r,.3,.7,B.cream),i.slab(-.04,s+.04,-.04,r+.04,a-.06,a,B.cream),i.slab(0,s,r/2-.04,r/2+.04,a,o,B.lilac),i.slab(0,s,r/2-.07,r/2+.07,o-.1,o,B.shadowTint);let l=Math.max(2,Math.floor(s/.9));for(let c=0;c<l;c++)for(let h of[r*.2,r*.8]){let d=(c+.5)/l*s,u=Fn[(c+n+(h>r/2?2:0))%Fn.length],f=Math.min(o-.14,a+.55);i.cyl(d,h,a+.04,.13,.08,B.ink),i.cyl(d,h,(a+.08+f)/2,.11,f-a-.08,u),i.cyl(d,h,f+.03,.12,.06,B.cream)}}function SC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.06,s-.06,.05,r-.05,0,.1,B.shadowTint),i.slab(.03,s-.03,.03,r-.03,.1,o-.1,B.teal),i.slab(.2,s-.2,0,.06,.25,.65,B.hotPink),i.slab(.2,s-.2,r-.06,r,.25,.65,B.hotPink),i.slab(-.04,s+.04,-.04,r+.04,o-.1,o-.04,B.cream);let a=Math.max(2,Math.floor(s/.6));for(let l=0;l<a;l++){let c=(l+.5)/a*s;i.cyl(c,r/2,o-.035,.2,.07,B.ink),i.cyl(c,r/2,o-.02,.17,.04,Fn[(l+n)%Fn.length])}}function TC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.05,s-.05,.05,r-.05,0,.1,B.shadowTint),i.slab(.08,s-.08,.08,r-.08,.1,o-.08,B.cream),i.slab(.08,s-.08,.04,.09,.4,.55,Fn[n%Fn.length]),i.slab(.08,s-.08,r-.09,r-.04,.4,.55,Fn[n%Fn.length]),i.slab(-.04,s+.04,-.04,r+.04,o-.08,o,B.lilac)}function EC(t,e,n){t.box(...Zi(e,0,e.min[1],e.max[1]),B.cream),t.box(...Zi(e,.05,e.min[1],e.min[1]+.25),B.shadowTint),t.box(...Zi(e,.04,e.min[1]+1.1,e.min[1]+2.9),B.ink),[1.4,1.75,2.1,2.45].forEach((i,s)=>t.box(...Zi(e,.055,e.min[1]+i,e.min[1]+i+.1),Fn[(s+n)%Fn.length])),t.box(...Zi(e,.05,e.max[1]-.25,e.max[1]),B.shadowTint)}function AC(t,e){let n=ji(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.05,.2,.05,s-.05,0,r-.12,B.lilac),n.slab(i-.2,i-.05,.05,s-.05,0,r-.12,B.lilac),n.slab(0,i,0,s,r-.12,r,B.teal);for(let o=.3;o<i-.2;o+=.3)n.slab(o,o+.03,0,s,r-.125,r-.1,B.shadowTint)}function RC(t,e,n){let i=ji(t,e),{len:s,dep:r}=i,o=e.max[1];i.slab(.02,s-.02,.02,r-.02,0,o*.5,B.playerOrange),i.slab(0,s,0,r,o*.5-.06,o*.5,B.shadowTint);let a=Math.max(2,Math.floor(s/.5)),l=Math.min(r/2-.02,(o-o*.5)/2-.01);for(let c=0;c<a;c++)i.cyl((c+.5)/a*s,r/2,o*.5+l+.005,l,l*2,c%2?B.gel:B.teal)}function CC(t,e){let n=ji(t,e),{len:i,dep:s}=n,r=e.max[1];n.slab(.04,i-.04,.04,s-.04,0,.12,B.shadowTint),n.slab(.02,i-.02,.02,s-.02,.12,r-.1,B.hotPink),n.slab(.1,i-.1,0,.05,.3,.5,B.cream),n.slab(.1,i-.1,s-.05,s,.3,.5,B.cream),n.slab(0,i,0,s,r-.1,r,B.playerOrange)}function PC(t,e){t.box(...Zi(e,0,e.min[1],e.max[1]),B.cream),t.box(...Zi(e,.05,e.min[1],e.min[1]+.25),B.shadowTint),t.box(...Zi(e,.03,e.min[1]+1,e.min[1]+1.12),B.hotPink),t.box(...Zi(e,.05,e.max[1]-.25,e.max[1]),B.shadowTint)}function IC(t){if(!t)return[];let[e,,n]=t.min,[i,,s]=t.max,r=[],o=.05,a=1,l=2.8,c=1.3;for(let h=e+1;h+c/2<i-.3;h+=2)r.push({min:[h-c/2,a,n],max:[h+c/2,l,n+o]},{min:[h-c/2,a,s-o],max:[h+c/2,l,s]});for(let h=n+1;h+c/2<s-.3;h+=2)r.push({min:[e,a,h-c/2],max:[e+o,l,h+c/2]},{min:[i-o,a,h-c/2],max:[i,l,h+c/2]});return r}function ty(t,e=null){let n=pC();for(let s of IC(e))n.box(s.min,s.max,B.tealLight);let i=0;return t.forEach((s,r)=>{let o=fC(s);o==="counter"?xC(n,s,i++):o==="planter"?(r%2?bC:yC)(n,s,r):o==="desk"?_C(n,s):o==="shelf"?MC(n,s,r):o==="pillar"?PC(n,s):o==="bar"?wC(n,s,r):o==="bowl"?SC(n,s,r):o==="booth"?TC(n,s,r):o==="menu"?EC(n,s,r):o==="seat"?AC(n,s):o==="plant"?RC(n,s,r):o==="velvet"?CC(n,s):n.box(s.min,s.max,B.lilac)}),Bt(n.list,!1)}var yr=2.7,fd=.22,pd=.16;function tc(t,e,n){let i=new ut(e[0]-t[0],e[1]-t[1],e[2]-t[2]);i.translate((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),i.deleteAttribute("uv");let s=new $e(n),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return i.setAttribute("color",new bt(o,3)),i}function ny(t){let e=t.w,n=e/2,i=new dt;i.name="exit-gate",i.position.set(t.pos[0],t.pos[1],t.pos[2]),i.rotation.y=t.yaw;let s=new rt(Bt([tc([-n-fd,0,0],[-n,yr+.25,pd],B.lilac),tc([n,0,0],[n+fd,yr+.25,pd],B.lilac),tc([-n-fd,yr,0],[n+fd,yr+.25,pd],B.hotPink),tc([-n,0,.005],[n,yr,.04],B.gel)].map(u=>u.toNonIndexed()),!1),Tt({vertexColors:!0,rim:.1}));s.name="gate-frame",i.add(s);let r=u=>{let f=new rt(tc(u<0?[0,0,.04]:[-n,0,.04],u<0?[n,yr,.1]:[0,yr,.1],B.teal).toNonIndexed(),Tt({vertexColors:!0,rim:.1}));return f.position.x=u*n,f.name=u<0?"gate-door-west":"gate-door-east",i.add(f),f},o=r(-1),a=r(1),l=Ki({text:"GO \u2192",w:2.2,h:.8,bg:B.glorpPurple,fg:B.gel,seed:5});l.position.set(0,yr+.85,pd+.1),i.add(l);let c=0,h=0,d=()=>{let u=Math.max(.06,1-c);o.scale.x=u,a.scale.x=u,l.visible=c>.5};return d(),{group:i,setOpen(u,f=!1){h=u?1:0,f&&(c=h,d())},update(u){if(c===h||!(u>0))return;let f=1/Math.max(H.run.gateOpenTime,.001);c=c<h?Math.min(h,c+u*f):Math.max(h,c-u*f),d()},openness:()=>c}}var Ji=6.5,LC=4,M0=4.55,w0=6,E0=3.2,iy=1.6,bs=.3,kC=4,sy=.35,S0=.4,T0=.55,$s={ceiling:"#e4dcff",beam:B.teal,duct:"#9aa0c0",wall:B.cream,sill:B.lilac,housing:"#7d7fa0",rod:"#5c5f78"};function DC(t){let e=t.boxes.find(n=>n.kind==="floor");return{x0:e.min[0],x1:e.max[0],z0:e.min[2],z1:e.max[2]}}function NC(t,e){let n=Math.max(1,Math.floor((e-iy)/(E0+iy)));return Array.from({length:n},(i,s)=>t+(s+.5)*(e/n))}function OC(t){let{x0:e,x1:n,z0:i,z1:s}=DC(t),r=n-e,o=s-i,a=[],l=[],c=(g,p,v,_)=>g.push({min:p,max:v,color:_}),h=(g,p,v,_,M)=>{let S=(b,P,L,C,w)=>g==="x"?c(a,[b,L,p],[P,C,v],w):c(a,[p,L,b],[v,C,P],w);S(_,M,LC,M0,$s.sill),S(_,M,w0,Ji,$s.sill);let E=NC(_,M-_).map(b=>[b-E0/2,b+E0/2]),x=_;for(let[b,P]of E)b>x+1e-6&&S(x,b,M0,w0,$s.wall),x=P;M>x+1e-6&&S(x,M,M0,w0,$s.wall)};h("x",i-bs,i,e-bs,n+bs),h("x",s,s+bs,e-bs,n+bs),h("z",e-bs,e,i,s),h("z",n,n+bs,i,s);let d=Math.max(1,Math.round(o/kC)),u=Array.from({length:d+1},(g,p)=>i+p*o/d);for(let g of u)c(a,[e,Ji-sy,g-S0/2],[n,Ji,g+S0/2],$s.beam);let f=Math.max(2,Math.round(r/6));for(let g of new Set([1,f-1])){let p=e+g*r/f;c(a,[p-T0/2,Ji-T0,i],[p+T0/2,Ji-sy,s],$s.duct)}for(let g=0;g<f;g++){let p=e+(g+.5)*r/f;for(let v=0;v<d;v++){let _=(u[v]+u[v+1])/2,M=Math.min(2.6,u[v+1]-u[v]-S0-.4);c(a,[p-.3,Ji-.09,_-M/2-.06],[p+.3,Ji,_+M/2+.06],$s.housing),c(l,[p-.2,Ji-.12,_-M/2],[p+.2,Ji-.09,_+M/2],"#fffbe8")}}let m=t.ceiling||{},y=[...m.banners||[],...m.floorSign?[m.floorSign]:[]];for(let g of y){let p=Math.cos(g.yaw||0),v=Math.sin(g.yaw||0);for(let _ of[-.4,.4]){let M=g.pos[0]+p*g.w*_,S=g.pos[2]-v*g.w*_;c(a,[M-.03,g.pos[1]+g.h/2,S-.03],[M+.03,Ji,S+.03],$s.rod)}}return{solids:a,lights:l,extents:{x0:e,x1:n,z0:i,z1:s},plane:{w:r+2*bs,d:o+2*bs,cx:(e+n)/2,cz:(i+s)/2}}}function ry(t){let e=new ut(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]);e.translate((t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2);let n=new $e(t.color),i=e.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return e.setAttribute("color",new bt(s,3)),e}function oy(t){let e=OC(t),n=new dt;n.name="ceiling";let i=new Li(e.plane.w,e.plane.d);i.rotateX(Math.PI/2),i.translate(e.plane.cx,Ji,e.plane.cz);let s=new $e($s.ceiling),r=i.getAttribute("position").count,o=new Float32Array(r*3);for(let h=0;h<r;h++)o[h*3]=s.r,o[h*3+1]=s.g,o[h*3+2]=s.b;i.setAttribute("color",new bt(o,3));let a=new rt(Bt([i,...e.solids.map(ry)],!1),Tt({vertexColors:!0,shadowMix:.2,rim:.1}));a.name="ceiling-shell",n.add(a);let l=new rt(Bt(e.lights.map(ry),!1),new Zt({vertexColors:!0,toneMapped:!1}));l.name="ceiling-lights",n.add(l);let c=t.ceiling||{};for(let h of[...c.banners||[],...c.floorSign?[{...c.floorSign,floor:!0}]:[]]){let d=Ki({text:h.text,w:h.w,h:h.h,bg:h.bg,seed:h.floor?8:9,tilt:h.floor?0:.02});d.name=h.floor?"floor-sign":"banner",d.position.set(h.pos[0],h.pos[1],h.pos[2]),d.rotation.y=h.yaw||0,n.add(d)}return n}var ay=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(ay)),t),br=.3,FC=[at([-12,-1,-12],[12,0,12],"floor"),at([-12-br,0,-12-br],[12+br,4,-12]),at([-12-br,0,12],[12+br,4,12+br]),at([-12-br,0,-12],[-12,4,12]),at([12,0,-12],[12+br,4,12]),at([5,0,-9],[5.3,4,-3]),at([6.7,0,-9],[7,4,-3]),at([-11,0,-7.3],[-6,3,-7]),at([-6.3,0,-11],[-6,3,-7]),at([-4,0,-3],[-2,1,-2.4],"low"),at([3,0,3],[3.6,1,5],"low"),at([-5,0,3],[-3.8,2.2,3.6],"tall"),at([1,0,-6],[1.6,2.2,-4],"tall"),at([-9.4,0,.6],[-8.6,4,1.4],"pillar"),at([8.6,0,3.6],[9.4,4,4.4],"pillar"),at([-9,0,6.5],[-6,1,7.1],"low"),at([-4,0,6.5],[-1,1,7.1],"low"),at([6,0,6],[10,2.2,6.6],"tall"),at([-12,0,-1],[-10,1,-.4],"low")],ly=[];for(let t=0;t<=12;t++)ly.push({min:[-10+t-.05,0,10],max:[-10+t+.05,.02,11]});var gd=ay({boxes:FC,marks:ly,coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,0],yaw:0},features:{corridor:{pos:[6,0,-6],yaw:0},wall:{pos:[0,0,-10.5],yaw:Math.PI},lane:{pos:[-10.5,0,10.5],yaw:Math.PI/2},coverRow:{pos:[-7.5,0,9],yaw:Math.PI},coverTall:{pos:[8,0,8.5],yaw:Math.PI},range:{pos:[-7.5,0,4],yaw:Math.PI}},dummies:[{id:"open",pos:[-7.5,0,-1],yaw:0},{id:"lowCover",pos:[-3,0,-3.6],yaw:0},{id:"rail",pos:[-8.5,0,-5.5],yaw:0,rail:{axis:"x",half:2}},{id:"far",pos:[0,0,-10],yaw:0},{id:"tallEnd",pos:[7,0,-2.5],yaw:0}],ammoCrates:[{pos:[-11,0,8.5]}]});function A0(t){let e=t.map(n=>{let i=new ut(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);return i.translate((n.min[0]+n.max[0])/2,(n.min[1]+n.max[1])/2,(n.min[2]+n.max[2])/2),i});return Bt(e,!1)}var _r=.03,Mr=.3,wr=.12,md=2;function UC(t=gd){let e=t.boxes.find(c=>c.kind==="floor");if(!e)return[];let[n,,i]=e.min,[s,,r]=e.max,o=4,a=[],l=(c,h)=>a.push({min:c,max:h});l([n,0,i],[s,Mr,i+_r]),l([n,0,r-_r],[s,Mr,r]),l([n,0,i],[n+_r,Mr,r]),l([s-_r,0,i],[s,Mr,r]);for(let c=n+md;c<s-.5;c+=md)l([c-wr/2,Mr,i],[c+wr/2,o,i+_r]),l([c-wr/2,Mr,r-_r],[c+wr/2,o,r]);for(let c=i+md;c<r-.5;c+=md)l([n,Mr,c-wr/2],[n+_r,o,c+wr/2]),l([s-_r,Mr,c-wr/2],[s,o,c+wr/2]);return a}function cy(t=gd){let e=new dt,n=t.boxes.find(a=>a.kind==="floor");e.add($u({w:n.max[0]-n.min[0],d:n.max[2]-n.min[2]}));let i=t.boxes.filter(a=>a.kind!=="floor");if(i.length){let a=new rt(bi(ty(i,n)),Tt({vertexColors:!0}));a.name="grey-props",Gn(a),e.add(a)}let s=UC(t);if(s.length){let a=new rt(A0(s),Tt({color:B.shadowTint}));a.name="grey-wall-trim",e.add(a)}if(t.marks.length){let a=new rt(A0(t.marks),Tt({color:B.hotPink}));a.name="grey-marks",e.add(a)}if(t.ammoCrates&&t.ammoCrates.length){let a=[];for(let c of t.ammoCrates)a.push({min:[c.pos[0]-.35,0,c.pos[2]-.25],max:[c.pos[0]+.35,.4,c.pos[2]+.25]}),a.push({min:[c.pos[0]-.39,.4,c.pos[2]-.29],max:[c.pos[0]+.39,.5,c.pos[2]+.29]});let l=new rt(bi(A0(a)),Tt({color:B.playerOrange}));l.name="grey-crate",Gn(l),e.add(l)}if(t.landmark){let a=t.landmark,l=Ki({text:a.text,w:a.w,h:a.h});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=Math.PI,e.add(l)}for(let a of t.signs||[]){let l=Ki({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:4});l.position.set(a.pos[0],a.pos[1],a.pos[2]),l.rotation.y=a.yaw,e.add(l)}let r=null;if(t.cancelSign){let a=t.cancelSign;r=Ki({text:a.text,w:a.w,h:a.h,bg:a.bg,seed:6}),r.name="cancel-sign",r.position.set(a.pos[0],a.pos[1],a.pos[2]),r.rotation.y=a.yaw,r.visible=!1,e.add(r)}t.ceiling&&e.add(oy(t));let o=t.exit?ny(t.exit):null;return o&&e.add(o.group),{group:e,boxes:t.boxes,gate:o,setGateOpen(a,l=!1){o&&o.setOpen(a,l)},setCancelLit(a){r&&(r.visible=!!a)},update(a){o&&o.update(a)}}}var hy=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(hy)),t),Sr=.3,_s=7,Qi=15,BC=[at([-_s,-1,-Qi],[_s,0,Qi],"floor"),at([-_s-Sr,0,-Qi-Sr],[_s+Sr,4,-Qi]),at([-_s-Sr,0,Qi],[_s+Sr,4,Qi+Sr]),at([-_s-Sr,0,-Qi],[-_s,4,Qi]),at([_s,0,-Qi],[_s+Sr,4,Qi]),at([-5,0,-9.5],[-3,1,-8.5],"low"),at([2,0,-9.5],[4,1,-8.5],"low"),at([-.4,0,-7.4],[.4,4,-6.6],"pillar"),at([-1,0,-3.5],[1,1,-2.5],"low"),at([-5.4,0,-2.5],[-4.8,2.2,-.5],"tall"),at([3.5,0,-1.5],[5.5,1,-.5],"low"),at([-4.5,0,3.5],[-2.5,1,4.5],"low"),at([2.5,0,3.5],[4.5,1,4.5],"low"),at([-.4,0,6.6],[.4,4,7.4],"pillar"),at([-4.5,0,9],[-2.5,1,10],"low"),at([2.5,0,9],[4.5,1,10],"low"),at([-1.5,0,12],[1.5,2.2,12.6],"tall")],zC=[-12,-6,.5,7,11],HC=[-6,-2,2,6],vd=[];for(let t of zC)for(let e of HC)vd.push([e,t]);vd.push([0,-5],[0,0],[0,9.5]);vd.push([-3.5,13.5],[3.5,13.5]);var uy=hy({name:"kioskRow",boxes:BC,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-13.5],yaw:0},trigger:{z:-11},features:{start:{pos:[0,0,-13.5],yaw:0},kioskLeft:{pos:[-4,0,-10.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},flank:{pos:[-6.2,0,-3.5],yaw:0},open:{pos:[-2,0,-5],yaw:0}},associates:[{id:"a1",pos:[-4.3,0,4.88]},{id:"a2",pos:[-2.7,0,4.88]},{id:"b1",pos:[2.7,0,4.88]},{id:"b2",pos:[4.3,0,4.88]}],pads:[{id:"sauna1",pos:[4.6,0,13.4],spawns:"associate"}],tobble:{pos:[1.4,0,-13.8],yaw:0},waypoints:vd,ammoCrates:[{pos:[5.5,0,-12.5]}],exit:{pos:[-4.5,0,Qi],yaw:Math.PI,w:3},landmark:{pos:[0,3,14.7],text:"FRONT DESK",w:6,h:1.2},ceiling:{floorSign:{pos:[0,4.6,-10.2],yaw:Math.PI,text:"FLOOR 1 \u2014 CHECK-IN",w:4.6,h:.9,bg:"#2ec4b6"},banners:[{pos:[-2.5,5.35,-1],yaw:Math.PI,text:"NEW YEAR, NEW YOU (FOREVER)",w:4.4,h:1.1,bg:"#b9a7ff"},{pos:[2.5,5.35,7],yaw:Math.PI,text:"WHERE QUITTING IS NOT AN OPTION",w:4.6,h:1.1,bg:"#ff8a1f"}]},signs:[{pos:[4.3,1.8,14.7],yaw:Math.PI,text:"CANCELLATIONS: TOP FLOOR \u2192",w:4.6,h:1.1,bg:"#2ec4b6"},{pos:[-6.86,2,6],yaw:Math.PI/2,text:"NEW YEAR, NEW YOU (FOREVER)",w:3.2,h:1.5,bg:"#b9a7ff"},{pos:[6.86,2,-3],yaw:-Math.PI/2,text:"WHERE QUITTING IS NOT AN OPTION",w:3.2,h:1.5,bg:"#ff8a1f"}]});function GC(t,e,n){let i=Math.max(t.min[0]-e,0,e-t.max[0]),s=Math.max(t.min[2]-n,0,n-t.max[2]);return Math.hypot(i,s)}function xd(t,{cols:e,rows:n,clearance:i=.8}){let s=t.filter(o=>o.kind!=="floor"),r=[];for(let o of n)for(let a of e)s.every(l=>GC(l,a,o)>=i)&&r.push([a,o]);return r}var dy=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(dy)),t),Tr=.3,_i=20,Oi=18,mn=(t,e,n,i)=>at(t,e,n,i),fy=[at([-_i,-1,-Oi],[_i,0,Oi],"floor"),at([-_i-Tr,0,-Oi-Tr],[_i+Tr,4,-Oi]),at([-_i-Tr,0,Oi],[_i+Tr,4,Oi+Tr]),at([-_i-Tr,0,-Oi],[-_i,4,Oi]),at([_i,0,-Oi],[_i+Tr,4,Oi]),mn([-7,0,-.35],[7,2.2,.35],"tall","bar"),mn([-3,0,14.2],[3,2.2,14.9],"tall","bar"),mn([-9,0,9.5],[-5,1,10.5],"low","bowl"),mn([5,0,9.5],[9,1,10.5],"low","bowl"),mn([-1,0,10.8],[1,1,11.8],"low","booth"),mn([-14.6,0,-5],[-13,1,-4],"low","booth"),mn([13,0,-5],[14.6,1,-4],"low","booth"),mn([-14.6,0,4],[-13,1,5],"low","booth"),mn([13,0,4],[14.6,1,5],"low","booth"),mn([-3.6,0,-6.5],[-2,1,-5.5],"low","booth"),mn([2,0,-6.5],[3.6,1,-5.5],"low","booth"),mn([-3.6,0,4.5],[-2,1,5.5],"low","booth"),mn([2,0,4.5],[3.6,1,5.5],"low","booth"),mn([-9,0,-13],[-6,1,-12.4],"low","plant"),mn([6,0,-13],[9,1,-12.4],"low","plant"),mn([-17,0,10],[-14,1,10.6],"low","plant"),mn([10.5,0,13.2],[13.5,1,13.8],"low","plant"),mn([-18.5,0,-10],[-16.5,1,-9.4],"low","seat"),mn([16.5,0,-10],[18.5,1,-9.4],"low","seat"),mn([-12.4,0,-9.4],[-11.6,4,-8.6],"pillar","menu"),mn([11.6,0,-9.4],[12.4,4,-8.6],"pillar","menu"),mn([-12.4,0,8.6],[-11.6,4,9.4],"pillar","menu"),mn([11.6,0,8.6],[12.4,4,9.4],"pillar","menu")],py=xd(fy,{cols:[-17.5,-12.5,-7.5,-2.5,2.5,7.5,12.5,17.5],rows:[-15.5,-10.5,-7.5,-2.5,2.5,7.5,12,16.5],clearance:.9});py.push([0,-3.5],[0,3.5],[0,8],[-4,15.8],[0,15.8],[4,15.8],[14.5,12],[16,16.5],[-12,16],[-9.5,12],[9.5,12]);var my=dy({name:"smoothieBar",boxes:fy,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-16.5],yaw:0},trigger:{z:-14},features:{start:{pos:[0,0,-16.5],yaw:0},startCover:{pos:[-7.5,0,-13.4],yaw:0},mid:{pos:[0,0,-3.5],yaw:0},open:{pos:[0,0,-9],yaw:0},flankWest:{pos:[-16,0,0],yaw:0},flankEast:{pos:[16,0,0],yaw:0}},associates:[{id:"a1",pos:[-8.3,0,10.88]},{id:"a2",pos:[-5.7,0,10.88]},{id:"b1",pos:[5.7,0,10.88]},{id:"b2",pos:[8.3,0,10.88]},{id:"c1",pos:[0,0,12.18]},{id:"t1",kind:"trainer",pos:[-12,0,6]}],pads:[{id:"sauna1",pos:[14.5,0,16.4],spawns:"associate",openKey:"openAfterKillsSmoothie",shareKey:"trainerShareSmoothie"}],tobble:{pos:[1.6,0,-16.5],yaw:0},waypoints:py,ammoCrates:[{pos:[6.5,0,-16.8]},{pos:[-16.5,0,14.5]}],exit:{pos:[-12,0,Oi],yaw:Math.PI,w:3.4},landmark:{pos:[9,3.2,Oi-.3],text:"SMOOTHIE BAR",w:7,h:1.4},ceiling:{floorSign:{pos:[0,4.3,-11.8],yaw:Math.PI,text:"FLOOR 12 \u2014 SMOOTHIE BAR",w:5.4,h:.9,bg:"#ff4f9a"},banners:[{pos:[-9,5.35,-3],yaw:Math.PI,text:"NEW YEAR, NEW YOU (FOREVER)",w:4.4,h:1.1,bg:"#b9a7ff"},{pos:[9,5.35,6],yaw:Math.PI,text:"FIRST ONE\u2019S FREE!*",w:3.6,h:1.1,bg:"#2ec4b6"}]},signs:[{pos:[0,2.9,14.95],yaw:Math.PI,text:"FREE TRIAL COUNTER \u2014 No commitment!*",w:6.2,h:1,bg:"#ff4f9a"},{pos:[-_i+.14,2.2,-2],yaw:Math.PI/2,text:"BUILD-YOUR-BOWL",w:3.2,h:1.2,bg:"#2ec4b6"},{pos:[_i-.14,2.2,2],yaw:-Math.PI/2,text:"BLEND NOW, QUIT LATER",w:3.6,h:1.2,bg:"#ff8a1f"},{pos:[_i-.14,2.4,-12],yaw:-Math.PI/2,text:"SMOOTHIE BAR",w:3.6,h:1.2,bg:"#b9a7ff"}]});var gy=t=>(t&&typeof t=="object"&&!Object.isFrozen(t)&&(Object.freeze(t),Object.values(t).forEach(gy)),t),Er=.3,Fi=12,es=10,vy=[at([-Fi,-1,-es],[Fi,0,es],"floor"),at([-Fi-Er,0,-es-Er],[Fi+Er,4,-es]),at([-Fi-Er,0,es],[Fi+Er,4,es+Er]),at([-Fi-Er,0,-es],[-Fi,4,es]),at([Fi,0,-es],[Fi+Er,4,es]),at([-4,0,7.2],[4,2.2,7.9],"tall","desk"),at([-8,0,-3.2],[-5.5,1,-2.6],"low","velvet"),at([5.5,0,-3.2],[8,1,-2.6],"low","velvet"),at([-4.5,0,1.8],[-2,1,2.4],"low","velvet"),at([2,0,1.8],[4.5,1,2.4],"low","velvet"),at([-6.4,0,-.4],[-5.6,4,.4],"pillar"),at([5.6,0,4.2],[6.4,4,5],"pillar")],xy=xd(vy,{cols:[-10,-6,-2,2,6,10],rows:[-8,-5,-1.5,3.5,6,8.8],clearance:.9});xy.push([0,-3.5],[0,2],[-6,5.5],[6,5.5],[-5.5,9],[5.5,9],[0,9]);var yy=gy({name:"cancellationDesk",boss:!0,boxes:vy,marks:[],coverExclude:["1-z#0","2+z#0","3-x#0","4+x#0"],spawn:{pos:[0,0,-8.5],yaw:0},trigger:{z:-6.5},features:{start:{pos:[0,0,-8.5],yaw:0},mid:{pos:[0,0,-4.5],yaw:0},desk:{pos:[0,0,5.8],yaw:0}},associates:[],overlord:{spots:[{hide:[-3.2,8.9],pop:[-5.4,8.5]},{hide:[3.2,8.9],pop:[5.4,8.5]}],deskHide:[0,8.9],desk:{x0:-4,x1:4,z:7.2}},cancelSign:{pos:[0,1.75,7.2-.12],yaw:Math.PI,text:"PRESS E / X TO CANCEL",w:3.8,h:.9,bg:"#2a9d2a"},pads:[{id:"sauna1",pos:[-9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"},{id:"sauna2",pos:[9,0,8.4],spawns:"associate",manual:!0,shareKey:"trainerShareBoss"}],tobble:{pos:[1.5,0,-8.7],yaw:0},waypoints:xy,ammoCrates:[{pos:[-10.5,0,-8.8]}],landmark:{pos:[0,3.2,es-.3],text:"CANCELLATION DESK",w:7,h:1.3},ceiling:{floorSign:{pos:[0,4.6,-5.2],yaw:Math.PI,text:"TOP FLOOR \u2014 CANCELLATIONS",w:5.6,h:.9,bg:"#7a3cff"},banners:[{pos:[0,5.35,2.5],yaw:Math.PI,text:"WHERE QUITTING IS NOT AN OPTION",w:4.8,h:1.1,bg:"#ff8a1f"}]},signs:[{pos:[-Fi+.14,2.2,-1],yaw:Math.PI/2,text:"PLEASE TAKE A NUMBER \u2014 NOW SERVING: 3",w:4.2,h:1.3,bg:"#ff4f9a"},{pos:[Fi-.14,2.2,-1],yaw:-Math.PI/2,text:"ALL SALES FINAL. ALL EXITS FINAL.",w:4.2,h:1.3,bg:"#7a3cff"}]});var by=Object.freeze({turnstiles:uy,smoothie:my,desk:yy});var hn=Object.freeze(["turnstiles","smoothie","desk"]),ba=Object.freeze({turnstiles:"Check-in Turnstiles",smoothie:"Smoothie Bar",desk:"The Cancellation Desk"}),_y=Object.freeze(["Tues 2:00\u20132:15","Tues 2:00\u20132:05","By appointment"]),_a=t=>`Cancellation hours: ${_y[Math.max(0,Math.min(_y.length-1,t|0))]}`,My="gyms-of-war.checkpoint",yd=t=>Number.isInteger(t)&&t>=0&&t<hn.length?t:0,nc=t=>{let e=hn.indexOf(t);return e<0?0:e};function bd(t){try{let e=t&&t.getItem(My);return e==null?0:yd(Number(e))}catch{return 0}}function VC(t,e){try{t&&t.setItem(My,String(yd(e)))}catch{}}function wy(t,e,n=H.run.gateReach){if(!t)return!1;let i=e[0]-t.pos[0],s=e[2]-t.pos[2],r=Math.sin(t.yaw),o=Math.cos(t.yaw),a=i*o-s*r,l=i*r+s*o;return Math.abs(a)<=t.w/2&&l>=-.25&&l<=n}function Sy({storage:t=null,tuning:e=H}={}){let n=()=>e.run,i=0,s=0,r="play",o=0,a=!1,l="swap",c=!1,h=bd(t),d=f=>{s=yd(f),VC(t,s)},u={get index(){return i},get checkpoint(){return s},get arena(){return hn[i]},get phase(){return r},get cleared(){return a},get fading(){return r!=="play"},get kind(){return l},get cards(){return c},set cards(f){c=!!f},get cardElapsed(){return r==="card"?o:0},get cardLength(){return l==="defeat"?n().defeatCardTime:n().cardTime},get hasNext(){return i<hn.length-1},saved:h,get fade(){return r==="fadeOut"?Math.min(1,o/Math.max(n().fadeOut,1e-6)):r==="black"||r==="card"?1:r==="fadeIn"?Math.max(0,1-o/Math.max(n().fadeIn,1e-6)):0},get gateOpen(){return a&&u.hasNext},markClear(){return r==="play"&&(a=!0),u.gateOpen},touchGate(){return r!=="play"||!u.gateOpen?!1:(l="swap",r="fadeOut",o=0,!0)},beginDefeat(){return r!=="play"?!1:(l="defeat",r="fadeOut",o=0,!0)},skipCard(){return r!=="card"||o<n().cardSkipDelay?!1:(o=Math.max(o,u.cardLength),!0)},restart(){return a=!1,r="play",o=0,l="swap",hn[i]},goTo(f){return i=yd(f),d(i),a=!1,r="play",o=0,l="swap",hn[i]},newRun(){return u.goTo(0)},step(f){let m=[];if(!(f>0)||r==="play")return m;if(o+=f,r==="fadeOut"&&o>=n().fadeOut){if(l==="defeat")a=!1,m.push({type:"defeat",arena:hn[i]});else{let y=hn[i];i=Math.min(hn.length-1,i+1),d(i),a=!1,m.push(c?{type:"swap",from:y,to:hn[i],card:!0}:{type:"swap",from:y,to:hn[i]})}r=c?"card":"black",o=0}return r==="black"&&o>=n().blackHold&&(r="fadeIn",o=0),r==="card"&&o>=u.cardLength&&(r="fadeIn",o=0,m.push({type:"cardDone",kind:l})),r==="fadeIn"&&o>=n().fadeIn&&(r="play",o=0,m.push({type:"faded"})),m}};return u}var Ty="gyms-of-war.settings",sc=Object.freeze([Object.freeze({key:"volume",label:"Master volume",kind:"range",min:0,max:1,step:.1,def:1}),Object.freeze({key:"mouseSens",label:"Mouse sensitivity",kind:"range",min:.3,max:2.5,step:.1,def:1}),Object.freeze({key:"invertY",label:"Invert Y (look up/down)",kind:"toggle",def:!1}),Object.freeze({key:"padSens",label:"Pad look sensitivity",kind:"range",min:.3,max:2.5,step:.1,def:1}),Object.freeze({key:"storyCards",label:"Story cards (elevator rides)",kind:"toggle",def:!0})]),oF=Object.freeze(Object.fromEntries(sc.map(t=>[t.key,t.def]))),WC=(t,e)=>Math.round(t/e)*e;function ic(t){let e={},n=t&&typeof t=="object"?t:{};for(let i of sc){let s=n[i.key];if(i.kind==="toggle")e[i.key]=typeof s=="boolean"?s:i.def;else{let r=typeof s=="number"&&Number.isFinite(s)?s:i.def;e[i.key]=Number(WC(Math.min(i.max,Math.max(i.min,r)),i.step).toFixed(3))}}return e}function Ey(t){try{let e=t&&t.getItem(Ty);return ic(e?JSON.parse(e):null)}catch{return ic(null)}}function R0(t,e){try{t&&t.setItem(Ty,JSON.stringify(ic(e)))}catch{}}function Ay(t,e,n){let i=sc.find(r=>r.key===e);if(!i)return ic(t);let s={...t};return s[e]=i.kind==="toggle"?!t[e]:t[e]+(n<0?-i.step:i.step),ic(s)}function Ry(t,e){return t.kind==="toggle"?e?"On":"Off":t.key==="volume"?`${Math.round(e*100)}%`:`${e.toFixed(1)}x`}var Cy="gyms-of-war.introSeen";function Py(t){try{return!!(t&&t.getItem(Cy))}catch{return!1}}function Iy(t){try{t&&t.setItem(Cy,"1")}catch{}}var Ma=Object.freeze({kbm:Object.freeze({melee:"F",interact:"E",grenade:"G",finish:"E",cover:"Space",aim:"right mouse",pop:"right mouse",reload:"R",throw:"Release G",rev:"F"}),pad:Object.freeze({melee:"B",interact:"X",grenade:"D-pad Up",finish:"Y",cover:"A",aim:"LT",pop:"LT",reload:"RB",throw:"RT",rev:"B"})}),Ly={throw:t=>`${t.throw}  throw`,equipped:t=>`${t.aim} aim  ${t.throw} throw`,reviveTobble:t=>`Hold ${t.interact}  revive Tobble`,finish:t=>`${t.finish}  finish`,revving:()=>"Cheat Day: run into a Rep",bash:t=>`${t.melee}  bash`,rev:t=>`Hold ${t.melee}  rev Cheat Day`,giveUp:t=>`Hold ${t.interact}  renew your membership`,giveUpTobble:t=>`Tobble is coming! Hold ${t.interact} to renew your membership`,sauna:t=>`Close the Spawn Sauna (${t.grenade} kettlebell)`,cancel:t=>`Hold ${t.interact}  CANCEL`};function lo(t,e="kbm"){let n=Object.hasOwn(Ly,t)?Ly[t]:null;return n?n(Ma[e]||Ma.kbm):""}var C0="GYMS OF WAR",P0="NO PAIN, NO CANCEL";function ky({saved:t=0,arenaTitle:e=""}={}){let n=[];return t>0&&n.push({id:"continue",label:e?`Continue \u2014 ${e}`:"Continue"}),n.push({id:"new",label:"New Run"},{id:"settings",label:"Settings"},{id:"controls",label:"Controls"},{id:"back",label:"Back to games"}),n}var Dy=Object.freeze([Object.freeze({id:"resume",label:"Resume"}),Object.freeze({id:"settings",label:"Settings"}),Object.freeze({id:"controls",label:"Controls"}),Object.freeze({id:"restart",label:"Restart arena"}),Object.freeze({id:"quit",label:"Quit to title"})]);function Ny(t=Ma){let e=t.kbm,n=t.pad;return[["Move","W A S D","Left stick"],["Look","Mouse","Right stick"],["Aim (pop out of cover)","Right mouse","LT"],["Fire (no aim in cover: blind fire)","Left mouse","RT"],["Reload (again on the bright zone)",e.reload,n.reload],["Take cover, vault, roll (tap) / sprint (hold)",e.cover,n.cover],["Bash (tap) / rev Cheat Day (hold)",e.melee,n.melee],["Kettlebell: hold to aim, release to throw (pad: equip, LT aim, RT throw)",e.grenade,n.grenade],["Pick up, revive Tobble, renew, cancel",e.interact,n.interact],["Finish a downed alien",e.finish,n.finish],["Turn toward the objective (tap)","Tab","Y"],["Tac/Com: objective and Tobble marked (hold)","\u2014","LB"],["The Regret / Guest Pass","1 / 3 or wheel","D-pad Right / Down"],["Pause","Esc","Start"],["This card","\u2014","View"]]}var I0=Object.freeze(["Seven years ago, on January 2nd, Doc Vex signed up for GlorpFit Orbital.","He went twice.","He has been billed $49.99 every month since.","GlorpFit has been taken over by the Glorp, aliens that feed on unused memberships.","Cancellation must be made in person, at the Cancellation Desk, on the top floor.","It is Tuesday. It is 1:30."]);function rc(t,e,n){return e>0?((t+(n<0?-1:1))%e+e)%e:0}var Fy=Object.freeze(["On January 2nd, Doc Vex signed up for GlorpFit Orbital. He went twice.","He has been billed $49.99 a month for seven years.","The gym is run by aliens, and the aliens will not let anyone cancel.","Cancellation must be made in person."]),XC="Tuesday, 1:30 p.m. \u2014 the Cancellation Desk closes at 2:15";function Uy(t){let e=Number.isInteger(t)?Math.max(0,Math.min(hn.length-1,t)):0;return e===0?XC:`${YC(e)} \u2014 ${_a(e)}`}var oc=Object.freeze([Object.freeze({n:1,name:"CHECK-IN",sign:"FLOOR 1 \u2014 CHECK-IN"}),Object.freeze({n:12,name:"SMOOTHIE BAR",sign:"FLOOR 12 \u2014 SMOOTHIE BAR"}),Object.freeze({n:49,name:"CANCELLATIONS",top:!0,sign:"TOP FLOOR \u2014 CANCELLATIONS"})]);var YC=t=>{let e=oc[Math.max(0,Math.min(oc.length-1,t|0))];return e.top?"Top floor":`Floor ${e.n}`},qC="\u266A Now playing: Sweatin\u2019 to the Fine Print \u266A",Oy=Object.freeze({1:Object.freeze([Object.freeze({who:"Doc",text:"I would like to cancel my membership."}),Object.freeze({who:"PA",text:"Have you tried our Smoothie Bar? First one\u2019s free!*"}),Object.freeze({who:"Tobble",text:"Ooh, free."}),Object.freeze({who:"Doc",text:"There\u2019s an asterisk."})]),2:Object.freeze([Object.freeze({who:"PA",text:"Please take a number. Now serving: 3."}),Object.freeze({who:"PA",text:"Your number: 4,912,006."}),Object.freeze({who:"Doc",text:"I have been billed for seven years. I can wait."}),Object.freeze({who:"Tobble",text:"That\u2019s\u2026 fine, we have snacks."})])});function By(t,e){let n=Math.max(1,Math.min(hn.length-1,e|0)),i=oc[Math.max(0,Math.min(oc.length-1,t|0))],s=oc[n];return{from:i.n,to:s.n,top:!!s.top,arrival:s.top?"TOP":String(s.n),title:ba[hn[n]],lines:Oy[n]||Oy[1],hours:_a(n),muzak:qC}}function zy(t,e,n){let i=Math.max(0,Math.min(1,Number.isFinite(n)?n:0));return Math.min(e,t+Math.floor((e-t+1)*i))}function Hy(t,e,n=.75){return Math.max(0,Math.min(1,t/Math.max(1e-6,e*n)))}var L0=Object.freeze([Object.freeze([{who:"PA",text:"Your membership has been renewed."},{who:"Doc",text:"No it hasn\u2019t."}]),Object.freeze([{who:"PA",text:"Good news! Your plateau has been extended."},{who:"Doc",text:"That is not good news."}]),Object.freeze([{who:"Tobble",text:"Rest day! Rest days are important!"},{who:"Doc",text:"We have a deadline. At 2:15."}]),Object.freeze([{who:"PA",text:"Thank you for choosing to stay."},{who:"Doc",text:"I did not choose."}]),Object.freeze([{who:"PA",text:"Your progress photo was not saved."},{who:"Doc",text:"Noted."}]),Object.freeze([{who:"PA",text:"Welcome back! You have been billed for the time away."},{who:"Doc",text:"Of course I have."}])]);function Gy(t,e=-1){let n=L0.length,i=Math.floor((Number.isFinite(t())?t():0)*n)%n;return i===e&&(i=(i+1)%n),i}var $C="assets/logo-full.webp",KC=new Set(["Backquote","KeyH"]),ZC=.4,jC=.12;function Xt(t,e,n,i){let s=document.createElement(t);return e&&(s.className=e),i!==void 0&&(s.textContent=i),n&&n.appendChild(s),s}function Vy(t){let e=Xt("div",null,document.body);e.id="cr-menu",e.hidden=!0;let n=null,i="title",s=0,r=[],o=t.settings,a=null,l=!1,c={get open(){return n!==null},get screen(){return n},get settings(){return o},showTitle(){i="title",h("title")},showPause(){i="pause",h("pause")},showControls(){i="game",h("controls")},showIntro(x){a=x,h("intro")},hide(){n=null,e.hidden=!0,document.body.classList.remove("cr-menu-open","cr-on-title"),e.replaceChildren()},pad(x){E(x)},choose(x){let b=r.findIndex(P=>P.id===x);return b>=0?(s=b,v(),!0):!1},items:()=>r.map(x=>x.id)};function h(x){n=x,s=0,e.hidden=!1,l=!1,document.body.classList.add("cr-menu-open"),document.body.classList.toggle("cr-on-title",x==="title"||(x==="settings"||x==="controls")&&i==="title"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),u()}function d(){n==="title"?r=ky({saved:t.saved?t.saved():0,arenaTitle:t.arenaTitle?t.arenaTitle(t.saved()):""}):n==="pause"?r=Dy.map(x=>({...x})):n==="settings"?r=[...sc.map(x=>({id:x.key,label:x.label,row:x})),{id:"close",label:"Back"}]:n==="controls"?r=[{id:"resetTutorial",label:l?"Tutorial hints will show again":"Reset tutorial hints"},{id:"close",label:"Back"}]:r=[]}function u(){d(),e.replaceChildren(),e.onclick=null,e.dataset.screen=n;let x=Xt("div","cr-menu-box",e);if(n==="intro"){Xt("div","cr-menu-kicker",x,"GLORPFIT ORBITAL"),I0.forEach((P,L)=>Xt("div",L===I0.length-1?"cr-intro-line cr-intro-last":"cr-intro-line",x,P)),Xt("div","cr-menu-hint",x,"Press any key, click, or A"),e.onclick=y;return}if(n==="title"){let P=Xt("div","cr-menu-title",x),L=Xt("img","cr-logo",P);L.src=$C,L.alt=`${C0}: ${P0}`,L.draggable=!1,Xt("h1","cr-sr-only",P,C0),Xt("p","cr-sr-only",P,P0);let C=Xt("div","cr-title-story",x);Fy.forEach(w=>Xt("div","cr-title-line",C,w)),Xt("div","cr-title-clock",C,Uy(t.saved?t.saved():0))}else Xt("div","cr-menu-head",x,n==="pause"?"PAUSED":n==="settings"?"SETTINGS":"CONTROLS");if(n==="controls"){let P=Xt("div","cr-controls",x),L=Xt("div","cr-ctl-row cr-ctl-head",P);Xt("span",null,L,""),Xt("span",null,L,"Keyboard + mouse"),Xt("span",null,L,"Gamepad");for(let[C,w,D]of Ny()){let k=Xt("div","cr-ctl-row",P);Xt("span","cr-ctl-what",k,C),Xt("span","cr-ctl-key",k,w),Xt("span","cr-ctl-pad",k,D)}}let b=Xt("div","cr-menu-list",x);r.forEach((P,L)=>{let C=Xt("div","cr-menu-item",b);if(C.setAttribute("role","menuitem"),C.dataset.id=P.id,L===s&&C.classList.add("sel"),C.addEventListener("mouseenter",()=>{s=L,f()}),P.row){C.classList.add("cr-setting"),Xt("span","cr-set-label",C,P.label);let w=Xt("span","cr-set-ctl",C);P.row.kind==="range"&&Xt("span","cr-set-step",w,"\u2212").addEventListener("click",k=>{k.stopPropagation(),s=L,m(-1)}),Xt("span","cr-set-val",w,Ry(P.row,o[P.id])),P.row.kind==="range"&&Xt("span","cr-set-step",w,"+").addEventListener("click",k=>{k.stopPropagation(),s=L,m(1)}),C.addEventListener("click",()=>{s=L,P.row.kind==="toggle"&&m(1)})}else C.textContent=P.label,C.addEventListener("click",()=>{s=L,v()})}),n==="title"&&Xt("div","cr-menu-hint",x,"Mouse, arrow keys + Enter, or a gamepad")}function f(){e.querySelectorAll(".cr-menu-item").forEach((x,b)=>x.classList.toggle("sel",b===s))}function m(x){let b=r[s];n!=="settings"||!b||!b.row||(o=Ay(o,b.id,x),t.onSettings&&t.onSettings(o),u())}function y(){if(n!=="intro")return;let x=a;a=null,n=null,c.hide(),x&&x()}function g(){i==="game"?(c.hide(),t.actions.resume()):h(i)}function p(){n==="settings"||n==="controls"?g():n==="pause"?(c.hide(),t.actions.resume()):n==="intro"&&y()}function v(){let x=r[s];if(!x)return;let b=t.actions;switch(x.id){case"continue":c.hide(),b.continue();break;case"new":c.hide(),b.newRun();break;case"settings":h("settings");break;case"controls":h("controls");break;case"back":b.back();break;case"resume":c.hide(),b.resume();break;case"restart":c.hide(),b.restart();break;case"quit":c.hide(),b.quit();break;case"close":g();break;case"resetTutorial":b.resetTutorial&&b.resetTutorial(),l=!0,u();break;default:x.row&&m(1)}}window.addEventListener("keydown",x=>{if(!(n===null||KC.has(x.code))&&(x.preventDefault(),x.stopImmediatePropagation(),!(x.metaKey||x.ctrlKey||x.altKey||["ShiftLeft","ShiftRight","ControlLeft","ControlRight","AltLeft","AltRight","MetaLeft","MetaRight"].includes(x.code)))){if(n==="intro"){x.repeat||y();return}switch(x.code){case"ArrowUp":case"KeyW":s=rc(s,r.length,-1),f();break;case"ArrowDown":case"KeyS":s=rc(s,r.length,1),f();break;case"ArrowLeft":case"KeyA":m(-1);break;case"ArrowRight":case"KeyD":m(1);break;case"Enter":case"Space":x.repeat||v();break;case"Escape":x.repeat||p();break;default:break}}},!0),e.addEventListener("contextmenu",x=>x.preventDefault());let _={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,start:!1,select:!1},M={up:0,down:0,left:0,right:0};function S(){let x=[];try{x=navigator.getGamepads&&navigator.getGamepads()||[]}catch{x=[]}for(let b of x){if(!b||!b.connected||!b.buttons||b.buttons.length<10)continue;let P=b.axes||[],L=C=>!!(b.buttons[C]&&b.buttons[C].pressed);return{up:L(12)||(P[1]||0)<-.6,down:L(13)||(P[1]||0)>.6,left:L(14)||(P[0]||0)<-.6,right:L(15)||(P[0]||0)>.6,a:L(0),b:L(1),start:L(9),select:L(8)}}return null}function E(x){let b=S();if(!b){_={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,start:!1,select:!1};return}let P=_;if(_=b,n===null){M={up:0,down:0,left:0,right:0};return}let L=w=>b[w]?P[w]?(M[w]-=x,M[w]<=0?(M[w]=jC,!0):!1):(M[w]=ZC,!0):(M[w]=0,!1),C=w=>b[w]&&!P[w];if(n==="intro"){(C("a")||C("b")||C("start"))&&y();return}L("up")&&(s=rc(s,r.length,-1),f()),L("down")&&(s=rc(s,r.length,1),f()),L("left")&&m(-1),L("right")&&m(1),C("a")?v():C("b")?p():C("start")?n==="pause"?p():n==="title"&&v():C("select")&&n==="controls"&&i==="game"&&p()}return c}var N0=Object.freeze({Rep:B.glorpPurple,PA:B.cream,Tobble:B.tobbleMint,Trainer:B.planet,Overlord:"#ffcf3a",Doc:B.cream}),Ks=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Tobble",text:e}))),k0=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Trainer",text:e}))),ac=(...t)=>Object.freeze(t.map(e=>Object.freeze({speaker:"Overlord",text:e}))),D0=Object.freeze({lockdown:Object.freeze([{speaker:"PA",text:"ATTENTION: A MEMBER IS ATTEMPTING TO LEAVE."}]),push:Object.freeze(["Before you go, have you seen our Platinum tier?","Cancelling is a big decision. Let's talk about your goals!","Have you considered a free month?"]),flank:Object.freeze(["Let's circle back to your goals!","Just a quick word about your plan!","We'd hate to see you go. That way!"]),reload:Object.freeze(["Restocking the protein!","Re-racking!","One moment, topping up the upsell!"]),downed:Object.freeze(["Your membership has been renewed!","See you tomorrow! And tomorrow!"]),dive:Object.freeze(["Incoming weight!","Drop set! DROP SET!"]),cloneDown:Object.freeze(["Just\u2026 resting between sets\u2026"]),cloneRevive:Object.freeze(["On your feet! Membership quotas!"]),paGate:Object.freeze([{speaker:"PA",text:"Members who attempt to leave will be enrolled in our Loyalty Program."}]),paSmoothie:Object.freeze([{speaker:"PA",text:"The pool is closed. The pool has always been closed."}]),paDesk:Object.freeze([{speaker:"PA",text:"Reminder: re-racking weights is mandatory. Re-racking members is also mandatory."}]),padOpen:Object.freeze([{speaker:"PA",text:"The sauna is now a spawning pool. Please enjoy responsibly."}]),padClosed:Object.freeze([{speaker:"PA",text:"The sauna is closed for cleaning. Forever."}]),trainerCharge:k0("ONE MORE REP!","You're not quitting, you're just TIRED!","PAIN IS WEAKNESS LEAVING YOUR WALLET!","NO EXCUSES!"),trainerWindup:k0("HUP!"),trainerDeath:k0("\u2026tell my\u2026 macros\u2026"),bossIntro:ac("Doc Vex! Do come in. Your commitment is so valuable to us."),bossTeam:ac("Have you met our team?"),bossReturn:ac("Let us talk about retention. Again."),bossOffer:ac("One month free.","THREE months!","SIX MONTHS AND A TOWEL!"),bossOfferTobble:Ks("Doc, that's actually a good\u2014"),bossOfferDoc:Object.freeze([Object.freeze({speaker:"Doc",text:"No."})]),bossDeath:ac("Cancellation\u2026 is\u2026 a process\u2026"),tobbleRevive:Ks("I got you! PUSH!","I got you! Push! PUSH! Two more!"),tobbleDown:Ks("I'm down! This was not in the internship packet!","Doc! I need a spot!"),tobbleComplain:Ks("Still down! Logging this as cardio!","My tracker says I'm resting. I am NOT resting!"),tobbleUp:Ks("Two more reps! I'm good!"),tobbleFlank:Ks("Doc! One's going round the side!","Flanker! That's the word, right? FLANKER!"),tobblePad:Ks("The sauna's spawning! Kettlebell it, Doc!"),tobbleClear:Ks("Ooh, you closed your rings!"),tobbleHeadshot:Ks("That's a PR!"),clear:Object.freeze(["Your satisfaction is our\u2026 priority\u2026","Auto-renew\u2026 is\u2026 forever\u2026","Have a\u2026 glorp\u2026 day\u2026"])});function Wy(t=()=>H.feedback){let e=1/0,n=0,i=null,s={},r=[],o=l=>{let c=D0[l],h=c[(s[l]||0)%c.length];return typeof h=="string"?"Rep":h.speaker};function a(l){let c=D0[l],h=(s[l]||0)%c.length;s[l]=h+1,i=typeof c[h]=="string"?{speaker:"Rep",text:c[h]}:c[h],n=t().barkTime,e=0}return{say(l,c=!1){return!D0[l]||!c&&e<t().barkGap?!1:c&&i&&n>0&&e<1e-9&&o(l)!==i.speaker?(r.push(l),!0):(a(l),!0)},tick(l){l>0&&(e+=l,n-=l,r.length&&e>=t().barkMinShow&&a(r.shift()))},current:()=>n>0&&i?{speaker:i.speaker,text:i.text,color:N0[i.speaker]||null}:null,reset(){e=1/0,n=0,i=null,r.length=0;for(let l of Object.keys(s))s[l]=0}}}var JC={...N0,Doc:"#ff8a1f"};function oi(t,e,n,i){let s=document.createElement(t);return e&&(s.className=e),i!==void 0&&(s.textContent=i),n&&n.appendChild(s),s}var QC=.55,e3=.45;function Xy(){let t=oi("div",null,document.body);t.id="cr-story",t.hidden=!0;let e=null,n=null,i=-1,s=null,r=!1,o=null;function a(c,h){h.forEach((d,u)=>{let f=oi("div","cr-story-line",c);f.style.animationDelay=`${(e3+u*QC).toFixed(2)}s`;let m=oi("span","cr-bark-who",f,d.who==="PA"?"PA:":`${d.who}:`);m.style.color=JC[d.who]||"#fff3d6",oi("span","cr-story-text",f,d.text)})}return{get visible(){return!t.hidden},showRide(c,h){t.replaceChildren(),t.hidden=!1,t.dataset.kind="ride",e=c,i=-1,r=!1,o=h||null;let d=oi("div","cr-cab",t),u=oi("div","cr-cab-head",d);oi("span","cr-cab-arrow",u,"\u25B2"),n=oi("span","cr-cab-floor",u,String(c.from)),oi("div","cr-cab-name",d,c.title.toUpperCase()),a(oi("div","cr-story-lines",d),c.lines),oi("div","cr-cab-hours",d,c.hours),oi("div","cr-cab-muzak",d,c.muzak),s=oi("div","cr-menu-hint cr-story-hint",d,"Press any key, click, or A"),s.style.visibility="hidden"},showDefeat(c){t.replaceChildren(),t.hidden=!1,t.dataset.kind="defeat",e=null,n=null,r=!0;let h=oi("div","cr-defeat",t);a(h,c),s=oi("div","cr-menu-hint cr-story-hint",h,"Press any key"),s.style.visibility="hidden"},tick(c,h,d){if(t.hidden||(s&&(s.style.visibility=c>=d?"visible":"hidden"),!e||!n))return;let u=Hy(c,h),f=zy(e.from,e.to,u);f!==i&&(i=f,n.textContent=f>=e.to&&e.top?"TOP":String(f)),!r&&u>=1&&(r=!0,t.classList.add("arrived"),o&&o())},hide(){t.hidden=!0,t.classList.remove("arrived"),t.replaceChildren(),e=null,n=null,s=null},text(){return t.hidden?"":t.textContent}}}function O0(t){let e=new Set,n=new Set,i=new Set;t.traverse(s=>{s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];if(!(s.userData&&s.userData.isOutline))for(let o of r)n.add(o)});for(let s of n)for(let r of Object.keys(s)){let o=s[r];o&&o.isTexture&&i.add(o)}return e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),t.parent&&t.parent.remove(t),{geometries:e.size,materials:n.size,textures:i.size}}var Ar=class t{constructor(e,n,i,s,r="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),t.nextNameID=t.nextNameID||0,this.$name.id=`lil-gui-name-${++t.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},F0=class extends Ar{constructor(e,n,i){super(e,n,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function U0(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}var t3={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:U0,toHexString:U0},cc={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},n3={isPrimitive:!1,match:t=>Array.isArray(t)||ArrayBuffer.isView(t),fromHexString(t,e,n=1){let i=cc.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return cc.toHexString(s)}},i3={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){let i=cc.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;let s=t*i<<16^e*i<<8^n*i<<0;return cc.toHexString(s)}},s3=[t3,cc,n3,i3];function r3(t){return s3.find(e=>e.match(t))}var B0=class extends Ar{constructor(e,n,i,s){super(e,n,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=r3(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=U0(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},lc=class extends Ar{constructor(e,n,i){super(e,n,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},z0=class extends Ar{constructor(e,n,i,s,r,o){super(e,n,i,"lil-number"),this._initInput(),this.min(s),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let n=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))},o=!1,a,l,c,h,d,u=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",y)},m=v=>{if(o){let _=v.clientX-a,M=v.clientY-l;Math.abs(M)>u?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>u&&y()}if(!o){let _=v.clientY-c;d-=_*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",y)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");let e=(p,v,_,M,S)=>(p-v)/(_-v)*(S-M)+M,n=p=>{let v=this.$slider.getBoundingClientRect(),_=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(_)},i=p=>{this._setDraggingStyle(!0),n(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{n(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,a,l,c=p=>{p.preventDefault(),this._setDraggingStyle(!0),n(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(o){let v=p.touches[0].clientX-a,_=p.touches[0].clientY-l;Math.abs(v)>Math.abs(_)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),n(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),m=400,y,g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();let _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(f,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),e-=n,e=Math.round(e/this._step)*this._step,e+=n,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},H0=class extends Ar{constructor(e,n,i,s){super(e,n,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(n=>{let i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?e:this._names[n],this}},G0=class extends Ar{constructor(e,n,i){super(e,n,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},o3=`.lil-gui {
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
}`;function a3(t){let e=document.createElement("style");e.innerHTML=t;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var Yy=!1,_d=class t{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Yy&&a&&(a3(o3),Yy=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,n,i,s,r){if(Object(i)===i)return new H0(this,e,n,i);let o=e[n];switch(typeof o){case"number":return new z0(this,e,n,i,s,r);case"boolean":return new F0(this,e,n);case"string":return new G0(this,e,n);case"function":return new lc(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new B0(this,e,n,i)}addFolder(e){let n=new t({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof lc||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof lc)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");let i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}};var A=(t,e,n,i)=>({path:t,min:e,max:n,step:i});function qy(t){let e=(n,i,s,r)=>A(`weapons.${t}.${n}`,i,s,r);return[e("mag",1,200,1),e("reserveStart",0,1e3,10),e("reserveMax",0,1e3,10),e("infiniteReserve",0,1,1),e("auto",0,1,1),e("rate",0,30,.5),e("damage",0,200,1),e("headMult",1,5,.05),e("range",5,200,1),e("spreadAim",0,20,.05),e("spreadHip",0,20,.05),e("spreadBlind",0,40,.05),e("bloomPerShot",0,20,.05),e("bloomMax",0,20,.05),e("bloomRecover",0,20,.05),e("kickPitch",0,20,.05),e("kickYaw",0,20,.05),e("reloadTime",0,5,.01),e("perfectStart",0,1,.01),e("perfectEnd",0,1,.01),e("goodStart",0,1,.01),e("goodEnd",0,1,.01),e("perfectFinish",0,5,.01),e("goodFinish",0,5,.01),e("jamPenalty",0,5,.01),e("perfectDamage",1,5,.05),e("switchTime",0,5,.01)]}var hc=Object.freeze([A("move.jog",1,10,.1),A("move.aimWalk",.5,6,.1),A("move.sprint",2,14,.1),A("move.accelTime",.01,.6,.01),A("move.stopTime",.01,.6,.01),A("move.turnRate",1,40,.5),A("move.aimTurnRate",1,40,.5),A("move.sprintTurnRate",.2,20,.1),A("move.rollDistance",1,12,.1),A("move.rollTime",.2,1.5,.01),A("move.rollEase",1,4,.05),A("move.rollBuffer",0,.5,.01),A("move.tapMax",.05,.5,.01),A("move.stickSprintMin",0,1,.05),A("move.faceMinSpeed",0,2,.05),A("move.sprintHeadingMinSpeed",0,3,.05),A("move.runClipMinSpeed",0,2,.05),A("move.runRateMin",.1,2,.05),A("move.runRateMax",.5,4,.05),A("move.sprintRateMin",.1,2,.05),A("move.sprintRateMax",.5,4,.05),A("move.stepEvery",.4,4,.05),A("move.stepEverySprint",.4,6,.05),A("move.crawlSpeed",.2,4,.05),A("move.crawlTurnRate",.5,20,.5),A("camera.fov",40,110,1),A("camera.right",-1.5,1.5,.01),A("camera.up",.5,3,.01),A("camera.back",.5,6,.05),A("camera.aim.fov",20,90,1),A("camera.aim.back",.3,5,.05),A("camera.sprint.fov",50,120,1),A("camera.sprint.up",.3,3,.01),A("camera.sprint.back",.5,6,.05),A("camera.sprint.shakeWeight",0,3,.05),A("camera.coverLow.fov",50,120,1),A("camera.coverLow.right",-1.5,1.5,.01),A("camera.coverLow.up",.3,3,.01),A("camera.coverLow.back",.5,6,.05),A("camera.coverTall.fov",50,120,1),A("camera.coverTall.right",-1.5,1.5,.01),A("camera.coverTall.up",.3,3,.01),A("camera.coverTall.back",.5,6,.05),A("camera.downed.fov",40,120,1),A("camera.downed.up",.2,3,.01),A("camera.downed.back",.5,6,.05),A("camera.bump.amount",0,.6,.01),A("camera.bump.halfLife",.01,.3,.005),A("camera.slamShake.amount",0,.3,.005),A("camera.slamShake.time",.02,1,.01),A("camera.slamShake.hz",2,60,.5),A("camera.slamFovKick",-15,15,.5),A("camera.slamFovHalfLife",.01,.6,.01),A("camera.objectiveTurnTime",.05,2,.05),A("camera.sustainHalfLife",.01,.5,.01),A("camera.blendHalfLife",0,.5,.005),A("camera.holdTime",0,2,.05),A("camera.holdRange",10,300,5),A("camera.followHalfLife",0,.5,.005),A("camera.sideHalfLife",0,.6,.005),A("camera.headHideDist",0,2,.05),A("camera.headHideMargin",0,1,.01),A("camera.shake.amp",0,.15,.001),A("camera.shake.hz",1,30,.5),A("camera.probeRadius",.05,.6,.01),A("camera.minBack",0,2,.01),A("camera.wallReturnHalfLife",0,1,.01),A("camera.pitchMin",-1.5,0,.01),A("camera.pitchMax",0,1.5,.01),A("look.mouse",5e-4,.008,1e-4),A("look.pad.yawRate",.5,10,.1),A("look.pad.pitchRate",.5,10,.1),A("look.pad.expo",1,3,.05),A("look.aimScale",.1,1.5,.01),{path:"look.invertY"},A("render.outlineWidth",.5,3,.05),A("cover.grabRange",0,5,.05),A("cover.grabAngle",0,180,1),A("cover.grabViewAngle",0,180,1),A("cover.grabSlack",0,5,.05),A("cover.grabMinTilt",0,1,.05),A("cover.gap",0,5,.01),A("cover.endInset",0,5,.01),A("cover.minLength",0,5,.05),A("cover.slideSpeed",0,30,.5),A("cover.slideMinTime",0,2,.01),A("cover.slideMaxTime",0,2,.01),A("cover.slideTurnRate",1,60,.5),A("cover.moveSpeed",0,30,.1),A("cover.alongDeadzone",0,1,.05),A("cover.leaveTilt",0,1,.05),A("cover.leaveAngle",0,180,1),A("cover.endLeaveTime",0,2,.01),A("cover.cornerZone",0,5,.05),A("cover.popTime",0,2,.01),A("cover.blindTime",0,2,.01),A("cover.popShift",0,5,.05),A("cover.pushAngle",0,180,1),A("cover.lowDrawBack",0,1,.01),A("cover.blindDrawBack",0,1,.01),A("cover.vaultTime",0,2,.01),A("cover.vaultMaxDepth",0,5,.05),A("cover.vaultHop",0,5,.05),A("cover.vaultExitSpeed",0,30,.1),A("cover.swapRange",0,5,.05),A("cover.swapSpeed",0,30,.5),A("cover.swapAngle",0,180,1),A("cover.swapMaxOffset",0,5,.05),A("cover.slamSquash",0,1,.01),A("cover.slamSquashTime",0,2,.01),A("cover.thudVolume",0,1,.05),A("cover.autoSlam",0,1,1),A("cover.autoAngle",0,90,1),A("cover.autoDist",0,1,.01),A("cover.autoMinTilt",0,1,.05),A("cover.autoMinSpeed",0,12,.1),A("cover.autoTime",0,1,.01),...qy("regret"),...qy("pistol"),A("combat.fireBuffer",0,.5,.01),A("combat.autoReload",0,1,1),A("combat.minRate",.01,1,.01),A("combat.minReloadTime",.01,.5,.01),A("combat.muzzleUp",.5,2,.01),A("combat.muzzleRight",-1,1,.01),A("combat.muzzleForward",0,2,.01),A("combat.blindLift",0,1,.01),A("combat.blindReach",0,1,.01),A("combat.crateRadius",.3,3,.05),A("combat.hitPad",0,.3,.005),A("combat.crouchHead",0,3,.01),A("combat.crouchBodyTop",0,3,.01),A("combat.shoulderDrop",0,1,.01),A("combat.pickupRadius",.2,3,.05),A("health.max",1,500,1),A("health.regenDelay",0,15,.1),A("health.regenTime",0,15,.1),A("health.downedTime",0,60,.5),A("health.standInRevive",0,1,1),A("health.reviveTime",0,10,.1),A("health.reviveHealth",0,1,.05),A("health.godMode",0,1,1),A("health.giveUpHold",.3,5,.01),A("associate.radius",0,3,.01),A("associate.height",0,3,.01),A("associate.pointSpacing",.2,3,.01),A("associate.reserveRadius",0,3,.01),A("associate.popShift",0,3,.01),A("associate.linkMax",2,15,.5),A("associate.health",1,1e3,1),A("associate.runSpeed",0,12,.1),A("associate.turnRate",.5,40,.5),A("associate.arriveDist",.01,1,.01),A("associate.stuckTime",.1,5,.1),A("associate.popTime",0,1,.01),A("associate.telegraphTime",0,2,.01),A("associate.burstTime",0,5,.1),A("associate.rate",.5,20,.5),A("associate.damage",0,50,.5),A("associate.range",5,100,1),A("associate.spread",0,15,.1),A("associate.moveSpread",0,15,.1),A("associate.aimLag",0,1,.01),A("associate.suppressChance",0,1,.05),A("associate.suppressTime",0,5,.1),A("associate.suppressRate",.5,20,.5),A("associate.suppressMiss",0,5,.1),A("associate.suppressSpread",0,20,.5),A("associate.coverWaitMin",0,5,.1),A("associate.coverWaitMax",0,8,.1),A("associate.magBursts",1,10,1),A("associate.reloadTime",0,6,.1),A("associate.flinchTime",0,2,.01),A("associate.minRange",0,20,.5),A("associate.preferRange",0,40,.5),A("associate.maxRange",1,60,.5),A("associate.relocateCheck",.05,3,.05),A("associate.relocateAfter",1,60,.5),A("associate.ammoDrop",0,200,1),A("associate.muzzleUp",.5,2,.01),A("director.tokens",0,8,1),A("director.casualTokens",0,8,1),A("director.casual",0,1,1),A("director.tokenCooldown",0,5,.1),A("director.tokenMaxHold",.5,10,.1),A("director.requestWindow",0,2,.05),A("director.pushAfter",1,30,.5),A("director.flankAfter",1,60,.5),A("director.stayRadius",.5,10,.1),A("director.flankAngle",0,180,1),A("director.flankMaxAngle",60,180,1),A("director.maxEnemies",4,8,1),A("director.slotReuse",0,5,.1),A("associate.downChance",0,1,.05),A("associate.downedCrawl",0,3,.05),A("associate.bleedTime",1,60,.5),A("associate.reviveTime",0,10,.1),A("associate.reviveHealth",.05,1,.05),A("associate.reviveRange",0,40,.5),A("associate.kneelReach",.2,3,.05),A("associate.staggerTime",0,3,.05),A("associate.diveWarn",0,1.6,.05),A("associate.diveRadius",0,12,.1),A("associate.diveChance",0,1,.05),A("associate.diveReaction",0,2,.05),A("associate.diveDistance",0,10,.1),A("associate.diveTime",.05,3,.05),A("pad.radius",.1,4,.05),A("pad.openAfterKills",0,8,1),A("pad.openAfterKillsSmoothie",0,8,1),A("pad.openAfter",0,120,1),A("pad.interval",.5,30,.5),A("pad.maxAlive",1,8,1),A("pad.total",1,30,1),A("pad.riseTime",0,3,.05),A("pad.trainerShare",0,1,.05),A("pad.trainerShareSmoothie",0,1,.05),A("pad.trainerShareBoss",0,1,.05),A("trainer.health",1,1e3,1),A("trainer.scaleW",.5,2,.05),A("trainer.scaleH",.5,2,.05),A("trainer.runSpeed",0,12,.1),A("trainer.turnRate",.5,40,.5),A("trainer.maxAlive",0,8,1),A("trainer.swingRange",.5,4,.05),A("trainer.swingSlack",0,2,.05),A("trainer.swingArc",10,360,5),A("trainer.windup",.05,2,.05),A("trainer.lockTime",0,1,.05),A("trainer.swingTime",.05,1.5,.05),A("trainer.recover",0,3,.05),A("trainer.swingGap",0,3,.05),A("trainer.damage",0,100,1),A("trainer.tobbleDamage",0,100,1),A("trainer.knockback",0,6,.1),A("trainer.knockTime",.05,1.5,.05),A("trainer.staggerTime",0,3,.05),A("trainer.preferDoc",.1,2,.05),A("trainer.retargetTime",.05,3,.05),A("trainer.repathTime",.1,3,.05),A("trainer.avoidRadius",0,5,.1),A("trainer.avoidWeight",0,5,.1),A("trainer.stuckTime",.1,3,.1),A("trainer.diveChance",0,1,.05),A("trainer.barkChance",0,1,.05),A("run.fadeOut",.05,3,.05),A("run.blackHold",0,2,.05),A("run.fadeIn",.05,3,.05),A("run.gateReach",.5,4,.1),A("run.hoursTime",1,20,.5),A("run.gateOpenTime",.1,3,.05),A("run.attractSpeed",0,1,.02),A("run.attractMargin",0,12,.5),A("run.attractHeight",4.5,14,.5),A("run.cardTime",1,10,.25),A("run.defeatCardTime",1,8,.25),A("run.cardSkipDelay",0,3,.1),A("boss.health",100,2e4,50),A("boss.scale",1,3,.05),A("boss.crouchY",.3,1,.01),A("boss.headMult",1,4,.1),A("boss.phase2At",.1,.95,.01),A("boss.phase3At",.05,.9,.01),A("boss.popTime",.05,2,.05),A("boss.telegraphTime",.1,3,.05),A("boss.burstTime",.2,6,.1),A("boss.rate",.5,20,.5),A("boss.damage",0,40,1),A("boss.spread",0,15,.1),A("boss.aimLag",0,1,.01),A("boss.muzzleUp",.5,2,.01),A("boss.coverWaitMin",0,6,.1),A("boss.coverWaitMax",0,8,.1),A("boss.shiftTime",.1,3,.05),A("boss.lobEvery",1,8,1),A("boss.lobWindup",.2,4,.05),A("boss.lobFlight",.5,4,.05),A("boss.lobRecover",0,3,.05),A("boss.lobRadius",.5,6,.1),A("boss.lobDamage",0,150,1),A("boss.lobTobbleDamage",0,150,1),A("boss.lobFalloff",0,1,.05),A("boss.retreatSpeed",.5,12,.1),A("boss.returnSpeed",.5,12,.1),A("boss.minHide",0,20,.5),A("boss.fastTelegraph",.1,3,.05),A("boss.fastBurstTime",.2,6,.1),A("boss.fastRate",.5,20,.5),A("boss.fastWaitMin",0,6,.1),A("boss.fastWaitMax",0,8,.1),A("ending.deathDelay",0,10,.1),A("ending.deskReach",.5,6,.1),A("ending.holdTime",.1,5,.1),A("ending.card1Time",.5,15,.1),A("ending.card2Time",.5,20,.1),A("ending.card3Time",.5,15,.1),A("ending.skipLock",0,5,.1),A("ending.finalLock",0,5,.1),A("tobble.enabled",0,1,1),A("tobble.scale",.3,1.2,.01),A("tobble.radius",.1,.6,.01),A("tobble.height",.5,2,.01),A("tobble.health",1,1e3,1),A("tobble.regenDelay",0,20,.5),A("tobble.regenTime",0,20,.5),A("tobble.runSpeed",0,12,.1),A("tobble.turnRate",1,30,.5),A("tobble.followMin",0,20,.5),A("tobble.followMax",1,30,.5),A("tobble.personalSpace",0,5,.05),A("tobble.lofClear",0,4,.05),A("tobble.lofRange",1,60,1),A("tobble.sidestepReact",0,3,.05),A("tobble.sidestepDist",0,5,.1),A("tobble.popTime",.01,1,.01),A("tobble.popLift",0,.6,.01),A("tobble.muzzleUp",.3,2,.01),A("tobble.coverWaitMin",0,5,.1),A("tobble.coverWaitMax",0,8,.1),A("tobble.burstTime",0,6,.1),A("tobble.rate",.5,20,.5),A("tobble.damage",0,100,1),A("tobble.spread",0,20,.5),A("tobble.range",1,100,1),A("tobble.reviveMaxThreats",0,8,1),A("tobble.reviveWaitMax",0,20,.5),A("tobble.reviveRange",.3,4,.05),A("tobble.reviveTime",0,15,.1),A("tobble.reviveHealth",.05,1,.05),A("tobble.playerReviveTime",0,10,.1),A("tobble.playerReviveRange",.3,5,.05),A("tobble.crawlSpeed",0,3,.05),A("tobble.complainEvery",1,30,.5),A("tobble.recheckTime",.1,5,.1),A("tobble.arriveDist",.02,1,.01),A("dummy.health",1,1e3,1),A("dummy.respawnTime",0,30,.5),A("dummy.railSpeed",0,10,.1),A("camera.recoil.halfLife",.01,.5,.01),A("camera.recoil.max",0,20,.5),A("look.pad.assist",.1,1,.05),A("feedback.flashTime",.01,.3,.01),A("feedback.flashSize",.05,1.5,.05),A("feedback.tracerTime",.01,.3,.01),A("feedback.tracerWidth",.005,.2,.005),A("feedback.sparkTime",.05,1,.01),A("feedback.sparkCount",0,12,1),A("feedback.gelTime",.1,2,.05),A("feedback.gelCount",0,24,1),A("feedback.gelSpeed",0,10,.1),A("feedback.killGelCount",0,48,1),A("feedback.receiptCount",0,24,1),A("feedback.receiptTime",.2,4,.05),A("feedback.gravity",0,30,.1),A("feedback.hitMarkerTime",.02,1,.01),A("feedback.killMarkerTime",.05,1,.01),A("feedback.reloadResultTime",.1,2,.05),A("feedback.reticleMinGap",0,30,1),A("feedback.lowAmmoFrac",0,1,.05),A("feedback.coverReticleOpacity",0,1,.05),A("feedback.stepDip",0,.1,.001),A("feedback.stepVolume",0,1,.05),A("feedback.shotVolume",0,1,.05),A("feedback.hitVolume",0,1,.05),A("feedback.killVolume",0,1,.05),A("feedback.reloadVolume",0,1,.05),A("feedback.gunSquash",0,.6,.01),A("feedback.gunSquashTime",.01,.5,.01),A("feedback.gunKick",0,.3,.01),A("feedback.bodyKick",0,.3,.01),A("feedback.dummyBurstTime",.01,1,.01),A("feedback.dummyRespawnPop",0,1,.01),A("feedback.faceMaxOpacity",0,1,.05),A("feedback.edgeMaxOpacity",0,1,.05),A("feedback.hitFlashTime",.05,2,.01),A("feedback.hitKick",0,3,.05),A("feedback.hurtVolume",0,1,.05),A("feedback.enemyFlashSize",.05,1.5,.05),A("feedback.enemyTracerTime",.01,.3,.01),A("feedback.enemyTracerWidth",.005,.2,.005),A("feedback.glintSize",.02,.4,.01),A("feedback.blasterVolume",0,1,.05),A("feedback.chargeVolume",0,1,.05),A("feedback.pickupVolume",0,1,.05),A("feedback.barkTime",.2,6,.1),A("feedback.barkGap",0,12,.5),A("feedback.barkMinShow",0,4,.1),A("feedback.bashVolume",0,1,.05),A("feedback.cutVolume",0,1,.05),A("feedback.throwVolume",0,1,.05),A("feedback.clankVolume",0,1,.05),A("feedback.boomVolume",0,1,.05),A("feedback.saunaVolume",0,1,.05),A("feedback.reviveVolume",0,1,.05),A("feedback.tobbleShotVolume",0,1,.05),A("feedback.blastSize",.2,8,.1),A("feedback.blastTime",.05,2,.01),A("feedback.executeShake",0,.3,.005),A("feedback.cutGelEvery",.02,1,.01),A("feedback.arcDot",.01,.5,.01),A("feedback.coverGlow",0,1,1),A("feedback.coverGlowOpacity",0,1,.05),A("feedback.coverGlowFade",.01,1,.01),A("feedback.coverGlowLength",.5,10,.1),A("feedback.coverGlowHz",0,10,.1),A("feedback.slamHitstop",0,.3,.005),A("feedback.hitstopScale",0,1,.01),A("feedback.slamDust",0,20,1),A("feedback.slamDebris",0,20,1),A("feedback.rumble",0,1,1),A("feedback.slamRumble",0,1,.05),A("feedback.slamRumbleTime",.02,1,.01),A("feedback.blindDrift",0,20,.5),A("feedback.blindDriftHz",0,5,.05),A("feedback.blindDriftRamp",0,3,.05),A("feedback.blindShake",1,6,.1),A("feedback.blindShakeAmp",0,.1,.001),A("feedback.blindFlail",0,1.2,.01),A("feedback.blindFlailHz",0,30,.5),A("feedback.motorVolume",0,1,.05),A("feedback.motorRevTime",.05,3,.05),A("feedback.revShake",0,.1,.001),A("feedback.revRumble",0,1,.05),A("feedback.revSparkEvery",.02,1,.01),A("feedback.revSparkCount",0,8,1),A("feedback.discScale",1,4,.05),A("feedback.discBlur",0,1,.05),A("feedback.grindShake",0,.15,.002),A("feedback.grindZoom",0,20,.5),A("feedback.grindPull",0,1.5,.05),A("feedback.grindGelCount",0,24,1),A("feedback.grindSparkCount",0,12,1),A("feedback.executeJitter",0,.3,.005),A("feedback.grindRumble",0,1,.05),A("feedback.hint",0,1,1),A("feedback.hintTime",.5,15,.1),A("feedback.hintFade",.05,2,.05),A("feedback.hintCoverDelay",0,30,.5),A("feedback.reloadBarScale",.5,3,.05),A("feedback.reloadBarGap",0,120,1),A("feedback.reloadPulseHz",0,10,.1),A("feedback.reloadAlertScale",.5,3,.05),A("feedback.reloadFlashScale",.5,4,.05),A("feedback.reloadTickVolume",0,1,.05),A("feedback.reloadTickLead",0,1,.02),A("feedback.reloadTickSlow",.03,1,.01),A("feedback.reloadTickFast",.02,.5,.01),A("melee.holdTime",0,5,.01),A("melee.bashTime",0,5,.01),A("melee.bashHitAt",0,5,.01),A("melee.bashRange",0,10,.05),A("melee.bashAngle",0,180,1),A("melee.bashDamage",0,500,1),A("melee.bashLunge",0,10,.05),A("melee.bashCooldown",0,5,.01),A("melee.revSpeed",0,30,.1),A("melee.cutterReach",0,10,.05),A("melee.cutterAngle",0,180,1),A("melee.cutTime",0,5,.01),A("melee.finishTime",0,5,.01),A("melee.executeRange",0,10,.05),A("melee.executeAngle",0,180,1),A("melee.promptRange",0,10,.05),A("melee.cutterSpin",0,100,1),A("grenade.carry",0,10,1),A("grenade.start",0,10,1),A("grenade.throwSpeed",0,30,.1),A("grenade.throwLift",0,180,1),A("grenade.gravity",.5,30,.1),A("grenade.ballRadius",.02,1,.01),A("grenade.restitution",0,1,.01),A("grenade.friction",0,1,.01),A("grenade.fuse",0,5,.01),A("grenade.radius",0,10,.05),A("grenade.damage",0,500,1),A("grenade.killRadius",0,10,.05),A("grenade.killDamage",0,500,1),A("grenade.selfDamage",0,2,.05),A("grenade.padReach",0,10,.05),A("grenade.arcTime",0,5,.01),A("grenade.throwTime",0,5,.01)]),l3=new Map(hc.map(t=>[t.path,t])),uc=structuredClone(H);function co(t,e){let n=t;for(let i of e.split(".")){if(n===null||typeof n!="object")return;n=n[i]}return n}function W0(t,e,n){let i=e.split("."),s=t;for(let r=0;r<i.length-1;r++)if(s=s[i[r]],s===null||typeof s!="object")return!1;return s[i[i.length-1]]=n,!0}function X0(t=H,e=uc){let n={};for(let i of hc){let s=co(t,i.path);s!==co(e,i.path)&&(n[i.path]=s)}return n}function $y(t,e){if(e===null||typeof e!="object"||Array.isArray(e))return 0;let n=0;for(let i of Object.keys(e)){let s=l3.get(i);if(!s)continue;let r=e[i],o=co(uc,i);typeof r==typeof o&&(typeof r=="number"&&!(Number.isFinite(r)&&r>=s.min&&r<=s.max)||W0(t,i,r)&&n++)}return n}function V0(t,e){if(t===null||typeof t!="object")return JSON.stringify(t);if(Array.isArray(t))return`[${t.map(s=>V0(s,e)).join(", ")}]`;let n="  ".repeat(e+1);return`{
${Object.keys(t).map(s=>`${n}${s}: ${V0(t[s],e+1)},`).join(`
`)}
${"  ".repeat(e)}}`}function Ky(t=H){return["associate","boss","camera","combat","cover","director","dummy","ending","feedback","grenade","health","look","melee","move","pad","run","tobble","trainer","weapons"].map(e=>`  ${e}: ${V0(t[e],1)},`).join(`
`)}var Y0="cr-tuning",c3={melee:"Melee and Cheat Day",grenade:"Kettlebells",move:"Move",camera:"Camera",look:"Look",cover:"Cover",weapons:"Weapons",regret:"The Regret",pistol:"Guest Pass",combat:"Combat",associate:"Associate",director:"Director",dummy:"Dummies",recoil:"Recoil",feedback:"Feedback",aim:"Aim",sprint:"Sprint",coverLow:"Cover low",coverTall:"Cover tall",health:"Health",downed:"Downed",bump:"Bump",shake:"Shake",pad:"Spawn Sauna",tobble:"Tobble",lookPad:"Pad",wall:"Wall"},h3=new Set(["probeRadius","minBack","wallReturnHalfLife"]);function Zy(t){let e=t.split("."),n=e.slice(0,-1);return n.length===1&&n[0]==="camera"&&h3.has(e[1])&&n.push("wall"),n[0]==="look"&&n[1]==="pad"&&(n[1]="lookPad"),n}function u3(){try{return window.localStorage}catch{return null}}function jy({storage:t=u3()}={}){let e=()=>{try{return t?t.getItem(Y0):null}catch{return null}},n=y=>{try{t&&(y===null?t.removeItem(Y0):t.setItem(Y0,y))}catch{}};try{let y=e();y&&$y(H,JSON.parse(y))}catch{}let i=new _d({title:"Tuning",autoPlace:!1,width:300}),s=i.domElement;Object.assign(s.style,{position:"fixed",left:"12px",top:"52px",zIndex:"6",maxHeight:"calc(100vh - 64px)",overflowY:"auto"}),document.body.appendChild(s);function r(){let y=document.activeElement;y&&y!==document.body&&s.contains(y)&&y.blur&&y.blur()}s.addEventListener("click",y=>{let g=y.target;g&&g.closest&&g.closest(".lil-title")&&g.blur!==void 0&&r()});let o=new Map;function a(y){let g=i,p="";for(let v of y){if(p+=`.${v}`,!o.has(p)){let _=g.addFolder(c3[v]||v);_.close(),o.set(p,_)}g=o.get(p)}return g}function l(){let y=X0();n(Object.keys(y).length?JSON.stringify(y):null)}for(let y of hc){let g=y.path.split("."),p=g[g.length-1],v=co(H,g.slice(0,-1).join(".")),_=typeof co(uc,y.path)=="boolean"?a(Zy(y.path)).add(v,p):a(Zy(y.path)).add(v,p,y.min,y.max,y.step);_.onChange(l),_.onFinishChange(r)}let c=null;function h(y){if(!c){c=document.createElement("textarea"),c.readOnly=!0,c.rows=8,Object.assign(c.style,{width:"calc(100% - 16px)",margin:"8px",font:"11px/1.3 ui-monospace, Menlo, monospace"});let g=document.createElement("div");g.textContent="Press Cmd+C to copy",g.style.cssText="padding:0 8px 6px;font-size:11px;color:#ccc;",c.note=g,s.appendChild(g),s.appendChild(c)}c.value=y,c.note.hidden=!1,c.hidden=!1,c.focus(),c.select()}function d(y){c&&(c.hidden=!0,c.note.hidden=!0);let g=null;try{g=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(y):null}catch{g=null}if(!g){h(y);return}g.catch(()=>h(y))}let u={copyChanges(){r(),d(JSON.stringify(X0(),null,2))},copyForFile(){r(),d(Ky())},resetAll(){r();for(let y of hc)W0(H,y.path,co(uc,y.path));n(null),i.controllersRecursive().forEach(y=>y.updateDisplay())}};i.add(u,"copyChanges").name("Copy changes"),i.add(u,"copyForFile").name("Copy for tuning.js"),i.add(u,"resetAll").name("Reset all");let f=!1;function m(y){f=y,s.style.display=y?"":"none"}return m(!1),{toggle(){m(!f)},isOpen:()=>f}}var Jy=Math.PI*2,Mi=t=>t-Jy*Math.round(t/Jy),ts=(t,e)=>Math.atan2(t,e);function dc(t){return Math.min(1,Math.hypot(t.moveX,t.moveY))}function Ui(t,e){let n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),s=-t.moveY*n-t.moveX*i,r=-t.moveY*i+t.moveX*n,o=Math.hypot(s,r);return o>1&&(s/=o,r/=o),e[0]=s,e[1]=r,Math.min(1,o)}function jt(t,e,n){let i=Mi(e-t);return t+Math.max(-n,Math.min(n,i))}function wa(t,e,n,i,s,r){let o=t.vel,a=(Math.hypot(e,n)<Math.hypot(o[0],o[2])?i/r.stopTime:i/r.accelTime)*s,l=e-o[0],c=n-o[2],h=Math.hypot(l,c);h<=a?(o[0]=e,o[2]=n):(o[0]+=l/h*a,o[2]+=c/h*a)}var q0=[0,0],Rr=[0,0,0],Sa=1e-9,d3=1.5;var $0=(t=H)=>t.tobble?.playerReviveTime??d3;function Qy(t,e,n){let i=e-t.pos[0],s=n-t.pos[2];Math.hypot(i,s)>1e-6&&(t.facing=t.facing+Mi(Math.atan2(i,s)-t.facing)),t.heading=t.facing}function fc(t){t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0}var Md={knocked:{acceptsTap:!1,selfMoves:!0,enter(t){fc(t),t.cover=null,t.coverTarget=null,t.scratch.prevOff=0},update(t,e,n){let i=t.scratch;t.aiming=!1,t.firing=!1;let s=i.time>0?i.time:0,r=t.stateTime>=s-Sa,o=r||!(s>0)?1:t.stateTime/s,a=i.dist*(1-(1-o)*(1-o)),l=a-i.prevOff;return i.prevOff=a,Rr[0]=i.dir[0]*l,Rr[1]=0,Rr[2]=i.dir[1]*l,t.moveBy(Rr,n,!1),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},bash:{acceptsTap:!1,selfMoves:!0,enter(t){t.aiming=!1,t.firing=!1,t.scratch.dir=[Math.sin(t.facing),Math.cos(t.facing)],t.scratch.prevOff=0,t.scratch.hit=!1,t.heading=t.facing},update(t,e,n){let i=H.melee,s=t.scratch;t.aiming=!1,t.firing=!1;let r=t.stateTime>=i.bashTime-Sa,o=r||!(i.bashTime>0)?1:t.stateTime/i.bashTime,a=i.bashLunge*(1-(1-o)*(1-o)),l=a-s.prevOff;return s.prevOff=a,Rr[0]=s.dir[0]*l,Rr[1]=0,Rr[2]=s.dir[1]*l,t.moveBy(Rr,n,!1),!s.hit&&(r||t.stateTime>=i.bashHitAt-Sa)&&(s.hit=!0,t.onAction?.({type:"bashHit"})),r?(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},rev:{acceptsTap:!1,enter(t){t.aiming=!1,t.firing=!1,t.heading=t.facing},update(t,e,n){let i=t.tuning,s=H.melee.revSpeed;t.aiming=!1,t.firing=!1,Ui(e,q0),wa(t,q0[0]*s,q0[1]*s,s,n,i);let r=t.speed();return r>s&&(t.vel[0]*=s/r,t.vel[2]*=s/r),r>i.faceMinSpeed?t.facing=jt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n):t.facing=jt(t.facing,e.camYaw,i.aimTurnRate*n),t.heading=t.facing,null},exit(){}},execute:{acceptsTap:!1,selfMoves:!0,enter(t){fc(t)},update(t){return fc(t),t.stateTime<t.scratch.time-Sa?null:(t.onAction?.({type:"executeDone"}),"move")},exit(){}},reviveTobble:{acceptsTap:!1,selfMoves:!0,enter(t){fc(t)},update(t,e){return fc(t),e.interactHeld?t.stateTime<$0()-Sa?null:(t.onAction?.({type:"reviveDone"}),"move"):"move"},exit(){}}},Ta={bash(t,e){return t.state!=="move"&&t.state!=="sprint"||t.bashReadyAt>t.clock+Sa?!1:(t.bashReadyAt=t.clock+H.melee.bashCooldown,Number.isFinite(e)&&(t.facing=t.facing+Mi(e-t.facing)),t.go("bash",{}),!0)},rev(t,e){return e?t.state!=="move"&&t.state!=="sprint"?!1:(t.go("rev",{}),!0):t.state!=="rev"?!1:(t.go("move",{}),!0)},execute(t,e,n){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("execute",{}),t.scratch.time=Number.isFinite(n)&&n>0?n:0,Qy(t,e[0],e[1]),!0)},knock(t,e,n,i,s){if(t.state==="roll"||t.state==="execute"||t.state==="reviveTobble"||t.state==="knocked"||t.state==="downed")return!1;let r=Math.hypot(e,n);return r>1e-9?(t.go("knocked",{}),t.scratch.dir=[e/r,n/r],t.scratch.dist=i>0?i:0,t.scratch.time=s,!0):!1},reviveTobble(t,e){return t.state!=="move"&&t.state!=="sprint"&&t.state!=="rev"&&t.state!=="cover"?!1:(t.go("reviveTobble",{}),Qy(t,e[0],e.length>2?e[2]:e[1]),!0)}};var Ms=1e-9,K0=Math.PI/180,tb=.05,f3=1.8,p3={low:"low",tall:"tall",pillar:"tall",wall:"tall"};function nb(t=H.cover,e=H.move){return{radius:e.radius,gap:t.gap,endInset:t.endInset,minLength:t.minLength}}var m3=[{name:"+x",axis:0,sign:1,normal:[1,0],tangent:[0,1]},{name:"-x",axis:0,sign:-1,normal:[-1,0],tangent:[0,1]},{name:"+z",axis:1,sign:1,normal:[0,1],tangent:[1,0]},{name:"-z",axis:1,sign:-1,normal:[0,-1],tangent:[1,0]}],g3=t=>{for(let e of["a","b","tangent","normal"])Object.freeze(t[e]);return Object.freeze(t)};function ib(t,{radius:e,gap:n,endInset:i,minLength:s,exclude:r=[]}){let o=e+n,a=[];return t.forEach((l,c)=>{let h=p3[l.kind];if(!h)return;let d=t.filter((u,f)=>f!==c&&u.kind!=="floor"&&u.max[1]>tb&&u.min[1]<f3);for(let u of m3){let f=u.axis*2,m=2-f,y=(u.sign>0?l.max[f]:l.min[f])+u.sign*o,g=l.min[m],p=l.max[m],v=p-g,_=[];for(let b of d){if(!(y>b.min[f]-o+Ms&&y<b.max[f]+o-Ms))continue;let P=b.min[m]-o-g,L=b.max[m]+o-g;L>Ms&&P<v-Ms&&_.push([Math.max(P,0),Math.min(L,v)])}_.sort((b,P)=>b[0]-P[0]);let M=[];for(let b of _){let P=M[M.length-1];P&&b[0]<=P[1]+Ms?P[1]=Math.max(P[1],b[1]):M.push([b[0],b[1]])}let S=[],E=0,x=!0;for(let[b,P]of M)b>E+Ms&&S.push([E,b,x,!1]),E=P,x=!1;v>E+Ms&&S.push([E,v,x,!0]),S.forEach(([b,P,L,C],w)=>{let D=`${c}${u.name}#${w}`;if(r.includes(D))return;let k=g+b+(L?i:0),I=g+P-(C?i:0),F=I-k;if(F<s-Ms)return;let z=u.axis===0?[y,k]:[k,y],$=u.axis===0?[y,I]:[I,y];a.push(g3({id:D,kind:h,boxIndex:c,a:z,b:$,length:F,tangent:[u.tangent[0],u.tangent[1]],normal:[u.normal[0],u.normal[1]],height:l.max[1],depth:l.max[f]-l.min[f],openA:L,openB:C}))})}}),a}function wi(t,e,n=[0,0]){return n[0]=t.a[0]+t.tangent[0]*e,n[1]=t.a[1]+t.tangent[1]*e,n}function Cr(t,e,n=H.cover){let i=e<=n.cornerZone,s=t.length-e<=n.cornerZone;return i&&s?e<=t.length-e?-1:1:i?-1:s?1:0}function pc(t,e){return e<0?t.openA:t.openB}var eb=.9,sb=(t,e,n,i)=>Ni(t,[e[0],eb,e[1]],[n[0],eb,n[1]],.9*i)===1;function Ea(t,e,n,i,s,r,o){let a=Math.cos(r.grabAngle*K0),l=Math.sin(s),c=Math.cos(s),h=r.grabViewAngle*K0,d=null;for(let u of t){let f=(n[0]-u.a[0])*u.normal[0]+(n[2]-u.a[1])*u.normal[1],m=-(i[0]*u.normal[0]+i[1]*u.normal[1]);if(f<-(r.gap+.02)||m<a||m<=Ms)continue;let y=Math.max(f,0)/m,g=(n[0]+i[0]*y-u.a[0])*u.tangent[0]+(n[2]+i[1]*y-u.a[1])*u.tangent[1];if(g<-r.grabSlack||g>u.length+r.grabSlack)continue;let p=Math.max(0,Math.min(u.length,g)),v=wi(u,p),_=v[0]-n[0],M=v[1]-n[2],S=Math.hypot(_,M);if(!(S>r.grabRange||d&&S>=d.dist)){if(S>.3){let E=(_*l+M*c)/S;if(Math.acos(Math.max(-1,Math.min(1,E)))>h)continue}sb(e,[n[0],n[2]],v,o)&&(d={edge:u,t:p,point:v,dist:S})}}return d}function rb(t,e,n,i,s,r,o){if(Cr(n,i,r)!==s||!pc(n,s))return null;let a=wi(n,i),l=Math.cos(r.swapAngle*K0),c=null;for(let h of t){if(h===n||h.normal[0]*n.normal[0]+h.normal[1]*n.normal[1]<l)continue;let d=Math.hypot(h.a[0]-a[0],h.a[1]-a[1]),u=Math.hypot(h.b[0]-a[0],h.b[1]-a[1]),f=d<=u?0:h.length,m=wi(h,f),y=m[0]-a[0],g=m[1]-a[1],p=Math.hypot(y,g);(y*n.tangent[0]+g*n.tangent[1])*s<=0||Math.abs(y*n.normal[0]+g*n.normal[1])>r.swapMaxOffset||p>r.swapRange||c&&p>=c.dist||sb(e,a,m,o)&&(c={edge:h,t:f,point:m,dist:p})}return c}function v3(t,e,n,i){let s=e[1]+tb,r=e[1]+i;for(let o of t){if(o.kind==="floor"||!(o.max[1]>s&&o.min[1]<r))continue;let a=Math.max(o.min[0],Math.min(e[0],o.max[0])),l=Math.max(o.min[2],Math.min(e[2],o.max[2]));if(Math.hypot(e[0]-a,e[2]-l)<n-Ms)return!1}return!0}function ob(t,e,n,i,s,r){if(t.kind!=="low"||t.depth>i.vaultMaxDepth)return null;let o=wi(t,e),a=t.depth+2*(s+i.gap),l=[o[0]-t.normal[0]*a,0,o[1]-t.normal[1]*a];if(!v3(n,l,s,r))return null;let c=n.filter((h,d)=>d!==t.boxIndex);return Ni(c,[o[0],.5,o[1]],[l[0],.5,l[2]],s)!==1?null:l}var x3=["coverSlide","cover","vault","coverSwap"],ab=Math.PI/180,Cn=[0,0],Sd=[0,0],Pr=[0,0,0],hb=.001,y3=2,Z0=(t,e,n)=>Math.max(e,Math.min(n,t));function Td(t,e,n){if(dc(e)>=t.coverTuning.grabMinTilt){Ui(e,Cn);let i=Math.hypot(Cn[0],Cn[1]);n[0]=Cn[0]/i,n[1]=Cn[1]/i}else n[0]=Math.sin(t.facing),n[1]=Math.cos(t.facing);return n}var ub={name:"cover",state:"coverSlide",when(t,e){return t.coverTarget=Ea(t.coverEdges,t.boxes,t.pos,Td(t,e,Sd),e.camYaw,t.coverTuning,t.tuning.radius),t.coverTarget!==null}},wd={};function db(t,e){let n=t.coverTuning;if(!n.autoSlam||e.aim||dc(e)<n.autoMinTilt)return null;Object.assign(wd,n),wd.grabAngle=n.autoAngle,wd.grabRange=n.autoDist,Ui(e,Cn);let i=Math.hypot(Cn[0],Cn[1]);Sd[0]=Cn[0]/i,Sd[1]=Cn[1]/i;let s=Ea(t.coverEdges,t.boxes,t.pos,Sd,e.camYaw,wd,t.tuning.radius);if(!s)return null;let r=s.edge.normal;return-(t.runVel[0]*r[0]+t.runVel[1]*r[1])>=n.autoMinSpeed?s:null}function b3(t,e,n){let i=Cr(t,e,n);return t.kind==="low"||i!==0&&pc(t,i)}function Zs(t){return t.cover?t.cover.edge:t.scratch.edge||null}function j0(t){if(t.state==="downed")return"downed";if(t.state==="sprint")return"sprint";if(t.cover&&t.cover.pop>=.5)return"aim";if(t.state==="cover"||t.state==="coverSlide"||t.state==="coverSwap"){let e=Zs(t);if(e)return e.kind==="low"?"coverLow":"coverTall"}return t.aiming?"aim":"normal"}function ho(t){let e=t.cover;if(!e)return 1;let n=e.edge,i=e.popEnd;if(i===0&&(i=Cr(n,e.t,t.coverTuning)),i===0)return 1;let s=ts(-n.normal[0],-n.normal[1]),r=-Math.cos(s),o=Math.sin(s),a=n.tangent[0]*i*r+n.tangent[1]*i*o<0?-1:1;return pc(n,i)?a:-a}function lb(t,e,n,i){let s=t.coverTarget;t.coverTarget=null;let r=t.scratch;r.edge=s.edge,r.t=s.t,r.from=[t.pos[0],t.pos[1],t.pos[2]],r.to=[s.point[0],t.pos[1],s.point[1]];let o=Math.hypot(r.to[0]-r.from[0],r.to[2]-r.from[2]);r.dur=Math.max(hb,Z0(o/Math.max(e,1e-6),n,i)),t.aiming=!1}function cb(t,e,n,i){let s=t.scratch,r=Math.min(1,t.stateTime/s.dur+1e-9);return Pr[0]=s.from[0]+(s.to[0]-s.from[0])*r-t.pos[0],Pr[1]=0,Pr[2]=s.from[2]+(s.to[2]-s.from[2])*r-t.pos[2],t.moveBy(Pr,e,!1),i!==null&&(t.facing=jt(t.facing,i,n*e)),t.heading=t.facing,r<1?null:Math.hypot(t.pos[0]-s.to[0],t.pos[2]-s.to[2])>.1?"move":(t.cover={edge:s.edge,t:s.t,pop:0,popEnd:0,exposed:!1,endPush:0,blind:0,blindEnd:0},t.vel[0]=t.vel[1]=t.vel[2]=0,t.slams++,"cover")}var _3={coverSlide:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;lb(t,e.slideSpeed,e.slideMinTime,e.slideMaxTime)},update(t,e,n){let i=t.scratch.edge;return cb(t,n,t.coverTuning.slideTurnRate,ts(-i.normal[0],-i.normal[1]))},exit(){}},coverSwap:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTuning;t.cover=null,lb(t,e.swapSpeed,0,y3);let n=t.scratch;t.heading=ts(n.to[0]-n.from[0],n.to[2]-n.from[2]),t.facing=t.facing+Mi(t.heading-t.facing)},update(t,e,n){return cb(t,n,0,null)},exit(){}},vault:{acceptsTap:!1,selfMoves:!0,enter(t){let e=t.coverTarget;t.coverTarget=null;let n=t.scratch,i=e.edge;t.cover=null,t.aiming=!1,n.edge=i,n.landing=e.landing,n.from=[t.pos[0],t.pos[2]],t.heading=ts(-i.normal[0],-i.normal[1]),t.facing=t.facing+Mi(t.heading-t.facing)},update(t,e,n){let i=t.scratch,s=t.coverTuning,r=Math.min(1,t.stateTime/Math.max(s.vaultTime,hb)+1e-9);return t.pos[0]=i.from[0]+(i.landing[0]-i.from[0])*r,t.pos[2]=i.from[1]+(i.landing[2]-i.from[1])*r,r<1?null:(t.vel[0]=-i.edge.normal[0]*s.vaultExitSpeed,t.vel[1]=0,t.vel[2]=-i.edge.normal[1]*s.vaultExitSpeed,"move")},exit(){}},cover:{acceptsTap:!1,selfMoves:!0,enter(){},exit(t){t.cover=null,t.aiming=!1},update(t,e,n){let i=t.coverTuning,s=t.cover,r=s.edge,o=t.tuning,a=Ui(e,Cn),l=Math.hypot(Cn[0],Cn[1]),c=l>0?Cn[0]/l:0,h=l>0?Cn[1]/l:0,d=r.normal[0],u=r.normal[1],f=a>=i.leaveTilt,m=(b,P)=>(t.vel[0]=b*o.jog,t.vel[1]=0,t.vel[2]=P*o.jog,"move");if(f&&c*d+h*u>=Math.cos(i.leaveAngle*ab))return m(Cn[0],Cn[1]);if(e.tap&&f){let b=Math.cos(i.pushAngle*ab);if(-(c*d+h*u)>=b){let L=ob(r,s.t,t.boxes,i,o.radius,o.height);if(L)return t.coverTarget={landing:L,edge:r},"vault"}let P=c*r.tangent[0]+h*r.tangent[1];if(Math.abs(P)>=b){let L=rb(t.coverEdges,t.boxes,r,s.t,P>0?1:-1,i,o.radius);if(L)return t.coverTarget=L,"coverSwap"}}let y=Cr(r,s.t,i),g=b3(r,s.t,i),p=e.aim&&g?1:0,v=e.fire&&!e.aim&&g?1:0,_=i.popTime>0?n/i.popTime:1;s.pop=s.pop<p?Math.min(p,s.pop+_):Math.max(p,s.pop-_);let M=i.blindTime>0?n/i.blindTime:1;s.blind=s.blind<v?Math.min(v,s.blind+M):Math.max(v,s.blind-M),s.popEnd=s.pop>0&&r.kind!=="low"?y:0,s.blindEnd=s.blind>0&&r.kind!=="low"?y:0,s.exposed=s.pop>=.5,t.aiming=s.exposed;let S=!1;if(s.pop===0&&s.blind===0){let b=Cn[0]*r.tangent[0]+Cn[1]*r.tangent[1];if(Math.abs(b)>=i.alongDeadzone){let P=s.t+b*i.moveSpeed*n;if(s.t=Z0(P,0,r.length),P!==s.t&&pc(r,b>0?1:-1)&&(S=!0,s.endPush+=n,s.endPush>=i.endLeaveTime))return m(r.tangent[0]*Math.sign(b),r.tangent[1]*Math.sign(b))}}else s.blindEnd!==0&&v===1&&(s.t=Z0(s.t+s.blindEnd*i.moveSpeed*n,0,r.length));S||(s.endPush=0);let E=wi(r,s.t),x=s.popEnd*i.popShift*s.pop;return Pr[0]=E[0]+r.tangent[0]*x-t.pos[0],Pr[1]=0,Pr[2]=E[1]+r.tangent[1]*x-t.pos[2],t.moveBy(Pr,n,!1),s.pop>0?t.facing=jt(t.facing,e.camYaw,o.aimTurnRate*n):t.facing=jt(t.facing,ts(-d,-u),o.turnRate*n),t.heading=t.facing,null}}},fb=Object.fromEntries(x3.map(t=>[t,_3[t]]));var Ad=t=>[Math.sin(t),0,Math.cos(t)],Rd=t=>[-Math.cos(t),0,Math.sin(t)],M3=(t,e,n)=>e*(1-(1-t)**n),Wn=[0,0],Ed=[0,0,0];function J0(t,e,n){return e.sprint&&!e.aim&&!e.grenade&&dc(e)>=n.stickSprintMin}var w3={move:{acceptsTap:!0,enter(){},update(t,e,n){let i=t.tuning;if(J0(t,e,i))return"sprint";t.aiming=e.aim,t.firing=!!e.fire;let s=e.aim||e.grenade?i.aimWalk:i.jog;return Ui(e,Wn),wa(t,Wn[0]*s,Wn[1]*s,s,n,i),e.aim||e.fire||e.grenade?t.facing=jt(t.facing,e.camYaw,i.aimTurnRate*n):t.speed()>i.faceMinSpeed&&(t.facing=jt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.turnRate*n)),t.heading=t.facing,null},exit(){}},sprint:{acceptsTap:!0,enter(t,e){t.aiming=!1,t.speed()>t.tuning.sprintHeadingMinSpeed?t.heading=Math.atan2(t.vel[0],t.vel[2]):Ui(e,Wn)>.01?t.heading=Math.atan2(Wn[0],Wn[1]):t.heading=t.facing},update(t,e,n){let i=t.tuning;return J0(t,e,i)?(Ui(e,Wn),t.heading=jt(t.heading,Math.atan2(Wn[0],Wn[1]),i.sprintTurnRate*n),wa(t,Math.sin(t.heading)*i.sprint,Math.cos(t.heading)*i.sprint,i.sprint,n,i),t.facing=t.heading,null):"move"},exit(){}},roll:{acceptsTap:!1,selfMoves:!0,enter(t,e){t.aiming=!1;let n=t.scratch;if(n.dir=[Math.sin(t.facing),Math.cos(t.facing)],Ui(e,Wn)>.01){let i=Math.hypot(Wn[0],Wn[1]);n.dir[0]=Wn[0]/i,n.dir[1]=Wn[1]/i}n.prevOff=0,n.queued=!1,t.heading=Math.atan2(n.dir[0],n.dir[1]),t.facing=t.facing+Mi(t.heading-t.facing)},update(t,e,n){let i=t.tuning,s=t.scratch;e.tap&&t.stateTime>=i.rollTime-i.rollBuffer&&(s.queued=!0);let r=t.stateTime>=i.rollTime-1e-9,o=M3(r?1:t.stateTime/i.rollTime,i.rollDistance,i.rollEase),a=o-s.prevOff;return s.prevOff=o,Ed[0]=s.dir[0]*a,Ed[1]=0,Ed[2]=s.dir[1]*a,t.moveBy(Ed,n,!1),r?s.queued?"roll":J0(t,e,i)?"sprint":(t.vel[0]=t.vel[1]=t.vel[2]=0,"move"):null},exit(){}},downed:{acceptsTap:!1,enter(t){t.cover=null,t.coverTarget=null,t.aiming=!1,t.firing=!1,t.vel[0]=t.vel[1]=t.vel[2]=0},update(t,e,n){let i=t.tuning;return t.aiming=!1,t.firing=!1,Ui(e,Wn),wa(t,Wn[0]*i.crawlSpeed,Wn[1]*i.crawlSpeed,i.crawlSpeed,n,i),t.speed()>i.faceMinSpeed&&(t.facing=jt(t.facing,Math.atan2(t.vel[0],t.vel[2]),i.crawlTurnRate*n)),t.heading=t.facing,null},exit(){}},...fb,...Md},S3=[ub,{name:"roll",when:()=>!0,state:"roll"}];function pb({boxes:t,spawn:e,tuning:n=H.move,coverTuning:i=H.cover,coverEdges:s=[],states:r=w3,contextActions:o=S3,onState:a,onStep:l,onAction:c}){let h={state:"move",stateTime:0,entries:0,pos:[e[0],e[1],e[2]],prevPos:[e[0],e[1],e[2]],vel:[0,0,0],facing:0,prevFacing:0,aiming:!1,firing:!1,heading:0,tuning:n,boxes:t,coverTuning:i,coverEdges:s,onState:a,onStep:l,onAction:c,clock:0,bashReadyAt:0,grenadeAim:!1,cover:null,coverTarget:null,slams:0,stepDist:0,steps:0,foot:0,runVel:[0,0],hitTime:0,autoTimer:0,hit:!1,scratch:{},speed(){return Math.hypot(h.vel[0],h.vel[2])},moveBy(d,u,f=!0){let m=h.pos,y=Vn(h.boxes,m,d,n.radius,n.height);if(h.hit=!!y.hit,!f)u>0&&(h.vel[0]=(y.pos[0]-m[0])/u,h.vel[2]=(y.pos[2]-m[2])/u);else if(y.hit)if(u>0)h.vel[0]=(y.pos[0]-m[0])/u,h.vel[2]=(y.pos[2]-m[2])/u;else{let g=y.normal,p=h.vel[0]*g[0]+h.vel[1]*g[1]+h.vel[2]*g[2];p<0&&(h.vel[0]-=g[0]*p,h.vel[1]-=g[1]*p,h.vel[2]-=g[2]*p)}m[0]=y.pos[0],m[1]=y.pos[1],m[2]=y.pos[2]},go(d,u){let f=h.state;r[f].exit?.(h),h.state=d,h.stateTime=0,h.entries++,h.scratch={},r[f].selfMoves&&(h.runVel[0]=h.runVel[1]=0,h.hitTime=0),h.autoTimer=0,r[d].enter(h,u),h.onState?.(d,f,u)},down(){h.go("downed",{})},bash(d){return Ta.bash(h,d)},rev(d){return Ta.rev(h,d)},execute(d,u){return Ta.execute(h,d,u)},reviveTobble(d){return Ta.reviveTobble(h,d)},knock(d,u,f,m){return Ta.knock(h,d,u,f,m)},revive(){h.state==="downed"&&h.go("move",{})},place(d,u){r[h.state].exit?.(h),h.state="move",h.stateTime=0,h.firing=!1,h.cover=null,h.coverTarget=null,h.scratch={},h.pos[0]=h.prevPos[0]=d[0],h.pos[1]=h.prevPos[1]=d[1],h.pos[2]=h.prevPos[2]=d[2],h.vel[0]=h.vel[1]=h.vel[2]=0,h.runVel[0]=h.runVel[1]=0,h.hitTime=h.autoTimer=0,h.grenadeAim=!1,h.bashReadyAt=0,u!==void 0?h.facing=h.prevFacing=h.heading=u:h.prevFacing=h.facing},update(d,u){if(h.prevPos[0]=h.pos[0],h.prevPos[1]=h.pos[1],h.prevPos[2]=h.pos[2],h.prevFacing=h.facing,h.firing=!1,u>0&&(h.clock+=u),h.grenadeAim=!!d.grenade&&(h.state==="move"||h.state==="sprint"||h.state==="cover"),d.tap&&r[h.state].acceptsTap){for(let y of o)if(y.when(h,d)){h.go(y.state,d);break}}h.stateTime+=u;let f=r[h.state].update(h,d,u),m=h.state;if(!r[m].selfMoves){let y=h.vel[0],g=h.vel[2],p=Math.hypot(y,g);h.moveBy([h.vel[0]*u,0,h.vel[2]*u],u,!0),h.hit?(h.hitTime+=u,(p>=Math.hypot(h.runVel[0],h.runVel[1])||h.hitTime>2*h.coverTuning.autoTime)&&(h.runVel[0]=y,h.runVel[1]=g)):(h.runVel[0]=y,h.runVel[1]=g,h.hitTime=0)}if(m==="move"||m==="sprint")if(!(h.speed()>h.tuning.runClipMinSpeed))h.stepDist=.5*h.tuning.stepEvery;else{h.stepDist+=Math.hypot(h.pos[0]-h.prevPos[0],h.pos[2]-h.prevPos[2]);let g=Math.max(.1,m==="sprint"?h.tuning.stepEverySprint:h.tuning.stepEvery);h.stepDist>=g&&(h.stepDist%=g,h.steps++,h.foot^=1,h.onStep?.({foot:h.foot,sprint:m==="sprint",speed:h.speed()}))}if(m==="move"||m==="sprint"){let y=db(h,d);if(!y)h.autoTimer=0;else if((h.autoTimer+=u)>=h.coverTuning.autoTime){h.coverTarget=y,h.go("coverSlide",d);return}}f&&h.go(f,d)}};return r[h.state].enter(h,{moveX:0,moveY:0,camYaw:0}),h}function mb({AudioContextCtor:t=globalThis.AudioContext}={}){let e=null,n=null,i=!1,s=null,r=1;function o(){if(e||i||!t)return e;try{e=new t;let p=Math.max(1,Math.floor(e.sampleRate*.4));n=e.createBuffer(1,p,e.sampleRate);let v=n.getChannelData(0);for(let _=0;_<p;_++)v[_]=Math.random()*2-1}catch{e=null,i=!0}return e}function a(p){if(!(p>0||p<0)||!e.createStereoPanner)return e.destination;let v=e.createStereoPanner();return v.pan.value=Math.max(-1,Math.min(1,p)),v.connect(e.destination),v}let l=()=>{if(e.state==="suspended"){let p=e.resume();p&&p.catch&&p.catch(()=>{})}};function c(p,v,_){let M=e.createGain();return M.gain.setValueAtTime(_,p),M.gain.exponentialRampToValueAtTime(.001,p+v),M.connect(s),M}function h(p,v,_,M,S,E){let x=e.createOscillator();x.type=v,x.frequency.setValueAtTime(_,S),M!==_&&x.frequency.exponentialRampToValueAtTime&&x.frequency.exponentialRampToValueAtTime(M,S+E),x.connect(p),x.start(S),x.stop(S+E)}function d(p,v,_,M,S){let E=e.createBufferSource();E.buffer=n;let x=e.createBiquadFilter();x.type=v,x.frequency.setValueAtTime(_,M),E.connect(x),x.connect(p),E.start(M),E.stop(M+S)}function u(p,v,_,M,S,E){let x=e.createBufferSource();x.buffer=n;let b=e.createBiquadFilter();b.type=v,b.frequency.setValueAtTime(_,S),b.frequency.exponentialRampToValueAtTime&&b.frequency.exponentialRampToValueAtTime(M,S+E),x.connect(b),b.connect(p),x.start(S),x.stop(S+E)}let f=(p,v,_)=>{let M=c(p,.03,_);d(M,"bandpass",v,p,.03)},m={rifle:(p,v)=>{d(c(p,.05,v*.55),"bandpass",2200,p,.05),h(c(p,.16,v*.9),"sine",150,48,p,.16),h(c(p,.22,v*.8),"sine",62,34,p,.22),d(c(p,.26,v*.35),"lowpass",700,p,.26)},pistol:(p,v)=>{d(c(p,.06,v*.6),"bandpass",2e3,p,.06),h(c(p,.2,v*.9),"sine",130,42,p,.2),h(c(p,.26,v*.85),"sine",56,30,p,.26),d(c(p,.3,v*.4),"lowpass",600,p,.3)},dry:(p,v)=>h(c(p,.02,v),"square",1200,1200,p,.02),hit:(p,v)=>h(c(p,.04,v),"sine",1600,1600,p,.04),head:(p,v)=>{let _=c(p,.06,v);h(_,"sine",2400,2400,p,.06),h(_,"sine",3200,3200,p,.06)},kill:(p,v)=>{let _=c(p,.12,v);h(_,"sine",300,900,p,.12);let M=c(p,.2,v*.8);d(M,"lowpass",1400,p,.2)},magOut:(p,v)=>{f(p,3e3,v),f(p+.08,2200,v)},magIn:(p,v)=>{f(p,2e3,v),f(p+.08,3400,v)},perfect:(p,v)=>{let _=c(p,.35,v);h(_,"sine",1320,1320,p,.35),h(_,"sine",1980,1980,p,.35)},good:(p,v)=>h(c(p,.15,v),"sine",990,990,p,.15),jam:(p,v)=>h(c(p,.15,v),"square",90,90,p,.15),blaster:(p,v)=>{let _=c(p,.1,v);h(_,"square",900,300,p,.1),d(_,"bandpass",1500,p,.1)},charge:(p,v)=>{let _=e.createGain();_.gain.setValueAtTime(.001,p),_.gain.exponentialRampToValueAtTime(v,p+.3),_.gain.exponentialRampToValueAtTime(.001,p+.35),_.connect(s),h(_,"sine",300,900,p,.35)},hurt:(p,v)=>{let _=c(p,.15,v);d(_,"lowpass",600,p,.15),h(_,"sine",80,80,p,.15)},downed:(p,v)=>h(c(p,.6,v),"sine",400,80,p,.6),clear:(p,v)=>{[523,659,784].forEach((_,M)=>h(c(p+M*.12,.15,v),"sine",_,_,p+M*.12,.15))},pickup:(p,v)=>{h(c(p,.06,v),"sine",880,880,p,.06),h(c(p+.07,.08,v),"sine",1320,1320,p+.07,.08)},thud:(p,v)=>{h(c(p,.42,v),"sine",52,22,p,.42),d(c(p,.38,v*.9),"lowpass",150,p,.38),d(c(p,.22,v*.5),"lowpass",420,p,.22),d(c(p,.09,v*.45),"bandpass",800,p,.09)},reloadTick:(p,v,_)=>{let M=900+1500*Math.max(0,Math.min(1,_||0));h(c(p,.04,v),"square",M,M,p,.04)},bash:(p,v)=>{h(c(p,.2,v),"sine",120,40,p,.2),d(c(p,.06,v*.6),"bandpass",1800,p,.06)},cut:(p,v)=>{h(c(p,.3,v*.5),"sawtooth",150,105,p,.3),d(c(p,.3,v*.5),"bandpass",900,p,.3),d(c(p,.2,v*.3),"lowpass",400,p,.2)},finish:(p,v)=>{h(c(p,.4,v),"sine",70,26,p,.4),d(c(p,.3,v*.5),"lowpass",220,p,.3)},throw:(p,v)=>{u(c(p,.3,v*.6),"bandpass",400,1600,p,.3),h(c(p,.18,v*.5),"sawtooth",140,85,p+.02,.18)},clank:(p,v)=>{let _=c(p,.14,v*.6);h(_,"square",1450,1450,p,.14),h(_,"square",2230,2230,p,.14),d(c(p,.04,v*.5),"bandpass",3500,p,.04)},boom:(p,v)=>{h(c(p,.5,v),"sine",50,50,p,.5),h(c(p,.3,v*.7),"sine",110,40,p,.3),d(c(p,.45,v*.6),"lowpass",500,p,.45)},saunaOpen:(p,v)=>{u(c(p,.5,v*.7),"bandpass",700,3200,p,.5)},saunaClose:(p,v)=>{u(c(p,.3,v*.6),"bandpass",2600,600,p,.3),h(c(p+.28,.2,v),"sine",95,45,p+.28,.2)},revive:(p,v)=>{h(c(p,.2,v*.8),"triangle",440,440,p,.2),h(c(p+.17,.3,v),"triangle",660,660,p+.17,.3)},tobbleShot:(p,v)=>{h(c(p,.07,v),"sine",700,280,p,.07),d(c(p,.04,v*.5),"bandpass",2800,p,.04)},step:(p,v)=>{h(c(p,.1,v),"sine",95,50,p,.1),d(c(p,.07,v*.5),"lowpass",280,p,.07)}},y={update(){},stop(){},active:!1};function g(){if(!o())return y;try{l();let p=e.currentTime,v=e.createGain();v.gain.setValueAtTime(1e-4,p),v.connect(e.destination);let _=e.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(700,p),_.connect(v);let M=(I,F)=>{let z=e.createOscillator();return z.type=I,z.frequency.setValueAtTime(F,p),z.connect(_),z.start(p),z},S=M("sawtooth",80),E=M("sawtooth",83),x=M("square",40),b=e.createOscillator();b.type="sine",b.frequency.setValueAtTime(20,p);let P=e.createGain();P.gain.setValueAtTime(0,p),b.connect(P),P.connect(v.gain),b.start(p);let L=e.createGain();L.gain.setValueAtTime(1e-4,p),L.connect(v);let C=e.createBufferSource();C.buffer=n,C.loop=!0;let w=e.createBiquadFilter();w.type="bandpass",w.frequency.setValueAtTime(1100,p),C.connect(w),w.connect(L),C.start(p);let D=[S,E,x,b,C],k=!1;return{active:!0,update(I,F=1,z=1){if(k||!(z*r>0)){k||v.gain.linearRampToValueAtTime(1e-4,e.currentTime+.05);return}let $=e.currentTime,X=Math.max(0,Math.min(1,F)),j=z*r,W=I==="grind",ee=W?62+10*X:64+120*X;S.frequency.setValueAtTime(ee,$),E.frequency.setValueAtTime(ee*1.04,$),x.frequency.setValueAtTime(ee*.5,$),_.frequency.setValueAtTime(W?650:500+1500*X,$),b.frequency.setValueAtTime(W?14:16+16*X,$),P.gain.setValueAtTime(j*(W?.3:.12+.2*X),$),v.gain.linearRampToValueAtTime(j*(W?.7:.3+.35*X),$+.05),L.gain.linearRampToValueAtTime(W?.9:.1+.25*X,$+.05),w.frequency.setValueAtTime(W?900:1300+1200*X,$)},stop(){if(k)return;k=!0;let I=e.currentTime;try{v.gain.linearRampToValueAtTime(1e-4,I+.08)}catch{}for(let F of D)try{F.stop(I+.1)}catch{}}}}catch{return y}}return{play(p,v,_=0,M=0){let S=m[p];if(!(!S||!(v*r>0)||!o()))try{l(),s=a(_),S(e.currentTime,v*r,M)}catch{}},motor:g,setVolume(p){r=Number.isFinite(p)?Math.min(1,Math.max(0,p)):1},unlock(){if(o())try{l()}catch{}}}}function gb(){let t=!1;return{update(e,n,i){return i?(n&&(t=!0),e||(t=!1),{fire:t&&!!e,firePressed:!!n}):(t=!1,{fire:!1,firePressed:!1})},reset(){t=!1}}}var Cd=Object.freeze({regret:Object.freeze({id:"regret",name:"The Regret"}),pistol:Object.freeze({id:"pistol",name:"Guest Pass"})}),vb=Object.freeze(["regret",null,"pistol"]);function xb(t,e){return t>=e.perfectStart&&t<=e.perfectEnd?"perfect":t>=e.goodStart&&t<=e.goodEnd?"good":"jam"}function Q0(t,e,n,i){let s=Math.max(t.reloadTime,i.minReloadTime);return n==="perfect"?Math.min(e+t.perfectFinish,s):n==="good"?Math.min(e+t.goodFinish,s):n==="jam"?s+t.jamPenalty:s}var T3={aim:"spreadAim",hip:"spreadHip",blind:"spreadBlind"};function yb({weapons:t=H.weapons,combat:e=H.combat,loadout:n=vb}={}){let i={},s=()=>{for(let y of n)y&&Object.assign(i[y]||(i[y]={}),{mag:Math.floor(t[y].mag),reserve:Math.floor(t[y].reserveStart),bloom:0,boost:!1})};s();let r=[],o={slot:Math.max(0,n.findIndex(Boolean)),ammo:i,reload:null,switching:0,cooldown:0,buffer:0,dryLatched:!1},a=()=>n[o.slot],l=(y,g)=>y[T3[g]||"spreadHip"],c=y=>y!=null&&o.reload===null&&o.switching<=0;function h(){let y=a(),g=t[y],p=i[y];return o.reload===null&&o.switching<=0&&p.mag<g.mag&&(g.infiniteReserve>0||p.reserve>0)}function d(){let y=a(),g=t[y];o.reload={id:y,t:0,press:null,end:Q0(g,0,"normal",e)},i[y].boost=!1,r.push({type:"reloadStart",id:y})}function u(){let{id:y,press:g}=o.reload,p=t[y],v=i[y],_=Math.max(0,p.mag-v.mag);if(p.infiniteReserve>0)v.mag+=_;else{let M=Math.min(_,v.reserve);v.mag+=M,v.reserve-=M}v.boost=g==="perfect",o.reload=null,r.push({type:"reloadDone",id:y,result:g||"normal"})}function f(y){y===o.slot||!n[y]||(o.reload=null,o.slot=y,o.switching=t[n[y]].switchTime,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.push({type:"switch",id:n[y]}))}function m(y){let g=n.length;for(let p=1;p<g;p++){let v=(o.slot+y*p+g*g)%g;if(n[v])return f(v)}}return o.current=a,o.canFire=c,o.spreadOf=y=>l(t[a()],y)+i[a()].bloom,o.update=function(g,p,v){r.length=0,(!(v>0)||!Number.isFinite(v))&&(v=0);let _=g.weapon;_==="next"?m(1):_==="prev"?m(-1):(_===1||_===2||_===3)&&f(_-1),o.switching-=v;for(let L of n)L&&(i[L].bloom=Math.max(0,i[L].bloom-t[L].bloomRecover*v));let M=a(),S=t[M],E=i[M];if(g.reload){if(o.reload===null)h()&&d();else if(o.reload.press===null){let L=o.reload,C=Math.max(S.reloadTime,e.minReloadTime);L.press=xb(L.t/C,S),L.end=Q0(S,L.t,L.press,e),r.push({type:"reloadPress",id:M,result:L.press})}}o.reload!==null&&(o.reload.t+=v,o.reload.t>=o.reload.end&&u()),g.firePressed?(o.buffer=e.fireBuffer,o.dryLatched=!1):o.buffer-=v,g.fire||(o.dryLatched=!1),c(p)||(o.buffer=0);let x=S.auto>0,b=x?!!g.fire:o.buffer>0,P=1/Math.max(S.rate,e.minRate);for(o.cooldown-=v,b||(o.cooldown=Math.max(o.cooldown,0)),o.cooldown=Math.max(o.cooldown,-P);b&&c(p)&&o.cooldown<=0;){if(E.mag<=0){o.dryLatched||(o.dryLatched=!0,r.push({type:"dry",id:M})),o.buffer=0,e.autoReload>0&&h()&&d();break}if(E.mag--,r.push({type:"shot",id:M,mult:E.boost?S.perfectDamage:1,spread:o.spreadOf(p)}),E.bloom=Math.min(S.bloomMax,E.bloom+S.bloomPerShot),o.cooldown+=P,E.mag===0&&(E.boost=!1),!x){o.buffer=0;break}}return r},o.reset=()=>{s(),o.slot=Math.max(0,n.findIndex(Boolean)),o.reload=null,o.switching=0,o.cooldown=0,o.buffer=0,o.dryLatched=!1,r.length=0},o.cancelReload=()=>{o.reload=null},o.addReserve=(y,g)=>{let p=i[y];!p||t[y].infiniteReserve>0||!(g>0)||(p.reserve=Math.max(p.reserve,Math.min(Math.floor(t[y].reserveMax),p.reserve+Math.floor(g))))},o.refill=()=>{for(let y of n)y&&(i[y].reserve=Math.floor(t[y].reserveMax))},o.set=(y,{mag:g,reserve:p}={})=>{i[y]&&(g!==void 0&&(i[y].mag=g),p!==void 0&&(i[y].reserve=p))},o}function bb(t){if(t.grenadeAim||Object.hasOwn(Md,t.state))return null;if(t.state==="move")return t.aiming?"aim":t.firing?"hip":null;if(t.state==="cover"&&t.cover){if(t.cover.pop===1)return"aim";if(t.cover.blind===1)return"blind"}return null}var Aa=[0,0];function Pd(t,e,n,i=H.combat,s=[0,0,0]){if(e==="blind"&&t.cover){let l=t.cover,c=l.edge,h=t.tuning.radius+t.coverTuning.gap,d=c.normal;if(c.kind==="low")wi(c,l.t,Aa),s[0]=Aa[0]-d[0]*(h+i.blindReach),s[1]=c.height+i.blindLift,s[2]=Aa[1]-d[1]*(h+i.blindReach);else{let u=l.blindEnd!==0?l.blindEnd:l.t<c.length-l.t?-1:1;wi(c,u<0?0:c.length,Aa);let f=t.coverTuning.endInset+i.blindReach;s[0]=Aa[0]+c.tangent[0]*u*f-d[0]*h,s[1]=i.muzzleUp,s[2]=Aa[1]+c.tangent[1]*u*f-d[1]*h}return s}let r=i.muzzleRight*ho(t),o=Math.sin(n),a=Math.cos(n);s[1]=t.pos[1]+i.muzzleUp;for(let l=1;l>=0&&(s[0]=t.pos[0]+(o*i.muzzleForward-a*r)*l,s[2]=t.pos[2]+(a*i.muzzleForward+o*r)*l,!(l===0||!xa(t.boxes,s,0)));l-=.25);return s}function E3(t,e,n,i=1/0){let s=0,r=i;for(let o=0;o<3;o++)if(Math.abs(e[o])<1e-12){if(t[o]<n.min[o]||t[o]>n.max[o])return 1/0}else{let a=(n.min[o]-t[o])/e[o],l=(n.max[o]-t[o])/e[o];if(a>l){let c=a;a=l,l=c}if(a>s&&(s=a),l<r&&(r=l),s>r)return 1/0}return s}function em(t,e,n,i,s=1/0){let r=t[0]-n[0],o=t[1]-n[1],a=t[2]-n[2],l=r*e[0]+o*e[1]+a*e[2],c=r*r+o*o+a*a-i*i;if(c<=0)return 0;let h=l*l-c;if(h<0)return 1/0;let d=-l-Math.sqrt(h);return d>=0&&d<=s?d:1/0}function A3(t,e,n,i,s,r=1/0){let o=i[0]-n[0],a=i[1]-n[1],l=i[2]-n[2],c=t[0]-n[0],h=t[1]-n[1],d=t[2]-n[2],u=o*o+a*a+l*l,f=o*c+a*h+l*d,m=u>1e-12?Math.max(0,Math.min(1,f/u)):0,y=c-o*m,g=h-a*m,p=d-l*m;if(y*y+g*g+p*p<=s*s)return 0;let v=Math.min(em(t,e,n,s,r),em(t,e,i,s,r));if(u>1e-12){let _=o*e[0]+a*e[1]+l*e[2],M=e[0]*c+e[1]*h+e[2]*d,S=c*c+h*h+d*d,E=u-_*_;if(E>1e-12*u){let x=u*M-f*_,b=u*S-f*f-s*s*u,P=x*x-E*b;if(P>=0){let L=(-x-Math.sqrt(P))/E,C=f+L*_;L>=0&&L<=r&&C>0&&C<u&&L<v&&(v=L)}}}return v}function Xn(t,e,n,i,s,{ignoreBox:r=-1}={}){let o=n,a="none",l=null,c=-1,h=!1;for(let d=0;d<i.length;d++){if(d===r)continue;let u=E3(t,e,i[d],o);u<=o&&u!==1/0&&(o=u,a="world",c=d,l=null,h=!0)}for(let d of s){if(!d.alive||d.state==="executed")continue;let{head:u,body:f}=d.shapes,m=em(t,e,u.c,u.r,o);m<=o&&m!==1/0&&(o=m,a="head",l=d,c=-1,h=!0);let y=A3(t,e,f.a,f.b,f.r,o);y<=o&&y!==1/0&&(o=y,a="body",l=d,c=-1,h=!0)}return h?{t:o,point:[t[0]+e[0]*o,t[1]+e[1]*o,t[2]+e[2]*o],kind:a,target:l,boxIndex:c}:{t:1/0,point:[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n],kind:"none",target:null,boxIndex:-1}}function Ra(t,e,n,i=[0,0,0]){if(!(e>0))return i[0]=t[0],i[1]=t[1],i[2]=t[2],i;let s=e*Math.PI/360,r=Math.cos(s)+(1-Math.cos(s))*n(),o=Math.sqrt(Math.max(0,1-r*r)),a=2*Math.PI*n(),l=Math.abs(t[1])<.9?0:1,c=l===0?1:0,h=t[1]*0-t[2]*c,d=t[2]*l-t[0]*0,u=t[0]*c-t[1]*l,f=Math.hypot(h,d,u);h/=f,d/=f,u/=f;let m=t[1]*u-t[2]*d,y=t[2]*h-t[0]*u,g=t[0]*d-t[1]*h,p=Math.cos(a)*o,v=Math.sin(a)*o;return i[0]=t[0]*r+h*p+m*v,i[1]=t[1]*r+d*p+y*v,i[2]=t[2]*r+u*p+g*v,i}function _b({lens:t,view:e,muzzle:n,spreadDeg:i,range:s,boxes:r,targets:o,ignoreBox:a=-1,rand:l=Math.random,aimed:c=!1}){if(c){let g=Ra(e,i,l),p=Xn(t,g,s,r,o,{ignoreBox:a}),v=[p.point[0]-n[0],p.point[1]-n[1],p.point[2]-n[2]],_=Math.hypot(v[0],v[1],v[2]),M=_>1e-9?[v[0]/_,v[1]/_,v[2]/_]:[g[0],g[1],g[2]];return{from:n,dir:M,hit:p}}let h=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),d=Xn(t,e,s+h,r,o,{ignoreBox:a}),u=d.kind==="none"?[t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s]:d.point,f=[u[0]-n[0],u[1]-n[1],u[2]-n[2]],m=Math.hypot(f[0],f[1],f[2]);m>1e-9?(f[0]/=m,f[1]/=m,f[2]/=m):(f[0]=e[0],f[1]=e[1],f[2]=e[2]);let y=Ra(f,i,l);return{from:n,dir:y,hit:Xn(n,y,s,r,o)}}var pt=Object.freeze({head:Object.freeze({cy:Wt.neckY+Wt.head.centerY,r:Wt.head.rx}),body:Object.freeze({ay:Wt.ankleHeight,by:Wt.neckY,r:Math.max(...Wt.torso.shirt.map(t=>t[0]))})});function Mb(t,e=H.combat.hitPad){let[n,i,s]=t.pos,r=t.shapes;r.head.c[0]=n,r.head.c[1]=i+pt.head.cy,r.head.c[2]=s,r.head.r=pt.head.r+e,r.body.r=pt.body.r+e,r.body.a[0]=n,r.body.a[1]=i+pt.body.ay,r.body.a[2]=s,r.body.b[0]=n,r.body.b[1]=i+pt.body.by,r.body.b[2]=s}function wb({id:t,pos:e,yaw:n=0,rail:i=null},s=H.dummy){let r={id:t,pos:[e[0],e[1],e[2]],home:[e[0],e[1],e[2]],yaw:n,health:s.health,alive:!0,respawnT:0,rail:i,railT:0,shapes:{head:{c:[0,0,0],r:pt.head.r},body:{a:[0,0,0],b:[0,0,0],r:pt.body.r}}};return Mb(r),r}function R3(t,e){let n=t%(4*e);return n<e?n:n<3*e?2*e-n:n-4*e}function Sb(t,e,n=H.dummy){if((!(e>0)||!Number.isFinite(e))&&(e=0),!t.alive)t.respawnT-=e,t.respawnT<=0&&(t.alive=!0,t.respawnT=0,t.health=n.health,t.railT=0,t.pos[0]=t.home[0],t.pos[1]=t.home[1],t.pos[2]=t.home[2]);else if(t.rail&&t.rail.half>0){t.railT+=e*Math.max(0,n.railSpeed);let i=R3(t.railT,t.rail.half),s=t.rail.axis==="x"?0:2;t.pos[0]=t.home[0],t.pos[2]=t.home[2],t.pos[s]=t.home[s]+i}Mb(t)}function Tb(t,e,n=H.dummy){return!t.alive||!(e>0)?null:(t.health-=e,t.health>0?"hit":(t.health=0,t.alive=!1,t.respawnT=n.respawnTime,"kill"))}function tm(t,e,n=1){return e!=="head"&&e!=="body"?0:t.damage*n*(e==="head"?t.headMult:1)}function Eb(t,e,n){for(let i of e)if(Math.hypot(t[0]-i.pos[0],t[2]-i.pos[2])<=n)return!0;return!1}function Ab(t){let e=new Float32Array(t),n=new Uint8Array(t),i=0;return{ages:e,alive:s=>n[s]===1,spawn(){let s=-1;for(let r=0;r<t;r++){let o=(i+r)%t;if(!n[o]){s=o;break}}if(s<0){s=0;for(let r=1;r<t;r++)e[r]>e[s]&&(s=r)}return n[s]=1,e[s]=0,i=(s+1)%t,s},clear(){n.fill(0)},update(s,r){for(let o=0;o<t;o++)n[o]&&(e[o]+=s,e[o]>r(o)&&(n[o]=0))}}}var C3=new G(0,0,1);function Rb(t,e=()=>H.feedback){let n=new yn,i=(w=1)=>(Math.random()*2-1)*w;function s(w,D,k){let I=new cs(w,Tt({color:D,rim:0}),k);I.frustumCulled=!1,I.count=k,n.position.set(0,-1e3,0),n.scale.setScalar(0),n.updateMatrix();for(let F=0;F<k;F++)I.setMatrixAt(F,n.matrix);return t.add(I),{mesh:I,pool:Ab(k),pos:new Float32Array(k*3),vel:new Float32Array(k*3),aux:new Float32Array(k*4)}}let r=s(new ia(.5,0),B.playerOrange,8),o=s(new ut(1,1,1),B.playerOrange,24),a=s(new ia(.5,0),B.gel,8),l=s(new ut(1,1,1),B.gel,24),c=s(new ut(.05,.05,.05),B.cream,48),h=s(new Jr(.5,0),B.gel,96),d=s(new ut(.16,.2,.012),B.cream,48),u=s(new Jr(.5,0),B.cream,40),f=s(new Jr(.5,1),B.planet,4),m=s(new ut(1,1,1),B.playerOrange,16),y=new G;function g(w,D){n.updateMatrix(),w.mesh.setMatrixAt(D,n.matrix),w.mesh.instanceMatrix.needsUpdate=!0}let p=(w,D)=>{n.position.set(0,-1e3,0),n.scale.setScalar(0),n.quaternion.identity(),g(w,D)},v=(w,D,k,I,F)=>{w.pos[D*3]=k,w.pos[D*3+1]=I,w.pos[D*3+2]=F},_=(w,D,k,I,F)=>{w.vel[D*3]=k,w.vel[D*3+1]=I,w.vel[D*3+2]=F};function M(w,D,k,I,F){let z=k[0]+i(I),$=k[1]+i(I),X=k[2]+i(I),j=Math.hypot(z,$,X)||1;_(w,D,z/j*F*(.5+Math.random()*.5),$/j*F*(.5+Math.random()*.5),X/j*F*(.5+Math.random()*.5))}let S=[];function E(w,D,k,I){S.push({k:w,life:D,shown:new Uint8Array(w.pool.ages.length),step(F){let z=e().gravity,$=w;for(let X=0;X<$.pool.ages.length;X++)if($.pool.alive(X)){$.vel[X*3+1]-=z*F;for(let j=0;j<3;j++)$.pos[X*3+j]+=$.vel[X*3+j]*F}},draw(F){let z=1-w.pool.ages[F]/D();n.position.set(w.pos[F*3],w.pos[F*3+1],w.pos[F*3+2]),n.scale.setScalar(k(F)*Math.max(0,z)),I?n.rotation.set(w.aux[F*4]+w.pool.ages[F]*7,w.aux[F*4+1]+w.pool.ages[F]*5,w.aux[F*4+2]):n.quaternion.identity(),g(w,F)}})}E(c,()=>e().sparkTime,()=>1,!1),E(h,()=>e().gelTime,w=>.05+h.aux[w*4+3]*.07,!1),E(d,()=>e().receiptTime,()=>1,!0);function x(w,D){S.push({k:w,shown:new Uint8Array(w.pool.ages.length),life:()=>e().flashTime,step(){},draw(k){let I=1-w.pool.ages[k]/e().flashTime;n.position.set(w.pos[k*3],w.pos[k*3+1],w.pos[k*3+2]),n.scale.setScalar(e()[D]*(.5+.5*Math.max(0,I))),n.rotation.set(w.aux[k*4],w.aux[k*4+1],w.aux[k*4+2]),g(w,k)}})}function b(w,D,k,I=1){S.push({k:w,shown:new Uint8Array(w.pool.ages.length),life:()=>e()[D],step(){},draw(F){let z=Math.max(0,1-w.pool.ages[F]/e()[D]),$=e()[k]*I*z,X=w.aux[F*4];n.position.set(w.pos[F*3],w.pos[F*3+1],w.pos[F*3+2]),n.quaternion.setFromUnitVectors(C3,y.set(w.vel[F*3],w.vel[F*3+1],w.vel[F*3+2])),n.scale.set($,$,X),g(w,F)}})}let P=.9;S.push({k:u,shown:new Uint8Array(u.pool.ages.length),life:()=>P,step(w){for(let D=0;D<u.pool.ages.length;D++)if(u.pool.alive(D))for(let k=0;k<3;k++)u.pos[D*3+k]+=u.vel[D*3+k]*w},draw(w){let D=u.pool.ages[w]/P;n.position.set(u.pos[w*3],u.pos[w*3+1],u.pos[w*3+2]),n.scale.setScalar(u.aux[w*4+3]*(.5+D)*(1-D*D*D)),n.quaternion.identity(),g(u,w)}}),S.push({k:f,shown:new Uint8Array(f.pool.ages.length),life:()=>e().blastTime,step(){},draw(w){let D=Math.min(f.pool.ages[w]/Math.max(e().blastTime,.001),1),k=1-(1-Math.min(D/.6,1))**2,I=D>.6?1-(D-.6)/.4:1;n.position.set(f.pos[w*3],f.pos[w*3+1],f.pos[w*3+2]),n.scale.setScalar(Math.max(e().blastSize*k*I,.001)),n.rotation.set(0,f.aux[w*4],0),g(f,w)}}),b(m,"tracerTime","tracerWidth",.6),x(r,"flashSize"),x(a,"enemyFlashSize"),b(o,"tracerTime","tracerWidth"),b(l,"enemyTracerTime","enemyTracerWidth");let L=(w,D,k)=>{let I=w.pool.spawn();v(w,I,D[0]+k[0]*.1,D[1]+k[1]*.1,D[2]+k[2]*.1),w.aux[I*4]=i(3),w.aux[I*4+1]=i(3),w.aux[I*4+2]=i(3)},C=(w,D,k)=>{let I=k[0]-D[0],F=k[1]-D[1],z=k[2]-D[2],$=Math.hypot(I,F,z);if(!($>1e-6))return;let X=w.pool.spawn();v(w,X,D[0]+I/2,D[1]+F/2,D[2]+z/2),_(w,X,I/$,F/$,z/$),w.aux[X*4]=$};return{flash(w,D){L(r,w,D)},tracer(w,D){C(o,w,D)},friendlyTracer(w,D){C(m,w,D)},steam(w){let D=u.pool.spawn();v(u,D,w[0],w[1],w[2]),_(u,D,i(.15),.7+Math.random()*.4,i(.15)),u.aux[D*4+3]=.16+Math.random()*.1},blast(w){let D=f.pool.spawn();v(f,D,w[0],w[1]+.3,w[2]),f.aux[D*4]=Math.random()*6;for(let k=0;k<6;k++){let I=u.pool.spawn(),F=k/6*Math.PI*2+Math.random();v(u,I,w[0],w[1]+.2,w[2]),_(u,I,Math.cos(F)*2.2,.8+Math.random()*.6,Math.sin(F)*2.2),u.aux[I*4+3]=.35+Math.random()*.2}this.gel([w[0],w[1]+.3,w[2]],[0,1,0],12)},enemyFlash(w,D){L(a,w,D)},enemyTracer(w,D){C(l,w,D)},dust(w,D,k,I=e().slamDust,F=e().slamDebris){for(let z=0;z<I;z++){let $=u.pool.spawn(),X=(z%2?1:-1)*(.4+Math.random()*1.8),j=.3+Math.random()*1.2;v(u,$,w[0]+D[0]*.3,w[1]+.15,w[2]+D[1]*.3),_(u,$,k[0]*X+D[0]*j+i(.2),.3+Math.random()*.6,k[1]*X+D[1]*j+i(.2)),u.aux[$*4+3]=.25+Math.random()*.2}for(let z=0;z<F;z++){let $=c.pool.spawn();v(c,$,w[0]+D[0]*.2,w[1]+.2,w[2]+D[1]*.2),M(c,$,[D[0]+k[0]*i(1),.9,D[1]+k[1]*i(1)],.6,3.5)}},spark(w,D,k=e().sparkCount){for(let I=0;I<k;I++){let F=c.pool.spawn();v(c,F,w[0],w[1],w[2]),M(c,F,D,.9,3)}},gel(w,D,k=e().gelCount){for(let I=0;I<k;I++){let F=h.pool.spawn();v(h,F,w[0],w[1],w[2]),M(h,F,D,1.2,e().gelSpeed),h.aux[F*4+3]=Math.random()}},receipts(w,D=e().receiptCount){for(let k=0;k<D;k++){let I=d.pool.spawn();v(d,I,w[0],w[1],w[2]),M(d,I,[0,1,0],1.5,e().gelSpeed),d.aux[I*4]=i(3),d.aux[I*4+1]=i(3),d.aux[I*4+2]=i(3)}},clear(){for(let w of S){w.k.pool.clear();for(let D=0;D<w.shown.length;D++)w.shown[D]&&(p(w.k,D),w.shown[D]=0)}},update(w){if(w>0)for(let D of S){D.step(w);let{pool:k}=D.k;k.update(w,D.life);for(let I=0;I<k.ages.length;I++)k.alive(I)?(D.draw(I),D.shown[I]=1):D.shown[I]&&(p(D.k,I),D.shown[I]=0)}}}}function P3(t,e,n){let i=Math.PI/180;return n/2*Math.tan(t*i/2)/Math.tan(e*i/2)}var I3=Object.freeze({perfect:"FORM CHECK: PERFECT",good:"Good form.",jam:"Bad form."}),mc=t=>t<0?0:t>1?1:t;function Cb({arsenal:t,stance:e,firing:n,covered:i=!1,device:s="kbm",spreadDeg:r,fov:o,viewportH:a,marker:l=null,reloadFlash:c=null,face:h=null,objective:d="",hours:u="",bark:f=null,banner:m=null,grenades:y=null,action:g=null,boss:p=null,ending:v=null,pop:_=null,hint:M=null,tac:S=null,weapons:E=H.weapons,combat:x=H.combat,feedback:b=H.feedback}){let P=t.current(),L=E[P],C=t.ammo[P],w=t.reload,D=s==="pad"?"RB":"R",k=b.reticleMinGap+P3(r,o,a),I=Math.max(b.reloadBarScale,.1),F={show:!1,marker:0,good:[L.goodStart,L.goodEnd],perfect:[L.perfectStart,L.perfectEnd],flash:c,prompt:"",barScale:I,offset:k+8+Math.max(0,b.reloadBarGap),pulseHz:Math.max(0,b.reloadPulseHz),flashScale:b.reloadFlashScale/I};if(w){let W=Math.max(L.reloadTime,x.minReloadTime);F={...F,show:!0,marker:mc(w.t/W),prompt:w.press===null?`PRESS ${D} AGAIN IN THE BRIGHT ZONE`:""}}else C.mag<=0&&(F.prompt=`${D} to reload`);let z=C.mag<=Math.max(0,b.lowAmmoFrac)*L.mag,$=L.infiniteReserve<=0&&C.reserve<=0,X={show:!1,text:"",kind:"",scale:1,pulseHz:0};!w&&z&&!m&&(X.show=!0,$&&C.mag<=0?(X.text="NO AMMO",X.kind="none"):$?(X.text="LOW AMMO",X.kind="low"):C.mag<=0?(X.text=`EMPTY \u2014 RELOAD \u2014 ${D}`,X.kind="empty"):(X.text=`RELOAD \u2014 ${D}`,X.kind="low"),X.scale=b.reloadAlertScale,X.pulseHz=Math.max(0,b.reloadPulseHz));let j=e==="aim";return{weapon:Cd[P].name,mag:C.mag,reserve:L.infiniteReserve>0?"\u221E":C.reserve,reticle:{show:j||!!n||i,gap:k,opacity:i&&!j?b.coverReticleOpacity:1},reload:F,alert:X,hit:{show:!!l,kind:l||null},faceShow:!!h&&!m&&!h.downed.show,face:h,objective:d,hours:u||"",bark:f,banner:m,grenades:Number.isFinite(y)?y:null,boss:p?{name:p.name,fraction:mc(p.fraction),phase:p.phase,invuln:!!p.invuln,hint:p.hint||""}:null,ending:v?{card:v.card,lines:v.lines,tone:v.tone||"big",final:!!v.final}:null,pop:_&&_.text?{text:_.text,kind:_.kind||""}:null,hint:M&&M.text?{text:M.text,opacity:mc(Number.isFinite(M.opacity)?M.opacity:1)}:null,tac:S&&S.show?{show:!0,items:(S.items||[]).filter(W=>W&&Number.isFinite(W.x)&&Number.isFinite(W.y))}:null,action:g&&g.text?{text:g.text,hold:Number.isFinite(g.hold)?mc(g.hold):null}:null}}function Pb(t=document.body){let e=(se,ae,N,Z)=>{let K=document.createElement(se);return ae&&(K.className=ae),Z!==void 0&&(K.textContent=Z),N&&N.appendChild(K),K},n=e("div","",t);n.id="cr-hud";let i={};for(let se of["top","right","bottom","left"])i[se]=e("div",`cr-edge cr-edge-${se}`,n);let s="http://www.w3.org/2000/svg",r=(se,ae,N)=>{let Z=document.createElementNS(s,se);for(let K of Object.keys(ae))Z.setAttribute(K,ae[K]);return N&&N.appendChild(Z),Z},o=e("div","cr-face",n),a=r("svg",{viewBox:"0 0 100 100"},o),l=r("defs",{},a);r("circle",{cx:50,cy:50,r:46},r("clipPath",{id:"cr-face-clip"},l)),r("circle",{cx:50,cy:50,r:46,fill:"#fff3d6"},a);let c=r("rect",{x:0,width:100,y:96,height:0,fill:"#e0243c","clip-path":"url(#cr-face-clip)"},a);r("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"#1b1f3b","stroke-width":4},a),r("circle",{cx:35,cy:40,r:5.5,fill:"#1b1f3b"},a),r("circle",{cx:65,cy:40,r:5.5,fill:"#1b1f3b"},a);let h=r("path",{d:"",fill:"none",stroke:"#1b1f3b","stroke-width":4.5,"stroke-linecap":"round"},a),d=e("div","cr-banner",n),u=e("div","cr-banner-title",d),f=e("div","cr-banner-hint",d),m=e("i","cr-ring",d),y=e("div","cr-action",n),g=e("span","cr-action-text",y),p=e("i","cr-ring",y),v=e("div","cr-objective",n);e("span","cr-obj-badge",v,"!");let _=e("div","cr-obj-body",v),M=e("div","cr-obj-title",_),S=e("div","cr-obj-row",_);e("i","cr-obj-box",S);let E=e("span","cr-obj-text",S),x=e("div","cr-boss",n),b=e("div","cr-boss-name",x),P=e("div","cr-boss-bar",x),L=e("i","cr-boss-fill",P);e("i","cr-boss-tick cr-boss-tick-a",P),e("i","cr-boss-tick cr-boss-tick-b",P);let C=e("div","cr-boss-hint",x),w=e("div","cr-ending",n),D=e("div","cr-ending-text",w),k=e("div","cr-ending-hint",w),I=e("div","cr-pop",n),F=e("div","cr-hint",n),z=e("div","cr-tac",n),$={},X=e("div","cr-hours",n),j=e("div","cr-bark",n),W=e("span","cr-bark-who",j),ee=e("span","cr-bark-text",j),Me=e("div","cr-weapon",n),te=e("div","cr-weapon-name",Me),oe=e("div","cr-ammo-row",Me),be=r("svg",{class:"cr-gun",viewBox:"0 0 64 32","aria-hidden":"true"},oe);r("path",{d:"M4 12 H42 L46 7 H58 L60 11 V16 H50 L47 19 H41 L39 29 H29 L31 19 H13 Q4 19 4 12 Z",fill:"#ff8a1f",stroke:"#14172e","stroke-width":2.5,"stroke-linejoin":"round"},be),r("path",{d:"M44 11 H54",stroke:"#14172e","stroke-width":2},be);let Oe=e("div","cr-ammo",oe),ne=e("div","cr-kb",Me),Ce=e("div","cr-prompt",Me),Fe=e("div","cr-reloadbox",n),Be=e("div","cr-reload-label",Fe,"ACTIVE RELOAD"),Xe=e("div","cr-reload-prompt",Fe),Ye=e("div","cr-reload",Fe),me=e("div","cr-zone cr-zone-good",Ye),Pe=e("div","cr-zone cr-zone-perfect",Ye),ke=e("div","cr-marker",Ye),xe=e("div","cr-result",Fe),Ee=e("div","cr-alert",n),qe=e("div","cr-reticle",n),we=["up","down","left","right"].map(se=>e("div",`cr-arm cr-arm-${se}`,qe)),_e=e("div","cr-hit",n);e("i","cr-hit-a",_e),e("i","cr-hit-b",_e),e("i","cr-hit-ring",_e);let Re={},Le=(se,ae,N)=>{Re[se]!==ae&&(Re[se]=ae,N(ae))},q=se=>`${(se*100).toFixed(1)}%`,Je=(se,[ae,N])=>{se.style.left=q(ae),se.style.width=q(Math.max(0,N-ae))};return{render(se){Le("weapon",se.weapon,R=>{te.textContent=R}),Le("ammo",`${se.mag}|${se.reserve}`,()=>{Oe.textContent=`${se.mag} / ${se.reserve}`}),Le("prompt",se.reload.show?"":se.reload.prompt,R=>{Ce.textContent=R}),Le("barPrompt",se.reload.show?se.reload.prompt:"",R=>{Xe.textContent=R,Xe.hidden=!R}),Le("reload.show",se.reload.show,R=>{Ye.hidden=!R,Be.hidden=!R}),Le("reload.box",`${se.reload.show||!!se.reload.flash}`,R=>{Fe.hidden=R!=="true"}),Le("reload.look",`${Math.round(se.reload.offset)}|${se.reload.barScale}|${se.reload.pulseHz}|${se.reload.flashScale}`,()=>{Fe.style.setProperty("--off",`${se.reload.offset.toFixed(0)}px`),Fe.style.setProperty("--s",String(se.reload.barScale)),Fe.style.setProperty("--fs",String(se.reload.flashScale)),Fe.style.setProperty("--pulse",se.reload.pulseHz>0?`${(1/se.reload.pulseHz).toFixed(3)}s`:"0s")}),Le("good",`${se.reload.good}`,()=>Je(me,se.reload.good)),Le("perfect",`${se.reload.perfect}`,()=>Je(Pe,se.reload.perfect)),Le("marker",Math.round(se.reload.marker*500),()=>{ke.style.left=q(se.reload.marker)}),Le("flash",se.reload.flash,R=>{xe.textContent=R&&I3[R]||"",xe.dataset.kind=R||""}),Le("alert",se.alert.show?`${se.alert.kind}|${se.alert.text}|${se.alert.scale}|${se.alert.pulseHz}`:"",()=>{Ee.hidden=!se.alert.show,Ee.textContent=se.alert.text,Ee.dataset.kind=se.alert.kind,Ee.style.setProperty("--as",String(se.alert.scale)),Ee.style.setProperty("--pulse",se.alert.pulseHz>0?`${(1/se.alert.pulseHz).toFixed(3)}s`:"0s")}),Le("ret.show",se.reticle.show,R=>{qe.hidden=!R}),Le("ret.op",Math.round(se.reticle.opacity*100),()=>{qe.style.opacity=se.reticle.opacity.toFixed(2)}),Le("ret.gap",Math.round(se.reticle.gap),R=>{we.forEach(T=>T.style.setProperty("--gap",`${R}px`))});let ae=se.face;if(Le("face.show",!!se.faceShow,R=>{o.hidden=!R}),ae){Le("face.op",Math.round(ae.face.opacity*100),()=>{o.style.opacity=ae.face.opacity.toFixed(2)}),Le("face.frown",Math.round(ae.face.frown*50),()=>{h.setAttribute("d",`M 30 72 Q 50 ${(72-24*ae.face.frown).toFixed(1)} 70 72`)}),Le("face.fill",Math.round(ae.face.fill*50),()=>{let R=92*ae.face.fill;c.setAttribute("y",(96-R).toFixed(1)),c.setAttribute("height",R.toFixed(1))});for(let R of Object.keys(i))Le(`edge.${R}`,Math.round(ae.edges[R]*50),()=>{i[R].style.opacity=ae.edges[R].toFixed(2)})}Le("kb",se.grenades===null?"":String(se.grenades),R=>{ne.hidden=R==="",ne.textContent=`KETTLEBELLS ${R}`}),Le("action",se.action?se.action.text:"",R=>{y.hidden=!se.action,g.textContent=R}),Le("action.hold",se.action&&se.action.hold!==null?Math.round(se.action.hold*100):-1,R=>{p.hidden=R<0,p.style.setProperty("--hold",`${Math.max(R,0)*3.6}deg`)});let N=se.banner&&se.banner.hold!==void 0&&se.banner.hold!==null?Math.round(mc(se.banner.hold)*100):-1;Le("banner.hold",N,R=>{m.hidden=R<0,m.style.setProperty("--hold",`${Math.max(R,0)*3.6}deg`)}),Le("banner",se.banner?`${se.banner.title}|${se.banner.hint}`:"",R=>{d.hidden=!se.banner,se.banner&&(u.textContent=se.banner.title,f.textContent=se.banner.hint)}),Le("objective",se.objective||"",R=>{let T=R.indexOf(": ");M.textContent=T>0?R.slice(0,T):"",M.hidden=T<=0,E.textContent=T>0?R.slice(T+2):R,v.hidden=!R});let Z=se.boss;Le("boss",Z?`${Z.name}|${Z.phase}|${Z.invuln}|${Z.hint}`:"",()=>{x.hidden=!Z,Z&&(b.textContent=Z.name,x.dataset.invuln=Z.invuln?"1":"0",C.textContent=Z.hint)}),Le("boss.fill",Z?Math.round(Z.fraction*500):-1,()=>{Z&&(L.style.width=q(Z.fraction))});let K=se.ending;Le("ending",K?`${K.card}|${K.final}`:"",()=>{w.hidden=!K,K&&(w.dataset.tone=K.tone,D.replaceChildren(...K.lines.map((R,T)=>e("div",T===0?"cr-ending-line cr-ending-first":"cr-ending-line",null,R))),k.textContent=K.final?"Press any key":"")}),Le("pop",se.pop?`${se.pop.kind}|${se.pop.text}`:"",()=>{I.hidden=!se.pop,se.pop&&(I.textContent=se.pop.text,I.dataset.kind=se.pop.kind)}),Le("hint",se.hint?se.hint.text:"",R=>{F.hidden=!R,F.textContent=R}),Le("hint.op",se.hint?Math.round(se.hint.opacity*50):-1,()=>{se.hint&&(F.style.opacity=se.hint.opacity.toFixed(2))});let ye=se.tac?se.tac.items:[];z.hidden=!se.tac;for(let R of Object.keys($))$[R].root.hidden=!ye.some(T=>T.id===R);for(let R of ye){let T=$[R.id];if(!T){let V=e("div",`cr-tac-item cr-tac-${R.kind}`,z);T=$[R.id]={root:V,arrow:e("i","cr-tac-arrow",V),label:e("span","cr-tac-label",V),bar:e("i","cr-tac-bar",V),fill:e("b","",null)},T.bar.appendChild(T.fill)}T.root.style.left=q(R.x),T.root.style.top=q(R.y),T.root.dataset.off=R.off?"1":"0",T.root.dataset.down=R.down?"1":"0",T.arrow.style.transform=`rotate(${(R.angle||0).toFixed(2)}rad)`,Le(`tac.${R.id}.label`,R.label,V=>{T.label.textContent=V}),Le(`tac.${R.id}.bar`,R.frac===void 0?-1:Math.round(R.frac*100),V=>{T.bar.hidden=V<0,V>=0&&(T.fill.style.width=`${V}%`)})}Le("hours",se.hours||"",R=>{X.textContent=R,X.hidden=!R}),Le("bark",se.bark?`${se.bark.speaker}|${se.bark.text}`:"",()=>{j.hidden=!se.bark,se.bark&&(W.textContent=se.bark.speaker,W.style.color=se.bark.color||"",ee.textContent=se.bark.text)}),Le("hit",se.hit.show?se.hit.kind:"",R=>{_e.hidden=!R,_e.dataset.kind=R})}}}function Ib(t){let e=vs(Wt),n=xs(e),i=new dt;i.name=`dummy-${t.id}`,i.add(e.root),i.add(e.shadow);let s=!!(t.rail&&t.rail.half>0),r=t.yaw,o=t.pos[0],a=t.pos[2],l="live",c=0;s&&n.play("run",{fade:0});function h(u){i.scale.setScalar(Math.max(u,1e-4))}function d(u){i.position.set(t.pos[0],t.pos[1],t.pos[2]);let f=t.pos[0]-o,m=t.pos[2]-a;s&&f*f+m*m>1e-8&&(r=Math.atan2(f,m)),o=t.pos[0],a=t.pos[2],i.rotation.y=r;let y=H.feedback;if(l==="burst"){c+=u;let g=y.dummyBurstTime>0?Math.min(c/y.dummyBurstTime,1):1;h(1+.2*g),g>=1&&(l="gone",i.visible=!1)}else if(l==="pop"){c+=u;let g=y.dummyRespawnPop>0?Math.min(c/y.dummyRespawnPop,1):1;h(g),g>=1&&(l="live")}l!=="gone"&&(n.update(s?u*Math.min(Math.max(H.dummy.railSpeed/gs,.3),3):u),e.update(u))}return{group:i,update:d,hit(){(l==="live"||l==="pop")&&n.play("flinch")},burst(){l="burst",c=0},respawn(){l="pop",c=0,i.visible=!0,h(0)}}}var Lb="#f3efe6";function kb(t){for(let e of Object.values(t))e&&typeof e=="object"&&kb(e);return Object.freeze(t)}var Db=kb({...structuredClone(Wt),name:"doc-placeholder",shoulderL:[.275,1.095,0],shoulderR:[-.275,1.095,0],armRadius:.062,neck:{radius:.1,depth:.85},torso:{...Wt.torso,pants:[[0,-.125],[.14,-.12],[.205,-.09],[.238,-.035],[.245,.02],[.235,.06],[0,.06]],shirt:[[0,0],[.232,0],[.245,.02],[.242,.07],[.258,.13],[.295,.22],[.318,.3],[.29,.375],[.235,.415],[.17,.445],[.11,.47],[.075,.482],[0,.49]],sleeve:.105},colors:{...Wt.colors,skin:B.docSkin,hair:B.teal,shirt:Lb,collar:Lb,rim:.25,rimColor:"#ffffff"},outfit:{collar:!1,lanyard:!1,logo:!1,headset:!1},face:{...Wt.face,brow:"uni",fixedSmile:0,eyeColor:B.eyeWhite,eyeGlow:!1}});function Id(t){return Bt(t.map(([e,n,i,s,r,o])=>new ut(e,n,i).translate(s,r,o)),!1)}function uo(t,e,n){let i=new rt(bi(e),Tt({color:n}));return Gn(i),t.add(i),i}var js=.09;function L3(){let t=new dt;t.name="disc",t.position.set(0,-.05,.22),uo(t,new en(js,js,.022,20),B.playerOrange),uo(t,new en(js-.018,js-.018,.034,20),B.cream);let e=[];for(let i=0;i<6;i++){let s=i/6*Math.PI*2;e.push(new ut(.02,.026,.05).rotateY(s).translate(Math.sin(s)*(js-.03),0,Math.cos(s)*(js-.03)))}uo(t,Bt(e,!1),B.ink);let n=new rt(new en(js*1.12,js*1.12,.012,28),new Zt({color:B.cream,transparent:!0,opacity:0,depthWrite:!1}));return n.name="discBlur",n.visible=!1,t.add(n),t}function k3(){let t=new dt;return t.name="rifle",uo(t,Id([[.06,.1,.15,0,.04,-.175],[.09,.12,.4,0,.05,.1],[.05,.05,.15,0,.06,.375]]),B.playerOrange),uo(t,Id([[.05,.12,.06,0,-.07,0]]),B.ink),t.add(L3()),t}function D3(){let t=new dt;return t.name="pistol",uo(t,Id([[.045,.06,.25,0,.04,.075]]),B.playerOrange),uo(t,Id([[.04,.1,.05,0,-.04,0]]),B.ink),t}var N3={regret:[0,.06,.45],pistol:[0,.04,.2]},O3=new G(0,0,1),L5=new G,Ir=new G;function Nb(){let t=new dt;t.name="gun";let e={regret:k3(),pistol:D3()};t.add(e.regret,e.pistol);let n="regret";e.pistol.visible=!1;let i=new G,s=new G(0,0,1),r=e.regret.getObjectByName("disc"),o=r.getObjectByName("discBlur"),a=1/0,l=0;function c(u){if(!(!e[u]||u===n)){n=u;for(let f of Object.keys(e))e[f].visible=f===u}}function h(u,f){i.set(u[0],u[1],u[2]),s.set(f[0],f[1],f[2]),s.lengthSq()<1e-12?s.set(0,0,1):s.normalize(),t.quaternion.setFromUnitVectors(O3,s),d()}function d(){let u=H.feedback,f=Math.max(u.gunSquashTime,1e-6),m=a>=0&&a<f?Math.sin(Math.PI*a/f):0,y=u.gunSquash*m;t.scale.set(1+y/2,1+y/2,1-y),t.position.copy(i).addScaledVector(s,-u.gunKick*m)}return{group:t,setWeapon:c,place:h,shot(){a=0,d()},update(u,f=0){a+=u>0?u:0,u>0&&f&&(r.rotation.y+=f*u),u>0&&(l+=((f?1:0)-l)*(1-Math.exp(-u/.06)));let m=H.feedback;r.scale.setScalar(1+(Math.max(m.discScale,1)-1)*l),o.visible=l>.05&&m.discBlur>0,o.material.opacity=m.discBlur*l,d()},disc:r,blade(u=[0,0,0]){return t.updateMatrix(),Ir.set(r.position.x,r.position.y,r.position.z+js*r.scale.x).applyMatrix4(t.matrix),u[0]=Ir.x,u[1]=Ir.y,u[2]=Ir.z,u},revK:()=>l,tip(u=[0,0,0]){let f=N3[n];return t.updateMatrix(),Ir.set(f[0],f[1],f[2]).applyMatrix4(t.matrix),u[0]=Ir.x,u[1]=Ir.y,u[2]=Ir.z,u}}}var Ob=8,Fb=64,Ca=.12,Ub=4,Bb=3;function gc(){let t=(s,r)=>{s.deleteAttribute("uv");let o=new $e(r),a=s.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=o.r,l[c*3+1]=o.g,l[c*3+2]=o.b;return s.setAttribute("color",new bt(l,3)),s},e=t(new pn(Ca,14,10).toNonIndexed(),B.ink),n=[new ut(.03,.1,.03).translate(-.055,Ca+.04,0),new ut(.03,.1,.03).translate(.055,Ca+.04,0),new ut(.14,.03,.03).translate(0,Ca+.1,0)].map(s=>t(s.toNonIndexed(),B.playerOrange)),i=t(new ut(.07,.07,.012).translate(0,0,Ca-.002).toNonIndexed(),B.cream);return Bt([e,...n,i],!1)}function F3(){let t=(n,i)=>{n=n.toNonIndexed(),n.deleteAttribute("uv");let s=new $e(i),r=n.getAttribute("position").count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new bt(o,3)),n},e=[t(new ut(.5,.03,.65),"#9be15d")];for(let n=0;n<6;n++)e.push(t(new ut(.38,.034,.025).translate(0,0,-.24+n*.09),B.ink));return Bt(e,!1)}function zb(t){let e=new cs(gc(),Tt({vertexColors:!0,rim:.15}),Ob);e.name="kettlebells",e.frustumCulled=!1,e.count=0,t.add(e);let n=new yn,i=0,s=new cs(F3(),Tt({vertexColors:!0,rim:.15}),Ub);s.name="termsPages",s.frustumCulled=!1,s.count=0,t.add(s);let r=[];for(let u=0;u<Bb;u++){let f=new rt(new lr(.9,1,48).rotateX(-Math.PI/2),new Zt({color:B.gel,side:Nn,depthWrite:!1,toneMapped:!1})),m=new rt(new vl(.9,36).rotateX(-Math.PI/2),new Zt({color:"#ff3b1f",transparent:!0,opacity:.28,side:Nn,depthWrite:!1,toneMapped:!1}));f.name="lobMarkerRing",m.name="lobMarkerDisc",f.visible=m.visible=!1,t.add(f,m),r.push({ring:f,disc:m})}let o=new Float32Array(Fb*3),a=new Ut;a.setAttribute("position",new bt(o,3)),a.setDrawRange(0,0);let l=new Il({color:B.playerOrange,dashSize:H.feedback.arcDot,gapSize:H.feedback.arcDot}),c=new dl(a,l);c.name="kettlebellArc",c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new fl(a,new Qo({color:B.playerOrange,size:5,sizeAttenuation:!1,toneMapped:!1}));h.name="kettlebellArcDots",h.frustumCulled=!1,h.visible=!1,t.add(h);let d=new rt(new lr(.88,1,40).rotateX(-Math.PI/2),new Zt({color:B.playerOrange,side:Nn,depthWrite:!1,toneMapped:!1}));return d.name="kettlebellRing",d.visible=!1,t.add(d),{mesh:e,line:c,ring:d,dots:h,pages:s,markers:r,update(u,f,m=0,y=null){i+=m>0?m:0;let g=H.grenade.ballRadius/Ca,p=0,v=0;for(let M=0;M<u.length;M++){let S=u[M];if(S.hostile){if(v>=Ub)continue;n.position.set(S.prevPos[0]+(S.pos[0]-S.prevPos[0])*f,S.prevPos[1]+(S.pos[1]-S.prevPos[1])*f,S.prevPos[2]+(S.pos[2]-S.prevPos[2])*f),n.rotation.set(i*7+v,i*5,i*9),n.scale.setScalar(1),n.updateMatrix(),s.setMatrixAt(v++,n.matrix);continue}if(p>=Ob)continue;let E=S.prevPos[0]+(S.pos[0]-S.prevPos[0])*f,x=S.prevPos[1]+(S.pos[1]-S.prevPos[1])*f,b=S.prevPos[2]+(S.pos[2]-S.prevPos[2])*f,P=S.fuse<H.associate.diveWarn?1+.18*(.5+.5*Math.sin(i*40)):1;n.position.set(E,x,b),n.rotation.set(b*2.5,0,-E*2.5),n.scale.setScalar(g*P),n.updateMatrix(),e.setMatrixAt(p++,n.matrix)}e.count=p,e.instanceMatrix.needsUpdate=!0,s.count=v,s.instanceMatrix.needsUpdate=!0;let _=y||[];for(let M=0;M<Bb;M++){let S=r[M],E=_[M];if(S.ring.visible=S.disc.visible=!!E,!E)continue;let x=.5+.5*Math.sin(i*(E.windup?14:22));S.ring.position.set(E.pos[0],.04,E.pos[2]),S.disc.position.set(E.pos[0],.035,E.pos[2]),S.ring.scale.setScalar(E.radius),S.disc.scale.setScalar(E.radius*(.55+.45*x))}},arc(u,f,m,y){if(!y||!(f>1)){c.visible=!1,h.visible=!1,d.visible=!1;return}let g=Math.min(f,Fb);for(let p=0;p<g;p++)o[p*3]=u[p][0],o[p*3+1]=u[p][1],o[p*3+2]=u[p][2];a.attributes.position.needsUpdate=!0,a.setDrawRange(0,g),l.dashSize=l.gapSize=Math.max(H.feedback.arcDot,.001),c.computeLineDistances(),c.visible=!0,h.visible=!0,m?(d.position.set(m[0],m[1]+.03,m[2]),d.scale.setScalar(H.grenade.killRadius),d.visible=!0):d.visible=!1},reset(){e.count=0,e.instanceMatrix.needsUpdate=!0,s.count=0,s.instanceMatrix.needsUpdate=!0,c.visible=!1,h.visible=!1,d.visible=!1;for(let u of r)u.ring.visible=u.disc.visible=!1}}}var kd=Math.PI*2,ws=(t,e,n)=>t<e?e:t>n?n:t,U3=t=>t-kd*Math.round(t/kd),Vb=.001,nm=.5,im=.3;function B3(t,e=t.tuning||H.move){let n=t.state,i=t.speed();if(n==="bash")return{name:"bash",rate:_t.bash.duration/Math.max(H.melee.bashTime,.001)};if(n==="rev")return{name:"aim",rate:1};if(n==="execute")return{name:"bash",rate:1,loop:!0};if(n==="reviveTobble")return{name:"revive",rate:1};if(n==="knocked")return{name:"flinch",rate:1};if(n==="downed")return{name:"crawl",rate:ws(i/Math.max(e.crawlSpeed,1e-6),0,2)};if(n==="roll")return{name:"roll",rate:_t.roll.duration/e.rollTime};if(n==="sprint")return{name:"sprint",rate:ws(i/gs,e.sprintRateMin,e.sprintRateMax)};if(n==="move"){if(i>e.runClipMinSpeed)return{name:"run",rate:ws(i/gs,e.runRateMin,e.runRateMax)};if(t.grenadeAim)return{name:"throw",rate:0,at:im*_t.throw.duration};if(t.aiming||t.firing)return{name:"aim",rate:1}}if(n==="coverSlide")return{name:Zs(t).kind==="low"?"coverLow":"coverTall",rate:1};if(n==="coverSwap")return{name:"sprint",rate:ws(i/gs,e.sprintRateMin,e.sprintRateMax)};if(n==="cover"&&t.cover){let s=t.cover,r=t.coverTuning||H.cover,o=s.edge.kind==="low";return s.pop>=.5?{name:"coverPop",rate:1}:s.blind>=.5?{name:o?"coverBlindLow":ho(t)===-1?"coverBlindTallL":"coverBlindTallR",rate:1}:i>e.runClipMinSpeed?{name:o?"coverLowMove":"coverTallMove",rate:ws(i/r.moveSpeed,.5,2)}:{name:o?"coverLow":"coverTall",rate:1}}return n==="vault"?{name:"vault",rate:_t.vault.duration/Math.max((t.coverTuning||H.cover).vaultTime,Vb)}:{name:"idle",rate:1}}function z3(t){let e=t.state==="cover"||t.state==="coverSlide"?Zs(t):null;return!e||e.kind!=="low"?0:t.state==="coverSlide"?ws(t.stateTime/Math.max(t.scratch.dur,1e-6),0,1):t.cover?ws(1-Math.max(t.cover.pop,t.cover.blind||0),0,1):0}var H3=(t,e)=>4*e*t*(1-t),G3=(t,e,n)=>t>=0&&t<n?e*Math.sin(Math.PI*t/n):0;function sm(t){if(t<=.08)return 0;if(t>=.9)return kd;let e=(t-.08)/.82;return kd*e*e*(3-2*e)}var Hb=.95,Gb=.6,Si=new G,Un=[0,0,1],Ld=[0,0,0];function Wb(t,e=Db){let n=vs(e),i=xs(n),s=new dt;s.name="player";let r=new dt;r.position.y=nm,n.root.position.y=-nm,r.add(n.root),s.add(r),s.add(n.shadow);let o=n.root.getObjectByName("body"),a={L:o.children[1],R:o.children[2]},l=Nb();s.add(l.group);let c=new rt(gc(),Tt({vertexColors:!0,rim:.15}));c.name="kettlebellInHand",c.position.set(0,.1,0),c.visible=!1,a.R.add(c);let h=0,d=1/0,u=n.root.getObjectByName("head"),f=new G,m=!0;function y(F,z,$){u.getWorldPosition(f),f.y+=n.spec.head.centerY;let X=Math.hypot(F[0]-f.x,F[1]-f.y,F[2]-f.z);return m=Qx(X,m,z,$),u.visible=m,m}let g=0,p=0,v=0,_=0,M="",S=0,E=-1,x=t.slams||0,b=1/0;function P(F,z,$){let X=t.pos,j=t.prevPos,W=t.coverTuning||H.cover,ee=z3(t);g=W.popTime>0?Math.max(ee,g+ws(ee-g,-z/W.popTime,z/W.popTime)):ee;let Me=t.state==="cover"&&t.cover&&t.cover.edge.kind==="low"?ws(t.cover.blind||0,0,1):0;if(ee>0||Me>0){let Ye=Zs(t);p=Ye.normal[0],v=Ye.normal[1]}let te=g*W.lowDrawBack+Me*W.blindDrawBack;s.position.set(j[0]+(X[0]-j[0])*F+p*te,j[1]+(X[1]-j[1])*F,j[2]+(X[2]-j[2])*F+v*te),s.rotation.y=t.prevFacing+U3(t.facing-t.prevFacing)*F;let oe=B3(t),be=h>0;be&&(oe={name:"throw",rate:_t.throw.duration*(1-im)/Math.max(H.grenade.throwTime,.001),at:im*_t.throw.duration},h-=z);let Oe=be?"throw!":oe.name;Oe!==M||t.entries!==E?(i.play(oe.name,oe.name==="roll"?{fade:.05}:oe.at!==void 0?{fade:.06,at:oe.at}:void 0),M=Oe,E=t.entries,S=0):oe.loop&&(S+=z*oe.rate,S>=_t[oe.name].duration&&(S-=_t[oe.name].duration,i.play(oe.name,{fade:0}))),i.update(z*oe.rate,oe.rate===0?z:void 0),n.update(z);let ne=H.feedback,Ce=Math.max(ne.gunSquashTime,1e-6);d=$&&$.shot?z:d+z;let Fe=d<Ce?ne.bodyKick*Math.sin(Math.PI*d/Ce):0;r.rotation.x=(t.state==="roll"?sm(t.stateTime/t.tuning.rollTime):0)-Fe,(t.slams||0)!==x?(x=t.slams||0,b=0):b+=z;let Be=t.state==="vault"?H3(ws(t.stateTime/Math.max(W.vaultTime,Vb),0,1),W.vaultHop):0,Xe=G3(b,W.slamSquash,W.slamSquashTime);r.scale.set(1+Xe/2,1-Xe,1+Xe/2),r.position.y=nm*(1-Xe)+Be,c.visible=!!($&&$.kettlebell)&&!be,c.scale.setScalar(H.grenade.ballRadius/.12),L(oe.name,z,$)}function L(F,z,$){if(s.updateMatrixWorld(!0),(F==="coverBlindTallL"?a.L:a.R).getWorldPosition(Si),s.worldToLocal(Si),$&&$.stance&&F==="coverBlindLow")Un[0]=0,Un[1]=Math.sin(Hb),Un[2]=Math.cos(Hb);else if(t.state==="bash"||t.state==="rev"||t.state==="execute")Un[0]=0,Un[1]=-.05,Un[2]=1;else if($&&$.stance&&$.dir){let j=Math.cos(s.rotation.y),W=Math.sin(s.rotation.y);Un[0]=$.dir[0]*j-$.dir[2]*W,Un[1]=$.dir[1],Un[2]=$.dir[0]*W+$.dir[2]*j}else Un[0]=0,Un[1]=-Math.sin(Gb),Un[2]=Math.cos(Gb);if($&&$.stance==="blind"&&F.startsWith("coverBlind")){let j=H.feedback,W=j.blindFlail,ee=2*Math.PI*j.blindFlailHz;_+=z;let Me=($.blindDrift||0)*Math.PI/180+Math.sin(ee*_)*W*.5,te=Math.sin(ee*1.3*_+1)*W*.5,oe=Math.cos(Me),be=Math.sin(Me),Oe=Un[0],ne=Un[2];Un[0]=Oe*oe+ne*be,Un[2]=-Oe*be+ne*oe,Un[1]+=te}$&&$.weapon&&l.setWeapon($.weapon),l.place([Si.x,Si.y,Si.z],Un),$&&$.shot&&l.shot(),l.update(z,t.state==="rev"||t.state==="execute"?H.melee.cutterSpin:0),l.group.visible=t.state!=="roll"&&t.state!=="downed"&&t.state!=="reviveTobble"&&!c.visible&&h<=0}function C(F=[0,0,0]){return s.updateMatrixWorld(!0),l.tip(Ld),Si.set(Ld[0],Ld[1],Ld[2]).applyMatrix4(s.matrixWorld),F[0]=Si.x,F[1]=Si.y,F[2]=Si.z,F}let w=[0,0,0];function D(F=[0,0,0]){return s.updateMatrixWorld(!0),l.blade(w),Si.set(w[0],w[1],w[2]).applyMatrix4(s.matrixWorld),F[0]=Si.x,F[1]=Si.y,F[2]=Si.z,F}function k(){n.dispose(),n.shadow.geometry.dispose(),s.removeFromParent()}return{group:s,update:P,dispose:k,rig:n,anim:i,fadeHeadFor:y,gun:l,gunTip:C,bladePos:D,throwNow:()=>{h=Math.max(H.grenade.throwTime,.001)},kettlebell:c}}var Dd=new Set(["telegraph","burst"]),Lr=(t,e,n)=>t<e?e:t>n?n:t,V3=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),Xb=.5,W3=-.6,X3=t=>t.point&&t.point.kind==="tall"?"tall":"low";function Y3(t){let e=X3(t)==="tall";switch(t.state){case"run":return"run";case"flinch":case"stagger":case"executed":return"flinch";case"downed":return"crawl";case"kneel":return"revive";case"dive":return"roll";case"spawn":return"idle";case"telegraph":case"burst":return e?"aim":"coverPop";case"suppress":{if(!e)return"coverBlindLow";let n=t.point,i=ts(-n.normal[0],-n.normal[1]);return n.tangent[0]*n.end*Math.cos(i)-n.tangent[1]*n.end*Math.sin(i)>0?"coverBlindTallL":"coverBlindTallR"}default:return e?"coverTall":"coverLow"}}function q3(t){if(t.kind==="trainer"||t.kind==="boss")return t.yaw;if((t.state==="idle"||t.state==="cover"||t.state==="reload"||t.state==="flinch"||t.state==="suppress")&&t.point)return ts(-t.point.normal[0],-t.point.normal[1]);if(Dd.has(t.state))return ts(t.aim[0]-t.pos[0],t.aim[2]-t.pos[2]);if(t.state==="run"&&t.path&&t.path[t.pathI]){let e=t.path[t.pathI];if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[2])>1e-6)return ts(e[0]-t.pos[0],e[1]-t.pos[2])}return t.yaw}function $3(t){switch(t.state){case"run":return"run";case"windup":case"swing":return"throw";case"stagger":case"executed":return"flinch";case"dive":return"roll";default:return"idle"}}function K3(t){switch(t.state){case"retreat":case"return":return"run";case"telegraph":case"burst":return"aim";case"lobWindup":case"lobRecover":return"throw";default:return"idle"}}function Z3(t){return t.state==="dead"||!t.alive?"dead":t.kind==="boss"?t.state==="telegraph"||t.state==="burst"||t.state==="lobWindup"||t.state==="lobRecover"?"angry":t.state==="retreat"||t.state==="hiding"?"scared":"smug":t.kind==="trainer"&&(t.state==="run"||t.state==="windup"||t.state==="swing")||Dd.has(t.state)?"angry":t.state==="flinch"||t.state==="stagger"||t.state==="downed"||t.state==="executed"||t.state==="dive"?"scared":"smug"}var Kb=.03,rm=[0,.06,.32];function j3(){let t=new dt;t.name="blaster";let n=Bt([[.06,.09,.26,0,.05,.12],[.045,.1,.06,0,-.04,0],[.03,.03,.08,0,.06,.28]].map(([r,o,a,l,c,h])=>new ut(r,o,a).translate(l,c,h)),!1),i=new rt(bi(n),Tt({color:B.glorpPurple}));Gn(i),t.add(i);let s=new rt(new pn(Kb,10,8),new Zt({color:B.gel}));return s.name="emitter",s.position.set(rm[0],rm[1],rm[2]),t.add(s),{group:t,emitter:s}}var J3=new G(0,0,1),Bi=new G,kr=new G,Yb=.6,fo=.4,qb=.95,Q3=1.3;function eP(){let t=gc();t.translate(0,-.22,0).rotateX(Math.PI);let e=new dt;e.name="trainerKettlebell",e.scale.setScalar(Q3),e.add(new rt(t,Tt({vertexColors:!0,rim:.15})));let n=new rt(new pn(.07,10,8),new Zt({color:"#ff4a1c",toneMapped:!1}));return n.name="glint",n.position.set(0,.22,0),n.visible=!1,e.add(n),{group:e,glint:n}}function vc(t,e){t=t.toNonIndexed(),t.deleteAttribute("uv");let n=new $e(e),i=t.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return t.setAttribute("color",new bt(s,3)),t}function tP(){let t=[vc(new en(.2,.22,.09,16,1,!0).translate(0,.045,0),ys)];for(let n=0;n<5;n++){let i=n/5*Math.PI*2;t.push(vc(new xl(.045,.14,4).translate(Math.sin(i)*.2,.16,Math.cos(i)*.2),n%2?ys:B.hotPink))}let e=new rt(Bt(t,!1),Tt({vertexColors:!0,rim:.1}));return e.name="crown",e}function nP(){let e=[B.hotPink,B.teal,B.cream,B.gel,B.lilac].map((i,s)=>vc(new ut(.075,.105,.012).translate(-.12+s*.06,.3-Math.abs(s-2)*.03-s%2*.03,.215),i)),n=new rt(Bt(e,!1),Tt({vertexColors:!0,rim:.1}));return n.name="keycards",n}function iP(){let t=[vc(new ut(.3,.4,.014),"#9be15d")];for(let i=0;i<5;i++)t.push(vc(new ut(.22,.014,.018).translate(0,.14-i*.07,0),B.ink));let e=new dt;e.name="termsPage",e.add(new rt(Bt(t,!1),Tt({vertexColors:!0,rim:.1})));let n=new rt(new pn(.08,10,8),new Zt({color:B.gel,toneMapped:!1}));return n.name="glint",n.position.set(0,.24,0),n.visible=!1,e.add(n),e.visible=!1,e.position.set(0,.1,.12),e.rotation.x=-.5,{group:e,glint:n}}function $b(t){let e=t==="trainer",n=t==="boss",i=vs(e?Xx:n?ud:Wt),s=xs(i),r=new dt;r.name=t;let o=new dt;o.position.y=Xb,i.root.position.y=-Xb,o.add(i.root),r.add(o),r.add(i.shadow);let a=i.root.getObjectByName("body").children[2],l=e?eP():j3(),c=null;if(e?a.add(l.group):r.add(l.group),n){let h=tP();h.position.set(0,ud.head.centerY+ud.head.ry-.04,0),i.root.getObjectByName("head").add(h),i.root.getObjectByName("hips").add(nP()),c=iP(),a.add(c.group)}return{kind:t,rig:i,anim:s,root:r,tumble:o,handR:a,weapon:l,terms:c}}function Zb(t){let e=new dt;e.name=`associate-${t.id}`;let n={associate:$b("associate"),trainer:null,boss:null},i=n.associate;e.add(i.root);let s=i.weapon,r="",o=0,a="",l=0,c=t.yaw,h="live",d=0,u=!1,f=0,m=0,y=0,g=0,p=0;function v(b){if(i.kind===b)return;n[b]||(n[b]=$b(b),e.add(n[b].root),b==="boss"&&e.add(n.boss.weapon.group)),i.root.visible=!1,i=n[b],i.root.visible=!0;let P=H.trainer.scaleW,L=H.trainer.scaleH;r="",a=""}function _(){h="live",d=0,l=0,c=t.yaw,u=!1,f=0,e.visible=!0,e.scale.setScalar(1),i.tumble.rotation.x=0,r="",a="",o=0,s.emitter.scale.setScalar(1),n.trainer&&(n.trainer.weapon.glint.visible=!1),n.boss&&(n.boss.terms.glint.visible=!1,n.boss.terms.group.visible=!1)}function M(b,P){let L=H.feedback,C=H.cover,w=H.associate;if(t.state==="unused"){e.visible=!1;return}if(t.state==="spawn"&&(h==="burst"||h==="gone")&&_(),t.state!=="dead"&&t.alive&&v(t.kind||"associate"),!t.alive&&t.state==="dead"&&h==="live"&&(h="burst",d=0),h==="live"&&(e.visible=!0),h==="burst"){d+=P;let Pe=t.kind==="boss"?H.ending.deathDelay*.9:L.dummyBurstTime,ke=Pe>0?Math.min(d/Pe,1):1;e.scale.setScalar(1+.2*ke),ke>=1&&(h="gone",e.visible=!1)}if(h==="gone")return;let D=h==="burst",{rig:k,anim:I,tumble:F,handR:z}=i,$=i.kind==="trainer",X=i.kind==="boss",j=H.trainer,W=H.boss;if(X){let Pe=W.scale*(W.crouchY+(1-W.crouchY)*Lr(t.pop,0,1));i.root.scale.set(W.scale,Pe,W.scale)}else i.root.scale.set($?j.scaleW:1,$?j.scaleH:1,$?j.scaleW:1);X&&D&&(i.root.scale.y*=1-.45*Lr(d/Math.max(H.ending.deathDelay*.9,.001),0,1));let ee=t.pos,Me=t.prevPos,te=!D&&t.point&&t.point.kind==="low"&&t.state!=="run"&&t.state!=="dead",oe=te?Lr(1-Math.max(t.pop,t.blind),0,1):0;l=C.popTime>0?Math.max(oe,l+Lr(oe-l,-P/C.popTime,P/C.popTime)):oe;let be=te?Lr(t.blind,0,1):0;te&&(y=t.point.normal[0],g=t.point.normal[1]);let Oe=l*C.lowDrawBack+be*C.blindDrawBack,ne=t.state==="spawn"?W3*(1-Lr(t.stateT/Math.max(H.pad.riseTime,.001),0,1)):0;if(e.position.set(Me[0]+(ee[0]-Me[0])*b+y*Oe,Me[1]+(ee[1]-Me[1])*b+ne,Me[2]+(ee[2]-Me[2])*b+g*Oe),m+=P,t.state==="executed"){let Pe=H.feedback.executeJitter,ke=2*Math.PI*m;e.position.x+=Math.sin(ke*17)*Pe,e.position.z+=Math.sin(ke*13+1)*Pe,i.root.rotation.z=Math.sin(ke*15+2)*Pe*1.6}else i.root.rotation.z=0;let Ce=$||X||t.state==="run"||Dd.has(t.state)?t.prevYaw+V3(t.yaw-t.prevYaw)*b:q3(t);if(c=jt(c,Ce,($?j.turnRate:w.turnRate)*1.5*P),e.rotation.y=c,D)return;let Fe=$?$3(t):X?K3(t):Y3(t),Be=$||X?Fe+":"+t.state:Fe,Xe=_t.throw.duration;if(Be!==r){if(($||X)&&Fe==="throw"){let Pe=t.state==="swing"||t.state==="lobRecover",ke=Pe?fo*Xe:0;I.play(Fe,{fade:Pe?.02:.08,at:ke}),p=ke}else I.play(Fe,Fe==="flinch"?void 0:{fade:.1});r=Be,o=0}else t.state==="executed"&&(o+=P,o>=_t.flinch.duration&&(o=0,I.play("flinch")));let Ye=Fe==="run"?Lr(($?j.runSpeed:X?W.retreatSpeed:w.runSpeed)/gs,.5,3):1;Fe==="crawl"&&(Ye=Math.hypot(ee[0]-Me[0],ee[2]-Me[2])>1e-5?1:0),Fe==="roll"&&(Ye=_t.roll.duration/Math.max(w.diveReaction+w.diveTime,.001)),$&&t.state==="windup"&&(Ye=p<fo*Xe-1e-6?fo*Xe/Math.max(j.windup,.001):0),X&&t.state==="lobWindup"&&(Ye=p<fo*Xe-1e-6?fo*Xe/Math.max(W.popTime+W.lobWindup,.001):0),X&&t.state==="lobRecover"&&(Ye=(1-fo)*Xe/Math.max(W.lobRecover,.001)),$&&t.state==="swing"&&(Ye=(1-fo)*Xe/Math.max(j.swingTime,.001)),p+=P*Ye,F.rotation.x=Fe==="roll"?sm(Lr(t.stateT/Math.max(w.diveReaction+w.diveTime,.001),0,1)):0,I.update(P*Ye,Ye===0?P:void 0),k.update(P);let me=Z3(t);me!==a&&(k.face.setExpression(me),a=me),$?S(P):X?(i.weapon.group.scale.setScalar(W.scale),E(P),x(Fe,P,z,i.weapon,t.state==="lobWindup"||t.state==="lobRecover")):x(Fe,P,z)}function S(b){let P=n.trainer.weapon.glint;P.visible=u&&t.state==="windup",P.visible&&(f+=b,P.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function E(b){let P=n.boss.terms;P.group.visible=t.state==="lobWindup",P.glint.visible=u&&t.state==="lobWindup",P.glint.visible&&(f+=b,P.glint.scale.setScalar(1+.6*(.5+.5*Math.sin(f*2*Math.PI*8))))}function x(b,P,L,C=n.associate.weapon,w=!1){C.group.visible=t.state!=="downed"&&t.state!=="dive"&&!w,e.updateMatrixWorld(!0),L.getWorldPosition(Bi);let D=Bi.x,k=Bi.y,I=Bi.z;e.worldToLocal(Bi);let F=Bi.x,z=Bi.y,$=Bi.z;if(Dd.has(t.state)){let X=Math.cos(e.rotation.y),j=Math.sin(e.rotation.y),W=t.aim[0]-D,ee=t.aim[2]-I;kr.set(W*X-ee*j,t.aim[1]-k,W*j+ee*X)}else b==="coverBlindLow"?kr.set(0,Math.sin(qb),Math.cos(qb)):t.state==="suppress"?kr.set(0,.05,1):kr.set(0,-Math.sin(Yb),Math.cos(Yb));if(kr.lengthSq()<1e-12&&kr.set(0,0,1),kr.normalize(),C.group.position.set(F,z,$),C.group.quaternion.setFromUnitVectors(J3,kr),u){f+=P;let X=.5+.5*Math.sin(f*2*Math.PI*8),j=H.feedback.glintSize/Kb;C.emitter.scale.setScalar(1+(j-1)*X)}else C.emitter.scale.setScalar(1)}return{group:e,update:M,reset:_,death(){h==="live"&&(h="burst",d=0)},glint(b){b&&!u&&(f=0),u=!!b},tip(b=[0,0,0]){return e.updateMatrixWorld(!0),(i.kind==="trainer"?i.weapon.glint:i.weapon.emitter).getWorldPosition(Bi),b[0]=Bi.x,b[1]=Bi.y,b[2]=Bi.z,b},get rig(){return i.rig},get anim(){return i.anim},blaster:s,get kind(){return i.kind}}}var xc=new G;function zi(t,e,n,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;xc.copy(e),xc[i]=0,xc.normalize();let c=.5*o/(o+a),h=1-xc.angleTo(t)/l;return Math.sign(xc[n])===1?h*c:a/(o+a)+c+c*(1-h)}var Nd=class t extends ut{constructor(e=1,n=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,n/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new G,c=new G,h=new G(e,n,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,y=new G,g=.5/o;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[v+0]=zi(y,c,"z","y",r,i),f[v+1]=1-zi(y,c,"y","z",r,n);break;case 1:y.set(-1,0,0),f[v+0]=1-zi(y,c,"z","y",r,i),f[v+1]=1-zi(y,c,"y","z",r,n);break;case 2:y.set(0,1,0),f[v+0]=1-zi(y,c,"x","z",r,e),f[v+1]=zi(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[v+0]=1-zi(y,c,"x","z",r,e),f[v+1]=1-zi(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[v+0]=1-zi(y,c,"x","y",r,e),f[v+1]=1-zi(y,c,"y","x",r,n);break;case 5:y.set(0,0,-1),f[v+0]=zi(y,c,"x","y",r,e),f[v+1]=1-zi(y,c,"y","x",r,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};function Jb(t){for(let e of Object.values(t))e&&typeof e=="object"&&Jb(e);return Object.freeze(t)}var jb=(t,e,n)=>{let i=parseInt(t.slice(1),16),s=parseInt(e.slice(1),16),r=0;for(let o=16;o>=0;o-=8)r|=Math.round((i>>o&255)+((s>>o&255)-(i>>o&255))*n)<<o;return"#"+r.toString(16).padStart(6,"0")},po=Jb({...Wt,name:"tobble",hair:{...Wt.hair,quiff:!1},colors:{...Wt.colors,shirt:B.cream,collar:jb(B.cream,B.ink,.2),skin:B.tobbleMint,hair:jb(B.tobbleMint,B.ink,.45),backpack:"#ffd23f",lanyard:"#ffd23f",badgeStripe:"#ffd23f",rim:.25,rimColor:"#ffffff",mat:B.lilac},outfit:{collar:!1,lanyard:!0,logo:!1,headset:!1},face:{...Wt.face,brow:"pair",fixedSmile:.4,eyeColor:B.eyeWhite,eyeGlow:!1},thirdEye:{y:.13,r:.05},backpack:{w:.5,h:.6,d:.3}});var am=(t,e,n)=>t<e?e:t>n?n:t,n1=t=>am(t,0,1),Qb=t=>t-2*Math.PI*Math.round(t/(2*Math.PI)),sP=1/60,e1=t=>t.point&&t.point.kind==="tall"?"tall":"low";function rP(t,e=t.speed||0){let n=e>.3;switch(t.state){case"cover":return e1(t)==="tall"?"coverTall":"coverLow";case"shoot":return e1(t)==="tall"?"aim":"coverPop";case"revive":return t.kneeling?"revive":n?"run":"idle";case"downed":return"crawl";default:return n?"run":"idle"}}function oP(t){return t.downed||!t.point||t.point.kind!=="low"||t.state!=="cover"&&t.state!=="shoot"?0:n1(1-t.pop)}function aP(){let e=new Uint8Array(16384),n=new $e(B.tobbleMint),i=new $e(B.ink),s=(o,a,l)=>Math.abs(o-64/2+.5)<l&&Math.abs(a-64/2+.5)<64*.4||Math.abs(a-64/2+.5)<l&&Math.abs(o-64/2+.5)<64*.4;for(let o=0;o<64;o++)for(let a=0;a<64;a++){let l=(o*64+a)*4,c=s(a,o,8),h=s(a,o,13),d=c?n:i;e[l]=Math.round(d.r*255),e[l+1]=Math.round(d.g*255),e[l+2]=Math.round(d.b*255),e[l+3]=h?255:0}let r=new qr(e,64,64,yi);return r.colorSpace=xn,r.magFilter=Dn,r.minFilter=Dn,r.needsUpdate=!0,r}function lm(t,e){let n=new rt(bi(t),Tt({color:e}));return Gn(n),n}var om=[0,.04,.2];function lP(){let t=new dt;t.name="tobblePistol";let e=[[.045,.06,.25,0,.04,.075],[.04,.1,.05,0,-.04,0]];return t.add(lm(Bt(e.map(([n,i,s,r,o,a])=>new ut(n,i,s).translate(r,o,a)),!1),B.tobbleMint)),t}var cP=new G(0,0,1),Ss=new G,Pa=new G,t1=.6;function i1(t){let e=vs(po),n=xs(e),i=new dt;i.name="tobble",i.add(e.root);let r=e.root.getObjectByName("body").children[2],o=e.root.getObjectByName("hips"),a=e.root.getObjectByName("head"),l=new dt;l.name="thirdEye";let c=po.thirdEye,h=new rt(new pn(c.r,12,10),new Zt({color:B.eyeWhite})),d=new rt(new pn(c.r*.5,10,8),new Zt({color:B.ink}));d.position.z=c.r*.8,l.add(h,d),l.position.set(0,po.head.centerY+c.y,.27),a.add(l);let u=po.backpack,f=new dt;f.name="backpack",f.add(lm(new Nd(u.w,u.h,u.d,3,.06),po.colors.backpack));let m=lm(new en(.085,.085,u.w*.95,12).rotateZ(Math.PI/2),po.colors.mat);m.position.y=u.h/2+.05,f.add(m),f.position.set(0,.2,-.32),o.add(f);let y=lP();i.add(y);let g=new hl(new Zo({map:aP(),depthTest:!1,depthWrite:!1,toneMapped:!1}));g.name="tobblePlus",g.renderOrder=20,g.visible=!1,i.add(g);let p="",v=0,_=t.yaw,M=0,S=0,E="",x=0;function b(){p="",v=0,_=t.yaw,E="",x=0,i.position.set(t.start[0],t.start[1],t.start[2]),i.rotation.y=t.startYaw,g.visible=!1}function P(C,w){let D=H.tobble,k=H.cover,I=D.scale;x+=w>0?w:0,i.scale.setScalar(I);let F=t.pos,z=t.prevPos,$=Math.hypot(F[0]-z[0],F[2]-z[2])/sP,X=oP(t);v=k.popTime>0?Math.max(X,v+am(X-v,-w/k.popTime,w/k.popTime)):X,X>0&&t.point&&(M=t.point.normal[0],S=t.point.normal[1]);let j=v*k.lowDrawBack*I,W=t.point&&!t.downed?D.popLift*n1(t.pop):0;i.position.set(z[0]+(F[0]-z[0])*C+M*j,z[1]+(F[1]-z[1])*C+W,z[2]+(F[2]-z[2])*C+S*j);let ee=t.prevYaw+Qb(t.yaw-t.prevYaw)*C;_+=Qb(ee-_)*Math.min(1,w*25),i.rotation.y=_;let Me=rP(t,$);Me!==p&&(n.play(Me,{fade:.1}),p=Me);let te=1;Me==="run"?te=am($/(gs*I),.5,3):Me==="crawl"&&(te=$>.001?1:0),n.update(w*te,te===0?w:void 0),e.update(w);let oe=t.downed?"scared":t.state==="shoot"?"angry":"smug";oe!==E&&(e.face.setExpression(oe),E=oe),g.visible=t.downed,t.downed&&(g.position.set(0,.95/I+.05*Math.sin(x*4),0),g.scale.setScalar(.5/I)),L()}function L(){y.visible=!t.downed&&t.state!=="revive",i.updateMatrixWorld(!0),r.getWorldPosition(Ss);let C=Ss.x,w=Ss.y,D=Ss.z;if(i.worldToLocal(Ss),y.position.copy(Ss),t.state==="shoot"&&t.target&&t.target.pos){let k=Math.cos(i.rotation.y),I=Math.sin(i.rotation.y),F=t.target.pos[0]-C,z=t.target.pos[2]-D;Pa.set(F*k-z*I,t.target.pos[1]+1.2-w,F*I+z*k)}else Pa.set(0,-Math.sin(t1),Math.cos(t1));Pa.lengthSq()<1e-12&&Pa.set(0,0,1),Pa.normalize(),y.quaternion.setFromUnitVectors(cP,Pa)}return b(),{group:i,update:P,reset:b,rig:e,anim:n,pistol:y,plus:g,eye:l,pack:f,tip(C=[0,0,0]){return i.updateMatrixWorld(!0),Ss.set(om[0],om[1],om[2]).applyMatrix4(y.matrixWorld),C[0]=Ss.x,C[1]=Ss.y,C[2]=Ss.z,C}}}function hP(t){return t==="open"?{ring:B.gel,pulse:!0,steam:!0}:t==="closed"?{ring:B.ink,pulse:!1,steam:!1}:{ring:B.lilac,pulse:!1,steam:!1}}var uP="#e6c28c",dP="#b98a50",fP=.3;function pP(t){let e=(i,s)=>{i.deleteAttribute("uv");let r=new $e(s),o=i.getAttribute("position").count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return i.setAttribute("color",new bt(a,3)),i},n=[e(new en(t,t,.08,32).translate(0,.04,0).toNonIndexed(),uP)];for(let i=-3;i<=3;i++){let s=i*(t/3.6),r=2*Math.sqrt(Math.max(t*t-s*s,.01))-.04;n.push(e(new ut(r,.006,.035).translate(0,.081,s).toNonIndexed(),dP))}return Bt(n,!1)}function s1(t,e,n=null){let i=e.map(r=>{let o=H.pad.radius,a=new dt;a.name=`sauna-${r.id}`,a.position.set(r.pos[0],r.pos[1],r.pos[2]),a.add(new rt(pP(o),Tt({vertexColors:!0,rim:.1})));let l=new Zt({color:B.lilac,side:Nn,toneMapped:!1}),c=new rt(new lr(o*.9,o*1.06,40).rotateX(-Math.PI/2),l);c.position.y=.09,a.add(c),t.add(a);let h=Ki({text:"SPAWN SAUNA",w:2.4,h:.7,bg:B.glorpPurple,seed:9});return h.position.set(r.pos[0],3.05,r.pos[2]+1.3),h.rotation.y=Math.PI,t.add(h),{pad:r,group:a,ring:c,ringMat:l,sign:h,color:"",steamT:0}}),s=0;return{items:i,update(r){s+=r>0?r:0;for(let o of i){let a=hP(o.pad.state);if(a.ring!==o.color&&(o.color=a.ring,o.ringMat.color.set(a.ring)),o.ring.scale.setScalar(a.pulse?1+.07*Math.sin(s*6):1),a.steam&&n&&r>0){if(o.steamT+=r,o.steamT>=fP){o.steamT=0;let l=Math.random()*Math.PI*2,c=Math.random()*H.pad.radius*.8;n.steam([o.pad.pos[0]+Math.cos(l)*c,.1,o.pad.pos[2]+Math.sin(l)*c])}}else a.steam||(o.steamT=0)}},reset(){for(let r of i)r.steamT=0,r.color=""}}}var Ia=Math.PI/180,r1=.3,cm=1e-6,mP=64,gP=4,vP=64,o1=(t,e,n)=>Math.max(e,Math.min(n,t));function um(t,e,n=H.grenade,i=[0,0,0]){let s=o1(e+n.throwLift*Ia,-30*Ia,70*Ia),r=Math.cos(s);return i[0]=n.throwSpeed*Math.sin(t)*r,i[1]=n.throwSpeed*Math.sin(s),i[2]=n.throwSpeed*Math.cos(t)*r,i}function Od(t,e,n=H.combat,i=[0,0,0]){if(t.cover)return Pd(t,"blind",e,n,i);let s=Rd(e),r=Ad(e);i[1]=t.pos[1]+1.6;for(let o=1;o>=0&&(i[0]=t.pos[0]+(s[0]*.2+r[0]*.3)*o,i[2]=t.pos[2]+(s[2]*.2+r[2]*.3)*o,!(o===0||!xa(t.boxes,i,0)));o-=.25);return i}var mo=[0,0,0];function xP(t,e){let n=null,i=1/0;for(let a of t){let l=Math.max(a.min[0]-e[0],0,e[0]-a.max[0]),c=Math.max(a.min[1]-e[1],0,e[1]-a.max[1]),h=Math.max(a.min[2]-e[2],0,e[2]-a.max[2]),d=Math.hypot(l,c,h);d<i&&(i=d,n=a)}if(mo[0]=mo[1]=mo[2]=0,!n)return mo[1]=1,mo;let s=0,r=-1/0,o=1;for(let a=0;a<3;a++){let l=n.min[a]-e[a],c=e[a]-n.max[a],h=Math.max(l,c);h>r&&(r=h,s=a,o=l>c?-1:1)}return mo[s]=o,mo}var hm={clank:!1,rested:!1,up:!1,upPos:[0,0,0]},Ts=[0,0,0];function a1(t,e,n,i,s){if(s.clank=!1,s.rested=!1,s.up=!1,t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.resting||!(e>0))return;let r=Math.max(i.ballRadius,.01),o=i.gravity,a=t.pos,l=t.vel,c=Math.hypot(l[0],l[1],l[2])*e+.5*o*e*e,h=o1(Math.ceil(c/r),1,mP),d=e/h;for(let u=0;u<h;u++){let f=d;for(let m=0;m<=gP&&f>0;m++){Ts[0]=a[0]+l[0]*f,Ts[1]=a[1]+l[1]*f-.5*o*f*f,Ts[2]=a[2]+l[2]*f;let y=Ni(n,a,Ts,r);if(y>=1){a[0]=Ts[0],a[1]=Ts[1],a[2]=Ts[2],l[1]-=o*f;break}a[0]+=(Ts[0]-a[0])*y,a[1]+=(Ts[1]-a[1])*y,a[2]+=(Ts[2]-a[2])*y,l[1]-=o*f*y;let g=xP(n,a),p=l[0]*g[0]+l[1]*g[1]+l[2]*g[2];if(p<0){let v=l[0]-g[0]*p,_=l[1]-g[1]*p,M=l[2]-g[2]*p;l[0]=v*i.friction-g[0]*p*i.restitution,l[1]=_*i.friction-g[1]*p*i.restitution,l[2]=M*i.friction-g[2]*p*i.restitution,-p>=r1&&(s.clank=!0),g[1]>.7&&!s.up&&(s.up=!0,s.upPos[0]=a[0]-g[0]*r,s.upPos[1]=a[1]-g[1]*r,s.upPos[2]=a[2]-g[2]*r)}if(a[0]+=g[0]*cm,a[1]+=g[1]*cm,a[2]+=g[2]*cm,g[1]>.7&&Math.hypot(l[0],l[1],l[2])<r1){l[0]=l[1]=l[2]=0,t.resting=!0,s.rested=!0;return}f*=1-y}}}function yP(t,e,n,i=H.grenade){return a1(t,e,n,i,hm),hm.clank?"clank":hm.rested?"rest":null}var bP={pos:[0,0,0],vel:[0,0,0],prevPos:[0,0,0],resting:!1,fuse:0},yc={clank:!1,rested:!1,up:!1,upPos:[0,0,0]};function l1(t,e,n,i=H.grenade,s){let r=bP;for(let h=0;h<3;h++)r.pos[h]=t[h],r.vel[h]=e[h],r.prevPos[h]=t[h];r.resting=!1;let o=Math.min(s.length,vP),a=Math.floor(Math.max(0,i.arcTime)*30+1e-9),l=0,c=null;for(let h=0;h<=a&&l<o;h++){let d=s[l++];if(d[0]=r.pos[0],d[1]=r.pos[1],d[2]=r.pos[2],h===a||r.resting)break;for(let u=0;u<2;u++)a1(r,1/60,n,i,yc),!c&&yc.up&&(c=[yc.upPos[0],yc.upPos[1],yc.upPos[2]])}return{count:l,land:c}}function c1(t,e=H.grenade){return t>=0?t<=e.killRadius?e.killDamage:t>=e.radius?0:e.damage*(1-t/e.radius):0}function h1(t,e,n,i=H.grenade){let s=e[0]-t[0],r=e[2]-t[2],o=e[1]-t[1],a=s*Math.sin(n)+r*Math.cos(n),l=Math.abs(s*Math.cos(n)-r*Math.sin(n));if(!(a>.01)||l>.3)return null;let c=i.throwSpeed,h=i.gravity,d=p=>{let v=Math.cos(p);return a*Math.tan(p)-h*a*a/(2*c*c*v*v)},u=-30*Ia,f=Math.min(70*Ia,Math.atan(c*c/(h*a)));if(!(f>u)||d(u)>o||d(f)<o)return null;let m=u,y=f;for(let p=0;p<50;p++){let v=(m+y)/2;d(v)<o?m=v:y=v}let g=(m+y)/2;return Math.abs(d(g)-o)<=.3?g-i.throwLift*Ia:null}function u1(t=H.grenade){let e=[];return{live:e,throw(n,i,s=t.fuse,r=null){let o={pos:[n[0],n[1],n[2]],vel:[i[0],i[1],i[2]],prevPos:[n[0],n[1],n[2]],resting:!1,fuse:s,hostile:r};return e.push(o),o},step(n,i){let s=[];for(let r=0;r<e.length;r++){let o=e[r];o.fuse-=n;let a=yP(o,n,i,t);a==="clank"&&!o.hostile&&s.push({type:"clank",pos:[o.pos[0],o.pos[1],o.pos[2]]}),o.hostile&&(a!==null||o.pos[1]<=t.ballRadius+.02)&&(o.fuse=0),o.fuse<=1e-9&&(s.push(o.hostile?{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]],hostile:o.hostile}:{type:"explode",pos:[o.pos[0],o.pos[1],o.pos[2]]}),e.splice(r--,1))}return s},reset(){e.length=0}}}function d1(t=H.grenade){let e={count:Math.min(t.start,t.carry),take(){return e.count<=0?!1:(e.count--,!0)},refill(){e.count=t.carry},reset(){e.count=Math.min(t.start,t.carry)}};return e}var f1=1.49,p1=.2;function m1(t,{spacing:e,cornerZone:n}){e=Math.max(p1,Number.isFinite(e)?e:p1);let i={cornerZone:n},s=[],r=(o,a,l)=>{let c=wi(o,a);s.push({index:s.length,edgeId:o.id,kind:o.kind,t:a,end:l,pos:[c[0],c[1]],normal:o.normal,tangent:o.tangent,height:o.height})};return t.forEach(o=>{if(o.kind==="low"){let a=Math.max(1,Math.floor(o.length/e+1e-9));for(let l=0;l<a;l++){let c=l*e;r(o,c,Cr(o,c,i))}r(o,o.length,Cr(o,o.length,i))}else o.openA&&r(o,0,-1),o.openB&&r(o,o.length,1)}),s}function go(t,e,n=[0,0]){let i=t.kind==="low"?0:t.end*e;return n[0]=t.pos[0]+t.tangent[0]*i,n[1]=t.pos[1]+t.tangent[1]*i,n}function gn(t,e,n){let i=n[0]-e[0],s=n[1]-e[1],r=n[2]-e[2],o=Math.hypot(i,s,r);return o<1e-9?!0:Xn(e,[i/o,s/o,r/o],o,t,[]).t>=o-1e-6}function Fd(t,e,n,i=H){let s=[t.pos[0],t.kind==="low"?i.combat.crouchHead:f1,t.pos[1]],r=go(t,i.associate.popShift),o=[r[0],f1,r[1]];return{protected:!gn(n,s,e),canShoot:gn(n,o,e)}}var _P=Math.PI/180,MP=1.5,Ud=[0,0,0],Bd=[0,0,0],wP={bash:t=>[t.melee.bashRange,t.melee.bashAngle],cutter:t=>[t.melee.cutterReach,t.melee.cutterAngle],finish:t=>[t.melee.executeRange,t.melee.executeAngle]};function bc(t,e,n,i,s,r=H){let[o,a]=wP[t](r),l=a*_P/2,c=null,h=1/0;for(let d of i){if(!d.alive||d.state==="unused"||d.state==="executed")continue;let u=d.state==="downed";if(t==="finish"&&!u)continue;let f=d.pos[0]-e[0],m=d.pos[2]-e[2],y=Math.hypot(f,m);y>o||y>=h||y>1e-6&&Math.abs(Mi(Math.atan2(f,m)-n))>l+1e-9||(Ud[0]=e[0],Ud[1]=e[1]+1,Ud[2]=e[2],Bd[0]=d.pos[0],Bd[1]=d.pos[1]+(u?.3:1),Bd[2]=d.pos[2],gn(s,Ud,Bd)&&(c=d,h=y))}return c}function g1({downed:t,clear:e,tobble:n,pos:i,yaw:s,enemies:r,boxes:o,t:a=H}){if(t)return{kind:"giveUp",hold:!0,target:null};if(e)return{kind:"again",hold:!1,target:null};if(n&&n.downed){let c=a.tobble?.playerReviveRange??MP;if(Math.hypot(n.pos[0]-i[0],n.pos[2]-i[2])<=c)return{kind:"reviveTobble",hold:!0,target:n}}let l=bc("finish",i,s,r,o,a);return l?{kind:"finish",hold:!1,target:l}:{kind:null,hold:!1,target:null}}function v1(){let t=!1;return{step({equipPressed:n=!1,switched:i=!1,count:s=0,blocked:r=!1}={}){return r?(t=!1,t):(i?t=!1:n&&(t=t?!1:s>0),t&&s<=0&&(t=!1),t)},equipped:()=>t,reset(){t=!1}}}function x1({equipped:t,aimHeld:e,firePressed:n,grenadeHeld:i,wasArmed:s}){return t?{aiming:!!e,throwNow:!!n}:{aiming:!!i,throwNow:!!s&&!i}}function y1({bossArena:t=!1,boss:e=null,ending:n="off",desk:i=null,exit:s=null,gateOpen:r=!1}={}){return t?n==="desk"&&i?{kind:"desk",pos:[(i.x0+i.x1)/2,1.2,i.z],label:"CANCELLATION DESK"}:e&&e.alive?{kind:"boss",pos:[e.pos[0],e.pos[1]+1.6,e.pos[2]],label:"OVERLORD"}:null:r&&s?{kind:"gate",pos:[s.pos[0],1.6,s.pos[2]],label:"GO"}:null}function b1(t,e,n=.35){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2],o=Math.hypot(i,r),a=Math.hypot(o,s);if(!(a>1e-6))return null;let l=o>1e-6?Math.atan2(i,r):null,c=Math.max(-n,Math.min(n,Math.asin(s/a)));return{yaw:l,pitch:c}}function _1({finishTarget:t=!1,objective:e=null}={}){return t?"finish":e?"look":null}function M1(t,e,n=!1,i=.06){let s=n?-t:t,r=n?-e:e;(!Number.isFinite(s)||!Number.isFinite(r))&&(s=0,r=0);let o=1-2*i;if(n||Math.abs(s)>o||Math.abs(r)>o){let l=Math.max(Math.abs(s)/o,Math.abs(r)/o,1e-9),c=s/l,h=r/l;return{x:(c+1)/2,y:(1-h)/2,off:!0,angle:Math.atan2(s,r)}}return{x:(s+1)/2,y:(1-r)/2,off:!1,angle:0}}function w1({held:t=!1,blocked:e=!1,objective:n=null,tobble:i=null}={}){if(!t||e)return{show:!1,items:[]};let s=[];return n&&s.push({id:"objective",kind:n.kind,label:n.label,pos:n.pos}),i&&s.push({id:"tobble",kind:"tobble",label:i.downed?"TOBBLE DOWN":"TOBBLE",pos:[i.pos[0],i.pos[1]+1.5,i.pos[2]],frac:Math.max(0,Math.min(1,i.frac)),down:!!i.downed}),{show:!0,items:s}}var fm=t=>t<0?0:t>1?1:t,dm=new Set(["move","sprint"]),zd=new Set(["move","sprint","cover"]);function SP({device:t="kbm",grenadeHeld:e=!1,equipped:n=!1,interact:i=null,reviving:s=!1,revving:r=!1,bashTarget:o=!1,cutterNear:a=!1,regretInHand:l=!1,holdFrac:c=0}={}){let h=(d,u=null)=>({text:lo(d,t),hold:u});return e?h("throw"):n?h("equipped"):s||i&&i.kind==="reviveTobble"?h("reviveTobble",s?fm(c):0):i&&i.kind==="finish"?h("finish"):r?h("revving"):o?h("bash"):l&&a?h("rev"):null}function S1({mover:t,fight:e,arsenal:n,bag:i,cam:s,sfx:r,effects:o,views:a=[],health:l,playerView:c=null,grenadeView:h=null,boxes:d,hooks:u={}}){let f=dd(),m=Array.from({length:64},()=>[0,0,0]),y=[0,0,0],g=[0,0,0],p=[0,0,0],v=[0,1,0],_=0,M=0,S="kbm",E=!1,x=0,b=0,P=!1,L=0,C=!1,w=null,D=v1(),k=!1,I=null,F=0,z=0,$=[0,0,0],X=[0,0,1],j={count:0,land:null,show:!1},W=null,ee=0,Me=()=>{u.restart&&u.restart()},te=we=>{u.marker&&u.marker(we)},oe=(we,_e=1)=>(p[0]=we.pos[0],p[1]=we.pos[1]+_e,p[2]=we.pos[2],p),be=we=>{let _e=we.pos[0]-t.pos[0],Re=we.pos[2]-t.pos[2],Le=Math.hypot(_e,Re)||1;return v[0]=_e/Le,v[1]=.5,v[2]=Re/Le,v};function Oe(){w&&w.e.state==="executed"&&e.releaseExecution(w.e),w=null}function ne(we){return c&&typeof c.bladePos=="function"?c.bladePos($):oe(we)}function Ce(we,_e){if(!_e){I&&(I.stop(),I=null),F=0;return}I||(I=typeof r.motor=="function"?r.motor():null),F+=we,I&&I.update(_e,Math.min(1,F/Math.max(H.feedback.motorRevTime,.001)),H.feedback.motorVolume)}function Fe(){Ce(0,null)}function Be(we,_e,Re){if(!e.beginExecution(we))return!1;if(!t.execute([we.pos[0],we.pos[2]],_e))return e.releaseExecution(we),!1;if(w={e:we,kind:Re,gelT:0,sfxT:0},Re==="cut"){let Le=H.feedback,q=ne(we);o.gel(q,be(we),Le.grindGelCount*2),typeof o.spark=="function"&&o.spark(q,be(we),Le.grindSparkCount*2),u.rumble&&u.rumble(Le.grindRumble,.2)}return!0}function Xe(we){let _e=H.feedback;if(we.type==="bashHit"){let Re=bc("bash",t.pos,_,e.enemies,d);if(s.bump(),r.play("bash",_e.bashVolume),!Re)return;let Le=e.bash(Re);o.gel(oe(Re),be(Re),_e.gelCount),Le==="hit"&&te("body")}else if(we.type==="executeDone"){let Re=w;if(w=null,!Re)return;s.bump(1.5),e.finishExecution(Re.e),Re.kind==="stomp"&&r.play("finish",_e.bashVolume)}else we.type==="reviveDone"&&e.reviveTobble()&&r.play("revive",_e.reviveVolume)}function Ye(){if(!(L>0)){if(!i.take()){r.play("dry",H.feedback.reloadVolume);return}Od(t,_,H.combat,y),um(_,M,H.grenade,g),e.throwGrenade(y,g),c&&c.throwNow(),r.play("throw",H.feedback.throwVolume),s.kick(1.5,0),L=H.grenade.throwTime}}function me(){h&&h.arc(m,j.count,j.land,j.show)}function Pe(){let we=H.melee.promptRange;for(let _e of e.enemies){if(!_e.alive||_e.state==="unused"||_e.state==="downed"||_e.state==="executed")continue;let Re=_e.pos[0]-t.pos[0],Le=_e.pos[2]-t.pos[2],q=Math.hypot(Re,Le);if(!(q>we)&&(q<.5||Math.cos(Math.atan2(Re,Le)-_)>=.5))return!0}return!1}function ke(){f.reset(),E=!1,x=0,b=0,P=!1,L=0,C=!1,w=null,D.reset(),k=!1,Ce(0,null),z=0,j={count:0,land:null,show:!1},W=null,ee=0,me()}function xe(we,_e){_=_e.camYaw,M=_e.camPitch||0,S=_e.device||"kbm";let Re=t,Le=H.melee,q=H.grenade;L>0&&(L=Math.max(0,L-we)),j.show=!1,W=null,ee=0;let Je=D.step({equipPressed:!!_e.equipPressed,switched:!!_e.switched,count:i.count,blocked:l.downed});if(l.downed){w&&Oe(),f.reset(),E=!1,C=!1,x=0,D.reset(),k=!1,Ce(0,null),_e.interactHeld||(P=!0),b=_e.interactHeld&&P?b+we:0,ee=fm(b/Math.max(H.health.giveUpHold,.001)),me(),b>=H.health.giveUpHold-1e-9&&(b=0,Me());return}b=0,P=!1,w&&(Re.state!=="execute"||w.e.state!=="executed")&&Oe();let se=f.update(_e.meleeHeld,_e.meleePressed,we,Le.holdTime),ae=f.holding();_e.meleeHeld||(E=!1);let N=n.current()==="regret"&&n.reload===null&&!(n.switching>0);se&&Re.bash(_);let Z=!!_e.grenadeHeld||Je;Re.state==="rev"&&(!ae||E||!N||Z)?Re.rev(!1):ae&&!E&&N&&!Z&&L<=0&&dm.has(Re.state)&&Re.rev(!0);let K=H.feedback;if(Re.state==="rev"){Ce(we,"rev"),z-=we,z<=0&&(z=Math.max(K.revSparkEvery,.02),K.revSparkCount>0&&typeof o.spark=="function"&&(ne({pos:Re.pos}),X[0]=Math.sin(Re.facing),X[1]=.7,X[2]=Math.cos(Re.facing),o.spark($,X,K.revSparkCount)));let re=bc("cutter",Re.pos,Re.facing,e.enemies,d);re&&Be(re,Le.cutTime,"cut")&&r.play("cut",K.cutVolume)}else z=0;if(w&&Re.state==="execute"){let re=H.feedback;if(w.gelT-=we,w.sfxT-=we,w.kind==="cut"){if(Ce(we,"grind"),w.gelT<=0){w.gelT=Math.max(re.cutGelEvery,.02);let Ne=ne(w.e);o.gel(Ne,be(w.e),re.grindGelCount),typeof o.spark=="function"&&re.grindSparkCount>0&&o.spark(Ne,be(w.e),re.grindSparkCount);let Y=H.camera.bump.amount;Y>0&&s.bump(re.executeShake/Y),u.rumble&&u.rumble(re.grindRumble,Math.max(re.cutGelEvery*2,.08))}w.sfxT<=0&&(w.sfxT=.3,r.play("cut",re.cutVolume))}}Re.state!=="rev"&&!(w&&w.kind==="cut"&&Re.state==="execute")&&Ce(we,null);let ye=e.tobble,R=g1({downed:!1,clear:e.clear&&!e.boss,tobble:ye,pos:Re.pos,yaw:Re.facing,enemies:e.enemies,boxes:d});if(R.kind==="again"&&_e.interactPressed){Me();return}let T=R.kind==="finish"&&zd.has(Re.state),V=!!_e.objectivePressed||S!=="pad"&&!!_e.interactPressed;if(T&&V)Be(R.target,Le.finishTime,"stomp")&&s.bump(.6);else if(_e.objectivePressed&&zd.has(Re.state)){let re=u.objective?u.objective():null;_1({finishTarget:T,objective:re})==="look"&&u.lookAt&&u.lookAt(re)}R.kind==="reviveTobble"&&_e.interactHeld&&zd.has(Re.state)&&Re.reviveTobble(ye.pos);let ie=Re.state==="reviveTobble";ie&&(ee=fm(Re.stateTime/Math.max($0(),.001)));let J=C,fe=x1({equipped:Je,aimHeld:_e.aimHeld,firePressed:_e.firePressed,grenadeHeld:_e.grenadeHeld,wasArmed:J});if(k=fe.aiming,C=fe.aiming&&Re.grenadeAim,fe.throwNow&&(Je||J)&&(Ye(),D.equipped()&&i.count<=0&&D.step({count:0})),C&&i.count>0){Od(Re,_,H.combat,y),um(_,M,q,g);let re=l1(y,g,d,q,m);j={count:re.count,land:re.land,show:!0}}me();let Se=zd.has(Re.state),ce=dm.has(Re.state)&&L<=0;W=SP({device:S,grenadeHeld:C&&i.count>0,equipped:D.equipped()&&i.count>0,interact:Se?R:null,reviving:ie,revving:Re.state==="rev",bashTarget:dm.has(Re.state)&&Re.bashReadyAt<=Re.clock&&!!bc("bash",Re.pos,_,e.enemies,d),cutterNear:ce&&Pe(),regretInHand:N,holdFrac:ee})}function Ee(){t.state==="rev"&&(t.rev(!1),E=!0)}function qe(we,_e){let Re=null;for(let Le=0;Le<3;Le++){Od(t,_,H.combat,y);let q=Math.atan2(we-y[0],_e-y[2]);if(_=q,Re=h1(y,[we,H.grenade.ballRadius,_e],q),Re===null)return!1}return s.yaw=_,s.pitch=Re,!0}return{step:xe,reset:ke,silence:Fe,onAction:Xe,onPlayerHit:Ee,aimThrow:qe,prompt:()=>W,arc:()=>({count:j.count,land:j.land,show:j.show}),busy:()=>L>0,armed:()=>C&&i.count>0,handKb:()=>(C||D.equipped())&&i.count>0,equipped:()=>D.equipped(),grenadeIntent:()=>k,status:()=>({revving:t.state==="rev",grinding:!!w&&w.kind==="cut"&&t.state==="execute"}),giveUpFrac:()=>l.downed?ee:null,execution:()=>w?{id:w.e.id,kind:w.kind}:null}}function T1(t=H.health){let e=-1,n=0,i=0,s=!1,r={hp:t.max,downed:!1,downT:0,sinceHit:0,fraction(){return t.max>0?Math.max(0,Math.min(1,r.hp/t.max)):0},damage(o){return r.downed||!(o>0)?null:(r.hp-=o,r.sinceHit=0,e=-1,n=0,t.godMode>0?(r.hp<1&&(r.hp=1),"hit"):r.hp>0?"hit":(r.hp=0,r.downed=!0,r.downT=t.downedTime,i=0,s=!1,"downed"))},revive(){return r.downed?(r.downed=!1,r.downT=0,i=0,s=!1,r.hp=Math.max(1,t.reviveHealth*t.max),r.sinceHit=0,e=-1,n=0,!0):!1},update(o,{standIn:a=!0}={}){return(!(o>0)||!Number.isFinite(o))&&(o=0),r.downed?(r.downT=Math.max(0,r.downT-o),a&&t.standInRevive>0&&(i+=o,i>=t.reviveTime)?(r.revive(),"revived"):r.downT<=0&&!s?(s=!0,"bleedOut"):null):(r.sinceHit+=o,r.hp<t.max&&r.sinceHit>=t.regenDelay&&(e<0&&(e=r.hp,n=0),n+=Math.min(o,r.sinceHit-t.regenDelay),r.hp=t.regenTime>0&&n<t.regenTime?e+(t.max-e)*n/t.regenTime:t.max),r.hp>=t.max&&(r.hp=t.max,e=-1),null)},reset(){r.hp=t.max,r.downed=!1,r.downT=0,r.sinceHit=0,e=-1,n=0,i=0,s=!1}};return r}var TP=new Set(["cover","coverSlide","coverSwap"]),EP=[],AP=mm(),RP=mm(),Hd=[null];function mm(){return{alive:!0,shapes:{head:{c:[0,0,0],r:pt.head.r},body:{a:[0,0,0],b:[0,0,0],r:pt.body.r}}}}function E1(t){return TP.has(t.state)?Zs(t):null}function pm(t,e,n,i,s){let r=t.shapes;return r.head.r=pt.head.r,r.body.r=pt.body.r,r.head.c[0]=e[0],r.head.c[1]=e[1]+n,r.head.c[2]=e[2],r.body.a[0]=e[0],r.body.a[1]=e[1]+i,r.body.a[2]=e[2],r.body.b[0]=e[0],r.body.b[1]=e[1]+s,r.body.b[2]=e[2],t}function Gd(t,e=mm(),n=H.combat){let i=E1(t),s=!!i&&i.kind==="low"&&!(t.cover&&t.cover.pop>=.5);return e.alive=!0,s?pm(e,t.pos,n.crouchHead,.1,n.crouchBodyTop):pm(e,t.pos,pt.head.cy,pt.body.ay,pt.body.by)}function A1(t,e,n,i,s,r=H.combat){let o=E1(s),a=!!o&&e[0]*o.normal[0]+e[2]*o.normal[1]>0;if(a&&!(s.cover&&s.cover.exposed))return Xn(t,e,n,i,EP);if(!a)return Hd[0]=Gd(s,AP,r),Xn(t,e,n,i,Hd);let l=pt.body.by;return Hd[0]=pm(RP,s.pos,pt.head.cy,l-r.shoulderDrop,l),Xn(t,e,n,i,Hd)}var R1=.9;function vo(t,e,n,i){return Ni(t,[e[0],R1,e[1]],[n[0],R1,n[1]],i)===1}var _c=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function C1(t,e,{radius:n,linkMax:i}){let s=t.map(o=>[o[0],o[1]]),r=s.map(()=>[]);for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++)_c(s[o],s[a])<=i&&vo(e,s[o],s[a],n)&&(r[o].push(a),r[a].push(o));return{nodes:s,links:r}}function CP(t,e,n,i,s){let{nodes:r,links:o}=t,a=new Array(r.length).fill(1/0),l=new Array(r.length).fill(-1),c=new Array(r.length).fill(!1),h=new Array(r.length).fill(!1);for(let g of n)h[g]=!0;let d=[];for(let g of e)a[g]=_c(i,r[g]),d.push(g);let u=g=>a[g]+_c(r[g],s),f=-1,m=1/0;for(;d.length;){let g=0;for(let v=1;v<d.length;v++){let _=d[v],M=d[g],S=u(_),E=u(M);(S<E-1e-12||Math.abs(S-E)<=1e-12&&_<M)&&(g=v)}let p=d.splice(g,1)[0];if(!c[p]){if(u(p)>=m)break;if(c[p]=!0,h[p]){let v=a[p]+_c(r[p],s);(v<m-1e-12||Math.abs(v-m)<=1e-12&&p<f)&&(f=p,m=v)}for(let v of o[p]){if(c[v])continue;let _=a[p]+_c(r[p],r[v]);_<a[v]-1e-12&&(a[v]=_,l[v]=p,d.push(v))}}}if(f<0)return null;let y=[];for(let g=f;g>=0;g=l[g])y.push(g);return y.reverse()}function xo(t,e,n,i,s){if(vo(e,n,i,s))return[[i[0],i[1]]];let{nodes:r}=t,o=[],a=[];if(r.forEach((u,f)=>{vo(e,n,u,s)&&o.push(f),vo(e,u,i,s)&&a.push(f)}),!o.length||!a.length)return null;let l=CP(t,o,a,n,i);if(!l)return null;let c=[...l.map(u=>r[u]),i],h=[],d=n;for(let u=0;u<c.length;u++){let f=c[u+1];f&&vo(e,d,f,s)||(h.push([c[u][0],c[u][1]]),d=c[u])}return h}var vm=new Set(["executed","unused","dead"]),P1=1.3,Dr=1e-9,I1=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]),qd=(t=H)=>t.associate.radius*t.trainer.scaleW,L1=(t=H)=>t.associate.height*t.trainer.scaleH;function ns(t,e){t.state=e,t.stateT=0}function xm(t,e=H){return t.kind="trainer",t.health=e.trainer.health,t.strikeAt=-1,t.windupLen=0,t.struckAt=-1/0,t.retargetT=0,t.repathT=0,t.forcePathT=0,t.stuckCount=0,t.target="player",t.path=[],t.pathI=0,t.point=null,t.pop=0,t.blind=0,t.role="hold",t}function k1(t,e=H.combat,n=H){let[i,s,r]=t.pos,o=t.shapes,a=n.trainer.scaleW,l=n.trainer.scaleH;return o.head.r=pt.head.r*a+e.hitPad,o.body.r=pt.body.r*a+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+pt.head.cy*l,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+pt.body.ay*l,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+pt.body.by*l,o.body.b[2]=r,o}var ym=t=>t.tobble&&!t.tobble.downed?t.tobble:null,D1=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,PP=(t,e)=>t.target==="tobble"?!ym(e):e.player.downed;function N1(t,e,n){let i=e.player,s=ym(e);return i.downed?s?"tobble":null:s&&I1(t.pos,s.pos)<I1(t.pos,i.pos)*n.preferDoc?"tobble":"player"}function O1(t,e,n){e.events.push({type:"bark",id:t.id,key:n})}function Mc(t,e,n,i){let s=N1(t,e,n);if(!s){ns(t,"idle");return}t.target=s,t.retargetT=n.retargetTime,t.repathT=0,t.path=[],t.pathI=0,ns(t,"run"),i&&e.rand()<n.barkChance&&O1(t,e,"trainerCharge")}function IP(t,e,n,i){i[0]=i[1]=0;let s=n.avoidRadius;if(!(s>0))return i;let r=(a,l,c)=>{let h=t.pos[0]-a,d=t.pos[2]-l,u=Math.hypot(h,d);if(u>=s||u<1e-6)return;let f=(s-u)/s*c/u;i[0]+=h*f,i[1]+=d*f};for(let a of e.others||[])a!==t&&a.alive&&a.state!=="unused"&&a.state!=="executed"&&a.state!=="dead"&&r(a.pos[0],a.pos[2],1);t.target!=="player"&&!e.player.downed&&r(e.player.pos[0],e.player.pos[2],1);let o=ym(e);return o&&t.target!=="tobble"&&r(o.pos[0],o.pos[2],1),i}var gm=[0,0],Vd=[0,0],Wd=[0,0],Xd=[0,0,0],Yd=[0,0,0];function LP(t,e,n,i){return Math.hypot(i[0]-t.pos[0],i[2]-t.pos[2])>n.swingRange?!1:(Xd[0]=t.pos[0],Xd[1]=t.pos[1]+P1,Xd[2]=t.pos[2],Yd[0]=i[0],Yd[1]=t.pos[1]+P1,Yd[2]=i[2],gn(e.boxes,Xd,Yd))}function kP(t,e,n){let i=e.now+n.windup,s=(e.others||[]).filter(r=>r!==t&&r.kind==="trainer"&&r.alive);for(let r=0;r<=s.length;r++){let o=!1;for(let a of s)for(let l of[a.struckAt,a.state==="windup"?a.strikeAt:-1/0])Number.isFinite(l)&&Math.abs(i-l)<n.swingGap-Dr&&(i=l+n.swingGap,o=!0);if(!o)break}t.strikeAt=i,t.windupLen=Math.max(n.windup,i-e.now),ns(t,"windup"),e.events.push({type:"telegraph",id:t.id,kind:"trainer",time:t.windupLen}),O1(t,e,"trainerWindup")}function DP(t,e,n,i,s){if(t.retargetT-=i,t.repathT-=i,t.forcePathT-=i,t.retargetT<=0||PP(t,e)){let g=N1(t,e,n);if(!g){ns(t,"idle");return}t.target=g,t.retargetT=n.retargetTime}let r=D1(t,e);if(LP(t,e,n,r)){kP(t,e,n);return}let o=qd(s),a=L1(s);Vd[0]=t.pos[0],Vd[1]=t.pos[2],Wd[0]=r[0],Wd[1]=r[2];let l=r[0],c=r[2];if(t.forcePathT>0||!vo(e.boxes,Vd,Wd,o*.9)){for((t.repathT<=0||!t.path.length)&&(t.path=xo(e.graph,e.boxes,Vd,Wd,o)||[[r[0],r[2]]],t.pathI=0,t.repathT=n.repathTime);t.pathI<t.path.length-1&&Math.hypot(t.path[t.pathI][0]-t.pos[0],t.path[t.pathI][1]-t.pos[2])<.35;)t.pathI++;l=t.path[t.pathI][0],c=t.path[t.pathI][1]}else t.path.length=0;let h=l-t.pos[0],d=c-t.pos[2],u=Math.hypot(h,d)||1;h/=u,d/=u,IP(t,e,n,gm),h+=gm[0]*n.avoidWeight,d+=gm[1]*n.avoidWeight;let f=Math.hypot(h,d)||1;h/=f,d/=f,t.yaw=jt(t.yaw,Math.atan2(h,d),n.turnRate*i);let m=n.runSpeed*i,y=Vn(e.boxes,t.pos,[h*m,0,d*m],o,a);t.pos[0]=y.pos[0],t.pos[2]=y.pos[2],t.stuckT+=i,t.stuckT>=n.stuckTime&&(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<n.runSpeed*n.stuckTime*.25&&(t.forcePathT=1,t.repathT=0,t.stuckCount++),t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2])}function NP(t,e,n,i){let s=D1(t,e);if(t.stateT<t.windupLen-n.lockTime){let r=s[0]-t.pos[0],o=s[2]-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=jt(t.yaw,Math.atan2(r,o),n.turnRate*i))}if(!(t.stateT<t.windupLen-Dr)){for(let r of e.others||[])if(r!==t&&r.kind==="trainer"&&e.now-r.struckAt<n.swingGap-Dr)return;t.struckAt=e.now,t.strikeAt=-1,ns(t,"swing"),e.events.push({type:"trainerSwing",id:t.id,from:[t.pos[0],t.pos[1],t.pos[2]],yaw:t.yaw,reach:n.swingRange+n.swingSlack,arc:n.swingArc,target:t.target})}}function OP(t,e,n,i,s){let r=i.associate,o=Math.max(r.diveTime,.001),a=Math.max(t.stateT-s,r.diveReaction),l=Math.min(t.stateT,r.diveReaction+o);if(l>a){let c=r.diveDistance*(l-a)/o,h=Vn(e.boxes,t.pos,[t.diveDir[0]*c,0,t.diveDir[1]*c],qd(i),L1(i));t.pos[0]=h.pos[0],t.pos[2]=h.pos[2]}t.stateT>=r.diveReaction+o-Dr&&Mc(t,e,n,!1)}function F1(t,e,n){let i=e.tuning||H,s=i.trainer;switch(t.state){case"idle":e.started&&Mc(t,e,s,!0);break;case"spawn":t.stateT>=i.pad.riseTime-Dr&&Mc(t,e,s,!0);break;case"run":DP(t,e,s,n,i);break;case"windup":NP(t,e,s,n);break;case"swing":t.stateT>=s.swingTime-Dr&&ns(t,"recover");break;case"recover":t.stateT>=s.recover-Dr&&Mc(t,e,s,!1);break;case"stagger":t.stateT>=s.staggerTime-Dr&&Mc(t,e,s,!1);break;case"dive":OP(t,e,s,i,n);break;default:break}}function U1(t){return!t.alive||vm.has(t.state)?!1:(t.strikeAt=-1,ns(t,"stagger"),!0)}function B1(t,e){if(!t.alive||vm.has(t.state)||t.state==="dive")return!1;t.strikeAt=-1,t.path=[],t.pathI=0;let n=t.pos[0]-e[0],i=t.pos[2]-e[2],s=Math.hypot(n,i);return s<1e-6?(n=Math.sin(t.yaw),i=Math.cos(t.yaw)):(n/=s,i/=s),t.diveDir[0]=n,t.diveDir[1]=i,t.yaw=Math.atan2(n,i),ns(t,"dive"),!0}function z1(t){return!t.alive||vm.has(t.state)||t.state==="dive"?!1:(t.strikeAt=-1,t.wasDowned=!1,ns(t,"executed"),!0)}function H1(t){return!t.alive||t.state!=="executed"?!1:(ns(t,"recover"),!0)}function G1(t,e,n){return t.alive=!1,t.strikeAt=-1,t.pop=0,t.blind=0,ns(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),e.events.push({type:"bark",id:t.id,key:"trainerDeath"}),"kill"}function V1(t,e,n="execute"){return!t.alive||t.state!=="executed"?null:(t.health=0,G1(t,e,n))}function W1(t,e,n,i="body"){return!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:(t.health-=e,t.health<=0?(t.health=0,G1(t,n,i)):"hit")}var Js=1e-9,Y1=8,FP=t=>Math.max(0,Math.min(1,t));var q1=(t=H)=>t.associate.radius*t.boss.scale;function Es(t,e){t.state=e,t.stateT=0}var yo=(t,e,n,i=!0)=>e.events.push(i?{type:"bark",id:t.id,key:n,force:!0}:{type:"bark",id:t.id,key:n}),$1=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function K1(t,e=H){return t.kind="boss",t.health=e.boss.health,t.phase=1,t.invuln=!1,t.spot=0,t.nextSpot=0,t.shiftPending=!1,t.shiftT=1,t.shiftFrom=[t.start[0],t.start[2]],t.sinceLob=0,t.offers=0,t.saunasOpen=!1,t.lobTo=[0,0,0],t.lobSent=!1,t.wait=0,t.pop=0,t.blind=0,t.role="hold",t.point=null,t.path=[],t.pathI=0,t.target="player",t.shots=0,t.bursts=0,t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t}function Z1(t,e=H.combat,n=H){let[i,s,r]=t.pos,o=t.shapes,a=n.boss,l=a.scale,c=a.scale*(a.crouchY+(1-a.crouchY)*FP(t.pop));return o.head.r=pt.head.r*l+e.hitPad,o.body.r=pt.body.r*l+e.hitPad,o.head.c[0]=i,o.head.c[1]=s+pt.head.cy*c,o.head.c[2]=r,o.body.a[0]=i,o.body.a[1]=s+pt.body.ay*c,o.body.a[2]=r,o.body.b[0]=i,o.body.b[1]=s+pt.body.by*c,o.body.b[2]=r,o}function j1(t,e,n){let i=e.bossLevel.spots[t.spot];t.pos[0]=i.hide[0]+(i.pop[0]-i.hide[0])*n,t.pos[2]=i.hide[1]+(i.pop[1]-i.hide[1])*n}function Sc(t,e,n,i){let s=e-t.pos[0],r=n-t.pos[2];Math.hypot(s,r)>1e-6&&(t.yaw=jt(t.yaw,Math.atan2(s,r),Y1*i))}var bm=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos,J1=(t,e)=>t.target==="tobble"?!$1(e):e.player.downed,wc=[0,0,0];function UP(t,e,n){let i=$1(e),s=e.player,r=e.bossLevel.spots[t.shiftPending?t.nextSpot:t.spot];return wc[0]=r.pop[0],wc[1]=1.49*n.scale,wc[2]=r.pop[1],!s.downed&&gn(e.boxes,wc,s.chest)?"player":i&&gn(e.boxes,wc,i.chest)?"tobble":s.downed?null:"player"}function _m(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var La=t=>t.phase===3,Q1=(t,e)=>e.popTime+(La(t)?e.fastTelegraph:e.telegraphTime),X1=(t,e)=>La(t)?e.fastBurstTime:e.burstTime,BP=(t,e)=>La(t)?e.fastRate:e.rate,zP=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function Mm(t,e,n){Es(t,"tucked");let i=La(t)?n.fastWaitMin:n.coverWaitMin,s=La(t)?n.fastWaitMax:n.coverWaitMax;t.wait=i+Math.max(0,s-i)*e.rand()}function HP(t,e,n,i){if(t.pop>0?(t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001)),j1(t,e,t.pop)):t.shiftPending&&(t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.spot=t.nextSpot,t.shiftPending=!1,t.shiftT=0),t.pop<=0&&t.shiftT<1){t.shiftT=Math.min(1,t.shiftT+i/Math.max(n.shiftTime,.001));let r=e.bossLevel.spots[t.spot].hide;t.pos[0]=t.shiftFrom[0]+(r[0]-t.shiftFrom[0])*t.shiftT,t.pos[2]=t.shiftFrom[1]+(r[1]-t.shiftFrom[1])*t.shiftT}if(Sc(t,e.player.pos[0],e.player.pos[2],i),t.stateT<t.wait||t.pop>0||t.shiftT<1)return;let s=UP(t,e,n);if(s)if(t.target=s,t.shots=0,t.phase===1&&t.sinceLob>=n.lobEvery){let r=bm(t,e);t.lobTo[0]=r[0],t.lobTo[1]=0,t.lobTo[2]=r[2],t.lobSent=!1,Es(t,"lobWindup"),e.events.push({type:"telegraph",id:t.id,kind:"lob",time:n.popTime+n.lobWindup})}else Es(t,"telegraph"),_m(t,e,n,i,!0),e.events.push({type:"telegraph",id:t.id,kind:"boss",time:Q1(t,n)})}function $d(t,e,n,i){i&&(t.bursts++,t.sinceLob++,GP(t,e,n)),t.nextSpot=1-t.spot,t.shiftPending=!0,Mm(t,e,n)}function GP(t,e,n){!La(t)||t.offers>=3||(t.offers++,yo(t,e,"bossOffer"),t.offers===3&&(yo(t,e,"bossOfferTobble"),yo(t,e,"bossOfferDoc")))}function Kd(t,e,n,i){t.pop=Math.min(1,t.pop+i/Math.max(n.popTime,.001)),j1(t,e,t.pop)}function VP(t,e,n,i){Kd(t,e,n,i);let s=bm(t,e);if(Sc(t,s[0],s[2],i),_m(t,e,n,i,!1),J1(t,e)){$d(t,e,n,!1);return}t.stateT>=Q1(t,n)-Js&&(Es(t,"burst"),t.shots=0)}function WP(t,e,n,i,s){Kd(t,e,n,i);let r=bm(t,e);if(Sc(t,r[0],r[2],i),_m(t,e,n,i,!1),J1(t,e)){$d(t,e,n,!0);return}let o=t.muzzle,a=e.player;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp*n.scale,o[2]=t.pos[2];let l=zP(t.stateT,BP(t,n),X1(t,n)),c=t.target==="tobble"?0:Math.min(1,a.speed/s.move.sprint);for(;t.shots<l;){t.shots++;let h=t.aim[0]-o[0],d=t.aim[1]-o[1],u=t.aim[2]-o[2],f=Math.hypot(h,d,u)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[h/f,d/f,u/f],accurate:!0,target:t.target,spread:n.spread+s.associate.moveSpread*c,damage:n.damage})}t.stateT>=X1(t,n)-Js&&$d(t,e,n,!0)}function XP(t,e,n,i){if(Kd(t,e,n,i),Sc(t,t.lobTo[0],t.lobTo[2],i),t.stateT<n.popTime+n.lobWindup-Js)return;let s=t.muzzle;s[0]=t.pos[0],s[1]=t.pos[1]+n.muzzleUp*n.scale,s[2]=t.pos[2],t.lobSent=!0,e.events.push({type:"bossLob",id:t.id,from:[s[0],s[1],s[2]],to:[t.lobTo[0],0,t.lobTo[2]],flight:n.lobFlight,target:t.target}),t.sinceLob=0,Es(t,"lobRecover")}function YP(t,e,n,i){Kd(t,e,n,i),t.stateT>=n.lobRecover-Js&&$d(t,e,n,!1)}function e_(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2],a=Math.hypot(r,o),l=i*s;return a<=l+Js?(t.pos[0]=e,t.pos[2]=n,!0):(t.pos[0]+=r/a*l,t.pos[2]+=o/a*l,t.yaw=jt(t.yaw,Math.atan2(r,o),Y1*s),!1)}function qP(t,e,n,i){t.pop=Math.max(0,t.pop-i/Math.max(n.popTime,.001));let s=e.bossLevel.deskHide;e_(t,s[0],s[1],n.retreatSpeed,i)&&t.pop<=0&&(Es(t,"hiding"),t.saunasOpen=!0,e.events.push({type:"bossSaunas",id:t.id}))}function t_(t,e){t.phase=3,e.events.push({type:"bossPhase",id:t.id,phase:3})}function $P(t,e,n,i){Sc(t,e.player.pos[0],e.player.pos[2],i),!(t.stateT<n.minHide-Js||!(e.saunasDone&&e.saunasDone()))&&(t.invuln=!1,t.spot=e.player.pos[0]<0?0:1,t.shiftFrom[0]=t.pos[0],t.shiftFrom[1]=t.pos[2],t.shiftT=0,t.shiftPending=!1,Es(t,"return"),t.health<=n.phase3At*n.health+Js&&t_(t,e),yo(t,e,"bossReturn"))}function KP(t,e,n,i){let s=e.bossLevel.spots[t.spot].hide;e_(t,s[0],s[1],n.returnSpeed,i)&&(t.shiftT=1,Mm(t,e,n))}function n_(t,e,n){let i=e.tuning||H,s=i.boss;switch(t.state){case"idle":e.started&&(yo(t,e,"bossIntro"),Mm(t,e,s));break;case"tucked":HP(t,e,s,n);break;case"telegraph":VP(t,e,s,n);break;case"burst":WP(t,e,s,n,i);break;case"lobWindup":XP(t,e,s,n);break;case"lobRecover":YP(t,e,s,n);break;case"retreat":qP(t,e,s,n);break;case"hiding":$P(t,e,s,n);break;case"return":KP(t,e,s,n);break;default:break}}function ZP(t,e,n){return t.alive=!1,t.pop=0,t.invuln=!1,Es(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n,boss:!0}),yo(t,e,"bossDeath"),"kill"}function i_(t,e,n,i="body"){if(!t.alive||!(e>0)||t.state==="unused")return null;if(t.invuln)return"immune";let s=n.tuning||H,r=s.boss;if(t.health-=i==="head"?e*r.headMult:e,t.phase===1){let o=r.phase2At*r.health;return t.health<=o+Js&&(t.health=o,t.phase=2,t.invuln=!0,t.lobSent=!0,Es(t,"retreat"),n.events.push({type:"bossPhase",id:t.id,phase:2}),yo(t,n,"bossTeam")),"hit"}if(t.phase===2){let o=r.phase3At*r.health;return t.health<=o+Js&&(t.health=o,t_(t,n)),"hit"}return t.health<=0?(t.health=0,ZP(t,n,i)):"hit"}function wm(t){t.phase=3,t.invuln=!1,t.health=1,(t.state==="retreat"||t.state==="hiding")&&(Es(t,"tucked"),t.wait=0,t.pop=0)}var jP=.25,jd=new Set(["executed","unused","dead"]),JP=new Set(["cover","suppress","reload"]),Nr={r:.25,y:.25,back:.2,front:.6},QP=new Set(["idle","cover","telegraph","burst","suppress","reload","flinch"]),eI=new Set(["telegraph","burst","suppress"]),Am=t=>Math.max(0,Math.min(1,t)),As=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),s_=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function Rm(t,e=H.associate,n=H){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=Math.PI,t.state="idle",t.stateT=0,t.health=e.health,t.alive=!0,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.aim[0]=t.aim[1]=t.aim[2]=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckRef[0]=t.start[0],t.stuckRef[1]=t.start[2],t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.diveDir[0]=t.diveDir[1]=0,t.divePoint=null,t.claimed=!1,t.diedAt=-1/0,t.wasDowned=!1,t.kind=t.startKind,t.kind==="trainer"?xm(t,n):t.kind==="boss"&&K1(t,n),ka(t,n.combat,n),t}function Cm(t){return t.alive=!1,t.state="unused",t.stateT=0,t.health=0,t.pos[1]=t.prevPos[1]=-50,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.helping=null,t.claimed=!1,t.wasDowned=!1,t.kind="associate",ka(t),t}function Jd(t,e,n,i="associate"){let s=n.tuning||H,r=s.associate;for(let a=0;a<3;a++)t.pos[a]=e[a],t.prevPos[a]=e[a];let o=n.player;return t.yaw=t.prevYaw=o?Math.atan2(o.pos[0]-e[0],o.pos[2]-e[2]):Math.PI,t.state="spawn",t.stateT=0,t.health=r.health,t.alive=!0,t.claimed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.blind=0,t.role="hold",t.bursts=0,t.wait=0,t.wantSuppress=null,t.shots=0,t.relocT=0,t.pointT=0,t.mustMove=!1,t.stuckT=0,t.stuckCount=0,t.helper=null,t.helping=null,t.target="player",t.wasDowned=!1,t.diedAt=-1/0,t.divePoint=null,t.kind=i,i==="trainer"&&xm(t,s),ka(t,s.combat,s),t}function Pm({id:t,pos:e,kind:n="associate"},i=H.associate,s=H){let r={id:t,kind:n,startKind:n,strikeAt:-1,windupLen:0,struckAt:-1/0,retargetT:0,repathT:0,forcePathT:0,start:[e[0],e[1],e[2]],pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,health:0,alive:!0,point:null,path:[],pathI:0,pop:0,blind:0,role:"hold",bursts:0,aim:[0,0,0],shapes:{head:{c:[0,0,0],r:pt.head.r},body:{a:[0,0,0],b:[0,0,0],r:pt.body.r}},wait:0,wantSuppress:null,shots:0,relocT:0,pointT:0,mustMove:!1,stuckT:0,stuckRef:[0,0],stuckCount:0,chest:[0,0,0],muzzle:[0,0,0],helper:null,helping:null,target:"player",diveDir:[0,0],divePoint:null,claimed:!1,diedAt:-1/0,wasDowned:!1};return Rm(r,i,s)}function ka(t,e=H.combat,n=H){if(t.kind==="trainer")return k1(t,e,n);if(t.kind==="boss")return Z1(t,e,n);let[i,s,r]=t.pos,o=t.shapes;if(t.state==="downed"){let l=Math.sin(t.yaw),c=Math.cos(t.yaw);return o.body.r=Nr.r,o.head.r=pt.head.r,o.body.a[0]=i-l*Nr.back,o.body.a[1]=s+Nr.y,o.body.a[2]=r-c*Nr.back,o.body.b[0]=i+l*Nr.front,o.body.b[1]=s+Nr.y,o.body.b[2]=r+c*Nr.front,o.head.c[0]=o.body.b[0],o.head.c[1]=s+Nr.y,o.head.c[2]=o.body.b[2],o}let a=QP.has(t.state)&&t.point&&t.point.kind==="low"&&t.pop<.5;return o.head.r=pt.head.r+e.hitPad,o.body.r=pt.body.r+e.hitPad,o.head.c[0]=i,o.head.c[2]=r,o.body.a[0]=i,o.body.a[2]=r,o.body.b[0]=i,o.body.b[2]=r,a?(o.head.c[1]=s+e.crouchHead-e.hitPad,o.body.a[1]=s+.1,o.body.b[1]=s+e.crouchBodyTop):(o.head.c[1]=s+pt.head.cy,o.body.a[1]=s+pt.body.ay,o.body.b[1]=s+pt.body.by),o}function Sn(t,e){t.state=e,t.stateT=0}function Rs(t,e,n){e=Am(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var Or=(t,e)=>e>0?t/e:1;function Tc(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=jt(t.yaw,Math.atan2(r,o),i.turnRate*s))}function r_(t,e,n){let i=t.point.normal;t.yaw=jt(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function Cs(t,e){e.tokens.holds(t.id)&&e.tokens.release(t.id,e.now,e.director)}function Im(t,e){let n=e.player.pos;return t.chest[0]=n[0],t.chest[1]=n[1]+1.2,t.chest[2]=n[2],t.chest}function Qd(t,e){let n=e.tuning||H,i=n.associate,s=e.director||n.director,r=e.player,o=[r.pos[0],r.pos[2]],a=Im(t,e),l=t.point,c=As(l?l.pos:[t.pos[0],t.pos[2]],o),h=t.role,d=!!l&&(t.mustMove||h!=="hold"),u=[t.pos[0],t.pos[2]],f=Math.cos(s.flankAngle*Math.PI/180),m=Math.cos(s.flankMaxAngle*Math.PI/180),y=0,g=0;if(r.coverNormal)y=-r.coverNormal[0],g=-r.coverNormal[1];else{let S=0;for(let E of e.others||[])E.alive&&(y+=E.pos[0],g+=E.pos[2],S++);S?(y=y/S-o[0],g=g/S-o[1]):(y=t.pos[0]-o[0],g=t.pos[2]-o[1])}let p=Math.hypot(y,g)||1;y/=p,g/=p;let v=[];for(let[S,E]of e.reserved)E!==t.id&&v.push(e.points[S].pos);let _=null,M=-1/0;for(let S of e.points){let E=e.reserved.get(S.index);if(E!==void 0&&E!==t.id||d&&S.index===l.index||t.mustMove&&l&&As(S.pos,l.pos)<2*i.reserveRadius)continue;let x=As(S.pos,o);if(x<i.reserveRadius||x<i.minRange||x>i.maxRange)continue;let b=!1;for(let D of v)if(As(D,S.pos)<i.reserveRadius){b=!0;break}if(b)continue;let P=((S.pos[0]-o[0])*y+(S.pos[1]-o[1])*g)/x;if(h==="flank"?P<m:P<0)continue;let L=0;if(h==="push"){let D=c-x;if(D<2)continue;L=2*D}else if(h==="flank"){if(!r.coverNormal||P>f)continue;L=10}let C=Fd(S,a,e.boxes,n);if(!C.protected||!C.canShoot)continue;let w=-As(u,S.pos)-.5*Math.abs(x-i.preferRange)+L;w>M+1e-9&&(M=w,_=S)}return _?{point:_,score:M}:null}function tI(t,e){let n=Qd(t,e);return n?n.point:null}function Sm(t,e,n){let i=e.tuning||H,s=[t.pos[0],t.pos[2]],r=Im(t,e),o=null,a=1/0;for(let l of e.points){let c=e.reserved.get(l.index);if(c!==void 0&&c!==t.id)continue;let h=As(s,l.pos);h>=a||n&&!Fd(l,r,e.boxes,i).protected||(a=h,o=l)}return o}function Qs(t,e,n){Sn(t,"cover"),t.blind=0,t.wantSuppress=null,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function Ti(t,e,n){Cs(t,e),Rs(t,0,n),t.blind=0;let i=t.stuckCount>=3?Sm(t,e,!1):tI(t,e);if(!i){t.mustMove=!1,t.role!=="hold"&&(t.role="hold");let r=t.point?e.reserved.get(t.point.index):null;if(t.point&&(r===void 0||r===t.id)&&As(t.point.pos,[t.pos[0],t.pos[2]])<=.5){e.reserved.set(t.point.index,t.id),Qs(t,e,n);return}if(i=Sm(t,e,!0)||Sm(t,e,!1),!i){if(t.point&&e.reserved.get(t.point.index)!==t.id&&e.reserved.has(t.point.index)){t.point=null,Sn(t,"seek");return}Qs(t,e,n);return}}if(t.point&&t.point.index!==i.index&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),e.reserved.set(i.index,t.id),t.point=i,t.mustMove=!1,Math.hypot(i.pos[0]-t.pos[0],i.pos[1]-t.pos[2])<=n.arriveDist){o_(t,e,n);return}let s=t.stuckCount>=3?null:xo(e.graph,e.boxes,[t.pos[0],t.pos[2]],i.pos,n.radius);t.path=s||[[i.pos[0],i.pos[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],Sn(t,"run")}function o_(t,e,n){if(t.role==="revive"){Sn(t,"kneel");return}let i=t.point;t.pos[0]=i.pos[0],t.pos[2]=i.pos[1],t.role="hold",t.stuckCount=0,t.pointT=0,t.relocT=0,t.mustMove=!1,e.events.push({type:"arrive",id:t.id,point:i}),Qs(t,e,n)}function nI(t,e,n,i){if(t.role==="revive"){let r=h_(t,e);if(!r){er(t,e),Ti(t,e,n);return}if(s_(t.pos,r.pos)<=n.kneelReach){Sn(t,"kneel");return}}let s=n.runSpeed*i;for(let r=0;r<t.path.length+2;r++){let o=t.path[t.pathI],a=t.pathI===t.path.length-1,l=o[0]-t.pos[0],c=o[1]-t.pos[2],h=Math.hypot(l,c);if(h<=n.arriveDist){if(a){o_(t,e,n);return}t.pathI++;continue}Tc(t,o[0],o[1],n,i);let d=Math.min(s,h);if(d<=1e-9)break;let u=Vn(e.boxes,t.pos,[l/h*d,0,c/h*d],n.radius,n.height),f=Math.hypot(u.pos[0]-t.pos[0],u.pos[2]-t.pos[2]);if(t.pos[0]=u.pos[0],t.pos[2]=u.pos[2],s-=f,f<d*.5)break;f>=h-1e-9}if(t.stuckT+=i,t.stuckT>=n.stuckTime){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05){t.role==="revive"&&er(t,e),t.stuckCount++,Ti(t,e,n);return}t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}}function Lm(t,e,n,i,s){let r=e.player,o=t.target==="tobble"&&e.tobble?e.tobble.chest:r.exposed?r.head:r.chest,a=s||!(n.aimLag>0)?1:1-Math.pow(.5,i/n.aimLag);for(let l=0;l<3;l++)t.aim[l]+=(o[l]-t.aim[l])*a}var a_=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1),km=t=>t.tobble&&!t.tobble.downed?t.tobble:null;function iI(t,e,n){if(t.point){let i=go(t.point,(e.tuning||H).associate.popShift);n[0]=i[0],n[2]=i[1]}else n[0]=t.pos[0],n[2]=t.pos[2];return n[1]=1.49,n}var Tm=[0,0,0];function sI(t,e){let n=km(e),i=e.player;return n?(iI(t,e,Tm),!i.downed&&gn(e.boxes,Tm,i.chest)?"player":gn(e.boxes,Tm,n.chest)?"tobble":i.downed?null:"player"):i.downed?null:"player"}var l_=(t,e)=>t.target==="tobble"?!km(e):e.player.downed,c_=(t,e)=>t.target==="tobble"&&e.tobble?e.tobble.pos:e.player.pos;function rI(t,e,n,i,s){Rs(t,t.pop-Or(s,n.popTime),n),r_(t,n,s);let r=e.player;if(r.downed&&!km(e))return;if(!r.downed){if(t.pointT+=s,t.role!=="hold"){Ti(t,e,n);return}if(t.relocT+=s,t.relocT>=n.relocateCheck){t.relocT=0;let a=Fd(t.point,Im(t,e),e.boxes,e.tuning||H);if(!a.protected||!a.canShoot||As(t.point.pos,[r.pos[0],r.pos[2]])<n.reserveRadius){t.mustMove=!0,Ti(t,e,n);return}}if(t.pointT>=n.relocateAfter){t.mustMove=!0,t.pointT=0,Ti(t,e,n);return}}if(t.stateT<t.wait)return;if(t.wantSuppress===null&&(t.wantSuppress=e.rand()<n.suppressChance),t.bursts>=n.magBursts){Sn(t,"reload"),e.events.push({type:"bark",id:t.id,key:"reload"});return}let o=sI(t,e);if(o&&e.tokens.request(t.id,e.now,e.tokenCount,i)){t.target=o,Sn(t,"telegraph"),t.shots=0,Lm(t,e,n,s,!0),e.events.push({type:"telegraph",id:t.id});return}t.wantSuppress&&!r.downed&&(Sn(t,"suppress"),t.shots=0)}function Em(t,e,n,i){Cs(t,e),i&&t.bursts++,Qs(t,e,n)}function oI(t,e,n,i){Rs(t,t.pop+Or(i,n.popTime),n);let s=c_(t,e);if(Tc(t,s[0],s[2],n,i),Lm(t,e,n,i,!1),l_(t,e)||!e.tokens.holds(t.id)){Em(t,e,n,!1);return}t.stateT>=n.popTime+n.telegraphTime-1e-9&&(Sn(t,"burst"),t.shots=0)}function aI(t,e,n,i){let s=e.player;Rs(t,t.pop+Or(i,n.popTime),n);let r=c_(t,e);if(Tc(t,r[0],r[2],n,i),Lm(t,e,n,i,!1),l_(t,e)||!e.tokens.holds(t.id)){Em(t,e,n,!0);return}let o=t.muzzle;o[0]=t.pos[0],o[1]=t.pos[1]+n.muzzleUp,o[2]=t.pos[2];let a=a_(t.stateT,n.rate,n.burstTime),l=t.target==="tobble"?0:Math.min(1,s.speed/(e.tuning||H).move.sprint);for(;t.shots<a;){t.shots++;let c=t.aim[0]-o[0],h=t.aim[1]-o[1],d=t.aim[2]-o[2],u=Math.hypot(c,h,d)||1;e.events.push({type:"enemyShot",id:t.id,from:[o[0],o[1],o[2]],dir:[c/u,h/u,d/u],accurate:!0,target:t.target,spread:n.spread+n.moveSpread*l})}t.stateT>=n.burstTime-1e-9&&Em(t,e,n,!0)}function lI(t,e,n,i){let s=e.player;if(t.blind=Am(t.blind+Or(i,n.popTime)),Tc(t,s.pos[0],s.pos[2],n,i),s.downed){t.blind=0,Qs(t,e,n);return}let r=t.stateT-n.popTime;if(r<0&&t.blind<1)return;let o=t.point,a=Math.max(0,r),l=t.muzzle;l[0]=t.pos[0],l[2]=t.pos[2],l[1]=t.pos[1]+(o.kind==="low"?o.height+(e.tuning||H).combat.blindLift:n.muzzleUp);let c=a_(a,n.suppressRate,n.suppressTime);for(;t.shots<c;){t.shots++;let h=s.head[0]-l[0],d=s.head[1]-l[1],u=s.head[2]-l[2],f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let m=u,y=-h,g=Math.hypot(m,y);g<1e-6&&(m=1,y=0,g=1),m/=g,y/=g;let p=d*y,v=u*m-h*y,_=-d*m,M=2*Math.PI*e.rand(),S=n.suppressMiss*(1+.5*e.rand()),E=Math.cos(M)*S,x=Math.sin(M)*S,b=s.head[0]+m*E+p*x,P=s.head[1]+v*x,L=s.head[2]+y*E+_*x,C=b-l[0],w=P-l[1],D=L-l[2],k=Math.hypot(C,w,D)||1;e.events.push({type:"enemyShot",id:t.id,from:[l[0],l[1],l[2]],dir:[C/k,w/k,D/k],accurate:!1,spread:n.suppressSpread})}r>=n.suppressTime-1e-9&&(t.blind=0,Qs(t,e,n))}function h_(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);return n&&n.alive&&n.state==="downed"&&n.helper===t.id?n:null}function er(t,e){let n=(e.others||[]).find(i=>i.id===t.helping);n&&n.helper===t.id&&(n.helper=null),t.helping=null,t.role="hold"}function u_(t,e,n){let i=(n.tuning||H).associate;Cs(t,n),Rs(t,0,i),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.point=null,t.role="revive",t.helping=e.id,e.helper=t.id,t.mustMove=!1;let s=t.pos[0]-e.pos[0],r=t.pos[2]-e.pos[2],o=Math.hypot(s,r)||1;if(o<=i.kneelReach){Sn(t,"kneel");return}let a=[e.pos[0]+s/o*.7,e.pos[2]+r/o*.7];t.path=xo(n.graph,n.boxes,[t.pos[0],t.pos[2]],a,i.radius)||[a],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2],Sn(t,"run")}function cI(t,e,n,i){let s=h_(t,e);if(!s){er(t,e),Ti(t,e,n);return}Tc(t,s.pos[0],s.pos[2],n,i),!(t.stateT<n.reviveTime-1e-9)&&(s.helper=null,s.health=Math.max(1,n.reviveHealth*n.health),s.role="hold",s.mustMove=!1,s.bursts=0,Sn(s,"seek"),e.events.push({type:"cloneRevive",id:t.id,target:s.id}),t.helping=null,t.role="hold",Ti(t,e,n))}function hI(t,e,n,i){if(t.stateT>=n.bleedTime-1e-9){t.health=0,Zd(t,e,"bleed");return}if(t.helper)return;let s=0,r=0,o=1/0;for(let c of e.others||[]){if(c===t||!c.alive||!JP.has(c.state))continue;let h=s_(t.pos,c.pos);h<o&&(o=h,s=c.pos[0]-t.pos[0],r=c.pos[2]-t.pos[2])}if(o===1/0)s=t.pos[0]-e.player.pos[0],r=t.pos[2]-e.player.pos[2],o=Math.hypot(s,r);else if(o<1.2)return;o<1e-6&&(s=1,r=0,o=1),t.yaw=jt(t.yaw,Math.atan2(s,r),n.turnRate*i);let a=n.downedCrawl*i,l=Vn(e.boxes,t.pos,[s/o*a,0,r/o*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}function uI(t,e,n){t.point&&e.reserved.get(t.point.index)===t.id&&t.pop<=1e-6&&As(t.point.pos,[t.pos[0],t.pos[2]])<=.3?Qs(t,e,n):Ti(t,e,n)}function d_(t,e){return t.kind==="trainer"?U1(t):t.kind==="boss"||!t.alive||jd.has(t.state)||t.state==="downed"?!1:(t.role==="revive"&&er(t,e),Cs(t,e),t.blind=0,Sn(t,"stagger"),!0)}function f_(t,e,n){if(t.kind==="trainer")return B1(t,e);if(t.kind==="boss"||!t.alive||jd.has(t.state)||t.state==="downed"||t.state==="dive")return!1;t.role==="revive"&&er(t,n),Cs(t,n),Rs(t,0,(n.tuning||H).associate),t.blind=0,t.point&&n.reserved.get(t.point.index)===t.id&&n.reserved.delete(t.point.index),t.divePoint=t.point,t.point=null,t.role="hold",t.path=[],t.pathI=0;let i=t.pos[0]-e[0],s=t.pos[2]-e[2],r=Math.hypot(i,s);return r<1e-6?(i=Math.sin(t.yaw),s=Math.cos(t.yaw)):(i/=r,s/=r),t.diveDir[0]=i,t.diveDir[1]=s,t.yaw=Math.atan2(i,s),Sn(t,"dive"),!0}function dI(t,e,n,i){let s=Math.max(n.diveTime,.001),r=Math.max(t.stateT-i,n.diveReaction),o=Math.min(t.stateT,n.diveReaction+s);if(o>r){let a=n.diveDistance*(o-r)/s,l=Vn(e.boxes,t.pos,[t.diveDir[0]*a,0,t.diveDir[1]*a],n.radius,n.height);t.pos[0]=l.pos[0],t.pos[2]=l.pos[2]}t.stateT>=n.diveReaction+s-1e-9&&(t.point=t.divePoint,t.divePoint=null,t.mustMove=!0,Ti(t,e,n))}function p_(t,e){return t.kind==="trainer"?z1(t):t.kind==="boss"||!t.alive||jd.has(t.state)||t.state==="dive"?!1:(t.role==="revive"&&er(t,e),Cs(t,e),Rs(t,0,(e.tuning||H).associate),t.blind=0,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.wasDowned=t.state==="downed",t.bleedT=t.wasDowned?t.stateT:0,t.point=null,t.role="hold",t.helper=null,t.mustMove=!1,Sn(t,"executed"),!0)}function m_(t){return t.kind==="trainer"?H1(t):!t.alive||t.state!=="executed"?!1:(Sn(t,t.wasDowned?"downed":"flinch"),t.wasDowned&&(t.stateT=t.bleedT),t.wasDowned=!1,t.bleedT=0,!0)}function g_(t,e,n="execute"){return t.kind==="trainer"?V1(t,e,n):t.kind==="boss"||!t.alive||t.state!=="executed"?null:(t.health=0,Zd(t,e,n))}function Zd(t,e,n){return t.alive=!1,Cs(t,e),t.role==="revive"&&er(t,e),t.helper=null,t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.pop=0,t.blind=0,Sn(t,"dead"),e.events.push({type:"death",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]],kind:n}),"kill"}function Dm(t,e){return t.kind==="trainer"||t.kind==="boss"||!t.alive||jd.has(t.state)||t.state==="downed"?null:(Cs(t,e),t.role==="revive"&&er(t,e),t.point&&e.reserved.get(t.point.index)===t.id&&e.reserved.delete(t.point.index),t.point=null,t.health=1,t.pop=0,t.blind=0,t.role="hold",t.helper=null,t.mustMove=!1,Sn(t,"downed"),e.events.push({type:"down",id:t.id,pos:[t.pos[0],t.pos[1],t.pos[2]]}),e.events.push({type:"bark",id:t.id,key:"cloneDown"}),"down")}function v_(t,e,n){if(!t.alive)return;(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,jP);let i=(e.tuning||H).associate,s=e.director||H.director;if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.kind==="trainer"){F1(t,e,n);return}if(t.kind==="boss"){n_(t,e,n);return}switch(t.state){case"idle":e.started&&Ti(t,e,i);break;case"seek":Ti(t,e,i);break;case"run":nI(t,e,i,n);break;case"cover":rI(t,e,i,s,n);break;case"telegraph":oI(t,e,i,n);break;case"burst":aI(t,e,i,n);break;case"suppress":lI(t,e,i,n);break;case"reload":Rs(t,t.pop-Or(n,i.popTime),i),r_(t,i,n),t.stateT>=i.reloadTime&&(t.bursts=0,Qs(t,e,i));break;case"flinch":Rs(t,t.pop-Or(n,i.popTime),i),t.blind=Am(t.blind-Or(n,i.popTime)),t.stateT>=i.flinchTime&&(t.point?Qs(t,e,i):Ti(t,e,i));break;case"stagger":Rs(t,t.pop-Or(n,i.popTime),i),t.stateT>=i.staggerTime-1e-9&&uI(t,e,i);break;case"dive":dI(t,e,i,n);break;case"kneel":cI(t,e,i,n);break;case"downed":hI(t,e,i,n);break;case"spawn":t.stateT>=(e.tuning||H).pad.riseTime-1e-9&&Ti(t,e,i);break;default:break}}function x_(t,e,n,i="body"){return t.kind==="trainer"?W1(t,e,n,i):t.kind==="boss"?i_(t,e,n,i):!t.alive||!(e>0)||t.state==="executed"||t.state==="unused"?null:t.state==="downed"?(t.health=0,Zd(t,n,i)):(t.health-=e,t.health<=0?(i==="body"||i==="tobble")&&n.rand()<(n.tuning||H).associate.downChance?Dm(t,n):(t.health=0,Zd(t,n,i)):t.role==="revive"?(er(t,n),Cs(t,n),Sn(t,"flinch"),"hit"):(eI.has(t.state)&&(Cs(t,n),Sn(t,"flinch"),t.blind=Math.min(t.blind,1)),"hit"))}function y_(){let t=new Map,e=new Map,n=new Map,i={request(s,r,o,a=H.director){if(t.has(s))return!0;if(r<(n.get(s)??-1/0))return!1;let l=e.get(s);l?l.last=r:e.set(s,{first:r,last:r});for(let[d,u]of e)r-u.last>a.requestWindow&&e.delete(d);if(t.size>=o)return!1;let c=null,h=1/0;for(let[d,u]of e)u.first<h&&(c=d,h=u.first);return c!==s?!1:(e.delete(s),t.set(s,r),!0)},release(s,r,o=H.director){e.delete(s),t.delete(s)&&n.set(s,r+o.tokenCooldown)},holds(s){return t.has(s)},held(){return[...t.keys()]},expire(s,r=H.director){let o=[];for(let[a,l]of t)s-l>r.tokenMaxHold&&o.push(a);for(let a of o)i.release(a,s,r);return o},reset(){t.clear(),e.clear(),n.clear()}};return i}function b_(t,e=H){let n=(t.pads||[]).map(r=>({id:r.id,pos:[r.pos[0],r.pos[1],r.pos[2]],spawns:r.spawns,openKey:r.openKey,shareKey:r.shareKey,manual:!!r.manual,state:"dormant",spawned:0,alive:0,nextT:0})),i=new Map(n.map(r=>[r.id,new Set]));return{list:n,step(r,o){let a=e.pad,l=[];for(let c of n){if(c.state==="dormant"){if(c.manual||!o.started||!(o.kills>=(c.openKey&&Number.isFinite(a[c.openKey])?a[c.openKey]:a.openAfterKills)||o.sinceStart>=a.openAfter))continue;c.state="open",c.nextT=o.now+a.interval,l.push({type:"padOpen",id:c.id})}if(c.state!=="open"||o.now<c.nextT-1e-9||c.alive>=a.maxAlive)continue;let h=o.freeSlot();h&&(c.spawned++,c.nextT=o.now+a.interval,i.get(c.id).add(h.id),c.alive=i.get(c.id).size,l.push({type:"padSpawn",id:c.id,enemyId:h.id}),c.spawned>=a.total&&(c.state="spent",l.push({type:"padSpent",id:c.id})))}return l},blast(r){let o=e.pad.radius+e.grenade.padReach,a=[];for(let l of n)l.state!=="dormant"&&l.state!=="open"||Math.hypot(l.pos[0]-r[0],l.pos[2]-r[2])<=o+1e-9&&(l.state="closed",a.push(l.id));return a},noteDeath(r){for(let o of n)i.get(o.id).delete(r)&&(o.alive=i.get(o.id).size)},allDone(){return n.every(r=>r.state==="closed"||r.state==="spent")},reset(){for(let r of n)r.state="dormant",r.spawned=0,r.alive=0,r.nextT=0,i.get(r.id).clear()}}}var fI=.25,pI=1.49,_o="tobble",mI=new Set(["idle","seek","run","cover","telegraph","burst","suppress","reload","flinch","stagger","dive","kneel","spawn","windup","swing","recover"]),ef=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]),of=t=>Math.max(0,Math.min(1,t)),__=(t,e)=>e&&e.tuning?e.tuning.tobble:t.cfg,gI=(t,e,n)=>Math.min(Math.ceil(n*e-1e-9),Math.floor(t*e+1e-9)+1);function Fm({pos:t,yaw:e=0},n=H.tobble){let i={id:_o,cfg:n,start:[t[0],t[1],t[2]],startYaw:e,pos:[0,0,0],prevPos:[0,0,0],yaw:0,prevYaw:0,state:"idle",stateT:0,hp:0,alive:!0,downed:!1,point:null,path:[],pathI:0,pop:0,target:null,reviveT:0,threatT:0,lofT:0,shapes:{head:{c:[0,0,0],r:pt.head.r},body:{a:[0,0,0],b:[0,0,0],r:pt.body.r}},aim:[0,0,0],chest:[0,0,0],head:[0,0,0],muzzle:[0,0,0],goal:[0,0],wait:0,shots:0,sinceHit:0,relocT:0,complainT:0,stuckT:0,stuckRef:[0,0],stuckCount:0,kneeling:!1,revGo:!1,side:[0,0],sideLeft:0,scratch:[0,0,0],speed:0};return Um(i)}function Um(t){return t.pos[0]=t.start[0],t.pos[1]=t.start[1],t.pos[2]=t.start[2],t.prevPos[0]=t.start[0],t.prevPos[1]=t.start[1],t.prevPos[2]=t.start[2],t.yaw=t.prevYaw=t.startYaw,t.state="idle",t.stateT=0,t.hp=t.cfg.health,t.alive=!0,t.downed=!1,t.point=null,t.path=[],t.pathI=0,t.pop=0,t.target=null,t.reviveT=0,t.threatT=0,t.lofT=0,t.wait=0,t.shots=0,t.sinceHit=0,t.relocT=0,t.complainT=0,t.stuckT=0,t.stuckCount=0,t.kneeling=!1,t.revGo=!1,t.sideLeft=0,t.speed=0,t.aim[0]=t.aim[1]=t.aim[2]=0,Ec(t),t}function Ec(t,e=H.combat){let n=t.cfg,i=n.scale,[s,r,o]=t.pos,a=t.shapes,l=e.hitPad;if(a.head.c[0]=s,a.head.c[2]=o,a.body.a[0]=s,a.body.a[2]=o,a.body.b[0]=s,a.body.b[2]=o,t.downed){let c=Math.sin(t.yaw),h=Math.cos(t.yaw);a.body.r=.25*i,a.head.r=pt.head.r*i,a.body.a[0]=s-c*.2*i,a.body.a[1]=r+.25*i,a.body.a[2]=o-h*.2*i,a.body.b[0]=s+c*.6*i,a.body.b[1]=r+.25*i,a.body.b[2]=o+h*.6*i,a.head.c[0]=a.body.b[0],a.head.c[1]=r+.25*i,a.head.c[2]=a.body.b[2],t.chest[0]=s,t.chest[1]=r+.25*i,t.chest[2]=o}else if(t.point&&t.point.kind==="low"&&t.pop<.5)a.head.r=(pt.head.r+l)*i,a.body.r=(pt.body.r+l)*i,a.head.c[1]=r+(e.crouchHead-l)*i,a.body.a[1]=r+.1*i,a.body.b[1]=r+e.crouchBodyTop*i,t.chest[0]=s,t.chest[1]=r+e.crouchBodyTop*i*.9,t.chest[2]=o;else{let c=t.point?n.popLift*of(t.pop):0;a.head.r=(pt.head.r+l)*i,a.body.r=(pt.body.r+l)*i,a.head.c[1]=r+pt.head.cy*i+c,a.body.a[1]=r+pt.body.ay*i+c,a.body.b[1]=r+pt.body.by*i+c,t.chest[0]=s,t.chest[1]=r+n.height*(1.2/1.8)+c,t.chest[2]=o}return t.head[0]=a.head.c[0],t.head[1]=a.head.c[1],t.head[2]=a.head.c[2],a}function Mo(t,e){t.state=e,t.stateT=0}var af=(t,e,n=!1)=>t.events.push(n?{type:"bark",id:_o,key:e,force:n}:{type:"bark",id:_o,key:e});function Ac(t,e,n,i,s){let r=e-t.pos[0],o=n-t.pos[2];Math.hypot(r,o)>1e-6&&(t.yaw=jt(t.yaw,Math.atan2(r,o),i.turnRate*s))}function vI(t,e,n){let i=t.point.normal;t.yaw=jt(t.yaw,Math.atan2(-i[0],-i[1]),e.turnRate*n)}function Na(t,e,n){e=of(e);let i=t.point;if(i&&i.kind==="tall"&&e!==t.pop){let s=i.end*n.tuning.associate.popShift*(e-t.pop);t.pos[0]+=i.tangent[0]*s,t.pos[2]+=i.tangent[1]*s}t.pop=e}var Bm=(t,e)=>e>0?t/e:1;function Rc(t,e){t.point&&e.reserved.get(t.point.index)===_o&&e.reserved.delete(t.point.index),t.point=null}function M_(t,e,n,i){let s=t.aim;if(!s)return 1/0;let r=s.dir[0],o=s.dir[2],a=Math.hypot(r,o);if(a<1e-6)return 1/0;let l=r/a,c=o/a,h=n-s.lens[0],d=i-s.lens[2],u=Math.max(.5,Math.min(e.lofRange,h*l+d*c));return Math.hypot(h-l*u,d-c*u)}function xI(t,e,n){let i=e.aim,s=Math.hypot(i.dir[0],i.dir[2]),r=i.dir[0]/s,o=i.dir[2]/s,a=t.pos[0]-i.lens[0],l=t.pos[2]-i.lens[2],c=-o*a+r*l>=0?1:-1;t.side[0]=-o*c,t.side[1]=r*c,t.sideLeft=n.sidestepDist,Rc(t,e),Na(t,0,e),t.target=null,t.lofT=0,Mo(t,"sidestep")}var bo=t=>t.alive&&mI.has(t.state)&&t.state!=="executed",Da=t=>t.state==="downed";function yI(t,e,n,i){return t.point?(go(t.point,e.tuning.associate.popShift,tr),i[0]=tr[0],i[2]=tr[1]):(i[0]=t.pos[0],i[2]=t.pos[2]),i[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0),i}function sf(t,e){let n=t.shapes.body;return e[0]=(n.a[0]+n.b[0])/2,e[1]=(n.a[1]+n.b[1])/2,e[2]=(n.a[2]+n.b[2])/2,e}var is=[0,0,0],Nm=[0,0,0],tr=[0,0];function zm(t,e,n){return t.point?(go(t.point,e.tuning.associate.popShift,tr),n[0]=tr[0],n[2]=tr[1]):(n[0]=t.pos[0],n[2]=t.pos[2]),n[1]=pI,n}function w_(t,e,n){yI(t,e,n,Nm);let i=null,s=1/0;for(let r of e.enemies){if(!bo(r)||Da(r)||r.state==="spawn")continue;let o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);o>=s||o>n.range||gn(e.boxes,Nm,sf(r,is))&&(s=o,i=r)}return i}function S_(t,e,n){let i=null,s=1/0;for(let r of t.enemies){if(!bo(r)||Da(r))continue;let o=Math.hypot(r.pos[0]-e,r.pos[2]-n);o<s&&(s=o,i=r)}return i}var rf=[0,0,0],Fr=[0,0,0],tf=[0,0,0];function T_(t,e,n){let i=e.tuning,s=i.associate,r=e.player.pos,o=[r[0],r[2]],a=[t.pos[0],t.pos[2]],l=S_(e,t.pos[0],t.pos[2]),c=[];for(let[f,m]of e.reserved)m!==_o&&c.push(e.points[f].pos);let h=(n.followMin+n.followMax)/2,d=null,u=-1/0;for(let f of e.points){let m=e.reserved.get(f.index);if(m!==void 0&&m!==_o)continue;let y=ef(f.pos,o);if(y<n.followMin||y>n.followMax||y<=n.personalSpace||M_(e,n,f.pos[0],f.pos[1])<n.lofClear)continue;let g=!1;for(let M of c)if(ef(M,f.pos)<s.reserveRadius){g=!0;break}if(g)continue;let p=!0;for(let M of e.enemies)if(bo(M)&&ef([M.pos[0],M.pos[2]],f.pos)<s.radius+n.radius+.2){p=!1;break}if(!p)continue;let v=!1;if(l){if(zm(l,e,rf),Fr[0]=f.pos[0],Fr[1]=f.kind==="low"?i.combat.crouchHead*n.scale:n.height,Fr[2]=f.pos[1],gn(e.boxes,Fr,rf))continue;go(f,s.popShift,tr),tf[0]=tr[0],tf[1]=n.muzzleUp+n.popLift,tf[2]=tr[1],v=gn(e.boxes,tf,sf(l,is))}let _=-ef(a,f.pos)-.5*Math.abs(y-h)+(v?8:0);_>u+1e-9&&(u=_,d=f)}return d}function bI(t,e,n){let i=e.aim,s=e.player.pos,r=0,o=1;if(i){let d=Math.hypot(i.dir[0],i.dir[2]);d>1e-6&&(r=i.dir[0]/d,o=i.dir[2]/d)}let a=2*Math.SQRT1_2,l=(-r+-o)*a,c=(-o+r)*a,h=Vn(e.boxes,[s[0],t.pos[1],s[2]],[l,0,c],n.radius,n.height);return[h.pos[0],h.pos[2]]}function E_(t,e,n,i){t.goal[0]=i[0],t.goal[1]=i[1],t.path=t.stuckCount>=3?[[i[0],i[1]]]:xo(e.graph,e.boxes,[t.pos[0],t.pos[2]],i,n.radius)||[[i[0],i[1]]],t.pathI=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}function A_(t,e,n,i,s){let r=s*i;for(let o=0;o<t.path.length+2;o++){let a=t.path[t.pathI],l=t.pathI===t.path.length-1,c=a[0]-t.pos[0],h=a[1]-t.pos[2],d=Math.hypot(c,h);if(d<=n.arriveDist){if(l)return"arrived";t.pathI++;continue}Ac(t,a[0],a[1],n,i);let u=Math.min(r,d);if(u<=1e-9)break;let f=Vn(e.boxes,t.pos,[c/d*u,0,h/d*u],n.radius,n.height),m=Math.hypot(f.pos[0]-t.pos[0],f.pos[2]-t.pos[2]);if(t.pos[0]=f.pos[0],t.pos[2]=f.pos[2],r-=m,m<u*.5)break}if(t.stuckT+=i,t.stuckT>=1){if(Math.hypot(t.pos[0]-t.stuckRef[0],t.pos[2]-t.stuckRef[1])<.05)return"stuck";t.stuckCount=0,t.stuckT=0,t.stuckRef[0]=t.pos[0],t.stuckRef[1]=t.pos[2]}return"moving"}function Ur(t,e,n){let i=e.started?T_(t,e,n):null;t.point&&(!i||i.index!==t.point.index)&&Rc(t,e),Na(t,0,e);let s;if(i?(t.point=i,e.reserved.set(i.index,_o),s=i.pos):s=bI(t,e,n),t.shots=0,t.target=null,Math.hypot(s[0]-t.pos[0],s[1]-t.pos[2])<=.15){R_(t,e,n);return}E_(t,e,n,s),Mo(t,"follow")}function R_(t,e,n){if(t.stuckCount=0,t.point&&(t.pos[0]=t.point.pos[0],t.pos[2]=t.point.pos[1]),!e.started&&!t.point){Mo(t,"idle");return}Om(t,e,n)}function Om(t,e,n){Mo(t,"cover"),t.target=null,t.relocT=0,t.wait=n.coverWaitMin+(n.coverWaitMax-n.coverWaitMin)*e.rand()}function _I(t,e,n,i){let s=e.player.pos;if(e.started||Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax){Ur(t,e,n);return}Ac(t,s[0],s[2],n,i)}function MI(t,e,n,i){let s=A_(t,e,n,i,n.runSpeed);s==="arrived"?R_(t,e,n):s==="stuck"&&(t.stuckCount++,Rc(t,e),Ur(t,e,n))}function wI(t,e,n,i){Na(t,t.pop-Bm(i,n.popTime),e);let s=e.player.pos;if(t.point?vI(t,n,i):Ac(t,s[0],s[2],n,i),t.relocT+=i,t.relocT>=n.recheckTime){t.relocT=0;let o=Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])>n.followMax;if(t.point){let a=t.point.pos,l=Math.hypot(t.pos[0]-a[0],t.pos[2]-a[1])>.3,c=S_(e,t.pos[0],t.pos[2]),h=!1;if(c){zm(c,e,rf);let d=t.point.kind==="low"?e.tuning.combat.crouchHead*n.scale:n.height;Fr[0]=a[0],Fr[1]=d,Fr[2]=a[1],h=gn(e.boxes,Fr,rf)}if(o||l||h){Ur(t,e,n);return}}else if(o||e.started&&T_(t,e,n)){Ur(t,e,n);return}}if(!e.started||t.stateT<t.wait)return;let r=w_(t,e,n);r&&(t.target=r,t.shots=0,Mo(t,"shoot"))}function SI(t,e,n,i){Na(t,t.pop+Bm(i,n.popTime),e);let s=t.target;if((!s||!bo(s)||Da(s)||!gn(e.boxes,TI(t,n),sf(s,is)))&&(s=t.target=w_(t,e,n)),!s){Om(t,e,n);return}if(Ac(t,s.pos[0],s.pos[2],n,i),t.stateT<n.popTime-1e-9)return;let r=t.muzzle;r[0]=t.pos[0],r[1]=t.pos[1]+n.muzzleUp+(t.point?n.popLift:0)*of(t.pop),r[2]=t.pos[2];let o=gI(t.stateT-n.popTime,n.rate,n.burstTime);for(;t.shots<o;){t.shots++,sf(s,is);let a=is[0]-r[0],l=is[1]-r[1],c=is[2]-r[2],h=Math.hypot(a,l,c)||1,d=Ra([a/h,l/h,c/h],n.spread,e.rand,t.scratch),u=Xn(r,d,n.range,e.boxes,e.enemies),f=u.target&&(u.kind==="head"||u.kind==="body")?u.target:null;if(e.events.push({type:"tobbleShot",from:[r[0],r[1],r[2]],to:u.point,hit:f?f.id:null}),f&&e.hurtRep&&e.hurtRep(f,n.damage),!bo(s)||Da(s))break}(!bo(s)||Da(s))&&(t.target=null),t.stateT>=n.popTime+n.burstTime-1e-9&&Om(t,e,n)}var nf=[0,0,0];function TI(t,e){return nf[0]=t.pos[0],nf[1]=t.pos[1]+e.muzzleUp+(t.point?e.popLift:0)*of(t.pop),nf[2]=t.pos[2],nf}function EI(t,e,n,i){let s=Math.min(n.runSpeed*i,t.sideLeft);if(s>0){let r=Vn(e.boxes,t.pos,[t.side[0]*s,0,t.side[1]*s],n.radius,n.height),o=Math.hypot(r.pos[0]-t.pos[0],r.pos[2]-t.pos[2]);t.pos[0]=r.pos[0],t.pos[2]=r.pos[2],t.sideLeft-=o<s*.5?t.sideLeft:o}t.sideLeft<=1e-6&&Ur(t,e,n)}function AI(t){let e=t.player.pos,n=0;is[0]=e[0],is[1]=.4,is[2]=e[2];for(let i of t.enemies)!bo(i)||Da(i)||i.state==="spawn"||gn(t.boxes,zm(i,t,Nm),is)&&n++;return n}function RI(t,e){Rc(t,e),Na(t,0,e),t.target=null,t.revGo=!1,t.threatT=0,t.kneeling=!1,t.reviveT=0,t.path=[],t.pathI=0,t.goal[0]=t.goal[1]=1/0,Mo(t,"revive")}function CI(t,e,n,i){let s=e.player.pos;if(!t.revGo)if(t.threatT+=i,Na(t,t.pop-Bm(i,n.popTime),e),AI(e)<=n.reviveMaxThreats||t.threatT>=n.reviveWaitMax-1e-9)t.revGo=!0;else return;if(Math.hypot(s[0]-t.pos[0],s[2]-t.pos[2])<=n.reviveRange){t.kneeling||(t.kneeling=!0,t.reviveT=0,e.events.push({type:"tobbleKneel"})),Ac(t,s[0],s[2],n,i),t.reviveT+=i,t.reviveT>=n.reviveTime-1e-9&&(e.reviveDoc&&e.reviveDoc()&&af(e,"tobbleRevive",!0),Ur(t,e,n));return}if(t.kneeling=!1,t.reviveT=0,Math.hypot(s[0]-t.goal[0],s[2]-t.goal[1])>n.reviveRange+.4||!t.path.length){let a=t.pos[0]-s[0],l=t.pos[2]-s[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.min(.8,n.reviveRange*.8);E_(t,e,n,[s[0]+a*h,s[2]+l*h]),t.goal[0]=s[0],t.goal[1]=s[2]}let o=A_(t,e,n,i,n.runSpeed);o==="stuck"?(t.stuckCount++,t.path=[]):o==="arrived"&&(t.path=[])}function PI(t,e,n,i){let s=e.player.pos,r=s[0]-t.pos[0],o=s[2]-t.pos[2],a=Math.hypot(r,o);if(a>1e-6&&(t.yaw=jt(t.yaw,Math.atan2(r,o),n.turnRate*i)),a>n.reviveRange&&n.crawlSpeed>0){let l=Math.min(n.crawlSpeed*i,a-n.reviveRange),c=Vn(e.boxes,t.pos,[r/a*l,0,o/a*l],n.radius,n.height);t.pos[0]=c.pos[0],t.pos[2]=c.pos[2]}t.complainT+=i,t.complainT>=n.complainEvery-1e-9&&(t.complainT=0,af(e,"tobbleComplain"))}function C_(t,e,n){(!(n>0)||!Number.isFinite(n))&&(n=0),n=Math.min(n,fI);let i=__(t,e);if(t.prevPos[0]=t.pos[0],t.prevPos[1]=t.pos[1],t.prevPos[2]=t.pos[2],t.prevYaw=t.yaw,t.stateT+=n,t.sinceHit+=n,t.downed){PI(t,e,i,n);return}switch(t.hp<i.health&&t.sinceHit>=i.regenDelay&&(t.hp=Math.min(i.health,t.hp+(i.regenTime>0?i.health/i.regenTime*n:i.health))),e.playerDowned?t.state!=="revive"&&RI(t,e):t.state==="revive"&&Ur(t,e,i),t.state!=="sidestep"&&t.state!=="revive"&&e.aim&&e.aim.active&&M_(e,i,t.pos[0],t.pos[2])<i.lofClear?(t.lofT+=n,t.lofT>=i.sidestepReact-1e-9&&xI(t,e,i)):t.state!=="sidestep"&&(t.lofT=0),t.state){case"idle":_I(t,e,i,n);break;case"follow":MI(t,e,i,n);break;case"cover":wI(t,e,i,n);break;case"shoot":SI(t,e,i,n);break;case"sidestep":EI(t,e,i,n);break;case"revive":CI(t,e,i,n);break;default:break}}function Cc(t,e,n){return t.downed||!(e>0)?null:(t.hp-=e,t.sinceHit=0,t.hp>0?"hit":(t.hp=0,t.downed=!0,t.kneeling=!1,t.reviveT=0,t.complainT=0,t.target=null,t.pop=0,Rc(t,n),Mo(t,"downed"),n.events.push({type:"tobbleDown"}),af(n,"tobbleDown",!0),"downed"))}function Hm(t,e){if(!t.downed)return!1;let n=__(t,e);return t.downed=!1,t.hp=Math.max(1,n.reviveHealth*n.health),t.sinceHit=0,t.lofT=0,t.complainT=0,e.events.push({type:"tobbleUp"}),af(e,"tobbleUp"),Ur(t,e,n),!0}var P_=new Set(["cover","coverSlide","coverSwap"]),I_=new Set(["cover","suppress","reload","flinch"]),II=new Set(["cover","suppress","reload"]),L_=new Set(["cover","telegraph","burst","suppress","reload","flinch"]),k_=8,LI=.1,D_=1.3,Gm=(t,e)=>Math.hypot(t[0]-e[0],t[2]-e[2]);function N_({level:t,boxes:e,edges:n,rand:i,tuning:s=H}){let r=()=>s.associate,o=m1(n,{spacing:s.associate.pointSpacing,cornerZone:s.cover.cornerZone}),a=C1(t.waypoints,e,{radius:s.associate.radius,linkMax:s.associate.linkMax}),l=y_(),c=u1(s.grenade),h=b_(t,s),d=new Map,u=()=>!!t.tobble&&s.tobble.enabled>0,f=[],m=[],y=t.overlord||null,g=y?[{id:"overlord",kind:"boss",pos:[y.spots[0].hide[0],0,y.spots[0].hide[1]]},...t.associates]:t.associates,p=g.length,v=g.map(N=>Pm(N,s.associate,s));for(let N=p;N<k_;N++)v.push(Cm(Pm({id:`r${N+1}`,pos:[0,0,0]},s.associate,s)));let _=()=>Math.max(p,Math.min(k_,Math.round(s.director.maxEnemies))),M=_(),S=Gd({state:"move",pos:[0,0,0],cover:null,scratch:{}}),E={pos:[0,0,0],chest:[0,0,0],head:[0,0,0],speed:0,downed:!1,coverNormal:null,exposed:!1},x={boxes:e,points:o,graph:a,tokens:l,reserved:d,player:E,now:0,rand:i,tokenCount:0,events:f,tuning:s,director:s.director,others:v,started:!1,aim:void 0,tobble:null,enemies:v,playerDowned:!1,m:null,health:null,hurtRep:null,reviveDoc:null,bossLevel:y,saunasDone:()=>h.allDone()},b={enemies:v,tokens:l,points:o,graph:a,started:!1,clear:!1,now:0,hideT:0,stayT:0,startT:0,kills:0,grenades:c,pads:h.list,tobble:null,boss:v.find(N=>N.kind==="boss")||null,lobMarkers:[]},P=!1,L=0,C=[0,0],w=!1,D=!1;function k(){d.clear();for(let N of v.slice(0,p)){if(N.kind!=="associate")continue;let Z=null,K=1/0;for(let ye of o){let R=Math.hypot(ye.pos[0]-N.pos[0],ye.pos[1]-N.pos[2]);R<K&&(K=R,Z=ye)}N.point=Z,Z&&d.set(Z.index,N.id)}}k(),b.tobble=x.tobble=u()?Fm(t.tobble,s.tobble):null;let I=()=>b.tobble&&!b.tobble.downed,F=(N,Z,K=f,ye=!1)=>K.push(ye?{type:"bark",id:N,key:Z,force:ye}:{type:"bark",id:N,key:Z}),z=()=>v.find(N=>N.alive)||v[0];function $(){for(let N of l.held())l.release(N,b.now,s.director)}function X(N){b.started=!0,b.startT=b.now,F(z().id,"lockdown",N)}function j(N){N.diedAt=b.now,b.kills++,h.noteDeath(N.id)}function W(N,Z,K,ye){!b.started&&N.alive&&N.state!=="unused"&&Z>0&&X(ye),x.events=ye;let R=x_(N,Z,x,K);return x.events=f,R==="kill"&&j(N),R==="kill"&&K==="head"&&I()&&++L%3===0&&F("tobble","tobbleHeadshot",ye),R==="kill"&&N.kind==="boss"&&ee(ye),R}function ee(N){for(let Z of v)Z.alive&&Z.kind!=="boss"&&W(Z,1e6,"blast",N);for(let Z of h.list)(Z.state==="dormant"||Z.state==="open")&&(Z.state="closed")}x.hurtRep=(N,Z)=>W(N,Z,"tobble",f),x.reviveDoc=()=>!x.health||!x.health.downed?!1:(x.health.revive(),x.m.revive(),E.downed=!1,f.push({type:"revived"}),!0);function Me(N,Z){let K=E,ye=s.combat;K.pos[0]=N.pos[0],K.pos[1]=N.pos[1],K.pos[2]=N.pos[2];let R=P_.has(N.state)?Zs(N):null;K.exposed=!!(N.cover&&N.cover.exposed);let T=!!R&&R.kind==="low"&&!K.exposed;K.chest[0]=N.pos[0],K.chest[1]=N.pos[1]+(T?.6:1.2),K.chest[2]=N.pos[2];let V=Gd(N,S,ye).shapes.head.c;K.head[0]=V[0],K.head[1]=V[1],K.head[2]=V[2],K.speed=N.speed(),K.coverNormal=R?R.normal:null,K.downed=!!Z.downed}function te(N,Z){let K=s.director;if(P_.has(N.state)?E.exposed||(b.hideT+=Z):b.hideT=0,!D||Math.hypot(N.pos[0]-C[0],N.pos[2]-C[1])>K.stayRadius?(C[0]=N.pos[0],C[1]=N.pos[2],D=!0,b.stayT=0):b.stayT+=Z,b.hideT>=K.pushAfter&&!v.some(R=>R.alive&&R.role==="push")){let R=v.filter(V=>V.kind==="associate"&&V.alive&&V.role==="hold"&&I_.has(V.state)&&!l.holds(V.id)).sort((V,ie)=>Gm(V.pos,E.pos)-Gm(ie.pos,E.pos)),T=null;for(let V of R){if(V.role="push",Qd(V,x)){T=V;break}V.role="hold"}T?(F(T.id,"push"),b.hideT=0):b.hideT=Math.max(0,K.pushAfter-1)}if(b.stayT>=K.flankAfter&&!v.some(R=>R.alive&&R.role==="flank")){let R=null,T=-1/0;for(let V of v){if(V.kind!=="associate"||!V.alive||V.role!=="hold"||!I_.has(V.state)||l.holds(V.id))continue;V.role="flank";let ie=Qd(V,x);V.role="hold",ie&&ie.score>T&&(T=ie.score,R=V)}R&&(R.role="flank",I()&&F("tobble","tobbleFlank"),F(R.id,"flank")),b.stayT=0}}function oe(){let N=r().reviveRange;for(let Z of v){if(!Z.alive||Z.state!=="downed"||Z.helper)continue;let K=null,ye=1/0;for(let R of v){if(R.kind!=="associate"||!R.alive||!II.has(R.state)||R.role!=="hold"||l.holds(R.id))continue;let T=Gm(R.pos,Z.pos);T<=N&&T<ye&&(ye=T,K=R)}K&&(u_(K,Z,x),F(K.id,"cloneRevive"))}}function be(){for(let N=0;N<M;N++){let Z=v[N];if(!Z.claimed&&(Z.state==="unused"||Z.state==="dead"&&b.now-Z.diedAt>=s.director.slotReuse-1e-9))return Z.claimed=!0,Z}return null}function Oe(){let N=h.step(0,{started:b.started,sinceStart:b.now-b.startT,kills:b.kills,freeSlot:be,now:b.now});for(let Z of N){if(f.push(Z),Z.type==="padOpen"){F(Z.id,"padOpen",f,!0),I()&&F("tobble","tobblePad",f,!0);continue}if(Z.type!=="padSpawn")continue;let K=h.list.find(R=>R.id===Z.id),ye=v.find(R=>R.id===Z.enemyId);Jd(ye,K.pos,x,Ce(K))}}let ne=()=>v.reduce((N,Z)=>N+(Z.kind==="trainer"&&Z.alive?1:0),0);function Ce(N){let Z=s.pad,K=N.shareKey&&Number.isFinite(Z[N.shareKey])?Z[N.shareKey]:Z.trainerShare;return K>0&&ne()<s.trainer.maxAlive&&i()<K?"trainer":"associate"}let Fe=[0,0,0],Be=[0,0,0];function Xe(N,Z){let K=Z[0]-N.from[0],ye=Z[2]-N.from[2],R=Math.hypot(K,ye);return R>N.reach||R>1e-6&&Math.abs(Mi(Math.atan2(K,ye)-N.yaw))>N.arc*Math.PI/360+1e-9?!1:(Fe[0]=N.from[0],Fe[1]=N.from[1]+D_,Fe[2]=N.from[2],Be[0]=Z[0],Be[1]=N.from[1]+D_,Be[2]=Z[2],gn(e,Fe,Be))}function Ye(N,Z){let K=s.trainer;for(let ye=0;ye<f.length;ye++){let R=f[ye];if(R.type!=="trainerSwing")continue;if(!Z.downed&&Xe(R,N.pos)){let V=Z.damage(K.damage);if(V!==null){if(f.push({type:"playerHit",id:R.id,from:R.from,amount:K.damage,result:V,melee:!0}),V==="downed")N.state!=="downed"&&N.down(),$();else if(N.knock){let ie=N.pos[0]-R.from[0],J=N.pos[2]-R.from[2],fe=Math.hypot(ie,J)||1;N.knock(ie/fe,J/fe,K.knockback,K.knockTime)}}}let T=b.tobble;if(T&&!T.downed&&Xe(R,T.pos)){let V=Cc(T,K.tobbleDamage,x);f.push({type:"tobbleHit",id:R.id,from:R.from,result:V})}}}let me=[0,0,0],Pe=[0,0,0];function ke(N,Z,K){let ye=s.grenade,R=0;me[0]=N[0],me[1]=N[1]+.3,me[2]=N[2];let T=(ie,J)=>{let fe=Math.hypot(ie[0]-N[0],ie[1]-N[1],ie[2]-N[2]),Se=c1(fe,ye);return Se>0&&gn(e,me,ie)?J(Se):null};for(let ie of v){if(!ie.alive||ie.state==="executed")continue;let J=ie.shapes.body;Pe[0]=ie.pos[0],Pe[1]=(J.a[1]+J.b[1])/2,Pe[2]=ie.pos[2],T(Pe,fe=>W(ie,fe,"blast",f))==="kill"&&R++}Pe[0]=Z.pos[0],Pe[1]=Z.pos[1]+(E.chest[1]-Z.pos[1]<1?.45:.9),Pe[2]=Z.pos[2],T(Pe,ie=>{let J=ie*ye.selfDamage,fe=K.damage(J);return fe===null||(f.push({type:"playerHit",id:null,from:[N[0],N[1],N[2]],amount:J,result:fe}),fe==="downed"&&(Z.state!=="downed"&&Z.down(),$())),null});let V=h.blast(N);for(let ie of V)f.push({type:"padClosed",id:ie}),F(ie,"padClosed");f.push({type:"explode",pos:[N[0],N[1],N[2]],kills:R,closed:V})}function xe(N,Z,K){let ye=N.hostile,R=s.boss,T=N.pos,V=(Se,ce)=>{let re=Math.hypot(Se[0]-T[0],Se[2]-T[2]);return re<=ye.radius?ce*(1-R.lobFalloff*re/Math.max(ye.radius,1e-6)):0},ie=V(Z.pos,ye.damage);if(!K.downed&&ie>0){let Se=K.damage(ie);Se!==null&&(f.push({type:"playerHit",id:ye.id,from:[T[0],T[1],T[2]],amount:ie,result:Se,lob:!0}),Se==="downed"&&(Z.state!=="downed"&&Z.down(),$()))}let J=b.tobble,fe=J&&!J.downed?V(J.pos,R.lobTobbleDamage):0;fe>0&&f.push({type:"tobbleHit",id:ye.id,from:[T[0],T[1],T[2]],result:Cc(J,fe,x)}),f.push({type:"lobLand",id:ye.id,pos:[T[0],T[1],T[2]],radius:ye.radius})}function Ee(N,Z,K){for(let ye of c.step(N,e))ye.type!=="explode"?f.push(ye):ye.hostile?xe(ye,Z,K):ke(ye.pos,Z,K)}function qe(N){let Z=s.grenade.gravity,K=Math.max(N.flight,.2),ye=s.grenade.ballRadius,R=[(N.to[0]-N.from[0])/K,(ye-N.from[1]+.5*Z*K*K)/K,(N.to[2]-N.from[2])/K];c.throw(N.from,R,K+.3,{id:N.id,to:[N.to[0],0,N.to[2]],radius:s.boss.lobRadius,damage:s.boss.lobDamage})}function we(){for(let N of f)N.type==="bossLob"&&qe(N)}function _e(){let N=b.lobMarkers;N.length=0;let Z=b.boss;Z&&Z.alive&&Z.state==="lobWindup"&&N.push({pos:Z.lobTo,radius:s.boss.lobRadius,t:Z.stateT,windup:!0});for(let K of c.live)K.hostile&&N.push({pos:K.hostile.to,radius:K.hostile.radius,t:0,windup:!1})}function Re(){let N=r();for(let Z of c.live)if(!(Z.fuse>N.diveWarn||Z.hostile))for(let K of v)!K.alive||K.state==="downed"||K.state==="executed"||K.state==="dive"||Z.rolled&&Z.rolled.has(K.id)||Math.hypot(K.pos[0]-Z.pos[0],K.pos[2]-Z.pos[2])>N.diveRadius||((Z.rolled||(Z.rolled=new Set)).add(K.id),i()<(K.kind==="trainer"?s.trainer.diveChance:N.diveChance)&&f_(K,Z.pos,x)&&!Z.barked&&(Z.barked=!0,F(K.id,"dive")))}let Le=N=>{let Z=N.point,K=r();return Z.kind==="tall"&&N.pop>0?[Z.pos[0]+Z.tangent[0]*Z.end*K.popShift*N.pop,Z.pos[1]+Z.tangent[1]*Z.end*K.popShift*N.pop]:Z.pos};function q(N){let Z=s.associate.radius,K=s.associate.height,ye=J=>J.kind==="trainer"?qd(s):J.kind==="boss"?q1(s):Z,R=J=>J.kind==="trainer"?K*s.trainer.scaleH:J.kind==="boss"?K*s.boss.scale:K,T=(J,fe,Se)=>{if(J.state==="executed"||J.kind==="boss")return;let ce=Vn(e,J.pos,[fe,0,Se],ye(J),R(J));J.pos[0]=ce.pos[0],J.pos[2]=ce.pos[2]},V=J=>J.state==="executed";for(let J=0;J<v.length;J++){let fe=v[J];if(!fe.alive)continue;for(let Y=J+1;Y<v.length;Y++){let pe=v[Y];if(!pe.alive)continue;let he=pe.pos[0]-fe.pos[0],De=pe.pos[2]-fe.pos[2],Ae=Math.hypot(he,De),Te=ye(fe)+ye(pe);if(Ae>=Te)continue;Ae<1e-6&&(he=1,De=0,Ae=1);let Ge=(Te-Ae)/2,nt=V(pe)?2:V(fe)?0:1,ge=V(fe)?2:V(pe)?0:1;T(fe,-he/Ae*Ge*nt,-De/Ae*Ge*nt),T(pe,he/Ae*Ge*ge,De/Ae*Ge*ge)}let Se=fe.pos[0]-N.pos[0],ce=fe.pos[2]-N.pos[2],re=Math.hypot(Se,ce),Ne=ye(fe)+s.move.radius;re<Ne&&(re<1e-6&&(Se=1,ce=0,re=1),T(fe,Se/re*(Ne-re),ce/re*(Ne-re)))}let ie=b.tobble;if(ie){let J=s.tobble.radius,fe=s.tobble.height,Se=(pe,he)=>{let De=Vn(e,ie.pos,[pe,0,he],J,fe);ie.pos[0]=De.pos[0],ie.pos[2]=De.pos[2]};for(let pe of v){if(!pe.alive)continue;let he=pe.pos[0]-ie.pos[0],De=pe.pos[2]-ie.pos[2],Ae=Math.hypot(he,De),Te=J+ye(pe);if(Ae>=Te)continue;Ae<1e-6&&(he=1,De=0,Ae=1);let Ge=Te-Ae,nt=V(pe)||pe.point&&L_.has(pe.state)?1:.5;Se(-he/Ae*Ge*nt,-De/Ae*Ge*nt),T(pe,he/Ae*Ge*(1-nt),De/Ae*Ge*(1-nt))}let ce=ie.pos[0]-N.pos[0],re=ie.pos[2]-N.pos[2],Ne=Math.hypot(ce,re),Y=J+s.move.radius;Ne<Y&&(Ne<1e-6&&(ce=1,re=0,Ne=1),Se(ce/Ne*(Y-Ne),re/Ne*(Y-Ne)))}for(let J of v){if(!J.alive||!J.point||!L_.has(J.state))continue;let fe=Le(J);if(Math.hypot(J.pos[0]-fe[0],J.pos[2]-fe[1])<=.3)continue;let Se=Math.hypot(fe[0]-N.pos[0],fe[1]-N.pos[2])>=Z+s.move.radius-.001;b.tobble&&Math.hypot(fe[0]-b.tobble.pos[0],fe[1]-b.tobble.pos[2])<Z+s.tobble.radius-.001&&(Se=!1);for(let ce of v)ce===J||!ce.alive||!Se||Math.hypot(fe[0]-ce.pos[0],fe[1]-ce.pos[2])<2*Z-.001&&(Se=!1);if(Se){J.pos[0]=fe[0],J.pos[2]=fe[1];continue}l.holds(J.id)&&l.release(J.id,b.now,s.director),J.mustMove=!0,J.pop=0,J.blind=0,J.state="seek",J.stateT=0}}let Je=[null];function se(N,Z){let K=r(),ye=[0,0,0];Je[0]=b.tobble;for(let R=0;R<f.length;R++){let T=f[R];if(T.type!=="enemyShot")continue;if(T.accurate&&Z.downed&&T.target!=="tobble"){f.splice(R--,1);continue}let V=Ra(T.dir,T.spread,i,ye);if(T.target==="tobble"){let ie=b.tobble,J=Xn(T.from,V,K.range,e,Je);if(ie&&!ie.downed&&(J.kind==="head"||J.kind==="body")){let fe=Cc(ie,T.damage!==void 0?T.damage:K.damage,x);f.push({type:"tobbleHit",id:T.id,from:T.from,result:fe})}f.push({type:"shotFx",from:T.from,to:J.point,accurate:!0})}else if(T.accurate){let ie=A1(T.from,V,K.range,e,N,s.combat),J=ie.point;if(ie.kind==="head"||ie.kind==="body"){let fe=T.damage!==void 0?T.damage:K.damage,Se=Z.damage(fe);f.push({type:"playerHit",id:T.id,from:T.from,amount:fe,result:Se}),Se==="downed"&&(N.state!=="downed"&&N.down(),$())}f.push({type:"shotFx",from:T.from,to:J.slice(),accurate:!0})}else{let ie=Xn(T.from,V,K.range,e,[]);f.push({type:"shotFx",from:T.from,to:ie.point,accurate:!1})}}}b.targets=()=>v,b.freeSlot=be,b.step=(N,Z)=>{(!(N>0)||!Number.isFinite(N))&&(N=0),N=Math.min(N,LI),f.length=0;for(let V of m)f.push(V);m.length=0;let{m:K,health:ye}=Z;if(b.now+=N,x.now=b.now,x.aim=Z.aim,x.m=K,x.health=ye,!b.started&&K.pos[2]>t.trigger.z&&X(f),x.started=b.started,Me(K,ye),x.playerDowned=E.downed,E.downed){I()||$();for(let V of v)V.role!=="revive"&&(V.role="hold");!w&&b.started&&F(z().id,"downed")}else b.started&&!b.clear&&te(K,N);w=E.downed,b.started&&(oe(),Oe()),l.expire(b.now,s.director),x.tokenCount=s.director.casual?s.director.casualTokens:s.director.tokens,Ee(N,K,ye),Re(),b.tobble&&(C_(b.tobble,x,N),Ec(b.tobble,s.combat));let R=f.length;for(let V of v)v_(V,x,N);for(let V=R;V<f.length;V++){let ie=f[V];if(ie.type==="death")j(v.find(J=>J.id===ie.id));else if(ie.type==="bossSaunas")for(let J of h.list)ae(J.id,f)}we(),se(K,ye),Ye(K,ye),q(K);for(let V of v)ka(V,s.combat,s);b.tobble&&Ec(b.tobble,s.combat),_e();let T=!!b.tobble&&b.tobble.downed&&ye.downed;return T&&!P&&f.push({type:"checkpoint"}),P=T,b.started&&!b.clear&&v.every(V=>!V.alive)&&h.allDone()&&(b.clear=!0,f.push({type:"clear"}),y||F(v[0].id,"clear"),b.tobble&&(Hm(b.tobble,x),y||F("tobble","tobbleClear"))),f},b.hurt=(N,Z,K="body")=>W(N,Z,K,m),b.bash=N=>{if(!N.alive||N.state==="executed"||N.state==="unused")return null;let Z=W(N,s.melee.bashDamage,"bash",m);return Z==="hit"?(d_(N,x),"hit"):Z==="kill"?"kill":null},b.beginExecution=N=>p_(N,x),b.finishExecution=N=>{x.events=m;let Z=g_(N,x,"execute");return x.events=f,Z==="kill"&&j(N),Z},b.releaseExecution=N=>m_(N);function ae(N,Z){let K=h.list.find(ye=>ye.id===N);return!K||K.state!=="dormant"?!1:(K.state="open",K.nextT=b.now+s.pad.interval,Z.push({type:"padOpen",id:N}),F(N,"padOpen",Z,!0),I()&&F("tobble","tobblePad",Z,!0),!0)}return b.openPad=N=>ae(N,m),b.forceClear=()=>{b.boss&&b.boss.alive&&(wm(b.boss),W(b.boss,1e6,"blast",m));for(let N of v)N.alive&&W(N,1e6,"blast",m);for(let N of h.list)(N.state==="dormant"||N.state==="open")&&(N.state="closed");return!0},b.spawnRep=()=>{let N=be();if(!N)return null;let Z=h.list[0];return Jd(N,Z?Z.pos:[0,0,0],x)},b.spawnTrainer=N=>{if(ne()>=s.trainer.maxAlive)return null;let Z=be();if(!Z)return null;let K=h.list[0];return Jd(Z,N||(K?K.pos:[0,0,0]),x,"trainer")},b.downRep=N=>{x.events=m;let Z=Dm(N,x);return x.events=f,Z==="down"},b.hurtTobble=N=>{if(!b.tobble)return null;x.events=m;let Z=Cc(b.tobble,N,x);return x.events=f,Z},b.closePads=()=>{for(let N of h.list)(N.state==="dormant"||N.state==="open")&&(N.state="closed");return!0},b.readyBoss=()=>{b.boss&&b.boss.alive&&wm(b.boss)},b.reserved=d,b.reviveTobble=()=>{if(!b.tobble)return!1;x.events=m;let N=Hm(b.tobble,x);return x.events=f,N&&Ec(b.tobble,s.combat),N},b.throwGrenade=(N,Z)=>c.throw(N,Z),b.reset=()=>{l.reset(),c.reset(),h.reset(),M=_(),v.forEach((N,Z)=>{Rm(N,s.associate,s),Z>=p&&Cm(N)}),k(),b.tobble=x.tobble=u()?b.tobble?Um(b.tobble):Fm(t.tobble,s.tobble):null,P=!1,L=0,x.playerDowned=!1,f.length=0,m.length=0,b.lobMarkers.length=0,b.started=b.clear=!1,b.now=0,b.startT=0,b.kills=0,b.hideT=b.stayT=0,x.now=0,x.started=!1,x.aim=void 0,w=!1,D=!1;for(let N of v)ka(N,s.combat,s)},b}function lf(t,e,n){let i=n[0]-e[0],s=n[2]-e[2],r=Ad(t),o=Rd(t),a=Math.atan2(i*o[0]+s*o[2],i*r[0]+s*r[2]);return a<=-Math.PI+1e-9&&(a=Math.PI),a}var O_=t=>Math.max(0,Math.min(1,t));function F_({hp:t,max:e,downed:n,downT:i,hits:s=[],now:r,fb:o=H.feedback}){let a=n?1:e>0?O_(1-t/e):1,l={top:0,right:0,bottom:0,left:0};for(let h of s){let d=o.hitFlashTime>0?O_(1-(r-h.t)/o.hitFlashTime):0;if(d<=0)continue;let u=Math.cos(h.angle),f=Math.sin(h.angle);l.top=Math.max(l.top,d*Math.max(0,u)),l.right=Math.max(l.right,d*Math.max(0,f)),l.bottom=Math.max(l.bottom,d*Math.max(0,-u)),l.left=Math.max(l.left,d*Math.max(0,-f))}let c=o.edgeMaxOpacity*a;for(let h of Object.keys(l))l[h]=Math.min(1,c+l[h]);return{face:{opacity:o.faceMaxOpacity*a,frown:a,fill:a},edges:l,downed:{show:!!n,seconds:n?Math.ceil(Math.max(0,i)):0}}}var U_=4,kI=1.2,ai=[0,0,0];function DI(){let t=(e,n,i,s,r)=>{let o=new ut(e,n,i).translate(0,s,0);o.deleteAttribute("uv");let a=new $e(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return o.setAttribute("color",new bt(c,3)),o};return Bt([t(.3,.16,.22,.08,B.cream),t(.34,.07,.26,.195,B.playerOrange)],!1)}function NI(t,e,n){return t.accurate&&e?(e(n),n):(n[0]=t.from[0],n[1]=t.from[1],n[2]=t.from[2],n)}function B_({scene:t,effects:e,sfx:n,fight:i,views:s,cam:r=null,hooks:o={}}){let a=new Map(i.enemies.map((C,w)=>[C.id,s[w]])),l=new Map(i.enemies.map(C=>[C.id,C])),c=new Map,h=[],d=new cs(DI(),Tt({vertexColors:!0,rim:0}),U_);d.name="pickups",d.frustumCulled=!1,d.count=0,t.add(d);let u=new yn,f=0,m=Wy(),y=[],g=(C,w)=>Math.sin(lf(C.yaw,C.pos,w)),p=(C,w)=>Math.min(1,6/Math.max(Math.hypot(w[0]-C.pos[0],w[2]-C.pos[2]),.001)),v=[0,0,0],_=[0,1,0],M=(C,w=1)=>(v[0]=C[0],v[1]=C[1]+w,v[2]=C[2],v);function S(C,w){let D=H.feedback,k=C.kind;if(C.boss){y.push({t:H.ending.deathDelay*.9,pos:[C.pos[0],C.pos[1],C.pos[2]]}),e.gel(M(C.pos,1.5),_,D.gelCount),n.play("kill",D.killVolume,g(w,C.pos)),o.marker&&o.marker("kill");return}if(k==="body"||k==="head")return;let I=M(C.pos),F=k==="execute"?D.killGelCount*2:k==="bleed"?D.gelCount:D.killGelCount;if(e.gel(I,_,F),k!=="bleed"){if(e.receipts(M(C.pos,1.2),D.receiptCount),P(C.pos),k==="tobble"){n.play("kill",D.killVolume*.5,g(w,C.pos));return}o.marker&&o.marker("kill"),n.play(k==="execute"?"finish":"kill",k==="execute"?D.bashVolume:D.killVolume,g(w,C.pos))}}let E=C=>{let w=i.pads.find(D=>D.id===C);return w?w.pos:[0,0,0]};function x(C){let w=null,D=1/0;for(let k of i.enemies){let I=Math.hypot(k.pos[0]-C[0],k.pos[2]-C[2]);I<D&&(D=I,w=k)}return w}function b(C,w){let D=H.feedback,k=H.associate;for(let I of C)if(I.type==="bark")m.say(I.key,!!I.force);else if(I.type==="padOpen")n.play("saunaOpen",D.saunaVolume,g(w,E(I.id)));else if(I.type==="padClosed")n.play("saunaClose",D.saunaVolume,g(w,E(I.id)));else if(I.type==="padSpawn"){let F=E(I.id);for(let z=0;z<4;z++)e.steam([F[0]+(z-1.5)*.25,.1,F[2]])}else if(I.type==="explode"){e.blast(I.pos);let F=Math.hypot(I.pos[0]-w.pos[0],I.pos[2]-w.pos[2]),z=Math.min(1,8/Math.max(F,.001));n.play("boom",D.boomVolume*Math.max(.4,z),g(w,I.pos)),r&&(r.kick(4*z,(Math.random()*2-1)*2*z),r.bump(z))}else if(I.type==="clank")n.play("clank",D.clankVolume*p(w,I.pos),g(w,I.pos));else if(I.type==="tobbleShot"){let F=i.tobble,z=o.tobbleView;z&&F&&F.pop>=.5?z.tip(ai):(ai[0]=I.from[0],ai[1]=I.from[1],ai[2]=I.from[2]);let $=I.to[0]-ai[0],X=I.to[1]-ai[1],j=I.to[2]-ai[2],W=Math.hypot($,X,j)||1;e.flash(ai,[$/W,X/W,j/W]),e.friendlyTracer(ai,I.to),n.play("tobbleShot",D.tobbleShotVolume*p(w,I.from),g(w,I.from))}else if(I.type==="tobbleHit"){let F=i.tobble;F&&e.gel(F.chest,[I.from[0]-F.chest[0],.3,I.from[2]-F.chest[2]],4)}else if(I.type==="revived")n.play("revive",D.reviveVolume);else if(I.type==="cloneRevive"){let F=l.get(I.id);F&&n.play("revive",D.reviveVolume*.6*p(w,F.pos),g(w,F.pos))}else if(I.type==="down")o.marker&&o.marker("kill"),e.gel(M(I.pos),_,6),n.play("hit",D.hitVolume,g(w,I.pos));else if(I.type==="death")S(I,w);else if(I.type==="bossLob"){let F=l.get(I.id);n.play("throw",D.throwVolume,F?g(w,F.pos):0)}else if(I.type==="lobLand"){e.blast(I.pos),e.receipts(M(I.pos,.6),D.receiptCount);let F=Math.hypot(I.pos[0]-w.pos[0],I.pos[2]-w.pos[2]),z=Math.min(1,8/Math.max(F,.001));n.play("boom",D.boomVolume*Math.max(.4,z),g(w,I.pos)),r&&(r.kick(3*z,(Math.random()*2-1)*2*z),r.bump(z))}else if(I.type==="bossPhase")n.play(I.phase===2?"saunaOpen":"charge",I.phase===2?D.saunaVolume:D.chargeVolume),r&&r.bump(1.5);else if(I.type==="checkpoint")o.restart&&o.restart();else if(I.type==="telegraph"){c.set(I.id,I.time!==void 0?I.time:k.popTime+k.telegraphTime);let F=a.get(I.id),z=l.get(I.id);F&&F.glint(!0),z&&n.play("charge",D.chargeVolume,g(w,z.pos))}else if(I.type==="trainerSwing")n.play("bash",D.bashVolume*p(w,I.from),g(w,I.from));else if(I.type==="shotFx"){let F=x(I.from),z=F&&a.get(F.id);NI(I,z?z.tip:null,ai);let $=I.to[0]-ai[0],X=I.to[1]-ai[1],j=I.to[2]-ai[2],W=Math.hypot($,X,j)||1;e.enemyFlash(ai,[$/W,X/W,j/W]),e.enemyTracer(ai,I.to);let ee=Math.hypot(I.from[0]-w.pos[0],I.from[2]-w.pos[2]);n.play("blaster",D.blasterVolume*Math.min(1,8/Math.max(ee,.001)),g(w,I.from))}}function P(C){h.length>=U_&&h.shift(),h.push({pos:[C[0],C[1],C[2]]}),L()}function L(){d.count=h.length;for(let C=0;C<h.length;C++)u.position.set(h[C].pos[0],h[C].pos[1],h[C].pos[2]),u.rotation.set(0,f*kI+C,0),u.updateMatrix(),d.setMatrixAt(C,u.matrix);d.instanceMatrix.needsUpdate=!0}return{handle:b,forceBark:C=>m.say(C,!0),bark:()=>m.current(),pan:g,near:p,tick:C=>m.tick(C),update(C){if(C>0){f+=C;for(let w=y.length-1;w>=0;w--){if(y[w].t-=C,y[w].t>0)continue;let D=y.splice(w,1)[0],k=H.feedback;e.gel(M(D.pos,1.5),_,k.killGelCount*3),e.receipts(M(D.pos,2),k.receiptCount*3),n.play("finish",k.bashVolume),r&&r.bump(2)}for(let[w,D]of c)if(D-C<=0){c.delete(w);let k=a.get(w);k&&k.glint(!1)}else c.set(w,D-C);h.length&&L()}},addPickup:P,collect(C,w){let D=0;for(let k=h.length-1;k>=0;k--)Math.hypot(C[0]-h[k].pos[0],C[2]-h[k].pos[2])<=w&&(h.splice(k,1),D++);return D&&L(),D},count:()=>h.length,pickups:()=>h.map(C=>C.pos.slice()),reset(){h.length=0,d.count=0,d.instanceMatrix.needsUpdate=!0,c.clear(),m.reset(),y.length=0}}}var Oa=Object.freeze([Object.freeze({id:"cancelled",tone:"big",lines:Object.freeze(["MEMBERSHIP CANCELLED."])}),Object.freeze({id:"email",tone:"mail",lines:Object.freeze(["We're sorry to see you go!","Your cancellation is confirmed.","A $49.99 cancellation fee has been applied.","Come back anytime \u2014 50% off your first month!"])}),Object.freeze({id:"tobble",tone:"talk",lines:Object.freeze(['Tobble: "Ooh, fifty percent."',"Doc reloads."])}),Object.freeze({id:"thanks",tone:"big",lines:Object.freeze(["GYMS OF WAR \u2014 thanks for playing","We miss you! \u2014 GlorpFit"])})]);function Vm(t,e,n){if(!e)return!1;let i=Math.max(e.x0-t[0],0,t[0]-e.x1),s=Math.max(e.z-t[2],0);return Math.hypot(i,s)<=n}function z_({tuning:t=H}={}){let e=()=>t.ending,n="off",i=0,s=0,r=0,o=l=>l===0?e().card1Time:l===1?e().card2Time:l===2?e().card3Time:1/0;return{get state(){return n},get card(){return r},get cardCount(){return Oa.length},get hold(){return n==="desk"?Math.min(1,s/Math.max(e().holdTime,1e-6)):0},get locked(){return n==="cards"||n==="done"},get lit(){return n==="desk"||n==="cards"||n==="done"},start(){return n!=="off"?!1:(n="slump",i=0,s=0,r=0,!0)},reset(){n="off",i=0,s=0,r=0},step(l,c={}){let h=[];return!(l>0)||n==="off"||n==="done"||(i+=l,n==="slump"?i>=e().deathDelay&&(n="desk",i=0,s=0,h.push({type:"deskLit"})):n==="desk"?(s=c.atDesk&&c.hold?s+l:0,s>=e().holdTime-1e-9&&(n="cards",i=0,r=0,h.push({type:"cancelled"},{type:"card",index:0}))):n==="cards"&&(r===Oa.length-1?c.press&&i>=e().finalLock&&(n="done",h.push({type:"toTitle"})):(i>=o(r)||c.press&&i>=e().skipLock)&&(r++,i=0,h.push({type:"card",index:r})))),h}}}var H_=.3,OI=.02;function FI(t,e=H.feedback.coverGlowLength,n=H.move,i=H.cover){let s=t.edge,r=n.radius+i.gap,o=Math.max(.05,Math.min(s.length,Number.isFinite(e)?e:s.length)),a=o/2,l=Math.max(a,s.length-o/2),c=Math.max(a,Math.min(l,t.t)),h=Math.max(.05,Math.min(H_,s.depth||H_)),d=r+h/2;return{x:s.a[0]+s.tangent[0]*c-s.normal[0]*d,y:s.height+OI,z:s.a[1]+s.tangent[1]*c-s.normal[1]*d,len:o,width:h,yaw:Math.atan2(-s.tangent[1],s.tangent[0])}}function G_({feedback:t=()=>H.feedback}={}){let e=0,n=null,i={x:0,v:0},s={opacity:0,amount:0,strip:null};return{update(r,o){let a=t(),l=a.coverGlow>0&&!!o,c=r>0&&Number.isFinite(r)?r:0;l&&(o.edge!==n?(n=o.edge,i.x=o.t,i.v=0):Rn(i,o.t,.05,c));let h=Math.max(a.coverGlowFade,.001);return e=Math.max(0,Math.min(1,e+(l?c:-c)/h)),s.amount=e,s.opacity=e*Math.max(0,a.coverGlowOpacity),s.strip=e>0&&n?FI({edge:n,t:i.x},a.coverGlowLength):null,e===0&&(n=null),s},reset(){e=0,n=null}}}var UI=5111744;function BI(){let t=document.createElement("canvas");t.width=64,t.height=16;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.18,"rgba(255,255,255,1)"),n.addColorStop(.82,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,16),e.globalCompositeOperation="destination-in";let i=e.createLinearGradient(0,0,0,16);i.addColorStop(0,"rgba(255,255,255,0.15)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0.15)"),e.fillStyle=i,e.fillRect(0,0,64,16);let s=new Kr(t);return s.colorSpace=xn,s}function V_(t){let e=G_(),n=BI(),i=new Zt({color:UI,map:n,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),s=new Li(1,1).rotateX(-Math.PI/2),r=new rt(s,i);r.name="coverGlow",r.visible=!1,r.frustumCulled=!1,r.renderOrder=5,t.add(r);let o=0;return{mesh:r,model:e,update(a,l){o+=a>0?a:0;let c=e.update(a,l),h=c.strip;if(r.visible=!!h&&c.opacity>.002,!r.visible)return!1;let d=H.feedback.coverGlowHz,u=d>0?.72+.28*Math.sin(2*Math.PI*d*o):1;return i.opacity=Math.min(1,c.opacity*u),r.position.set(h.x,h.y,h.z),r.rotation.y=h.yaw,r.scale.set(h.len,1,h.width*3),!0},reset(){e.reset(),r.visible=!1},dispose(){t.remove(r),s.dispose(),i.dispose(),n.dispose()}}}function W_({feedback:t=()=>H.feedback}={}){let e=0;return{trigger(n=t().slamHitstop){n>0&&Number.isFinite(n)&&(e=Math.max(e,n))},scale(n){if(!(e>0))return 1;e=Math.max(0,e-(n>0&&Number.isFinite(n)?n:0));let i=t().hitstopScale;return Number.isFinite(i)?Math.max(0,Math.min(1,i)):1},active:()=>e>0,reset(){e=0}}}function X_({getPads:t=()=>[],feedback:e=()=>H.feedback}={}){return{pulse(n,i,{weak:s=.6,strong:r=1}={}){if(!(e().rumble>0)||!(n>0)||!(i>0))return!1;let o=Math.min(1,n);try{let a=t()||[];for(let l of a){let c=l&&l.connected&&l.vibrationActuator;if(!c||typeof c.playEffect!="function")continue;let h=c.playEffect("dual-rumble",{startDelay:0,duration:Math.round(i*1e3),weakMagnitude:Math.min(1,o*s),strongMagnitude:Math.min(1,o*r)});return h&&typeof h.catch=="function"&&h.catch(()=>{}),!0}}catch{}return!1}}}var Y_=Math.PI*2;function zI(t,{amp:e=0,hz:n=0,ramp:i=0}={}){if(!(e>0)||!(t>=0)||!Number.isFinite(t)||!Number.isFinite(e))return 0;let s=Number.isFinite(n)&&n>0?n:0,r=i>0?Math.min(1,t/i):1;return e*r*(.7*Math.sin(Y_*s*t)+.3*Math.sin(Y_*s*2.3*t+1.3))}function q_(t,e){let n=(Number.isFinite(e)?e:0)*Math.PI/180,i=Math.cos(n),s=Math.sin(n);return[t[0]*i+t[2]*s,t[1],-t[0]*s+t[2]*i]}function $_({feedback:t=()=>H.feedback}={}){let e=0,n=0;return{update(i,s){let r=t();return s?e+=i>0&&Number.isFinite(i)?i:0:e=0,n=s?zI(e,{amp:r.blindDrift,hz:r.blindDriftHz,ramp:r.blindDriftRamp}):0,n},drift:()=>n,time:()=>e,reset(){e=0,n=0}}}function HI(t,e,n=H.feedback){let i=Math.max(0,Math.min(1,n.reloadTickLead)),s=e.perfectStart;return!(i>0)||!(t<s)||!(t>=s-i)?{active:!1,near:0}:{active:!0,near:Math.max(0,Math.min(1,(t-(s-i))/i))}}function K_({feedback:t=()=>H.feedback}={}){let e=0;return{step(n,i,s,r=!1){let o=t(),a=r?{active:!1,near:0}:HI(i,s,o);if(!a.active)return e=0,null;if(e-=n>0?n:0,e>0)return null;let l=Math.max(o.reloadTickSlow,.01),c=Math.max(Math.min(o.reloadTickFast,l),.01);return e=l+(c-l)*a.near,{tick:!0,pitch:a.near}},reset(){e=0}}}var cf="gyms-of-war.tutorial",GI=Object.freeze([{id:"run",when:t=>t.arena==="turnstiles"&&!t.inCover,done:t=>t.inCover,text:t=>`Enemies ahead \u2014 RUN to cover! Run straight into it, or tap ${t.cover}`},{id:"pop",when:t=>t.inCover,done:t=>t.popped,text:t=>`Hold ${t.pop} to pop out and aim`},{id:"blind",when:t=>t.inCover&&(t.aimedKills>=1||t.coverTime>=H.feedback.hintCoverDelay),done:t=>t.blindFired,text:()=>"Fire without aiming to blind-fire \u2014 safe, but wild"},{id:"reload",when:t=>t.lowAmmo,done:t=>t.reloading||!t.lowAmmo,text:t=>`RELOAD \u2014 ${t.reload}  (press again in the bright zone)`},{id:"trainer",when:t=>t.trainerSeen,done:t=>t.revving,text:t=>`Trainers charge! Hold ${t.melee} to rev Cheat Day`},{id:"finish",when:t=>t.downedRep,done:t=>t.finishing||!t.downedRep,text:t=>`${t.finish} to finish it`},{id:"sauna",when:t=>t.saunaOpen,done:t=>t.thrown||!t.saunaOpen,text:(t,e)=>e==="pad"?`Throw a kettlebell (${t.grenade}, LT aim, RT throw) into the sauna to close it`:`Throw a kettlebell (${t.grenade}) into the sauna to close it`}]);function VI(t){try{let e=t&&t.getItem(cf),n=e?JSON.parse(e):null;return n&&typeof n=="object"&&n.seen&&typeof n.seen=="object"?{...n.seen}:{}}catch{return{}}}function Z_(t,e){try{t&&t.setItem(cf,JSON.stringify({seen:e}))}catch{}}function WI(t){try{t&&(t.removeItem?t.removeItem(cf):t.setItem(cf,JSON.stringify({seen:{}})))}catch{}}function j_({storage:t=null,hints:e=GI,feedback:n=()=>H.feedback}={}){let i=VI(t),s=null,r=new Map;return{step(a,l){let c=n();if(!(c.hint>0)||!l||l.blocked)return null;let h=a>0&&Number.isFinite(a)?a:0;if(s&&(s.t+=h,(s.t>=c.hintTime||s.hint.done(l))&&(i[s.hint.id]=!0,Z_(t,i),s=null)),!s){for(let m of e)i[m.id]||(m.when(l)&&!m.done(l)?r.set(m.id,(r.get(m.id)||0)+h):r.delete(m.id));for(let m of e)if(!(i[m.id]||!r.has(m.id))){s={hint:m,t:0},r.delete(m.id);break}}if(!s)return null;let d=l.device==="pad"?"pad":"kbm",u=Math.max(c.hintFade,.001),f=Math.max(0,Math.min(1,s.t/u,(c.hintTime-s.t)/u));return{id:s.hint.id,text:s.hint.text(Ma[d],d),opacity:f}},seen:a=>!!i[a],reset(){i={},s=null,r.clear(),WI(t)},know(a){i[a]||(i[a]=!0,Z_(t,i)),s&&s.hint.id===a&&(s=null)}}}var hf=.05;function XI({locked:t,device:e,panelOpen:n}){return!!(t||e==="pad"||n)}function J_(t){return`${t.gap}|${t.endInset}|${t.minLength}`}function YI(t){if(t&&t.has("room"))return{name:"greyRoom",jumped:!1};let e=t&&t.get("arena");return e&&hn.includes(e)?{name:e,jumped:!0}:{name:hn[0],jumped:!1}}function qI(t,e,{downed:n=!1,busy:i=!1}={}){return n&&(e.reload=!1,e.weapon=null,e.fire=!1,e.firePressed=!1),(n||i)&&(t.fire=!1),t}function $I(t,e,n=!1){if(!(n||e.some(s=>t.held[s])))return!1;for(let s of e)t.held[s]=!1,t.pressed[s]=!1;return!0}function Wm(t){return!(t&&(t.has("room")||t.has("arena")||t.has("skipTitle")))}var KI=2e3,ZI=500,jI=500,JI=new Set(["bossLob","lobLand","bossPhase","enemyShot","playerHit","telegraph","death","clear","bark","down","explode","padOpen","padClosed","padSpawn","tobbleShot","tobbleHit","revived","checkpoint"]);function Q_(){try{return window.localStorage||null}catch{return null}}function eM({canvas:t,gl:e,params:n}){let i=Xu(t,e),s=i.renderer,r=Wu(t),o=document.getElementById("cr-readout");o.style.display="none";let a=document.getElementById("cr-pause"),l={panelOpen:()=>!1};window.__cr.hooks=l;let c=jy();l.panelOpen=c.isOpen;let h=new Yr,d=new Hn(H.camera.fov,1,.05,100),u=Yu();h.add(u.mesh);let f=YI(n),m=Sy({storage:f.name==="greyRoom"||!Wm(n)?null:Q_()}),y=null,g="",p=null,v=null,_=[],M={pos:[0,0,0],yaw:0},S=[],E=[],x=null,b=[],P=new Map,L=null,C=null,w=null,D=null,k=null,I=null,F=[],z=()=>ib(_,{...nb(),exclude:p.coverExclude}),$=J_(H.cover),X=[],j=0,W=!1,ee=pb({boxes:_,spawn:[0,0,0],coverEdges:[],onAction(U){I&&I.onAction(U)},onState(U,de){X.push({state:U,from:de,t:j,tapped:W,auto:U==="coverSlide"&&!W&&(de==="move"||de==="sprint")}),X.length>KI&&X.shift()},onStep(U){te.dip(H.feedback.stepDip),be.play("step",H.feedback.stepVolume*(U.sprint?1.25:1))}}),Me=Wb(ee);h.add(Me.group);let te=ey(),oe=dd(),be=mb({AudioContextCtor:window.AudioContext||window.webkitAudioContext}),Oe=Q_(),ne=Ey(Oe),Ce=null,Fe=()=>Ce!==null?Ce:ne.storyCards&&(n&&n.has("cards")||Wm(n));function Be(){be.setVolume(ne.volume),H.look.invertY=ne.invertY,m.cards=Fe()}Be();let Xe=gb(),Ye=V_(h),me=W_(),Pe=X_({getPads:()=>{try{return navigator.getGamepads&&navigator.getGamepads()||[]}catch{return[]}}}),ke=$_(),xe=K_(),Ee=j_({storage:Oe}),qe={aimedKills:0,coverTime:0,blindFired:!1,lastKettlebells:-1,thrown:!1,finishing:!1},we=null,_e=null,Re=null,Le=0,q=new G,Je=z_(),se=!1,ae=yb(),N=Rb(h),Z=Pb(document.body),K=Xy(),ye=!1,R=null,T=-1,V=fa(1),ie=T1(),J=d1(),fe=!1,Se=null,ce=0,re={restart:()=>{fe=!0},marker:U=>{Se=U,ce=H.feedback.killMarkerTime},tobbleView:null,objective:()=>Ht(),lookAt:U=>{let de=b1(kt.pos,U.pos);de&&de.yaw!==null&&te.turnTo(de.yaw,de.pitch)},rumble:(U,de)=>{r.device()==="pad"&&Pe.pulse(U,de)}};function Ne(){!x||k===x.tobble||(D&&(y.remove(D.group),O0(D.group)),D=x.tobble?i1(x.tobble):null,D&&y.add(D.group),k=x.tobble,re.tobbleView=D)}function Y(){I&&I.silence(),y&&(O0(y),y=null,D=null,k=null,re.tobbleView=null)}function pe(U){Y(),g=U,p=U==="greyRoom"?gd:by[U],y=new dt,y.name=`arena-${U}`,h.add(y),v=cy(p),y.add(v.group),_=v.boxes,M=p.spawn,ee.boxes=_,ee.coverEdges=z(),S=(p.dummies||[]).map(de=>{let Ue=wb(de),tt=Ib(Ue);return y.add(tt.group),{dummy:Ue,view:tt,wasAlive:!0}}),E=S.map(de=>de.dummy),x=U==="greyRoom"?null:N_({level:p,boxes:_,edges:z(),rand:fa(4242)}),b=x?x.enemies.map(de=>{let Ue=Zb(de);return y.add(Ue.group),Ue}):[],P=new Map(x?x.enemies.map((de,Ue)=>[de,b[Ue]]):[]),L=x?zb(y):null,C=x?s1(y,x.pads,N):null,w=x?B_({scene:y,effects:N,sfx:be,fight:x,views:b,cam:te,hooks:re}):null,Ne(),I=x?S1({mover:ee,fight:x,arsenal:ae,bag:J,cam:te,sfx:be,effects:N,views:b,health:ie,playerView:Me,grenadeView:L,boxes:_,hooks:re}):null,F=x?x.targets():E,v.setGateOpen(!1,!0),he=!1,Je.reset(),v.setCancelLit(!1)}let he=!1,De=[],Ae=null;function Te(U,de="",Ue=1.4,tt=0){Ae&&Ae.t>0&&Ae.prio>tt||(Ae={text:U,kind:de,t:Ue,prio:tt})}let Ge=[],nt={pos:[0,0,0],yaw:0},ge=[],ze="-",Qe="-",Ie=null,ot=null,Rt=0,Mt=1,Ft=[],Yt={dir:[0,0,1],stance:null,weapon:"regret",shot:!1},Jt=[0,0,0],zt=0,tn=[0,0,0],xt=null,qt=!1,Ct=null,li=!1,Ei=!1,nr=!1,yt={cover:!1,fire:!1,reload:!1,weapon:null,interact:!1,melee:!1,objective:!1,equip:!1,switched:!1},Qt={reload:!1,weapon:null,fire:!1,interact:!1,melee:!1,objective:!1,equip:!1},Ai={melee:!1,interact:!1,objective:!1,equip:!1,switched:!1},Pn={melee:!1,grenade:!1,interact:!1,tac:!1},on={moveX:0,moveY:0,camYaw:0,sprint:!1,aim:!1,tap:!1,fire:!1,grenade:!1,interactHeld:!1},bn={weapon:null,reload:!1,fire:!1,firePressed:!1},uf=[["weapon1",1],["weapon2",2],["weapon3",3],["weaponNext","next"],["weaponPrev","prev"]];function Pc(){let U=i.resize();d.aspect=U.aspect,d.updateProjectionMatrix()}Pc(),window.addEventListener("resize",Pc),t.addEventListener("click",()=>r.requestLock());let wo=()=>{oe.reset(),Xe.reset()};window.addEventListener("blur",wo),document.addEventListener("pointerlockchange",()=>{r.isLocked()||wo()});let O=()=>be.unlock();window.addEventListener("pointerdown",O);let Q=()=>{se=!0},ve=U=>{!U.repeat&&U.code!=="Escape"&&(ye=!0)};window.addEventListener("keydown",ve),window.addEventListener("pointerdown",()=>{ye=!0}),window.addEventListener("keydown",Q),window.addEventListener("pointerdown",Q),window.addEventListener("keydown",O),window.addEventListener("keydown",U=>{U.repeat||jp(U.target)||(U.code==="Backquote"?(c.toggle(),c.isOpen()&&document.exitPointerLock&&document.exitPointerLock()):U.code==="KeyH"&&(o.style.display=o.style.display==="none"?"":"none"))});function le(){ie.reset(),ae.reset(),J.reset(),Hi(M.pos,M.yaw),Ie=null,oe.reset(),Xe.reset(),te.recenter(),N.clear(),Ye.reset(),me.reset(),ke.reset(),xe.reset(),qe.coverTime=0,qe.blindFired=!1,qe.lastKettlebells=-1,Ft.length=0,De.length=0,Se=null,ot=null,ce=0,Rt=0,fe=!1}function ue(){if(m.cards){m.phase==="play"&&(T=Gy(Math.random,T),R={kind:"defeat",lines:L0[T]},m.beginDefeat());return}Ve(),Te("Your membership has been renewed.","over",3.2,3)}function Ve(U=!1){x&&x.reset(),le(),w&&w.reset();for(let de of b)de.reset();x&&(I.reset(),L.reset(),C.reset(),Ne(),D&&D.reset()),U||m.restart(),v.setGateOpen(!1,!0),he=!1,Je.reset(),v.setCancelLit(!1)}function je(U,de=!1){pe(U),le(),te.snap(M.pos,M.yaw,"normal",1),et=U==="greyRoom"||de?0:H.run.hoursTime,Ae=null,de||We(U)}function We(U){w&&U==="smoothie"?w.forceBark("paSmoothie"):w&&U==="desk"&&w.forceBark("paDesk")}function Ke(){et=H.run.hoursTime,We(m.arena),Te("Progress photo saved.","photo",2.6,2)}let et=0;function gt(){if(x.boss){Je.start();return}m.markClear()&&!he&&(he=!0,v.setGateOpen(!0),be.play("saunaOpen",H.feedback.saunaVolume),w.forceBark("paGate"))}function Et(){ee.state!=="downed"&&ee.down(),ae.cancelReload(),be.play("downed",H.feedback.hurtVolume),w&&w.forceBark("downed")}function it(U){let de=se;if(se=!1,Je.state==="off")return;let Ue=p.overlord;for(let tt of Je.step(U,{atDesk:!ie.downed&&Vm(ee.pos,Ue&&Ue.desk,H.ending.deskReach),hold:Pn.interact,press:de}))un(tt),tt.type==="deskLit"?(v.setCancelLit(!0),be.play("saunaOpen",H.feedback.saunaVolume)):tt.type==="cancelled"?be.play("clear",H.feedback.killVolume):tt.type==="toTitle"&&Pt()}function Pt(){if(typeof l.toTitle=="function"){l.toTitle();return}m.newRun(),je(hn[0])}function un(U){Ge.push({t:j,type:U.type,id:U.id||null,accurate:!!U.accurate,hit:U.type==="playerHit",key:U.key||null,kind:U.kind||null}),Ge.length>jI&&Ge.shift()}function $t(U){let de=H.feedback;nt.pos[0]=ee.pos[0],nt.pos[1]=ee.pos[1],nt.pos[2]=ee.pos[2],nt.yaw=te.yaw;let Ue=x.step(U,{m:ee,health:ie,aim:{lens:kt.pos,dir:kt.dir,active:!!Ie&&Ie!=="blind"||ee.grenadeAim}});w.handle(Ue,nt);for(let Lt of Ue)if(JI.has(Lt.type)&&un(Lt),Lt.type==="playerHit"){let Gt=lf(te.yaw,ee.pos,Lt.from);De.push({t:j,angle:Gt});let zn=Math.random()*2*Math.PI;te.kick(de.hitKick*Math.cos(zn),de.hitKick*Math.sin(zn)),be.play("hurt",de.hurtVolume,Math.sin(Gt)),I.onPlayerHit(),Lt.result==="downed"&&Et()}else Lt.type==="clear"&&(be.play("clear",de.killVolume),gt());for(;De.length&&j-De[0].t>de.hitFlashTime;)De.shift();let tt=ie.update(U,{standIn:!x.tobble});if(tt==="revived"&&ee.revive(),tt==="bleedOut"||fe){ue();return}let ct=ie.downed?0:w.collect(ee.pos,H.combat.pickupRadius);if(ct){let Lt=ae.ammo.regret.reserve;ae.addReserve("regret",ct*H.associate.ammoDrop);let Gt=Math.round(ae.ammo.regret.reserve-Lt);Gt>0&&Te(`+${Gt} scoops`,"scoops",1.2,1),be.play("pickup",de.pickupVolume)}}function Ht(){if(!x)return null;let U=p.overlord;return y1({bossArena:!!p.boss,boss:x.boss,ending:Je.state,desk:U&&U.desk,exit:p.exit,gateOpen:m.gateOpen&&he})}function In(){let U=ba[m.arena];if(p.boss){let de=x.boss;return Je.state==="slump"?"The Membership Overlord has fallen":Je.state==="desk"?"Cancel your membership at the desk":Je.locked?"":!de||!x.started?U:de.invuln?`Invulnerable! ${lo("sauna",r.device())}`:`${U}: shoot the Overlord. Head shots count double`}return x.clear?m.gateOpen?`${U}: clear \u2014 head for the GO gate`:`${U}: set complete`:x.pads.some(de=>de.state==="open")?lo("sauna",r.device()):x.started?m.arena==="turnstiles"?"Get past the front desk":`${U}: clear the room`:"Walk in"}let st="THE MEMBERSHIP OVERLORD";function Bn(){let U=x&&x.boss;return!U||!x.started||!U.alive?null:{name:st,fraction:U.health/H.boss.health,phase:U.phase,invuln:U.invuln,hint:U.invuln?"INVULNERABLE \u2014 close the Spawn Saunas":""}}function Ot(){if(Je.state!=="cards"&&Je.state!=="done")return null;let U=Oa[Math.min(Je.card,Oa.length-1)];return{card:Je.card,lines:U.lines,tone:U.tone,final:Je.card===Oa.length-1}}function Hi(U,de){ee.place(U,de),te.snap(U,de,j0(ee),ho(ee)),zt=ee.slams}let kt={pos:[0,0,0],dir:[0,0,1],fov:70},So={revving:!1,grinding:!1},Gi=[0,1],Ri="normal",It=1,vn=0,Jn=0,Kt=0,an=0,ci=0,Br=0,df=0,lt=window.__cr;lt.stats=()=>({fps:vn,ms:Jn,calls:ci,tris:Br,scale:i.scale(),characters:1+b.length+(D?1:0)}),lt.player=()=>{let U=ee.cover;return{pos:ee.pos.slice(),state:ee.state,speed:ee.speed(),facing:ee.facing,entries:ee.entries,cover:U?{id:U.edge.id,kind:U.edge.kind,t:U.t,length:U.edge.length,pop:U.pop,exposed:U.exposed}:null,slams:ee.slams,steps:ee.steps,blind:U?U.blind:0,firing:!!ee.firing}},lt.gun=()=>{let U=ae.current(),de=ae.ammo[U],Ue=ae.reload,tt=H.weapons[U];return{id:U,slot:ae.slot,mag:de.mag,reserve:de.reserve,boost:de.boost,reload:Ue?{u:Ue.t/Math.max(tt.reloadTime,H.combat.minReloadTime),press:Ue.press}:null,switching:ae.switching>0,spread:ae.spreadOf(Ie||"hip"),stance:Ie}},lt.dummies=()=>E.map(U=>({id:U.id,health:U.health,alive:U.alive,pos:U.pos.slice()})),lt.level=()=>g,lt.run=()=>({kind:m.kind,cards:m.cards,arena:m.arena,index:m.index,checkpoint:m.checkpoint,phase:m.phase,cleared:m.cleared,gateOpen:m.gateOpen,fade:m.fade,saved:m.saved,hours:et>0?_a(m.checkpoint):null}),lt.card=()=>({visible:K.visible,text:K.text()}),lt.setCards=U=>{Ce=U===null?null:!!U,m.cards=Fe()},lt.gate=()=>p.exit?{pos:p.exit.pos.slice(),yaw:p.exit.yaw,w:p.exit.w,open:he,openness:v.gate?v.gate.openness():0}:null,lt.go=U=>hn.includes(U)?(m.goTo(nc(U)),je(U),!0):!1,lt.clearArena=()=>x?x.forceClear():!1,lt.gpu=()=>{let U=s.info;return{geometries:U.memory.geometries,textures:U.memory.textures,programs:(U.programs||[]).length,calls:ci,tris:Br}},lt.boss=()=>{let U=x&&x.boss;return U?{state:U.state,phase:U.phase,invuln:U.invuln,health:U.health,alive:U.alive,pos:U.pos.slice(),pop:U.pop,saunasOpen:U.saunasOpen,markers:x.lobMarkers.map(de=>({pos:de.pos.slice(),radius:de.radius}))}:null},lt.ending=()=>({state:Je.state,card:Je.card,hold:Je.hold,lit:Je.lit}),lt.hurtBoss=(U,de="body")=>{let Ue=x&&x.boss;return Ue?x.hurt(Ue,U,de):null},lt.closePads=()=>x?x.closePads():!1,lt.bossReady=()=>x&&x.boss?(x.readyBoss(),!0):!1,lt.fight=()=>x?{started:x.started,clear:x.clear,tokens:x.tokens.held(),pickups:w.count(),pickupPos:w.pickups(),enemies:x.enemies.filter(U=>U.state!=="unused").map(U=>({id:U.id,slot:x.enemies.indexOf(U),kind:U.kind||"associate",state:U.state,health:U.health,alive:U.alive,pos:U.pos.slice(),holds:x.tokens.holds(U.id),role:U.role,point:U.point?U.point.index:null,pop:U.pop}))}:{started:!1,clear:!1,tokens:[],pickups:0,enemies:[]},lt.tobble=()=>{let U=x&&x.tobble;return U?{state:U.state,hp:U.hp,downed:U.downed,pos:U.pos.slice(),point:U.point?U.point.index:null}:null},lt.pads=()=>x?x.pads.map(U=>({id:U.id,state:U.state,spawned:U.spawned,alive:U.alive})):[],lt.grenades=()=>({count:J.count,live:x?x.grenades.live.map(U=>({pos:U.pos.slice(),fuse:U.fuse})):[]}),lt.aimThrow=(U,de)=>I?I.aimThrow(U,de):!1,lt.hurtTobble=U=>x?x.hurtTobble(U):null,lt.spawnTrainer=U=>{let de=x&&x.spawnTrainer(U);return de?de.id:null},lt.downRep=U=>{let de=x&&x.enemies.find(Ue=>Ue.id===U);return!!de&&x.downRep(de)},lt.openPad=U=>x?x.openPad(U):!1,lt.spawnRep=()=>{let U=x&&x.spawnRep();return U?U.id:null},lt.health=()=>({hp:ie.hp,max:H.health.max,downed:ie.downed,downT:ie.downT}),lt.hurt=U=>{ie.damage(U)==="downed"&&Et()},lt.god=U=>{H.health.godMode=U?1:0},lt.simTime=()=>j,lt.fightLog=()=>Ge.map(U=>({...U})),lt.clearFightLog=()=>{Ge.length=0},lt.restart=()=>Ve(),lt.shots=()=>ge.map(U=>({...U})),lt.clearShots=()=>{ge.length=0},lt.setGun=(U,de)=>ae.set(U,de),lt.look=(U,de)=>{te.yaw=U,te.pitch=de},lt.hint=()=>we?{id:we.id,text:we.text,opacity:we.opacity}:null,lt.glow=()=>({visible:Ye.mesh.visible,opacity:Ye.mesh.material.opacity,edge:Re?Re.edge.id:null,pos:Ye.mesh.position.toArray(),scale:Ye.mesh.scale.toArray()}),lt.tac=()=>_e,lt.fov=()=>d.fov,lt.hitstop=()=>me.active(),lt.blindDrift=()=>ke.drift(),lt.camera=()=>{let U=kt;return{pos:U.pos.slice(),fov:U.fov,inside:xa(_,U.pos,.1),mode:Ri,side:It,yaw:te.yaw,pitch:te.pitch}},lt.transitions=()=>X.map(U=>({...U})),lt.clearTransitions=()=>{X.length=0},lt.coverTarget=()=>{let U=Ct||{moveX:xt?xt.moveX:0,moveY:xt?xt.moveY:0},de=Ea(ee.coverEdges,_,ee.pos,Td(ee,{moveX:U.moveX||0,moveY:U.moveY||0,camYaw:te.yaw},[0,0]),te.yaw,H.cover,H.move.radius);return de?{id:de.edge.id,kind:de.edge.kind,dist:de.dist}:null},lt.place=U=>{let de=U==="spawn"?M:p.features[U];de&&Hi(de.pos,de.yaw)},lt.at=(U,de,Ue=0)=>Hi([U,0,de],Ue),lt.drive=U=>{if(!U){li?Ei=!0:Ct=null;return}U.fire&&!(Ct&&Ct.fire)&&(Qt.fire=!0),U.melee&&!(Ct&&Ct.melee)&&(Qt.melee=!0),U.objective&&!(Ct&&Ct.objective)&&(Qt.objective=!0),U.equip&&!(Ct&&Ct.equip)&&(Qt.equip=!0),Ct=U,Ei=!1,U.tap&&(li=!0),U.reload&&(Qt.reload=!0),U.interact&&(Qt.interact=!0),U.weapon&&(Qt.weapon=U.weapon)};function tM(U){if(Ct){on.moveX=Ct.moveX||0,on.moveY=Ct.moveY||0,on.sprint=!!Ct.sprint,on.aim=!!Ct.aim,on.tap=li;let de=Xe.update(!!Ct.fire,Qt.fire,!0);Qt.fire=!1,on.fire=de.fire,bn.fire=de.fire,bn.firePressed=de.firePressed,bn.reload=Qt.reload,bn.weapon=Qt.weapon,Qt.reload=!1,Qt.weapon=null,Pn.melee=!!Ct.melee,Pn.grenade=!!Ct.grenade,Pn.interact=!!Ct.interactHeld,Pn.tac=!!Ct.tac,li&&(li=!1,Ei&&(Ct=null,Ei=!1))}else{let de=xt.held;on.moveX=xt.moveX,on.moveY=xt.moveY,on.tap=oe.update(de.cover,yt.cover,U,H.move.tapMax),on.sprint=de.sprint||oe.holding(),on.aim=de.aim;let Ue=Xe.update(de.fire,yt.fire,!0);on.fire=Ue.fire,bn.fire=Ue.fire,bn.firePressed=Ue.firePressed,bn.reload=yt.reload,bn.weapon=yt.weapon,Pn.melee=de.melee,Pn.grenade=de.grenade,Pn.interact=de.interact,Pn.tac=de.tacCom}return Ai.interact=yt.interact||Qt.interact,Ai.melee=yt.melee||Qt.melee,Ai.objective=yt.objective||Qt.objective,Ai.equip=yt.equip||Qt.equip,Ai.switched=yt.switched,on.grenade=Pn.grenade,on.interactHeld=Pn.interact,yt.cover=!1,yt.fire=!1,yt.reload=!1,yt.weapon=null,yt.interact=!1,yt.melee=!1,yt.objective=!1,yt.equip=!1,yt.switched=!1,Qt.interact=!1,Qt.melee=!1,Qt.objective=!1,Qt.equip=!1,on.camYaw=te.yaw,W=on.tap,on}let nM=U=>U.toFixed(1);function iM(){let U=ee.cover;if(U)return`cover: ${U.edge.kind} ${U.edge.id}  t ${U.t.toFixed(2)}/${U.edge.length.toFixed(2)}  pop ${U.pop.toFixed(2)}`;let de=lt.coverTarget();return de?`tap grabs: ${de.kind} ${de.dist.toFixed(1)} m`:"tap grabs: nothing"}function sM(){let U=lt.gun(),de=U.id;return`gun: ${Cd[de].name} ${U.mag}/${H.weapons[de].infiniteReserve>0?"\u221E":U.reserve}  ${U.stance||"-"}  spread ${U.spread.toFixed(1)}`}function Ym(){let U=r.padStatus(),de=[x?`GYMS OF WAR \u2014 ${ba[m.arena].toUpperCase()}`:"GUNPLAY TEST","Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint","Gamepad (Gears layout): left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), A tap: take cover or roll, hold: sprint, D-pad Right Regret / Down Guest Pass / Up kettlebells, Y finish or look at the objective, LB Tac/Com, Start pause, View controls","In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave"];if(x&&de.push("E / X: hold to renew your membership when downed, another set when clear","F / B: tap bash, hold rev Cheat Day (The Regret)   G: hold to aim a kettlebell, release to throw (pad: D-pad Up, LT aim, RT throw)   E / Y: finish a downed Rep   E / X: hold to revive Tobble"),de.push("Sound starts after a click or key","",`${ee.state}   ${ee.speed().toFixed(2)} m/s`,iM(),sM()),x){de.push(`fight: ${x.enemies.filter(ct=>ct.alive).length}/${x.enemies.filter(ct=>ct.state!=="unused").length}  tokens ${x.tokens.held().join(",")||"-"}  hp ${ie.hp.toFixed(0)}`),de.push(`health: ${ie.hp.toFixed(0)}/${H.health.max}  ${ie.downed?`downed ${ie.downT.toFixed(1)}`:"-"}`);let Ue=x.tobble,tt=x.pads[0];de.push(`tobble: ${Ue?`${Ue.state} hp ${Ue.hp.toFixed(0)}`:"off"}`,`sauna: ${tt?`${tt.state} ${tt.spawned}/${H.pad.total}`:"-"}   kettlebells ${J.count}`)}else de.push(`dummies: ${E.filter(Ue=>Ue.alive).length}/${E.length}  last: ${ze} ${Qe}`);de.push(`${Math.round(vn)} fps   ${nM(Jn)} ms   scale ${i.scale()}`,`${ci} draw calls   ${Br} triangles`,`Pointer lock: ${r.isLocked()?"yes":"no"}   Gamepad: ${U}`,"` tuning panel    ?look look test    H show/hide this read-out"),o.textContent=de.join(`
`)}let Ic=U=>H.feedback[U];function rM(U){U.type==="shot"?dM(U):U.type==="reloadStart"?be.play("magOut",Ic("reloadVolume")):U.type==="reloadPress"?(be.play(U.result,Ic("reloadVolume")),ot=U.result,Rt=0):U.type==="reloadDone"?be.play("magIn",Ic("reloadVolume")):U.type==="dry"&&be.play("dry",Ic("reloadVolume"))}function oM(U){let de=ae.reload;if(!de){xe.reset();return}let Ue=H.weapons[de.id],tt=Math.max(Ue.reloadTime,H.combat.minReloadTime),ct=xe.step(U,de.t/tt,Ue,de.press!==null);ct&&be.play("reloadTick",H.feedback.reloadTickVolume,0,ct.pitch)}let Lc=[0,0,0];function aM(){let U=H.feedback;te.slam(),be.play("thud",H.cover.thudVolume),me.trigger(),r.device()==="pad"&&Pe.pulse(U.slamRumble,U.slamRumbleTime);let de=ee.cover;if(de&&qt){let Ue=de.edge,tt=wi(Ue,de.t),ct=H.move.radius+H.cover.gap;Lc[0]=tt[0]-Ue.normal[0]*ct,Lc[1]=0,Lc[2]=tt[1]-Ue.normal[1]*ct,N.dust(Lc,Ue.normal,Ue.tangent)}}function lM(U){let de=ee.cover,Ue=qe,tt=fi||_n.open||!qt||!x||ie.downed||m.fading||Je.state!=="off"||x.clear;if(tt&&!x)return{blocked:!0};qt&&!tt&&(de?Ue.coverTime+=U:(Ue.coverTime=0,Ue.blindFired=!1));let ct=ae.current(),Lt=ae.ammo[ct],Gt=H.weapons[ct],zn=Lt.mag<=Math.max(0,H.feedback.lowAmmoFrac)*Gt.mag&&(Gt.infiniteReserve>0||Lt.reserve>0);Ue.thrown=Ue.lastKettlebells>=0&&J.count<Ue.lastKettlebells,Ue.lastKettlebells=J.count;let Ci=I?I.execution():null,ln=x.enemies.filter(Qn=>Qn.alive&&Qn.state!=="unused");return{blocked:tt,device:r.device(),arena:m.arena,fightStarted:x.started,inCover:!!de,popped:!!de&&de.pop>=.5,coverTime:Ue.coverTime,aimedKills:Ue.aimedKills,blindFired:Ue.blindFired,lowAmmo:zn,reloading:ae.reload!==null,revving:ee.state==="rev",finishing:!!Ci&&Ci.kind==="stomp",thrown:Ue.thrown,trainerSeen:ln.some(Qn=>Qn.kind==="trainer"),downedRep:ln.some(Qn=>Qn.state==="downed"&&Math.hypot(Qn.pos[0]-ee.pos[0],Qn.pos[2]-ee.pos[2])<12),saunaOpen:x.pads.some(Qn=>Qn.state==="open")}}function cM(){if(!x||!qt)return null;let U=x.tobble,de=w1({held:Pn.tac,blocked:fi||_n.open,objective:Ht(),tobble:U?{pos:U.pos,frac:U.hp/Math.max(H.tobble.health,1),downed:U.downed}:null});return de.show?(d.updateMatrixWorld(),{show:!0,items:de.items.map(tt=>{q.set(tt.pos[0],tt.pos[1],tt.pos[2]).project(d);let ct=M1(q.x,q.y,q.z>1);return{id:tt.id,kind:tt.kind,label:tt.label,x:ct.x,y:ct.y,off:ct.off,angle:ct.angle,frac:tt.frac,down:tt.down}})}):null}function hM(U,de){Sb(U.dummy,de),U.dummy.alive&&!U.wasAlive&&U.view.respawn(),U.wasAlive=U.dummy.alive}let uM=[0,0,0];function dM(U){let de=H.weapons[U.id],Ue=ee.cover?ee.cover.edge:null;Pd(ee,Ie,te.yaw,H.combat,Jt);let tt=Ie==="blind"?q_(kt.dir,ke.drift()):kt.dir,ct=_b({lens:kt.pos,view:tt,muzzle:Jt,spreadDeg:U.spread,range:de.range,boxes:_,targets:F,ignoreBox:Ue?Ue.boxIndex:-1,rand:V,aimed:Ie==="aim"}),Lt=ct.hit,Gt=Lt.target,zn=null;Gt&&(zn=x?x.hurt(Gt,tm(de,Lt.kind,U.mult),Lt.kind==="head"?"head":"body"):Tb(Gt,tm(de,Lt.kind,U.mult))),ze=Lt.kind,Qe=Gt?Gt.id:"-",ge.push({t:j,kind:Lt.kind,target:Gt?Gt.id:null,point:Lt.point.slice(),stance:Ie}),ge.length>ZI&&ge.shift();let Ci=[ct.dir[0],ct.dir[1],ct.dir[2]];if(Ft.push({id:U.id,from:Jt.slice(),dir:Ci,hit:Lt,target:Gt,result:zn,stance:Ie}),Ie==="blind"&&(qe.blindFired=!0),zn==="kill"&&!x){let ln=S.find(Qn=>Qn.dummy===Gt);ln.wasAlive=!1}}function fM(U){let de=H.weapons[U.id],Ue=H.feedback,tt=Me.gunTip(uM);if(te.kick(de.kickPitch*(.85+.3*Math.random()),(Math.random()*2-1)*de.kickYaw),U.stance==="blind"){let Lt=Math.max(Ue.blindShake,1);te.kick(de.kickPitch*(Lt-1)*(.85+.3*Math.random()),(Math.random()*2-1)*(de.kickYaw*Lt+.4))}N.flash(tt,U.dir),N.tracer(tt,U.hit.point),be.play(U.id==="regret"?"rifle":"pistol",Ue.shotVolume);let ct=[-U.dir[0],-U.dir[1],-U.dir[2]];if(U.hit.kind==="world")N.spark(U.hit.point,ct);else if(U.target){let Lt=x?P.get(U.target):S.find(Gt=>Gt.dummy===U.target).view;U.result==="kill"?(x?(Lt.death(),w.addPickup(U.target.pos)):Lt.burst(),N.gel(U.hit.point,ct,Ue.killGelCount),N.receipts(U.target.pos.map((Gt,zn)=>zn===1?Gt+1.2:Gt),Ue.receiptCount),Se="kill",ce=Ue.killMarkerTime,U.stance==="aim"&&qe.aimedKills++,be.play("kill",Ue.killVolume)):U.result==="down"?(N.gel(U.hit.point,ct,Ue.gelCount),Se="kill",ce=Ue.killMarkerTime,be.play("hit",Ue.hitVolume)):(x||Lt.hit(U.hit.kind),N.gel(U.hit.point,ct),Se=U.hit.kind,ce=Ue.hitMarkerTime,x&&U.hit.kind==="head"&&Te("PR!","pr",.9,0),be.play(U.hit.kind==="head"?"head":"hit",Ue.hitVolume))}}let pM=Vu({timeScale:U=>qt?me.scale(U):1,before(U){xt=r.poll();let de=_n.open;_n.pad(U);let Ue=de||_n.open;!Ue&&xt.pressed.pause&&!fi&&!Ct?vf():!Ue&&xt.pressed.controls&&!fi&&!Ct&&gM();let tt=m.phase==="card";if(tt&&(Object.values(xt.pressed).some(Boolean)&&(ye=!0),zr=!0),zr&&(zr=$I(xt,$m,tt)),Ue)for(let Gt of $m)xt.pressed[Gt]=!1;Object.values(xt.pressed).some(Boolean)&&(se=!0,ye=!0);let ct=!!Ct||li;if(qt=!Ue&&!_n.open&&(ct||XI({locked:r.isLocked(),device:r.device(),panelOpen:l.panelOpen()})),a.hidden=qt||Ue||_n.open,!qt){I&&I.silence(),oe.reset(),Xe.reset(),yt.cover=!1,yt.fire=!1,yt.reload=!1,yt.weapon=null,yt.interact=!1,yt.melee=!1,yt.objective=!1,yt.equip=!1,yt.switched=!1;return}let Lt=Math.min(U,hf);nr=xt.held.aim||Ct&&Ct.aim,te.look(xt.lookDX*ne.mouseSens,xt.lookDY*ne.mouseSens,xt.lookX,xt.lookY,Lt,nr,Mt*ne.padSens),xt.pressed.cover&&(yt.cover=!0),xt.pressed.fire&&(yt.fire=!0),xt.pressed.reload&&(yt.reload=!0),xt.pressed.interact&&(yt.interact=!0),xt.pressed.melee&&(yt.melee=!0),xt.pressed.objective&&(yt.objective=!0),xt.pressed.equipKb&&(yt.equip=!0);for(let[Gt,zn]of uf)xt.pressed[Gt]&&(yt.weapon=zn,zn!==2&&(yt.switched=!0))},step(U){if(!qt)return;let de=J_(H.cover);de!==$&&($=de,ee.coverEdges=z()),j+=U;let Ue=tM(U);if(qI(Ue,bn,{downed:!!x&&ie.downed,busy:ae.reload!==null||ae.switching>0}),(m.fading||Je.locked)&&(Ue.moveX=0,Ue.moveY=0,Ue.tap=!1,Ue.sprint=!1,Ue.fire=!1,Ue.grenade=!1,bn.fire=!1,bn.firePressed=!1),I){let ct=Je.locked;I.step(U,{meleeHeld:Pn.melee&&!ct,meleePressed:Ai.melee&&!ct,grenadeHeld:Pn.grenade&&!ct,interactHeld:Pn.interact&&!ct,interactPressed:Ai.interact&&!ct,objectivePressed:Ai.objective&&!ct,equipPressed:Ai.equip&&!ct,switched:Ai.switched,aimHeld:!!Ue.aim&&!ct,firePressed:bn.firePressed&&!ct,device:r.device(),camYaw:te.yaw,camPitch:te.pitch}),I.equipped()&&(Ue.grenade=I.grenadeIntent()&&!m.fading&&!ct,bn.reload=!1,bn.fire=!1,bn.firePressed=!1,Ue.fire=!1),I.busy()&&(bn.fire=!1,bn.firePressed=!1,Ue.fire=!1),m.fading&&I.silence()}ee.update(Ue,U),Ie=bb(ee),ke.update(U,Ie==="blind");let tt=ae.update(bn,Ie,U);for(let ct of tt)rM(ct);oM(U),x&&(w.tick(U),$t(U),it(U));for(let ct of S)hM(ct,U);if(Eb(ee.pos,p.ammoCrates,H.combat.crateRadius)){let ct=ae.ammo.regret.reserve;ae.refill(),J.refill();let Lt=Math.round(ae.ammo.regret.reserve-ct);Lt>0&&Te(`+${Lt} scoops`,"scoops",1.4,1)}fe&&ue(),x&&he&&!m.fading&&wy(p.exit,ee.pos)&&m.touchGate()&&be.play("clear",H.feedback.killVolume)},render(U,de,Ue=1){let tt=qt?Math.min(de*Ue,hf):0;m.phase==="card"&&ye&&(ye=!1,m.skipCard());for(let nn of _n.open&&m.phase==="card"?[]:m.step(Math.min(de,hf)))nn.type==="swap"?nn.card?(je(nn.to,!0),R={kind:"ride",card:By(nc(nn.from),nc(nn.to))}):(je(nn.to),Te("Progress photo saved.","photo",2.6,2)):nn.type==="defeat"?Ve(!0):nn.type==="cardDone"&&(zr=!0,wo(),nn.kind==="swap"&&Ke());m.phase==="card"?(!K.visible&&R&&(ye=!1,R.kind==="ride"?K.showRide(R.card,()=>be.play("pickup",H.feedback.pickupVolume)):K.showDefeat(R.lines),R=null),K.tick(m.cardElapsed,m.cardLength,H.run.cardSkipDelay)):K.visible&&(K.hide(),R=null),et>0&&qt&&(et=Math.max(0,et-tt)),Ae&&Ae.t>0&&(Ae.t-=tt),mM(m.fade),Yt.shot=Ft.length>0,Yt.dir=kt.dir,Yt.stance=Ie,Yt.weapon=ae.current(),Yt.kettlebell=!!I&&I.handKb(),Yt.blindDrift=ke.drift(),Me.update(U,tt,Yt);for(let nn of S)nn.view.update(tt);for(let nn of b)nn.update(U,tt);w&&(w.update(tt),L.update(x.grenades.live,U,tt,x.lobMarkers),C.update(tt),D&&(D.group.visible=!!x.tobble,x.tobble&&D.update(U,tt)));let ct=ee.pos,Lt=ee.prevPos;for(let nn=0;nn<3;nn++)tn[nn]=Lt[nn]+(ct[nn]-Lt[nn])*U;ee.slams>zt&&(zt=ee.slams,aM());let Gt=j0(ee);if(Gt==="aim"&&Ri!=="aim"){let nn=ee.cover?ee.cover.edge:null;te.hold(Xn(kt.pos,kt.dir,H.camera.holdRange,_,F,{ignoreBox:nn?nn.boxIndex:-1}).point)}Ri=Gt,It=ho(ee);let zn=I?I.status():So,Ci=H.feedback;qt&&(zn.grinding?te.sustain({shake:Ci.grindShake,fov:-Ci.grindZoom,pull:Ci.grindPull}):zn.revving&&te.sustain({shake:Ci.revShake}),Ie==="blind"&&on.fire&&te.sustain({shake:Ci.blindShakeAmp}),Le-=tt,Le<=0&&zn.revving&&r.device()==="pad"&&(Le=.1,Pe.pulse(Ci.revRumble,.12)));let ln=te.update(tt,{target:tn,mode:Ri,side:It},_);kt.pos[0]=ln.pos[0],kt.pos[1]=ln.pos[1],kt.pos[2]=ln.pos[2],kt.fov=ln.fov,kt.dir[0]=ln.dir[0],kt.dir[1]=ln.dir[1],kt.dir[2]=ln.dir[2],d.fov!==ln.fov&&(d.fov=ln.fov,d.updateProjectionMatrix()),Me.fadeHeadFor(ln.pos,H.camera.headHideDist,H.camera.headHideMargin),d.position.set(ln.pos[0],ln.pos[1],ln.pos[2]),d.lookAt(ln.pos[0]+ln.dir[0],ln.pos[1]+ln.dir[1],ln.pos[2]+ln.dir[2]),fi&&xM(de);for(let nn of Ft)fM(nn);Ft.length=0,N.update(tt),ce-=tt,ce<=0&&(Se=null),ot&&(Rt+=tt,Rt>=H.feedback.reloadResultTime&&(ot=null));let Qn=ee.cover?ee.cover.edge:null,yM=Xn(kt.pos,kt.dir,100,_,F,{ignoreBox:Qn?Qn.boxIndex:-1});Mt=r.device()==="pad"&&yM.target?H.look.pad.assist:1;let xf=null;qt&&Ci.coverGlow>0&&!ie.downed&&!m.fading&&(ee.state==="move"||ee.state==="sprint")&&(Td(ee,{moveX:on.moveX,moveY:on.moveY,camYaw:te.yaw},Gi),xf=Ea(ee.coverEdges,_,ee.pos,Gi,te.yaw,H.cover,H.move.radius)),Re=xf,Ye.update(qt?tt:Math.min(de,hf),xf),we=Ee.step(tt,lM(tt)),_e=cM();let jm=!!ee.cover&&ee.cover.pop<.5,bM=Ie||(ee.cover&&(ee.cover.pop>0||jm)?"aim":"hip"),Jm=x?F_({hp:ie.hp,max:H.health.max,downed:ie.downed,downT:ie.downT,hits:De,now:j}):null;Z.render(Cb({arsenal:ae,stance:Ie,firing:on.fire,covered:jm,device:r.device(),spreadDeg:ae.spreadOf(bM),fov:d.fov,viewportH:t.clientHeight||window.innerHeight,marker:Se,reloadFlash:ot,face:Jm,bark:w?w.bark():null,objective:x?In():"",boss:Bn(),ending:Ot(),pop:Ae&&Ae.t>0?Ae:null,banner:x?ie.downed?{title:`You've hit a plateau ${Jm.downed.seconds}`,hint:lo(x.tobble&&!x.tobble.downed?"giveUpTobble":"giveUp",r.device()),hold:I.giveUpFrac()}:x.clear&&!x.boss?{title:"SET COMPLETE",hint:`${m.gateOpen?"Head for the GO gate!  ":"Rest 60 seconds!  "}${r.device()==="pad"?"X":"E"} for another set`}:null:null,grenades:x?J.count:null,action:Je.state==="desk"&&Vm(ee.pos,p.overlord&&p.overlord.desk,H.ending.deskReach)?{text:lo("cancel",r.device()),hold:Je.hold}:I?I.prompt():null,hours:et>0?_a(m.checkpoint):"",hint:we,tac:_e})),u.update(performance.now()/1e3),v.update(tt),s.render(h,d),ci=s.info.render.calls,Br=s.info.render.triangles,Kt++,an+=de,an>=1&&(vn=Kt/an,Jn=an/Kt*1e3,Kt=0,an=0),df+=de,df>=.1&&(df=0,Ym()),i.frameDone(de*1e3)}});n&&n.has("tune")&&c.toggle();let ff=document.createElement("div");ff.id="cr-fade",document.body.appendChild(ff);let qm=-1;function mM(U){let de=Math.round(U*100);de!==qm&&(qm=de,ff.style.opacity=(de/100).toFixed(2))}let $m=["cover","fire","aim","melee","interact","grenade","reload","sprint","objective","equipKb","tacCom","controls","weapon1","weapon2","weapon3","weaponNext","weaponPrev"],zr=!1,fi=!1,pf=0,Km=Py(Oe),mf=()=>{try{document.exitPointerLock&&document.exitPointerLock()}catch{}};function gf(){zr=!0,fi=!1,r.requestLock()}function vf(){_n.open||fi||(mf(),_n.showPause())}function gM(){_n.open||fi||(mf(),_n.showControls())}function Zm(){m.restart(),Je.reset(),je(hn[0]),et=0,Ae=null,fi=!0,mf(),_n.showTitle()}let _n=Vy({settings:ne,saved:()=>bd(Oe),arenaTitle:U=>ba[hn[U]]||"",onSettings(U){ne=U,Be(),R0(Oe,ne)},actions:{continue(){m.goTo(bd(Oe)),je(m.arena),gf()},newRun(){m.newRun(),je(hn[0]),Km?gf():(Km=!0,Iy(Oe),fi=!1,_n.showIntro(gf))},back(){window.location.href="../../index.html"},resume(){zr=!0,r.requestLock()},restart(){Ve(),zr=!0,r.requestLock()},quit(){Zm()},resetTutorial(){Ee.reset()}}});l.toTitle=()=>{m.newRun(),Zm()},document.addEventListener("pointerlockchange",()=>{r.isLocked()||_n.open||fi||l.panelOpen()||Ct||r.device()!=="pad"&&vf()});let vM=()=>_.find(U=>U.kind==="floor");function xM(U){pf+=U*H.run.attractSpeed;let de=vM();if(!de)return;let Ue=(de.min[0]+de.max[0])/2,tt=(de.min[2]+de.max[2])/2,ct=(de.max[0]-de.min[0])/2+H.run.attractMargin,Lt=(de.max[2]-de.min[2])/2*.8+H.run.attractMargin;d.position.set(Ue+Math.cos(pf)*ct,H.run.attractHeight,tt+Math.sin(pf)*Lt),d.lookAt(Ue,1,tt)}lt.menu=()=>({open:_n.open,screen:_n.screen,items:_n.items(),onTitle:fi,settings:{...ne}}),lt.menuChoose=U=>_n.choose(U),lt.pause=()=>vf(),lt.setSettings=U=>{ne={...ne,...U},Be(),R0(Oe,ne)},f.name!=="greyRoom"&&f.jumped?(m.goTo(nc(f.name)),je(f.name)):je(f.name==="greyRoom"?"greyRoom":hn[0]),Wm(n)&&(fi=!0,et=0,_n.showTitle()),xt=r.poll(),te.update(0,{target:M.pos,mode:"normal",side:1},_),Ym(),pM.start()}var QI={webgl:"Gyms of War needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.",boot:"Something broke in the game."};window.__cr={ready:!1,error:null};function Xm(t,e){window.__cr.error={kind:t,detail:e||""},document.documentElement.dataset.crError=t;let n=document.getElementById("cr-error");n&&(n.textContent="",n.appendChild(document.createTextNode(QI[t])),t==="boot"&&e&&(n.appendChild(document.createElement("br")),n.appendChild(document.createTextNode(e))),n.hidden=!1)}window.addEventListener("error",t=>{window.__cr.error||Xm("boot",t.message)});function eL(){let t=document.getElementById("cr-canvas"),e=t.getContext("webgl2",{antialias:!0,powerPreference:"high-performance"});if(!e){Xm("webgl");return}let n=new URLSearchParams(location.search);n.has("look")?Kx({canvas:t,gl:e}):eM({canvas:t,gl:e,params:n}),window.__cr.ready=!0,document.documentElement.dataset.crReady="1"}try{eL()}catch(t){Xm("boot",t&&t.message)}})();

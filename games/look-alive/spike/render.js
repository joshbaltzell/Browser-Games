// Look Alive spike: WebGL2 dark-field renderer with two levels of detail.
// Classic script; exposes window.LARender.create(canvas) -> renderer | {error}.
(function (root) {
  'use strict';

  var STAIN = [[0.42, 0.22, 1.0], [1.0, 0.30, 0.55], [1.0, 0.68, 0.18], [0.25, 1.0, 0.55]]; // violet, safranin, iodine, malachite

  var VS_POST = '#version 300 es\nout vec2 v_uv;\nvoid main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);v_uv=p;gl_Position=vec4(p*2.-1.,0,1);}';

  var VS_DENS = '#version 300 es\n' +
    'uniform vec2 u_center,u_scale;uniform float u_N;out vec2 v_uv;\n' +
    'void main(){vec2 c=vec2(gl_VertexID&1,gl_VertexID>>1);v_uv=c;vec2 w=c*u_N;gl_Position=vec4((w-u_center)*u_scale,0,1);}';
  var FS_DENS = '#version 300 es\nprecision highp float;\n' +
    'uniform sampler2D u_dens,u_bandTex;uniform vec3 u_stain[4];uniform float u_alpha,u_band,u_N;in vec2 v_uv;out vec4 o;\n' +
    'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n' +
    'void main(){vec4 d=texture(u_dens,v_uv);vec3 col=vec3(0);\n' +
    ' float bm=u_band>0.5?texture(u_bandTex,v_uv).r:0.;\n' +
    ' for(int i=0;i<4;i++){float a=1.-exp(-d[i]*0.009);vec3 s=u_stain[i];\n' +
    '  if(i==3&&bm>0.1)s=mix(s,vec3(1.,.22,.18),min(1.,bm*1.5));\n' +
    '  col+=s*a*(i==3?0.7:0.55);}\n' +
    ' float n=0.88+0.12*h(floor(v_uv*u_N*2.)/2.);col*=n;\n' +
    ' o=vec4(col*u_alpha,1);}';

  var VS_INST = '#version 300 es\n' +
    'in vec4 a0;in vec4 a1;uniform vec2 u_center,u_scale;uniform float u_time,u_zoom;\n' +
    'out vec2 v_uv;flat out vec4 v_f;\n' +
    'const float ASP[4]=float[4](1.1,2.3,1.45,1.2);\n' +
    'void main(){vec2 c=vec2(float(gl_VertexID&1),float(gl_VertexID>>1))*2.-1.;\n' +
    ' int sp=int(a1.x+0.5);float ph=a1.y;\n' +
    ' vec2 drift=0.07*vec2(sin(u_time*(0.31+0.2*fract(ph*7.3))+ph*6.28),cos(u_time*(0.27+0.2*fract(ph*3.1))+ph*9.1));\n' +
    ' float w1=1.+0.10*sin(u_time*2.2+ph*40.);float w2=1.+0.10*sin(u_time*1.7+ph*23.+1.5);\n' +
    ' float asp=1.+(ASP[sp]-1.)*(0.6+0.8*a1.z);float sa=sqrt(asp);\n' +
    ' float size=max(a0.z,1.6/u_zoom);\n' +
    ' float rot=a0.w+0.3*sin(u_time*0.5+ph*11.);float cr=cos(rot),sr=sin(rot);\n' +
    ' vec2 q=c*1.15*size*vec2(sa*w1,w2/sa);\n' +
    ' vec2 world=a0.xy+drift+vec2(q.x*cr-q.y*sr,q.x*sr+q.y*cr);\n' +
    ' v_uv=c*1.15;v_f=vec4(a1.x,ph,a1.w,size*u_zoom);\n' +
    ' gl_Position=vec4((world-u_center)*u_scale,0,1);}';
  var FS_INST = '#version 300 es\nprecision highp float;\n' +
    'uniform vec3 u_stain[4];uniform float u_alpha,u_slip,u_band;in vec2 v_uv;flat in vec4 v_f;out vec4 o;\n' +
    'float hexd(vec2 p){vec2 r=vec2(1.,1.7320508);vec2 h=r*.5;vec2 a=mod(p,r)-h;vec2 b=mod(p-h,r)-h;vec2 g=dot(a,a)<dot(b,b)?a:b;g=abs(g);return max(dot(g,vec2(.5,.8660254)),g.x);}\n' +
    'void main(){float r=length(v_uv);if(r>1.15)discard;int sp=int(v_f.x+0.5);vec3 st=u_stain[sp];\n' +
    ' float body=0.07+0.10*(1.-smoothstep(0.,1.,r));\n' +
    ' float rim=smoothstep(0.66,0.93,r)*(1.-smoothstep(0.93,1.02,r));\n' +
    ' vec2 off=0.35*vec2(cos(v_f.y*40.),sin(v_f.y*40.));float spot=smoothstep(0.32,0.,length(v_uv-off))*0.30;\n' +
    ' float I=(body+rim*0.85+spot)*(0.8+0.2*sin(v_f.y*90.));\n' +
    ' vec3 col=st*I;\n' +
    ' if(sp==3&&u_slip>0.001){float sm=smoothstep(0.40,0.48,hexd(v_uv*3.4+v_f.y*10.))*(1.-smoothstep(0.9,1.,r))*step(r,1.);col+=vec3(0.75,1.,0.9)*sm*0.42*u_slip;}\n' +
    ' if(u_band>0.5&&v_f.z>0.5){float ring=smoothstep(1.03,1.07,r)*(1.-smoothstep(1.1,1.15,r));col+=vec3(1.,.35,.25)*ring*1.4;}\n' +
    ' if(r>1.0&&!(u_band>0.5&&v_f.z>0.5))discard;\n' +
    ' o=vec4(col*u_alpha*0.6,1);}';

  var FS_BRIGHT = '#version 300 es\nprecision highp float;uniform sampler2D u_src;uniform vec2 u_px;uniform float u_thresh;in vec2 v_uv;out vec4 o;\n' +
    'void main(){vec3 c=texture(u_src,v_uv+u_px*vec2(-.5,-.5)).rgb+texture(u_src,v_uv+u_px*vec2(.5,-.5)).rgb+texture(u_src,v_uv+u_px*vec2(-.5,.5)).rgb+texture(u_src,v_uv+u_px*vec2(.5,.5)).rgb;c*=.25;\n' +
    ' o=vec4(max(c-u_thresh,0.)*1.4,1);}';
  var FS_BLUR = '#version 300 es\nprecision highp float;uniform sampler2D u_src;uniform vec2 u_dir;in vec2 v_uv;out vec4 o;\n' +
    'void main(){vec3 c=texture(u_src,v_uv).rgb*.2270270;\n' +
    ' c+=texture(u_src,v_uv+u_dir*1.3846153).rgb*.3162162+texture(u_src,v_uv-u_dir*1.3846153).rgb*.3162162;\n' +
    ' c+=texture(u_src,v_uv+u_dir*3.2307692).rgb*.0702702+texture(u_src,v_uv-u_dir*3.2307692).rgb*.0702702;o=vec4(c,1);}';
  var FS_COMP = '#version 300 es\nprecision highp float;uniform sampler2D u_scene,u_bloom;uniform float u_bloomAmt,u_aspect;in vec2 v_uv;out vec4 o;\n' +
    'float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}\n' +
    'void main(){vec3 c=texture(u_scene,v_uv).rgb;if(u_bloomAmt>0.)c+=texture(u_bloom,v_uv).rgb*u_bloomAmt;\n' +
    ' vec2 q=(v_uv-.5)*vec2(u_aspect,1.);float vg=smoothstep(1.05,0.25,length(q)*1.25);c*=mix(0.35,1.,vg);\n' +
    ' c+=vec3(0.004,0.008,0.018)*(0.5+vg);c=1.-exp(-c*1.35);c+=(h(gl_FragCoord.xy)-.5)/255.;o=vec4(c,1);}';

  function sstep(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  function mix32(a) { a = Math.imul(a ^ (a >>> 16), 0x85ebca6b); a = Math.imul(a ^ (a >>> 13), 0xc2b2ae35); return (a ^ (a >>> 16)) >>> 0; }
  function now() { return performance.now(); }

  function create(canvas) {
    var gl = null;
    try { gl = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
    if (!gl) return { error: 'WebGL2 is not available in this browser.' };
    var hdrExt = gl.getExtension('EXT_color_buffer_float');
    var hdr = !!hdrExt;
    var gpuExt = null; try { gpuExt = gl.getExtension('EXT_disjoint_timer_query_webgl2'); } catch (e) { /* ignore */ }

    function compile(type, src) {
      var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('shader: ' + gl.getShaderInfoLog(s));
      return s;
    }
    function program(vs, fs, attrs) {
      var p = gl.createProgram(); gl.attachShader(p, compile(gl.VERTEX_SHADER, vs)); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
      if (attrs) for (var k in attrs) gl.bindAttribLocation(p, attrs[k], k);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('link: ' + gl.getProgramInfoLog(p));
      var u = {}, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
      for (var i = 0; i < n; i++) { var nm = gl.getActiveUniform(p, i).name.replace('[0]', ''); u[nm] = gl.getUniformLocation(p, nm + (/stain/.test(nm) ? '[0]' : '')); }
      return { p: p, u: u };
    }
    var P;
    try {
      P = {
        dens: program(VS_DENS, FS_DENS), inst: program(VS_INST, FS_INST, { a0: 0, a1: 1 }),
        bright: program(VS_POST, FS_BRIGHT), blur: program(VS_POST, FS_BLUR), comp: program(VS_POST, FS_COMP)
      };
    } catch (e) { return { error: 'Shader setup failed: ' + e.message }; }

    var stain = new Float32Array(12); for (var i = 0; i < 4; i++) stain.set(STAIN[i], i * 3);
    var vao = gl.createVertexArray(), ibuf = gl.createBuffer();
    gl.bindVertexArray(vao); gl.bindBuffer(gl.ARRAY_BUFFER, ibuf);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 32, 0); gl.vertexAttribDivisor(0, 1);
    gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 16); gl.vertexAttribDivisor(1, 1);
    gl.bindVertexArray(null);
    var emptyVao = gl.createVertexArray();

    var R = {
      gl: gl, hdr: hdr, canvas: canvas, w: 0, h: 0, dpr: 1,
      stats: { instances: 0, drawCalls: 0, buildMs: 0, uploadMs: 0, submitMs: 0, gpuMs: -1, cells: 0, band: null },
      gpuSupported: !!gpuExt
    };
    var fbo = {}, densTex = null, bandTex = null, texN = 0, rgba = null, bandMask = null, lastVer = -1, lastBandVer = -1, bandRange = null;
    var inst = null, instCap = 0, instCount = 0, instKey = '', calls = 0;
    var queries = [], activeQuery = null;

    function makeTarget(w, h, float) {
      var t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      if (float) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
      else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      var f = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, f);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
      return { tex: t, fb: f, w: w, h: h };
    }
    function freeTarget(t) { if (t) { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); } }

    R.resize = function (dprCap) {
      var dpr = Math.min(root.devicePixelRatio || 1, dprCap || 2);
      var w = Math.max(2, Math.round(canvas.clientWidth * dpr)), h = Math.max(2, Math.round(canvas.clientHeight * dpr));
      R.dpr = root.devicePixelRatio || 1; R.dprUsed = dpr;
      if (w === R.w && h === R.h) return;
      R.w = w; R.h = h; canvas.width = w; canvas.height = h;
      freeTarget(fbo.scene); freeTarget(fbo.a); freeTarget(fbo.b);
      fbo.scene = makeTarget(w, h, hdr);
      var hw = Math.max(2, w >> 1), hh = Math.max(2, h >> 1);
      fbo.a = makeTarget(hw, hh, hdr); fbo.b = makeTarget(hw, hh, hdr);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };

    function ensureTextures(N) {
      if (texN === N) return;
      if (densTex) gl.deleteTexture(densTex); if (bandTex) gl.deleteTexture(bandTex);
      densTex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, densTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, N, N, 0, gl.RGBA, gl.FLOAT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      bandTex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, bandTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, N, N, 0, gl.RED, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      rgba = new Float32Array(N * N * 4); bandMask = new Uint8Array(N * N); texN = N; lastVer = -1; lastBandVer = -1; instKey = '';
    }

    function uploadField(field, bandOn) {
      var N = field.N; ensureTextures(N);
      var t0 = now(), p = field.cur.p, p0 = p[0], p1 = p[1], p2 = p[2], p3 = p[3], n2 = N * N;
      if (lastVer !== field.version) {
        for (var i = 0, j = 0; i < n2; i++, j += 4) { rgba[j] = p0[i]; rgba[j + 1] = p1[i]; rgba[j + 2] = p2[i]; rgba[j + 3] = p3[i]; }
        gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, densTex);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, N, N, gl.RGBA, gl.FLOAT, rgba);
        lastVer = field.version;
      }
      if (bandOn && lastBandVer !== field.version) {
        bandRange = field.computeBand(bandMask);
        gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, bandTex);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, N, N, gl.RED, gl.UNSIGNED_BYTE, bandMask);
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
        lastBandVer = field.version;
      }
      R.stats.band = bandOn ? bandRange : null;
      R.stats.uploadMs = now() - t0;
    }

    // Spawn microbes for cells in view. Deterministic per (cell, index): panning away and back gives the same ones.
    function buildInstances(field, vx0, vx1, vy0, vy1, cap, bandOn) {
      var N = field.N, p = field.cur.p, p0 = p[0], p1 = p[1], p2 = p[2], p3 = p[3];
      var key = [vx0, vx1, vy0, vy1, cap, N, field.version, bandOn ? 1 : 0].join(',');
      if (key === instKey) return;
      var t0 = now(), x, y, i, popView = 0;
      for (y = vy0; y <= vy1; y++) for (x = vx0; x <= vx1; x++) { i = y * N + x; popView += p0[i] + p1[i] + p2[i] + p3[i]; }
      var k = popView > 0 ? Math.min(1, cap / popView) : 0;
      var hard = Math.ceil(cap * 1.1) + 16;
      if (hard > instCap) { instCap = hard; inst = new Float32Array(instCap * 8); gl.bindBuffer(gl.ARRAY_BUFFER, ibuf); gl.bufferData(gl.ARRAY_BUFFER, inst.byteLength, gl.DYNAMIC_DRAW); }
      var c = 0, inv = 1 / 4294967296;
      outer:
      for (y = vy0; y <= vy1; y++) for (x = vx0; x <= vx1; x++) {
        i = y * N + x;
        var a0 = p0[i], a1 = p1[i], a2 = p2[i], a3 = p3[i], T = a0 + a1 + a2 + a3;
        if (T <= 0) continue;
        var n = Math.floor(T * k + mix32(i * 0x9E3779B1 + 0x1234567) * inv);
        if (n <= 0) continue;
        var t1 = a0 / T, t2 = t1 + a1 / T, t3 = t2 + a2 / T, flag = (bandOn && bandMask[i]) ? 1 : 0;
        for (var m = 0; m < n; m++) {
          if (c >= instCap) break outer;
          var s = mix32(i * 0x9E3779B1 + Math.imul(m + 1, 0x85EBCA77));
          var r1 = mix32(s + 0x6D2B79F5), r2 = mix32(r1 + 0x6D2B79F5), r3 = mix32(r2 + 0x6D2B79F5), r4 = mix32(r3 + 0x6D2B79F5), r5 = mix32(r4 + 0x6D2B79F5);
          var sr = s * inv, sp = sr < t1 ? 0 : sr < t2 ? 1 : sr < t3 ? 2 : 3, o = c * 8;
          inst[o] = x + r1 * inv; inst[o + 1] = y + r2 * inv;
          inst[o + 2] = 0.04 + 0.06 * (r3 * inv); inst[o + 3] = r4 * inv * 6.2831853;
          inst[o + 4] = sp; inst[o + 5] = r5 * inv; inst[o + 6] = (r3 >>> 8 & 255) / 255; inst[o + 7] = (sp === 3) ? flag : 0;
          c++;
        }
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, ibuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, inst.subarray(0, c * 8));
      instCount = c; instKey = key; R.stats.buildMs = now() - t0;
    }

    function draw(mode, first, count, instances) {
      calls++;
      if (instances) gl.drawArraysInstanced(mode, first, count, instances); else gl.drawArrays(mode, first, count);
    }
    function useTex(unit, tex) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tex); }

    // s: {field, cx, cy, zoom, time, cap, bloom, band, slip, lod (optional {inst, dens} override)}
    R.render = function (s) {
      var field = s.field; R.resize(s.dprCap);
      var t0 = now(); calls = 0;
      var N = field.N, w = R.w, h = R.h, zoom = s.zoom * R.dprUsed; // device px per cell
      var instA = s.lod ? s.lod.inst : sstep(4, 10, s.zoom), densA = s.lod ? s.lod.dens : 1 - 0.88 * sstep(6, 16, s.zoom);
      R.stats.instAlpha = instA; R.stats.densAlpha = densA;
      uploadField(field, s.band);
      var scale = [2 * zoom / w, 2 * zoom / h];
      // timer query
      if (gpuExt && !activeQuery) { activeQuery = gl.createQuery(); gl.beginQuery(gpuExt.TIME_ELAPSED_EXT, activeQuery); }
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.scene.fb); gl.viewport(0, 0, w, h);
      gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
      gl.bindVertexArray(emptyVao);
      // density texture
      gl.useProgram(P.dens.p);
      useTex(0, densTex); useTex(1, bandTex);
      gl.uniform1i(P.dens.u.u_dens, 0); gl.uniform1i(P.dens.u.u_bandTex, 1);
      gl.uniform2f(P.dens.u.u_center, s.cx, s.cy); gl.uniform2f(P.dens.u.u_scale, scale[0], scale[1]);
      gl.uniform1f(P.dens.u.u_N, N); gl.uniform1f(P.dens.u.u_alpha, densA); gl.uniform1f(P.dens.u.u_band, s.band ? 1 : 0);
      gl.uniform3fv(P.dens.u.u_stain, stain);
      if (densA > 0.001) draw(gl.TRIANGLE_STRIP, 0, 4);
      // instances
      var drawn = 0, cells = 0;
      if (instA > 0.001) {
        var hw = w / (2 * zoom), hh = h / (2 * zoom);
        var vx0 = Math.max(0, Math.floor(s.cx - hw - 0.2)), vx1 = Math.min(N - 1, Math.ceil(s.cx + hw + 0.2));
        var vy0 = Math.max(0, Math.floor(s.cy - hh - 0.2)), vy1 = Math.min(N - 1, Math.ceil(s.cy + hh + 0.2));
        if (vx1 >= vx0 && vy1 >= vy0) {
          cells = (vx1 - vx0 + 1) * (vy1 - vy0 + 1);
          buildInstances(field, vx0, vx1, vy0, vy1, s.cap, s.band);
          gl.bindVertexArray(vao); gl.useProgram(P.inst.p);
          gl.uniform2f(P.inst.u.u_center, s.cx, s.cy); gl.uniform2f(P.inst.u.u_scale, scale[0], scale[1]);
          gl.uniform1f(P.inst.u.u_time, s.time); gl.uniform1f(P.inst.u.u_zoom, zoom); gl.uniform1f(P.inst.u.u_alpha, instA);
          gl.uniform1f(P.inst.u.u_slip, s.slip); gl.uniform1f(P.inst.u.u_band, s.band ? 1 : 0); gl.uniform3fv(P.inst.u.u_stain, stain);
          if (instCount > 0) { draw(gl.TRIANGLE_STRIP, 0, 4, instCount); drawn = instCount; }
          gl.bindVertexArray(emptyVao);
        }
      } else R.stats.buildMs = 0;
      gl.disable(gl.BLEND);
      // bloom
      if (s.bloom) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.a.fb); gl.viewport(0, 0, fbo.a.w, fbo.a.h);
        gl.useProgram(P.bright.p); useTex(0, fbo.scene.tex); gl.uniform1i(P.bright.u.u_src, 0);
        gl.uniform2f(P.bright.u.u_px, 1 / w, 1 / h); gl.uniform1f(P.bright.u.u_thresh, 0.18); draw(gl.TRIANGLES, 0, 3);
        gl.useProgram(P.blur.p); gl.uniform1i(P.blur.u.u_src, 0);
        for (var it = 0; it < 2; it++) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.b.fb); useTex(0, fbo.a.tex);
          gl.uniform2f(P.blur.u.u_dir, (1.5 + it) / fbo.a.w, 0); draw(gl.TRIANGLES, 0, 3);
          gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.a.fb); useTex(0, fbo.b.tex);
          gl.uniform2f(P.blur.u.u_dir, 0, (1.5 + it) / fbo.a.h); draw(gl.TRIANGLES, 0, 3);
        }
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, w, h);
      gl.useProgram(P.comp.p); useTex(0, fbo.scene.tex); useTex(1, fbo.a.tex);
      gl.uniform1i(P.comp.u.u_scene, 0); gl.uniform1i(P.comp.u.u_bloom, 1);
      gl.uniform1f(P.comp.u.u_bloomAmt, s.bloom ? 0.9 : 0); gl.uniform1f(P.comp.u.u_aspect, w / h);
      draw(gl.TRIANGLES, 0, 3);
      if (gpuExt && activeQuery) {
        gl.endQuery(gpuExt.TIME_ELAPSED_EXT); queries.push(activeQuery); activeQuery = null;
        while (queries.length) {
          var q = queries[0];
          if (gl.getParameter(gpuExt.GPU_DISJOINT_EXT)) { gl.deleteQuery(q); queries.shift(); continue; }
          if (!gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) { if (queries.length > 6) { gl.deleteQuery(queries.shift()); continue; } break; }
          R.stats.gpuMs = gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6; gl.deleteQuery(q); queries.shift();
        }
      }
      R.stats.instances = drawn; R.stats.drawCalls = calls; R.stats.cells = cells; R.stats.submitMs = now() - t0;
      return R.stats;
    };
    R.hasGpuTimer = !!gpuExt;
    return R;
  }

  root.LARender = { create: create, STAIN: STAIN };
})(window);

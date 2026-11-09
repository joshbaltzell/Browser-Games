// Jam Tunnel — the WebGL tunnel
// Raw WebGL 2: notes are instanced glowing slabs on the tunnel's surfaces, rendered into a
// multisampled HDR buffer, then bloomed and tone-mapped. Notes light the glossy walls around them.
// createTunnel(canvas) returns null when WebGL 2 isn't available.

window.JT = window.JT || {};

(function() {
  const LOOP = 16;
  const HW = 1.6, HH = 1.0;       // tunnel half width and half height
  const DEPTH = 1.35;             // world units per beat
  const GATE = 3.0;               // distance from the camera where notes sound
  const FAR = 46;
  const MAXL = 24;                // note lights that reach the tunnel surfaces
  const LANES = { hat: -1.15, openhat: -1.15, snare: -0.4, clap: -0.4, kick: 0.4, tomhigh: 1.15, tomlow: 1.15, crash: 1.15 };
  const NORMALS = { drums: [0, 1, 0], lead: [1, 0, 0], bass: [-1, 0, 0], pad: [0, -1, 0] };
  const ROLE_COLOR = { lead: [1.0, 0.42, 0.12], drums: [0.32, 0.72, 1.0], bass: [0.72, 0.42, 1.0], pad: [0.35, 1.0, 0.72] };
  // Long sustained notes (pads, 808s) would swamp the scene at full brightness
  const ROLE_GAIN = { lead: 1, drums: 1, bass: 0.75, pad: 0.45 };

  JT.ROLE_COLOR = ROLE_COLOR;

  JT.createTunnel = function(canvas) {
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
    if (!gl) return null;
    const hdr = !!gl.getExtension('EXT_color_buffer_float');

    // --- GL HELPERS ---
    function shader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src.trim());
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    }
    function program(vs, fs) {
      const p = gl.createProgram();
      gl.attachShader(p, shader(gl.VERTEX_SHADER, vs));
      gl.attachShader(p, shader(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
      const u = {};
      const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) {
        const name = gl.getActiveUniform(p, i).name.replace(/\[0\]$/, '');
        u[name] = gl.getUniformLocation(p, name);
      }
      return { p, u };
    }
    function target(w, h) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, hdr ? gl.RGBA16F : gl.RGBA8, w, h, 0, gl.RGBA, hdr ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      return { tex, fb, w, h };
    }
    function vao(build) {
      const v = gl.createVertexArray();
      gl.bindVertexArray(v);
      build();
      gl.bindVertexArray(null);
      return v;
    }
    function attrib(prog, name, size, stride, offset, divisor) {
      const loc = gl.getAttribLocation(prog.p, name);
      if (loc < 0) return;
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, stride * 4, offset * 4);
      if (divisor) gl.vertexAttribDivisor(loc, divisor);
    }

    // --- MATRICES (column-major) ---
    function perspective(fovy, aspect, near, far) {
      const f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
      return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
    }
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
    function lookAt(eye, at, up) {
      const z = norm(sub(eye, at)), x = norm(cross(up, z)), y = cross(z, x);
      return [x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, eye), -dot(y, eye), -dot(z, eye), 1];
    }
    function mul(a, b) {
      const o = new Array(16);
      for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
        let s = 0;
        for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
        o[c * 4 + r] = s;
      }
      return o;
    }

    // --- SHADERS ---
    const FULL_VS = `#version 300 es
in vec2 aPos; out vec2 vUv;
void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

    const tunnelProg = program(`#version 300 es
in vec3 aPos; in vec3 aNormal; in float aKind;
uniform mat4 uVP;
out vec3 vW; out vec3 vN; out float vKind;
void main() { vW = aPos; vN = aNormal; vKind = aKind; gl_Position = uVP * vec4(aPos, 1.0); }`, `#version 300 es
precision highp float;
in vec3 vW; in vec3 vN; in float vKind;
out vec4 o;
uniform vec3 uCam, uTint, uFog;
uniform float uPos, uPulse;
uniform int uNL;
uniform vec4 uLP[${MAXL}];
uniform vec4 uLC[${MAXL}];
const float DEPTH = ${DEPTH.toFixed(3)}, GATE = ${GATE.toFixed(3)};
float lineAA(float x, float w) { float f = fract(x); float d = min(f, 1.0 - f); return 1.0 - smoothstep(0.0, fwidth(x) * w, d); }
void main() {
  if (vKind > 0.5) {
    float r = length(vW.xy) / 1.9;
    o = vec4(uFog * 2.0 + uTint * 0.55 * pow(max(1.0 - r, 0.0), 1.6), 1.0);
    return;
  }
  vec3 N = normalize(vN);
  vec3 V = normalize(uCam - vW);
  float beat = (-vW.z - GATE) / DEPTH + uPos;
  float near = smoothstep(0.0, 1.5, -vW.z);
  vec3 col = uTint * 0.02;
  col += uTint * (lineAA(beat, 1.2) * 0.09 + lineAA(beat / 4.0, 1.6) * 0.36) * near;   // beat and bar lines
  if (N.y > 0.5) col += vec3(0.32, 0.72, 1.0) * lineAA((vW.x + 1.55) / 0.775, 1.0) * 0.035;   // drum lanes
  else if (abs(N.x) > 0.5) col += uTint * lineAA(vW.y * 4.0, 1.0) * 0.018;                   // pitch rows
  else col += uTint * lineAA(vW.x * 2.5, 1.0) * 0.018;                                        // pitch columns
  vec3 R = reflect(-V, N);
  for (int i = 0; i < ${MAXL}; i++) {
    if (i >= uNL) break;
    vec3 L = uLP[i].xyz - vW;
    float d2 = dot(L, L);
    vec3 Ln = L * inversesqrt(d2);
    float diff = max(dot(N, Ln), 0.0) / (1.0 + d2 * 2.5);
    float spec = pow(max(dot(R, Ln), 0.0), 120.0) * 1.1 / (1.0 + d2 * 0.25);
    col += uLC[i].rgb * (diff * 0.12 + spec);
  }
  float gd = abs(-vW.z - GATE);
  col += vec3(1.0, 0.54, 0.24) * uPulse * 0.05 * exp(-gd * 1.6);
  float dist = length(vW - uCam);
  o = vec4(mix(uFog, col, exp(-dist * 0.045)), 1.0);
}`);

    const noteProg = program(`#version 300 es
in vec3 aPos;
in vec3 iOff; in vec3 iScale; in vec3 iColor; in vec3 iParam;
uniform mat4 uVP;
out vec3 vLocal; out vec3 vW; out vec3 vColor; out vec3 vParam;
void main() {
  vLocal = aPos; vColor = iColor; vParam = iParam;
  vW = iOff + aPos * iScale;
  gl_Position = uVP * vec4(vW, 1.0);
}`, `#version 300 es
precision highp float;
in vec3 vLocal; in vec3 vW; in vec3 vColor; in vec3 vParam;
out vec4 o;
uniform vec3 uCam; uniform float uTime;
void main() {
  vec3 a = abs(vLocal) * 2.0;
  float ex = smoothstep(0.72, 1.0, a.x), ey = smoothstep(0.72, 1.0, a.y), ez = smoothstep(0.86, 1.0, a.z);
  float edge = max(max(ex * ey, ey * ez), ex * ez);
  vec3 c = vColor * (0.45 + 1.7 * edge) * vParam.x;
  if (vParam.y > 0.5) {
    // a preview: dim, shimmering, with dashed edges
    float sh = 0.55 + 0.45 * sin(vW.z * 9.0 + uTime * 7.0 + vParam.z * 6.0);
    float dash = step(0.5, fract(vW.z * 2.2 - uTime * 1.5));
    c = vColor * (0.12 * sh + 1.3 * edge * dash) * vParam.x;
  }
  float dist = length(vW - uCam);
  c *= exp(-dist * 0.04) * smoothstep(0.6, 2.7, -vW.z);   // fade out quickly after the gate
  o = vec4(c, 1.0);
}`);

    const sparkProg = program(`#version 300 es
in vec3 aPos; in vec4 aColor;
uniform mat4 uVP; uniform float uScale;
out vec4 vColor;
void main() { vColor = aColor; gl_Position = uVP * vec4(aPos, 1.0); gl_PointSize = uScale * (0.6 + aColor.a) / max(gl_Position.w, 0.3); }`, `#version 300 es
precision highp float;
in vec4 vColor; out vec4 o;
void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float f = exp(-dot(p, p) * 3.0); o = vec4(vColor.rgb * vColor.a * f * 3.0, 1.0); }`);

    const brightProg = program(FULL_VS, `#version 300 es
precision highp float; in vec2 vUv; out vec4 o; uniform sampler2D uSrc;
void main() { vec3 c = texture(uSrc, vUv).rgb; float l = max(c.r, max(c.g, c.b)); o = vec4(c * smoothstep(0.85, 2.2, l), 1.0); }`);

    const blurProg = program(FULL_VS, `#version 300 es
precision highp float; in vec2 vUv; out vec4 o; uniform sampler2D uSrc; uniform vec2 uDir;
void main() {
  float w[5] = float[](0.227, 0.1945, 0.1216, 0.054, 0.0162);
  vec3 c = texture(uSrc, vUv).rgb * w[0];
  for (int i = 1; i < 5; i++) { c += texture(uSrc, vUv + uDir * float(i)).rgb * w[i]; c += texture(uSrc, vUv - uDir * float(i)).rgb * w[i]; }
  o = vec4(c, 1.0);
}`);

    const compProg = program(FULL_VS, `#version 300 es
precision highp float; in vec2 vUv; out vec4 o;
uniform sampler2D uScene, uB1, uB2; uniform float uFade;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
void main() {
  vec3 c = texture(uScene, vUv).rgb + texture(uB1, vUv).rgb * 0.6 + texture(uB2, vUv).rgb * 0.8;
  c = aces(c * 1.45);
  c = pow(c, vec3(1.0 / 2.2));
  vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * 0.6;
  o = vec4(c * uFade, 1.0);
}`);

    // --- GEOMETRY ---
    const fullVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      [brightProg, blurProg, compProg].forEach(pr => attrib(pr, 'aPos', 2, 2, 0));
    });

    // Floor, ceiling, two walls and the far end cap: [x y z  nx ny nz  kind]
    const tunnelData = [];
    const quad = (a, b, c, d, n, kind) => [a, b, c, a, c, d].forEach(p => tunnelData.push(...p, ...n, kind));
    const Z0 = 1, Z1 = -FAR;
    quad([-HW, -HH, Z0], [HW, -HH, Z0], [HW, -HH, Z1], [-HW, -HH, Z1], [0, 1, 0], 0);
    quad([-HW, HH, Z0], [HW, HH, Z0], [HW, HH, Z1], [-HW, HH, Z1], [0, -1, 0], 0);
    quad([-HW, -HH, Z0], [-HW, HH, Z0], [-HW, HH, Z1], [-HW, -HH, Z1], [1, 0, 0], 0);
    quad([HW, -HH, Z0], [HW, HH, Z0], [HW, HH, Z1], [HW, -HH, Z1], [-1, 0, 0], 0);
    quad([-HW, -HH, Z1 + 0.01], [HW, -HH, Z1 + 0.01], [HW, HH, Z1 + 0.01], [-HW, HH, Z1 + 0.01], [0, 0, 1], 1);
    const tunnelCount = tunnelData.length / 7;
    const tunnelVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tunnelData), gl.STATIC_DRAW);
      attrib(tunnelProg, 'aPos', 3, 7, 0);
      attrib(tunnelProg, 'aNormal', 3, 7, 3);
      attrib(tunnelProg, 'aKind', 1, 7, 6);
    });

    // Unit cube, counter-clockwise from outside: [normal, u, v] per face with u x v = normal
    const cube = [];
    [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[-1, 0, 0], [0, 0, 1], [0, 1, 0]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]],
     [[0, -1, 0], [1, 0, 0], [0, 0, 1]], [[0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, 0, -1], [0, 1, 0], [1, 0, 0]]].forEach(([n, u, v]) => {
      const P = (su, sv) => [0, 1, 2].map(i => 0.5 * n[i] + 0.5 * su * u[i] + 0.5 * sv * v[i]);
      [P(-1, -1), P(1, -1), P(1, 1), P(-1, -1), P(1, 1), P(-1, 1)].forEach(p => cube.push(...p));
    });
    const MAX_INST = 3072, INST = 12;
    const instData = new Float32Array(MAX_INST * INST);
    const instBuf = gl.createBuffer();
    const noteVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);
      attrib(noteProg, 'aPos', 3, 3, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, instBuf);
      gl.bufferData(gl.ARRAY_BUFFER, instData.byteLength, gl.DYNAMIC_DRAW);
      attrib(noteProg, 'iOff', 3, INST, 0, 1);
      attrib(noteProg, 'iScale', 3, INST, 3, 1);
      attrib(noteProg, 'iColor', 3, INST, 6, 1);
      attrib(noteProg, 'iParam', 3, INST, 9, 1);
    });

    const MAX_SPARKS = 900;
    const sparkData = new Float32Array(MAX_SPARKS * 7);
    const sparkBuf = gl.createBuffer();
    const sparkVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, sparkBuf);
      gl.bufferData(gl.ARRAY_BUFFER, sparkData.byteLength, gl.DYNAMIC_DRAW);
      attrib(sparkProg, 'aPos', 3, 7, 0);
      attrib(sparkProg, 'aColor', 4, 7, 3);
    });
    const sparks = [];

    // --- RENDER TARGETS (multisampled scene for antialiasing, then bloom chain) ---
    const SAMPLES = Math.min(4, gl.getParameter(gl.MAX_SAMPLES) || 0);
    let scale = Math.min(window.devicePixelRatio || 1, 1.5);
    if (window.innerWidth * window.innerHeight > 1.6e6) scale = Math.min(scale, 1);
    let T = null, ms = null;
    function resize() {
      const w = Math.max(2, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(2, Math.floor(canvas.clientHeight * scale));
      if (T && T.scene.w === w && T.scene.h === h) return;
      canvas.width = w; canvas.height = h;
      if (T) Object.values(T).forEach(t => { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); });
      T = { scene: target(w, h), h1: target(w >> 1, h >> 1), h2: target(w >> 1, h >> 1), q1: target(w >> 2, h >> 2), q2: target(w >> 2, h >> 2) };
      if (ms) { gl.deleteFramebuffer(ms.fb); gl.deleteRenderbuffer(ms.color); gl.deleteRenderbuffer(ms.depth); }
      ms = { fb: gl.createFramebuffer(), color: gl.createRenderbuffer(), depth: gl.createRenderbuffer() };
      gl.bindRenderbuffer(gl.RENDERBUFFER, ms.color);
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, SAMPLES, hdr ? gl.RGBA16F : gl.RGBA8, w, h);
      gl.bindRenderbuffer(gl.RENDERBUFFER, ms.depth);
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, SAMPLES, gl.DEPTH_COMPONENT24, w, h);
      gl.bindFramebuffer(gl.FRAMEBUFFER, ms.fb);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, ms.color);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, ms.depth);
    }

    // --- NOTE PLACEMENT ---
    // Returns [center, size] for a note slab on its surface
    function placeNote(role, n, zHead, len, range) {
      const zc = zHead - len / 2;
      if (role === 'drums') {
        const w = 0.5 + n.v * 0.08;
        return [[LANES[n.p] || 0, -HH + 0.06, zc], [w, 0.1, len]];
      }
      const t = Math.min(1, Math.max(0, (n.p - range[0]) / (range[1] - range[0])));
      if (role === 'pad') return [[-HW + 0.25 + t * (2 * HW - 0.5), HH - 0.06, zc], [0.22, 0.1, len]];
      const x = role === 'lead' ? -HW + 0.06 : HW - 0.06;
      return [[x, -HH + 0.15 + t * (2 * HH - 0.3), zc], [0.1, 0.13, len]];
    }

    function spawnSparks(role, at, color, v) {
      const n = NORMALS[role];
      const count = Math.round(8 + v * 10);
      for (let i = 0; i < count && sparks.length < MAX_SPARKS; i++) {
        const sp = 1.2 + Math.random() * 1.8;
        sparks.push({
          p: [at[0], at[1], at[2]],
          v: [n[0] * sp + (Math.random() - 0.5) * 1.4, n[1] * sp + (Math.random() - 0.5) * 1.4, Math.random() * 2.2 + 0.4],
          c: color, life: 0, max: 0.35 + Math.random() * 0.45,
        });
      }
    }

    // --- FRAME ---
    // view: { pos, prevPos, spb, swing, tint, fog, paused, reduced, time, dt, fade, loop (beats),
    //         marks: [beat] (section starts), parts: [{ role, notes, ghost, range }] }
    function render(view) {
      resize();
      const p = view.pos, S = view.spb;
      const loop = view.loop || LOOP;
      const beatPhase = p - Math.floor(p);
      const barStart = ((Math.floor(p) % 4) + 4) % 4 === 0;
      const pulse = (view.paused ? 0.3 : Math.exp(-beatPhase * S * 7)) * (barStart ? 1.8 : 1);

      // The camera sways gently with the groove
      const sw = view.reduced ? 0 : view.swing;
      const eye = [Math.sin(p * Math.PI * 0.5) * 0.07 * sw, 0.12 - (view.reduced ? 0 : 0.025 * pulse), 0];
      const at = [eye[0] * 0.4, -0.12, -10];
      const aspect = canvas.width / canvas.height;
      const fovy = Math.max(62 * Math.PI / 180, 2 * Math.atan(Math.tan(36 * Math.PI / 180) / aspect));
      const VP = mul(perspective(fovy, aspect, 0.05, 80), lookAt(eye, at, [Math.sin(p * Math.PI * 0.25) * 0.012 * sw, 1, 0]));

      // Note instances and the brightest note lights
      let ni = 0;
      const lights = [];
      const crossed = !view.paused && p > view.prevPos && p - view.prevPos < 1;
      view.parts.forEach(part => {
        const role = part.role;
        const color = ROLE_COLOR[role];
        const gain = ROLE_GAIN[role];
        const ghost = part.ghost ? 1 : 0;
        part.notes.forEach((n, idx) => {
          const rel0 = (((n.b - p) % loop) + loop) % loop;
          [rel0, rel0 - loop].forEach(rel => {
            const zHead = -(GATE + rel * DEPTH);
            const len = Math.max(0.12, n.len * DEPTH * 0.92);
            if (zHead > 1 + len || zHead < -FAR || ni >= MAX_INST - 8) return;
            const playing = rel <= 0 && rel + n.len > 0;
            const since = -rel * S;
            let intensity = (0.45 + 0.4 * n.v) * gain;
            if (playing) intensity += (0.35 + 1.6 * Math.exp(-since * 7)) * gain;
            const [c, s] = placeNote(role, n, zHead, len, part.range);
            instData.set([c[0], c[1], c[2], s[0], s[1], s[2], color[0], color[1], color[2], intensity, ghost, idx * 0.37], ni * INST);
            ni++;
            const lit = (playing
              ? (0.5 + 1.6 * Math.exp(-since * 6)) * (ghost ? 0.4 : 1)
              : (rel > 0 && rel < 5 ? 0.12 * (1 - rel / 5) : 0)) * gain;
            if (lit > 0.02) lights.push({ pos: [c[0] * 0.9, c[1] * 0.9, zHead - 0.1], col: color, k: lit });
          });
          // Sparks when a note crosses the gate
          if (crossed && Math.floor((p - n.b) / loop) > Math.floor((view.prevPos - n.b) / loop)) {
            const [c] = placeNote(role, n, -GATE, 0, part.range);
            spawnSparks(role, c, color, ghost ? n.v * 0.3 : n.v);
          }
        });
      });

      // The gate frame pulses on every beat, harder on the first beat of a bar
      const gateI = 0.8 + pulse * 1.4, gc = [1.0, 0.5, 0.2], th = 0.035;
      [[[0, HH, -GATE], [2 * HW, th, th]], [[0, -HH, -GATE], [2 * HW, th, th]], [[-HW, 0, -GATE], [th, 2 * HH, th]], [[HW, 0, -GATE], [th, 2 * HH, th]]]
        .forEach(([c, s]) => { instData.set([...c, ...s, ...gc, gateI, 0, 0], ni * INST); ni++; });
      lights.push({ pos: [0, HH * 0.9, -GATE], col: gc, k: pulse * 0.5 }, { pos: [0, -HH * 0.9, -GATE], col: gc, k: pulse * 0.5 });
      // Section starts pass by as bright frames in the section's color
      (view.marks || []).forEach(m => {
        const rel = (((m.beat - p) % loop) + loop) % loop;
        const z = -(GATE + rel * DEPTH);
        if (z < -FAR || rel <= 0.05) return;
        const mc = m.color, mi = 0.9, t2 = 0.05;
        [[[0, HH, z], [2 * HW, t2, t2]], [[0, -HH, z], [2 * HW, t2, t2]], [[-HW, 0, z], [t2, 2 * HH, t2]], [[HW, 0, z], [t2, 2 * HH, t2]]]
          .forEach(([c, s2]) => { if (ni < MAX_INST) { instData.set([...c, ...s2, ...mc, mi, 0, 0], ni * INST); ni++; } });
      });
      lights.sort((a, b) => b.k - a.k);
      const LP = new Float32Array(MAXL * 4), LC = new Float32Array(MAXL * 4);
      const nl = Math.min(MAXL, lights.length);
      for (let i = 0; i < nl; i++) {
        const L = lights[i];
        LP.set([L.pos[0], L.pos[1], L.pos[2], 0], i * 4);
        LC.set([L.col[0] * L.k, L.col[1] * L.k, L.col[2] * L.k, 0], i * 4);
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life += view.dt;
        if (s.life > s.max) { sparks.splice(i, 1); continue; }
        s.v[1] -= 2.4 * view.dt;
        s.p[0] += s.v[0] * view.dt; s.p[1] += s.v[1] * view.dt; s.p[2] += s.v[2] * view.dt;
        if (Math.abs(s.p[0]) > HW) { s.p[0] = Math.sign(s.p[0]) * HW; s.v[0] *= -0.4; }
        if (Math.abs(s.p[1]) > HH) { s.p[1] = Math.sign(s.p[1]) * HH; s.v[1] *= -0.4; }
      }
      sparks.forEach((s, i) => sparkData.set([s.p[0], s.p[1], s.p[2], s.c[0], s.c[1], s.c[2], 1 - s.life / s.max], i * 7));

      // ---- Scene into the multisampled HDR buffer ----
      gl.bindFramebuffer(gl.FRAMEBUFFER, ms.fb);
      gl.viewport(0, 0, T.scene.w, T.scene.h);
      gl.clearColor(view.fog[0], view.fog[1], view.fog[2], 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST); gl.depthMask(true); gl.disable(gl.BLEND); gl.disable(gl.CULL_FACE);

      gl.useProgram(tunnelProg.p);
      gl.uniformMatrix4fv(tunnelProg.u.uVP, false, VP);
      gl.uniform3fv(tunnelProg.u.uCam, eye);
      gl.uniform3fv(tunnelProg.u.uTint, view.tint);
      gl.uniform3fv(tunnelProg.u.uFog, view.fog);
      gl.uniform1f(tunnelProg.u.uPos, p);
      gl.uniform1f(tunnelProg.u.uPulse, pulse);
      gl.uniform1i(tunnelProg.u.uNL, nl);
      gl.uniform4fv(tunnelProg.u.uLP, LP);
      gl.uniform4fv(tunnelProg.u.uLC, LC);
      gl.bindVertexArray(tunnelVao);
      gl.drawArrays(gl.TRIANGLES, 0, tunnelCount);

      // Notes, gate and sparks glow additively over the tunnel
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.depthMask(false);
      gl.enable(gl.CULL_FACE);
      gl.useProgram(noteProg.p);
      gl.uniformMatrix4fv(noteProg.u.uVP, false, VP);
      gl.uniform3fv(noteProg.u.uCam, eye);
      gl.uniform1f(noteProg.u.uTime, view.time);
      gl.bindBuffer(gl.ARRAY_BUFFER, instBuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, instData, 0, ni * INST);
      gl.bindVertexArray(noteVao);
      gl.drawArraysInstanced(gl.TRIANGLES, 0, 36, ni);
      gl.disable(gl.CULL_FACE);

      if (sparks.length) {
        gl.useProgram(sparkProg.p);
        gl.uniformMatrix4fv(sparkProg.u.uVP, false, VP);
        gl.uniform1f(sparkProg.u.uScale, T.scene.h * 0.012);
        gl.bindBuffer(gl.ARRAY_BUFFER, sparkBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, sparkData, 0, sparks.length * 7);
        gl.bindVertexArray(sparkVao);
        gl.drawArrays(gl.POINTS, 0, sparks.length);
      }
      gl.depthMask(true); gl.disable(gl.BLEND); gl.disable(gl.DEPTH_TEST);

      // Resolve the multisampled buffer
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, ms.fb);
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, T.scene.fb);
      gl.blitFramebuffer(0, 0, T.scene.w, T.scene.h, 0, 0, T.scene.w, T.scene.h, gl.COLOR_BUFFER_BIT, gl.NEAREST);

      // ---- Bloom and tone mapping ----
      gl.bindVertexArray(fullVao);
      function pass(prog, src, dst, setup) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, dst ? dst.fb : null);
        gl.viewport(0, 0, dst ? dst.w : canvas.width, dst ? dst.h : canvas.height);
        gl.useProgram(prog.p);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src.tex);
        gl.uniform1i(prog.u.uSrc !== undefined ? prog.u.uSrc : prog.u.uScene, 0);
        if (setup) setup();
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      pass(brightProg, T.scene, T.h1);
      pass(blurProg, T.h1, T.h2, () => gl.uniform2f(blurProg.u.uDir, 1.5 / T.h1.w, 0));
      pass(blurProg, T.h2, T.h1, () => gl.uniform2f(blurProg.u.uDir, 0, 1.5 / T.h1.h));
      pass(blurProg, T.h1, T.q1, () => gl.uniform2f(blurProg.u.uDir, 0, 0));
      pass(blurProg, T.q1, T.q2, () => gl.uniform2f(blurProg.u.uDir, 2 / T.q1.w, 0));
      pass(blurProg, T.q2, T.q1, () => gl.uniform2f(blurProg.u.uDir, 0, 2 / T.q1.h));
      pass(compProg, T.scene, null, () => {
        gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, T.h1.tex); gl.uniform1i(compProg.u.uB1, 1);
        gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, T.q1.tex); gl.uniform1i(compProg.u.uB2, 2);
        gl.uniform1f(compProg.u.uFade, view.fade);
        gl.activeTexture(gl.TEXTURE0);
      });
    }

    // Lower the resolution if frames run long
    let frames = 0, frameTime = 0;
    function reportFrame(ms) {
      if (ms > 250) return;
      frameTime += ms; frames++;
      if (frames === 45) {
        if (frameTime / frames > 22 && scale > 0.5) scale = Math.max(0.5, scale * 0.8);
        frames = 0; frameTime = 0;
      }
    }

    return { render, reportFrame };
  };
})();

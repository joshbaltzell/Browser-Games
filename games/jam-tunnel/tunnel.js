// Jam Tunnel — the WebGL tunnel
// Raw WebGL 2: notes are instanced glowing slabs on the tunnel's surfaces, rendered into a
// multisampled HDR buffer, then bloomed and tone-mapped. Notes light the glossy walls around them.
// Each genre gets its own procedural world (rock panels, trap chrome, pop candy, boom bap brick,
// country planks), the full song reshapes the tunnel per section, and the music itself drives the
// walls (kick pulses, snare flashes, perform-control moods).
// createTunnel(canvas) returns null when WebGL 2 isn't available.

window.JT = window.JT || {};

(function() {
  const LOOP = 16;
  const DEPTH = 1.35;             // world units per beat
  const GATE = 3.0;               // distance from the camera where notes sound
  const FAR = 46;
  const MAXL = 24;                // note lights that reach the tunnel surfaces
  const LANES = { hat: -1.15, snare: -0.4, clap: -0.4, rim: -0.4, kick: 0.4, tomhigh: 1.15, tomlow: 1.15, crash: 1.15, openhat: 1.15 };
  JT.DRUM_LANES = LANES;
  const ROLE_COLOR = {
    lead: [1.0, 0.42, 0.12], drums: [0.32, 0.72, 1.0], bass: [0.72, 0.42, 1.0], pad: [0.35, 1.0, 0.72],
    perc: [1.0, 0.84, 0.3], counter: [1.0, 0.45, 0.75], fx: [0.78, 0.84, 1.0],
  };
  // Long sustained notes (pads, 808s, washes) would swamp the scene at full brightness
  const ROLE_GAIN = { lead: 1, drums: 1, bass: 0.75, pad: 0.45, perc: 0.85, counter: 0.9, fx: 0.5 };
  // How each role is drawn (the note shader's style code)
  const ROLE_STYLE = { drums: 1, bass: 2, pad: 3, lead: 4, counter: 4, perc: 5, fx: 6 };
  // Genre worlds: the shader's world id, and which ambient particles fly through it
  const GENRE_ID = { rock: 0, trap: 1, pop: 2, boombap: 3, country: 4 };
  const GENRE_PARTICLES = [1, 2, 3, 4, 5];   // embers, rain, bubbles, dust, fireflies
  // Section look: [width scale, light, void (walls dissolve into space), soft]
  const SECTION_LOOK = {
    intro: [1.0, 0.9, 0, 1], verse: [0.9, 0.72, 0, 0], chorus: [1.12, 1.35, 0, 0], break: [1.08, 1.0, 1, 0], outro: [1.0, 0.85, 0, 1],
  };
  const SCROLL_WRAP = 6144;       // decorative scroll wraps at a multiple of every wall pattern's period

  JT.ROLE_COLOR = ROLE_COLOR;

  // --- THE TUNNEL'S CROSS-SECTION: one flat side per part ---
  // Corners sit on an ellipse sized so four sides give the original 3.2 x 2.0 rectangle. Side 0 is
  // always the floor; the rest go counter-clockwise (4 sides: floor, right wall, ceiling, left wall).
  // Each side: c (center), t (unit vector along it, counter-clockwise), n (inward normal),
  // d (the direction notes rise in: up or right), half (half its width), rot (angle of t).
  const RX = 1.6 / Math.SQRT1_2, RY = 1.0 / Math.SQRT1_2;
  JT.buildFaces = function(count) {
    const v = [];
    for (let i = 0; i < count; i++) {
      const a = -Math.PI / 2 - Math.PI / count + 2 * Math.PI * i / count;
      v.push([RX * Math.cos(a), RY * Math.sin(a)]);
    }
    return v.map((A, i) => {
      const B = v[(i + 1) % count];
      const len = Math.hypot(B[0] - A[0], B[1] - A[1]);
      const t = [(B[0] - A[0]) / len, (B[1] - A[1]) / len];
      const up = t[1] > 0.3 || (Math.abs(t[1]) <= 0.3 && t[0] > 0);
      const c = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
      const ang = -90 + 360 * i / count;   // where the side sits around the circle (the ellipse would skew it)
      const NAMES = ['right wall', 'upper right', 'ceiling', 'upper left', 'left wall', 'lower left', 'floor', 'lower right'];
      return {
        a: A, b: B, c, t, n: [-t[1], t[0]], d: up ? t : [-t[0], -t[1]], flip: up ? 1 : -1,
        half: len / 2, len, rot: Math.atan2(t[1], t[0]),
        name: i === 0 ? 'floor' : NAMES[(Math.round(ang / 45) + 8) % 8],
      };
    });
  };

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

    // The tunnel. Every surface point knows how far along the flight it is (q) and how far across
    // its side (w), which is all the genre worlds need to paint themselves.
    const tunnelProg = program(`#version 300 es
in vec3 aPos; in vec3 aNormal; in float aKind; in float aU; in float aFace; in float aHalf;
uniform mat4 uVP; uniform float uK;
out vec3 vW; out vec3 vN; out float vKind; out float vU; out float vFace; out float vHalf;
void main() {
  vec3 p = aPos; p.xy *= uK;   // the song's sections widen and narrow the tunnel
  vW = p; vN = aNormal; vKind = aKind; vU = aU; vFace = aFace; vHalf = aHalf * uK;
  gl_Position = uVP * vec4(p, 1.0);
}`, `#version 300 es
precision highp float;
in vec3 vW; in vec3 vN; in float vKind; in float vU; in float vFace; in float vHalf;
out vec4 o;
uniform vec3 uCam, uTint, uFog;
uniform float uPos, uPulse, uKick, uKickAge, uSnare, uScroll, uTime, uDens, uWorld, uPat, uSweepZ, uSweepK;
uniform vec4 uSec;       // light, void, soft
uniform int uGenre;      // -1 none, 0 rock, 1 trap, 2 pop, 3 boombap, 4 country
uniform int uNL;
uniform vec4 uLP[${MAXL}];
uniform vec4 uLC[${MAXL}];
const float DEPTH = ${DEPTH.toFixed(3)}, GATE = ${GATE.toFixed(3)};
float lineAA(float x, float w) { float f = fract(x); float d = min(f, 1.0 - f); return 1.0 - smoothstep(0.0, fwidth(x) * w, d); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { return vnoise(p) * 0.62 + vnoise(p * 2.3 + 7.1) * 0.38; }
float PX;   // world size of a pixel on this surface, for antialiasing the patterns
float edge(float d, float w) { return smoothstep(w - PX, w + PX, d); }   // 0 inside w, 1 beyond

// Where the genre's haze gathers in the distance
vec3 hazeCol() {
  if (uGenre == 0) return vec3(0.5, 0.2, 0.05) * 0.16;
  if (uGenre == 1) return vec3(0.3, 0.06, 0.45) * 0.3;
  if (uGenre == 2) return vec3(0.85, 0.55, 0.8) * 0.16;
  if (uGenre == 3) return vec3(0.7, 0.4, 0.15) * 0.22;
  if (uGenre == 4) return vec3(0.95, 0.4, 0.18) * 0.46;   // sunset
  return vec3(0.0);
}
float ambient() {
  if (uGenre == 0) return 0.11;
  if (uGenre == 1) return 0.07;
  if (uGenre == 2) return 0.1;
  if (uGenre == 3) return 0.12;
  return 0.14;
}

// The material at (q along, w across): albedo, gloss, emission
void world(float q, float w, float cd, bool floorSide, float face, out vec3 alb, out float gloss, out vec3 emis) {
  alb = vec3(1.0); gloss = 0.67; emis = vec3(0.0);
  if (uGenre == 0) {
    // Rusted panels with rivets; every few panels an amp grille glowing from behind
    vec2 pc = vec2(q / 1.5, (w + 10.0) / 0.9);
    vec2 cell = floor(pc), f = fract(pc);
    vec2 dd = min(f, 1.0 - f) * vec2(1.5, 0.9);
    float seam = 1.0 - edge(min(dd.x, dd.y), 0.02);
    float rivet = 1.0 - edge(length(abs(f - 0.5) * vec2(1.5, 0.9) - vec2(0.63, 0.34)), 0.035);
    float rn = fbm(vec2(q * 1.3, w * 3.1) + cell * 3.7);
    float rust = smoothstep(0.35, 0.75, rn);
    vec3 metal = vec3(0.2, 0.17, 0.16) * (0.8 + 0.5 * vnoise(vec2(q * 7.0, w * 7.0)));
    alb = mix(metal, vec3(0.62, 0.25, 0.08) * (0.55 + 0.9 * rn), rust * 0.85) * (1.0 - 0.7 * seam) + rivet * vec3(0.55, 0.42, 0.3) * 0.5;
    float gp = step(0.68, hash(cell + 3.3));
    vec2 gh = fract(vec2(q, w) * 14.0) - 0.5;
    float hole = (1.0 - edge(length(gh), 0.3)) * gp * (1.0 - seam);
    alb *= 1.0 - hole * 0.85;
    emis = vec3(1.0, 0.4, 0.1) * hole * (0.035 + 0.8 * uKick) + vec3(1.0, 0.5, 0.15) * rivet * 0.03;
    gloss = mix(0.3, 0.75, 1.0 - rust) + rivet * 0.25;
  } else if (uGenre == 1) {
    // Dark chrome with neon strips along the corners and a purple strip every few steps
    alb = vec3(0.045, 0.04, 0.07) * (0.8 + 0.5 * vnoise(vec2(q * 0.7, w * 3.0)));
    float cn = 1.0 - edge(abs(cd - 0.08), 0.014);
    float cg = exp(-pow(abs(cd - 0.08) * 16.0, 2.0));
    float bar = abs(fract(q / 6.0 + 0.5) - 0.5) * 6.0;
    float st = 1.0 - edge(bar, 0.025);
    float dash = step(0.5, fract(q / 1.5)) * (1.0 - edge(abs(w), 0.018)) * (floorSide ? 1.0 : 0.0);
    emis = vec3(1.0, 0.1, 0.65) * (cn + 0.22 * cg) * 0.7 + vec3(0.5, 0.15, 1.0) * (st * 0.85 + exp(-bar * bar * 50.0) * 0.22 + dash * 0.5);
    emis *= 1.0 + uKick * 2.2;
    gloss = 0.97;
  } else if (uGenre == 2) {
    // Glossy candy: a pastel per side, soft stripes, a bright rim
    vec3 pal[5] = vec3[](vec3(1.0, 0.62, 0.78), vec3(0.6, 0.9, 0.82), vec3(0.72, 0.66, 1.0), vec3(1.0, 0.8, 0.6), vec3(0.6, 0.82, 1.0));
    vec3 base = pal[int(mod(face, 5.0))];
    float st = fract((q + w) / 1.4);
    float stripe = smoothstep(0.0, 0.06, st) * (1.0 - smoothstep(0.5, 0.56, st));
    alb = base * (0.8 + 0.35 * stripe);
    float dotg = 1.0 - edge(length(fract(vec2(q, w) / 0.45) - 0.5) * 0.45, 0.05);
    alb = mix(alb, vec3(1.0), dotg * 0.18);
    emis = base * (0.04 + 0.3 * exp(-cd * cd * 90.0));
    gloss = 0.45;
  } else if (uGenre == 3) {
    if (floorSide) {
      // A record every few steps: grooves, a label, a spinning sheen
      vec2 d = vec2((fract(q / 6.0) - 0.5) * 6.0, w);
      float r = length(d), ang = atan(d.y, d.x);
      float disc = 1.0 - edge(r, 1.42);
      float groove = 0.5 + 0.5 * cos(r * 240.0);
      float label = 1.0 - edge(r, 0.4);
      float sheen = pow(abs(cos((ang - uTime * 0.8) * 2.0)), 10.0) * (1.0 - label) * disc;
      vec3 vinyl = vec3(0.05, 0.045, 0.055) * (0.5 + 0.9 * groove);
      vec3 conc = vec3(0.2, 0.15, 0.11) * (0.7 + 0.5 * fbm(vec2(q, w) * 3.0));
      alb = mix(conc, vinyl, disc);
      alb = mix(alb, vec3(0.7, 0.4, 0.12), label * disc * 0.9);
      emis = vec3(1.0, 0.7, 0.35) * sheen * 0.3;
      gloss = mix(0.35, 0.95, disc * (1.0 - label));
    } else {
      // Dusty brick
      float row = floor(w / 0.2 + 60.0);
      float bq = q / 0.5 + 0.5 * mod(row, 2.0);
      vec2 cell = vec2(floor(bq), row), f = vec2(fract(bq), fract(w / 0.2 + 60.0));
      float mort = 1.0 - edge(min(min(f.x, 1.0 - f.x) * 0.5, min(f.y, 1.0 - f.y) * 0.2), 0.017);
      float h = hash(cell);
      vec3 brick = mix(vec3(0.36, 0.15, 0.08), vec3(0.58, 0.34, 0.15), h) * (0.75 + 0.5 * fbm(vec2(q, w) * 9.0));
      alb = mix(brick, vec3(0.13, 0.11, 0.09), mort);
      gloss = 0.22;
    }
  } else if (uGenre == 4) {
    // Wooden planks, plus string lights swagged along every corner
    float pr = w / 0.32 + 50.0;
    float pid = floor(pr), pf = fract(pr);
    float plen = 1.5 * (1.0 + floor(hash(vec2(pid, 1.7)) * 3.0));
    plen = plen > 4.0 ? 6.0 : plen;
    float lq = q / plen + hash(vec2(pid, 5.1)) * 10.0;
    float seam = 1.0 - edge(min(min(pf, 1.0 - pf) * 0.32, min(fract(lq), 1.0 - fract(lq)) * plen), 0.014);
    float grain = fbm(vec2(q * 0.35, pr * 3.0) + pid * 1.7);
    vec3 wood = mix(vec3(0.3, 0.16, 0.075), vec3(0.52, 0.3, 0.14), hash(vec2(pid, floor(lq))) * 0.6 + grain * 0.4);
    wood *= 0.85 + 0.25 * sin(grain * 9.0);
    alb = wood * (1.0 - 0.75 * seam);
    gloss = 0.28;
    float f = fract(q / 1.5), swag = 0.05 + 0.16 * 4.0 * f * (1.0 - f);
    float wire = 1.0 - edge(abs(cd - swag), 0.006);
    float bulb = exp(-(pow((f - 0.5) * 1.5, 2.0) + pow(cd - swag - 0.035, 2.0)) * 160.0);
    float bid = floor(q / 1.5) + face * 3.0;
    vec3 bc = mix(vec3(1.0, 0.72, 0.3), vec3(1.0, 0.45, 0.35), step(0.66, hash(vec2(bid, 2.0))));
    bc = mix(bc, vec3(1.0, 0.88, 0.5), step(0.8, hash(vec2(bid, 9.0))));
    float tw = 0.85 + 0.15 * sin(uTime * 1.2 + bid * 2.0);
    emis = bc * bulb * 3.5 * tw + vec3(0.06, 0.04, 0.03) * wire + bc * exp(-cd * cd * 120.0) * 0.04;
    alb *= 1.0 - wire * 0.7;
  }
}

void main() {
  if (vKind > 0.5) {
    // The far end: a glow in the genre's color
    float r = length(vW.xy) / 1.9;
    vec3 far = uFog + hazeCol();
    vec3 c = uFog * 2.0 + uTint * 0.55 * pow(max(1.0 - r, 0.0), 1.6);
    if (uGenre >= 0) {
      c = far + uTint * 0.4 * pow(max(1.0 - r, 0.0), 1.8);
      if (uGenre == 4) {   // a low sun
        float sr = length(vW.xy - vec2(0.0, -0.1));
        float bands = step(0.5, fract(vW.y * 9.0)) * smoothstep(0.1, -0.35, vW.y) * 0.8;
        c += vec3(1.0, 0.62, 0.25) * (smoothstep(0.42, 0.36, sr) * (1.0 - bands) * 1.4 + exp(-sr * sr * 2.5) * 0.55);
      } else if (uGenre == 1) {
        c += vec3(0.9, 0.1, 0.6) * (1.0 - smoothstep(0.0, 0.03, abs(r - 0.6))) * 0.5 + vec3(0.4, 0.1, 0.9) * exp(-r * r * 6.0) * 0.5;
      } else if (uGenre == 2) {
        c += vec3(1.0, 0.9, 0.95) * exp(-r * r * 5.0) * 0.55;
      }
    }
    float v = uSec.y;
    c = mix(c, vec3(0.008, 0.01, 0.03) + uTint * 0.02 * exp(-r * r * 3.0), v);
    o = vec4(c, 1.0);
    return;
  }
  vec3 N = normalize(vN);
  vec3 V = normalize(uCam - vW);
  float dist = length(vW - uCam);
  float q = uScroll - vW.z;
  float w = vU * vHalf;
  float cd = vHalf - abs(w);
  bool floorSide = vFace < 0.5;
  PX = fwidth(q) + fwidth(w) + 1e-4;

  float beat = (-vW.z - GATE) / DEPTH + uPos;
  float near = smoothstep(0.0, 1.5, -vW.z);
  vec3 lines = uTint * (lineAA(beat, 1.2) * 0.09 + lineAA(beat / 4.0, 1.6) * 0.36) * near;   // beat and bar lines
  if (floorSide) lines += vec3(0.32, 0.72, 1.0) * lineAA((vU * 1.6 + 1.55) / 0.775, 1.0) * 0.035;   // drum lanes on the floor
  else lines += uTint * lineAA(vU * 4.0, 1.0) * 0.018;                                                // pitch rows on the other sides

  vec3 alb, emis; float gloss;
  world(q, w, cd, floorSide, vFace, alb, gloss, emis);
  // A new genre fades its world in; edit mode quiets the decoration so the lanes read
  alb = mix(vec3(0.55), alb, uWorld);
  emis *= uWorld * uPat;
  alb = mix(alb, vec3(dot(alb, vec3(0.333))), 0.5 * uSec.z);   // intros and outros are soft

  vec3 col;
  vec3 albW = vec3(1.0);
  if (uGenre < 0) col = uTint * 0.02;
  else {
    col = alb * ambient() * (0.4 + 0.6 * exp(-dist * 0.1));
    albW = 0.25 + 1.6 * alb;
  }
  col += emis;
  vec3 R = reflect(-V, N);
  float sexp = 20.0 + gloss * 150.0, sw = gloss * 1.6;
  for (int i = 0; i < ${MAXL}; i++) {
    if (i >= uNL) break;
    vec3 L = uLP[i].xyz - vW;
    float d2 = dot(L, L);
    vec3 Ln = L * inversesqrt(d2);
    float diff = max(dot(N, Ln), 0.0) / (1.0 + d2 * 2.5);
    float spec = pow(max(dot(R, Ln), 0.0), sexp) * sw / (1.0 + d2 * 0.25);
    col += uLC[i].rgb * (diff * 0.12 * albW + spec);
  }
  float gd = abs(-vW.z - GATE);
  col += vec3(1.0, 0.54, 0.24) * uPulse * 0.05 * exp(-gd * 1.6);
  // The kick: the walls flare and a wave runs away down the tunnel. The snare is a smaller flash.
  float band = exp(-pow((-vW.z - GATE - uKickAge * 18.0) * 0.3, 2.0));
  col += mix(uTint, vec3(1.0), 0.25) * uKick * (0.04 + 0.32 * band) * (0.35 + albW * 0.6);
  col += vec3(1.0, 0.86, 0.72) * uSnare * 0.14 * exp(-gd * 0.35) * (0.3 + albW * 0.5);
  col *= uSec.x;

  // Fog and genre haze
  vec3 fogC = uFog + hazeCol() * smoothstep(5.0, 40.0, dist);
  col = mix(fogC, col, exp(-dist * uDens));
  // In a break the walls dissolve into space and only the guides remain
  float v = uSec.y;
  if (v > 0.001) {
    vec3 d = normalize(vW - uCam);
    float nb = fbm(d.xy / (abs(d.z) + 0.25) * 1.2 + 3.0);
    vec3 space = vec3(0.006, 0.008, 0.026) + mix(uTint, vec3(0.35, 0.25, 0.9), 0.5) * 0.06 * nb * nb;
    col = mix(col, space, v);
  }
  col += lines * uSec.x * (1.0 - 0.3 * uWorld * (1.0 - v));
  // The glow that sweeps down the tunnel when the key lifts
  col += mix(uTint, vec3(1.0), 0.5) * uSweepK * exp(-pow((vW.z - uSweepZ) * 0.22, 2.0)) * (0.25 + albW * 0.25);
  o = vec4(col, 1.0);
}`);

    // Notes: instanced slabs, each role drawn in a style that echoes its sound
    const noteProg = program(`#version 300 es
in vec3 aPos;
in vec3 iOff; in vec3 iScale; in vec3 iColor; in vec3 iParam; in float iRot; in float iStyle;
uniform mat4 uVP; uniform float uThrob, uPhase;
out vec3 vLocal; out vec3 vW; out vec3 vColor; out vec3 vParam; out float vStyle;
void main() {
  vLocal = aPos; vColor = iColor; vParam = iParam; vStyle = iStyle;
  vec3 sc = iScale;
  if (iStyle > 1.5 && iStyle < 2.5) sc.y *= 1.0 + uThrob * 0.14 * sin(uPhase);   // bass slabs throb gently
  vec3 p = aPos * sc;
  float c = cos(iRot), s = sin(iRot);
  p.xy = vec2(c * p.x - s * p.y, s * p.x + c * p.y);   // lie flat on a slanted side
  vW = iOff + p;
  gl_Position = uVP * vec4(vW, 1.0);
}`, `#version 300 es
precision highp float;
in vec3 vLocal; in vec3 vW; in vec3 vColor; in vec3 vParam; in float vStyle;
out vec4 o;
uniform vec3 uCam; uniform float uTime, uTwinkle, uDensN, uThrob, uPhase;
void main() {
  vec3 a = abs(vLocal) * 2.0;
  float ex = smoothstep(0.72, 1.0, a.x), ey = smoothstep(0.72, 1.0, a.y), ez = smoothstep(0.86, 1.0, a.z);
  float edge = max(max(ex * ey, ey * ez), ex * ez);
  float top = step(0.45, vLocal.y);       // the face that looks into the tunnel
  float t = vLocal.z + 0.5;               // 0 at the tail, 1 at the head
  float k = vParam.x;
  vec3 c = vColor * (0.45 + 1.7 * edge) * k;
  if (vStyle > 0.5) {
    if (vStyle < 1.5) {
      // Drum pad: a glossy tile with a hot center, flashing when it lands
      float inner = 1.0 - smoothstep(0.0, 1.0, max(a.x, a.z));
      c = vColor * (0.35 + 1.5 * edge + top * (0.45 + inner * 1.0)) * k;
    } else if (vStyle < 2.5) {
      // Bass: a thick slab with a hot spine
      float spine = exp(-a.x * a.x * 2.5);
      c = vColor * (0.5 + 1.2 * edge + top * (0.3 + 0.6 * spine)) * k * (1.0 + 0.16 * uThrob * sin(uPhase));
    } else if (vStyle < 3.5) {
      // Chord: stacked bars, brightest at the head
      float fx = fract((vLocal.x + 0.5) * 3.0);
      float bar = smoothstep(0.0, 0.12, fx) * smoothstep(1.0, 0.86, fx);
      c = vColor * (0.18 + 0.4 * edge + top * bar * (0.6 + 0.9 * smoothstep(0.6, 1.0, t))) * k * 1.15;
    } else if (vStyle < 4.5) {
      // Melody note head: crisp and bright, with a white-hot middle
      float inner = 1.0 - smoothstep(0.0, 1.0, max(a.x, a.z));
      c = mix(vColor, vec3(1.0, 0.95, 0.85), top * inner * 0.4) * (0.7 + 1.6 * edge + top * 0.5) * k * 1.2;
    } else if (vStyle < 5.5) {
      // Percussion: small pads that glitter
      float tw = pow(max(0.0, sin(uTime * 8.0 + vParam.z * 60.0 + (vLocal.x * 3.0 + vLocal.z) * 13.0)), 10.0) * uTwinkle;
      c = vColor * (0.45 + 1.3 * edge + tw * 1.8 + top * 0.2) * k;
    } else {
      // Effects: a wide soft wash
      float g = exp(-(a.x * a.x * 1.6 + a.z * a.z * 1.1));
      c = vColor * (0.07 + 0.95 * g * top + 0.12 * edge) * k * (0.92 + 0.08 * sin(uTime * 1.5 + vParam.z * 10.0));
    }
  }
  if (vParam.y > 0.5) {
    // a preview: dim, shimmering, with dashed edges
    float sh = 0.55 + 0.45 * sin(vW.z * 9.0 + uTime * 7.0 + vParam.z * 6.0);
    float dash = step(0.5, fract(vW.z * 2.2 - uTime * 1.5));
    c = vColor * (0.12 * sh + 1.3 * edge * dash) * k;
  }
  float dist = length(vW - uCam);
  c *= exp(-dist * 0.04 * uDensN) * smoothstep(0.6, 2.7, -vW.z);   // fade out quickly after the gate
  o = vec4(c, 1.0);
}`);

    // Melody ribbons: a glowing line that traces the tune between the note heads
    const ribbonProg = program(`#version 300 es
in vec3 aPos; in float aSide; in vec3 aColor; in float aK; in float aGhost;
uniform mat4 uVP;
out vec3 vW; out float vS; out vec3 vC; out float vK; out float vG;
void main() { vW = aPos; vS = aSide; vC = aColor; vK = aK; vG = aGhost; gl_Position = uVP * vec4(aPos, 1.0); }`, `#version 300 es
precision highp float;
in vec3 vW; in float vS; in vec3 vC; in float vK; in float vG;
out vec4 o;
uniform vec3 uCam; uniform float uTime, uDensN;
const float GATE = ${GATE.toFixed(3)};
void main() {
  float core = exp(-vS * vS * 3.0);
  float line = core * 1.15 + exp(-vS * vS) * 0.25;
  vec3 c = vC * vK * line + vec3(1.0, 0.95, 0.85) * core * core * vK * 0.25;
  c += vC * exp(-abs(vW.z + GATE) * 1.8) * core * 0.9;   // lights up as it passes the gate
  if (vG > 0.5) c *= 0.25 + 0.75 * step(0.5, fract(vW.z * 2.2 - uTime * 1.5));
  float dist = length(vW - uCam);
  c *= exp(-dist * 0.04 * uDensN) * smoothstep(0.6, 2.7, -vW.z);
  o = vec4(c, 1.0);
}`);

    const sparkProg = program(`#version 300 es
in vec3 aPos; in vec4 aColor; in float aSize;
uniform mat4 uVP; uniform float uScale;
out vec4 vColor;
void main() { vColor = aColor; gl_Position = uVP * vec4(aPos, 1.0); gl_PointSize = max(1.0, uScale * aSize * (0.6 + aColor.a) / max(gl_Position.w, 0.3)); }`, `#version 300 es
precision highp float;
in vec4 vColor; out vec4 o;
void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float f = exp(-dot(p, p) * 3.0); o = vec4(vColor.rgb * vColor.a * f * 3.0, 1.0); }`);

    // Ambient particles: embers, rain, bubbles, dust, fireflies per genre, and the stars of a break.
    // They live on the GPU: each is a fixed seed, placed and moved by the flight's scroll.
    const partProg = program(`#version 300 es
in vec4 aSeed; in float aEnd;
uniform mat4 uVP; uniform float uMode, uScrollZ, uTimeP, uK, uSize, uAmt;
out vec4 vCol;
void main() {
  const float L = 44.0;
  float ang = aSeed.x * 6.2832, rad = sqrt(aSeed.y), sd = aSeed.w;
  float z = -mod(aSeed.z * L - uScrollZ, L);
  vec3 P; vec3 col; float size = 1.0, al = 1.0;
  if (uMode > 5.5) {
    float r = 0.95 + aSeed.y * 6.0;   // stars sit beyond the walls
    P = vec3(cos(ang) * r * 1.6, sin(ang) * r, z);
    col = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.86, 0.7), fract(sd * 7.0)); size = 0.5 + sd * 1.4;
  } else {
    float H = 0.9 * uK;
    P = vec3(cos(ang) * rad * 1.45 * uK * 0.92, sin(ang) * rad * H * 0.92, z);
    if (uMode < 1.5) {          // rock: embers rise
      P.y = mod(P.y + H + uTimeP * (0.12 + 0.2 * sd), 2.0 * H) - H; P.x += sin(uTimeP * 0.6 + sd * 30.0) * 0.06;
      col = vec3(1.0, 0.45, 0.12) * (0.6 + sd); size = 0.6 + sd * 0.6;
    } else if (uMode < 2.5) {   // trap: rain falls fast
      P.y = mod(P.y + H - uTimeP * (4.0 + 3.0 * sd), 2.0 * H) - H + aEnd * (0.28 + 0.3 * sd);
      col = mix(vec3(0.7, 0.2, 1.0), vec3(1.0, 0.25, 0.75), fract(sd * 5.0)) * 0.9; al = 0.6;
    } else if (uMode < 3.5) {   // pop: bubbles drift up
      P.y = mod(P.y + H + uTimeP * (0.08 + 0.12 * sd), 2.0 * H) - H;
      col = 0.72 + 0.28 * cos(6.2832 * (sd + vec3(0.0, 0.33, 0.67))); size = 1.3 + sd * 2.0; al = 0.5;
    } else if (uMode < 4.5) {   // boom bap: dust motes
      P.xy += vec2(sin(uTimeP * 0.2 + sd * 40.0), cos(uTimeP * 0.17 + sd * 23.0)) * 0.12;
      col = vec3(1.0, 0.7, 0.35) * 0.7; size = 0.7;
    } else {                    // country: fireflies wander and blink
      P.xy += vec2(sin(uTimeP * 0.4 + sd * 40.0), cos(uTimeP * 0.33 + sd * 23.0)) * 0.18;
      col = vec3(1.0, 0.85, 0.35); size = 1.2; al = 0.2 + 0.8 * pow(0.5 + 0.5 * sin(uTimeP * 1.3 + sd * 50.0), 2.0);
    }
  }
  al *= smoothstep(0.6, 3.0, -z) * smoothstep(L, L - 14.0, -z);
  vCol = vec4(col, al * uAmt);
  gl_Position = uVP * vec4(P, 1.0);
  gl_PointSize = max(1.0, uSize * size / max(gl_Position.w, 0.3));
}`, `#version 300 es
precision highp float;
in vec4 vCol; out vec4 o; uniform float uLine;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float f = uLine > 0.5 ? 1.0 : exp(-dot(p, p) * 3.0);
  o = vec4(vCol.rgb * vCol.a * f * 1.6, 1.0);
}`);

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

    // Tone mapping, plus the perform moods: filter grade, key-up hue shift, the stop-cut chill
    const compProg = program(FULL_VS, `#version 300 es
precision highp float; in vec2 vUv; out vec4 o;
uniform sampler2D uScene, uB1, uB2; uniform float uFade, uHue, uBright; uniform vec3 uGrade;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 hueRot(vec3 c, float a) { float cs = cos(a), sn = sin(a); vec3 k = vec3(0.57735); return c * cs + cross(k, c) * sn + k * dot(k, c) * (1.0 - cs); }
void main() {
  vec3 c = texture(uScene, vUv).rgb + texture(uB1, vUv).rgb * 0.6 + texture(uB2, vUv).rgb * 0.8;
  c = hueRot(c, uHue) * uGrade * uBright;
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

    // The sides and the far end cap: [x y z  nx ny nz  kind  u (across the side, -1..1)  side index  half width]
    const tunnelBuf = gl.createBuffer();
    const tunnelVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, tunnelBuf);
      attrib(tunnelProg, 'aPos', 3, 10, 0);
      attrib(tunnelProg, 'aNormal', 3, 10, 3);
      attrib(tunnelProg, 'aKind', 1, 10, 6);
      attrib(tunnelProg, 'aU', 1, 10, 7);
      attrib(tunnelProg, 'aFace', 1, 10, 8);
      attrib(tunnelProg, 'aHalf', 1, 10, 9);
    });
    let faces = null, sides = null, sidesKey = '', tunnelCount = 0;
    function setSides(list) {
      const key = list.join(',');
      if (key === sidesKey) return;
      sidesKey = key;
      sides = list;
      faces = JT.buildFaces(list.length);
      const data = [];
      const Z0 = 1, Z1 = -FAR;
      faces.forEach((F, i) => {
        const n = [F.n[0], F.n[1], 0];
        const ua = -F.flip, ub = F.flip;   // u runs the way notes rise
        const P = (pt, z, u) => data.push(pt[0], pt[1], z, ...n, 0, u, i, F.half);
        P(F.a, Z0, ua); P(F.b, Z0, ub); P(F.b, Z1, ub);
        P(F.a, Z0, ua); P(F.b, Z1, ub); P(F.a, Z1, ua);
      });
      faces.forEach(F => {
        [[0, 0], F.a, F.b].forEach(pt => data.push(pt[0], pt[1], Z1 + 0.01, 0, 0, 1, 1, 0, 0, 1));
      });
      tunnelCount = data.length / 10;
      gl.bindBuffer(gl.ARRAY_BUFFER, tunnelBuf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    }
    setSides(['drums', 'bass', 'pad', 'lead']);

    // Unit cube, counter-clockwise from outside: [normal, u, v] per face with u x v = normal
    const cube = [];
    [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[-1, 0, 0], [0, 0, 1], [0, 1, 0]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]],
     [[0, -1, 0], [1, 0, 0], [0, 0, 1]], [[0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, 0, -1], [0, 1, 0], [1, 0, 0]]].forEach(([n, u, v]) => {
      const P = (su, sv) => [0, 1, 2].map(i => 0.5 * n[i] + 0.5 * su * u[i] + 0.5 * sv * v[i]);
      [P(-1, -1), P(1, -1), P(1, 1), P(-1, -1), P(1, 1), P(-1, 1)].forEach(p => cube.push(...p));
    });
    const MAX_INST = 3072, INST = 14;
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
      attrib(noteProg, 'iRot', 1, INST, 12, 1);
      attrib(noteProg, 'iStyle', 1, INST, 13, 1);
    });

    // Ribbon quads: [x y z  side  r g b  intensity  ghost]
    const RIB = 9, MAX_RIB = 5000;
    const ribData = new Float32Array(MAX_RIB * 6 * RIB);
    let ribN = 0;
    const ribBuf = gl.createBuffer();
    const ribVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, ribBuf);
      gl.bufferData(gl.ARRAY_BUFFER, ribData.byteLength, gl.DYNAMIC_DRAW);
      attrib(ribbonProg, 'aPos', 3, RIB, 0);
      attrib(ribbonProg, 'aSide', 1, RIB, 3);
      attrib(ribbonProg, 'aColor', 3, RIB, 4);
      attrib(ribbonProg, 'aK', 1, RIB, 7);
      attrib(ribbonProg, 'aGhost', 1, RIB, 8);
    });

    const MAX_SPARKS = 900, SPK = 8;
    const sparkData = new Float32Array(MAX_SPARKS * SPK);
    const sparkBuf = gl.createBuffer();
    const sparkVao = vao(() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, sparkBuf);
      gl.bufferData(gl.ARRAY_BUFFER, sparkData.byteLength, gl.DYNAMIC_DRAW);
      attrib(sparkProg, 'aPos', 3, SPK, 0);
      attrib(sparkProg, 'aColor', 4, SPK, 3);
      attrib(sparkProg, 'aSize', 1, SPK, 7);
    });
    const sparks = [];

    // Ambient particles: seeds in pairs so rain can draw each drop as a line (head, tail)
    const NPART = 380;
    const partVao = vao(() => {
      const seeds = new Float32Array(NPART * 2 * 5);
      for (let i = 0; i < NPART; i++) {
        const s = [Math.random(), Math.random(), Math.random(), Math.random()];
        seeds.set([...s, 0, ...s, 1], i * 10);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW);
      attrib(partProg, 'aSeed', 4, 5, 0);
      attrib(partProg, 'aEnd', 1, 5, 4);
    });

    // --- RENDER TARGETS (multisampled scene for antialiasing, then bloom chain) ---
    // Phones get lighter antialiasing and a lower starting resolution
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const SAMPLES = Math.min(coarse ? 2 : 4, gl.getParameter(gl.MAX_SAMPLES) || 0);
    let scale = Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 1.5);
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
    // K scales the whole tunnel (the song's sections breathe it wider and narrower). The walls, the
    // notes, picking and lanes all read it, so they always agree.
    let K = 1;
    // Returns [center, size, rotation] for a note slab lying on its part's side.
    // spec: { range: [low, high] } for pitched parts, { pieces: [...] } for percussion and effects.
    function placeNote(role, n, zHead, len, spec) {
      const F = faces[Math.max(0, sides.indexOf(role))];
      const zc = zHead - len / 2;
      const scale = F.half / 1.6;   // the original floor's half width
      let u, across;
      if (role === 'drums') {
        u = (LANES[n.p] || 0) / 1.6;
        across = (0.5 + n.v * 0.08) * scale;
      } else if (spec && spec.pieces) {
        const i = Math.max(0, spec.pieces.indexOf(n.p)), k = spec.pieces.length;
        u = k > 1 ? -0.8 + 1.6 * i / (k - 1) : 0;
        across = Math.min(0.42, F.len / k * 0.8);
      } else {
        const range = (spec && spec.range) || [36, 72];
        const t = Math.min(1, Math.max(0, (n.p - range[0]) / (range[1] - range[0])));
        u = (2 * t - 1) * 0.85;
        across = role === 'pad' ? 0.22 : 0.14;
      }
      const lift = 0.06;
      return [[(F.c[0] + F.d[0] * u * F.half) * K + F.n[0] * lift, (F.c[1] + F.d[1] * u * F.half) * K + F.n[1] * lift, zc], [across * K, 0.1, len], F.rot];
    }
    // Give a placed note its role's build: [size multiplier across, thickness, length multiplier]
    function styleNote(role, n, c, s, spec) {
      let ax = 1, th = 0.1, lm = 1;
      if (role === 'drums') {
        const big = n.p === 'kick' ? 1.35 : (n.p === 'hat' || n.p === 'openhat') ? 0.72 : 1;
        ax = big; lm = Math.max(big, 0.9); th = 0.12;
      } else if (role === 'bass') { ax = 1.5; th = 0.24; }
      else if (role === 'perc') { ax = 0.7; lm = 0.8; th = 0.09; }
      else if (role === 'fx') { ax = Math.min(2.2, (spec && spec.pieces && spec.pieces.length > 1) ? 1.5 : 2.2); th = 0.07; }
      s[0] *= ax; s[1] = th; s[2] *= lm;
      if (th !== 0.1) {   // keep the underside on the wall
        const F = faces[Math.max(0, sides.indexOf(role))], sh = (th - 0.1) * 0.5;
        c[0] += F.n[0] * sh; c[1] += F.n[1] * sh;
      }
    }
    // An instance: center, size, color, intensity, ghost flag, seed, rotation, style
    function inst(ni, c, s, col, k, ghost, seed, rot, style) {
      const o = ni * INST;
      instData[o] = c[0]; instData[o + 1] = c[1]; instData[o + 2] = c[2];
      instData[o + 3] = s[0]; instData[o + 4] = s[1]; instData[o + 5] = s[2];
      instData[o + 6] = col[0]; instData[o + 7] = col[1]; instData[o + 8] = col[2];
      instData[o + 9] = k; instData[o + 10] = ghost; instData[o + 11] = seed;
      instData[o + 12] = rot; instData[o + 13] = style || 0;
    }
    // The tunnel's outline at depth z, as thin bars (the gate, section starts)
    function frameAt(ni, z, col, k, th) {
      faces.forEach(F => { if (ni < MAX_INST) { inst(ni, [F.c[0] * K, F.c[1] * K, z], [F.len * K + th, th, th], col, k, 0, 0, F.rot); ni++; } });
      return ni;
    }

    // --- MELODY RIBBONS ---
    // Notes of lead and counter parts are linked in time order. Between notes the ribbon bends from
    // one pitch to the next; a glide bends along its own length; a quick grace-note pair becomes a slide.
    const infoCache = new WeakMap();
    function partInfo(notes) {
      let sig = notes.length;
      for (let i = 0; i < notes.length; i++) { const n = notes[i]; sig += n.b * 1.7 + n.p * 0.31 + n.len * 0.9 + (n.glideTo || 0) * 0.13; }
      let c = infoCache.get(notes);
      if (c && c.sig === sig) return c;
      const ord = notes.map((_, i) => i).sort((x, y) => notes[x].b - notes[y].b);
      const slideIn = ord.map((idx, k) => {
        if (!k) return false;
        const prev = notes[ord[k - 1]], n = notes[idx];
        return prev.len <= 0.16 && n.b - (prev.b + prev.len) <= 0.1 && prev.p !== n.p;
      });
      c = { sig, ord, slideIn };
      infoCache.set(notes, c);
      return c;
    }
    function pitchU(spec, pitch) {
      const range = (spec && spec.range) || [36, 72];
      return (2 * Math.min(1, Math.max(0, (pitch - range[0]) / (range[1] - range[0]))) - 1) * 0.85;
    }
    const PU = new Float32Array(24), PZ = new Float32Array(24), PP = new Float32Array(24 * 3);
    // Emit a ribbon along the points (PU across, PZ depth) on side F
    function ribbon(F, m, col, k, ghost, hw) {
      for (let i = 0; i < m; i++) {
        PP[i * 3] = (F.c[0] + F.d[0] * PU[i] * F.half) * K + F.n[0] * 0.07;
        PP[i * 3 + 1] = (F.c[1] + F.d[1] * PU[i] * F.half) * K + F.n[1] * 0.07;
        PP[i * 3 + 2] = PZ[i];
      }
      if (ribN + (m - 1) * 6 > MAX_RIB * 6) return;
      for (let i = 0; i < m - 1; i++) {
        for (let v = 0; v < 6; v++) {
          // two triangles: (i,-) (i,+) (i+1,-)  and  (i,+) (i+1,+) (i+1,-)
          const e = (v === 2 || v === 4 || v === 5) ? 1 : 0, sgn = (v === 1 || v === 3 || v === 4) ? 1 : -1;
          const j = i + e, a = Math.max(0, j - 1), b = Math.min(m - 1, j + 1);
          const tx = PP[b * 3] - PP[a * 3], ty = PP[b * 3 + 1] - PP[a * 3 + 1], tz = PP[b * 3 + 2] - PP[a * 3 + 2];
          let sx = -tz * F.n[1], sy = tz * F.n[0], sz = tx * F.n[1] - ty * F.n[0];
          const l = Math.hypot(sx, sy, sz) || 1; sx *= hw / l; sy *= hw / l; sz *= hw / l;
          const o = (ribN++) * RIB;
          ribData[o] = PP[j * 3] + sx * sgn; ribData[o + 1] = PP[j * 3 + 1] + sy * sgn; ribData[o + 2] = PP[j * 3 + 2] + sz * sgn;
          ribData[o + 3] = sgn; ribData[o + 4] = col[0]; ribData[o + 5] = col[1]; ribData[o + 6] = col[2];
          ribData[o + 7] = k; ribData[o + 8] = ghost;
        }
      }
    }
    const smooth = t => t * t * (3 - 2 * t);
    // A pitch curve from (beat z0, u0) to (z1, u1)
    function curve(z0, u0, z1, u1, steps) {
      for (let i = 0; i <= steps; i++) {
        const t = i / steps, e = u0 === u1 ? 0 : smooth(t);
        PU[i] = u0 + (u1 - u0) * e; PZ[i] = z0 + (z1 - z0) * t;
      }
      return steps + 1;
    }
    const zOf = rel => -(GATE + rel * DEPTH);
    function ribbonPart(part, info, color, gain, ghost, dim, vp, S, loop) {
      const notes = part.notes, F = faces[Math.max(0, sides.indexOf(part.role))], hw = (part.role === 'counter' ? 0.034 : 0.045) * Math.sqrt(K);
      const m = notes.length;
      for (let k = 0; k < m; k++) {
        const n = notes[info.ord[k]], wrap = k === m - 1;
        const nx = notes[info.ord[wrap ? 0 : k + 1]], nb = nx.b + (wrap ? loop : 0);
        const slide = k + 1 < m && info.slideIn[k + 1];
        const u0 = pitchU(part, n.p), u1 = n.glideTo ? pitchU(part, n.glideTo) : u0, ux = pitchU(part, nx.p);
        const rel0 = (((n.b - vp) % loop) + loop) % loop;
        const kk = (0.5 + 0.4 * n.v) * gain * dim * (ghost ? 0.5 : 1);
        for (let c = 0; c < 2; c++) {
          const rel = rel0 - c * loop;
          if (zOf(rel) < -FAR || zOf(rel + (nb - n.b)) > 1) continue;
          const playing = rel <= 0 && rel + n.len > 0;
          const kb = kk + (playing && !ghost ? (0.35 + 1.4 * Math.exp(Math.min(0, rel) * S * 7)) * gain * dim * 0.5 : 0);
          if (slide) {
            // the grace note slides up into the next note over a short span
            const rn = rel + (nb - n.b), span = Math.min(0.3, nx.len);
            const mm = curve(zOf(rel), u0, zOf(rn + span), ux, 8);
            ribbon(F, mm, color, kk, ghost, hw);
            continue;
          }
          // the note's own body, bending if it glides
          const slid = k > 0 && info.slideIn[k] ? Math.min(0.3, n.len) : 0;
          const t0 = n.len > 0 ? slid / n.len : 0;
          const bu0 = u0 + (u1 - u0) * (n.glideTo ? smooth(t0) : 0);
          const steps = n.glideTo ? 6 : 1;
          for (let i = 0; i <= steps; i++) {
            const t = t0 + (1 - t0) * i / steps;
            PU[i] = n.glideTo ? u0 + (u1 - u0) * smooth(t) : bu0; PZ[i] = zOf(rel + t * n.len);
          }
          ribbon(F, steps + 1, color, kb, ghost, hw);
          // and the bend to the next note, if the tune carries on
          const gap = nb - (n.b + n.len);
          if (gap < 1.25 && nb - n.b > 0.02) {   // (notes struck together aren't a melodic step)
            const e = Math.min(n.b + n.len, nb), du = Math.abs(ux - u1);
            const mm = curve(zOf(rel + (e - n.b)), u1, zOf(rel + (nb - n.b)), ux, du < 0.015 ? 1 : 8);
            ribbon(F, mm, color, kk, ghost, hw);
          }
        }
      }
    }

    // Sparks burst off the notes that land at the gate; kicks are big, hats small
    function spawnSparks(role, at, color, v, p) {
      const F = faces[Math.max(0, sides.indexOf(role))];
      const n = F.n;
      let count = Math.round(8 + v * 10), size = 1, spd = 1, lat = 1.4;
      if (role === 'drums') {
        if (p === 'kick') { count = 28; size = 1.7; spd = 1.5; lat = 3.0; }
        else if (p === 'hat' || p === 'openhat') { count = 6; size = 0.65; spd = 0.8; }
        else { count = 15; size = 1.15; lat = 2.2; }
      } else if (role === 'perc') { count = 10; size = 0.7; }
      for (let i = 0; i < count && sparks.length < MAX_SPARKS; i++) {
        const sp = (1.2 + Math.random() * 1.8) * spd;
        sparks.push({
          p: [at[0], at[1], at[2]],
          v: [n[0] * sp + (Math.random() - 0.5) * lat, n[1] * sp + (Math.random() - 0.5) * lat, Math.random() * 2.2 + 0.4],
          c: color, life: 0, max: 0.35 + Math.random() * 0.45, size: size * (0.8 + Math.random() * 0.4),
        });
      }
    }

    // --- THE MUSIC'S MOODS (all smoothed here so app.js can just hand us raw state) ---
    const ease = (cur, target, rate, dt) => cur + (target - cur) * (1 - Math.exp(-rate * dt));
    const M = {
      vis: null, prevVis: null,           // where the notes are drawn (frozen while the band is cut)
      scroll: 0, camPhase: 0, decorTime: 0,
      stop: 0, half: 0, filter: 0, key: 0,
      kick: 0, kickAge: 9, snare: 0,
      sweepAge: 9, wasKey: false, wasStop: false,
      genre: -2, world: 1,
      sec: [1, 1, 0, 0], secT: [1, 1, 0, 0],
    };
    const GRADE = [1, 1, 1];
    // The section under the camera sets the target look, blending over about a beat around each boundary
    function sectionTarget(list, p, loop, out) {
      out[0] = 1; out[1] = 1; out[2] = 0; out[3] = 0;
      if (!list || !list.length) return;
      const m = ((p % loop) + loop) % loop;
      let i = list.findIndex(s => m >= s.start && m < s.end);
      if (i < 0) return;
      const L = SECTION_LOOK, cur = L[list[i].type] || L.verse, s = list[i];
      let tgt = cur, mixT = 1, other = null;
      if (m - s.start < 0.5) { other = L[list[(i + list.length - 1) % list.length].type] || L.verse; mixT = smooth(0.5 + (m - s.start)); }
      else if (s.end - m < 0.5) { other = L[list[(i + 1) % list.length].type] || L.verse; mixT = smooth(0.5 + (s.end - m)); }
      for (let j = 0; j < 4; j++) out[j] = other ? other[j] + (tgt[j] - other[j]) * mixT : tgt[j];
    }

    // --- FRAME ---
    // view: { pos, prevPos, spb, swing, tint, fog, paused, reduced, time, dt, fade, loop (beats),
    //         marks: [beat] (section starts), parts: [{ role, notes, ghost, range }],
    //         genre ('rock'|'trap'|'pop'|'boombap'|'country'), perf: { stop, half, filter, keyUp },
    //         sections: [{ start, end, type }] | null }
    function render(view) {
      resize();
      setSides(view.sides || ['drums', 'bass', 'pad', 'lead']);
      const p = view.pos, S = view.spb;
      const loop = view.loop || LOOP;
      const reduced = !!view.reduced;
      const dt = Math.max(0.001, Math.min(0.1, view.dt || 0.016));
      const perf = view.perf || {};
      const gid = GENRE_ID[view.genre] !== undefined ? GENRE_ID[view.genre] : -1;
      const tint = view.tint || [1.0, 0.5, 0.22], fog = view.fog || [0.02, 0.012, 0.012];

      // Stop freezes the flight; when the band comes back the notes jump to where the song really is
      // (never backwards) and the motion eases in over ~100 ms.
      if (M.vis === null) { M.vis = M.prevVis = p; M.camPhase = p; }
      M.stop = ease(M.stop, perf.stop ? 1 : 0, 25, dt);
      if (!perf.stop) M.vis = p;
      const vp = M.vis;
      const live = !perf.stop && !M.wasStop;
      M.wasStop = !!perf.stop;
      M.half = ease(M.half, perf.half ? 1 : 0, 6, dt);
      M.filter = ease(M.filter, Math.max(-1, Math.min(1, perf.filter || 0)), 5, dt);
      const keyOn = (perf.keyUp || 0) > 0;
      M.key = ease(M.key, keyOn ? 1 : 0, 6, dt);
      if (keyOn && !M.wasKey) M.sweepAge = 0;
      M.wasKey = keyOn;
      M.sweepAge += dt;
      if (gid !== M.genre) { M.genre = gid; M.world = 0; }
      M.world = Math.min(1, M.world + dt / (reduced ? 1.6 : 0.7));
      const slow = 1 - 0.5 * M.half;   // half-time slows the decoration, never the notes

      // Decorative motion follows the flight, but slowed by half-time and frozen by stop
      const dv = vp - M.prevVis;
      M.prevVis = vp;
      if (dv > 0) M.scroll = (M.scroll + Math.min(dv, 0.25) * DEPTH * slow) % SCROLL_WRAP;
      if (dv > 0) M.camPhase += Math.min(dv, 0.25) * slow;
      if (M.half < 0.05) {   // when half-time lets go, ease the sway back onto the beat
        const err = ((vp - M.camPhase) % 4 + 6) % 4 - 2;
        M.camPhase += err * Math.min(1, dt * 1.5);
      }
      M.decorTime += dt * slow * (reduced ? 0.4 : 1) * (1 - 0.9 * M.stop);   // drifting dust nearly stills with the band

      const beatPhase = vp - Math.floor(vp);
      const barStart = ((Math.floor(vp) % 4) + 4) % 4 === 0;
      const pulse = (view.paused || perf.stop ? 0.3 : Math.exp(-beatPhase * S * 7 * slow)) * (barStart ? 1.8 : 1);

      // The song's sections: tunnel width, light, void and softness
      sectionTarget(view.sections, p, loop, M.secT);
      for (let i = 0; i < 4; i++) M.sec[i] = ease(M.sec[i], M.secT[i], 9, dt);
      K = M.sec[0];

      // The camera sways gently with the groove
      const sw = reduced ? 0 : view.swing;
      const roll = view.roll || 0, amt = view.runAmt || 0;
      const cp = M.camPhase;
      const down = [Math.sin(roll), -Math.cos(roll), 0];
      const up = [-Math.sin(roll) + Math.sin(cp * Math.PI * 0.25) * 0.012 * sw * (1 - amt), Math.cos(roll), 0];
      const thump = reduced ? 0 : M.kick * (1 - amt) * (1 - 0.4 * M.half);
      const base = [Math.sin(cp * Math.PI * 0.5) * 0.07 * sw * (1 - amt), (0.12 - (reduced ? 0 : 0.025 * pulse) - 0.035 * thump) * (1 - amt), 0];
      const eye = [base[0] + down[0] * 0.42 * amt, base[1] + down[1] * 0.42 * amt, 0];
      const at = [eye[0] * 0.4 + down[0] * (0.12 + 0.75 * amt), -0.12 * (1 - amt) + down[1] * 0.75 * amt, -10];
      const aspect = canvas.width / canvas.height;
      const fovy = Math.max(62 * Math.PI / 180, 2 * Math.atan(Math.tan(36 * Math.PI / 180) / aspect)) * (1 - 0.025 * thump);
      const VP = mul(perspective(fovy, aspect, 0.05, 80), lookAt(eye, at, up));
      lastVP = VP;

      // Note instances and the brightest note lights
      let ni = 0;
      ribN = 0;
      const lights = [];
      const crossed = live && !view.paused && p > view.prevPos && p - view.prevPos < 1;
      let kickHit = 0, snareHit = 0;
      view.parts.forEach(part => {
        const role = part.role;
        const color = ROLE_COLOR[role];
        const gain = ROLE_GAIN[role];
        const style = ROLE_STYLE[role] || 0;
        const ghost = part.ghost ? 1 : 0;
        const dim = part.dim ? 0.3 : 1;   // other parts fade back while one is being edited
        const isRibbon = role === 'lead' || role === 'counter';
        const flashK = role === 'drums' ? 2.1 : 1;
        part.notes.forEach((n, idx) => {
          const rel0 = (((n.b - vp) % loop) + loop) % loop;
          [rel0, rel0 - loop].forEach(rel => {
            const zHead = -(GATE + rel * DEPTH);
            const len = isRibbon ? Math.min(0.26, Math.max(0.12, n.len * DEPTH * 0.92)) : Math.max(0.12, n.len * DEPTH * 0.92);
            if (zHead > 1 + len || zHead < -FAR || ni >= MAX_INST - 8) return;
            const playing = rel <= 0 && rel + n.len > 0;
            const since = -rel * S;
            let intensity = (0.45 + 0.4 * n.v) * gain * dim;
            if (playing) intensity += (0.35 + 1.6 * Math.exp(-since * 7)) * gain * dim * flashK;
            const [c, s, rot] = placeNote(role, n, zHead, len, part);
            if (isRibbon) { s[0] = (role === 'counter' ? 0.17 : 0.2) * K * (n.len <= 0.16 ? 0.7 : 1); s[1] = 0.12; }
            else styleNote(role, n, c, s, part);
            inst(ni, c, s, color, intensity, ghost, idx * 0.37, rot, style);
            ni++;
            const lit = (playing
              ? (0.5 + 1.6 * Math.exp(-since * 6)) * (ghost ? 0.4 : 1)
              : (rel > 0 && rel < 5 ? 0.12 * (1 - rel / 5) : 0)) * gain * dim;
            if (lit > 0.02) lights.push({ pos: [c[0] * 0.9, c[1] * 0.9, zHead - 0.1], col: color, k: lit });
          });
          // Sparks, and the kick and snare hits, when a note crosses the gate
          if (crossed && Math.floor((p - n.b) / loop) > Math.floor((view.prevPos - n.b) / loop)) {
            const [c] = placeNote(role, n, -GATE, 0, part);
            spawnSparks(role, c, color, ghost ? n.v * 0.3 : n.v, n.p);
            if (role === 'drums' && !ghost && !part.dim) {
              if (n.p === 'kick') kickHit = Math.max(kickHit, 0.65 + 0.35 * n.v);
              else if (n.p === 'snare' || n.p === 'clap' || n.p === 'rim') snareHit = Math.max(snareHit, 0.6 + 0.4 * n.v);
            }
          }
        });
        if (isRibbon && part.notes.length) {
          ribbonPart(part, partInfo(part.notes), color, gain, ghost, dim, vp, S, loop);
        }
      });

      // Kick and snare envelopes. Reduced motion gets none of the flashing or thumping.
      if (!reduced) {
        if (kickHit) { M.kick = Math.max(M.kick, kickHit); M.kickAge = 0; }
        if (snareHit) M.snare = Math.max(M.snare, snareHit * 0.7);
        M.kick *= Math.exp(-dt * 9 * slow);
        M.snare *= Math.exp(-dt * 12 * slow);
        M.kickAge += dt;
      } else { M.kick = M.snare = 0; }

      // The gate frame pulses on every beat, harder on the first beat of a bar, and on every kick
      const gateI = 0.8 + pulse * 1.4 + M.kick * 1.0, gc = tint, th = 0.035;
      ni = frameAt(ni, -GATE, gc, gateI, th);
      lights.push({ pos: [0, 0.9, -GATE], col: gc, k: pulse * 0.5 + M.kick * 0.7 + M.snare * 0.5 }, { pos: [0, -0.9, -GATE], col: gc, k: pulse * 0.5 + M.kick * 0.7 + M.snare * 0.5 });
      // The kick's shockwave runs away down the tunnel as a bright frame
      if (!reduced && M.kick > 0.05 && M.kickAge < 0.5) ni = frameAt(ni, -GATE - M.kickAge * 18, gc, M.kick * 1.3, 0.03);
      // The key lift sends a glow sweeping down the tunnel
      let sweepZ = 0, sweepK = 0;
      if (!reduced && M.sweepAge < 1.1) {
        sweepZ = -GATE - M.sweepAge * 40; sweepK = (1 - M.sweepAge / 1.1) * 0.8;
        ni = frameAt(ni, sweepZ, [1, 0.9, 0.75], sweepK * 1.4, 0.04);
      }
      // Run mode: faint lanes down the edited surface, and the runner at the gate
      if (view.edit && view.runAmt > 0.05) {
        const E = view.edit, color = ROLE_COLOR[E.role];
        const guideLen = FAR - GATE + 1;
        const pitched = E.role !== 'drums' && !E.pieces;
        E.lanes.forEach((lane, i) => {
          const [c, , rot] = placeNote(E.role, { p: lane, v: 0.5 }, -GATE + 1, guideLen, E);
          const k = (i === E.cursor ? 0.9 : pitched ? 0.22 : 0.4) * view.runAmt;
          if (ni < MAX_INST) { inst(ni, c, [pitched ? 0.012 : 0.02, 0.012, guideLen], color, k, 0, 0, rot); ni++; }
        });
        const lane = E.lanes[E.cursor];
        const [c, sz, rot] = placeNote(E.role, { p: lane, v: 1 }, -GATE + 0.2, 0.4, E);
        const glow = (1.6 + Math.sin(view.time * 8) * 0.4) * view.runAmt;
        if (ni < MAX_INST) { inst(ni, c, [sz[0] * 1.25, sz[1] * 1.6, 0.4], [1, 0.95, 0.85], glow, 0, 0, rot); ni++; }
        lights.push({ pos: [c[0], c[1], -GATE], col: color, k: 1.2 * view.runAmt });
      }
      // Section starts pass by as bright frames in the section's color
      (view.marks || []).forEach(m => {
        const rel = (((m.beat - vp) % loop) + loop) % loop;
        const z = -(GATE + rel * DEPTH);
        if (z < -FAR || rel <= 0.05) return;
        ni = frameAt(ni, z, m.color, 0.9, 0.05);
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
        s.life += dt;
        if (s.life > s.max) { sparks.splice(i, 1); continue; }
        s.v[1] -= 2.4 * dt;
        s.p[0] += s.v[0] * dt; s.p[1] += s.v[1] * dt; s.p[2] += s.v[2] * dt;
        // keep sparks inside the tunnel (its corners lie on an ellipse)
        const e = Math.hypot(s.p[0] / RX, s.p[1] / RY) / K;
        if (e > 0.72) { s.p[0] *= 0.72 / e; s.p[1] *= 0.72 / e; s.v[0] *= -0.4; s.v[1] *= -0.4; }
      }
      sparks.forEach((s, i) => {
        const o = i * SPK;
        sparkData[o] = s.p[0]; sparkData[o + 1] = s.p[1]; sparkData[o + 2] = s.p[2];
        sparkData[o + 3] = s.c[0]; sparkData[o + 4] = s.c[1]; sparkData[o + 5] = s.c[2]; sparkData[o + 6] = 1 - s.life / s.max;
        sparkData[o + 7] = s.size;
      });

      // The mood of the filter: darker thickens and warms the fog, thinner clears and cools it
      const f = M.filter;
      const dens = 0.045 * (f < 0 ? 1 - f * 1.8 : 1 - f * 0.55) * (1 + 0.35 * M.sec[3]);
      const dn = dens / 0.045;
      if (f < 0) { const a = -f; GRADE[0] = 1 - 0.18 * a; GRADE[1] = 1 - 0.36 * a; GRADE[2] = 1 - 0.55 * a; }
      else { GRADE[0] = 1 - 0.12 * f; GRADE[1] = 1 + 0.04 * f; GRADE[2] = 1 + 0.24 * f; }
      const bright = (f < 0 ? 1 + f * 0.3 : 1 + f * 0.2) * (1 + 0.12 * M.key) * (1 - 0.14 * M.stop) * (0.93 + 0.07 * M.sec[1]);
      GRADE[0] *= 1 - 0.1 * M.stop; GRADE[2] *= 1 + 0.06 * M.stop;
      const patAmt = 1 - 0.5 * amt;

      // ---- Scene into the multisampled HDR buffer ----
      gl.bindFramebuffer(gl.FRAMEBUFFER, ms.fb);
      gl.viewport(0, 0, T.scene.w, T.scene.h);
      gl.clearColor(fog[0], fog[1], fog[2], 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST); gl.depthMask(true); gl.disable(gl.BLEND); gl.disable(gl.CULL_FACE);

      gl.useProgram(tunnelProg.p);
      const tu = tunnelProg.u;
      gl.uniformMatrix4fv(tu.uVP, false, VP);
      gl.uniform3fv(tu.uCam, eye);
      gl.uniform3fv(tu.uTint, tint);
      gl.uniform3fv(tu.uFog, fog);
      gl.uniform1f(tu.uK, K);
      gl.uniform1f(tu.uPos, vp % 64);
      gl.uniform1f(tu.uPulse, pulse * (1 - M.stop));
      gl.uniform1f(tu.uKick, M.kick * 0.6);   // felt, not blinding: bright worlds (country) washed out at full strength
      gl.uniform1f(tu.uKickAge, M.kickAge);
      gl.uniform1f(tu.uSnare, M.snare);
      gl.uniform1f(tu.uScroll, M.scroll);
      gl.uniform1f(tu.uTime, M.decorTime);
      gl.uniform1f(tu.uDens, dens);
      gl.uniform1f(tu.uWorld, M.world);
      gl.uniform1f(tu.uPat, patAmt);
      gl.uniform1f(tu.uSweepZ, sweepZ);
      gl.uniform1f(tu.uSweepK, sweepK);
      gl.uniform4f(tu.uSec, M.sec[1], M.sec[2], M.sec[3], 0);
      gl.uniform1i(tu.uGenre, gid);
      gl.uniform1i(tu.uNL, nl);
      gl.uniform4fv(tu.uLP, LP);
      gl.uniform4fv(tu.uLC, LC);
      gl.bindVertexArray(tunnelVao);
      gl.drawArrays(gl.TRIANGLES, 0, tunnelCount);

      // Ambient particles (the genre's, and the stars of a break), then notes, ribbons, gate and sparks glow additively
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.depthMask(false); gl.disable(gl.DEPTH_TEST);
      const pu = partProg.u, voidAmt = M.sec[2];
      gl.useProgram(partProg.p);
      gl.uniformMatrix4fv(pu.uVP, false, VP);
      gl.uniform1f(pu.uScrollZ, M.scroll);
      gl.uniform1f(pu.uTimeP, M.decorTime);
      gl.uniform1f(pu.uK, K);
      gl.uniform1f(pu.uSize, T.scene.h * 0.011);
      gl.bindVertexArray(partVao);
      const kind = gid >= 0 ? GENRE_PARTICLES[gid] : 0;
      if (kind && voidAmt < 0.98) {
        gl.uniform1f(pu.uMode, kind);
        gl.uniform1f(pu.uAmt, (1 - voidAmt) * M.world * (kind === 2 ? 1 : 0.5));
        gl.uniform1f(pu.uLine, kind === 2 ? 1 : 0);
        gl.drawArrays(kind === 2 ? gl.LINES : gl.POINTS, 0, NPART * 2);
      }
      if (voidAmt > 0.02) {
        gl.uniform1f(pu.uMode, 6);
        gl.uniform1f(pu.uAmt, voidAmt * 0.6);
        gl.uniform1f(pu.uLine, 0);
        gl.drawArrays(gl.POINTS, 0, NPART * 2);
      }
      gl.enable(gl.DEPTH_TEST);

      gl.enable(gl.CULL_FACE);
      gl.useProgram(noteProg.p);
      gl.uniformMatrix4fv(noteProg.u.uVP, false, VP);
      gl.uniform3fv(noteProg.u.uCam, eye);
      gl.uniform1f(noteProg.u.uTime, view.time);
      gl.uniform1f(noteProg.u.uTwinkle, reduced ? 0.3 : 1);
      gl.uniform1f(noteProg.u.uDensN, dn);
      gl.uniform1f(noteProg.u.uThrob, reduced ? 0 : 1 - M.stop);
      gl.uniform1f(noteProg.u.uPhase, vp * Math.PI * 2);
      gl.bindBuffer(gl.ARRAY_BUFFER, instBuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, instData, 0, ni * INST);
      gl.bindVertexArray(noteVao);
      gl.drawArraysInstanced(gl.TRIANGLES, 0, 36, ni);
      gl.disable(gl.CULL_FACE);

      if (ribN) {
        gl.useProgram(ribbonProg.p);
        gl.uniformMatrix4fv(ribbonProg.u.uVP, false, VP);
        gl.uniform3fv(ribbonProg.u.uCam, eye);
        gl.uniform1f(ribbonProg.u.uTime, view.time);
        gl.uniform1f(ribbonProg.u.uDensN, dn);
        gl.bindBuffer(gl.ARRAY_BUFFER, ribBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, ribData, 0, ribN * RIB);
        gl.bindVertexArray(ribVao);
        gl.drawArrays(gl.TRIANGLES, 0, ribN);
      }

      if (sparks.length) {
        gl.useProgram(sparkProg.p);
        gl.uniformMatrix4fv(sparkProg.u.uVP, false, VP);
        gl.uniform1f(sparkProg.u.uScale, T.scene.h * 0.012);
        gl.bindBuffer(gl.ARRAY_BUFFER, sparkBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, sparkData, 0, sparks.length * SPK);
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
        gl.uniform1f(compProg.u.uHue, 0.5 * M.key);
        gl.uniform1f(compProg.u.uBright, bright);
        gl.uniform3fv(compProg.u.uGrade, GRADE);
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

    // --- PICKING (run mode) ---
    let lastVP = null;
    function invert(m) {
      const inv = new Array(16);
      inv[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] + m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
      inv[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] - m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
      inv[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] + m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
      inv[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] - m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
      inv[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] - m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
      inv[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] + m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
      inv[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] - m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
      inv[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] + m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
      inv[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] + m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
      inv[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] - m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
      inv[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] + m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
      inv[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] - m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
      inv[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] - m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
      inv[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] + m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
      inv[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] - m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
      inv[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] + m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];
      const det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];
      return det ? inv.map(v => v / det) : null;
    }
    // Where a click lands on a role's surface: { x, y, z, rel: beats ahead of the gate } or null
    function pick(clientX, clientY, role) {
      if (!lastVP) return null;
      const inv = invert(lastVP);
      if (!inv) return null;
      const r = canvas.getBoundingClientRect();
      const nx = (clientX - r.left) / r.width * 2 - 1, ny = 1 - (clientY - r.top) / r.height * 2;
      const un = (x, y, z) => {
        const o = [0, 1, 2, 3].map(i => inv[i] * x + inv[4 + i] * y + inv[8 + i] * z + inv[12 + i]);
        return [o[0] / o[3], o[1] / o[3], o[2] / o[3]];
      };
      const a = un(nx, ny, -1), b = un(nx, ny, 1);
      const d = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      const F = faces[sides.indexOf(role)];
      if (!F) return null;
      // The side's plane, lifted to where notes sit: (P - Q) . n = 0
      const Q = [F.c[0] * K + F.n[0] * 0.06, F.c[1] * K + F.n[1] * 0.06];
      const denom = d[0] * F.n[0] + d[1] * F.n[1];
      if (Math.abs(denom) < 1e-6) return null;
      const t = ((Q[0] - a[0]) * F.n[0] + (Q[1] - a[1]) * F.n[1]) / denom;
      if (t < 0) return null;
      const P = [a[0] + d[0] * t, a[1] + d[1] * t, a[2] + d[2] * t];
      if (P[2] > -0.3) return null;
      return { x: P[0], y: P[1], z: P[2], rel: (-P[2] - GATE) / DEPTH };
    }
    // The pitch (or drum) a surface coordinate falls on, matching placeNote
    function laneAt(role, point, lanes, spec) {
      let best = 0, bd = Infinity;
      lanes.forEach((lane, i) => {
        const [c] = placeNote(role, { p: lane, v: 1 }, -GATE, 0, spec);
        const dist = Math.hypot(c[0] - point.x, c[1] - point.y);
        if (dist < bd) { bd = dist; best = i; }
      });
      return best;
    }

    return { render, reportFrame, pick, laneAt };
  };
})();

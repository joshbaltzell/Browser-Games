// Tic-Tac-Toe: Infinity & Beyond
// Night Ocean — a WebGL 2 sea behind the board
//
// The board stays the game's own 2D canvas, drawn on top. Every frame that canvas is
// copied into a texture and treated as a light hanging upright over the water, so the
// reflections always show exactly what is on the board, in every mode.
// If WebGL 2 isn't available this file removes its canvas and the game keeps its old look.

(function() {
  const sea = document.getElementById('ocean');
  const gl = sea && sea.getContext('webgl2', { antialias: false, alpha: false });
  if (!gl) {
    if (sea) sea.remove();
    return;
  }

  // --- SHADERS ---
  const VERTEX_SRC = `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

  const FRAGMENT_SRC = `#version 300 es
precision highp float;
out vec4 outColor;

uniform vec2 uRes;
uniform float uTime;
uniform float uFade;       // 0 = black, 1 = fully faded in
uniform float uCamH;       // camera height above the water
uniform float uShift;      // where the horizon sits on screen (lens shift)
uniform float uHasBoard;   // 0 in the lobby, 1 while a game is on screen
uniform float uIgnite;     // board brightness, flickers when a game starts
uniform vec3 uBoardC;      // board center in world space
uniform vec2 uBoardHalf;   // board half-width and half-height in world units
uniform sampler2D uBoard;  // the game canvas, premultiplied

const float FOCAL = 1.3;
const float DEPTH = 0.75;
const vec3 ZENITH = vec3(0.0006, 0.0009, 0.003);
const vec3 HORIZON = vec3(0.016, 0.022, 0.048);

// Ocean height field: summed exp(sin) waves, each one dragging the next
vec2 wavedx(vec2 p, vec2 d, float f, float ts) {
  float x = dot(d, p) * f + ts;
  float w = exp(sin(x) - 1.0);
  return vec2(w, -w * cos(x));
}
float waves(vec2 p, int iters) {
  p *= 0.42;
  float phase = length(p) * 0.1;
  float it = 0.0, f = 1.0, tm = 2.0, wt = 1.0, s = 0.0, ws = 0.0;
  for (int i = 0; i < iters; i++) {
    vec2 d = vec2(sin(it), cos(it));
    vec2 r = wavedx(p, d, f, uTime * 0.45 * tm + phase);
    p += d * r.y * wt * 0.38;
    s += r.x * wt;
    ws += wt;
    wt = mix(wt, 0.0, 0.2);
    f *= 1.18;
    tm *= 1.07;
    it += 1232.399963;
  }
  return s / ws;
}
float marchWater(vec3 ro, vec3 a, vec3 b) {
  vec3 pos = a;
  vec3 dir = normalize(b - a);
  for (int i = 0; i < 56; i++) {
    float h = waves(pos.xz, 10) * DEPTH - DEPTH;
    if (h + 0.01 > pos.y) return distance(pos, ro);
    pos += dir * (pos.y - h);
  }
  return distance(a, ro);
}
vec3 waterNormal(vec2 p, float e) {
  float H = waves(p, 30) * DEPTH;
  float hx = waves(p - vec2(e, 0.0), 30) * DEPTH;
  float hz = waves(p + vec2(0.0, e), 30) * DEPTH;
  vec3 a = vec3(p.x, H, p.y);
  return normalize(cross(a - vec3(p.x - e, hx, p.y), a - vec3(p.x, hz, p.y + e)));
}

// Sky: deep gradient, a faint galaxy band, twinkling stars
float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}
vec3 sky(vec3 d) {
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(HORIZON, ZENITH, pow(h, 0.35));
  float band = dot(d, normalize(vec3(0.55, 0.45, -0.7)));
  col += vec3(0.010, 0.010, 0.018) * exp(-band * band * 22.0) * smoothstep(0.0, 0.3, h);
  vec3 q = d * 240.0;
  float r = hash13(floor(q));
  if (r > 0.9962) {
    vec3 f = fract(q) - 0.5;
    float b = (r - 0.9962) / 0.0038;
    float tw = 0.65 + 0.35 * sin(uTime * (1.3 + b * 2.7) + r * 600.0);
    col += vec3(0.85, 0.92, 1.0) * smoothstep(0.3, 0.0, length(f)) * (0.25 + 2.2 * b * b) * tw * smoothstep(0.0, 0.07, d.y);
  }
  return col;
}

// The board as an emitter. q is board-local, -1..1, y up.
vec3 boardTexel(vec2 q, float lod) {
  vec2 uv = vec2(q.x * 0.5 + 0.5, 0.5 - q.y * 0.5);
  return textureLod(uBoard, uv, lod).rgb;
}
vec3 boardEmit(vec2 q) {
  vec2 e = abs(q);
  float m = max(e.x, e.y);
  vec3 col = vec3(0.0);
  if (m < 1.0) {
    float edge = smoothstep(1.0, 0.94, m); // same soft edge the CSS mask gives the canvas
    col += (pow(boardTexel(q, 0.0), vec3(2.2)) * 3.2 + boardTexel(q, 3.0) * 0.9) * edge;
  }
  float d = length(max(e - 1.0, 0.0));
  col += boardTexel(clamp(q, -1.0, 1.0), 6.0) * exp(-d * 3.0) * 0.5;
  return col;
}
vec3 boardLight(vec3 ro, vec3 rd) {
  // The board is an upright plane at z = uBoardC.z facing the camera
  if (rd.z >= -1e-4) return vec3(0.0);
  float t = (uBoardC.z - ro.z) / rd.z;
  if (t <= 0.0) return vec3(0.0);
  vec3 p = ro + rd * t - uBoardC;
  return boardEmit(p.xy / uBoardHalf);
}

vec3 shadeWater(vec3 p, vec3 n, vec3 rd, float dist, vec3 glow) {
  vec3 r = reflect(rd, n);
  r.y = abs(r.y);
  float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, -rd), 0.0), 5.0);
  vec3 refl = sky(r);
  if (uHasBoard > 0.5) refl += boardLight(p, r) * uIgnite;

  // The lit board also washes a soft pool of its color over the swells beneath it
  vec3 l = uBoardC - p;
  float d2 = dot(l, l);
  float diff = max(dot(n, l * inversesqrt(d2)), 0.0);
  vec3 scatter = glow * diff / (1.0 + d2 * 0.22) * 0.12;
  float crest = clamp((p.y + DEPTH) / DEPTH, 0.0, 1.0);
  scatter += glow * pow(crest, 4.0) / (1.0 + d2 * 0.3) * 0.03;

  vec3 deep = vec3(0.0015, 0.003, 0.007);
  vec3 col = mix(deep + scatter, refl, fres);
  float fog = 1.0 - exp(-dist * 0.011);
  return mix(col, HORIZON, fog);
}

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec2 sp = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  vec3 ro = vec3(0.0, uCamH, 0.0);
  vec3 rd = normalize(vec3(sp.x, sp.y - uShift, -FOCAL));

  // Average color of everything lit on the board (the smallest mip level)
  vec3 glow = textureLod(uBoard, vec2(0.5), 12.0).rgb * 20.0 * uHasBoard * uIgnite;

  vec3 col;
  if (rd.y < 0.0) {
    float tTop = -ro.y / rd.y;
    float tBot = (-DEPTH - ro.y) / rd.y;
    float t = marchWater(ro, ro + rd * tTop, ro + rd * tBot);
    vec3 p = ro + rd * t;
    vec3 n = waterNormal(p.xz, 0.02);
    n = normalize(mix(n, vec3(0.0, 1.0, 0.0), 0.8 * min(1.0, sqrt(t * 0.01) * 1.1)));
    col = shadeWater(p, n, rd, t, glow);
  } else {
    col = sky(rd);
  }

  col = aces(col * 1.1);
  col = pow(col, vec3(1.0 / 2.2));
  vec2 v = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - dot(v, v) * 0.35;
  outColor = vec4(col * uFade, 1.0);
}`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('Night ocean shader failed:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, VERTEX_SRC);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC);
  const prog = gl.createProgram();
  if (vs && fs) {
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
  }
  if (!vs || !fs || !gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    sea.remove();
    return;
  }
  gl.useProgram(prog);

  // From here on the ocean is running; style.css switches the page over with this class
  document.documentElement.classList.add('ocean');

  // One triangle that covers the screen
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const U = {};
  ['uRes', 'uTime', 'uFade', 'uCamH', 'uShift', 'uHasBoard', 'uIgnite', 'uBoardC', 'uBoardHalf', 'uBoard']
    .forEach(n => { U[n] = gl.getUniformLocation(prog, n); });

  // The board texture is filled from a small copy of the game canvas; reflections are blurry anyway
  const boardTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, boardTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
  gl.uniform1i(U.uBoard, 0);

  const boardCanvas = document.getElementById('game-canvas');
  const copy = document.createElement('canvas');
  const copyCtx = copy.getContext('2d');
  const COPY_WIDTH = 512;

  // --- LAYOUT ---
  // The camera looks level at the horizon. Instead of tilting it, the horizon is moved with a lens
  // shift so the board can stay upright and still line up exactly with the 2D canvas on screen.
  // The water line sits just under the board's bottom edge, so its reflection lands right below it.
  const BOARD_DEPTH = 40;          // how far away the board hangs, in world units
  const FOCAL = 1.3;               // must match the shader
  const CAM_HEIGHT = 1.5;          // camera height above the water
  const BOARD_GAP = 0.5;           // air between the board's bottom edge and the water line, in world units

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const t0 = performance.now();
  let horizonY = window.innerHeight * 0.58;
  let igniteStart = -1;

  function igniteLevel(now) {
    if (igniteStart < 0) return 1;
    const t = (now - igniteStart) / 1000;
    if (reduced || t > 1.0) {
      igniteStart = -1;
      boardCanvas.style.opacity = '';
      return 1;
    }
    const flick = [1, 0, 0.6, 0, 1, 0.3, 1, 1][Math.floor(t * 8)];
    const level = Math.min(1, t * 1.6) * flick;
    boardCanvas.style.opacity = String(level);
    return level;
  }

  // --- RESOLUTION ---
  // The sea is the most expensive thing on the page, so it renders below screen resolution
  // and backs off further if frames run long.
  let scale = Math.min(window.devicePixelRatio || 1, 1);
  if (window.innerWidth * window.innerHeight > 1.5e6) scale *= 0.75;
  let frames = 0;
  let frameTime = 0;
  let last = performance.now();

  function resize() {
    const w = Math.max(1, Math.floor(window.innerWidth * scale));
    const h = Math.max(1, Math.floor(window.innerHeight * scale));
    if (sea.width !== w || sea.height !== h) {
      sea.width = w;
      sea.height = h;
    }
  }
  window.addEventListener('resize', resize);
  resize();

  function frame(now) {
    const dt = now - last;
    last = now;
    if (dt < 250) {
      frameTime += dt;
      frames++;
    }
    if (frames === 40) {
      if (frameTime / frames > 24 && scale > 0.4) {
        scale = Math.max(0.4, scale * 0.8);
        resize();
      }
      frames = 0;
      frameTime = 0;
    }

    const W = window.innerWidth;
    const H = window.innerHeight;
    const M = Math.min(W, H);
    const rect = boardCanvas.getBoundingClientRect();
    const hasBoard = boardCanvas.offsetParent !== null && rect.width > 0 && rect.height > 0;

    // Ease the horizon between the lobby and the board (and while big boards pan) so nothing jumps
    const k = BOARD_DEPTH / FOCAL;   // screen units to world units at the board's depth
    const boardBottom = window.NightOcean.boardBottom;
    const targetHorizon = hasBoard
      ? rect.top + (boardBottom == null ? rect.height : boardBottom) + BOARD_GAP / k * M
      : H * 0.58;
    horizonY += (Math.min(H * 0.85, Math.max(H * 0.2, targetHorizon)) - horizonY) * 0.08;
    const shift = (H / 2 - horizonY) / M;

    let center = [0, 2, -BOARD_DEPTH];
    let half = [1, 1];
    if (hasBoard) {
      const left = (rect.left - W / 2) / M;
      const right = (rect.right - W / 2) / M;
      const top = (H / 2 - rect.top) / M - shift;
      const bottom = (H / 2 - rect.bottom) / M - shift;
      center = [(left + right) / 2 * k, CAM_HEIGHT + (top + bottom) / 2 * k, -BOARD_DEPTH];
      half = [(right - left) / 2 * k, (top - bottom) / 2 * k];

      copy.width = COPY_WIDTH;
      copy.height = Math.max(1, Math.round(COPY_WIDTH * rect.height / rect.width));
      copyCtx.drawImage(boardCanvas, 0, 0, copy.width, copy.height);
      gl.bindTexture(gl.TEXTURE_2D, boardTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, copy);
      gl.generateMipmap(gl.TEXTURE_2D);
    }

    const t = (now - t0) / 1000;
    gl.viewport(0, 0, sea.width, sea.height);
    gl.uniform2f(U.uRes, sea.width, sea.height);
    gl.uniform1f(U.uTime, t % 3600);
    gl.uniform1f(U.uFade, reduced ? 1 : Math.min(1, Math.pow(t / 2.5, 1.6)));
    gl.uniform1f(U.uCamH, CAM_HEIGHT);
    gl.uniform1f(U.uShift, shift);
    gl.uniform1f(U.uHasBoard, hasBoard ? 1 : 0);
    gl.uniform1f(U.uIgnite, igniteLevel(now));
    gl.uniform3fv(U.uBoardC, center);
    gl.uniform2fv(U.uBoardHalf, half);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // --- HOOKS FOR game.js ---
  window.NightOcean = {
    // Share of the board area the playable canvas takes; the rest is open water for the reflections
    boardFraction: 0.78,
    // Bottom edge of the drawn board in canvas pixels, reported by game.js every frame
    boardBottom: null,
    // Flicker the board on like a neon sign
    ignite() { igniteStart = performance.now(); }
  };
})();

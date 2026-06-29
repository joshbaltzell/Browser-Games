'use strict';

// ═══════════════════════════════════════════════════════════════
//  Cartographer's Curse — Phase 1: Core Mechanic Prototype
//  Draw your dungeon, commit it, then survive inside your own lines.
//  Grey-box draft: legibility + feel over styling (styling is Phase 2).
// ═══════════════════════════════════════════════════════════════

// ---------- Canvas + fixed logical resolution ----------
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const W = 960, H = 600;
canvas.width = W;
canvas.height = H;

function fitCanvas() {
  const s = Math.min(window.innerWidth / W, window.innerHeight / H);
  canvas.style.width = Math.floor(W * s) + 'px';
  canvas.style.height = Math.floor(H * s) + 'px';
}
fitCanvas();
window.addEventListener('resize', fitCanvas);

// Convert a DOM mouse event into logical canvas coordinates.
function eventToLogical(e) {
  const r = canvas.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width * W;
  const y = (e.clientY - r.top) / r.height * H;
  return { x, y };
}

// ---------- Palette (hint of intended sepia; full style is Phase 2) ----------
const COLORS = {
  parchment: '#d8c49a',
  parchmentEdge: '#c2ac7e',
  ink: '#3a2a18',
  inkSoft: '#5a4528',
  inkFaint: 'rgba(58,42,24,0.35)',
  player: '#2f6b4f',
  enemyMelee: '#7a2b2b',
  enemyRanged: '#5a3a7a',
  proj: '#7a2b2b',
  stairs: '#1f4a6b',
  meter: '#4a6b2f',
  meterBg: 'rgba(58,42,24,0.18)',
  hpGood: '#4a6b2f',
  hpLow: '#a23b2b',
  panel: 'rgba(28,20,11,0.86)',
  text: '#e9dcc0',
  textDim: '#b7a079',
  accent: '#c98a3a'
};

// ---------- Audio (file://-safe, lazy, resumed on first gesture) ----------
let audioCtx = null;
let audioReady = false;
function unlockAudio() {
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    audioReady = true;
  } catch (err) { /* file:// safety: never throw */ }
}
function beep(freq, dur, type, vol) {
  if (!audioReady || !audioCtx) return;
  try {
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol || 0.18, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.1));
    osc.connect(g).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + (dur || 0.1) + 0.02);
  } catch (err) { /* ignore */ }
}
// Quill-scratch: short noisy click. Wax-seal: low thud. Hit/attack: blips.
function sfxScratch() { beep(180 + Math.random() * 120, 0.04, 'sawtooth', 0.05); }
function sfxCommit() { beep(110, 0.28, 'triangle', 0.25); beep(70, 0.34, 'sine', 0.2); }
function sfxAttack() { beep(330, 0.07, 'square', 0.12); }
function sfxHit() { beep(150, 0.12, 'square', 0.16); }
function sfxEnemyDie() { beep(90, 0.2, 'sawtooth', 0.16); }
function sfxShoot() { beep(420, 0.06, 'triangle', 0.08); }
function sfxStairs() { beep(523, 0.12, 'sine', 0.18); beep(784, 0.16, 'sine', 0.16); }
function sfxDeath() { beep(160, 0.5, 'sawtooth', 0.22); beep(80, 0.6, 'sine', 0.2); }

// ═══════════════════════════════════════════════════════════════
//  Game state model
// ═══════════════════════════════════════════════════════════════
const TITLE = 'TITLE', DRAW = 'DRAW', PLAY = 'PLAY', GAMEOVER = 'GAMEOVER';
let state = TITLE;

const PLAY_AREA = { x: 30, y: 60, w: W - 60, h: H - 90 }; // drawable / playable region

let strokes = [];        // [{points:[{x,y}], length}]
let curStroke = null;    // in-progress stroke during a drag
let drawing = false;
let inkMax = 1700;
let inkRemaining = inkMax;

let walls = [];          // [{x1,y1,x2,y2}] derived at commit
let player = null;       // {x,y,r,hp,maxHp,attackCd,hurtFlash}
let enemies = [];        // [{x,y,r,hp,type,...}]
let projectiles = [];    // [{x,y,vx,vy,r,life}]
let particles = [];      // grey-box dust/splatter
let stairs = null;       // {x,y,r}
let floor = 1;
let shake = 0;
let floorBanner = 0;     // ms remaining for floor-clear banner

const RESAMPLE_MIN = 6;  // px between sampled points
const WALL_THICK = 7;    // collision half-treats walls as having thickness

const BEST_KEY = 'cartographers-curse-best';
let bestDepth = 0;
try { bestDepth = parseInt(localStorage.getItem(BEST_KEY) || '0', 10) || 0; } catch (e) {}
function saveBest() {
  try { localStorage.setItem(BEST_KEY, String(bestDepth)); } catch (e) {}
}

// ---------- Input ----------
const keys = {};
let mouse = { x: W / 2, y: H / 2, down: false };

window.addEventListener('keydown', (e) => {
  unlockAudio();
  const k = e.key.toLowerCase();
  keys[k] = true;

  if (state === TITLE) {
    if (k === 'enter' || k === ' ') { startRun(); }
    return;
  }
  if (state === GAMEOVER) {
    if (k === 'enter' || k === ' ') { resetToTitle(); }
    return;
  }
  if (state === DRAW) {
    if (k === 'z' || k === 'backspace') { undoStroke(); e.preventDefault(); }
    else if (k === 'enter') { commitMap(); }
    else if (k === 'd' && e.shiftKey) { /* reserved */ }
  }
  if (state === PLAY) {
    if (k === ' ') { tryAttack(); e.preventDefault(); }
  }
  // DEBUG shape test: press 'L' for L-bend preset, 'B' for blob preset (DRAW state)
  if (DEBUG && state === DRAW) {
    if (k === 'l') loadShapeTest('lbend');
    if (k === 'b') loadShapeTest('blob');
  }
});
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });

canvas.addEventListener('mousemove', (e) => {
  const p = eventToLogical(e);
  mouse.x = p.x; mouse.y = p.y;
  if (state === DRAW && drawing) appendStrokePoint(p);
});

canvas.addEventListener('mousedown', (e) => {
  unlockAudio();
  const p = eventToLogical(e);
  mouse.x = p.x; mouse.y = p.y; mouse.down = true;

  if (state === TITLE) { startRun(); return; }
  if (state === GAMEOVER) { resetToTitle(); return; }
  if (state === DRAW) { beginStroke(p); }
  if (state === PLAY) { tryAttack(); }
});
window.addEventListener('mouseup', () => {
  mouse.down = false;
  if (state === DRAW) endStroke();
});

// ═══════════════════════════════════════════════════════════════
//  DRAW state — freehand wall drawing with an ink budget
// ═══════════════════════════════════════════════════════════════
function inArea(p) {
  return p.x >= PLAY_AREA.x && p.x <= PLAY_AREA.x + PLAY_AREA.w &&
         p.y >= PLAY_AREA.y && p.y <= PLAY_AREA.y + PLAY_AREA.h;
}
function clampToArea(p) {
  return {
    x: Math.max(PLAY_AREA.x, Math.min(PLAY_AREA.x + PLAY_AREA.w, p.x)),
    y: Math.max(PLAY_AREA.y, Math.min(PLAY_AREA.y + PLAY_AREA.h, p.y))
  };
}

function beginStroke(p) {
  if (inkRemaining <= 0) return;
  const cp = clampToArea(p);
  curStroke = { points: [cp], length: 0 };
  drawing = true;
}

function appendStrokePoint(p) {
  if (!curStroke) return;
  const cp = clampToArea(p);
  const last = curStroke.points[curStroke.points.length - 1];
  const d = Math.hypot(cp.x - last.x, cp.y - last.y);
  if (d < RESAMPLE_MIN) return;
  if (inkRemaining <= 0) return; // out of ink: block further drawing
  // Only spend as much ink as we have; if segment exceeds remaining, stop there.
  let segLen = d;
  if (segLen > inkRemaining) {
    // place a partial point along the direction up to remaining ink
    const t = inkRemaining / d;
    const px = last.x + (cp.x - last.x) * t;
    const py = last.y + (cp.y - last.y) * t;
    curStroke.points.push({ x: px, y: py });
    curStroke.length += inkRemaining;
    inkRemaining = 0;
    return;
  }
  curStroke.points.push(cp);
  curStroke.length += segLen;
  inkRemaining -= segLen;
  if (Math.random() < 0.5) sfxScratch();
}

function endStroke() {
  drawing = false;
  if (curStroke && curStroke.points.length >= 2) {
    strokes.push(curStroke);
  } else if (curStroke) {
    // tiny tap with no length: refund nothing meaningful, discard
    inkRemaining += curStroke.length;
  }
  curStroke = null;
}

function undoStroke() {
  if (strokes.length === 0) return;
  const s = strokes.pop();
  inkRemaining = Math.min(inkMax, inkRemaining + s.length);
  sfxScratch();
}

// ═══════════════════════════════════════════════════════════════
//  COMMIT — convert strokes into wall segments, place entities
// ═══════════════════════════════════════════════════════════════
function strokesToWalls() {
  const segs = [];
  for (const s of strokes) {
    for (let i = 0; i < s.points.length - 1; i++) {
      const a = s.points[i], b = s.points[i + 1];
      segs.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
  }
  return segs;
}

// Distance from point to a segment.
function pointSegDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  let t = len2 === 0 ? 0 : ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx, cy = y1 + t * dy;
  return Math.hypot(px - cx, py - cy);
}

// Is a circle of radius r at (x,y) clear of all walls and inside the area?
function isOpen(x, y, r) {
  if (x - r < PLAY_AREA.x || x + r > PLAY_AREA.x + PLAY_AREA.w) return false;
  if (y - r < PLAY_AREA.y || y + r > PLAY_AREA.y + PLAY_AREA.h) return false;
  for (const w of walls) {
    if (pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2) < r + WALL_THICK) return false;
  }
  return true;
}

// Segment-segment intersection (for line-of-sight).
function segIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const d = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
  if (Math.abs(d) < 1e-9) return false;
  const t = ((cx - ax) * (dy - cy) - (cy - ay) * (dx - cx)) / d;
  const u = ((cx - ax) * (by - ay) - (cy - ay) * (bx - ax)) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

// Clear line of sight between two points (no wall crosses the segment)?
function hasLOS(ax, ay, bx, by) {
  for (const w of walls) {
    if (segIntersect(ax, ay, bx, by, w.x1, w.y1, w.x2, w.y2)) return false;
  }
  return true;
}

// Find an open point, preferring near a target / far from a target.
function findOpenPoint(r, prefer) {
  let best = null, bestScore = -Infinity;
  for (let i = 0; i < 400; i++) {
    const x = PLAY_AREA.x + r + Math.random() * (PLAY_AREA.w - 2 * r);
    const y = PLAY_AREA.y + r + Math.random() * (PLAY_AREA.h - 2 * r);
    if (!isOpen(x, y, r)) continue;
    let score = Math.random();
    if (prefer && prefer.farFrom) {
      score = Math.hypot(x - prefer.farFrom.x, y - prefer.farFrom.y);
    } else if (prefer && prefer.nearWall) {
      // favor points close to (but clear of) a wall — better cover potential
      let nearest = Infinity;
      for (const w of walls) {
        nearest = Math.min(nearest, pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2));
      }
      score = -Math.abs(nearest - (r + WALL_THICK + 14));
    }
    if (score > bestScore) { bestScore = score; best = { x, y }; }
  }
  return best;
}

function spawnEnemy(x, y, type) {
  if (type === 'ranged') {
    enemies.push({ x, y, r: 11, hp: 2, maxHp: 2, type: 'ranged',
      shootCd: 0.8 + Math.random() * 0.6, range: 460, speed: 38, hurtFlash: 0 });
  } else {
    enemies.push({ x, y, r: 12, hp: 3, maxHp: 3, type: 'melee',
      speed: 78, hurtFlash: 0, touchCd: 0 });
  }
}

function commitMap() {
  walls = strokesToWalls();
  if (walls.length === 0) {
    // need at least some geometry; nudge the player
    floorBanner = 1200;
    bannerText = 'Draw at least one wall first';
    return;
  }
  // Player spawn: open point near a wall cluster (cover nearby).
  let spawn = findOpenPoint(12, { nearWall: true }) || findOpenPoint(12);
  if (!spawn) spawn = { x: PLAY_AREA.x + 40, y: PLAY_AREA.y + 40 };
  player = { x: spawn.x, y: spawn.y, r: 9, hp: 5, maxHp: 5,
    attackCd: 0, hurtFlash: 0, facing: { x: 1, y: 0 }, invuln: 0 };

  // Stairs: farthest open point from spawn.
  let st = findOpenPoint(12, { farFrom: spawn }) || findOpenPoint(12);
  if (!st) st = { x: PLAY_AREA.x + PLAY_AREA.w - 40, y: PLAY_AREA.y + PLAY_AREA.h - 40 };
  stairs = { x: st.x, y: st.y, r: 16 };

  // Enemies: 2–3, scaling slightly with floor. At least one ranged.
  enemies = [];
  projectiles = [];
  const count = Math.min(2 + Math.floor(floor / 2), 5);
  for (let i = 0; i < count; i++) {
    const type = (i === 0) ? 'ranged' : (Math.random() < 0.5 ? 'ranged' : 'melee');
    let ep = findOpenPoint(13, { farFrom: spawn });
    // try to place where it can be evaded — just needs to be open + not on top of player
    if (!ep || Math.hypot(ep.x - spawn.x, ep.y - spawn.y) < 120) {
      ep = findOpenPoint(13) || { x: stairs.x, y: stairs.y };
    }
    spawnEnemy(ep.x, ep.y, type);
  }

  sfxCommit();
  burst(W / 2, H / 2, 24, COLORS.ink);
  shake = 8;
  state = PLAY;
}

// ═══════════════════════════════════════════════════════════════
//  PLAY state
// ═══════════════════════════════════════════════════════════════
// Move a circle, blocking against walls (axis-separated for sliding).
function moveCircle(ent, dx, dy) {
  // try X
  if (dx !== 0) {
    const nx = ent.x + dx;
    if (collideWalls(nx, ent.y, ent.r) === false) ent.x = nx;
  }
  if (dy !== 0) {
    const ny = ent.y + dy;
    if (collideWalls(ent.x, ny, ent.r) === false) ent.y = ny;
  }
  // clamp to area
  ent.x = Math.max(PLAY_AREA.x + ent.r, Math.min(PLAY_AREA.x + PLAY_AREA.w - ent.r, ent.x));
  ent.y = Math.max(PLAY_AREA.y + ent.r, Math.min(PLAY_AREA.y + PLAY_AREA.h - ent.r, ent.y));
}
function collideWalls(x, y, r) {
  for (const w of walls) {
    if (pointSegDist(x, y, w.x1, w.y1, w.x2, w.y2) < r + WALL_THICK) return true;
  }
  return false;
}

function tryAttack() {
  if (!player || player.attackCd > 0) return;
  player.attackCd = 0.35;
  sfxAttack();
  // melee arc: hit enemies within reach in facing direction (or any within radius)
  const reach = 46;
  for (const e of enemies) {
    const d = Math.hypot(e.x - player.x, e.y - player.y);
    if (d < reach + e.r) {
      e.hp -= 1;
      e.hurtFlash = 0.15;
      burst(e.x, e.y, 8, COLORS.enemyMelee);
      sfxHit();
    }
  }
  player.attackAnim = 0.18;
}

function updatePlay(dt) {
  // ----- player movement -----
  let mx = 0, my = 0;
  if (keys['w'] || keys['arrowup']) my -= 1;
  if (keys['s'] || keys['arrowdown']) my += 1;
  if (keys['a'] || keys['arrowleft']) mx -= 1;
  if (keys['d'] || keys['arrowright']) mx += 1;
  if (mx !== 0 || my !== 0) {
    const m = Math.hypot(mx, my);
    mx /= m; my /= m;
    player.facing = { x: mx, y: my };
    const spd = 165 * dt;
    moveCircle(player, mx * spd, my * spd);
  }
  if (player.attackCd > 0) player.attackCd -= dt;
  if (player.attackAnim > 0) player.attackAnim -= dt;
  if (player.hurtFlash > 0) player.hurtFlash -= dt;
  if (player.invuln > 0) player.invuln -= dt;

  // ----- enemies -----
  for (const e of enemies) {
    if (e.hurtFlash > 0) e.hurtFlash -= dt;
    const dx = player.x - e.x, dy = player.y - e.y;
    const dist = Math.hypot(dx, dy);
    const los = hasLOS(e.x, e.y, player.x, player.y);

    if (e.type === 'melee') {
      // seek the player; if blocked, try to slide along walls (axis separation handles it)
      if (dist > 0.001) {
        const spd = e.speed * dt;
        moveCircle(e, dx / dist * spd, dy / dist * spd);
      }
      // touch damage
      if (dist < e.r + player.r + 2) {
        e.touchCd -= dt;
        if (e.touchCd <= 0) { damagePlayer(1); e.touchCd = 0.6; }
      }
    } else if (e.type === 'ranged') {
      // keep some distance; only act on LOS
      if (los) {
        // strafe: maintain range
        if (dist < e.range * 0.45) {
          moveCircle(e, -dx / dist * e.speed * dt, -dy / dist * e.speed * dt);
        }
        e.shootCd -= dt;
        if (e.shootCd <= 0 && dist < e.range) {
          e.shootCd = 1.3;
          const sp = 240;
          projectiles.push({
            x: e.x, y: e.y,
            vx: dx / dist * sp, vy: dy / dist * sp,
            r: 4, life: 3
          });
          sfxShoot();
        }
      } else {
        // no LOS: wander slowly toward player to re-acquire
        if (dist > 0.001) moveCircle(e, dx / dist * e.speed * 0.5 * dt, dy / dist * e.speed * 0.5 * dt);
      }
    }
  }
  // remove dead enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].hp <= 0) {
      burst(enemies[i].x, enemies[i].y, 16, COLORS.ink);
      sfxEnemyDie();
      enemies.splice(i, 1);
      shake = Math.max(shake, 4);
    }
  }

  // ----- projectiles -----
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    const nx = p.x + p.vx * dt, ny = p.y + p.vy * dt;
    // wall collision = blocked (cover works)
    let hitWall = false;
    for (const w of walls) {
      if (segIntersect(p.x, p.y, nx, ny, w.x1, w.y1, w.x2, w.y2)) { hitWall = true; break; }
    }
    p.x = nx; p.y = ny;
    p.life -= dt;
    const outOfBounds = p.x < PLAY_AREA.x || p.x > PLAY_AREA.x + PLAY_AREA.w ||
                        p.y < PLAY_AREA.y || p.y > PLAY_AREA.y + PLAY_AREA.h;
    if (hitWall) {
      burst(p.x, p.y, 5, COLORS.inkSoft);
      projectiles.splice(i, 1);
      continue;
    }
    if (p.life <= 0 || outOfBounds) { projectiles.splice(i, 1); continue; }
    // hit player
    if (Math.hypot(p.x - player.x, p.y - player.y) < p.r + player.r) {
      damagePlayer(1);
      projectiles.splice(i, 1);
    }
  }

  // ----- stairs (floor clear) -----
  if (stairs && Math.hypot(player.x - stairs.x, player.y - stairs.y) < stairs.r + player.r) {
    nextFloor();
  }

  // ----- particles -----
  updateParticles(dt);
  if (shake > 0) shake = Math.max(0, shake - dt * 30);
  if (floorBanner > 0) floorBanner -= dt * 1000;
}

function damagePlayer(amount) {
  if (player.invuln > 0) return;
  player.hp -= amount;
  player.hurtFlash = 0.25;
  player.invuln = 0.5;
  shake = Math.max(shake, 7);
  sfxHit();
  burst(player.x, player.y, 10, COLORS.player);
  if (player.hp <= 0) {
    player.hp = 0;
    endRun();
  }
}

function nextFloor() {
  floor += 1;
  if (floor - 1 > bestDepth) { bestDepth = floor - 1; saveBest(); }
  sfxStairs();
  // fresh, smaller ink budget; back to DRAW
  inkMax = Math.max(700, 1700 - (floor - 1) * 180);
  inkRemaining = inkMax;
  strokes = [];
  walls = [];
  enemies = [];
  projectiles = [];
  curStroke = null;
  drawing = false;
  bannerText = 'Floor ' + floor + ' — draw your next dungeon';
  floorBanner = 1800;
  state = DRAW;
}

function endRun() {
  // depth reached = floors cleared = floor - 1 (current floor not cleared)
  const depth = floor - 1;
  if (depth > bestDepth) { bestDepth = depth; saveBest(); }
  lastDepth = depth;
  lastFloor = floor;
  sfxDeath();
  shake = 12;
  state = GAMEOVER;
}

let lastDepth = 0, lastFloor = 1, bannerText = '';

// ═══════════════════════════════════════════════════════════════
//  Particles (minimal grey-box juice)
// ═══════════════════════════════════════════════════════════════
function burst(x, y, n, color) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 30 + Math.random() * 120;
    particles.push({
      x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: 0.3 + Math.random() * 0.4, max: 0.7, r: 1 + Math.random() * 2.5,
      color: color || COLORS.ink
    });
  }
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vx *= 0.92; p.vy *= 0.92;
    p.life -= dt;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

// ═══════════════════════════════════════════════════════════════
//  Lifecycle transitions
// ═══════════════════════════════════════════════════════════════
function startRun() {
  unlockAudio();
  floor = 1;
  inkMax = 1700;
  inkRemaining = inkMax;
  strokes = [];
  walls = [];
  curStroke = null;
  drawing = false;
  enemies = [];
  projectiles = [];
  particles = [];
  player = null;
  stairs = null;
  bannerText = 'Floor 1 — draw your dungeon';
  floorBanner = 1800;
  state = DRAW;
}
function resetToTitle() {
  state = TITLE;
}

// ═══════════════════════════════════════════════════════════════
//  DEBUG shape test (CORE-06): preset L-bend vs open blob, equal ink
// ═══════════════════════════════════════════════════════════════
const DEBUG = true;
function loadShapeTest(kind) {
  strokes = [];
  inkMax = 1700;
  const cx = PLAY_AREA.x + PLAY_AREA.w / 2;
  const cy = PLAY_AREA.y + PLAY_AREA.h / 2;
  if (kind === 'lbend') {
    // An L-shaped wall providing a corner to break line-of-sight behind.
    strokes.push(makeStroke([
      { x: cx - 160, y: cy - 120 },
      { x: cx + 40, y: cy - 120 },
      { x: cx + 40, y: cy + 80 }
    ]));
    // a small cover nub
    strokes.push(makeStroke([
      { x: cx - 60, y: cy + 60 },
      { x: cx - 60, y: cy + 140 }
    ]));
  } else {
    // A big open rectangular "blob" outline — same ink, no interior cover.
    strokes.push(makeStroke([
      { x: cx - 160, y: cy - 120 },
      { x: cx + 160, y: cy - 120 },
      { x: cx + 160, y: cy + 120 },
      { x: cx - 160, y: cy + 120 },
      { x: cx - 160, y: cy - 120 }
    ]));
  }
  // recompute ink spent
  let spent = 0;
  for (const s of strokes) spent += s.length;
  inkRemaining = Math.max(0, inkMax - spent);
  bannerText = 'Shape test: ' + (kind === 'lbend' ? 'L-BEND (cover)' : 'OPEN BLOB') +
               '  — Enter to commit';
  floorBanner = 2500;
}
function makeStroke(pts) {
  let len = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    len += Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
  }
  return { points: pts.map(p => ({ x: p.x, y: p.y })), length: len };
}

// ═══════════════════════════════════════════════════════════════
//  Rendering
// ═══════════════════════════════════════════════════════════════
function clear() {
  ctx.fillStyle = COLORS.parchment;
  ctx.fillRect(0, 0, W, H);
}

function drawArea() {
  ctx.save();
  ctx.strokeStyle = COLORS.parchmentEdge;
  ctx.lineWidth = 2;
  ctx.strokeRect(PLAY_AREA.x, PLAY_AREA.y, PLAY_AREA.w, PLAY_AREA.h);
  ctx.restore();
}

function drawStrokeLine(pts, color, width) {
  if (pts.length < 2) {
    if (pts.length === 1) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(pts[0].x, pts[0].y, width / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    return;
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.stroke();
}

function drawAllStrokes() {
  for (const s of strokes) drawStrokeLine(s.points, COLORS.ink, WALL_THICK + 2);
  if (curStroke) drawStrokeLine(curStroke.points, COLORS.inkSoft, WALL_THICK + 2);
}

function drawInkMeter() {
  const x = PLAY_AREA.x, y = 24, w = 240, h = 16;
  ctx.fillStyle = COLORS.meterBg;
  ctx.fillRect(x, y, w, h);
  const frac = Math.max(0, inkRemaining / inkMax);
  ctx.fillStyle = COLORS.meter;
  ctx.fillRect(x, y, w * frac, h);
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
  ctx.fillStyle = COLORS.ink;
  ctx.font = '13px Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillText('INK ' + Math.ceil(inkRemaining), x + w + 12, y + 13);
  ctx.textAlign = 'right';
  ctx.fillText('Floor ' + floor, PLAY_AREA.x + PLAY_AREA.w, y + 13);
}

function drawHealth() {
  const x = PLAY_AREA.x, y = 24;
  ctx.font = '13px Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillStyle = COLORS.ink;
  ctx.fillText('HP', x, y + 13);
  for (let i = 0; i < player.maxHp; i++) {
    ctx.fillStyle = i < player.hp ? COLORS.hpGood : 'rgba(58,42,24,0.15)';
    ctx.beginPath();
    ctx.arc(x + 34 + i * 18, y + 6, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  ctx.textAlign = 'right';
  ctx.fillStyle = COLORS.ink;
  ctx.fillText('Floor ' + floor + '  ·  Enemies ' + enemies.length,
    PLAY_AREA.x + PLAY_AREA.w, y + 13);
}

function drawParticles() {
  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life / p.max);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawPlayEntities() {
  // stairs (exit) — drawn as a target ring
  if (stairs) {
    ctx.strokeStyle = COLORS.stairs;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(stairs.x, stairs.y, stairs.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = COLORS.stairs;
    ctx.font = '11px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('EXIT', stairs.x, stairs.y + 3);
  }

  // walls
  drawAllStrokes();

  // projectiles
  for (const p of projectiles) {
    ctx.fillStyle = COLORS.proj;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  // enemies
  for (const e of enemies) {
    const base = e.type === 'ranged' ? COLORS.enemyRanged : COLORS.enemyMelee;
    ctx.fillStyle = e.hurtFlash > 0 ? '#ffffff' : base;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // marker: ranged = ring, melee = X
    ctx.strokeStyle = COLORS.parchment;
    ctx.lineWidth = 1.5;
    if (e.type === 'ranged') {
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r * 0.45, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(e.x - 4, e.y - 4); ctx.lineTo(e.x + 4, e.y + 4);
      ctx.moveTo(e.x + 4, e.y - 4); ctx.lineTo(e.x - 4, e.y + 4);
      ctx.stroke();
    }
  }

  // player
  if (player) {
    // attack arc
    if (player.attackAnim > 0) {
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 3;
      ctx.globalAlpha = player.attackAnim / 0.18;
      ctx.beginPath();
      ctx.arc(player.x, player.y, 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = player.hurtFlash > 0 ? '#ffffff' : COLORS.player;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 2;
    ctx.stroke();
    // facing pin (surveyor's pin)
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(player.x + player.facing.x * 14, player.y + player.facing.y * 14);
    ctx.stroke();
  }
}

function drawBanner() {
  if (floorBanner > 0 && bannerText) {
    ctx.save();
    ctx.globalAlpha = Math.min(1, floorBanner / 400);
    ctx.fillStyle = COLORS.panel;
    const tw = ctx.measureText ? 0 : 0;
    ctx.font = '20px Georgia, serif';
    ctx.textAlign = 'center';
    const w = ctx.measureText(bannerText).width + 40;
    ctx.fillRect(W / 2 - w / 2, 70, w, 38);
    ctx.fillStyle = COLORS.text;
    ctx.fillText(bannerText, W / 2, 95);
    ctx.restore();
  }
}

function centerText(lines, opts) {
  opts = opts || {};
  ctx.textAlign = 'center';
  let y = opts.startY || H / 2;
  for (const ln of lines) {
    ctx.font = ln.font || '16px Georgia, serif';
    ctx.fillStyle = ln.color || COLORS.text;
    ctx.fillText(ln.text, W / 2, y);
    y += ln.gap || 28;
  }
}

function drawTitle() {
  clear();
  // panel
  ctx.fillStyle = COLORS.panel;
  ctx.fillRect(W / 2 - 320, H / 2 - 170, 640, 340);
  centerText([
    { text: "CARTOGRAPHER'S CURSE", font: 'bold 40px Georgia, serif', color: COLORS.accent, gap: 44 },
    { text: 'The dungeon does not exist until you draw it.', font: 'italic 18px Georgia, serif', color: COLORS.textDim, gap: 50 },
    { text: 'Hold the MOUSE to draw walls within your ink budget.', gap: 26 },
    { text: 'Press ENTER to commit your map — then survive inside it.', gap: 26 },
    { text: 'WASD / arrows move · SPACE or click attacks · Z undoes a stroke.', gap: 26 },
    { text: 'Reach the EXIT alive to descend. Walls are your cover and your cage.', gap: 42 },
    { text: 'Best depth: ' + bestDepth + (DEBUG ? '   (DRAW: L / B = shape test)' : ''), color: COLORS.accent, gap: 30 },
    { text: 'Click or press ENTER to begin', font: 'bold 18px Georgia, serif', color: COLORS.text }
  ], { startY: H / 2 - 120 });
}

function drawDrawState() {
  clear();
  drawArea();
  drawAllStrokes();
  drawInkMeter();
  drawParticles();
  // instructions one-liner
  ctx.fillStyle = COLORS.inkSoft;
  ctx.font = '14px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('Hold mouse to draw walls  ·  Z undo  ·  ENTER commit', W / 2, H - 12);
  drawBanner();
}

function drawPlayState() {
  ctx.save();
  if (shake > 0) {
    ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
  }
  clear();
  drawArea();
  drawPlayEntities();
  drawParticles();
  // hurt vignette
  if (player && player.hurtFlash > 0) {
    ctx.fillStyle = 'rgba(162,59,43,' + (player.hurtFlash * 0.6) + ')';
    ctx.fillRect(0, 0, W, H);
  }
  ctx.restore();
  drawHealth();
  // bottom hint
  ctx.fillStyle = COLORS.inkSoft;
  ctx.font = '13px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('WASD move  ·  SPACE / click attack  ·  reach the EXIT', W / 2, H - 12);
  drawBanner();
}

function drawGameOver() {
  clear();
  ctx.fillStyle = COLORS.panel;
  ctx.fillRect(W / 2 - 300, H / 2 - 140, 600, 280);
  const newBest = lastDepth >= bestDepth && lastDepth > 0;
  centerText([
    { text: 'THE CURSE TAKES YOU', font: 'bold 36px Georgia, serif', color: COLORS.hpLow, gap: 50 },
    { text: 'You fell on floor ' + lastFloor, font: '20px Georgia, serif', gap: 34 },
    { text: 'Depth reached: ' + lastDepth + (newBest ? '  (NEW BEST!)' : ''), color: COLORS.accent, gap: 34 },
    { text: 'Best depth: ' + bestDepth, color: COLORS.textDim, gap: 50 },
    { text: 'Click or press ENTER to draw again', font: 'bold 18px Georgia, serif', color: COLORS.text }
  ], { startY: H / 2 - 90 });
}

// ═══════════════════════════════════════════════════════════════
//  Main loop
// ═══════════════════════════════════════════════════════════════
let lastT = performance.now();
function frame(now) {
  let dt = (now - lastT) / 1000;
  lastT = now;
  if (dt > 0.05) dt = 0.05; // clamp big gaps

  if (state === PLAY) updatePlay(dt);
  else { updateParticles(dt); if (floorBanner > 0) floorBanner -= dt * 1000; }

  switch (state) {
    case TITLE: drawTitle(); break;
    case DRAW: drawDrawState(); break;
    case PLAY: drawPlayState(); break;
    case GAMEOVER: drawGameOver(); break;
  }

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

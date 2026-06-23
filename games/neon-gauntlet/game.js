/*
 * NEON GAUNTLET — a room-by-room neon dungeon crawler.
 *
 * Move through rooms, fight enemies, collect XP, and build your skill tree
 * one level at a time.
 *
 * Pure vanilla JS + Canvas 2D. No assets, no dependencies.
 *
 * Sections below: Constants -> Canvas/state -> Input -> Update -> Render -> Main loop.
 *
 * No build step, no ES modules, no fetch — runs from file://.
 */

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;
const COLORS = {
  cyan:   "#00e5ff",
  pink:   "#ff3b6b",
  gold:   "#fffb96",
  purple: "#b388ff",
  white:  "#ffffff",
  orange: "#ff8c00",
};
const GAME_STATE = { TITLE: "TITLE", PLAYING: "PLAYING", DEAD: "DEAD", BOSS_CLEAR: "BOSS_CLEAR", SKILL_SELECT: "SKILL_SELECT", MODIFIER_DRAFT: "MODIFIER_DRAFT", SHOP: "SHOP" };
const DEBUG = false;      // set true during development to enable the D-key debug overlay
const TILE_SIZE = 16;     // canvas pixels per tile — matches D-17 spec
const HYSTERESIS_GRACE = 0.5;  // seconds to hold target after LOS breaks
const BULLET_SPEED     = 280;  // world pixels per second
const BULLET_LIFETIME  = 1.2;  // seconds before bullet expires (~21 tiles at 280px/s)
const FIRE_COOLDOWN    = 0.25; // seconds between shots
const MAX_BULLETS      = 12;   // max live bullets on screen
const SPAWN_TABLE = {
  1: ["STALKER", "RUSHER", "STALKER"],
  2: ["STALKER", "RUSHER", "RUSHER"],
  3: ["STALKER", "AMBUSHER", "SENTINEL"],
  4: ["RUSHER", "AMBUSHER", "SENTINEL"],
  5: ["SNIPER", "CRAWLER", "SENTINEL"],
};
const INVULN_DURATION = 1.5;      // seconds of invulnerability after taking a hit
const ENEMY_CONTACT_DAMAGE = 1;   // HP lost on direct enemy contact

// ----------------------------------------------------------------------------
// Skill tree constants
// ----------------------------------------------------------------------------
const SKILL_TREE = {
  MARKSMAN: [
    { name: "Sharpshooter",  cost: 1, apply: function(p) { p.bulletDmg = (p.bulletDmg || 1) + 1; } },
    { name: "Rapid Fire",    cost: 1, apply: function(p) { p.fireCooldownMult = (p.fireCooldownMult || 1) * 0.75; } },
    { name: "Penetrating",   cost: 2, apply: function(p) { p.bulletPenetrate = true; } },
    { name: "Overcharge",    cost: 2, apply: function(p) { p.maxBullets = (p.maxBullets || 12) + 6; } },
  ],
  PHANTOM: [
    { name: "Fleet Foot",    cost: 1, apply: function(p) { p.speed = (p.speed || 100) + 20; } },
    { name: "Ghost Step",    cost: 1, apply: function(p) { p.invulnDuration = (p.invulnDuration || 1.5) + 0.5; } },
    { name: "Phase Shift",   cost: 2, apply: function(p) { p.speed = (p.speed || 100) + 25; } },
    { name: "Wraith",        cost: 2, apply: function(p) { p.hysteresisMult = (p.hysteresisMult || 1) * 1.5; } },
  ],
  DEMOLITIONS: [
    { name: "Blast Radius",  cost: 1, apply: function(p) { p.bulletBlast = true; p.bulletBlastRadius = 16; } },
    { name: "Frag Rounds",   cost: 1, apply: function(p) { p.bulletBlastRadius = (p.bulletBlastRadius || 16) + 8; } },
    { name: "Chain Blast",   cost: 2, apply: function(p) { p.bulletChain = true; } },
    { name: "Nuclear",       cost: 2, apply: function(p) { p.bulletBlastRadius = (p.bulletBlastRadius || 16) * 2; } },
  ],
  CONDUCTOR: [
    { name: "Capacitor",     cost: 1, apply: function(p) { p.bulletArc = true; } },
    { name: "Overload",      cost: 1, apply: function(p) { p.bulletDmg = (p.bulletDmg || 1) + 1; } },
    { name: "Chain Arc",     cost: 2, apply: function(p) { p.bulletChain = true; } },
    { name: "Tesla Core",    cost: 2, apply: function(p) { p.fireCooldownMult = (p.fireCooldownMult || 1) * 0.8; p.bulletArc = true; } },
  ],
  HUNTER: [
    { name: "Tracker",       cost: 1, apply: function(p) { p.bulletSpeed = (p.bulletSpeed || 280) + 60; } },
    { name: "Predator",      cost: 1, apply: function(p) { p.aimRange = 400; } },
    { name: "Feral Sense",   cost: 2, apply: function(p) { p.aimRange = (p.aimRange || 400) + 200; } },
    { name: "Apex",          cost: 2, apply: function(p) { p.bulletDmg = (p.bulletDmg || 1) + 2; p.bulletSpeed = (p.bulletSpeed || 280) + 40; } },
  ],
};

const FUSION_SKILLS = [
  {
    name: "Phantom Marksman",
    branches: ["MARKSMAN", "PHANTOM"],
    apply: function(p) { p.bulletPenetrate = true; p.fireCooldownMult = (p.fireCooldownMult || 1) * 0.85; p.speed = (p.speed || 100) + 15; }
  },
  {
    name: "Tesla Demolitions",
    branches: ["CONDUCTOR", "DEMOLITIONS"],
    apply: function(p) { p.bulletArc = true; p.bulletBlast = true; p.bulletBlastRadius = (p.bulletBlastRadius || 16) + 8; }
  },
  {
    name: "Apex Hunter",
    branches: ["HUNTER", "PHANTOM"],
    apply: function(p) { p.bulletSpeed = (p.bulletSpeed || 280) + 80; p.speed = (p.speed || 100) + 20; p.aimRange = (p.aimRange || 400) + 300; }
  },
];

// ----------------------------------------------------------------------------
// Modifier draft constants — blessings (positive) and curses (negative) offered between levels.
// ----------------------------------------------------------------------------
// desc text mirrors the apply() formula structure (including min clamps and
// x-multipliers) so the shown effect stays honest even at edge cases.
const POSITIVE_MODIFIERS = [
  { name: "Speed Boost",  desc: "+20 move speed",              apply: function(p) { p.speed += 20; } },
  { name: "Fortified",    desc: "+2 max HP (heals 2)",         apply: function(p) { p.maxHp += 2; p.hp = Math.min(p.hp + 2, p.maxHp); } },
  { name: "Hair Trigger", desc: "Faster fire (cooldown x0.8)", apply: function(p) { p.fireCooldownMult = (p.fireCooldownMult || 1) * 0.8; } },
];

const NEGATIVE_MODIFIERS = [
  { name: "Slowed",       desc: "-15 move speed (min 60)",      apply: function(p) { p.speed = Math.max(60, p.speed - 15); } },
  { name: "Brittle",      desc: "-1 max HP (min 1)",            apply: function(p) { p.maxHp = Math.max(1, p.maxHp - 1); p.hp = Math.min(p.hp, p.maxHp); } },
  { name: "Sluggish Fire",desc: "Slower fire (cooldown x1.2)",  apply: function(p) { p.fireCooldownMult = (p.fireCooldownMult || 1) * 1.2; } },
];

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// HUD DOM elements (script runs at end of <body>, so these already exist).
const hpFillEl = document.getElementById("hp-fill");
const xpFillEl = document.getElementById("xp-fill");
const levelLabelEl = document.getElementById("level");

let W = 0;
let H = 0;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

let gameState = GAME_STATE.TITLE;
let audioCtx = null;
let muted = false;
let currentLevel = null;  // { rooms, connections, seed, levelNumber }
let currentRoom  = null;  // reference to the Start room in currentLevel.rooms
let debugOverlayVisible = false; // toggled by D key; only active when DEBUG=true
let player = null;        // { x, y, r, speed } — world-space coordinates
let camera = null;        // { tx, ty, locked, begin(ctx), end(ctx) } — camera transform
let keys = {};            // tracks currently held keys: keys[e.key] = true/false
let doorsSealed = false;  // true while enemies are alive; seals door traversal
let enemies = [];         // active enemies for the current room
let particles = [];       // short-lived death-burst particles: { x,y,vx,vy,life,maxLife,color }
let gems = [];            // gem drops array: { x, y, vx, vy, alive }
let sentinelShots = [];   // sentinel projectiles: { x, y, vx, vy, alive, age }
let xp = 0;               // current XP total
let xpToNext = 100;       // XP threshold for next level-up
let clearedFloater = null; // { alpha, timer } — "CLEARED" text overlay
let levelUpFloater = null; // { alpha, timer } — "LEVEL UP" overlay on skill-point gain
let transition = null;    // { phase, timer, duration, targetRoom } — room fade transition
let distMap = null;       // Float32Array of hop distances from player tile; null until first gesture
let lastPlayerTile = { r: -1, c: -1 }; // cached player tile to skip redundant BFS
let aimTarget = null;     // { x, y, alive } — current auto-aim target
let aimGrace = 0;         // seconds remaining before current target is released on LOS loss
let fireCooldown = 0;     // seconds until next bullet can fire
let bullets = [];         // array of { x, y, vx, vy, alive, age }
let killCount = 0;        // enemies killed this run
let roomsCleared = 0;     // rooms cleared this run
let currentLevelNum = 1;  // current level number (increments on Boss clear)
let bossClearTimer = 0;   // seconds remaining in BOSS_CLEAR overlay
let skillPoints = 0;      // unspent skill points available to invest
let skillSelectBranch = 0; // keyboard highlight index 0-4 in skill select overlay
let levelMapVisible = false; // M key toggle — shows minimap overlay
let shakeTrauma = 0;      // screen-shake trauma 0..1; rises on player hit, decays each frame
let hurtFlash = 0;        // red full-screen flash 0..1; set on player hit, decays each frame
let muzzleFlash = 0;      // white muzzle flash 0..1 at player; set on fire, decays each frame
let paused = false;       // P/Esc pause toggle (PLAYING only); freezes update + shows overlay
let titleMotes = null;    // lazily-seeded drifting motes behind the title wordmark
let bossBanner = 0;       // seconds remaining on the "⚠ BOSS ⚠" intro banner
let bestRun = null;       // { level, rooms, kills } loaded from localStorage; null if unavailable
let deathRecorded = false; // guards one-time best-run write on the DEAD screen
let lastRunWasRecord = false; // true if the most recent death beat the prior best
let lastGemPickupTime = 0; // performance.now() ms of last gem pickup (cascade chime)
let gemPickupStreak = 0;   // consecutive rapid pickups -> rising chime pitch
let mapAutoDismissed = true; // true once the level-entry minimap auto-show is dismissed
let modifierDraftStep = 0;    // 0 = blessing pick, 1 = curse pick
let pendingModifierChoice = -1; // index of chosen blessing awaiting curse selection
let shopItems = [];

// ----------------------------------------------------------------------------
// Audio helpers
// ----------------------------------------------------------------------------
function unlockAudio() {
  try {
    if (audioCtx === null) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  } catch (e) {
    // AudioContext not supported — audioCtx stays null, all sounds are no-ops.
  }
}

function playTone(opts) {
  if (!audioCtx || muted) return;
  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const type    = opts.type    || "sine";
    const freq    = opts.freq    || 440;
    const endFreq = opts.endFreq;
    const dur     = opts.dur     || 0.1;
    const gain    = Math.min(0.3, opts.gain !== undefined ? opts.gain : 0.1);
    const now     = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq !== undefined) {
      if (freq > 0 && endFreq > 0) {
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
      } else {
        osc.frequency.linearRampToValueAtTime(endFreq, now + dur);
      }
    }

    // Attack/decay envelope — prevents clicks and pops.
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(gain, now + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.start(now);
    osc.stop(now + dur);
  } catch (e) {
    // Silently swallow any unexpected audio error — never break the game loop.
  }
}

// playKillSound(type) — short kill blip flavored by enemy class. Three sonic
// groups (light / medium / heavy) plus a beefier BOSS chord keep rapid chain
// kills from turning into noise; a 30ms dedup guard prevents audio pile-up.
var lastKillSoundTime = 0;
function playKillSound(type) {
  if (typeof performance !== "undefined") {
    var nowMs = performance.now();
    if (nowMs - lastKillSoundTime < 30) return;
    lastKillSoundTime = nowMs;
  }
  if (type === "BOSS") {
    playTone({ type: "sawtooth", freq: 200, endFreq: 70, dur: 0.22, gain: 0.12 });
    playTone({ type: "square",   freq: 120, endFreq: 50, dur: 0.22, gain: 0.10 });
  } else if (type === "SENTINEL" || type === "SNIPER") {
    playTone({ type: "sawtooth", freq: 180, endFreq: 60, dur: 0.14, gain: 0.09 }); // heavy
  } else if (type === "RUSHER" || type === "CRAWLER") {
    playTone({ type: "square", freq: 480, endFreq: 180, dur: 0.06, gain: 0.07 });  // light
  } else {
    playTone({ type: "sawtooth", freq: 220, endFreq: 80, dur: 0.10, gain: 0.08 }); // medium: STALKER/AMBUSHER
  }
}

// ----------------------------------------------------------------------------
// Glow helpers
// ----------------------------------------------------------------------------
function glowCircle(x, y, r, color, blur = 14) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
  ctx.restore();
}

// Fills a closed path defined by pathFn() with a neon glow — mirrors glowCircle.
function glowShape(pathFn, color, blur = 12) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  pathFn();
  ctx.fill();
  ctx.restore();
}

// ----------------------------------------------------------------------------
// PRNG
// ----------------------------------------------------------------------------
function mulberry32(seed) {
  return function() {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ----------------------------------------------------------------------------
// Level Generation
// ----------------------------------------------------------------------------

// generateLevel(levelNumber, seed) — produces the level skeleton:
//   coarse 4x4 slot graph, room-type assignment, room objects with grid=null.
// Plan 02 will carve interior mazes into room.grid.
function generateLevel(levelNumber, seed) {
  var MAX_RETRIES = 10;

  // Slot adjacency: 4x4 grid, indices 0-15, row-major (row*4+col).
  // Returns array of valid neighbor slot indices for a given slot.
  function getNeighbors(idx) {
    var neighbors = [];
    var row = Math.floor(idx / 4);
    var col = idx % 4;
    if (row > 0) neighbors.push(idx - 4); // N
    if (row < 3) neighbors.push(idx + 4); // S
    if (col < 3) neighbors.push(idx + 1); // E
    if (col > 0) neighbors.push(idx - 1); // W
    return neighbors;
  }

  // Get direction label from slot A to slot B (A and B must be adjacent).
  function getDir(from, to) {
    var diff = to - from;
    if (diff === -4) return "N";
    if (diff === 4)  return "S";
    if (diff === 1)  return "E";
    if (diff === -1) return "W";
    return null;
  }

  // BFS over the connection graph starting from startSlotIdx.
  // Returns map of { slotIdx -> hopCount }.
  function bfsHops(startSlotIdx, connections, placedSet) {
    var queue = [startSlotIdx];
    var visited = {};
    visited[startSlotIdx] = 0;
    while (queue.length > 0) {
      var cur = queue.shift();
      var curRow = Math.floor(cur / 4);
      // Check all 4 directions
      var dirs = [cur - 4, cur + 4, cur + 1, cur - 1];
      for (var d = 0; d < dirs.length; d++) {
        var nb = dirs[d];
        if (!placedSet[nb]) continue;
        // Validate adjacency (same-row check for E/W)
        if (nb === cur + 1 || nb === cur - 1) {
          if (Math.floor(nb / 4) !== curRow) continue;
        }
        if (nb < 0 || nb > 15) continue;
        // Check connection exists
        var key = Math.min(cur, nb) + "-" + Math.max(cur, nb);
        if (!connections[key]) continue;
        if (visited[nb] === undefined) {
          visited[nb] = visited[cur] + 1;
          queue.push(nb);
        }
      }
    }
    return visited;
  }

  // Attempt level generation once. Returns a level object or null if failed.
  function attemptGenerate(attemptSeed) {
    var rng = mulberry32(attemptSeed);

    // Room count scaled by level number (D-04)
    var roomCount = (levelNumber <= 2)
      ? 3 + Math.floor(rng() * 2)       // 3 or 4 rooms for level 1-2
      : 5 + Math.floor(rng() * 4);      // 5-8 rooms for level 3+

    // Random walk on 4x4 slot grid (iterative DFS / backtracking)
    var startSlot = Math.floor(rng() * 16);
    var placedSlots = [startSlot];
    var placedSet = {};
    placedSet[startSlot] = true;
    var stack = [startSlot];
    var connections = {}; // key = "smallerIdx-largerIdx"

    while (placedSlots.length < roomCount && stack.length > 0) {
      var cur = stack[stack.length - 1];
      var neighbors = getNeighbors(cur);
      // Shuffle neighbors with seeded rng
      for (var i = neighbors.length - 1; i > 0; i--) {
        var j = Math.floor(rng() * (i + 1));
        var tmp = neighbors[i]; neighbors[i] = neighbors[j]; neighbors[j] = tmp;
      }
      // Find unvisited neighbor
      var found = false;
      for (var ni = 0; ni < neighbors.length; ni++) {
        var nb = neighbors[ni];
        if (!placedSet[nb]) {
          placedSet[nb] = true;
          placedSlots.push(nb);
          var key = Math.min(cur, nb) + "-" + Math.max(cur, nb);
          connections[key] = true;
          stack.push(nb);
          found = true;
          break;
        }
      }
      if (!found) {
        stack.pop(); // backtrack
      }
    }

    // Must have placed exactly roomCount rooms
    if (placedSlots.length < roomCount) return null;

    // BFS reachability assertion (D-14): all rooms reachable from Start
    var hopsMap = bfsHops(placedSlots[0], connections, placedSet);
    for (var si = 0; si < placedSlots.length; si++) {
      if (hopsMap[placedSlots[si]] === undefined) return null; // unreachable room
    }

    // Room-type assignment (D-06)
    // Start = placedSlots[0], Boss = farthest by BFS hop count
    var startSlotIdx = placedSlots[0];
    var bossSlotIdx = startSlotIdx;
    var maxHops = 0;
    for (var si2 = 1; si2 < placedSlots.length; si2++) {
      var slot = placedSlots[si2];
      var hops = hopsMap[slot] || 0;
      if (hops > maxHops) { maxHops = hops; bossSlotIdx = slot; }
    }

    // Remaining slots (not Start, not Boss) get ELITE, SHOP, NORMAL
    var remainingSlots = placedSlots.filter(function(s) {
      return s !== startSlotIdx && s !== bossSlotIdx;
    });

    // For level 1-2 (3-4 rooms total), we may have only 1-2 remaining slots.
    // We need at least ELITE + SHOP + NORMAL = 3, but if we only have 1 remaining,
    // we can't fit all 5 types — return null to trigger retry.
    // With 3 rooms: [0]=START, [1]= the one middle room (skip ELITE/SHOP), [last]=BOSS — invalid.
    // With 4 rooms: remaining=2, assign [0]=ELITE, [1]=SHOP — no NORMAL — still not all 5.
    // With 5+ rooms: remaining>=3, assign [0]=ELITE, [1]=SHOP, rest=NORMAL — all 5 present.
    //
    // Special case per plan spec: if fewer than 5 total slots:
    //   [0]=START, [last]=BOSS, [1]=SHOP (if 3 rooms skip ELITE), [others]=NORMAL
    //   Then check if all 5 types are covered; if not, return null.
    var typeMap = {};
    typeMap[startSlotIdx] = "START";
    typeMap[bossSlotIdx]  = "BOSS";

    if (placedSlots.length < 5) {
      // Can't fit all 5 types — return null to trigger retry (unless we relax)
      // Actually per spec: "Retry if cannot fit all 5 types (max 10 retries, then fallback)"
      // So we try to assign what we can and return null to signal failure
      return null;
    }

    // 5+ rooms: assign ELITE, SHOP to first two remaining, rest = NORMAL
    typeMap[remainingSlots[0]] = "ELITE";
    typeMap[remainingSlots[1]] = "SHOP";
    for (var ri = 2; ri < remainingSlots.length; ri++) {
      typeMap[remainingSlots[ri]] = "NORMAL";
    }

    // Build room objects (D-02, D-03)
    var rooms = placedSlots.map(function(slotIdx, id) {
      var type = typeMap[slotIdx];
      var rows = (type === "BOSS") ? 21 : 15;
      var cols = (type === "BOSS") ? 21 : 15;
      return {
        id: id,
        slotIdx: slotIdx,
        type: type,
        rows: rows,
        cols: cols,
        grid: null,        // filled by Plan 02 interior carving
        spawnPoint: null,  // filled by Plan 02
        spawnList: [],     // filled by Plan 02
        connections: [],   // filled below
      };
    });

    // Populate room.connections with direction labels
    var slotToRoom = {};
    rooms.forEach(function(r) { slotToRoom[r.slotIdx] = r; });

    Object.keys(connections).forEach(function(key) {
      var parts = key.split("-");
      var a = parseInt(parts[0], 10);
      var b = parseInt(parts[1], 10);
      var ra = slotToRoom[a];
      var rb = slotToRoom[b];
      if (!ra || !rb) return;
      var dirAtoB = getDir(a, b);
      var dirBtoA = getDir(b, a);
      if (dirAtoB) ra.connections.push(dirAtoB);
      if (dirBtoA) rb.connections.push(dirBtoA);
    });

    return {
      rooms: rooms,
      connections: connections,
      seed: attemptSeed,
      levelNumber: levelNumber,
    };
  }

  // Retry loop (D-14, D-15)
  var level = null;
  for (var retry = 0; retry < MAX_RETRIES; retry++) {
    level = attemptGenerate(seed + retry);
    if (level !== null) break;
  }

  // Fallback 2-room layout if all retries failed (D-14)
  if (level === null) {
    console.warn("[Phase40] Level generation failed after 10 retries — using fallback 2-room layout");
    var fallbackConnections = { "5-6": true };
    var startRoom = {
      id: 0, slotIdx: 5, type: "START",
      rows: 15, cols: 15, grid: null,
      spawnPoint: null, spawnList: [], connections: ["E"],
    };
    var bossRoom = {
      id: 1, slotIdx: 6, type: "BOSS",
      rows: 21, cols: 21, grid: null,
      spawnPoint: null, spawnList: [], connections: ["W"],
    };
    level = {
      rooms: [startRoom, bossRoom],
      connections: fallbackConnections,
      seed: seed,
      levelNumber: levelNumber,
    };
    // Add placeholder NORMAL/ELITE/SHOP rooms so the game is never in a broken state
    // (all 5 types required by spec — add synthetic rooms at unused slots)
    var synthSlots = [1, 2, 3];
    var synthTypes = ["NORMAL", "ELITE", "SHOP"];
    synthSlots.forEach(function(slot, i) {
      level.rooms.push({
        id: level.rooms.length, slotIdx: slot, type: synthTypes[i],
        rows: 15, cols: 15, grid: null,
        spawnPoint: null, spawnList: [], connections: [],
      });
    });
  }

  // Carve interior grids for all rooms (Plan 02 — Task 1).
  // A fresh rng seeded from level.seed for carving — deterministic per seed (D-13).
  var carveRng = mulberry32(level.seed + 9999);
  level.rooms.forEach(function(room) {
    if (room.type === "START" || room.type === "BOSS" || room.type === "SHOP") {
      buildOpenRoom(room);
    } else {
      // NORMAL or ELITE
      carveRoom(room, carveRng);
    }
  });

  // Place door tiles at border midpoints for each connection direction (Plan 02 — Task 2).
  level.rooms.forEach(function(room) {
    placeDoors(room);
  });

  // Tile-level BFS validation (D-15): ensure every door tile is reachable from room center.
  // If unreachable, regenerate once with offset seed. (Plan 02 — Task 2).
  level.rooms.forEach(function(room) {
    if (!room.grid) return;
    var rows = room.rows;
    var cols = room.cols;
    var centerR = Math.floor(rows / 2);
    var centerC = Math.floor(cols / 2);
    var reachable = tileBFS(room.grid, rows, cols, centerR, centerC);

    // Find any door tile in the room.
    var doorUnreachable = false;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var v = room.grid[r * cols + c];
        if (v >= 2 && v <= 5) {
          if (!reachable.has(r + "," + c)) {
            doorUnreachable = true;
            break;
          }
        }
      }
      if (doorUnreachable) break;
    }

    if (doorUnreachable && (room.type === "NORMAL" || room.type === "ELITE")) {
      // Single retry: re-carve with offset seed.
      var retrySeed = level.seed + 1000 + room.id;
      carveRoom(room, mulberry32(retrySeed));
      placeDoors(room); // re-place doors after re-carve
      reachable = tileBFS(room.grid, rows, cols, centerR, centerC);

      // Check again after retry.
      var stillUnreachable = false;
      for (var r2 = 0; r2 < rows; r2++) {
        for (var c2 = 0; c2 < cols; c2++) {
          var v2 = room.grid[r2 * cols + c2];
          if (v2 >= 2 && v2 <= 5) {
            if (!reachable.has(r2 + "," + c2)) {
              stillUnreachable = true;
              break;
            }
          }
        }
        if (stillUnreachable) break;
      }
      if (stillUnreachable) {
        console.warn("[Phase40] Room", room.id, "door unreachable after retry — using as-is");
      }
    }
  });

  // Compute player and enemy spawn points for all rooms (Plan 02 — Task 2).
  level.rooms.forEach(function(room) {
    if (room.grid) computeSpawnPoints(room);
  });

  // Assign module-level vars
  currentLevel = level;
  currentRoom = level.rooms.find(function(r) { return r.type === "START"; });

  // Console log on success (D-12, UI-SPEC Console Output)
  console.log(
    "[Phase40] Level", levelNumber,
    "| seed:", level.seed,
    "| rooms:", level.rooms.length,
    "| types:", level.rooms.map(function(r) { return r.type; }).join(", ")
  );

  return currentLevel;
}

// ----------------------------------------------------------------------------
// Room interior generation
// ----------------------------------------------------------------------------

// buildOpenRoom(room) — allocates an open-floor Uint8Array grid for Start/Boss/Shop rooms.
// All interior tiles = 0 (floor); border tiles = 1 (wall). No door tiles — placeDoors()
// adds those in a later step.
function buildOpenRoom(room) {
  var rows = room.rows;
  var cols = room.cols;
  room.grid = new Uint8Array(rows * cols); // filled with 0 (floor) by default
  // Set border tiles to 1 (wall)
  for (var c = 0; c < cols; c++) {
    room.grid[0 * cols + c] = 1;          // top row
    room.grid[(rows - 1) * cols + c] = 1; // bottom row
  }
  for (var r = 0; r < rows; r++) {
    room.grid[r * cols + 0] = 1;          // left col
    room.grid[r * cols + (cols - 1)] = 1; // right col
  }
}

// carveRoom(room, rng) — recursive backtracking maze carver for Normal/Elite rooms.
// Produces a perfect maze skeleton, then applies 2-wide corridor widening (D-08)
// and ~12% loop removal (D-09). Same rng state → same carved grid (D-13).
function carveRoom(room, rng) {
  var rows = room.rows;
  var cols = room.cols;

  // 1. Allocate: all walls initially.
  room.grid = new Uint8Array(rows * cols).fill(1);

  // 2. Cell grid dimensions (odd-indexed tiles are "chamber" cells).
  var cellRows = (rows - 1) / 2;
  var cellCols = (cols - 1) / 2;

  // 3. Visited array for cells.
  var visited = new Uint8Array(cellRows * cellCols);

  // 4. Iterative DFS (stack-based — avoids call stack overflow for large rooms).
  var stack = [0]; // start at cell (0,0)
  visited[0] = 1;
  // Set starting cell tile to floor.
  room.grid[1 * cols + 1] = 0;

  // Direction offsets: [N, E, S, W] in cell coordinates and tile coordinates.
  var cellDr = [-1, 0, 1, 0];
  var cellDc = [0, 1, 0, -1];

  while (stack.length > 0) {
    var top = stack[stack.length - 1];
    var cr = Math.floor(top / cellCols);
    var cc = top % cellCols;

    // Collect unvisited in-bounds neighbors.
    var dirs = [0, 1, 2, 3];
    // Fisher-Yates shuffle with seeded rng.
    for (var i = 3; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = dirs[i]; dirs[i] = dirs[j]; dirs[j] = tmp;
    }

    var moved = false;
    for (var d = 0; d < 4; d++) {
      var nr = cr + cellDr[dirs[d]];
      var nc = cc + cellDc[dirs[d]];
      if (nr < 0 || nr >= cellRows || nc < 0 || nc >= cellCols) continue;
      var ncIdx = nr * cellCols + nc;
      if (visited[ncIdx]) continue;

      // Knock out wall between current cell and chosen cell.
      var wallRow = cr * 2 + 1 + cellDr[dirs[d]]; // tile row of wall between
      var wallCol = cc * 2 + 1 + cellDc[dirs[d]]; // tile col of wall between
      room.grid[wallRow * cols + wallCol] = 0;     // wall → floor

      // Set chosen cell tile to floor.
      var nextTileRow = nr * 2 + 1;
      var nextTileCol = nc * 2 + 1;
      room.grid[nextTileRow * cols + nextTileCol] = 0;

      visited[ncIdx] = 1;
      stack.push(ncIdx);
      moved = true;
      break;
    }

    if (!moved) {
      stack.pop(); // backtrack
    }
  }

  // 5. Corridor widening (D-08): widen each corridor passage from 1-tile to 2-tile width.
  // Passage tiles are even-indexed row or col tiles (the wall tiles between cells).
  // For each passage tile that is floor, mark an adjacent tile also as floor.
  for (var row = 1; row < rows - 1; row++) {
    for (var col = 1; col < cols - 1; col++) {
      // Only process passage tiles (even row or even col, but not both — those are
      // intersections / cell corners). Actually we want even-row or even-col "corridor" tiles.
      var evenRow = (row % 2 === 0);
      var evenCol = (col % 2 === 0);
      if (!evenRow && !evenCol) continue; // odd,odd = cell — skip
      if (evenRow && evenCol) continue;   // even,even = corner intersection — skip

      if (room.grid[row * cols + col] !== 0) continue; // must be floor

      if (evenRow) {
        // Horizontal passage (even row): widen by marking row+1 same col as floor,
        // if row+1 is not a border.
        if (row + 1 < rows - 1) {
          room.grid[(row + 1) * cols + col] = 0;
        }
      } else {
        // Vertical passage (even col): widen by marking row, col+1 as floor,
        // if col+1 is not a border.
        if (col + 1 < cols - 1) {
          room.grid[row * cols + (col + 1)] = 0;
        }
      }
    }
  }

  // 6. Loop removal (D-09): ~12% of bridge wall tiles become floor.
  // A bridge wall is a wall tile that has a floor neighbor to N and S, or E and W.
  for (var row2 = 1; row2 < rows - 1; row2++) {
    for (var col2 = 1; col2 < cols - 1; col2++) {
      if (room.grid[row2 * cols + col2] !== 1) continue; // must be wall
      var hasN = (row2 > 0)        && room.grid[(row2 - 1) * cols + col2] === 0;
      var hasS = (row2 < rows - 1) && room.grid[(row2 + 1) * cols + col2] === 0;
      var hasE = (col2 < cols - 1) && room.grid[row2 * cols + (col2 + 1)] === 0;
      var hasW = (col2 > 0)        && room.grid[row2 * cols + (col2 - 1)] === 0;
      var bridge = (hasN && hasS) || (hasE && hasW);
      if (bridge && rng() < 0.12) {
        room.grid[row2 * cols + col2] = 0;
      }
    }
  }
}

// placeDoors(room) — places door tiles (values 2–5) at the border midpoint for each
// connection direction in room.connections. Also guarantees the immediately-interior
// tile is floor so the opening is always traversable. D-11.
// Tile values: 2=door-N, 3=door-E, 4=door-S, 5=door-W (D-01).
function placeDoors(room) {
  var rows = room.rows;
  var cols = room.cols;
  var midR = Math.floor(rows / 2);
  var midC = Math.floor(cols / 2);

  room.connections.forEach(function(dir) {
    var row, col, intRow, intCol, doorVal;
    if (dir === "N") {
      row = 0;        col = midC;   doorVal = 2;
      intRow = 1;     intCol = midC;
    } else if (dir === "S") {
      row = rows - 1; col = midC;   doorVal = 4;
      intRow = rows - 2; intCol = midC;
    } else if (dir === "E") {
      row = midR;     col = cols - 1; doorVal = 3;
      intRow = midR;  intCol = cols - 2;
    } else if (dir === "W") {
      row = midR;     col = 0;      doorVal = 5;
      intRow = midR;  intCol = 1;
    } else {
      return; // unknown direction
    }
    room.grid[row * cols + col] = doorVal;   // door tile on border
    room.grid[intRow * cols + intCol] = 0;   // ensure interior tile is floor
  });
}

// tileBFS(grid, rows, cols, startRow, startCol) — BFS over floor tiles (0) and door
// tiles (2–5). Returns a Set of "row,col" strings for all reachable positions from
// the start tile. Returns empty Set if the start tile is a wall (D-15, D-22).
function tileBFS(grid, rows, cols, startRow, startCol) {
  var reachable = new Set();
  var startVal = grid[startRow * cols + startCol];
  // Start must be floor or door to traverse
  if (startVal === 1) return reachable; // wall — nothing reachable

  var queue = [[startRow, startCol]];
  reachable.add(startRow + "," + startCol);

  while (queue.length > 0) {
    var curr = queue.shift();
    var r = curr[0];
    var c = curr[1];
    // 4-directional neighbors
    var neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
    for (var n = 0; n < neighbors.length; n++) {
      var nr = neighbors[n][0];
      var nc = neighbors[n][1];
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
      var key = nr + "," + nc;
      if (reachable.has(key)) continue;
      var val = grid[nr * cols + nc];
      if (val === 1) continue; // wall — not traversable
      // floor (0) or door (2–5) — traversable
      reachable.add(key);
      queue.push([nr, nc]);
    }
  }
  return reachable;
}

// computeSpawnPoints(room) — assigns room.spawnPoint ({ tx, ty }) and room.spawnList
// (array of { tx, ty }) for player and enemy spawn positions. D-20, D-21, D-22.
function computeSpawnPoints(room) {
  var rows = room.rows;
  var cols = room.cols;
  var centerR = Math.floor(rows / 2);
  var centerC = Math.floor(cols / 2);

  // BFS reachable set from room center
  var reachable = tileBFS(room.grid, rows, cols, centerR, centerC);

  // Collect all door tile positions (for distance calculations)
  var doorTiles = [];
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var v = room.grid[r * cols + c];
      if (v >= 2 && v <= 5) doorTiles.push([r, c]);
    }
  }

  // Helper: Manhattan distance from tile (r,c) to nearest door tile.
  function distToDoors(r, c) {
    if (doorTiles.length === 0) return 999;
    var minD = 999;
    for (var i = 0; i < doorTiles.length; i++) {
      var d = Math.abs(r - doorTiles[i][0]) + Math.abs(c - doorTiles[i][1]);
      if (d < minD) minD = d;
    }
    return minD;
  }

  // Helper: min distance from tile (r,c) to any wall tile within a radius.
  // Simplified per spec: check cardinal points at given radius distance.
  function distToWallMin(r, c, radius) {
    // Check if tiles at +/-radius in cardinal directions are all floor/door.
    var checks = [
      [r - radius, c],
      [r + radius, c],
      [r, c - radius],
      [r, c + radius],
    ];
    for (var i = 0; i < checks.length; i++) {
      var cr = checks[i][0];
      var cc = checks[i][1];
      if (cr < 0 || cr >= rows || cc < 0 || cc >= cols) return 0; // out of bounds → treat as wall
      if (room.grid[cr * cols + cc] === 1) return 0; // wall found at radius
    }
    return radius; // all cardinal directions clear
  }

  // Player spawn: at least 3 tiles from any wall/door; fallback to 2 tiles.
  var spawnPoint = null;
  var candidates3 = [];
  var candidates2 = [];

  reachable.forEach(function(key) {
    var parts = key.split(",");
    var r = parseInt(parts[0], 10);
    var c = parseInt(parts[1], 10);
    if (room.grid[r * cols + c] !== 0) return; // must be floor
    var d3 = distToWallMin(r, c, 3);
    var d2 = distToWallMin(r, c, 2);
    if (d3 >= 3) candidates3.push({ tx: c, ty: r });
    else if (d2 >= 2) candidates2.push({ tx: c, ty: r });
  });

  // Sort deterministically: lowest ty (row) first, then lowest tx (col).
  function sortTiles(arr) {
    arr.sort(function(a, b) { return a.ty !== b.ty ? a.ty - b.ty : a.tx - b.tx; });
  }
  sortTiles(candidates3);
  sortTiles(candidates2);

  if (candidates3.length > 0) {
    spawnPoint = candidates3[0];
  } else if (candidates2.length > 0) {
    spawnPoint = candidates2[0];
  } else {
    // Last resort: center tile if reachable, otherwise first reachable floor tile.
    if (room.grid[centerR * cols + centerC] === 0) {
      spawnPoint = { tx: centerC, ty: centerR };
    } else {
      reachable.forEach(function(key) {
        if (spawnPoint) return;
        var parts = key.split(",");
        var r = parseInt(parts[0], 10);
        var c = parseInt(parts[1], 10);
        if (room.grid[r * cols + c] === 0) spawnPoint = { tx: c, ty: r };
      });
    }
  }

  room.spawnPoint = spawnPoint;

  // Enemy spawn list: reachable floor tiles >= 4 from spawnPoint and >= 2 from doors.
  var spawnList = [];
  if (spawnPoint) {
    reachable.forEach(function(key) {
      var parts = key.split(",");
      var r = parseInt(parts[0], 10);
      var c = parseInt(parts[1], 10);
      if (room.grid[r * cols + c] !== 0) return; // must be floor
      var distFromSpawn = Math.abs(r - spawnPoint.ty) + Math.abs(c - spawnPoint.tx);
      if (distFromSpawn < 4) return;
      if (distToDoors(r, c) < 2) return;
      spawnList.push({ tx: c, ty: r });
    });
  }
  room.spawnList = spawnList;
}

// ----------------------------------------------------------------------------
// Rendering — maze
// ----------------------------------------------------------------------------

// renderRoom(room) — draws the tile grid for the given room, centered on canvas.
// Step order: floor → wall outlines → door glow dots → (optional) debug overlay.
// Guard: if no room or grid, returns immediately to prevent crash before generateLevel fires.
function renderRoom(room) {
  if (!room || !room.grid) return;

  var rows = room.rows;
  var cols = room.cols;

  // Step 1 — World-space origin (camera.begin() already translated ctx to correct screen pos)
  var originX = 0;
  var originY = 0;
  // World-space viewport bounds: tile at (wx,wy) is visible if wx > vpL && wx+TILE_SIZE < vpR (etc.)
  var camTx = camera ? Math.round(camera.tx) : 0;
  var camTy = camera ? Math.round(camera.ty) : 0;
  var vpL = -camTx - TILE_SIZE;
  var vpR = -camTx + W;
  var vpT = -camTy - TILE_SIZE;
  var vpB = -camTy + H;

  // Step 2 — Scale-to-fit fallback disabled (camera handles framing; scale stays 1)
  var scale = 1;
  if (false && (cols * TILE_SIZE > W || rows * TILE_SIZE > H)) {
    scale = Math.min(W / (cols * TILE_SIZE), H / (rows * TILE_SIZE)) * 0.9;
    ctx.save();
    ctx.scale(scale, scale);
    originX = Math.floor((W / scale - cols * TILE_SIZE) / 2);
    originY = Math.floor((H / scale - rows * TILE_SIZE) / 2);
  }

  // Step 3 — Draw floor tiles (value 0) in near-black #0d0d1a
  ctx.fillStyle = "#0d0d1a";
  for (var fr = 0; fr < rows; fr++) {
    for (var fc = 0; fc < cols; fc++) {
      if (room.grid[fr * cols + fc] === 0) {
        var wxF = originX + fc * TILE_SIZE;
        var wyF = originY + fr * TILE_SIZE;
        if (wxF > vpR || wxF < vpL || wyF > vpB || wyF < vpT) continue;
        ctx.fillRect(originX + fc * TILE_SIZE, originY + fr * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  // Step 4 — Cover wall tile areas with canvas background color to mask the decorative
  // grid lines drawn at globalAlpha=0.06 in renderPlaying() before this call.
  ctx.fillStyle = "#05050c";
  for (var wr = 0; wr < rows; wr++) {
    for (var wc = 0; wc < cols; wc++) {
      if (room.grid[wr * cols + wc] === 1) {
        var wxW = originX + wc * TILE_SIZE;
        var wyW = originY + wr * TILE_SIZE;
        if (wxW > vpR || wxW < vpL || wyW > vpB || wyW < vpT) continue;
        ctx.fillRect(originX + wc * TILE_SIZE, originY + wr * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  // Step 5 — Draw wall edge outlines (value 1 only).
  // Batched: single beginPath() before the outer loop, one stroke() after — T-40-08 mitigation.
  // Only draw a 0.5px edge where a wall tile borders a floor tile (or out-of-bounds).
  ctx.strokeStyle = "rgba(0,229,255,0.35)";
  ctx.lineWidth = 0.5;
  var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // N, S, W, E
  ctx.beginPath();
  for (var er = 0; er < rows; er++) {
    for (var ec = 0; ec < cols; ec++) {
      if (room.grid[er * cols + ec] !== 1) continue; // only wall tiles
      var wxE = originX + ec * TILE_SIZE;
      var wyE = originY + er * TILE_SIZE;
      if (wxE > vpR || wxE < vpL || wyE > vpB || wyE < vpT) continue;
      var tx = originX + ec * TILE_SIZE;
      var ty = originY + er * TILE_SIZE;
      for (var di = 0; di < dirs.length; di++) {
        var dr = dirs[di][0];
        var dc = dirs[di][1];
        var nr = er + dr;
        var nc = ec + dc;
        // Neighbor is floor/door or out-of-bounds → draw edge segment
        var neighborIsFloor = (nr < 0 || nr >= rows || nc < 0 || nc >= cols) ||
                               room.grid[nr * cols + nc] === 0 ||
                               room.grid[nr * cols + nc] >= 2;
        if (neighborIsFloor) {
          if (dr === -1) { ctx.moveTo(tx, ty); ctx.lineTo(tx + TILE_SIZE, ty); }                         // N edge
          if (dr ===  1) { ctx.moveTo(tx, ty + TILE_SIZE); ctx.lineTo(tx + TILE_SIZE, ty + TILE_SIZE); } // S edge
          if (dc === -1) { ctx.moveTo(tx, ty); ctx.lineTo(tx, ty + TILE_SIZE); }                         // W edge
          if (dc ===  1) { ctx.moveTo(tx + TILE_SIZE, ty); ctx.lineTo(tx + TILE_SIZE, ty + TILE_SIZE); } // E edge
        }
      }
    }
  }
  ctx.stroke();

  // Step 6 — Draw door glow dots (tile values 2–5: N/E/S/W doors)
  var pulse = Math.sin(Date.now() / 800);
  var doorR = 3 + pulse * 1.5;
  var doorColor = doorsSealed ? COLORS.pink : COLORS.cyan;
  for (var dr2 = 0; dr2 < rows; dr2++) {
    for (var dc2 = 0; dc2 < cols; dc2++) {
      if (room.grid[dr2 * cols + dc2] >= 2) {
        var wxD = originX + dc2 * TILE_SIZE;
        var wyD = originY + dr2 * TILE_SIZE;
        if (wxD > vpR || wxD < vpL || wyD > vpB || wyD < vpT) continue;
        var cx = originX + dc2 * TILE_SIZE + TILE_SIZE / 2;
        var cy = originY + dr2 * TILE_SIZE + TILE_SIZE / 2;
        glowCircle(cx, cy, doorR, doorColor, 12);
      }
    }
  }

  // Step 7 — Conditional debug overlay (DEBUG guard + visibility toggle)
  if (DEBUG && debugOverlayVisible) renderDebugOverlay();

  // Step 8 — Restore scale if applied in Step 2
  if (scale !== 1) ctx.restore();
}

// renderDebugOverlay() — draws the D-key debug overlay on top of the tile grid.
// Only callable when DEBUG===true AND debugOverlayVisible===true (enforced by renderRoom caller).
// Layers: slot grid → filled slots → connection lines → room labels → current-room highlight → seed readout.
function renderDebugOverlay() {
  if (!currentLevel) return;
  var rooms = currentLevel.rooms;

  // Slot grid dimensions — 4x4 coarse grid over the full canvas
  var SLOT_W = W / 4;
  var SLOT_H = H / 4;

  ctx.save();

  // Layer 1: 4x4 slot grid lines (faint white)
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  for (var r = 0; r <= 4; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * SLOT_H);
    ctx.lineTo(W, r * SLOT_H);
    ctx.stroke();
  }
  for (var c = 0; c <= 4; c++) {
    ctx.beginPath();
    ctx.moveTo(c * SLOT_W, 0);
    ctx.lineTo(c * SLOT_W, H);
    ctx.stroke();
  }

  // Layer 2: Filled slot rects by room type
  var typeColors = {
    "START":  "rgba(0,229,255,0.125)",
    "NORMAL": "rgba(255,255,255,0.04)",
    "ELITE":  "rgba(179,136,255,0.125)",
    "SHOP":   "rgba(255,251,150,0.125)",
    "BOSS":   "rgba(255,59,107,0.125)",
  };
  rooms.forEach(function(room) {
    var sr = Math.floor(room.slotIdx / 4);
    var sc = room.slotIdx % 4;
    ctx.fillStyle = typeColors[room.type] || "rgba(255,255,255,0.04)";
    ctx.fillRect(sc * SLOT_W, sr * SLOT_H, SLOT_W, SLOT_H);
  });

  // Layer 3: Connection lines between slot centers
  ctx.globalAlpha = 0.4;
  ctx.strokeStyle = COLORS.cyan;
  ctx.lineWidth = 1;
  Object.keys(currentLevel.connections).forEach(function(connStr) {
    var parts = connStr.split("-");
    var idxA = parseInt(parts[0], 10);
    var idxB = parseInt(parts[1], 10);
    var rA = Math.floor(idxA / 4);
    var cA = idxA % 4;
    var rB = Math.floor(idxB / 4);
    var cB = idxB % 4;
    ctx.beginPath();
    ctx.moveTo(cA * SLOT_W + SLOT_W / 2, rA * SLOT_H + SLOT_H / 2);
    ctx.lineTo(cB * SLOT_W + SLOT_W / 2, rB * SLOT_H + SLOT_H / 2);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  // Layer 4: Room-type labels at slot centers
  ctx.font = "11px \"Segoe UI\", system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  rooms.forEach(function(room) {
    var sr = Math.floor(room.slotIdx / 4);
    var sc = room.slotIdx % 4;
    ctx.fillText(room.type, sc * SLOT_W + SLOT_W / 2, sr * SLOT_H + SLOT_H / 2);
  });

  // Layer 4b: Slot (row,col) coordinate annotations below each label
  ctx.font = "9px \"Segoe UI\", system-ui, sans-serif";
  ctx.fillStyle = "rgba(154,154,192,0.5)";
  rooms.forEach(function(room) {
    var sr = Math.floor(room.slotIdx / 4);
    var sc = room.slotIdx % 4;
    ctx.fillText("(" + sr + "," + sc + ")", sc * SLOT_W + SLOT_W / 2, sr * SLOT_H + SLOT_H / 2 + 14);
  });

  // Layer 5: Current room highlight (white stroke rect around current room's slot)
  if (currentRoom) {
    var sr2 = Math.floor(currentRoom.slotIdx / 4);
    var sc2 = currentRoom.slotIdx % 4;
    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(sc2 * SLOT_W + 2, sr2 * SLOT_H + 2, SLOT_W - 4, SLOT_H - 4);
  }

  // Layer 6: Seed readout at top-left
  ctx.font = "12px \"Segoe UI\", system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "rgba(154,154,192,0.8)";
  ctx.fillText("SEED: " + currentLevel.seed, 8, 8);

  ctx.restore();
}

// ----------------------------------------------------------------------------
// Input / audio-unlock gate
// ----------------------------------------------------------------------------
function handleFirstGesture() {
  unlockAudio();
  playTone({ type: "sine", freq: 220, endFreq: 440, dur: 0.18, gain: 0.14 });
  gameState = GAME_STATE.PLAYING;
  currentLevelNum = 1;
  generateLevel(1, Math.floor(Date.now() / 1000));
  player = {
    x: (currentRoom.spawnPoint.tx + 0.5) * TILE_SIZE,
    y: (currentRoom.spawnPoint.ty + 0.5) * TILE_SIZE,
    r: 6,
    speed: 150,
    vx: 0,
    vy: 0,
    hp: 5,
    maxHp: 5,
    invuln: 0
  };
  player.skillTiers = { MARKSMAN: 0, PHANTOM: 0, DEMOLITIONS: 0, CONDUCTOR: 0, HUNTER: 0 };
  player.fusionUnlocked = [];
  player.vx = 0; player.vy = 0;
  skillPoints = 0;
  initCamera();
  enemies = []; gems = []; sentinelShots = []; xp = 0;
  killCount = 0; roomsCleared = 0;
  spawnEnemies();
  if (currentRoom && currentRoom.type === "START") currentRoom.cleared = true;
  distMap = null;
  lastPlayerTile = { r: -1, c: -1 };
  aimTarget = null; aimGrace = 0; fireCooldown = 0; bullets = [];
  const hud = document.getElementById("hud");
  if (hud) hud.classList.remove("hidden");
  document.removeEventListener("keydown", handleFirstGesture);
  document.removeEventListener("pointerup", handleFirstGesture);
}
document.addEventListener("keydown", handleFirstGesture);
document.addEventListener("pointerup", handleFirstGesture);

// loadBestRun() — read the persisted best run from localStorage into bestRun.
// localStorage can throw or be unavailable under file:// — failures leave bestRun null.
function loadBestRun() {
  try {
    var raw = localStorage.getItem("neon_gauntlet_best");
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed.level === "number") bestRun = parsed;
    }
  } catch (e) { bestRun = null; }
}

// recordRun() — merge the just-ended run into the per-field best and persist it.
// Returns true if this run set a new record (higher level, or same level + more kills).
function recordRun() {
  var run = { level: currentLevelNum, rooms: roomsCleared, kills: killCount };
  var isRecord = !bestRun || run.level > bestRun.level ||
                 (run.level === bestRun.level && run.kills > bestRun.kills);
  var merged = {
    level: Math.max(run.level, bestRun ? bestRun.level : 0),
    rooms: Math.max(run.rooms, bestRun ? bestRun.rooms : 0),
    kills: Math.max(run.kills, bestRun ? bestRun.kills : 0),
  };
  bestRun = merged;
  try { localStorage.setItem("neon_gauntlet_best", JSON.stringify(merged)); } catch (e) {}
  return isRecord;
}

// restartGame() — resets all run state and begins a fresh level 1 run.
// Called from the DEAD screen restart button click.
function restartGame() {
  enemies = []; gems = []; sentinelShots = []; bullets = [];
  shopItems = [];
  xp = 0; xpToNext = 100; killCount = 0; roomsCleared = 0;
  currentLevelNum = 1; bossClearTimer = 0;
  levelMapVisible = false; modifierDraftStep = 0; pendingModifierChoice = -1;
  doorsSealed = false; clearedFloater = null; levelUpFloater = null; transition = null;
  distMap = null; lastPlayerTile = { r: -1, c: -1 };
  aimTarget = null; aimGrace = 0; fireCooldown = 0;
  gemPickupStreak = 0; lastGemPickupTime = 0;
  shakeTrauma = 0; hurtFlash = 0; muzzleFlash = 0; paused = false; bossBanner = 0;
  deathRecorded = false;
  generateLevel(1, Math.floor(Date.now() / 1000));
  player = {
    x: (currentRoom.spawnPoint.tx + 0.5) * TILE_SIZE,
    y: (currentRoom.spawnPoint.ty + 0.5) * TILE_SIZE,
    r: 6,
    speed: 150,
    vx: 0,
    vy: 0,
    hp: 5,
    maxHp: 5,
    invuln: 0
  };
  player.skillTiers = { MARKSMAN: 0, PHANTOM: 0, DEMOLITIONS: 0, CONDUCTOR: 0, HUNTER: 0 };
  player.fusionUnlocked = [];
  skillPoints = 0;
  initCamera();
  spawnEnemies();
  gameState = GAME_STATE.PLAYING;
}

// Click handler for DEAD state restart button
canvas.addEventListener("click", function(e) {
  if (gameState === GAME_STATE.DEAD) {
    restartGame();
  }
});

// Mute button wiring
const muteBtn = document.getElementById("mute-btn");
if (muteBtn) {
  muteBtn.addEventListener("click", function () {
    muted = !muted;
    muteBtn.textContent = muted ? "🔇" : "🔊";
  });
}

// Debug overlay toggle (D key — only active when DEBUG=true)
document.addEventListener("keydown", function(e) {
  if ((e.key === "d" || e.key === "D") && DEBUG) {
    debugOverlayVisible = !debugOverlayVisible;
  }
});

// Skill select keyboard handler — invest (1-5), close (Tab/Enter/Esc), open from PLAYING (Tab).
// NOTE: open/close is Tab, NOT S — S is the move-down key (WASD) and double-binding it
// opened the skill tree every time the player moved down.
document.addEventListener("keydown", function(e) {
  var branchKeys = ["MARKSMAN", "PHANTOM", "DEMOLITIONS", "CONDUCTOR", "HUNTER"];
  if (gameState === GAME_STATE.SKILL_SELECT) {
    if (e.key >= "1" && e.key <= "5") {
      e.preventDefault();
      investSkill(branchKeys[Number(e.key) - 1]);
    } else if (e.key === "Tab" || e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();
      gameState = GAME_STATE.PLAYING;
    }
  } else if (gameState === GAME_STATE.MODIFIER_DRAFT) {
    if (e.key === "1" || e.key === "2" || e.key === "3") {
      e.preventDefault();
      var idx = Number(e.key) - 1;
      // Guard: idx must be 0-2 (T-45-03a)
      if (idx < 0 || idx > 2) return;
      if (modifierDraftStep === 0) {
        pendingModifierChoice = idx;
        modifierDraftStep = 1;
      } else if (modifierDraftStep === 1) {
        // Guard: pendingModifierChoice must be valid (T-45-03b)
        if (pendingModifierChoice < 0) return;
        POSITIVE_MODIFIERS[pendingModifierChoice].apply(player);
        NEGATIVE_MODIFIERS[idx].apply(player);
        modifierDraftStep = 0;
        pendingModifierChoice = -1;
        advanceLevel();
      }
    }
  } else if (gameState === GAME_STATE.PLAYING) {
    if (e.key === "p" || e.key === "P" || e.key === "Escape") {
      e.preventDefault();
      paused = !paused;
      return; // toggling pause consumes the key
    }
    if (paused) return; // swallow other gameplay inputs while paused
    if (e.key === "Tab") {
      e.preventDefault();
      gameState = GAME_STATE.SKILL_SELECT;
    }
    if (e.key === "m" || e.key === "M") {
      levelMapVisible = !levelMapVisible;
    }
  } else if (gameState === GAME_STATE.SHOP) {
    if (e.key === "1" || e.key === "2" || e.key === "3") {
      e.preventDefault();
      var si = Number(e.key) - 1;
      var sitem = shopItems[si];
      // Treat a zero-effect Health Restore (already at full HP) as unavailable so
      // no XP is consumed for a no-op purchase (WR-01).
      var healNoOp = sitem && sitem.name === "Health Restore" && player && player.hp >= player.maxHp;
      if (sitem && !sitem.sold && xp >= sitem.cost && !healNoOp) {
        xp -= sitem.cost;
        sitem.apply(player);
        sitem.sold = true;
      }
    } else if (e.key === "Escape" || e.key === "e" || e.key === "E") {
      gameState = GAME_STATE.PLAYING;
    }
  }
});

// Movement key tracking — unconditional, all game states
document.addEventListener("keydown", function(e) {
  keys[e.key] = true;
  // First movement input after a level-entry auto-show dismisses the minimap.
  if (levelMapVisible && !mapAutoDismissed) {
    var mk = e.key;
    if (mk === "w" || mk === "W" || mk === "a" || mk === "A" ||
        mk === "s" || mk === "S" || mk === "d" || mk === "D" ||
        mk === "ArrowUp" || mk === "ArrowDown" || mk === "ArrowLeft" || mk === "ArrowRight") {
      levelMapVisible = false;
      mapAutoDismissed = true;
    }
  }
});
document.addEventListener("keyup",   function(e) { keys[e.key] = false; });

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------

// spawnEnemies() — spawns enemies from SPAWN_TABLE for the current level.
// Looks up SPAWN_TABLE[currentLevel.levelNumber], falls back to level 1 table.
// Places up to 3 enemies at spawnList positions. Sets doorsSealed = true.
function spawnEnemies() {
  if (!currentRoom || !currentRoom.spawnList) return;
  enemies = [];
  particles = []; // clear death-burst particles on room entry (no cross-room bleed)

  // Boss room override — spawn one BOSS enemy, seal doors, skip normal SPAWN_TABLE.
  if (currentRoom.type === "BOSS") {
    var bossSpawn = currentRoom.spawnList[0];
    var bossX = bossSpawn ? (bossSpawn.tx + 0.5) * TILE_SIZE : (currentRoom.cols * TILE_SIZE) / 2;
    var bossY = bossSpawn ? (bossSpawn.ty + 0.5) * TILE_SIZE : (currentRoom.rows * TILE_SIZE) / 2;
    enemies.push({
      type: "BOSS",
      x: bossX, y: bossY,
      r: 18,
      hp: 15, maxHp: 15,
      speed: 80,
      alive: true,
      age: 0,
      state: "idle"
    });
    doorsSealed = true;
    bossBanner = 1.8; // ominous intro banner on boss-room entry
    playTone({ type: "sawtooth", freq: 110, endFreq: 165, dur: 0.6, gain: 0.18 });
    return;
  }

  // Shop room — no combat; populate shop inventory and open shop overlay.
  // One-time per room entry: build the catalog once and persist it on the room
  // so re-entering a cleared shop shows the already-purchased (sold) state
  // rather than a fresh restock (CR-01 — repurchase exploit guard).
  if (currentRoom.type === "SHOP") {
    if (!currentRoom.shopBuilt) {
      currentRoom.shopItems = [
        { name: "Health Restore", stat: "+30 HP",        cost: 40, sold: false,
          apply: function(p) { p.hp = Math.min(p.maxHp || 5, p.hp + 30); } },
        { name: "Damage Shard",   stat: "+5 bullet dmg", cost: 50, sold: false,
          apply: function(p) { p.bulletDmg = (p.bulletDmg || 1) + 5; } },
        { name: "Swiftness Coil", stat: "+30 speed",     cost: 50, sold: false,
          apply: function(p) { p.speed = (p.speed || 100) + 30; } }
      ];
      currentRoom.shopBuilt = true;
    }
    shopItems = currentRoom.shopItems; // restore persisted sold flags on re-entry
    gameState = GAME_STATE.SHOP;
    // Clear any in-flight room transition so the "in" fade does not stall while
    // the shop overlay is open and does not block doors on exit (WR-03).
    transition = null;
    return;
  }

  var types = SPAWN_TABLE[currentLevel ? currentLevel.levelNumber : 1] || SPAWN_TABLE[5];
  var list = currentRoom.spawnList;
  var count = Math.min(types.length, list.length);
  for (var i = 0; i < count; i++) {
    var entry = list[i];
    var wx = (entry.tx + 0.5) * TILE_SIZE;
    var wy = (entry.ty + 0.5) * TILE_SIZE;
    enemies.push({
      type: types[i],
      x: wx, y: wy,
      r: types[i] === "SNIPER" ? 10 :
         types[i] === "CRAWLER" ? 8 : 10,
      hp: types[i] === "STALKER" ? 2 :
          types[i] === "RUSHER"  ? 1 :
          types[i] === "AMBUSHER"? 2 :
          types[i] === "SENTINEL"? 3 :
          types[i] === "SNIPER"  ? 2 :
          types[i] === "CRAWLER" ? 2 : 2,
      maxHp: types[i] === "STALKER" ? 2 :
             types[i] === "RUSHER"  ? 1 :
             types[i] === "AMBUSHER"? 2 :
             types[i] === "SENTINEL"? 3 :
             types[i] === "SNIPER"  ? 2 :
             types[i] === "CRAWLER" ? 2 : 2,
      speed: types[i] === "STALKER" ? 55 :
             types[i] === "RUSHER"  ? 130 :
             types[i] === "AMBUSHER"? 75 :
             types[i] === "SENTINEL"? 0 :
             types[i] === "SNIPER"  ? 0 :
             types[i] === "CRAWLER" ? 65 : 55,
      alive: true,
      age: 0
    });
    // Initialize type-specific fields
    if (enemies[enemies.length - 1].type === "RUSHER") {
      var last = enemies[enemies.length - 1];
      last.dx = 0; last.dy = -1; // initial direction (will re-aim on first frame)
      last.stuckTimer = 0;
      last.lastX = last.x; last.lastY = last.y;
    }
    if (enemies[enemies.length - 1].type === "SENTINEL") {
      var sent = enemies[enemies.length - 1];
      sent.state = "idle";
      sent.stateTimer = 1.5; // seconds until first telegraph
    }
    if (enemies[enemies.length - 1].type === "SNIPER") {
      var sniper = enemies[enemies.length - 1];
      sniper.state = "idle";
      sniper.stateTimer = 2.0;
      sniper.aimDx = 0; sniper.aimDy = -1; // locked direction, set at aim entry
      sniper.beamEndX = 0; sniper.beamEndY = 0;
    }
    if (enemies[enemies.length - 1].type === "CRAWLER") {
      var craw = enemies[enemies.length - 1];
      craw.facing = Math.floor(Math.random() * 4); // 0=N 1=E 2=S 3=W
      craw.generation = 0;
    }
  }
  doorsSealed = true;

  // Elite room: buff all spawned enemies — 1.5× HP, 1.2× speed, orange glow flag.
  if (currentRoom.type === "ELITE") {
    for (var ei = 0; ei < enemies.length; ei++) {
      enemies[ei].hp    = Math.ceil(enemies[ei].hp    * 1.5);
      enemies[ei].maxHp = Math.ceil(enemies[ei].maxHp * 1.5);
      enemies[ei].speed = Math.round(enemies[ei].speed * 1.2);
      enemies[ei].elite = true;
    }
  }
}

// openDoors() — called when all enemies are destroyed.
// Clears the door seal, plays a tone, and triggers the CLEARED floater.
function openDoors() {
  roomsCleared += 1;
  if (currentRoom) currentRoom.cleared = true;
  doorsSealed = false;
  playTone({ type: "sine", freq: 660, endFreq: 880, dur: 0.22, gain: 0.12 });
  clearedFloater = { alpha: 1.0, timer: 1.5 };
  // Pop a cyan spark burst at each door tile so the doors visibly "unlock".
  if (currentRoom && currentRoom.grid) {
    var g = currentRoom.grid, cols = currentRoom.cols, rows = currentRoom.rows;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var v = g[r * cols + c];
        if (v >= 2 && v <= 5) {
          spawnParticleBurst((c + 0.5) * TILE_SIZE, (r + 0.5) * TILE_SIZE, COLORS.cyan);
        }
      }
    }
  }
}

// checkEnemiesClear() — called after bullet-enemy hits and from updateEnemies().
// Opens doors when all enemies are dead and doors are currently sealed.
// In Boss rooms, calls startBossClear() instead of openDoors().
function checkEnemiesClear() {
  if (!doorsSealed) return;
  var allDead = true;
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].alive) { allDead = false; break; }
  }
  if (allDead) {
    if (currentRoom && currentRoom.type === "BOSS") {
      startBossClear();
    } else {
      openDoors();
    }
  }
}

// startBossClear() — triggered when the Boss is defeated in a Boss room.
// Enters BOSS_CLEAR overlay state; advanceLevel() fires after the timer expires.
function startBossClear() {
  // Scatter 8 bonus gems from boss position as the big-defeat reward.
  var bossEnt = null;
  for (var bi = 0; bi < enemies.length; bi++) {
    if (enemies[bi].type === "BOSS") { bossEnt = enemies[bi]; break; }
  }
  if (bossEnt) {
    for (var gi = 0; gi < 8; gi++) { spawnGem(bossEnt.x, bossEnt.y); }
  }
  // Award the reward XP directly: the spawned gems are visual-only here because
  // the boss flow goes BOSS_CLEAR -> MODIFIER_DRAFT -> advanceLevel() (which wipes
  // gems = []) and updateGems() only collects during PLAYING, so the burst is never
  // walked over. 8 gems x 10 XP each (see updateGems) = guaranteed 80 XP on defeat.
  addXP(8 * 10);
  levelMapVisible = true;
  gameState = GAME_STATE.BOSS_CLEAR;
  bossClearTimer = 2.0;
  playTone({ type: "sine", freq: 440, endFreq: 880, dur: 0.5, gain: 0.18 });
}

// advanceLevel() — increments currentLevelNum, generates a new level, resets all room state.
function advanceLevel() {
  currentLevelNum += 1;
  var seed = Math.floor(Date.now() / 1000) + currentLevelNum * 997;
  generateLevel(currentLevelNum, seed);
  // Reset all per-room state
  enemies = []; gems = []; sentinelShots = []; bullets = [];
  doorsSealed = false; clearedFloater = null; levelUpFloater = null; transition = null;
  muzzleFlash = 0; hurtFlash = 0; shakeTrauma = 0; paused = false; bossBanner = 0;
  levelMapVisible = true;   // auto-show minimap on level entry for orientation
  mapAutoDismissed = false;
  // Place player at new Start room spawn point
  player.x = (currentRoom.spawnPoint.tx + 0.5) * TILE_SIZE;
  player.y = (currentRoom.spawnPoint.ty + 0.5) * TILE_SIZE;
  // Reset navigation/aim state
  distMap = null; lastPlayerTile = { r: -1, c: -1 };
  aimTarget = null; aimGrace = 0; fireCooldown = 0;
  initCamera();
  spawnEnemies();
  if (currentRoom && currentRoom.type === "START") currentRoom.cleared = true;
  gameState = GAME_STATE.PLAYING;
}

// addXP() — adds amount to xp; on level-up awards a skill point and opens skill select.
function addXP(amount) {
  xp += amount;
  // Bank skill points on level-up; do NOT force the skill-select modal open.
  // Auto-opening on every threshold made rapid gem pickups (esp. with the gem
  // magnet) reopen it endlessly. The player opens the tree on demand with S;
  // renderSkillPrompt() cues them when points are waiting. while() banks all
  // pending levels from a single large award (e.g. the boss XP burst).
  var leveled = false;
  while (xp >= xpToNext) {
    xp -= xpToNext;
    skillPoints += 1;
    leveled = true;
  }
  // Moment-of-impact feedback so a banked skill point reads instantly, even
  // though the skill tree stays closed until the player opens it (S/Tab).
  if (leveled) {
    levelUpFloater = { alpha: 1.0, timer: 1.4 };
    playTone({ type: "triangle", freq: 523, endFreq: 1047, dur: 0.28, gain: 0.14 });
  }
}

// investSkill(branchKey) — deducts a skill point and applies the next tier effect for the given branch.
// Checks fusion unlock conditions after every investment.
function investSkill(branchKey) {
  if (!player || skillPoints <= 0) return;
  var tiers = player.skillTiers;
  var tier = tiers[branchKey];
  if (tier === undefined) return;
  if (tier >= 4) return; // already maxed
  var skillDef = SKILL_TREE[branchKey][tier];
  if (!skillDef) return;
  if (skillPoints < skillDef.cost) return; // can't afford
  skillPoints -= skillDef.cost;
  skillDef.apply(player);
  tiers[branchKey] = tier + 1;
  // Check fusion unlock conditions
  for (var fi = 0; fi < FUSION_SKILLS.length; fi++) {
    var fusion = FUSION_SKILLS[fi];
    var b0 = fusion.branches[0];
    var b1 = fusion.branches[1];
    if (player.skillTiers[b0] >= 4 && player.skillTiers[b1] >= 4 &&
        player.fusionUnlocked.indexOf(fusion.name) === -1) {
      fusion.apply(player);
      player.fusionUnlocked.push(fusion.name);
    }
  }
}

// spawnGem(x, y) — creates a gem with random outward velocity at world position x,y.
function spawnGem(gx, gy) {
  var angle = Math.random() * Math.PI * 2;
  var speed = 60;
  gems.push({ x: gx, y: gy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, alive: true });
}

// updateGems(dt) — moves gems with exponential friction; collects gems near player.
function updateGems(dt) {
  if (!player) return;
  var friction = Math.pow(0.85, dt * 60);
  for (var i = gems.length - 1; i >= 0; i--) {
    var gem = gems[i];
    if (!gem.alive) { gems.splice(i, 1); continue; }
    gem.vx *= friction;
    gem.vy *= friction;
    gem.x += gem.vx * dt;
    gem.y += gem.vy * dt;
    // Magnet pull after the room is cleared — sweep gems to the player so
    // collection isn't a tedious lap. Full-room-diagonal radius => nothing stranded.
    if (!doorsSealed && currentRoom) {
      var mx = player.x - gem.x;
      var my = player.y - gem.y;
      var mlen = Math.sqrt(mx * mx + my * my);
      var roomDiag = Math.sqrt(
        Math.pow(currentRoom.cols * TILE_SIZE, 2) + Math.pow(currentRoom.rows * TILE_SIZE, 2)
      );
      if (mlen > 0 && mlen < roomDiag) {
        gem.vx += (mx / mlen) * 200 * dt;
        gem.vy += (my / mlen) * 200 * dt;
      }
      var gspd = Math.sqrt(gem.vx * gem.vx + gem.vy * gem.vy);
      if (gspd > 220) { gem.vx = gem.vx / gspd * 220; gem.vy = gem.vy / gspd * 220; }
    }
    var gx = gem.x - player.x;
    var gy = gem.y - player.y;
    if (Math.sqrt(gx * gx + gy * gy) < 16) {
      gem.alive = false;
      // Cascade chime: rapid consecutive pickups climb in pitch for a satisfying sweep.
      var nowMs = (typeof performance !== "undefined") ? performance.now() : 0;
      if (nowMs - lastGemPickupTime < 150) {
        gemPickupStreak = Math.min(gemPickupStreak + 1, 6);
      } else {
        gemPickupStreak = 0;
      }
      lastGemPickupTime = nowMs;
      playTone({
        type: "sine",
        freq: Math.min(660 + gemPickupStreak * 110, 990),
        endFreq: Math.min(880 + gemPickupStreak * 110, 1100),
        dur: 0.07, gain: 0.07,
      });
      addXP(10);
      gems.splice(i, 1);
    }
  }
}

// renderGems() — draws gems as gold glow circles. Called inside camera sandwich.
function renderGems() {
  for (var i = 0; i < gems.length; i++) {
    var gem = gems[i];
    if (!gem.alive) continue;
    glowCircle(gem.x, gem.y, 4, COLORS.gold, 14);
  }
}

// registerPlayerHit() — shared feedback for every point of contact damage:
// screen shake, a red hurt flash, and a low thud. Called from all three damage
// sites (sentinel shot, sniper shot, enemy contact) right after hp is decremented.
function registerPlayerHit() {
  shakeTrauma = Math.min(1, shakeTrauma + 0.45);
  hurtFlash = 1;
  playTone({ type: "square", freq: 180, endFreq: 70, dur: 0.16, gain: 0.16 });
}

// updateSentinelShots(dt) — moves sentinel homing projectiles toward player.
// Re-aims each frame; wall hit or 4s lifetime destroys shot.
// Player contact removes shot without damage (HP system added in Phase 44).
function updateSentinelShots(dt) {
  if (!currentRoom || !currentRoom.grid || !player) return;
  var cols = currentRoom.cols;
  var rows = currentRoom.rows;
  for (var i = sentinelShots.length - 1; i >= 0; i--) {
    var s = sentinelShots[i];
    if (!s.alive) { sentinelShots.splice(i, 1); continue; }
    s.age += dt;
    if (s.age >= 4.0) { sentinelShots.splice(i, 1); continue; }

    // Re-aim toward player
    var hdx = player.x - s.x;
    var hdy = player.y - s.y;
    var hlen = Math.sqrt(hdx * hdx + hdy * hdy);
    if (hlen > 0) {
      s.vx = (hdx / hlen) * 120;
      s.vy = (hdy / hlen) * 120;
    }

    var nx = s.x + s.vx * dt;
    var ny = s.y + s.vy * dt;

    // Wall check
    var tc = Math.floor(nx / TILE_SIZE);
    var tr = Math.floor(ny / TILE_SIZE);
    if (tc < 0 || tc >= cols || tr < 0 || tr >= rows ||
        currentRoom.grid[tr * cols + tc] === 1) {
      sentinelShots.splice(i, 1);
      continue;
    }

    s.x = nx;
    s.y = ny;

    // Player contact — deal damage if not invulnerable, always remove shot
    var pdx = s.x - player.x;
    var pdy = s.y - player.y;
    if (Math.sqrt(pdx * pdx + pdy * pdy) < (4 + player.r)) {
      if (player.invuln <= 0) {
        player.hp -= 1;
        registerPlayerHit();
        var sInvDur = player.invulnDuration || INVULN_DURATION;
        player.invuln = sInvDur;
        if (player.hp <= 0) gameState = GAME_STATE.DEAD;
      }
      sentinelShots.splice(i, 1);
    }
  }
}

// updateEnemies(dt) — routes each alive enemy to its type-specific movement.
// Stalker: BFS gradient descent via distMap. Rusher: charge+wall-bounce.
// AMBUSHER and SENTINEL handled in Plan 03.
function updateEnemies(dt) {
  if (!currentRoom || !player) { checkEnemiesClear(); return; }
  var cols = currentRoom.cols;

  for (var i = 0; i < enemies.length; i++) {
    var e = enemies[i];
    if (!e.alive) continue;
    e.age += dt;
    if (e.hitFlash > 0) e.hitFlash -= dt;

    if (e.type === "STALKER") {
      // BFS gradient descent — pick adjacent tile with lowest distMap value
      if (distMap === null) continue; // guard: BFS not yet computed
      var er = Math.floor(e.y / TILE_SIZE);
      var ec = Math.floor(e.x / TILE_SIZE);
      var best = Infinity;
      var bestRow = er;
      var bestCol = ec;
      var dirs = [[-1,0],[1,0],[0,-1],[0,1]];
      for (var d = 0; d < dirs.length; d++) {
        var nr = er + dirs[d][0];
        var nc = ec + dirs[d][1];
        if (nr < 0 || nr >= currentRoom.rows || nc < 0 || nc >= cols) continue;
        var idx = nr * cols + nc;
        if (currentRoom.grid[idx] === 1) continue; // wall tile
        var val = distMap[idx];
        if (val < best) { best = val; bestRow = nr; bestCol = nc; }
      }
      // Move toward center of best tile
      var tx = (bestCol + 0.5) * TILE_SIZE;
      var ty = (bestRow + 0.5) * TILE_SIZE;
      var ddx = tx - e.x;
      var ddy = ty - e.y;
      var dlen = Math.sqrt(ddx * ddx + ddy * ddy);
      if (dlen > 0) {
        var mx = (ddx / dlen) * e.speed * dt;
        var my = (ddy / dlen) * e.speed * dt;
        // Solid check (same axis-split pattern as movePlayer)
        var enx = e.x + mx;
        var eny = e.y + my;
        var tc2 = Math.floor(enx / TILE_SIZE);
        var tr2 = Math.floor(e.y / TILE_SIZE);
        if (tc2 >= 0 && tc2 < cols && tr2 >= 0 && tr2 < currentRoom.rows &&
            currentRoom.grid[tr2 * cols + tc2] !== 1) {
          e.x = enx;
        }
        var tc3 = Math.floor(e.x / TILE_SIZE);
        var tr3 = Math.floor((e.y + my) / TILE_SIZE);
        if (tc3 >= 0 && tc3 < cols && tr3 >= 0 && tr3 < currentRoom.rows &&
            currentRoom.grid[tr3 * cols + tc3] !== 1) {
          e.y = e.y + my;
        }
      }

    } else if (e.type === "RUSHER") {
      // Initialize dx/dy if missing (safety guard)
      if (e.dx === undefined) { e.dx = 0; e.dy = -1; e.stuckTimer = 0; e.lastX = e.x; e.lastY = e.y; }

      // Stuck rescue: if barely moved in last 2s, re-aim at player
      e.stuckTimer += dt;
      if (e.stuckTimer >= 2.0) {
        e.stuckTimer = 0;
        var sdx = player.x - e.x;
        var sdy = player.y - e.y;
        var slen = Math.sqrt(sdx * sdx + sdy * sdy);
        if (slen > 0) { e.dx = sdx / slen; e.dy = sdy / slen; }
        e.lastX = e.x; e.lastY = e.y;
      }

      // Re-aim toward player each frame
      var rdx = player.x - e.x;
      var rdy = player.y - e.y;
      var rlen = Math.sqrt(rdx * rdx + rdy * rdy);
      if (rlen > 0) { e.dx = rdx / rlen; e.dy = rdy / rlen; }

      // Attempt move; wall-bounce on X then Y
      var rnx = e.x + e.dx * e.speed * dt;
      var rny = e.y + e.dy * e.speed * dt;
      var rtcx = Math.floor(rnx / TILE_SIZE);
      var rtry = Math.floor(e.y / TILE_SIZE);
      if (rtcx < 0 || rtcx >= cols || rtry < 0 || rtry >= currentRoom.rows ||
          currentRoom.grid[rtry * cols + rtcx] === 1) {
        e.dx *= -1;
        rnx = e.x + e.dx * e.speed * dt;
      }
      var rtcx2 = Math.floor(e.x / TILE_SIZE);
      var rtry2 = Math.floor(rny / TILE_SIZE);
      if (rtcx2 < 0 || rtcx2 >= cols || rtry2 < 0 || rtry2 >= currentRoom.rows ||
          currentRoom.grid[rtry2 * cols + rtcx2] === 1) {
        e.dy *= -1;
        rny = e.y + e.dy * e.speed * dt;
      }
      e.x = rnx;
      e.y = rny;

    } else if (e.type === "AMBUSHER") {
      // Velocity-prediction intercept
      var apx = player.x + player.vx * 1.5;
      var apy = player.y + player.vy * 1.5;
      // Clamp predicted position to room interior (one tile margin)
      apx = Math.max(TILE_SIZE, Math.min((currentRoom.cols - 1) * TILE_SIZE, apx));
      apy = Math.max(TILE_SIZE, Math.min((currentRoom.rows - 1) * TILE_SIZE, apy));
      var adx = apx - e.x;
      var ady = apy - e.y;
      var alen = Math.sqrt(adx * adx + ady * ady);
      if (alen > 0) {
        var amx = (adx / alen) * e.speed * dt;
        var amy = (ady / alen) * e.speed * dt;
        // Axis-split solid check
        var anx = e.x + amx;
        var any = e.y + amy;
        var atcx = Math.floor(anx / TILE_SIZE);
        var atr  = Math.floor(e.y / TILE_SIZE);
        if (atcx >= 0 && atcx < cols && atr >= 0 && atr < currentRoom.rows &&
            currentRoom.grid[atr * cols + atcx] !== 1) {
          e.x = anx;
        }
        var atcx2 = Math.floor(e.x / TILE_SIZE);
        var atr2  = Math.floor((e.y + amy) / TILE_SIZE);
        if (atcx2 >= 0 && atcx2 < cols && atr2 >= 0 && atr2 < currentRoom.rows &&
            currentRoom.grid[atr2 * cols + atcx2] !== 1) {
          e.y = e.y + amy;
        }
      }

    } else if (e.type === "SENTINEL") {
      // Stationary — only runs state machine
      e.stateTimer = (e.stateTimer || 1.5) - dt;
      if (e.stateTimer <= 0) {
        if (e.state === "idle") {
          e.state = "telegraph";
          e.stateTimer = 0.8;
        } else if (e.state === "telegraph") {
          e.state = "fire";
          e.stateTimer = 0; // fire is instantaneous — handled below
        } else if (e.state === "cooldown") {
          e.state = "idle";
          e.stateTimer = 1.5;
        }
      }
      // Handle fire state immediately (not timer-gated — fires on the frame state changes)
      if (e.state === "fire") {
        var fdx = player.x - e.x;
        var fdy = player.y - e.y;
        var flen = Math.sqrt(fdx * fdx + fdy * fdy);
        if (flen > 0) {
          sentinelShots.push({
            x: e.x, y: e.y,
            vx: (fdx / flen) * 120,
            vy: (fdy / flen) * 120,
            alive: true,
            age: 0
          });
        }
        e.state = "cooldown";
        e.stateTimer = 2.0;
      }

    } else if (e.type === "SNIPER") {
      // SNIPER state machine: idle → aim → fire → cooldown
      if (e.state === "idle") {
        e.stateTimer -= dt;
        if (e.stateTimer <= 0) {
          // Lock cardinal direction toward player at aim entry
          var spx = player.x - e.x;
          var spy = player.y - e.y;
          var spl = Math.sqrt(spx * spx + spy * spy);
          if (spl > 0) { spx /= spl; spy /= spl; }
          var cardinals = [[0, -1], [1, 0], [0, 1], [-1, 0]];
          var bestDot = -Infinity;
          var bestCard = [0, -1];
          for (var ci = 0; ci < cardinals.length; ci++) {
            var dot = spx * cardinals[ci][0] + spy * cardinals[ci][1];
            if (dot > bestDot) { bestDot = dot; bestCard = cardinals[ci]; }
          }
          e.aimDx = bestCard[0]; e.aimDy = bestCard[1];
          e.state = "aim"; e.stateTimer = 1.2;
        }
      } else if (e.state === "aim") {
        e.stateTimer -= dt;
        if (e.stateTimer <= 0) {
          e.state = "fire"; e.stateTimer = 0;
        }
      } else if (e.state === "fire") {
        // March beam from sniper along aim direction to find wall; step 4px, max 400 steps
        var snx = e.x; var sny = e.y;
        var scols = currentRoom.cols; var srows = currentRoom.rows;
        var steps = 0;
        while (steps < 400) {
          snx += e.aimDx * 4; sny += e.aimDy * 4;
          var stc = Math.floor(snx / TILE_SIZE); var str = Math.floor(sny / TILE_SIZE);
          if (stc < 0 || stc >= scols || str < 0 || str >= srows) break;
          if (currentRoom.grid[str * scols + stc] === 1) break;
          steps++;
        }
        e.beamEndX = snx; e.beamEndY = sny;
        // Hit-test player against beam line segment using perpendicular distance
        var bex = e.beamEndX - e.x; var bey = e.beamEndY - e.y;
        var blen2 = bex * bex + bey * bey;
        var t = blen2 > 0 ? ((player.x - e.x) * bex + (player.y - e.y) * bey) / blen2 : 0;
        var t2 = Math.max(0, Math.min(1, t));
        var closestX = e.x + t2 * bex; var closestY = e.y + t2 * bey;
        var perpDist = Math.sqrt((player.x - closestX) * (player.x - closestX) + (player.y - closestY) * (player.y - closestY));
        if (perpDist < 6 && player.invuln <= 0) {
          player.hp -= 1;
          registerPlayerHit();
          var snInvDur = player.invulnDuration || INVULN_DURATION;
          player.invuln = snInvDur;
          if (player.hp <= 0) gameState = GAME_STATE.DEAD;
        }
        e.state = "cooldown"; e.stateTimer = 2.5;
      } else if (e.state === "cooldown") {
        e.stateTimer -= dt;
        if (e.stateTimer <= 0) {
          e.state = "idle"; e.stateTimer = 2.0;
        }
      }

    } else if (e.type === "CRAWLER") {
      // Right-hand rule wall-hugging movement
      // Facing index: 0=N 1=E 2=S 3=W
      var DIRS = [[0,-1],[1,0],[0,1],[-1,0]];
      // Passability probe: checks center of tile at (px, py)
      var probe = function(px, py) {
        var ptc = Math.floor(px / TILE_SIZE);
        var ptr = Math.floor(py / TILE_SIZE);
        return ptc >= 0 && ptc < cols && ptr >= 0 && ptr < currentRoom.rows &&
               currentRoom.grid[ptr * cols + ptc] !== 1;
      };
      // Try turn-right first, then forward, then turn-left, then U-turn
      var cStep = e.speed * dt;
      var rightFacing = (e.facing + 1) % 4;
      var leftFacing  = (e.facing + 3) % 4;
      var backFacing  = (e.facing + 2) % 4;
      if (probe(e.x + DIRS[rightFacing][0] * cStep, e.y + DIRS[rightFacing][1] * cStep)) {
        e.facing = rightFacing;
      } else if (probe(e.x + DIRS[e.facing][0] * cStep, e.y + DIRS[e.facing][1] * cStep)) {
        // keep current facing
      } else if (probe(e.x + DIRS[leftFacing][0] * cStep, e.y + DIRS[leftFacing][1] * cStep)) {
        e.facing = leftFacing;
      } else {
        e.facing = backFacing;
      }
      // Move in chosen direction with axis-split solid check
      var cnx = e.x + DIRS[e.facing][0] * cStep;
      var cny = e.y + DIRS[e.facing][1] * cStep;
      var ctcx = Math.floor(cnx / TILE_SIZE);
      var ctrx = Math.floor(e.y / TILE_SIZE);
      if (ctcx >= 0 && ctcx < cols && ctrx >= 0 && ctrx < currentRoom.rows &&
          currentRoom.grid[ctrx * cols + ctcx] !== 1) {
        e.x = cnx;
      }
      var ctcx2 = Math.floor(e.x / TILE_SIZE);
      var ctry2 = Math.floor(cny / TILE_SIZE);
      if (ctcx2 >= 0 && ctcx2 < cols && ctry2 >= 0 && ctry2 < currentRoom.rows &&
          currentRoom.grid[ctry2 * cols + ctcx2] !== 1) {
        e.y = cny;
      }

    } else if (e.type === "BOSS") {
      // BFS gradient descent — identical to STALKER movement
      if (distMap === null) continue; // guard: BFS not yet computed
      var ber = Math.floor(e.y / TILE_SIZE);
      var bec = Math.floor(e.x / TILE_SIZE);
      var bbest = Infinity;
      var bbestRow = ber;
      var bbestCol = bec;
      var bdirs = [[-1,0],[1,0],[0,-1],[0,1]];
      for (var bd = 0; bd < bdirs.length; bd++) {
        var bnr = ber + bdirs[bd][0];
        var bnc = bec + bdirs[bd][1];
        if (bnr < 0 || bnr >= currentRoom.rows || bnc < 0 || bnc >= cols) continue;
        var bidx = bnr * cols + bnc;
        if (currentRoom.grid[bidx] === 1) continue; // wall tile
        var bval = distMap[bidx];
        if (bval < bbest) { bbest = bval; bbestRow = bnr; bbestCol = bnc; }
      }
      // Move toward center of best tile
      var btx = (bbestCol + 0.5) * TILE_SIZE;
      var bty = (bbestRow + 0.5) * TILE_SIZE;
      var bddx = btx - e.x;
      var bddy = bty - e.y;
      var bdlen = Math.sqrt(bddx * bddx + bddy * bddy);
      if (bdlen > 0) {
        var bmx = (bddx / bdlen) * e.speed * dt;
        var bmy = (bddy / bdlen) * e.speed * dt;
        // Axis-split solid check
        var benx = e.x + bmx;
        var beny = e.y + bmy;
        var btc2 = Math.floor(benx / TILE_SIZE);
        var btr2 = Math.floor(e.y / TILE_SIZE);
        if (btc2 >= 0 && btc2 < cols && btr2 >= 0 && btr2 < currentRoom.rows &&
            currentRoom.grid[btr2 * cols + btc2] !== 1) {
          e.x = benx;
        }
        var btc3 = Math.floor(e.x / TILE_SIZE);
        var btr3 = Math.floor((e.y + bmy) / TILE_SIZE);
        if (btc3 >= 0 && btc3 < cols && btr3 >= 0 && btr3 < currentRoom.rows &&
            currentRoom.grid[btr3 * cols + btc3] !== 1) {
          e.y = e.y + bmy;
        }
      }
    }

    // Enemy contact damage — runs for all alive enemies after type-specific movement
    var cdx = player.x - e.x;
    var cdy = player.y - e.y;
    if (Math.sqrt(cdx * cdx + cdy * cdy) < (e.r + player.r) && player.invuln <= 0) {
      player.hp -= ENEMY_CONTACT_DAMAGE;
      registerPlayerHit();
      var invDur = player.invulnDuration || INVULN_DURATION;
      player.invuln = invDur;
      if (player.hp <= 0) gameState = GAME_STATE.DEAD;
    }
  }

  checkEnemiesClear();
}

// enemyColorFor(type) — the glow color used for an enemy class (for death particles).
function enemyColorFor(type) {
  if (type === "STALKER") return COLORS.purple;
  if (type === "RUSHER" || type === "BOSS") return COLORS.pink;
  if (type === "SENTINEL") return COLORS.gold;
  if (type === "SNIPER") return COLORS.cyan;
  if (type === "CRAWLER") return "#ffd700";
  return COLORS.white; // AMBUSHER + default
}

// spawnParticleBurst(x, y, color) — 6 outward sparks on enemy death (array capped at 60).
function spawnParticleBurst(x, y, color) {
  for (var pi = 0; pi < 6; pi++) {
    if (particles.length >= 60) break;
    particles.push({
      x: x, y: y,
      vx: (Math.random() * 2 - 1) * 90,
      vy: (Math.random() * 2 - 1) * 90,
      life: 0.35, maxLife: 0.35, color: color,
    });
  }
}

// updateParticles(dt) — advance and expire death-burst particles.
function updateParticles(dt) {
  for (var pi = particles.length - 1; pi >= 0; pi--) {
    var p = particles[pi];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= dt;
    if (p.life <= 0) particles.splice(pi, 1);
  }
}

// renderParticles() — draw death-burst particles (inside the camera transform).
function renderParticles() {
  for (var pi = 0; pi < particles.length; pi++) {
    var p = particles[pi];
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
    glowCircle(p.x, p.y, 2, p.color, 6);
    ctx.restore();
  }
}

// renderEnemies() — type-aware: purple Stalker, pink Rusher; AMBUSHER/SENTINEL stubs for Plan 03.
function renderEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    var e = enemies[i];
    if (!e.alive) continue;
    // Hit-flash: brief white halo when recently damaged (set on hit, decays in updateEnemies).
    if (e.hitFlash > 0) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, e.hitFlash / 0.08));
      glowCircle(e.x, e.y, (e.r || 8) * 1.6, COLORS.white, 12);
      ctx.restore();
    }
    if (e.type === "STALKER") {
      glowCircle(e.x, e.y, 8, COLORS.purple, 14);
    } else if (e.type === "RUSHER") {
      glowCircle(e.x, e.y, 7, COLORS.pink, 18);
    } else if (e.type === "AMBUSHER") {
      ctx.save();
      ctx.globalAlpha = 0.5 + 0.5 * Math.sin(e.age * 4);
      glowCircle(e.x, e.y, 7, COLORS.white, 10);
      ctx.restore();
    } else if (e.type === "SENTINEL") {
      glowCircle(e.x, e.y, 9, COLORS.gold, 12);
      // Draw telegraph reticle at player position when in telegraph state
      if (e.state === "telegraph" && e.stateTimer !== undefined && player) {
        var elapsed = 0.8 - e.stateTimer;  // 0→0.8s
        var progress = Math.min(1, elapsed / 0.8);
        var ringR = 8 + (14 - 8) * progress; // 8→14 px
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = COLORS.white;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(player.x, player.y, ringR, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    } else if (e.type === "SNIPER") {
      // Cyan body — stationary; crosshair ticks break the "circle = player" visual
      glowCircle(e.x, e.y, 8, COLORS.cyan, 16);
      ctx.save();
      ctx.strokeStyle = COLORS.cyan;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.moveTo(e.x - 13, e.y); ctx.lineTo(e.x - 9, e.y);
      ctx.moveTo(e.x + 9,  e.y); ctx.lineTo(e.x + 13, e.y);
      ctx.moveTo(e.x, e.y - 13); ctx.lineTo(e.x, e.y - 9);
      ctx.moveTo(e.x, e.y + 9);  ctx.lineTo(e.x, e.y + 13);
      ctx.stroke();
      ctx.restore();
      // Telegraph beam during aim state — pink line that brightens over 1.2s
      if (e.state === "aim" && e.aimDx !== undefined) {
        // Compute beam endpoint inline (same march as fire state)
        var sbx = e.x; var sby = e.y;
        var sbcols = currentRoom.cols; var sbrows = currentRoom.rows;
        var sbsteps = 0;
        while (sbsteps < 400) {
          sbx += e.aimDx * 4; sby += e.aimDy * 4;
          var sbtc = Math.floor(sbx / TILE_SIZE); var sbtr = Math.floor(sby / TILE_SIZE);
          if (sbtc < 0 || sbtc >= sbcols || sbtr < 0 || sbtr >= sbrows) break;
          if (currentRoom.grid[sbtr * sbcols + sbtc] === 1) break;
          sbsteps++;
        }
        var prog = Math.min(1, (1.2 - e.stateTimer) / 1.2);
        ctx.save();
        ctx.globalAlpha = 0.3 + 0.3 * prog;
        ctx.strokeStyle = COLORS.pink;
        ctx.lineWidth = 1 + prog;
        ctx.beginPath();
        ctx.moveTo(e.x, e.y);
        ctx.lineTo(sbx, sby);
        ctx.stroke();
        ctx.restore();
      }
      // Beam flash on fire frame
      if (e.state === "fire") {
        ctx.save();
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = COLORS.pink;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(e.x, e.y);
        ctx.lineTo(e.beamEndX || e.x, e.beamEndY || e.y);
        ctx.stroke();
        ctx.restore();
      }
    } else if (e.type === "CRAWLER") {
      // Amber/gold glow — distinct from the purple STALKER and from the orange
      // (#ff8c00) elite ring, so CRAWLERs read clearly at a glance.
      // Parent (generation=0): larger glow; sub-Crawler (generation=1): smaller.
      if (e.generation === 0) {
        glowCircle(e.x, e.y, 8, "#ffd700", 14);
      } else {
        glowCircle(e.x, e.y, 5, "#ffd700", 9);
      }
    } else if (e.type === "BOSS") {
      // Core body — large pink glow
      glowCircle(e.x, e.y, 18, COLORS.pink, 24);
      // Pulsing outer ring
      var pulse = 18 + 6 * Math.sin(e.age * 4);
      ctx.save();
      ctx.strokeStyle = COLORS.pink;
      ctx.globalAlpha = 0.5 * (0.5 + 0.5 * Math.sin(e.age * 4));
      ctx.lineWidth = 2;
      ctx.shadowColor = COLORS.pink;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(e.x, e.y, pulse, 0, TAU);
      ctx.stroke();
      ctx.globalAlpha = 1.0;
      ctx.restore();
    } else {
      glowCircle(e.x, e.y, e.r - 2, COLORS.white, 10);
    }
    if (e.elite) {
      ctx.save();
      ctx.strokeStyle = COLORS.orange;
      ctx.shadowColor = COLORS.orange;
      ctx.shadowBlur = 10;
      ctx.globalAlpha = 0.8;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r + 5, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
  }
}

// renderSentinelShots() — draws sentinel projectiles (stub; populated in Wave 3).
function renderSentinelShots() {
  for (var i = 0; i < sentinelShots.length; i++) {
    var s = sentinelShots[i];
    if (!s.alive) continue;
    glowCircle(s.x, s.y, 4, COLORS.purple, 14);
  }
}

// renderClearedFloater() — draws the "CLEARED" text overlay at screen center.
// Timer decrement handled in update(dt). Called outside the camera sandwich.
function renderClearedFloater() {
  if (!clearedFloater || clearedFloater.alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = clearedFloater.alpha;
  ctx.font = "bold 32px 'Segoe UI', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = COLORS.cyan;
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 20;
  ctx.fillText("CLEARED", W / 2, H / 2);
  ctx.restore();
}

// renderLevelUpFloater() — gold "LEVEL UP" cue shown briefly when a skill point is
// banked. Offset below center to avoid overlapping the "CLEARED" floater. Timer
// decrement handled in update(dt). Called outside the camera sandwich.
function renderLevelUpFloater() {
  if (!levelUpFloater || levelUpFloater.alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = levelUpFloater.alpha;
  ctx.font = "bold 28px 'Segoe UI', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = COLORS.gold;
  ctx.shadowColor = COLORS.gold;
  ctx.shadowBlur = 20;
  ctx.fillText("LEVEL UP", W / 2, H / 2 + 70);
  ctx.restore();
}

// checkDoorTraversal() — detects when the player steps onto a door tile and starts
// a fade-out transition toward the connected room. Only fires when doors are open
// and no transition is already in progress.
function checkDoorTraversal() {
  if (!player || !currentRoom || doorsSealed || transition) return;
  var tc = Math.floor(player.x / TILE_SIZE);
  var tr = Math.floor(player.y / TILE_SIZE);
  if (tc < 0 || tc >= currentRoom.cols || tr < 0 || tr >= currentRoom.rows) return;
  var tileVal = currentRoom.grid[tr * currentRoom.cols + tc];
  if (tileVal >= 2 && tileVal <= 5) {
    var dirMap = { 2: "N", 3: "E", 4: "S", 5: "W" };
    var dir = dirMap[tileVal];
    var slotDelta = { N: -4, E: 1, S: 4, W: -1 };
    var delta = slotDelta[dir];
    var targetSlot = currentRoom.slotIdx + delta;

    // Find target room by slot index
    var targetRoom = null;
    var rooms = currentLevel.rooms;
    for (var i = 0; i < rooms.length; i++) {
      if (rooms[i].slotIdx === targetSlot) { targetRoom = rooms[i]; break; }
    }
    if (!targetRoom) return;

    // Verify the connection exists in currentLevel.connections (keys stored as "A-B" smaller-first)
    var a = Math.min(currentRoom.slotIdx, targetSlot);
    var b = Math.max(currentRoom.slotIdx, targetSlot);
    var connKey = a + "-" + b;
    if (!currentLevel.connections[connKey]) return;

    transition = { phase: "out", timer: 0.25, duration: 0.25, targetRoom: targetRoom };
    playTone({ type: "sine", freq: 300, endFreq: 150, dur: 0.20, gain: 0.10 });
  }
}

// updateTransition(dt) — advances the fade-out/fade-in timer.
// On fade-out completion: swaps room, resets orb state, repositions player, restarts camera.
// On fade-in completion: clears the transition object.
function updateTransition(dt) {
  if (!transition) return;
  transition.timer -= dt;
  if (transition.timer <= 0) {
    if (transition.phase === "out") {
      currentRoom = transition.targetRoom;
      enemies = []; gems = []; sentinelShots = [];
      doorsSealed = false;
      clearedFloater = null;
      aimTarget = null; bullets = [];
      distMap = null;
      lastPlayerTile = { r: -1, c: -1 };
      player.x = (currentRoom.spawnPoint.tx + 0.5) * TILE_SIZE;
      player.y = (currentRoom.spawnPoint.ty + 0.5) * TILE_SIZE;
      initCamera();
      spawnEnemies();
      transition = { phase: "in", timer: 0.25, duration: 0.25, targetRoom: null };
    } else if (transition.phase === "in") {
      transition = null;
    }
  }
}

// renderTransitionOverlay() — draws a black fullscreen rect at computed alpha.
// Out phase: fades to black (0→1). In phase: fades from black (1→0).
// Called last in renderPlaying() so it sits on top of everything.
function renderTransitionOverlay() {
  if (!transition) return;
  var alpha;
  if (transition.phase === "out") {
    alpha = 1 - transition.timer / transition.duration;
  } else {
    alpha = transition.timer / transition.duration;
  }
  alpha = Math.max(0, Math.min(1, alpha));
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

// initCamera() — called once per room entry (after player is placed).
// Determines whether the room fits on screen (locked mode) or needs to scroll.
// Locked mode: camera.tx/ty center the room on canvas and never change.
// Scroll mode: camera lerps toward keeping player centered, clamped to room bounds.
function initCamera() {
  if (!currentRoom || !player) return;
  var roomW = currentRoom.cols * TILE_SIZE;
  var roomH = currentRoom.rows * TILE_SIZE;
  var locked = (roomW <= W - 80) && (roomH <= H - 80);

  var tx, ty;
  if (locked) {
    tx = Math.floor((W - roomW) / 2);
    ty = Math.floor((H - roomH) / 2);
  } else {
    // Start centered on player, clamped to room bounds
    var rawTx = W / 2 - player.x;
    var rawTy = H / 2 - player.y;
    var minTx = W - roomW;
    var maxTx = 0;
    var minTy = H - roomH;
    var maxTy = 0;
    tx = Math.max(minTx, Math.min(maxTx, rawTx));
    ty = Math.max(minTy, Math.min(maxTy, rawTy));
  }

  camera = {
    tx: tx,
    ty: ty,
    locked: locked,
  };

  camera.begin = function(c) {
    c.save();
    c.translate(Math.round(camera.tx), Math.round(camera.ty));
    if (shakeTrauma > 0.05) {
      // Non-harmonic sin/cos for smooth oscillating shake (not random teleport jitter).
      var mag = shakeTrauma * shakeTrauma * 6;
      var st = Date.now() / 1000;
      c.translate(Math.sin(st * 47) * mag, Math.cos(st * 31) * mag);
    }
  };

  camera.end = function(c) {
    c.restore();
  };
}

// updateCamera() — called each frame from update(dt).
// Lock mode: no-op (tx/ty are fixed).
// Scroll mode: lerp toward player-center target (factor 0.10), clamped to room bounds.
function updateCamera() {
  if (!camera || !player || !currentRoom) return;
  if (camera.locked) return;

  var targetTx = W / 2 - player.x;
  var targetTy = H / 2 - player.y;

  var roomW = currentRoom.cols * TILE_SIZE;
  var roomH = currentRoom.rows * TILE_SIZE;
  var minTx = W - roomW;
  var maxTx = 0;
  var minTy = H - roomH;
  var maxTy = 0;

  // If room fits the axis (minT > maxT = 0), center it rather than scroll it
  if (minTx > maxTx) {
    targetTx = Math.floor((W - roomW) / 2);
  } else {
    targetTx = Math.max(minTx, Math.min(maxTx, targetTx));
  }
  if (minTy > maxTy) {
    targetTy = Math.floor((H - roomH) / 2);
  } else {
    targetTy = Math.max(minTy, Math.min(maxTy, targetTy));
  }

  camera.tx += (targetTx - camera.tx) * 0.10;
  camera.ty += (targetTy - camera.ty) * 0.10;
}

function movePlayer(dt) {
  if (!player || !currentRoom || !currentRoom.grid) return;

  // Build direction vector from WASD / arrow keys
  var dx = 0;
  var dy = 0;
  if (keys["w"] || keys["W"] || keys["ArrowUp"])    dy -= 1;
  if (keys["s"] || keys["S"] || keys["ArrowDown"])  dy += 1;
  if (keys["a"] || keys["A"] || keys["ArrowLeft"])  dx -= 1;
  if (keys["d"] || keys["D"] || keys["ArrowRight"]) dx += 1;

  // Normalize diagonal movement
  if (dx !== 0 && dy !== 0) {
    var inv = 1 / Math.sqrt(2);
    dx *= inv;
    dy *= inv;
  }

  var spd = player.speed * dt;

  // Inner solid-tile helper: returns true if world point (wx, wy) is inside a wall
  function solid(wx, wy) {
    var tc = Math.floor(wx / TILE_SIZE);
    var tr = Math.floor(wy / TILE_SIZE);
    if (tc < 0 || tr < 0 || tc >= currentRoom.cols || tr >= currentRoom.rows) return true;
    return currentRoom.grid[tr * currentRoom.cols + tc] === 1;
  }

  var cr = 4; // collision radius (slightly smaller than render radius)
  var nx = player.x + dx * spd;
  var ny = player.y + dy * spd;

  // Axis-split collision: test X movement independently
  if (solid(nx - cr, player.y) || solid(nx + cr, player.y)) {
    nx = player.x; // cancel horizontal move
  }
  // Test Y movement independently
  if (solid(player.x, ny - cr) || solid(player.x, ny + cr)) {
    ny = player.y; // cancel vertical move
  }

  player.vx = (nx - player.x) / (dt > 0 ? dt : 0.016);
  player.vy = (ny - player.y) / (dt > 0 ? dt : 0.016);
  player.x = nx;
  player.y = ny;
}

// computeDistMap() — BFS distance field from player tile.
// Populates distMap (Float32Array) with hop-count distances; skips recompute if
// player tile unchanged. Uses head-pointer queue for O(1) dequeue (avoids Array.shift).
function computeDistMap() {
  if (!currentRoom || !player) return;
  var pr = Math.floor(player.y / TILE_SIZE);
  var pc = Math.floor(player.x / TILE_SIZE);
  if (pr === lastPlayerTile.r && pc === lastPlayerTile.c) return;
  lastPlayerTile.r = pr;
  lastPlayerTile.c = pc;
  var rows = currentRoom.rows;
  var cols = currentRoom.cols;
  distMap = new Float32Array(rows * cols).fill(Infinity);
  var queue = new Array(rows * cols);
  var head = 0, tail = 0;
  if (currentRoom.grid[pr * cols + pc] !== 1) {
    distMap[pr * cols + pc] = 0;
    queue[tail++] = pr * cols + pc;
  }
  var nbOffsets = [-cols, cols, -1, 1]; // N, S, W, E
  while (head < tail) {
    var cur = queue[head++];
    var cr = Math.floor(cur / cols);
    var cc = cur % cols;
    for (var di = 0; di < 4; di++) {
      var nb = cur + nbOffsets[di];
      if (nb < 0 || nb >= rows * cols) continue;
      // Boundary wrap guard for E/W
      if (di === 2 && cc === 0) continue; // W from col 0
      if (di === 3 && cc === cols - 1) continue; // E from col cols-1
      if (currentRoom.grid[nb] === 1) continue; // wall
      if (distMap[nb] !== Infinity) continue; // visited
      distMap[nb] = distMap[cur] + 1;
      queue[tail++] = nb;
    }
  }
}

// hasLOS(x1, y1, x2, y2) — Bresenham tile-walk line-of-sight check.
// Returns true if no wall tiles block the straight line between two world-space points.
// Returns false immediately if any traversed tile is a wall or out of bounds.
function hasLOS(x1, y1, x2, y2) {
  if (!currentRoom) return false;
  var r1 = Math.floor(y1 / TILE_SIZE);
  var c1 = Math.floor(x1 / TILE_SIZE);
  var r2 = Math.floor(y2 / TILE_SIZE);
  var c2 = Math.floor(x2 / TILE_SIZE);
  var dr = Math.abs(r2 - r1);
  var dc = Math.abs(c2 - c1);
  var sr = (r1 < r2) ? 1 : -1;
  var sc = (c1 < c2) ? 1 : -1;
  var err = dr - dc;
  var maxSteps = dr + dc + 2;
  for (var step = 0; step < maxSteps; step++) {
    if (r1 < 0 || r1 >= currentRoom.rows || c1 < 0 || c1 >= currentRoom.cols) return false;
    if (currentRoom.grid[r1 * currentRoom.cols + c1] === 1) return false;
    if (r1 === r2 && c1 === c2) break;
    var e2 = 2 * err;
    if (e2 > -dc) { err -= dc; c1 += sc; }
    if (e2 < dr)  { err += dr; r1 += sr; }
  }
  return true;
}

// updateAim(dt) — auto-aim target selection with hysteresis grace period.
// Scans enemies for nearest LOS-visible target; fires bullets toward it.
function updateAim(dt) {
  if (!player) return;
  fireCooldown -= dt;
  if (fireCooldown < 0) fireCooldown = 0;

  // Re-evaluate current target
  if (aimTarget && aimTarget.alive && hasLOS(player.x, player.y, aimTarget.x, aimTarget.y)) {
    // Target confirmed with LOS — reset grace timer
    aimGrace = HYSTERESIS_GRACE * (player.hysteresisMult || 1);
  } else if (aimTarget && aimTarget.alive) {
    // Target alive but LOS broken — drain grace timer
    aimGrace -= dt;
    if (aimGrace <= 0) {
      aimTarget = null;
    }
  }

  // Acquire new target if needed
  if (aimTarget === null || (aimTarget && !aimTarget.alive)) {
    var nearestEnemy = null;
    var nearestDist2 = Infinity;
    var aimRangeSq = player.aimRange ? (player.aimRange * player.aimRange) : Infinity;
    for (var i = 0; i < enemies.length; i++) {
      var orb = enemies[i];
      if (!orb.alive) continue;
      if (!hasLOS(player.x, player.y, orb.x, orb.y)) continue;
      var dx2 = orb.x - player.x;
      var dy2 = orb.y - player.y;
      var d2 = dx2 * dx2 + dy2 * dy2;
      if (d2 > aimRangeSq) continue; // outside aimRange
      if (d2 < nearestDist2) {
        nearestDist2 = d2;
        nearestEnemy = orb;
      }
    }
    if (nearestEnemy !== null) {
      aimTarget = nearestEnemy;
      aimGrace = HYSTERESIS_GRACE * (player.hysteresisMult || 1);
    }
  }

  // Fire toward target
  var maxB = player.maxBullets || MAX_BULLETS;
  if (aimTarget && aimTarget.alive && fireCooldown <= 0 && bullets.length < maxB) {
    var dx = aimTarget.x - player.x;
    var dy = aimTarget.y - player.y;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len > 0) {
      var bspd = player.bulletSpeed || BULLET_SPEED;
      var vx = (dx / len) * bspd;
      var vy = (dy / len) * bspd;
      bullets.push({ x: player.x, y: player.y, vx: vx, vy: vy, alive: true, age: 0 });
      // Bullet arc: spawn two additional bullets at ±15 degrees if bulletArc is set
      if (player.bulletArc) {
        var arcAngle = Math.PI / 12; // 15 degrees
        var baseAngle = Math.atan2(vy, vx);
        var arc1Angle = baseAngle + arcAngle;
        var arc2Angle = baseAngle - arcAngle;
        if (bullets.length < maxB) {
          bullets.push({ x: player.x, y: player.y,
            vx: Math.cos(arc1Angle) * bspd, vy: Math.sin(arc1Angle) * bspd,
            alive: true, age: 0 });
        }
        if (bullets.length < maxB) {
          bullets.push({ x: player.x, y: player.y,
            vx: Math.cos(arc2Angle) * bspd, vy: Math.sin(arc2Angle) * bspd,
            alive: true, age: 0 });
        }
      }
      var cooldown = FIRE_COOLDOWN * (player.fireCooldownMult || 1);
      fireCooldown = cooldown;
      muzzleFlash = 1;
      playTone({ type: "sine", freq: 880, endFreq: 660, dur: 0.06, gain: 0.07 });
    }
  }
}

// updateBullets(dt) — advances bullet positions and removes bullets that hit walls or expire.
// Iterates backwards to allow splice without index corruption.
function updateBullets(dt) {
  if (!currentRoom || !currentRoom.grid) return;
  var cols = currentRoom.cols;
  var rows = currentRoom.rows;
  for (var i = bullets.length - 1; i >= 0; i--) {
    var b = bullets[i];
    if (!b.alive) { bullets.splice(i, 1); continue; }
    b.age += dt;
    if (b.age >= BULLET_LIFETIME) { bullets.splice(i, 1); continue; }
    var nx = b.x + b.vx * dt;
    var ny = b.y + b.vy * dt;
    var tc = Math.floor(nx / TILE_SIZE);
    var tr = Math.floor(ny / TILE_SIZE);
    if (tc < 0 || tc >= cols || tr < 0 || tr >= rows || currentRoom.grid[tr * cols + tc] === 1) {
      // Bullet hit a wall — apply blast damage if bulletBlast is set
      if (player && player.bulletBlast) {
        var blastR = player.bulletBlastRadius || 16;
        for (var bj = 0; bj < enemies.length; bj++) {
          var ben = enemies[bj];
          if (!ben.alive) continue;
          var bdxB = nx - ben.x;
          var bdyB = ny - ben.y;
          if (Math.sqrt(bdxB * bdxB + bdyB * bdyB) < blastR) {
            ben.hp -= 1;
            ben.hitFlash = 0.08;
            if (ben.hp <= 0) {
              ben.alive = false;
              playKillSound(ben.type);
              spawnParticleBurst(ben.x, ben.y, enemyColorFor(ben.type));
              killCount += 1;
              spawnGem(ben.x, ben.y);
              if (ben.elite) spawnGem(ben.x, ben.y);
              if (ben.type === "CRAWLER" && ben.generation === 0) {
                var bOffsets = [-8, 8];
                for (var bsi = 0; bsi < 2; bsi++) {
                  enemies.push({ type: "CRAWLER", x: ben.x + bOffsets[bsi], y: ben.y,
                    r: 6, hp: 1, maxHp: 1, speed: 85, alive: true, age: 0,
                    facing: Math.floor(Math.random() * 4), generation: 1 });
                }
                doorsSealed = true;
              }
            }
          }
        }
        checkEnemiesClear();
      }
      bullets.splice(i, 1);
      continue;
    }
    b.x = nx;
    b.y = ny;
    // Bullet-enemy collision
    var hit = false;
    for (var j = 0; j < enemies.length; j++) {
      var en = enemies[j];
      if (!en.alive) continue;
      var bdx = nx - en.x;
      var bdy = ny - en.y;
      if (Math.sqrt(bdx * bdx + bdy * bdy) < (3 + en.r)) {
        var dmg = player ? (player.bulletDmg || 1) : 1;
        en.hp -= dmg;
        en.hitFlash = 0.08;
        // Bullet chain: deal 1 damage to nearest other enemy within 80px
        if (player && player.bulletChain) {
          var chainNearest = null;
          var chainDist2 = 80 * 80;
          for (var ci = 0; ci < enemies.length; ci++) {
            if (ci === j) continue;
            if (!enemies[ci].alive) continue;
            var cdx = enemies[ci].x - en.x;
            var cdy = enemies[ci].y - en.y;
            var cd2 = cdx * cdx + cdy * cdy;
            if (cd2 < chainDist2) { chainDist2 = cd2; chainNearest = enemies[ci]; }
          }
          if (chainNearest !== null) {
            chainNearest.hp -= 1;
            chainNearest.hitFlash = 0.08;
            if (chainNearest.hp <= 0) {
              chainNearest.alive = false;
              playKillSound(chainNearest.type);
              spawnParticleBurst(chainNearest.x, chainNearest.y, enemyColorFor(chainNearest.type));
              killCount += 1;
              spawnGem(chainNearest.x, chainNearest.y);
              if (chainNearest.elite) spawnGem(chainNearest.x, chainNearest.y);
              if (chainNearest.type === "CRAWLER" && chainNearest.generation === 0) {
                var chOff = [-8, 8];
                for (var chi = 0; chi < 2; chi++) {
                  enemies.push({ type: "CRAWLER", x: chainNearest.x + chOff[chi], y: chainNearest.y,
                    r: 6, hp: 1, maxHp: 1, speed: 85, alive: true, age: 0,
                    facing: Math.floor(Math.random() * 4), generation: 1 });
                }
                doorsSealed = true;
              }
            }
            checkEnemiesClear();
          }
        }
        if (en.hp <= 0) {
          en.alive = false;
          playKillSound(en.type);
          spawnParticleBurst(en.x, en.y, enemyColorFor(en.type));
          killCount += 1;
          spawnGem(en.x, en.y);
          if (en.elite) spawnGem(en.x, en.y);
          // Sub-Crawler split must happen BEFORE checkEnemiesClear to prevent
          // false door-open on the frame the parent Crawler dies.
          if (en.type === "CRAWLER" && en.generation === 0) {
            var offsets = [-8, 8];
            for (var si = 0; si < 2; si++) {
              enemies.push({
                type: "CRAWLER",
                x: en.x + offsets[si], y: en.y,
                r: 6,
                hp: 1, maxHp: 1,
                speed: 85,
                alive: true,
                age: 0,
                facing: Math.floor(Math.random() * 4),
                generation: 1
              });
            }
            doorsSealed = true; // re-seal: new sub-Crawlers just spawned
          }
          checkEnemiesClear(); // runs after sub-Crawlers are in enemies[]
        }
        // Blast on hit (when not a wall hit) — if bulletBlast, deal AoE around enemy hit point
        if (player && player.bulletBlast) {
          var blastRH = player.bulletBlastRadius || 16;
          for (var bhi = 0; bhi < enemies.length; bhi++) {
            if (bhi === j) continue;
            var bhe = enemies[bhi];
            if (!bhe.alive) continue;
            var bhdx = nx - bhe.x;
            var bhdy = ny - bhe.y;
            if (Math.sqrt(bhdx * bhdx + bhdy * bhdy) < blastRH) {
              bhe.hp -= 1;
              bhe.hitFlash = 0.08;
              if (bhe.hp <= 0) {
                bhe.alive = false;
                playKillSound(bhe.type);
                spawnParticleBurst(bhe.x, bhe.y, enemyColorFor(bhe.type));
                killCount += 1;
                spawnGem(bhe.x, bhe.y);
                if (bhe.elite) spawnGem(bhe.x, bhe.y);
                if (bhe.type === "CRAWLER" && bhe.generation === 0) {
                  var bhOff = [-8, 8];
                  for (var bhsi = 0; bhsi < 2; bhsi++) {
                    enemies.push({ type: "CRAWLER", x: bhe.x + bhOff[bhsi], y: bhe.y,
                      r: 6, hp: 1, maxHp: 1, speed: 85, alive: true, age: 0,
                      facing: Math.floor(Math.random() * 4), generation: 1 });
                  }
                  doorsSealed = true;
                }
              }
            }
          }
          checkEnemiesClear();
        }
        hit = true;
        // Penetrating bullet: continue to next enemy instead of breaking
        if (!player || !player.bulletPenetrate) break;
      }
    }
    if (hit && (!player || !player.bulletPenetrate)) { bullets.splice(i, 1); continue; }
  }
}

// updateHud() — sync the DOM HUD (HP/XP bars + level label) to game state each
// frame. Runs in every state so it never freezes (e.g. XP spent in the shop).
function updateHud() {
  if (hpFillEl && player) {
    hpFillEl.style.width = Math.max(0, player.hp / player.maxHp * 100) + "%";
  }
  if (xpFillEl) {
    xpFillEl.style.width = Math.max(0, Math.min(100, (xp / xpToNext) * 100)) + "%";
  }
  if (levelLabelEl) levelLabelEl.textContent = currentLevelNum;
}

function update(dt) {
  updateHud();
  if (gameState === GAME_STATE.BOSS_CLEAR) {
    bossClearTimer -= dt;
    if (bossClearTimer <= 0) {
      modifierDraftStep = 0;
      pendingModifierChoice = -1;
      gameState = GAME_STATE.MODIFIER_DRAFT;
    }
    return; // skip movement/physics while overlay is visible
  }
  if (gameState === GAME_STATE.MODIFIER_DRAFT) {
    return; // game paused while modifier draft is active
  }
  // GAME_STATE.SKILL_SELECT — game paused while overlay is open
  if (gameState === GAME_STATE.SKILL_SELECT) {
    return; // skip all movement/physics/AI
  }
  if (gameState === GAME_STATE.SHOP) return;
  if (gameState === GAME_STATE.PLAYING) {
    if (paused) return; // frozen — no movement/physics/AI while paused
    movePlayer(dt);
    if (player && player.invuln > 0) player.invuln = Math.max(0, player.invuln - dt);
    updateCamera();
    computeDistMap();
    updateAim(dt);
    updateBullets(dt);
    updateEnemies(dt);
    updateGems(dt);
    updateSentinelShots(dt);
    updateParticles(dt);
    if (shakeTrauma > 0) shakeTrauma = Math.max(0, shakeTrauma - 8 * dt);
    if (hurtFlash > 0) hurtFlash = Math.max(0, hurtFlash - 5 * dt);
    if (muzzleFlash > 0) muzzleFlash = Math.max(0, muzzleFlash - 12 * dt);
    if (bossBanner > 0) bossBanner = Math.max(0, bossBanner - dt);
    if (clearedFloater) {
      clearedFloater.timer -= dt;
      clearedFloater.alpha = Math.max(0, clearedFloater.timer / 1.5);
      if (clearedFloater.timer <= 0) clearedFloater = null;
    }
    if (levelUpFloater) {
      levelUpFloater.timer -= dt;
      levelUpFloater.alpha = Math.max(0, levelUpFloater.timer / 1.4);
      if (levelUpFloater.timer <= 0) levelUpFloater = null;
    }
    // checkDoorTraversal must run before updateTransition: the guard `!transition` inside
    // checkDoorTraversal relies on transition being null from the previous frame.
    checkDoorTraversal();
    updateTransition(dt);
  }
}

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function renderTitle() {
  // Background
  ctx.fillStyle = "#05050c";
  ctx.fillRect(0, 0, W, H);

  // Drifting neon motes — lazily seeded, animated each frame, wrapped at edges.
  // Gives the menu ambient life without any assets. Drawn behind the grid + wordmark.
  if (titleMotes === null) {
    titleMotes = [];
    var moteColors = [COLORS.cyan, COLORS.purple, COLORS.pink];
    for (var mi = 0; mi < 44; mi++) {
      titleMotes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() * 2 - 1) * 12,
        vy: (Math.random() * 2 - 1) * 12,
        r: 1 + Math.random() * 2.5,
        color: moteColors[mi % moteColors.length],
        alpha: 0.15 + Math.random() * 0.35,
      });
    }
  }
  ctx.save();
  for (var mj = 0; mj < titleMotes.length; mj++) {
    var mo = titleMotes[mj];
    // ~60fps fixed step is fine for decoration; wrap around the screen edges.
    mo.x += mo.vx * 0.016;
    mo.y += mo.vy * 0.016;
    if (mo.x < -4) mo.x = W + 4; else if (mo.x > W + 4) mo.x = -4;
    if (mo.y < -4) mo.y = H + 4; else if (mo.y > H + 4) mo.y = -4;
    ctx.globalAlpha = mo.alpha;
    glowCircle(mo.x, mo.y, mo.r, mo.color, 8);
  }
  ctx.restore();

  // Decorative grid
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = COLORS.cyan;
  ctx.lineWidth = 0.5;
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  ctx.restore();

  // Wordmark "NEON GAUNTLET" with gradient
  const font = "bold 48px 'Segoe UI', system-ui, sans-serif";
  ctx.font = font;
  const wordmarkX = W / 2;
  const wordmarkY = H * 0.42;
  const textWidth = ctx.measureText("NEON GAUNTLET").width;
  const grad = ctx.createLinearGradient(wordmarkX - textWidth / 2, 0, wordmarkX + textWidth / 2, 0);
  grad.addColorStop(0, COLORS.cyan);
  grad.addColorStop(0.5, COLORS.purple);
  grad.addColorStop(1.0, COLORS.pink);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 24;
  ctx.fillStyle = grad;
  ctx.fillText("NEON GAUNTLET", wordmarkX, wordmarkY);

  // Subtitle "DUNGEON CRAWLER"
  ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#9a9ac0";
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";
  ctx.fillText("DUNGEON CRAWLER", W / 2, wordmarkY + 28);

  // How to play — controls + objective (onboarding clarity)
  ctx.font = "14px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#c8c8e0";
  ctx.fillText("WASD / ARROW KEYS to move  —  your weapon fires automatically", W / 2, wordmarkY + 62);
  ctx.fillStyle = "#9a9ac0";
  ctx.fillText("Clear every room to open the doors, then descend.  Grow stronger and beat the boss.", W / 2, wordmarkY + 84);

  // Prompt with pulsing opacity
  const alpha = 0.45 + 0.55 * Math.abs(Math.sin(Date.now() / 600));
  ctx.font = "15px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(154,154,192," + alpha + ")";
  ctx.fillText("PRESS ANY KEY OR CLICK TO START", W / 2, wordmarkY + 120);

  // Persisted best run, if any.
  if (bestRun) {
    ctx.font = "13px 'Segoe UI', system-ui, sans-serif";
    ctx.fillStyle = COLORS.gold;
    ctx.fillText("BEST  —  LEVEL " + bestRun.level + "  ·  " + bestRun.kills + " KILLS", W / 2, wordmarkY + 152);
  }
}

function renderPlayer() {
  if (!player) return;
  // Invuln flicker: hide every other 0.1s interval while invulnerable
  if (player.invuln > 0 && Math.floor(player.invuln / 0.1) % 2 === 0) return;
  glowCircle(player.x, player.y, player.r, COLORS.cyan, 18);
  // Muzzle flash: a quick white pop layered over the player the instant a shot leaves.
  if (muzzleFlash > 0) {
    ctx.save();
    ctx.globalAlpha = muzzleFlash;
    glowCircle(player.x, player.y, player.r + 3 * muzzleFlash, COLORS.white, 10 + 18 * muzzleFlash);
    ctx.restore();
  }
}

// renderHpBar() — draws the player HP bar in screen-space (outside camera transform).
// 5 segments: pink when filled, dark when empty. Called after camera.end().
function renderHpBar() {
  if (!player) return;
  ctx.save();
  // Draw filled segments with glow
  ctx.shadowColor = COLORS.pink;
  ctx.shadowBlur = 6;
  for (var i = 0; i < player.maxHp; i++) {
    if (i < player.hp) {
      ctx.fillStyle = COLORS.pink;
    } else {
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#550022";
    }
    ctx.fillRect(12 + i * 18, 12, 16, 8);
  }
  ctx.restore();
}

// renderBossBanner() — pulsing red "⚠ BOSS ⚠" warning near the top on boss-room entry.
function renderBossBanner() {
  if (bossBanner <= 0) return;
  // Fade out over the last 0.6s; hold full opacity before that.
  var a = Math.min(1, bossBanner / 0.6);
  var pulse = 0.7 + 0.3 * Math.abs(Math.sin(Date.now() / 180));
  ctx.save();
  ctx.globalAlpha = a;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 40px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.pink;
  ctx.shadowColor = COLORS.pink;
  ctx.shadowBlur = 18 + 14 * pulse;
  ctx.fillText("⚠ BOSS ⚠", W / 2, H * 0.2);
  ctx.restore();
}

// renderPauseOverlay() — dim wash + "PAUSED" text shown over the frozen room.
function renderPauseOverlay() {
  if (!paused) return;
  ctx.save();
  ctx.fillStyle = "rgba(5,5,12,0.66)";
  ctx.fillRect(0, 0, W, H);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 44px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.cyan;
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 22;
  ctx.fillText("PAUSED", W / 2, H / 2 - 10);
  ctx.shadowBlur = 0;
  ctx.font = "15px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#9a9ac0";
  ctx.fillText("Press P or Esc to resume", W / 2, H / 2 + 30);
  ctx.restore();
}

// renderHurtFlash() — brief red wash over the whole screen the instant the player
// takes damage. Decays in update(dt); pairs with the screen shake from registerPlayerHit().
function renderHurtFlash() {
  if (hurtFlash <= 0) return;
  ctx.save();
  ctx.fillStyle = "rgba(255,59,107," + (hurtFlash * 0.32).toFixed(3) + ")";
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

// renderBossHealthBar() — wide pink HP bar across the top during the boss fight,
// so the climax has a visible progress readout. Screen-space; boss rooms only.
function renderBossHealthBar() {
  if (!currentRoom || currentRoom.type !== "BOSS") return;
  var boss = null;
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].type === "BOSS" && enemies[i].alive) { boss = enemies[i]; break; }
  }
  if (!boss) return;
  var bw = Math.min(360, W * 0.6), bh = 12;
  var bx = (W - bw) / 2, by = 26;
  var frac = Math.max(0, Math.min(1, boss.hp / boss.maxHp));
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "bold 12px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.pink;
  ctx.shadowColor = COLORS.pink;
  ctx.shadowBlur = 8;
  ctx.fillText("BOSS", W / 2, by - 5);
  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.fillRect(bx, by, bw, bh);
  ctx.fillStyle = COLORS.pink;
  ctx.shadowColor = COLORS.pink;
  ctx.shadowBlur = 10;
  ctx.fillRect(bx, by, bw * frac, bh);
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(255,59,107,0.6)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(bx, by, bw, bh);
  ctx.restore();
}

// renderLowHpVignette() — pulsing red edge vignette when the player is near death.
// Screen-space; drawn after the camera sandwich. Ramps in below 40% HP and pulses
// faster as HP drops, so danger is felt peripherally without watching the HUD bar.
function renderLowHpVignette() {
  if (!player) return;
  var frac = player.hp / player.maxHp;
  if (frac > 0.4) return;
  // Intensity 0..1 as HP falls from 40% to 0%; pulse speed rises with intensity.
  var intensity = Math.min(1, (0.4 - frac) / 0.4);
  var pulse = 0.55 + 0.45 * Math.abs(Math.sin(Date.now() / (260 - 120 * intensity)));
  var alpha = 0.18 + 0.40 * intensity * pulse;
  ctx.save();
  var grad = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.28, W / 2, H / 2, Math.max(W, H) * 0.62);
  grad.addColorStop(0, "rgba(255,59,107,0)");
  grad.addColorStop(1, "rgba(255,59,107," + alpha.toFixed(3) + ")");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

// renderLevelMap() — M key minimap overlay (top-right corner).
// Shows all rooms in the current level colored by type; current room has a white border;
// cleared rooms show a check mark.
function renderLevelMap() {
  if (!levelMapVisible || !currentLevel) return;
  ctx.save();

  var rooms = currentLevel.rooms;

  // Cell dimensions and gap
  var CELL_W = 20;
  var CELL_H = 15;
  var GAP = 2;

  // Determine grid bounds from slotIdx (4x4 coarse grid: row = floor(idx/4), col = idx%4)
  var minRow = 3, maxRow = 0, minCol = 3, maxCol = 0;
  for (var ri = 0; ri < rooms.length; ri++) {
    var sr = Math.floor(rooms[ri].slotIdx / 4);
    var sc = rooms[ri].slotIdx % 4;
    if (sr < minRow) minRow = sr;
    if (sr > maxRow) maxRow = sr;
    if (sc < minCol) minCol = sc;
    if (sc > maxCol) maxCol = sc;
  }
  var gridCols = maxCol - minCol + 1;
  var gridRows = maxRow - minRow + 1;

  var panelW = gridCols * (CELL_W + GAP) + GAP + 16;
  var panelH = gridRows * (CELL_H + GAP) + GAP + 22; // 22px for "MAP" title
  var panelX = W - panelW - 8;
  var panelY = 8;

  // Panel background
  ctx.fillStyle = "rgba(5,5,12,0.82)";
  ctx.fillRect(panelX, panelY, panelW, panelH);

  // Title "MAP"
  ctx.font = "bold 11px 'Segoe UI', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = COLORS.cyan;
  ctx.fillText("MAP", panelX + panelW / 2, panelY + 9);

  // Room type colors
  var typeColors = {
    "START":  COLORS.cyan,
    "NORMAL": "#333366",
    "ELITE":  COLORS.gold,
    "SHOP":   "#336633",
    "BOSS":   COLORS.pink,
  };

  // Draw each room cell
  ctx.font = "10px 'Segoe UI', system-ui, sans-serif";
  for (var i = 0; i < rooms.length; i++) {
    var room = rooms[i];
    var row = Math.floor(room.slotIdx / 4) - minRow;
    var col = room.slotIdx % 4 - minCol;

    var cellX = panelX + GAP + 8 + col * (CELL_W + GAP);
    var cellY = panelY + 18 + row * (CELL_H + GAP);

    // Room fill color
    ctx.fillStyle = typeColors[room.type] || "#222244";
    ctx.fillRect(cellX, cellY, CELL_W, CELL_H);

    // Current room: bright white border
    if (room === currentRoom) {
      ctx.save();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(cellX, cellY, CELL_W, CELL_H);
      ctx.restore();
    }

    // Cleared rooms: checkmark; uncleared non-START rooms: a type badge.
    if (room.cleared === true) {
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("✓", cellX + CELL_W / 2, cellY + CELL_H / 2);
    } else if (room.type !== "START") {
      var badge = { NORMAL: "N", ELITE: "E", SHOP: "$", BOSS: "B" }[room.type] || "?";
      ctx.save();
      ctx.font = "bold 10px 'Segoe UI', system-ui, sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(0,0,0,0.85)";
      ctx.shadowBlur = 2;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(badge, cellX + CELL_W / 2, cellY + CELL_H / 2);
      ctx.restore();
    }
  }

  ctx.restore();
}

// renderDead() — full-screen death overlay with stats and restart prompt.
// Called from render() when gameState === GAME_STATE.DEAD.
function renderDead() {
  // Record the run once on first DEAD frame, then read back the merged best.
  if (!deathRecorded) {
    lastRunWasRecord = recordRun();
    deathRecorded = true;
  }

  // Semi-transparent overlay
  ctx.fillStyle = "rgba(5,5,12,0.85)";
  ctx.fillRect(0, 0, W, H);

  // Death title
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 48px 'Segoe UI', system-ui, sans-serif";
  ctx.shadowColor = COLORS.pink;
  ctx.shadowBlur = 24;
  ctx.fillStyle = COLORS.pink;
  ctx.fillText("YOU DIED", W / 2, H * 0.35);
  ctx.shadowBlur = 0;
  ctx.restore();

  // Stats block
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "18px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.white;
  ctx.shadowBlur = 0;
  ctx.fillText("LEVEL  " + (currentLevel ? currentLevel.levelNumber : 1), W / 2, H * 0.50);
  ctx.fillText("ROOMS CLEARED  " + roomsCleared, W / 2, H * 0.57);
  ctx.fillText("KILLS  " + killCount, W / 2, H * 0.64);
  ctx.restore();

  // Best-run line (persisted across sessions) + a "NEW BEST!" cue when beaten.
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (lastRunWasRecord) {
    ctx.font = "bold 16px 'Segoe UI', system-ui, sans-serif";
    ctx.fillStyle = COLORS.gold;
    ctx.shadowColor = COLORS.gold;
    ctx.shadowBlur = 12;
    ctx.fillText("★ NEW BEST ★", W / 2, H * 0.685);
    ctx.shadowBlur = 0;
  }
  if (bestRun) {
    ctx.font = "13px 'Segoe UI', system-ui, sans-serif";
    ctx.fillStyle = "#9a9ac0";
    ctx.fillText("BEST  —  LEVEL " + bestRun.level + "  ·  " + bestRun.kills + " KILLS", W / 2, H * 0.71);
  }
  ctx.restore();

  // Restart button — outlined rect with label
  var btnX = W / 2 - 60;
  var btnY = H * 0.75;
  var btnW = 120;
  var btnH = 36;
  ctx.save();
  ctx.strokeStyle = COLORS.cyan;
  ctx.lineWidth = 1.5;
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 8;
  ctx.strokeRect(btnX, btnY, btnW, btnH);
  ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.cyan;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("RESTART", W / 2, btnY + btnH / 2);
  ctx.restore();
}

// renderBossClear() — full-screen overlay displayed for ~2s after defeating the Boss.
function renderBossClear() {
  // Semi-transparent dark overlay
  ctx.fillStyle = "rgba(5,5,12,0.7)";
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // "LEVEL COMPLETE" in bold 48px neon pink
  ctx.font = "bold 48px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.pink;
  ctx.shadowColor = COLORS.pink;
  ctx.shadowBlur = 28;
  ctx.fillText("LEVEL COMPLETE", W / 2, H / 2 - 30);

  // Level number cleared in 24px gold
  ctx.font = "24px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.gold;
  ctx.shadowColor = COLORS.gold;
  ctx.shadowBlur = 14;
  ctx.fillText("LEVEL " + (currentLevelNum - 1) + " CLEARED", W / 2, H / 2 + 20);

  // Preparing hint in 16px white at lower alpha
  ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.shadowBlur = 0;
  ctx.fillText("Preparing next level...", W / 2, H / 2 + 60);

  ctx.restore();
}

// renderModifierDraft() — two-step draft overlay: step 0 = blessings, step 1 = curses.
// Called from render() when gameState === GAME_STATE.MODIFIER_DRAFT.
function renderModifierDraft() {
  ctx.save();

  // Full-screen dark overlay
  ctx.fillStyle = "rgba(5,5,12,0.9)";
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Step-dependent colors and lists
  var isDraft0 = (modifierDraftStep === 0);
  var accentColor = isDraft0 ? COLORS.gold : COLORS.pink;
  var title = isDraft0 ? "CHOOSE A BLESSING" : "CHOOSE A CURSE";
  var mods = isDraft0 ? POSITIVE_MODIFIERS : NEGATIVE_MODIFIERS;

  // Title
  ctx.font = "bold 32px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = accentColor;
  ctx.shadowColor = accentColor;
  ctx.shadowBlur = 20;
  ctx.fillText(title, W / 2, 70);
  ctx.shadowBlur = 0;

  // Subtitle
  ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillText("Level " + (currentLevelNum + 1) + " begins after your choice", W / 2, 110);

  // Option boxes — 3 stacked, centered
  var boxW = 280;
  var boxH = 60;
  var boxGap = 16;
  var startY = 150;

  for (var i = 0; i < 3; i++) {
    var boxX = W / 2 - boxW / 2;
    var boxY = startY + i * (boxH + boxGap);

    // Box background
    ctx.fillStyle = "rgba(20,20,40,0.9)";
    ctx.fillRect(boxX, boxY, boxW, boxH);

    // Box border
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    // Modifier name (upper) + effect description (lower)
    ctx.font = "bold 18px 'Segoe UI', system-ui, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(mods[i].name, W / 2, boxY + boxH * 0.36);
    if (mods[i].desc) {
      ctx.font = "12px 'Segoe UI', system-ui, sans-serif";
      ctx.fillStyle = "rgba(200,200,224,0.78)";
      ctx.fillText(mods[i].desc, W / 2, boxY + boxH * 0.68);
    }

    // Keyboard hint "[N]" to the left
    ctx.font = "14px 'Segoe UI', system-ui, sans-serif";
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = accentColor;
    ctx.textAlign = "left";
    ctx.fillText("[" + (i + 1) + "]", boxX + 12, boxY + boxH / 2);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center";
  }

  // Footer
  ctx.font = "14px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fillText("Press 1, 2, or 3 to choose", W / 2, H - 30);

  ctx.restore();
}

// renderSkillSelect() — canvas overlay showing all 5 skill branches with tier rects and keyboard hints.
// Called from render() when gameState === GAME_STATE.SKILL_SELECT.
function renderSkillSelect() {
  if (!player) return;
  ctx.save();

  // Semi-transparent dark panel
  ctx.fillStyle = "rgba(5,5,12,0.88)";
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Title
  ctx.font = "bold 32px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.cyan;
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 16;
  ctx.fillText("SKILL TREE", W / 2, 60);
  ctx.shadowBlur = 0;

  // Skill points remaining
  ctx.font = "18px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.gold;
  ctx.fillText("Skill Points: " + skillPoints, W / 2, 95);

  // Branch abbreviations and keys in display order
  var BRANCH_KEYS  = ["MARKSMAN", "PHANTOM", "DEMOLITIONS", "CONDUCTOR", "HUNTER"];
  var BRANCH_ABBR  = ["MARK", "PHANT", "DEMO", "COND", "HUNT"];

  for (var i = 0; i < 5; i++) {
    var branchKey = BRANCH_KEYS[i];
    var colX = W * (i + 1) / 6;
    var branch = SKILL_TREE[branchKey];
    var currentTier = player.skillTiers[branchKey];

    // Branch name label
    ctx.font = "bold 13px 'Segoe UI', system-ui, sans-serif";
    ctx.fillStyle = COLORS.cyan;
    ctx.fillText(BRANCH_ABBR[i], colX, 130);

    // Tier rects
    for (var t = 0; t < 4; t++) {
      var rectX = colX - 30;
      var rectY = 155 + t * 38;
      var rectW = 60;
      var rectH = 28;
      var purchased = (currentTier > t);

      // Fill rect
      if (purchased) {
        ctx.fillStyle = COLORS.gold;
      } else {
        ctx.fillStyle = "#1a1a2e";
      }
      ctx.fillRect(rectX, rectY, rectW, rectH);

      // Tier name inside rect
      ctx.font = "11px 'Segoe UI', system-ui, sans-serif";
      ctx.fillStyle = purchased ? "#1a1a2e" : "rgba(255,255,255,0.7)";
      ctx.fillText(branch[t].name, colX, rectY + rectH / 2);
    }

    // Invest button below tier rects
    var nextTier = currentTier;
    var investY = 155 + 4 * 38 + 16;
    if (nextTier < 4) {
      var cost = branch[nextTier].cost;
      var canAfford = (skillPoints >= cost);
      ctx.font = "12px 'Segoe UI', system-ui, sans-serif";
      ctx.fillStyle = canAfford ? COLORS.cyan : "rgba(255,255,255,0.3)";
      ctx.fillText("[" + (i + 1) + "] " + cost + " SP", colX, investY);
    } else {
      ctx.font = "12px 'Segoe UI', system-ui, sans-serif";
      ctx.fillStyle = COLORS.gold;
      ctx.fillText("MAX", colX, investY);
    }
  }

  // Unlocked fusions
  if (player.fusionUnlocked && player.fusionUnlocked.length > 0) {
    ctx.font = "14px 'Segoe UI', system-ui, sans-serif";
    ctx.fillStyle = COLORS.purple;
    ctx.fillText("Fusions: " + player.fusionUnlocked.join(", "), W / 2, 360);
  }

  // Footer
  ctx.font = "14px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillText("Press 1-5 to invest  |  Tab / Enter / Esc to continue", W / 2, H - 30);

  ctx.restore();
}

// renderShop() — shop overlay with 3 purchasable items.
// Called from render() when gameState === GAME_STATE.SHOP.
function renderShop() {
  ctx.save();
  ctx.globalAlpha = 0.88;
  ctx.fillStyle = "#0a0a18";
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "bold 36px monospace";
  ctx.fillStyle = COLORS.gold;
  ctx.shadowColor = COLORS.gold;
  ctx.shadowBlur = 18;
  ctx.fillText("SHOP", W / 2, H / 2 - 120);
  ctx.shadowBlur = 0;
  ctx.font = "18px monospace";
  ctx.fillStyle = COLORS.orange;
  ctx.fillText("XP: " + xp, W / 2, H / 2 - 80);
  ctx.restore();

  ctx.save();
  ctx.textAlign = "center";
  for (var i = 0; i < shopItems.length; i++) {
    var item = shopItems[i];
    var iy = H / 2 - 40 + i * 70;
    // A Health Restore at full HP is a no-op purchase — render it as unavailable
    // (dimmed, "FULL HP") and never as affordable (WR-01).
    var healNoOp = item.name === "Health Restore" && player && player.hp >= player.maxHp;
    var unavailable = item.sold || healNoOp;
    var canAfford = !unavailable && xp >= item.cost;
    ctx.font = "bold 20px monospace";
    ctx.fillStyle = unavailable ? "#555" : (canAfford ? COLORS.gold : COLORS.white);
    ctx.shadowColor = (unavailable || !canAfford) ? "transparent" : COLORS.gold;
    ctx.shadowBlur = (unavailable || !canAfford) ? 0 : 8;
    ctx.fillText("[" + (i + 1) + "] " + item.name + "  —  " + item.stat, W / 2, iy);
    ctx.font = "16px monospace";
    ctx.fillStyle = unavailable ? "#555" : (canAfford ? COLORS.cyan : COLORS.pink);
    ctx.shadowBlur = 0;
    ctx.fillText(item.sold ? "SOLD" : (healNoOp ? "FULL HP" : (item.cost + " XP")), W / 2, iy + 24);
  }
  ctx.restore();

  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "14px monospace";
  ctx.fillStyle = COLORS.white;
  ctx.globalAlpha = 0.45;
  ctx.fillText("[E] or [ESC]  Leave shop", W / 2, H / 2 + 170);
  ctx.restore();
}

// renderBullets() — draws a glowing gold dot for each live bullet.
// Called inside the camera sandwich in renderPlaying().
function renderBullets() {
  if (!bullets.length) return;
  // Trail length is a short fixed slice of travel (~0.05s of velocity), so faster
  // bullets streak longer. Drawn as a fading cyan tail behind the glowing head.
  var TRAIL_T = 0.05;
  ctx.save();
  ctx.lineCap = "round";
  ctx.strokeStyle = COLORS.cyan;
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 8;
  for (var i = 0; i < bullets.length; i++) {
    var b = bullets[i];
    if (!b.alive) continue;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(b.x - b.vx * TRAIL_T, b.y - b.vy * TRAIL_T);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
  ctx.restore();
  for (var j = 0; j < bullets.length; j++) {
    var bj = bullets[j];
    if (!bj.alive) continue;
    glowCircle(bj.x, bj.y, 3, COLORS.cyan, 10);
  }
}

// renderObjectiveHint() — first-level onboarding cue. While a room is sealed
// with enemies still alive on level 1, remind the player of the core loop.
// Auto-hides once the room is cleared and never shows again past level 1.
function renderObjectiveHint() {
  if (currentLevelNum !== 1 || !doorsSealed) return;
  var anyAlive = false;
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].alive) { anyAlive = true; break; }
  }
  if (!anyAlive) return;
  ctx.save();
  ctx.font = "15px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(200,200,224,0.9)";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.shadowColor = COLORS.cyan;
  ctx.shadowBlur = 8;
  ctx.fillText("Defeat all enemies to open the doors", W / 2, 16);
  ctx.restore();
}

// renderSkillPrompt() — non-intrusive cue that skill points are available.
// Replaces the old auto-open-on-level-up behavior so leveling never interrupts.
function renderSkillPrompt() {
  if (!player || skillPoints <= 0) return;
  ctx.save();
  ctx.font = "bold 15px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = COLORS.gold;
  ctx.shadowColor = COLORS.gold;
  ctx.shadowBlur = 8;
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  var label = skillPoints === 1 ? "1 SKILL POINT" : (skillPoints + " SKILL POINTS");
  ctx.fillText("★ " + label + " — press TAB", W / 2, H - 16);
  ctx.restore();
}

function renderPlaying() {
  // Step 1 — Clear to background
  ctx.fillStyle = "#05050c";
  ctx.fillRect(0, 0, W, H);

  // Step 2 — Decorative grid (retained from Phase 39; recedes behind tile grid)
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = COLORS.cyan;
  ctx.lineWidth = 0.5;
  for (var y = 0; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  for (var x = 0; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  ctx.restore();

  // Step 3 — Draw room + player inside camera transform (Plan 02: camera sandwich)
  if (camera) camera.begin(ctx);
  renderRoom(currentRoom);
  renderBullets();
  renderSentinelShots();
  renderGems();
  renderEnemies();
  renderParticles();
  renderPlayer();
  if (camera) camera.end(ctx);

  // Step 4 — HUD overlays outside camera transform (screen-space)
  // HP is shown by the DOM HUD bar (updateHud); the old canvas renderHpBar()
  // is retired to avoid two HP representations (kept defined but uncalled).
  renderLowHpVignette();
  renderHurtFlash();
  renderBossHealthBar();
  renderLevelMap();
  renderObjectiveHint();
  renderSkillPrompt();
  renderClearedFloater();
  renderLevelUpFloater();
  renderBossBanner();
  renderTransitionOverlay();
  renderPauseOverlay();
}

function render() {
  if (gameState === GAME_STATE.TITLE) renderTitle();
  else if (gameState === GAME_STATE.PLAYING) renderPlaying();
  else if (gameState === GAME_STATE.DEAD) renderDead();
  else if (gameState === GAME_STATE.BOSS_CLEAR) { renderBossClear(); renderLevelMap(); }
  else if (gameState === GAME_STATE.SKILL_SELECT) renderSkillSelect();
  else if (gameState === GAME_STATE.MODIFIER_DRAFT) renderModifierDraft();
  else if (gameState === GAME_STATE.SHOP)          renderShop();
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastTime = 0;
function loop(ts) {
  const dt = Math.min((ts - lastTime) / 1000, 0.05);
  lastTime = ts;
  update(dt);
  render();
  requestAnimationFrame(loop);
}
loadBestRun(); // hydrate persisted best run before the title screen first draws
requestAnimationFrame(loop);

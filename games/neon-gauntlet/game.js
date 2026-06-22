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
};
const GAME_STATE = { TITLE: "TITLE", PLAYING: "PLAYING", DEAD: "DEAD" };
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
  5: ["STALKER", "AMBUSHER", "SENTINEL"],
};
const INVULN_DURATION = 1.5;      // seconds of invulnerability after taking a hit
const ENEMY_CONTACT_DAMAGE = 1;   // HP lost on direct enemy contact

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

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
let gems = [];            // gem drops array: { x, y, vx, vy, alive }
let sentinelShots = [];   // sentinel projectiles: { x, y, vx, vy, alive, age }
let xp = 0;               // current XP total
let xpToNext = 100;       // XP threshold for next level-up
let clearedFloater = null; // { alpha, timer } — "CLEARED" text overlay
let transition = null;    // { phase, timer, duration, targetRoom } — room fade transition
let distMap = null;       // Float32Array of hop distances from player tile; null until first gesture
let lastPlayerTile = { r: -1, c: -1 }; // cached player tile to skip redundant BFS
let aimTarget = null;     // { x, y, alive } — current auto-aim target
let aimGrace = 0;         // seconds remaining before current target is released on LOS loss
let fireCooldown = 0;     // seconds until next bullet can fire
let bullets = [];         // array of { x, y, vx, vy, alive, age }
let killCount = 0;        // enemies killed this run
let roomsCleared = 0;     // rooms cleared this run

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
  generateLevel(1, Math.floor(Date.now() / 1000));
  player = {
    x: (currentRoom.spawnPoint.tx + 0.5) * TILE_SIZE,
    y: (currentRoom.spawnPoint.ty + 0.5) * TILE_SIZE,
    r: 6,
    speed: 100,
    vx: 0,
    vy: 0,
    hp: 5,
    maxHp: 5,
    invuln: 0
  };
  player.vx = 0; player.vy = 0;
  initCamera();
  enemies = []; gems = []; sentinelShots = []; xp = 0;
  killCount = 0; roomsCleared = 0;
  spawnEnemies();
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

// restartGame() — resets all run state and begins a fresh level 1 run.
// Called from the DEAD screen restart button click.
function restartGame() {
  enemies = []; gems = []; sentinelShots = []; bullets = [];
  xp = 0; xpToNext = 100; killCount = 0; roomsCleared = 0;
  doorsSealed = false; clearedFloater = null; transition = null;
  distMap = null; lastPlayerTile = { r: -1, c: -1 };
  aimTarget = null; aimGrace = 0; fireCooldown = 0;
  generateLevel(1, Math.floor(Date.now() / 1000));
  player = {
    x: (currentRoom.spawnPoint.tx + 0.5) * TILE_SIZE,
    y: (currentRoom.spawnPoint.ty + 0.5) * TILE_SIZE,
    r: 6,
    speed: 100,
    vx: 0,
    vy: 0,
    hp: 5,
    maxHp: 5,
    invuln: 0
  };
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

// Movement key tracking — unconditional, all game states
document.addEventListener("keydown", function(e) { keys[e.key] = true; });
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
  var types = SPAWN_TABLE[currentLevel ? currentLevel.levelNumber : 1] || SPAWN_TABLE[1];
  var list = currentRoom.spawnList;
  var count = Math.min(types.length, list.length);
  for (var i = 0; i < count; i++) {
    var entry = list[i];
    var wx = (entry.tx + 0.5) * TILE_SIZE;
    var wy = (entry.ty + 0.5) * TILE_SIZE;
    enemies.push({
      type: types[i],
      x: wx, y: wy,
      r: 10,
      hp: types[i] === "STALKER" ? 2 :
          types[i] === "RUSHER"  ? 1 :
          types[i] === "AMBUSHER"? 2 :
          types[i] === "SENTINEL"? 3 : 2,
      maxHp: types[i] === "STALKER" ? 2 :
             types[i] === "RUSHER"  ? 1 :
             types[i] === "AMBUSHER"? 2 :
             types[i] === "SENTINEL"? 3 : 2,
      speed: types[i] === "STALKER" ? 55 :
             types[i] === "RUSHER"  ? 130 :
             types[i] === "AMBUSHER"? 75 :
             types[i] === "SENTINEL"? 0 : 55,
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
  }
  doorsSealed = true;
}

// openDoors() — called when all enemies are destroyed.
// Clears the door seal, plays a tone, and triggers the CLEARED floater.
function openDoors() {
  roomsCleared += 1;
  doorsSealed = false;
  playTone({ type: "sine", freq: 660, endFreq: 880, dur: 0.22, gain: 0.12 });
  clearedFloater = { alpha: 1.0, timer: 1.5 };
}

// checkEnemiesClear() — called after bullet-enemy hits and from updateEnemies().
// Opens doors when all enemies are dead and doors are currently sealed.
function checkEnemiesClear() {
  if (!doorsSealed) return;
  var allDead = true;
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].alive) { allDead = false; break; }
  }
  if (allDead) openDoors();
}

// addXP() — adds amount to xp; handles level-up counter (effects in Phase 45).
function addXP(amount) {
  xp += amount;
  if (xp >= xpToNext) {
    xp -= xpToNext;
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
    var gx = gem.x - player.x;
    var gy = gem.y - player.y;
    if (Math.sqrt(gx * gx + gy * gy) < 16) {
      gem.alive = false;
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
        player.invuln = INVULN_DURATION;
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
    }

    // Enemy contact damage — runs for all alive enemies after type-specific movement
    var cdx = player.x - e.x;
    var cdy = player.y - e.y;
    if (Math.sqrt(cdx * cdx + cdy * cdy) < (e.r + player.r) && player.invuln <= 0) {
      player.hp -= ENEMY_CONTACT_DAMAGE;
      player.invuln = INVULN_DURATION;
      if (player.hp <= 0) gameState = GAME_STATE.DEAD;
    }
  }

  checkEnemiesClear();
}

// renderEnemies() — type-aware: purple Stalker, pink Rusher; AMBUSHER/SENTINEL stubs for Plan 03.
function renderEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    var e = enemies[i];
    if (!e.alive) continue;
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
    } else {
      glowCircle(e.x, e.y, e.r - 2, COLORS.white, 10);
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
    aimGrace = HYSTERESIS_GRACE;
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
    for (var i = 0; i < enemies.length; i++) {
      var orb = enemies[i];
      if (!orb.alive) continue;
      if (!hasLOS(player.x, player.y, orb.x, orb.y)) continue;
      var dx2 = orb.x - player.x;
      var dy2 = orb.y - player.y;
      var d2 = dx2 * dx2 + dy2 * dy2;
      if (d2 < nearestDist2) {
        nearestDist2 = d2;
        nearestEnemy = orb;
      }
    }
    if (nearestEnemy !== null) {
      aimTarget = nearestEnemy;
      aimGrace = HYSTERESIS_GRACE;
    }
  }

  // Fire toward target
  if (aimTarget && aimTarget.alive && fireCooldown <= 0 && bullets.length < MAX_BULLETS) {
    var dx = aimTarget.x - player.x;
    var dy = aimTarget.y - player.y;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len > 0) {
      var vx = (dx / len) * BULLET_SPEED;
      var vy = (dy / len) * BULLET_SPEED;
      bullets.push({ x: player.x, y: player.y, vx: vx, vy: vy, alive: true, age: 0 });
      fireCooldown = FIRE_COOLDOWN;
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
        en.hp -= 1;
        if (en.hp <= 0) {
          en.alive = false;
          killCount += 1;
          spawnGem(en.x, en.y);
          checkEnemiesClear();
        }
        hit = true;
        break;
      }
    }
    if (hit) { bullets.splice(i, 1); continue; }
  }
}

function update(dt) {
  if (gameState === GAME_STATE.PLAYING) {
    movePlayer(dt);
    if (player && player.invuln > 0) player.invuln = Math.max(0, player.invuln - dt);
    updateCamera();
    computeDistMap();
    updateAim(dt);
    updateBullets(dt);
    updateEnemies(dt);
    updateGems(dt);
    updateSentinelShots(dt);
    if (clearedFloater) {
      clearedFloater.timer -= dt;
      clearedFloater.alpha = Math.max(0, clearedFloater.timer / 1.5);
      if (clearedFloater.timer <= 0) clearedFloater = null;
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

  // Prompt with pulsing opacity
  const alpha = 0.45 + 0.55 * Math.abs(Math.sin(Date.now() / 600));
  ctx.font = "15px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "rgba(154,154,192," + alpha + ")";
  ctx.fillText("PRESS ANY KEY OR CLICK TO START", W / 2, H * 0.42 + 56);
}

function renderPlayer() {
  if (!player) return;
  glowCircle(player.x, player.y, player.r, COLORS.cyan, 18);
}

// renderBullets() — draws a glowing gold dot for each live bullet.
// Called inside the camera sandwich in renderPlaying().
function renderBullets() {
  if (!bullets.length) return;
  for (var i = 0; i < bullets.length; i++) {
    var b = bullets[i];
    if (!b.alive) continue;
    glowCircle(b.x, b.y, 3, COLORS.cyan, 10);
  }
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
  renderPlayer();
  if (camera) camera.end(ctx);

  // Step 4 — HUD overlays outside camera transform (screen-space)
  renderClearedFloater();
  renderTransitionOverlay();
}

function render() {
  if (gameState === GAME_STATE.TITLE) renderTitle();
  else if (gameState === GAME_STATE.PLAYING) renderPlaying();
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
requestAnimationFrame(loop);

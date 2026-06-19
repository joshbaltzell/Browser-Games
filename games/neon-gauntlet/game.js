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
const GAME_STATE = { TITLE: "TITLE", PLAYING: "PLAYING" };
const DEBUG = false;      // set true during development to enable the D-key debug overlay
const TILE_SIZE = 16;     // canvas pixels per tile — matches D-17 spec

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
      var curCol = cur % 4;
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
  var retryRng = mulberry32(level.seed + 99999);
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

  // Step 1 — Compute centering (D-17 spec: each tile = TILE_SIZE px)
  var originX = Math.floor((W - cols * TILE_SIZE) / 2);
  var originY = Math.floor((H - rows * TILE_SIZE) / 2);

  // Step 2 — Scale-to-fit fallback (guard for Boss rooms or very small canvases)
  var scale = 1;
  if (cols * TILE_SIZE > W || rows * TILE_SIZE > H) {
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
        ctx.fillRect(originX + fc * TILE_SIZE, originY + fr * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  // Step 4 — Draw wall tile backgrounds (value 1) — same as canvas bg, making walls "invisible"
  // until the edge outlines in Step 5 reveal them.
  ctx.fillStyle = "#05050c";
  for (var wr = 0; wr < rows; wr++) {
    for (var wc = 0; wc < cols; wc++) {
      if (room.grid[wr * cols + wc] === 1) {
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
  var doorColor = (room.type === "BOSS") ? COLORS.pink : COLORS.cyan;
  for (var dr2 = 0; dr2 < rows; dr2++) {
    for (var dc2 = 0; dc2 < cols; dc2++) {
      if (room.grid[dr2 * cols + dc2] >= 2) {
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
  const hud = document.getElementById("hud");
  if (hud) hud.classList.remove("hidden");
  document.removeEventListener("keydown", handleFirstGesture);
  document.removeEventListener("pointerup", handleFirstGesture);
}
document.addEventListener("keydown", handleFirstGesture);
document.addEventListener("pointerup", handleFirstGesture);

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

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  if (gameState === GAME_STATE.PLAYING) {
    // Phase 41+: enemy updates, movement, room logic
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

  // Step 3 — Draw the current room tile grid (floor, wall outlines, door glow dots)
  renderRoom(currentRoom);
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

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
    // TODO(phase-40): enemy updates, room logic
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
  // Background
  ctx.fillStyle = "#05050c";
  ctx.fillRect(0, 0, W, H);

  // Decorative grid (slightly more visible in playing state)
  ctx.save();
  ctx.globalAlpha = 0.06;
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

  // Center glow orb — pulsing cyan with pink core
  const pulse = Math.sin(Date.now() / 800);
  const r = 28 + pulse * 4;
  glowCircle(W / 2, H / 2, r, COLORS.cyan, 48);
  glowCircle(W / 2, H / 2, 10, COLORS.pink, 20);

  // Wordmark label above orb
  ctx.save();
  ctx.font = "bold 20px 'Segoe UI', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#e8e8ff";
  ctx.shadowBlur = 0;
  ctx.fillText("NEON GAUNTLET", W / 2, H / 2 - 72);
  ctx.restore();
  // TODO(phase-40): replace placeholder render with maze/room draw calls
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

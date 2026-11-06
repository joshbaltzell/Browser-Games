// Tic-Tac-Toe: Infinity & Beyond
// Core Game Logic & Rendering

(function() {
  // --- STATE ---
  let mode = 'mega';             // 'mega', 'infinite', 'ultimate', 'gravity'
  let opponent = 'ai';           // 'ai', 'player'
  let aiDifficulty = 'medium';   // 'easy', 'medium', 'hard'
  let boardSize = 10;            // Mega grid dimensions (3 to 30)
  let winLength = 5;             // Symbols needed in a row to win (3 to 6)
  
  let currentPlayer = 'X';       // 'X' starts
  let gameActive = false;
  let isAiThinking = false;
  let moveHistory = [];          // Stack of moves for undoing: [{mode, row, col, subRow, subCol, player}]
  
  // Stats
  let moveCount = 0;
  
  // Camera & Viewport
  let camX = 0;
  let camY = 0;
  let zoom = 1.0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let canvasWidth = 600;
  let canvasHeight = 600;
  let isPinching = false;
  let startPinchDist = 0;
  let startZoom = 1.0;

  // Board Data Structures
  // 1. Mega Grid & Gravity: 2D array [row][col] -> null, 'X', or 'O'
  let megaGrid = [];
  
  // 2. Infinite Void: Map key "row,col" -> 'X' or 'O'
  let infiniteGrid = new Map();
  
  // 3. Ultimate (Nested):
  // subGrids: 3x3 array where each element is a 3x3 array [row][col] -> null, 'X', 'O'
  // globalGrid: 3x3 array -> null, 'X', 'O', 'draw' (won/completed status of sub-grids)
  // activeSubGrid: {row, col} or null if player can play anywhere
  let subGrids = [];
  let globalGrid = [];
  let activeSubGrid = null;

  // Rendering Constant Dimensions
  const CELL_SIZE = 60;          // Base cell size for Mega & Infinite grid
  const SUB_GRID_SIZE = 160;     // Sub-grid size for Ultimate mode
  const ULTIMATE_SPACING = 24;   // Spacing between sub-grids in Ultimate mode
  
  // Animations & Physics
  let particles = [];
  let cosmicDust = [];
  let placedSymbols = [];        // [{row, col, player, progress, type, subRow, subCol, finalY, currentY}] for drawing animations
  let winningCells = null;       // Set of winning cells to draw lasers/glowing effects
  let cameraShake = 0;           // Shake intensity in pixels
  let hoverCell = null;          // {row, col, subRow, subCol} currently hovered cell
  
  // DOM Elements
  const lobbyScreen = document.getElementById('lobby-screen');
  const gameScreen = document.getElementById('game-screen');
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  
  const modeCards = document.querySelectorAll('.mode-card');
  const opponentToggle = document.getElementById('opponent-toggle');
  const difficultySettingCol = document.getElementById('difficulty-setting-col');
  const difficultySelect = document.getElementById('difficulty-select');
  const gridDimensionsRow = document.getElementById('grid-dimensions-row');
  
  const boardSizeSlider = document.getElementById('board-size-slider');
  const boardSizeVal = document.getElementById('board-size-val');
  const boardSizeText = document.getElementById('board-size-text');
  const boardSizeText2 = document.getElementById('board-size-text-2');
  
  const winLengthSlider = document.getElementById('win-length-slider');
  const winLengthVal = document.getElementById('win-length-val');
  const winLengthText = document.getElementById('win-length-text');
  
  const btnStart = document.getElementById('btn-start');
  const btnRestart = document.getElementById('btn-restart');
  const btnUndo = document.getElementById('btn-undo');
  const btnExit = document.getElementById('btn-exit');
  const btnRematch = document.getElementById('btn-rematch');
  const btnLobby = document.getElementById('btn-lobby');
  
  const turnAvatar = document.getElementById('turn-avatar');
  const turnText = document.getElementById('turn-text');
  const turnSubtext = document.getElementById('turn-subtext');
  const hudWinLength = document.getElementById('hud-win-length');
  const hudMoves = document.getElementById('hud-moves');
  
  const aiConsole = document.getElementById('ai-console');
  const aiPulseDot = document.getElementById('ai-pulse-dot');
  const aiAnalyzerPanel = document.getElementById('ai-analyzer-panel');
  const gameOverOverlay = document.getElementById('game-over-overlay');
  const winTitle = document.getElementById('win-title');
  const winDesc = document.getElementById('win-desc');
  const canvasNavTooltip = document.getElementById('canvas-nav-tooltip');

  // --- INITIALIZE ---
  function init() {
    setupLobbyEvents();
    setupGameEvents();
    setupCosmicDust();
    requestAnimationFrame(animationLoop);
  }

  // --- LOBBY SETTINGS LOGIC ---
  function setupLobbyEvents() {
    // Mode Card Clicks
    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        modeCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        mode = card.dataset.mode;
        updateLobbySettingsVisibility();
      });
    });

    // Opponent Toggle
    opponentToggle.addEventListener('click', (e) => {
      const btn = e.target.closest('.toggle-btn');
      if (!btn) return;
      
      opponentToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      opponent = btn.dataset.val;

      if (opponent === 'ai') {
        difficultySettingCol.style.display = 'flex';
        aiAnalyzerPanel.style.display = 'flex';
      } else {
        difficultySettingCol.style.display = 'none';
        aiAnalyzerPanel.style.display = 'none';
      }
    });

    // Board Size Slider
    boardSizeSlider.addEventListener('input', () => {
      boardSize = parseInt(boardSizeSlider.value);
      boardSizeVal.textContent = boardSize;
      boardSizeText.textContent = boardSize;
      boardSizeText2.textContent = boardSize;
      
      // Dynamic adjustments of Win Length based on board size
      let maxWin = Math.min(6, boardSize);
      let minWin = 3;
      winLengthSlider.max = maxWin;
      
      if (parseInt(winLengthSlider.value) > maxWin) {
        winLengthSlider.value = maxWin;
        winLengthVal.textContent = maxWin;
        winLengthText.textContent = maxWin;
        winLength = maxWin;
      }
      if (boardSize <= 4) {
        winLengthSlider.value = Math.min(boardSize, 3);
        winLengthVal.textContent = winLengthSlider.value;
        winLengthText.textContent = winLengthSlider.value;
        winLength = parseInt(winLengthSlider.value);
      }
    });

    // Win Length Slider
    winLengthSlider.addEventListener('input', () => {
      winLength = parseInt(winLengthSlider.value);
      winLengthVal.textContent = winLength;
      winLengthText.textContent = winLength;
    });

    // Start Button
    btnStart.addEventListener('click', startGame);
  }

  function updateLobbySettingsVisibility() {
    if (mode === 'mega') {
      gridDimensionsRow.style.display = 'grid';
      document.getElementById('board-size-setting-col').style.display = 'flex';
      document.getElementById('win-length-setting-col').style.display = 'flex';
      boardSizeSlider.min = 3;
      boardSizeSlider.max = 30;
      boardSizeSlider.value = 10;
      boardSize = 10;
      boardSizeVal.textContent = 10;
      boardSizeText.textContent = 10;
      boardSizeText2.textContent = 10;
      winLengthSlider.value = 5;
      winLength = 5;
      winLengthVal.textContent = 5;
      winLengthText.textContent = 5;
    } else if (mode === 'gravity') {
      gridDimensionsRow.style.display = 'grid';
      document.getElementById('board-size-setting-col').style.display = 'flex';
      document.getElementById('win-length-setting-col').style.display = 'flex';
      boardSizeSlider.min = 4;
      boardSizeSlider.max = 16;
      boardSizeSlider.value = 8;
      boardSize = 8;
      boardSizeVal.textContent = 8;
      boardSizeText.textContent = 8;
      boardSizeText2.textContent = 8;
      winLengthSlider.value = 4;
      winLength = 4;
      winLengthVal.textContent = 4;
      winLengthText.textContent = 4;
    } else {
      // Infinite & Ultimate modes have fixed rules
      gridDimensionsRow.style.display = 'none';
      if (mode === 'infinite') {
        winLength = 5;
      } else if (mode === 'ultimate') {
        winLength = 3;
      }
    }
  }

  // --- GAME START & RESTART ---
  function startGame() {
    lobbyScreen.style.display = 'none';
    gameScreen.style.display = 'grid';
    
    // Set active values
    aiDifficulty = difficultySelect.value;
    currentPlayer = 'X';
    gameActive = true;
    moveHistory = [];
    moveCount = 0;
    winningCells = null;
    placedSymbols = [];
    particles = [];
    cameraShake = 0;
    isAiThinking = false;
    hoverCell = null;

    hudWinLength.textContent = winLength;
    hudMoves.textContent = '0';
    
    // Update Turn Indicator
    updateTurnIndicator();

    // Reset AI subroutines log
    if (opponent === 'ai') {
      logAiConsole("AI Core Online.\nSubroutines loaded. Difficulty: " + aiDifficulty.toUpperCase() + ".\nMake your move, Human.");
    }

    // Initialize board configurations
    initBoardData();

    // Reset Camera
    resetCamera();

    // Resize canvas to fit wrapper
    resizeCanvas();
    
    // Show navigation helper tooltips for infinite grid and mega boards
    if (mode === 'infinite' || (mode === 'mega' && boardSize > 12)) {
      canvasNavTooltip.style.display = 'flex';
    } else {
      canvasNavTooltip.style.display = 'none';
    }

    gameOverOverlay.style.display = 'none';
  }

  function initBoardData() {
    if (mode === 'mega' || mode === 'gravity') {
      megaGrid = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    } else if (mode === 'infinite') {
      infiniteGrid.clear();
    } else if (mode === 'ultimate') {
      // 3x3 global board of 3x3 local boards
      subGrids = Array(3).fill(null).map(() => 
        Array(3).fill(null).map(() => 
          Array(3).fill(null).map(() => 
            Array(3).fill(null)
          )
        )
      );
      globalGrid = Array(3).fill(null).map(() => Array(3).fill(null));
      activeSubGrid = null;
    }
  }

  function resetCamera() {
    zoom = 1.0;
    camX = 0;
    camY = 0;

    if (mode === 'mega') {
      // Auto zoom to fit if board is large
      const boardWidth = boardSize * CELL_SIZE;
      const fitRatio = Math.min((canvasWidth - 60) / boardWidth, (canvasHeight - 60) / boardWidth, 1.2);
      zoom = fitRatio;
    } else if (mode === 'gravity') {
      const boardWidth = boardSize * CELL_SIZE;
      const fitRatio = Math.min((canvasWidth - 60) / boardWidth, (canvasHeight - 60) / boardWidth, 1.2);
      zoom = fitRatio;
    } else if (mode === 'ultimate') {
      const boardWidth = 3 * SUB_GRID_SIZE + 2 * ULTIMATE_SPACING;
      const fitRatio = Math.min((canvasWidth - 40) / boardWidth, (canvasHeight - 40) / boardWidth, 1.1);
      zoom = fitRatio;
    }
  }

  function resizeCanvas() {
    const wrapper = document.getElementById('board-wrapper');
    if (!wrapper) return;
    
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasWidth = wrapper.clientWidth;
    canvasHeight = wrapper.clientHeight;
    
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = canvasHeight + 'px';
    
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', () => {
    if (gameActive) {
      resizeCanvas();
    }
  });

  // --- INTERACTION HANDLING ---
  function setupGameEvents() {
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('wheel', onWheel);
    
    // Touch support
    canvas.addEventListener('touchstart', onTouchStart, {passive: false});
    canvas.addEventListener('touchmove', onTouchMove, {passive: false});
    canvas.addEventListener('touchend', onTouchEnd, {passive: false});

    // Buttons
    btnRestart.addEventListener('click', startGame);
    btnRematch.addEventListener('click', startGame);
    btnUndo.addEventListener('click', triggerUndo);
    
    btnExit.addEventListener('click', exitToLobby);
    btnLobby.addEventListener('click', exitToLobby);
  }

  function exitToLobby() {
    gameActive = false;
    lobbyScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    gameOverOverlay.style.display = 'none';
  }

  // Camera Conversions
  function screenToWorld(sx, sy) {
    const rect = canvas.getBoundingClientRect();
    const x = sx - rect.left;
    const y = sy - rect.top;
    return {
      x: (x - canvasWidth / 2) / zoom - camX,
      y: (y - canvasHeight / 2) / zoom - camY
    };
  }

  // Get cell indices from world coordinates
  function worldToCell(wx, wy) {
    if (mode === 'mega' || mode === 'gravity') {
      const boardWidth = boardSize * CELL_SIZE;
      const startX = -boardWidth / 2;
      const startY = -boardWidth / 2;
      
      const col = Math.floor((wx - startX) / CELL_SIZE);
      const row = Math.floor((wy - startY) / CELL_SIZE);
      
      if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        return { row, col };
      }
    } else if (mode === 'infinite') {
      const col = Math.floor((wx + CELL_SIZE / 2) / CELL_SIZE);
      const row = Math.floor((wy + CELL_SIZE / 2) / CELL_SIZE);
      return { row, col };
    } else if (mode === 'ultimate') {
      const ultimateWidth = 3 * SUB_GRID_SIZE + 2 * ULTIMATE_SPACING;
      const startX = -ultimateWidth / 2;
      const startY = -ultimateWidth / 2;
      
      // Determine which sub-grid
      const gc = Math.floor((wx - startX) / (SUB_GRID_SIZE + ULTIMATE_SPACING));
      const gr = Math.floor((wy - startY) / (SUB_GRID_SIZE + ULTIMATE_SPACING));
      
      if (gr >= 0 && gr < 3 && gc >= 0 && gc < 3) {
        // Center coordinates of this sub-grid
        const gridCenterX = startX + gc * (SUB_GRID_SIZE + ULTIMATE_SPACING) + SUB_GRID_SIZE / 2;
        const gridCenterY = startY + gr * (SUB_GRID_SIZE + ULTIMATE_SPACING) + SUB_GRID_SIZE / 2;
        
        // Relative coordinates inside sub-grid
        const rx = wx - gridCenterX;
        const ry = wy - gridCenterY;
        
        const subCellSize = SUB_GRID_SIZE / 3;
        const subCol = Math.floor((rx + SUB_GRID_SIZE / 2) / subCellSize);
        const subRow = Math.floor((ry + SUB_GRID_SIZE / 2) / subCellSize);
        
        if (subRow >= 0 && subRow < 3 && subCol >= 0 && subCol < 3) {
          return { row: gr, col: gc, subRow, subCol };
        }
      }
    }
    return null;
  }

  function getCellCenter(row, col, subRow = null, subCol = null) {
    if (mode === 'mega' || mode === 'gravity') {
      const boardWidth = boardSize * CELL_SIZE;
      const startX = -boardWidth / 2;
      const startY = -boardWidth / 2;
      return {
        x: startX + col * CELL_SIZE + CELL_SIZE / 2,
        y: startY + row * CELL_SIZE + CELL_SIZE / 2
      };
    } else if (mode === 'infinite') {
      return {
        x: col * CELL_SIZE,
        y: row * CELL_SIZE
      };
    } else if (mode === 'ultimate') {
      const ultimateWidth = 3 * SUB_GRID_SIZE + 2 * ULTIMATE_SPACING;
      const startX = -ultimateWidth / 2;
      const startY = -ultimateWidth / 2;
      
      const gridCenterX = startX + col * (SUB_GRID_SIZE + ULTIMATE_SPACING) + SUB_GRID_SIZE / 2;
      const gridCenterY = startY + row * (SUB_GRID_SIZE + ULTIMATE_SPACING) + SUB_GRID_SIZE / 2;
      
      if (subRow !== null && subCol !== null) {
        const subCellSize = SUB_GRID_SIZE / 3;
        return {
          x: gridCenterX - SUB_GRID_SIZE / 2 + subCol * subCellSize + subCellSize / 2,
          y: gridCenterY - SUB_GRID_SIZE / 2 + subRow * subCellSize + subCellSize / 2
        };
      }
      return { x: gridCenterX, y: gridCenterY };
    }
  }

  // --- mouse input handlers ---
  function onMouseDown(e) {
    if (!gameActive || isAiThinking) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }

  function onMouseMove(e) {
    if (!gameActive) return;
    
    if (isDragging) {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      
      // Pan camera
      camX += dx / zoom;
      camY += dy / zoom;
      
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    } else {
      // Update Hover Preview state
      const worldPos = screenToWorld(e.clientX, e.clientY);
      hoverCell = worldToCell(worldPos.x, worldPos.y);
    }
  }

  function onMouseUp(e) {
    if (!isDragging) return;
    isDragging = false;
    
    const dragDistance = Math.hypot(e.clientX - dragStartX, e.clientY - dragStartY);
    
    // If it was a short click/tap and not a camera drag, attempt to make a move
    if (dragDistance < 6) {
      const worldPos = screenToWorld(e.clientX, e.clientY);
      const cellInfo = worldToCell(worldPos.x, worldPos.y);
      if (cellInfo) {
        handleUserClick(cellInfo);
      }
    }
  }

  function onWheel(e) {
    if (!gameActive) return;
    e.preventDefault();
    
    const zoomFactor = 1.1;
    const oldZoom = zoom;
    
    if (e.deltaY < 0) {
      zoom = Math.min(3.5, zoom * zoomFactor);
    } else {
      zoom = Math.max(0.3, zoom / zoomFactor);
    }
    
    // Zoom centered on pointer
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const wx = (mouseX - canvasWidth / 2) / oldZoom - camX;
    const wy = (mouseY - canvasHeight / 2) / oldZoom - camY;
    
    camX = (mouseX - canvasWidth / 2) / zoom - wx;
    camY = (mouseY - canvasHeight / 2) / zoom - wy;
  }

  // Touch zoom/pan details
  function onTouchStart(e) {
    if (!gameActive || isAiThinking) return;
    if (e.touches.length === 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      isDragging = false;
      isPinching = true;
      startPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      startZoom = zoom;
      
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const rect = canvas.getBoundingClientRect();
      const wx = (midX - rect.left - canvasWidth / 2) / zoom - camX;
      const wy = (midY - rect.top - canvasHeight / 2) / zoom - camY;
      
      this.pinchCenter = { wx, wy, midX: midX - rect.left, midY: midY - rect.top };
    }
  }

  function onTouchMove(e) {
    if (!gameActive) return;
    e.preventDefault();
    
    if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      camX += dx / zoom;
      camY += dy / zoom;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    } else if (isPinching && e.touches.length === 2 && this.pinchCenter) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      zoom = Math.min(3.5, Math.max(0.3, startZoom * (dist / startPinchDist)));
      
      // Zoom relative to center pinch coordinate
      const pc = this.pinchCenter;
      camX = pc.midX - canvasWidth / 2 / zoom - pc.wx;
      camY = pc.midY - canvasHeight / 2 / zoom - pc.wy;
    }
  }

  function onTouchEnd(e) {
    if (isDragging) {
      isDragging = false;
      const dragDistance = Math.hypot(lastMouseX - dragStartX, lastMouseY - dragStartY);
      if (dragDistance < 10) {
        const worldPos = screenToWorld(dragStartX, dragStartY);
        const cellInfo = worldToCell(worldPos.x, worldPos.y);
        if (cellInfo) {
          handleUserClick(cellInfo);
        }
      }
    }
    if (isPinching) {
      isPinching = false;
      this.pinchCenter = null;
    }
  }

  // --- GAMEPLAY MOVES ---
  function handleUserClick(cellInfo) {
    if (!gameActive || isAiThinking) return;

    let success = false;
    if (mode === 'mega') {
      success = placePieceMega(cellInfo.row, cellInfo.col, currentPlayer);
    } else if (mode === 'infinite') {
      success = placePieceInfinite(cellInfo.row, cellInfo.col, currentPlayer);
    } else if (mode === 'ultimate') {
      success = placePieceUltimate(cellInfo.row, cellInfo.col, cellInfo.subRow, cellInfo.subCol, currentPlayer);
    } else if (mode === 'gravity') {
      // Find row in column
      const row = getGravityRow(cellInfo.col);
      if (row !== -1) {
        success = placePieceGravity(row, cellInfo.col, currentPlayer);
      }
    }

    if (success) {
      finalizeTurn();
    }
  }

  function getGravityRow(col) {
    for (let r = boardSize - 1; r >= 0; r--) {
      if (megaGrid[r][col] === null) {
        return r;
      }
    }
    return -1;
  }

  // Mode Specific Placements
  function placePieceMega(row, col, player) {
    if (megaGrid[row][col] !== null) return false;
    megaGrid[row][col] = player;
    
    // Add draw animation entry
    const pos = getCellCenter(row, col);
    placedSymbols.push({ row, col, player, progress: 0, x: pos.x, y: pos.y });
    
    // Save to move history
    moveHistory.push({ mode: 'mega', row, col, player });
    
    spawnImpactParticles(pos.x, pos.y, player);
    cameraShake = 4;
    return true;
  }

  function placePieceGravity(row, col, player) {
    if (megaGrid[row][col] !== null) return false;
    megaGrid[row][col] = player;

    const startPos = getCellCenter(0, col);
    const endPos = getCellCenter(row, col);

    // Add entry with animated sliding y-value
    placedSymbols.push({ 
      row, col, player, progress: 0, 
      x: endPos.x, y: endPos.y,
      currentY: startPos.y, finalY: endPos.y,
      isFalling: true 
    });

    moveHistory.push({ mode: 'gravity', row, col, player });
    return true;
  }

  function placePieceInfinite(row, col, player) {
    const key = `${row},${col}`;
    if (infiniteGrid.has(key)) return false;
    infiniteGrid.set(key, player);

    const pos = getCellCenter(row, col);
    placedSymbols.push({ row, col, player, progress: 0, x: pos.x, y: pos.y });

    moveHistory.push({ mode: 'infinite', row, col, player });

    spawnImpactParticles(pos.x, pos.y, player);
    cameraShake = 4;
    return true;
  }

  function placePieceUltimate(row, col, subRow, subCol, player) {
    // Check if player is forced to play in a specific sub-grid
    if (activeSubGrid !== null) {
      if (activeSubGrid.row !== row || activeSubGrid.col !== col) {
        return false; // Wrong grid
      }
    }

    // Check if sub-grid cell is unoccupied and sub-grid isn't finished
    if (subGrids[row][col][subRow][subCol] !== null || globalGrid[row][col] !== null) {
      return false;
    }

    // Place symbol
    subGrids[row][col][subRow][subCol] = player;
    const pos = getCellCenter(row, col, subRow, subCol);
    placedSymbols.push({ row, col, subRow, subCol, player, progress: 0, x: pos.x, y: pos.y });

    moveHistory.push({ mode: 'ultimate', row, col, subRow, subCol, player, previousActiveSubGrid: activeSubGrid ? {...activeSubGrid} : null });

    spawnImpactParticles(pos.x, pos.y, player);
    cameraShake = 3;

    // Check if this sub-grid is now won or drawn
    checkSubGridWin(row, col, player);

    // Determine forced active subgrid for next turn
    const targetSubGridFinished = globalGrid[subRow][subCol] !== null;
    if (targetSubGridFinished) {
      activeSubGrid = null; // Free move
    } else {
      activeSubGrid = { row: subRow, col: subCol };
    }

    return true;
  }

  function checkSubGridWin(gr, gc, player) {
    const grid = subGrids[gr][gc];
    let won = false;

    // Horiz/Vert
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) won = true;
      if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) won = true;
    }
    // Diag
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) won = true;
    if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) won = true;

    if (won) {
      globalGrid[gr][gc] = player;
      const subCenter = getCellCenter(gr, gc);
      spawnSubGridWinParticles(subCenter.x, subCenter.y, player);
      cameraShake = 8;
    } else {
      // Check full draw
      let full = true;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (grid[r][c] === null) full = false;
        }
      }
      if (full) {
        globalGrid[gr][gc] = 'draw';
      }
    }
  }

  function checkWinState() {
    if (mode === 'mega' || mode === 'gravity') {
      return checkWinMegaGrid();
    } else if (mode === 'infinite') {
      return checkWinInfiniteGrid();
    } else if (mode === 'ultimate') {
      return checkWinUltimateGrid();
    }
    return false;
  }

  function checkWinMegaGrid() {
    const size = boardSize;
    // Check horizontal, vertical, and diagonals
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const player = megaGrid[r][c];
        if (player === null) continue;

        // Vectors: Right, Down, Down-Right, Down-Left
        const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
        for (const [dr, dc] of directions) {
          let consecutive = 1;
          const coords = [{row: r, col: c}];
          
          for (let step = 1; step < winLength; step++) {
            const nr = r + dr * step;
            const nc = c + dc * step;
            if (nr >= 0 && nr < size && nc >= 0 && nc < size && megaGrid[nr][nc] === player) {
              consecutive++;
              coords.push({row: nr, col: nc});
            } else {
              break;
            }
          }
          if (consecutive >= winLength) {
            winningCells = coords;
            return player;
          }
        }
      }
    }

    // Check draw
    let full = true;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (megaGrid[r][c] === null) full = false;
      }
    }
    return full ? 'draw' : false;
  }

  function checkWinInfiniteGrid() {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    
    for (const [key, player] of infiniteGrid.entries()) {
      const [r, c] = key.split(',').map(Number);
      
      for (const [dr, dc] of directions) {
        let consecutive = 1;
        const coords = [{row: r, col: c}];
        
        for (let step = 1; step < winLength; step++) {
          const nr = r + dr * step;
          const nc = c + dc * step;
          if (infiniteGrid.get(`${nr},${nc}`) === player) {
            consecutive++;
            coords.push({row: nr, col: nc});
          } else {
            break;
          }
        }
        if (consecutive >= winLength) {
          winningCells = coords;
          return player;
        }
      }
    }

    // Infinite board never has a draw by design
    return false;
  }

  function checkWinUltimateGrid() {
    // Checks 3x3 global board
    const grid = globalGrid;
    const players = ['X', 'O'];

    for (const player of players) {
      let won = false;
      let winningLine = [];

      // Horiz/Vert
      for (let i = 0; i < 3; i++) {
        if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
          won = true;
          winningLine = [{row: i, col: 0}, {row: i, col: 1}, {row: i, col: 2}];
        }
        if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) {
          won = true;
          winningLine = [{row: 0, col: i}, {row: 1, col: i}, {row: 2, col: i}];
        }
      }
      // Diag
      if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
        won = true;
        winningLine = [{row: 0, col: 0}, {row: 1, col: 1}, {row: 2, col: 2}];
      }
      if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
        won = true;
        winningLine = [{row: 0, col: 2}, {row: 1, col: 1}, {row: 2, col: 0}];
      }

      if (won) {
        winningCells = winningLine;
        return player;
      }
    }

    // Check full global board draw
    let full = true;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (globalGrid[r][c] === null) full = false;
      }
    }
    return full ? 'draw' : false;
  }

  function finalizeTurn() {
    moveCount++;
    hudMoves.textContent = moveCount;

    const victor = checkWinState();
    if (victor) {
      endGame(victor);
      return;
    }

    // Swap turns
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateTurnIndicator();

    // Trigger AI Move
    if (opponent === 'ai' && currentPlayer === 'O' && gameActive) {
      triggerAiMove();
    }
  }

  function updateTurnIndicator() {
    turnAvatar.className = 'avatar-indicator ' + (currentPlayer === 'X' ? 'x-turn' : 'o-turn');
    turnAvatar.textContent = currentPlayer;
    turnText.textContent = (opponent === 'ai' && currentPlayer === 'O') ? "AI thinking..." : `Player ${currentPlayer}'s Turn`;
    turnSubtext.textContent = (opponent === 'ai') ? (currentPlayer === 'X' ? 'Your Turn' : 'Neural calculations active...') : 'Local PvP mode';
  }

  function endGame(winner) {
    gameActive = false;
    gameOverOverlay.style.display = 'flex';
    
    if (winner === 'draw') {
      winTitle.className = 'win-title draw-game';
      winTitle.textContent = "GRID SATURATED";
      winDesc.textContent = "It is a cosmic draw! The board is completely locked.";
    } else {
      winTitle.className = `win-title ${winner.toLowerCase()}-won`;
      winTitle.textContent = `PLAYER ${winner} VICTORY`;
      winDesc.textContent = (opponent === 'ai' && winner === 'O') ? 
        `The AI has beaten you in ${moveCount} moves.` : 
        `Victory secured in ${moveCount} total moves.`;

      // Big explosion of particles on winning cell centroids!
      if (winningCells) {
        winningCells.forEach(cell => {
          const center = getCellCenter(cell.row, cell.col, cell.subRow, cell.subCol);
          spawnWinSequenceExplosion(center.x, center.y, winner);
        });
      }
    }
  }

  // --- UNDO MOVE ACTION ---
  function triggerUndo() {
    if (!gameActive || isAiThinking || moveHistory.length === 0) return;

    if (opponent === 'ai') {
      // Undo two moves (both AI and player)
      if (moveHistory.length >= 2) {
        undoSingleMove();
        undoSingleMove();
        logAiConsole("Moves reverted. Re-initializing game branch.");
      }
    } else {
      // Undo single player move
      undoSingleMove();
    }

    // Sync views
    hudMoves.textContent = moveCount;
    updateTurnIndicator();
    winningCells = null;
  }

  function undoSingleMove() {
    const lastMove = moveHistory.pop();
    if (!lastMove) return;

    if (lastMove.mode === 'mega' || lastMove.mode === 'gravity') {
      megaGrid[lastMove.row][lastMove.col] = null;
    } else if (lastMove.mode === 'infinite') {
      infiniteGrid.delete(`${lastMove.row},${lastMove.col}`);
    } else if (lastMove.mode === 'ultimate') {
      subGrids[lastMove.row][lastMove.col][lastMove.subRow][lastMove.subCol] = null;
      globalGrid[lastMove.row][lastMove.col] = null; // Re-open sub-board status
      activeSubGrid = lastMove.previousActiveSubGrid;
    }

    // Filter placed symbols array
    placedSymbols = placedSymbols.filter(sym => {
      if (mode === 'ultimate') {
        return !(sym.row === lastMove.row && sym.col === lastMove.col && sym.subRow === lastMove.subRow && sym.subCol === lastMove.subCol);
      }
      return !(sym.row === lastMove.row && sym.col === lastMove.col);
    });

    currentPlayer = lastMove.player;
    moveCount--;
  }

  // --- AI LOGIC (HEURISTICS & ALPHA-BETA MINIMAX) ---
  function logAiConsole(text) {
    if (!aiConsole) return;
    const entry = document.createElement('div');
    entry.className = 'ai-log-entry';
    entry.textContent = `> ${text}`;
    aiConsole.appendChild(entry);
    aiConsole.scrollTop = aiConsole.scrollHeight;
  }

  function triggerAiMove() {
    isAiThinking = true;
    aiPulseDot.classList.add('thinking');
    logAiConsole("Activating processor threads...");

    const startThinkingTime = Date.now();

    // Spawn a async-like set timeout so thinking visualizer runs
    setTimeout(() => {
      const bestMove = calculateBestMove();
      const delay = Math.max(10, 800 - (Date.now() - startThinkingTime)); // Ensure scanning laser animation runs for at least 800ms

      setTimeout(() => {
        if (!gameActive) {
          isAiThinking = false;
          aiPulseDot.classList.remove('thinking');
          return;
        }

        let success = false;
        if (mode === 'mega') {
          success = placePieceMega(bestMove.row, bestMove.col, 'O');
        } else if (mode === 'infinite') {
          success = placePieceInfinite(bestMove.row, bestMove.col, 'O');
        } else if (mode === 'ultimate') {
          success = placePieceUltimate(bestMove.row, bestMove.col, bestMove.subRow, bestMove.subCol, 'O');
        } else if (mode === 'gravity') {
          success = placePieceGravity(bestMove.row, bestMove.col, 'O');
        }

        isAiThinking = false;
        aiPulseDot.classList.remove('thinking');
        
        if (success) {
          logAiConsole(`Placed O at position [${bestMove.row}, ${bestMove.col}]${bestMove.subRow !== undefined ? ` [${bestMove.subRow}, ${bestMove.subCol}]` : ''}.`);
          finalizeTurn();
        }
      }, delay);
    }, 50);
  }

  function calculateBestMove() {
    if (mode === 'ultimate') {
      return getBestUltimateMove();
    }
    
    // For Mega, Gravity, and Infinite Void grids, use heuristic scorer
    return getBestHeuristicMove();
  }

  // 1. Nested/Ultimate AI: Minimax Alpha-Beta on subgrids
  function getBestUltimateMove() {
    // Find all valid moves
    const moves = [];
    if (activeSubGrid !== null) {
      const {row, col} = activeSubGrid;
      for (let sr = 0; sr < 3; sr++) {
        for (let sc = 0; sc < 3; sc++) {
          if (subGrids[row][col][sr][sc] === null) {
            moves.push({row, col, subRow: sr, subCol: sc});
          }
        }
      }
    }
    
    // If active subgrid is null (or full), player can play anywhere
    if (moves.length === 0) {
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (globalGrid[r][c] === null) {
            for (let sr = 0; sr < 3; sr++) {
              for (let sc = 0; sc < 3; sc++) {
                if (subGrids[r][c][sr][sc] === null) {
                  moves.push({row: r, col: c, subRow: sr, subCol: sc});
                }
              }
            }
          }
        }
      }
    }

    if (moves.length === 0) return null; // No moves left

    // If Easy mode, just pick randomly
    if (aiDifficulty === 'easy') {
      logAiConsole("CPU threat analysis: Bypass heuristics. Making random selection.");
      return moves[Math.floor(Math.random() * moves.length)];
    }

    // Medium/Hard evaluate moves
    logAiConsole(`Analyzing ${moves.length} active mini-grid cells...`);
    
    let bestMove = moves[0];
    let bestScore = -Infinity;
    
    // Ultimate AI evaluations
    const depth = aiDifficulty === 'hard' ? 4 : 2;
    
    moves.forEach(m => {
      // Simulate move
      subGrids[m.row][m.col][m.subRow][m.subCol] = 'O';
      const oldGlobal = globalGrid[m.row][m.col];
      
      // Update global grid
      let localWon = checkMiniGridWinOnly(m.row, m.col, 'O');
      if (localWon) globalGrid[m.row][m.col] = 'O';

      const score = minimaxUltimate(depth, false, -Infinity, Infinity, {row: m.subRow, col: m.subCol});

      // Revert move
      subGrids[m.row][m.col][m.subRow][m.subCol] = null;
      globalGrid[m.row][m.col] = oldGlobal;

      if (score > bestScore) {
        bestScore = score;
        bestMove = m;
      }
    });

    logAiConsole(`Analysis completed. Optimal branch score: ${bestScore}.`);
    return bestMove;
  }

  function checkMiniGridWinOnly(gr, gc, player) {
    const grid = subGrids[gr][gc];
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) return true;
      if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) return true;
    }
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) return true;
    if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) return true;
    return false;
  }

  function evaluateGlobalGrid() {
    let score = 0;
    // Base heuristic for global board status
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (globalGrid[r][c] === 'O') score += 100;
        else if (globalGrid[r][c] === 'X') score -= 100;
      }
    }
    return score;
  }

  function minimaxUltimate(depth, isMax, alpha, beta, forcedGrid) {
    const winner = checkGlobalWinnerOnly();
    if (winner === 'O') return 1000 + depth;
    if (winner === 'X') return -1000 - depth;
    if (depth === 0) return evaluateGlobalGrid();

    // Get legal moves
    const moves = [];
    const gr = forcedGrid.row;
    const gc = forcedGrid.col;

    const playAnywhere = (globalGrid[gr][gc] !== null);
    
    if (!playAnywhere) {
      for (let sr = 0; sr < 3; sr++) {
        for (let sc = 0; sc < 3; sc++) {
          if (subGrids[gr][gc][sr][sc] === null) {
            moves.push({row: gr, col: gc, subRow: sr, subCol: sc});
          }
        }
      }
    }

    if (moves.length === 0) {
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (globalGrid[r][c] === null) {
            for (let sr = 0; sr < 3; sr++) {
              for (let sc = 0; sc < 3; sc++) {
                if (subGrids[r][c][sr][sc] === null) {
                  moves.push({row: r, col: c, subRow: sr, subCol: sc});
                }
              }
            }
          }
        }
      }
    }

    if (moves.length === 0) return 0; // Draw score

    if (isMax) {
      let maxEval = -Infinity;
      for (const m of moves) {
        subGrids[m.row][m.col][m.subRow][m.subCol] = 'O';
        const oldG = globalGrid[m.row][m.col];
        if (checkMiniGridWinOnly(m.row, m.col, 'O')) globalGrid[m.row][m.col] = 'O';

        const ev = minimaxUltimate(depth - 1, false, alpha, beta, {row: m.subRow, col: m.subCol});
        
        subGrids[m.row][m.col][m.subRow][m.subCol] = null;
        globalGrid[m.row][m.col] = oldG;
        
        maxEval = Math.max(maxEval, ev);
        alpha = Math.max(alpha, ev);
        if (beta <= alpha) break;
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const m of moves) {
        subGrids[m.row][m.col][m.subRow][m.subCol] = 'X';
        const oldG = globalGrid[m.row][m.col];
        if (checkMiniGridWinOnly(m.row, m.col, 'X')) globalGrid[m.row][m.col] = 'X';

        const ev = minimaxUltimate(depth - 1, true, alpha, beta, {row: m.subRow, col: m.subCol});
        
        subGrids[m.row][m.col][m.subRow][m.subCol] = null;
        globalGrid[m.row][m.col] = oldG;

        minEval = Math.min(minEval, ev);
        beta = Math.min(beta, ev);
        if (beta <= alpha) break;
      }
      return minEval;
    }
  }

  function checkGlobalWinnerOnly() {
    const grid = globalGrid;
    for (const p of ['X', 'O']) {
      for (let i = 0; i < 3; i++) {
        if (grid[i][0] === p && grid[i][1] === p && grid[i][2] === p) return p;
        if (grid[0][i] === p && grid[1][i] === p && grid[2][i] === p) return p;
      }
      if (grid[0][0] === p && grid[1][1] === p && grid[2][2] === p) return p;
      if (grid[0][2] === p && grid[1][1] === p && grid[2][0] === p) return p;
    }
    return null;
  }

  // 2. Custom Grid / Infinite Grid Heuristic AI
  // Scans available candidate cells and scores them.
  function getBestHeuristicMove() {
    const candidates = getCandidateMoves();
    if (candidates.length === 0) return {row: 0, col: 0}; // Safe fallback

    if (aiDifficulty === 'easy') {
      logAiConsole("CPU processing bypass: Picking random candidate.");
      return candidates[Math.floor(Math.random() * candidates.length)];
    }

    logAiConsole(`Scanning grid topology... Evaluated ${candidates.length} potential cells.`);

    let bestMove = candidates[0];
    let bestScore = -Infinity;

    // Defense multipliers: Hard is highly defensive, Medium is balanced
    const defenseMultiplier = aiDifficulty === 'hard' ? 1.4 : 0.8;

    candidates.forEach(m => {
      // Temporary placements
      const originalO = scoreCell(m.row, m.col, 'O');
      const originalX = scoreCell(m.row, m.col, 'X');
      
      // Calculate score combo
      const score = originalO + (originalX * defenseMultiplier);

      // Save scoring details for drawing thoughts on canvas
      m.aiScore = score;

      if (score > bestScore) {
        bestScore = score;
        bestMove = m;
      }
    });

    logAiConsole(`Highest weight located at [${bestMove.row}, ${bestMove.col}] with coefficient: ${Math.round(bestScore)}.`);
    return bestMove;
  }

  // Returns list of empty cells that are adjacent to already occupied cells (limits branching checks)
  function getCandidateMoves() {
    const list = [];
    const radius = 2; // Check cells within 2 units

    if (mode === 'mega' || mode === 'gravity') {
      for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
          if (megaGrid[r][c] !== null) continue;
          
          if (mode === 'gravity' && getGravityRow(c) !== r) {
            continue; // For Gravity Drop, we can only play on column landing spots
          }
          
          // Check neighbors
          let hasNeighbor = false;
          for (let dr = -radius; dr <= radius && !hasNeighbor; dr++) {
            for (let dc = -radius; dc <= radius; dc++) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < boardSize && nc >= 0 && nc < boardSize) {
                if (megaGrid[nr][nc] !== null) {
                  hasNeighbor = true;
                  break;
                }
              }
            }
          }
          
          // If grid is completely empty, allow center cell
          if (hasNeighbor || moveCount === 0) {
            list.push({row: r, col: c});
          }
        }
      }
    } else if (mode === 'infinite') {
      const checked = new Set();
      
      // Look at all placed pieces and gather empty surrounding coordinates
      for (const key of infiniteGrid.keys()) {
        const [r, c] = key.split(',').map(Number);
        
        for (let dr = -radius; dr <= radius; dr++) {
          for (let dc = -radius; dc <= radius; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            const newKey = `${nr},${nc}`;
            if (!infiniteGrid.has(newKey) && !checked.has(newKey)) {
              checked.add(newKey);
              list.push({row: nr, col: nc});
            }
          }
        }
      }
      
      if (list.length === 0) {
        // Play at 0,0 first
        list.push({row: 0, col: 0});
      }
    }

    return list;
  }

  // Evaluates a candidate cell for a specific player (offensive vs defensive checking)
  function scoreCell(row, col, player) {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    let totalScore = 0;

    directions.forEach(([dr, dc]) => {
      // Analyze this linear line from cell -winLength to +winLength
      let pieces = 0;
      let blockedEnds = 0;
      
      // Traverse line backwards and forwards
      // Count consecutive lines, open bounds, and gaps
      // We do a simplified scoring checker:
      let myLine = 0;
      let openLeft = false;
      let openRight = false;
      
      // Forward direction
      for (let step = 1; step < winLength; step++) {
        const nr = row + dr * step;
        const nc = col + dc * step;
        const sym = getPieceAt(nr, nc);
        
        if (sym === player) {
          myLine++;
        } else if (sym === null) {
          openRight = true;
          break;
        } else {
          // Blocked
          break;
        }
      }

      // Backward direction
      for (let step = 1; step < winLength; step++) {
        const nr = row - dr * step;
        const nc = col - dc * step;
        const sym = getPieceAt(nr, nc);
        
        if (sym === player) {
          myLine++;
        } else if (sym === null) {
          openLeft = true;
          break;
        } else {
          // Blocked
          break;
        }
      }

      // Base weight assignment based on lengths of lines
      let val = 0;
      const count = myLine + 1; // including the clicked cell
      
      if (count >= winLength) {
        val = 50000; // Immediate win configuration
      } else if (count === winLength - 1) {
        // Needs 1 to win
        val = (openLeft && openRight) ? 9000 : 2500;
      } else if (count === winLength - 2) {
        val = (openLeft && openRight) ? 1200 : 350;
      } else if (count === winLength - 3) {
        val = (openLeft && openRight) ? 150 : 40;
      } else if (count === 1) {
        val = (openLeft && openRight) ? 8 : 2;
      }
      
      totalScore += val;
    });

    return totalScore;
  }

  function getPieceAt(r, c) {
    if (mode === 'mega' || mode === 'gravity') {
      if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
        return megaGrid[r][c];
      }
      return 'blocked'; // out of bounds counts as opponent blocked
    } else if (mode === 'infinite') {
      return infiniteGrid.has(`${r},${c}`) ? infiniteGrid.get(`${r},${c}`) : null;
    }
    return null;
  }

  // --- RENDERING LOOP & ARTWORK FX ---
  function setupCosmicDust() {
    cosmicDust = [];
    for (let i = 0; i < 80; i++) {
      cosmicDust.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        drift: Math.random() * 0.1 + 0.02
      });
    }
  }

  function spawnImpactParticles(x, y, player) {
    const color = player === 'X' ? '#00ffd2' : '#ff2a85';
    for (let i = 0; i < 24; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 1.5,
        color,
        alpha: 1.0,
        life: 0,
        maxLife: Math.random() * 30 + 20
      });
    }
  }

  function spawnSubGridWinParticles(x, y, player) {
    const color = player === 'X' ? '#00ffd2' : '#ff2a85';
    // Ring particle expansion
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * 3,
        vy: Math.sin(angle) * 3,
        size: 3,
        color,
        alpha: 1.0,
        life: 0,
        maxLife: 45
      });
    }
    
    // Spark particles
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 5 + 1.5,
        color: '#ffffff',
        alpha: 1.0,
        life: 0,
        maxLife: Math.random() * 40 + 25
      });
    }
  }

  function spawnWinSequenceExplosion(x, y, player) {
    const color = player === 'X' ? '#00ffd2' : '#ff2a85';
    for (let i = 0; i < 45; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 4;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 6 + 2,
        color,
        alpha: 1.0,
        life: 0,
        maxLife: Math.random() * 50 + 30
      });
    }
  }

  function animationLoop(timestamp) {
    if (gameActive) {
      updateSimulation();
      drawGame();
    }
    requestAnimationFrame(animationLoop);
  }

  function updateSimulation() {
    // 1. Camera Shake decay
    if (cameraShake > 0) {
      cameraShake *= 0.9;
      if (cameraShake < 0.1) cameraShake = 0;
    }

    // 2. Cosmic Dust Drift
    cosmicDust.forEach(d => {
      d.y += d.drift;
      if (d.y > 1000) d.y = -1000;
    });

    // 3. Update Particles
    particles = particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.98; // Friction
      p.vy *= 0.98;
      p.life++;
      p.alpha = 1.0 - (p.life / p.maxLife);
      return p.life < p.maxLife;
    });

    // 4. Placed Symbols Drawing Progress
    placedSymbols.forEach(s => {
      if (s.isFalling) {
        // Fall from top row down in gravity drop
        const dy = s.finalY - s.currentY;
        if (Math.abs(dy) > 1) {
          s.currentY += dy * 0.22; // speed
        } else {
          s.currentY = s.finalY;
          s.isFalling = false;
          // Spawn impact when landed
          spawnImpactParticles(s.x, s.y, s.player);
          cameraShake = 5;
        }
      } else {
        // Draw progress
        if (s.progress < 1.0) {
          s.progress = Math.min(1.0, s.progress + 0.08); // Animate drawing over 200ms
        }
      }
    });
  }

  // --- DRAW SYSTEM ---
  function drawGame() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    ctx.save();
    
    // Camera transformations + shake
    let shakeX = 0;
    let shakeY = 0;
    if (cameraShake > 0.1) {
      shakeX = (Math.random() - 0.5) * cameraShake;
      shakeY = (Math.random() - 0.5) * cameraShake;
    }
    
    ctx.translate(canvasWidth / 2 + shakeX, canvasHeight / 2 + shakeY);
    ctx.scale(zoom, zoom);
    ctx.translate(camX, camY);

    // Render components
    drawCosmicDust();
    
    if (mode === 'mega' || mode === 'gravity') {
      drawMegaGridLines();
    } else if (mode === 'infinite') {
      drawInfiniteGridLines();
    } else if (mode === 'ultimate') {
      drawUltimateGridLines();
    }

    drawHoverPreview();
    drawPlacedSymbols();
    drawAiScanningLasers();
    drawLaserWinLine();
    drawParticles();

    ctx.restore();
  }

  function drawCosmicDust() {
    ctx.fillStyle = '#ffffff';
    cosmicDust.forEach(d => {
      ctx.globalAlpha = d.alpha;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;
  }

  function drawMegaGridLines() {
    const size = boardSize;
    const boardWidth = size * CELL_SIZE;
    const startX = -boardWidth / 2;
    const startY = -boardWidth / 2;

    ctx.strokeStyle = '#4e36cc';
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 12;
    ctx.shadowColor = 'rgba(78, 54, 204, 0.4)';

    ctx.beginPath();
    // Verticals
    for (let c = 1; c < size; c++) {
      ctx.moveTo(startX + c * CELL_SIZE, startY);
      ctx.lineTo(startX + c * CELL_SIZE, startY + boardWidth);
    }
    // Horizontals
    for (let r = 1; r < size; r++) {
      ctx.moveTo(startX, startY + r * CELL_SIZE);
      ctx.lineTo(startX + boardWidth, startY + r * CELL_SIZE);
    }
    ctx.stroke();
    
    // Draw thick outer boundary
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(78, 54, 204, 0.7)';
    ctx.strokeRect(startX, startY, boardWidth, boardWidth);

    ctx.shadowBlur = 0; // Reset
  }

  function drawInfiniteGridLines() {
    // Infinite grid draws lines matching the viewport boundaries
    const screenLeft = -canvasWidth / 2 / zoom - camX;
    const screenRight = canvasWidth / 2 / zoom - camX;
    const screenTop = -canvasHeight / 2 / zoom - camY;
    const screenBottom = canvasHeight / 2 / zoom - camY;

    // Grid row/col indices visible on screen
    const colStart = Math.floor((screenLeft - CELL_SIZE/2) / CELL_SIZE);
    const colEnd = Math.ceil((screenRight + CELL_SIZE/2) / CELL_SIZE);
    const rowStart = Math.floor((screenTop - CELL_SIZE/2) / CELL_SIZE);
    const rowEnd = Math.ceil((screenBottom + CELL_SIZE/2) / CELL_SIZE);

    ctx.strokeStyle = 'rgba(78, 54, 204, 0.22)';
    ctx.lineWidth = 1.5;
    
    // Draw lines
    ctx.beginPath();
    for (let c = colStart; c <= colEnd; c++) {
      const x = c * CELL_SIZE - CELL_SIZE / 2;
      ctx.moveTo(x, screenTop);
      ctx.lineTo(x, screenBottom);
    }
    for (let r = rowStart; r <= rowEnd; r++) {
      const y = r * CELL_SIZE - CELL_SIZE / 2;
      ctx.moveTo(screenLeft, y);
      ctx.lineTo(screenRight, y);
    }
    ctx.stroke();

    // High intensity center axes
    ctx.strokeStyle = 'rgba(78, 54, 204, 0.45)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    // Y Axis
    ctx.moveTo(-CELL_SIZE/2, screenTop);
    ctx.lineTo(-CELL_SIZE/2, screenBottom);
    // X Axis
    ctx.moveTo(screenLeft, -CELL_SIZE/2);
    ctx.lineTo(screenRight, -CELL_SIZE/2);
    ctx.stroke();
  }

  function drawUltimateGridLines() {
    const ultimateWidth = 3 * SUB_GRID_SIZE + 2 * ULTIMATE_SPACING;
    const startX = -ultimateWidth / 2;
    const startY = -ultimateWidth / 2;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        // Center coordinates of this local subgrid
        const gridCenterX = startX + c * (SUB_GRID_SIZE + ULTIMATE_SPACING) + SUB_GRID_SIZE / 2;
        const gridCenterY = startY + r * (SUB_GRID_SIZE + ULTIMATE_SPACING) + SUB_GRID_SIZE / 2;
        
        const subLeft = gridCenterX - SUB_GRID_SIZE / 2;
        const subTop = gridCenterY - SUB_GRID_SIZE / 2;

        const isFinished = globalGrid[r][c] !== null;
        
        // Highlight logic for active subgrid
        let isGridPlayable = false;
        if (!isFinished && gameActive) {
          if (activeSubGrid === null) {
            isGridPlayable = true; // Free move anywhere
          } else {
            isGridPlayable = (activeSubGrid.row === r && activeSubGrid.col === c);
          }
        }

        // Draw sub-grid background highlight
        if (isGridPlayable) {
          ctx.fillStyle = 'rgba(0, 255, 210, 0.04)';
          ctx.fillRect(subLeft, subTop, SUB_GRID_SIZE, SUB_GRID_SIZE);
        }

        // Draw borders of subgrid
        ctx.strokeStyle = isGridPlayable ? '#00ffd2' : (isFinished ? 'rgba(78,54,204,0.3)' : 'rgba(78,54,204,0.6)');
        ctx.lineWidth = isGridPlayable ? 3.5 : 2;
        if (isGridPlayable) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(0, 255, 210, 0.4)';
        }
        ctx.strokeRect(subLeft, subTop, SUB_GRID_SIZE, SUB_GRID_SIZE);
        ctx.shadowBlur = 0;

        // Draw inner mini lines if not finished
        if (!isFinished) {
          ctx.strokeStyle = 'rgba(78, 54, 204, 0.45)';
          ctx.lineWidth = 1.5;
          const subCellSize = SUB_GRID_SIZE / 3;
          ctx.beginPath();
          // Verts
          ctx.moveTo(subLeft + subCellSize, subTop);
          ctx.lineTo(subLeft + subCellSize, subTop + SUB_GRID_SIZE);
          ctx.moveTo(subLeft + 2 * subCellSize, subTop);
          ctx.lineTo(subLeft + 2 * subCellSize, subTop + SUB_GRID_SIZE);
          // Horizs
          ctx.moveTo(subLeft, subTop + subCellSize);
          ctx.lineTo(subLeft + SUB_GRID_SIZE, subTop + subCellSize);
          ctx.moveTo(subLeft, subTop + 2 * subCellSize);
          ctx.lineTo(subLeft + SUB_GRID_SIZE, subTop + 2 * subCellSize);
          ctx.stroke();
        } else {
          // Subgrid conquered: Draw giant symbol covering it
          const winner = globalGrid[r][c];
          if (winner === 'X' || winner === 'O') {
            drawLargeSymbol(gridCenterX, gridCenterY, winner);
          } else if (winner === 'draw') {
            ctx.fillStyle = 'rgba(142, 136, 184, 0.2)';
            ctx.font = '700 80px Orbitron';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText("?", gridCenterX, gridCenterY);
          }
        }
      }
    }
  }

  function drawLargeSymbol(cx, cy, player) {
    const size = SUB_GRID_SIZE * 0.6;
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    
    if (player === 'X') {
      ctx.strokeStyle = '#00ffd2';
      ctx.shadowColor = 'rgba(0, 255, 210, 0.45)';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(cx - size / 2, cy - size / 2);
      ctx.lineTo(cx + size / 2, cy + size / 2);
      ctx.moveTo(cx + size / 2, cy - size / 2);
      ctx.lineTo(cx - size / 2, cy + size / 2);
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#ff2a85';
      ctx.shadowColor = 'rgba(255, 42, 133, 0.45)';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.shadowBlur = 0; // reset
  }

  function drawPlacedSymbols() {
    placedSymbols.forEach(s => {
      let drawY = s.y;
      if (s.isFalling) {
        drawY = s.currentY;
      }
      
      const drawProgress = s.isFalling ? 1.0 : s.progress;
      drawSymbol(s.x, drawY, s.player, drawProgress);
    });
  }

  function drawSymbol(x, y, player, progress) {
    const size = (mode === 'ultimate' ? (SUB_GRID_SIZE / 3) : CELL_SIZE) * 0.65;
    ctx.lineWidth = mode === 'ultimate' ? 3.5 : 5;
    ctx.lineCap = 'round';

    if (player === 'X') {
      ctx.strokeStyle = '#00ffd2';
      ctx.shadowColor = 'rgba(0, 255, 210, 0.4)';
      ctx.shadowBlur = 10;
      
      // Animate line 1
      const progress1 = Math.min(1.0, progress * 2);
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y - size / 2);
      ctx.lineTo(
        x - size / 2 + (size * progress1),
        y - size / 2 + (size * progress1)
      );
      ctx.stroke();

      // Animate line 2
      if (progress > 0.5) {
        const progress2 = Math.min(1.0, (progress - 0.5) * 2);
        ctx.beginPath();
        ctx.moveTo(x + size / 2, y - size / 2);
        ctx.lineTo(
          x + size / 2 - (size * progress2),
          y - size / 2 + (size * progress2)
        );
        ctx.stroke();
      }
    } else {
      // Circle 'O'
      ctx.strokeStyle = '#ff2a85';
      ctx.shadowColor = 'rgba(255, 42, 133, 0.4)';
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.arc(x, y, size / 2, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * progress));
      ctx.stroke();
    }
    
    ctx.shadowBlur = 0; // reset
  }

  function drawHoverPreview() {
    if (!hoverCell || !gameActive || isAiThinking) return;

    // Verify cell validity
    let isValid = false;
    let cx = 0, cy = 0;

    if (mode === 'mega') {
      if (megaGrid[hoverCell.row][hoverCell.col] === null) {
        isValid = true;
        const pos = getCellCenter(hoverCell.row, hoverCell.col);
        cx = pos.x; cy = pos.y;
      }
    } else if (mode === 'infinite') {
      const key = `${hoverCell.row},${hoverCell.col}`;
      if (!infiniteGrid.has(key)) {
        isValid = true;
        const pos = getCellCenter(hoverCell.row, hoverCell.col);
        cx = pos.x; cy = pos.y;
      }
    } else if (mode === 'ultimate') {
      // Must target active subgrid
      let matchForced = true;
      if (activeSubGrid !== null) {
        matchForced = (activeSubGrid.row === hoverCell.row && activeSubGrid.col === hoverCell.col);
      }
      
      if (matchForced && globalGrid[hoverCell.row][hoverCell.col] === null && subGrids[hoverCell.row][hoverCell.col][hoverCell.subRow][hoverCell.subCol] === null) {
        isValid = true;
        const pos = getCellCenter(hoverCell.row, hoverCell.col, hoverCell.subRow, hoverCell.subCol);
        cx = pos.x; cy = pos.y;
      }
    } else if (mode === 'gravity') {
      const landingRow = getGravityRow(hoverCell.col);
      if (landingRow !== -1) {
        isValid = true;
        const pos = getCellCenter(landingRow, hoverCell.col);
        cx = pos.x; cy = pos.y;
      }
    }

    if (isValid) {
      // Draw ghostly preview of current player's piece
      ctx.save();
      ctx.globalAlpha = 0.28;
      
      // Draw symbol preview
      drawSymbol(cx, cy, currentPlayer, 1.0);
      
      ctx.restore();
    }
  }

  function drawAiScanningLasers() {
    if (!isAiThinking) return;
    
    // Draw scanning laser grids over the boards randomly to simulate calculation threads
    const t = Date.now() * 0.005;
    ctx.strokeStyle = 'rgba(0, 255, 210, 0.18)';
    ctx.lineWidth = 2.5;
    
    const count = 4;
    for (let i = 0; i < count; i++) {
      const scanY = Math.sin(t + i * Math.PI / count) * (boardSize * CELL_SIZE / 2);
      ctx.beginPath();
      ctx.moveTo(-boardSize * CELL_SIZE / 2, scanY);
      ctx.lineTo(boardSize * CELL_SIZE / 2, scanY);
      ctx.stroke();
    }
  }

  function drawLaserWinLine() {
    if (!winningCells || winningCells.length === 0) return;

    // Draw thick laser beam connecting first and last winning cells
    const startCell = winningCells[0];
    const endCell = winningCells[winningCells.length - 1];
    
    const p1 = getCellCenter(startCell.row, startCell.col, startCell.subRow, startCell.subCol);
    const p2 = getCellCenter(endCell.row, endCell.col, endCell.subRow, endCell.subCol);

    const winner = mode === 'ultimate' ? globalGrid[startCell.row][startCell.col] : (mode === 'infinite' ? infiniteGrid.get(`${startCell.row},${startCell.col}`) : megaGrid[startCell.row][startCell.col]);
    const color = winner === 'X' ? '#00ffd2' : '#ff2a85';

    ctx.save();
    // Inner white laser core
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.shadowColor = color;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Outer plasma laser shroud
    ctx.strokeStyle = color;
    ctx.lineWidth = 14;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    ctx.restore();
  }

  function drawParticles() {
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;
  }

  // --- RUN SYSTEM ---
  init();
})();

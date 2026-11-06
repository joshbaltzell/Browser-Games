/**
 * 🤖 Connect 4 AI Framework - Complete Implementation
 */

// 🧱 Global Game Constants
const GAME_CONFIG = {
    ROWS: 6,
    COLS: 7,
    PLAYER_RED: 1,
    PLAYER_BLUE: -1,
    EMPTY: 0,
    MINIMAX_DEPTH: 3
};

// 📦 Main Game Class
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.board = [];
        this.turn = GAME_CONFIG.PLAYER_RED;
        this.gameOver = false;
        this.aiEnabled = true;
        this.scores = { red: 0, blue: 0 };
        
        // Calculate cell dimensions based on canvas size
        this.cellWidth = 60;
        this.cellHeight = 75;
        this.margin = 10;
        this.pieceRadius = 28;
        
        // Bind context methods
        this.handleClick = this.handleClick.bind(this);
    }

    /** 🎬 Initialize Game */
    init() {
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }
        
        // Set canvas size properly
        const totalWidth = (this.COLS * this.cellWidth) + ((this.COLS - 1) * this.margin);
        const totalHeight = this.ROWS * this.cellHeight;
        
        this.canvas.width = totalWidth;
        this.canvas.height = totalHeight;
        
        // Initialize board and draw
        this.initBoard();
        this.draw();
        this.setupEventListeners();
        
        console.log('🤖 AI Framework loaded successfully');
    }

    /** 🧱 Initialize Empty Board */
    initBoard() {
        this.board = Array(this.ROWS).fill(null).map(() => Array(this.COLS).fill(GAME_CONFIG.EMPTY));
    }

    /** ⚙️ Setup Event Listeners */
    setupEventListeners() {
        if (this.canvas) {
            this.canvas.addEventListener('click', this.handleClick);
        }

        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => window.location.reload());
        }
    }

    /** 🎮 Handle Player Move */
    handleClick(e) {
        if (this.gameOver || !this.aiEnabled) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const col = Math.floor((x + rect.width / 2) / this.cellWidth);
        
        if (col >= 0 && col < this.COLS) {
            this.makeMove(col, GAME_CONFIG.PLAYER_RED);
        }
    }

    /** 🎯 Make a Move */
    makeMove(col, player) {
        let row = -1;
        
        // Find the lowest empty slot in the column (pieces drop down)
        for (row = this.ROWS - 1; row >= 0; row--) {
            if (this.board[row][col] === GAME_CONFIG.EMPTY) {
                break;
            }
        }
        
        // If all slots are filled, column is full
        if (row < 0) {
            console.log('Column is full!');
            return false;
        }
        
        // Place the piece
        this.board[row][col] = player;
        
        // Check win condition
        const winInfo = this.checkWin(col, player);
        if (winInfo) {
            this.gameOver = true;
            this.updateStatus(`🏆 ${this.getPlayerName(player)} Wins!`);
            return true;
        }
        
        // Check draw condition (if top row is full)
        if (this.checkDraw()) {
            this.gameOver = true;
            this.updateStatus('🤝 Draw Game!');
            return true;
        }

        // Switch turn
        this.turn = -this.turn;
        
        // Re-draw board
        this.draw();

        // If it's AI's turn and AI is enabled, trigger AI move after delay
        if (this.aiEnabled && this.turn === GAME_CONFIG.PLAYER_BLUE) {
            setTimeout(() => this.aiMove(), 600);
        }
        
        return true;
    }

    /** 🤖 AI Move with Minimax */
    aiMove() {
        if (this.gameOver || !this.aiEnabled) return;
        
        const bestMove = this.minimax(GAME_CONFIG.MINIMAX_DEPTH);
        
        if (bestMove && bestMove.col >= 0 && bestMove.col < this.COLS) {
            this.makeMove(bestMove.col, GAME_CONFIG.PLAYER_BLUE);
            console.log(`🤖 AI played at column ${bestMove.col}`);
        } else {
            console.log('No valid moves available for AI');
        }
    }

    /** 🧠 Minimax Algorithm with Alpha-Beta Pruning */
    minimax(depth, alpha = -Infinity, beta = Infinity, isMaximizing = false) {
        if (depth === 0) {
            return this.evaluateBoard();
        }

        for (let col = 0; col < this.COLS; col++) {
            // Find empty row for simulation
            let row = -1;
            for (row = this.ROWS - 1; row >= 0; row--) {
                if (this.board[row][col] === GAME_CONFIG.EMPTY) break;
            }
            
            if (row < 0) continue; // Column is full
            
            const player = isMaximizing ? GAME_CONFIG.PLAYER_BLUE : GAME_CONFIG.PLAYER_RED;
            this.board[row][col] = player;

            const value = this.minimax(depth - 1, alpha, beta, !isMaximizing);
            
            if (isMaximizing) {
                alpha = Math.max(alpha, value);
                if (alpha >= beta) break; // Beta cutoff
            } else {
                beta = Math.min(beta, value);
                if (beta <= alpha) break; // Alpha cutoff
            }
            
            // Backtrack - remove piece
            this.board[row][col] = GAME_CONFIG.EMPTY;
        }
        
        return isMaximizing ? alpha : beta;
    }

    /** 📊 Evaluate Board Position */
    evaluateBoard() {
        let score = 0;
        
        // Horizontal patterns - check all rows
        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS - 3; col++) {
                const pattern = [this.board[row][col], this.board[row][col+1], 
                               this.board[row][col+2], this.board[row][col+3]];
                score += this.scorePattern(pattern);
            }
        }
        
        // Vertical patterns - check all columns
        for (let col = 0; col < this.COLS; col++) {
            for (let row = 0; row < this.ROWS - 3; row++) {
                const pattern = [this.board[row][col], this.board[row+1][col],
                               this.board[row+2][col], this.board[row+3][col]];
                score += this.scorePattern(pattern);
            }
        }
        
        // Diagonal patterns (top-left to bottom-right)
        for (let row = 0; row < this.ROWS - 3; row++) {
            for (let col = 0; col < this.COLS - 3; col++) {
                const pattern1 = [this.board[row][col], this.board[row+1][col+1], 
                                this.board[row+2][col+2], this.board[row+3][col+3]];
                score += this.scorePattern(pattern1);
            }
        }
        
        // Diagonal patterns (top-right to bottom-left)
        for (let row = 0; row < this.ROWS - 3; row++) {
            for (let col = 0; col < this.COLS - 3; col++) {
                const pattern2 = [this.board[row][col+3], this.board[row+1][col+2], 
                                this.board[row+2][col+1], this.board[row+3][col]];
                score += this.scorePattern(pattern2);
            }
        }
        
        return score;
    }

    /** 📈 Score Pattern */
    scorePattern(pattern) {
        if (pattern.includes(GAME_CONFIG.PLAYER_BLUE) && pattern.includes(GAME_CONFIG.PLAYER_RED)) {
            return 0;
        }
        
        const count = pattern.filter(p => p !== GAME_CONFIG.EMPTY).length;
        
        switch (count) {
            case 4: return 100;
            case 3: if (pattern.some(p => p === GAME_CONFIG.EMPTY)) return 25; return 50;
            case 2: if (pattern.filter(p => p !== GAME_CONFIG.EMPTY).every(p => p === pattern[0])) return 10; return 5;
            case 1: return 1;
            default: return 0;
        }
    }

    /** 🖼️ Draw Board */
    draw() {
        if (!this.canvas || !this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw all slots
        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS; col++) {
                const x = col * this.cellWidth + this.margin;
                const y = row * this.cellHeight;
                
                // Slot background (ellipse shape)
                this.ctx.beginPath();
                this.ctx.ellipse(
                    x + this.cellWidth / 2, 
                    y + this.cellHeight / 2 - 5, 
                    this.cellWidth / 3.2, 
                    this.cellHeight / 3.4, 
                    0, 0, Math.PI * 2
                );
                this.ctx.fillStyle = '#fff';
                this.ctx.fill();
                this.ctx.strokeStyle = '#ccc';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
            }
        }
        
        // Draw pieces on top of slots
        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS; col++) {
                if (this.board[row][col] !== GAME_CONFIG.EMPTY) {
                    const x = col * this.cellWidth + this.margin + this.pieceRadius;
                    const y = row * this.cellHeight + this.pieceRadius + 5;
                    
                    this.ctx.beginPath();
                    this.ctx.arc(x, y, this.pieceRadius, 0, Math.PI * 2);
                    
                    if (this.board[row][col] === GAME_CONFIG.PLAYER_RED) {
                        this.ctx.fillStyle = '#d32f2f';
                        this.ctx.shadowColor = 'rgba(211, 47, 47, 0.5)';
                    } else {
                        this.ctx.fillStyle = '#1976d2';
                        this.ctx.shadowColor = 'rgba(25, 118, 210, 0.5)';
                    }
                    
                    this.ctx.shadowBlur = 10;
                    this.ctx.fill();
                    
                    this.ctx.shadowBlur = 0;
                }
            }
        }

        // Highlight winning pieces if game over
        if (this.gameOver) {
            for (let row = 0; row < this.ROWS; row++) {
                for (let col = 0; col < this.COLS; col++) {
                    if (this.board[row][col] !== GAME_CONFIG.EMPTY) {
                        const x = col * this.cellWidth + this.margin + this.pieceRadius;
                        const y = row * this.cellHeight + this.pieceRadius + 5;
                        
                        this.ctx.beginPath();
                        this.ctx.arc(x, y, this.pieceRadius - 2, 0, Math.PI * 2);
                        this.ctx.strokeStyle = '#ffeb3b';
                        this.ctx.lineWidth = 3;
                        this.ctx.stroke();
                    }
                }
            }
        }
    }

    /** 🔍 Check Win Condition */
    checkWin(col, player) {
        // Horizontal wins
        for (let row = 0; row < this.ROWS; row++) {
            if (this.board[row][col] === player) {
                for (let c = col - 3; c <= col + 3; c++) {
                    if (c >= 0 && c < this.COLS) {
                        const count = [this.board[row][c], this.board[row][c+1], 
                                      this.board[row][c+2], this.board[row][c+3]]
                            .filter(p => p === player).length;
                        if (count >= 4) return true;
                    }
                }
            }
        }

        // Vertical wins
        for (let row = colRowStart(row); row < this.ROWS - 3; row++) {
            if (this.board[row][col] === player && 
                this.board[row + 1][col] === player &&
                this.board[row + 2][col] === player &&
                this.board[row + 3][col] === player) {
                return true;
            }
        }

        // Diagonal wins (top-left to bottom-right)
        for (let row = 0; row < this.ROWS - 3; row++) {
            for (let i = 0; i <= 3 - colOffset; i++) {
                const r = row + i;
                const c = col - i;
                if (this.board[r][c] === player) {
                    return true;
                }
            }
        }

        // Diagonal wins (top-right to bottom-left)
        for (let row = 0; row < this.ROWS - 3; row++) {
            for (let i = 0; i <= 3 - colOffset; i++) {
                const r = row + i;
                const c = col + i;
                if (this.board[r][c] === player) {
                    return true;
                }
            }
        }

        return false;
    }

    /** 📋 Check Draw */
    checkDraw() {
        for (let col = 0; col < this.COLS; col++) {
            if (this.board[0][col] === GAME_CONFIG.EMPTY) return false;
        }
        return true;
    }

    /** 💬 Update Status Text */
    updateStatus(message) {
        const status = document.getElementById('status');
        if (status) {
            status.textContent = message;
        }
        
        const turnIndicator = document.getElementById('current-turn');
        if (turnIndicator) {
            turnIndicator.textContent = this.getPlayerName(this.turn);
        }
    }

    /** 👤 Get Player Name */
    getPlayerName(player) {
        return player === GAME_CONFIG.PLAYER_RED ? '🔴 Red' : '🔵 Blue';
    }
}

// Export Game class for global access
window.Game = Game;

/** 🚀 Start Game When Page Loads */
console.log('🤖 Connect 4 AI Framework ready. Initialize when HTML loads canvas.');

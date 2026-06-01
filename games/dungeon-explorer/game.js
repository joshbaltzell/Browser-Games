/*
 * Dungeon Explorer — single-file build (no ES modules).
 *
 * Bundled into one classic script so the game runs from a double-clicked
 * file:// page as well as from a local server, matching the other games in
 * this collection. No build step: this file IS the source. Sections below
 * map to the original modules.
 */
(function () {
  'use strict';

  // ===== src/constants.js =====
  const TILE_SIZE = 50;
  const GRID_WIDTH = 10;
  const GRID_HEIGHT = 10;

  const COLORS = {
    wall: '#1a1a2e',
    floor: '#0f3460',
    player: '#00d4ff',
    enemy: '#ff006e',
    item: '#ffbe0b',
    health: '#06ffa5',
    key: '#ffd60a',
    boss: '#ff006e',
  };

  const ENEMY_TYPES = {
    CHASER: 'chaser',
    PATROL: 'patrol',
    SPAWNER: 'spawner',
  };

  const ITEM_TYPES = {
    HEALTH: 'health',
    WEAPON: 'weapon',
    ARMOR: 'armor',
    KEY: 'key',
  };

  const DUNGEON_CONFIG = {
    WALL_RATIO: 0.2,
    ENEMY_COUNT: 5,
    ITEM_COUNT: 3,
    FLOORS: 5,
  };

  // ===== src/entities.js =====
  class Entity {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    canMoveTo(x, y, dungeon) {
      if (x < 0 || x >= dungeon.grid[0].length || y < 0 || y >= dungeon.grid.length) {
        return false;
      }
      return dungeon.grid[y][x] !== 'wall';
    }

    moveTo(x, y, dungeon) {
      if (this.canMoveTo(x, y, dungeon)) {
        this.x = x;
        this.y = y;
        return true;
      }
      return false;
    }

    distance(other) {
      const dx = this.x - other.x;
      const dy = this.y - other.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }

  class Player extends Entity {
    constructor(x, y) {
      super(x, y);
      this.health = 100;
      this.maxHealth = 100;
      this.damage = 10;
      this.armor = 0;
      this.score = 0;
      this.inventory = [];
    }

    takeDamage(amount) {
      const reducedDamage = Math.max(1, amount - this.armor);
      this.health -= reducedDamage;
      return this.health <= 0;
    }

    heal(amount) {
      this.health = Math.min(this.maxHealth, this.health + amount);
    }

    attack(enemy) {
      const baseDamage = this.damage;
      const variance = Math.random() * 5 - 2.5;
      enemy.health -= baseDamage + variance;
    }

    addItem(item) {
      this.inventory.push(item);
      if (item.type === 'health') {
        this.heal(item.value);
      } else if (item.type === 'weapon') {
        this.damage += item.value;
      } else if (item.type === 'armor') {
        this.armor += item.value;
      }
      this.score += item.value;
    }

    render(ctx) {
      ctx.fillStyle = COLORS.player;
      ctx.fillRect(this.x * TILE_SIZE + 5, this.y * TILE_SIZE + 5, TILE_SIZE - 10, TILE_SIZE - 10);
      ctx.strokeStyle = '#00d4ff';
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x * TILE_SIZE + 5, this.y * TILE_SIZE + 5, TILE_SIZE - 10, TILE_SIZE - 10);
    }
  }

  class Enemy extends Entity {
    constructor(x, y, type = 'chaser', health = 20) {
      super(x, y);
      this.type = type;
      this.health = health;
      this.damage = 5;
      this.moveCounter = 0;
      this.moveDelay = type === 'patrol' ? 2 : 1;
    }

    update(player, dungeon) {
      this.moveCounter++;
      if (this.moveCounter < this.moveDelay) {
        return;
      }
      this.moveCounter = 0;

      if (this.type === 'chaser') {
        this.chasePlayer(player, dungeon);
      } else if (this.type === 'patrol') {
        this.patrol(dungeon);
      }
    }

    chasePlayer(player, dungeon) {
      const dx = player.x - this.x;
      const dy = player.y - this.y;

      let moveX = this.x;
      let moveY = this.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        moveX += dx > 0 ? 1 : -1;
      } else {
        moveY += dy > 0 ? 1 : -1;
      }

      this.moveTo(moveX, moveY, dungeon);
    }

    patrol(dungeon) {
      const directions = [
        [0, -1], [0, 1], [-1, 0], [1, 0]
      ];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      this.moveTo(this.x + dir[0], this.y + dir[1], dungeon);
    }

    render(ctx) {
      ctx.fillStyle = COLORS.enemy;
      ctx.beginPath();
      ctx.arc(this.x * TILE_SIZE + TILE_SIZE / 2, this.y * TILE_SIZE + TILE_SIZE / 2, TILE_SIZE / 2 - 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ff0066';
      ctx.beginPath();
      ctx.arc(this.x * TILE_SIZE + TILE_SIZE / 2 - 8, this.y * TILE_SIZE + TILE_SIZE / 2 - 8, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x * TILE_SIZE + TILE_SIZE / 2 + 8, this.y * TILE_SIZE + TILE_SIZE / 2 - 8, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  class Item extends Entity {
    constructor(x, y, type, value = 10) {
      super(x, y);
      this.type = type;
      this.value = value;
    }

    render(ctx) {
      const colors = {
        health: COLORS.health,
        weapon: COLORS.item,
        armor: COLORS.item,
        key: COLORS.key,
      };

      ctx.fillStyle = colors[this.type];
      if (this.type === 'key') {
        ctx.fillRect(this.x * TILE_SIZE + 15, this.y * TILE_SIZE + 15, 20, 20);
        ctx.fillStyle = '#ffd60a';
        ctx.fillRect(this.x * TILE_SIZE + 20, this.y * TILE_SIZE + 20, 10, 10);
      } else {
        ctx.beginPath();
        ctx.arc(this.x * TILE_SIZE + TILE_SIZE / 2, this.y * TILE_SIZE + TILE_SIZE / 2, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // ===== src/dungeon.js =====
  class Dungeon {
    constructor(difficulty = 1) {
      this.width = GRID_WIDTH;
      this.height = GRID_HEIGHT;
      this.difficulty = difficulty;
      this.grid = [];
      this.enemies = [];
      this.items = [];
      this.generate();
    }

    generate() {
      this.grid = this.generateGrid();
      this.generateEnemies();
      this.generateItems();
    }

    generateGrid() {
      const grid = Array(this.height).fill(null).map(() => Array(this.width).fill('floor'));

      const wallCount = Math.floor(this.width * this.height * DUNGEON_CONFIG.WALL_RATIO);
      for (let i = 0; i < wallCount; i++) {
        const x = Math.floor(Math.random() * this.width);
        const y = Math.floor(Math.random() * this.height);
        if ((x !== 0 || y !== 0) && (x !== this.width - 1 || y !== this.height - 1)) {
          grid[y][x] = 'wall';
        }
      }

      return grid;
    }

    generateEnemies() {
      this.enemies = [];
      const enemyCount = DUNGEON_CONFIG.ENEMY_COUNT + Math.floor(this.difficulty * 2);

      for (let i = 0; i < enemyCount; i++) {
        let x, y;
        do {
          x = Math.floor(Math.random() * this.width);
          y = Math.floor(Math.random() * this.height);
        } while ((x < 2 && y < 2) || this.grid[y][x] === 'wall');

        const types = [ENEMY_TYPES.CHASER, ENEMY_TYPES.PATROL];
        const type = types[Math.floor(Math.random() * types.length)];
        const health = 20 + this.difficulty * 5;

        this.enemies.push(new Enemy(x, y, type, health));
      }
    }

    generateItems() {
      this.items = [];
      const itemCount = DUNGEON_CONFIG.ITEM_COUNT + Math.floor(this.difficulty);

      for (let i = 0; i < itemCount; i++) {
        let x, y;
        do {
          x = Math.floor(Math.random() * this.width);
          y = Math.floor(Math.random() * this.height);
        } while (this.grid[y][x] === 'wall');

        const types = [ITEM_TYPES.HEALTH, ITEM_TYPES.WEAPON, ITEM_TYPES.ARMOR];
        const type = types[Math.floor(Math.random() * types.length)];
        const value = type === ITEM_TYPES.HEALTH ? 25 : 2 + Math.floor(this.difficulty);

        this.items.push(new Item(x, y, type, value));
      }
    }

    render(ctx) {
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          if (this.grid[y][x] === 'wall') {
            ctx.fillStyle = COLORS.wall;
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          } else {
            ctx.fillStyle = COLORS.floor;
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = '#444';
            ctx.lineWidth = 0.5;
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          }
        }
      }

      this.items.forEach(item => item.render(ctx));
      this.enemies.forEach(enemy => enemy.render(ctx));
    }

    removeItem(item) {
      this.items = this.items.filter(i => i !== item);
    }

    removeEnemy(enemy) {
      this.enemies = this.enemies.filter(e => e !== enemy);
    }
  }

  // ===== engine/game-engine.js =====
  class GameEngine {
    constructor(canvas, inputHandler) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.inputHandler = inputHandler;
      this.width = canvas.width;
      this.height = canvas.height;
      this.isGameOver = false;
      this.isPaused = false;
    }

    update(deltaTime) {
      if (!this.isGameOver && !this.isPaused) {
        this.onUpdate(deltaTime);
      }
    }

    render() {
      this.ctx.fillStyle = '#0f3460';
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.onRender();
    }

    onUpdate(deltaTime) {
      // Override in subclass
    }

    onRender() {
      // Override in subclass
    }

    gameOver() {
      this.isGameOver = true;
    }

    restart() {
      this.isGameOver = false;
      this.isPaused = false;
    }

    clearCanvas() {
      this.ctx.fillStyle = '#0f3460';
      this.ctx.fillRect(0, 0, this.width, this.height);
    }
  }

  // ===== engine/game-loop.js =====
  class GameLoop {
    constructor(game, targetFps = 60) {
      this.game = game;
      this.targetFps = targetFps;
      this.frameTime = 1000 / targetFps;
      this.lastTime = 0;
      this.isRunning = false;
    }

    start() {
      this.isRunning = true;
      this.lastTime = performance.now();
      this.tick(performance.now());
    }

    stop() {
      this.isRunning = false;
    }

    tick = (currentTime) => {
      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;

      if (this.isRunning) {
        this.game.update(deltaTime);
        this.game.render();
      }

      requestAnimationFrame(this.tick);
    };
  }

  // ===== engine/input-handler.js =====
  class InputHandler {
    constructor() {
      this.keys = {};
      this.listeners = {};
      this.setupListeners();
    }

    setupListeners() {
      window.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (!this.keys[key]) {
          this.keys[key] = true;
          this.emit('keydown', key);
        }
      });

      window.addEventListener('keyup', (e) => {
        const key = e.key.toLowerCase();
        this.keys[key] = false;
        this.emit('keyup', key);
      });

      window.addEventListener('click', (e) => {
        this.emit('click', { x: e.clientX, y: e.clientY });
      });
    }

    isKeyPressed(key) {
      return this.keys[key.toLowerCase()] || false;
    }

    on(event, callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    }

    emit(event, data) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(callback => callback(data));
      }
    }

    removeListener(event, callback) {
      if (this.listeners[event]) {
        this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
      }
    }
  }

  // ===== src/index.js =====
  class DungeonExplorer extends GameEngine {
    constructor(canvas, inputHandler) {
      super(canvas, inputHandler);
      this.player = null;
      this.dungeon = null;
      this.currentFloor = 1;
      this.gameState = 'playing';
      this.turnCount = 0;
      this.setupGame();
      this.setupControls();
      this.setupHUD();
    }

    setupGame() {
      this.dungeon = new Dungeon(this.currentFloor);
      this.player = new Player(0, 0);
      this.gameState = 'playing';
    }

    setupControls() {
      const movePlayer = (dx, dy) => {
        if (this.gameState !== 'playing' || this.isGameOver) return;

        const newX = this.player.x + dx;
        const newY = this.player.y + dy;

        if (this.player.canMoveTo(newX, newY, this.dungeon)) {
          this.player.moveTo(newX, newY, this.dungeon);
          this.turnCount++;
          this.checkCollisions();
          this.updateEnemies();
          this.checkWinCondition();
        }
      };

      this.inputHandler.on('keydown', (key) => {
        if (key === 'arrowup' || key === 'w') movePlayer(0, -1);
        if (key === 'arrowdown' || key === 's') movePlayer(0, 1);
        if (key === 'arrowleft' || key === 'a') movePlayer(-1, 0);
        if (key === 'arrowright' || key === 'd') movePlayer(1, 0);

        if (key === ' ' || key === 'enter') this.attackNearestEnemy();
      });
    }

    setupHUD() {
      document.getElementById('floor').textContent = this.currentFloor;
      document.getElementById('health').textContent = this.player.health;
      document.getElementById('score').textContent = Math.floor(this.player.score);

      document.getElementById('restart-btn').addEventListener('click', () => {
        this.restart();
      });
    }

    updateHUD() {
      document.getElementById('floor').textContent = this.currentFloor;
      document.getElementById('health').textContent = Math.ceil(this.player.health);
      document.getElementById('score').textContent = Math.floor(this.player.score);
    }

    checkCollisions() {
      const items = this.dungeon.items.filter(item => item.x === this.player.x && item.y === this.player.y);
      items.forEach(item => {
        this.player.addItem(item);
        this.dungeon.removeItem(item);
      });

      const enemies = this.dungeon.enemies.filter(enemy => enemy.x === this.player.x && enemy.y === this.player.y);
      enemies.forEach(enemy => {
        if (this.player.takeDamage(enemy.damage)) {
          this.gameState = 'gameover';
          this.isGameOver = true;
        }
      });
    }

    attackNearestEnemy() {
      let nearest = null;
      let minDist = Infinity;

      this.dungeon.enemies.forEach(enemy => {
        const dist = this.player.distance(enemy);
        if (dist <= 1.5 && dist < minDist) {
          nearest = enemy;
          minDist = dist;
        }
      });

      if (nearest) {
        this.player.attack(nearest);
        if (nearest.health <= 0) {
          this.dungeon.removeEnemy(nearest);
          this.player.score += 100;
        }
      }
    }

    updateEnemies() {
      this.dungeon.enemies.forEach(enemy => {
        enemy.update(this.player, this.dungeon);
      });

      const collidingEnemies = this.dungeon.enemies.filter(enemy => enemy.x === this.player.x && enemy.y === this.player.y);
      collidingEnemies.forEach(enemy => {
        if (this.player.takeDamage(enemy.damage)) {
          this.gameState = 'gameover';
          this.isGameOver = true;
        }
      });
    }

    checkWinCondition() {
      if (this.dungeon.enemies.length === 0) {
        if (this.currentFloor < DUNGEON_CONFIG.FLOORS) {
          this.nextFloor();
        } else {
          this.gameState = 'won';
          this.isGameOver = true;
        }
      }
    }

    nextFloor() {
      this.currentFloor++;
      this.player.health = Math.min(this.player.maxHealth, this.player.health + 30);
      this.dungeon = new Dungeon(this.currentFloor);
      this.player.x = 0;
      this.player.y = 0;
      this.turnCount = 0;
    }

    onUpdate(deltaTime) {
      // Game state updates handled by input
    }

    onRender() {
      this.dungeon.render(this.ctx);
      this.player.render(this.ctx);

      if (this.gameState === 'gameover') {
        this.renderGameOver();
      } else if (this.gameState === 'won') {
        this.renderWon();
      }

      this.updateHUD();
    }

    renderGameOver() {
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(0, 0, this.width, this.height);

      this.ctx.fillStyle = '#ff006e';
      this.ctx.font = 'bold 32px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('GAME OVER', this.width / 2, this.height / 2 - 20);

      this.ctx.fillStyle = '#00d4ff';
      this.ctx.font = '16px Arial';
      this.ctx.fillText(`Floor: ${this.currentFloor}`, this.width / 2, this.height / 2 + 20);
      this.ctx.fillText(`Score: ${Math.floor(this.player.score)}`, this.width / 2, this.height / 2 + 50);

      document.getElementById('restart-btn').style.display = 'block';
    }

    renderWon() {
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(0, 0, this.width, this.height);

      this.ctx.fillStyle = '#06ffa5';
      this.ctx.font = 'bold 32px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('YOU WIN!', this.width / 2, this.height / 2 - 20);

      this.ctx.fillStyle = '#00d4ff';
      this.ctx.font = '16px Arial';
      this.ctx.fillText(`Final Score: ${Math.floor(this.player.score)}`, this.width / 2, this.height / 2 + 20);
      this.ctx.fillText('You defeated all 5 floors!', this.width / 2, this.height / 2 + 50);

      document.getElementById('restart-btn').style.display = 'block';
    }

    restart() {
      this.currentFloor = 1;
      this.turnCount = 0;
      super.restart();
      this.setupGame();
      document.getElementById('restart-btn').style.display = 'none';
    }
  }

  // ===== main.js =====
  const canvas = document.getElementById('game-canvas');
  const inputHandler = new InputHandler();
  const game = new DungeonExplorer(canvas, inputHandler);
  const gameLoop = new GameLoop(game, 60);

  gameLoop.start();

})();

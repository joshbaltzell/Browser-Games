import { GameEngine } from '../../../src/engine/game-engine.js';
import { Dungeon } from './dungeon.js';
import { Player } from './entities.js';
import { DUNGEON_CONFIG } from './constants.js';

export class DungeonExplorer extends GameEngine {
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

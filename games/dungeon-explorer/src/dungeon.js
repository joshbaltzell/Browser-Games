import { GRID_WIDTH, GRID_HEIGHT, DUNGEON_CONFIG, TILE_SIZE, COLORS, ENEMY_TYPES, ITEM_TYPES } from './constants.js';
import { Enemy, Item } from './entities.js';

export class Dungeon {
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

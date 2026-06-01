import { COLORS, TILE_SIZE } from './constants.js';

export class Entity {
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

export class Player extends Entity {
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

export class Enemy extends Entity {
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

export class Item extends Entity {
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

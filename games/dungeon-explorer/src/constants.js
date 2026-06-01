export const TILE_SIZE = 50;
export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 10;

export const COLORS = {
  wall: '#1a1a2e',
  floor: '#0f3460',
  player: '#00d4ff',
  enemy: '#ff006e',
  item: '#ffbe0b',
  health: '#06ffa5',
  key: '#ffd60a',
  boss: '#ff006e',
};

export const ENEMY_TYPES = {
  CHASER: 'chaser',
  PATROL: 'patrol',
  SPAWNER: 'spawner',
};

export const ITEM_TYPES = {
  HEALTH: 'health',
  WEAPON: 'weapon',
  ARMOR: 'armor',
  KEY: 'key',
};

export const DUNGEON_CONFIG = {
  WALL_RATIO: 0.2,
  ENEMY_COUNT: 5,
  ITEM_COUNT: 3,
  FLOORS: 5,
};

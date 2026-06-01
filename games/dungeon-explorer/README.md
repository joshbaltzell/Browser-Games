# Dungeon Explorer

A turn-based roguelike dungeon crawler game. Navigate procedurally-generated dungeons, defeat enemies, collect loot, and progress through 5 increasingly difficult floors.

## How to Play

**Controls:**
- **Arrow Keys / WASD** - Move character
- **Spacebar / Enter** - Attack nearest enemy
- **New Game Button** - Start fresh after game over

## Game Features

- **Procedurally Generated Dungeons** - Each run is different with randomized layouts
- **Turn-Based Combat** - No time pressure, pure strategy
- **Loot System** - Find weapons, armor, and health potions
- **Difficulty Progression** - 5 floors with escalating challenges
- **Enemy Variety** - Chaser enemies hunt you, patrol enemies wander
- **Score System** - Track your best runs

## Game Mechanics

### Player
- 100 HP (max)
- 10 damage (base)
- Collect items to get stronger

### Enemies
- **Chasers** - Hunt the player aggressively
- **Patrollers** - Wander randomly
- Deal 5 damage on contact
- Harder on later floors

### Items
- **Health Potions** - Restore 25 HP
- **Weapons** - Increase damage by 2-5
- **Armor** - Reduce damage by 1-2

### Progression
- Beat all enemies on a floor → advance
- Each floor: more enemies, stronger enemy stats
- Floor 5: Boss floor with toughest enemies
- Win after clearing all 5 floors

## Strategy Tips

1. **Collect items first** - Get stronger before fighting
2. **Use walls** - Enemies can't move through them strategically
3. **Manage health** - Don't let HP drop too low
4. **Escape** - You can run away and heal with potions
5. **Plan ahead** - Each weapon/armor pickup matters

## Game Architecture

```
src/
├── index.js        - Main DungeonExplorer game class
├── dungeon.js      - Dungeon generation and state
├── entities.js     - Player, Enemy, Item classes
└── constants.js    - Game configuration (colors, sizes, etc.)
```

The game extends the shared `GameEngine` base class from the main engine, making it easy to create new games with the same framework.

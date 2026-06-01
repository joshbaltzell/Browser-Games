import { GameLoop } from './engine/game-loop.js';
import { InputHandler } from './engine/input-handler.js';
import { DungeonExplorer } from './src/index.js';

const canvas = document.getElementById('game-canvas');
const inputHandler = new InputHandler();
const game = new DungeonExplorer(canvas, inputHandler);
const gameLoop = new GameLoop(game, 60);

gameLoop.start();

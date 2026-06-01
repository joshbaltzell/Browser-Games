export class GameLoop {
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

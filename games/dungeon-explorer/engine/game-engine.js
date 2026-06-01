export class GameEngine {
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

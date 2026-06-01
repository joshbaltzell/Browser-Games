export class InputHandler {
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

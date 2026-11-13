// The fire trigger. A hold counts only after a press has been seen while the game is simulating, so the click
// that locks the pointer never fires. A release disarms it, and so does reset().
export function createTrigger() {
  let armed = false;
  return {
    update(held, pressed, simulating) {
      if (!simulating) { armed = false; return { fire: false, firePressed: false }; }
      if (pressed) armed = true;
      if (!held) armed = false;
      return { fire: armed && !!held, firePressed: !!pressed };
    },
    reset() { armed = false; },
  };
}

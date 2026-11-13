// One button, two meanings: released within tapMax of going down is a tap
// (fires on release); still held past tapMax it is a hold.
export function createContextButton() {
  let down = false, t = 0, max = 0.18;
  return {
    update(held, pressed, dt, tapMax) {
      max = tapMax;
      if (!down) {
        if (!pressed) return false;
        if (!held) return true; // down and up inside one poll
        down = true; t = dt;
        return false;
      }
      t += dt;
      if (held) return false;
      down = false;
      return t <= tapMax;
    },
    holding() { return down && t > max; },
    reset() { down = false; t = 0; },
  };
}

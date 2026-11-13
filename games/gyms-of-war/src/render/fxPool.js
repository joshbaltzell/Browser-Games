// A fixed ring of effect slots. No three.js here; effects.js draws them.
export function createPool(size) {
  const ages = new Float32Array(size);
  const live = new Uint8Array(size);
  let next = 0;
  return {
    ages,
    alive: (i) => live[i] === 1,
    // The next free slot, or the oldest live one when the pool is full.
    spawn() {
      let slot = -1;
      for (let k = 0; k < size; k++) {
        const i = (next + k) % size;
        if (!live[i]) { slot = i; break; }
      }
      if (slot < 0) {
        slot = 0;
        for (let i = 1; i < size; i++) if (ages[i] > ages[slot]) slot = i;
      }
      live[slot] = 1; ages[slot] = 0; next = (slot + 1) % size;
      return slot;
    },
    // Kills every live slot (the caller hides what was drawn).
    clear() { live.fill(0); },
    update(dt, life) {
      for (let i = 0; i < size; i++) {
        if (!live[i]) continue;
        ages[i] += dt;
        if (ages[i] > life(i)) live[i] = 0;
      }
    },
  };
}

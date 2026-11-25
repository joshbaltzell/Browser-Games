# Beat Drop (MVP)

Music toy: balls drop on a beat into pits of bars, drums and pads; every hit plays a note in key.

- `sim.js`: deterministic path simulation (1/480 s step, no DOM, runs in Node). One ball is simulated per pit and cached; playback reads the cache.
- `audio.js`: voices (wood/metal/glass bars, kick/snare/hat, pad tick) on `Kit.audio`.
- `game.js`: drawing, editing, transport (`Kit.audio.clock`, 4 steps per beat), undo/redo, saving to `Kit.store` key `drop-machine-v1`.
- `dev/check.js`: `node games/drop-machine/dev/check.js` runs the six asserts and prints the starter machine's bar.
- `window.DM_debug`: state, play/stop, `fakeClock(true)` (drives playback without a running AudioContext, for headless runs), add/select/undo helpers.

Notes and limits
- Tight/Free moves hit times toward the 1/16 grid; the drawn ball is time-warped so it still lands on the sound.
- Balls whose sound is already scheduled cannot be silenced if they are removed by the 32-ball cap (only drawn ones are removed).
- A pad's mode (Beat-locked or Forever) replaces the bounce setting; pads have no Sticky.
- No ball-to-ball collisions, link/share/export, or live keys (out of scope).
- Not tested by ear on a real device; the hit list was checked by numbers.

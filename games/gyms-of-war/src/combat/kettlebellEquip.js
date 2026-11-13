// The pad's kettlebell flow: D-pad Up equips the kettlebells (the gun in the arsenal is untouched, so the previous weapon is simply what comes back),
// LT aims (the arc), RT throws. They stay equipped across throws until the player picks a weapon or the bag runs dry. Pure.
export function createKettlebellEquip() {
  let equipped = false;
  const api = {
    // One step. equipPressed: D-pad Up went down (it toggles); switched: a weapon button was pressed; count: kettlebells left (after any throw this step). Returns whether the kettlebells are equipped. Equipping with an empty bag does nothing.
    step({ equipPressed = false, switched = false, count = 0, blocked = false } = {}) {
      if (blocked) { equipped = false; return equipped; }
      if (switched) equipped = false;
      else if (equipPressed) equipped = equipped ? false : count > 0;
      if (equipped && count <= 0) equipped = false;   // the last one is gone: back to the weapon in hand
      return equipped;
    },
    equipped: () => equipped,
    reset() { equipped = false; },
  };
  return api;
}

// While equipped on a pad, LT is the kettlebell aim and RT the throw; on the keyboard (not equipped) G holds to aim and releasing throws.
export function kettlebellInput({ equipped, aimHeld, firePressed, grenadeHeld, wasArmed }) {
  if (equipped) return { aiming: !!aimHeld, throwNow: !!firePressed };
  return { aiming: !!grenadeHeld, throwNow: !!wasArmed && !grenadeHeld };
}

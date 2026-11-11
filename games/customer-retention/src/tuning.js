export const TUNING = {
  outlinePx: 3,
  lightDir: [0.45, 0.8, 0.35],
  // How far the shadow side is pulled toward the purple shadow tint, so warm
  // colours go plum rather than brown.
  shadowLift: 0.45,
  camera: {
    fov: 70, right: 0.55, up: 1.55, back: 2.6,
    aim: { fov: 50, back: 1.4 },
    sprint: { fov: 80, up: 1.25, back: 2.9 },
    blendHalfLife: 0.07,       // mode changes: offsets and fov
    followHalfLife: 0.04,      // pivot trailing the player (0 = rigid)
    sideHalfLife: 0.12,        // shoulder swap
    shake: { amp: 0.025, hz: 9 }, // sprint only
    probeRadius: 0.22, minBack: 0.35, wallReturnHalfLife: 0.18,
    pitchMin: -1.1, pitchMax: 1.2,
  },
  look: { mouse: 0.0022, pad: { yawRate: 3.2, pitchRate: 2.2, expo: 1.8 }, aimScale: 0.6, invertY: false },
  move: {
    radius: 0.35, height: 1.8,
    jog: 4.5, aimWalk: 2.2, sprint: 7.5,
    accelTime: 0.12,      // rest to full speed
    stopTime: 0.08,       // full speed to rest
    turnRate: 14,         // rad/s, facing toward motion when not aiming
    aimTurnRate: 20,      // rad/s, facing toward the camera while aiming
    sprintTurnRate: 3,    // rad/s, how fast a sprint can change direction
    rollDistance: 5, rollTime: 0.55, rollEase: 1.6,
    rollBuffer: 0.15,     // a tap this close to a roll's end rolls again
    tapMax: 0.18,         // context button: released sooner is a tap
    stickSprintMin: 0.5,  // stick tilt needed to sprint
  },
};

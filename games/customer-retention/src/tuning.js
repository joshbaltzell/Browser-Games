export const TUNING = {
  outlinePx: 3,
  lightDir: [0.45, 0.8, 0.35],
  // How far the shadow side is pulled toward the purple shadow tint, so warm
  // colours go plum rather than brown.
  shadowLift: 0.45,
  camera: { fov: 70, right: 0.55, up: 1.55, back: 2.6 },
  move: {
    radius: 0.35, height: 1.8,
    jog: 4.5, aimWalk: 2.2, sprint: 7.5,
    accelTime: 0.12,      // rest to full speed
    stopTime: 0.08,       // full speed to rest
    turnRate: 14,         // rad/s, facing toward motion when not aiming
    sprintTurnRate: 3,    // rad/s, how fast a sprint can change direction
    rollDistance: 5, rollTime: 0.55, rollEase: 1.6,
    rollBuffer: 0.15,     // a tap this close to a roll's end rolls again
    tapMax: 0.18,         // context button: released sooner is a tap
    stickSprintMin: 0.5,  // stick tilt needed to sprint
  },
};

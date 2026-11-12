export const TUNING = {
  outlinePx: 3,
  lightDir: [0.45, 0.8, 0.35],
  // How far the shadow side is pulled toward the purple shadow tint, so warm
  // colours go plum rather than brown.
  shadowLift: 0.45,
  camera: {
    fov: 70, right: 0.55, up: 1.55, back: 2.6,
    aim: { fov: 50, back: 1.4 },
    sprint: { fov: 80, up: 1.25, back: 2.9, shakeWeight: 1 },
    coverLow: { fov: 70, right: 0.55, up: 1.0, back: 1.9 },
    coverTall: { fov: 70, right: 0.65, up: 1.35, back: 1.9 },
    bump: { amount: 0.18, halfLife: 0.07 }, // slam kick toward the player, m and s
    recoil: { halfLife: 0.09, max: 6 },     // gun kick spring: s to halve, and the cap in deg
    blendHalfLife: 0.07,       // mode changes: offsets and fov
    followHalfLife: 0.04,      // pivot trailing the player (0 = rigid)
    sideHalfLife: 0.12,        // shoulder swap
    shake: { amp: 0.025, hz: 9 }, // sprint only
    probeRadius: 0.22, minBack: 0.35, wallReturnHalfLife: 0.18,
    pitchMin: -1.1, pitchMax: 1.2,
    headHideDist: 0.45,        // m, the player's head is hidden while the lens is this close to it
    headHideMargin: 0.08,      // m, the head stays hidden until the lens is this much further out
  },
  look: { mouse: 0.0022, pad: { yawRate: 3.2, pitchRate: 2.2, expo: 1.8, assist: 0.6 }, aimScale: 0.6, invertY: false },
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
    faceMinSpeed: 0.2,    // m/s, below this the character does not turn to face its motion
    sprintHeadingMinSpeed: 0.5, // m/s, above this a sprint starts along the current motion
    runClipMinSpeed: 0.3, // m/s, above this the run clip plays
    runRateMin: 0.5, runRateMax: 2.2,       // run clip playback rate clamp
    sprintRateMin: 0.8, sprintRateMax: 2.2, // sprint clip playback rate clamp
  },
  // Cover. Distances in m, angles in degrees, times in s, speeds in m/s.
  cover: {
    grabRange: 2.5,       // m, furthest stand point a tap will slide to
    grabAngle: 50,        // deg, widest approach angle off the face normal
    grabViewAngle: 80,    // deg, widest angle between camera forward and the stand point
    grabSlack: 0.5,       // m, an aim point this far past an end still clamps onto it
    grabMinTilt: 0.2,     // stick tilt needed to count as approaching
    gap: 0.03,            // m, space between a capsule on the stand line and the face
    endInset: 0.2,        // m, stand line stops this far short of an open end
    minLength: 0.3,       // m, shortest stand line that counts as cover
    slideSpeed: 10,       // m/s, slide into cover
    slideMinTime: 0.06, slideMaxTime: 0.25, // s, slide duration clamp
    slideTurnRate: 20,    // rad/s, turn to face away from the cover
    moveSpeed: 3,         // m/s, shuffle along cover
    alongDeadzone: 0.2,   // stick component along the edge below which we stay put
    leaveTilt: 0.5,       // stick tilt away from the cover that leaves it
    leaveAngle: 55,       // deg, stick angle off the outward normal that leaves it
    endLeaveTime: 0.3,    // s, pushing past an open end this long leaves cover
    cornerZone: 0.3,      // m, near an end counts as at the corner
    popTime: 0.12,        // s, rise to peek or fire over or around cover
    blindTime: 0.08,      // s, arms rise for blind fire (fire without aim)
    popShift: 0.55,       // m, sideways shift of a corner pop
    pushAngle: 40,        // deg, stick angle into the face that starts a vault
    lowDrawBack: 0.38,    // m, low cover draws the body this far back from the wall so the head hides behind it
    vaultTime: 0.5,       // s, vault duration
    vaultMaxDepth: 1.0,   // m, deepest low cover that can be vaulted
    vaultHop: 0.6,        // m, peak height of a vault
    vaultExitSpeed: 3,    // m/s, speed carried out of a vault
    swapRange: 3,         // m, furthest gap a cover swap crosses
    swapSpeed: 9,         // m/s, cover swap
    swapAngle: 30,        // deg, widest difference between facing normals
    swapMaxOffset: 0.6,   // m, widest sideways stagger between the two stand lines
    slamSquash: 0.12,     // squash fraction on arriving at cover
    slamSquashTime: 0.15, // s, squash duration
    thudVolume: 0.5,      // 0 to 1
    autoSlam: 1,          // 1 on, 0 off: running straight into cover slams you in with no tap
    autoAngle: 25,        // deg, widest approach angle off straight at the face for a run-in
    autoDist: 0.15,       // m, a run-in grabs once the stand point is this close (you are bumping the wall)
    autoMinTilt: 0.7,     // stick tilt needed for a run-in
    autoMinSpeed: 3,      // m/s, speed from before contact needed for a run-in (jog is 4.5)
    autoTime: 0.08,       // s of continuous qualifying push before a run-in grabs
  },
  // Weapons. Times in s, angles in deg, zones and finishes are fractions of the reload bar or s as noted.
  // The 0/1 fields are flags (auto, infiniteReserve, autoReload).
  weapons: {
    regret: {
      mag: 50, reserveStart: 250, reserveMax: 400, infiniteReserve: 0, // rounds
      auto: 1, rate: 9, damage: 16, headMult: 2, range: 60,            // shots/s, damage per body hit, head multiplier, m
      spreadAim: 0.6, spreadHip: 2.5, spreadBlind: 7,                  // deg, cone by stance
      bloomPerShot: 0.25, bloomMax: 2, bloomRecover: 1.5,              // deg per shot, deg cap, deg/s recovery
      kickPitch: 0.7, kickYaw: 0.25,                                   // deg of camera kick per shot (yaw is plus or minus)
      reloadTime: 2.2,                                                 // s, whole reload bar
      perfectStart: 0.38, perfectEnd: 0.46, goodStart: 0.30, goodEnd: 0.62, // fractions of the bar
      perfectFinish: 0.1, goodFinish: 0.35,                            // s from the press to the end of the reload
      jamPenalty: 0.9,                                                 // s added to reloadTime when the press jams
      perfectDamage: 1.1, switchTime: 0.35,                            // damage multiplier for the perfect magazine, s to ready
    },
    pistol: {
      mag: 12, reserveStart: 0, reserveMax: 0, infiniteReserve: 1,
      auto: 0, rate: 4, damage: 30, headMult: 2.5, range: 50,
      spreadAim: 0.25, spreadHip: 1.2, spreadBlind: 5,
      bloomPerShot: 0.8, bloomMax: 2.5, bloomRecover: 6,
      kickPitch: 1.6, kickYaw: 0.4,
      reloadTime: 1.4,
      perfectStart: 0.38, perfectEnd: 0.46, goodStart: 0.30, goodEnd: 0.62,
      perfectFinish: 0.1, goodFinish: 0.3,
      jamPenalty: 0.8,
      perfectDamage: 1.1, switchTime: 0.3,
    },
  },
  // Combat rules shared by every weapon.
  combat: {
    fireBuffer: 0.12,     // s, a semi-auto press during the cooldown is kept this long
    autoReload: 1,        // 1 on, 0 off: firing an empty magazine starts a reload
    minRate: 0.1,         // shots/s, floor for a weapon's rate
    minReloadTime: 0.05,  // s, floor for a weapon's reloadTime
    muzzleUp: 1.35,       // m, aimed or hip muzzle height above the feet
    muzzleRight: 0.22,    // m, muzzle offset toward the camera side
    muzzleForward: 0.55,  // m, muzzle offset along the camera heading
    blindLift: 0.15,      // m, blind muzzle height above low cover's top
    blindReach: 0.15,     // m, blind muzzle reach past the wall face or a tall corner
    crateRadius: 1.0,     // m, walk within this of an ammo crate to refill
  },
  // Target dummies (the grey room's Associates). Health in hit points, times in s, speeds in m/s.
  dummy: { health: 100, respawnTime: 3, railSpeed: 1.5 },
  // Shot feedback. Times in s, sizes in m, speeds in m/s, volumes 0 to 1, squash and kicks as fractions or m.
  feedback: {
    flashTime: 0.05, flashSize: 0.35, tracerTime: 0.05, tracerWidth: 0.025,
    sparkTime: 0.25, sparkCount: 4, gelTime: 0.5, gelCount: 6, gelSpeed: 3,
    killGelCount: 18, receiptCount: 8, receiptTime: 1.2, gravity: 9.8,
    hitMarkerTime: 0.12, killMarkerTime: 0.3, reloadResultTime: 0.6,
    reticleMinGap: 6,   // px, the reticle's arms at zero spread
    shotVolume: 0.35, hitVolume: 0.3, killVolume: 0.45, reloadVolume: 0.35,
    gunSquash: 0.18, gunSquashTime: 0.08, gunKick: 0.05, bodyKick: 0.04,
    dummyBurstTime: 0.12, dummyRespawnPop: 0.2,
  },
};

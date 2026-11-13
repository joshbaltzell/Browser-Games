export const TUNING = {
  outlinePx: 3,
  // The toon outlines' width multiplier: the ink hull is outlinePx * outlineWidth pixels at 1080 lines (about 1.5x the v1 width).
  render: { outlineWidth: 1.5 },
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
    downed: { fov: 70, up: 0.8, back: 2.4 },
    bump: { amount: 0.5, halfLife: 0.07 },  // slam kick toward the player, m and s
    slamShake: { amount: 0.12, time: 0.26, hz: 24 }, // slam shake: peak lens offset in m, how long it rings in s, and its rate
    slamFovKick: 4, slamFovHalfLife: 0.12, // deg the lens widens on a slam (negative narrows), and s to halve as it springs back
    objectiveTurnTime: 0.4,    // s, the camera's turn toward the objective (Y on a pad)
    sustainHalfLife: 0.06,     // s to halve, the sustained shake, zoom and pull-in (blind fire, Cheat Day, the grind) easing in and out
    recoil: { halfLife: 0.09, max: 6 },     // gun kick spring: s to halve, and the cap in deg
    blendHalfLife: 0.07,       // mode changes: offsets and fov
    holdTime: 0.6,             // s, the reticle's world point is held through a blend into aim (0 = off)
    holdRange: 100,            // m, the held point when the aim ray hits nothing
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
    accelTime: 0.25,      // rest to full speed
    stopTime: 0.16,       // full speed to rest
    turnRate: 10,         // rad/s, facing toward motion when not aiming
    aimTurnRate: 14,      // rad/s, facing toward the camera while aiming
    sprintTurnRate: 2.1,    // rad/s, how fast a sprint can change direction
    rollDistance: 5, rollTime: 0.55, rollEase: 1.6,
    rollBuffer: 0.15,     // a tap this close to a roll's end rolls again
    tapMax: 0.18,         // context button: released sooner is a tap
    stickSprintMin: 0.5,  // stick tilt needed to sprint
    faceMinSpeed: 0.2,    // m/s, below this the character does not turn to face its motion
    sprintHeadingMinSpeed: 0.5, // m/s, above this a sprint starts along the current motion
    runClipMinSpeed: 0.3, // m/s, above this the run clip plays
    runRateMin: 0.5, runRateMax: 2.2,       // run clip playback rate clamp
    sprintRateMin: 0.8, sprintRateMax: 2.2, // sprint clip playback rate clamp
    stepEvery: 1.6,       // m of travel between footstep events at a jog or aim-walk
    stepEverySprint: 2.4, // m of travel between footstep events at a sprint
    crawlSpeed: 1.0,      // m/s, crawling while downed
    crawlTurnRate: 4,     // rad/s, facing toward the crawl
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
    slideSpeed: 14,       // m/s, slide into cover
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
    blindDrawBack: 0.15,  // m, the drawn body's draw-back from low cover while blind firing (so the arm reaches over the wall)
    vaultTime: 0.5,       // s, vault duration
    vaultMaxDepth: 1.0,   // m, deepest low cover that can be vaulted
    vaultHop: 0.6,        // m, peak height of a vault
    vaultExitSpeed: 3,    // m/s, speed carried out of a vault
    swapRange: 3,         // m, furthest gap a cover swap crosses
    swapSpeed: 9,         // m/s, cover swap
    swapAngle: 30,        // deg, widest difference between facing normals
    swapMaxOffset: 0.6,   // m, widest sideways stagger between the two stand lines
    slamSquash: 0.32,     // squash fraction on arriving at cover
    slamSquashTime: 0.2,  // s, squash duration
    thudVolume: 1.0,      // 0 to 1
    autoSlam: 1,          // 1 on, 0 off: running straight into cover slams you in with no tap
    autoAngle: 40,        // deg, widest approach angle off straight at the face for a run-in
    autoDist: 0.25,       // m, a run-in grabs once the stand point is this close (you are bumping the wall)
    autoMinTilt: 0.7,     // stick tilt needed for a run-in
    autoMinSpeed: 2.5,      // m/s, speed from before contact needed for a run-in (jog is 4.5)
    autoTime: 0.08,       // s of continuous qualifying push before a run-in grabs
  },
  // Weapons. Times in s, angles in deg, zones and finishes are fractions of the reload bar or s as noted.
  // The 0/1 fields are flags (auto, infiniteReserve, autoReload).
  weapons: {
    regret: {
      mag: 50, reserveStart: 250, reserveMax: 400, infiniteReserve: 0, // rounds
      auto: 1, rate: 9, damage: 16, headMult: 2, range: 60,            // shots/s, damage per body hit, head multiplier, m
      spreadAim: 0.8, spreadHip: 4, spreadBlind: 22.4,                 // deg, cone by stance
      bloomPerShot: 0.25, bloomMax: 2, bloomRecover: 1.5,              // deg per shot, deg cap, deg/s recovery
      kickPitch: 0.98, kickYaw: 0.25,                                   // deg of camera kick per shot (yaw is plus or minus)
      reloadTime: 2.2,                                                 // s, whole reload bar
      perfectStart: 0.38, perfectEnd: 0.46, goodStart: 0.30, goodEnd: 0.62, // fractions of the bar
      perfectFinish: 0.1, goodFinish: 0.35,                            // s from the press to the end of the reload
      jamPenalty: 0.9,                                                 // s added to reloadTime when the press jams
      perfectDamage: 1.1, switchTime: 0.35,                            // damage multiplier for the perfect magazine, s to ready
    },
    pistol: {
      mag: 12, reserveStart: 0, reserveMax: 0, infiniteReserve: 1,
      auto: 0, rate: 4, damage: 30, headMult: 2.5, range: 50,
      spreadAim: 0.25, spreadHip: 1.56, spreadBlind: 13,
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
    hitPad: 0.05,         // m, added to every Associate and dummy hit volume radius (the drawn hair, sleeves and arms stand past the capsule)
    crateRadius: 1.0,     // m, walk within this of an ammo crate to refill
    crouchHead: 0.70,     // m, head centre of a crouched character tucked behind low cover
    crouchBodyTop: 0.45,  // m, top of a crouched character's body capsule
    shoulderDrop: 0.25,   // m, a popped player's shoulder capsule runs from this far below the neck up to the neck
    pickupRadius: 0.8,    // m, walk within this of an ammo pickup to take it
  },
  // Player health. Times in s. The 0/1 fields are flags (standInRevive, godMode).
  health: {
    max: 100,
    regenDelay: 3,        // s without a hit before health regenerates
    regenTime: 3,         // s from the start of regeneration to full
    downedTime: 12,       // s of crawling before the arena restarts
    standInRevive: 0,     // 1: stands in for Tobble, the player gets up after reviveTime
    reviveTime: 3,        // s
    reviveHealth: 0.5,    // fraction of max health on getting up
    giveUpHold: 1.0,      // s, interact held while downed to give up and go back to the checkpoint
    godMode: 0,           // 1: health never drops below 1 (dev switch)
  },
  // Melee and Cheat Day. Times in s, distances in m, angles in deg (full cones), speeds in m/s, damage in hp.
  melee: {
    holdTime: 0.2, bashTime: 0.45, bashHitAt: 0.15, bashRange: 1.8, bashAngle: 60, bashDamage: 30, bashLunge: 0.6,
    bashCooldown: 0.6, revSpeed: 2.5, cutterReach: 1.1, cutterAngle: 50, cutTime: 1.2,
    finishTime: 0.7, executeRange: 1.6, executeAngle: 70, promptRange: 4, cutterSpin: 40,
  },
  // Kettlebells. Speeds in m/s, gravity in m/s^2, distances in m, times in s, damage in hp, angles in deg.
  grenade: {
    carry: 4, start: 4, throwSpeed: 13, throwLift: 10, gravity: 12, ballRadius: 0.12, restitution: 0.35, friction: 0.6,
    fuse: 1.6, radius: 4, damage: 160, killRadius: 1.2, killDamage: 200, selfDamage: 0.5, padReach: 0.8,
    arcTime: 2.0, throwTime: 0.35,
  },
  // Target dummies (the grey room's Associates). Health in hit points, times in s, speeds in m/s.
  dummy: { health: 100, respawnTime: 3, railSpeed: 1.5 },
  // Associates (Kiosk Row's enemies). Distances in m.
  associate: {
    radius: 0.35, height: 1.8, pointSpacing: 0.8, reserveRadius: 1.0, popShift: 0.55,
    linkMax: 7,           // m, longest waypoint link
    health: 100, runSpeed: 4.2, turnRate: 10, arriveDist: 0.15, stuckTime: 1.0, // hp, m/s, rad/s, m, s
    popTime: 0.15, telegraphTime: 0.6, burstTime: 1.6, rate: 5, damage: 5, range: 30, // s, s, s, shots/s, hp, m
    spread: 2.5, moveSpread: 4, aimLag: 0.2,                                    // deg, deg at full sprint, s half-life
    suppressChance: 0.5, suppressTime: 1.2, suppressRate: 4, suppressMiss: 1.5, suppressSpread: 8, // fraction, s, shots/s, m, deg
    coverWaitMin: 0.8, coverWaitMax: 2.0, magBursts: 3, reloadTime: 2.0, flinchTime: 0.25, // s, s, bursts, s, s
    minRange: 5, preferRange: 12, maxRange: 24, relocateCheck: 0.5, relocateAfter: 12, ammoDrop: 25, muzzleUp: 1.35, // m, m, m, s, s, rounds, m
    // Downed Reps, clone revive, stagger and kettlebell dives. Chances are 0 to 1, times in s, distances in m, speeds in m/s, health as a fraction.
    downChance: 0.35, downedCrawl: 0.8, bleedTime: 15, reviveTime: 2.5, reviveHealth: 0.4, reviveRange: 12,
    kneelReach: 0.8, staggerTime: 0.9, diveWarn: 1.0, diveRadius: 4.5, diveChance: 0.75, diveReaction: 0.25, diveDistance: 3, diveTime: 0.6,
  },
  // Spawn Saunas (the spec's Hiring Pads). Radius in m, times in s. A kettlebell closes one within radius + grenade.padReach.
  pad: { radius: 1.1, openAfterKills: 2, openAfterKillsSmoothie: 3, openAfter: 25, interval: 5, maxAlive: 2, total: 6, riseTime: 0.8, trainerShare: 0, trainerShareSmoothie: 0.5, trainerShareBoss: 0.4 },
  // The Personal Trainer (a rusher, no cover, no attack token). scaleW and scaleH size it against an Associate (its capsule and hit volumes).
  // Times in s, distances in m, speeds in m/s, damage in hp, angles in deg, chances 0 to 1. A swing only lands if Doc is inside swingRange + swingSlack
  // and swingArc wide of the facing locked lockTime before the blow; two blows are never within swingGap of each other.
  trainer: {
    health: 130, scaleW: 1.2, scaleH: 1.1, runSpeed: 6.2, turnRate: 12, maxAlive: 3,
    swingRange: 1.6, swingSlack: 0.4, swingArc: 120, windup: 0.5, lockTime: 0.15, swingTime: 0.3, recover: 0.8, swingGap: 0.6,
    damage: 30, tobbleDamage: 30, knockback: 1.6, knockTime: 0.35, staggerTime: 0.8,
    preferDoc: 0.6, retargetTime: 0.4, repathTime: 0.5, avoidRadius: 1.8, avoidWeight: 1.5, stuckTime: 0.6,
    diveChance: 0.4, barkChance: 0.5,
  },
  // Tobble, the squadmate (the story's intern). enabled is a flag read at fight creation and restart; scale is Tobble's size against an Associate.
  // Times in s, distances in m, speeds in m/s, angles in deg, health as a fraction where it says. His rate * damage is 0.25 of the Regret's.
  tobble: {
    enabled: 1, scale: 0.7, radius: 0.25, height: 1.26, health: 150, regenDelay: 3, regenTime: 3,
    runSpeed: 5.0, turnRate: 10, followMin: 2, followMax: 6, personalSpace: 1.2, lofClear: 0.8, lofRange: 20,
    sidestepReact: 0.4, sidestepDist: 1.2, popTime: 0.15, popLift: 0.15, muzzleUp: 1.1,
    coverWaitMin: 0.6, coverWaitMax: 1.6, burstTime: 1.2, rate: 4, damage: 9, spread: 3, range: 30,
    reviveMaxThreats: 2, reviveWaitMax: 4, reviveRange: 1.0, reviveTime: 3, reviveHealth: 0.5,
    playerReviveTime: 1.5, playerReviveRange: 1.5, crawlSpeed: 0.5, complainEvery: 6,
    recheckTime: 0.5, arriveDist: 0.15,   // s between "is my spot still good" checks, m to a waypoint that counts as reached
  },
  // The encounter director. Times in s, distances in m, angles in deg. casual is a flag (dev switch).
  director: {
    tokens: 2, casualTokens: 1, casual: 0, tokenCooldown: 1.0, tokenMaxHold: 3.0, requestWindow: 0.25,
    pushAfter: 6, flankAfter: 10, stayRadius: 2.5, flankAngle: 60, flankMaxAngle: 120,
    slotReuse: 1.0,   // s a dead enemy slot rests (its death burst plays) before a new Rep may take it
    maxEnemies: 8,   // enemy slots, 4 to 8 (read when the fight is created and at each restart)
  },
  // Shot feedback. Times in s, sizes in m, speeds in m/s, volumes 0 to 1, squash and kicks as fractions or m.
  feedback: {
    flashTime: 0.05, flashSize: 0.35, tracerTime: 0.05, tracerWidth: 0.025,
    sparkTime: 0.25, sparkCount: 4, gelTime: 0.5, gelCount: 6, gelSpeed: 3,
    killGelCount: 18, receiptCount: 8, receiptTime: 1.2, gravity: 9.8,
    hitMarkerTime: 0.12, killMarkerTime: 0.3, reloadResultTime: 0.6,
    lowAmmoFrac: 0.2,   // the reload alert shows when the magazine is at or below this fraction of full
    coverReticleOpacity: 0.5, // the reticle's opacity while tucked in cover (0 to 1)
    stepDip: 0.015,     // m, the lens dips this far on each foot plant
    stepVolume: 0.3,    // 0 to 1, a footstep (the 'step' sound recipe)
    reticleMinGap: 6,   // px, the reticle's arms at zero spread
    shotVolume: 0.55, hitVolume: 0.3, killVolume: 0.45, reloadVolume: 0.35,
    gunSquash: 0.18, gunSquashTime: 0.08, gunKick: 0.05, bodyKick: 0.04,
    dummyBurstTime: 0.12, dummyRespawnPop: 0.2,
    faceMaxOpacity: 0.85, edgeMaxOpacity: 0.55, // damage face and screen edge glow at zero health
    hitFlashTime: 0.4,    // s, the edge flash toward a shooter
    hitKick: 0.5,         // deg, camera kick when the player is hit
    hurtVolume: 0.45,
    enemyFlashSize: 0.3, enemyTracerTime: 0.08, enemyTracerWidth: 0.04, glintSize: 0.12, // m, s, m, m (acid-green enemy fire; the glint pulses at the blaster tip)
    blasterVolume: 0.3, chargeVolume: 0.25, pickupVolume: 0.35, // 0 to 1
    barkTime: 2.5, barkGap: 4, // s, a bark line stays this long and a new one waits this long after the last one began
    barkMinShow: 1.2,   // s, a forced bark that arrives in the same step as another waits until that one has shown this long
    // Milestone 5: melee, kettlebells, saunas and the squad. Volumes 0 to 1, sizes in m, times in s.
    bashVolume: 0.6, cutVolume: 0.5, throwVolume: 0.45, clankVolume: 0.35, boomVolume: 0.7,
    saunaVolume: 0.4, reviveVolume: 0.4, tobbleShotVolume: 0.25, blastSize: 2.5, blastTime: 0.35,
    executeShake: 0.05,   // m, the camera pulse each cutGelEvery during an execution
    cutGelEvery: 0.05,    // s between gel sprays during an execution
    arcDot: 0.06,         // m, dash and gap length of the kettlebell arc
    // Piece 4b, the Gears feel pass. Times in s, sizes and shakes in m, angles in deg (rad where it says), volumes and strengths 0 to 1, flags 0 or 1.
    // The cover glow: a mint strip along the top of the cover a tap (or a run-in) would take now. coverGlowFade is the fade in and out; coverGlowHz the pulse.
    coverGlow: 1, coverGlowOpacity: 0.9, coverGlowFade: 0.15, coverGlowLength: 3, coverGlowHz: 2.5,
    // The slam: slamHitstop is how long (real seconds) the simulation crawls at hitstopScale of normal speed; the dust puffs and the debris at the contact point; the pad rumble.
    slamHitstop: 0.06, hitstopScale: 0.05, slamDust: 8, slamDebris: 6, rumble: 1, slamRumble: 0.8, slamRumbleTime: 0.18,
    // Wild blind fire: the aim wanders blindDrift deg either side at blindDriftHz, easing in over blindDriftRamp s of held fire; each shot kicks the lens blindShake times
    // as hard and a sustained blindShakeAmp m shake runs; the gun flails blindFlail rad at blindFlailHz in the view.
    blindDrift: 6, blindDriftHz: 0.8, blindDriftRamp: 0.5, blindShake: 2, blindShakeAmp: 0.012, blindFlail: 0.35, blindFlailHz: 9,
    // Cheat Day as a chainsaw: the motor sound (motorVolume, motorRevTime s to full pitch), the sustained shake and pad rumble while revved, the sparks at the blade
    // (revSparkCount every revSparkEvery s), the disc drawn discScale times its size with a blur ring of discBlur opacity.
    motorVolume: 0.35, motorRevTime: 0.8, revShake: 0.006, revRumble: 0.3, revSparkEvery: 0.07, revSparkCount: 2, discScale: 1.9, discBlur: 0.4,
    // The grind: sustained shake, zoom (deg the lens narrows) and pull-in (m), the goo and sparks at the contact point, the struggle's jitter (m), the rumble.
    grindShake: 0.03, grindZoom: 6, grindPull: 0.35, grindGelCount: 6, grindSparkCount: 3, executeJitter: 0.05, grindRumble: 0.7,
    // Tutorial hints: a hint shows hintTime s (fading over hintFade) and the blind-fire hint waits hintCoverDelay s of cover; hint 0 turns them all off.
    hint: 1, hintTime: 4, hintFade: 0.4, hintCoverDelay: 6,
    // The reload callout: the bar scales by reloadBarScale and sits reloadBarGap px right of the reticle's arms, the bright zone and the alert pulse at
    // reloadPulseHz, the alert and the result flash scale by reloadAlertScale and reloadFlashScale; the tick (reloadTickVolume) speeds from reloadTickSlow to
    // reloadTickFast s apart over the last reloadTickLead of the bar before the bright zone.
    reloadBarScale: 1.6, reloadBarGap: 28, reloadPulseHz: 3, reloadAlertScale: 1.5, reloadFlashScale: 1.8,
    reloadTickVolume: 0.3, reloadTickLead: 0.3, reloadTickSlow: 0.25, reloadTickFast: 0.06,
  },
  // The run (src/run.js): arena swaps. Times in s, distances in m. A cleared arena's exit gate opens; walking into it (within gateReach
  // of its door, in front of it) fades to black over fadeOut, holds black for blackHold while the next arena loads, then fades in over
  // fadeIn. hoursTime is how long the cancellation-hours line shows after a checkpoint. attractSpeed (rad/s), attractMargin (m past the floor) and
  // attractHeight (m) are the title screen's orbiting camera.
  run: { fadeOut: 0.6, blackHold: 0.25, fadeIn: 0.6, gateReach: 1.6, hoursTime: 6, gateOpenTime: 0.8, attractSpeed: 0.12, attractMargin: 6, attractHeight: 10, cardTime: 3.5, defeatCardTime: 2.4, cardSkipDelay: 0.7 },
  // The Cancellation Manager (the boss; an enemy slot of kind 'boss', no cover points, no attack token). scale sizes the blob rig and its hit volumes;
  // crouchY is how tall it stands (a fraction) while it is tucked behind the desk. headMult is on top of the weapon's own head multiplier.
  // Phase 1 down to phase2At of its health, phase 2 (hiding, invulnerable, both saunas open) until they are closed or spent, phase 3 below phase3At.
  // Every attack is telegraphed: a burst by popTime + telegraphTime (fastTelegraph in phase 3), a terms-of-service lob by popTime + lobWindup and then
  // lobFlight more seconds of its marker on the floor. Times in s, distances in m, speeds in m/s, damage in hp, chances 0 to 1.
  boss: {
    health: 4500, scale: 1.8, crouchY: 0.5, headMult: 2, phase2At: 0.66, phase3At: 0.33,
    popTime: 0.5, telegraphTime: 1.0, burstTime: 2.4, rate: 5, damage: 6, spread: 2.5, aimLag: 0.25, muzzleUp: 1.35,
    coverWaitMin: 1.2, coverWaitMax: 2.2, shiftTime: 0.8,
    lobEvery: 2, lobWindup: 1.2, lobFlight: 1.5, lobRecover: 0.7, lobRadius: 2.5, lobDamage: 32, lobTobbleDamage: 32, lobFalloff: 0.5,
    retreatSpeed: 4.5, returnSpeed: 4.5, minHide: 2,
    fastTelegraph: 0.8, fastBurstTime: 2.0, fastRate: 7, fastWaitMin: 0.5, fastWaitMax: 1.1,
  },
  // The ending: after the Overlord falls, deathDelay s of slump and goo, then the desk lights up and holds for holdTime s of interact within
  // deskReach m of it; then the cards (cardTime each for the first three, a press after skipLock s skips one, the last waits for a press after finalLock s).
  // The blob aliens' goo drops: drops on each alien's skin that slide a little and drip off. count 0 to 4 per alien, sizes and distances in m, times in s.
  goo: { count: 3, size: 0.09, slide: 0.12, dripEvery: 2.6, dripFall: 0.25 },
  ending: { deathDelay: 2.2, deskReach: 2.6, holdTime: 1, card1Time: 2.2, card2Time: 6, card3Time: 3.4, skipLock: 0.7, finalLock: 1.2 },
};

# Customer Retention: design and build plan

Date: 2026-11-11
Status: draft, awaiting approval
Folder: `games/customer-retention/`

A third-person cover shooter in the mould of *Gears of War*, drawn like an adult sci-fi cartoon (the look of *High on Life*), with one complete level of about 10 to 15 minutes.

This document is the whole plan: what the game is, how it looks and plays, how the engine is put together, and the order to build it in. Each milestone in section 14 gets its own step-by-step task plan when it starts.

Items marked **(my call)** were decided by Claude, not by Josh. Everything else Josh chose or approved.

---

## 1. Intent

Josh wants a 3D, immersive, third-person shooter that has the key features of *Gears of War* and the animation style of *Rick and Morty*, without using that show's characters. One first level, with enemies, a mission and a story.

Success is a level that a new player can pick up from the title screen, understand without help, and enjoy to the end: the cover feels good to snap into, the guns feel good to fire, the jokes land, and the boss is a proper finish.

### Goals

- All the core Gears mechanics, working together: snap-to-cover, blind fire, vaulting, the crouched sprint, active reload, a melee execution weapon, being downed and revived, two primary weapons plus a sidearm and grenades, enemies that use cover and flank, spawn points you close with grenades, and a boss.
- A cartoon look in full 3D: flat colours, thick ink outlines, wobbly pupils, noodle limbs, gross-colourful alien shapes.
- A squadmate who fights beside you, banters and revives you.
- Mouse and keyboard, and gamepad, both first-class.
- Runs by double-clicking `index.html`, like every other game in the repo.

### Non-goals

- More than one level, a horde mode, or multiplayer.
- Voice acting. Dialogue is subtitles plus synthesized mumble sounds.
- Phones and touch controls.
- Key remapping, shoulder-swap, squad orders, vehicles, weapon tagging of grenades onto enemies.
- Photorealism of any kind.

### Anti-goals (these make it a failure even if it runs)

- A floaty tech demo: movement or shooting that feels weightless.
- Cover that grabs you when you didn't ask, or won't let go when you want out.
- A player who doesn't know where to go or what to do.
- Jokes that only work if you know another show, or that punch at people rather than at corporations.
- Any character, name, line or design copied from *Rick and Morty*, *Gears of War* or *High on Life*. The style is the reference; the content is original.

---

## 2. Story

### Premise

Eleven years ago, while drunk, **Doc Vex** signed up for **GlorpBox**, a monthly mystery box. Every box has contained a smaller box. Cancelling online is impossible. The terms say cancellation must be made in person, at the GlorpBox Service Desk, on the top deck of **Galleria Infinita**, an orbiting mega-mall.

The moment Doc walks in and says the word "cancel", the mall locks down and the **Retention Department** deploys: an army of identical cloned sales associates whose job is to make sure nobody leaves the subscription, or the building.

### Mission

Reach the Service Desk and cancel the subscription. In person. Alive.

### Cast

| Character | Role | Look | Voice |
|---|---|---|---|
| **Doc Vex** (she/her) | Player. Burnt-out genius, mid-fifties, solves everything with something she invented while drunk. | Tall and thin. Wild teal hair, one continuous eyebrow, deep eye bags. Lab coat cut down into a tactical vest with too many pockets. Noodle arms. | Low, dry, tired. Cynical one-liners. |
| **Tobble** (he/him) | Squadmate. Anxious alien intern, here for three college credits. | Half Doc's height. Mint green, three eyes, stubby legs, huge backpack, a visitor badge he is proud of. | High, fast, apologetic. Complains while being brave. |
| **Dale** (the clones) | Every enemy is a clone of Dale, GlorpBox's first employee. | Polo shirt, lanyard, headset, fixed smile. Variants differ in size and gear. | Relentlessly upbeat sales patter. |
| **Dale Prime, Regional Manager** | Boss. The original Dale. | Small, older Dale strapped into a walking mech built from massage chairs. | Heard on the intercom all level, then in person. Passive-aggressive. |
| **The Hold Voice** | The mall's automated announcer. | No body. | Cheerful, never changes tone. |

### Tone

Adult humour in the writing: cynical, crude where it's funny, aimed at subscriptions, call centres, malls and middle management. Violence is cartoon violence: clones burst into teal "onboarding gel" and paper receipts. No blood.

### Sample lines (to set the voice; the full script is written in milestone 10)

- Hold Voice: "Thank you for visiting Galleria Infinita. Your cancellation is important to us. Please remain alive. An associate will be with you shortly."
- Doc: "Eleven years of mystery boxes, Tobble. You know what was in them? Smaller boxes."
- Tobble: "The internship posting said 'light filing'."
- Associate, in a firefight: "Before you go, can I ask WHY you're leaving?"
- Associate, dying: "Was it something… we did…"
- Upseller, before firing: "UPGRAAADE!"
- Dale Prime: "Nobody cancels in my region. They churn."
- Ending, Hold Voice: "Your cancellation has been received and will take effect in six to eight business cycles. A cancellation fee has been charged to your account." Doc: "Tobble. Get the gun."

Line budget: about 120 lines in total, including barks **(my call)**.

Language rating **(my call)**: about a PG-13. Mild swearing (damn, hell, crap, ass) is fine. No strong profanity, no sexual jokes, no slurs. The site is public and carries Josh's name, so the script errs toward dry and cynical rather than shocking. This is easy to change before the script is written in milestone 10.

---

## 3. Art direction

### The look

*High on Life* is the reference: full 3D, but every surface reads as a drawing.

- **Flat colour, two tones.** Each surface has a lit colour and a shadow colour, with a hard edge between them. Shadows are tinted purple, never grey.
- **Thick ink outlines** on every character and prop, dark navy rather than pure black, roughly constant thickness on screen.
- **Chunky, slightly wrong shapes.** Nothing is perfectly straight or symmetrical. Props lean. Signs droop.
- **Faces.** Big white eyes with small pupils that wobble a little all the time. Mouths are simple shapes that flap when a character speaks. Eye bags, drool, sweat drops.
- **Noodle limbs.** Arms and legs are bendy tubes with no visible elbows or knees.
- **Squash and stretch** on landings, slams into cover, recoil and deaths.

### Palette

- Mall: teal, hot pink, cream and lilac, with neon sign accents. A 1990s shopping mall that has been in orbit too long.
- Doc: teal hair, off-white coat, orange gun (so the player's weapon always reads).
- Tobble: mint green with a yellow backpack.
- Clones: GlorpBox purple polos, with acid-green gel inside. Enemy weapon fire is acid green; the player's is orange. Colour tells you who is shooting.
- Space outside the windows: a magenta nebula and a planet, drawn by a sky shader.

### How it's made **(my call)**

Everything is built in code. There are no downloaded models or textures.

- **Characters** are assembled from simple shapes (spheres, capsules, lathed profiles) on a bone hierarchy, with tube limbs that bend along a curve between shoulder and hand, or hip and foot.
- **Faces** are small meshes parented to the head: eye whites, pupils, brow, mouth. Expressions are a handful of presets (neutral, angry, scared, smug, dead) blended by code.
- **Animation** is procedural. A character has named poses (joint targets) and cycles (run, crouch-walk, aim) driven by maths, blended with springs. Feet and hands are placed with two-bone IK. There is no keyframe authoring tool.
- **Props and architecture** come from a kit of parameterised builders: kiosk, bench, planter, counter, table, escalator, shop front, sign, palm tree, massage chair. Signs render their text to a canvas texture.
- **Outlines** use the inverted-hull method: each mesh is drawn a second time, slightly inflated, back faces only, in ink colour.
- **Shading** is a custom toon material with a two-step ramp and a rim highlight.
- **Gel, receipts, muzzle flashes, impact stars** are pooled particles and flat decals in the same flat-colour style.

Shop names are original jokes, not parodies of real brands: Pretzel Singularity, The Sock Dimension, Candle Void, Hot Dog on a Wormhole, Massage Chair Emporium.

### Look test

Milestone 0 ends with one finished-looking character (an Associate) in one lit corner of the mall. The Associate is animated, not a statue: it idles, runs on the spot, aims, flinches and talks, on a loop the viewer can step through. That means the first version of the rig builder, the limb IK, the springs and the face are built in milestone 0, because stiff animation is one of the main risks and it has to be judged early. Josh signs off on the look and the motion there, before any more art is made.

---

## 4. The level: Galleria Infinita

One linear level in six beats, about 12 minutes on a first play. Roughly 45 enemies plus the boss. At most 8 enemies alive at once **(my call)**.

| # | Beat | Size | What happens | What it teaches | Checkpoint |
|---|---|---|---|---|---|
| 0 | **Parking Void** | short corridor | Doc and Tobble arrive. The Hold Voice greets them. No enemies. | Move, look, sprint. | start |
| 1 | **Kiosk Row** | 30 × 14 m | Lockdown. Four Associates in two pairs behind kiosks. | Take cover, aim, blind fire, active reload. | yes |
| 2 | **Food Court** | 40 × 36 m, with a mezzanine | Five Associates. Then a Hiring Pad opens and Closers pour out until it is closed. Then four Associates and four Closers flank from the mezzanine. Shotgun pickup at the Sample Hut. | Grenades close pads. Flanking. The melee cutter against rushers. | yes |
| 3 | **The Escalators** | 12 × 30 m, climbing 8 m | Two Supervisors snipe from the top while four Associates come down. The player climbs from cover to cover while laser sights sweep. Scanner rifle pickup at the top. | Sprinting between cover under fire. Long-range shooting. | yes |
| 4 | **Bed and Bath department store** | 34 × 28 m | Six Closers ambush, disguised as mannequins. Then an Upseller with four Associates, and two Hiring Pads. | The heavy enemy. Managing two pads. Close quarters. | yes |
| 5 | **The Fountain** | 16 × 16 m | No enemies. Ammo, banter, the intercom's "special offer" gag. | A breather before the boss. | yes |
| 6 | **Service Desk Plaza** | 44 m across, round | Dale Prime in the massage-chair mech. T-shirt Cannon pickup. | Everything. | mid-fight |

Each arena has at least two routes forward (a main lane and a flank), a mix of low and tall cover, and one obvious landmark so the player always knows which way is onward. The objective line at the top of the screen and a "look at objective" button always answer "where do I go?".

### The boss: Dale Prime

Three phases **(my call on the detail)**:

1. **Armoured.** The mech walks the plaza firing a spread of acid-green offers and slamming the ground. Its front is armoured. After each slam it overheats for a few seconds and the glowing massage rollers on its back are exposed. Shoot them.
2. **Staffing surge.** It retreats to the Service Desk and opens two Hiring Pads. Closers and Associates arrive until both pads are closed with grenades.
3. **Exposed.** The armour falls off. Dale Prime, in the chair, charges the player. Dodge, shoot the pilot, and finish with a melee execution prompt.

---

## 5. Controls

| Action | Keyboard and mouse | Gamepad |
|---|---|---|
| Move | W A S D | Left stick |
| Look | Mouse | Right stick |
| Aim | Right mouse button | Left trigger |
| Fire | Left mouse button | Right trigger |
| Take cover, roll, vault (tap). Sprint (hold). | Space. Shift also sprints. | A |
| Reload, and active reload | R | Right bumper |
| Melee bash (tap). Rev the cutter (hold). | F | B |
| Pick up, revive, execute | E | X |
| Grenade: hold to aim the arc, release to throw | G | Left bumper |
| Switch weapon | 1, 2, 3 or mouse wheel | D-pad |
| Look at objective | Tab | Y |
| Pause | Esc | Start |

One button does cover, roll, vault and sprint, as in Gears; what it does depends on context. Leaving pointer lock (Esc) pauses the game. With a gamepad there is light aim assist: the reticle slows slightly over an enemy. Options: look sensitivity, invert Y, volume, subtitle size, difficulty (Casual or Normal) **(my call)**.

---

## 6. Core mechanics and starting numbers

All numbers live in one tuning file and are starting points to be tuned by feel.

### Camera

- Over the right shoulder: 0.55 m right, 1.55 m up, 2.6 m back. Field of view 70°.
- Aiming: pulls in to 1.4 m back, field of view 50°, movement slows.
- Sprinting: drops low, field of view 80°, a little shake, steering is limited.
- The camera never passes through walls (a sphere sweep pulls it in).
- In cover at a left-hand corner the camera shifts to the left shoulder automatically.

### Movement

| Move | Speed or timing |
|---|---|
| Jog | 4.5 m/s |
| Aim-walk | 2.2 m/s |
| Sprint | 7.5 m/s |
| Roll | 5 m in 0.55 s |
| Slide into cover | from up to 2.5 m away, in at most 0.25 s |
| Vault low cover | 0.5 s |

Movement uses quick acceleration (reach full speed in about 0.12 s) and a short stop, so it feels weighty but responsive.

### Cover

- Cover is either **low** (about 1 m; you can fire over it and vault it) or **tall** (you can only fire around its ends).
- Tap the cover button while moving toward cover within range: slide in and slam against it, with a camera bump and a thud.
- In cover: move along it; hold aim at an end or over the top to pop out and fire accurately; fire without aiming to blind fire (safe but inaccurate); push forward and tap to vault low cover; push toward nearby cover and tap to swap across a gap of up to 3 m; pull away to leave.
- While tucked in, the player cannot be hit from the front. Popped out, the head and shoulders can be hit.

### Health

- No health bar. Damage shows as a red unhappy "customer satisfaction" face that fills in at the centre of the screen, plus red at the screen edges.
- Health regenerates after 4 s without being hit, and is full 3 s later.
- At zero the player is **downed**: crawling, unable to shoot, with a 12 s timer. Tobble comes to revive (about 3 s). If the timer runs out, or Tobble is down too, the game reloads the last checkpoint.
- Tobble can be downed. The player revives him by holding the interact button for 1.5 s. He has no timer: if he isn't revived he stays down, complaining, and gets up by himself when the fight ends **(my call)**. Losing Tobble never fails the mission; it only removes the player's safety net.
- Associates are sometimes downed instead of killed. A downed clone crawls, can be revived by another clone, and can be executed by the player.
- Target: on Normal, the player survives about 1.5 s standing in the open against two shooters.

### Weapons

The player carries two primary weapons, a pistol and grenades.

| Weapon | Gears equivalent | Notes | Magazine | Where |
|---|---|---|---|---|
| **The Regret** | Lancer | Doc's orange assault rifle. Under the barrel is a spinning pizza cutter: hold melee to rev it, touch an enemy to execute them. An Associate takes 6 to 8 body hits. | 50 | start |
| **Clearance Pistol** | Snub pistol | Accurate, slow, never runs out of reserve ammo. | 12 | start |
| **Loss Leader** | Gnasher | Shotgun. Kills an Associate in one shot at point-blank; useless past 12 m. | 8 | Food Court |
| **Price Scanner** | Longshot | Barcode-scanner sniper rifle. One headshot kills most enemies; the head pops like a balloon. | 1 | top of Escalators |
| **T-shirt Cannon** | Boomshot | Explosive launcher. Rare ammo. | 2 | boss plaza |
| **Bath Bombs** | Frag grenades | Fizzing grenades. Hold to see the arc. They close Hiring Pads. Carry 4. | — | start, pickups |

Bullets are instant-hit rays with spread and recoil. The cannon and grenades are physical projectiles. Headshots do extra damage. Ammo is picked up from crates and from fallen clones.

### Active reload

Press reload and a marker sweeps along a bar. Press again:

- in the small bright zone: **perfect**. Fastest reload, and the new magazine does a little more damage (10%).
- in the wider grey zone: **good**. Faster reload.
- anywhere else: **jammed**. Slower than not pressing at all.
- not at all: normal reload.

### Melee

- Tap: a quick bash that staggers.
- Hold with The Regret: rev the pizza cutter. Touching an enemy while revved plays an execution (gel everywhere). Being shot while revving interrupts it.
- Interact on a downed enemy: execution.

### Enemies

| Enemy | Gears equivalent | Behaviour | How to beat it |
|---|---|---|---|
| **Associate** | Drone | Standard clone with an Offer Blaster. Runs to cover, pops out to fire bursts, blind fires, relocates, flanks when the player stays put. | Out-shoot from cover, or flank. |
| **Closer** | Wretch | Small, fast, no gun. Arrives in packs from pads, sprints straight at you screaming limited-time offers, and claws. | Shotgun, melee, keep moving. |
| **Upseller** | Boomer | Huge and slow, carries a T-shirt Cannon. Shouts "UPGRAAADE!" one second before each shot. | Get behind cover on the shout. Shoot between shots. |
| **Supervisor** | Sniper | Stays far back with a Price Scanner. A visible laser tracks you for 1.5 s before the shot. | Break line of sight when the laser finds you. Counter-snipe. |
| **Hiring Pad** | Emergence hole | A teleport pad that keeps producing clones. | A Bath Bomb on the pad closes it. Otherwise it stops after a fixed number. |
| **Dale Prime** | Boss | See section 4. | |

### Enemy thinking

- Each arena has cover points. An enemy reserves one, runs to it, and fights from it.
- An **encounter director** hands out a limited number of "attack tokens" (two on Normal). Only enemies holding a token may fire accurately at the player; the rest advance, suppress or reposition. This keeps fights fair and readable.
- Enemies telegraph: a clone leans out for a beat before firing, so popping up at the right time is a skill.
- Enemies react: they dive from grenades, relocate when flanked, and push forward when the player hides for too long.
- Enemies bark what they are doing, in character, which also tells the player what is happening.

### Tobble

- Follows the player, takes cover nearby, and shoots. He does about a quarter of the player's damage, so the player always matters.
- Calls out flanks, pads and the big enemies.
- Revives the player when it is safe enough to reach them.
- Never blocks doorways or stands in the player's line of fire (he sidesteps).

---

## 7. Screen and sound

### On screen

Kept minimal, like Gears.

- Bottom right: current weapon, ammo, grenade count, and the active reload bar when reloading.
- Top centre: one-line objective ("Reach the Service Desk").
- Centre: reticle (only while aiming or firing), hit markers, the satisfaction face when hurt.
- Bottom centre: subtitles with the speaker's name in their colour.
- Context prompts near the reticle: "SPACE take cover", "E revive Tobble".
- Title screen: the name, the goal in one sentence, the controls for the device in use, Start.
- Pause: resume, options, controls, restart checkpoint.
- The interface is ordinary HTML laid over the 3D canvas.

### Sound **(my call)**

All sound is synthesized in the browser; there are no audio files.

- **Effects**: gunshots with punch, gel splats, the cutter, the cover thud, reload clicks, a bright "ding" for a perfect reload.
- **Music**: mall muzak. Calm between fights. In combat the same tune gains drums and distortion. On the boss it falls apart.
- **Voices**: each character has a pitched gibberish mumble that plays under their subtitle.
- **Mix**: weapons and warnings (the Upseller's shout, the sniper laser whine) always cut through.

---

## 8. Technology **(my call throughout)**

| Need | Choice | Why |
|---|---|---|
| 3D rendering | **three.js** (MIT), pinned to 0.187 | The standard open-source WebGL library. Saves writing a renderer, maths library and scene graph. |
| Packaging | **esbuild** (MIT) | Source is written as small modules, then bundled into one ordinary script, so the game still opens by double-click. |
| Sound effects | **ZzFX** (MIT) | A tiny synthesizer for game sound effects. |
| Music and voices | Custom Web Audio code | Small, and the repo already has this know-how from Jam Tunnel. |
| Physics | None. Custom. | A cover shooter needs a capsule that slides along boxes, ray tests and grenade arcs. A physics engine would be more weight than value. |
| Pathfinding | Custom: hand-placed waypoints and A* | Arenas are small and authored. |
| Tuning panel | **lil-gui** (MIT), dev builds only | Live sliders for every number in section 6. |
| Tests | Node's built-in test runner | No extra dependency. |
| Browser checks | playwright-cli over a local server | Already used in this repo. |
| Input | Pointer Lock and Gamepad browser APIs | Built in. |

### The double-click rule

The repo's games must run from `file://`, which forbids modules and file loading. This game keeps that rule this way:

- Source lives in `games/customer-retention/src/` as modules.
- `npm run build` bundles it into a single classic script, `games/customer-retention/game.js`, which is committed.
- `index.html` loads only `game.js` and `style.css`. No network, no modules, no file loading at run time. All level data, text and shaders are inside the bundle.
- `package.json` and `node_modules` stay inside the game's folder, so the rest of the repo remains dependency-free. GitHub Pages needs no build step.
- A check script rebuilds and fails if the committed `game.js` is stale.

This is the first game in the repo with a build step. It is the price of using three.js, and the alternative (hand-writing a 3D engine in one file) would cost far more.

### Performance budget

- 60 frames per second on an Apple-silicon MacBook at its native resolution. Josh's machine (an M5) is the reference. Older Intel laptops are helped by the automatic resolution scaling but are not a target **(my call)**.
- Chrome is the reference browser. Safari and Firefox should boot and play. If pointer lock or the gamepad fails from `file://` in one of them, that is noted in the README rather than fixed at any cost **(my call)**.
- Under 400 draw calls and 300,000 triangles in view. Repeated props are instanced.
- At most 8 enemies, 1 squadmate and the player animated at once.
- If the frame rate drops, the game lowers its render resolution automatically.
- Bundle under 1.5 MB.

---

## 9. Engine layout

```
games/customer-retention/
  index.html  style.css  game.js (built)  package.json  NOTICES.md
  src/
    main.js              boot, title, game states
    tuning.js            every gameplay number
    core/                loop (fixed 60 Hz step), input, events, random, save
    render/              renderer, toon material, outlines, sky, particles, decals, camera rig
    world/               level data, prop kit, colliders, cover, waypoints, triggers, hiring pads
    actors/              rig builder, animator, player, Tobble, enemy brains, boss, health
    combat/              weapon data, ray hits, projectiles, active reload, melee
    director/            encounters, attack tokens, objectives, checkpoints, dialogue
    audio/               effects, music, mumble voices, mixer
    ui/                  heads-up display, menus, prompts, subtitles
    dev/                 debug drawing, tuning panel, playtest bot
  test/                  logic tests
  dev/                   build, check and playtest scripts
```

Principles:

- **Simulation is separate from drawing.** The game steps at a fixed 60 times a second; drawing interpolates. Rules (cover geometry, damage, reload timing, tokens, pathfinding) are plain logic that runs in Node, so they can be tested without a browser.
- **Data over code.** Weapons, enemies, the level and the script are tables. Adding a weapon is adding a row.
- **Cover is derived.** Any box tagged as cover produces cover edges automatically (trimmed where it meets a wall), with manual overrides. The player's cover movement and the enemies' cover points come from the same data.
- **Collision is simple.** The world is boxes. Characters are capsules for movement, and a head sphere plus body capsule for hits.
- **Levels are authored as data** in metres, built from the prop kit, with triggers that start encounters, lines and checkpoints.
- **State is saved** as a checkpoint index and loadout in `localStorage`, wrapped so the game still works if storage is unavailable.

---

## 10. What "fun" means here

These are checked by playing, at every milestone from 1 onward.

1. **Cover feels like a magnet you control.** Slamming in is fast and loud. You are never pulled in by accident, and leaving is instant.
2. **Every shot gets an answer.** Recoil, a muzzle flash, a hit marker, a flinch, a splat, a sound. Kills burst.
3. **Thirty seconds of fun.** Pop out, drop a clone, duck a burst, nail a perfect reload, sprint to the next kiosk. If that loop isn't fun in a grey box with one enemy type, nothing later will fix it. Milestone 4 exists to prove it.
4. **Enemies are readable.** You can always tell who is about to shoot, and why you got hit.
5. **You always know the goal.** One line on screen, one button to look at it.
6. **The jokes ride along.** Banter happens during walking and after fights, never over a tense moment's key sounds, and never stops play.

---

## 11. Testing and checking

- **Logic tests** (Node): cover edge generation, sliding along and leaving cover, reload timing windows, damage and headshots, token hand-out, pathfinding, checkpoint save and load.
- **Smoke test** (browser, automated): the built game boots from a local server with no console errors, reaches the title, starts, and renders frames.
- **Playtest bot**: a dev-only script that walks the level on rails with invulnerability on, triggering every encounter, to prove the level can be completed and to record frame rate per arena.
- **Screenshots**: one per arena after each art change, for review.
- **Double-click check**: the built game is opened from the file system before each merge.
- **Feel passes with Josh**: at milestones 0, 1, 2, 4, 6, 9 and 12. Automated checks cannot judge feel, so these are part of done. Section 14 says which of these stop the work.

---

## 12. Risks, and the cut list

| Risk | What we do about it |
|---|---|
| **Size.** This is far larger than any game in the repo (an estimated 12,000 to 15,000 lines). | Grey-box first, art second. Every milestone ends playable. Cut list below. |
| **Cover feel.** The hardest thing to get right. | It gets its own milestone and feel pass before any enemy exists. |
| **The look, from code-built shapes.** | The look test in milestone 0, before investing in art. |
| **Procedural animation looks stiff.** | Lean into the cartoon: noodle limbs, springs, squash and stretch hide a lot. Judged in the look test. |
| **Performance of outlines and many characters.** | Measured in milestone 0 with 10 dummy characters. Instancing and automatic resolution scaling. |
| **Pointer lock or gamepad misbehaving from `file://`.** | Verified in milestone 0. |
| **Stale built file committed.** | The check script. |

There is no deadline. The cut list exists in case the game is taking too long to be worth it; Josh decides whether to use it, and the natural moment to ask is the milestone 6 gate, before the roster, level and boss are built **(my call)**. Cut in this order: T-shirt Cannon, Supervisor (and its sniping on the escalators), moving escalator steps, cover-to-cover swap, clones reviving each other, boss phase 2.

---

## 13. Left to the builder

- Exact shapes, proportions and colours of each character and prop, within section 3.
- The internal design of each module, within section 9.
- The exact layout of each arena, within the sizes and beats of section 4.
- Final tuning numbers.
- The full script, in the voice of section 2.

---

## 14. Build order

Each milestone ends with something playable and a "done when". Sizes are relative: S, M, L.

| # | Milestone | What gets built | Done when | Size |
|---|---|---|---|---|
| 0 | **Toolchain and look test** | Folder, build to a single script, three.js scene, toon material and outlines, first rig builder and animator, one finished and animated Associate in one mall corner, pointer lock, gamepad read-out, frame-rate test with 10 animated dummies. | Opens by double-click. 60 fps. **Josh approves the look and the motion.** | L |
| 1 | **Movement and camera** | Grey-box room. Capsule movement, shoulder camera with wall avoidance, sprint, roll. Tuning panel. | **Josh says moving feels good**, on mouse and on gamepad. | M |
| 2 | **Cover** | Cover edges from boxes, slide in, move along, pop out, vault, swap, leave. Logic tests. | **Josh says cover feels good.** No accidental grabs in a 5-minute run-around. | L |
| 3 | **Gunplay** | Rifle and pistol, aiming, blind fire, recoil, hit feedback, ammo, active reload, target dummies. | Shooting dummies is satisfying. Perfect reloads are learnable. | M |
| 4 | **First fight** | Associate brain with cover use, attack tokens, player health, regeneration and being downed, the damage face. One grey-box arena. | **The 30-second loop is fun** (Josh's call). | L |
| 5 | **Squad and finishers** | Tobble, revives both ways, downed clones, melee bash, cutter executions, grenades, Hiring Pads. | A fight with Tobble, a pad and a cutter kill works end to end. | L |
| 6 | **Art pass** | Rigs and animation for Doc, Tobble and the Associate; the mall prop kit; lighting; sky; gel and receipts. | The milestone 5 fight, now looking like the game. **Josh approves.** | L |
| 7 | **Full roster** | Closer, Upseller, Supervisor. Shotgun, Price Scanner, T-shirt Cannon. | Each enemy and weapon has a test arena and feels distinct. | L |
| 8 | **The level** | All six beats built from the kit, encounters, triggers, checkpoints, objectives, the escalator climb, pickups. | The playtest bot completes beats 0 to 5. A person can too. | L |
| 9 | **The boss** | Dale Prime, three phases, arena. | **Josh beats it and it feels like a finish.** | M |
| 10 | **Story and sound** | Full script, subtitles, mumble voices, effects, adaptive muzak, opening and ending. | The level plays start to end with story and sound. | M |
| 11 | **Front end** | Title, pause, options, tutorial prompts, gamepad prompts, checkpoints surviving a reload, hub card and README entry. | A new player needs no outside help. | M |
| 12 | **Tune and ship** | Difficulty tuning, performance, bug fixing, final feel pass, pull request to `main`. | **Josh plays start to finish and approves.** Checks pass. Opens by double-click. | M |

### How the gates work **(my call)**

Three gates stop the work until Josh has played, because everything after them is built on top of what they decide:

- **Gate A, after milestone 0:** the look and the motion.
- **Gate B, after milestone 2:** movement and cover together (milestone 1 is not a separate stop).
- **Gate C, after milestone 4:** is the 30-second loop fun?

The later feel passes (milestones 6, 9 and 12) do not stop the work. Building carries on, and Josh's notes are folded in as they arrive.

### Branches and pull requests **(my call)**

Work happens on one `customer-retention` branch. A pull request is opened against `main` at each gate and at the end, never stacked on another branch. Merging at a gate puts the work-in-progress on the live site so Josh can play it there, including from another device. The game is not listed on the hub page until milestone 11.

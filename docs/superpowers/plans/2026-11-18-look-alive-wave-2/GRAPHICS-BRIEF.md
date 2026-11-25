# Look Alive: graphics brainstorm briefing

This document is written for an outside creative collaborator who cannot see the game, cannot see any image, and has no other context. Everything you need is in words. "The designer" is the one person who makes the game and decides what gets built. Your job is at the end (section 10): brainstorm graphics ideas the designer can act on.

How to read the status words used throughout:

| Word | Meaning |
|---|---|
| Built | Exists in the game today and was looked at while writing this briefing |
| Agreed, not built | The designer approved a look (as mock-up images) but the game does not show it yet |
| Confirmed | A decision or rule the designer stated |
| Proposed | A plan written for the designer; not yet approved |
| Awaiting decision | The designer has been asked and has not answered |
| Not verified | Stated in a source but I did not check it |

Where a source contradicted another, it is listed at the very end (section 11).

---

> **Art pack.** This brief comes with a folder of images, `graphics-brief-art/`: real renders from the running game, current screenshots, the intro and card art, and the 30 agreed mock-up targets. Read `graphics-brief-art/INDEX.md` for a caption of every file. If you can see images, look at `renders/` first (the actual dish look), then `mockup-targets/ALL-30-contact-sheet.jpg` (the look we want to reach).

## 1. Pitch and kind of game

**Look Alive is a puzzle game about disguise. Think of Plague Inc in reverse: instead of spreading a disease, you win by passing as native.** You design a tiny artificial microbe and drop it into a Petri dish full of real microbes. If it grows at the same speed as the locals, smells like them, divides as messily as they do, and survives what they survive, the dish's guards (the native immune cells) never notice it and you pass. If it grows too fast, too regularly, or leaves the wrong waste, it gets spotted and destroyed.

The twist in the fiction: the player is not a human scientist. The player works for a colony of tiny aliens who have come to Earth, have misread what they are looking at, and are sending a disguised scout into the "crowd" they have found.

| Aspect | Detail |
|---|---|
| Genre | Single-player puzzle and light simulation. Short rounds (a run is about 300 simulated ticks, replayed in under a minute). Learn by failing, adapt, retry. |
| Core loop | Briefing, Watch (your cell fails on purpose), Adapt (fit parts into body slots), Run, Result. Five named steps are always shown in a step bar. |
| Level structure | Ten "dishes" in one world. Dishes 1 to 5 each teach one new problem. Dishes 6 to 10 are "exams": no answer tips, several different cells can pass. |
| Teaching goal | Real biology. Every card is backed by a real organism, and every win unlocks a notebook page of true microbiology. |
| Players | Curious general players, including teenagers and adults who like puzzle and strategy games and enjoy the science. No biology knowledge is assumed. |
| Where it runs | A web browser, from a plain double-clicked HTML file. No server, no installer, no game engine, no build step. Plain scripts. |
| Rendering | The dish is drawn with WebGL2 (a custom shader pipeline). Everything around it (menus, cards, charts, memos) is ordinary HTML and CSS. It is designed to work on a laptop and down to phone width. |
| Sound | None yet. |
| Playtesting | No human has played the full flow yet (headless automated runs only). |

Today's look in one sentence: a dark-field microscope dish (violet natives, pink player cells on black) inside a dark neon "instrument" interface, with cream paper memos for results.

---

## 2. Plot and premise

### 2.1 The aliens

- A colony of tiny aliens with a **very fast metabolism**. They live fast, think fast, and communicate fast.
- They **think together**: the colony is one mind more than a crowd of individuals. They "think as one colony, faster than any single cell could".
- They mostly stay inside the colony, **but an individual can leave and join another group**. That is the mechanism of the whole plot: they will send one individual to join the natives' crowd.
- They are **very small**, and they believe **all intelligent life is tiny like them**. They have never considered that something big could be smart, just as we do not wonder whether a mountain is thinking.

### 2.2 The misunderstanding (the central joke)

- On arrival they find a **warm mountain**: it gives off heat, it is far too big and too slow to be alive by their standards.
- Their sensors show it holds the **densest crowd of life** they have ever seen. So they conclude the mountain is not a creature but a **city** and the crowd inside is a civilisation.
- In the real world the "mountain" is a cow (or similar large animal) and the crowd is its gut flora. **The aliens never say "cow", "mammal", "stomach" or "city" as fact.** They only say "city" in their own tentative voice ("We think a city lives inside a warm mountain").
- The microbes are **simple Earth microbes living on instinct**. They are not building anything, not plotting anything, and not intelligent.

### 2.3 The ladder (the planned story spine)

The aliens' assumption about how big a mind can be **grows by about one order of magnitude (ten times) per stage**, as they move through habitats, until they finally reach mammals and creatures our size. Proposed ladder (see section 7 for status):

| Rung | Habitat | Largest thing they meet | What they now assume |
|---|---|---|---|
| 0 | The warm crowd (built) | Dense tiny life inside a warm mountain | Minds are our size. The crowd is a city. |
| 1 | The banded water (hot spring) | A slow shadow that erodes the cool edge; bands of colour by temperature | A city is not the biggest kind of thing: a league of cities shares one body |
| 2 | Salt flat | Brine shrimp, wandering things about ten times larger than a crowd | Wandering things that large may think |
| 3 | Forest soil | Fungal threads spanning hectares (one real fungus covers about 900 to 965 hectares) | A network like their own colony, only enormous: the first mind that thinks the way they do |
| 4 | Deep ocean | Small sea creatures, then a sunken whale (a "whale fall") as the finale | A mountain can be dead and still full of cities, so the warm mountain was alive |

**The ending idea (a proposal, awaiting the designer's decision):** the whale fall is a dead giant with a whole ecosystem living on it. It lets the aliens re-read rung 0: the warm mountain they treated as a city was actually a living giant, and they were inside a body the whole time. Everything before it is set up to make that land as a joke and as a small moment of awe.

The real size ladder is only roughly tenfold per step (bacterium about 1 to 2 micrometres; a ciliate or amoeba tens to 300 micrometres; a tardigrade about 0.3 to 0.5 mm; a nematode or springtail up to 2 to 5 mm), so the game says "about ten times".

### 2.4 The in-fiction machinery of the game

- The aliens' **lab builds an artificial microbe** (that is what the player designs) and **sends one individual to join the crowd**.
- Before that, the lab **tests the disguise in Petri dishes**. Each dish is grown "from the scouts' samples".
- Each dish opens with an **environment analysis report** (a typed list of readings: acidity, food supply, inspectors, energy budget).
- **Green cells are "guards"**: in reality the immune system. The aliens see them as the natives' inspectors.
- A **win** gives a **cover name** (a made-up Latin-style species name for the disguised microbe) and unlocks a **notebook page**: a short, true piece of microbiology copied from the scouts' samples.
- A **loss** gives a memo with a finding, the stat that failed, and a way back to Adapt with the build kept.

### 2.5 What the player sees of the story today

Five picture slides at the start, one list-screen sentence, a "world" screen with six facts, an environment report per dish, a memo or a win card, and a notebook page. After the intro, the aliens barely speak. This is a known weakness (section 6.3) and the story spine (section 7) is meant to fix it.

---

## 3. Tone and hard rules

### 3.1 Tone

Dry, affectionate, scientific-comedy. The aliens are earnest, a little pompous, always wrong in a charming way. The real biology is told straight and accurately. The humour comes from the gap between what the aliens think they see and what is really there. Text is short, concrete, and in plain English. Think "deadpan field report from very small people".

### 3.2 Hard rules for any text or image

1. **Never show or imply that the bacteria build anything.** No cities, streets, towers, lamps, districts, buildings or architecture of any kind, drawn by microbes. Mats and colonies are natural lumps, layers, streaks and clouds. The word "city" is only ever in the aliens' own tentative voice, never a label.
2. **Never show cells with a nucleus, mitochondria, Golgi apparatus or faces.** The microbes are bacteria and archaea (no nucleus). A bacterial cell is: a ring of envelope, a loose coil of DNA, ribosome dots, nothing else. No smiles, no eyes on microbes.
3. **The aliens never state "cow", "mammal", "stomach", "intestine" or "city" as fact.** Only in their own hedged voice ("we think", "it must be").
4. **Real or realistic names for natives** (Lactobacillus, Streptococcus, Helicobacter pylori, Proteus mirabilis, Bacillus subtilis, Escherichia coli, Aliivibrio fischeri, Picrophilus). **Latin made-up names only for alien species and worlds.**
5. **English only** in the interface and copy.
6. Green cells are called **guards**.
7. The aliens' lab is in the natives' scouts' samples, never in a place the player can see.

(Rule 2 is about the microbes. See section 11 for how some existing art for the guards, which are not bacteria, shows eyes.)

### 3.3 The voice: quoted lines from the game

These are the game's actual lines, so you can match them.

1. "You are very small. So is everyone you know, and together you think as one colony, faster than any single cell could."
2. "Our sensors found a mountain nearby that gives off heat. It is far too big and too still to be alive. But inside it, there is a crowd of life, denser than anything we have ever seen."
3. "So many, so close, so busy. Where we come from, a crowd like this means a civilization. We think a city lives inside the warm mountain, so we will treat it as one."
4. "Food comes in bursts. The locals feed, divide and die. We cannot tell why."
5. "Our lab grows each dish from the scouts' samples and tests your microbe in it. Pass as a local and we add a page to our notes."
6. "Green guards attack anything that does not belong, once they notice it."
7. Win-card caption under the notebook page: "(Copied from the locals. Keep it secret from the guards.)"
8. Loss memo letterhead: "MEMORANDUM. From: Office of the Immune Coroner." (This one slightly breaks the "guards" rule; it is on the list to change.)
9. Win stamps (one per win, chosen by the build): SUFFICIENTLY BACTERIAL, PASSES AS NATIVE, NOTHING TO SEE HERE, APPROVED BY THE IMMUNE SYSTEM, UNREMARKABLE, CLEARED FOR COLONISATION.
10. Proposed (not built) voice for the next habitat: "The crowds here stand in bands, hot to cold, like a map." and "Something at the cool end is wearing the crowds away. It is very slow. We think it is weather."

---

## 4. Names and vocabulary

### 4.1 Game and world

| Thing | Name in the game |
|---|---|
| Game | Look Alive |
| First world (shown on the world screen) | The warm crowd. Earlier planning documents and the postcard mock-up call the planet "Acidica" ("Greetings from Acidica"). Current in-game name: "The warm crowd" (see section 11). |
| Dish list headings | "Pass as a native." then "Learning the cell: dishes 1 to 5, one new problem each", "Exams: dishes 6 to 10, no answer tips, several cells can pass" |
| Player's microbe | "Your cell", "the Factory unit" at the start |
| Result words | CLEARED, MEMORANDUM, SAMPLING COMPLETE, Registered cover name, Exam grade (Passable, Convincing, Benign) |
| Immune stages | Calm, Curiosity, Inspection, Response |
| Suspicion channels | Growth (speed), Smell, Growth (share), Naturalness |

### 4.2 The ten dishes

| # | Title | One-line problem | Group |
|---|---|---|---|
| 1 | Don't Dissolve | The water is acid. A cell with nothing to keep the acid out dissolves. | Learning |
| 2 | Don't Take Over | Food is everywhere and nothing eats you, so a cell that divides at its usual pace floods the dish. | Learning |
| 3 | Smell Right | Everyone here leaves the same sour trail. Your cell leaves a different one. | Learning |
| 4 | Be Messy | Machine parts make every cell divide on the same schedule. Real cells are messier. | Learning |
| 5 | When Things Change | Partway through the run the food crashes. | Learning |
| 6 | Strong Acid | The acid is much stronger here. A thin membrane is not enough, and holding the acid out takes more from you. | Exam |
| 7 | Lean Times | Food is plentiful again, but your energy budget has been cut. | Exam |
| 8 | Twice Bitten | The food crashes twice, close together. | Exam |
| 9 | The Inspector | The inspector is stricter about anything that looks like a machine, and your energy is tight. | Exam |
| 10 | Greetings from the Warm Crowd | Strong acid, plentiful food, a food crash and a strict inspector, all at once. | Exam |

The designer has said these ten dishes are fine and are not to be redesigned.

Notebook page titles (one per win): 1 How acid-loving microbes keep acid out; 2 The growth curve and carrying capacity; 3 Fermentation and respiration; 4 Variation between cells; 5 Sensing and response; 6 How acid-lovers trade energy for safety; 7 Why real cells cannot have everything; 8 Bet-hedging: sleepers and spores; 9 Why variation is normal in living things; 10 A summary page from the lab.

### 4.3 The five stats (shown as horizontal "forecast" bars)

| Stat | What it means, in plain words |
|---|---|
| Acid defence | How well the cell survives the acid. Too low and it dissolves. |
| Growth | Speed of dividing. Too fast: you take over the dish. Too slow: you fade out. |
| Smell | How close your waste trail is to the locals' sour trail. |
| Naturalness | Whether your cell divides and behaves with natural mess. "Too perfect: you look like a machine." |
| Crash survival | Whether the colony lives through a food crash. |

Each bar has a green "safe zone", a marker for your current value, and a dashed outline for the forecast of a change you are previewing. A bar can be "not checked on this dish" (greyed) or "close to the edge" (amber).

### 4.4 The seven body slots (the cell diagram)

| Slot | Where on the cell | Job | Opens on |
|---|---|---|---|
| Power | the glowing core | How the cell makes energy. Always one. | Factory part fitted (opens dish 3) |
| Envelope | the outer skin (up to two layers) | Protection | Dish 1 |
| Insides | the fluid inside | What fills the cell | Dish 1 |
| Division | the pinch across the middle | How the cell splits | Factory part fitted (opens dish 4) |
| Signal | dots leaking from the surface | How cells tell each other the crowd size | Dish 2 |
| Motor | the tail | How the cell moves | Locked in the first world ("The Motor slot is locked here.") |
| Reflex | a sensor patch on the skin | What the cell does when things change | Dish 5 |

Also two dials: **Pace** (0 to 8, "4 is the native rate") and **Sloppy** (0 to 8, timing randomness; "0: Perfectly regular"). And an **Energy** budget (a segmented bar; every part costs 0 to 3 units).

### 4.5 Every card

Cards sit in slots. Each is either **Biology** (looks natural, safe from suspicion) or **Machine** (powerful, but makes you look artificial; drawn with a hexagon motif and cyan accent). Every card has a one-sentence "real biology" line behind a checkbox.

| Card name | Slot | Shelf | Energy | Real organism or idea it refers to |
|---|---|---|---|---|
| Respiration | Power | Biology | 0 | Cells that use oxygen to burn sugar completely (no single named organism). |
| Fermentation | Power | Biology | 0 | Lactic acid bacteria (Lactobacillus), which ferment sugar and leave acid. |
| Cell wall | Envelope | Biology | 2 | The stiff mesh around a bacterial membrane. |
| Proton pump | Envelope | Biology | 2 | Acid-loving archaea that pump acid back out. |
| Tight membrane | Envelope | Biology | 1 | Picrophilus, with membranes almost no acid crosses. |
| Acid-proof insides | Insides | Biology | 3 | Picrophilus, which lets its insides go acidic and builds every protein to cope. |
| Head count (quorum signal) | Signal | Biology | 2 | Aliivibrio fischeri in the bobtail squid's light organ: they count neighbours by a leaked molecule and glow together. |
| Random naps | Division | Biology | 1 | A few Escherichia coli cells randomly stop growing and survive what kills the rest. |
| Flagellum | Motor | Biology | 2 | The spinning bacterial tail; run, tumble and run. (Card exists; the Motor slot is locked in the first world.) |
| Stringent response | Reflex | Biology | n/a | Starved bacteria make an alarm molecule that stops growth. |
| Sporulate | Reflex | Biology | n/a | Bacillus subtilis sealing its DNA in a spore. |
| SOS response | Reflex | Biology | n/a | DNA damage triggers repair and halts division. |
| Fuel cell | Power | Machine | 1 | None. "No cell does this." It burns sugar and leaves no waste. |
| Sync pulse | Division | Machine | 1 | Based on a real cyanobacterium with a 24-hour clock; here every unit divides in unison, which no real colony does. |
| Sealed shell | Envelope (takes both layers) | Machine | 1 | Diatom glass shells, but sealed solid, which nothing alive could survive. |
| Radio mesh | Signal | Machine | 2 | None. Every unit knows the exact head count at once. |
| Perfect copier | Division | Machine | 1 | None. Copies never fail, so nothing ever dies. |
| Self-repair | Insides | Machine | 2 | None. Damaged units rebuild themselves. |
| Machine rule (sentence builder) | Reflex | Machine | varies | "When [food here] is [less than] [0.25], then [pause dividing]." Readings are exact and instant, which no real cell can do. |

The starting "Factory unit" (the cell the player starts every game with) has Respiration in Power and the Sync pulse in Division.

### 4.6 The natives

The game's world screen says: "Our samples name the locals: Lactobacillus, Streptococcus, Helicobacter pylori." Other named microbes appear on notebook pages (Proteus mirabilis, Escherichia coli, Bacillus subtilis, Aliivibrio fischeri, Picrophilus torridus). **In the dish today every native is drawn as one violet rod shape**, so a player who reads the species names cannot find them (see section 6).

### 4.7 The cover name

On a win, the game generates an italic two-word species name from the build. The first word is a genus tied to the Power card (Helicobacter for Respiration, Lactobacillus for Fermentation, Vibrio for Fuel cell). The second word is a Latin-style adjective picked from the cards fitted. Examples of the second-word stock: parcus, sporans, reparans (reflexes); armatus (cell wall), sociabilis (head count), dormiens (naps), acidotolerans (acid-proof), protonicus (pump), horarius (sync pulse), testaceus (shell), perfectus (copier); also computans (machine rule), suspiciosus (any Machine part), adolescens (very sloppy), modestus or festinans (slow or fast pace), acidophilus (fermentation), normalis (nothing special).

Example of a finished win card: stamp "PASSES AS NATIVE" (red double-border, tilted), cover name *Lactobacillus protonicus*, caption "Registered cover name", then the dish and a record line. (A mock-up title screen uses the joke subtitle "Bacillus normalis - not a robot.")

---

## 5. The look today, as built

Screen resolution of reference: 1280 by 720 desktop. Also checked at 390 by 844, 320 by 640 and 844 by 390 phone sizes (everything fits, with known problems in section 6).

### 5.1 Colour tokens (from the stylesheet)

| Token | Value | Used for |
|---|---|---|
| bg | #04050a | page background (near-black with a blue cast) |
| panel | #090b12 | panel fill |
| panel2 | #0d1019 | buttons and secondary panels |
| line | #232838 | panel borders |
| line2 | #333a50 | stronger borders |
| ink | #e6e9f4 | body text (cool off-white) |
| dim | #8a90a8 | secondary text |
| vio (violet) | #a78bfa | natives, kickers, numbers |
| pink | #ff6b95 | the player's cell, titles, primary buttons, the active step |
| amb (amber) | #f5a524 | waste, acid, energy, warnings |
| grn (green) | #2dd4a7 | guards (immune), safe zones, success |
| cy (cyan) | #5fd0ff | Machine cards, focus rings |
| red | #ff5d6c | failure |

Paper (memos, win card, notebook): a cream background about #efe6d0 with dark brown-black ink #2b2418, faint ruled lines, a drop shadow, red stamp ink about #b3202e.

**Stain meanings (never change):** violet = native life. Pink = the player's cells. Amber = waste and acid. Green = immune activity (guards). Patterns are meant to carry the same meanings so colour is never the only cue (agreed in mock-up 24, not yet applied to the interface).

### 5.2 Type

| Face | Use |
|---|---|
| IBM Plex Sans | Body text, 13 px base, 15 to 16 px in briefings |
| IBM Plex Mono | Labels, kickers, step bar, panel titles: small, uppercase, widely letter-spaced (about 0.08 to 0.14 em) |
| Special Elite (typewriter) | Everything on paper: memos, win card, notebook, report text |

Fallbacks are system fonts. Fonts load from a font service with a system fallback, so the game still works offline.

### 5.3 Screen by screen

**Intro (five slides).** A 16:9 picture on top, rounded corners, thin border; under it a small mono kicker ("Arrival, 1 of 5"), a big pink headline, an 18 px paragraph, then dots and Back, Skip, Next buttons. The five slides (all JPEG, 1280 by 720, painterly glossy style, see 5.7):
1. "You are very small." Earth from space, a small pink round pod with antennae and a pink trail in front.
2. "The ground is mountains." Ground-level: grass blades, huge dewdrops, a pod on a crumb of soil, floating violet rods, a huge dome of water.
3. "A warm mountain." A field at dusk under an orange glow; a huge dome hill with a speckled violet interior, reticle lines over the picture; pod, two spiky violet bacteria and a green blob in the foreground.
4. "It must be a civilization." Inside amber folds of tissue: violet cocci in chains and short rods clustered on orange ridges; a pink pod; two green spiky guard cells in orange haze.
5. "We must blend in." Furry violet rods, three small pods with round pink aliens inside glass domes lowering golden vials on tubes into the bacteria; a glowing empty Petri dish in the background; a green spiky guard with narrow glowing eyes top right.

**Dish list.** Narrow centred column (about 880 px). Pink headline "Pass as a native." and a two-line grey lede. Two group headings in mono caps. Ten rows (each 64 px tall): a big violet number, bold title, a one-line problem, a dim "You start with: Pace 4, Respiration, Sync pulse", a status word (OPEN, LOCKED, Cleared or an exam grade) and a Start button. Locked rows are faded. No pictures at all on this screen. Plain, tidy and a little dull.

**World briefing.** Mono kicker "THE WORLD", a large pink "The warm crowd", a wide banner picture (dark field, amber streaks, violet rods, a pink cell dissolving into amber dots), then a 3 by 2 grid of six fact cards (violet numerals, white text), a dim paragraph about Proteus mirabilis border lines, and a Continue button.

**Dish briefing and environment report.** Mono kicker "DISH 1 OF 10", a 38 px pink title, then a bordered box styled as a terminal readout: "ENVIRONMENT ANALYSIS · THE WARM CROWD · SITE 1 OF 10" with rows that type in one by one (amber label, white value): Acidity "pH about 2.3 (strong)", Food supply, Inspectors, Energy budget; then a status line "Building petri dish... ready. Your artificial microbe is loaded for a compatibility test." Under it three label-and-text rows: The problem, Your goal, Your cell (a small framed card picture of the Factory unit plus its parts). One button: Start the test. Mostly empty dark space.

**Watch.** Left: a framed panel with the round dish (about 320 px across), a small "Your cell" thumbnail at its top left, a scale bar ("50 um"), a legend (natives violet, you pink, waste amber), and a status line ("Colony alive: 0%. Lost to acid: 35% per tick"). Under it: Pause, 1x 2x 4x 16x, Skip, a scrub slider, and small chips for the fitted parts. Right: a box with one verdict line, a "Live stats" bar panel, and one or two line charts (your colony, lost to acid). On dish 1 the player's pink cells dissolve and are gone within about 30 ticks.

**Adapt (the main puzzle screen).** Three columns.
- Left: a large soft glowing pink cell (a pink disc with a hexagon lattice, drawn by the same shader as the dish). Around it, labelled rectangular "slot tags" connected by thin leader lines (Reflex, Envelope, Division, Motor on the left; Signal, Insides, Power on the right). Locked slots are dim with a padlock and "Opens on dish N". Slots that can fix the failing stat glow amber. A dashed "Preview" box underneath, then the energy bar and the Pace and Sloppy dials (0 to 8 step boxes).
- Middle: the option list for the selected slot. Each option is a card: a square picture on the left, a name, a Biology (violet outline) or Machine (cyan, hexagon pattern) badge, and a "Changes:" line with small up and down arrows coloured green, red or grey, then its energy cost. The fitted one has a green "FITTED" ribbon. Plus an "Empty" choice.
- Right: the "Forecast" panel (five horizontal bars with green safe blocks and a marker), a Tip or "What changes this?" button, Undo, Reset, and a huge pink RUN button.
On dish 1 the screen shows seven slot tags, only two of which matter, and about a dozen controls at once. This is the biggest known first-minute problem.

**Run.** Left: the dish (about 320 px) with the same extras. When your cell takes over (dish 2), the dish becomes a wall of overlapping pink translucent discs with rings, with a few green guards at the lower left; a small note says "Thinned view. Zoom in for every cell." Right: an empty headline box ("Running your changed cell..."), the live bars, three coloured immune-stage boxes (Curiosity, Inspection, Response, going from green to red), a "Your share of the dish" line chart with a green band and an event marker, a food area chart, then a "Suspicion total" chart that falls below the bottom edge at 720 px so the player must scroll to see it. Playback controls and the card chips are under the dish.

**Result: loss memo.** A dimmed screen with a cream typewriter memo, about 640 px wide, ruled lines and a shadow: heading "MEMORANDUM", rows From, Re, Finding (a long bold sentence), Stat that failed, Also, Record, Tip (a small dark button), then three dark buttons (Back to Adapt, Jump to the moment, Watch replay). The finding currently repeats itself ("You dissolved by tick 12. Dissolved by tick 12: nothing in your build keeps the acid out").

**Result: win card.** A cream memo with the heading "CLEARED", a large red double-bordered stamp slammed down at a slight tilt (animated, no animation when reduced motion is requested), the italic cover name, the caption "Registered cover name", on exam dishes an "Exam grade" box (Benign, Convincing or Passable, in green, blue or amber), the dish and a record row, and buttons Next dish, Watch replay, Dish list. Beside it (or under it on narrow screens) a second sheet: the notebook page, with the title, a paragraph of real biology, and a handwritten-style caption "(Copied from the locals. Keep it secret from the guards.)". Not seen in a screenshot by the author of this briefing; described from the code.

**Completion card.** After dish 10: a narrower cream card, "SAMPLING COMPLETE", the caption "The ten dishes", a list of ten rows (number, title, tick or grade), a row "Next: A new site, with one rule turned upside down.", and two buttons. No picture. Not seen in a screenshot.

**Top bar and step bar (all screens).** A black top bar with "Back to games", the pink spaced mono wordmark LOOK ALIVE, the dish title, and Dishes and World buttons. Below it a row of five equal step boxes (1 Briefing to 5 Result); the active one is filled solid pink, finished ones have a green tint and a green numeral. Below that, one "handler line" in white telling the player what to do now ("Pick a dish. Each one gives your cell a new problem to solve.").

General interface mood today: a dark, neon, dashboard feel, rounded rectangles with thin borders, small uppercase mono labels. Clear, but generic and slightly cold; the cream paper memos are the only place where the fiction shows in the interface.

### 5.4 The dish renderer

Name of the look: "dark field with depth and haze" (chosen by the designer over four alternatives).

| Aspect | What it looks like |
|---|---|
| Overall | A dark-field microscope: black background, glowing coloured specimens, a thin glowing glass rim, a faint blue-violet halo around the rim. Colour fringing toward the edges. |
| Depth of field | Every cell has a depth. Cells far from the focal plane go soft, then turn into glowing discs ("bokeh"). The player's cells sit at the focal plane, natives are spread around it, guards slightly nearer. A very slight "focus breathing" runs all the time. |
| Haze | A coloured fog field under the cells: amber haze where there is waste, an amber tint plus fizzing sparkles when the water is acid, green glow where guards are active. |
| Bloom, vignette, grain | Weak bloom, a soft vignette, light film grain, a gentle tone map that keeps colour from washing to white. |
| Specks | Floating dust, food particles, acid bubbles, and lens specks that stay fixed to the glass. |
| Natives | Violet capsules (rods): a bright rim, darker middle, a few granules, a soft inner patch for DNA, a slight bend and wobble per individual. One shape for all natives. |
| Player's cell | Pink. At full size a disc with rings and a hexagon lattice where Machine parts are fitted; at dish scale a small pink disc. Fitted parts show on it: pump dots (amber), a thick skin (Tight membrane), a cyan hexagon shell (Sealed shell), an amber interior (Acid-proof), a strong hex lattice (Sync pulse), three orbiting dots (Head count), a green or cyan skin patch (a reflex). |
| Guards | Green round wobbly cells that enter from the rim, patrol slowly and, as suspicion rises, converge and circle the player's colony; at the last stage the player's cells turn green-tinted and shrink as they are killed. |
| Seams | When the player looks too machine-like, hexagonal seams appear on individual pink cells and the colony pulses in unison. |
| Waste | Amber haze and wisps. |
| Dissolving | Cells shrink toward their parent, show a burn pattern, shed bubbles; fizz in the haze. |
| Crash | Food specks disappear and cells dim. |
| Dormant | Sleeping or spore cells are small hard dim ovals. |
| Voids | A fixed mask leaves black gaps between colonies so it does not turn into a slab. Purely visual. |
| Rack focus | A damped "hunt" (blur, overshoot once, settle in about 2 seconds) at exactly three moments: Watch begins, the player's Run begins (playback is held about a second), and "Jump to the moment" (also a gentle zoom to about 2x). Otherwise blur stays light. |
| Camera | Wheel or pinch zoom (1 to 16 times), drag to pan, double-click to reset. |
| Quality tiers | Phone 5,000 candidate cells; laptop 20,000 (default); high 50,000. Frame time is watched and the tier steps down automatically. |
| Fallback | If WebGL2 is missing or slow: an old flat 2D canvas of soft coloured blobs (pools of blobs that appear and fade by density). |
| Reduced motion | No rack focus, no breathing, no drift, no pulse, jump zoom applied instantly. |
| Shape | The dish is a circle, about 320 CSS pixels wide today; a thin ring and violet glow around it. |
| Thinned view | Zoomed out, only a fixed subset of cells is drawn and the pink share is boosted so the player stays findable when the player's share is small; a small note says "Thinned view. Zoom in for every cell." |

Rendering technique, briefly: one instanced draw of signed-distance-field shapes (rod, circle, disc) with rim, granules, tails, membrane rings, lattice, seams, shell; a soft "cloud" pass for tiny cells; a haze pass; bloom at half and quarter resolution; a composite pass. Cell identities are stable, so scrubbing, replaying and zooming always show the same individuals (checked by a hash).

### 5.5 Card art style

Nineteen square (768 by 768) JPEG pictures, generated by an image model and saved to the repo. They show a single glowing pink subject on black, often with a few small violet bacteria around, amber trails or droplets for waste and acid. Biology cards are organic and soft-edged. Machine cards are hexagon-plated, circuit-patterned and tidy, with small cyan light dots. The Factory unit is a round hexagon-armoured sphere with a circuit core and an amber tail.

What each looks like and whether it is right (from looking at a contact sheet of all nineteen):

| Card | Picture | Anatomy OK? |
|---|---|---|
| Acid-proof insides | A big smiling pink cell with a nucleus, mitochondria and Golgi inside an amber halo | **Wrong**: a face and eukaryotic organelles |
| Fermentation | Small pink cell with a nucleus-like blob and Golgi, amber tail | **Wrong** |
| Respiration | Round pink cell with a sparkle core, mitochondria-like blobs, bubbles | **Wrong** (mitochondria) |
| SOS response | Round cell with a broken DNA double helix, mitochondria, Golgi | **Wrong** |
| Tight membrane | Concentric rings around a lumpy cell with organelle-like blobs and amber droplets | Borderline |
| Stringent response | A soft round cell with a coiled orange core | Borderline |
| Random naps | A ring of ten lumpy cells with some dark ones that look like sad sleeping faces | Borderline (faces) |
| Head count | A ring of seven lumpy cells with amber sparkle, possibly faint faces | Borderline (this author's view) |
| Proton pump | Pink disc with amber stalks and pumps on the skin | OK |
| Cell wall | A lattice-net sphere with violet bacteria around it | OK |
| Flagellum | A pink rod with a long spiral tail, violet natives behind | OK |
| Sporulate | A rod with a glowing spore inside, free spores nearby | OK |
| Sync pulse | Five identical pink units dividing in a perfect line | OK (Machine) |
| Perfect copier | A circuit-cell stamping out a perfect grid of copies | OK (Machine) |
| Fuel cell | A hexagon-plated sphere with a ribbed core | OK (Machine) |
| Sealed shell | A sealed hexagon sphere with an amber drip | OK (Machine) |
| Radio mesh | Six hexagon units linked in a ring, wifi arcs above each | OK (Machine) |
| Self-repair | A cracked hexagon shell with small robot arms mending it | OK (Machine) |
| Factory unit | The starting cell | OK (Machine) |

The designer's plan is to redraw the wrong ones (and probably the borderline ones) as plain bacterial cells.

### 5.6 The world picture on the world screen

One 768 by 432 image (dark field, amber streaks, violet rods with amber tails, a pink cell dissolving into amber dots). It is cropped into a wide banner. It is not the "postcard" mock-up (see 6.1).

### 5.7 Intro art style

Completely different from the dish: lush, glossy, painterly cartoon-3D with strong rim light, depth of field and orange-and-violet colour. Aliens appear as small pink round creatures with big glowing eyes inside glass-dome pods with antennae. The microbes are cute and slightly furry (bristles, small bubbles). A circular lens vignette frames most slides, and slides 3 and 4 have a faint orange reticle overlay. Slide 5 is also used as the card on the games hub.

Important style note: these slides give the aliens a face, a colour (pink) and a ship design. The aliens are drawn as playful and a bit fragile, not scary.

### 5.8 Motion and sound

Motion today: typed report lines, a stamp slam, a pulsing "new slot" tag, rack focus, drifting cells, patrolling guards. No sound of any kind.

---

## 6. The look that was agreed but not yet built

### 6.1 The thirty agreed mock-up images

These are image-model mock-ups the designer approved as targets, all 1280 by 720. The dish look is already ported into the game (from their closest frames); the rest is mostly not built.

| # | Shows |
|---|---|
| 01 | Style frame: a round microscope field, black, with scattered violet rods (bright rims, soft inner glow, small clusters), tiny amber specks, and a tight oval cluster of about fifty pink balls with three amber tails on the right. The target look. |
| 02 | Title screen: LOOK ALIVE spelled out in glowing pink balls (the second "I" is a long hexagon-lattice capsule, a Machine cell hiding in the word), over the violet rods, with a cream label "Bacillus normalis - not a robot." |
| 03 | Gameplay screen: the dish fills two-thirds of the screen at left; at right a narrow rounded panel with a green and red band bar, four rows of icon plus a gauge dial, and a line graph with a green band. |
| 04 | Zoomed-out colonies: a full glowing circle of violet cloud with thin lightning-like veins and amber streaks, one pink spark in the middle. Looks like a nebula. |
| 05 | Close-up, native versus robot: two big capsule cells side by side. The native is violet and bumpy with blobs; the robot is pink with a perfect hexagon skin and a perfect grid of dots. Each has an amber tail. |
| 06 | Seam reveal: the pink colony is wrapped in a bright hexagon ring and a lattice, with amber rays spreading out; violet rods nearby swing away. |
| 07 | Guards curious: three big green blobby cells with one large eye each, amber-green tails, approach a small pink cluster. |
| 08 | Guards respond: a green whirlpool of rod-shaped guards circles a tight red-pink hexagon cluster, with amber threads. |
| 09 | Scout lens: a circular magnifier with tick marks over the violet rods, three small icon callouts (signal bars, an acid drop, a wave) joined by leader lines. |
| 10 | Build screen: a huge pink spotted cell at left; at right a rounded panel with see-saw sliders with icons at each end, a dial with a green-to-orange arc, and a pair of blue and orange pills joined by an arrow. |
| 11 | Autopsy (loss) slide: a ring of green spiky guards around the pink colony, two white chalk arrows with handwritten scribbles, a paper tag "COVER BLOWN." in red stamp type, a timeline at the bottom with a red dot. |
| 12 | Win stamp: a mostly violet dish with a few pink rod-shaped imposters mixed in, and a cream card at lower right stamped in green "SUFFICIENTLY BACTERIAL". |
| 13 | Handler letter: a cream typewritten letter on the dish, header "DEPARTMENT OF PLAUSIBLE DENIABILITY" with an eye-in-hexagon logo, a coffee ring, and a red stamp "BE COOL." Green guards and the pink colony around it. |
| 14 | Planet "Acidica": violet rods each trailing a long amber wisp; tiny green ovals with two nuclei; a pink colony at lower right. |
| 15 | Planet "Quietus": every violet rod sits inside concentric faint ripple rings; the pink colony sits alone in a clear black patch. |
| 16 | Planet "Brightside": diagonal bands of white glare crossing the dish, violet rods clustered in the dark gaps, a few glowing pink spheres. |
| 17 | Planet "Mycelia": a glowing violet branching network that looks like neurons or a root system with amber pulses, and pink rods hanging on thin threads. (Beware: it looks like neurons and architecture; see 11.) |
| 18 | Planet "Tidewash": violet rods with long streaks all swept by a flowing current; the pink colony in a clear pocket in the flow. |
| 19 | Robot states: three big pink colonies, from left: natural lumpy ("ok" tick), half natural and half hexagon ("so-so" wave), fully hexagonal with circuit cells ("!" mark). |
| 20 | Native species: six violet specimens: a bumpy rod, a chain of round cocci, a curved comma with an amber tail, a star, a frilly flower, a spiral. (Some have nuclei and are too fancy for the rules.) |
| 21 | Stain palette: four glass drops (violet, pink, amber, green) each with its tiny specimen below (rods, balls, amber ribbon, spiky blob) and a colour strip. |
| 22 | Logo: LOOK ALIVE in a glowing white rounded sans-serif; the two O's are a violet native with two rods inside and a pink hexagon-skinned robot cell. |
| 23 | Attribute icons: eight round line icons: a pinching violet cell (growth), a cell with a green shell (defence), a bolt (energy), an amber squiggle (movement), a smelly amber drop, a green slime blob (waste), green sound waves, a pink rod wearing a mask (disguise). |
| 24 | Suspicion gauges: four half-dial gauges with icons above (growth curve, drop, broken cell, metronome) and patterned danger ends: diagonal hatch, dots, cross-hatch, zigzag; green safe middle, orange needle. This is the colour-blind-safe pattern idea. |
| 25 | Dish wall: a grid of round dish thumbnails linked by thin lines with small nodes, like a level map: cleared ones show their scene, locked ones are empty dark circles. One is larger and highlighted. |
| 26 | Postcard: a tilted cream vintage postcard "Greetings from ACIDICA" in red 1950s lettering, with a stamp of a pink moustached cell and a scene of violet bacterial mounds and an amber river with the pink colony. |
| 27 | Split lens: a dish divided down the middle; left half violet and pink round cells that all look alike (natural), right half the pink ones are hexagon-faceted (machine). A "see the tell" key art. |
| 28 | Immune eyes view: a green night-vision dish with two horizontal scan lines; the pink colony is a grey cluster with several cells marked red with target brackets. "What the guards see." |
| 29 | Later-tier colony: instead of rods, giant segmented violet filaments and branching ferns with green dots inside cells, and a few thin pink filaments. A larger-scale world. |
| 30 | Chemical fields: the dish with swirling blue, green and amber currents of chemistry laid over the cells and the pink colony in the middle. A "smell map". |

Plus one earlier screenshot of an old flat 2D version of the game, kept for before-and-after.

### 6.2 What the interface restyle is meant to become ("phase U1", agreed, not built)

The designer said yes to bringing the interface chrome up to these mock-ups, as its own phase. Planned, in two tiers (proposed split):

| Piece | What it should look like |
|---|---|
| Dish wall (dish list) | A level-map grid of round thumbnail dishes, each a frozen lit snapshot rendered by the real dish shader, linked by thin lines; locked ones empty and dark; stamp overlays for cleared and graded ones (mock-up 25). |
| Briefing | The handler letter on cream paper with a typed header and a rubber stamp (mock-up 13), plus a specimen label card (02). The memo names the stat bars in play. |
| Watch and Run | Instrument-panel chrome: thin violet outlines, rounded panel, mono labels, line icons (23), gauge dials with patterned danger ends (24), the dish much larger (mock-up 03 has it filling two-thirds of the screen). |
| Adapt | The cell portrait stays; slot icons in the line style of mock-up 23; the five stat bars in the patterned gauge style; keep the cell diagram and the rule card. |
| Win | A paper card with a green or red stamp, plus the five final bars (mock-up 12). |
| Loss | An autopsy slide with a chalk arrow pointing at the failing bar and a red pin on the timeline, plus a paper tag (mock-up 11). |
| Colour-blind safety | Pattern plus colour on every bar and legend item. |

### 6.3 Known visual weaknesses (honest list)

1. **The dish is small.** About 320 to 330 pixels of a 1280-wide screen. The mock-up has it fill the screen. On Run the panel next to it holds an almost empty box.
2. **All natives are drawn as the same violet rod**, though the world names three species (Lactobacillus, Streptococcus, Helicobacter pylori). The simulation has a single native population, so extra species must be visual only.
3. **The player's cells at default zoom are "ringed pink discs"** (a ring and a rim) rather than the neat pink balls of the mock-ups; on a take-over (dish 2 around 90% share) the dish is a wall of overlapping pink discs and the natives disappear.
4. **Milky dense areas.** Where cells overlap at zoom (cloud pass plus bloom), the picture goes milky and flat rather than crisp.
5. **Some card art has wrong anatomy** (smiley face, nucleus, mitochondria, Golgi), see 5.5.
6. **The interface has not been restyled** to the mock-ups. It is clean but generic. The only "fiction" in the chrome is the cream memo.
7. **The dish list, world screen and briefing have almost no pictures.** Most of the game's art lives in the intro, a card and a banner.
8. **The story vanishes after the intro slides.** There are no aliens on screen after slide 5; no completion art.
9. **The Run screen overflows 720 px**: the suspicion chart is cut off; on phone widths the RUN button is far down the page.
10. **Watch on dish 1** ends very fast (the colony is gone in about 30 ticks), so the player may not see their own pink cell before it dissolves. A slow start for the first ticks is planned.
11. **No sound.**
12. **The dish "tells" (seams, guards, crash) are only seen in stills by the author**; no human has watched them.
13. **No human playtest** of the full flow.

---

## 7. What is planned next

This is from the wave 2 plan. Nothing here is built. Status is for each item. The overall shape (a hybrid: fix the first ten minutes and tell the story first, then a gated slice of a second habitat) is **Proposed**; the designer has not yet answered the six questions listed in section 7.9.

### 7.1 The first-minute fixes (Proposed)

- On the Adapt screen, show only slots that are open or fitted on that dish for dishes 1 to 4 (the rest appear from dish 5 on), with the factory parts shown as one read-only line.
- A single coach arrow on dishes 1 and 2, dismissed on the first fit.
- Run and Watch layouts: the dish at least 520 px wide, a compact stat panel, the share chart fully visible, the suspicion chart in a tab.
- Watch on dish 1 starts at half speed so the pink cells are seen fading.
- Phone: a sticky bottom bar (RUN, Undo, energy meter); slot tags wrap rather than truncate.
- Text fixes: memo "from" line chosen by cause (an acid sampler for acid, an Office of the Guards for guards), no repeated sentence, the legend says "guards".

### 7.2 The interface restyle (Agreed as a goal; the split into two tiers is Proposed)

- **Tier 1:** dish wall with live frozen thumbnails, briefing as the letter on paper, instrument Run chrome with patterned gauges and line icons, paper win card with stamp, loss slide with chalk arrow and red pin.
- **Tier 2:** the finish: paper texture and stamp ink (optional, up to two small generated images), animation of the stamp, icon set.
- Rule: nothing in the simulation changes; every bar and legend item carries a pattern as well as colour.

### 7.3 Visible species (Proposed)

Each native gets a species chosen by a fixed hash so the same individuals always show the same species. Planned mix: Lactobacillus as long rods (some in chains), Streptococcus as pairs and short chains of round cocci, Helicobacter pylori as curved and spiral rods with a tuft of tails. Drawn by the shader, not images. The player's pink cell becomes the neat ringed disc of mock-up 04 at zoom 1. A crisper edge on granules and tails; less milky look at zoom.

### 7.4 Redrawn card art (Proposed)

Redraw acid-proof insides, fermentation, respiration and SOS response, and probably Tight membrane, Stringent response, Random naps, Head count and Proton pump, as plain bacterial cells: a ring of envelope, a loose coil of DNA, ribosome dots, nothing else. About nine images, about three US cents each.

### 7.5 The story spine (Proposed)

- A **Scale of Mind strip** on the world screen and the dish list, titled "What we think we are looking at", with one line that changes as dishes clear (starting from "a city").
- One **field note** per dish in the aliens' voice (two lines, evidence from that dish: the sour trail, the identical clocks, the food that stops).
- One **reading** per win (one line that revises the assumption a little).
- A **colony comment** line on each notebook page that ties the real biology to the story.
- Dish 10 and the completion card seed the next rung: the crowd answered every acid the same way ("something sets the acid"), and the mountain's surface twitched during the cycle.
- Optional art (about four images): a revised slide 5 that hints at scale, a completion-card key art ("the warm mountain's surface moves": a soft huge ripple, never an animal shape, never architecture), and two small illustrations for the strip (a cell, a crowd).
- Guard rails: an automated text check will fail on the words cow, mammal, stomach, intestine, on "city" outside the aliens' hedged lines, and on any "bacteria build/city/street/tower/lamp".

### 7.6 Habitat 2: "The banded water" (Proposed as the second habitat; the choice itself is Awaiting decision)

A hot spring outflow channel with a microbial mat (modelled on real Yellowstone springs such as Octopus Spring and Mushroom Spring). Four dishes (11 to 14), then a completion card ("Next: a place where the water is the problem. A salt flat.").

**The one rule turned upside down.** In the warm crowd, comfort meant safety and hazards were everywhere. In the banded water **the comfortable end is the dangerous end.**

| Feature | Detail |
|---|---|
| Geometry | A flowing channel with a temperature gradient from about 85 C near the source to about 40 C at the cool edge. A small round dish must show it somehow (an open design question, section 8.2). |
| Bands of colour | Real mats form coloured bands by temperature. Pink streamers (Thermocrinis) at about 82 to 88 C; a green layer of photosynthetic cells (Thermostichus, formerly called Synechococcus) from about 72 down to 50 C; an orange layer underneath (Roseiflexus, Chloroflexus); branching filaments (Fischerella) below about 58 C; grazers below about 40 C. Photosynthesis stops at about 72 to 73 C. The living green layer is only about half a millimetre to a millimetre thick. |
| The twist | Grazers (brine-fly larvae, Paracoenia turbida) live only where the water is under about 40 C, so the easy, cool end is the eaten end, and the hot end has no grazers but cooks anything unprepared. |
| The new bars | Acid defence is replaced by Heat tolerance (with a safe zone) and a new Grazing bar (safe only above about 40 C or with the right trait). |
| The Motor slot opens | The Motor slot, locked in the first world, lets the cell choose where to live along the channel, not only what to wear. |
| The shadow | The grazers are shown as **a slow, huge, out-of-focus shadow** that erodes the cool edge. To the aliens it is weather. |
| Day and night | Day: oxygen oversupplied and the water basic. Night: no oxygen. A repeating swing that stresses the colony (real: at 1 mm depth about 900 micromolar oxygen and pH 9.4 after noon; none and pH 7.2 before sunrise at a 55 C site). |

**Dishes (Proposed):**

| Dish | Title | One new problem | Fix routes |
|---|---|---|---|
| 11 | Hotter Than Home | The water is 68 C. An acid-built cell cooks in about 15 ticks. | Heat-shock chaperones; tetraether membrane; polyamine coat; heat-stable photosystem |
| 12 | The Comfortable End | A cell that settles at 45 C is eaten. | A Motor (twitching pili, or a machine "heat compass" rule) to climb to the hot end; Filament form to resist grazing at the cool end; or heat traits that make the hot end livable |
| 13 | Night Shift | Day gives supersaturated oxygen; night is anoxic. | Night fermentation reflex; Random naps; Sporulate; Stringent |
| 14 | Greetings from the Banded Water | Exam: hot end, grazers, night, a strict inspector, a tight energy budget | Two or three different builds win; no tips |

**New cards, all needing art:** Heat-shock chaperones, Tetraether membrane, Polyamine coat, Heat-stable photosystem (Insides), Twitching pili (Motor), Heat compass (a Machine rule; marked Machine only because thermotaxis is not documented in these organisms), Filament form (grazing resistance), Night fermentation reflex (may reuse the fermentation card art if it is redrawn well).

**Real organisms the designer wants named (each with a note on certainty):**

| Zone (hot to cool) | Organism | Note |
|---|---|---|
| About 82 to 88 C | Thermocrinis | Pink streamers; rods about 1 to 3 by 0.4 to 0.5 micrometres (size from a secondary source). Lives off chemistry, not light. |
| About 70 C | Thermus aquaticus | The microbe behind the "Taq" enzyme; rods 0.5 to 0.8 micrometres wide; probably a minor member of the mat. |
| 72 down to 50 C | Thermostichus | Photosynthetic; short cylinder cells; older papers say Synechococcus lividus. Cell size not confirmed. |
| Under the green layer | Roseiflexus (orange undermat); Chloroflexus in sulphur-rich springs | Filaments about 0.6 to 0.7 micrometres wide (Chloroflexus); Roseiflexus width not confirmed. |
| Under about 58 C | Fischerella (also called Mastigocladus) | Branching filaments with heterocysts. |
| Under about 40 C | Grazers: brine-fly larvae, amoebae, ciliates | Larvae confirmed to need under 40 C. Complex cells classically cannot live above about 60 C, though a 2026 report describes an amoeba dividing at 63 C. |

**Planned art list for habitat 2 (Proposed):**
- A world postcard: an outflow channel with colour bands and steam, framed as seen through a microscope lens, no buildings.
- Three intro slides: the scouts' pod above the steaming channel; a cross-section of a mat (green over orange); the slow blurred shadow at the cool edge.
- Eight card images (above).
- Native shapes drawn by the shader, not images (a thin rod, a gliding filament, a branched filament, a short cylinder).
- One grazer shadow drawn by the shader (huge, far out of focus, depth of field).
- A temperature strip along the dish edge; ten or more dish-wall thumbnails captured from the real renderer.
- No bacterial architecture anywhere: mats drawn as natural layers, never streets or districts. The word "districts" may appear only in the aliens' interpretation, never as a label.
- Proposed text for the intro: (1) "Our samples came back with a stamp: cover held. The city let us in." (2) "We followed the warm mountain's road to a new place. A hot river. The crowds here stand in bands, hot to cold, like a map." (3) "Something at the cool end is wearing the crowds away. It is very slow. We think it is weather." Proposed field note on dish 12: "Our cell lived. It also settled at the comfortable end, and the comfortable end is where the shadow is. We have stopped trusting comfort."

### 7.7 Later habitats, in the intended order (all Awaiting decision; only research notes and the ladder rows exist)

| Order | Habitat | What the aliens assume at that rung | Real organisms and visual material noted so far |
|---|---|---|---|
| 3rd | Salt flat | Wandering things about ten times larger than a crowd may think. | Hypersaline pools. Haloquadratum walsbyi (famously flat, square, paper-thin cells, sheets up to about 40 micrometres), Halobacterium, red Salinibacter, green Dunaliella algae, brine shrimp (Artemia) as the largest. Guards: haloviruses at up to about 2 billion per millilitre. Pressure: salt, wet-dry cycles. |
| 4th | Forest soil | A network like their own colony, only enormous: the first mind that thinks the way they do. | Streptomyces (branching threads), Bacillus (spores), Pseudomonas, root-nodule bacteria, fungal threads. One fungus individual spans about 900 to 965 hectares. Bacteria ride along fungal threads. Guards: nematodes, springtails. Largest thing in a dish: a springtail or mite. |
| 5th | Deep ocean | A mountain can be dead and still full of cities, so the warm mountain was alive (the whale fall finale; needs its own fact-check). | Pressure-loving bacteria (Photobacterium profundum, Moritella yayanosii), tiny ocean bacteria (Pelagibacter), very slow growth, food arriving in pulses, viruses that punish the most successful ("Kill the Winner"). Largest in a dish: foraminifera or worms. |

Mock-ups 14 to 18 and 29 already imagine other "planets" (Quietus, Brightside, Mycelia, Tidewash, a filament world), but they predate the ladder and are not the planned order.

### 7.8 Deferred (explicitly not in wave 2)

Sound of any kind; lens modes (Relief, Fluorescence) as a game feature; a roguelite or sandbox mode; habitats beyond the four-dish slice; redesigning the ten dishes; a real-device phone pass.

### 7.9 Questions the designer has not yet answered (Awaiting decision)

1. Merge the existing work first and branch from it? (Recommended: yes.)
2. The overall shape and budget: the hybrid with a human playtest gate, or stop after the story work.
3. Is the ending "the warm mountain was alive" via a whale fall? (Recommended: yes; it costs nothing now.)
4. Hide locked slots on dishes 1 to 4? (Recommended: yes.)
5. Is the hot spring the right second habitat? (Recommended: yes.)
6. Sound: defer or do a small audio pass later? (Recommended: defer.)

---

## 8. Every visual asset, and the design problems to solve

### 8.1 Asset table

| Asset | Size or aspect | Style | Status |
|---|---|---|---|
| Intro slides 1 to 5 | 1280 x 720 (16:9), JPEG | Glossy painterly cartoon-3D, orange and violet, lens vignette | Built |
| Games-hub card for Look Alive | 720 x 320 (2.25:1), JPEG | A crop of intro slide 5 (aliens with vials) | Built |
| World picture (banner) | 768 x 432 (16:9), JPEG, used as a wide strip | Dark-field, amber streaks, violet rods, pink cell dissolving | Built |
| Card pictures (19) | 768 x 768 square, JPEG | Single glowing pink subject on black; Biology organic, Machine hex-plated | Built; 4 wrong, about 5 borderline |
| Redrawn card pictures | 768 x 768 | Plain bacterial anatomy only | Proposed |
| The dish (live) | Round, about 320 px today, 330 to 600 px planned | Dark-field shader | Built |
| Adapt cell portrait (live) | Round, large | Same shader, one big cell | Built |
| Cell diagram overlay (vector) | SVG over the portrait | Thin lines, slot tags and leader lines | Built |
| Dish-list thumbnails (dish wall) | Round thumbnails | Frozen frames rendered by the real shader | Agreed, not built |
| Handler letter, paper win card, loss slide with chalk arrows | Interface | Cream paper, typewriter, rubber stamps, chalk, red pin and tag | Agreed, not built (a flat cream memo exists) |
| Instrument gauges with patterned danger ends, line icons | Interface | Thin violet lines, mono labels | Agreed, not built |
| Paper texture, stamp ink | Small textures | Optional | Proposed |
| Intro slide 5 revised (scale hint) | 1280 x 720 | Matches intro style | Proposed |
| Completion-card key art "the warm mountain's surface moves" | About 16:9 | A soft huge ripple; never an animal shape, never architecture | Proposed |
| Two Scale-of-Mind strip pictures (a cell, a crowd) | Small | Optional | Proposed |
| World postcard for "The banded water" | About 16:9 | Steaming outflow channel with colour bands, framed as seen through a lens, no buildings | Proposed |
| Three habitat-2 intro slides | 1280 x 720 | Pod above the channel; mat cross-section; slow blurred shadow at the cool edge | Proposed |
| Eight habitat-2 card pictures | 768 x 768 | Existing pink-on-black bacterial card style | Proposed |
| Native shapes for habitat 2 (rod, gliding filament, branched filament, short cylinder) | Shader | Visual only | Proposed |
| Grazer shadow | Shader | Huge, far out of focus | Proposed |
| Temperature strip along the dish edge | Interface | A gradient scale | Proposed |
| Logo and title screen | 1280 x 720 | Mock-ups 02 and 22 | Agreed (mock-up only; the game's title is plain text) |
| Planet postcard for the first world | About 16:9 | Mock-up 26 | Agreed, not built |
| Habitats 3 to 5 art (salt flat, soil, ocean, whale fall) | | | Not planned in detail |
| Sound | | | None; deferred |

Cost note: each generated image costs about three US cents; plan budgets about 2.5 attempts per image. There is no external art at runtime: all images ship as files in the project.

### 8.2 Problems to solve (open design questions)

| # | Question | Why it is hard |
|---|---|---|
| 1 | How do we make a huge, slow thing read as weather, not as an animal, at microscope scale? | It must erode the cool edge of the mat slowly, be out of focus, and still be noticed. The aliens must be able to call it weather. |
| 2 | How do we show a gradient (hot to cool) on a small round dish? | The dish is a circle of 330 to 600 px. A channel, a gradient and bands must fit without a second panel, and still read for colour-blind players. |
| 3 | How do we draw natives of three species so they read at 3 px and at 30 px? | At default zoom a cell is only 3 to 6 px; each species needs a distinctive silhouette (rod, chain of balls, curved spiral) that survives blur. |
| 4 | How do we show a colony thinking together without architecture or neurons? | The aliens think as one. No networks that look like brains or cities. Maybe rhythm, shared pulse, a hum, shared colour. |
| 5 | How do we show scale growing by about ten times per habitat? | The player should feel each rung's mind get bigger while the dish stays the same size and the screen stays the same. |
| 6 | How do we draw the aliens at all, and the guards, without breaking the rules? | The aliens are drawn in the intro as round pink creatures with eyes in pods; the guards in some mock-ups have eyes. Rule: no faces on microbes. Are the aliens and guards exempt? Where do aliens appear in the interface? |
| 7 | How should "the natives' crowd" read as "life" and not as "buildings"? | Colonies and mats are lumps and layers, never streets. |
| 8 | How do the pink player cells look native up close but stand out in a crowd at distance? | The player must be able to find their own cells without the picture implying that they are different in kind. |
| 9 | How do we show "Naturalness" visually (messy versus too perfect)? | Currently hexagon seams and a unison pulse; the interface bars use words. |
| 10 | How does the interface look like an alien lab's tools and not a generic dashboard? | Paper, chalk and instruments are agreed; what ties the pieces into one fiction? |
| 11 | How do we show "the comfortable end is the dangerous end" without a wall of text? | The twist of habitat 2 must be seen, not read. |
| 12 | What is the transition between habitats? | The player should feel travel and growing scale; the intro slides are one format. |
| 13 | How do we show the stats' meaning with shape and pattern, not only colour? | Mock-up 24 has patterns; the game does not yet. |
| 14 | What does a win and a loss look like, beyond a stamp and a memo? | A loss is currently a typed memo; a win is a stamp. Both are dry. |

---

## 9. Technical constraints a graphics idea must respect

| Constraint | Detail |
|---|---|
| Delivery | The game must open by double-clicking an HTML file. No server, no network, no build step. Plain scripts only, no modules. Lowercase file names. |
| External assets | None at runtime. Images are JPEG files in the repository (a font service and system fonts are the only network use, with a fallback). Keep new images modest in size and count. |
| Image generation | Images are made with an image model, about three US cents each. Budget about 2.5 attempts per image. The model has been good at glossy scenes and neon microscope frames and poor at correct microbe anatomy; the prompts have to say "no nucleus, no mitochondria, no face". |
| Dish rendering | WebGL2, instanced shaders. Everything in the dish is drawn procedurally from simulation numbers: a new thing in the dish should be describable as a shape (capsule, circle, lattice, noise field, haze) rather than a painting. |
| Performance floors | About 5,000 candidate cells on a phone, 20,000 on a laptop (default), 50,000 on request. The game steps down automatically if frames get slow and falls back to flat dots. Measured only on one fast laptop GPU; nothing on phones. |
| Cell size | At default zoom a cell is 3 to 6 px across. Ideas that rely on fine detail on single cells will not be seen unless the player zooms (1 to 16 times). |
| Depth of field | Blur must stay light during play (strength about 1) and heavy only at the three rack-focus moments. Blur hurts readability in crowds. |
| Dish size | A circle, 330 px today, 520 to 600 px planned on desktop, smaller on phones. |
| Screen sizes | Must work from desktop (1280 by 720 and up) down to phone width (320 px), including landscape phones. No horizontal scroll. |
| Colour | Stain meanings are fixed: violet natives, pink player, amber waste and acid, green guards. Do not reuse these colours for other meanings. Cyan marks Machine. |
| Colour-blind safety | Colour must never be the only cue: pair it with pattern, shape or label (mock-up 24 uses hatch, dots, cross-hatch, zigzag). |
| Reduced motion | The game honours the operating-system "reduce motion" setting: no rack focus, no drift, no pulsing, no stamp animation. Ideas must have a still version. |
| Contrast | Text on new surfaces should meet 4.5:1 contrast. |
| Sound | None exists. If an idea needs sound, say so; it is deferred. |
| Language | English only. |
| Simulation | Visual ideas must not change the simulation numbers. The renderer may add visual-only variety (species shapes, voids, shadows), but the counts follow the simulation. |
| Text rules | Section 3.2 applies to any text inside a picture too. |

---

## 10. What I want from you

You are the brainstorming partner. The designer will pick ideas, so give breadth first, then depth on the strongest.

**For every idea, give me:**
1. **A one-paragraph concept**: what it is and what the player sees, in words a graphic artist could sketch from.
2. **A short image prompt** (two or three sentences, safe to paste into an image generator), or, if the idea is made by the shader, a short "shape recipe" (which shapes, colours, motion).
3. **Why it fits the rules**: which hard rules from section 3.2 and which constraints from section 9 it respects, and any rule it bends.
4. **Effort**: small (a few hours or a handful of images), medium (a day, a shader change) or large (new system), and the biggest risk.

**Ten prompts:**

1. **Habitat 2 world postcard.** Give **five different directions** for the picture that introduces "The banded water" (a hot spring outflow with colour bands, steam, no buildings, framed through a microscope lens, in the same family as the first world's postcard mock-up). Make the five directions truly different (for example: a seen-from-above map, a cross-section, a single drop, a vintage travel poster, a data-sheet).
2. **The aliens themselves.** Ways to depict the aliens (their bodies, their pods, their fast thinking-together) without breaking the rules, in the interface and in the intro. Include at least one that shows the colony thinking as one without brains, neurons or architecture.
3. **The dish wall thumbnails.** How each of the ten dish thumbnails should look when frozen (what is in each, what marks cleared, graded or locked), and how the same system should extend to a second world's thumbnails.
4. **The win stamp and the loss slide.** Fresh ideas for what a win looks like (beyond a red stamp and a card) and what a loss looks like (beyond a typed memo), including a chalk arrow at the failing bar, in the alien lab's fiction.
5. **A "scale of mind" motif.** A small repeating visual for the story strip "What we think we are looking at" that changes as the aliens' assumption grows ten times at each rung (city, a league of cities, wandering things, a network, a living mountain). It must work as a tiny interface element and as a full-screen moment.
6. **Microscope lens modes.** If lenses became a game feature (not planned, only a "maybe later"): ideas for lens looks that also teach (for example, "what the guards see", "the smell map", "the seams"), with how each would be switched on and what it would help the player decide.
7. **Transitions between habitats.** How to show travel from one habitat to the next, and the feeling that things are getting ten times bigger, using only what the game can draw (the intro slide format, the dish, a stamp, a postcard).
8. **The slow shadow.** Three ways to draw the grazer shadow in habitat 2 so it reads as weather (huge, slow, out of focus, eroding the cool edge), and three ways to show the gradient on a round dish.
9. **Natives you can tell apart.** Silhouette and colour-variation ideas for three native species (a long rod with chains, a pair or chain of round cocci, a curved spiral rod with a tail tuft) so they read at 3 px and at 30 px, stay violet, and stay out of the rules' forbidden list. Then do the same for the hot-spring set (a thin rod, a gliding filament, a branched filament, a short cylinder).
10. **Interface fiction.** A coherent look for the interface chrome as "the alien lab's own tools": what are the paper, the chalk, the stamps, the dials made of, and what is the alien lab's logo and house style? Include how the step bar, the stat bars (with patterns), and the slot tags would look.

**Please also tell me:**
- Which two or three ideas you would build first, and why.
- Anything in this briefing that is contradictory, unclear or that you would push back on (the designer can change rules, but should do so on purpose).
- Any idea that would need a new rule and what that rule would be.

---

## 11. Source contradictions and open facts (for transparency)

1. **The first world's name.** The shipped game calls it "The warm crowd" (world screen, report header). Earlier planning documents, the mock-up postcard, the image file name and the final-dish button wording say "Acidica" (for example "Greetings from Acidica"). Treat "The warm crowd" as current; "Acidica" is an earlier planet name still in a few files.
2. **Eyes and faces on the guards.** The rule says no faces on cells, and the plan wants the card art cleaned up for faces. But mock-ups 07, 13 and 28, and intro slide 5, give the guards large eyes (07), narrow glowing eyes (intro 5), or nothing (the shipped dish draws guards as plain green blobs). The rule is about the microbes; whether guards and aliens are exempt is not stated in any source.
3. **"Guards" versus "immune".** The rule says green cells are guards. The shipped legend says "guards (immune cells)" on Run, and the loss memo is from the "Office of the Immune Coroner" even on dish 1 (acid), where no guards are involved. The plan flags both and defaults to saying "guards" only.
4. **Native shape.** The wave plan says natives are "mostly violet rods" (true in the dish) but notes the intro art already shows cocci and chains, so the two screens disagree.
5. **Mock-up 17 (Mycelia)** is a glowing branching network that looks like a brain or city. It predates the rule and conflicts with "no neurons or architecture" for any depiction of a colony thinking. Mock-up 20's native species include nuclei, which also break the rule.
6. **Task files.** The orchestration note lists planning files (first-minute fixes, restyle and art, balance, story spine, a habitat-2 spec and its tasks) that did not exist when this briefing was written. All plan details here come from the main wave plan and the habitat research note. Anything in those later files may differ.
7. **Dish size.** The stylesheet sets the dish at 320 px; the wave plan says about 330 px; the briefing for this task says 330 to 600 px. The planned minimum on desktop is 520 px.
8. **The notebook title for dish 10** is "A summary page from the lab"; the plan and notes refer to the whole thing as the completion or "Acidica complete" card.
9. **Not verified by me:** the win card and the completion card as rendered (I read them from code, not a screenshot); anything on a real phone; keyboard-only play; performance on any GPU other than the one test machine; the mock-ups' claims about how they would look at runtime.
10. **Habitat biology.** Several hot-spring facts are tagged as not confirmed in the research note (cell sizes for Thermostichus and Roseiflexus, mat thickness at Octopus Spring, whether Thermus is abundant, any thermotaxis in these mat organisms). They are noted as such in section 7.6. The whale-fall finale also still needs its own fact-check.

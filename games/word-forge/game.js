/* ============================================================
   WORD FORGE
   A self-contained 5-letter word guessing game (Wordle-style).
   No frameworks, no build step, no fetch — word lists embedded.
   Works from file:// and http(s)://.
   ============================================================ */
(function () {
  "use strict";

  /* ----------------------------------------------------------
     WORD LISTS (embedded inline — never fetched)

     ANSWERS  : curated common, fair 5-letter answer words.
     EXTRA    : additional common 5-letter words used only to widen
                the acceptance set for guesses (not chosen as answers).
     ALLOWED  : Set of every valid guess = ANSWERS + EXTRA, for O(1) lookup.
     ---------------------------------------------------------- */

  // ~250 everyday answer words (lowercase, no proper nouns / jargon).
  var ANSWERS = [
    "about", "above", "abuse", "actor", "acute", "admit", "adopt", "adult", "after", "again",
    "agent", "agree", "ahead", "alarm", "album", "alert", "alike", "alive", "allow", "alone",
    "along", "alter", "among", "anger", "angle", "angry", "apart", "apple", "apply", "arena",
    "argue", "arise", "armor", "array", "aside", "asset", "audio", "avoid", "award", "aware",
    "badge", "baker", "basic", "basin", "beach", "beard", "beast", "begin", "being", "below",
    "bench", "berry", "birth", "black", "blade", "blame", "blank", "blast", "blaze", "bleed",
    "blend", "bless", "blind", "block", "blood", "bloom", "board", "boast", "bonus", "boost",
    "booth", "bound", "brain", "brake", "brave", "bread", "break", "breed", "brisk", "broth",
    "brick", "bride", "brief", "bring", "broad", "broke", "brook", "brown", "brush", "build",
    "built", "bunch", "burst", "buyer", "cabin", "cable", "camel", "candy", "cargo", "carry",
    "carve", "catch", "cause", "chain", "chair", "chalk", "charm", "chart", "chase", "cheap",
    "check", "cheek", "cheer", "chess", "chest", "chief", "child", "chill", "china", "chord",
    "chose", "chunk", "civic", "claim", "clamp", "clash", "class", "clean", "clear", "clerk",
    "click", "cliff", "climb", "cling", "clock", "clone", "close", "cloth", "cloud", "clown",
    "coach", "coast", "color", "couch", "could", "count", "court", "cover", "craft", "crane",
    "crash", "crawl", "crazy", "cream", "creek", "crime", "crisp", "cross", "crowd", "crown",
    "crude", "crush", "curve", "cycle", "daily", "dairy", "dance", "dealt", "death", "delay",
    "depth", "diary", "dirty", "ditch", "dodge", "doing", "doubt", "dough", "dozen", "draft",
    "drain", "drama", "drank", "drawn", "dread", "dream", "dress", "dried", "drift", "drill",
    "drink", "drive", "drown", "eager", "eagle", "early", "earth", "eaten", "eight", "elbow",
    "elder", "elect", "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal", "erase",
    "error", "essay", "event", "every", "exact", "exist", "extra", "faith", "false", "fancy",
    "fault", "favor", "feast", "fence", "fever", "fewer", "field", "fiery", "fifth", "fifty",
    "fight", "final", "first", "flame", "flash", "fleet", "flesh", "float", "flood", "floor",
    "flour", "fluid", "flush", "focus", "force", "forge", "forth", "forty", "found", "frame",
    "frank", "fraud", "fresh", "front", "frost", "fruit", "fully", "funny", "ghost", "giant",
    "given", "glass", "globe", "glory", "glove", "going", "grace", "grade", "grain", "grand",
    "grant", "grape", "graph", "grasp", "grass", "grave", "great", "greed", "green", "greet",
    "grief", "grind", "groan", "group", "grown", "guard", "guess", "guest", "guide", "guilt",
    "habit", "happy", "harsh", "haste", "haunt", "heart", "heavy", "hedge", "hello", "hobby",
    "honey", "honor", "horse", "hotel", "house", "hover", "human", "humor", "hurry", "ideal",
    "image", "index", "inner", "input", "ivory", "jelly", "jewel", "joint", "joker", "judge",
    "juice", "jumbo", "knife", "knock", "known", "label", "labor", "large", "laser", "later",
    "laugh", "layer", "learn", "lease", "least", "leave", "ledge", "legal", "lemon", "level",
    "light", "limit", "linen", "liver", "lobby", "local", "logic", "loose", "lover", "lower", "loyal",
    "lucky", "lunar", "lunch", "lying", "magic", "major", "maker", "march", "marsh", "match",
    "maybe", "mayor", "meant", "medal", "media", "melon", "mercy", "merge", "merry", "metal",
    "meter", "midst", "might", "minor", "minus", "mixed", "model", "money", "month", "moral",
    "motor", "mound", "mount", "mouse", "mouth", "movie", "music", "naive", "naked", "nasty",
    "naval", "needy", "nerve", "never", "newly", "night", "noble", "noise", "north", "novel",
    "nurse", "ocean", "offer", "often", "olive", "onion", "onset", "order", "organ", "other",
    "ought", "ounce", "outer", "owner", "paint", "panel", "panic", "paper", "party", "pasta",
    "patch", "pause", "peace", "pearl", "pedal", "penny", "phase", "phone", "photo", "piano",
    "piece", "pilot", "pinch", "pitch", "pivot", "pizza", "place", "plain", "plane", "plant",
    "plate", "plaza", "plead", "pluck", "point", "polar", "porch", "pound", "power", "press",
    "price", "pride", "prime", "print", "prior", "prize", "probe", "proof", "proud", "prove",
    "pulse", "punch", "pupil", "puppy", "purse", "queen", "query", "quest", "queue", "quick",
    "quiet", "quilt", "quite", "quota", "quote", "radar", "radio", "raise", "rally", "ranch",
    "range", "rapid", "ratio", "razor", "reach", "react", "ready", "realm", "rebel", "refer",
    "relax", "renew", "reply", "rider", "ridge", "rifle", "right", "rigid", "rinse", "rival",
    "river", "roast", "robin", "robot", "rocky", "round", "route", "royal", "rugby", "ruler",
    "rumor", "rural", "salad", "sauce", "scale", "scare", "scarf", "scene", "scent", "scope",
    "score", "scout", "scrap", "screw", "scrub", "seize", "sense", "serve", "seven", "shade",
    "shaft", "shake", "shall", "shame", "shape", "share", "shark", "sharp", "sheep", "sheet",
    "shelf", "shell", "shift", "shine", "shiny", "shirt", "shock", "shoot", "shore", "short",
    "shout", "shown", "shrub", "siege", "sight", "since", "sixth", "skill", "skirt", "slate",
    "sleep", "slice", "slide", "slope", "small", "smart", "smell", "smile", "smoke", "snake",
    "sneak", "solar", "solid", "solve", "sorry", "sound", "south", "space", "spare", "spark",
    "speak", "spear", "speed", "spell", "spend", "spice", "spike", "spine", "split", "spoke",
    "spoon", "sport", "spray", "spree", "squad", "stack", "staff", "stage", "stair", "stake",
    "stale", "stamp", "stand", "stare", "stark", "start", "state", "steam", "steel", "steep",
    "steer", "stern", "stick", "stiff", "still", "sting", "stock", "stone", "stood", "stool",
    "store", "storm", "story", "stove", "strap", "straw", "strip", "stuck", "study", "stuff",
    "stump", "style", "sugar", "suite", "sunny", "super", "surge", "swamp", "swarm", "swear",
    "sweat", "sweep", "sweet", "swift", "swing", "sword", "table", "taken", "taste", "teach",
    "tease", "teeth", "tempo", "tenth", "thank", "theft", "their", "theme", "there", "these",
    "thick", "thief", "thigh", "thing", "think", "third", "those", "three", "threw", "throw",
    "thumb", "tiger", "tight", "timer", "title", "toast", "today", "token", "tooth", "topic",
    "torch", "total", "touch", "tough", "tower", "toxic", "trace", "track", "trade", "trail",
    "train", "trait", "treat", "trend", "trial", "tribe", "trick", "tried", "troop", "truck",
    "truly", "trunk", "trust", "truth", "tulip", "tutor", "twice", "twist", "udder", "ultra",
    "uncle", "under", "union", "unite", "unity", "until", "upper", "upset", "urban", "usage",
    "usual", "vague", "valid", "value", "valve", "vapor", "vault", "venue", "verse", "video",
    "vigor", "viral", "virus", "visit", "vital", "vivid", "vocal", "voice", "voter", "wagon",
    "waist", "waste", "watch", "water", "weary", "wedge", "weigh", "weird", "whale", "wheat",
    "wheel", "where", "which", "while", "white", "whole", "whose", "widen", "widow", "width",
    "winds", "witch", "woman", "world", "worry", "worse", "worst", "worth", "would", "wound",
    "woven", "wrist", "write", "wrong", "wrote", "yacht", "yield", "young", "yours", "youth",
    "zebra", "zesty"
  ];

  // Extra valid guesses (common words) to widen the acceptance set.
  var EXTRA = [
    "ables", "acids", "acres", "acted", "adept", "aimed", "aired", "aisle", "alley", "amber",
    "amend", "ample", "ankle", "annex", "apron", "ashen", "atlas", "attic", "audit", "aunts",
    "aware", "awful", "awoke", "axial", "bacon", "baked", "balls", "bands", "banjo", "barge",
    "barns", "bases", "baths", "beads", "beams", "beans", "bears", "beats", "beech", "beefy",
    "beers", "belly", "bezel", "bilge", "bingo", "birch", "bison", "bites", "blink", "bliss",
    "blitz", "bloat", "blobs", "blogs", "blond", "blown", "blows", "blunt", "blurb", "blurt",
    "boats", "bolts", "bombs", "bones", "bored", "bosom", "bossy", "bowls", "boxer", "brace",
    "braid", "brawl", "brews", "bribe", "brine", "briny", "brisk", "broth", "brows", "bugle",
    "bulky", "bumpy", "bunny", "burnt", "bushy", "butch", "bylaw", "cabby", "cacti", "cadet",
    "cagey", "cakes", "calms", "camps", "canal", "caned", "canes", "caper", "cards", "cared",
    "cares", "carol", "carts", "cased", "cases", "casks", "caste", "cater", "cease", "cedar",
    "cello", "chant", "chaos", "chaps", "chard", "chats", "cheat", "chefs", "chime", "chips",
    "chirp", "chits", "choir", "choke", "chomp", "chops", "chums", "churn", "cider", "cigar",
    "cited", "cites", "clad", "clams", "clang", "clans", "clasp", "claws", "clays", "cleat",
    "cleft", "clued", "clues", "clump", "coals", "coats", "cobra", "cocoa", "codes", "coils",
    "coins", "colon", "colts", "combo", "comet", "comma", "conch", "coral", "cords", "corns",
    "corny", "costs", "cosy", "coupe", "coupon", "cove", "coved", "coyly", "crabs", "crack",
    "crate", "crave", "craze", "creak", "creed", "creep", "crepe", "crept", "crest", "crews",
    "cried", "cries", "crock", "croft", "crony", "crook", "croon", "crops", "crumb", "crust",
    "cubic", "cubed", "cubes", "cuffs", "cumin", "cured", "cures", "curls", "curly", "curry",
    "curse", "curt", "dabs", "dales", "dared", "dares", "darts", "dated", "dates", "deals",
    "deans", "dears", "debit", "debts", "decal", "decay", "decks", "decor", "decoy", "deeds",
    "deems", "deity", "dells", "delta", "demon", "denim", "dense", "dents", "depot", "derby",
    "deter", "devil", "dials", "diced", "dices", "diets", "digit", "dimes", "diner", "dines",
    "dingy", "diode", "discs", "disks", "ditto", "divas", "dived", "diver", "dives", "dizzy",
    "docks", "donor", "donut", "doors", "doped", "doses", "doted", "dotes", "dowel", "downs",
    "downy", "dozed", "dozes", "drape", "drawl", "dregs", "dryer", "dryly", "ducks", "duels",
    "duets", "dukes", "dummy", "dumps", "dunes", "dusky", "dusty", "duvet", "dwarf", "dwell",
    "dwelt", "dyers", "dying", "eased", "eases", "easel", "eaves", "ebony", "edged", "edges",
    "edict", "eject", "elide", "elope", "elude", "elves", "ember", "emcee", "emits", "ended",
    "endow", "epoch", "epoxy", "equip", "erect", "erode", "erupt", "ether", "evade", "evens",
    "evert", "evict", "evils", "evoke", "ewers", "exalt", "excel", "exert", "exile", "expel",
    "extol", "exude", "eying", "fable", "faced", "faces", "facet", "facts", "faded", "fades",
    "fails", "fairy", "faked", "fakes", "falls", "famed", "farms", "fatal", "fates", "fatty",
    "fauna", "fawns", "fazed", "fazes", "feeds", "feels", "feign", "feint", "fella", "felon",
    "felts", "femur", "ferns", "ferry", "fetal", "fetch", "fetes", "feuds", "fiber", "fibre",
    "ficus", "fiend", "filed", "files", "filly", "films", "filmy", "filth", "finch", "fined",
    "finer", "fines", "fired", "fires", "firms", "fishy", "fists", "fixed", "fixer", "fizzy",
    "flair", "flaky", "flank", "flaps", "flare", "flask", "flaws", "flick", "flier", "flies",
    "fling", "flint", "flips", "flirt", "flits", "flock", "floes", "flop", "flops", "flora",
    "flown", "flows", "fluff", "fluke", "flume", "flung", "flute", "foamy", "foggy", "foils",
    "folds", "folks", "fonts", "foods", "fools", "foray", "forks", "forms", "forts", "fouls",
    "foxes", "frail", "freed", "frees", "freon", "fried", "fries", "frill", "frizz", "frock",
    "frogs", "froth", "frown", "froze", "fudge", "fumes", "fungi", "fused", "fuses", "fussy",
    "fuzzy", "gable", "gaily", "gains", "gaits", "galls", "gamer", "games", "gamma", "gangs",
    "gaped", "gapes", "garbs", "gases", "gated", "gates", "gauge", "gaunt", "gauze", "gavel",
    "gawky", "gazed", "gazes", "gears", "gecko", "geeks", "gel", "geese", "gems", "genes",
    "genie", "genre", "germs", "getup", "geyser", "ghoul", "gifts", "gills", "gilts", "gizmo",
    "glade", "glare", "glaze", "gleam", "glean", "glide", "glint", "gloat", "gloom", "gloss",
    "glued", "glues", "gnash", "gnome", "goals", "goats", "godly", "golds", "golem", "golfs",
    "goner", "goods", "goofy", "goose", "gored", "gores", "gorge", "gory", "gourd", "gowns",
    "grabs", "grade", "grids", "grill", "grime", "grimy", "grins", "gripe", "grips", "groin",
    "groom", "grope", "gross", "grout", "grove", "growl", "grows", "gruel", "gruff", "grunt",
    "guava", "gucks", "gulch", "gulfs", "gulls", "gully", "gumbo", "gummy", "gusto", "gusty",
    "gutsy", "guts", "gyres", "hails", "hairy", "hales", "halls", "halts", "hands", "handy",
    "hangs", "hardy", "hares", "harms", "harps", "hasty", "hatch", "hated", "hater", "hates",
    "hauls", "haven", "havoc", "hazel", "heads", "heals", "heaps", "heard", "hears", "heath",
    "heats", "heave", "heeds", "heels", "hefty", "heirs", "helix", "helms", "helps", "herbs",
    "herds", "hertz", "hewn", "hides", "hiked", "hiker", "hikes", "hills", "hilly", "hinge",
    "hints", "hippo", "hired", "hires", "hissy", "hitch", "hived", "hoard", "hoist", "holds",
    "holes", "holly", "homer", "homes", "honed", "hones", "hoods", "hooks", "hoops", "hoots",
    "hoped", "hopes", "horde", "hoses", "hosts", "hound", "hovel", "hover", "howls", "hubby",
    "huffy", "hulks", "hulls", "humid", "humps", "hunch", "hunks", "hunts", "hurls", "husks",
    "husky", "hutch", "hydro", "hyena", "hymns", "icily", "icing", "icons", "ideas", "idiom",
    "idiot", "idled", "idler", "idles", "idols", "igloo", "imbue", "impel", "imply", "inane",
    "inbox", "incur", "inept", "inert", "infer", "ingot", "inked", "inlay", "inlet", "irate",
    "irked", "irons", "irony", "islet", "issue", "itchy", "items", "ivies", "jacks", "jaded",
    "jails", "jambs", "japan", "jaunt", "jazzy", "jeans", "jeers", "jelly", "jerks", "jerky",
    "jests", "jetty", "jiffy", "jihad", "jilts", "jingo", "jocks", "joins", "joist", "joked",
    "joker", "jokes", "jolly", "jolts", "joust", "joys", "judo", "juicy", "jumbo", "jumps",
    "jumpy", "junky", "junta", "juror", "jutty", "kayak", "kebab", "keels", "keeps", "kelp",
    "kempt", "kennel", "kept", "khaki", "kicks", "kiddo", "kills", "kilns", "kilts", "kinds",
    "kings", "kinks", "kinky", "kiosk", "kited", "kites", "kitty", "kiwis", "kneed", "kneel",
    "knees", "knell", "knelt", "knits", "knobs", "knoll", "knots", "koala", "krill", "labels",
    "laced", "laces", "lacks", "laden", "ladle", "lairs", "lakes", "lamps", "lance", "lands",
    "lanes", "lanky", "lapel", "lapse", "larch", "larks", "larva", "lasso", "lasts", "latch",
    "lathe", "leafy", "leaks", "leaky", "leans", "leant", "leaps", "leapt", "leash", "ledge",
    "leech", "leeks", "leers", "leery", "lefts", "lefty", "lends", "lenses", "lever", "liars",
    "licks", "liens", "lifts", "liked", "liken", "likes", "lilac", "limbo", "limbs", "limes",
    "limps", "lined", "liner", "lines", "lingo", "links", "lions", "lisps", "lists", "lithe",
    "lived", "lives", "llama", "loads", "loafs", "loams", "loans", "loath", "lobby", "lobes",
    "locks", "lodge", "lofts", "lofty", "loins", "lolls", "loner", "longs", "looks", "looms",
    "loons", "loops", "loots", "loped", "lopes", "lords", "lorry", "losel", "loser", "loses",
    "lotus", "louse", "lousy", "louts", "loved", "loves", "lowly", "lulls", "lumps", "lumpy",
    "lunge", "lurch", "lured", "lures", "lurid", "lurks", "lusts", "lusty", "lutes", "lying",
    "lymph", "lynch", "lyres", "maced", "maces", "macho", "macro", "madam", "madly", "mails",
    "maims", "mains", "maize", "malls", "malts", "mamba", "mamma", "mange", "mango", "mangy",
    "manes", "mania", "manor", "maple", "maps", "marks", "mars", "masks", "masts", "mated",
    "mates", "mauls", "mauve", "maxed", "maxim", "mazes", "meals", "mealy", "means", "meats",
    "meaty", "mecca", "medic", "meets", "melds", "melts", "memos", "mends", "menus", "meows",
    "mesas", "messy", "metro", "mewls", "micro", "midge", "miens", "miked", "mikes", "milds",
    "miled", "miler", "miles", "milks", "milky", "mills", "mimed", "mimes", "mimic", "mince",
    "minds", "mined", "miner", "mines", "mings", "mints", "minty", "mired", "mires", "mirth",
    "misty", "mites", "mitts", "moans", "moats", "mocha", "mocks", "modal", "modem", "modes",
    "moist", "molar", "molds", "moldy", "moles", "molts", "monks", "moods", "moody", "moons",
    "moors", "moose", "moped", "mopes", "moral", "morph", "moss", "moths", "motto", "moult",
    "mourn", "mover", "moves", "mowed", "mower", "mucky", "mucus", "muddy", "muffs", "muggy",
    "mulch", "mules", "mummy", "munch", "mural", "murky", "mused", "muses", "mushy", "musks",
    "musky", "musty", "muted", "mutes", "mutts", "myrrh", "myths", "nacho", "nadir", "nails",
    "named", "names", "nanny", "napes", "nappy", "nasal", "nates", "natty", "naves", "navel",
    "neats", "necks", "needs", "neon", "nerdy", "nests", "newer", "newts", "nicer", "niche",
    "nicks", "niece", "nifty", "nines", "ninja", "ninny", "ninth", "nippy", "nits", "nobby",
    "nodes", "noisy", "nomad", "nooks", "noons", "noose", "norms", "nosed", "noses", "notch",
    "noted", "notes", "nouns", "nudge", "nuked", "nukes", "numbs", "nutty", "nylon", "nymph",
    "oaken", "oasis", "oaten", "obese", "occur", "ocher", "octet", "odder", "oddly", "odors",
    "offed", "ogled", "ogles", "ogres", "oiled", "oinks", "okays", "olden", "oldie", "olive",
    "ombre", "omega", "omits", "onset", "oozed", "oozes", "opals", "opens", "opera", "opine",
    "opium", "opted", "optic", "orbit", "orcas", "ought", "outdo", "outed", "ovals", "ovary",
    "ovens", "overt", "owing", "owls", "owned", "oxide", "ozone", "paced", "paces", "packs",
    "pacts", "paddy", "pads", "paged", "pager", "pages", "pails", "pains", "pairs", "palms",
    "palsy", "pampa", "panda", "panes", "pangs", "pansy", "pants", "papal", "papas", "pares",
    "parka", "parks", "parry", "parse", "parts", "pasta", "paste", "pasty", "pated", "paths",
    "patio", "patsy", "patty", "payed", "payer", "peace", "peach", "peaks", "peaky", "peals",
    "pears", "peats", "pecan", "pecks", "pedals", "peeks", "peels", "peeps", "peers", "pelts",
    "penne", "perch", "peril", "perks", "perky", "perms", "pesky", "pesos", "pests", "petal",
    "petal", "peter", "petty", "pews", "phlox", "phony", "picks", "picky", "piers", "piety",
    "piggy", "pinks", "piked", "piker", "pikes", "piled", "piles", "pills", "pimps", "pined",
    "pines", "pings", "pinks", "pinky", "pints", "pious", "piped", "piper", "pipes", "pique",
    "pithy", "plank", "plans", "plays", "plead", "pleas", "plied", "plier", "plies", "plods",
    "plops", "plots", "plows", "ploys", "plugs", "plumb", "plume", "plump", "plums", "plunk",
    "plush", "plywood", "poach", "pods", "poems", "poesy", "poets", "poise", "poked", "poker",
    "pokes", "poled", "poler", "poles", "polka", "polls", "polos", "polyp", "ponds", "pones",
    "pooch", "poofs", "pools", "poops", "poppy", "porch", "pored", "pores", "porks", "ports",
    "posed", "poser", "poses", "posit", "posse", "posts", "potty", "pouch", "pouts", "pouty",
    "prams", "prank", "prawn", "prays", "preen", "preps", "preys", "prick", "pricy", "prims",
    "primp", "props", "prose", "prowl", "proxy", "prude", "prune", "psalm", "pubic", "pucks",
    "puffs", "puffy", "puked", "pukes", "pulls", "pulps", "pulpy", "pumas", "pumps", "punks",
    "punts", "puny", "pupas", "puree", "purer", "purge", "purls", "purrs", "pushy", "putts",
    "putty", "pygmy", "pylon", "quack", "quads", "quail", "quaff", "quake", "qualm", "quark",
    "quarts", "quash", "quays", "quell", "quill", "quips", "quirk", "rabid", "raced", "racer",
    "races", "racks", "radii", "rafts", "raged", "rages", "raids", "rails", "rains", "rainy",
    "raked", "rakes", "ramps", "rangy", "ranks", "rants", "raped", "rapes", "rared", "rarer",
    "rasps", "raspy", "rated", "rates", "raved", "raven", "raves", "rawer", "rayon", "reaps",
    "rears", "rebar", "recap", "recur", "redid", "reeds", "reedy", "reefs", "reeks", "reels",
    "reins", "relay", "relic", "remit", "rends", "rents", "repay", "repel", "rerun", "reset",
    "resin", "rests", "retch", "retry", "revel", "revue", "rheas", "rhino", "rhyme", "ribs",
    "riced", "rices", "ricks", "rides", "riled", "riles", "rills", "rinds", "rings", "rinks",
    "riots", "riped", "ripen", "riper", "risen", "riser", "rises", "risks", "risky", "rites",
    "roach", "roads", "roams", "roans", "roars", "robed", "robes", "robot", "rocks", "rodeo",
    "rods", "roles", "rolls", "romps", "roods", "roofs", "rooks", "rooms", "roomy", "roost",
    "roots", "roped", "ropes", "roses", "rosin", "rotor", "roued", "rouge", "roused", "router",
    "rover", "roves", "rowdy", "rowed", "rower", "ruddy", "ruder", "ruffs", "rugby", "ruins",
    "ruled", "rules", "rumba", "rummy", "rumps", "runes", "rungs", "runny", "runts", "ruses",
    "rusks", "rusts", "rusty", "saber", "sable", "sabot", "sacks", "sadly", "safer", "safes",
    "sagas", "sager", "sails", "saint", "saith", "salad", "sales", "sally", "salon", "salsa",
    "salts", "salty", "salve", "salvo", "sands", "sandy", "saner", "saute", "saved", "saver",
    "saves", "savor", "savvy", "sawed", "scabs", "scads", "scald", "scalp", "scaly", "scamp",
    "scams", "scans", "scant", "scary", "scoff", "scold", "scone", "scoop", "scoot", "scorn",
    "scour", "scowl", "scuba", "scuff", "scums", "seals", "seams", "seamy", "sears", "seats",
    "sects", "sedan", "seeds", "seedy", "seeks", "seems", "seeps", "seers", "sells", "semis",
    "sepia", "serfs", "serum", "setup", "sever", "sewed", "sewer", "shads", "shags", "shahs",
    "shale", "shams", "shank", "shanty", "shard", "shawl", "shear", "sheds", "sheen", "sheer",
    "shied", "shies", "shins", "shire", "shirk", "shoal", "shoes", "shone", "shoos", "shops",
    "shots", "showy", "shred", "shrek", "shrew", "shrill", "shrug", "shuck", "shuns", "shunt",
    "shush", "shuts", "shyer", "shyly", "sided", "sides", "sidle", "sieve", "sifts", "sighs",
    "signs", "silks", "silky", "sills", "silly", "silos", "silts", "silty", "since", "sinew",
    "singe", "sings", "sinks", "sinus", "sired", "siren", "sires", "sises", "sissy", "sites",
    "sixes", "sized", "sizer", "sizes", "skate", "skeet", "skein", "skews", "skids", "skied",
    "skier", "skies", "skiff", "skims", "skimp", "skins", "skips", "skull", "skunk", "slabs",
    "slack", "slags", "slain", "slake", "slams", "slang", "slant", "slaps", "slash", "slats",
    "slave", "slaws", "slays", "sleek", "sleet", "slept", "slews", "slick", "slime", "slimy",
    "sling", "slink", "slips", "slits", "slobs", "slogs", "slosh", "sloth", "slots", "slows",
    "slugs", "slump", "slums", "slung", "slunk", "slurp", "slush", "slyly", "smack", "smash",
    "smear", "smelt", "smirk", "smith", "smock", "smogs", "smote", "snack", "snags", "snail",
    "snaps", "snare", "snarl", "snipe", "snips", "snobs", "snoop", "snore", "snort", "snout",
    "snows", "snowy", "snubs", "snuck", "snuff", "snugs", "soaks", "soaps", "soapy", "soars",
    "sobs", "socks", "sodas", "sofas", "softs", "soils", "solds", "soled", "soles", "solos",
    "songs", "sonic", "soothe", "sooty", "sorts", "souls", "soups", "soupy", "sours", "sowed",
    "sower", "spade", "spank", "spans", "spars", "spasm", "spats", "spawn", "spays", "specs",
    "speck", "spent", "sperm", "spied", "spies", "spill", "spilt", "spins", "spits", "splat",
    "spoof", "spool", "spore", "sport", "spots", "spout", "sprig", "spree", "sprig", "spuds",
    "spume", "spunk", "spurn", "spurs", "spurt", "squat", "squib", "stabs", "stags", "stang",
    "staph", "stash", "stays", "stead", "steak", "steal", "stein", "stilt", "stink", "stint",
    "stems", "steps", "stews", "sties", "stilt", "stink", "stint", "stirs", "stoat", "stoke",
    "stomp", "stops", "stops", "store", "stork", "stout", "stows", "strut", "stubs", "studs",
    "stuns", "stunt", "stye", "suave", "sucks", "suds", "suede", "suet", "sugar", "suits",
    "sulks", "sulky", "sully", "sumps", "sunup", "surer", "surfs", "swabs", "swags", "swain",
    "swans", "swaps", "swash", "swath", "sways", "swell", "swept", "swigs", "swill", "swims",
    "swine", "swipe", "swirl", "swish", "swoon", "swoop", "swops", "sworn", "swung", "syrup",
    "tabby", "tabes", "tacit", "tacks", "tacky", "taffy", "tails", "taint", "taken", "taker",
    "takes", "tales", "talks", "tally", "talon", "tamed", "tamer", "tames", "tamps", "tangs",
    "tango", "tangy", "tanks", "taped", "taper", "tapes", "tapir", "tardy", "tares", "tarot",
    "tarps", "tarry", "tarts", "tasks", "tatty", "taunt", "taupe", "tawny", "teals", "teams",
    "tears", "teary", "tease", "teaks", "teams", "techy", "teddy", "teems", "teens", "teeny",
    "telly", "tempt", "tends", "tenet", "tenor", "tense", "tents", "tepee", "tepid", "terms",
    "terse", "tests", "testy", "texts", "thaws", "theta", "thine", "thong", "thorn", "thuds",
    "thugs", "thyme", "tiara", "ticks", "tided", "tides", "tiers", "tiled", "tiler", "tiles",
    "tills", "tilts", "timed", "timer", "times", "timid", "tined", "tines", "tinge", "tings",
    "tints", "tipsy", "tired", "tires", "titan", "tithe", "toads", "toady", "toffy", "togas",
    "toils", "toked", "tokes", "tolls", "tomes", "tongs", "tonal", "toned", "toner", "tones",
    "tonic", "tools", "toons", "tooth", "toots", "topaz", "toped", "topes", "torch", "torso",
    "torts", "torus", "totem", "totes", "touts", "towed", "towel", "towns", "toyed", "track",
    "tract", "trams", "traps", "trash", "trawl", "trays", "tread", "tress", "trews", "trims",
    "trio", "trios", "tripe", "trips", "trite", "troll", "tromp", "trots", "trout", "trove",
    "trows", "truce", "trues", "trump", "tryst", "tsars", "tubas", "tubby", "tubed", "tuber",
    "tubes", "tucks", "tufts", "tufty", "tulle", "tumor", "tunas", "tuned", "tuner", "tunes",
    "tunic", "turfs", "turns", "tusks", "tutus", "tuxes", "twang", "tweak", "tweed", "tweet",
    "twerp", "twigs", "twine", "twins", "twirl", "twits", "tying", "typed", "types", "typos",
    "udder", "ulcer", "umbel", "umber", "umiak", "umped", "uncap", "uncut", "undid", "undue",
    "unfed", "unfit", "unify", "unlit", "unmet", "unpin", "unset", "untie", "unwed", "unzip",
    "upend", "urged", "urges", "urine", "users", "ushers", "usurp", "uteri", "utter", "vales",
    "valor", "vamps", "vaned", "vanes", "vans", "vaped", "vaper", "vapes", "vaunt", "veers",
    "veils", "veins", "velar", "veldt", "venom", "vents", "verbs", "verge", "verve", "vests",
    "vetch", "vexed", "vexes", "vials", "vibes", "vicar", "vices", "viced", "views", "vigil",
    "villa", "vined", "vines", "vinyl", "viola", "viper", "virago", "visas", "vised", "vises",
    "visor", "vista", "vixen", "vodka", "vogue", "voids", "voila", "voles", "volts", "vomit",
    "voted", "voter", "votes", "vouch", "vowed", "vowel", "vroom", "vying", "wacky", "waded",
    "wader", "wades", "wadis", "wafer", "wafts", "waged", "wager", "wages", "waged", "waifs",
    "wails", "wakes", "waled", "wales", "walks", "walls", "waltz", "wands", "waned", "wanes",
    "wanly", "wanna", "wants", "wards", "wares", "warms", "warns", "warps", "warts", "warty",
    "washy", "wasps", "waspy", "watts", "waved", "waver", "waves", "waxed", "waxen", "waxes",
    "weald", "weans", "wears", "weave", "weeds", "weedy", "weeks", "weeny", "weeps", "weest",
    "welds", "wells", "welts", "wench", "wends", "whack", "whams", "wharf", "wheal", "whelk",
    "whelm", "whelp", "whiff", "whims", "whine", "whiny", "whips", "whirl", "whirr", "whisk",
    "whizz", "whoop", "whorl", "wicks", "wield", "wifey", "wiggle", "wilds", "wiled", "wiles",
    "wills", "wilts", "wimps", "wimpy", "wince", "winch", "winds", "windy", "wined", "wines",
    "wings", "winks", "wiped", "wiper", "wipes", "wired", "wires", "wised", "wiser", "wises",
    "wisps", "wispy", "wived", "wives", "wodge", "woken", "wolfs", "wonky", "woods", "woody",
    "wooed", "wooer", "woofs", "wools", "wooly", "woozy", "words", "wordy", "works", "worms",
    "wormy", "worns", "worts", "wracks", "wraps", "wrath", "wreak", "wreck", "wrens", "wried",
    "wries", "wring", "wrung", "wrest", "wryer", "wryly", "xenon", "xylem", "yacks", "yanks",
    "yards", "yarns", "yawls", "yawns", "yearn", "years", "yeast", "yells", "yelps", "yeses",
    "yetis", "yodel", "yogas", "yogic", "yogis", "yoked", "yokel", "yokes", "yolks", "yolky",
    "yore", "young", "yucca", "yucks", "yucky", "yummy", "yups", "zappy", "zeals", "zebus",
    "zeros", "zests", "zilch", "zincs", "zings", "zingy", "zippy", "zonal", "zoned", "zones",
    "zonks", "zooms", "zorch"
  ];

  // Build the ALLOWED Set: every entry must be exactly 5 letters.
  // We filter to be safe (typos in EXTRA shouldn't poison the validator).
  var ALLOWED = (function buildAllowed() {
    var set = new Set();
    function add(word) {
      if (typeof word === "string" && /^[a-z]{5}$/.test(word)) {
        set.add(word);
      }
    }
    ANSWERS.forEach(add);
    EXTRA.forEach(add);
    return set;
  })();

  // Keep only valid 5-letter answers, and guarantee each answer is also allowed.
  ANSWERS = ANSWERS.filter(function (w) {
    return /^[a-z]{5}$/.test(w);
  });
  ANSWERS.forEach(function (w) {
    ALLOWED.add(w);
  });

  /* ----------------------------------------------------------
     GAME CONSTANTS / STATE
     ---------------------------------------------------------- */
  var ROWS = 6;
  var COLS = 5;
  var STORAGE_KEY = "wordForge.streak";

  var state = {
    answer: "",        // current secret word, uppercase
    row: 0,            // active row index
    col: 0,            // active column within the row
    current: "",       // letters typed in the active row
    over: false,       // game finished?
    busy: false,       // true during reveal animation (locks input)
    streak: 0,         // current win streak (in-memory + persisted)
    best: 0            // best streak
  };

  // Best-known state for each keyboard letter: undefined < "absent" < "present" < "correct"
  var keyState = {};

  // Cached DOM
  var boardEl, keyboardEl, messageEl, streakEl, bestEl, newGameBtn;
  var tiles = []; // tiles[row][col] = element
  var keyEls = {}; // letter -> key element
  var messageTimer = null;

  /* ----------------------------------------------------------
     AUDIO — tiny Web Audio blips (no assets). Best-effort only.
     ---------------------------------------------------------- */
  var audioCtx = null;
  function ensureAudio() {
    if (audioCtx) return audioCtx;
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    } catch (e) {
      audioCtx = null;
    }
    return audioCtx;
  }
  function tone(freq, dur, type, vol) {
    var ctx = ensureAudio();
    if (!ctx) return;
    try {
      if (ctx.state === "suspended") ctx.resume();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = type || "sine";
      osc.frequency.value = freq;
      gain.gain.value = vol == null ? 0.05 : vol;
      osc.connect(gain);
      gain.connect(ctx.destination);
      var now = ctx.currentTime;
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.start(now);
      osc.stop(now + dur);
    } catch (e) { /* ignore audio errors */ }
  }

  /* ----------------------------------------------------------
     localStorage helpers (wrapped — works under file:// but guard anyway)
     ---------------------------------------------------------- */
  function loadStreak() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { streak: 0, best: 0 };
      var data = JSON.parse(raw);
      return {
        streak: typeof data.streak === "number" ? data.streak : 0,
        best: typeof data.best === "number" ? data.best : 0
      };
    } catch (e) {
      return { streak: 0, best: 0 };
    }
  }
  function saveStreak() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ streak: state.streak, best: state.best })
      );
    } catch (e) { /* ignore */ }
  }

  /* ----------------------------------------------------------
     BUILD UI
     ---------------------------------------------------------- */
  function buildBoard() {
    boardEl.innerHTML = "";
    tiles = [];
    for (var r = 0; r < ROWS; r++) {
      var rowEl = document.createElement("div");
      rowEl.className = "row";
      var rowTiles = [];
      for (var c = 0; c < COLS; c++) {
        var t = document.createElement("div");
        t.className = "tile";
        rowEl.appendChild(t);
        rowTiles.push(t);
      }
      boardEl.appendChild(rowEl);
      tiles.push(rowTiles);
    }
  }

  var KB_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  function buildKeyboard() {
    keyboardEl.innerHTML = "";
    keyEls = {};
    KB_ROWS.forEach(function (rowStr, idx) {
      var rowEl = document.createElement("div");
      rowEl.className = "kb-row";

      // last row gets Enter (left) and Backspace (right)
      if (idx === 2) {
        rowEl.appendChild(makeKey("enter", "Enter", true));
      }
      rowStr.split("").forEach(function (ch) {
        var key = makeKey(ch, ch.toUpperCase(), false);
        keyEls[ch.toUpperCase()] = key;
        rowEl.appendChild(key);
      });
      if (idx === 2) {
        rowEl.appendChild(makeKey("back", "Del", true));
      }
      keyboardEl.appendChild(rowEl);
    });
  }

  function makeKey(data, label, wide) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "key" + (wide ? " wide" : "");
    b.textContent = label;
    b.setAttribute("data-key", data);
    b.addEventListener("click", function () {
      handleKey(data);
      b.blur(); // so physical Enter/Backspace don't re-trigger the focused button
    });
    return b;
  }

  /* ----------------------------------------------------------
     INPUT HANDLING
     ---------------------------------------------------------- */
  function handleKey(k) {
    if (state.over || state.busy) return;

    if (k === "enter") {
      submitGuess();
    } else if (k === "back") {
      deleteLetter();
    } else if (/^[a-z]$/.test(k)) {
      addLetter(k.toUpperCase());
    }
  }

  function addLetter(letter) {
    if (state.current.length >= COLS) return;
    var tile = tiles[state.row][state.current.length];
    tile.textContent = letter;
    tile.classList.add("filled", "pop");
    // remove the pop class after it plays so it can re-trigger later
    (function (t) {
      setTimeout(function () { t.classList.remove("pop"); }, 130);
    })(tile);
    state.current += letter;
    tone(330, 0.05, "triangle", 0.03);
  }

  function deleteLetter() {
    if (state.current.length === 0) return;
    state.current = state.current.slice(0, -1);
    var tile = tiles[state.row][state.current.length];
    tile.textContent = "";
    tile.classList.remove("filled");
    tone(220, 0.05, "triangle", 0.03);
  }

  function submitGuess() {
    if (state.current.length < COLS) {
      invalidRow("Not enough letters");
      return;
    }
    var guess = state.current.toLowerCase();
    if (!ALLOWED.has(guess)) {
      invalidRow("Not in word list");
      return;
    }
    revealGuess(guess.toUpperCase());
  }

  function invalidRow(msg) {
    showMessage(msg);
    var rowEl = boardEl.children[state.row];
    rowEl.classList.add("shake");
    tone(140, 0.18, "sawtooth", 0.04);
    setTimeout(function () { rowEl.classList.remove("shake"); }, 460);
  }

  /* ----------------------------------------------------------
     SCORING — standard Wordle duplicate handling
       1) mark all exact matches (green), consume those answer letters
       2) for the rest, mark "present" only if an unconsumed copy remains
     Returns an array of "correct" | "present" | "absent" of length COLS.
     ---------------------------------------------------------- */
  function scoreGuess(guess, answer) {
    var result = new Array(COLS).fill("absent");
    var remaining = {}; // letter -> count of answer letters not yet matched

    var i, ch;
    for (i = 0; i < COLS; i++) {
      ch = answer[i];
      remaining[ch] = (remaining[ch] || 0) + 1;
    }
    // pass 1: greens
    for (i = 0; i < COLS; i++) {
      if (guess[i] === answer[i]) {
        result[i] = "correct";
        remaining[guess[i]]--;
      }
    }
    // pass 2: yellows
    for (i = 0; i < COLS; i++) {
      if (result[i] === "correct") continue;
      ch = guess[i];
      if (remaining[ch] > 0) {
        result[i] = "present";
        remaining[ch]--;
      }
    }
    return result;
  }

  /* ----------------------------------------------------------
     REVEAL — flip animation, then key colors, then win/lose check
     ---------------------------------------------------------- */
  function revealGuess(guess) {
    state.busy = true;
    var result = scoreGuess(guess, state.answer);
    var rowEl = boardEl.children[state.row];
    var rowTiles = tiles[state.row];
    var flipStep = 280; // ms between each tile starting its flip

    rowTiles.forEach(function (tile, idx) {
      setTimeout(function () {
        tile.classList.add("flip");
        // apply the color at the midpoint of the flip (when edge-on)
        setTimeout(function () {
          tile.classList.add(result[idx]);
        }, 250);
        // a soft click per reveal
        tone(result[idx] === "correct" ? 520 : 300, 0.05, "sine", 0.03);
      }, idx * flipStep);
    });

    // after the last tile finishes flipping, resolve the turn
    var totalReveal = (COLS - 1) * flipStep + 600;
    setTimeout(function () {
      updateKeyboard(guess, result);
      finishTurn(guess, result, rowEl);
    }, totalReveal);
  }

  function updateKeyboard(guess, result) {
    var rank = { absent: 1, present: 2, correct: 3 };
    for (var i = 0; i < COLS; i++) {
      var letter = guess[i];
      var newState = result[i];
      var prev = keyState[letter];
      // never downgrade a key's known state
      if (!prev || rank[newState] > rank[prev]) {
        keyState[letter] = newState;
        var key = keyEls[letter];
        if (key) {
          key.classList.remove("correct", "present", "absent");
          key.classList.add(newState);
        }
      }
    }
  }

  function finishTurn(guess, result, rowEl) {
    var won = result.every(function (s) { return s === "correct"; });

    if (won) {
      state.busy = false;
      state.over = true;
      rowEl.classList.add("bounce");
      state.streak += 1;
      if (state.streak > state.best) state.best = state.streak;
      saveStreak();
      renderStats();
      winSound();
      showMessage(winMessage(state.row), true, true);
      setTimeout(function () { rowEl.classList.remove("bounce"); }, 700);
      return;
    }

    // advance to next row
    state.row += 1;
    state.current = "";

    if (state.row >= ROWS) {
      // out of guesses — loss
      state.busy = false;
      state.over = true;
      state.streak = 0;
      saveStreak();
      renderStats();
      loseSound();
      showMessage("The word was " + state.answer, true, false);
    } else {
      state.busy = false;
    }
  }

  function winMessage(rowIndex) {
    var msgs = [
      "Genius!",      // 1st guess
      "Magnificent!", // 2nd
      "Impressive!",  // 3rd
      "Splendid!",    // 4th
      "Great!",       // 5th
      "Phew!"         // 6th
    ];
    return msgs[rowIndex] || "Solved!";
  }

  function winSound() {
    tone(523, 0.12, "sine", 0.05);
    setTimeout(function () { tone(659, 0.12, "sine", 0.05); }, 120);
    setTimeout(function () { tone(784, 0.18, "sine", 0.05); }, 240);
  }
  function loseSound() {
    tone(300, 0.18, "sine", 0.045);
    setTimeout(function () { tone(220, 0.28, "sine", 0.045); }, 160);
  }

  /* ----------------------------------------------------------
     MESSAGES / STATS
     ---------------------------------------------------------- */
  function showMessage(text, sticky, isWin) {
    if (messageTimer) {
      clearTimeout(messageTimer);
      messageTimer = null;
    }
    messageEl.innerHTML = "";
    var toast = document.createElement("span");
    toast.className = "toast" + (isWin ? " win" : "");
    toast.textContent = text;
    messageEl.appendChild(toast);
    if (!sticky) {
      messageTimer = setTimeout(function () {
        messageEl.innerHTML = "";
      }, 1300);
    }
  }

  function renderStats() {
    streakEl.textContent = String(state.streak);
    bestEl.textContent = String(state.best);
  }

  /* ----------------------------------------------------------
     NEW GAME
     ---------------------------------------------------------- */
  function newGame() {
    state.answer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)].toUpperCase();
    state.row = 0;
    state.col = 0;
    state.current = "";
    state.over = false;
    state.busy = false;
    keyState = {};

    buildBoard();
    buildKeyboard();
    renderStats();
    messageEl.innerHTML = "";
    // (answer intentionally not logged — keep the console clean & no spoilers)
  }

  /* ----------------------------------------------------------
     WIRE UP
     ---------------------------------------------------------- */
  function onPhysicalKey(e) {
    // Ignore modified shortcuts so browser combos still work.
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    var key = e.key;
    if (key === "Enter") {
      e.preventDefault();
      handleKey("enter");
    } else if (key === "Backspace" || key === "Delete") {
      e.preventDefault();
      handleKey("back");
    } else if (key.length === 1 && /^[a-zA-Z]$/.test(key)) {
      e.preventDefault();
      handleKey(key.toLowerCase());
    }
  }

  function init() {
    boardEl = document.getElementById("board");
    keyboardEl = document.getElementById("keyboard");
    messageEl = document.getElementById("message");
    streakEl = document.getElementById("streak");
    bestEl = document.getElementById("best");
    newGameBtn = document.getElementById("new-game");

    var saved = loadStreak();
    state.streak = saved.streak;
    state.best = saved.best;

    newGame();
    // a fresh game resets the in-memory streak display only if there was a loss;
    // preserve persisted streak across reloads.
    renderStats();

    newGameBtn.addEventListener("click", function () {
      newGame();
      newGameBtn.blur();
    });

    document.addEventListener("keydown", onPhysicalKey);
    // unlock audio on first user gesture (some browsers require it)
    document.addEventListener(
      "pointerdown",
      function once() {
        ensureAudio();
        document.removeEventListener("pointerdown", once);
      },
      { once: true }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

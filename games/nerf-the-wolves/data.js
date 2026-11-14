// Data only: species, skills, puzzles, prayers, hands. Loaded before sim.js in the browser.
var SPECIES = {
  wolf:    { atk: 78, def: 60, spd: 62, base: 1.5 },
  rabbit:  { atk: 22, def: 30, spd: 80, base: 1.0 },
  deer:    { atk: 40, def: 55, spd: 66, base: 1.0 },
  hawk:    { atk: 66, def: 38, spd: 90, base: 1.2 },
  bee:     { atk: 48, def: 28, spd: 58, base: 0.7 },
  giraffe: { atk: 45, def: 70, spd: 35, base: 0.6 }
};
var SPECIES_ORDER = ['wolf', 'rabbit', 'deer', 'hawk', 'bee', 'giraffe'];

// Starting multipliers M. Every pair not listed is 1. The plan's starting set made every puzzle unsolvable,
// so these were tuned (dev/check.js is the contract: start ranges, solvable, par, no brute force).
var BASE_MULT = [
  ['wolf', 'rabbit', 0.45], ['wolf', 'deer', 0.84], ['wolf', 'hawk', 3.57], ['wolf', 'bee', 0.33], ['wolf', 'giraffe', 0.77],
  ['rabbit', 'wolf', 4.24], ['rabbit', 'deer', 0.24], ['rabbit', 'hawk', 2.11], ['rabbit', 'bee', 0.90], ['rabbit', 'giraffe', 2.06],
  ['deer', 'wolf', 3.40], ['deer', 'rabbit', 1.27], ['deer', 'hawk', 0.22], ['deer', 'bee', 0.80], ['deer', 'giraffe', 0.22],
  ['hawk', 'wolf', 0.23], ['hawk', 'rabbit', 0.27], ['hawk', 'deer', 1.06], ['hawk', 'bee', 1.32], ['hawk', 'giraffe', 3.22],
  ['bee', 'wolf', 4.86], ['bee', 'rabbit', 0.24], ['bee', 'deer', 0.69], ['bee', 'hawk', 0.31], ['bee', 'giraffe', 1.12],
  ['giraffe', 'wolf', 0.33], ['giraffe', 'rabbit', 2.60], ['giraffe', 'deer', 3.20], ['giraffe', 'hawk', 0.85], ['giraffe', 'bee', 0.62]
];

// Effects: {t:'stat', s, k:'atk'|'def'|'spd', d} or {t:'mult', a, b, x}
function st(s, k, d) { return { t: 'stat', s: s, k: k, d: d }; }
function mu(a, b, x) { return { t: 'mult', a: a, b: b, x: x }; }

var WOLF_VARIANTS = {
  plain: { name: 'Wolf', sprite: 'wolf', fx: [] },
  dire:  { name: 'Dire Wolf', sprite: 'wolf-dire', fx: [st('wolf', 'atk', 14)] },
  night: { name: 'Night Wolf', sprite: 'wolf-night', fx: [st('wolf', 'spd', 23), mu('wolf', 'hawk', 1.3)] },
  twelve: { name: 'The Twelve', sprite: 'wolf-twelve', fx: [st('wolf', 'def', 20)] },
  smoke: { name: 'Smoke Wolf', sprite: 'wolf-smoke', fx: [mu('bee', 'wolf', 0.5)] }
};

// kind: 'team' (two species, shows a link), 'solo' (one species), 'wolf' (build a wolf)
var SKILLS = {
  alarm:    { id: 'alarm', name: 'Alarm Call', cost: 2, kind: 'team', species: ['hawk', 'rabbit'], fx: [mu('hawk', 'rabbit', 0.3), mu('wolf', 'rabbit', 0.7)], blurb: 'Hawks guard the burrows' },
  escort:   { id: 'escort', name: 'Bee Escort', cost: 2, kind: 'team', species: ['bee', 'deer'], fx: [mu('wolf', 'deer', 0.6)], blurb: 'Bees ride with the herd' },
  lookout:  { id: 'lookout', name: 'Lookout', cost: 2, kind: 'team', species: ['giraffe', 'deer'], fx: [mu('wolf', 'deer', 0.8), mu('wolf', 'giraffe', 0.7)], blurb: 'Giraffe spots wolves early' },
  mob:      { id: 'mob', name: 'Mob the Hunter', cost: 3, kind: 'team', species: ['hawk', 'bee'], fx: [mu('hawk', 'wolf', 1.5), mu('bee', 'wolf', 1.3)], blurb: 'Hawks and bees dive together' },
  stampede: { id: 'stampede', name: 'Stampede', cost: 2, kind: 'solo', species: ['deer'], fx: [mu('deer', 'wolf', 2.5)], blurb: 'The herd tramples through' },
  angry:    { id: 'angry', name: 'Angry Rabbits', cost: 1, kind: 'solo', species: ['rabbit'], fx: [st('rabbit', 'atk', 16)], blurb: 'Rabbit attack +16' },
  reinforce: { id: 'reinforce', name: 'Rabbit Reinforcements', short: 'Reinforce', cost: 1, kind: 'solo', species: ['rabbit'], fx: [st('rabbit', 'def', 14)], blurb: 'Rabbit defense +14' },
  antler:   { id: 'antler', name: 'Antler Season', cost: 1, kind: 'solo', species: ['deer'], fx: [st('deer', 'atk', 14)], blurb: 'Deer attack +14' },
  zoomies:  { id: 'zoomies', name: 'Zoomies', cost: 1, kind: 'solo', species: ['deer'], fx: [st('deer', 'spd', 15)], blurb: 'Deer speed +15' },
  hide:     { id: 'hide', name: 'Thick Hide', cost: 1, kind: 'solo', species: ['giraffe'], fx: [st('giraffe', 'def', 12)], blurb: 'Giraffe defense +12' },
  jelly:    { id: 'jelly', name: 'Royal Jelly', cost: 1, kind: 'solo', species: ['bee'], fx: [st('bee', 'atk', 12)], blurb: 'Bee attack +12' },
  // Build a wolf
  teeth:    { id: 'teeth', name: 'Sharper Teeth', cost: 1, kind: 'wolf', repeat: true, species: ['wolf'], fx: [st('wolf', 'atk', 6)], blurb: 'Wolf attack +6' },
  coat:     { id: 'coat', name: 'Thicker Coat', cost: 1, kind: 'wolf', repeat: true, species: ['wolf'], fx: [st('wolf', 'def', 6)], blurb: 'Wolf defense +6' },
  legs:     { id: 'legs', name: 'Longer Legs', cost: 1, kind: 'wolf', repeat: true, species: ['wolf'], fx: [st('wolf', 'spd', 6)], blurb: 'Wolf speed +6' },
  pack:     { id: 'pack', name: 'Pack Tactics', cost: 2, kind: 'wolf', species: ['wolf', 'deer'], fx: [mu('wolf', 'deer', 1.3)], blurb: 'Wolves hunt deer together' },
  fur:      { id: 'fur', name: 'Winter Fur', cost: 2, kind: 'wolf', species: ['wolf', 'bee'], fx: [mu('bee', 'wolf', 0.6)], blurb: 'Stings barely reach' },
  night:    { id: 'night', name: 'Night Hunter', cost: 2, kind: 'wolf', species: ['wolf', 'hawk'], fx: [mu('wolf', 'hawk', 1.3)], blurb: 'Wolves hunt after dark' },
  patience: { id: 'patience', name: 'Patience', cost: 1, kind: 'wolf', species: ['wolf', 'rabbit'], fx: [mu('wolf', 'rabbit', 1.2)], blurb: 'Wait at the burrow' }
};

var COUNTER_OFFERS = ['alarm', 'escort', 'lookout', 'mob', 'stampede', 'angry', 'reinforce', 'antler', 'zoomies', 'hide', 'jelly'];
var BUILD_OFFERS = ['teeth', 'coat', 'legs', 'pack', 'fur', 'night', 'patience'];

// par = cheapest known solution, verified by dev/check.js
var PUZZLES = [
  { id: 1, kind: 'counter', name: 'The Dire Wolf', brief: 'The Dire Wolf wins too much. You have 6 points. Help the others.',
    wolf: 'dire', setup: [], offers: COUNTER_OFFERS, budget: 6, par: 5 },
  { id: 2, kind: 'build', name: 'Build a Wolf', brief: 'Design a wolf that fits in. Start from a weak wolf and spend your points.',
    wolf: 'build', setup: [], offers: BUILD_OFFERS, budget: 7, par: 6 },
  { id: 3, kind: 'counter', name: 'The Night Wolf', brief: 'The Night Wolf is fast and hunts hawks. Teach the others to cope.',
    wolf: 'night', setup: [], offers: COUNTER_OFFERS, budget: 7, par: 5 }
];

var SITUATIONS = ['helped', 'hurt', 'strong', 'weak', 'rivalHelped'];
var PRAYERS = {
  wolf: {
    helped: ['Finally, a patch that notices me. Still too hard.', 'Slightly less unplayable. I will allow it.'],
    hurt: ['Literally unplayable. I had to chase a rabbit for NINE seconds.', 'Who tested this? I was nerfed by a bee.'],
    strong: ['Working as intended. By me.', 'Please do not touch anything. I am thriving.'],
    weak: ['I have been out-meta\'d by a LUNCH.', 'Buff wolves. Not a request.'],
    rivalHelped: ['Rabbits got a buff? Cool. Cool cool cool.', 'Every other animal is overpowered now. Fix it.']
  },
  rabbit: {
    helped: ['the sky has been patched and we are not okay (but better)', 'thank you. we did not know anyone was listening.'],
    hurt: ['please. we have families. so many families.', 'it is worse. how is it worse. we are so small.'],
    strong: ['we are winning?? is this allowed. please do not look at us.', 'we ate the clover. all of it. sorry.'],
    weak: ['we are being eaten. a lot. please.', 'the burrows are full of tiny sad ghosts.'],
    rivalHelped: ['the deer got stronger. we were not asked.', 'everyone got a buff but us. we are fine. we are fine.']
  },
  deer: {
    helped: ['Not to complain, but that was a nice change.', 'We appreciate being seen. Truly.'],
    hurt: ['Not to complain, but I have been eaten four times this week.', 'I am sure it was an oversight. Again.'],
    strong: ['We feel the meadow is in a really healthy place right now.', 'No notes. Well, one note. Fine, no notes.'],
    weak: ['We have raised this before, in the proper channels.', 'I suppose some of us were never going to be fun to play.'],
    rivalHelped: ['How lovely for the hawks. We are very happy for them.', 'Good for them. Good for them, truly.']
  },
  hawk: {
    helped: ['Working as intended.', 'Noted. Improved.'],
    hurt: ['Wings clipped. Bold.', 'Fine. Still better than rabbits.'],
    strong: ['Obviously.', 'Sky main. No further questions.'],
    weak: ['Temporary.', 'Skill issue. Not mine.'],
    rivalHelped: ['Rabbits buffed? Adorable.', 'Let them have it.']
  },
  bee: {
    helped: ['WE have noted the improvement. WE remain cautious.', 'WE are cautiously pleased. WE are always cautious.'],
    hurt: ['WE have discussed this. WE are displeased.', 'WE will be filing a formal sting.'],
    strong: ['WE are thriving. WE did not need your permission.', 'WE are one. WE are many. WE are winning.'],
    weak: ['WE are one swat from collapse.', 'WE demand a hive-wide review.'],
    rivalHelped: ['WE saw what the wolves got. WE are furious.', 'WE do not approve of the giraffe patch. WE do not know why.']
  },
  giraffe: {
    helped: ['Oh, was that for me? Thank you, sorry, late.', 'Something is better, I think. I am quite high up.'],
    hurt: ['Sorry, just seeing this now. What is a meta?', 'Was there a patch? I was looking at a cloud.'],
    strong: ['Everything seems fine from up here.', 'I did not notice anything, but I am winning, apparently.'],
    weak: ['Nobody told me there was a game.', 'It is a bit lonely up here. And low-ranked.'],
    rivalHelped: ['The rabbits look happy. I assume that is good.', 'I think the deer got something? I only just looked down.']
  }
};

var HANDS = ['hand', 'hand2', 'hand3', 'hand4', 'hand5'];

var NWData = { SPECIES: SPECIES, SPECIES_ORDER: SPECIES_ORDER, BASE_MULT: BASE_MULT, WOLF_VARIANTS: WOLF_VARIANTS, SKILLS: SKILLS,
  COUNTER_OFFERS: COUNTER_OFFERS, BUILD_OFFERS: BUILD_OFFERS, PUZZLES: PUZZLES, SITUATIONS: SITUATIONS, PRAYERS: PRAYERS, HANDS: HANDS };
if (typeof module !== 'undefined') module.exports = NWData;

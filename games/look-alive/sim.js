// Look Alive simulation. A field-level, deterministic model: no DOM, no Date, no Math.random.
// Plain script: global LookAlive in a browser (load cards.js first), module.exports in Node. See RULES.md for the model in words.
//
// State per grid cell: native count N, robot count R, food F, two waste chemicals WA and WB, and the quorum signal Q.
// Biology reflexes also read FD, a delayed copy of food (an exponential average, about 3 ticks late), through per-cell noise.
var LookAlive = (function () {
  'use strict';

  var Cards = typeof LookAliveCards !== 'undefined' ? LookAliveCards : require('./cards.js');
  var CHAN = ['growth', 'waste', 'casualties', 'regularity'];
  var baseCache = {};

  // ---------------------------------------------------------------- noise
  function rngNext(s) {  // mulberry32, state in s.rng
    s.rng = (s.rng + 0x6D2B79F5) | 0;
    var t = Math.imul(s.rng ^ (s.rng >>> 15), 1 | s.rng);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  function noise(s) { return (rngNext(s) + rngNext(s) + rngNext(s) - 1.5) * 2; }  // bounded, unit variance
  function hz(i, t, salt) {  // per-cell, per-tick sensing noise in [-1, 1]: a hash, so it needs no stored state
    var x = (Math.imul(i + 1, 374761393) ^ Math.imul(t + 1, 668265263) ^ Math.imul(salt, 1274126177)) | 0;
    x = Math.imul(x ^ (x >>> 13), 1274126177); x ^= x >>> 16;
    return (x >>> 0) / 2147483648 - 1;
  }
  function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }

  // ---------------------------------------------------------------- environment
  function makeCap(n) {  // static food patch map, mean about 1, independent of grid size
    var cap = new Float32Array(n * n), x, y;
    for (y = 0; y < n; y++) for (x = 0; x < n; x++) {
      var u = x / n, v = y / n;
      cap[y * n + x] = 1 + 0.30 * Math.sin(6.2832 * (2 * u + 0.15)) * Math.cos(6.2832 * (v + 0.3)) + 0.12 * Math.sin(6.2832 * (3 * v + u));
    }
    return cap;
  }
  // ---- habitat 2 (D.temp): a temperature per cell, hot down the middle column, cool at the left and right edges (the grid wraps, so the two cool edges meet)
  // (columns come from the mirrored distance, so the two mirrored columns are exactly equal)
  function makeTemp(n, T) {
    var a = new Float32Array(n * n), x, y;
    for (x = 0; x < n; x++) { var u = Math.min(x + 0.5, n - x - 0.5) / n, t = T.cool + (T.hot - T.cool) * (0.5 - 0.5 * Math.cos(2 * Math.PI * u)); for (y = 0; y < n; y++) a[y * n + x] = t; }
    return a;
  }
  function sstep(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  // The natives' bands come from the food map: thin pink streamers above the photosynthesis line, the dense green and orange mat below it, a thin grazed rim under 40 C
  function bandOf(t, B) { return B.hot + (B.mat - B.hot) * (1 - sstep(B.photoLo, B.photoHi, t)) - (B.mat - B.rim) * (1 - sstep(B.grazeLo, B.grazeHi, t)); }
  function makeCapD(n, D) {
    var cap = makeCap(n); if (!D || !D.temp) return cap;
    var tp = makeTemp(n, D.temp), B = D.temp.bands, i;
    for (i = 0; i < n * n; i++) cap[i] *= bandOf(tp[i], B);
    return cap;
  }
  function makeBust(n) {  // how hard the food crash hits each cell, 0.3 (a refuge) to 1.0
    var m = new Float32Array(n * n), x, y;
    for (y = 0; y < n; y++) for (x = 0; x < n; x++) {
      var u = x / n, v = y / n;
      m[y * n + x] = 0.65 + 0.35 * Math.sin(6.2832 * (u + 2 * v + 0.1)) * Math.cos(6.2832 * (2 * u - v));
    }
    return m;
  }
  function diffuse(src, dst, d, n) {
    var x, y, i, up, dn, l, r, c;
    for (y = 0; y < n; y++) {
      up = ((y + n - 1) % n) * n; dn = ((y + 1) % n) * n;
      for (x = 0; x < n; x++) {
        l = (x + n - 1) % n; r = (x + 1) % n; i = y * n + x; c = src[i];
        dst[i] = c + d * ((src[up + x] + src[dn + x] + src[y * n + l] + src[y * n + r]) * 0.25 - c);
      }
    }
  }
  // Event level 0..1: ramps in over `ramp` ticks from event.tick; a bust ramps out again after event.dur ticks, a bloom stays.
  function evLevel(E, tick, ramp) {
    if (!E || E.tick < 0 || tick < E.tick) return 0;
    var up = (tick - E.tick) / ramp; if (up > 1) up = 1;
    if (E.type === 'bust') {
      var down = (E.tick + E.dur + ramp - tick) / ramp;
      return clamp(Math.min(up, down), 0, 1);
    }
    return up;
  }
  function runTicks(P, D) { return D.ticks || P.ticks; }
  // A dish has one event (D.event) or several (D.events, the first of them is also D.event). Their levels combine as the largest.
  function evList(D) { return D.events && D.events.length ? D.events : (D.event && D.event.tick >= 0 ? [D.event] : []); }
  function evLevelD(D, tick, ramp) { var l = evList(D), m = 0; for (var i = 0; i < l.length; i++) { var v = evLevel(l[i], tick, ramp); if (v > m) m = v; } return m; }
  function evNext(D, tick) { var l = evList(D), best = -1; for (var i = 0; i < l.length; i++) if (l[i].tick >= tick && (best < 0 || l[i].tick < best)) best = l[i].tick; return best; }
  function evLastEnd(D, ramp) { var l = evList(D), m = 0; for (var i = 0; i < l.length; i++) { var e = l[i].tick + (l[i].dur || 0) + ramp; if (e > m) m = e; } return m; }

  // ---------------------------------------------------------------- build -> parameters (one place, used by step() and predict())
  var DEFAULT_BUILD = { pace: 4, slop: 0, metabolism: 'respiration', parts: ['clock'], reflex: null };   // the Factory unit

  function isDefault(b) {
    return b.pace === 4 && b.slop === 0 && b.metabolism === 'respiration' && !!b.parts && b.parts.length === 1 && b.parts[0] === 'clock' && !b.reflex;
  }
  // Which suspicion channels a dish switches on (a channel that is off contributes nothing).
  function channelList(D) { return D.suspicion === false ? [] : (D.channels || CHAN); }
  function channelsOn(D) { var l = channelList(D), o = {}; CHAN.forEach(function (c) { o[c] = l.indexOf(c) >= 0; }); if (D.agents) o.motion = l.indexOf('motion') >= 0; return o; }
  // ---- habitat 3 (D.agents): the individual-cell simulation in sim3.js; each hand-off below is a short branch behind D.agents and old dishes never reach it
  function S3() { return typeof LookAliveSim3 !== 'undefined' ? LookAliveSim3 : require('./sim3.js'); }

  function params(P, D, build) {
    var Pr = P.robot, Pn = P.native, b = normalize(build);
    var met = Cards.part(b.metabolism) || Cards.part('respiration');
    var p = {
      pace: b.pace, slop: b.slop, metabolism: met.id,
      paceMult: Pr.paceBase + Pr.pacePer * b.pace,
      slopMult: 1 - Pr.slopCost * b.slop,
      yield: met.fx.yield, mix: met.fx.mix, wasteAmt: met.fx.waste,
      partBirths: 1, tough: 0, deathMult: 1, deathAdd: 0,
      sigma: Pr.sigmaBase + Pr.sigmaPerSlop * b.slop,
      reg: {}, regMachine: 0, quorum: false, radio: false, moveFood: 0,
      bio: null, rule: null, isDefault: isDefault(b), machineParts: 0, ids: [met.id].concat(b.parts || []),
      acidKeep: 1, acidBlock: 0, acid: D.acid || 0, acidRate: 0, nap: null
    };
    if (met.fx.reg) { p.reg[met.id] = met.fx.reg; p.regMachine += met.fx.reg; }
    (b.parts || []).forEach(function (id) {
      var c = Cards.part(id); if (!c) return; var f = c.fx;
      if (f.births) p.partBirths *= (D.acidLoad && f.acid ? Math.pow(f.births, D.acidLoad) : f.births);   // acidLoad: holding off stronger acid costs more births
      if (f.tough) p.tough += f.tough;
      if (f.deathMult != null) p.deathMult *= f.deathMult;
      if (f.deathAdd) p.deathAdd += f.deathAdd;
      if (f.sigma) p.sigma += f.sigma;
      if (f.quorum) p.quorum = true;
      if (f.radio) p.radio = true;
      if (f.moveFood) p.moveFood += f.moveFood;
      if (f.nap) p.nap = f.nap;
      if (f.acid) p.acidKeep *= 1 - f.acid;
      if (f.reg) { p.reg[id] = f.reg; p.regMachine += f.reg; }
    });
    if (D.temp) {   // habitat 2: heat tolerance (C), grip against the current, grazing kept, the cool-side cost of a heat-stable power card
      p.tol = D.temp.base + (met.fx.heat || 0); p.grip = 0; p.grazeKeep = 1; p.coolBelow = met.fx.coolBelow || 0; p.coolMult = met.fx.coolMult || 1;
      (b.parts || []).forEach(function (id) { var c = Cards.part(id); if (!c) return; var f = c.fx; if (f.heat) p.tol += f.heat; if (f.grip) p.grip = Math.max(p.grip, f.grip); if (f.graze) p.grazeKeep *= 1 - f.graze; });
    }
    if (D.acidHurry && p.acidKeep < 1 && p.ids.indexOf('acidproof') < 0) {   // fast dividers have newer, thinner membranes: a pump or a membrane leaks more of the acid as Pace goes up (acid-proof insides have nothing to leak)
      var leak = D.acidHurry * Math.max(0, p.paceMult - (D.acidHurryFrom || 1));
      p.acidKeep = Math.min(1, p.acidKeep + leak);
    }
    p.acidBlock = 1 - p.acidKeep;
    p.acidRate = p.acid * p.acidKeep;                                  // fraction of the colony the acid dissolves each tick
    p.births = p.paceMult * p.yield * p.slopMult * p.partBirths;      // gross division multiplier of the build, before quorum, radio and rules
    p.rate = Pn.rate * p.births;
    p.wasteGap = p.wasteAmt === 0 ? 1 : Math.abs(p.mix - Pn.mixA) / Pn.mixA;
    if (b.reflex && b.reflex.kind === 'bio') p.bio = Cards.bio(b.reflex.id);
    if (b.reflex && b.reflex.kind === 'machine') p.rule = { sensor: b.reflex.sensor, cmp: b.reflex.cmp, value: +b.reflex.value, action: b.reflex.action };
    return p;
  }

  // ---------------------------------------------------------------- body slots (GAMEPLAY-V2 section 12)
  // The simulation keeps the flat build { pace, slop, metabolism, parts, reflex }. The slot shape is
  // { power, envelope: [id, id?], insides, division, signal, motor, reflex } and converts both ways.
  var SLOT_ORDER = ['power', 'envelope', 'insides', 'division', 'signal', 'motor', 'reflex'];
  function slotName(id) { var i = Cards.slotInfo(id); return i ? i.name : id; }
  function cardNm(id) { var c = Cards.part(id) || Cards.bio(id); return c ? c.name : id; }
  function cp(o) { return JSON.parse(JSON.stringify(o)); }
  function slotOfId(id) { var c = Cards.part(id); return c ? c.slot : null; }
  // Accepts a flat build or one with a `slots` object; returns a new flat build.
  function normalize(build) {
    var b = build || {};
    if (!b.slots) return b;
    var sl = b.slots, parts = [];
    var env = sl.envelope ? (Array.isArray(sl.envelope) ? sl.envelope : [sl.envelope]) : [];
    env.forEach(function (id) { if (id) parts.push(id); });
    ['insides', 'division', 'signal', 'motor'].forEach(function (k) { if (sl[k]) parts.push(sl[k]); });
    return { pace: b.pace, slop: b.slop, metabolism: sl.power || null, parts: parts, reflex: sl.reflex ? cp(sl.reflex) : null };
  }
  function toSlots(build) {
    var b = normalize(build), o = { power: b.metabolism || null, envelope: [], insides: null, division: null, signal: null, motor: null, reflex: b.reflex ? cp(b.reflex) : null };
    (b.parts || []).forEach(function (id) {
      var c = Cards.part(id); if (!c) return;
      if (c.slot === 'envelope') o.envelope.push(id); else if (o[c.slot] === null) o[c.slot] = id;
    });
    return o;
  }
  function fromSlots(slots, dials) {
    dials = dials || {};
    return normalize({ pace: dials.pace != null ? dials.pace : 4, slop: dials.slop != null ? dials.slop : 0, slots: slots });
  }
  function factoryOf(D, slotId) { var f = Lv().FACTORY; return f && f[slotId] || null; }
  function Lv() { return typeof LookAliveLevels !== 'undefined' ? LookAliveLevels : require('./levels.js'); }
  function isOpen(D, slotId) { return (D.slots || []).indexOf(slotId) >= 0; }
  // 'open' | 'factory' (locked, factory part fitted) | 'locked'
  function slotState(D, slotId) { return isOpen(D, slotId) ? 'open' : (factoryOf(D, slotId) ? 'factory' : 'locked'); }
  function opensOn(slotId) { var ds = Lv().DISHES; for (var i = 0; i < ds.length; i++) if (ds[i].slots.indexOf(slotId) >= 0) return ds[i].id; return null; }
  // Cards a dish offers for a slot: the dish's allowed list intersected with the slot, only if the slot is open.
  function offered(D, slotId) {
    if (!isOpen(D, slotId)) return [];
    var A = D.allowed;
    if (slotId === 'reflex') return Cards.bySlot('reflex').filter(function (c) { return A.bio.indexOf(c.id) >= 0; });
    return Cards.bySlot(slotId).filter(function (c) { return c.kind === 'metabolism' ? A.metabolism.indexOf(c.id) >= 0 : A.parts.indexOf(c.id) >= 0; });
  }
  // Put the Factory parts back in locked slots and drop anything else that sits in a locked slot (old saved builds).
  function conform(D, build) {
    var b = cp(normalize(build)), sl = toSlots(b);
    SLOT_ORDER.forEach(function (k) {
      if (isOpen(D, k)) return;
      var f = factoryOf(D, k);
      if (k === 'envelope') sl.envelope = [];
      else if (k === 'reflex') sl.reflex = null;
      else sl[k] = f || null;
    });
    var out = fromSlots(sl, b);
    return out;
  }

  function validate(D, build) {
    var pr = [], b = normalize(build) || {}, A = D.allowed;
    function int08(v) { return typeof v === 'number' && isFinite(v) && v === Math.floor(v) && v >= 0 && v <= 8; }
    if (!int08(b.pace)) pr.push('Pace must be a whole number from 0 to 8.');
    if (!int08(b.slop)) pr.push('Sloppiness must be a whole number from 0 to 8.');
    var met = Cards.part(b.metabolism), energy = 0;
    if (!b.metabolism) pr.push('Power cannot be empty.');
    else if (!met || met.slot !== 'power' || A.metabolism.indexOf(b.metabolism) < 0) pr.push('Pick a Power option: ' + A.metabolism.map(cardNm).join(', ') + '.');
    else {
      energy += met.energy;
      if (!isOpen(D, 'power') && b.metabolism !== factoryOf(D, 'power')) pr.push('The Power slot is locked on this dish. ' + cardNm(factoryOf(D, 'power')) + ' stays fitted.');
    }
    var parts = b.parts || [], bySlot = {}, seen = {}, shellIn = false, layers = 0;
    parts.forEach(function (id) {
      var c = Cards.part(id);
      if (!c || c.kind !== 'part') { pr.push('Unknown part "' + id + '".'); return; }
      if (seen[id]) { pr.push(c.slot === 'envelope' ? 'The Envelope already has ' + c.name + '. Use two different layers.' : c.name + ' is used twice.'); return; }
      seen[id] = true; energy += c.energy;
      if (A.parts.indexOf(id) < 0) pr.push(c.name + ' is not available on this dish.');
      var fac = factoryOf(D, c.slot) === id;
      if (!isOpen(D, c.slot) && !fac) pr.push(c.slot === 'motor' ? 'The Motor slot is locked here.' : 'The ' + slotName(c.slot) + ' slot is locked on this dish.');
      (bySlot[c.slot] = bySlot[c.slot] || []).push(c);
      if (c.slot === 'envelope') { layers += Cards.layersOf(c); if (Cards.layersOf(c) > 1) shellIn = true; }
    });
    SLOT_ORDER.forEach(function (k) {
      var list = bySlot[k] || [], info = Cards.slotInfo(k);
      if (k === 'envelope') {
        if (shellIn && list.length > 1) pr.push('The Sealed shell fills both Envelope layers, so nothing else fits there.');
        else if (layers > 2) pr.push('The Envelope already has two layers.');
      } else if (list.length > 1) pr.push('Only one ' + info.name + ' part fits.');
    });
    SLOT_ORDER.forEach(function (k) {   // a locked slot keeps its Factory part
      if (isOpen(D, k)) return;
      var f = factoryOf(D, k);
      if (f && k !== 'power' && !seen[f]) pr.push('The ' + slotName(k) + ' slot is locked on this dish. ' + cardNm(f) + ' stays fitted.');
    });
    if (energy > D.energy) pr.push('Energy ' + energy + ' is over this dish\'s limit of ' + D.energy + '.');
    var rf = b.reflex;
    if (rf) {
      if (!isOpen(D, 'reflex')) pr.push('This dish has no reflex slot.');
      else if (rf.kind === 'bio') { if (A.bio.indexOf(rf.id) < 0) pr.push('Unknown or unavailable reflex "' + rf.id + '".'); }
      else if (rf.kind === 'machine') {
        var sn = Cards.sensor(rf.sensor), ac = Cards.action(rf.action);
        if (!sn || A.sensors.indexOf(rf.sensor) < 0) pr.push('Unknown sensor "' + rf.sensor + '".');
        if (!ac || A.actions.indexOf(rf.action) < 0) pr.push('Unknown action "' + rf.action + '".');
        if (rf.cmp !== 'gt' && rf.cmp !== 'lt') pr.push('Comparison must be gt or lt.');
        if (typeof rf.value !== 'number' || !isFinite(rf.value)) pr.push('The rule needs a number.');
        if (D.agents && rf.otherwise != null && (!Cards.action(rf.otherwise) || A.actions.indexOf(rf.otherwise) < 0)) pr.push('Unknown action "' + rf.otherwise + '".');
      } else pr.push('Reflex kind must be bio or machine.');
    }
    return { ok: pr.length === 0, problems: pr };
  }

  // Fit a card (or a reflex) into its slot. Returns { ok: true, build } or { ok: false, reason }.
  // `layer` (0 or 1) picks the Envelope layer. A card already in another spot of the same slot is swapped out; the energy limit is checked on the result.
  function check(D, nb, loose) {
    var v = validate(D, nb);
    for (var i = 0; i < v.problems.length; i++) if (!/^Pace|^Sloppiness/.test(v.problems[i]) && !(loose && /^Energy/.test(v.problems[i]))) return v.problems[i];
    return null;
  }
  function lockedReason(D, slotId) {
    if (isOpen(D, slotId)) return null;
    if (slotId === 'motor') return 'The Motor slot is locked here.';
    var f = factoryOf(D, slotId), on = opensOn(slotId);
    return f ? 'Factory fitted. Opens on dish ' + on + '.' : 'Opens on dish ' + on + '.';
  }
  function fit(D, build, card, layer, loose) {
    var b = cp(normalize(build)), sl = toSlots(b), id, slotId, c;
    if (card && typeof card === 'object') { slotId = 'reflex'; sl.reflex = cp(card); }
    else {
      id = Cards.canon(card); c = Cards.part(id); var bc = Cards.bio(id);
      if (!c && bc) { slotId = 'reflex'; c = null; } else if (c) slotId = c.slot; else return { ok: false, reason: 'Unknown option.' };
      var lr = lockedReason(D, slotId); if (lr) return { ok: false, reason: lr };
      if (slotId === 'reflex') sl.reflex = { kind: 'bio', id: id };
      else if (slotId === 'power') { if (sl.power === id) return { ok: false, reason: cardNm(id) + ' is already fitted.' }; sl.power = id; }
      else if (slotId === 'envelope') {
        var env = sl.envelope.slice(), L = Cards.layersOf(c);
        if (env.indexOf(id) >= 0) return { ok: false, reason: (layer == null || env[layer] === id) ? c.name + ' is already fitted.' : 'The Envelope already has ' + c.name + '. Use two different layers.' };
        if (L > 1) {
          if (env.length) return { ok: false, reason: 'The Sealed shell fills both Envelope layers, so nothing else fits there. Take the other layer off first.' };
          env = [id];
        } else {
          if (env.length && Cards.layersOf(Cards.part(env[0])) > 1) return { ok: false, reason: 'The Sealed shell fills both Envelope layers, so nothing else fits there. Take it off first.' };
          if (layer != null && layer >= 0 && layer <= 1) {
            if (layer === 1 && !env.length) env = [id]; else env[layer] = id;
            env = env.filter(Boolean);
          } else if (env.length >= 2) return { ok: false, reason: 'The Envelope already has two layers.' };
          else env.push(id);
        }
        sl.envelope = env;
      } else {
        if (sl[slotId] === id) return { ok: false, reason: c.name + ' is already fitted.' };
        sl[slotId] = id;
      }
    }
    var nb = fromSlots(sl, b), why = check(D, nb, loose);
    return why ? { ok: false, reason: why } : { ok: true, build: nb };
  }
  // Clear a slot (for the Envelope, the layer holding `cardId`). Power cannot be emptied.
  function unfit(D, build, slotId, cardId) {
    var b = cp(normalize(build)), sl = toSlots(b);
    var lr = lockedReason(D, slotId); if (lr) return { ok: false, reason: lr };
    if (slotId === 'power') return { ok: false, reason: 'Power cannot be empty.' };
    if (slotId === 'envelope') {
      if (!sl.envelope.length) return { ok: false, reason: 'The Envelope is already empty.' };
      sl.envelope = cardId ? sl.envelope.filter(function (x) { return x !== cardId; }) : [];
    } else if (slotId === 'reflex') sl.reflex = null;
    else sl[slotId] = null;
    var nb = fromSlots(sl, b);
    return { ok: true, build: nb };
  }

  // ---------------------------------------------------------------- state
  function newState(P, D, build, opts, base) {
    var n = opts.n || 64, nn = n * n, T = runTicks(P, D), i, k;
    var s = {
      P: P, D: D, build: build, n: n, T: T, tick: 0, rng: (opts.seed || 12345) | 0, bp: params(P, D, build),
      cap: makeCapD(n, D), bustMap: makeBust(n), temp: D.temp ? makeTemp(n, D.temp) : null,
      N: new Float32Array(nn), R: new Float32Array(nn), F: new Float32Array(nn), WA: new Float32Array(nn), WB: new Float32Array(nn),
      Q: new Float32Array(nn), FD: new Float32Array(nn), Z: new Float32Array(nn), SP: new Float32Array(nn),   // Z: napping units, SP: spores (both are part of the colony but inactive)
      tN: new Float32Array(nn), tR: new Float32Array(nn), tF: new Float32Array(nn), tA: new Float32Array(nn), tB: new Float32Array(nn), tQ: new Float32Array(nn),
      mv: new Float32Array(nn),
      fast: [0, 0, 0, 0], slow: [0, 0, 0, 0], raw: [0, 0, 0, 0], lvl: [0, 0, 0, 0],
      S: 0, stage: 0, emaBR: 0, emaBN: 0, emaRho: 0, attackEma: 0, killNow: 0, shareNow: 0, sharePrev: 0,
      flatRing: new Float32Array(P.suspicion.flatWindow), ringPos: 0, ringN: 0, sloppyFrac: 0, N0: 1,
      chOn: CHAN.map(function (c) { return channelList(D).indexOf(c) >= 0; }),
      settling: false, snapEvery: opts.snapEvery || 0, snaps: [], recordHistory: opts.history !== false, sums: null, fireNow: 0
    };
    if (base) {
      var share = opts.noRobots ? 0 : P.startShare;
      s.N0 = base.mean;
      for (i = 0; i < nn; i++) {
        s.N[i] = base.N[i]; s.F[i] = base.F[i]; s.WA[i] = base.WA[i]; s.WB[i] = base.WB[i]; s.FD[i] = base.F[i];
        s.R[i] = share / (1 - share) * base.N[i];
      }
      if (opts.place && s.temp) {   // checks only: start the colony in the cool half (under 50 C) or the hot half (50 C and up), same total
        var tot0 = 0, tot1 = 0;
        for (i = 0; i < nn; i++) tot0 += s.R[i];
        for (i = 0; i < nn; i++) { if (opts.place === 'cool' ? s.temp[i] >= 40 : s.temp[i] < 55) s.R[i] = 0; tot1 += s.R[i]; }
        for (i = 0; i < nn; i++) s.R[i] *= tot1 > 0 ? tot0 / tot1 : 0;
      }
      s.shareNow = s.sharePrev = share;
    }
    if (s.recordHistory) {
      var H = s.H = { tick: new Uint16Array(T + 1), susp: {} };
      hkOf(D).forEach(function (key) { H[key] = new Float32Array(T + 1); });
      CHAN.forEach(function (c) { H.susp[c] = new Float32Array(T + 1); });
      if (base) record(s);
    }
    return s;
  }
  var HK = ['share', 'nativeShare', 'nat', 'rob', 'food', 'total', 'stage', 'kill', 'fires', 'lead', 'births', 'rate', 'nrate', 'qsig', 'radioMult',
    'rawG', 'rawW', 'rawC', 'rawR', 'regT', 'regM', 'regF', 'regD', 'regR', 'sloppy', 'acid', 'dorm'];
  var HK_T = ['heat', 'graze', 'cool'];   // habitat 2 only: colony fraction lost per tick to heat and to grazers, and the colony fraction under 40 C
  function hkOf(D) { return D && D.temp ? HK.concat(HK_T) : HK; }

  // The settled native-only dish, computed once per grid size and then copied.
  function baseState(P, n, DD) {
    var key = n + ':' + P.settle + ':' + P.native.rate + ':' + P.foodHalf + ':' + P.regrow + ':' + P.native.crowd + (DD && DD.temp ? ':T' + JSON.stringify([DD.temp.hot, DD.temp.cool, DD.temp.bands]) : '');
    if (baseCache[key]) return baseCache[key];
    var D = { allowed: null, event: { type: 'none', tick: -1 }, ticks: P.settle, temp: DD && DD.temp ? { hot: DD.temp.hot, cool: DD.temp.cool, bands: DD.temp.bands, base: 0, settle: true } : null };
    var s = newState(P, D, DEFAULT_BUILD, { n: n, history: false }, null), i, nn = n * n;
    for (i = 0; i < nn; i++) { s.N[i] = 0.9 * s.cap[i]; s.F[i] = 0.35 * s.cap[i]; }
    s.settling = true;
    for (i = 0; i < P.settle; i++) step(s);
    var sum = 0;
    for (i = 0; i < nn; i++) sum += s.N[i];
    baseCache[key] = { N: s.N, F: s.F, WA: s.WA, WB: s.WB, mean: sum / nn };
    return baseCache[key];
  }

  // ---------------------------------------------------------------- one tick
  function sensorValue(s, id, i, ev) {
    switch (id) {
      case 'food': return s.F[i];
      case 'density': return s.R[i] / s.N0;
      case 'native': return s.N[i] / s.N0;
      case 'share': return s.shareNow;
      case 'susp_growth': return s.lvl[0];
      case 'susp_waste': return s.lvl[1];
      case 'temp': return s.temp ? s.temp[i] : 0;
      case 'ttev': { var nx = evNext(s.D, s.tick); return nx < 0 ? (evList(s.D).length ? 0 : 999) : nx - s.tick; }
    }
    return 0;
  }

  function step(s) {
    var P = s.P, D = s.D, n = s.n, nn = n * n, N = s.N, R = s.R, F = s.F, WA = s.WA, WB = s.WB, Q = s.Q, FD = s.FD, cap = s.cap, Z = s.Z, SP = s.SP;
    var Pn = P.native, Pr = P.robot, Ps = P.suspicion, Pq = P.quorum, Pe = P.senses, bp = s.bp, E = D.event, t = s.tick;
    var settling = s.settling, i, k;
    var evl = settling ? 0 : evLevelD(D, t, P.event.ramp);
    var rateN = Pn.rate * (1 + (E.rMult || 0) * evl);
    var crossEv = 1 + (E.aMult || 0) * evl, cross = P.cross * crossEv;
    var bustMap = s.bustMap, bustD = E.type === 'bust' ? E.depth * evl : 0;
    var bustDeath = E.type === 'bust' ? E.bustDeath * evl : 0;
    var tough = bp.tough, killTf = 1 / (1 + Ps.killTough * tough), bustTf = 1 / (1 + 0.15 * tough);
    var zN = settling ? 0 : noise(s), zR = settling ? 0 : noise(s);
    var sigPulse = bp.sigma + Cards.ruleFx.sloppySigma * s.sloppyFrac;
    var mulN = settling ? 1 : 1 + Pn.sigma * zN, mulR = 1 + sigPulse * zR;
    var rule = settling ? null : bp.rule, bio = settling ? null : bp.bio, bioId = bio ? bio.id : '';
    var rfx = Cards.ruleFx, mv = s.mv, anyMove = false;
    var radioM = 1;
    if (bp.radio && !settling) radioM = clamp(1 + P.radio.gain * (P.radio.target - s.shareNow), P.radio.lo, P.radio.hi);
    var killR = 0;
    if (!settling && D.suspicion !== false) killR = Math.min(Ps.killCap, Ps.kill * Math.max(0, s.S - Ps.killFrom));   // gradual: no instant delete
    s.killNow = killR;
    var rbRate = bp.rate;
    // Runaway (abundance dishes): with food everywhere and nothing eating you, dividing feeds on itself. The more of you there are, the faster
    // you divide, in proportion to how eager the Pace dial is (above `runFrom`). Quorum and Radio act on the whole birth rate, so they can hold it.
    var runK = D.abundance && !settling && D.abundance.run ? D.abundance.run * Math.max(0, bp.paceMult - (D.abundance.runFrom || 0)) : 0;
    var useQ = bp.quorum && !settling, qEmit = Pq.emit, qDecay = Pq.decay;
    var moveFoodBase = bp.moveFood, napP = settling ? null : bp.nap, spore = bioId === 'sporulate';
    var ruleToward = rule && rule.action === 'toward', ruleAway = rule && rule.action === 'away';
    var noisyMove = !ruleToward;
    var sumZ = 0, sumSP = 0, sumN = 0, sumR = 0, bN = 0, bR = 0, bR0 = 0, cas = 0, upRt = 0, upNt = 0, killed = 0, fireMass = 0, sloppyMass = 0, qSum = 0;
    var Kh = P.foodHalf, fpb = P.foodPerBirth, mixN = Pn.mixA, wAmt = bp.wasteAmt, mixR = bp.mix;
    var baseDeath = Pr.death * bp.deathMult + bp.deathAdd + (D.abundance && !settling ? D.abundance.death || 0 : 0);
    // habitat 2 (D.temp): heat stress and grazing per cell, the current, and the heat-direction rule actions
    var TT = settling || !D.temp ? null : D.temp, TP = TT ? s.temp : null, tol = TT ? bp.tol : 0, hW = TT ? TT.width : 1, hDie = TT ? TT.heatDeath : 0;
    var gMax = TT ? (TT.graze || 0) * bp.grazeKeep : 0, gTop = TT ? TT.grazeTop : 0, gRamp = TT ? TT.grazeRamp : 1, heatSum = 0, grazeSum = 0, coolSum = 0;
    var gs = n / 16, flowK = TT ? Math.min(0.45, (TT.flow || 0) * gs * (1 - bp.grip)) : 0, hm = null;   // cells whose heat rule fires hold station against the current (see hm)
    if (TT) { hm = s.hm || (s.hm = new Int8Array(n * n)); hm.fill(0); }
    if (TT) s.darkLag = (s.darkLag || 0) + Pe.foodAlpha * (evl - (s.darkLag || 0));
    var o2m = TT && TT.o2Night && (bp.metabolism === 'respiration' || bp.metabolism === 'fuelcell') ? 1 - TT.o2Night * evl : 1;   // nights are anoxic: oxygen users stall
    // A fast-dividing cell burns its stores sooner: on night dishes the dark kills faster above the dish's reference Pace (real: slow-growing bacteria survive sudden starvation longer).
    var hurry = TT && TT.nightHurry ? 1 + TT.nightHurry * Math.max(0, bp.paceMult - (TT.hurryFrom || 1)) : 1;
    var acidD = settling ? 0 : bp.acidRate, ab = D.abundance, crowdR = Pr.crowd * (ab && !settling ? ab.crowd : 1), acidLoss = 0, abFood = ab && !settling ? ab.food || 0 : 0, abCross = ab && !settling ? ab.cross || 1 : 1;

    for (i = 0; i < nn; i++) {
      var nv = N[i], rv = R[i], fv = F[i];
      var phi = fv / (fv + Kh), phiR = abFood > 0 ? fv * abFood / (fv * abFood + Kh) : phi;
      var m = rbRate * mulR * radioM * (runK > 0 ? 1 + runK * (rv / s.N0) : 1), dm = 1, kmul = 1, bmul = 1, mf = moveFoodBase, ma = 0;
      var tmul = 1, heatD = 0, grazeD = 0;
      if (TP) {
        var tc = TP[i], hx = (tc - tol) / hW;
        if (hx > 0) { tmul = hx >= 1 ? 0 : 1 - hx; heatD = hDie * clamp(hx - 0.5, 0, 1.5); }
        if (bp.coolBelow && tc < bp.coolBelow) tmul *= bp.coolMult;
        if (gMax > 0 && tc < gTop) { grazeD = gMax * clamp((gTop - tc) / gRamp, 0, 1); coolSum += rv; }
        m *= tmul * o2m;
      }
      var nfB = 0, m0 = m, bioQ = 1, spIn = 0, spOut = 0, napIn = 0, napOut = 0, zv = napP ? Z[i] : 0, sv = spore ? SP[i] : 0;   // m0: the division rate the immune system measures (biology reflexes and the quorum signal are not counted)
      if (useQ) { var qv = Q[i]; bioQ = 1 - Pq.max * qv / (qv + Pq.half); qSum += qv; }
      if (bio) {
        var lv = 0;
        if (bioId === 'stringent') {
          var fr = FD[i] * (1 + Pe.noise * hz(i, t, 1));
          lv = clamp((bio.fx.foodBelow - fr) / bio.fx.softness, 0, 1);
          bioQ *= 1 - lv; dm *= 1 - lv * (1 - bio.fx.deathMult);
        } else if (bioId === 'sos') {
          var dg = s.attackEma * (1 + Pe.noise * hz(i, t, 2));
          lv = clamp((dg - bio.fx.attackAbove) / bio.fx.softness, 0, 1);
          bioQ *= 1 - lv; kmul *= 1 - bio.fx.repair * lv; dm *= 1 - lv * (1 - bio.fx.deathMult);
        } else if (bioId === 'nightferm') {   // habitat 2: when local food falls (night), live on stored sugar: some births go on, fewer deaths
          var nf = bio.fx, dk = (s.darkLag || 0) * (1 + Pe.noise * hz(i, t, 5));   // senses the dark itself (light, a few ticks late), not hunger
          lv = clamp((dk - nf.darkAbove) / nf.softness, 0, 1);
          nfB = nf.store * lv;   // births from stored sugar: no food used, added after the food limit below
          bioQ *= 1 - lv; dm *= 1 - lv * (1 - nf.deathMult);
        } else if (spore) {
          var fs = FD[i] * (1 + Pe.noise * hz(i, t, 1)), bf = bio.fx;
          lv = clamp((bf.foodBelow - fs) / bf.softness, 0, 1);
          spIn = rv * bf.rate * lv;                                           // starving: part of the colony turns into spores
          spOut = sv * bf.wakeRate * clamp((fs - bf.wakeAbove) / bf.softness, 0, 1);   // slow wake-up, only once food is back
        }
        fireMass += rv * lv;
      }
      if (rule) {
        var v = sensorValue(s, rule.sensor, i, E);
        if (rule.cmp === 'lt' ? v < rule.value : v > rule.value) {
          fireMass += rv;
          switch (rule.action) {
            case 'pause': m0 = 0; dm *= rfx.pauseDeath; break;
            case 'fast': m0 *= rfx.fastMult; dm *= rfx.fastDeath; break;
            case 'sloppy': m0 *= rfx.sloppyBirths; sloppyMass += rv; break;
            case 'toward': mf += rfx.move; break;
            case 'away': ma = rfx.move; break;
            case 'hotter': if (TP) { mf = rfx.heatMove; hm[i] = 1; } break;
            case 'cooler': if (TP) { ma = rfx.heatMove; hm[i] = -1; } break;
          }
        }
      }
      mv[i] = mf; s.tR[i] = ma;     // tR is reused below as scratch only after this loop; ma goes to tN temporarily
      var bn = rateN * phi * nv * mulN, br0 = m0 * phiR * rv, br = br0 * bioQ;
      var upN = bn * fpb, upR = br * fpb, tot = upN + upR;
      var sc = tot > fv ? fv / (tot + 1e-12) : 1;
      bn *= sc; br *= sc; br0 *= sc; upN *= sc; upR *= sc;
      if (nfB > 0) { var bs = m0 * nfB * rv; br += bs; br0 += bs; }
      var casCell = nv * Pn.crowd * cross * abCross * rv;
      var deathN = nv * (Pn.death + Pn.crowd * nv) + casCell;
      if (napP) {
        napIn = rv * napP.enter; napOut = zv * napP.wake * clamp((FD[i] - napP.wakeLo) / (napP.wakeHi - napP.wakeLo), 0, 1);
      }
      var deathR = rv * (baseDeath + crowdR * (rv + Pr.cross * crossEv * nv) + bustDeath * bustTf * bmul * hurry) * dm + rv * acidD;
      acidLoss += rv * acidD;
      if (TP) { deathR += rv * (heatD + grazeD); heatSum += rv * heatD; grazeSum += rv * grazeD; }
      var killCell = rv * killR * killTf * kmul;
      var nN = nv + bn - deathN; if (nN < 0) nN = 0;
      var nR = rv + br - deathR - killCell - napIn + napOut - spIn + spOut; if (nR < 0) nR = 0;
      if (napP) { var nZ = zv + napIn - napOut - zv * (baseDeath * napP.death + acidD + heatD + grazeD); Z[i] = nZ < 0 ? 0 : nZ; sumZ += Z[i]; }
      if (spore) { SP[i] = sv + spIn - spOut - sv * grazeD; sumSP += SP[i]; }   // grazers swallow spores too (habitat 2); heat does not hurt them
      var nF = fv - upN - upR + P.regrow * (cap[i] * (1 - bustD * bustMap[i]) - fv); if (nF < 0) nF = 0;
      var eR = upR * wAmt;
      WA[i] = WA[i] * (1 - P.wasteDecay) + upN * mixN + eR * mixR;
      WB[i] = WB[i] * (1 - P.wasteDecay) + upN * (1 - mixN) + eR * (1 - mixR);
      if (useQ) Q[i] = qv * (1 - qDecay) + qEmit * rv;
      N[i] = nN; R[i] = nR; F[i] = nF;
      sumN += nv; sumR += rv; bN += bn; bR += br; bR0 += br0; cas += casCell; killed += killCell; upRt += upR; upNt += upN;
      if (mf > 0 || ma > 0) anyMove = true;
    }
    s.fireNow = sumR > 1e-9 ? fireMass / sumR : 0;
    var sloppyFrac = sumR > 1e-9 ? sloppyMass / sumR : 0;

    // ---- movement: some units drift to the richest (food) or emptiest (away) neighbour ----
    if (anyMove || flowK > 0) {
      var tR = s.tR, tN = s.tN, nb = [0, 0, 0, 0], xx, yy, best, bv, cv, mvf, mva;
      // tR currently holds the 'away' fractions. Compute moves into tN, then fold in.
      for (i = 0; i < nn; i++) tN[i] = 0;
      for (i = 0; i < nn; i++) {
        mvf = mv[i]; mva = tR[i];
        if (R[i] <= 0 || (mvf <= 0 && mva <= 0 && flowK <= 0)) continue;
        xx = i % n; yy = (i - xx) / n;
        nb[0] = ((yy + n - 1) % n) * n + xx; nb[1] = ((yy + 1) % n) * n + xx; nb[2] = yy * n + (xx + n - 1) % n; nb[3] = yy * n + (xx + 1) % n;
        if (hm && hm[i]) {   // the heat compass (a firing rule): toward the hottest (or coolest) neighbour, exact, no noise; the cell holds station against the current
          var hd = hm[i], mvh = Math.min(0.45, (hd > 0 ? mvf : mva) * gs);
          if (mvh > 0) { best = nb[0]; bv = TP[best]; for (k = 1; k < 4; k++) { cv = TP[nb[k]]; if (hd > 0 ? cv > bv : cv < bv) { bv = cv; best = nb[k]; } } if (hd > 0 ? bv > TP[i] : bv < TP[i]) { var qh = R[i] * mvh; tN[i] -= qh; tN[best] += qh; } }
          continue;
        }
        if (flowK > 0) { var dn2 = TP[nb[2]] < TP[nb[3]] ? nb[2] : nb[3]; if (TP[dn2] < TP[i]) { var q0 = R[i] * flowK; tN[i] -= q0; tN[dn2] += q0; } }   // the current carries cells downstream, to the cooler side
        if (mvf > 0) {
          best = -1; bv = noisyMove ? FD[i] * (1 + Pe.noise * hz(i, t, 3)) * 1.02 : F[i];
          for (k = 0; k < 4; k++) {
            cv = noisyMove ? FD[nb[k]] * (1 + Pe.noise * hz(nb[k], t, 4)) : F[nb[k]];
            if (cv > bv) { bv = cv; best = nb[k]; }
          }
          if (best >= 0) { var q1 = R[i] * mvf; tN[i] -= q1; tN[best] += q1; }
        }
        if (mva > 0) {
          best = nb[0]; bv = N[best];
          for (k = 1; k < 4; k++) if (N[nb[k]] < bv) { bv = N[nb[k]]; best = nb[k]; }
          if (bv < N[i]) { var q2 = R[i] * mva; tN[i] -= q2; tN[best] += q2; }
        }
      }
      for (i = 0; i < nn; i++) { R[i] += tN[i]; if (R[i] < 0) R[i] = 0; }
    }

    // ---- diffusion (periodic edges) and the delayed food reading ----
    var tmp;
    diffuse(N, s.tN, P.popDiffuse, n); tmp = s.N; s.N = s.tN; s.tN = tmp;
    diffuse(R, s.tR, TT ? Math.min(0.9, (TT.rDiffuse != null ? TT.rDiffuse : P.popDiffuse) * gs * gs) * (1 - TT.gripDiffuse * bp.grip) : P.popDiffuse, n); tmp = s.R; s.R = s.tR; s.tR = tmp;
    diffuse(F, s.tF, P.foodDiffuse, n); tmp = s.F; s.F = s.tF; s.tF = tmp;
    diffuse(WA, s.tA, P.wasteDiffuse, n); tmp = s.WA; s.WA = s.tA; s.tA = tmp;
    diffuse(WB, s.tB, P.wasteDiffuse, n); tmp = s.WB; s.WB = s.tB; s.tB = tmp;
    if (useQ) { diffuse(Q, s.tQ, Pq.diffuse, n); tmp = s.Q; s.Q = s.tQ; s.tQ = tmp; }
    var Fn = s.F, FDn = s.FD, al = Pe.foodAlpha;
    for (i = 0; i < nn; i++) FDn[i] += al * (Fn[i] - FDn[i]);
    s.tick++;
    if (settling) return;

    // ---- shares ----
    var tN2 = 0, tR2 = 0, tF2 = 0, Nn = s.N, Rn = s.R, tDo = sumZ + sumSP;
    for (i = 0; i < nn; i++) { tN2 += Nn[i]; tR2 += Rn[i]; tF2 += Fn[i]; }
    tR2 += tDo;                                   // napping units and spores are still part of the colony
    var shareNow = tN2 + tR2 > 0 ? tR2 / (tN2 + tR2) : 0;
    var dShare = (shareNow - s.sharePrev) / Math.max(shareNow, 0.02);
    s.sharePrev = s.shareNow; s.shareNow = shareNow;
    s.flatRing[s.ringPos] = dShare; s.ringPos = (s.ringPos + 1) % s.flatRing.length; if (s.ringN < s.flatRing.length) s.ringN++;
    s.sloppyFrac = sloppyFrac;
    s.radioNow = radioM; s.qNow = qSum / nn;
    if (TT) { s.heatNow = sumR > 1e-9 ? heatSum / sumR : 0; s.grazeNow = sumR > 1e-9 ? grazeSum / sumR : 0; s.coolNow = sumR > 1e-9 ? coolSum / sumR : 0; }
    s.sums = { dorm: tR2 > 0 ? tDo / tR2 : 0, N: tN2, R: tR2, F: tF2, births: bR, cas: cas, acid: sumR > 1e-9 ? acidLoss / sumR : 0, rate: sumR > 1e-9 ? bR / sumR : 0, nrate: sumN > 1e-9 ? bN / sumN : 0 };
    s.attackEma += Pe.attackAlpha * ((killR * killTf + bustDeath * bustTf) - s.attackEma);

    if (D.suspicion === false) {
      s.S = 0; s.stage = 0;
      if (s.recordHistory) record(s);
      if (s.snapEvery && s.tick % s.snapEvery === 0) s.snaps.push(snapshot(s));
      return;
    }

    // ---- suspicion: four raw channels, then a dead zone, a soft cap, and fast plus slow memory ----
    var rateRobot = sumR > 1e-6 ? bR0 / sumR : 0, rateNat = sumN > 1e-6 ? bN / sumN : 0;
    if (s.tick === 1) { s.emaBR = rateRobot; s.emaBN = rateNat; }
    s.emaBR += 0.25 * (rateRobot - s.emaBR); s.emaBN += 0.25 * (rateNat - s.emaBN);
    var rho = upRt + upNt > 1e-9 ? upRt / (upRt + upNt) : 0;
    s.emaRho += 0.25 * (rho - s.emaRho);
    var present = tR2 / nn > P.extinct;
    var raw = s.raw;
    var lg = present && s.emaBN > 1e-9 ? Math.log((s.emaBR + 1e-9) / s.emaBN) : 0;
    raw[0] = lg >= 0 ? lg / Ps.growthScale : Math.min(Ps.growthSlowMax, -lg / Ps.growthScaleSlow);   // dividing faster than natives is the louder tell
    raw[1] = present ? Ps.wasteScale * bp.wasteGap : 0;
    raw[2] = present ? s.emaRho / Ps.casualtyScale : 0;
    // regularity: five sources, all measured on the colony
    var sig = bp.sigma + rfx.sloppySigma * sloppyFrac;
    var rT = Ps.regTiming * Math.max(0, 1 - sig / Pn.sigma);
    var rM = bp.regMachine, rF = 0, rD = bp.isDefault ? Ps.regFactory : 0, rR = 0;
    if (s.ringN >= 8) {
      var m1 = 0, v1 = 0, nr = s.ringN;
      for (k = 0; k < nr; k++) m1 += s.flatRing[k];
      m1 /= nr;
      for (k = 0; k < nr; k++) v1 += (s.flatRing[k] - m1) * (s.flatRing[k] - m1);
      rF = Ps.regFlat * clamp(1 - Math.sqrt(v1 / nr) / Ps.flatRef, 0, 1);
    }
    if (bp.rule) rR = Ps.regRuleInstall + Ps.regRuleFire * s.fireNow;
    raw[3] = present ? rT + rM + rF + rD + rR : 0;
    s.regSrc = [rT, rM, rF, rD, rR];
    var S = 0;
    for (k = 0; k < 4; k++) {
      if (!s.chOn[k]) { raw[k] = 0; s.fast[k] = s.slow[k] = s.lvl[k] = 0; continue; }
      var ex = raw[k] - Ps.deadzone[k]; if (ex < 0) ex = 0;
      ex = Ps.cap[k] * Math.tanh(ex / Ps.cap[k]);
      s.fast[k] = s.fast[k] * Ps.fastKeep + (1 - Ps.fastKeep) * ex;
      s.slow[k] = s.slow[k] * Ps.slowKeep + Ps.slowGain * ex;
      s.lvl[k] = s.fast[k] + s.slow[k];
      S += Ps.weight[k] * (k === 3 && D.regWeight ? D.regWeight : 1) * s.lvl[k];
    }
    s.S = S;
    s.stage = S >= Ps.stage[2] ? 3 : S >= Ps.stage[1] ? 2 : S >= Ps.stage[0] ? 1 : 0;
    if (s.recordHistory) record(s);
    if (s.snapEvery && s.tick % s.snapEvery === 0) s.snaps.push(snapshot(s));
  }

  function record(s) {
    var H = s.H, t = s.tick, nn = s.n * s.n, k, Ps = s.P.suspicion, sm = s.sums;
    var sn = 0, sr = 0, sf = 0, sd = 0, i;
    for (i = 0; i < nn; i++) { sn += s.N[i]; sr += s.R[i] + s.Z[i] + s.SP[i]; sd += s.Z[i] + s.SP[i]; sf += s.F[i]; }
    H.tick[t] = t;
    H.nat[t] = sn / nn; H.rob[t] = sr / nn; H.dorm[t] = sr > 0 ? sd / sr : 0; H.food[t] = sf / nn;
    var sh = sn + sr > 0 ? sr / (sn + sr) : 0;
    H.share[t] = sh; H.nativeShare[t] = 1 - sh;
    var best = -1, bw = 0.05;
    for (k = 0; k < 4; k++) {
      var w = Ps.weight[k] * (k === 3 && s.D.regWeight ? s.D.regWeight : 1) * s.lvl[k];
      H.susp[CHAN[k]][t] = w;
      if (w > bw) { bw = w; best = k; }
    }
    H.lead[t] = best; H.total[t] = s.S; H.stage[t] = s.stage; H.kill[t] = s.killNow; H.fires[t] = s.fireNow;
    H.rawG[t] = s.raw[0]; H.rawW[t] = s.raw[1]; H.rawC[t] = s.raw[2]; H.rawR[t] = s.raw[3];
    if (s.regSrc) { H.regT[t] = s.regSrc[0]; H.regM[t] = s.regSrc[1]; H.regF[t] = s.regSrc[2]; H.regD[t] = s.regSrc[3]; H.regR[t] = s.regSrc[4]; }
    if (sm) { H.acid[t] = sm.acid; H.births[t] = sm.births / nn; H.rate[t] = s.emaBR; H.nrate[t] = sm.nrate; }
    if (H.heat) { H.heat[t] = s.heatNow || 0; H.graze[t] = s.grazeNow || 0; H.cool[t] = s.coolNow || 0; }
    H.qsig[t] = s.qNow || 0; H.radioMult[t] = s.radioNow || 1; H.sloppy[t] = s.sloppyFrac;
  }

  // ---------------------------------------------------------------- snapshots
  var ARR = ['N', 'R', 'F', 'WA', 'WB', 'Q', 'FD', 'Z', 'SP'];
  var SCAL = ['tick', 'rng', 'S', 'stage', 'emaBR', 'emaBN', 'emaRho', 'attackEma', 'killNow', 'shareNow', 'sharePrev', 'ringPos', 'ringN', 'sloppyFrac', 'fireNow', 'radioNow', 'qNow'];
  var SCAL_T = ['darkLag', 'heatNow', 'grazeNow', 'coolNow'];   // habitat 2 only
  function snapshot(s) {
    var o = { tick: s.tick, st: { fast: s.fast.slice(), slow: s.slow.slice(), raw: s.raw.slice(), lvl: s.lvl.slice(), flatRing: new Float32Array(s.flatRing),
      sums: s.sums ? JSON.parse(JSON.stringify(s.sums)) : null, regSrc: s.regSrc ? s.regSrc.slice() : null } };
    var k, nn = s.n * s.n, wa = new Float32Array(nn);
    for (k = 0; k < ARR.length; k++) o.st[ARR[k]] = new Float32Array(s[ARR[k]]);
    for (k = 0; k < SCAL.length; k++) o.st[SCAL[k]] = s[SCAL[k]];
    if (s.temp) for (k = 0; k < SCAL_T.length; k++) o.st[SCAL_T[k]] = s[SCAL_T[k]];
    for (k = 0; k < nn; k++) wa[k] = s.WA[k] + s.WB[k];
    var rb = new Float32Array(nn); for (k = 0; k < nn; k++) rb[k] = s.R[k] + s.Z[k] + s.SP[k];
    o.robot = rb; o.native = o.st.N; o.food = o.st.F; o.waste = wa; o.quorum = o.st.Q;
    return o;
  }
  function resumeState(run, snapIndex) {
    var sn = run.snaps[snapIndex], P = run.P, D = run.dish, st = sn.st, k;
    var s = newState(P, D, run.build, { n: run.n, history: true, snapEvery: 0, seed: 1 }, null);
    s.cap = makeCapD(s.n, D); s.bustMap = makeBust(s.n); s.N0 = baseState(P, s.n, D).mean;
    for (k = 0; k < ARR.length; k++) s[ARR[k]].set(st[ARR[k]]);
    for (k = 0; k < SCAL.length; k++) s[SCAL[k]] = st[SCAL[k]];
    if (s.temp) for (k = 0; k < SCAL_T.length; k++) s[SCAL_T[k]] = st[SCAL_T[k]];
    s.fast = st.fast.slice(); s.slow = st.slow.slice(); s.raw = st.raw.slice(); s.lvl = st.lvl.slice(); s.flatRing = new Float32Array(st.flatRing);
    s.sums = st.sums ? JSON.parse(JSON.stringify(st.sums)) : null; s.regSrc = st.regSrc ? st.regSrc.slice() : null;
    var H = s.H, G = run.H, e = sn.tick + 1;
    H.tick.set(G.tick.subarray(0, e));
    hkOf(D).forEach(function (key) { H[key].set(G[key].subarray(0, e)); });
    CHAN.forEach(function (c) { H.susp[c].set(G.susp[c].subarray(0, e)); });
    return s;
  }

  function finish(s, extra) {
    while (s.tick < s.T) step(s);
    var run = { P: s.P, dish: s.D, channels: channelsOn(s.D), build: s.build, bp: s.bp, n: s.n, T: s.T, H: s.H, snaps: s.snaps, _s: s };
    if (extra) for (var key in extra) run[key] = extra[key];
    run.v = s.H ? verdict(run) : null;
    return run;
  }

  // ---------------------------------------------------------------- public API
  function play(P, D, build, opts) {
    opts = opts || {}; build = normalize(build);
    if (D.agents) return S3().gameRun(D, build, { P: P, bp: params(P, D, build), channels: channelsOn(D), record: opts.record !== false });   // n and snapEvery do not apply: the grid is 64 and a snapshot is every 10 ticks
    var s = newState(P, D, build, opts, baseState(P, opts.n || 64, D));
    if (s.snapEvery) s.snaps.push(snapshot(s));
    return finish(s);
  }
  // Re-run from a snapshot to the end (used to prove determinism).
  function resume(run, snapIndex) {
    if (run.agents) return play(run.P, run.dish, run.build, {});   // individual cells replay from the seed
    var s = resumeState(run, snapIndex);
    return finish(s);
  }
  function restore(run, snapIndex) {
    if (run.agents) return S3().restoreSnap(run, snapIndex);
    var sn = run.snaps[snapIndex], nn = run.n * run.n;
    var wa = new Float32Array(nn), i;
    for (i = 0; i < nn; i++) wa[i] = sn.st.WA[i] / Math.max(1e-9, sn.st.WA[i] + sn.st.WB[i]);
    return { tick: sn.tick, n: run.n, robot: new Float32Array(sn.robot), native: new Float32Array(sn.st.N), food: new Float32Array(sn.st.F),
      waste: new Float32Array(sn.waste), wasteMix: wa, quorum: new Float32Array(sn.st.Q) };
  }

  function verdict(run) {
    if (run.agents) return run.v;
    var P = run.P, D = run.dish, H = run.H, T = run.T, band = D.band, t;
    var inBand = 0, cnt = 0, maxStage = 0, exposedAt = -1, peakS = 0;
    for (t = band.warm; t <= T; t++) { cnt++; if (H.share[t] >= band.lo && H.share[t] <= band.hi) inBand++; }
    for (t = 1; t <= T; t++) {
      if (H.stage[t] > maxStage) maxStage = H.stage[t];
      if (H.stage[t] === 3 && exposedAt < 0) exposedAt = t;
      if (H.total[t] > peakS) peakS = H.total[t];
    }
    var alive = H.rob[T] > P.extinct && H.nat[T] > P.extinct;
    var frac = cnt ? inBand / cnt : 0;
    var win = D.aliveOnly ? alive : (alive && frac >= band.need && maxStage < 3);
    return { win: win, alive: alive, bandFrac: frac, maxStage: maxStage, peakS: peakS, finalShare: H.share[T], exposedAt: exposedAt };
  }

  // Natives alone: their history and the normal ranges a build is measured against.
  function scout(P, D, opts) {
    opts = opts || {};
    var n = opts.n || 64;
    var s = newState(P, D, DEFAULT_BUILD, { n: n, history: true, noRobots: true }, baseState(P, n, D));
    s.D = D; s.bp = params(P, {}, DEFAULT_BUILD);
    while (s.tick < s.T) step(s);
    var H = s.H, T = s.T, t, pre = D.event.tick > 0 ? D.event.announce : T;
    var rates = [];
    for (t = 20; t <= pre; t++) rates.push(H.nrate[t]);
    var sorted = rates.slice().sort(function (a, b) { return a - b; });
    var lo = sorted[Math.floor(sorted.length * 0.05)], hi = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.95))];
    var mean = rates.reduce(function (a, b) { return a + b; }, 0) / rates.length, vlo = 9, vhi = 0, w = 20, k;
    for (t = 20 + w; t <= pre; t++) {
      var m = 0, v = 0;
      for (k = 0; k < w; k++) m += H.nrate[t - k];
      m /= w;
      for (k = 0; k < w; k++) v += (H.nrate[t - k] / m - 1) * (H.nrate[t - k] / m - 1);
      v = Math.sqrt(v / w);
      if (v < vlo) vlo = v; if (v > vhi) vhi = v;
    }
    var hist = { tick: Array.prototype.slice.call(H.tick), density: Array.prototype.map.call(H.nat, function (x) { return x / s.N0; }),
      rate: Array.prototype.slice.call(H.nrate), food: Array.prototype.slice.call(H.food), wasteMix: P.native.mixA };
    return { history: hist, n: n, T: T, snap: { native: new Float32Array(s.N), food: new Float32Array(s.F), waste: new Float32Array(s.WA) },
      normal: { rate: [lo, hi], mean: mean, wasteMix: P.native.mixA, variance: [vlo, vhi], share: [D.band.lo, D.band.hi] } };
  }


  // ================================================================ autopsy
  function pct(x) { return Math.round(x * 100) + '%'; }
  function avg(a, f, t) { var s = 0, c = 0; f = Math.max(1, f); for (var i = f; i <= t; i++) { s += a[i]; c++; } return c ? s / c : 0; }
  // The figure the guards report for a take-over: the peak share, rounded down to a whole 10% (never below the band ceiling).
  function passed(H, band) { var pk = 0; for (var i = 0; i < H.share.length; i++) if (H.share[i] > pk) pk = H.share[i]; return pct(pk >= 0.2 ? Math.floor(pk * 10 + 1e-9) / 10 : band.hi); }
  function nm(id) { var c = Cards.part(id); return c ? c.name : id; }
  var REG_PHRASE = {
    clock: function (f) { return 'your Sync pulse had every unit dividing in unison from tick ' + f; },
    radio: function (f) { return 'your Radio mesh held your share perfectly flat from tick ' + f + ', and nothing natural does that'; },
    copier: function (f) { return 'your Perfect copier meant nothing ever died from tick ' + f; },
    repair: function (f) { return 'your Self-repair rebuilt damaged units in a way no cell can, from tick ' + f; },
    shell: function (f) { return 'your Sealed shell is plainly a machine part, from tick ' + f; },
    fuelcell: function (f) { return 'your Fuel cell is plainly a machine part, from tick ' + f; }
  };
  // The build's biggest births lever (up) or drag (down), as a card name, for growth and size explanations.
  function growthCulprit(run, up) {
    var bp = run.bp, items = [], b = run.build;
    items.push({ id: 'pace', name: 'your Pace dial (' + b.pace + ')', v: Math.log(bp.paceMult) });
    items.push({ id: bp.metabolism, name: nm(bp.metabolism), v: Math.log(bp.yield) });
    if (bp.slop) items.push({ id: 'slop', name: 'your Sloppiness dial (' + bp.slop + ')', v: Math.log(bp.slopMult) });
    (b.parts || []).forEach(function (id) { var c = Cards.part(id); if (c && c.fx.births) items.push({ id: id, name: c.name, v: Math.log(c.fx.births) }); });
    if (bp.rule && bp.rule.action === 'fast') items.push({ id: 'rule', name: 'your rule "' + Cards.ruleText(bp.rule) + '"', v: Math.log(Cards.ruleFx.fastMult) });
    var best = null;
    items.forEach(function (it) { if (up ? it.v > 0 : it.v < 0) { if (!best || (up ? it.v > best.v : it.v < best.v)) best = it; } });
    return best;
  }

  function autopsyBase(run) {
    var v = run.v || verdict(run), H = run.H, T = run.T, D = run.dish, band = D.band, bp = run.bp, b = run.build, t, k;
    if (v.win) return null;
    var res = { cause: '', channel: -1, from: 0, to: 0, text: '', second: null, dominance: 1, card: null };
    // The acid: an unprotected (or half-protected) colony that dies out has been dissolved.
    if ((D.acid || 0) > 0 && bp.acidRate >= 0.03 && !v.alive) {
      var td = T; for (t = 1; t <= T; t++) if (H.rob[t] <= run.P.extinct) { td = t; break; }
      var prot = (b.parts || []).filter(function (id) { var c = Cards.part(id); return c && c.fx.acid; });
      res.cause = 'acid'; res.from = 1; res.to = td; res.dominance = 1;
      if (prot.length) {
        res.card = prot[0];
        res.text = 'Dissolved by tick ' + td + ': your ' + nm(prot[0]) + ' keeps out most of the acid, but not enough of it, and the colony could not replace what the acid took.';
      } else res.text = 'Dissolved by tick ' + td + ': nothing in your build keeps the acid out.';
      return res;
    }
    // Habitat 2: a colony the heat killed is cooked, not starved.
    if (D.temp && H.heat && !v.alive && heatLossOf(H) >= ST.heatSafe) {
      var tk = T; for (t = 1; t <= T; t++) if (H.rob[t] <= run.P.extinct) { tk = t; break; }
      res.cause = 'cooked'; res.from = 1; res.to = tk; res.dominance = 1; res.card = null;
      res.text = 'Cooked by tick ' + tk + ': your cell tolerates about ' + Math.round(bp.tol) + ' C, and the water here reaches ' + D.temp.hot + ' C.';
      return res;
    }
    var te = v.exposedAt, E = D.event, below = 0, above = 0, tf = -1;
    for (t = band.warm; t <= T; t++) { if (H.share[t] < band.lo) below++; else if (H.share[t] > band.hi) above++; }
    for (t = T; t >= band.warm; t--) { if (H.share[t] < band.lo) tf = t; else break; }
    // The immune response kills gradually, so a colony can be bled out before the stage 3 line: count that as exposure too.
    var maxKill = 0, firstKill = -1;
    for (t = 1; t <= T; t++) { if (H.kill[t] > maxKill) maxKill = H.kill[t]; if (firstKill < 0 && H.kill[t] >= 0.008) firstKill = t; }
    if (te < 0 && above <= below && below > 0 && maxKill >= 0.012 && firstKill > 0) te = firstKill;
    var killBefore = 0; for (t = 1; t <= (tf > 0 ? tf : T); t++) if (H.kill[t] > killBefore) killBefore = H.kill[t];
    var starvedBefore = te > 0 && tf > 0 && tf < te - 10 && killBefore < 0.006;
    if (te > 0 && !starvedBefore) {
      var sums = [0, 0, 0, 0], tot = 0, ck = CHAN;
      for (k = 0; k < 4; k++) { for (t = 1; t <= te; t++) sums[k] += H.susp[ck[k]][t]; tot += sums[k]; }
      var best = 0; for (k = 1; k < 4; k++) if (sums[best] < sums[k]) best = k;
      var second = -1; for (k = 0; k < 4; k++) if (k !== best && (second < 0 || sums[k] > sums[second])) second = k;
      var from = 1; for (t = 1; t <= te; t++) if (H.susp[ck[best]][t] > 0.3) { from = t; break; }
      var span = Math.min(te, from + 20);
      res.cause = 'exposed:' + ck[best]; res.channel = best; res.from = from; res.to = te; res.dominance = tot > 0 ? sums[best] / tot : 1;
      var why = '';
      if (best === 3) {
        var src = [avg(H.regT, from, span), 0, avg(H.regF, from, span), avg(H.regD, from, span), avg(H.regR, from, span)];
        var mach = null, mv = 0;
        for (var id in bp.reg) if (bp.reg[id] > mv) { mv = bp.reg[id]; mach = id; }
        src[1] = bp.regMachine;
        var bs = 0; for (k = 1; k < 5; k++) if (src[k] > src[bs]) bs = k;
        // the timing term is always present; only blame it when nothing else is bigger
        if (bp.isDefault || (bs === 3 && src[3] > 0)) { why = 'you changed nothing, so every unit divides on the factory schedule from tick 1'; res.card = 'factory'; }
        else if (bs === 1 && mach) { why = REG_PHRASE[mach] ? REG_PHRASE[mach](from) : 'your ' + nm(mach) + ' is plainly a machine part, from tick ' + from; res.card = mach; }
        else if (bs === 2 && src[2] > 0.3) { why = 'your share line was too flat' + (bp.radio ? ' (your Radio mesh)' : '') + ' from tick ' + from; res.card = bp.radio ? 'radio' : null; }
        else if (bs === 4 && src[4] > 0) { why = 'your rule "' + Cards.ruleText(bp.rule) + '" fired in ' + pct(avg(H.fires, from, span)) + ' of units, which no cell could do, from tick ' + from; res.card = 'rule'; }
        else { why = 'every unit divided on a near-perfect schedule from tick ' + from + ' (Sloppiness only ' + b.slop + ')'; res.card = 'slop'; }
      } else if (best === 0) {
        var nr = avg(H.nrate, Math.max(1, from - 3), from + 3) || 1, ratio = avg(H.rate, from, span) / nr;
        var cul = growthCulprit(run, ratio >= 1);
        why = 'you were dividing ' + pct(Math.abs(ratio - 1)) + (ratio >= 1 ? ' faster' : ' slower') + ' than the natives from tick ' + from + (cul ? ', mostly from ' + cul.name : '');
        res.card = cul ? cul.name : null;
      } else if (best === 1) {
        if (bp.wasteAmt === 0) { why = 'your Fuel cell left no waste in a place where everyone leaves a trail, from tick ' + from; res.card = 'fuelcell'; }
        else { why = 'your ' + nm(bp.metabolism) + ' leaves a different waste trail from the natives\' (' + pct(bp.wasteGap) + ' off), and here everyone smells the same'; res.card = bp.metabolism; }
      } else if (D.abundance) {
        var pk = 0; for (t = 1; t <= te; t++) if (H.share[t] > pk) pk = H.share[t];
        why = 'your share passed ' + passed(H, band) + ' and the guards noticed';
        res.card = null; res.takeover = true;
      } else {
        var cu2 = growthCulprit(run, true);
        why = 'you took too much food from the natives (your share reached ' + pct(avg(H.share, from, span)) + ') from tick ' + from + (cu2 ? ', mostly from ' + cu2.name : '');
        res.card = cu2 ? cu2.name : null;
      }
      // One card can be the cause behind several channels (a Fuel cell raises Growth, Waste and Regularity at once): count blame per card too.
      var cardOf = [], cs = {}, topId = null;
      var cg = growthCulprit(run, true), cgs = growthCulprit(run, false), g0 = avg(H.rate, from, span) / (avg(H.nrate, Math.max(1, from - 3), from + 3) || 1);
      cardOf[0] = (g0 >= 1 ? cg : cgs) ? (g0 >= 1 ? cg : cgs).id : 'pace';
      cardOf[1] = bp.metabolism; cardOf[2] = cg ? cg.id : 'pace';
      cardOf[3] = bp.isDefault ? 'factory' : (res.card && best === 3 ? res.card : (function () { var m = null, mv2 = 0; for (var q in bp.reg) if (bp.reg[q] > mv2) { mv2 = bp.reg[q]; m = q; } return m || 'slop'; })());
      for (k = 0; k < 4; k++) cs[cardOf[k]] = (cs[cardOf[k]] || 0) + sums[k];
      for (var cid in cs) if (!topId || cs[cid] > cs[topId]) topId = cid;
      res.cardShare = tot > 0 ? cs[topId] / tot : 1; res.topCard = topId;
      if (res.cardShare > res.dominance) res.dominance = res.cardShare;
      res.text = (res.takeover ? 'Took over the dish by tick ' + te : v.exposedAt > 0 ? 'Exposed at tick ' + te : 'The guards closed in from tick ' + te) + ': ' + why + '.' +
        (res.takeover ? '' : ' The locals check badges, and a border line formed around your colony.');
      if (second >= 0 && tot > 0 && sums[second] / tot >= 0.25) {
        res.second = { channel: second, cause: 'exposed:' + ck[second], text: 'It was also adding to ' + ck[second] + ' suspicion (' + pct(sums[second] / tot) + ' of the total).' };
      }
    } else if (above > below) {
      var ta = band.warm; for (t = band.warm; t <= T; t++) if (H.share[t] > band.hi) { ta = t; break; }
      var peak = 0; for (t = 0; t <= T; t++) if (H.share[t] > peak) peak = H.share[t];
      var cu = growthCulprit(run, true), spore = !!bp.bio && bp.bio.id === 'sporulate' && avg(H.dorm, ta, T) >= 0.25;
      // Sporulate: spores never die and still count in the share, so a colony that sleeps while the natives die back ends up over the band. Name it plainly.
      if (spore) cu = { id: 'sporulate', name: 'your Sporulate reflex (spores never die, and they still count in your share)' };
      res.cause = 'overgrew'; res.from = ta; res.to = T; res.dominance = above / Math.max(1, above + below);
      res.card = cu ? cu.name : null;
      if (D.abundance) res.text = 'Took over the dish by tick ' + ta + ': your share passed ' + passed(H, band) + (spore ? ', pushed up by ' + cu.name + ',' : '') + ' and the guards noticed.';
      else res.text = 'Over the band from tick ' + ta + ': your share reached ' + pct(peak) + ' (ceiling ' + pct(band.hi) + ')' + (cu ? ', pushed up by ' + cu.name : '') + '.';
    } else if (below > 0) {
      var evs = evList(D), which = 0;
      evs.forEach(function (e, ei) { if (e.tick > 0 && tf > 0 && tf >= e.tick - 5 && tf <= e.tick + e.dur + 40) { E = e; which = ei; } });
      var inEv = E.tick > 0 && tf > 0 && tf >= E.tick - 5 && tf <= E.tick + E.dur + 40;
      // first tick of the final slide below the floor
      var ts = tf > 0 ? tf : band.warm;
      res.from = ts; res.to = T; res.dominance = below / Math.max(1, above + below);
      var cl = growthCulprit(run, false), reflexText = b.reflex ? (b.reflex.kind === 'bio' ? nm(b.reflex.id) || b.reflex.id : 'your rule') : null;
      if (b.reflex && b.reflex.kind === 'bio') reflexText = Cards.bio(b.reflex.id).name;
      if (inEv && E.type === 'bust') {
        res.cause = 'bust'; res.card = b.reflex ? 'reflex' : null;
        res.text = 'Lost to the bust, tick ' + Math.max(E.tick, ts - 30) + ' to ' + Math.min(T, ts + 30) + ': when ' + (D.temp ? 'the light went ' : 'food crashed ') + (which > 0 ? 'again ' : '') + 'at tick ' + E.tick + ' your share fell below ' + pct(band.lo) + ' and ' +
          (b.reflex ? 'your ' + reflexText + ' was not enough to stop it' : 'nothing in your build reacted') + '.';
      } else if (inEv && E.type === 'bloom') {
        res.cause = 'bloom'; res.card = cl ? cl.name : null;
        res.text = 'Lost to the bloom from tick ' + ts + ': after the natives surged at tick ' + E.tick + ' your share sank below ' + pct(band.lo) + (cl ? ', slowed by ' + cl.name : '') + '.';
      } else if (D.temp && H.graze && Math.max(grazeLossOf(H, T), grazeLossEarly(H, T, band.lo)) >= ST.grazeSafe) {
        res.cause = 'grazed'; res.card = null;
        res.text = 'Grazed from tick ' + ts + ': ' + pct(avg(H.cool, band.warm, T)) + ' of your colony drifted below 40 C, where the slow shadow eats it.';
      } else {
        var dead = !v.alive;
        res.cause = dead ? 'starved' : 'below'; res.card = cl ? cl.name : null;
        var ratio2 = avg(H.rate, Math.max(1, ts), Math.min(T, ts + 10)) / (avg(H.nrate, Math.max(1, ts - 3), ts + 3) || 1);
        res.text = (dead ? 'Starved out' : 'Below the band') + ' from tick ' + ts + ': you divided ' + (ratio2 < 0.97 ? pct(1 - ratio2) + ' slower than the natives' : 'about as fast as the natives, but not fast enough to replace losses') +
          (cl ? ', held back by ' + cl.name : '') + (bp.acidRate >= 0.03 ? ', and the acid is still getting in' : '') + ' (final share ' + pct(H.share[T]) + ').';
      }
    } else {
      res.cause = 'band'; res.from = band.warm; res.to = T; res.dominance = 0.5;
      res.text = 'You were in the band only ' + pct(v.bandFrac) + ' of the time; it needs ' + pct(band.need) + '.';
    }
    return res;
  }

  // Which of the five stats a loss is about, and a headline that starts with the stat in plain words.
  var CAUSE_STAT = { acid: 'acid', 'exposed:growth': 'growth', 'exposed:casualties': 'growth', overgrew: 'growth', below: 'growth', starved: 'growth', band: 'growth',
    'exposed:waste': 'smell', 'exposed:regularity': 'natural', bust: 'crash', bloom: 'crash', cooked: 'heat', grazed: 'grazing', 'exposed:motion': 'motion' };
  // The stat a loss is blamed on. Individual-cell dishes read the cause from sim3 (starved is a Food reach loss there, not a Growth one).
  function causeStat(D, cause) { return D && D.agents ? S3().CAUSE_STAT[cause] || 'growth' : CAUSE_STAT[cause]; }
  function autopsy(run) {
    if (run.agents) {
      var D3 = run.dish, sn3 = checkedIds(D3), st3 = causeStat(D3, run.autopsy3 && run.autopsy3.cause || (run.autopsy && run.autopsy.cause));
      if (sn3.length && sn3.indexOf(st3) < 0) st3 = sn3[0];
      return S3().finishAutopsy(run, st3, STAT_INFO[st3].name);
    }
    var a = autopsyBase(run);
    if (!a) return a;
    var D = run.dish, st = CAUSE_STAT[a.cause] || 'growth', sn = checkedIds(D), crashId = D.temp ? 'night' : 'crash';
    if (D.temp && st === 'crash') st = 'night';   // habitat 2: the bust is the night
    if (sn.length && sn.indexOf(st) < 0) st = sn[sn.length - 1] === 'acid' || a.cause === 'starved' ? 'acid' : sn[0];
    if (a.cause === 'acid' && st === 'acid' && sn.indexOf('growth') >= 0) {   // some acid kept out, but the colony was too slow to replace what got in
      var as = stats(D, run.build).filter(function (x) { return x.id === 'acid'; })[0];
      if (as && as.state === 'safe') st = 'growth';
    }
    if (st === 'growth' && (a.cause === 'below' || a.cause === 'starved') && sn.indexOf(crashId) >= 0) {   // sitting below the band after the crash is the crash's doing
      var cs = stats(D, run.build);
      var gs = cs.filter(function (x) { return x.id === 'growth'; })[0], cr = cs.filter(function (x) { return x.id === crashId; })[0];
      if (gs && cr && gs.state === 'safe' && cr.state !== 'safe') st = crashId;
    }
    a.stat = st;
    var name = STAT_INFO[st].name, t = a.to;
    var high = a.cause === 'overgrew' || a.cause === 'exposed:casualties' || (a.cause === 'exposed:growth' && /faster/.test(a.text));
    var tail = {
      acid: 'You dissolved by tick ' + t + '.',
      growth: a.cause === 'acid' ? 'The acid took more than you could replace, and you died out by tick ' + t + '.' : high ? 'You took over the dish' + (a.cause === 'overgrew' ? ' by tick ' + a.from : ' and the guards noticed by tick ' + t) + '.' : 'You faded out of the band by tick ' + a.from + '.',
      smell: 'The locals smelled you by tick ' + t + '.',
      natural: 'You looked like a machine, and were caught by tick ' + t + '.',
      crash: 'The food crash wiped you out' + (a.from ? ' (below the band from tick ' + a.from + ')' : '') + '.',
      heat: 'The heat killed the colony by tick ' + t + '.',
      grazing: 'Grazers ate you down from tick ' + a.from + '.',
      night: 'The night wiped you out' + (a.from ? ' (below the band from tick ' + a.from + ')' : '') + '.'
    }[st];
    var verb = st === 'smell' ? 'was too different' : st === 'growth' ? (high ? 'was too fast' : 'was too slow') : st === 'natural' ? 'was too low' : 'was too low';
    a.headline = name + ' ' + verb + '. ' + tail;
    a.high = high;
    return a;
  }

  // Plain-words change from one build to another on a dish: ["Births -15%", "Keeps the acid out", "Energy 2 of 4"].
  function diff(D, before, after, P) {
    P = P || Lv().PLANET;
    var b0 = normalize(before), b1 = normalize(after), p0 = params(P, D, b0), p1 = params(P, D, b1), ch = channelsOn(D), out = [];
    var r = p1.births / p0.births - 1;
    if (Math.abs(r) >= 0.005) out.push('Births ' + sgn(r));
    var a0 = p0.acidBlock >= 0.999 ? 2 : p0.acidBlock > 0.05 ? 1 : 0, a1 = p1.acidBlock >= 0.999 ? 2 : p1.acidBlock > 0.05 ? 1 : 0;
    if (D.acid > 0 && a1 !== a0) out.push(['Nothing keeps the acid out', 'Blocks most acid', 'Keeps the acid out'][a1]);
    if (p1.tough !== p0.tough) out.push('Toughness ' + (p1.tough > p0.tough ? '+' : '-') + Math.abs(p1.tough - p0.tough));
    if (ch.waste && (p1.wasteAmt === 0) !== (p0.wasteAmt === 0)) out.push(p1.wasteAmt === 0 ? 'No waste: Waste up strongly' : 'Waste is back');
    else if (ch.waste && Math.abs(p1.wasteGap - p0.wasteGap) > 0.05) out.push(p1.wasteGap < 0.01 ? 'Waste matches natives' : 'Waste differs from natives');
    if (!p0.quorum && p1.quorum) out.push('Births fall where crowded'); if (p0.quorum && !p1.quorum) out.push('No more crowd signal');
    if (!p0.radio && p1.radio) out.push('Holds share near ' + pct(0.10)); if (p0.radio && !p1.radio) out.push('No more share control');
    if (!p0.nap && p1.nap) out.push('Some cells nap through a food crash');
    if (p1.deathMult < 0.5 && p0.deathMult >= 0.5) out.push('Almost nothing dies');
    if (ch.regularity) {
      var g = p1.regMachine - p0.regMachine;
      if (g > 0.05) out.push('Regularity up'); else if (g < -0.05) out.push('Regularity down');
      if (p1.sigma - p0.sigma > 0.002) out.push('Timing noisier'); else if (p0.sigma - p1.sigma > 0.002) out.push('Timing tighter');
    }
    if (JSON.stringify(b0.reflex || null) !== JSON.stringify(b1.reflex || null)) {
      if (!b1.reflex) out.push('No reflex');
      else if (b1.reflex.kind === 'bio') { var rb = Cards.bio(b1.reflex.id); out.push(rb ? rb.sentence.replace(/\.$/, '') : 'Reacts when things change'); }
      else out.push(Cards.ruleText(b1.reflex).replace(/\.$/, ''));
    }
    var e = 0;
    (function () { var m = Cards.part(b1.metabolism); if (m) e += m.energy; (b1.parts || []).forEach(function (id) { var c = Cards.part(id); if (c) e += c.energy; }); })();
    if (!out.length) out.push('No change to the numbers');
    out.push('Energy ' + e + ' of ' + D.energy);
    return out;
  }

  // ================================================================ predict (chips)
  function sgn(x) { return (x >= 0 ? '+' : '-') + Math.abs(Math.round(x * 100)) + '%'; }
  function regWord(r) { return r >= 1.2 ? 'Regularity up strongly' : r >= 0.6 ? 'Regularity up' : 'Regularity up a little'; }
  function cardChips(c, ch) {
    var f = c.fx, o = [];
    if (f.yield != null && c.kind === 'metabolism') o.push('Yield ' + sgn(f.yield - 1));
    if (c.kind === 'metabolism' && ch.waste) o.push(f.waste === 0 ? 'No waste: Waste up strongly' : Math.abs(f.mix - 0.7) < 0.01 ? 'Waste matches natives' : 'Waste differs from natives');
    if (f.acid) o.push(f.acid >= 1 ? 'Keeps the acid out' : 'Blocks most acid');
    if (f.births && f.births !== 1) o.push('Births ' + sgn(f.births - 1));
    if (f.tough) o.push('Toughness +' + f.tough);
    if (f.quorum) o.push('Births fall where crowded', 'Signal lags and diffuses');
    if (f.radio) o.push('Holds share near ' + pct(0.10));
    if (f.sigma && ch.regularity) o.push('Regularity down');
    if (f.nap) o.push('Some cells nap through a food crash');
    if (f.deathAdd) o.push('Deaths up slightly');
    if (f.deathMult != null && f.deathMult < 0.5) o.push('Almost nothing dies');
    if (f.moveFood) o.push('Drifts toward food');
    if (f.reg && ch.regularity) o.push(regWord(f.reg));
    if (f.radio && ch.regularity) o.push('Regularity up more when the share line is flat');
    return o;
  }
  function predict(D, build, P) {
    P = P || (typeof LookAliveLevels !== 'undefined' ? LookAliveLevels.PLANET : require('./levels.js').PLANET);
    build = normalize(build);
    var bp = params(P, D, build), Pr = P.robot, cards = [], ch = channelsOn(D);
    var out = { runaway: false, energy: { used: 0, max: D.energy }, pace: [], slop: [], cards: cards, totals: [], chips: [], channels: ch, acid: null };
    function add(src, label, chips) { chips.forEach(function (c) { out.chips.push({ source: src, text: c }); }); cards.push({ id: src, label: label, chips: chips }); }
    out.pace = [Math.abs(bp.paceMult - 1) < 0.005 ? 'Births at the native rate' : 'Births ' + sgn(bp.paceMult - 1) + ' vs natives'];
    if (D.temp && D.temp.nightHurry && bp.paceMult > (D.temp.hurryFrom || 1) + 0.005) out.pace.push('Fast cells starve sooner in the dark');
    if (D.acidHurry && bp.paceMult > (D.acidHurryFrom || 1) + 0.005 && bp.ids.indexOf('acidproof') < 0 && D.acid > 0 && bp.acidBlock > 0) out.pace.push('Fast cells have thin new membranes: more acid gets in');
    // Runaway is read off a short dry run of the model itself (16 by 16), so the warning cannot disagree with what the dish then does.
    var ab = D.abundance, runaway = false;
    if (ab && ab.run) {
      var dry = play(P, D, build, { n: 16 }), pkd = 0;
      for (var q = 0; q <= dry.T; q++) if (dry.H.share[q] > pkd) pkd = dry.H.share[q];
      runaway = !dry.v.win && D.band && pkd > D.band.hi;
    }
    out.runaway = runaway;
    if (runaway) out.pace.push('Runaway: with food everywhere, this pace floods the dish');
    out.slop = build.slop === 0 ? ['Perfectly regular'] : ['Births ' + sgn(bp.slopMult - 1)].concat(ch.regularity ? ['Regularity down', 'Timing variance ' + pct(bp.sigma / P.native.sigma) + ' of natives'] : []);
    var met = Cards.part(build.metabolism);
    if (met) { out.energy.used += met.energy; add(met.id, met.name, cardChips(met, ch)); }
    (build.parts || []).forEach(function (id) { var c = Cards.part(id); if (c) { out.energy.used += c.energy; add(c.id, c.name, cardChips(c, ch)); } });
    var rf = build.reflex;
    if (rf && rf.kind === 'bio') {
      var bc = Cards.bio(rf.id);
      if (bc) add(bc.id, bc.name, bc.id === 'sporulate' ? [bc.sentence, 'Spores do not eat, divide or die', 'Slow to wake once food returns', 'No suspicion'] : [bc.sentence, 'Senses locally, a few ticks late, with noise', 'No suspicion']);
    } else if (rf && rf.kind === 'machine') {
      var sn = Cards.sensor(rf.sensor), rc = ['Reads exact values instantly'];
      if (ch.regularity) rc.push('Regularity up while installed and each tick it fires');
      if (sn && sn.global) rc.unshift('Reads something no cell could know');
      if (rf.action === 'fast') rc.push('Births +50% where it fires'); if (rf.action === 'fast' && ch.growth) rc.push('Growth suspicion up');
      if (rf.action === 'pause') rc.push('Births stop where it fires');
      add('rule', Cards.ruleText(rf), rc);
    }
    var net = bp.births;
    if (D.acid > 0) {
      out.acid = bp.acidBlock >= 0.999 ? { state: 'full', text: 'Keeps the acid out' } : bp.acidBlock > 0.05 ? { state: 'most', text: 'Blocks most acid' } : { state: 'none', text: 'Nothing keeps the acid out' };
      out.totals.push(out.acid.state === 'none' ? 'Acid: nothing keeps it out, you will dissolve' : out.acid.state === 'most' ? 'Acid: most of it is kept out, some still gets in' : 'Acid: kept out');
    }
    if (runaway) out.totals.push('Runaway: dividing feeds on itself here, and nothing eats you. This build takes over the dish. Slow down, or add Head count or Radio mesh');
    out.totals.push('Births ' + sgn(net - 1) + ' vs natives');
    if (net > 1.15) out.totals.push(ch.growth ? 'Growth suspicion up: dividing ' + pct(net - 1) + ' faster than natives' : 'Divides faster than the natives: more of you');
    else if (net < 0.85) out.totals.push('Slower than natives: may not replace losses');
    if (bp.tough) out.totals.push('Toughness +' + bp.tough);
    if (ch.waste) out.totals.push(bp.wasteAmt === 0 ? 'Waste: none' : bp.wasteGap < 0.01 ? 'Waste matches natives' : 'Waste differs from natives');
    if (ch.regularity) {
      out.totals.push('Timing variance ' + pct(bp.sigma / P.native.sigma) + ' of natives');
      if (bp.regMachine > 0 || bp.rule) out.totals.push('Machine parts raise Regularity');
      if (bp.isDefault) out.totals.push('Factory Defaults: an unchanged build is a tell');
    }
    if (D.temp) {
      out.totals.push('Heat: tolerates up to ' + Math.round(bp.tol) + ' C');
      if (D.temp.graze > 0) out.totals.push('Grazers: ' + (bp.grazeKeep < 0.5 ? 'mostly resisted' : 'eat you below 40 C'));
    }
    return out;
  }

  // ================================================================ stat bars (GAMEPLAY-V2 section 13)
  // Five stats read off a forecast run of the real model on a 16 by 16 grid (cached by dish and build). Mappings are in RULES.md.
  var STAT_INFO = {
    acid:    { id: 'acid',    name: 'Acid defence',   ups: 'stronger', downs: 'weaker' },
    growth:  { id: 'growth',  name: 'Growth',         ups: 'faster', downs: 'slower' },
    smell:   { id: 'smell',   name: 'Smell',          ups: 'closer to the locals', downs: 'further from the locals' },
    natural: { id: 'natural', name: 'Naturalness',    ups: 'more natural', downs: 'less natural' },
    crash:   { id: 'crash',   name: 'Crash survival', ups: 'better', downs: 'worse' },
    heat:    { id: 'heat',    name: 'Heat tolerance', ups: 'higher', downs: 'lower' },
    grazing: { id: 'grazing', name: 'Grazing',        ups: 'safer', downs: 'worse' },
    night:   { id: 'night',   name: 'Night survival', ups: 'better', downs: 'worse' },
    reach:   { id: 'reach',   name: 'Food reach',     ups: 'better', downs: 'worse' },                 // habitat 3 only
    motion:  { id: 'motion',  name: 'Movement',       ups: 'closer to the locals', downs: 'further from the locals' }   // habitat 3 only
  };
  var STAT_ORDER = ['acid', 'growth', 'smell', 'natural', 'crash', 'heat', 'grazing', 'night', 'reach', 'motion'];
  var ST = {
    acidScale: 0.25, acidSafeLoss: 0.06,        // value = 1 - loss/0.25; safe while the colony loses under 6% a tick to the acid
    shareLo: 0.0125, shareHi: 0.6,              // growth bar: log scale of the share from 1.25% to 60%
    peakLine: 10, peakSafe: 7.5,                // smell and naturalness: value = 1 - peak/10; safe while the weighted channel peak is under 7.5 (stage 3 is at 8)
    highQ: 0.5,                                 // growth is too fast when this share quantile of ticks 30..300 is above the band ceiling
    crashLo: 0.01, crashHi: 0.15, crashSafe: 0.04,   // crash bar: log scale of the lowest share after the bust, 1% to 15%; safe from 4% (the band floor less a fifth)
    heatScale: 0.25, heatSafe: 0.028, grazeScale: 0.06, grazeSafe: 0.015   // habitat 2: heat bar = 1 - loss/0.25 (loss: mean per tick over ticks 1..20), grazing bar = 1 - loss/0.06 (ticks 30..T)
  };
  function csafe(D) { return D.crashSafe || ST.crashSafe; }
  function heatLossOf(H) { var l = 0, t; for (t = 1; t <= 20; t++) l += H.heat[t] || 0; return l / 20; }
  function grazeLossEarly(H, T, floor) { var l = 0, c = 0, t; for (t = 1; t <= T; t++) if ((H.share[t] || 0) < floor) { l += H.graze[t] || 0; c++; } return c ? l / c : 0; }
  function grazeLossOf(H, T) { var l = 0, c = 0, t; for (t = 30; t <= T; t++) { l += H.graze[t] || 0; c++; } return c ? l / c : 0; }
  var fcCache = {}, fcCount = 0;
  function qtile(a, p) { var s = a.slice().sort(function (x, y) { return x - y; }); return s[Math.min(s.length - 1, Math.floor(p * s.length))]; }
  // The forecast: a 16 by 16 run of the real simulation, and the few numbers the five stats read from it.
  var agCache = {}, agKeys = [];
  // Individual-cell dishes: the forecast is the real run (same seed, same simulation), kept for the last 40 builds.
  function forecastAgent(D, build) {
    var b = normalize(build), key = D.id + '|' + JSON.stringify(D.agents) + '|' + JSON.stringify(b);
    if (agCache[key]) return agCache[key];
    var f = forecastOf(play(Lv().PLANET, D, b, { record: false }), D);
    if (agKeys.length >= 40) delete agCache[agKeys.shift()];
    agCache[key] = f; agKeys.push(key);
    return f;
  }
  function forecast(D, build) {
    if (D.agents) return forecastAgent(D, build);
    var b = normalize(build), key = D.id + '|' + JSON.stringify(b);
    if (fcCache[key]) return fcCache[key];
    var run = play(Lv().PLANET, D, b, { n: D.forecastN || 16 }), f = forecastOf(run, D);
    if (fcCount > 3000) { fcCache = {}; fcCount = 0; }
    f.fc = true;   // marks the coarse forecast run: stats() may apply a dish's forecast margin to it (D.forecastLoMult), the real run never gets one
    fcCache[key] = f; fcCount++;
    return f;
  }
  // The numbers the stats read, taken from any finished run of the dish (the forecast above, or the real replay for the result grade).
  function forecastOf(run, D) {
    if (D.agents) return S3().forecastOf(run, D, agentHelpers(D));
    var H = run.H, T = run.T, band = D.band, t, ramp = Lv().PLANET.event.ramp || 10;
    var ev = D.event && D.event.tick > 0 ? D.event.tick : 0;
    var all = [], low = [], post = [], loss = 0, lossMax = 0, gpeak = 0, mx = { waste: 0, regularity: 0 }, mn = 1, below = 0, above = 0;
    var evEnd = ev ? evLastEnd(D, ramp) : 0;
    for (t = band.warm; t <= T; t++) {
      all.push(H.share[t]); if (!ev || t <= ev) low.push(H.share[t]); if (ev && t > evEnd) post.push(H.share[t]);
      if (H.share[t] < band.lo) below++; else if (H.share[t] > band.hi) above++;
    }
    for (t = 1; t <= 10; t++) loss += H.acid[t] || 0;
    for (t = 1; t <= T; t++) { if (H.susp.growth[t] > gpeak) gpeak = H.susp.growth[t]; if ((H.acid[t] || 0) > lossMax) lossMax = H.acid[t]; if (H.susp.waste[t] > mx.waste) mx.waste = H.susp.waste[t]; if (H.susp.regularity[t] > mx.regularity) mx.regularity = H.susp.regularity[t]; }
    if (ev) for (t = ev; t <= T; t++) if (H.share[t] < mn) mn = H.share[t];
    var hx = {};
    if (H.heat) { var hm = 0; for (t = 1; t <= T; t++) if (H.heat[t] > hm) hm = H.heat[t]; hx = { heatLoss: heatLossOf(H), heatLossMax: hm, grazeLoss: grazeLossOf(H, T) }; }
    return { heatLoss: hx.heatLoss || 0, heatLossMax: hx.heatLossMax || 0, grazeLoss: hx.grazeLoss || 0, acidLoss: loss / 10, acidLossMax: lossMax, p70: Math.max(qtile(all, ST.highQ), post.length ? qtile(post, 0.65) : 0), l70: qtile(low, ST.highQ), p30: qtile(low, 0.3), alive: run.v.alive, waste: mx.waste, reg: mx.regularity,
      crashMin: mn, pl30: post.length ? qtile(post, 0.3) : 1, win: run.v.win, bandFrac: run.v.bandFrac, below: below, above: above, cnt: T - band.warm + 1, gpeak: gpeak, maxStage: run.v.maxStage, hasEvent: !!ev };
  }
  function shareVal(s) { return clamp(Math.log(Math.max(s, 1e-4) / ST.shareLo) / Math.log(ST.shareHi / ST.shareLo), 0, 1); }
  function crashVal(s) { return clamp(Math.log(Math.max(s, 1e-4) / ST.crashLo) / Math.log(ST.crashHi / ST.crashLo), 0, 1); }
  function r3(x) { return Math.round(x * 1000) / 1000; }
  function agentHelpers(D) { return { shareVal: shareVal, zone: function (id) { return [r3(shareVal(D.band.lo)), r3(shareVal(D.band.hi))]; } }; }
  function statZone(D, id) {
    if (D.agents && id !== 'growth') return S3().zone3(id);
    if (id === 'acid') return [r3(1 - ST.acidSafeLoss / ST.acidScale), 1];
    if (id === 'growth') return [r3(shareVal(D.band.lo)), r3(shareVal(D.band.hi))];
    if (id === 'crash' || id === 'night') return [r3(crashVal(csafe(D))), 1];
    if (id === 'heat') return [r3(1 - ST.heatSafe / ST.heatScale), 1];
    if (id === 'grazing') return [r3(1 - ST.grazeSafe / ST.grazeScale), 1];
    return [r3(1 - (D.peakSafe || ST.peakSafe) / ST.peakLine), 1];
  }
  // Which stats a dish shows (D.stats) and which of them can lose it (D.checked, default all of D.stats).
  function shownIds(D) { return D.stats || []; }
  function checkedIds(D) { return D.checked || D.stats || []; }
  function isChecked(D, id) { return checkedIds(D).indexOf(id) >= 0; }
  function statEval(D, id, f) {
    var o = statEval0(D, id, f), chk = isChecked(D, id);
    o.checked = chk;
    if (!chk) { o.state = 'unchecked'; o.verdict = 'Not checked on this dish'; return o; }
    if (id === 'growth') {
      // between safe and unsafe: the quantile tests pass, but the colony spends more than a quarter of the run outside the band
      if (o.state === 'safe') {
        if (!D.aliveOnly && f.bandFrac >= D.band.need && f.bandFrac < 0.75) { o.state = 'edge'; o.verdict = 'Close to the edge'; }
      }
    }
    return o;
  }
  function statEval0(D, id, f) {
    if (D.agents) { var e3 = f.agent[id]; return { id: id, name: STAT_INFO[id].name, value: e3.value, safe: e3.safe, state: e3.state, verdict: e3.verdict }; }
    var z = statZone(D, id), v, state = 'safe', verdict = 'Safe';
    if (id === 'acid') {
      v = clamp(1 - f.acidLoss / ST.acidScale, 0, 1);
      if (v < z[0]) { state = 'low'; verdict = 'Too low: you will dissolve'; }
    } else if (id === 'growth') {
      if (f.p70 > D.band.hi || (D.exam && (f.above > (1 - D.band.need) * f.cnt || f.gpeak > 4.5))) { v = shareVal(Math.max(f.p70, D.band.hi * 1.05)); state = 'high'; verdict = 'Too fast: you will take over'; }   // exam dishes: also high when above the band for over 30% of the run (a sleeping colony while the natives starve)
      // habitat 2: the coarse forecast grid reads a little high near the band floor, so the forecast (f.fc) must clear it by a margin
      else if (f.p30 < D.band.lo * (f.fc && D.forecastLoMult || 1) || (f.crashMin >= csafe(D) && f.pl30 < D.band.lo)) { v = shareVal(Math.min(f.p30, f.pl30)); state = 'low'; verdict = 'Too slow: you will fade out'; }
      else v = shareVal(Math.sqrt(Math.max(f.p30, 1e-4) * Math.max(f.l70, 1e-4)));
    } else if (id === 'smell') {
      v = clamp(1 - f.waste / ST.peakLine, 0, 1);
      if (v < z[0]) { state = 'low'; verdict = 'They can smell you'; }
    } else if (id === 'natural') {
      v = clamp(1 - f.reg / ST.peakLine, 0, 1);
      if (v < z[0]) { state = 'low'; verdict = 'Too perfect: you look like a machine'; }
    } else if (id === 'heat') {
      v = clamp(1 - f.heatLoss / ST.heatScale, 0, 1);
      if (v < z[0]) { state = 'low'; verdict = 'Too hot: you will cook'; }
    } else if (id === 'grazing') {
      v = clamp(1 - f.grazeLoss / ST.grazeScale, 0, 1);
      if (v < z[0]) { state = 'low'; verdict = 'The grazers will eat you'; }
    } else {
      v = crashVal(f.crashMin);
      if (v < z[0]) { state = 'low'; verdict = id === 'night' ? 'The night will wipe you out' : 'The crash will wipe you out'; }
    }
    return { id: id, name: STAT_INFO[id].name, value: r3(v), safe: z, state: state, verdict: verdict };
  }
  // The stats this dish shows, in order, for a build. Each: { id, name, value 0..1, safe [lo, hi], state low|safe|high, verdict }.
  // Every stat the dish shows, plus Growth, in order; each has `checked`. An unchecked stat has state 'unchecked' and never affects a win or the "all safe" test.
  function stats(D, build) {
    var f = forecast(D, build);
    return shownIds(D).map(function (id) { return statEval(D, id, f); });
  }
  // The same stats read from a finished run (the real replay), for the result slides: what happened, not what was forecast.
  function runStats(run) { var D = run.dish; if (!run.v) run.v = verdict(run); var f = forecastOf(run, D); return shownIds(D).map(function (id) { return statEval(D, id, f); }); }
  // A colony the acid dissolves has no meaningful Growth, Smell, Naturalness or Crash numbers (nothing is left to measure): only Acid defence counts then.
  function dissolved(D, b) { var f = forecast(D, b); return !f.alive && f.acidLoss > ST.acidSafeLoss; }
  function statDist(s) { return s.value < s.safe[0] ? s.safe[0] - s.value : s.value > s.safe[1] ? s.value - s.safe[1] : 0; }
  function statHealth(s) { return s.id === 'growth' ? -Math.abs(s.value - (s.safe[0] + s.safe[1]) / 2) : s.value; }
  // Per stat: { id, name, from, to, fromState, toState, better: true | false | null, delta (change in value), health (change in health) }.
  function statDiff(D, a, b) {
    var sa = stats(D, a), sb = stats(D, b);
    return sa.map(function (x, i) {
      var y = sb[i], da = statDist(x), db = statDist(y), dh = statHealth(y) - statHealth(x), better = null;
      if (db < da - 0.004) better = true; else if (db > da + 0.004) better = false;
      else if (da === 0 && db === 0) better = dh > 0.01 ? true : dh < -0.01 ? false : null;
      if (!x.checked) better = null;
      return { id: x.id, name: x.name, checked: x.checked, from: x.value, to: y.value, fromState: x.state, toState: y.state, better: better, delta: r3(y.value - x.value), health: r3(dh) };
    });
  }
  function buildEnergy(b) {
    var e = 0, m = Cards.part(b.metabolism); if (m) e += m.energy;
    (b.parts || []).forEach(function (id) { var c = Cards.part(id); if (c) e += c.energy; });
    return e;
  }
  // The build with a card fitted the way the slot rules require (a swap in a one-option slot, a free Envelope layer or the outer one, the Sealed shell
  // taking the whole Envelope). Energy is not checked: the page shows what the card would do, and the energy meter says whether it fits. null if the slot is locked.
  function fitForPreview(D, build, cardId) {
    var r = fit(D, build, cardId, null, true);
    if (r.ok) return r.build;
    var c = Cards.part(Cards.canon(cardId));
    if (c && c.slot === 'envelope' && !/already fitted|locked/.test(r.reason)) {
      var cleared = unfit(D, build, 'envelope');
      if (cleared.ok && (Cards.layersOf(c) > 1 || /Sealed shell/.test(r.reason))) { r = fit(D, cleared.build, cardId, null, true); if (r.ok) return r.build; }
      r = fit(D, build, cardId, 0, true); if (r.ok) return r.build;
    }
    return null;
  }
  // What a card does for this cell on this dish. One list, `changes`: [{ stat, name, direction 'up' | 'down', steps 1 | 2, words, tone 'good' | 'bad' | 'neutral', checked }].
  //   words: plain directions ("Growth slower", "Acid defence up", "Smell closer", "Naturalness down", "Crash survival up").
  //   tone: good when the change moves the stat toward, or keeps it in, its safe zone for the current cell; bad when it moves it out or further out;
  //   neutral when the stat is not checked on this dish.
  // A card already fitted (fitted: true, current: true) reports what it is doing: the cell with it against the cell without it.
  // Also: energy (the card's cost), used (energy of the build with it), fits (within the dish limit), preview (a legal preview build exists), build.
  // Old fields kept for the old page: helps and costs ({ stat, name, steps, dir +1|-1, delta }), checked stats only; `fitted` used to mean "preview exists" and now means "already fitted" (see `preview`).
  var STAT_WORDS = { reach: ['Food reach better', 'Food reach worse'], motion: ['Movement more restless', 'Movement stiller'], acid: ['Acid defence up', 'Acid defence down'], growth: ['Growth faster', 'Growth slower'], smell: ['Smell closer', 'Smell further off'],
    natural: ['Naturalness up', 'Naturalness down'], crash: ['Crash survival up', 'Crash survival down'],
    heat: ['Heat tolerance up', 'Heat tolerance down'], grazing: ['Grazing safer', 'Grazing worse'], night: ['Night survival up', 'Night survival down'] };
  var STATE_RANK = { safe: 0, edge: 1, low: 2, high: 2, unchecked: 0 };
  function toneOf(x, y, dh) {
    var da = statDist(x), db = statDist(y), ra = STATE_RANK[x.state], rb = STATE_RANK[y.state];
    if (!x.checked) return 'neutral';
    if (rb < ra || (rb === ra && db < da - 0.004)) return 'good';
    if (rb > ra || (rb === ra && db > da + 0.004)) return 'bad';
    return rb === 0 ? 'good' : (dh >= 0 ? 'good' : 'bad');    // same place: keeping it in the safe zone is good
  }
  function cardEffects(D, build, cardId) {
    var id = Cards.canon(cardId), c = Cards.part(id) || Cards.bio(id), base = build, nb = null;
    var out = { changes: [], helps: [], costs: [], energy: c && c.energy ? c.energy : 0, used: 0, fits: false, fitted: false, current: false, preview: false };
    var sl0 = toSlots(build), now = c && c.slot === 'envelope' ? sl0.envelope.indexOf(id) >= 0 : c && c.slot && c.slot !== 'reflex' ? sl0[c.slot] === id : !!(sl0.reflex && sl0.reflex.kind === 'bio' && sl0.reflex.id === id);
    if (now) {   // already fitted: show what it does for this cell, measured against the cell without it
      out.current = true; out.fitted = true; out.preview = true; out.build = normalize(build); out.used = buildEnergy(out.build); out.fits = true;
      if (!c || c.slot === 'power') return out;
      var un = unfit(D, build, c.slot === undefined ? 'reflex' : c.slot, id);
      if (!un.ok) return out;
      base = un.build; nb = normalize(build);
    } else nb = fitForPreview(D, build, cardId);
    if (!nb) return out;
    if (!out.current) { out.build = nb; out.preview = true; out.used = buildEnergy(normalize(nb)); out.fits = out.used <= D.energy; }
    var dn = dissolved(D, nb), db0 = dissolved(D, base);
    statDiff(D, base, nb).forEach(function (d) {
      if (d.id !== 'acid' && (dn || db0)) return;
      var sa = stats(D, base).filter(function (x) { return x.id === d.id; })[0], sb = stats(D, nb).filter(function (x) { return x.id === d.id; })[0];
      var steps = Math.abs(d.health) >= 0.15 ? 2 : 1, moved = d.better !== null || Math.abs(d.delta) >= 0.04 || d.fromState !== d.toState;
      if (!moved) return;
      var up = d.delta > 0 || (d.delta === 0 && d.health > 0), tone = toneOf(sa, sb, d.health);
      out.changes.push({ stat: d.id, name: d.name, direction: up ? 'up' : 'down', steps: steps, words: STAT_WORDS[d.id][up ? 0 : 1], tone: tone, checked: d.checked });
      if (!d.checked) return;
      if (d.better === true || (d.better === null && d.health > 0.03)) out.helps.push({ stat: d.id, name: d.name, steps: steps, dir: d.delta >= 0 ? 1 : -1, delta: d.delta });
      else if (d.better === false) out.costs.push({ stat: d.id, name: d.name, steps: steps, dir: d.delta >= 0 ? 1 : -1, delta: d.delta });
    });
    return out;
  }
  // The slots and dials on this dish that can move a stat. full: true entries move it into the safe zone with one change; if no single change does,
  // the entries that make it better are returned with full: false. Slot entries: { kind: 'slot', slot, name, options: [card ids], full }, dial entries: { kind: 'dial', dial, to, full }.
  function statFixers(D, build, statId) {
    var b = normalize(build), base = stats(D, b), cur = null, k, i;
    base.forEach(function (s) { if (s.id === statId) cur = s; });
    if (!cur || !cur.checked) return [];
    var full = [], part = [];
    function judge(nb) {   // 2: the stat becomes safe and nothing that was safe breaks; 1: it gets better; 0: no use
      var s = null, broke = false, now = stats(D, nb);
      now.forEach(function (x, i) { if (x.id === statId) s = x; else if (base[i].state === 'safe' && x.state !== 'safe') broke = true; });
      if (broke) return 0;
      if (s.state === 'safe') return 2;
      return statDist(s) < statDist(cur) - 0.02 ? 1 : 0;
    }
    SLOT_ORDER.forEach(function (slot) {
      if (!isOpen(D, slot)) return;
      var ok2 = [], ok1 = [], opts = offered(D, slot);
      opts.forEach(function (c) {
        var nb = fit(D, b, c.id).ok ? fit(D, b, c.id).build : null;
        if (!nb && slot === 'envelope') { var r = fit(D, b, c.id, 0); nb = r.ok ? r.build : null; }
        if (!nb && slot === 'envelope') { var cl = unfit(D, b, 'envelope'); var r2 = cl.ok ? fit(D, cl.build, c.id) : { ok: false }; nb = r2.ok ? r2.build : null; }
        if (!nb) return;
        var j = judge(nb); if (j === 2) ok2.push(c.id); else if (j === 1) ok1.push(c.id);
      });
      if (slot === 'reflex' && D.allowed.bio.length === 0) return;
      var sl0 = toSlots(b), has = slot === 'envelope' ? sl0.envelope.length > 0 : !!sl0[slot], rem = false;
      if (slot !== 'power' && has) { var u = unfit(D, b, slot); if (u.ok && judge(u.build) === 2) rem = true; }
      if (ok2.length) full.push({ kind: 'slot', slot: slot, name: slotName(slot), options: ok2, remove: rem, full: true });
      else if (rem) full.push({ kind: 'slot', slot: slot, name: slotName(slot), options: [], remove: true, full: true });
      else if (ok1.length) part.push({ kind: 'slot', slot: slot, name: slotName(slot), options: ok1, remove: false, full: false });
    });
    (D.dials || []).forEach(function (d) {
      var best = null, bestJ = 0;
      for (var v = 0; v <= 8; v++) {
        if (v === b[d]) continue;
        var nb = cp(b); nb[d] = v;
        var j = judge(nb);
        if (j > bestJ || (j === bestJ && j > 0 && best !== null && Math.abs(v - b[d]) < Math.abs(best - b[d]))) { bestJ = j; best = v; }
      }
      if (bestJ === 2) full.push({ kind: 'dial', dial: d, name: d === 'pace' ? 'Pace dial' : 'Sloppiness dial', to: best, full: true });
      else if (bestJ === 1) part.push({ kind: 'dial', dial: d, name: d === 'pace' ? 'Pace dial' : 'Sloppiness dial', to: best, full: false });
    });
    return full.length ? full : part;
  }
  // The same stats read live off a finished run at tick t (for the replay). value is null when the stat has nothing to show yet (Crash survival before the crash).
  function liveStats(run, t) {
    if (run.dish.agents) {
      var D3 = run.dish, hp = agentHelpers(D3);
      return shownIds(D3).map(function (id) {
        var e = S3().liveStat(run, D3, id, t, hp), chk = isChecked(D3, id);
        return { id: id, name: STAT_INFO[id].name, value: e.value, safe: e.safe, state: chk ? e.state : 'unchecked', verdict: chk ? e.verdict : 'Not checked on this dish', checked: chk };
      });
    }
    var D = run.dish, H = run.H, ev = D.event && D.event.tick > 0 ? D.event.tick : 0, i, tt = Math.max(1, Math.min(run.T, Math.floor(t)));
    return shownIds(D).map(function (id) {
      var z = statZone(D, id), v = null, state = 'safe', verdict = 'Safe';
      if (id === 'acid') {
        var a = 0, c = 0; for (i = Math.max(1, tt - 2); i <= tt; i++) { a += H.acid[i] || 0; c++; }
        v = clamp(1 - a / c / ST.acidScale, 0, 1); if (v < z[0]) { state = 'low'; verdict = 'Too low: you will dissolve'; }
      } else if (id === 'growth') {
        var sh = H.share[tt]; v = shareVal(sh);
        if (sh > D.band.hi) { state = 'high'; verdict = 'Too fast: you will take over'; } else if (sh < D.band.lo) { state = 'low'; verdict = 'Too slow: you will fade out'; }
      } else if (id === 'smell') {
        v = clamp(1 - H.susp.waste[tt] / ST.peakLine, 0, 1); if (v < z[0]) { state = 'low'; verdict = 'They can smell you'; }
      } else if (id === 'natural') {
        v = clamp(1 - H.susp.regularity[tt] / ST.peakLine, 0, 1); if (v < z[0]) { state = 'low'; verdict = 'Too perfect: you look like a machine'; }
      } else if (id === 'heat') {
        var hh = 0, hc = 0; for (i = Math.max(1, tt - 2); i <= tt; i++) { hh += H.heat ? H.heat[i] || 0 : 0; hc++; }
        v = clamp(1 - hh / hc / ST.heatScale, 0, 1); if (v < z[0]) { state = 'low'; verdict = 'Too hot: you will cook'; }
      } else if (id === 'grazing') {
        var gg = 0, gc = 0; for (i = Math.max(1, tt - 2); i <= tt; i++) { gg += H.graze ? H.graze[i] || 0 : 0; gc++; }
        v = clamp(1 - gg / gc / ST.grazeScale, 0, 1); if (v < z[0]) { state = 'low'; verdict = 'The grazers will eat you'; }
      } else {
        if (ev && tt >= ev) { var mn = 1; for (i = ev; i <= tt; i++) if (H.share[i] < mn) mn = H.share[i]; v = crashVal(mn); if (v < z[0]) { state = 'low'; verdict = id === 'night' ? 'The night will wipe you out' : 'The crash will wipe you out'; } }
        else verdict = id === 'night' ? 'Waiting for the night' : 'Waiting for the crash';
      }
      var chk = isChecked(D, id);
      if (!chk) { state = 'unchecked'; verdict = 'Not checked on this dish'; }
      return { id: id, name: STAT_INFO[id].name, value: v == null ? null : r3(v), safe: z, state: state, verdict: verdict, checked: chk };
    });
  }
  // The result grade of a win (shown on exam dishes): 'Passable' | 'Convincing' | 'Benign', or null for a loss.
  //   Passable   any win.
  //   Convincing a win where the lab never reached the inspection stage (stage 2) and no checked stat ended 'edge' or unsafe on the run's own numbers.
  //   Benign     Convincing, and every checked stat stayed in its safe zone for the whole run (acid loss under the line at every tick, Smell and Naturalness
  //              peaks under 7.5, lowest share in the crash above the line, Growth safe) and at least 1 energy was left unspent.
  function grade(run, D, build) {
    D = D || run.dish; var v = run.v || verdict(run);
    if (!v.win) return null;
    var f = forecastOf(run, D), st = checkedIds(D).map(function (id) { return statEval(D, id, f); });
    var safe = st.every(function (x) { return x.state === 'safe'; }), edge = st.some(function (x) { return x.state === 'edge' || x.state === 'low' || x.state === 'high'; });
    if (isChecked(D, 'acid') && f.acidLossMax > ST.acidSafeLoss) safe = false;
    if (isChecked(D, 'heat') && f.heatLossMax > ST.heatSafe) safe = false;
    var spare = D.energy - buildEnergy(normalize(build || run.build));
    var convincing = v.maxStage <= 1 && !edge && safe;
    if (v.maxStage <= 1 && !edge) convincing = true;
    if (convincing && safe && spare >= 1) return 'Benign';
    return convincing ? 'Convincing' : 'Passable';
  }
  // The preview sentence pieces for moving from build a to build b: ["Acid defence: safe", "Growth: a little slower", "Energy 2 of 4"].
  function diffWords(D, a, b) {
    var out = [];
    var dis = dissolved(D, b);
    statDiff(D, a, b).forEach(function (d) {
      if (dis && d.id !== 'acid') return;
      var info = STAT_INFO[d.id], mag = Math.abs(d.delta);
      if (d.toState !== d.fromState) {
        var ev = stats(D, b).filter(function (s) { return s.id === d.id; })[0];
        out.push(info.name + ': ' + (ev.state === 'safe' ? 'safe' : ev.verdict.charAt(0).toLowerCase() + ev.verdict.slice(1).replace(': ', ', ')));
      } else if (mag >= 0.02) {
        out.push(info.name + ': ' + (mag < 0.08 ? 'a little ' : mag > 0.25 ? 'much ' : '') + (d.delta > 0 ? info.ups : info.downs));
      }
    });
    out.push('Energy ' + buildEnergy(normalize(b)) + ' of ' + D.energy);
    return out;
  }

  return { grade: grade, energyOf: buildEnergy, dissolved: dissolved, stats: stats, liveStats: liveStats, runStats: runStats, statDiff: statDiff, cardEffects: cardEffects, statFixers: statFixers, diffWords: diffWords, STAT_INFO: STAT_INFO, STAT_ORDER: STAT_ORDER, CHAN: CHAN, DEFAULT_BUILD: DEFAULT_BUILD, SLOT_ORDER: SLOT_ORDER, normalize: normalize, toSlots: toSlots, fromSlots: fromSlots, fit: fit, unfit: unfit, conform: conform, offered: offered, slotState: slotState, lockedReason: lockedReason, opensOn: opensOn, diff: diff, params: params, validate: validate, play: play, verdict: verdict, scout: scout,
    channelsOn: channelsOn, causeStat: causeStat, restore: restore, resume: resume, autopsy: autopsy, predict: predict, baseState: baseState, evLevel: evLevel, isDefault: isDefault, _internal: { ST: ST, newState: newState, step: step, HK: HK } };
})();
if (typeof module !== 'undefined') module.exports = LookAlive;

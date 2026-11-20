// Look Alive skill tree check: data on the cards, learnedOn from the dishes, the `with` rule, and treeState.
// Run from the repo root:  node games/look-alive/dev/tree-check.js        (a few seconds)
// One PASS or FAIL line per property, a readable tree listing, and a last line TREE-CHECK PASS or TREE-CHECK FAIL.
'use strict';
var path = require('path');
var G = path.join(__dirname, '..');
var Cards = require(path.join(G, 'cards.js')), Lv = require(path.join(G, 'levels.js'));
require(path.join(G, 'levels2.js')); require(path.join(G, 'levels3.js'));
var Sim = require(path.join(G, 'sim.js'));
var fails = 0;
function line(ok, tag, msg) { if (!ok) fails++; console.log((ok ? 'PASS ' : 'FAIL ') + tag + ' ' + msg); return ok; }
function cp(o) { return JSON.parse(JSON.stringify(o)); }
var BRANCHES = ['power', 'skin', 'insides', 'divide', 'sense', 'move', 'react'];
var BRANCH_OF_SLOT = { power: 'power', envelope: 'skin', insides: 'insides', division: 'divide', signal: 'sense', motor: 'move', reflex: 'react' };
var DISHES = Lv.DISHES.slice().sort(function (a, b) { return a.id - b.id; });
function dishById(id) { for (var i = 0; i < DISHES.length; i++) if (DISHES[i].id === id) return DISHES[i]; return null; }
var TREE_RE = / needs .* fitted in the .* slot\.$/;
function nonTree(v) { return v.problems.filter(function (p) { return !TREE_RE.test(p); }); }
function treeProbs(v) { return v.problems.filter(function (p) { return TREE_RE.test(p); }); }

var nodes = Sim.treeNodes(), by = {};
nodes.forEach(function (n) { by[n.id] = n; });

// ---------------------------------------------------------------- T1
(function () {
  var bad = [], ids = {}, dup = [];
  var cards = Cards.parts.concat(Cards.bioReflexes);
  cards.forEach(function (c) {
    var t = c.tree;
    if (!t || BRANCHES.indexOf(t.branch) < 0 || !(t.tier >= 1 && t.tier === Math.floor(t.tier)) || !Array.isArray(t.after) || !Array.isArray(t.with)) bad.push(c.id + ': bad tree field');
    else if (t.branch !== BRANCH_OF_SLOT[c.slot]) bad.push(c.id + ': branch ' + t.branch + ' does not follow slot ' + c.slot);
  });
  nodes.forEach(function (n) { if (ids[n.id]) dup.push(n.id); ids[n.id] = true; });
  if (nodes.length !== cards.length + 1) bad.push('node count ' + nodes.length + ' (want ' + (cards.length + 1) + ')');
  if (!by.rule || by.rule.name !== 'Machine rule' || by.rule.branch !== 'react' || by.rule.kind !== 'rule') bad.push('Machine rule node missing or wrong');
  nodes.forEach(function (n) {
    n.after.concat(n.with).forEach(function (x) { if (!by[x]) bad.push(n.id + ' links to unknown id ' + x); });
    ['id', 'name', 'slot', 'branch', 'tier', 'after', 'with', 'energy', 'shelf', 'kind', 'learnedOn'].forEach(function (k) { if (!(k in n)) bad.push(n.id + ' lacks ' + k); });
    if (['part', 'reflex', 'rule'].indexOf(n.kind) < 0) bad.push(n.id + ' kind ' + n.kind);
    if (n.shelf !== 'biology' && n.shelf !== 'machine') bad.push(n.id + ' shelf ' + n.shelf);
  });
  var br = Sim.treeBranches();
  if (br.map(function (b) { return b.id; }).join() !== BRANCHES.join() || br.map(function (b) { return b.name; }).join() !== 'Power,Skin,Insides,Divide,Sense,Move,React') bad.push('treeBranches wrong');
  // stable order: branch, then tier, then name
  for (var i = 1; i < nodes.length; i++) {
    var a = nodes[i - 1], b = nodes[i], ka = [BRANCHES.indexOf(a.branch), a.tier, a.name], kb = [BRANCHES.indexOf(b.branch), b.tier, b.name];
    if (ka[0] > kb[0] || (ka[0] === kb[0] && (ka[1] > kb[1] || (ka[1] === kb[1] && ka[2] > kb[2])))) bad.push('order: ' + a.id + ' before ' + b.id);
  }
  line(!bad.length && !dup.length, 'T1', nodes.length + ' nodes (' + cards.length + ' cards + the Machine rule), ids unique, links real, order stable' + (bad.length || dup.length ? ' :: ' + bad.concat(dup).join('; ') : ''));
})();

// ---------------------------------------------------------------- T2
(function () {
  var bad = [];
  nodes.forEach(function (n) {
    n.after.forEach(function (a) {
      var t = by[a]; if (!t) return;
      if (t.tier >= n.tier) bad.push(n.id + ' (tier ' + n.tier + ') after ' + a + ' (tier ' + t.tier + ')');
      if (t.learnedOn == null || n.learnedOn == null || t.learnedOn > n.learnedOn) bad.push(n.id + ' learnedOn ' + n.learnedOn + ' before ' + a + ' learnedOn ' + t.learnedOn);
      if (t.branch !== n.branch) bad.push(n.id + ' after ' + a + ' in another branch');
    });
  });
  function cyc(id, stack) {
    if (stack.indexOf(id) >= 0) return true;
    var n = by[id]; if (!n) return false;
    return n.after.concat(n.with).some(function (x) { return cyc(x, stack.concat(id)); });
  }
  nodes.forEach(function (n) { if (cyc(n.id, [])) bad.push('cycle through ' + n.id); });
  line(!bad.length, 'T2', 'no cycles through after or with; tiers rise along after; every after target is taught no later' + (bad.length ? ' :: ' + bad.join('; ') : ''));
})();

// ---------------------------------------------------------------- T3
(function () {
  var bad = [], count = 0;
  nodes.forEach(function (n) {
    var offeredAnywhere = DISHES.some(function (D) { return D.allowed && Sim.treeState(D, null, {})[n.id] && (function () { var A = D.allowed; return n.kind === 'rule' ? (D.slots.indexOf('reflex') >= 0 && A.sensors.length > 0) : Sim.offered(D, n.slot).some(function (c) { return c.id === n.id; }); })(); });
    if (n.learnedOn == null) { if (offeredAnywhere) bad.push(n.id + ' offered but learnedOn null'); return; }
    var D = dishById(n.learnedOn), base = Lv.carry(D.id), nb;
    if (!D || !base) { bad.push(n.id + ': no dish or carry ' + n.learnedOn); return; }
    if (n.kind === 'rule') {
      var A = D.allowed;
      nb = Sim.normalize(base); nb.reflex = { kind: 'machine', sensor: A.sensors[0], cmp: 'gt', value: Cards.sensor(A.sensors[0]).values[0], action: A.actions[0] };
    } else {
      var f = Sim.fit(D, base, n.id, null, true);
      if (f.ok) nb = f.build; else if (/already fitted/.test(f.reason)) nb = base; else { bad.push(n.id + ' will not fit on dish ' + D.id + ': ' + f.reason); return; }
    }
    var v = Sim.validate(D, nb), rest = nonTree(v).filter(function (p) { return !/^Energy/.test(p); });
    count++;
    if (treeProbs(v).length || rest.length) bad.push(n.id + ' on dish ' + D.id + ': ' + treeProbs(v).concat(rest).join(' / '));
  });
  line(!bad.length, 'T3', count + ' skills: each is accepted on the dish that teaches it (carried cell plus the card, energy aside)' + (bad.length ? ' :: ' + bad.join('; ') : ''));
})();

// ---------------------------------------------------------------- T4
(function () {
  var bad = [], nChecks = 0;
  DISHES.forEach(function (D) {
    var c = Lv.carry(D.id);
    if (!c) { bad.push('dish ' + D.id + ' has no carry'); return; }
    function same(b, what) {
      var v = Sim.validate(D, b); nChecks++;
      if (treeProbs(v).length || v.ok !== (nonTree(v).length === 0)) bad.push('dish ' + D.id + ' ' + what + ': ' + v.problems.join(' / '));
      return v;
    }
    var v0 = same(c, 'carry'); if (!v0.ok) bad.push('dish ' + D.id + ' carry does not validate: ' + v0.problems.join(' / '));
    (D.fixes || []).forEach(function (fx) { same(Lv.applyFix(c, fx), 'fix ' + fx.id); });
    if (D.id >= 6 && D.id <= 10) { var n = Lv.carry(D.id + 1), v = n ? Sim.validate(D, n) : null; nChecks++; if (!v || !v.ok) bad.push('dish ' + D.id + ': carry of the next dish does not validate' + (v ? ': ' + v.problems.join(' / ') : '')); }
  });
  line(!bad.length, 'T4', DISHES.length + ' dishes, ' + nChecks + ' builds (carry, every intended fix, carry of the next dish on 6 to 10): no tree problem, same verdict as before' + (bad.length ? ' :: ' + bad.join('; ') : ''));
})();

// ---------------------------------------------------------------- T5
(function () {
  var bad = [], ok = ['fitted', 'available', 'learned', 'unlearned'];
  function sane(st, what) {
    nodes.forEach(function (n) {
      var s = st[n.id];
      if (!s || ok.indexOf(s.state) < 0) bad.push(what + ' ' + n.id + ' has no state');
      else if (s.state !== 'fitted' && !(typeof s.reason === 'string' && s.reason.length)) bad.push(what + ' ' + n.id + ' (' + s.state + ') has no reason');
    });
  }
  DISHES.forEach(function (D) {
    var st = Sim.treeState(D, null, {}), sh = (D.show && D.show.shelves) || {};
    sane(st, 'dish ' + D.id);
    // A shelf can also show a teaser for a slot that is still locked here (dish 11 shows the Motor cards) or the Factory part of a locked slot (the Sync pulse on dishes 1 to 3).
    // Those must not be 'available'; the Factory part must be 'fitted' once the carried cell is passed in.
    var sb = Sim.treeState(D, Lv.carry(D.id), {});
    var ids = (sh.biology || []).concat(sh.machine || []);
    ids.forEach(function (id) {
      var s = st[id], c = Cards.part(id) || Cards.bio(id), open = D.slots.indexOf(c.slot) >= 0;
      if (!open) { if (s && s.state === 'available') bad.push('dish ' + D.id + ' ' + id + ' is available in a locked slot'); if (sb[id] && sb[id].state !== 'fitted' && sb[id].state !== 'unlearned') bad.push('dish ' + D.id + ' ' + id + ' locked-slot state ' + sb[id].state); if (Lv.FACTORY && Lv.FACTORY[c.slot] === id && sb[id].state !== 'fitted') bad.push('dish ' + D.id + ' Factory part ' + id + ' not fitted in the carried cell'); if (s && s.state === 'unlearned' && !/^Opens on dish|^Learn /.test(s.reason)) bad.push('dish ' + D.id + ' ' + id + ' locked-slot reason: ' + s.reason); return; }
      if (!s) bad.push('dish ' + D.id + ' shelf card ' + id + ' not in the tree'); else if (s.state !== 'available') bad.push('dish ' + D.id + ' shelf card ' + id + ' is ' + s.state + ': ' + s.reason); });
    var cb = Sim.treeState(D, Lv.carry(D.id), {}); sane(cb, 'dish ' + D.id + ' carry');
    var f = Sim.fromSlots ? Sim.toSlots(Lv.carry(D.id)) : null;
    if (f) { var fid = [f.power, f.insides, f.division, f.signal, f.motor].concat(f.envelope).filter(Boolean); fid.forEach(function (id) { if (cb[id].state !== 'fitted') bad.push('dish ' + D.id + ' carried ' + id + ' not reported fitted'); }); }
  });
  var none = Sim.treeState(null, null, {});
  nodes.forEach(function (n) { if (none[n.id].state !== 'unlearned') bad.push('null dish, nothing cleared: ' + n.id + ' is ' + none[n.id].state); });
  sane(none, 'null dish');
  var all = {}; DISHES.forEach(function (D) { all[D.id] = true; });
  var done = Sim.treeState(null, null, all);
  nodes.forEach(function (n) { var want = n.learnedOn == null ? 'unlearned' : 'learned'; if (done[n.id].state !== want) bad.push('null dish, all cleared: ' + n.id + ' is ' + done[n.id].state); });
  sane(done, 'all cleared');
  DISHES.forEach(function (D) { sane(Sim.treeState(D, Lv.carry(D.id), all), 'dish ' + D.id + ' all cleared'); });
  line(!bad.length, 'T5', 'treeState: every shelf card is available on its own dish with nothing cleared; dish list view and all-cleared view as specified; every non-fitted state has a reason' + (bad.length ? ' :: ' + bad.join('; ') : ''));
})();

// ---------------------------------------------------------------- T6
(function () {
  var bad = [], pump = Cards.part('pump'), saved = pump.tree['with'], D = dishById(1), base = Lv.carry(1);
  try {
    var withPump = Sim.fit(D, base, 'pump', null, true);
    if (!withPump.ok) { bad.push('cannot fit the pump before the test: ' + withPump.reason); return; }
    pump.tree['with'] = ['acidproof'];
    var b = withPump.build;
    var miss = Sim.treeMissing(b, 'pump');
    if (miss.join() !== 'acidproof') bad.push('treeMissing gave ' + JSON.stringify(miss));
    if (Sim.treeMissing(b, 'lipids').length) bad.push('treeMissing for a card with no with is not empty');
    var v = Sim.validate(D, b), want = 'Proton pump needs Acid-proof insides fitted in the Insides slot.';
    if (v.ok || v.problems.indexOf(want) < 0) bad.push('validate did not say "' + want + '": ' + v.problems.join(' / '));
    var nodeWith = Sim.treeNodes().filter(function (n) { return n.id === 'pump'; })[0]['with'];
    if (nodeWith.join() !== 'acidproof') bad.push('treeNodes does not show the with');
    var st = Sim.treeState(D, base, {}).pump;
    if (!/^Needs Acid-proof insides fitted in the Insides slot\.$/.test(st.reason)) bad.push('treeState reason was "' + st.reason + '"');
    var blocked = Sim.fit(D, base, 'pump', null, true);
    if (blocked.ok || blocked.reason !== want) bad.push('fit should refuse the pump alone, said: ' + JSON.stringify(blocked));
    var fixed = Sim.fit(D, b, 'acidproof', null, true);
    if (!fixed.ok) bad.push('fitting acidproof failed: ' + fixed.reason);
    else {
      var v2 = Sim.validate(D, fixed.build);
      if (treeProbs(v2).length || Sim.treeMissing(fixed.build, 'pump').length) bad.push('fitting acidproof did not clear the problem');
      var st2 = Sim.treeState(D, fixed.build, {});
      if (st2.pump.state !== 'fitted') bad.push('pump not fitted in the fixed build');
    }
    pump.tree['with'] = ['rule'];   // a requirement on the Machine rule: needs a reflex slot, so test on dish 5
    var D5 = dishById(5), b5 = Sim.fit(D5, Lv.carry(5), 'pump', null, true);
    if (Sim.treeMissing(b5.build || Lv.carry(5), 'pump').join() !== 'rule') bad.push('with on the rule: treeMissing gave ' + JSON.stringify(Sim.treeMissing(b5.build || Lv.carry(5), 'pump')));
    var wantR = 'Proton pump needs Machine rule fitted in the Reflex slot.';
    var vb = Sim.validate(D5, Sim.normalize(Object.assign({}, Lv.carry(5), { reflex: null, parts: Lv.carry(5).parts.concat(['pump']) })));
    if (vb.problems.indexOf(wantR) < 0) bad.push('rule wording: ' + vb.problems.join(' / '));
  } finally { pump.tree['with'] = saved; }
  if (Sim.treeMissing(Lv.carry(1), 'pump').length || pump.tree['with'].length) bad.push('card not restored');
  line(!bad.length, 'T6', 'the with rule works in memory (treeMissing, validate sentence, fit refuses, fitting the other card clears it, treeState reason) and the card is restored' + (bad.length ? ' :: ' + bad.join('; ') : ''));
})();

// ---------------------------------------------------------------- listing
console.log('\nThe tree (branch, tier, name, learned on, after):');
var BN = {}; Sim.treeBranches().forEach(function (b) { BN[b.id] = b.name; });
BRANCHES.forEach(function (b) {
  console.log(BN[b].toUpperCase());
  nodes.filter(function (n) { return n.branch === b; }).forEach(function (n) {
    console.log('  tier ' + n.tier + '  ' + n.name + '  [' + n.id + ', ' + n.shelf + ', ' + n.kind + ', energy ' + n.energy + ']  dish ' + n.learnedOn +
      (n.after.length ? '  after ' + n.after.map(function (a) { return by[a].name; }).join(', ') : '') + (n['with'].length ? '  with ' + n['with'].map(function (a) { return by[a].name; }).join(', ') : ''));
  });
});
console.log('\n' + (fails ? 'TREE-CHECK FAIL (' + fails + ')' : 'TREE-CHECK PASS'));
process.exit(fails ? 1 : 0);

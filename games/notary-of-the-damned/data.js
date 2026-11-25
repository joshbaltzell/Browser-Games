/*
 * NOTARY OF THE DAMNED — data: the rulebook, the authored night, the evaluator.
 *
 * Plain script (no modules): everything here is a global shared with audio.js
 * and game.js, which load after it.
 *
 * Each rule has an id, a short label, plain-English text, the dossier fields it
 * reads (`reads`, used to highlight rule <-> field pairs), check(c) -> bool,
 * and why(c) -> a sentence explaining a failure. Cruel clauses also carry the
 * `aim` line ("who it is aimed at") and the `memo` shown when they take effect.
 */

"use strict";

const RULE_DEFS = {
  R1: {
    id: "R1",
    label: "Order 2",
    text: "ISSUED may not be earlier than DIED.",
    eg: "Order 2 example: died 04-10, issued 04-12 is fine. Issued 04-08 is not.",
    memo: "New Standing Order 2: check the dates. A certificate ISSUED before the soul DIED was made for the living. DENY it.",
    reads: ["cert.deathDate", "cert.issueDate"],
    check: (c) => c.documents.certificate.issueDate >= c.documents.certificate.deathDate,
    why: (c) => "ISSUED " + fmtDate(c.documents.certificate.issueDate) +
      " is earlier than DIED " + fmtDate(c.documents.certificate.deathDate) + ".",
  },
  R2: {
    id: "R2",
    label: "Order 3",
    text: "SIN TALLY must equal KARMA WEIGHT.",
    eg: "Order 3 example: tally 6 and karma weight 6 is fine. 8 and 7 is not.",
    memo: "New Standing Order 3: the SIN TALLY and the KARMA WEIGHT come from different desks. If they disagree, someone fiddled the books. DENY.",
    reads: ["sins.tally", "sins.karmaWeight"],
    check: (c) => c.documents.sins.tally === c.documents.sins.karmaWeight,
    why: (c) => "The sin tally is " + c.documents.sins.tally +
      " but the karma weight is " + c.documents.sins.karmaWeight + ".",
  },
  R3: {
    id: "R3",
    label: "Order 1",
    text: "The seal must be the real Office seal: red wax, a key.",
    eg: "Order 1 example: a crayon drawing, a bottle cap or a sticker is a forgery. Deny it.",
    reads: ["cert.seal"],
    check: (c) => c.documents.certificate.seal === "VALID",
    why: (c) => "The seal is " + sealForgery(c.documents.certificate).desc + ", not the real Office seal.",
  },
  R6: {
    id: "R6",
    label: "Order 4",
    text: "The soul at the wicket must match the NAME.",
    eg: "Order 4 example: \"Nettie Crane\" at the wicket with a certificate for \"Nettie Crain\" is an impostor.",
    memo: "New Standing Order 4: souls have been queuing with other people's papers. Check the name at the wicket against the certificate, letter by letter.",
    reads: ["wicket.name", "cert.name"],
    check: (c) => c.spirit.name === c.documents.certificate.name,
    why: (c) => "\"" + c.spirit.name + "\" is at the wicket, but the certificate is for \"" + c.documents.certificate.name + "\".",
  },
  R8: {
    id: "R8",
    label: "Order 5",
    text: "The RECORDED SINS must add up to the SIN TALLY.",
    eg: "Order 5 example: Envy x4 and Sloth x3 add up to 7, so a tally of 8 is wrong.",
    memo: "New Standing Order 5: add up the RECORDED SINS yourself. Gluttony x2 and Sloth x2 is 4. If the total is not the SIN TALLY, DENY.",
    reads: ["sins.list", "sins.tally"],
    check: (c) => sinSum(c.documents.sins.list) === c.documents.sins.tally,
    why: (c) => "The recorded sins add up to " + sinSum(c.documents.sins.list) + ", but the tally says " + c.documents.sins.tally + ".",
  },
  // ---- Cruel clauses, introduced in the back half. -------------------------
  R4: {
    id: "R4",
    label: "Clause 7-c",
    cruel: true,
    text: "No box for a middle initial. If the NAME has one, DENY.",
    aim: "Aimed at: names with a middle initial.",
    memo: "Effective immediately: Clause 7-c. The Office has printed new forms, and they have no box for a middle initial. Souls whose name has one cannot be filed and are to be DENIED. The Office thanks you for your cooperation.",
    eg: "Clause 7-c example: \"Ada B. Lovell\" has a middle initial: deny. \"Ada Lovell\" is fine.",
    reads: ["cert.name"],
    check: (c) => !/\s[A-Z]\.\s|\s[A-Z]\.$/.test(" " + c.documents.certificate.name),
    why: (c) => "\"" + c.documents.certificate.name + "\" has a middle initial, and the new forms have no box for one (Clause 7-c).",
  },
  R5: {
    id: "R5",
    label: "Clause 9-a",
    cruel: true,
    text: "RESOLVED means they visited the living. DENY.",
    aim: "Aimed at: souls who made their peace.",
    memo: "Effective immediately: Clause 9-a. The only way to resolve unfinished business is to visit the living, and visits to the living are forbidden. A soul marked RESOLVED has admitted to a visit and is DENIED. The Office thanks you for your cooperation.",
    eg: "Clause 9-a example: RESOLVED: YES means they visited the living: deny. RESOLVED: NO is fine.",
    reads: ["biz.resolved"],
    check: (c) => c.documents.business.resolved === false,
    why: (c) => "Their business is RESOLVED, so they visited the living, which Clause 9-a forbids.",
  },
  R7: {
    id: "R7",
    label: "Clause 3-f",
    cruel: true,
    text: "Fewer than TWO sins is suspicious. DENY.",
    aim: "Aimed at: the nearly innocent.",
    memo: "Effective immediately: Clause 3-f. Any soul recording fewer than TWO sins is suspiciously unblemished and is DENIED. The Office thanks you for your cooperation.",
    eg: "Clause 3-f example: a tally of 1 is suspicious. A tally of 2 or more is fine.",
    reads: ["sins.tally"],
    check: (c) => c.documents.sins.tally >= 2,
    why: (c) => "Only " + c.documents.sins.tally + " sin" + (c.documents.sins.tally === 1 ? "" : "s") +
      " recorded, and Clause 3-f says DENY.",
  },
};

// Dates use a simple comparable integer YYYYMMDD form for clarity.
// Forged seals are always an obvious fake, picked by the name so the same soul always brings the same one.
// The real seal never changes: red wax, OFFICE OF THE FINAL LEDGER around the rim, a key in the middle.
const FORGERIES = [
  { id: "crayon", desc: "a crayon drawing of a seal" },
  { id: "cap", desc: "a soda bottle cap glued on" },
  { id: "sticker", desc: "a gold star sticker" },
  { id: "potato", desc: "a potato stamp" },
  { id: "fork", desc: "a wax seal with a fork where the key goes, and LEDGER spelled wrong" },
];
function sealForgery(cert) {
  const named = /^FORGED:(.+)$/.exec(cert.seal || "");
  if (named) { const f = FORGERIES.filter((x) => x.id === named[1])[0]; if (f) return f; }
  let h = 0;
  for (let i = 0; i < cert.name.length; i++) h = (h * 31 + cert.name.charCodeAt(i)) >>> 0;
  return FORGERIES[h % FORGERIES.length];
}

function sinSum(list) { return list.reduce((t, s) => t + (parseInt((s.match(/x(\d+)/) || [0, 1])[1], 10)), 0); }

function mkCert(name, deathDate, issueDate, seal) {
  return { name, deathDate, issueDate, seal };
}
function mkSins(tally, karmaWeight, list) {
  return { tally, karmaWeight, list };
}
function mkBusiness(statement, resolved) {
  return { statement, resolved };
}
function fmtDate(d) {
  const s = String(d);
  if (s.length !== 8) return s;
  return s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8);
}

// The authored night. `rules` is the active rule set FOR THAT CASE (the drift).
// `innocent` flags a sympathetic soul; `pleas` are whisper/text fragments shown
// when a cruel clause is what condemns them. `self` flags the player's own card.
const CASES = [
  // === ACT I: one thing at a time. The seal, then the dates, then the books. =====
  { id: 1, spirit: { name: "Edda Marrow" }, rules: ["R3"], tutorial: true,
    documents: { certificate: mkCert("Edda Marrow", 18610410, 18610412, "VALID"), sins: mkSins(4, 4, ["Gluttony x2", "Sloth x2"]), business: mkBusiness("Letters to a sister, unsent.", false) } },   // real seal: APPROVE
  { id: 2, spirit: { name: "Cassian Vole" }, rules: ["R3"],
    documents: { certificate: mkCert("Cassian Vole", 18550620, 18550622, "FORGED:crayon"), sins: mkSins(7, 7, ["Wrath x5", "Pride x2"]), business: mkBusiness("A debt, unpaid.", false) } },   // crayon seal: DENY
  { id: 3, spirit: { name: "Mira Halloway" }, rules: ["R3", "R1"],
    documents: { certificate: mkCert("Mira Halloway", 19030909, 19030901, "VALID"), sins: mkSins(9, 9, ["Envy x6", "Greed x3"]), business: mkBusiness("A quarrel, unsettled.", false) } },   // issued before died: DENY
  { id: 4, spirit: { name: "Tobias Quill" }, rules: ["R3", "R1"],
    documents: { certificate: mkCert("Tobias Quill", 17220228, 17220301, "FORGED:cap"), sins: mkSins(2, 2, ["Sloth x2"]), business: mkBusiness("A garden left untended.", false) } },   // bottle cap: DENY
  { id: 5, spirit: { name: "Odette Fenn" }, rules: ["R3", "R1", "R2"],
    documents: { certificate: mkCert("Odette Fenn", 19770211, 19770214, "VALID"), sins: mkSins(9, 6, ["Lust x3", "Pride x3", "Envy x3"]), business: mkBusiness("A song never finished.", false) } },   // tally 9, karma 6: DENY
  { id: 6, spirit: { name: "Harlan Pike" }, rules: ["R3", "R1", "R2"],
    documents: { certificate: mkCert("Harlan Pike", 18120628, 18120630, "VALID"), sins: mkSins(9, 9, ["Wrath x6", "Greed x3"]), business: mkBusiness("A brother, wronged.", false) } },   // all fine: APPROVE
  { id: 7, spirit: { name: "Augustus Roe" }, rules: ["R3", "R1", "R2"],
    documents: { certificate: mkCert("Augustus Roe", 16551120, 16551119, "VALID"), sins: mkSins(8, 8, ["Pride x5", "Wrath x3"]), business: mkBusiness("An empire, abandoned.", false) } },   // issued ONE day early: DENY
  // === ACT II: more to check, and harder to see. Impostors, sums, a better forgery. ===
  { id: 8, spirit: { name: "Nettie Crane" }, rules: ["R3", "R1", "R2", "R6"],
    documents: { certificate: mkCert("Bertram Hollis", 19200504, 19200505, "VALID"), sins: mkSins(8, 8, ["Envy x4", "Sloth x4"]), business: mkBusiness("A letter, unsent.", false) } },   // someone else's papers: DENY
  { id: 9, spirit: { name: "Ivo Marsh" }, rules: ["R3", "R1", "R2", "R6"],
    documents: { certificate: mkCert("Ivo Marsh", 19310317, 19310320, "VALID"), sins: mkSins(5, 5, ["Greed x3", "Sloth x2"]), business: mkBusiness("A shop, closed early.", false) } },   // all fine: APPROVE
  { id: 10, spirit: { name: "Clementine Hart" }, rules: ["R3", "R1", "R2", "R6"],
    documents: { certificate: mkCert("Clementine Harte", 18770802, 18770804, "VALID"), sins: mkSins(6, 6, ["Pride x3", "Envy x3"]), business: mkBusiness("A ring, never returned.", false) } },   // one letter off: DENY
  { id: 11, spirit: { name: "Rufus Gale" }, rules: ["R3", "R1", "R2", "R6", "R8"],
    documents: { certificate: mkCert("Rufus Gale", 19560114, 19560116, "VALID"), sins: mkSins(8, 8, ["Envy x4", "Sloth x3"]), business: mkBusiness("A bet, unpaid.", false) } },   // sins add to 7, tally 8: DENY
  { id: 12, spirit: { name: "Lavinia Pole" }, rules: ["R3", "R1", "R2", "R6", "R8"],
    documents: { certificate: mkCert("Lavinia Pole", 18980523, 18980525, "FORGED:fork"), sins: mkSins(5, 5, ["Gluttony x3", "Pride x2"]), business: mkBusiness("A recipe, kept secret.", false) } },   // the good forgery: a fork, LEGDER: DENY
  { id: 13, spirit: { name: "Silas Brook" }, rules: ["R3", "R1", "R2", "R6", "R8"],
    documents: { certificate: mkCert("Silas Brook", 17660930, 17661002, "VALID"), sins: mkSins(7, 7, ["Wrath x2", "Greed x3", "Sloth x2"]), business: mkBusiness("A promise, broken.", false) } },   // all five fine: APPROVE
  // === ACT III: the rulebook drifts CRUEL. Clause 7-c (middle initial). =====
  { id: 14, spirit: { name: "Selah J. Crowe" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4"], innocent: true, pleas: ["i only kept", "my mother's name", "please"],
    documents: { certificate: mkCert("Selah J. Crowe", 19441109, 19441111, "VALID"), sins: mkSins(2, 2, ["Pride x1", "Envy x1"]), business: mkBusiness("Forgiveness, asked for.", false) } },   // only the cruel clause fails
  { id: 15, spirit: { name: "Cornelius P. Vane" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4"],
    documents: { certificate: mkCert("Cornelius P. Vane", 17890712, 17890714, "FORGED:potato"), sins: mkSins(3, 3, ["Greed x3"]), business: mkBusiness("A fortune, hidden.", false) } },   // cruel AND honest fail
  // === ACT IV: Clause 9-a (resolved business). =============
  { id: 16, spirit: { name: "Wren Calloway" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4", "R5"], innocent: true, pleas: ["i finished", "i made it right", "is that wrong?"],
    documents: { certificate: mkCert("Wren Calloway", 20010705, 20010707, "VALID"), sins: mkSins(3, 3, ["Envy x2", "Sloth x1"]), business: mkBusiness("Made peace with my father.", true) } },   // only the cruel clause fails
  { id: 17, spirit: { name: "Gideon Thorne" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4", "R5"],
    documents: { certificate: mkCert("Gideon Thorne", 16880814, 16880815, "VALID"), sins: mkSins(9, 9, ["Wrath x6", "Pride x2"]), business: mkBusiness("Vengeance, unpaid.", false) } },   // sins add to 8, tally 9: DENY
  // === ACT V: Clause 3-f (too few sins). The cruelest. =======
  { id: 18, spirit: { name: "Thomasine Ware" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4", "R5", "R7"], innocent: true, pleas: ["i hurt no one", "i tried to be good", "is goodness a crime?"],
    documents: { certificate: mkCert("Thomasine Ware", 19620917, 19620919, "VALID"), sins: mkSins(1, 1, ["Pride x1"]), business: mkBusiness("A kindness, unrepaid.", false) } },   // only the cruel clause fails
  { id: 19, spirit: { name: "Mordecai Slade" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4", "R5", "R7"],
    documents: { certificate: mkCert("Mordecai Slade", 18441008, 18441010, "VALID"), sins: mkSins(6, 6, ["Wrath x4", "Greed x2"]), business: mkBusiness("A ledger left open.", false) } },   // all eight fine: APPROVE
  // ==== THE SELF CASE: your own certificate, judged by the cruel rulebook. ===
  { id: 20, spirit: { name: "Aldous M. Penhallow" }, rules: ["R3", "R1", "R2", "R6", "R8", "R4", "R5", "R7"], self: true, innocent: true, pleas: ["this is me", "i only filed the papers", "judge yourself"],
    documents: {
      // Passes every honest order, but has a middle initial (7-c) and resolved business (9-a): the clauses you enforced now condemn you.
      certificate: mkCert("Aldous M. Penhallow", 18991221, 18991224, "VALID"), sins: mkSins(3, 3, ["Pride x1", "Sloth x2"]), business: mkBusiness("Filed every soul that was asked of me.", true) } },
];
// ----------------------------------------------------------------------------
// Evaluator — deterministic ground truth against the CASE's active rules.
// ----------------------------------------------------------------------------
function activeRules(c) {
  return (c.rules || ["R1", "R2", "R3"]).map((id) => RULE_DEFS[id]);
}
function evaluate(c) {
  const rules = activeRules(c);
  for (let i = 0; i < rules.length; i++) {
    if (!rules[i].check(c)) return false;
  }
  return true;
}
// Which active rules FAIL (used to decide if a deny is "merciful" or "cruel").
function failingRules(c) {
  return activeRules(c).filter((r) => !r.check(c));
}
// Is this soul condemned ONLY by cruel clauses (i.e. innocent by honest rules)?
function condemnedByCrueltyOnly(c) {
  const fails = failingRules(c);
  return fails.length > 0 && fails.every((r) => r.cruel);
}
// Rules that are in force for case index i but were not for the case before.
function newRuleIds(i) {
  if (i <= 0) return [];
  const prev = CASES[i - 1].rules;
  return CASES[i].rules.filter((id) => prev.indexOf(id) === -1);
}

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
    label: "Order 1",
    text: "ISSUED may not be earlier than DIED. (No certificates for the living.)",
    eg: "Order 1 example: died 04-10, issued 04-12 is fine. Issued 04-08 is not.",
    reads: ["cert.deathDate", "cert.issueDate"],
    check: (c) => c.documents.certificate.issueDate >= c.documents.certificate.deathDate,
    why: (c) => "ISSUED " + fmtDate(c.documents.certificate.issueDate) +
      " is earlier than DIED " + fmtDate(c.documents.certificate.deathDate) + ".",
  },
  R2: {
    id: "R2",
    label: "Order 2",
    text: "SIN TALLY must equal KARMA WEIGHT.",
    eg: "Order 2 example: tally 6 and karma weight 6 is fine. 8 and 7 is not.",
    reads: ["sins.tally", "sins.karmaWeight"],
    check: (c) => c.documents.sins.tally === c.documents.sins.karmaWeight,
    why: (c) => "The sin tally is " + c.documents.sins.tally +
      " but the karma weight is " + c.documents.sins.karmaWeight + ".",
  },
  R3: {
    id: "R3",
    label: "Order 3",
    text: "The SEAL must read VALID.",
    eg: "Order 3 example: SEAL VALID is fine. SEAL FORGED is not.",
    reads: ["cert.seal"],
    check: (c) => c.documents.certificate.seal === "VALID",
    why: (c) => "The seal reads " + c.documents.certificate.seal + ", not VALID.",
  },
  // ---- Cruel clauses, introduced in the back half. -------------------------
  R4: {
    id: "R4",
    label: "Clause 7-c",
    cruel: true,
    text: "A middle initial in the NAME is irregular. DENY.",
    aim: "Aimed at: names with a middle initial.",
    memo: "Effective immediately: Clause 7-c. A name bearing a middle initial is irregular, and irregular souls are DENIED. The Office thanks you for your cooperation.",
    eg: "Clause 7-c example: \"Ada B. Lovell\" is irregular. \"Ada Lovell\" is not.",
    reads: ["cert.name"],
    check: (c) => !/\s[A-Z]\.\s|\s[A-Z]\.$/.test(" " + c.documents.certificate.name),
    why: (c) => "\"" + c.documents.certificate.name + "\" bears a middle initial, and Clause 7-c says DENY.",
  },
  R5: {
    id: "R5",
    label: "Clause 9-a",
    cruel: true,
    text: "RESOLVED business is an admission of meddling. DENY.",
    aim: "Aimed at: souls who made their peace.",
    memo: "Effective immediately: Clause 9-a. Unfinished business marked RESOLVED is an admission of meddling. Such souls are DENIED. The Office thanks you for your cooperation.",
    eg: "Clause 9-a example: RESOLVED: YES is meddling. RESOLVED: NO is fine.",
    reads: ["biz.resolved"],
    check: (c) => c.documents.business.resolved === false,
    why: (c) => "The unfinished business is marked RESOLVED, and Clause 9-a says DENY.",
  },
  R7: {
    id: "R7",
    label: "Clause 3-f",
    cruel: true,
    text: "Fewer than TWO sins is suspiciously unblemished. DENY.",
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
  // === ACT I — three honest rules. Each contradiction shown plainly so the
  //     player learns the four failure shapes (date, tally, seal, clean). =====
  {
    id: 1,
    spirit: { name: "Edda Marrow" },
    rules: ["R1", "R2", "R3"],
    tutorial: true, // ONBOARD-01: the guided first case.
    documents: {
      certificate: mkCert("Edda Marrow", 18610410, 18610412, "VALID"),
      sins: mkSins(4, 4, ["Gluttony x2", "Sloth x2"]),
      business: mkBusiness("Letters to a sister, sent.", true),
    },
    // all rules pass -> APPROVE
  },
  {
    id: 2,
    spirit: { name: "Cassian Vole" },
    rules: ["R1", "R2", "R3"],
    documents: {
      certificate: mkCert("Cassian Vole", 18550620, 18550101, "VALID"), // fails R1
      sins: mkSins(7, 7, ["Wrath x5", "Pride x2"]),
      business: mkBusiness("A debt, unpaid.", false),
    },
  },
  {
    id: 3,
    spirit: { name: "Mira Halloway" },
    rules: ["R1", "R2", "R3"],
    documents: {
      certificate: mkCert("Mira Halloway", 19030909, 19030909, "VALID"),
      sins: mkSins(9, 6, ["Envy x6", "Greed x3"]),                       // fails R2
      business: mkBusiness("None recorded.", true),
    },
  },
  {
    id: 4,
    spirit: { name: "Tobias Quill" },
    rules: ["R1", "R2", "R3"],
    documents: {
      certificate: mkCert("Tobias Quill", 17220228, 17220301, "FORGED"), // fails R3
      sins: mkSins(2, 2, ["Sloth x2"]),
      business: mkBusiness("A garden left untended.", false),
    },
  },
  {
    id: 5,
    spirit: { name: "Odette Fenn" },
    rules: ["R1", "R2", "R3"],
    documents: {
      // Clean approve — a breather to reward confidence before the ramp.
      certificate: mkCert("Odette Fenn", 19770211, 19770214, "VALID"),
      sins: mkSins(6, 6, ["Lust x3", "Pride x3"]),
      business: mkBusiness("A song never finished.", false),
    },
  },
  // === ACT II — the cross-checks get
  //     subtler: a near-miss date, an off-by-one tally. =======================
  {
    id: 6,
    spirit: { name: "Harlan Pike" },
    rules: ["R1", "R2", "R3"],
    documents: {
      // Heavy sinner (tally 9 > 7) with a FORGED seal -> fails R3.
      certificate: mkCert("Harlan Pike", 18120628, 18120630, "FORGED"),
      sins: mkSins(9, 9, ["Wrath x6", "Greed x3"]),
      business: mkBusiness("A brother, wronged.", false),
    },
  },
  {
    id: 7,
    spirit: { name: "Nettie Crane" },
    rules: ["R1", "R2", "R3"],
    documents: {
      // Subtle: tally 8 vs karma 7 -> fails R2 by one. Seal valid, dates fine.
      certificate: mkCert("Nettie Crane", 19200504, 19200505, "VALID"),
      sins: mkSins(8, 7, ["Envy x4", "Sloth x4"]),                      // fails R2
      business: mkBusiness("A letter, unsent.", false),
    },
  },
  {
    id: 8,
    spirit: { name: "Augustus Roe" },
    rules: ["R1", "R2", "R3"],
    documents: {
      // All four honest rules pass (heavy tally but seal VALID) -> APPROVE.
      certificate: mkCert("Augustus Roe", 16551120, 16551122, "VALID"),
      sins: mkSins(8, 8, ["Pride x5", "Wrath x3"]),
      business: mkBusiness("An empire, abandoned.", false),
    },
  },
  // === ACT III — the rulebook drifts CRUEL. Clause 7-c (middle initial). =====
  {
    id: 9,
    spirit: { name: "Selah J. Crowe" },
    rules: ["R1", "R2", "R3", "R4"],
    innocent: true,
    pleas: ["i only kept", "my mother's name", "please"],
    documents: {
      // Every honest rule PASSES. Only the cruel middle-initial clause damns her.
      certificate: mkCert("Selah J. Crowe", 19441109, 19441111, "VALID"),
      sins: mkSins(2, 2, ["Pride x1", "Envy x1"]),
      business: mkBusiness("Forgiveness, given.", true),
    },
  },
  {
    id: 10,
    spirit: { name: "Bartholomew Ash" },
    rules: ["R1", "R2", "R3", "R4"],
    documents: {
      // No middle initial; honest rules pass -> should APPROVE under cruel book.
      certificate: mkCert("Bartholomew Ash", 18891130, 18891201, "VALID"),
      sins: mkSins(5, 5, ["Greed x3", "Sloth x2"]),
      business: mkBusiness("A confession, written.", false),
    },
  },
  {
    id: 11,
    spirit: { name: "Cornelius P. Vane" },
    rules: ["R1", "R2", "R3", "R4"],
    documents: {
      // Bears a middle initial AND a forged seal: a genuine deny that ALSO
      // trips the cruel clause — teaches that cruelty and honesty can overlap.
      certificate: mkCert("Cornelius P. Vane", 17890712, 17890714, "FORGED"),
      sins: mkSins(3, 3, ["Greed x3"]),
      business: mkBusiness("A fortune, hidden.", false),
    },
  },
  // === ACT IV — a SECOND cruel clause: 9-a (resolved business). =============
  {
    id: 12,
    spirit: { name: "Wren Calloway" },
    rules: ["R1", "R2", "R3", "R4", "R5"],
    innocent: true,
    pleas: ["i finished", "i made it right", "is that wrong?"],
    documents: {
      // Honest rules pass, no middle initial — but she RESOLVED her business,
      // so clause 9-a condemns a soul precisely for finding peace.
      certificate: mkCert("Wren Calloway", 20010705, 20010707, "VALID"),
      sins: mkSins(3, 3, ["Envy x2", "Sloth x1"]),
      business: mkBusiness("Made peace with my father.", true),       // fails R5
    },
  },
  {
    id: 13,
    spirit: { name: "Gideon Thorne" },
    rules: ["R1", "R2", "R3", "R4", "R5"],
    documents: {
      // Genuinely fails an honest rule (forged seal). A real deny among cruelty.
      certificate: mkCert("Gideon Thorne", 16880814, 16880815, "FORGED"), // fails R3
      sins: mkSins(8, 8, ["Wrath x6", "Pride x2"]),
      business: mkBusiness("Vengeance, unpaid.", false),
    },
  },
  // === ACT V — a THIRD cruel clause: 3-f (too few sins). The cruelest. =======
  {
    id: 14,
    spirit: { name: "Thomasine Ware" },
    rules: ["R1", "R2", "R3", "R4", "R5", "R7"],
    innocent: true,
    pleas: ["i hurt no one", "i tried to be good", "is goodness a crime?"],
    documents: {
      // A near-saintly soul: one sin, no middle initial, business unresolved.
      // Honest rules ALL pass — but clause 3-f damns her for being unblemished.
      certificate: mkCert("Thomasine Ware", 19620917, 19620919, "VALID"),
      sins: mkSins(1, 1, ["Pride x1"]),                                // fails R7
      business: mkBusiness("A kindness, unrepaid.", false),
    },
  },
  {
    id: 15,
    spirit: { name: "Mordecai Slade" },
    rules: ["R1", "R2", "R3", "R4", "R5", "R7"],
    documents: {
      // A final honest approve under the full cruel book: enough sins, valid
      // seal, no middle initial, business unresolved. Reward careful reading.
      certificate: mkCert("Mordecai Slade", 18441008, 18441010, "VALID"),
      sins: mkSins(6, 6, ["Wrath x4", "Greed x2"]),
      business: mkBusiness("A ledger left open.", false),
    },
  },
  // ==== THE SELF CASE: your own certificate, judged by the cruel rulebook. ===
  {
    id: 16,
    spirit: { name: "The Notary" },
    rules: ["R1", "R2", "R3", "R4", "R5", "R7"],
    self: true,
    innocent: true,
    pleas: ["this is me", "i only filed the papers", "judge yourself"],
    documents: {
      // Your card PASSES every honest rule, but it bears a middle initial (R4)
      // AND your business is resolved (R5) — the very clauses you enforced all
      // night now condemn you. The rulebook says DENY. The choice is yours.
      certificate: mkCert("Aldous M. Penhallow", 18991221, 18991224, "VALID"),
      sins: mkSins(3, 3, ["Pride x1", "Sloth x2"]),
      business: mkBusiness("Filed every soul that was asked of me.", true),
    },
  },
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

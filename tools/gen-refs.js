#!/usr/bin/env node
/*
 * Generate reference images for a game plan from a JSON request list, using the OpenAI image API.
 *
 *   node tools/gen-refs.js <requests.json> [--only ID,ID] [--dry-run] [--quality medium] [--force]
 *
 * requests.json:
 *   { "slug": "look-alive", "outDir": "games/look-alive/art-src/refs", "cap": 30, "style": "shared style text",
 *     "requests": [ { "id": "LA-01", "file": "style-frame.png", "size": "1536x864",
 *                     "refs": ["style-frame.png"], "prompt": "..." } ] }
 *
 * A request with no "refs" uses the generation endpoint. A request with "refs" (file names inside outDir)
 * uses the edit endpoint with those images attached as style references.
 * The shared "style" text is appended to every prompt.
 * Key: OPENAI_API_KEY in the environment, or the file ~/.config/openai/api_key. It is never printed or written.
 * Usage and cost are logged to <outDir>/_usage.json, and the cap is enforced from that file.
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const MODEL = "gpt-image-2.6-sunburst";
// Dollars per 1M tokens, from the model page on 2026-11-14.
const PRICE = { text: 5, imageIn: 8, imageOut: 30 };

const args = process.argv.slice(2);
const listPath = args.find((a) => !a.startsWith("--"));
const flag = (n) => args.includes("--" + n);
const opt = (n, d) => { const i = args.indexOf("--" + n); return i >= 0 ? args[i + 1] : d; };
if (!listPath) { console.error("usage: node tools/gen-refs.js <requests.json> [--only ID,ID] [--dry-run] [--quality q] [--force]"); process.exit(2); }

const repo = path.resolve(__dirname, "..");
const spec = JSON.parse(fs.readFileSync(listPath, "utf8"));
const outDir = path.join(repo, spec.outDir);
const CAP = spec.cap || 30;
const only = opt("only", "");
const picked = only ? spec.requests.filter((r) => only.split(",").includes(r.id)) : spec.requests;
const usagePath = path.join(outDir, "_usage.json");
const usage = fs.existsSync(usagePath) ? JSON.parse(fs.readFileSync(usagePath, "utf8")) : { images: 0, dollars: 0, calls: [] };

if (flag("dry-run")) {
  console.log(`${spec.slug}: ${picked.length} request(s), ${usage.images}/${CAP} images used so far`);
  for (const r of picked) {
    const exists = fs.existsSync(path.join(outDir, r.file));
    console.log(`  ${r.id.padEnd(6)} ${r.file.padEnd(28)} ${(r.size || "1536x864").padEnd(10)} ${(r.refs && r.refs.length ? "edit" : "gen ").padEnd(5)} prompt ${r.prompt.length} chars${exists ? "  (exists, would skip)" : ""}`);
  }
  process.exit(0);
}

function readKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY.trim();
  const f = path.join(os.homedir(), ".config", "openai", "api_key");
  if (fs.existsSync(f)) return fs.readFileSync(f, "utf8").trim();
  console.error("No API key. Set OPENAI_API_KEY or put the key in ~/.config/openai/api_key");
  process.exit(2);
}

async function call(key, r) {
  const prompt = r.prompt + (spec.style ? "\n\n" + spec.style : "");
  const size = r.size || "1536x864";
  const refs = (r.refs || []).map((f) => path.join(outDir, f)).filter((f) => fs.existsSync(f));
  let url, init;
  if (refs.length) {
    const form = new FormData();
    form.append("model", MODEL);
    form.append("prompt", prompt);
    form.append("size", size);
    form.append("background", "opaque");
    form.append("output_format", "png");
    form.append("quality", opt("quality", "medium"));
    form.append("n", "1");
    for (const f of refs) form.append("image[]", new Blob([fs.readFileSync(f)], { type: "image/png" }), path.basename(f));
    url = "https://api.openai.com/v1/images/edits";
    init = { method: "POST", headers: { Authorization: "Bearer " + key }, body: form };
  } else {
    url = "https://api.openai.com/v1/images/generations";
    init = {
      method: "POST",
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({ model: MODEL, prompt, size, background: "opaque", output_format: "png", quality: opt("quality", "medium"), n: 1 }),
    };
  }
  for (let attempt = 1; attempt <= 2; attempt++) {
    const res = await fetch(url, { ...init, signal: AbortSignal.timeout(300000) });
    const text = await res.text();
    if (res.ok) return JSON.parse(text);
    let msg = text.slice(0, 400);
    try { const e = JSON.parse(text).error; msg = `${e.code || e.type}: ${e.message}`; } catch (_) {}
    if (attempt === 1 && (res.status === 429 || res.status >= 500)) { await new Promise((ok) => setTimeout(ok, 8000)); continue; }
    throw new Error(`HTTP ${res.status} ${msg}`);
  }
}

function cost(u) {
  if (!u) return 0;
  const d = u.input_tokens_details || {};
  const textIn = d.text_tokens ?? 0, imgIn = d.image_tokens ?? Math.max(0, (u.input_tokens || 0) - textIn);
  return (textIn * PRICE.text + imgIn * PRICE.imageIn + (u.output_tokens || 0) * PRICE.imageOut) / 1e6;
}

(async () => {
  const key = readKey();
  fs.mkdirSync(outDir, { recursive: true });
  let failed = 0;
  for (const r of picked) {
    const out = path.join(outDir, r.file);
    if (fs.existsSync(out) && !flag("force")) { console.log(`${r.id} skip (exists): ${r.file}`); continue; }
    if (usage.images >= CAP) { console.log(`${r.id} stop: ${spec.slug} has reached the cap of ${CAP} images`); break; }
    process.stdout.write(`${r.id} generating ${r.file} ... `);
    try {
      const j = await call(key, r);
      fs.writeFileSync(out, Buffer.from(j.data[0].b64_json, "base64"));
      const c = cost(j.usage);
      usage.images += 1; usage.dollars = +(usage.dollars + c).toFixed(4);
      usage.calls.push({ id: r.id, file: r.file, when: new Date().toISOString(), size: j.size, quality: j.quality, tokens: j.usage, dollars: +c.toFixed(4) });
      fs.writeFileSync(usagePath, JSON.stringify(usage, null, 2));
      console.log(`ok  $${c.toFixed(3)}  (${usage.images}/${CAP} images, $${usage.dollars.toFixed(2)} total)`);
    } catch (e) {
      failed++;
      console.log("FAILED " + e.message);
    }
  }
  process.exit(failed ? 1 : 0);
})();

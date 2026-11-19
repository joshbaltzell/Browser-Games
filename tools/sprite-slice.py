#!/usr/bin/env python3
"""Cut generated sprite sheets into named sprites and write an asset manifest.

Whole game, driven by its plan (the usual way):
    python3 tools/sprite-slice.py --plan docs/superpowers/plans/2026-11-14-prototypes/01-pond-chorus.md

  For every art request in the plan that has a `names:` list and a file in games/<slug>/art-src/,
  the sheet is cut into games/<slug>/assets/<name>.png. Background plates and panoramas are saved
  as JPEG. Drafts and layer tests are skipped. Then assets/manifest.js and art-src/contact.jpg
  are written.

One sheet:
    python3 tools/sprite-slice.py sheet.png --out games/x/assets --names a,b,c [--key ff00ff]

Names are matched to objects in reading order: rows top to bottom, left to right in each row.
The gap used to join detached bits (sparkles, sweat drops, a swarm of bees) is found
automatically: it is the smallest gap that gives exactly as many objects as there are names.
"""
import argparse, os, re, sys
from collections import deque
from PIL import Image, ImageDraw

SCALE = 4          # blob detection runs on a 1/4-size alpha mask
ALPHA_ON = 40      # alpha above this counts as part of an object (raised automatically for sheets with soft glows)
MIN_AREA = 30      # in small-mask pixels; smaller isolated specks are dropped


def load(path, key=None, tol=70):
    im = Image.open(path).convert("RGBA")
    if key:
        kr, kg, kb = (int(key[i:i + 2], 16) for i in (0, 2, 4))
        px = im.load()
        for y in range(im.height):
            for x in range(im.width):
                r, g, b, a = px[x, y]
                d = abs(r - kr) + abs(g - kg) + abs(b - kb)
                if d < tol:
                    px[x, y] = (r, g, b, 0)
                elif d < tol * 2:
                    px[x, y] = (r, g, b, a * (d - tol) // tol)
    return im


def components(im, alpha_on=ALPHA_ON):
    sw, sh = im.width // SCALE, im.height // SCALE
    data = im.getchannel("A").resize((sw, sh), Image.BOX).tobytes()
    seen = bytearray(sw * sh)
    comps = []
    for i in range(sw * sh):
        if data[i] > alpha_on and not seen[i]:
            q = deque([i]); seen[i] = 1
            x0 = x1 = i % sw; y0 = y1 = i // sw; area = 0
            while q:
                j = q.popleft(); area += 1
                x, y = j % sw, j // sw
                if x < x0: x0 = x
                if x > x1: x1 = x
                if y < y0: y0 = y
                if y > y1: y1 = y
                for yy in (y - 1, y, y + 1):
                    if 0 <= yy < sh:
                        for xx in (x - 1, x, x + 1):
                            if 0 <= xx < sw:
                                k = yy * sw + xx
                                if data[k] > alpha_on and not seen[k]:
                                    seen[k] = 1; q.append(k)
            comps.append([x0, y0, x1, y1, area])
    return comps


def gap(a, b):
    dx = max(a[0], b[0]) - min(a[2], b[2])
    dy = max(a[1], b[1]) - min(a[3], b[3])
    return max(dx, dy, 0)


def merge(cs, g):
    changed = True
    while changed:
        changed = False
        for i in range(len(cs)):
            for j in range(i + 1, len(cs)):
                if gap(cs[i], cs[j]) <= g:
                    a, b = cs[i], cs[j]
                    cs[i] = [min(a[0], b[0]), min(a[1], b[1]), max(a[2], b[2]), max(a[3], b[3]), a[4] + b[4]]
                    del cs[j]; changed = True; break
            if changed: break
    return cs


def find(im, want, alpha_on=ALPHA_ON):
    cs = merge(components(im, alpha_on), 1)
    best = None
    for g in range(1, 90):
        cs = merge(cs, g)
        big = [c for c in cs if c[4] >= MIN_AREA]
        if want is None and g == 6:
            return big, g
        if want is not None and len(big) == want:
            return big, g
        if want is not None and len(big) < want:
            break
        best = big
    return (best if want is None else None), None


def reading_order(cs):
    cs = sorted(cs, key=lambda c: (c[1] + c[3]) / 2)
    hs = sorted(c[3] - c[1] for c in cs)
    med = hs[len(hs) // 2] if hs else 1
    bands = []
    for c in cs:
        yc = (c[1] + c[3]) / 2
        if bands and yc - bands[-1][0] < 0.5 * med:
            bands[-1][1].append(c)
            bands[-1][0] = sum((i[1] + i[3]) / 2 for i in bands[-1][1]) / len(bands[-1][1])
        else:
            bands.append([yc, [c]])
    out = []
    for _, items in bands:
        out += sorted(items, key=lambda c: c[0])
    return out


def cut(im, c, pad=6, maxside=384, floor=0):
    box = (max(0, c[0] * SCALE - pad), max(0, c[1] * SCALE - pad),
           min(im.width, (c[2] + 1) * SCALE + pad), min(im.height, (c[3] + 1) * SCALE + pad))
    s = im.crop(box)
    if floor:   # sheet had soft glows: drop the haze and keep the solid object
        s.putalpha(s.getchannel("A").point(lambda v: 0 if v < floor else min(255, (v - floor) * 255 // (255 - floor))))
    bb = s.getchannel("A").point(lambda v: 255 if v > 12 else 0).getbbox()
    if bb:
        s = s.crop((max(0, bb[0] - 2), max(0, bb[1] - 2), min(s.width, bb[2] + 2), min(s.height, bb[3] + 2)))
    m = max(s.size)
    if m > maxside:
        s = s.resize((round(s.width * maxside / m), round(s.height * maxside / m)), Image.LANCZOS)
    return s


def slice_sheet(path, out, names, key=None, maxside=384):
    im = load(path, key)
    cs = g = None
    for alpha_on in (ALPHA_ON, 110, 170, 220):
        cs, g = find(im, len(names) if names else None, alpha_on)
        if cs is not None:
            break
    if cs is None:
        print(f"  !! {os.path.basename(path)}: could not find exactly {len(names)} objects"); return False
    cs = reading_order(cs)
    os.makedirs(out, exist_ok=True)
    for i, c in enumerate(cs):
        name = names[i] if names else f"sprite-{i + 1:02d}"
        s = cut(im, c, maxside=maxside, floor=alpha_on if alpha_on > ALPHA_ON else 0)
        s.save(os.path.join(out, name + ".png"), optimize=True)
    print(f"  {os.path.basename(path)}: {len(cs)} sprites (join gap {g * SCALE}px)")
    return True


def avg_colour(im):
    t = im.convert("RGBA").resize((16, 16), Image.BOX)
    r = g = b = n = 0
    raw = t.tobytes()
    for i in range(0, len(raw), 4):
        pr, pg, pb, pa = raw[i:i + 4]
        if pa > 60:
            r += pr * pa; g += pg * pa; b += pb * pa; n += pa
    return "#888888" if not n else "#%02x%02x%02x" % (r // n, g // n, b // n)


def write_manifest(assets):
    rows = []
    for f in sorted(os.listdir(assets)):
        base, ext = os.path.splitext(f)
        if ext.lower() not in (".png", ".jpg") or base.startswith("_"):
            continue
        im = Image.open(os.path.join(assets, f))
        rows.append(f'  "{base}": {{src: "assets/{f}", w: {im.width}, h: {im.height}, '
                    f'fallback: {{shape: "rect", color: "{avg_colour(im)}", w: {im.width}, h: {im.height}}}}}')
    with open(os.path.join(assets, "manifest.js"), "w") as fh:
        fh.write("// Generated by tools/sprite-slice.py. Rerun it after changing art; do not edit by hand.\n")
        fh.write("var ASSETS = {\n" + ",\n".join(rows) + "\n};\n")
        fh.write('if (typeof module !== "undefined") module.exports = ASSETS;\n')
    return len(rows)


def write_contact(assets, dest):
    files = [f for f in sorted(os.listdir(assets)) if f.endswith(".png")]
    if not files:
        return
    cell, cols = 200, 6
    rows = (len(files) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell, rows * (cell + 22)), (118, 120, 128))
    d = ImageDraw.Draw(sheet)
    for i, f in enumerate(files):
        s = Image.open(os.path.join(assets, f)).convert("RGBA")
        s.thumbnail((cell - 16, cell - 16))
        x = (i % cols) * cell + (cell - s.width) // 2
        y = (i // cols) * (cell + 22) + (cell - s.height) // 2
        sheet.paste(s, (x, y), s)
        d.text(((i % cols) * cell + 6, (i // cols) * (cell + 22) + cell + 2), f[:-4], fill=(255, 255, 255))
    sheet.save(dest, quality=82)


REQ = re.compile(r"^\*\*([A-Z]+-\d+) · ([^·]+?) · save as `([^`]+)`([^\n]*)\*\*", re.M)


def run_plan(plan):
    md = open(plan).read()
    slug = re.search(r"Save results in `games/([a-z0-9-]+)/art-src/`", md).group(1)
    repo = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    src = os.path.join(repo, "games", slug, "art-src")
    assets = os.path.join(repo, "games", slug, "assets")
    os.makedirs(assets, exist_ok=True)
    for f in os.listdir(assets):          # assets/ is fully generated, so start clean
        if f.endswith((".png", ".jpg")) or f == "manifest.js":
            os.remove(os.path.join(assets, f))
    print(slug)
    ok = True
    for rid, kind, fname, rest in REQ.findall(md):
        path = os.path.join(src, fname)
        if not os.path.exists(path) or re.search(r"draft|layer|style", kind, re.I):
            continue
        names = re.search(r"names: `([^`]+)`", rest)
        key = re.search(r"key: `([0-9a-fA-F]{6})`", rest)
        if names:
            mx = re.search(r"max: `(\d+)`", rest)
            ok &= slice_sheet(path, assets, names.group(1).split(","), key.group(1) if key else None, int(mx.group(1)) if mx else 384)
        elif re.search(r"plate|panorama", kind, re.I):
            base = os.path.splitext(fname)[0]
            Image.open(path).convert("RGB").save(os.path.join(assets, base + ".jpg"), quality=88, optimize=True)
            old = os.path.join(assets, base + ".png")
            if os.path.exists(old):
                os.remove(old)
            print(f"  {fname}: saved as {base}.jpg")
    n = write_manifest(assets)
    write_contact(assets, os.path.join(src, "contact.jpg"))
    print(f"  manifest.js: {n} assets")
    return ok


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("sheet", nargs="?")
    ap.add_argument("--plan")
    ap.add_argument("--out")
    ap.add_argument("--names", default="")
    ap.add_argument("--key")
    ap.add_argument("--max", type=int, default=384)
    a = ap.parse_args()
    if a.plan:
        sys.exit(0 if run_plan(a.plan) else 1)
    if not a.sheet or not a.out:
        ap.error("give --plan, or a sheet with --out")
    names = [n for n in a.names.split(",") if n]
    sys.exit(0 if slice_sheet(a.sheet, a.out, names, a.key, a.max) else 1)

#!/usr/bin/env python3
"""Build the Prototype Playbook review page from the plan markdown files."""
import base64, html, io, re, sys
from pathlib import Path
from PIL import Image

PLANS = Path("/Users/joshbaltzell/Documents/GitHub/Browser-Games/docs/superpowers/plans/2026-11-14-prototypes")
OUT = Path(__file__).parent / "prototype-playbook.html"

DOCS = [
    ("overview", "Overview", "README.md", None),
    ("runbook", "Runbook", "RUNBOOK.md", None),
    ("kit", "Shared kit", "00-shared-kit.md", None),
    ("pond-chorus", "Pond Chorus", "01-pond-chorus.md", "pond-chorus"),
    ("nerf-the-wolves", "Nerf the Wolves", "02-nerf-the-wolves.md", "nerf-the-wolves"),
    ("launch-window", "Launch Window", "03-launch-window.md", "launch-window"),
    ("picnic-raid", "Picnic Raid", "04-picnic-raid.md", "picnic-raid-impressionist"),
    ("honest-minigolf", "Honest Minigolf", "05-honest-minigolf.md", "honest-minigolf"),
    ("mabel-and-the-mabels", "Mabel & the Mabels", "06-mabel-and-the-mabels.md", "mabel-and-the-mabels"),
]
FILE_TO_ID = {f: i for i, _, f, _ in DOCS}

try:
    import markdown
    def render(md):
        return markdown.markdown(md, extensions=["tables", "fenced_code", "sane_lists"])
    MODE = "python-markdown"
except ImportError:
    markdown = None
    MODE = "builtin"

    def inline(s):
        s = html.escape(s, quote=False)
        s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
        s = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', s)
        return s

    def render(md):
        out, lines, i = [], md.split("\n"), 0
        while i < len(lines):
            ln = lines[i]
            if ln.startswith("```"):
                i += 1; buf = []
                while i < len(lines) and not lines[i].startswith("```"):
                    buf.append(lines[i]); i += 1
                i += 1
                out.append("<pre><code>" + html.escape("\n".join(buf), quote=False) + "</code></pre>")
                continue
            m = re.match(r"^(#{1,4}) (.*)", ln)
            if m:
                n = len(m.group(1)); out.append(f"<h{n}>{inline(m.group(2))}</h{n}>"); i += 1; continue
            if ln.startswith("|") and i + 1 < len(lines) and re.match(r"^\|[\s:|-]+\|$", lines[i + 1].strip()):
                head = [c.strip() for c in ln.strip().strip("|").split("|")]
                i += 2; rows = []
                while i < len(lines) and lines[i].startswith("|"):
                    rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")]); i += 1
                t = "<table><thead><tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr></thead><tbody>"
                for r in rows:
                    t += "<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>"
                out.append(t + "</tbody></table>"); continue
            if ln.startswith("> "):
                buf = []
                while i < len(lines) and lines[i].startswith(">"):
                    buf.append(lines[i].lstrip("> ")); i += 1
                out.append("<blockquote><p>" + inline(" ".join(buf)) + "</p></blockquote>"); continue
            if re.match(r"^(- |\d+\. )", ln):
                ordered = bool(re.match(r"^\d+\. ", ln)); tag = "ol" if ordered else "ul"; items = []
                while i < len(lines) and re.match(r"^(- |\d+\. )", lines[i]):
                    items.append(re.sub(r"^(- |\d+\. )", "", lines[i])); i += 1
                out.append(f"<{tag}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>"); continue
            if ln.strip() == "---":
                out.append("<hr>"); i += 1; continue
            if not ln.strip():
                i += 1; continue
            buf = []
            while i < len(lines) and lines[i].strip() and not re.match(r"^(#{1,4} |```|\||> |- |\d+\. )", lines[i]):
                buf.append(lines[i]); i += 1
            out.append("<p>" + inline(" ".join(buf)) + "</p>")
        return "\n".join(out)


def img_data(name):
    im = Image.open(PLANS / "moodboards" / f"{name}.jpg").convert("RGB")
    w = 1100
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, "JPEG", quality=72, optimize=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def post(h):
    h = re.sub(r'href="([0-9a-zA-Z-]+\.md)"', lambda m: f'href="#{FILE_TO_ID.get(m.group(1), "overview")}"', h)
    h = h.replace("<table>", '<div class="tw"><table>').replace("</table>", "</table></div>")
    h = re.sub(r"<li>\[ \] ", '<li class="todo">', h)
    return h


KICK = ("Read docs/superpowers/plans/2026-11-14-prototypes/00-shared-kit.md for the rules (the kit is already on main), "
        "then read {file} in the same folder and look at its two draft images in the drafts folder. "
        "Build the Slice 1 tasks in order on a new branch proto/{slug} off main. Use superpowers:executing-plans. "
        "The art is already in games/{slug}/assets with a manifest: use it, and do not regenerate art. "
        "Commit after each task. Do not push or merge. When Slice 1 is done, write NOTES.md, stop, "
        "and report what you verified, what you could not, and what Josh should judge by hand.")

def fix_lists(md):
    """GitHub lets a list follow a paragraph line directly; python-markdown needs a blank line."""
    out, fence, prev = [], False, ""
    item = re.compile(r"^(- |\d+\. )")
    for ln in md.split("\n"):
        if ln.startswith("```"):
            fence = not fence
        if not fence and item.match(ln) and prev.strip() and not item.match(prev) and not prev.startswith("  "):
            out.append("")
        out.append(ln); prev = ln
    return "\n".join(out)


REPO = PLANS.parents[3]
REQ = re.compile(r"^\*\*([A-Z]+-\d+) · ([^·]+?) · save as `([^`]+)`", re.M)


def art_data(path, plate):
    im = Image.open(path).convert("RGBA")
    w = 820
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    bg = Image.new("RGBA", im.size, (124, 126, 134, 255))
    bg.alpha_composite(im)
    buf = io.BytesIO(); bg.convert("RGB").save(buf, "JPEG", quality=74, optimize=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def gallery(slug, md, heading="Generated art"):
    src = REPO / "games" / slug / "art-src"
    items = []
    for rid, kind, fname in REQ.findall(md):
        f = src / fname
        if f.exists():
            plate = "plate" in kind.lower()
            items.append(f'<figure><img alt="{html.escape(kind)}" src="{art_data(f, plate)}">'
                         f'<figcaption><strong>{rid}</strong> · {html.escape(kind.strip())} · <code>{html.escape(fname)}</code></figcaption></figure>')
    items.sort(key=lambda h: 0 if 'draft-' in h else 1)
    if not items:
        return ""
    return f'<div class="art"><h3>{heading} ({len(items)})</h3><div class="gallery">' + "".join(items) + "</div></div>"


nav, sections, all_art = [], [], []
for did, title, fname, img in DOCS:
    body = post(render(fix_lists((PLANS / fname).read_text())))
    extra = ""
    if img:
        extra += f'<img class="mood" alt="{html.escape(title)} mood board" src="{img_data(img)}">'
        g = gallery(did, (PLANS / fname).read_text())
        contact = REPO / "games" / did / "art-src" / "contact.jpg"
        if contact.exists():
            cim = Image.open(contact).convert("RGB"); cbuf = io.BytesIO(); cim.save(cbuf, "JPEG", quality=72, optimize=True)
            g = (f'<div class="art"><h3>Cut sprites, ready for the builder</h3><img class="mood" alt="Cut sprites" '
                 f'src="data:image/jpeg;base64,{base64.b64encode(cbuf.getvalue()).decode()}"></div>') + g
        extra += g
        if g:
            all_art.append(f'<h2>{html.escape(title)}</h2>' + gallery(did, (PLANS / fname).read_text(), "Backdrops and sprite sheets"))
        extra += ('<div class="kick"><h3>Kickoff prompt for Slice 1</h3><pre><code>'
                  + html.escape(KICK.format(file=fname, slug=did), quote=False) + "</code></pre></div>")
    nav.append(f'<a class="navlink" href="#{did}" data-doc="{did}">{html.escape(title)}</a>')
    sections.append(f'<section class="doc" id="doc-{did}" data-doc="{did}">{extra}{body}</section>')

nav.insert(1, '<a class="navlink" href="#art" data-doc="art">All art</a>')
sections.insert(1, '<section class="doc" id="doc-art" data-doc="art"><h1>All generated art</h1>'
                '<p>Every image made so far, grouped by game. Sprite sheets are shown on grey so the transparent areas are visible. '
                'The full-size files are in each game\'s <code>art-src</code> folder.</p>' + "".join(all_art) + '</section>')

TEMPLATE = (Path(__file__).parent / "playbook_template.html").read_text()
page = TEMPLATE.replace("{{NAV}}", "\n".join(nav)).replace("{{SECTIONS}}", "\n".join(sections))
OUT.write_text(page)
print(f"mode={MODE} wrote {OUT} bytes={len(page)} sections={len(sections)} pres={page.count('<pre>')}")

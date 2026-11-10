#!/usr/bin/env python3
"""Build games/jam-tunnel/samples/{ebass,dbass,eguitar,agtr,epiano2,organ2}.js from freely licensed
multi-sampled instruments (one key center about every 3 semitones, soft + hard velocity layer).

The game must open by double-clicking index.html, so every instrument is a plain script holding base64
MP3s:  (window.JT_SAMPLES = window.JT_SAMPLES || {})["ebass"] = {"format": 2, "notes": {"28": [{"v": 80,
"rr": ["<base64 mp3>"]}, ...]}}   (key = MIDI note of the sample's real pitch, v = highest velocity the
layer covers, layers sorted by v).

Sources and licenses (each LICENSE file was read in the source repository; details in dev/sources-melodic.md):
  ebass    Swagbass (Ibanez/Vuitton bass guitar, fingered flatwounds) by D. Smolken / Karoryfer Samples, CC0
           https://github.com/sfzinstruments/karoryfer.swagbass  (LICENSE: "CC0 1.0 Universal")
  dbass    D. Smolken's 1958 Otto Rubner double bass, pizzicato, CC0
           https://github.com/sfzinstruments/dsmolken.double-bass  (LICENSE: "CC0 1.0 Universal")
  eguitar  Black And Green Guitars (green Gretsch Anniversary, clean), recorded by Brian Wood, mapped by
           D. Smolken / Karoryfer Samples, CC0
           https://github.com/sfzinstruments/karoryfer.black-and-green-guitars  (LICENSE: "CC0 1.0 Universal")
  agtr     Shinyguitar (acoustic archtop guitar) by D. Smolken / Karoryfer Samples, CC0
           https://github.com/sfzinstruments/karoryfer.shinyguitar  (LICENSE: "CC0 1.0 Universal")
  epiano2  Wurlitzer EP200 electric piano by Greg Sullivan (mapped by kinwie), CC BY 3.0
           https://github.com/sfzinstruments/GregSullivan.E-Pianos  (LICENSE: "Creative Commons Legal Code /
           Attribution 3.0 Unported"; credit: Greg Sullivan, http://www.sullivang.net/)
  organ2   Pipe organ (manual 3, open stops; Quiet and Loud sets) sampled by Simon Dalzell of Ivy Audio,
           from the Versilian Community Sample Library (VCSL), CC0
           https://github.com/sgossner/VCSL  (LICENSE: "CC0 1.0 Universal")

Needs: python3 (standard library only), curl and ffmpeg (/opt/homebrew/bin/ffmpeg or on PATH).
Samples are fetched from raw.githubusercontent.com, falling back to media.githubusercontent.com when a file is
a git-LFS pointer. Only the files that end up in the output are downloaded.

Usage: python3 dev/build-melodic.py [cache_dir] [name ...]
"""
import base64
import json
import os
import re
import shutil
import subprocess
import sys
from urllib.parse import quote

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, '..', 'samples')
CACHE = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '.cache-melodic'))
ONLY = sys.argv[2:]
FFMPEG = shutil.which('ffmpeg') or '/opt/homebrew/bin/ffmpeg'
RAW = 'https://raw.githubusercontent.com/%s/%s/%s'
MEDIA = 'https://media.githubusercontent.com/media/%s/%s/%s'
FADE = 0.12     # seconds of fade-out at the end of every sample
STEP = 3        # semitones between key centers

NC = 'https://creativecommons.org/publicdomain/zero/1.0/'
BY = 'https://creativecommons.org/licenses/by/3.0/'

# bands = indices into the instrument's sorted velocity bands, with the "v" (highest velocity covered) to emit.
INSTRUMENTS = {
    'ebass': dict(
        title='Electric bass (fingered)', repo='sfzinstruments/karoryfer.swagbass', branch='master',
        sfz='swagbass_clean.sfz', base='', pick=r'^notes/', lo=26, hi=55, cap=2.5,
        layers=[(0, 75), (1, 127)],
        credit=['Swagbass, bass guitar played and mapped by D. Smolken, Karoryfer Samples (2014), CC0 1.0 (%s).' % NC,
                'Source: https://github.com/sfzinstruments/karoryfer.swagbass']),
    'dbass': dict(
        title='Upright (double) bass, pizzicato', repo='sfzinstruments/dsmolken.double-bass', branch='master',
        sfz='d_smolken_rubner_bass_pizz.sfz', base='', pick=r'^pizz/pizz_[a-g]b?\d_', lo=26, hi=55, cap=2.5,
        layers=[(0, 80), (1, 127)],
        credit=['1958 Otto Rubner double bass played and mapped by D. Smolken (2013), CC0 1.0 (%s).' % NC,
                'Source: https://github.com/sfzinstruments/dsmolken.double-bass']),
    'eguitar': dict(
        title='Clean electric guitar (Gretsch)', repo='sfzinstruments/karoryfer.black-and-green-guitars', branch='master',
        sfz='Programs/modules/maps_green/ord.sfz', base='Samples/', pick=r'^green/ord/', lo=40, hi=84, cap=3.0,
        layers=[(1, 84), (2, 127)],
        credit=['Black And Green Guitars (green Gretsch), recorded by Brian Wood, mapped by D. Smolken, Karoryfer Samples, CC0 1.0 (%s).' % NC,
                'Source: https://github.com/sfzinstruments/karoryfer.black-and-green-guitars']),
    'agtr': dict(
        title='Acoustic guitar (archtop, steel strings)', repo='sfzinstruments/karoryfer.shinyguitar', branch='master',
        sfz='Programs/acoustic_one.sfz', base='Samples/', pick=r'^acoustic/[a-g]b?\d_vl\d_rr\d_\d\.wav$', lo=40, hi=79, cap=3.0,
        layers=[(1, 80), (3, 127)],
        credit=['Shinyguitar, acoustic archtop guitar played and mapped by D. Smolken, Karoryfer Samples, CC0 1.0 (%s).' % NC,
                'Source: https://github.com/sfzinstruments/karoryfer.shinyguitar']),
    'epiano2': dict(
        title='Electric piano (Wurlitzer EP200)', repo='sfzinstruments/GregSullivan.E-Pianos', branch='master',
        sfz='Wurlitzer EP200/Wurlitzer EP200.sfz', base='Wurlitzer EP200/Samples/', pick=r'.', lo=45, hi=86, cap=3.0,
        layers=[(1, 70), (3, 127)],
        credit=['Wurlitzer EP200 electric piano by Greg Sullivan (http://www.sullivang.net/), mapped to SFZ by kinwie,',
                'licensed CC BY 3.0 (%s) - attribution required.' % BY,
                'Source: https://github.com/sfzinstruments/GregSullivan.E-Pianos']),
    'organ2': dict(
        title='Pipe organ', repo='sgossner/VCSL', branch='master', cap=2.0, lo=45, hi=82,
        layers=[(0, 75), (1, 127)],
        # No SFZ for this one: file names carry the note (C3 = MIDI 60, i.e. the 61-key manual runs C1 = 36 .. C6 = 96).
        organ_dir='Aerophones/Edge-blown Aerophones/Pipe Organ/',
        organ_sets=[('Quiet', 'NT5_Man3Quiet_%s_rr1.wav'), ('Loud', 'Rode_Man3Open_%s.wav')],
        credit=['Pipe organ sampled by Simon Dalzell of Ivy Audio (Winter 2015-16), from the Versilian Community Sample Library (VCSL)',
                'by Versilian Studios LLC, CC0 1.0 (%s). Credit to author and Versilian Studios is encouraged.' % NC,
                'Source: https://github.com/sgossner/VCSL (Aerophones/Edge-blown Aerophones/Pipe Organ)']),
}

PC = {'C': 0, 'Db': 1, 'D': 2, 'Eb': 3, 'E': 4, 'F': 5, 'Gb': 6, 'G': 7, 'Ab': 8, 'A': 9, 'Bb': 10, 'B': 11}


def run(cmd, **kw):
    return subprocess.run(cmd, check=True, capture_output=True, **kw)


def download(repo, branch, path, dest):
    """Fetch repo/path into dest (cached); follow git-LFS pointers through media.githubusercontent.com."""
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return dest
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    url = RAW % (repo, branch, quote(path))
    print('downloading', url)
    run(['curl', '-sfL', '-o', dest, url])
    with open(dest, 'rb') as f:
        head = f.read(200)
    if head.startswith(b'version https://git-lfs'):
        url = MEDIA % (repo, branch, quote(path))
        print('  (LFS pointer) downloading', url)
        run(['curl', '-sfL', '-o', dest, url])
    return dest


def parse_sfz(text):
    """Return a list of region dicts with <global>/<master>/<group> opcodes inherited (comments, #define ignored)."""
    text = re.sub(r'//[^\n]*', '', text)
    defs = dict(re.findall(r'#define\s+(\$\w+)\s+(\S+)', text))
    regions, glob, master, group = [], {}, {}, {}
    for m in re.finditer(r'<(\w+)>([^<]*)', text):
        tag, body = m.groups()
        ops = dict(re.findall(r'(\w+)=(.*?)(?=\s+\w+=|\s*$)', body.strip(), re.S))
        if tag == 'global':
            glob, master, group = ops, {}, {}
        elif tag == 'master':
            master, group = ops, {}
        elif tag == 'group':
            group = ops
        elif tag == 'region':
            d = {}
            for part in (glob, master, group, ops):
                d.update(part)
            for k, v in defs.items():
                d['sample'] = d.get('sample', '').replace(k, v)
            regions.append(d)
    return regions


def norm_sample(s, base):
    s = s.replace('\\', '/')
    s = re.sub(r'^(\.\./)+', '', s)
    s = re.sub(r'^Samples/', '', s)
    return s


def pick_regions(spec, sfz_text):
    """-> {keycenter: {(lovel, hivel): sample path (relative, as written in the sfz)}}"""
    out = {}
    for r in parse_sfz(sfz_text):
        s = norm_sample(r.get('sample', ''), spec['base'])
        if not s or not re.search(spec['pick'], s) or re.search(r'noise|scrape|release|/rel', s, re.I):
            continue
        key = int(r.get('pitch_keycenter', r.get('key', 60)))
        band = (int(r.get('lovel', 0)), int(r.get('hivel', 127)))
        cur = out.setdefault(key, {}).get(band)
        if cur is None or s < cur:          # deterministic: first round robin by name
            out[key][band] = s
    return out


def choose_centers(spec, avail, bands):
    """Pick key centers about every STEP semitones across [lo, hi]. A center missing one of the wanted velocity
    bands is allowed but costs extra, so complete centers win unless they are further than ~2 semitones away."""
    wanted = [bands[i] for i, _ in spec['layers']]
    lo, hi = spec['lo'], spec['hi']
    pool = [k for k in sorted(avail) if lo - 2 <= k <= hi + 2]
    chosen = []
    target = lo
    while target <= hi + 1:
        def cost(c):
            return abs(c - target) + 1.5 * sum(b not in avail[c] for b in wanted)
        k = min(pool, key=lambda c: (cost(c), c))
        if abs(k - target) <= 2 and k not in chosen:
            chosen.append(k)
        target += STEP
    return sorted(chosen)


def layer_bands(spec, avail_k, bands):
    """Band for each wanted layer at one key center; a missing band falls back to the nearest available one.
    -> list of (band, v) with duplicates merged (the louder v wins)."""
    have = [i for i, b in enumerate(bands) if b in avail_k]
    out = {}
    for idx, v in spec['layers']:
        use = idx if bands[idx] in avail_k else min(have, key=lambda i: (abs(i - idx), i))
        out[use] = max(out.get(use, 0), v)
    return [(bands[i], v) for i, v in sorted(out.items())]


def process(src, dst, cap):
    """Mono 44.1 kHz WAV, leading silence trimmed (attack kept), capped length, short fade-out.
    The silence threshold is relative to the file's own peak (quiet soft layers would otherwise vanish)."""
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    thresh = max(-90.0, peak_db(src) - 40.0)
    af = ('silenceremove=start_periods=1:start_threshold=%.1fdB:start_silence=0.004,'
          'atrim=end=%.3f,areverse,afade=t=in:d=%.3f,areverse' % (thresh, cap, FADE))
    run([FFMPEG, '-v', 'error', '-y', '-i', src, '-ac', '1', '-ar', '44100', '-af', af, '-c:a', 'pcm_s16le', dst])
    if os.path.getsize(dst) < 20000:
        raise SystemExit('trimmed sample is (nearly) empty: ' + src)


def peak_db(path):
    p = subprocess.run([FFMPEG, '-hide_banner', '-i', path, '-af', 'volumedetect', '-f', 'null', '-'],
                       capture_output=True, text=True)
    m = re.search(r'max_volume: (-?[\d.]+) dB', p.stderr)
    return float(m.group(1)) if m else -3.0


def encode(src, gain_db):
    out = subprocess.run([FFMPEG, '-v', 'error', '-i', src, '-af', 'volume=%.2fdB' % gain_db, '-ac', '1', '-ar', '44100',
                          '-c:a', 'libmp3lame', '-b:a', '96k', '-f', 'mp3', '-'], capture_output=True, check=True).stdout
    return base64.b64encode(out).decode()


def organ_plan(spec):
    """-> ({key: {band: path}}, bands) for the SFZ-less organ."""
    names = {}
    for octave in range(1, 7):
        for n, pc in (('C', 0), ('D#', 3), ('F#', 6), ('A', 9)):
            names['%s%d' % (n, octave)] = 36 + 12 * (octave - 1) + pc
    avail = {}
    for (band_i, (setname, pat)) in enumerate(spec['organ_sets']):
        for nm, midi in names.items():
            if not spec['lo'] - 2 <= midi <= spec['hi'] + 2:
                continue
            avail.setdefault(midi, {})[(band_i, band_i)] = spec['organ_dir'] + setname + '/' + pat % nm
    return avail, [(0, 0), (1, 1)]


def build(name, spec):
    work = os.path.join(CACHE, name)
    if 'organ_dir' in spec:
        avail, bands = organ_plan(spec)
        sample_path = lambda rel: rel
    else:
        sfz = download(spec['repo'], spec['branch'], spec['sfz'], os.path.join(work, 'src.sfz'))
        avail = pick_regions(spec, open(sfz, errors='replace').read())
        bands = sorted({b for d in avail.values() for b in d})
        sample_path = lambda rel: spec['base'] + rel
    centers = choose_centers(spec, avail, bands)
    notes, procs = {}, []
    for k in centers:
        for band, v in layer_bands(spec, avail[k], bands):
            rel = avail[k][band]
            path = sample_path(rel)
            raw = download(spec['repo'], spec['branch'], path, os.path.join(work, 'raw', path.replace('/', '__')))
            dst = os.path.join(work, 'proc', '%d_%d.wav' % (k, v))
            process(raw, dst, spec['cap'])
            procs.append((k, v, dst))
    # one gain for the whole instrument: loudest sample peaks at -1.5 dBFS; layers keep their relative level
    loudest = max(peak_db(d) for _, _, d in procs)
    gain = max(-6.0, min(30.0, -1.5 - loudest))
    for k, v, dst in procs:
        notes.setdefault(str(k), []).append({'v': v, 'rr': [encode(dst, gain)]})
    for k in notes:
        notes[k].sort(key=lambda l: l['v'])
        notes[k][-1]['v'] = 127
        if len(notes[k]) == 1:
            notes[k][0]['v'] = 127
    header = ''.join('// %s\n' % l for l in ['%s - %s' % (name, spec['title'])] + spec['credit'] +
                     ['Generated by dev/build-melodic.py. Do not edit by hand.'])
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, name + '.js')
    data = {'format': 2, 'notes': {k: notes[k] for k in sorted(notes, key=int)}}
    with open(out, 'w') as f:
        f.write(header + '(window.JT_SAMPLES = window.JT_SAMPLES || {})[%s] = %s;\n' % (json.dumps(name), json.dumps(data)))
    print('%s: %d key centers %s, gain %+.1f dB, %d bytes' % (name, len(notes), sorted(map(int, notes)), gain, os.path.getsize(out)))


if __name__ == '__main__':
    os.makedirs(CACHE, exist_ok=True)
    for name, spec in INSTRUMENTS.items():
        if name in ONLY or (not ONLY and name != 'organ2'):   # the pipe organ isn't used by the game; name it to build it
            build(name, spec)

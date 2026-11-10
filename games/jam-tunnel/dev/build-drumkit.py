#!/usr/bin/env python3
"""Rebuild games/jam-tunnel/samples/drumkit.js from Karoryfer "Big Rusty Drums".

Kit:      Big Rusty Drums, a sampled rock kit (24" kick, 14" snare, 14"/18" toms, 14" hi-hats, 17" crash)
Author:   Karoryfer Samples (Rodrigo Rodrigues / Karoryfer, https://karoryfer.com)
License:  CC0 1.0 Universal (public domain dedication); no attribution required, given here anyway.
          https://github.com/sfzinstruments/karoryfer.big-rusty-drums/blob/main/LICENSE
Source:   https://github.com/sfzinstruments/karoryfer.big-rusty-drums  (FLAC samples + SFZ mappings)

The game must open from file://, so the kit ships as one plain script of base64 MP3s:
    (window.JT_SAMPLES = window.JT_SAMPLES || {})["drumkit"] = {"format": 2, "notes": {piece: [layer, ...]}}
    layer = {"v": highest MIDI velocity (1-127) the layer covers, "rr": [base64 mp3, ...]}   (layers ascending by v)

How it is built:
  * The SFZ mapping files are downloaded and parsed to find, for each drum, which FLAC is which
    velocity layer (lovel/hivel) and round robin (seq_position).
  * Per piece we take 3 velocity layers (soft, medium, hard) with 2 round robins each.
  * Close mic + overheads are summed to mono with fixed per-mic weights (the same weights for every
    layer of a piece, so soft/medium/hard keep their natural relative loudness).
  * Leading silence is cut at the first sample above -45 dB (the transient stays intact), the tail is
    trimmed per piece with a short fade-out, and everything is encoded as 44.1 kHz mono ~96 kbps MP3.
  * No per-file normalizing. One gain is applied to the whole kit (loudest hit -> -1 dBFS peak).

Usage: python3 dev/build-drumkit.py CACHE_DIR      (needs ffmpeg; ffmpeg path via $FFMPEG, default 'ffmpeg')
"""
import base64
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'samples', 'drumkit.js')
CACHE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '.cache-drumkit')
FFMPEG = os.environ.get('FFMPEG') or ('/opt/homebrew/bin/ffmpeg' if os.path.exists('/opt/homebrew/bin/ffmpeg') else 'ffmpeg')

RAW = 'https://raw.githubusercontent.com/sfzinstruments/karoryfer.big-rusty-drums/main/'
MAPS = 'Programs/mappings/'

# Layers: highest velocity the layer covers -> a velocity inside the kit's own layer we sample from
LAYERS = [(50, 30), (95, 72), (127, 115)]
RR_COUNT = 2

# piece -> (list of (SFZ mapping, mic weight, optional high-pass Hz), tail seconds)
PIECES = {
    'kick': ([('kick_24/k_kick', 1.0, 0), ('kick_24/k_oh', 0.5, 300)], 1.2),
    'snare': ([('snare_14/sn_center_top', 1.0, 0), ('snare_14/sn_center_oh', 0.6, 0)], 1.2),
    'hat': ([('hihat_14/ht_tc_cl', 1.0, 0), ('hihat_14/ht_tc_oh', 0.6, 0)], 0.6),
    'openhat': ([('hihat_14/ht_open_cl', 1.0, 0), ('hihat_14/ht_open_oh', 0.6, 0)], 1.2),
    'tomlow': ([('tom_18/tom_18_cl', 1.0, 0), ('tom_18/tom_18_oh', 0.6, 0)], 1.2),
    'tomhigh': ([('tom_14/tom_14_cl', 1.0, 0), ('tom_14/tom_14_oh', 0.6, 0)], 1.2),
    'crash': ([('crash_17/cr_oh', 1.0, 0), ('crash_17/cr_cl', 0.5, 0)], 2.8),
    # cross-stick; its SFZ has fixed 4-layer groups, handled the same way
    'rim': ([('snare_14/sn_ss_top', 1.0, 0), ('snare_14/sn_ss_oh', 0.6, 0)], 0.8),
}
FADE = 0.08
PEAK_TARGET_DB = -1.0


def fetch(rel, dest):
    path = os.path.join(CACHE, dest)
    if not os.path.exists(path):
        os.makedirs(os.path.dirname(path), exist_ok=True)
        try:
            with urllib.request.urlopen(RAW + rel) as r:
                data = r.read()
        except urllib.error.URLError:  # python.org builds on macOS often lack CA certs; curl has them
            data = subprocess.run(['curl', '-fsSL', RAW + rel], capture_output=True, check=True).stdout
        if data.startswith(b'version https://git-lfs'):
            raise SystemExit('LFS pointer returned for ' + rel + '; use media.githubusercontent.com')
        with open(path, 'wb') as f:
            f.write(data)
    return path


def parse_sfz(text):
    """-> list of (lovel, hivel, {seq_position: sample path relative to the SFZ's Programs dir})."""
    out = []
    for g in re.split(r'<group>', text)[1:]:
        head = g.split('<region>')[0]
        lo = re.search(r'lovel=(\d+)', head)
        hi = re.search(r'hivel=(\d+)', head)
        rrs = {}
        for reg in g.split('<region>')[1:]:
            smp = re.search(r'sample=(\S+)', reg)
            seq = re.search(r'seq_position=(\d+)', reg)
            if smp:
                rrs[int(seq.group(1)) if seq else 1] = smp.group(1)
        out.append((int(lo.group(1)) if lo else 0, int(hi.group(1)) if hi else 127, rrs))
    return out


def pick(groups, vel):
    for lo, hi, rrs in groups:
        if lo <= vel <= hi:
            return rrs
    raise SystemExit('no layer for velocity %d' % vel)


def sh(args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode:
        raise SystemExit('ffmpeg failed: %s\n%s' % (' '.join(args), r.stderr[-800:]))
    return r.stderr


def render_wav(flacs, tail, dest):
    """Mix the mic files (with weights) to mono, cut leading silence, trim, fade out."""
    args = [FFMPEG, '-y', '-hide_banner', '-loglevel', 'error']
    chains = []
    for i, (path, w, hp) in enumerate(flacs):
        args += ['-i', path]
        f = 'volume=%s' % w
        if hp:
            f = 'highpass=f=%d,' % hp + f
        chains.append('[%d:a]%s[m%d]' % (i, f, i))
    mix = ''.join('[m%d]' % i for i in range(len(flacs)))
    chains.append('%samix=inputs=%d:normalize=0:duration=longest,aformat=sample_rates=44100:channel_layouts=mono,'
                  'silenceremove=start_periods=1:start_threshold=-45dB:detection=peak,'
                  'atrim=end=%s,afade=t=out:st=%s:d=%s[out]' % (mix, len(flacs), tail, tail - FADE, FADE))
    args += ['-filter_complex', ';'.join(chains), '-map', '[out]', '-ar', '44100', '-ac', '1', '-c:a', 'pcm_s16le', dest]
    sh(args)


def peak_db(path):
    err = sh([FFMPEG, '-hide_banner', '-i', path, '-af', 'volumedetect', '-f', 'null', '-'])
    return float(re.search(r'max_volume: (-?[\d.]+) dB', err).group(1))


def main():
    work = os.path.join(CACHE, 'work')
    os.makedirs(work, exist_ok=True)
    wavs = {}  # (piece, layer index, rr) -> wav path
    for piece, (mics, tail) in PIECES.items():
        parsed = []
        for m, w, hp in mics:
            sfz_rel = MAPS + m + '.sfz'
            parsed.append((m, w, hp, parse_sfz(open(fetch(sfz_rel, 'sfz/' + m + '.sfz')).read())))
        for li, (vmax, probe) in enumerate(LAYERS):
            for rr in range(1, RR_COUNT + 1):
                files = []
                for m, w, hp, groups in parsed:
                    rrs = pick(groups, probe)
                    sample = rrs[rr]
                    # sample paths are written relative to the SFZ (../Samples/...); the repo root has Samples/
                    rel = 'Samples/' + sample.split('Samples/', 1)[1]
                    files.append((fetch(rel, 'flac/' + rel), w, hp))
                dest = os.path.join(work, '%s_%d_%d.wav' % (piece, li, rr))
                render_wav(files, tail, dest)
                wavs[(piece, li, rr)] = dest

    top = max(peak_db(p) for p in wavs.values())
    gain = PEAK_TARGET_DB - top
    print('loudest hit %.1f dB; kit gain %+.1f dB' % (top, gain))

    notes = {}
    for piece in PIECES:
        layers = []
        for li, (vmax, probe) in enumerate(LAYERS):
            rr_list = []
            for rr in range(1, RR_COUNT + 1):
                mp3 = os.path.join(work, '%s_%d_%d.mp3' % (piece, li, rr))
                sh([FFMPEG, '-y', '-hide_banner', '-loglevel', 'error', '-i', wavs[(piece, li, rr)],
                    '-af', 'volume=%.2fdB' % gain, '-ac', '1', '-ar', '44100', '-c:a', 'libmp3lame', '-b:a', '96k',
                    '-write_xing', '0', mp3])
                with open(mp3, 'rb') as f:
                    rr_list.append(base64.b64encode(f.read()).decode('ascii'))
            layers.append({'v': vmax, 'rr': rr_list})
        notes[piece] = layers

    header = (
        '// Drum kit: Big Rusty Drums by Karoryfer Samples, 24" kick / 14" snare / toms / hi-hats / 17" crash.\n'
        '// License: CC0 1.0 Universal (public domain), https://github.com/sfzinstruments/karoryfer.big-rusty-drums/blob/main/LICENSE\n'
        '// Source: https://github.com/sfzinstruments/karoryfer.big-rusty-drums\n'
        '// 3 velocity layers x 2 round robins per piece, close mic + overheads mixed to mono MP3.\n'
        '// Generated by dev/build-drumkit.py\n')
    body = '(window.JT_SAMPLES = window.JT_SAMPLES || {})["drumkit"] = ' + json.dumps({'format': 2, 'notes': notes}, separators=(', ', ': ')) + ';\n'
    with open(OUT, 'w') as f:
        f.write(header + body)
    print('wrote %s (%.2f MB)' % (os.path.normpath(OUT), os.path.getsize(OUT) / 1e6))


if __name__ == '__main__':
    main()

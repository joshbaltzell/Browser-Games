#!/usr/bin/env python3
"""Build games/jam-tunnel/grooves.js from the Groove MIDI Dataset.

The Groove MIDI Dataset (GMD) is 13.6 hours of professional drummers playing an electronic kit to a
click, by Google (Magenta), CC BY 4.0: https://magenta.tensorflow.org/datasets/groove
Download the MIDI-only zip (groove-v1.0.0-midionly.zip, 3 MB), unzip it, and run:

    python3 dev/mine-grooves.py path/to/groove

For each Jam Tunnel genre this writes:
  - grooves: four-bar beats lifted from real performances. Every hit keeps its grid position plus its
    offset in milliseconds and its velocity, so a groove recorded at 87 BPM keeps the same human feel
    at 95 BPM.
  - fills: the last beat or two of real fills, to lead into choruses.
  - feel: the genre's average snare lag behind the kick, hi-hat accent pattern and ghost-note rate,
    used to humanize the generated drum styles.
Standard library only.
"""
import csv
import json
import os
import statistics as st
import struct
import sys
from collections import defaultdict

ROOT = sys.argv[1] if len(sys.argv) > 1 else 'groove'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'grooves.js')

# Roland TD-11 notes as the dataset maps them -> Jam Tunnel drum pieces
PIECE = {
    36: 'kick',
    38: 'snare', 40: 'snare', 37: 'snare',            # head, rim shot, cross-stick (played softer below)
    42: 'hat', 22: 'hat', 44: 'hat',                  # closed, edge, pedal
    46: 'openhat', 26: 'openhat',
    43: 'tomlow', 58: 'tomlow', 47: 'tomlow', 45: 'tomlow',
    48: 'tomhigh', 50: 'tomhigh',
    49: 'crash', 55: 'crash', 57: 'crash', 52: 'crash',
    51: 'hat', 59: 'hat', 53: 'hat',                  # ride: the kit has no ride, so it rides the hat lane
}
PIECES = ['kick', 'snare', 'hat', 'openhat', 'tomlow', 'tomhigh', 'crash']

# Jam Tunnel genre -> dataset styles to draw from, tempo window, grid
# 'density': the hits per bar that suit the genre; 'ghosts': the most ghost snares per bar that still fit
GENRES = {
    'rock': {'styles': ['blues', 'rock', 'soul', 'funk', 'neworleans'], 'bpm': (70, 130), 'target': 96, 'feel': 'shuffle', 'density': (14, 26), 'ghosts': 4},
    'boombap': {'styles': ['hiphop', 'soul', 'funk'], 'bpm': (75, 105), 'target': 90, 'feel': 'straight', 'density': (14, 30), 'ghosts': 5},
    'pop': {'styles': ['pop', 'dance', 'rock', 'soul'], 'bpm': (85, 130), 'target': 112, 'feel': 'straight', 'density': (12, 22), 'ghosts': 2},
    'country': {'styles': ['country', 'rock', 'pop'], 'bpm': (75, 125), 'target': 104, 'feel': 'straight', 'density': (10, 20), 'ghosts': 2},
}


def read_midi(path):
    """Note-ons as (beat, note, velocity)."""
    d = open(path, 'rb').read()
    ntr, tpq = struct.unpack('>HH', d[10:14])
    pos, notes = 14, []

    def vlq(b, i):
        v = 0
        while True:
            c = b[i]; i += 1; v = (v << 7) | (c & 0x7f)
            if c < 0x80:
                return v, i

    for _ in range(ntr):
        ln = struct.unpack('>I', d[pos + 4:pos + 8])[0]
        body, pos = d[pos + 8:pos + 8 + ln], pos + 8 + ln
        i, tick, status = 0, 0, 0
        while i < len(body):
            delta, i = vlq(body, i)
            tick += delta
            b = body[i]
            if b == 0xff:
                l, j = vlq(body, i + 2)
                i = j + l
                continue
            if b in (0xf0, 0xf7):
                l, j = vlq(body, i + 1)
                i = j + l
                continue
            if b & 0x80:
                status = b; i += 1
            hi = status & 0xf0
            if hi in (0xc0, 0xd0):
                i += 1
                continue
            a1, a2 = body[i], body[i + 1]; i += 2
            if hi == 0x90 and a2 > 0:
                notes.append((tick / tpq, a1, a2))
    return notes


def to_hits(notes):
    hits = []
    for b, n, v in notes:
        p = PIECE.get(n)
        if not p:
            continue
        if n == 37:
            v = int(v * 0.6)
        hits.append((b, p, v))
    return hits


def latency(hits):
    """The kit's recording offset: the median distance of on-beat kicks from the beat, in beats."""
    offs = [b - round(b) for b, p, v in hits if p == 'kick' and abs(b - round(b)) < 0.15]
    return st.median(offs) if offs else 0.0


def swing_of(hits):
    """Where the off-beat eighths sit: 0.5 is straight, 0.667 is a full triplet shuffle."""
    pos = [b % 1 for b, p, v in hits if p in ('hat', 'openhat') and 0.35 < b % 1 < 0.8]
    return st.median(pos) if len(pos) > 8 else 0.5


def window(hits, start, bpm, unit):
    """Four bars from `start`, as [grid step, offset ms, piece index, velocity] on the given grid."""
    ms_per_beat = 60000 / bpm
    out = []
    for b, p, v in hits:
        rel = b - start
        if -0.1 <= rel < 16 - 0.1:
            step = round(rel / unit)
            if step >= round(16 / unit):
                continue
            off = (rel - step * unit) * ms_per_beat
            out.append([step, round(off, 1), PIECES.index(p), v])
    return out


def describe(win, unit):
    """A short plain description from what the groove actually does."""
    per_beat = round(1 / unit)
    kicks = [s for s, o, p, v in win if PIECES[p] == 'kick']
    snares = [(s, v) for s, o, p, v in win if PIECES[p] == 'snare']
    hats = [s for s, o, p, v in win if PIECES[p] in ('hat', 'openhat')]
    ghosts = sum(1 for s, v in snares if v < 45)
    backbeats = [s for s, v in snares if v >= 70]
    words = []
    off_kicks = sum(1 for s in kicks if s % per_beat) / 4
    if off_kicks >= 3:
        words.append('syncopated kick')
    if backbeats and all((s // per_beat) % 4 == 2 for s in backbeats):
        words.append('half-time snare')
    if ghosts >= 8:
        words.append('lots of ghost notes')
    elif ghosts >= 3:
        words.append('ghost notes')
    if len(hats) / 4 >= 12:
        words.append('busy hats')
    elif len(hats) / 4 <= 4:
        words.append('sparse hats')
    return words or ['straight-ahead']


def fit_score(win, style, bpm, spec, unit):
    """Lower is better: the genre's own recordings, near its tempo, a real backbeat, the right busyness."""
    per_beat = round(1 / unit)
    bar_hits = len(win) / 4
    ghosts = sum(1 for s, o, p, v in win if PIECES[p] == 'snare' and v < 45) / 4
    backbeat = sum(1 for s, o, p, v in win if PIECES[p] == 'snare' and v >= 60 and s % per_beat == 0 and (s // per_beat) % 2 == 1)
    lo, hi = spec['density']
    score = spec['styles'].index(style) * 1.5 + abs(bpm - spec['target']) / 15
    score += max(0, lo - bar_hits, bar_hits - hi) / 3 + max(0, ghosts - spec['ghosts']) / 2
    score += 0 if backbeat >= 6 else 2          # most of beats 2 and 4 across the four bars
    return score


def main():
    rows = list(csv.DictReader(open(os.path.join(ROOT, 'info.csv'))))
    result = {}
    for genre, spec in GENRES.items():
        unit = 1 / 3 if spec['feel'] == 'shuffle' else 0.25
        candidates, fills, lag, hat_acc, ghost_pos, ghost_total, snare_total = [], [], [], defaultdict(list), defaultdict(int), 0, 0
        for r in rows:
            style = r['style'].split('/')[0]
            if style not in spec['styles'] or r['time_signature'] != '4-4':
                continue
            bpm = int(r['bpm'])
            hits = to_hits(read_midi(os.path.join(ROOT, r['midi_filename'])))
            if not hits:
                continue
            lat = latency(hits)
            hits = [(b - lat, p, v) for b, p, v in hits]
            ms_per_beat = 60000 / bpm
            shuffled = swing_of(hits) > 0.6

            if r['beat_type'] == 'fill':
                # The last beat or two before the fill lands on a downbeat
                end = 4 * round(max(b for b, p, v in hits) / 4)
                if end < 4:
                    continue
                span = 2 if spec['feel'] == 'straight' else 1
                notes = [[round((b - end) / unit), round(((b - end) - round((b - end) / unit) * unit) * ms_per_beat, 1), PIECES.index(p), v]
                         for b, p, v in hits if -span - 0.05 <= b - end < -0.05]
                if 4 <= len(notes) <= 24 and any(PIECES[n[2]] in ('snare', 'tomlow', 'tomhigh') for n in notes):
                    fills.append({'span': span, 'notes': notes, 'style': style})
                continue
            if not (spec['bpm'][0] <= bpm <= spec['bpm'][1]) or (spec['feel'] == 'shuffle') != shuffled:
                continue

            # The feel: snare lag behind the kick, hat accents per position in the beat, ghost snares
            kick_off = [(b - round(b)) * ms_per_beat for b, p, v in hits if p == 'kick' and abs(b - round(b)) < 0.15]
            snare_off = [(b - round(b)) * ms_per_beat for b, p, v in hits if p == 'snare' and v >= 60 and abs(b - round(b)) < 0.15]
            if kick_off and snare_off:
                lag.append(st.median(snare_off) - st.median(kick_off))
            for b, p, v in hits:
                k = round((b % 1) / unit) % round(1 / unit)
                if p == 'hat':
                    hat_acc[k].append(v)
                if p == 'snare':
                    snare_total += 1
                    if v < 45:
                        ghost_total += 1
                        ghost_pos[round((b % 4) / unit) % round(4 / unit)] += 1

            # Four-bar windows on bar lines with a full kit playing
            last = max(b for b, p, v in hits)
            for start in range(0, int(last) - 15, 16):
                win = window(hits, start, bpm, unit)
                pieces = defaultdict(int)
                for s, o, p, v in win:
                    pieces[PIECES[p]] += 1
                if pieces['kick'] >= 6 and pieces['snare'] >= 6 and pieces['hat'] + pieces['openhat'] >= 12 and len(win) <= 160:
                    candidates.append({'drummer': r['drummer'], 'style': style, 'bpm': bpm, 'notes': win,
                                       'file': r['midi_filename'], 'score': fit_score(win, style, bpm, spec, unit)})

        # Best fits first, keeping the set varied: one per kick pattern, at most two per drummer and per recording
        seen, picked, per_drummer, per_file = set(), [], defaultdict(int), defaultdict(int)
        candidates.sort(key=lambda c: c['score'])
        for c in candidates:
            sig = tuple(sorted({s % round(4 / unit) for s, o, p, v in c['notes'] if PIECES[p] == 'kick'}))
            if sig in seen or per_drummer[c['drummer']] >= 2 or per_file[c['file']] >= 1:
                continue
            seen.add(sig)
            per_drummer[c['drummer']] += 1
            per_file[c['file']] += 1
            c['words'] = describe(c['notes'], unit)
            picked.append(c)
            if len(picked) >= 10:
                break

        steps = round(1 / unit)
        hat_mean = st.mean([v for vs in hat_acc.values() for v in vs]) if hat_acc else 64
        result[genre] = {
            'unit': unit,
            'grooves': [{'bpm': c['bpm'], 'style': c['style'], 'words': c['words'], 'notes': c['notes']} for c in picked],
            'fills': fills[:24],
            'feel': {
                'snareLagMs': round(st.median(lag), 1) if lag else 0,
                'hatAccent': [round(st.mean(hat_acc[k]) / hat_mean, 2) if hat_acc[k] else 1 for k in range(steps)],
                'ghostRate': round(ghost_total / max(1, snare_total), 2),
                'ghostPositions': [round(ghost_pos[k] / max(1, ghost_total), 3) for k in range(round(4 / unit))],
            },
        }
        print('%-8s %2d grooves from %3d candidates, %2d fills, snare lag %+.1f ms, ghost rate %.0f%%' % (
            genre, len(picked), len(candidates), len(fills[:24]), result[genre]['feel']['snareLagMs'], 100 * result[genre]['feel']['ghostRate']))
        for c in picked:
            print('          %3d BPM %-10s %s' % (c['bpm'], c['style'], ', '.join(c['words'])))

    header = ('// Drum grooves, fills and feel templates from the Groove MIDI Dataset by Google (Magenta),\n'
              '// CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/), https://magenta.tensorflow.org/datasets/groove\n'
              '// Generated by dev/mine-grooves.py. Do not edit by hand.\n'
              '// Notes are [grid step, offset in ms, piece index, velocity 0-127]; pieces: ' + ', '.join(PIECES) + '\n')
    with open(OUT, 'w') as f:
        f.write(header + 'window.JT_GROOVES = ' + json.dumps({'pieces': PIECES, 'genres': result}, separators=(',', ':')) + ';\n')
    print('wrote', OUT, os.path.getsize(OUT), 'bytes')


main()

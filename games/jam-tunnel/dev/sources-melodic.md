# Sources for the melodic instruments built by dev/build-melodic.py

Every license below was read from the LICENSE file in the source repository (first lines quoted). Output: mono MP3,
96 kbps, 44.1 kHz; leading silence trimmed (attack kept), capped length, 0.12 s fade-out; one gain per instrument
(loudest sample peaks at -1.5 dBFS), so the relative level of the layers is the recording's own. One round robin per
layer. Key centers about every 3 semitones; the player pitch-shifts to fill the gaps.

| samples/ | Instrument | Key centers (MIDI) | Layers (v) |
|---|---|---|---|
| ebass.js | Swagbass, fingered electric bass | 27-57 every 3 | 2 (75, 127) |
| dbass.js | Rubner double bass, pizzicato | 27-55 every 3-4 | 2 (80, 127) |
| eguitar.js | Gretsch, clean electric guitar | 40-85 every 3 | 2 (84, 127) |
| agtr.js | Shinyguitar, acoustic archtop | 40-78 every 2-3 | 2 (80, 127) |
| epiano2.js | Wurlitzer EP200 | 45-85 (sparse above 61) | 2 where the source has them, else 1 |
| organ2.js | Pipe organ, manual 3 open stops | 45-81 every 3 | 2 (75, 127) |

## ebass - Swagbass
- Author: D. Smolken, Karoryfer Samples (2014). Bass guitar with Louis Vuitton fabric finish (Ibanez BTB-400QM base),
  d'Addario Chrome flatwounds, direct, neck pickup. Fifths tuning (CGDA).
- Repo: https://github.com/sfzinstruments/karoryfer.swagbass
- License: [LICENSE](https://github.com/sfzinstruments/karoryfer.swagbass/blob/master/LICENSE) - first lines
  "Creative Commons Legal Code / CC0 1.0 Universal". Readme also says "Royalty-free for all commercial and non-commercial use."
- Taken: `swagbass_clean.sfz` mapping (no release samples), `notes/*_p_*` (soft) and `notes/*_f_*` (hard), round robin 1.
  The `fff` layer was left out.

## dbass - D. Smolken double bass
- Author: D. Smolken. 1958 Otto Rubner double bass, Thomastik-Infeld Spirocore strings, fifths tuning. Pizzicato only.
- Repo: https://github.com/sfzinstruments/dsmolken.double-bass
- License: [LICENSE](https://github.com/sfzinstruments/dsmolken.double-bass/blob/master/LICENSE) - "Creative Commons Legal Code /
  CC0 1.0 Universal" (GitHub reports CC0-1.0).
- Taken: `d_smolken_rubner_bass_pizz.sfz`, `pizz/pizz_<note>_<dyn><rr>.wav` for velocity bands 1-74 and 75-120
  (the 121+ accent band and all noises left out).

## eguitar - Black And Green Guitars (Gretsch)
- Author: recorded and photographed by Brian Wood (green Gretsch Anniversary); mapped by D. Smolken, Karoryfer Samples.
- Repo: https://github.com/sfzinstruments/karoryfer.black-and-green-guitars
- License: [LICENSE](https://github.com/sfzinstruments/karoryfer.black-and-green-guitars/blob/master/LICENSE) - "Creative Commons
  Legal Code / CC0 1.0 Universal".
- Taken: `Programs/modules/maps_green/ord.sfz`, `Samples/green/ord/*` sustained single notes, bands mf (43-84) and f (85-127).
  Not the Hofner (black), twang/staccato/hammer-on/feedback variants.

## agtr - Shinyguitar
- Author: D. Smolken, Karoryfer Samples. Acoustic archtop guitar (steel strings). Note: an archtop, not a flat-top dreadnought.
- Repo: https://github.com/sfzinstruments/karoryfer.shinyguitar
- License: [LICENSE](https://github.com/sfzinstruments/karoryfer.shinyguitar/blob/master/LICENSE) - "Creative Commons Legal Code /
  CC0 1.0 Universal".
- Taken: `Programs/acoustic_one.sfz`, `Samples/acoustic/<note>_vl2_rr1_1.wav` (soft, vel 33-64) and `..._vl4_...` (hard, 97+).
  Release samples and noises left out.

## epiano2 - Wurlitzer EP200
- Author: Greg Sullivan (http://www.sullivang.net/), used with his permission with a request for attribution; SFZ mapping by kinwie.
- Repo: https://github.com/sfzinstruments/GregSullivan.E-Pianos
- License: [LICENSE](https://github.com/sfzinstruments/GregSullivan.E-Pianos/blob/master/LICENSE) - "Creative Commons Legal Code /
  Attribution 3.0 Unported" (CC BY 3.0; the README repeats it). **Attribution required** - the credit is in the header of
  samples/epiano2.js; keep it in the game's credits.
- Taken: `Wurlitzer EP200/Wurlitzer EP200.sfz`, FLAC samples in velocity bands mp (38-65) and ff (90-127). The source
  is sparse (a sample per 3-6 keys, not every key has every velocity band; those get one layer). The small per-sample `tune`
  offsets (up to 12 cents) in the SFZ are not applied.

## organ2 - VCSL Pipe Organ

*Not shipped:* a church pipe organ is the wrong sound for the rock and hip hop organ parts, which want a drawbar organ, so the game keeps FluidR3's drawbar organ. The build script can still make organ2.js.
- Author: sampled by Simon Dalzell of Ivy Audio (Winter 2015-16); Versilian Studios LLC (VCSL). Info.txt asks that credit to both
  be given; the license does not require it.
- Repo: https://github.com/sgossner/VCSL, folder `Aerophones/Edge-blown Aerophones/Pipe Organ`
- License: [LICENSE](https://github.com/sgossner/VCSL/blob/master/LICENSE) - "Creative Commons Legal Code / CC0 1.0 Universal".
- Taken: manual 3, `Quiet/NT5_Man3Quiet_<note>_rr1.wav` (soft layer) and `Loud/Rode_Man3Open_<note>.wav` (hard layer) for
  A1-A4 in minor thirds (key centers 45-81). File names carry the note with C3 = MIDI 60 (verified by FFT: C3 sample = 261 Hz).
  The source is quiet (peaks -23 to -33 dBFS), so it gets about +20 dB. This is a church-style pipe organ, not a Hammond.
  The VSCO-2-CE repo holds the same organ under `Keys/Organ`.

## Not used
- jRhodes3c / jRhodes3d: samples are CC BY-NC (jRhodes3d LICENSE: "License for samples: CC BY-NC").
- Ovation Guitar, Damien's Funky Guitar (sfzinstruments): no license stated in the repo.
- VCSL / VSCO-2-CE: no Rhodes/Wurlitzer or Hammond-type organ in the library (only TX81Z FM electric pianos, pipe organs).

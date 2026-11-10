# Drum kit sources

**Kit:** Big Rusty Drums (Karoryfer Samples), https://github.com/sfzinstruments/karoryfer.big-rusty-drums
**License:** CC0 1.0 Universal (public domain dedication). The repo's [LICENSE](https://github.com/sfzinstruments/karoryfer.big-rusty-drums/blob/main/LICENSE) file opens with "Creative Commons Legal Code / CC0 1.0 Universal". Verified by fetching the file on 2026-11-10. No attribution is required; the credit is kept in `samples/drumkit.js` anyway.

## What was taken

From the multi-sampled FLAC sets, mapped with the kit's own SFZ files (`Programs/mappings/*.sfz`, parsed by `dev/build-drumkit.py`):

| Game piece | Source | Mics |
|---|---|---|
| kick | 24" kick | kick mic + overheads (high-passed at 300 Hz, as the SFZ does) |
| snare | 14" snare, center hit | top mic + overheads |
| hat | 14" hi-hat, tip closed (`tc`) | close + overheads |
| openhat | 14" hi-hat, open | close + overheads |
| tomlow | 18" floor tom | close + overheads |
| tomhigh | 14" tom | close + overheads |
| crash | 17" crash | overheads + close |
| rim | 14" snare cross-stick (`sidestick`) | top mic + overheads |

Each piece: 3 velocity layers (game velocity 1-50, 51-95, 96-127, sampled from the kit's layers at velocity 30, 72 and 115) with 2 of the kit's 4 round robins each. Mono, 44.1 kHz, about 96 kbps MP3. No per-file normalizing; one gain for the whole kit. Output is about 1.0 MB.

Downloaded only the roughly 100 FLAC files and 20 SFZ files needed, into a cache directory outside the repo (the repo itself is not cloned).

## Why this kit

- Checked against the other candidates on the same page. Swirly Drums and Unruly Drums are CC0 too, but Unruly has no toms, and Swirly's samples are 10 to 80 MB per piece in several mic/wetness versions, so extracting just a few is slower with no gain here.
- Big Rusty has every piece we need (kick, snare, two tom sets, hats, crash, cross-stick) in one consistent kit, with 6 to 14 velocity layers and 4 round robins each, so picking 3 layers still sounds natural.
- Dry, punchy close-mic rock sound that suits the toy's pop/rock genres; the overhead mic adds the room feel.
- Not checked in detail: SM Drums and Muldjord Kit (not needed once Big Rusty covered everything).

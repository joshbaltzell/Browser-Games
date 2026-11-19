#!/usr/bin/env python3
"""Compose the hub card art (720x320 JPG) for games that have a background plate and character sprites.
   python3 tools/make-hub-cards.py [slug ...]      writes games/<slug>/assets/hub-card.jpg
Each spec: background (cropped to 9:4 around a focus point) plus sprites placed by centre x (0..1), bottom y (0..1) and height (fraction of card height)."""
import sys
from PIL import Image, ImageFilter, ImageEnhance

W, H = 720, 320
SPECS = {
  'look-alive': dict(bg='intro/intro-5.jpg', focus=(0.5, 0.46), zoom=1.0, tint=0.0, sprites=[]),
  'mabel-and-the-mabels': dict(bg='bg-plaza.jpg', focus=(0.5, 0.62), zoom=1.0, tint=0.0,
      sprites=[('pigeon.png', .16, .96, .34), ('mabel-trumpet.png', .5, 1.04, .86), ('tomato.png', .80, .80, .22), ('inspector.png', .86, 1.02, .62)]),
  'honest-minigolf': dict(bg='bg-carnival.jpg', focus=(0.5, 0.6), zoom=1.0, tint=0.0,
      sprites=[('mill-body.png', .22, 1.0, .70), ('hal-grin.png', .60, 1.04, .86), ('teddy.png', .88, .98, .38)]),
  'picnic-raid': dict(bg='bg-lawn.jpg', focus=(0.5, 0.6), zoom=1.0, tint=0.0,
      sprites=[('pie.png', .52, .92, .62), ('ant-a.png', .24, .98, .50), ('ant-b.png', .80, .98, .50), ('crumb.png', .38, .70, .14)]),
  'launch-window': dict(bg='bg-pad.jpg', focus=(0.5, 0.6), zoom=1.0, tint=0.0,
      sprites=[('rocket.png', .5, 1.02, .92), ('tank.png', .20, .98, .46), ('bolt-idle.png', .80, 1.0, .62)]),
  'nerf-the-wolves': dict(bg='bg-meadow.jpg', focus=(0.5, 0.62), zoom=1.0, tint=0.0,
      sprites=[('rabbit-happy.png', .14, 1.0, .46), ('wolf-happy.png', .5, 1.04, .90), ('deer-happy.png', .86, 1.0, .66)]),
  'pond-chorus': dict(bg='bg-pond.jpg', focus=(0.5, 0.62), zoom=1.0, tint=0.0,
      sprites=[('cricket-sing.png', .18, .92, .42), ('frog-sing.png', .5, 1.0, .74), ('owl-sing.png', .84, .90, .66)]),
}

def trim(im):
    bb = im.getchannel('A').getbbox()
    return im.crop(bb) if bb else im

def compose(slug, spec):
    a = 'games/%s/assets/' % slug
    bg = Image.open(a + spec['bg']).convert('RGB')
    cw = bg.width / spec['zoom']; ch = cw * H / W
    if ch > bg.height / spec['zoom']: ch = bg.height / spec['zoom']; cw = ch * W / H
    cx = spec['focus'][0] * bg.width; cy = spec['focus'][1] * bg.height
    x0 = min(max(cx - cw / 2, 0), bg.width - cw); y0 = min(max(cy - ch / 2, 0), bg.height - ch)
    card = bg.crop((int(x0), int(y0), int(x0 + cw), int(y0 + ch))).resize((W, H), Image.LANCZOS)
    card = ImageEnhance.Brightness(card).enhance(0.92)
    for name, fx, fy, fh in spec['sprites']:
        sp = trim(Image.open(a + name).convert('RGBA'))
        h = int(H * fh); w = int(sp.width * h / sp.height); sp = sp.resize((w, h), Image.LANCZOS)
        x = int(W * fx - w / 2); y = int(H * fy - h)
        sh = Image.new('RGBA', (w + 40, h + 40), (0, 0, 0, 0)); sh.paste((0, 0, 0, 120), (20, 28), sp.getchannel('A'))
        sh = sh.filter(ImageFilter.GaussianBlur(7))
        card.paste(sh, (x - 20, y - 20), sh)
        card.paste(sp, (x, y), sp)
    out = a + 'hub-card.jpg'
    card.save(out, quality=84, optimize=True)
    return out

if __name__ == '__main__':
    todo = sys.argv[1:] or list(SPECS)
    for s in todo:
        print(compose(s, SPECS[s]))

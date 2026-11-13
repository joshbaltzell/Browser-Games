#!/usr/bin/env bash
# Serves the game over http, loads it in a real browser, drives the look test (?look) and the play scene, checks them.
set -u
GAME_DIR="$(cd "$(dirname "$0")/.." && pwd)"

need() { command -v "$1" >/dev/null 2>&1 || { echo "smoke FAILED: '$1' is not installed or not on PATH" >&2; exit 1; }; }
need python3
need playwright-cli

PORT="${CR_PORT:-8765}"
SESSION="cr-smoke-$$"
SHOT_DIR="${CR_SHOT_DIR:-$(mktemp -d)}"
mkdir -p "$SHOT_DIR"
SHOT_DIR="$(cd "$SHOT_DIR" && pwd)" # absolute: the script changes directory below
echo "screenshots: $SHOT_DIR"

# playwright-cli writes .playwright-cli/ into its working directory: keep that out of the game folder.
WORK_DIR="$(mktemp -d)"
cd "$WORK_DIR" || exit 1

pw() { playwright-cli -s="$SESSION" "$@"; }
ev() { pw --raw eval "$1" | tr -d '[:space:]"'; }
fail() { echo "smoke FAILED: $1" >&2; exit 1; }

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$GAME_DIR" >/dev/null 2>&1 &
SERVER_PID=$!
cleanup() {
  pw close >/dev/null 2>&1 || true
  kill "$SERVER_PID" >/dev/null 2>&1
  wait "$SERVER_PID" 2>/dev/null
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

sleep 1
kill -0 "$SERVER_PID" 2>/dev/null || fail "could not start http server on port $PORT (already in use?)"

pw open "http://localhost:$PORT/index.html?look" >/dev/null || fail "playwright-cli could not open the page"
pw reload >/dev/null
sleep 1

READY=$(ev "window.__cr && window.__cr.ready")
if [ "$READY" != "true" ]; then
  echo "smoke FAILED: window.__cr.ready was '$READY', expected true" >&2
  echo "__cr.error:" >&2
  pw --raw eval "JSON.stringify(window.__cr && window.__cr.error)" >&2
  exit 1
fi

check_console() {
  local errors
  errors=$(pw console error 2>&1 | grep -v 'favicon.ico') # a missing favicon over http is not a game error
  if echo "$errors" | grep -qiE '\[error\]|error:|exception'; then
    echo "smoke FAILED: console errors:" >&2
    echo "$errors" >&2
    exit 1
  fi
}
check_console
pw screenshot --filename "$SHOT_DIR/boot.png" >/dev/null

# Each step: do it, wait 1.5 s for the page to draw it, then look.
shot() { sleep 1.5; pw screenshot --filename "$SHOT_DIR/$1.png" >/dev/null; }

for a in idle run aim flinch talk; do
  ev "__cr.anim('$a')" >/dev/null
  shot "anim-$a"
done
ev "__cr.anim('idle')" >/dev/null

ev "__cr.gameCam(true)" >/dev/null
shot gamecam
ev "__cr.gameCam(false)" >/dev/null

sleep 1.5
CALLS_ONE=$(ev "__cr.stats().calls")
ev "__cr.perf(true)" >/dev/null
sleep 6
STATS=$(pw --raw eval "JSON.stringify(__cr.stats())")
CHARS=$(ev "__cr.stats().characters")
CALLS_ON=$(ev "__cr.stats().calls")
TRIS=$(ev "__cr.stats().tris")
[ "$CHARS" = "11" ] || fail "perf test: characters was '$CHARS', expected 11 ($STATS)"
[ "$CALLS_ON" -lt 400 ] 2>/dev/null || fail "perf test: draw calls '$CALLS_ON', expected under 400 ($STATS)"
[ "$TRIS" -lt 300000 ] 2>/dev/null || fail "perf test: triangles '$TRIS', expected under 300000 ($STATS)"
shot perf
echo "perf: $STATS (one character: $CALLS_ONE calls)"

ev "__cr.outlines(false)" >/dev/null
sleep 1.5
CALLS_OFF=$(ev "__cr.stats().calls")
[ "$CALLS_OFF" -lt "$CALLS_ON" ] 2>/dev/null || fail "outlines off: draw calls '$CALLS_OFF', expected fewer than $CALLS_ON"
ev "__cr.outlines(true)" >/dev/null
ev "__cr.perf(false)" >/dev/null

THREW=$(ev "(() => { try { __cr.anim('nonsense'); __cr.expression('nonsense'); return 'ok'; } catch (e) { return 'threw: ' + e.message; } })()")
[ "$THREW" = "ok" ] || fail "unknown animation or expression threw: $THREW"

check_console

# ---- play scene (the milestone 3 grey room, ?room) --------------------------
pw goto "http://localhost:$PORT/index.html?room" >/dev/null || fail "could not open the play scene"
sleep 2
READY=$(ev "window.__cr && window.__cr.ready && !!window.__cr.drive")
[ "$READY" = "true" ] || fail "play scene: not ready ($READY)"
check_console

expect() { # label, js expression returning 'ok' or a description
  local r
  r=$(ev "$2")
  [ "$r" = "ok" ] || fail "play: $1: $(pw --raw eval "JSON.stringify([__cr.player(), __cr.camera()])") ($r)"
}

ev "__cr.place('lane')" >/dev/null
ev "__cr.drive({ moveY: -1 })" >/dev/null
sleep 1
expect "jog 4.5 m/s" "(() => { const p = __cr.player(); return Math.abs(p.speed - 4.5) <= 0.1 && p.state === 'move' ? 'ok' : 'bad'; })()"

ev "__cr.place('lane')" >/dev/null
ev "__cr.drive({ moveY: -1, sprint: true })" >/dev/null
sleep 1
expect "sprint 7.5 m/s" "(() => { const p = __cr.player(); return Math.abs(p.speed - 7.5) <= 0.1 && p.state === 'sprint' ? 'ok' : 'bad'; })()"
pw screenshot --filename "$SHOT_DIR/sprint.png" >/dev/null

ev "__cr.drive(null)" >/dev/null
ev "__cr.place('lane')" >/dev/null
sleep 0.5
ev "window.__rollStart = { pos: __cr.player().pos, entries: __cr.player().entries }" >/dev/null
# The tap and the release go in one call: separate calls are ~0.6 s apart, which would jog on after the roll.
ev "(async () => { __cr.drive({ moveY: -1, tap: true }); await new Promise(r => setTimeout(r, 60)); __cr.drive({}); return 'ok'; })()" >/dev/null
pw screenshot --filename "$SHOT_DIR/roll.png" >/dev/null
sleep 1
ev "__cr.drive(null)" >/dev/null
expect "roll 5 m" "(() => { const a = window.__rollStart, p = __cr.player(); const d = Math.hypot(p.pos[0] - a.pos[0], p.pos[2] - a.pos[2]); return p.entries > a.entries && Math.abs(d - 5) <= 0.3 ? 'ok' : 'bad d=' + d; })()"

ev "__cr.place('wall')" >/dev/null
ev "__cr.drive({ moveY: -1 })" >/dev/null
sleep 2
expect "stays inside the wall" "(() => { const p = __cr.player(); return !__cr.camera().inside && p.pos[2] > -12 + 0.3 ? 'ok' : 'bad'; })()"

ev "__cr.place('corridor')" >/dev/null
ev "__cr.drive({ moveX: 1 })" >/dev/null
sleep 0.5
ev "__cr.drive(null)" >/dev/null
sleep 0.3
expect "camera outside the corridor wall" "__cr.camera().inside ? 'inside' : 'ok'"
pw screenshot --filename "$SHOT_DIR/corridor.png" >/dev/null

ev "__cr.place('spawn')" >/dev/null
ev "__cr.drive({ aim: true })" >/dev/null
sleep 0.6
expect "aim fov 50" "Math.abs(__cr.camera().fov - 50) <= 1 ? 'ok' : 'bad'"
pw screenshot --filename "$SHOT_DIR/aim.png" >/dev/null
ev "__cr.drive(null)" >/dev/null

# ---- cover ------------------------------------------------------------------
# The page only simulates while a drive is set (no pointer lock here), so idle is drive({}), not drive(null).
shotc() { pw screenshot --filename "$SHOT_DIR/$1.png" >/dev/null; }

ev "__cr.place('coverRow')" >/dev/null
sleep 0.3
ev "(async () => { const w = (ms) => new Promise(r => setTimeout(r, ms)); const t0 = performance.now(); __cr.drive({ moveY: -1, tap: true }); await w(60); __cr.drive({ moveY: -1 }); while (performance.now() - t0 < 3000 && __cr.player().state !== 'cover') await w(10); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "coverRow forward + tap takes low cover" "(() => { const p = __cr.player(), c = __cr.camera(); return p.cover && p.cover.kind === 'low' && c.mode === 'coverLow' && !c.inside ? 'ok' : 'bad'; })()"
sleep 0.5
shotc cover-low
ev "(async () => { const w = (ms) => new Promise(r => setTimeout(r, ms)); __cr.drive({ aim: true }); const t0 = performance.now(); while (performance.now() - t0 < 3000 && !(__cr.player().cover && __cr.player().cover.pop === 1)) await w(10); await w(200); return 'ok'; })()" >/dev/null
expect "aim pops out of low cover" "(() => { const p = __cr.player(); return Math.abs(__cr.camera().fov - 50) <= 1 && p.cover && p.cover.pop === 1 ? 'ok' : 'bad'; })()"
shotc cover-pop
ev "__cr.drive({})" >/dev/null
sleep 0.4
ev "(async () => { const w = (ms) => new Promise(r => setTimeout(r, ms)); __cr.clearTransitions(); __cr.drive({ moveY: -1, tap: true }); await w(60); __cr.drive({ moveY: -1 }); const t0 = performance.now(); while (performance.now() - t0 < 4000 && !__cr.transitions().some(x => x.state === 'vault' && true) ) await w(10); while (performance.now() - t0 < 4000 && __cr.player().state !== 'move') await w(10); return 'ok'; })()" >/dev/null
expect "push in + tap vaults, then moves, past the box" "(() => { const s = __cr.transitions().map(x => x.state).join(','), p = __cr.player(); return s.indexOf('vault,move') >= 0 && p.pos[2] < 6.5 ? 'ok' : 'bad ' + s; })()"
ev "__cr.drive({})" >/dev/null

# Each playwright-cli call takes about 0.6 s and the page's clock can lag it, so timed holds run
# page-side in one call and wait on the game's own state (__until) instead of wall-clock time.
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; window.__step = async (i) => { __cr.drive(i); await __w(60); __cr.drive({}); }; return 'ok'; })()" >/dev/null

# Swap: walk to A's +x end (stop as soon as we are there, never 0.3 s past it), then tap toward the gap.
ev "__cr.place('coverRow')" >/dev/null
ev "(async () => { const slams0 = __cr.player().slams; await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover'); await __w(100); window.__swap = { id: __cr.player().cover.id, slams: slams0 }; __cr.drive({ moveX: 1 }); await __until(() => { const c = __cr.player().cover; return c && c.t >= c.length - 0.05; }); await __step({ moveX: 1, tap: true }); await __until(() => __cr.player().state === 'cover' && __cr.player().cover.id !== __swap.id); return 'ok'; })()" >/dev/null
expect "swap to a different cover (grab + swap = two slams)" "(() => { const a = window.__swap, p = __cr.player(); return a.id && p.cover && p.cover.id !== a.id && p.slams === a.slams + 2 ? 'ok' : 'bad ' + a.id + ' slams ' + a.slams; })()"
ev "(async () => { __cr.drive({ moveY: 1 }); await __until(() => __cr.player().state === 'move'); __cr.drive({}); return 'ok'; })()" >/dev/null

# Tall cover: aim in the middle stays covered; walk to the -x end (stop at it), then pop around the corner.
ev "__cr.place('coverTall')" >/dev/null
ev "(async () => { await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover'); __cr.drive({ aim: true }); await __w(800); return 'ok'; })()" >/dev/null
expect "tall cover: aim in the middle does not pop" "(() => { const p = __cr.player(); return p.cover && p.cover.kind === 'tall' && p.cover.pop === 0 && Math.abs(__cr.camera().fov - 70) <= 1 ? 'ok' : 'bad'; })()"
ev "(async () => { __cr.drive({ moveX: -1 }); await __until(() => { const c = __cr.player().cover; return c && c.t <= 0.05; }); __cr.drive({}); await __until(() => __cr.camera().side === -1); return 'ok'; })()" >/dev/null
expect "tall cover: end gives side -1" "__cr.camera().side === -1 ? 'ok' : 'bad'"
ev "(async () => { __cr.drive({ aim: true }); await __until(() => __cr.player().cover && __cr.player().cover.pop === 1); await __w(300); return 'ok'; })()" >/dev/null
expect "tall cover: aim at the end pops" "(() => { const p = __cr.player(); return p.cover && p.cover.pop === 1 && !__cr.camera().inside ? 'ok' : 'bad'; })()"
shotc cover-tall-end
ev "(async () => { __cr.drive({ moveY: 1 }); await __until(() => __cr.player().state === 'move'); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "pull back leaves cover" "__cr.player().state === 'move' ? 'ok' : 'bad'"

# ---- gunplay ----------------------------------------------------------------
# Aim the camera at a dummy's chest: set yaw and pitch from the lens, wait for the camera to settle, twice.
ev "(() => { window.__aimAt = async (id, h = 1.2) => { for (let k = 0; k < 3; k++) { const d = __cr.dummies().find(x => x.id === id), l = __cr.camera().pos; const dx = d.pos[0] - l[0], dy = d.pos[1] + h - l[1], dz = d.pos[2] - l[2]; __cr.look(Math.atan2(dx, dz), Math.asin(dy / Math.hypot(dx, dy, dz))); await __w(150); } }; window.__hits = (id) => __cr.shots().filter(s => s.target === id).length; return 'ok'; })()" >/dev/null

ev "__cr.place('range')" >/dev/null
ev "(async () => { __cr.setGun('regret', { mag: 50, reserve: 250 }); __cr.drive({ aim: true }); await __w(400); await __aimAt('open'); __cr.clearShots(); __cr.drive({ aim: true, fire: true }); await __w(1000); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
expect "aimed fire 1 s: at least 8 shots, mag down by the shot count, the open dummy hurt or dead" "(() => { const n = __cr.shots().length, g = __cr.gun(), d = __cr.dummies().find(x => x.id === 'open'); return n >= 8 && g.mag === 50 - n && (d.health < 100 || !d.alive) && __cr.shots().every(s => s.stance === 'aim') ? 'ok' : 'bad n=' + n + ' mag=' + g.mag + ' hp=' + d.health; })()"
ev "(async () => { await __until(() => __cr.dummies().find(x => x.id === 'open').alive && __cr.dummies().find(x => x.id === 'open').health === 100, 5000); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
ev "(async () => { await __until(() => __cr.dummies().find(x => x.id === 'open').health === 100, 5000); __cr.setGun('regret', { mag: 50, reserve: 250 }); await __aimAt('open'); __cr.drive({ aim: true, fire: true }); await __w(150); return 'ok'; })()" >/dev/null
shotc fire-aim
ev "(async () => { __cr.drive({ aim: true }); await __until(() => __cr.dummies().find(x => x.id === 'open').health === 100, 6000); __cr.clearShots(); await __aimAt('open'); __cr.drive({ aim: true, fire: true }); await __until(() => !__cr.dummies().find(x => x.id === 'open').alive, 3000); __cr.drive({ aim: true }); window.__killT = performance.now(); return 'ok'; })()" >/dev/null
expect "the open dummy dies in at most 7 body hits" "(() => { const d = __cr.dummies().find(x => x.id === 'open'); const hits = __hits('open'); return !d.alive && hits >= 1 && hits <= 8 ? 'ok' : 'bad hits=' + hits + ' alive=' + d.alive; })()"
ev "(async () => { await __until(() => __cr.dummies().find(x => x.id === 'open').alive, 5000); return 'ok'; })()" >/dev/null
expect "the open dummy respawns at full health" "(() => { const d = __cr.dummies().find(x => x.id === 'open'); return d.alive && d.health === 100 && performance.now() - window.__killT >= 2800 ? 'ok' : 'bad ' + d.health + ' ' + (performance.now() - window.__killT); })()"

# Empty magazine: firing starts a reload. A press on the bright zone is perfect, and the next magazine is boosted.
ev "(async () => { __cr.setGun('regret', { mag: 0, reserve: 250 }); __cr.drive({ aim: true, fire: true }); await __until(() => __cr.gun().reload); __cr.drive({ aim: true }); await __until(() => __cr.gun().reload && __cr.gun().reload.u >= 0.42, 3000); __cr.drive({ aim: true, reload: true }); await __until(() => !__cr.gun().reload, 3000); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
expect "empty mag starts a reload; a press at u 0.42 is perfect: boost, mag 50" "(() => { const g = __cr.gun(); return g.boost === true && g.mag === 50 ? 'ok' : 'bad ' + JSON.stringify(g); })()"
# The reload bar, mid-reload, for a screenshot.
ev "(async () => { __cr.setGun('regret', { mag: 10, reserve: 250 }); __cr.drive({ aim: true, reload: true }); await __until(() => __cr.gun().reload && __cr.gun().reload.u >= 0.1); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
shotc reload-bar
ev "(async () => { await __until(() => !__cr.gun().reload, 4000); return 'ok'; })()" >/dev/null
# A press on the early zone jams: slower than not pressing, still running at 2.3 s.
ev "(async () => { __cr.setGun('regret', { mag: 10, reserve: 250 }); __cr.drive({ aim: true, reload: true }); await __until(() => __cr.gun().reload); __cr.drive({ aim: true, reload: true }); await __until(() => __cr.gun().reload && __cr.gun().reload.press); window.__jam = __cr.gun().reload.press; await __until(() => __cr.gun().reload && __cr.gun().reload.u >= 2.3 / 2.2, 4000); window.__jamAt23 = !!__cr.gun().reload; __cr.drive({ aim: true }); await __until(() => !__cr.gun().reload, 4000); return 'ok'; })()" >/dev/null
expect "an early press jams and the reload is still running at 2.3 s" "window.__jam === 'jam' && window.__jamAt23 === true ? 'ok' : 'bad ' + window.__jam + ' ' + window.__jamAt23"

# Pistol: weapon 3, semi-auto.
ev "(async () => { __step({ weapon: 3 }); await __until(() => __cr.gun().id === 'pistol' && !__cr.gun().switching, 2000); __cr.clearShots(); __cr.drive({ fire: true }); await __w(1000); __cr.drive({}); window.__pistolHold = __cr.shots().length; __cr.clearShots(); await __step({ fire: true }); await __w(240); await __step({ fire: true }); await __w(100); window.__pistolTaps = __cr.shots().length; return 'ok'; })()" >/dev/null
expect "pistol: held fire is one shot, two presses 0.3 s apart are two" "window.__pistolHold === 1 && window.__pistolTaps === 2 ? 'ok' : 'bad ' + window.__pistolHold + ' ' + window.__pistolTaps"
ev "(async () => { __step({ weapon: 1 }); await __until(() => __cr.gun().id === 'regret' && !__cr.gun().switching, 2000); return 'ok'; })()" >/dev/null

# Blind fire over low cover, then aimed fire from it.
ev "__cr.place('coverRow')" >/dev/null
ev "(async () => { __cr.setGun('regret', { mag: 50, reserve: 250 }); await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover'); __cr.drive({}); await __w(300); __cr.clearShots(); __cr.drive({ fire: true }); await __until(() => __cr.player().blind === 1 && __cr.shots().length >= 3, 3000); return 'ok'; })()" >/dev/null
expect "fire in low cover without aim is blind fire, head down" "(() => { const p = __cr.player(), s = __cr.shots(); return p.blind === 1 && p.cover.exposed === false && s.length >= 3 && s.every(x => x.stance === 'blind') ? 'ok' : 'bad ' + JSON.stringify(s.map(x => x.stance)); })()"
shotc blind-low
ev "(async () => { __cr.drive({}); await __w(300); __cr.clearShots(); __cr.drive({ aim: true, fire: true }); await __until(() => __cr.shots().length >= 4, 3000); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "aimed fire from cover is aim stance and never hits its own wall" "(() => { const s = __cr.shots(), b = { min: [-9, 0, 6.5], max: [-6, 1, 7.1] }, e = 0.02; const inside = s.filter(x => x.point.every((v, i) => v > b.min[i] + e && v < b.max[i] - e)); return s.length >= 4 && s.every(x => x.stance === 'aim') && inside.length === 0 ? 'ok' : 'bad ' + s.length + ' ' + inside.length; })()"
ev "(async () => { __cr.drive({}); await __w(300); __cr.drive({ moveY: 1 }); await __until(() => __cr.player().state === 'move'); __cr.drive({}); return 'ok'; })()" >/dev/null

# Sprinting with fire held fires nothing.
ev "__cr.place('lane')" >/dev/null
ev "(async () => { __cr.clearShots(); __cr.drive({ moveY: -1, sprint: true, fire: true }); await __w(1000); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "sprint with fire held: no shots" "__cr.shots().length === 0 ? 'ok' : 'bad ' + __cr.shots().length"
ev "__cr.place('spawn')" >/dev/null

# Run-around: the page-side bot, 20 s.
ev "(() => { const s = document.createElement('script'); s.src = 'dev/runaround.js'; document.head.appendChild(s); return 'ok'; })()" >/dev/null
sleep 1
ev "(__runAround.start(20), 'ok')" >/dev/null
for _ in $(seq 1 30); do
  sleep 1
  [ "$(ev "__runAround.done()")" = "true" ] && break
done
RA=$(pw --raw eval "JSON.stringify(__runAround.result())")
echo "$RA" | python3 -c "
import json,sys
raw=sys.stdin.read().strip()
r=json.loads(raw)
if isinstance(r,str): r=json.loads(r)
for l in r['legs']: print('  %-40s expect %-5s entries %d untapped %d' % (l['name'],l['expect'],l['coverEntries'],l['untapped']))
print('  failures:', r['failures'])
"
[ "$(ev "__runAround.result().failures.length === 0 && __runAround.result().legs.length >= 9")" = "true" ] || fail "run-around: $RA"
ev "__cr.drive(null)" >/dev/null
ev "__cr.place('spawn')" >/dev/null

sleep 1.5
PCALLS=$(ev "__cr.stats().calls")
PTRIS=$(ev "__cr.stats().tris")
PFPS=$(ev "Math.round(__cr.stats().fps)")
[ "$PCALLS" -lt 400 ] 2>/dev/null || fail "play: draw calls '$PCALLS', expected under 400"
[ "$PTRIS" -lt 300000 ] 2>/dev/null || fail "play: triangles '$PTRIS', expected under 300000"
echo "play: $PFPS fps, $PCALLS calls, $PTRIS triangles"
check_console

# ---- Check-in Turnstiles: the first fight (milestone 4, the default page) --------------
pw goto "http://localhost:$PORT/index.html?skipTitle" >/dev/null || fail "could not open Check-in Turnstiles"
sleep 2
READY=$(ev "window.__cr && window.__cr.ready && !!window.__cr.fight")
[ "$READY" = "true" ] || fail "kiosk row: not ready ($READY)"
check_console
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; window.__step = async (i) => { __cr.drive(i); await __w(60); __cr.drive({}); }; window.__alive = () => __cr.fight().enemies.filter(e => e.alive); window.__log = (t) => __cr.fightLog().filter(x => x.type === t); const st = document.createElement('style'); st.textContent = '#cr-pause { display: none !important; }'; document.head.appendChild(st); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyH' })); return 'ok'; })()" >/dev/null
# Aim the camera at an Associate's head (a point 1.5 m up) and wait for the camera to settle.
ev "(() => { window.__aimAtE = async (id, h = 1.5) => { for (let k = 0; k < 3; k++) { const d = __cr.fight().enemies.find(x => x.id === id), l = __cr.camera().pos; const dx = d.pos[0] - l[0], dy = d.pos[1] + h - l[1], dz = d.pos[2] - l[2]; __cr.look(Math.atan2(dx, dz), Math.asin(dy / Math.hypot(dx, dy, dz))); await __w(100); } }; return 'ok'; })()" >/dev/null
fexpect() { # label, js expression returning 'ok' or a description
  local r
  r=$(ev "$2")
  [ "$r" = "ok" ] || fail "fight: $1: $(pw --raw eval "JSON.stringify([__cr.fight(), __cr.health(), __cr.player()])") ($r)"
}

ev "__cr.drive({})" >/dev/null
sleep 0.5
fexpect "boots Check-in Turnstiles with 4 idle Associates and no fight yet" "(() => { const f = __cr.fight(); return __cr.level() === 'turnstiles' && f.enemies.length === 4 && f.enemies.every(e => e.state === 'idle') && f.started === false && __cr.dummies().length === 0 ? 'ok' : 'bad ' + JSON.stringify(f.enemies.map(e => e.state)); })()"
fexpect "boots with Tobble beside the spawn, a dormant Spawn Sauna and 4 kettlebells" "(() => { const t = __cr.tobble(), p = __cr.pads(); return t && Math.hypot(t.pos[0] - 1.4, t.pos[2] + 13.8) < 0.5 && p.length === 1 && p[0].state === 'dormant' && __cr.grenades().count === 4 && __cr.fight().enemies.every(e => e.kind === 'associate') ? 'ok' : 'bad ' + JSON.stringify([t, p, __cr.grenades()]); })()"
fexpect "Piece 4b: the run-to-cover hint shows at the start of the Turnstiles" "(() => { const h = __cr.hint(), el = document.querySelector('.cr-hint'); return h && h.id === 'run' && /RUN to cover/.test(h.text) && el && !el.hidden && /RUN to cover/.test(el.textContent) ? 'ok' : 'bad ' + JSON.stringify(h); })()"
pw screenshot --filename "$SHOT_DIR/kiosk-start.png" >/dev/null

# Crossing the lockdown line starts the fight; every Associate is in a cover state within 5 s.
ev "(async () => { __cr.clearFightLog(); __cr.place('kioskLeft'); window.__lockT = performance.now(); await __until(() => __cr.fight().started, 2000); window.__startMs = performance.now() - __lockT; await __until(() => __cr.fight().enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch'].includes(e.state)), 5000); return 'ok'; })()" >/dev/null
fexpect "past the trigger the fight starts within 0.5 s, with a lockdown bark, and every Associate takes cover within 5 s" "(() => { const f = __cr.fight(); return f.started && __startMs <= 500 && __log('bark').some(b => b.key === 'lockdown') && f.enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch'].includes(e.state)) ? 'ok' : 'bad ' + __startMs + ' ' + JSON.stringify(f.enemies.map(e => e.state)); })()"

# Standing in the open for 10 s (god mode): never more than 2 Associates telegraphing or bursting, and the player is hit.
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.place('open'); __cr.clearFightLog(); window.__peak = 0; window.__minHp = 100; window.__shotAt = false; const t0 = performance.now(); while (performance.now() - t0 < 10000) { const f = __cr.fight(); window.__peak = Math.max(__peak, f.enemies.filter(e => e.state === 'telegraph' || e.state === 'burst').length); window.__minHp = Math.min(__minHp, __cr.health().hp); window.__tg = window.__tg || f.enemies.some(e => e.state === 'telegraph' && e.pop > 0.8); await __w(50); } return 'ok'; })()" >/dev/null
fexpect "10 s in the open: at most 2 Associates telegraphing or bursting at once, a playerHit logged, health dropped" "(() => { const hits = __log('playerHit').length; return __peak <= 2 && __peak >= 1 && hits >= 1 && __minHp < 100 ? 'ok' : 'bad peak ' + __peak + ' hits ' + hits + ' hp ' + __minHp; })()"
ev "(async () => { await __until(() => __cr.fight().enemies.some(e => e.state === 'telegraph' && e.pop > 0.8), 6000); return 'ok'; })()" >/dev/null
pw screenshot --filename "$SHOT_DIR/telegraph.png" >/dev/null

# Tucked behind K1 for 10 s: nothing hits the player while the cover is closed.
ev "__cr.god(false)" >/dev/null
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.drive({}); __cr.place('kioskLeft'); __cr.clearFightLog(); await __w(100); await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover', 3000); window.__bad = 0; window.__covered = 0; const t0 = performance.now(); while (performance.now() - t0 < 10000) { const p = __cr.player(); if (p.cover && p.cover.exposed === false) window.__covered++; await __w(50); } return 'ok'; })()" >/dev/null
fexpect "tucked behind K1 for 10 s: no playerHit and full health" "(() => { const hits = __log('playerHit').length, shots = __log('enemyShot').length; return __covered > 100 && hits === 0 && __cr.health().hp === 100 && __cr.player().state === 'cover' ? 'ok' : 'bad hits ' + hits + ' shots ' + shots + ' covered ' + __covered; })()"
pw screenshot --filename "$SHOT_DIR/tucked.png" >/dev/null
fexpect "Piece 4b: the cover glow is hidden while tucked in cover" "(() => { const g = __cr.glow(); return !g.visible ? 'ok' : 'bad ' + JSON.stringify(g); })()"
ev "(async () => { __cr.drive({}); __cr.place('kioskLeft'); await __w(700); return 'ok'; })()" >/dev/null
fexpect "Piece 4b: out of cover and facing cover in reach, the glow strip is lit, mint, on top of the cover" "(() => { const g = __cr.glow(); return g.visible && g.opacity > 0.1 && g.edge && g.pos[1] > 0.9 ? 'ok' : 'bad ' + JSON.stringify(g) + ' ' + JSON.stringify(__cr.coverTarget()); })()"
pw screenshot --filename "$SHOT_DIR/cover-glow.png" >/dev/null

# Kill the four starters: god mode, in the open, aiming at the head of each Associate while it is popped (or at a downed one lying on the floor).
# The sauna opens after two kills and sends more, so the arena does not clear here; the end-to-end check below closes it.
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.place('open'); __cr.setGun('regret', { mag: 50, reserve: 250 }); const starters = ['a1', 'a2', 'b1', 'b2']; const s0 = __cr.simTime(), w0 = performance.now(); while (__cr.simTime() - s0 < 60 && performance.now() - w0 < 600000 && !__cr.fight().enemies.filter(e => starters.includes(e.id)).every(e => !e.alive)) { const open = __alive().filter(e => e.pop > 0.7 || e.state === 'run' || e.state === 'suppress' || e.state === 'downed'); if (open.length) { const e = open[0]; await __aimAtE(e.id, e.state === 'downed' ? 0.4 : e.state === 'run' ? 1.0 : 1.5); __cr.drive({ aim: true, fire: true }); await __w(250); } else { __cr.drive({ aim: true }); await __w(50); } } __cr.drive({}); window.__clearMs = Math.round((__cr.simTime() - s0) * 1000); window.__startersDead = __cr.fight().enemies.filter(e => starters.includes(e.id)).every(e => !e.alive); window.__startPickups = __cr.fight().pickups; await __w(300); return 'ok'; })()" >/dev/null
fexpect "the four starting Associates die within 60 s of game time and leave pickups" "(() => { return window.__startersDead && window.__startPickups >= 1 ? 'ok' : 'bad dead ' + window.__startersDead + ' pickups ' + window.__startPickups + ' sim ms ' + window.__clearMs; })()"
pw screenshot --filename "$SHOT_DIR/four-down.png" >/dev/null
# Walking onto a pickup adds ammo (start 0.6 m beside it in the open, not inside the kiosk the Associate stood behind: the mover shoves a player out of a box and that raced the pickup).
ev "(async () => { __cr.setGun('regret', { mag: 50, reserve: 100 }); const p = __cr.fight().pickupPos[0]; window.__pk = p; __cr.at(p[0], p[2] + 0.6, 0); await __step({ moveY: 1 }); await __until(() => __cr.gun().reserve > 100, 2000); return 'ok'; })()" >/dev/null
fexpect "walking onto a pickup raises the reserve and removes it" "(() => { const g = __cr.gun(); return g.reserve > 100 && !__cr.fight().pickupPos.some(q => Math.abs(q[0] - __pk[0]) < 0.01 && Math.abs(q[2] - __pk[2]) < 0.01) ? 'ok' : 'bad ' + g.reserve + ' ' + __cr.fight().pickups; })()"

# Health: 60 damage shows the face; 60 more downs the player, who crawls, cannot shoot, and gives up with interact.
ev "__cr.god(false)" >/dev/null
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.drive({}); __cr.hurt(60); await __w(200); return 'ok'; })()" >/dev/null
pw screenshot --filename "$SHOT_DIR/face-60.png" >/dev/null
fexpect "60 damage leaves 40 health and the face shows" "(() => { const f = document.querySelector('.cr-face'); return __cr.health().hp >= 40 && __cr.health().hp < 100 && !f.hidden && +f.style.opacity > 0.3 && !__cr.health().downed ? 'ok' : 'bad ' + JSON.stringify(__cr.health()) + ' ' + f.style.opacity; })()"
ev "(async () => { __cr.hurt(60); await __w(300); __cr.clearShots(); window.__crawl0 = __cr.player().pos; __cr.drive({ moveY: -1, fire: true }); await __w(1000); __cr.drive({}); return 'ok'; })()" >/dev/null
fexpect "downed: crawls with the stick, cannot shoot, the timer shows" "(() => { const p = __cr.player(), h = __cr.health(), d = Math.hypot(p.pos[0] - __crawl0[0], p.pos[2] - __crawl0[2]), b = document.querySelector('.cr-banner'); return h.downed && p.state === 'downed' && d > 0.5 && d < 1.3 && __cr.shots().length === 0 && /plateau/.test(b.textContent) ? 'ok' : 'bad d=' + d + ' shots ' + __cr.shots().length + ' ' + JSON.stringify(h); })()"
pw screenshot --filename "$SHOT_DIR/downed.png" >/dev/null
# Giving up is a hold now (interact is also the revive key): a tap does nothing, holding it for giveUpHold goes back to the checkpoint.
ev "(async () => { __cr.drive({ interact: true }); await __w(300); __cr.drive({}); return 'ok'; })()" >/dev/null
fexpect "a tap of interact while downed does not give up" "(() => __cr.health().downed ? 'ok' : 'bad ' + JSON.stringify(__cr.health()))()"
ev "(async () => { __cr.drive({ interactHeld: true }); await __until(() => !__cr.health().downed, 3000); __cr.drive({}); await __w(200); return 'ok'; })()" >/dev/null
fexpect "holding interact while downed restarts: full health, 4 alive, fight not started, standing" "(() => { const f = __cr.fight(), h = __cr.health(); return h.hp === 100 && !h.downed && f.enemies.length === 4 && f.enemies.every(e => e.alive && e.state === 'idle') && !f.started && __cr.player().state !== 'downed' ? 'ok' : 'bad ' + JSON.stringify(h); })()"

# ---- milestone 5: Tobble, finishers, bash, Cheat Day, kettlebells, the Spawn Sauna, revives --------------------------
# A frozen frame for a screenshot: drive(null) stops the simulation, the shot is taken, then `resume` goes back to driving.
fshot() { local resume="${2:-}"; [ -n "$resume" ] || resume="{}"; ev "__cr.drive(null)" >/dev/null; pw screenshot --filename "$SHOT_DIR/$1.png" >/dev/null; ev "__cr.drive($resume)" >/dev/null; }
# Doc runs into a tucked Associate from behind with the cutter spinning (retrying: a hit while revving interrupts it). Resolves true once the execution has started.
ev "(() => { window.__cheat = async (id) => { for (let k = 0; k < 8; k++) { const e = __cr.fight().enemies.find(x => x.id === id && x.alive); if (!e) return false; __cr.drive({}); __cr.at(e.pos[0], e.pos[2] + 3.0, Math.PI); __cr.look(Math.PI, 0); await __w(150); __cr.drive({ melee: true }); await __w(300); __cr.drive({ melee: true, moveY: -1 }); if (await __until(() => __cr.player().state === 'execute', 2500)) return true; __cr.drive({}); await __w(200); } return false; }; return 'ok'; })()" >/dev/null
# All four tucked and Tobble in cover, in the open with god mode.
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); __cr.place('kioskLeft'); await __w(100); await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover', 3000); window.__tcover = await __until(() => { const t = __cr.tobble(), p = __cr.player(), d = Math.hypot(t.pos[0] - p.pos[0], t.pos[2] - p.pos[2]); return t.state === 'cover' && d >= 2 && d <= 6; }, 6000); window.__tstate = JSON.stringify(__cr.tobble()); return 'ok'; })()" >/dev/null
fexpect "taking K1: within 6 s Tobble is in cover 2 to 6 m away" "(() => (__tcover ? 'ok' : 'bad ' + __tstate))()"
pw screenshot --filename "$SHOT_DIR/tobble-cover.png" >/dev/null

# Finish: a downed Rep, Doc beside it, interact: the execution, then the Rep is dead within 1 s.
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); await __w(200); __cr.downRep('a1'); await __w(100); const p = __cr.fight().enemies.find(e => e.id === 'a1').pos; __cr.at(p[0], p[2] + 1.0, Math.PI); __cr.look(Math.PI, 0); await __w(300); __cr.clearFightLog(); __cr.drive({ interact: true }); await __w(60); __cr.drive({}); window.__ex = await __until(() => __cr.player().state === 'execute', 1000); await __w(250); return 'ok'; })()" >/dev/null
fshot finish
ev "(async () => { window.__dead = await __until(() => !__cr.fight().enemies.find(e => e.id === 'a1').alive, 1000); return 'ok'; })()" >/dev/null
fexpect "interact on a downed Rep: an execution, and it is dead within 1 s (kind execute)" "(() => (__ex && __dead && __log('death').some(d => d.id === 'a1' && d.kind === 'execute') ? 'ok' : 'bad ' + __ex + ' ' + __dead + ' ' + JSON.stringify(__log('death'))))()"

# Bash: tap next to a tucked Rep: it staggers and takes 30.
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); __cr.place('open'); await __until(() => __cr.fight().enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload'].includes(e.state)), 6000); const a = __cr.fight().enemies.find(e => e.id === 'a2'); __cr.at(a.pos[0], a.pos[2] + 1.2, Math.PI); __cr.look(Math.PI, 0); await __w(150); __cr.drive({ melee: true }); await __w(100); __cr.drive({}); window.__stag = await __until(() => __cr.fight().enemies.find(e => e.id === 'a2').state === 'stagger', 1500); return 'ok'; })()" >/dev/null
fexpect "a tap of melee beside a Rep: it staggers and has 70 health" "(() => { const a = __cr.fight().enemies.find(e => e.id === 'a2'); return __stag && a.health === 70 ? 'ok' : 'bad ' + JSON.stringify(a); })()"
ev "__cr.drive({})" >/dev/null

# Cheat Day: hold melee for 0.5 s with The Regret and walk into a Rep: an execution, and a kill within 1.5 s.
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); __cr.place('open'); await __until(() => __cr.fight().enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload'].includes(e.state)), 6000); __cr.setGun('regret', { mag: 50, reserve: 250 }); __cr.clearFightLog(); window.__cut = await __cheat('b1'); await __w(450); return 'ok'; })()" >/dev/null
fshot cheat-day
ev "(async () => { window.__cutDead = await __until(() => !__cr.fight().enemies.find(e => e.id === 'b1').alive, 1500); return 'ok'; })()" >/dev/null
fexpect "Cheat Day: the execution starts and the Rep is dead within 1.5 s (kind execute)" "(() => (__cut && __cutDead && __log('death').some(d => d.id === 'b1' && d.kind === 'execute') ? 'ok' : 'bad ' + __cut + ' ' + __cutDead + ' ' + JSON.stringify(__log('death'))))()"
ev "__cr.drive({})" >/dev/null

# The Spawn Sauna and a kettlebell: open it, wait for a spawn, lob a kettlebell onto it and it closes.
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); __cr.clearFightLog(); __cr.at(5.6, 2.5, 0); await __w(300); __cr.openPad('sauna1'); await __until(() => __log('padOpen').length > 0, 1500); window.__spawned = await __until(() => __cr.pads()[0].spawned >= 1, 7000); window.__aimed = __cr.aimThrow(4.6, 13.4); await __w(400); __cr.drive({ grenade: true }); await __w(500); return 'ok'; })()" >/dev/null
fshot arc "{ grenade: true }"
ev "(async () => { __cr.drive({}); window.__closed = await __until(() => __cr.pads()[0].state === 'closed', 2500); await __until(() => __log('explode').length > 0, 500); await __w(110); __cr.drive(null); return 'ok'; })()" >/dev/null
fshot boom
fexpect "sauna: padOpen logged, a Rep spawned within 6 s, a lobbed kettlebell closes it within 2.5 s; 3 kettlebells left, an explosion logged" "(() => (__log('padOpen').length >= 1 && __spawned && __aimed && __closed && __cr.grenades().count === 3 && __log('explode').length >= 1 && __log('padClosed').length === 1 ? 'ok' : 'bad ' + JSON.stringify([__spawned, __aimed, __closed, __cr.pads(), __cr.grenades().count, __log('explode').length])))()"
ev "__cr.drive({})" >/dev/null

# Doc down and Tobble up: he comes, kneels and revives Doc (50 health) within 12 s.
ev "(async () => { __cr.restart(); __cr.god(false); __cr.drive({}); __cr.clearFightLog(); __cr.hurt(200); await __w(100); await __until(() => { const t = __cr.tobble(), p = __cr.player(); return t.state === 'revive' && Math.hypot(t.pos[0] - p.pos[0], t.pos[2] - p.pos[2]) < 1.3; }, 8000); await __w(500); return 'ok'; })()" >/dev/null
fshot tobble-revive
ev "(async () => { window.__rev = await __until(() => __log('revived').length > 0, 12000); await __w(100); return 'ok'; })()" >/dev/null
fexpect "Tobble revives Doc within 12 s: revived logged, 50 health, standing" "(() => (__rev && __cr.health().hp === 50 && !__cr.health().downed && __cr.player().state !== 'downed' ? 'ok' : 'bad ' + JSON.stringify([__rev, __cr.health(), __cr.player().state])))()"

# Tobble down and Doc up: hold interact beside him for 1.7 s and he stands.
ev "(async () => { __cr.restart(); __cr.drive({}); await __w(200); __cr.hurtTobble(999); await __w(200); const p = __cr.tobble().pos; __cr.at(p[0] + 0.9, p[2], -Math.PI / 2); await __w(300); __cr.drive({ interactHeld: true }); window.__kneel = await __until(() => __cr.player().state === 'reviveTobble', 1000); await __w(500); window.__up = await __until(() => __cr.tobble().downed === false, 2500); __cr.drive({}); return 'ok'; })()" >/dev/null
fexpect "holding interact beside a downed Tobble for 1.7 s stands him up" "(() => (__kneel && __up && !__cr.tobble().downed ? 'ok' : 'bad ' + JSON.stringify([__kneel, __up, __cr.tobble()])))()"

# Both down: back to the checkpoint.
ev "(async () => { __cr.god(false); __cr.restart(); __cr.drive({}); __cr.place('open'); await __until(() => __cr.fight().started, 2000); await __w(500); __cr.hurtTobble(999); __cr.hurt(200); await __w(400); return 'ok'; })()" >/dev/null
fexpect "Doc and Tobble both down: the checkpoint restarts (4 alive, fight not started, Tobble up, Doc up)" "(() => { const f = __cr.fight(), t = __cr.tobble(); return !f.started && f.enemies.length === 4 && f.enemies.every(e => e.alive) && !t.downed && t.hp === 150 && !__cr.health().downed && __log('checkpoint').length >= 0 ? 'ok' : 'bad ' + JSON.stringify([f.started, t, __cr.health()]); })()"

# End to end (the milestone's "done when"): a fight with Tobble, a Cheat Day kill and a kettlebell on the sauna, then the arena clears.
ev "(() => { window.__lob = async () => { for (let k = 0; k < 4 && __cr.pads()[0].state === 'open' && __cr.grenades().count > 0; k++) { __cr.drive({}); __cr.at(5.6, 2.5, 0); await __w(250); if (!__cr.aimThrow(4.6, 13.4)) continue; await __w(300); __cr.drive({ grenade: true }); await __w(400); __cr.drive({}); await __until(() => __cr.pads()[0].state !== 'open', 2500); } }; return 'ok'; })()" >/dev/null
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); __cr.clearFightLog(); __cr.setGun('regret', { mag: 50, reserve: 250 }); __cr.place('open'); const t0 = performance.now(), s0 = __cr.simTime(); await __until(() => __cr.fight().enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload'].includes(e.state)), 6000); await __cheat('b1'); await __until(() => __log('death').some(d => d.kind === 'execute'), 3000); __cr.drive({}); while (__cr.simTime() - s0 < 150 && performance.now() - t0 < 900000 && !__cr.fight().clear) { if (__cr.pads()[0].state === 'open' && __cr.grenades().count > 0) { await __lob(); continue; } const open = __alive().filter(e => e.pop > 0.7 || e.state === 'run' || e.state === 'suppress' || e.state === 'downed'); if (open.length) { const e = open[0]; await __aimAtE(e.id, e.state === 'downed' ? 0.4 : e.state === 'run' ? 1.0 : 1.5); __cr.drive({ aim: true, fire: true }); await __w(250); } else { __cr.drive({ aim: true }); await __w(50); } } __cr.drive({}); window.__e2eMs = performance.now() - t0; await __w(400); return 'ok'; })()" >/dev/null
fexpect "end to end: the arena clears within 150 s with a Cheat Day kill, the sauna closed or spent, and Tobble having fired" "(() => { const f = __cr.fight(), s = __cr.pads()[0].state; return f.clear && __log('death').some(d => d.kind === 'execute') && (s === 'closed' || s === 'spent') && __log('tobbleShot').length >= 1 ? 'ok' : 'bad ' + JSON.stringify([f.clear, __log('death').map(d => d.kind), s, __log('tobbleShot').length, __e2eMs]); })()"
echo "end to end: cleared in $(ev '(__e2eMs / 1000).toFixed(1)') s, sauna $(ev "__cr.pads()[0].state"), $(ev "__log('tobbleShot').length") Tobble shots"
pw screenshot --filename "$SHOT_DIR/clear.png" >/dev/null
fexpect "the clear banner shows" "(() => { const b = document.querySelector('.cr-banner'); return b && !b.hidden && /SET COMPLETE/.test(b.textContent) && __log('clear').length === 1 ? 'ok' : 'bad ' + (b && b.textContent); })()"

# Eight Reps and Tobble: the budget holds.
ev "(async () => { __cr.restart(); __cr.god(true); __cr.drive({}); __cr.place('open'); for (let k = 0; k < 8 && __alive().length < 8; k++) { __cr.spawnRep(); await __w(100); } await __w(4000); return 'ok'; })()" >/dev/null
fexpect "8 Reps alive" "(() => (__alive().length === 8 ? 'ok' : 'bad ' + __alive().length))()"
MCALLS=$(ev "__cr.stats().calls")
MTRIS=$(ev "__cr.stats().tris")
MFPS=$(ev "Math.round(__cr.stats().fps)")
[ "$MCALLS" -lt 400 ] 2>/dev/null || fail "8 Reps and Tobble: draw calls '$MCALLS', expected under 400"
[ "$MTRIS" -lt 300000 ] 2>/dev/null || fail "8 Reps and Tobble: triangles '$MTRIS', expected under 300000"
echo "8 Reps and Tobble: $MFPS fps, $MCALLS calls, $MTRIS triangles"
pw screenshot --filename "$SHOT_DIR/eight-reps.png" >/dev/null
ev "__cr.god(false)" >/dev/null
ev "__cr.drive({})" >/dev/null
check_console

# Performance in the middle of a fight.
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.place('open'); await __w(4000); return 'ok'; })()" >/dev/null
KCALLS=$(ev "__cr.stats().calls")
KTRIS=$(ev "__cr.stats().tris")
KFPS=$(ev "Math.round(__cr.stats().fps)")
[ "$KCALLS" -lt 400 ] 2>/dev/null || fail "kiosk row: draw calls '$KCALLS', expected under 400"
[ "$KTRIS" -lt 300000 ] 2>/dev/null || fail "kiosk row: triangles '$KTRIS', expected under 300000"
echo "kiosk row fight: $KFPS fps, $KCALLS calls, $KTRIS triangles"
ev "__cr.god(false)" >/dev/null
ev "__cr.drive(null)" >/dev/null
check_console


# ---- The run (piece 1): Smoothie Bar, the Cancellation Desk, the gates, the swaps, the checkpoint and disposal.
# A saved Continue checkpoint (the Desk) must survive every ?arena= / ?skipTitle test run below untouched.
ev "(() => { localStorage.setItem('gyms-of-war.checkpoint', '2'); return 'ok'; })()" >/dev/null
pw goto "http://localhost:$PORT/index.html?arena=smoothie" >/dev/null || fail "could not open the Smoothie Bar"
sleep 2
READY=$(ev "window.__cr && window.__cr.ready && !!window.__cr.run")
[ "$READY" = "true" ] || fail "run: not ready ($READY)"
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; const st = document.createElement('style'); st.textContent = '#cr-pause { display: none !important; }'; document.head.appendChild(st); __cr.drive({}); __cr.god(true); return 'ok'; })()" >/dev/null
rexpect() { # label, js expression returning 'ok' or a description
  local r
  r=$(ev "$2")
  [ "$r" = "ok" ] || fail "run: $1: $(pw --raw eval "JSON.stringify([__cr.run(), __cr.gate(), __cr.gpu()])") ($r)"
}
rexpect "?arena=smoothie opens the Smoothie Bar with 5 idle Reps and 1 idle Trainer, the sauna dormant, the checkpoint set" "(() => { const f = __cr.fight(), r = __cr.run(); return __cr.level() === 'smoothie' && r.arena === 'smoothie' && r.checkpoint === 1 && f.enemies.filter(e => e.state !== 'unused').length === 6 && f.enemies.filter(e => e.kind === 'trainer').length === 1 && __cr.pads()[0].state === 'dormant' ? 'ok' : 'bad ' + JSON.stringify([r, f.enemies.length]); })()"
rexpect "the hours line shows at the checkpoint" "__cr.run().hours === 'Cancellation hours: Tues 2:00–2:05' ? 'ok' : 'bad ' + __cr.run().hours"
ev "(async () => { __cr.place('open'); await __w(5000); return 'ok'; })()" >/dev/null
SM_CALLS=$(ev "__cr.stats().calls"); SM_TRIS=$(ev "__cr.stats().tris"); SM_FPS=$(ev "Math.round(__cr.stats().fps)")
[ "$SM_CALLS" -lt 400 ] 2>/dev/null || fail "smoothie bar: draw calls '$SM_CALLS', expected under 400"
[ "$SM_TRIS" -lt 300000 ] 2>/dev/null || fail "smoothie bar: triangles '$SM_TRIS', expected under 300000"
echo "smoothie bar fight: $SM_FPS fps, $SM_CALLS calls, $SM_TRIS triangles"
shotc smoothie-fight
ev "(async () => { await __until(() => __cr.fightLog().some(x => x.type === 'telegraph' && x.kind === 'trainer'), 12000); return 'ok'; })()" >/dev/null
rexpect "the Trainer runs at Doc and winds up before it swings (a Trainer telegraph is logged)" "(() => __cr.fightLog().some(x => x.type === 'telegraph' && x.kind === 'trainer') ? 'ok' : 'bad no trainer telegraph')()"
rexpect "the fight started and the Reps are shooting" "(() => __cr.fight().started && __cr.fightLog().some(x => x.type === 'enemyShot') ? 'ok' : 'bad')()"
# Clear the arena in god mode: the gate opens, the banner shows.
ev "(async () => { __cr.restart(); __cr.drive({}); __cr.clearArena(); await __until(() => __cr.run().gateOpen, 3000); await __w(1200); return 'ok'; })()" >/dev/null
rexpect "clearing the Smoothie Bar opens the gate" "(() => { const r = __cr.run(), g = __cr.gate(); return r.cleared && r.gateOpen && g && g.open && g.openness > 0.99 ? 'ok' : 'bad'; })()"
ev "(() => { const g = __cr.gate(); __cr.at(g.pos[0], g.pos[2] - 4.5, 0); __cr.look(0, 0.12); return 'ok'; })()" >/dev/null
sleep 1.2
shotc smoothie-gate
GPU_SM=$(ev "(() => { const g = __cr.gpu(); return g.geometries + '/' + g.textures; })()")
# Walk into the gate: fade, swap to the Desk, fade in.
ev "(async () => { const g = __cr.gate(); __cr.at(g.pos[0], g.pos[2] - 4.5, 0); __cr.drive({ moveY: -1 }); window.__sawFade = false; const t0 = performance.now(); while (performance.now() - t0 < 6000 && __cr.run().arena === 'smoothie') { if (__cr.run().fade > 0.3) window.__sawFade = true; await __w(20); } __cr.drive({}); await __until(() => __cr.run().phase === 'play', 3000); return 'ok'; })()" >/dev/null
rexpect "walking into the open gate fades and swaps to the Cancellation Desk; the checkpoint is the Desk" "(() => { const r = __cr.run(); return window.__sawFade && r.arena === 'desk' && r.checkpoint === 2 && r.phase === 'play' && r.fade === 0 && __cr.level() === 'desk' ? 'ok' : 'bad ' + window.__sawFade; })()"
rexpect "the Desk opens with the Overlord (one boss, not started) and two dormant saunas" "(() => { const f = __cr.fight(), b = __cr.boss(); return f.enemies.filter(e => e.alive).length === 1 && f.enemies[0].kind === 'boss' && !f.started && __cr.pads().length === 2 && __cr.pads().every(p => p.state === 'dormant') && b && b.phase === 1 && !b.invuln ? 'ok' : 'bad'; })()"
rexpect "the hours line says By appointment" "__cr.run().hours === 'Cancellation hours: By appointment' ? 'ok' : 'bad ' + __cr.run().hours"
ev "(() => { __cr.place('start'); __cr.look(0, 0.12); return 'ok'; })()" >/dev/null
sleep 1.2
shotc desk-start
D_CALLS=$(ev "__cr.stats().calls"); D_TRIS=$(ev "__cr.stats().tris"); D_FPS=$(ev "Math.round(__cr.stats().fps)")
[ "$D_CALLS" -lt 400 ] 2>/dev/null || fail "desk: draw calls '$D_CALLS', expected under 400"
echo "cancellation desk: $D_FPS fps, $D_CALLS calls, $D_TRIS triangles"
# The old arena is gone: the GPU resource counts match a fresh load of the Turnstiles, and a trip through all three arenas ends where it began.
ev "(async () => { __cr.go('turnstiles'); __cr.drive({}); await __w(1500); window.__g0 = __cr.gpu(); for (const n of ['smoothie', 'desk', 'turnstiles', 'smoothie', 'desk', 'turnstiles']) { __cr.go(n); __cr.drive({}); await __w(400); } await __w(1200); window.__g1 = __cr.gpu(); return 'ok'; })()" >/dev/null
rexpect "going round the arenas twice leaves the same geometries, textures, programs and draw calls (the old arena is disposed)" "(() => { const a = window.__g0, b = window.__g1; return a.geometries === b.geometries && a.textures === b.textures && a.programs === b.programs && Math.abs(a.calls - b.calls) <= 8 ? 'ok' : 'bad ' + JSON.stringify([a, b]); })()"
rexpect "the Desk holds far fewer resources than the arenas around it (it really replaced them)" "(async () => { __cr.go('desk'); await __w(800); const d = __cr.gpu(); return d.geometries < window.__g1.geometries ? 'ok' : 'bad ' + JSON.stringify([d, window.__g1]); })()"
rexpect "?arena= runs never overwrote the saved Continue checkpoint" "localStorage.getItem('gyms-of-war.checkpoint') === '2' ? 'ok' : 'bad ' + localStorage.getItem('gyms-of-war.checkpoint')"
ev "(() => { localStorage.removeItem('gyms-of-war.checkpoint'); return 'ok'; })()" >/dev/null
# ---- The Membership Overlord and the ending (piece 3) ----
bexpect() { # label, js expression returning 'ok' or a description
  local r
  r=$(ev "$2")
  [ "$r" = "ok" ] || fail "boss: $1: $(pw --raw eval "JSON.stringify([__cr.boss(), __cr.ending(), __cr.pads(), __cr.fight().started])") ($r)"
}
ev "(async () => { __cr.go('desk'); __cr.god(true); __cr.drive({}); await __w(800); __cr.clearFightLog(); __cr.place('mid'); __cr.look(0, 0.1); await __until(() => __cr.fight().started, 2000); await __until(() => __cr.boss().state === 'telegraph', 15000); return 'ok'; })()" >/dev/null
shotc boss-telegraph
bexpect "past the trigger the fight starts and the Overlord telegraphs" "(() => { const b = __cr.boss(); return b.state === 'telegraph' && b.phase === 1 && !b.invuln && !!document.querySelector('.cr-boss') && !document.querySelector('.cr-boss').hidden && /OVERLORD/.test(document.querySelector('.cr-boss-name').textContent) ? 'ok' : 'bad'; })()"
ev "(async () => { await __until(() => __cr.fightLog().some(x => x.type === 'enemyShot' && x.id === 'overlord'), 8000); return 'ok'; })()" >/dev/null
bexpect "its telegraph came before its first shot" "(() => { const l = __cr.fightLog(), t = l.findIndex(x => x.type === 'telegraph' && x.id === 'overlord'), s = l.findIndex(x => x.type === 'enemyShot' && x.id === 'overlord'); return t >= 0 && s > t ? 'ok' : 'bad ' + t + ' ' + s; })()"
ev "(async () => { await __until(() => __cr.boss().markers.length > 0, 40000); return 'ok'; })()" >/dev/null
sleep 0.4
shotc boss-lob
bexpect "a terms-of-service lob shows its floor marker (radius 2.5) before it lands" "(() => { const b = __cr.boss(); const l = __cr.fightLog(); return b.markers.length > 0 && b.markers[0].radius === 2.5 && !l.some(x => x.type === 'lobLand') ? 'ok' : 'bad ' + JSON.stringify(b.markers); })()"
ev "(async () => { await __until(() => __cr.fightLog().some(x => x.type === 'lobLand'), 8000); return 'ok'; })()" >/dev/null
bexpect "the page lands after its telegraph (lobLand logged, telegraph kind lob first)" "(() => { const l = __cr.fightLog(); const t = l.findIndex(x => x.type === 'telegraph' && x.kind === 'lob'), g = l.findIndex(x => x.type === 'bossLob'), d = l.findIndex(x => x.type === 'lobLand'); return t >= 0 && g > t && d > g ? 'ok' : 'bad ' + t + ' ' + g + ' ' + d; })()"
# Phase 2: a huge hit crosses 66%; it retreats, invulnerable, and both saunas open.
ev "(async () => { __cr.hurtBoss(1e6, 'head'); await __until(() => __cr.boss().state === 'hiding', 10000); await __w(600); return 'ok'; })()" >/dev/null
shotc boss-phase2
bexpect "phase 2: hiding behind the desk, invulnerable, both saunas open, the bar greyed with its hint" "(() => { const b = __cr.boss(), el = document.querySelector('.cr-boss'); return b.phase === 2 && b.invuln && b.state === 'hiding' && __cr.pads().every(p => p.state === 'open') && el.dataset.invuln === '1' && /INVULNERABLE/.test(document.querySelector('.cr-boss-hint').textContent) ? 'ok' : 'bad'; })()"
bexpect "invulnerable while it hides: a hit changes nothing" "(() => { const h = __cr.boss().health; const r = __cr.hurtBoss(500, 'head'); return r === 'immune' && __cr.boss().health === h ? 'ok' : 'bad ' + r; })()"
# A restart now (the boss checkpoint) puts everything back.
ev "(async () => { __cr.restart(); __cr.drive({}); await __w(500); return 'ok'; })()" >/dev/null
bexpect "restart at the boss checkpoint: boss idle at full health in phase 1, saunas dormant, no ending, no bar" "(() => { const b = __cr.boss(), e = __cr.ending(); return b.state === 'idle' && b.phase === 1 && !b.invuln && b.alive && b.health === 4500 && __cr.pads().every(p => p.state === 'dormant' && p.spawned === 0) && e.state === 'off' && !e.lit && document.querySelector('.cr-boss').hidden && __cr.fight().enemies.filter(x => x.alive).length === 1 ? 'ok' : 'bad ' + JSON.stringify([b, e]); })()"
# The whole thing again, to the end: phase 2, close the saunas, phase 3, the last hit.
ev "(async () => { __cr.place('mid'); __cr.look(0, 0.1); await __until(() => __cr.fight().started, 2000); await __w(1500); __cr.hurtBoss(1e6, 'head'); await __until(() => __cr.boss().state === 'hiding', 10000); __cr.closePads(); await __until(() => { const b = __cr.boss(); return b.phase === 2 && !b.invuln; }, 12000); __cr.hurtBoss(1e6, 'head'); await __until(() => __cr.boss().phase === 3, 2000); await __w(3000); return 'ok'; })()" >/dev/null
CALLS_B=$(ev "__cr.stats().calls"); TRIS_B=$(ev "__cr.stats().tris"); FPS_B=$(ev "Math.round(__cr.stats().fps)")
shotc boss-phase3
bexpect "phase 3: it is back out and vulnerable, with the saunas closed" "(() => { const b = __cr.boss(); return b.phase === 3 && !b.invuln && __cr.pads().every(p => p.state !== 'open' && p.state !== 'dormant') ? 'ok' : 'bad'; })()"
[ "$CALLS_B" -lt 400 ] 2>/dev/null || fail "boss fight: draw calls '$CALLS_B', expected under 400"
[ "$TRIS_B" -lt 300000 ] 2>/dev/null || fail "boss fight: triangles '$TRIS_B', expected under 300000"
echo "boss fight (phase 3, god mode): $FPS_B fps, $CALLS_B calls, $TRIS_B triangles"
ev "(async () => { __cr.bossReady(); __cr.hurtBoss(50, 'head'); await __until(() => __cr.ending().state === 'slump', 3000); return 'ok'; })()" >/dev/null
sleep 0.5
shotc boss-slump
bexpect "the Overlord falls: the fight clears and the ending slumps, nothing else alive, saunas closed" "(() => { const f = __cr.fight(), e = __cr.ending(); return f.clear && f.enemies.every(x => !x.alive) && e.state === 'slump' && !e.lit && __cr.pads().every(p => p.state === 'closed' || p.state === 'spent') ? 'ok' : 'bad'; })()"
ev "(async () => { await __until(() => __cr.ending().state === 'desk', 6000); __cr.place('desk'); await __w(500); return 'ok'; })()" >/dev/null
shotc ending-desk
bexpect "the desk lights up with its sign and the cancel prompt, and no 'another set' banner" "(() => { const a = document.querySelector('.cr-action'); return __cr.ending().state === 'desk' && __cr.ending().lit && a && !a.hidden && /CANCEL/.test(a.textContent) && document.querySelector('.cr-banner').hidden ? 'ok' : 'bad ' + (a && a.textContent); })()"
ev "(async () => { __cr.drive({ interactHeld: true }); await __until(() => __cr.ending().state === 'cards', 3000); __cr.drive({}); await __w(600); return 'ok'; })()" >/dev/null
shotc ending-card1
bexpect "holding interact for a second at the desk cancels: card 1, MEMBERSHIP CANCELLED." "(() => { const e = document.querySelector('.cr-ending'); return __cr.ending().state === 'cards' && __cr.ending().card === 0 && !e.hidden && /MEMBERSHIP CANCELLED\\./.test(e.textContent) ? 'ok' : 'bad ' + e.textContent; })()"
ev "(async () => { await __until(() => __cr.ending().card === 1, 6000); await __w(500); return 'ok'; })()" >/dev/null
shotc ending-card2
bexpect "card 2 is the email with the cancellation fee" "(() => /49\\.99 cancellation fee/.test(document.querySelector('.cr-ending').textContent) ? 'ok' : 'bad')()"
ev "(async () => { await __until(() => __cr.ending().card === 2, 9000); await __w(400); return 'ok'; })()" >/dev/null
shotc ending-card3
ev "(async () => { await __until(() => __cr.ending().card === 3, 9000); await __w(1800); return 'ok'; })()" >/dev/null
shotc ending-card4
bexpect "card 4 is the thanks card, waiting for a key" "(() => { const e = document.querySelector('.cr-ending'); return /thanks for playing/.test(e.textContent) && /GlorpFit/.test(e.textContent) && /any key/i.test(e.textContent) ? 'ok' : 'bad ' + e.textContent; })()"
ev "(async () => { window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyZ' })); await __w(600); return 'ok'; })()" >/dev/null
bexpect "any key goes back to the title with a new run (the Turnstiles, checkpoint reset)" "(() => { const r = __cr.run(); return r.arena === 'turnstiles' && r.checkpoint === 0 && __cr.ending().state === 'off' && document.querySelector('.cr-ending').hidden ? 'ok' : 'bad ' + JSON.stringify(r); })()"
bexpect "the title is up after the ending: no Continue (checkpoint reset), New Run first, the HUD hidden" "(() => { const m = __cr.menu(); return m.open && m.onTitle && m.items[0] === 'new' && !m.items.includes('continue') && document.body.classList.contains('cr-on-title') ? 'ok' : 'bad ' + JSON.stringify(m); })()"
ev "__cr.menuChoose('new')" >/dev/null
sleep 0.3
bexpect "New Run on the first play shows the opening story card" "(() => { const m = __cr.menu(), t = document.getElementById('cr-menu').textContent; return m.open && m.screen === 'intro' && /January 2nd/.test(t) && /He went twice/.test(t) && /It is Tuesday\\. It is 1:30\\./.test(t) ? 'ok' : 'bad ' + JSON.stringify(m) + t; })()"
shotc intro-card
ev "window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyZ' }))" >/dev/null
sleep 0.3
bexpect "any key closes the card and play begins" "(() => { const m = __cr.menu(); return !m.open && !m.onTitle && !document.body.classList.contains('cr-on-title') ? 'ok' : 'bad ' + JSON.stringify(m); })()"
ev "__cr.god(false)" >/dev/null
check_console

# Both down restarts the current arena, not the run.
ev "(async () => { __cr.go('smoothie'); __cr.god(false); __cr.drive({}); __cr.place('open'); await __w(500); __cr.hurtTobble(9999); __cr.hurt(9999); await __until(() => __cr.fightLog().some(x => x.type === 'checkpoint'), 4000); await __w(500); return 'ok'; })()" >/dev/null
rexpect "both down restarts the Smoothie Bar (full health, idle Reps), not the run" "(() => { const r = __cr.run(), f = __cr.fight(), h = __cr.health(); return r.arena === 'smoothie' && r.checkpoint === 1 && !f.started && h.hp === h.max && !h.downed && f.enemies.filter(e => e.alive).every(e => e.state === 'idle') ? 'ok' : 'bad ' + JSON.stringify([r, h]); })()"
ev "__cr.god(true)" >/dev/null
# The checkpoint persists across a reload, which opens the title with Continue.
ev "(() => { localStorage.setItem('gyms-of-war.checkpoint', '1'); return 'ok'; })()" >/dev/null
pw goto "http://localhost:$PORT/index.html" >/dev/null || fail "could not reload"
sleep 2
rexpect "a reload with a saved checkpoint opens the title: GYMS OF WAR, NO PAIN NO CANCEL, Continue (Smoothie Bar) first, nothing simulating, the HUD hidden" "(() => { const m = __cr.menu(), c = document.getElementById('cr-menu'); return m.open && m.onTitle && m.screen === 'title' && /GYMS OF WAR/.test(c.textContent) && /NO PAIN, NO CANCEL/.test(c.textContent) && m.items[0] === 'continue' && /Continue.*Smoothie Bar/.test(c.textContent) && /New Run/.test(c.textContent) && /Back to games/.test(c.textContent) && getComputedStyle(document.getElementById('cr-hud')).display === 'none' ? 'ok' : 'bad ' + JSON.stringify(m); })()"
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); return 'ok'; })()" >/dev/null
rexpect "the dev read-out is hidden by default" "getComputedStyle(document.getElementById('cr-readout')).display === 'none' ? 'ok' : 'bad'"
ev "(async () => { const a = __cr.player().pos.slice(); __cr.drive({ moveY: -1, sprint: true, fire: true, tap: true }); await __w(500); __cr.drive({}); const b = __cr.player().pos; window.__titleMoved = Math.hypot(a[0] - b[0], a[2] - b[2]) + __cr.shots().length; return 'ok'; })()" >/dev/null
rexpect "nothing moves, fires or rolls behind the title (drive input ignored)" "window.__titleMoved === 0 ? 'ok' : 'bad ' + window.__titleMoved"
shotc title
ev "window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }))" >/dev/null
rexpect "arrow keys move the selection on the title" "document.querySelectorAll('#cr-menu .cr-menu-item')[1].classList.contains('sel') ? 'ok' : 'bad'"
ev "__cr.menuChoose('controls')" >/dev/null
rexpect "Controls shows keys and pad side by side" "(() => { const t = document.getElementById('cr-menu').textContent; return __cr.menu().screen === 'controls' && /Keyboard \\+ mouse/.test(t) && /Gamepad/.test(t) && /Right stick/.test(t) && /Hold E|Space/.test(t) ? 'ok' : 'bad ' + t; })()"
shotc controls
ev "__cr.menuChoose('close')" >/dev/null
ev "__cr.menuChoose('continue')" >/dev/null
sleep 1
rexpect "Continue loads the saved arena" "(() => { const r = __cr.run(), m = __cr.menu(); return r.arena === 'smoothie' && r.checkpoint === 1 && !m.open && !m.onTitle ? 'ok' : 'bad ' + JSON.stringify([r, m]); })()"
# Pause: nothing fires behind it, settings save, controls, resume.
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.pause(); await __w(100); return 'ok'; })()" >/dev/null
rexpect "the pause menu opens with Resume, Settings, Controls, Restart arena, Quit to title" "(() => { const m = __cr.menu(); return m.open && m.screen === 'pause' && m.items.join() === 'resume,settings,controls,restart,quit' ? 'ok' : 'bad ' + JSON.stringify(m); })()"
ev "(async () => { const n = __cr.shots().length, a = __cr.player().pos.slice(); __cr.drive({ aim: true, fire: true, moveX: 1, tap: true }); await __w(600); __cr.drive({}); const b = __cr.player().pos; window.__pauseLeak = (__cr.shots().length - n) + Math.hypot(a[0] - b[0], a[2] - b[2]); return 'ok'; })()" >/dev/null
rexpect "no shot, roll or step happens behind the pause menu" "window.__pauseLeak === 0 ? 'ok' : 'bad ' + window.__pauseLeak"
shotc pause
ev "__cr.menuChoose('settings')" >/dev/null
rexpect "Settings lists volume, mouse sensitivity, invert Y and pad look sensitivity" "(() => { const t = document.getElementById('cr-menu').textContent; return __cr.menu().screen === 'settings' && /Master volume/.test(t) && /Mouse sensitivity/.test(t) && /Invert Y/.test(t) && /Pad look sensitivity/.test(t) ? 'ok' : 'bad ' + t; })()"
ev "(() => { window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' })); return 'ok'; })()" >/dev/null
rexpect "the settings save to localStorage" "(() => { const s = JSON.parse(localStorage.getItem('gyms-of-war.settings')); return s.volume === 0.9 && __cr.menu().settings.volume === 0.9 ? 'ok' : 'bad ' + JSON.stringify(s); })()"
shotc settings
ev "__cr.menuChoose('close')" >/dev/null
ev "(async () => { __cr.menuChoose('resume'); await __w(200); return 'ok'; })()" >/dev/null
rexpect "Resume closes the menu and the game runs again" "(() => !__cr.menu().open ? 'ok' : 'bad')()"
ev "(async () => { const a = __cr.player().pos.slice(); __cr.drive({ moveX: 1 }); await __w(600); __cr.drive({}); const b = __cr.player().pos; window.__resumed = Math.hypot(a[0] - b[0], a[2] - b[2]); return 'ok'; })()" >/dev/null
rexpect "Doc moves again after Resume" "window.__resumed > 0.5 ? 'ok' : 'bad ' + window.__resumed"
ev "__cr.pause(); " >/dev/null
ev "__cr.menuChoose('quit')" >/dev/null
rexpect "Quit to title shows the title over the Turnstiles, Continue still offered" "(() => { const m = __cr.menu(); return m.open && m.onTitle && m.items[0] === 'continue' && __cr.level() === 'turnstiles' ? 'ok' : 'bad ' + JSON.stringify(m); })()"
ev "(() => { localStorage.clear(); return 'ok'; })()" >/dev/null
# ---- Story (piece 4c): the title's backstory, the elevator ride between floors, the card before a restart, ceilings and floor signs.
pw goto "http://localhost:$PORT/index.html" >/dev/null || fail "could not open the title"
sleep 2
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; return 'ok'; })()" >/dev/null
sexpect() { local r; r=$(ev "$2"); [ "$r" = "ok" ] || fail "story: $1: $(pw --raw eval "JSON.stringify([__cr.run(), __cr.card()])") ($r)"; }
sexpect "the title carries the backstory and the new-run clock line" "(() => { const t = document.getElementById('cr-menu').textContent; return /January 2nd/.test(t) && /49\.99/.test(t) && /in person/.test(t) && /1:30 p\.m\./.test(t) && /2:15/.test(t) ? 'ok' : 'bad ' + t; })()"
shotc story-title
pw goto "http://localhost:$PORT/index.html?arena=turnstiles&cards" >/dev/null
sleep 2
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; return 'ok'; })()" >/dev/null
sexpect "?cards turns the story cards on in a jump URL" "__cr.run().cards ? 'ok' : 'bad'"
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.clearArena(); await __until(() => __cr.run().gateOpen, 3000); const g = __cr.gate(); __cr.at(g.pos[0], g.pos[2] - 3, 0); __cr.drive({ moveY: -1 }); await __until(() => __cr.run().phase === 'card', 6000); __cr.drive({}); await __w(100); const c = __cr.card(), r = __cr.run(), fl = document.querySelector('.cr-cab-floor'); window.__ride = c.visible && r.phase === 'card' && r.fade === 1 && /Smoothie Bar/i.test(c.text) && /asterisk/.test(c.text) && /Cancellation hours: Tues 2:00.2:05/.test(c.text) && /Sweatin/.test(c.text) && !!fl && fl.textContent.length > 0; window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyX' })); await __w(150); window.__early = __cr.run().phase; await __w(700); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyX' })); await __until(() => __cr.run().phase === 'play', 3000); return 'ok'; })()" >/dev/null
sexpect "walking into the gate rides the elevator: the card was up, black, with the Smoothie Bar's lines, the hours, the muzak and a floor counter" "window.__ride === true ? 'ok' : 'bad'"
sexpect "a key press before the skip delay did not skip the card" "window.__early === 'card' ? 'ok' : 'bad ' + window.__early"
sexpect "a later press skipped it: the Smoothie Bar is the checkpoint, the card is gone, the hours line shows, Doc is at the entry" "(() => { const r = __cr.run(), p = __cr.player().pos; return r.arena === 'smoothie' && r.checkpoint === 1 && !__cr.card().visible && r.fade === 0 && /Cancellation hours/.test(r.hours || '') && p[2] < -14 ? 'ok' : 'bad ' + JSON.stringify([r, p]); })()"
ev "(async () => { __cr.god(false); __cr.hurtTobble(1e6); __cr.hurt(1e6); await __until(() => __cr.run().phase === 'fadeOut' || __cr.run().phase === 'card', 8000); await __until(() => __cr.run().phase === 'card', 3000); await __w(300); return 'ok'; })()" >/dev/null
sexpect "both down: the defeat card shows a line and Doc's reply, and the arena restarted under it" "(() => { const c = __cr.card(), r = __cr.run(); return c.visible && r.kind === 'defeat' && /Doc:/.test(c.text) && /(PA|Tobble):/.test(c.text) && r.arena === 'smoothie' && __cr.health().hp === 100 && !__cr.health().downed ? 'ok' : 'bad ' + JSON.stringify([c, r, __cr.health()]); })()"
shotc story-defeat
ev "(async () => { await __w(600); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyX' })); await __until(() => __cr.run().phase === 'play', 3000); return 'ok'; })()" >/dev/null
sexpect "the defeat card skips, and play resumes in the same arena" "(() => { const r = __cr.run(); return r.arena === 'smoothie' && r.phase === 'play' && !__cr.card().visible ? 'ok' : 'bad'; })()"
# Ceilings: no open sky overhead, the floor sign is in the scene, and the budget holds with the roof.
ev "(async () => { __cr.setCards(false); __cr.god(true); __cr.drive({}); __cr.place('open'); await __w(2500); return 'ok'; })()" >/dev/null
CE_CALLS=$(ev "__cr.stats().calls"); CE_TRIS=$(ev "__cr.stats().tris")
[ "$CE_CALLS" -lt 400 ] 2>/dev/null || fail "story: smoothie bar with its ceiling: draw calls '$CE_CALLS', expected under 400"
[ "$CE_TRIS" -lt 300000 ] 2>/dev/null || fail "story: smoothie bar with its ceiling: triangles '$CE_TRIS', expected under 300000"
ev "(() => { __cr.look(0, 0.5); return 'ok'; })()" >/dev/null
sleep 1
shotc story-ceiling
ev "__cr.god(false)" >/dev/null
check_console

echo "run: smoothie bar $SM_FPS fps $SM_CALLS calls $SM_TRIS tris; desk $D_FPS fps $D_CALLS calls $D_TRIS tris; boss fight $FPS_B fps $CALLS_B calls $TRIS_B tris"
check_console

echo "smoke ok: ready, title and pause menus checked, look test driven, grey room and Check-in Turnstiles fight driven, Smoothie Bar and Cancellation Desk run (gates, swaps, disposal, checkpoint, Continue) (Tobble, finishers, bash, Cheat Day, kettlebells, Spawn Sauna, revives), perf $CALLS_ON calls ($CALLS_OFF without outlines), $TRIS triangles, no console errors; screenshots at $SHOT_DIR"

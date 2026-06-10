// ── State ────────────────────────────────────────────────────────────────────
var gridState = [];
var trayState = [];
var selectedTile = null;
var foundWords = new Set();
var currentPuzzle = null;
var wordFoundCount = 0;
var undoSnapshot = null;
var resetConfirmPending = false;
var resetConfirmTimer = null;
var VOWELS = { A:1, E:1, I:1, O:1, U:1 };
var lastTrayFocusIndex = 0;

// ── Letter Values ─────────────────────────────────────────────────────────────
var LETTER_VALUES = {
  A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3,
  N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
};

function letterValue(ch) {
  return LETTER_VALUES[ch.toUpperCase()] || 1;
}

function puzzleIdCharSum() {
  if (!currentPuzzle) return 0;
  var s = 0;
  for (var i = 0; i < currentPuzzle.id.length; i++) s += currentPuzzle.id.charCodeAt(i);
  return s;
}

// ── Screen System ─────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ── Puzzle Load ───────────────────────────────────────────────────────────────
function loadPuzzle(puzzle) {
  currentPuzzle = puzzle;
  selectedTile = null;
  foundWords = new Set();
  wordFoundCount = 0;
  undoSnapshot = null;
  resetConfirmPending = false;
  if (resetConfirmTimer) { clearTimeout(resetConfirmTimer); resetConfirmTimer = null; }

  gridState = [];
  for (var r = 0; r < 4; r++) {
    gridState[r] = [null, null, null, null];
  }

  if (puzzle.anchors && puzzle.anchors.length) {
    puzzle.anchors.forEach(function(a) {
      gridState[a.row][a.col] = { letter: a.letter, value: letterValue(a.letter), isAnchor: true };
    });
  }

  trayState = puzzle.letters.map(function(ch) {
    return { letter: ch, value: letterValue(ch) };
  });

  var oldDed = document.querySelector('#screen-game .puzzle-dedication');
  if (oldDed) oldDed.remove();

  if (puzzle.dedication) {
    var ded = document.createElement('p');
    ded.className = 'puzzle-dedication';
    ded.textContent = puzzle.dedication;
    var tray = document.getElementById('tray');
    tray.parentNode.insertBefore(ded, tray.nextSibling);
    setTimeout(function() {
      ded.classList.add('dedication--visible');
    }, 3000);
  }

  var oldRing = document.querySelector('#screen-game .coffee-ring');
  if (oldRing) oldRing.remove();

  var seed = 0;
  for (var i = 0; i < puzzle.id.length; i++) seed += puzzle.id.charCodeAt(i);
  var x = 15 + (seed % 70);
  var y = 15 + ((seed * 7) % 70);
  var ring = document.createElement('div');
  ring.className = 'coffee-ring';
  ring.setAttribute('aria-hidden', 'true');
  ring.style.left = x + '%';
  ring.style.top = y + '%';
  var wrapper = document.querySelector('#screen-game .screen-wrapper');
  wrapper.insertBefore(ring, wrapper.firstChild);

  detectWords();
  render();
  showScreen('screen-game');

  // Focus the first tray tile so keyboard play can begin immediately
  lastTrayFocusIndex = 0;
  var firstTrayTile = document.querySelector('#tray .tile');
  if (firstTrayTile) firstTrayTile.focus();

  var undoBtn = document.getElementById('btn-undo');
  undoBtn.disabled = true;
  undoBtn.onclick = function() {
    if (!undoSnapshot) return;
    gridState = undoSnapshot.gridState;
    trayState = undoSnapshot.trayState;
    foundWords = undoSnapshot.foundWords;
    undoSnapshot = null;
    undoBtn.disabled = true;
    render();
  };

  var resetBtn = document.getElementById('btn-reset');
  resetBtn.textContent = 'Reset';
  resetBtn.className = '';
  resetBtn.onclick = function() {
    if (!resetConfirmPending) {
      resetConfirmPending = true;
      resetBtn.textContent = 'Sure?';
      resetBtn.classList.add('reset-confirm');
      resetConfirmTimer = setTimeout(function() {
        resetConfirmPending = false;
        resetBtn.textContent = 'Reset';
        resetBtn.classList.remove('reset-confirm');
      }, 3000);
    } else {
      clearTimeout(resetConfirmTimer);
      resetConfirmPending = false;
      resetBtn.textContent = 'Reset';
      resetBtn.classList.remove('reset-confirm');
      for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 4; c++) {
          if (gridState[r][c] && !gridState[r][c].isAnchor) {
            trayState.push({ letter: gridState[r][c].letter, value: gridState[r][c].value });
            gridState[r][c] = null;
          }
        }
      }
      selectedTile = null;
      undoSnapshot = null;
      document.getElementById('btn-undo').disabled = true;
      foundWords = new Set();
      detectWords();
      render();
    }
  };
}

// ── Home Screen ───────────────────────────────────────────────────────────────
function renderHomeScreen() {
  var today = new Date().toISOString().slice(0, 10);
  var todayPuzzle = null;
  for (var i = 0; i < PUZZLES.length; i++) {
    if (PUZZLES[i].date === today) { todayPuzzle = PUZZLES[i]; break; }
  }

  var difficultyNames = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

  if (!todayPuzzle) {
    var card = document.querySelector('.daily-card');
    card.innerHTML = '<p style="color:var(--cream);font-size:14px;">No puzzle today — browse the library.</p>';
    return;
  }

  var dateObj = new Date(today + 'T12:00:00');
  var dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  document.querySelector('.daily-card__date').textContent = dateStr;

  var badge = document.querySelector('.difficulty-badge');
  badge.setAttribute('data-level', todayPuzzle.difficulty);
  badge.textContent = difficultyNames[todayPuzzle.difficulty] || '';

  document.querySelector('.daily-card__title').textContent = todayPuzzle.title;

  var yesterday = new Date(new Date(today + 'T12:00:00').getTime() - 86400000).toISOString().slice(0, 10);
  var yesterdayPuzzle = null;
  for (var j = 0; j < PUZZLES.length; j++) {
    if (PUZZLES[j].date === yesterday) { yesterdayPuzzle = PUZZLES[j]; break; }
  }

  var oldYest = document.querySelector('.daily-card__yesterday');
  if (oldYest) oldYest.remove();

  if (yesterdayPuzzle) {
    var stored = JSON.parse(localStorage.getItem('lexigrid_result_' + yesterdayPuzzle.id) || 'null');
    if (stored) {
      var yestEl = document.createElement('p');
      yestEl.className = 'daily-card__yesterday';
      yestEl.textContent = 'Yesterday: ' + stored.score + ' pts';
      var titleEl = document.querySelector('.daily-card__title');
      titleEl.parentNode.insertBefore(yestEl, titleEl.nextSibling);
    }
  }

  var playBtn = document.querySelector('#screen-home .btn-play');
  playBtn.onclick = function(e) { e.preventDefault(); loadPuzzle(todayPuzzle); };

  var libLink = document.querySelector('.library-link');
  libLink.onclick = function(e) { e.preventDefault(); showScreen('screen-library'); renderLibraryScreen(); };
}

// ── Library Screen ────────────────────────────────────────────────────────────
function renderLibraryScreen() {
  var difficultyNames = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };
  var sections = { 1: [], 2: [], 3: [] };

  PUZZLES.forEach(function(p) {
    if (sections[p.difficulty]) sections[p.difficulty].push(p);
  });

  var container = document.getElementById('library-sections');
  container.innerHTML = '';

  [1, 2, 3].forEach(function(diff) {
    var puzzlesInDiff = sections[diff];
    if (!puzzlesInDiff.length) return;

    var section = document.createElement('div');
    section.className = 'library-section';
    section.setAttribute('data-difficulty', diff);

    var label = document.createElement('h3');
    label.className = 'library-section__label';
    label.textContent = difficultyNames[diff];
    section.appendChild(label);

    var ul = document.createElement('ul');
    ul.className = 'library-list';

    puzzlesInDiff.forEach(function(p) {
      var stored = JSON.parse(localStorage.getItem('lexigrid_result_' + p.id) || 'null');
      var li = document.createElement('li');
      li.className = 'library-item';
      li.setAttribute('data-puzzle-id', p.id);

      var left = document.createElement('div');
      left.className = 'library-item__left';

      var badgeEl = document.createElement('span');
      badgeEl.className = 'difficulty-badge';
      badgeEl.setAttribute('data-level', p.difficulty);
      badgeEl.textContent = difficultyNames[p.difficulty];
      left.appendChild(badgeEl);

      var titleEl = document.createElement('span');
      titleEl.className = 'library-item__title';
      titleEl.textContent = p.title;
      left.appendChild(titleEl);

      var right = document.createElement('div');
      right.className = 'library-item__right';

      if (stored) {
        var best = document.createElement('span');
        best.className = 'library-item__best';
        best.textContent = 'Best: ' + stored.score + ' pts';
        right.appendChild(best);

        var check = document.createElement('span');
        check.className = 'completion-check';
        check.textContent = '✓';
        right.appendChild(check);
      }

      var playBtn = document.createElement('a');
      playBtn.className = 'btn-play-small';
      playBtn.href = '#';
      playBtn.textContent = 'Play';
      (function(puzzle) {
        playBtn.onclick = function(e) { e.preventDefault(); loadPuzzle(puzzle); };
      }(p));
      right.appendChild(playBtn);

      li.appendChild(left);
      li.appendChild(right);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    container.appendChild(section);
  });

  var backLink = document.querySelector('#screen-library .back-link');
  backLink.onclick = function(e) { e.preventDefault(); showScreen('screen-home'); renderHomeScreen(); };
}

// ── Persistence ───────────────────────────────────────────────────────────────
function savePuzzleResult() {
  if (!currentPuzzle) return;
  var score = computeScore();
  var key = 'lexigrid_result_' + currentPuzzle.id;
  var stored = JSON.parse(localStorage.getItem(key) || 'null');
  if (!stored || score > stored.score) {
    var wordSet = new Set();
    foundWords.forEach(function(k) {
      wordSet.add(k.substring(0, k.indexOf(':')));
    });
    localStorage.setItem(key, JSON.stringify({
      score: score,
      maxScore: currentPuzzle.maxScore,
      date: currentPuzzle.date,
      words: Array.from(wordSet)
    }));
  }
}

// ── Results Screen ────────────────────────────────────────────────────────────
function showResults() {
  var score = computeScore();
  var puzzle = currentPuzzle;

  document.querySelector('.postcard__title').textContent = puzzle.title;

  var scoreStr = String(score);
  var charCodeSum = 0;
  for (var i = 0; i < puzzle.id.length; i++) {
    charCodeSum += puzzle.id.charCodeAt(i);
  }
  var scoreBlock = document.querySelector('.postcard__score-block');
  scoreBlock.innerHTML = '';
  for (var ci = 0; ci < scoreStr.length; ci++) {
    var span = document.createElement('span');
    span.className = 'score-char';
    span.textContent = scoreStr[ci];
    var rot = ((charCodeSum + ci * 7) % 9) - 4;
    var ty = ((charCodeSum + ci * 13) % 7) - 3;
    span.style.transform = 'rotate(' + rot + 'deg) translateY(' + ty + 'px)';
    scoreBlock.appendChild(span);
  }

  var wordSet = new Set();
  foundWords.forEach(function(k) {
    wordSet.add(k.substring(0, k.indexOf(':')));
  });
  var wordArr = Array.from(wordSet).sort();
  document.querySelector('.postcard__words-list').textContent = wordArr.join(' · ');

  var oldPcDed = document.querySelector('.postcard__dedication');
  if (oldPcDed) oldPcDed.remove();
  if (puzzle.dedication) {
    var pcDed = document.createElement('p');
    pcDed.className = 'postcard__dedication';
    pcDed.textContent = puzzle.dedication;
    var actionsEl = document.querySelector('.postcard__actions');
    actionsEl.parentNode.insertBefore(pcDed, actionsEl);
    setTimeout(function() {
      pcDed.classList.add('dedication--visible');
    }, 3000);
  }

  var copyBtn = document.querySelector('.btn-copy');
  copyBtn.textContent = 'Copy to Share';
  copyBtn.onclick = function() {
    var text = 'LexiGrid · ' + puzzle.title + ' · Score: ' + score + ' · ' + wordSet.size + ' words found';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        copyBtn.textContent = 'Copied!';
        setTimeout(function() { copyBtn.textContent = 'Copy to Share'; }, 1500);
      });
    } else {
      copyBtn.textContent = 'Copied!';
      setTimeout(function() { copyBtn.textContent = 'Copy to Share'; }, 1500);
    }
  };

  document.querySelector('.btn-play-again').onclick = function() {
    loadPuzzle(currentPuzzle);
  };

  document.querySelector('.btn-home').onclick = function() {
    showScreen('screen-home');
    renderHomeScreen();
  };

  showScreen('screen-results');

  // Move focus to Copy to Share for keyboard users completing the puzzle
  if (copyBtn) copyBtn.focus();
}

// ── Render ────────────────────────────────────────────────────────────────────
function render() {
  var grid = document.getElementById('grid');
  var tray = document.getElementById('tray');

  var foundCellKeys = new Set();
  foundWords.forEach(function(key) {
    var colon = key.indexOf(':');
    key.substring(colon + 1).split('|').forEach(function(s) {
      foundCellKeys.add(s);
    });
  });

  var gridHtml = '';
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      var bonus = getBonusCell(r, c);
      var cellClass = 'cell';
      var bonusLabel = '';
      if (bonus) {
        cellClass += bonus.type === '2xL' ? ' cell--bonus-letter' : ' cell--bonus-word';
        bonusLabel = '<span class="bonus-label">' + bonus.type.replace('x', '&times;') + '</span>';
      }

      var tileHtml = '';
      var cell = gridState[r][c];
      var cellAriaLabel = 'Row ' + (r + 1) + ', Column ' + (c + 1);
      if (cell) {
        var isFound = foundCellKeys.has(r + ',' + c);
        var tileClass = 'tile';
        if (isFound) tileClass += ' tile--found';
        if (cell.isAnchor) tileClass += ' tile--anchor';
        tileHtml = '<div class="' + tileClass + '" data-letter="' + cell.letter + '" data-value="' + cell.value + '"' +
          (cell.isAnchor ? ' data-anchor="true"' : '') + ' tabindex="0" aria-label="' + cell.letter.toUpperCase() + ', ' + cell.value + ' points">' +
          '<span class="tile-letter">' + cell.letter + '</span>' +
          '<span class="tile-point">' + cell.value + '</span>' +
          '</div>';
        cellAriaLabel += ', ' + cell.letter.toUpperCase();
      }

      gridHtml += '<div class="' + cellClass + '" data-row="' + r + '" data-col="' + c + '" tabindex="0" aria-label="' + cellAriaLabel + '">' +
        tileHtml + bonusLabel + '</div>';
    }
  }
  grid.innerHTML = gridHtml;

  var vowelItems = [], consonantItems = [];
  for (var ti2 = 0; ti2 < trayState.length; ti2++) {
    var tItem = { tile: trayState[ti2], origIndex: ti2 };
    if (VOWELS[trayState[ti2].letter]) { vowelItems.push(tItem); } else { consonantItems.push(tItem); }
  }
  vowelItems.sort(function(a, b) { return a.tile.value - b.tile.value; });
  consonantItems.sort(function(a, b) { return a.tile.value - b.tile.value; });
  var sortedTray = vowelItems.concat(consonantItems);
  var seed = puzzleIdCharSum();
  var trayHtml = '';
  sortedTray.forEach(function(item, i) {
    var t = item.tile, origIdx = item.origIndex;
    var offset = ((seed + i * 37) % 3) + 1;
    trayHtml += '<div class="tile" data-letter="' + t.letter + '" data-value="' + t.value + '" data-tray-index="' + origIdx + '" tabindex="0" aria-label="' + t.letter.toUpperCase() + ', ' + t.value + ' points" style="margin-top:' + offset + 'px">' +
      '<span class="tile-letter">' + t.letter + '</span>' +
      '<span class="tile-point">' + t.value + '</span>' +
      '</div>';
    if (i === vowelItems.length - 1 && consonantItems.length > 0) {
      trayHtml += '<div class="tray-separator"></div>';
    }
  });
  tray.innerHTML = trayHtml;

  if (selectedTile) {
    var sel = null;
    if (selectedTile.source === 'tray') {
      sel = tray.querySelector('.tile[data-tray-index="' + selectedTile.index + '"]');
    } else {
      var selCell = grid.querySelector('[data-row="' + selectedTile.index.row + '"][data-col="' + selectedTile.index.col + '"]');
      sel = selCell ? selCell.querySelector('.tile') : null;
    }
    if (sel) sel.classList.add('tile--selected');
  }

  document.getElementById('score-value').textContent = computeScore();
  document.getElementById('words-count').textContent = foundWords.size;

  var wordsList = document.getElementById('found-words-list');
  var seen = new Set();
  var badgesHtml = '';
  foundWords.forEach(function(key) {
    var word = key.substring(0, key.indexOf(':'));
    if (!seen.has(word)) {
      seen.add(word);
      badgesHtml += '<span class="found-word">' + word + '</span>';
    }
  });
  if (wordsList.innerHTML !== badgesHtml) wordsList.innerHTML = badgesHtml;
}

function getBonusCell(r, c) {
  for (var i = 0; i < currentPuzzle.bonusCells.length; i++) {
    var b = currentPuzzle.bonusCells[i];
    if (b.row === r && b.col === c) return b;
  }
  return null;
}

// ── Word Detection ────────────────────────────────────────────────────────────
/*
 * Dedup key: word + ':' + cells.map(c => c.row+','+c.col).join('|')
 * Same word, different cell path → separate keys → scores separately.
 * Identical cell-path for same word → same key → deduplicated.
 */
function detectWords() {
  foundWords = new Set();

  var directions = [
    [0, 1], [0, -1], [1, 0], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      for (var d = 0; d < directions.length; d++) {
        var candidates = scanDir(r, c, directions[d][0], directions[d][1]);
        for (var i = 0; i < candidates.length; i++) {
          var cand = candidates[i];
          var word = cand.word.toUpperCase();
          if (word.length >= 3 &&
              (currentPuzzle.words.indexOf(word) !== -1 || DICT.has(word))) {
            var key = word + ':' + cand.cells.map(function(cell) {
              return cell.row + ',' + cell.col;
            }).join('|');
            foundWords.add(key);
          }
        }
      }
    }
  }
}

function scanDir(row, col, dr, dc) {
  var results = [];
  var r = row, c = col;
  var word = '';
  var cells = [];

  while (r >= 0 && r < 4 && c >= 0 && c < 4 && gridState[r][c] !== null) {
    word += gridState[r][c].letter;
    cells.push({ row: r, col: c });

    if (cells.length >= 3) {
      results.push({ word: word, cells: cells.slice() });
    }

    r += dr;
    c += dc;
  }

  return results;
}

function scoreWord(word, cells) {
  var letterSum = 0;
  var wordMultiplier = 1;

  for (var i = 0; i < cells.length; i++) {
    var tileVal = letterValue(word[i]);
    var bonus = getBonusCell(cells[i].row, cells[i].col);

    if (bonus) {
      if (bonus.type === '2xL') {
        tileVal *= 2;
      } else if (bonus.type === '2xW') {
        wordMultiplier *= 2;
      }
    }

    letterSum += tileVal;
  }

  var lengthMult = word.length >= 5 ? 2 : word.length === 4 ? 1.5 : 1;
  return Math.round(letterSum * lengthMult * wordMultiplier);
}

function computeScore() {
  var total = 0;
  foundWords.forEach(function(key) {
    var colon = key.indexOf(':');
    var word = key.substring(0, colon);
    var cellPart = key.substring(colon + 1);
    var cells = cellPart.split('|').map(function(s) {
      var parts = s.split(',');
      return { row: parseInt(parts[0]), col: parseInt(parts[1]) };
    });
    total += scoreWord(word, cells);
  });
  return total;
}

// ── Word Feedback ─────────────────────────────────────────────────────────────
function getWordDirection(cells) {
  if (cells.length < 2) return { type: 'amber', arrow: '→', label: 'Horizontal' };
  var dr = cells[1].row - cells[0].row;
  var dc = cells[1].col - cells[0].col;
  if (dr === 0 && dc > 0)  return { type: 'amber',     arrow: '→', label: 'Horizontal' };
  if (dr === 0 && dc < 0)  return { type: 'backwards', arrow: '←', label: 'Backwards'  };
  if (dr > 0  && dc === 0) return { type: 'sienna',    arrow: '↓', label: 'Vertical'   };
  if (dr < 0  && dc === 0) return { type: 'backwards', arrow: '↑', label: 'Backwards'  };
  return { type: 'diagonal', arrow: dr > 0 ? (dc > 0 ? '↘' : '↙') : (dc > 0 ? '↗' : '↖'), label: 'Diagonal' };
}

function saveUndo() {
  undoSnapshot = {
    gridState: gridState.map(function(row) {
      return row.map(function(cell) {
        return cell ? { letter: cell.letter, value: cell.value, isAnchor: cell.isAnchor } : null;
      });
    }),
    trayState: trayState.map(function(t) { return { letter: t.letter, value: t.value }; }),
    foundWords: new Set(foundWords)
  };
  document.getElementById('btn-undo').disabled = false;
}

function playPlacementThud() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 80;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch(e) {}
}

function animateTilePlacement(row, col) {
  var cellEl = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
  if (!cellEl) return;
  var tileEl = cellEl.querySelector('.tile');
  if (!tileEl) return;
  tileEl.classList.remove('tile--placing');
  void tileEl.offsetWidth;
  tileEl.classList.add('tile--placing');
}

function playFirstWordChime() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 523;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

function injectWordFeedback(newKeys) {
  if (!newKeys.length) return;

  var isFirst = (wordFoundCount === 0);
  wordFoundCount += newKeys.length;

  newKeys.forEach(function(key, keyIdx) {
    var colon = key.indexOf(':');
    var cells = key.substring(colon + 1).split('|').map(function(s) {
      var p = s.split(',');
      return { row: parseInt(p[0]), col: parseInt(p[1]) };
    });

    var dir = getWordDirection(cells);

    cells.forEach(function(cell, i) {
      var cellEl = document.querySelector('[data-row="' + cell.row + '"][data-col="' + cell.col + '"]');
      if (!cellEl) return;

      var bloom = document.createElement('span');
      bloom.className = 'bloom-overlay bloom-' + dir.type;
      bloom.style.animationDelay = (i * 0.08).toFixed(2) + 's';
      cellEl.appendChild(bloom);

      if (isFirst && keyIdx === 0) {
        var shimmer = document.createElement('span');
        shimmer.className = 'bloom-overlay bloom-shimmer';
        shimmer.style.animationDelay = (0.2 + i * 0.08).toFixed(2) + 's';
        cellEl.appendChild(shimmer);
      }
    });

    var midIdx = Math.floor(cells.length / 2);
    var midCell = cells[midIdx];
    var midEl = document.querySelector('[data-row="' + midCell.row + '"][data-col="' + midCell.col + '"]');
    if (midEl) {
      var badge = document.createElement('span');
      badge.className = 'dir-badge';
      badge.textContent = dir.arrow;
      badge.style.animationDelay = (midIdx * 0.08).toFixed(2) + 's';
      midEl.appendChild(badge);
      (function(b) {
        setTimeout(function() { if (b.parentNode) b.parentNode.removeChild(b); }, 2100);
      }(badge));
    }

    if (isFirst && keyIdx === 0) {
      var firstCell = cells[0];
      var firstEl = document.querySelector('[data-row="' + firstCell.row + '"][data-col="' + firstCell.col + '"]');
      if (firstEl) {
        var lbl = document.createElement('span');
        lbl.className = 'dir-label';
        lbl.textContent = dir.arrow + ' ' + dir.label + '!';
        firstEl.appendChild(lbl);
        setTimeout(function() { if (lbl.parentNode) lbl.parentNode.removeChild(lbl); }, 2600);
      }
      playFirstWordChime();
    }
  });
}

// ── Interaction ───────────────────────────────────────────────────────────────
var dragState = null;
var isDragging = false;

document.addEventListener('click', function(e) {
  if (isDragging) {
    isDragging = false;
    return;
  }

  var tile = e.target.closest('.tile');
  var cell = e.target.closest('.cell');

  if (!tile && !cell) return;

  // Anchor guard
  if (tile && tile.dataset.anchor === 'true') return;

  var inTray = tile && !cell;
  var inGrid = cell && !!cell.closest('#grid');

  if (inTray) {
    var idx = parseInt(tile.dataset.trayIndex);
    if (isNaN(idx)) return;

    if (selectedTile && selectedTile.source === 'tray' && selectedTile.index === idx) {
      selectedTile = null;
    } else {
      selectedTile = { source: 'tray', index: idx, letter: tile.dataset.letter, value: parseInt(tile.dataset.value) };
    }
    render();
    return;
  }

  if (inGrid) {
    var row = parseInt(cell.dataset.row);
    var col = parseInt(cell.dataset.col);

    // Anchor guard for grid cell
    if (gridState[row][col] && gridState[row][col].isAnchor) return;

    var hasTile = gridState[row][col] !== null;

    if (hasTile) {
      if (selectedTile && selectedTile.source === 'tray') return;

      if (selectedTile && selectedTile.source === 'grid') {
        var sr = selectedTile.index.row, sc = selectedTile.index.col;
        if (sr === row && sc === col) {
          selectedTile = null;
          render();
          return;
        }
        var tmp = gridState[sr][sc];
        gridState[sr][sc] = gridState[row][col];
        gridState[row][col] = tmp;
        selectedTile = null;
        var prev1 = new Set(foundWords);
        detectWords();
        render();
        var nk1 = []; foundWords.forEach(function(k) { if (!prev1.has(k)) nk1.push(k); });
        injectWordFeedback(nk1);
        return;
      }

      selectedTile = {
        source: 'grid',
        index: { row: row, col: col },
        letter: gridState[row][col].letter,
        value: gridState[row][col].value
      };
      render();
      return;
    }

    if (selectedTile) {
      if (selectedTile.source === 'tray') {
        saveUndo();
        gridState[row][col] = { letter: selectedTile.letter, value: selectedTile.value, isAnchor: false };
        trayState.splice(selectedTile.index, 1);
        selectedTile = null;
        var prev2 = new Set(foundWords);
        detectWords();
        render();
        playPlacementThud();
        animateTilePlacement(row, col);
        var nk2 = []; foundWords.forEach(function(k) { if (!prev2.has(k)) nk2.push(k); });
        injectWordFeedback(nk2);
        checkCompletion();
      } else if (selectedTile.source === 'grid') {
        var sr = selectedTile.index.row, sc = selectedTile.index.col;
        gridState[row][col] = gridState[sr][sc];
        gridState[sr][sc] = null;
        selectedTile = null;
        var prev3 = new Set(foundWords);
        detectWords();
        render();
        var nk3 = []; foundWords.forEach(function(k) { if (!prev3.has(k)) nk3.push(k); });
        injectWordFeedback(nk3);
      }
    }
  }
});

document.addEventListener('pointerdown', function(e) {
  var tile = e.target.closest('.tile');
  if (!tile) return;

  // Anchor guard
  if (tile.dataset.anchor === 'true') return;

  var cell = tile.closest('.cell');
  var source, idx;

  if (cell) {
    var cellRow = parseInt(cell.dataset.row);
    var cellCol = parseInt(cell.dataset.col);
    if (gridState[cellRow][cellCol] && gridState[cellRow][cellCol].isAnchor) return;
    source = 'grid';
    idx = { row: cellRow, col: cellCol };
  } else {
    source = 'tray';
    idx = parseInt(tile.dataset.trayIndex);
  }

  var letter = tile.dataset.letter;
  var value = parseInt(tile.dataset.value);

  var ghost = tile.cloneNode(true);
  ghost.classList.add('drag-ghost');
  ghost.style.left = (e.clientX - 32) + 'px';
  ghost.style.top = (e.clientY - 32) + 'px';
  document.body.appendChild(ghost);

  dragState = {
    source: source,
    index: idx,
    letter: letter,
    value: value,
    ghost: ghost,
    lastHoverCell: null,
    startX: e.clientX,
    startY: e.clientY
  };
  isDragging = false;

  e.target.setPointerCapture(e.pointerId);
});

document.addEventListener('pointermove', function(e) {
  if (!dragState) return;

  var ghost = dragState.ghost;
  ghost.style.left = (e.clientX - 32) + 'px';
  ghost.style.top = (e.clientY - 32) + 'px';

  var dx = e.clientX - dragState.startX;
  var dy = e.clientY - dragState.startY;
  if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
    isDragging = true;
  }

  var el = document.elementFromPoint(e.clientX, e.clientY);
  var targetCell = el ? el.closest('.cell') : null;

  if (dragState.lastHoverCell && dragState.lastHoverCell !== targetCell) {
    dragState.lastHoverCell.classList.remove('cell--drag-over');
  }

  if (targetCell && !targetCell.querySelector('.tile') && targetCell.closest('#grid')) {
    targetCell.classList.add('cell--drag-over');
    dragState.lastHoverCell = targetCell;
  } else {
    dragState.lastHoverCell = null;
  }
});

document.addEventListener('pointerup', function(e) {
  if (!dragState) return;

  var ghost = dragState.ghost;
  var ds = dragState;
  dragState = null;

  if (ds.lastHoverCell) {
    ds.lastHoverCell.classList.remove('cell--drag-over');
  }

  ghost.remove();

  if (!isDragging) return;

  var el = document.elementFromPoint(e.clientX, e.clientY);
  var targetCell = el ? el.closest('.cell') : null;
  var stateChanged = false;

  if (targetCell && targetCell.closest('#grid')) {
    var row = parseInt(targetCell.dataset.row);
    var col = parseInt(targetCell.dataset.col);

    // Anchor guard for drop target
    if (gridState[row][col] && gridState[row][col].isAnchor) {
      render();
      return;
    }

    var targetHasTile = gridState[row][col] !== null;

    var dragPlacedRow = -1, dragPlacedCol = -1, dragFromTray = false;
    if (!targetHasTile) {
      if (ds.source === 'tray') {
        saveUndo();
        gridState[row][col] = { letter: ds.letter, value: ds.value, isAnchor: false };
        trayState.splice(ds.index, 1);
        stateChanged = true;
        dragPlacedRow = row; dragPlacedCol = col; dragFromTray = true;
      } else {
        var sr = ds.index.row, sc = ds.index.col;
        gridState[row][col] = gridState[sr][sc];
        gridState[sr][sc] = null;
        stateChanged = true;
      }
    } else {
      if (ds.source === 'grid') {
        var sr = ds.index.row, sc = ds.index.col;
        var tmp = gridState[sr][sc];
        gridState[sr][sc] = gridState[row][col];
        gridState[row][col] = tmp;
        stateChanged = true;
      }
    }
  }

  var prev4 = new Set(foundWords);
  if (stateChanged) {
    detectWords();
  }
  render();
  if (stateChanged) {
    if (typeof dragFromTray !== 'undefined' && dragFromTray) {
      playPlacementThud();
      animateTilePlacement(dragPlacedRow, dragPlacedCol);
    }
    var nk4 = []; foundWords.forEach(function(k) { if (!prev4.has(k)) nk4.push(k); });
    injectWordFeedback(nk4);
    checkCompletion();
  }
});

// ── Completion Check ──────────────────────────────────────────────────────────
function checkCompletion() {
  if (trayState.length === 0) {
    savePuzzleResult();
    showResults();
  }
}

// ── Keyboard Navigation ───────────────────────────────────────────────────────
// All handlers use event delegation to survive innerHTML rebuilds in render().
// Strategy:
//   - Arrow keys: delegated on #grid (single keydown listener)
//   - Tab cycling in tray: delegated on #tray (single keydown listener)
//   - Space (tray select / grid place-or-select): delegated on document, checks target
//   - Delete (return tile to tray): delegated on document, checks target
//   - Escape (deselect): delegated on document
// No user-agent / input-type sniffing anywhere.

// Arrow key navigation within the grid
document.addEventListener('keydown', function(e) {
  var key = e.key;
  if (key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'ArrowLeft' && key !== 'ArrowRight') return;

  var cell = e.target.closest('#grid .cell');
  if (!cell) return;

  e.preventDefault();

  var row = parseInt(cell.dataset.row);
  var col = parseInt(cell.dataset.col);
  var newRow = row;
  var newCol = col;

  if (key === 'ArrowRight') newCol = Math.min(3, col + 1);
  else if (key === 'ArrowLeft') newCol = Math.max(0, col - 1);
  else if (key === 'ArrowDown') newRow = Math.min(3, row + 1);
  else if (key === 'ArrowUp') newRow = Math.max(0, row - 1);

  if (newRow === row && newCol === col) return;

  var targetCell = document.querySelector('#grid [data-row="' + newRow + '"][data-col="' + newCol + '"]');
  if (targetCell) targetCell.focus();
});

// Tab cycling within the tray (wraps last->first and first->last with Shift+Tab)
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Tab') return;

  var tile = e.target.closest('#tray .tile');
  if (!tile) return;

  e.preventDefault();

  var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
  if (trayTiles.length === 0) return;

  var currentIdx = trayTiles.indexOf(tile);
  var nextIdx;
  if (e.shiftKey) {
    nextIdx = currentIdx <= 0 ? trayTiles.length - 1 : currentIdx - 1;
  } else {
    nextIdx = currentIdx >= trayTiles.length - 1 ? 0 : currentIdx + 1;
  }

  lastTrayFocusIndex = nextIdx;
  trayTiles[nextIdx].focus();
});

// Space: select a tray tile, place a selected tile into an empty cell, or select a grid tile
document.addEventListener('keydown', function(e) {
  if (e.key !== ' ') return;

  var trayTile = e.target.closest('#tray .tile');
  if (trayTile) {
    e.preventDefault();
    var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
    var domIdx = trayTiles.indexOf(trayTile);
    if (domIdx === -1) return;
    lastTrayFocusIndex = domIdx;
    var idx = parseInt(trayTile.dataset.trayIndex);
    if (isNaN(idx)) return;

    // Toggle selection (same as click on tray tile)
    if (selectedTile && selectedTile.source === 'tray' && selectedTile.index === idx) {
      selectedTile = null;
    } else {
      selectedTile = { source: 'tray', index: idx, letter: trayTile.dataset.letter, value: parseInt(trayTile.dataset.value) };
    }
    render();
    // Re-focus the tile at the same DOM position after render
    var newTrayTiles = Array.from(document.querySelectorAll('#tray .tile'));
    if (newTrayTiles[lastTrayFocusIndex]) newTrayTiles[lastTrayFocusIndex].focus();
    return;
  }

  var cell = e.target.closest('#grid .cell');
  if (!cell) return;
  e.preventDefault();

  var row = parseInt(cell.dataset.row);
  var col = parseInt(cell.dataset.col);

  // Anchor guard
  if (gridState[row][col] && gridState[row][col].isAnchor) return;

  var hasTile = gridState[row][col] !== null;

  if (hasTile) {
    // Space on occupied non-anchor cell
    if (selectedTile && selectedTile.source === 'tray') return; // tray tile selected + occupied cell → ignore (mirrors click)

    if (selectedTile && selectedTile.source === 'grid') {
      var sr = selectedTile.index.row, sc = selectedTile.index.col;
      if (sr === row && sc === col) {
        // Deselect same cell
        selectedTile = null;
        render();
        var sameCell = document.querySelector('#grid [data-row="' + row + '"][data-col="' + col + '"]');
        if (sameCell) sameCell.focus();
        return;
      }
      // Swap two grid tiles
      var tmp = gridState[sr][sc];
      gridState[sr][sc] = gridState[row][col];
      gridState[row][col] = tmp;
      selectedTile = null;
      var prevSwap = new Set(foundWords);
      detectWords();
      render();
      var nkSwap = []; foundWords.forEach(function(k) { if (!prevSwap.has(k)) nkSwap.push(k); });
      injectWordFeedback(nkSwap);
      // Focus destination cell
      var destCell = document.querySelector('#grid [data-row="' + row + '"][data-col="' + col + '"]');
      if (destCell) destCell.focus();
      return;
    }

    // No selection: select this grid tile
    selectedTile = { source: 'grid', index: { row: row, col: col }, letter: gridState[row][col].letter, value: gridState[row][col].value };
    render();
    var selectCell = document.querySelector('#grid [data-row="' + row + '"][data-col="' + col + '"]');
    if (selectCell) selectCell.focus();
    return;
  }

  // Empty cell
  if (selectedTile) {
    if (selectedTile.source === 'tray') {
      // Place tray tile into this cell
      saveUndo();
      gridState[row][col] = { letter: selectedTile.letter, value: selectedTile.value, isAnchor: false };
      trayState.splice(selectedTile.index, 1);
      selectedTile = null;
      var prevPlace = new Set(foundWords);
      detectWords();
      render();
      playPlacementThud();
      animateTilePlacement(row, col);
      var nkPlace = []; foundWords.forEach(function(k) { if (!prevPlace.has(k)) nkPlace.push(k); });
      injectWordFeedback(nkPlace);
      checkCompletion();
      // Focus the destination cell after placement
      var placedCell = document.querySelector('#grid [data-row="' + row + '"][data-col="' + col + '"]');
      if (placedCell) placedCell.focus();
    } else if (selectedTile.source === 'grid') {
      // Move grid tile to empty cell
      var msr = selectedTile.index.row, msc = selectedTile.index.col;
      gridState[row][col] = gridState[msr][msc];
      gridState[msr][msc] = null;
      selectedTile = null;
      var prevMove = new Set(foundWords);
      detectWords();
      render();
      var nkMove = []; foundWords.forEach(function(k) { if (!prevMove.has(k)) nkMove.push(k); });
      injectWordFeedback(nkMove);
      // Focus destination cell
      var movedCell = document.querySelector('#grid [data-row="' + row + '"][data-col="' + col + '"]');
      if (movedCell) movedCell.focus();
    }
  }
});

// Escape: deselect and return focus to last tray tile
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return;
  if (!selectedTile) return;
  if (!document.getElementById('screen-game').classList.contains('active')) return;

  e.preventDefault();
  selectedTile = null;
  render();

  var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
  if (trayTiles.length === 0) return;
  var focusIdx = Math.min(lastTrayFocusIndex, trayTiles.length - 1);
  trayTiles[focusIdx].focus();
});

// Delete: return a focused non-anchor grid tile back to the tray
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Delete' && e.key !== 'Backspace') return;

  var cell = e.target.closest('#grid .cell');
  if (!cell) return;

  var row = parseInt(cell.dataset.row);
  var col = parseInt(cell.dataset.col);

  if (!gridState[row][col]) return; // empty cell — nothing to delete
  if (gridState[row][col].isAnchor) return; // anchor guard

  e.preventDefault();

  // Clear selection if it pointed to this cell
  if (selectedTile && selectedTile.source === 'grid' &&
      selectedTile.index.row === row && selectedTile.index.col === col) {
    selectedTile = null;
  }

  trayState.push({ letter: gridState[row][col].letter, value: gridState[row][col].value });
  gridState[row][col] = null;
  detectWords();
  render();

  // Focus the first tray tile
  lastTrayFocusIndex = 0;
  var firstTile = document.querySelector('#tray .tile');
  if (firstTile) firstTile.focus();
});

// Track last focused tray tile index (update on focus events within #tray)
document.addEventListener('focusin', function(e) {
  var tile = e.target.closest('#tray .tile');
  if (!tile) return;
  var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
  var idx = trayTiles.indexOf(tile);
  if (idx !== -1) lastTrayFocusIndex = idx;
});

// ── High-Contrast Mode ────────────────────────────────────────────────────────
// Apply saved preference before any screen renders to prevent palette flash.
// Toggle handler is wired once here — #btn-hc is static in index.html and
// survives all render() / showScreen() calls without re-binding.

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Apply saved HC preference BEFORE first render so every screen paints correctly.
  if (localStorage.getItem('lexigrid_highContrast') === '1') {
    document.body.classList.add('high-contrast');
  }

  // Wire buttons that must work regardless of entry path (?design=1 or normal).
  var hcBtn = document.getElementById('btn-hc');
  if (hcBtn) {
    hcBtn.setAttribute('aria-pressed', document.body.classList.contains('high-contrast') ? 'true' : 'false');
    hcBtn.onclick = function() {
      document.body.classList.toggle('high-contrast');
      var on = document.body.classList.contains('high-contrast');
      hcBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      localStorage.setItem('lexigrid_highContrast', on ? '1' : '0');
    };
  }

  var designerBack = document.getElementById('btn-designer-back');
  if (designerBack) {
    designerBack.onclick = function(e) {
      e.preventDefault();
      showScreen('screen-home');
      renderHomeScreen();
    };
  }

  // Design mode: ?design=1 routes directly to the designer panel.
  // This check runs BEFORE showScreen('screen-home') to prevent a home-screen flash.
  if (new URLSearchParams(location.search).get('design') === '1') {
    renderDesignerGrid();
    showScreen('screen-designer');
    var titleInput = document.getElementById('designer-title');
    if (titleInput) titleInput.focus();
    return;
  }

  showScreen('screen-home');
  renderHomeScreen();

  // Long-press on the home title (2000ms) opens the designer panel.
  var homeTitle = document.querySelector('#screen-home h1');
  if (homeTitle) {
    var longPressTimer = null;
    homeTitle.addEventListener('pointerdown', function() {
      longPressTimer = setTimeout(function() {
        renderDesignerGrid();
        showScreen('screen-designer');
        var titleInput = document.getElementById('designer-title');
        if (titleInput) titleInput.focus();
      }, 2000);
    });
    homeTitle.addEventListener('pointerup', function() { clearTimeout(longPressTimer); });
    homeTitle.addEventListener('pointermove', function() { clearTimeout(longPressTimer); });
    homeTitle.addEventListener('pointerleave', function() { clearTimeout(longPressTimer); });
    homeTitle.addEventListener('pointercancel', function() { clearTimeout(longPressTimer); });
  }
});

// ── Designer Mode (Phase 37) ──────────────────────────────────────────────────
// Module-level designer authoring state. null until first call to initDesignerGrid().
var designerGrid = null;

function initDesignerGrid() {
  designerGrid = [];
  for (var r = 0; r < 4; r++) {
    designerGrid[r] = [];
    for (var c = 0; c < 4; c++) {
      designerGrid[r][c] = { type: 'empty', letter: '' };
    }
  }
}

function renderDesignerGrid() {
  if (!designerGrid) initDesignerGrid();

  var container = document.getElementById('designer-grid');
  if (!container) return;

  var html = '';
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      var cell = designerGrid[r][c];
      var cls = 'designer-cell';
      var inner = '';
      var ariaLabel = 'Row ' + (r + 1) + ' Column ' + (c + 1);

      if (cell.type === 'anchor') {
        cls += ' designer-cell--anchor';
        inner = cell.letter;
        ariaLabel += ', anchor ' + cell.letter;
      } else if (cell.type === 'bonus-letter') {
        cls += ' designer-cell--bonus-letter';
        inner = '<span class="bonus-label">2&times;L</span>';
        ariaLabel += ', double letter';
      } else if (cell.type === 'bonus-word') {
        cls += ' designer-cell--bonus-word';
        inner = '<span class="bonus-label">2&times;W</span>';
        ariaLabel += ', double word';
      } else {
        ariaLabel += ', empty';
      }

      html += '<button class="' + cls + '" type="button" data-row="' + r + '" data-col="' + c + '"' +
        ' aria-label="' + ariaLabel + '">' + inner + '</button>';
    }
  }
  container.innerHTML = html;
}

function cycleDesignerCell(row, col) {
  if (!designerGrid) initDesignerGrid();
  var cell = designerGrid[row][col];

  if (cell.type === 'empty') {
    // Prompt for anchor letter; if cancelled or invalid, stay empty.
    var input = prompt('Enter anchor letter:');
    if (input === null || input === '') return;
    // Extract the first alphabetic character and uppercase it.
    var match = input.match(/[A-Za-z]/);
    if (!match) return;
    cell.letter = match[0].toUpperCase();
    cell.type = 'anchor';
  } else if (cell.type === 'anchor') {
    cell.type = 'bonus-letter';
    cell.letter = '';
  } else if (cell.type === 'bonus-letter') {
    cell.type = 'bonus-word';
  } else if (cell.type === 'bonus-word') {
    cell.type = 'empty';
    cell.letter = '';
  }

  renderDesignerGrid();
}

// Delegated click listener on #designer-grid (attached once at module scope;
// survives innerHTML rebuilds because it is on the static container).
document.addEventListener('click', function(e) {
  var cell = e.target.closest('#designer-grid .designer-cell');
  if (!cell) return;
  var row = parseInt(cell.dataset.row, 10);
  var col = parseInt(cell.dataset.col, 10);
  cycleDesignerCell(row, col);
});

// Delegated keydown listener for keyboard operability (Enter / Space).
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  var cell = e.target.closest('#designer-grid .designer-cell');
  if (!cell) return;
  e.preventDefault();
  var row = parseInt(cell.dataset.row, 10);
  var col = parseInt(cell.dataset.col, 10);
  cycleDesignerCell(row, col);
});

// ── Designer: buildDesignerPuzzle ─────────────────────────────────────────────
// Assembles a schema-correct puzzle object from the current designerGrid state
// and all form inputs. Matches the real puzzles.js schema exactly:
//   id (string), date (YYYY-MM-DD), title (string), difficulty (NUMBER 1|2|3),
//   gridSize (NUMBER 4), letters ([uppercase chars]), anchors ([{row,col,letter}]),
//   bonusCells ([{row,col,type:'2xL'|'2xW'}]), words ([uppercase strings]),
//   maxScore (number — 0 until solver fills it), dedication (string|null)
function buildDesignerPuzzle() {
  if (!designerGrid) initDesignerGrid();

  var today = new Date().toISOString().slice(0, 10);

  // Form inputs
  var titleEl   = document.getElementById('designer-title');
  var diffEl    = document.getElementById('designer-difficulty');
  var trayEl    = document.getElementById('designer-tray');
  var wordsEl   = document.getElementById('designer-words');
  var dedicEl   = document.getElementById('designer-dedication');

  var title      = titleEl   ? titleEl.value.trim()   : '';
  var difficulty = diffEl    ? parseInt(diffEl.value, 10) : 1;
  var trayRaw    = trayEl    ? trayEl.value            : '';
  var wordsRaw   = wordsEl   ? wordsEl.value           : '';
  var dedicRaw   = dedicEl   ? dedicEl.value.trim()    : '';

  // Parse tray: comma-separated, trim, uppercase; keep only single alpha chars
  var letters = trayRaw.split(',').map(function(s) {
    return s.trim().toUpperCase();
  }).filter(function(s) { return s.length === 1 && /[A-Z]/.test(s); });

  // Parse words: one per line, trim, drop empty, uppercase
  var words = wordsRaw.split('\n').map(function(s) {
    return s.trim().toUpperCase();
  }).filter(function(s) { return s.length > 0; });

  // Auto-generate id: slug from title + YYYY-MM-DD suffix
  var slug = title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  var id = (slug || 'puzzle') + '-' + today;

  // Build anchors and bonusCells from designerGrid
  var anchors = [];
  var bonusCells = [];
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      var cell = designerGrid[r][c];
      if (cell.type === 'anchor') {
        anchors.push({ row: r, col: c, letter: cell.letter });
      } else if (cell.type === 'bonus-letter') {
        bonusCells.push({ row: r, col: c, type: '2xL' });
      } else if (cell.type === 'bonus-word') {
        bonusCells.push({ row: r, col: c, type: '2xW' });
      }
    }
  }

  return {
    id:         id,
    date:       today,
    title:      title,
    difficulty: difficulty,
    gridSize:   4,
    letters:    letters,
    anchors:    anchors,
    bonusCells: bonusCells,
    words:      words,
    maxScore:   0,
    dedication: dedicRaw || null
  };
}

// ── Designer: computeDesignerMaxScore ─────────────────────────────────────────
// Brute-force solver: tries permutations of tray letters into empty grid cells,
// drives the real detectWords()/computeScore() engine by temporarily swapping
// module globals, then restores them in a guaranteed path.
//
// Cap: if tray length > 8, returns { capExceeded: true } immediately.
//
// Bounding strategy: we enumerate all C(emptyCount, trayLength) * trayLength!
// arrangements when tray <= 8 (worst case: 8! * C(16,8) = 40320 * 12870 is too
// large, so we cap at trayLength <= 8 tiles total and emptyCount is at most 16;
// in practice anchor tiles reduce empty cells significantly). For tray <= 8 with
// up to 16 empty cells the product stays within ~100k calls — acceptable sync.
//
// Returns:
//   { capExceeded: false, maxScore: number, reachable: Set<string>, puzzleWords: string[] }
//   { capExceeded: true }
function computeDesignerMaxScore() {
  // 1. Build the candidate puzzle (maxScore = 0; solver fills it).
  var candidate = buildDesignerPuzzle();

  // 2. Collect tray letters and empty cell positions.
  var trayLetters = candidate.letters.slice(); // copy

  // Hard cap at 8 tray tiles.
  if (trayLetters.length > 8) {
    return { capExceeded: true };
  }

  // Find all non-anchor cell positions (empty placeable cells).
  var anchorSet = {};
  for (var ai = 0; ai < candidate.anchors.length; ai++) {
    var a = candidate.anchors[ai];
    anchorSet[a.row + ',' + a.col] = true;
  }
  var emptyCells = [];
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      if (!anchorSet[r + ',' + c]) {
        emptyCells.push({ row: r, col: c });
      }
    }
  }

  // 3. If no tray letters, just evaluate with anchors-only placement.
  var bestScore = 0;
  var reachable = new Set();

  // 4. SAVE current live globals into locals (guaranteed restore path below).
  var savedGrid    = gridState;
  var savedPuzzle  = currentPuzzle;
  var savedTray    = trayState;
  var savedFound   = foundWords;

  try {
    // 5. Install the designer puzzle as currentPuzzle so detectWords reads
    //    its .words and getBonusCell reads its .bonusCells.
    currentPuzzle = candidate;

    // Helper: build a fresh 4×4 gridState, place anchors, then place the given
    // tray letters at the given cell positions. Returns the grid (does NOT assign
    // to the global yet — caller does that before calling detectWords).
    function buildGrid(anchorList, tileAssignments) {
      // tileAssignments: array of { row, col, letter }
      var g = [];
      for (var rr = 0; rr < 4; rr++) {
        g[rr] = [null, null, null, null];
      }
      for (var ii = 0; ii < anchorList.length; ii++) {
        var anch = anchorList[ii];
        g[anch.row][anch.col] = {
          letter: anch.letter,
          value: letterValue(anch.letter),
          isAnchor: true
        };
      }
      for (var jj = 0; jj < tileAssignments.length; jj++) {
        var t = tileAssignments[jj];
        g[t.row][t.col] = {
          letter: t.letter,
          value: letterValue(t.letter),
          isAnchor: false
        };
      }
      return g;
    }

    // Helper: collect bare word strings from the current foundWords Set.
    function collectFound() {
      foundWords.forEach(function(key) {
        var colon = key.indexOf(':');
        reachable.add(key.substring(0, colon));
      });
    }

    // 6. Enumerate all arrangements:
    //    - Choose which emptyCells receive tray tiles (C(emptyCount, trayLen) selections)
    //    - For each selection, enumerate all permutations of trayLetters into those cells
    //    - Evaluate each arrangement with detectWords() + computeScore()
    //
    // If no tray letters, evaluate anchors-only configuration once.
    if (trayLetters.length === 0) {
      gridState = buildGrid(candidate.anchors, []);
      detectWords();           // writes foundWords
      var s = computeScore(); // reads foundWords
      if (s > bestScore) bestScore = s;
      collectFound();
    } else {
      var trayLen = trayLetters.length;
      var emptyLen = emptyCells.length;

      // Generate all combinations of `trayLen` indices from `emptyCells`.
      // We iterate via a combination index array.
      function evaluateCellSelection(selectedCells, permLetters) {
        // permLetters is an array of trayLen letters (already permuted).
        var assignments = [];
        for (var k = 0; k < trayLen; k++) {
          assignments.push({
            row: selectedCells[k].row,
            col: selectedCells[k].col,
            letter: permLetters[k]
          });
        }
        gridState = buildGrid(candidate.anchors, assignments);
        detectWords();            // writes foundWords (global)
        var sc = computeScore(); // reads foundWords
        if (sc > bestScore) bestScore = sc;
        collectFound();
      }

      // Permutation generator: calls cb for every permutation of arr.
      function permuteAndEval(arr, selectedCells, start) {
        if (start === arr.length) {
          evaluateCellSelection(selectedCells, arr);
          return;
        }
        for (var p = start; p < arr.length; p++) {
          // swap
          var tmp = arr[start]; arr[start] = arr[p]; arr[p] = tmp;
          permuteAndEval(arr, selectedCells, start + 1);
          // swap back
          tmp = arr[start]; arr[start] = arr[p]; arr[p] = tmp;
        }
      }

      // Combination generator: builds each selection of `trayLen` cells from
      // `emptyCells`, then calls permuteAndEval for each permutation.
      function combineCells(start, chosen) {
        if (chosen.length === trayLen) {
          // Make a copy of trayLetters for each permutation sub-tree.
          permuteAndEval(trayLetters.slice(), chosen, 0);
          return;
        }
        var remaining = trayLen - chosen.length;
        var available = emptyLen - start;
        if (available < remaining) return; // prune: not enough cells left
        for (var idx = start; idx < emptyLen; idx++) {
          chosen.push(emptyCells[idx]);
          combineCells(idx + 1, chosen);
          chosen.pop();
        }
      }

      combineCells(0, []);
    }
  } finally {
    // 7. RESTORE all live game globals — guaranteed even if an exception occurs.
    gridState     = savedGrid;
    currentPuzzle = savedPuzzle;
    trayState     = savedTray;
    foundWords    = savedFound;
  }

  // 8. Return results.
  return {
    capExceeded: false,
    maxScore: bestScore,
    reachable: reachable,
    puzzleWords: candidate.words
  };
}

// ── Designer: Button wiring (compute, copy, play-test) ───────────────────────
// Attached once at module scope — all three buttons are static in index.html.

// Enable/disable #btn-compute based on whether tray and word list are both non-empty.
// Re-evaluated on input events.
function updateComputeButtonState() {
  var trayEl  = document.getElementById('designer-tray');
  var wordsEl = document.getElementById('designer-words');
  var btn     = document.getElementById('btn-compute');
  if (!btn) return;
  var trayEmpty  = !trayEl  || trayEl.value.trim() === '';
  var wordsEmpty = !wordsEl || wordsEl.value.trim() === '';
  btn.disabled = trayEmpty || wordsEmpty;
}

document.addEventListener('input', function(e) {
  if (e.target && (e.target.id === 'designer-tray' || e.target.id === 'designer-words')) {
    updateComputeButtonState();
  }
});

// #btn-compute click handler
document.addEventListener('click', function(e) {
  if (!e.target || e.target.id !== 'btn-compute') return;

  var btn      = document.getElementById('btn-compute');
  var feedback = document.getElementById('designer-feedback');
  var output   = document.getElementById('designer-output');

  btn.textContent = 'Computing…';
  btn.disabled    = true;

  var result = computeDesignerMaxScore();

  if (result.capExceeded) {
    // Show the brute-force cap warning; leave the output pre unchanged.
    feedback.style.color = 'var(--difficulty-hard)';
    feedback.textContent = 'Too many tiles to brute-force — place some anchor tiles to reduce the tray size.';
  } else {
    // Build feedback: reachability report.
    var reachCount = 0;
    var unreachable = [];
    for (var wi = 0; wi < result.puzzleWords.length; wi++) {
      var w = result.puzzleWords[wi];
      if (result.reachable.has(w)) {
        reachCount++;
      } else {
        unreachable.push(w);
      }
    }

    // Success line (neutral color) — built with DOM nodes to avoid XSS from word-list input.
    feedback.style.color = '';
    feedback.textContent = '';
    var okSpan = document.createElement('span');
    okSpan.style.color = 'var(--score-fg)';
    okSpan.textContent = reachCount + ' word' + (reachCount !== 1 ? 's' : '') + ' reachable. Max score: ' + result.maxScore + '.';
    feedback.appendChild(okSpan);

    if (unreachable.length > 0) {
      feedback.appendChild(document.createElement('br'));
      var badSpan = document.createElement('span');
      badSpan.style.color = 'var(--difficulty-hard)';
      badSpan.textContent = 'Not reachable: ' + unreachable.join(', ');
      feedback.appendChild(badSpan);
    }

    // Build the final puzzle with maxScore filled in and render to #designer-output.
    var puzzle = buildDesignerPuzzle();
    puzzle.maxScore = result.maxScore;
    if (output) output.textContent = JSON.stringify(puzzle, null, 2);
  }

  btn.textContent = 'Compute Max Score';
  updateComputeButtonState();
});

// #btn-copy-json click handler — mirrors the results postcard clipboard pattern.
document.addEventListener('click', function(e) {
  if (!e.target || e.target.id !== 'btn-copy-json') return;

  var btn    = document.getElementById('btn-copy-json');
  var output = document.getElementById('designer-output');
  var text   = output ? output.textContent : '';

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      btn.textContent = 'Copied!';
      setTimeout(function() { btn.textContent = 'Copy JSON'; }, 1500);
    }).catch(function() {
      btn.textContent = 'Copy failed — select and copy the text manually.';
      setTimeout(function() { btn.textContent = 'Copy JSON'; }, 3000);
    });
  } else {
    // Fallback: temporary textarea + execCommand
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity  = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) {
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = 'Copy JSON'; }, 1500);
      } else {
        throw new Error('execCommand returned false');
      }
    } catch (err) {
      btn.textContent = 'Copy failed — select and copy the text manually.';
      setTimeout(function() { btn.textContent = 'Copy JSON'; }, 3000);
    }
  }
});

// #btn-play-test click handler — builds the puzzle (id suffixed -test), then
// calls loadPuzzle() which resets all game globals and calls showScreen('screen-game').
document.addEventListener('click', function(e) {
  if (!e.target || e.target.id !== 'btn-play-test') return;

  var puzzle = buildDesignerPuzzle();
  if (!puzzle.letters || puzzle.letters.length === 0) {
    var fb = document.getElementById('designer-feedback');
    if (fb) { fb.style.color = 'var(--difficulty-hard)'; fb.textContent = 'Add tray letters before play-testing.'; }
    return;
  }
  // Override id with title-slug + '-test' per UI-SPEC Play Test.
  var slug = (puzzle.title || 'puzzle').toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  puzzle.id = (slug || 'puzzle') + '-test';

  loadPuzzle(puzzle);
  // loadPuzzle() already calls showScreen('screen-game'); do not call it again.
});

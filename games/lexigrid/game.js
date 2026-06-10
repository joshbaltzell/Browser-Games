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

  // Wire the HC toggle button (once — button lives in static HTML, not rebuilt by render).
  var hcBtn = document.getElementById('btn-hc');
  if (hcBtn) {
    // Initialise aria-pressed to match the restored preference.
    hcBtn.setAttribute('aria-pressed', document.body.classList.contains('high-contrast') ? 'true' : 'false');

    hcBtn.onclick = function() {
      document.body.classList.toggle('high-contrast');
      var on = document.body.classList.contains('high-contrast');
      hcBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      localStorage.setItem('lexigrid_highContrast', on ? '1' : '0');
    };
  }

  // Long-press on the home title (2000ms) opens the designer panel.
  // pointerup / pointermove / pointerleave cancels the timer.
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
    homeTitle.addEventListener('pointerup', function() {
      clearTimeout(longPressTimer);
    });
    homeTitle.addEventListener('pointermove', function() {
      clearTimeout(longPressTimer);
    });
    homeTitle.addEventListener('pointerleave', function() {
      clearTimeout(longPressTimer);
    });
  }

  // Back to Home from designer.
  var designerBack = document.getElementById('btn-designer-back');
  if (designerBack) {
    designerBack.onclick = function(e) {
      e.preventDefault();
      showScreen('screen-home');
      renderHomeScreen();
    };
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

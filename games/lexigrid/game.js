// ── State ────────────────────────────────────────────────────────────────────
var gridState = [];
var trayState = [];
var selectedTile = null;
var foundWords = new Set();
var currentPuzzle = null;

// ── Letter Values ─────────────────────────────────────────────────────────────
var LETTER_VALUES = {
  A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3,
  N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
};

function letterValue(ch) {
  return LETTER_VALUES[ch.toUpperCase()] || 1;
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

  detectWords();
  render();
  showScreen('screen-game');
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
      if (cell) {
        var isFound = foundCellKeys.has(r + ',' + c);
        var tileClass = 'tile';
        if (isFound) tileClass += ' tile--found';
        if (cell.isAnchor) tileClass += ' tile--anchor';
        tileHtml = '<div class="' + tileClass + '" data-letter="' + cell.letter + '" data-value="' + cell.value + '"' +
          (cell.isAnchor ? ' data-anchor="true"' : '') + '>' +
          '<span class="tile-letter">' + cell.letter + '</span>' +
          '<span class="tile-point">' + cell.value + '</span>' +
          '</div>';
      }

      gridHtml += '<div class="' + cellClass + '" data-row="' + r + '" data-col="' + c + '">' +
        tileHtml + bonusLabel + '</div>';
    }
  }
  grid.innerHTML = gridHtml;

  var trayHtml = '';
  trayState.forEach(function(t) {
    trayHtml += '<div class="tile" data-letter="' + t.letter + '" data-value="' + t.value + '">' +
      '<span class="tile-letter">' + t.letter + '</span>' +
      '<span class="tile-point">' + t.value + '</span>' +
      '</div>';
  });
  tray.innerHTML = trayHtml;

  if (selectedTile) {
    var sel = null;
    if (selectedTile.source === 'tray') {
      var trayTiles = tray.querySelectorAll('.tile');
      sel = trayTiles[selectedTile.index] || null;
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
  wordsList.innerHTML = badgesHtml;
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
    var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
    var idx = trayTiles.indexOf(tile);
    if (idx === -1) return;

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
        detectWords();
        render();
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
        gridState[row][col] = { letter: selectedTile.letter, value: selectedTile.value, isAnchor: false };
        trayState.splice(selectedTile.index, 1);
        selectedTile = null;
        detectWords();
        render();
        checkCompletion();
      } else if (selectedTile.source === 'grid') {
        var sr = selectedTile.index.row, sc = selectedTile.index.col;
        gridState[row][col] = gridState[sr][sc];
        gridState[sr][sc] = null;
        selectedTile = null;
        detectWords();
        render();
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
    var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
    idx = trayTiles.indexOf(tile);
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

    if (!targetHasTile) {
      if (ds.source === 'tray') {
        gridState[row][col] = { letter: ds.letter, value: ds.value, isAnchor: false };
        trayState.splice(ds.index, 1);
        stateChanged = true;
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

  if (stateChanged) {
    detectWords();
  }
  render();
  if (stateChanged) checkCompletion();
});

// ── Completion Check ──────────────────────────────────────────────────────────
function checkCompletion() {
  if (trayState.length === 0) {
    savePuzzleResult();
    showResults();
  }
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  showScreen('screen-home');
  renderHomeScreen();
});

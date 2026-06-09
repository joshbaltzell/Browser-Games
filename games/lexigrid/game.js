// ── State ────────────────────────────────────────────────────────────────────
var gridState = [];       // [4][4] — null | {letter, value, isAnchor}
var trayState = [];       // [{letter, value}]
var selectedTile = null;  // {source:'tray'|'grid', index, letter, value} | null
var foundWords = new Set(); // dedup keys — reset each detectWords() call
var currentPuzzle = null;

// ── Letter Values ─────────────────────────────────────────────────────────────
var LETTER_VALUES = {
  A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3,
  N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
};

function letterValue(ch) {
  return LETTER_VALUES[ch.toUpperCase()] || 1;
}

// ── Init ──────────────────────────────────────────────────────────────────────
function initGame() {
  currentPuzzle = PUZZLES[0];
  gridState = [];
  for (var r = 0; r < 4; r++) {
    gridState[r] = [null, null, null, null];
  }
  trayState = currentPuzzle.letters.map(function(ch) {
    return { letter: ch, value: letterValue(ch) };
  });
}

// ── Render ────────────────────────────────────────────────────────────────────
function render() {
  var grid = document.getElementById('grid');
  var tray = document.getElementById('tray');

  // Build set of cell keys belonging to found words for .tile--found
  var foundCellKeys = new Set();
  foundWords.forEach(function(key) {
    var colon = key.indexOf(':');
    key.substring(colon + 1).split('|').forEach(function(s) {
      foundCellKeys.add(s);
    });
  });

  // Build grid HTML
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
        var tileClass = 'tile' + (isFound ? ' tile--found' : '');
        tileHtml = '<div class="' + tileClass + '" data-letter="' + cell.letter + '" data-value="' + cell.value + '">' +
          '<span class="tile-letter">' + cell.letter + '</span>' +
          '<span class="tile-point">' + cell.value + '</span>' +
          '</div>';
      }

      gridHtml += '<div class="' + cellClass + '" data-row="' + r + '" data-col="' + c + '">' +
        tileHtml + bonusLabel + '</div>';
    }
  }
  grid.innerHTML = gridHtml;

  // Build tray HTML
  var trayHtml = '';
  trayState.forEach(function(t) {
    trayHtml += '<div class="tile" data-letter="' + t.letter + '" data-value="' + t.value + '">' +
      '<span class="tile-letter">' + t.letter + '</span>' +
      '<span class="tile-point">' + t.value + '</span>' +
      '</div>';
  });
  tray.innerHTML = trayHtml;

  // Apply .tile--selected after innerHTML rebuild
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

  // Update score bar
  document.getElementById('score-value').textContent = computeScore();
  document.getElementById('words-count').textContent = foundWords.size;

  // Update found-words list (unique word strings)
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
 * CORE-10 Dedup Rules — canonical reference for this engine
 *
 * Dedup key format: word + ':' + cells.map(c => c.row+','+c.col).join('|')
 * Example: "CAT:0,0|0,1|0,2"
 *
 * Rule A — Same word string, different cell paths → scores separately.
 *   e.g. "CAT" placed at row 0 and again at row 2 produces two distinct keys
 *   and contributes two separate scores.
 *
 * Rule B — Identical cell-path for the same word → deduplicated (Set ignores).
 *   e.g. Scanning "CAT" forward and "TAC" backward over the exact same three
 *   physical cells produces the same key for each word ("CAT:..." ≠ "TAC:...")
 *   so they ARE counted separately. A palindrome like "ABA" scanned forward and
 *   backward over the same cells shares the same key and is deduplicated to 1.
 *
 * Edge-case scenarios:
 *   1. Same word at two separate locations → 2 separate keys → scores twice.
 *   2. A palindrome read forward and backward over the same cells → same key → scores once.
 *   3. Two different words sharing a cell (crossing words) → different keys → both score.
 *   4. A 3-letter word that is a substring of a 5-letter word on the same path → each has its
 *      own key (different cell arrays) → both score independently.
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

// Delegated click handler for tap-to-select / place / swap / deselect
document.addEventListener('click', function(e) {
  if (isDragging) {
    isDragging = false;
    return;
  }

  var tile = e.target.closest('.tile');
  var cell = e.target.closest('.cell');

  if (!tile && !cell) return;

  // Tray tile: has no .cell ancestor
  var inTray = tile && !cell;
  var inGrid = cell && !!cell.closest('#grid');

  if (inTray) {
    var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
    var idx = trayTiles.indexOf(tile);
    if (idx === -1) return;

    if (selectedTile && selectedTile.source === 'tray' && selectedTile.index === idx) {
      selectedTile = null; // deselect (rule 5)
    } else {
      selectedTile = { source: 'tray', index: idx, letter: tile.dataset.letter, value: parseInt(tile.dataset.value) };
    }
    render();
    return;
  }

  if (inGrid) {
    var row = parseInt(cell.dataset.row);
    var col = parseInt(cell.dataset.col);
    var hasTile = gridState[row][col] !== null;

    if (hasTile) {
      // Rule 6: tray selection onto occupied cell → no-op
      if (selectedTile && selectedTile.source === 'tray') return;

      if (selectedTile && selectedTile.source === 'grid') {
        var sr = selectedTile.index.row, sc = selectedTile.index.col;
        if (sr === row && sc === col) {
          selectedTile = null; // deselect (rule 5)
          render();
          return;
        }
        // Swap (rule 4)
        var tmp = gridState[sr][sc];
        gridState[sr][sc] = gridState[row][col];
        gridState[row][col] = tmp;
        selectedTile = null;
        detectWords();
        render();
        return;
      }

      // Select this grid tile (rule 3)
      selectedTile = {
        source: 'grid',
        index: { row: row, col: col },
        letter: gridState[row][col].letter,
        value: gridState[row][col].value
      };
      render();
      return;
    }

    // Empty cell
    if (selectedTile) {
      if (selectedTile.source === 'tray') {
        // Place tray tile (rule 2)
        gridState[row][col] = { letter: selectedTile.letter, value: selectedTile.value, isAnchor: false };
        trayState.splice(selectedTile.index, 1);
        selectedTile = null;
        detectWords();
        render();
      } else if (selectedTile.source === 'grid') {
        // Move grid tile to empty cell
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

// Pointer Events drag-and-drop
document.addEventListener('pointerdown', function(e) {
  var tile = e.target.closest('.tile');
  if (!tile) return;

  var cell = tile.closest('.cell');
  var source, idx, letter, value;

  if (cell) {
    // Grid tile
    source = 'grid';
    idx = { row: parseInt(cell.dataset.row), col: parseInt(cell.dataset.col) };
  } else {
    // Tray tile
    source = 'tray';
    var trayTiles = Array.from(document.querySelectorAll('#tray .tile'));
    idx = trayTiles.indexOf(tile);
  }

  letter = tile.dataset.letter;
  value = parseInt(tile.dataset.value);

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

  // Clear old hover
  if (dragState.lastHoverCell && dragState.lastHoverCell !== targetCell) {
    dragState.lastHoverCell.classList.remove('cell--drag-over');
  }

  // Apply hover on empty cells only
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

  // Clear hover
  if (ds.lastHoverCell) {
    ds.lastHoverCell.classList.remove('cell--drag-over');
  }

  // Remove ghost
  ghost.remove();

  if (!isDragging) return; // no movement — let click handler fire

  var el = document.elementFromPoint(e.clientX, e.clientY);
  var targetCell = el ? el.closest('.cell') : null;
  var stateChanged = false;

  if (targetCell && targetCell.closest('#grid')) {
    var row = parseInt(targetCell.dataset.row);
    var col = parseInt(targetCell.dataset.col);
    var targetHasTile = gridState[row][col] !== null;

    if (!targetHasTile) {
      // Drop on empty cell
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
      // Drop on occupied cell
      if (ds.source === 'grid') {
        // Swap grid tiles
        var sr = ds.index.row, sc = ds.index.col;
        var tmp = gridState[sr][sc];
        gridState[sr][sc] = gridState[row][col];
        gridState[row][col] = tmp;
        stateChanged = true;
      }
      // tray → occupied: no-op
    }
  }
  // Outside grid: cancel, no state change

  if (stateChanged) {
    detectWords();
  }
  render();
});

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initGame();
  detectWords();
  render();
});

/**
 * Sudoku solver worker for Professional Sudoku.
 */
self.onmessage = function(e) {
    const { gridSize, ratio, subW, subH } = e.data;
    const solution = generateSolution(gridSize, subW, subH);
    const board = generatePuzzle(solution, ratio, gridSize);
    
    self.postMessage({ board, solution });
};

function generateSolution(gridSize, subW, subH) {
    const board = Array(gridSize * gridSize).fill(0);
    
    // 1. Create a base sequence 1..N and shuffle it
    let nums = Array.from({length: gridSize}, (_, i) => i + 1);
    shuffle(nums);
    
    // 2. Fill the board using the shift-and-shuffle pattern
    // This pattern ensures all rows, columns, and blocks are valid
    for (let r = 0; r < gridSize; r++) {
        const shift = (r % subH) * subW + Math.floor(r / subH);
        for (let c = 0; c < gridSize; c++) {
            board[r * gridSize + c] = nums[(c + shift) % gridSize];
        }
    }
    
    // 3. Shuffle rows within their bands
    for (let band = 0; band < gridSize; band += subH) {
        for (let i = 0; i < subH; i++) {
            const j = Math.floor(Math.random() * subH);
            const r1 = band + i;
            const r2 = band + j;
            // Swap row r1 and r2
            for (let c = 0; c < gridSize; c++) {
                const temp = board[r1 * gridSize + c];
                board[r1 * gridSize + c] = board[r2 * gridSize + c];
                board[r2 * gridSize + c] = temp;
            }
        }
    }

    // 4. Shuffle columns within their stacks
    for (let stack = 0; stack < gridSize; stack += subW) {
        for (let i = 0; i < subW; i++) {
            const j = Math.floor(Math.random() * subW);
            const c1 = stack + i;
            const c2 = stack + j;
            // Swap col c1 and c2
            for (let r = 0; r < gridSize; r++) {
                const temp = board[r * gridSize + c1];
                board[r * gridSize + c1] = board[r * gridSize + c2];
                board[r * gridSize + c2] = temp;
            }
        }
    }

    return board;
}

function getPossibleValues(board, idx, gridSize, subW, subH) {
    const choices = [];
    for (let n = 1; n <= gridSize; n++) {
        if (isValid(board, idx, n, gridSize, subW, subH)) choices.push(n);
    }
    return choices;
}

function isValid(board, idx, num, gridSize, subW, subH) {
    const r = Math.floor(idx / gridSize);
    const c = idx % gridSize;
    
    for (let i = 0; i < gridSize; i++) {
        const rowIdx = r * gridSize + i;
        const colIdx = i * gridSize + c;
        if (board[rowIdx] === num && rowIdx !== idx) return false;
        if (board[colIdx] === num && colIdx !== idx) return false;
    }

    const br = Math.floor(r / subH) * subH;
    const bc = Math.floor(c / subW) * subW;
    for (let row = 0; row < subH; row++) {
        for (let col = 0; col < subW; col++) {
            const bi = (br + row) * gridSize + (bc + col);
            if (board[bi] === num && bi !== idx) return false;
        }
    }
    return true;
}

function generatePuzzle(solution, ratio, gridSize) {
    const board = [...solution];
    const total = gridSize * gridSize;
    const toRemove = Math.floor(total * ratio);
    
    let removed = 0;
    const indices = Array.from({length: total}, (_, i) => i);
    shuffle(indices);

    for (const idx of indices) {
        if (removed >= toRemove) break;
        board[idx] = 0;
        removed++;
    }
    return board;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

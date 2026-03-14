class SudokuGame {
    constructor() {
        this.gridSize = 9;
        this.subGridWidth = 3;
        this.subGridHeight = 3;
        this.board = [];
        this.solution = [];
        this.notes = [];
        this.selectedIdx = null;
        this.errors = 0;
        this.seconds = 0;
        this.gameActive = false;
        this.isDraftMode = false;
        this.timerInterval = null;
        this.hintsUsed = 0;
        this.maxHints = 10;
        this.history = [];
        this.redoStack = [];

        this.modes = {
            "9": { size: 9, subW: 3, subH: 3, ratio: 0.70 },
            "12": { size: 12, subW: 4, subH: 3, ratio: 0.72 },
            "15": { size: 15, subW: 5, subH: 3, ratio: 0.75 }
        };

        this.elems = {
            board: document.getElementById('board'),
            timer: document.getElementById('timer'),
            diffDisplay: document.getElementById('difficulty-display'),
            diffSelector: document.getElementById('difficulty-selector'),
            startBtn: document.getElementById('start-btn'),
            undoBtn: document.getElementById('undo-btn'),
            redoBtn: document.getElementById('redo-btn'),
            hintBtn: document.getElementById('hint-btn'),
            pickerTrash: document.querySelector('.picker-trash'),
            modal: document.getElementById('modal-overlay'),
            modalTitle: document.getElementById('modal-title'),
            modalMsg: document.getElementById('modal-message'),
            modalTimer: document.getElementById('modal-timer'),
            keyboardTrigger: document.getElementById('hidden-input'),
            closeModal: document.getElementById('close-modal-btn'),
            tutorialBtn: document.getElementById('tutorial-btn'),
            tutorialOverlay: document.getElementById('tutorial-overlay'),
            closeTutorialBtn: document.getElementById('tutorial-close-btn'),
            hintCount: document.getElementById('hint-count'),
            loadingOverlay: document.getElementById('loading-overlay')
        };

        this.init();

        setTimeout(() => this.showTutorial(), 800);
    }

    init() {
        if (this.elems.startBtn) this.elems.startBtn.onclick = () => this.startNewGame();
        if (this.elems.undoBtn) this.elems.undoBtn.onclick = () => this.undo();
        if (this.elems.redoBtn) this.elems.redoBtn.onclick = () => this.redo();
        if (this.elems.hintBtn) this.elems.hintBtn.onclick = () => this.giveHint();
        if (this.elems.closeModal) this.elems.closeModal.onclick = () => {
            if(this.elems.modal) this.elems.modal.style.display = 'none';
            this.startNewGame();
        };

        if (this.elems.tutorialBtn) this.elems.tutorialBtn.onclick = () => this.showTutorial();
        if (this.elems.closeTutorialBtn) this.elems.closeTutorialBtn.onclick = () => this.closeTutorial();
        const closeX = document.getElementById('close-tut-x');
        if (closeX) closeX.onclick = () => this.closeTutorial();

        const wrapper = document.querySelector('.quantum-select-wrapper');
        const trigger = document.querySelector('.quantum-select-trigger');
        const options = document.querySelectorAll('.quantum-option');

        if (trigger && wrapper) {
            trigger.onclick = (e) => {
                e.stopPropagation();
                wrapper.classList.toggle('open');
            };
        }

        options.forEach(opt => {
            opt.onclick = () => {
                const val = opt.dataset.value;
                if (this.elems.diffSelector) this.elems.diffSelector.value = val;
                if (trigger) trigger.innerText = opt.innerText;
                if (wrapper) wrapper.classList.remove('open');
                options.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
            };
        });

        window.onclick = (e) => {
            if (wrapper && !wrapper.contains(e.target)) {
                wrapper.classList.remove('open');
            }
            if (e.target === this.elems.tutorialOverlay) {
                this.closeTutorial();
            }
        };

        window.onkeydown = (e) => this.handleKeyPress(e);

        if (this.elems.keyboardTrigger) {
            this.elems.keyboardTrigger.oninput = (e) => {
                const val = e.target.value.slice(-1);
                const num = parseInt(val, 10);
                if (!isNaN(num)) this.setCellValue(num);
                e.target.value = '';
            };
        }

        this.renderEmpty();
        this.initWorker();
    }

    initWorker() {
        if (window.Worker) {
            try {
                this.worker = new Worker('sudokuWorker.js');
                this.worker.onmessage = (e) => {
                    const { board, solution } = e.data;
                    this.board = board;
                    this.solution = solution;
                    this.finalizeGameStart();
                };
            } catch (e) { this.worker = null; }
        }
    }

    startNewGame() {
        const modeVal = this.elems.diffSelector.value;
        const mode = this.modes[modeVal];
        this.gridSize = mode.size;
        this.subGridWidth = mode.subW;
        this.subGridHeight = mode.subH;

        if (this.elems.loadingOverlay) this.elems.loadingOverlay.classList.remove('hidden');
        this.reset();

        if (this.worker) {
            this.worker.postMessage({
                gridSize: this.gridSize,
                ratio: mode.ratio,
                subW: this.subGridWidth,
                subH: this.subGridHeight
            });
        }
    }

    finalizeGameStart() {
        if (this.elems.loadingOverlay) this.elems.loadingOverlay.classList.add('hidden');
        this.elems.board.style.setProperty('--grid-size', this.gridSize);

        let cellSize = "clamp(30px, 6.2vh, 60px)";
        if (this.gridSize === 12) cellSize = "clamp(25px, 5vh, 45px)";
        if (this.gridSize === 15) cellSize = "clamp(20px, 4.2vh, 38px)";
        this.elems.board.style.setProperty('--cell-size', cellSize);

        this.render();
        this.startTimer();
        this.gameActive = true;
        this.elems.diffDisplay.innerText = this.elems.diffSelector.options[this.elems.diffSelector.selectedIndex].text.split(' ')[0].toUpperCase();
    }

    showTutorial() {
        if (this.elems.tutorialOverlay) this.elems.tutorialOverlay.classList.remove('hidden');
    }

    closeTutorial() {
        if (this.elems.tutorialOverlay) this.elems.tutorialOverlay.classList.add('hidden');
    }

    reset() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.errors = 0;
        this.seconds = 0;
        this.history = [];
        this.redoStack = [];
        this.selectedIdx = null;
        this.notes = Array(this.gridSize * this.gridSize).fill(null).map(() => new Set());
        this.hintsUsed = 0;
        this.updateStats();
    }

    renderEmpty() {
        this.elems.board.innerHTML = '';
        const total = this.gridSize * this.gridSize;
        for (let i = 0; i < total; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            this.elems.board.appendChild(cell);
        }
    }

    render() {
        this.elems.board.innerHTML = '';
        this.board.forEach((val, i) => {
            const cell = document.createElement('div');
            cell.className = 'cell';

            const r = Math.floor(i / this.gridSize);
            const c = i % this.gridSize;
            if ((c + 1) % this.subGridWidth === 0 && (c + 1) !== this.gridSize) cell.classList.add('border-right');
            if ((r + 1) % this.subGridHeight === 0 && (r + 1) !== this.gridSize) cell.classList.add('border-bottom');

            if (val !== 0) {
                cell.innerText = val;
                if (i === this.selectedIdx) cell.classList.add('selected');
                if (this.isConflict(i, val)) cell.classList.add('conflict');
                else if (this.solution[i] === val) cell.classList.add('given');
            }
            cell.onclick = (e) => this.handleCellClick(e, i);
            this.elems.board.appendChild(cell);
        });
    }

    handleCellClick(e, idx) {
        if (!this.gameActive) return;
        this.selectedIdx = idx;
        const target = e.target.closest('.cell');

        document.querySelectorAll('.cell').forEach(c => c.classList.remove('selected', 'highlight-house', 'highlight-match'));
        target.classList.add('selected');

        const r = Math.floor(idx / this.gridSize), c = idx % this.gridSize;
        const br = Math.floor(r / this.subGridHeight) * this.subGridHeight;
        const bc = Math.floor(c / this.subGridWidth) * this.subGridWidth;
        const selectedVal = this.board[idx];

        document.querySelectorAll('.cell').forEach((cell, i) => {
            const cr = Math.floor(i / this.gridSize), cc = i % this.gridSize;
            const inBox = (cr >= br && cr < br + this.subGridHeight && cc >= bc && cc < bc + this.subGridWidth);
            if (cr === r || cc === c || inBox) cell.classList.add('highlight-house');
            if (selectedVal !== 0 && this.board[i] === selectedVal && i !== idx) cell.classList.add('highlight-match');
        });

        if (this.elems.keyboardTrigger) this.elems.keyboardTrigger.focus();
    }

    setCellValue(num) {
        if (this.selectedIdx === null || !this.gameActive) return;
        this.history.push({ idx: this.selectedIdx, val: this.board[this.selectedIdx] });
        this.redoStack = [];
        this.board[this.selectedIdx] = num;
        this.render();
        this.checkWin();
    }

    handleKeyPress(e) {
        if (!this.gameActive || this.selectedIdx === null) return;
        const num = parseInt(e.key, 10);
        if (num >= 0 && num <= 9) this.setCellValue(num);
        if (e.key === 'Backspace' || e.key === 'Delete') this.setCellValue(0);
    }

    giveHint() {
        if (!this.gameActive || this.hintsUsed >= this.maxHints) return;
        const empty = this.board.map((v, i) => v === 0 ? i : -1).filter(i => i !== -1);
        if (empty.length === 0) return;
        const randomIdx = empty[Math.floor(Math.random() * empty.length)];
        this.board[randomIdx] = this.solution[randomIdx];
        this.hintsUsed++;
        this.updateStats();
        this.render();
        this.checkWin();
    }

    undo() {
        if (this.history.length === 0) return;
        const last = this.history.pop();
        this.redoStack.push({ idx: last.idx, val: this.board[last.idx] });
        this.board[last.idx] = last.val;
        this.render();
    }

    redo() {
        if (this.redoStack.length === 0) return;
        const next = this.redoStack.pop();
        this.history.push({ idx: next.idx, val: this.board[next.idx] });
        this.board[next.idx] = next.val;
        this.render();
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.seconds++;
            const m = Math.floor(this.seconds / 60).toString().padStart(2, '0');
            const s = (this.seconds % 60).toString().padStart(2, '0');
            this.elems.timer.innerText = `${m}:${s}`;
        }, 1000);
    }

    updateStats() {
        if (this.elems.hintCount) this.elems.hintCount.innerText = `${this.hintsUsed}/${this.maxHints}`;
    }

    checkWin() {
        if (!this.board.includes(0) && this.board.every((v, i) => v === this.solution[i])) {
            this.gameOver(true);
        }
    }

    gameOver(win) {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.gameActive = false;
        alert(win ? "TEBRİKLER! Bulmacayı çözdünüz." : "OYUN BİTTİ!");
    }

    isConflict(idx, val) {
        if (val === 0) return false;
        const r = Math.floor(idx / this.gridSize), c = idx % this.gridSize;
        const br = Math.floor(r / this.subGridHeight) * this.subGridHeight;
        const bc = Math.floor(c / this.subGridWidth) * this.subGridWidth;
        for (let i = 0; i < this.gridSize; i++) {
            if (i !== c && this.board[r * this.gridSize + i] === val) return true;
            if (i !== r && this.board[i * this.gridSize + c] === val) return true;
        }
        for (let row = 0; row < this.subGridHeight; row++) {
            for (let col = 0; col < this.subGridWidth; col++) {
                const bIdx = (br + row) * this.gridSize + (bc + col);
                if (bIdx !== idx && this.board[bIdx] === val) return true;
            }
        }
        return false;
    }
}

window.onload = () => { window.sudokuGame = new SudokuGame(); };
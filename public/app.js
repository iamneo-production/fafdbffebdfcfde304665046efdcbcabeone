// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] === '' && isGameActive()) {
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
            result.textContent = `Player ${currentPlayer} Wins!`;
            disableButtons();
        } else if (isBoardFull()) {
            result.textContent = "It's a Draw!";
            disableButtons();
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }

};

const isGameActive = () => {
    return result.textContent === '';
};
const checkWin = (player) => {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] === player && cells[b] === player && cells[c] === player) {
            return true;
        }
    }
    return false;
};

const isBoardFull = () => {
    return cells.every(cell => cell !== '');
};

const disableButtons = () => {
    btns.forEach(btn => btn.disabled = true);
};

const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    btns.forEach(btn => btn.textContent = '');
    result.textContent = `Player ${currentPlayer}'s Turn`;
    btns.forEach(btn => btn.disabled = false);

};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

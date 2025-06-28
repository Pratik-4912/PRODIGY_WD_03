let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");
const boardContainer = document.getElementById("board");

function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of winConditions) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusDisplay.textContent = `${currentPlayer} Wins!`;
      gameActive = false;
      return;
    }
  }
  if (!board.includes("")) {
    statusDisplay.textContent = "It's a draw!";
    gameActive = false;
  }
}

function handleClick(index) {
  if (!gameActive || board[index]) return;
  board[index] = currentPlayer;
  renderBoard();
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (gameActive) {
    statusDisplay.textContent = "Current Player: " + currentPlayer;
  }
}

function renderBoard() {
  boardContainer.innerHTML = "";
  board.forEach((value, index) => {
    const cell = document.createElement("div");
    cell.textContent = value;
    cell.addEventListener("click", () => handleClick(index));
    boardContainer.appendChild(cell);
  });
}

renderBoard();
statusDisplay.textContent = "Current Player: " + currentPlayer;
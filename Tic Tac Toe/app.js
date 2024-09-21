let boxes = document.querySelectorAll(".box");
let winnigMsg = document.querySelector("p");
let resetBtn = document.querySelector("#resetBtn");
let newGamebtn = document.querySelector("#newGameBtn");

let turnX = true; // X palyer then O player

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX === true) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    winnerCheck();
  });
});

const showWinner = (winner) => {
  winnigMsg.innerText = `Winner is ${winner}`;
  winnigMsg.classList.remove("hide");
  btnDisabled();
};

const winnerCheck = () => {
  for (let pattern of winningPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};

const btnDisabled = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const btnEnabled = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

const resetGame = () => {
  turnX = true;
  winnigMsg.classList.add("hide");
  btnEnabled();
};

const newGame = () => {
  turnX = false;
};

resetBtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);

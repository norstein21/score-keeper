const scorePlayer1 = document.querySelector("#playerOne");
const scorePlayer2 = document.querySelector("#playerTwo");
const btnPlayer1 = document.querySelector("#btnPlayerOne");
const btnPlayer2 = document.querySelector("#btnPlayerTwo");
const btnReset = document.querySelector("#resetScore");
const winnerOption = document.querySelector("#winnerScore");

// console.log(scorePlayer1, scorePlayer2, btnPlayer1, btnPlayer2, btnReset);
let score = { scoreP1: 0, scoreP2: 0 };
let scoreP2 = 0;
let winnerScore = 0;
let gameOver = false;

//loop untuk optionnya
for (let i = 0; i < 6; i++) {
  const option = document.createElement("option");
  option.value = `${i}`;
  option.textContent = i;
  winnerOption.append(option);
}

winnerOption.addEventListener("change", function () {
  winnerScore = this.value;
});

function tambahSkor(display, obj, key) {
  if (!gameOver) {
    obj[key] += 1;
    display.textContent = obj[key];
    if (obj[key] == winnerScore) {
      gameOver = true;
    }
  }
  console.log(score.scoreP1);
  return obj;
}

btnPlayer1.addEventListener("click", function () {
  tambahSkor(scorePlayer1, score, "scoreP1");
});

btnPlayer2.addEventListener("click", function () {
  tambahSkor(scorePlayer2, score, "scoreP2");
});

btnReset.addEventListener("click", function () {
  score.scoreP1 = 0;
  score.scoreP2 = 0;
  scorePlayer1.textContent = score.scoreP1;
  scorePlayer2.textContent = score.scoreP2;
  gameOver = false;
});

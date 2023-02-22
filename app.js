const scoreTextP1 = document.querySelector("#playerOne");
const scoreTextP2 = document.querySelector("#playerTwo");
const btnPlayer1 = document.querySelector("#btnPlayerOne");
const btnPlayer2 = document.querySelector("#btnPlayerTwo");
const btnReset = document.querySelector("#resetScore");
const winnerOption = document.querySelector("#winnerScore");
const player1Name = document.querySelectorAll("#player1Name");
const player2Name = document.querySelectorAll("#player2Name");

// console.log(scorePlayer1, scorePlayer2, btnPlayer1, btnPlayer2, btnReset);
let player1 = {
  name: "Player 1",
  text: scoreTextP1,
  button: btnPlayer1,
  score: 0,
};
let player2 = {
  name: "Player 2",
  text: scoreTextP2,
  button: btnPlayer2,
  score: 0,
};
let winnerScore = 5;
let gameOver = false;

//loop untuk optionnya
for (let i = 5; i < 11; i++) {
  const option = document.createElement("option");
  option.value = `${i}`;
  option.textContent = i;
  if (option.value == 1) {
    option.selected = true;
  }
  winnerOption.append(option);
}

addName();

function changeText(obj, player) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].textContent = player;
  }
}

function addName() {
  let nameP1 = prompt("Please Enter Name", "Player One");
  let nameP2 = prompt("Please Enter Name", "Player Two");
  player1.name = nameP1;
  player2.name = nameP2;
  changeText(player1Name, player1.name);
  changeText(player2Name, player2.name);
}

winnerOption.addEventListener("change", function () {
  winnerScore = this.value;
  reset();
});

function tambahSkor(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    player.text.textContent = player.score;
    if (player.score == winnerScore) {
      gameOver = true;
      player.text.style.color = "green";
      opponent.text.style.color = "red";
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

btnPlayer1.addEventListener("click", function () {
  tambahSkor(player1, player2);
});

btnPlayer2.addEventListener("click", function () {
  tambahSkor(player2, player1);
});

btnReset.addEventListener("click", reset);

function reset() {
  player1.score = player2.score = 0;
  player1.text.textContent = player2.text.textContent = 0;
  player1.text.style.color = player2.text.style.color = "black";
  gameOver = false;
  player1.button.disabled = player2.button.disabled = false;
}

// function tambahSkor(display, obj, key, opponent) {
//   if (!gameOver) {
//     obj[key] += 1;
//     display.textContent = obj[key];
//     if (obj[key] == winnerScore) {
//       gameOver = true;
//       display.style.color = "green";
//       opponent.style.color = "red";
//       btnPlayer1.disabled = true;
//       btnPlayer2.disabled = true;
//     }
//   }
//   return obj;
// }

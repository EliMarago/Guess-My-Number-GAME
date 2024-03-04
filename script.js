"use strict";
//console.log(document.querySelector('.message').textContent);

//document.querySelector('.message').textContent = 'Ciao';

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 15;

//document.querySelector('.guess').value = 34;

// addEventListener per cliccare su un bottone

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number";
    console.log((document.querySelector(".number").textContent = secretNumber));

    document.querySelector("body").style.backgroundColor = "#22d04c";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔺 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e92323";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔻 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e92323";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#e18888";
});

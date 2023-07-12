'use strict';
const score01El = document.getElementById('score--1');
const score02El = document.getElementById('score--2');
const newGame = document.querySelector('.new-game');
const holdGame = document.querySelector('.pause-game');
const rollDice = document.querySelector('.roll-dice');
const current01El = document.getElementById('current--1');
const current02El = document.getElementById('current--2');
const diceImage = document.querySelector('.dice-image');

let currentScore = 0;
let isPlaying = true;
let activePlayer = 1;
let scores = [0, 0];

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`.current-score-${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.toggle('player-inactive');
  activePlayer = activePlayer === 1 ? 2 : 1;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.toggle('player-inactive');
};
rollDice.addEventListener('click', function () {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`; //src will change the source attribute of the element

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        currentScore; //changes to be made for different players
    } else switchPlayer();
  }
});

holdGame.addEventListener('click', function () {
  if (isPlaying) {
    scores[activePlayer - 1] += currentScore;
    console.log(scores[activePlayer - 1]);
    document.querySelector(`.total-score-${activePlayer}`).textContent =
      scores[activePlayer - 1];
    if (scores[activePlayer - 1] >= 20) {
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-won');
      isPlaying = false;
      diceImage.classList.add('hidden');
    } else switchPlayer();
  }
});

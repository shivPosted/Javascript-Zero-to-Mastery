'use strict';
const newGame = document.querySelector('.new-game');
const holdGame = document.querySelector('.pause-game');
const rollDice = document.querySelector('.roll-dice');
const current01El = document.getElementById('current--1');
const current02El = document.getElementById('current--2');
const diceImage = document.querySelector('.dice-image');

let currentScore, isPlaying, activePlayer, scores;

const init = function () {
  isPlaying = true;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 1;
  document.querySelector(`.player-1`).classList.remove('player-inactive');
  document.querySelector(`.player-2`).classList.add('player-inactive');
  document.querySelector(`.total-score-1`).textContent = 0;
  document.querySelector(`.total-score-2`).textContent = 0;
  current01El.textContent = 0;
  current02El.textContent = 0;
  diceImage.classList.add('hidden');
  document.querySelector(`.player-1`).classList.remove('player-won');
  document.querySelector(`.player-2`).classList.remove('player-won');
};

init();
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`.current-score-${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.toggle('player-inactive');
  activePlayer = activePlayer === 1 ? 2 : 1;
};

const ROLL_DICE = function () {
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
};
const HOLD = function () {
  if (isPlaying) {
    diceImage.classList.add('hidden');
    scores[activePlayer - 1] += currentScore;
    console.log(scores[activePlayer - 1]);
    document.querySelector(`.total-score-${activePlayer}`).textContent =
      scores[activePlayer - 1];
    if (scores[activePlayer - 1] >= 20) {
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-won');
      document.querySelector(
        `.celebrate-${activePlayer}`
      ).textContent = `Player ${activePlayer} won`;
      isPlaying = false;
    } else switchPlayer();
  }
};

rollDice.addEventListener('click', ROLL_DICE);

holdGame.addEventListener('click', HOLD);

newGame.addEventListener('click', init);

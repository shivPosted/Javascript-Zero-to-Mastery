'use strict';
const score01El = document.getElementById('score--1');
const score02El = document.getElementById('score--2');
const newGame = document.querySelector('.new-game');
const pauseGame = document.querySelector('.pause-game');
const rollDice = document.querySelector('.roll-dice');
const currentScore01 = document.getElementById('current--1');
const currentScore02 = document.getElementById('current--2');
const diceImage = document.querySelector('.dice-image');
let currentScore = 0;

rollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`; //src will change the source attribute of the element

  if (dice !== 1) {
    currentScore += dice;
    currentScore01.textContent = currentScore; //changes tot be made for different players
  } else {
    currentScore01.textContent = `0`;
  }
});

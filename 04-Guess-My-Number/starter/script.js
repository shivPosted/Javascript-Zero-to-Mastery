'use strict';

//Guess my number using prompt

// const luckyNumber = 13;
// let count = Number(prompt('Enter the number between 1-20'));
// let counter = 1;
// while (count !== luckyNumber) {
//   if (count > luckyNumber) {
//     count = Number(prompt('Too high enter again'));
//     counter++;
//     continue;
//   } else if (count < luckyNumber) {
//     count = Number(prompt('Too low enter again'));
//     counter++;
//     continue;
//   }
// }

// alert(`Congrats You won, you took ${counter} tries to win`);

// document.querySelector('.number-box').textContent = 12;
// console.log(document.querySelector('.number-box').textContent);
// document.querySelector('.hint').textContent = '🥳 Correct Number!';

// document.querySelector('.score').textContent = 13;

// document.querySelector('.enter-num').value = 15;
// console.log(document.querySelector('.enter-num').value);

//Main Script

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// console.log(secretNumber);
document.querySelector('.number-box').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.enter-num').value);
  console.log(guess, typeof guess);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.hint').textContent = '⛔ No number';
      score--;
    } else if (guess > secretNumber) {
      document.querySelector('.hint').textContent = '📈 Too high!';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.hint').textContent = '📉 Too low!';
      score--;
    } else {
      document.querySelector('.hint').textContent = '🥳 Correct Number!';
      document.querySelector('.number-box').textContent = secretNumber;
      document.querySelector('.enter-num').style.backgroundColor = '#c084fc';
      document.querySelector('.number-box').style.width = '30rem';
      document.body.style.backgroundColor = '#c084fc';
    }
  } else {
    document.querySelector('.hint').textContent = '😥 You lost';
    document.querySelector('.number-box').textContent = secretNumber;
    document.body.style.backgroundColor = '#6b7280';
    score = 0;
  }
  document.querySelector('.score').textContent = score;
});

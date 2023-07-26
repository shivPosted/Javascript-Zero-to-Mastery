'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIFY APP

// Data
const account1 = {
  owner: 'Shiv Pratap',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');
const transactionHistory = document.querySelector('.transaction-history');
// console.log(transactionHistory);
const displayMovements = function (movements) {
  transactionHistory.innerHTML = '<div class="overlay-transaction"></div>';
  movements.forEach(function (amount, index) {
    const transactionType = amount > 0 ? 'deposit' : 'withdrawl';
    const html = `<div class="transaction-row">
    <div class="type_${transactionType}">${index + 1} ${transactionType}</div>
    <div class="transaction_amount">${
      amount > 0 ? `₹ ${amount}` : `-₹ ${amount - amount * 2}`
    }</div>
    </div>`;
    // console.log(html);
    transactionHistory.insertAdjacentHTML('afterbegin', html);
    // transactionHistory.insertAdjacentHTML('afterbegin', overlay);
  });
};
displayMovements(account1.movements);

const user = account1.owner;
const userName = user
  .toLowerCase()
  .split(' ')
  .map(elem => elem[0])
  .join('');

console.log(userName);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Simple array methods
//slice()
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1, arr.indexOf('d')));
// console.log(arr);
// console.log(arr.slice());

//splice()
// console.log(arr.splice(1, 2));
// console.log(arr);
// console.log(arr.splice(-1, 1));
// console.log(arr);

//reverse
// console.log(arr.reverse());
// console.log(arr);
// console.log(arr.reverse());
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

//concat
// let letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

//join
// console.log(letters.join('---'));

//forEach, difference between forEach and for-of loop

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [index, value] of movements.entries()) {
//   if (value > 0)
//     console.log(`On movement ${index + 1} You deposited $${value}`);
//   else console.log(`On movement ${index + 1} You withdrew $${Math.abs(value)}`);
// }

//usng forEach loop
// console.log('---- FOR-EACH ----');
// movements.forEach(function (value, index, array) {
//   //------------> arguments are passed in order as--> currentElement, currentIndex, wholeArray
//   if (value > 0)
//     console.log(`On movement ${index + 1} You deposited $${value}`);
//   else console.log(`On movement ${index + 1} You withdrew $${Math.abs(value)}`);
// });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Map method
// const eurToUSD = movements.map(function (value) {
//   return Math.trunc(value * 1.1);
// });
const eurToUSD = movements.map(value => Math.trunc(value * 1.1));
console.log(eurToUSD);

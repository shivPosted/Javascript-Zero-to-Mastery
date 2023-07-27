'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIFY APP

// Data
const account1 = {
  owner: 'Shiv Pratap Singh',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Krishna Pratap',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Rengoku Kyojiro',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Matsumoto Rangiku',
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
const currentBalanceDisplay = document.querySelector(
  '.current-balance-display'
);
const summaryIncome = document.querySelector('.input_amount');
const summaryOutcome = document.querySelector('.output_amount');
const summaryInterest = document.querySelector('.interest_amount');
const loginPage = document.querySelector('.landing-login');
const displayUserData = document.querySelector('.main-landing-page');
const loginUserName = document.querySelector('.user');
const loginPIN = document.querySelector('.password');
const loginButton = document.querySelector('.login-btn');
const welcomeMessage = document.querySelector('.main-section-welcome');
const logoutButton = document.querySelector('.logout');
const logoutConfirmation = document.querySelector('.logout-cofirm');
const logoutOK = document.querySelector('.ok');
const logoutCancel = document.querySelector('.cancel');
const logoutCross = document.querySelector('.cross-button');
const logoutOverlay = document.querySelector('.');

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
// displayMovements(account1.movements);

const displayBalance = function (arr) {
  const balance = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  currentBalanceDisplay.textContent = `₹ ${balance}`;
};
// displayBalance(account1.movements);

const displaySummaryData = function (account) {
  const income = account.movements
    .filter(elem => elem >= 0)
    .reduce((accum, current) => accum + current);
  summaryIncome.textContent = `₹ ${income}`;

  const outcome = account.movements
    .filter(elem => elem < 0)
    .reduce((accum, current) => accum + current);
  summaryOutcome.textContent = `₹ ${Math.abs(outcome)}`;

  const interest = account.movements
    .filter(elem => elem >= 0)
    .map(elem => (elem * account.interestRate) / 100)
    .filter(elem => elem >= 1) //-----------------------------------------------> bank only pay interest if interest itself is greater than INR 1.00
    .reduce((accum, current) => accum + current);

  summaryInterest.textContent = `₹ ${interest}`;
};
// displaySummaryData(account1.movements);

//Displaying all of the user account

loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(loginUserName.value);
  const currentAccount = accounts.find(
    account => loginUserName.value === account.userName
  );

  if (currentAccount?.pin === Number(loginPIN.value)) {
    loginPage.classList.add('hidden');
    displayUserData.classList.remove('hidden');
    document.body.classList.remove('b-login');
    document.body.classList.add('.a-login');
    loginUserName.value = loginPIN.value = '';
    //display welcome message
    welcomeMessage.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    //calculate balance of the currentuser
    displayBalance(currentAccount.movements);

    //display summary of the account
    displaySummaryData(currentAccount);
    //display transaction
    displayMovements(currentAccount.movements);
  }
});

logoutButton.addEventListener('click', function () {
  loginPage.classList.remove('hidden');
  displayUserData.classList.add('hidden');
  document.body.classList.add('b-login');
  document.body.classList.remove('.a-login');
  logoutConfirmation.classList.remove('hidden');
});
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
// const eurToUSD = movements.map(value => Math.trunc(value * 1.1));
// console.log(eurToUSD);

//Computing username using map method
const userName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(elem => elem[0])
      .join('');
  });
};

userName(accounts);
console.log(accounts);

//Use of filter methods

// const withdrawls = movements.filter(function(mov) {
//   return mov < 0;
// })
const withdrawls = movements.filter(mov => mov < 0); //if the returning value is true than only it will be stored in the new array, hence the name filter

// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// })

const deposits = movements.filter(mov => mov > 0);

//same with the for-of loop
// const deposits = [];
// for(const mov of movements){
//   if(mov > 0) deposits.push(mov);
// }

//Use of reduce method

//Maximum value using reduce method

const maxValue = arr =>
  arr.reduce((accum, current) => (accum > current ? accum : current), arr[0]);

console.log(maxValue(account1.movements));
// console.log(balance);

//Use of find method

// const account = accounts.find(acc => acc.owner === 'Rengoku Kyojiro');
// console.log(account);

let account;
for (const acc of accounts) {
  if (acc.owner === 'Rengoku Kyojiro') {
    account = acc;
    break;
  }
}
console.log(account);

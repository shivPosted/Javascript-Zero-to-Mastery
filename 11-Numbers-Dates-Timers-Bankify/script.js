'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIFY APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Shiv Pratap Singh',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Matsumoto Rangiku',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////
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
const logoutConfirmation = document.querySelector('.logout-confirm');
const logoutOK = document.querySelector('.ok');
const logoutCancel = document.querySelector('.cancel');
const logoutCross = document.querySelector('.cross-button');
const logoutOverlay = document.querySelector('.overlay-logout');

//transfer-money-elements
const trnasferMoneyTo = document.querySelector('.transfer-to');
const transferAmount = document.querySelector('.transfer-amount');
const transferButton = document.querySelector('.transfer-btn');
//close-account elements
const accountToClose = document.querySelector('.confirm-user');
const accountToClosePin = document.querySelector('.confirm-pin');
const accountCloseButtton = document.querySelector('.close-account-btn');
//Taking Loan elements
const loanAmount = document.querySelector('.loan-amount');
const loanButton = document.querySelector('.loan-btn');
//sorting
const sortTransactions = document.querySelector('.sort');
let isSorted = false;
// Functions

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

// let currentBalance;
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // acc.balance = currentBalance;
  currentBalanceDisplay.textContent = `₹ ${acc.balance}`;
};
// displayBalance(account1.movements);

const displaySummaryData = function (account) {
  const income = account.movements
    .filter(elem => elem >= 0)
    .reduce((accum, current) => accum + current);
  summaryIncome.textContent = `₹ ${income}`;

  const outcome = account.movements
    .filter(elem => elem < 0)
    .reduce((accum, current) => accum + current, 0);
  summaryOutcome.textContent = `₹ ${Math.trunc(Math.abs(outcome))}`;

  const interest = account.movements
    .filter(elem => elem >= 0)
    .map(elem => (elem * account.interestRate) / 100)
    .filter(elem => elem >= 1) //-----------------------------------------------> bank only pay interest if interest itself is greater than INR 1.00
    .reduce((accum, current) => accum + current);

  summaryInterest.textContent = `₹ ${Math.trunc(interest)}`;
};

const updateUI = function (account) {
  displayBalance(account);
  displaySummaryData(account);
  displayMovements(account.movements);
};
const logout = function () {
  loginPage.classList.remove('hidden');
  displayUserData.classList.add('hidden');
  document.body.classList.add('b-login');
  document.body.classList.remove('.a-login');
  logoutConfirmation.classList.add('hidden');
  logoutOverlay.classList.add('hidden');
};
const closeLogoutWindow = function () {
  logoutConfirmation.classList.add('hidden');
  logoutOverlay.classList.add('hidden');
};
// displaySummaryData(account1.movements);

//Displaying all of the user account

//EVENT HANDLERS
let currentAccount;
loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(loginUserName.value);
  currentAccount = accounts.find(
    account => loginUserName.value === account.userName
  );

  if (currentAccount?.pin === +loginPIN.value) {
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

    //display summary of the account
    // displaySummaryData(currentAccount);
    //display transaction
    // displayMovements(currentAccount.movements);
    updateUI(currentAccount);
  }
});

logoutButton.addEventListener('click', function () {
  logoutConfirmation.classList.remove('hidden');
  logoutOverlay.classList.remove('hidden');
});
logoutCancel.addEventListener('click', closeLogoutWindow);
logoutCross.addEventListener('click', closeLogoutWindow);
logoutOK.addEventListener('click', logout);

//transfer money function
transferButton.addEventListener('click', function (e) {
  // console.log('clicked');
  e.preventDefault();
  const transferAccount = accounts.find(
    acc => trnasferMoneyTo.value === acc.userName
  );
  // console.log(transferAccount);
  // displayBalance(transferAccount);
  // console.log(transferAccount.balance);
  const amount = +transferAmount.value;
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    transferAccount &&
    transferAccount.userName !== currentAccount.userName
  ) {
    // console.log('success');
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
    // displayBalance(currentAccount);
    // displaySummaryData(currentAccount);
    // displayMovements(currentAccount.movements);
    transferAccount.movements.push(amount);
    trnasferMoneyTo.value = transferAmount.value = '';
  }
});

//CLOSE ACCOUNT and FINDINDEX method
accountCloseButtton.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    accountToClose.value === currentAccount.userName &&
    +accountToClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === accountToClose.value
    );
    accounts.splice(index, 1);
    logout();
    accountToClose.value = accountToClosePin.value = '';
  }
});

//Taking Loan
loanButton.addEventListener('click', function (e) {
  e.preventDefault();
  const lAmount = +loanAmount.value;
  if (
    currentAccount.movements.some(current => current >= lAmount * 0.1) && //-------------------------->loan will be provided if user have at least one deposit greater than or equal to 10% of the requested amount
    lAmount > 0
  ) {
    currentAccount.movements.push(lAmount);
    updateUI(currentAccount);
    loanAmount.value = '';
  }
});

//sort feature implementation
sortTransactions.addEventListener('click', function () {
  const [...sortingArray] = [...currentAccount.movements];
  console.log(sortingArray);
  if (!isSorted) {
    displayMovements(sortingArray.sort((a, b) => a - b));
    isSorted = true;
  } else {
    displayMovements(sortingArray);
    isSorted = false;
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);
//conversion
console.log('23');
console.log(+'23'); //By adding + in front strng will change to number

// console.log('23' + '245' + '12');
console.log(0.1 + 0.2 === 0.3); //this is fun 😂😂
console.log(0.1 + 0.2);
//Parsing
console.log(Number.parseInt('27px'));
console.log(Number.parseInt('e27px'));
console.log(Number.parseFloat('25.65rem'));
console.log(Number.parseInt('25.65rem'));

//Check if a value is not a number
console.log(Number.isNaN('105')); //will change the string to number, this is not a good practice to check if a value is a number or not
console.log(Number.isNaN(+'23x'));
console.log(Number.isNaN(23 / 0));

//check if a value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(+'23'));
console.log(Number.isFinite(23 / 0));

//check if a value is integer
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23.21)); //false
console.log(Number.isInteger(+'33254'));

//Math methods
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(216 ** (1 / 3));
console.log(Math.max(5, 6, 8, 1, 2, 30, 887));
console.log(Math.max(5, 6, 8, 1, 2, '30'));

//constants
console.log(Math.PI ** Number.parseFloat('23.25cm')); //in cm

console.log(Math.random() * 6); //between 0-6
console.log(Math.random() * 6 + 1); //from 1-6    including decimals
console.log(Math.floor(Math.random() * 6) + 1); //from 1-6    only integers

//function to get random numbers from min-max
const randomNumber = function (min, max) {
  //------------------------->funcition to create a random number from min to max
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(randomNumber(50, 70));

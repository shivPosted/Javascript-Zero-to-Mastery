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
  const amount = Number(transferAmount.value);
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
    Number(accountToClosePin.value) === currentAccount.pin
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
  const lAmount = Number(loanAmount.value);
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

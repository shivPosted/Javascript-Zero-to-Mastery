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
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-07-25T17:01:17.194Z',
    '2023-07-30T23:36:17.929Z',
    '2023-08-02T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN', // de-DE
};

const account2 = {
  owner: 'Matsumoto Rangiku',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
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
const wrongInfoMessage = document.querySelector('.wrong-info');
//sorting
const sortTransactions = document.querySelector('.sort');
let isSorted = false;
let timerInterval;
const now = new Date();
//TIMER
const timer = document.querySelector('.timer');

//Date
// Functions

const daysPassed = (date1, date2) => {
  return Math.abs((date2 - date1) / (1000 * 24 * 60 * 60));
}; //--------->converting ms to days

const displayMovementsDate = function (date, locale) {
  const intlDateFormat = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

  const daysPass = Math.floor(daysPassed(Date.now(), date));

  if (daysPass === 0) return `TODAY`;
  if (daysPass === 1) return `YESTERDAY`;
  if (daysPass <= 7) return `${daysPass} DAYS AGO`;

  return intlDateFormat;
};

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
const displayMovements = function (acc) {
  transactionHistory.innerHTML = '<div class="overlay-transaction"></div>';
  acc.movements.forEach(function (amount, index) {
    const date = new Date(acc.movementsDates[index]);
    const displayDate = displayMovementsDate(date, acc.locale);

    const transactionType = amount > 0 ? 'deposit' : 'withdrawl';
    const html = `<div class="transaction-row">
    <div class="type_${transactionType}">${index + 1} ${transactionType}</div>
    <div class="date_transaction">${displayDate}</div>
    
    <div class="transaction_amount">${formattedCurrency(
      amount,
      acc.locale,
      acc.currency
    )}</div>
    </div>`;
    // console.log(html);
    transactionHistory.insertAdjacentHTML('afterbegin', html);
    // transactionHistory.insertAdjacentHTML('afterbegin', overlay);
  });
};
// displayMovements(account1.movements);

const formattedCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // acc.balance = currentBalance;
  currentBalanceDisplay.textContent = `${formattedCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};
// displayBalance(account1.movements);

const displaySummaryData = function (account) {
  const income = account.movements
    .filter(elem => elem >= 0)
    .reduce((accum, current) => accum + current);
  summaryIncome.textContent = `${formattedCurrency(
    income,
    account.locale,
    account.currency
  )}`;

  const outcome = account.movements
    .filter(elem => elem < 0)
    .reduce((accum, current) => accum + current, 0);
  summaryOutcome.textContent = `${formattedCurrency(
    Math.abs(outcome),
    account.locale,
    account.currency
  )}`;

  const interest = account.movements
    .filter(elem => elem >= 0)
    .map(elem => (elem * account.interestRate) / 100)
    .filter(elem => elem >= 1) //-----------------------------------------------> bank only pay interest if interest itself is greater than INR 1.00
    .reduce((accum, current) => accum + current);

  summaryInterest.textContent = `${formattedCurrency(
    interest,
    account.locale,
    account.currency
  )}`;
};

const updateUI = function (account) {
  displayBalance(account);
  displaySummaryData(account);
  displayMovements(account);
};
const logout = function () {
  clearInterval(timerInterval);
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

const logoutTimer = function () {
  let time = 300;
  const tick = function () {
    if (time === 0) {
      logout();
    }
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    timer.textContent = `${min}:${sec}`;
    time--;
  };
  tick();
  timerInterval = setInterval(tick, 1000);

  return timerInterval;
};

const somethingWrong = function (str) {
  wrongInfoMessage.textContent = str;
  wrongInfoMessage.style.opacity = '100';
  wrongInfoMessage.style.transform = 'translate(-50%, -10px)';
  setTimeout(() => {
    wrongInfoMessage.style.opacity = '0';
    wrongInfoMessage.style.transform = 'translate(-50%, 0)';
  }, 5000);
};
// displaySummaryData(account1.movements);

//Displaying all of the user account

//EVENT HANDLERS
let currentAccount;

// const now = new Date();
// const year = now.getFullYear();
// const month = `${now.getMonth() + 1}`.padStart(2, '0');
// const date = `${now.getDate()}`.padStart(2, '0');
// const daysInWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// const day = daysInWeek[now.getDay()].toLowerCase();

//current date and time
const lan = navigator.language;
const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
};
const date = new Intl.DateTimeFormat(lan, options).format();
document.querySelector('.current-date-label').textContent = date;

//login

loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(loginUserName.value);
  currentAccount = accounts.find(
    account => loginUserName.value === account.userName
  );

  if (currentAccount?.pin === +loginPIN.value) {
    document.body.classList.remove('b-login');
    document.body.classList.add('.a-login');
    loginPage.classList.add('hidden');
    displayUserData.classList.remove('hidden');
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
    if (timerInterval) clearInterval(timerInterval);
    logoutTimer();
    updateUI(currentAccount);
  } else somethingWrong('Wrong Username or Password');
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
    currentAccount.movementsDates.push(now.toISOString());
    updateUI(currentAccount);
    // displayBalance(currentAccount);
    // displaySummaryData(currentAccount);
    // displayMovements(currentAccount.movements);
    transferAccount.movements.push(amount / 83);
    transferAccount.movementsDates.push(now.toISOString());
    trnasferMoneyTo.value = transferAmount.value = '';

    //reset timer
    clearInterval(timerInterval);
    logoutTimer();
  }
  if (currentAccount.balance < amount) somethingWrong('Insufficient Balance');
  if (transferAccount === undefined)
    somethingWrong('No user found by this name');
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
    setTimeout(function () {
      currentAccount.movements.push(Math.floor(lAmount));
      currentAccount.movementsDates.push(now.toISOString());
      updateUI(currentAccount);
      loanAmount.value = '';
    }, 2500);

    //reset timer
    clearInterval(timerInterval);
    logoutTimer();
  } else somethingWrong(`You are not elligible for loan`);
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

// console.log(23 === 23.0);
//conversion
// console.log('23');
// console.log(+'23'); //By adding + in front strng will change to number

// console.log('23' + '245' + '12');
// console.log(0.1 + 0.2 === 0.3); //this is fun 😂😂
// console.log(0.1 + 0.2);
//Parsing
// console.log(Number.parseInt('27px'));
// console.log(Number.parseInt('e27px'));
// console.log(Number.parseFloat('25.65rem'));
// console.log(Number.parseInt('25.65rem'));

//Check if a value is not a number
// console.log(Number.isNaN('105')); //will change the string to number, this is not a good practice to check if a value is a number or not
// console.log(Number.isNaN(+'23x'));
// console.log(Number.isNaN(23 / 0));

//check if a value is a number
// console.log(Number.isFinite(23));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(+'23'));
// console.log(Number.isFinite(23 / 0));

//check if a value is integer
// console.log(Number.isInteger(23.0)); //true
// console.log(Number.isInteger(23.21)); //false
// console.log(Number.isInteger(+'33254'));

//Math methods
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(216 ** (1 / 3));
// console.log(Math.max(5, 6, 8, 1, 2, 30, 887));
// console.log(Math.max(5, 6, 8, 1, 2, '30'));

//constants
// console.log(Math.PI ** Number.parseFloat('23.25cm')); //in cm

// console.log(Math.random() * 6); //between 0-6
// console.log(Math.random() * 6 + 1); //from 1-6    including decimals
// console.log(Math.floor(Math.random() * 6) + 1); //from 1-6    only integers

//function to get random numbers from min-max
// const randomNumber = function (min, max) {
//------------------------->funcition to create a random number from min to max
//   return Math.floor(Math.random() * (max - min) + min);
// };

// console.log(randomNumber(50, 70));

//floor, ceil, trunc  Rouding integers
// console.log(Math.ceil(23.9));
// console.log(Math.ceil(23.1));
// console.log(Math.floor(23.1));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(23.5));
// console.log(Math.trunc(23.9));
// console.log(Math.trunc(23.1));

// console.log(Math.floor(-23.4)); //-24 -23.4 -23  -24< -23
// console.log(Math.trunc(-23.4));
// console.log(Math.ceil(-23.4));

//Rounding decimals
// console.log((23.90096).toFixed(2)); //toFixed() generate string
// console.log(+(23.90096).toFixed(2));
// console.log((2356.2315248).toFixed(3));

//Creating dates
// const now = new Date();
// console.log(now);

// console.log(new Date('June 11, 2001')); //passing string to Date() constructor to get the whole date format
// console.log(new Date('2021 January 01'));

// console.log(new Date(2001, 6, 11, 23, 59, 59)); // year, month, date, hour, minutes, seconds ------------> 0 based indexing for months and day 0 being sunday
// console.log(new Date(0)); //---------> 0 millisecond represent the starting of the unix time i.e. Jan 01 1970, so we can pass millisecond based on starting from this date
//5 days after this date
// console.log(new Date(5 * 24 * 60 * 60 * 1000)); //converting 5 days to millisecond 1sec = 1000ms -----------------> 5 * 24 * 60 * 60 * 1000 refers to timestamp

//Working with dates in JS
// const future = new Date('2019-11-18T21:31:17.178Z');
// console.log(future);
//getters
// console.log(future.getFullYear());
// console.log(future.getMonth()); //---->returns a index from 0-11
// console.log(future.getDate());
// console.log(future.getDay()); // -------> returns an index from 0-6 0 being sunday
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString()); // TO GET A WHOLE STRING FROM DATE
// console.log(future.getTime()); //GET THE NUMBER OF millisecond passed since JAN 01 1970 ---> represents timestamp
// console.log(new Date(future.getTime()));
// console.log(Date.now()); //return timestamp of now from JAN 01 1970

//setters
// console.log(future.setFullYear(2045)); //rest are also same
// console.log(future.getFullYear());
// console.log();

//Operation with dates
// console.log(new Date());
// console.log(+new Date()); //----------->converting to number
//difference of days between two dates

const day1 = daysPassed(new Date(2023, 7, 2), new Date(2023, 6, 31));

console.log(day1);

//Internationalisation (Intl)
// const formatter = new Intl.DateTimeFormat('en-IN'); //declaring a formatter for Intl API
// const dateNow = formatter.format(new Date()); //format() will take a type of a date as an argument
// console.log(dateNow);

// const formatterWithOptions = new Intl.DateTimeFormat('en-IN', {
//   //Intl formatter with options
//   year: 'numeric',
//   day: '2-digit',
//   month: '2-digit',
//   weekday: 'long',
//   hour12: false,
//   hour: 'numeric',
//   minute: '2-digit',
// }).format(new Date());

// console.log(formatterWithOptions);

// const local = navigator.language; //give the locale string i.e. 'lan-Region' e.g. ;- 'en-IN' according to the region of the user
// const formatterBrowser = new Intl.DateTimeFormat(local).format(new Date());
// console.log(formatterBrowser);

// console.log(new Intl.DateTimeFormat('pt-PT').format(new Date()));

//Intl with numbers
// const num = 235658965.2324;
// const formattedNum = new Intl.NumberFormat('en-US').format(num);
// console.log(formattedNum);

// const currency = 256869575.3245;
// const formattedCurrency = new Intl.NumberFormat('en-In', {
//   style: 'currency',
//   currency: 'INR',
// }).format(currency);
// console.log(formattedCurrency);

// const speed = 25698;
// const formattedSpeed = new Intl.NumberFormat('en-IN', {
//   style: 'unit',
//   unit: 'kilometer-per-hour', //can be miles-per-hour, celcius, kelvin or other unit
// }).format(speed);
// console.log(formattedSpeed);

//setTimeout and setInterval
// setTimeout(() => {
//   console.log('This will print after 3 sec');
// }, 3000);
// console.log('waiting...'); //this will get in the meantimee 3sec passed , becaue first when the page is loaded the callback in setTimeout will be read and execution will continue but when the mentioned time limit passed the function will get executed

// const ingredients = ['olives', 'spinach'];

// const timer = setTimeout(
//   function (ing1, ing2) {
//     console.log(`Your pizza has arrived with ${ing1} and ${ing2}`);
//   },
//   2500,
//   ...ingredients
// ); //every argument given after the time is considered to be an agument that is passed to the callback function in the setTimeout

// if (ingredients.includes('spinach')) clearTimeout(timer); //clearTimeout is used to cancel the execution of the setTimout before the set time is passed

//setInterval
// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   console.log(`${hour}:${minutes}:${seconds}`);
// }, 1000);

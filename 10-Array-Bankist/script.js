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
//EVENT HANDLERS
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
  summaryOutcome.textContent = `₹ ${Math.abs(outcome)}`;

  const interest = account.movements
    .filter(elem => elem >= 0)
    .map(elem => (elem * account.interestRate) / 100)
    .filter(elem => elem >= 1) //-----------------------------------------------> bank only pay interest if interest itself is greater than INR 1.00
    .reduce((accum, current) => accum + current);

  summaryInterest.textContent = `₹ ${interest}`;
};

const updateUI = function (account) {
  displayBalance(account);
  displaySummaryData(account);
  displayMovements(account.movements);
};
// displaySummaryData(account1.movements);

//Displaying all of the user account
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
// logoutOK.addEventListener('click', logout);
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

//Use of some and every

//By value
console.log(movements.includes(-130));

//by condition

//SOME
console.log(movements.some(current => current > 1500));
console.log(movements.some(current => current < -1500));
//EVERY
console.log(account4.movements.every(current => current > 0));
console.log(account4.movements.every(current => current < 0));

//FLAT and FLATMAP

//flat();
const arr = [1, [2, 3], 4, [5, 6], [7, 8, 9], 10];
console.log(arr);
console.log(arr.flat());

const arrDeep = [[1, [2, 3]], 4, [5, 6], [[7, 8, 9], 10]];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// const arrMovements = accounts.map(acc => acc.movements);
// console.log(arrMovements);
// const overallMovements = arrMovements.flat();
// console.log(overallMovements);
const overallMovements = accounts.map(acc => acc.movements).flat();
console.log(overallMovements);

//flatMap();
const overallMovements2 = accounts.flatMap(acc => acc.movements);
console.log(overallMovements);

//sort method

//sort in strings
const names = ['Shiv', 'Matsumoto', 'Kyojiro', 'Akaza'];
console.log(names.sort());
console.log(names); //array got mutated

//sort in numbers
console.log(movements);
movements.sort();
console.log(movements); //will sort just like it do with strings, will not work for numbers

//return < 0 a,b (keep order)  (change order? <0 means no, >0 means yes)
//return > 0 b,a (change order)

// movements.sort((a, b) => { //------------------>ascending order
//   if (a > b) return 2;
//   if (b > a) return -1;
// });

movements.sort((a, b) => a - b); //a-b > 0 => a>b =>  change order   //a-b<0 => a<b => keep order
console.log(movements);

movements.sort((a, b) => b - a); //b-a > 0 => b>a => change order // b-a<0 => b>a => keep order

//Empty array+fill
const x = new Array(7); //Empty array with 7 elements, can't use any method on it except fill()
console.log(x);

//fill
x.fill(4, 2, 5);
console.log(x);
// const y = new Array();

//from
const y = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(y);
const iterable = 'Shiv Pratap';
const fromIterable = Array.from(iterable, elem => elem);
console.log(fromIterable);

currentBalanceDisplay.addEventListener('click', function () {
  const overallMovementsFromScreen = Array.from(
    document.querySelectorAll('.transaction_amount'),
    elem => elem.textContent.replace('₹', '')
  );
  console.log(overallMovementsFromScreen);
});

//Array exercise
//1)total of all the deposits in all the accounts

const overallDeposits = accounts
  .flatMap(mov => mov.movements)
  .filter(allTransactions => allTransactions > 0)
  .reduce((accum, current) => accum + current);
console.log(overallDeposits);

//2)Number of deposits with >= 1000 in all the accouts

// const numberOfDeposits = accounts
//   .flatMap(mov => mov.movements)
//   .filter(rqdDeposits => rqdDeposits >= 1000).length;
// console.log(numberOfDeposits);

const length = accounts
  .flatMap(mov => mov.movements)
  .reduce((accum, current) => (current >= 1000 ? ++accum : accum), 0); //-------------> if you use accum++ this will return 0 cause accum++ is postfix and 0 will return again and again, so use ++accum or accum+1
console.log(length);

//3)Create an object using reduce that contains all the deposits and withdrawls as different properties

const depositAndWithdrawlOBJ = accounts
  .flatMap(mov => mov.movements)
  .reduce(
    (accum, current) => {
      // current > 0 ? (accum.deposits += current) : (accum.withdrawls += current);
      accum[current > 0 ? 'deposits' : 'withdrawls'] += current;
      return accum;
    },
    { deposits: 0, withdrawls: 0 }
  );

console.log(depositAndWithdrawlOBJ);

//4)Capitalize the title with titleCases

const capitalizingTitles = function (title) {
  const exceptions = [
    'a',
    'an',
    'the',
    'by',
    'with',
    'at',
    'but',
    'or',
    'on',
    'with',
    'and',
    'is',
  ];
  const changedTitle = title
    .toLowerCase()
    .split(' ')
    .map((elem, i) =>
      exceptions.includes(elem) && i !== 0
        ? elem
        : elem[0].toUpperCase() + elem.slice(1)
    )
    .join(' ');
  console.log(changedTitle);
};

capitalizingTitles('this is the first TITLE');
capitalizingTitles('second title cOMING up');
capitalizingTitles('and this is the Third and the lASt title');

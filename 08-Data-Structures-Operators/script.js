'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const Days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [Days[3]]: {
    open: 12,
    close: 22,
  },
  [Days[4]]: {
    open: 11,
    close: 23,
  },
  [Days[Days.length - 2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours,
  openingHours, //------->>ES6 feature
  f(mainIndex, starterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  o({ address, time, starterIndex, mainIndex }) {
    console.log(
      `Food ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} is delivered at ${address} on ${time}`
    );
  },
};
console.log('Looping over objects');
const properties = Object.keys(restaurant);
const values = Object.values(restaurant);
const entries = Object.entries(restaurant);
console.log(properties);
console.log(values);
console.log(entries);

//Destructuring objects

// const { categories, mainMenu, openingHours } = restaurant;
// console.log(categories, mainMenu, openingHours);

// restaurant.o({
//   starterIndex: 2,
//   mainIndex: 0,
//   time: '22:00',
//   address: 'Mundru, via Shrimadhopur',
// });

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };
// const { low: lowToday } = LOCAL_FORECAST.today;
// const { high: highToday } = LOCAL_FORECAST.today;
// console.log(lowToday, highToday);
//Destructuring objects using destructuring symbol [, , , , . . . . . ]
// const [, category2, , category4] = restaurant.categories;
// console.log(category2, category4);

//Destructuring using function
// let [main, starter] = restaurant.f(2, 1);
// console.log(main, starter);

//swapping using destructuring
// [starter, main] = [main, starter]; //------------------------->Nice trick for swapping two values using destructuring
// console.log(main, starter);

/*Spread syntax*/

// const printNumbers = function () {
//   let str = '';
//   for (let i = 0; i < arguments.length; i++) {
//     str += `Element no. ${arguments[i]} = ${arguments[i]}
//   `;
//   }
//   return str;
// };

// const arrCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const realCounting = printNumbers(...arrCounting);
// console.log(realCounting);

//Spread because on right side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

//The REST pattern
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...others] = num;
console.log(a, b, others);

const [focaccia, , Garlic_Bread, ...leftOver] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(leftOver);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//Function use for REST

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3, 4, 5);
add(2, 3, 4, 5, 6);
add(2, 3, 4, 5, 6, 7);
add(2, 3, 4, 5, 6, 7, 8);

const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
add(...sum); //use of spread operator for opening array

/*Logical assignment*/
console.log('Logical Assignment');
let x = 10;
let y = 0;
x ||= y;
console.log(x);
x &&= y;
console.log(x);
y = 10;
x ??= y;
console.log(x);

//Optional Chaining

/*****/ console.log('Optional Chaining'); /*********/

// console.log(restaurant.openingHours.mon.open); //-------> will create an error because mon doesn't exist in openingHours
if (restaurant.openingHours.mon && restaurant.openingHours.mon.open)
  console.log(restaurant.openingHours.mon.open);
//Using optional chaining
// console.log(restaurant.openingHours.mon?.open ?? 'Value does not exist');
console.log(restaurant.openingHours.thu?.open ?? 'Value does not exist');

//chaining in methods
// console.log(restaurant.f?.(0, 2) ?? 'Function does not exist');
console.log(restaurant.x?.(1, 3) ?? 'Function does not exist');

//Chaining in arrays

console.log('Chaining in arrays');
for (const Day of Days) {
  // console.log(Day);
  const open = restaurant.openingHours[Day]?.open ?? 'Not open';
  console.log(`On ${Day} we open at:- ${open}`);
}

//Sets
const redundant = [
  'pizza',
  'macronni',
  'rissoto',
  'pizza',
  'macronni',
  'pizza',
  'pizza',
  'pasta',
];
console.log(redundant);
const orderSet = new Set(redundant);
console.log(orderSet);

console.log(orderSet.size);
orderSet.delete('pasta');
orderSet.add('maggi');
console.log(orderSet);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('burger'));

//Maps
const learningMaps = new Map();
learningMaps.set('first', 'It is just the first value with string type key');
// learningMaps.set(2, 'It is second value with number type key');
// learningMaps.set('pizza', 'Yeah it is good');
// learningMaps.set(false, 'This is value with boolean key and it is false');
// learningMaps.set(true, 'This is value with boolean key and it is true');
// learningMaps.set('iterable', [
//   'pizza',
//   'macronni',
//   'rissoto',
//   'pizza',
//   'macronni',
//   'pizza',
//   'pizza',
//   'pasta',
// ]);

learningMaps
  .set(2, 'It is second value with number type key')
  .set('pizza', 'Yeah it is good')
  .set(false, 'This is value with boolean key and it is false')
  .set(true, 'This is value with boolean key and it is true')
  .set('iterable', [
    'pizza',
    'macronni',
    'rissoto',
    'pizza',
    'macronni',
    'pizza',
    'pizza',
    'pasta',
  ]); //---------->> we can chain set method in maps
console.log(learningMaps);
console.log(learningMaps.get(2));
console.log(learningMaps.get(3 > 2));
console.log(learningMaps.get(3 === 2));

console.log(learningMaps.get('iterable'));
console.log('Quiz is here');
const question = new Map([
  ['question', 'Which is the best programming language'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'Javascript'],
  [4, 'Golang'],
  ['correct', 3],
  [true, 'Correct answer 🥳'],
  [false, 'Try again 😅'],
]);
// console.log(question);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('What is your answer?'));
const answer = 3;
console.log(
  question.get('correct') === answer ? question.get(true) : question.get(false)
);

for (const [key, value] of redundant.entries()) {
  console.log(`${key + 1}: ${value}`);
}

//Maps to arrays
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

//Working with strings
console.log('Working with Strings');
const firstName = 'Shiv Pratap';
const lastName = 'Singh Shekhawat';
console.log(firstName.length);
console.log(firstName.indexOf('P'));
console.log(firstName.lastIndexOf(' '));
console.log(firstName.slice(0, firstName.indexOf(' ')));
console.log(firstName.slice(firstName.indexOf('P')));

const isMiddleSeat = function (seat) {
  //B and E are middle Seats
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E')
    console.log('You got the middle seat 🥳');
  else console.log('Your luck is quite bad 🥲');
};

isMiddleSeat('23A');
isMiddleSeat('26B');
isMiddleSeat('15E');
isMiddleSeat('133C');

const normaLisingString = function (str) {
  const convertedStr = str[0].toUpperCase() + str.toLowerCase().slice(1);
  return convertedStr;
};

console.log(normaLisingString('sHiV'));

const normaLisingEmail = function (email) {
  const convertedEmail = email.toLowerCase().trim();
  return convertedEmail;
};
console.log(normaLisingEmail('    shivPratap621@gmail.com    \t'));

const replaceString = function (str, oldStr, newStr, replaceArgument) {
  replaceArgument == 'replaceAll'
    ? (str = str.replaceAll(oldStr, newStr))
    : (str = str.replace(oldStr, newStr));

  return str;
};

console.log(
  replaceString(
    'What the fuck is all of this, what the fuck do you mean, huh?',
    'fuck',
    'hell',
    'replaceAll'
  )
);

const toCapital = function (name) {
  const NAME = name.split(' ');
  const upper = [];
  for (const n of NAME) {
    upper.push(n[0].toUpperCase() + n.slice(1));
  }
  return upper.join(' ');
};
console.log(toCapital('shiv pratap singh shekhawat'));

console.log('shiv pratap singh'.padStart(23, '+').padEnd(30, '-'));

const maskCredit = function (number) {
  let maskedNumber = String(number);
  maskedNumber = maskedNumber.slice(-4).padStart(maskedNumber.length, '*');

  return maskedNumber;
};
console.log(maskCredit(23569874125));
console.log(maskCredit(2565486321997562));

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  f: function (mainIndex, starterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  o: function ({ address, time, starterIndex, mainIndex }) {
    console.log(
      `Food ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} is delivered at ${address} on ${time}`
    );
  },
};

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

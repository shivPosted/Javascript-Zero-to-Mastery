'use strict';

/*const passangers = [];
const bookFlight = function (
  flightName,
  flightNumber = 10,
  passanger = 20,
  rate = passanger * 10
) {
  const bookings = {
    flightName,
    flightNumber,
    passanger,
    rate,
  };
  console.log(bookings);
};

bookFlight('BNB2310', undefined, 30, undefined);*/

/*const flightName = 'LH345';
const shiv = {
  name: 'Shiv Pratap',
  passport: 3256417852,
};

const checkIn = function (flight, person) {
  flight = 'LB787';
  person.name = 'Mr. ' + person.name; //---------------->> will change the main object too because objects are stored in heaps and not in call-stack;
};
checkIn(flightName, shiv);
console.log(flightName, shiv);*/

//Callback function and higher order function
//example-1
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const calculator = function (a, b, fn) {
  return `Result of the operation is: ${fn(a, b)}`;
};

console.log(calculator(5, 7, divide));

//example-2
function filterEven(arr) {
  for (const [key, value] of arr.entries()) {
    console.log(key, value);
    if (value % 2 === 0) {
      arr.splice(key, 1);
    }
  }
  return arr;
}

const filterArray = function (arr, fn) {
  return `The filtered array is: ${fn(arr)}`;
};
console.log(
  filterArray(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    filterEven
  )
);

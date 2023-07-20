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
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// const calculator = function (a, b, fn) {
//   return `Result of the operation is: ${fn(a, b)}`;
// };

// console.log(calculator(5, 7, divide));

//example-2
// function filterEven(arr) {
//   for (const [key, value] of arr.entries()) {
//     console.log(key, value);
//     if (value % 2 === 0) {
//       arr.splice(key, 1);
//     }
//   }
//   return arr;
// }

// const filterArray = function (arr, fn) {
//   return `The filtered array is: ${fn(arr)}`;
// };
// console.log(
//   filterArray(
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
//     filterEven
//   )
// );

//Function returning another function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet('hello');
// greeter('Shiv');
// greeter('Shivam');

// greet('hey')('Shiv');

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('Hola')('Shiv');

//The call and apply method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a ticket from ${this.airline} airline with number ${flightNum}`
//     );
//     this.bookings.push({
//       airline: this.airline,
//       code: this.iataCode,
//       passengerName: name,
//     });
//   },
// };

// lufthansa.book('LGH453', 'Shiv Pratap');

// const unionWings = {
//   airline: 'UnionWings',
//   iataCode: 'UW',
//   bookings: [],
// };
// const freedomAngels = {
//   airline: 'Freedom_Angels',
//   iataCode: 'FA',
//   bookings: [],
// };

// const bookIn = lufthansa.book;
// bookIn(23, 'Sarah Williams');  //------>bookIn is a regular function and not a method so this will be undefined in it

//Call Method on function
// bookIn.call(unionWings, 23, 'SarahWilliams');
// bookIn.call(freedomAngels, 56, 'Lucas Bloodborn');

//Apply method
// const customer = [56, 'Rias Grimmory'];
// bookIn.apply(unionWings, customer);
// bookIn.call(freedomAngels, ...customer); //same can be achieved with call method that's why apply is not used anymore

//Bind Method
// const customerUW = bookIn.bind(unionWings);
// customerUW(26, 'Hashwalth');
// const customerFA = bookIn.bind(freedomAngels);
// customerFA(56, 'Ichigo Kurosaki');
// const customerLA = bookIn.bind(lufthansa);
// customerLA(95, 'Mia Lancelot');

//Partial application in bind method
// const customerUW56 = bookIn.bind(unionWings, 56);
// const customerFA26 = bookIn.bind(freedomAngels, 26);
// const customerLA95 = bookIn.bind(lufthansa, 95);
// customerFA26('Albedos');
// customerLA95('Aria Icin');
// customerUW56('Denish Losther');

//With event handlers
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(`Total planes now are: ${this.planes}`);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//Challenge
// const addTax = (rate, value) => {
//   console.log(`Tax on defined rate is: ${value + value * rate}`);
//   return addTax.bind(null, 0.18);
// };

// addTax(300)(300);

//Challenge#1

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };
// const option = poll.options.join('\n');
// poll.registerNewAnswer = function () {
//   let i = true;
//   while (i) {
//     let answer = prompt(`${this.question}\n ${option}`);
//     if (answer >= 0 && answer <= 3) {
//       this.answers[answer] += 1;
//       i = false;
//     }
//   }
//   console.log(poll.displayResults.call(poll, 'string'));
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults = function (type) {
//   if (type === 'string') {
//     const str = this.answers.join(',');
//     return `Poll results are: ${str}`;
//   } else return this.answers;
// };

//IIFE (Immediately Invoked Function Expressions)

(function () {
  console.log('This function will run only once');
})(() => {
  console.log('This arrow function will also run only at once');
});

//Closures in JS

const bookPassengers = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = bookPassengers();
booker();
booker();

//Some examples of closures
//Example-1
let f;
const g = function () {
  const value = 10;
  f = function () {
    console.log(value * 2);
  };
};

g();
f(); //Even after g() is finished executing f() is able to access value varible

const h = function () {
  const value = 20;
  f = function () {
    console.log(value * 2);
  };
};
h();
f(); //Now the closure of f contain value = 20

//Example-2
const demo = function (n, groupStrength, timeInSecond) {
  const groups = n / groupStrength;
  setTimeout(function () {
    console.log(
      `After function is done executing this inner function is still able to access the closed over variable of demo called closures`
    );
    console.log(`There are ${n} passengers`);
    console.log(`There are ${groups} groups`);
  }, timeInSecond * 3000);

  console.log(`The function is done executing`);
};

demo(500, 50, 5);

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})(); // IIFE will be popped out after executing for once but a closure will be created for the eventHandler function that will carry the value of header variable even after iife is done executing

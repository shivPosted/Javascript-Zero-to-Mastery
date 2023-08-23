'use strict';

//making a constructor function, it is same as the normal function, but main difference is in calling the function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // this.calcAge = function () {
  //   return 2037 - birthYear;
  // };
};

//  4-steps that happen when we call a constructor function
//1. A New {} is created
//2. function is called and this will point to the created object
//3. {} is linked to the prototype
//4. function automatically returns the {}, which will no longer be empty after doing sth in constructor function with this

//The main diff between constructor and normal function is that constructor function is called with 'new'

const shiv = new Person('Shiv', 2003);
console.log(shiv);
const vishnu = new Person('Vishnu', 1998);
const brahma = new Person('Brahma', 1995);
console.log(vishnu, brahma);

//Prototypes
Person.prototype.calcAge = function () {
  //will set this function as the prototype property of the Person which can then be used by its instances
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

shiv.calcAge();
vishnu.calcAge();
brahma.calcAge();

console.log(shiv.__proto__);
console.log(shiv.__proto__ === Person.prototype); //as __proto__ is just a copy of the Person.prototype
console.log(Person.prototype.isPrototypeOf(Person)); // Person.prototype is not a prototype of Person but a property of it
console.log(Person.prototype.isPrototypeOf(shiv)); // it is true
console.log(shiv.hasOwnProperty('calcAge'));

Person.prototype.species = 'Homo Sepians';
console.log(shiv.species, vishnu.species);
console.log(shiv.hasOwnProperty('species'));

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};
Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

//classes are also a type of function in JS
//--> classes are not hoisted
// --> classes are first class citizens
// --> classes are executed in strict mode

//class expression
// const PersonCL = class {}
//class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //every method outside the constructor function will be a part of the .prototype property of the class

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const shivCL = new PersonCL('Shiv', 2003);
shivCL.calcAge();
console.log(shivCL.__proto__ === PersonCL.prototype);

PersonCL.prototype.greet = function () {
  console.log(`hi! ${this.firstName}`);
};

shivCL.greet();
console.dir(shivCL.__proto__);

const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const day = now.getDate();

const rqdAge = function (dMonth, dYear, dDay) {
  if (dMonth > month) {
    //year - dyear - 1;
    // dMonth - month
  }
};
// const rqdTimeStamp = Date.now() - DOB;

// const rqdDiff = function (stamp) {
//   const remainder = stamp / (1000 * 60 * 60 * 24 * 365);
//   console.log(remainder);
// };
// rqdDiff(rqdTimeStamp);

// const operations = [
//   '5469',
//   '+',
//   '98657',
//   '-',
//   '456',
//   '+',
//   '963',
//   '/',
//   '25',
//   '*',
//   '96',
// ].map(curr => {
//   if (!Number(curr)) return curr;
//   return Number(curr);
// });
// console.log(operations);

// // console.log(Number('+'));
// const rqd = operations.reduce((accum, curr, i, arr) => {
//   if (!Number(curr)) {
//     if (curr === '+') accum += arr[i + 1];
//     else if (curr === '-') accum -= arr[i + 1];
//     else if (curr === '*') accum *= arr[i + 1];
//     else accum /= arr[i + 1];
//     console.log(accum);
//     return accum;
//   }
//   return accum;
// });

// console.log(rqd);
// const arr = '456+968-9632*98/89+6325-96'.split(/[+  * /]/);
// console.log(arr);

//creating prototypes using Object.create()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const shivNew = Object.create(PersonProto); // will create PersonProto as a prototype for shivNew

shivNew.init('Shiv', 2003); // can use methods from PersonProto as it is its prototype created using Object.create()
shivNew.calcAge();

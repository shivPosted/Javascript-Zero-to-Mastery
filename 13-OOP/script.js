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

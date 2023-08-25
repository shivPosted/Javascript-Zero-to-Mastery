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
  this.speed = this.speed + 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
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

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }
  accelerate() {
    console.log(this.currentSpeed + 10);
  }
  brake() {
    console.log(this.currentSpeed - 5);
  }
  get speedUS() {
    return this.currentSpeed / 1.6; //using this.currentSpeed because we don't know which object will call getter
  }
  set speedUS(speed) {
    this.currentSpeed = speed * 1.6;
  }
}

const car1CL = new CarCl('Ford', 120);

console.log(car1CL.speedUS);
car1CL.speedUS = 130;
console.log(car1CL.currentSpeed); //in miles
car1CL.accelerate();
car1CL.brake();

/////////////////////////////////////////////////////////////////////

var createCounter = function (n) {
  let count = -1;
  return function () {
    count++;
    return count + n;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());

//////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

//Car class is defined above in code in challege #1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//set prototypal inheritance in classes at first because it will set the prototype to an empty object
EV.prototype = Object.create(Car.prototype);
const car1IN = new EV('Tesla', 140, 23);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
car1IN.chargeBattery(90);

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} is going at a speed of ${this.speed}km/hr, with a charge of ${this.charge}%`
  );
};

car1IN.chargeBattery(90);
car1IN.accelerate();
car1IN.accelerate();
car1IN.brake();
car1IN.brake();
console.log(car1IN.speed);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inheritance between classes using ES6 classes
class EVCL extends CarCl {
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.charge = charge;
  }
  accelerate() {
    this.currentSpeed = this.currentSpeed + 20;
    this.charge = this.charge - 1;
    console.log(
      `${this.make} is running at ${this.currentSpeed}km/hr at ${this.charge}% charge`
    );
  }
}

const car2CL = new EVCL('Tata', 90, 80);
console.log('Use of class inheritance with ES6 classes');
car2CL.accelerate();
car2CL.brake();

//An example of class and inheritance
class Account {
  //Public fields
  language = navigator.language;

  //private fields;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  //public methods

  //public interface API
  deposit(val) {
    this.#movements.push(val);
    console.log(this.#movements);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  getMovements() {
    return this.#movements;
  }

  //we need encapsulation because these methods can be manipulated by anyone
  #approveLoan() {
    return true;
  }
  requerstLoan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
}
const accountShiv = new Account('Shiv', 'INR', 4444);
accountShiv.deposit(5000);
accountShiv.withdraw(1000);
accountShiv.requerstLoan(10000);

//can't access private fields
// accountShiv.#approveLoan(); // this will be a private field
// console.log(accountShiv.#pin);

console.log(accountShiv.getMovements());

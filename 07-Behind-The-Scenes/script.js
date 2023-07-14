'use strict';

var x = 5;

function myFunction() {
  var y = 10;
  console.log(x); // What will be printed?
}

myFunction();

function outerFunction() {
  var x = 5;

  function innerFunction() {
    var y = 10;
    console.log(x); // What will be printed?
  }

  innerFunction();
}

outerFunction();

function myFunction2() {
  if (true) {
    var x = 5;
    let y = 10;
  }

  console.log(x); // What will be printed?
  // console.log(y); // What will be printed?
}

myFunction2();

var x = 5;

var myFunction3 = function () {
  var x = 10;
  console.log(x); // What will be printed?
};

myFunction3();

function outerFunction1() {
  var x = 5;

  function innerFunction() {
    console.log(x); // What will be printed?
  }

  return innerFunction;
}

var inner = outerFunction1();
inner();

function outerFunction2() {
  var x = 10;

  function innerFunction() {
    var y = 5;

    function deepInnerFunction() {
      console.log(x + y); // What will be printed?
    }

    deepInnerFunction();
  }

  innerFunction();
}

outerFunction2();

/*Hoisting*/

console.log(i); // What will be printed?
var i = 5;

myFunction4(); // What will happen?

function myFunction4() {
  console.log('Hello!');
}

// myFunction5(); // What will happen?

// var myFunction5 = function () {
//   console.log('Hello!');
// };

// if (true) {
//   console.log(x); // What will happen?
//   let x = 5;
// }

/*this keyword*/

console.log(this);

function calcAge(birthYear) {
  console.log(2043 - birthYear);
  console.log(this); //will be undefined only in strict mode
}
calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2043 - birthYear);
  console.log(this); //will be window object because arrow function doesn't have their own this keyword but get it from their parent in this case window object
};

calcAgeArrow(2003);

const f = function () {
  console.log(this.name);
  console.log(this.year);
  console.log(2037 - this.year);
};

const shiv = {
  firstName: 'Shiv',
  year: 2001,
  calcAge: f,
};

shiv.calcAge(); //this will point to the object which call the method

const john = {
  name: 'john',
  year: 2005,
};

john.calcAge = shiv.calcAge;

console.log(john);

john.calcAge();

f();

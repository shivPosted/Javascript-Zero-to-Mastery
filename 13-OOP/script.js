'use strict';

//making a constructor function, it is same as the normal function, but main difference is in calling the function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function () {
    return 2037 - birthYear;
  };
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

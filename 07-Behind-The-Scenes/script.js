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

// let js = "amazing";

// let firstName = "Shiv";
// let lastName = "Pratap";
// let PI = 3.1415;                        //for constant values use  all caps

// console.log(js);
// console.log(firstName);
// console.log(lastName);

// console.log(3000);

// let $result = "fail";                   //can only use $ sign in variable name in special characters
// console.log($result);


/*
let isJsFun = true;

console.log(isJsFun);
console.log(typeof isJsFun);

isJsFun = "Yes";                                            //example of dynamic typing in js
console.log(isJsFun)
console.log(typeof isJsFun);

let string01;                                       //undefined value
console.log(string01);
console.log(typeof string01);

console.log(typeof null);  */                                         // a bug in JS that null is an object type


// let age = 21;
// age = 22;                                           //mutable in case of let 

// const BIRTH_YEAR = 2001;
// BIRTH_YEAR = 2003;                                              //immutable in const will give an error

// var familia = "Rajput"
// console.log(familia);                                       //looks like let but don't use it

// const firstName = "Shiv";
// const JOB = "Student";
// const BIRTH_YEAR = 2003;
// const PRESENT_YEAR = 2023;

// console.log("Hello I am " + firstName + " and I am a " + (PRESENT_YEAR - BIRTH_YEAR) + " year old " + JOB);

const AGE = 16;
const isOldEnough = AGE >= 18;
if (isOldEnough) {
    console.log(`You are elligible for driving license 😀`);
}
else
    console.log(`You are not elligible for driving there are still ${18 - AGE} years left 😢`);

let century;
const BIRTH_YEAR = 1996;
if (BIRTH_YEAR >= 2000) {
    century = 21;
} else {
    century = 20;
}

console.log(`Born in ${century} century`);
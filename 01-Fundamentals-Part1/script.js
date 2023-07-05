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

// const AGE = 16;
// const isOldEnough = AGE >= 18;
// if (isOldEnough) {
//     console.log(`You are elligible for driving license 😀`);
// }
// else
//     console.log(`You are not elligible for driving there are still ${18 - AGE} years left 😢`);

// let century;
// const BIRTH_YEAR = 1996;
// if (BIRTH_YEAR >= 2000) {
//     century = 21;
// } else {
//     century = 20;
// }
// console.log(`Born in ${century} century`);



//type conversion

// let inputFieldValue = "2003";
// console.log(inputFieldValue, typeof inputFieldValue);
// console.log(Number(inputFieldValue), inputFieldValue);
// console.log(inputFieldValue + 18);
// console.log(Number(inputFieldValue) + 18);

// let age = 18;

// console.log(String(age), age);

//type coersion

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('9' - '5' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2); 



//truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN       everthing else is truthy values

// console.log(Boolean(0));
// console.log(Boolean(125));
// console.log('Shiv');
// let name = '';
// console.log('');
// let fullName;
// console.log(fullName);

// let money = 0;

// if (money) {
//     console.log("You are not broke yet");
// } else {
//     console.log("You are broke");
// }

// let height;

// if (height) {
//     console.log("YESH! Height is defined ⚖️");
// } else {
//     console.log("Hight is not defined 🫥");
// }




// == and ===

const favouriteNumber = Number(prompt("What is your favourite Number?"));                               //prompt will return a string
if (favouriteNumber === 23) {
    console.log("23 is a cool number");
} else if (favouriteNumber === 18) {
    console.log("Its slightly less cool number");
}
else {
    console.log("This number is not cool at all");
}
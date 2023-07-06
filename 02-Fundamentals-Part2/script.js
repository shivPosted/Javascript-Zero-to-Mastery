'use strict';

/*let hasDriversLisence = false;
const passedTest = true;

if (passedTest) hasDriversLisence = true;
if (hasDriversLisence) console.log("I can drive now :D");*/

/*function callOutMyName() {
    console.log("My name is Shiv");
}

callOutMyName();
callOutMyName();
callOutMyName();

function juicer(apples, oranges) {
    const JUICE_OF = `Here is juice of ${apples} apples and ${oranges} oranges`;
    return JUICE_OF;
}

const APPLE_JUICE = juicer(3, 0);
console.log(APPLE_JUICE);

const APPLE_AND_ORANGE_JUICE = juicer(6, 5);
console.log(APPLE_AND_ORANGE_JUICE);*/

//arrow function

/*const ageArrow = birthYear => 2023 - birthYear;

const AGE = ageArrow(2001);
console.log('Your age is ' + AGE);*/

//function calling other function

/*function juicer(apples, oranges) {
    const applePieces = pieces(apples);
    const orangePieces = pieces(oranges);
    const JUICE_OF = `Here is juice from ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return JUICE_OF;
}

const pieces = function (qty) {
    return qty * 4;
}

console.log(juicer(4, 3));*/



//Arrays

/*const EMOJIS = ['😀', '🍪', '🪸', '😉'];
const EMOJIS_NUMBERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];

console.log(EMOJIS);
console.log(EMOJIS_NUMBERS[1]);

const legthNow = EMOJIS.push('😇');
const lengthNow2 = EMOJIS.unshift('🤗');

console.log(EMOJIS);
console.log(legthNow, lengthNow2);
const POPPED1 = EMOJIS_NUMBERS.pop();
const POPPED2 = EMOJIS_NUMBERS.shift();

console.log(EMOJIS_NUMBERS);
console.log(POPPED1, POPPED2);


console.log(EMOJIS.indexOf('😇'));
console.log(EMOJIS.includes('🪸'));*/


//Objects

const shiv = {
    firstName: 'Shiv',
    lastName: 'Pratap',
    profession: 'student',
    age: 2023 - 2001,
    friends: ['LalChand', 'Dheeraj', 'Adit', 'Shivam']
}

const wantToKnow = prompt('What do you want to know about me? Choose from firstName, lastName, profession, age, and friends');

if (!shiv[wantToKnow]) {
    console.log('Wrong Choice! Choose from firstName, lastName, profession, age, and friends');
}
else {
    console.log(shiv[wantToKnow]);
}

shiv.friends.unshift('Anonymous');
console.log(shiv.friends);

console.log(`${shiv.firstName} has ${shiv.friends.length} friends and his best friend is ${shiv.friends[2]}`);
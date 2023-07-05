'use strict';

/*let hasDriversLisence = false;
const passedTest = true;

if (passedTest) hasDriversLisence = true;
if (hasDriversLisence) console.log("I can drive now :D");*/

function callOutMyName() {
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
console.log(APPLE_AND_ORANGE_JUICE);
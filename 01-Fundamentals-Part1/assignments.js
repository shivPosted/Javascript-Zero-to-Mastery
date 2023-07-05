//assignment-01
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "India";
const continent = "Asia";
let population = 1406;
// console.log("result of assignment-01")
// console.log(country);
// console.log(continent);
// console.log(population  + "millions");


//Assignment-02
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
let language;
// console.log("assignment");
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);

//Assignment-03
// 1. Set the value of 'language' to the language spoken where you live (some
//     countries have multiple languages, but just choose one)
//     2. Think about which variables should be const variables (which values will never
//     change, and which might change?). Then, change these variables to const.
//     3. Try to change one of the changed variables now, and observe what happens


// console.log("Assignmet");
language = "Hindi";
// country = "UK";


//Assignment-04
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
/*console.log("Assignment-04");
let populationHalf = population / 2;
console.log(populationHalf);

console.log(population + 1);

let populationFinland = 6;
let populationFinlandIsGreater = populationFinland > population;

console.log("The population of finland is grater than my country, this statement is " + populationFinlandIsGreater);

let populationLessThanAverage = 33 > population;
console.log("The population of my country is less than average is " + populationLessThanAverage);
// let description = country + " is in " + continent + ", and its " + population + " million people speaks " + language;
// console.log(description);*/

// console.log("Challenge#01");
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);
// console.log("Mark's BMI: " + BMIMark + " John's BMI: " + BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log("Is Mark's BMI higher than John is " + markHigherBMI);


/*console.log("Assignment-05");
const DESCRIPTION = `${country} is in ${continent} and its ${population} million people speaks ${language}`;
console.log(DESCRIPTION);*/


// console.log("Assignment-06");
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


// if (population >= 33) {
//     console.log(`${country}'s population is above average`);
// }
// else {
//     console.log(`${country}'s population is ${population} million below average`);
// }


// console.log("Assignment-07");

// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('9' - '5' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);                               //this one is a bit tricky



// console.log("Assignment-08");

// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

/*const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");*/

/*console.log("Assignment-09");
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreKoalas > scoreDolphins) console.log("Koalas win the trophy");
else console.log("Both win the trophy");

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;

if ((scoreDolphins > scoreKoalas) && scoreDolphins >= 100) console.log("Dolphins win the trophy");
else if ((scoreKoalas > scoreDolphins) && scoreKoalas >= 100) console.log("Koalas win the trophy");
else console.log("Both win the trophy");

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;

if ((scoreDolphins > scoreKoalas) && scoreDolphins >= 100) console.log("Dolphins win the trophy");
else if ((scoreKoalas > scoreDolphins) && scoreKoalas >= 100) console.log("Koalas win the trophy");
else if (scoreDolphins >= 100 && scoreKoalas >= 100) console.log("Both win the trophy");                    //the only case left is both are equal so no need to check that
else {
    console.log("No One wins the trophy");
}*/

console.log("Assignment-10");
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

const LANGUAGE = 'hindi';

switch (LANGUAGE) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
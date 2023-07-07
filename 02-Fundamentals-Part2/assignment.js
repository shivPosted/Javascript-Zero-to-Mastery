'use strict';

// console.log('Assignment-12');
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

/*function describeCountry(country, population, capitalCity) {
    const value = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return value;
}

const VALUE1 = describeCountry('India', 1406, 'Delhi');
const VALUE2 = describeCountry('UK', 20, 'London');
const VALUE3 = describeCountry('USA', 50, 'Washington DC');

console.log(VALUE1);
console.log(VALUE2);
console.log(VALUE3);*/



// console.log('Assignment-13');
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)


//function declaration
/*function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const PERCENTAGE_VALUE_1 = percentageOfWorld1(1441);
const PERCENTAGE_VALUE_2 = percentageOfWorld1(500);
const PERCENTAGE_VALUE_3 = percentageOfWorld1(14);

console.log(PERCENTAGE_VALUE_1 + "%");
console.log(PERCENTAGE_VALUE_2 + "%");
console.log(PERCENTAGE_VALUE_3 + "%");


//function expression
const PERCENTAGE_1 = function percentageOfWorld2(population) {
    return (population / 7900) * 100;
}

const VALUE_1 = PERCENTAGE_1(1441);
const VALUE_2 = PERCENTAGE_1(500);
const VALUE_3 = PERCENTAGE_1(14);
console.log(VALUE_1);
console.log(VALUE_2);
console.log(VALUE_3);*/


// console.log('Assignment-14');

// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

/*const percentageOfWorld3 = population => (population / 7900) * 100;

const VALUE_01 = percentageOfWorld3(100);
const VALUE_02 = percentageOfWorld3(200);
const VALUE_03 = percentageOfWorld3(1200);

console.log(`The country01 population is ${VALUE_01} % of the world`);
console.log(`The country02 population is ${VALUE_02} % of the world`);
console.log(`The country03 population is ${VALUE_03} % of the world`);*/

// console.log('Assignment-15');

// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// const describePopulation = (country, population) => `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world`;
// console.log(describePopulation('India', 1441));



// CHALLENGE #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!


// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

/*const calcAverage = (score1, score2, score3) => (score1+score2+score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win (${avgeDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= avgDolphins*2){
      console.log (`Kolas win (${avgKoalas} vs. ${avgDolphins})`) ;
    }
    else {
    console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/


/*console.log('Assignment-16');

// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

const POPULATIONS = [1440, 50, 100, 95];
console.log(POPULATIONS.length === 4);
const percentageOfWorld1 = population => (population / 7900) * 100;
const percentage1 = percentageOfWorld1(POPULATIONS[0]);
const percentage2 = percentageOfWorld1(POPULATIONS[1]);
const percentage3 = percentageOfWorld1(POPULATIONS[2]);
const percentage4 = percentageOfWorld1(POPULATIONS[POPULATIONS.length - 1]);
const PERCENTAGES = [percentage1, percentage2, percentage3, percentage4];
console.log(PERCENTAGES);*/


// CHALLENGE #2


// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

/*const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}

const TIP = calcTip(100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];*/

// console.log('Assignment-17');

// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.


/*const NEIGHBOURS = ['Bangladesh', 'Sri-Laka', 'Nepal', 'Bhutan', 'China'];
NEIGHBOURS.push('Utopia');
NEIGHBOURS.pop();

if (!NEIGHBOURS.includes('Germany')) {
    console.log('Probably not a cetral European Country');
}

const changingCountryName = NEIGHBOURS.indexOf('China');
NEIGHBOURS[changingCountryName] = 'Dragon';

console.log(NEIGHBOURS);*/





// console.log('Assignment-18');

// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

/*const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1440 + ' million',
    neighbours: ['Bangladesh', 'Sri-Laka', 'Nepal', 'Bhutan', 'China']
}*/



// console.log('Assignment-19');

// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbour countries and a capital called ${myCountry.capital}`);




/*console.log('Assignment-20');

// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1440 + ' million',
    neighbours: ['Bangladesh', 'Sri-Laka', 'Nepal', 'Bhutan', 'China'],
    describe: function () {
        console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbour countries and a capital called ${this.capital}`)
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0;
        return this.isIsland;

    }
}

myCountry.describe();
const answer = myCountry.checkIsland();
console.log(answer);*/



/*console.log('Assignment-21');

// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let i = 0; i < 50; i++) {
    console.log(`Voter number ${i + 1} is currently voting`);
}*/




console.log('Assignment-21');

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

const POPULATIONS = [1440, 50, 100, 95];
const percentage2 = [];
for (let i = 0; i < POPULATIONS.length; i++) {
    percentage2.push(percentageOfWorld1(i));
}

function percentageOfWorld1(index) {
    const percentage = (POPULATIONS[index] / 7490) * 100;
    return percentage;
}

console.log(percentage2);
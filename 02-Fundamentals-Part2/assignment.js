'use strict';

console.log('Assignment-12');
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



console.log('Assignment-13');
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
function percentageOfWorld1(population) {
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
console.log(VALUE_3);
'use strict';
// Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + ' String!';

// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
editInPlace();

// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const [...copyDogsJulia] = dogsJulia;
//   const [...copyDogsKate] = dogsKate;
//   copyDogsJulia.splice(-2, 2);
//   copyDogsJulia.splice(0, 1);
//   copyDogsJulia.concat(copyDogsKate).forEach(function (value, i) {
//     const dogOrPuppy = value >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${i + 1} is ${dogOrPuppy}`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = (...arr) =>
  arr
    .map(elem => (elem <= 2 ? 2 * elem : 16 + elem * 4))
    .filter(elem => elem >= 18)
    .reduce((accum, current, index, arr) => accum + current / arr.length, 0);

console.log(calcAverageHumanAge(...data1, ...data2));

// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.table(inventors.filter(elem => elem.year > 1500 && elem.year < 1600));
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log(inventors.map(elem => elem.first + ' ' + elem.last));
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log(inventors.map(elem => elem.year).sort((a, b) => b - a));

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log(
  inventors.reduce(
    (accum, current) => accum + (current.passed - current.year),
    0
  )
);
// 5. Sort the inventors by years lived
console.table(
  inventors.sort((a, b) => b.passed - b.year - (a.passed - a.year))
);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const half = people.map(current => (current + ',').split(' '));
console.log(
  half
    .map(current => current[1] + current[0])
    .map(current => current.slice(0, current.length - 1).replace(',', ', '))
    .sort()
);

// .map((_, _, arr) => arr[1] + arr[0])
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1.
dogs.forEach(function (current) {
  current.recommendedFood = Math.trunc(current.weight ** 0.75 * 28);
});
//2.
const index = dogs.findIndex(current => current.owners.includes('Sarah'));
console.log(index);

console.log(
  dogs[index].curFood > dogs[index].recommendedFood
    ? 'Dog is eating too much'
    : 'Dog is eating too little'
);
// dogs[].
//3.
let ownersEatTooMuch = [];
let ownersEatTooLess = [];
const eatingMuchLittle = function (arr) {
  arr.forEach(function (current) {
    current.curFood > current.recommendedFood
      ? ownersEatTooMuch.push(current.owners)
      : ownersEatTooLess.push(current.owners);
  });
  ownersEatTooLess = ownersEatTooLess.flat();
  ownersEatTooMuch = ownersEatTooMuch.flat();
};

eatingMuchLittle(dogs);

console.log(ownersEatTooLess, ownersEatTooMuch);

//4.
const printTooMuchLittle = function (arr, str) {
  let rqdStr = '';
  arr.forEach(function (current, i, arr) {
    i !== arr.length - 1
      ? (rqdStr += current + ' and ')
      : (rqdStr += current + ` ${str}`);
  });
  return rqdStr;
};

console.log(printTooMuchLittle(ownersEatTooMuch, 'eat to much'));
console.log(printTooMuchLittle(ownersEatTooLess, 'eat too little'));

//5.
console.log(dogs.some(current => current.recommendedFood === current.curFood));
//6.
console.log(
  dogs.some(
    current =>
      current.curFood >= current.recommendedFood * 0.9 &&
      current.curFood <= current.recommendedFood * 1.1
  )
);

//7.
const okayDogs = dogs.filter(
  current =>
    current.curFood >= current.recommendedFood * 0.9 &&
    current.curFood <= current.recommendedFood * 1.1
);
console.log(okayDogs);

//8.
const sortedByRecommended = dogs.sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(sortedByRecommended);

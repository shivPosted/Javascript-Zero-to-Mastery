'use strict';
/* Data used in exercises */
/*const books = [
  {
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: ['fantasy', 'high-fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
  },
  {
    title: 'The Cyberiad',
    publicationDate: 1965,
    author: 'Stanislaw Lem',
    genres: ['science fiction'],
    otherLanguagesTitle: {
      polish: 'Cyberiada',
      spanish: 'Ciberiada',
      french: 'Cybériade',
    },
  },
  {
    title: 'Dune',
    publicationDate: 1965,
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {},
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
  },
  {
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
  },
];*/

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

// const getBooksByGenre = genre =>
//   books.filter(book => book.genres.includes(genre));
// const getBooksAsArrays = () => books.map(book => Object.entries(book));
// const getBookAuthors = () => books.map(book => book.author);
// /*
//  *  ********************************************
//  *  2) DESTRUCTURING OBJECTS                    *
//  *  ********************************************
//  */

/* A) Take the first object from the 'books' array, and assign the author to the 'author' variable using destructuring.
      Use the 'let' statement because the 'author' variable may change later. */

/* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */

/* C) The book objects aren't consistent in their form.
      For example, the second book doesn't have the 'filmAdaptation' property.
      Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */

/* D) Remember the 'author' variable from exercise A? It's time to reassign it.
      Destructure the author of the third book into existing variable called 'author'. */

// let { author } = books[0];

// console.log(author);

// let { title: bookTitle } = books[1];
// console.log(bookTitle);

// let { hasFilmAdoptation = false } = books[1];
// console.log(hasFilmAdoptation);

// ({ author } = books[2]);
// console.log(author);
// /*
//  *  ********************************************
//  *  1) DESTRUCTURING ARRAYS                    *
//  *  ********************************************
//  */

/* A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
      Leave the rest of the books unused. */

/* B) The second and third books are science fiction.
      Assign these books to the variables called 'second' and 'third' using destructuring. */

/* D) Are you ready for some hard-core destructuring? 😄
      The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
      Now, you have an array of arrays of arrays.
      Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */

//Solution 1

// const [a, b, c, d] = books;
// console.log(a, b, c, d);

/*Solution 2*/

// const [, second, third] = books;
// console.log(second, third);

/*Solution 3*/
// const [, [[, title]]] = getBooksAsArrays();
// console.log(title);

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

/* A) The getBookAuthors() function returns an array of authors from the 'books' array.
      Reassign the 'authors' variable below so that it contains both — already existing authors,
      and authors returned from the getBookAuthors() function. Use the spread syntax. */
// let authors = ['George Orwell', 'Aldous Huxley'];
// const gotAuthors = getBookAuthors();
// authors.push(...gotAuthors);
// console.log(authors);

/* B) The console.log() method can take multiple arguments and log them to the console.
            First, log the 'authors' array as it is (as one argument).
            Second, log the elements of the 'authors' array, but this time use the spread syntax.
            Compare the outputs. */
// console.log(authors);
// console.log(...authors);

/* C) The spread syntax can be used with other iterables, for example, strings.
            Create a new variable called 'firstNameArray', and spread the 'firstName' string
            so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */
// const firstName = 'Shiv';
// const firstNameArray = [...firstName];
// console.log(firstNameArray);
// console.log(...firstNameArray);

/* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
            and assign an object to it. This object should have all the properties of the second book from the 'books' array,
            plus the missing 'filmAdaptation' property set to false. */
// const cyberiad = {
//   ...books[1],
//   filmAdaptation: false,
// };
// console.log(cyberiad);

/*
 *  ********************************************
 *  4) REST PATTERN AND PARAMETERS             *
 *  ********************************************
 */

/* A) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
      Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
      and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */

/* B) This time you'll write a function utilizing the power of rest parameters.
      This function named as list() should output a list with a title to the console.
      The first argument it takes is the "title" of the list (string),
      the rest of arguments are list "items" (as many as you want) that will be displayed under the title.
      Example:
      list('My favorite books', 'Brave New World', 'The Great Gatsby', 'Pride and Prejudice');
      Output:
      My favorite books:          <-- title
      1) Brave New World          <-- list item
      2) The Great Gatsby         <-- list item
      3) Pride and Prejudice      <-- list item
      ...
     */

// const [theLordOfTheRings, ...otherFantasyBooks] = getBooksByGenre('fantasy');
// console.log(theLordOfTheRings, otherFantasyBooks);

// function list(title, ...items) {
//   console.log(title);
//   for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//   }
// }

// const listItems = [
//   'My favourite books:',
//   '1)Brave New World',
//   '2)The Great Fantasy',
//   '3)Pride and Prejudice',
//   '...',
// ];
// list(...listItems);

/*
 *  ********************************************
 *  5) SHORT CIRCUITING (&& and ||)            *
 *  ********************************************
 */

/* A) Each book has the 'otherLanguagesTitle' property, which stores an object containing the language as a key,
      and the title of the book in that language as a value.
      Example 'otherLanguagesTitle' property:
      otherLanguagesTitle: {
        spanish: 'El señor de los anillos',
        chinese: '魔戒',
        french: 'Le Seigneur des anneaux'
      }
      Write a function called 'getTitleInSpanish' that takes a 'book' object as an argument,
      and returns a title in Spanish or a string "No data available" if there is no title in Spanish.
      Using the 'if' statement or the ternary operator is not allowed. */
// function getTitleInSpanish(book) {
//   return book.otherLanguagesTitle.spanish || 'No Data  Available';
// }

// const book = {
//   otherLanguagesTitle: {
//     spanish: 'El señor de los anillos',
//     chinese: '魔戒',
//     french: 'Le Seigneur des anneaux',
//   },
// };
// const book02 = {
//   otherLanguagesTitle: {
//     chinese: '魔戒',
//     french: 'Le Seigneur des anneaux',
//   },
// };
// console.log(getTitleInSpanish(book));
// console.log(getTitleInSpanish(book02));
/* B) Loop over the 'books' array, and for each book check if it has the title in Spanish and Korean.
      If it's true, log a string "<title> by <author> has title in Spanish and Korean" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */
// console.log('Solution B');
// function inSpanishAndKorean(books) {
//   for (let i = 0; i < books.length; i++) {
//     const rstr =
//       books[i].otherLanguagesTitle.spanish &&
//       books[i].otherLanguagesTitle.korean &&
//       `${books[i].title} by ${books[i].author} has translation in Spanish and Korean`;
//     console.log(rstr);
//   }
// }
// inSpanishAndKorean(books);

/* C) Loop over the 'books' array, and for each book check if it has the title in Portuguese or Spanish, but not in both.
      If it's true, log a string "<title> by <author> has title in Portuguese or Spanish, but not in both" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */
// console.log('Solution C');
// function inSpanishOrPortuguese(books) {
//   for (let i = 0; i < books.length; i++) {
//     const rstr =
//       books[i].otherLanguagesTitle.spanish &&
//       books[i].otherLanguagesTitle.portuguese &&
//       `${books[i].title} by ${books[i].author} has translation in Spanish and Korean`;
//     console.log(rstr);
//   }
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// GOOD LUCK 😀

//1.
// console.log('Challenge#1');
// const {
//   players: [players1, players2],
// } = game;
// console.log(players1, players2);
//2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
//3.
// const [...allPlayers] = [...players1, ...players2];
// console.log(allPlayers);
//4.
// const [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
//5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
//6.
// function printGoals(...players) {
//   console.log('The goals were scored by:-');
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log('Number of players scored are:-' + players.length);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
//7.
// team1 > team2 && console.log('Team 2 is more likely will win');
// team1 < team2 && console.log('Team 1 is more likely will win');

/** Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀*/
//1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
//2.
// console.log(Object.values(game.odds));
// let total = 0;
// for (const odd of Object.values(game.odds)) {
//   total += odd;
// }
// console.log(Math.trunc(total / Object.values(game.odds).length));
//3
// for (const [team, odds] of Object.entries(game.odds)) {
//   const str =
//     team === 'x'
//       ? `The odds of draw is ${odds}`
//       : `The odds of winning of ${game[team]}: ${odds}`;
//   console.log(str);
// }
//4.
// const scorers = {
//   [game.scored[0]]: 2,
//   [game.scored[1]]: 1,
//   [game.scored[3]]: 1,
// };
// console.log(scorers);

/** 
 Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, it was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
GOOD LUCK 😀
*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const [...events] = new Set(gameEvents.values());
console.log(events);
//2.
gameEvents.delete(64);
console.log(gameEvents);
//3.
console.log(
  `An event haapend, on average, every ${90 / gameEvents.size} minutes`
);
//4.
for (const [time, event] of gameEvents.entries()) {
  console.log(
    time <= 45
      ? `[First Half]${time}: ${event}`
      : `[Second Half] ${time}: ${event}`
  );
}

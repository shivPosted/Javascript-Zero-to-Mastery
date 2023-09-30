//importing module
// import { addToCart as AC, shoppingCart as SC } from './shoppingCart.js';
// AC('Butter', 10);
// console.log(SC);

import * as ShoppingCart from './shoppingCart.js'; //importing all the exports at the sametime //ShoppingCart will be an Object and that will store all properties from shoppingCart.js
console.log('Importing Module');

ShoppingCart.addToCart('Butter', 10);
console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js'; //importing default export, don't use curylbraces for default exports
add('burger', 5);

import objToStr from './node_modules/lodash-es/_objectToString.js';

// const obj01 = {
//   name: 'Shiv',
//   profession: 'student',
//   stream: 'computer-science',
//   hobby: 'exercise',
// };
const d01 = 23567895;

const obj01res = objToStr(d01);
console.log(obj01res);

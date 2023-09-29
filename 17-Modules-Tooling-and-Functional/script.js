//importing module
// import { addToCart as AC, shoppingCart as SC } from './shoppingCart.js';
// AC('Butter', 10);
// console.log(SC);

import * as ShoppingCart from './shoppingCart.js'; //importing all the exports at the sametime //ShoppingCart will be an Object and that will store all properties from shoppingCart.js
console.log('Importing Module');

ShoppingCart.addToCart('Butter', 10);
console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js'; //importing default export
add('burger', 5);

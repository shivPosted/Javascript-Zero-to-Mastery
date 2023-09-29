//exporting module
console.log('Exporting Module');

const shoppingCart = 10;
const cart = [];
const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} are added to the cart`);
};

export { addToCart };

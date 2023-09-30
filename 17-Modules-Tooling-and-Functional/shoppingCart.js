//exporting module
console.log('Exporting Module');

const totalPrice = 10;
const cart = [];
const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} are added to the cart`);
};

export { addToCart, totalPrice }; // export should be used as the top level code, export-import works as live connection  //named exports

export default function (item, quantity) {
  //default exports it will pass the whole value and we can then import it in another module by any name we want except the name already present in the export module
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} are added to the cart`);
}

const result = await fetch('https://jsonplaceholder.typicode.com/todos'); //top level await without using async function
const data = await result.json();
console.log(data);

const topFunction = async function (data) {
  return { title: data.at(-1).title, isCompleted: data.at(-1).completed };
};

//not very efficient way
// topFunction(data).then(res => console.log(res));

const newObj = await topFunction(data);
console.log(newObj);

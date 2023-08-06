'use strict';

///////////////////////////////////////
// Modal window

const openModal = document.querySelectorAll('.open-panel');
const panel = document.querySelector('.open-account-panel');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-btn');

const header = document.querySelector('.header');
// console.log(openModal);

const openPanel = function (e) {
  e.preventDefault();
  panel.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('clicked');
};

openModal.forEach(btn => {
  btn.addEventListener('click', openPanel);
});

const closePanel = function () {
  panel.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closePanel);

document.body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !panel.classList.contains('.hidden')) {
    closePanel();
  }
});

overlay.addEventListener('click', closePanel);

//selecting elements in DOM
// console.log(document); //it will contain our whole document html document
console.log(document.documentElement); // it will contain only the element inside the whole document // body and head
console.log(document.body);
console.log(document.head);

//selecting elements
const allSections = document.getElementsByClassName('section'); //Returns a HTML collection rather than a nodelist
console.log(allSections);
const allLinks = document.getElementsByTagName('a');
console.log(allLinks);

//Creating elements
const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML =
  'We use cookies for better experience and security so that we can provide you the best! <a href = "" class= "cookie-close open-account">Got it</a>';

console.log(cookieMessage);

//Inserting elements
header.prepend(cookieMessage); //will add element to the start of the mentionned element
header.append(cookieMessage); //as the element is already appended it will just move the element from the start to the end of the mentioned element

//deleting the element

document.querySelector('.cookie-close').addEventListener('click', e => {
  e.preventDefault();
  cookieMessage.remove(); //is used to remove the element from the document  / we can alse use dom traversal for it too
});

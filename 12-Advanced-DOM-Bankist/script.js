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
  'We use cookies for better experience and security so that we can provide you the best! <a href = "" class= "open-account" id = "cookie-close">Got it</a>';

console.log(cookieMessage);

//Inserting elements
header.prepend(cookieMessage); //will add element to the start of the mentionned element
header.append(cookieMessage); //as the element is already appended it will just move the element from the start to the end of the mentioned element

//deleting the element

document.querySelector('#cookie-close').addEventListener('click', e => {
  e.preventDefault();
  cookieMessage.remove(); //is used to remove the element from the document  / we can alse use dom traversal for it too
});

//styles, attributes,classes

cookieMessage.style.backgroundColor = 'rgb(55, 56, 61)';
cookieMessage.style.width = '100%';
cookieMessage.style.color = 'rgba(255, 255, 255, 0.532)';
console.log(cookieMessage.style.fontSize); //it will return an empty string because it will return style applied manually or that are inline
// console.log(getComputedStyle(cookieMessage).fontSize);

cookieMessage.style.fontSize =
  Number.parseInt(getComputedStyle(cookieMessage).fontSize) / 10 + 0.2 + 'rem';

//Scrolling

const btnScroll = document.querySelector('.learn-more');
const sectionScroll = document.getElementById('section--1');

btnScroll.addEventListener('click', function (e) {
  e.preventDefault();
  const s1Coord = sectionScroll.getBoundingClientRect(); //It will return an object containing some properties regarding coordinates of the element
  console.log(s1Coord);
  console.log(
    'From left and top based on viewport co-ordinates are: ',
    s1Coord.left, //----------------------> in relation to the viewport
    s1Coord.top
  );

  console.log(
    'Current scroll position from left and top: ',
    //   window.pageXOffset, //------------->It is the older version of calculating the current scroll position but is useful for older browser
    //   window.pageYOffset
    window.scrollX,
    window.scrollY
  );

  console.log(
    'Width and height of the viewPort is: ',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  //applying scrolling
  // window.scrollTo(s1Coord.left, s1Coord.top); //it will scroll to absolute x and y postion on the document from top left and from top of the document

  //Scrolling without smooth behaviour
  // window.scrollTo(
  //   s1Coord.left + window.pageXOffset,
  //   s1Coord.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coord.left + window.pageXOffset,
  //   top: s1Coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //New way of applying smooth scrolling
  sectionScroll.scrollIntoView({ behavior: 'smooth' });
});

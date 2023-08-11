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
// const allSections = document.getElementsByClassName('section'); //Returns a HTML collection rather than a nodelist
// console.log(allSections);
// const allLinks = document.getElementsByTagName('a');
// console.log(allLinks);

//Creating elements
const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML =
  'We use cookies for better experience and security so that we can provide you the best! <a href = "" class= "open-account" id = "cookie-close">Got it</a>';

console.log(cookieMessage);

//Inserting elements
// header.prepend(cookieMessage); //will add element to the start of the mentionned element
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
const sectionScroll = document.getElementById('section--2');

// btnScroll.addEventListener('click', function (e) {
//   e.preventDefault();
//   const s1Coord = sectionScroll.getBoundingClientRect(); //It will return an object containing some properties regarding coordinates of the element
//   console.log(s1Coord);
//   console.log(
//     'From left and top based on viewport co-ordinates are: ',
//     s1Coord.left, //----------------------> in relation to the viewport
//     s1Coord.top
//   );

// console.log(
//   'Current scroll position from left and top: ',
//   window.pageXOffset, //------------->It is the older version of calculating the current scroll position but is useful for older browser
//   window.pageYOffset
//   window.scrollX,
//   window.scrollY
// );

// console.log(
//   'Width and height of the viewPort is: ',
//   document.documentElement.clientWidth,
//   document.documentElement.clientHeight
// );

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
// sectionScroll.scrollIntoView({ behavior: 'smooth' });
// });

btnScroll.addEventListener('click', function (e) {
  e.preventDefault();
  sectionScroll.scrollIntoView({ behavior: 'smooth' });
});
//EVENT AND EVENTHANDLERS
// const h1 = document.querySelector('h1');

// const mouseEvent = function () {
//   alert('Mouse event triggered');
// };

//most used event handler and newer way because it can be removed later in the code and is dynamic
// h1.addEventListener('mouseenter', mouseEvent);

//old school way of handling events

// h1.onmouseenter = mouseEvent; //----------> not used anymore

//removing eventlistener above

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', mouseEvent);
// }, 5000);

//Event propgation or event bubbling
// const navLink = document.querySelector('.nav-list-item'); //first item of this class
// const navLinks = document.querySelector('.nav-list-items');
// const navBar = document.querySelector('.main-navigation');

// const randomNumber = (min, max) =>
//   Math.floor(Math.random() * (max - min) + min);
// // console.log(randomNumber(0, 255));

// const randomColor = () =>
//   `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(
//     0,
//     255
//   )})`;
// // console.log(randomColor());

// navLink.addEventListener('click', function () {
//   this.style.backgroundColor = randomColor();
//   stopPropagation();
// });
// navLinks.addEventListener('click', function () {
//   //due to event bubbling the event will also apply to parent element when only navLink is clicked
//   this.style.backgroundColor = randomColor();
// });
// navBar.addEventListener('click', function () {
//   //due to event bubbling the event will also apply to parent element when only navLink is clicked
//   this.style.backgroundColor = randomColor();
// });

/*Immersive mouseenter effect*/
// const sectionI = document.querySelector('.immersive-section');
// const divI = document.querySelector('.immersive');
// let interval;
// const makeI = function () {
//   interval = setInterval(function () {
//     divI.classList.toggle('scale');
//   }, 500);
// };

// sectionI.addEventListener('mouseenter', makeI);

// const eraseI = function () {
//   clearInterval(interval);
// };
// sectionI.addEventListener('mouseleave', eraseI);
// const image = document.querySelector('.img-lzy');

// console.log(image.src);

//Not efficient way of implementing smooth scrolling on all nav links
// const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);

// navLinks.forEach(elem => {
//   elem.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = elem.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//SMOOTH SCROLLING USING EVENT DELGATION/EVENT BUBBLING
const allNav = document.querySelector('.nav-list-items');

//steps to apply event delgation
//1. select the entire parent element in which you want to apply events
//2. when an event is triggered for the entire parent, it will also apply to the parent
//3. apply a matching condtion for filtering out the needed element

allNav.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//TABBED COMPONENT OPERATIONS
const operationButtonContainer = document.querySelector('.operation-buttons');
const operationButtons = document.querySelectorAll('.operation-btn');
const operationDetails = document.querySelectorAll('.operation-details');

operationButtonContainer.addEventListener('click', e => {
  const clickedBtn = e.target.closest('.operation-btn');
  console.log(clickedBtn.dataset.tab);
  //Guard Clause, that will return the whole block if condition is true before initializing the later code

  if (!clickedBtn) return;
  operationButtons.forEach(btn => btn.classList.remove('operation-btn-active'));
  clickedBtn.classList.add('operation-btn-active');
  operationDetails.forEach(tab => tab.classList.add('hidden'));
  document
    .querySelector(`.operation-detail-${clickedBtn.dataset.tab}`)
    .classList.remove('hidden');
});

//NAVIGATION FADING EFFECT
const navBar = document.querySelector('.nav-list');

const handleNav = function (e) {
  const rqd = e.target;
  if (rqd.classList.contains('nav-link')) {
    rqd
      .closest('.nav-list-items')
      .querySelectorAll('.nav-link')
      .forEach(link => {
        if (link !== rqd) {
          link.style.opacity = this;
        }
      });
    rqd.closest('.main-navigation').querySelector('img').style.opacity = this;
  }
};

navBar.addEventListener('mouseover', handleNav.bind(0.5)); // this will point to 0.5 and there is no need to pass e
navBar.addEventListener('mouseout', handleNav.bind(1));

//Intersection observer API

//3.Defining object/options for observer
// const optionsObs = {
//   root: null, //root means element for intersection with element being observed
//   threshold: 0.1, //Percentage of observing element visible on the root element,  can be a single value or an array of values
// };
//4. callback function for observer
// const callbackObs = function (entries, observer) {
//   //will get two arguments i.e. entries/threshold and whole observer
//   entries.forEach(entry => {
//     // console.log(entry); //will get an entry that contains values like intersection ratio, isIntersecting set to true or false
//   });
// };
// //1.defining the API
// const observer = new IntersectionObserver(callbackObs, optionsObs);

//2.set the element to observe
// observer.observe(sectionScroll); //section-features

//using intersection observer
// const observer2 = new IntersectionObserver(
//   function (entries, observer) {
//     entries.forEach(entry => {
//       console.log(entry);
//     });
//   },
//   { root: null, threshold: [0, 0.4, 0.7] }
// ).observe(document.getElementById('section--3'));

//Applying sticky nav with intersection observer
const navHeight = document
  .querySelector('.main-navigation')
  .getBoundingClientRect().height;

const callbackObs = function (entries, observer) {
  const [entry] = entries;
  !entry.isIntersecting
    ? document.querySelector('.main-navigation').classList.add('sticky')
    : document.querySelector('.main-navigation').classList.remove('sticky');
};
const optionsObs = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //will set margin to the observing element not visully but for the intersection observer, only pixel will work, +ve means after intersection and -ve means before it
};
const headerObserver = new IntersectionObserver(callbackObs, optionsObs);
headerObserver.observe(header);

//Displaying sections on scoll
const sectionToShow = document.querySelectorAll('.section');
console.log(sectionToShow);
const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
    // console.log(entry.target.id); //target is available in the entry object
  },
  { root: null, threshold: 0.15 }
);
sectionToShow.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//Lazy loading images using intersection observer
const lazyImages = document.querySelectorAll('img[data-src]');
// console.log(lazyImages);
const lazyCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    this.classList.remove('img-lzy');
  });
  observer.unobserve(entry.target);
};
const lazyOptions = {
  root: null,
  threshold: 0,
};
const imageObserver = new IntersectionObserver(lazyCallback, lazyOptions);
lazyImages.forEach(img => imageObserver.observe(img));

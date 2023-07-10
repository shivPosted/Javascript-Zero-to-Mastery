'use strict';
const openModal = document.querySelector('.modal-window'); //storing element in a constant
const openModalButtons = document.querySelectorAll('.modal-button'); //select all elements with the same class
const buttonClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModalWindow = function () {
  openModal.classList.remove('hidden'); //this will remove the hidden class of the modal-window
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  openModal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// --> this loop will attach the event handlers to all of the buttons by looping over the nodelist
for (let i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener('click', openModalWindow);
}

buttonClose.addEventListener('click', closeModal); //using closeModal as even-handler function, don't use () with closeModal because it will make function rum immedialtely when page loads

overlay.addEventListener('click', closeModal);

'use strict';
const openModal = document.querySelector('.modal-window'); //storing element in a constant
const openModalButtons = document.querySelectorAll('.modal-button'); //select all elements with the same class
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < openModalButtons.length; i++) {
  // --> this function will attach the event handlers to all of the buttons by looping over the nodelist
  openModalButtons[i].addEventListener('click', function () {
    openModal.classList.remove('hidden'); //this will remove the hidden class of the modal-window
    overlay.classList.remove('hidden');
  });
}

'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const inputDistance = document.getElementById('distance');
const inputDuration = document.getElementById('duration');
const inputCadence = document.getElementById('cadence');
const inputElevGain = document.getElementById('elev-gain');
const inputType = document.getElementById('type');
let map, mapEvent;

class App {
  constructor() {
    this._getCurrentPosition();
  }

  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(this._loadMap, function () {
      alert(`couldn't get your locatoin`);
    });
  }
  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];

    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    //leaflet library
    map = L.map('map').setView(coords, 13);

    map.on('click', function (mapE) {
      //rendering form visible when clicked on map
      form.classList.remove('hidden');
      inputDistance.focus();
      mapEvent = mapE;
      //for hannling anything that happen on map
    });

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
const app = new App();

form.addEventListener('submit', function (e) {
  e.preventDefault();
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevGain.value =
      '';

  console.log('submitted');
  const { lat, lng } = mapEvent.latlng;
  const myIcon = L.icon({
    iconUrl: 'icon.png',
    iconSize: [45, 45],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50],
  });

  L.marker([lat, lng], { icon: myIcon })
    .addTo(map)
    .bindPopup(
      L.popup({
        autoClose: false,
        closeOnClick: false,
        className: 'cycling-popup',
      })
    )
    .setPopupContent('workout')
    .openPopup();

  form.classList.add('hidden');
});

type.addEventListener('change', function () {
  inputElevGain.closest('.form-row').classList.toggle('form-row-hidden');
  inputCadence.closest('.form-row').classList.toggle('form-row-hidden');
  console.log(inputCadence.closest('.form-row'));
});

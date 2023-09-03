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
  #map;
  #mapEvent;
  workouts = [];

  constructor() {
    this._getCurrentPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    type.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert(`couldn't get your locatoin`);
      }
    );
  }
  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];

    //leaflet library

    this.#map = L.map('map').setView(coords, 13);

    this.#map.on('click', this._showForm.bind(this));

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
  }

  _showForm(mapE) {
    form.classList.remove('hidden');
    inputDistance.focus();
    this.#mapEvent = mapE;
  }
  _newWorkout(e) {
    //get data from user
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    //check the input from the user
    const checkNumber = (...inputs) =>
      inputs.every(input => Number.isFinite(input));
    const checkPositive = (...inputs) => inputs.every(input => input > 0);

    //if type is cycling set cycling object
    if (type === 'cycling') {
      const eleveGain = +inputElevGain.value;
      if (
        !checkNumber(distance, duration, eleveGain) ||
        !checkPositive(distance, duration) //elevation gain can be negative
      ) {
        return alert('Entered value should be number and positive');
      }
      const workout = new Cycling([lat, lng], distance, duration, eleveGain);
      this.workouts.push(workout);
    }
    //if type is running set running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !checkNumber(distance, duration, cadence) ||
        !checkPositive(distance, duration, cadence) //elevation gain can be negative
      ) {
        return alert('Entered value should be number and positive');
      }
      const workout = new Running([lat, lng], distance, duration, cadence);
      this.workouts.push(workout);
    }
    e.preventDefault();
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevGain.value =
        '';

    console.log('submitted');

    const myIcon = L.icon({
      iconUrl: 'icon.png',
      iconSize: [45, 45],
      iconAnchor: [20, 50],
      popupAnchor: [0, -50],
    });

    L.marker([lat, lng], { icon: myIcon })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 30,
          maxWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'cycling-popup',
        })
      )
      .setPopupContent('workout')
      .openPopup();

    form.classList.add('hidden');
  }

  _toggleElevationField() {
    inputElevGain.closest('.form-row').classList.toggle('form-row-hidden');
    inputCadence.closest('.form-row').classList.toggle('form-row-hidden');
    console.log(inputCadence.closest('.form-row'));
  }
}
const app = new App();

class Workout {
  date = new Date();
  id = (+new Date() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.pace;
  }
}

const run1 = new Running([36, -12], 5, 30, 90);
const cycling1 = new Cycling([36, -12], 10, 20, 10);

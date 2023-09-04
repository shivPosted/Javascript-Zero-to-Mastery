'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const inputDistance = document.getElementById('distance');
const inputDuration = document.getElementById('duration');
const inputCadence = document.getElementById('cadence');
const inputElevGain = document.getElementById('elev-gain');
const inputType = document.getElementById('type');
const activities = document.querySelector('.activity-main-tab');
const errorPopup = document.querySelector('.error-popup');

let map, mapEvent;

class App {
  #map;
  #mapEvent;
  #zoomLevel = 13;
  workouts = [];

  constructor() {
    this._getLocalStorage();

    this._getCurrentPosition();

    //Event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));

    type.addEventListener('change', this._toggleElevationField.bind(this));

    activities.addEventListener('click', this._moveToPopup.bind(this));
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

    this.#map = L.map('map').setView(coords, this.#zoomLevel);

    this.#map.on('click', this._showForm.bind(this));

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.workouts.forEach(workout => this._renderWorkoutMarker(workout));
  }

  _showForm(mapE) {
    form.style.display = 'grid';
    form.classList.remove('hidden');
    inputDistance.focus();
    this.#mapEvent = mapE;
  }
  _newWorkout(e) {
    //get data from user
    e.preventDefault();
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

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
        this._clearForm();
        return this._errorPopup();
      }
      workout = new Cycling([lat, lng], distance, duration, eleveGain);
      this.workouts.push(workout);
    }
    //if type is running set running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !checkNumber(distance, duration, cadence) ||
        !checkPositive(distance, duration, cadence) //elevation gain can be negative
      ) {
        this._clearForm();
        return this._errorPopup();
      }
      workout = new Running([lat, lng], distance, duration, cadence);
      this.workouts.push(workout);
    }

    //render workout marker on map
    this._renderWorkoutMarker(workout);

    //render workout in list
    this._renderWorkout(workout);

    //set local storage when new workout is added
    this._setLocalStorage();

    //clearing form

    this._clearForm();

    // form.classList.add('hidden');
    form.style.display = 'none';
  }

  _renderWorkoutMarker(workout) {
    const myIcon = L.icon({
      iconUrl: 'icon.png',
      iconSize: [45, 45],
      iconAnchor: [20, 50],
      popupAnchor: [0, -50],
    });

    L.marker(workout.coords, { icon: myIcon })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 30,
          maxWidth: 300,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'cycling' ? '🚴‍♀️' : '🏃‍♂️'} ${workout.description}`
      )
      .openPopup();
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.activity');
    if (!workoutEl) return;
    const workout = this.workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#zoomLevel, {
      animate: true,
      pan: {
        duration: 0.8,
      },
    });
  }
  _renderWorkout(workout) {
    let html = `
    <div class="activity activity-${workout.type}" data-id = ${workout.id}>
    <h2>
      ${workout.description}
    </h2>
    <div class="activity-info">
      <div class="activity-distance">
        <span class="activity-distance-display">${
          workout.type === 'cycling' ? '🚴‍♀️' : '🏃‍♂️'
        } ${workout.distance}</span> km
      </div>
      <div class="activity-distance">
        <span class="activity-time-display">⏱ ${workout.duration}</span> min
      </div>
      <div class="activity-distance">
        <span class="activity-speed-display">⚡️ ${
          workout.type === 'running'
            ? workout.pace.toFixed(1)
            : workout.speed.toFixed(1)
        }</span> ${workout.type === 'running' ? 'min/km' : 'km/hr'}
      </div>
      <div class="activity-rate">
        <span class="activity-rate-display">${
          workout.type === 'running'
            ? `👣 ${workout.cadence}`
            : `⛰ ${workout.elevationGain}`
        }</span> ${workout.type === 'running' ? 'SPM' : 'M'}
      </div>
    </div>
  </div>`;
    form.insertAdjacentHTML('afterend', html);
  }

  _toggleElevationField() {
    inputElevGain.closest('.form-row').classList.toggle('form-row-hidden');
    inputCadence.closest('.form-row').classList.toggle('form-row-hidden');
    console.log(inputCadence.closest('.form-row'));
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;
    this.workouts = data;

    this.workouts.forEach(workout => this._renderWorkout(workout));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  _errorPopup() {
    errorPopup.classList.remove('error-popup-hidden');
    setTimeout(() => {
      errorPopup.classList.add('error-popup-hidden');
    }, 5000);
  }

  _clearForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevGain.value =
        '';
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
  workoutDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this.description = this.workoutDescription();
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
    this.description = this.workoutDescription();
  }
  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.pace;
  }
}

const run1 = new Running([36, -12], 5, 30, 90);
const cycling1 = new Cycling([36, -12], 10, 20, 10);

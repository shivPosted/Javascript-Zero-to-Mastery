'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

//use of geolocation
navigator.geolocation.getCurrentPosition(
  function (position) {
    // console.log(position);
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];

    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    //leaflet library
    const map = L.map('map').setView(coords, 13);

    map.on('click', function (mapEvent) {
      //for hannling anything that happen on map
      console.log(mapEvent);
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
    });

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  },
  function () {
    alert(`couldn't get your locatoin`);
  }
);

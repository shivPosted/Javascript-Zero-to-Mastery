'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageUpdate = document.querySelector('.images img');
///////////////////////////////////////
// const getCountryInfo = function (country) {
//   let languages = '';
//   const request = new XMLHttpRequest(); //request object from the XMLHttpsRequest
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`); //to open a request accpts arguments for type of request and source for request
//   request.send(); //for sending request

//   request.addEventListener('load', function () {
//     //adding event listener so that it triggered when the request is loaded with data
//     const [data] = JSON.parse(this.responseText); //parsing the string back to object/array
//     console.log(data);
//     console.log(data?.borders);
//     if (data?.borders) {
//     }
//     // console.log(data);
//     for (const [, value] of Object.entries(data.languages)) {
//       languages += value + ' ';
//     }
//     const [, currencyAry] = Object.entries(data.currencies)[0];

//     const html = `<div class="country">
//   <img src="${data.flags.png}" alt="country-flag" />
//   <div class="country-data">
//     <h3 class="country-row country-name">${data.name.common}</h3>
//     <h5 class="country-row country-continent">${data.continents[0]}</h5>
//     <h5 class="country-row country-population">🧑‍🤝‍🧑 ${(
//       data.population / 1000000
//     ).toFixed(1)} M</h5>
//     <h5 class="country-row country-language">🗣️ ${languages}</h5>
//     <h5 class="country-row country-currency">💵 ${currencyAry.name}</h5>
//   </div>
// </div>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//   });
// };

// getCountryInfo('iceland');
// getCountryInfo('canada');
// getCountryInfo('usa');
// getCountryInfo('bangladesh');
// getCountryInfo('indonesia');
// getCountryInfo('china');

// const loadImage = function () {
//   const params = {
//     included_tags: 'selfies',
//     height: '>=2000',
//     nsfw: false,
//   };
//   const apiURL = 'https://api.waifu.im/search';
//   const queryParams = new URLSearchParams(params);
//   const requestUrl = `${apiURL}?${queryParams}`;

//   const request02 = new XMLHttpRequest();
//   request02.open('GET', requestUrl);
//   request02.send();
//   request02.addEventListener('load', function () {
//     const data = JSON.parse(request02.responseText);
//     const [img] = data['images'];
//     const images = img.url;
//     imageUpdate.src = images;
//     imageUpdate.src = images;
//   });
// };

const setElCountry = function (data, isNeighbour = false) {
  let languages = '';
  for (const [, value] of Object.entries(data.languages)) {
    languages += value + ' ';
  }
  const [, currencyAry] = Object.entries(data.currencies)[0];

  const html = `<div class="country ${isNeighbour ? 'country-neighbour' : ''}">
<img src="${data.flags.png}" alt="country-flag" />
<div class="country-data">
  <h3 class="country-row country-name">${data.name.common}</h3>
  <h5 class="country-row country-continent">${data.continents[0]}</h5>
  <h5 class="country-row country-population">🧑‍🤝‍🧑 ${(
    data.population / 1000000
  ).toFixed(1)} M</h5>
  <h5 class="country-row country-language">🗣️ ${languages}</h5>
  <h5 class="country-row country-currency">💵 ${currencyAry.name}</h5>
</div>
</div>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getNeighbour = function (data) {
//   if (data) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/alpha/${data[0]}`);
//     request.send();
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(request.responseText);
//       setElCountry(data, true);
//     });
//   }
// };

// const getCountry = function (country) {
//   const request = new XMLHttpRequest(); //request object from the XMLHttpsRequest
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`); //to open a request accpts arguments for type of request and source for request
//   request.send(); //for sending request

//   request.addEventListener('load', function () {
//     //adding event listener so that it triggered when the request is loaded with data
//     const [data] = JSON.parse(this.responseText); //parsing the string back to object/array

//     // console.log(data);
//     setElCountry(data);
//     getNeighbour(data?.borders); //example of callback
//   });
// };

// getCountry('india');

//another example of callback
// setTimeout(() => {
//   console.log('hello01');
//   setTimeout(() => {
//     console.log('hello02');
//     setTimeout(() => {
//       console.log('hello03');
//       setTimeout(() => {
//         console.log('hello04');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//using fetch api---------------------> modern way of handling apis
// const request = fetch(`https://restcountries.com/v3.1/name/india`); //it will return a promise
// console.log(request);

const getCountry = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      //then will have a callback function that takes an argument i.e. response, we can then return this response as json to further apply then on it
      return response.json(); //return response converted to json to further work on the data
    })
    .then(response => {
      const [data] = response;
      setElCountry(data); //using from previous data
    });
};
getCountry('india');

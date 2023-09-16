'use strict';

const btn = document.querySelector('.btn');
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

const handleError = function (msg) {
  console.error(msg);
  countriesContainer.insertAdjacentText('beforeend', msg.message + ' 🥲🥲🥲');
};

const getJSON = function (url, error) {
  return fetch(url).then(response => {
    //returning whole block
    if (!response.ok) throw new Error(error + `(${response.status})`);
    return response.json();
  });
};

const getCountry = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Cannot find Country`
  )
    .then(data => {
      setElCountry(data[0]); //using from previous data
      // console.log(data[0]);
      const border = data[0].borders?.[0];
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${border}`,
        `This country is an island`
      );
    })
    .then(data => {
      setElCountry(data[0], true);
    })
    .catch(err => {
      handleError(err);
    });
};

// btn.addEventListener('click', () => {
//   countriesContainer.classList.remove('hidden');
//   btn.classList.add('btn-hidden');
//   getCountry('iceland');
// });

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// The Complete JavaScript Course 31
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

const getData = function (url, error) {
  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(error);
      return response.json();
    })
    .then(data => {
      const result = data.features[0].properties.country;
      getCountry(result);
    });
};
const whereAmI = function (lat, lon) {
  getData(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=204cec54c45543bb8119a66423c82d74`,
    `Country Not Found`
  ).catch(err => handleError(err));
};

btn.addEventListener('click', () => {
  countriesContainer.classList.remove('hidden');
  btn.classList.add('btn-hidden');
  whereAmI(-33.933, 18.474);
});

//Event loop in practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Promise 1 resolved').then(res => console.log(res));
console.log('Test End');

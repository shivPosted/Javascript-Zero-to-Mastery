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
const getNeighbour = function (data) {
  console.log(data);
  if (data) {
    console.log(data);
    const request02 = new XMLHttpRequest();
    request02.open('GET', `https://restcountries.com/v3.1/alpha/${data[0]}`);
    request02.send();
    request02.addEventListener('load', function () {
      let languages = '';
      const [data02] = JSON.parse(request02.responseText);
      console.log(data02);
      for (const [, value] of Object.entries(data02.languages)) {
        languages += value + ' ';
      }
      const [, currencyAry] = Object.entries(data02.currencies)[0];

      const html = `<div class="country country-neighbour">
    <img src="${data02.flags.png}" alt="country-flag" />
    <div class="country-data">
      <h3 class="country-row country-name">${data02.name.common}</h3>
      <h5 class="country-row country-continent">${data02.continents[0]}</h5>
      <h5 class="country-row country-population">🧑‍🤝‍🧑 ${(
        data02.population / 1000000
      ).toFixed(1)} M</h5>
      <h5 class="country-row country-language">🗣️ ${languages}</h5>
      <h5 class="country-row country-currency">💵 ${currencyAry.name}</h5>
    </div>
  </div>`;
      countriesContainer.insertAdjacentHTML('beforeend', html);
    });
  }
};

const getCountry = function (country) {
  let languages = '';
  const request = new XMLHttpRequest(); //request object from the XMLHttpsRequest
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); //to open a request accpts arguments for type of request and source for request
  request.send(); //for sending request

  request.addEventListener('load', function () {
    //adding event listener so that it triggered when the request is loaded with data
    const [data] = JSON.parse(this.responseText); //parsing the string back to object/array
    console.log(data);
    console.log(data?.borders);

    // console.log(data);
    for (const [, value] of Object.entries(data.languages)) {
      languages += value + ' ';
    }
    const [, currencyAry] = Object.entries(data.currencies)[0];

    const html = `<div class="country">
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
    getNeighbour(data?.borders); //example of callback
  });
};

getCountry('india');

//another example of callback
setTimeout(() => {
  console.log('hello01');
  setTimeout(() => {
    console.log('hello02');
    setTimeout(() => {
      console.log('hello03');
      setTimeout(() => {
        console.log('hello04');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

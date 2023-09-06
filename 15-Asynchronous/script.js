'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageUpdate = document.querySelector('.images img');
console.log(imageUpdate);
///////////////////////////////////////
const getCountryInfo = function (country) {
  let languages = '';
  const request = new XMLHttpRequest(); //request object from the XMLHttpsRequest
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); //to open a request accpts arguments for type of request and source for request
  request.send(); //for sending request

  request.addEventListener('load', function () {
    //adding event listener so that it triggered when the request is loaded with data
    const [data] = JSON.parse(this.responseText); //parsing the string back to object/array
    // console.log(data);
    for (const [, value] of Object.entries(data.languages)) {
      languages += value + ' ';
    }
    const [, currencyAry] = Object.entries(data.currencies)[0];
    console.log(currencyAry);
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
  });
};

// getCountryInfo('india');
// getCountryInfo('canada');
// getCountryInfo('usa');
// getCountryInfo('bangladesh');
// getCountryInfo('indonesia');
// getCountryInfo('china');
// const languages = { eng: 'English', hin: 'Hindi', tam: 'Tamil' };
// for (const [, value] of Object.entries(languages)) {
//   console.log(value);
// }

const loadImage = function () {
  const params = {
    included_tags: 'selfies',
    height: '>=2000',
    nsfw: false,
  };
  const apiURL = 'https://api.waifu.im/search';
  const queryParams = new URLSearchParams(params);
  const requestUrl = `${apiURL}?${queryParams}`;

  const request02 = new XMLHttpRequest();
  request02.open('GET', requestUrl);
  request02.send();
  request02.addEventListener('load', function () {
    const data = JSON.parse(request02.responseText);
    const [img] = data['images'];
    const images = img.url;
    imageUpdate.src = images;
    imageUpdate.src = images;
  });
};

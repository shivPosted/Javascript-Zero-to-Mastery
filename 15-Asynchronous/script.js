'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryInfo = function (country) {
  let languages = '';
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
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

getCountryInfo('india');
// getCountryInfo('canada');
getCountryInfo('usa');
getCountryInfo('bangladesh');
getCountryInfo('indonesia');
getCountryInfo('china');
// const languages = { eng: 'English', hin: 'Hindi', tam: 'Tamil' };
// for (const [, value] of Object.entries(languages)) {
//   console.log(value);
// }

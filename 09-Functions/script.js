'use strict';

/*const passangers = [];
const bookFlight = function (
  flightName,
  flightNumber = 10,
  passanger = 20,
  rate = passanger * 10
) {
  const bookings = {
    flightName,
    flightNumber,
    passanger,
    rate,
  };
  console.log(bookings);
};

bookFlight('BNB2310', undefined, 30, undefined);*/

const flightName = 'LH345';
const shiv = {
  name: 'Shiv Pratap',
  passport: 3256417852,
};

const checkIn = function (flight, person) {
  flight = 'LB787';
  person.name = 'Mr. ' + person.name; //---------------->> will change the main object too because objects are stored in heaps and not in call-stack;
};
checkIn(flightName, shiv);
console.log(flightName, shiv);

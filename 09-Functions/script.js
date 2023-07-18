'use strict';

const passangers = [];
const bookFlight = function (flightName, flightNumber = 10, passanger = 20) {
  const bookings = {
    flightName,
    flightNumber,
    passanger,
  };
  console.log(bookings);
};

bookFlight('BNB2310', undefined, 30);

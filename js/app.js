'use strict';

var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
var storeLocations = ['1st And Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var i = 0;

var firstAndPikeStore = {
  // name: storeLocations[i],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateCookiesPerHour: function() {
    for(i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  calculateTotalCookiesSold: function() {
    for(i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('store-name');

    i = 0;
    ulElement.textContent = storeLocations[i];
    for(; i < this.cookiesPurchasedPerHour.length; i++) {
      var liElement = document.createElement('li');
  
      liElement.textContent = hours[i] + 'am: ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookiesSold;
    ulElement.appendChild(liElement);
  },
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

firstAndPikeStore.calculateCookiesPerHour(storeLocations[0]);
firstAndPikeStore.calculateTotalCookiesSold(storeLocations[0]);
firstAndPikeStore.displayOutput(storeLocations[0]);

// var seaTacAirport = {
//   name: storeLocator[i],
  
// }





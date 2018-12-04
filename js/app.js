'use strict';

var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
var storeLocations = ['1st And Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var i = 0;

function calculateCookiesPerHour(store) {
  // var randomNumCustPerHour = store.generateRandNumCustomers();

  for(i = 0; i < hours.length; i++) {
    // var cookiesPerHour = Math.floor(store.avgCookieSale * randomNumCustPerHour);
    var cookiesPerHour = Math.floor(store.avgCookieSale * store.generateRandNumCustomers());
    store.cookiesPurchasedPerHour[i] = cookiesPerHour;
  }
  
  // console.log('Random number customers per hour: ' + randomNumCustPerHour);
  // console.log('Cookies per hour: ' + cookiesPerHour);
  // return cookiesPerHour;  
}

function displayOutput(store) {
  var ulElement = document.getElementById('store-name');

  for(i = 0; i < store.cookiesPurchasedPerHour.length; i++) {
    var liElement = document.createElement('li');

    // i = 0;
    // liElement.textContent = hours[i] + 'am: ' + calculateCookiesPerHour(store) + ' cookies';
    liElement.textContent = hours[i] + 'am: ' + store.cookiesPurchasedPerHour[i] + ' cookies';
    ulElement.appendChild(liElement);
  }
}

var firstAndPikeStore = {
  name: storeLocations[i],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateTotalCookiesSold: function() {
    // var sum;
    for(i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
    
  },
  calculateCookiesPerHour: function() {
    for(i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('store-name');

    i = 0;
    ulElement.textContent = storeLocations[i];
    // ulElement.textContent = 'store-name';
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

// calculateCookiesPerHour(firstAndPikeStore);
// displayOutput(firstAndPikeStore);

// calculateCookiesPerHour(firstAndPikeStore);
// for(var j = 0; j < firstAndPikeStore.cookiesPurchasedPerHour.length; j++) {
//   console.log(firstAndPikeStore.cookiesPurchasedPerHour[j]);
// }




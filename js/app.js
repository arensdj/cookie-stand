'use strict';

var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
var storeLocations = ['firstAndPike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var i = 0;

function calculateCookiesPerHour(store) {
  var randomNumCustPerHour = store.generateRandNumCustomers();
  var cookiesPerHour = Math.floor(store.avgCookieSale * randomNumCustPerHour);

  console.log('Random number customers per hour: ' + randomNumCustPerHour);
  console.log('Cookies per hour: ' + cookiesPerHour);

  return cookiesPerHour;  
}

var firstAndPikeStore = {
  name: storeLocations[i],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesPurchasedPerHour: [],
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

// calculateCookiesPerHour(firstAndPikeStore);

function calculateCookies
var ulElement = document.getElementById('store-name');
var liElement = document.createElement('li');

liElement.textContent = hours[i] + 'am: ' + calculateCookiesPerHour(firstAndPikeStore) + ' cookies';
ulElement.appendChild(liElement);

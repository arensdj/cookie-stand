'use strict';

// Global variables
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = ['1st And Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];

// The sales table on html
var salesTable = document.getElementById('sales-table');

// Array that contains all of the Store objects 
var allStores = [];

function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesSold = 0;
  this.generateRandNumCustomers = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.calculateCookiesPerHour = function() {
    for(var i = 0; i < storeHours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  };
  this.calculateTotalCookiesSold = function() {
    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  };
  // Store.allStores.push(this);
}

firstAndPike.renderHeader = function () {
  var headerRow = document.createElement('tr');
  // var headings = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm']

  for(var i = 0; i < storeHours.length; )
};

firstAndPike.prototype.renderTable = function() {
  // Create tr element
  var trEl = document.createElement('tr');
  // Create td element
  var tdEl = document.createElement('td');
  // Add content to td element
  tdEl.textContent = 
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
firstAndPike.calculateCookiesPerHour();
firstAndPike.calculateTotalCookiesSold();
allStores.push(firstAndPike);


console.log(firstAndPike.cookiesPurchasedPerHour);
console.log(firstAndPike.totalCookiesSold);
console.log(allStores);

// var randomCustNumber = firstPike.generateRandNumCustomers();
// console.log(randomCustNumber);

// Store.prototype.


// var firstAndPike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   cookiesPurchasedPerHour: [],
//   totalCookiesSold: 0,
//   calculateCookiesPerHour: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
//       this.cookiesPurchasedPerHour[i] = cookiesPerHour;
//     }
//   },
//   calculateTotalCookiesSold: function() {
//     for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
//     }
//   },
//   displayOutput: function() {
//     var ulElement = document.getElementById('1st-And-Pike');
//     ulElement.textContent = storeLocations[storeIndex];

//     for(var i = 0; i < storeHours.length; i++) {
//       var liElement = document.createElement('li');
//       liElement.textContent = storeHours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }

//     liElement = document.createElement('li');
//     liElement.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
//     ulElement.appendChild(liElement);
//   },
//   generateRandNumCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   }
// };



// firstAndPike.calculateCookiesPerHour();
// firstAndPike.calculateTotalCookiesSold();
// firstAndPike.displayOutput();

// // Increment index used to access global arrays


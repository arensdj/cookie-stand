'use strict';

// Global variables
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// The sales table on html
var salesTable = document.getElementById('sales-table');
var salesForm = document.getElementById('sales-form');

// Array that contains all of the Store objects 
Store.allStores = [];

// Definition of the Store object constructor
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesSold = 0;
  Store.allStores.push(this);
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
}

Store.prototype.renderTable = function() {
  // Create tr element
  var trEl = document.createElement('tr');
  // Create td element
  var tdEl = document.createElement('td');
  // Add content to td element
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  salesTable.append(trEl);

  for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPurchasedPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesSold;
  trEl.appendChild(tdEl);

  salesTable.append(trEl);
};

// Creates the header row with the proper column names and appends to sales table
Store.renderHeader = function () {
  var headerRow = document.createElement('tr');

  // Create a table header element, give it content and append to the header row.
  var thEl = document.createElement('th');
  thEl.textContent = '                 ';
  headerRow.appendChild(thEl);

  for(var i = 0; i < storeHours.length; i++) {
    // Create a table header element, give it content and appeand to the header row
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    headerRow.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  headerRow.appendChild(thEl);

  // Append header row to sales table
  salesTable.append(headerRow);
};

Store.generateHourlyTotals = function () {
  var totalCookiesPerHour = [];
  var trEl = document.createElement('tr');
  // Create td element and add to the td element.
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  salesTable.append(trEl);
  var subtotal = 0;
  
  // Calculate the total number of cookies per hour for each store and
  // save this in an array
  for(var i = 0; i < storeHours.length; i++) {
    for(var j = 0; j < Store.allStores.length; j++) {
      subtotal += Store.allStores[j].cookiesPurchasedPerHour[i];
    }
    totalCookiesPerHour[i] = subtotal;
    subtotal = 0;
  }

  for(i = 0; i < totalCookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
    subtotal += totalCookiesPerHour[i];
  }

  // Adding another td so the table border is a solid box.
  tdEl = document.createElement('td');
  tdEl.textContent = subtotal;
  trEl.appendChild(tdEl);
};

Store.addNewStore = function(event) {
  event.preventDefault();

  var newName = event.target.storename.value;
  var newMinCust = event.target.storemincust.value;
  var newMaxCust = event.target.storemaxcust.value;
  var newAvgCookieSale = event.target.storeavgcookiesale.value;

  var newStore = new Store(newName, newMinCust, newMaxCust, newAvgCookieSale);
  newStore.calculateCookiesPerHour();
  newStore.calculateTotalCookiesSold();

  salesTable.textContent = '';
  Store.renderHeader();

  for(var i = 0; i < Store.allStores.length; i++) {
    Store.allStores[i].renderTable();
  }
  Store.generateHourlyTotals();
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
firstAndPike.calculateCookiesPerHour();
firstAndPike.calculateTotalCookiesSold();

var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.calculateCookiesPerHour();
seaTacAirport.calculateTotalCookiesSold();

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.calculateCookiesPerHour();
seattleCenter.calculateTotalCookiesSold();

var capitalHill = new Store('Capital Hill', 20, 38, 2.3);
capitalHill.calculateCookiesPerHour();
capitalHill.calculateTotalCookiesSold();

var alki = new Store('Alki', 2, 16, 4.6);
alki.calculateCookiesPerHour();
alki.calculateTotalCookiesSold();

// Render the table data
Store.renderHeader();
firstAndPike.renderTable();
seaTacAirport.renderTable();
seattleCenter.renderTable();
capitalHill.renderTable();
alki.renderTable();
Store.generateHourlyTotals();

salesForm.addEventListener('submit', Store.addNewStore);

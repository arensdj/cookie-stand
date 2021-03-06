'use strict';

// Global variables
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// The sales table.
var salesTable = document.getElementById('sales-table');
// The form used to add a new store.
var salesForm = document.getElementById('sales-form');
// The staff table.
var staffTable = document.getElementById('staff-table');

// Array that contains all of the Store objects. 
Store.allStores = [];

// Definition of the Store object constructor.
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesSold = 0;
  this.staffCountPerHour = []; 
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

// This method is 'prototype' because it is accessing the member properties of the object
// constructor using contextual 'this'.
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

// Calculates number of staff needed per hour.  There must be at least 40 customers per hour 
// to staff 2 cookie tossers per hour.  Each tosser can toss to 20 customers per hour.
Store.prototype.calculateStaffPerHour = function() {
  var tmpCount = 0;
  var numberCustomersPerHour = 0;
  for(var i = 0; i < storeHours.length; i++) {
    numberCustomersPerHour = Math.floor(this.cookiesPurchasedPerHour[i] / this.avgCookieSale);
    if(numberCustomersPerHour > 40) {
      var remainder = numberCustomersPerHour % 40;
      tmpCount = numberCustomersPerHour - remainder;

      if((tmpCount / 20) > 1) {
        this.staffCountPerHour[i] = (tmpCount / 20);
      } else {
        this.staffCountPerHour[i] = 0;
      }
    } else {
      this.staffCountPerHour[i] = 0;
    }
  }
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

// Calculates the total number of cookies per hour for each store.
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
  // save this in an array.
  for(var i = 0; i < storeHours.length; i++) {
    for(var j = 0; j < Store.allStores.length; j++) {
      subtotal += Store.allStores[j].cookiesPurchasedPerHour[i];
    }
    totalCookiesPerHour[i] = subtotal;
    subtotal = 0;
  }

  // Access each element in totalCookiesPerHour array and set a table data cell with this
  // value.  Add table data cell to the table row element.  Calculate the total number of
  // cookies per hour.
  for(i = 0; i < totalCookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
    subtotal += totalCookiesPerHour[i];
  }

  // Adding another td element and setting the content to the grand total.
  tdEl = document.createElement('td');
  tdEl.textContent = subtotal;
  trEl.appendChild(tdEl);
};

// Creates the header row for the staff projection report.
Store.renderStaffHeader = function () {
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

  // Append header row to sales table
  staffTable.append(headerRow);
};

// Creates a table row in the staff table.  This row contains the number of staff for each hour.
Store.prototype.generateHourlyStaffTotal = function () {
  // Create td element and add to td element.  Access each element in staffCountPerhours array.
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  staffTable.append(trEl);

  for(var i = 0; i < this.staffCountPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.staffCountPerHour[i];
    trEl.appendChild(tdEl);
  }  
};

// The callback function used by event listener.  This is accessible from the object 
// constructor, but it is not a member method.  This has less memory usage.
Store.addNewStore = function(event) {
  // When form is submitted, the browser automatically reloads the page.  
  // Must do a event.preventDefault() to override this so you don't loose everything on the page.
  event.preventDefault();

  // Access data from event.
  var newName = event.target.storename.value;
  var newMinCust = parseInt(event.target.storemincust.value);
  var newMaxCust = parseInt(event.target.storemaxcust.value);
  var newAvgCookieSale = parseFloat(event.target.storeavgcookiesale.value);

  var newStore = new Store(newName, newMinCust, newMaxCust, newAvgCookieSale);
  newStore.calculateCookiesPerHour();
  newStore.calculateTotalCookiesSold();

  // Clears the content of table element and renders it to include all store objects and totals.
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
firstAndPike.calculateStaffPerHour(); 

var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.calculateCookiesPerHour();
seaTacAirport.calculateTotalCookiesSold();
seaTacAirport.calculateStaffPerHour();

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.calculateCookiesPerHour();
seattleCenter.calculateTotalCookiesSold();
seattleCenter.calculateStaffPerHour();

var capitalHill = new Store('Capital Hill', 20, 38, 2.3);
capitalHill.calculateCookiesPerHour();
capitalHill.calculateTotalCookiesSold();
capitalHill.calculateStaffPerHour();

var alki = new Store('Alki', 2, 16, 4.6);
alki.calculateCookiesPerHour();
alki.calculateTotalCookiesSold();
alki.calculateStaffPerHour();

// Render the sales table.
Store.renderHeader();
firstAndPike.renderTable();
seaTacAirport.renderTable();
seattleCenter.renderTable();
capitalHill.renderTable();
alki.renderTable();
Store.generateHourlyTotals();

// Render the staff projection table.
Store.renderStaffHeader();
firstAndPike.generateHourlyStaffTotal();
seaTacAirport.generateHourlyStaffTotal();
seattleCenter.generateHourlyStaffTotal();
capitalHill.generateHourlyStaffTotal();
alki.generateHourlyStaffTotal();

salesForm.addEventListener('submit', Store.addNewStore);

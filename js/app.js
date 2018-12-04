'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = ['1st And Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var storeIndex = 0;

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  calculateTotalCookiesSold: function() {
    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('1st-And-Pike');
    ulElement.textContent = storeLocations[storeIndex];

    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  },
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  calculateTotalCookiesSold: function() {
    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('SeaTac-Airport');
    ulElement.textContent = storeLocations[storeIndex];

    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  },
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }  
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  calculateTotalCookiesSold: function() {
    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('Seattle-Center');
    ulElement.textContent = storeLocations[storeIndex];

    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  },
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

var capitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  calculateTotalCookiesSold: function() {
    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('Capital-Hill');
    ulElement.textContent = storeLocations[storeIndex];

    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  },
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 2.6,
  cookiesPurchasedPerHour: [],
  totalCookiesSold: 0,
  calculateCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(this.avgCookieSale * this.generateRandNumCustomers());
      this.cookiesPurchasedPerHour[i] = cookiesPerHour;
    }
  },
  calculateTotalCookiesSold: function() {
    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      this.totalCookiesSold += this.cookiesPurchasedPerHour[i];
    }
  },
  displayOutput: function() {
    var ulElement = document.getElementById('Alki');
    ulElement.textContent = storeLocations[storeIndex];

    for(var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  },
  generateRandNumCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

firstAndPike.calculateCookiesPerHour();
firstAndPike.calculateTotalCookiesSold();
firstAndPike.displayOutput();

// Increment index used to access global arrays
storeIndex++; 
seaTacAirport.calculateCookiesPerHour();
seaTacAirport.calculateTotalCookiesSold();
seaTacAirport.displayOutput();

storeIndex++;
seattleCenter.calculateCookiesPerHour();
seattleCenter.calculateTotalCookiesSold();
seattleCenter.displayOutput();

storeIndex++;
capitalHill.calculateCookiesPerHour();
capitalHill.calculateTotalCookiesSold();
capitalHill.displayOutput();

storeIndex++;
alki.calculateCookiesPerHour();
alki.calculateTotalCookiesSold();
alki.displayOutput();

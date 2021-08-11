'use strict';
let formSubmit = document.getElementById('submit');
let formEle = document.getElementById('addNewShop');
// Global Array stores an object of each city after creating the instance
let all = [];

//Array contains working hours in each store
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let rootElement = document.getElementById('root'); // Getting root container from sales.html
let MainTable = document.createElement('table');
MainTable.setAttribute('id', 'table-co');// creating the table tag




let Salmon = function (name, minCustmers, maxCustmers, averageSales) {
  //creting the letructor with pointers havign feature for each city shop
  this.name = name;
  this.minCustmers = minCustmers;
  this.maxCustmers = maxCustmers;
  this.averageSales = averageSales;
  this.cookiesPerHour = [];
  this.toatalCookies = 0;
  all.push(this); // pushing the object with it's properaties to the global array
};
Salmon.prototype.simulatedHourlyCookies = function () {
  // this method generates a random number inclusive to a specified range
  return Math.floor(Math.floor(Math.random() *
    (this.maxCustmers - this.minCustmers + 1) + this.minCustmers) * this.averageSales);
};
Salmon.prototype.averageCookiesPerHour = function () {
  // this metohod takes the generated random number and sum it and store it into a variable
  for (let index = 0; index < workingHours.length; index++) {
    let tracker = this.simulatedHourlyCookies();
    this.toatalCookies += tracker;
    this.cookiesPerHour.push(tracker);

  }
};

Salmon.prototype.contentRenderHeader = function () {
  // this method renders table header with working hours
  let headerTable = document.createElement('tr');
  MainTable.appendChild(headerTable);
  rootElement.appendChild(MainTable);
  let clomHeader = document.createElement('th');
  headerTable.appendChild(clomHeader);

  for (let i = 0; i < workingHours.length; i++) {
    // looping through the working hours array and append it's values to each cell in the header row
    clomHeader = document.createElement('th');
    headerTable.appendChild(clomHeader);
    clomHeader.textContent = `${workingHours[i]}`;
  }

  // appending last cell in header with the daily location total
  clomHeader = document.createElement('th');
  clomHeader.textContent = 'Daily Location Total';
  headerTable.appendChild(clomHeader);

};
Salmon.prototype.contentRenderBody = function () {
  // this method renders the body cells values for each insteance of each city
  let bodyTable = document.createElement('tr');
  rootElement.appendChild(MainTable);
  MainTable.appendChild(bodyTable);
  let clomHeader = document.createElement('td');
  bodyTable.appendChild(clomHeader);
  clomHeader.textContent = (this.name);

  for (let index = 0; index < this.cookiesPerHour.length; index++) {
    // loops over the array which contains the random generated number for each inctance of each city and append it's values for each cell
    clomHeader = document.createElement('td');
    bodyTable.appendChild(clomHeader);
    clomHeader.textContent = (this.cookiesPerHour[index]);
  }
  clomHeader = document.createElement('td');
  bodyTable.appendChild(clomHeader);
  clomHeader.textContent = (this.toatalCookies);
};

Salmon.prototype.contentRenderTotal = function () {
  // this method renders the values for footer row with the total of each cloumn stored into it
  let footerTable = document.createElement('tr');
  MainTable.appendChild(footerTable);
  let clomCell = document.createElement('th');
  footerTable.setAttribute('id', 'total-row');
  footerTable.appendChild(clomCell);
  clomCell.textContent = ('Total');
  let totalOfTotal = 0;

  for (let i = 0; i < workingHours.length; i++) {
    // loops through the array of generated numbers and sum all of it's values to total row
    let tempTotel = 0;
    for (let x = 0; x < all.length; x++) {
      // loops through each object stored in the global array all
      tempTotel += all[x].cookiesPerHour[i];
      if (i < 1) {
        // making this condition to ensure that we take the sum of totals just once
        totalOfTotal += all[x].toatalCookies;

      }

    }

    clomCell = document.createElement('th');
    footerTable.appendChild(clomCell);
    clomCell.textContent = tempTotel;
  }
  footerTable.appendChild(clomCell);

  clomCell = document.createElement('th');
  footerTable.appendChild(clomCell);
  clomCell.textContent = totalOfTotal;

};
Salmon.prototype.updateTotalOfTotal = function () {
  let removeTable = document.getElementById('total-row');
  removeTable.remove();

};

Salmon.prototype.tableNewRowUpdate = function () {
  // MainTable
  let TableCont = document.getElementById('table-co');
  console.log(TableCont);
  let tableRow = document.getElementById('total-row');
  let bodyTable = document.createElement('tr');
  console.log(tableRow);
  TableCont.insertBefore(bodyTable, tableRow);

  let clomHeader = document.createElement('td');
  bodyTable.appendChild(clomHeader);
  clomHeader.textContent = (this.name);

  for (let index = 0; index < this.cookiesPerHour.length; index++) {
    // loops over the array which contains the random generated number for each inctance of each city and append it's values for each cell
    clomHeader = document.createElement('td');
    bodyTable.appendChild(clomHeader);
    clomHeader.textContent = (this.cookiesPerHour[index]);
  }
  clomHeader = document.createElement('td');
  bodyTable.appendChild(clomHeader);
  clomHeader.textContent = (this.toatalCookies);

};







let seattle = new Salmon('Seattle', 23, 65, 6.3);
let tokyo = new Salmon('Tokyo', 3, 24, 1.2);
let dubai = new Salmon('Dubai', 11, 38, 3.7);
let paris = new Salmon('Paris', 20, 38, 2.3);
let lima = new Salmon('Lima', 2, 16, 4.6);


seattle.contentRenderHeader();
seattle.averageCookiesPerHour();
seattle.contentRenderBody();



tokyo.averageCookiesPerHour();
tokyo.contentRenderBody();


dubai.averageCookiesPerHour();
dubai.contentRenderBody();



paris.averageCookiesPerHour();
paris.contentRenderBody();


lima.averageCookiesPerHour();
lima.contentRenderBody();
lima.contentRenderTotal();


formEle.addEventListener('submit', function(event){
  event.preventDefault();
  // event.target.name.value
  // name = event.target.name.value;
  // console.log(name);
  // console.log(event.target);
  let name = document.getElementById('name').value;
  let minCustmer = document.getElementById('min-customers').value;
  let maxCustmer = document.getElementById('max-customers').value;
  let avgCustmer = document.getElementById('average-cookies').value;
  formEle.reset();
  let shop = new Salmon(name, minCustmer, maxCustmer, avgCustmer);

  Salmon.prototype.updatTable = function(name, minCustmer, maxCustmer, avgCustmer) {
    console.log(all);
    /* Procedure:
      - Update the array of object with the new object✅
      - fill in the new row with random numbers ✅
      - append the row above the total row ✅
      - updtae total of total
    */
    shop.averageCookiesPerHour();
    // shop.contentRenderBody();
    shop.tableNewRowUpdate();
    shop.updateTotalOfTotal();
    shop.contentRenderTotal();

  };

  shop.updatTable();
});
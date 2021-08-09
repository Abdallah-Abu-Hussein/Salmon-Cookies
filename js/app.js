'use strict';


let all_shops = [];
let workingHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];

let rootElement = document.getElementById('root');
let MainTable = document.createElement('table'); 
rootElement.appendChild(MainTable);

function Shops(name,max_hourly_customers,min_hourly_customers,average_cookies_sales_per_customer){
  this.name = name;
  this. max_hourly_customers= max_hourly_customers;
  this.min_hourly_customers = min_hourly_customers;
  this.average_cookies_sales_per_customer = average_cookies_sales_per_customer;
  this.sales_per_hour =[]; 
  this.total_sales = 0,
  all_shops.push(this);

}

Shops.prototype.make_randoms= function (){
     return  Math.floor(Math.random() * (this.max_hourly_customers - this.min_hourly_customers + 1) + this.min_hourly_customers);
    } ;
Shops.prototype.simulate_cookies_sales = function(){
        return Math.floor(this.make_randoms() * this.average_cookies_sales_per_customer)
    };

Shops.prototype.dispaly_sales_Hour = function () {
      for (let i = 0; i  < 14; i ++) {
  
        let sales = this. simulate_cookies_sales();
        this.total_sales += sales; 
        this.sales_per_hour.push(sales);
  
      };
    }
 Shops.prototype.renderheader = function () {
 
 let header = document.createElement('tr');
 MainTable.appendChild(header);
 rootElement.appendChild(MainTable);

 let cl_Header = document.createElement('th');
 header.appendChild(cl_Header);

 for (let i = 0; i < workingHours.length; i++) {
   cl_Header = document.createElement('th');
   header.appendChild(cl_Header);
   cl_Header.textContent = `${workingHours[i]}`;
 }

 cl_Header = document.createElement('th');
 cl_Header.textContent = 'Daily Location Total';
 header.appendChild(cl_Header);
 }    



 Shops.prototype.renderBody = function() {
  let body = document.createElement('tr');
  rootElement.appendChild(MainTable);
  MainTable.appendChild(body);
  let cl_Header = document.createElement('td');
  body.appendChild(cl_Header);
  cl_Header.textContent = (this.name);

  for (let i = 0; i < this.sales_per_hour.length; i++) {
    cl_Header = document.createElement('td');
    body.appendChild(cl_Header);
    cl_Header.textContent = (this.sales_per_hour[i]);
  }
  cl_Header = document.createElement('td');
  body.appendChild(cl_Header);
  cl_Header.textContent = (this.total_sales);
 }

 Shops.prototype.renderTotal = function() {
  let footer = document.createElement('tr');
  MainTable.appendChild(footer);
  let cl_Cell = document.createElement('th');
  footer.appendChild(cl_Cell);
  cl_Cell.textContent = ('Total');
  let totalOfTotal = 0;

  for (let i = 0; i < workingHours.length; i++) {
    let tempTotel = 0;
    for (let x = 0; x < all_shops.length; x++) {
      tempTotel += all_shops[x].sales_per_hour[i];
      if (i < 1) {
        totalOfTotal += all_shops[x].total_sales;

      }

    }

    cl_Cell = document.createElement('th');
    footer.appendChild(cl_Cell);
    cl_Cell.textContent = tempTotel;
  }
  footer.appendChild(cl_Cell);

  cl_Cell = document.createElement('th');
  footer.appendChild(cl_Cell);
  cl_Cell.textContent = totalOfTotal;

}



let seattle = new Shops('Seattle', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dubai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);

seattle.renderheader();

seattle.dispaly_sales_Hour();
seattle.renderBody();

tokyo.dispaly_sales_Hour();
tokyo.renderBody();

dubai.dispaly_sales_Hour();
dubai.renderBody();


paris.dispaly_sales_Hour();
paris.renderBody();


lima.dispaly_sales_Hour();
lima.renderBody();

lima.renderTotal();

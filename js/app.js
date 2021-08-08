'use strict';
// create separate JS object literals for each shop location that outputs the following to the sales.html file:
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
let workingHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];

let seattle_shop  = {
    max_hourly_customers: 65,
    min_hourly_customers: 23,
    average_cookies_sales_per_customer: 6.3,
    sales_per_hour : [],
    total_sales :0,


    make_randoms: function (){
     return  Math.floor(Math.random() * 70);
    } ,

    simulate_cookies_sales : function(){
        return Math.floor(this.make_randoms() * this.average_cookies_sales_per_customer)
    },
    dispaly_sales_Hour: function () {
        for (let i = 0; i  < 14; i ++) {
    
          let sales = this. simulate_cookies_sales();
          this.sales_per_hour.push(sales);
          this.total_sales += sales;
    
        }
      },
      renderContent: function () {

      let rootElement = document.getElementById('root');
      let shopName = document.createElement('h2');
      rootElement.appendChild(shopName);
      shopName.textContent = 'Seattle';

      let ulElement = document.createElement('ul');
      rootElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.sales_per_hour[i]} cookies.`;
      }
      
      let listItem = document.createElement('li');
      ulElement.appendChild(listItem);
      listItem.textContent = (`Total: ${this.total_sales} cookies`);
  
    }
  
  };

  
  seattle_shop.dispaly_sales_Hour();
  seattle_shop.renderContent();

  let Tokyo_shop  = {
    max_hourly_customers: 24,
    min_hourly_customers: 3,
    average_cookies_sales_per_customer: 1.2,
    sales_per_hour : [],
    total_sales :0,


    make_randoms: function (){
     return  Math.floor(Math.random() * 24);
    } ,

    simulate_cookies_sales : function(){
        return Math.floor(this.make_randoms() * this.average_cookies_sales_per_customer)
    },
    dispaly_sales_Hour: function () {
        for (let i = 0; i  < 14; i ++) {
    
          let sales = this. simulate_cookies_sales();
          this.sales_per_hour.push(sales);
          this.total_sales += sales;
    
        }
      },
      renderContent: function () {

      let rootElement = document.getElementById('root');
      let shopName = document.createElement('h2');
      rootElement.appendChild(shopName);
      shopName.textContent = 'Tokyo';

      let ulElement = document.createElement('ul');
      rootElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.sales_per_hour[i]} cookies.`;
      }
      
      let listItem = document.createElement('li');
      ulElement.appendChild(listItem);
      listItem.textContent = (`Total: ${this.total_sales} cookies`);
  
    }
  
  };

  
  Tokyo_shop.dispaly_sales_Hour();
  Tokyo_shop.renderContent();

  let Dubai_shop  = {
    max_hourly_customers: 11,
    min_hourly_customers: 38,
    average_cookies_sales_per_customer: 3.7,
    sales_per_hour : [],
    total_sales :0,


    make_randoms: function (){
     return  Math.floor(Math.random() * 38);
    } ,

    simulate_cookies_sales : function(){
        return Math.floor(this.make_randoms() * this.average_cookies_sales_per_customer)
    },
    dispaly_sales_Hour: function () {
        for (let i = 0; i  < 14; i ++) {
    
          let sales = this. simulate_cookies_sales();
          this.sales_per_hour.push(sales);
          this.total_sales += sales;
    
        }
      },
      renderContent: function () {

      let rootElement = document.getElementById('root');
      let shopName = document.createElement('h2');
      rootElement.appendChild(shopName);
      shopName.textContent = 'Dubai';

      let ulElement = document.createElement('ul');
      rootElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.sales_per_hour[i]} cookies.`;
      }
      
      let listItem = document.createElement('li');
      ulElement.appendChild(listItem);
      listItem.textContent = (`Total: ${this.total_sales} cookies`);
  
    }
  
  };

  
  Dubai_shop.dispaly_sales_Hour();
  Dubai_shop.renderContent();

  let Paris_shop  = {
    max_hourly_customers: 38,
    min_hourly_customers: 20,
    average_cookies_sales_per_customer:2.3,
    sales_per_hour : [],
    total_sales :0,


    make_randoms: function (){
     return  Math.floor(Math.random() * 38);
    } ,

    simulate_cookies_sales : function(){
        return Math.floor(this.make_randoms() * this.average_cookies_sales_per_customer)
    },
    dispaly_sales_Hour: function () {
        for (let i = 0; i  < 14; i ++) {
    
          let sales = this. simulate_cookies_sales();
          this.sales_per_hour.push(sales);
          this.total_sales += sales;
    
        }
      },
      renderContent: function () {

      let rootElement = document.getElementById('root');
      let shopName = document.createElement('h2');
      rootElement.appendChild(shopName);
      shopName.textContent = 'Paris';

      let ulElement = document.createElement('ul');
      rootElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.sales_per_hour[i]} cookies.`;
      }
      
      let listItem = document.createElement('li');
      ulElement.appendChild(listItem);
      listItem.textContent = (`Total: ${this.total_sales} cookies`);
  
    }
  
  };

  
  Paris_shop.dispaly_sales_Hour();
  Paris_shop.renderContent();


  let Lima_shop  = {
    max_hourly_customers: 16,
    min_hourly_customers: 2,
    average_cookies_sales_per_customer:4.6,
    sales_per_hour : [],
    total_sales :0,


    make_randoms: function (){
     return  Math.floor(Math.random() * 24);
    } ,

    simulate_cookies_sales : function(){
        return Math.floor(this.make_randoms() * this.average_cookies_sales_per_customer)
    },
    dispaly_sales_Hour: function () {
        for (let i = 0; i  < 14; i ++) {
    
          let sales = this. simulate_cookies_sales();
          this.sales_per_hour.push(sales);
          this.total_sales += sales;
    
        }
      },
      renderContent: function () {

      let rootElement = document.getElementById('root');
      let shopName = document.createElement('h2');
      rootElement.appendChild(shopName);
      shopName.textContent = 'Lima';

      let ulElement = document.createElement('ul');
      rootElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.sales_per_hour[i]} cookies.`;
      }
      
      let listItem = document.createElement('li');
      ulElement.appendChild(listItem);
      listItem.textContent = (`Total: ${this.total_sales} cookies`);
  
    }
  
  };

  
  Lima_shop.dispaly_sales_Hour();
  Lima_shop.renderContent();
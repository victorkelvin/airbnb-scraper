# AirBnb Scraper
Scraper API to get 20 entries from a region ir AirBnb using Puppeter


## Installation
```sh
npm install https://github.com/victorkelvin/airbnb-scraper
```

## Usage
```javascript
const scraper = require('airbnb-scraper');

/*
region (required) - Region you want to get the entries. E.g.: "newyork"
adults (optional) - Adults quantity to be added in search filter. E.g: 2;
children (optional)  - Children quantity to be added in search. E.g: 1;
checkin (optional)   - Check-in date in format "YYYY-MM-DD". E.g: "2022-12-20";
checkout (optional)  - Check-out date in format "YYYY-MM-DD". E.g: "2022-12-25";
*/
scraper.scrape(region, adults, children, checkin, checkout).then((res) => {
    console.log(res);
}); //Printing the scraped data Object;


scraper.scrapeToCSV(region, adults, children, checkin, checkout, CSVFile); //Saves the scraped data Object to file in CSV format;

scraper.scrapeToCSV(region, adults, children, checkin, checkout).then((res) => {
    console.log(res);
}); // if the CSVFile argument is ommited, prints the scraped data Object in CSV Format
```

## How it works
It starts Chromium in headless mode which just opens page and waits until page is loaded.
It is far from ideal because probably you need to wait until some resource is loaded or click some button or log in. Currently this module doesn't support such functionality.
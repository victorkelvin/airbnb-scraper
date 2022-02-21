const scraper = require('./index');

let region = "newyork";
let adults = 2;
let children = 1;
let checkin = "2022-05-20";
let checkout = "2022-05-25";
let CSVFile = './test.csv';


scraper.scrape(region, adults, children, checkin, checkout).then((scrapedData) => {
    console.log(scrapedData);
}); //Printing the scraped data Object;


scraper.scrapeToCSV(region, adults, children, checkin, checkout, CSVFile); //Saves the scraped data Object to file in CSV format;

scraper.scrapeToCSV(region, adults, children, checkin, checkout).then((scrapedData) => {
    console.log(scrapedData);
}); // Prints the scraped data Object in CSV Format;


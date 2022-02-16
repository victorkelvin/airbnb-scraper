const scraper = require('./index');

let region = "newyork";
let adults = 2;
let children = 1;
let checkin = "2022-05-20";
let checkout = "2022-05-25";


scraper(region, adults, children, checkin, checkout).then((res) => {
    console.log(res);
})


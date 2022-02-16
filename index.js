const browserObject = require('./src/browser');
// const scraperController = require('./pageController');
const scrapeAll = require('./src/scraper');


function required(arg) {
    throw new Error(`Missing parameter: '${arg}'`);
  }

/**
 * 
 * @param {string} region       - region you want to get the 20 first entries
 * @param {?number} [adults]    - Adults quantity to be added in search filter
 * @param {?number} [children]  - Children quantity to be added in search filter
 * @param {?string} [checkin]   - Check-in date in format "YYYY-MM-DD"
 * @param {?string} [checkout]  - Check-out date in format "YYYY-MM-DD"
 * @returns {Promise<Object>}   - Object with 20 first entries in AirBnb search 
 */  
async function scraper(region = required("region") , adults, children, checkin, checkout){
    let url = `https://www.airbnb.com.br/s/${region}/homes?adults=${adults || null}&children=${children || null}&checkin=${checkin || null}&checkout=${checkout || null}`;
    let browserInstance = await browserObject.startBrowser();
    try {
        return await scrapeAll(browserInstance, url);
    } catch (error) {
        return error;
    }
}


module.exports = scraper;

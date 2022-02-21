const browserObject = require('./src/browser');
// const scraperController = require('./pageController');
const scrapeAll = require('./src/scraper');
const ObjectToCSV = require('objects-to-csv');

/**
 * 
 * @param {string} region       - region you want to get the 20 first entries
 * @param {?number} [adults]    - Adults quantity to be added in search filter
 * @param {?number} [children]  - Children quantity to be added in search filter
 * @param {?string} [checkin]   - Check-in date in format "YYYY-MM-DD"
 * @param {?string} [checkout]  - Check-out date in format "YYYY-MM-DD"
 * @returns {Promise<Object>}   - Object with 20 first entries in AirBnb search 
 */
async function scrape(region, adults, children, checkin, checkout) {
    let url = `https://www.airbnb.com.br/s/${region}/homes?adults=${adults || null}&children=${children || null}&checkin=${checkin || null}&checkout=${checkout || null}`;
    let browserInstance = await browserObject.startBrowser();
    try {
        return await scrapeAll(browserInstance, url);
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param {string} region           - region you want to get the 20 first entries
 * @param {?number} [adults]        - Adults quantity to be added in search filter
 * @param {?number} [children]      - Children quantity to be added in search filter
 * @param {?string} [checkin]       - Check-in date in format "YYYY-MM-DD"
 * @param {?string} [checkout]      - Check-out date in format "YYYY-MM-DD"
 * @param {?string} [saveFileCSV]   - File to save the output in CSV format. If ommited, the return will be a String; 
 * @returns {string}                - String with 20 first entries of AirBnb search in CSV Format 
 */
async function scrapeToCSV(region, adults, children, checkin, checkout, saveFileCSV) {
    let url = `https://www.airbnb.com.br/s/${region}/homes?adults=${adults || null}&children=${children || null}&checkin=${checkin || null}&checkout=${checkout || null}`;
    let browserInstance = await browserObject.startBrowser();
    let scrapedData = await scrapeAll(browserInstance, url);
    const csv = new ObjectToCSV(scrapedData);
    if (saveFileCSV) {
        await csv.toDisk(saveFileCSV)
    } else {
        return await csv.toString();
    }
}

module.exports = { scrape, scrapeToCSV };

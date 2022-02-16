/**
 * 
 * @param {Object} browserInstance - Puppeteer browser instance
 * @param {string} url - search String 
 * @returns @returns {Promise<Object>}   - Object with 20 first entries in AirBnb search 
 */
async function scrapeAll(browserInstance, url) {
    let browser;
    browser = await browserInstance;
    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector('.l1axmu71');
    let list = await page.$$eval('div [class="_8ssblpx"]', houses => {
        let houseList = [];
        var name = houses.map(el => el.querySelector('.t16jmdcf').innerText);
        var url = houses.map(el => el.querySelector('.l1axmu71').href);
        var price = houses.map(el => el.querySelector('._tyxjp1').innerText);
        var desc = houses.map(el => el.querySelector('.i4phm33').innerText);
        // var score = houses.map(el => el.querySelector('.s1hj3bst').innerText);
        // houses = { "name": name[1], "url": url[1] }
        for (i = 0; i < name.length; i++) {
            houseList.push({ "LocationIndex": i, "Info": { "name": name[i], "url": url[i], "price": price[i], "description": desc[i] } });
        }
        return houseList
    });
    browser.close();
    return list;
}





module.exports = (browserInstance, url) => scrapeAll(browserInstance, url)
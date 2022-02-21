/**
 * 
 * @param {Object} browserInstance - Puppeteer browser instance
 * @param {string} url - search String 
 * @returns {Promise<Object>}   - Object with 20 first entries in AirBnb search 
 */
async function scrapeAll(browserInstance, url) {
    let browser;
    browser = await browserInstance;
    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    let list = await getList(page);

    browser.close();
    return list;
}

async function getList(page) {
    // Wait for the required DOM to be rendered
    await page.waitForSelector('.idt4x4');
    let list = await page.$$eval(('.cm4lcvy'), async (location) => {
        var entries = [];
        var name = location.map(el => el.querySelector('.ts5gl90').innerText);
        var url = location.map(el => el.querySelector('.l8au1ct').href);
        var price = location.map(el => el.querySelector('._tyxjp1').innerText);
        var description = location.map(el => el.querySelector('.i1wgresd').innerText);
        // var score = await location.map(el => el.querySelector('.rpz7y38').innerText);  /* the querySelector is returning null, need to fix. */
        for (i = 0; i < name.length; i++){
        entries.push({"name": name[i], "url": url[i], "price": price[i], "description": description[i]});
        };
        return entries;
    });
    return list;
}


module.exports = (browserInstance, url) => scrapeAll(browserInstance, url)
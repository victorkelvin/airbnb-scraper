const puppeteer = require('puppeteer-extra');
// randomized browser instances
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());


async function startBrowser() {
	let browser;

	try {
		console.log("Opening the browser......");
		browser = await puppeteer.launch({
			headless: true,
			executablePath: process.env.CHROME_BIN || null,
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
			dumpio: false
		});
	} catch (err) {
		console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}

module.exports = {
	startBrowser
};
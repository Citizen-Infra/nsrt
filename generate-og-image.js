const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630 });

    const htmlPath = path.join(__dirname, 'og-image.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    await page.screenshot({
        path: path.join(__dirname, 'og-image.png'),
        type: 'png'
    });

    await browser.close();
    console.log('Generated og-image.png (1200x630)');
})();

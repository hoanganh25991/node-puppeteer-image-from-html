const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://example.com');
  const dimensions = await page.evaluate((selector) => {
  	console.log(selector);
  	// let bill = document.querySelector('#bill');
   //  return {
   //    width: bill.clientWidth,
   //    height: bill.clientHeight,
   //    deviceScaleFactor: window.devicePixelRatio
   //  };
  });
  page
    .waitForSelector('img')
    .then(() => console.log('First URL with image: ' + currentURL));
  console.log(dimensions);
  await page.setViewport({width: 576, height: 500});
  await page.goto('file:///D:/work-station/node-puppeteer/receipt-html/receipt.html');
  await page.screenshot({path: 'example.png'});

  browser.close();
})();
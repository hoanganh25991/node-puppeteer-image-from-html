const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///D:/work-station/node-puppeteer/receipt-html/receipt.html');
  let dimensions  = await page.evaluate(() => {
  	let bill = document.querySelector('#bill');
  	return {width: bill.clientWidth, height: bill.clientHeight};
  });
  console.log(dimensions);
  // page.waitForSelector('#bill').then(bill => console.log(bill));
  await page.setViewport(dimensions);
  await page.screenshot({path: 'receipt.png'});

  browser.close();
})();


// const { Chromeless } = require('chromeless')

// async function run() {
//   const chromeless = new Chromeless()

//   await chromeless
//     .goto('file:///D:/work-station/node-puppeteer/receipt-html/receipt.html')

//   const dimesions = await chromeless.evaluate(() => {
//   	let bill = document.querySelector('#bill');
//     return {width: bill.clientWidth}
//   })
//   console.log(dimesions);
//   await chromeless.setViewport({width: 576, height: 500})
//   await screenshot = chromeless.screenshot();
//   console.log(screenshot)
//   await chromeless.end()
// }

// run().catch(console.error.bind(console))
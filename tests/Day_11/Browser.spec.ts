import { chromium, firefox, webkit } from 'playwright';

(async () => {

  // 🔹 CHROMIUM
  const chromiumBrowser = await chromium.launch({ headless: false });
  const chromiumContext = await chromiumBrowser.newContext();
  const chromiumPage = await chromiumContext.newPage();

  await chromiumPage.goto('https://example.com');
  console.log('Chromium Title:', await chromiumPage.title());

  await chromiumBrowser.close();


  // 🔹 FIREFOX
  const firefoxBrowser = await firefox.launch({ headless: false });
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();

  await firefoxPage.goto('https://example.com');
  console.log('Firefox Title:', await firefoxPage.title());

  await firefoxBrowser.close();


  // 🔹 WEBKIT (Safari Engine)
  const webkitBrowser = await webkit.launch({ headless: false });
  const webkitContext = await webkitBrowser.newContext();
  const webkitPage = await webkitContext.newPage();

  await webkitPage.goto('https://example.com');
  console.log('WebKit Title:', await webkitPage.title());

  await webkitBrowser.close();

})();


async function runTest(browserType: any, browserName: string) {
  const browser = await browserType.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  console.log(`${browserName} Title:`, await page.title());

  await browser.close();
}

(async () => {
  await runTest(chromium, 'Chromium');
  await runTest(firefox, 'Firefox');
  await runTest(webkit, 'WebKit');
})();
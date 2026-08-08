import { test, expect, BrowserContext, Page } from '@playwright/test';

test('Handle new tab in Playwright', async ({ browser }) => {

  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/windows');

  // Wait for new tab while clicking
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // listens for new tab
    page.click('text=Click Here')   // action that opens tab
  ]);

  // Wait for new page to load
  await newPage.waitForLoadState();

  // Validate content in new tab
  const text = await newPage.textContent('h3');
  console.log('New Tab Text:', text);

  await expect(newPage).toHaveTitle(/New Window/);
});
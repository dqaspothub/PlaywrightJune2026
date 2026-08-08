import { test } from '@playwright/test';

test('Switch between tabs', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/windows');

  const [tab1] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Click Here')
  ]);

  await tab1.waitForLoadState();

  // Get all pages (tabs)
  const pages = context.pages();

  console.log('Total Tabs:', pages.length);

  // Switch to first tab
  await pages[0].bringToFront();

  // Switch to second tab
  await pages[1].bringToFront();
});


/* context.waitForEvent('page') → Detects new tab/window

page.waitForEvent('popup') → Detects popup triggered by page

context.pages() → Get all tabs

bringToFront() → Switch tab

Always use Promise.all() → Avoid timing issues */
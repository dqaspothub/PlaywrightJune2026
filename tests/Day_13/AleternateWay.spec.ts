import { test } from '@playwright/test';

test('Handle new tab using page event', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),     // popup = new tab/window
    page.click('text=Click Here')
  ]);

  await newTab.waitForLoadState();

  console.log(await newTab.title());
});
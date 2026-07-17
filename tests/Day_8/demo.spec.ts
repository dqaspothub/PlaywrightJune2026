import { test, expect } from '@playwright/test';

test('Handle Simple Alert', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Listen to alert
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog.accept(); // Click OK
  });

  // Click button that triggers alert
  await page.click('#alertBtn');

});

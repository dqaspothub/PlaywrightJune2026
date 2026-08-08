import { test, expect } from '@playwright/test';

test('Navigate back example', async ({ page }) => {
  await page.goto('https://facebook.com');
  await page.goto('https://saucedemo.com/');

  await page.goBack();

  await page.goForward();  // go back to saucedemo

  console.log(await page.url()); // should be example.com

  await page.reload();

  console.log('Page reloaded');

//await page.reload({ waitUntil: 'load' });

 //await expect(page).toHaveTitle(/Example/);

});
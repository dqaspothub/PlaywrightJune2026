import { test, expect } from '@playwright/test';

test('Handle Simple Alert', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');


  page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept(); // Click OK
  });

  // Click button that triggers alert
  await page.click('#alertBtn');

});

test('Handle Confirm Alert - Cancel', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss(); // Click Cancel
  });

  await page.click('#confirmBtn');

});

test('Handle Prompt Alert', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept('Kannathasan'); // Enter text + OK
  });

  await page.click('#promptBtn');

});

test('SweetAlert Example', async ({ page }) => {

  await page.goto('https://letcode.in/alert');

  await page.locator("#modern").click;

  await page.locator("button[aria-label='close']").click;

});


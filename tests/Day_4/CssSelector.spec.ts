import { test } from '@playwright/test';

test('CSS Selector Example', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('admin');

  await page.locator('#password').fill('12345');

  await page.locator('.submit-button.btn_action').click();

});
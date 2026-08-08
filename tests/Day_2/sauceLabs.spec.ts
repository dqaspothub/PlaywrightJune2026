import { test, expect } from '@playwright/test';

test('SauceDemo Login using different Playwright locators', async ({ page }) => {

  // Step 1: Navigate to Sauce Labs
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter email using Placeholder locator
  await page.getByPlaceholder('Username').fill('standard_user');

  // Step 3: Enter password using Placeholder locator
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Step 4: Click login using Role locator

  await page.locator('#login-button').click();

  // Step 5: Validate page title
  await expect(page).toHaveTitle("Swag Labs");

});


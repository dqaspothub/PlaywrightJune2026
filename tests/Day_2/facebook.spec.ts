import { test, expect } from '@playwright/test';

test('Facebook Login using different Playwright locators', async ({ page }) => {

  // Step 1: Navigate to Facebook
  await page.goto('https://www.facebook.com/');

  // Step 2: Enter email using Label locator
  await page.getByLabel('Email address or mobile number').fill('testuser@gmail.com');

  // Step 3: Enter password using Label locator
  await page.getByLabel('Password').fill('testpassword');

  // Step 4: Click login using Role locator

  await page.getByRole('button', { name: 'Log in' }).click();

  // Step 5: Validate page title
  await expect(page).toHaveTitle("Facebook");

});


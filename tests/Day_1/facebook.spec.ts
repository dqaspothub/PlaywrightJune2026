import { test, expect } from '@playwright/test';

test('Facebook Login using different Playwright locators', async ({ page }) => {

  // Step 1: Navigate to Facebook
  await page.goto('https://www.facebook.com/');

  // Step 2: Enter email using Label locator
  const emailTextbox = await page.getByLabel('Email address or mobile number');
  await emailTextbox.fill('testuser@gmail.com');

  // Step 3: Enter password using Label locator
  const passwordTextbox = await page.getByLabel('Password');
  await passwordTextbox.fill('testpassword');

  // Step 4: Click login using Role locator

  await page.getByRole('button', { name: 'Log in' }).click();

  // Step 5: Validate page title
  await expect(page).toHaveTitle("Facebook");

});


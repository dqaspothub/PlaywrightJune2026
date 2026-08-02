import { test, expect } from '@playwright/test';

test('Automation Practice using different Playwright locators', async ({ page }) => {

  // Step 1: Navigate to Automation Practice
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Step 2: Enter email using Placeholder locator
  await page.locator('#name').fill('Ramya');

  // Step 3: Enter password using Placeholder locator
  await page.locator('#email').fill('ramya@example.com');

  await page.locator('#phone').fill('1234567890');

});

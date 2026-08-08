import { test, expect } from '@playwright/test';

test('Handle iFrame', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/iframe');

  // Switch to iframe
  const frame = page.frameLocator('#mce_0_ifr');

  // Clear existing text
  await frame.locator('#tinymce').clear();

  // Type inside iframe
  await frame.locator('#tinymce').fill('Hello from Playwright');

});
import { test, expect } from '@playwright/test';

test('Handle Iframe Example', async ({ page }) => {

  // Open the webpage
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_height_width');

  // Switch to outer iframe (iframeResult)
  const outerFrame = await page.frameLocator('#iframeResult');

  // Switch to inner iframe (nested iframe)
  const innerFrame = outerFrame.frameLocator('iframe');

  // Locate element inside inner iframe
  const heading = innerFrame.locator('h1');

  // Get text
  const text = await heading.textContent();
  console.log('Text inside iframe:', text);

  // No need to manually switch back in Playwright
  console.log('Playwright automatically handles frame context.');

});
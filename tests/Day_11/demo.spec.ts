import { test, expect } from '@playwright/test';


test('Slow test example', async ({ page }) => {
 
  await page.goto('https://facebook.com');
});
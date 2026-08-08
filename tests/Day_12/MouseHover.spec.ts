import { test } from '@playwright/test';

test('Hover Example', async ({ page }) => {

    await page.goto('https://omayo.blogspot.com/');

    // Hover over a menu
    await page.locator('#blogsmenu').hover();

    await page.waitForTimeout(3000); // Wait 3 seconds


});
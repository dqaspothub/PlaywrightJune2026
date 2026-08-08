import { test } from '@playwright/test';

test('Right Click Example', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.locator('.context-menu-one').click({button: 'right'});

    await page.waitForTimeout(3000); // Wait 3 seconds

});
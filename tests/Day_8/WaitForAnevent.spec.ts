import { test } from '@playwright/test';

test('Alert using waitForEvent', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Wait for alert
    const dialogPromise = page.waitForEvent('dialog');

    await page.click('text=Click for JS Alert');

    // Store dialog object
    const dialog = await dialogPromise;

    console.log(dialog.message());

    await dialog.accept();

});
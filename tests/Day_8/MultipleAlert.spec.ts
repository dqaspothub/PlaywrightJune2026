import { test } from '@playwright/test';

test('Handle Multiple Alerts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();
    });

    await page.click('text=Click for JS Alert');

    await page.click('text=Click for JS Confirm');

    await page.click('text=Click for JS Prompt');

});
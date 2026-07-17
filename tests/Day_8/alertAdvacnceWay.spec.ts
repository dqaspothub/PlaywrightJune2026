import { test, expect } from '@playwright/test';

test('Advanced Alert Handling', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log("Type : " + dialog.type());

        console.log("Message : " + dialog.message());

        console.log("Default Value : " + dialog.defaultValue());

        if (dialog.type() === 'prompt') {

            await dialog.accept('Playwright');

        } else {

            await dialog.accept();
        }
    });

    await page.click('text=Click for JS Alert');

    await page.click('text=Click for JS Confirm');

    await page.click('text=Click for JS Prompt');

});
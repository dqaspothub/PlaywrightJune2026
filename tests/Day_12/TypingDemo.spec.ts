import { test } from '@playwright/test';

test('Typing Example', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    await page.click('#userName');

    await page.keyboard.type('Kannathasan');

});

test('Hover Example', async ({ page }) => {

    await page.goto('https://demoqa.com/menu');

    await page.locator('text=Main Item 2').hover();

});

test('Keyboard and Mouse Example', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    // Type text
    await page.locator('#userName').click();
    await page.keyboard.type('Kannathasan');

    // Select all
    await page.keyboard.press('Control+A');

    // Copy
    await page.keyboard.press('Control+C');

    // Move using Tab
    await page.keyboard.press('Tab');

    // Paste
    await page.keyboard.press('Control+V');

    // Hover
    await page.locator('#menu').hover();

    // Right Click
    await page.click('#menu', {
        button: 'right'
    });

});
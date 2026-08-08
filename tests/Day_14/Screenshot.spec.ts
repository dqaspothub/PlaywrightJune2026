import { test } from '@playwright/test';

//Capture Visible Page Screenshot

test('Visible Page Screenshot', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.screenshot({
        path: 'screenshots/google.png'
    });

});

// Capture Full Page Screenshot

test('Full Page Screenshot', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await page.screenshot({
        path: 'screenshots/fullpage.png',
        fullPage: true
    });

});

// Capture Specific Element Screenshot

test('Element Screenshot', async ({ page }) => {

    await page.goto('https://www.google.com');

    const logo = page.locator('svg[aria-label="Google"]');

    await logo.screenshot({
        path: 'screenshots/logon.png',
        omitBackground: true
    });

});

// Screenshot with Timestamp

test('Timestamp Screenshot', async ({ page }) => {

    await page.goto('https://playwright.dev');

    const timestamp = Date.now();

    await page.screenshot({
        path: `screenshots/page-${timestamp}.png`
    });

});


// Screenshot After Every Test

test.afterEach(async ({ page }, testInfo) => {

    await page.screenshot({
        path: `screenshots/${testInfo.title}.png`
    });

});

// Screenshot Only on Failure
test.only('Sample Test', async ({ page }) => {

    await page.goto('https://playwright.dev');

});


test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`
        });

    }

});

// Attach Screenshot to Playwright Report

test('Screenshot Attachment', async ({ page }) => {

    await page.goto('https://playwright.dev');

    const screenshot = await page.screenshot();

    await test.info().attach('HomePage', {
        body: screenshot,
        contentType: 'image/png'
    });

});

// Capture Screenshot Before and After Action

test('Before After Screenshot', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.screenshot({
        path: 'before.png'
    });

    await page.locator('textarea')
        .fill('Playwright');

    await page.screenshot({
        path: 'after.png'
    });

});

// Screenshot During Exception Handling

test('Error Screenshot', async ({ page }) => {

    try {

        await page.goto('https://playwright.dev');

        await page.locator('#invalidLocator').click();

    } catch (error) {

        await page.screenshot({
            path: 'error.png'
        });

        throw error;
    }

});
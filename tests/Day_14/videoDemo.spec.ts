import { test, chromium } from '@playwright/test';

test('Get Video Path', async () => {

    const browser = await chromium.launch();

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/'
        }
    });

    const page = await context.newPage();

    await page.goto('https://www.google.com');

    await context.close();

    const videoPath = await page.video()?.path();

    console.log('Video Path : ', videoPath);

    await browser.close();

});
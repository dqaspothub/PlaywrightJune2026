import { test } from '@playwright/test';

test('Double Click Example', async ({ page }) => {

    await page.goto(
        'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick'
    );

    // Switch to iframe
    const frame = page.frameLocator('#iframeResult');

    // Locate the paragraph
    const paragraph = frame.locator("//p[contains(text(),'paragraph')]");

    // Double click
    await paragraph.dblclick();

    // Pause for observation
    await page.waitForTimeout(5000);


});
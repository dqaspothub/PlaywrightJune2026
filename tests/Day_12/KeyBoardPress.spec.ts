import { test } from '@playwright/test';



test('Keyboard Events', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.getByTitle('Search')
              .fill('Playwright Tutorial');

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Backspace');

    await page.getByTitle('Search')
              .fill('Playwright Automation');

    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);

});

/*
await page.keyboard.press('Enter');
await page.keyboard.press('Tab');
await page.keyboard.press('Escape');
await page.keyboard.press('Backspace');
await page.keyboard.press('Delete');

await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Control+V');
await page.keyboard.press('Control+X');

await page.keyboard.press('ArrowUp');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowLeft');
await page.keyboard.press('ArrowRight');
*/
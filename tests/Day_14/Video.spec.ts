import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test('headed + slow motion + video', async () => {

  const browser = await webkit.launch({
    headless: false,     // 👈 headed mode
    slowMo: 500          // 👈 slow motion (500ms delay)
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',    // 👈 video folder
      size: { width: 1280, height: 720 }
    }
  });

  const page = await context.newPage();

  await page.goto('https://facebook.com');

  await context.close(); // 👈 IMPORTANT: saves video
  await browser.close();
});
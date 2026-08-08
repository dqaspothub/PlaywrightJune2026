import { test, expect } from '@playwright/test';

test(`File Upload with type="file" for multiple files`,async ({page}) => {
    
        await page.goto('https://testautomationpractice.blogspot.com/');

   const multiFileInput = page.locator('#multipleFilesInput'); // adjust if needed

  await multiFileInput.setInputFiles([
    'D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/fullpage.png',
    'D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/logo.png'
  ]);

  // =========================================================
  // 🔥 REMOVE UPLOADED FILES
  // =========================================================

    await page.mouse.wheel(0, 1200); // scroll down

    await multiFileInput.setInputFiles([]); // clears files

    await page.waitForTimeout(8000);

    


});
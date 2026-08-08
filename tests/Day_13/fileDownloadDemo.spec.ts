import { test, expect } from '@playwright/test';

test('File Download Example', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');
    
  // Start download and wait for it
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('text=some-file.txt') // click download link
  ]);
  
  // Save file to custom location
  await download.saveAs('D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/myfile.txt');

console.log(await download.failure());
});

/* await download.path();        // temp file path
await download.saveAs(path);  // save file
await download.failure();     // check failure
await download.suggestedFilename(); // get file name */
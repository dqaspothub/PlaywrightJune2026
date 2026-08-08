import { test, expect } from "@playwright/test";

//Scenario 1 : We have type=file in the DOM

test.skip(`File Upload with type="file"`,async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    
  // =========================================================
  // 🔥 FILE UPLOAD (Single File)
  // =========================================================

  const singleFileInput = page.locator('#singleFileInput'); // adjust if needed

  await singleFileInput.setInputFiles('D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/Sample Test.png');

  // Assertion (basic)
  expect(await singleFileInput.inputValue()).toContain('Sample Test.png');


})


test.skip(`File Upload with type="file" for multiple files`,async ({page}) => {
    
        await page.goto('https://testautomationpractice.blogspot.com/');

   const multiFileInput = page.locator('#multipleFilesInput'); // adjust if needed

  await multiFileInput.setInputFiles([
    'D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/Sample Test.png',
    'D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/Sample Test.png'
  ]);

  // =========================================================
  // 🔥 REMOVE UPLOADED FILES
  // =========================================================

  //await multiFileInput.setInputFiles([]); // clears files

    await page.waitForTimeout(8000);


})

//Scenario 2 :When we don't have type=file in the DOM

test(`File Upload with no type="file"`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent('filechooser')

    await page.locator(`//div[@id="drag-drop-upload"]`).click();

    const fileUpload = await filePromise

    await fileUpload.setFiles("D:/Kannathasan/Training_2026/PlaywrightWeekDayMar2026/screenshots/Sample Test.png")

    await page.waitForTimeout(3000);

})


/* ✔ Must be <input type="file">
✔ No need to click “Browse”
✔ File path should be correct
✔ Works even if input is hidden (Playwright handles it) */
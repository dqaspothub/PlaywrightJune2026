import { test, expect } from '@playwright/test';

test('Handle iFrame', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Switch to iframe

const allframes =  page.frames();

console.log("The total number of frames",allframes.length);

allframes.forEach(frame => {
  console.log("Name of the frame", frame.name());
  console.log("URL of the frame", frame.url());
});

  
   // approach 1: using name or url
 
   // const var = await page.frame('name'); // if name is present

const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });



if (frame1) {
  await frame1.fill('[name="mytext1"]', 'Hello');
} else {
  console.log('Frame not found');
}

//await frame1!.fill('[name="mytext1"]', 'Hello');


// approach 2 - using frame locator

/* const inputbox = await page.frameLocator("frame[src='frame_1.html']");

const txtbox = inputbox.locator("[name='mytext1']");

await txtbox.fill("Hello"); */

const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");

await inputbox.fill("Hello");

await page.waitForTimeout(5000);

});
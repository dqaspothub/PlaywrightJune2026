import { test, expect } from '@playwright/test';

test('Handle nested iFrame', async ({ page }) => {

await page.goto('https://ui.vision/demo/webtest/frames/');

const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

// frame3.locator("input[name='mytext3']").fill('welcome')

// nested frame

if (frame3) {
const childFrames = await frame3.childFrames();
await childFrames[0].locator("//*[@id='i6']/div[3]/div").check();
} else {
  console.log('No child Frame found');
}

const parentFrame = await page.frame({ url: /frame_3/ });

const childFrames = parentFrame?.childFrames();

childFrames?.forEach(f => console.log(f.url()));

await page.waitForTimeout(5000);

});


/* await page
  .frameLocator("frame[src='frame_3.html']").frameLocator("iframe").locator('#checkbox').check(); */

  /* await page
  .frameLocator("frame[src='frame_3.html']").frameLocator("b1").frameLocator("r1").locator('#checkbox').check(); */
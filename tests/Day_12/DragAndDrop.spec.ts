import { test } from '@playwright/test';

test('Drag and Drop Example', async ({ page }) => {

    await page.goto('https://jqueryui.com/droppable/');

    const frame = page.frameLocator('.demo-frame');

    await page.waitForTimeout(3000); // Wait 3 seconds

    let draggable = await frame.locator('#draggable');
    
    let droppable = await frame.locator('#droppable');

    draggable.dragTo(droppable);

   /* await frame.locator('#draggable')
               .dragTo(frame.locator('#droppable')); */

    await page.waitForTimeout(3000); // Wait 3 seconds

});
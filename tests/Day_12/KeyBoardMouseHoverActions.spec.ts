import { test, expect } from '@playwright/test';

test('Keyboard, Mouse, DragDrop & File Upload Actions', async ({ page }) => {

  // 🔹 1. Navigate to demo site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // =========================================================
  // 🔥 KEYBOARD ACTIONS
  // =========================================================

  const inputBox = page.locator('#name');

  await inputBox.click();
  // Typing text
  await page.keyboard.type('Playwright');
  // Select all (Ctrl + A) and copy (Ctrl + C)
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');
  // Paste into another field
  const commentsBox = page.locator('#textarea');
  await commentsBox.click();
  await page.keyboard.press('Control+V');
  // Assertion
  await expect(commentsBox).toHaveValue('Playwright');

  await page.waitForTimeout(8000);

  // =========================================================
  // 🔥 MOUSE HOVER ACTION
  // =========================================================

       await page.goto('https://www.ajio.com/');
       const allowBtn = page.locator('#closeBtn-locale-banner-popup');
      // Click if visible
if (await allowBtn.isVisible()) {
  await allowBtn.click();
}

  const MainMenu = page.locator("//span[text()='MEN']");
  // Hover over menu
  await MainMenu.hover();
  const subMenu = page.locator("div[id='ul-MEN'] a[aria-label='Jackets & Coats']");
  await expect(subMenu).toBeVisible();
  // Click submenu after hover
  await subMenu.click();

  // Assertion
  await expect(page).toHaveURL(/jacketsandcoats/);

 
  // =========================================================
  // 🔥 DRAG & DROP ACTION
  // =========================================================

  await page.goto('https://testautomationpractice.blogspot.com/');

  const source = page.locator('#draggable');
  const target = page.locator('#droppable');

  // Drag and Drop
  await source.dragTo(target);

  // Assertion
  await expect(target).toContainText('Dropped');

  // =========================================================
  //  MOUSE MOVE & CLICK (Coordinates)
  // =========================================================
  await page.mouse.move(200, 200);
  await page.mouse.click(200, 200);

  // =========================================================
  // 🔹 SCROLL USING MOUSE WHEEL
  // =========================================================
  await page.mouse.wheel(0, 500); // scroll down
  
});
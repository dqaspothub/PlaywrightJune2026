import { test, expect } from '@playwright/test';

test('Right Click Example', async ({ page }) => {

  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

  const buttontext = page.locator('text=Double-Click Me To See Alert');

  // Perform double click
  await buttontext.dblclick();

  await page.waitForTimeout(7000);

  // Handle alert
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('You double clicked me');
    await dialog.accept();
  });

  const button = page.locator('text=right click me');

  // Perform right click
  await button.click({ button: 'right' });

await page.waitForTimeout(7000);

  // Validate context menu appears
  const menuOption = page.locator('text=Edit');
  await expect(menuOption).toBeVisible();


});

/* { button: 'left' }   // default
{ button: 'right' }  // right click
{ button: 'middle' } // middle click (scroll button) */
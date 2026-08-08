import { test, expect } from '@playwright/test';

test('Add user test', async ({ page }, testInfo) => {

  testInfo.annotations.push({
    type: 'TestType',
    description: 'Smoke Test for Add User functionality'
  });

  await page.goto('https://facebook.com');
});

test('Checkout test @smoke @regression', {
  annotation: [{ type: 'smoke', description: 'Critical checkout flow' },{ type: 'feature', description: 'E-commerce module' }]
}, async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
});


test.describe('E-commerce Tests @regression', () => {

  test('Place order', {
    annotation: [
      { type: 'smoke', description: 'Verify order placement' },
      { type: 'priority', description: 'High priority test' }
    ]
  }, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
  });

});
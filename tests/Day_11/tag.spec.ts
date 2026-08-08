import { test, expect } from '@playwright/test';

test('Login test @smoke @regression', async ({ page }) => {
  await page.goto('https://example.com');
});

// npx playwright test --grep @smoke
// npx playwright test --grep "@smoke|@search"

//You can apply annotations to a group of tests.

test.describe('Test Suite', () => {

  test.skip(() => true, 'Skipping all tests in this suite');

  test('Test 1', async ({ page }) => {
    await page.goto('https://facebook.com');
  });

  test('Test 2', async ({ page }) => {
    await page.goto('https://facebook.com');
  });

});
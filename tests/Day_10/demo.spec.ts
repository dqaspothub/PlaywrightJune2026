import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('🚀 Launching test suite');
});

test.afterAll(async () => {
  console.log('🧹 Cleaning up after all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('🌐 Opening website');
  await page.goto('https://facebook.com');
});

test.afterEach(async ({ page }) => {
  console.log('📸 Taking screenshot after test');
  await page.screenshot({ path: `screenshot-${Date.now()}.png` });
});

test('Test 1 - Verify title', async ({ page }) => {
    await expect(page).toHaveTitle('Facebook');
});

test('Test 2 - Verify URL', async ({ page }) => {

        await expect(page).toHaveURL('https://www.facebook.com/');
});
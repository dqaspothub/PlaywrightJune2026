import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
   console.log('Starting Test Execution');
});

test.afterAll(async () => {
   console.log('All Tests Completed');
});

test.beforeEach(async ({ page }) => {

   console.log('Launching Application');

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   // Login
   await page.locator('input[name="username"]').fill('Admin');

   await page.locator('input[name="password"]').fill('admin123');

   await page.locator('button[type="submit"]').click();

});

test.afterEach(async ({ page }) => {

   console.log('Closing Page');

   await page.close();

});

test('Verify Dashboard', async ({ page }) => {

   await expect(page.locator('h6')).toHaveText('Dashboard');

});

test('Verify Admin Menu', async ({ page }) => {

   await page.locator('//span[text()="Admin"]').click();

   await expect(page).toHaveURL(/admin/);

});
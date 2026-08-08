import { test, expect } from '@playwright/test';

test.describe('Demo Test Suite with Hooks', () => {

  // Runs once before all tests in this describe block
  test.beforeAll(async () => {
    console.log('🚀 Before All Tests - Setup started');
  });

  // Runs once after all tests
  test.afterAll(async () => {
    console.log('🧹 After All Tests - Cleanup done');
  });

  // Runs before each test
  test.beforeEach(async ({ page }) => {
    console.log('🌐 Before Each Test - Navigating to site');
    await page.goto('https://facebook.com');
  });

  // Runs after each test
  test.afterEach(async ({ page }, testInfo) => {
    console.log(`📸 After Each Test - Test Name: ${testInfo.title}`);

    // Take screenshot on failure
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({ path: `error-${testInfo.title}.png` });
    }
  });

  // Test Case 1
  test('Verify Page Title', async ({ page }) => {
    await expect(page).toHaveTitle('Facebook');
  });

  // Test Case 2
  test('Verify Page URL', async ({ page }) => {
      await expect(page).toHaveURL('https://www.facebook.com/');
  });

  // Test Case 3
  test('Verify More Information Link', async ({ page }) => {

    const currentUrl = page.url(); // Gets the URL as a string
     
    console.log("The current URL of the page", currentUrl);

    const statusElement = await page.getByText('Log in to Facebook', { exact: true })

    await expect(statusElement).toHaveText('Log in to Facebook');

    //await expect(statusElement).toContainText('Log in to Facebook');

//    await expect(statusElement).toHaveText(/Log in to Facebook/i);

});

});


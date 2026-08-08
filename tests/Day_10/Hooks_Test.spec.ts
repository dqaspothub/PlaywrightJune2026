// Import playwright module
import { test, expect } from '@playwright/test';

test.beforeAll(async() => {
    console.log(`Running before all tests...`);
});

test.beforeEach(async( { page }) => {
    console.log(`Running before each tests...`);
    await page.goto('https://www.facebook.com/');
});

test.afterEach(async() => {
    console.log(`Running after each tests...`);
});

test.afterAll(async() => {
    console.log(`Running after all tests...`);
});

test('Test 1 - Verify the page title', async ({page}) => { 
    console.log('Test1 execution started...');

    await page.goto("https://www.facebook.com/");

    const titleOfthePage = await page.title();
    
    console.log(titleOfthePage);

    await expect(page).toHaveTitle('Facebook');

});


test('Test 2 - Facebook Login using different Playwright locators', async ({ page }) => {
    console.log('Test2 execution started...');
   

  // Step 1: Navigate to Facebook
  await page.goto('https://www.facebook.com/');

  // Step 2: Enter email using Label locator
  await page.getByLabel('Email address or mobile number').fill('testuser@gmail.com');

  // Step 3: Enter password using Label locator
  await page.getByLabel('Password').fill('testpassword');

  // Step 4: Click login using Role locator

  await page.getByRole('button', { name: 'Log in' }).click();

  // Step 5: Validate page title
  await expect(page).toHaveTitle("Facebook");

});
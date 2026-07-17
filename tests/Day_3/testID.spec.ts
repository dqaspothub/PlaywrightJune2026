import { test, expect } from '@playwright/test';

test('Locator demo', async ({ page }) => {

await page.goto('file:///C:/Users/priya/OneDrive/Desktop/DemoPage.html');

await page.getByTitle('Save User Details').click();

await page.getByTestId('username-input').fill('Admin');

await page.waitForTimeout(2000);

await page.getByTestId('password-input').fill('12345');

await page.waitForTimeout(2000);

await page.getByTestId('login-button').click();

await page.waitForTimeout(2000);

});
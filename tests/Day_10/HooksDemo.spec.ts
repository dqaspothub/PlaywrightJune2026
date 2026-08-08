import { test, expect } from '@playwright/test';

test.beforeAll("Before All",async () => {
    console.log("Before All - Execute Once");
});

test.afterAll("After All",async () => {
    console.log("After All - Execute Once");
});

test.beforeEach("Before Each Test", async ({ page }) => {
    console.log("Before Each Test - Launching Web Page");
    await page.goto("https://www.saucedemo.com/");
});

test.afterEach("After Each Test",async ({ page }) => {
    console.log("After Each Test");
    await page.close();
});

test("Login Test", async ({ page }) => {

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await expect(page).toHaveURL(/inventory/);

});

test("Verify Title", async ({ page }) => {

    await expect(page).toHaveTitle("Swag Labs");

});
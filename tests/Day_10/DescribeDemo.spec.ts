import { test, expect } from '@playwright/test';

test.describe("Login Module", () => {

    test.beforeEach(async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");

    });

    test("Valid Login", async ({ page }) => {

        await page.fill("#user-name", "standard_user");

        await page.fill("#password", "secret_sauce");

        await page.click("#login-button");

        await expect(page).toHaveURL(/inventory/);

    });

    test("Invalid Login", async ({ page }) => {

        await page.fill("#user-name", "locked_out_user");

        await page.fill("#password", "secret_sauce");

        await page.click("#login-button");

    });

});

test("Verify Title of facebook", async ({ page }) => {

    test.slow();
    
    await page.goto("https://www.facebook.com/");

    await page.getByLabel("Email address or mobile number").fill("standard_user");

    await page.getByLabel("Password").fill("secret_sauce");

    await page.click("#login-button");

});


import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", "standard_user");

    await page.fill("#password", "secret_sauce");

    await page.click("#login-button");

});

test("Verify Products Page", async ({ page }) => {

    await expect(page).toHaveURL(/inventory/);

});

test("Verify Product Count", async ({ page }) => {

    const count = await page.locator(".inventory_item").count();

    console.log(count);

    expect(count).toBe(6);

});
import { test, expect } from '@playwright/test';

test('Locator Options Demo', async ({ page }) => {

await page.goto('http://127.0.0.1:5500/tests/Day_5/LocatorOptions.html');
    // has
    const addToCartCards = page.locator('.card', {
        has: page.locator('button:text("Add to Cart")')
    });

    await expect(addToCartCards).toHaveCount(2);

    // hasNot
    const noBuyNowCards = page.locator('.card', {
        hasNot: page.locator('button:text("Buy Now")')
    });

    await expect(noBuyNowCards).toHaveCount(2);

    // hasText
    const samsung = page.locator('.card', {
        hasText: 'Samsung'
    });

    await expect(samsung).toHaveCount(1);

    // hasNotText
    const nonSamsung = page.locator('.card', {
        hasNotText: 'Samsung'
    });

    await expect(nonSamsung).toHaveCount(2);

});
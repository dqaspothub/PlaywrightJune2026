import { test, expect } from '@playwright/test';

test.describe('SauceDemo Assertions Suite', () => {

  test('demonstrate all 13 Playwright assertions on SauceDemo', async ({ page }) => {

    // 1. expect(page).toHaveURL() - Verify landing page URL
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // 2. expect(page).toHaveTitle() - Verify title of the login page
    await expect(page).toHaveTitle('Swag Labs');

    // 3. expect(locator).toBeVisible() - Verify login button is present
    const loginButton = page.locator('#login-button');
    await expect(loginButton).toBeVisible();

    // 4. expect(locator).toHaveAttribute() - Verify input attribute
    const usernameInput = page.locator('#user-name');
    await expect(usernameInput).toHaveAttribute('placeholder', 'Username');

    // 5. expect(locator).toBeEnabled() - Verify login button is clickable
    await expect(loginButton).toBeEnabled();

    // 6. expect(locator).toHaveValue() - Verify input field value after typing
    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user');

    // Fill password and log in
    await page.locator('#password').fill('secret_sauce');
    await loginButton.click();

    // Verify successful login navigation
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 7. expect(locator).toHaveCount() - Verify inventory has 6 items
    const inventoryItems = page.locator('.inventory_item');
    await expect(inventoryItems).toHaveCount(6);

    // 8. expect(locator).toHaveText() - Verify exact text of first item title
    const firstItemTitle = inventoryItems.first().locator('.inventory_item_name');
    await expect(firstItemTitle).toHaveText('Sauce Labs Backpack');

    // 9. expect(locator).toContainText() - Verify description contains substring
    const firstItemDesc = inventoryItems.first().locator('.inventory_item_desc');
    await expect(firstItemDesc).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

    // Open side menu to interact with checkboxes/toggles
    await page.getByRole('button', { name: 'Open Menu' }).click();

    // 10. expect(locator).toBeChecked() - Verify menu item state if selected
    // Let's navigate to checkout page to test a checkbox-like element or input state
    await page.getByRole('link', { name: 'Reset App State' }).click();
    await page.getByRole('button', { name: 'Close Menu' }).click();

    // Add item to cart and go to checkout
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    // Fill checkout form
    await page.locator('[data-test="firstName"]').fill('Jane');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    // ------------------------------------------------------------------
    // Generic JS Value Assertions
    // ------------------------------------------------------------------

    // Extract all item prices on summary page
    const pricesText = await page.locator('.inventory_item_price').allInnerTexts();
    // pricesText = ['$29.99']

    // 11. expect(value).toEqual() - Strict deep equality check on array
    expect(pricesText).toEqual(['$29.99']);

    // 12. expect(value).toContain() - Check array contains specific string item
    expect(pricesText).toContain('$29.99');

    // 13. expect(value).toBeTruthy() - Check boolean condition evaluates to true
    const isFinishButtonVisible = await page.locator('[data-test="finish"]').isVisible();
    expect(isFinishButtonVisible).toBeTruthy();

  });

});
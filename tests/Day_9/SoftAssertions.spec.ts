import { test, expect } from '@playwright/test';

test.describe('Soft Assertions Demo', () => {

  test('validate profile form using soft assertions', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    const newTodoInput = page.getByPlaceholder('What needs to be done?');
    await newTodoInput.fill('Buy groceries');
    await newTodoInput.press('Enter');

    const todoItem = page.getByTestId('todo-item').first();

    // ------------------------------------------------------------------
    // Soft Assertions Block
    // Even if one of these fails, the others will still execute!
    // ------------------------------------------------------------------

    // 1. Soft check text content
    await expect.soft(todoItem).toHaveText('Buy groceries');

    // 2. Soft check CSS class
    await expect.soft(todoItem).toHaveClass('completed'); // Suppose this fails...

    // 3. Soft check visibility of toggle button
    await expect.soft(todoItem.getByRole('checkbox')).toBeVisible(); // ...this still runs!

    // 4. Soft check placeholder attribute on main input
    await expect.soft(newTodoInput).toHaveAttribute('placeholder', 'What needs to be done?');

    // ------------------------------------------------------------------
    // Hard Assertion / Critical Path
    // Use a regular expect when you MUST stop if something is broken
    // ------------------------------------------------------------------
    await todoItem.getByRole('checkbox').check();
    await expect(todoItem).toHaveClass('completed'); // Hard check
  });

  test('checking test.info().errors manually', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    // You can inspect logged soft errors programmatically if needed:
    await expect.soft(page).toHaveTitle('Wrong Title');

    // Check if soft assertions failed during execution
    const softFailures = test.info().errors;
    console.log(`Soft failures so far: ${softFailures.length}`);
  });

});
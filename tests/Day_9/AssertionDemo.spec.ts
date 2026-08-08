import { test, expect } from '@playwright/test';

test.describe('Playwright Assertions Demo', () => {

  test('demonstrate core assertion methods', async ({ page }) => {
    // ------------------------------------------------------------------
    // 1. Page & URL Assertions
    // ------------------------------------------------------------------
    await page.goto('https://demo.playwright.dev/todomvc/');

    // Verify title and URL using exact strings and Regular Expressions
    await expect(page).toHaveTitle('React • TodoMVC');
    await expect(page).toHaveURL('https://demo.playwright.dev/todomvc/#/');
    await expect(page).toHaveURL(/todomvc/);

    // ------------------------------------------------------------------
    // 2. Element Visibility, Presence & Count
    // ------------------------------------------------------------------
    const heading = page.getByRole('heading', { name: 'todos' });
    const newTodoInput = page.getByPlaceholder('What needs to be done?');
    const todoItems = page.getByTestId('todo-item');

    // Check visibility and DOM presence
    await expect(heading).toBeVisible();
    await expect(heading).toBeAttached();

    // Verify element count before and after adding items
    await expect(todoItems).toHaveCount(0);

    // Add items for testing
    await newTodoInput.fill('Buy groceries');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Write Playwright tests');
    await newTodoInput.press('Enter');

    await expect(todoItems).toHaveCount(2);

    // ------------------------------------------------------------------
    // 3. Text & Value Content Assertions
    // ------------------------------------------------------------------
    const firstTodo = todoItems.nth(0);
    const secondTodo = todoItems.nth(1);

    // Exact text vs. substring matching
    await expect(firstTodo).toHaveText('Buy groceries');
    await expect(secondTodo).toContainText('Playwright');

    // Input field value checks
    await expect(newTodoInput).toHaveValue(''); // Cleared after submit
    await expect(newTodoInput).toBeEmpty();

    // ------------------------------------------------------------------
    // 4. Element State & Interactivity Assertions
    // ------------------------------------------------------------------
    const toggleFirstTodo = firstTodo.getByRole('checkbox');

    // Interactivity checks
    await expect(newTodoInput).toBeEnabled();
    await expect(newTodoInput).toBeEditable();

    // Focus state check
    await newTodoInput.focus();
    await expect(newTodoInput).toBeFocused();

    // Checkbox / toggle states
    await expect(toggleFirstTodo).not.toBeChecked();
    await toggleFirstTodo.check();
    await expect(toggleFirstTodo).toBeChecked();

    // ------------------------------------------------------------------
    // 5. Attributes, Styling & Classes
    // ------------------------------------------------------------------
    // Attribute verification
    await expect(newTodoInput).toHaveAttribute('placeholder', 'What needs to be done?');

    // CSS Class assertion (completed item gets 'completed' class)
    await expect(firstTodo).toHaveClass('completed');
    await expect(secondTodo).not.toHaveClass(/completed/);

    // Computed CSS property assertion
    const mainHeader = page.locator('header h1');
    await expect(mainHeader).toHaveCSS('text-align', 'center');

    // Hidden state check (Filter to completed items, main list section stays visible)
    const clearCompletedBtn = page.getByRole('button', { name: 'Clear completed' });
    await expect(clearCompletedBtn).toBeVisible();

    // ------------------------------------------------------------------
    // 6. Visual Regression Testing
    // ------------------------------------------------------------------
    // Takes a snapshot of the element/page and compares against baseline
    await expect(heading).toHaveScreenshot('todos-heading.png');
  });

  test('demonstrate API response & soft assertions', async ({ page, request }) => {
    // ------------------------------------------------------------------
    // 7. API Response Assertion
    // ------------------------------------------------------------------
    const response = await request.get('https://api.github.com/zen');
    await expect(response).toBeOK(); // Status code in 200–299 range

    // ------------------------------------------------------------------
    // 8. Soft Assertions
    // ------------------------------------------------------------------
    await page.goto('https://demo.playwright.dev/todomvc/');

    // Soft assertions won't immediately throw an error if they fail;
    // all failures are compiled and reported at the end of the test.
    await expect.soft(page).toHaveTitle('React • TodoMVC');
    await expect.soft(page.getByRole('heading')).toBeVisible();
  });

});
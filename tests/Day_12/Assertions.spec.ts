import { test, expect } from '@playwright/test';

test('Complete Assertions Demo', async ({ page }) => {

  // 1️⃣ Navigate to a demo site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2️⃣ Basic Page Assertions
  await expect(page).toHaveURL(/testautomationpractice/);
  await expect(page).toHaveTitle(/Automation Testing Practice/);
  await expect(page).toHaveTitle(/^Automation/); 
  await expect(page).toHaveTitle(/Practice$/); 
  await expect(page).toHaveTitle("Automation Testing Practice");

  // 3️⃣ Visibility Assertions
  const nameInput = page.locator('#name');
  await expect(nameInput).toBeVisible();

  // 4️⃣ Input Field Assertions
  await nameInput.fill('John Doe');
  await expect(nameInput).toHaveValue('John Doe');

  // 5️⃣ Radio Button Assertions
  const maleRadio = page.locator('#male');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  // 6️⃣ Checkbox Assertions
  const sundayCheckbox = page.locator('#sunday');
  await sundayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();

  // 7️⃣ Dropdown Assertions
  const countryDropdown = page.locator('#country');
  await countryDropdown.selectOption('india');
  await expect(countryDropdown).toHaveValue('india');

  // 8️⃣ Button Enabled/Disabled
  const submitBtn = page.locator('button[type="submit"]');
  await expect(submitBtn).toBeEnabled();

  // 9️⃣ Text Assertions
  const header = page.locator('h1');
  await expect(header).toContainText('Automation Testing Practice');

  // 🔟 Attribute Assertion
  await expect(nameInput).toHaveAttribute('type', 'text');

  // 1️⃣1️⃣ Count Assertion
  const links = page.locator('a');
  await expect(links).toHaveCount(await links.count());

  // 1️⃣2️⃣ Negation Assertion
  const hiddenElement = page.locator('#hiddenElement');
  await expect(hiddenElement).not.toBeVisible();

  // 1️⃣3️⃣ Soft Assertions (test won't stop)
  await expect.soft(page.locator('#name')).toHaveValue('John Doe');
  await expect.soft(page.locator('#male')).toBeChecked();

  //  Array / List Validation
  const allLinksText = await links.allTextContents();
  expect(allLinksText.length).toBeGreaterThan(0);
  
});
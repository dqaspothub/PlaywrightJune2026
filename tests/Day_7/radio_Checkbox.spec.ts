import { test, expect } from '@playwright/test';

test('Handle Radio Button and Checkbox', async ({ page }) => {

  // Open the practice site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // -----------------------------
  // RADIO BUTTON
  // -----------------------------

  // Select Male radio button
  const maleRadioButton = await page.locator('#male');
  await maleRadioButton.check();

  // Verify radio button selected
  await expect(maleRadioButton).toBeChecked();

  console.log("Male radio button selected");

  // -----------------------------
  // CHECKBOX
  // -----------------------------

  // Select Monday checkbox
  await page.locator('#monday').check();

    await page.waitForTimeout(2000);


  // Select Wednesday checkbox
  await page.locator('#wednesday').check();

    await page.waitForTimeout(2000);


  // Verify checkboxes
  await expect(page.locator('#monday')).toBeChecked();
  await expect(page.locator('#wednesday')).toBeChecked();

  console.log("Monday and Wednesday selected");

  const days = await page.locator("input[type='checkbox'][class=form-check-input]").all();
    await page.waitForTimeout(2000);


for (const day of days) {
  await day.check();
}

  await page.waitForTimeout(2000);


await page.locator('#monday').uncheck();

  await page.waitForTimeout(2000);


const status = await page.locator('#monday').isChecked();
console.log(status);

});


/* | Feature   | Radio           | Checkbox          |
| --------- | --------------- | ----------------- |
| Selection | Only one option | Multiple options  |
| Example   | Gender          | Skills            |
| HTML      | `type="radio"`  | `type="checkbox"` |

| Method          | Usage                    |
| --------------- | ------------------------ |
| `check()`       | Select checkbox or radio |
| `uncheck()`     | Unselect checkbox        |
| `isChecked()`   | Verify checked state     |
| `toBeChecked()` | Assertion                |

 */
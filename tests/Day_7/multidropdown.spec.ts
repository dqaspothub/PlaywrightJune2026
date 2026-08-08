import { test,expect} from '@playwright/test'

test('Verify multi dropdown ', async ({page}) => { 

    // Step 1: Launch the browser and hit the  URL

  await page.goto('https://letcode.in/dropdowns');

  await page.waitForTimeout(2000);

  // Step 2: Select the fruits dropdown by element ID

  const heroMultiDropdown = page.locator('#superheros');

  await page.waitForTimeout(2000);

  // Step 3: Select by index (4th option = index 3, zero-based)
  await heroMultiDropdown.selectOption([{ value: 'Ant-Man' },{ value: 'The Avengers' }]);

  await page.waitForTimeout(2000);

  })

  /* await page.locator('#skills').selectOption([
  { label: 'Java' },
  { label: 'Python' }
]);

await page.locator('#skills').selectOption([
  { index: 0 },
  { index: 2 }
]); 

Get Option Count

const count = await page.locator('#fruits option').count();

console.log(count);

Loop Through Dropdown Options

const options = await page.locator('#fruits option').all();

for (const option of options) {
  const text = await option.textContent();
  console.log(text);
}

Verify Selected Value

const selected = await page.locator('#fruits').inputValue();

console.log(selected);


Verify Dropdown Contains Expected Values

const expected = ['Apple','Mango','Orange'];

const actual = await page.locator('#fruits option').allTextContents();

expect(actual).toEqual(expected);

Custom Dropdown (Most Modern Websites)

Example

<div class="dropdown">
  <li>India</li>
  <li>USA</li>
</div>

Automation

await page.click('.dropdown');
await page.click('text=India');

*/
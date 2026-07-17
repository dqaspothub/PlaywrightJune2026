import { test,expect} from '@playwright/test'

test('Verify single dropdown ', async ({page}) => { 

    // Step 1: Launch the browser and hit the  URL

  await page.goto('https://letcode.in/dropdowns');

  await page.waitForTimeout(2000);

  // Step 2: Select the fruits dropdown by element ID

  const fruitsDropdown = page.locator('#fruits');

  await page.waitForTimeout(2000);

  // Step 3: Select by index (4th option = index 3, zero-based)
  await fruitsDropdown.selectOption({ index: 3 });

  await page.waitForTimeout(2000);

  // Step 4: Select 'Pine Apple' by visible text
  await fruitsDropdown.selectOption({ label: 'Pine Apple' });

  await page.waitForTimeout(2000);

  // Step 5: Select 'Mango' by value 
  await fruitsDropdown.selectOption({ value: '1' });

  await page.waitForTimeout(2000);

  const options = await fruitsDropdown.allTextContents();

  console.log(options.length);
  
  console.log(options);

  const actualvalues = await page.locator('#fruits option').allTextContents();
  
  console.log(actualvalues);

  console.log(options.length);

  // Validation

  const expected = ['Select Fruit','Apple','Mango','Orange','Banana','Pine Apple'];

  expect(actualvalues).toEqual(expected);

  // Get Dropdown Values Using $$ (Element Handles)

  const optionsOfdropdown = await page.$$('#fruits option');

  for (const option of optionsOfdropdown) {
  const text = await option.textContent();
  console.log("Using for of loop", text);
}

  console.log("*******************DropDown Iterations***********************");

const fruitsDropdowns = page.locator('#fruits option');

const count = await fruitsDropdowns.count();

for(let i = 0; i < count; i++) {

    const text = await fruitsDropdowns.nth(i).textContent();

    console.log(text);
}
  
})


/* | Type                       | Description                          |
| -------------------------- | ------------------------------------ |
| **Single Select Dropdown** | Only one option can be selected      |
| **Multi Select Dropdown**  | Multiple options can be selected     |
| **Custom Dropdown**        | Built using div/li instead of select |
 */
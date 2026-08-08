import { test, expect } from '@playwright/test';

// Used to skip a test

test.skip('Skip this test', async ({ page }) => {
  await page.goto('https://facebook.com');
});

// Conditional Skip

test('Skip on Firefox', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Skipping on Firefox');

  await page.goto('https://example.com');
});

//Runs only this test

test.only('Run only this test', async ({ page }) => {
  await page.goto('https://example.com');
});

//Useful for debugging, but don’t commit this in production!

// Mark test as expected to

test.fail('Expected to fail', async ({ page }) => {


  await page.goto('https://facebook.com');
  expect(1).toBe(2); // intentionally failing
});

// Test is known broken / not implemented

test.fixme('Feature not ready', async ({ page }) => {
  await page.goto('https://example.com');
});

//It will be skipped but marked as "needs fixing"

// Marks test as slow

test ('Slow test example', async ({ page }) => {
  test.slow();

  await page.goto('https://facebook.com');
});

//Timeout is automatically increased (3x)

// Custom timeout for a test

test('Custom timeout', async ({ page }) => {
  test.setTimeout(60000); // 60 seconds

  await page.goto('https://google.com');
});




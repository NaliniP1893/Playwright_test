import { test, expect } from '@playwright/test';

test('Google Search bar should accept input', async ({ page }) => {
  // Step 1: Open Google
  await page.goto('https://www.google.com');

  // Step 2: Identify the search bar and enter "Selenium"
  const searchBox = await page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('Selenium');

  // Optionally, verify the value
  await expect(searchBox).toHaveValue('Selenium');
});

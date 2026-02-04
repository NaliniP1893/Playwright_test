import { test, expect } from '@playwright/test';

test('EPAM Careers Data Scientist Search', async ({ page }) => {
  // Step 1: Navigate to epam.com
  await page.goto('https://www.epam.com/');

  // Step 2: Maximize (set to HD size for web)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Step 3: Accept cookies if present
  const acceptAll = page.locator('button', { hasText: /^Accept All$/i });
  if (await acceptAll.isVisible()) {
    await acceptAll.click();
  }

  // Step 4: Click on "Careers" in the top navigation
  await page.getByRole('link', { name: /^Careers$/i }).first().click();

  // Step 5: Click on the "Start Your Search Here" link
  await page.getByRole('link', { name: /Start Your Search Here/i }).click();
  await expect(page).toHaveURL(/careers.epam.com\/en\/jobs/);

  // Step 6: Enter 'Data Scientist' into the search input
  const searchInput = page.getByPlaceholder('Search by Role or Keyword');
  await searchInput.fill('Data Scientist');

  // Optionally, validate that something happened or that results can be interacted with
  await expect(searchInput).toHaveValue('Data Scientist');
});

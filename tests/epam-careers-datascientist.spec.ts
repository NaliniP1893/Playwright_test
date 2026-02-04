import { test, expect } from '@playwright/test';

test('EPAM Careers Data Scientist Search', async ({ page }) => {
  // 1. Open the browser & navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // 2. Maximize (set viewport to a large desktop size)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // 3. Accept "ACCEPT ALL" cookie consent if present
  const acceptAll = page.getByRole('button').first();
  if (await acceptAll.isVisible()) {
    await acceptAll.click();
  }

  // 4. Click on 'Careers' link in the main navigation
  await page.getByRole('link', { name: /Careers/i }).first().click();
  await page.waitForURL('**/careers');

  // 5. Click on the "Start Your Search Here" link
  await page.getByRole('link', { name: /Start Your Search Here/i }).click();
  await page.waitForURL(/careers\.epam\.com\/en\/jobs/i);

  // 6. Scroll to the 'Keyword' input and enter 'Data Scientist'
  const keywordInput = page.getByPlaceholder('Search by Role or Keyword');
  await expect(keywordInput).toBeVisible();
  await keywordInput.type('Data Scientist');

  // 7. Close browser is handled by Playwright test runner
});

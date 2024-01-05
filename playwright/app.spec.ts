import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await expect(page.getByText('Welcome, John!')).toBeHidden()
  console.log(page.url())
})

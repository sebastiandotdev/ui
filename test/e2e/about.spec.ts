import { test, expect } from '@playwright/test'
import { TEST_SERVER_LOCAL } from '../test-server'

test.describe('Test page about', () => {
  test('should show title page about', async ({ page }) => {
    const TITLE_PAGE = 'About the ex.iphones.'
    await page.goto(`${TEST_SERVER_LOCAL}/about`)

    await expect(page.getByText(TITLE_PAGE)).toBeVisible()
  })
})

import { test, expect } from '@playwright/test'
import { TEST_SERVER_LOCAL } from '../test-server'

test('should show title in home', async ({ page }) => {
  await page.goto(TEST_SERVER_LOCAL)

  await expect(page.getByText('Welcome, John!')).toBeHidden()
  await expect(page.getByText('Hola a todos')).toBeVisible()
})

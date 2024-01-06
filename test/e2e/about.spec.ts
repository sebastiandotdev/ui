import { test, expect } from '@playwright/test'
import { TEST_SERVER_LOCAL } from '../test-server'

test.describe('Test page about', () => {
  test('should show title page about', async ({ page }) => {
    const TITLE_PAGE = 'About the ex.iphones.'
    await page.goto(`${TEST_SERVER_LOCAL}/about`)

    await expect(page.getByText(TITLE_PAGE)).toBeVisible()
    await expect(page.getByText(TITLE_PAGE)).not.toBeHidden()
  })

  test('should show name user', async ({ page }) => {
    const NAME_USER = 'Feyz ibrahim'
    await page.goto(`${TEST_SERVER_LOCAL}/about`)

    await expect(page.getByText(NAME_USER)).toBeVisible()
    await expect(page.getByText(NAME_USER)).not.toBeHidden()
  })

  test('should show image', async ({ page }) => {
    await page.goto(`${TEST_SERVER_LOCAL}/about`)

    await expect(
      page.getByRole('img', { name: 'Lynx description tags dev' }),
    ).toBeVisible()

    await expect(
      page.getByRole('img', { name: 'Lynx description tags dev' }),
    ).not.toBeHidden()
  })

  test('should show social network', async ({ page }) => {
    await page.goto(`${TEST_SERVER_LOCAL}/about`)
    await page.getByRole('main').getByRole('link').first().click()
  })
})

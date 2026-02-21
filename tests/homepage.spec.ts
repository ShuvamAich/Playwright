import { test, expect } from '@playwright/test';

test('navigate to homepage', async ({ page }) => {
    await page.goto('https://shuvamaich.github.io/');
    await expect(page).toHaveURL('https://shuvamaich.github.io/');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
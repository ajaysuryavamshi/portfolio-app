import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should render the landing page and navigate to project details', async ({ page }) => {
    // 1. Load landing page
    await page.goto('http://localhost:3000');
    
    // 2. Verify Hero Section
    await expect(page.locator('h1')).toContainText('Engineering Scalable');
    
    // 3. Verify Skill Matrix presence
    await expect(page.locator('text=The Engineer\'s Toolbelt')).toBeVisible();
    
    // 4. Navigate to the first project card
    const firstProjectLink = page.locator('a[href^="/projects/"]').first();
    await expect(firstProjectLink).toBeVisible();
    await firstProjectLink.click();
    
    // 5. Verify we are on the project detail page
    await expect(page).toHaveURL(/.*\/projects\/.*/);
    await expect(page.locator('h1')).toBeVisible();
    
    // 6. Verify STAR sections are present
    await expect(page.locator('text=The Challenge')).toBeVisible();
    await expect(page.locator('text=The Objective')).toBeVisible();
    await expect(page.locator('text=The Engineering')).toBeVisible();
    await expect(page.locator('text=The Impact')).toBeVisible();
    
    // 7. Test "Back to Portfolio" navigation
    await page.locator('text=Back to Portfolio').click();
    await expect(page).toHaveURL('/');
  });
});
